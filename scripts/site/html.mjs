/**
 * The site generator's templates are functions returning HTML, written with the html tag:
 *
 *   html`<a href="${page.href}">${title}</a>`
 *
 * An interpolated value is escaped unless it is HTML already (raw(), or what html returns); arrays are joined, and
 * null, undefined and false leave nothing. Addresses are written percent-encoded where they are made (page.href,
 * relURL, queryEscape). json() writes data for a <script type="application/json">.
 */

class HTML {
  constructor(text) { this.text = text; }
  toString() { return this.text; }
  toJSON() { return this.text; }
}

/** Text that is HTML already, put in as it is. */
export const raw = text => text instanceof HTML ? text : new HTML(String(text ?? ''));

const escapes = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
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

/** Data for a script element's content (raw): JSON, with < escaped so that nothing in it can end the element. */
export const json = value => raw(JSON.stringify(value).replace(/</g, '\\u003c'));
