# Rychlý návod: Jak přidat nový blog článek

Detailní návod viz [CONTRIBUTING.md](CONTRIBUTING.md).

## 5 kroků k publikaci článku

### 1. Vytvoř markdown soubor

```bash
src/content/blog/005_nazev-clanku.md
```

```markdown
---
slug: nazev-clanku-url
title: "Název článku"
excerpt: "Krátký popis článku (1-2 věty)"
date: "2026-03-01"
category: "Technologie"
published: true
locale: "cs"
readingTime: "5 minut"
author: "Jméno Autora"
authorRole: "Role"
authorImage: "/images/blog/author/foto.webp"
image: "/images/blog/005/005_000_nahled.webp"
---

## Tvůj obsah zde

Text článku...

![Obrázek](/images/blog/005/005_001.webp)
```

Více autorů se oddělují čárkou (name, role i image):

```yaml
author: "Jan Novák, Eva Nová"
authorRole: "Kurátor, Redaktorka"
authorImage: "/images/blog/author/novak.jpg, /images/blog/author/nova.jpg"
```

### 2. Přidej a optimalizuj obrázky

```bash
mkdir -p static/images/blog/005

# Náhled (1200px) a obrázky v článku (1600px)
magick 005_000_nahled.jpg -resize "1200x1200>" -quality 85 005_000_nahled.webp
magick 005_001.jpg -resize "1600x1600>" -quality 85 005_001.webp

# Nebo použij skript
./scripts/optimize-blog-article.sh 005
```

### 3. Aktualizuj prerender config

V `svelte.config.js` přidej slug do `prerender.entries`:

```javascript
'/blog/nazev-clanku-url',
'/en/blog/nazev-clanku-url',
```

### 4. Build a zkontroluj

```bash
pnpm build
pnpm preview
# Otevři http://localhost:4173/blog
```

### 5. Commit a push

```bash
git add .
git commit -m "Přidán nový článek: Název článku"
git push origin main
```

## Pravidla pro obrázky

| Typ | Max rozměry | Formát |
|-----|-------------|--------|
| Náhled (`XXX_000_nahled`) | 1200x1200px | WebP, 85% |
| Obrázky v článku | 1600x1600px | WebP, 85% |

## Kategorie článků

| Kategorie | Barva |
|-----------|-------|
| `"AIS CR"` | Zelená |
| `"Technologie"` | Modrá |
| `"Události"` | Fialová |
| `"Objevy"` | Fialová |
| `"Návody"` | Zelená |
