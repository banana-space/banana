import { copyFile, link, mkdir, rename, rm, writeFile } from 'node:fs/promises';
import { availableParallelism } from 'node:os';
import { dirname, join } from 'node:path';
import { Worker } from 'node:worker_threads';
import { searchIndexer } from './search/index.mjs';
import { baseURL } from './shared/urls.mjs';
import { contentHash as hash } from './shared/content-hash.mjs';

/**
 * The site generator, as the build, serve and the API run it (docs/README.md, docs/preview.md):
 *
 * - its core (scripts/site/core.mjs: the pages, the templates, the assets) in worker threads, or in this thread
 *   (threads false: the API, which keeps its memory low and never loads new code); with several cores
 *   (serve), each holds the pages and renders its share of them;
 * - the pages finished (scripts/site/finish.mjs: typography, search documents) in a pool of worker threads, or
 *   in this thread;
 * - TikZ diagrams, the files written and the search index in this thread.
 *
 * Everything under scripts/site/ runs in the workers: restart() makes the next call start them anew, with the
 * code as it is now, while the caller keeps its state (serve's prebuild).
 *
 * jobs: finishing workers (default up to 4). cores: core workers (default 1: each holds the site's pages).
 */
export function siteGenerator({ development = false, threads = true, jobs, cores = 1 } = {}) {
  jobs ??= Math.max(1, Math.min(availableParallelism() - 1, 4));
  if (!threads) cores = 1;
  let core, pool, turn = 0;
  function start() {
    if (core) return;
    if (!threads) {
      core = import('./site/core.mjs').then(({ generatorCore }) => {
        const instance = generatorCore({ development });
        return [{ call: (method, args) => instance[method](...args), terminate: () => {} }];
      });
      pool = import('./site/finish.mjs').then(({ finishPage }) => ({
        run: ({ html, entry, sourceLines }) => finishPage(html, { entry, sourceLines }),
        close: async () => [],
      }));
      return;
    }
    core = Promise.resolve(Array.from({ length: cores }, () => coreWorker({ development })));
    pool = Promise.resolve(finishingPool(jobs));
  }
  // What changes the pages or their assets goes to every core; renders are shared out; the rest goes to the first.
  const everywhere = new Set(['setPages', 'updatePages', 'setAssets', 'load']);
  return {
    /** Calls a method of the core (see core.mjs). */
    async call(method, ...args) {
      start();
      const instances = await core;
      if (everywhere.has(method)) return (await Promise.all(instances.map(instance => instance.call(method, args))))[0];
      if (method === 'render') return instances[turn++ % instances.length].call(method, args);
      const result = await instances[0].call(method, args);
      if (method === 'buildAssets' && instances.length > 1) await Promise.all(instances.slice(1).map(instance => instance.call('setAssets', [result.assets])));
      return result;
    },
    /**
     * Finishes a page from the templates: { html, search }. write (a file): a worker may write a page without TikZ
     * diagrams there itself, answering { search, written: true } (the HTML need not come back to this thread).
     */
    async finish(html, { entry, sourceLines = false, write } = {}) {
      start();
      return (await pool).run({ html, entry, sourceLines, ...(threads ? { write } : {}) });
    },
    /** The workers' time per step (ms), summed, as [name, ms] pairs; the workers stop. */
    async close() {
      if (!core) return [];
      const steps = await (await pool).close();
      for (const instance of await core) await instance.terminate();
      core = pool = undefined;
      return steps;
    },
    /** Stops the workers at once: the next call starts them with the code as it is now. */
    async restart() {
      if (!core) return;
      const [instances, finishing] = await Promise.all([core, pool]);
      core = pool = undefined;
      if (threads) await Promise.all([...instances.map(instance => instance.terminate()), finishing.terminate()]);
    },
    jobs, cores,
  };
}

/** The core in a worker thread: call(method, args) resolves to its result. */
function coreWorker({ development }) {
  // Heap limits make each worker collect its garbage sooner: at 2836 pages the build's peak went from about 2.45 GB to
  // about 1.8 GB, in the same time.
  const worker = new Worker(new URL('./site/core-worker.mjs', import.meta.url), {
    workerData: { development, baseURL: baseURL.href }, resourceLimits: { maxOldGenerationSizeMb: 1024 },
    // Publishing flags (--buildDrafts and the like) are read from the command line.
    argv: process.argv.slice(2),
  });
  const waiting = new Map();
  let next = 0, failure;
  worker.on('message', ({ id, result, error }) => {
    const { resolve, reject } = waiting.get(id);
    waiting.delete(id);
    if (error === undefined) resolve(result);
    else reject(new Error(error));
  });
  worker.on('error', error => {
    failure = error;
    for (const { reject } of waiting.values()) reject(error);
    waiting.clear();
  });
  return {
    call: (method, args) => failure ? Promise.reject(failure) : new Promise((resolve, reject) => {
      const id = next++;
      waiting.set(id, { resolve, reject });
      worker.postMessage({ id, method, args });
    }),
    terminate: () => worker.terminate(),
  };
}

/** Finishing workers (site/finish-worker.mjs): run(message) resolves to a worker's answer; close() to their steps. */
function finishingPool(count) {
  const workers = [], free = [], queue = [];
  let failure;
  const dispatch = () => {
    while (free.length && queue.length) {
      const worker = free.pop();
      worker.task = queue.shift();
      worker.postMessage(worker.task.message);
    }
  };
  for (let i = 0; i < count; i++) {
    const worker = new Worker(new URL('./site/finish-worker.mjs', import.meta.url), { resourceLimits: { maxOldGenerationSizeMb: 384 } });
    worker.on('message', message => {
      if (message.steps) { worker.closed(message.steps); return; }
      const { task } = worker;
      worker.task = undefined;
      free.push(worker);
      dispatch();
      if (message.error === undefined) task.resolve(message);
      else task.reject(new Error(message.error));
    });
    worker.on('error', error => { failure = error; worker.task?.reject(error); });
    workers.push(worker);
    free.push(worker);
  }
  return {
    run: message => failure ? Promise.reject(failure) : new Promise((resolve, reject) => { queue.push({ message, resolve, reject }); dispatch(); }),
    async close() {
      const steps = await Promise.all(workers.map(worker => new Promise(resolve => {
        worker.closed = resolve;
        worker.postMessage({ close: true });
      })));
      await Promise.all(workers.map(worker => worker.terminate()));
      return steps.flat();
    },
    terminate: () => Promise.all(workers.map(worker => worker.terminate())),
  };
}

/**
 * Renders pages (relative paths) and writes their files into destination, through the pipeline every build
 * shares: the core renders a few pages at a time, the pool finishes them, TikZ diagrams go in, the files are
 * written. cache (output path -> { hash, search }, optional): a file whose generated HTML is as before is
 * neither finished nor written again (serve). search: the search manifest's entry for an output path, or
 * undefined. onDocument(path, document): each search document, in the order of the files, whichever finished
 * first (the build hands them to Pagefind as they come). Returns { written (output paths), unchanged }.
 */
export async function publishPages(generator, relatives, { destination, diagrams, cache, search = () => undefined, onDocument, timer, chunk = 24 }) {
  const written = [];
  let unchanged = 0;
  const time = (name, action) => timer ? timer.time(name, action) : action();
  const tasks = new Set(), limit = generator.jobs * 3;
  // Search documents wait here until those of the files before them have been handed on.
  const ready = new Map();
  let next = 0, total = 0, handing = Promise.resolve();
  const hand = () => {
    for (; ready.has(next); next++) {
      const { path, document } = ready.get(next);
      ready.delete(next);
      if (document !== undefined && onDocument) handing = handing.then(() => onDocument(path, document));
    }
  };
  const finish = async (index, path, raw, key) => {
    const known = cache?.get(path), entry = search(path);
    let document;
    if (known?.hash === key && (!entry || known.search)) {
      unchanged++;
      document = entry ? known.search : undefined;
    } else {
      const file = join(destination, path);
      const finished = await generator.finish(raw, { entry, write: file });
      if (!finished.written) {
        const final = await time('tikz', () => diagrams.render(finished.html, { outputPath: file }));
        await mkdir(dirname(file), { recursive: true });
        await writeFile(file, final);
      }
      written.push(path);
      document = entry ? finished.search : undefined;
      cache?.set(path, { hash: key, search: document });
    }
    ready.set(index, { path, document });
    hand();
  };
  // As many chunks being rendered as there are cores, taken in order.
  const rendering = [];
  const take = async () => {
    const files = await time('templates', () => rendering.shift());
    for (const [path, raw, key] of files) {
      while (tasks.size >= limit) await Promise.race(tasks);
      const task = finish(total++, path, raw, key).finally(() => tasks.delete(task));
      tasks.add(task);
    }
  };
  for (let index = 0; index < relatives.length; index += chunk) {
    rendering.push(generator.call('render', relatives.slice(index, index + chunk), { hashes: true }));
    if (rendering.length >= generator.cores) await take();
  }
  while (rendering.length) await take();
  await Promise.all(tasks);
  await handing;
  return { written, unchanged };
}

/**
 * Writes what follows from all pages (the core's shared(): its files, the HTML among them finished; the files
 * beside pages, linked from source(relative), their source files) into destination. With cache, files as before
 * are not written again. Returns the output paths written.
 */
export async function publishShared(generator, { files, resources }, { destination, diagrams, cache, source }) {
  const written = [];
  const write = async (path, content) => {
    const key = hash(content);
    if (cache?.get(path)?.hash === key) return;
    let final = content;
    if (path.endsWith('.html')) final = await diagrams.render((await generator.finish(String(content))).html, { outputPath: join(destination, path) });
    await mkdir(dirname(join(destination, path)), { recursive: true });
    await writeFile(join(destination, path), final);
    cache?.set(path, { hash: key });
    written.push(path);
  };
  for (const [path, content] of files) await write(path, typeof content === 'string' ? content : Buffer.from(content));
  for (const [path, relative] of resources) {
    const from = source(relative), to = join(destination, path), key = `link:${from}`;
    if (cache?.get(path)?.hash === key) continue;
    await mkdir(dirname(to), { recursive: true });
    await rm(to, { force: true });
    await link(from, to).catch(() => copyFile(from, to));
    cache?.set(path, { hash: key });
    written.push(path);
  }
  return written;
}

/**
 * Writes the search index into <destination>/pagefind/ (through a directory beside it, so that the index being
 * replaced stays whole): documents (output path -> search document) in the order of their paths (serve, from
 * its cache; the build hands them on as they come, see publishPages).
 */
export async function writeSearchIndex(destination, manifest, documents, { playground = false } = {}) {
  const temporary = join(destination, '.pagefind-next');
  await rm(temporary, { recursive: true, force: true });
  const search = await searchIndexer(temporary, manifest, { playground });
  try {
    for (const path of [...documents.keys()].sort()) if (search.entry(path)) await search.add(path, documents.get(path));
    const indexed = await search.finish();
    await rm(join(destination, 'pagefind'), { recursive: true, force: true });
    await rename(join(temporary, 'pagefind'), join(destination, 'pagefind'));
    await rm(temporary, { recursive: true, force: true });
    return indexed;
  } finally {
    await search.close();
  }
}
