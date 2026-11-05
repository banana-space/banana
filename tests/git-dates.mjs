import assert from 'node:assert/strict';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { createProject, buildProject, generatedPages } from './helpers/project.mjs';

const root = await createProject('git-dates');
const file = 'content/wiki/git-date/index.md';
const source = text => `---\ntitle: 提交日期\n---\n${text}\n`;
const git = (args, date) => execFileSync('git', ['-c', 'user.name=Test', '-c', 'user.email=test@example.invalid', '-c', 'core.hooksPath=/dev/null', ...args], {
  cwd: root, stdio: 'pipe', env: { ...process.env, GIT_AUTHOR_DATE: '2000-01-01T00:00:00Z', ...(date ? { GIT_COMMITTER_DATE: date } : {}) },
});
const generated = async () => generatedPages(root).get('wiki/git-date/index.md').metadata;
const html = () => readFile(join(root, 'public/wiki/git-date/index.html'), 'utf8');
try {
  await mkdir(join(root, 'content/wiki/git-date'), { recursive: true });
  await writeFile(join(root, file), source('第一次'));
  buildProject(root);
  assert.equal((await generated()).gitLastmod, undefined);
  assert.doesNotMatch(await html(), /last-modified/); // No fallback to date or file mtime.
  git(['init']);
  git(['add', file]);
  // Staged source in a repository with no commits.
  assert.equal((await generated()).gitLastmod, undefined);
  git(['commit', '-m', 'First'], '2024-06-01T12:30:00Z');
  buildProject(root);
  assert.equal((await generated()).gitLastmod, '2024-06-01T12:30:00Z');
  assert.match(await html(), /datetime="2024-06-01T12:30:00Z"/);
  assert.match(await html(), /2024 年 6 月 1 日 12:30 UTC/);
  assert.match(await html(), /data-local-time/);
  await writeFile(join(root, file), source('尚未提交'));
  assert.equal((await generated()).gitLastmod, '2024-06-01T12:30:00Z');
  git(['add', file]);
  git(['commit', '-m', 'Second'], '2025-08-02T18:00:00+08:00');
  buildProject(root);
  assert.equal((await generated()).gitLastmod, '2025-08-02T18:00:00+08:00');
  assert.match(await html(), /datetime="2025-08-02T10:00:00Z"/);
  assert.match(await html(), /2025 年 8 月 2 日 10:00 UTC/);
  // A date is the commit's: a page cannot give its own.
  for (const field of ['lastmod', 'gitLastmod']) {
    await writeFile(join(root, file), source('手动日期').replace('title:', `${field}: 2026-01-01\ntitle:`));
    assert.throws(() => generatedPages(root), new RegExp(`不能使用字段 “${field}”`));
  }
  // Double braces are text.
  await writeFile(join(root, file), source('{{< toc >}} 与 {{% block %}}'));
  buildProject(root);
  assert.match(await html(), /\{\{&lt; toc &gt;\}\} 与 \{\{% block %\}\}/);
} finally { await rm(root, { recursive: true, force: true }); }
