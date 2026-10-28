import assert from 'node:assert/strict';
import { alignTagRule, defaultEnvironments, defineDialect, spoilerTagRule } from 'bananamark';
import { EditorState } from '@codemirror/state';
import { CompletionContext } from '@codemirror/autocomplete';
import { readFileSync } from 'node:fs';
import { afterComposition, bananamarkLanguage, closeDisplayFormula, completionSources, declaredLabels, deleteFormulaDelimiters, inFormula, pairFormulaDelimiters } from 'bananamark-codemirror';
import { katexCommands } from '../scripts/katex-commands.mjs';

// Completion (src/completion.mjs): what each source offers where. The settings are a site's: its environments,
// a data block, two tags of its own (as banana-space's <see> and <person>), its articles and languages, and a
// short list of KaTeX's commands.
const bananaMarkdown = () => bananamarkLanguage({ wikiLinks: true });
const tags = {
  align: alignTagRule,
  spoiler: spoilerTagRule,
  see: { paired: true, completion: { snippet: '<see>${}</see>' } },
  person: { attachToPrevious: true, named: { original: { reading: true }, lang: { language: true }, translit: {}, ipa: {}, years: {} }, completion: { snippet: '<person ${} />', then: true } },
};
let loads = 0;
let otherLabels = []; // A book's other pages' labels.
const sources = completionSources({
  // Over bananamark's, the others removed.
  environments: { ...Object.fromEntries(Object.keys(defaultEnvironments).map(kind => [kind, false])), theorem: { name: { 'zh-cn': '定理', en: 'Theorem' } }, proof: { name: '证明' } },
  dataBlocks: ['terms'],
  tags,
  entries: async () => { loads++; return [{ title: '$L^p$ 空间', aliases: ['Lp 空间'] }, { title: '群', aliases: [] }]; },
  languages: { de: '德语', en: '英语', grc: '古希腊语' },
  mathCommands: { commands: [['\\alpha', 0, 'α'], ['\\frac', 2], ['\\mathbb', 1]], environments: [['pmatrix', 0], ['array', 1]] },
  otherLabels: () => otherLabels,
  locale: 'zh-cn',
  tikz: true,
  wikiLinks: true,
  bibliography: true,
});
/** What the sources offer with the cursor at "¦" in text: [typed, labels] of the first that offers anything. */
async function complete(marked, explicit = false) {
  const pos = marked.indexOf('¦'), doc = marked.replace('¦', '');
  const context = new CompletionContext(EditorState.create({ doc, selection: { anchor: pos }, extensions: [bananaMarkdown()] }), pos, explicit);
  for (const source of sources) {
    const result = await source(context);
    if (result) { last = result; return [doc.slice(result.from, pos), result.options.map(option => option.label)]; }
  }
  return null;
}
let last;

// ":::" and a name at a line's start: the environments starting so, replacing what was typed from the colons on.
assert.deepEqual(await complete(':::th¦'), [':::th', ['::: theorem']]);
assert.deepEqual(await complete('* 项目\n    ::: p¦'), ['::: p', ['::: proof']], 'indented, in a list');
assert.equal(await complete('文字 :::th¦'), null, 'not within a line');
assert.equal(await complete(':::¦'), null, 'a bare ::: closes an environment');
assert.deepEqual((await complete(':::¦', true))[1], ['::: proof', '::: theorem'], 'unless asked');
assert.deepEqual(last.options.map(option => option.detail), ['证明', '定理'], 'their names in the locale');
// The shorthand for a title and a label.
assert.deepEqual((await complete(':::th 万有系数定理¦'))[1], ['::: theorem [万有系数定理]']);
assert.deepEqual((await complete(':::th @thm:uct¦'))[1], ['::: theorem {@thm:uct}']);
assert.deepEqual((await complete(':::th 万有 $\\mathbb{Z}$ 定理 @thm:uct¦'))[1], ['::: theorem [万有 $\\mathbb{Z}$ 定理] {@thm:uct}']);
assert.deepEqual((await complete('::: theorem [甲] {@thm:a}¦'))[1], ['::: theorem [甲] {@thm:a}'], 'written out');
// Accepting an option (its apply, as CodeMirror calls it): the text after, the cursor at "¦".
async function accept(marked, label) {
  const pos = marked.indexOf('¦');
  let state = EditorState.create({ doc: marked.replace('¦', ''), selection: { anchor: pos }, extensions: [bananaMarkdown()] });
  const context = new CompletionContext(state, pos, false);
  for (const source of sources) {
    const result = await source(context);
    if (!result) continue;
    const option = result.options.find(option => option.label === label);
    const view = { get state() { return state; }, dispatch(spec) { state = state.update(spec).state; } };
    if (typeof option.apply === 'function') option.apply(view, option, result.from, pos);
    else view.dispatch({ changes: { from: result.from, to: pos, insert: option.apply ?? option.label } });
    return state.sliceDoc(0, state.selection.main.head) + '¦' + state.sliceDoc(state.selection.main.head);
  }
  return null;
}
// An environment's opening line already followed by its body and closing: accepting rewrites that line alone;
// a new one (the page's fences one short) gets a body line and its closing, also inside another environment.
assert.equal(await accept('::: theorem [甲] @thm:b¦\n正文\n:::\n', '::: theorem [甲] {@thm:b}'), '::: theorem [甲] {@thm:b}¦\n正文\n:::\n');
assert.equal(await accept('::: definition\n:::th¦\n正文\n:::\n', '::: theorem'), '::: definition\n::: theorem\n¦\n:::\n正文\n:::\n');
assert.equal(await accept(':::th¦', '::: theorem'), '::: theorem\n¦\n:::');
// Not while editing inside a title or label.
assert.equal(await complete('::: theorem [甲¦] {@thm:a}\n正文\n:::\n'), null);

// "```" at a line's start: bananamark's blocks and the data blocks.
assert.deepEqual(await complete('```ma¦'), ['```ma', ['```math', '```tikz', '```terms', '```bibliography']]);
// "[[" and a character other than "$": entries and aliases.
assert.deepEqual(await complete('见 [[群¦'), ['群', ['$L^p$ 空间', 'Lp 空间', '群']]);
assert.equal(await complete('见 [[¦'), null);
assert.equal(await complete('见 [[$¦'), null);
assert.deepEqual((await complete('见 [[$L¦'))[0], '$L');
// Deleting back to "[[" or "[[$" closes the list.
await complete('见 [[群¦');
assert.deepEqual(['群', '', '$', '$L'].map(text => last.validFor(text)), [true, false, false, true]);
assert.equal(await complete('见 [[群|乙¦'), null, 'not in the label');
// "@" and "{@": the labels this page declares.
const page = '## 定义 {@sec:def}\n\n::: theorem [万有] {@thm:uct}\n正文\n:::\n\n1. {@item:a} 第一项\n\n```math {@eq:x}\nd = 0\n```\n\n```text\n## 代码 {@not-a-label}\n```\n';
assert.deepEqual(declaredLabels(page), [
  { name: 'sec:def', text: '定义' }, { name: 'thm:uct', text: 'theorem [万有]' }, { name: 'item:a', text: '第一项' }, { name: 'eq:x', text: 'math' },
]);
// A title with brackets of its own: a link, or text and a link.
assert.deepEqual(declaredLabels('::: example [[[Springer 对应]]] {@ex:springer}\n正文\n:::\n\n::: proposition [形式[[分部积分]]] {@prop:parts}\n:::\n').map(({ name }) => name), ['ex:springer', 'prop:parts']);
assert.deepEqual(await complete(page + '由 @th¦'), ['th', ['sec:def', 'thm:uct', 'item:a', 'eq:x']]);
assert.deepEqual(await complete(page + '由{@¦'), ['', ['sec:def', 'thm:uct', 'item:a', 'eq:x']]);
assert.equal(await complete(page + 'a@b¦'), null, 'not in an address');
// With bibliographies on, a bibliography block's keys: its entries' (block or flow mappings) and versions' with a key of
// their own, each with the entry's title.
const cited = '```bibliography\nwinges:\n  type: preprint\n  title: Day convolution revisited\nsmith: {type: book, title: "Algebra, vol. 1"}\nserre:\n  title: Cours\n  versions:\n    - key: serre-en\n      title: A course\n    - {key: serre-de, relation: translation}\n```\n\n```yaml\nnot: 1\n```\n';
assert.deepEqual(declaredLabels(cited, { bibliography: true }), [
  { name: 'winges', text: 'Day convolution revisited' }, { name: 'smith', text: 'Algebra, vol. 1' }, { name: 'serre', text: 'Cours' },
  { name: 'serre-en', text: 'Cours' }, { name: 'serre-de', text: 'Cours' },
]);
assert.deepEqual(declaredLabels(cited), [], 'a code block where bibliographies are off');
assert.deepEqual(await complete(cited + '见 @s¦'), ['s', ['winges', 'smith', 'serre', 'serre-en', 'serre-de']]);
assert.equal(last.options[1].detail, 'Algebra, vol. 1');
// On a book page, the labels of the book's other pages follow, with their page; one this page declares again is
// offered once, as this page's.
otherLabels = [{ name: 'thm:basis', text: '定理 1.1.1', page: '向量空间' }, { name: 'sec:def', text: '第 2 节', page: '线性映射' }];
assert.deepEqual(await complete(page + '由 @¦'), ['', ['sec:def', 'thm:uct', 'item:a', 'eq:x', 'thm:basis']]);
assert.deepEqual([last.options.at(-1).detail, last.options[0].boost > last.options.at(-1).boost], ['定理 1.1.1 · 向量空间', true]);
assert.deepEqual(await complete('其他页面的 {@¦'), ['', ['thm:basis', 'sec:def']], 'also when this page declares none');
assert.equal(last.options[0].apply, 'thm:basis}');
otherLabels = [];
// KaTeX in formulas: commands (with their glyphs), environments; not outside formulas, also while a formula
// is still being typed.
assert.deepEqual(await complete('设 $\\fr¦$。'), ['\\fr', ['\\alpha', '\\frac', '\\mathbb', '\\begin{pmatrix}', '\\begin{array}']]);
assert.deepEqual((await complete('设 $\\fr¦'))[0], '\\fr', 'a formula not yet closed');
assert.equal(await complete('设 $x$ 与 \\fr¦'), null, 'not outside formulas');
assert.equal(await complete('设 $x \\\\fr¦$'), null, 'not after a line break \\\\');
assert.deepEqual((await complete('设 $x \\\\\\fr¦$'))[0], '\\fr');
assert.deepEqual(await complete('\\[\n  \\begin{pm¦\n\\]\n'), ['pm', ['pmatrix', 'array']]);
assert.deepEqual((await complete('```math\n\\al¦\n```\n'))[0], '\\al', 'in a math block');
assert.equal(await complete('```math\n```\n正文 \\al¦'), null);
// Not within a name; renaming an environment that has its \end renames both ends.
assert.equal(await complete('设 $\\fr¦ac{1}{2}$'), null);
assert.equal(await complete('设 $\\begin{pm¦atrix} a \\end{pmatrix}$'), null);
assert.equal(await accept('设 $\\begin{pm¦} a \\end{pmatrix}$', 'array'), '设 $\\begin{array}¦ a \\end{array}$');
assert.equal(await accept('\\[\n  \\begin{array}\n    \\begin{pm¦\n  \\end{array}\n\\]\n', 'pmatrix'), '\\[\n  \\begin{array}\n    \\begin{pmatrix}\n      ¦\n    \\end{pmatrix}\n  \\end{array}\n\\]\n', 'a new one inside another');
assert.equal(loads, 1, 'the entries are asked for once');
assert.deepEqual(JSON.parse(readFileSync(new URL('../src/katex-commands.json', import.meta.url), 'utf8')), JSON.parse(JSON.stringify(katexCommands())), 'src/katex-commands.json is up to date: npm run katex-commands');

// Enter after "\[" on a line: a line for the formula and "\]" (also with the "]" bracket pairing added),
// not when the formula is closed already.
function enter(marked) {
  const pos = marked.indexOf('¦');
  let state = EditorState.create({ doc: marked.replace('¦', ''), selection: { anchor: pos } });
  const handled = closeDisplayFormula({ get state() { return state; }, dispatch(spec) { state = state.update(spec).state; } });
  return handled && state.sliceDoc(0, state.selection.main.head) + '¦' + state.sliceDoc(state.selection.main.head);
}
assert.equal(enter('设\n\\[¦'), '设\n\\[\n¦\n\\]', 'not indented');
assert.equal(enter('* 项\n    \\[¦]'), '* 项\n    \\[\n    ¦\n    \\]', 'at the \\[ line\'s indentation');
assert.equal(enter('\\[¦\n    x\n\\]'), false, 'closed already');
assert.equal(enter('文字 \\[¦'), false, 'not after text');
assert.equal(enter('设\n\\[¦\\]'), '设\n\\[\n¦\n\\]', 'the \\] typed with \\[ moves down');
// "\[" and "\(" close as they are typed; Backspace between an empty pair removes both.
function type(marked, input) {
  const pos = marked.indexOf('¦');
  let state = EditorState.create({ doc: marked.replace('¦', ''), selection: { anchor: pos } });
  const view = { get state() { return state; }, dispatch(spec) { state = state.update(spec).state; } };
  const handled = input === 'Backspace' ? deleteFormulaDelimiters(view) : pairFormulaDelimiters(view, pos, pos, input);
  return handled && state.sliceDoc(0, state.selection.main.head) + '¦' + state.sliceDoc(state.selection.main.head);
}
assert.equal(type('设 \\¦', '['), '设 \\[¦\\]');
assert.equal(type('设 \\¦', '('), '设 \\(¦\\)');
assert.equal(type('设 \\\\¦', '['), false, 'not after an escaped backslash');
assert.equal(type('设 ¦', '['), false);
assert.equal(type('设 \\[¦\\]', 'Backspace'), '设 ¦');
assert.equal(type('设 \\[x¦\\]', 'Backspace'), false);
// After an input method commits: in a link's target.
const at = marked => { const pos = marked.indexOf('¦'); return EditorState.create({ doc: marked.replace('¦', ''), selection: { anchor: pos } }); };
assert.deepEqual(['见 [[光滑¦', '见 [[¦', '见 [[$¦', '正文¦'].map(text => afterComposition(at(text))), [true, false, false, false]);

// Tags (bananamark's and the site's): "<" and a letter; "</" closes the open one; a tag's parameters; languages and sides from lists. Not in
// code, formulas or the front matter, nor within a name.
assert.deepEqual(await complete('见 <s¦'), ['<s', ['<lang', '<align', '<spoiler', '<see', '<person']]);
assert.deepEqual(last.options.map(option => option.detail), ['外文', '居右或居中', '折叠的内容', undefined, undefined], 'words for bananamark\'s tags; a site gives its own');
assert.equal(await complete('见 <¦'), null, 'a letter first');
assert.equal(await complete('见 `<s¦`'), null);
assert.equal(await complete('$a <s¦$'), null);
assert.equal(await complete('---\ntitle: <s¦\n---\n'), null);
assert.equal(await complete('见 <s¦ee>'), null, 'within a name');
assert.equal(await accept('见 <s¦>甲</see>', '<see'), '见 <see¦>甲</see>', 'an existing tag: the name alone');
assert.equal(await accept('见 <see>[[甲]]</¦', '</see>'), '见 <see>[[甲]]</see>¦');
assert.equal(await accept('<align right>\n<lang en>x</lang> </¦', '</align>'), '<align right>\n<lang en>x</lang> </align>¦');
assert.equal(await complete('<see>甲</see> </¦'), null, 'nothing open');
assert.deepEqual(await complete('<lang ¦'), ['', ['de', 'en', 'grc']]);
assert.deepEqual(await complete('<lang g¦'), ['g', ['de', 'en', 'grc']]);
assert.deepEqual(await complete('甲 <person years="1" lang="¦" />'), ['', ['de', 'en', 'grc']]);
assert.deepEqual(await complete('<align ¦'), ['', ['right', 'center']]);
assert.equal(last.options[0].type, 'attribute', 'a bare parameter, as a parameter');
await complete('<lang ¦');
assert.equal(last.options[0].type, 'attribute');
await complete('甲 <person years="1" lang="¦" />');
assert.equal(last.options[0].type, 'value', 'a quoted value');
assert.deepEqual(await complete('甲 <person years="1" o¦ />'), ['o', ['original', 'lang', 'translit', 'ipa']], 'the parameters not yet written');
assert.equal(await complete('甲 <person years="1 o¦" />'), null, 'not within a value');
assert.deepEqual(await complete('甲 <person years="1"\n  o¦ />'), ['o', ['original', 'lang', 'translit', 'ipa']], 'on a line continuing the tag');
assert.deepEqual(await complete('甲 <person years="1"\n  lang="¦" />'), ['', ['de', 'en', 'grc']]);
assert.equal(await complete('甲 <person years="1"\n\no¦'), null, 'not after a blank line');
assert.deepEqual(await complete('<spoiler t¦'), ['t', ['title']]);
assert.equal(await accept('甲 <person y¦ />', 'years'), '甲 <person years="¦" />');
// Other tags: bananamark's <lang> unless removed, <align> when added, and a tag's snippet from its parameters.
{
  const plain = completionSources({ tags: { align: alignTagRule, box: { paired: true, named: { tone: {} } } } });
  const state = EditorState.create({ doc: '<b', selection: { anchor: 2 }, extensions: [bananaMarkdown()] });
  let result;
  for (const source of plain) if ((result = await source(new CompletionContext(state, 2, false)))) break;
  assert.deepEqual(result.options.map(option => option.label), ['<lang', '<align', '<box']);
  const withoutLang = completionSources({ tags: { lang: false, box: { paired: true } } });
  for (const source of withoutLang) if ((result = await source(new CompletionContext(state, 2, false)))) break;
  assert.deepEqual(result.options.map(option => option.label), ['<box'], 'lang: false removes <lang>');
}
// A dialect's environments and tags are its whole set: what it removed from bananamark's is not offered again.
{
  const dialect = defineDialect({ environments: { ...Object.fromEntries(Object.keys(defaultEnvironments).map(kind => [kind, false])), axiom: { name: 'Axiom', group: 'definition' } }, tags: { lang: false, box: { paired: true, render: ({ content }) => content } } });
  const offered = async (marked, options = {}) => {
    const pos = marked.indexOf('¦'), doc = marked.replace('¦', '');
    const context = new CompletionContext(EditorState.create({ doc, selection: { anchor: pos }, extensions: [bananaMarkdown()] }), pos, true);
    for (const source of completionSources({ dialect, ...options })) { const result = await source(context); if (result) return result.options.map(option => option.label); }
    return null;
  };
  assert.deepEqual(await offered(':::¦'), ['::: axiom']);
  assert.deepEqual(await offered('<¦'), ['<box']);
  // Options beside it are over bananamark's, as without a dialect.
  assert.deepEqual(await offered('<¦', { tags: { box: { paired: true } } }), ['<lang', '<box']);
}
console.log('补全：环境与代码块（行首）、环境标题与标签的简写、条目与别名（[[ 之后至少一个非 $ 字符）、本页与书中其他页面的标签、输入法结束后补全、KaTeX 命令与环境（公式内）、标签与其参数、语言与方向、结束标签、\\[ 回车补全 \\]，条目只取一次验证通过');
