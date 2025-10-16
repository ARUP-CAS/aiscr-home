<script lang="ts">
	// Footer komponenta
	import { MapPin, User, Globe, Mail, Facebook, Linkedin, Youtube, Github, CircleUser, Compass, MailOpen } from '@lucide/svelte';
	
	// Import obrázků
	import rorLogo from '/ror-logo_BW.png';
	import aisCrLogo from '/ais-cr-black.png';
	import logoArub from '/logo-arub.png';
	import logoAru from '/logo-aru.png';
	import akademieVedLogo from '/akademie-ved-black.png';
	import infraLogo from '/infra-black.png';
</script>

<footer id="contact" class="bg-gray-200 py-16 border-t border-black" style="font-family: 'Roboto', sans-serif;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		
		<!-- Main content -->
		<div class="mb-12">
			<h2 class="text-2xl font-bold text-black mb-8" style="font-family: 'Roboto', sans-serif;">
				Kontakty
			</h2>

		<!-- Contact information grid -->
		<div class="flex flex-wrap gap-12">
				
				<!-- Prague office -->
				<div>
					<h3 class="text-black mb-4" style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: normal;">
						Archeologický ústav AV ČR, Praha, v. v. i.
					</h3>
					
					<div class="space-y-3">
						<div class="flex items-start space-x-3">
							<CircleUser size="24" color="#000000" class="mt-1 flex-shrink-0" />
							<div>
								<p class="text-sm text-black" style="font-family: 'Roboto', sans-serif;">Odpovědná osoba:</p>
								<p class="text-sm font-medium text-black" style="font-family: 'Roboto', sans-serif;">Mgr. David Novák, Ph.D.</p>
							</div>
						</div>

						<div class="flex items-start space-x-3">
							<MapPin size="24" color="#000000" class="mt-1 flex-shrink-0" />
							<div>
								<p class="text-sm text-black" style="font-family: 'Roboto', sans-serif;">
									Letenská 123/4,<br>
									118 00 Malá Strana, Praha
								</p>
							</div>
						</div>

						<div class="flex items-start space-x-3">
							<Compass size="24" color="#000000" class="mt-1 flex-shrink-0" />
							<a href="https://www.arup.cas.cz" class="text-sm text-black hover:text-gray-700 underline" style="font-family: 'Roboto', sans-serif;">
								www.arup.cas.cz
							</a>
						</div>

					<div class="flex items-start space-x-3">
						<MailOpen size="24" color="#000000" class="mt-1 flex-shrink-0" />
						<a href="mailto:amcr@arup.cas.cz" class="text-sm text-black hover:text-gray-700 underline" style="font-family: 'Roboto', sans-serif;">
							amcr@arup.cas.cz
						</a>
					</div>
					</div>
				</div>

				<!-- Brno office -->
				<div>
					<h3 class="text-black mb-4" style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: normal;">
						Archeologický ústav AV ČR, Brno, v. v. i.
					</h3>
					
					<div class="space-y-3">
						<div class="flex items-start space-x-3">
							<CircleUser size="24" color="#000000" class="mt-1 flex-shrink-0" />
							<div>
								<p class="text-sm text-black" style="font-family: 'Roboto', sans-serif;">Odpovědná osoba:</p>
								<p class="text-sm font-medium text-black" style="font-family: 'Roboto', sans-serif;">Mgr. Olga Lečbychová</p>
							</div>
						</div>

						<div class="flex items-start space-x-3">
							<MapPin size="24" color="#000000" class="mt-1 flex-shrink-0" />
							<div>
								<p class="text-sm text-black" style="font-family: 'Roboto', sans-serif;">
									Čechyňská 363/19,<br>
									602 00 Brno
								</p>
							</div>
						</div>

						<div class="flex items-start space-x-3">
							<Compass size="24" color="#000000" class="mt-1 flex-shrink-0" />
							<a href="https://www.arub.cz" class="text-sm text-black hover:text-gray-700 underline" style="font-family: 'Roboto', sans-serif;">
								www.arub.cz
							</a>
						</div>

						<div class="flex items-start space-x-3">
							<MailOpen size="24" color="#000000" class="mt-1 flex-shrink-0" />
							<a href="mailto:amcr@arub.cz" class="text-sm text-black hover:text-gray-700 underline" style="font-family: 'Roboto', sans-serif;">
								amcr@arub.cz
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- ROR registration -->
		<div class="mb-12">
			<div class="text-sm text-black border-t border-dashed border-gray-400 pt-8 flex items-center" style="font-family: 'Roboto', sans-serif;">
				<span>AIS CR je registrován v</span>
				<img src={rorLogo} alt="ROR" class="ml-2" style="max-height: 24px; width: auto;" />
			</div>
		</div>

		<!-- Partner logos -->
		<div class="mb-12">
		<div class="flex flex-wrap gap-8 items-center">
			<img src={aisCrLogo} alt="Archeologický informační systém" style="max-height: 48px; width: auto;" />
			<img src={logoArub} alt="ARUB" style="max-height: 48px; width: auto;" />
			<img src={logoAru} alt="Archeologický ústav AV ČR Praha" style="max-height: 48px; width: auto;" />
			<img src={akademieVedLogo} alt="Akademie věd České republiky" style="max-height: 48px; width: auto;" />
			<img src={infraLogo} alt="Velké výzkumné infrastruktury" style="max-height: 48px; width: auto;" />
		</div>
		</div>

		<!-- Bottom section -->
		<div class="border-t border-gray-400 pt-8">
			<div class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
				
				<!-- Copyright and links -->
				<div class="flex flex-wrap items-center space-x-6 text-sm text-black" style="font-family: 'Roboto', sans-serif;">
					<span>&copy; 2025 AIS CR</span>
					<a href="#" class="hover:text-gray-700 underline">Zásady ochrany osobních údajů</a>
					<a href="#" class="hover:text-gray-700 underline">Podmínky užití</a>
					<a href="#" class="hover:text-gray-700 underline">Užívání cookies</a>
					<span>design by Milan Filip</span>
				</div>

				<!-- Social icons -->
				<div class="flex items-center space-x-4">
					<a href="https://facebook.com" class="text-black hover:text-gray-700 transition-colors" aria-label="Facebook">
						<Facebook size="20" />
					</a>
					<a href="https://linkedin.com" class="text-black hover:text-gray-700 transition-colors" aria-label="LinkedIn">
						<Linkedin size="20" />
					</a>
					<a href="https://youtube.com" class="text-black hover:text-gray-700 transition-colors" aria-label="YouTube">
						<Youtube size="20" />
					</a>
					<a href="https://bsky.app" class="text-black hover:text-gray-700 transition-colors" aria-label="Bluesky">
						<svg width="20" height="20" viewBox="0 0 600 530" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"/>
						</svg>
					</a>
					<a href="https://github.com" class="text-black hover:text-gray-700 transition-colors" aria-label="GitHub">
						<Github size="20" />
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
