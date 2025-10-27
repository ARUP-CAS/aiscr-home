<script lang="ts">
	// Header komponenta pro navigaci
	import { Menu, Facebook, Linkedin, Youtube, Github, Globe } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { setLocale, getLocale } from '$lib/paraglide/runtime';

	let mobileMenuOpen = $state(false);
	let currentLocale = $state(getLocale());
	
	function toggleLocale() {
		const newLocale = currentLocale === 'cs' ? 'en' : 'cs';
		setLocale(newLocale);
		currentLocale = newLocale;
	}
</script>

<header class="bg-black fixed top-0 left-0 right-0 z-50" style="height: 120px;">
	<div class="mx-auto px-4 sm:px-6 lg:px-8 h-full" style="max-width: 1312px;">
		<div class="flex justify-between items-center h-full">
			<!-- Logo -->
			<a href="/" class="flex items-center">
				<img src="/images/logos/Logo AIS kratke.svg" alt="AIS CR Logo" style="height: 60px;" />
			</a>
			
			<!-- Menu a ikony zarovnané doprava -->
			<div class="hidden lg:flex items-center">
				<!-- Navigační menu -->
				<nav class="flex items-center" style="gap: 32px;">
					<a href="#services" class="text-white hover:text-gray-300 transition-colors" style="font-size: 16px;">{m['nav.services']()}</a>
					<a href="/blog" class="text-white hover:text-gray-300 transition-colors" style="font-size: 16px;">{m['nav.blog']()}</a>
					<a href="#faq" class="text-white hover:text-gray-300 transition-colors" style="font-size: 16px;">{m['nav.faq']()}</a>
					<a href="#terms" class="text-white hover:text-gray-300 transition-colors" style="font-size: 16px;">{m['nav.terms']()}</a>
					<a href="#about" class="text-white hover:text-gray-300 transition-colors" style="font-size: 16px;">{m['nav.about']()}</a>
					<a href="#contact" class="text-white hover:text-gray-300 transition-colors" style="font-size: 16px;">{m['nav.contact']()}</a>
				</nav>

				<!-- Language switcher -->
				<button 
					onclick={toggleLocale}
					class="flex items-center ml-8 mr-4 px-3 py-1 text-white hover:text-gray-300 transition-colors border border-white/30 rounded"
					style="gap: 6px;"
				>
					<Globe size="16" />
					<span class="text-sm font-medium uppercase">{currentLocale}</span>
				</button>
				
				<!-- Sociální ikony -->
				<div class="flex items-center" style="gap: 12px;">
					<a href="https://www.facebook.com/ArcheologickyInformacniSystem" class="text-white hover:text-gray-300 transition-colors" aria-label={m['aria.facebook']()}>
						<Facebook size="20" />
					</a>
					<a href="https://cz.linkedin.com/company/ais-cr" class="text-white hover:text-gray-300 transition-colors" aria-label={m['aria.linkedin']()}>
						<Linkedin size="20" />
					</a>
					<a href="https://www.youtube.com/@aiscr253" class="text-white hover:text-gray-300 transition-colors" aria-label={m['aria.youtube']()}>
						<Youtube size="20" />
					</a>
					<a href="https://bsky.app/profile/aiscr.bsky.social" class="text-white hover:text-gray-300 transition-colors" aria-label={m['aria.bluesky']()}>
						<svg width="20" height="20" viewBox="0 0 600 530" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"/>
						</svg>
					</a>
					<a href="https://github.com/ARUP-CAS" class="text-white hover:text-gray-300 transition-colors" aria-label={m['aria.github']()}>
						<Github size="20" />
					</a>
				</div>
			</div>

			<!-- Mobile menu button and language switcher -->
			<div class="lg:hidden flex items-center" style="gap: 12px;">
				<button 
					onclick={toggleLocale}
					class="flex items-center px-2 py-1 text-white hover:text-gray-300 transition-colors border border-white/30 rounded"
					style="gap: 4px;"
				>
					<Globe size="16" />
					<span class="text-xs font-medium uppercase">{currentLocale}</span>
				</button>
				
				<button
					type="button"
					class="text-white hover:text-gray-300 transition-colors"
					aria-label={m['nav.openMenu']()}
					onclick={() => mobileMenuOpen = !mobileMenuOpen}
				>
					<Menu size="24" />
				</button>
			</div>
		</div>

		<!-- Mobile menu -->
		{#if mobileMenuOpen}
			<div class="lg:hidden border-t border-gray-800 bg-black">
				<div class="px-2 pt-2 pb-3 space-y-1">
					<a href="#services" class="block px-3 py-2 text-white hover:text-gray-300 font-medium" style="font-size: 16px;">{m['nav.services']()}</a>
					<a href="/blog" class="block px-3 py-2 text-white hover:text-gray-300 font-medium" style="font-size: 16px;">{m['nav.blog']()}</a>
					<a href="#faq" class="block px-3 py-2 text-white hover:text-gray-300 font-medium" style="font-size: 16px;">{m['nav.faq']()}</a>
					<a href="#terms" class="block px-3 py-2 text-white hover:text-gray-300 font-medium" style="font-size: 16px;">{m['nav.terms']()}</a>
					<a href="#about" class="block px-3 py-2 text-white hover:text-gray-300 font-medium" style="font-size: 16px;">{m['nav.about']()}</a>
					<a href="#contact" class="block px-3 py-2 text-white hover:text-gray-300 font-medium" style="font-size: 16px;">{m['nav.contact']()}</a>
				</div>
				<!-- Mobile social icons -->
				<div class="px-5 py-3 border-t border-gray-800">
					<div class="flex items-center" style="gap: 12px;">
						<a href="https://www.facebook.com/ArcheologickyInformacniSystem" class="text-white hover:text-gray-300 transition-colors" aria-label={m['aria.facebook']()}>
							<Facebook size="20" />
						</a>
						<a href="https://cz.linkedin.com/company/ais-cr" class="text-white hover:text-gray-300 transition-colors" aria-label={m['aria.linkedin']()}>
							<Linkedin size="20" />
						</a>
						<a href="https://www.youtube.com/@aiscr253" class="text-white hover:text-gray-300 transition-colors" aria-label={m['aria.youtube']()}>
							<Youtube size="20" />
						</a>
						<a href="https://bsky.app/profile/aiscr.bsky.social" class="text-white hover:text-gray-300 transition-colors" aria-label={m['aria.bluesky']()}>
							<svg width="20" height="20" viewBox="0 0 600 530" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path d="M135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"/>
							</svg>
						</a>
						<a href="https://github.com/ARUP-CAS" class="text-white hover:text-gray-300 transition-colors" aria-label={m['aria.github']()}>
							<Github size="20" />
						</a>
					</div>
				</div>
			</div>
		{/if}
	</div>
</header>