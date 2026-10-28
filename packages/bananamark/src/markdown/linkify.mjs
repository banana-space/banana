import { isAlphaNumericByte, isPunctByte } from './characters.mjs';

/**
 * Goldmark's linkify extension (extension/linkify.go, v1.8.6) as a markdown-it inline rule: bare http(s)/ftp
 * addresses, www. addresses and e-mail addresses become links.
 *
 * Goldmark tries it only where its inline parser stops: after a space or "(" (which stays text), and at what it
 * takes as the start of a line, which is also right after any inline element (a link, code, a typographic quote,
 * an emphasis mark: anything it made a node of). Here that is where nothing is pending as text: the start of the
 * block or of a line, or just after a token. ("*", "_" and "~" are triggers too, but emphasis takes them first.)
 */

const wwwPattern = /^www\.[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]+(?:[/#?][-a-zA-Z0-9@:%_+.~#!?&/=();,'">^{}[\]`]*)?/;
const urlPattern = /^(?:http|https|ftp):\/\/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]+(?::\d+)?(?:[/#?][-a-zA-Z0-9@:%_+.~#$!?&/=();,'">^{}[\]`]*)?/;
const emailLocal = /^[!#$%&'*+\-./0-9=?A-Z^_`a-z{|}~]+/;
const emailDomain = /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/;

/** util.FindEmailIndex: the end of an e-mail address at the start of line, or -1. */
function emailEnd(line) {
  const local = line.match(emailLocal);
  if (!local || line[local[0].length] !== '@') return -1;
  const domain = line.slice(local[0].length + 1).match(emailDomain);
  return domain ? local[0].length + 1 + domain[0].length : -1;
}

const count = (text, char) => text.split(char).length - 1;

/** Whether text at offset could start what linkify takes (for the text rule, which must stop before it). */
export function mayLinkify(text, offset) {
  const rest = text.slice(offset, offset + 8);
  return /^(?:https?:|ftp:|www\.)/.test(rest) || /^[!#$%&'*+\-./0-9=?A-Z^_`a-z{|}~]+@/.test(text.slice(offset, offset + 80));
}

export function linkify(state, silent) {
  if (state.linkLevel > 0) return false;
  const { src, pos } = state;
  const c = src[pos];
  const trigger = c === ' ' || c === '(';
  // At the start of a line, punctuation is tried only by the parsers it triggers.
  if (!trigger && (state.pending !== '' || isPunctByte(src.charCodeAt(pos)) || c === '\n')) return false;
  const newline = src.indexOf('\n', pos);
  let line = src.slice(pos + (trigger ? 1 : 0), newline < 0 ? src.length : newline);
  let match, protocol = '', email = false;
  if (/^(?:http:|https:|ftp:)/.test(line)) match = line.match(urlPattern)?.[0].length;
  if (match === undefined && line.startsWith('www.')) {
    match = line.match(wwwPattern)?.[0].length;
    // Hugo gives these its linkifyProtocol (https by default) rather than Goldmark's http.
    protocol = 'https://';
  }
  let start = 0;
  if (match === undefined) {
    if (line.length && isPunctByte(line.charCodeAt(0))) return false;
    const stop = emailEnd(line);
    if (stop < 0) return false;
    const at = line.indexOf('@');
    if (!line.slice(at, stop - 1).includes('.')) return false;
    match = line[stop - 1] === '.' ? stop - 1 : stop;
    if (match < line.length && (line[match] === '-' || line[match] === '_')) return false;
    email = true;
  }
  // Trailing punctuation is not part of the address; nor are unbalanced closing parentheses, or an entity.
  let i = match - 1;
  while (i > 0 && '?!.,:*_~'.includes(line[i])) i--;
  i++;
  if (line[i - 1] === ')') i -= Math.max(0, count(line.slice(0, i), ')') - count(line.slice(0, i), '('));
  else if (line[i - 1] === ';') {
    let j = i - 2;
    while (j >= start && isAlphaNumericByte(line.charCodeAt(j))) j--;
    if (j !== i - 2 && line[j] === '&') i = j;
  }
  if (!silent) {
    if (trigger) state.pending += c;
    const address = line.slice(0, i);
    const open = state.push('link_open', 'a', 1);
    open.attrs = [['href', email ? `mailto:${address}` : protocol + address]];
    open.markup = 'linkify';
    open.info = 'auto';
    const text = state.push('text', '', 0);
    text.content = address;
    const close = state.push('link_close', 'a', -1);
    close.markup = 'linkify';
    close.info = 'auto';
  }
  state.pos = pos + (trigger ? 1 : 0) + i;
  return true;
}
