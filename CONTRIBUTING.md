# Návod pro správu obsahu - AIS CR Web

Tento návod popisuje, jak přidat nové blog články, aktualizovat překlady a deployovat web.

## Obsah

1. [Přidání nového blog článku](#přidání-nového-blog-článku)
2. [Internacionalizace (překlady)](#internacionalizace-překlady)
3. [Optimalizace obrázků](#optimalizace-obrázků)
4. [Build a deployment](#build-a-deployment)
5. [GitHub Release](#github-release)
6. [Časté problémy a řešení](#časté-problémy-a-řešení)

---

## Přidání nového blog článku

Rychlý návod viz [BLOG_QUICKSTART.md](BLOG_QUICKSTART.md).

### 1. Vytvoření markdown souboru

Vytvoř nový soubor v `src/content/blog/` s názvem například `005_nazev-clanku.md`:

```markdown
---
slug: nazev-clanku-url
title: "Název článku"
excerpt: "Krátký popis článku pro preview (1-2 věty)"
date: "2026-03-01"
category: "Technologie"
published: true
locale: "cs"
readingTime: "5 minut"
author: "Jméno Autora"
authorRole: "Role autora"
authorImage: "/images/blog/author/foto.webp"
image: "/images/blog/005/005_000_nahled.webp"
---

## Úvod

Text článku v markdown formátu...

![Popis obrázku](/images/blog/005/005_001.webp)
```

### 2. Parametry frontmatter

| Parametr | Povinný | Popis | Příklad |
|----------|---------|-------|---------|
| `slug` | Ano | URL článku (bez diakritiky) | `doi-v-amcr` |
| `title` | Ano | Název článku | `"DOI v AMČR"` |
| `excerpt` | Ano | Krátký popis (preview) | `"Co je DOI..."` |
| `date` | Ano | Datum publikace | `"2026-03-01"` |
| `category` | Ano | Kategorie článku | `"Technologie"` |
| `published` | Ano | Publikovat? | `true` nebo `false` |
| `locale` | Ano | Jazyk článku | `"cs"` |
| `readingTime` | Ano | Odhad čtení | `"5 minut"` |
| `author` | Ano | Jméno autora (čárkou více) | `"Jan Novák"` |
| `authorRole` | Ano | Role autora (čárkou více) | `"Datový kurátor"` |
| `authorImage` | Ano | Cesta k fotce (čárkou více) | `/images/blog/author/...` |
| `image` | Ano | Hlavní obrázek | `/images/blog/005/...` |

**Více autorů:** Oddělte čárkou (name, role i image musí mít stejný počet položek):

```yaml
author: "Tomáš Pavloň, Martina Kudlíková"
authorRole: "Datový kurátor AMČR, Výkonná redaktorka PV"
authorImage: "/images/blog/author/pavlon.jpg, /images/blog/author/kudlikova.png"
```

### 3. Kategorie článků

| Kategorie | Barva badge |
|-----------|-------------|
| `"AIS CR"` | Zelená |
| `"Technologie"` | Modrá |
| `"Události"` | Fialová |
| `"Objevy"` | Fialová |
| `"Návody"` | Zelená |

---

## Přidání obrázků k článku

### Struktura složek

```
static/images/blog/
├── 001/
│   ├── 001_000_nahled.webp  (hlavní obrázek - 1200x1200px)
│   └── 001_001.webp         (obrázky v článku - max 1600px)
├── 002/
│   └── ...
└── author/                  (fotky autorů)
    └── novak.webp
```

### Pojmenování souborů

- `XXX_000_nahled.webp` - hlavní náhledový obrázek (používá se v preview)
- `XXX_001.webp`, `XXX_002.webp`, ... - obrázky v článku

---

## Aktualizace prerender konfigurace

Po přidání nového článku aktualizuj `svelte.config.js`:

```javascript
prerender: {
    entries: [
        '/',
        '/en',
        '/blog',
        '/en/blog',
        '/blog/nazev-clanku-url',     // nový slug
        '/en/blog/nazev-clanku-url',  // nový slug (EN)
        // ... ostatní články
    ]
}
```

---

## Internacionalizace (překlady)

Překlady jsou v `messages/cs.json` a `messages/en.json`.

### Přidání nového překladu

1. Přidej klíč do `messages/cs.json` a `messages/en.json`
2. Spusť `pnpm compile`
3. Použij v komponentě: `{m['hero.title']()}`

### Klíče

Klíče jsou hierarchické, oddělené tečkou: `hero.title`, `nav.services`, `about.intro`.

### HTML v překladech

```json
{
    "about.intro": "AIS CR je <strong>komplexní infrastruktura</strong>..."
}
```

V komponentě: `{@html m['about.intro']()}`

### Dynamické parametry

```json
{
    "blog.readTime": "Čas čtení: {time}"
}
```

V komponentě: `{m['blog.readTime']({ time: data.post.readingTime })}`

### URL locale handling

- Česká verze: `/` (root)
- Anglická verze: `/en/` (prefix)

Odkazy v komponentách musí respektovat locale:

```svelte
<script>
    import { getLocale } from '$lib/paraglide/runtime';
    const locale = getLocale();
    const basePath = locale === 'en' ? '/en' : '';
</script>

<a href="{basePath}/#services">Služby</a>
```

---

## Optimalizace obrázků

### Doporučené rozměry

| Typ obrázku | Max rozměry | Formát |
|-------------|-------------|--------|
| Blog náhledy | 1200x1200px | WebP, 85% |
| Blog obrázky | 1600x1600px | WebP, 85% |
| Pozadí sekcí | 2600px | WebP |
| Fotky lidí (velké) | 400px | WebP |
| Loga | 800px | PNG/WebP |

### Automatizovaně

```bash
# Optimalizovat jeden blog článek
./scripts/optimize-blog-article.sh 005

# Optimalizovat všechny obrázky v projektu
./scripts/resize-images.sh
./scripts/optimize-images.sh
```

### Manuálně (ImageMagick)

```bash
# Resize + WebP konverze
magick obrazek.png -resize "1600x1600>" -quality 85 obrazek.webp
```

---

## Build a deployment

### Příkazy

```bash
pnpm dev            # Dev server (http://localhost:5173)
pnpm build          # Production build (output do build/)
pnpm preview        # Preview buildu (http://localhost:4173)
pnpm check          # TypeScript kontrola
pnpm compile        # Kompilace i18n překladů
pnpm format         # Prettier formátování
pnpm lint           # ESLint
```

### Automatický deployment (GitHub Actions)

1. Push do `main` - automatický build
2. Vytvoření release na GitHubu - automaticky přidá ZIP

### Manuální deployment (Nginx)

```bash
pnpm build
rsync -av build/ /var/www/aiscr.cz/
```

Web je čistě statický - nepotřebuje Node.js runtime.

---

## GitHub Release

1. Commitni a pushni změny do `main`
2. Na GitHubu: **Releases** > **Draft a new release**
3. Vytvoř tag (např. `v0.0.6`), napiš popis, **Publish release**
4. Workflow automaticky stáhne build a přidá ZIP k release

---

## Časté problémy a řešení

### Obrázek se nenačítá (404)

Zkontroluj cestu a formát:
```bash
ls -la static/images/blog/005/005_001.webp
# Správně: /images/blog/005/005_001.webp
```

### Článek se nezobrazuje v blog listu

1. Zkontroluj frontmatter: `published: true`
2. Přidej slug do `svelte.config.js`
3. Rebuild: `pnpm build`

### Překlady nefungují

```bash
grep "hero.title" messages/cs.json messages/en.json
pnpm compile
```

### Menu odkazy v /en verzi vedou na /

Použij locale-aware odkazy (viz [Internacionalizace](#internacionalizace-překlady)).

---

## Checklist pro nový článek

- [ ] Markdown soubor má správný frontmatter (všechny povinné pole)
- [ ] Slug je unikátní
- [ ] Obrázky jsou optimalizované (WebP, správné rozměry)
- [ ] Cesty k obrázkům jsou správné (`/images/blog/XXX/...`)
- [ ] Slug přidán do `svelte.config.js` v `prerender.entries`
- [ ] Build projde bez chyb (`pnpm build`)
- [ ] Článek se zobrazuje v blog listu (CS i EN)
- [ ] Detail článku funguje (`/blog/slug` i `/en/blog/slug`)

---

## Kontakty

Pro dotazy ohledně technické stránky webu:
- Petr Pajdla (ARUB)
- David Novák (ARU Praha)
