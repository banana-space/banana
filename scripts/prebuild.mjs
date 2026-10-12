import { performance } from 'node:perf_hooks';
import { prebuild } from './prebuild/run.mjs';
import { elapsed, headline } from './shared/timing.mjs';

// 构建入口负责文件与 front matter；具体 Markdown 语法在 prebuild/ 中维护。
const start = performance.now();
const { pages, timings } = await prebuild();
console.log(headline('prebuild', `${pages} pages -> .build/content`, elapsed(start)));
for (const line of timings) console.log(line);
