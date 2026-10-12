// Formats the Markdown sources in content/ (scripts/format/markdown.mjs: line breaks and indentation only).
//
//   npm run format              rewrites the files that are not formatted
//   npm run format -- --check   lists them and fails, changing nothing
//   npm run format -- <files>   only these files
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join, relative } from 'node:path';
import { formatMarkdown } from './format/markdown.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const args = process.argv.slice(2), check = args.includes('--check');
const named = args.filter(arg => !arg.startsWith('--'));

async function walk(directory, found = []) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path, found);
    else if (entry.name.endsWith('.md')) found.push(path);
  }
  return found;
}

const files = named.length ? named : await walk(join(root, 'content'));
const changed = [];
for (const file of files) {
  const text = await readFile(file, 'utf8'), formatted = formatMarkdown(text);
  if (formatted === text) continue;
  changed.push(relative(root, file));
  if (!check) await writeFile(file, formatted);
}
if (check && changed.length) {
  console.error(`not formatted (npm run format):\n${changed.join('\n')}`);
  process.exit(1);
}
console.log(check ? `${files.length} files formatted` : `${changed.length} of ${files.length} files formatted`);
