<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>AISCR - Archeologické informační systémy České republiky</title>
	<meta name="description" content="Objevte bohaté archeologické dědictví České republiky prostřednictvím našich moderních informačních systémů a databází." />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header />
	<main class="flex-1" style="padding-top: 120px;">
		{@render children?.()}
	</main>
	<Footer />
</div>
