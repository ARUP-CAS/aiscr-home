---
slug: ariadne-agregace
title: "Data z AMČR v ARIADNE"
excerpt: "Blogpost vysvětluje agregaci dat z AMČR v mezinárodní infrastruktuře ARIADNE."
date: "2026-XX-XX"
category: ["ARIADNE", "Data"]
published: true
locale: "cs"
readingTime: "20 minut"
author: "Petr Pajdla & David Novák"
authorRole: ""
authorImage: "/images/blog/author/?.jpg"
image: "/images/blog/00X/.webp"
---

Cílem tohoto příspěvku je představit to, jak jsou data z AMČR agregována mezinárodní infrastrukturou ARIADNE a jaké služby ARIADNE nabízí.


## Co je ARIADNE?

[ARIADNE Research Infrastrucutre](https://www.ariadne-research-infrastructure.eu/) je mezinárodní výzkumná infrastruktura, jejímž posláním je 

> Integrovat a efektivně sloužit výzkumné komunitě, která studuje minulost pro lepší pochopení současnosti pomocí nástrojů a metodologie budoucnosti, ve službě kultuře a společnosti.

ARIADNE RI byla založena v roce 2022 jako nezisková společnost a navazuje na projekty ARIADNEplus (2018--2022) a ARIADNE Integrating Activity (2012--2016).
[AIS CR](https://www.aiscr.cz/), resp. Archeologické ústavy v [Praze](https://www.arup.cas.cz/) a [Brně](https://www.arub.cz/) jsou od začátku součástí této iniciativy a jedněmi z největších poskytovatelů dat.

Následující video krátce představuje ARIADNE Portál, stěžejní službu provozovanou ARIADNE:

<div style="padding:56.31% 0 0 0;position:relative;">
  <iframe 
    src="https://player.vimeo.com/video/1015562684?badge=0&autopause=0&player_id=0&app_id=58479" 
    frameborder="0" 
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    style="position:absolute;top:0;left:0;width:100%;height:100%;" 
    title="ARIADNE for researchers">
  </iframe>
</div>


### ARIADNE Portál

[ARIADNE Portál](https://portal.ariadne-infrastructure.eu/) je hlavním nástrojem umožňujícím procházení více než 4 mil. položek týkajících se archeologie a kulturního dědictví a památek agregovaných ARIADNE službami.
Katalog funguje nad Linked Open Daty, která jsou shromážděna v grafové databázi a pomocí standardizace řízených slovníků a jednotného metadatového schématu nabízí vyhledávání v archeologických datech agregovaných z různých zemí, institucí, projektů apod.

Portál a jeho fungování zevrubně představuje prof. Julian Richards ([Archaeology Data Service](https://archaeologydataservice.ac.uk/)) v následujícím videu:

<div style="padding:56.31% 0 0 0;position:relative;">
  <iframe 
    src="https://player.vimeo.com/video/1040441414?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
    frameborder="0" 
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    style="position:absolute;top:0;left:0;width:100%;height:100%;" 
    title="ARIADNE for researchers">
  </iframe>
</div>


#### Co? Kdy? Kde?


## Data z AMČR v ARIADNE

Data z AMČR byla v ARIADNE dostupná už dříve, po přechodu z desktopové verze aplikace (více ve [Zpravodaji č. 11](https://amcr-help.aiscr.cz/zpravodaj/zpravodaj_11.html)) a zásazích v databázi a [OAI-PMH API](https://api.aiscr.cz/) jsme naše data pro ARIADNE agregaci nově namapovali.
K mapování jsme využili workshop, který se uskutečnil na Krétě v létě 2024 a byl financován díky programu COST Innovators Grant [*Sharing Heritage and Archaeological Data Effectively* (SHADE)](https://www.cost.eu/actions/IG18128/).


<!--> Fotku z workshopu? </-->

