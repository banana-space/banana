import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

// The prebuild of the project in the working directory, as JSON on stdout: see generatedPages (project.mjs).
const load = path => import(pathToFileURL(join(process.cwd(), path)));
const { prebuild } = await load('scripts/prebuild/run.mjs');
const { unpack } = await load('scripts/shared/compress.mjs');
const { files } = await prebuild();
process.stdout.write(JSON.stringify([...files].filter(([, file]) => file.metadata).map(([relative, file]) => [relative, {
  metadata: file.metadata, html: file.compressed ? unpack(file.compressed).toString('utf8') : '',
}])));
