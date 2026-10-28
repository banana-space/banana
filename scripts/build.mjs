import { spawnSync } from 'node:child_process';
import { performance } from 'node:perf_hooks';
import { elapsed, headline } from './shared/timing.mjs';
const args = process.argv.slice(2);
const start = performance.now();
for (const [command, parameters] of [
  [process.execPath, ['scripts/prebuild.mjs', ...args]],
  [process.execPath, ['scripts/site.mjs', '--prune-cache', ...args]],
]) {
  const result = spawnSync(command, parameters, { stdio: 'inherit', env: process.env });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
console.log(headline('build', 'done', elapsed(start)));
