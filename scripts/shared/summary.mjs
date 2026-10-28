import { decodeHTML } from 'entities';

/** HTML entities as the characters they stand for (as a browser reads text and attribute values). */
export const decodeEntities = decodeHTML;

/**
 * Hugo's automatic summary of a page (resources/page/page_markup.go, v0.168.0: ExtractSummaryFromHTML) and its
 * plainify (tpl.StripHTML), ported: the site's description of a page (og:description) is made from them.
 */

// Go's unicode.IsSpace.
const otherSpaces = new Set([0x1680, 0x2028, 0x2029, 0x202f, 0x205f, 0x3000]);
function isSpace(rune) {
  if (rune <= 0xff) return rune === 9 || rune === 10 || rune === 11 || rune === 12 || rune === 13 || rune === 32 || rune === 0x85 || rune === 0xa0;
  return (rune >= 0x2000 && rune <= 0x200a) || otherSpaces.has(rune);
}
const isProbablyHTMLToken = word => word === '>' || /^<\/?[A-Za-z]+>?$/.test(word) || /^[A-Za-z]+=["']/.test(word);
const trimSpace = text => {
  let start = 0, end = text.length;
  while (start < end && isSpace(text.codePointAt(start))) start += text.codePointAt(start) > 0xffff ? 2 : 1;
  while (end > start && isSpace(text.codePointAt(end - 1))) end--;
  return text.slice(start, end);
};
const voidElements = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);
const rawTextElements = new Set(['script', 'style', 'textarea', 'title', 'iframe', 'xmp', 'noembed', 'noframes']);
const isTagNameByte = c => /[A-Za-z0-9-]/.test(c);

/** htmlTagScanner: the next tag before limit, { name, end } (end: a closing tag), or undefined. */
function nextTag(scanner, limit) {
  const { s } = scanner;
  const skipPast = separator => {
    const i = s.slice(scanner.pos, limit).indexOf(separator);
    scanner.pos = i < 0 ? limit : scanner.pos + i + separator.length;
  };
  for (;;) {
    const i = s.slice(scanner.pos, limit).indexOf('<');
    if (i < 0) { scanner.pos = limit; return; }
    scanner.pos += i + 1;
    if (scanner.pos >= limit) return;
    let end = false;
    const c = s[scanner.pos];
    if (c === '!' || c === '?') {
      if (s.slice(scanner.pos, limit).startsWith('!--')) skipPast('-->'); else skipPast('>');
      continue;
    }
    if (c === '/') { end = true; scanner.pos++; }
    const start = scanner.pos;
    while (scanner.pos < limit && isTagNameByte(s[scanner.pos])) scanner.pos++;
    if (scanner.pos === start) continue;
    const name = s.slice(start, scanner.pos).toLowerCase();
    let selfClosing = false;
    while (scanner.pos < limit) {
      const char = s[scanner.pos++];
      if (char === '"' || char === "'") skipPast(char);
      else if (char === '/') selfClosing = true;
      else if (char === '>') {
        if (selfClosing) continue;
        if (!end && rawTextElements.has(name)) {
          for (;;) {
            skipPast('</');
            if (scanner.pos >= limit) break;
            const rest = s.slice(scanner.pos, limit);
            if (rest.length > name.length && rest.slice(0, name.length).toLowerCase() === name && !isTagNameByte(rest[name.length])) { scanner.pos -= 2; break; }
          }
        }
        return { name, end };
      } else selfClosing = false;
    }
    return { name, end };
  }
}

function pushOrPop(stack, { name, end }) {
  if (end) {
    const i = stack.lastIndexOf(name);
    return i < 0 ? stack : stack.slice(0, i);
  }
  return voidElements.has(name) ? stack : [...stack, name];
}

/** expandSummaryHighToBalancedHTML. */
function balancedHigh(input, low, high, maxHigh) {
  if (low >= high || high >= maxHigh) return high;
  const scanner = { s: input, pos: low };
  let stack = [], tag;
  while ((tag = nextTag(scanner, high))) stack = pushOrPop(stack, tag);
  if (!stack.length) return high;
  for (;;) {
    tag = nextTag(scanner, maxHigh);
    if (!tag) return high;
    stack = pushOrPop(stack, tag);
    if (!stack.length) return scanner.pos;
  }
}

// A TikZ diagram's source in its placeholder (render/math.mjs): not the page's text.
const tikzCode = /<code class="bm-tikz-code">[^<]*<\/code>/g;

/**
 * Page.Summary for HTML (no summary divider, not CJK): whole paragraphs up to the first with the numWords-th word.
 * Diagrams not yet compiled count as nothing.
 */
export function pageSummary(html, numWords = 70) {
  const input = html.replace(tikzCode, '');
  let count = 0;
  const countWord = word => {
    word = trimSpace(word);
    return !word || isProbablyHTMLToken(word) ? 0 : 1;
  };
  for (let j = 0; j < input.length;) {
    const rest = input.slice(j);
    const closing = rest.indexOf('</p>');
    if (closing < 0) break;
    const s = rest.slice(0, closing);
    let wordStart = 0;
    for (let i = 0; i < s.length;) {
      const rune = s.codePointAt(i), length = rune > 0xffff ? 2 : 1;
      if (isSpace(rune) || i + length === s.length) {
        count += countWord(s.slice(wordStart, i));
        wordStart = i;
        if (count >= numWords) break;
      }
      i += length;
    }
    if (count >= numWords) return trimSpace(input.slice(0, balancedHigh(input, 0, j + closing + 4, input.length)));
    j += closing + 3;
  }
  return trimSpace(input);
}

/** plainify (tpl.StripHTML): tags removed (comments too), </p> and <br> as line breaks, runs of spaces as one. */
export function plainify(text) {
  if (!/[<>]/.test(text)) return text;
  const newline = '___bananamarknl_';
  const pre = text.replace(/\n|<\/p>|<br>|<br \/>/g, match => match === '\n' ? ' ' : newline);
  let result = pre.replace(/<!--[\s\S]*?(?:-->|$)/g, '').replace(/<[^>]*>?/g, '');
  if (pre !== text) result = result.replaceAll(newline, '\n');
  let collapsed = '', wasSpace = false;
  for (const char of result) {
    const space = isSpace(char.codePointAt(0));
    if (!(space && wasSpace)) collapsed += char;
    wasSpace = space;
  }
  return collapsed || result;
}
