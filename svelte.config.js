import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(), 
		mdsvex({
			extensions: ['.md', '.svx']
		})
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
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
				'/en/blog',
				// Blog posts - explicitly list them for both locales
				'/blog/blog-aiscr-vic-nez-aktuality',
				'/blog/doi-v-amcr-digitalni-rodne-cislo',
				'/blog/atrium-3d-summer-school-brno',
				'/blog/prehled-vyzkumu-a-amcr-propojeni-clanku-a-oborove-evidende',
				'/en/blog/blog-aiscr-vic-nez-aktuality',
				'/en/blog/doi-v-amcr-digitalni-rodne-cislo',
				'/en/blog/atrium-3d-summer-school-brno',
				'/en/blog/prehled-vyzkumu-a-amcr-propojeni-clanku-a-oborove-evidende',
			],
			handleHttpError: 'warn',
			handleMissingId: 'warn'
		}
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
