import assert from 'node:assert/strict';
import { BananamarkError, createProcessor, defineDialect, renderDocument, renderDocumentAsync, transformFragment } from 'bananamark';

// The entry points' options: what each takes (others are errors), what a page's fields reach, plugins, images'
// addresses, a book's language, the dialect's layer alone (transformFragment), and the caller's messages.

// A misspelled option is an error rather than nothing; renderDocument's others are the page's fields.
assert.throws(() => defineDialect({ wikilinks: true }), error => error instanceof BananamarkError && error.code === 'option_unknown' && error.message === 'defineDialect has no option wikilinks');
assert.throws(() => createProcessor({ wikilinks: true }), error => error.code === 'option_unknown' && error.params.entry === 'createProcessor');
assert.throws(() => transformFragment('x', { page: { key: 'a' } }), error => error.code === 'option_unknown' && error.params.name === 'page');
assert.equal(renderDocument('x', { course: 'algebra' }).html, '<p>x</p>\n');
assert.throws(() => createProcessor({ plugins: [{ name: 'p' }] }), error => error.code === 'plugin_invalid' && error.params.name === 'p');
assert.throws(() => createProcessor({ plugins: [null] }), error => error.code === 'plugin_invalid');

// A page's fields, the caller's own among them, reach the hooks.
{
  const seen = [];
  renderDocument('[a](x) ![b](c.png)', {
    course: 'algebra', file: 'f.md',
    decorateLink: (destination, page) => { seen.push(['link', destination, page.course, page.file]); },
    resolveImage: (path, page) => { seen.push(['image', path, page.course]); },
  });
  assert.deepEqual(seen, [['link', 'x', 'algebra', 'f.md'], ['image', 'c.png', 'algebra']]);
}
// pageAnchor: the page's title is the anchor page-title, which a heading then does not take.
assert.equal(renderDocument('{@top}\n\n## page-title\n\n@top', { pageAnchor: true, key: 'p', title: 'T' }).html,
  '<h2 id="page-title-1"><a class="bm-heading-link" href="#page-title-1" title="Link to this section">§</a><span class="bm-section-number">1</span> page-title</h2>\n<p><a href="#page-title">T</a></p>\n');

// Plugins: in order, with the page's file, output path and language, and the processor's locale and messages;
// render() with plugins is an error; close() closes them (a plugin without close() too).
{
  const pages = [], closed = [];
  const plugin = (name, close = true) => ({ name, postprocess: (html, page) => { pages.push([name, page]); return html.replace('</p>', `${name}</p>`); }, ...(close ? { close: () => { closed.push(name); } } : {}) });
  const messages = { en: { link_to_heading: 'Link' } };
  const processor = createProcessor({ plugins: [plugin('one'), plugin('two'), plugin('three', false)], locale: 'zh-cn', messages });
  assert.equal((await processor.renderAsync('a', { file: 'f.md', outputPath: 'o/index.html', lang: 'de', course: 1 })).html, '<p>aonetwothree</p>\n');
  assert.deepEqual(pages[0], ['one', { file: 'f.md', outputPath: 'o/index.html', lang: 'de', locale: 'zh-cn', messages }]);
  assert.deepEqual(pages.map(([name]) => name), ['one', 'two', 'three']);
  assert.throws(() => processor.render('a'), /plugins \(one, two, three\)/);
  const book = processor.book();
  const handle = book.add('b', { key: 'k', file: 'k.md' });
  assert.throws(() => book.render(handle), /renderAsync/);
  assert.equal((await book.renderAsync(handle)).html, '<p>bonetwothree</p>\n');
  assert.equal(pages.at(-1)[1].file, 'k.md');
  await processor.close();
  assert.deepEqual(closed, ['one', 'two']);
  // renderDocumentAsync leaves them open.
  closed.length = 0;
  assert.equal((await renderDocumentAsync('c', { plugins: [plugin('four')] })).html, '<p>cfour</p>\n');
  assert.deepEqual(closed, []);
}

// Images: an image beside the page at resolveImage's address (its query kept), checked as a link's is; one written
// from the site's root under basePath; others as written. Addresses are encoded as links' are.
assert.match(renderDocument('![a](b%20c.png?v=1)', { resolveImage: path => `/media/${path}` }).html, /<img src="\/media\/b%20c\.png\?v=1"/);
assert.throws(() => renderDocument('![a](b.png)', { resolveImage: () => 'javascript:alert(1)' }), error => error.code === 'link_scheme');
assert.throws(() => renderDocument('![a](b.png)', { resolveImage: () => ({ url: 'b.png' }) }), error => error.code === 'link_scheme');
assert.equal(renderDocument('![a](/img/x.png) ![b](/wiki/y.png) ![c](//h/z.png) ![d](图.png)', { basePath: '/wiki/' }).html,
  '<p><img src="/wiki/img/x.png" alt="a" loading="lazy"> <img src="/wiki/y.png" alt="b" loading="lazy"> <img src="//h/z.png" alt="c" loading="lazy"> <img src="%E5%9B%BE.png" alt="d" loading="lazy"></p>\n');

// A book's pages are in the processor's language, unless a page has its own.
{
  const book = createProcessor({ lang: 'zh-cn' }).book();
  const [chinese, english] = [book.add('## 甲 {@a}\n\n@a', { key: 'x' }), book.add('## B {@b}\n\n@b', { key: 'y', lang: 'en' })];
  assert.match(book.render(chinese).html, /<a href="#%E7%94%B2">第 1 节<\/a>/);
  assert.match(book.render(english).html, /<a href="#b">Section 1<\/a>/);
}

// transformFragment: the dialect's layer alone, with its own options (checkMath, KaTeX's macros); where an error is.
{
  const katex = { macros: { '\\RR': '\\mathbb{R}' } };
  assert.throws(() => transformFragment('x\n $\\frac{1}$', { checkMath: true }), error => error instanceof BananamarkError && error.code === 'katex' && error.line === 2 && error.column === 2);
  assert.deepEqual(transformFragment('$\\RR$', { checkMath: true, katex }).nodes, [{ type: 'math', tex: '\\RR', display: false }]);
  assert.throws(() => transformFragment('$\\RR$', { checkMath: true }), error => error.code === 'katex');
}

// The caller's messages: its table for the locale, then bananamark's, then English (the caller's, then bananamark's).
assert.throws(() => renderDocument('@x', { locale: 'zh-cn', messages: { 'zh-cn': { other: '' }, en: { label_missing: 'none: {name}' } } }), /引用标签不存在：x/);
assert.throws(() => renderDocument('@x', { locale: 'de', messages: { de: {}, en: { label_missing: 'none: {name}' } } }), /: none: x$/);
// A list in a message is joined as the locale joins one; params keep it as an array.
{
  const tags = { box: { render: () => '' } };
  assert.throws(() => renderDocument('<div>', { tags }), error => /only <lang>, <box>;/.test(error.message) && error.params.allowed.join() === '<lang>,<box>');
  assert.throws(() => renderDocument('<div>', { tags, locale: 'zh-cn' }), /只能使用 <lang>、<box>；/);
  assert.throws(() => renderDocument('<div>', { tags, locale: 'de', messages: { de: { list_separator: ' / ' } } }), /only <lang> \/ <box>;/);
}

console.log('options: passed');
