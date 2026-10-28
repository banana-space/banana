import { posix } from 'node:path';
import { siteSyntax } from '../shared/syntax.mjs';
import { createRenderer, pathEscape, queryEscape } from 'bananamark';
import { decodeEntities, pageSummary, plainify } from '../shared/summary.mjs';
import { languages } from 'bananamark/languages';
import { pageTypography, typography } from '../shared/typography.mjs';
import { branchPages, pageURL } from '../shared/pages.mjs';
import { baseURL, basePath, relURL } from '../shared/urls.mjs';

/**
 * The site's side of the body renderer (bananamark): what Hugo's templates took from the site — the article
 * index for [[links]], page addresses, category pages, icons, language names — computed from the generated
 * pages' front matter.
 *
 * pages: [{ relative, metadata }] for every page (relative: its path in the generated directory).
 * categories: the category names (each has a page, categories/<name>/index.md, though not among pages).
 * hasFile(relative): whether the generated directory has this file (an image in a page bundle).
 * cache (optional, render-cache.mjs): rendered bodies kept between runs. Rendering asks the rest of the site
 * through the hooks below (an article's address, a page's, the kind of a link, a file beside the page); each
 * cached body keeps the questions and answers, and serves again only while every answer is still the same.
 */


// The site's interface icons (scripts/site/templates/layout.mjs), for the icons links carry.
const iconPaths = {
  folder: '<path d="M3 7a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
  external: '<path d="M14 3h7v7M21 3 10 14M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5"/>',
};
const icon = name => `<svg class="ui-icon link-icon icon-${name}" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${iconPaths[name]}</svg>`;


export function siteRenderer(pages, { categories = [], hasFile, cache }) {
  const byRelative = new Map(), wiki = new Map(), byPath = new Map(), categoryPaths = new Set();
  for (const name of categories) categoryPaths.add(posix.normalize(relURL(pageURL(`categories/${name}/index.md`, {}))).replace(/\/$/, ''));
  for (const { relative, metadata } of pages) {
    const url = pageURL(relative, metadata);
    if (!url) continue;
    const page = { relative, metadata, url, href: pathEscape(relURL(url)) };
    byRelative.set(relative, page);
    // site.GetPage("/<path>"): the page's path without index.md and .md.
    byPath.set(relative.replace(/(?:^|\/)index\.md$/i, '').replace(/\.md$/i, ''), page);
    if (metadata.wikiName) wiki.set(metadata.wikiName, page);
    for (const alias of metadata.wikiAliases ?? []) wiki.set(alias, page);
  }

  // The answers rendering gets from the site (see cache above).
  const answers = {
    // An article's address (an alias's marked ?from=, for the page to say where the reader came from); a missing
    // article's, the page for creating it, with the link's text and the target as written when it has formulas.
    wiki: (name, text, source) => {
      const page = wiki.get(name);
      if (!page) return { url: `${relURL('missing/')}?title=${queryEscape(text)}${source ? `&source=${queryEscape(source)}` : ''}`, missing: true };
      return { url: (page.metadata.wikiAliases ?? []).includes(name) ? `${page.href}?from=${queryEscape(name)}` : page.href };
    },
    page: key => byPath.get(key)?.href,
    // Another host is external; a link to a category page is a category link.
    link: (destination, info) => {
      const page = byRelative.get(info.relative);
      const base = new URL(page ? relURL(page.url) : basePath, baseURL);
      let url;
      try { url = new URL(destination, base); } catch { return ''; }
      const web = /^(?:https?:)?\/\//i.test(destination);
      if (web && url.host.toLowerCase() !== baseURL.host.toLowerCase()) return 'external';
      if (/^[a-z][a-z0-9+.-]*:/i.test(destination) && !web) return '';
      let path;
      try { path = decodeURIComponent(url.pathname); } catch { path = url.pathname; }
      if (!destination.replace(/[?#].*$/, '')) return '';
      return categoryPaths.has(posix.normalize(path).replace(/(.)\/$/, '$1')) ? 'category' : '';
    },
    resource: (path, info) => {
      const page = byRelative.get(info.relative);
      if (!page || !/(?:^|\/)index\.md$/.test(page.relative)) return;
      if (!hasFile(posix.join(posix.dirname(page.relative), path))) return;
      return pathEscape(relURL(page.url) + path);
    },
  };
  // The questions of the body being rendered for the cache, as [hook, arguments, answer] (answers as JSON).
  let questions;
  const ask = (name, args, info) => {
    const answer = answers[name](...args, info);
    questions?.push([name, args, JSON.stringify(answer ?? null)]);
    return answer;
  };
  // Whether the rendering under way used the page's own address (a relative link or a file in its bundle): its
  // result then holds for that page alone (see renderString).
  let usedPage = false;
  const renderer = createRenderer({
    ...siteSyntax,
    // Code blocks in some forty languages besides the dialect's own (rendering only: the editor's checks do without).
    codeLanguages: { ...languages, ...siteSyntax.dialect.codeLanguages },
    typography,
    basePath,
    resolveWikiLink: (target, { text, written = '' }) => ask('wiki', [target, text, written]),
    resolvePageLink: key => { const url = ask('page', [key]); return url ? { url } : undefined; },
    // Links to other hosts open in a new tab, marked with an icon; links to category pages have a folder icon.
    decorateLink: (destination, info) => {
      if (!/^(?:[a-z][a-z0-9+.-]*:|\/|#|$)/i.test(destination)) usedPage = true;
      const kind = ask('link', [destination], info);
      if (kind === 'external') return { className: 'external-link', newTab: true, after: icon('external') };
      if (kind === 'category') return { className: 'category-link', before: icon('folder') };
    },
    resolveImage: (path, info) => {
      usedPage = true;
      return ask('resource', [path], info);
    },
  });

  // A page as the renderer sees it; the text bananamark writes in it (reference text and the like) follows its language.
  // isPage: a page alone, not a section, a book or a chapter (with pages below it), nor a category's page.
  const branches = branchPages(pages.map(page => page.relative));
  const pageInfo = relative => ({
    file: relative, relative, section: relative.includes('/') ? relative.split('/')[0] : '',
    lang: byRelative.get(relative)?.metadata.lang ?? 'zh-cn', isPage: !branches.has(relative) && !relative.startsWith('categories/'),
    typography: pageTypography(byRelative.get(relative)?.metadata),
  });

  // Front matter text rendered for one page holds for every page alike (the same section, language, typography and
  // kind of page): a navbox's text is the same on each of the pages that show it, some 1300 navboxes from a few
  // dozen. A document's key: its text and nodes, worked out once per document object.
  const strings = new Map(), documentKeys = new WeakMap();
  const documentKey = document => {
    if (typeof document === 'string') return document;
    let key = documentKeys.get(document);
    if (key === undefined) documentKeys.set(document, key = JSON.stringify([document.markdown, document.nodes]));
    return key;
  };

  return {
    /**
     * Text of a page's front matter (a notice, a navbox, a heading in the table of contents) as HTML, as Hugo's
     * .Page.RenderString rendered it: display "inline" (a single paragraph without its <p>) or "block". Results that
     * do not depend on the page's own address are cached for the renderer's life (the site as it is).
     */
    renderString(relative, document, display = 'inline') {
      const info = pageInfo(relative);
      const key = JSON.stringify([display, info.section, info.isPage, info.lang, info.typography, documentKey(document)]);
      const known = strings.get(key);
      if (known !== undefined) return known;
      usedPage = false;
      const html = renderer.renderFragment(document, info, { block: display === 'block' });
      if (!usedPage) strings.set(key, html);
      return html;
    },
    /**
     * A generated page's body from its document (bananamark's { markdown, nodes }): { html, headings, tree, description }, tree the headings as Hugo's .Fragments.Headings nested
     * them (tableofcontents.Builder: a row per level-1 heading, each heading under the last one a level above, an
     * empty heading of level 0 filling a skipped level).
     */
    render(relative, document) {
      const info = pageInfo(relative);
      if (!cache) return renderBody(document, info);
      const key = cache.key([info.section, info.isPage, info.lang, info.typography, document.markdown, document.nodes]);
      const known = cache.get(key);
      if (known && known.questions.every(([name, args, answer]) => JSON.stringify(answers[name](...args, info) ?? null) === answer)) return known.result;
      questions = [];
      try {
        const result = renderBody(document, info);
        cache.set(key, { result, questions });
        return result;
      } finally { questions = undefined; }
    },
    pages: byRelative,
  };
  /**
   * A generated page's body from its document (bananamark's { markdown, nodes }) and what the renderer is told about
   * the page: see render.
   */
  function renderBody(document, info) {
    const { html, headings } = renderer.renderDocument(document, info);
    // The description (the page's Open Graph metadata), from Hugo's summary of the page. Hugo passed it on as HTML,
    // its entities kept and read by the browser: here as text, with them decoded, on one line and trimmed.
    // Without the notices, which Hugo's pages had outside the body; code blocks without their highlighting, as Hugo
    // saw them (the highlighting came after it); formulas without the span bananamark keeps their punctuation in
    // (bm-math-end: KaTeX's last box back in place, the punctuation after the formula).
    const unglued = html.replace(/<\/span><\/span><span class="bm-math-end"><span class="katex"><span class="katex-html" aria-hidden="true">((?:(?!bm-math-end)[\s\S])*?)<\/span><\/span>([^<>]+)<\/span><\/span>/g, '$1</span></span></span>$2');
    const withoutNotices = unglued.replace(/<aside class="notice [\s\S]*?<\/aside>\n?/g, '');
    const unhighlighted = withoutNotices.replace(/(<pre class="bm-code-block"[^>]*><code>)([\s\S]*?)(?=<\/code><\/pre>)/g, (_, open, code) => open + code.replace(/<\/?span\b[^>]*>/g, ''));
    const description = decodeEntities(plainify(pageSummary(unhighlighted).replace(/<span class="katex-mathml">[\s\S]*?<\/math><\/span>/g, ''))).replace(/\s*\n\s*/g, ' ').trim();
    const rows = [];
    let row = -1;
    for (const { level, id } of headings) {
      if (level === 1 || row === -1) row++;
      while (rows.length <= row) rows.push({ level: 0, id: '', headings: [] });
      const heading = { level, id, headings: [] };
      if (level === 1) { rows[row] = heading; continue; }
      let parent = rows[row];
      for (let i = 1; i < level - 1; i++) {
        if (!parent.headings.length) parent.headings.push({ level: 0, id: '', headings: [] });
        parent = parent.headings.at(-1);
      }
      parent.headings.push(heading);
    }
    return { html, headings, tree: rows, description };
  }
}
