import { readFileSync } from 'node:fs';
import { deserialize } from 'node:v8';
import { unpack } from '../shared/compress.mjs';
import { siteModel } from './model.mjs';
import { createSite, pageResources, renderPage, siteFiles } from './generate.mjs';
import { buildAssets, copyStatic } from './assets.mjs';
import { searchManifest } from './templates/outputs.mjs';
import { contentHash } from '../shared/content-hash.mjs';

/**
 * The site generator's state and work, everything that runs the templates: the pages (their front matter and
 * a way to their bodies), the assets' addresses, and from them a page's files, the files that follow from all
 * pages, the search manifest, the assets themselves and the static files. scripts/generator.mjs runs it in a
 * worker thread (restarted when this code changes) or, for the API, in its own thread.
 *
 * A page is given as { relative, metadata, compressed } (its metadata and its body's HTML compressed, as the prebuild
 * keeps them). Bodies are unpacked only for the pages rendered.
 */
export function generatorCore({ development = false } = {}) {
  // byRelative: the site's pages by relative path, for the site as it is (reset with site).
  let pages = new Map(), assets = {}, site, byRelative;
  /** A page as the model takes it: its body read when a template wants it. */
  const entry = ({ relative, metadata, compressed }) => ({ relative, metadata, content: () => compressed ? unpack(compressed).toString('utf8') : '' });
  /** The site the templates see; drafts (pages given as above) stand in for the site's pages this once. */
  function siteWith(drafts = []) {
    if (!drafts.length) return site ??= createSite(siteModel([...pages.values()]), { assets, development });
    const overlay = new Map(pages);
    for (const draft of drafts) overlay.set(draft.relative, entry(draft));
    return createSite(siteModel([...overlay.values()]), { assets, development });
  }
  return {
    /** Replaces the pages with these. */
    setPages(list) {
      pages = new Map(list.map(given => [given.relative, entry(given)]));
      site = byRelative = undefined;
    },
    /** Replaces the pages with those in a file (scripts/prebuild/process.mjs). */
    loadPages(file) {
      this.setPages(deserialize(readFileSync(file)));
    },
    /** Changes some pages: [relative, page] pairs, page null for a page gone. */
    updatePages(changes) {
      for (const [relative, given] of changes) {
        if (given) pages.set(relative, entry({ ...given, relative }));
        else pages.delete(relative);
      }
      site = byRelative = undefined;
    },
    /** Builds the assets: { files ([path, content] pairs), assets (their addresses) }; the pages use these addresses. */
    async buildAssets() {
      const built = await buildAssets({ development });
      this.setAssets(built.assets);
      return { files: [...built.files], assets: built.assets };
    },
    setAssets(given) {
      assets = given;
      site = byRelative = undefined;
    },
    copyStatic: (output, options) => copyStatic(output, options),
    /** The pages to render (relative paths), in the model's order. */
    renderable: () => siteWith().pages.filter(page => page.published && page.url).map(page => page.relative),
    /**
     * The files of these pages (relative paths): [output path, HTML] pairs, with hashes [output path, HTML, hash] (of
     * the HTML, see scripts/generator.mjs); drafts: see siteWith.
     */
    render(relatives, { drafts = [], hashes = false } = {}) {
      const current = siteWith(drafts), files = [];
      byRelative ??= new Map(current.pages.map(page => [page.relative, page]));
      const pagesOf = drafts.length ? new Map(current.pages.map(page => [page.relative, page])) : byRelative;
      for (const relative of relatives) {
        const page = pagesOf.get(relative);
        if (page?.published && page.url) files.push(...renderPage(current, page));
      }
      return hashes ? files.map(([path, html]) => [path, html, contentHash(html)]) : files;
    },
    /**
     * What follows from all pages: { files ([path, content] pairs: the 404 page, the sitemap, the alias redirects,
     * the editor's names), manifest (search manifest), resources ([output path, relative] pairs of files beside
     * pages, for these relative paths) }.
     */
    shared(attachments = []) {
      const current = siteWith();
      return {
        files: [...siteFiles(current), ...current.dataFiles],
        manifest: searchManifest(current),
        resources: [...pageResources(current, '', attachments)].map(([path, source]) => [path, source.replace(/^\//, '')]),
      };
    },
  };
}
