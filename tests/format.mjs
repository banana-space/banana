import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFile, readdir, rm, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { formatMarkdown, textWidth } from '../scripts/format/markdown.mjs';
import { createProject, buildProject } from './helpers/project.mjs';

// The layout of the Markdown sources (scripts/format/markdown.mjs): line breaks and indentation only, and the
// pages built from them unchanged.
const page = body => formatMarkdown(`---\ntitle: 甲\n---\n${body}`).replace(/^---\ntitle: 甲\n---\n\n/, '');
const long = (unit, times) => unit.repeat(times);

assert.equal(textWidth('ab中文。$x$'), 2 + 4 + 2 + 3);
// One blank line after the front matter; a page with nothing after it stays so.
assert.equal(formatMarkdown('---\ntitle: 甲\n---\n正文\n'), '---\ntitle: 甲\n---\n\n正文\n');
assert.equal(formatMarkdown('---\ntitle: 甲\n---\n\n\n\n正文\n'), '---\ntitle: 甲\n---\n\n正文\n');
assert.equal(formatMarkdown('---\ntitle: 甲\n---\n'), '---\ntitle: 甲\n---\n');

// Lists: "-" for unordered items, one space after a marker, continuation lines at the item's text (what is
// further indented keeps its extra indentation); code keeps its indentation; lazy lines stay.
assert.equal(page('* 甲\n\n    乙\n\n    * 丙\n\n        丁'), '- 甲\n\n  乙\n\n  - 丙\n\n    丁');
assert.equal(page('1.  甲\n    乙\n\n10. 丙\n\n    丁'), '1. 甲\n   乙\n\n10. 丙\n\n    丁');
assert.equal(page('* 甲\n\n    \\[\n      a\n    \\]'), '- 甲\n\n  \\[\n  a\n  \\]', 'a formula at the item\'s text');
assert.equal(page('1. 甲\n\n    ```\n        code\n    ```'), '1. 甲\n\n   ```\n       code\n   ```', 'fenced code moves whole');
assert.equal(page('* 甲\n\n          code'), '- 甲\n\n          code', 'indented code stays code');
assert.equal(page('> * 甲\n>     乙'), '> - 甲\n>   乙');
assert.equal(page('* 甲\n乙'), '- 甲\n乙', 'a lazy line');
for (const kept of ['*强调*', '***', '* * *', '- 甲\n  乙', '```\n* 代码\n```', '\\[\n* x\n\\]']) assert.equal(page(kept), kept, kept);
// Labelled list items ((a), iv), …): continuation lines at the item's text, at most at column 14.
assert.equal(page('(a)   甲\n      乙\n(iii) 丙\n  丁\n\n      戊'), '(a) 甲\n    乙\n(iii) 丙\n  丁\n\n      戊', 'a lazy line stays');
assert.equal(page('> (a) 甲\n>       乙'), '> (a) 甲\n>     乙');
assert.equal(page('($\\mathrm{T}_{2}$) 甲\n                    乙'), '($\\mathrm{T}_{2}$) 甲\n              乙', 'at most column 14');
assert.equal(page('(a) \\[x\\]\n(b) 乙'), '(a) \\[\n    x\n    \\]\n(b) 乙', 'a formula right after a label');
assert.equal(page('B4)\n\n    1. 甲\n        \\[x\\]'), 'B4)\n\n    1. 甲\n       \\[\n       x\n       \\]', 'a list (not code) under a label alone on its line');
for (const kept of ['甲\n(3) 乙', '(1\\) 与 (3)']) assert.equal(page(kept), kept, kept);

// Display formulas on lines of their own, at the indentation of the line they start on.
assert.equal(page('设\n\\[x\\]\n于是'), '设\n\\[\nx\n\\]\n于是');
assert.equal(page('设 \\[x\\] 于是'), '设\n\\[\nx\n\\]\n于是');
assert.equal(page('设 $$x$$，于是'), '设\n$$\nx\n$$\n，于是');
assert.equal(page('\\[\n    a &= b \\\\\n      &= c\n\\]'), '\\[\na &= b \\\\\n  &= c\n\\]', 'relative indentation kept');
assert.equal(page('1. 甲\n\n   \\[\n       a\n   \\]'), '1. 甲\n\n   \\[\n   a\n   \\]', 'in a list item');
assert.equal(page('2. \\[a\\]\n3. 乙'), '2. \\[\n   a\n   \\]\n3. 乙', 'right after a list marker');
assert.equal(page('> 设 \\[\n>     a\n> \\] 于是'), '> 设\n> \\[\n> a\n> \\]\n> 于是', 'in a quote');
assert.equal(page('- *对任何 $X$，有\n  \\[X\\]*'), '- *对任何 $X$，有\n  \\[\n  X\n  \\]*', 'emphasis markers stay with the delimiters');
assert.equal(page('甲 *\\[x\\] 乙*'), '甲\n*\\[\nx\n\\]\n乙*');
for (const kept of ['`\\[x\\]`', '```\n\\[x\\]\n```', '## 标题 \\[x\\]', '| \\[x\\] | 乙 |\n| --- | --- |', '\\[\\]', '\\\\[x\\\\]']) {
  assert.equal(page(kept), kept, kept);
}

// Paragraph lines at most 100 columns: after 。, then ，、；：, then between text and a formula, then before
// <person />; each line as long as it may be.
const sentence = long('汉', 30) + '。'; // 62 columns
assert.equal(page(sentence + sentence), `${sentence}\n${sentence}`);
assert.equal(page(`${long('汉', 20)}，${long('汉', 20)}。${long('汉', 20)}，${long('汉', 20)}`), `${long('汉', 20)}，${long('汉', 20)}。\n${long('汉', 20)}，${long('汉', 20)}`, '。 first');
assert.equal(page(`${long('汉', 40)}，${long('汉', 40)}`), `${long('汉', 40)}，\n${long('汉', 40)}`);
assert.equal(page(`${long('汉', 45)} $x$ ${long('汉', 10)}`), `${long('汉', 45)} $x$\n${long('汉', 10)}`, 'a space after a formula');
assert.equal(page(`${long('汉', 49)} $x$ ${long('汉', 10)}`), `${long('汉', 49)}\n$x$ ${long('汉', 10)}`, 'a space before a formula');
assert.equal(page(`${long('汉', 49)}$x$${long('汉', 10)}`), `${long('汉', 49)}\n$x$${long('汉', 10)}`, 'Han next to a formula');
assert.equal(page(`${long('a', 95)}$x$`), `${long('a', 95)}$x$`, 'not between letters and a formula');
assert.equal(page(`**${long('汉', 46)}** <person years="1900--1980" />，${long('汉', 5)}`), `**${long('汉', 46)}**\n<person years="1900--1980" />，${long('汉', 5)}`);
assert.equal(page(`${long('汉', 45)}”${long('汉', 2)}。”${long('汉', 9)}`), `${long('汉', 45)}”${long('汉', 2)}。”\n${long('汉', 9)}`, 'after closing quotes');
// Continuation lines keep their block: a list item's text, a quote, a footnote.
assert.equal(page(`- ${sentence}${sentence}`), `- ${sentence}\n  ${sentence}`);
assert.equal(page(`10. ${sentence}${sentence}`), `10. ${sentence}\n    ${sentence}`);
assert.equal(page(`> - ${sentence}${sentence}`), `> - ${sentence}\n>   ${sentence}`);
assert.equal(page(`[^1]: ${sentence}${sentence}`), `[^1]: ${sentence}\n    ${sentence}`);
assert.equal(page(`(a) ${sentence}${sentence}`), `(a) ${sentence}\n    ${sentence}`);
assert.equal(page(`- (iv) ${sentence}${sentence}`), `- (iv) ${sentence}\n       ${sentence}`);
assert.equal(page(`(a) ${long('汉', 46)}，(b) 乙`), `(a) ${long('汉', 46)}，(b) 乙`, 'not before a label (a new item)');
// Nowhere a break would change the page: inside atoms, next to emphasis markers, before what would start a
// block, before code after punctuation (the typography leaves a space there), after a hard-break backslash.
for (const kept of [
  `${long('汉', 45)}[[${long('汉', 10)}。${long('汉', 10)}]]`, `${long('汉', 45)}\`${long('汉', 10)}。 ${long('汉', 10)}\``,
  `${long('a', 90)}$\\text{${long('汉', 5)}。}$`, `${long('汉', 49)}。**${long('汉', 10)}**`, `${long('汉', 49)}。- ${long('汉', 10)}`,
  `${long('汉', 49)}。\`${long('汉', 10)}\``, `${long('汉', 49)}。# ${long('汉', 10)}`, `${long('汉', 49)}。1. ${long('汉', 10)}`,
  `# ${long('汉', 60)}。${long('汉', 10)}`, `::: theorem [${long('汉', 60)}。${long('汉', 10)}]\n甲\n:::`,
  `| ${long('汉', 60)}。${long('汉', 10)} |\n| --- |`, `\`\`\`\n${long('汉', 60)}。${long('汉', 10)}\n\`\`\``,
  `<!-- ${long('汉', 60)}。${long('汉', 10)} -->`, long('word ', 30), `    ${long('汉', 60)}。${long('汉', 10)}`,
]) assert.equal(page(kept), kept, kept);
assert.equal(page(`${long('汉', 60)}。${long('汉', 60)}。${long('汉', 60)}`), `${long('汉', 60)}。\n${long('汉', 60)}。\n${long('汉', 60)}`, 'as short as the places allow');
// Formatting twice changes nothing more.
const messy = `---\ntitle: 甲\n---\n设 \\[\n      a\n    \\] 于是 ${sentence}${sentence}\n\n- ${sentence}${sentence}\n`;
assert.equal(formatMarkdown(formatMarkdown(messy)), formatMarkdown(messy));

// The pages built from formatted sources are those built before: every page of a project (the test fixtures and
// pages written to need each kind of break), built, formatted and built again, compared as the browser renders
// HTML (runs of whitespace as one space, none at the inner edges of blocks). The summary Hugo cuts by counting
// words (og:description) and the dates are left out.
const root = await createProject('format');
try {
  const tricky = [
    `设 \\[x^2\\] 于是 ${sentence}${sentence}`,
    `${long('汉', 45)} $x$ ${long('汉', 10)}，${long('汉', 40)}$y$${long('汉', 20)}。`,
    `- *对任何对象 $X$，有正合三角\n  \\[X\\to 0\\]*\n- ${sentence}${sentence}`,
    `> 引用 \\[\n>     a \\\\\n>       b\n> \\] 于是 ${sentence}${sentence}`,
    `**${long('汉', 46)}** <person years="1900--1980" />，${long('汉', 50)}。`,
    `正文[^1]。\n\n[^1]: ${sentence}${sentence}`,
    `<see>[[奇异上同调]]、${long('汉', 40)}，${long('汉', 40)}</see>`,
    `$$\n    \\begin{tikzcd} A \\arrow[r] & B \\end{tikzcd}\n$$`,
    `还可以接着写标题与标签：\`${long('a', 70)}\` 确认后成为 \`b\`，${long('汉', 20)}。`,
  ];
  for (const [i, body] of tricky.entries()) {
    await mkdir(join(root, `content/wiki/format-${i}`), { recursive: true });
    await writeFile(join(root, `content/wiki/format-${i}/index.md`), `---\ntitle: 排版${i}\ncategories: []\n---\n${body}\n`);
  }
  const build = async () => {
    buildProject(root);
    execFileSync(process.execPath, ['scripts/postbuild.mjs'], { cwd: root, stdio: 'pipe' });
    const pages = new Map();
    async function read(directory) {
      for (const entry of await readdir(join(root, 'public', directory), { withFileTypes: true })) {
        const path = join(directory, entry.name);
        if (entry.isDirectory()) await read(path);
        else if (entry.name === 'index.html') pages.set(path, rendered(await readFile(join(root, 'public', path), 'utf8')));
      }
    }
    await read('');
    return pages;
  };
  const blocks = 'p|li|td|th|h[1-6]|dt|dd|figcaption|summary|div|blockquote';
  // Code (<pre>) as it is; elsewhere whitespace as HTML renders it.
  const rendered = html => html
    .replace(/<meta (?:name|property)="(?:og:)?description" content="[^"]*">|<meta property="article:modified_time"[^>]*>|<time [^>]*>[^<]*<\/time>/g, '')
    .split(/(<pre[\s\S]*?<\/pre>)/).map((part, i) => i % 2 ? part : part.replace(/[ \t\n]+/g, ' ')).join('')
    .replace(new RegExp(`(<(?:${blocks})(?:\\s[^>]*)?>) `, 'g'), '$1').replace(new RegExp(` (</(?:${blocks})>)`, 'g'), '$1');
  const before = await build();
  let formatted = 0;
  async function format(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) await format(path);
      else if (entry.name.endsWith('.md')) {
        const text = await readFile(path, 'utf8'), next = formatMarkdown(text);
        if (next !== text) { formatted++; await writeFile(path, next); }
      }
    }
  }
  await format(join(root, 'content'));
  assert.ok(formatted >= tricky.length, `${formatted} pages formatted`);
  const after = await build();
  assert.deepEqual([...after.keys()].sort(), [...before.keys()].sort());
  for (const [path, html] of before) {
    if (html === after.get(path)) continue;
    let i = 0;
    while (html[i] === after.get(path)[i]) i++;
    assert.fail(`${path} changed:\n  before: ${html.slice(i - 100, i + 100)}\n  after:  ${after.get(path).slice(i - 100, i + 100)}`);
  }
  console.log(`源文件排版：导言区后的空行、行间公式独占一行及缩进、100 列换行（断行位置的优先级、列表与引用的续行、不可断开处）、幂等，以及排版前后构建的页面一致（${before.size} 页）验证通过`);
} finally { await rm(root, { recursive: true, force: true }); }
