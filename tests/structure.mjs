import { createProject, buildProject } from './helpers/project.mjs';
import assert from 'node:assert/strict';
import { parse, stringify } from 'yaml';
import { JSDOM } from 'jsdom';
import { mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';

import { fixture, starFixture } from '../packages/bananamark/test/fixtures.mjs';

const root = await createProject('structure');
try {
  const directory = join(root, 'content/wiki/structure-test');
  await mkdir(directory, { recursive: true });
  const original = `---\ntitle: 编号测试\n---\n${fixture}`;
  await writeFile(join(directory, 'index.md'), original);
  const starDirectory = join(root, 'content/wiki/star-test');
  await mkdir(starDirectory, { recursive: true });
  await writeFile(join(starDirectory, 'index.md'), `---\ntitle: 星号和列表引用\n---\n${starFixture}`);
  const customDirectory = join(root, 'content/wiki/custom-test');
  await mkdir(customDirectory, { recursive: true });
  await writeFile(join(customDirectory, 'index.md'), '---\ntitle: 自定义名称\n---\n::: theorem\n甲\n:::\n\n::: definition (条件) [同分布] {@cond}\n乙\n:::\n\n::: remark* (异议) {@objection}\n丙\n:::\n\n见 @cond 与 @objection。\n');
  const labelledDirectory = join(root, 'content/wiki/labelled-test');
  await mkdir(labelledDirectory, { recursive: true });
  await writeFile(join(labelledDirectory, 'index.md'), `---\ntitle: 标签列表\n---\n设\n\n(a) {@la} 甲\n(b) 乙\n\n    第二段\n\n($\\ast$) 星\n\n1. 外\n\n   (i) {@li} 内\n\n由 @la、@li 与 @-la。\n\n(3) (4)\n        嵌套\n\n见 @lb。\n\nB4)\n\n    1. {@lb} 设 $x~y$，\n       \\[\n       E(x) = x~y\n       \\]\n\n    2. 乙 $z$\n`);
  const build = () => buildProject(root);
  build();
  const html = await readFile(join(root, 'public/wiki/structure-test/index.html'), 'utf8');
  assert.match(html, /href="#thm:key">定理 1\.2<\/a>/);
  assert.match(html, /href="#thm:key">这个<strong>定理<\/strong><\/a>/);
  assert.match(html, /id="eq:one" class="bm-math-rendered bm-math-display"/);
  assert.match(html, /\\tag\{1\.1\}/);
  assert.match(html, /<h2 id="第一节"><a class="bm-heading-link"[^>]*>§<\/a><span class="bm-section-number">1<\/span> 第一节/);
  assert.match(html, /<h3 id="小节-a"><a class="bm-heading-link"[^>]*>§<\/a>小节 <span class="bm-math-rendered"/);
  assert.match(html, /href="#%E7%AC%AC%E4%BA%8C%E8%8A%82"><span class="toc-section-number directory-number">2<\/span> <span class="toc-item-title directory-item-title">第二节<\/span><\/a>/);
  assert.match(html, /bm-envtitle">定理 1\.2（<strong>主要结论<\/strong>）/);
  for (const group of ['definition', 'theorem', 'example', 'remark', 'proof']) assert.ok(html.includes(`bm-envgroup-${group}`));
  assert.match(html, /bm-env-theorem[\s\S]*<\/div>\s*<\/div>\s*<div class="bm-env bm-envgroup-proof/);
  assert.match(html, /<span class="bm-envtitle">简证\u3000<\/span><div class="bm-envcontent">/);
  assert.equal((html.match(/<div(?:\s|>)/g) ?? []).length, (html.match(/<\/div>/g) ?? []).length);
  assert.doesNotMatch(html, /raw HTML omitted|@@node:|::: theorem/);
  assert.equal(await readFile(join(directory, 'index.md'), 'utf8'), original);
  const customHtml = await readFile(join(root, 'public/wiki/custom-test/index.html'), 'utf8');
  assert.match(customHtml, /bm-envgroup-definition bm-env-definition" id="cond">\s*<p class="bm-envtitle">条件 2（同分布）<\/p>/);
  assert.match(customHtml, /bm-envgroup-remark bm-env-remark" id="objection">\s*<p class="bm-envtitle">异议<\/p>/);
  assert.match(customHtml, /href="#cond">条件 2<\/a>/);
  assert.match(customHtml, /href="#objection">异议<\/a>/);
  const starHtml = await readFile(join(root, 'public/wiki/star-test/index.html'), 'utf8');
  assert.match(starHtml, /href="#intro">定理 1<\/a>/);
  assert.match(starHtml, /href="#named">定理（<strong>存在性<\/strong>与 <span class="bm-math-rendered"/);
  assert.match(starHtml, /href="#plain">引理<\/a>/);
  assert.match(starHtml, /<h2 id="前言"><a class="bm-heading-link"[^>]*>§<\/a>前言<\/h2>/);
  assert.match(starHtml, /<h2 id="附录"><a class="bm-heading-link"[^>]*>§<\/a>附录<\/h2>/);
  assert.match(starHtml, /<h2 id="字面星号"><a class="bm-heading-link"[^>]*>§<\/a><span class="bm-section-number">2<\/span> 字面星号 \*/);
  const starToc = starHtml.match(/<nav id="TableOfContents"[^>]*>([\s\S]*?)<\/nav>/)[1];
  assert.ok(starToc.includes('>前言</span></a>'));
  assert.ok(starToc.includes('<span class="toc-section-number directory-number">1</span> <span class="toc-item-title directory-item-title">第一节</span></a>'));
  assert.ok(starToc.includes('>插入说明</span></a>'));
  assert.ok(starToc.includes('>附录</span></a>'));
  assert.ok(starToc.includes('<span class="toc-section-number directory-number">2</span> <span class="toc-item-title directory-item-title">字面星号 *</span></a>'));
  // Compare references with the actual ol starts and sibling positions emitted by Hugo.
  assert.match(starHtml, /<ol start="3">\s*<li>[\s\S]*?id="a"[\s\S]*?<\/li>\s*<li>[\s\S]*?id="b"/);
  assert.match(starHtml, /<ol start="5">\s*<li>[\s\S]*?id="child"[\s\S]*?<ol>\s*<li>[\s\S]*?id="grandchild"/);
  assert.match(starHtml, /<blockquote>\s*<ol start="7">[\s\S]*?id="quoted"/);
  assert.match(starHtml, /<ol start="0">\s*<li>[\s\S]*?id="zero"/);
  for (const [id, number] of [['a', '3'], ['b', '4'], ['child', '4.5'], ['grandchild', '4.5.1'], ['reset', '1'], ['quoted', '8'], ['zero', '0']]) {
    assert.ok(starHtml.includes(`href="#${id}">${number}</a>`), `列表引用 ${id}: ${starHtml.match(new RegExp(`href="#${id}"[^>]*>[^<]*`))?.[0]}`);
    assert.ok(starHtml.includes(`id="${id}" class="bm-item-target"`));
  }
  assert.ok(starHtml.includes('href="#b">第二个条件</a>'));
  assert.ok(starHtml.includes('href="#child">子条件</a>'));
  assert.match(starHtml, /id="formula-before"[\s\S]*?class="bm-math-rendered bm-math-display"[\s\S]*?<\/li>\s*<li>[\s\S]*?id="formula-after"/);
  assert.ok(starHtml.includes('href="#formula-after">2</a>'));
  for (const id of ['block-inner', 'block-after']) {
    assert.ok(starHtml.includes(`href="#${id}">1</a>`));
    assert.match(starHtml, new RegExp(`<ol>\\s*<li>[\\s\\S]*?id="${id}"`));
  }
  assert.doesNotMatch(starHtml, /raw HTML omitted|reference:\?|\{@|::: theorem|定理 0\.1|\\tag\{0\.1\}/);
  const labelledHtml = await readFile(join(root, 'public/wiki/labelled-test/index.html'), 'utf8');
  assert.match(labelledHtml, /<ol start="0">\s*<li>\s*<p><span class="bm-item-label" style="--bm-outer: 0"><span>\(a\)<\/span><\/span><span id="la" class="bm-item-target"><\/span>甲<\/p>\s*<\/li>\s*<li>\s*<p><span class="bm-item-label" style="--bm-outer: 0"><span>\(b\)<\/span><\/span>乙<\/p>\s*<p>第二段<\/p>/);
  assert.match(labelledHtml, /<span class="bm-item-label" style="--bm-outer: 0"><span>\(<span class="bm-math-rendered"[^>]*data-tex="\\ast"/);
  assert.match(labelledHtml, /<ol>\s*<li>\s*<p>外<\/p>\s*<ol start="0">\s*<li><span class="bm-item-label" style="--bm-outer: 0"><span>\(i\)<\/span><\/span>/);
  assert.match(labelledHtml, /由 <a href="#la">\(a\)<\/a>、<a href="#li">1 \(i\)<\/a> 与 <a href="#la">\(a\)<\/a>．/);
  assert.match(labelledHtml, /<ol start="0">\s*<li>\s*<ol start="0">\s*<li><span class="bm-item-label bm-item-label-outer" style="--bm-outer: 1"><span>\(3\)<\/span><\/span><span class="bm-item-label" style="--bm-outer: 0"><span>\(4\)<\/span><\/span>嵌套/);
  // A sub-list under a label alone on its line, after a blank line: its formulas rendered (not raw TeX, ~ not
  // strikethrough).
  assert.ok(labelledHtml.includes('见 <a href="#lb">B4 1</a>．'));
  assert.match(labelledHtml, /<li>\s*<span class="bm-item-label bm-item-label-block" style="--bm-outer: 0"><span>B4\)<\/span><\/span>\s*<ol>\s*<li>[\s\S]*?设 <span class="bm-math-rendered"[^>]*data-tex="x~y"[\s\S]*?class="bm-math-rendered bm-math-display"[\s\S]*?乙 <span class="bm-math-rendered"[^>]*data-tex="z"/);
  assert.doesNotMatch(labelledHtml, /<del>|\\\[/);
  const singular = await readFile(join(root, 'public/wiki/奇异上同调/index.html'), 'utf8');
  assert.match(singular, /bm-envtitle">定义 1\.1（奇异上链复形）/);
  assert.match(singular, /bm-envtitle">定义 1\.2（奇异闭上链, 奇异边界上链, 奇异上同调）/);
  assert.doesNotMatch(singular, /bm-envtitle">[^<]*\d\s+（/);
  assert.match(singular, /href="#[^"]+">定理 3\.7<\/a>/);
  assert.match(singular, /href="#[^"]+">定义 3\.5<\/a>/);
  assert.match(singular, /id="eq:余边界"/);
  assert.equal((singular.match(/bm-env-proof/g) ?? []).length, 2);
  assert.equal((singular.match(/class="bm-envtitle"/g) ?? []).length, 20);
  assert.doesNotMatch(singular, /\\(?:ref|label|cite)\{|raw HTML omitted|\{\{主条目/);
  const ids = [...singular.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(ids.length, new Set(ids).size);
  for (const match of singular.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(decodeURIComponent(match[1])), `缺失锚点：${match[1]}`);
  const cssPath = html.match(/href="([^"]*\/css\/site[^"]*\.css)"/)[1];
  const css = await readFile(join(root, 'public', cssPath), 'utf8');
  // Verify the four accent groups without freezing the author's chosen shades.
  const accents = ['definition', 'theorem', 'example', 'remark'].map(group => {
    const match = css.match(new RegExp(`\\.bm-envgroup-${group}\\s*\\{[^}]*--theorem-accent:\\s*(#[0-9a-f]+)`));
    assert.ok(match, `缺少颜色组：${group}`);
    return match[1];
  });
  assert.equal(new Set(accents).size, 4);
  assert.match(css, /border-left:\s*\d+px solid var\(--theorem-accent\)/);
  assert.match(css, /color:\s*var\(--theorem-accent\)/);
  // Environments are named in data/theorems.yaml: the title and the references follow (the rest of the
  // reference text is bananamark's, in its locale).
  const theoremsPath = join(root, 'data/theorems.yaml');
  const theorems = await readFile(theoremsPath, 'utf8');
  const renamed = parse(theorems);
  renamed.theorem.name = 'Theorem';
  await writeFile(theoremsPath, stringify(renamed));
  build();
  const translated = await readFile(join(root, 'public/wiki/structure-test/index.html'), 'utf8');
  assert.match(translated, /href="#thm:key">Theorem 1\.2<\/a>/);
  assert.match(translated, /bm-envtitle">Theorem 1\.2（<strong>主要结论<\/strong>）/);
  assert.match(translated, /href="#%E7%AC%AC%E4%BA%8C%E8%8A%82">第 2 节<\/a>/);
  assert.match(translated, /href="#thm:key">这个<strong>定理<\/strong><\/a>/);
  const translatedStars = await readFile(join(root, 'public/wiki/star-test/index.html'), 'utf8');
  assert.match(translatedStars, /href="#named">Theorem（<strong>存在性<\/strong>/);
  await writeFile(theoremsPath, theorems);
  // Moving a label with its item updates every reference while retaining the anchor.
  await writeFile(join(starDirectory, 'index.md'), '---\ntitle: 星号和列表引用\n---\n@a @b\n\n1. {@b} B\n1. {@a} A\n');
  build();
  const reordered = await readFile(join(root, 'public/wiki/star-test/index.html'), 'utf8');
  assert.ok(reordered.includes('href="#a">2</a>'));
  assert.ok(reordered.includes('href="#b">1</a>'));
  // Numbering must not alter IDs derived from the heading text.
  await writeFile(join(directory, 'index.md'), '---\ntitle: 编号测试\n---\n## Stable\n');
  build();
  assert.match(await readFile(join(root, 'public/wiki/structure-test/index.html'), 'utf8'), /<h2 id="stable"><a class="bm-heading-link"[^>]*>§<\/a><span class="bm-section-number">1<\/span>/);
  await writeFile(join(directory, 'index.md'), '---\ntitle: 编号测试\n---\n## Inserted\n\n## Stable\n');
  build();
  assert.match(await readFile(join(root, 'public/wiki/structure-test/index.html'), 'utf8'), /<h2 id="stable"><a class="bm-heading-link"[^>]*>§<\/a><span class="bm-section-number">2<\/span>/);
  // Detect collisions between explicit environment labels and automatic IDs.
  await writeFile(join(directory, 'index.md'), '---\ntitle: 编号测试\n---\n## same\n\n::: theorem {@same}\n正文\n:::');
  assert.throws(build, /引用标签与标题自动锚点重复/);
  await writeFile(join(directory, 'index.md'), '---\ntitle: 编号测试\n---\n## same\n\n### 名称 {@same}\n');
  build();
  assert.match(await readFile(join(root, 'public/wiki/structure-test/index.html'), 'utf8'), /<h3 id="名称">/);
  // Labels never override generated IDs, even for forward/custom links and duplicate titles.
  await writeFile(join(directory, 'index.md'), '---\ntitle: 编号测试\n---\n@first [后一个](@second) @minor\n\n## 同名 {@first}\n\n## 同名 {@second}\n\n### 子节 {@minor}\n');
  build();
  const repeated = await readFile(join(root, 'public/wiki/structure-test/index.html'), 'utf8');
  const repeatedIds = [...repeated.matchAll(/<h[23] id="([^"]+)"/g)].map(match => match[1]);
  assert.deepEqual(repeatedIds, ['同名', '同名-1', '子节']);
  for (const [id, caption] of [['同名', '第 1 节'], ['同名-1', '后一个'], ['子节', '子节']]) {
    assert.ok(repeated.includes(`href="#${encodeURIComponent(id)}">${caption}</a>`));
  }
  // Native headings in containers must not shift a later section reference.
  await writeFile(join(directory, 'index.md'), '---\ntitle: 编号测试\n---\n@last [引用中的标题](@quoted)\n\n## 开头\n\n> ### 引用标题 {@quoted}\n\n- #### 列表标题\n\n## 结尾 {@last}\n');
  build();
  const containers = await readFile(join(root, 'public/wiki/structure-test/index.html'), 'utf8');
  assert.ok(containers.includes(`href="#${encodeURIComponent('结尾')}">第 2 节</a>`));
  assert.ok(containers.includes(`href="#${encodeURIComponent('引用标题')}">引用中的标题</a>`));
  assert.match(containers, /<blockquote>\s*<h3 id="引用标题">/);
  assert.match(containers, /<li>\s*<h4 id="列表标题">/);
  // Test normalization, suffix collisions, all heading styles and final Hugo links together.
  const normalizedBody = String.raw`@accent [含公式的标题](@math) @tensor @setext

## Über {@accent .accent-heading}

## Über

## uber-1

## Über

## Poincaré–Lefschetz $\infty$-范畴 {@math}

### $A \otimes B$ {@tensor}

Ångström $\varnothing$ {@setext}
------------------------------

## !!!

## ???
`;
  await writeFile(join(directory, 'index.md'), `---\ntitle: 编号测试\n---\n${normalizedBody}`);
  build();
  const normalized = await readFile(join(root, 'public/wiki/structure-test/index.html'), 'utf8');
  const normalizedIds = [...normalized.matchAll(/<h[23] id="([^"]+)"/g)].map(match => match[1]);
  assert.deepEqual(normalizedIds, ['uber', 'uber-1', 'uber-1-1', 'uber-2', 'poincare-lefschetz-∞-范畴', 'a⊗b', 'angstrom-∅', 'heading', 'heading-1']);
  assert.match(normalized, /<h2 id="uber" class="accent-heading">/);
  for (const [id, caption] of [['uber', '第 1 节'], ['poincare-lefschetz-∞-范畴', '含公式的标题']]) {
    assert.ok(normalized.includes(`href="#${encodeURIComponent(id)}">${caption}</a>`));
  }
  // Links only: the inline logo's <use href="#…"> points into its own SVG.
  for (const match of normalized.matchAll(/<a [^>]*href="#([^"]+)"/g)) {
    assert.ok(normalizedIds.includes(decodeURIComponent(match[1])), `缺失标题锚点：${match[1]}`);
  }
  // Automatic directory generation, placement, and nesting.
  const directoryBody = '导言在目录之前。\n\n## 第一节\n\n### 小节\n\n#### 深层标题\n\n## 第二节\n';
  const directoryPage = metadata => `---\ntitle: 自动目录\n${metadata}---\n${directoryBody}`;
  await writeFile(join(directory, 'index.md'), directoryPage(''));
  build();
  const automatic = await readFile(join(root, 'public/wiki/structure-test/index.html'), 'utf8');
  const automaticToc = automatic.match(/<nav id="TableOfContents"[^>]*>([\s\S]*?)<\/nav>/)[1];
  assert.equal((automaticToc.match(/<a /g) ?? []).length, 3);
  assert.match(automaticToc, /toc-level-2[\s\S]*<ul class="toc-list directory-tree"><li class="toc-level-3"/);
  assert.doesNotMatch(automaticToc, /深层标题/);
  const directoryDom = new JSDOM(automaticToc).window.document;
  const branch = directoryDom.querySelector('.toc-branch');
  assert.ok(branch.hasAttribute('open'), '本页目录子节默认展开');
  assert.equal(branch.querySelector('summary > a .toc-item-title').textContent, '第一节');
  assert.equal(branch.querySelector(':scope > ul a .toc-item-title').textContent, '小节');
  assert.ok(branch.querySelector('summary > .directory-chevron'), '展开控制与标题链接应分开');
  assert.equal(directoryDom.querySelectorAll('a a').length, 0);
  assert.ok(automatic.indexOf('导言在目录之前。') < automatic.indexOf('class="toc-shell"'));
  assert.ok(automatic.indexOf('class="toc-shell"') < automatic.indexOf('<h2 id="第一节"'));
  assert.match(automatic, /class="header-toc-button"/);
  for (const body of [directoryPage('toc: false\n'), '---\ntitle: 短页\n---\n## 唯一标题\n正文。\n', '---\ntitle: 无标题\n---\n正文。\n']) {
    await writeFile(join(directory, 'index.md'), body);
    build();
    const hidden = await readFile(join(root, 'public/wiki/structure-test/index.html'), 'utf8');
    assert.doesNotMatch(hidden, /id="TableOfContents"|class="header-toc-button"/);
  }
  for (const [body, message] of [['> # 引用块中的一级标题', /不能使用一级标题/], ['- # 列表中的一级标题', /不能使用一级标题/], ['> ## 引用块中的二级标题', /二级节标题必须位于正文层级/]]) {
    await writeFile(join(directory, 'index.md'), `---\ntitle: 编号测试\n---\n${body}\n`);
    assert.throws(build, message);
  }
  await writeFile(join(directory, 'index.md'), '---\ntitle: 编号测试\n---\n@missing\n');
  assert.throws(build, /content\/wiki\/structure-test\/index.md:4: 引用标签不存在/);
  console.log('节与统一环境编号、首节前整数编号、星号语法、嵌套列表引用与重排、独立证明、i18n、自动公式、错误定位、锚点稳定性及完整 KaTeX 验证通过');
} finally { await rm(root, { recursive: true, force: true }); }
