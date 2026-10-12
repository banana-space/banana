// Site search in the browser: loads Pagefind on demand and renders results for
// the header panel (headerSearch, attached by site.js) and the results page
// (search-page.js). Only Pagefind's search API is used; the interface is ours.

import { exactPage, searchPages } from './search-query.js';

export { searchPages };
export const config = JSON.parse(document.getElementById('search-config').textContent);
const strings = config.strings;
// Pagefind result URLs already carry the site path; breadcrumb URLs are
// site-relative (see scripts/search/document.mjs) and get the same prefix.
const base = new URL('../', new URL(config.bundle, document.baseURI)).pathname;

/** Fill {name} placeholders in an interface string. */
export const format = (template, values) => template.replace(/\{(\w+)\}/g, (match, key) => values[key] ?? match);

let loading;
/** Load and initialize Pagefind once; a failed load may be retried. */
export function loadPagefind() {
  loading ??= import(config.bundle).then(async pagefind => {
    await pagefind.options({ excerptLength: 32 });
    await pagefind.init();
    return pagefind;
  }).catch(error => {
    loading = undefined;
    throw error;
  });
  return loading;
}

// Same algorithm as decodeSearchData in scripts/search/data.mjs.
const decode = text => JSON.parse(new TextDecoder().decode(Uint8Array.from(text, char => char.charCodeAt(0) - 0x2800)));

const escapeRegExp = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * Query terms for highlighting. Pagefind marks only the first character of
 * Chinese words (and sometimes nothing), so highlighting is done here by
 * substring matching; Chinese terms match as substrings anyway (search-query.js).
 */
export function queryMatcher(query) {
  const terms = [...new Set(query.toLowerCase().split(/\s+/).filter(Boolean))].sort((a, b) => b.length - a.length);
  if (!terms.length) return null;
  return new RegExp(terms.map(escapeRegExp).join('|'), 'giu');
}

// The indexed text separates Chinese characters with zero-width spaces (see
// separateWords in scripts/search/document.mjs); they never reach the screen.
const clean = value => value.replaceAll('\u200b', '');

const plainText = html => {
  const template = document.createElement('template');
  template.innerHTML = html;
  return clean(template.content.textContent);
};

/** Text with matches wrapped in <mark>, as a document fragment; touching matches share one mark. */
function highlighted(text, matcher) {
  const ranges = [];
  if (matcher) for (const match of text.matchAll(matcher)) {
    if (!match[0]) continue;
    const end = match.index + match[0].length;
    if (ranges.length && ranges.at(-1)[1] === match.index) ranges.at(-1)[1] = end;
    else ranges.push([match.index, end]);
  }
  const fragment = document.createDocumentFragment();
  let last = 0;
  for (const [start, end] of ranges) {
    fragment.append(text.slice(last, start), Object.assign(document.createElement('mark'), { textContent: text.slice(start, end) }));
    last = end;
  }
  fragment.append(text.slice(last));
  return fragment;
}

// Pagefind joins a heading to its section text with ". ", so an excerpt from
// the top of a section repeats the heading shown as the result title (or the
// tail of it, when the excerpt window starts inside the heading). Any other
// excerpt starts somewhere inside the section, often in the middle of a word
// (Chinese is indexed by character), and gets a leading ellipsis. Leading
// punctuation is dropped, except opening brackets and quotes, which belong to
// the text that follows.
const leadingPunctuation = /^[\s\p{Pc}\p{Pd}\p{Pe}\p{Pf}\p{Po}]+/u;
const withoutHeading = (text, ...headings) => {
  for (const heading of headings.filter(Boolean)) {
    for (let start = 0; start < heading.length; start++) {
      const tail = heading.slice(start);
      if (text === `${tail}.` || text.startsWith(`${tail}. `)) return text.slice(tail.length + 1).replace(leadingPunctuation, '');
    }
  }
  const rest = text.replace(leadingPunctuation, '');
  return rest && `…${rest}`;
};

const matches = (text, matcher) => Boolean(matcher && text) && text.search(matcher) >= 0;

/** Highlight text nodes of rendered title HTML, leaving formulas untouched. */
function highlightNodes(root, matcher) {
  if (!matcher) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: node => node.parentElement?.closest('.katex') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  for (const node of nodes) if (matches(node.data, matcher)) node.replaceWith(highlighted(node.data, matcher));
}

const icon = name => {
  const template = document.createElement('template');
  template.innerHTML = strings.icons?.[name] ?? '';
  return template.content;
};

const element = (tag, className, ...children) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  node.append(...children);
  return node;
};

/**
 * Display model of one Pagefind result. The excerpt falls back to the page's
 * opening text when the result matched only a keyword (reading or alias).
 */
export function resultView(result, query) {
  const data = decode(result.meta.data ?? '');
  const matcher = queryMatcher(query);
  const title = clean(result.meta.title);
  const queryCharacters = new Set(query.match(/\p{Script=Han}/gu) ?? []);
  // The indexed page heading: number, title and aliases (scripts/search/document.mjs).
  const headingText = [data.number, title, ...(data.aliases ?? [])].filter(Boolean).join(' ');
  const excerpt = withoutHeading(plainText(result.excerpt ?? ''), headingText);
  // An alias is worth showing when it, not the title, contains the query.
  const alias = matches(title, matcher) ? undefined : data.aliases?.find(name => matches(name, matcher));
  const subs = (result.sub_results ?? [])
    .map(sub => ({ ...sub, title: clean(sub.title ?? '') }))
    .filter(sub => !sub.url.endsWith('#page-title') && sub.title && sub.title !== title)
    // Show a section only if it contains a query term or one of the query's Chinese characters.
    .filter(sub => matches(`${sub.title} ${sub.excerpt ?? ''}`, matcher) || [...clean(`${sub.title} ${sub.excerpt ?? ''}`)].some(char => queryCharacters.has(char)))
    .map((sub, index) => ({ title: sub.title, url: sub.url, excerpt: withoutHeading(plainText(sub.excerpt ?? ''), sub.title), index, strong: matches(sub.title, matcher) }))
    // Sections and theorems whose own title matches come first, otherwise document order.
    .sort((a, b) => (b.strong - a.strong) || (a.index - b.index));
  const collection = ['lecture', 'guide'].includes(data.kind) ? (data.breadcrumb[0] ?? { url: result.url, title }) : undefined;
  return {
    url: result.url,
    kind: data.kind,
    number: data.number,
    titleHTML: data.titleHTML || title,
    // A category's ancestors would read like a location in a book; categories show a folder icon instead.
    breadcrumb: data.kind === 'category' ? [] : (data.breadcrumb ?? []).map(item => ({ ...item, url: item.url.startsWith('/') ? base + item.url.slice(1) : item.url })),
    alias,
    excerpt: matches(excerpt, matcher) || !data.lead ? excerpt : data.lead,
    subs,
    collection: collection && { url: collection.url, title: collection.title },
    matcher,
  };
}

/**
 * Keep at most `limit` results per lecture or guide, in rank order. Returns
 * the kept views; each kept view that is the last one shown from its
 * collection gets `hidden`, the views left out after it.
 */
export function groupByCollection(views, limit = 2) {
  const shown = new Map();
  const kept = [];
  for (const view of views) {
    const key = view.collection?.url;
    if (!key) { kept.push(view); continue; }
    const group = shown.get(key) ?? { views: [], hidden: [] };
    shown.set(key, group);
    if (group.views.length < limit) { group.views.push(view); kept.push(view); }
    else group.hidden.push(view);
  }
  for (const group of shown.values()) if (group.hidden.length) group.views.at(-1).hidden = group.hidden;
  return kept;
}

let ids = 0;

/**
 * One result as DOM: the page link, then links to matching sections and
 * theorems. `compact` keeps the header panel short: no section excerpts.
 */
export function renderResult(view, { subLimit = 3, compact = false, option = false } = {}) {
  const id = `search-result-${++ids}`;
  const group = element('div', `search-result search-kind-${view.kind}`);
  const link = element('a', 'search-hit');
  link.href = view.url;
  link.id = id;
  if (option) {
    group.setAttribute('role', 'group');
    group.setAttribute('aria-labelledby', `${id}-title`);
    link.setAttribute('role', 'option');
  }

  if (view.breadcrumb.length) {
    const trail = element('span', 'search-breadcrumb');
    view.breadcrumb.forEach((item, index) => {
      if (index) trail.append(element('span', 'search-breadcrumb-separator', '›'));
      trail.append(element('span', '', item.title));
    });
    link.append(trail);
  }

  const title = element('span', 'search-hit-title');
  title.id = `${id}-title`;
  if (view.kind === 'category') title.append(icon('folder'));
  if (view.number) title.append(element('span', 'search-number', view.number), ' ');
  const name = element('span', 'search-title-text');
  name.innerHTML = view.titleHTML;
  highlightNodes(name, view.matcher);
  title.append(name);
  link.append(element('span', 'search-hit-heading', title, element('span', 'search-kind', strings.kinds[view.kind] ?? '')));
  if (view.alias) link.append(element('span', 'search-hit-alias', highlighted(format(strings.alias, { name: view.alias }), view.matcher)));
  if (view.excerpt) link.append(element('span', 'search-hit-excerpt', highlighted(view.excerpt, view.matcher)));
  group.append(link);

  const subs = view.subs.slice(0, subLimit);
  if (subs.length) {
    const list = element('div', 'search-subs');
    for (const sub of subs) {
      const item = element('a', 'search-sub', icon('subitem'), element('span', 'search-sub-title', highlighted(sub.title, view.matcher)));
      item.href = sub.url;
      item.id = `search-result-${++ids}`;
      if (option) item.setAttribute('role', 'option');
      if (!compact && sub.excerpt) item.append(element('span', 'search-sub-excerpt', highlighted(sub.excerpt, view.matcher)));
      list.append(item);
    }
    group.append(list);
  }
  return group;
}

/**
 * Live results under the header search field. site.js owns opening and
 * closing; this controller searches as the user types, renders the panel and
 * handles arrow keys and Enter. `onNavigate` runs before a result link is
 * followed, so the panel can close for links within the current page.
 */
export function headerSearch({ search, input, onNavigate, compact }) {
  const status = search.querySelector('.search-status');
  const list = search.querySelector('.search-results');
  const all = search.querySelector('.search-all');
  const panel = search.querySelector('.search-panel');
  let generation = 0;
  let active = -1;
  let total = 0;

  const options = () => Array.from(list.querySelectorAll('[role="option"]'));
  const resultsURL = query => `${config.page}?q=${encodeURIComponent(query)}`;

  const setStatus = (text, { visible = true } = {}) => {
    status.textContent = text;
    status.classList.toggle('sr-only', !visible);
  };

  const setActive = (index, { scroll = true } = {}) => {
    const items = options();
    items[active]?.classList.remove('is-active');
    items[active]?.setAttribute('aria-selected', 'false');
    active = items.length ? index : -1;
    const item = items[active];
    if (item) {
      item.classList.add('is-active');
      item.setAttribute('aria-selected', 'true');
      input.setAttribute('aria-activedescendant', item.id);
      if (scroll) item.scrollIntoView({ block: 'nearest' });
    } else input.removeAttribute('aria-activedescendant');
  };

  const clear = () => {
    list.replaceChildren();
    all.hidden = true;
    active = -1;
    input.removeAttribute('aria-activedescendant');
    input.setAttribute('aria-expanded', 'false');
  };

  async function update() {
    const query = input.value.trim();
    const current = ++generation;
    search.classList.toggle('has-query', Boolean(query));
    if (!query) {
      clear();
      setStatus(compact() ? strings.hint : '', { visible: compact() });
      return;
    }
    let pagefind;
    try {
      const pending = loadPagefind();
      if (!list.childElementCount) setStatus(strings.loading);
      pagefind = await pending;
    } catch {
      if (current === generation) { clear(); setStatus(strings.error); }
      return;
    }
    // Wait for a pause in typing.
    await new Promise(resolve => setTimeout(resolve, 120));
    if (current !== generation) return;
    const response = await searchPages(pagefind, query);
    if (current !== generation) return;
    total = response.results.length;
    // Load a few spare results: grouping by collection may leave some out.
    const results = await Promise.all(response.results.slice(0, 10).map(result => result.data()));
    if (current !== generation) return;
    const views = groupByCollection(results.map(result => resultView(result, query))).slice(0, compact() ? 6 : 7);
    clear();
    list.append(...views.map(view => renderResult(view, { subLimit: compact() ? 2 : 3, compact: true, option: true })));
    input.setAttribute('aria-expanded', String(views.length > 0));
    if (total) {
      setStatus(format(strings.count, { count: total }), { visible: false });
      all.textContent = format(strings.viewAll, { count: total });
      all.href = resultsURL(query);
      all.hidden = false;
    } else setStatus(format(strings.noResults, { query }));
    list.scrollTop = 0;
    panel.scrollTop = 0;
  }

  input.addEventListener('input', update);
  input.addEventListener('keydown', event => {
    if (event.isComposing || event.keyCode === 229) return;
    const items = options();
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      if (!items.length) return;
      event.preventDefault();
      const step = event.key === 'ArrowDown' ? 1 : -1;
      setActive(active < 0 ? (step > 0 ? 0 : items.length - 1) : (active + step + items.length) % items.length);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const item = items[active];
      const query = input.value.trim();
      if (item) item.click();
      else if (query) {
        // A query naming a wiki entry exactly opens it; anything else opens the results page.
        loadPagefind().then(pagefind => exactPage(pagefind, query)).catch(() => null)
          .then(url => { if (input.value.trim() === query) window.location.assign(url ?? resultsURL(query)); });
      }
    }
  });
  list.addEventListener('pointermove', event => {
    const item = event.target.closest('[role="option"]');
    if (item) setActive(options().indexOf(item), { scroll: false });
  });
  search.addEventListener('click', event => {
    const link = event.target.closest('.search-results a, .search-all');
    if (link) onNavigate(link, event);
  });

  update();
  return { update, reset: () => setActive(-1) };
}
