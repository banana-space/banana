/**
 * Addresses written bare: http(s) addresses, www. addresses and e-mail addresses become links, in the renderer (the
 * core rule linkify) and in the editor (../highlight/grammar.mjs: bareLinkAt), so that both read them alike.
 *
 * An address is in ASCII and ends at the first character that is not, so that Han text right after it is not taken
 * into it; an address with other characters is written as a [link](…) or <…>. Punctuation ending the sentence is not
 * part of it, nor are unbalanced closing parentheses.
 */

const host = String.raw`[a-zA-Z0-9](?:[-a-zA-Z0-9.]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}`;
const web = String.raw`(?<![a-zA-Z0-9+.-])(?:https?:\/\/|www\.)${host}(?::\d+)?(?:[/?#][-a-zA-Z0-9@:%_+.~#$!?&/=();,*]*)?`;
const email = String.raw`(?<![a-zA-Z0-9._%+@-])[a-zA-Z0-9._%+-]+@${host}(?![-_a-zA-Z0-9])`;
const anywhere = new RegExp(`${web}|${email}`, 'g'), here = new RegExp(`${web}|${email}`, 'y');
// Text without these holds no address: most of a page's text, which need not be searched.
const possible = /:\/\/|www\.|@/;

/** The address that a match stands for, without what follows the address itself. */
function trimmed(match) {
  // A document's node marker right after the address (../syntax/nodes.mjs).
  let end = match.indexOf('@@');
  if (end < 0) end = match.length;
  while (end > 0 && '?!.,:;*_~'.includes(match[end - 1])) end--;
  const count = char => match.slice(0, end).split(char).length - 1;
  while (match[end - 1] === ')' && count(')') > count('(')) end--;
  return match.slice(0, end);
}

const address = text => /^https?:/.test(text) ? text : text.startsWith('www.') ? `https://${text}` : `mailto:${text}`;

/** The end of the bare address starting at position in text, or -1. */
export function bareLinkAt(text, position) {
  here.lastIndex = position;
  const match = here.exec(text);
  return match ? position + trimmed(match[0]).length : -1;
}

function linked(tokens, Token) {
  const result = [];
  let depth = 0;
  for (const token of tokens) {
    if (token.type === 'image' && token.children) token.children = linked(token.children, Token);
    if (token.type === 'link_open') depth++;
    if (token.type === 'link_close') depth--;
    if (token.type !== 'text' || depth || !possible.test(token.content)) { result.push(token); continue; }
    let at = 0;
    for (const match of token.content.matchAll(anywhere)) {
      if (match.index < at) continue;
      const text = trimmed(match[0]);
      if (match.index > at) result.push(Object.assign(new Token('text', '', 0), { content: token.content.slice(at, match.index) }));
      const open = new Token('link_open', 'a', 1), close = new Token('link_close', 'a', -1);
      open.attrs = [['href', address(text)]];
      for (const part of [open, close]) Object.assign(part, { markup: 'linkify', info: 'auto' });
      result.push(open, Object.assign(new Token('text', '', 0), { content: text }), close);
      at = match.index + text.length;
    }
    if (at === 0) result.push(token);
    else if (at < token.content.length) result.push(Object.assign(new Token('text', '', 0), { content: token.content.slice(at) }));
  }
  return result;
}

export function linkify(state) {
  for (const token of state.tokens) if (token.type === 'inline') token.children = linked(token.children, state.Token);
}
