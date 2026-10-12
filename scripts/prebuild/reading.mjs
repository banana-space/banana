import { readFile } from 'node:fs/promises';
import { pinyin, customPinyin } from 'pinyin-pro';
import { parse } from 'yaml';
import { t } from '../shared/i18n.mjs';

// A reading is lowercase ASCII words separated by single spaces, e.g.
// `qi yi shang tong diao` or `serre jean pierre`. It orders and groups pages
// and gives search a pinyin form of each name. ü is written v (`lv`).
const readingPattern = /^[a-z0-9]+(?: [a-z0-9]+)*$/;
const greek = {
  α: 'alpha', β: 'beta', γ: 'gamma', δ: 'delta', ε: 'epsilon', ϵ: 'epsilon', ζ: 'zeta', η: 'eta', θ: 'theta', ϑ: 'theta',
  ι: 'iota', κ: 'kappa', λ: 'lambda', μ: 'mu', ν: 'nu', ξ: 'xi', ο: 'omicron', π: 'pi', ϖ: 'pi', ρ: 'rho', ϱ: 'rho',
  σ: 'sigma', ς: 'sigma', τ: 'tau', υ: 'upsilon', φ: 'phi', ϕ: 'phi', χ: 'chi', ψ: 'psi', ω: 'omega', '∞': 'infinity',
};
// 不能经 NFKD 分解为基本字母的拉丁字母（Łoś 读作 los）。
const latin = { ł: 'l', đ: 'd', ð: 'd', ø: 'o', ħ: 'h', ı: 'i', ŀ: 'l', ŧ: 't', æ: 'ae', œ: 'oe', þ: 'th', ß: 'ss' };
// KaTeX 的希伯来字母（\aleph 等）经 NFKD 分解为希伯来字母，按名称读作 aleph 等。
const hebrew = { א: 'aleph', ב: 'beth', ג: 'gimel', ד: 'daleth' };
const han = /\p{Script=Han}/u;

/** Normalize an author-written reading; authors may use ü or u: for v and any letter case. */
export function normalizeReading(value, file, field = 'sort') {
  const reading = typeof value === 'string'
    ? value.normalize('NFC').toLowerCase().replace(/ü|u:/g, 'v').trim().split(/\s+/).join(' ')
    : '';
  if (!readingPattern.test(reading)) throw new Error(t('build_reading_invalid', { File: file, Field: field, Value: String(value) }));
  return reading;
}

/** Western words: strip accents, spell out Greek and Hebrew letters, keep ASCII letters and digits. */
function westernWords(text) {
  return [...text.normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase()]
    .map(char => greek[char] || hebrew[char] ? ` ${greek[char] ?? hebrew[char]} ` : latin[char] ?? (/[a-z0-9]/.test(char) ? char : ' '))
    .join('').split(/\s+/).filter(Boolean);
}

/** Default reading of a plain-text name. Han characters use word-level pinyin, so 上同调 reads shang tong diao. */
export function defaultReading(name) {
  const words = [];
  for (const [run] of name.normalize('NFC').matchAll(/\p{Script=Han}+|\P{Script=Han}+/gu)) {
    if (han.test(run)) words.push(...pinyin(run, { toneType: 'none', type: 'array', v: true }));
    else words.push(...westernWords(run));
  }
  return words.join(' ');
}

/** Search forms of a reading: spaced syllables, joined, and initials (qi yi → qiyi, qy). */
export function readingForms(reading) {
  if (!reading) return [];
  const words = reading.split(' ');
  return [...new Set([reading, words.join(''), words.length > 1 ? words.map(word => word[0]).join('') : ''].filter(Boolean))];
}

/** Load the project-wide word list that fixes polyphonic readings, e.g. `同调: tong diao`. */
export async function loadReadingDictionary(root) {
  let text;
  try { text = await readFile(`${root}data/readings.yaml`, 'utf8'); }
  catch (error) { if (error.code === 'ENOENT') return; throw error; }
  const entries = parse(text) ?? {};
  const file = 'data/readings.yaml';
  if (typeof entries !== 'object' || Array.isArray(entries)) throw new Error(t('build_reading_dictionary', { File: file }));
  const custom = {};
  for (const [word, value] of Object.entries(entries)) {
    const reading = normalizeReading(value, file, word);
    const characters = [...word].filter(char => han.test(char));
    if (!characters.length || characters.length !== [...word].length || reading.split(' ').length !== characters.length) throw new Error(t('build_reading_dictionary_entry', { File: file, Word: word }));
    custom[word] = reading;
  }
  customPinyin(custom);
}

/**
 * Letter group of a list entry: names that begin with a Latin, Greek or Hebrew letter
 * or a Han character are filed under the first letter of their reading, other
 * names (digits, symbols such as ∞ or !) under `#`.
 */
export function sortGroup(name, sortKey) {
  const first = [...name.normalize('NFKD').replace(/\p{M}/gu, '')][0] ?? '';
  return /[a-z]/.test(sortKey[0]) && (han.test(first) || /[\p{Script=Latin}\p{Script=Greek}\p{Script=Hebrew}]/u.test(first) && /\p{L}/u.test(first)) ? sortKey[0] : '#';
}

/** Within a letter group, names whose reading starts with Western text (0) precede Han names (1). */
export function sortScript(name) {
  for (const char of name.normalize('NFC')) {
    if (han.test(char)) return 1;
    if (westernWords(char).length) return 0;
  }
  return 0;
}

/**
 * Reading metadata for a page or category: `sortKey` orders lists, `sortGroup`
 * and `sortScript` group them by letter, `searchReadings` lists every pinyin
 * form of the title and aliases.
 */
export function readingMetadata({ name, aliases = [], manual, file, field = 'sort' }) {
  const automatic = defaultReading(name);
  const sortKey = manual === undefined ? automatic : normalizeReading(manual, file, field);
  const readings = [sortKey, automatic, ...aliases.map(defaultReading)].flatMap(readingForms);
  return { sortKey, sortGroup: sortGroup(name, sortKey), sortScript: sortScript(name), searchReadings: [...new Set(readings)] };
}
