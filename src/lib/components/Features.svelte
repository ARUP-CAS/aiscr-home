<script lang="ts">
	// Sekce s funkcemi a možnostmi
	import { Users, FlaskConical, Database } from '@lucide/svelte';
	
	const features = [
		{
			title: "Otevřená výzkumná infrastruktura",
			description: "Otevřená výzkumná infrastruktura, která slouží vědecké obci, studentstvu, orgánům památkové péče a veřejné správy i zvídavé veřejnosti.",
			icon: Users
		},
		{
			title: "Kvalitní věda a výzkum",
			description: "Podporuje kvalitní vědu a výzkum – umožňuje vyhledávat, sdílet i analyzovat informace z archeologických výzkumů napříč časem i prostorem.",
			icon: FlaskConical
		},
		{
			title: "Archeologická data",
			description: "Shromažďuje, integruje a dlouhodobě uchovává archeologická data, neopakovatelnou součást archeologického dědictví České republiky.",
			icon: Database
		}
	];
</script>

<section class="py-20 bg-white" style="font-family: 'Roboto', sans-serif;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1100px; margin: 0 auto;">
		<div class="text-center mb-16">
			<h2 class="text-3xl font-bold text-gray-900 mb-4" style="font-family: 'Roboto', sans-serif; max-width: 800px; margin: 0 auto;">
				AIS CR nabízí jednotné a přehledné digitální prostředí pro archeologická data z České republiky
			</h2>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
			{#each features as feature}
				<div class="text-center">
					<div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
						<svelte:component this={feature.icon} size="48" color="#000000" />
					</div>
					<h3 class="text-lg font-semibold text-gray-900 mb-4" style="font-family: 'Roboto', sans-serif;">
						{feature.title}
					</h3>
					<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
						{feature.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
