import katex from 'katex';
import { parseFragment } from 'parse5';
import { mathText } from './math-text.mjs';
import { currentSyntax } from './switches.mjs';

// Formulas in names (titles, aliases, categories, wiki link targets, heading anchors) as plain text. KaTeX renders
// the TeX to MathML, which math-text.mjs reads, so equivalent spellings agree: \mathbb Z and \mathbb{Z}, \mathrm{Hom}
// and \operatorname{Hom}, a_{2} and a_2. KaTeX's options are the dialect's (its macros, say), as in the page's
// formulas; rewriteMath is not applied, as it changes how formulas look, not what they mean.

// Texts by KaTeX's options (a dialect's katex object, or none) and TeX; each holds at most cacheSize, the oldest going
// first, so that a long-running editor or server does not keep every formula it has seen.
const caches = new WeakMap(), plain = new Map(), cacheSize = 5000;

/** Display text of inline TeX, as in <title>: H^1(X; ℤ). Throws on invalid TeX. */
export function mathDisplayText(tex, katexOptions = currentSyntax().katex) {
  let cache = plain;
  if (katexOptions) {
    if (!caches.has(katexOptions)) caches.set(katexOptions, new Map());
    cache = caches.get(katexOptions);
  }
  if (!cache.has(tex)) {
    const mathml = katex.renderToString(tex, { strict: 'ignore', ...katexOptions, output: 'mathml', throwOnError: true, displayMode: false });
    if (cache.size >= cacheSize) cache.delete(cache.keys().next().value);
    cache.set(tex, mathText(parseFragment(mathml), { compatibility: false }));
  }
  return cache.get(tex);
}

/**
 * Lookup key of inline TeX, for matching names: the display text after NFKC
 * (ℤ matches Z) and without spaces, which carry no meaning inside a formula.
 */
export const mathKey = tex => mathDisplayText(tex).normalize('NFKC').replace(/\s+/g, '');
