<script lang="ts">
	// O nás sekce
	import { Info, History, CloudCheck, FileText, GitPullRequestArrow, QrCode, ListTodo, Users, Link, HandHeart, Earth, Star, Building, UserCheck, GraduationCap, DollarSign, Handshake, Landmark, CircleUser, Brain, PiggyBank } from '@lucide/svelte';
</script>

<!-- Main About section -->
<section class="py-20 bg-gray-200" style="font-family: 'Roboto', sans-serif;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
			
			<!-- Left column with text -->
			<div>
				<!-- Header -->
				<div class="flex items-center" style="margin-bottom: 24px;">
					<Info size="63" color="#802376" class="mr-3" />
					<h2 class="font-bold" style="font-family: 'Roboto Slab', serif; color: #802376; font-size: 48px;">
						O nás
					</h2>
				</div>
				
				<p class="font-bold text-gray-900" style="font-family: 'Roboto', sans-serif; font-size: 18px; margin-bottom: 24px;">
					Archeologický informační systém České republiky (AIS CR) vznikl jako dlouhodobý projekt Akademie věd ČR v Praze a Brně od roku 2016 je součástí Cestovní mapy velkých výzkumných infrastruktur ČR. Je tak dlouhodobě finančně podporován Ministerstvem školství, mládeže a tělovýchovy České republiky.
				</p>
				
				<div style="margin-bottom: 24px;">
					<img src="/about-image.png" alt="O AIS CR" style="width: 100%; max-width: 500px; height: auto;" />
				</div>
				
				<!-- Quote -->
				<div class="border-l-4 p-6" style="border-color: #802376;">
					<blockquote class="italic text-lg leading-relaxed" style="font-family: 'Roboto', sans-serif; color: #802376;">
						"Cílem AIS CR je odborně spravovat, zpřístupňovat a trvale uchovávat data z archeologických terénních výzkumů z území České republiky a budovat digitální ekosystém české archeologie."
					</blockquote>
				</div>

			</div>

			<!-- Right column with features -->
			<div class="space-y-6">
				
				<!-- Feature items -->
				<div class="flex items-start space-x-4">
					<History size="24" color="#802376" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							Pokrýváme <strong>archeologická data</strong> od nejstarších výzkumů v 19. století až po aktuálně probíhající výzkumy.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<CloudCheck size="24" color="#802376" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							Uchovávame fyzické a digitální záznamy a zpřístupňujeme je prostřednictvím online nástrojů, v souvislostech a bez zbytečných bariér. Vytváříme tak <strong>důvěryhodný digitální repositář</strong>.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<FileText size="24" color="#802376" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							Digitálně zpracováváme <strong>dokumenty shromážděné od roku 1919</strong> a zároveň průběžně dohlížíme na kvalitu evidence a dokumentace aktuálně probíhajících archeologických výzkumů.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<GitPullRequestArrow size="24" color="#802376" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							Kvalitu záznamů zvyšujeme propojováním souvisejících dokumentů, doplňováním chybějících starších dat a budováním autoritních seznamů <strong>archeologických výzkumů a lokalit</strong>.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<QrCode size="24" color="#802376" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							Sledujeme <strong>nejnovější trendy</strong> v oblasti digitální správy dat (digitální kurátorství) a podporujeme zavádění technologických inovací.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<ListTodo size="24" color="#802376" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							Do českého archeologického prostředí přinášíme <strong>standardy</strong> založené na mezinárodně uznávaných FAIR principech a mezioborových <strong>prostředí pro správu výzkumných dat</strong>.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<Users size="24" color="#802376" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							Uvědomujeme si rozmanitost naší <strong>uživatelské základny</strong> – od odborné a amatérské komunity přes státní správu po veřejnost – a tomu přizpůsobujeme podobu a zaměření našich nástrojů.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<Link size="24" color="#802376" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							Usilujeme o to, aby data AIS CR byla <strong>součástí propojených webů</strong>, tj. standardizovaná a technicky kompatibilní s dalšími informačními systémy, a aby byla dohledatelná i mezinárodně.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<HandHeart size="24" color="#802376" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							Udržujeme <strong>expertní tým</strong>, který spravuje data, vyvíjí aplikační nástroje a rozvíjí nezbytné digitální dovednosti našich uživatelů a uživatelek.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<Earth size="24" color="#802376" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							Napomáháme porozumění <strong>roli archeologie ve společnosti</strong> a cíleně posilujeme využití výsledků výzkumu v praxi.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Why AIS CR is essential section -->
<section class="pt-16 pb-16 bg-gray-200 border-t border-dashed border-gray-400" style="font-family: 'Roboto', sans-serif;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
				
				<!-- Left column - Question and quote -->
				<div>
					<div class="flex items-center space-x-4 mb-6">
						<Star size="36" color="#1B998B" class="flex-shrink-0" />
						<h3 class="font-bold" style="font-family: 'Roboto', sans-serif; color: #1B998B; font-size: 24px;">
							Proč je AIS CR nezastupitelný?
						</h3>
					</div>
					
					<div class="border-l-4 p-4" style="border-color: #1B998B;">
						<blockquote class="italic leading-relaxed" style="font-family: 'Roboto', sans-serif; color: #1B998B;">
							"Jedinečná a nenahraditelná archeologická data si zaslouží profesionální péči – proto je tu AIS CR."
						</blockquote>
					</div>
				</div>

				<!-- Right column - Explanation text -->
				<div>
					<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
						Většina terénních archeologických výzkumů probíhá destruktivními metodami a obvykle na místech budoucí výstavby. Bez provedení výzkumu by hrozilo, že relisky minulosti – zbytky osídlení, pohřebiště a dalších projevů lidské činnosti v minulosti – budou při stavbě nenávratně zničeny. Zůstávají po nich jen nálezy a dokumentace získané během archeologických výzkumů. O nálezy pečují muzea. O záznamy a data se staráme my.
					</p>
				</div>
			</div>
	</div>
</section>

<!-- Who creates AIS CR section -->
<section class="pt-16 pb-16 bg-gray-200 border-t border-dashed border-gray-400" style="font-family: 'Roboto', sans-serif;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
				
				<!-- Left column - Question and quote -->
				<div>
					<div class="flex items-center space-x-4 mb-6">
						<Landmark size="36" color="#C6362E" class="flex-shrink-0" />
						<h3 class="font-bold" style="font-family: 'Roboto', sans-serif; color: #C6362E; font-size: 24px;">
							Kdo AIS CR tvoří?
						</h3>
					</div>
					
					<div class="border-l-4 p-4" style="border-color: #C6362E;">
						<blockquote class="italic leading-relaxed" style="font-family: 'Roboto', sans-serif; color: #C6362E;">
							"Jsme expertní tým s hlubokou znalostí oboru – data jsou s AIS CR v bezpečí."
						</blockquote>
					</div>
				</div>

				<!-- Right column - Team description -->
				<div>
					<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif; margin-bottom: 24px;">
						AIS CR koordinují Archeologický ústav AV ČR, Brno (Archiv ARÚB, kde jsou spravovány datové sady a archivní fond pro Moravu a České Slezsko) společně s Archeologickým ústavem AV ČR, Praha (Oddělení informačních zdrojů a archeologie krajiny ARÚ se správou pro území Čech).
					</p>
					
					<div class="flex gap-8 items-center">
						<img src="/logo-arub.png" alt="ARÚB" style="max-height: 60px; width: auto;" />
						<img src="/logo-aru.png" alt="ARÚ" style="max-height: 60px; width: auto;" />
					</div>
				</div>
			</div>
			
			<!-- Team photo -->
		<div style="margin-top: 48px;">
			<img src="/team.png" alt="Tým AIS CR" style="width: 100%; height: auto;" />
		</div>
	</div>
</section>

<!-- Executive Board section -->
<section class="pt-16 pb-16 bg-gray-200 border-t border-dashed border-gray-400" style="font-family: 'Roboto', sans-serif;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
				
				<!-- Left column - Title -->
				<div>
					<div class="flex items-center space-x-4">
						<CircleUser size="36" color="#C6362E" class="flex-shrink-0" />
						<h3 class="font-bold" style="font-family: 'Roboto', sans-serif; color: #C6362E; font-size: 24px;">
							Výkonný výbor AIS CR
						</h3>
					</div>
				</div>

				<!-- Right column - Description -->
				<div>
					<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
						Vyvážené partnerské řízení projektu je zajišťováno Výkonným výborem AIS CR, v němž jsou zastoupeni dva členové či členky z každé instituce.
					</p>
				</div>
			</div>

			<!-- Executive Board Team members -->
			<div class="flex justify-end" style="gap: 128px; padding-right: 64px;">
				<div class="text-center">
					<img src="/olga.png" alt="Olga Lečbychová" class="rounded-full mb-4 object-cover" style="width: 80px; height: 80px;" />
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Olga Lečbychová
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						ARUB
					</p>
				</div>

				<div class="text-center">
					<img src="/david.png" alt="David Novák" class="rounded-full mb-4 object-cover" style="width: 80px; height: 80px;" />
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						David Novák
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						ARÚ
					</p>
				</div>

				<div class="text-center">
					<img src="/petr.png" alt="Petr Pajdla" class="rounded-full mb-4 object-cover" style="width: 80px; height: 80px;" />
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Petr Pajdla
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						ARUB
					</p>
				</div>

				<div class="text-center">
					<img src="/ondra.png" alt="Ondřej Švejcar" class="rounded-full mb-4 object-cover" style="width: 80px; height: 80px;" />
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Ondřej Švejcar
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						ARÚ
					</p>
				</div>
			</div>
	</div>
</section>

<!-- Scientific Advisory Board section -->
<section class="pt-16 pb-16 bg-gray-200 border-t border-dashed border-gray-400" style="font-family: 'Roboto', sans-serif;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		<div>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
				
				<!-- Left column - Title -->
				<div>
					<div class="flex items-center space-x-4">
						<Brain size="36" color="#C6362E" class="flex-shrink-0" />
						<h3 class="font-bold" style="font-family: 'Roboto', sans-serif; color: #C6362E; font-size: 24px;">
							Vědecký poradní výbor AIS CR
						</h3>
					</div>
				</div>

				<!-- Right column - Description -->
				<div>
					<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
						Odborné poradenství v oblasti podpory výzkumu, technického rozvoje a uživatelských strategií zajišťuje Vědecký poradní výbor AIS CR, složený z mezinárodně uznávaných odborníků a odbornic na archeologii, digitální kulturní dědictví a výzkumné infrastruktury.
					</p>
				</div>
			</div>

			<!-- Scientific Advisory Board members -->
			<div class="flex justify-between gap-4">
				<div class="text-center flex-1">
					<div class="rounded-full mb-4 bg-gray-400 mx-auto" style="width: 80px; height: 80px;"></div>
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Stefan Eichert
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						Naturhistorisches Museum Wien, předseda
					</p>
				</div>

				<div class="text-center flex-1">
					<div class="rounded-full mb-4 bg-gray-400 mx-auto" style="width: 80px; height: 80px;"></div>
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Cynthia Dunning Thierstein
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						Archaeoconcept
					</p>
				</div>

				<div class="text-center flex-1">
					<div class="rounded-full mb-4 bg-gray-400 mx-auto" style="width: 80px; height: 80px;"></div>
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Johanna Hilpert
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						Universität zu Köln, Philosophische Fakultät, Institut für Ur- und Frühgeschichte
					</p>
				</div>

				<div class="text-center flex-1">
					<div class="rounded-full mb-4 bg-gray-400 mx-auto" style="width: 80px; height: 80px;"></div>
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Axel G. Posluschny
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						Keltenwell am Glauberg
					</p>
				</div>

				<div class="text-center flex-1">
					<div class="rounded-full mb-4 bg-gray-400 mx-auto" style="width: 80px; height: 80px;"></div>
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Pavel Straňák
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						Karlova universita, Matematicko-fyzikální fakulta, Ústav formální a aplikované lingvistiky
					</p>
				</div>

				<div class="text-center flex-1">
					<div class="rounded-full mb-4 bg-gray-400 mx-auto" style="width: 80px; height: 80px;"></div>
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Benjamin Štular
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						Institute of Archaeology of the Slovenian Academy of Sciences and Arts
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Funding Sources section -->
<section class="pt-16 pb-16 bg-gray-200 border-t border-dashed border-gray-400" style="font-family: 'Roboto', sans-serif;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
				
				<!-- Left column - Title -->
				<div>
					<div class="flex items-center space-x-4 mb-6" style="position: relative; z-index: 10;">
						<PiggyBank size="36" color="#802376" class="flex-shrink-0" />
						<h3 class="font-bold" style="font-family: 'Roboto', sans-serif; color: #802376; font-size: 24px;">
							Zdroje financování
						</h3>
					</div>
					
					<img src="/finance.png" alt="Financování" style="width: 100%; height: auto; margin-top: -64px; position: relative; z-index: 1;" />
				</div>

				<!-- Right column - Funding description -->
				<div class="space-y-6">
					<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
						Hlavním zdrojem financování AIS CR je podpora velkých výzkumných infrastruktur zapsaných na 
						<a href="#" class="underline text-gray-900">národní cestovní mapě</a>. Toto dlouhodobé 
						financování je zajišťováno na základě důkladného mezinárodního hodnocení 
						a je poskytováno Ministerstvem školství, mládeže a tělovýchovy ve víceletých 
						cyklech od roku 2016 (projekty: <strong>LM2015080, LM2018134, LM2023031</strong>).
					</p>

					<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
						Investiční náklady AIS CR jsou komplementárně pokrývány ze strukturálních 
						fondů EU v projektech:
					</p>

					<ul class="space-y-2 text-gray-700" style="font-family: 'Roboto', sans-serif;">
						<li class="flex items-start">
							<span class="text-purple-600 mr-2">•</span>
							<span>Archeologický informační systém ČR - druhá generace (OP VVV; 
							<strong>EF16_013/0001439</strong>)</span>
						</li>
						<li class="flex items-start">
							<span class="text-purple-600 mr-2">•</span>
							<span>Archeologický informační systém České republiky - obnova a rozšíření 
							hardwarových kapacit (OP JAK; <strong>EH23_015/0008167</strong>)</span>
						</li>
					</ul>

					<p class="text-gray-700 leading-relaxed mt-6" style="font-family: 'Roboto', sans-serif;">
						Další související projekty a zdroje financování naleznete 
						<a href="#" class="underline text-gray-900">zde</a>.
					</p>
					
					<div style="margin-top: 24px;">
						<img src="/eu-msmt.png" alt="EU a MŠMT" style="max-height: 60px; width: auto;" />
					</div>
				</div>
			</div>
	</div>
</section>

<!-- Partners and Data Providers section -->
<section class="pt-16 pb-16 border-t border-dashed border-gray-400" style="font-family: 'Roboto', sans-serif; background-color: #FFFFFF;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		<div>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
				
				<!-- Left column - Title -->
				<div>
					<div class="flex items-center space-x-4">
						<Handshake size="36" color="#721C17" class="flex-shrink-0" />
						<h3 class="font-bold" style="font-family: 'Roboto', sans-serif; color: #721C17; font-size: 24px;">
							Partneři a poskytovatelé dat
						</h3>
					</div>
				</div>

				<!-- Right column - Description -->
				<div>
					<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
						AIS CR aktivně spolupracuje s více než stovkou organizací oprávněných provádět 
						archeologické výzkumy v České republice. S nimi má uzavřeny dohody o odevzdání 
						<a href="#" class="underline text-gray-900">archeologické mapy České republiky</a> 
						a s většinou též licenční smlouvy umožňující 
						sdílet uložitelnými dokumenty skrze <a href="#" class="underline text-gray-900">Digitální archiv AMČR</a>.
					</p>
				</div>
			</div>

			<!-- Partners intro -->
			<div class="mb-8">
				<p class="font-medium" style="font-family: 'Roboto', sans-serif; color: #721C17;">
					Mezi důležité smluvní partnery AIS CR dále patří:
				</p>
			</div>

			<!-- Partner logos grid -->
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
				<div class="flex items-center justify-center">
					<img src="/ministerstvo-kultury.png" alt="Ministerstvo kultury" style="max-height: 80px; width: auto;" />
				</div>

				<div class="flex items-center justify-center">
					<img src="/akademie-ved.png" alt="Akademie věd ČR" style="max-height: 80px; width: auto;" />
				</div>

				<div class="flex items-center justify-center">
					<img src="/ariadne.png" alt="ARIADNE" style="max-height: 80px; width: auto;" />
				</div>

				<div class="flex items-center justify-center">
					<img src="/lindat.png" alt="LINDAT" style="max-height: 80px; width: auto;" />
				</div>

				<div class="flex items-center justify-center">
					<img src="/npu.png" alt="Národní památkový ústav" style="max-height: 80px; width: auto;" />
				</div>

				<div class="flex items-center justify-center">
					<img src="/carare.png" alt="CARARE" style="max-height: 80px; width: auto;" />
				</div>
			</div>

			<!-- Second row of partner logos -->
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mt-8">
				<div class="flex items-center justify-center">
					<img src="/ntk.png" alt="NTK" style="max-height: 80px; width: auto;" />
				</div>

				<div class="flex items-center justify-center">
					<img src="/botanicky-ustav.png" alt="Botanický ústav" style="max-height: 80px; width: auto;" />
				</div>

				<div class="flex items-center justify-center">
					<img src="/itam.png" alt="ITAM" style="max-height: 80px; width: auto;" />
				</div>

				<div class="flex items-center justify-center">
					<img src="/praha.png" alt="Praha" style="max-height: 80px; width: auto;" />
				</div>

				<div class="flex items-center justify-center">
					<img src="/pernikari.png" alt="Pernikáři" style="max-height: 80px; width: auto;" />
				</div>

				<div class="flex items-center justify-center">
					<img src="/axiell.png" alt="Axiell" style="max-height: 80px; width: auto;" />
				</div>
			</div>
		</div>
	</div>
</section>
