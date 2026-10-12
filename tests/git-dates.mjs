import assert from 'node:assert/strict';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { parse } from 'yaml';
import { createProject, buildProject } from './helpers/project.mjs';

const root = await createProject('git-dates');
const file = 'content/wiki/git-date/index.md';
const source = text => `---\ntitle: 提交日期\ndate: 2001-01-01\n---\n${text}\n`;
const git = (args, date) => execFileSync('git', ['-c', 'user.name=Test', '-c', 'user.email=test@example.invalid', '-c', 'core.hooksPath=/dev/null', ...args], {
  cwd: root, stdio: 'pipe', env: { ...process.env, GIT_AUTHOR_DATE: '2000-01-01T00:00:00Z', ...(date ? { GIT_COMMITTER_DATE: date } : {}) },
});
const generated = async () => parse((await readFile(join(root, '.build', file), 'utf8')).split('---\n')[1]);
const html = () => readFile(join(root, 'public/wiki/git-date/index.html'), 'utf8');
try {
  await mkdir(join(root, 'content/wiki/git-date'), { recursive: true });
  await writeFile(join(root, file), source('第一次'));
  buildProject(root);
  assert.equal((await generated()).gitLastmod, undefined);
  assert.doesNotMatch(await html(), /last-modified/); // No fallback to date or file mtime.
  git(['init']);
  git(['add', file]);
  buildProject(root); // Staged source in a repository with no commits.
  assert.equal((await generated()).gitLastmod, undefined);
  git(['commit', '-m', 'First'], '2024-06-01T12:30:00Z');
  buildProject(root);
  assert.equal((await generated()).gitLastmod, '2024-06-01T12:30:00Z');
  assert.match(await html(), /datetime="2024-06-01T12:30:00Z"/);
  assert.match(await html(), /2024 年 6 月 1 日 12:30 UTC/);
  assert.match(await html(), /data-local-time/);
  await writeFile(join(root, file), source('尚未提交'));
  buildProject(root);
  assert.equal((await generated()).gitLastmod, '2024-06-01T12:30:00Z');
  git(['add', file]);
  git(['commit', '-m', 'Second'], '2025-08-02T18:00:00+08:00');
  buildProject(root);
  assert.equal((await generated()).gitLastmod, '2025-08-02T18:00:00+08:00');
  assert.match(await html(), /datetime="2025-08-02T10:00:00Z"/);
  assert.match(await html(), /2025 年 8 月 2 日 10:00 UTC/);
  for (const field of ['lastmod', 'lastMod', 'gitLastmod']) {
    await writeFile(join(root, file), source('手动日期').replace('date:', `${field}: 2026-01-01\ndate:`));
    assert.throws(() => buildProject(root), /不能手动填写/);
  }
  for (const declaration of ['urlAliases: [/old/]', '']) {
    await writeFile(join(root, file), source('当前语法').replace('date:', `${declaration}\ndate:`));
    if (declaration) assert.throws(() => buildProject(root), /不支持旧网址重定向/);
  }
  for (const shortcode of ['toc', 'block', 'centre', 'dimmed']) {
    await writeFile(join(root, file), source(`{{< ${shortcode} >}}`));
    assert.throws(() => buildProject(root), /页面中不能写 Hugo 短代码/);
  }
  console.log('Git 提交者日期、未提交与无历史页面、日期更新、手动日期拒绝及旧写作组件移除验证通过');
} finally { await rm(root, { recursive: true, force: true }); }
