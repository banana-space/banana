// Scanning shared by the build (scripts/prebuild/markup.mjs) and the online editor's grammar
// (scripts/shared/markdown-language.mjs): formulas and reference labels end where the build says they end.
// No dependencies, so the editor's bundle stays small.

/** text[i] 是换行，其后是空行（只有空白或引用标记）：段落在此结束。 */
export const blankLineAt = (text, i) => /^\n[ \t>]*(?:\n|$)/.test(text.slice(i, i + 80));

// The backslashes before the position last asked about: scanning forward, each answer follows from the last
// (a long run of backslashes would otherwise be counted again at every position).
let escapeText = null, escapePosition = -1, escapeCount = 0;
/** 前面连续反斜杠为奇数时，当前位置的字符被转义。 */
export function escaped(text, position) {
  let count;
  if (text === escapeText && position === escapePosition) count = escapeCount;
  else if (text === escapeText && position === escapePosition + 1) count = text[position - 1] === '\\' ? escapeCount + 1 : 0;
  else {
    count = 0;
    for (let i = position; i > 0 && text[--i] === '\\';) count++;
  }
  escapeText = text;
  escapePosition = position;
  escapeCount = count;
  return count % 2 === 1;
}

// 标点可以出现在标签中间，但末尾标点属于正文。@ 保留给跨页引用。
export const referenceTail = /[,.;:'"!?–—-]+$/u;
/** 不能出现在标签中的字符：裸引用 @标签 在此结束。 */
export const referenceStop = /[\s#@{}<>\[\]|\\`()，。．；：！？、‘’“”（）［］｛｝【】「」『』]/u;
/** 校验规范化标签：允许内部标点，拒绝分隔符、空白和容易被误读的末尾标点。 */
export function validReferenceName(value) {
  return typeof value === 'string' && value.length > 0 && !referenceStop.test(value) && !referenceTail.test(value);
}

/**
 * 引用块中跨行的公式：续行开头与起始行同深度的 `>` 标记属于引用块，不是 TeX。
 * 不带标记的惰性续行和公式中以 > 关系符开头的行（起始行不在引用块中时）保持原样。
 */
function withoutQuoteMarkers(text, start, value) {
  if (!value.includes('\n')) return value;
  const line = text.slice(text.lastIndexOf('\n', start - 1) + 1, start);
  const depth = (line.match(/^[ \t]*(?:>[ \t]?)+/)?.[0].match(/>/g) ?? []).length;
  if (!depth) return value;
  const marker = new RegExp(`\n[ \\t]*(?:>[ \\t]?){${depth}}`, 'g');
  return value.replace(marker, '\n');
}

// The last formula that did not close: its scan reached the end of its paragraph (or of the text) without a
// closing delimiter at its depth. An opener after it in that stretch is taken not to close either, without
// scanning again: otherwise text full of openers ("${${${…") takes quadratic time. A page that builds has no
// unclosed formula (the first is an error), so this changes nothing there; \[@ (an escaped citation group,
// which stays open) does not count.
let failedText = null, failedFrom = -1, failedTo = -1;
/**
 * 读取 $、$$、\(、\[ 公式并返回 TeX、行间标志及 end；未闭合时不消费文字。
 * 花括号内的分隔符、转义字符和 TeX 注释不会提前结束公式。公式不跨空行（与 TeX 相同）：
 * 到空行仍未闭合即为未闭合，否则一个多余的 { 或没有闭合的 \[ 会让公式吞掉之后的段落。
 */
export function readMath(text, start) {
  // Called at every position by the scans: most are not a delimiter's first character.
  const first = text[start];
  if (first !== '$' && first !== '\\') return;
  if (escaped(text, start)) return;
  const open = ['$$', '\\[', '\\(', '$'].find(value => text.startsWith(value, start));
  if (!open) return;
  if (text === failedText && start > failedFrom && start < failedTo) return;
  const close = ({ '\\[': '\\]', '\\(': '\\)' })[open] ?? open;
  const fail = end => {
    if (!(open === '\\[' && /^[ \t]*\{?@/.test(text.slice(start + 2, start + 40)))) [failedText, failedFrom, failedTo] = [text, start, end];
  };
  let depth = 0, escapedHere = false;
  for (let i = start + open.length; i < text.length; i++) {
    if (escapedHere) { escapedHere = false; continue; }
    if (text[i] === '\n' && blankLineAt(text, i)) return fail(i);
    if (text[i] === '%') {
      const newline = text.indexOf('\n', i);
      if (newline < 0) return fail(text.length);
      i = newline - 1;
      continue;
    }
    if (depth === 0 && text.startsWith(close, i)) {
      return {
        end: i + close.length,
        value: withoutQuoteMarkers(text, start, text.slice(start + open.length, i)),
        display: open === '$$' || open === '\\[',
      };
    }
    if (text[i] === '{') depth++;
    else if (text[i] === '}' && depth > 0) depth--;
    else if (text[i] === '\\') escapedHere = true;
  }
  return fail(text.length);
}

// A labelled list item's marker (scripts/prebuild/lists.mjs): "(label)" or "label)", then whitespace or the
// line's end. In parentheses, a label is text without whitespace, CJK characters, brackets, braces, "<>", "@",
// "\", "`" and "$", with at most one formula ($…$ or \(…\)) in it: (a), (iii), (A1), (T2½), (★), ($\ast$).
// Bare, letters and digits (not digits alone: "1)" is CommonMark's) and primes: a), iv), A1), 1′). A
// backslash before ")" keeps a line text: "(1\) 与 (3) 之间".
const labelChar = '[^\\s()\\[\\]{}<>@\\\\`$\\u2e80-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff\\ufe30-\\ufe4f\\uff00-\\uffef]';
export const labelledMarkerSource = `(?:\\((?:${labelChar}*(?:\\$[^$\\n]+\\$|\\\\\\((?:[^\\n\\\\]|\\\\[^)])*\\\\\\))${labelChar}*|${labelChar}+)\\)|(?![0-9]+\\))[A-Za-z0-9]+['′]*\\))(?=[ \\t]|$)`;
const labelledMarker = new RegExp(`^${labelledMarkerSource}`);

/**
 * A labelled list item's marker at start: { end, label, parenthesized } (label without the parentheses or the
 * ")"), or undefined.
 */
export function readLabelledMarker(text, start) {
  const match = labelledMarker.exec(text.slice(start, start + 300).split('\n', 1)[0]);
  if (!match) return;
  const parenthesized = match[0][0] === '(';
  return { end: start + match[0].length, label: match[0].slice(parenthesized ? 1 : 0, -1), parenthesized };
}

/** A label as shown: "'" outside its formula is a prime (1' → 1′). */
export function labelText(label) {
  return label.replace(/(\$[^$]*\$|\\\(.*?\\\))|'/g, (all, formula) => formula ?? '′');
}

// A tag on one line, at most a thousand characters: "<", an optional "/", a name, attributes (a name, maybe "="
// and a value: in double or single quotes, or bare), maybe "/", and ">".
const tagPattern = /^<(\/?)([A-Za-z][A-Za-z0-9-]*)((?:[ \t]+[A-Za-z_:][\w.:-]*(?:[ \t]*=[ \t]*(?:"[^"\n]*"|'[^'\n]*'|[^\s"'=<>`]+))?)*)[ \t]*(\/?)>/;
const attributePattern = /[ \t]+([A-Za-z_:][\w.:-]*)(?:[ \t]*=[ \t]*(?:"([^"\n]*)"|'([^'\n]*)'|([^\s"'=<>`]+)))?/g;

/**
 * An HTML tag at start: { end, name, closing, selfClosing, attributes: [{ key, value }] } (value undefined for a
 * bare attribute), or undefined where there is none (a "<" in running text, an autolink, a comment).
 */
export function readTag(text, start) {
  if (text[start] !== '<' || !/[A-Za-z/]/.test(text[start + 1] ?? '')) return;
  const match = text.slice(start, start + 1000).match(tagPattern);
  if (!match) return;
  const base = start + 1 + match[1].length + match[2].length; // Where the attributes start.
  const attributes = [...match[3].matchAll(attributePattern)].map(attribute => {
    const [whole, key, double, single, bare] = attribute, from = base + attribute.index + whole.length - whole.trimStart().length;
    const value = double ?? single ?? bare;
    // Offsets for highlighting: the key, and the value with its quotes.
    return { key, value, keyFrom: from, keyTo: from + key.length, valueFrom: value === undefined ? undefined : base + attribute.index + whole.length - value.length - (bare === undefined ? 2 : 0), valueTo: base + attribute.index + whole.length };
  });
  return { end: start + match[0].length, name: match[2], closing: Boolean(match[1]), selfClosing: Boolean(match[4]), attributes };
}
