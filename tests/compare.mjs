import assert from 'node:assert/strict';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { gzipSync } from 'node:zlib';
import { compareSites, decodeFragment, diffLines, formatReport, htmlLines } from '../scripts/compare/diff.mjs';

// diffLines: the shortest edit script, as hunks.
const apply = (a, hunks) => {
  const out = [];
  let i = 0;
  for (const hunk of hunks) {
    out.push(...a.slice(i, hunk.a));
    assert.deepEqual(a.slice(hunk.a, hunk.a + hunk.removed.length), hunk.removed);
    out.push(...hunk.added);
    i = hunk.a + hunk.removed.length;
  }
  return [...out, ...a.slice(i)];
};
for (const [a, b, edits] of [['abcabba', 'cbabac', 5], ['abc', 'abc', 0], ['', 'ab', 2], ['ab', '', 2], ['abc', 'abxc', 1], ['xaby', 'zabw', 4]]) {
  const hunks = diffLines([...a], [...b]);
  assert.deepEqual(apply([...a], hunks), [...b], `${a} → ${b}`);
  assert.equal(hunks.reduce((sum, hunk) => sum + hunk.removed.length + hunk.added.length, 0), edits, `${a} → ${b}`);
}
const long = Array.from({ length: 20000 }, (_, i) => `l${i}`), edited = long.slice();
edited[5000] = 'X';
edited.splice(15000, 0, 'Y');
assert.deepEqual(diffLines(long, edited), [
  { a: 5000, b: 5000, removed: ['l5000'], added: ['X'] },
  { a: 15000, b: 15000, removed: [], added: ['Y'] },
]);
// Too many edits: reported as rewritten.
assert.equal(diffLines(long, long.map(line => `${line}!`), 100), undefined);

assert.deepEqual(htmlLines('<p class="a">文字 <em>强调</em></p>\n<br>'), ['<p class="a">', '文字', '<em>', '强调', '</em>', '</p>', '<br>']);
assert.deepEqual(htmlLines('<meta content="μ(E)<δ, a>b">文字'), ['<meta content="μ(E)<δ, a>b">', '文字']);

const fragment = page => gzipSync(Buffer.from(`pagefind_dcd${JSON.stringify(page)}`));
assert.deepEqual(decodeFragment(fragment({ url: '/a/', content: '文字' })), { url: '/a/', content: '文字' });

// compareSites: missing files, groups of the same change, allowed differences, search documents.
const root = await mkdtemp(join(tmpdir(), 'banana-compare-'));
try {
  const site = async (name, files) => {
    for (const [path, content] of Object.entries(files)) {
      await mkdir(dirname(join(root, name, path)), { recursive: true });
      await writeFile(join(root, name, path), content);
    }
    return join(root, name);
  };
  const page = (title, body) => `<html><head><title>${title}</title></head><body><main>${body}</main></body></html>`;
  const base = await site('base', {
    'a/index.html': page('甲', '<p>甲的正文</p><span class="eq">1</span>'),
    'b/index.html': page('乙', '<p>乙的正文</p><span class="eq">2</span>'),
    'c/index.html': page('丙', '<p>丙</p>'),
    'd/index.html': page('丁', '<p>丁</p>'),
    'same.css': 'body {}',
    'old.txt': 'x',
    'pagefind/fragment/one.pf_fragment': fragment({ url: '/a/', content: '甲的正文。第二句。', word_count: 3 }),
    'pagefind/pagefind.js': 'base',
  });
  const result = await site('result', {
    'a/index.html': page('甲', '<p>甲的正文</p><span class="eq number">1</span>'),
    'b/index.html': page('乙', '<p>乙的正文</p><span class="eq number">2</span>'),
    'c/index.html': page('丙', '<p>丙！</p>'),
    'd/index.html': `${page('丁', '<p>丁</p>')}\n`,
    'same.css': 'body {}',
    'new.txt': 'y',
    'pagefind/fragment/two.pf_fragment': fragment({ url: '/a/', content: '甲的正文。第三句。', word_count: 3 }),
    'pagefind/pagefind.js': 'result',
  });
  const normalizers = [{ reason: '末尾换行', normalize: (path, text) => text.trimEnd() }];
  const comparison = await compareSites(base, result, { normalizers });
  assert.deepEqual(comparison.onlyBase, ['old.txt']);
  assert.deepEqual(comparison.onlyResult, ['new.txt']);
  assert.deepEqual(comparison.changed.map(file => file.path), ['a/index.html', 'b/index.html', 'c/index.html', 'search:/a/']);
  // a and b changed in the same way (on different text and numbers): one group.
  assert.deepEqual(comparison.groups.map(group => group.paths), [['a/index.html', 'b/index.html'], ['c/index.html'], ['search:/a/']]);
  assert.deepEqual(comparison.changed[3].hunks, [{ a: 2, b: 2, removed: ['第二句。'], added: ['第三句。'] }]);
  const report = formatReport(comparison, { notes: ['说明'] });
  assert.match(report, /4 个不同，1 个只在基准中，1 个只在结果中/);
  assert.match(report, /## 差异 1：2 个文件/);
  assert.match(report, /- <span class="eq">\n\+ <span class="eq number">/);
  // Without the normalizer, the trailing newline is a difference of its own.
  assert.equal((await compareSites(base, result)).changed.length, 5);
} finally {
  await rm(root, { recursive: true, force: true });
}

console.log('compare tests passed');
