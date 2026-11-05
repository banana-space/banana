import { parseDocument } from 'yaml';
import { t } from '../shared/i18n.mjs';

/**
 * 在线编辑对导言区（front matter）的要求，比完整构建更严：页面必须有导言区，其中 title 为非空文字
 * （完整构建在没有 title 时取目录名），并且只能有作者使用的字段（authorKeys）。由浏览器内检查（site/scripts/editor/check.js）与 API
 * （scripts/api.mjs）共用。
 *
 * keys：允许的字段；本地编辑（scripts/service/local-edit.mjs）允许页面的全部字段（pageKeys）。
 * 返回 [{ line, column, message }]，行列号从 1 起；
 * YAML 语法错误不在这里报告（由解析导言区的地方报告）。
 */
/** The front matter's keys a page edited online may have. */
export const authorKeys = ['title', 'aliases', 'categories', 'navboxes', 'sort', 'lang', 'numbering', 'typography', 'tocDepth', 'search', 'description'];
/** The front matter's keys any page may have: anything else is an error in the build too. */
export const pageKeys = [...authorKeys, 'childrenToc', 'draft'];

export function frontMatterProblems(text, { keys = authorKeys } = {}) {
  const match = text.match(/^(?:﻿)?---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) return [{ line: 1, column: 1, message: t(/^(?:\uFEFF)?---\r?\n/.test(text) ? 'build_front_matter_unclosed' : 'build_front_matter_missing') }];
  const document = parseDocument(match[1]);
  if (document.errors.length) return [];
  const root = document.contents;
  // Positions within the front matter are offset by the opening "---" line.
  const position = node => {
    const offset = node?.range?.[0];
    if (offset === undefined) return { line: 1, column: 1 };
    const before = match[1].slice(0, offset);
    return { line: before.split('\n').length + 1, column: offset - before.lastIndexOf('\n') };
  };
  if (!root || typeof root.get !== 'function') return [{ line: 1, column: 1, message: t('build_front_matter_missing') }];
  const problems = [];
  // Only the keys authors write: a page edited online is not kept from being published (draft).
  for (const pair of root.items ?? []) {
    const key = pair.key?.value;
    if (typeof key !== 'string' || !keys.includes(key)) {
      problems.push({ ...position(pair.key), message: t('build_front_matter_key', { Key: String(key), Allowed: keys.join('、') }) });
    }
  }
  const title = root.get('title', true);
  if (!title) problems.push({ line: 1, column: 1, message: t('build_front_matter_field', { Field: 'title' }) });
  else if (typeof title.value !== 'string' || !title.value.trim()) problems.push({ ...position(title), message: t('build_front_matter_title') });
  return problems;
}
