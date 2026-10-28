import { readFormula } from './syntax/scan.mjs';

/**
 * bananamark/scan: where the dialect's inline pieces start and end, as the renderer reads them, for editors and
 * other tools that must agree with it (bananamark-codemirror uses these). No dependencies.
 *
 * - readMath(text, start): a formula ($…$, $$…$$, \(…\), \[…\]) at start: { value (its TeX), display, end }, or
 *   undefined (also when it does not close before a blank line). Each call on its own.
 * - mathReader(): a readMath for a scan of a text from left to right, which remembers the last formula that did not
 *   close, and takes an opener after it, up to where that formula's scan stopped, not to close either, without
 *   scanning again (text full of unclosed openers, "${${${…", then takes linear time, not quadratic).
 * - readTag(text, start): an HTML-style tag at start: { end, name, closing, selfClosing, attributes: [{ key, value,
 *   keyFrom, keyTo, valueTo }] } (positions in text), or undefined.
 * - escaped(text, position): whether the character at position is escaped (an odd number of backslashes before it).
 * - readLabelledMarker(text, start): a labelled list item's marker, (a) or iv), at start: { end, label,
 *   parenthesized }, or undefined; labelledMarkerSource: the regular expression's source for one.
 * - markerPattern: what a line starts with before its text (indentation, quote markers, a list item's marker or a
 *   footnote's label); continuation(line): the prefix for lines continuing its block; labelledWidth(marker): where a
 *   labelled item's text starts, from its marker's start.
 * - fenceMarker(line): the fence (``` or ~~~) a line of fenced code starts or ends with, or undefined;
 *   closesFence(marker, open): whether that fence closes code opened by open.
 */
export { closesFence, continuation, escaped, fenceMarker, labelledMarkerSource, labelledWidth, markerPattern, readLabelledMarker, readTag } from './syntax/scan.mjs';

/** See above. */
export const readMath = (text, start) => readFormula(text, start, null);

/** See above. */
export function mathReader() {
  const state = {};
  return (text, start) => readFormula(text, start, state);
}
