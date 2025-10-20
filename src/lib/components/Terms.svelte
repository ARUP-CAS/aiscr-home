<script lang="ts">
	// Podmínky využití AIS CR
	import { ShieldCheck, ClipboardPenLine, ListTodo, BellDot, CreativeCommons, UserLock } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages.js';
	import termsImage from '/terms-image.png';
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
						{m.terms_heading()}
					</h2>
				</div>
				<p class="text-lg text-gray-700" style="font-family: 'Roboto', sans-serif;">
					{@html m.terms_intro()}
				</p>
			</div>
			
			<!-- Right column - image -->
			<div>
				<img src={termsImage} alt="Archeologické nálezy" style="width: 100%; height: auto;" />
			</div>
		</div>

		<!-- Two column layout -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			
			<!-- Left column -->
			<div>
				<h3 class="font-bold" style="font-family: 'Roboto', sans-serif; color: #D97706; font-size: 32px; margin-bottom: 24px;">
					{m.terms_use_heading()}
				</h3>
				
				<p class="font-bold text-gray-900" style="font-family: 'Roboto', sans-serif; font-size: 20px; margin-bottom: 32px;">
					{m.terms_use_intro()}
				</p>
				
				<div class="space-y-12">
					<!-- Povinnost uvedení ve výstupu -->
					<div class="flex items-start" style="gap: 24px;">
						<ClipboardPenLine size="48" color="#D97706" class="flex-shrink-0" />
						<div>
							<h4 class="font-semibold text-gray-900 mb-3" style="font-family: 'Roboto', sans-serif; font-size: 24px;">
								{m.terms_obligation_title()}
							</h4>
							<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
								{m.terms_obligation_desc()}
							</p>
						</div>
					</div>

					<!-- Povinnost uvedení v RIV -->
					<div class="flex items-start" style="gap: 24px;">
						<ListTodo size="48" color="#D97706" class="flex-shrink-0" />
						<div>
							<h4 class="font-semibold text-gray-900 mb-3" style="font-family: 'Roboto', sans-serif; font-size: 24px;">
								{m.terms_riv_title()}
							</h4>
							<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
								{@html m.terms_riv_desc()}
							</p>
						</div>
					</div>

					<!-- Upozornění na výstupy -->
					<div class="flex items-start" style="gap: 24px;">
						<BellDot size="48" color="#D97706" class="flex-shrink-0" />
						<div>
							<h4 class="font-semibold text-gray-900 mb-3" style="font-family: 'Roboto', sans-serif; font-size: 24px;">
								{m.terms_notification_title()}
							</h4>
							<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
								{m.terms_notification_desc()}
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Right column -->
			<div>
				<h3 class="font-bold" style="font-family: 'Roboto', sans-serif; color: #D97706; font-size: 32px; margin-bottom: 24px;">
					{m.terms_open_heading()}
				</h3>
				
				<p class="font-bold text-gray-900" style="font-family: 'Roboto', sans-serif; font-size: 20px; margin-bottom: 32px;">
					{m.terms_open_intro()}
				</p>
				
				<div class="space-y-12">
					<!-- Licence -->
					<div class="flex items-start" style="gap: 24px;">
						<CreativeCommons size="48" color="#D97706" class="flex-shrink-0" />
						<div>
							<h4 class="font-semibold text-gray-900 mb-3" style="font-family: 'Roboto', sans-serif; font-size: 24px;">
								{m.terms_license_title()}
							</h4>
							<p class="text-gray-700 leading-relaxed mb-4" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
								{@html m.terms_license_desc()}
							</p>
							<p class="text-sm text-gray-600" style="font-family: 'Roboto', sans-serif;">
								{m.terms_license_means()}
							</p>
							<ul class="mt-2 space-y-1 text-sm text-gray-600" style="font-family: 'Roboto', sans-serif;">
								<li>• {m.terms_license_attribution()}</li>
								<li>• {m.terms_license_noncommercial()}</li>
							</ul>
							<p class="text-sm text-gray-600 mt-4" style="font-family: 'Roboto', sans-serif;">
								{m.terms_license_exceptions()}
							</p>
							<ul class="mt-2 space-y-1 text-sm text-gray-600" style="font-family: 'Roboto', sans-serif;">
								<li>• {m.terms_license_public_domain()}</li>
								<li>• {m.terms_license_fair_use()}</li>
							</ul>
						</div>
					</div>

					<!-- Řízení přístupu -->
					<div class="flex items-start" style="gap: 24px;">
						<UserLock size="48" color="#D97706" class="flex-shrink-0" />
						<div>
							<h4 class="font-semibold text-gray-900 mb-3" style="font-family: 'Roboto', sans-serif; font-size: 24px;">
								{m.terms_access_title()}
							</h4>
							<p class="text-gray-700 leading-relaxed mb-4" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
								{m.terms_access_desc()}
							</p>
							<ul class="space-y-1 text-gray-700" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
								<li>• {m.terms_access_legal()}</li>
								<li>• {m.terms_access_protection()}</li>
							</ul>
							<p class="text-gray-700 leading-relaxed mt-4" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
								{@html m.terms_access_account()}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
