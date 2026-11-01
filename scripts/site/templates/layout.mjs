import { readFileSync } from 'node:fs';
import { renderKaTeX } from 'bananamark';
import { rewriteMath } from '../../shared/math.mjs';
import { t } from '../../shared/i18n.mjs';
import { relURL } from '../../shared/urls.mjs';
import { iconSVG } from '../../shared/icons.mjs';
import { html, raw } from '../html.mjs';
import { collectionLinks, collectionNavigation } from './collections.mjs';
import { pageTocItems } from './page.mjs';
import { searchConfig } from './search.mjs';

/**
 * The frame of every page: the head, the navigation bar, the
 * footer. A page's template gives its title and content; site (the model, scripts/site/model.mjs, with the site's
 * title, language and assets) and page are passed to every template.
 */

/** An interface icon (the site's line icons, icons.mjs). */
export const icon = name => raw(iconSVG(name));

const tikzEnvironment = /\\begin\s*\{\s*(tikzcd|tikzpicture)\s*\}/;
/** A formula in a template (titles), rendered by KaTeX. */
export function math({ tex, display = false, id = '', mode = '' }) {
  const source = rewriteMath(tex);
  if (mode === 'text' || tikzEnvironment.test(tex)) {
    return html`<span${id ? html` id="${id}"` : ''} class="bm-math-rendered${display ? ' bm-math-display' : ''} bm-tikz-source" data-tex="${source}" data-tikz-mode="${mode || 'math'}"></span>`;
  }
  return html`<span${id ? html` id="${id}"` : ''} class="bm-math-rendered${display ? ' bm-math-display' : ''}" data-tex="${source}">${raw(renderKaTeX(source, display))}</span>`;
}

/** Parts of a title or a text: [{ text } or { tex }], formulas rendered. */
export const parts = list => list.map(part => Object.hasOwn(part, 'tex') ? math({ tex: part.tex }) : part.text);

/** A page's title as shown, formulas rendered. */
export function displayTitle(site, page) {
  if (page.metadata.titleParts) return parts(page.metadata.titleParts);
  return page.kind === 'categories' ? t('categories') : page.title;
}

/** A page's title in the <title> element, as plain text. */
export const htmlTitle = (site, page) => `${page.title}${page.metadata.collectionTitle && !page.metadata.collectionHome ? ` - ${page.metadata.collectionTitle}` : ''} - ${site.title}`;

/** The Open Graph and Twitter card metadata. */
function opengraph(site, page) {
  const summary = page.metadata.summaryText ?? '';
  const description = page.description || summary || site.description;
  const article = page.kind === 'page' || page.metadata.collectionRoot;
  return html`<meta property="og:url" content="${page.permalink}">
<meta property="og:site_name" content="${site.title}">
<meta property="og:title" content="${page.title || site.title}">
<meta property="og:description" content="${description}">
<meta property="og:locale" content="${(page.metadata.lang ?? site.language).replace(/-/g, '_')}">
<meta property="og:type" content="${article ? 'article' : 'website'}">${article ? [
    page.section ? html`<meta property="article:section" content="${page.section}">` : '',
    page.metadata.gitLastmod ? html`<meta property="article:modified_time" content="${page.metadata.gitLastmod}">` : '',
  ] : ''}`;
}

/** The page's <head>. */
function head(site, page) {
  const { katex, styles } = site.assets;
  return html`<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="${page.description || site.description}">
${opengraph(site, page)}
<link rel="canonical" href="${page.permalink}">
<link rel="icon" href="${relURL('favicon.ico')}" sizes="32x32">
<link rel="icon" href="${relURL('favicon.svg')}" type="image/svg+xml">
<link rel="stylesheet" href="${katex.href}"${katex.integrity ? html` integrity="${katex.integrity}" crossorigin="anonymous"` : ''}>
<link rel="stylesheet" href="${styles.href}"${styles.integrity ? html` integrity="${styles.integrity}" crossorigin="anonymous"` : ''}>
<script defer src="${relURL('js/inline-punctuation.js')}"></script>
<script defer src="${relURL('js/site.js')}"></script>
<script defer src="${relURL('js/local-time.js')}"></script>`;
}

// The logo inlined, so that its text takes the navigation's colour.
const logo = raw(readFileSync(new URL('../../../site/files/images/logo.svg', import.meta.url), 'utf8')
  .replace(/\s*<title>.*?<\/title>/g, '').replace(/<svg [^>]*?viewBox/, '<svg class="site-logo" aria-hidden="true" focusable="false" viewBox'));

/** The navigation bar. */
function header(site, page, { searchPage }) {
  const toc = pageTocItems(site, page);
  const recent = site.pageAt('/recent-changes'), categories = site.pageAt('/categories');
  const links = html`<a href="${recent.href}">${t('recent_changes_title')}</a>
        ${categories ? html`<a href="${categories.href}">${t('categories')}</a>` : ''}
        ${collectionLinks(site)}`;
  return html`<nav class="navigation" aria-label="${t('main_navigation')}">
  <div class="navigation-inner">
    <a class="navigation-title" href="${site.home.href}" aria-label="${site.title}">${logo}</a>
    ${searchPage ? '' : html`<div class="site-search" role="search" aria-label="${t('site_search')}">
      <button class="icon-button search-back" type="button" aria-label="${t('search_back')}" hidden>${icon('back')}</button>
      <label class="search-field">
        ${icon('search')}
        <span class="sr-only">${t('search_label', { Site: site.title })}</span>
        <input type="text" inputmode="search" enterkeyhint="search" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="search-results" aria-describedby="search-status" placeholder="${t('search_placeholder', { Site: site.title })}" autocomplete="off" spellcheck="false" disabled>
      </label>
      <button class="icon-button search-clear" type="button" aria-label="${t('search_clear')}" hidden>${icon('close')}</button>
      <div class="search-panel" tabindex="-1">
        <p id="search-status" class="search-status" role="status"></p>
        <div id="search-results" class="search-results" role="listbox" aria-label="${t('search_results')}"></div>
        <a class="search-all" href="${relURL('search/')}" hidden></a>
      </div>
    </div>`}
    ${searchConfig(site)}
    <div class="navigation-actions">
      ${toc ? html`<button class="header-toc-button" type="button" aria-expanded="false" aria-controls="header-toc-panel" hidden>${t('table_of_contents')}${icon('chevron')}</button>` : ''}
      ${searchPage ? '' : html`<button class="icon-button search-toggle" type="button" aria-label="${t('search_open')}" aria-expanded="false" hidden>${icon('search')}</button>`}
      <div class="navigation-links">
        ${links}
      </div>
      <details class="navigation-menu">
        <summary class="icon-button"><span class="sr-only">${t('navigation_menu')}</span>${icon('menu')}</summary>
        <div class="navigation-menu-panel">
          ${links}
        </div>
      </details>
    </div>
    ${toc ? html`<div id="header-toc-panel" class="header-toc-panel" hidden></div>` : ''}
  </div>
  ${collectionNavigation(site, page)}
</nav>
${page.metadata.collectionRoot ? html`<script defer src="${relURL('js/collections.js')}"></script>` : ''}`;
}

/** The footer. */
function footer() {
  const link = (address, text) => `<a href="${address}" class="external-link" target="_blank" rel="noopener">${text}${icon('external')}</a>`;
  return html`<footer class="site-footer">
  <div class="container">${raw(t('copyright', { License: link('https://creativecommons.org/licenses/by-sa/4.0/', 'CC BY-SA 4.0'), Source: link('https://github.com/banana-space/banana', 'GitHub') }))}</div>
</footer>`;
}

/**
 * A whole page from its title (text) and content (HTML). searchPage: the results
 * page, which has a search field of its own.
 */
export function baseof(site, page, { title, content, searchPage = false }) {
  const typography = page.metadata.typography;
  return html`<!DOCTYPE html>
<html lang="${page.metadata.lang ?? site.language}"${site.development && page.relative ? html` data-source="${page.relative}"` : ''}${typography && typography.convertChineseFullStop === false ? raw(' data-typography-full-stop="off"') : ''}>

<head>
  <title>${title}</title>
  ${head(site, page)}
</head>

<body class="wrapper">
  ${header(site, page, { searchPage })}

  <main class="content">
    ${content}
  </main>

  ${footer()}
</body>

</html>
`;
}
