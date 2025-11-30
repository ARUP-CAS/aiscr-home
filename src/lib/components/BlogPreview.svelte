<script lang="ts">
	// Preview nejnovějších blog postů
	import { resolve } from '$app/paths';
	import { Shovel, ArrowLeft, ArrowRight } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/paraglide/runtime';
	
	function getBlogUrl(slug: string) {
		const locale = getLocale();
		return locale === 'en' ? `/en/blog/${slug}` : `/blog/${slug}`;
	}
	
	// Synchronní načtení blog postů při SSR i CSR
	const allModules = import.meta.glob('/src/content/blog/*.md', { eager: true });
	
	const blogPosts = Object.entries(allModules)
		.map(([_path, module]) => {
			const { metadata } = module as any;
			
			return {
				slug: metadata.slug,
				title: metadata.title || 'Bez názvu',
				excerpt: metadata.excerpt || '',
				date: metadata.date || new Date().toISOString().split('T')[0],
				category: metadata.category || '',
				published: metadata.published !== false,
				categoryColor: metadata.category === 'Objevy' ? 'bg-purple-600' : 
							   metadata.category === 'Technologie' ? 'bg-blue-600' : 'bg-green-600',
				author: metadata.author || 'AIS CR Team',
				authorRole: metadata.authorRole || '',
				authorImage: metadata.authorImage || '',
				image: metadata.image || '/images/blog/placeholder.png',
				readTime: metadata.readingTime || '5 minut'
			};
		})
		.filter(post => post.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, 3);

	function formatDate(dateString: string) {
		const locale = getLocale();
		const date = new Date(dateString);
		return date.toLocaleDateString(locale === 'cs' ? 'cs-CZ' : 'en-US', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	}

	let scrollContainer: HTMLElement;
	let canScrollLeft = $state(false);
	let canScrollRight = $state(true);

	function updateScrollButtons() {
		if (!scrollContainer) return;
		
		const scrollLeft = scrollContainer.scrollLeft;
		const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
		
		canScrollLeft = scrollLeft > 5; // malá tolerance
		canScrollRight = scrollLeft < maxScroll - 5; // malá tolerance
		
		console.log('Scroll update:', { scrollLeft, maxScroll, canScrollLeft, canScrollRight });
	}

	onMount(() => {
		// Vícenásobné pokusy o inicializaci
		const initButtons = () => {
			if (scrollContainer) {
				updateScrollButtons();
				scrollContainer.addEventListener('scroll', updateScrollButtons, { passive: true });
				return true;
			}
			return false;
		};
		
		// Zkusíme hned, pak s delayem
		if (!initButtons()) {
			setTimeout(() => {
				if (!initButtons()) {
					setTimeout(initButtons, 500);
				}
			}, 100);
		}
		
		return () => {
			if (scrollContainer) {
				scrollContainer.removeEventListener('scroll', updateScrollButtons);
			}
		};
	});

	function scrollLeft() {
		if (!canScrollLeft || !scrollContainer) return;
		const cardWidth = 414; // 390px karta + 24px gap
		scrollContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
		setTimeout(updateScrollButtons, 500);
	}

	function scrollRight() {
		if (!canScrollRight || !scrollContainer) return;
		const cardWidth = 414; // 390px karta + 24px gap
		scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
		setTimeout(updateScrollButtons, 500);
	}
</script>

<section id="blog" class="blog-section" style="font-family: 'Roboto', sans-serif; background-color: #EDE9E5; padding-top: 112px; padding-bottom: 80px;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		
		<!-- Header with icon -->
		<div class="text-center mb-16">
			<div class="flex justify-center" style="margin-bottom: 16px;">
				<Shovel size="63" color="#721C17" />
			</div>
			<h2 class="font-bold mb-4" style="font-family: 'Roboto Slab', serif; color: #721C17; font-size: 48px;">
				{m['blog.title']()}
			</h2>
			<p class="text-lg mb-2" style="font-family: 'Roboto', sans-serif; color: #721C17;">
				{m['blog.subtitle']()}
			</p>
			<p class="text-base text-black max-w-4xl mx-auto leading-relaxed" style="font-family: 'Roboto', sans-serif;">
				{m['blog.description']()}
			</p>
		</div>

		<!-- Scrollable cards container -->
		<div class="mb-8 -mx-4 sm:-mx-6 lg:-mx-8">
			<!-- Scrollable cards -->
			<div 
				bind:this={scrollContainer}
				class="flex gap-6 overflow-x-auto pb-4 scrollbar-hide px-4 sm:px-6 lg:px-8"
				style="scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;"
				onscroll={updateScrollButtons}
			>
				{#each blogPosts as post}
					<article class="flex-none bg-white shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col" style="scroll-snap-align: start; width: 390px; height: 629px; padding: 24px;">
						<!-- Image -->
						<div class="overflow-hidden" style="height: 300px; width: 100%;">
							<img src={post.image} alt={post.title} class="w-full h-full object-cover" />
						</div>
						
						<div class="flex flex-col flex-1" style="margin-top: 24px;">
							<!-- Category badge -->
							<div class="mb-3">
								<span class="text-white text-xs px-3 py-1 {post.categoryColor}" style="font-family: 'Roboto', sans-serif;">
									{post.category}
								</span>
							</div>
							
					<!-- Title -->
					<h3 class="text-xl font-semibold text-black mb-3 leading-tight" style="font-family: 'Roboto', sans-serif;">
						<a href={getBlogUrl(post.slug)} class="hover:text-red-600 transition-colors">
							{post.title}
						</a>
					</h3>
							
							<!-- Excerpt -->
							<p class="text-black leading-relaxed mb-6 text-sm flex-1" style="font-family: 'Roboto', sans-serif;">
								{post.excerpt}
							</p>
							
							<!-- Author and meta info - always at bottom -->
							<div class="flex items-start space-x-3 mt-auto" style="font-family: 'Roboto', sans-serif;">
								{#if post.authorImage}
									<img src={post.authorImage} alt={post.author} class="rounded-full flex-shrink-0 object-cover" style="width: 48px; height: 48px;" />
								{:else}
									<div class="bg-gray-400 rounded-full flex-shrink-0" style="width: 48px; height: 48px;"></div>
								{/if}
								<div class="flex-1 flex flex-col justify-between" style="height: 48px;">
									<div class="font-bold text-black" style="font-size: 14px;">{post.author}</div>
									<div class="text-black flex items-center space-x-2" style="font-size: 14px;">
										<span>{formatDate(post.date)}</span>
										<span>•</span>
										<span>{post.readTime}</span>
									</div>
								</div>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>

		<!-- Navigation buttons moved below -->
		<div class="flex justify-end space-x-3">
			<button 
				onclick={scrollLeft}
				class="bg-white rounded-full p-3 shadow-md transition-shadow {canScrollLeft ? 'hover:shadow-lg' : 'opacity-50 cursor-not-allowed'}"
				disabled={!canScrollLeft}
			>
				<ArrowLeft size="20" color={canScrollLeft ? "#666" : "#ccc"} />
			</button>
			
			<button 
				onclick={scrollRight}
				class="bg-white rounded-full p-3 shadow-md transition-shadow {canScrollRight ? 'hover:shadow-lg' : 'opacity-50 cursor-not-allowed'}"
				disabled={!canScrollRight}
			>
				<ArrowRight size="20" color={canScrollRight ? "#666" : "#ccc"} />
			</button>
		</div>

	</div>
</section>

<style>
	.blog-section {
		background-image: url('/images/bg-blog.png');
		background-size: 1312px;
		background-position: center top;
		background-repeat: no-repeat;
	}
	
	/* Schovat pozadí na mobilech */
	@media (max-width: 768px) {
		.blog-section {
			background-image: none;
		}
	}
	
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
</style>
