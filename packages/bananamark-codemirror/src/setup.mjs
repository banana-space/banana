// The whole of the dialect in an editor at once: bananamark(options), the extensions the pieces of this package make,
// in the order and with the precedence they need.
import { autocompletion, startCompletion } from '@codemirror/autocomplete';
import { syntaxHighlighting } from '@codemirror/language';
import { EditorState, Prec } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { highlightClasses } from 'bananamark/grammar';
import { bananamarkLanguage, newlineAndIndent } from './language.mjs';
import { afterComposition, completionSources } from './completion.mjs';
import { closeDisplayFormula, deleteFormulaDelimiters, pairFormulaDelimiters } from './editing.mjs';
import { bananamarkLinter } from './check.mjs';

/**
 * Enter and Backspace in the dialect, in order: Enter on a line holding only \[ closes the formula below it
 * (closeDisplayFormula), else continues the line's indentation (newlineAndIndent); Backspace in an empty \[\] removes
 * both (deleteFormulaDelimiters). Each falls through to the next binding where it does nothing.
 */
export const bananamarkKeymap = [
  { key: 'Enter', run: closeDisplayFormula },
  { key: 'Enter', run: newlineAndIndent },
  { key: 'Backspace', run: deleteFormulaDelimiters },
];

/**
 * The dialect in an editor: an array of extensions. options:
 * - dialect: bananamark's defineDialect (its grammar, environments, data blocks, tags, messages and switches);
 * - codeLanguages, wikiLinks: without a dialect, more languages of fenced code (CodeMirror Languages, by name) and
 *   whether [[wiki links]] are read (default false), as bananamarkLanguage takes them (wikiLinks for completion and
 *   checking too);
 * - locale: the language of the words beside completion's options and of errors (default en);
 * - completion: completionSources' options (entries, languages, otherLabels, mathCommands…), and sources (more
 *   completion sources of the caller's) and afterComposition(state) (whether completion opens once an input method
 *   commits; default this package's); false for none. Registered as language data, so that other extensions' sources
 *   still work;
 * - lint: checkFile's options (and delay, in ms), or false for none;
 * - highlight (the bm-hl-… classes), keymap (bananamarkKeymap), formulaEditing (\[ and \( closed as they are typed):
 *   each true, or false to leave it out.
 */
export function bananamark({ dialect, codeLanguages, wikiLinks, locale, completion = {}, lint = {}, highlight = true, keymap: keys = true, formulaEditing = true } = {}) {
  const extensions = [bananamarkLanguage({ dialect, codeLanguages, wikiLinks })];
  const switches = wikiLinks === undefined ? {} : { wikiLinks };
  if (highlight) extensions.push(syntaxHighlighting(highlightClasses));
  // Ahead of the defaults: "\[" closes with "\]", not "]"; Enter and Backspace before CodeMirror's.
  if (formulaEditing) extensions.push(Prec.high(EditorView.inputHandler.of(pairFormulaDelimiters)));
  if (keys) extensions.push(Prec.high(keymap.of(bananamarkKeymap)));
  if (completion) {
    const { sources: more = [], afterComposition: opens = afterComposition, ...options } = completion;
    const sources = [...completionSources({ dialect, locale, ...switches, ...options }), ...more];
    extensions.push(
      EditorState.languageData.of(() => sources.map(autocomplete => ({ autocomplete }))),
      autocompletion(),
      // Nothing is offered while an input method composes; once it commits, where names are typed, completion starts.
      EditorView.domEventHandlers({ compositionend: (event, view) => { setTimeout(() => { if (opens(view.state)) startCompletion(view); }); } }),
    );
  }
  if (lint) extensions.push(bananamarkLinter({ dialect, locale, ...switches, ...lint }));
  return extensions;
}
