<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import type { PageData } from './$types';
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/paraglide/runtime';
	import { fetchNews, toListPost, localeFromPathname, type NewsListPost } from '$lib/feed';

	let { data }: { data: PageData } = $props();

	// Prerenderovaný seznam se v prohlížeči obnoví z živého feedu,
	// takže články publikované po posledním buildu webu se objeví hned.
	let livePosts: Record<string, NewsListPost[]> = $state({});
	const feedLocale = $derived(localeFromPathname(page.url.pathname));
	const posts = $derived(livePosts[feedLocale] ?? data.posts);

	$effect(() => {
		const locale = feedLocale;
		fetchNews(fetch, locale).then((items) => {
			if (items.length) livePosts[locale] = items.map(toListPost);
		});
	});

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return date.toLocaleDateString(getLocale() === 'cs' ? 'cs-CZ' : 'en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
	
	function getBlogUrl(slug: string) {
		const locale = getLocale();
		return locale === 'en' ? `${base}/en/blog/${slug}` : `${base}/blog/${slug}`;
	}
</script>

<svelte:head>
	<title>{m['blog.pageTitle']()} - AIS CR</title>
	<meta name="description" content={m['blog.pageDescription']()} />
</svelte:head>

<div class="mb-12">
	<h1 class="text-4xl lg:text-5xl font-bold text-black mb-4">
		{m['blog.pageTitle']()}
	</h1>
	<p class="text-xl text-black">
		{m['blog.pageDescription']()}
	</p>
</div>

<div class="grid gap-8">
	{#each posts as post}
		<article class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
			<div class="p-8">
				<div class="flex items-center gap-4 text-sm text-black mb-4">
					<time datetime={post.date}>{formatDate(post.date)}</time>
					{#if post.category}
						<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
							{post.category}
						</span>
					{/if}
				</div>
				
				<h2 class="text-2xl font-bold text-black mb-4 hover:text-blue-600">
					<!-- data-sveltekit-reload: plné načtení jde přímo na statické HTML
					     (nebo .htaccess fallback), takže proklik nezávisí na dostupnosti feedu -->
					<a href={getBlogUrl(post.slug)} data-sveltekit-reload>{post.title}</a>
				</h2>
				
				{#if post.excerpt}
					<p class="text-black leading-relaxed mb-6">
						{post.excerpt}
					</p>
				{/if}
				
				<a href={getBlogUrl(post.slug)} data-sveltekit-reload class="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
					{m['blog.readMore']()}
					<svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</a>
			</div>
		</article>
	{/each}
</div>

{#if posts.length === 0}
	<div class="text-center py-12">
		<p class="text-black text-lg">{m['blog.noArticles']()}</p>
	</div>
{/if}
