<script lang="ts">
	// FAQ sekce - Časté dotazy
	import { BadgeHelp, ChevronDown, MessageSquarePlus } from '@lucide/svelte';
	
	let expandedItems = $state(new Set());
	
	const faqItems = [
		{
			id: 'vyzkumy-info',
			question: 'Zajímají mě archeologické výzkumy. Kde o nich najdu informace?',
			answer: 'Informace o archeologických výzkumech najdete v Archeologické mapě České republiky (AMČR). Systém obsahuje databázi všech evidovaných archeologických akcí, včetně jejich lokalizace, časového zařazení a základních výsledků. Můžete vyhledávat podle lokality, období nebo typu výzkumu.'
		},
		{
			id: 'amatersky-spolupracovnik',
			question: 'Archeologie je mým koníčkem a chci amatérsky spolupracovat na archeologických výzkumech. Je to možné?',
			answer: 'Ano, je to možné prostřednictvím systému AMČR-PAS (Portál amatérských spolupracovníků). Tento systém umožňuje registraci dobrovolníků, evidenci nálezů a koordinaci spolupráce mezi amatéry a profesionálními archeology. Je nutné dodržovat zákonné postupy a spolupracovat s oprávněnými archeologickými organizacemi.'
		},
		{
			id: 'uzemi-nalezy',
			question: 'Kde se v ČR nachází území s archeologickými nálezy?',
			answer: 'Archeologické nálezy se nacházejí prakticky na celém území České republiky. Hustota nálezů se liší podle regionů a historického osídlení. Nejvíce nálezů je evidováno v oblastech s dlouhodobým kontinuálním osídlením, jako jsou úrodné nížiny a říční údolí. Přesné informace najdete v mapových aplikacích AMČR.'
		},
		{
			id: 'uzemi-vyzkum',
			question: 'Na jakém území je vyžadován archeologický výzkum? A je vůbec povinný?',
			answer: 'Archeologický výzkum je povinný podle zákona č. 20/1987 Sb. o státní památkové péči na územích s archeologickými nálezy při stavební činnosti. Povinnost se vztahuje na celé území ČR, přičemž intenzita výzkumu závisí na archeologickém potenciálu konkrétní lokality. Výzkum provádějí pouze oprávněné archeologické organizace.'
		},
		{
			id: 'oznameni-stavba',
			question: 'Opravdu mám podle památkového zákona vždy povinnost podat oznámení o stavebním záměru či jiném terénním zásahu? Jaký je nejlepší způsob?',
			answer: 'Ano, podle § 22 zákona č. 20/1987 Sb. je povinné oznámit stavební záměry a terénní zásahy příslušnému archeologickému ústavu. Nejjednodušší způsob je elektronické podání prostřednictvím portálu AMČR, kde najdete formuláře a návody. Oznámení je třeba podat minimálně 30 dnů před zahájením prací.'
		},
		{
			id: 'stavba-instituce',
			question: 'Plánuji stavbu a hledám instituci, která může provést archeologický výzkum. Jak mám postupovat?',
			answer: 'Využijte Mapu oprávněných archeologických organizací (Mapa OAO), kde najdete přehled všech organizací oprávněných k provádění archeologických výzkumů v konkrétních regionech. Každá organizace má definovanou územní působnost a kontaktní údaje. Doporučujeme kontaktovat více organizací pro porovnání nabídek.'
		},
		{
			id: 'online-prohlidka',
			question: 'Mohu si prohlédnout archeologické nálezy z výzkumu online?',
			answer: 'Ano, mnoho archeologických nálezů je dostupných online prostřednictvím Digitálního archivu AMČR a Knihovny 3D. Tyto platformy obsahují fotografické dokumentace, 3D modely vybraných artefaktů a detailní popisy nálezů. Přístup k některým materiálům může být omezen z důvodu ochrany kulturního dědictví.'
		},
		{
			id: 'vyuziti-ais-cr',
			question: 'Musím někde uvádět, že jsem při práci využil(a) AIS ČR?',
			answer: 'Ano, při využití dat nebo nástrojů AIS ČR v publikacích, výzkumech nebo prezentacích je nutné uvést správnou citaci. Pomáhá to sledovat dopad systému a zajišťuje transparentnost výzkumu. Konkrétní citační formáty najdete v dokumentaci jednotlivých nástrojů.'
		},
		{
			id: 'lokality-navstivit',
			question: 'Dají se archeologické lokality navštívit? A existuje nějaký výběr nebo mapa těch doporučených?',
			answer: 'Některé archeologické lokality jsou veřejně přístupné, jiné jsou chráněné a návštěva je omezená. Doporučujeme využít Archeologický atlas, který obsahuje informace o veřejně přístupných lokalitách, včetně praktických informací o návštěvě. Vždy respektujte ochranná opatření a pokyny správců lokalit.'
		},
		{
			id: 'co-noveho',
			question: 'Kde se dozvím, co je v AIS ČR nového nebo co chystáte?',
			answer: 'Aktuální informace o novinkách a plánovaných funkcích najdete na našem blogu, v newsletteru a na sociálních sítích. Pravidelně publikujeme články o nových funkcích, aktualizacích systémů a připravovaných projektech. Můžete se také přihlásit k odběru novinek.'
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

<section id="faq" style="font-family: 'Roboto', sans-serif; background-color: #FFFFFF; padding-top: 128px; padding-bottom: 80px;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		
		<!-- Header with icon -->
		<div class="mb-12">
			<div class="flex items-center mb-4">
				<BadgeHelp size="63" color="#808E98" class="mr-3" />
				<h2 class="font-bold" style="font-family: 'Roboto Slab', serif; color: #808E98; font-size: 40px;">
					Časté dotazy
				</h2>
			</div>
		</div>

		<!-- FAQ Accordion Items -->
		<div class="space-y-0">
			{#each faqItems as item}
				<div style="border-bottom: 1px solid #000000;">
					<!-- Collapsible header -->
					<button 
						class="w-full text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
						style="padding: 24px; background-color: rgba(255, 255, 255, 0.5); cursor: pointer;"
						onclick={() => toggleItem(item.id)}
					>
						<h3 class="text-base font-medium text-gray-900 pr-4" style="font-family: 'Roboto', sans-serif;">
							{item.question}
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
							<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
								{item.answer}
							</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Contact section -->
		<div class="mt-16">
			<div>
				<MessageSquarePlus size="48" color="#808E98" style="margin-bottom: 16px;" />
				<h3 class="font-bold" style="font-family: 'Roboto', sans-serif; color: #808E98; font-size: 32px; margin-bottom: 16px;">
					Máte další otázky?
				</h3>
				<p class="font-bold" style="font-family: 'Roboto', sans-serif; color: #000000; font-size: 18px; margin-bottom: 16px;">
					Nenašli jste, co jste hledali?<br>
					Ozvěte se – jsme tu pro vás.
				</p>
				<div style="font-family: 'Roboto', sans-serif; color: #000000; font-size: 18px;">
					<p style="margin-bottom: 8px;">Napište nám na:</p>
					<p>
						<strong>amcr@arup.cas.cz</strong> (podpora pro Čechy) nebo<br>
						<strong>amcr@arub.cz</strong> (podpora pro Moravu a Slezsko)
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
