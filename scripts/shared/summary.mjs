import { decodeHTML } from 'entities';

/** HTML as text on one line: tags removed, entities decoded, runs of spaces as one. */
export const plainText = html => decodeHTML(html.replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();

// Not a page's text: its notices, a TikZ diagram's source in its placeholder (render/math.mjs), a formula's MathML.
const notText = /<aside class="notice [\s\S]*?<\/aside>|<code class="bm-tikz-code">[^<]*<\/code>|<span class="katex-mathml">[\s\S]*?<\/math><\/span>/g;

/**
 * A page's description (og:description): the text of the first plain paragraph of its body's HTML that has any (not
 * one with a class, such as the title of a theorem).
 */
export function pageDescription(html) {
  for (const [, paragraph] of html.replace(notText, '').matchAll(/<p>([\s\S]*?)<\/p>/g)) {
    const text = plainText(paragraph);
    if (text) return text;
  }
  return '';
}
