import { readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { t } from '../shared/i18n.mjs';
import { siteURL } from './document.mjs';

// Pagefind also writes its own UI bundles; the site uses only the search API.
const unused = /^pagefind-(?:ui|component-ui|modular-ui|highlight)\b/;

// URLs in the index are relative to the site root (see siteURL).
const pagePath = url => {
  const local = decodeURI(url).replace(/^\//, '');
  return local.endsWith('/') || !local ? `${local}index.html` : local;
};

/** The manifest's pages by their files in the output (such as wiki/群/index.html): output path -> entry. */
export function manifestEntries(manifest) {
  return new Map(manifest.pages.map(page => {
    const entry = { ...page, url: siteURL(page.url, manifest.base), base: manifest.base };
    return [pagePath(entry.url), entry];
  }));
}

/**
 * Collects search documents while the site is written, then writes the Pagefind bundle to
 * <destination>/pagefind/. manifest: the pages to index (site/templates/outputs.mjs's searchManifest), each found
 * by its file in the output (such as wiki/群/index.html).
 */
export async function searchIndexer(destination, manifest, { playground = false } = {}) {
  const entries = manifestEntries(manifest);
  const pagefind = await import('pagefind');
  const check = (result, file) => {
    if (result.errors?.length) throw new Error(`${file ? `${file}: ` : ''}Pagefind: ${result.errors.join('; ')}`);
    return result;
  };
  // One language for the whole site: pages marked `lang: en` must stay in the same index.
  const { index } = check(await pagefind.createIndex({ forceLanguage: manifest.language, writePlayground: playground }));
  const indexed = new Set();
  return {
    /** The manifest entry of a page (its path in the output), or undefined for a page not to be indexed. */
    entry: path => entries.get(path),
    /** Index one page the manifest lists, given the content searchDocument (document.mjs) made from it. */
    async add(path, content) {
      const entry = entries.get(path);
      if (!content) throw new Error(t('build_search_manifest', { Url: entry.url }));
      check(await index.addHTMLFile({ url: entry.url, content }), path);
      indexed.add(path);
    },
    async finish() {
      for (const [path, entry] of entries) if (!indexed.has(path)) throw new Error(t('build_search_manifest', { Url: entry.url }));
      const output = join(destination, 'pagefind');
      await rm(output, { recursive: true, force: true });
      check(await index.writeFiles({ outputPath: output }));
      for (const name of await readdir(output)) if (unused.test(name)) await rm(join(output, name));
      return indexed.size;
    },
    close: () => pagefind.close(),
  };
}
