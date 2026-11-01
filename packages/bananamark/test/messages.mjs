import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { renderDocument } from './zh.mjs';
import zh from 'bananamark/messages/zh-cn';
import en from 'bananamark/messages/en';

// Every message the package uses is in each table, and the tables have the same keys and the same values in them.
const source = new URL('../src/', import.meta.url);
let code = '';
for (const directory of ['syntax/', 'render/']) {
  for (const file of await readdir(new URL(directory, source))) code += await readFile(new URL(directory + file, source), 'utf8');
}
const used = new Set([...code.matchAll(/\bt\(\s*['"`]([a-z_]+)['"`]/g)].map(match => match[1]));
for (const key of used) assert.ok(Object.hasOwn(zh, key), `zh-cn.mjs has no ${key}`);
assert.deepEqual(Object.keys(en).sort(), Object.keys(zh).sort(), 'en.mjs and zh-cn.mjs have the same keys');
const values = template => [...template.matchAll(/\{([a-z][A-Za-z0-9]*)\}/g)].map(match => match[1]).sort();
for (const key of Object.keys(zh)) assert.deepEqual(values(en[key]), values(zh[key]), `${key}: the same values`);

// A page in English (lang); its errors are in the locale.
{
  const page = renderDocument('## Groups {@sec:g}\n\n::: theorem [Lagrange] {@thm:l}\nText.\n:::\n\n::: proof\nBy @sec:g.\n:::\n\nSee @thm:l and [[Ring]].\n\n```bibliography\nb:\n  type: book\n  title: Algebra\n  author: [A B, C D, E F]\n  translator: G H\n  language: ru\n```\n\n@b', { lang: 'en' });
  assert.match(page.html, /<p class="bm-envtitle">Theorem <span class="bm-envnumber">1\.1<\/span> <span class="bm-envnote">\(Lagrange\)<\/span><\/p>/);
  assert.match(page.html, /<span class="bm-envtitle">Proof\. <\/span>/);
  // The title with what its message puts around it stands apart from the name and the number, wherever the message has it.
  assert.match(renderDocument('::: theorem [T]\nx\n:::', { lang: 'en', messages: { en: { environment_title: '{title}: {caption}' } } }).html,
    /<p class="bm-envtitle"><span class="bm-envnote">T:<\/span> Theorem <span class="bm-envnumber">1<\/span><\/p>/);
  assert.match(page.html, /By <a href="#groups" class="bm-reference">Section 1<\/a>\./);
  assert.match(page.html, /See <a href="#thm:l" class="bm-reference">Theorem 1\.1<\/a> and <a title="Article not yet created: Ring"/);
  assert.match(page.html, /B et al\., n\.d\./);
  assert.match(page.html, /\(in Russian\)/);
  assert.match(page.html, /<em>Algebra<\/em><\/span> \(in Russian\)\. Translated by G H\./);
  assert.throws(() => renderDocument('@nowhere', { locale: 'en' }), /no such label: nowhere/);
}

console.log('messages: passed');
