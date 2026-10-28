import assert from 'node:assert/strict';
import { EditorState } from '@codemirror/state';
import { CompletionContext } from '@codemirror/autocomplete';
import { syntaxTree } from '@codemirror/language';
import { highlightTree } from '@lezer/highlight';
import { defineDialect, spoilerTag } from 'bananamark';
import { yamlLanguage } from 'bananamark/grammar';
import { bananamark, bananamarkKeymap, bananamarkLanguage, checkFile, completionSources, highlightClasses } from 'bananamark-codemirror';

// The whole setup (src/setup.mjs) and a dialect (bananamark's defineDialect) in the editor: the language follows
// the dialect's switches, completion is the language data every position offers, and checking reads the dialect.
const site = defineDialect({
  wikiLinks: true, tikz: true, bibliography: true,
  dataBlocks: { meta: { read: source => source } },
  tags: { spoiler: spoilerTag },
  codeLanguages: { meta: yamlLanguage },
  messages: { en: { completion_meta: 'page data' } },
});
const plain = defineDialect();

/** The names of the syntax tree's nodes over the text. */
const nodeNames = (extensions, text) => {
  const names = new Set();
  syntaxTree(EditorState.create({ doc: text, extensions })).iterate({ enter: node => { names.add(node.name); } });
  return names;
};
// The grammar: [[links]] only where the dialect has them; the dialect's code languages in its blocks.
assert.ok(nodeNames(bananamarkLanguage({ dialect: site }), 'See [[Groups]].').has('WikiLink'));
assert.ok(!nodeNames(bananamarkLanguage({ dialect: plain }), 'See [[Groups]].').has('WikiLink'));
assert.ok(!nodeNames(bananamarkLanguage(), 'See [[Groups]].').has('WikiLink'), 'off without a dialect, as bananamark');
{
  const text = '```meta\nkey: 1\n```\n', classes = [];
  highlightTree(syntaxTree(EditorState.create({ doc: text, extensions: bananamarkLanguage({ dialect: site }) })), highlightClasses, (from, to, names) => classes.push([text.slice(from, to), names]));
  assert.ok(classes.some(([word, names]) => word === 'key' && names.includes('bm-hl-key')), 'a data block highlighted as YAML');
}

/** What the extensions' completion offers at "¦": the labels of the first source offering anything. */
async function offered(extensions, marked) {
  const pos = marked.indexOf('¦'), state = EditorState.create({ doc: marked.replace('¦', ''), selection: { anchor: pos }, extensions });
  for (const source of state.languageDataAt('autocomplete', pos)) {
    const result = await source(new CompletionContext(state, pos, true));
    if (result) return result.options.map(option => option.label);
  }
  return null;
}
// Completion as language data, everywhere in the page (in formulas too, where TeX's language is).
const everything = bananamark({ dialect: site, completion: { entries: [{ title: 'Groups', aliases: [] }] }, lint: false });
assert.ok(Array.isArray(everything));
assert.deepEqual(await offered(everything, 'See [[Gr¦'), ['Groups']);
assert.deepEqual(await offered(everything, '```¦'), ['```math', '```tikz', '```meta', '```bibliography']);
assert.ok((await offered(everything, 'Let $\\alp¦$')).includes('\\alpha'), 'KaTeX commands in a formula');
assert.ok((await offered(everything, '<sp¦')).includes('<spoiler'));
// The plain dialect: no [[links]], no TikZ or bibliography blocks, no <spoiler>.
const bare = bananamark({ dialect: plain, completion: { entries: [{ title: 'Groups', aliases: [] }] }, lint: false });
assert.equal(await offered(bare, 'See [[Gr¦'), null);
assert.deepEqual(await offered(bare, '```¦'), ['```math']);
// The caller's sources come too; none with completion: false.
const more = bananamark({ completion: { sources: [() => ({ from: 0, options: [{ label: 'mine' }] })] }, lint: false });
assert.deepEqual(await offered(more, '¦'), ['mine']);
assert.equal(EditorState.create({ extensions: bananamark({ completion: false, lint: false }) }).languageDataAt('autocomplete', 0).length, 0);
// Without a dialect, wiki links and code languages as bananamarkLanguage takes them: in the grammar, completion and
// checking.
{
  const linked = bananamark({ wikiLinks: true, codeLanguages: { meta: yamlLanguage }, completion: { entries: [{ title: 'Groups', aliases: [] }] } });
  assert.ok(nodeNames(linked, 'See [[Groups]].').has('WikiLink'));
  assert.deepEqual(await offered(linked, 'See [[Gr¦'), ['Groups']);
  const text = '```meta\nkey: 1\n```\n', classes = [];
  highlightTree(syntaxTree(EditorState.create({ doc: text, extensions: linked })), highlightClasses, (from, to, names) => classes.push([text.slice(from, to), names]));
  assert.ok(classes.some(([word, names]) => word === 'key' && names.includes('bm-hl-key')));
  assert.ok(!nodeNames(bananamark({ lint: false }), 'See [[Groups]].').has('WikiLink'));
}
// The words beside the options: the dialect's messages, in the locale.
const [fences] = completionSources({ dialect: site }).slice(1, 2);
const state = EditorState.create({ doc: '```', selection: { anchor: 3 }, extensions: bananamarkLanguage({ dialect: site }) });
assert.equal((await fences(new CompletionContext(state, 3, true))).options.find(option => option.displayLabel === 'meta').detail, 'page data');

// The keys, in order: Enter closing \[, then Enter at the text's indentation, then Backspace in an empty \[\].
assert.deepEqual(bananamarkKeymap.map(binding => binding.key), ['Enter', 'Enter', 'Backspace']);

// Checking reads the dialect: a bibliography block is data only where the dialect has bibliographies.
const badBibliography = '```bibliography\na: {type: nothing}\n```\n';
assert.equal(checkFile(badBibliography, { dialect: site }).length, 1);
assert.deepEqual(checkFile(badBibliography, { dialect: plain }), [], 'otherwise an ordinary code block');
assert.match(checkFile('See [[Groups]] and @x.', { dialect: plain })[0].message, /no such label: x/);
console.log('setup: passed');
