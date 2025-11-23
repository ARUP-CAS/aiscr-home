<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { onMount } from 'svelte';

	let { shouldOpen = $bindable(false) } = $props<{ shouldOpen?: boolean }>();
	let showBanner = $state(false);

	onMount(() => {
		// Zkontrolujeme, zda už uživatel vyjádřil svůj souhlas/nesouhlas
		const cookieConsent = localStorage.getItem('cookieConsent');
		if (cookieConsent === null) {
			// Pokud nemá uložené nastavení, zobrazíme banner
			showBanner = true;
		}
	});
	
	// Sledujeme shouldOpen prop a otevíráme banner
	$effect(() => {
		if (shouldOpen) {
			showBanner = true;
			shouldOpen = false; // Reset
		}
	});

	function acceptCookies() {
		localStorage.setItem('cookieConsent', 'accepted');
		showBanner = false;
		// TODO: Zde můžete aktivovat Google Analytics
		console.log('Cookies accepted');
	}

	function rejectCookies() {
		localStorage.setItem('cookieConsent', 'rejected');
		showBanner = false;
		console.log('Cookies rejected');
	}
</script>

{#if showBanner}
	<div class="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
		<div class="pointer-events-auto w-full max-w-4xl bg-white rounded-lg shadow-2xl border-2 border-black" style="font-family: 'Roboto', sans-serif;">
			<div class="p-6 md:p-8">
				<h2 class="text-2xl font-bold mb-4 text-black" style="font-family: 'Roboto Slab', serif;">
					{m['cookies.title']()}
				</h2>
				<div class="text-black leading-relaxed mb-6" style="font-size: 16px;">
					{@html m['cookies.description']()}
				</div>
				<div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
					<button
						onclick={acceptCookies}
						class="px-6 py-3 bg-[#C6362E] text-white font-medium hover:bg-[#A02D26] transition-colors"
						style="font-family: 'Roboto', sans-serif;"
					>
						{m['cookies.accept']()}
					</button>
					<button
						onclick={rejectCookies}
						class="px-6 py-3 bg-white text-black border-2 border-black font-medium hover:bg-gray-100 transition-colors"
						style="font-family: 'Roboto', sans-serif;"
					>
						{m['cookies.reject']()}
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Animace pro zobrazení banneru */
	@keyframes slideUp {
		from {
			transform: translateY(100%);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.fixed {
		animation: slideUp 0.3s ease-out;
	}
</style>

