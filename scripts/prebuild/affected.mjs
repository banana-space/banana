import { dirname, posix } from 'node:path';

/**
 * 生成目录变化后，还要重新渲染哪些内容没有变化的页面，以及哪些输出不再存在（serve 的部分重建，
 * 见 docs/preview.md）：分类页、列表页与书册目录读取其他页面的标题，链接取决于目标的地址。
 *
 * before、after：两个状态的 { pages（prebuild 的 pageIndex()）, files（生成目录内的相对路径 → 条目）,
 * categories（分类名称的集合）}；targets：after 中各页面的百科链接目标（linkTargets()）；
 * roots：书册根目录（以 / 结尾）；changed：写入或删除的生成文件；categoriesChanged：分类树有变化。
 *
 * 返回 { touch, removed }：touch 为要重写的生成页面（不含 changed 中的），
 * removed 为不再输出的文件的网址路径（如 /wiki/甲/index.html）。
 */
export function affectedPages({ before, after, targets, roots, changed, categoriesChanged = false }) {
  const touch = new Set(), removed = new Set();
  const isPage = path => /\.md$/i.test(path);
  const pages = [...changed].filter(path => isPage(path) && (before.pages.has(path) || after.pages.has(path)));

  // Links: names whose page, address or alias status changed (added, removed, renamed, unpublished, moved).
  const index = state => {
    const names = new Map();
    for (const { url, names: list } of state.pages.values()) if (url) for (const [name, alias] of list) names.set(name, `${url}\0${alias}`);
    return names;
  };
  const [old, next] = [index(before), index(after)];
  const names = new Set([...old.keys(), ...next.keys()].filter(name => old.get(name) !== next.get(name)));
  if (names.size) for (const [path, set] of targets) for (const name of set) if (names.has(name)) { touch.add(path); break; }

  // Lists: the categories (with their parents) of a changed page, the sections above it, its collection,
  // and the pages that count pages or list names (the home page's statistics, the editor's entry list).
  for (const path of pages) {
    for (const state of [before, after]) for (const category of state.pages.get(path)?.categories ?? []) touch.add(`categories/${category}/index.md`);
    for (let directory = dirname(path); directory !== '.'; directory = dirname(directory)) touch.add(`${directory}/index.md`);
    const root = roots.find(prefix => path.startsWith(prefix));
    if (root) for (const other of after.pages.keys()) if (other.startsWith(root)) touch.add(other);
  }
  if (pages.length) for (const path of ['index.md', 'edit/index.md']) touch.add(path);
  if (categoriesChanged) for (const path of after.files.keys()) if (/^categories\/[^/]+\/index\.md$/.test(path)) touch.add(path);
  // A link to a category is marked as one only while the category exists.
  if (!sameSet(before.categories, after.categories)) {
    for (const [path, file] of after.files) if (file.text?.includes('categories/')) touch.add(path);
  }

  // The overview of categories counts their pages.
  if ([...touch].some(path => path.startsWith('categories/'))) touch.add('categories/index.md');

  // Attachments: published with the page whose bundle holds them.
  for (const path of changed) {
    if (isPage(path)) continue;
    for (const state of [before, after]) {
      const bundle = bundleOf(path, state.files);
      if (bundle) touch.add(bundle);
    }
    const bundle = bundleOf(path, before.files), url = bundle && before.pages.get(bundle)?.url;
    if (url && !after.files.has(path)) removed.add(url + posix.relative(dirname(bundle), path));
  }
  // Pages no longer at their address, with the attachments published next to them.
  for (const [path, { url }] of before.pages) {
    if (!url || after.pages.get(path)?.url === url) continue;
    removed.add(`${url}index.html`);
    for (const file of before.files.keys()) {
      if (!isPage(file) && bundleOf(file, before.files) === path) removed.add(url + posix.relative(dirname(path), file));
    }
  }

  for (const path of [...touch]) if (changed.has(path) || after.files.get(path)?.text === undefined) touch.delete(path);
  return { touch, removed };
}

const sameSet = (a, b) => a.size === b.size && [...a].every(item => b.has(item));

/** The page (an index.md) an attachment belongs to: the nearest one above it. */
function bundleOf(path, files) {
  for (let directory = dirname(path); directory !== '.'; directory = dirname(directory)) {
    if (files.has(`${directory}/index.md`)) return `${directory}/index.md`;
  }
}
