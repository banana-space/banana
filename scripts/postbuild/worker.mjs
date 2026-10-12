import { readFile, writeFile } from 'node:fs/promises';
import { parentPort, workerData } from 'node:worker_threads';
import { parse, serialize } from 'parse5';
import { finishDocument } from './page.mjs';
import { tikzRenderer } from './tikz.mjs';
import { searchDocument } from '../search/document.mjs';
import { pageCache } from './cache.mjs';
import { stepTimer } from '../shared/timing.mjs';

/**
 * One of postbuild's page workers (see scripts/postbuild.mjs). Messages from the main thread:
 * { page: index, file, entry } finishes one page in place (entry: its search manifest entry, if indexed)
 * and answers { done: index, search, used, cached } (search: the document for Pagefind; used: the diagram cache
 * keys of a page taken from cache, which is true then) or { failed: index, message };
 * { diagram: id, result | error } answers this worker's request { diagram: id, input } to compile a TikZ
 * diagram, which the main thread's renderer does; { close: true } answers { steps } (time per step, ms).
 */
const timer = stepTimer();
// workerData.cache: the directory of earlier builds' results (see cache.mjs), with workerData.version.
const cache = workerData.cache && pageCache(workerData.cache, workerData.destination, workerData.version);
const waiting = new Map();
let next = 0;
const diagrams = tikzRenderer(workerData.destination, {
  compile: input => new Promise((resolve, reject) => {
    const id = next++;
    waiting.set(id, { resolve, reject });
    parentPort.postMessage({ diagram: id, input });
  }),
});

async function finishPage(file, entry) {
  const text = await timer.time('read, parse', () => readFile(file, 'utf8'));
  const key = cache?.key(file, text, entry);
  const stored = cache && await timer.time('cache: read', () => cache.get(file, key));
  if (stored) {
    await timer.time('cache: use', async () => {
      if (stored.fonts.length) await diagrams.copyFonts(stored.fonts);
      if (stored.html !== text) await writeFile(file, stored.html);
    });
    return { search: stored.search, used: stored.diagrams, cached: true };
  }
  const document = timer.timeSync('read, parse', () => parse(text));
  const record = { fonts: new Set(), diagrams: new Set() };
  await finishDocument(document, file, { text, diagrams, timer, record });
  const search = entry ? timer.timeSync('search: pages', () => searchDocument(document, entry)) : undefined;
  const html = timer.timeSync('serialize, write', () => serialize(document));
  await timer.time('serialize, write', async () => { if (html !== text) await writeFile(file, html); });
  if (cache) await timer.time('cache: write', () => cache.set(file, { key, html, search, fonts: [...record.fonts], diagrams: [...record.diagrams] }));
  return { search };
}

parentPort.on('message', message => {
  if (message.diagram !== undefined) {
    const { resolve, reject } = waiting.get(message.diagram);
    waiting.delete(message.diagram);
    if (message.error === undefined) resolve(message.result);
    else reject(new Error(message.error));
  } else if (message.page !== undefined) {
    finishPage(message.file, message.entry).then(
      result => parentPort.postMessage({ done: message.page, ...result }),
      error => parentPort.postMessage({ failed: message.page, message: error.message }),
    );
  } else if (message.close) {
    parentPort.postMessage({ steps: [...timer.steps()] });
  }
});
