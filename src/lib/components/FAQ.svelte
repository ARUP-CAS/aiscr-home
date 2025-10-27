<script lang="ts">
	// FAQ sekce - Časté dotazy
	import { BadgeHelp, ChevronDown, MessageSquarePlus } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages.js';
	
	let expandedItems = $state(new Set());
	
	const faqItems = [
		{ id: 'vyzkumy-info', questionKey: 'q1', answerKey: 'a1' },
		{ id: 'amatersky-spolupracovnik', questionKey: 'q2', answerKey: 'a2' },
		{ id: 'uzemi-nalezy', questionKey: 'q3', answerKey: 'a3' },
		{ id: 'uzemi-vyzkum', questionKey: 'q4', answerKey: 'a4' },
		{ id: 'oznameni-stavba', questionKey: 'q5', answerKey: 'a5' },
		{ id: 'stavba-instituce', questionKey: 'q6', answerKey: 'a6' },
		{ id: 'online-prohlidka', questionKey: 'q7', answerKey: 'a7' },
		{ id: 'vyuziti-ais-cr', questionKey: 'q8', answerKey: 'a8' },
		{ id: 'lokality-navstivit', questionKey: 'q9', answerKey: 'a9' },
		{ id: 'co-noveho', questionKey: 'q10', answerKey: 'a10' }
	];
	
	function toggleItem(itemId: string) {
		if (expandedItems.has(itemId)) {
			expandedItems.delete(itemId);
		} else {
			expandedItems.add(itemId);
		}
		expandedItems = new Set(expandedItems);
	}
</script>

<section id="faq" class="faq-section" style="font-family: 'Roboto', sans-serif; background-color: #FFFFFF; padding-top: 128px; padding-bottom: 80px;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		
		<!-- Header with icon -->
		<div class="mb-12">
			<div class="flex items-center mb-4">
				<BadgeHelp size="63" color="#808E98" class="mr-3" />
				<h2 class="font-bold" style="font-family: 'Roboto Slab', serif; color: #808E98; font-size: 40px;">
					{m['faq.title']()}
				</h2>
			</div>
		</div>

		<!-- FAQ Accordion Items -->
		<div class="space-y-0">
			{#each faqItems as item}
				<div style="border-bottom: 1px solid #000000;">
					<!-- Collapsible header -->
					<button 
						class="w-full text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
						style="padding: 24px; background-color: rgba(255, 255, 255, 0.5); cursor: pointer;"
						onclick={() => toggleItem(item.id)}
					>
					<h3 class="text-base font-medium text-gray-900 pr-4" style="font-family: 'Roboto', sans-serif;">
						{(m as any)[`faq.${item.questionKey}`]()}
					</h3>
						<ChevronDown 
							size="20" 
							color="#666" 
							class="transform transition-transform flex-shrink-0 {expandedItems.has(item.id) ? 'rotate-180' : ''}"
						/>
					</button>
					
					<!-- Collapsible content -->
					{#if expandedItems.has(item.id)}
					<div style="padding: 0 24px 24px 24px; background-color: rgba(255, 255, 255, 0.5);">
						<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							{(m as any)[`faq.${item.answerKey}`]()}
						</p>
					</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Contact section -->
		<div class="mt-16">
			<div>
				<MessageSquarePlus size="48" color="#808E98" style="margin-bottom: 16px;" />
				<h3 class="font-bold" style="font-family: 'Roboto', sans-serif; color: #808E98; font-size: 32px; margin-bottom: 16px;">
					{m['faq.moreQuestionsTitle']()}
				</h3>
				<p class="font-bold" style="font-family: 'Roboto', sans-serif; color: #000000; font-size: 18px; margin-bottom: 16px;">
					{@html m['faq.moreQuestionsSubtitle']()}
				</p>
				<div style="font-family: 'Roboto', sans-serif; color: #000000; font-size: 18px;">
					<p style="margin-bottom: 8px;">{m['faq.contactText']()}</p>
					<p>
						{@html m['faq.contactCz']()}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.faq-section {
		background-image: url('/images/bg-faq.png');
		background-size: 1312px;
		background-position: center top;
		background-repeat: no-repeat;
	}
</style>
