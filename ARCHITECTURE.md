# Architektura aplikace AIS CR

Tento dokument popisuje obecné principy, architektonické rozhodnutí a konvence používané v této aplikaci.

## 📚 Obsah

1. [Technologický stack](#technologický-stack)
2. [Struktura projektu](#struktura-projektu)
3. [Svelte 5 Runes](#svelte-5-runes)
4. [Komponenty a prop drilling](#komponenty-a-prop-drilling)
5. [Styling s Tailwind CSS 4.0](#styling-s-tailwind-css-40)
6. [Internacionalizace (i18n)](#internacionalizace-i18n)
7. [Routing a prerenderování](#routing-a-prerenderování)
8. [Markdown obsah](#markdown-obsah)
9. [Konvence a best practices](#konvence-a-best-practices)
10. [Deployment](#deployment)

---

## Technologický stack

### Core technologie
- **SvelteKit 2.x** - Full-stack framework pro Svelte
- **Svelte 5** - UI framework s novými runes API
- **TypeScript** - Type-safe JavaScript
- **Vite 7** - Build tool a dev server
- **pnpm** - Rychlý package manager

### Styling
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **@tailwindcss/forms** - Formulářové styly
- **@tailwindcss/typography** - Typografické styly pro markdown
- **Scoped CSS** - Vlastní styly v `<style>` blocích komponent

### Další nástroje
- **Paraglide JS** - i18n řešení pro vícejazyčnost (cs/en)
- **Sdílený newsfeed** - články se stahují za běhu z [aiscr-news](https://github.com/ARUP-CAS/aiscr-news) (viz [docs/NEWSFEED.md](docs/NEWSFEED.md))
- **Lucide Svelte** - Ikony
- **ESLint + Prettier** - Code linting a formátování

---

## Struktura projektu

```
aiscr-home/
├── src/
│   ├── lib/
│   │   ├── components/          # Svelte komponenty
│   │   │   ├── Header.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── Hero.svelte
│   │   │   └── ...
│   │   ├── assets/              # Assets (SVG, ikony)
│   │   └── paraglide/           # Generované i18n soubory
│   ├── routes/                  # SvelteKit routing
│   │   ├── +layout.svelte       # Root layout
│   │   ├── +layout.ts           # Root layout load
│   │   ├── +page.svelte         # Homepage
│   │   └── blog/                # Blog routes (obsah ze sdíleného newsfeedu)
│   │       ├── +page.ts         # Načtení seznamu článků z feedu
│   │       ├── +page.svelte     # Blog listing
│   │       └── [slug]/          # Detaily článků
│   ├── app.css                  # Globální Tailwind import
│   ├── app.html                 # HTML template
│   ├── hooks.server.ts          # Server hooks (i18n middleware)
│   └── hooks.ts                 # Client hooks (rerouting)
├── static/                      # Statické soubory (obrázky, fonts)
│   └── images/
├── messages/                    # i18n překlady
│   ├── cs.json
│   └── en.json
├── project.inlang/              # Inlang konfigurace
└── build/                       # Output statického buildu
```

### Principy organizace

1. **Komponenty v `src/lib/components/`** - Všechny znovupoužitelné UI komponenty
2. **Routes v `src/routes/`** - File-based routing dle SvelteKit konvencí
3. **Články ze sdíleného newsfeedu** - obsah blogu žije v repu [aiscr-news](https://github.com/ARUP-CAS/aiscr-news)
4. **Statické soubory v `static/`** - Obrázky, fonty, robots.txt
5. **Překlady v `messages/`** - JSON soubory pro i18n

---

## Svelte 5 Runes

Tento projekt používá **Svelte 5** s novým **runes API**. Runes jsou nový způsob práce s reaktivitou v Svelte.


## Komponenty a prop drilling

### Pure components

Projekt používá **pure components** - komponenty jsou čisté funkce svých props bez globálního stavu.

**Výhody:**
- ✅ Předvídatelné chování
- ✅ Snadné testování
- ✅ Explicitní datový tok
- ✅ Žádné skryté závislosti

### Prop drilling pattern

Data se předávají explicitně skrze props z rodičovské komponenty do potomků.

**Příklad z projektu:**

```svelte
<!-- routes/+page.svelte - Parent -->
<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Features from '$lib/components/Features.svelte';
  import Services from '$lib/components/Services.svelte';
</script>

<Hero />
<Features />
<Services />
```

Komponenty jsou **autonomní** - získávají data buď:
1. Z props (když data přicházejí z rodiče)
2. Z i18n (překlady)
3. Z vlastního načtení (např. BlogPreview se za běhu obnovuje ze sdíleného feedu)

### Load functions

Pro načítání dat se používají univerzální `+page.ts` loady — běží při prerenderu
(build) i v prohlížeči. Články se stahují ze sdíleného newsfeedu:

```typescript
// routes/blog/+page.ts
import { fetchNews, toListPost, localeFromPathname } from '$lib/feed';

export const load: PageLoad = async ({ fetch, url }) => {
  const locale = localeFromPathname(url.pathname);
  const items = await fetchNews(fetch, locale);
  return { posts: items.map(toListPost) };
};
```

Data jsou pak dostupná v komponentě přes `$props()`:

```svelte
<script lang="ts">
  let { data }: { data: PageData } = $props();
</script>

{#each data.posts as post}
  <!-- ... -->
{/each}
```

### Kompozice komponent

Komponenty jsou **jednoúčelové a znovupoužitelné**:

```svelte
<!-- +layout.svelte -->
<div class="min-h-screen flex flex-col">
  <Header />
  <main class="flex-1">
    {@render children?.()}
  </main>
  <Footer />
</div>
```

**Render props pattern** - použití `{@render children?.()}` pro vnořený obsah.

---

## Styling s Tailwind CSS 4.0

Projekt používá **Tailwind CSS 4.0** - nejnovější verzi s Vite pluginem.

### Import a konfigurace

```css
/* src/app.css */
@import 'tailwindcss';
@plugin '@tailwindcss/forms';
@plugin '@tailwindcss/typography';

body {
  font-family: 'Roboto', sans-serif;
}
```

**Vite konfigurace:**

```typescript
// vite.config.ts
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
    // ...
  ]
});
```

### Styling přístup

Projekt má pouze **jeden přístup**:

#### 1. Utility-first Tailwind classes

```svelte
<div class="flex items-center justify-between">
  <nav class="flex items-center space-x-8">
    <a href="/" class="text-white hover:text-gray-300 transition-colors">
      Link
    </a>
  </nav>
</div>
```

### Responzivita

Tailwind responsive breakpoints:

```svelte
<div class="px-4 sm:px-6 lg:px-8">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <!-- Responsive grid -->
  </div>
</div>
```

### Design systém

**Barvy:**
- Primary red: `#C6362E`
- Dark red: `#721C17` (rgba(114, 28, 23, 0.8))
- Purple: `rgba(128, 35, 118, 0.8)`
- Gray: `#808E98`, `rgba(128, 142, 152, 0.8)`
- Orange: `rgba(219, 145, 52, 0.8)`

**Fonty:**
- Body: `'Roboto', sans-serif`
- Headings: `'Roboto Slab', serif`

**Spacing:**
- Max container width: `1312px`
- Section padding: `128px 0 80px 0` (top, bottom)
- Standard gaps: `16px`, `24px`, `32px`

---

## Internacionalizace (i18n)

Projekt používá **Paraglide JS** - moderní i18n řešení s compile-time překlady.

### Konfigurace

```json
// project.inlang/settings.json
{
  "baseLocale": "cs",
  "locales": ["cs", "en"]
}
```

### Překlady

```json
// messages/cs.json
{
  "hero.title": "Archeologický informační systém České republiky",
  "hero.subtitle": "Digitální brána do světa české archeologie",
  "nav.services": "Služby"
}

// messages/en.json
{
  "hero.title": "Archaeological Information System of the Czech Republic",
  "hero.subtitle": "Digital gateway to Czech archaeology",
  "nav.services": "Services"
}
```

### Použití v komponentách

```svelte
<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
  import { getLocale, setLocale } from '$lib/paraglide/runtime';
</script>

<!-- Jednoduchý překlad -->
<h1>{m['hero.title']()}</h1>

<!-- HTML překlad -->
<p>{@html m['hero.description']()}</p>

<!-- Dynamické klíče -->
{#each features as feature}
  <p>{(m as any)[`features.${feature.key}.description`]()}</p>
{/each}

<!-- Přepínání jazyka -->
<button onclick={() => setLocale(getLocale() === 'cs' ? 'en' : 'cs')}>
  {getLocale()}
</button>
```

### Server-side i18n

```typescript
// hooks.server.ts
import { paraglideMiddleware } from '$lib/paraglide/server';

export const handle: Handle = ({ event, resolve }) =>
  paraglideMiddleware(event.request, ({ request, locale }) => {
    event.request = request;
    return resolve(event, {
      transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
    });
  });
```

### Rerouting

```typescript
// hooks.ts
import { deLocalizeUrl } from '$lib/paraglide/runtime';

export const reroute = (request) => deLocalizeUrl(request.url).pathname;
```

Umožňuje URL jako `/en/blog` -> směruje na `/blog` s locale nastavením.

---

## Routing a prerenderování

### File-based routing

SvelteKit používá file-system based routing:

```
routes/
├── +layout.svelte          → Layout pro všechny stránky
├── +layout.ts             → prerender = true
├── +page.svelte           → / (homepage)
└── blog/
    ├── +layout.svelte     → Layout pro blog sekci
    ├── +page.server.ts    → Server load (seznam článků)
    ├── +page.svelte       → /blog (listing)
    └── [slug]/
        ├── +page.ts       → Client load (konkrétní článek)
        └── +page.svelte   → /blog/[slug]
```

### Prerenderování

```typescript
// routes/+layout.ts
export const prerender = true;
```

**Všechny stránky jsou prerendrovány** během buildu → statický web.

### Static adapter

```javascript
// svelte.config.js
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      strict: true
    })
  }
};
```

Generuje statické HTML soubory do složky `build/`.

---

## Obsah článků (sdílený newsfeed)

Články už nejsou v tomto repozitáři — píší se jednou v repu
[aiscr-news](https://github.com/ARUP-CAS/aiscr-news) a publikují se jako JSON
feed na GitHub Pages. Tento web feed stahuje při buildu (prerender detailů
`/blog/<slug>/`) i za běhu v prohlížeči (seznam a homepage se obnovují živě,
takže nový článek se objeví bez rebuildu webu).

Podrobnosti: [docs/NEWSFEED.md](docs/NEWSFEED.md). Klient feedu: `src/lib/feed.ts`.

### Načítání článků

```typescript
// src/lib/feed.ts — články z JSON feedu, řazené od nejnovějších
const items = await fetchNews(fetch, locale);       // seznam (type: "news")
const item = await fetchNewsItem(fetch, locale, slug); // jeden článek
```

---

## Konvence a best practices

### TypeScript

- **Strict mode** zapnutý v `tsconfig.json`
- Type všech props a funkcí
- Avoid `any` kde je možné, use type guards

```typescript
let { data }: { data: PageData } = $props();
let blogPosts = $state<any[]>([]);  // TODO: type BlogPost

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('cs-CZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
```

### Komponenty

1. **Single Responsibility** - každá komponenta má jeden účel
2. **Autonomní** - komponenta má vše potřebné v sobě
3. **Prop drilling** - explicitní předávání dat
4. **Pure** - žádný globální stav (kromě i18n)

```svelte
<!-- ✅ Dobrý příklad -->
<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
  
  let isOpen = $state(false);
  
  function toggle() {
    isOpen = !isOpen;
  }
</script>

<button onclick={toggle}>
  {m['button.text']()}
</button>

{#if isOpen}
  <div>Content</div>
{/if}
```

#### Anti-patterns

```svelte
<script lang="ts">
  let count = $state(0);
  
  // ❌ ŠPATNĚ - nekonečná smyčka
  $effect(() => {
    count++; // Změna stavu v effectu který sleduje tento stav
  });
  
  // ✅ SPRÁVNĚ - guard condition
  $effect(() => {
    if (count < 10) {
      count++;
    }
  });
  
  // ❌ ŠPATNĚ - async v derived
  let data = $derived(await fetchData()); // Nelze použít await
  
  // ✅ SPRÁVNĚ - async v effect
  let data = $state(null);
  $effect(() => {
    fetchData().then(result => {
      data = result;
    });
  });
  
  // ❌ ŠPATNĚ - mutace props
  let { items } = $props();
  items.push('new'); // Nelze měnit props
  
  // ✅ SPRÁVNĚ - použít $bindable nebo callback
  let { items, onAddItem } = $props();
  onAddItem('new'); // Volat callback do parent
</script>
```

### Accessibility

- **ARIA labels** pro ikony a interaktivní prvky
- **Semantic HTML** (nav, main, section, article, footer)
- **Alt text** pro obrázky
- **Focus states** pro klavesovou navigaci

```svelte
<button 
  aria-label={m['aria.openMenu']()} 
  onclick={toggleMenu}
>
  <Menu size="24" />
</button>

<a 
  href="https://facebook.com" 
  target="_blank" 
  rel="noopener noreferrer"
  aria-label={m['aria.facebook']()}
>
  <Facebook size="20" />
</a>
```

### Performance

1. **Image optimization** - webp formáty, správné velikosti
2. **Lazy loading** - `loading="lazy"` pro obrázky mimo viewport
3. **Passive event listeners** - `{ passive: true }` pro scroll handlers
4. **Code splitting** - automatické díky SvelteKit


### ESLint a Prettier

```javascript
// eslint.config.js
export default defineConfig(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs.recommended,
  prettier,
  ...svelte.configs.prettier
);
```

**Formátování:**
```bash
pnpm format        # Formátovat všechny soubory
pnpm lint          # Zkontrolovat code style
```

---

## Deployment

### Build proces

```bash
# Vývoj
pnpm dev

# Type-checking
pnpm check

# Production build
pnpm build
```

### Static build output

Build vytvoří statickou aplikaci ve složce `build/`:

```
build/
├── _app/                    # App assets
│   ├── immutable/          # Versioned assets
│   │   ├── assets/         # CSS
│   │   ├── chunks/         # JS chunks
│   │   └── entry/          # Entry points
│   └── version.json
├── index.html              # Homepage
├── blog/                   # Blog pages
│   ├── __data.json
│   └── *.html
├── blog.html
├── images/                 # Statické obrázky
└── robots.txt
```

### Adapter konfigurace

```javascript
// svelte.config.js
adapter: adapter({
  pages: 'build',
  assets: 'build',
  fallback: '404.html',      // 404 stránka
  precompress: false,        // Gzip/Brotli komprese
  strict: true               // Hlásit chyby při buildu
})
```

### Preview

```bash
pnpm preview  # Náhled production buildu lokálně
```

### Deployment targets

Statický build lze nasadit na:
- **Netlify**
- **Vercel**
- **GitHub Pages**
- **Cloudflare Pages**
- **AWS S3 + CloudFront**
- Jakýkoliv statický hosting

---

## Shrnutí klíčových principů

### ✅ Co POUŽÍT

#### Svelte 5 Runes
1. **`$state`** - pro reaktivní stav
2. **`$derived`** - pro computed values místo funkcí
3. **`$props`** - pro props komponent
4. **`$effect`** - pro reaktivní side effects
7. **`$bindable`** - pro two-way binding

#### Architektura
8. **Pure components** - bez globálního stavu
9. **Prop drilling** - explicitní data flow
10. **TypeScript** - type safety všude
11. **Semantic HTML** - accessibility

#### Styling
12. **Tailwind utility classes** - rychlý vývoj

#### Best Practices
13. **Paraglide i18n** - compile-time překlady
14. **Prerenderování** - statický output
15. **Lazy loading** - pro obrázky
16. **ARIA labels** - pro accessibility

### 📋 Checklist nové komponenty

Při vytváření nové komponenty zkontrolovat:

- [ ] Používá `$state` místo `let` pro reaktivní stav?
- [ ] Používá `$props()` pro props?
- [ ] Používá `$derived` pro computed values?
- [ ] Má správné TypeScript typy?
- [ ] Má ARIA labels pro interaktivní elementy?
- [ ] Používá i18n pro texty (`m['key']()`)?
- [ ] Má responsive design (Tailwind breakpoints)?
- [ ] Má cleanup v `$effect`?
- [ ] Neobsahuje `$inspect` v produkčním kódu?
