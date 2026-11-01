// How a query reaches Pagefind. The index holds Chinese text one character
// per word (separateWords in scripts/search/document.mjs), so a term with
// Chinese characters is searched as an exact phrase of its characters, which
// is substring matching: 上同调 finds 奇异上同调. Other terms keep Pagefind's
// prefix matching (Latin words, pinyin). Pagefind's exact mode takes only a
// whole query as one phrase, so a query of several such parts runs one search
// per part and keeps the pages found by all of them.
// No DOM access: tests run this module in Node against a built index.

const han = /\p{Script=Han}/u;
const characters = term => term.replace(/(?<=\S)(?=[\p{Script=Han}　-〿＀-￯])|(?<=[\p{Script=Han}　-〿＀-￯])(?=\S)/gu, ' ');

/** The Pagefind queries for one user query: exact phrases for Chinese terms, then the other terms together. */
export function searchParts(query) {
  const terms = query.trim().split(/\s+/).filter(Boolean);
  const others = terms.filter(term => !han.test(term));
  return [
    ...terms.filter(term => han.test(term)).map(term => `"${characters(term)}"`),
    ...(others.length ? [others.join(' ')] : []),
  ];
}

const phrase = part => part.startsWith('"');

/**
 * Wiki titles and aliases are indexed as Pagefind filters (scripts/search/document.mjs):
 * `exact` holds the whole title, `prefix` each of its first PREFIX_LENGTH prefixes, and
 * `aliasexact`, `aliasprefix` the same for aliases, all as titleKey. A query is looked up there directly, so entries whose name starts with
 * it always come first, however Pagefind scores them.
 */
export const PREFIX_LENGTH = 16;
export const titleKey = text => text.replaceAll('\u200b', '').normalize('NFKC').toLowerCase().replace(/\s+/g, '');
/** The exact and prefix filter values of one name. */
export function titleFilters(name) {
  const characters = [...titleKey(name)];
  return { exact: characters.join(''), prefixes: characters.slice(0, PREFIX_LENGTH).map((_, i) => characters.slice(0, i + 1).join('')) };
}

// Words as Pagefind indexes them: split at spaces and punctuation and between
// camelCase parts (MacLane is also found by Lane), without accents.
const normalize = text => text.normalize('NFD').replace(/\p{M}/gu, '');
const words = text => normalize(text).split(/[\s\u200b\p{P}]+/u)
  .flatMap(word => [word, ...word.split(/(?<=\p{Ll})(?=\p{Lu})/u).slice(1)])
  .filter(Boolean).map(word => word.toLowerCase());
const checkedTerms = new WeakMap();

/**
 * Whether a non-Chinese term occurs in the index. For a term that no indexed
 * word starts with, Pagefind retries shorter and shorter prefixes of it
 * (zzqxyz ends up matching the letter z in formulas). If the term occurs, its
 * best result has a word starting with it; otherwise that result matched only a
 * shorter prefix.
 * Readings count too: they are in the keywords field.
 */
function termOccurs(pagefind, term) {
  const key = normalize(term).toLowerCase();
  if (!key) return Promise.resolve(false);
  if (!checkedTerms.has(pagefind)) checkedTerms.set(pagefind, new Map());
  const checked = checkedTerms.get(pagefind);
  if (!checked.has(key)) {
    checked.set(key, (async () => {
      const { results } = await pagefind.search(term);
      if (!results.length) return false;
      const page = await results[0].data();
      return words(`${page.meta.title} ${page.meta.keywords ?? ''} ${page.content}`).some(word => word.startsWith(key));
    })());
  }
  return checked.get(key);
}

/**
 * The query as Pagefind should see it: non-Chinese terms split at punctuation
 * the way the text was (Pagefind would join Eilenberg–MacLane or f(x) into one
 * word that occurs nowhere), and without the terms that occur nowhere. Chinese
 * terms are matched exactly anyway and stay as they are.
 */
export async function knownQuery(pagefind, query) {
  const terms = query.trim().split(/\s+/).filter(Boolean)
    .flatMap(term => han.test(term) ? [term] : term.split(/\p{P}+/u).filter(Boolean));
  const keep = await Promise.all(terms.map(term => han.test(term) || termOccurs(pagefind, term)));
  return terms.filter((term, index) => keep[index]).join(' ');
}

/**
 * Search one part. Pagefind gives every result of an exact phrase the same
 * score, in index order, so a phrase is ranked by the scores of the same
 * characters searched normally (title weight, frequency); those results
 * always include the phrase's.
 */
async function searchPart(pagefind, part, options) {
  const [response, ranking] = await Promise.all([
    pagefind.search(part, options),
    phrase(part) ? pagefind.search(part.slice(1, -1), options) : null,
  ]);
  const scores = new Map((ranking ?? response).results.map(result => [result.id, result.score]));
  return { response, ids: new Set(response.results.map(result => result.id)), scores };
}

/** Results found by every part, ranked by their summed scores. */
function combine(searched) {
  const [first, ...rest] = searched;
  return first.response.results
    .filter(result => rest.every(part => part.ids.has(result.id)))
    .map(result => ({ result, score: searched.reduce((sum, part) => sum + (part.scores.get(result.id) ?? 0), 0) }))
    .sort((a, b) => b.score - a.score)
    .map(({ result }) => result);
}

// Title matches first: among the best results, wiki entries whose title, an
// alias or a reading contains every query term come first, then other pages
// whose title matches (categories, lectures), then the rest in Pagefind's order.
// Only the first TITLE_WINDOW results are loaded for this; a title match ranks
// high in Pagefind already. Loaded data is kept, so showing the results reuses it.
const TITLE_WINDOW = 30;
const fold = text => normalize(text.replaceAll('\u200b', '')).toLowerCase().replace(/\s+/g, '');
const decodeData = text => {
  try { return JSON.parse(new TextDecoder().decode(Uint8Array.from(text, char => char.charCodeAt(0) - 0x2800))); }
  catch { return {}; }
};

function cacheData(result) {
  if (!result.cachedData) {
    const load = result.data.bind(result);
    let promise;
    result.data = () => (promise ??= load());
    result.cachedData = true;
  }
  return result;
}

async function titleFirst(results, query) {
  const terms = query.trim().split(/\s+/).map(fold).filter(Boolean);
  if (!terms.length || results.length < 2) return results;
  const head = results.slice(0, TITLE_WINDOW).map(cacheData);
  const pages = await Promise.all(head.map(result => result.data()));
  const rank = page => {
    const data = decodeData(page.meta?.data ?? '');
    const names = [page.meta?.title ?? '', ...(data.aliases ?? [])].map(fold);
    const matched = terms.every(term => names.some(name => name.includes(term)))
      || terms.every(term => fold(page.meta?.keywords ?? '').includes(term));
    if (!matched) return 2;
    return (page.filters?.kind?.[0] ?? data.kind) === 'wiki' ? 0 : 1;
  };
  const ranks = pages.map(rank);
  const order = head.map((result, index) => ({ result, index, rank: ranks[index] }))
    .sort((a, b) => a.rank - b.rank || a.index - b.index).map(entry => entry.result);
  return [...order, ...results.slice(TITLE_WINDOW)];
}

/**
 * Search like pagefind.search, ignoring terms that occur nowhere (an empty
 * response when none is left). The response has `results`,
 * `unfilteredResultCount` and, with `counts`, `totalFilters.kind`: the number
 * of results of each kind, ignoring the kind filter in `options`.
 */
export async function searchPages(pagefind, query, options = {}) {
  const known = await knownQuery(pagefind, query);
  const [response, named] = await Promise.all([rankedSearch(pagefind, known, options), nameMatches(pagefind, query, options)]);
  // Exact names first, then names starting with the query in Pagefind's order, then the rest.
  const byId = new Map(response.results.map(result => [result.id, result]));
  const first = [];
  for (const tier of named) {
    const ids = new Set(tier.map(result => result.id));
    const ordered = [...response.results.filter(result => ids.has(result.id)), ...tier.filter(result => !byId.has(result.id))];
    for (const result of ordered) if (!first.some(other => other.id === result.id)) first.push(result);
  }
  const taken = new Set(first.map(result => result.id));
  const rest = await titleFirst(response.results.filter(result => !taken.has(result.id)), known);
  const extra = first.filter(result => !byId.has(result.id)).length;
  return {
    ...response,
    results: [...first.map(cacheData), ...rest],
    ...(extra && response.unfilteredResultCount !== undefined ? { unfilteredResultCount: response.unfilteredResultCount + extra } : {}),
  };
}

/**
 * The wiki entry whose title is exactly the query, else the one entry with it
 * as an alias (with ?from= as for a wiki link). Enter goes straight there.
 */
export async function exactPage(pagefind, query) {
  const key = titleKey(query);
  if (!key) return null;
  for (const [filter, alias] of [['exact', false], ['aliasexact', true]]) {
    const { results } = await pagefind.search(null, { filters: { [filter]: key } });
    if (results.length !== 1) continue;
    const { url } = await results[0].data();
    return alias ? `${url}?from=${encodeURIComponent(query.trim())}` : url;
  }
  return null;
}

/**
 * Wiki entries named by the whole query, in tiers: exact title, exact alias,
 * title starting with it, alias starting with it, then a whole pinyin reading
 * (guan finds 卝 ahead of guang 光滑).
 */
async function nameMatches(pagefind, query, options) {
  const key = titleKey(query);
  if (!key) return [];
  const filters = options.filters ?? {};
  if (filters.kind && filters.kind !== 'wiki') return [];
  const lookup = async (name, value) => (await pagefind.search(null, { ...options, filters: { ...filters, [name]: value } })).results;
  const short = [...key].length <= PREFIX_LENGTH;
  return Promise.all([lookup('exact', key), lookup('aliasexact', key), short ? lookup('prefix', key) : [], short ? lookup('aliasprefix', key) : [], /^[a-z0-9]+$/.test(key) ? lookup('readingexact', key) : []]);
}

async function rankedSearch(pagefind, known, { counts = false, ...options } = {}) {
  const parts = searchParts(known);
  if (!parts.length) return { results: [], unfilteredResultCount: 0, totalFilters: {} };
  if (parts.length === 1 && !phrase(parts[0])) return pagefind.search(parts[0], options);
  const run = async filters => combine(await Promise.all(parts.map(part => searchPart(pagefind, part, { ...options, filters }))));
  if (parts.length === 1) {
    // One phrase: Pagefind's own counts are right, only the order changes.
    const searched = await searchPart(pagefind, parts[0], options);
    return { ...searched.response, results: combine([searched]) };
  }
  const { kind, ...otherFilters } = options.filters ?? {};
  const results = await run(options.filters);
  const unfiltered = kind ? await run(otherFilters) : results;
  let totalFilters = {};
  if (counts) {
    const kinds = Object.keys((await pagefind.filters()).kind ?? {});
    const sizes = await Promise.all(kinds.map(async value => [value, (await run({ ...otherFilters, kind: value })).length]));
    totalFilters = { kind: Object.fromEntries(sizes) };
  }
  return { results, unfilteredResultCount: unfiltered.length, totalFilters };
}

// Related pages for a name that has no page (the missing-article and 404
// pages). The name itself rarely matches as a whole, so its words are
// searched too: Chinese words of two or more characters (single characters
// would match almost everything) and other words of two or more letters.
const segmenter = typeof Intl.Segmenter === 'function' ? new Intl.Segmenter('zh', { granularity: 'word' }) : null;

/** Words of a name worth searching on their own. */
export function relatedTerms(name) {
  const words = new Set();
  for (const term of name.toLowerCase().split(/\s+/).filter(Boolean)) {
    const segments = segmenter ? Array.from(segmenter.segment(term)) : [{ segment: term, isWordLike: true }];
    for (const { segment, isWordLike } of segments) if (isWordLike && [...segment].length > 1) words.add(segment);
  }
  return [...words];
}

/** The name a missing address stands for: its last path segment, relative to the site `base`. */
export function nameFromPath(pathname, base = '/') {
  let path = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  try { path = decodeURIComponent(path); } catch { /* Keep an undecodable address as it is. */ }
  const segments = path.split('/').filter(Boolean);
  if (/^index\.html?$/i.test(segments.at(-1) ?? '')) segments.pop();
  return (segments.at(-1) ?? '').replace(/\.html?$/i, '').replace(/[-_+]+/g, ' ').trim();
}

/**
 * Up to `limit` pages for `name`, as loaded result data: pages matching the
 * whole name first, then pages matching its words, those matching more words
 * first. A word that occurs nowhere makes Pagefind retry shorter prefixes
 * (down to single letters in formulas), so a page is kept only if its text
 * really contains the name or one of the words. Also returns the words, for
 * highlighting.
 */
export async function relatedPages(pagefind, name, limit = 6) {
  const whole = name.trim().toLowerCase();
  const terms = relatedTerms(name).filter(term => term !== whole);
  if (!whole) return { results: [], terms };
  const candidates = [...(await searchPages(pagefind, name)).results];
  const seen = new Set(candidates.map(result => result.id));
  const tally = new Map();
  const responses = await Promise.all(terms.map(term => searchPages(pagefind, term)));
  for (const { results } of responses) {
    results.forEach((result, rank) => {
      if (seen.has(result.id)) return;
      const entry = tally.get(result.id) ?? { result, words: 0, rank: 0 };
      entry.words++;
      entry.rank += 1 / (rank + 1);
      tally.set(result.id, entry);
    });
  }
  candidates.push(...[...tally.values()].sort((a, b) => (b.words - a.words) || (b.rank - a.rank)).map(entry => entry.result));
  const results = [];
  for (let start = 0; start < candidates.length && results.length < limit; start += limit) {
    const data = await Promise.all(candidates.slice(start, start + limit).map(result => result.data()));
    for (const page of data) {
      const text = `${page.meta.title} ${page.content}`.replaceAll('\u200b', '').toLowerCase();
      if ([whole, ...terms].some(term => text.includes(term)) && results.length < limit) results.push(page);
    }
  }
  return { results, terms };
}
