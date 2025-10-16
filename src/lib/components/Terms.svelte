<script lang="ts">
	// Podmínky využití AIS CR
	import { ShieldCheck, ClipboardPenLine, ListTodo, BellDot, CreativeCommons, UserLock } from '@lucide/svelte';
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
						Podmínky využití AIS&nbsp;CR
					</h2>
				</div>
				<p class="text-lg text-gray-700" style="font-family: 'Roboto', sans-serif;">
					<strong>Nástroje AIS CR jsou dostupné bezplatně a otevřeně všem za splnění těchto základních podmínek vyplývajících ze zákona</strong> (zejména §32, odst. 4, 
					<a href="#" class="underline text-gray-900">zákona č. 130/2002 Sb., o podpoře výzkumu a vývoje</a>).
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
					Využití AIS CR ve výstupech
				</h3>
				
				<p class="font-bold text-gray-900" style="font-family: 'Roboto', sans-serif; font-size: 20px; margin-bottom: 32px;">
					Tyto informace jsou zásadní pro vykazování výsledků činnosti infrastruktury AIS CR vůči poskytovatelům finanční podpory.
				</p>
				
				<div class="space-y-12">
					<!-- Povinnost uvedení ve výstupu -->
					<div class="flex items-start" style="gap: 24px;">
						<ClipboardPenLine size="48" color="#D97706" class="flex-shrink-0" />
						<div>
							<h4 class="font-semibold text-gray-900 mb-3" style="font-family: 'Roboto', sans-serif; font-size: 24px;">
								Povinnost uvedení ve výstupu
							</h4>
							<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
								Uživatelé a uživatelky jsou povinni obvyklým způsobem uvést využití infrastruktury AIS CR ve svých výstupech, a to vždy s konkrétním odkazem na použitá data nebo nástroje.
							</p>
						</div>
					</div>

					<!-- Povinnost uvedení v RIV -->
					<div class="flex items-start" style="gap: 24px;">
						<ListTodo size="48" color="#D97706" class="flex-shrink-0" />
						<div>
							<h4 class="font-semibold text-gray-900 mb-3" style="font-family: 'Roboto', sans-serif; font-size: 24px;">
								Povinnost uvedení v RIV
							</h4>
							<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
								Při zadávání výstupů do Rejstříku informací o výsledcích (RIV) je při využití AIS CR povinná v poli VVI (Velké výzkumné infrastruktury) - místa infrastruktury AIS CR tj. vybrat z 
								<a href="#" class="underline text-gray-900">Číselníku velkých výzkumných infrastruktur</a> položku "AIS CR" s nejvyšším pořadovým číslem označeným římskou číslicí (např. "AIS CR III").
							</p>
						</div>
					</div>

					<!-- Upozornění na výstupy -->
					<div class="flex items-start" style="gap: 24px;">
						<BellDot size="48" color="#D97706" class="flex-shrink-0" />
						<div>
							<h4 class="font-semibold text-gray-900 mb-3" style="font-family: 'Roboto', sans-serif; font-size: 24px;">
								Upozornění na výstupy
							</h4>
							<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
								Budeme velmi vděčni, pokud nás o publikovaném výstupu informujete i prostřednictvím tohoto krátkoho formuláře. Tím nám významně pomůžete s naplňováním povinností vykázování výsledků.
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Right column -->
			<div>
				<h3 class="font-bold" style="font-family: 'Roboto', sans-serif; color: #D97706; font-size: 32px; margin-bottom: 24px;">
					Otevřený přístup k datům
				</h3>
				
				<p class="font-bold text-gray-900" style="font-family: 'Roboto', sans-serif; font-size: 20px; margin-bottom: 32px;">
					Data zpřístupněná v nástrojích AIS CR jsou zveřejňována v souladu s politikou otevřeného přístupu v maximálním možném rozsahu.
				</p>
				
				<div class="space-y-12">
					<!-- Licence -->
					<div class="flex items-start" style="gap: 24px;">
						<CreativeCommons size="48" color="#D97706" class="flex-shrink-0" />
						<div>
							<h4 class="font-semibold text-gray-900 mb-3" style="font-family: 'Roboto', sans-serif; font-size: 24px;">
								Licence
							</h4>
							<p class="text-gray-700 leading-relaxed mb-4" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
								Pokud není uvedeno jinak, data a obsah webových stránek AIS CR jsou poskytována pod licencí 
								<a href="#" class="underline text-gray-900 font-medium">CC BY-NC 4.0</a> (Creative Commons Uveďte původ – Neužívejte komerčně 4.0 Mezinárodní).
							</p>
							<p class="text-sm text-gray-600" style="font-family: 'Roboto', sans-serif;">
								Znamená to, že je lze libovolně využívat za předpokladu:
							</p>
							<ul class="mt-2 space-y-1 text-sm text-gray-600" style="font-family: 'Roboto', sans-serif;">
								<li>• uvedení odkazu na zdroj podle doporučeného postupu;</li>
								<li>• pouze pro nekomerční účely.</li>
							</ul>
							<p class="text-sm text-gray-600 mt-4" style="font-family: 'Roboto', sans-serif;">
								Výjimku z této licence tvoří:
							</p>
							<ul class="mt-2 space-y-1 text-sm text-gray-600" style="font-family: 'Roboto', sans-serif;">
								<li>• materiály, které jsou volným dílem;</li>
								<li>• případy, které spadají pod výjimky nebo omezení autorského práva.</li>
							</ul>
						</div>
					</div>

					<!-- Řízení přístupu -->
					<div class="flex items-start" style="gap: 24px;">
						<UserLock size="48" color="#D97706" class="flex-shrink-0" />
						<div>
							<h4 class="font-semibold text-gray-900 mb-3" style="font-family: 'Roboto', sans-serif; font-size: 24px;">
								Řízení přístupu
							</h4>
							<p class="text-gray-700 leading-relaxed mb-4" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
								Otevřenost dat je obecně omezena pouze:
							</p>
							<ul class="space-y-1 text-gray-700" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
								<li>• zákonnými limity (např. autorská práva, ochrana osobních údajů);</li>
								<li>• potřebami ochrany archeologického dědictví v krajině.</li>
							</ul>
							<p class="text-gray-700 leading-relaxed mt-4" style="font-family: 'Roboto', sans-serif; font-size: 18px;">
								Z těchto důvodů je k některým částem AIS CR vyžadován přístup prostřednictvím 
								<a href="#" class="underline text-gray-900">uživatelského účtu AMČR</a> s přidělením 
								<a href="#" class="underline text-gray-900">uživatelské role</a>.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
