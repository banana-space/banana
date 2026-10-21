import { t } from '../shared/i18n.mjs';
/**
 * 共同的行内语法层，供普通页面和百科结构层复用。
 *
 * 从左到右读取 token：先保护代码/HTML 注释/作者标签（<see> 等，转换为 shortcode），再处理链接、公式和统一引用。
 * readXXX 在匹配时返回 { end, ... }，未匹配时返回 undefined；
 * end 是源文本中的结束位置（不包含该位置字符），调用者可以整体跳过。
 * 本模块只转换 Markdown，引用目标由调用者提供的 resolver 决定；不计算节号或读取文件。
 */
import { normalizeTokens, trimOrdinary } from '../shared/typography.mjs';
import { mathDisplayText, mathKey } from '../shared/math-name.mjs';
import { blankLineAt, escaped, readMath, referenceStop, referenceTail, validReferenceName } from '../shared/scan.mjs';
import { brokenTagMessage, looksLikeTag, readTag, tagShortcode } from './tags.mjs';

export { escaped, readMath, validReferenceName };

/**
 * 读取 @标签 或 {@标签}，返回 key 与不含末尾正文标点的 end。
 * 裸引用检查前边界以保护邮箱/URL；ignoreEscape 仅供字面转义保护使用。
 */
export function readReference(text, start, { ignoreEscape = false } = {}) {
  if (!ignoreEscape && escaped(text, start)) return;
  if (text.startsWith('{@', start)) {
    const close = text.indexOf('}', start + 2);
    if (close < 0 || text.slice(start, close).includes('\n')) {
      return { end: start + 2, error: t('build_reference_unclosed') };
    }
    return { end: close + 1, key: text.slice(start + 2, close) };
  }
  // 连字符后的 @ 也是引用（范围 @a-@b）；字母、数字等之后的 @ 不是（邮箱、网址）。
  if (text[start] !== '@' || (start > 0 && /[\p{L}\p{N}_@./%+\\]/u.test(text[start - 1]))) return;
  let end = start + 1;
  while (end < text.length && !referenceStop.test(text[end])) end++;
  const key = text.slice(start + 1, end).replace(referenceTail, '');
  if (!key) return;
  return { end: start + 1 + key.length, key };
}

/** 数据字段按文字输出，防止被当成 HTML、shortcode 或另一段引用语法。 */
export function markdownText(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\[/g, '&#91;').replace(/\]/g, '&#93;')
    .replace(/[\\`*_{}$!#]/g, '\\$&');
}

/** 同 markdownText，但保留行内公式 $…$、\(…\)（文献标题等数据字段使用）。 */
export function markdownTextWithMath(value) {
  const source = String(value);
  let result = '', plain = '';
  for (let i = 0; i < source.length; i++) {
    const math = source[i] === '$' || source.startsWith('\\(', i) ? readMath(source, i) : undefined;
    if (math && !math.display) {
      result += markdownText(plain) + mathMarkdown(math);
      plain = '';
      i = math.end - 1;
    } else plain += source[i];
  }
  return result + markdownText(plain);
}

/** 名称中的公式按 math-name.mjs 转成线性文字；TeX 有误时报告公式本身。 */
function nameMath(tex, key) {
  try { return key ? mathKey(tex) : mathDisplayText(tex); }
  catch (error) { throw new Error(t('build_math_invalid', { TeX: tex, Message: error.message })); }
}

/**
 * Goldmark 排版扩展（Hugo 默认开启）在正文中做的字符替换：--- → —，-- → –，... → …，<< → «，>> → »，
 * 直引号按上下文弯曲：在开头、空白、左括号、连接号之后且后面不是空白时为左引号 ‘ “，否则为右引号 ’ ”
 * （撇号也是 ’：l'Hôpital、Hilbert's、Bayes'）。previous 是这段文字之前的字符，公式之后的文字传入公式本身。
 */
export function typographer(text, previous = '') {
  const dashed = text.replace(/---/g, '—').replace(/--/g, '–').replace(/\.\.\./g, '…').replace(/<</g, '«').replace(/>>/g, '»');
  let result = '';
  for (const char of dashed) {
    if (char === "'" || char === '"') {
      const next = dashed[result.length + 1] ?? '';
      const opening = (!previous || /[\s([{‘“–—]/u.test(previous)) && next && !/\s/u.test(next);
      result += char === "'" ? (opening ? '‘' : '’') : (opening ? '“' : '”');
    } else result += char;
    previous = char;
  }
  return result;
}

/** 公式之外的文字按 typographer 排版，公式原样保留：链接目标写成新条目标题、术语与译名时使用。 */
export function typesetText(value) {
  let result = '', start = 0;
  for (let i = 0; i < value.length;) {
    const math = readMath(value, i);
    if (!math) { i++; continue; }
    result += typographer(value.slice(start, i), start ? '$' : '') + value.slice(i, math.end);
    i = start = math.end;
  }
  return result + typographer(value.slice(start), start ? '$' : '');
}

function nameText(value, key) {
  const tokens = [];
  const append = text => {
    if (tokens.at(-1) && !tokens.at(-1).math) tokens.at(-1).text += text;
    else tokens.push({ text });
  };
  for (let i = 0; i < value.length;) {
    const math = readMath(value, i);
    if (math) {
      tokens.push({ text: nameMath(math.value, key), math: true });
      i = math.end;
    } else {
      append(value[i++]);
    }
  }
  for (const [index, token] of tokens.entries()) {
    if (token.math) continue;
    // Link text shows what Hugo's typographer makes of it ([[Auslander--Buchsbaum 公式]] reads
    // Auslander–Buchsbaum 公式), so the name and the key read the target the same way.
    token.text = typographer(token.text, index ? '$' : '');
    // Lookup keys accept both parenthesis styles; displayed captions stay verbatim.
    if (key) token.text = token.text.replace(/（/g, '(').replace(/）/g, ')');
  }
  normalizeTokens(tokens, { convertChineseFullStop: false });
  const text = trimOrdinary(tokens.map(token => token.text).join('').normalize('NFC'));
  // Keys also accept any quotation marks, as titles are written either way. Single quotes become ’, the
  // apostrophe, since a key is also shown, as the alias a reader was redirected from.
  return key ? text.replace(/['‘]/g, '’').replace(/[“”]/g, '"') : text;
}

/**
 * 条目名、别名、分类名、链接目标和标题锚点的匹配键：公式转成线性文字后做 NFKC
 * 并去掉公式内空格（$H^1(X;\mathbb Z)$ → H^1(X;Z)），全角括号视同半角，单引号一律视为 ’，双引号视同直引号，
 * -- 视同 –（与正文排版一致，见 typographer）。
 */
export const normalizeTarget = value => nameText(value, true);

/** 名称的纯文本显示形式，用于 HTML 标题和缺失条目名称等：$H^1(X;\mathbb Z)$ → H^1(X; ℤ)。 */
export const plainName = value => nameText(value, false);

// 以下三个代码读取器返回结束偏移量，不返回转换内容。
function fencedCodeEnd(text, start) {
  // 围栏允许出现在引用块或列表里，结束围栏不得短于开始围栏。
  const fence = text.slice(start).match(/^([ \t]*(?:>[ \t]*)*(?:(?:[-+*]|\d+[.)])[ \t]+)?)(`{3,}|~{3,})[^\n]*(?:\n|$)/);
  if (!fence) return;
  const endPattern = new RegExp('^[ \\t]*(?:>[ \\t]*)*' + fence[2][0] + '{' + fence[2].length + ',}[ \\t]*\\r?$', 'gm');
  endPattern.lastIndex = start + fence[0].length;
  const end = endPattern.exec(text);
  // 未闭合的普通代码围栏保护到文件末尾，符合 Markdown 的处理方式。
  return end ? end.index + end[0].length : text.length;
}

function indentedCodeEnd(text, start) {
  // 空行后的四空格/制表符视为代码，避免误吞普通段落的缩进续行。
  if (!/^(?: {4}|\t)/.test(text.slice(start, start + 4))) return;
  // The line before is blank: looked at backwards (a regular expression ending in $ on all the text before
  // would scan it whole at every line).
  if (start !== 0) {
    if (text[start - 1] !== '\n') return;
    const previous = text.lastIndexOf('\n', start - 2);
    if (previous < 0 || !/^[ \t]*$/.test(text.slice(previous + 1, start - 1))) return;
  }
  const block = text.slice(start).match(/^(?:(?: {4}|\t)[^\n]*(?:\n|$)|[ \t]*\n)+/);
  if (block) return start + block[0].length;
}

function inlineCodeEnd(text, start) {
  if (text[start] !== '`' || escaped(text, start)) return;
  // 行内代码的开始/结束反引号数量必须相同，且在段落内（与 Markdown 相同）：
  // 否则一个多余的反引号会把之后几段的公式和链接都当成代码。
  const ticks = text.slice(start).match(/^`+/)[0];
  const runs = /`+|\n/g;
  runs.lastIndex = start + ticks.length;
  let next;
  while ((next = runs.exec(text))) {
    if (next[0] === '\n') { if (blankLineAt(text, next.index)) return; continue; }
    if (next[0] === ticks) return next.index + ticks.length;
  }
}

function codeToken(text, start, indentedCode = true) {
  const lineStart = start === 0 || text[start - 1] === '\n';
  const blockEnd = lineStart ? fencedCodeEnd(text, start) ?? (indentedCode ? indentedCodeEnd(text, start) : undefined) : undefined;
  return blockEnd ?? inlineCodeEnd(text, start);
}

/**
 * 原样保留的区域（start 处起，到 end 为止）若没有正确结束，返回错误消息：没有结束围栏的代码块、
 * 没有 --> 的注释。否则它们一直保护到页面末尾，之后的公式、链接和引用都不再转换，却不报错。
 */
export function unclosedProtected(text, start, end) {
  if (text.startsWith('<!--', start)) return text.includes('-->', start + 4) ? undefined : t('build_comment_unclosed');
  const fence = (start === 0 || text[start - 1] === '\n') && text.slice(start).match(/^([ \t]*(?:>[ \t]*)*(?:(?:[-+*]|\d+[.)])[ \t]+)?)(`{3,}|~{3,})[^\n]*(?:\n|$)/);
  if (fence) {
    const close = new RegExp('^[ \\t]*(?:>[ \\t]*)*' + fence[2][0] + '{' + fence[2].length + ',}[ \\t]*\\r?$', 'm');
    if (!close.test(text.slice(start + fence[0].length, end))) return t('build_fence_unclosed', { Fence: fence[2] });
  }
}

/** 返回应原样保留的区域末尾。结构扫描和行内转换使用同一套保护规则。 */
export function protectedToken(text, start, { indentedCode = true } = {}) {
  const code = codeToken(text, start, indentedCode);
  if (code) return code;
  if (text.startsWith('<!--', start)) {
    const end = text.indexOf('-->', start + 4);
    return end < 0 ? text.length : end + 3;
  }
  if (text.startsWith('{{<', start) || text.startsWith('{{%', start)) {
    const close = text[start + 2] === '<' ? '>}}' : '%}}';
    const end = text.indexOf(close, start + 3);
    return end < 0 ? text.length : end + 3;
  }
  if (text[start] === '<') {
    // A tag (an author's, or any other: transformMarkup reports those), or an autolink. Bounded (under a
    // thousand characters): read at every "<", unbounded patterns over text full of unclosed tags would take
    // quadratic time.
    const tag = readTag(text, start);
    if (tag) return tag.end;
    const other = text.slice(start, start + 1000).match(/^<\/?[A-Za-z][^>]*>|^<[^\s<>]+(?:@|:\/\/)[^<>]*>/);
    if (other) return start + other[0].length;
  }
}

/** 读取 [[目标]] 或 [[目标|文字]]（表格中也可写 [[目标\|文字]]），规范化目标名称；跳过公式内的竖线和关闭标记。 */
export function readWiki(text, start) {
  if (!text.startsWith('[[', start) || escaped(text, start)) return;
  let separator, targetEnd;
  // At most three hundred characters (the longest link on the site has under a hundred): read at every "[[",
  // an unbounded scan of a long line full of them would take quadratic time.
  for (let i = start + 2; i < text.length && i < start + 300;) {
    const math = readMath(text, i);
    if (math) { i = math.end; continue; }
    if (text[i] === '\n') return;
    if (text.startsWith(']]', i) && !escaped(text, i)) {
      const target = text.slice(start + 2, targetEnd ?? i);
      const label = separator === undefined ? target : text.slice(separator + 1, i);
      if (!target.trim() || !label.trim()) return;
      return { end: i + 2, target: normalizeTarget(target), name: plainName(target), source: typesetText(target.trim()), label, customLabel: separator !== undefined };
    }
    // 表格中的链接把分隔符写成 \|（GFM 表格的转义竖线），同样作为分隔符。
    if (text[i] === '|' && separator === undefined) {
      separator = i;
      targetEnd = escaped(text, i) ? i - 1 : i;
    }
    i++;
  }
}

/**
 * 普通 Markdown 链接/图片：地址与引用 ID 原样保留，只转换显示文字中的公式。
 * 显示文字中关闭 wiki 链接转换，避免生成嵌套的 <a>。
 */
export function readMarkdownLink(text, start) {
  const image = text.startsWith('![', start);
  const begin = start + (image ? 1 : 0);
  if (text[begin] !== '[' || text.startsWith('[[', begin) || escaped(text, start)) return;
  // The text and the address each at most five hundred characters (the longest on the site have under two
  // hundred): read at every "[", unbounded scans of text full of brackets would take quadratic time.
  const limit = 500;
  let depth = 1;
  let i = begin + 1;
  for (; i < text.length && i < begin + limit; i++) {
    const math = readMath(text, i);
    if (math) { i = math.end - 1; continue; }
    const code = codeToken(text, i);
    if (code) { i = code - 1; continue; }
    if (escaped(text, i)) continue;
    if (text[i] === '[') depth++;
    if (text[i] === ']' && --depth === 0) break;
  }
  if (depth !== 0) return;
  const label = text.slice(begin + 1, i);
  let end = i + 1;
  if (text[end] === '(') {
    let parentheses = 1;
    let quote = '';
    const stop = end + limit;
    for (end++; end < text.length && end < stop; end++) {
      if (escaped(text, end)) continue;
      if (quote) { if (text[end] === quote) quote = ''; continue; }
      if ((text[end] === '"' || text[end] === "'") && /\s/.test(text[end - 1])) { quote = text[end]; continue; }
      if (text[end] === '(') parentheses++;
      if (text[end] === ')' && --parentheses === 0) { end++; break; }
    }
    if (parentheses !== 0) return;
  } else if (text[end] === '[') {
    const close = text.indexOf(']', end + 1);
    if (close < 0 || close > end + limit) return;
    end = close + 1;
  } else return;
  return {
    end,
    label, // 原始显示文字也供标题 ID 使用；地址不参与标题 ID 的计算。
    reference: !image && /^\(@[^\s]*\)$/.test(text.slice(i + 1, end)) ? text.slice(i + 3, end - 1) : undefined,
    output: `${image ? '!' : ''}[${transformMarkup(label, [], { wiki: false })}]${text.slice(i + 1, end)}`,
  };
}
function mathMarkdown(math) {
  // 空公式（\[\]、$$$$、$ $）不输出：Hugo 的 passthrough 不认空的标记，会把它原样留在页面中。
  if (!math.value.trim()) return '';
  // Base64 passthrough 标记让 Markdown 不再解释 TeX（如内层 $、反斜杠）。
  // render-passthrough.html 解码后在构建时调用 Hugo 的 KaTeX 渲染。
  const kind = math.display ? 'displaymath' : 'math';
  // A display formula's TeX without the layout of its lines (indentation, the line breaks around it), which TeX
  // ignores: the page (data-tex, the TikZ cache) does not change when the source is reformatted.
  const tex = math.display ? math.value.replace(/^[ \t]+/gm, '').trim() : math.value;
  return `@@${kind}:${Buffer.from(tex).toString('base64')}:${kind}@@`;
}

/** 生成百科链接 Markdown；结构层可提供 caption 以正确显示链接文字中的引用。 */
function wikiMarkdown(wiki, position, options) {
  const resolved = options.resolveWiki?.(wiki, position);
  // 字面方括号必须转义，显示文字不能意外变成新的 Markdown 链接。
  const label = transformMarkup(resolved?.label ?? wiki.label, [], { wiki: false })
    .replace(/(?<!\\)[\[\]]/g, '\\$&');
  // title is the lookup key; name is how a missing article is shown; source is the target as written
  // (with its TeX, the text outside it typeset: O'Nan → O’Nan), the title of the article should someone create it.
  const source = wiki.source && wiki.source !== wiki.name ? `&source=${encodeURIComponent(wiki.source)}` : '';
  const destination = resolved?.destination ?? `wiki:?title=${encodeURIComponent(wiki.target)}&name=${encodeURIComponent(wiki.name)}${source}`;
  return `[${label}](${destination})`;
}

/** 调用页面 resolver 生成单个引用；复杂显示文字交由 Hugo 渲染，避免 Markdown 嵌套链接。 */
function referenceMarkdown(key, position, options, customLabel) {
  const resolved = options.resolveReference(key, position, customLabel);
  const label = transformMarkup(resolved.label, [], { wiki: false })
    .replace(/(?<!\\)[\[\]]/g, char => char === '[' ? '&#91;' : '&#93;');
  // 使用实体而不是 \\[，避免生成文本再次触发公式分隔符。
  return `[${label}](${resolved.destination})`;
}

/** TikZ 围栏的说明 ```tikz {caption="…"} 是正文：其中的公式、链接与引用照常转换。 */
function tikzCaption(code, extensions, options) {
  return code.replace(/^([ \t]*(?:>[ \t]*)*(?:(?:[-+*]|\d+[.)])[ \t]+)?(?:`{3,}|~{3,})[ \t]*tikz[ \t]*\{[^\n]*?\bcaption=")([^"\n]*)(")/,
    (match, head, caption, tail) => head + transformMarkup(caption, extensions, options).replace(/"/g, '&quot;') + tail);
}

/**
 * 共同转换入口。
 * options.wiki=false 关闭 wiki 转换；resolveWiki(wiki, offset) 可覆盖目标和文字。
 * resolveReference(key, offset, customLabel) 统一解析文献/结构目标；未提供时保留 @ 原文。
 * extensions 中的函数接收 (text, offset)，返回 { end, output } 消费完整片段。
 * 新语法应放在保护规则之后，且必须向前移动，避免误改代码或进入死循环。
 */
export function transformMarkup(text, extensions = [], options = {}) {
  let result = '';
  for (let i = 0; i < text.length;) {
    const blockEnd = options.blockCodeEnd?.(i);
    const protectedEnd = blockEnd ?? protectedToken(text, i, { indentedCode: options.indentedCode !== false });
    // An author's tag becomes its shortcode; other HTML is not for pages (Hugo would leave it out).
    if (protectedEnd && blockEnd === undefined && text[i] === '<' && (readTag(text, i) || looksLikeTag(text, i))) {
      const tag = readTag(text, i);
      const shortcode = tag ? tagShortcode(tag) : { error: brokenTagMessage(text, i) };
      if (shortcode.error) {
        if (options.fail) options.fail(shortcode.error, i);
        throw new Error(shortcode.error);
      }
      // Also across a line break (scripts/format/ may put the tag on a line of its own).
      if (shortcode.attached) result = result.replace(/[ \t]*(?:\n[ \t>]*)?$/, '');
      result += shortcode.output;
      i = protectedEnd;
      continue;
    }
    if (protectedEnd) {
      result += tikzCaption(text.slice(i, protectedEnd), extensions, options);
      i = protectedEnd;
      continue;
    }
    if ((i === 0 || text[i - 1] === '\n') && /^ {0,3}\[(?!\^)[^\]\n]+\]:/.test(text.slice(i))) {
      // [id]: URL 是引用式链接定义，不能把 URL 内的 wiki 语法展开；脚注定义 [^1]: 的正文照常处理。
      const end = text.indexOf('\n', i);
      const stop = end < 0 ? text.length : end;
      result += text.slice(i, stop);
      i = stop;
      continue;
    }
    const markdownLink = readMarkdownLink(text, i);
    if (markdownLink) {
      result += markdownLink.reference !== undefined && options.resolveReference
        ? referenceMarkdown(markdownLink.reference, i, options, markdownLink.label)
        : markdownLink.output;
      i = markdownLink.end;
      continue;
    }
    const math = readMath(text, i);
    if (math) {
      // The online editor checks each formula with KaTeX (scripts/prebuild/katex-check.mjs).
      const problem = options.checkMath?.(math.value, math.display);
      if (problem) options.fail(problem, i);
      result += mathMarkdown(math);
      i = math.end;
      continue;
    }
    // A formula that does not close by the end of its paragraph: report it, rather than let it be text whose
    // remaining delimiters pair up wrongly. (Literal dollars are written \$, a bracket after a backslash
    // &#91;; \[@ is an escaped bracket before a citation.) Only where errors have a place.
    if (options.fail && /^(?:\$|\\\(|\\\[(?![ \t]*\{?@))/.test(text.slice(i, i + 8)) && !escaped(text, i)) {
      options.fail(t('build_formula_unclosed', { Formula: text.slice(i, i + 12).split('\n')[0] }), i);
    }
    const wiki = options.wiki === false ? undefined : readWiki(text, i);
    if (wiki) {
      if (!wiki.target) throw new Error(t('build_wiki_target_empty', { Target: text.slice(i, wiki.end) }));
      result += wikiMarkdown(wiki, i, options);
      i = wiki.end;
      continue;
    }
    if (options.resolveReference) {
      if (escaped(text, i) && text.startsWith('{@', i)) {
        const literal = readReference(text, i, { ignoreEscape: true });
        if (literal && !literal.error) {
          result += text.slice(i, literal.end);
          i = literal.end;
          continue;
        }
      }
      // Anywhere in the text, also in brackets: [@a, 定理 1; @b 等] is text around two citations.
      const reference = readReference(text, i);
      if (reference) {
        if (reference.error) {
          if (options.fail) options.fail(reference.error, i);
          throw new Error(reference.error);
        }
        result += referenceMarkdown(reference.key, i, options);
        i = reference.end;
        continue;
      }
    }
    let custom;
    for (const extension of extensions) {
      custom = extension(text, i);
      if (custom) break;
    }
    if (custom) {
      if (!Number.isInteger(custom.end) || custom.end <= i) throw new Error(t('build_extension_progress'));
      result += custom.output;
      i = custom.end;
      continue;
    }
    result += text[i++];
  }
  return result;
}
