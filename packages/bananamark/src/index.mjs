/**
 * bananamark: a Markdown dialect for mathematical writing, read and rendered to HTML (see README.md).
 *
 * - renderDocument, renderDocumentAsync, createProcessor: a page to HTML, what depends on a site given by hooks;
 *   processor.book(): the pages of a book (sharing labels, numbering and bibliography, referring to one another).
 * - defineDialect: a site's dialect (its environments, data blocks, tags, messages and switches), for every entry point
 *   and for editors.
 * - transformDocument, transformFragment, createBook: the dialect's layer, a page (or a fragment) to a document
 *   { markdown, nodes } (Markdown and its node table, syntax/nodes.mjs; the nodes' types and fields are the package's
 *   own and may change); inspectDocument writes a document out to read.
 * - createRenderer: the renderer, a document to HTML.
 * - highlightCode, defaultLanguages: code blocks' highlighting (lezer grammars, one set of bm-hl-… classes for every
 *   language); renderKaTeX: a formula as the renderer writes it.
 * - defaultEnvironments, the tags (alignTag, spoilerTag, defaultTags, createTagRegistry) and their rules (data only:
 *   alignTagRule, spoilerTagRule, defaultTagRules); parseNumbering: numbering settings checked and merged.
 * - BananamarkError, locales, defaultLocale, messages: errors and the package's messages.
 * - pathEscape, queryEscape: addresses as the renderer writes them.
 * Other entry points: bananamark/typography, bananamark/highlight, bananamark/grammar, bananamark/languages,
 * bananamark/rules, bananamark/messages, bananamark/bibliography (how authors' names are written), bananamark/scan,
 * bananamark/style.css and bananamark/katex.css; lower-level modules are bananamark/internal/*.mjs, which may change.
 */
export { createProcessor, renderDocument, renderDocumentAsync } from './document.mjs';
export { transformDocument } from './syntax/structure.mjs';
export { createBook } from './syntax/book.mjs';
export { transformFragment } from './syntax/markup.mjs';
export { inspectDocument } from './syntax/nodes.mjs';
export { createRenderer } from './render/index.mjs';
export { defineDialect } from './dialect.mjs';
export { default as defaultEnvironments } from './syntax/default-environments.mjs';
export { defaultLanguages, highlightCode } from './highlight/index.mjs';
export { pathEscape, queryEscape } from './render/escape.mjs';
export { renderKaTeX } from './render/math.mjs';
export { BananamarkError, defaultLocale, locales, messages } from './messages.mjs';
export { alignTag, createTagRegistry, defaultTags, spoilerTag } from './syntax/tags.mjs';
export { alignTagRule, defaultTagRules, spoilerTagRule } from './syntax/tag-rules.mjs';
export { numbering as parseNumbering } from './syntax/numbering.mjs';
