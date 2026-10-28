import { readdir, rm, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { performance } from 'node:perf_hooks';
import { publishPages, publishShared, siteGenerator } from './generator.mjs';
import { manifestEntries, searchIndexer } from './search/index.mjs';
import { elapsed, headline, stepTimer } from './shared/timing.mjs';
import { siteDiagrams } from './shared/diagrams.mjs';

/**
 * The site from the prebuild's generated pages (.build/content/) into public/ (or -d <directory>): the files of
 * static/, the assets, every page, rendered and finished (scripts/generator.mjs), and the search index.
 *
 * --development: for serve (assets unminified and unnamed, pages marked with their source).
 * --jobs N: finishing workers (default up to 4). --playground: also Pagefind's diagnostic search page
 * (/pagefind/playground/). --prune-cache: removes cached TikZ diagrams no page uses (full builds only).
 */

const args = process.argv.slice(2);
const option = name => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : undefined; };
const output = resolve(option('-d') ?? option('--destination') ?? 'public');
const development = args.includes('--development');
// Finishing took at 2571 pages: 1 worker 22 s, 1.0 GB; 2 workers 13 s; 4 workers 8.5 s, 1.4 GB; 8 workers 7 s,
// 2.3 GB. Four by default: the server has 4 GB.
const jobs = option('--jobs') === undefined ? undefined : Number(option('--jobs'));
if (jobs !== undefined && (!Number.isInteger(jobs) || jobs < 1)) throw new Error(`site: --jobs must be a positive integer, not ${option('--jobs')}`);

/** The files in content other than pages, relative to it. */
async function otherFiles(directory, prefix = '', found = []) {
  for (const entry of await readdir(join(directory, prefix), { withFileTypes: true })) {
    const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) await otherFiles(directory, relative, found);
    else if (!entry.name.endsWith('.md')) found.push(relative);
  }
  return found;
}

const timer = stepTimer();
const start = performance.now();
const content = resolve('.build/content');
const generator = siteGenerator({ development, jobs });
const diagrams = siteDiagrams(output);
try {
  await rm(output, { recursive: true, force: true });
  await timer.time('static files', () => generator.call('copyStatic', output));
  const { files: assetFiles } = await timer.time('assets', () => generator.call('buildAssets'));
  for (const [path, file] of assetFiles) {
    await mkdir(dirname(join(output, path)), { recursive: true });
    await writeFile(join(output, path), file);
  }
  await timer.time('site model', () => generator.call('load', content));
  const shared = await generator.call('shared', await otherFiles(content));
  const entries = manifestEntries(shared.manifest);
  const relatives = await generator.call('renderable');
  const search = await searchIndexer(output, shared.manifest, { playground: args.includes('--playground') });
  const add = (path, document) => timer.time('search: add pages', () => search.add(path, document));
  const { written } = await publishPages(generator, relatives, { destination: output, diagrams, search: path => entries.get(path), onDocument: add, timer });
  await publishShared(generator, shared, { destination: output, diagrams, source: relative => join(content, relative) });
  const pagesDone = elapsed(start);
  for (const [name, ms] of await generator.close()) timer.add(name, ms);
  if (process.connected) process.send({ pages: true });
  const indexed = await timer.time('search: write index', () => search.finish());
  await search.close();
  // Only a full build knows every diagram in use; previews of single pages keep the cache.
  const pruned = args.includes('--prune-cache') ? await timer.time('tikz: prune cache', () => diagrams.prune()) : 0;
  console.log(headline('site', `${written.length} pages in ${generator.jobs} workers (${pagesDone} ms), ${indexed} indexed for search${pruned ? `, ${pruned} unused TikZ cache files removed` : ''}`, elapsed(start)));
  console.log('  (parse, typography, search document and serialize are summed over the workers)');
  for (const line of timer.lines()) console.log(line);
} finally {
  await generator.restart();
  await diagrams.close();
  if (process.connected) process.disconnect();
}
