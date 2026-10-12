import { createProject } from '../tests/helpers/project.mjs';
import { execFileSync, spawnSync } from 'node:child_process';
import { mkdir, readFile, realpath, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

// 构建性能基准：在临时副本中以现有词条为样本生成大量合成词条和 Git 历史，
// 分别计时 git 日期、prebuild、Hugo、postbuild 的冷构建与热构建（缓存已填充）。
// 用法：npm run bench -- [--pages 3000] [--commits 30] [--keep]
// --setup 只生成并保留临时副本，不计时，用于手动试验。
const args = process.argv.slice(2);
const option = (name, fallback) => {
  const index = args.indexOf(`--${name}`);
  return index === -1 ? fallback : Number(args[index + 1]);
};
const pages = option('pages', 3000), commits = option('commits', 30), setup = args.includes('--setup'), keep = setup || args.includes('--keep');

// 样本权重近似迁移后的条目构成：长短条目为主，少量组件和 TikZ。
const samples = [
  ['奇异上同调', 30], ['顶点代数', 30], ['example', 30], ['components-example', 8], ['tikz-example', 2],
];
// macOS 的临时目录经由符号链接，Git 报告的是真实路径。
const root = await realpath(await createProject('bench'));
const git = (...parameters) => execFileSync('git', parameters, { cwd: root, stdio: 'pipe', maxBuffer: 64 * 1024 * 1024 });

/** 让每页的公式和 TikZ 源码互不相同，避免 KaTeX/TikZ 缓存在页面之间命中。 */
function vary(body, i) {
  const symbol = source => source.replace(/(?<![\\A-Za-z])X(?![A-Za-z])/g, `{X_{${i}}}`).replace(/(?<![\\A-Za-z])A(?![A-Za-z])/g, `{A^{${i}}}`);
  return body
    .replace(/```(?:math|tikz)[^\n]*\n[\s\S]*?```|\\\[[\s\S]*?\\\]|\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g, symbol)
    .replace(/\\end\{tikzpicture\}/g, `\\node at (0,-3) {${i}};\n\\end{tikzpicture}`);
}

try {
  const sources = await Promise.all(samples.map(async ([name]) => {
    const text = await readFile(join(root, 'content/wiki', name, 'index.md'), 'utf8');
    const [, front, body] = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    return { front: front.replace(/^aliases:.*\n?/m, ''), body };
  }));
  const weights = samples.map(([, weight]) => weight), total = weights.reduce((a, b) => a + b);
  const files = [];
  for (let i = 0; i < pages; i++) {
    let pick = (i * 7919) % total, index = 0;
    while (pick >= weights[index]) pick -= weights[index++];
    const { front, body } = sources[index];
    const path = `content/wiki/bench-${i}/index.md`;
    await mkdir(join(root, `content/wiki/bench-${i}`), { recursive: true });
    await writeFile(join(root, path), `---\n${front.replace(/^title: (.*)$/m, (_, title) => `title: ${title.replace(/^"|"$/g, '')} ${i}`)}\n---\n${vary(body, i)}`);
    files.push(path);
  }
  git('init', '-q');
  git('-c', 'user.name=bench', '-c', 'user.email=bench@example.org', 'add', '-A');
  git('-c', 'user.name=bench', '-c', 'user.email=bench@example.org', 'commit', '-qm', 'import');
  for (let c = 0; c < commits; c++) {
    for (let k = 0; k < 50; k++) {
      const path = join(root, files[(c * 131 + k * 37) % files.length]);
      await writeFile(path, `${await readFile(path, 'utf8')}\n修订 ${c}。\n`);
    }
    git('-c', 'user.name=bench', '-c', 'user.email=bench@example.org', 'commit', '-qam', `edit ${c}`);
  }
  console.log(`已生成 ${pages} 个合成词条与 ${commits + 1} 个提交：${root}`);
  if (setup) process.exit();

  const time = async (label, action) => {
    const start = performance.now();
    await action();
    const seconds = (performance.now() - start) / 1000;
    console.log(`  ${label.padEnd(12)} ${seconds.toFixed(2)} s`);
    return seconds;
  };
  const run = (command, parameters) => () => {
    const result = spawnSync(command, parameters, { cwd: root, stdio: ['ignore', 'ignore', 'pipe'], maxBuffer: 64 * 1024 * 1024 });
    if (result.status !== 0) throw new Error(`${command} ${parameters.join(' ')} 失败：\n${result.stderr}`);
  };
  const { gitDates } = await import(pathToFileURL(join(root, 'scripts/prebuild/git-dates.mjs')));
  for (const round of ['冷构建', '热构建']) {
    console.log(round);
    let sum = 0;
    await time('git 日期', async () => {
      const dateFor = await gitDates(root);
      // 与 prebuild 一致，逐个文件查询。
      for (const path of files) if (!await dateFor(join(root, path))) throw new Error(`${path}: git 日期缺失`);
    });
    sum += await time('prebuild', run(process.execPath, ['scripts/prebuild.mjs']));
    sum += await time('hugo', run('hugo', ['--cleanDestinationDir', '--cacheDir', join(root, '.build/hugo-cache')]));
    sum += await time('postbuild', run(process.execPath, ['scripts/postbuild.mjs']));
    console.log(`  ${'合计'.padEnd(12)} ${sum.toFixed(2)} s（git 日期含在 prebuild 内）`);
  }
  console.log('单页（缓存已填充）');
  await time('preview', run(process.execPath, ['scripts/preview.mjs', files[0]]));
  await time('check', run(process.execPath, ['scripts/check.mjs', files[0]]));
  await time('check 全站', run(process.execPath, ['scripts/check.mjs']));
} finally {
  if (!keep) await rm(root, { recursive: true, force: true });
}
