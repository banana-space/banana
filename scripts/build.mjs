import { mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fork } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { performance } from 'node:perf_hooks';
import { publishPages, publishShared, siteGenerator } from './service/generator.mjs';
import { manifestEntries, searchIndexer } from './search/index.mjs';
import { elapsed, headline, stepTimer } from './shared/timing.mjs';
import { siteDiagrams } from './shared/diagrams.mjs';

/**
 * The full build, content/ into public/ (or -d <directory>): the prebuild (scripts/prebuild/), in a process that ends
 * before the site is generated (a thread's memory, some 1.2 GB, stays with the process when it ends); then the files published as they are, the assets, every page, rendered and finished
 * (scripts/service/generator.mjs), and the search index. Removes cached TikZ diagrams no page uses.
 *
 * --buildDrafts: publishes drafts. --baseURL (or -b): the site's address.
 * --jobs N: finishing workers (default up to 4). --playground: also Pagefind's diagnostic search page
 * (/pagefind/playground/).
 */

const args = process.argv.slice(2);
const option = name => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : undefined; };
const output = resolve(option('-d') ?? option('--destination') ?? 'public');
// Finishing took at 2571 pages: 1 worker 22 s, 1.0 GB; 2 workers 13 s; 4 workers 8.5 s, 1.4 GB; 8 workers 7 s,
// 2.3 GB. Four by default: the server has 4 GB.
const jobs = option('--jobs') === undefined ? undefined : Number(option('--jobs'));
if (jobs !== undefined && (!Number.isInteger(jobs) || jobs < 1)) throw new Error(`build: --jobs must be a positive integer, not ${option('--jobs')}`);

/** The prebuild, its pages written to pagesFile: { attachments, count, timings } (scripts/prebuild/process.mjs). Its errors go to stderr. */
function runPrebuild() {
  return new Promise((done, fail) => {
    let result;
    const child = fork(fileURLToPath(new URL('./prebuild/process.mjs', import.meta.url)), [pagesFile, ...args]);
    child.once('message', message => { result = message; });
    child.once('error', fail);
    child.once('exit', code => { if (result && code === 0) done(result); else process.exit(code || 1); });
  });
}

const pagesFile = resolve('.build/prebuilt-pages.bin');
const buildStart = performance.now();
await mkdir(dirname(pagesFile), { recursive: true });
const prebuilt = await runPrebuild();
console.log(headline('prebuild', `${prebuilt.count} pages`, elapsed(buildStart)));
for (const line of prebuilt.timings) console.log(line);

const timer = stepTimer();
const start = performance.now();
const generator = siteGenerator({ jobs });
const diagrams = siteDiagrams(output);
try {
  await rm(output, { recursive: true, force: true });
  await timer.time('static files', () => generator.call('copyStatic', output));
  const { files: assetFiles } = await timer.time('assets', () => generator.call('buildAssets'));
  for (const [path, file] of assetFiles) {
    await mkdir(dirname(join(output, path)), { recursive: true });
    await writeFile(join(output, path), file);
  }
  await timer.time('site model', () => generator.call('loadPages', pagesFile));
  await rm(pagesFile);
  const attachments = new Map(prebuilt.attachments);
  const shared = await generator.call('shared', [...attachments.keys()]);
  const entries = manifestEntries(shared.manifest);
  const relatives = await generator.call('renderable');
  const search = await searchIndexer(output, shared.manifest, { playground: args.includes('--playground') });
  const add = (path, document) => timer.time('search: add pages', () => search.add(path, document));
  const { written } = await publishPages(generator, relatives, { destination: output, diagrams, search: path => entries.get(path), onDocument: add, timer });
  await publishShared(generator, shared, { destination: output, diagrams, source: relative => attachments.get(relative) });
  const pagesDone = elapsed(start);
  for (const [name, ms] of await generator.close()) timer.add(name, ms);
  const indexed = await timer.time('search: write index', () => search.finish());
  await search.close();
  const pruned = await timer.time('tikz: prune cache', () => diagrams.prune());
  console.log(headline('site', `${written.length} pages in ${generator.jobs} workers (${pagesDone} ms), ${indexed} indexed for search${pruned ? `, ${pruned} unused TikZ cache files removed` : ''}`, elapsed(start)));
  console.log('  (parse, typography, search document and serialize are summed over the workers)');
  for (const line of timer.lines()) console.log(line);
} finally {
  await generator.restart();
  await diagrams.close();
}
console.log(headline('build', 'done', elapsed(buildStart)));
