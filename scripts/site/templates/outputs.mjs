import { basePath } from '../../shared/urls.mjs';
import { queryEscape } from 'bananamark';
import { escape } from '../html.mjs';

/** The site's other outputs: the alias redirects, the search manifest, the sitemap. */

/**
 * Each wiki alias's address (no final slash, not percent-encoded) and its page,
 * with ?from= as for a wiki link: an Apache RewriteMap (docs/deploy.md), also read by scripts/serve.mjs.
 */
export function aliasRedirects(site) {
  const base = basePath.replace(/\/$/, '');
  const lines = site.listed.flatMap(page => (page.metadata.wikiAliasPaths ?? []).map(alias => `${base}${alias.path.replace(/\/$/, '')} ${page.href}?from=${queryEscape(alias.name)}`));
  return lines.length ? `${lines.join('\n')}\n` : '';
}

/**
 * The pages for the search index: { base, language, pages }; the rest of
 * a page's search document comes from its HTML (search/document.mjs).
 */
export function searchManifest(site) {
  const pages = site.listed.flatMap(page => {
    let kind = '';
    if (page.kind === 'category') kind = 'category';
    else if (page.metadata.search !== false && (page.kind === 'page' || page.metadata.collectionRoot)) {
      kind = page.metadata.wikiName !== undefined ? 'wiki' : page.metadata.collectionKind || 'page';
    }
    return kind ? [{ url: page.href, kind, readings: page.metadata.searchReadings ?? [], aliases: page.metadata.wikiAliases ?? [], categories: page.metadata.directCategories ?? [] }] : [];
  });
  return { base: basePath, language: site.language, pages };
}

/**
 * A page's last change: its own (gitLastmod), or, for a list (a section, the categories, a category) without one,
 * the latest of its pages'.
 */
function lastmod(page, seen = new Set()) {
  if (page.metadata.gitLastmod) return page.metadata.gitLastmod;
  if (seen.has(page)) return;
  seen.add(page);
  let latest;
  for (const child of page.pages) {
    const time = lastmod(child, seen);
    if (time && (!latest || Date.parse(time) > Date.parse(latest))) latest = time;
  }
  return latest;
}

/** The sitemap: each page with its address and when it last changed. */
export function sitemap(site) {
  const urls = site.listed.filter(page => page.published && page.permalink).map(page => {
    const time = lastmod(page);
    return `  <url>
    <loc>${escape(page.permalink)}</loc>${time ? `
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
