import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getLocale } from '$lib/paraglide/runtime';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const locale = getLocale();
		
		// Načti všechny verze článku (cs i en)
		const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });
		
		const allArticles = Object.entries(modules).map(([path, module]) => ({
			path,
			module,
			metadata: (module as any).metadata
		}));
		
		// Najdi článek podle slug a locale
		const article = allArticles.find(a => 
			a.metadata.slug === params.slug && a.metadata.locale === locale
		);
		
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
				locale: metadata.locale,
				content
			},
			// Vrátíme všechny dostupné verze pro přepínání jazyka
			availableLocales: allArticles
				.filter(a => a.metadata.slug === params.slug)
				.map(a => a.metadata.locale)
		};
	} catch (err) {
		console.error('Error loading blog post:', err);
		throw error(404, 'Blog post nenalezen');
	}
};
