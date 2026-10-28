import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { parentPort } from 'node:worker_threads';
import { finishPage } from './finish.mjs';
import { stepTimer } from '../shared/timing.mjs';

/**
 * One of the site generator's finishing workers (see scripts/generator.mjs): { html, entry, sourceLines, write }
 * finishes a page from the templates (finish.mjs) and answers { html, search } or { error }; with write (a file),
 * a page without TikZ diagrams is written there instead, and the answer is { search, written: true }.
 * { close: true } answers { steps } (time per step, ms).
 */
const timer = stepTimer();
parentPort.on('message', async message => {
  if (message.close) { parentPort.postMessage({ steps: [...timer.steps()] }); return; }
  try { parentPort.postMessage(await finish(message)); }
  catch (error) { parentPort.postMessage({ error: error.message }); }
});

async function finish({ html, entry, sourceLines, write }) {
  const finished = finishPage(html, { entry, sourceLines, timer });
  if (!write || finished.html.includes('bm-tikz-source')) return finished;
  await timer.time('write', async () => {
    await mkdir(dirname(write), { recursive: true });
    await writeFile(write, finished.html);
  });
  return { search: finished.search, written: true };
}
