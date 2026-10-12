import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readdir, readFile, rm, utimes, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';
import { JSDOM } from 'jsdom';
import { splitTag } from '../scripts/tikz/compiler.mjs';
import { sharedTikzWorker, tikzRenderer } from '../scripts/postbuild/tikz.mjs';
import { createProject, buildProject } from './helpers/project.mjs';

assert.deepEqual(splitTag(String.raw`x \tag{2.1}`), { tex: 'x ', tag: '(2.1)' });
assert.equal(splitTag(String.raw`x \tag*{\text{甲}}`).tag, String.raw`\text{甲}`);
assert.equal(splitTag('x % \\tag{ignored}\n').tag, undefined);
assert.equal(splitTag(String.raw`\text{\tag{inside}}`).tag, undefined);
assert.throws(() => splitTag(String.raw`x \tag{1} \tag{2}`), /one outer/);
assert.throws(() => splitTag(String.raw`x \tag{1`), /Unclosed/);

const root = await createProject('tikz');
try {
  const source = join(root, 'content/wiki/tikz-test');
  await mkdir(source, { recursive: true });
  const gradient = String.raw`\begin{tikzpicture}\shade[left color=blue,right color=white] (0,0) rectangle (1,1);\node at (.5,.5) {中文};\end{tikzpicture}`;
  await writeFile(join(source, 'index.md'), String.raw`---
title: TikZ test
---
普通公式 $x^2$。

$$
\left(\begin{tikzcd}
  \text{群} \arrow[r,"同态",bend left] & \text{环} \\
  \text{商群} \arrow[r,dashed] & \text{商环}
\end{tikzcd}\right) = \begin{tikzcd} X \arrow[r] & Y \end{tikzcd}
$$

行内 $\begin{tikzcd} 群 \arrow[r, "\mathscr{F}"] & \mathbb{1}_{环} \arrow[r] & \mathsf{Ét} \end{tikzcd}$。

` + '```math {@eq:test}\n' + String.raw`\begin{tikzcd} A \arrow[r] & B \end{tikzcd}` + '\n```\n\n引用 @eq:test。\n\n'
    + '```tikz\n' + gradient + '\n```\n\n```tikz {caption="渐变 $x$"}\n' + gradient + '\n```\n\n'
    + '```tikz\n' + String.raw`\begin{tikzpicture}\node[draw,rotate=20,text=red] {\bfseries 对象（𠮷）};\end{tikzpicture}` + '\n```\n\n'
    + '```text\n' + String.raw`\begin{tikzcd} 中文 \end{tikzcd}` + '\n```\n');
  buildProject(root, ['--baseURL', 'https://example.org/subdirectory/']);
  execFileSync(process.execPath, ['scripts/postbuild.mjs'], { cwd: root, stdio: 'pipe' });
  // A full build removes cache files it did not use, unless used within a week (drafts edited online); a
  // build without the flag (a page preview) keeps them.
  const cache = join(root, '.build/tikz-cache');
  const cached = (await readdir(cache)).sort();
  assert.ok(cached.length > 0);
  await writeFile(join(cache, 'stale.json'), '{}');
  const old = new Date(Date.now() - 8 * 24 * 3600 * 1000);
  await utimes(join(cache, 'stale.json'), old, old);
  await writeFile(join(cache, 'recent.json'), '{}');
  buildProject(root, ['--baseURL', 'https://example.org/subdirectory/']);
  execFileSync(process.execPath, ['scripts/postbuild.mjs', '--prune-cache'], { cwd: root, stdio: 'pipe' });
  assert.deepEqual((await readdir(cache)).sort(), [...cached, 'recent.json'].sort(), 'Pruning keeps the diagrams in use and recent ones, and removes the rest');
  const file = join(root, 'public/wiki/tikz-test/index.html');
  const html = await readFile(file, 'utf8');
  const document = new JSDOM(html).window.document;
  assert.equal(document.querySelectorAll('.tikz-source').length, 0);
  assert.equal(document.querySelectorAll('.tikz-rendered').length, 6);
  assert.ok(document.querySelector('.katex'), 'Ordinary maths should retain KaTeX');
  const figure = document.querySelector('figure.content-figure');
  assert.ok(figure?.querySelector('.tikz-rendered') && figure.querySelector('figcaption .katex'), 'TikZ fences take a centred caption with maths');
  assert.equal(document.querySelectorAll('#eq\\:test .tikz-svg').length, 2, 'Equation tag is a separate SVG');
  assert.match(document.querySelector('a[href="#eq%3Atest"]').textContent, /1/);
  assert.ok(document.querySelector('pre code').textContent.includes('中文'), 'Code examples stay literal');
  // 字体中没有的字形由浏览器用页面字体绘制：\mathscr 用 KaTeX_Script，𝟙 用 KaTeX_Main（BananaMath）。
  const glyphs = [...document.querySelectorAll('svg text[font-family^="KaTeX_"]')].map(node => [node.getAttribute('font-family'), node.textContent]);
  assert.deepEqual(glyphs.sort(), [['KaTeX_Main', '𝟙'], ['KaTeX_Script', 'F']]);
  assert.ok(![...document.querySelectorAll('svg text')].some(node => node.textContent.includes('banana-')));
  const cjk = [...document.querySelectorAll('.tikz-cjk')];
  assert.ok(cjk.every(node => !node.textContent.includes('banana-')));
  assert.ok(cjk.some(node => node.textContent.includes('𠮷')), 'Supplementary Han characters survive UTF-8 declarations');
  assert.ok(cjk.some(node => Math.abs(Number(node.getAttribute('font-size')) - 7 / 1.1) < .001), 'Labels use the TeX script size, adjusted to prose');
  assert.ok(cjk.some(node => node.getAttribute('font-weight') === 'bold'), 'CJK font weight follows TeX');
  const pair = cjk.find(node => node.textContent === '商群');
  assert.ok(pair, 'Adjacent CJK characters copy as one word');
  assert.ok(Math.abs(Number(pair.getAttribute('textLength')) - 20 / 1.1) < .001);
  const ids = [...document.querySelectorAll('svg [id]')].map(node => node.id);
  assert.ok(ids.length > 0, 'Gradient exercises SVG IDs');
  assert.equal(new Set(ids).size, ids.length, 'Repeated cached drawings need unique IDs');
  for (const node of document.querySelectorAll('svg *')) for (const attribute of node.attributes) {
    for (const match of attribute.value.matchAll(/url\(#([\w.-]+)\)/g)) assert.ok(document.getElementById(match[1]));
  }
  for (const svg of document.querySelectorAll('.tikz-svg')) {
    assert.match(svg.getAttribute('width'), /em$/);
    assert.match(svg.getAttribute('style'), /vertical-align/);
    const [, , width, height] = svg.getAttribute('viewBox').split(/\s+/).map(Number);
    assert.ok(Math.abs(parseFloat(svg.getAttribute('width')) * 10 - width) < .001,
      'The SVG viewport must match TeX width without introducing unintended font scaling');
    assert.ok(Math.abs(parseFloat(svg.getAttribute('height')) * 10 - height) < .001);
  }
  const fonts = document.querySelector('style[data-tikz-fonts]').textContent;
  assert.match(fonts, /\.\.\/\.\.\/fonts\/tikzjax\//, 'Font URLs work under a site subdirectory');
  assert.match(await readFile(join(root, 'public/fonts/tikzjax/LICENCE'), 'utf8'), /BaKoMa Fonts Licence/);
  execFileSync(process.execPath, ['scripts/postbuild.mjs'], { cwd: root, stdio: 'pipe' });
  assert.equal(await readFile(file, 'utf8'), html, 'Postbuild is idempotent');
  // Pages are finished in parallel workers; how many, and which finished first, must not show.
  const pages = async () => {
    const result = new Map();
    for (const entry of await readdir(join(root, 'public'), { recursive: true, withFileTypes: true })) {
      if (entry.isFile() && entry.name.endsWith('.html') && !join(entry.parentPath, entry.name).includes('/pagefind/')) {
        const path = join(entry.parentPath, entry.name);
        result.set(path, await readFile(path, 'utf8'));
      }
    }
    return result;
  };
  const outputs = [];
  for (const jobs of ['1', '3']) {
    buildProject(root, ['--baseURL', 'https://example.org/subdirectory/']);
    execFileSync(process.execPath, ['scripts/postbuild.mjs', '--jobs', jobs], { cwd: root, stdio: 'pipe' });
    outputs.push(await pages());
  }
  assert.ok(outputs[0].size > 3);
  assert.deepEqual(outputs[1], outputs[0], 'Postbuild output depends on its number of workers');
  assert.equal(outputs[0].get(file), html, 'Diagram IDs depend on the page alone');
  // --cache (serve): pages whose Hugo HTML is unchanged reuse the earlier result, with their fonts and
  // diagrams; an edited page is finished again.
  const pageCache = join(root, '.build/postbuild-cache');
  const cachedBuild = () => {
    buildProject(root, ['--baseURL', 'https://example.org/subdirectory/']);
    return execFileSync(process.execPath, ['scripts/postbuild.mjs', '--cache', pageCache, '--prune-cache'], { cwd: root, encoding: 'utf8' });
  };
  assert.match(cachedBuild(), /\(0 unchanged, from cache\)/);
  // Diagrams of pages taken from cache still count as used: old cache files would otherwise be pruned.
  for (const name of await readdir(cache)) await utimes(join(cache, name), old, old);
  const total = outputs[0].size;
  assert.match(cachedBuild(), new RegExp(`\\((${total}) unchanged, from cache\\)`));
  assert.deepEqual(await pages(), outputs[0], 'Pages from cache are the pages postbuild makes');
  assert.ok((await readdir(join(root, 'public/fonts/tikzjax'))).some(name => name.endsWith('.ttf')), 'Fonts of pages from cache are copied');
  assert.deepEqual((await readdir(cache)).sort(), cached.sort(), 'Diagrams of pages from cache are kept');
  await writeFile(join(source, 'index.md'), (await readFile(join(source, 'index.md'), 'utf8')).replace('普通公式', '修改后的公式'));
  const changed = cachedBuild().match(/\((\d+) unchanged, from cache\)/);
  assert.ok(Number(changed[1]) < total, 'An edited page is finished again');
  const edited = await readFile(file, 'utf8');
  assert.ok(edited.includes('修改后的公式') && !edited.includes('tikz-source'), 'The edited page is finished');
} finally { await rm(root, { recursive: true, force: true }); }

const scratch = await mkdtemp(join(tmpdir(), 'banana-tikz-errors-'));
const renderer = tikzRenderer(scratch);
const escape = value => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const placeholder = (tex, display = true) => `<html><head></head><body><span class="math-rendered tikz-source" data-tex="${escape(tex)}" data-display="${display}"></span></body></html>`;
// DVI text coordinates live inside nested SVG transforms. Compare the final
// glyph position with the formula baseline, rather than its local y value.
function glyphBaseline(node) {
  let x = Number(node.getAttribute('x')), y = Number(node.getAttribute('y'));
  for (let parent = node; parent.localName !== 'svg'; parent = parent.parentElement) {
    const transforms = [...(parent.getAttribute('transform') ?? '').matchAll(/(translate|scale|matrix)\(([^)]+)\)/g)];
    for (const [, kind, args] of transforms.reverse()) {
      const values = args.split(/[ ,]+/).map(Number);
      if (kind === 'translate') { x += values[0]; y += values[1] ?? 0; }
      else if (kind === 'scale') { x *= values[0]; y *= values[1] ?? values[0]; }
      else {
        const [a, b, c, d, e, f] = values;
        [x, y] = [a * x + c * y + e, b * x + d * y + f];
      }
    }
  }
  return y;
}
try {
  await assert.rejects(renderer.render(placeholder(String.raw`\undefinedBananaCommand\begin{tikzcd} A & B \end{tikzcd}`), join(scratch, 'bad.html')), /bad.html.*TikZ 编译失败.*Undefined control sequence/s);
  const good = await renderer.render(placeholder(String.raw`\begin{tikzcd} A \arrow[r] & B \end{tikzcd}`), join(scratch, 'good.html'));
  assert.match(good, /tikz-rendered/, 'A failed compilation does not poison the next drawing');
  // A TeX error is remembered: the same diagram fails at once, also for another renderer.
  const again = tikzRenderer(scratch), start = performance.now();
  await assert.rejects(again.render(placeholder(String.raw`\undefinedBananaCommand\begin{tikzcd} A & B \end{tikzcd}`), join(scratch, 'bad.html')), /Undefined control sequence/);
  assert.ok(performance.now() - start < 100, 'A remembered failure is not compiled again');
  await again.close();
  const word = await renderer.render(placeholder(String.raw`\text{商群}`), join(scratch, 'word.html'));
  assert.ok(Math.abs(parseFloat(new JSDOM(word).window.document.querySelector('svg').getAttribute('width')) * 1.1 - 2) < .001,
    'Adjacent CJK boxes must occupy prose ems without accidental TeX whitespace');
  for (const tex of [
    String.raw`\begin{tikzcd} A \arrow[r,"f",bend left] & A \end{tikzcd}`,
    String.raw`\begin{tikzcd} & A \arrow[r] & A \end{tikzcd}`,
    String.raw`\begin{tikzcd} A & \end{tikzcd}`,
    String.raw`\begin{tikzcd} 中 \arrow[r,"同态"] & 中 \end{tikzcd}`,
    String.raw`\begin{tikzcd} A \end{tikzcd} + \begin{tikzcd} A \end{tikzcd}`,
  ]) {
    const inline = await renderer.render(placeholder(tex, false), join(scratch, 'inline.html'));
    const svg = new JSDOM(inline).window.document.querySelector('svg');
    const [, minY, , height] = svg.getAttribute('viewBox').split(/\s+/).map(Number);
    const depth = -Number(svg.getAttribute('style').match(/vertical-align: ([\d.-]+)em/)[1]) * 10;
    const baseline = minY + height - depth;
    const cells = [...svg.querySelectorAll('text')].filter(node => ['A', '中'].includes(node.textContent));
    assert.ok(cells.length > 0);
    assert.ok(cells.every(node => Math.abs(glyphBaseline(node) - baseline) < .001),
      `Single-row inline cells align to the formula baseline: ${tex}`);
  }
  const multi = String.raw`\begin{tikzcd} A \arrow[d] \\ A \end{tikzcd}`;
  const multiInline = new JSDOM(await renderer.render(placeholder(multi, false), join(scratch, 'multi-inline.html'))).window.document.querySelector('svg');
  const multiDisplay = new JSDOM(await renderer.render(placeholder(multi), join(scratch, 'multi-display.html'))).window.document.querySelector('svg');
  for (const attribute of ['viewBox', 'width', 'height', 'style']) {
    assert.equal(multiInline.getAttribute(attribute), multiDisplay.getAttribute(attribute), 'Multi-row diagrams retain native centring');
  }
} finally { await renderer.close(); }
const limited = tikzRenderer(scratch, { timeout: 750 });
try {
  await assert.rejects(limited.render(placeholder(String.raw`\def\BananaForever{\BananaForever}\BananaForever\begin{tikzcd} A & B \end{tikzcd}`), join(scratch, 'loop.html')), /超过/);
} finally { await limited.close(); }
// A preview's diagrams share a budget: once it is spent, the rest fail rather than wait.
const budgeted = tikzRenderer(scratch, { budget: 750 });
try {
  await assert.rejects(budgeted.render(placeholder(String.raw`\def\BananaForever{\BananaForever}\BananaForever\begin{tikzcd} A & C \end{tikzcd}`), join(scratch, 'budget.html')), /太多或太复杂/);
  await assert.rejects(budgeted.render(placeholder(String.raw`\begin{tikzcd} A & D_{${Date.now()}} \end{tikzcd}`), join(scratch, 'budget.html')), /太多或太复杂/);
} finally { await budgeted.close(); }
// Renderers with keepWorker share one worker, stopped once it has idled that long. The diagrams are new
// each run, so that they are compiled rather than read from the cache.
const run = Date.now().toString(36);
try {
  const first = tikzRenderer(scratch, { keepWorker: 400 });
  await first.render(placeholder(String.raw`\begin{tikzcd} A \arrow[r] & C_{${run}} \end{tikzcd}`), join(scratch, 'shared.html'));
  const worker = sharedTikzWorker();
  assert.ok(worker);
  await first.close();
  const second = tikzRenderer(scratch, { keepWorker: 400 });
  await second.render(placeholder(String.raw`\begin{tikzcd} A \arrow[d] \\ C_{${run}} \end{tikzcd}`), join(scratch, 'shared.html'));
  assert.equal(sharedTikzWorker(), worker, 'The next renderer reuses the worker');
  await second.close();
  await new Promise(resolve => setTimeout(resolve, 700));
  assert.equal(sharedTikzWorker(), undefined, 'An idle shared worker stops');
} finally { await rm(scratch, { recursive: true, force: true }); }
console.log('TikZ 构建、中文与字号、括号和多图、编号引用、字体、重复 SVG、错误恢复、失败记忆、编译超时、共享编译进程与缓存清理验证通过');
