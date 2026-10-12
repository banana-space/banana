import katex from 'katex';

// Formulas checked with KaTeX before Hugo renders them, for the online editor (its instant checks and its
// previews): Hugo stops at the first formula KaTeX cannot render with an error that says neither where nor
// which. The same options and the same substitutions as layouts/partials/math.html; diagrams go to TikZ.
// Not in full builds, which would render every formula twice.

/** KaTeX's complaint about a formula (without its "KaTeX parse error: " prefix), or null when it renders. */
export function katexError(tex, display) {
  if (/\\begin\s*\{\s*(?:tikzcd|tikzpicture)\s*\}/.test(tex)) return null;
  const source = tex
    .replace(/\\mathbb\s*\{\s*\\(Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)\s*\}/g, '\\mathbf{\\$1}')
    // The site draws 𝟙 with a font of its own; a letter in braces does to check the rest (braces: \colon𝟙 must
    // not become \colonx).
    .replace(/\\mathbb\s*(?:\{\s*1\s*\}|1)/g, '{x}');
  // KaTeX reports characters it has no metrics for on the console; the site's fonts have them.
  const warn = console.warn;
  console.warn = () => {};
  try {
    katex.renderToString(source, { displayMode: display, output: 'htmlAndMathml', strict: 'ignore', throwOnError: true });
    return null;
  } catch (error) {
    return String(error.message).replace(/^KaTeX parse error:\s*/, '');
  } finally { console.warn = warn; }
}
