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

Články se **nepíší do tohoto repozitáře**. Obsah blogu žije ve sdíleném
newsfeedu [ARUP-CAS/aiscr-news](https://github.com/ARUP-CAS/aiscr-news) —
článek se tam napíše jednou v Markdownu (včetně obrázků a autorů), po merge
do `main` ho GitHub Action publikuje jako JSON feed a tento web ho zobrazí
**bez rebuildu** (seznam na `/blog/` a homepage se obnovují za běhu).

Postup je v README repa aiscr-news. Pro zobrazení na tomto webu musí mít
článek v `item.yaml` uvedený web `aiscr`.

Jak je napojení technicky uděláno (prerender, SPA fallback pro nové články,
konfigurace hostingu) popisuje [docs/NEWSFEED.md](docs/NEWSFEED.md).

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

Obrázky blog článků se spravují v repu
[aiscr-news](https://github.com/ARUP-CAS/aiscr-news) (limity hlídá jeho CI).
Zde jde jen o obrázky webu samotného:

| Typ obrázku | Max rozměry | Formát |
|-------------|-------------|--------|
| Pozadí sekcí | 2600px | WebP |
| Fotky lidí (velké) | 400px | WebP |
| Loga | 800px | PNG/WebP |

### Automatizovaně

```bash
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

### Manuální deployment

```bash
pnpm build
rsync -av build/ /var/www/aiscr.cz/
```

Web je čistě statický - nepotřebuje Node.js runtime. Hosting běží na Apache;
build obsahuje `.htaccess`, díky kterému fungují i detaily článků
publikovaných do newsfeedu po posledním buildu (SPA fallback `404.html`) —
detaily a ověření viz [docs/NEWSFEED.md](docs/NEWSFEED.md).

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
ls -la static/images/logos/logo.webp
# Správně: /images/logos/logo.webp
```

### Článek se nezobrazuje v blog listu

1. V repu [aiscr-news](https://github.com/ARUP-CAS/aiscr-news) zkontroluj
   `published: true` a web `aiscr` v `item.yaml` článku
2. Ověř, že článek je ve feedu:
   `curl https://arup-cas.github.io/aiscr-news/feed/aiscr/cs.json`
3. GitHub Pages cachuje feed ~10 minut — chvíli počkej

### Detail nového článku vrací 404

Články publikované po posledním buildu webu potřebují na hostingu SPA
fallback (`404.html`) — viz [docs/NEWSFEED.md](docs/NEWSFEED.md). Bez něj
detail funguje až po rebuildu a nasazení webu.

### Překlady nefungují

```bash
grep "hero.title" messages/cs.json messages/en.json
pnpm compile
```

### Menu odkazy v /en verzi vedou na /

Použij locale-aware odkazy (viz [Internacionalizace](#internacionalizace-překlady)).

---

## Checklist pro nový článek

Nový článek se přidává v repu
[aiscr-news](https://github.com/ARUP-CAS/aiscr-news) — checklist a validace
(CI) jsou tam. Na tomto webu pak stačí ověřit:

- [ ] Článek se zobrazuje v blog listu a na homepage (do ~10 minut po publikaci)
- [ ] Detail článku funguje (`/blog/slug` i `/en/blog/slug`)

---

## Kontakty

Pro dotazy ohledně technické stránky webu:
- Petr Pajdla (ARUB)
- David Novák (ARU Praha)
