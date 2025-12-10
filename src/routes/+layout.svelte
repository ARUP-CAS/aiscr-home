<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CookieBanner from '$lib/components/CookieBanner.svelte';
	import { setLocale } from '$lib/paraglide/runtime';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let { children } = $props();
	
	// State pro otevření cookie banneru
	let openCookieBanner = $state(false);
	
	function triggerCookieBanner() {
		openCookieBanner = true;
	}

	// Initialize locale from URL on mount (for client-side hydration)
	onMount(() => {
		if (typeof window !== 'undefined') {
			// Odstranit base path z pathname pro správnou detekci locale
			const pathname = window.location.pathname.replace(base, '');
			const locale = pathname.startsWith('/en') ? 'en' : 'cs';
			setLocale(locale);
		}
	});
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="{base}/ais-mini.png" />
	<title>AIS CR - Archeologický informační systém České republiky</title>
	<meta name="description" content="AIS CR nabízí jednotné a přehledné digitální prostředí pro archeologická data z České republiky." />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header />
	<main class="flex-1" style="padding-top: 120px;">
		{@render children?.()}
	</main>
	<Footer onOpenCookies={triggerCookieBanner} />
	<CookieBanner bind:shouldOpen={openCookieBanner} />
</div>
