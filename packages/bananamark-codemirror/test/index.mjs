import { execFileSync } from 'node:child_process';
import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Runs every test of the package, each in a process of its own.
const directory = fileURLToPath(new URL('./', import.meta.url));
const skip = new Set(['index.mjs']);
for (const file of (await readdir(directory)).filter(file => file.endsWith('.mjs') && !skip.has(file)).sort()) {
  execFileSync(process.execPath, [file], { cwd: directory, stdio: 'inherit' });
}
