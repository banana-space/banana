import assert from 'node:assert/strict';
import {
  BananamarkError, alignTag, createBook, createProcessor, createRenderer, defaultEnvironments, defineDialect, renderDocument, spoilerTag,
  transformDocument, transformFragment,
} from 'bananamark';
import { yamlLanguage } from 'bananamark/grammar';
import * as rules from 'bananamark/rules';
import { typesetHTML } from 'bananamark/typography';

// The dialect (src/dialect.mjs): one checked, frozen set of settings every entry point takes; the switches, off by
// default; the page's data on the document; and the errors, of one class, with where and what.

// Off by default: wiki links are text, bibliography and tikz blocks are code blocks, tikzcd goes to KaTeX; <lang> alone.
assert.equal(renderDocument('See [[Groups]].').html, '<p>See [[Groups]].</p>\n');
assert.match(renderDocument('```bibliography\na: {type: book, title: T}\n```\n').html, /^<pre class="bm-code-block" data-highlight="bibliography">/);
assert.match(renderDocument('```tikz\n\\draw (0,0);\n```\n').html, /^<pre class="bm-code-block" data-highlight="tikz">/);
assert.throws(() => renderDocument('$\\begin{tikzcd} A \\end{tikzcd}$'), error => error.code === 'katex' && /tikzcd/.test(error.params.message));
assert.throws(() => renderDocument('<spoiler>x</spoiler>'), error => error.code === 'tag_unknown' && error.params.allowed.join() === '<lang>');
assert.throws(() => renderDocument('<align right>x</align>'), /tag_unknown|<align>/);
assert.match(renderDocument('<lang de>Gruppe</lang>').html, /<span lang="de">Gruppe<\/span>/);

// A dialect turns them on, for every entry point, and the editor's grammar with them.
const site = defineDialect({
  wikiLinks: true, bibliography: true, tikz: true,
  tags: { align: alignTag, spoiler: spoilerTag },
  environments: { axiom: { name: 'Axiom', group: 'definition' }, conjecture: false },
  dataBlocks: { meta: { read: source => source.trim(), outsideEnvironments: true } },
  codeLanguages: { meta: yamlLanguage },
  messages: { en: { missing_article_link: 'Missing: {name}' } },
  rewriteMath: tex => tex.replace(/\\RR/g, '\\mathbb{R}'),
});
assert.ok(Object.isFrozen(site));
assert.throws(() => { site.tikz = false; }, TypeError);
assert.match(renderDocument('See [[Groups]].', { dialect: site }).html, /<a title="Missing: Groups" class="bm-wiki-link bm-wiki-link-missing">Groups<\/a>/);
assert.match(renderDocument('```tikz\n\\draw (0,0);\n```\n', { dialect: site }).html, /class="bm-math-rendered bm-math-display bm-tikz-source"[^>]*><code class="bm-tikz-code">\\draw \(0,0\);<\/code><\/span>/);
assert.match(renderDocument('$\\begin{tikzcd} A \\end{tikzcd}$', { dialect: site }).html, /bm-tikz-source/);
assert.match(renderDocument('::: axiom\nx\n:::', { dialect: site }).html, /Axiom 1/);
assert.throws(() => renderDocument('::: conjecture\nx\n:::', { dialect: site }), error => error.code === 'environment_unknown');
assert.match(renderDocument('<align right>x</align>', { dialect: site }).html, /bm-align-right/);
assert.match(renderDocument('<spoiler title="t">x</spoiler>', { dialect: site }).html, /<details>/);
assert.match(renderDocument('$\\RR$', { dialect: site }).html, /data-tex="\\mathbb\{R\}"/);
// Its code languages, with its own grammar for markdown blocks (with the data block's language inside).
assert.match(renderDocument('```meta\nkey: 1\n```\n', { dialect: plainMeta() }).html, /^$/, 'a data block is not shown');
assert.match(createRenderer({ dialect: site }).renderDocument({ markdown: '```markdown\n```meta\nkey: 1\n```\n```\n', nodes: [] }).html, /bm-hl-key">key</);
assert.ok(site.language?.language, 'the editor\'s language');
// The same in each entry point; options beside it win.
assert.match(transformFragment('[[Groups]]', { dialect: site }).markdown, /bananamark:0/);
assert.doesNotMatch(transformFragment('[[Groups]]', { dialect: site, wikiLinks: false }).markdown, /bananamark:/);
assert.deepEqual(transformDocument('```meta\n a \n```\n', { dialect: site }).meta.data, { meta: ['a'] });
assert.match(createProcessor({ dialect: site }).render('[[Groups]]').html, /bm-wiki-link/);
const book = createBook({ dialect: site });
assert.match(book.transform(book.add('[[Groups]]', { key: 'a' })).markdown, /bananamark:/);
assert.throws(() => renderDocument('x', { dialect: { wikiLinks: true } }), /defineDialect/, 'only what defineDialect returns');
// Checked when made: a bad environment, tag or data block is an error then.
assert.throws(() => defineDialect({ environments: { axiom: { group: 'x' } } }), error => error.code === 'environment_config');
assert.throws(() => defineDialect({ tags: { Box: { render: () => '' } } }), error => error.code === 'tag_config');
assert.throws(() => defineDialect({ tikz: true, dataBlocks: { tikz: { read: () => 1 } } }), error => error.code === 'data_block_name');
assert.doesNotThrow(() => defineDialect({ dataBlocks: { tikz: { read: () => 1 } } }), 'tikz is a free name with TikZ off');
function plainMeta() { return defineDialect({ dataBlocks: { meta: { read: source => source } } }); }
// A CodeMirror Language of another copy of @codemirror/language is an error, not left out unseen.
{
  const foreign = { parser: yamlLanguage.parser, data: {}, isActiveAt: () => true };
  assert.throws(() => defineDialect({ codeLanguages: { x: foreign } }), /another copy of @codemirror\/language/);
  assert.throws(() => createRenderer({ codeLanguages: { x: foreign } }).renderDocument('```x\na\n```'), /another copy of @codemirror\/language/);
}
// bananamark/rules: the default environments and the tags' rules, as the main entry has them.
assert.equal(rules.defaultEnvironments, defaultEnvironments);
assert.deepEqual(Object.keys(rules).sort(), ['alignTagRule', 'defaultEnvironments', 'defaultTagRules', 'environmentName', 'langTagRule', 'spoilerTagRule']);
assert.deepEqual([rules.environmentName(rules.defaultEnvironments.lemma, 'zh-cn'), rules.environmentName(rules.defaultEnvironments.lemma, 'de'), rules.environmentName({ name: { de: 'Satz' } }, 'fr')], ['引理', 'Lemma', undefined]);
assert.equal(rules.spoilerTagRule.named.title.markdown, true);

// The page's data on the document (meta), and in the result.
{
  const document = transformDocument('## A {@sec:a}\n\nSee [[Groups]] and [[Groups]], @smith.\n\n```bibliography\nsmith: {type: book, title: T, author: Smith, year: 2020}\n```\n', { dialect: site });
  assert.deepEqual(Object.keys(document.meta).sort(), ['bibliography', 'data', 'headingTitles', 'labels', 'sectionNumbers', 'wikiLinks']);
  assert.deepEqual(document.meta.labels.map(({ name, anchor, kind }) => [name, anchor, kind]), [['sec:a', 'a', 'heading'], ['smith', 'bib-smith', 'bibliography']]);
  assert.deepEqual(document.meta.wikiLinks, [{ target: 'Groups', line: 3, column: 5 }, { target: 'Groups', line: 3, column: 20 }]);
  assert.deepEqual(document.meta.sectionNumbers, { a: '1' });
  assert.equal(document.meta.bibliography[0].citationLabel, 'Smith 2020');
}

// Errors: one class, with where (file, line, column), what (code, params), the reason alone, and a hook's own error.
{
  let error;
  try { renderDocument('\nSee @nowhere.', { file: 'a.md', lineOffset: 3 }); } catch (thrown) { error = thrown; }
  assert.ok(error instanceof BananamarkError && error instanceof Error);
  assert.equal(error.name, 'BananamarkError');
  assert.deepEqual([error.message, error.reason, error.file, error.line, error.column, error.code, error.params], ['a.md:5: no such label: nowhere', 'no such label: nowhere', 'a.md', 5, 5, 'label_missing', { name: 'nowhere' }]);
}
{
  const boom = new TypeError('boom');
  let error;
  try { renderDocument('[[x]]', { dialect: site, file: 'b.md', resolveWikiLink: () => { throw boom; } }); } catch (thrown) { error = thrown; }
  assert.deepEqual([error.message, error.code, error.params, error.file, error.cause], ['b.md: resolveWikiLink failed: boom', 'hook_failed', { hook: 'resolveWikiLink', message: 'boom' }, 'b.md', boom]);
}
assert.throws(() => renderDocument('\n```meta\nx\n```\n', { file: 'c.md', dataBlocks: { meta: { read: () => { throw new Error('bad'); } } } }),
  error => error.code === 'hook_failed' && error.line === 2 && error.params.hook === 'meta.read' && error.cause.message === 'bad');
assert.throws(() => renderDocument('<box>x</box>', { tags: { box: { paired: true, render: () => { throw new Error('no'); } } } }), error => error.code === 'hook_failed' && error.params.hook === '<box>');
// A data block's fail(text), a caller's error: where, but no code; fail(problem) gives one.
assert.throws(() => renderDocument('```meta\nx\n```\n', { file: 'd.md', dataBlocks: { meta: { read: (source, { fail }) => fail('not data', 0) } } }), error => error instanceof BananamarkError && error.message === 'd.md:2: not data' && error.code === undefined);
assert.throws(() => renderDocument('<box>x</box>', { tags: { box: { paired: true, render: ({ fail, problem }) => fail(problem('tag_empty', { name: 'box' })) } } }), error => error.code === 'tag_empty');
// KaTeX while rendering: the code katex, KaTeX's error as the cause.
assert.throws(() => renderDocument('$\\frac{1}$', { file: 'e.md' }), error => error.code === 'katex' && error.file === 'e.md' && error.cause instanceof Error);

// Typography's options as the processor's; none with typography: false.
assert.equal(typesetHTML('<p>中文English。</p>', { lang: 'zh-cn', typography: { convertFullStop: true } }), '<p>中文 English．</p>');
assert.equal(typesetHTML('<p>中文English。</p>', { lang: 'zh-cn', typography: false }), '<p>中文English。</p>');
assert.equal(typesetHTML('<p data-typography="off">中文English</p><p>中<span data-typography="boundary"></span>A</p><p data-typography-full-stop="on">汉。</p>', { lang: 'zh-cn' }),
  '<p data-typography="off">中文English</p><p>中<span data-typography="boundary"></span>A</p><p data-typography-full-stop="on">汉．</p>');

console.log('dialect: passed');
