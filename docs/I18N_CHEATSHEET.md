# i18n Cheat Sheet - Statický Prerender

Rychlá reference pro práci s jazyky ve statickém SvelteKit webu.

## 🌍 URL Struktura

```
/                 → index.html (CS)
/en               → en.html (EN)
/blog             → blog.html (CS)
/en/blog          → en/blog.html (EN)
/blog/slug        → blog/slug.html (CS UI + CS obsah)
/en/blog/slug     → en/blog/slug.html (EN UI + CS obsah)
```

## 🔧 Detekce locale

### Server-side (SSR/Prerender)

```typescript
// hooks.server.ts
const locale = url.pathname.startsWith('/en') ? 'en' : 'cs';

// +layout.ts
export const load = ({ url }) => {
    const locale = url.pathname.startsWith('/en') ? 'en' : 'cs';
    setLocale(locale);
};
```

### Client-side

```svelte
<script>
    import { setLocale } from '$lib/paraglide/runtime';
    import { onMount } from 'svelte';
    
    let currentLocale = $state('cs');
    
    onMount(() => {
        currentLocale = window.location.pathname.startsWith('/en') ? 'en' : 'cs';
        setLocale(currentLocale);
    });
</script>
```

## 🔗 Odkazy (locale-aware)

### Helper funkce

```svelte
<script>
    function getBasePath(): string {
        return currentLocale === 'en' ? '/en' : '';
    }
    
    function getBlogUrl(slug: string): string {
        return currentLocale === 'en' ? `/en/blog/${slug}` : `/blog/${slug}`;
    }
</script>
```

### Použití

```svelte
<!-- Homepage -->
<a href={currentLocale === 'en' ? '/en' : '/'}>Logo</a>

<!-- Hash odkazy -->
<a href="{getBasePath()}/#services">Services</a>
<a href="{getBasePath()}/#blog">Blog</a>

<!-- Blog odkazy -->
<a href={getBlogUrl('doi-article')}>Article</a>
<a href={currentLocale === 'en' ? '/en/blog' : '/blog'}>Blog list</a>
```

## 🔀 Language Switcher

```svelte
<script>
    function toggleLocale() {
        const currentPath = window.location.pathname;
        const hash = window.location.hash;
        
        if (currentLocale === 'cs') {
            window.location.href = '/en' + currentPath + hash;
        } else {
            const newPath = currentPath.replace(/^\/en/, '') || '/';
            window.location.href = newPath + hash;
        }
    }
</script>

<button onclick={toggleLocale}>
    {currentLocale}
</button>
```

## 📄 Prerender konfigurace

```javascript
// svelte.config.js
prerender: {
    entries: [
        '/',
        '/en',
        '/blog',
        '/en/blog',
        '/blog/slug',      // ← Každý článek
        '/en/blog/slug',   // ← 2x (CS + EN)
    ]
}
```

## 📝 Blog articles

```typescript
// +page.ts - entries funkce
export const entries = async () => {
    const slugs = ['article-1', 'article-2'];
    return slugs.flatMap(slug => [
        { slug },              // CS verze
        { slug, locale: 'en' } // EN verze
    ]);
};
```

## 💬 Překlady v komponentách

```svelte
<script>
    import { m } from '$lib/paraglide/messages.js';
</script>

<!-- Základní -->
{m['hero.title']()}

<!-- HTML -->
{@html m['hero.description']()}

<!-- Parametry -->
{m['blog.readTime']({ time: '5 minut' })}

<!-- Dynamické klíče -->
{(m as any)[`features.${key}.title`]()}
```

## 🎨 Podmíněný obsah podle jazyka

```svelte
<script>
    import { getLocale } from '$lib/paraglide/runtime';
    
    const locale = getLocale();
    const isEnglish = locale === 'en';
</script>

<!-- Podmíněné obrázky -->
<img src="/logos/{isEnglish ? 'logo-en.png' : 'logo-cs.png'}" />

<!-- Podmíněný text -->
{#if isEnglish}
    <p>English content</p>
{:else}
    <p>České obsahy</p>
{/if}
```

## ⚡ Common Patterns

### Homepage link

```svelte
<a href={locale === 'en' ? '/en' : '/'}>Home</a>
```

### Section anchors

```svelte
<a href="{getBasePath()}/#services">Services</a>
```

### Blog listing link

```svelte
<a href={locale === 'en' ? '/en/blog' : '/blog'}>Blog</a>
```

### Blog article link

```svelte
<a href={locale === 'en' ? `/en/blog/${slug}` : `/blog/${slug}`}>Article</a>
```

### Back to blog

```svelte
<a href={locale === 'en' ? '/en/blog' : '/blog'}>Back</a>
```

## 🚫 Co NEDĚLAT

```svelte
<!-- ❌ ŠPATNĚ - hardcoded locale -->
<a href="/#services">Services</a>
<a href="/blog">Blog</a>

<!-- ❌ ŠPATNĚ - setLocale bez navigace -->
<button onclick={() => setLocale('en')}>EN</button>

<!-- ❌ ŠPATNĚ - getLocale() při SSR bez init -->
const locale = getLocale(); // Může být undefined

<!-- ❌ ŠPATNĚ - data loading v onMount -->
onMount(() => {
    blogPosts = loadPosts(); // Nebude v HTML!
});
```

## ✅ CO DĚLAT

```svelte
<!-- ✅ SPRÁVNĚ - locale-aware odkazy -->
<a href="{getBasePath()}/#services">Services</a>

<!-- ✅ SPRÁVNĚ - navigace na jinou URL -->
<button onclick={toggleLocale}>EN</button>

<!-- ✅ SPRÁVNĚ - init locale v +layout.ts -->
export const load = ({ url }) => {
    setLocale(url.pathname.startsWith('/en') ? 'en' : 'cs');
};

<!-- ✅ SPRÁVNĚ - synchronní data loading -->
const blogPosts = import.meta.glob(..., { eager: true });
```

---

## 🔍 Debug Tips

### Zkontrolovat vygenerované HTML

```bash
# Zkontrolovat lang atribut
head -2 build/index.html  # lang="cs"
head -2 build/en.html     # lang="en"

# Zkontrolovat že obsahuje přeložený text
grep "Služby" build/index.html
grep "Services" build/en.html
```

### Zkontrolovat odkazy

```bash
# Najít odkazy bez locale prefix
grep 'href="/#' build/en.html  # Mělo by vracet href="/en/#"
```

### Zkontrolovat prerender

```bash
# Všechny vygenerované HTML
find build -name "*.html" | sort

# Mělo by být párově
build/blog.html
build/en/blog.html
build/blog/slug.html
build/en/blog/slug.html
```

---

**Pro více detailů:** [I18N_STATIC_PRERENDER.md](I18N_STATIC_PRERENDER.md)



