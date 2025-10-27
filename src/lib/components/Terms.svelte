<script lang="ts">
	// Podmínky využití AIS CR
	import { ShieldCheck, ClipboardPenLine, ListTodo, BellDot, CreativeCommons, UserLock } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages.js';
	
	// Import image
	import bgTerms from '/images/bg-terms.png';
</script>

<section id="terms" class="py-20 bg-gray-100" style="font-family: 'Roboto', sans-serif;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		
		<!-- Header with shield icon -->
		<div class="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
			<!-- Left column -->
			<div>
				<div class="flex items-start mb-6">
					<ShieldCheck size="63" color="#D97706" class="mr-4 mt-1" />
					<h2 class="font-bold" style="font-family: 'Roboto Slab', serif; color: #D97706; font-size: 48px;">
						{m['terms.title']()}
					</h2>
				</div>
				<p class="text-lg text-gray-700" style="font-family: 'Roboto', sans-serif;">
					{@html m['terms.intro']()}
				</p>
			</div>
			
			<!-- Right column - image -->
			<div>
				<img src={bgTerms} alt="Archeologické nálezy" style="width: 100%; height: auto;" />
			</div>
		</div>

		<!-- Two column layout -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			
			<!-- Left column -->
			<div>
				<h3 class="font-bold" style="font-family: 'Roboto', sans-serif; color: #D97706; font-size: 32px; margin-bottom: 24px;">
					{m['terms.usageTitle']()}
				</h3>
				
				<p class="font-bold text-gray-900" style="font-family: 'Roboto', sans-serif; font-size: 20px; margin-bottom: 32px;">
					{m['terms.usageImportance']()}
				</p>
				
				<div class="space-y-12">
					<!-- Povinnost uvedení ve výstupu -->
					<div class="flex items-start" style="gap: 24px;">
						<ClipboardPenLine size="48" color="#D97706" class="flex-shrink-0" />
						<div>
						<h4 class="font-semibold text-gray-900 mb-3" style="font-family: 'Roboto', sans-serif; font-size: 24px;">
							{m['terms.obligation1Title']()}
						</h4>
						<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
							{@html m['terms.obligation1Text']()}
						</p>
						</div>
					</div>

					<!-- Povinnost uvedení v RIV -->
					<div class="flex items-start" style="gap: 24px;">
						<ListTodo size="48" color="#D97706" class="flex-shrink-0" />
						<div>
							<h4 class="font-semibold text-gray-900 mb-3" style="font-family: 'Roboto', sans-serif; font-size: 24px;">
								{m['terms.obligation2Title']()}
							</h4>
							<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
								{@html m['terms.obligation2Text']()}
							</p>
						</div>
					</div>

					<!-- Upozornění na výstupy -->
					<div class="flex items-start" style="gap: 24px;">
						<BellDot size="48" color="#D97706" class="flex-shrink-0" />
						<div>
						<h4 class="font-semibold text-gray-900 mb-3" style="font-family: 'Roboto', sans-serif; font-size: 24px;">
							{m['terms.obligation3Title']()}
						</h4>
						<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
							{@html m['terms.obligation3Text']()}
						</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Right column -->
			<div>
				<h3 class="font-bold" style="font-family: 'Roboto', sans-serif; color: #D97706; font-size: 32px; margin-bottom: 24px;">
					{m['terms.openAccessTitle']()}
				</h3>
				
			<p class="font-bold text-gray-900" style="font-family: 'Roboto', sans-serif; font-size: 20px; margin-bottom: 32px;">
				{@html m['terms.openAccessIntro']()}
			</p>
				
				<div class="space-y-12">
					<!-- Licence -->
					<div class="flex items-start" style="gap: 24px;">
						<CreativeCommons size="48" color="#D97706" class="flex-shrink-0" />
						<div>
							<h4 class="font-semibold text-gray-900 mb-3" style="font-family: 'Roboto', sans-serif; font-size: 24px;">
								{m['terms.licenseTitle']()}
							</h4>
							<p class="text-gray-700 leading-relaxed mb-4" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
								{@html m['terms.licenseText']()}
							</p>
							<p class="text-sm text-gray-600" style="font-family: 'Roboto', sans-serif;">
								{m['terms.licenseConditions']()}
							</p>
						<ul class="mt-2 space-y-1 text-sm text-gray-600" style="font-family: 'Roboto', sans-serif;">
							<li>• {@html m['terms.licenseCondition1']()}</li>
							<li>• {@html m['terms.licenseCondition2']()}</li>
						</ul>
							<p class="text-sm text-gray-600 mt-4" style="font-family: 'Roboto', sans-serif;">
								{m['terms.licenseExceptions']()}
							</p>
						<ul class="mt-2 space-y-1 text-sm text-gray-600" style="font-family: 'Roboto', sans-serif;">
							<li>• {@html m['terms.licenseException1']()}</li>
							<li>• {@html m['terms.licenseException2']()}</li>
						</ul>
						</div>
					</div>

					<!-- Řízení přístupu -->
					<div class="flex items-start" style="gap: 24px;">
						<UserLock size="48" color="#D97706" class="flex-shrink-0" />
						<div>
							<h4 class="font-semibold text-gray-900 mb-3" style="font-family: 'Roboto', sans-serif; font-size: 24px;">
								{m['terms.accessControlTitle']()}
							</h4>
							<p class="text-gray-700 leading-relaxed mb-4" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
								{m['terms.accessControlIntro']()}
							</p>
							<ul class="space-y-1 text-gray-700" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
								<li>• {m['terms.accessControlLimit1']()}</li>
								<li>• {m['terms.accessControlLimit2']()}</li>
							</ul>
							<p class="text-gray-700 leading-relaxed mt-4" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
								{@html m['terms.accessControlText']()}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
