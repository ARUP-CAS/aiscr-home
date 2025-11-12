# AIS CR - Archeologický informační systém České republiky

Oficiální webová prezentace Archeologického informačního systému České republiky.

## 📚 Dokumentace

**Pro detailní informace o architektuře a principech vývoje viz [ARCHITECTURE.md](./ARCHITECTURE.md)**

Dokumentace obsahuje:
- Technologický stack a architektura
- Svelte 5 runes a best practices
- Styling s Tailwind CSS 4.0
- Internacionalizace (i18n)
- Struktura projektu a konvence

## 🚀 Quick Start

### Instalace závislostí

```sh
pnpm install
```

### Vývoj

Spuštění vývojového serveru:

```sh
pnpm dev

# nebo otevřít v prohlížeči
pnpm dev -- --open
```

Aplikace běží na `http://localhost:5173`

### Build

Vytvoření production verze:

```sh
pnpm build
```

Náhled production buildu:

```sh
pnpm preview
```

### Type-checking

```sh
pnpm check

# nebo s watch mode
pnpm check:watch
```

### Linting a formátování

```sh
pnpm lint      # Zkontrolovat code style
pnpm format    # Formátovat všechny soubory
```

## 🛠️ Technologie

- **SvelteKit 2.x** - Full-stack framework
- **Svelte 5** - UI framework s runes API
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4.0** - Utility-first CSS
- **Paraglide JS** - i18n (cs/en)
- **MDSvex** - Markdown support
- **Vite 7** - Build tool

## 📁 Struktura projektu

```
src/
├── lib/
│   └── components/    # Svelte komponenty
├── routes/            # SvelteKit routing
├── content/           # Markdown obsah
└── app.css            # Globální styly

static/
└── images/            # Statické obrázky

messages/
├── cs.json            # České překlady
└── en.json            # Anglické překlady
```

## 🌍 Vícejazyčnost

Aplikace podporuje češtinu (cs) a angličtinu (en).

Překlady jsou spravovány pomocí [Paraglide JS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) a uloženy v `messages/`.

## 📝 Přidání blog článku

1. Vytvořte markdown soubor v `src/content/blog/`:
   - `nazev-clanku.md` (česká verze)
   - `nazev-clanku.en.md` (anglická verze)

2. Přidejte frontmatter metadata:

```markdown
---
slug: nazev-clanku
title: Název článku
excerpt: Krátký popis...
date: 2024-01-15
category: Technologie
published: true
locale: cs
author: Jméno Autora
authorRole: Pozice
authorImage: /images/people/autor.png
image: /images/blog/obrazek.png
readingTime: 5 minut
---

# Obsah článku
```

3. Článek se automaticky objeví na webu po rebuildu.

## 🚢 Deployment

Aplikace je postavena jako statický web a může být nasazena na:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Jakýkoliv statický hosting

Build vytvoří statické soubory ve složce `build/`.

## 📄 Licence

Viz [LICENSE](./LICENSE) soubor.

## 👥 Autoři

Archeologický ústav AV ČR, Praha a Brno

---

**Pro více informací o vývoji viz [ARCHITECTURE.md](./ARCHITECTURE.md)**
