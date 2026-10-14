import assert from 'node:assert/strict';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { parse, stringify } from 'yaml';
import { JSDOM } from 'jsdom';
import { createProject, buildProject } from './helpers/project.mjs';
import { numbering, defaultNumbering, pageNumbering } from '../scripts/prebuild/numbering.mjs';
import { characterCount } from '../scripts/prebuild/collections.mjs';

const root = await createProject('collections');
const write = async (file, text) => { await mkdir(join(root, file, '..'), { recursive: true }); await writeFile(join(root, file), text); };
const source = (title, body, extra = '') => `---\ntitle: ${title}\n${extra}---\n${body}\n`;
const generated = async file => parse((await readFile(join(root, '.build/content', file), 'utf8')).split('---\n')[1]);
const html = file => readFile(join(root, 'public', file, 'index.html'), 'utf8');
const config = {
  title: '测试讲义',
  authors: ['甲', '乙'],
  description: '测试用的 $\\infty$ 讲义。',
  referenceFormat: { 1: '第 {number} 章', 2: '第 {number} 节', default: '{number}' },
  numbering: { headings: { depth: 2 } },
  contents: [
    { page: 'first', children: [{ page: 'one' }, { page: 'books/test/first/two' }] },
    { page: 'second' },
    { page: 'appendix', number: 'A' },
    { page: 'draft', children: [{ page: 'hidden' }] },
  ],
};
const marker = 'content/books/test/collection.yaml';
const bibliography = key => `\n\`\`\`bibliography\n${key}: {type: book, author: 'Alice Smith', title: Source, year: 2020}\n\`\`\`\n`;
try {
  await rm(join(root, 'content/books'), { recursive: true, force: true });
  await rm(join(root, 'content/help'), { recursive: true, force: true });
  await write(marker, stringify(config));
  await write('content/books/test/first/one/index.md', source('第一小节', `{@sec:one}\n\n::: theorem {@thm:one}\n第一条。\n:::\n\n## 正文节 {@sec:body}\n\n::: theorem {@thm:body}\n第二条。\n:::\n\n### 子标题 {@sec:sub}\n\n#### 更深标题\n\n参见 @thm:two、@sec:two、@sec:body 、@chap:second 和 @book:two。\n\n[[奇异上同调]]\n${bibliography('book:one')}`, 'tocDepth: 3\n'));
  await write('content/books/test/first/two/index.md', source('第二小节', `{@sec:two}\n\n::: theorem {@thm:two}\n第三条。\n:::\n\n@thm:one 与 @book:one。${bibliography('book:two')}`, 'slug: custom\n'));
  await write('content/books/test/second/index.md', source('第二章', '{@chap:second}\n\n## 自定义 {@sec:custom number="7"}\n\n## 接续\n\n## 不编号*\n\n::: theorem\n保持编号。\n:::\n'));
  await write('content/books/test/appendix/index.md', source('附录', '## 补充 {@sec:letter number="B"}\n\n## 自动\n'));
  await write('content/books/test/draft/_index.md', source('草稿章', '', 'draft: true\n'));
  await write('content/books/test/draft/hidden/index.md', source('隐藏子页', '{@sec:hidden}\n\n@unresolved-in-hidden-page'));
  await write('content/projects/manual/collection.yaml', 'title: 项目指南\nnumbering:\n  pages: false\n  headings: false\ncontents:\n  - page: start\n');
  await write('content/projects/manual/start/index.md', source('$\\infty$ 指南', '{@guide:start}\n\n参见 @guide:start。[[奇异上同调]]\n\n::: theorem {@thm:start}\n指南定理。\n:::\n'));
  await write('content/about/_index.md', source('普通页面', '{@page:about}\n\n# 自有标题\n\n## 第一节 {@sec:about}\n\n::: theorem {@thm:about}\n正文。\n:::\n\n@sec:about 与 @thm:about，[[奇异上同调]]。'));
  await write('content/books/plain/_index.md', source('普通附页', '## 正文节 {@sec:plain}\n\n@sec:plain 与 [[奇异上同调]]。'));
  buildProject(root, ['--baseURL', 'https://example.org/sub/']);
  const rootMeta = await generated('books/test/_index.md');
  assert.equal(rootMeta.title, '测试讲义');
  assert.equal(rootMeta.gitLastmod, undefined);
  // Card fields from collection.yaml, and the generated page count (the draft chapter is not counted).
  assert.deepEqual([rootMeta.description, rootMeta.collectionAuthors, rootMeta.collectionPages], ['测试用的 ∞ 讲义。', ['甲', '乙'], 5]);
  assert.ok(rootMeta.collectionCharacters > 0);
  const items = new JSDOM(await html('books')).window.document.querySelectorAll('.book-item');
  assert.equal(items.length, 1);
  assert.equal(items[0].querySelector('.book-item-title a').textContent, '测试讲义');
  assert.equal(items[0].querySelectorAll('.book-item-description .katex').length, 1);
  assert.equal(items[0].querySelector('.book-item-meta').textContent, '甲、乙 · 5 个页面 · 1 千字');
  // 字数: CJK characters and punctuation, Western words and numbers, one per inline formula; not code, display math or markup.
  assert.equal(characterCount('设 $X$ 是 Galois 理论的空间。'), 10);
  assert.equal(characterCount('Hello world 2024'), 3);
  assert.equal(characterCount('```bibliography\na: {title: 很多字}\n```\n$$x^2$$\n\\begin{align*}\na &= b\n\\end{align*}\n两字'), 2);
  assert.equal(characterCount('::: theorem {@thm:a}\n定理\n:::\n[链接](https://example.org) <span>字</span>'), 5);
  assert.equal((await generated('books/test/first/_index.md')).title, 'first');
  assert.equal((await generated('books/test/first/one/index.md')).collectionNumber, '1.1');
  const one = await html('books/test/first/one');
  assert.match(one, /theorem-title">定理 1\.1\.1/); // Missing heading zero removed.
  assert.match(one, /theorem-title">定理 1\.1\.1\.1/);
  assert.match(one, /section-number">1\.1\.1\.1/);
  assert.match(one, /href="\/sub\/books\/test\/first\/custom\/#thm%3Atwo"[^>]*>定理 1\.2\.1/);
  assert.match(one, /href="\/sub\/books\/test\/first\/custom\/#page-title"[^>]*>第 1\.2 节/);
  assert.match(one, /href="\/sub\/wiki\/%E5%A5%87%E5%BC%82%E4%B8%8A%E5%90%8C%E8%B0%83\/" class="wiki-link"/);
  assert.match(one, /Smith 2020b/);
  assert.match(await html('books/test/first/custom'), /Smith 2020a/);
  // Pages inside a collection name it in <title>; its home page does not repeat it.
  assert.match(await html('books/test/second'), /<title>[^<]* - 测试讲义 - 香蕉空间<\/title>/);
  assert.match(await html('books/test'), /<title>测试讲义 - 香蕉空间<\/title>/);
  assert.match(await html('books/test/second'), /section-number">2\.7/);
  assert.match(await html('books/test/second'), /section-number">2\.8/);
  assert.match(await html('books/test/appendix'), /section-number">A\.B/);
  assert.match(await html('books/test/appendix'), /section-number">A\.1/);
  assert.doesNotMatch(await html('books/test'), /草稿章|隐藏子页/);
  assert.match(await html('books'), /测试讲义/);
  assert.doesNotMatch(await html('books'), /项目指南|第一小节/);
  assert.doesNotMatch(await html('wiki'), /测试讲义|普通页面/);
  assert.doesNotMatch(await html('categories'), /测试讲义|项目指南/);
  assert.match(await html('books/plain'), /href="#%E6%AD%A3%E6%96%87%E8%8A%82">第 1 节/);
  assert.doesNotMatch(await html('books/plain'), /article-item/);
  const about = await html('about');
  assert.match(about, /<h1 id="自有标题">/);
  assert.match(about, /theorem-title">定理 1\.1/);
  assert.match(about, /href="#%E7%AC%AC%E4%B8%80%E8%8A%82">第 1 节/);
  assert.match(await html('projects/manual/start'), /theorem-title">定理 1/);
  assert.equal((await generated('projects/manual/_index.md')).collectionKind, 'guide');
  assert.match(await html('projects/manual/start'), /href="#page-title"><span class="math-rendered" data-tex="\\infty"/);
  assert.match(one, /#page-title"[^>]*>第 2 章/);
  assert.match(one, /href="#%E6%AD%A3%E6%96%87%E8%8A%82"[^>]*>1\.1\.1/); // Unspecified depth uses default.
  const overview = await html('books/test');
  assert.match(overview, /class="collection-children"/);
  assert.equal(new JSDOM(overview).window.document.querySelector('.collection-children .collection-tree-title').textContent.trim(), '章节目录');
  assert.doesNotMatch(overview, /class="collection-navigation"/);
  assert.doesNotMatch(overview, /class="collection-sidebar"|id="collection-drawer"|collection-has-sidebar/);
  assert.match(await html('books/test/first'), /class="collection-sidebar"/); // Only the collection root is deduplicated.
  assert.match(one, /class="collection-chevron directory-chevron"/);
  assert.match(one, /class="collection-item directory-item is-numbered"/);
  assert.match(one, /class="collection-item-title directory-item-title"/);
  assert.match(one, /id="collection-drawer"/);
  assert.match(one, /class="collection-sidebar"/);
  assert.match(one, /id="toc-label">目录/);
  assert.match(one, /toc-level-4/);
  assert.match(one, /collection-tree-title[\s\S]*测试讲义/);
  assert.match(one, /rel="prev"/);
  assert.match(one, /rel="next"/);
  await assert.rejects(readFile(join(root, '.build/content/books/test/collection.yaml')), /ENOENT/);

  // Exercise the real drawer markup and script, including background restoration.
  const dom = new JSDOM(one, { runScripts: 'outside-only', pretendToBeVisual: true });
  dom.window.matchMedia = query => ({ matches: query.includes('max-width'), addEventListener() {} });
  dom.window.eval(await readFile(join(root, 'static/js/collections.js'), 'utf8'));
  const drawer = dom.window.document.getElementById('collection-drawer');
  drawer.open = true;
  drawer.dispatchEvent(new dom.window.Event('toggle'));
  assert.equal(drawer.querySelector('.collection-drawer-panel').getAttribute('role'), 'dialog');
  assert.equal(dom.window.document.querySelector('main').inert, true);
  assert.ok(dom.window.document.body.classList.contains('collection-drawer-open'));
  dom.window.document.dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: 'Escape' }));
  assert.equal(drawer.open, false);
  assert.equal(dom.window.document.querySelector('main').inert, undefined);
  assert.ok(!dom.window.document.body.classList.contains('collection-drawer-open'));
  await new Promise(resolve => setTimeout(resolve, 20));
  dom.window.close();

  // Absolute scopes persist across files, while relative scopes retain page depth.
  const counters = new Map();
  const absolute = numbering({ theorems: { absoluteDepth: 1 } }, defaultNumbering);
  const a = pageNumbering({ key: 'a', vector: ['2'] }, absolute, counters);
  const b = pageNumbering({ key: 'b', vector: ['2', '3'] }, absolute, counters);
  assert.equal(a.object('theorems'), '2.1');
  assert.equal(b.object('theorems'), '2.2');
  b.heading(2, false, undefined, 'b');
  assert.equal(b.object('theorems'), '2.3');
  const zeroes = pageNumbering({ key: 'z', vector: ['2', '3'] }, numbering({ theorems: { depth: 2, removeZeroes: false } }, defaultNumbering));
  assert.equal(zeroes.object('theorems'), '2.3.0.0.1');
  const prefix = pageNumbering({ key: 'p', vector: ['2', '3'] }, numbering({ theorems: { depth: 1, prefix: 'T' } }, defaultNumbering));
  assert.equal(prefix.object('theorems'), 'T.1');
  assert.throws(() => numbering({ theorems: { depth: 1, absoluteDepth: 1 } }, defaultNumbering), /不能同时/);

  // Absolute numbering must also survive the complete cross-page rendering pipeline.
  await write(marker, stringify({ ...config, numbering: { headings: { depth: 2 }, theorems: { absoluteDepth: 1 } } }));
  buildProject(root);
  assert.match(await html('books/test/first/one'), /theorem-title">定理 1\.1/);
  assert.match(await html('books/test/first/one'), /theorem-title">定理 1\.2/);
  assert.match(await html('books/test/first/custom'), /theorem-title">定理 1\.3/);
  assert.match(await html('books/test/first/one'), /#thm%3Atwo"[^>]*>定理 1\.3/);
  await write(marker, stringify(config));

  // String/list compatibility, explicit fallback, and disabling automatic root contents.
  await write(marker, stringify({ ...config, referenceFormat: ['第 {number} 章', '第 {number} 节', '第 {number} 小节'] }));
  await write('content/books/test/_index.md', source('测试讲义', '', 'childrenToc: false\n'));
  buildProject(root);
  assert.match(await html('books/test/first/one'), /href="#%E6%AD%A3%E6%96%87%E8%8A%82"[^>]*>第 1\.1\.1 小节/);
  assert.match(await html('books/test'), /class="collection-sidebar"/);
  assert.doesNotMatch(await html('books/test'), /id="collection-drawer"|class="collection-navigation"/);
  assert.doesNotMatch(await html('books/test'), /class="collection-children"/);
  await write(marker, stringify({ ...config, referenceFormat: '§{number}' }));
  buildProject(root);
  assert.match(await html('books/test/first/one'), /#page-title"[^>]*>§1\.2/);
  await write(marker, stringify({ ...config, referenceFormat: { 1: '章 {number}', default: '§{number}' } }));
  buildProject(root);
  assert.match(await html('books/test/first/one'), /#page-title"[^>]*>§1\.2/);
  await write(marker, stringify({ ...config, referenceFormat: { 0: '非法层级' } }));
  assert.throws(() => buildProject(root), /referenceFormat/);
  await rm(join(root, 'content/books/test/_index.md'));
  await write(marker, stringify(config));

  // Publication flags are passed through the entire pipeline.
  await write('content/books/test/draft/hidden/index.md', source('隐藏子页', '{@sec:hidden}\n\n::: theorem {@thm:hidden}\n草稿正文。\n:::\n'));
  buildProject(root, ['--buildDrafts']);
  assert.match(await html('books/test'), /草稿章|隐藏子页/);
  assert.equal((await generated('books/test/draft/hidden/index.md')).collectionNumber, '3.1');

  // Root headings and child pages share a numbering sequence.
  await write('content/books/test/_index.md', source('测试讲义', '## 导论\n\n正文。'));
  buildProject(root);
  assert.equal((await generated('books/test/first/_index.md')).collectionNumber, '2');
  await rm(join(root, 'content/books/test/_index.md'));

  // Errors must leave the prior complete prebuild untouched.
  const stable = await readFile(join(root, '.build/content/books/test/first/one/index.md'), 'utf8');
  await write('content/books/test/first/two/index.md', source('重复', '{@sec:one}'));
  assert.throws(() => buildProject(root), /引用标签重复.*first\/one\/index.md/s);
  assert.equal(await readFile(join(root, '.build/content/books/test/first/one/index.md'), 'utf8'), stable);
  await write('content/books/test/first/two/index.md', source('第二小节', '{@sec:two}\n\n::: theorem {@thm:two}\n正文。\n:::\n' + bibliography('book:two')));
  await write('content/books/test/orphan/index.md', source('遗漏', '正文'));
  assert.throws(() => buildProject(root), /未列入 contents/);
  await rm(join(root, 'content/books/test/orphan'), { recursive: true });
  await write(marker, stringify({ ...config, level: 'chapter' }));
  assert.throws(() => buildProject(root), /未知字段 level/);
  await write(marker, stringify({ ...config, authors: [] }));
  assert.throws(() => buildProject(root), /authors 必须是非空字符串或字符串列表/);
  await write(marker, stringify(config));
  // books.yaml groups and orders the lecture index; every book must be listed exactly once.
  await write('content/books/second/collection.yaml', 'title: 另一讲义\ncontents:\n  - page: start\n');
  await write('content/books/second/start/index.md', source('开始', '正文'));
  await write('content/books/books.yaml', stringify({ groups: [{ title: '甲组', books: ['second'] }, { title: '乙组', books: ['test'] }] }));
  buildProject(root);
  const index = new JSDOM(await html('books')).window.document;
  assert.deepEqual([...index.querySelectorAll('.book-group')].map(group => [group.querySelector('h2').textContent, [...group.querySelectorAll('.book-item-title')].map(title => title.textContent)]), [['甲组', ['另一讲义']], ['乙组', ['测试讲义']]]);
  await assert.rejects(readFile(join(root, 'public/books/books.yaml')), /ENOENT/);
  await write('content/books/books.yaml', stringify({ groups: [{ title: '甲组', books: ['second'] }] }));
  assert.throws(() => buildProject(root), /讲义未列入 groups：test/);
  await write('content/books/books.yaml', stringify({ groups: [{ title: '甲组', books: ['second', 'test', 'second'] }] }));
  assert.throws(() => buildProject(root), /讲义重复：second/);
  await write('content/books/books.yaml', stringify({ groups: [{ title: '甲组', books: ['second', 'test', 'plain'] }] }));
  assert.throws(() => buildProject(root), /不是 books 下的讲义：plain/);
  await rm(join(root, 'content/books/books.yaml'));
  await rm(join(root, 'content/books/second'), { recursive: true });
  await write(marker, stringify(config));
  await write('content/projects/manual/start/index.md', source('开始', '正文', 'categories: [数学]\n'));
  assert.throws(() => buildProject(root), /categories 仅用于 wiki/);
  await write('content/projects/manual/start/index.md', source('开始', '{@guide:start}'));

  // Real Git history: generated roots, configuration edits and deleted resources.
  const git = (args, date) => execFileSync('git', ['-c', 'user.name=Test', '-c', 'user.email=test@example.invalid', '-c', 'core.hooksPath=/dev/null', ...args], { cwd: root, stdio: 'pipe', env: { ...process.env, GIT_AUTHOR_DATE: '2000-01-01T00:00:00Z', GIT_COMMITTER_DATE: date ?? '2024-01-01T00:00:00Z' } });
  git(['init']);
  git(['add', 'content']);
  git(['commit', '-m', 'Initial'], '2024-01-01T10:00:00Z');
  buildProject(root);
  assert.equal((await generated('books/test/_index.md')).gitLastmod, '2024-01-01T10:00:00Z');
  assert.equal((await generated('books/test/first/_index.md')).gitLastmod, '2024-01-01T10:00:00Z');
  await write(marker, stringify(config) + '\n# 调整配置\n');
  git(['add', marker]); git(['commit', '-m', 'Configuration'], '2024-02-01T10:00:00Z');
  buildProject(root);
  assert.equal((await generated('books/test/_index.md')).gitLastmod, '2024-02-01T10:00:00Z');
  await write('content/books/test/attachment.txt', 'attachment');
  git(['add', 'content/books/test/attachment.txt']); git(['commit', '-m', 'Resource'], '2024-03-01T10:00:00Z');
  git(['rm', 'content/books/test/attachment.txt']); git(['commit', '-m', 'Delete resource'], '2024-04-01T10:00:00Z');
  buildProject(root);
  assert.equal((await generated('books/test/_index.md')).gitLastmod, '2024-04-01T10:00:00Z');
  assert.match(await html('books/test'), /datetime="2024-04-01T10:00:00Z"/);
  console.log('指南/讲义发现、自动目录页、跨页引用/文献、层级编号、发布过滤、普通页面语法、导航、原子发布与 Git 日期验证通过');
} finally { await rm(root, { recursive: true, force: true }); }
