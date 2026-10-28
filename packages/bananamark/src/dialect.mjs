import { checkEnvironments, resolveEnvironments } from './syntax/environments.mjs';
import { createTagRegistry } from './syntax/tags.mjs';
import { checkDataBlocks } from './syntax/data-blocks.mjs';
import { dialectSupport } from './highlight/grammar.mjs';
import { problem, sourceError } from './messages.mjs';

const dialects = new WeakSet();

/** The settings a dialect holds (defineDialect's options). */
export const dialectOptions = ['environments', 'dataBlocks', 'tags', 'messages', 'codeLanguages', 'katex', 'rewriteMath', 'tikz', 'wikiLinks', 'bibliography'];

/** Throws unless every key of options is one of allowed (a misspelled option would otherwise do nothing). */
export function checkOptions(options, allowed, entry) {
  for (const name of Object.keys(options ?? {})) if (!allowed.includes(name)) throw sourceError('', problem('option_unknown', { name, entry }));
}

/**
 * A site's dialect: what its pages may hold, given once to the renderer, the dialect's layer and the editor
 * (bananamark-codemirror), so that they read pages alike. Checked, and frozen:
 * - environments (over bananamark's), dataBlocks, tags (over <lang>), messages, katex, rewriteMath, as the
 *   processor's options;
 * - codeLanguages: languages of code blocks (name → a CodeMirror Language, a lezer Parser or a legacy mode); the
 *   dialect's own grammar is added for markdown and md blocks, with these languages in it, so that examples of data
 *   blocks are highlighted too;
 * - tikz, wikiLinks, bibliography: TikZ diagrams (```tikz, tikzcd in formulas), [[wiki links]] and ```bibliography
 *   blocks, each off unless given true;
 * - language: the dialect's CodeMirror LanguageSupport (bananamark/grammar's dialectSupport), for editors.
 */
export function defineDialect(options = {}) {
  checkOptions(options, dialectOptions, 'defineDialect');
  const { environments, dataBlocks = {}, tags, messages, codeLanguages = {}, katex, rewriteMath, tikz = false, wikiLinks = false, bibliography = false } = options;
  const resolved = resolveEnvironments(environments);
  checkEnvironments(resolved);
  checkDataBlocks(dataBlocks, { tikz, bibliography });
  // The editor's grammar takes the CodeMirror languages; parsers and legacy modes serve code blocks only.
  const language = dialectSupport({ codeLanguages, wikiLinks });
  const parser = language.language.parser;
  const dialect = Object.freeze({
    environments: resolved, dataBlocks, tags: createTagRegistry(tags), messages, katex, rewriteMath,
    codeLanguages: Object.freeze({ markdown: parser, md: parser, ...codeLanguages }),
    tikz: Boolean(tikz), wikiLinks: Boolean(wikiLinks), bibliography: Boolean(bibliography), language,
  });
  dialects.add(dialect);
  return dialect;
}

/**
 * An entry point's options with a dialect's (options.dialect, from defineDialect) under them: the dialect's settings,
 * then the options given (which win).
 */
export function withDialect({ dialect, ...options } = {}) {
  if (dialect === undefined) return options;
  if (!dialects.has(dialect)) throw new Error('bananamark: the dialect option takes what defineDialect returns');
  const { language, ...settings } = dialect;
  const given = Object.fromEntries(Object.entries(options).filter(([, value]) => value !== undefined));
  return { ...settings, ...given };
}
