import { copyFile, link, mkdir, open, readdir, readFile, readlink, rename, rm, stat, symlink, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

/** 有限并发地处理列表，避免一次打开数千个文件。 */
export async function eachLimit(items, action, limit = 64) {
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) await action(items[next++]);
  }));
}

/**
 * 仅在完整转换成功后调用：files 把生成目录内的相对路径映射到
 * { text } 生成的页面、{ link } 原样发布的附件（硬链接，跨文件系统时复制）或 { symlink }。
 * 未变化的文件保持不动；变化的文件先写入同目录临时文件再 rename，原子替换单个文件；
 * 其余文件和目录删除。返回写入或删除的项目数。
 */
export async function publishContent(files, destination) {
  const plan = await publishPlan(files, destination);
  await plan.run();
  return plan.written.length + plan.removed.length;
}

/**
 * publishContent 的两步：先比较，返回 { written, removed, run }：将写入与删除的相对路径（删除的目录只列
 * 最上层），run(paths) 只做其中这些改动（默认全部）。常驻预览服务据此分批写入，每批等 Hugo 重建。
 * force：一律重新发布的路径。附件是源文件的硬链接，源文件原地修改时生成目录中的也已改变，比较不出差别，
 * 但 Hugo 要收到这个文件的事件才会重新发布它。
 */
export async function publishPlan(files, destination, { force = [] } = {}) {
  const forced = new Set(force);
  const directories = new Set();
  for (const path of files.keys()) {
    for (let parent = dirname(path); parent !== '.'; parent = dirname(parent)) directories.add(parent);
  }
  const existing = new Map();
  await mkdir(destination, { recursive: true });
  for (const entry of await readdir(destination, { recursive: true, withFileTypes: true })) {
    existing.set(join(entry.parentPath, entry.name).slice(destination.length + 1), entry);
  }
  // Shallowest first: removing a directory removes everything below it.
  const removed = [];
  for (const path of [...existing.keys()].sort((a, b) => a.length - b.length)) {
    const entry = existing.get(path);
    if (!entry) continue; // Removed with a parent directory.
    const wanted = entry.isDirectory() ? directories.has(path) : files.has(path) && (files.get(path).symlink !== undefined) === entry.isSymbolicLink();
    if (wanted) continue;
    removed.push(path);
    for (const other of existing.keys()) if (other.startsWith(`${path}/`)) existing.delete(other);
    existing.delete(path);
  }
  const written = [];
  await eachLimit([...files], async ([path, file]) => {
    const to = join(destination, path), previous = existing.has(path) && !forced.has(path);
    if (file.text !== undefined) {
      if (previous && await readFile(to, 'utf8') === file.text) return;
    } else if (file.link !== undefined) {
      // Attachments are hard links to their source: the same inode is the same file.
      if (previous) {
        const [next, old] = await Promise.all([stat(file.link), stat(to)]);
        if (next.ino === old.ino && next.dev === old.dev) return;
        if (next.size === old.size && (await readFile(file.link)).equals(await readFile(to))) return;
      }
    } else if (previous && await readlink(to) === file.symlink) return;
    written.push(path);
  });
  written.sort();
  return {
    written, removed,
    async run(paths = [...removed, ...written]) {
      const chosen = new Set(paths);
      for (const path of removed) if (chosen.has(path)) await rm(join(destination, path), { recursive: true, force: true });
      const needed = new Set();
      for (const path of chosen) for (let parent = dirname(path); parent !== '.'; parent = dirname(parent)) needed.add(parent);
      for (const path of [...needed].sort()) if (directories.has(path) && !existing.has(path)) await mkdir(join(destination, path), { recursive: true });
      await eachLimit(written.filter(path => chosen.has(path)), path => replaceFile(join(destination, path), files.get(path)));
    },
  };
}

/** 同一文件系统内 rename 原子替换单个文件，避免留下半写入文件。 */
async function replaceFile(to, file) {
  const temporary = join(dirname(to), `.publish-${process.pid}-${Math.random().toString(36).slice(2)}`);
  try {
    if (file.text !== undefined) await writeFile(temporary, file.text);
    else if (file.link !== undefined) {
      await link(file.link, temporary).catch(error => {
        if (!['EXDEV', 'EPERM', 'EMLINK'].includes(error.code)) throw error;
        return copyFile(file.link, temporary);
      });
    } else await symlink(file.symlink, temporary);
    await rename(temporary, to);
  } catch (error) {
    await rm(temporary, { force: true });
    throw error;
  }
}

/**
 * 只写入给定的生成页面（相对路径 → 文本），不删除其他文件；内容未变的文件不重写。
 * 供增量更新使用。返回实际写入的相对路径。
 */
export async function writePages(pages, destination) {
  const written = [];
  for (const [path, text] of pages) {
    const to = join(destination, path);
    if (await readFile(to, 'utf8').catch(() => undefined) === text) continue;
    await mkdir(dirname(to), { recursive: true });
    await replaceFile(to, { text });
    written.push(path);
  }
  return written;
}

/**
 * 原样重写生成目录中的这些文件（相对路径），使监听的 Hugo 重新渲染它们；不存在的跳过。
 * 供 serve 的部分重建使用：内容未变、但依赖其他页面的页面（见 affected.mjs）。
 * 在原文件上写回同样的字节，不截断：任何时刻读到的都是完整的文件，而且 Hugo 只收到一个文件事件
 * （先写临时文件再 rename 是三个，见 preview-service.mjs 的 batchSize）。
 */
export async function touchPages(paths, destination) {
  await eachLimit([...paths], async path => {
    const to = join(destination, path);
    const content = await readFile(to).catch(error => { if (error.code !== 'ENOENT') throw error; });
    if (content === undefined) return;
    const file = await open(to, 'r+');
    try { await file.write(content, 0, content.length, 0); } finally { await file.close(); }
  });
}
