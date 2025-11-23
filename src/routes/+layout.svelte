<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CookieBanner from '$lib/components/CookieBanner.svelte';

	let { children } = $props();
	
	// State pro otevření cookie banneru
	let openCookieBanner = $state(false);
	
	function triggerCookieBanner() {
		openCookieBanner = true;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>AIS CR - Archeologický informační systém České republiky</title>
	<meta name="description" content="Objevte bohaté archeologické dědictví České republiky prostřednictvím našich moderních informačních systémů a databází." />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header />
	<main class="flex-1" style="padding-top: 120px;">
		{@render children?.()}
	</main>
	<Footer onOpenCookies={triggerCookieBanner} />
	<CookieBanner bind:shouldOpen={openCookieBanner} />
</div>
