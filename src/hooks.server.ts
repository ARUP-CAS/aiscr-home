import type { Handle } from '@sveltejs/kit';

// Simple locale detection from URL for static builds
// Using transformPageChunk to set the lang attribute correctly
export const handle: Handle = async ({ event, resolve }) => {
	const url = new URL(event.request.url);
	const locale = url.pathname.startsWith('/en') ? 'en' : 'cs';

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
	});
};
