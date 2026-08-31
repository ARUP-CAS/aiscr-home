import { error } from '@sveltejs/kit';
import { fetchNewsItem, fetchNewsSlugs, localeFromPathname } from '$lib/feed';
import type { PageLoad, EntryGenerator } from './$types';

export const load: PageLoad = async ({ params, fetch, url }) => {
	const locale = localeFromPathname(url.pathname);
	const item = await fetchNewsItem(fetch, locale, params.slug);

	if (!item) {
		throw error(404, 'Článek nenalezen');
	}

	return { post: item };
};

// Články známé v době buildu se prerenderují (zpětná kompatibilita URL
// /blog/<slug>/). Články publikované později obslouží SPA fallback
// (404.html) — detail se pak načte z feedu až v prohlížeči.
export const entries: EntryGenerator = async () => {
	const slugs = await fetchNewsSlugs(fetch);
	return slugs.map((slug) => ({ slug }));
};
