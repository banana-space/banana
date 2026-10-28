import katex from 'katex';
import { escape } from './escape.mjs';

/**
 * A formula: KaTeX's HTML and MathML, or, with tikz on, for TikZ (a tikzcd or tikzpicture environment, or a ```tikz
 * block: mode "text"), a placeholder for a TikZ compiler (bananamark-tikz): a span with the source in data-tex, and
 * as its text (code.bm-tikz-code), shown where nothing compiles it.
 *
 * options: katex, KaTeX's own options (macros, strict, trust…; not displayMode, output or throwOnError), and
 * rewriteMath(tex), the caller's changes to the TeX before KaTeX reads it, which data-tex also shows (such as a
 * symbol only its fonts draw).
 */

const tikzEnvironment = /\\begin\s*\{\s*(tikzcd|tikzpicture)\s*\}/;

/** KaTeX's HTML for tex; katex: KaTeX's options (strict defaults to "ignore"). */
export function renderKaTeX(tex, display, katexOptions = {}) {
  return katex.renderToString(tex, { strict: 'ignore', ...katexOptions, output: 'htmlAndMathml', displayMode: display, throwOnError: true });
}

/** A formula node ({ tex, display, id, mode }) as HTML, with the options above. */
export function mathHTML({ tex, display = false, id = '', mode = '' }, { katex: katexOptions, rewriteMath, tikz = false } = {}) {
  const source = rewriteMath ? rewriteMath(tex) : tex;
  const idAttribute = id ? ` id="${escape(id)}"` : '';
  const className = `bm-math-rendered${display ? ' bm-math-display' : ''}`;
  if (tikz && (mode === 'text' || tikzEnvironment.test(tex))) {
    return `<span${idAttribute} class="${className} bm-tikz-source" data-tex="${escape(source)}" data-display="${display}" data-tikz-mode="${mode || 'math'}"><code class="bm-tikz-code">${escape(source)}</code></span>`;
  }
  return `<span${idAttribute} class="${className}" data-tex="${escape(source)}" data-display="${display}">${renderKaTeX(source, display, katexOptions)}</span>`;
}
