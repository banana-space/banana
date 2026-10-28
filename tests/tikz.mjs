import assert from 'node:assert/strict';
import { mkdir, readdir, readFile, rm, utimes, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { JSDOM } from 'jsdom';
import { createProject, buildProject } from './helpers/project.mjs';

// The site's diagrams in a build (bananamark-tikz, through scripts/shared/diagrams.mjs); compiling itself is tested
// in packages/bananamark-tikz/test/tikz.mjs.
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
  // A full build removes cache files it did not use, unless used within a week (drafts edited online); a
  // build without the flag (a page preview) keeps them.
  const cache = join(root, '.build/tikz-cache');
  const cached = (await readdir(cache)).sort();
  assert.ok(cached.length > 0);
  await writeFile(join(cache, 'stale.json'), '{}');
  const old = new Date(Date.now() - 8 * 24 * 3600 * 1000);
  await utimes(join(cache, 'stale.json'), old, old);
  await writeFile(join(cache, 'recent.json'), '{}');
  buildProject(root, ['--baseURL', 'https://example.org/subdirectory/', '--prune-cache']);
  assert.deepEqual((await readdir(cache)).sort(), [...cached, 'recent.json'].sort(), 'Pruning keeps the diagrams in use and recent ones, and removes the rest');
  const file = join(root, 'public/wiki/tikz-test/index.html');
  const html = await readFile(file, 'utf8');
  const document = new JSDOM(html).window.document;
  assert.equal(document.querySelectorAll('.bm-tikz-source').length, 0);
  assert.equal(document.querySelectorAll('.bm-tikz-rendered').length, 6);
  assert.ok(document.querySelector('.katex'), 'Ordinary maths should retain KaTeX');
  const figure = document.querySelector('figure.bm-content-figure');
  assert.ok(figure?.querySelector('.bm-tikz-rendered') && figure.querySelector('figcaption .katex'), 'TikZ fences take a centred caption with maths');
  assert.equal(document.querySelectorAll('#eq\\:test .bm-tikz-svg').length, 2, 'Equation tag is a separate SVG');
  assert.match(document.querySelector('a[href="#eq:test"]').textContent, /1/);
  assert.ok(document.querySelector('pre code').textContent.includes('中文'), 'Code examples stay literal');
  // 字体中没有的字形由浏览器用页面字体绘制：\mathscr 用 KaTeX_Script，𝟙 用 KaTeX_Main（BananaMath）。
  const glyphs = [...document.querySelectorAll('svg text[font-family^="KaTeX_"]')].map(node => [node.getAttribute('font-family'), node.textContent]);
  assert.deepEqual(glyphs.sort(), [['KaTeX_Main', '𝟙'], ['KaTeX_Script', 'F']]);
  assert.ok(![...document.querySelectorAll('svg text')].some(node => node.textContent.includes('banana-')));
  const cjk = [...document.querySelectorAll('.bm-tikz-cjk')];
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
  for (const svg of document.querySelectorAll('.bm-tikz-svg')) {
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
    buildProject(root, ['--baseURL', 'https://example.org/subdirectory/', '--jobs', jobs]);
    outputs.push(await pages());
  }
  assert.ok(outputs[0].size > 3);
  assert.deepEqual(outputs[1], outputs[0], 'The pages depend on the number of workers');
  assert.equal(outputs[0].get(file), html, 'Diagram IDs depend on the page alone');
} finally { await rm(root, { recursive: true, force: true }); }

console.log('TikZ 构建：中文与字号、括号和多图、编号引用、字体（子目录中的地址）、重复 SVG 的 ID、与线程数无关、缓存清理验证通过');
