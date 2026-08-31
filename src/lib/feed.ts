// Klient sdíleného newsfeedu AIS CR (https://github.com/ARUP-CAS/aiscr-news).
// Feedy jsou publikované na GitHub Pages a weby je stahují za běhu —
// nový článek se objeví bez rebuildu webu (s ~10min cache GitHub Pages).

import { building } from '$app/environment';

export const FEED_BASE = 'https://arup-cas.github.io/aiscr-news';
const SITE = 'aiscr';

export function feedUrl(locale: string): string {
	return `${FEED_BASE}/feed/${SITE}/${locale}.json`;
}

export function itemUrl(locale: string, slug: string): string {
	return `${FEED_BASE}/feed/${SITE}/${locale}/${encodeURIComponent(slug)}.json`;
}

export interface FeedAuthor {
	slug: string;
	name: string;
	photo: string;
	role?: string;
}

export interface FeedItem {
	slug: string;
	type: 'news' | 'quickinfo';
	date: string;
	time: string | null;
	badge: string | null;
	title: string;
	excerpt: string;
	/** Absolutní URL úvodního obrázku (hostovaný v repu aiscr-news) */
	image: string | null;
	authors: FeedAuthor[];
	readingTime: string | null;
	/** HTML těla článku (sanitizované už při generování feedu; na klientovi se
	 *  pro jistotu sanitizuje ještě jednou přes DOMPurify — viz detail článku) */
	html: string;
}

type FetchFn = typeof globalThis.fetch;

// Za běhu v prohlížeči se chyby polykají (stránka se obejde bez živých dat),
// při prerenderu (build) ale musí shodit build — jinak by se zapekl prázdný
// blog a nikdo by si nevšiml. Jedině 404 zůstává měkká i při buildu (článek
// bez anglického překladu legitimně nemá en/<slug>.json).
async function fetchJson(fetchFn: FetchFn, url: string): Promise<any | null> {
	let res: Response;
	try {
		res = await fetchFn(url);
	} catch (err) {
		if (building) throw new Error(`Nepodařilo se načíst newsfeed při buildu: ${url} (${err})`);
		return null;
	}
	if (!res.ok) {
		if (building && res.status !== 404) {
			throw new Error(`Nepodařilo se načíst newsfeed při buildu: ${url} (HTTP ${res.status})`);
		}
		return null;
	}
	return res.json();
}

/**
 * Načte články (type: news) pro daný jazyk, od nejnovějších.
 * Články bez překladu se doplní z české verze (fallback na češtinu).
 */
export async function fetchNews(fetchFn: FetchFn, locale: string): Promise<FeedItem[]> {
	const locales = locale === 'cs' ? ['cs'] : [locale, 'cs'];
	const feeds = await Promise.all(locales.map((loc) => fetchJson(fetchFn, feedUrl(loc))));

	if (building) {
		const missing = feeds.findIndex((f) => !f);
		if (missing !== -1) {
			throw new Error(`Newsfeed pro prerender neexistuje: ${feedUrl(locales[missing])}`);
		}
	}

	const seen = new Set<string>();
	const items: FeedItem[] = [];
	for (const feed of feeds) {
		for (const item of (feed?.items ?? []) as FeedItem[]) {
			if (!seen.has(item.slug)) {
				seen.add(item.slug);
				items.push(item);
			}
		}
	}

	return items
		.filter((i) => i.type === 'news')
		.sort((a, b) => `${b.date}T${b.time ?? ''}`.localeCompare(`${a.date}T${a.time ?? ''}`));
}

/** Načte jeden článek podle slugu; bez překladu vrací českou verzi. */
export async function fetchNewsItem(
	fetchFn: FetchFn,
	locale: string,
	slug: string
): Promise<FeedItem | null> {
	const locales = locale === 'cs' ? ['cs'] : [locale, 'cs'];
	const results = await Promise.all(locales.map((loc) => fetchJson(fetchFn, itemUrl(loc, slug))));
	for (const data of results) {
		if (data?.item) return data.item as FeedItem;
	}
	return null;
}

/** Slugy všech článků — pro prerender detailů; při neúspěchu shodí build. */
export async function fetchNewsSlugs(fetchFn: FetchFn): Promise<string[]> {
	const feed = await fetchJson(fetchFn, feedUrl('cs'));
	if (!feed) {
		throw new Error(`Nepodařilo se načíst newsfeed pro prerender: ${feedUrl('cs')}`);
	}
	return (feed.items as FeedItem[]).filter((i) => i.type === 'news').map((i) => i.slug);
}

export function localeFromPathname(pathname: string): string {
	return pathname.startsWith('/en') ? 'en' : 'cs';
}

export interface NewsListPost {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	category: string;
}

export function toListPost(item: FeedItem): NewsListPost {
	return {
		slug: item.slug,
		title: item.title,
		excerpt: item.excerpt,
		date: item.date,
		category: item.badge ?? ''
	};
}
