/**
 * The dialect's typography of text, a core rule over each block's inline tokens: --- —, -- –, ... …, and straight
 * quotation marks made curly. Code, formulas, addresses shown as links and escaped characters are left alone.
 *
 * A quotation mark with a space on one side (the block's start and end count as spaces) goes by that space: after a
 * space it opens, before one it closes. Without a space on either side, as is usual beside Han characters:
 * - " goes by pairing: it closes the one left open, or else opens;
 * - ' after a letter or digit is ’, an apostrophe (it's, Bayes') or a prime (赋'); elsewhere it closes one left open,
 *   or else opens. One never closed is an apostrophe after all ('twas), as is the one of a decade ('90s).
 * A mark that closes nothing, and one with spaces on both sides, stays as written.
 */

const letter = /[\p{L}\p{N}]/u, latin = /[\p{Script=Latin}\p{N}]/u, decade = /^\d\ds(?![\p{L}\p{N}])/u;
const isSpace = char => char === '' || /\s/u.test(char);
// An editor's source-line marks (../syntax/source-lines.mjs) are not there as far as the text goes.
const isMark = char => (char >= '\uE000' && char <= '\uE019') || char === '\u2E3D';
// Text without these is left as it is: most of a page's text.
const changing = /["']|--|\.\.\./;

/** The first character of the tokens from index on; 'x' for what stands for a word (code, a formula, an image). */
function firstCharacter(tokens, index) {
  for (let i = index; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.type === 'softbreak' || token.type === 'hardbreak') return ' ';
    if (token.nesting !== 0) continue;
    if (token.type !== 'text') return 'x';
    for (const char of token.content) if (!isMark(char)) return char;
  }
  return '';
}

function typesetInline(tokens) {
  let previous = '', doubleOpen = false, automatic = 0;
  const singles = []; // The ' left open: { token, characters, at }.
  const write = (token, characters) => { token.content = characters.join(''); };
  tokens.forEach((token, index) => {
    if (token.type === 'image' && token.children) typesetInline(token.children);
    if (token.info === 'auto' && token.nesting) automatic += token.nesting;
    if (token.type === 'softbreak' || token.type === 'hardbreak') previous = ' ';
    else if (token.nesting === 0 && token.type !== 'text') previous = 'x';
    if (token.type !== 'text') return;
    if (automatic) { previous = 'x'; return; }
    if (!changing.test(token.content)) {
      for (let i = token.content.length - 1; i >= 0; i--) {
        if (!isMark(token.content[i])) { previous = token.content[i]; break; }
      }
      return;
    }
    const characters = [...token.content.replace(/---/g, '—').replace(/--/g, '–').replace(/\.\.\./g, '…')];
    characters.forEach((char, at) => {
      if (isMark(char)) return;
      if (char === '"' || char === "'") {
        let following = '';
        for (let i = at + 1; i < characters.length && !following; i++) if (!isMark(characters[i])) following = characters[i];
        if (!following) following = firstCharacter(tokens, index + 1);
        const afterSpace = isSpace(previous), beforeSpace = isSpace(following);
        if (!(afterSpace && beforeSpace)) {
          if (char === '"') {
            const opens = afterSpace || (!beforeSpace && !doubleOpen);
            if (opens || doubleOpen) characters[at] = opens ? '“' : '”';
            doubleOpen = opens;
          } else if (latin.test(previous) && latin.test(following)) characters[at] = '’';
          else if (decade.test(characters.slice(at + 1).join(''))) characters[at] = '’';
          else if (letter.test(previous) || beforeSpace || (singles.length && !afterSpace)) {
            singles.pop();
            characters[at] = '’';
          } else {
            singles.push({ token, characters, at });
            characters[at] = '‘';
          }
        }
      }
      previous = char;
    });
    write(token, characters);
  });
  for (const { token, characters, at } of singles) {
    characters[at] = '’';
    write(token, characters);
  }
}

export function typographer(state) {
  for (const token of state.tokens) if (token.type === 'inline') typesetInline(token.children);
}
