import { spawn } from 'node:child_process';
import { withoutKatexNoise } from './shared/hugo-log.mjs';
import { readdir, readFile, rm, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { join, relative, resolve } from 'node:path';
import { prebuild } from './prebuild/run.mjs';
import { hugoPath, resolvePages } from './shared/pages.mjs';

// 只渲染指定页面：全站 front matter 照常预处理（条目索引、分类与书册需要），
// 但只转换目标页面正文，Hugo 只渲染目标页面，postbuild 只处理这些页面。
// 用法：npm run preview -- <页面文件或目录>... [--json] [--buildDrafts 等 Hugo 参数]
// Hugo 参数只接受 --flag 或 --flag=value 形式，以免与页面路径混淆；单独的 -- 之后的参数原样交给 Hugo。
// --output=<目录> 改变输出位置（默认 .build/page-preview）；--base-url=<地址> 生成绝对地址，
// 供 serve 把结果并入整站预览，不指定时使用相对地址。--whole-collections 渲染目标页面所在书册的
// 全部页面（含自动目录页）：书册页面的正文会改变同组其他页面的编号与引用，serve 用它更新整组。
const root = fileURLToPath(new URL('../', import.meta.url));
const separator = process.argv.indexOf('--', 2);
const args = separator < 0 ? process.argv.slice(2) : process.argv.slice(2, separator);
const option = name => args.find(arg => arg.startsWith(`--${name}=`))?.slice(name.length + 3);
const own = arg => arg === '--json' || arg === '--whole-collections' || /^--(?:output|base-url)=/.test(arg);
const output = resolve(option('output') ?? join(root, '.build/page-preview'));
const baseURL = option('base-url');
const json = args.includes('--json');
const wholeCollections = args.includes('--whole-collections');
const hugoArgs = [...args.filter(arg => arg.startsWith('-') && !own(arg)), ...(separator < 0 ? [] : process.argv.slice(separator + 1))];
const relativePath = path => relative(root, path).split('\\').join('/');

function run(command, parameters) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, parameters, { cwd: root, stdio: ['ignore', 'pipe', 'pipe'] });
    let log = '';
    child.stdout.on('data', chunk => { log += chunk; });
    child.stderr.on('data', chunk => { log += chunk; });
    child.once('error', reject);
    child.once('close', code => {
      log = withoutKatexNoise(log);
      return code === 0 ? resolve(log) : reject(Object.assign(new Error(`${command} 失败`), { log }));
    });
  });
}

async function htmlFiles(directory, files = []) {
  for (const entry of await readdir(directory, { withFileTypes: true }).catch(() => [])) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await htmlFiles(path, files);
    else if (entry.name.endsWith('.html')) files.push(path);
  }
  return files;
}

const timings = {}, warnings = [];
const timed = async (name, action) => {
  const start = performance.now();
  try { return await action(); } finally { timings[name] = Math.round(performance.now() - start); }
};
let report;
try {
  const pages = await resolvePages(root, args.filter(arg => !arg.startsWith('-')));
  if (!pages.size) throw new Error('请指定要预览的页面文件或目录');
  const { links, collections } = await timed('prebuild', () => prebuild({ destination: join(output, 'content'), pages }));
  // Hugo 的 path 匹配使用 glob，页面名中的元字符需要转义。
  const glob = path => path.replace(/[\\*?[\]{},]/g, '\\$&');
  const paths = [...pages].map(page => glob(hugoPath(page)));
  if (wholeCollections) for (const prefix of collections) {
    if (![...pages].some(page => page.startsWith(prefix))) continue;
    const base = glob(hugoPath(`${prefix}_index.md`));
    paths.push(base, `${base}/**`);
  }
  // 相对地址让预览页面直接以 file:// 打开，也可放在任意静态服务器下。
  const segment = `${baseURL ? '' : 'relativeURLs = true\n'}[segments.preview]\n${paths.map(path => `[[segments.preview.includes]]\npath = ${JSON.stringify(path)}\n`).join('')}`;
  await mkdir(output, { recursive: true });
  await writeFile(join(output, 'segments.toml'), segment);
  const site = join(output, 'public');
  const log = await timed('hugo', () => run('hugo', [
    '--config', `hugo.toml,${join(output, 'segments.toml')}`, '--renderSegments', 'preview',
    '--contentDir', join(output, 'content'), '--destination', site, '--cleanDestinationDir',
    '--environment', 'development', '--cacheDir', join(root, '.build/hugo-cache'),
    '--baseURL', baseURL ?? '/', ...hugoArgs,
  ]));
  for (const line of log.split('\n')) if (/^(?:WARN|ERROR)\b/.test(line)) warnings.push(line);
  await timed('postbuild', () => run(process.execPath, ['scripts/postbuild.mjs', site]));
  const rendered = new Map();
  for (const file of await htmlFiles(site)) {
    const source = (await readFile(file, 'utf8')).match(/<html\b[^>]*\bdata-source="([^"]*)"/)?.[1];
    if (source) rendered.set(source, file);
  }
  report = {
    ok: true,
    pages: [...pages].map(page => ({
      source: `content/${page}`,
      output: rendered.has(page) ? relativePath(rendered.get(page)) : null,
      missingLinks: links.filter(link => link.file === join(root, 'content', page)).map(({ line, target }) => ({ line, target })),
    })),
    warnings, timings,
  };
} catch (error) {
  report = { ok: false, error: error.message, log: error.log?.trim(), warnings, timings };
  process.exitCode = 1;
}

if (json) console.log(JSON.stringify(report, null, 2));
else if (!report.ok) {
  console.error(report.error);
  if (report.log) console.error(report.log);
} else {
  for (const page of report.pages) {
    console.log(`${page.source}\n  → ${page.output ? pathToFileURL(join(root, page.output)).href : '未生成（草稿或未发布页面？）'}`);
    const missing = Map.groupBy(page.missingLinks, link => link.target);
    if (missing.size) console.log(`  缺失条目 ${missing.size} 个：${[...missing].map(([target, list]) => `${target}（${[...new Set(list.map(link => link.line))].join('、')} 行）`).join('，')}`);
  }
  for (const warning of report.warnings) console.log(warning);
  console.log(`用时：${Object.entries(report.timings).map(([name, ms]) => `${name} ${(ms / 1000).toFixed(2)} s`).join('，')}`);
}
