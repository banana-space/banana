import { highlightTree } from '@lezer/highlight';
import { StreamLanguage } from '@codemirror/language';
import { highlightClasses, dialectParser, isLanguage, tex, texDocument, yamlLanguage } from './grammar.mjs';
import { escapeText } from '../render/escape.mjs';

/**
 * Code blocks highlighted as an editor highlights the dialect: lezer parsers, their tokens given the dialect's classes
 * (highlightClasses, bm-hl-…), so that one stylesheet serves every language.
 *
 * defaultLanguages: the dialect's own, by the names code fences use (in lower case): its Markdown, YAML (and
 * bibliographies), TeX (and math and tikz blocks). Others are a renderer's codeLanguages: name → a Language
 * (CodeMirror's), a lezer Parser, or a legacy mode ({ token, startState… }); bananamark/languages has about 35, from
 * CodeMirror's language packages and legacy modes.
 */

const dialect = { parser: dialectParser };
export const defaultLanguages = {
  markdown: dialect, md: dialect,
  yaml: yamlLanguage, yml: yamlLanguage, bibliography: yamlLanguage,
  latex: texDocument, tex: texDocument, math: tex, tikz: tex,
};

const parsers = new WeakMap();
/** The lezer parser of a language as the table gives it. */
function parserOf(language) {
  if (!parsers.has(language)) {
    const parser = isLanguage(language) || language === dialect ? language.parser
      : typeof language.token === 'function' ? StreamLanguage.define(language).parser
      : language;
    parsers.set(language, parser);
  }
  return parsers.get(language);
}

/** The language languages has for a code fence's language name, or undefined. */
export function codeLanguage(name, languages = defaultLanguages) {
  const key = String(name ?? '').toLowerCase();
  return key && Object.hasOwn(languages, key) && languages[key] ? languages[key] : undefined;
}


/**
 * Code as HTML, highlighted: the text, escaped, with spans of the highlighting classes; undefined when languages
 * has no language of this name.
 */
export function highlightCode(code, name, languages = defaultLanguages) {
  const language = codeLanguage(name, languages);
  if (!language) return;
  const tree = parserOf(language).parse(code);
  let html = '', last = 0;
  highlightTree(tree, highlightClasses, (from, to, classes) => {
    html += escapeText(code.slice(last, from)) + `<span class="${classes}">${escapeText(code.slice(from, to))}</span>`;
    last = to;
  });
  return html + escapeText(code.slice(last));
}
