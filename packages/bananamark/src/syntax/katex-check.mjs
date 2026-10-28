import katex from 'katex';

// Formulas checked with KaTeX while the document is transformed (checkMath), for editors (their checks and
// previews): an error then names the formula and its line, where rendering would only fail. The same options
// (katex, rewriteMath) as the renderer (../render/math.mjs); diagrams go to TikZ. Off by default: a build that
// renders every page would render every formula twice.

/** KaTeX's complaint about a formula (without its "KaTeX parse error: " prefix), or null when it renders. */
export function katexError(tex, display, { katex: katexOptions = {}, rewriteMath, tikz = false } = {}) {
  if (tikz && /\\begin\s*\{\s*(?:tikzcd|tikzpicture)\s*\}/.test(tex)) return null;
  const source = rewriteMath ? rewriteMath(tex) : tex;
  // KaTeX reports characters it has no metrics for on the console (a page's fonts may draw them): not errors.
  const warn = console.warn;
  console.warn = () => {};
  try {
    katex.renderToString(source, { strict: 'ignore', ...katexOptions, displayMode: display, output: 'htmlAndMathml', throwOnError: true });
    return null;
  } catch (error) {
    return String(error.message).replace(/^KaTeX parse error:\s*/, '');
  } finally { console.warn = warn; }
}
