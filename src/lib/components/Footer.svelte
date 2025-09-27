<script lang="ts">
	// Footer komponenta
	import { MapPin, User, Globe, Mail, Facebook, Linkedin, Youtube, Twitter, Github } from '@lucide/svelte';
</script>

<footer id="contact" class="bg-gray-200 py-16" style="font-family: 'Roboto', sans-serif;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1100px; margin: 0 auto;">
		
		<!-- Main content -->
		<div class="mb-12">
			<h2 class="text-2xl font-bold text-gray-900 mb-8" style="font-family: 'Roboto', sans-serif;">
				Kontakty
			</h2>

			<!-- Contact information grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
				
				<!-- Prague office -->
				<div>
					<h3 class="font-semibold text-gray-900 mb-4" style="font-family: 'Roboto', sans-serif;">
						Archeologický ústav AV ČR, Praha, v. v. i.
					</h3>
					
					<div class="space-y-3">
						<div class="flex items-start space-x-3">
							<User size="16" color="#666" class="mt-1 flex-shrink-0" />
							<div>
								<p class="text-sm text-gray-700" style="font-family: 'Roboto', sans-serif;">Odpovědná osoba:</p>
								<p class="text-sm font-medium text-gray-900" style="font-family: 'Roboto', sans-serif;">Mgr. David Novák, Ph.D.</p>
							</div>
						</div>

						<div class="flex items-start space-x-3">
							<MapPin size="16" color="#666" class="mt-1 flex-shrink-0" />
							<div>
								<p class="text-sm text-gray-700" style="font-family: 'Roboto', sans-serif;">
									Letenská 123/4,<br>
									118 00 Malá Strana, Praha
								</p>
							</div>
						</div>

						<div class="flex items-start space-x-3">
							<Globe size="16" color="#666" class="mt-1 flex-shrink-0" />
							<a href="https://www.arup.cas.cz" class="text-sm text-gray-700 hover:text-gray-900 underline" style="font-family: 'Roboto', sans-serif;">
								www.arup.cas.cz
							</a>
						</div>

						<div class="flex items-start space-x-3">
							<Mail size="16" color="#666" class="mt-1 flex-shrink-0" />
							<a href="mailto:amcr@arup.cas.cz" class="text-sm text-gray-700 hover:text-gray-900 underline" style="font-family: 'Roboto', sans-serif;">
								amcr@arup.cas.cz
							</a>
						</div>
					</div>
				</div>

				<!-- Brno office -->
				<div>
					<h3 class="font-semibold text-gray-900 mb-4" style="font-family: 'Roboto', sans-serif;">
						Archeologický ústav AV ČR, Brno, v. v. i.
					</h3>
					
					<div class="space-y-3">
						<div class="flex items-start space-x-3">
							<User size="16" color="#666" class="mt-1 flex-shrink-0" />
							<div>
								<p class="text-sm text-gray-700" style="font-family: 'Roboto', sans-serif;">Odpovědná osoba:</p>
								<p class="text-sm font-medium text-gray-900" style="font-family: 'Roboto', sans-serif;">Mgr. Olga Lečbychová</p>
							</div>
						</div>

						<div class="flex items-start space-x-3">
							<MapPin size="16" color="#666" class="mt-1 flex-shrink-0" />
							<div>
								<p class="text-sm text-gray-700" style="font-family: 'Roboto', sans-serif;">
									Čechyňská 363/19,<br>
									602 00 Brno
								</p>
							</div>
						</div>

						<div class="flex items-start space-x-3">
							<Globe size="16" color="#666" class="mt-1 flex-shrink-0" />
							<a href="https://www.arub.cz" class="text-sm text-gray-700 hover:text-gray-900 underline" style="font-family: 'Roboto', sans-serif;">
								www.arub.cz
							</a>
						</div>

						<div class="flex items-start space-x-3">
							<Mail size="16" color="#666" class="mt-1 flex-shrink-0" />
							<a href="mailto:amcr@arub.cz" class="text-sm text-gray-700 hover:text-gray-900 underline" style="font-family: 'Roboto', sans-serif;">
								amcr@arub.cz
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- ROR registration -->
		<div class="mb-12">
			<p class="text-sm text-gray-700 border-t border-dashed border-gray-400 pt-8" style="font-family: 'Roboto', sans-serif;">
				AIS CR je registrován v <strong>ROR</strong>
			</p>
		</div>

		<!-- Partner logos -->
		<div class="mb-12">
			<div class="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
				<div class="flex items-center justify-center h-16">
					<div class="w-full h-12 bg-gray-400 rounded flex items-center justify-center">
						<span class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">Archeologický informační systém</span>
					</div>
				</div>

				<div class="flex items-center justify-center h-16">
					<div class="w-full h-12 bg-gray-400 rounded flex items-center justify-center">
						<span class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">ARUB</span>
					</div>
				</div>

				<div class="flex items-center justify-center h-16">
					<div class="w-full h-12 bg-gray-400 rounded flex items-center justify-center">
						<span class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">Archeologický ústav AV ČR Praha</span>
					</div>
				</div>

				<div class="flex items-center justify-center h-16">
					<div class="w-full h-12 bg-gray-400 rounded flex items-center justify-center">
						<span class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">Akademie věd České republiky</span>
					</div>
				</div>

				<div class="flex items-center justify-center h-16">
					<div class="w-full h-12 bg-gray-400 rounded flex items-center justify-center">
						<span class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">Velké výzkumné infrastruktury</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Bottom section -->
		<div class="border-t border-gray-400 pt-8">
			<div class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
				
				<!-- Copyright and links -->
				<div class="flex flex-wrap items-center space-x-6 text-sm text-gray-700" style="font-family: 'Roboto', sans-serif;">
					<span>&copy; 2025 AIS CR</span>
					<a href="#" class="hover:text-gray-900 underline">Zásady ochrany osobních údajů</a>
					<a href="#" class="hover:text-gray-900 underline">Podmínky užití</a>
					<a href="#" class="hover:text-gray-900 underline">Užívání cookies</a>
					<span>design by Milan Filip</span>
				</div>

				<!-- Social icons -->
				<div class="flex items-center space-x-4">
					<a href="https://facebook.com" class="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Facebook">
						<Facebook size="20" />
					</a>
					<a href="https://linkedin.com" class="text-gray-600 hover:text-gray-900 transition-colors" aria-label="LinkedIn">
						<Linkedin size="20" />
					</a>
					<a href="https://youtube.com" class="text-gray-600 hover:text-gray-900 transition-colors" aria-label="YouTube">
						<Youtube size="20" />
					</a>
					<a href="https://twitter.com" class="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Twitter/X">
						<Twitter size="20" />
					</a>
					<a href="https://github.com" class="text-gray-600 hover:text-gray-900 transition-colors" aria-label="GitHub">
						<Github size="20" />
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
