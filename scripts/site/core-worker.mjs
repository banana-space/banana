import { parentPort, workerData } from 'node:worker_threads';
import { setBaseURL } from '../shared/urls.mjs';
import { generatorCore } from './core.mjs';

/**
 * The site generator's worker (see scripts/generator.mjs): { id, method, args } calls a method of the core
 * (core.mjs) and answers { id, result } or { id, error }. A new worker loads the generator's code anew.
 */
if (workerData.baseURL) setBaseURL(workerData.baseURL);
const core = generatorCore({ development: workerData.development });
parentPort.on('message', async ({ id, method, args }) => {
  try { parentPort.postMessage({ id, result: await core[method](...args) }); }
  catch (error) { parentPort.postMessage({ id, error: error.message }); }
});
