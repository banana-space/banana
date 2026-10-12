import { performance } from 'node:perf_hooks';
import { elapsed, headline, stepTimer } from './shared/timing.mjs';
import { readdir } from 'node:fs/promises';
import { availableParallelism } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker } from 'node:worker_threads';
import { tikzRenderer } from './postbuild/tikz.mjs';
import { codeVersion, pageCache } from './postbuild/cache.mjs';
import { searchIndexer } from './search/index.mjs';

/**
 * Finishes Hugo's HTML in place: TikZ diagrams, typography, then the search index.
 * Pages are parsed and finished in worker threads (scripts/postbuild/worker.mjs), each page once;
 * this thread compiles the workers' TikZ diagrams (one TeX worker, one cache) and feeds Pagefind
 * in file order, so that the result does not depend on which worker finished first.
 *
 * Arguments: the output directory (default public/); --playground also writes Pagefind's diagnostic
 * search page to /pagefind/playground/; --prune-cache removes cached diagrams no page uses;
 * --jobs N sets the number of page workers; --cache DIR keeps each page's result there and reuses it
 * while the page's Hugo HTML, search entry and the code stay the same (serve's full builds, where most
 * pages come out of Hugo unchanged; see postbuild/cache.mjs). Run with an IPC channel (serve forks it), it sends
 * { pages: true } once every page is finished, before the search index is written.
 */
const timer = stepTimer();
const args = process.argv.slice(2);
const option = name => {
  const index = args.findIndex(arg => arg === `--${name}` || arg.startsWith(`--${name}=`));
  if (index < 0) return;
  return args[index].includes('=') ? args[index].split('=')[1] : args[index + 1];
};
const jobsOption = option('jobs'), cacheOption = option('cache');
const target = args.find((arg, index) => !arg.startsWith('--') && !['--jobs', '--cache'].includes(args[index - 1]));
const destination = resolve(target ?? fileURLToPath(new URL('../public/', import.meta.url)));
// At 2571 pages: 1 worker 22 s, 1.0 GB; 2 workers 13 s, 0.9 GB; 4 workers 8.5 s, 1.4 GB; 8 workers 7 s, 2.3 GB
// (pages finished, peak memory). Four by default: the server has 4 GB.
const jobs = jobsOption === undefined ? Math.max(1, Math.min(availableParallelism() - 1, 4)) : Number(jobsOption);
if (!Number.isInteger(jobs) || jobs < 1) throw new Error(`postbuild: --jobs must be a positive integer, not ${jobsOption}`);

async function htmlFiles(directory, files = [], top = false) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    // A previous search bundle (and its playground) is generated output, not site pages.
    if (top && entry.name === 'pagefind') continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await htmlFiles(path, files);
    else if (entry.name.endsWith('.html')) files.push(path);
  }
  return files;
}

/**
 * Finishes every page in the workers; resolves once all are written to { cached, indexing }: the number
 * taken from cache, and a promise that settles once every page has been handed to the search index.
 */
function finishPages(files, search, diagrams, cache) {
  const workers = [];
  let cached = 0;
  return new Promise((resolve, reject) => {
    let sent = 0, done = 0, cursor = 0, failed = false, failure, closing = 0;
    let indexing = Promise.resolve();
    const results = new Array(files.length);
    const fail = error => {
      if (failed) return;
      failed = true;
      failure = error;
      for (const worker of workers) void worker.terminate();
      reject(error);
    };
    const send = worker => {
      if (sent < files.length) {
        const file = files[sent];
        worker.postMessage({ page: sent++, file, entry: search?.entry(file) });
      } else {
        closing++;
        worker.postMessage({ close: true });
      }
    };
    /** Pages enter the index in file order, whatever order the workers finish them in. */
    const index = () => {
      for (; cursor < files.length && results[cursor]; cursor++) {
        const file = files[cursor], { search: content } = results[cursor];
        results[cursor] = true; // Drops the content once it is queued.
        if (search?.entry(file)) indexing = indexing.then(() => timer.time('search: add pages', () => search.add(file, content)));
      }
      indexing = indexing.catch(fail);
    };
    const count = Math.min(jobs, files.length);
    if (!count) { resolve({ cached: 0, indexing: Promise.resolve() }); return; }
    for (let i = 0; i < count; i++) {
      const worker = new Worker(new URL('./postbuild/worker.mjs', import.meta.url), { workerData: { destination, ...cache } });
      workers.push(worker);
      worker.on('message', message => {
        if (failed) return;
        if (message.diagram !== undefined) {
          diagrams.compile(message.input).then(
            result => worker.postMessage({ diagram: message.diagram, result }),
            error => worker.postMessage({ diagram: message.diagram, error: error.message }),
          );
        } else if (message.failed !== undefined) {
          fail(new Error(message.message));
        } else if (message.done !== undefined) {
          results[message.done] = { search: message.search };
          if (message.cached) cached++;
          if (message.used) diagrams.use(message.used);
          done++;
          index();
          send(worker);
        } else if (message.steps) {
          for (const [name, ms] of message.steps) timer.add(name, ms);
          worker.finished = true;
          void worker.terminate();
          if (--closing === 0 && done === files.length) resolve({ cached, indexing: indexing.then(() => { if (failed) throw failure; }) });
        }
      });
      worker.on('error', fail);
      worker.on('exit', code => { if (!worker.finished) fail(new Error(`postbuild: a page worker exited (${code})`)); });
      send(worker);
    }
  });
}

const diagrams = tikzRenderer(destination);
const start = performance.now();
// Postbuild takes a while (typography, TikZ, search index); say that it has started.
console.log('postbuild: started');
const search = await timer.time('search: start', () => searchIndexer(destination, { playground: args.includes('--playground') }));
try {
  const files = await htmlFiles(destination, [], true);
  const cache = cacheOption && { cache: resolve(cacheOption), version: await timer.time('cache: code version', codeVersion) };
  const { cached, indexing } = await finishPages(files, search, diagrams, cache);
  const pagesDone = elapsed(start);
  if (process.connected) process.send({ pages: true });
  await indexing;
  // Results of pages that are gone; the others were just written or used.
  if (cache) await timer.time('cache: prune', () => pageCache(cache.cache, destination, cache.version).prune(files));
  const indexed = search ? await timer.time('search: write index', () => search.finish()) : 0;
  // Only a full build knows every diagram in use; previews of single pages keep the cache.
  const pruned = args.includes('--prune-cache') ? await timer.time('tikz: prune cache', () => diagrams.prune()) : 0;
  console.log(headline('postbuild', `${files.length} HTML pages${cache ? ` (${cached} unchanged, from cache)` : ''} in ${Math.min(jobs, files.length)} workers (${pagesDone} ms), ${indexed} indexed for search${pruned ? `, ${pruned} unused TikZ cache files removed` : ''}`, elapsed(start)));
  console.log('  (per-page steps are summed over the workers)');
  for (const line of timer.lines()) console.log(line);
} finally {
  await diagrams.close();
  await search?.close();
  if (process.connected) process.disconnect();
}
