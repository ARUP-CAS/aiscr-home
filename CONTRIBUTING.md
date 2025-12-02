# Návod pro správu obsahu - AIS CR Web

Tento návod popisuje, jak přidat nové blog články, aktualizovat překlady a deployovat web.

## 📋 Obsah

1. [Přidání nového blog článku](#přidání-nového-blog-článku)
2. [Internacionalizace (překlady)](#internacionalizace-překlady)
3. [Optimalizace obrázků](#optimalizace-obrázků)
4. [Build a deployment](#build-a-deployment)
5. [GitHub Release](#github-release)

---

## Přidání nového blog článku

### 1. Vytvoření markdown souboru

Vytvoř nový soubor v `src/content/blog/` s názvem například `004_nazev-clanku.md`:

```markdown
---
slug: nazev-clanku-url
title: "Název článku"
excerpt: "Krátký popis článku pro preview (1-2 věty)"
date: "2025-12-01"
category: "Technologie"
published: true
locale: "cs"
readingTime: "5 minut"
author: "Jméno Autora"
authorRole: "Role autora"
authorImage: "/images/people/ais-staff.webp"
image: "/images/blog/004/004_000_nahled.webp"
---

## Úvod

Text článku v markdown formátu...

![Popis obrázku](/images/blog/004/004_001.webp)

## Další sekce

Další obsah...

## Shrnutí

- Hlavní bod 1
- Hlavní bod 2

## Chcete vědět víc?

- [Odkaz 1](https://example.com)
- [Odkaz 2](https://example.com)
```

### 2. Důležité parametry frontmatter:

| Parametr | Povinný | Popis | Příklad |
|----------|---------|-------|---------|
| `slug` | ✅ | URL článku (bez diakritiky) | `doi-v-amcr` |
| `title` | ✅ | Název článku | `"DOI v AMČR"` |
| `excerpt` | ✅ | Krátký popis (preview) | `"Co je DOI..."` |
| `date` | ✅ | Datum publikace | `"2025-12-01"` |
| `category` | ✅ | Kategorie článku | `"Technologie"` |
| `published` | ✅ | Publikovat? | `true` nebo `false` |
| `locale` | ✅ | Jazyk článku | `"cs"` |
| `readingTime` | ✅ | Odhad čtení | `"5 minut"` |
| `author` | ✅ | Jméno autora | `"Jan Novák"` |
| `authorRole` | ✅ | Role autora | `"Datový kurátor"` |
| `authorImage` | ✅ | Cesta k fotce | `/images/people/...` |
| `image` | ✅ | Hlavní obrázek | `/images/blog/...` |

### 3. Kategorie článků:

- `"AIS CR"` - obecné články o AIS CR
- `"Technologie"` - technická témata (DOI, API, ...)
- `"Události"` - akce, konference, školení
- `"Objevy"` - archeologické nálezy
- `"Návody"` - how-to články

---

## Přidání obrázků k článku

### 1. Struktura složek

```
static/images/blog/
├── 001/
│   ├── 001_000_nahled.webp  (hlavní obrázek - 1200x1200px)
│   └── 001_001.webp         (obrázky v článku - max 1600px)
├── 002/
│   ├── 002_000_nahled.webp
│   ├── 002_001.webp
│   ├── 002_002.webp
│   └── 002_003.webp
└── 003/
    └── ...
```

### 2. Pojmenování souborů:

- `XXX_000_nahled.webp` - hlavní náhledový obrázek (používá se v preview)
- `XXX_001.webp`, `XXX_002.webp`, ... - obrázky v článku (pořadové číslo)

### 3. Optimalizace obrázků (automatizovaně):

**Krok 1:** Vlož původní obrázky do složky (PNG/JPG):

```bash
static/images/blog/004/
├── 004_000_nahled.png
├── 004_001.jpg
└── 004_002.jpg
```

**Krok 2:** Spusť optimalizační skripty:

```bash
# Zmenšit obrázky na rozumné rozměry
cd /home/ronald/Projects/aiscr-home

# Pro náhledové obrázky (max 1200px)
magick static/images/blog/004/004_000_nahled.png -resize "1200x1200>" static/images/blog/004/004_000_nahled_resized.png

# Pro obrázky v článcích (max 1600px)
magick static/images/blog/004/004_001.jpg -resize "1600x1600>" static/images/blog/004/004_001_resized.jpg
magick static/images/blog/004/004_002.jpg -resize "1600x1600>" static/images/blog/004/004_002_resized.jpg

# Konverze do WebP (kvalita 85%)
magick static/images/blog/004/004_000_nahled_resized.png -quality 85 static/images/blog/004/004_000_nahled.webp
magick static/images/blog/004/004_001_resized.jpg -quality 85 static/images/blog/004/004_001.webp
magick static/images/blog/004/004_002_resized.jpg -quality 85 static/images/blog/004/004_002.webp

# Smazat původní a resized verze
rm static/images/blog/004/*.png static/images/blog/004/*.jpg
```

**Krok 3:** Použij optimalizované obrázky v článku:

```markdown
![Popis obrázku](/images/blog/004/004_001.webp)
```

### 4. Rychlý skript pro optimalizaci:

```bash
#!/bin/bash
# optimize-blog-images.sh
BLOG_DIR="$1"  # např. static/images/blog/004

for file in "$BLOG_DIR"/*.{png,jpg,JPG,jpeg}; do
    [ -f "$file" ] || continue
    filename=$(basename "$file")
    name="${filename%.*}"
    
    # Určit max velikost (náhled vs obsah)
    if [[ "$name" == *"nahled"* ]]; then
        max_size=1200
    else
        max_size=1600
    fi
    
    # Resize a konverze do WebP
    magick "$file" -resize "${max_size}x${max_size}>" -quality 85 "$BLOG_DIR/${name}.webp"
    echo "✅ $filename → ${name}.webp"
done

# Smazat původní
rm -f "$BLOG_DIR"/*.{png,jpg,JPG,jpeg}
echo "Hotovo!"
```

Použití:
```bash
chmod +x optimize-blog-images.sh
./optimize-blog-images.sh static/images/blog/004
```

---

## Aktualizace prerender konfigurace

Po přidání nového článku musíš aktualizovat `svelte.config.js`:

```javascript
prerender: {
    entries: [
        '/',
        '/en',
        '/blog',
        '/en/blog',
        // Přidat nový slug
        '/blog/nazev-clanku-url',
        '/en/blog/nazev-clanku-url',
        // ... ostatní články
    ]
}
```

---

## Internacionalizace (překlady)

### Struktura překladů

```
messages/
├── cs.json  (český jazyk)
└── en.json  (anglický jazyk)
```

### Přidání nového překladu

**1. Otevři soubory překladů:**

`messages/cs.json`:
```json
{
    "hero.title": "Archeologický informační systém České republiky",
    "hero.subtitle": "Digitální brána do světa české archeologie",
    "nav.services": "Služby"
}
```

`messages/en.json`:
```json
{
    "hero.title": "Archaeological Information System of the Czech Republic",
    "hero.subtitle": "Digital gateway to Czech archaeology",
    "nav.services": "Services"
}
```

**2. Struktura klíčů:**

Klíče jsou hierarchické, oddělené tečkou:

```json
{
    "hero.title": "...",           // Sekce hero, klíč title
    "hero.subtitle": "...",
    "nav.services": "...",         // Sekce nav, klíč services
    "features.openInfrastructure.description": "..."  // Vnořené
}
```

**3. HTML v překladech:**

Pokud potřebuješ HTML (odkazy, tučné písmo):

```json
{
    "about.intro": "Archeologický informační systém (AIS CR) je <strong>komplexní digitální infrastruktura</strong> pro správu..."
}
```

V komponentě použij `{@html}`:

```svelte
<p>{@html m['about.intro']()}</p>
```

**4. Dynamické parametry:**

Pro překlady s parametry (např. čas čtení):

```json
{
    "blog.readTime": "Čas čtení: {time}"
}
```

Použití:
```svelte
{m['blog.readTime']({ time: data.post.readingTime })}
```

### Použití překladů v komponentách

**Import:**
```svelte
<script lang="ts">
    import { m } from '$lib/paraglide/messages.js';
    import { getLocale } from '$lib/paraglide/runtime';
</script>
```

**Základní použití:**
```svelte
<h1>{m['hero.title']()}</h1>
```

**HTML překlad:**
```svelte
<p>{@html m['hero.description']()}</p>
```

**Dynamické klíče (např. v loopu):**
```svelte
{#each features as feature}
    <p>{(m as any)[`features.${feature.key}.description`]()}</p>
{/each}
```

**Aktuální jazyk:**
```svelte
<script>
    import { getLocale } from '$lib/paraglide/runtime';
    const locale = getLocale();
    const isEnglish = locale === 'en';
</script>

{#if isEnglish}
    <p>English content</p>
{:else}
    <p>České obsahy</p>
{/if}
```

### Přepínání jazyka

Web používá URL-based lokalizaci:

- Česká verze: `/` (root)
- Anglická verze: `/en/` (prefix)

**Odkazy v komponentách musí respektovat locale:**

```svelte
<script>
    let currentLocale = $state('cs');
    
    function getBasePath(): string {
        return currentLocale === 'en' ? '/en' : '';
    }
</script>

<!-- Navigační odkazy -->
<a href="{getBasePath()}/#services">Služby</a>
<a href="{getBasePath()}/#blog">Blog</a>

<!-- Logo odkaz -->
<a href={currentLocale === 'en' ? '/en' : '/'}>
    <img src="/logo.svg" alt="Logo" />
</a>
```

---

## Optimalizace obrázků

### Proč optimalizovat?

Původní obrázky můžou být:
- Příliš velké rozlišení (10000x10000px)
- Velká velikost souboru (6MB)
- Špatný formát (PNG místo WebP)

**Cíl:** Snížit velikost na ~85% při zachování vizuální kvality.

### Nástroj: ImageMagick

Zkontroluj instalaci:
```bash
magick -version
```

### Základní příkazy

**1. Zjistit rozměry a velikost:**
```bash
magick identify -format "%wx%h" obrazek.png
du -h obrazek.png
```

**2. Zmenšit obrázek (zachovat poměr stran):**
```bash
# Zmenšit na max 1600px šířku/výšku (pokud je větší)
magick obrazek.png -resize "1600x1600>" obrazek_small.png
```

**3. Konverze do WebP:**
```bash
# Kvalita 85% (dobrý poměr kvalita/velikost)
magick obrazek.png -quality 85 obrazek.webp
```

**4. Kombinovaný příkaz (resize + WebP):**
```bash
magick obrazek.png -resize "1600x1600>" -quality 85 obrazek.webp
```

### Doporučené rozměry

| Typ obrázku | Max šířka | Příklad |
|-------------|-----------|---------|
| Pozadí sekcí | 2600px | `bg-about.png` |
| Hero obrázky | 1600px | `bg-hero-right.png` |
| Blog náhledy | 1200px | `001_000_nahled.png` |
| Blog obrázky | 1600px | `001_001.jpg` |
| Fotky lidí (velké) | 400px | `novak.png` |
| Fotky lidí (malé) | 100px | `eichert.png` |
| Loga | 800px | `logo-aru-en.png` |

### Hromadná optimalizace

Pro optimalizaci celé složky použij skript `scripts/optimize-images.sh`:

```bash
cd /home/ronald/Projects/aiscr-home

# Optimalizovat všechny obrázky v static/images/
./scripts/optimize-images.sh

# Nebo pro konkrétní blog článek:
./scripts/resize-images.sh  # Nejdřív zmenšit
./scripts/optimize-images.sh  # Pak konvertovat do WebP
```

### Kontrola před/po optimalizaci:

```bash
# Před
du -sh static/images/
find static/images/blog/004 -type f -exec du -h {} \;

# Po optimalizaci
find static/images/blog/004 -name "*.webp" -exec du -h {} \;
```

---

## Build a deployment

### Lokální vývoj

```bash
# Instalace závislostí
pnpm install

# Spuštění dev serveru
pnpm dev
# → http://localhost:5173

# Kontrola překladů (Paraglide)
pnpm compile
```

### Production build

```bash
# Type-check
pnpm check

# Build (statický HTML output do build/)
pnpm build

# Preview production buildu
pnpm preview
# → http://localhost:4173
```

### Kontrola buildu

```bash
# Zkontrolovat vygenerované HTML soubory
ls -la build/
ls -la build/blog/
ls -la build/en/blog/

# Velikost buildu
du -sh build/

# Zkontrolovat že všechny cesty fungují
grep -r "\.png\|\.jpg" build/*.html | grep -v ".webp"  # Mělo by být prázdné
```

### Deployment do Nginx

Build vytvoří složku `build/` se statickými soubory:

```
build/
├── index.html          (CS homepage)
├── en.html             (EN homepage)
├── blog/               (CS blog)
│   ├── *.html
│   └── __data.json
├── en/                 (EN verze)
│   └── blog/
├── images/             (optimalizované obrázky)
├── _app/               (JS/CSS)
├── atRium/             (redirecty)
├── atrium3d/
├── mapa_DPZ/
├── vystupy/
└── robots.txt
```

**Deployment:**
```bash
# Zkopírovat build/ do Nginx www složky
rsync -av build/ /var/www/aiscr.cz/

# NEBO
cp -r build/* /var/www/aiscr.cz/
```

**Nginx konfigurace není potřeba** - vše je statické HTML!

---

## GitHub Release

### Automatický workflow

Web má 2 workflows:

1. **`build.yml`** - automatický build při push do `main`
2. **`release.yml`** - přidá ZIP k release

### Postup vytvoření release:

**1. Commitni a pushni změny:**
```bash
git add .
git commit -m "Nové články blogu a optimalizace obrázků"
git push origin main
```

→ GitHub Actions automaticky zbuilduje projekt a uloží ZIP jako artifact

**2. Vytvoř release na GitHubu:**

- Jdi na GitHub → **Releases** → **"Draft a new release"**
- **Choose a tag:** Vytvoř nový tag (např. `v0.0.5`)
- **Release title:** `Release v0.0.5`
- **Description:** Napiš co je nového
- Klikni **"Publish release"**

**3. Workflow automaticky:**
- Stáhne poslední build z main
- Přejmenuje ZIP na `aiscr-home-v0.0.5.zip`
- Přidá ZIP jako asset k release

### Kontrola workflow:

Na GitHubu jdi do **Actions** → zkontroluj:
- ✅ **Build on Main** - běží po každém push
- ✅ **Attach Build to Release** - běží po vytvoření release

---

## Checklist pro nový článek

Před publikací zkontroluj:

- [ ] Markdown soubor má správný frontmatter (všechny povinné pole)
- [ ] Slug je unikátní (nekonfliktuje s existujícími)
- [ ] Obrázky jsou optimalizované (WebP, správné rozměry)
- [ ] Obrázky jsou v `static/images/blog/XXX/`
- [ ] Cesty k obrázkům jsou správné (`/images/blog/XXX/...`)
- [ ] Slug přidán do `svelte.config.js` v `prerender.entries`
- [ ] Build projde bez chyb (`pnpm build`)
- [ ] Článek se zobrazuje v blog listu (CS i EN)
- [ ] Článek detail funguje (`/blog/slug` i `/en/blog/slug`)
- [ ] Obrázky se načítají správně

---

## Přidání překladu do UI

### Kdy je potřeba přidat překlad?

Když přidáváš nový text v komponentě (ne v blog článku):

```svelte
<!-- ❌ ŠPATNĚ - hardcoded text -->
<h1>Archeologický informační systém</h1>

<!-- ✅ SPRÁVNĚ - překlad -->
<h1>{m['hero.title']()}</h1>
```

### Postup:

**1. Přidej klíč do `messages/cs.json`:**
```json
{
    "hero.newFeature": "Nová funkce"
}
```

**2. Přidej stejný klíč do `messages/en.json`:**
```json
{
    "hero.newFeature": "New Feature"
}
```

**3. Kompiluj překlady:**
```bash
pnpm compile
```

**4. Použij v komponentě:**
```svelte
<p>{m['hero.newFeature']()}</p>
```

### Tipy:

- **Klíče musí být stejné** v CS i EN verzích
- **HTML v překladech** - použij `{@html m['key']()}`
- **Parametry** - `{m['key']({ param: 'hodnota' })}`
- Po změně `messages/*.json` vždy spusť `pnpm compile`

---

## Časté problémy a řešení

### ❌ "Obrázek se nenačítá (404)"

**Příčina:** Špatná cesta nebo chybí `.webp` přípona

**Řešení:**
```bash
# Zkontroluj že soubor existuje
ls -la static/images/blog/004/004_001.webp

# Zkontroluj cestu v markdown
# ✅ Správně: /images/blog/004/004_001.webp
# ❌ Špatně: L:\_TOM\2025\...
```

### ❌ "Článek se nezobrazuje v blog listu"

**Příčina:** Chybí v `svelte.config.js` nebo `published: false`

**Řešení:**
1. Zkontroluj frontmatter: `published: true`
2. Přidej slug do `svelte.config.js`
3. Rebuild: `pnpm build`

### ❌ "Překlady nefungují"

**Příčina:** Klíč chybí v CS nebo EN verzi

**Řešení:**
```bash
# Zkontroluj že klíč existuje v obou souborech
grep "hero.title" messages/cs.json
grep "hero.title" messages/en.json

# Rekompiluj
pnpm compile
```

### ❌ "Menu odkazy v /en verzi vedou na /"

**Příčina:** Odkazy nemají locale prefix

**Řešení:** Použij `getBasePath()` helper:
```svelte
<a href="{getBasePath()}/#services">Services</a>
```

### ❌ "Language switcher nefunguje"

**Příčina:** Locale se detekuje špatně

**Řešení:** Locale se musí detekovat z URL:
```svelte
onMount(() => {
    currentLocale = window.location.pathname.startsWith('/en') ? 'en' : 'cs';
});
```

---

## Quick Reference

### Příkazy

```bash
pnpm dev            # Vývoj
pnpm build          # Production build
pnpm preview        # Preview buildu
pnpm check          # Type-check
pnpm compile        # Kompilace překladů
pnpm format         # Formátování kódu
pnpm lint           # Linting
```

### Cesty

| Typ | Cesta |
|-----|-------|
| Blog články | `src/content/blog/*.md` |
| Překlady | `messages/*.json` |
| Komponenty | `src/lib/components/*.svelte` |
| Obrázky | `static/images/` |
| Build output | `build/` |

### Důležité soubory

| Soubor | Účel |
|--------|------|
| `svelte.config.js` | SvelteKit config, prerender entries |
| `messages/*.json` | i18n překlady |
| `src/routes/+layout.ts` | Root layout, locale init |
| `src/hooks.server.ts` | Server hook, lang attribute |
| `package.json` | Dependencies |

---

## Kontakty

Pro dotazy ohledně technické stránky webu:
- Petr Pajdla (ARÚB)
- David Novák (ARÚ Praha)

---

**Vytvořeno:** 30. listopadu 2025  
**Poslední aktualizace:** 30. listopadu 2025



