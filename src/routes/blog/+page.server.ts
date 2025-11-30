import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		// Načtení všech blog postů z content/blog adresáře (pouze české)
		const allModules = import.meta.glob('/src/content/blog/*.md', { eager: true });
		
	const posts = Object.entries(allModules)
		.map(([_path, module]) => {
			const { metadata } = module as any;
				
				return {
					slug: metadata.slug,
					title: metadata.title || 'Bez názvu',
					excerpt: metadata.excerpt || '',
					date: metadata.date || new Date().toISOString().split('T')[0],
					category: metadata.category || '',
					published: metadata.published !== false
				};
			})
			.filter(post => post.published)
			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

		return {
			posts
		};
	} catch (err) {
		console.error('Error loading blog posts:', err);
		throw error(500, 'Chyba při načítání blog postů');
	}
};
