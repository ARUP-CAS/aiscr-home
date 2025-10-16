<script lang="ts">
	// Rozbalovací sekce "Chcete vědět víc?"
	import { ChevronDown } from '@lucide/svelte';
	
	let expandedItems = $state(new Set());
	let expandedItems2 = $state(new Set());
	
	const infoItems = [
		{
			id: 'amcr-map',
			title: 'Archeologická mapa České republiky (AMČR)',
			subtitle: 'Přehledný rozcestník nástrojů, popis jejich využití a další užitečné informace naleznete na webu AMČR',
			content: `Archeologická mapa České republiky je komplexní informační systém, který slouží k evidenci, dokumentaci a prezentaci archeologických výzkumů a nálezů na území České republiky. Systém umožňuje archeologům, památkářům i široké veřejnosti přístup k aktuálním informacím o archeologických lokalitách, výzkumech a nálezech.

Hlavní funkce AMČR:
• Evidence archeologických výzkumů a akcí
• Dokumentace archeologických nálezů a situací
• Mapové zobrazení archeologických lokalit
• Správa archeologické dokumentace
• Podpora terénní práce archeologů
• Přístup k archeologickým datům pro výzkumné účely

Systém je neustále aktualizován a rozšiřován o nové funkce podle potřeb archeologické komunity.`
		},
		{
			id: 'digital-archive',
			title: 'Digitální archiv AMČR',
			content: `Digitální archiv AMČR představuje rozsáhlé úložiště digitalizovaných archeologických dokumentů, fotografií, plánů a dalších materiálů souvisejících s archeologickými výzkumy v České republice.

Obsah digitálního archivu:
• Archeologické zprávy a dokumentace
• Fotografie z archeologických výzkumů
• Plány a kresby archeologických situací
• Terénní deníky a záznamy
• Katalogy nálezů
• Historické archeologické dokumenty

Archiv je průběžně doplňován o nové materiály a poskytuje výzkumníkům i veřejnosti jedinečný přístup k archeologickému dědictví České republiky.`
		},
		{
			id: 'oao-map',
			title: 'Mapa oprávněných archeologických organizací (Mapa OAO)',
			content: `Mapa OAO poskytuje přehled oprávněných archeologických organizací v České republice, jejich působnosti a kontaktních údajů.

Funkce mapy OAO:
• Zobrazení územní působnosti archeologických organizací
• Kontaktní údaje na jednotlivé organizace
• Informace o specializaci organizací
• Pomoc při hledání správné organizace pro konkrétní lokalitu
• Aktuální přehled změn v oprávněních

Mapa je důležitým nástrojem pro koordinaci archeologických aktivit na území České republiky.`
		},
		{
			id: 'amcr-pas',
			title: 'AMČR-PAS - Portál amatérských spolupracovníků a evidence samostatných nálezů',
			content: `AMČR-PAS je specializovaná platforma určená pro evidenci archeologických nálezů objevených amatérskými spolupracovníky a detektorářskou komunitou.

Hlavní funkce PAS:
• Evidence samostatných archeologických nálezů
• Spolupráce s amatérskými archeologickými spolupracovníky
• Ověřování a validace hlášených nálezů
• Vzdělávací materiály pro detektoráře
• Koordinace mezi amatérskou a profesionální archeologickou komunitou
• Ochrana archeologického dědictví prostřednictvím spolupráce

Systém podporuje legální a zodpovědnou detektorářskou činnost v souladu s archeologickou legislativou.`
		},
		{
			id: 'knihovna-3d',
			title: 'Knihovna 3D',
			content: `Knihovna 3D je inovativní platforma pro prezentaci a archivaci trojrozměrných modelů archeologických nálezů a lokalit.

Obsah knihovny:
• 3D modely archeologických artefaktů
• Virtuální rekonstrukce archeologických situací
• Interaktivní prohlížení nálezů
• Měření a analýza 3D objektů
• Vzdělávací 3D materiály
• Virtuální výstavy archeologických nálezů

Knihovna využívá nejmodernější technologie pro digitalizaci a prezentaci archeologického dědictví.`
		},
		{
			id: 'amcr-api',
			title: 'AMČR API',
			content: `AMČR API poskytuje programový přístup k datům Archeologické mapy České republiky pro vývojáře a výzkumníky.

Možnosti API:
• Přístup k archeologickým datům ve strukturované podobě
• Integrace s externími aplikacemi a systémy
• Automatizované dotazy a analýzy
• Real-time přístup k aktuálním datům
• Podpora různých formátů dat (JSON, XML, GeoJSON)
• Dokumentace a příklady použití

API umožňuje vytváření specializovaných aplikací a analýz na základě archeologických dat.`
		},
		{
			id: 'documentation',
			title: 'Dokumentace AMČR',
			content: `Komplexní dokumentace systému AMČR poskytuje podrobné informace o používání všech funkcí a nástrojů.

Obsah dokumentace:
• Uživatelské příručky pro jednotlivé moduly
• Technická dokumentace pro správce systému
• Návody pro začátečníky
• Pokročilé funkce a tipy
• FAQ - často kladené otázky
• Video tutoriály a školící materiály
• Kontakty na technickou podporu

Dokumentace je pravidelně aktualizována podle vývoje systému a potřeb uživatelů.`
		}
	];
	
	const otherComponents = [
		{
			id: 'atlas',
			title: 'Další součásti AIS CR',
			subtitle: 'Prozkoumejte další nástroje a zdroje AIS CR',
			content: `Archeologický atlas České republiky je specializovaný nástroj pro vizualizaci a prezentaci archeologických památek přímo v krajině.

Hlavní funkce atlasu:
• Mapové zobrazení archeologických památek
• Turistické trasy k archeologickým lokalitám
• Fotografie a rekonstrukce památek
• Popis historických kontextů
• Informace o přístupnosti lokalit
• Vzdělávací a popularizační obsah

Atlas propojuje archeologii s cestovním ruchem a zpřístupňuje archeologické dědictví široké veřejnosti.`
		},
		{
			id: 'teater',
			title: 'Tezaurus archeologické terminologie (TEATER)',
			content: `TEATER je vícejazyčný slovník archeologické terminologie pro českou, anglickou a německou odbornou komunikaci.

Obsah tezauru:
• Standardizovaná archeologická terminologie
• Vícejazyčné překlady odborných termínů
• Hierarchická struktura pojmů
• Definice a vysvětlení termínů
• Vazby mezi souvisejícími pojmy
• Podpora při katalogizaci a dokumentaci

Tezaurus zajišťuje jednotnou terminologii v české archeologii a usnadňuje mezinárodní spolupráci.`
		},
		{
			id: 'praha-arch',
			title: 'Praha archeologická',
			content: `Praha archeologická je specializovaný portál věnovaný archeologickému dědictví hlavního města České republiky.

Obsah portálu:
• Evidence archeologických výzkumů v Praze
• Databáze archeologických nálezů z Prahy
• Historie archeologického bádání v metropoli
• Mapy archeologických lokalit
• Virtuální prohlídky významných nálezů
• Informace o pražských archeologických institucích

Portál dokumentuje bohaté archeologické dědictví Prahy od pravěku po novověk.`
		},
		{
			id: 'arch14cz',
			title: 'Česká archeologická radiouhlíková databáze (Arch14CZ)',
			content: `Arch14CZ shromažďuje a zpřístupňuje data radiouhlíkového datování z archeologických kontextů v České republice.

Obsah databáze:
• Radiouhlíková data z českých lokalit
• Kalibrace a statistické zpracování dat
• Vazba na archeologické kontexty
• Chronologické modely
• Nástroje pro analýzu 14C dat
• Srovnání s evropskými databázemi

Databáze přispívá k preciznímu datování archeologických situací a výzkumu pravěkého a středověkého osídlení.`
		},
		{
			id: 'archeologie-online',
			title: 'Archeologie online',
			content: `Archeologie online je webový portál věnovaný popularizaci archeologie a prezentaci aktuálních archeologických objevů.

Obsah portálu:
• Aktuální zprávy z archeologických výzkumů
• Články o významných objevech
• Rozhovory s archeology
• Popularizační texty o archeologii
• Fotogalerie z výzkumů
• Kalendář archeologických akcí

Portál zpřístupňuje archeologické poznání široké veřejnosti srozumitelnou a atraktivní formou.`
		},
		{
			id: 'thanados',
			title: 'THANADOS',
			content: `THANADOS je mezinárodní databázový systém pro evidenci a analýzu archeologických dat o pohřebních lokalitách.

Funkce systému:
• Evidence hrobových celků a pohřebišť
• Antropologická data o pohřbených
• Katalogizace hrobových příloh
• Prostorová analýza pohřebišť
• Statistické zpracování funerálních dat
• Mezinárodní standardy popisu

Systém umožňuje komplexní studium pohřebních zvyklostí napříč časem a prostorem.`
		},
		{
			id: 'github',
			title: 'Zdrojový kód nástrojů na GitHub',
			content: `Repozitář na GitHubu poskytuje přístup ke zdrojovému kódu nástrojů a aplikací AIS CR.

Obsah repozitáře:
• Otevřený zdrojový kód aplikací
• Dokumentace pro vývojáře
• Issue tracking a správa chyb
• Možnost přispívání komunitou
• Verzování a historie změn
• Licence open source

Otevřený přístup podporuje transparentnost, spolupráci a další rozvoj systému.`
		},
		{
			id: 'zenodo',
			title: 'Dokumenty ke stažení na Zenodo',
			content: `Zenodo archiv obsahuje publikace, datasety a dokumentaci související s AIS CR.

Dostupné materiály:
• Vědecké publikace o systému
• Technická dokumentace
• Uživatelské příručky
• Datové sady pro výzkum
• Prezentace a školící materiály
• DOI identifikátory pro citovatelnost

Archiv zajišťuje dlouhodobou dostupnost a citovatelnost výstupů projektu.`
		},
		{
			id: 'other-tools',
			title: 'Další pomůcky a aplikace',
			content: `Kolekce dalších nástrojů a pomůcek pro archeologickou práci a výzkum.

Dostupné nástroje:
• Mobilní aplikace pro terénní práci
• Formuláře a šablony dokumentace
• Konverzní nástroje pro data
• Pluginy pro GIS software
• Skripty pro automatizaci
• Návody a best practices

Nástroje usnadňují každodenní práci archeologů a zlepšují kvalitu dokumentace.`
		}
	];
	
	function toggleItem(itemId: string) {
		if (expandedItems.has(itemId)) {
			expandedItems.delete(itemId);
		} else {
			expandedItems.add(itemId);
		}
		expandedItems = new Set(expandedItems);
	}
	
	function toggleItem2(itemId: string) {
		if (expandedItems2.has(itemId)) {
			expandedItems2.delete(itemId);
		} else {
			expandedItems2.add(itemId);
		}
		expandedItems2 = new Set(expandedItems2);
	}
</script>

<section style="font-family: 'Roboto', sans-serif; background-color: #EEEEEE; padding-top: 34px; padding-bottom: 80px;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		
		<!-- Header -->
		<div class="mb-12">
			<h2 class="font-bold" style="font-family: 'Roboto Slab', serif; color: #C6362E; font-size: 40px;">
				Chcete vědět víc?
			</h2>
			<p class="text-lg text-gray-700" style="font-family: 'Roboto', sans-serif; color: #C6362E;">
				Součásti AIS CR přehledně
			</p>
		</div>

		<!-- Accordion Items -->
		<div class="space-y-0">
			{#each infoItems as item}
				<div style="border-bottom: 1px solid #000000;">
					
					<!-- Header with icon and title for first item -->
					{#if item.id === 'amcr-map'}
						<div style="background-color: #FFFFFF; padding: 24px; border-bottom: 1px solid #000000;">
							<div class="flex items-start space-x-4">
								<div class="flex items-start justify-center flex-shrink-0">
									<svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clip-path="url(#clip0_10204_8849)">
											<path d="M43.3597 17.3L33.2797 20.2C32.9797 22.84 31.5597 25.18 29.3597 26.64L32.5997 30.12L28.6797 34.1L33.0197 38.14C34.8997 36.24 36.8397 34.08 39.0197 31.4L39.2797 31.08L39.3197 31.02C42.0197 27.62 43.4397 23.52 43.4397 19.18C43.4397 18.54 43.3997 17.92 43.3397 17.28" fill="#721C17"/>
											<path d="M31.5998 6.40012L29.1998 11.5401C31.5398 12.9601 33.1198 15.4001 33.4598 18.1001V18.1601L43.2598 15.3401V15.2801C41.4398 6.52012 33.8598 0.240117 24.8398 0.120117L25.4398 3.66012L31.5998 6.40012Z" fill="#721C17"/>
											<path d="M23.6197 10.04C24.6197 10.04 25.5797 10.2 26.5197 10.52L28.0797 7.16L22.7597 4.8L21.9597 0C15.8197 0.54 10.2997 4.04 7.17969 9.36L16.0197 14.28C17.6397 11.68 20.5197 10.04 23.6397 10.04" fill="#721C17"/>
											<path d="M29.1802 30.66L26.8202 28.14C25.8002 28.54 24.7202 28.74 23.6002 28.74C21.6402 28.74 19.8002 28.12 18.2602 26.98L13.7402 37.5C15.3802 39.22 16.6402 40.38 17.7602 41.42C19.7202 43.22 21.3202 44.7 23.6002 48.02C25.8802 44.7 27.4802 43.22 29.4402 41.42C29.9002 41 30.3602 40.58 30.8802 40.08L25.1602 34.76L29.1602 30.68L29.1802 30.66Z" fill="#721C17"/>
											<path d="M14.6595 18.82C14.6595 17.9 14.7995 17.02 15.0595 16.16L15.0995 16L6.17953 11.04L6.11953 11.2C5.05953 13.6 4.51953 16.16 4.51953 18.84C4.51953 23.2 5.93953 27.3 8.63953 30.7L8.93953 31.06C10.1195 32.52 11.2395 33.82 12.2995 35L16.7595 24.64C15.3795 23.02 14.6395 20.98 14.6395 18.84" fill="#721C17"/>
										</g>
										<defs>
											<clipPath id="clip0_10204_8849">
												<rect width="48" height="48" fill="white"/>
											</clipPath>
										</defs>
									</svg>
								</div>
								<div class="flex-1">
									<h3 class="text-lg font-semibold mb-2" style="font-family: 'Roboto', sans-serif; color: #721C17;">
										{item.title}
									</h3>
									<p class="text-sm" style="font-family: 'Roboto', sans-serif; color: #721C17;">
										{item.subtitle}
									</p>
								</div>
							</div>
						</div>
					{/if}
					
					<!-- Collapsible header -->
					<button 
						class="w-full text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
						style="padding: 24px; background-color: rgba(255, 255, 255, 0.5); cursor: pointer;"
						onclick={() => toggleItem(item.id)}
					>
						<h3 class="text-base font-medium text-gray-900 pr-4" style="font-family: 'Roboto', sans-serif;">
							{item.title}
						</h3>
						<ChevronDown 
							size="20" 
							color="#666" 
							class="transform transition-transform flex-shrink-0 {expandedItems.has(item.id) ? 'rotate-180' : ''}"
						/>
					</button>
					
					<!-- Collapsible content -->
					{#if expandedItems.has(item.id)}
						<div style="padding: 0 24px 24px 24px; background-color: rgba(255, 255, 255, 0.5);">
							<div class="space-y-4">
								{#each item.content.split('\n\n') as paragraph}
									{#if paragraph.includes('•')}
										<ul class="list-none space-y-2">
											{#each paragraph.split('\n').filter(line => line.includes('•')) as listItem}
												<li class="flex items-start">
													<span class="text-red-600 mr-2">•</span>
													<span class="text-gray-700" style="font-family: 'Roboto', sans-serif;">
														{listItem.replace('•', '').trim()}
													</span>
												</li>
											{/each}
										</ul>
									{:else if paragraph.trim() && !paragraph.includes(':')}
										<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
											{paragraph.trim()}
										</p>
									{:else if paragraph.includes(':')}
										<h4 class="font-semibold text-gray-900 mt-4 mb-2" style="font-family: 'Roboto', sans-serif;">
											{paragraph.trim()}
										</h4>
									{/if}
								{/each}
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Second Accordion Items -->
		<div class="space-y-0" style="margin-top: 80px;">
			{#each otherComponents as item}
				<div style="border-bottom: 1px solid #000000;">
					
					<!-- Header with icon and title for first item -->
					{#if item.id === 'atlas'}
						<div style="background-color: #FFFFFF; padding: 24px; border-bottom: 1px solid #000000;">
							<div class="flex items-center space-x-4">
								<div class="flex items-center justify-center flex-shrink-0">
									<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clip-path="url(#clip0_9843_6009)">
											<path d="M27.045 6.58511L25.755 8.02511C23.61 6.36011 20.91 5.35511 18 5.35511C16.395 5.35511 14.865 5.65511 13.455 6.19511L11.355 1.26011C13.41 0.435107 15.645 -0.0148926 17.985 -0.0148926C20.835 -0.0148926 23.52 0.645107 25.92 1.83011L23.415 3.61511L27.03 6.57011L27.045 6.58511Z" fill="#721C17"/>
											<path d="M36 17.9999C36 18.8549 35.94 19.7099 35.82 20.5349L30.6 19.0199C30.63 18.6899 30.645 18.3449 30.645 17.9999C30.645 14.4899 29.205 11.2949 26.88 8.99989L29.19 6.40489L25.875 3.70489L27.375 2.63989C32.55 5.80489 36 11.5049 36 17.9999Z" fill="#721C17"/>
											<path d="M6.11998 22.3501C7.57498 26.2951 10.935 29.3251 15.09 30.3001L13.455 35.4151C7.84498 33.9451 3.29998 29.8351 1.22998 24.4951L4.87498 24.9751L6.14998 22.3501H6.11998Z" fill="#721C17"/>
											<path d="M18 30.6449C24.12 30.6449 29.235 26.2799 30.39 20.5049L35.535 22.0049C33.705 30.0149 26.535 35.9999 17.985 35.9999C16.935 35.9999 15.9 35.9099 14.895 35.7299L16.56 30.5699C17.025 30.6299 17.505 30.6599 17.985 30.6599" fill="#721C17"/>
											<path d="M5.35486 18C5.35486 18.735 5.41486 19.455 5.53486 20.145L3.97486 23.355L0.674863 22.92C0.224863 21.36 -0.0151367 19.695 -0.0151367 18C-0.000136719 10.95 4.07986 4.83 10.0049 1.875L12.1049 6.81C8.09986 8.94 5.35486 13.155 5.35486 18Z" fill="#721C17"/>
										</g>
										<defs>
											<clipPath id="clip0_9843_6009">
												<rect width="36" height="36" fill="white"/>
											</clipPath>
										</defs>
									</svg>
								</div>
								<div class="flex-1">
									<h3 class="text-lg font-semibold" style="font-family: 'Roboto', sans-serif; color: #721C17;">
										{item.title}
									</h3>
								</div>
							</div>
						</div>
					{/if}
					
					<!-- Collapsible header -->
					<button 
						class="w-full text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
						style="padding: 24px; background-color: rgba(255, 255, 255, 0.5); cursor: pointer;"
						onclick={() => toggleItem2(item.id)}
					>
						<h3 class="text-base font-medium text-gray-900 pr-4" style="font-family: 'Roboto', sans-serif;">
							{item.id === 'atlas' ? item.subtitle : item.title}
						</h3>
						<ChevronDown 
							size="20" 
							color="#666" 
							class="transform transition-transform flex-shrink-0 {expandedItems2.has(item.id) ? 'rotate-180' : ''}"
						/>
					</button>
					
					<!-- Collapsible content -->
					{#if expandedItems2.has(item.id)}
						<div style="padding: 0 24px 24px 24px; background-color: rgba(255, 255, 255, 0.5);">
							<div class="space-y-4">
								{#each item.content.split('\n\n') as paragraph}
									{#if paragraph.includes('•')}
										<ul class="list-none space-y-2">
											{#each paragraph.split('\n').filter(line => line.includes('•')) as listItem}
												<li class="flex items-start">
													<span class="text-red-600 mr-2">•</span>
													<span class="text-gray-700" style="font-family: 'Roboto', sans-serif;">
														{listItem.replace('•', '').trim()}
													</span>
												</li>
											{/each}
										</ul>
									{:else if paragraph.trim() && !paragraph.includes(':')}
										<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
											{paragraph.trim()}
										</p>
									{:else if paragraph.includes(':')}
										<h4 class="font-semibold text-gray-900 mt-4 mb-2" style="font-family: 'Roboto', sans-serif;">
											{paragraph.trim()}
										</h4>
									{/if}
								{/each}
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
