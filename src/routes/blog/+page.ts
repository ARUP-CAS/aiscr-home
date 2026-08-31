import { fetchNews, toListPost, localeFromPathname } from '$lib/feed';
import type { PageLoad } from './$types';

// Seznam článků ze sdíleného newsfeedu. Při buildu se stránka prerenderuje
// s aktuálním obsahem feedu, v prohlížeči se navíc obnovuje za běhu
// (viz +page.svelte), takže nové články se objeví bez rebuildu webu.
export const load: PageLoad = async ({ fetch, url }) => {
	const locale = localeFromPathname(url.pathname);
	const items = await fetchNews(fetch, locale);

	return { posts: items.map(toListPost) };
};
