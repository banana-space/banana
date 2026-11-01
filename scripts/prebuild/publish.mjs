import { mkdir, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

/** 有限并发地处理列表，避免一次打开数千个文件。 */
export async function eachLimit(items, action, limit = 64) {
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) await action(items[next++]);
  }));
}

/**
 * 使目录 destination 恰好含有 files（相对路径 → 文本）：内容未变的文件不重写，变化的文件先写入同目录临时文件再 rename，
 * 其余文件和目录删除。
 */
export async function publishContent(files, destination) {
  const directories = new Set();
  for (const path of files.keys()) for (let parent = dirname(path); parent !== '.'; parent = dirname(parent)) directories.add(parent);
  await mkdir(destination, { recursive: true });
  const entries = await readdir(destination, { recursive: true, withFileTypes: true });
  await eachLimit(entries, async entry => {
    const path = join(entry.parentPath, entry.name).slice(destination.length + 1);
    if (!(entry.isDirectory() ? directories.has(path) : files.has(path))) await rm(join(destination, path), { recursive: true, force: true });
  });
  for (const directory of [...directories].sort()) await mkdir(join(destination, directory), { recursive: true });
  await eachLimit([...files], async ([path, text]) => {
    const to = join(destination, path);
    if (await readFile(to, 'utf8').catch(() => undefined) === text) return;
    const temporary = join(dirname(to), `.publish-${process.pid}-${Math.random().toString(36).slice(2)}`);
    await writeFile(temporary, text);
    await rename(temporary, to);
  });
}
