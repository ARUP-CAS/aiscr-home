<script lang="ts">
	// Služby AIS CR - bento grid layout
	import { MapPin, Flag, Building, Target, Mail } from '@lucide/svelte';
</script>

<section id="services" class="py-20 bg-gray-100" style="font-family: 'Roboto', sans-serif;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1100px; margin: 0 auto;">
		
		<!-- Header -->
		<div class="text-center mb-16">
			<p class="text-sm text-gray-600 mb-2" style="font-family: 'Roboto', sans-serif;">Služby AIS CR</p>
			<h2 class="text-4xl font-bold mb-4" style="font-family: 'Roboto', sans-serif; color: #C6362E;">
				Vše na jednom místě
			</h2>
			<p class="text-lg text-gray-700" style="font-family: 'Roboto', sans-serif;">
				Prozkoumejte širokou paletu digitálních nástrojů, které pro vás spravujeme.
			</p>
		</div>

		<!-- Bento Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto">
			
			<!-- Mapujte a objevujte - velká karta vlevo nahoře -->
			<div class="md:col-span-2 lg:col-span-2 lg:row-span-2 p-8 rounded-xl text-white" style="background-color: #8B4513;">
				<div class="h-full flex flex-col justify-between">
					<div>
						<MapPin size="48" color="white" class="mb-6" />
						<h3 class="text-2xl font-bold mb-4" style="font-family: 'Roboto', sans-serif;">
							Mapujte a objevujte s námi minulost
						</h3>
						<p class="text-lg leading-relaxed mb-8" style="font-family: 'Roboto', sans-serif;">
							Prozkoumejte Archeologickou mapu České republiky a její nástroje, které zajistí každodenní evidenci archeologických terénních výzkumů – krok za krokem. Nabízí virtuální badatelnu otevřenou všem, jednoduché cesty k plnění zákonných povinností veřejnosti i archeologické obce, ale také formální rámec pro spolupráci mezi amatérskou a odbornou komunitou.
						</p>
					</div>
					<button class="self-start border border-white text-white px-6 py-2 hover:bg-white hover:text-gray-800 transition-colors" style="font-family: 'Roboto', sans-serif;">
						Přejít na web AMČR
					</button>
				</div>
			</div>

			<!-- Vydejte se za archeology - fialová karta vpravo nahoře -->
			<div class="lg:col-span-1 lg:row-span-2 p-8 rounded-xl text-white" style="background-color: #8B4B9C;">
				<div class="h-full flex flex-col justify-between">
					<div>
						<Flag size="48" color="white" class="mb-6" />
						<h3 class="text-xl font-bold mb-4" style="font-family: 'Roboto', sans-serif;">
							Vydejte se za archeology do krajiny
						</h3>
						<p class="leading-relaxed mb-8" style="font-family: 'Roboto', sans-serif;">
							Chybí vám archeolog nebo archeologka, kteří by vás vzali do terénu? Nechte to na našem Archeologickém atlasu! Vydejte se za poznáním archeologických památek České republiky a objevuje je přímo v krajině.
						</p>
					</div>
					<button class="self-start border border-white text-white px-6 py-2 hover:bg-white hover:text-purple-800 transition-colors" style="font-family: 'Roboto', sans-serif;">
						Přejít do Archeologického atlasu ČR
					</button>
				</div>
			</div>

			<!-- Poznávejte Prahu - červená karta vlevo dole -->
			<div class="p-6 rounded-xl text-white" style="background-color: #C6362E;">
				<Building size="32" color="white" class="mb-4" />
				<h3 class="text-lg font-bold mb-3" style="font-family: 'Roboto', sans-serif;">
					Poznávejte Prahu pod Prahou
				</h3>
				<p class="text-sm leading-relaxed mb-6" style="font-family: 'Roboto', sans-serif;">
					Zajímá vás, co se skrývá pod dlažbou hlavního města? Portál Praha archeologická vám to umožní zjistit. Zpřístupňuje archeologické památky z území Prahy, a to jak odborníkům a odbornicím, tak široké veřejnosti. Prozkoumejte skryté vrstvy pražské minulosti právě teď – online na našem portálu.
				</p>
				<button class="flex items-center border border-white text-white px-4 py-2 hover:bg-white hover:text-red-800 transition-colors text-sm" style="font-family: 'Roboto', sans-serif;">
					<span>Přejít do Prahy archeologické</span>
					<svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</button>
			</div>

			<!-- Využijte 14C - tmavě šedá karta uprostřed dole -->
			<div class="p-6 rounded-xl text-white" style="background-color: #4A5568;">
				<Target size="32" color="white" class="mb-4" />
				<h3 class="text-lg font-bold mb-3" style="font-family: 'Roboto', sans-serif;">
					Využijte 14C kalibrovaná data
				</h3>
				<p class="text-sm leading-relaxed mb-6" style="font-family: 'Roboto', sans-serif;">
					V České archeologické radiouhlíkové databázi průběžně shromažďujeme a aktualizujeme absolutní chronologická data z archeologických kontextů v ČR. Stáhněte si připravená data pro svůj výzkum nebo lépe pochopte výpovědní hodnotu svých dat s kalkulačkou rozložení 14C datování.
				</p>
				<button class="flex items-center border border-white text-white px-4 py-2 hover:bg-white hover:text-gray-800 transition-colors text-sm" style="font-family: 'Roboto', sans-serif;">
					<span>Přejít do ArCh14CZ</span>
					<svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</button>
			</div>

			<!-- Neztraťte se v pojmech - hnědá karta vpravo dole -->
			<div class="p-6 rounded-xl text-white" style="background-color: #B8860B;">
				<Mail size="32" color="white" class="mb-4" />
				<h3 class="text-lg font-bold mb-3" style="font-family: 'Roboto', sans-serif;">
					Neztraťte se v pojmech
				</h3>
				<p class="text-sm leading-relaxed mb-6" style="font-family: 'Roboto', sans-serif;">
					Hledáte slovník, se kterým se spolehlivě zorientujete mezi českou, anglickou a německou archeologickou terminologií? Pomůže vám Tezaurus archeologické terminologie, všejačný online výkladový slovník! Umožní vám pochopit pojmy v jejich odborném kontextu, a to bez nutnosti chodit do knihovny.
				</p>
				<button class="border border-white text-white px-4 py-2 hover:bg-white hover:text-yellow-800 transition-colors text-sm" style="font-family: 'Roboto', sans-serif;">
					Přejít do TEATERu
				</button>
			</div>

		</div>
	</div>
</section>
