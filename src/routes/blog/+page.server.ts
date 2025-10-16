import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		// Načtení všech blog postů z routes/blog adresáře
		const modules = import.meta.glob('/src/routes/blog/**/+page.svx', { eager: true });
		
		const posts = Object.entries(modules).map(([path, module]) => {
			const pathParts = path.split('/');
			const slug = pathParts[pathParts.length - 2]; // Získá název složky
			const { metadata } = module as any;
			
			return {
				slug,
				title: metadata.title || 'Bez názvu',
				excerpt: metadata.excerpt || '',
				date: metadata.date || new Date().toISOString().split('T')[0],
				category: metadata.category || '',
				published: metadata.published !== false
			};
		}).filter(post => post.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

		return {
			posts
		};
	} catch (err) {
		console.error('Error loading blog posts:', err);
		throw error(500, 'Chyba při načítání blog postů');
	}
};
