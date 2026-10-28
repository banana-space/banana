/**
 * bananamark-codemirror: the bananamark dialect in CodeMirror (see README.md).
 *
 * - bananamark(options): everything at once (setup.mjs): the language, highlighting, keys, formula editing,
 *   completion and checking, for a dialect (bananamark's defineDialect).
 * - bananamarkLanguage(options): the language alone (bananamark's grammar, folding, Backspace on list markers);
 *   highlight it with highlightClasses. newlineAndIndent: Enter at the indentation of the line's text;
 *   bananamarkKeymap: it with the formulas' Enter and Backspace.
 * - completionSources(options): completion of environments, blocks, [[links]], labels, KaTeX and tags.
 * - pairFormulaDelimiters, deleteFormulaDelimiters, closeDisplayFormula: editing formulas.
 * - checkDocument, problemRange, bananamarkLinter: bananamark's errors as the editor's problems.
 */
export { bananamarkLanguage, newlineAndIndent } from './language.mjs';
export { bananamark, bananamarkKeymap } from './setup.mjs';
export { highlightClasses, highlightTags } from 'bananamark/grammar';
export { afterComposition, completionSources, declaredLabels, fencesBalance, inFormula, matchingEnd } from './completion.mjs';
export { closeDisplayFormula, deleteFormulaDelimiters, pairFormulaDelimiters } from './editing.mjs';
export { bananamarkLinter, checkDocument, checkFile, problemRange } from './check.mjs';
export { messages } from './messages.mjs';
