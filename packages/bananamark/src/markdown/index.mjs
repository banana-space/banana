import MarkdownIt from 'markdown-it';
import footnotes from 'markdown-it-footnote';
import { linkify, mayLinkify } from './linkify.mjs';
import { typographer } from './typographer.mjs';
import { passthrough, splitPassthroughBlocks } from './passthrough.mjs';
import { headingAttributes, fenceAttributes } from './attributes.mjs';

/**
 * markdown-it set up to read Markdown as Goldmark (v1.8.6, Hugo's Markdown parser) does in the configuration the
 * dialect was first written for: CommonMark with tables, strikethrough, footnotes, linkify and the typographer;
 * heading attributes; images alone in a paragraph left unwrapped; raw HTML left out; and the passthrough delimiters
 * for formulas. Pages written for Hugo then read the same.
 *
 * The output is Goldmark's HTML where pages depend on it. Render hooks (links, images, headings, code blocks,
 * formulas, tables) are left to the caller: see ../render/.
 */

// markdown-it's text rule stops at these (rules_inline/text): ASCII punctuation that starts its own syntax.
const terminators = new Set([10, 33, 35, 36, 37, 38, 42, 43, 45, 58, 60, 61, 62, 64, 91, 92, 93, 94, 95, 96, 123, 125, 126]);

/**
 * Text up to the next character some rule may take: markdown-it's own, the typographer's quotes and full stop,
 * and a space or "(" that linkify may follow with an address.
 */
function text(state, silent) {
  const { src, posMax } = state;
  let pos = state.pos;
  for (; pos < posMax; pos++) {
    const c = src.charCodeAt(pos);
    if (terminators.has(c) || c === 0x27 || c === 0x22 || c === 0x2e) break;
    if ((c === 0x20 || c === 0x28) && mayLinkify(src, pos + 1)) break;
  }
  if (pos === state.pos) return false;
  if (!silent) state.pending += src.slice(state.pos, pos);
  state.pos = pos;
  return true;
}

/** An image alone in its paragraph is left unwrapped (wrapStandAloneImageWithinParagraph = false); marked block. */
function standaloneImages(state) {
  const tokens = state.tokens;
  for (let i = 1; i < tokens.length - 1; i++) {
    const inline = tokens[i];
    if (inline.type !== 'inline' || tokens[i - 1].type !== 'paragraph_open' || tokens[i + 1].type !== 'paragraph_close') continue;
    const children = inline.children;
    if (children.length !== 1 || children[0].type !== 'image') continue;
    children[0].meta = { ...children[0].meta, block: true };
    tokens[i - 1].hidden = tokens[i + 1].hidden = true;
    tokens[i - 1].meta = { ...tokens[i - 1].meta, standaloneImage: true };
  }
}

/**
 * An image's attributes after it: ![caption](image.png){width=200}. The braces right after the image are taken off
 * the text, their width put in the image's meta (checked by the renderer's image hook).
 */
function imageAttributes(state) {
  for (const token of state.tokens) {
    if (token.type !== 'inline') continue;
    const children = token.children;
    for (let i = 0; i < children.length - 1; i++) {
      const next = children[i + 1];
      if (children[i].type !== 'image' || next.type !== 'text') continue;
      const match = next.content.match(/^\{width=([^{}\s]*)\}/);
      if (!match) continue;
      children[i].meta = { ...children[i].meta, width: match[1] };
      next.content = next.content.slice(match[0].length);
      if (!next.content) children.splice(i + 1, 1);
    }
  }
}

/** A new parser (markdown-it, set up as above). */
export function createMarkdownParser() {
  const md = new MarkdownIt('default', { html: true, xhtmlOut: false, breaks: false, linkify: false, typographer: false });
  md.inline.ruler.at('text', text);
  md.inline.ruler.before('text', 'goldmark_linkify', linkify);
  md.inline.ruler.before('backticks', 'passthrough', passthrough);
  md.inline.ruler.push('typographer', typographer);
  md.use(footnotes);
  md.inline.ruler.disable('footnote_inline');
  md.core.ruler.before('inline', 'heading_attributes', headingAttributes);
  md.core.ruler.after('inline', 'passthrough_blocks', splitPassthroughBlocks);
  md.core.ruler.before('passthrough_blocks', 'image_attributes', imageAttributes);
  md.core.ruler.after('passthrough_blocks', 'standalone_images', standaloneImages);
  fenceAttributes(md);
  // Destinations are kept as written (Goldmark neither percent-encodes nor rejects them; the link hook checks).
  md.normalizeLink = url => url;
  md.normalizeLinkText = url => url;
  md.validateLink = () => true;
  // Raw HTML is not rendered (renderer.unsafe = false).
  md.renderer.rules.html_block = () => '<!-- raw HTML omitted -->\n';
  md.renderer.rules.html_inline = () => '<!-- raw HTML omitted -->';
  return md;
}
