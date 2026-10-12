import { fileURLToPath } from 'node:url';
import { relative } from 'node:path';
import { prebuild } from './prebuild/run.mjs';
import { resolvePages } from './shared/pages.mjs';
import { describeError } from './shared/errors.mjs';

// 只运行预处理检查，不调用 Hugo：收集全部错误（而不是第一个）和缺失条目链接。
// 用法：npm run check -- [页面文件或目录]... [--json] [--buildDrafts 等发布参数]
// 指定页面时只转换这些页面，并只报告它们的错误；全站配置错误总会报告。
const root = fileURLToPath(new URL('../', import.meta.url));
const args = process.argv.slice(2);
const json = args.includes('--json');
const relativePath = path => relative(root, path).split('\\').join('/');

const describe = ({ file, error }) => describeError(root, error, file);

let report;
try {
  const pages = await resolvePages(root, args.filter(arg => !arg.startsWith('-')));
  const start = performance.now();
  const result = await prebuild({ check: true, pages: pages.size ? pages : undefined });
  const errors = result.errors.map(describe);
  // Other pages' errors are real but belong to someone else's edit. A conflict
  // (such as a duplicate name) is reported on one file but names both.
  const own = error => !pages.size || !error.file?.startsWith('content/')
    || [...pages].some(page => error.file === `content/${page}` || error.message.includes(`content/${page}`));
  report = {
    ok: !errors.some(own),
    errors: errors.filter(own),
    otherErrors: errors.filter(error => !own(error)).length,
    missingLinks: result.links.map(link => ({ file: relativePath(link.file), line: link.line, target: link.target })),
    milliseconds: Math.round(performance.now() - start),
  };
} catch (error) {
  report = { ok: false, errors: [{ file: null, line: null, message: error.message }], otherErrors: 0, missingLinks: [] };
}
if (!report.ok) process.exitCode = 1;

if (json) console.log(JSON.stringify(report, null, 2));
else {
  for (const error of report.errors) console.log(`错误 ${error.file ?? ''}${error.line ? `:${error.line}` : ''}${error.file ? '：' : ''}${error.message}`);
  for (const [file, links] of Map.groupBy(report.missingLinks, link => link.file)) {
    const missing = Map.groupBy(links, link => link.target);
    console.log(`${file}：缺失条目 ${missing.size} 个：${[...missing].map(([target, list]) => `${target}（${[...new Set(list.map(link => link.line))].join('、')} 行）`).join('，')}`);
  }
  if (report.otherErrors) console.log(`其他页面另有 ${report.otherErrors} 个错误（不指定页面运行可查看）`);
  console.log(report.ok ? `检查通过${report.milliseconds !== undefined ? `（${(report.milliseconds / 1000).toFixed(2)} s）` : ''}` : '检查未通过');
}
