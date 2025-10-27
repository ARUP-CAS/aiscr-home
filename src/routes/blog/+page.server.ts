import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getLocale } from '$lib/paraglide/runtime';

export const load: PageServerLoad = async () => {
	try {
		const locale = getLocale();
		
		// Načtení všech blog postů z content/blog adresáře
		const allModules = import.meta.glob('/src/content/blog/*.md', { eager: true });
		
		const posts = Object.entries(allModules)
			.map(([path, module]) => {
				const { metadata } = module as any;
				
				return {
					slug: metadata.slug,
					title: metadata.title || 'Bez názvu',
					excerpt: metadata.excerpt || '',
					date: metadata.date || new Date().toISOString().split('T')[0],
					category: metadata.category || '',
					published: metadata.published !== false,
					locale: metadata.locale || 'cs'
				};
			})
			.filter(post => post.published && post.locale === locale)
			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

		return {
			posts
		};
	} catch (err) {
		console.error('Error loading blog posts:', err);
		throw error(500, 'Chyba při načítání blog postů');
	}
};
