import { createRenderer } from './render/index.mjs';
import { checkOptions, dialectOptions, withDialect } from './dialect.mjs';
import { problem, sourceError } from './messages.mjs';
import { documentOptions, transformDocument } from './syntax/structure.mjs';
import { createBook } from './syntax/book.mjs';

/**
 * A page of the dialect to HTML in one call: the dialect's layer (syntax/structure.mjs: sections, environments,
 * numbered formulas, labels and references, bibliographies, data blocks, wiki links) and the renderer
 * (render/index.mjs), each with the options it understands; see README.md.
 *
 * createProcessor(options) keeps one renderer for many pages (its Markdown parser is built once);
 * processor.render(source, page) renders one. renderDocument(source, options) is both at once.
 *
 * Options (processorOptions): the dialect (dialect, from defineDialect, or its settings: dialectOptions), lang (the
 * language of pages, default en: their typography, heading ids, and the text bananamark writes in them), locale (the
 * language of errors, default en), typography ({ convertFullStop, spaceQuotes }, or false), checkMath, allowH1,
 * formatSectionReference, basePath, plugins, and the hooks for what depends on a site (render/index.mjs):
 * resolveWikiLink, resolvePersonLink, resolvePageLink, decorateLink, resolveImage, renderCodeBlock. An option not
 * among these is an error.
 *
 * A page (processor.render's second argument): file (named in errors), lineOffset (lines before the body, such as
 * front matter), lang and typography (this page's own), key and title (a {@label} at the start of the body is the
 * page's), number and depth, numbering (numbering.mjs's format), pageAnchor, outputPath (the page's HTML file, for
 * plugins), and any fields of the caller's, which the hooks get with the rest. A book's pages: processor.book().
 *
 * plugins: what finishes a page's HTML after rendering, each { name, postprocess(html, page), close() } (such as
 * bananamark-tikz's tikz(), which compiles TikZ diagrams); processor.renderAsync(source, page) and a book's
 * renderAsync(handle) run them in order, and render() with plugins is an error (their work would be left undone);
 * processor.close() closes them. A plugin's page is { file, outputPath, lang, locale, messages }.
 *
 * The result: { html, headings, labels, bibliography, data, wikiLinks }:
 * - headings: [{ level, id, number, title }] in order, title as HTML (for a table of contents);
 * - labels: the page's labels, { name, anchor, kind, line } (anchor: the id in the HTML);
 * - bibliography: the bibliography's entries as data;
 * - data: what the data blocks held, { name: [value read from each block, in order] };
 * - wikiLinks: [{ target, line, column }], every [[link]] by its target's key.
 */

/** The options createProcessor takes (renderDocument's others are the page's). */
export const processorOptions = [
  ...dialectOptions, 'dialect', 'lang', 'locale', 'typography', 'checkMath', 'allowH1', 'formatSectionReference', 'basePath', 'plugins',
  'resolveWikiLink', 'resolvePersonLink', 'resolvePageLink', 'decorateLink', 'resolveImage', 'renderCodeBlock',
];

export function createProcessor(given = {}) {
  checkOptions(given, processorOptions, 'createProcessor');
  const options = withDialect(given);
  const { lang = 'en', locale, environments, dataBlocks, resolvePersonLink, checkMath = false, allowH1 = true, formatSectionReference, typography = {}, plugins = [], katex, rewriteMath, messages, tags, ...rendering } = options;
  for (const plugin of plugins) if (typeof plugin?.postprocess !== 'function') throw sourceError('', problem('plugin_invalid', { name: plugin?.name ?? '?' }));
  const renderer = createRenderer({ ...rendering, locale, lang, typography, katex, rewriteMath, messages, tags });
  // The dialect's layer's options for every page (a page's own over them), and for a book's pages together.
  const syntax = {
    lang, typography, locale, messages, tags, environments, dataBlocks, resolvePersonLink, checkMath, katex, rewriteMath, allowH1,
    formatSectionReference, tikz: rendering.tikz, wikiLinks: rendering.wikiLinks, bibliography: rendering.bibliography,
  };
  // With plugins a page is finished only by renderAsync; render would leave their work undone.
  const synchronous = () => {
    if (plugins.length) throw new Error(`bananamark: this processor has plugins (${plugins.map(plugin => plugin.name ?? '?').join(', ')}), which run only in renderAsync`);
  };

  /**
   * A page's options for the dialect's layer (those among allowed), and the page as the renderer and the hooks get it
   * (info: the caller's fields too).
   */
  function pageSettings({ file, outputPath, lineOffset = 0, lang: pageLang = lang, typography: pageTypography, ...rest } = {}, allowed = documentOptions) {
    // The page's typography over the processor's (false: none).
    const pageOptions = pageTypography === undefined ? typography : pageTypography && typography && { ...typography, ...pageTypography };
    const own = Object.fromEntries(Object.entries(rest).filter(([name]) => allowed.includes(name)));
    const settings = { ...own, ...(file === undefined ? {} : { file }), lang: pageLang, lineOffset, typography: pageOptions || undefined };
    return { settings, info: { ...rest, file, outputPath, lang: pageLang, typography: pageOptions } };
  }
  /** What a plugin gets of a page. */
  const pluginPage = info => ({ file: info.file, outputPath: info.outputPath, lang: info.lang, locale, messages });

  /** A page's result, from its document (with the page's data, document.meta). */
  function result(document, info) {
    const { html, headings } = renderer.renderDocument(document, info);
    const { meta } = document;
    return {
      html,
      headings: headings.map(({ level, id }) => ({
        level, id, number: meta.sectionNumbers[id] ?? '',
        title: meta.headingTitles[id] === undefined ? '' : renderer.renderFragment(meta.headingTitles[id], info),
      })),
      labels: meta.labels,
      bibliography: meta.bibliography,
      data: meta.data,
      wikiLinks: meta.wikiLinks,
    };
  }

  function renderPage(source, page) {
    const { settings, info } = pageSettings(page);
    return result(transformDocument(source, { ...syntax, ...settings }), info);
  }

  /** A rendered page with its HTML passed through the plugins. */
  async function finished(page, info) {
    let { html } = page;
    for (const plugin of plugins) html = await plugin.postprocess(html, info);
    return { ...page, html };
  }

  return {
    /** A page on its own (page: as above). */
    render(source, page = {}) {
      synchronous();
      return renderPage(source, page);
    },
    /** render, then the plugins (see above). */
    async renderAsync(source, page = {}) {
      return finished(renderPage(source, page), pluginPage(pageSettings(page).info));
    },

    /**
     * A book (syntax/book.mjs): add(source, page) its pages in reading order, then render(handle) each; declare(name,
     * target) a label of a page outside it; labels() its labels. options: numbering, formatSectionReference (over the
     * processor's).
     */
    book(bookOptions = {}) {
      const book = createBook({ ...syntax, ...bookOptions });
      const pages = new WeakMap();
      const renderBookPage = handle => result(book.transform(handle), pages.get(handle));
      return {
        add(source, page = {}) {
          const { settings, info } = pageSettings(page, [...documentOptions, 'position']);
          const handle = book.add(source, settings);
          pages.set(handle, info);
          return handle;
        },
        declare: book.declare,
        labels: book.labels,
        render(handle) {
          synchronous();
          return renderBookPage(handle);
        },
        async renderAsync(handle) {
          return finished(renderBookPage(handle), pluginPage(pages.get(handle)));
        },
      };
    },

    /** Closes the plugins (their close(), such as a TikZ worker's), once nothing more is rendered. */
    async close() {
      for (const plugin of plugins) await plugin.close?.();
    },
  };
}

/** The options of createProcessor in options, and the others, the page's. */
function split(options) {
  const processor = {}, page = {};
  for (const [key, value] of Object.entries(options)) (processorOptions.includes(key) ? processor : page)[key] = value;
  return { processor, page };
}

/** A page in one call: createProcessor's options and the page's together (see above). */
export const renderDocument = (source, options = {}) => {
  const { processor, page } = split(options);
  return createProcessor(processor).render(source, page);
};

/**
 * renderDocument, then the plugins (options.plugins; see createProcessor). The plugins stay open (a TikZ worker, say):
 * close them when nothing more is rendered.
 */
export const renderDocumentAsync = (source, options = {}) => {
  const { processor, page } = split(options);
  return createProcessor(processor).renderAsync(source, page);
};
