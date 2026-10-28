import { basePath } from '../../shared/urls.mjs';
import { escape, json, queryEscape } from '../html.mjs';

/** The site's other outputs: the alias redirects, the search manifest, the sitemap. */

/**
 * Each wiki alias's address (no final slash, not percent-encoded) and its page,
 * with ?from= as for a wiki link: an Apache RewriteMap (docs/deploy.md), also read by scripts/serve.mjs.
 */
export function aliasRedirects(site) {
  const base = basePath.replace(/\/$/, '');
  const lines = site.listed.flatMap(page => (page.params.wikiAliasPaths ?? []).map(alias => `${base}${alias.path.replace(/\/$/, '')} ${page.href}?from=${queryEscape(alias.name)}`));
  return lines.length ? `${lines.join('\n')}\n` : '';
}

/**
 * The pages for the search index: { base, language, pages }; the rest of
 * a page's search document comes from its HTML (search/document.mjs).
 */
export function searchManifest(site) {
  const pages = site.listed.flatMap(page => {
    let kind = '';
    if (page.kind === 'term') kind = 'category';
    else if (page.params.structuredPage && page.params.search !== false && (page.kind === 'page' || page.params.collectionRoot)) {
      kind = page.params.wikiName !== undefined ? 'wiki' : page.params.collectionKind || 'page';
    }
    return kind ? [{ url: page.href, kind, readings: page.params.searchReadings ?? [], aliases: page.params.wikiAliases ?? [], categories: page.params.directCategories ?? [] }] : [];
  });
  return { base: basePath, language: site.language, pages };
}

/**
 * A page's last change: its own (gitLastmod), or, for a list (a section, the categories, a category) without one,
 * the latest of its pages', as Hugo had it.
 */
function lastmod(page, seen = new Set()) {
  if (page.params.gitLastmod) return page.params.gitLastmod;
  if (seen.has(page)) return;
  seen.add(page);
  let latest;
  for (const child of page.pages) {
    const time = lastmod(child, seen);
    if (time && (!latest || Date.parse(time) > Date.parse(latest))) latest = time;
  }
  return latest;
}

/** Hugo's sitemap: each page with its address and when it last changed. */
export function sitemap(site) {
  const urls = site.listed.filter(page => page.rendered && page.permalink).map(page => {
    const time = lastmod(page);
    return `  <url>
    <loc>${escape(page.permalink).replace(/\+/g, '&#43;')}</loc>${time ? `
    <lastmod>${time}</lastmod>` : ''}
  </url>`;
  });
  return `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('')}
</urlset>
`;
}
