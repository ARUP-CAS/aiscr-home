<script lang="ts">
	// Footer komponenta
	import { MapPin, User, Globe, Mail, Facebook, Linkedin, Youtube, Github, CircleUser, Compass, MailOpen } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/paraglide/runtime';
	
	// Props pro callback na otevření cookie banneru
	let { onOpenCookies } = $props<{ onOpenCookies: () => void }>();
	
	const locale = getLocale();
	const isEnglish = locale === 'en';
</script>

<footer id="contact" class="footer-section py-16 border-t border-black" style="font-family: 'Roboto', sans-serif; background-color: #e5e7eb;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		
		<!-- Main content -->
		<div class="mb-12">
			<h2 class="text-2xl font-bold text-black mb-8" style="font-family: 'Roboto', sans-serif;">
				{m['footer.title']()}
			</h2>

		<!-- Contact information grid -->
		<div class="flex flex-wrap gap-12">
				
				<!-- Prague office -->
				<div>
					<h3 class="text-black mb-4" style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: normal;">
						{m['footer.pragueOffice']()}
					</h3>
					
					<div class="space-y-3">
						<div class="flex items-start space-x-3">
							<CircleUser size="24" color="#000000" class="mt-1 flex-shrink-0" />
							<div>
								<p class="text-sm text-black" style="font-family: 'Roboto', sans-serif;">{m['footer.responsiblePerson']()}</p>
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
						<a href="https://www.arup.cas.cz" target="_blank" rel="noopener noreferrer" class="text-sm text-black hover:text-gray-700 underline" style="font-family: 'Roboto', sans-serif;">
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
						{m['footer.brnoOffice']()}
					</h3>
					
					<div class="space-y-3">
						<div class="flex items-start space-x-3">
							<CircleUser size="24" color="#000000" class="mt-1 flex-shrink-0" />
							<div>
								<p class="text-sm text-black" style="font-family: 'Roboto', sans-serif;">{m['footer.responsiblePerson']()}</p>
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
						<a href="https://www.arub.cz" target="_blank" rel="noopener noreferrer" class="text-sm text-black hover:text-gray-700 underline" style="font-family: 'Roboto', sans-serif;">
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
				<span>{m['footer.rorRegistered']()}</span>
				<a href="https://ror.org/01a7rqj69" target="_blank" rel="noopener noreferrer" class="ml-2 hover:opacity-80 transition-opacity">
					<img src="/images/logos/ror-logo_BW.png" alt="ROR - Research Organization Registry" style="max-height: 24px; width: auto;" />
				</a>
			</div>
		</div>

		<!-- Partner logos -->
		<div class="mb-12">
			<div class="flex flex-wrap gap-8 items-center">
				<a href="/" class="hover:opacity-80 transition-opacity flex items-center">
					<img src="/images/logos/{isEnglish ? 'ais-cr-black-en.png' : 'ais-cr-black.png'}" alt="Archeologický informační systém" style="height: {isEnglish ? '42px' : '48px'}; width: auto;" />
				</a>
				<a href="https://www.arub.cz" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity flex items-center">
					<img src="/images/logos/{isEnglish ? 'logo-arub-en.png' : 'logo-arub.png'}" alt="ARUB" style="height: {isEnglish ? '36px' : '48px'}; width: auto;" />
				</a>
				<a href="https://www.arup.cas.cz" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity flex items-center">
					<img src="/images/logos/{isEnglish ? 'logo-aru-en.png' : 'logo-aru.png'}" alt="Archeologický ústav AV ČR Praha" style="height: {isEnglish ? '42px' : '48px'}; width: auto;" />
				</a>
				<a href="https://www.avcr.cz" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity flex items-center">
					<img src="/images/logos/{isEnglish ? 'akademie-ved-black-en.png' : 'akademie-ved-black.png'}" alt="Akademie věd České republiky" style="height: {isEnglish ? '36px' : '48px'}; width: auto;" />
				</a>
				<a href="https://www.vyzkumne-infrastruktury.cz" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity flex items-center">
					<img src="/images/logos/{isEnglish ? 'infra-black-en.png' : 'infra-black.png'}" alt="Velké výzkumné infrastruktury" style="height: {isEnglish ? '36px' : '48px'}; width: auto;" />
				</a>
			</div>
		</div>

		<!-- Bottom section -->
		<div class="border-t border-gray-400 pt-8">
			<div class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
				
			<!-- Copyright and links -->
			<div class="flex flex-wrap items-center space-x-6 text-sm text-black" style="font-family: 'Roboto', sans-serif;">
				<span>{@html m['footer.copyright']()}</span>
				<a href="https://amcr-help.aiscr.cz/zakladni-info/osobni-udaje.html" class="hover:text-gray-700 underline" target="_blank" rel="noopener noreferrer">{m['footer.privacyPolicy']()}</a>
				<a href="/#terms" class="hover:text-gray-700 underline">{m['footer.termsOfUse']()}</a>
				<button onclick={onOpenCookies} class="hover:text-gray-700 underline">{m['footer.cookiePolicy']()}</button>
				<span>{m['footer.designBy']()}</span>
			</div>

				<!-- Social icons -->
				<div class="flex items-center space-x-4">
					<a href="https://www.facebook.com/ArcheologickyInformacniSystem" target="_blank" rel="noopener noreferrer" class="text-black hover:text-gray-700 transition-colors" aria-label={m['aria.facebook']()}>
						<Facebook size="20" />
					</a>
					<a href="https://cz.linkedin.com/company/ais-cr" target="_blank" rel="noopener noreferrer" class="text-black hover:text-gray-700 transition-colors" aria-label={m['aria.linkedin']()}>
						<Linkedin size="20" />
					</a>
					<a href="https://www.youtube.com/@aiscr253" target="_blank" rel="noopener noreferrer" class="text-black hover:text-gray-700 transition-colors" aria-label={m['aria.youtube']()}>
						<Youtube size="20" />
					</a>
					<a href="https://bsky.app/profile/aiscr.bsky.social" target="_blank" rel="noopener noreferrer" class="text-black hover:text-gray-700 transition-colors" aria-label={m['aria.bluesky']()}>
						<svg width="20" height="20" viewBox="0 0 600 530" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"/>
						</svg>
					</a>
					<a href="https://github.com/ARUP-CAS" target="_blank" rel="noopener noreferrer" class="text-black hover:text-gray-700 transition-colors" aria-label={m['aria.github']()}>
						<Github size="20" />
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer-section {
		position: relative;
	}
	
	.footer-section::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url('/images/bg-footer.png');
		background-size: 1312px;
		background-position: center top;
		background-repeat: no-repeat;
		opacity: 0.5;
		pointer-events: none;
		z-index: 0;
	}
	
	.footer-section > div {
		position: relative;
		z-index: 1;
	}
</style>
