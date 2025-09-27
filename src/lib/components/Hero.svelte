<script lang="ts">
	// Hero sekce s hlavním obsahem
	import { ChevronRight } from '@lucide/svelte';
</script>

<section class="bg-gray-200 flex items-center" style="font-family: 'Roboto', sans-serif; min-height: 780px;">
	<!-- Vnitřní div vycentrovaný s max 1100px a šířka 100% -->
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1100px; margin: 0 auto;">
		<!-- Blok omezený na 800px zarovnaný doleva -->
		<div style="max-width: 800px;">
			<h1 class="mb-6" style="font-family: 'Roboto Slab', serif; font-size: 56px; color: #C6362E; font-weight: 700; line-height: 1.2;">
				Archeologický informační<br>systém České republiky
			</h1>
			
			<p class="mb-8" style="font-family: 'Roboto', sans-serif; font-size: 24px; color: #000000; line-height: 1.4;">
				Digitální brána do světa české archeologie
			</p>
			
			<button class="inline-flex items-center bg-white text-black px-6 py-3 hover:bg-gray-100 transition-colors" style="font-family: 'Roboto', sans-serif; font-size: 16px; border: 1px solid #000000;">
				<span class="mr-3">Vstupte do světa české archeologie</span>
				<ChevronRight size="16" color="#000000" />
			</button>
		</div>
	</div>
</section>
