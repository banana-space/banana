import assert from 'node:assert/strict';
import { markPath, marksIn, minorPages } from '../scripts/shared/minor-edits.mjs';

// The marks of minor edits in commit messages (scripts/shared/minor-edits.mjs).
assert.deepEqual(['wiki/群', '/wiki/群/', 'content/wiki/群/index.md', 'books/书/一.md'].map(markPath),
  ['content/wiki/群/index.md', 'content/wiki/群/index.md', 'content/wiki/群/index.md', 'content/books/书/一.md'], '页面的写法');
assert.deepEqual(marksIn('标题\n\n正文提到 Minor-edit: 不是行首\nminor-edit: ALL\nMajor-Edit:  wiki/群  \nMinor-edit:'),
  [{ minor: true, all: true }, { minor: false, path: 'content/wiki/群/index.md' }], '只读行首的标记，不分大小写，空的不算');
const pages = ['content/wiki/甲/index.md', 'content/wiki/乙/index.md', ['content/wiki/丙/index.md', 'content/wiki/旧丙/index.md']];
assert.deepEqual([...minorPages(['改写', 'x\n\nMinor-edit: all\nMajor-edit: wiki/甲'], pages)], ['content/wiki/乙/index.md', 'content/wiki/丙/index.md'], 'all 之后的单页标记');
assert.deepEqual([...minorPages(['Minor-edit: wiki/乙', 'Major-edit: all'], pages)], [], '后来的 all 取代之前的单页标记');
assert.deepEqual([...minorPages(['Minor-edit: wiki/旧丙'], pages)], ['content/wiki/丙/index.md'], '改名的页面也认旧名');
assert.deepEqual([...minorPages(['没有标记'], pages)], [], '默认都是主要修改');
console.log('小修改的标记：页面的写法、只读行首、all 与单页的先后、改名、默认验证通过');
