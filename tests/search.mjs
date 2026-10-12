import assert from 'node:assert/strict';
import { access, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { JSDOM } from 'jsdom';
import katex from 'katex';
import { parseFragment } from 'parse5';
import { createProject, buildProject } from './helpers/project.mjs';
import { loadSearch } from './helpers/pagefind.mjs';
import { nameFromPath, relatedPages, relatedTerms, searchParts } from '../static/js/search-query.js';
import { mathText } from '../scripts/shared/math-text.mjs';
import { decodeSearchData, encodeSearchData } from '../scripts/search/data.mjs';
import { EXCLUDED_CLASSES, WORD_SEPARATOR, separateWords } from '../scripts/search/document.mjs';
import { defaultReading, normalizeReading, readingForms, readingMetadata } from '../scripts/prebuild/reading.mjs';

// Readings: generated pinyin, manual sort keys and search forms.
assert.equal(defaultReading('奇异上同调'), 'qi yi shang tong diao');
assert.equal(defaultReading('调和分析'), 'tiao he fen xi');
assert.equal(defaultReading('Künneth 公式'), 'kunneth gong shi');
assert.equal(defaultReading('∞-范畴'), 'infinity fan chou');
// 不能经 NFKD 分解的拉丁字母也读作基本字母：Łoś 归入 L 组，搜索 los 能找到。
assert.equal(defaultReading('Łoś–Vaught 判别法'), 'los vaught pan bie fa');
assert.equal(readingMetadata({ name: 'Łoś–Vaught 判别法' }).sortGroup, 'l');
assert.equal(defaultReading('Eilenberg–MacLane 谱'), 'eilenberg maclane pu');
assert.equal(defaultReading('E8 格'), 'e8 ge');
assert.equal(defaultReading('曲率'), 'qu lv');
assert.equal(defaultReading('ℵ 数'), 'aleph shu');
assert.equal(normalizeReading('  Serre   Jean Pierre ', 'x'), 'serre jean pierre');
assert.equal(normalizeReading('lü', 'x'), 'lv');
for (const value of ['', 'qí yì', 'a-b', 'serre, jean', 3]) assert.throws(() => normalizeReading(value, 'file.md'), /file\.md: sort 的读音/);
assert.deepEqual(readingForms('qi yi shang tong diao'), ['qi yi shang tong diao', 'qiyishangtongdiao', 'qystd']);
assert.deepEqual(readingForms('cech'), ['cech']);
assert.deepEqual(readingMetadata({ name: 'Jean-Pierre Serre', manual: 'serre jean pierre', file: 'x' }).sortKey, 'serre jean pierre');
// Letter groups: Latin, Greek, Hebrew and Han names go under their reading's first letter, others under `#`.
for (const [name, group, script, manual] of [
  ['奇异上同调', 'q', 1], ['Künneth 公式', 'k', 0], ['β-γ 系统', 'b', 0], ['稳定 (∞,1)-范畴', 'w', 1],
  ['(∞,1)-范畴', '#', 0], ['2-范畴', '#', 0], ['! 模态', '#', 1], ['Jean-Pierre Serre', 's', 0, 'serre jean pierre'],
  ['ℵ 数', 'a', 0], ['ℶ', 'b', 0], ['ℷ', 'g', 0], ['ℸ', 'd', 0],
]) {
  const metadata = readingMetadata({ name, manual, file: 'x' });
  assert.deepEqual([metadata.sortGroup, metadata.sortScript], [group, script], name);
}

// Formulas: MathML from KaTeX becomes readable linear text.
const linear = tex => mathText(parseFragment(katex.renderToString(tex, { output: 'mathml' })));
for (const [tex, expected] of [
  [String.raw`C^n(X;A) = \operatorname{Hom}_{\mathbb Z}(C_n(X;\mathbb Z), A)`, 'C^n(X; A) = Hom_Z(C_n(X; Z), A)'],
  [String.raw`H^{m+n}(X; A)`, 'H^{m + n}(X; A)'],
  [String.raw`\frac{a+b}{2}`, '{a + b}/2'],
  [String.raw`\sqrt{x+1}`, '√{x + 1}'],
  [String.raw`\bar{X} \to \widehat{G}`, 'X → G'],
  [String.raw`\sum_{i=1}^n a_i`, '∑_{i = 1}^n a_i'],
  [String.raw`A \otimes_R B`, 'A ⊗_R B'],
  [String.raw`\text{商群 } G/N`, '商群 G/N'],
  [String.raw`\begin{pmatrix} a & b \\ c & d \end{pmatrix}`, '(a b; c d)'],
  [String.raw`f \colon X \to Y`, 'f : X → Y'],
  [String.raw`\lim_{n\to\infty} x_n`, 'lim_{n → ∞} x_n'],
  [String.raw`\sin x + \cos(2x)`, 'sin x + cos(2x)'],
  [String.raw`\underbrace{a+b}_{n}`, '{a + b}_n'],
  [String.raw`f'(x)`, 'f′(x)'],
  [String.raw`\mathbb{F}_p, \mathfrak{g}`, 'F_p, g'],
]) assert.equal(linear(tex), expected, tex);
// Chinese text is indexed one character per word; Chinese query terms become exact phrases.
assert.equal(separateWords('上同调是 Abel 群．'), ['上', '同', '调', '是 Abel 群', '．'].join(WORD_SEPARATOR));
assert.equal(separateWords('A-模'), `A-${WORD_SEPARATOR}模`);
assert.equal(separateWords('Hom(A, B)'), 'Hom(A, B)');
assert.deepEqual(searchParts(' 上同调 '), ['"上 同 调"']);
assert.deepEqual(searchParts('CW 复形 hom'), ['"复 形"', 'CW hom']);
assert.deepEqual(searchParts('A-模 群'), ['"A- 模"', '"群"']);
assert.deepEqual(searchParts('qystd'), ['qystd']);
// Names for related pages: from the missing address, searched by their longer words.
assert.deepEqual(relatedTerms('奇异上同调环'), ['奇异', '同调']);
assert.deepEqual(relatedTerms('Spectral sequence'), ['spectral', 'sequence']);
assert.equal(nameFromPath('/docs/wiki/%E5%A5%87%E5%BC%82-%E7%8E%AF/', '/docs/'), '奇异 环');
assert.equal(nameFromPath('/wiki/spectral_sequence/index.html'), 'spectral sequence');
assert.equal(nameFromPath('/books/notes.html'), 'notes');
assert.equal(nameFromPath('/%E0%A4%A/'), '%E0%A4%A');
assert.equal(nameFromPath('/'), '');
// Display data cannot contain a single searchable (alphanumeric) character.
const encoded = encodeSearchData({ title: '奇异上同调 <span class="katex">x</span>', breadcrumb: [{ url: '/books/a/' }] });
assert.doesNotMatch(encoded, /[\p{L}\p{N}\s]/u);
assert.deepEqual(decodeSearchData(encoded).breadcrumb, [{ url: '/books/a/' }]);

// The browser module (static/js/search.js) runs in a built page.
let browserImports = 0;
async function browserSearch(site, file, url) {
  const { window } = new JSDOM(await readFile(join(site, file), 'utf8'), { url });
  Object.assign(globalThis, { document: window.document, NodeFilter: window.NodeFilter });
  return import(`../static/js/search.js?load=${++browserImports}`);
}

const root = await createProject('search');
const write = async (file, text) => { await mkdir(join(root, file, '..'), { recursive: true }); await writeFile(join(root, file), text); };
const page = (front, body = '') => `---\n${front}\n---\n${body}\n`;
const build = (extra = []) => {
  buildProject(root, extra);
  execFileSync(process.execPath, ['scripts/postbuild.mjs'], { cwd: root, stdio: 'pipe' });
};
try {
  await rm(join(root, 'content'), { recursive: true, force: true });
  await write('data/categories.yaml', '数学: {}\n代数拓扑:\n  parent: 数学\n  sort: dai shu tuo pu\n');
  await write('data/readings.yaml', '重数: chong shu\n');
  await write('content/wiki/_index.md', page('title: 全部条目'));
  await write('content/wiki/cohomology/index.md', page('title: 奇异上同调\naliases: [奇异上同调群]\ncategories: [代数拓扑]', [
    '奇异上同调是拓扑空间的同伦不变量．对 $X$ 有 $C^n(X;A) = \\operatorname{Hom}_{\\mathbb Z}(C_n(X;\\mathbb Z), A)$．',
    '\n## 定义\n\n上链复形的定义．\n',
    '::: theorem [万有系数定理] {@thm:uct}\n设 $X$ 是拓扑空间．\n:::\n',
    '```tikz\n\\begin{tikzpicture}\\node {图中文字};\\end{tikzpicture}\n```\n',
  ].join('\n')));
  await write('content/wiki/serre/index.md', page('title: Jean-Pierre Serre\nsort: Serre Jean Pierre', '法国数学家．'));
  await write('content/wiki/multiplicity/index.md', page('title: 代数重数', '特征值的重数．'));
  await write('content/wiki/infinity/index.md', page('title: $\\infty$-范畴', '高阶范畴．'));
  // 与分类、讲义页面同名的条目：标题匹配的百科条目排在分类和讲义之前。
  await write('content/wiki/topology/index.md', page('title: 代数拓扑', '研究空间的代数不变量．'));
  await write('content/wiki/linear/index.md', page('title: 线性映射', '保持线性结构的映射．'));
  // 开头匹配：正文反复出现“同伦”的“链同伦”得分更高，但标题以“同伦”开头的条目仍排在前面；别名开头匹配排在标题之后。
  await write('content/wiki/chain/index.md', page('title: 链同伦', '同伦同伦同伦，链复形之间的同伦。同伦的同伦。'));
  await write('content/wiki/homcat/index.md', page('title: 同伦范畴\naliases: [范畴的同伦]', '由弱等价局部化得到。'));
  await write('content/wiki/compound/index.md', page('title: 复合词', '这里只出现奇异上同调和同伦不变量这样的长词．'));
  await write('content/missing/index.md', page('title: 条目尚未创建\nlayout: missing\nbuild:\n  list: never'));
  await write('content/wiki/english/index.md', page('title: Spectral sequence\nlang: en', 'A spectral sequence computes homology.'));
  await write('content/wiki/hidden/index.md', page('title: 隐藏条目\nsearch: false', '隐藏条目独有的内容 zzqhidden．'));
  await write('content/books/demo/collection.yaml', 'title: 演示讲义\ncontents:\n  - page: maps\n    children:\n      - page: kernel\n');
  await write('content/books/demo/maps/_index.md', page('title: 线性映射', '映射的定义．'));
  await write('content/books/demo/maps/kernel/index.md', page('title: 核与单射', '核的性质．'));
  await write('content/books/private/collection.yaml', 'title: 私人笔记\nsearch: false\ncontents:\n  - page: note\n');
  await write('content/books/private/note/index.md', page('title: 笔记', '私人笔记独有的内容 zzqprivate．'));
  build();

  const serre = await readFile(join(root, '.build/content/wiki/serre/index.md'), 'utf8');
  assert.match(serre, /sortKey: serre jean pierre/);
  assert.doesNotMatch(serre, /^sort:/m);
  assert.match(await readFile(join(root, '.build/content/wiki/multiplicity/index.md'), 'utf8'), /sortKey: dai shu chong shu/);
  assert.match(await readFile(join(root, '.build/content/categories/代数拓扑/_index.md'), 'utf8'), /sortKey: dai shu tuo pu/);

  // Lists follow readings: `#` (∞-范畴) first, then dai < qi < serre < spectral < yin (search: false only affects search).
  const list = await readFile(join(root, 'public/wiki/index.html'), 'utf8');
  const order = [...list.matchAll(/<a class="article-item" href="\/wiki\/([^/]+)\/"/g)].map(match => match[1]);
  assert.deepEqual(order, ['infinity', 'multiplicity', 'topology', 'compound', 'chain', 'cohomology', 'serre', 'english', 'homcat', 'linear', 'hidden']);

  // Postbuild consumed the manifest and kept only the search API bundle.
  await assert.rejects(access(join(root, 'public/search-manifest.json')));
  const bundle = await readdir(join(root, 'public/pagefind'));
  assert.ok(bundle.includes('pagefind.js'));
  assert.ok(!bundle.some(name => /ui|highlight/.test(name)), bundle.join(', '));
  assert.ok(!bundle.includes('playground'));

  const search = await loadSearch(join(root, 'public'));
  const first = async query => (await search.search(query))[0];
  const clean = value => value.replaceAll(WORD_SEPARATOR, '');
  const plainTitle = result => clean(result.meta.title);
  const data = result => decodeSearchData(result.meta.data);

  const cohomology = await first('上同调');
  assert.equal(decodeURI(cohomology.url), '/wiki/cohomology/');
  assert.equal(plainTitle(cohomology), '奇异上同调');
  // Chinese terms match anywhere inside longer words, and only as a whole.
  for (const query of ['上同调', '同调', '调和', '不变量', '奇异上同', '同伦 长词']) {
    assert.ok((await search.search(query)).some(result => decodeURI(result.url) === '/wiki/compound/'), query);
  }
  // Exact phrases come back unranked from Pagefind; the title match comes first.
  assert.equal(decodeURI((await first('同调'))?.url), '/wiki/cohomology/');
  // Terms that occur nowhere are dropped; Pagefind would match ever shorter prefixes (zzq → z).
  for (const query of ['zzqxyz', 'homologx', 'qystdx']) assert.deepEqual(await search.search(query), [], query);
  assert.equal(decodeURI((await first('homolog'))?.url), '/wiki/english/');
  assert.equal(decodeURI((await first('上同调 zzqxyz'))?.url), '/wiki/cohomology/');
  assert.equal(await search.known('Jean-Pierre zzqxyz 奇异 Serre'), 'Jean Pierre 奇异 Serre');
  assert.equal(decodeURI((await first('Jean-Pierre'))?.url), '/wiki/serre/');
  assert.equal(decodeURI((await first('Spectral'))?.url), '/wiki/english/');

  // Title matches first: the wiki entry, then the category or lecture of the same name, then the rest.
  const urls = async query => (await search.search(query)).map(result => decodeURI(result.url));
  assert.deepEqual((await urls('代数拓扑')).slice(0, 2), ['/wiki/topology/', '/categories/代数拓扑/']);
  assert.deepEqual((await urls('线性映射')).slice(0, 2), ['/wiki/linear/', '/books/demo/maps/']);
  assert.equal((await urls('dai shu tuo pu'))[0], '/wiki/topology/');
  // 整个拼音读音吻合的条目排在其他结果之前。
  assert.equal((await urls('tonglunfanchou'))[0], '/wiki/homcat/');
  assert.deepEqual((await urls('同伦')).slice(0, 2), ['/wiki/homcat/', '/wiki/chain/']);
  assert.equal((await urls('同伦范畴'))[0], '/wiki/homcat/');
  // 别名开头匹配排在标题开头匹配之后，但在其他结果之前。
  assert.deepEqual((await urls('范畴的'))[0], '/wiki/homcat/');
  // Enter on a query that names a wiki entry opens it: by title, else by a unique alias.
  assert.equal(decodeURI(await search.exact(' 同伦范畴 ')), '/wiki/homcat/');
  assert.equal(decodeURI(await search.exact('范畴的同伦')), '/wiki/homcat/?from=范畴的同伦');
  assert.equal(await search.exact('同伦'), null);
  assert.equal(await search.exact('代数拓扑'), '/wiki/topology/');

  // Related pages: the whole name first, then its words, more words first.
  const related = async name => {
    const { results, terms } = await search.related(name);
    return { urls: results.map(result => decodeURI(result.url)), terms };
  };
  assert.deepEqual((await related('奇异上同调')).urls[0], '/wiki/cohomology/');
  const ring = await related('奇异上同调环');
  assert.deepEqual(ring.terms, ['奇异', '同调']);
  assert.ok(ring.urls.includes('/wiki/cohomology/') && ring.urls.includes('/wiki/compound/'), ring.urls.join());
  assert.deepEqual((await related('zzqxyz 鲸鱼')).urls, []);
  assert.ok((await related('线性映射的合成')).urls.includes('/books/demo/maps/'));
  for (const query of ['同调群', '伦同', '同伦 不存在']) {
    assert.ok(!(await search.search(query)).some(result => decodeURI(result.url) === '/wiki/compound/'), query);
  }
  // Several terms: results found by all of them, with counts per kind.
  const both = await search.response('同调 拓扑', { counts: true });
  assert.deepEqual(both.results.length, both.totalFilters.kind.wiki + both.totalFilters.kind.category + both.totalFilters.kind.lecture);
  assert.equal((await search.response('同调 拓扑', { filters: { kind: 'lecture' } })).unfilteredResultCount, both.results.length);
  assert.deepEqual(data(cohomology), { ...data(cohomology), kind: 'wiki', number: '', aliases: ['奇异上同调群'], breadcrumb: [] });
  assert.match(data(cohomology).lead, /^奇异上同调是拓扑空间的同伦不变量．对 X 有 C\^n\(X; A\) = Hom_Z\(C_n\(X; Z\), A\)/);
  assert.doesNotMatch(cohomology.excerpt, /katex|mathml|annotation|图中文字/);
  // Theorems and sections are sub-results with their anchors.
  const theorem = (await first('万有系数定理')).sub_results.find(result => result.url.endsWith('#thm:uct'));
  assert.ok(theorem);
  assert.match(clean(theorem.title), /万有系数定理/);
  assert.ok((await first('上链复形')).sub_results.some(result => decodeURI(result.url).endsWith('#定义') && clean(result.title) === '1 定义'));
  // Pinyin, initials and aliases match through the keywords field.
  for (const query of ['qystd', 'qiyishang', 'qi yi shang tong', '奇异上同调群']) assert.equal(decodeURI((await first(query))?.url), '/wiki/cohomology/', query);
  // Formula text is searchable (Hom also prefix-matches "homology").
  assert.ok((await search.search('Hom')).some(result => decodeURI(result.url) === '/wiki/cohomology/'));
  assert.equal(decodeURI((await first('serre'))?.url), '/wiki/serre/');
  assert.equal(decodeURI((await first('dscs'))?.url), '/wiki/multiplicity/');
  assert.equal(decodeURI((await first('infinity'))?.url), '/wiki/infinity/');
  assert.equal(decodeURI((await first('homology'))?.url), '/wiki/english/');
  // Display data never matches: no page contains the word "lecture" or "katex".
  for (const [query, url] of [['katex', '/wiki/infinity/'], ['mathml', '/wiki/infinity/'], ['lecture', '/books/demo/maps/'], ['breadcrumb', '/books/demo/maps/kernel/']]) {
    assert.ok(!(await search.search(query)).some(result => decodeURI(result.url) === url), query);
  }

  // Categories are results of their own kind, with their ancestors.
  const [topology, category] = await search.search('dstp');
  assert.equal(decodeURI(topology.url), '/wiki/topology/');
  assert.equal(decodeURI(category.url), '/categories/代数拓扑/');
  assert.equal(data(category).kind, 'category');
  assert.deepEqual(data(category).breadcrumb.map(item => item.title), ['数学']);

  // Collection pages carry their number and breadcrumb.
  const kernel = await first('核与单射');
  assert.equal(decodeURI(kernel.url), '/books/demo/maps/kernel/');
  assert.equal(plainTitle(kernel), '核与单射');
  assert.deepEqual({ number: data(kernel).number, kind: data(kernel).kind }, { number: '1.1', kind: 'lecture' });
  assert.deepEqual(data(kernel).breadcrumb.map(item => item.title), ['演示讲义', '1 线性映射']);
  assert.deepEqual(data(kernel).breadcrumb.map(item => decodeURI(item.url)), ['/books/demo/', '/books/demo/maps/']);
  const filters = await search.filters();
  assert.deepEqual(Object.keys(filters.kind).sort(), ['category', 'lecture', 'wiki']);
  assert.ok(filters.category['代数拓扑']);

  // Excluded pages and collections, list pages and the missing-page template never appear.
  const excluded = /^\/(?:wiki\/hidden|books\/private|wiki|missing)\/$/;
  for (const query of ['zzqhidden', 'zzqprivate', '隐藏条目', '私人笔记', '全部条目']) {
    assert.ok(!(await search.search(query)).some(result => excluded.test(decodeURI(result.url))), query);
  }
  const raw = Object.fromEntries(await Promise.all(['奇异上同调群', '万有系数定理', '核与单射', 'infinity', 'dstp'].map(async query => [query, await search.search(query)])));
  search.restore();

  // Result display in the browser.
  const ui = await browserSearch(join(root, 'public'), 'wiki/cohomology/index.html', 'https://example.org/wiki/cohomology/');
  assert.equal(ui.format('{count} 个，{missing}', { count: 3 }), '3 个，{missing}');
  assert.deepEqual('奇异上同调与同伦'.match(ui.queryMatcher('上同调 同伦')), ['上同调', '同伦']);
  assert.equal(ui.queryMatcher('  '), null);
  const alias = ui.resultView(raw['奇异上同调群'][0], '奇异上同调群');
  assert.equal(alias.alias, '奇异上同调群', '只由别名命中时显示别名');
  assert.equal(ui.resultView(raw['奇异上同调群'][0], '上同调').alias, undefined);
  const theoremView = ui.resultView(raw['万有系数定理'][0], '万有系数定理');
  assert.ok(theoremView.subs.length && theoremView.subs.every(sub => !sub.url.endsWith('#page-title')));
  assert.match(theoremView.subs[0].title, /万有系数定理/, '标题命中的定理排在前面');
  // Excerpt windows that start at punctuation lose it; opening brackets and quotes stay.
  // An excerpt that does not start at its heading is cut, and starts with an ellipsis.
  const cut = excerpt => ui.resultView({
    url: '/x/', excerpt, meta: { title: '链接', data: encodeSearchData({ kind: 'wiki', number: '', titleHTML: '链接', breadcrumb: [], aliases: [], lead: '' }) },
    sub_results: [{ title: '1 定义', url: '/x/#定义', excerpt: `1 定义. ${excerpt}` }],
  }, '链接');
  for (const [excerpt, expected] of [['，<mark>链接</mark>到条目', '链接到条目'], ['）． — 链接', '链接'], ['（见链接）', '（见链接）'], ['“链接”', '“链接”']]) {
    assert.equal(cut(excerpt).excerpt, `…${expected}`, excerpt);
    assert.equal(cut(excerpt).subs[0].excerpt, expected, excerpt);
  }
  const kernelView = ui.resultView(raw['核与单射'][0], '核与单射');
  assert.equal(kernelView.number, '1.1');
  assert.doesNotMatch(kernelView.excerpt, /^(?:1\.1 )?核与单射|^[.\s]/, '摘要不重复标题');
  assert.equal(ui.resultView(raw['奇异上同调群'][0], '奇异上同调群').excerpt.startsWith('…'), false, '退回页面开头时不加省略号');
  assert.deepEqual(kernelView.breadcrumb.map(item => decodeURI(item.url)), ['/books/demo/', '/books/demo/maps/']);
  assert.equal(decodeURI(kernelView.collection.url), '/books/demo/');
  const rendered = ui.renderResult(kernelView, { option: true });
  assert.equal(rendered.querySelector('.search-number').textContent, '1.1');
  assert.equal(rendered.querySelector('.search-kind').textContent, '讲义');
  assert.equal(rendered.querySelector('.search-breadcrumb').textContent, '演示讲义›1 线性映射');
  assert.deepEqual([...rendered.querySelectorAll('.search-hit-title mark')].map(mark => mark.textContent), ['核与单射']);
  const touching = ui.renderResult(ui.resultView(raw['核与单射'][0], '核与 单射'));
  assert.deepEqual([...touching.querySelectorAll('.search-hit-title mark')].map(mark => mark.textContent), ['核与单射'], '相邻的高亮合并');
  assert.ok([...rendered.querySelectorAll('a')].every(link => link.getAttribute('role') === 'option' && link.id));
  assert.ok([...rendered.querySelectorAll('.search-sub')].every(link => link.firstElementChild.matches('svg.ui-icon')), '子结果带图标');
  assert.doesNotMatch(rendered.textContent, new RegExp(WORD_SEPARATOR));
  // Categories show a folder icon, not their ancestors.
  const categoryView = ui.resultView(raw.dstp[1], 'dstp');
  assert.deepEqual(categoryView.breadcrumb, []);
  const categoryResult = ui.renderResult(categoryView);
  assert.equal(categoryResult.querySelector('.search-breadcrumb'), null);
  assert.ok(categoryResult.querySelector('.search-hit-title > svg.icon-folder'));
  // Formulas in titles stay rendered and are never highlighted inside.
  const formula = ui.renderResult(ui.resultView(raw.infinity[0], 'infinity 范畴'));
  assert.ok(formula.querySelector('.search-title-text .katex'));
  assert.equal(formula.querySelector('.katex mark'), null);
  assert.equal(formula.querySelector('.search-title-text > mark').textContent, '范畴');
  // At most two results per lecture or guide; the rest stay behind the last one shown.
  const grouped = ui.groupByCollection([kernelView, alias, { ...kernelView }, { ...kernelView }]);
  assert.deepEqual(grouped.map(view => view.kind), ['lecture', 'wiki', 'lecture']);
  assert.equal(grouped[2].hidden.length, 1);

  // The missing-article and 404 pages offer related pages, by name or by address.
  assert.match(await readFile(join(root, 'public/missing/index.html'), 'utf8'), /class="related-search" data-source="title"[^>]*hidden/);
  assert.match(await readFile(join(root, 'public/404.html'), 'utf8'), /class="related-search" data-source="path"[^>]*hidden[\s\S]*js\/related-search\.js/);
  const html404 = await readFile(join(root, 'public/404.html'), 'utf8');
  assert.match(html404, /<span data-related="none">请返回<a href="\/">首页<\/a>．<\/span><span data-related="found" hidden(?:="")?>[^<]*<a href="\/">首页<\/a>，或浏览下方的相关页面．<\/span>/);
  // The missing-article page offers creating the entry instead of (or besides) the related pages.
  const missingHTML = await readFile(join(root, 'public/missing/index.html'), 'utf8');
  assert.match(missingHTML, /<span data-related="none">请返回<a href="\/">首页<\/a>，或<a class="missing-create" href="\/edit\/">创建条目<\/a>．<\/span><span data-related="found" hidden(?:="")?>浏览下方的相关页面，或<a class="missing-create" href="\/edit\/">创建条目<\/a>．<\/span>/);
  for (const html of [html404, missingHTML]) assert.doesNotMatch(html, /浏览已有条目/);

  // Every class the search document drops is still produced by the templates.
  const templates = (await Promise.all((await readdir(join(root, 'layouts'), { recursive: true }))
    .filter(file => file.endsWith('.html')).map(file => readFile(join(root, 'layouts', file), 'utf8')))).join('\n');
  for (const name of EXCLUDED_CLASSES.filter(name => !name.startsWith('tikz-'))) assert.match(templates, new RegExp(`class="[^"]*\\b${name}\\b`), name);

  // Invalid settings fail in prebuild.
  await write('content/wiki/hidden/index.md', page('title: 隐藏条目\nsearch: true'));
  assert.throws(() => build(), /search 只能设为 false/);
  await write('content/wiki/hidden/index.md', page('title: 隐藏条目\nsort: 隐藏'));
  assert.throws(() => build(), /sort 的读音只能由小写字母/);
  await write('content/wiki/hidden/index.md', page('title: 隐藏条目'));
  await write('data/readings.yaml', '重数: chong\n');
  assert.throws(() => build(), /重数 必须只含汉字，读音须为每个字一个音节/);
  await write('data/readings.yaml', '');

  // A site in a subdirectory gets prefixed result and breadcrumb URLs.
  build(['--baseURL', 'https://example.org/docs/']);
  const subpath = await loadSearch(join(root, 'public'), '/docs/');
  const nested = (await subpath.search('核与单射'))[0];
  assert.equal(decodeURI(nested.url), '/docs/books/demo/maps/kernel/');
  // Breadcrumb URLs are site-relative too; the page adds its own prefix.
  assert.equal(decodeURI(decodeSearchData(nested.meta.data).breadcrumb[0].url), '/books/demo/');
  subpath.restore();
  const nestedUI = await browserSearch(join(root, 'public'), 'wiki/cohomology/index.html', 'https://example.org/docs/wiki/cohomology/');
  assert.deepEqual(nestedUI.resultView(nested, '核与单射').breadcrumb.map(item => decodeURI(item.url)), ['/docs/books/demo/', '/docs/books/demo/maps/']);
  assert.equal(nestedUI.config.page, '/docs/search/');

  // The preview's diagnostic page is opt-in.
  buildProject(root);
  execFileSync(process.execPath, ['scripts/postbuild.mjs', 'public', '--playground'], { cwd: root, stdio: 'pipe' });
  assert.ok((await readdir(join(root, 'public/pagefind'))).includes('playground'));
} finally {
  await rm(root, { recursive: true, force: true });
}
console.log('search tests passed');
