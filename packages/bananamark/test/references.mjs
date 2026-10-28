import assert from 'node:assert/strict';
import { bibliographyBlock as block, firstBibliography as first, secondBibliography as second, referenceFixture as fixture } from './fixtures.mjs';
import { transformDocument as zhDocument } from './zh.mjs';
import { inspectDocument } from 'bananamark/internal/nodes.mjs';
import { normalizeNames as anyNames, prepareBibliography as anyBibliography } from 'bananamark/internal/bibliography.mjs';
import { zh as inChinese } from './zh.mjs';

const transform = zhDocument, normalizeNames = inChinese(anyNames), prepareBibliography = inChinese(anyBibliography);
import { validReferenceName } from 'bananamark/internal/markup.mjs';


// The document written out (inspectDocument): nodes as ⟦type field="…"⟧.
const transformDocument = (source, options) => inspectDocument(transform(source, options));
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

const convertedDocument = transform(fixture), { bibliography: entries, labels: targets } = convertedDocument.meta;
const converted = inspectDocument(convertedDocument);
assert.match(converted, /\[Smith 2020a\]\(⟦citation /);
assert.match(converted, /第一同构定理（\[1\.1\]\(⟦reference id="thm:main"⟧\)）/, '@-label shows only the number');
assert.throws(() => transformDocument('@-book\n\n```bibliography\nbook:\n  type: book\n  title: T\n```\n'), /只引用编号/);
assert.match(converted, /\[Smith 2020b\]\(⟦citation /);
assert.match(converted, /\[Smith–Jones 2021\]\(⟦citation /);
assert.match(converted, /\[张三 2022\]\(⟦citation /);
assert.match(converted, /\[Smith 预印本\]\(⟦citation id="bib-preprint/);
assert.match(converted, /\*\*Jones\*\*, Carol⟦bibliographySpanEnd⟧ \(2019\)\. \*A thesis\*\. PhD thesis, University of Edinburgh\./);
assert.doesNotMatch(converted, /Smith 2023|nLab 2024/);
assert.match(converted, /\[nLab a\]\(⟦citation /);
assert.match(converted, /\[nLab b\]\(⟦citation /);
assert.match(converted, /\*\*nLab\*\* \(a\)/);
assert.match(converted, /\*\*nLab\*\* \(b\)/);
assert.match(converted, /\*\*Smith\*\*, Alice⟦bibliographySpanEnd⟧ \(2020a\)/);
assert.doesNotMatch(converted, /\*\*Smith, Alice\*\*|Preprint\./);
assert.match(converted, /class="links"⟧\[doi\]\(https:\/\/doi\.org\/10\.1234\/example\)⟦bibliographySpanEnd⟧/);
assert.match(converted, /class="links"⟧\[arXiv:2101\.00001\]/);
assert.match(converted, /Test Journal/);
assert.match(converted, /Collected papers/);
assert.match(converted, /https:\/\/example.com\/page_%28one%29/);
assert.match(converted, /⟦reference id="thm:main" caption=/);
assert.match(converted, /## 第一节 ⟦heading id="第一节" classes=\["accent"\] number="1"⟧/);
assert.equal(entries.length, 8);
assert.deepEqual(entries[0].author, [{ family: 'Smith', given: 'Alice' }]);
assert.equal(entries.find(entry => entry.key === 'preprint').year, '2023');
assert.equal(targets.find(target => target.anchor === 'bib-book').kind, 'bibliography');
assert.ok(converted.indexOf('First online page') < converted.indexOf('这段简介'));
assert.ok(converted.indexOf('这段简介') < converted.indexOf('Second online page'));
assert.equal((converted.match(/^⟦bibliographyEntry kind="entry" id=/gm) ?? []).length, 8);

// 标点允许在标签内部；连续的末尾标点原样留在正文。
const unusual = `thm:a,b.c;d:e'f"g`;
const punctuation = transformDocument(`@${unusual},.;:'" @thm:中文。 {@${unusual}}\n\n::: theorem {@${unusual}}\n内容\n:::\n::: theorem {@thm:中文}\n内容\n:::`);
assert.match(punctuation, /\),\.;:'" /);
assert.match(punctuation, /\)。 /);
assert.ok(punctuation.includes(`id=${JSON.stringify(unusual)}`));
assert.match(transformDocument(`见{@thm:中文}。\n\n::: theorem {@thm:中文}\n内容\n:::`), /^见\[reference\]\(⟦reference id="thm:中文" text=/);
// 文献标题中的行内公式照常渲染，其余文字仍按普通文字转义。
const mathTitle = transformDocument(block("m:\n  type: article\n  title: '$\\infty$-Categories *in* Topology'\n  author: A B\n  year: 2020"));
assert.match(mathTitle, /⟦math tex="\\\\infty"⟧-Categories \\\*in\\\* Topology/);
// 范围写法 @a–@b、@a-@b：末尾的连接号、连字符属于正文，标签在其前结束。
assert.match(transformDocument('式 @eq:a-@eq:b\n\n```math {@eq:a}\nx\n```\n\n```math {@eq:b}\ny\n```'), /\)-\[/);
assert.throws(() => transformDocument('```math {@eq:a-}\nx\n```'));
assert.match(transformDocument('式 @eq:a–@eq:b\n\n```math {@eq:a}\nx\n```\n\n```math {@eq:b}\ny\n```'), /\)–\[/);
// 标题标签不覆盖由标题计算的 HTML ID。
assert.match(transformDocument('## 标题 {@h}\n@h'), /id="标题"/);

// Citations anywhere, brackets around them being text: a note, several citations, other words.
const bracketed = transformDocument('[@book, §2; @otherbook 等] 与 [参见 @book]\n\n' + first + second);
assert.match(bracketed.split('\n')[0], /^\[\[Smith 2020a\]\(⟦citation [^)]*\), §2; \[Smith 2020b\]\(⟦citation [^)]*\) 等\] 与 \[参见 \[Smith 2020a\]\(⟦citation [^)]*\)\]$/);
const note = transformDocument('[@book, **附注** $x;y$ [文字](https://example.com); @otherbook, `a;b` [a,b]]\n\n' + first + second);
assert.match(note, /\*\*附注\*\* ⟦math /);
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
assert.match(transformDocument('$@missing$'), /^⟦math /);

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
assert.match(repeatedPreprints, /\*\*Smith\*\*, Alice⟦bibliographySpanEnd⟧ \(⟦bibliographySpan lang="zh-cn"⟧预印本⟦bibliographySpanEnd⟧ a\)/);
const abbreviated = transformDocument('@a @b\n\n' + block('a: {type: book, title: First, year: 2020, author: [Alice Smith, Bob Jones, Carol White]}\nb: {type: book, title: Second, year: 2020, author: [Alice Smith, Dave Brown, Eve Green]}'));
assert.match(abbreviated, /\[Smith 等, 2020a\]/);
assert.match(abbreviated, /\[Smith 等, 2020b\]/);
const labelled = transformDocument('@ega\n\n' + block('ega: {type: book, label: "EGA I", title: Example, author: "Grothendieck, A.", year: 1960, doi: test, arxiv: test, zbmath: test}'));
assert.match(labelled, /\[EGA I\]\(⟦citation /);
assert.doesNotMatch(labelled, /\[Grothendieck 1960\]/);
// The label leads, the authors after it not bold; the identifiers are links in one group.
assert.match(labelled, /class="label" boundary=true⟧EGA I⟦bibliographySpanEnd⟧⟦bibliographySpan class="names"⟧Grothendieck, A\.⟦bibliographySpanEnd⟧ \(1960\)/);
assert.match(labelled, /\[doi\]\([^)]+\) · \[arXiv:test\]\([^)]+\) · \[zbMATH\]/);
const duplicateLabels = transformDocument('@a @b\n\n' + block('a: {type: book, title: A, label: Same}\nb: {type: book, title: B, label: Same}'));
assert.match(duplicateLabels, /\[Same a\]/);
assert.match(duplicateLabels, /\[Same b\]/);
assert.match(duplicateLabels, /class="label" boundary=true⟧Same a⟦bibliographySpanEnd⟧/);
const chinese = transformDocument('@a\n\n' + block('a: {type: book, title: Test, year: 2020, author: {family: 张, given: 三}}'));
assert.match(chinese, /\[张三 2020\]/);
assert.match(chinese, /⟦bibliographySpan lang="zh-cn"⟧\*\*张三\*\*⟦bibliographySpanEnd⟧⟦bibliographySpanEnd⟧ \(2020\)/);
assert.match(converted, /\*\*nLab\*\* \(a\)\. First online page\. ⟦bibliographySpan lang="zh-cn"⟧作者：⟦bibliographySpanEnd⟧Actual Contributor\. ⟦bibliographySpan class="links"⟧\[example\.com\]\(https:\/\/example\.com\/page_%28one%29\) · ⟦bibliographySpan lang="zh-cn"⟧访问于 2026-10-02/);
const online = transformDocument('@a @b @c\n\n' + block(`a: {type: online, site: MacTutor, title: A, url: 'https://example.com/a', author: ["J. J. O'Connor", E. F. Robertson]}
b: {type: online, site: Blog, title: B, url: 'https://example.com/b', author: ['Tao, Terence']}
c: {type: online, site: Wiki, title: C, url: 'https://example.com/c', author: [Alice Smith, 张三, Bob Jones]}`));
assert.match(online, /\*\*MacTutor\*\*\. A\. ⟦bibliographySpan lang="zh-cn"⟧作者：⟦bibliographySpanEnd⟧J\. J\. O'Connor; E\. F\. Robertson\./);
assert.match(online, /\*\*Blog\*\*\. B\. ⟦bibliographySpan lang="zh-cn"⟧作者：⟦bibliographySpanEnd⟧Terence Tao\./);
assert.match(online, /⟦bibliographySpanEnd⟧Alice Smith、⟦bibliographySpan lang="zh-cn"⟧张三⟦bibliographySpanEnd⟧、Bob Jones\./);
const edited = transformDocument('@a @b\n\n' + block(`a: {type: book, title: Lectures, year: 1863, publisher: Vieweg, author: Peter Dirichlet, editor: Richard Dedekind}
b: {type: book, title: Collected, year: 1900, editor: [Alice Smith, 张三]}`));
assert.match(edited, /\*\*Dirichlet\*\*, Peter⟦bibliographySpanEnd⟧ \(1863\)\. \*Lectures\*\. ⟦bibliographySpan lang="zh-cn"⟧编者：⟦bibliographySpanEnd⟧Richard Dedekind\. Vieweg\./);
assert.match(edited, /\*\*Smith\*\*, Alice、⟦bibliographySpan lang="zh-cn"⟧\*\*张三\*\*⟦bibliographySpanEnd⟧⟦bibliographySpanEnd⟧ \(1900\)\. \*Collected\*\.\n/);
const hostile = block(`safe:
  type: online
  site: '<script>alert(1)</script>'
  title: '{{< spoiler⟧ [link] $math$'
  url: https://example.com`);
const safe = transformDocument('@safe\n\n' + hostile);
assert.doesNotMatch(safe, /<script>|\{\{< spoiler/);
assert.match(safe, /⟦math /);
assert.match(transformDocument(block('a: {type: online, site: Test, title: Test, url: "https://example.com/{{%spoiler%}}"}')), /%7B%7B%spoiler%%7D%7D/);

// Versions: a translation shown under the original, a later edition cited by its own key; the original's title
// translated in brackets, its language named.
const end = '⟦bibliographySpanEnd⟧', zh = text => `⟦bibliographySpan lang="zh-cn"⟧${text}${end}`;
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
assert.match(versions, /\[Kulish–Reshetikhin 1981\]\(⟦citation id="bib-kr/);
assert.match(versions, /\[Manin 2018\]\(⟦citation id="bib-m18" key="m18"⟧\)/);
assert.ok(versions.includes(`(1981). &#91;Quantum linear problem&#93; (${zh('俄文')}). *Zapiski LOMI*.`));
assert.ok(versions.includes(`⟦bibliographyEntry kind="version" lang="en"⟧\n\n⟦bibliographySpan class="relation" lang="zh-cn"⟧英译${end} (1983). *J. Soviet Math.*. ⟦bibliographySpan class="links"⟧[doi]`));
assert.ok(versions.includes(`⟦bibliographyEntry kind="version" id="bib-m18" lang="en"⟧\n\n⟦bibliographySpan class="relation" lang="zh-cn"⟧第 2 版${end} (2018). Springer.`));
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
assert.match(chineseEntry, /lang="zh-cn"⟧\n\n⟦bibliographySpan class="names"⟧\*\*王元\*\*⟦bibliographySpanEnd⟧ \(1958\)。 论筛法。 《数学学报》 8，413--429。 见 \[筛法\]\(⟦wiki target="[^)]+\) 与 \[Drinfeld 1987\]\(⟦citation [^)]+\)。/);
// Names are separated by 、 when any of them is Chinese, otherwise by semicolons, whatever the entry's language.
const chineseNames = transformDocument('@z @o\n\n' + block(`z: {type: book, title: 数学, author: [张三, 李四], year: 2000}
o: {type: online, site: MacTutor, title: 传记, url: 'https://example.com', author: ["J. J. O'Connor", E. F. Robertson]}`));
assert.match(chineseNames, /\*\*张三\*\*、\*\*李四\*\*/);
assert.match(transformDocument('@m\n\n' + block('m: {type: book, title: T, author: [Alice Smith, 张三], year: 2001}')), /\[Smith、张三 2001\]/);
assert.match(chineseNames, /作者：J\. J\. O'Connor; E\. F\. Robertson。/);
// Notes are inline Markdown, checked at their place in the source; Chinese notes in Western entries are typeset as Chinese.
const notes = transformDocument('@n\n\n' + block("n: {type: book, title: T, year: 2000, note: 原文为俄文, howpublished: '**Lecture** notes, $x$'}"));
assert.ok(notes.includes(`**Lecture** notes, ⟦math tex="x"⟧, ${zh('原文为俄文。')}`));
assert.throws(() => transformDocument(block('n:\n  type: book\n  title: T\n  note: 见 @missing'), { file: 'n.md' }), /n\.md:5: 引用标签不存在/);
// Two Chinese authors with 、; links: a PDF shows pdf, other addresses their host.
const links = transformDocument('@p\n\n' + block("p: {type: book, title: T, author: [张三, 李四], year: 2000, url: 'https://www.example.org/a/T.PDF'}\nq: {type: book, title: U, url: 'https://www.example.org/a'}"));
assert.match(links, /\[张三、李四 2000\]/);
assert.match(links, /\[pdf\]\(https:\/\/www\.example\.org\/a\/T\.PDF\)/);
assert.match(links, /\[example\.org\]\(https:\/\/www\.example\.org\/a\)/);
// A biography for an author (the site's hook does this by name, scripts/prebuild/people.mjs); page wins over it,
// page: false keeps an author from being linked.
const linked = transformDocument('@a\n\n' + block(`a:
  type: book
  title: T
  author: ["Serre, J.-P.", {family: Borel, page: Armand Borel}, {family: Serre, given: Jean-Pierre, page: false}]
  editor: A. Borel`), { resolvePersonLink: name => ({ Serre: { target: 'Jean-Pierre Serre' }, Borel: { target: 'Armand Borel' } })[name.family] });
// Bold inside the link: ** between the names' shortcode and [ would not open emphasis (shown as **).
assert.match(linked, /⟦bibliographySpan class="names"⟧\[\*\*Serre\*\*\]\(⟦wiki target="Jean-Pierre Serre" name="Jean-Pierre Serre"⟧\), J\.-P\.; \[\*\*Borel\*\*\]\(⟦wiki target="Armand Borel"[^)]*\); \*\*Serre\*\*, Jean-Pierre/);
assert.match(linked, /编者：⟦bibliographySpanEnd⟧\[A\. Borel\]\(⟦wiki target="Armand Borel"/);
// page names an article as a wiki link does: one that does not exist is a missing article's link, reported as such.
const missingDocument = transform(block("a: {type: book, title: T, author: {family: X, page: \"O'Nan 群\"}}"));
const missingPage = inspectDocument(missingDocument), reported = missingDocument.meta.wikiLinks.map(({ target, line }) => [target, line]);
assert.match(missingPage, /\[\*\*X\*\*\]\(⟦wiki target="O’Nan 群" name="O’Nan 群"⟧\)/);
assert.deepEqual(reported, [['O’Nan 群', 2]]);
// Links elsewhere: a site may give an address.
assert.match(transformDocument('@a\n\n' + block('a: {type: book, title: T, author: X Y}'), { resolvePersonLink: () => ({ url: 'https://example.org/x y' }) }), /\[\*\*Y\*\*\]\(https:\/\/example\.org\/x%20y\), X/);
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

console.log('references: passed');
