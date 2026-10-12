// The /search/ results page: the same results as the header panel, with type
// filters, longer excerpts and incremental loading. The query and type live in
// the URL (?q=…&kind=…), so a results page can be shared or reloaded.
import { config, format, loadPagefind, resultView, groupByCollection, renderResult, searchPages } from './search.js';

const strings = config.strings;
const KINDS = ['wiki', 'lecture', 'guide', 'category', 'page'];
const PAGE_SIZE = 20;

const page = document.querySelector('.search-page');
const form = page.querySelector('form');
const input = form.querySelector('input');
const filters = page.querySelector('.search-filters');
const status = page.querySelector('.search-page-status');
const list = page.querySelector('.search-page-results');
const more = page.querySelector('.search-load-more');
const touch = window.matchMedia('(pointer: coarse)');

const params = new URLSearchParams(window.location.search);
let kind = KINDS.includes(params.get('kind')) ? params.get('kind') : '';
let query = '';
let results = [];
let offset = 0;
let generation = 0;
let filtersLoaded;

input.value = params.get('q') ?? '';

function syncLocation() {
  const next = new URLSearchParams();
  if (query) next.set('q', query);
  if (query && kind) next.set('kind', kind);
  const search = next.toString();
  window.history.replaceState(window.history.state, '', search ? `?${search}` : window.location.pathname);
  document.title = query ? format(strings.resultsTitle, { query }) : strings.pageTitle;
}

function renderFilters(counts, total) {
  const items = [['', total], ...KINDS.map(value => [value, counts[value] ?? 0])]
    .filter(([value, count]) => !value || count || value === kind);
  filters.replaceChildren(...items.map(([value, count]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'search-filter';
    button.dataset.kind = value;
    button.setAttribute('aria-pressed', String(value === kind));
    const label = document.createElement('span');
    label.textContent = strings.kinds[value || 'all'];
    const number = document.createElement('span');
    number.className = 'search-filter-count';
    number.textContent = count;
    button.append(label, number);
    return button;
  }));
  filters.hidden = items.length < 2 && !kind;
}

/** A collapsed run of results from one lecture or guide; expands in place. */
function expander(view) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'search-expand';
  button.textContent = format(strings.moreInCollection, { collection: view.collection.title, count: view.hidden.length });
  button.addEventListener('click', () => {
    const items = view.hidden.map(hidden => renderResult(hidden));
    button.replaceWith(...items);
    items[0]?.querySelector('a')?.focus();
  });
  return button;
}

async function loadMore(current) {
  const batch = results.slice(offset, offset + PAGE_SIZE);
  offset += batch.length;
  more.disabled = true;
  const data = await Promise.all(batch.map(result => result.data()));
  more.disabled = false;
  if (current !== generation) return;
  for (const view of groupByCollection(data.map(result => resultView(result, query)))) {
    list.append(renderResult(view));
    if (view.hidden) list.append(expander(view));
  }
  more.hidden = offset >= results.length;
}

async function run({ debounce = false } = {}) {
  query = input.value.trim();
  const current = ++generation;
  syncLocation();
  page.classList.toggle('has-query', Boolean(query));
  if (!query) {
    list.replaceChildren();
    filters.hidden = true;
    more.hidden = true;
    status.textContent = strings.hint;
    return;
  }
  let pagefind;
  try {
    const pending = loadPagefind();
    if (!list.childElementCount) status.textContent = strings.loading;
    pagefind = await pending;
    // Pagefind reports counts per type only once the filter data has loaded.
    await (filtersLoaded ??= pagefind.filters().catch(() => {}));
  } catch {
    if (current === generation) status.textContent = strings.error;
    return;
  }
  if (debounce) {
    await new Promise(resolve => setTimeout(resolve, 200));
    if (current !== generation) return;
  }
  const response = await searchPages(pagefind, query, { counts: true, ...(kind && { filters: { kind } }) });
  if (current !== generation) return;
  renderFilters(response.totalFilters?.kind ?? {}, response.unfilteredResultCount ?? response.results.length);
  results = response.results;
  offset = 0;
  list.replaceChildren();
  status.textContent = results.length ? format(strings.count, { count: results.length }) : format(strings.noResults, { query });
  more.hidden = true;
  if (results.length) await loadMore(current);
}

input.addEventListener('input', () => run({ debounce: true }));
form.addEventListener('submit', event => {
  event.preventDefault();
  run();
  // Hide the on-screen keyboard so the results are visible.
  if (touch.matches) input.blur();
});
filters.addEventListener('click', event => {
  const button = event.target.closest('.search-filter');
  if (!button || button.dataset.kind === kind) return;
  kind = button.dataset.kind;
  run();
});
more.addEventListener('click', () => loadMore(generation));

run();
if (!query && !touch.matches) input.focus();
