# AIS CR Web

Statická webová prezentace Archeologického informačního systému České republiky.

## Quick Start

```bash
pnpm install    # Instalace závislostí
pnpm dev        # Dev server (http://localhost:5173)
pnpm build      # Production build
pnpm preview    # Preview buildu (http://localhost:4173)
```

## Technologie

- **SvelteKit 2.x** + **Svelte 5** (runes API)
- **Tailwind CSS 4.0** - Utility-first CSS
- **Paraglide JS** - i18n (cs/en)
- **MDSvex** - Markdown blog články
- **TypeScript**, **Vite 7**, **pnpm**

## Struktura projektu

```
aiscr-home/
├── src/
│   ├── lib/components/     # Svelte komponenty
│   ├── routes/             # SvelteKit routes (file-based)
│   └── content/blog/       # Blog články (.md)
├── static/images/          # Statické obrázky
├── messages/               # Překlady (cs.json, en.json)
├── scripts/                # Optimalizační skripty
└── build/                  # Build output (statické HTML)
```

## Jazyky

- **Česká verze:** `/` (root URL)
- **Anglická verze:** `/en/` (prefixované URL)

Blog články jsou pouze v češtině. Anglická verze webu má anglické UI, ale české blog články.

## Dokumentace

### Pro editory:
- **[BLOG_QUICKSTART.md](BLOG_QUICKSTART.md)** - Rychlý návod pro přidání blog článku (5 kroků)
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Kompletní návod pro správu obsahu, překlady, obrázky, build a deployment

### Pro vývojáře:
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Architektura a konvence projektu
- **[docs/](docs/)** - Technická dokumentace (blog systém, i18n, cookies)

## Odkaz

- **Web:** https://www.aiscr.cz

## Licence

Viz [LICENSE](LICENSE) soubor.
