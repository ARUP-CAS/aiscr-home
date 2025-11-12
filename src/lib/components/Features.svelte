<script lang="ts">
	// Sekce s funkcemi a možnostmi
	import { Users, FlaskConical, Database } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages.js';
	
	const features = [
		{
			key: 'openInfrastructure',
			icon: Users
		},
		{
			key: 'qualityScience',
			icon: FlaskConical
		},
		{
			key: 'archaeologicalData',
			icon: Database
		}
	];
</script>

<section class="bg-white" style="font-family: 'Roboto', sans-serif; padding: 24px 0 48px 0;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		<div class="text-center mb-16">
			<h2 class="font-bold text-black mb-4" style="font-family: 'Roboto', sans-serif; font-size: 24px; max-width: 800px; margin: 0 auto;">
				{m['features.title']()}
			</h2>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
			{#each features as feature}
				<div class="flex flex-col" style="gap: 16px; max-width: 400px;">
					<div class="flex-shrink-0" style="width: 48px; height: 48px;">
						<svelte:component this={feature.icon} size="48" color="#000000" />
					</div>
				<p class="text-black leading-relaxed" style="font-family: 'Roboto', sans-serif; font-size: 16px;">
					{@html (m as any)[`features.${feature.key}.description`]()}
				</p>
				</div>
			{/each}
		</div>
	</div>
</section>
