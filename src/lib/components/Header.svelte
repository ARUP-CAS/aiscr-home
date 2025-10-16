<script lang="ts">
	// Header komponenta pro navigaci
	import { Menu, Facebook, Linkedin, Youtube, Github } from '@lucide/svelte';
	
	let mobileMenuOpen = $state(false);
</script>

<header class="bg-black" style="height: 120px;">
	<div class="mx-auto px-4 sm:px-6 lg:px-8 h-full" style="max-width: 1312px;">
		<div class="flex justify-between items-center h-full">
			<!-- Logo -->
			<a href="/" class="flex items-center">
				<img src="/Logo AIS kratke.svg" alt="AIS CR Logo" style="height: 60px;" />
			</a>
			
			<!-- Menu a ikony zarovnané doprava -->
			<div class="hidden lg:flex items-center">
				<!-- Navigační menu -->
				<nav class="flex items-center" style="gap: 32px;">
					<a href="#services" class="text-white hover:text-gray-300 transition-colors" style="font-size: 16px;">Služby</a>
					<a href="/blog" class="text-white hover:text-gray-300 transition-colors" style="font-size: 16px;">Blog</a>
					<a href="#faq" class="text-white hover:text-gray-300 transition-colors" style="font-size: 16px;">Časté dotazy</a>
					<a href="#terms" class="text-white hover:text-gray-300 transition-colors" style="font-size: 16px;">Využití</a>
					<a href="#about" class="text-white hover:text-gray-300 transition-colors" style="font-size: 16px;">O nás</a>
					<a href="#contact" class="text-white hover:text-gray-300 transition-colors" style="font-size: 16px;">Kontakt</a>
				</nav>

				<!-- Sociální ikony -->
				<div class="flex items-center ml-8" style="gap: 12px;">
					<a href="https://facebook.com" class="text-white hover:text-gray-300 transition-colors" aria-label="Facebook">
						<Facebook size="20" />
					</a>
					<a href="https://linkedin.com" class="text-white hover:text-gray-300 transition-colors" aria-label="LinkedIn">
						<Linkedin size="20" />
					</a>
					<a href="https://youtube.com" class="text-white hover:text-gray-300 transition-colors" aria-label="YouTube">
						<Youtube size="20" />
					</a>
					<a href="https://bsky.app" class="text-white hover:text-gray-300 transition-colors" aria-label="Bluesky">
						<svg width="20" height="20" viewBox="0 0 600 530" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"/>
						</svg>
					</a>
					<a href="https://github.com" class="text-white hover:text-gray-300 transition-colors" aria-label="GitHub">
						<Github size="20" />
					</a>
				</div>
			</div>

			<!-- Mobile menu button -->
			<div class="lg:hidden">
				<button 
					type="button" 
					class="text-white hover:text-gray-300 transition-colors" 
					aria-label="Otevřít menu"
					onclick={() => mobileMenuOpen = !mobileMenuOpen}
				>
					<Menu size="24" />
				</button>
			</div>
		</div>

		<!-- Mobile menu -->
		{#if mobileMenuOpen}
			<div class="lg:hidden border-t border-gray-800">
				<div class="px-2 pt-2 pb-3 space-y-1">
					<a href="#services" class="block px-3 py-2 text-white hover:text-gray-300 font-medium" style="font-size: 16px;">Služby</a>
					<a href="/blog" class="block px-3 py-2 text-white hover:text-gray-300 font-medium" style="font-size: 16px;">Blog</a>
					<a href="#faq" class="block px-3 py-2 text-white hover:text-gray-300 font-medium" style="font-size: 16px;">Časté dotazy</a>
					<a href="#terms" class="block px-3 py-2 text-white hover:text-gray-300 font-medium" style="font-size: 16px;">Využití</a>
					<a href="#about" class="block px-3 py-2 text-white hover:text-gray-300 font-medium" style="font-size: 16px;">O nás</a>
					<a href="#contact" class="block px-3 py-2 text-white hover:text-gray-300 font-medium" style="font-size: 16px;">Kontakt</a>
				</div>
				<!-- Mobile social icons -->
				<div class="px-5 py-3 border-t border-gray-800">
					<div class="flex items-center" style="gap: 12px;">
						<a href="https://facebook.com" class="text-white hover:text-gray-300 transition-colors" aria-label="Facebook">
							<Facebook size="20" />
						</a>
						<a href="https://linkedin.com" class="text-white hover:text-gray-300 transition-colors" aria-label="LinkedIn">
							<Linkedin size="20" />
						</a>
						<a href="https://youtube.com" class="text-white hover:text-gray-300 transition-colors" aria-label="YouTube">
							<Youtube size="20" />
						</a>
						<a href="https://bsky.app" class="text-white hover:text-gray-300 transition-colors" aria-label="Bluesky">
							<svg width="20" height="20" viewBox="0 0 600 530" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path d="M135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"/>
							</svg>
						</a>
						<a href="https://github.com" class="text-white hover:text-gray-300 transition-colors" aria-label="GitHub">
							<Github size="20" />
						</a>
					</div>
				</div>
			</div>
		{/if}
	</div>
</header>