import { i18n } from '../../shared/i18n.mjs';
import { html, url } from '../html.mjs';
import { displayTitle, icon, math } from './layout.mjs';

/**
 * Lectures and guides: the links in the navigation bar, a page's breadcrumbs,
 * the book's outline beside it, its children and the previous and next pages after it, and the lecture index's
 * list of books.
 */

/** collections/links.html */
export function collectionLinks(site) {
  const books = site.getPage('/books'), help = site.getPage('/help');
  return html`${books ? html`<a href="${url(books.href)}">${i18n('lectures')}</a>` : ''}
${help ? html`<a href="${url(help.href)}">${i18n('guides')}</a>` : ''}`;
}

/** collections/show-sidebar.html: the root shows the same tree in its own contents. */
export const showCollectionSidebar = page => Boolean(page.params.collectionRoot)
  && !(page.params.collectionHome && page.params.collectionChildren?.length && page.params.childrenToc !== false);

/** collections/tree.html */
function tree(site, page, items, depth = 32) {
  return html`<ul class="collection-tree directory-tree">${(items ?? []).map(node => {
    const item = site.getPage(`/${node.page}`);
    if (!item) return '';
    const current = item.params.collectionPage === page.params.collectionPage;
    const ancestor = (page.params.collectionAncestors ?? []).includes(item.params.collectionPage);
    const link = html`<a class="collection-item directory-item${node.number ? ' is-numbered' : ''}" href="${url(item.href)}"${current ? html` aria-current="page"` : ''}>${node.number ? html`<span class="collection-number directory-number">${node.number}</span> ` : ''}<span class="collection-item-title directory-item-title">${displayTitle(site, item)}</span></a>`;
    if (node.children?.length && depth > 1) {
      return html`<li><details${current || ancestor ? html` open` : ''}>
        <summary><span class="collection-chevron directory-chevron" aria-hidden="true">${icon('chevron')}</span>${link}</summary>
        ${tree(site, page, node.children, depth - 1)}
      </details></li>`;
    }
    return html`<li>${link}</li>`;
  })}</ul>`;
}

/** collections/directory.html */
export function collectionDirectory(site, page) {
  const root = site.getPage(`/${page.params.collectionRoot}`);
  return html`${root ? html`<p class="collection-tree-title"><a href="${url(root.href)}"${page.params.collectionHome ? html` aria-current="page"` : ''}>${displayTitle(site, root)}</a></p>` : ''}<nav aria-label="${page.params.collectionTitle}">${tree(site, page, page.params.collectionContents, 32)}</nav>`;
}

/** collections/navigation.html: a book page's breadcrumbs, and the drawer with the outline on narrow screens. */
export function collectionNavigation(site, page) {
  const { params } = page;
  if (!params.collectionRoot || params.collectionHome) return '';
  const numbered = item => item.params.collectionNumber ? `${item.params.collectionNumber} ` : '';
  return html`<div class="collection-navigation">
  ${showCollectionSidebar(page) ? html`<details class="collection-disclosure" id="collection-drawer">
    <summary class="icon-button" aria-label="${i18n('collection_open')}" data-open-label="${i18n('collection_open')}" data-close-label="${i18n('collection_close')}"><span class="drawer-open-icon">${icon('sidebar')}</span><span class="drawer-close-icon">${icon('close')}</span></summary>
    <div class="collection-drawer-panel">${collectionDirectory(site, page)}</div>
  </details>` : ''}
  <nav class="collection-breadcrumbs" aria-label="${i18n('collection_navigation')}">${(params.collectionAncestors ?? []).map(path => {
    const item = site.getPage(`/${path}`);
    return item ? html`<a href="${url(item.href)}">${item.params.collectionHome && item.params.collectionKind === 'lecture' ? icon('book') : ''}${numbered(item)}${displayTitle(site, item)}</a><span class="breadcrumb-separator" aria-hidden="true">›</span>` : '';
  })}<span aria-current="page">${numbered(page)}${displayTitle(site, page)}</span></nav>
</div>`;
}

/** collections/footer.html: the page's children, then the previous and the next page. */
export function collectionFooter(site, page) {
  const { params } = page;
  let children = '';
  if (params.collectionChildren?.length && params.childrenToc !== false) {
    let depth = params.collectionHome ? 32 : 2;
    if (params.childrenToc && typeof params.childrenToc === 'object' && params.childrenToc.depth !== undefined) depth = Number.parseInt(params.childrenToc.depth, 10);
    if (!(depth >= 1)) throw new Error(`${page.relative}: childrenToc.depth 必须是正整数`);
    children = html`<nav class="collection-children" aria-label="${params.collectionTitle}">
    <p class="collection-tree-title">${i18n('collection_children')}</p>
    ${tree(site, page, params.collectionChildren, depth)}
  </nav>`;
  }
  const neighbour = (path, rel, label) => {
    const item = path && site.getPage(`/${path}`);
    return item ? html`<a rel="${rel}" href="${url(item.href)}"><span>${i18n(label)}</span>${item.params.collectionNumber ? `${item.params.collectionNumber} ` : ''}${displayTitle(site, item)}</a>` : '';
  };
  return html`${children}<nav class="collection-pagination" aria-label="${i18n('collection_navigation')}">${neighbour(params.collectionPrevious, 'prev', 'collection_previous')}${neighbour(params.collectionNext, 'next', 'collection_next')}</nav>`;
}

/** collections/book-list.html: the lecture index's books. */
export function bookList(site, books) {
  return html`<ul class="book-list">
  ${books.map(book => {
    const { params } = book;
    const meta = [];
    if (params.collectionAuthors?.length) meta.push(params.collectionAuthors.join(i18n('book_author_separator')));
    if (params.collectionPages) meta.push(i18n('book_pages', params.collectionPages));
    if (params.collectionCharacters) {
      // Nearest whole 千字 below 9500 characters (at least 1), nearest whole 万字 from there.
      const count = params.collectionCharacters;
      meta.push(count >= 9500 ? i18n('book_characters_wan', Math.round(count / 10000)) : i18n('book_characters_qian', Math.max(1, Math.round(count / 1000))));
    }
    return html`<li class="book-item">
      <h3 class="book-item-title"><a href="${url(book.href)}">${displayTitle(site, book)}</a></h3>
      ${meta.length ? html`<p class="book-item-meta">${meta.join(' · ')}</p>` : ''}
      ${params.collectionDescriptionParts?.length
        ? html`<p class="book-item-description">${params.collectionDescriptionParts.map(part => Object.hasOwn(part, 'tex') ? math({ tex: part.tex }) : part.text)}</p>`
        : book.description ? html`<p class="book-item-description">${book.description}</p>` : ''}
    </li>`;
  })}
</ul>`;
}
