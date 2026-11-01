import { isPublished } from '../prebuild/collections.mjs';
import { branchPages, pageURL } from '../shared/pages.mjs';
import { pageHref, pagePermalink } from '../shared/urls.mjs';

/**
 * The site as the templates see it: the pages the prebuild generated (metadata and the body, rendered by bananamark),
 * with what follows from them.
 *
 * A page: { relative, path (as pageAt takes it: "/wiki/群"), kind (home, branch: a page with pages below it, page, categories: their overview, category),
 * implicit (a directory with no page of its own), section (its first-level section: "wiki", or "" for the home page and pages outside one), metadata (its front
 * matter), title, description, content (the body's HTML), url (its address path, unescaped), href (percent-encoded, below the origin),
 * permalink (the full address), published and listed (whether it has a page, and whether lists and the sitemap show it) }, and its relations: parent, pages (those directly below, or in a category),
 * leaves (the same, without branches), categories (the pages of its categories).
 *
 * The site: { pages (all of them), byPath, home, pageAt(path), listed (the pages lists show), leaves
 * (the same, without branches) }.
 */

/**
 * Whether a page is a list of the pages under it (a category, the list of articles, the lecture index, a directory
 * with no page of its own) rather than a page with a body.
 */
export const isList = page => page.kind === 'category' || (page.kind === 'branch' && !page.metadata.collectionRoot && (page.implicit || page.section === 'wiki' || page.metadata.lectureIndex));

/** The page's path as pageAt takes it, from its relative path: "/wiki/群", "/" for the home page. */
const pagePath = relative => `/${relative.replace(/(?:^|\/)index\.md$/, '').replace(/\.md$/, '')}`.replace(/\/$/, '') || '/';

/**
 * The site from its pages: [{ relative, metadata, content }] (relative: its path, as in content/; content may be a
 * function, called when a template wants the body).
 */
export function siteModel(files) {
  // Implicit pages: the home page, and a section for each first-level directory without its own index.md.
  const relatives = new Set(files.map(entry => entry.relative));
  const implicit = new Set(['index.md']);
  for (const relative of relatives) if (relative.includes('/')) implicit.add(`${relative.split('/')[0]}/index.md`);
  files = [...files, ...[...implicit].filter(relative => !relatives.has(relative)).map(relative => ({
    relative, metadata: { title: relative === 'index.md' ? undefined : relative.split('/')[0].replace(/^./, letter => letter.toUpperCase()) }, content: '', implicit: true,
  }))];
  // A page with pages below it (a section, a book, a chapter) is listed as a section; a category's page is a term.
  const branches = branchPages(files.map(entry => entry.relative));
  const pages = files.map(entry => {
    const { relative } = entry;
    const { metadata, content, implicit = false } = entry;
    const path = pagePath(relative);
    const kind = path === '/' ? 'home' : path === '/categories' ? 'categories' : path.startsWith('/categories/') ? 'category' : branches.has(relative) ? 'branch' : 'page';
    const url = pageURL(relative, metadata);
    return {
      relative, path, kind, metadata, implicit, get content() { return typeof content === 'function' ? content() : content; },
      title: metadata.title ?? '', description: metadata.description ?? '',
      url, href: url && pageHref(url), permalink: url && pagePermalink(url),
      published: isPublished(metadata), listed: isPublished(metadata) && !metadata.unlisted,
      pages: [], leaves: [], categories: [],
    };
  });
  const byPath = new Map(pages.map(page => [page.path, page]));
  const pageAt = path => byPath.get(path === '/' ? '/' : `/${String(path).replace(/^\/+|\/+$/g, '')}`);
  const home = byPath.get('/');
  // Sections: the home page's first-level directories whose page is a section.
  for (const page of pages) {
    const first = page.path.split('/')[1] ?? '';
    page.section = page.kind === 'home' ? '' : byPath.get(`/${first}`)?.kind === 'branch' || first === 'categories' ? first : '';
  }
  // Each page's parent: the nearest page above it that is not a page alone (a section, the home page).
  for (const page of pages) {
    if (page === home) continue;
    let path = page.path.replace(/\/[^/]*$/, '') || '/';
    while (!byPath.has(path) || byPath.get(path).kind === 'page') path = path.replace(/\/[^/]*$/, '') || '/';
    page.parent = byPath.get(path);
  }
  // By title (by the language's collation), then file.
  const collator = new Intl.Collator('zh-CN');
  const listed = pages.filter(page => page.listed)
    .sort((a, b) => collator.compare(a.title, b.title) || (a.relative < b.relative ? -1 : a.relative > b.relative ? 1 : 0));
  for (const page of listed) {
    if (!page.parent || page.kind === 'category') continue;
    page.parent.pages.push(page);
    if (page.kind === 'page') page.parent.leaves.push(page);
  }
  // The categories: a term's pages are those in it (a page's categories include their ancestors).
  const overview = byPath.get('/categories');
  const categories = new Map(pages.filter(page => page.kind === 'category').map(category => [category.title, category]));
  if (overview) overview.pages = listed.filter(page => page.kind === 'category');
  for (const page of listed) {
    for (const name of page.metadata.categories ?? []) {
      const category = categories.get(name);
      if (!category) continue;
      page.categories.push(category);
      category.pages.push(page);
      if (page.kind === 'page') category.leaves.push(page);
    }
  }
  return { pages, byPath, home, pageAt, listed, leaves: listed.filter(page => page.kind === 'page') };
}

