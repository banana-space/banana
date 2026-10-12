import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { performance } from 'node:perf_hooks';
import { withoutKatexNoise } from './shared/hugo-log.mjs';
import { elapsed, headline } from './shared/timing.mjs';
const args = process.argv.slice(2);
const start = performance.now();
for (const [command, parameters] of [
  [process.execPath, ['scripts/prebuild.mjs', ...args]],
  ['hugo', ['--cleanDestinationDir', ...(!args.some(arg => arg === '--cacheDir' || arg.startsWith('--cacheDir=')) ? ['--cacheDir', resolve('.build/hugo-cache')] : []), ...args]],
  [process.execPath, ['scripts/postbuild.mjs', '--prune-cache']],
]) {
  const hugo = command === 'hugo';
  const step = performance.now();
  const result = spawnSync(command, parameters, { stdio: ['inherit', 'inherit', hugo ? 'pipe' : 'inherit'], env: process.env, encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
  if (hugo && result.stderr) process.stderr.write(withoutKatexNoise(result.stderr));
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
  // Hugo prints its own summary; the prebuild and postbuild scripts time their steps.
  if (hugo) console.log(headline('hugo', 'rendered public/', elapsed(step)));
}
console.log(headline('build', 'done', elapsed(start)));
