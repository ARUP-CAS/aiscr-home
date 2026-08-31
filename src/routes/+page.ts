import { fetchNews, localeFromPathname } from '$lib/feed';
import type { PageLoad } from './$types';

// Novinky pro sekci Blog na homepage — ze sdíleného newsfeedu
export const load: PageLoad = async ({ fetch, url }) => {
	return { news: await fetchNews(fetch, localeFromPathname(url.pathname)) };
};
