import { createMarkdownParser } from '../markdown/index.mjs';
import { createTokenRenderer } from '../markdown/render.mjs';
import { escape, normalizeURL, pathEscape, scheme } from './escape.mjs';
import { mathHTML } from './math.mjs';
import { BananamarkError, guarded, problem, sourceError, t, withLocale } from '../messages.mjs';
import { createTagRegistry } from '../syntax/tags.mjs';
import { expandMarkers, extractInner } from './markers.mjs';
import { linkNode } from '../syntax/nodes.mjs';
import { languageTag } from '../syntax/scan.mjs';
import { defaultLanguages, highlightCode } from '../highlight/index.mjs';
import { typesetHTML } from '../typography.mjs';
import { checkOptions, dialectOptions, withDialect } from '../dialect.mjs';

/**
 * The renderer: the syntax layer's document ({ markdown, nodes }, ../syntax/nodes.mjs) as HTML. The Markdown is
 * parsed as Goldmark parses it (../markdown/), with render hooks for links, images, headings, code blocks and
 * formulas; each node is written as HTML of its own (references, citations, tags, list labels…).
 *
 * What depends on a site comes from options (rendererOptions; others are an error), each with a default that needs
 * no site:
 * - the dialect (dialect, from defineDialect, or its settings: tags over bananamark's <lang> (../syntax/tags.mjs);
 *   codeLanguages, more languages for code blocks (name → a CodeMirror Language, a lezer Parser or a legacy mode, or
 *   false), over ../highlight/index.mjs's defaultLanguages; katex, KaTeX's options, and rewriteMath(tex), changes to
 *   formulas before KaTeX (math.mjs); messages; tikz, wikiLinks, bibliography);
 * - locale: the language of errors (../messages.mjs), default en; lang: the language of pages (a page's own,
 *   page.lang, wins), which the text the renderer writes follows, default en;
 * - typography: the typography of Chinese text (../syntax/typography.mjs) on what the renderer writes:
 *   { convertFullStop, spaceQuotes }, or false for none; a page's own (page.typography) over it;
 * - basePath: the site's path below its host ("/" or "/wiki/"), put before addresses written from the root (/a/b),
 *   of links and of images;
 * - resolveWikiLink(target, { text, written, page }): the article a [[link]] names, by its target's matching key (text: the
 *   link's text, written: the target as written when it has formulas): { url } for an article, { url, missing: true }
 *   for one not yet written (url optional), or undefined (missing, no address);
 * - resolvePageLink(key, page): { url } of a page of a book by its key (a reference into another page), or undefined;
 * - decorateLink(destination, page): how an ordinary link looks, { className, before, after, newTab } (before and
 *   after: HTML around the text, such as icons), or undefined;
 * - resolveImage(path, page): the address of an image written with a relative path (a file beside the page; path
 *   decoded, without its query), or undefined for the path as written;
 * - renderCodeBlock({ language, code, attributes }): a code block in a language none highlights (code as written).
 * Addresses a hook gives are checked as written ones are: within the site, http or https (links also mailto). What a
 * hook throws, other than a BananamarkError, is reported as hook_failed (../messages.mjs's guarded).
 *
 * The defaults: no article exists, addresses are below "/", links to other hosts are external (class bm-external-link,
 * a new tab), and code blocks in a language without highlighting are <pre class="bm-code-block"> plain.
 */

/** A code block: data-highlight its language as written, html its code (highlighted, or escaped). */
const codeElement = (type, html) => `<pre class="bm-code-block"${type ? ` data-highlight="${escape(type)}"` : ''}><code>${html}</code></pre>\n`;
const defaults = {
  locale: undefined,
  lang: undefined,
  basePath: '/',
  resolveWikiLink: () => undefined,
  resolvePageLink: () => undefined,
  decorateLink: destination => /^(?:https?:)?\/\//i.test(destination) ? { className: 'bm-external-link', newTab: true } : undefined,
  resolveImage: () => undefined,
  codeLanguages: {},
  typography: {},
  tikz: false,
  renderCodeBlock: ({ language, code }) => codeElement(language, escape(code)),
};

const stripLinks = html => html.replace(/<\/?a\b[^>]*>/gi, '');

// A letter or digit of a word punctuation can stand in (n’s, 3.5): not Chinese, Japanese or Korean, after whose
// punctuation a line may break.
const wordCharacter = /^(?![\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}])[\p{L}\p{N}]/u;

const katexHTMLStart = '<span class="katex-html" aria-hidden="true">', baseStart = '<span class="katex-base">';
/** Where the span starting at start ends (after its closing tag), or -1. */
function spanEnd(html, start) {
  const tags = /<span\b|<\/span>/g;
  tags.lastIndex = start;
  let depth = 0;
  for (let match; (match = tags.exec(html));) {
    depth += match[0] === '</span>' ? -1 : 1;
    if (!depth) return tags.lastIndex;
  }
  return -1;
}
/** Whether HTML is whole spans, one after another. */
function wholeSpans(html) {
  for (let at = 0; at < html.length; at = spanEnd(html, at)) if (!html.startsWith('<span', at) || spanEnd(html, at) < 0) return false;
  return true;
}

/**
 * An inline formula's HTML (render/math.mjs) with punctuation after it, kept on its line: KaTeX's last box (an
 * inline-block, katex-base: a line may break between two of them, after a relation or an operator) goes with the
 * punctuation into span.bm-math-end, an inline-block in which lines do not break (bananamark/style.css), in a
 * .katex of its own; the punctuation is outside it, in the text's font, read and copied as the text's. A nowrap
 * group of the formula and the punctuation would not do: Chromium and Firefox break before the punctuation all the
 * same. Undefined when the HTML is not KaTeX's as expected (a TikZ placeholder, say).
 */
function gluePunctuation(html, punctuation) {
  const close = '</span></span></span>'; // katex-html's, katex's, the formula's
  const start = html.indexOf(katexHTMLStart);
  if (start < 0 || !html.endsWith(close)) return;
  const head = html.slice(0, start + katexHTMLStart.length), content = html.slice(head.length, -close.length);
  const last = content.lastIndexOf(baseStart);
  if (last < 0 || !wholeSpans(content.slice(0, last)) || spanEnd(content, last) !== content.length) return;
  return `${head}${content.slice(0, last)}</span></span><span class="bm-math-end"><span class="katex">${katexHTMLStart}${content.slice(last)}</span></span>${punctuation}</span></span>`;
}

/** helpers.TrimShortHTML: the <p> around a single paragraph removed (RenderString with display "inline"). */
function trimShortHTML(html) {
  if (html.split('<p>').length - 1 !== 1) return html;
  let result = html.trim();
  if (result.startsWith('<p>') && result.endsWith('</p>')) result = result.slice(3, -4).trim();
  return result;
}

/** A document as given: { markdown, nodes }, or Markdown alone (no nodes). */
const documentOf = document => typeof document === 'string' ? { markdown: document, nodes: [] } : document;

/** The options createRenderer takes. */
export const rendererOptions = [
  ...dialectOptions, 'dialect', 'locale', 'lang', 'typography', 'basePath', 'resolveWikiLink', 'resolvePageLink', 'decorateLink',
  'resolveImage', 'renderCodeBlock',
];

export function createRenderer(given = {}) {
  checkOptions(given, rendererOptions, 'createRenderer');
  const options = { ...defaults, ...withDialect(given) };
  const md = createMarkdownParser();
  const languages = { ...defaultLanguages, ...options.codeLanguages };
  const basePath = options.basePath.endsWith('/') ? options.basePath : `${options.basePath}/`;
  const tags = createTagRegistry(options.tags);
  /** An address written from the site's root (/a/b) under basePath; others as they are. */
  const underBasePath = address => address.startsWith('/') && !address.startsWith('//') && !address.startsWith(basePath) ? basePath + address.slice(1) : address;

  // The formulas of the HTML being rendered: placeholders stand for them meanwhile (parse5 then reads a page without
  // KaTeX's markup, a tenth of its size, to typeset it), and they go in after, with the closing punctuation right
  // after an inline one (withFormulas).
  let formulas;
  const placeholder = /<span class="bm-math-rendered" data-display="(true|false)" data-formula="(\d+)"><\/span>([,.;:!?，。．；：！？、)\]}）］｝〉》」』】〕〗〙〛”’»›…]+|[-‐])?/gu;
  function formula(math, fail) {
    let html;
    try { html = mathHTML(math, options); }
    catch (error) {
      if (error instanceof BananamarkError) throw error;
      // KaTeX's error (or rewriteMath's), as the dialect's layer reports it with checkMath.
      try { fail(problem('katex', { message: String(error?.message ?? error).replace(/^KaTeX parse error:\s*/, '') })); }
      catch (wrapped) { Object.defineProperty(wrapped, 'cause', { value: error, configurable: true, writable: true }); throw wrapped; }
    }
    if (!formulas) return html;
    formulas.push(html);
    return `<span class="bm-math-rendered" data-display="${Boolean(math.display)}" data-formula="${formulas.length - 1}"></span>`;
  }
  /**
   * The HTML with its formulas in place of their placeholders. Closing punctuation right after an inline formula
   * (not a letter's or a digit's: n’s), or a hyphen ($p$-adic, $A$-模), goes with the formula's last box
   * (gluePunctuation), so that a line does not start with it: it breaks after the hyphen, not before.
   */
  const withFormulas = (html, own) => html.replace(placeholder, (match, display, index, punctuation = '', offset, whole) => {
    // A hyphen goes with the formula before it whatever follows ($p$-adic: the line breaks after the hyphen).
    const hyphen = /^[-‐]$/.test(punctuation);
    const glued = punctuation && display === 'false' && (hyphen || !wordCharacter.test(whole[offset + match.length] ?? '')) ? gluePunctuation(own[index], punctuation) : undefined;
    return glued ?? own[index] + punctuation;
  });
  /** What render() writes (its html, or an object with html), with its formulas, typeset as the page says. */
  function typeset(page, render) {
    const typography = page.typography === false || options.typography === false ? false : { ...options.typography, ...page.typography };
    const previous = formulas, own = formulas = [];
    try {
      const result = render();
      const finish = html => withFormulas(typography ? typesetHTML(html, { lang: page.lang ?? options.lang ?? 'en', typography }) : html, own);
      return typeof result === 'string' ? finish(result) : { ...result, html: finish(result.html) };
    } finally { formulas = previous; }
  }

  /**
   * Renders a page's document: { html, headings }, headings being its headings in order, { level, id }. page: the
   * page as the hooks get it ({ file, lang, typography, and the caller's fields }): errors name its file; the text
   * the renderer writes is in its language, typeset as its typography says.
   */
  function renderDocument(document, page = {}) {
    const { markdown, nodes } = documentOf(document);
    return withLocale(options.locale, page.lang ?? options.lang, () => typeset(page, () => renderMarkdown(markdown, nodes, page)), options.messages);
  }

  function renderMarkdown(markdown, nodes, page) {
    const { text, inner } = extractInner(markdown, nodes, tags);
    const tokens = md.parse(text, { nodes });
    const headings = tokens.filter(token => token.type === 'heading_open').map(token => ({ level: Number(token.tag.slice(1)), id: token.attrGet('id') ?? '' }));
    const html = createTokenRenderer(hooks(page, nodes)).render(tokens);
    return { html: expandMarkers(html, nodes, (node, index) => renderNode(node, inner.get(index), page, nodes)), headings };
  }

  /** .Page.RenderString of Markdown of the document: block, or inline (the paragraph around a single paragraph removed). */
  function fragmentHTML(markdown, nodes, page, display = 'inline') {
    const { html } = renderMarkdown(markdown, nodes, page);
    return display === 'inline' ? trimShortHTML(html) : html;
  }

  /**
   * A fragment of a page (a title, a caption: what transformFragment gives) as HTML: inline, without the paragraph
   * around a single paragraph, or block (options.block).
   */
  const renderFragment = (document, page = {}, { block = false } = {}) => {
    const { markdown, nodes } = documentOf(document);
    return withLocale(options.locale, page.lang ?? options.lang, () => typeset(page, () => fragmentHTML(markdown, nodes, page, block ? 'block' : 'inline')), options.messages);
  };

  function hooks(page, nodes) {
    const fail = message => { throw sourceError(page.file ? `${page.file}: ` : '', message, page.file ? { file: page.file } : {}); };
    const fragment = (markdown, display) => fragmentHTML(markdown, nodes, page, display);
    return {
      link: ({ destination: original, title: originalTitle, text: originalText }) => {
        let destination = original, className = '', title = originalTitle, decoration;
        let referenceKey = '', caption = '', text = originalText;
        const index = linkNode(original);
        const node = index === undefined ? undefined : nodes[index];
        if (index !== undefined && !node) fail(`bananamark: node ${index} is not in the document's table`);
        if (node?.type === 'citation') {
          destination = `#${pathEscape(node.id)}`;
          referenceKey = node.key;
          caption = node.caption ?? '';
          className = 'bm-citation';
        } else if (node?.type === 'reference') {
          destination = `#${pathEscape(node.id)}`;
          caption = node.caption ?? '';
          // The reference's text (“定理 1.2”), written by the syntax layer.
          if (node.text) text = node.text;
          if (node.title) text = t('environment_title', { caption: text, title: stripLinks(fragment(node.title)) });
        } else if (node?.type === 'wiki') {
          const name = node.target;
          const display = node.name || name;
          caption = node.caption ?? '';
          const target = guarded('resolveWikiLink', () => options.resolveWikiLink(name, { text: display, ...(node.source ? { written: node.source } : {}), page }), fail);
          destination = target?.url;
          if (target && !target.missing) className = 'bm-wiki-link';
          else {
            className = 'bm-wiki-link bm-wiki-link-missing';
            title = t('missing_article_link', { name: display });
          }
        } else if (node) {
          fail(`bananamark: a link to a node of type ${node.type}`);
        } else {
          destination = underBasePath(destination);
          decoration = guarded('decorateLink', () => options.decorateLink(destination, page), fail);
          if (decoration?.className) className = decoration.className;
        }
        if (node?.page) {
          const url = guarded('resolvePageLink', () => options.resolvePageLink(node.page, page), fail)?.url;
          if (!url) fail(problem('page_unpublished', { page: node.page }));
          destination = url + destination;
        }
        if (caption) text = stripLinks(fragment(caption));
        const linkScheme = destination === undefined ? '' : scheme(destination).toLowerCase();
        if (linkScheme && !['http', 'https', 'mailto'].includes(linkScheme)) fail(problem('link_scheme', { destination: node ? destination : original }));
        const href = destination === undefined ? '' : ` href="${escape(normalizeURL(destination))}"`;
        return `<a${href}${title ? ` title="${escape(title)}"` : ''}${className ? ` class="${escape(className)}"` : ''}${referenceKey ? ` data-reference="${escape(referenceKey)}"` : ''}${decoration?.newTab ? ' target="_blank" rel="noopener"' : ''}>${decoration?.before ?? ''}${text}${decoration?.after ?? ''}</a>`;
      },

      image: ({ destination, title, text, plainText, isBlock, width = '' }) => {
        const imageScheme = scheme(destination).toLowerCase();
        if (imageScheme && !['http', 'https'].includes(imageScheme)) fail(problem('link_scheme', { destination }));
        const elsewhere = Boolean(imageScheme) || destination.startsWith('//');
        // {width=200} after the image sets its width.
        if (width && !/^[1-9][0-9]*$/.test(width)) fail(problem('image_width', { destination }));
        let src = destination;
        if (!elsewhere && destination.startsWith('/')) src = underBasePath(destination);
        else if (!elsewhere) {
          // A file beside the page: its address is resolveImage's (the query, if any, kept after it).
          const queryIndex = destination.indexOf('?');
          let path = queryIndex < 0 ? destination : destination.slice(0, queryIndex);
          try { path = decodeURIComponent(path); } catch { /* as written */ }
          const resource = guarded('resolveImage', () => options.resolveImage(path, page), fail);
          if (resource !== undefined) {
            if (typeof resource !== 'string' || !['', 'http', 'https'].includes(scheme(resource).toLowerCase())) fail(problem('link_scheme', { destination: String(resource) }));
            src = resource + (queryIndex < 0 ? '' : destination.slice(queryIndex));
          }
        }
        const alt = plainText || title;
        const img = `<img src="${escape(normalizeURL(src))}" alt="${escape(alt)}"${width ? ` width="${width}"` : ''} loading="lazy">`;
        if (isBlock) return `<figure class="bm-content-figure">${img}${text ? `<figcaption>${text}</figcaption>` : ''}</figure>`;
        return img;
      },

      heading: ({ level, anchor, attributes, text }) => {
        const number = attributes['data-section-number'];
        return `<h${level} id="${escape(anchor)}"${attributes.class ? ` class="${escape(attributes.class)}"` : ''}><a class="bm-heading-link" href="#${escape(pathEscape(anchor))}" title="${escape(t('link_to_heading'))}">§</a>${number ? `<span class="bm-section-number">${escape(number)}</span> ` : ''}${text}</h${level}>\n`;
      },

      codeBlock: ({ type, inner, attributes }) => {
        if (type === 'tikz' && options.tikz) {
          const math = formula({ tex: inner, display: true, mode: 'text' }, fail);
          if (attributes.caption) return `<figure class="bm-content-figure">${math}<figcaption>${fragment(attributes.caption)}</figcaption></figure>`;
          return math;
        }
        const highlighted = highlightCode(inner, type, languages);
        if (highlighted !== undefined) return codeElement(type, highlighted);
        return guarded('renderCodeBlock', () => options.renderCodeBlock({ language: type, code: inner, attributes }), fail);
      },

      passthrough: ({ inner, type }) => {
        const node = nodes[inner];
        if (node?.type !== 'math') fail(`bananamark: formula ${inner} is not in the document's table`);
        return formula({ tex: node.tex, display: type === 'block', id: node.id ?? '' }, fail);
      },

      table: ({ head, body }) => {
        const row = (cells, tag) => `<tr>\n${cells.map(cell => `<${tag}${cell.alignment ? ` style="text-align: ${cell.alignment}"` : ''}>${cell.text}</${tag}>\n`).join('')}</tr>\n`;
        return `<table>\n<thead>\n${head.map(cells => row(cells, 'th')).join('')}</thead>\n<tbody>\n${body.map(cells => row(cells, 'td')).join('')}</tbody>\n</table>\n`;
      },
    };
  }

  /** A node's HTML (its marker's place); inner: its inner text, for a node that has one. */
  function renderNode(node, inner, page, nodes) {
    const fail = message => { throw sourceError(page.file ? `${page.file}: ` : '', message, page.file ? { file: page.file } : {}); };
    const fragment = (markdown, display) => fragmentHTML(markdown, nodes, page, display);
    switch (node.type) {
      case 'environment': {
        let caption = node.caption;
        if (node.title) caption = t('environment_title', { caption, title: node.title });
        if (node.bare) caption = node.title;
        const heading = node.kind === 'proof'
          ? `<span class="bm-envtitle">${fragment(t('proof_heading', { caption }))}${escape(t('proof_title_separator'))}</span>`
          : `<p class="bm-envtitle">${fragment(caption)}</p>`;
        return `<div class="bm-env bm-envgroup-${escape(node.group)} bm-env-${escape(node.kind)}"${node.id ? ` id="${escape(node.id)}"` : ''}>${heading}<div class="bm-envcontent">\n`;
      }
      case 'environmentEnd': return '</div>\n</div>\n';
      case 'bibliography': return '<div class="bm-bibliography">\n';
      case 'bibliographyEnd': return '</div>\n';
      case 'bibliographyEntry': {
        if (!languageTag.test(node.lang)) fail(problem('tag_language', { name: 'bibliography', value: node.lang }));
        return `<div class="bm-bibliography-${escape(node.kind)}"${node.id ? ` id="${escape(node.id)}"` : ''} lang="${escape(node.lang)}">\n`;
      }
      case 'bibliographyEntryEnd': return '</div>\n';
      case 'bibliographySpan': {
        if (node.lang && !languageTag.test(node.lang)) fail(problem('tag_language', { name: 'bibliography', value: node.lang }));
        return `<span${node.class ? ` class="bm-bibliography-${escape(node.class)}"` : ''}${node.lang ? ` lang="${escape(node.lang)}"` : ''}${node.boundary ? ' data-typography="boundary"' : ''}>`;
      }
      case 'bibliographySpanEnd': return '</span>';
      case 'itemLabel': {
        const outer = node.outer ?? 0;
        return `<span class="bm-item-label${outer ? ' bm-item-label-outer' : ''}${node.block ? ' bm-item-label-block' : ''}" style="--bm-outer: ${outer}"><span>${fragment(inner.trim())}</span></span>`;
      }
      case 'itemTarget': return `<span id="${escape(node.id)}" class="bm-item-target"></span>`;
      case 'tag': return tagHTML(node, inner, page, nodes);
      default: fail(`bananamark: a marker of a node of type ${node.type}`);
    }
  }

  /** An HTML-style tag: its render (../syntax/tags.mjs) with what it needs of the page. */
  function tagHTML({ name, parameters }, inner, page, nodes) {
    const fail = message => { throw sourceError(page.file ? `${page.file}: ` : '', message, page.file ? { file: page.file } : {}); };
    if (!Object.hasOwn(tags, name)) fail(problem('tag_unknown', { name, allowed: Object.keys(tags).map(tag => `<${tag}>`) }));
    return guarded(`<${name}>`, () => tags[name].render({
      name, parameters, inner, page, escape, fail, problem,
      fragment: (markdown, { block = false } = {}) => fragmentHTML(markdown, nodes, page, block ? 'block' : 'inline'),
      message: (key, values) => t(key, values),
    }), fail);
  }

  return { renderDocument, renderFragment };
}
