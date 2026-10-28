/**
 * The site generator's templates are functions returning HTML, written with the html tag:
 *
 *   html`<a href="${url(page.href)}">${title}</a>`
 *
 * An interpolated value is escaped unless it is HTML already (raw(), or what html returns); arrays are joined, and
 * null, undefined and false leave nothing. url() normalizes an address as Go's html/template did in href and src
 * (so that pages come out as Hugo's did). json() writes data for a <script type="application/json"> as Hugo's
 * jsonify did.
 */

class HTML {
  constructor(text) { this.text = text; }
  toString() { return this.text; }
}

/** Text that is HTML already, put in as it is. */
export const raw = text => text instanceof HTML ? text : new HTML(String(text ?? ''));

const escapes = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' };
/** Text as HTML: & < > " ' as entities. */
export const escape = text => String(text).replace(/[&<>"']/g, char => escapes[char]);

function piece(value) {
  if (value === null || value === undefined || value === false) return '';
  if (value instanceof HTML) return value.text;
  if (Array.isArray(value)) return value.map(piece).join('');
  return escape(value);
}

export function html(strings, ...values) {
  let text = strings[0];
  for (let i = 0; i < values.length; i++) text += piece(values[i]) + strings[i + 1];
  return new HTML(text);
}

const encoder = new TextEncoder();
const unreserved = c => (c >= 0x61 && c <= 0x7a) || (c >= 0x41 && c <= 0x5a) || (c >= 0x30 && c <= 0x39) || c === 0x2d || c === 0x2e || c === 0x5f || c === 0x7e;
const reserved = new Set([...'!#$&*+,/:;=?@[]'].map(char => char.charCodeAt(0)));
const isHex = c => (c >= 0x30 && c <= 0x39) || (c >= 0x41 && c <= 0x46) || (c >= 0x61 && c <= 0x66);

/**
 * An address for an href or src: html/template's normalizer (reserved and unreserved characters and valid %XX
 * kept, every other byte %XX in upper case, as bananamark writes), escaped for the attribute.
 */
export function url(address) {
  const bytes = encoder.encode(String(address ?? ''));
  let result = '';
  for (let i = 0; i < bytes.length; i++) {
    const c = bytes[i];
    if (unreserved(c) || reserved.has(c) || (c === 0x25 && i + 2 < bytes.length && isHex(bytes[i + 1]) && isHex(bytes[i + 2]))) result += String.fromCharCode(c);
    else result += `%${c.toString(16).padStart(2, '0').toUpperCase()}`;
  }
  return raw(escape(result));
}

/** url.QueryEscape (Hugo's urlquery): unreserved bytes kept, space as +, the rest %XX. */
export function queryEscape(text) {
  let result = '';
  for (const byte of encoder.encode(String(text))) {
    if (unreserved(byte)) result += String.fromCharCode(byte);
    else if (byte === 0x20) result += '+';
    else result += `%${byte.toString(16).toUpperCase().padStart(2, '0')}`;
  }
  return result;
}

const sortedKeys = value => Array.isArray(value) ? value.map(sortedKeys)
  : value instanceof HTML ? value.text
  : value && typeof value === 'object' ? Object.fromEntries(Object.keys(value).sort().map(key => [key, sortedKeys(value[key])]))
  : value;

/**
 * Data as Hugo's jsonify wrote it (Go's encoding/json): the keys of maps in order, <, >, & and the line
 * separators as \u escapes. For a script element's content (raw).
 */
export function json(value) {
  return raw(JSON.stringify(sortedKeys(value)).replace(/[<>&\u2028\u2029]/g, char => `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`));
}
