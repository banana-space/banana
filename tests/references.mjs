import { createProject, buildProject } from './helpers/project.mjs';
import assert from 'node:assert/strict';
import { mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';

import { transformDocument } from '../scripts/prebuild/structure.mjs';
import { normalizeNames, prepareBibliography } from '../scripts/prebuild/bibliography.mjs';
import { validReferenceName } from '../scripts/prebuild/markup.mjs';

const fail = message => { throw new Error(message); };
assert.deepEqual(normalizeNames('Jean-Pierre Serre', fail), [{ family: 'Serre', given: 'Jean-Pierre' }]);
assert.deepEqual(normalizeNames(['de Gaulle, Charles', '张三', { literal: 'A research group' }], fail), [
  { family: 'de Gaulle', given: 'Charles' }, { literal: '张三' }, { literal: 'A research group' },
]);
assert.deepEqual(normalizeNames({ family: '张', given: '三' }, fail), [{ family: '张', given: '三' }]);
assert.deepEqual(normalizeNames({ literal: 'A\nresearch group' }, fail), [{ literal: 'A research group' }]);
for (const value of [[], '', null, 42, { given: 'Only' }, { literal: 'A', family: 'B' }, ['Smith,']]) {
  assert.throws(() => normalizeNames(value, fail));
}
assert.ok(validReferenceName(`thm:a,b.c;d:e'f"g`));
for (const suffix of [',', '.', ';', ':', "'", '"', '，', '。', '!', '?']) assert.ok(!validReferenceName('a' + suffix));
for (const name of ['a b', 'a@b', 'a|b', 'a{b', 'a(b)', '']) assert.ok(!validReferenceName(name));

const block = data => '```bibliography\n' + data + '\n```\n';
const first = block(`book:
  type: book
  title: First book
  author: "Smith, Alice"
  year: 2020
  publisher: Press
  edition: 2
  doi: 10.1234/example
paper:
  type: article
  title: Published article
  author: [Alice Smith, "Jones, Bob"]
  year: 2021
  journaltitle: Test Journal
  volume: 2
  number: 3
  pages: 1–10
  arxiv: "2101.00001"
online:a:
  type: online
  title: First online page
  site: nLab
  url: https://example.com/page_(one)
  year: 2024
  author: Actual Contributor
  urldate: "2026-10-02"`);
const second = block(`chapter:
  type: incollection
  title: Chapter
  author: 张三
  editor: {literal: Editor Group}
  booktitle: Collected papers
  publisher: Press
  year: 2022
  pages: 11–20
phd:
  type: thesis
  title: A thesis
  author: Carol Jones
  year: 2019
  degree: phd
  institution: University of Edinburgh
preprint:
  type: preprint
  title: A preprint
  author: Alice Smith
  year: 2023
  arxiv: "2301.00001"
online:b:
  type: online
  title: Second online page
  site: nLab
  url: https://example.com/two
otherbook:
  type: book
  title: Second book
  author: Alice Smith
  year: 2020`);
const fixture = `@thm:main, @eq:one. @sec:first; {@book}。第一同构定理（@-thm:main）。
[@book, §2; @otherbook; @paper; @chapter; @preprint; @online:a; @online:b]
[上述**定理**](@thm:main) [另一个页面](@online:b)

## 第一节 {@sec:first .accent}

::: theorem [参见 @book] {@thm:main}
证明前的引用： @eq:one。
:::

${'```math {@eq:one}\nx = 1\n```'}

${first}
这段简介保持原位置，后面的来源是 @online:b。

${second}`;
let entries, targets;
const converted = transformDocument(fixture, { onBibliography: value => { entries = value; }, onLabels: value => { targets = value; } });
assert.match(converted, /\[Smith 2020a\]\(citation:/);
assert.match(converted, /第一同构定理（\[1\.1\]\(reference:\?id=thm%3Amain\)）/, '@-label shows only the number');
assert.throws(() => transformDocument('@-book\n\n```bibliography\nbook:\n  type: book\n  title: T\n```\n'), /只引用编号/);
assert.match(converted, /\[Smith 2020b\]\(citation:/);
assert.match(converted, /\[Smith, Jones 2021\]\(citation:/);
assert.match(converted, /\[张三 2022\]\(citation:/);
assert.match(converted, /\[Smith\]\(citation:\?id=bib-preprint/);
assert.match(converted, /\*\*Jones,\*\* Carol \(2019\)\. \*A thesis\*\. PhD thesis, University of Edinburgh\./);
assert.doesNotMatch(converted, /Smith 2023|nLab 2024/);
assert.match(converted, /\[nLab a\]\(citation:/);
assert.match(converted, /\[nLab b\]\(citation:/);
assert.match(converted, /\*\*nLab\*\* \(a\)/);
assert.match(converted, /\*\*nLab\*\* \(b\)/);
assert.match(converted, /\*\*Smith,\*\* Alice \(2020a\)/);
assert.doesNotMatch(converted, /\*\*Smith, Alice\*\*|Preprint\./);
assert.match(converted, /\(\[doi\]\(https:\/\/doi\.org\/10\.1234\/example\)\)/);
assert.match(converted, /\(\[arXiv:2101\.00001\]/);
assert.match(converted, /Test Journal/);
assert.match(converted, /Collected papers/);
assert.match(converted, /https:\/\/example.com\/page_%28one%29/);
assert.match(converted, /reference:\?id=thm%3Amain&caption=/);
assert.match(converted, /## 第一节 \{#第一节 \.accent data-section-number="1"\}/);
assert.equal(entries.length, 8);
assert.deepEqual(entries[0].author, [{ family: 'Smith', given: 'Alice' }]);
assert.equal(entries.find(entry => entry.key === 'preprint').year, '2023');
assert.equal(targets.find(target => target.id === 'bib-book').kind, 'bibliography');
assert.ok(converted.indexOf('First online page') < converted.indexOf('这段简介'));
assert.ok(converted.indexOf('这段简介') < converted.indexOf('Second online page'));
assert.equal((converted.match(/^- \{\{< _bibliography-anchor/gm) ?? []).length, 8);

// 标点允许在标签内部；连续的末尾标点原样留在正文。
const unusual = `thm:a,b.c;d:e'f"g`;
const punctuation = transformDocument(`@${unusual},.;:'" @thm:中文。 {@${unusual}}\n\n::: theorem {@${unusual}}\n内容\n:::\n::: theorem {@thm:中文}\n内容\n:::`);
assert.match(punctuation, /\),\.;:'" /);
assert.match(punctuation, /\)。 /);
assert.ok(punctuation.includes(new URLSearchParams({ id: unusual }).toString()));
assert.match(transformDocument(`见{@thm:中文}。\n\n::: theorem {@thm:中文}\n内容\n:::`), /^见\[environment_theorem\]/);
// 文献标题中的行内公式照常渲染，其余文字仍按普通文字转义。
const mathTitle = transformDocument(block("m:\n  type: article\n  title: '$\\infty$-Categories *in* Topology'\n  author: A B\n  year: 2020"));
assert.match(mathTitle, /@@math:XGluZnR5:math@@-Categories \\\*in\\\* Topology/);
// 范围写法 @a–@b、@a-@b：末尾的连接号、连字符属于正文，标签在其前结束。
assert.match(transformDocument('式 @eq:a-@eq:b\n\n```math {@eq:a}\nx\n```\n\n```math {@eq:b}\ny\n```'), /\)-\[/);
assert.throws(() => transformDocument('```math {@eq:a-}\nx\n```'));
assert.match(transformDocument('式 @eq:a–@eq:b\n\n```math {@eq:a}\nx\n```\n\n```math {@eq:b}\ny\n```'), /\)–\[/);
// 标题标签不覆盖由标题计算的 HTML ID。
assert.match(transformDocument('## 标题 {@h}\n@h'), /id=%E6%A0%87%E9%A2%98/);

const note = transformDocument('[@book, **附注** $x;y$ [文字](https://example.com); @otherbook, `a;b` [a,b]]\n\n' + first + second);
assert.match(note, /\*\*附注\*\* @@math:/);
assert.match(note, /\[文字\]\(https:\/\/example.com\)/);
assert.match(note, /`a;b` \[a,b\]/);

const protectedSources = [
  '`@missing {@missing} [@missing]`', '```\n@missing\n{@missing}\n[@missing]\n```',
  '````markdown\n' + block('bad: {}') + '````',
  '> ```bibliography\n> bad: {}\n> ```', '    @missing\n',
  '<!-- @missing -->',
  '[文字 @missing](https://example.com/@missing)', '![图](@missing)',
  '[id]: https://example.com/@missing', 'person@example.com', '<person@example.com>',
  String.raw`\@missing`, String.raw`\{@missing}`, String.raw`\[@missing; @also-missing]`,
];
for (const source of protectedSources) assert.equal(transformDocument(source), source);
assert.match(transformDocument('$@missing$'), /^@@math:/);

for (const [source, error] of [
  ['@missing', /引用标签不存在/], ['{@missing', /缺少结束/], ['[@missing', /以 ] 结束/],
  ['[[文章@key]]', /保留给跨页面引用/],
  ['::: theorem {@bad:}\n:::', /引用标签无效/],
  [block('bad,: {type: book, title: Test}'), /引用标签无效/],
  [block('a: {type: book, title: Test}\na: {type: book, title: Other}'), /YAML 无效/],
  [block('a: {type: unknown, title: Test}'), /type 必须/],
  [block('a: {type: book}'), /title 必须/],
  [block('a: {type: book, title: Test, typo: 1}'), /未知文献字段/],
  [block('a: {type: book, title: Test, year: 2020a}'), /year 必须/],
  [block('a: {type: book, title: Test, label: 123}'), /label 必须/],
  [block('a: {type: online, title: Test, url: https://example.com}'), /site 和 url/],
  [block('a: {type: online, site: Test, title: Test, url: "javascript:alert(1)"}'), /HTTP\(S\)/],
  [block('a: {type: book, title: Test, author: [42]}'), /姓名字符串/],
  [block('- a'), /非空.*映射/], [block(''), /非空.*映射/], [block('null: {}'), /key 必须/],
  ['```bibliography\na: {}', /缺少结束围栏/],
  ['::: theorem\n' + first + ':::', /环境之外/],
  [first + first, /引用标签重复/],
  ['::: theorem {@book}\n内容\n:::\n' + first, /引用标签重复/],
  ['::: theorem {@bib-book}\n内容\n:::\n' + first, /引用锚点重复/],
]) assert.throws(() => transformDocument(source), error);
assert.throws(() => transformDocument(block('a: {type: book, title: Test, year: invalid}'), { file: 'test.md', lineOffset: 3 }), /test.md:5: a: year/);
assert.throws(() => transformDocument(`[@book, 附注\n{@missing}]\n\n${first}`), /<正文>:2: 引用标签不存在/);

const many = Array.from({ length: 28 }, (_, index) => ({ type: 'online', site: 'nLab', title: String(index), author: [], editor: [] }));
prepareBibliography(many);
assert.equal(many[25].dateLabel, 'z');
assert.equal(many[26].dateLabel, 'aa');
assert.equal(many[27].dateLabel, 'ab');
const repeatedPreprints = transformDocument('@a @b\n\n' + block('a: {type: preprint, title: First, author: Alice Smith}\nb: {type: preprint, title: Second, author: Alice Smith}'));
assert.match(repeatedPreprints, /\[Smith a\]/);
assert.match(repeatedPreprints, /\[Smith b\]/);
assert.match(repeatedPreprints, /\*\*Smith,\*\* Alice \(a\)/);
const abbreviated = transformDocument('@a @b\n\n' + block('a: {type: book, title: First, year: 2020, author: [Alice Smith, Bob Jones, Carol White]}\nb: {type: book, title: Second, year: 2020, author: [Alice Smith, Dave Brown, Eve Green]}'));
assert.match(abbreviated, /\[Smith 等 2020a\]/);
assert.match(abbreviated, /\[Smith 等 2020b\]/);
const labelled = transformDocument('@ega\n\n' + block('ega: {type: book, label: "EGA I", title: Example, author: "Grothendieck, A.", year: 1960, doi: test, arxiv: test, zbmath: test}'));
assert.match(labelled, /\[EGA I\]\(citation:/);
assert.doesNotMatch(labelled, /\[Grothendieck 1960\]/);
assert.match(labelled, /&#91;\*\*EGA I\*\*&#93; \*\*Grothendieck,\*\* A\. \(1960\)/);
assert.match(labelled, /\(\[doi\][^\n]+\) \(\[arXiv:test\][^\n]+\) \(\[zbMATH\]/);
assert.doesNotMatch(labelled, / · /);
const duplicateLabels = transformDocument('@a @b\n\n' + block('a: {type: book, title: A, label: Same}\nb: {type: book, title: B, label: Same}'));
assert.match(duplicateLabels, /\[Same a\]/);
assert.match(duplicateLabels, /\[Same b\]/);
assert.match(duplicateLabels, /&#91;\*\*Same a\*\*&#93;/);
const chinese = transformDocument('@a\n\n' + block('a: {type: book, title: Test, year: 2020, author: {family: 张, given: 三}}'));
assert.match(chinese, /\[张三 2020\]/);
assert.match(chinese, /\*\*张三\*\* \(2020\)/);
const hostile = block(`safe:
  type: online
  site: '<script>alert(1)</script>'
  title: '{{< spoiler >}} [link] $math$'
  url: https://example.com`);
const safe = transformDocument('@safe\n\n' + hostile);
assert.doesNotMatch(safe, /<script>|\{\{< spoiler/);
assert.match(safe, /@@math:/);
assert.match(transformDocument(block('a: {type: online, site: Test, title: Test, url: "https://example.com/{{%spoiler%}}"}')), /%7B%7B%spoiler%%7D%7D/);

const root = await createProject('references');
try {
  const directory = join(root, 'content/wiki/reference-test');
  await mkdir(directory, { recursive: true });
  const original = `---\ntitle: 引用测试\n---\n${fixture}`;
  await writeFile(join(directory, 'index.md'), original);
  const build = () => buildProject(root);
  build();
  const html = await readFile(join(root, 'public/wiki/reference-test/index.html'), 'utf8');
  assert.match(html, /href="#thm%3Amain">定理 1\.1<\/a>,/);
  assert.match(html, /data-reference="online:a">nLab a<\/a>/);
  assert.match(html, /data-reference="online:b">nLab b<\/a>/);
  assert.match(html, /<strong>nLab<\/strong> \(a\)/);
  assert.match(html, /<strong>nLab<\/strong> \(b\)/);
  assert.match(html, /href="#thm%3Amain">上述<strong>定理<\/strong><\/a>/);
  assert.match(html, /<li>\s*<p><span id="bib-book" class="bibliography-anchor"><\/span>/);
  assert.ok(html.indexOf('id="bib-online:a"') < html.indexOf('<p>这段简介'));
  assert.ok(html.indexOf('<p>这段简介') < html.indexOf('id="bib-online:b"'));
  assert.doesNotMatch(html, /raw HTML omitted|citation:\?|reference:\?|```bibliography/);
  assert.equal(await readFile(join(directory, 'index.md'), 'utf8'), original);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size);
  for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(decodeURIComponent(match[1])), `缺失引用锚点：${match[1]}`);
  const generated = await readFile(join(root, '.build/content/wiki/reference-test/index.md'), 'utf8');
  assert.match(generated, /bibliographyEntries:/);
  assert.match(generated, /citationAuthor: nLab/);
  // 目录复用正文解析后的引用；未编号标题与自定义文字的嵌套引用只能生成一层链接。
  const nested = `## 目标 {@sec:target}

## 参见 @sec:target 与 @named {@sec:references}

### **子节** @sec:target 与 $A$ {@sub}

@sub
[见 @sec:target 和 @sub](@sec:references)
[[顶点代数|参见 @sec:target]]

${block('named: {type: book, label: "EGA I", title: Example, author: "Grothendieck, A.", year: 1960}')}`;
  await writeFile(join(directory, 'index.md'), `---\ntitle: 嵌套引用\n---\n${nested}`);
  build();
  const nestedHtml = await readFile(join(root, 'public/wiki/reference-test/index.html'), 'utf8');
  const toc = nestedHtml.match(/<nav id="TableOfContents"[^>]*>([\s\S]*?)<\/nav>/)[1];
  assert.match(toc, /<span class="toc-section-number directory-number">2<\/span> <span class="toc-item-title directory-item-title">参见 第 1 节 与 EGA I/);
  assert.equal((toc.match(/<a /g) ?? []).length, 3);
  assert.doesNotMatch(toc, /reference_section|reference:\?|citation:\?/);
  assert.match(nestedHtml, /href="#[^"]+"><span class="toc-item-title directory-item-title"><strong>子节<\/strong> 第 1 节 与 <span class="math-rendered"/);
  assert.match(nestedHtml, /href="#[^"]+">见 第 1 节 和 <strong>子节<\/strong> 第 1 节 与/);
  assert.match(nestedHtml, /href="\/wiki\/[^\"]+" class="wiki-link">参见 第 1 节<\/a>/);
  assert.doesNotMatch(nestedHtml, /<a\b[^>]*>(?:(?!<\/a>)[\s\S])*<a\b/);
  assert.match(nestedHtml, /\[<strong>EGA I<\/strong>\] <strong>Grothendieck,<\/strong> A\. \(1960\)/);
  const translatedPath = join(root, 'i18n/zh-cn.yaml');
  const translations = await readFile(translatedPath, 'utf8');
  await writeFile(translatedPath, translations.replace('第 {{ .Number }} 节', 'Section {{ .Number }}'));
  build();
  const english = await readFile(join(root, 'public/wiki/reference-test/index.html'), 'utf8');
  assert.match(english.match(/<nav id="TableOfContents"[^>]*>([\s\S]*?)<\/nav>/)[1], /<span class="toc-section-number directory-number">2<\/span> <span class="toc-item-title directory-item-title">参见 Section 1 与 EGA I/);
  await writeFile(translatedPath, translations);
  assert.throws(() => transformDocument('### A @b {@a}\n\n### B @a {@b}'), /循环引用/);
  // 文献锚点参与现有 Hugo 标题冲突检查。
  await writeFile(join(directory, 'index.md'), `---\ntitle: 引用测试\n---\n## bib-book\n\n${first}`);
  assert.throws(build, /引用标签与标题自动锚点重复/);
  // 脚注定义中的引用与百科链接照常转换；引用式链接定义保持原样。
  const footnote = transformDocument('正文[^1]。\n\n[^1]: 见 [@fn, 命题 1] 与 [[群]]。\n\n[x]: https://example.com/[[群]]\n\n' + block('fn: {type: book, title: Footnote book, author: Ann Lee, year: 2017}'));
  assert.match(footnote, /^\[\^1\]: 见 &#91;\[Lee 2017\]\(citation:\?id=bib-fn&key=fn\), 命题 1&#93; 与 \[群\]\(wiki:/m);
  assert.match(footnote, /^\[x\]: https:\/\/example\.com\/\[\[群\]\]$/m);
  console.log('统一 @ 引用、作者排版、自定义文献标签、多块消歧、代码保护、脚注内引用、目录及嵌套引用验证通过');
} finally { await rm(root, { recursive: true, force: true }); }
