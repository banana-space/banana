/**
 * Attribute lists in braces, as Goldmark reads them after a heading's text ({#id .class key="value"},
 * parser.attribute.title) and Hugo after a code fence's language (```lang {key="value"}); and the nodes the syntax
 * layer writes in their place (../syntax/nodes.mjs): a heading node after a heading's text, a caption node after a
 * TikZ fence's language.
 */

const name = /^[A-Za-z_:][\w.:-]*/;

/** Parses "{…}" (the whole of text): { id, classes, attributes } or undefined when it is not an attribute list. */
export function parseAttributeList(text) {
  if (!text.startsWith('{') || !text.endsWith('}')) return;
  const body = text.slice(1, -1);
  const result = { id: undefined, classes: [], attributes: [] };
  let i = 0;
  const skip = () => { while (i < body.length && /[ \t\n]/.test(body[i])) i++; };
  skip();
  while (i < body.length) {
    if (body[i] === '#' || body[i] === '.') {
      const match = body.slice(i + 1).match(/^[^\s{}#.]+/);
      if (!match) return;
      if (body[i] === '#') result.id = match[0];
      else result.classes.push(match[0]);
      i += 1 + match[0].length;
    } else {
      const key = body.slice(i).match(name);
      if (!key) return;
      i += key[0].length;
      skip();
      if (body[i] !== '=') return;
      i++;
      skip();
      let value;
      if (body[i] === '"' || body[i] === "'") {
        const quote = body[i];
        let end = i + 1, out = '';
        while (end < body.length && body[end] !== quote) {
          if (body[end] === '\\' && end + 1 < body.length) { out += body[end + 1]; end += 2; continue; }
          out += body[end++];
        }
        if (end >= body.length) return;
        value = out;
        i = end + 1;
      } else {
        const bare = body.slice(i).match(/^[^\s"'{}]+/);
        if (!bare) return;
        value = bare[0];
        i += bare[0].length;
      }
      if (key[0] === 'id') result.id = value;
      else if (key[0] === 'class') result.classes.push(value);
      else result.attributes.push([key[0], value]);
    }
    const before = i;
    skip();
    if (i === before && i < body.length) return;
  }
  return result;
}

/** The attribute list at the end of text (after its last unescaped "{"), and the text before it. */
function trailingAttributes(text) {
  const trimmed = text.replace(/[ \t]+$/, '');
  if (!trimmed.endsWith('}')) return;
  for (let start = trimmed.lastIndexOf('{'); start >= 0; start = trimmed.lastIndexOf('{', start - 1)) {
    if (start > 0 && trimmed[start - 1] === '\\') continue;
    const parsed = parseAttributeList(trimmed.slice(start));
    if (parsed) return { text: trimmed.slice(0, start).replace(/[ \t]+$/, ''), parsed };
  }
}

/** The node of type a marker at the end of text stands for, and the text before it; or undefined. */
function trailingNode(text, nodes, type) {
  const match = text.match(/[ \t]*@@node:(\d+):node@@[ \t]*$/);
  const node = match && nodes?.[match[1]];
  if (node?.type === type) return { text: text.slice(0, match.index), node };
}

/**
 * Core rule (before inline): a heading's trailing heading node, or {…}, becomes the attributes of its heading_open:
 * id, class, the author's, and the section number (data-section-number, or data-section-unnumbered).
 */
export function headingAttributes(state) {
  const tokens = state.tokens;
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i].type !== 'heading_open') continue;
    const inline = tokens[i + 1];
    const heading = trailingNode(inline.content, state.env.nodes, 'heading');
    const found = heading
      ? { text: heading.text, parsed: { ...heading.node, attributes: [...heading.node.attributes, ...(heading.node.number ? [['data-section-number', heading.node.number]] : heading.node.unnumbered ? [['data-section-unnumbered', 'true']] : [])] } }
      : trailingAttributes(inline.content);
    if (!found) continue;
    inline.content = found.text;
    const { id, classes, attributes } = found.parsed;
    if (id !== undefined) tokens[i].attrSet('id', id);
    if (classes.length) tokens[i].attrSet('class', classes.join(' '));
    for (const [key, value] of attributes) tokens[i].attrSet(key, value);
  }
}

/** Splits a fence's info string into its language and its {…} attributes (token.meta.fence). */
export function fenceAttributes(md) {
  md.core.ruler.after('block', 'fence_attributes', state => {
    for (const token of state.tokens) {
      if (token.type !== 'fence') continue;
      const caption = trailingNode(token.info.trim(), state.env.nodes, 'caption');
      if (caption) {
        token.meta = { ...token.meta, fence: { language: caption.text.trim().split(/\s+/)[0] ?? '', attributes: { caption: caption.node.text } } };
        continue;
      }
      const info = token.info.trim();
      const brace = info.indexOf('{');
      const parsed = brace >= 0 ? parseAttributeList(info.slice(brace).trim()) : undefined;
      const language = (brace >= 0 && parsed ? info.slice(0, brace) : info).trim().split(/\s+/)[0] ?? '';
      const attributes = Object.fromEntries(parsed?.attributes ?? []);
      if (parsed?.id) attributes.id = parsed.id;
      if (parsed?.classes.length) attributes.class = parsed.classes.join(' ');
      token.meta = { ...token.meta, fence: { language, attributes } };
    }
  });
}
