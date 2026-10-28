import assert from 'node:assert/strict';
import { transformDocument } from 'bananamark';
import { translation, readTerms, termsBlock } from '../scripts/shared/terms.mjs';

// The site's term translations (scripts/shared/terms.mjs), a data block of bananamark.
const transform = (source, options) => transformDocument(source, { dataBlocks: { terms: termsBlock }, lang: 'zh-cn', locale: 'zh-cn', ...options });

const fail = (message, offset) => { throw new Error(`${offset ?? 0}: ${message}`); };
assert.deepEqual(translation('位<い>相<そう>空間', 'ja', fail).ruby, [{ text: '位', reading: 'い' }, { text: '相', reading: 'そう' }, { text: '空間' }]);
assert.deepEqual(translation('[位相]<いそう>', 'ja', fail).ruby, [{ text: '位相', reading: 'いそう' }]);
assert.deepEqual(translation('位相空<くう>間', 'ja', fail).ruby, [{ text: '位相' }, { text: '空', reading: 'くう' }, { text: '間' }]);
assert.deepEqual(translation('埋<う>め込<こ>み', 'ja', fail).ruby, [{ text: '埋', reading: 'う' }, { text: 'め' }, { text: '込', reading: 'こ' }, { text: 'み' }]);
assert.deepEqual(translation('から[写像]<しゃぞう>へ', 'ja', fail).ruby, [{ text: 'から' }, { text: '写像', reading: 'しゃぞう' }, { text: 'へ' }]);
assert.deepEqual(translation('$L^p$ 空<くう>間', 'ja', fail).ruby, [{ text: 'L^p ', parts: [{ tex: 'L^p', text: 'L^p' }, { text: ' ' }] }, { text: '空', reading: 'くう' }, { text: '間' }]);
assert.deepEqual(translation('$a<b$ 線<せん>', 'ja', fail).ruby.map((part) => part.reading), [undefined, 'せん']);
assert.throws(() => translation('$x$<えっくす>', 'ja', fail), /注音前必须有文字/);
// Terms are typeset like Markdown text, outside formulas; Japanese stays as written.
assert.equal(translation("l'Hôpital's rule", 'en', fail).text, 'l’Hôpital’s rule');
assert.deepEqual(translation("théorème d'Euler :m", 'fr', fail), { text: 'théorème d’Euler', gender: 'm' });
assert.deepEqual(translation({ text: 'the "free" monoid', note: "Bayes' sense" }, 'en', fail), { text: 'the “free” monoid', note: 'Bayes’ sense' });
assert.deepEqual(translation("$f'$-module -- $g$'s", 'en', fail).parts.map(part => part.tex ?? part.text), ["f'", '-module – ', 'g', '’s']);
assert.equal(translation("ア'イ", 'ja', fail).text, "ア'イ");
assert.equal(readTerms("l'Hôpital 法则:\n  en: l'Hôpital's rule\n", fail)[0].title, 'l’Hôpital 法则');
assert.throws(() => translation('[$x$ 空間]<えっくすくうかん>', 'ja', fail), /注音前必须有文字/);
assert.deepEqual(translation('𠮷<よし>田', 'ja', fail).ruby, [{ text: '𠮷', reading: 'よし' }, { text: '田' }]);
assert.deepEqual(translation({ text: '埋め込み', reading: ['う', null, 'こ', null] }, 'ja', fail).ruby, [{ text: '埋', reading: 'う' }, { text: 'め' }, { text: '込', reading: 'こ' }, { text: 'み' }]);
assert.deepEqual(translation({ text: '位相', reading: ['い', 'そう'] }, 'ja', fail).ruby, [{ text: '位', reading: 'い' }, { text: '相', reading: 'そう' }]);
assert.deepEqual(translation({ text: '位相', ruby: [{ text: '位相', reading: 'いそう' }] }, 'ja', fail).ruby, [{ text: '位相', reading: 'いそう' }]);
assert.equal(translation('groupe :m', 'fr', fail).gender, 'm');
assert.equal(translation('Gruppe :f', 'de', fail).gender, 'f');
for (const [value, lang, message] of [
  ['群<ぐん', 'ja', /假名格式/], ['groupe :x', 'fr', /未知性别/],
  ['<ぐん>', 'ja', /假名格式/], ['群<>', 'ja', /假名格式/],
  ['[位相]<いそう', 'ja', /假名格式/], ['群<ぐん><ぐん>', 'ja', /假名格式/],
  [{ text: '位相', reading: ['い'] }, 'ja', /逐字对应/],
  [{ text: '群', ruby: [{ text: '環', reading: 'かん' }] }, 'ja', /与 text 一致/],
  [{ text: 'group', reading: 'ぐん' }, 'en', /仅用于日语/],
  [{ text: 'groupe', pos: 'noun' }, 'fr', /未知译名字段/],
]) assert.throws(() => translation(value, lang, fail), message);
assert.match(transform('````markdown\n```terms\n群:\n  en: group\n```\n````').markdown, /```terms/);
assert.throws(() => transform('```terms\n群:\n  ja: 群<ぐん\n```', { file: 'source.md', lineOffset: 5 }), /source.md:8:.*假名格式/);
assert.throws(() => transform('```terms\n群: {en: group}\n群: {en: ring}\n```'), /YAML 无效/);
assert.throws(() => transform('```terms\n群:\n  ja:\n```'), /译名必须是文字或字段映射/);
assert.throws(() => transform('::: theorem\n```terms\n群: {en: group}\n```\n:::'), /环境之外/);
const withoutTerms = transform('前段\n```terms\n群: {en: group}\n```\n中段\n```terms\n环: {en: ring}\n```\n后段');
assert.deepEqual(withoutTerms.meta.data.terms.flat().map(term => term.title), ['群', '环']);
assert.equal(withoutTerms.markdown, '前段\n\n中段\n\n后段');

console.log('terms: passed');
