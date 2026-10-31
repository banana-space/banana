// "Related pages" on the missing-article and 404 pages: searches the name the
// visitor was looking for and shows the best matches. The section stays
// hidden when there is no name or nothing is found.
import { config, format, loadPagefind, resultView, renderResult } from './search.js';
import { nameFromPath, relatedPages } from './search-query.js';

const section = document.querySelector('.related-search');
const base = new URL('../', new URL(config.bundle, document.baseURI)).pathname;
const name = (section.dataset.source === 'path'
  ? nameFromPath(window.location.pathname, base)
  : new URLSearchParams(window.location.search).get('title') ?? '').trim();

if (name) {
  try {
    const pagefind = await loadPagefind();
    const { results, terms } = await relatedPages(pagefind, name);
    if (results.length) {
      // Highlight the name and the words it was searched by.
      const query = [name, ...terms].join(' ');
      section.querySelector('.related-search-results').append(...results.map(result => renderResult(resultView(result, query), { subLimit: 2, compact: true })));
      const more = section.querySelector('.related-search-more a');
      more.href = `${config.page}?q=${encodeURIComponent(name)}`;
      more.textContent = format(config.strings.relatedMore, { query: name });
      section.hidden = false;
      for (const element of document.querySelectorAll('[data-related]')) element.hidden = element.dataset.related !== 'found';
    }
  } catch {
    // Related pages are an extra; the page is complete without them.
  }
}
