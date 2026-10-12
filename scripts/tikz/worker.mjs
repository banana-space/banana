import { parentPort } from 'node:worker_threads';
import { compileTikz } from './compiler.mjs';

// Isolate the stateful WASM engine. A parent-side timeout can terminate even
// TeX input that loops synchronously, and errors never poison the next build.
parentPort.on('message', async input => {
  const lines = [];
  const log = console.log;
  console.log = (...args) => { lines.push(args.join(' ')); };
  try {
    const result = await compileTikz(input);
    const errors = lines.filter(line => /^!/.test(line));
    if (errors.length) throw new Error(errors.slice(0, 3).join('\n'));
    parentPort.postMessage({ result });
  } catch (error) {
    const index = lines.findIndex(line => /^!/.test(line));
    const details = index < 0 ? '' : lines.slice(index, index + 12).join('\n');
    parentPort.postMessage({ error: details || error.message });
  } finally { console.log = log; }
});
