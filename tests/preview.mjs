import { createProject } from './helpers/project.mjs';
import assert from 'node:assert/strict';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = await createProject('preview');
const page = async (path, text) => {
  await mkdir(join(root, 'content', path, '..'), { recursive: true });
  await writeFile(join(root, 'content', path), text);
};
const run = (script, ...args) => {
  const result = spawnSync(process.execPath, [`scripts/${script}.mjs`, ...args], { cwd: root, encoding: 'utf8' });
  return { status: result.status, output: result.stdout + result.stderr, json: args.includes('--json') ? JSON.parse(result.stdout) : undefined };
};
try {
  await page('wiki/甲/index.md', '---\ntitle: 甲\naliases: [甲别名]\n---\n\n[[乙]]、[[甲别名]]\n\n第二段 [[缺失]] 与 [[缺失|另一处]]\n');
  await page('wiki/乙/index.md', '---\ntitle: 乙\n---\n\n[[甲]]\n');
  await page('wiki/Draft Page/index.md', '---\ntitle: 草稿\ndraft: true\n---\n\n正文\n');
  await page('wiki/a{b,c}/index.md', '---\ntitle: 花括号\n---\n\n正文\n');

  // Only the requested pages are rendered, with relative URLs for file:// viewing.
  let result = run('preview', 'content/wiki/甲', 'content/wiki/a{b,c}/index.md', '--json');
  assert.equal(result.status, 0, result.output);
  assert.deepEqual(result.json.pages.map(item => [item.source, item.output]), [
    ['content/wiki/甲/index.md', '.build/page-preview/public/wiki/甲/index.html'],
    ['content/wiki/a{b,c}/index.md', '.build/page-preview/public/wiki/a{b,c}/index.html'],
  ]);
  assert.deepEqual(result.json.pages[0].missingLinks, [{ line: 8, target: '缺失' }]);
  const html = await readFile(join(root, result.json.pages[0].output), 'utf8');
  assert.match(html, /href="\.\.\/\.\.\/css\/site\.css"/);
  assert.match(html, /<a href="\.\.\/\.\.\/wiki\/%E4%B9%99\/" class="wiki-link">乙/);
  assert.match(html, /class="wiki-link wiki-link-missing">缺失/);
  await assert.rejects(readFile(join(root, '.build/page-preview/public/wiki/乙/index.html')), { code: 'ENOENT' });
  // Non-target pages keep only front matter; the full build's content is untouched.
  assert.doesNotMatch(await readFile(join(root, '.build/page-preview/content/wiki/乙/index.md'), 'utf8'), /\[甲\]/);
  await assert.rejects(readFile(join(root, '.build/content/wiki/甲/index.md')), { code: 'ENOENT' });

  // A later preview replaces the earlier output; drafts render with --buildDrafts.
  result = run('preview', 'content/wiki/Draft Page', '--json');
  assert.equal(result.json.pages[0].output, null);
  result = run('preview', 'content/wiki/Draft Page', '--buildDrafts', '--json');
  assert.equal(result.json.pages[0].output, '.build/page-preview/public/wiki/Draft_Page/index.html');
  await assert.rejects(readFile(join(root, '.build/page-preview/public/wiki/甲/index.html')), { code: 'ENOENT' });
  assert.match(run('preview', 'content/wiki/甲').output, /缺失条目 1 个：缺失（8 行）/);

  for (const [args, message] of [[[], /请指定/], [['content/wiki/不存在'], /文件不存在/], [['content/notices/提示.md'], /组件定义/], [['hugo.toml'], /不是 content/]]) {
    result = run('preview', ...args);
    assert.equal(result.status, 1);
    assert.match(result.output, message);
  }

  // check collects every error and attributes conflicts to both pages.
  await page('wiki/重名/index.md', '---\ntitle: 甲\n---\n');
  await page('wiki/坏引用/index.md', '---\ntitle: 坏引用\n---\n\n见 @eq:不存在。\n');
  await page('wiki/坏格式/index.md', '---\ntitle: [unclosed\n---\n');
  result = run('check', '--json');
  assert.equal(result.status, 1);
  assert.deepEqual(result.json.errors.map(error => [error.file, error.line]).sort(), [
    ['content/wiki/坏引用/index.md', 5], ['content/wiki/坏格式/index.md', 2], ['content/wiki/重名/index.md', null],
  ].sort());
  assert.match(result.json.errors.find(error => error.file.includes('重名')).message, /content\/wiki\/甲\/index\.md/);
  assert.ok(result.json.missingLinks.some(link => link.file === 'content/wiki/甲/index.md' && link.target === '缺失'));
  result = run('check', 'content/wiki/乙', '--json');
  assert.equal(result.status, 0, result.output);
  assert.equal(result.json.otherErrors, 2); // Other pages are loaded, not transformed.
  // A section directory (with _index.md) stands for every page below it.
  result = run('check', 'content/wiki', '--json');
  assert.equal(result.status, 1);
  assert.equal(result.json.errors.length, 3);
  assert.equal(result.json.otherErrors, 0);
  result = run('check', 'content/wiki/甲', '--json');
  assert.equal(result.status, 1);
  assert.deepEqual(result.json.errors.map(error => error.file), ['content/wiki/重名/index.md']);
  // Preview stops at the first error and reports it.
  result = run('preview', 'content/wiki/乙');
  assert.equal(result.status, 1);
  assert.match(result.output, /content\/wiki\/坏格式\/index\.md:2: /);
  console.log('单页预览：仅渲染目标页、相对地址、缺失链接行号、草稿参数与特殊路径；检查：收集全部错误、按页面归属、分节目录与 JSON 输出验证通过');
} finally { await rm(root, { recursive: true, force: true }); }
