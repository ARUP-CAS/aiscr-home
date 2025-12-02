# Cookie Consent a Google Analytics

Tento dokument vysvětluje GDPR-compliant implementaci cookie consent banneru a napojení na Google Analytics.

## 🎯 Architektura

```
app.html (GA script s consent mode)
    ↓
+layout.svelte (CookieBanner komponenta)
    ↓
CookieBanner.svelte (localStorage + gtag update)
    ↓
Footer (tlačítko "Nastavení cookies")
```

---

## 1️⃣ Google Analytics s Consent Mode v2

**Soubor:** `src/app.html`

### Kompletní implementace:

```html
<!-- Google Analytics - loads only after consent -->
<script>
    // Default to denied until user consent
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
        'analytics_storage': 'denied'
    });
</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-D7ZNZ6XCX6"></script>
<script>
    gtag('js', new Date());
    gtag('config', 'G-D7ZNZ6XCX6');
    
    // Check if user already accepted cookies
    if (localStorage.getItem('cookieConsent') === 'accepted') {
        gtag('consent', 'update', {
            'analytics_storage': 'granted'
        });
    }
</script>
```

### Jak to funguje krok po kroku:

#### Krok 1: Inicializace gtag funkce

```javascript
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
```

**Co se děje:**
- Vytvoří globální `dataLayer` array
- Definuje `gtag()` funkce která pushuje do dataLayer
- Toto běží **synchronně** před načtením GA scriptu

#### Krok 2: Výchozí consent (DENIED)

```javascript
gtag('consent', 'default', {
    'analytics_storage': 'denied'
});
```

**Důležité:**
- 🔒 **Analytics VYPNUTO** jako výchozí stav
- Toto je **GDPR compliant** - žádné cookies bez souhlasu
- GA script se načte, ale **nesbírá data**

#### Krok 3: Načtení GA scriptu

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-D7ZNZ6XCX6"></script>
```

**Proč async?**
- Nenablokuje renderování stránky
- Načítá se na pozadí
- GA ID: `G-D7ZNZ6XCX6`

#### Krok 4: Konfigurace GA

```javascript
gtag('js', new Date());
gtag('config', 'G-D7ZNZ6XCX6');
```

**Co to dělá:**
- Inicializuje GA s naším tracking ID
- GA je připravené, ale **nesbírá data** (consent: denied)

#### Krok 5: Kontrola uloženého souhlasu

```javascript
if (localStorage.getItem('cookieConsent') === 'accepted') {
    gtag('consent', 'update', {
        'analytics_storage': 'granted'
    });
}
```

**Scenario:**
- Uživatel už dříve klikl "Přijmout"
- `localStorage` obsahuje `'accepted'`
- GA se **automaticky aktivuje** při načtení stránky

---

## 2️⃣ CookieBanner komponenta

**Soubor:** `src/lib/components/CookieBanner.svelte`

### Props a state:

```svelte
<script lang="ts">
    import { m } from '$lib/paraglide/messages.js';
    import { onMount } from 'svelte';

    // Bindable prop - rodič může otevřít banner
    let { shouldOpen = $bindable(false) } = $props<{ shouldOpen?: boolean }>();
    
    // Internal state
    let showBanner = $state(false);
</script>
```

**Co je `$bindable`?**

Svelte 5 two-way binding:

```svelte
<!-- Parent (+layout.svelte) -->
<CookieBanner bind:shouldOpen={openCookieBanner} />

<!-- Parent může nastavit: -->
openCookieBanner = true;

<!-- → CookieBanner dostane shouldOpen = true -->
```

### Logika zobrazení banneru:

```svelte
onMount(() => {
    // Zkontrolujeme localStorage
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (cookieConsent === null) {
        // Uživatel ještě nerozhodl → zobraz banner
        showBanner = true;
    }
    // Pokud je 'accepted' nebo 'rejected', banner se nezobrazí
});
```

**Stavy v localStorage:**

| Hodnota | Význam | Banner? |
|---------|--------|---------|
| `null` | Uživatel ještě nerozhodl | ✅ Zobraz |
| `'accepted'` | Souhlas udělen | ❌ Nezobrazuj |
| `'rejected'` | Souhlas odepřen | ❌ Nezobrazuj |

### Sledování shouldOpen prop:

```svelte
$effect(() => {
    if (shouldOpen) {
        showBanner = true;
        shouldOpen = false;  // Reset
    }
});
```

**Účel:**
- Footer má tlačítko "Nastavení cookies"
- Kliknutí → parent nastaví `openCookieBanner = true`
- Effect detekuje změnu → zobrazí banner
- Reset aby se nezobrazil znovu

---

## 3️⃣ Accept Cookies - aktivace GA

```javascript
function acceptCookies() {
    // 1. Ulož souhlas
    localStorage.setItem('cookieConsent', 'accepted');
    
    // 2. Skryj banner
    showBanner = false;
    
    // 3. Aktivuj Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('consent', 'update', {
            'analytics_storage': 'granted'
        });
    }
}
```

### Co se stane:

#### Okamžitě:
1. ✅ localStorage = `'accepted'`
2. ✅ Banner zmizí
3. ✅ GA začne sbírat data

#### Při dalším načtení stránky:
```javascript
// app.html zkontroluje:
if (localStorage.getItem('cookieConsent') === 'accepted') {
    gtag('consent', 'update', { 'analytics_storage': 'granted' });
}
```

#### GA consent flow:

```
Page load:
  ↓
consent: denied (default)
  ↓
User clicks "Accept"
  ↓
consent: granted (update)
  ↓
GA starts tracking
  ↓
Next page load:
  ↓
localStorage check → consent: granted immediately
```

---

## 4️⃣ Reject Cookies - vypnutí GA

```javascript
function rejectCookies() {
    // 1. Ulož odmítnutí
    localStorage.setItem('cookieConsent', 'rejected');
    
    // 2. Skryj banner
    showBanner = false;
    
    // 3. Zajisti že GA zůstane vypnuté
    if (typeof gtag !== 'undefined') {
        gtag('consent', 'update', {
            'analytics_storage': 'denied'
        });
    }
}
```

**GA zůstane vypnuté:**
- Při dalším načtení stránky consent zůstane `'denied'`
- GA script se načte, ale **nesbírá žádná data**

---

## 5️⃣ Footer integrace - "Nastavení cookies"

**Soubor:** `src/lib/components/Footer.svelte`

```svelte
<script lang="ts">
    // Callback prop
    let { onOpenCookies } = $props<{ onOpenCookies: () => void }>();
</script>

<button onclick={onOpenCookies}>
    {m['footer.cookiePolicy']()}
</button>
```

**Parent (layout):**

```svelte
<script>
    let openCookieBanner = $state(false);
    
    function triggerCookieBanner() {
        openCookieBanner = true;
    }
</script>

<Footer onOpenCookies={triggerCookieBanner} />
<CookieBanner bind:shouldOpen={openCookieBanner} />
```

**Flow:**

```
User clicks "Cookies" button in Footer
    ↓
Footer calls: onOpenCookies()
    ↓
Layout: triggerCookieBanner() → openCookieBanner = true
    ↓
CookieBanner: shouldOpen changes
    ↓
$effect detects change → showBanner = true
    ↓
Banner appears
```

---

## 6️⃣ Google Consent Mode v2

### Co je Consent Mode?

Google Analytics Consent Mode je API které:

- Umožňuje načíst GA script **před** souhlasem
- Tracking je **vypnutý** dokud uživatel nesouhlasí
- Kompatibilní s GDPR/ePrivacy

### Dva stavy consent:

```javascript
// DENIED - GA nesbírá data
gtag('consent', 'update', {
    'analytics_storage': 'denied'
});

// GRANTED - GA sbírá data
gtag('consent', 'update', {
    'analytics_storage': 'granted'
});
```

### Další consent typy (můžeš přidat):

```javascript
gtag('consent', 'update', {
    'analytics_storage': 'granted',      // GA analytics
    'ad_storage': 'denied',              // Reklamy
    'ad_user_data': 'denied',            // User data pro reklamy
    'ad_personalization': 'denied',      // Personalizované reklamy
    'functionality_storage': 'granted',  // Funkční cookies
    'personalization_storage': 'granted', // Personalizace
    'security_storage': 'granted'        // Bezpečnostní
});
```

**My používáme jen `analytics_storage`** - stačí pro GA tracking.

---

## 7️⃣ localStorage persistence

### Proč localStorage?

- ✅ **Client-side only** - žádný server
- ✅ **Persists** - přežije zavření prohlížeče
- ✅ **Jednoduchý API** - setItem/getItem
- ✅ **Per origin** - každá doména má vlastní

### Struktura:

```javascript
// Key
'cookieConsent'

// Možné hodnoty
null           // Ještě nerozhodl
'accepted'     // Souhlasil
'rejected'     // Odmítl
```

### Kontrola v DevTools:

```
Browser DevTools → Application → Local Storage → https://aiscr.cz
→ cookieConsent: "accepted"
```

### Smazání souhlasu (pro testing):

```javascript
localStorage.removeItem('cookieConsent');
// → při dalším načtení se banner zobrazí znovu
```

---

## 8️⃣ TypeScript deklarace pro gtag

**Soubor:** `src/app.d.ts`

```typescript
declare global {
    namespace App {
        // ... SvelteKit types
    }

    // Google Analytics gtag function
    function gtag(...args: unknown[]): void;
}
```

**Proč?**

- `gtag` je globální funkce z Google scriptu
- TypeScript ji nezná → error
- Deklarace říká: "Tato funkce existuje na `window`"

**Použití v komponentách:**

```typescript
if (typeof gtag !== 'undefined') {
    gtag('consent', 'update', { ... });
}
```

- `typeof gtag !== 'undefined'` - runtime kontrola
- Chráni před chybou pokud GA script ještě není načtený

---

## 9️⃣ Banner UI a animace

### Pozicování:

```svelte
<div class="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
    <div class="pointer-events-auto w-full max-w-4xl ...">
        <!-- Banner content -->
    </div>
</div>
```

**Trik:**
- Outer div: `pointer-events-none` - neblokuje klikání
- Inner div: `pointer-events-auto` - banner je klikatelný
- `flex items-end` - zarovnání dolů
- `z-50` - vysoký z-index (nad vším)

### Animace:

```css
@keyframes slideUp {
    from {
        transform: translateY(100%);  /* Pod obrazovkou */
        opacity: 0;
    }
    to {
        transform: translateY(0);     /* Na pozici */
        opacity: 1;
    }
}

.fixed {
    animation: slideUp 0.3s ease-out;
}
```

Banner **vyslide zdola** s fade-in efektem.

---

## 🔟 Complete Flow Diagram

### První návštěva (bez souhlasu):

```
1. Browser načte stránku
   ↓
2. app.html: gtag('consent', 'default', { analytics_storage: 'denied' })
   ↓
3. GA script se načte (async)
   ↓
4. gtag('config', 'G-D7ZNZ6XCX6')
   → GA inicializované, ale NESBÍRÁ data
   ↓
5. localStorage.getItem('cookieConsent') === null
   → Souhlas zatím není
   ↓
6. CookieBanner.onMount()
   → cookieConsent === null → showBanner = true
   ↓
7. Banner se zobrazí ⚠️
```

### User klikne "Přijmout":

```
1. acceptCookies() funkce
   ↓
2. localStorage.setItem('cookieConsent', 'accepted')
   ↓
3. showBanner = false  → Banner zmizí
   ↓
4. gtag('consent', 'update', { analytics_storage: 'granted' })
   ↓
5. GA začne sbírat data ✅
```

### Další návštěva (souhlas již udělen):

```
1. Browser načte stránku
   ↓
2. app.html: gtag('consent', 'default', { analytics_storage: 'denied' })
   ↓
3. GA script se načte
   ↓
4. localStorage.getItem('cookieConsent') === 'accepted'
   ↓
5. gtag('consent', 'update', { analytics_storage: 'granted' })
   → GA AKTIVNÍ hned při načtení ✅
   ↓
6. CookieBanner.onMount()
   → cookieConsent !== null → showBanner zůstane false
   ↓
7. Banner se NEZOBRAZÍ
```

### User klikne "Odmítnout":

```
1. rejectCookies() funkce
   ↓
2. localStorage.setItem('cookieConsent', 'rejected')
   ↓
3. showBanner = false
   ↓
4. gtag('consent', 'update', { analytics_storage: 'denied' })
   ↓
5. GA ZŮSTÁVÁ VYPNUTÉ ❌
```

---

## 1️⃣1️⃣ GDPR Compliance

### ✅ Splňuje GDPR protože:

1. **Opt-in systém** - tracking vypnutý jako default
2. **Explicit consent** - uživatel musí kliknout "Přijmout"
3. **Možnost odmítnutí** - tlačítko "Odmítnout"
4. **Informovaný souhlas** - popis co cookies dělají
5. **Přehodnocení** - tlačítko v footeru pro změnu
6. **Persistence** - localStorage uchovává rozhodnutí

### ❌ NEGDPR příklad (jak to NEDĚLAT):

```html
<!-- ❌ ŠPATNĚ - GA se aktivuje okamžitě -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXX"></script>
<script>
    gtag('js', new Date());
    gtag('config', 'G-XXX');
    // Žádný consent mode!
</script>
```

### ✅ Náš přístup:

```html
<!-- ✅ SPRÁVNĚ - Consent Mode v2 -->
<script>
    gtag('consent', 'default', { 'analytics_storage': 'denied' });
</script>
<script async src="..."></script>
<script>
    gtag('config', 'G-XXX');
    // Tracking vypnutý dokud user nesouhlasí
</script>
```

---

## 1️⃣2️⃣ Consent Mode v2 vs v1

### Consent Mode v1 (deprecated):

```javascript
// Starý způsob
gtag('config', 'G-XXX', {
    'anonymize_ip': true,
    'cookie_flags': 'SameSite=None;Secure'
});
```

### Consent Mode v2 (current):

```javascript
// Nový způsob
gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied'
});

gtag('consent', 'update', {
    'analytics_storage': 'granted'
});
```

**Výhody v2:**
- ✅ Granulární kontrola (analytics vs ads vs ...)
- ✅ Kompatibilní s novými EU regulacemi
- ✅ Google Analytics 4 optimalizováno pro tento režim

---

## 1️⃣3️⃣ Testing Cookie Consent

### Scénář 1: První návštěva

```
1. Otevři stránku v incognito režimu
2. Banner by se měl zobrazit ⚠️
3. Otevři DevTools → Console
4. Zkontroluj: localStorage.getItem('cookieConsent')
   → null
5. Network tab → neměly by být GA tracking requesty
```

### Scénář 2: Accept cookies

```
1. Klikni "Přijmout"
2. Banner zmizí
3. Console: localStorage.getItem('cookieConsent')
   → "accepted"
4. Network tab → měly by být GA requesty:
   - /g/collect?...
   - /j/collect?...
5. Refresh stránku
6. Banner by se NEMĚL zobrazit
7. GA tracking okamžitě aktivní
```

### Scénář 3: Reject cookies

```
1. Otevři stránku (incognito)
2. Klikni "Odmítnout"
3. localStorage → "rejected"
4. Network tab → ŽÁDNÉ GA requesty
5. Refresh stránku
6. Banner se nezobrazí
7. GA zůstává vypnuté
```

### Scénář 4: Změna rozhodnutí

```
1. Máš uložený souhlas
2. Footer → klikni "Užívání cookies"
3. Banner se zobrazí znovu
4. Můžeš změnit rozhodnutí
```

### Debug v Console:

```javascript
// Zkontrolovat consent status
window.dataLayer
// → mělo by obsahovat consent events

// Zkontrolovat localStorage
localStorage.getItem('cookieConsent')
// → null / "accepted" / "rejected"

// Force reset (pro testing)
localStorage.removeItem('cookieConsent');
location.reload();
```

---

## 1️⃣4️⃣ Co GA sleduje (když je povoleno)?

### Automatické tracking:

- 📊 **Page views** - každá navigace
- ⏱️ **Session duration** - jak dlouho user na webu
- 🖱️ **User engagement** - scrolling, clicking
- 📱 **Device info** - browser, OS, screen size
- 🌍 **Location** - země (z IP)
- 📈 **Traffic source** - odkud user přišel

### Co GA NESLEDUJE:

- ❌ Osobní údaje (jméno, email)
- ❌ IP adresa (anonymizována)
- ❌ Přesná lokace (jen země)

### Custom events (můžeš přidat):

```javascript
// Tracking download
gtag('event', 'download', {
    'file_name': 'aiscr-dataset.zip'
});

// Tracking external link
gtag('event', 'click', {
    'event_category': 'external_link',
    'event_label': 'AMČR website'
});
```

---

## 1️⃣5️⃣ Překlady pro Cookie Banner

**Soubor:** `messages/cs.json`

```json
{
    "cookies.title": "Nastavení cookies",
    "cookies.description": "Tato stránka využívá analytická cookies...",
    "cookies.accept": "Potvrdit",
    "cookies.reject": "Zamítnout"
}
```

**Soubor:** `messages/en.json`

```json
{
    "cookies.title": "Cookie Settings",
    "cookies.description": "This website uses analytical cookies...",
    "cookies.accept": "Accept",
    "cookies.reject": "Reject"
}
```

**Použití:**

```svelte
<h2>{m['cookies.title']()}</h2>
<div>{@html m['cookies.description']()}</div>
<button>{m['cookies.accept']()}</button>
```

---

## 1️⃣6️⃣ Alternativní implementace (pokročilé)

### Možnost 1: Cookie místo localStorage

```javascript
// Set cookie
document.cookie = `cookieConsent=accepted; max-age=31536000; path=/; SameSite=Lax`;

// Read cookie
const consent = document.cookie
    .split('; ')
    .find(row => row.startsWith('cookieConsent='))
    ?.split('=')[1];
```

**Výhoda:** Funguje i pokud JS zakázaný (server může číst)  
**Nevýhoda:** Složitější API

### Možnost 2: Consent management platform

Pro velké weby s mnoha tracking skripty:

- **OneTrust**
- **Cookiebot**
- **Didomi**

Pro náš use-case (jen GA) je vlastní řešení jednodušší.

### Možnost 3: Tag Manager

Místo přímého GA scriptu:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXX');</script>
```

**Výhoda:** Více tracking služeb centrálně  
**Nevýhoda:** Složitější setup

---

## 1️⃣7️⃣ Monitoring a analytics

### Zkontrolovat že GA funguje:

1. **Google Analytics dashboard:**
   - Přihlaš se na [analytics.google.com](https://analytics.google.com)
   - Property: G-D7ZNZ6XCX6
   - Realtime → měly by se zobrazovat aktivní uživatelé

2. **GA DebugView:**
   - Přidej `?debug_mode=true` k URL
   - GA dashboard → DebugView
   - Vidíš live events

3. **Browser DevTools:**
   - Network tab → filtruj "collect"
   - Měly by být requesty na `www.google-analytics.com/g/collect`

### Tracking verification:

```javascript
// V Console
window.dataLayer
// Mělo by obsahovat events:

[
    ['consent', 'default', {...}],
    ['js', Date],
    ['config', 'G-D7ZNZ6XCX6'],
    ['consent', 'update', {...}],
    // ... page view events
]
```

---

## 1️⃣8️⃣ Bezpečnost a best practices

### ✅ Dělá správně:

1. **Opt-in first** - consent denied jako default
2. **Explicit permission** - user musí aktivně kliknout
3. **Clear information** - popis v banneru
4. **Easy to reject** - tlačítko stejně viditelné
5. **Revocable** - možnost změnit v Footeru

### ⚠️ Co sledovat:

1. **localStorage limit** - ~5-10MB per domain
2. **Safari tracking prevention** - může blokovat GA
3. **Ad blockers** - můžou blokovat gtag script
4. **Browser do-not-track** - respektovat?

### 🔐 Privacy considerations:

```javascript
// ✅ Dobře - žádné PII (personally identifiable info)
gtag('event', 'page_view', {
    page_title: document.title,
    page_path: window.location.pathname
});

// ❌ Špatně - obsahuje email!
gtag('event', 'form_submit', {
    user_email: 'jan@novak.cz'  // Nezapisovat do GA!
});
```

---

## 1️⃣9️⃣ Troubleshooting

### ❌ "Banner se nezobrazuje"

**Možné příčiny:**

1. localStorage už má hodnotu
   ```javascript
   // Console:
   localStorage.getItem('cookieConsent')  // 'accepted' nebo 'rejected'
   
   // Fix:
   localStorage.removeItem('cookieConsent')
   location.reload()
   ```

2. CSS z-index problém
   ```css
   /* Zkontroluj že má vysoký z-index */
   .fixed { z-index: 50; }
   ```

### ❌ "GA nesleduje i přes souhlas"

**Možné příčiny:**

1. Ad blocker
   - Vypni ad blocker pro testing
   
2. GA script se nenačetl
   ```javascript
   // Console:
   typeof gtag  // Mělo by být 'function'
   ```

3. Consent nebyl updateován
   ```javascript
   // Console:
   window.dataLayer
   // Měl by obsahovat: ['consent', 'update', {analytics_storage: 'granted'}]
   ```

### ❌ "Banner se zobrazuje znovu a znovu"

**Příčina:** localStorage se nenastavuje

```javascript
// Console:
localStorage.setItem('cookieConsent', 'accepted')
// Pokud error → localStorage je zakázaný (private mode, browser settings)
```

**Fix:** Fallback na sessionStorage:

```javascript
try {
    localStorage.setItem('cookieConsent', 'accepted');
} catch (e) {
    sessionStorage.setItem('cookieConsent', 'accepted');
}
```

---

## 2️⃣0️⃣ Shrnutí - jak to celé funguje

### Komponenty systému:

| Komponenta | Zodpovědnost |
|------------|--------------|
| `app.html` | GA script + consent mode init |
| `CookieBanner.svelte` | UI, localStorage, consent update |
| `+layout.svelte` | Mounting CookieBanner |
| `Footer.svelte` | Tlačítko pro re-otevření |
| `app.d.ts` | TypeScript deklarace |

### Data flow:

```
app.html (GA init, consent: denied)
    ↓
CookieBanner (onMount → check localStorage)
    ↓
    ├─ null → show banner
    ├─ 'accepted' → hide banner, update consent
    └─ 'rejected' → hide banner
    ↓
User interaction:
    ├─ Accept → localStorage + gtag update + hide
    └─ Reject → localStorage + gtag denied + hide
    ↓
Footer "Cookies" → trigger banner again
```

### State diagram:

```
[No decision]
    ↓ (onMount)
Show Banner
    ↓
    ├─ [Accept] → localStorage='accepted' → GA ON
    ├─ [Reject] → localStorage='rejected' → GA OFF
    └─ [Later: Footer click] → Show Banner again
```

---

## 📚 Reference

- **Google Consent Mode v2:** https://developers.google.com/tag-platform/security/guides/consent
- **GA4 Documentation:** https://developers.google.com/analytics/devguides/collection/ga4
- **GDPR Guidelines:** https://gdpr-info.eu/

---

**Vytvořeno:** 30. listopadu 2025  
**GA Tracking ID:** G-D7ZNZ6XCX6  
**Compliance:** GDPR/ePrivacy compliant

