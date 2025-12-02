import { setLocale } from '$lib/paraglide/runtime';
import type { LayoutLoad } from './$types';

// Enable prerender for static build
export const prerender = true;

// Always use trailing slash (generates /en/index.html instead of en.html)
export const trailingSlash = 'always';

// Initialize locale from URL during SSR/prerender
export const load: LayoutLoad = async ({ url }) => {
	const locale = url.pathname.startsWith('/en') ? 'en' : 'cs';
	setLocale(locale);
	return {};
};
