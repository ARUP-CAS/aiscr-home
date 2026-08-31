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
- **Sdílený newsfeed** - blog články z [aiscr-news](https://github.com/ARUP-CAS/aiscr-news)
- **TypeScript**, **Vite 7**, **pnpm**

## Struktura projektu

```
aiscr-home/
├── src/
│   ├── lib/components/     # Svelte komponenty
│   ├── lib/feed.ts         # Klient sdíleného newsfeedu
│   └── routes/             # SvelteKit routes (file-based)
├── static/images/          # Statické obrázky
├── messages/               # Překlady (cs.json, en.json)
├── scripts/                # Optimalizační skripty
└── build/                  # Build output (statické HTML)
```

Blog články se do tohoto repa nepíší — žijí ve sdíleném newsfeedu
[aiscr-news](https://github.com/ARUP-CAS/aiscr-news) a web je stahuje za běhu
(viz [docs/NEWSFEED.md](docs/NEWSFEED.md)).

## Jazyky

- **Česká verze:** `/` (root URL)
- **Anglická verze:** `/en/` (prefixované URL)

Blog články jsou zatím pouze v češtině. Anglická verze webu má anglické UI;
článek bez anglické verze ve feedu se zobrazí česky.

## Dokumentace

### Pro editory:
- **[aiscr-news](https://github.com/ARUP-CAS/aiscr-news)** - Přidávání blog článků (sdílený newsfeed)
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Kompletní návod pro správu obsahu, překlady, obrázky, build a deployment

### Pro vývojáře:
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Architektura a konvence projektu
- **[docs/](docs/)** - Technická dokumentace (newsfeed, i18n, cookies)

## Odkaz

- **Web:** https://www.aiscr.cz

## Licence

Viz [LICENSE](LICENSE) soubor.
