import assert from 'node:assert/strict';
import { createBook, createProcessor, inspectDocument, renderDocument } from './zh.mjs';

// A book: pages added in reading order share labels, numbering and bibliography; each is then rendered.
const processor = createProcessor({ resolvePageLink: key => ({ url: `/${key}/` }) });
const formatSectionReference = (number, depth) => depth === 1 ? `第 ${number} 章` : `第 ${number} 节`;
const book = processor.book({ formatSectionReference });
const first = book.add('{@ch1}\n\n## 群 {@groups}\n\n::: theorem* [Lagrange $|G|$] {@lagrange}\n见 @cyclic 与 @smith。\n:::\n\n```math {@orbit}\n|G| = |Gx|\\,|G_x|\n```\n', { key: 'algebra/1', title: '群论', position: [1], depth: 1, file: '1.md' });
const second = book.add('{@ch2}\n\n## 环\n\n::: lemma {@cyclic}\n乙\n:::\n\n由 @lagrange、@ch1、@groups、@orbit 与 @other。见 @smith 与 @jones。\n\n```bibliography\nsmith: {type: book, title: A, author: Alice Smith, year: 2020}\njones: {type: book, title: B, author: Alice Smith, year: 2020}\n```\n', { key: 'algebra/2', title: '环论', position: [2], depth: 1, file: '2.md' });
book.declare('other', { text: '定理 9.1', number: '9.1', page: 'elsewhere' });

// The pages' numbers run on: the second page's lemma is 2.1.1, its sections numbered within the page's number.
const html = book.render(second).html;
assert.match(html, /<p class="bm-envtitle">引理 2\.1\.1<\/p>/);
assert.match(html, /<a href="\/algebra\/1\/#lagrange">定理（Lagrange <span class="bm-math-rendered"/, 'a reference to another page: its address, an unnumbered environment\'s title rendered from that page');
assert.match(html, /<a href="\/algebra\/1\/#page-title">第 1 章<\/a>/, 'a page\'s label, shown by formatSectionReference at its depth');
assert.match(html, /<a href="\/algebra\/1\/#%E7%BE%A4">第 1\.1 节<\/a>/);
assert.match(html, /<a href="\/algebra\/1\/#orbit">\(1\.1\.1\)<\/a>/);
assert.match(html, /<a href="\/elsewhere\/#other">定理 9\.1<\/a>/, 'a declared label');
// The bibliography is the book's: Smith 2020a and 2020b, cited from either page.
assert.match(html, /Smith 2020a.*Smith 2020b/s);
const firstHTML = book.render(first).html;
assert.match(firstHTML, /<a href="\/algebra\/2\/#cyclic">引理 2\.1\.1<\/a>/, 'a reference to a later page');
assert.match(firstHTML, /<a href="\/algebra\/2\/#bib-smith" class="bm-citation" data-reference="smith">Smith 2020a<\/a>/);
assert.deepEqual([first.headingNumbers.last, [...first.headingNumbers.taken]], [1, ['1']], 'the numbers its level-two headings took');
// Results as processor.render gives them.
assert.deepEqual(book.render(second).labels.map(label => label.anchor), ['page-title', 'cyclic', 'bib-smith', 'bib-jones']);
// No page after the pages are transformed; every page has a key; labels are the book's.
assert.throws(() => book.add('x', { key: 'algebra/3' }), /after its pages were transformed/);
assert.throws(() => processor.book().add('x'), /needs a key/);
const twice = processor.book();
twice.add('::: theorem {@same}\n甲\n:::', { key: 'a', file: 'a.md' });
assert.throws(() => twice.add('::: theorem {@same}\n乙\n:::', { key: 'b', file: 'b.md' }), /b\.md:1: .*same.*a\.md:1/);

// The book's numbering (numbering.mjs's format), and a page's own over it.
const numbered = processor.book({ numbering: { theorems: { depth: 0 } } });
const page = numbered.add('::: theorem\n甲\n:::\n\n## 节\n\n::: theorem\n乙\n:::', { key: 'p', position: [3] });
const own = numbered.add('## 节\n\n::: theorem\n丙\n:::', { key: 'q', position: [4], numbering: { theorems: { depth: 1 } } });
assert.deepEqual([...numbered.render(page).html.matchAll(/bm-envtitle">定理 ([\d.]+)/g)].map(match => match[1]), ['3.1', '3.2']);
assert.match(numbered.render(own).html, /bm-envtitle">定理 4\.1\.1/);

// The syntax layer's book: documents, for a site that renders them itself; its labels, for listing them.
const syntax = createBook();
const a = syntax.add('::: theorem {@t}\n甲\n:::\n\n::: lemma* [Zorn  引理] {@zorn}\n乙\n:::\n\n```bibliography\nbook: {type: book, title: T, author: Alice Smith, year: 2020}\n```\n', { key: 'x' });
const b = syntax.add('见 @t。', { key: 'y' });
assert.equal(inspectDocument(syntax.transform(b)), '见 [reference](⟦reference id="t" text="定理 1" page="x"⟧)。');
assert.ok(syntax.transform(a).markdown);
syntax.declare('far', { text: '定理 9', page: 'z' });
assert.deepEqual(syntax.labels(), [
  { name: 't', kind: 'environment', page: 'x', file: '<正文>', line: 1, anchor: 't', text: '定理 1' },
  { name: 'zorn', kind: 'environment', page: 'x', file: '<正文>', line: 5, anchor: 'zorn', text: '引理 [Zorn 引理]' },
  { name: 'book', kind: 'bibliography', page: 'x', file: '<正文>', line: 10, anchor: 'bib-book', text: 'Smith 2020' },
  { name: 'far', kind: 'other', page: 'z', file: 'z', line: undefined, anchor: 'far', text: '定理 9' },
]);

// A page on its own takes the same: key and title (its {@label}), numbering.
assert.match(renderDocument('{@me}\n\n## 节\n\n::: theorem\n甲\n:::\n\n见 @me。', { key: 'me', title: '本页', numbering: { theorems: { depth: 0 } } }).html,
  /bm-envtitle">定理 1<\/p>[\s\S]*<a href="#page-title">本页<\/a>/);

console.log('book: passed');
