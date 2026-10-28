import { execFileSync, spawn } from 'node:child_process';
import { cp, lstat, mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { platform } from 'node:os';
import { join, resolve } from 'node:path';
import { performance } from 'node:perf_hooks';
import { fileURLToPath } from 'node:url';
import { compareSites, formatReport } from './compare/diff.mjs';
import { allowed, allowedPath } from './compare/allowed.mjs';
import { elapsed, headline } from './shared/timing.mjs';

const say = (detail, ms) => ms === undefined ? `compare: ${detail}` : headline('compare', detail, ms);

/**
 * 对照检查（见 docs/compare.md）：用基准提交（默认 origin/main）与本工作目录
 * 各完整构建一次，逐个比较两边的 public/，把差异按种类归并写成报告。
 *
 * 基准在 .build/compare/base/ 中检出（git worktree，分离 HEAD），依赖相同时复制本目录的 node_modules（克隆或硬链接，
 * 不用符号链接：其中的三个包以相对路径链接到 packages/，基准须用它自己的），并复制本目录的 TikZ 缓存，免得重新编译。两边的内容（content/）应当相同：不同时会提示，
 * 报告中也会出现内容造成的差异。
 *
 * 用法：npm run compare -- [--base <提交>] [--no-fetch] [--skip-base] [--skip-result] [--report <文件>]
 * - --skip-base / --skip-result：不重新构建这一边，直接用上次的 public/。
 * - --report：报告写到哪里，默认 .build/compare/report.md。
 * 有差异（除 compare/allowed.mjs 中允许的以外）时退出码为 1。
 */
const root = fileURLToPath(new URL('../', import.meta.url));
const args = process.argv.slice(2);
const option = name => {
  const index = args.findIndex(arg => arg === `--${name}` || arg.startsWith(`--${name}=`));
  if (index < 0) return;
  return args[index].includes('=') ? args[index].split('=').slice(1).join('=') : args[index + 1];
};
const flag = name => args.includes(`--${name}`);
const workspace = join(root, '.build/compare');
const baseRoot = join(workspace, 'base');
const reportFile = resolve(option('report') ?? join(workspace, 'report.md'));
const git = (parameters, cwd = root) => execFileSync('git', parameters, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
const exists = path => stat(path).then(() => true, () => false);

let baseRef = option('base');
if (!baseRef) {
  baseRef = 'origin/main';
  if (!flag('no-fetch')) git(['fetch', '--quiet', 'origin', 'main']);
}
const baseCommit = git(['rev-parse', '--verify', `${baseRef}^{commit}`]);
const resultCommit = git(['rev-parse', 'HEAD']);

/**
 * The installed dependencies of a checkout, from its package-lock.json: without the workspace packages
 * (packages/), which are links into the checkout and not needed to build the base.
 */
async function dependencies(path) {
  const lock = JSON.parse(await readFile(join(path, 'package-lock.json'), 'utf8'));
  delete lock.packages?.['']?.workspaces;
  for (const [key, value] of Object.entries(lock.packages ?? {})) {
    if (key.startsWith('packages/') || value.link) delete lock.packages[key];
  }
  return JSON.stringify(lock.packages);
}

/** Checks out the base commit in .build/compare/base/, sharing node_modules when the lock files agree. */
async function prepareBase() {
  await mkdir(workspace, { recursive: true });
  if (await exists(join(baseRoot, '.git'))) {
    git(['checkout', '--quiet', '--detach', '--force', baseCommit], baseRoot);
    git(['clean', '--quiet', '-d', '--force', '--exclude=node_modules', '--exclude=.build'], baseRoot);
  } else {
    await rm(baseRoot, { recursive: true, force: true });
    git(['worktree', 'prune']);
    git(['worktree', 'add', '--quiet', '--detach', baseRoot, baseCommit]);
  }
  const [ours, theirs] = await Promise.all([dependencies(root), dependencies(baseRoot)]);
  const modules = join(baseRoot, 'node_modules'), installed = join(workspace, 'base-dependencies.json');
  const current = (await lstat(modules).catch(() => undefined))?.isDirectory() && await readFile(installed, 'utf8').catch(() => '');
  if (current !== theirs) {
    await rm(modules, { recursive: true, force: true });
    if (ours === theirs) {
      // A copy, not a link: the workspace's packages are linked relatively (node_modules/bananamark → ../packages/bananamark),
      // so the base uses its own packages/, not ours. Cloned (APFS) or hard-linked: quick.
      if (platform() === 'darwin') execFileSync('cp', ['-c', '-R', join(root, 'node_modules'), modules]);
      else if (platform() === 'linux') execFileSync('cp', ['-al', join(root, 'node_modules'), modules]);
      else await cp(join(root, 'node_modules'), modules, { recursive: true, verbatimSymlinks: true });
    } else {
      console.log(say('the base has other dependencies: installing them'));
      execFileSync('npm', ['ci', '--no-audit', '--no-fund'], { cwd: baseRoot, stdio: 'inherit' });
    }
    await writeFile(installed, theirs);
  }
  const tikz = join(root, '.build/tikz-cache');
  if (await exists(tikz)) await cp(tikz, join(baseRoot, '.build/tikz-cache'), { recursive: true, force: false, errorOnExist: false });
}

/**
 * Runs the full build in cwd, timing it. Where the platform's time(1) reports it, also returns the peak
 * memory of the largest single process of the build (prebuild, the site generator), in MB.
 */
function build(cwd, label) {
  const command = [process.execPath, join(cwd, 'scripts/build.mjs')];
  const timer = platform() === 'darwin' ? ['/usr/bin/time', '-l'] : platform() === 'linux' ? ['/usr/bin/time', '-v'] : [];
  return new Promise((done, fail) => {
    const start = performance.now();
    const child = spawn(timer[0] ?? command[0], [...timer.slice(1), ...(timer.length ? command : command.slice(1))], { cwd, stdio: ['ignore', 'inherit', 'pipe'] });
    let stderr = '';
    child.stderr.on('data', chunk => {
      stderr += chunk;
      // time(1) prints its report last; pass everything else through.
      if (!timer.length) process.stderr.write(chunk);
    });
    child.on('error', fail);
    child.on('close', code => {
      const seconds = (performance.now() - start) / 1000;
      let memory;
      if (timer.length) {
        const darwin = stderr.match(/(\d+)\s+maximum resident set size/), linux = stderr.match(/Maximum resident set size \(kbytes\): (\d+)/);
        memory = darwin ? Number(darwin[1]) / 2 ** 20 : linux ? Number(linux[1]) / 2 ** 10 : undefined;
        process.stderr.write(stderr.replace(/\n\s+\d+\.\d+ real[\s\S]*$|\n\s*Command being timed:[\s\S]*$/, '\n'));
      }
      if (code !== 0) return fail(new Error(`${label}: the build failed (exit code ${code})`));
      done({ seconds, memory });
    });
  });
}

const start = performance.now();
const notes = [`基准：\`${baseRef}\`（${baseCommit.slice(0, 7)}，${git(['log', '-1', '--format=%s', baseCommit])}）`, `结果：本工作目录（${resultCommit.slice(0, 7)}${git(['status', '--porcelain']) ? '，有未提交的修改' : ''}）`];
const contentDiffers = git(['diff', '--name-only', baseCommit, '--', 'content']);
if (contentDiffers) {
  const count = contentDiffers.split('\n').length;
  console.log(say(`content/ differs from the base in ${count} file(s): those differences will show up in the report too`));
  notes.push(`注意：两边的 content/ 有 ${count} 个文件不同，报告中包含内容造成的差异。`);
}

const timings = {};
if (!flag('skip-base')) {
  await prepareBase();
  console.log(say(`building the base (${baseRef}, ${baseCommit.slice(0, 7)}) in .build/compare/base/`));
  timings.base = await build(baseRoot, 'base');
}
if (!flag('skip-result')) {
  console.log(say('building the result in this directory'));
  timings.result = await build(root, 'result');
}
for (const [side, { seconds, memory }] of Object.entries(timings)) {
  notes.push(`${side === 'base' ? '基准' : '结果'}的构建：${seconds.toFixed(1)} 秒${memory ? `，单个进程的峰值内存 ${Math.round(memory)} MB` : ''}`);
}
if (allowed.length) notes.push(`允许的差异（compare/allowed.mjs）：${allowed.map(entry => entry.reason).join('；')}`);

const comparing = performance.now();
const comparison = await compareSites(join(baseRoot, 'public'), join(root, 'public'), {
  normalizers: allowed, paths: allowedPath,
  onProgress: process.stdout.isTTY ? (done, total) => process.stdout.write(`\r${say(`${done}/${total} files`)}`) : undefined,
});
if (process.stdout.isTTY) process.stdout.write('\r\x1b[K');
await mkdir(join(reportFile, '..'), { recursive: true });
await writeFile(reportFile, `${formatReport(comparison, { notes })}\n`);
const { changed, onlyBase, onlyResult, groups } = comparison;
const differences = changed.length + onlyBase.length + onlyResult.length;
console.log(say(differences
  ? `${changed.length} changed, ${onlyBase.length} only in the base, ${onlyResult.length} only in the result, in ${groups.length} group(s)`
  : `no differences in ${comparison.compared} files`, elapsed(comparing)));
console.log(say(`report: ${reportFile}`, elapsed(start)));
if (differences) process.exitCode = 1;
