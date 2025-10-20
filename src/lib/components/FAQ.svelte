<script lang="ts">
	// FAQ sekce - Časté dotazy
	import { BadgeHelp, ChevronDown, MessageSquarePlus } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages.js';
	
	let expandedItems = $state(new Set());
	
	const faqItems = [
		{ id: 'q1', question: m.faq_q1, answer: m.faq_a1 },
		{ id: 'q2', question: m.faq_q2, answer: m.faq_a2 },
		{ id: 'q3', question: m.faq_q3, answer: m.faq_a3 },
		{ id: 'q4', question: m.faq_q4, answer: m.faq_a4 },
		{ id: 'q5', question: m.faq_q5, answer: m.faq_a5 },
		{ id: 'q6', question: m.faq_q6, answer: m.faq_a6 },
		{ id: 'q7', question: m.faq_q7, answer: m.faq_a7 },
		{ id: 'q8', question: m.faq_q8, answer: m.faq_a8 },
		{ id: 'q9', question: m.faq_q9, answer: m.faq_a9 },
		{ id: 'q10', question: m.faq_q10, answer: m.faq_a10 }
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

<section id="faq" style="font-family: 'Roboto', sans-serif; background-color: #FFFFFF; padding-top: 128px; padding-bottom: 80px;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		
		<!-- Header with icon -->
		<div class="mb-12">
			<div class="flex items-center mb-4">
				<BadgeHelp size="63" color="#808E98" class="mr-3" />
				<h2 class="font-bold" style="font-family: 'Roboto Slab', serif; color: #808E98; font-size: 40px;">
					{m.faq_heading()}
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
							{item.question()}
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
								{item.answer()}
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
					{m.faq_question_more()}
				</h3>
				<p class="font-bold" style="font-family: 'Roboto', sans-serif; color: #000000; font-size: 18px; margin-bottom: 16px;">
					{@html m.faq_not_found()}
				</p>
				<div style="font-family: 'Roboto', sans-serif; color: #000000; font-size: 18px;">
					<p style="margin-bottom: 8px;">{m.faq_contact_intro()}</p>
					<p>
						{@html m.faq_contact_bohemia()}<br>
						{@html m.faq_contact_moravia()}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
