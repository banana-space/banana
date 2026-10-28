import { escape as escapeHTML } from '../render/escape.mjs';

/**
 * Renders markdown-it's tokens as Goldmark's HTML renderer (renderer/html, v1.8.6) writes them, with render hooks
 * (as Hugo's) for links, images, headings, code blocks, formulas and tables.
 *
 * The flat token stream is first made a tree, since Goldmark's output depends on siblings (a tight list item's
 * text block is followed by a newline only when something follows it).
 */

/** Nests tokens: each *_open token gets the tokens up to its *_close as children; inline tokens keep theirs. */
export function tree(tokens) {
  const root = { type: 'root', children: [] }, stack = [root];
  for (const token of tokens) {
    if (token.nesting === 1) {
      const node = { type: token.type.replace(/_open$/, ''), token, children: [] };
      stack.at(-1).children.push(node);
      stack.push(node);
    } else if (token.nesting === -1) {
      stack.pop();
    } else {
      const node = { type: token.type, token, children: token.children ? tree(token.children).children : [] };
      stack.at(-1).children.push(node);
    }
  }
  return root;
}

/**
 * Plain text of inline nodes, as Hugo's render.TextPlain gives it (.PlainText): the text of each node, and of any
 * other element only its first child's (so Ti*k*Z in a link reads "Ti"); line breaks and formulas give nothing.
 */
export function plainText(nodes) {
  const textOf = node => {
    if (!node) return '';
    if (node.type === 'text' || node.type === 'typographic') return node.token.content;
    if (node.type === 'html_inline') return node.token.content.replace(/<[^>]*>/g, '').trim();
    if (node.type === 'code_inline') return node.token.content;
    return textOf(node.children[0]);
  };
  return nodes.map(textOf).join('');
}

const footnoteNumber = token => token.meta.id + 1;

export function createTokenRenderer(hooks) {
  function inline(nodes) {
    let html = '';
    for (const node of nodes) html += inlineNode(node);
    return html;
  }

  function inlineNode(node) {
    const { token } = node;
    switch (node.type) {
      case 'text': return escapeHTML(token.content);
      // A curly quote, a dash or an ellipsis: nothing to escape.
      case 'typographic': return token.content;
      case 'softbreak': return '\n';
      case 'hardbreak': return '<br>\n';
      case 'code_inline': return `<code>${escapeHTML(token.content)}</code>`;
      case 'em': return `<em>${inline(node.children)}</em>`;
      case 'strong': return `<strong>${inline(node.children)}</strong>`;
      case 's': return `<del>${inline(node.children)}</del>`;
      case 'html_inline': return '<!-- raw HTML omitted -->';
      case 'link': return hooks.link({
        destination: token.attrGet('href') ?? '',
        title: token.attrGet('title') ?? '',
        text: inline(node.children),
        plainText: plainText(node.children),
        auto: token.info === 'auto' || token.markup === 'autolink',
      });
      case 'image': return hooks.image({
        destination: token.attrGet('src') ?? '',
        title: token.attrGet('title') ?? '',
        text: inline(node.children),
        plainText: plainText(node.children),
        isBlock: Boolean(token.meta?.block),
        width: token.meta?.width,
      });
      // A formula left in its paragraph is inline to Hugo, whatever its delimiters.
      case 'passthrough': return hooks.passthrough({ inner: token.content, type: 'inline' });
      case 'footnote_ref': {
        const n = footnoteNumber(token), sub = token.meta.subId;
        return `<sup id="fnref${sub > 0 ? sub : ''}:${n}"><a href="#fn:${n}" class="bm-footnote-ref" role="doc-noteref">${n}</a></sup>`;
      }
      case 'footnote_anchor': {
        const n = footnoteNumber(token), sub = token.meta.subId;
        return `&nbsp;<a href="#fnref${sub > 0 ? sub : ''}:${n}" class="bm-footnote-backref" role="doc-backlink">↩\uFE0E</a>`;
      }
      default:
        if (node.children.length) return inline(node.children);
        return escapeHTML(token.content ?? '');
    }
  }

  function blocks(nodes) {
    let html = '';
    nodes.forEach((node, index) => { html += block(node, nodes[index + 1]); });
    return html;
  }

  /** The cells of a table row: { alignment, text }. */
  const cells = row => row.children.map(cell => {
    const style = cell.token.attrGet('style') ?? '';
    const alignment = style.match(/text-align:\s*(\w+)/)?.[1] ?? '';
    return { alignment, text: inline(cell.children.flatMap(child => child.type === 'inline' ? child.children : [child])) };
  });

  function block(node, next) {
    const { token } = node;
    switch (node.type) {
      case 'paragraph': {
        // Footnote back-links are tokens of their own after the paragraph's inline content.
        const content = node.children.map(child => child.type === 'inline' ? inline(child.children) : inlineNode(child)).join('');
        if (token.meta?.standaloneImage) return content;
        // A tight list item's paragraph: Goldmark's text block, with a newline only before a following sibling.
        if (token.hidden) return content + (next && node.children.some(child => child.children.length) ? '\n' : '');
        return `<p>${content}</p>\n`;
      }
      case 'heading': {
        const attributes = Object.fromEntries(token.attrs ?? []);
        const children = node.children.flatMap(child => child.children);
        return hooks.heading({ level: Number(token.tag.slice(1)), anchor: attributes.id ?? '', attributes, text: inline(children), plainText: plainText(children) });
      }
      case 'blockquote': return `<blockquote>\n${blocks(node.children)}</blockquote>\n`;
      case 'bullet_list': return `<ul>\n${blocks(node.children)}</ul>\n`;
      case 'ordered_list': {
        const start = Number(token.attrGet('start') ?? 1);
        return `<ol${start !== 1 ? ` start="${start}"` : ''}>\n${blocks(node.children)}</ol>\n`;
      }
      case 'list_item': {
        const first = node.children[0];
        const textBlock = first?.type === 'paragraph' && first.token.hidden;
        return `<li>${first && !textBlock ? '\n' : ''}${blocks(node.children)}</li>\n`;
      }
      case 'hr': return '<hr>\n';
      case 'code_block': return `<pre><code>${escapeHTML(token.content)}</code></pre>\n`;
      // Hugo's .Inner leaves out the newline that ends the last line.
      case 'fence': return hooks.codeBlock({ type: token.meta?.fence?.language ?? '', attributes: token.meta?.fence?.attributes ?? {}, inner: token.content.replace(/\n$/, '') });
      case 'html_block': return '<!-- raw HTML omitted -->\n';
      case 'passthrough_block': return `${hooks.passthrough({ inner: token.content, type: 'block' })}\n`;
      case 'table': {
        const head = node.children.find(child => child.type === 'thead'), body = node.children.find(child => child.type === 'tbody');
        return hooks.table({ head: head ? head.children.map(cells) : [], body: body ? body.children.map(cells) : [] });
      }
      case 'footnote_block': return `<div class="bm-footnotes" role="doc-endnotes">\n<hr>\n<ol>\n${blocks(node.children)}</ol>\n</div>\n`;
      case 'footnote': return `<li id="fn:${footnoteNumber(token)}">\n${blocks(node.children)}</li>\n`;
      case 'footnote_anchor': return inlineNode(node);
      case 'inline': return inline(node.children);
      default: return blocks(node.children);
    }
  }

  return { render: tokens => blocks(tree(tokens).children), inline: tokens => inline(tree(tokens).children) };
}
