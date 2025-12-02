# Blog systém - Technická dokumentace

Tento dokument vysvětluje jak funguje načítání blog článků s MDSvex v SvelteKit static prerender režimu.

## 📋 Přehled architektury

```
src/content/blog/*.md          (Markdown články s frontmatter)
        ↓
    MDSvex preprocessor         (Kompilace do Svelte komponent)
        ↓
    import.meta.glob()          (Načtení modulů)
        ↓
    metadata + default export   (Frontmatter + renderovací funkce)
        ↓
    +page.server.ts / +page.ts  (Load funkce)
        ↓
    +page.svelte                (Zobrazení)
```

---

## 1️⃣ MDSvex konfigurace

**Soubor:** `svelte.config.js`

```javascript
import { mdsvex } from 'mdsvex';

const config = {
    preprocess: [
        vitePreprocess(), 
        mdsvex({
            extensions: ['.md', '.svx']  // Podporované přípony
        })
    ],
    extensions: ['.svelte', '.svx', '.md']  // SvelteKit bude zpracovávat i .md
};
```

### Co to dělá?

1. **MDSvex preprocessor** kompiluje `.md` soubory do Svelte komponent
2. **Frontmatter** (YAML mezi `---`) se extrahuje jako `metadata` export
3. **Markdown obsah** se zkompiluje do Svelte `default` exportu (funkce pro render)

---

## 2️⃣ Struktura Markdown článku

**Soubor:** `src/content/blog/001_blog_AISCR.md`

```markdown
---
slug: blog-aiscr-vic-nez-aktuality
title: "Blog AIS CR: víc než jen aktuality"
excerpt: "Proč vzniká Blog AIS CR..."
date: "2025-11-30"
category: "AIS CR"
published: true
locale: "cs"
readingTime: "4 minuty"
author: "Tým AIS CR"
authorRole: "Archeologický informační systém"
authorImage: "/images/people/ais-staff.webp"
image: "/images/blog/001/001_000_nahled.webp"
---

## Chceme mluvit více „po lopatě"

Text článku v markdown formátu...

![Obrázek](/images/blog/001/001_001.webp)
```

### Frontmatter parametry:

| Parametr | Typ | Povinný | Popis |
|----------|-----|---------|-------|
| `slug` | string | ✅ | URL identifikátor (bez diakritiky) |
| `title` | string | ✅ | Název článku |
| `excerpt` | string | ✅ | Krátký popis pro preview |
| `date` | string | ✅ | Datum ve formátu YYYY-MM-DD |
| `category` | string | ✅ | Kategorie ("AIS CR", "Technologie", ...) |
| `published` | boolean | ✅ | `true` = viditelný, `false` = skrytý |
| `locale` | string | ✅ | Jazyk článku ("cs" nebo "en") |
| `readingTime` | string | ✅ | Odhad času čtení |
| `author` | string | ✅ | Jméno autora |
| `authorRole` | string | ✅ | Role/pozice autora |
| `authorImage` | string | ✅ | Cesta k fotce autora |
| `image` | string | ✅ | Hlavní obrázek článku |

---

## 3️⃣ MDSvex kompilace

### Co MDSvex vytvoří z markdown souboru?

**Input:** `001_blog_AISCR.md`

**Output (zjednodušeně):**

```javascript
// Kompilovaný modul
export const metadata = {
    slug: "blog-aiscr-vic-nez-aktuality",
    title: "Blog AIS CR: víc než jen aktuality",
    excerpt: "Proč vzniká Blog AIS CR...",
    date: "2025-11-30",
    category: "AIS CR",
    published: true,
    locale: "cs",
    readingTime: "4 minuty",
    author: "Tým AIS CR",
    authorRole: "Archeologický informační systém",
    authorImage: "/images/people/ais-staff.webp",
    image: "/images/blog/001/001_000_nahled.webp"
};

export default function() {
    // Svelte komponenta která renderuje markdown obsah
    return {
        // ... Svelte render funkce ...
    };
}
```

### Jak to použít:

```typescript
// Import modulu
const module = await import('/src/content/blog/001_blog_AISCR.md');

// Přístup k metadatům
module.metadata.title  // "Blog AIS CR: víc než jen aktuality"
module.metadata.slug   // "blog-aiscr-vic-nez-aktuality"

// Přístup k obsahu (render funkce)
const Content = module.default;
// V Svelte: {@render Content()}
```

---

## 4️⃣ Blog Listing - načtení všech článků

**Soubor:** `src/routes/blog/+page.server.ts`

```typescript
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    try {
        // 1. Načti všechny .md soubory z content/blog/
        const allModules = import.meta.glob('/src/content/blog/*.md', { eager: true });
        
        // 2. Extrahuj metadata z každého modulu
        const posts = Object.entries(allModules)
            .map(([_path, module]) => {
                const { metadata } = module as any;
                
                return {
                    slug: metadata.slug,
                    title: metadata.title || 'Bez názvu',
                    excerpt: metadata.excerpt || '',
                    date: metadata.date || new Date().toISOString().split('T')[0],
                    category: metadata.category || '',
                    published: metadata.published !== false
                };
            })
            .filter(post => post.published)  // 3. Filtruj pouze publikované
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());  // 4. Seřaď (nejnovější první)

        return {
            posts  // Vrať data do komponenty
        };
    } catch (err) {
        console.error('Error loading blog posts:', err);
        throw error(500, 'Chyba při načítání blog postů');
    }
};
```

### Krok po kroku:

#### Krok 1: `import.meta.glob()`

```typescript
const allModules = import.meta.glob('/src/content/blog/*.md', { eager: true });
```

**Co to vrací:**

```javascript
{
    '/src/content/blog/001_blog_AISCR.md': {
        metadata: { slug: '...', title: '...', ... },
        default: [Function]
    },
    '/src/content/blog/002_DOI.md': {
        metadata: { slug: '...', title: '...', ... },
        default: [Function]
    },
    '/src/content/blog/003_Atrium_Summer_school.md': {
        metadata: { slug: '...', title: '...', ... },
        default: [Function]
    }
}
```

**Důležité parametry:**

- **Pattern:** `/src/content/blog/*.md` - absolutní cesta od root projektu
- **`eager: true`** - načti všechny moduly okamžitě (ne lazy)
- **Výsledek:** Objekt kde klíč = cesta, hodnota = modul

#### Krok 2: Extrakce metadata

```typescript
.map(([_path, module]) => {
    const { metadata } = module as any;
    
    return {
        slug: metadata.slug,
        title: metadata.title || 'Bez názvu',
        // ... další pole z frontmatter
    };
})
```

**Co se děje:**

- `Object.entries()` převede objekt na pole `[cesta, modul]`
- Destructuring: `[_path, module]` - path nepotřebujeme (proto `_`)
- `module.metadata` = frontmatter data
- Vytvoříme nový objekt jen s potřebnými poli

#### Krok 3: Filtrování

```typescript
.filter(post => post.published)
```

Zobrazit jen články kde `published: true`.

#### Krok 4: Řazení

```typescript
.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
```

Seřadit podle data - nejnovější nahoře.

### Použití v komponentě:

**Soubor:** `src/routes/blog/+page.svelte`

```svelte
<script lang="ts">
    import type { PageData } from './$types';
    
    let { data }: { data: PageData } = $props();
</script>

{#each data.posts as post}
    <article>
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
        <a href="/blog/{post.slug}">Číst více</a>
    </article>
{/each}
```

**Typy:** SvelteKit automaticky generuje `PageData` typ z return hodnoty `load()`.

---

## 5️⃣ Blog Detail - načtení jedného článku

**Soubor:** `src/routes/blog/[slug]/+page.ts`

```typescript
import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';

export const load: PageLoad = async ({ params }) => {
    try {
        // 1. Načti všechny články
        const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });
        
        // 2. Vytvoř pole článků s metadaty
        const allArticles = Object.entries(modules).map(([path, module]) => ({
            path,
            module,
            metadata: (module as any).metadata
        }));
        
        // 3. Najdi článek podle slug z URL parametru
        const article = allArticles.find(a => a.metadata.slug === params.slug);
        
        if (!article) {
            throw error(404, 'Blog post nenalezen');
        }

        // 4. Extrahuj metadata a content
        const { metadata, default: content } = article.module as any;

        // 5. Vrať data do komponenty
        return {
            post: {
                title: metadata.title || 'Bez názvu',
                excerpt: metadata.excerpt || '',
                date: metadata.date || new Date().toISOString().split('T')[0],
                category: metadata.category || '',
                slug: params.slug,
                readingTime: metadata.readingTime || '5 minut',
                author: metadata.author || 'AIS CR',
                authorRole: metadata.authorRole || 'Archeologický informační systém',
                authorImage: metadata.authorImage || '/images/people/ais-staff.png',
                image: metadata.image || '/Content.jpg',
                content  // ← Render funkce!
            }
        };
    } catch (err) {
        console.error('Error loading blog post:', err);
        throw error(404, 'Blog post nenalezen');
    }
};

// 6. Entries funkce pro prerender
export const entries: EntryGenerator = async () => {
    const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });
    
    const slugs = Object.entries(modules).map(([path, module]) => {
        const { metadata } = module as any;
        return { slug: metadata.slug };
    });
    
    return slugs;
};
```

### Krok po kroku:

#### Krok 1: Načtení všech modulů

```typescript
const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });
```

Stejné jako v listing - načte všechny .md jako moduly.

#### Krok 2: Mapování s cestou

```typescript
const allArticles = Object.entries(modules).map(([path, module]) => ({
    path,        // '/src/content/blog/001_blog_AISCR.md'
    module,      // { metadata: {...}, default: [Function] }
    metadata: (module as any).metadata
}));
```

Uchovává i cestu (pro debug) a přímý přístup k metadata.

#### Krok 3: Find článku podle slug

```typescript
const article = allArticles.find(a => a.metadata.slug === params.slug);
```

- `params.slug` = URL parametr z `[slug]` složky
- Najde článek kde `metadata.slug` odpovídá

**Příklad:**

- URL: `/blog/doi-v-amcr-digitalni-rodne-cislo`
- `params.slug` = `"doi-v-amcr-digitalni-rodne-cislo"`
- Najde soubor kde `slug: "doi-v-amcr-digitalni-rodne-cislo"`

#### Krok 4: Extrakce metadata a content

```typescript
const { metadata, default: content } = article.module as any;
```

**Destructuring modulu:**

- `metadata` = frontmatter object
- `default` = render funkce (přejmenována na `content`)

#### Krok 5: Return do komponenty

```typescript
return {
    post: {
        title: metadata.title,
        // ... všechna pole z frontmatter
        content  // ← Funkce pro renderování markdown
    }
};
```

**Důležité:** `content` je **funkce**, ne string!

#### Krok 6: Entries funkce

```typescript
export const entries: EntryGenerator = async () => {
    const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });
    
    const slugs = Object.entries(modules).map(([path, module]) => {
        const { metadata } = module as any;
        return { slug: metadata.slug };
    });
    
    return slugs;
};
```

**Co to dělá?**

Říká SvelteKitu: "Pro tuhle dynamickou route `[slug]` vygeneruj HTML pro tyto hodnoty slugů".

**Return value:**

```javascript
[
    { slug: 'blog-aiscr-vic-nez-aktuality' },
    { slug: 'doi-v-amcr-digitalni-rodne-cislo' },
    { slug: 'atrium-3d-summer-school-brno' }
]
```

**SvelteKit pak prerenderuje:**

- `/blog/blog-aiscr-vic-nez-aktuality` → `build/blog/blog-aiscr-vic-nez-aktuality.html`
- `/blog/doi-v-amcr-digitalni-rodne-cislo` → `build/blog/doi-v-amcr-digitalni-rodne-cislo.html`
- `/blog/atrium-3d-summer-school-brno` → `build/blog/atrium-3d-summer-school-brno.html`

**Bez `entries()`:** SvelteKit by nevěděl které slugy prerenderovat!

---

## 6️⃣ Zobrazení článku

**Soubor:** `src/routes/blog/[slug]/+page.svelte`

```svelte
<script lang="ts">
    import type { PageData } from './$types';
    
    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>{data.post.title} - AIS CR Blog</title>
    <meta name="description" content={data.post.excerpt} />
</svelte:head>

<!-- Metadata -->
<h1>{data.post.title}</h1>
<time datetime={data.post.date}>{formatDate(data.post.date)}</time>
<p>{data.post.excerpt}</p>

<!-- Renderování markdown obsahu -->
<article class="prose">
    {@render data.post.content()}
</article>
```

### Klíčový moment: Renderování obsahu

```svelte
{@render data.post.content()}
```

**Co se děje:**

1. `data.post.content` je **funkce** (default export z .md)
2. `{@render ...()}` volá tuto funkci a vloží výsledný Svelte kód
3. Markdown je zkompilovaný do HTML s správnými class, odkazy, atd.

**Výsledný HTML:**

```html
<article class="prose">
    <h2>Chceme mluvit více „po lopatě"</h2>
    <p>Členové týmu AIS CR...</p>
    <img src="/images/blog/001/001_001.webp" alt="Tým AIS CR" />
    <!-- ... více obsahu -->
</article>
```

---

## 7️⃣ import.meta.glob() - Deep Dive

### Syntaxe a parametry

```typescript
import.meta.glob(pattern, options)
```

**Pattern:**
- Absolutní cesta od root projektu
- Podporuje glob patterns: `*.md`, `**/*.md`
- Příklad: `'/src/content/blog/*.md'`

**Options:**

```typescript
{
    eager: true | false,  // true = načíst hned, false = lazy (dynamic import)
    import: 'default' | 'metadata' | string,  // Co importovat
    query: object  // Query parametry
}
```

### Eager vs Lazy

**Eager (`eager: true`):**

```typescript
const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });
// Všechny moduly načteny okamžitě při compile
// modules je objekt s loaded moduly
```

**Lazy (default):**

```typescript
const loaders = import.meta.glob('/src/content/blog/*.md');
// loaders je objekt s import funkcemi
const module = await loaders['/src/content/blog/001_blog_AISCR.md']();
```

**Pro prerender:** Musíš použít `eager: true`, jinak data nebudou v HTML!

### Selective import

```typescript
// Načíst jen metadata
const metadataOnly = import.meta.glob('/src/content/blog/*.md', {
    eager: true,
    import: 'metadata'
});
// Result: { path: metadata, ... }

// Načíst jen default export
const contentOnly = import.meta.glob('/src/content/blog/*.md', {
    eager: true,
    import: 'default'
});
// Result: { path: renderFunction, ... }
```

**My používáme obojí,** proto bez `import` parametru.

---

## 8️⃣ Prerender flow pro blog

### Co se děje při `pnpm build`:

```
1. SvelteKit čte svelte.config.js
   entries: ['/blog', '/en/blog', '/blog/slug', '/en/blog/slug']

2. Pro /blog:
   ├─ Zavolá +page.server.ts load()
   ├─ import.meta.glob() načte všechny .md
   ├─ Extrahuje metadata
   ├─ Vrátí { posts: [...] }
   └─ Renderuje +page.svelte s těmito daty
   → Uloží jako build/blog.html

3. Pro /en/blog:
   ├─ Reroute: /en/blog → /blog (stejná route)
   ├─ +layout.ts: setLocale('en')
   ├─ Zavolá +page.server.ts load() (stejný kód)
   ├─ Renderuje +page.svelte s EN překlady
   └─ Uloží jako build/en/blog.html

4. Pro /blog/slug:
   ├─ Zavolá +page.ts entries()
   ├─ Dostane seznam slugů: [{ slug: 'article-1' }, ...]
   ├─ Pro každý slug:
   │   ├─ Zavolá load({ params: { slug: 'article-1' } })
   │   ├─ import.meta.glob() načte .md
   │   ├─ Najde správný podle slug
   │   ├─ Extrahuje metadata + content
   │   ├─ Renderuje +page.svelte
   │   └─ Uloží jako build/blog/article-1.html
   
5. Pro /en/blog/slug:
   ├─ Reroute: /en/blog/slug → /blog/slug
   ├─ +layout.ts: setLocale('en')
   ├─ entries() vrací stejné slugy
   ├─ Pro každý slug renderuje s EN překladem
   └─ Uloží jako build/en/blog/slug.html
```

---

## 9️⃣ Entries funkce - pro prerender dynamických routes

### Problém:

Máš dynamickou route: `src/routes/blog/[slug]/+page.svelte`

SvelteKit neví které hodnoty `slug` má prerenderovat.

### Řešení: Entries funkce

```typescript
export const entries: EntryGenerator = async () => {
    // Načti všechny .md
    const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });
    
    // Extrahuj slugy
    const slugs = Object.entries(modules).map(([path, module]) => {
        const { metadata } = module as any;
        return { slug: metadata.slug };
    });
    
    // Vrať pole objektů odpovídající params
    return slugs;
};
```

**Return type:**

```typescript
Array<{ slug: string }>

// Příklad:
[
    { slug: 'blog-aiscr-vic-nez-aktuality' },
    { slug: 'doi-v-amcr-digitalni-rodne-cislo' }
]
```

**SvelteKit pak zavolá `load()` pro každý:**

```typescript
load({ params: { slug: 'blog-aiscr-vic-nez-aktuality' } })
load({ params: { slug: 'doi-v-amcr-digitalni-rodne-cislo' } })
// ...
```

### Můžeš vrátit více parametrů:

Pro route `src/routes/archive/[year]/[month]/+page.svelte`:

```typescript
export const entries = async () => {
    return [
        { year: '2024', month: '01' },
        { year: '2024', month: '02' },
        { year: '2025', month: '11' }
    ];
};
```

---

## 🔟 Zobrazení markdown obsahu

### V komponentě:

```svelte
<script lang="ts">
    let { data }: { data: PageData } = $props();
</script>

<article class="prose">
    {@render data.post.content()}
</article>
```

### Co je `content`?

**Typ:** Svelte render funkce (snippet)

**Interně (po MDSvex kompilaci):**

```javascript
content = () => {
    return `<h2>Nadpis</h2>
            <p>Text s <strong>tučným</strong> písmem.</p>
            <img src="/image.webp" alt="..." />`;
}
```

### Proč `{@render}` a ne `{@html}`?

```svelte
<!-- ❌ NEFUNGUJE -->
{@html data.post.content()}

<!-- ✅ SPRÁVNĚ -->
{@render data.post.content()}
```

**Důvod:**

- `{@html}` očekává **string**
- `content` je **Svelte funkce**, ne HTML string
- `{@render}` volá Svelte snippet/funkci

---

## 1️⃣1️⃣ +page.server.ts vs +page.ts

### Kdy použít který?

| Soubor | Běží kde | Přístup k | Použij pro |
|--------|----------|-----------|------------|
| `+page.server.ts` | Jen server | DB, env vars, cookies | Server-only data |
| `+page.ts` | Server + klient | Veřejná data | Universal data |

### V našem projektu:

**Blog listing:** `+page.server.ts`
- Běží jen na serveru (při prerenderu)
- Načítá .md soubory (file system)
- Data jsou serializovaná do HTML

**Blog detail:** `+page.ts`
- Běží na serveru i klientovi
- Načítá .md soubory
- Obsahuje `entries()` funkci (jen server funkce)

**Proč detail není `.server.ts`?**

- Není to nutné (data jsou veřejná)
- `.ts` je universal = menší omezení
- Funguje stejně při prerenderu

---

## 1️⃣2️⃣ Complete Example - Od .md k HTML

### Input: Markdown soubor

**`src/content/blog/002_DOI.md`:**

```markdown
---
slug: doi-v-amcr-digitalni-rodne-cislo
title: "Identifikátor DOI v AMČR"
excerpt: "Co je DOI a proč je důležitý?"
date: "2025-11-30"
category: "Technologie"
published: true
locale: "cs"
readingTime: "4 minuty"
author: "Tomáš Pavloň"
authorRole: "Datový kurátor AMČR"
authorImage: "/images/people/ais-staff.webp"
image: "/images/blog/002/002_000_nahled.webp"
---

## Co je DOI?

DOI je perzistentní identifikátor...

![Struktura DOI](/images/blog/002/002_001.webp)
```

### MDSvex kompilace:

```javascript
// Kompilovaný output (zjednodušeně)
export const metadata = {
    slug: "doi-v-amcr-digitalni-rodne-cislo",
    title: "Identifikátor DOI v AMČR",
    excerpt: "Co je DOI a proč je důležitý?",
    // ... všechna pole z frontmatter
};

export default function() {
    return `<h2>Co je DOI?</h2>
            <p>DOI je perzistentní identifikátor...</p>
            <img src="/images/blog/002/002_001.webp" alt="Struktura DOI" />`;
}
```

### Load funkce (detail):

```typescript
// +page.ts
const article = allArticles.find(a => a.metadata.slug === params.slug);
// article.metadata = { slug: "doi-v-amcr...", title: "...", ... }
// article.module.default = render funkce

return {
    post: {
        ...metadata,
        content: article.module.default
    }
};
```

### Komponenta:

```svelte
<!-- +page.svelte -->
<script>
    let { data } = $props();
</script>

<h1>{data.post.title}</h1>
<!-- Identifikátor DOI v AMČR -->

<p>{data.post.excerpt}</p>
<!-- Co je DOI a proč je důležitý? -->

<article>
    {@render data.post.content()}
    <!-- Renderuje celý markdown obsah -->
</article>
```

### Output HTML:

```html
<!-- build/blog/doi-v-amcr-digitalni-rodne-cislo.html -->
<!DOCTYPE html>
<html lang="cs">
<head>
    <title>Identifikátor DOI v AMČR - AIS CR Blog</title>
    <meta name="description" content="Co je DOI a proč je důležitý?" />
</head>
<body>
    <h1>Identifikátor DOI v AMČR</h1>
    <p>Co je DOI a proč je důležitý?</p>
    
    <article>
        <h2>Co je DOI?</h2>
        <p>DOI je perzistentní identifikátor...</p>
        <img src="/images/blog/002/002_001.webp" alt="Struktura DOI" />
    </article>
</body>
</html>
```

---

## 1️⃣3️⃣ TypeScript typy

### Automaticky generované typy

SvelteKit generuje `$types` pro každou route:

```typescript
// .svelte-kit/types/src/routes/blog/$types.d.ts

export type PageServerLoad = (event: ServerLoadEvent) => MaybePromise<{
    posts: Array<{
        slug: string;
        title: string;
        excerpt: string;
        // ...
    }>;
}>;

export type PageData = Awaited<ReturnType<PageServerLoad>>;
```

### Použití:

```typescript
// +page.server.ts
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    return {
        posts: [...]  // TypeScript ověří strukturu
    };
};
```

```svelte
<!-- +page.svelte -->
<script lang="ts">
    import type { PageData } from './$types';
    
    let { data }: { data: PageData } = $props();
    // data.posts je type-safe!
</script>
```

---

## 1️⃣4️⃣ Časté otázky

### Q: Proč `eager: true`?

**A:** Pro prerender musí být data dostupná během SSR. Lazy loading by vrátil promises, ne data.

```typescript
// ❌ ŠPATNĚ pro prerender
const modules = import.meta.glob('*.md');  // eager: false (default)
const module = await modules[path]();  // Dynamic import

// ✅ SPRÁVNĚ pro prerender
const modules = import.meta.glob('*.md', { eager: true });
const module = modules[path];  // Už načteno
```

### Q: Proč `as any`?

**A:** TypeScript neví o struktuře MDSvex modulů:

```typescript
const { metadata } = module as any;
```

Lepší by bylo:

```typescript
type MDSvexModule = {
    metadata: {
        slug: string;
        title: string;
        // ... všechna pole
    };
    default: () => any;
};

const { metadata } = module as MDSvexModule;
```

### Q: Můžu použít jiný markdown procesor?

**A:** Ano, ale MDSvex je nejlepší pro Svelte:

- ✅ Svelte komponenty v markdown
- ✅ Frontmatter → metadata export
- ✅ Automatická kompilace
- ✅ TypeScript podpora

Alternativy: `marked`, `remark`, ale pak musíš ručně parsovat frontmatter.

### Q: Jak přidat Svelte komponentu do markdown?

**A:** MDSvex to podporuje!

```markdown
---
slug: article
---

## Nadpis

<script>
    import Button from '$lib/Button.svelte';
</script>

Normální text.

<Button>Klikni</Button>

Další text.
```

Ale pro náš use-case (čisté články) to nepotřebujeme.

---

## 1️⃣5️⃣ Debugging

### Zkontrolovat že MDSvex kompiluje:

```bash
# Build a hledej error
pnpm build

# Mělo by projít bez chyb:
# "✓ built in X.XXs"
```

### Zkontrolovat metadata:

```typescript
// Dočasně v +page.server.ts
const allModules = import.meta.glob('/src/content/blog/*.md', { eager: true });
console.log(Object.keys(allModules));
// → ['/src/content/blog/001_blog_AISCR.md', ...]

const module = Object.values(allModules)[0] as any;
console.log(module.metadata);
// → { slug: '...', title: '...', ... }
```

### Zkontrolovat vygenerovaný HTML:

```bash
# Otevřít build output
cat build/blog/doi-v-amcr-digitalni-rodne-cislo.html

# Mělo by obsahovat:
# - <html lang="cs">
# - Název článku
# - Renderovaný markdown obsah
# - Obrázky
```

---

## 1️⃣6️⃣ Shrnutí klíčových bodů

### MDSvex:

✅ Kompiluje `.md` → Svelte modul  
✅ Frontmatter → `export const metadata`  
✅ Markdown obsah → `export default` (render funkce)  

### import.meta.glob():

✅ Načte všechny .md soubory jako moduly  
✅ `eager: true` = okamžité načtení (pro prerender)  
✅ Vrací objekt: `{ cesta: modul }`  

### entries() funkce:

✅ Říká SvelteKitu které slugy prerenderovat  
✅ Musí být v `+page.ts` (ne `.server.ts`)  
✅ Return: pole objektů odpovídajících params  

### load() funkce:

✅ Načte data pro stránku  
✅ Použije `params.slug` pro find článku  
✅ Vrátí metadata + content render funkci  

### Zobrazení:

✅ `{@render data.post.content()}` - renderuje markdown  
✅ Ne `{@html}` - content je funkce, ne string  

---

**Pro více detailů o statickém prerenderu:** [I18N_STATIC_PRERENDER.md](I18N_STATIC_PRERENDER.md)



