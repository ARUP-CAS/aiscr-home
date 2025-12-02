# Dokumentace AIS CR Web

Přehled všech dokumentů a návodů pro práci s webem.

## 📑 Dokumenty podle účelu

### 🚀 Pro začátek

| Dokument | Kdy číst | Čas čtení |
|----------|----------|-----------|
| [../README.md](../README.md) | První co číst | 2 min |
| [../BLOG_QUICKSTART.md](../BLOG_QUICKSTART.md) | Chci přidat článek | 5 min |

### 📝 Správa obsahu

| Dokument | Obsah | Pro koho |
|----------|-------|----------|
| [../BLOG_QUICKSTART.md](../BLOG_QUICKSTART.md) | Přidání blog článku (5 kroků) | Editoři |
| [../CONTRIBUTING.md](../CONTRIBUTING.md) | Kompletní návod na správu obsahu | Editoři, vývojáři |
| [BLOG_SYSTEM_TECHNICAL.md](BLOG_SYSTEM_TECHNICAL.md) | Jak funguje blog technicky | Vývojáři |

### 🌍 Internacionalizace

| Dokument | Obsah | Pro koho |
|----------|-------|----------|
| [I18N_CHEATSHEET.md](I18N_CHEATSHEET.md) | Quick reference, code snippets | Všichni |
| [I18N_STATIC_PRERENDER.md](I18N_STATIC_PRERENDER.md) | Kompletní technický popis změn | Vývojáři |

### 🍪 Cookie Consent

| Dokument | Obsah | Pro koho |
|----------|-------|----------|
| [COOKIE_CONSENT_GA.md](COOKIE_CONSENT_GA.md) | Cookie banner a Google Analytics | Vývojáři |

### 🏛️ Architektura

| Dokument | Obsah | Pro koho |
|----------|-------|----------|
| [../ARCHITECTURE.md](../ARCHITECTURE.md) | Architektura projektu | Vývojáři |

---

## 📖 Podle tématu

### Přidání blog článku

1. [BLOG_QUICKSTART.md](../BLOG_QUICKSTART.md) - Rychlý návod
2. [CONTRIBUTING.md](../CONTRIBUTING.md) - Detailní návod
3. [BLOG_SYSTEM_TECHNICAL.md](BLOG_SYSTEM_TECHNICAL.md) - Technické detaily

### Překlady (i18n)

1. [I18N_CHEATSHEET.md](I18N_CHEATSHEET.md) - Code snippets
2. [CONTRIBUTING.md](../CONTRIBUTING.md#internacionalizace-i18n) - Praktický návod
3. [I18N_STATIC_PRERENDER.md](I18N_STATIC_PRERENDER.md) - Technická dokumentace změn

### Optimalizace obrázků

1. [BLOG_QUICKSTART.md](../BLOG_QUICKSTART.md#2️⃣-přidej-a-optimalizuj-obrázky) - Rychlý návod
2. [CONTRIBUTING.md](../CONTRIBUTING.md#optimalizace-obrázků) - Detailní návod
3. Skripty: `scripts/optimize-blog-article.sh`, `scripts/resize-images.sh`

### Deployment

1. [README.md](../README.md#-deployment) - Přehled
2. [CONTRIBUTING.md](../CONTRIBUTING.md#build-a-deployment) - Detailní postup
3. [I18N_STATIC_PRERENDER.md](I18N_STATIC_PRERENDER.md#-výhody-statického-řešení) - Proč statický build

### Cookie consent

1. [COOKIE_CONSENT_GA.md](COOKIE_CONSENT_GA.md) - Kompletní dokumentace

---

## 🎓 Learning Path

### Pro editora blogu (non-tech):

```
1. README.md (přehled projektu)
   ↓
2. BLOG_QUICKSTART.md (jak přidat článek)
   ↓
3. CONTRIBUTING.md (reference když něco nevíš)
```

**Čas:** 30 minut

### Pro vývojáře (nový na projektu):

```
1. README.md (tech stack, struktura)
   ↓
2. ARCHITECTURE.md (principy a konvence)
   ↓
3. I18N_STATIC_PRERENDER.md (jak fungují jazyky)
   ↓
4. BLOG_SYSTEM_TECHNICAL.md (jak funguje blog)
   ↓
5. I18N_CHEATSHEET.md (keep jako reference)
```

**Čas:** 2-3 hodiny

### Pro vývojáře (zkušený SvelteKit):

```
1. I18N_CHEATSHEET.md (rychlý přehled)
   ↓
2. I18N_STATIC_PRERENDER.md (proč a jak)
   ↓
3. BLOG_SYSTEM_TECHNICAL.md (MDSvex specifika)
```

**Čas:** 1 hodina

---

## 🔍 Kdy číst který dokument?

### "Chci přidat blog článek"
→ [BLOG_QUICKSTART.md](../BLOG_QUICKSTART.md)

### "Jak optimalizovat obrázky?"
→ [CONTRIBUTING.md](../CONTRIBUTING.md#optimalizace-obrázků)

### "Jak přidat nový překlad?"
→ [CONTRIBUTING.md](../CONTRIBUTING.md#přidání-překladu)

### "Proč odkazy nefungují v /en verzi?"
→ [I18N_STATIC_PRERENDER.md](I18N_STATIC_PRERENDER.md#8-navigační-odkazy---locale-aware-urls)

### "Jak funguje entries() funkce?"
→ [BLOG_SYSTEM_TECHNICAL.md](BLOG_SYSTEM_TECHNICAL.md#9️⃣-entries-funkce---pro-prerender-dynamických-routes)

### "Proč statický místo SSR?"
→ [I18N_STATIC_PRERENDER.md](I18N_STATIC_PRERENDER.md#-výhody-statického-řešení)

### "Jak funguje reroute hook?"
→ [I18N_STATIC_PRERENDER.md](I18N_STATIC_PRERENDER.md#-reroute-hook---klíč-k-jednoduchosti)

### "Co je MDSvex?"
→ [BLOG_SYSTEM_TECHNICAL.md](BLOG_SYSTEM_TECHNICAL.md#3️⃣-mdsvex-kompilace)

### "Jak funguje cookie consent?"
→ [COOKIE_CONSENT_GA.md](COOKIE_CONSENT_GA.md)

### "Proč blog preview byl prázdný?"
→ [I18N_STATIC_PRERENDER.md](I18N_STATIC_PRERENDER.md#10-blogpreview---synchronní-loading-místo-onmount)

---

## 📊 Statistiky dokumentace

| Dokument | Řádky | Téma |
|----------|-------|------|
| README.md | ~150 | Přehled projektu |
| BLOG_QUICKSTART.md | ~200 | Blog quickstart |
| CONTRIBUTING.md | ~400 | Správa obsahu |
| BLOG_SYSTEM_TECHNICAL.md | ~1000 | Blog technicky |
| I18N_STATIC_PRERENDER.md | ~700 | i18n změny |
| I18N_CHEATSHEET.md | ~280 | i18n reference |
| COOKIE_CONSENT_GA.md | ~500 | Cookie consent |
| ARCHITECTURE.md | ~600 | Architektura |

**Celkem:** ~3800 řádků dokumentace

---

## 🛠️ Skripty

| Skript | Použití | Účel |
|--------|---------|------|
| `scripts/optimize-blog-article.sh` | `./optimize-blog-article.sh 004` | Optimalizace blog obrázků |
| `scripts/resize-images.sh` | `./resize-images.sh` | Resize všech obrázků |
| `scripts/optimize-images.sh` | `./optimize-images.sh` | WebP konverze |

---

## 💡 Tips

- **Začni s README.md** - získáš přehled
- **QUICKSTART dokumenty** - pro rychlé úkoly
- **TECHNICAL dokumenty** - pro hloubkové pochopení
- **CHEATSHEET** - drž otevřený jako referenci
- **CONTRIBUTING** - vše na jednom místě

---

**Happy coding!** 🚀

