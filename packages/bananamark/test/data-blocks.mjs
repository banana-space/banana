import assert from 'node:assert/strict';
import { createProcessor, transformDocument } from './zh.mjs';

// Data blocks (src/syntax/data-blocks.mjs): fenced blocks the caller names and reads, left out of the page.
const sources = {
  read(source, { lang, fail }) {
    const entries = source.split('\n').filter(Boolean).map((line, index, lines) => {
      const [site, url] = line.split(/:\s+/);
      if (!url) fail(`no address for ${site}`, lines.slice(0, index).join('\n').length + (index ? 1 : 0));
      return { site, url };
    });
    return { lang, entries };
  },
};
const notes = { read: source => source.trim(), outsideEnvironments: true };
const dataBlocks = { sources, notes };

const document = transformDocument('前段\n\n```sources\nSerre: 某书\n```\n\n中段\n\n~~~~notes\n一\n~~~~\n\n```notes\n二\n```\n\n后段', { dataBlocks, lang: 'en' });
assert.deepEqual(document.meta.data, { sources: [{ lang: 'en', entries: [{ site: 'Serre', url: '某书' }] }], notes: ['一', '二'] });
assert.doesNotMatch(document.markdown, /```|~~~|Serre|一|二/);
assert.match(document.markdown, /前段[\s\S]*中段[\s\S]*后段/);

// Every name is there even without a block; without dataBlocks such a fence is ordinary code.
assert.deepEqual(transformDocument('正文', { dataBlocks }).meta.data, { sources: [], notes: [] });
assert.match(transformDocument('```sources\nSerre: x\n```').markdown, /```sources/);
// Inside another code block, a fence is the outer block's text.
assert.match(transformDocument('````markdown\n```notes\n一\n```\n````', { dataBlocks }).markdown, /```notes/);

// Errors: the fence, the position, and the reader's own errors at the page's lines.
assert.throws(() => transformDocument('```notes x\n一\n```', { dataBlocks }), /notes 块不接受围栏参数/);
assert.throws(() => transformDocument('```notes\n一\n', { dataBlocks }), /notes 块缺少结束围栏/);
assert.throws(() => transformDocument('::: theorem\n```notes\n一\n```\n:::', { dataBlocks }), /notes 块必须放在定理\/证明环境之外/);
assert.doesNotThrow(() => transformDocument('::: theorem\n```sources\na: b\n```\n:::', { dataBlocks }));
assert.throws(() => transformDocument('```sources\na: b\nSerre\n```', { dataBlocks, file: 'page.md', lineOffset: 3 }), error => error.message === 'page.md:6: no address for Serre' && error.line === 6);
assert.throws(() => transformDocument('```notes x\n```', { dataBlocks, locale: 'en' }), /a notes block takes no parameters/);
assert.throws(() => transformDocument('', { dataBlocks: { math: notes } }), /不能是 math/);
assert.throws(() => transformDocument('', { dataBlocks: { 'two words': notes } }), /数据块的名称/);
assert.throws(() => transformDocument('', { dataBlocks: { notes: {} } }), /缺少 read/);

// Through a processor and a book: the result's data.
const processor = createProcessor({ dataBlocks });
const page = processor.render('```notes\n页\n```\n\n正文');
assert.deepEqual(page.data, { sources: [], notes: ['页'] });
assert.doesNotMatch(page.html, /页/);
const book = processor.book();
const first = book.add('```notes\n甲\n```\n\n第一页', { key: 'a', title: 'A' });
const second = book.add('第二页', { key: 'b', title: 'B' });
assert.deepEqual(book.render(first).data.notes, ['甲']);
assert.deepEqual(book.render(second).data.notes, []);
assert.deepEqual(createProcessor().render('正文').data, {});

console.log('data blocks: passed');
