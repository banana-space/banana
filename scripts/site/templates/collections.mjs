import { t } from '../../shared/i18n.mjs';
import { html } from '../html.mjs';
import { displayTitle, icon, math } from './layout.mjs';

/**
 * Lectures and guides: the links in the navigation bar, a page's breadcrumbs,
 * the book's outline beside it, its children and the previous and next pages after it, and the lecture index's
 * list of books.
 */

/** collections/links.html */
export function collectionLinks(site) {
  const books = site.pageAt('/books'), help = site.pageAt('/help');
  return html`${books ? html`<a href="${books.href}">${t('lectures')}</a>` : ''}
${help ? html`<a href="${help.href}">${t('guides')}</a>` : ''}`;
}

/** collections/show-sidebar.html: the root shows the same tree in its own contents. */
export const showCollectionSidebar = page => Boolean(page.metadata.collectionRoot)
  && !(page.metadata.collectionHome && page.metadata.collectionChildren?.length && page.metadata.childrenToc !== false);

/** collections/tree.html */
function tree(site, page, items, depth = 32) {
  return html`<ul class="collection-tree directory-tree">${(items ?? []).map(node => {
    const item = site.pageAt(`/${node.page}`);
    if (!item) return '';
    const current = item.metadata.collectionPage === page.metadata.collectionPage;
    const ancestor = (page.metadata.collectionAncestors ?? []).includes(item.metadata.collectionPage);
    const link = html`<a class="collection-item directory-item${node.number ? ' is-numbered' : ''}" href="${item.href}"${current ? html` aria-current="page"` : ''}>${node.number ? html`<span class="collection-number directory-number">${node.number}</span> ` : ''}<span class="collection-item-title directory-item-title">${displayTitle(site, item)}</span></a>`;
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
  const root = site.pageAt(`/${page.metadata.collectionRoot}`);
  return html`${root ? html`<p class="collection-tree-title"><a href="${root.href}"${page.metadata.collectionHome ? html` aria-current="page"` : ''}>${displayTitle(site, root)}</a></p>` : ''}<nav aria-label="${page.metadata.collectionTitle}">${tree(site, page, page.metadata.collectionContents, 32)}</nav>`;
}

/** collections/navigation.html: a book page's breadcrumbs, and the drawer with the outline on narrow screens. */
export function collectionNavigation(site, page) {
  const { metadata } = page;
  if (!metadata.collectionRoot || metadata.collectionHome) return '';
  const numbered = item => item.metadata.collectionNumber ? `${item.metadata.collectionNumber} ` : '';
  return html`<div class="collection-navigation">
  ${showCollectionSidebar(page) ? html`<details class="collection-disclosure" id="collection-drawer">
    <summary class="icon-button" aria-label="${t('collection_open')}" data-open-label="${t('collection_open')}" data-close-label="${t('collection_close')}"><span class="drawer-open-icon">${icon('sidebar')}</span><span class="drawer-close-icon">${icon('close')}</span></summary>
    <div class="collection-drawer-panel">${collectionDirectory(site, page)}</div>
  </details>` : ''}
  <nav class="collection-breadcrumbs" aria-label="${t('collection_navigation')}">${(metadata.collectionAncestors ?? []).map(path => {
    const item = site.pageAt(`/${path}`);
    return item ? html`<a href="${item.href}">${item.metadata.collectionHome && item.metadata.collectionKind === 'lecture' ? icon('book') : ''}${numbered(item)}${displayTitle(site, item)}</a><span class="breadcrumb-separator" aria-hidden="true">›</span>` : '';
  })}<span aria-current="page">${numbered(page)}${displayTitle(site, page)}</span></nav>
</div>`;
}

/** collections/footer.html: the page's children, then the previous and the next page. */
export function collectionFooter(site, page) {
  const { metadata } = page;
  let children = '';
  if (metadata.collectionChildren?.length && metadata.childrenToc !== false) {
    let depth = metadata.collectionHome ? 32 : 2;
    if (metadata.childrenToc && typeof metadata.childrenToc === 'object' && metadata.childrenToc.depth !== undefined) depth = Number.parseInt(metadata.childrenToc.depth, 10);
    if (!(depth >= 1)) throw new Error(`${page.relative}: childrenToc.depth 必须是正整数`);
    children = html`<nav class="collection-children" aria-label="${metadata.collectionTitle}">
    <p class="collection-tree-title">${t('collection_children')}</p>
    ${tree(site, page, metadata.collectionChildren, depth)}
  </nav>`;
  }
  const neighbour = (path, rel, label) => {
    const item = path && site.pageAt(`/${path}`);
    return item ? html`<a rel="${rel}" href="${item.href}"><span>${t(label)}</span>${item.metadata.collectionNumber ? `${item.metadata.collectionNumber} ` : ''}${displayTitle(site, item)}</a>` : '';
  };
  return html`${children}<nav class="collection-pagination" aria-label="${t('collection_navigation')}">${neighbour(metadata.collectionPrevious, 'prev', 'collection_previous')}${neighbour(metadata.collectionNext, 'next', 'collection_next')}</nav>`;
}

/** collections/book-list.html: the lecture index's books. */
export function bookList(site, books) {
  return html`<ul class="book-list">
  ${books.map(book => {
    const { metadata } = book;
    const meta = [];
    if (metadata.collectionAuthors?.length) meta.push(metadata.collectionAuthors.join(t('book_author_separator')));
    if (metadata.collectionPages) meta.push(t('book_pages', { Count: metadata.collectionPages }));
    if (metadata.collectionCharacters) {
      // Nearest whole 千字 below 9500 characters (at least 1), nearest whole 万字 from there.
      const count = metadata.collectionCharacters;
      meta.push(count >= 9500 ? t('book_characters_wan', { Count: Math.round(count / 10000) }) : t('book_characters_qian', { Count: Math.max(1, Math.round(count / 1000)) }));
    }
    return html`<li class="book-item">
      <h3 class="book-item-title"><a href="${book.href}">${displayTitle(site, book)}</a></h3>
      ${meta.length ? html`<p class="book-item-meta">${meta.join(' · ')}</p>` : ''}
      ${metadata.collectionDescriptionParts?.length
        ? html`<p class="book-item-description">${metadata.collectionDescriptionParts.map(part => Object.hasOwn(part, 'tex') ? math({ tex: part.tex }) : part.text)}</p>`
        : book.description ? html`<p class="book-item-description">${book.description}</p>` : ''}
    </li>`;
  })}
</ul>`;
}
