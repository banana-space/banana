import { globSync } from 'node:fs';
import { run } from 'node:test';
import { fileURLToPath } from 'node:url';
import reporter from '../tests/helpers/reporter.mjs';

/**
 * npm test: the site's tests (tests/*.mjs) and the three packages', each file a plain script in a process of its own,
 * as many at once as there are cores but one; silent unless a file fails (tests/helpers/reporter.mjs).
 *
 * --shard i/n: only the i-th of n parts of the files (CI runs the parts on separate machines).
 */
const root = fileURLToPath(new URL('../', import.meta.url));
const files = [
  ...globSync('tests/*.mjs', { cwd: root }).sort(),
  'packages/bananamark/test/index.mjs', 'packages/bananamark-codemirror/test/index.mjs', 'packages/bananamark-tikz/test/tikz.mjs',
];
const args = process.argv.slice(2);
const shardArg = args[args.indexOf('--shard') + 1];
let shard;
if (args.includes('--shard')) {
  const [index, total] = (shardArg ?? '').split('/').map(Number);
  if (!(Number.isInteger(index) && Number.isInteger(total) && index >= 1 && index <= total)) throw new Error(`test: --shard must be i/n, not ${shardArg}`);
  shard = { index, total };
}
const stream = run({ files, cwd: root, concurrency: true, shard });
stream.on('test:fail', data => { if (data.nesting === 0) process.exitCode = 1; });
stream.compose(reporter).pipe(process.stdout);
