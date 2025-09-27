<script lang="ts">
	// Podmínky využití AIS CR
	import { Shield, Edit, Calendar, Bell, CreditCard, Gavel } from '@lucide/svelte';
</script>

<section id="terms" class="py-20 bg-gray-100" style="font-family: 'Roboto', sans-serif;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1100px; margin: 0 auto;">
		
		<!-- Header with shield icon -->
		<div class="mb-16">
			<div class="flex items-center mb-6">
				<Shield size="48" color="#D97706" class="mr-4" />
				<h2 class="font-bold" style="font-family: 'Roboto Slab', serif; color: #D97706; font-size: 40px;">
					Podmínky využití AIS CR
				</h2>
			</div>
			<p class="text-lg text-gray-700 max-w-4xl" style="font-family: 'Roboto', sans-serif;">
				Nástroje AIS CR jsou dostupné bezplatně a otevřeně všem za splnění těchto základních podmínek vyplývajících ze zákona (zejména §32, odst. 4, 
				<a href="#" class="underline text-gray-900">zákona č. 130/2002 Sb., o podpoře výzkumu a vývoje</a>).
			</p>
		</div>

		<!-- Two column layout -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
			
			<!-- Left column -->
			<div>
				<h3 class="font-bold text-2xl mb-8" style="font-family: 'Roboto', sans-serif; color: #D97706;">
					Využití AIS CR ve výstupech
				</h3>
				
				<div class="space-y-8">
					<!-- Povinnost uvedení ve výstupu -->
					<div class="flex items-start space-x-4">
						<Edit size="24" color="#D97706" class="mt-1 flex-shrink-0" />
						<div>
							<h4 class="font-semibold text-gray-900 mb-3" style="font-family: 'Roboto', sans-serif;">
								Povinnost uvedení ve výstupu
							</h4>
							<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
								Uživatelé a uživatelky jsou povinni obvyklým způsobem uvést využití infrastruktury AIS CR ve svých výstupech, a to vždy s konkrétním odkazem na použitá data nebo nástroje.
							</p>
						</div>
					</div>

					<!-- Povinnost uvedení v RIV -->
					<div class="flex items-start space-x-4">
						<Calendar size="24" color="#D97706" class="mt-1 flex-shrink-0" />
						<div>
							<h4 class="font-semibold text-gray-900 mb-3" style="font-family: 'Roboto', sans-serif;">
								Povinnost uvedení v RIV
							</h4>
							<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
								Při zadávání výstupů do Rejstříku informací o výsledcích (RIV) je při využití AIS CR povinná v poli VVI (Velké výzkumné infrastruktury) - místa infrastruktury AIS CR tj. vybrat z 
								<a href="#" class="underline text-gray-900">Číselníku velkých výzkumných infrastruktur</a> položku "AIS CR" s nejvyšším pořadovým číslem označeným římskou číslicí (např. "AIS CR III").
							</p>
						</div>
					</div>

					<!-- Upozornění na výstupy -->
					<div class="flex items-start space-x-4">
						<Bell size="24" color="#D97706" class="mt-1 flex-shrink-0" />
						<div>
							<h4 class="font-semibold text-gray-900 mb-3" style="font-family: 'Roboto', sans-serif;">
								Upozornění na výstupy
							</h4>
							<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
								Budeme velmi vděčni, pokud nás o publikovaném výstupu informujete i prostřednictvím tohoto krátkoho formuláře. Tím nám významně pomůžete s naplňováním povinností vykázování výsledků.
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Right column -->
			<div>
				<h3 class="font-bold text-2xl mb-8" style="font-family: 'Roboto', sans-serif; color: #D97706;">
					Otevřený přístup k datům
				</h3>
				
				<div class="space-y-8">
					<!-- Licence -->
					<div class="flex items-start space-x-4">
						<CreditCard size="24" color="#D97706" class="mt-1 flex-shrink-0" />
						<div>
							<h4 class="font-semibold text-gray-900 mb-3" style="font-family: 'Roboto', sans-serif;">
								Licence
							</h4>
							<p class="text-gray-700 leading-relaxed mb-4" style="font-family: 'Roboto', sans-serif;">
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
					<div class="flex items-start space-x-4">
						<Gavel size="24" color="#D97706" class="mt-1 flex-shrink-0" />
						<div>
							<h4 class="font-semibold text-gray-900 mb-3" style="font-family: 'Roboto', sans-serif;">
								Řízení přístupu
							</h4>
							<p class="text-gray-700 leading-relaxed mb-4" style="font-family: 'Roboto', sans-serif;">
								Otevřenost dat je obecně omezena pouze:
							</p>
							<ul class="space-y-1 text-gray-700" style="font-family: 'Roboto', sans-serif;">
								<li>• zákonnými limity (např. autorská práva, ochrana osobních údajů);</li>
								<li>• potřebami ochrany archeologického dědictví v krajině.</li>
							</ul>
							<p class="text-gray-700 leading-relaxed mt-4" style="font-family: 'Roboto', sans-serif;">
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
