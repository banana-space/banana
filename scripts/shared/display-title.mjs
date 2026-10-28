import katex from 'katex';
import { pageName } from './names.mjs';

export const escapeHTML = text => text.replace(/[&<>"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char]);

/** A title's parts (pageName's, or a page's titleParts) as HTML, formulas rendered by KaTeX as the templates render them (scripts/site/templates/layout.mjs). */
export function titleHTML(parts) {
  return parts.map(part => {
    if (!Object.hasOwn(part, 'tex')) return escapeHTML(part.text);
    const tex = part.tex.replace(/\\mathbb\s*\{\s*\\(Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)\s*\}/g, '\\mathbf{\\$1}').replace(/\\mathbb\s*(?:\{\s*1\s*\}|1)/g, '𝟙');
    return `<span class="bm-math-rendered">${katex.renderToString(tex, { output: 'htmlAndMathml', strict: 'ignore', throwOnError: false })}</span>`;
  }).join('');
}

/**
 * A title as the site shows it: { title, titleHTML }, the plain text (formulas as text: (∞,1)-层) and the HTML with
 * formulas rendered.
 */
export function displayTitle(title, path) {
  try {
    const { name, parts } = pageName(title, path, 'title', { typeset: true });
    return { title: name, titleHTML: titleHTML(parts) };
  } catch {
    return { title, titleHTML: escapeHTML(title) };
  }
}
