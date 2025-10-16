<script lang="ts">
	// Služby AIS CR - bento grid layout
	import { Flag, Church, Atom, BookOpen } from '@lucide/svelte';
	import amcrPin from '/amcr-pin.svg';
	
	// Import background obrázků
	import amcrBg from '/amcr-bg.jpg';
	import atlasBg from '/atlas-bg.png';
	import prahaBg from '/praha-bg.jpg';
	import c14Bg from '/c14-bg.jpg';
	import teaterBg from '/teater-bg.jpg';
</script>

<section id="services" class="bg-gray-100" style="font-family: 'Roboto', sans-serif; padding: 128px 0 80px 0;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		
		<!-- Header -->
		<div class="text-center mb-16">
			<p class="text-sm text-gray-600" style="font-family: 'Roboto', sans-serif; font-weight: bold; margin-bottom: 16px;">Služby AIS CR</p>
			<h2 class="text-4xl font-bold mb-4" style="font-family: 'Roboto Slab', serif; color: #C6362E; font-size: 40px;">
				Vše na jednom místě
			</h2>
			<p class="text-lg text-gray-700" style="font-family: 'Roboto', sans-serif; margin-top: 24px;">
				Prozkoumejte širokou paletu digitálních nástrojů, které pro vás spravujeme.
			</p>
		</div>

		<!-- Bento Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto" style="margin-top: 80px;">
			
		<!-- Mapujte a objevujte - velká karta vlevo nahoře -->
		<div class="md:col-span-2 lg:col-span-2 lg:row-span-1 overflow-hidden" style="background-image: url({amcrBg}); background-size: cover; background-position: center; padding: 32px;">
				<div class="text-white rounded-xl h-full" style="background-color: rgba(114, 28, 23, 0.8); padding: 24px;">
					<div class="h-full flex flex-col justify-between">
						<div>
							<img src={amcrPin} alt="AMČR" width="48" height="48" class="mb-6" />
							<h3 class="font-bold mb-4" style="font-family: 'Roboto Slab', serif; font-size: 40px;">
								Mapujte a objevujte s námi minulost
							</h3>
							<p class="leading-relaxed mb-8" style="font-family: 'Roboto', sans-serif; font-size: 18px; font-weight: normal;">
								Prozkoumejte Archeologickou mapu České republiky a její nástroje, které zajistí každodenní evidenci archeologických terénních výzkumů – krok za krokem. Nabízí virtuální badatelnu otevřenou všem, jednoduché cesty k plnění zákonných povinností veřejnosti i archeologické obce, ale také formální rámec pro spolupráci mezi amatérskou a odbornou komunitou.
							</p>
						</div>
						<button class="self-start border border-white text-white px-6 py-2 hover:bg-white hover:text-gray-800 transition-colors" style="font-family: 'Roboto', sans-serif;">
							Přejít na web AMČR
						</button>
					</div>
				</div>
			</div>

		<!-- Vydejte se za archeology - fialová karta vpravo nahoře -->
		<div class="md:col-span-2 lg:col-span-2 lg:row-span-1 overflow-hidden" style="background-image: url({atlasBg}); background-size: cover; background-position: center; padding: 32px;">
				<div class="text-white rounded-xl h-full" style="background-color: rgba(128, 35, 118, 0.8); padding: 24px;">
					<div class="h-full flex flex-col justify-between">
						<div>
							<Flag size={48} color="white" class="mb-6" />
							<h3 class="font-bold mb-4" style="font-family: 'Roboto Slab', serif; font-size: 40px;">
								Vydejte se za archeology do krajiny
							</h3>
							<p class="leading-relaxed mb-8" style="font-family: 'Roboto', sans-serif; font-size: 18px; font-weight: normal;">
								Chybí vám archeolog nebo archeologka, kteří by vás vzali do terénu? Nechte to na našem Archeologickém atlasu! Vydejte se za poznáním archeologických památek České republiky a objevuje je přímo v krajině.
							</p>
						</div>
						<button class="self-start border border-white text-white px-6 py-2 hover:bg-white hover:text-purple-800 transition-colors" style="font-family: 'Roboto', sans-serif;">
							Přejít do Archeologického atlasu ČR
						</button>
					</div>
				</div>
			</div>

		<!-- Poznávejte Prahu - červená karta vlevo dole -->
		<div class="lg:col-span-1 overflow-hidden" style="background-image: url({prahaBg}); background-size: cover; background-position: center; padding: 24px;">
				<div class="text-white rounded-xl h-full" style="background-color: rgba(198, 54, 46, 0.8); padding: 16px;">
					<Church size={48} color="white" class="mb-4" />
					<h3 class="font-bold mb-3" style="font-family: 'Roboto Slab', serif; font-size: 24px;">
						Poznávejte Prahu pod Prahou
					</h3>
					<p class="leading-relaxed mb-6" style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: normal;">
						Zajímá vás, co se skrývá pod dlažbou hlavního města? Portál Praha archeologická vám to umožní zjistit. Zpřístupňuje archeologické památky z území Prahy, a to jak odborníkům a odbornicím, tak široké veřejnosti. Prozkoumejte skryté vrstvy pražské minulosti právě teď – online na našem portálu.
					</p>
					<button class="flex items-center border border-white text-white px-4 py-2 hover:bg-white hover:text-red-800 transition-colors text-sm" style="font-family: 'Roboto', sans-serif;">
						<span>Přejít do Prahy archeologické</span>
						<svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>
			</div>

		<!-- Využijte 14C - tmavě šedá karta uprostřed dole -->
		<div class="lg:col-span-1 overflow-hidden" style="background-image: url({c14Bg}); background-size: cover; background-position: center; padding: 24px;">
				<div class="text-white rounded-xl h-full" style="background-color: rgba(128, 142, 152, 0.8); padding: 16px;">
					<Atom size={48} color="white" class="mb-4" />
					<h3 class="font-bold mb-3" style="font-family: 'Roboto Slab', serif; font-size: 24px;">
						Využijte 14C kalibrovaná data
					</h3>
					<p class="leading-relaxed mb-6" style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: normal;">
						V České archeologické radiouhlíkové databázi průběžně shromažďujeme a aktualizujeme absolutní chronologická data z archeologických kontextů v ČR. Stáhněte si připravená data pro svůj výzkum nebo lépe pochopte výpovědní hodnotu svých dat s kalkulačkou rozložení 14C datování.
					</p>
					<button class="flex items-center border border-white text-white px-4 py-2 hover:bg-white hover:text-gray-800 transition-colors text-sm" style="font-family: 'Roboto', sans-serif;">
						<span>Přejít do ArCh14CZ</span>
						<svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>
			</div>

		<!-- Neztraťte se v pojmech - hnědá karta vpravo dole -->
		<div class="lg:col-span-2 overflow-hidden" style="background-image: url({teaterBg}); background-size: cover; background-position: center; padding: 32px;">
				<div class="text-white rounded-xl h-full" style="background-color: rgba(219, 145, 52, 0.8); padding: 24px;">
					<BookOpen size={48} color="white" class="mb-4" />
					<h3 class="font-bold mb-3" style="font-family: 'Roboto Slab', serif; font-size: 40px;">
						Neztraťte se v pojmech
					</h3>
					<p class="leading-relaxed mb-6" style="font-family: 'Roboto', sans-serif; font-size: 18px; font-weight: normal;">
						Hledáte slovník, se kterým se spolehlivě zorientujete mezi českou, anglickou a německou archeologickou terminologií? Pomůže vám Tezaurus archeologické terminologie, všejačný online výkladový slovník! Umožní vám pochopit pojmy v jejich odborném kontextu, a to bez nutnosti chodit do knihovny.
					</p>
					<button class="border border-white text-white px-4 py-2 hover:bg-white hover:text-yellow-800 transition-colors text-sm" style="font-family: 'Roboto', sans-serif;">
						Přejít do TEATERu
					</button>
				</div>
			</div>

		</div>
	</div>
</section>
