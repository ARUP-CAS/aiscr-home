---
# Tohle je YAML header, kde páry 'key: value' specifikují metadata a technické informace, za # je komentář.
# Definice pro jednotlivé položky viz také docs/BLOG_SYSTEM_TECHNICAL.md
slug: "template" # Podoba URL za https://www.aiscr.cz/blog/<slug>
title: "Tohle je šablona" # Název blogového příspěvku
excerpt: "Tohle je popisek." # Krátký popisek pro prewiew
date: "2026-01-15" # Datum, které se zobrazí u příspěvku (typicky den, kdy byl příspěvek publikován)
category: "Návod" # Kategorie, zatím se vyskytlo: ["Novinka", "Událost"]
published: false # true/false pro zveřejněný, resp. skrytý příspěvek
locale: "cs" # Jazyk
readingTime: "5 minut" # Doba čtení
author: "AIS CR" # Autor příspěvku
authorRole: Infrastruktura" # Role autora, které se zobrazí pod jménem.
authorImage: "/images/blog/author/<...>" # Fotka/obrázek autora.
image: "/images/blog/<...>" # Cover fotografie.
---

Následuje text formátovaný pomocí značkovacího jazyka [Markdown](https://www.markdownguide.org/).


## Nadpisy

Nadpisy se vytváří pomocí mřížky #, čím víc mřížek, tím nižší úroveň nadpisu.

# Nadpis 1

## Nadpis 2 

atd.


## Odstavce

Odstavce oddělujeme tím, že mezi nimi vynecháme řádek.
Novou větu pak začínáme vždy na novém řádku.
To je výhodné pro version control.

Na konci nějakého funkčního celku, třeba před dalším nadpisem, zpravidla vynecháváme dva řádky, ale není to nutnost.


## Formátování textu

Text jde **ztučnit** pomocí dvou hvězdiček **, *italiku* uděláme jednou hvězdičkou *.
`Kód` v textu lze obalit zpětnými uvozovkami `.
Samostatně stojící kód pak ve třech zpětných uvozovkách.

```Python
print("Hello, World!")
```

Pomocí > jde vytvořit nějakou citaci, vložit citát apod., např.

> AIS CR je velká výzkumná infrastruktura.


## Odkazy

Odkazy vkládáme tak, že text obalíme [hranatými závrokami](https://www.aiscr.cz/) a za ně do normálních závorek vložíme cílové URL.


## Obrázky

![Popisek obrázku](cesta/k/obrázku)


## Seznamy

Seznamy vytvářme pomocí odrážek:

- položka 1
- položka 2
- položka 3 apod.

Číslované seznamy pak pomocí čísel:

1. položka 1
2. položka 2
1. položka 3, ikdyž tu máme na začátku řádku číslo 1, bude položka správně číslovaná jako třetí v pořadí.


## Struktura

Každý blogový příspěvek by měl na konci obsahovat **Shrnutí** a sekci s odkazy **Chcete vědět víc?**.


## Překlad 

Příspěvky mohou zároveň obsahovat českou i anglickou verzi, cizojazyčnou verzi bude vhodné oddělit např. horizontální čarou, kterou docílíme například napsáním tří (a více) pomlček ---.

---