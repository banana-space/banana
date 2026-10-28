import { join } from 'node:path';
import { i18n } from '../shared/i18n.mjs';
import { config } from '../shared/config.mjs';
import { baseURL } from '../shared/urls.mjs';
import { baseof, htmlTitle } from './templates/layout.mjs';
import { pageContent } from './templates/page.mjs';
import { listContent, listPages, paginate, termsContent } from './templates/list.mjs';
import { homeContent } from './templates/home.mjs';
import { searchPage } from './templates/search.mjs';
import { diffContent, editorContent, editorNames, historyContent, missingContent, notFoundContent, recentChangesContent } from './templates/special.mjs';
import { aliasRedirects, sitemap } from './templates/outputs.mjs';
import { dataAsset } from './assets.mjs';

/**
 * The site generator: every page of the site, from the prebuild's generated pages (.build/content/), as files
 * (path in the output directory → text), one template function each (scripts/site/templates/, once Hugo's).
 */


/** Hugo's alias page: a redirect to address. */
const redirect = (site, address) => `<!DOCTYPE html>
<html lang="${site.language}">
	<head>
		<title>${address}</title>
		<link rel="canonical" href="${address}">
		<meta charset="utf-8">
		<meta http-equiv="refresh" content="0; url=${address}">
	</head>
</html>
`;

/** The files of one page (path in the output → text): its page and, for a paginated list, the further pages (page/2/ …). */
export function renderPage(site, page) {
  const files = [];
  const path = url => join(decodeURI(url), 'index.html').replace(/^\//, '');
  const out = (url, title, content, options) => files.push([path(url), String(baseof(site, page, { title, content, ...options }))]);
  if (page.kind === 'home') out(page.url, site.title, homeContent(site, page));
  else if (page.kind === 'taxonomy') out(page.url, `${i18n('categories')} - ${site.title}`, termsContent(site, page));
  else if (page.kind === 'page') {
    const layouts = {
      search: () => [`${i18n('search_page_title')} - ${site.title}`, searchPage(site, page), { searchPage: true }],
      missing: () => [`${i18n('missing_article')} - ${site.title}`, missingContent(site, page)],
      'recent-changes': () => [`${i18n('recent_changes_title')} - ${site.title}`, recentChangesContent(site, page)],
      history: () => [`${i18n('history_page_title')} - ${site.title}`, historyContent(site, page)],
      diff: () => [`${i18n('diff_page_title')} - ${site.title}`, diffContent(site, page)],
      editor: () => [`${i18n('editor_page_title')} - ${site.title}`, editorContent(site, page)],
    };
    const layout = layouts[page.params.layout];
    if (layout) out(page.url, ...layout());
    else out(page.url, htmlTitle(site, page), pageContent(site, page));
  } else {
    // A section or a category.
    const title = `${page.kind === 'term' ? `${i18n('categories', 1)}${i18n('taxonomy_separator')}` : ''}${htmlTitle(site, page)}`;
    const { params } = page;
    if ((params.structuredPage && page.section !== 'wiki' && !params.lectureIndex) || params.collectionRoot) out(page.url, title, pageContent(site, page));
    else {
      const pages = listPages(site, page);
      const first = paginate(page, pages, 1);
      for (let number = 1; number <= first.total; number++) {
        const pager = paginate(page, pages, number);
        out(number === 1 ? page.url : `${page.url}page/${number}/`, title, listContent(site, page, pages, pager));
      }
      // Hugo's page/1/: a redirect to the list.
      files.push([path(`${page.url}page/1/`), redirect(site, page.permalink)]);
    }
  }
  return files;
}

/**
 * The site the templates take, from the model (model.mjs): with the site's settings (site.yaml), the assets'
 * addresses and the editor's names, a data file (dataFiles: path → content) named by its fingerprint.
 */
export function createSite(model, { assets, development = false }) {
  const site = {
    ...model, title: config.title, description: config.description ?? '', repository: config.repository, language: config.language ?? 'zh-cn',
    baseURL, assets: { ...assets }, development, dataFiles: new Map(),
  };
  site.assets.editorNames = dataAsset(site.dataFiles, 'js/editor-names.json', editorNames(site), development);
  return site;
}

/** The site's files other than its pages: the 404 page, the alias redirects, the sitemap. */
export function siteFiles(site) {
  const files = new Map();
  files.set('404.html', String(baseof(site, { relative: '', params: {}, title: '404 Page not found', description: '', permalink: `${baseURL.origin}${baseURL.pathname}404.html`, kind: '404', section: '' }, { title: site.title, content: notFoundContent(site) })));
  files.set('alias-redirects.txt', aliasRedirects(site));
  files.set('sitemap.xml', sitemap(site));
  return files;
}

/**
 * The files of the pages' bundles (images and the like beside a page's index.md in the generated directory),
 * published beside the page: Map of path in the output → path in content.
 */
export function pageResources(site, content, relatives) {
  const result = new Map();
  for (const relative of relatives) {
    const parts = relative.split('/');
    for (let depth = parts.length - 1; depth >= 0; depth--) {
      const directory = parts.slice(0, depth).join('/');
      const prefix = directory ? `${directory}/` : '';
      // A page alone owns the files below it; a page with pages below it (a section, a book, a chapter) only those
      // directly in its directory, the rest being its pages'.
      const owner = site.pages.find(page => page.relative === `${prefix}index.md`);
      if (!owner || (owner.kind !== 'page' && depth !== parts.length - 1)) continue;
      if (owner.rendered && owner.url) result.set(join(decodeURI(owner.url), relative.slice(prefix.length)).replace(/^\//, ''), join(content, relative));
      break;
    }
  }
  return result;
}

