import { createHash } from 'node:crypto';
import { mkdirSync, readdirSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { deserialize, serialize } from 'node:v8';
import { pack, unpack } from '../shared/compress.mjs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../../', import.meta.url));

/**
 * Rendered page bodies kept on disk between runs (serve's start and its full prebuilds; see render.mjs): an entry
 * is { result, queries }, the queries being what rendering asked about the rest of the site and the answers it got.
 * The key covers the page's document, what the renderer is told about the page, and the code and settings the
 * renderer runs with (version: bananamark, the site's renderer, its data and messages, the base URL).
 *
 * get(key) and set(key, entry); prune() removes the entries this run did not use (after a run that rendered every
 * page), returning how many.
 */
export function renderCache(directory, { baseURL }) {
  const version = codeVersion(baseURL);
  const used = new Set();
  const file = key => join(directory, `${key}.bin`);
  return {
    key: parts => createHash('sha256').update(version).update(JSON.stringify(parts)).digest('hex'),
    get(key) {
      used.add(key);
      try { return deserialize(unpack(readFileSync(file(key)))); }
      catch (error) { if (error.code === 'ENOENT') return; throw error; }
    },
    set(key, entry) {
      used.add(key);
      mkdirSync(directory, { recursive: true });
      const temporary = `${file(key)}.${process.pid}.tmp`;
      writeFileSync(temporary, pack(serialize(entry)));
      renameSync(temporary, file(key));
    },
    prune() {
      let removed = 0;
      let names;
      try { names = readdirSync(directory); } catch (error) { if (error.code === 'ENOENT') return 0; throw error; }
      for (const name of names) {
        if (!name.endsWith('.bin') || used.has(name.slice(0, -4))) continue;
        rmSync(join(directory, name), { force: true });
        removed++;
      }
      return removed;
    },
  };
}

/** The code and data a page's rendering depends on besides its document, as a digest. */
function codeVersion(baseURL) {
  const hash = createHash('sha256').update(String(baseURL));
  const add = path => {
    hash.update(`${relative(root, path)}\0`);
    try { hash.update(readFileSync(path)); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  };
  const tree = directory => {
    for (const entry of readdirSync(directory, { withFileTypes: true }).sort((a, b) => a.name < b.name ? -1 : 1)) {
      if (entry.isDirectory()) tree(join(directory, entry.name));
      else add(join(directory, entry.name));
    }
  };
  // Wherever bananamark is installed (the workspace's packages/, or a copy of the site without it).
  tree(dirname(fileURLToPath(import.meta.resolve('bananamark'))));
  tree(join(root, 'scripts/shared'));
  for (const path of ['scripts/prebuild/render.mjs', 'scripts/prebuild/render-cache.mjs', 'data/language_names.yaml', 'site.yaml', 'package-lock.json']) add(join(root, path));
  return hash.digest('hex');
}
