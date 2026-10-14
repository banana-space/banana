import { Parser } from 'commonmark';
import { protectedToken, readMath } from './markup.mjs';
import { labelText, readLabelledMarker } from '../shared/scan.mjs';

// The widest projected marker: nine digits, ")" and four spaces (CommonMark's limits).
const maxTextColumn = 14;

/**
 * 标签列表项（(a)、(iii)、A1) 等）在投影中写成同宽的有序列表标记 0)、00) …，由 CommonMark 决定列表结构：
 * 起始值不是 1，所以新列表不能打断段落，同一列表的后续项目可以。项目的文字列（续行的缩进）与标签后的文字对齐，
 * 最多 14 列。标记读取自 marker 起，consumed 为替换的源码长度，返回投影中的标记。
 */
function projectedMarker(source, marker) {
  const width = [...source.slice(marker.start, marker.end)].length;
  const spaces = source.slice(marker.end).match(/^[ \t]*/)[0];
  const rest = source.slice(marker.end + spaces.length).match(/^[^\n]*/)[0];
  if (!rest) {
    // Nothing after the marker on its line: its text is on the next lines, one column after it.
    return { text: `${'0'.repeat(Math.min(9, Math.max(1, width - 1)))})`, consumed: marker.end + spaces.length - marker.start };
  }
  // Five spaces or more: the item starts with indented code, one space after the marker (as in CommonMark).
  const after = spaces.length >= 5 ? 1 : spaces.length;
  const column = Math.min(width + after, maxTextColumn);
  const padding = Math.max(1, column - 10);
  return { text: `${'0'.repeat(column - 1 - padding)})${' '.repeat(padding)}`, consumed: marker.end - marker.start + after };
}

/**
 * CommonMark 的列表树决定实际序号；源码中的后续数字不决定序号。
 * 投影只用于结构解析，通过位置映射保留原始标签偏移/行号。
 * 公式折叠为不透明 token，::: 围栏按 Hugo 的 div 块边界处理。
 * 正文仍交给 Hugo 渲染，这里不使用 CommonMark 的 HTML 渲染器。
 *
 * 返回的 labelled 是确实成为列表项的标签标记：{ start, end }（源码中替换的区间）、Markdown 标记 marker、
 * 标签 label 与 parenthesized；problems 为错误 { key, offset }（由调用者报告）。
 */
export function parseLists(source) {
  let projection = '', cursor = 0;
  const opaque = [], segments = [];
  const candidates = new Map(); // 投影中标签标记的位置 -> 标记
  function append(value, sourceStart, literal = true) {
    if (!value) return;
    segments.push({ start: projection.length, end: projection.length + value.length, sourceStart, literal });
    projection += value;
  }
  function replace(start, end, value) {
    append(source.slice(cursor, start), cursor);
    append(value, start, false);
    cursor = end;
  }
  /** 行首的容器标记（引用、列表）之后的标签标记，写成投影中的有序列表标记；返回之后的位置。 */
  function labelledMarkers(lineStart) {
    let p = lineStart, found;
    for (;;) {
      const q = p + source.slice(p, p + 100).match(/^[ \t]*/)[0].length;
      if (source[q] === '>') { p = q + 1; continue; }
      const plain = source.slice(q, q + 12).match(/^(?:[-+*]|\d{1,9}[.)])(?=[ \t])/);
      if (plain) { p = q + plain[0].length; continue; }
      const marker = readLabelledMarker(source, q);
      if (!marker) return found;
      const projected = projectedMarker(source, { start: q, end: marker.end });
      append(source.slice(cursor, q), cursor);
      candidates.set(projection.length, { ...marker, start: q, end: q + projected.consumed, marker: projected.text, delimiter: projection.length + projected.text.indexOf(')') });
      append(projected.text, q, false);
      cursor = found = p = q + projected.consumed;
    }
  }
  for (let i = 0; i < source.length;) {
    if (i === 0 || source[i - 1] === '\n') {
      const end = labelledMarkers(i);
      if (end !== undefined) {
        i = end;
        continue;
      }
    }
    const protectedEnd = protectedToken(source, i, { indentedCode: false });
    if (protectedEnd) {
      opaque.push([i, protectedEnd]);
      i = protectedEnd;
      continue;
    }
    const math = readMath(source, i);
    if (math) {
      // 最终 Markdown 中公式是单个 token；TeX 的空行不能使列表提前结束。
      replace(i, math.end, math.display ? '@@displaymath:eA==:displaymath@@' : '@@math:eA==:math@@');
      i = math.end;
      continue;
    }
    if (i === 0 || source[i - 1] === '\n') {
      const fence = source.slice(i).match(/^ {0,3}:{3,}[^\n]*(?:\n|$)/);
      if (fence) {
        replace(i, i + fence[0].length, /^ {0,3}:{3,}\s*$/.test(fence[0]) ? '\n</div>\n\n' : '\n<div>\n\n');
        i += fence[0].length;
        continue;
      }
    }
    i++;
  }
  append(source.slice(cursor), cursor);
  const originalOffset = offset => {
    const segment = segments.find(part => offset >= part.start && offset < part.end);
    return segment ? segment.sourceStart + (segment.literal ? offset - segment.start : 0) : source.length;
  };
  const starts = [0];
  for (let i = 0; i < projection.length; i++) if (projection[i] === '\n') starts.push(i + 1);
  // Only the block structure is wanted (code blocks, list items): inline parsing is skipped, which is also
  // where commonmark.js takes quadratic time on text full of brackets ("[a](" repeated).
  const parser = new Parser();
  parser.processInlines = () => {};
  const labelledItem = node => candidates.get(starts[node.sourcepos[0][0] - 1] + node.sourcepos[0][1] - 1);
  /** 标签项目与编号项目在同一个列表中（两者的分隔符相同而相邻）：返回这些标签标记。 */
  function mixed(document) {
    const found = [];
    const walker = document.walker();
    let event;
    while ((event = walker.next())) {
      const node = event.node;
      if (!event.entering || node.type !== 'list' || node.listType !== 'ordered') continue;
      const kinds = [];
      for (let item = node.firstChild; item; item = item.next) kinds.push(labelledItem(item));
      if (kinds.some(Boolean) && !kinds.every(Boolean)) found.push(...kinds.filter(Boolean));
    }
    return found;
  }
  let document = parser.parse(projection);
  const problems = [];
  // 标签列表写成 0) …，紧接 1) 列表时改用 0. …，使两者成为不同的列表。
  const flipped = mixed(document);
  if (flipped.length) {
    for (const marker of flipped) {
      projection = projection.slice(0, marker.delimiter) + '.' + projection.slice(marker.delimiter + 1);
      marker.marker = marker.marker.replace(')', '.');
    }
    document = parser.parse(projection);
    for (const marker of mixed(document)) problems.push({ key: 'build_labelled_list_mixed', offset: marker.start });
  }
  const walker = document.walker();
  const items = [], labelled = [], codeBlocks = [], mathFences = new Set(), ordinals = new Map();
  const paragraphs = []; // [start of its first line, end of its last line] in the source (for scripts/format/).
  let event;
  while ((event = walker.next())) {
    if (!event.entering) continue;
    const node = event.node;
    if (node.type === 'code_block') {
      // 包含容器前缀，供正文转换保护真实代码，避免将嵌套列表误认作缩进代码。
      const start = originalOffset(starts[node.sourcepos[0][0] - 1]);
      codeBlocks.push([source.lastIndexOf('\n', start - 1) + 1, originalOffset(starts[node.sourcepos[1][0]] ?? projection.length)]);
      // 列表项中的 math 围栏可以比列表内容列多缩进；记下所在行的行首，供结构层识别。
      if (node._isFenced && /^math(?:\s|$)/.test(node.info ?? '')) mathFences.add(source.lastIndexOf('\n', start - 1) + 1);
    }
    if (node.type === 'paragraph') {
      const start = originalOffset(starts[node.sourcepos[0][0] - 1]);
      const last = originalOffset(starts[node.sourcepos[1][0] - 1]);
      const end = source.indexOf('\n', last);
      paragraphs.push([source.lastIndexOf('\n', start - 1) + 1, end < 0 ? source.length : end]);
    }
    if (node.type !== 'item' || node.parent.listType !== 'ordered') continue;
    const marker = labelledItem(node);
    if (marker) {
      ordinals.set(node, { label: labelText(marker.label), parenthesized: marker.parenthesized });
      labelled.push({ start: marker.start, end: marker.end, marker: marker.marker, label: labelText(marker.label), parenthesized: marker.parenthesized });
    } else ordinals.set(node, (ordinals.get(node.prev) ?? node.parent.listStart - 1) + 1);
    const paragraph = node.firstChild;
    if (paragraph?.type !== 'paragraph' || paragraph.sourcepos[0][0] !== node.sourcepos[0][0]) continue;
    const [line, column] = paragraph.sourcepos[0];
    const start = originalOffset(starts[line - 1] + column - 1);
    if (opaque.some(([begin, end]) => start >= begin && start < end)) continue;
    const declaration = source.slice(start).match(/^\{@([^{}\s]*)\}(?=\s|$)/);
    if (!declaration) continue;
    const path = [ordinals.get(node)];
    for (let parent = node.parent; parent; parent = parent.parent) {
      if (parent.type === 'item' && parent.parent.listType === 'ordered') path.unshift(ordinals.get(parent));
    }
    // 只有编号项目时为“第 2.1 项”的编号；有标签时为各层写法，以空格连接：2 (a)、(2) i。
    const reference = path.every(part => typeof part === 'number')
      ? { number: path.join('.') }
      : { caption: path.map(part => typeof part === 'number' ? String(part) : part.parenthesized ? `(${part.label})` : part.label).join(' ') };
    items.push({ id: declaration[1], ...reference, start, end: start + declaration[0].length });
  }
  return { items, labelled, problems, codeBlocks, mathFences, paragraphs };
}
