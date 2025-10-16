<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';
	
	let { data }: { data: PageData } = $props();

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return date.toLocaleDateString('cs-CZ', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Blog - AISCR</title>
	<meta name="description" content="Nejnovější články a objevy z oblasti archeologie v České republice" />
</svelte:head>

<div class="mb-12">
	<h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
		Blog
	</h1>
	<p class="text-xl text-gray-600">
		Nejnovější články, objevy a novinky z oblasti archeologie v České republice
	</p>
</div>

<div class="grid gap-8">
	{#each data.posts as post}
		<article class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
			<div class="p-8">
				<div class="flex items-center gap-4 text-sm text-gray-500 mb-4">
					<time datetime={post.date}>{formatDate(post.date)}</time>
					{#if post.category}
						<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
							{post.category}
						</span>
					{/if}
				</div>
				
			<h2 class="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600">
				<a href={resolve(`/blog/${post.slug}`)}>{post.title}</a>
			</h2>
			
			{#if post.excerpt}
				<p class="text-gray-600 leading-relaxed mb-6">
					{post.excerpt}
				</p>
			{/if}
			
			<a href={resolve(`/blog/${post.slug}`)} class="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
					Číst celý článek
					<svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</a>
			</div>
		</article>
	{/each}
</div>

{#if data.posts.length === 0}
	<div class="text-center py-12">
		<p class="text-gray-500 text-lg">Zatím nejsou k dispozici žádné články.</p>
	</div>
{/if}
