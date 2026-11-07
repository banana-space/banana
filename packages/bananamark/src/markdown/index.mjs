import MarkdownIt from 'markdown-it';
import footnotes from 'markdown-it-footnote';
import { leftOutBlock } from './comments.mjs';
import { linkify } from './linkify.mjs';
import { typographer } from './typographer.mjs';
import { formula, splitFormulaBlocks } from './formulas.mjs';
import { headingAttributes, fenceAttributes } from './attributes.mjs';
import { dialectEmphasis } from './emphasis.mjs';

/**
 * markdown-it set up to read the dialect's Markdown: CommonMark with tables, strikethrough, footnotes, bare addresses
 * as links (./linkify.mjs) and typography (./typographer.mjs); heading attributes; images alone in a paragraph left
 * unwrapped; comments and declarations left out (./comments.mjs; the syntax layer takes an author's tags and rejects
 * others); and the dialect's nodes for formulas.
 *
 * Render hooks (links, images, headings, code blocks, formulas, tables) are left to the caller: see ../render/.
 */

/** An image alone in its paragraph is left unwrapped; marked block. */
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
  // Before HTML blocks, which only the list parser's view of a page still has (../syntax/lists.mjs: its stand-ins for
  // environment fences, and tags, which pages have as nodes).
  md.block.ruler.before('html_block', 'left_out', leftOutBlock, { alt: ['paragraph', 'reference', 'blockquote'] });
  md.inline.ruler.before('backticks', 'formula', formula);
  dialectEmphasis(md);
  md.use(footnotes);
  md.inline.ruler.disable('footnote_inline');
  md.core.ruler.before('inline', 'heading_attributes', headingAttributes);
  md.core.ruler.after('inline', 'formula_blocks', splitFormulaBlocks);
  md.core.ruler.before('formula_blocks', 'image_attributes', imageAttributes);
  md.core.ruler.after('formula_blocks', 'standalone_images', standaloneImages);
  // Before escaped characters and entities join the text: they are not read as addresses or quotation marks.
  md.core.ruler.before('text_join', 'bare_links', linkify);
  md.core.ruler.before('text_join', 'typographer', typographer);
  fenceAttributes(md);
  // Destinations are kept as written (the link hook checks them).
  md.normalizeLink = url => url;
  md.normalizeLinkText = url => url;
  md.validateLink = () => true;
  return md;
}
