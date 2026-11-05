// The reporter of npm test (node --test, each file in a process of its own): silent while files pass; for a file
// that fails, its name, its output and the error. The files are plain scripts that fail by exiting non-zero.
import { relative, resolve } from 'node:path';

export default async function* reporter(source) {
  // Output events name a file relative to the working directory, the others absolutely.
  const output = new Map();
  const add = (file, text) => output.set(resolve(file), (output.get(resolve(file)) ?? '') + text);
  let failed = 0;
  for await (const { type, data } of source) {
    if (type === 'test:stdout' || type === 'test:stderr') add(data.file, data.message);
    else if (type === 'test:fail' && data.nesting === 0) {
      failed++;
      const file = resolve(data.file ?? data.name), error = data.details?.error;
      // A failing file's own error is only "test failed"; its stderr already says why.
      const cause = error && error.failureType !== 'testCodeFailure' ? `${error.cause?.stack ?? error.stack ?? error.message}\n` : '';
      yield `\n✗ ${relative(process.cwd(), file)}\n${output.get(file) ?? ''}${cause}`;
      output.delete(file);
    }
  }
  if (failed) yield `\n${failed} 个测试文件失败\n`;
}
