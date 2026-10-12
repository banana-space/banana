import { readdir, stat } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';
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
 * 页面包目录（含 index.md）取该页；分节目录（含 _index.md，如一本讲义或其中一章）
 * 取其下的全部页面。组件定义不是页面，不能单独预览。
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
      const index = await Promise.all(['index.md', '_index.md'].map(name => stat(join(file, name)).then(() => join(file, name), () => undefined)));
      if (index[0]) files = [index[0]];
      else if (index[1]) files = await pagesBelow(file);
      else throw new Error(`${path}: 目录中没有 index.md 或 _index.md`);
    }
    for (const found of files) {
      const page = relative(content, found).split('\\').join('/');
      if (page.startsWith('../') || !/\.md$/i.test(page)) throw new Error(`${path}: 不是 content/ 中的 Markdown 页面`);
      if (/^(?:notices|navboxes)\//.test(page)) throw new Error(`${path}: 组件定义不是页面，请预览使用它的页面`);
      pages.add(page);
    }
  }
  return pages;
}

/** Hugo 的页面逻辑路径：小写、空格变连字符，_index.md/index.md 取所在目录。 */
export function hugoPath(page) {
  const path = `/${page}`.replace(/\/_?index\.md$/i, '').replace(/\.md$/i, '') || '/';
  return path.toLowerCase().replace(/ /g, '-');
}

/**
 * The URL path of a generated page (relative, in the generated directory) as Hugo assigns it, from its
 * generated metadata; undefined for pages that are not rendered. Hugo's output keeps a page that has
 * since become a draft, so this decides, not a 404.
 */
export function pageURL(relative, metadata) {
  if (!isPublished(metadata)) return;
  if (typeof metadata.url === 'string') return metadata.url.endsWith('/') ? metadata.url : `${metadata.url}/`;
  let path = hugoPath(relative);
  if (typeof metadata.slug === 'string') path = path.replace(/[^/]*$/, metadata.slug);
  return path === '/' ? '/' : `${path}/`;
}
