import { Parser } from 'commonmark';
import { protectedToken, readMath } from './markup.mjs';

/**
 * CommonMark 的列表树决定实际序号；源码中的后续数字不决定序号。
 * 投影只用于结构解析，通过位置映射保留原始标签偏移/行号。
 * 公式折叠为不透明 token，::: 围栏按 Hugo 的 div 块边界处理。
 * 正文仍交给 Hugo 渲染，这里不使用 CommonMark 的 HTML 渲染器。
 */
export function parseLists(source) {
  let projection = '', cursor = 0;
  const opaque = [], segments = [];
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
  for (let i = 0; i < source.length;) {
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
  const items = [], codeBlocks = [], mathFences = new Set(), ordinals = new Map();
  const paragraphs = []; // [start of its first line, end of its last line] in the source (for scripts/format/).
  // Only the block structure is wanted (code blocks, list items): inline parsing is skipped, which is also
  // where commonmark.js takes quadratic time on text full of brackets ("[a](" repeated).
  const parser = new Parser();
  parser.processInlines = () => {};
  const walker = parser.parse(projection).walker();
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
    const ordinal = (ordinals.get(node.prev) ?? node.parent.listStart - 1) + 1;
    ordinals.set(node, ordinal);
    const paragraph = node.firstChild;
    if (paragraph?.type !== 'paragraph' || paragraph.sourcepos[0][0] !== node.sourcepos[0][0]) continue;
    const [line, column] = paragraph.sourcepos[0];
    const start = originalOffset(starts[line - 1] + column - 1);
    if (opaque.some(([begin, end]) => start >= begin && start < end)) continue;
    const declaration = source.slice(start).match(/^\{@([^{}\s]*)\}(?=\s|$)/);
    if (!declaration) continue;
    const path = [ordinal];
    for (let parent = node.parent; parent; parent = parent.parent) {
      if (parent.type === 'item' && parent.parent.listType === 'ordered') path.unshift(ordinals.get(parent));
    }
    items.push({ id: declaration[1], number: path.join('.'), start, end: start + declaration[0].length });
  }
  return { items, codeBlocks, mathFences, paragraphs };
}
