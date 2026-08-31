import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			// SPA fallback: články publikované do newsfeedu po posledním buildu
			// nemají vygenerované HTML — hosting pro ně servíruje 404.html,
			// které článek načte z feedu v prohlížeči (viz docs/NEWSFEED.md).
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			relative: true
		},
		prerender: {
			entries: [
				'/',
				'/en',
				'/blog',
				'/en/blog'
				// Detaily článků /blog/<slug> se generují z newsfeedu — viz
				// entries() v src/routes/blog/[slug]/+page.ts; anglické varianty
				// najde crawler z odkazů na /en/blog.
			],
			handleHttpError: 'warn',
			handleMissingId: 'warn'
		}
	},
	extensions: ['.svelte']
};

export default config;
