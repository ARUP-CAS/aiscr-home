<script lang="ts">
	// Hero sekce s hlavním obsahem
	import { resolve } from '$app/paths';
	import { ChevronRight } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages.js';
	
	// Import background images
	import bgHero from '/images/bg-hero.jpg';
	import bgHeroRight from '/images/bg-hero-right.png';
</script>

<section class="hero-section flex items-center" style="font-family: 'Roboto', sans-serif; min-height: 780px; background-image: url({bgHero}); --bg-hero-right-image: url({bgHeroRight});">
	<!-- Vnitřní div vycentrovaný s max 1100px a šířka 100% -->
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto; position: relative; z-index: 10;">
		<!-- Blok omezený na 800px zarovnaný doleva -->
		<div style="max-width: 800px;">
			<h1 class="mb-6" style="font-family: 'Roboto Slab', serif; font-size: 56px; color: #C6362E; font-weight: 700; line-height: 1.2;">
				{@html m['hero.title']()}
			</h1>
			
			<p style="font-family: 'Roboto', sans-serif; font-size: 24px; color: #000000; line-height: 1.4; font-weight: bold; margin-bottom: 96px;">
				{m['hero.subtitle']()}
			</p>
			
		<a href={`${resolve("/")}#services`} class="inline-flex items-center bg-white text-black px-6 py-3 hover:bg-gray-100 transition-colors" style="font-family: 'Roboto', sans-serif; font-size: 16px; border: 1px solid #000000;">
			<span class="mr-3">{m['hero.cta']()}</span>
			<ChevronRight size="16" color="#000000" />
		</a>
		</div>
	</div>
</section>

<style>
	.hero-section {
		position: relative;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.hero-section::after {
		content: '';
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		width: 50%;
		background-image: var(--bg-hero-right-image);
		background-size: contain;
		background-position: right center;
		background-repeat: no-repeat;
		pointer-events: none;
		z-index: 1;
	}
</style>
