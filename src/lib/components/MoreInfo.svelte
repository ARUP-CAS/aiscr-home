<script lang="ts">
	// Rozbalovací sekce "Chcete vědět víc?"
	import { ChevronDown } from '@lucide/svelte';
	
	let expandedItems = $state(new Set());
	
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
	
	function toggleItem(itemId: string) {
		if (expandedItems.has(itemId)) {
			expandedItems.delete(itemId);
		} else {
			expandedItems.add(itemId);
		}
		expandedItems = new Set(expandedItems);
	}
</script>

<section class="py-20 bg-gray-200" style="font-family: 'Roboto', sans-serif;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1100px; margin: 0 auto;">
		
		<!-- Header -->
		<div class="mb-12">
			<h2 class="font-bold mb-2" style="font-family: 'Roboto Slab', serif; color: #C6362E; font-size: 40px;">
				Chcete vědět víc?
			</h2>
			<p class="text-lg text-gray-700" style="font-family: 'Roboto', sans-serif; color: #C6362E;">
				Součásti AIS CR přehledně
			</p>
		</div>

		<!-- Accordion Items -->
		<div class="space-y-1">
			{#each infoItems as item}
				<div class="border-b border-gray-200">
					
					<!-- Header with icon and title for first item -->
					{#if item.id === 'amcr-map'}
						<div class="py-6 border-b border-gray-200">
							<div class="flex items-start space-x-4">
								<div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
									<div class="w-6 h-6 bg-red-600 rounded-full"></div>
								</div>
								<div class="flex-1">
									<h3 class="text-lg font-semibold text-gray-900 mb-2" style="font-family: 'Roboto', sans-serif;">
										{item.title}
									</h3>
									<p class="text-sm text-gray-600" style="font-family: 'Roboto', sans-serif;">
										{item.subtitle}
									</p>
								</div>
							</div>
						</div>
					{/if}
					
					<!-- Collapsible header -->
					<button 
						class="w-full py-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
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
						<div class="pb-6">
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
