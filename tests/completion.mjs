import assert from 'node:assert/strict';
import { EditorState } from '@codemirror/state';
import { CompletionContext } from '@codemirror/autocomplete';
import { bananamarkLanguage } from 'bananamark-codemirror';
import { afterComposition, completionSources } from '../scripts/editor/completion.mjs';
import { dialectLanguages } from '../scripts/shared/dialect.mjs';

// The editor's completion (scripts/editor/completion.mjs): bananamark-codemirror's (tested in its package), with the
// site's settings from the build's names file, and the categories in the front matter.
const names = {
  entries: [{ title: '$L^p$ 空间', aliases: ['Lp 空间'] }, { title: '群', aliases: [] }],
  categories: ['代数学', '群论'],
  environments: [{ name: 'proof', label: '证明' }, { name: 'theorem', label: '定理' }],
  languages: { de: '德语', en: '英语', grc: '古希腊语' },
};
let fetches = 0;
globalThis.fetch = async () => { fetches++; return { json: async () => names }; };
const sources = completionSources('/names.json', key => `«${key}»`);
/** What the sources offer with the cursor at "¦" in text: [typed, labels] of the first that offers anything. */
async function complete(marked, explicit = false) {
  const pos = marked.indexOf('¦'), doc = marked.replace('¦', '');
  const context = new CompletionContext(EditorState.create({ doc, selection: { anchor: pos }, extensions: [bananamarkLanguage({ codeLanguages: dialectLanguages, wikiLinks: true })] }), pos, explicit);
  for (const source of sources) {
    const result = await source(context);
    if (result) { last = result; return [doc.slice(result.from, pos), result.options.map(option => option.label)]; }
  }
  return null;
}
let last;

// The site's environments (data/theorems.yaml, with their Chinese names), data block, tags and their words.
assert.deepEqual(await complete(':::¦', true), [':::', ['::: proof', '::: theorem']]);
assert.deepEqual(last.options.map(option => option.detail), ['证明', '定理']);
assert.deepEqual(await complete('```¦'), ['```', ['```math', '```tikz', '```terms', '```bibliography']]);
assert.deepEqual(last.options.map(option => option.detail), ['公式（可编号）', 'TikZ 图形', '«completion_terms»', '参考文献']);
assert.deepEqual(await complete('见 <s¦'), ['<s', ['<lang', '<align', '<spoiler', '<see', '<problems', '<disambiguation', '<tip', '<person']]);
assert.deepEqual(last.options.map(option => option.detail), ['外文', '居右或居中', '折叠的内容', '«completion_tag_see»', '«completion_tag_problems»', '«completion_tag_disambiguation»', '«completion_tag_tip»', '«completion_tag_person»']);
assert.deepEqual(await complete('甲 <person years="1" o¦ />'), ['o', ['original', 'lang', 'translit', 'ipa']]);
assert.deepEqual(await complete('甲 <person lang="¦" />'), ['', ['de', 'en', 'grc']]);
assert.deepEqual(await complete('见 [[群¦'), ['群', ['$L^p$ 空间', 'Lp 空间', '群']]);
// KaTeX's commands come with the package.
assert.ok((await complete('设 $\\alp¦$'))[1].includes('\\alpha'));
// Categories in the front matter, in a flow list or a block list.
assert.deepEqual(await complete('---\ntitle: 甲\ncategories: [代数学, 群¦]\n---\n'), ['群', ['代数学', '群论']]);
assert.deepEqual(await complete('---\ncategories:\n  - 群¦\n---\n'), ['群', ['代数学', '群论']]);
assert.equal(await complete('---\naliases:\n  - 群¦\n---\n'), null, 'not under another key');
assert.equal(await complete('---\ntitle: 甲\n---\ncategories: [群¦]\n'), null, 'not in the body');
assert.equal(await complete('---\ncategories: [代数学, ¦]\n---\n'), null, 'once something is typed');
assert.equal(fetches, 1, 'the names are fetched once');
// After an input method commits: in a link's target or a category.
const at = marked => { const pos = marked.indexOf('¦'); return EditorState.create({ doc: marked.replace('¦', ''), selection: { anchor: pos } }); };
assert.deepEqual(['见 [[光滑¦', '见 [[¦', '---\ncategories: [代数¦', '  - 代数¦', '正文¦'].map(text => afterComposition(at(text))), [true, false, true, true, false]);
console.log('编辑器补全：站点的环境、数据块与标签及其文字、条目与语言、KaTeX 命令、导言区的分类、输入法结束后补全，名称只取一次验证通过');
