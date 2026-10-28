import * as bananamark from 'bananamark';
import { typesetHTML as typesetAny } from 'bananamark/typography';
import { withLocale } from 'bananamark/messages';
import { withSyntax } from 'bananamark/internal/switches.mjs';

/**
 * The tests' pages are mostly Chinese, and use the whole dialect: bananamark's entry points with lang and locale
 * zh-cn, TikZ, wiki links, bibliographies, <align> and <spoiler> by default (English and these off are the package's
 * defaults), and zh(fn) for an internal function, run with errors and page text in Chinese and the switches on.
 */
const all = { wikiLinks: true, tikz: true, bibliography: true };
const chinese = (options = {}) => ({ lang: 'zh-cn', locale: 'zh-cn', ...all, ...options, tags: { align: bananamark.alignTag, spoiler: bananamark.spoilerTag, ...options.tags } });
export * from 'bananamark';
export const createProcessor = (options = {}) => bananamark.createProcessor(chinese(options));
export const renderDocument = (source, options = {}) => bananamark.renderDocument(source, chinese(options));
export const renderDocumentAsync = (source, options = {}) => bananamark.renderDocumentAsync(source, chinese(options));
export const createRenderer = (options = {}) => bananamark.createRenderer(chinese(options));
export const createBook = (options = {}) => bananamark.createBook(chinese(options));
export const transformDocument = (source, options = {}) => bananamark.transformDocument(source, chinese(options));
export const transformFragment = (source, options = {}) => bananamark.transformFragment(source, chinese(options));
export const typesetHTML = (html, options = {}) => typesetAny(html, { lang: 'zh-cn', ...options });
export const zh = fn => (...args) => withLocale('zh-cn', 'zh-cn', () => withSyntax(all, () => fn(...args)));
