/**
 * Character classes as Goldmark (Go) defines them, so that the Markdown parsed here reads text exactly as Hugo's
 * Goldmark did: flanking delimiters, typographic quotes and linkified addresses depend on them.
 *
 * Goldmark looks at bytes of UTF-8 in places (a byte of a character outside ASCII is never punctuation, space or
 * a digit there) and at decoded characters in others; both are provided.
 */

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export const utf8 = text => encoder.encode(text);
export const fromUTF8 = bytes => decoder.decode(bytes);

// util.IsPunct, util.IsSpace: ASCII bytes only.
export const isPunctByte = c => (c >= 33 && c <= 47) || (c >= 58 && c <= 64) || (c >= 91 && c <= 96) || (c >= 123 && c <= 126);
export const isSpaceByte = c => c === 9 || c === 10 || c === 13 || c === 32;
export const isNumericByte = c => c >= 48 && c <= 57;
export const isAlphaNumericByte = c => (c >= 97 && c <= 122) || (c >= 65 && c <= 90) || isNumericByte(c);

const punctuation = /\p{P}/u, symbol = /\p{S}/u, letter = /\p{L}/u, digit = /\p{Nd}/u;
// Go's unicode.IsSpace: the Latin-1 spaces, then the White_Space property.
const whiteSpace = new Set([0x1680, 0x2028, 0x2029, 0x202f, 0x205f, 0x3000]);

/** unicode.IsPunct (category P). */
export const isPunct = rune => punctuation.test(String.fromCodePoint(rune));
/** util.IsPunctRune: punctuation or symbol (categories P and S). */
export const isPunctRune = rune => isPunct(rune) || symbol.test(String.fromCodePoint(rune));
/** unicode.IsSpace. */
export function isSpace(rune) {
  if (rune <= 0xff) return rune === 9 || rune === 10 || rune === 11 || rune === 12 || rune === 13 || rune === 32 || rune === 0x85 || rune === 0xa0;
  return (rune >= 0x2000 && rune <= 0x200a) || whiteSpace.has(rune);
}
/** util.IsSpaceRune. */
export const isSpaceRune = rune => (rune <= 256 && isSpaceByte(rune)) || isSpace(rune);
export const isLetter = rune => letter.test(String.fromCodePoint(rune));
export const isDigit = rune => digit.test(String.fromCodePoint(rune));

/**
 * util.ToRune: the character whose UTF-8 encoding contains byte position, decoded from its first byte
 * (U+FFFD where the bytes are not UTF-8).
 */
export function toRune(bytes, position) {
  let i = position;
  while (i > 0 && (bytes[i] & 0xc0) === 0x80) i--;
  const first = bytes[i];
  if (first === undefined) return 0xfffd;
  if (first < 0x80) return first;
  const length = first >= 0xf0 ? 4 : first >= 0xe0 ? 3 : first >= 0xc0 ? 2 : 0;
  if (!length || i + length > bytes.length) return 0xfffd;
  const rune = fromUTF8(bytes.subarray(i, i + length)).codePointAt(0);
  return rune ?? 0xfffd;
}

/** The character before offset in text (a JavaScript string), as a code point; '\n' at the start. */
export function precedingCharacter(text, offset) {
  if (offset <= 0) return 10;
  const low = text.charCodeAt(offset - 1);
  if (low >= 0xdc00 && low <= 0xdfff && offset >= 2) return text.codePointAt(offset - 2);
  return low;
}

/**
 * parser.ScanDelimiter for a run of the byte at line[0] (line: UTF-8 bytes from the run to the end of its line),
 * after the character before: whether it can open and close emphasis-like pairs.
 */
export function scanDelimiter(line, before) {
  const c = line[0];
  let j = 0;
  while (j < line.length && line[j] === c) j++;
  const after = j !== line.length ? toRune(line, j) : 32;
  const beforeIsPunctuation = isPunctRune(before), beforeIsWhitespace = isSpaceRune(before);
  const afterIsPunctuation = isPunctRune(after), afterIsWhitespace = isSpaceRune(after);
  const isLeft = !afterIsWhitespace && (!afterIsPunctuation || beforeIsWhitespace || beforeIsPunctuation);
  const isRight = !beforeIsWhitespace && (!beforeIsPunctuation || afterIsWhitespace || afterIsPunctuation);
  if (c === 95) return { canOpen: isLeft && (!isRight || beforeIsPunctuation), canClose: isRight && (!isLeft || afterIsPunctuation), length: j };
  return { canOpen: isLeft, canClose: isRight, length: j };
}
