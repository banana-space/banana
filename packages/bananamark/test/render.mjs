import assert from 'node:assert/strict';
import { createProcessor, createRenderer, defaultLanguages, highlightCode, pathEscape, renderDocument, transformFragment } from './zh.mjs';
import { languages } from 'bananamark/languages';
import { renderDocument as englishDefaults } from 'bananamark';
import { exampleMessages, exampleTags } from './fixtures.mjs';

// bananamark renders the syntax layer's documents ({ markdown, nodes }) as Hugo's Goldmark and the site's templates
// did the Markdown it was given before. The cases here follow Goldmark's and the templates' rules; that the site's
// pages come out as Hugo wrote them was checked against the site built by Hugo (npm run compare).
// Without typography, to see Goldmark's output as it is (typography is tested in typography.mjs).
const renderer = createRenderer({
  typography: false,
  resolveWikiLink: (key, { text }) => key === '群' ? { url: '/wiki/%E7%BE%A4/' }
    : key === '群论' ? { url: `/wiki/%E7%BE%A4/?from=${encodeURIComponent(key)}` }
    : { url: `/missing/?title=${encodeURIComponent(text)}`, missing: true },
  resolvePageLink: () => undefined,
  decorateLink: destination => /^https?:\/\/(?!example\.org)/.test(destination) ? { className: 'external-link', newTab: true, after: '<svg class="icon-external"></svg>' }
    : destination.startsWith('/categories/') ? { className: 'category-link', before: '<svg class="icon-folder"></svg>' } : undefined,
  renderCodeBlock: ({ language, code }) => `<pre data-lang="${language}">${code}</pre>`,
});
// A document, or Markdown alone (no nodes).
const render = document => renderer.renderDocument(document, { file: 'test.md' }).html;
const inline = document => renderer.renderFragment(document, { file: 'test.md' });

// Goldmark's typographer, with its rules for apostrophes and quotes.
assert.equal(inline(`"quoted" and 'single', l'Hôpital, Hilbert's, '90s -- --- ... << >>`),
  '“quoted” and ‘single’, l’Hôpital, Hilbert’s, ’90s – — … &lt;&lt; &gt;&gt;', '<< and >> stay as written');
assert.equal(inline('Bayes\' theorem'), 'Bayes’ theorem');
assert.equal(inline('`"code"`'), '<code>&quot;code&quot;</code>');

// Linkify: after a space or at the start of a line, trailing punctuation left out.
assert.equal(inline('见 https://example.org/a?b=1.'), '见 <a href="https://example.org/a?b=1">https://example.org/a?b=1</a>.');
assert.equal(inline('中文https://example.org'), '中文https://example.org');

// Formulas (passthrough): a display formula splits its paragraph; inside emphasis it stays inline.
const formula = { type: 'math', tex: 'x', display: true };
assert.match(render({ markdown: 'a\n@@node:0:node@@\nb', nodes: [formula] }), /^<p>a<\/p>\n<span class="bm-math-rendered bm-math-display" data-tex="x" data-display="true">[\s\S]*<\/span>\n<p>b<\/p>\n$/);
assert.match(render({ markdown: '*a @@node:0:node@@*', nodes: [formula] }), /^<p><em>a <span class="bm-math-rendered" data-tex="x" data-display="false">/);
assert.throws(() => render('@@node:0:node@@'), /node 0 is not in the document's table/);

// Links: wiki links to articles, aliases and missing articles; ordinary links kept as written.
const wiki = (label, target) => ({ markdown: `[${label}](bananamark:0)`, nodes: [{ type: 'wiki', target, name: target }] });
assert.equal(inline(wiki('群', '群')), '<a href="/wiki/%E7%BE%A4/" class="bm-wiki-link">群</a>');
assert.equal(inline(wiki('群论', '群论')), '<a href="/wiki/%E7%BE%A4/?from=%E7%BE%A4%E8%AE%BA" class="bm-wiki-link">群论</a>');
assert.equal(inline(wiki('环', '环')), '<a href="/missing/?title=%E7%8E%AF" title="条目尚未创建：环" class="bm-wiki-link bm-wiki-link-missing">环</a>');
// References and citations: to an anchor, their text (and caption) from the node.
assert.equal(inline({ markdown: '[reference](bananamark:0) [Smith 2020](bananamark:1)', nodes: [{ type: 'reference', id: 'thm:a', text: '定理 1' }, { type: 'citation', id: 'bib-s', key: 's' }] }),
  '<a href="#thm:a">定理 1</a> <a href="#bib-s" class="bm-citation" data-reference="s">Smith 2020</a>');
assert.equal(inline('[讲义](/books/代数/)'), '<a href="/books/%E4%BB%A3%E6%95%B0/">讲义</a>');
assert.equal(inline('[外部](https://other.org/)'), '<a href="https://other.org/" class="external-link" target="_blank" rel="noopener">外部<svg class="icon-external"></svg></a>');
assert.equal(inline('[分类](/categories/代数/)'), '<a href="/categories/%E4%BB%A3%E6%95%B0/" class="category-link"><svg class="icon-folder"></svg>分类</a>');
// The site's base path before addresses written from the root; a missing article without an address.
assert.equal(createRenderer({ typography: false, basePath: '/site' }).renderFragment('[讲义](/books/a/)'), '<a href="/site/books/a/">讲义</a>');
assert.equal(createRenderer({ typography: false }).renderFragment(wiki('环', '环')), '<a title="条目尚未创建：环" class="bm-wiki-link bm-wiki-link-missing">环</a>');
// What resolveWikiLink is told: the matching key, the link's text, the target as written (with formulas), the page.
{
  let told;
  createRenderer({ resolveWikiLink: (key, info) => { told = [key, info]; } }).renderFragment({ markdown: '[$x$ 空间](bananamark:0)', nodes: [{ type: 'wiki', target: 'x空间', name: '$x$ 空间', source: '$x$ 空间' }] }, { file: 'a.md' });
  assert.deepEqual(told, ['x空间', { text: '$x$ 空间', written: '$x$ 空间', page: { file: 'a.md' } }]);
}
// Errors carry the message's key and values; a renderer's error names the file.
assert.throws(() => render('[x](javascript:alert(1))'), error => error.code === 'link_scheme' && error.params.destination === 'javascript:alert(1)' && /^test\.md: /.test(error.message));
// An address from a hook is held to the same rules, and named in the error.
assert.throws(() => createRenderer({ resolveWikiLink: () => ({ url: 'javascript:x' }) }).renderFragment(wiki('环', '环')), error => error.params.destination === 'javascript:x');
// An image's width is a whole number of pixels.
assert.throws(() => render('![x](a.png){width=0}'), error => error.code === 'image_width' && /^test\.md: 图片宽度/.test(error.message));

// Headings: the heading node (anchor, attributes, section number), the anchor in the link normalized as Go's templates do.
assert.equal(render({ markdown: '## 定义 @@node:0:node@@', nodes: [{ type: 'heading', id: '定义', classes: [], attributes: [], number: '1' }] }),
  '<h2 id="定义"><a class="bm-heading-link" href="#%E5%AE%9A%E4%B9%89" title="链接到本节">§</a><span class="bm-section-number">1</span> 定义</h2>\n');
assert.equal(render('### 小节 {#x .y}'), '<h3 id="x" class="y"><a class="bm-heading-link" href="#x" title="链接到本节">§</a>小节</h3>\n', 'attributes as Goldmark reads them');

// Footnotes, as Goldmark numbers and links them.
assert.equal(render('a[^x] b[^x]\n\n[^x]: 注'),
  '<p>a<sup id="fnref:1"><a href="#fn:1" class="bm-footnote-ref" role="doc-noteref">1</a></sup> b<sup id="fnref1:1"><a href="#fn:1" class="bm-footnote-ref" role="doc-noteref">1</a></sup></p>\n' +
  '<div class="bm-footnotes" role="doc-endnotes">\n<hr>\n<ol>\n<li id="fn:1">\n<p>注&nbsp;<a href="#fnref:1" class="bm-footnote-backref" role="doc-backlink">↩\uFE0E</a>&nbsp;<a href="#fnref1:1" class="bm-footnote-backref" role="doc-backlink">↩\uFE0E</a></p>\n</li>\n</ol>\n</div>\n');

// Tables: an element a line, the alignment of a column on its cells.
assert.equal(render('| a | b |\n|:-:|---|\n| 1 | 2 |'),
  '<table>\n<thead>\n<tr>\n<th style="text-align: center">a</th>\n<th>b</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center">1</td>\n<td>2</td>\n</tr>\n</tbody>\n</table>\n');

// HTML-style tags: a marker alone in its paragraph loses its <p>; inner text is rendered on its own. A site's
// tags (exampleTags) render with what the renderer gives them: the inner Markdown as HTML, its messages.
{
  const tagged = createRenderer({ typography: false, tags: exampleTags, messages: exampleMessages, resolveWikiLink: () => ({ url: '/wiki/%E7%BE%A4/' }) });
  assert.equal(tagged.renderDocument(transformFragment('<note>[[群]]</note>', { tags: exampleTags })).html,
    '<div class="note"><span class="note-label">注：</span><a href="/wiki/%E7%BE%A4/" class="bm-wiki-link">群</a></div>\n');
  assert.match(tagged.renderDocument(transformFragment('<note>x</note>', { tags: exampleTags }), { lang: 'en' }).html, /Note: /);
  assert.equal(tagged.renderFragment(transformFragment('甲 <person years="1900" />', { tags: exampleTags })), '甲<span class="person">1900</span>');
  // Each tag's render gets: its name and parameters, the inner Markdown, the page; fail names the file.
  let seen;
  const custom = { box: { paired: true, named: { tone: {} }, render: context => { seen = context; context.fail('坏'); } } };
  assert.throws(() => createRenderer({ tags: custom }).renderDocument(transformFragment('<box tone="x">*甲*</box>', { tags: custom }), { file: 'b.md' }), /^BananamarkError: b\.md: 坏$/);
  assert.deepEqual([seen.name, seen.parameters.named, seen.inner, seen.page.file], ['box', { tone: 'x' }, '*甲*', 'b.md']);
  assert.equal(seen.fragment('*甲*'), '<em>甲</em>');
  assert.equal(seen.fragment('*甲*', { block: true }), '<p><em>甲</em></p>\n');
}
assert.equal(inline(transformFragment('词<lang de>Satz</lang>。')), '词<span lang="de">Satz</span>。');

// Images: alone in a paragraph, a figure; the alt text is Hugo's plain text (only a link's first node).
assert.equal(render('![图 [Ti*k*Z 代码](https://example.org/)](a.png){width=100}'),
  '<figure class="bm-content-figure"><img src="a.png" alt="图 Ti" width="100" loading="lazy"><figcaption>图 <a href="https://example.org/">Ti<em>k</em>Z 代码</a></figcaption></figure>');

// Code blocks: highlighted with the dialect's classes, in its own languages (Markdown, YAML, TeX); a language without
// a grammar to the site's hook.
assert.equal(render('```yaml\na: 1\n```'), '<pre class="bm-code-block" data-highlight="yaml"><code><span class="bm-hl-key">a</span><span class="bm-hl-punctuation">:</span> <span class="bm-hl-number">1</span></code></pre>\n');
assert.match(render('```tex\n\\section{A} % c\n```'), /<span class="bm-hl-comment">% c<\/span>/);
assert.equal(render('```python\nx = 1  # c\n```'), '<pre data-lang="python">x = 1  # c</pre>', 'none of bananamark/languages by default');
assert.equal(render('```lean\nx\n```'), '<pre data-lang="lean">x</pre>');
assert.deepEqual(Object.keys(defaultLanguages).sort(), ['bibliography', 'latex', 'markdown', 'math', 'md', 'tex', 'tikz', 'yaml', 'yml']);
// More languages (bananamark/languages, a legacy mode), or none for a name.
const more = createRenderer({ typography: false, codeLanguages: { ...languages, lean: { token: stream => { stream.skipToEnd(); return 'keyword'; } }, rust: false } });
assert.match(more.renderDocument('```python\nx = 1  # c\n```').html, /<span class="bm-hl-comment"># c<\/span>/);
assert.equal(more.renderDocument('```lean\nx\n```').html, '<pre class="bm-code-block" data-highlight="lean"><code><span class="bm-hl-command">x</span></code></pre>\n');
assert.equal(more.renderDocument('```rust\nx\n```').html, '<pre class="bm-code-block" data-highlight="rust"><code>x</code></pre>\n');
assert.ok(new Set(Object.values(languages)).size > 30 && Object.values(languages).every(Boolean));
assert.equal(highlightCode('a: 1', 'YAML'), '<span class="bm-hl-key">a</span><span class="bm-hl-punctuation">:</span> <span class="bm-hl-number">1</span>');
assert.equal(highlightCode('x', 'lean'), undefined);

// Raw HTML is left out.
assert.equal(render('<div>x</div>'), '<!-- raw HTML omitted -->\n');

assert.equal(pathEscape('/wiki/(∞,1)-层/'), '/wiki/%28%E2%88%9E,1%29-%E5%B1%82/');

// renderDocument: the syntax layer and the renderer at once, with no site (every option has a default).
const page = renderDocument('## 定义 {@sec:def}\n\n::: definition [群] {@def:group}\n见 [[集合]]。\n:::\n\n由 @def:group 与 @sec:def。', { file: 'demo.md' });
assert.match(page.html, /<h2 id="定义">.*<span class="bm-section-number">1<\/span> 定义<\/h2>/);
assert.match(page.html, /<p class="bm-envtitle">定义 1\.1（群）<\/p>/);
assert.match(page.html, /<a title="条目尚未创建：集合" class="bm-wiki-link bm-wiki-link-missing">集合<\/a>/);
// Typeset (the default typography): spaces between Han only where digits or letters meet it; 。 kept.
assert.match(page.html, /由<a href="#def:group">定义 1\.1<\/a> 与<a href="#%E5%AE%9A%E4%B9%89">第 1 节<\/a>。/);
assert.match(renderDocument('见 [[集合]]。', { typography: { convertFullStop: true } }).html, /见<a [^>]*>集合<\/a>．/);
assert.match(renderDocument('见 [[集合]]。', { typography: false }).html, /见 <a [^>]*>集合<\/a>。/);
assert.deepEqual(page.headings, [{ level: 2, id: '定义', number: '1', title: '定义' }]);
assert.deepEqual(page.labels.map(label => label.name), ['sec:def', 'def:group']);
assert.deepEqual(page.wikiLinks, [{ target: '集合', line: 4, column: 3 }]);
assert.throws(() => renderDocument('见 @nowhere。', { file: 'demo.md', lineOffset: 3 }), /demo\.md:4: .*nowhere/);

// Hooks: an article index and environments of a site's own (a name, or names by locale).
const processor = createProcessor({
  resolveWikiLink: key => key === '集合' ? { url: '/set/' } : undefined,
  environments: { axiom: { name: '公理', group: 'definition' } },
});
assert.match(processor.render('::: axiom\n[[集合]]\n:::').html, /<p class="bm-envtitle">公理 1<\/p><div class="bm-envcontent">\n<p><a href="\/set\/" class="bm-wiki-link">集合<\/a><\/p>/);
// The caller's environments are over bananamark's; false removes one.
assert.match(processor.render('::: theorem\n甲\n:::').html, /定理 1/);
assert.throws(() => createProcessor({ environments: { theorem: false } }).render('::: theorem\n:::'), /theorem/);

assert.throws(() => createProcessor({ environments: { axiom: { group: 'definition' } } }).render('::: axiom\n:::'), /定理环境配置无效：axiom/);
const axioms = { axiom: { name: { 'zh-cn': '公理', en: 'Axiom' }, group: 'definition' } };
const axiomProcessor = createProcessor({ environments: axioms });
assert.match(axiomProcessor.render('::: axiom {@x}\nA.\n:::\n\nSee @x.', { lang: 'en' }).html, /<p class="bm-envtitle">Axiom 1<\/p>[\s\S]*See <a href="#x">Axiom 1<\/a>\./);
assert.match(axiomProcessor.render('::: axiom {@x}\n甲\n:::').html, /<p class="bm-envtitle">公理 1<\/p>/);

// The page's text follows its language (zh… Chinese, en… and any language without tables English); errors follow
// locale. Both are English by default (here the tests' renderDocument gives zh-cn), and neither is left set after a call.
assert.match(renderDocument('## A {@a}\n\n@a', { lang: 'en-GB' }).html, /<a href="#a">Section 1<\/a>/);
assert.match(renderDocument('## A {@a}\n\n@a', { lang: 'de' }).html, /<a href="#a">Section 1<\/a>/);
assert.match(renderDocument('## A {@a}\n\n@a', { lang: 'zh-TW' }).html, /<a href="#a">第 1 节<\/a>/);
assert.throws(() => renderDocument('@x', { locale: 'en' }), /no such label: x/);
assert.throws(() => renderDocument('@x', { lang: 'en' }), /引用标签不存在：x/);
assert.throws(() => renderDocument('@x'), /引用标签不存在：x/);
assert.match(englishDefaults('## A {@a}\n\n::: theorem\n甲\n:::\n\n@a').html, /Theorem 1\.1[\s\S]*<a href="#a">Section 1<\/a>/, 'English by default');
assert.throws(() => englishDefaults('@x'), /no such label: x/);
assert.throws(() => renderDocument('甲', { locale: 'fr' }), /unknown locale "fr"/);

// KaTeX's options (macros) and a site's rewriting of formulas, in the HTML, data-tex and the editor's check.
{
  const katex = { macros: { '\\Ring': '\\mathbb{R}' } };
  const rewriteMath = tex => tex.replace(/\\one\b/g, '1');
  const html = renderDocument('$\\Ring$ $\\one$', { katex, rewriteMath }).html;
  assert.match(html, /data-tex="\\Ring"[^>]*>.*mathvariant="double-struck">R</s);
  assert.match(html, /data-tex="1"/);
  assert.throws(() => renderDocument('$\\Ring$', { checkMath: true }), /\\Ring/);
  assert.doesNotThrow(() => renderDocument('$\\Ring$', { checkMath: true, katex }));
}
// KaTeX's warnings about characters it has no metrics for are left out, in the page and in names; its others are not.
{
  const warned = [], warn = console.warn;
  console.warn = (...args) => warned.push(args.join(' '));
  try {
    assert.match(renderDocument('# $𝟙$\n\n$𝟙_A$ 与 $a • b$', { checkMath: true }).html, /𝟙/);
    assert.deepEqual(warned, []);
    renderDocument('$é$', { katex: { strict: 'warn' } });
  } finally { console.warn = warn; }
  assert.equal(warned.length, 1);
  assert.match(warned[0], /strict mode is set to 'warn'/);
}
// The caller's messages: changes to bananamark's, and a language of its own (its missing keys from English).
{
  const messages = { de: { reference_section: 'Abschnitt {number}' }, 'zh-cn': { link_to_heading: '本节的链接' } };
  assert.match(renderDocument('## A {@a}\n\n@a', { lang: 'de', messages }).html, /Abschnitt 1/);
  assert.match(renderDocument('::: proof\nx\n:::', { lang: 'de', messages }).html, /Proof\./);
  assert.match(renderDocument('## A', { messages }).html, /title="本节的链接"/);
  assert.throws(() => renderDocument('@x', { locale: 'de', messages: { de: { label_missing: 'kein Label: {name}' } } }), /kein Label: x|no such label: x/);
}
// Closing punctuation after an inline formula goes with KaTeX's last box into span.bm-math-end (with typography off
// too): the boxes before it stay where they were, the punctuation is outside the .katex of its own.
{
  const html = renderDocument('设 $a = b + c$，则 $x$）。\n\n$n$’s, $x$.5 与 $x$ ，以及 $x$ - 1\n\n$$y$$\n\n$p$-adic', { typography: false }).html;
  const bases = part => (part.match(/<span class="katex-base">/g) ?? []).length;
  const [formula] = html.match(/<span class="bm-math-rendered" data-tex="a = b \+ c"[\s\S]*?(?=则)/);
  const [before, end] = formula.split('<span class="bm-math-end">');
  assert.deepEqual([bases(before), bases(end)], [2, 1], 'the last of three boxes moves');
  assert.match(end, /^<span class="katex"><span class="katex-html" aria-hidden="true"><span class="katex-base">[\s\S]*<\/span><\/span>，<\/span><\/span>$/);
  assert.match(html, /bm-math-end"><span class="katex"><span class="katex-html" aria-hidden="true"><span class="katex-base">[\s\S]*?<\/span><\/span>）。<\/span><\/span><\/p>/, 'the run of punctuation; a formula of one box');
  assert.doesNotMatch(html.split('<p>')[2], /bm-math-end/, 'not punctuation in a word (’s, .5), nor after a space');
  assert.equal(html.match(/bm-math-end/g).length, 3, 'not after a display formula');
  assert.match(html, /<span class="katex-base">[\s\S]*?<\/span><\/span>-<\/span><\/span>adic<\/p>/, 'a hyphen, before a word: the line breaks after it');
  // A TikZ placeholder is left as it is (bananamark-tikz compiles it as one box).
  const tikz = renderDocument('图 $\\begin{tikzcd} A \\end{tikzcd}$，', { tikz: true }).html;
  assert.match(tikz, /bm-tikz-source/);
  assert.doesNotMatch(tikz, /bm-math-end/);
}

// Errors carry their message's key and values, and where they are.
assert.throws(() => renderDocument('\n见 @nowhere。', { file: 'a.md' }), error => error.code === 'label_missing' && error.params.name === 'nowhere' && error.line === 2 && error.column === 3);

console.log('render: passed');
