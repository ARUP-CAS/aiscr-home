<script lang="ts">
	// Rozbalovací sekce "Chcete vědět víc?"
	import { ChevronDown } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages.js';
	
	let expandedItems = $state(new Set());
	let expandedItems2 = $state(new Set());
	
	// Mapování ID na klíče v moreInfo.items
	const infoItemIds = ['amcrMap', 'digitalArchive', 'oaoMap', 'amcrPas', 'library3d', 'amcrApi', 'documentation'];
	const otherComponentIds = ['atlas', 'teater', 'prahaArch', 'arch14cz', 'archeologieOnline', 'thanados', 'github', 'zenodo', 'otherTools'];
	
	function toggleItem(itemId: string) {
		if (expandedItems.has(itemId)) {
			expandedItems.delete(itemId);
		} else {
			expandedItems.add(itemId);
		}
		expandedItems = new Set(expandedItems);
	}
	
	function toggleItem2(itemId: string) {
		if (expandedItems2.has(itemId)) {
			expandedItems2.delete(itemId);
		} else {
			expandedItems2.add(itemId);
		}
		expandedItems2 = new Set(expandedItems2);
	}
</script>

<section class="more-info-section" style="font-family: 'Roboto', sans-serif; background-color: #EEEEEE; padding-top: 34px; padding-bottom: 80px;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		
		<!-- Header -->
		<div class="mb-12">
			<h2 class="font-bold" style="font-family: 'Roboto Slab', serif; color: #C6362E; font-size: 40px;">
				{m['moreInfo.title']()}
			</h2>
			<p class="text-lg text-gray-700" style="font-family: 'Roboto', sans-serif; color: #C6362E;">
				{m['moreInfo.subtitle']()}
			</p>
		</div>

		<!-- Accordion Items -->
		<div class="space-y-0">
			{#each infoItemIds as itemId, index}
				<div style="border-bottom: 1px solid #000000;">
					
					<!-- Header with icon and title for first item -->
					{#if index === 0}
						<div style="background-color: #FFFFFF; padding: 24px; border-bottom: 1px solid #000000;">
							<div class="flex items-start space-x-4">
								<div class="flex items-start justify-center flex-shrink-0">
									<svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clip-path="url(#clip0_10204_8849)">
											<path d="M43.3597 17.3L33.2797 20.2C32.9797 22.84 31.5597 25.18 29.3597 26.64L32.5997 30.12L28.6797 34.1L33.0197 38.14C34.8997 36.24 36.8397 34.08 39.0197 31.4L39.2797 31.08L39.3197 31.02C42.0197 27.62 43.4397 23.52 43.4397 19.18C43.4397 18.54 43.3997 17.92 43.3397 17.28" fill="#721C17"/>
											<path d="M31.5998 6.40012L29.1998 11.5401C31.5398 12.9601 33.1198 15.4001 33.4598 18.1001V18.1601L43.2598 15.3401V15.2801C41.4398 6.52012 33.8598 0.240117 24.8398 0.120117L25.4398 3.66012L31.5998 6.40012Z" fill="#721C17"/>
											<path d="M23.6197 10.04C24.6197 10.04 25.5797 10.2 26.5197 10.52L28.0797 7.16L22.7597 4.8L21.9597 0C15.8197 0.54 10.2997 4.04 7.17969 9.36L16.0197 14.28C17.6397 11.68 20.5197 10.04 23.6397 10.04" fill="#721C17"/>
											<path d="M29.1802 30.66L26.8202 28.14C25.8002 28.54 24.7202 28.74 23.6002 28.74C21.6402 28.74 19.8002 28.12 18.2602 26.98L13.7402 37.5C15.3802 39.22 16.6402 40.38 17.7602 41.42C19.7202 43.22 21.3202 44.7 23.6002 48.02C25.8802 44.7 27.4802 43.22 29.4402 41.42C29.9002 41 30.3602 40.58 30.8802 40.08L25.1602 34.76L29.1602 30.68L29.1802 30.66Z" fill="#721C17"/>
											<path d="M14.6595 18.82C14.6595 17.9 14.7995 17.02 15.0595 16.16L15.0995 16L6.17953 11.04L6.11953 11.2C5.05953 13.6 4.51953 16.16 4.51953 18.84C4.51953 23.2 5.93953 27.3 8.63953 30.7L8.93953 31.06C10.1195 32.52 11.2395 33.82 12.2995 35L16.7595 24.64C15.3795 23.02 14.6395 20.98 14.6395 18.84" fill="#721C17"/>
										</g>
										<defs>
											<clipPath id="clip0_10204_8849">
												<rect width="48" height="48" fill="white"/>
											</clipPath>
										</defs>
									</svg>
								</div>
								<div class="flex-1">
									<h3 class="text-lg font-semibold mb-2" style="font-family: 'Roboto', sans-serif; color: #721C17;">
										{m['moreInfo.amcrSectionTitle']()}
									</h3>
									<p class="text-sm" style="font-family: 'Roboto', sans-serif; color: #721C17;">
										{m['moreInfo.amcrSectionSubtitle']()}
									</p>
								</div>
							</div>
						</div>
					{/if}
					
					<!-- Collapsible header -->
					<button 
						class="w-full text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
						style="padding: 24px; background-color: rgba(255, 255, 255, 0.5); cursor: pointer;"
						onclick={() => toggleItem(itemId)}
					>
						<h3 class="text-base font-medium text-gray-900 pr-4" style="font-family: 'Roboto', sans-serif;">
							{(m as any)[`moreInfo.items.${itemId}.title`]()}
						</h3>
						<ChevronDown 
							size="20" 
							color="#666" 
							class="transform transition-transform flex-shrink-0 {expandedItems.has(itemId) ? 'rotate-180' : ''}"
						/>
					</button>
					
					<!-- Collapsible content -->
					{#if expandedItems.has(itemId)}
						<div style="padding: 0 24px 24px 24px; background-color: rgba(255, 255, 255, 0.5);">
							<div class="space-y-4">
								{#each (m as any)[`moreInfo.items.${itemId}.content`]().split('\n\n') as paragraph}
									{#if paragraph.includes('•')}
										<ul class="list-none space-y-2">
											{#each paragraph.split('\n').filter((line: string) => line.includes('•')) as listItem}
												<li class="flex items-start">
													<span class="text-red-600 mr-2">•</span>
													<span class="text-gray-700" style="font-family: 'Roboto', sans-serif;">
														{listItem.replace('•', '').trim()}
													</span>
												</li>
											{/each}
										</ul>
									{:else if paragraph.trim() && !paragraph.includes(':')}
										<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
											{paragraph.trim()}
										</p>
									{:else if paragraph.includes(':')}
										<h4 class="font-semibold text-gray-900 mt-4 mb-2" style="font-family: 'Roboto', sans-serif;">
											{paragraph.trim()}
										</h4>
									{/if}
								{/each}
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Second Accordion Items -->
		<div class="space-y-0" style="margin-top: 80px;">
			{#each otherComponentIds as itemId, index}
				<div style="border-bottom: 1px solid #000000;">
					
					<!-- Header with icon and title for first item -->
					{#if index === 0}
						<div style="background-color: #FFFFFF; padding: 24px; border-bottom: 1px solid #000000;">
							<div class="flex items-center space-x-4">
								<div class="flex items-center justify-center flex-shrink-0">
									<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clip-path="url(#clip0_9843_6009)">
											<path d="M27.045 6.58511L25.755 8.02511C23.61 6.36011 20.91 5.35511 18 5.35511C16.395 5.35511 14.865 5.65511 13.455 6.19511L11.355 1.26011C13.41 0.435107 15.645 -0.0148926 17.985 -0.0148926C20.835 -0.0148926 23.52 0.645107 25.92 1.83011L23.415 3.61511L27.03 6.57011L27.045 6.58511Z" fill="#721C17"/>
											<path d="M36 17.9999C36 18.8549 35.94 19.7099 35.82 20.5349L30.6 19.0199C30.63 18.6899 30.645 18.3449 30.645 17.9999C30.645 14.4899 29.205 11.2949 26.88 8.99989L29.19 6.40489L25.875 3.70489L27.375 2.63989C32.55 5.80489 36 11.5049 36 17.9999Z" fill="#721C17"/>
											<path d="M6.11998 22.3501C7.57498 26.2951 10.935 29.3251 15.09 30.3001L13.455 35.4151C7.84498 33.9451 3.29998 29.8351 1.22998 24.4951L4.87498 24.9751L6.14998 22.3501H6.11998Z" fill="#721C17"/>
											<path d="M18 30.6449C24.12 30.6449 29.235 26.2799 30.39 20.5049L35.535 22.0049C33.705 30.0149 26.535 35.9999 17.985 35.9999C16.935 35.9999 15.9 35.9099 14.895 35.7299L16.56 30.5699C17.025 30.6299 17.505 30.6599 17.985 30.6599" fill="#721C17"/>
											<path d="M5.35486 18C5.35486 18.735 5.41486 19.455 5.53486 20.145L3.97486 23.355L0.674863 22.92C0.224863 21.36 -0.0151367 19.695 -0.0151367 18C-0.000136719 10.95 4.07986 4.83 10.0049 1.875L12.1049 6.81C8.09986 8.94 5.35486 13.155 5.35486 18Z" fill="#721C17"/>
										</g>
										<defs>
											<clipPath id="clip0_9843_6009">
												<rect width="36" height="36" fill="white"/>
											</clipPath>
										</defs>
									</svg>
								</div>
								<div class="flex-1">
									<h3 class="text-lg font-semibold" style="font-family: 'Roboto', sans-serif; color: #721C17;">
										{m['moreInfo.otherSectionTitle']()}
									</h3>
								</div>
							</div>
						</div>
					{/if}
					
					<!-- Collapsible header -->
					<button 
						class="w-full text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
						style="padding: 24px; background-color: rgba(255, 255, 255, 0.5); cursor: pointer;"
						onclick={() => toggleItem2(itemId)}
					>
						<h3 class="text-base font-medium text-gray-900 pr-4" style="font-family: 'Roboto', sans-serif;">
							{index === 0 ? m['moreInfo.otherSectionSubtitle']() : (m as any)[`moreInfo.items.${itemId}.title`]()}
						</h3>
						<ChevronDown 
							size="20" 
							color="#666" 
							class="transform transition-transform flex-shrink-0 {expandedItems2.has(itemId) ? 'rotate-180' : ''}"
						/>
					</button>
					
					<!-- Collapsible content -->
					{#if expandedItems2.has(itemId)}
						<div style="padding: 0 24px 24px 24px; background-color: rgba(255, 255, 255, 0.5);">
							<div class="space-y-4">
								{#each (m as any)[`moreInfo.items.${itemId}.content`]().split('\n\n') as paragraph}
									{#if paragraph.includes('•')}
										<ul class="list-none space-y-2">
											{#each paragraph.split('\n').filter((line: string) => line.includes('•')) as listItem}
												<li class="flex items-start">
													<span class="text-red-600 mr-2">•</span>
													<span class="text-gray-700" style="font-family: 'Roboto', sans-serif;">
														{listItem.replace('•', '').trim()}
													</span>
												</li>
											{/each}
										</ul>
									{:else if paragraph.trim() && !paragraph.includes(':')}
										<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
											{paragraph.trim()}
										</p>
									{:else if paragraph.includes(':')}
										<h4 class="font-semibold text-gray-900 mt-4 mb-2" style="font-family: 'Roboto', sans-serif;">
											{paragraph.trim()}
										</h4>
									{/if}
								{/each}
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.more-info-section {
		background-image: url('/images/bg-more-info.png');
		background-size: 1312px;
		background-position: center top;
		background-repeat: no-repeat;
	}
</style>
