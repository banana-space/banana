import { writeFile } from 'node:fs/promises';
import { serialize } from 'node:v8';
import { prebuild } from './run.mjs';

/**
 * The full build's prebuild, in a process of its own (scripts/build.mjs), writing its pages to the file given for the
 * site generator's core: what the prebuild needs while it runs (some 1.5 GB) goes with the process, and the build's main
 * thread never holds the pages (some 40 MB, but sent to it as a message they take it to some 500 MB). It answers with
 * the attachments' sources and its timings.
 */
const { files, pages: count, timings } = await prebuild({ history: true });
const pages = [], attachments = [];
for (const [relative, file] of files) {
  if (file.metadata) pages.push({ relative, metadata: file.metadata, compressed: file.compressed });
  else attachments.push([relative, file.link]);
}
await writeFile(process.argv[2], serialize(pages));
process.send({ attachments, count, timings }, () => process.exit());
