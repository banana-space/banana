import { nextNumber } from './numbering.mjs';
import { t } from '../shared/i18n.mjs';
/**
 * 百科 Markdown 的页面结构与统一引用层。
 * 第一遍收集节、定理、公式、文献和显式标签，记录指向原始正文的替换区间；
 * 第二遍解析前向引用并生成 Hugo Markdown，同时提供标题/文献元数据。
 * 标题显示文字的嵌套引用在此解析，具体翻译、HTML 和目录输出由 Hugo 模板负责。
 */
import { katexError } from './katex-check.mjs';
import { authorTags, looksLikeTag, readTag } from './tags.mjs';
import { labelledMarkerSource, readLabelledMarker } from '../shared/scan.mjs';
import { escaped, protectedToken, readMath, readMarkdownLink, readWiki, normalizeTarget, transformMarkup, typographer, validReferenceName, markdownText, unclosedProtected } from './markup.mjs';
import { readBibliography, prepareBibliography, bibliographyMarkdown } from './bibliography.mjs';
import { readTerms } from './terms.mjs';
import { parseLists } from './lists.mjs';
import { Parser } from 'commonmark';
import { normalizeTokens } from '../shared/typography.mjs';
import { readFileSync } from 'node:fs';
import { parse } from 'yaml';

const environments = parse(readFileSync(new URL('../../data/theorems.yaml', import.meta.url), 'utf8'));

// 环境类型和颜色组来自配置，显示文字使用 environment_<类型> 的 i18n 键。
for (const [kind, config] of Object.entries(environments)) {
  if (!/^[a-z]+$/.test(kind) || !/^[a-z]+$/.test(config.group) || (config.numbered !== undefined && typeof config.numbered !== 'boolean')) {
    throw new Error(t('build_environment_config', { Kind: kind }));
  }
}
const encode = value => Buffer.from(value).toString('base64');
const headingParser = new Parser();
// 以标签列表标记开头的行（容器标记之后）：Setext 标题的文字在此之前结束。
const labelledLine = new RegExp(`^ {0,3}${labelledMarkerSource}`);

/** 末尾星号可以紧贴标题，但 Markdown 强调的闭合星号仍属于标题文字。 */
function stripHeadingStar(value) {
  const title = value.trimEnd();
  if (!title.endsWith('*') || escaped(title, title.length - 1)) return { title, unnumbered: false };
  const last = headingParser.parse(`# ${title}`).firstChild?.lastChild;
  if (last?.type === 'emph' || last?.type === 'strong') return { title, unnumbered: false };
  return { title: title.slice(0, -1).trimEnd(), unnumbered: true };
}

/**
 * 从标题中取用于 ID 的文字：链接取显示文字，公式取匹配键（normalizeTarget，如 H^1(X;Z)）。
 * 代码内的 $ 和反斜杠是字面文字，不能作为公式再解析。
 * 这不是 Markdown 渲染器；正文仍由 Hugo 处理。
 */
function headingTokens(value, initialLang = 'zh') {
  const tokens = [];
  let lang = initialLang;
  const languages = [];
  const append = (text, extra = {}) => tokens.push({ text, lang, ...extra });
  for (let i = 0; i < value.length;) {
    const protectedEnd = protectedToken(value, i);
    if (protectedEnd) {
      const token = value.slice(i, protectedEnd);
      // <lang de>…</lang> sets the language of what it holds.
      const tag = readTag(token, 0);
      if (tag && !tag.closing && tag.name === 'lang') {
        languages.push(lang);
        lang = tag.attributes[0]?.key ?? lang;
      } else if (tag?.closing && tag.name === 'lang' && languages.length) lang = languages.pop();
      if (token.startsWith('`')) {
        append(token.replace(/^`+|`+$/g, ''), { opaque: true });
      }
      i = protectedEnd;
      continue;
    }
    const math = readMath(value, i);
    if (math) {
      append(normalizeTarget(value.slice(i, math.end)), { math: true });
      i = math.end;
      continue;
    }
    const link = readWiki(value, i) ?? readMarkdownLink(value, i);
    if (link) {
      tokens.push(...headingTokens(link.label, lang));
      i = link.end;
      continue;
    }
    if (value[i] === '&') {
      const entity = value.slice(i).match(/^&(?:#x[0-9a-f]+|#\d+|[a-z][a-z0-9]*);/i)?.[0];
      if (entity) {
        append(headingParser.parse(entity).firstChild?.firstChild?.literal ?? entity);
        i += entity.length;
        continue;
      }
    }
    if (value[i] === '\\' && /[!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~]/.test(value[i + 1] ?? '')) {
      i++; // Markdown 标点转义，反斜杠自身不属于显示文字。
    }
    append(value[i++]);
  }
  // 常用及数字 HTML 实体按显示字符处理，不把实体名字写进 ID。
  return tokens;
}

function headingText(value, lang) {
  const sourceTokens = headingTokens(value, lang);
  // Strip Markdown emphasis before spacing. Math/code and language switches
  // use private markers so Markdown never interprets their contents.
  const markers = new Map();
  let counter = 0, activeLang = lang, markdown = '';
  const marker = data => {
    let character;
    do { character = String.fromCodePoint(0xf0000 + counter++); } while (value.includes(character));
    markers.set(character, data);
    return character;
  };
  for (const token of sourceTokens) {
    if (token.lang !== activeLang) { markdown += marker({ lang: token.lang }); activeLang = token.lang; }
    markdown += token.math || token.opaque ? marker({ token }) : token.text.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  }
  const tokens = [], walker = headingParser.parse(markdown).walker();
  activeLang = lang;
  let event;
  while ((event = walker.next())) {
    if (!event.entering) continue;
    const node = event.node;
    const literal = node.type === 'softbreak' ? ' ' : ['text', 'code'].includes(node.type) ? node.literal : '';
    for (const character of literal) {
      const data = markers.get(character);
      if (data?.token) tokens.push(data.token);
      else if (data) activeLang = data.lang;
      else tokens.push({ text: character, lang: activeLang });
    }
  }
  // Merge adjacent literal tokens before calculating visible spacing for IDs.
  const merged = [];
  for (const token of tokens) {
    if (!token.math && !token.opaque && merged.at(-1) && !merged.at(-1).math && !merged.at(-1).opaque && merged.at(-1).lang === token.lang) merged.at(-1).text += token.text;
    else merged.push(token);
  }
  normalizeTokens(merged, { lang, convertChineseFullStop: false });
  return merged.map(token => token.text).join('');
}

/**
 * 标题 -> 基础 HTML ID。想调整转换规则时，优先修改此函数。
 *
 * 1. 公式转为已有的 Unicode 符号（例如 $\\infty$ -> ∞）。
 * 2. NFD 拆分音符并去掉 diacritic，再恢复 NFC（ü -> u，é -> e）。
 * 3. 先按正文排版把 -- 转为 –（见 typographer），en dash（–）再转为 ASCII hyphen（-），字母转为小写。
 * 4. 去掉格式标点，保留中文、字母、数字和数学符号，空白转为 -。
 * 此函数不处理重名；重名在每篇文章的 uniqueHeadingId 中处理。
 */
export function headingId(title, { lang = 'zh' } = {}) {
  return typographer(headingText(title, lang))
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .normalize('NFC')
    .replace(/–/g, '-')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\p{S}\s_-]/gu, '')
    .replace(/[$+<=>^`|~]/g, '') // ASCII 符号不能写入 Hugo Markdown 的锚点属性 {#…}，否则整个属性失效。
    .trim()
    .replace(/\s+/gu, '-') || 'heading';
}

/**
 * 百科正文的结构层：节编号、定理环境、编号公式，以及页内标签引用。
 *
 * 分两遍处理：先收集标签/编号并记录 edits，再统一渲染正文。
 * edits 的 start/end 始终指向未经转换的源文本，output 延迟到第二遍调用，
 * 因此前向引用可解析，报错行号也不会因 shortcode/公式替换而漂移。
 * file、lineOffset 用来把正文错误定位回含 front matter 的原始文章；
 * onLabels 将标签元数据交给入口脚本写入生成文件，供 Hugo 检查锚点冲突。
 * onBibliography 保留结构化文献与默认消歧结果，onTerms 收集文末统一显示的术语，
 * onHeadings 保留可供 Hugo 渲染的标题文字，
 * onSectionNumbers 提供目录与正文共用的节号（不编号节为空字符串）。
 * onWikiLink(目标匹配键, 行号, 列号) 报告每个百科链接（列号从 1 起），供检查命令查找缺失条目；同一处可能报告多次。
 */
export function transformDocument(source, { file = t('build_body_name'), lang = 'zh', lineOffset = 0, onLabels, onBibliography, onTerms, onHeadings, onSectionNumbers, onWikiLink, context, page, numbers, referenceFormat, prepareOnly = false, allowLevelOne = false, pageAnchor = false, checkMath = false } = {}) {
  const text = source.replace(/\r\n/g, '\n');
  // checkMath: each formula checked with KaTeX (the online editor; see katex-check.mjs).
  const katexProblem = (tex, display) => { const error = katexError(tex, display); return error && t('build_katex', { Message: error }); };
  const { items, labelled, problems: listProblems, codeBlocks, mathFences } = parseLists(text);
  const blockCodeEnd = offset => codeBlocks.find(([start, end]) => offset >= start && offset < end)?.[1];
  const edits = []; // 不重叠替换区间，收集列表项目后按源文件顺序排序。
  const labels = new Map(); // 标签 -> 类型、编号、实际锚点与声明行号。
  const registry = context?.labels ?? labels;
  const bibliography = []; // 所有文献块共享引用及消歧范围，但不合并输出位置。
  const terms = []; // 术语按声明顺序收集，统一在文章末尾显示。
  const headings = []; // 渲染后的标题 Markdown 供目录复用，不依赖未经过链接 hook 的 Fragments.Title。
  const resolving = context?.resolving ?? new Set(); // 展开未编号标题的显示文字时检查循环引用。
  const headingIds = new Set(pageAnchor ? ['page-title'] : []); // 同一篇文章中已分配的标题 ID。
  const stack = []; // 尚未关闭的 ::: 环境，最近打开的最先关闭。
  const openTags = []; // Authors' tags (<see>, <lang>…) not yet closed, the latest last: { name, start }.
  /** An author's paired tag at offset: opened, or closed in order. Its parameters are checked as it is converted. */
  function pairTag(offset) {
    const tag = readTag(text, offset);
    if (!tag || !Object.hasOwn(authorTags, tag.name) || !authorTags[tag.name].paired || tag.selfClosing) return;
    if (!tag.closing) { openTags.push({ name: tag.name, start: offset }); return; }
    const open = openTags.pop();
    if (!open) fail(t('build_tag_unopened', { Name: tag.name }), offset);
    if (open.name !== tag.name) fail(t('build_tag_mismatched', { Name: tag.name, Open: open.name }), offset);
  }
  let section = 0; // 首个编号节之前省略节号前缀。
  let sectionPart = '';
  let theorem = 0; // 所有编号环境共用；证明不参与。
  let equation = 0; // 公式独立计数，与 theorem 一起在新节重置。
  // The message carries the line; the error also carries the column (1-based), for editors to mark the spot.
  const fail = (message, offset) => {
    const before = text.slice(0, offset);
    const line = lineOffset + before.split('\n').length;
    const column = offset === undefined ? undefined : offset - before.lastIndexOf('\n');
    throw Object.assign(new Error(`${file}:${line}: ${message}`), { line, column });
  };
  const objectNumber = ordinal => sectionPart ? `${sectionPart}.${ordinal}` : String(ordinal);
  /** 将标签规范化为 NFC，并拒绝会破坏引用边界或 HTML 属性的字符。 */
  function labelName(value, offset) {
    const name = value.normalize('NFC');
    if (!validReferenceName(name)) fail(t('build_label_invalid', { Value: value }), offset);
    return name;
  }
  /** 注册显式目标与原始位置；定理、节、公式和文献之间也不能重用标签。 */
  function register(value, target, offset) {
    if (!value) return;
    const name = labelName(value, offset);
    const line = lineOffset + text.slice(0, offset).split('\n').length;
    const previous = registry.get(name);
    if (previous) {
      // 列表项目在结构扫描后注册，错误位置仍应遵循源码的声明先后顺序。
      if (previous.file && previous.file !== file) fail(`引用标签重复：${name}（首次声明在 ${previous.line ? `${previous.file}:${previous.line}` : previous.file}）`, offset);
      const firstLine = previous.offset < offset ? previous.line : line;
      fail(t('build_label_duplicate', { Name: name, Line: firstLine }), Math.max(previous.offset, offset));
    }
    const record = { ...target, offset, line, file, page: page?.key, render };
    labels.set(name, record);
    registry.set(name, record);
  }
  /** 从标题文字生成稳定 ID；检查已分配的完整 ID，避免重名后缀与原始标题碰撞。 */
  const nextSuffix = new Map(); // The next suffix to try for an id, so that many like headings stay linear.
  function uniqueHeadingId(title) {
    const base = headingId(title, { lang });
    let id = base, suffix = nextSuffix.get(base) ?? 1;
    if (headingIds.has(id)) { while (headingIds.has(`${base}-${suffix}`)) suffix++; id = `${base}-${suffix}`; nextSuffix.set(base, suffix + 1); }
    headingIds.add(id);
    return id;
  }
  let newlines; // 换行位置，按需建立；链接很多时避免每次从头数行。
  const lineAt = offset => {
    newlines ??= [...text.matchAll(/\n/g)].map(match => match.index);
    let low = 0, high = newlines.length;
    while (low < high) { const middle = (low + high) >> 1; if (newlines[middle] < offset) low = middle + 1; else high = middle; }
    return lineOffset + low + 1;
  };
  /** 校验百科链接的跨页保留语法，并渲染显示文字中的嵌套引用。 */
  function resolveWiki(wiki, offset) {
    if (wiki.target.includes('@')) fail(t('build_cross_page_reference'), offset);
    if (onWikiLink) {
      const line = lineAt(offset);
      onWikiLink(wiki.target, line, offset - (newlines[line - lineOffset - 2] ?? -1));
    }
    const caption = render(wiki.label, offset);
    if (caption !== transformMarkup(wiki.label, [], { wiki: false })) {
      return { destination: `wiki:?${new URLSearchParams({ title: wiki.target, name: wiki.name, ...(wiki.source !== wiki.name ? { source: wiki.source } : {}), caption: encode(caption) })}`, label: 'wiki' };
    }
  }
  /**
   * 在页面注册表中解析文献或结构目标，返回显示文字和 Hugo 可识别的目的地址。
   * 自定义文字及未编号标题在独立 caption 中递归渲染，避免在 Markdown 标签中嵌套链接。
   */
  function resolveReference(value, offset, customLabel) {
    // @-标签 只显示编号（“第一同构定理（@-x）”显示为“第一同构定理（1.2）”）。
    let numberOnly = value.startsWith('-') && customLabel === undefined;
    const name = labelName(numberOnly ? value.slice(1) : value, offset);
    const target = registry.get(name);
    if (!target) fail(t('build_label_missing', { Name: name }), offset);
    // 标签列表项目的引用文字就是它的编号：(a)、2 (a)。
    if (target.kind === 'item' && target.label !== undefined) numberOnly = false;
    // 标题标签与 HTML ID 独立：标题跳转到计算出的锚点，其他环境跳转到标签。
    const id = target.anchor ?? name;
    if (numberOnly) {
      if (target.kind === 'bibliography' || !target.number) fail(t('build_reference_number_missing', { Name: name }), offset);
      const query = new URLSearchParams({ id });
      if (target.page && target.page !== page?.key) query.set('page', target.page);
      return { destination: `reference:?${query}`, label: markdownText(String(target.number)) };
    }
    const caption = customLabel !== undefined || (!target.name && target.kind !== 'bibliography');
    if (caption) {
      const recursive = customLabel === undefined;
      if (recursive && resolving.has(name)) fail(t('build_heading_reference_cycle', { Path: [...resolving, name].join(' → ') }), offset);
      if (recursive) resolving.add(name);
      let rendered;
      try { rendered = customLabel === undefined ? target.render(target.label, target.offset) : render(customLabel, offset); }
      finally { if (recursive) resolving.delete(name); }
      const query = new URLSearchParams({ id, caption: encode(rendered) });
      if (target.page && target.page !== page?.key) query.set('page', target.page);
      if (target.kind === 'bibliography') query.set('key', name);
      return { destination: `${target.kind === 'bibliography' ? 'citation' : 'reference'}:?${query}`, label: 'reference' };
    }
    if (target.kind === 'bibliography') {
      const query = new URLSearchParams({ id, key: name });
      if (target.page && target.page !== page?.key) query.set('page', target.page);
      return { destination: `citation:?${query}`, label: markdownText(target.entry.citationLabel) };
    }
    // 定理/公式的 id 就是标签；默认名称由 Hugo 按页面语言翻译。
    const query = new URLSearchParams({ id, name: target.name, number: target.number });
    if (target.custom) query.set('custom', encode(target.custom));
    if (target.page && target.page !== page?.key) query.set('page', target.page);
    if (target.referenceText !== undefined) query.set('caption', encode(markdownText(target.referenceText)));
    if (target.title) {
      if (resolving.has(name)) fail(t('build_environment_reference_cycle', { Path: [...resolving, name].join(' → ') }), offset);
      resolving.add(name);
      try { query.set('title', encode(target.render(target.title, target.offset))); }
      finally { resolving.delete(name); }
    }
    return { destination: `reference:?${query}`, label: target.name };
  }
  const render = (value, offset) => transformMarkup(value, [], {
    resolveWiki: (wiki, i) => resolveWiki(wiki, offset + i),
    resolveReference: (key, i, label) => resolveReference(key, offset + i, label),
    fail: (message, i) => fail(message, offset + i),
    checkMath: checkMath ? katexProblem : undefined,
    indentedCode: false,
    blockCodeEnd: i => {
      const end = blockCodeEnd(offset + i);
      return end === undefined ? undefined : Math.min(value.length, end - offset);
    },
  });
  /** 读取行末 {@标签}，将引用标签与交给 Hugo 的标题属性分开返回。 */
  function parseAttributes(value, offset) {
    const match = value.match(/\s*\{([^{}\n]*)\}\s*$/);
    if (!match) return { title: value.trim(), attributes: '', id: '' };
    const ids = [...match[1].matchAll(/(?:^|\s)@([^\s]*)/g)];
    if (ids.length > 1 || /(?:^|\s)id\s*=/.test(match[1])) fail(t('build_unique_label'), offset);
    if (/data-section-(?:number|unnumbered)\s*=/.test(match[1])) fail(t('build_reserved_section_attributes'), offset);
    const id = ids[0] ? labelName(ids[0][1], offset) : '';
    let attrs = ids[0] ? match[1].replace(ids[0][0], '') : match[1];
    const number = attrs.match(/(?:^|\s)number\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s]+))/);
    if (number) attrs = attrs.replace(number[0], '');
    return { title: value.slice(0, match.index).trim(), attributes: attrs.trim(), id, customNumber: number ? (number[1] ?? number[2] ?? number[3]) : undefined };
  }
  let setextFailed = { from: -1, to: -1 };
  /** 读取 ATX 或 Setext 标题，保留容器前缀与原始结束位置，不进行编号或渲染。 */
  function readHeading(start) {
    const line = text.slice(start).match(/^[^\n]*(?:\n|$)/)[0];
    // 引用块/列表中的 ATX 小标题也使用相同的 ID 转换规则。
    // 保留容器前缀，转换标题时不能意外把它移出原来的引用块或列表。
    // Each quote marker taken whole, once ((?=(…))\k<…> stands for an atomic group): with "(?: {0,3}>[ \t]?)*"
    // a space after ">" could also start the next marker, and a line of many "> " failed in exponential time.
    const atx = line.trimEnd().match(/^(?<prefix>(?:(?=(?<quote> {0,3}>[ \t]?))\k<quote>)* {0,3}(?:(?:[-+*]|\d+[.)])[ \t]+)?)(?<marks>#{1,6})(?:[ \t]+(?<title>.*)|$)/);
    if (atx) return {
      end: start + line.length,
      level: atx.groups.marks.length,
      title: (atx.groups.title ?? '').replace(/[ \t]+#+[ \t]*$/, ''),
      prefix: atx.groups.prefix,
    };
    // Setext 标题可能跨多个正文行；遇到列表、引用块或其他块起点就停止，
    // 避免把普通正文及水平线误认为标题。
    // A line after one whose scan found no underline, before where that scan stopped, finds none either (that
    // underline would have made the earlier line a heading): not scanned again, or a long paragraph would
    // take quadratic time.
    if (start > setextFailed.from && start < setextFailed.to) return;
    let end = start, title = [];
    while (end < text.length) {
      const current = text.slice(end).match(/^[^\n]*(?:\n|$)/)[0];
      const underline = current.trimEnd().match(/^ {0,3}(=+|-+)[ \t]*$/);
      if (underline && title.length) return { end: end + current.length, level: underline[1][0] === '=' ? 1 : 2, title: title.join(' ') };
      if (!current.trim() || /^(?: {4}|\t| {0,3}(?:[#>~<]|`{3,}|\{\{[<%]|:::|[-+*]\s|\d+[.)]\s|\[.*\]:))/.test(current) || labelledLine.test(current) || /^ {0,3}(?:[-*_][ \t]*){3,}$/.test(current.trimEnd())) break;
      // 跨行公式整体跳过，其中看似标题的文字也是 TeX。
      let crossesLine = false;
      for (let p = end; p < end + current.length; p++) {
        const math = readMath(text, p);
        if (math && math.end > end + current.length) { crossesLine = true; break; }
        if (math) p = math.end - 1;
      }
      if (crossesLine) break;
      title.push(current.trimEnd());
      end += current.length;
    }
    setextFailed = { from: start, to: end };
  }
  // 第一遍只收集结构与标签，记录替换区间；此时不能渲染正文，
  // 因为引用可能指向文章后面尚未出现的标签。

  /** 文献围栏先于代码保护；数据中不展开数学、引用和定理语法。 */
  function collectBibliography(i) {
    const block = readBibliography(text, i, fail);
    if (!block) return;
    if (stack.length) fail(t('build_bibliography_position'), i);
    for (const entry of block.entries) {
      entry.key = labelName(entry.key, entry.offset);
      register(entry.key, { kind: 'bibliography', anchor: entry.anchor, entry }, entry.offset);
      bibliography.push(entry);
    }
    edits.push({ start: i, end: block.end, output: () => bibliographyMarkdown(block.entries) });
    return block.end;
  }

  function collectTerms(i) {
    const block = readTerms(text, i, fail);
    if (!block) return;
    if (stack.length) fail(t('build_terms_position'), i);
    terms.push(...block.terms);
    edits.push({ start: i, end: block.end, output: () => '\n' });
    return block.end;
  }

  /** 消费一个自动编号 math 块；返回块末尾的源文件偏移量。 */
  function collectNumberedMath(i) {
    // 列表项中的围栏按 CommonMark 解析树识别，可以缩进到列表内容列之后；输出保留同样的缩进。
    const inList = mathFences?.has(i);
    const mathFence = text.slice(i).match(inList ? /^([ \t]*)(`{3,}|~{3,})math(?:[ \t]+([^\n]*))?[ \t]*(?:\n|$)/ : /^( {0,3})(`{3,}|~{3,})math(?:[ \t]+([^\n]*))?[ \t]*(?:\n|$)/);
    if (!mathFence) return;
    const indent = inList ? mathFence[1] : '';
    mathFence.splice(1, 1);
    const info = (mathFence[2] ?? '').trim();
    if (info && !/^\{@[^{}\s]+\}$/.test(info)) fail(t('build_math_parameters'), i);
    const id = info ? labelName(info.slice(2, -1), i) : '';
    const close = new RegExp(`^${inList ? '[ \\t]*' : ' {0,3}'}${mathFence[1][0]}{${mathFence[1].length},}[ \\t]*(?:\\n|$)`, 'gm');
    close.lastIndex = i + mathFence[0].length;
    const closing = close.exec(text);
    if (!closing) fail(t('build_math_unclosed'), i);
    const tex = text.slice(i + mathFence[0].length, closing.index).trimEnd()
      .split('\n').map(line => line.startsWith(indent) ? line.slice(indent.length) : line.trimStart()).join('\n');
    // 去掉 TeX 注释再检查手写 tag；注释里的命令不会执行。
    const active = tex.split('\n').map(line => {
      let comment = -1;
      for (let p = 0; p < line.length; p++) {
        if (line[p] === '%' && !escaped(line, p)) { comment = p; break; }
      }
      return comment < 0 ? line : line.slice(0, comment);
    }).join('\n');
    if (/(?<!\\)(?:\\\\)*\\tag\*?\b/.test(active)) fail(t('build_math_manual_tag'), i);
    if (checkMath) { const problem = katexProblem(tex, true); if (problem) fail(problem, i); }
    const number = numbers ? numbers.object('equations') : objectNumber(++equation);
    register(id, { name: number ? 'reference_equation' : 'reference_equation_unnumbered', number, kind: 'equation' }, i);
    const payload = encode('@@numbered:' + JSON.stringify({ tex: number ? `${tex}\n\\tag{${number}}` : tex, id }));
    const end = closing.index + closing[0].length;
    edits.push({ start: i, end, output: () => `\n${indent}@@numberedmath:${payload}:numberedmath@@\n\n` });
    return end;
  }

  /** 收集标题：只把编号作为属性传给 Hugo，不把编号混入标题文字。 */
  function collectHeading(i) {
    const heading = readHeading(i);
    if (!heading) return;
    if (heading.level === 1 && !allowLevelOne) fail(t('build_heading_level_one'), i);
    if (heading.level === 2 && heading.prefix?.trim()) {
      fail(t('build_heading_level_two'), i);
    }
    if (stack.length && heading.level === 2) fail(t('build_heading_in_environment'), i);
    // 标记可以位于属性之前或整行末尾；\* 不匹配，保留为字面星号。
    const trailing = stripHeadingStar(heading.title);
    const parsed = parseAttributes(trailing.title, i);
    const marked = trailing.unnumbered ? { title: parsed.title, unnumbered: true } : stripHeadingStar(parsed.title);
    parsed.title = marked.title;
    const unnumbered = marked.unnumbered;
    let number;
    if (numbers) number = numbers.heading(heading.level, unnumbered, parsed.customNumber, `${file}:${lineOffset + text.slice(0, i).split('\n').length}`);
    else if (heading.level === 2 && !unnumbered) {
      const next = nextNumber(parsed.customNumber, section, file);
      section = next.cursor;
      number = sectionPart = next.part;
    } else if (parsed.customNumber !== undefined) fail('自定义编号必须位于启用编号的标题层级内，不能与不编号星号同时使用', i);
    if (!numbers && number) { theorem = 0; equation = 0; }
    const target = number
      ? { name: 'reference_section', number: String(number), kind: 'heading' }
      : { label: parsed.title, kind: 'heading' };
    const anchor = uniqueHeadingId(parsed.title);
    register(parsed.id, { ...target, anchor, ...(number && referenceFormat ? { referenceText: referenceFormat(String(number), (page?.depth ?? 0) + heading.level - 1) } : {}) }, i);
    headings.push({ anchor, title: parsed.title, offset: i, level: heading.level, number: number ? String(number) : '' });
    // 用户标签只用于查找；写入按标题计算的锚点，供 Hugo 正文及目录共用。
    const attrs = [`#${anchor}`, parsed.attributes, number ? `data-section-number="${number}"` : (heading.level === 2 ? 'data-section-unnumbered="true"' : '')].filter(Boolean).join(' ');
    edits.push({ start: i, end: heading.end, output: () => {
      const title = render(parsed.title, i);
      return `${heading.prefix ?? ''}${'#'.repeat(heading.level)} ${title}${attrs ? ` {${attrs}}` : ''}\n`;
    } });
    return heading.end;
  }

  /** 环境围栏只替换开头与结尾，正文仍走共同的 Markdown 转换流程。 */
  function collectEnvironment(i) {
    const fence = text.slice(i).match(/^ {0,3}(:{3,})([^\n]*)(?:\n|$)/);
    if (!fence) return;
    const header = fence[2].trim();
    if (!header) {
      const open = stack.pop();
      if (!open || open.fence !== fence[1]) fail(t('build_environment_fence'), i);
      edits.push({ start: i, end: i + fence[0].length, output: () => '\n{{< _theorem-end >}}\n\n' });
    } else {
      // definition (条件)：以“条件”代替类型名称显示，编号、计数器与颜色仍按类型；remark* (寄语) 不编号。
      // 旧写法 -remark [寄语] 不再接受，报错时给出新写法。
      if (/^-[a-z]/.test(header)) fail(t('build_environment_dash', { Header: header }), i);
      const type = header.match(/^([a-z]+)(\*)?(?:[ \t]+\(([^()\n]*)\))?(?:\s|$)/);
      const kind = type?.[1];
      const custom = type?.[3]?.trim();
      if (!Object.hasOwn(environments, kind ?? '')) fail(t('build_environment_unknown', { Header: header }), i);
      if (custom !== undefined && (!custom || kind === 'proof' || /[$\\<>[\]{}]/.test(custom))) {
        fail(t('build_environment_name', { Header: header }), i);
      }
      if (kind === 'proof' && stack.length) fail(t('build_proof_position'), i);
      if (stack.some(open => open.kind === 'proof')) fail(t('build_proof_nested_environment'), i);
      const rest = header.slice(type[0].trimEnd().length).trim();
      const parsed = parseAttributes(rest, i);
      if (parsed.attributes || parsed.customNumber !== undefined) fail(t('build_environment_parameters'), i);
      if (parsed.title && !/^\[[\s\S]*\]$/.test(parsed.title)) fail(t('build_environment_title'), i);
      const title = parsed.title ? parsed.title.slice(1, -1) : '';
      // The title goes into a shortcode's parameter, where a tag's shortcode would show as text.
      const titleStart = i + fence[0].indexOf('[') + 1;
      for (let k = 0; k < title.length;) {
        const math = readMath(title, k);
        if (math) { k = math.end; continue; }
        const end = protectedToken(title, k);
        if (end && title[k] === '<' && (readTag(title, k) || looksLikeTag(title, k))) {
          fail(t('build_tag_in_title', { Name: title.slice(k).match(/^<\/?([A-Za-z][A-Za-z0-9-]*)/)[1] }), titleStart + k);
        }
        k = end ?? k + 1;
      }
      const { group, numbered = true } = environments[kind];
      const name = custom ? 'environment_custom' : `environment_${kind}`;
      const number = numbered && !type[2] ? (numbers ? numbers.object('theorems') : objectNumber(++theorem)) : '';
      // 有标题的证明只显示标题：::: proof [@thm 的证明] 显示“定理 1 的证明”。
      const titleOnly = kind === 'proof' && Boolean(title.trim());
      register(parsed.id, titleOnly ? { name, number, kind: 'environment', referenceText: title }
        : { name, number, kind: 'environment', ...(custom ? { custom } : {}), ...(!number && kind !== 'proof' && title ? { title } : {}) }, i);
      stack.push({ fence: fence[1], start: i, kind });
      edits.push({ start: i, end: i + fence[0].length, output: () => {
        const headingTitle = render(title, i + fence[0].indexOf('[') + 1);
        return `\n{{< _theorem-start kind="${kind}" group="${group}" name="${name}" number="${number}" title="${encode(headingTitle)}"${custom ? ` custom="${encode(custom)}"` : ''}${titleOnly ? ' bare="true"' : ''} id="${encode(parsed.id)}" >}}\n\n`;
      } });
    }
    return i + fence[0].length;
  }

  // 顺序有意义：bibliography/math 围栏要先于代码保护；标题要先于行内公式/链接
  // （Setext 标题可能由公式开头）。环境则必须在代码、公式之外识别。
  let bodyStart = 0;
  const pageLabel = page && text.match(/^\s*\{@([^{}\s]+)\}[ \t]*(?:\n|$)/);
  if (pageLabel) {
    const number = page.number;
    register(pageLabel[1], number ? { kind: 'page', anchor: 'page-title', name: 'reference_section', number, referenceText: referenceFormat?.(number, page.depth) ?? number } : { kind: 'page', anchor: 'page-title', label: page.title }, text.indexOf('{@'));
    edits.push({ start: 0, end: pageLabel[0].length, output: () => '\n' });
    bodyStart = pageLabel[0].length;
  }
  for (let i = bodyStart; i < text.length;) {
    const lineStart = i === 0 || text[i - 1] === '\n';
    if (lineStart) {
      const end = collectBibliography(i) ?? collectTerms(i) ?? collectNumberedMath(i) ?? collectHeading(i);
      if (end !== undefined) {
        i = end;
        continue;
      }
    }
    const protectedEnd = blockCodeEnd(i) ?? protectedToken(text, i, { indentedCode: false });
    if (protectedEnd) {
      const problem = unclosedProtected(text, i, protectedEnd);
      if (problem) fail(problem, i);
      pairTag(i);
      i = protectedEnd;
      continue;
    }
    const token = readMath(text, i) ?? readMarkdownLink(text, i) ?? readWiki(text, i);
    if (token) {
      i = token.end;
      continue;
    }
    if (lineStart) {
      const end = collectEnvironment(i);
      if (end !== undefined) {
        i = end;
        continue;
      }
    }
    i++;
  }
  if (stack.length) fail(t('build_environment_unclosed'), stack.at(-1).start);
  if (openTags.length) fail(t('build_tag_unclosed', { Name: openTags.at(-1).name }), openTags.at(-1).start);
  if (listProblems.length) fail(t(listProblems[0].key), listProblems[0].offset);
  // 标签列表项目：标记写成 Hugo 的有序列表标记，标签显示在项目开头（_item-label）。一行中紧接的几个标签标记
  // （(3) (4) …）是嵌套的列表：外层的标签写在最内层项目的开头（标记之间不能有文字），带上向外的层数。
  // The labels are written in the text, on its baseline (_item-label); a label with no text on its line (before a
  // display formula, a code block, a list, or nothing) stands beside the item instead (block="true"). A label
  // alone on its line goes to the start of the text on the next line, when that line is a paragraph's.
  const label = (marker, outer, block) => {
    const shown = marker.parenthesized ? `(${marker.label})` : `${marker.label})`;
    return `{{< _item-label${outer ? ` outer="${outer}"` : ''}${block ? ' block="true"' : ''} >}}${render(shown, marker.start)}{{< /_item-label >}}`;
  };
  const blockStart = /^(?:\\\[|\$\$|`{3,}|~{3,}|:::|[-+*][ \t]|\d{1,9}[.)](?:[ \t]|$)|#|>|\||<|\{\{)/;
  const sorted = [...labelled].sort((a, b) => a.start - b.start);
  for (let i = 0; i < sorted.length;) {
    let j = i;
    while (j + 1 < sorted.length && sorted[j + 1].start === sorted[j].end) j++;
    const chain = sorted.slice(i, j + 1), last = chain.at(-1);
    const labels = block => chain.map((outer, n) => label(outer, chain.length - 1 - n, block)).join('');
    const lineEnd = text.indexOf('\n', last.end) < 0 ? text.length : text.indexOf('\n', last.end);
    const rest = text.slice(last.end, lineEnd);
    // Where the text of an item alone on its line starts: the next line's, after its indentation and quote marks.
    const next = !rest.trim() && lineEnd < text.length ? lineEnd + 1 + text.slice(lineEnd + 1).match(/^[ \t>]*/)[0].length : -1;
    const inline = rest.trim() ? !blockStart.test(rest)
      : next >= 0 && next < text.length && text[next] !== '\n' && !blockStart.test(text.slice(next, next + 10)) && !readLabelledMarker(text, next);
    const moved = inline && !rest.trim();
    chain.forEach((marker, k) => edits.push({ start: marker.start, end: marker.end, output: () => k < chain.length - 1 ? marker.marker
      // Nothing after the marker on its line: a space after it, or the marker is text.
      : marker.marker + (marker.marker.endsWith(' ') ? '' : ' ') + (moved ? '' : labels(!inline)) }));
    if (moved) edits.push({ start: next, end: next, output: () => labels(false) });
    i = j + 1;
  }
  for (const item of items) {
    if (!item.id) fail(t('build_item_label_empty'), item.start);
    register(item.id, item.caption === undefined ? { name: 'reference_item', number: item.number, kind: 'item' } : { label: item.caption, kind: 'item' }, item.start);
    // The spaces after it too: the text starts right after the label.
    const end = item.end + text.slice(item.end).match(/^[ \t]*/)[0].length;
    edits.push({ start: item.start, end, output: () => `{{< _item-target id="${encode(item.id.normalize('NFC'))}" >}}` });
  }
  edits.sort((a, b) => a.start - b.start);
  if (context) context.bibliography.push(...bibliography);
  else prepareBibliography(bibliography);
  const anchors = new Map(pageAnchor ? [['page-title', '页面主标题']] : []);
  for (const [name, target] of labels) {
    if (target.kind === 'heading' || target.kind === 'page') continue;
    const anchor = target.anchor ?? name;
    if (anchors.has(anchor)) fail(t('build_anchor_duplicate', { Anchor: anchor, Other: anchors.get(anchor) }), target.offset);
    anchors.set(anchor, name);
  }
  const finish = () => {
    onBibliography?.(bibliography.map(({ offset, ...entry }) => entry));
    onTerms?.(terms);
    onHeadings?.(Object.fromEntries(headings.map(heading => [heading.anchor, render(heading.title, heading.offset)])));
    onSectionNumbers?.(Object.fromEntries(headings.map(heading => [heading.anchor, heading.number])));
    onLabels?.([...labels].map(([id, target]) => ({
      id: target.kind === 'heading' ? id : target.anchor ?? id,
      kind: target.kind,
      line: target.line,
      ...(['heading', 'page'].includes(target.kind) ? { anchor: target.anchor } : {}),
    })));

    // 第二遍按顺序拼接：普通片段走 markup，结构片段调用延迟 output。
    // 这里标签表已完整，允许正文、环境标题中的引用指向后文。
    let result = '', cursor = 0;
    for (const edit of edits) {
      result += render(text.slice(cursor, edit.start), cursor) + edit.output();
      cursor = edit.end;
    }
    return result + render(text.slice(cursor), cursor);
  };
  return prepareOnly ? finish : finish();
}
