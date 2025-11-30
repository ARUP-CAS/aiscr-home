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
		prerender: {
			entries: [
				'/',
				'/en',
				'/blog',
				'/en/blog',
				// Blog posts - explicitly list them for both locales
				'/blog/digitalizace-sbirek',
				'/blog/nove-objevy-doba-bronzova',
				'/blog/stredoveke-hradiste',
				'/en/blog/digitalizace-sbirek',
				'/en/blog/nove-objevy-doba-bronzova',
				'/en/blog/stredoveke-hradiste',
			],
			handleHttpError: 'warn',
			handleMissingId: 'warn'
		}
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
