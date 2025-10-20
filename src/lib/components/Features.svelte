<script lang="ts">
	// Sekce s funkcemi a možnostmi
	import { Users, FlaskConical, Database } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages.js';
	
	const features = [
		{
			title: m.features_infrastructure_title,
			description: m.features_infrastructure_desc,
			icon: Users
		},
		{
			title: m.features_science_title,
			description: m.features_science_desc,
			icon: FlaskConical
		},
		{
			title: m.features_data_title,
			description: m.features_data_desc,
			icon: Database
		}
	];
</script>

<section class="bg-white" style="font-family: 'Roboto', sans-serif; padding: 24px 0 48px 0;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		<div class="text-center mb-16">
			<h2 class="font-bold text-gray-900 mb-4" style="font-family: 'Roboto', sans-serif; font-size: 24px; max-width: 800px; margin: 0 auto;">
				{m.features_heading()}
			</h2>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
			{#each features as feature}
				<div class="flex flex-col" style="gap: 16px; max-width: 400px;">
					<div class="flex-shrink-0" style="width: 48px; height: 48px;">
						<svelte:component this={feature.icon} size="48" color="#000000" />
					</div>
					<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif; font-size: 16px;">
						{@html feature.description()}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
