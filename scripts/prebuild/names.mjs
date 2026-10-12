import { t } from '../shared/i18n.mjs';
import { escaped, readMath, normalizeTarget, markdownText, typesetText } from './markup.mjs';
import { mathDisplayText } from '../shared/math-name.mjs';
import { normalizeTokens, trimOrdinary } from '../shared/typography.mjs';

/**
 * Names contain literal text and inline math, never links or other Markdown.
 * Returns the display name (formulas as linear text: H^1(X; ℤ)), the lookup
 * key (normalizeTarget) and the parts, which keep the TeX for rendering.
 * typeset: page titles and aliases written in front matter are typeset as Markdown text is, outside their
 * formulas (l'Hôpital 法则 → l’Hôpital 法则; Japanese stays as written). Titles taken from file names and
 * collection.yaml stay as written. The key is the same either way.
 */
export function pageName(value, file, field = 'title', { lang = 'zh', typeset = false } = {}) {
  const fail = message => { throw new Error(`${file}: ${field} ${message}`); };
  if (typeof value !== 'string' || !value.trim() || /[\r\n]/.test(value)) fail(t('build_name_single_line'));
  const trimmed = trimOrdinary(value);
  const source = typeset && !/^ja(?:-|$)/i.test(lang) ? typesetText(trimmed) : trimmed, parts = [];
  let start = 0;
  for (let i = 0; i < source.length;) {
    const math = readMath(source, i);
    if (math) {
      if (math.display) fail(t('build_name_inline_math'));
      if (i > start) parts.push({ text: source.slice(start, i) });
      let text;
      try { text = mathDisplayText(math.value); }
      catch (error) { fail(t('build_name_math', { Message: error.message })); }
      parts.push({ tex: math.value, text });
      i = math.end;
      start = i;
    } else {
      if (!escaped(source, i) && (source[i] === '$' || /^\\[()[\]]/.test(source.slice(i)))) fail(t('build_name_math_delimiters'));
      i++;
    }
  }
  if (start < source.length) parts.push({ text: source.slice(start) });
  const tokens = parts.map(part => ({ text: part.text, math: Object.hasOwn(part, 'tex') }));
  normalizeTokens(tokens, { lang, convertChineseFullStop: false });
  // Normalize identity only. Display parts are formatted after HTML rendering.
  const name = trimOrdinary(tokens.map(token => token.text).join('').normalize('NFC'));
  if (!name) fail(t('build_name_empty'));
  return { name, key: normalizeTarget(source), parts };
}

export function nameList(value, file, field, options) {
  if (value === undefined) return [];
  if (!Array.isArray(value)) throw new Error(t('build_name_list', { File: file, Field: field }));
  return value.map(name => pageName(name, file, field, options));
}

/** Page references preserve title math while keeping literal title punctuation literal. */
export function pageTitleMarkup(metadata) {
  return metadata.titleParts.map(part => Object.hasOwn(part, 'tex') ? `$${part.tex}$` : markdownText(part.text).replace(/@/g, '\\@')).join('');
}

/**
 * The directory of a new entry with this title (wiki/<directory>/index.md), as the migration named
 * them: formulas as plain text without spaces, double-struck and other styled letters as plain letters
 * (A_{inf}, L^p 空间, (∞,1)-层, 怪 R^4), and characters Windows forbids in file names as their fullwidth
 * forms (P／NP 问题). The page's address then has underscores for the spaces.
 */
export function directoryName(title) {
  let name;
  try { name = pageName(title, title).parts.map(part => part.tex === undefined ? part.text : part.text.replace(/\s+/g, '')).join(''); }
  catch { name = title.replace(/\$/g, ''); }
  const fullwidth = { '/': '／', '\\': '＼', ':': '：', '*': '＊', '?': '？', '"': '＂', '<': '＜', '>': '＞', '|': '｜' };
  return name
    // Letterlike symbols (ℝ, ℂ, ℓ) and mathematical alphanumerics (𝔸, 𝒞): NFKC gives the plain letter.
    .replace(/[℀-⅏]|[\u{1D400}-\u{1D7FF}]/gu, char => char.normalize('NFKC'))
    .replace(/[/\\:*?"<>|]/g, char => fullwidth[char])
    .replace(/[\u0000-\u001F]/g, '')
    .replace(/\s+/g, ' ').trim()
    // Windows drops trailing dots.
    .replace(/[. ]+$/, '');
}
