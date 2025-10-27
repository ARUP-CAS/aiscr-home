<script lang="ts">
	// Služby AIS CR - bento grid layout
	import { Flag, Church, Atom, BookOpen } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/paraglide/runtime';
	
	// Import logo
	import amcrPin from '/images/logos/amcr-pin.svg';
	
	// Import background images
	import bgServiceAmcr from '/images/bg-service-amcr.png';
	import bgServiceAtlas from '/images/bg-service-atlas.png';
	import bgServicePrague from '/images/bg-service-prague.png';
	import bgServiceC14 from '/images/bg-service-c14.png';
	import bgServiceTeater from '/images/bg-service-teater.png';
	
	// Sledovat změnu jazyka pro reaktivní aktualizaci
	let currentLocale = $state(getLocale());
	$effect(() => {
		currentLocale = getLocale();
	});
</script>

<section id="services" class="bg-gray-100" style="font-family: 'Roboto', sans-serif; padding: 128px 0 80px 0;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		
		<!-- Header -->
		<div class="text-center mb-16">
			<p class="text-sm text-gray-600" style="font-family: 'Roboto', sans-serif; font-weight: bold; margin-bottom: 16px;">{m['services.sectionLabel']()}</p>
			<h2 class="text-4xl font-bold mb-4" style="font-family: 'Roboto Slab', serif; color: #C6362E; font-size: 40px;">
				{m['services.title']()}
			</h2>
			<p class="text-lg text-gray-700" style="font-family: 'Roboto', sans-serif; margin-top: 24px;">
				{m['services.subtitle']()}
			</p>
		</div>

		<!-- Bento Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto" style="margin-top: 80px;">
			
		<!-- Mapujte a objevujte - velká karta vlevo nahoře -->
		<div class="md:col-span-2 lg:col-span-2 lg:row-span-1 overflow-hidden" style="background-image: url({bgServiceAmcr}); background-size: cover; background-position: center; padding: 32px;">
				<div class="text-white rounded-xl h-full" style="background-color: rgba(114, 28, 23, 0.8); padding: 24px;">
					<div class="h-full flex flex-col justify-between">
						<div>
							<img src={amcrPin} alt="AMČR" width="48" height="48" class="mb-6" />
							<h3 class="font-bold mb-4" style="font-family: 'Roboto Slab', serif; font-size: 40px;">
								{m['services.amcr.title']()}
							</h3>
							<p class="leading-relaxed mb-8" style="font-family: 'Roboto', sans-serif; font-size: 18px; font-weight: normal;">
								{m['services.amcr.description']()}
							</p>
					</div>
					<a href="https://amcr-info.aiscr.cz/" target="_blank" rel="noopener noreferrer" class="self-start border border-white text-white px-6 py-2 hover:bg-white hover:text-gray-800 transition-colors inline-block text-center" style="font-family: 'Roboto', sans-serif;">
						{m['services.amcr.cta']()}
					</a>
				</div>
				</div>
			</div>

		<!-- Vydejte se za archeology - fialová karta vpravo nahoře -->
		<div class="md:col-span-2 lg:col-span-2 lg:row-span-1 overflow-hidden" style="background-image: url({bgServiceAtlas}); background-size: cover; background-position: center; padding: 32px;">
				<div class="text-white rounded-xl h-full" style="background-color: rgba(128, 35, 118, 0.8); padding: 24px;">
					<div class="h-full flex flex-col justify-between">
						<div>
							<Flag size={48} color="white" class="mb-6" />
							<h3 class="font-bold mb-4" style="font-family: 'Roboto Slab', serif; font-size: 40px;">
								{m['services.atlas.title']()}
							</h3>
							<p class="leading-relaxed mb-8" style="font-family: 'Roboto', sans-serif; font-size: 18px; font-weight: normal;">
								{m['services.atlas.description']()}
							</p>
					</div>
					<a href="https://www.archeologickyatlas.cz/" target="_blank" rel="noopener noreferrer" class="self-start border border-white text-white px-6 py-2 hover:bg-white hover:text-purple-800 transition-colors inline-block text-center" style="font-family: 'Roboto', sans-serif;">
						{m['services.atlas.cta']()}
					</a>
				</div>
				</div>
			</div>

		<!-- Poznávejte Prahu - červená karta vlevo dole -->
		<div class="lg:col-span-1 overflow-hidden" style="background-image: url({bgServicePrague}); background-size: cover; background-position: center; padding: 24px;">
				<div class="text-white rounded-xl h-full" style="background-color: rgba(198, 54, 46, 0.8); padding: 16px;">
					<Church size={48} color="white" class="mb-4" />
					<h3 class="font-bold mb-3" style="font-family: 'Roboto Slab', serif; font-size: 24px;">
						{m['services.praha.title']()}
					</h3>
				<p class="leading-relaxed mb-6" style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: normal;">
					{m['services.praha.description']()}
				</p>
				<a href="https://praha.aiscr.cz/" target="_blank" rel="noopener noreferrer" class="flex items-center border border-white text-white px-4 py-2 hover:bg-white hover:text-red-800 transition-colors text-sm" style="font-family: 'Roboto', sans-serif;">
					<span>{m['services.praha.cta']()}</span>
					<svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</a>
				</div>
			</div>

		<!-- Využijte 14C - tmavě šedá karta uprostřed dole -->
		<div class="lg:col-span-1 overflow-hidden" style="background-image: url({bgServiceC14}); background-size: cover; background-position: center; padding: 24px;">
				<div class="text-white rounded-xl h-full" style="background-color: rgba(128, 142, 152, 0.8); padding: 16px;">
					<Atom size={48} color="white" class="mb-4" />
					<h3 class="font-bold mb-3" style="font-family: 'Roboto Slab', serif; font-size: 24px;">
						{m['services.c14.title']()}
					</h3>
				<p class="leading-relaxed mb-6" style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: normal;">
					{m['services.c14.description']()}
				</p>
				<a href="https://arch14.aiscr.cz/" target="_blank" rel="noopener noreferrer" class="flex items-center border border-white text-white px-4 py-2 hover:bg-white hover:text-gray-800 transition-colors text-sm" style="font-family: 'Roboto', sans-serif;">
					<span>{m['services.c14.cta']()}</span>
					<svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</a>
				</div>
			</div>

		<!-- Neztraťte se v pojmech - hnědá karta vpravo dole -->
		<div class="lg:col-span-2 overflow-hidden" style="background-image: url({bgServiceTeater}); background-size: cover; background-position: center; padding: 32px;">
				<div class="text-white rounded-xl h-full" style="background-color: rgba(219, 145, 52, 0.8); padding: 24px;">
					<BookOpen size={48} color="white" class="mb-4" />
					<h3 class="font-bold mb-3" style="font-family: 'Roboto Slab', serif; font-size: 40px;">
						{m['services.teater.title']()}
					</h3>
				<p class="leading-relaxed mb-6" style="font-family: 'Roboto', sans-serif; font-size: 18px; font-weight: normal;">
					{m['services.teater.description']()}
				</p>
				<a href="http://teater.aiscr.cz/" target="_blank" rel="noopener noreferrer" class="border border-white text-white px-4 py-2 hover:bg-white hover:text-yellow-800 transition-colors text-sm inline-block" style="font-family: 'Roboto', sans-serif;">
					{m['services.teater.cta']()}
				</a>
				</div>
			</div>

		</div>
	</div>
</section>
