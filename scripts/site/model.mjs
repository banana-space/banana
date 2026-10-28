import { parse } from 'yaml';
import { isPublished } from '../prebuild/collections.mjs';
import { branchPages, pageURL } from '../shared/pages.mjs';
import { pageHref, pagePermalink } from '../shared/urls.mjs';

/**
 * The site as the templates see it: the pages the prebuild generated (.build/content/: front matter and the body,
 * rendered by bananamark), with what Hugo worked out from them.
 *
 * A page: { relative, path (as site.GetPage takes it: "/wiki/群"), kind (home, section, page, taxonomy, term),
 * section (its first-level section: "wiki", or "" for the home page and pages outside one), params (its front
 * matter), title, description, content (the body's HTML), url (its address path, unescaped), href (RelPermalink),
 * permalink, rendered and listed (build.render and build.list) }, and its relations: parent, pages (as .Pages),
 * regularPages (.RegularPages), terms (for a page with categories, their term pages).
 *
 * The site: { pages (all of them), byPath, home, getPage(path), listed (site.Pages), regularPages
 * (site.RegularPages) }.
 */

/** A generated page's text: { params, content }. */
export function parsePage(text) {
  const match = text.match(/^---\n(?:([\s\S]*?)\n)?---(?:\n|$)([\s\S]*)$/);
  return match ? { params: parse(match[1] ?? '') ?? {}, content: match[2] } : { params: {}, content: text };
}

/**
 * A generated page's front matter from its bytes, without decoding the body: { params, offset } (offset: where the
 * body starts, in bytes). Strings sliced from a page's text keep all of it in memory: the site's bodies are some
 * 400 MB.
 */
export function frontMatter(bytes) {
  const { yaml, offset } = frontMatterBounds(bytes);
  return { params: yaml === undefined ? {} : parse(yaml) ?? {}, offset };
}

/** Where a generated page's front matter is in its bytes: { yaml (its text, undefined without one), offset (of the body) }. */
export function frontMatterBounds(bytes) {
  if (bytes.subarray(0, 4).toString('latin1') !== '---\n') return { offset: 0 };
  for (let at = bytes.indexOf('\n---', 3); at >= 0; at = bytes.indexOf('\n---', at + 1)) {
    const after = at + 4;
    if (after < bytes.length && bytes[after] !== 0x0a) continue;
    return { yaml: at > 3 ? bytes.subarray(4, at).toString('utf8') : '', offset: Math.min(after + 1, bytes.length) };
  }
  return { offset: 0 };
}

/** The page's path as site.GetPage takes it, from its relative path: "/wiki/群", "/" for the home page. */
const pagePath = relative => `/${relative.replace(/(?:^|\/)index\.md$/, '').replace(/\.md$/, '')}`.replace(/\/$/, '') || '/';

/**
 * The site from its pages: [{ relative, text }] or [{ relative, params, content }] (relative to the generated
 * directory; content may be a function, called when a template wants the body).
 */
export function siteModel(files) {
  // Implicit pages: the home page, and a section for each first-level directory without its own index.md.
  const relatives = new Set(files.map(entry => entry.relative));
  const implicit = new Set(['index.md']);
  for (const relative of relatives) if (relative.includes('/')) implicit.add(`${relative.split('/')[0]}/index.md`);
  files = [...files, ...[...implicit].filter(relative => !relatives.has(relative)).map(relative => ({
    relative, params: { title: relative === 'index.md' ? undefined : relative.split('/')[0].replace(/^./, letter => letter.toUpperCase()) }, content: '',
  }))];
  // A page with pages below it (a section, a book, a chapter) is listed as a section; a category's page is a term.
  const branches = branchPages(files.map(entry => entry.relative));
  const pages = files.map(entry => {
    const { relative } = entry;
    const { params, content } = entry.params ? entry : parsePage(entry.text);
    const path = pagePath(relative);
    const kind = path === '/' ? 'home' : path === '/categories' ? 'taxonomy' : path.startsWith('/categories/') ? 'term' : branches.has(relative) ? 'section' : 'page';
    const url = pageURL(relative, params);
    return {
      relative, path, kind, params, get content() { return typeof content === 'function' ? content() : content; },
      title: params.title ?? '', description: params.description ?? '',
      url, href: url && pageHref(url), permalink: url && pagePermalink(url),
      rendered: isPublished(params), listed: isPublished(params) && params.build?.list !== 'never',
      pages: [], regularPages: [], terms: [],
    };
  });
  const byPath = new Map(pages.map(page => [page.path, page]));
  const getPage = path => byPath.get(path === '/' ? '/' : `/${String(path).replace(/^\/+|\/+$/g, '')}`);
  const home = byPath.get('/');
  // Sections: the home page's first-level directories whose page is a section.
  for (const page of pages) {
    const first = page.path.split('/')[1] ?? '';
    page.section = page.kind === 'home' ? '' : byPath.get(`/${first}`)?.kind === 'section' || first === 'categories' ? first : '';
  }
  // Each page's parent: the nearest page above it that is not a page alone (a section, the home page).
  for (const page of pages) {
    if (page === home) continue;
    let path = page.path.replace(/\/[^/]*$/, '') || '/';
    while (!byPath.has(path) || byPath.get(path).kind === 'page') path = path.replace(/\/[^/]*$/, '') || '/';
    page.parent = byPath.get(path);
  }
  // Hugo's default order: by weight and date (which no page has), then title (by the language's collation), then file.
  const collator = new Intl.Collator('zh-CN');
  const listed = pages.filter(page => page.listed)
    .sort((a, b) => collator.compare(a.params.linkTitle ?? a.title, b.params.linkTitle ?? b.title) || (a.relative < b.relative ? -1 : a.relative > b.relative ? 1 : 0));
  for (const page of listed) {
    if (!page.parent || page.kind === 'term') continue;
    page.parent.pages.push(page);
    if (page.kind === 'page') page.parent.regularPages.push(page);
  }
  // The categories: a term's pages are those in it (a page's categories include their ancestors).
  const taxonomy = byPath.get('/categories');
  const terms = new Map(pages.filter(page => page.kind === 'term').map(term => [term.title, term]));
  if (taxonomy) taxonomy.pages = listed.filter(page => page.kind === 'term');
  for (const page of listed) {
    for (const name of page.params.categories ?? []) {
      const term = terms.get(name);
      if (!term) continue;
      page.terms.push(term);
      term.pages.push(page);
      if (page.kind === 'page') term.regularPages.push(page);
    }
  }
  return { pages, byPath, home, getPage, listed, regularPages: listed.filter(page => page.kind === 'page') };
}

