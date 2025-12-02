# AIS CR Web

Statická webová prezentace Archeologického informačního systému České republiky.

## 🚀 Quick Start

```bash
# Instalace
pnpm install

# Vývoj
pnpm dev

# Production build
pnpm build

# Preview
pnpm preview
```

## 📚 Dokumentace

### Pro editory:
- **[BLOG_QUICKSTART.md](BLOG_QUICKSTART.md)** - Rychlý návod pro přidání blog článku (5 kroků)
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Kompletní dokumentace pro správu obsahu

### Pro vývojáře:
- **[docs/BLOG_SYSTEM_TECHNICAL.md](docs/BLOG_SYSTEM_TECHNICAL.md)** - Jak funguje blog s MDSvex
- **[docs/I18N_STATIC_PRERENDER.md](docs/I18N_STATIC_PRERENDER.md)** - Internacionalizace ve statickém režimu
- **[docs/I18N_CHEATSHEET.md](docs/I18N_CHEATSHEET.md)** - i18n quick reference
- **[docs/COOKIE_CONSENT_GA.md](docs/COOKIE_CONSENT_GA.md)** - Cookie consent a Google Analytics

### Architektura:
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Architektura a konvence projektu
- **[.cursor/rules/architektura.mdc](.cursor/rules/architektura.mdc)** - Cursor rules

## 🛠️ Technologie

- **SvelteKit 2.x** - Full-stack framework
- **Svelte 5** - UI framework s runes API
- **Tailwind CSS 4.0** - Utility-first CSS
- **Paraglide JS** - i18n (cs/en)
- **MDSvex** - Markdown support
- **TypeScript** - Type safety
- **Vite 7** - Build tool

## 📁 Struktura projektu

```
aiscr-home/
├── src/
│   ├── lib/
│   │   └── components/      # Svelte komponenty
│   ├── routes/              # SvelteKit routes (file-based)
│   └── content/
│       └── blog/            # Blog články (.md)
├── static/
│   └── images/              # Statické obrázky
├── messages/
│   ├── cs.json              # České překlady
│   └── en.json              # Anglické překlady
├── scripts/                 # Optimalizační skripty
└── build/                   # Build output (statické HTML)
```

## 🌍 Jazyky

- **Česká verze:** `/` (root URL)
- **Anglická verze:** `/en/` (prefixované URL)

Blog články jsou **pouze v češtině**. Anglická verze webu (`/en/`) má anglické UI, ale české blog články.

## 📝 Blog články

### Přidat nový článek:

1. Vytvoř `.md` soubor v `src/content/blog/`
2. Přidej obrázky do `static/images/blog/XXX/`
3. Optimalizuj obrázky: `./scripts/optimize-blog-article.sh XXX`
4. Aktualizuj `svelte.config.js` (přidej slug do `prerender.entries`)
5. Build: `pnpm build`
6. Commit a push

**Detailní návod:** [BLOG_QUICKSTART.md](BLOG_QUICKSTART.md)

## 🎨 Optimalizace obrázků

### Pomocné skripty:

```bash
# Optimalizovat jeden blog článek (číslo 004)
./scripts/optimize-blog-article.sh 004

# Optimalizovat všechny obrázky v projektu
./scripts/resize-images.sh
./scripts/optimize-images.sh
```

### Manuální optimalizace:

```bash
# Resize (max 1600px)
magick obrazek.png -resize "1600x1600>" obrazek_small.png

# Konverze do WebP
magick obrazek.png -quality 85 obrazek.webp

# Kombinovaně
magick obrazek.png -resize "1600x1600>" -quality 85 obrazek.webp
```

## 🚢 Deployment

### Automatický (GitHub Actions)

1. **Push do main** → automatický build
2. **Vytvoř release na GitHubu** → automaticky přidá ZIP

### Manuální (Nginx)

```bash
# Build
pnpm build

# Deploy
rsync -av build/ /var/www/aiscr.cz/
```

Web je **čistě statický** - nepotřebuje Node.js runtime ani server-side kód.

## 📦 Build Output

Složka `build/` obsahuje:

```
build/
├── index.html          # CS homepage
├── en.html             # EN homepage
├── blog/               # Blog články (CS i EN)
├── images/             # Optimalizované obrázky
├── _app/               # JS/CSS
├── atRium/             # Legacy redirects
├── atrium3d/
├── mapa_DPZ/
└── vystupy/
```

**Velikost buildu:** ~10-15 MB (včetně obrázků)

## 🔧 Užitečné příkazy

```bash
pnpm dev            # Dev server (http://localhost:5173)
pnpm build          # Production build
pnpm preview        # Preview buildu (http://localhost:4173)
pnpm check          # TypeScript kontrola
pnpm compile        # Kompilace i18n překladů
pnpm format         # Prettier formátování
pnpm lint           # ESLint
```

## 🌐 Internacionalizace

Překlady jsou v `messages/cs.json` a `messages/en.json`.

### Přidat nový překlad:

1. Přidej klíč do obou souborů
2. Spusť `pnpm compile`
3. Použij v komponentě: `{m['hero.title']()}`

**Detaily:** [CONTRIBUTING.md](CONTRIBUTING.md#internacionalizace-překlady)

## 🔗 Odkazy

- **Web:** https://www.aiscr.cz
- **AMČR:** https://amcr-info.aiscr.cz/
- **ARÚB:** https://www.arub.cz
- **ARÚ Praha:** https://www.arup.cas.cz

## 📄 Licence

© 2025 Archeologický informační systém České republiky

---

**Pro problémy a dotazy:** Viz [CONTRIBUTING.md](CONTRIBUTING.md) nebo kontaktuj tým AIS CR.
