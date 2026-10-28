import { i18n } from '../../shared/i18n.mjs';
import { html, raw, url } from '../html.mjs';
import { bookList } from './collections.mjs';
import { displayTitle, icon } from './layout.mjs';

/**
 * Lists: a section's pages, a category's articles and
 * subcategories, the categories' overview, the lecture index; paginated (50 a page), long lists of articles
 * grouped by letter.
 */

export const pagerSize = 50;

const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0;
/** By letter group, script, reading, title (a stable sort, last key first). */
export function sortPages(pages) {
  const key = page => [page.params.sortGroup ?? '', page.params.sortScript ?? 0, page.params.sortKey ?? '', page.title];
  return pages.map((page, index) => ({ page, index, key: key(page) }))
    .sort((a, b) => {
      for (let i = 0; i < a.key.length; i++) {
        const order = compare(a.key[i], b.key[i]);
        if (order) return order;
      }
      return a.index - b.index;
    }).map(({ page }) => page);
}

/** The categories directly under the one titled parent ('' for the top), larger first. */
export function categoryChildren(site, parent) {
  const categories = site.getPage('/categories');
  const children = sortPages(categories?.pages ?? []).filter(page => (page.params.categoryParent ?? '') === parent);
  return children.map((page, index) => ({ page, index, count: page.regularPages.length }))
    .sort((a, b) => b.count - a.count || a.index - b.index).map(({ page }) => page);
}

/** The cards of categories. */
const categoryCards = (site, categories) => html`<ul class="category-cards">${categories.map(category => html`
  <li><a class="category-card" href="${url(category.href)}"><span class="category-card-name">${icon('folder')}${displayTitle(site, category)}</span><span class="category-card-count">${category.regularPages.length}</span></a></li>`)}
</ul>`;

/** The links to a category's ancestors, outermost first. */
function categoryAncestors(site, page, seen = []) {
  if (seen.includes(page.title)) throw new Error(i18n('build_category_cycle', { Path: page.title }));
  const parent = page.params.categoryParent && site.getPage(`/categories/${page.params.categoryParent}`);
  if (!parent) return '';
  return html`${categoryAncestors(site, parent, [...seen, page.title])}<a class="category-link" href="${url(parent.href)}">${displayTitle(site, parent)}</a><span class="category-separator" aria-hidden="true">›</span>`;
}

/** The articles directly in a category. */
const categoryPages = page => page.regularPages.filter(item => item.section === 'wiki' && (item.params.directCategories ?? item.params.categories ?? []).includes(page.title));

const isCategory = page => page.kind === 'term';

/** The pages a list shows, in order (list.html's $pages). */
export function listPages(site, page) {
  let pages = page.pages;
  if (page.section === 'wiki') pages = page.regularPages.filter(item => item.params.wikiName !== undefined && item.params.wikiName !== null);
  if (page.params.lectureIndex && !page.params.collectionRoot) pages = site.listed.filter(item => item.params.collectionHome === true && item.params.collectionKind === 'lecture');
  if (isCategory(page)) pages = categoryPages(page);
  return sortPages(pages);
}

/** A paginator for pages, on page number: { number, total, pages, href(number) }. */
export function paginate(page, pages, number) {
  const total = Math.max(1, Math.ceil(pages.length / pagerSize));
  return { number, total, pages: pages.slice((number - 1) * pagerSize, number * pagerSize), href: n => n === 1 ? page.href : `${page.href}page/${n}/` };
}

/** Up to 9 numbers around the current page (5 on narrow screens). */
function pagination(pager) {
  const { number: current, total } = pager;
  if (total <= 1) return '';
  const wide = 4, narrow = 2;
  const wideLow = Math.max(1, Math.min(current - wide, total - 2 * wide));
  const narrowLow = Math.max(1, Math.min(current - narrow, total - 2 * narrow));
  const items = [];
  if (current > 1) {
    items.push(html`<li><a href="${url(pager.href(1))}">&laquo;</a></li>`);
    items.push(html`<li class="hidden"><a href="${url(pager.href(current - 1))}">&lsaquo;</a></li>`);
  }
  for (let n = 1; n <= total; n++) {
    if (n < wideLow || n > wideLow + 2 * wide) continue;
    const inNarrow = n >= narrowLow && n <= narrowLow + 2 * narrow;
    items.push(n === current ? html`<li class="current" aria-current="page"><span>${n}</span></li>` : html`<li${inNarrow ? '' : html` class="wide-only"`}><a href="${url(pager.href(n))}">${n}</a></li>`);
  }
  if (current < total) {
    items.push(html`<li class="hidden"><a href="${url(pager.href(current + 1))}">&rsaquo;</a></li>`);
    items.push(html`<li><a href="${url(pager.href(total))}">&raquo;</a></li>`);
  }
  return html`<ul class="pagination">${items}</ul>`;
}

const letterAnchor = key => `letter-${key === '#' ? 'other' : key}`;
const letters = [...'#abcdefghijklmnopqrstuvwxyz'];
/** This page's entries under their letters, a bar of letters across the pages. */
function letterGroups(site, pages, pager, level) {
  const groups = [];
  for (const page of pager.pages) {
    if (groups.at(-1)?.key !== page.params.sortGroup) groups.push({ key: page.params.sortGroup, pages: [] });
    groups.at(-1).pages.push(page);
  }
  const offset = (pager.number - 1) * pagerSize;
  const continued = offset > 0 && pages[offset - 1]?.params.sortGroup === groups[0]?.key;
  let nav = '';
  if (pager.total > 1) {
    const start = new Map();
    pages.forEach((page, i) => { if (!start.has(page.params.sortGroup)) start.set(page.params.sortGroup, Math.floor(i / pagerSize) + 1); });
    const here = groups.map(group => group.key);
    const indexes = letters.map((key, i) => here.includes(key) ? i : -1).filter(i => i >= 0);
    const first = indexes.length ? indexes[0] : -1, last = indexes.length ? indexes.at(-1) : -1;
    nav = html`<nav class="letter-nav" aria-label="${i18n('letter_navigation')}">
    <ol>${letters.map((key, i) => {
      const classes = [...(i >= first && i <= last ? ['current'] : []), ...(i === first ? ['current-first'] : []), ...(i === last ? ['current-last'] : [])];
      const number = start.get(key);
      return html`<li${classes.length ? html` class="${classes.join(' ')}"` : ''}>${number
        ? html`<a href="${url(`${pager.href(number)}#${letterAnchor(key)}`)}" title="${i18n('letter_page', number)}">${key.toUpperCase()}</a>`
        : html`<span>${key.toUpperCase()}</span>`}</li>`;
    })}</ol>
  </nav>`;
  }
  return html`${nav}<div class="letter-groups">${groups.map((group, i) => {
    const label = i === 0 && continued ? i18n('letter_continued', group.key.toUpperCase()) : group.key.toUpperCase();
    const heading = level === 2 ? html`<h2 class="letter-heading" id="${letterAnchor(group.key)}">${label}</h2>` : html`<h3 class="letter-heading" id="${letterAnchor(group.key)}">${label}</h3>`;
    return html`<section class="letter-group">${heading}<ul class="letter-list">${group.pages.map(page => html`<li><a class="article-item" href="${url(page.href)}"><span class="title">${displayTitle(site, page)}</span></a></li>`)}</ul></section>`;
  })}</div>`;
}

/** The list on one of its pages (pager). */
export function listContent(site, page, pages, pager) {
  const { params } = page;
  const category = isCategory(page);
  let categoryHeader = '';
  if (category) {
    const children = categoryChildren(site, page.title);
    categoryHeader = html`<nav aria-label="${i18n('ancestor_categories')}" class="category-ancestors">${icon('folder')}${categoryAncestors(site, page)}<span aria-current="page">${displayTitle(site, page)}</span></nav>
    ${children.length ? html`<h2>${i18n('child_categories')}</h2>
    ${categoryCards(site, children)}` : ''}`;
  }
  let body;
  if (pages.length > 10 && (category || (page.kind === 'section' && page.section === 'wiki'))) {
    body = letterGroups(site, pages, pager, category ? 3 : 2);
  } else if (params.lectureIndex) {
    if (params.lectureGroups) {
      body = params.lectureGroups.map(group => {
        const books = group.books.map(path => site.getPage(`/${path}`)).filter(Boolean);
        return books.length ? html`<section class="book-group">
        <h2 class="book-group-title">${group.title}</h2>
        ${bookList(site, books)}
      </section>` : '';
      });
    } else body = bookList(site, pager.pages);
  } else {
    body = html`<ul>${pager.pages.map(item => html`
      <li>
        <a class="article-item" href="${url(item.href)}">
          <span class="title">${displayTitle(site, item)}</span>
        </a>
      </li>`)}
  </ul>`;
  }
  return html`<section class="container list${params.lectureIndex ? ' lecture-index' : ''}">
  <header>
    <h1 class="title"${params.structuredPage ? html` id="page-title"` : ''}>
      <a class="title-link" href="${url(page.permalink)}">${category ? html`<span class="title-prefix">${i18n('categories', 1)}${i18n('taxonomy_separator')}</span>` : ''}${displayTitle(site, page)}</a>
    </h1>
  </header>
  ${page.content.trim() ? html`<div class="list-description">${raw(page.content)}</div>` : ''}
  ${categoryHeader}
  ${category && pages.length ? html`<h2>${i18n('articles')}</h2>` : ''}
  ${body}
  ${pagination(pager)}
</section>`;
}

/** The categories, each top-level one with subcategories in a section of its own. */
export function termsContent(site, page) {
  const groups = [], others = [];
  for (const category of categoryChildren(site, '')) {
    const children = categoryChildren(site, category.title);
    if (children.length) groups.push({ page: category, children });
    else others.push(category);
  }
  return html`<section class="container taxonomy">
  <header>
    <h1 class="title">
      <a class="title-link" href="${url(page.permalink)}">${displayTitle(site, page)}</a>
    </h1>
  </header>
  ${raw(page.content)}
  ${groups.map(group => html`<section class="category-group">
    <h2 class="category-group-title"><a href="${url(group.page.href)}">${displayTitle(site, group.page)}</a><span class="category-group-count">${i18n('category_article_count', { Count: group.page.regularPages.length })}</span></h2>
    ${categoryCards(site, group.children)}
  </section>`)}
  ${others.length ? html`<section class="category-group">
    ${groups.length ? html`<h2 class="category-group-title">${i18n('other_categories')}</h2>` : ''}
    ${categoryCards(site, others)}
  </section>` : ''}
</section>`;
}
