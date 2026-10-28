import { isDigit, isLetter, isNumericByte, isPunct, isPunctByte, isPunctRune, isSpace, isSpaceByte, isSpaceRune, precedingCharacter, scanDelimiter, toRune, utf8 } from './characters.mjs';

/**
 * Goldmark's typographer (extension/typographer.go, v1.8.6), ported rule for rule as a markdown-it inline rule:
 * --- —, -- –, ... …, and straight quotes made curly from what surrounds them and how many are open in the block
 * (not Goldmark's << « and >> », which CommonMark does not have). Its quirks are kept, so that pages written for
 * Hugo read as they did.
 *
 * Goldmark reads "the rest of the line" in UTF-8 bytes: line[1] is the byte after the mark, which for a
 * character outside ASCII is the first of its bytes (never punctuation or a space).
 */

const substitution = (state, text, length) => {
  // A token of its own, as Goldmark makes a node of it: what follows starts afresh (see linkify.mjs), and it is
  // not merged with the text around it (a link's plain text stops at its first node).
  const token = state.push('typographic', '', 0);
  token.content = text;
  state.pos += length;
  return true;
};

const T = 116, E = 101, N = 110, L = 108, S = 115, M = 109, D = 100, V = 118, R = 114;

export function typographer(state, silent) {
  const { src, pos } = state;
  const c = src.charCodeAt(pos);
  if (c !== 0x2d && c !== 0x2e && c !== 0x27 && c !== 0x22) return false;
  const newline = src.indexOf('\n', pos);
  const line = utf8(newline < 0 ? src.slice(pos) : src.slice(pos, newline + 1));
  const sub = (text, length) => silent ? (state.pos += length, true) : substitution(state, text, length);

  if (line.length > 2) {
    if (c === 0x2d) {
      if (line[1] === 0x2d && line[2] === 0x2d) return sub('—', 3);
    } else if (c === 0x2e) {
      if (line[1] === 0x2e && line[2] === 0x2e) return sub('…', 3);
      return false;
    }
  }
  if (line.length > 1) {
    if (c === 0x2d && line[1] === 0x2d) return sub('–', 2);
  }
  if (c !== 0x27 && c !== 0x22) return false;

  const before = precedingCharacter(src, pos);
  const d = scanDelimiter(line, before);
  // Unclosed quotes are counted per block (Goldmark resets them when the block closes); not while markdown-it
  // only looks ahead (silent: skipping over a link's text to find its end).
  const counter = state.goldmarkQuotes ??= { single: 0, double: 0 };
  const closing = () => {
    const isClose = d.canClose && !d.canOpen;
    const maybeClose = d.canClose && d.canOpen && line.length > 1 && isPunct(toRune(line, 1)) &&
      (line.length === 2 || (line.length > 2 && isPunctByte(line[2])) || isSpaceByte(line[2]));
    return isClose || maybeClose;
  };
  if (c === 0x27) {
    // Decades: '90s.
    if (d.canOpen && !d.canClose && line.length > 3 && isNumericByte(line[1]) && isNumericByte(line[2]) && line[3] === S) {
      const after = line.length > 4 ? toRune(line, 4) : 32;
      if (line.length === 3 || isSpaceRune(after) || isPunctRune(after)) return sub('’', 1);
    }
    // 'twas, 'em, 'net.
    if (line.length > 1 && (isPunct(before) || isSpace(before)) && [T, E, N, L].includes(line[1])) return sub('’', 1);
    // An apostrophe between letters (or after a digit).
    if (line.length > 1 && (isDigit(before) || isLetter(before)) && isLetter(toRune(line, 1))) return sub('’', 1);
    if (d.canOpen && !d.canClose) {
      let right = false;
      // Alice's, I'm, Don't, You'd; I've, I'll, You're.
      if (line.length > 1 && [S, M, T, D].includes(line[1]) && (line.length < 3 || isPunctByte(line[2]) || isSpaceByte(line[2]))) right = true;
      if (line.length > 2 && ((line[1] === V && line[2] === E) || (line[1] === L && line[2] === L) || (line[1] === R && line[2] === E)) &&
        (line.length < 4 || isPunctByte(line[3]) || isSpaceByte(line[3]))) right = true;
      if (!right && !silent) counter.single++;
      return sub(right ? '’' : '‘', 1);
    }
    // Goldmark means plural possessives (Smiths') here; as written (the rune at 0 is the quote itself, punctuation),
    // any quote followed by two bytes, the first not a digit, becomes ’.
    if (line.length > 2 && !isDigit(toRune(line, 1))) return sub('’', 1);
    if (counter.single > 0 && closing()) {
      if (!silent) counter.single--;
      return sub('’', 1);
    }
    return false;
  }
  if (d.canOpen && !d.canClose) {
    if (!silent) counter.double++;
    return sub('“', 1);
  }
  if (counter.double > 0 && closing()) {
    // "Monitor 21"".
    if (line.length > 1 && line[1] === 0x22 && isDigit(before)) return false;
    if (!silent) counter.double--;
    return sub('”', 1);
  }
  return false;
}
