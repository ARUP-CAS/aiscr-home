# Napojení na sdílený newsfeed (aiscr-news)

Blog tohoto webu čerpá články ze sdíleného newsfeedu
[ARUP-CAS/aiscr-news](https://github.com/ARUP-CAS/aiscr-news). Článek se napíše
jednou (Markdown + metadata), GitHub Action ho publikuje jako JSON feed na
GitHub Pages a weby AIS CR si ho stahují za běhu — **nový článek se na webu
objeví bez rebuildu a nasazení**.

## Odkud se data berou

```
https://arup-cas.github.io/aiscr-news/feed/aiscr/<jazyk>.json          # celý feed
https://arup-cas.github.io/aiscr-news/feed/aiscr/<jazyk>/<slug>.json   # jeden článek
```

Klient feedu je v `src/lib/feed.ts` (konstanta `FEED_BASE`, filtruje se
`type: "news"`). Obrázky článků i fotky autorů hostuje repo aiscr-news —
feed obsahuje absolutní URL. Tělo článku přichází jako sanitizované HTML
a vkládá se přes `{@html}`.

## Jak přidat článek

V repu [aiscr-news](https://github.com/ARUP-CAS/aiscr-news) podle jeho README —
do tohoto repozitáře se pro nový článek nesahá. Aby se článek zobrazil na tomto
webu, musí mít v `item.yaml` uvedený web `aiscr`.

## Jak web s feedem pracuje

| Místo | Soubor | Chování |
|-------|--------|---------|
| Homepage (sekce Blog) | `src/routes/+page.ts` + `BlogPreview.svelte` | Prerender s obsahem feedu z doby buildu, v prohlížeči se obnoví živě |
| Seznam `/blog/` | `src/routes/blog/+page.ts` + `+page.svelte` | Stejné — prerender + živé obnovení |
| Detail `/blog/<slug>/` | `src/routes/blog/[slug]/+page.ts` + `+page.svelte` | Články známé při buildu se prerenderují (`entries()` čte živý feed) a v prohlížeči se obnoví živě — úpravy článku se propíší bez rebuildu. Novější články obslouží SPA fallback `404.html` |

URL zůstávají stejné jako u původního in-repo blogu (`/blog/<slug>/`,
`/en/blog/<slug>/`) — staré odkazy fungují beze změny.

**Jazyky:** článek bez anglické verze se na `/en/blog` zobrazí česky
(fallback na češtinu, stejně jako dřív).

## Konfigurace hostingu pro nové články

Web je čistě statický. Článek publikovaný **po posledním buildu** nemá
vygenerované HTML — server musí pro neexistující cestu `/blog/<slug>/` podat
SPA fallback `build/404.html`, který článek načte z feedu v prohlížeči.

**Apache (aktuální hosting aiscr.cz):** funguje automaticky — v buildu je
přibalený `static/.htaccess` s pravidlem:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(en/)?blog/ /404.html [L]
```

Po nasazení ověř otevřením `/blog/neexistujici-slug/` — má naskočit web
(klientská hláška „Článek nenalezen“), ne holá Apache 404. Pokud se
`.htaccess` neprojeví, je na serveru vypnuté `AllowOverride` — pak je
potřeba stejné pravidlo přidat do vhost konfigurace (nebo povolit
`AllowOverride FileInfo`).

Záměrné chování `.htaccess` (dvě různé věci):

- `RewriteRule` platí jen pro `/blog/*` a `/en/blog/*`: neexistující cesta
  tam vrací fallback se **statusem 200**, aby crawleři indexovali nové
  články (daň: i překlep v slugu vypadá pro roboty jako živá stránka).
- `ErrorDocument 404` je **globální pro celý web**: jakákoli jiná
  neexistující cesta (včetně chybějících assetů) vrátí stránku webu
  s poctivým statusem 404 místo výchozí Apache chybové stránky —
  návštěvník uvidí web s hláškou o nenalezené stránce.

Nginx (kdyby se hosting měnil):

```nginx
location /blog/    { try_files $uri $uri/ /404.html; }
location /en/blog/ { try_files $uri $uri/ /404.html; }
```

Bez této konfigurace se nic nerozbije — jen detail nového článku vrátí 404,
dokud se web znovu nesestaví a nenasadí (seznam i homepage nové články
zobrazují vždy).

## Provozní poznámky

- GitHub Pages cachuje feed ~10 minut — tak dlouho může trvat, než se
  publikovaný článek objeví u návštěvníků.
- `pnpm build` potřebuje přístup na `arup-cas.github.io` (prerender čte živý
  feed). Když feed není dostupný nebo vrací chyby, build záměrně selže,
  aby se nezapekl prázdný blog. **Smlouva s aiscr-news:** český feed
  (`feed/aiscr/cs.json`) musí existovat vždy; překladové feedy (`en.json`)
  smí chybět — použije se fallback na češtinu.
- HTML článků sanitizuje generátor feedu; v prohlížeči se sanitizuje ještě
  jednou přes DOMPurify (obrana do hloubky). Prerenderovaný výstup (to, co
  vidí crawleři a návštěvníci bez JS) spoléhá jen na sanitizaci generátoru —
  zbytkové riziko kompromitovaného feedu v době buildu je vědomě přijaté.
- OG metadata (náhledy na sociálních sítích) mají jen články prerenderované
  při buildu; články servírované přes SPA fallback je nastavují až klientsky.
  Po publikaci důležitého článku se proto hodí web přebuildit a nasadit.
