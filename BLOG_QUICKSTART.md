# Rychlý návod: Jak přidat nový blog článek

## 🚀 5 kroků k publikaci článku

### 1️⃣ Vytvoř markdown soubor

```bash
src/content/blog/004_nazev-clanku.md
```

```markdown
---
slug: nazev-clanku-url
title: "Název článku"
excerpt: "Krátký popis článku (1-2 věty)"
date: "2025-12-01"
category: "Technologie"
published: true
locale: "cs"
readingTime: "5 minut"
author: "Jméno Autora"
authorRole: "Role"
authorImage: "/images/people/ais-staff.webp"
image: "/images/blog/004/004_000_nahled.webp"
---

## Tvůj obsah zde

Text článku...

![Obrázek](/images/blog/004/004_001.webp)
```

### 2️⃣ Přidej a optimalizuj obrázky

```bash
# Vytvoř složku
mkdir -p static/images/blog/004

# Zkopíruj obrázky (PNG/JPG)
cp obrazky/* static/images/blog/004/

# Optimalizuj (resize + WebP konverze)
cd static/images/blog/004

# Náhled (1200px)
magick 004_000_nahled.jpg -resize "1200x1200>" -quality 85 004_000_nahled.webp

# Obrázky v článku (1600px)
magick 004_001.jpg -resize "1600x1600>" -quality 85 004_001.webp
magick 004_002.png -resize "1600x1600>" -quality 85 004_002.webp

# Smazat originály
rm *.jpg *.png *.JPG
```

### 3️⃣ Aktualizuj prerender config

Soubor: `svelte.config.js`

```javascript
prerender: {
    entries: [
        '/',
        '/en',
        '/blog',
        '/en/blog',
        '/blog/nazev-clanku-url',     // ← PŘIDEJ TADY
        '/en/blog/nazev-clanku-url',  // ← A TADY
        // ... ostatní články
    ]
}
```

### 4️⃣ Build a zkontroluj

```bash
# Build
pnpm build

# Zkontroluj že článek existuje
ls -la build/blog/nazev-clanku-url.html
ls -la build/en/blog/nazev-clanku-url.html

# Preview
pnpm preview
# Otevři http://localhost:4173/blog
```

### 5️⃣ Commit a release

```bash
# Commit
git add .
git commit -m "Přidán nový článek: Název článku"
git push origin main

# Počkej na build (GitHub Actions)
# Pak vytvoř release na GitHubu:
# Releases → Draft new release → tag v0.0.6 → Publish
```

---

## 📝 Kategorie článků

| Kategorie | Kdy použít | Barva |
|-----------|-----------|-------|
| `"AIS CR"` | Obecné články o AIS CR | Zelená |
| `"Technologie"` | DOI, API, technická témata | Modrá |
| `"Události"` | Konference, školení | Fialová |
| `"Objevy"` | Archeologické nálezy | - |
| `"Návody"` | How-to články | - |

---

## 🖼️ Pravidla pro obrázky

### Pojmenování:
- `XXX_000_nahled.webp` - hlavní náhled článku
- `XXX_001.webp`, `XXX_002.webp`, ... - obrázky v pořadí

### Formát:
- ✅ Pouze **WebP**
- ❌ Ne PNG, JPG

### Rozměry:
- Náhled: max **1200x1200px**
- Obrázky v článku: max **1600x1600px**

### Kvalita:
- WebP quality: **85%**

---

## 🌍 Blog je single-language (pouze čeština)

- Blog články jsou **pouze v češtině**
- Na `/blog/` se zobrazí **český UI + český článek**
- Na `/en/blog/` se zobrazí **anglický UI + český článek**
- **Nepřekládáme** obsah článků do angličtiny

---

## 🆘 Rychlá pomoc

### Zkopírovat existující článek jako šablonu:

```bash
cp src/content/blog/001_blog_AISCR.md src/content/blog/004_muj-clanek.md
cp -r static/images/blog/001 static/images/blog/004

# Uprav frontmatter a obsah
nano src/content/blog/004_muj-clanek.md
```

### Test celého workflow:

```bash
# 1. Zkontroluj že jsou obrázky .webp
ls static/images/blog/004/*.webp

# 2. Build
pnpm build

# 3. Zkontroluj výstup
ls -la build/blog/*.html
grep "004" build/blog.html  # Měl by být v listu

# 4. Preview
pnpm preview
```

---

## 📞 Kde hledat více info?

- Detailní návod: `CONTRIBUTING.md`
- Architektura projektu: `.cursor/rules/architektura.mdc`
- SvelteKit docs: Workspace rules

---

**Pro rychlé dotazy:** Zkontroluj existující články jako vzor! 👍



