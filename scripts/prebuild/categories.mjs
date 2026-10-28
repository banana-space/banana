import { t } from '../shared/i18n.mjs';
import { readFile } from 'node:fs/promises';
import { parse, stringify } from 'yaml';
import { pageName } from '../shared/names.mjs';
import { normalizeReading, readingMetadata } from './reading.mjs';

/** Category identities, ancestor membership, and generated taxonomy pages. */
export async function categoryTree(root) {
  const tree = parse(await readFile(`${root}data/categories.yaml`, 'utf8')) ?? {};
  if (typeof tree !== 'object' || Array.isArray(tree)) throw new Error(t('build_category_mapping'));
  const ancestors = new Map(), categories = new Map();
  function category(value, file, register = true) {
    const result = pageName(value, file, t('build_category_name'));
    if (/[\\/\u0000-\u001f]/.test(result.key) || ['.', '..'].includes(result.key)) throw new Error(t('build_category_path', { File: file, Value: value }));
    if (register && !categories.has(result.key)) categories.set(result.key, result);
    return result.key;
  }
  for (const [value, config] of Object.entries(tree)) {
    const name = pageName(value, 'data/categories.yaml', t('build_category_name')).key;
    if (categories.has(name)) throw new Error(t('build_category_duplicate', { Name: name, FirstName: categories.get(name).source, Value: value }));
    category(value, 'data/categories.yaml');
    Object.assign(categories.get(name), { source: value, config });
  }
  for (const name of categories.keys()) {
    const path = [];
    let current = name;
    while (current) {
      if (path.includes(current)) throw new Error(t('build_category_cycle', { Path: [...path, current].join(' → ') }));
      if (!categories.has(current)) throw new Error(t('build_category_missing', { Name: current }));
      path.push(current);
      const config = categories.get(current).config;
      if (config !== null && (typeof config !== 'object' || Array.isArray(config))) throw new Error(t('build_category_invalid', { Name: current }));
      if (config?.sort !== undefined) normalizeReading(config.sort, 'data/categories.yaml', `${current}.sort`);
      current = config?.parent;
      if (current !== undefined) current = pageName(current, 'data/categories.yaml', t('build_category_parent', { Name: path.at(-1) })).key;
    }
    ancestors.set(name, path);
    categories.get(name).parent = path[1];
  }
  return {
    /** register：为不在分类树中的分类生成分类页（完整预处理）；为 false 时不改变分类表。 */
    membership(values, file, { register = true } = {}) {
      const leaves = Array.isArray(values) ? values : [values];
      if (leaves.some(name => typeof name !== 'string')) throw new Error(t('build_category_list', { File: file }));
      const direct = [...new Set(leaves.map(name => category(name, file, register)))];
      return { directCategories: direct, categories: [...new Set(direct.flatMap(name => ancestors.get(name) ?? [name]))] };
    },
    /** 全部分类名称（匹配键）。 */
    names: () => new Set(categories.keys()),
    /**
     * 为每个分类生成或补全 categories/<名称>/index.md；作者写的分类页正文保留。分类总览（/categories/）也写成
     * 页面，serve 的部分重建才能把它列入要重新渲染的页面（见 affected.mjs）。
     */
    publish(files) {
      if (!files.has('categories/index.md')) files.set('categories/index.md', { text: `---\n${stringify({ title: 'Categories' })}---\n` });
      for (const [name, category] of categories) {
        const path = `categories/${name}/index.md`;
        const text = files.get(path)?.text ?? '';
        const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
        const metadata = match ? parse(match[1]) ?? {} : {};
        const body = text.slice(match?.[0].length ?? 0);
        const title = category.parts.map(part => part.text).join('');
        Object.assign(metadata, { title, titleParts: category.parts, categoryParent: category.parent ?? '' },
          readingMetadata({ name: title, manual: category.config?.sort, file: 'data/categories.yaml', field: `${name}.sort` }));
        files.set(path, { text: `---\n${stringify(metadata)}---\n${body}` });
      }
    },
  };
}
