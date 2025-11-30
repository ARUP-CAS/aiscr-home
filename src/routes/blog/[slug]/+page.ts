import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		// Načti všechny články (pouze české)
		const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });
		
		const allArticles = Object.entries(modules).map(([path, module]) => ({
			path,
			module,
			metadata: (module as any).metadata
		}));
		
		// Najdi článek podle slug
		const article = allArticles.find(a => a.metadata.slug === params.slug);
		
		if (!article) {
			throw error(404, 'Blog post nenalezen');
		}

		const { metadata, default: content } = article.module as any;

		return {
			post: {
				title: metadata.title || 'Bez názvu',
				excerpt: metadata.excerpt || '',
				date: metadata.date || new Date().toISOString().split('T')[0],
				category: metadata.category || '',
				slug: params.slug,
				readingTime: metadata.readingTime || '5 minut',
				author: metadata.author || 'AIS CR',
				authorRole: metadata.authorRole || 'Archeologický informační systém',
				authorImage: metadata.authorImage || '/images/people/ais-staff.png',
				image: metadata.image || '/Content.jpg',
				content
			}
		};
	} catch (err) {
		console.error('Error loading blog post:', err);
		throw error(404, 'Blog post nenalezen');
	}
};

// Generate entries for all blog posts (for prerendering)
export const entries: EntryGenerator = async () => {
	const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });
	
	const slugs = Object.entries(modules).map(([path, module]) => {
		const { metadata } = module as any;
		return { slug: metadata.slug };
	});
	
	return slugs;
};
