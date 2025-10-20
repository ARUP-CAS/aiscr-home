<script lang="ts">
	// O nás sekce
	import { Info, History, CloudCheck, FileText, GitPullRequestArrow, QrCode, ListTodo, Users, Link, HandHeart, Earth, Star, Building, UserCheck, GraduationCap, DollarSign, Handshake, Landmark, CircleUser, Brain, PiggyBank } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages.js';
	
	// Import obrázků - Vite automaticky přidá správné cesty
	import aboutImage from '/about-image.png';
	import logoArub from '/logo-arub.png';
	import logoAru from '/logo-aru.png';
	import teamPhoto from '/team.png';
	import olgaPhoto from '/olga.png';
	import davidPhoto from '/david.png';
	import petrPhoto from '/petr.png';
	import ondraPhoto from '/ondra.png';
	import financeImage from '/finance.png';
	import euMsmtLogo from '/eu-msmt.png';
	import ministerstvoKulturyLogo from '/ministerstvo-kultury.png';
	import akademieVedLogo from '/akademie-ved.png';
	import ariadneLogo from '/ariadne.png';
	import lindatLogo from '/lindat.png';
	import npuLogo from '/npu.png';
	import carareLogo from '/carare.png';
	import ntkLogo from '/ntk.png';
	import botanickyUstavLogo from '/botanicky-ustav.png';
	import itamLogo from '/itam.png';
	import prahaLogo from '/praha.png';
	import pernikariLogo from '/pernikari.png';
	import axiellLogo from '/axiell.png';
</script>

<!-- Main About section -->
<section id="about" class="py-20 bg-gray-200" style="font-family: 'Roboto', sans-serif;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
			
			<!-- Left column with text -->
			<div>
				<!-- Header -->
				<div class="flex items-center" style="margin-bottom: 24px;">
					<Info size="63" color="#802376" class="mr-3" />
					<h2 class="font-bold" style="font-family: 'Roboto Slab', serif; color: #802376; font-size: 48px;">
						{m.about_heading()}
					</h2>
				</div>
				
				<p class="font-bold text-gray-900" style="font-family: 'Roboto', sans-serif; font-size: 18px; margin-bottom: 24px;">
					{m.about_intro()}
				</p>
				
				<div style="margin-bottom: 24px;">
					<img src={aboutImage} alt="O AIS CR" style="width: 100%; max-width: 500px; height: auto;" />
				</div>
				
				<!-- Quote -->
				<div class="border-l-4 p-6" style="border-color: #802376;">
					<blockquote class="italic text-lg leading-relaxed" style="font-family: 'Roboto', sans-serif; color: #802376;">
						{m.about_quote()}
					</blockquote>
				</div>

			</div>

			<!-- Right column with features -->
			<div class="space-y-6">
				
				<!-- Feature items -->
				<div class="flex items-start space-x-4">
					<History size="24" color="#802376" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							{@html m.about_feature_1()}
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<CloudCheck size="24" color="#802376" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							{@html m.about_feature_2()}
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<FileText size="24" color="#802376" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							{@html m.about_feature_3()}
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<GitPullRequestArrow size="24" color="#802376" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							{@html m.about_feature_4()}
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<QrCode size="24" color="#802376" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							{@html m.about_feature_5()}
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<ListTodo size="24" color="#802376" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							{@html m.about_feature_6()}
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<Users size="24" color="#802376" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							{@html m.about_feature_7()}
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<Link size="24" color="#802376" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							{@html m.about_feature_8()}
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<HandHeart size="24" color="#802376" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							{@html m.about_feature_9()}
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<Earth size="24" color="#802376" class="mt-1 flex-shrink-0" />
					<div>
						<p class="text-gray-900 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
							{@html m.about_feature_10()}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Why AIS CR is essential section -->
<section class="pt-16 pb-16 bg-gray-200 border-t border-dashed border-gray-400" style="font-family: 'Roboto', sans-serif;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
				
				<!-- Left column - Question and quote -->
				<div>
					<div class="flex items-center space-x-4 mb-6">
						<Star size="36" color="#1B998B" class="flex-shrink-0" />
						<h3 class="font-bold" style="font-family: 'Roboto', sans-serif; color: #1B998B; font-size: 24px;">
							{m.about_why_heading()}
						</h3>
					</div>
					
					<div class="border-l-4 p-4" style="border-color: #1B998B;">
						<blockquote class="italic leading-relaxed" style="font-family: 'Roboto', sans-serif; color: #1B998B;">
							{m.about_why_quote()}
						</blockquote>
					</div>
				</div>

				<!-- Right column - Explanation text -->
				<div>
					<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
						{m.about_why_text()}
					</p>
				</div>
			</div>
	</div>
</section>

<!-- Who creates AIS CR section -->
<section class="pt-16 pb-16 bg-gray-200 border-t border-dashed border-gray-400" style="font-family: 'Roboto', sans-serif;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
				
				<!-- Left column - Question and quote -->
				<div>
					<div class="flex items-center space-x-4 mb-6">
						<Landmark size="36" color="#C6362E" class="flex-shrink-0" />
						<h3 class="font-bold" style="font-family: 'Roboto', sans-serif; color: #C6362E; font-size: 24px;">
							{m.about_who_heading()}
						</h3>
					</div>
					
					<div class="border-l-4 p-4" style="border-color: #C6362E;">
						<blockquote class="italic leading-relaxed" style="font-family: 'Roboto', sans-serif; color: #C6362E;">
							{m.about_who_quote()}
						</blockquote>
					</div>
				</div>

				<!-- Right column - Team description -->
				<div>
					<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif; margin-bottom: 24px;">
						{m.about_who_text()}
					</p>
					
					<div class="flex gap-8 items-center">
						<img src={logoArub} alt="ARÚB" style="max-height: 60px; width: auto;" />
						<img src={logoAru} alt="ARÚ" style="max-height: 60px; width: auto;" />
					</div>
				</div>
			</div>
			
		<!-- Team photo -->
	<div style="margin-top: 48px;">
		<img src={teamPhoto} alt="Tým AIS CR" style="width: 100%; height: auto;" />
	</div>
	</div>
</section>

<!-- Executive Board section -->
<section class="pt-16 pb-16 bg-gray-200 border-t border-dashed border-gray-400" style="font-family: 'Roboto', sans-serif;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
				
				<!-- Left column - Title -->
				<div>
					<div class="flex items-center space-x-4">
						<CircleUser size="36" color="#C6362E" class="flex-shrink-0" />
						<h3 class="font-bold" style="font-family: 'Roboto', sans-serif; color: #C6362E; font-size: 24px;">
							{m.about_executive_heading()}
						</h3>
					</div>
				</div>

				<!-- Right column - Description -->
				<div>
					<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
						{m.about_executive_text()}
					</p>
				</div>
			</div>

			<!-- Executive Board Team members -->
			<div class="flex justify-end" style="gap: 128px; padding-right: 64px;">
			<div class="text-center">
				<img src={olgaPhoto} alt="Olga Lečbychová" class="rounded-full mb-4 object-cover" style="width: 80px; height: 80px;" />
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Olga Lečbychová
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						ARUB
					</p>
				</div>

			<div class="text-center">
				<img src={davidPhoto} alt="David Novák" class="rounded-full mb-4 object-cover" style="width: 80px; height: 80px;" />
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						David Novák
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						ARÚ
					</p>
				</div>

			<div class="text-center">
				<img src={petrPhoto} alt="Petr Pajdla" class="rounded-full mb-4 object-cover" style="width: 80px; height: 80px;" />
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Petr Pajdla
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						ARUB
					</p>
				</div>

			<div class="text-center">
				<img src={ondraPhoto} alt="Ondřej Švejcar" class="rounded-full mb-4 object-cover" style="width: 80px; height: 80px;" />
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Ondřej Švejcar
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						ARÚ
					</p>
				</div>
			</div>
	</div>
</section>

<!-- Scientific Advisory Board section -->
<section class="pt-16 pb-16 bg-gray-200 border-t border-dashed border-gray-400" style="font-family: 'Roboto', sans-serif;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		<div>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
				
				<!-- Left column - Title -->
				<div>
					<div class="flex items-center space-x-4">
						<Brain size="36" color="#C6362E" class="flex-shrink-0" />
						<h3 class="font-bold" style="font-family: 'Roboto', sans-serif; color: #C6362E; font-size: 24px;">
							{m.about_scientific_heading()}
						</h3>
					</div>
				</div>

				<!-- Right column - Description -->
				<div>
					<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
						{m.about_scientific_text()}
					</p>
				</div>
			</div>

			<!-- Scientific Advisory Board members -->
			<div class="flex justify-between gap-4">
				<div class="text-center flex-1">
					<div class="rounded-full mb-4 bg-gray-400 mx-auto" style="width: 80px; height: 80px;"></div>
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Stefan Eichert
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						Naturhistorisches Museum Wien, {m.about_scientific_chair()}
					</p>
				</div>

				<div class="text-center flex-1">
					<div class="rounded-full mb-4 bg-gray-400 mx-auto" style="width: 80px; height: 80px;"></div>
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Cynthia Dunning Thierstein
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						Archaeoconcept
					</p>
				</div>

				<div class="text-center flex-1">
					<div class="rounded-full mb-4 bg-gray-400 mx-auto" style="width: 80px; height: 80px;"></div>
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Johanna Hilpert
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						Universität zu Köln, Philosophische Fakultät, Institut für Ur- und Frühgeschichte
					</p>
				</div>

				<div class="text-center flex-1">
					<div class="rounded-full mb-4 bg-gray-400 mx-auto" style="width: 80px; height: 80px;"></div>
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Axel G. Posluschny
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						Keltenwell am Glauberg
					</p>
				</div>

				<div class="text-center flex-1">
					<div class="rounded-full mb-4 bg-gray-400 mx-auto" style="width: 80px; height: 80px;"></div>
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Pavel Straňák
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						Karlova universita, Matematicko-fyzikální fakulta, Ústav formální a aplikované lingvistiky
					</p>
				</div>

				<div class="text-center flex-1">
					<div class="rounded-full mb-4 bg-gray-400 mx-auto" style="width: 80px; height: 80px;"></div>
					<h4 class="font-semibold text-gray-900 text-sm" style="font-family: 'Roboto', sans-serif;">
						Benjamin Štular
					</h4>
					<p class="text-xs text-gray-600" style="font-family: 'Roboto', sans-serif;">
						Institute of Archaeology of the Slovenian Academy of Sciences and Arts
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Funding Sources section -->
<section class="pt-16 pb-16 bg-gray-200 border-t border-dashed border-gray-400" style="font-family: 'Roboto', sans-serif;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
				
				<!-- Left column - Title -->
				<div>
					<div class="flex items-center space-x-4 mb-6" style="position: relative; z-index: 10;">
						<PiggyBank size="36" color="#802376" class="flex-shrink-0" />
						<h3 class="font-bold" style="font-family: 'Roboto', sans-serif; color: #802376; font-size: 24px;">
							{m.about_funding_heading()}
						</h3>
					</div>
					
					<img src={financeImage} alt="Financování" style="width: 100%; height: auto; margin-top: -64px; position: relative; z-index: 1;" />
				</div>

				<!-- Right column - Funding description -->
				<div class="space-y-6">
					<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
						{@html m.about_funding_intro()}
					</p>

					<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
						{m.about_funding_eu()}
					</p>

					<ul class="space-y-2 text-gray-700" style="font-family: 'Roboto', sans-serif;">
						<li class="flex items-start">
							<span class="text-purple-600 mr-2">•</span>
							<span>{@html m.about_funding_project_1()}</span>
						</li>
						<li class="flex items-start">
							<span class="text-purple-600 mr-2">•</span>
							<span>{@html m.about_funding_project_2()}</span>
						</li>
					</ul>

					<p class="text-gray-700 leading-relaxed mt-6" style="font-family: 'Roboto', sans-serif;">
						{@html m.about_funding_more()}
					</p>
					
					<div style="margin-top: 24px;">
						<img src={euMsmtLogo} alt="EU a MŠMT" style="max-height: 60px; width: auto;" />
					</div>
				</div>
			</div>
	</div>
</section>

<!-- Partners and Data Providers section -->
<section class="pt-16 pb-16 border-t border-dashed border-gray-400" style="font-family: 'Roboto', sans-serif; background-color: #FFFFFF;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		<div>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
				
				<!-- Left column - Title -->
				<div>
					<div class="flex items-center space-x-4">
						<Handshake size="36" color="#721C17" class="flex-shrink-0" />
						<h3 class="font-bold" style="font-family: 'Roboto', sans-serif; color: #721C17; font-size: 24px;">
							{m.about_partners_heading()}
						</h3>
					</div>
				</div>

				<!-- Right column - Description -->
				<div>
					<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
						{@html m.about_partners_text()}
					</p>
				</div>
			</div>

			<!-- Partners intro -->
			<div class="mb-8">
				<p class="font-medium" style="font-family: 'Roboto', sans-serif; color: #721C17;">
					{m.about_partners_intro()}
				</p>
			</div>

			<!-- Partner logos grid -->
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
			<div class="flex items-center justify-center">
				<img src={ministerstvoKulturyLogo} alt="Ministerstvo kultury" style="max-height: 80px; width: auto;" />
			</div>

			<div class="flex items-center justify-center">
				<img src={akademieVedLogo} alt="Akademie věd ČR" style="max-height: 80px; width: auto;" />
			</div>

			<div class="flex items-center justify-center">
				<img src={ariadneLogo} alt="ARIADNE" style="max-height: 80px; width: auto;" />
			</div>

			<div class="flex items-center justify-center">
				<img src={lindatLogo} alt="LINDAT" style="max-height: 80px; width: auto;" />
			</div>

			<div class="flex items-center justify-center">
				<img src={npuLogo} alt="Národní památkový ústav" style="max-height: 80px; width: auto;" />
			</div>

			<div class="flex items-center justify-center">
				<img src={carareLogo} alt="CARARE" style="max-height: 80px; width: auto;" />
			</div>
		</div>

		<!-- Second row of partner logos -->
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mt-8">
			<div class="flex items-center justify-center">
				<img src={ntkLogo} alt="NTK" style="max-height: 80px; width: auto;" />
			</div>

			<div class="flex items-center justify-center">
				<img src={botanickyUstavLogo} alt="Botanický ústav" style="max-height: 80px; width: auto;" />
			</div>

			<div class="flex items-center justify-center">
				<img src={itamLogo} alt="ITAM" style="max-height: 80px; width: auto;" />
			</div>

			<div class="flex items-center justify-center">
				<img src={prahaLogo} alt="Praha" style="max-height: 80px; width: auto;" />
			</div>

			<div class="flex items-center justify-center">
				<img src={pernikariLogo} alt="Pernikáři" style="max-height: 80px; width: auto;" />
			</div>

			<div class="flex items-center justify-center">
				<img src={axiellLogo} alt="Axiell" style="max-height: 80px; width: auto;" />
			</div>
		</div>
		</div>
	</div>
</section>
