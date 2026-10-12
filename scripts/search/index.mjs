import { readFile, readdir, rm } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { t } from '../shared/i18n.mjs';
import { siteURL } from './document.mjs';

export const MANIFEST = 'search-manifest.json';
// Pagefind also writes its own UI bundles; the site uses only the search API.
const unused = /^pagefind-(?:ui|component-ui|modular-ui|highlight)\b/;

// URLs in the index are relative to the site root (see siteURL).
const pagePath = url => {
  const local = decodeURI(url).replace(/^\//, '');
  return local.endsWith('/') || !local ? `${local}index.html` : local;
};

/**
 * Collects search documents while postbuild walks the site, then writes the
 * Pagefind bundle to <destination>/pagefind/. Returns undefined when Hugo
 * produced no manifest (for example when postbuild runs a second time).
 */
export async function searchIndexer(destination, { playground = false } = {}) {
  let manifest;
  try { manifest = JSON.parse(await readFile(join(destination, MANIFEST), 'utf8')); }
  catch (error) { if (error.code === 'ENOENT') return; throw error; }
  const entries = new Map(manifest.pages.map(page => {
    const entry = { ...page, url: siteURL(page.url, manifest.base), base: manifest.base };
    return [pagePath(entry.url), entry];
  }));
  const pagefind = await import('pagefind');
  const check = (result, file) => {
    if (result.errors?.length) throw new Error(`${file ? `${file}: ` : ''}Pagefind: ${result.errors.join('; ')}`);
    return result;
  };
  // One language for the whole site: pages marked `lang: en` must stay in the same index.
  const { index } = check(await pagefind.createIndex({ forceLanguage: manifest.language, writePlayground: playground }));
  const indexed = new Set();
  const key = file => relative(destination, file).split('\\').join('/');
  return {
    /** The manifest entry of a page (a file in destination), or undefined for a page not to be indexed. */
    entry: file => entries.get(key(file)),
    /** Index one page the manifest lists, given the content searchDocument (document.mjs) made from it. */
    async add(file, content) {
      const path = key(file), entry = entries.get(path);
      if (!content) throw new Error(t('build_search_manifest', { File: MANIFEST, Url: entry.url }));
      check(await index.addHTMLFile({ url: entry.url, content }), file);
      indexed.add(path);
    },
    async finish() {
      for (const [path, entry] of entries) if (!indexed.has(path)) throw new Error(t('build_search_manifest', { File: MANIFEST, Url: entry.url }));
      const output = join(destination, 'pagefind');
      await rm(output, { recursive: true, force: true });
      check(await index.writeFiles({ outputPath: output }));
      for (const name of await readdir(output)) if (unused.test(name)) await rm(join(output, name));
      await rm(join(destination, MANIFEST));
      return indexed.size;
    },
    close: () => pagefind.close(),
  };
}
