import { i18n } from '../../shared/i18n.mjs';
import { relURL } from '../../shared/urls.mjs';
import { pathEscape } from 'bananamark';
import { escape, html, json, queryEscape, raw, url } from '../html.mjs';
import { collectionDirectory, collectionFooter, showCollectionSidebar } from './collections.mjs';
import { displayTitle, icon, parts } from './layout.mjs';

/**
 * A page with a body: its title, the collection's sidebar, the body (its notices are tags in it, scripts/shared/tags.mjs)
 * with its table of contents, navboxes, term translations and the footer with its categories and dates.
 */

/** The table of contents' items, from the prebuild's headings. */
function sectionTocItems(page, headings, numbered) {
  const depth = page.params.tocDepth === undefined ? 2 : Number.parseInt(page.params.tocDepth, 10);
  return (headings ?? []).map(heading => {
    if (heading.level >= 2 && heading.level <= depth + 1) {
      const title = (page.params.referenceHeadings?.[heading.id] ?? '').replace(/<\/?a\b[^>]*>/gi, '');
      const number = numbered ? page.params.sectionNumbers?.[heading.id] ?? '' : '';
      const children = sectionTocItems(page, heading.headings, numbered);
      const link = html`<a class="toc-item directory-item${number ? ' is-numbered' : ''}" href="${url(`#${pathEscape(heading.id)}`)}">${number ? html`<span class="toc-section-number directory-number">${number}</span> ` : ''}<span class="toc-item-title directory-item-title">${raw(title)}</span></a>`;
      return children
        ? html`<li class="toc-level-${heading.level}"><details class="toc-branch" open><summary><span class="directory-chevron" aria-hidden="true">${icon('chevron')}</span>${link}</summary><ul class="toc-list directory-tree">${raw(children)}</ul></details></li>`
        : html`<li class="toc-level-${heading.level}">${link}</li>`;
    }
    return heading.level < 2 && heading.headings ? raw(sectionTocItems(page, heading.headings, numbered)) : '';
  }).join('');
}

/** The items of a page's table of contents, '' when it has none (fewer than two). */
export function pageTocItems(site, page) {
  const { params } = page;
  const shown = (page.kind === 'page' || params.collectionRoot || (params.structuredPage && (page.kind === 'home' || page.kind === 'section') && page.section !== 'wiki' && !params.lectureIndex)) && params.toc !== false;
  if (!shown) return '';
  const items = sectionTocItems(page, params.tocHeadings, Boolean(params.structuredPage));
  return (items.match(/<a\b/g) ?? []).length < 2 ? '' : items;
}

/** A page's table of contents. */
const pageToc = items => html`<aside class="toc-shell" aria-label="${i18n('table_of_contents')}">
  <details class="toc-disclosure" open>
    <summary><span id="toc-label">${i18n('table_of_contents')}</span>${icon('chevron')}</summary>
    <p class="toc-sidebar-title" aria-hidden="true">${i18n('table_of_contents')}</p>
    <nav id="TableOfContents" aria-label="${i18n('table_of_contents')}"><ul class="toc-list directory-tree">${raw(items)}</ul></nav>
  </details>
</aside>`;

const unescapeHTML = text => text.replace(/&(amp|lt|gt|quot|#39|#34);/g, (_, name) => ({ amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'", '#34': '"' })[name]);
/** Links to the page itself become <strong class="navbox-current">. */
function navboxText(page, text) {
  const current = [page.href, page.permalink];
  let result = text;
  for (const [anchor, inner] of text.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/g)) {
    for (const [attribute] of anchor.matchAll(/href="[^"]*"/g)) {
      const href = unescapeHTML(attribute.replace(/^href="|"$/g, '')).replace(/\?from=[^&#]*$/, '');
      if (current.includes(href)) result = result.replace(anchor, `<strong class="navbox-current" aria-current="page">${inner}</strong>`);
    }
  }
  return raw(result);
}

/** A navbox. */
const navbox = (page, box) => html`<nav class="navbox" aria-label="${i18n('navbox_label', { Name: box.name })}">
  <details${box.collapsed ? '' : raw(' open')}>
    <summary>${navboxText(page, box.title)}<span class="navbox-toggle" data-expand="${i18n('navbox_expand')}" data-collapse="${i18n('navbox_collapse')}" aria-hidden="true"></span></summary>
    <div class="navbox-scroll" role="region" aria-label="${i18n('navbox_table', { Name: box.name })}" tabindex="0">
      <table>
        <tbody>
          ${(box.rows ?? []).map(row => html`<tr>
            ${(row.cells ?? []).map(cell => html`<th scope="${cell.rowspan > 1 ? 'rowgroup' : 'row'}"${cell.rowspan > 1 ? html` rowspan="${cell.rowspan}"` : ''}${cell.colspan > 1 ? html` colspan="${cell.colspan}"` : ''}>${navboxText(page, cell.text)}</th>`)}
            <td><ul class="navbox-items">${(row.items ?? []).map(item => html`<li>${navboxText(page, item)}</li>`)}</ul></td>
          </tr>`)}
        </tbody>
      </table>
    </div>
  </details>
</nav>`;

/** The parts of a term translation. */
const termParts = (list, text) => list ? parts(list) : text;

/** The term translations of a page. */
function termTranslations(site, page, terms) {
  const heading = (page.params.categories ?? []).includes('人物') ? i18n('name_translations') : i18n('term_translations');
  return html`<section class="terms" aria-label="${heading}">
  <p class="terms-title">${heading}</p>${terms.map(term => html`<p class="term-entry"><strong class="term-title"${term.lang ? html` lang="${term.lang}"` : ''}>${termParts(term.titleParts, term.title)}</strong>${(term.entries ?? []).map(entry => html`<span class="term-separator" data-typography="boundary" aria-hidden="true"></span><span class="term-language" data-typography="boundary">${entry.label}</span> <span lang="${entry.lang}">${(entry.variants ?? []).map((variant, index) => html`${index ? i18n('term_variant_separator') : ''}${variant.ruby
    ? variant.ruby.map(piece => piece.reading ? html`<ruby>${piece.text}<rp> (</rp><rt>${piece.reading}</rt><rp>) </rp></ruby>` : termParts(piece.parts, piece.text))
    : termParts(variant.parts, variant.text)}${variant.gender ? html`&nbsp;<span class="term-gender" title="${i18n(`gender_${variant.gender}`)}">(${variant.gender})</span>` : ''}${variant.note ? html` <span class="term-note" lang="${site.language}">(${variant.note})</span>` : ''}`)}</span>`)}</p>`)}
</section>`;
}

/** A link to a category. */
export const categoryLink = (site, term) => html`<a class="category-link" href="${url(term.href)}">${term.kind === 'term' ? icon('folder') : ''}${term.kind === 'taxonomy' ? i18n('categories') : displayTitle(site, term)}</a>`;

const two = number => String(number).padStart(2, '0');
/** A page's footer: its categories, its dates, the links to its history and to edit it. */
function articleFooter(site, page) {
  const direct = page.params.directCategories;
  const terms = direct ? page.terms.filter(term => direct.includes(term.title)) : page.terms;
  const modified = page.params.gitLastmod;
  const parts = [];
  if (terms.length) parts.push(html`<nav class="article-categories" aria-label="${i18n('article_categories')}">
    ${terms.map(term => categoryLink(site, term))}
  </nav>`);
  let meta = '';
  if (modified) {
    const time = new Date(modified);
    const fields = { Year: time.getUTCFullYear(), Month: time.getUTCMonth() + 1, Day: time.getUTCDate(), Hour: two(time.getUTCHours()), Minute: two(time.getUTCMinutes()) };
    const display = i18n('lastmod_utc_datetime', { Date: i18n('lastmod_datetime', fields) });
    const format = i18n('lastmod_datetime', { Year: '{year}', Month: '{month}', Day: '{day}', Hour: '{hour}', Minute: '{minute}' });
    const instant = `${time.getUTCFullYear()}-${two(time.getUTCMonth() + 1)}-${two(time.getUTCDate())}T${two(time.getUTCHours())}:${two(time.getUTCMinutes())}:${two(time.getUTCSeconds())}Z`;
    const date = `<time datetime="${instant}" data-local-time data-format="${escape(format)}">${escape(display)}</time>`;
    meta += html`<p class="last-modified">${raw(i18n('lastmod', { Date: date }))}</p>`;
  }
  const path = queryEscape(page.relative);
  meta += html`<p class="edit-page">${modified ? html`<a href="${url(`${relURL('history/')}?path=${path}`)}" rel="nofollow">${i18n('history_link')}</a>` : ''}
    <a href="${url(`${relURL('edit/')}?path=${path}`)}" rel="nofollow">${i18n('edit_this_page')}</a>
  </p>`;
  parts.push(html`<div class="article-meta">
  ${raw(meta)}
  </div>`);
  return html`<footer class="article-footer">
  ${parts}
</footer>`;
}

/** A page with a body. */
export function pageContent(site, page) {
  const { params } = page;
  const sidebar = showCollectionSidebar(page);
  // The body, typeset by bananamark already, marked for finishing to leave its text alone (site/finish.mjs).
  const body = text => text.trim() ? `<div data-typeset-body>${text}</div>` : text;
  let content = body(page.content);
  const items = pageTocItems(site, page);
  if (items) {
    const first = page.content.match(/<h[23]\b[^>]*>/);
    if (first) content = body(page.content.slice(0, first.index)) + pageToc(items) + body(page.content.slice(first.index));
  }
  return html`<section class="container page${params.collectionRoot ? ' collection-page' : ''}${sidebar ? ' collection-has-sidebar' : ''}">
  <article>
    <header>
      ${page.title ? html`<h1 class="title" id="page-title">
        <a class="title-link" href="${url(page.permalink)}">
          ${params.collectionNumber ? html`<span class="bm-section-number">${params.collectionNumber}</span> ` : ''}${displayTitle(site, page)}
        </a>
      </h1>` : ''}
    </header>
    ${page.section === 'wiki' && params.wikiAliases?.length ? html`<p id="redirect-source" class="redirect-source" data-aliases="${String(json(params.wikiAliases))}" hidden>${raw(i18n('redirected_from', { Name: '<span></span>' }))}</p>
      <script defer src="${url(relURL('js/redirect-source.js'))}"></script>` : ''}
    ${sidebar ? html`<aside class="collection-sidebar" aria-label="${params.collectionTitle}"><div class="collection-sidebar-inner">${collectionDirectory(site, page)}</div></aside>` : ''}
    ${raw(content)}
    ${params.collectionRoot ? collectionFooter(site, page) : ''}
    ${params.structuredPage ? [
      (params.resolvedNavboxes ?? []).map(box => navbox(page, box)),
      params.termTranslations?.length ? termTranslations(site, page, params.termTranslations) : '',
      page.kind === 'home' ? '' : articleFooter(site, page),
    ] : ''}
  </article>
</section>`;
}
