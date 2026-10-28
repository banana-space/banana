import { readdir, stat } from 'node:fs/promises';
import { join, posix, relative, resolve } from 'node:path';
import { isPublished } from '../prebuild/collections.mjs';

/** 目录及其子目录中的全部 Markdown 页面。 */
async function pagesBelow(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await pagesBelow(path));
    else if (/\.md$/i.test(entry.name)) result.push(path);
  }
  return result;
}

/**
 * 把命令行给出的文件或页面目录解析为 content/ 内的 Markdown 相对路径。
 * 页面的目录（含 index.md）取该页及其下的全部页面（如一本讲义或其中一章）。
 * 组件定义不是页面，不能单独预览。
 */
export async function resolvePages(root, paths) {
  const content = join(root, 'content');
  const pages = new Set();
  for (const path of paths) {
    let file = resolve(path);
    const info = await stat(file).catch(() => undefined);
    if (!info) throw new Error(`${path}: 文件不存在`);
    let files = [file];
    if (info.isDirectory()) {
      if (!await stat(join(file, 'index.md')).then(() => true, () => false)) throw new Error(`${path}: 目录中没有 index.md`);
      files = await pagesBelow(file);
    }
    for (const found of files) {
      const page = relative(content, found).split('\\').join('/');
      if (page.startsWith('../') || !/\.md$/i.test(page)) throw new Error(`${path}: 不是 content/ 中的 Markdown 页面`);
      if (/^navboxes\//.test(page)) throw new Error(`${path}: 组件定义不是页面，请预览使用它的页面`);
      pages.add(page);
    }
  }
  return pages;
}

/** 页面的默认路径：小写、空格变连字符，index.md 取所在目录。 */
export function defaultPath(page) {
  const path = `/${page}`.replace(/\/index\.md$/i, '').replace(/\.md$/i, '') || '/';
  return path.toLowerCase().replace(/ /g, '-');
}

/**
 * The URL path of a generated page (relative, in the generated directory), from its generated metadata (the rules
 * are Hugo's); undefined for pages that are not rendered.
 */
export function pageURL(relative, metadata) {
  if (!isPublished(metadata)) return;
  if (typeof metadata.url === 'string') return metadata.url.endsWith('/') ? metadata.url : `${metadata.url}/`;
  let path = defaultPath(relative);
  if (typeof metadata.slug === 'string') path = path.replace(/[^/]*$/, metadata.slug);
  return path === '/' ? '/' : `${path}/`;
}

/**
 * The pages with pages below them (the home page, a section, a book, a chapter): the index.md of each directory
 * above a page, its own directory being the one its index.md stands for. relatives: the pages' paths (relative to
 * content/ or the generated directory).
 */
export function branchPages(relatives) {
  const branches = new Set();
  for (const relative of relatives) {
    let directory = posix.dirname(relative);
    if (posix.basename(relative) === 'index.md') {
      if (directory === '.') continue;
      directory = posix.dirname(directory);
    }
    for (;;) {
      const page = directory === '.' ? 'index.md' : `${directory}/index.md`;
      if (branches.has(page)) break;
      branches.add(page);
      if (directory === '.') break;
      directory = posix.dirname(directory);
    }
  }
  return branches;
}
