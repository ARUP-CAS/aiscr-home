<script lang="ts">
	// Preview nejnovějších blog postů
	import { Pickaxe, ArrowLeft, ArrowRight } from '@lucide/svelte';
	import { onMount } from 'svelte';
	
	const blogPosts = [
		{
			title: "Nové objevy z doby bronzové",
			excerpt: "Během letošního archeologického výzkumu na Moravě došlo k několika významným objevům z období pozdní doby bronzové. Tyto nálezy přinášejí nové poznatky o životě našich předků...",
			date: "2024-03-15",
			slug: "nove-objevy-doba-bronzova",
			category: "Objevy",
			categoryColor: "bg-purple-600",
			author: "Tom Pavlůn",
			readTime: "5 minut",
			image: "/images/blog/bronze-age.jpg"
		},
		{
			title: "Digitalizace archeologických sbírek",
			excerpt: "V rámci modernizace archeologických informačních systémů byl zahájen ambiciózní projekt digitalizace sbírek. Cílem je zpřístupnit široké veřejnosti i odborníkům tisíce archeologických nálezů...",
			date: "2024-03-10",
			slug: "digitalizace-sbirek",
			category: "Technologie",
			categoryColor: "bg-blue-600",
			author: "Olga Lečbychová",
			readTime: "4 minuty",
			image: "/images/blog/digitalization.jpg"
		},
		{
			title: "Středověké hradiště u Prahy",
			excerpt: "Archeologický výzkum středověkého hradiště v blízkosti Prahy přinesl řadu zajímavých objevů, které osvětlují život v raném středověku...",
			date: "2024-03-05",
			slug: "stredoveke-hradiste",
			category: "Výzkum",
			categoryColor: "bg-green-600",
			author: "David Novák",
			readTime: "6 minut",
			image: "/images/blog/medieval.jpg"
		}
	];

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return date.toLocaleDateString('cs-CZ', {
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
		const cardWidth = 344; // 320px karta + 24px gap
		scrollContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
		setTimeout(updateScrollButtons, 500);
	}

	function scrollRight() {
		if (!canScrollRight || !scrollContainer) return;
		const cardWidth = 344; // 320px karta + 24px gap
		scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
		setTimeout(updateScrollButtons, 500);
	}
</script>

<section class="py-20" style="font-family: 'Roboto', sans-serif; background-color: #EDE9E5;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1100px; margin: 0 auto;">
		
		<!-- Header with icon -->
		<div class="text-center mb-16">
			<div class="flex justify-center mb-6">
				<Pickaxe size="48" color="#C6362E" />
			</div>
			<h2 class="font-bold mb-4" style="font-family: 'Roboto Slab', serif; color: #C6362E; font-size: 40px;">
				Blog AIS CR
			</h2>
			<p class="text-lg mb-2" style="font-family: 'Roboto', sans-serif; color: #C6362E;">
				Archeodata po lopatě – příspěvky o archeologii, datech a světě AIS CR.
			</p>
			<p class="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed" style="font-family: 'Roboto', sans-serif;">
				Blog AIS CR nabízí srozumitelný pohled na archeologická data, nástroje i dění v zákulisí. Pomáhá se zorientovat v zákoutích digitální archeologie, ukazuje tipy z praxe a odpovídá šířeji na otázky, na které jste se chtěli zeptat.
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
					<article class="flex-none w-80 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col" style="scroll-snap-align: start;">
						<!-- Image placeholder -->
						<div class="h-48 bg-gray-300 flex items-center justify-center">
							<div class="w-16 h-16 bg-gray-400 rounded"></div>
						</div>
						
						<div class="p-6 flex flex-col flex-1">
							<!-- Category badge -->
							<div class="mb-3">
								<span class="text-white text-xs px-3 py-1 rounded {post.categoryColor}" style="font-family: 'Roboto', sans-serif;">
									{post.category}
								</span>
							</div>
							
							<!-- Title -->
							<h3 class="text-xl font-semibold text-gray-900 mb-3 leading-tight" style="font-family: 'Roboto', sans-serif;">
								<a href="/blog/{post.slug}" class="hover:text-red-600 transition-colors">
									{post.title}
								</a>
							</h3>
							
							<!-- Excerpt -->
							<p class="text-gray-600 leading-relaxed mb-6 text-sm flex-1" style="font-family: 'Roboto', sans-serif;">
								{post.excerpt}
							</p>
							
							<!-- Author and meta info - always at bottom -->
							<div class="flex items-start space-x-3 mt-auto" style="font-family: 'Roboto', sans-serif;">
								<div class="w-8 h-8 bg-gray-400 rounded-full flex-shrink-0"></div>
								<div class="flex-1">
									<div class="font-medium text-gray-900 text-sm">{post.author}</div>
									<div class="text-xs text-gray-500 flex items-center space-x-2">
										<span>{formatDate(post.date)}</span>
										<span>•</span>
										<span>čas čtení {post.readTime}</span>
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
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
</style>
