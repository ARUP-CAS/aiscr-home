<script lang="ts">
	// O nás sekce
	import { Info, Database, Archive, FileText, Users, BarChart3, Globe, Target, Star, Building, UserCheck, GraduationCap, DollarSign, Handshake } from '@lucide/svelte';
</script>

<section id="about" class="py-20 bg-gray-200" style="font-family: 'Roboto', sans-serif;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1100px; margin: 0 auto;">
		
		<!-- Header -->
		<div class="mb-16">
			<div class="flex items-center mb-6">
				<Info size="32" color="#8B5CF6" class="mr-3" />
				<h2 class="font-bold" style="font-family: 'Roboto Slab', serif; color: #8B5CF6; font-size: 40px;">
					O nás
				</h2>
			</div>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
			
			<!-- Left column with text -->
			<div>
				<p class="text-lg text-gray-900 leading-relaxed mb-8" style="font-family: 'Roboto', sans-serif;">
					<strong>Archeologický informační systém České republiky (AIS CR)</strong> vznikl jako dlouhodobý projekt Akademie věd ČR v Praze a Brně od roku 2016 je součástí <strong>Cestovní mapy velkých výzkumných infrastruktur ČR</strong>. Je tak dlouhodobě finančně podporován Ministerstvem školství, mládeže a tělovýchovy České republiky.
				</p>

				<!-- Quote -->
				<div class="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
					<blockquote class="text-purple-900 italic text-lg leading-relaxed" style="font-family: 'Roboto', sans-serif;">
						"Cílem AIS CR je odborně spravovat, zpřístupňovat a trvale uchovávat data z archeologických terénních výzkumů z území České republiky a budovat digitální ekosystém české archeologie."
					</blockquote>
				</div>

			</div>

			<!-- Right column with features -->
			<div class="space-y-6">
				
				<!-- Feature items -->
				<div class="flex items-start space-x-4">
					<Database size="24" color="#8B5CF6" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							Pokrýváme <strong>archeologická data</strong> od nejstarších výzkumů v 19. století až po aktuálně probíhající výzkumy.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<Archive size="24" color="#8B5CF6" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							Uchovávame fyzické a digitální záznamy a zpřístupňujeme je prostřednictvím online nástrojů, v souvislostech a bez zbytečných bariér. Vytváříme tak <strong>důvěryhodný digitální repositář</strong>.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<FileText size="24" color="#8B5CF6" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							Digitálně zpracováváme <strong>dokumenty shromážděné od roku 1919</strong> a zároveň průběžně dohlížíme na kvalitu evidence a dokumentace aktuálně probíhajících archeologických výzkumů.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<Users size="24" color="#8B5CF6" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							Kvalitu záznamů zvyšujeme propojováním souvisejících dokumentů, doplňováním chybějících starších dat a budováním autoritních seznamů <strong>archeologických výzkumů a lokalit</strong>.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<BarChart3 size="24" color="#8B5CF6" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							Sledujeme <strong>nejnovější trendy</strong> v oblasti digitální správy dat (digitální kurátorství) a podporujeme zavádění technologických inovací.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<Globe size="24" color="#8B5CF6" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							Do českého archeologického prostředí přinášíme <strong>standardy</strong> založené na mezinárodně uznávaných FAIR principech a mezioborových <strong>prostředí pro správu výzkumných dat</strong>.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<Target size="24" color="#8B5CF6" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							Uvědomujeme si rozmanitost naší <strong>uživatelské základny</strong> – od odborné a amatérské komunity přes státní správu po veřejnost – a tomu přizpůsobujeme podobu a zaměření našich nástrojů.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<Globe size="24" color="#8B5CF6" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							Usilujeme o to, aby data AIS CR byla <strong>součástí propojených webů</strong>, tj. standardizovaná a technicky kompatibilní s dalšími informačními systémy, a aby byla dohledatelná i mezinárodně.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<Users size="24" color="#8B5CF6" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							Udržujeme <strong>expertní tým</strong>, který spravuje data, vyvíjí aplikační nástroje a rozvíjí nezbytné digitální dovednosti našich uživatelů a uživatelek.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<Target size="24" color="#8B5CF6" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							Napomáháme porozumění <strong>roli archeologie ve společnosti</strong> a cíleně posilujeme využití výsledků výzkumu v praxi.
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Bottom section separated by dotted border -->
		<div class="mt-16 pt-16 border-t border-dashed border-gray-400">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
				
				<!-- Left column - Question and quote -->
				<div>
					<div class="flex items-start space-x-4">
						<Star size="24" color="#0D9488" class="mt-1 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-xl text-gray-900 mb-4" style="font-family: 'Roboto', sans-serif;">
								Proč je AIS CR nezastupitelný?
							</h3>
							
							<div class="bg-teal-50 border-l-4 border-teal-500 p-4">
								<blockquote class="text-teal-700 italic leading-relaxed" style="font-family: 'Roboto', sans-serif;">
									"Jedinečná a nenahraditelná archeologická data si zaslouží profesionální péči – proto je tu AIS CR."
								</blockquote>
							</div>
						</div>
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

		<!-- Who creates AIS CR section -->
		<div class="mt-16 pt-16 border-t border-dashed border-gray-400">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
				
				<!-- Left column - Question and quote -->
				<div>
					<div class="flex items-start space-x-4">
						<Building size="24" color="#DC2626" class="mt-1 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-xl text-gray-900 mb-4" style="font-family: 'Roboto', sans-serif;">
								Kdo AIS CR tvoří?
							</h3>
							
							<div class="bg-red-50 border-l-4 border-red-500 p-4">
								<blockquote class="text-red-700 italic leading-relaxed" style="font-family: 'Roboto', sans-serif;">
									"Jsme expertní tým s hlubokou znalostí oboru – data jsou s AIS CR v bezpečí."
								</blockquote>
							</div>
						</div>
					</div>
				</div>

				<!-- Right column - Team description -->
				<div>
					<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
						AIS CR koordinuje <strong>Archeologický ústav AV ČR, Brno</strong> (Archiv ARUB, kde jsou spravovány datové sady a archivní fond pro Moravu a České Slezsko) ve spolupráci s <strong>Archeologickým ústavem AV ČR, Praha</strong> (Oddělení informačních zdrojů a archeologie krajiny ARÚ se správou pro území Čech).
					</p>
				</div>
			</div>
		</div>

		<!-- Executive Board section -->
		<div class="mt-16 pt-16 border-t border-dashed border-gray-400">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
				
				<!-- Left column - Title -->
				<div>
					<div class="flex items-start space-x-4">
						<UserCheck size="24" color="#DC2626" class="mt-1 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-xl text-gray-900" style="font-family: 'Roboto', sans-serif;">
								Výkonný výbor AIS CR
							</h3>
						</div>
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
			<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
				<div class="text-center">
					<div class="w-24 h-24 bg-gray-400 rounded-full mx-auto mb-4"></div>
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Olga Lečbychová
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						ARUB
					</p>
				</div>

				<div class="text-center">
					<div class="w-24 h-24 bg-gray-400 rounded-full mx-auto mb-4"></div>
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						David Novák
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						ARÚ
					</p>
				</div>

				<div class="text-center">
					<div class="w-24 h-24 bg-gray-400 rounded-full mx-auto mb-4"></div>
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Petr Pajdla
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						ARUB
					</p>
				</div>

				<div class="text-center">
					<div class="w-24 h-24 bg-gray-400 rounded-full mx-auto mb-4"></div>
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Ondřej Švejcar
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						ARÚ
					</p>
				</div>
			</div>
		</div>

		<!-- Scientific Advisory Board section -->
		<div class="mt-16 pt-16 border-t border-dashed border-gray-400">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
				
				<!-- Left column - Title -->
				<div>
					<div class="flex items-start space-x-4">
						<GraduationCap size="24" color="#DC2626" class="mt-1 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-xl text-gray-900" style="font-family: 'Roboto', sans-serif;">
								Vědecký poradní výbor AIS CR
							</h3>
						</div>
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
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
				<div class="text-center">
					<div class="w-20 h-20 bg-gray-400 rounded-full mx-auto mb-3"></div>
					<h4 class="font-semibold text-gray-900 text-xs leading-tight" style="font-family: 'Roboto', sans-serif;">
						Stefan Eichert
					</h4>
					<p class="text-xs text-gray-600 mt-1" style="font-family: 'Roboto', sans-serif;">
						Naturhistorisches Museum Wien, předseda
					</p>
				</div>

				<div class="text-center">
					<div class="w-20 h-20 bg-gray-400 rounded-full mx-auto mb-3"></div>
					<h4 class="font-semibold text-gray-900 text-xs leading-tight" style="font-family: 'Roboto', sans-serif;">
						Cynthia Dunning
					</h4>
					<p class="text-xs text-gray-600 mt-1" style="font-family: 'Roboto', sans-serif;">
						Thinktank Archaeoconcept
					</p>
				</div>

				<div class="text-center">
					<div class="w-20 h-20 bg-gray-400 rounded-full mx-auto mb-3"></div>
					<h4 class="font-semibold text-gray-900 text-xs leading-tight" style="font-family: 'Roboto', sans-serif;">
						Johanna Hilpert
					</h4>
					<p class="text-xs text-gray-600 mt-1" style="font-family: 'Roboto', sans-serif;">
						Universität zu Köln, Philosophische Fakultät, Institut für Ur- und Frühgeschichte
					</p>
				</div>

				<div class="text-center">
					<div class="w-20 h-20 bg-gray-400 rounded-full mx-auto mb-3"></div>
					<h4 class="font-semibold text-gray-900 text-xs leading-tight" style="font-family: 'Roboto', sans-serif;">
						Axel G. Posluschny
					</h4>
					<p class="text-xs text-gray-600 mt-1" style="font-family: 'Roboto', sans-serif;">
						Keltenwell, an der Mathematicko-fyzikální fakulta, Ústav formální a aplikované lingvistiky
					</p>
				</div>

				<div class="text-center">
					<div class="w-20 h-20 bg-gray-400 rounded-full mx-auto mb-3"></div>
					<h4 class="font-semibold text-gray-900 text-xs leading-tight" style="font-family: 'Roboto', sans-serif;">
						Pavel Staněk
					</h4>
					<p class="text-xs text-gray-600 mt-1" style="font-family: 'Roboto', sans-serif;">
						Karlova universita, Matematicko-fyzikální fakulta, Ústav formální a aplikované lingvistiky
					</p>
				</div>

				<div class="text-center">
					<div class="w-20 h-20 bg-gray-400 rounded-full mx-auto mb-3"></div>
					<h4 class="font-semibold text-gray-900 text-xs leading-tight" style="font-family: 'Roboto', sans-serif;">
						Benjamin Štular
					</h4>
					<p class="text-xs text-gray-600 mt-1" style="font-family: 'Roboto', sans-serif;">
						Institute of Archaeology of the Slovenian Academy of Sciences and Arts
					</p>
				</div>
			</div>
		</div>

		<!-- Funding Sources section -->
		<div class="mt-16 pt-16 border-t border-dashed border-gray-400">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
				
				<!-- Left column - Title -->
				<div>
					<div class="flex items-start space-x-4">
						<DollarSign size="24" color="#8B5CF6" class="mt-1 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-xl text-gray-900" style="font-family: 'Roboto', sans-serif;">
								Zdroje financování
							</h3>
						</div>
					</div>
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
				</div>
			</div>
		</div>

		<!-- Partners and Data Providers section -->
		<div class="mt-16 pt-16 border-t border-dashed border-gray-400">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
				
				<!-- Left column - Title -->
				<div>
					<div class="flex items-start space-x-4">
						<Handshake size="24" color="#DC2626" class="mt-1 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-xl text-gray-900" style="font-family: 'Roboto', sans-serif;">
								Partneři a poskytovatelé dat
							</h3>
						</div>
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
				<p class="text-gray-900 font-medium" style="font-family: 'Roboto', sans-serif;">
					Mezi důležité smluvní partnery AIS CR dále patří:
				</p>
			</div>

			<!-- Partner logos grid -->
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
				<div class="flex items-center justify-center h-16 bg-white rounded-lg p-4">
					<div class="w-full h-8 bg-gray-300 rounded flex items-center justify-center">
						<span class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">Ministerstvo kultury</span>
					</div>
				</div>

				<div class="flex items-center justify-center h-16 bg-white rounded-lg p-4">
					<div class="w-full h-8 bg-gray-300 rounded flex items-center justify-center">
						<span class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">Akademie věd ČR</span>
					</div>
				</div>

				<div class="flex items-center justify-center h-16 bg-white rounded-lg p-4">
					<div class="w-full h-8 bg-gray-300 rounded flex items-center justify-center">
						<span class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">ARIADNE</span>
					</div>
				</div>

				<div class="flex items-center justify-center h-16 bg-white rounded-lg p-4">
					<div class="w-full h-8 bg-gray-300 rounded flex items-center justify-center">
						<span class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">LINDAT</span>
					</div>
				</div>

				<div class="flex items-center justify-center h-16 bg-white rounded-lg p-4">
					<div class="w-full h-8 bg-gray-300 rounded flex items-center justify-center">
						<span class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">Národní památkový ústav</span>
					</div>
				</div>

				<div class="flex items-center justify-center h-16 bg-white rounded-lg p-4">
					<div class="w-full h-8 bg-gray-300 rounded flex items-center justify-center">
						<span class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">CARARE</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
