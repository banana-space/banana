import { createHash } from 'node:crypto';
import { mkdir, readdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { threadId } from 'node:worker_threads';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../../', import.meta.url));
const sha256 = value => createHash('sha256').update(value).digest('hex');

/**
 * What a finished page depends on besides its own HTML: the code (all of scripts/, the search query
 * rules it shares with the browser) and the packages (parse5, Pagefind, TikZ fonts).
 */
export async function codeVersion() {
  const hash = createHash('sha256');
  const add = async path => {
    hash.update(`${relative(root, path)}\0`);
    hash.update(await readFile(path).catch(error => { if (error.code === 'ENOENT') return ''; throw error; }));
  };
  const files = (await readdir(join(root, 'scripts'), { recursive: true, withFileTypes: true }))
    .filter(entry => entry.isFile()).map(entry => join(entry.parentPath, entry.name)).sort();
  for (const file of files) await add(file);
  await add(join(root, 'static/js/search-query.js'));
  await add(join(root, 'package-lock.json'));
  return hash.digest('hex');
}

/**
 * Postbuild results of an earlier build (serve's full builds), one file per page: a page whose Hugo HTML,
 * search manifest entry and code are unchanged is not finished again. Entries are { key, html, search,
 * fonts, diagrams }: the finished HTML, its search document, and the TikZ fonts and diagram cache keys
 * it uses (copied to the output and kept from pruning as if the page had been rendered).
 */
export function pageCache(directory, destination, version) {
  const id = file => sha256(relative(destination, file).split('\\').join('/'));
  return {
    /** The key of a page (a file in destination) with Hugo's HTML text and its search entry. */
    key: (file, text, entry) => sha256(`${version}\0${relative(destination, file)}\0${JSON.stringify(entry ?? null)}\0${text}`),
    /** The stored result for a page if its key matches, else undefined. */
    async get(file, key) {
      try {
        const stored = JSON.parse(await readFile(join(directory, `${id(file)}.json`), 'utf8'));
        return stored.key === key ? stored : undefined;
      } catch (error) {
        if (error.code === 'ENOENT' || error instanceof SyntaxError) return;
        throw error;
      }
    },
    /** Stores a page's result; replaced in one step, so that a key never comes with another page's HTML. */
    async set(file, entry) {
      await mkdir(directory, { recursive: true });
      const path = join(directory, `${id(file)}.json`), temporary = `${path}.${process.pid}-${threadId}.tmp`;
      await writeFile(temporary, JSON.stringify(entry));
      await rename(temporary, path);
    },
    /** Removes the results of pages other than these files (gone from the site). Returns how many. */
    async prune(files) {
      const kept = new Set(files.map(file => `${id(file)}.json`));
      let removed = 0;
      for (const name of await readdir(directory).catch(() => [])) {
        if (kept.has(name)) continue;
        await rm(join(directory, name), { force: true });
        removed++;
      }
      return removed;
    },
  };
}
