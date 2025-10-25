<script lang="ts">
	import type { PageData } from './$types';
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/paraglide/runtime';
	
	let { data }: { data: PageData } = $props();

	function formatDate(dateString: string) {
		const locale = getLocale();
		const date = new Date(dateString);
		return date.toLocaleDateString(locale === 'cs' ? 'cs-CZ' : 'en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>{data.post.title} - AISCR Blog</title>
	{#if data.post.excerpt}
		<meta name="description" content={data.post.excerpt} />
	{/if}
</svelte:head>

<article class="prose prose-lg max-w-none">
	<header class="mb-12 not-prose">
		<nav class="mb-8">
			<a href="/blog" class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
				<svg class="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				{(m as any)['blog.backToBlog']()}
			</a>
		</nav>
		
		<div class="flex items-center gap-4 text-sm text-gray-500 mb-6">
			<time datetime={data.post.date}>{formatDate(data.post.date)}</time>
			{#if data.post.category}
				<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
					{data.post.category}
				</span>
			{/if}
		</div>
		
		<h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
			{data.post.title}
		</h1>
		
		{#if data.post.excerpt}
			<p class="text-xl text-gray-600 mt-6 leading-relaxed">
				{data.post.excerpt}
			</p>
		{/if}
	</header>

	<div class="prose-headings:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
		{@render data.post.content()}
	</div>
</article>
