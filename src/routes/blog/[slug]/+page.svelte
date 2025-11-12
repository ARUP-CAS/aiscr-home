<script lang="ts">
	import type { PageData } from './$types';
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/paraglide/runtime';
	import { ChevronLeft, Facebook, Linkedin, Link, Twitter } from '@lucide/svelte';
	
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

<!-- Blog Header -->
<div class="py-8 sm:py-12 md:py-16" style="background-color: #EDE9E5;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
			<!-- Left Column (1/3) -->
			<div class="lg:col-span-1">
				<!-- Tlačítko zpět -->
				<a href="/blog" class="inline-flex items-center text-black hover:text-gray-700 mb-4 md:mb-6" style="font-family: 'Roboto', sans-serif; font-size: 14px; md:font-size: 16px;">
					<ChevronLeft size="20" class="mr-2" />
					{m['blog.backToBlog']()}
				</a>
				
				<!-- Badge a čas čtení -->
				<div class="flex items-center gap-3 mb-4 md:mb-6">
					{#if data.post.category}
						<span style="background-color: #721C17; color: white; padding: 6px 12px; font-family: 'Roboto', sans-serif; font-size: 12px; md:font-size: 14px;">
							{data.post.category}
						</span>
					{/if}
					<span style="font-family: 'Roboto', sans-serif; font-size: 12px; md:font-size: 14px; color: #666;">
						Čas čtení {data.post.readingTime}
					</span>
				</div>
				
				<!-- Název článku -->
				<h1 class="text-3xl sm:text-4xl md:text-5xl" style="font-family: 'Roboto Slab', serif; font-weight: bold; line-height: 1.2; margin-bottom: 16px; md:margin-bottom: 24px;">
					{data.post.title}
				</h1>
				
				<!-- Datum publikace -->
				<time datetime={data.post.date} class="text-sm md:text-base" style="font-family: 'Roboto', sans-serif; color: #666;">
					Publikováno {formatDate(data.post.date)}
				</time>
			</div>
			
			<!-- Right Column (2/3) - Image -->
			<div class="lg:col-span-2 mt-6 lg:mt-0">
				<img 
					src={data.post.image} 
					alt={data.post.title}
					class="w-full h-auto rounded-lg"
				/>
			</div>
		</div>
	</div>
</div>

<!-- Blog Content -->
<div class="py-12 md:py-16 lg:py-20" style="background-color: white;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
			<!-- Left Column (1/3) - Author & Share -->
			<div class="lg:col-span-1 order-2 lg:order-1">
				<!-- Author Info -->
				<div class="mb-8">
					<h3 class="text-base md:text-lg" style="font-family: 'Roboto', sans-serif; font-weight: 700; color: #000; margin-bottom: 16px; md:margin-bottom: 24px;">
						{m['blog.author']()}
					</h3>
					<div class="flex items-center gap-3 mb-6 md:mb-8">
						<img 
							src={data.post.authorImage} 
							alt={data.post.author}
							class="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
						/>
						<div>
							<div class="text-sm md:text-base" style="font-family: 'Roboto', sans-serif; font-weight: 600; margin-bottom: 4px;">
								{data.post.author}
							</div>
							<div class="text-xs md:text-sm" style="font-family: 'Roboto', sans-serif; color: #666;">
								{data.post.authorRole}
							</div>
						</div>
					</div>
					<!-- Horizontal divider -->
					<hr style="border: none; border-top: 1px solid #000; margin: 24px 0; md:margin: 32px 0;" />
				</div>
				
				<!-- Share Section -->
				<div>
					<h3 class="text-base md:text-lg" style="font-family: 'Roboto', sans-serif; font-weight: 700; color: #000; margin-bottom: 16px; md:margin-bottom: 24px;">
						{m['blog.share']()}
					</h3>
					<div class="flex gap-3 md:gap-4">
						<button 
							onclick={() => typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText(typeof window !== 'undefined' ? window.location.href : '')} 
							class="text-black hover:text-gray-600 transition-colors" 
							aria-label="Kopírovat odkaz"
							title="Kopírovat odkaz"
						>
							<Link class="w-5 h-5 md:w-6 md:h-6" />
						</button>
						<a href="https://www.linkedin.com/shareArticle?mini=true&url={encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}" target="_blank" rel="noopener noreferrer" class="text-black hover:text-gray-600 transition-colors" aria-label="Sdílet na LinkedIn">
							<Linkedin class="w-5 h-5 md:w-6 md:h-6" />
						</a>
						<a href="https://twitter.com/intent/tweet?url={encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text={encodeURIComponent(data.post.title)}" target="_blank" rel="noopener noreferrer" class="text-black hover:text-gray-600 transition-colors" aria-label="Sdílet na X (Twitter)">
							<Twitter class="w-5 h-5 md:w-6 md:h-6" />
						</a>
						<a href="https://www.facebook.com/sharer/sharer.php?u={encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}" target="_blank" rel="noopener noreferrer" class="text-black hover:text-gray-600 transition-colors" aria-label="Sdílet na Facebooku">
							<Facebook class="w-5 h-5 md:w-6 md:h-6" />
						</a>
					</div>
				</div>
			</div>
			
			<!-- Right Column (2/3) - Article Content -->
			<div class="lg:col-span-2 order-1 lg:order-2">
				<article class="prose prose-sm sm:prose-base md:prose-lg max-w-none" style="font-family: 'Roboto', sans-serif;">
					<div class="prose-headings:font-['Roboto_Slab'] prose-headings:text-black prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-p:text-black prose-p:leading-relaxed">
						{@render data.post.content()}
					</div>
				</article>
			</div>
		</div>
	</div>
</div>
