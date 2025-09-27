import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		// Načtení všech blog postů a nalezení konkrétního
		const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });
		
		const postPath = `/src/content/blog/${params.slug}.md`;
		const post = modules[postPath];
		
		if (!post) {
			throw error(404, 'Blog post nenalezen');
		}

		const { metadata } = post as any;

		return {
			post: {
				title: metadata.title || 'Bez názvu',
				excerpt: metadata.excerpt || '',
				date: metadata.date || new Date().toISOString().split('T')[0],
				category: metadata.category || '',
				slug: params.slug
			}
		};
	} catch (err) {
		console.error('Error loading blog post:', err);
		throw error(404, 'Blog post nenalezen');
	}
};
