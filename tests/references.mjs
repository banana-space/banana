import { createProject, buildProject } from './helpers/project.mjs';
import assert from 'node:assert/strict';
import { mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';

import { transformDocument } from '../scripts/prebuild/structure.mjs';
import { normalizeNames, prepareBibliography, personIndex } from '../scripts/prebuild/bibliography.mjs';
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
assert.match(converted, /\[Smith–Jones 2021\]\(citation:/);
assert.match(converted, /\[张三 2022\]\(citation:/);
assert.match(converted, /\[Smith 预印本\]\(citation:\?id=bib-preprint/);
assert.match(converted, /\*\*Jones\*\*, Carol\{\{< _bibliography-span-end >\}\} \(2019\)\. \*A thesis\*\. PhD thesis, University of Edinburgh\./);
assert.doesNotMatch(converted, /Smith 2023|nLab 2024/);
assert.match(converted, /\[nLab a\]\(citation:/);
assert.match(converted, /\[nLab b\]\(citation:/);
assert.match(converted, /\*\*nLab\*\* \(a\)/);
assert.match(converted, /\*\*nLab\*\* \(b\)/);
assert.match(converted, /\*\*Smith\*\*, Alice\{\{< _bibliography-span-end >\}\} \(2020a\)/);
assert.doesNotMatch(converted, /\*\*Smith, Alice\*\*|Preprint\./);
assert.match(converted, /class="links" >\}\}\[doi\]\(https:\/\/doi\.org\/10\.1234\/example\)\{\{< _bibliography-span-end >\}\}/);
assert.match(converted, /class="links" >\}\}\[arXiv:2101\.00001\]/);
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
assert.equal((converted.match(/^\{\{< _bibliography-entry id=/gm) ?? []).length, 8);

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

// Citations anywhere, brackets around them being text: a note, several citations, other words.
const bracketed = transformDocument('[@book, §2; @otherbook 等] 与 [参见 @book]\n\n' + first + second);
assert.match(bracketed.split('\n')[0], /^\[\[Smith 2020a\]\(citation:[^)]*\), §2; \[Smith 2020b\]\(citation:[^)]*\) 等\] 与 \[参见 \[Smith 2020a\]\(citation:[^)]*\)\]$/);
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
  String.raw`\@missing`, String.raw`\{@missing}`, String.raw`[\@missing; \@also-missing]`,
];
for (const source of protectedSources) assert.equal(transformDocument(source), source);
assert.match(transformDocument('$@missing$'), /^@@math:/);

for (const [source, error] of [
  ['@missing', /引用标签不存在/], ['{@missing', /缺少结束/], ['[@missing 等]', /引用标签不存在/],
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
assert.match(repeatedPreprints, /\[Smith 预印本 a\]/);
assert.match(repeatedPreprints, /\[Smith 预印本 b\]/);
assert.match(repeatedPreprints, /\*\*Smith\*\*, Alice\{\{< _bibliography-span-end >\}\} \(\{\{< _bibliography-span lang="zh" >\}\}预印本\{\{< _bibliography-span-end >\}\} a\)/);
const abbreviated = transformDocument('@a @b\n\n' + block('a: {type: book, title: First, year: 2020, author: [Alice Smith, Bob Jones, Carol White]}\nb: {type: book, title: Second, year: 2020, author: [Alice Smith, Dave Brown, Eve Green]}'));
assert.match(abbreviated, /\[Smith 等, 2020a\]/);
assert.match(abbreviated, /\[Smith 等, 2020b\]/);
const labelled = transformDocument('@ega\n\n' + block('ega: {type: book, label: "EGA I", title: Example, author: "Grothendieck, A.", year: 1960, doi: test, arxiv: test, zbmath: test}'));
assert.match(labelled, /\[EGA I\]\(citation:/);
assert.doesNotMatch(labelled, /\[Grothendieck 1960\]/);
// The label leads, the authors after it not bold; the identifiers are links in one group.
assert.match(labelled, /class="label" boundary="true" >\}\}EGA I\{\{< _bibliography-span-end >\}\}\{\{< _bibliography-span class="names" >\}\}Grothendieck, A\.\{\{< _bibliography-span-end >\}\} \(1960\)/);
assert.match(labelled, /\[doi\]\([^)]+\) · \[arXiv:test\]\([^)]+\) · \[zbMATH\]/);
const duplicateLabels = transformDocument('@a @b\n\n' + block('a: {type: book, title: A, label: Same}\nb: {type: book, title: B, label: Same}'));
assert.match(duplicateLabels, /\[Same a\]/);
assert.match(duplicateLabels, /\[Same b\]/);
assert.match(duplicateLabels, /class="label" boundary="true" >\}\}Same a\{\{< _bibliography-span-end >\}\}/);
const chinese = transformDocument('@a\n\n' + block('a: {type: book, title: Test, year: 2020, author: {family: 张, given: 三}}'));
assert.match(chinese, /\[张三 2020\]/);
assert.match(chinese, /\{\{< _bibliography-span lang="zh" >\}\}\*\*张三\*\*\{\{< _bibliography-span-end >\}\}\{\{< _bibliography-span-end >\}\} \(2020\)/);
assert.match(converted, /\*\*nLab\*\* \(a\)\. First online page\. \{\{< _bibliography-span lang="zh" >\}\}作者：\{\{< _bibliography-span-end >\}\}Actual Contributor\. \{\{< _bibliography-span class="links" >\}\}\[example\.com\]\(https:\/\/example\.com\/page_%28one%29\) · \{\{< _bibliography-span lang="zh" >\}\}访问于 2026-10-02/);
const online = transformDocument('@a @b @c\n\n' + block(`a: {type: online, site: MacTutor, title: A, url: 'https://example.com/a', author: ["J. J. O'Connor", E. F. Robertson]}
b: {type: online, site: Blog, title: B, url: 'https://example.com/b', author: ['Tao, Terence']}
c: {type: online, site: Wiki, title: C, url: 'https://example.com/c', author: [Alice Smith, 张三, Bob Jones]}`));
assert.match(online, /\*\*MacTutor\*\*\. A\. \{\{< _bibliography-span lang="zh" >\}\}作者：\{\{< _bibliography-span-end >\}\}J\. J\. O'Connor; E\. F\. Robertson\./);
assert.match(online, /\*\*Blog\*\*\. B\. \{\{< _bibliography-span lang="zh" >\}\}作者：\{\{< _bibliography-span-end >\}\}Terence Tao\./);
assert.match(online, /\{\{< _bibliography-span-end >\}\}Alice Smith、\{\{< _bibliography-span lang="zh" >\}\}张三\{\{< _bibliography-span-end >\}\}、Bob Jones\./);
const edited = transformDocument('@a @b\n\n' + block(`a: {type: book, title: Lectures, year: 1863, publisher: Vieweg, author: Peter Dirichlet, editor: Richard Dedekind}
b: {type: book, title: Collected, year: 1900, editor: [Alice Smith, 张三]}`));
assert.match(edited, /\*\*Dirichlet\*\*, Peter\{\{< _bibliography-span-end >\}\} \(1863\)\. \*Lectures\*\. \{\{< _bibliography-span lang="zh" >\}\}编者：\{\{< _bibliography-span-end >\}\}Richard Dedekind\. Vieweg\./);
assert.match(edited, /\*\*Smith\*\*, Alice、\{\{< _bibliography-span lang="zh" >\}\}\*\*张三\*\*\{\{< _bibliography-span-end >\}\}\{\{< _bibliography-span-end >\}\} \(1900\)\. \*Collected\*\.\n/);
const hostile = block(`safe:
  type: online
  site: '<script>alert(1)</script>'
  title: '{{< spoiler >}} [link] $math$'
  url: https://example.com`);
const safe = transformDocument('@safe\n\n' + hostile);
assert.doesNotMatch(safe, /<script>|\{\{< spoiler/);
assert.match(safe, /@@math:/);
assert.match(transformDocument(block('a: {type: online, site: Test, title: Test, url: "https://example.com/{{%spoiler%}}"}')), /%7B%7B%spoiler%%7D%7D/);

// Versions: a translation shown under the original, a later edition cited by its own key; the original's title
// translated in brackets, its language named.
const end = '{{< _bibliography-span-end >}}', zh = text => `{{< _bibliography-span lang="zh" >}}${text}${end}`;
const versions = transformDocument('@kr @m18 @r\n\n' + block(`kr:
  type: article
  author: [P. P. Kulish, N. Yu. Reshetikhin]
  translatedtitle: Quantum linear problem
  language: ru
  journaltitle: Zapiski LOMI
  year: 1981
  versions:
    - relation: translation
      language: en
      journaltitle: J. Soviet Math.
      year: 1983
      doi: 10.1/x
m88:
  type: book
  author: Yuri I. Manin
  title: Quantum Groups
  year: 1988
  versions:
    - {key: m18, relation: edition, edition: 2, year: 2018, publisher: Springer}
r:
  type: article
  author: Bernhard Riemann
  title: Ueber die Anzahl
  year: 1859
  versions:
    - {relation: collected, booktitle: Werke, year: 1892, pages: 145--153}
    - {relation: reprint, year: 1990, publisher: Springer}`));
assert.match(versions, /\[Kulish–Reshetikhin 1981\]\(citation:\?id=bib-kr/);
assert.match(versions, /\[Manin 2018\]\(citation:\?id=bib-m18&key=m18\)/);
assert.ok(versions.includes(`(1981). &#91;Quantum linear problem&#93; (${zh('俄文')}). *Zapiski LOMI*.`));
assert.ok(versions.includes(`{{< _bibliography-entry kind="version" lang="en" >}}\n\n{{< _bibliography-span class="relation" lang="zh" >}}英译${end} (1983). *J. Soviet Math.*. {{< _bibliography-span class="links" >}}[doi]`));
assert.ok(versions.includes(`{{< _bibliography-entry kind="version" id="${Buffer.from('bib-m18').toString('base64')}" lang="en" >}}\n\n{{< _bibliography-span class="relation" lang="zh" >}}第 2 版${end} (2018). Springer.`));
assert.ok(versions.includes(`收入${end} (1892). *Werke*, 145--153.`), 'A collected version: its volume, without 载于');
assert.ok(versions.includes(`重印${end} (1990). Springer.`));
assert.doesNotMatch(versions, /Manin\*\*, Yuri I\.[^\n]*\n\n\{\{< _bibliography-entry kind="version"[^\n]*\n\n[^\n]*Quantum Groups/, 'Inherited titles are not repeated');
// A book in a collection: 载于 and its editors; a Chinese entry with Chinese punctuation and 《》.
const chineseEntry = transformDocument('@c @w\n\n' + block(`c: {type: incollection, author: Drinfeld, title: Quantum groups, booktitle: Proceedings, editor: Andrew Gleason, year: 1987, pages: 798--820}
w:
  type: article
  author: 王元
  title: 论筛法
  journaltitle: 数学学报
  volume: 8
  year: 1958
  pages: 413--429
  note: 见 [[筛法]] 与 @c`));
assert.ok(chineseEntry.includes(`Quantum groups. ${zh('载于')} *Proceedings*, Andrew Gleason ${zh('编')}, 798--820.`));
assert.match(chineseEntry, /lang="zh" >\}\}\n\n\{\{< _bibliography-span class="names" >\}\}\*\*王元\*\*\{\{< _bibliography-span-end >\}\} \(1958\)。 论筛法。 《数学学报》 8，413--429。 见 \[筛法\]\(wiki:\?title=[^)]+\) 与 \[Drinfeld 1987\]\(citation:[^)]+\)。/);
// Names are separated by 、 when any of them is Chinese, otherwise by semicolons, whatever the entry's language.
const chineseNames = transformDocument('@z @o\n\n' + block(`z: {type: book, title: 数学, author: [张三, 李四], year: 2000}
o: {type: online, site: MacTutor, title: 传记, url: 'https://example.com', author: ["J. J. O'Connor", E. F. Robertson]}`));
assert.match(chineseNames, /\*\*张三\*\*、\*\*李四\*\*/);
assert.match(transformDocument('@m\n\n' + block('m: {type: book, title: T, author: [Alice Smith, 张三], year: 2001}')), /\[Smith、张三 2001\]/);
assert.match(chineseNames, /作者：J\. J\. O'Connor; E\. F\. Robertson。/);
// Notes are inline Markdown, checked at their place in the source; Chinese notes in Western entries are typeset as Chinese.
const notes = transformDocument('@n\n\n' + block("n: {type: book, title: T, year: 2000, note: 原文为俄文, howpublished: '**Lecture** notes, $x$'}"));
assert.ok(notes.includes(`**Lecture** notes, @@math:eA==:math@@, ${zh('原文为俄文。')}`));
assert.throws(() => transformDocument(block('n:\n  type: book\n  title: T\n  note: 见 @missing'), { file: 'n.md' }), /n\.md:5: 引用标签不存在/);
// Two Chinese authors with 、; links: a PDF shows pdf, other addresses their host.
const links = transformDocument('@p\n\n' + block("p: {type: book, title: T, author: [张三, 李四], year: 2000, url: 'https://www.example.org/a/T.PDF'}\nq: {type: book, title: U, url: 'https://www.example.org/a'}"));
assert.match(links, /\[张三、李四 2000\]/);
assert.match(links, /\[pdf\]\(https:\/\/www\.example\.org\/a\/T\.PDF\)/);
assert.match(links, /\[example\.org\]\(https:\/\/www\.example\.org\/a\)/);
// Authors link to biographies: the full name, or the family name with compatible given names, when one page fits.
const people = personIndex([
  { key: 'Armand Borel', names: ['Armand Borel'] }, { key: 'Émile Borel', names: ['Émile Borel'] },
  { key: 'Jean-Pierre Serre', names: ['Jean-Pierre Serre', 'Serre'] }, { key: 'Peter Dirichlet', names: ['Peter Dirichlet', 'Johann Peter Gustav Lejeune Dirichlet'] },
  { key: 'Georges de Rham', names: ['Georges de Rham'] }, { key: '丘成桐', names: ['丘成桐', 'Shing-Tung Yau'] },
], new Set(['Armand Borel', 'Émile Borel', 'Jean-Pierre Serre', 'Peter Dirichlet', 'Georges de Rham', '丘成桐', '群']));
const match = name => people.match(normalizeNames(name, fail)[0]);
assert.equal(match('A. Borel'), 'Armand Borel');
assert.equal(match('E. Borel'), 'Émile Borel');
assert.equal(match('Borel'), undefined, 'Two pages fit: no link');
assert.equal(match('J.-P. Serre'), 'Jean-Pierre Serre');
assert.equal(match('Jean-Pierre H. Serre'), 'Jean-Pierre Serre', 'A middle initial may be missing from the page');
assert.equal(match('Pierre Serre'), undefined, 'The first given name must fit');
assert.equal(match('P. G. L. Dirichlet'), 'Peter Dirichlet');
assert.equal(match({ family: 'de Rham', given: 'G.' }), 'Georges de Rham');
assert.equal(match('Yau, Shing-Tung'), '丘成桐');
assert.equal(match('丘成桐'), '丘成桐');
assert.equal(match('Alice Borel'), undefined);
const linked = transformDocument('@a\n\n' + block(`a:
  type: book
  title: T
  author: ["Serre, J.-P.", {family: Borel, page: Armand Borel}, {family: Serre, given: Jean-Pierre, page: false}]
  editor: A. Borel`), { people });
// Bold inside the link: ** between the names' shortcode and [ would not open emphasis (shown as **).
assert.match(linked, /\{\{< _bibliography-span class="names" >\}\}\[\*\*Serre\*\*\]\(wiki:\?title=Jean-Pierre%20Serre&name=Jean-Pierre%20Serre\), J\.-P\.; \[\*\*Borel\*\*\]\(wiki:\?title=Armand%20Borel[^)]*\); \*\*Serre\*\*, Jean-Pierre/);
assert.match(linked, /编者：\{\{< _bibliography-span-end >\}\}\[A\. Borel\]\(wiki:\?title=Armand%20Borel/);
assert.throws(() => transformDocument(block('a: {type: book, title: T, author: {family: X, page: Nobody}}'), { people }), /a: page 指向的条目不存在：Nobody/);
// An article's bibliography does not link its own subject to it.
const own = transformDocument('@a\n\n' + block('a: {type: book, title: T, author: J.-P. Serre, editor: A. Borel}'), { people: { ...people, self: 'Jean-Pierre Serre' } });
assert.match(own, /names" >\}\}\*\*Serre\*\*, J\.-P\./);
assert.match(own, /\[A\. Borel\]\(wiki:/);
for (const [source, error] of [
  [block('a: {type: book, title: T, versions: []}'), /versions 必须/],
  [block('a: {type: book, title: T, versions: [{year: 2000}]}'), /a: versions 1: relation 必须/],
  [block('a: {type: book, title: T, versions: [{relation: copy}]}'), /relation 必须/],
  [block('a: {type: book, title: T, versions: [{relation: reprint, versions: []}]}'), /不能再有 versions/],
  [block('a: {type: book, title: T, versions: [{relation: reprint, label: X}]}'), /有 key 时才能有 label/],
  [block('a: {type: book, title: T, language: Russian}'), /language 必须/],
  [block('a: {type: book, title: T, author: {family: X, page: 1}}'), /page 必须/],
  [block('a: {type: book, title: T, versions: [{key: a, relation: reprint}]}'), /引用标签重复/],
]) assert.throws(() => transformDocument(source), error);

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
  assert.match(html, /<div class="bibliography-entry" id="bib-book" lang="en">\s*<p><span class="bibliography-names"><strong>Smith<\/strong>, Alice<\/span> \(2020a\)/);
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
  assert.match(nestedHtml, /<span class="bibliography-label" data-typography-boundary="true">EGA I<\/span><span class="bibliography-names">Grothendieck, A\.<\/span> \(1960\)/);
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
  assert.match(footnote, /^\[\^1\]: 见 \[\[Lee 2017\]\(citation:\?id=bib-fn&key=fn\), 命题 1\] 与 \[群\]\(wiki:/m);
  assert.match(footnote, /^\[x\]: https:\/\/example\.com\/\[\[群\]\]$/m);
  console.log('统一 @ 引用、作者排版与作者链接、文献版本与附注、自定义文献标签、多块消歧、代码保护、脚注内引用、目录及嵌套引用验证通过');
} finally { await rm(root, { recursive: true, force: true }); }
