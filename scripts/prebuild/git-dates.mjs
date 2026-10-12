import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { relative } from 'node:path';

const run = promisify(execFile);

/**
 * Source-file commit dates, never generated-file timestamps or author overrides.
 * One `git log` pass replaces a `git log -1 -- <path>` per file: the first commit
 * listing a path (newest first) is its date, and a directory takes the newest
 * commit touching anything below it, including removed files.
 */
export async function gitDates(root) {
  let repository;
  try { repository = (await run('git', ['rev-parse', '--show-toplevel'], { cwd: root })).stdout.trim(); }
  catch (error) {
    if (error.code === 128) return Object.assign(async () => undefined, { tree: async () => undefined }); // Source export without Git history.
    throw error;
  }
  try { await run('git', ['rev-parse', '--verify', 'HEAD'], { cwd: repository }); }
  catch (error) { if (error.code === 128) return Object.assign(async () => undefined, { tree: async () => undefined }); throw error; }
  const tracked = new Set((await run('git', ['ls-files', '-z'], { cwd: repository, maxBuffer: 16 * 1024 * 1024 })).stdout.split('\0'));
  const files = new Map(), directories = new Map();
  const { stdout } = await run('git', ['log', '--format=%x1e%cI', '--name-only', '--no-renames', '-z', 'HEAD'], { cwd: repository, maxBuffer: 1024 * 1024 * 1024 });
  let date;
  for (let token of stdout.split('\0')) {
    token = token.replace(/^\n/, '');
    if (token.startsWith('\x1e')) { date = token.slice(1); continue; }
    if (!token || files.has(token)) continue;
    files.set(token, date);
    for (let end = token.lastIndexOf('/'); end > 0; end = token.lastIndexOf('/', end - 1)) {
      const directory = token.slice(0, end);
      if (directories.has(directory)) break; // Its ancestors were set by a newer or equal commit.
      directories.set(directory, date);
    }
  }
  const dateFor = async file => {
    const path = relative(repository, file);
    if (!tracked.has(path)) return;
    return files.get(path);
  };
  dateFor.tree = async directory => {
    const path = relative(repository, directory);
    if (![...tracked].some(file => file.startsWith(`${path}/`))) return;
    return directories.get(path);
  };
  return dateFor;
}
