/**
 * A document's nodes in its Markdown (@@node:N:node@@, ../syntax/nodes.mjs), the nodes given as env.nodes. A
 * formula's is a passthrough token, as Hugo's passthrough extension (hugo-goldmark-extensions/passthrough v0.5.0)
 * made of a formula's delimiters: inline, it stays in the text; display, wherever it stands in a
 * paragraph, it splits it: the paragraph's text before and after becomes paragraphs of their own (in a tight list
 * item, text blocks with the spaces next to the formula trimmed). Any other node's marker stays in the text, for
 * the renderer to replace (../render/markers.mjs).
 */

const nodePattern = /^@@node:(\d+):node@@/;

export function passthrough(state, silent) {
  const { src, pos } = state;
  if (src.charCodeAt(pos) !== 0x40 || src.charCodeAt(pos + 1) !== 0x40) return false;
  const match = nodePattern.exec(src.slice(pos, pos + 40));
  if (!match) return false;
  const node = state.env.nodes?.[match[1]];
  if (!silent) {
    if (node?.type === 'math') {
      const token = state.push('passthrough', '', 0);
      token.content = match[1];
      token.meta = { type: node.display ? 'block' : 'inline' };
    } else state.pending += match[0];
  }
  state.pos = pos + match[0].length;
  return true;
}

/** The line breaks and spaces at one end of a paragraph's part (where a block formula split it) left out. */
const trimText = (children, leading) => {
  while (true) {
    const token = leading ? children[0] : children.at(-1);
    if (token?.type === 'softbreak') { leading ? children.shift() : children.pop(); continue; }
    if (token?.type !== 'text') return;
    token.content = leading ? token.content.replace(/^[ \t]+/, '') : token.content.replace(/[ \t]+$/, '');
    if (token.content) return;
    leading ? children.shift() : children.pop();
  }
};

/** Splits paragraphs at block formulas (the extension's AST transformer). */
export function splitPassthroughBlocks(state) {
  const tokens = state.tokens, result = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const open = tokens[i - 1], close = tokens[i + 1];
    // Only a formula directly in the paragraph splits it; one inside emphasis or a link stays inline.
    let depth = 0;
    for (const child of token.children ?? []) {
      child.meta = child.type === 'passthrough' ? { ...child.meta, splits: depth === 0 && child.meta.type === 'block' } : child.meta;
      depth += child.nesting;
    }
    if (token.type !== 'inline' || open?.type !== 'paragraph_open' || close?.type !== 'paragraph_close' ||
      !token.children.some(child => child.type === 'passthrough' && child.meta.splits)) {
      result.push(token);
      continue;
    }
    result.pop();
    let children = [], afterBlock = false;
    const flush = () => {
      trimText(children, false);
      if (afterBlock) trimText(children, true);
      if (!children.length) return;
      const inline = Object.assign(Object.create(Object.getPrototypeOf(token)), token, { children });
      result.push(Object.assign(Object.create(Object.getPrototypeOf(open)), open), inline, Object.assign(Object.create(Object.getPrototypeOf(close)), close));
      children = [];
    };
    for (const child of token.children) {
      if (child.type !== 'passthrough' || !child.meta.splits) { children.push(child); continue; }
      flush();
      const block = new state.Token('passthrough_block', '', 0);
      block.content = child.content;
      block.meta = child.meta;
      block.block = true;
      block.level = open.level;
      block.map = open.map;
      result.push(block);
      afterBlock = true;
    }
    trimText(children, true);
    if (children.length) {
      const inline = Object.assign(Object.create(Object.getPrototypeOf(token)), token, { children });
      result.push(Object.assign(Object.create(Object.getPrototypeOf(open)), open), inline, Object.assign(Object.create(Object.getPrototypeOf(close)), close));
    }
    i++;
  }
  state.tokens = result;
}
