import katex from 'katex';
import { parseFragment } from 'parse5';
import { mathText } from './math-text.mjs';

// Formulas in names (titles, aliases, categories, wiki link targets, heading
// anchors) as plain text. KaTeX renders the TeX to MathML, which math-text.mjs
// reads, so equivalent spellings agree: \mathbb Z and \mathbb{Z}, \mathrm{Hom}
// and \operatorname{Hom}, a_{2} and a_2.
const cache = new Map();

/** Display text of inline TeX, as in <title>: H^1(X; ℤ). Throws on invalid TeX. */
export function mathDisplayText(tex) {
  if (!cache.has(tex)) {
    const mathml = katex.renderToString(tex, { output: 'mathml', throwOnError: true, strict: 'ignore' });
    cache.set(tex, mathText(parseFragment(mathml), { compatibility: false }));
  }
  return cache.get(tex);
}

/**
 * Lookup key of inline TeX, for matching names: the display text after NFKC
 * (ℤ matches Z) and without spaces, which carry no meaning inside a formula.
 */
export const mathKey = tex => mathDisplayText(tex).normalize('NFKC').replace(/\s+/g, '');
