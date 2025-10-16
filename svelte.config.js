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
			base: process.env.NODE_ENV === 'production' ? '/aiscr-home' : ''
		},
		prerender: {
			handleMissingId: 'ignore',
			handleUnseenRoutes: 'ignore',
			handleHttpError: 'ignore'
		}
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
