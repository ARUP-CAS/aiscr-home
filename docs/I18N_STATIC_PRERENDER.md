# Přechod na statické prerender s internacionalizací

Tento dokument popisuje všechny změny potřebné pro přechod z dynamického server-rendered řešení na čistě statické prerender s podporou více jazyků pomocí URL prefixů.

## 🎯 Cíl

- **Česká verze:** Staticky prerenderovaná na root URL `/`
- **Anglická verze:** Staticky prerenderovaná na `/en/` prefixované URL
- **Blog:** Pouze český obsah, anglická verze má anglické UI kolem českých článků
- **Žádný runtime:** Vše je prerendované HTML, bez Node.js serveru

---

## 📋 Přehled změn

### 1. Adapter změna

**Soubor:** `svelte.config.js`

**Před:**
```javascript
import adapter from '@sveltejs/adapter-vercel';

adapter: adapter()
```

**Po:**
```javascript
import adapter from '@sveltejs/adapter-static';

adapter: adapter({
    pages: 'build',
    assets: 'build',
    fallback: undefined,
    precompress: false,
    strict: true
})
```

**Důvod:** `adapter-static` generuje statické HTML soubory místo serverless funkcí.

---

### 2. Explicitní prerender routes

**Soubor:** `svelte.config.js`

**Přidáno:**
```javascript
prerender: {
    entries: [
        '/',                    // CS homepage
        '/en',                  // EN homepage
        '/blog',                // CS blog list
        '/en/blog',             // EN blog list
        // Explicitně každý blog post pro obě verze
        '/blog/blog-aiscr-vic-nez-aktuality',
        '/en/blog/blog-aiscr-vic-nez-aktuality',
        '/blog/doi-v-amcr-digitalni-rodne-cislo',
        '/en/blog/doi-v-amcr-digitalni-rodne-cislo',
        // ...
    ],
    handleHttpError: 'warn',
    handleMissingId: 'warn'
}
```

**Důvod:** 
- SvelteKit neumí automaticky crawlovat `/en/` verze
- Blog slugy se musí explicitně vypsat pro prerender
- Bez tohoto by se vygenerovalo jen `/` a ne `/en/`

---

### 3. Server hooks - locale detection z URL

**Soubor:** `src/hooks.server.ts`

**Před:**
```typescript
import { paraglideMiddleware } from '$lib/paraglide/server';

export const handle: Handle = ({ event, resolve }) =>
    paraglideMiddleware(event.request, ({ request, locale }) => {
        event.request = request;
        return resolve(event, {
            transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
        });
    });
```

**Po:**
```typescript
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    const url = new URL(event.request.url);
    const locale = url.pathname.startsWith('/en') ? 'en' : 'cs';

    return resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
    });
};
```

**Důvod:**
- `paraglideMiddleware` je určen pro dynamické runtime řešení
- Pro prerender stačí jednoduchá detekce z URL pathname
- Žádné cookies, žádné dynamické přepínání

---

### 4. Layout load function - locale init

**Soubor:** `src/routes/+layout.ts`

**Vytvořeno nově:**
```typescript
import { setLocale } from '$lib/paraglide/runtime';
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = async ({ url }) => {
    const locale = url.pathname.startsWith('/en') ? 'en' : 'cs';
    setLocale(locale);
    return {};
};
```

**Důvod:**
- Během SSR/prerender se musí nastavit locale podle URL
- `prerender = true` zajistí že se vše generuje do statického HTML
- `setLocale()` nastaví Paraglide kontext pro překlady

---

### 5. Layout component - client-side hydration

**Soubor:** `src/routes/+layout.svelte`

**Přidáno:**
```svelte
<script lang="ts">
    import { setLocale } from '$lib/paraglide/runtime';
    import { onMount } from 'svelte';

    // Initialize locale from URL on mount (for client-side hydration)
    onMount(() => {
        if (typeof window !== 'undefined') {
            const locale = window.location.pathname.startsWith('/en') ? 'en' : 'cs';
            setLocale(locale);
        }
    });
</script>
```

**Důvod:**
- Po hydrataci na klientovi se musí znovu nastavit locale
- Jinak by klient měl jiný locale než prerendované HTML (hydration mismatch)

---

### 6. Blog server load - odstranění locale filtru

**Soubor:** `src/routes/blog/+page.server.ts`

**Před:**
```typescript
const locale = getLocale();
const posts = Object.entries(allModules)
    .map(...)
    .filter(post => post.published && post.locale === locale);  // ← filtrace
```

**Po:**
```typescript
const posts = Object.entries(allModules)
    .map(([_path, module]) => ({ ... }))
    .filter(post => post.published);  // Bez locale filtru
```

**Důvod:**
- Blog články jsou pouze v češtině
- Na `/blog/` i `/en/blog/` se zobrazují stejné články
- Liší se jen UI (překlady okolo článku)

---

### 7. Blog detail - entries pro oba locales

**Soubor:** `src/routes/blog/[slug]/+page.ts`

**Přidáno:**
```typescript
export const entries = async () => {
    const allModules = import.meta.glob('/src/content/blog/*.md', { eager: true });
    const slugs = Object.values(allModules).map((module: any) => module.metadata.slug);
    const uniqueSlugs = Array.from(new Set(slugs));

    return uniqueSlugs.flatMap(slug => [
        { slug },              // Pro /blog/slug
        { slug, locale: 'en' } // Pro /en/blog/slug
    ]);
};
```

**Důvod:**
- Bez `entries()` by SvelteKit nevěděl, které slugy má prerenderovat
- Každý slug musí být vygenerován 2x (CS a EN verze)
- EN verze má anglické UI, ale český článek

---

### 8. Navigační odkazy - locale-aware URLs

**Soubory:** `src/lib/components/Header.svelte`, `Footer.svelte`, `BlogPreview.svelte`, `src/routes/blog/+page.svelte`, `src/routes/blog/[slug]/+page.svelte`

**Problém:**
```svelte
<!-- ❌ Vede vždy na CS verzi -->
<a href="/#services">Services</a>
<a href="/blog/slug">Article</a>
```

**Řešení:**
```svelte
<script>
    let currentLocale = $state('cs');
    
    onMount(() => {
        currentLocale = window.location.pathname.startsWith('/en') ? 'en' : 'cs';
    });
    
    function getBasePath(): string {
        return currentLocale === 'en' ? '/en' : '';
    }
    
    function getBlogUrl(slug: string): string {
        return currentLocale === 'en' ? `/en/blog/${slug}` : `/blog/${slug}`;
    }
</script>

<!-- ✅ Správně - respektuje locale -->
<a href="{getBasePath()}/#services">Services</a>
<a href={getBlogUrl(post.slug)}>Article</a>
```

**Důvod:**
- Statický web nemá server pro detekci locale
- Locale se musí detekovat z URL na klientovi
- Všechny odkazy musí zahrnovat `/en` prefix pro anglickou verzi

---

### 9. Language switcher - URL navigation

**Soubor:** `src/lib/components/Header.svelte`

**Před:**
```svelte
function toggleLocale() {
    setLocale(getLocale() === 'cs' ? 'en' : 'cs');
}
```

**Po:**
```svelte
function toggleLocale() {
    if (typeof window === 'undefined') return;
    
    const currentPath = window.location.pathname;
    const hash = window.location.hash;
    
    if (currentLocale === 'cs') {
        // Switch to English: add /en prefix
        window.location.href = '/en' + currentPath + hash;
    } else {
        // Switch to Czech: remove /en prefix
        const newPath = currentPath.replace(/^\/en/, '') || '/';
        window.location.href = newPath + hash;
    }
}
```

**Důvod:**
- Statický web má separátní HTML soubory pro CS a EN
- Přepnutí jazyka = navigace na jinou URL
- Volání `setLocale()` samo o sobě nenačte jinou stránku

---

### 10. BlogPreview - synchronní loading místo onMount

**Soubor:** `src/lib/components/BlogPreview.svelte`

**Před:**
```svelte
let blogPosts = $state<any[]>([]);

onMount(async () => {
    const allModules = import.meta.glob('/src/content/blog/*.md', { eager: true });
    const posts = Object.entries(allModules).map(...);
    blogPosts = posts;
});
```

**Po:**
```svelte
// Synchronní načtení při SSR/prerender
const allModules = import.meta.glob('/src/content/blog/*.md', { eager: true });
const posts = Object.entries(allModules)
    .map(([_path, module]) => ({ ... }))
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

let blogPosts = $state<any[]>(posts);
```

**Důvod:**
- `onMount` se spustí jen na klientovi, ne během prerender
- Prerendované HTML by mělo prázdný seznam článků
- Synchronní načtení zajistí že posty jsou v HTML

---

### 11. Blog translations - UI vs Content

**Soubor:** `src/routes/blog/[slug]/+page.svelte`

**Přidáno do `messages/cs.json` a `messages/en.json`:**
```json
{
    "blog.backToBlog": "Zpět na blog" / "Back to blog",
    "blog.author": "Autor" / "Author",
    "blog.share": "Sdílej!" / "Share",
    "blog.published": "Publikováno" / "Published",
    "blog.readTime": "Čas čtení: {time}" / "Reading time: {time}"
}
```

**Změna v komponentě:**
```svelte
<!-- Před (hardcoded CS) -->
<p>Čas čtení: {data.post.readingTime}</p>

<!-- Po (přeložené) -->
<p>{m['blog.readTime']({ time: data.post.readingTime })}</p>
```

**Důvod:**
- UI okolo článku musí být přeložené (CS vs EN)
- Samotný článek zůstává v češtině
- `/en/blog/slug` = anglické UI + český obsah článku

---

## 🔑 Klíčové principy

### 1. URL-based Localization

```
/                     → Česká verze (index.html)
/en                   → Anglická verze (en.html)
/blog                 → CS blog list
/en/blog              → EN blog list
/blog/slug            → CS UI + CS článek
/en/blog/slug         → EN UI + CS článek
```

### 2. Locale detection flow

```
SSR/Prerender:
  URL → hooks.server.ts → setLocale() → +layout.ts

Client hydration:
  window.location → +layout.svelte onMount() → setLocale()

Navigation:
  Link click → nová URL → browser načte jiný HTML soubor
```

### 3. Dva HTML soubory pro každou stránku

| Route | CS HTML | EN HTML |
|-------|---------|---------|
| Homepage | `build/index.html` | `build/en.html` |
| Blog list | `build/blog.html` | `build/en/blog.html` |
| Blog detail | `build/blog/slug.html` | `build/en/blog/slug.html` |

### 4. Překladová strategie

| Typ obsahu | CS verze | EN verze |
|------------|----------|----------|
| UI komponenty | České překlady | Anglické překlady |
| Navigace | `m['nav.services']()` | `m['nav.services']()` |
| Blog články | Český obsah | Český obsah |
| Blog UI | České labels | Anglické labels |

---

## 📝 Checklist pro statický i18n web

### ✅ Adapter a konfigurace

- [x] Použít `@sveltejs/adapter-static`
- [x] Nastavit `prerender: true` v root layoutu
- [x] Explicitně vypsat všechny routes v `prerender.entries`
- [x] Vypsat každou stránku 2x (CS a EN prefix)

### ✅ Server hooks

- [x] Odstranit `paraglideMiddleware` (je pro runtime)
- [x] Detekovat locale z `url.pathname`
- [x] Použít `transformPageChunk` pro nastavení `lang` atributu

### ✅ Layout

- [x] `+layout.ts`: `export const prerender = true`
- [x] `+layout.ts`: `setLocale()` podle URL
- [x] `+layout.svelte`: `onMount()` pro re-init locale na klientovi

### ✅ Navigace

- [x] Všechny odkazy musí zahrnovat locale prefix
- [x] Helper funkce: `getBasePath()` vrací `''` nebo `'/en'`
- [x] Logo odkaz: `href={locale === 'en' ? '/en' : '/'}`
- [x] Anchor odkazy: `href="{getBasePath()}/#section"`

### ✅ Language switcher

- [x] Detekovat locale z `window.location.pathname`
- [x] Přepnutí = navigace na jinou URL
- [x] Zachovat hash (`#section`) při přepnutí
- [x] `window.location.href = newPath`

### ✅ Blog

- [x] Single-language articles (pouze CS)
- [x] Odstranit locale filtering ze server load
- [x] `entries()` funkce pro prerender obou verzí
- [x] UI překlady (back to blog, author, share, ...)
- [x] Locale-aware odkazy na články

### ✅ Data loading

- [x] Odstranit `onMount` loading → synchronní načtení
- [x] Data musí být dostupná během SSR/prerender
- [x] `import.meta.glob` s `eager: true`

---

## 🔍 Důležité rozdíly: Runtime vs Prerender

### Runtime (dynamický) přístup:

```typescript
// hooks.server.ts
export const handle = ({ event, resolve }) =>
    paraglideMiddleware(event.request, ...)

// Komponenta
import { setLocale, getLocale } from '$lib/paraglide/runtime';
setLocale('en');  // Funguje runtime
```

**Jak funguje:**
- Server běží a zpracovává requesty
- Locale se detekuje z cookies/headers
- `setLocale()` mění stav globálně
- Jedna route, více jazyků na runtime

### Prerender (statický) přístup:

```typescript
// hooks.server.ts
const locale = url.pathname.startsWith('/en') ? 'en' : 'cs';

// +layout.ts
export const prerender = true;
export const load = ({ url }) => {
    setLocale(url.pathname.startsWith('/en') ? 'en' : 'cs');
};

// Komponenta
onMount(() => {
    const locale = window.location.pathname.startsWith('/en') ? 'en' : 'cs';
    setLocale(locale);
});
```

**Jak funguje:**
- Během buildu se generuje HTML pro každou URL
- Locale se detekuje z URL pathname
- Každá URL má vlastní HTML soubor
- Browser načítá jiný HTML soubor = jiný jazyk

---

## ⚠️ Běžné chyby a řešení

### ❌ Chyba: "Prerender failed - route not found"

**Příčina:** Chybí route v `prerender.entries`

**Řešení:** Přidej explicitně do `svelte.config.js`

### ❌ Chyba: "Locale is undefined"

**Příčina:** `setLocale()` se nevolá během SSR

**Řešení:** Volej `setLocale()` v `+layout.ts` load funkci

### ❌ Chyba: "Links lead to wrong language"

**Příčina:** Hardcoded odkazy bez locale prefix

**Řešení:** Použij `getBasePath()` helper

### ❌ Chyba: "Empty blog preview"

**Příčina:** Data se načítají v `onMount` (client-only)

**Řešení:** Načti data synchronně při import

### ❌ Chyba: "Language switcher doesn't work"

**Příčina:** Volá `setLocale()` místo navigace

**Řešení:** `window.location.href = newPath`

---

## 🔄 Reroute Hook - Klíč k jednoduchosti

**Soubor:** `src/hooks.ts`

```typescript
import { deLocalizeUrl } from '$lib/paraglide/runtime';

export const reroute = (request) => deLocalizeUrl(request.url).pathname;
```

### Co to dělá?

Reroute hook je **mapovací funkce** která SvelteKitu říká, kterou route použít pro danou URL.

**Příklad:**
```
URL požadavek: /en/blog/article
                ↓
deLocalizeUrl(): /blog/article  (odstraní /en prefix)
                ↓
SvelteKit najde: src/routes/blog/[slug]/+page.svelte
```

### Proč to potřebujeme?

**Bez reroute hooku:**
```
src/routes/
├── +page.svelte           (pro /)
├── en/
│   ├── +page.svelte       (pro /en) 
│   └── blog/
│       ├── +page.svelte   (pro /en/blog)
│       └── [slug]/
│           └── +page.svelte (pro /en/blog/slug)
└── blog/
    ├── +page.svelte       (pro /blog)
    └── [slug]/
        └── +page.svelte   (pro /blog/slug)
```

❌ **Duplikace routes** - musíš kopírovat každou route do `en/` složky

**S reroute hookem:**
```
src/routes/
├── +page.svelte           (pro / i /en)
└── blog/
    ├── +page.svelte       (pro /blog i /en/blog)
    └── [slug]/
        └── +page.svelte   (pro /blog/slug i /en/blog/slug)
```

✅ **Jedna route, dva jazyky** - reroute automaticky mapuje

### Jak to funguje při prerenderu?

```
1. SvelteKit vidí entry: '/en/blog'
2. Zavolá reroute hook: '/en/blog' → '/blog'
3. Použije route: src/routes/blog/+page.svelte
4. Během render:
   - +layout.ts detekuje: url.pathname = '/en/blog' → locale = 'en'
   - setLocale('en')
   - Komponenta renderuje s EN překlady
5. Uloží jako: build/en/blog.html
```

### Výhoda:

**DRY princip** - píšeš kód jednou, funguje pro všechny jazyky!

---

## 🎓 Důležité koncepty

### Paraglide v prerenderingu

Paraglide JS je compile-time i18n knihovna, ale:

- ✅ **Funguje s prerenderem** - překlady se kompilují do JS
- ✅ **Žádný runtime overhead** - vše je v bundlu
- ⚠️ **Locale se musí nastavit explicitně** - není automatická detekce
- ⚠️ **Musí se volat při SSR i hydrataci** - jinak hydration mismatch

### URL jako Single Source of Truth

Pro statický web:

```
URL = Locale = Správný HTML soubor
```

- `/services` → `build/services.html` (CS)
- `/en/services` → `build/en/services.html` (EN)

**Vše ostatní (cookies, headers, stores) NEFUNGUJE** pro statický web.

### Static Adapter koncepty

```javascript
adapter: adapter({
    pages: 'build',      // Kam dát HTML
    assets: 'build',     // Kam dát assety
    fallback: undefined, // Žádný 404 fallback (ne SPA)
    strict: true         // Chyby při buildu = fail
})
```

- `pages` a `assets` stejné = flat struktura
- `fallback: undefined` = není SPA, čisté SSG
- `strict: true` = odhalí chybějící prerender

---

## 📊 Srovnání: Před vs Po

| Aspekt | Dynamický (před) | Statický (po) |
|--------|------------------|---------------|
| Server | Node.js/Vercel | Žádný (Nginx) |
| Locale detection | Cookies/headers | URL pathname |
| Language switch | `setLocale()` | `window.location.href` |
| Blog filtr | Podle locale | Všechny články |
| Routes | Automatický crawl | Explicitní entries |
| Data loading | Runtime | Prerender/SSR |
| Deployment | Serverless | Static files |
| Velikost | ~50MB + runtime | ~8MB HTML |

---

## 🚀 Výhody statického řešení

✅ **Rychlost** - žádný server, jen CDN  
✅ **Jednoduchost** - žádný runtime, žádné env vars  
✅ **Bezpečnost** - žádný server = žádné útoky  
✅ **Cena** - Nginx hosting je levnější než serverless  
✅ **Spolehlivost** - žádné cold starts, crashes  

## ⚠️ Omezení

❌ **Nelze měnit locale runtime** - musí se načíst jiný HTML  
❌ **User preference cookies nefungují** - vše je z URL  
❌ **Více stránek** - každá route 2x (CS + EN)  
❌ **Build je pomalejší** - generuje více HTML souborů  

---

## 📚 Reference

- **SvelteKit Static Adapter:** https://svelte.dev/docs/kit/adapter-static
- **Paraglide JS:** https://inlang.com/m/gerre34r/library-inlang-paraglideJs
- **Prerendering:** https://svelte.dev/docs/kit/page-options#prerender

---

**Autor:** AI Assistant  
**Datum:** 30. listopadu 2025  
**Verze:** 1.0

