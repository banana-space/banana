// Runs the generated browser bundle in Node: fetch() reads files from the built site.
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { exactPage, knownQuery, relatedPages, searchPages } from '../../static/js/search-query.js';

let loads = 0;

/**
 * Search a built site; `base` is the site's path prefix, as the browser derives it.
 * `lang` is the page's <html lang>: in the browser Pagefind splits Chinese
 * queries into words with Intl.Segmenter, but only when it knows the language.
 */
export async function loadSearch(site, base = '/', lang = 'zh-cn') {
  const bundle = join(site, 'pagefind');
  const previousFetch = globalThis.fetch;
  globalThis.fetch = async url => {
    const path = decodeURIComponent(new URL(url, 'file:///').pathname);
    return new Response(await readFile(path.startsWith(bundle) ? path : join(bundle, path)));
  };
  globalThis.window ??= globalThis;
  globalThis.location ??= { origin: 'file://', href: 'file:///' };
  globalThis.document = { querySelector: selector => selector === 'html' ? { getAttribute: name => name === 'lang' ? lang : null } : null };
  // Every load gets a fresh module instance, also after the same site is rebuilt.
  const pagefind = await import(`${pathToFileURL(join(bundle, 'pagefind.js'))}?load=${++loads}`);
  await pagefind.options({ basePath: `${bundle}/`, baseUrl: base });
  await pagefind.init();
  return {
    /** Full result data, best first, for a query as the site's search box sends it. */
    async search(query, options) {
      const { results } = await searchPages(pagefind, query, options);
      return Promise.all(results.map(result => result.data()));
    },
    filters: () => pagefind.filters(),
    response: (query, options) => searchPages(pagefind, query, options),
    related: name => relatedPages(pagefind, name),
    known: query => knownQuery(pagefind, query),
    exact: query => exactPage(pagefind, query),
    restore() { globalThis.fetch = previousFetch; delete globalThis.document; },
  };
}
