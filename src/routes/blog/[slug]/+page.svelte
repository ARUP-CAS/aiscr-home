<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/paraglide/runtime';
	import { ChevronLeft, Facebook, Linkedin, Link, Twitter } from '@lucide/svelte';
	
	let { data }: { data: PageData } = $props();
	let currentLocale = $state(getLocale());
	
	// Aktualizovat locale při změně
	$effect(() => {
		currentLocale = getLocale();
	});

	function formatDate(dateString: string) {
		const locale = currentLocale;
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

<!-- Blog Header -->
<div style="background-color: #EDE9E5; padding: 60px 0;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;width: 100%;">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<!-- Left Column (1/3) -->
			<div class="lg:col-span-1">
			<!-- Tlačítko zpět -->
			<a href={resolve("/blog")} class="inline-flex items-center text-black hover:text-gray-700 mb-6" style="font-family: 'Roboto', sans-serif; font-size: 16px;">
				<ChevronLeft size="20" class="mr-2" />
				{m['blog.backToBlog']()}
			</a>
				
				<!-- Badge a čas čtení -->
				<div class="flex items-center gap-3 mb-6">
					{#if data.post.category}
						<span style="background-color: #721C17; color: white; padding: 6px 16px; font-family: 'Roboto', sans-serif; font-size: 14px;">
							{data.post.category}
						</span>
					{/if}
					<span style="font-family: 'Roboto', sans-serif; font-size: 14px; color: #666;">
						Čas čtení {data.post.readingTime}
					</span>
				</div>
				
				<!-- Název článku -->
				<h1 style="font-family: 'Roboto Slab', serif; font-size: 48px; font-weight: bold; line-height: 1.2; margin-bottom: 24px;">
					{data.post.title}
				</h1>
				
				<!-- Datum publikace -->
				<time datetime={data.post.date} style="font-family: 'Roboto', sans-serif; font-size: 16px; color: #666;">
					Publikováno {formatDate(data.post.date)}
				</time>
			</div>
			
			<!-- Right Column (2/3) - Image -->
			<div class="lg:col-span-2">
				<img 
					src={data.post.image} 
					alt={data.post.title}
					style="width: 100%; height: auto; border-radius: 8px;"
				/>
			</div>
		</div>
	</div>
</div>

<!-- Blog Content -->
<div style="background-color: white; padding: 80px 0;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<!-- Left Column (1/3) - Author & Share -->
			<div class="lg:col-span-1">
				<!-- Author Info -->
				<div class="mb-8">
					<h3 style="font-family: 'Roboto', sans-serif; font-size: 18px; font-weight: 700; color: #000; margin-bottom: 24px;">
						{m['blog.author']()}
					</h3>
					<div class="flex items-center gap-3 mb-8">
						<img 
							src={data.post.authorImage} 
							alt={data.post.author}
							style="width: 64px; height: 64px; border-radius: 50%; object-fit: cover;"
						/>
						<div>
							<div style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 600; margin-bottom: 4px;">
								{data.post.author}
							</div>
							<div style="font-family: 'Roboto', sans-serif; font-size: 14px; color: #666;">
								{data.post.authorRole}
							</div>
						</div>
					</div>
					<!-- Horizontal divider -->
					<hr style="border: none; border-top: 1px solid #000; margin: 32px 0;" />
				</div>
				
				<!-- Share Section -->
				<div>
					<h3 style="font-family: 'Roboto', sans-serif; font-size: 18px; font-weight: 700; color: #000; margin-bottom: 24px;">
						{m['blog.share']()}
					</h3>
					<div class="flex gap-4">
						<button 
							onclick={() => typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText(typeof window !== 'undefined' ? window.location.href : '')} 
							class="text-black hover:text-gray-600 transition-colors" 
							aria-label="Kopírovat odkaz"
							title="Kopírovat odkaz"
						>
							<Link size="24" />
						</button>
						<a href="https://www.linkedin.com/shareArticle?mini=true&url={encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}" target="_blank" rel="noopener noreferrer" class="text-black hover:text-gray-600 transition-colors" aria-label="Sdílet na LinkedIn">
							<Linkedin size="24" />
						</a>
						<a href="https://twitter.com/intent/tweet?url={encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text={encodeURIComponent(data.post.title)}" target="_blank" rel="noopener noreferrer" class="text-black hover:text-gray-600 transition-colors" aria-label="Sdílet na X (Twitter)">
							<Twitter size="24" />
						</a>
						<a href="https://www.facebook.com/sharer/sharer.php?u={encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}" target="_blank" rel="noopener noreferrer" class="text-black hover:text-gray-600 transition-colors" aria-label="Sdílet na Facebooku">
							<Facebook size="24" />
						</a>
					</div>
				</div>
			</div>
			
			<!-- Right Column (2/3) - Article Content -->
			<div class="lg:col-span-2">
				<article class="prose prose-lg max-w-none" style="font-family: 'Roboto', sans-serif;">
					<div class="prose-headings:font-['Roboto_Slab'] prose-headings:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-p:text-gray-800 prose-p:text-[18px] prose-p:leading-relaxed">
						{@render data.post.content()}
					</div>
				</article>
			</div>
		</div>
	</div>
</div>
