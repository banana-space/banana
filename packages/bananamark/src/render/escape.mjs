/**
 * Escaping for HTML and URLs: text and attribute values, and the percent-encoding of addresses (as Go's net/url
 * writes it).
 */

const encoder = new TextEncoder();
const hex = byte => byte.toString(16).padStart(2, '0');
const unreserved = c => (c >= 0x61 && c <= 0x7a) || (c >= 0x41 && c <= 0x5a) || (c >= 0x30 && c <= 0x39) || c === 0x2d || c === 0x2e || c === 0x5f || c === 0x7e;

/** url.QueryEscape (Hugo's urlquery): unreserved bytes kept, space as +, the rest %XX. */
export function queryEscape(text) {
  let result = '';
  for (const byte of encoder.encode(text)) {
    if (unreserved(byte)) result += String.fromCharCode(byte);
    else if (byte === 0x20) result += '+';
    else result += `%${hex(byte).toUpperCase()}`;
  }
  return result;
}

const isHex = c => (c >= 0x30 && c <= 0x39) || (c >= 0x41 && c <= 0x46) || (c >= 0x61 && c <= 0x66);
const reserved = new Set([...'!#$&*+,/:;=?@[]'].map(char => char.charCodeAt(0)));

/**
 * A URL as written, made safe for an attribute (html/template's URL normalizer): reserved and unreserved characters
 * and valid %XX escapes are kept; every other byte becomes %XX, in upper case (as pathEscape and queryEscape write).
 */
export function normalizeURL(url) {
  const bytes = encoder.encode(url);
  let result = '';
  for (let i = 0; i < bytes.length; i++) {
    const c = bytes[i];
    if (unreserved(c) || reserved.has(c) || (c === 0x25 && i + 2 < bytes.length && isHex(bytes[i + 1]) && isHex(bytes[i + 2]))) {
      result += String.fromCharCode(c);
    } else result += `%${hex(c).toUpperCase()}`;
  }
  return result;
}

const replacements = { '\0': '\uFFFD', '"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;' };
/** Text and double-quoted attribute values: &, <, > and " escaped (a NUL, which HTML does not allow, as U+FFFD). */
export const escape = value => String(value).replace(/[\0"&<>]/g, char => replacements[char]);
/** Text alone: &, < and > escaped, quotation marks as they are (highlighted code). */
export const escapeText = value => String(value).replace(/[&<>]/g, char => replacements[char]);

/** urls.Parse(value).Scheme, or '' (Go: a scheme is letters, digits, + - . after a letter, before ":"). */
export function scheme(url) {
  const match = url.match(/^([A-Za-z][A-Za-z0-9+.-]*):/);
  return match ? match[1] : '';
}

/**
 * url.URL.EscapedPath for a path (Hugo's RelPermalink): unreserved bytes and $&+,/:;=@ kept, the rest %XX. Also an
 * element's id in a link to it (#…): headings, references and the table of contents spell an anchor alike.
 */
export function pathEscape(path) {
  let result = '';
  for (const byte of encoder.encode(path)) {
    if (unreserved(byte) || '$&+,/:;=@'.includes(String.fromCharCode(byte))) result += String.fromCharCode(byte);
    else result += `%${hex(byte).toUpperCase()}`;
  }
  return result;
}
