<script lang="ts">
	// Header komponenta pro navigaci
	import { Menu, Facebook, Linkedin, Youtube, Twitter, Github } from '@lucide/svelte';
	
	let mobileMenuOpen = $state(false);
</script>

<header class="bg-black" style="height: 120px;">
	<div class="mx-auto px-4 sm:px-6 lg:px-8 h-full" style="max-width: 1100px;">
		<div class="flex justify-between items-center h-full">
			<!-- Logo -->
			<div class="flex items-center space-x-3">
				<div class="w-10 h-10 bg-gray-700 rounded-full"></div>
				<div class="text-xl font-semibold text-white tracking-wide">
					AIS CR
				</div>
			</div>
			
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
					<a href="https://twitter.com" class="text-white hover:text-gray-300 transition-colors" aria-label="Twitter/X">
						<Twitter size="20" />
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
						<a href="https://twitter.com" class="text-white hover:text-gray-300 transition-colors" aria-label="Twitter/X">
							<Twitter size="20" />
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