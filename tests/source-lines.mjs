import assert from 'node:assert/strict';
import { decodeLine, formulaRanges, markPattern, markSourceLines } from '../scripts/prebuild/source-lines.mjs';

// Source-line marks for the editor's preview: shown here as <n>.
const show = (body, offset = 0) => markSourceLines(body, offset).replace(markPattern, (_mark, digits) => `<${decodeLine(digits)}>`);
const body = [
  '正文第一行，', // 1
  '续行 $x+', // 2: the formula runs on
  'y$ 结束。', // 3: starts inside it
  '', // 4
  '## 标题 {@sec:a}', // 5
  '**[[链接]]** 开头的强调', // 6
  '- {@item:x} 带标签的项目', // 7
  '  续行', // 8
  '1. 编号项目', // 9
  '    ```tikz', // 10: a fence in a list item
  '    \\draw (0, 0);', // 11
  '    ```', // 12
  '$$', // 13
  'a + b', // 14
  '$$', // 15
  '| a | b |', // 16
  '|---|---|', // 17
  '> 引用', // 18
  '> <lang en>English</lang>', // 19
  '---', // 20
  '::: theorem', // 21
  '定理内容 `代码', // 22
  '跨行` 之后', // 23
  ':::', // 24
  '![图](a.png)', // 25
  '[^1]: 脚注', // 26
  '[链接]: https://example.org', // 27
].join('\n');
assert.equal(show(body, 4), [
  '<5>正文第一行，', '<6>续行 $x+', 'y$ 结束。', '', '## 标题 {@sec:a}', '<10>**[[链接]]** 开头的强调',
  '- {@item:x} <11>带标签的项目', '  <12>续行', '1. <13>编号项目', '    ```tikz', '    \\draw (0, 0);', '    ```',
  '$$', 'a + b', '$$', '| a | b |', '|---|---|', '> <22>引用', '> <lang en>English</lang>', '---',
  '::: theorem', '<26>定理内容 `代码', '跨行` 之后', ':::', '![图](a.png)', '[^1]: <30>脚注', '[链接]: https://example.org',
].join('\n'));
// A mark ends in punctuation, as a line start counts for emphasis; it holds no ordinary character.
const mark = markSourceLines('甲', 0).slice(0, -1);
assert.match(mark.at(-1), /\p{P}/u);
assert.doesNotMatch(mark, /[\p{L}\p{N}\s]/u);
// Formulas, for double clicks on one in the preview: delimiters included, none in code.
const formulaText = '甲 $a$ `$b$` \\[\nc\n\\] \\$d$e$\n```\n$f$\n```\n';
assert.deepEqual(formulaRanges(formulaText).map(({ from, to }) => formulaText.slice(from, to)), ['$a$', '\\[\nc\n\\]', '$e$']);
console.log('源码行号标记：正文、跨行公式与代码、标题、强调、列表标签、缩进代码块、公式块、表格、引用、短代码、分隔线、环境、图片、脚注与链接定义，以及公式位置验证通过');
