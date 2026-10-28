/**
 * The site's changes to formulas before KaTeX (bananamark's rewriteMath), which data-tex also shows: \mathbb{1}
 * becomes 𝟙, drawn by the site's BananaMath font, and \mathbb of a capital Greek letter, which has no double-struck
 * form, bold.
 */
export const rewriteMath = tex => tex
  .replace(/\\mathbb\s*\{\s*\\(Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)\s*\}/g, '\\mathbf{\\$1}')
  .replace(/\\mathbb\s*(?:\{\s*1\s*\}|1)/g, '𝟙');
