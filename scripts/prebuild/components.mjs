import { t } from '../shared/i18n.mjs';
/** Page notices and grouped navigation. Content is parsed independently of article numbering. */
import { readFile } from 'node:fs/promises';
import { isScalar, isSeq } from 'yaml';
import { yamlDocument, mapFields } from '../shared/yaml.mjs';
import { readWiki, transformMarkup } from './markup.mjs';

function textNode(node, source, fail) {
  if (isScalar(node) && typeof node.value === 'string' && node.value.trim()) return node.value.trim();
  // Interpret only an entire wiki-link value, using its original source. Do not
  // reconstruct arbitrary YAML arrays: commas and captions must retain spelling.
  if (isSeq(node)) {
    const raw = source.slice(node.range[0], node.range[1]).trim();
    const wiki = readWiki(raw, 0);
    if (wiki && wiki.end === raw.length) return raw;
  }
  fail(t('build_component_text'), node?.range?.[0] ?? 0);
}

export function parseNavbox(source, fail) {
  const doc = yamlDocument(source, fail), root = doc.contents;
  mapFields(root, ['title', 'groups', 'collapsed'], fail);
  const title = transformMarkup(textNode(root.get('title', true), source, fail));
  const collapsed = root.get('collapsed') ?? false;
  if (typeof collapsed !== 'boolean') fail(t('build_collapsed_boolean'), root.get('collapsed', true)?.range?.[0] ?? 0);
  const leaves = [];
  function groups(node, parents = []) {
    if (!isSeq(node) || !node.items.length) fail(t('build_groups_list'), node?.range?.[0] ?? 0);
    if (parents.length >= 4) fail(t('build_group_depth'), node.range[0]);
    for (const group of node.items) {
      mapFields(group, ['title', 'items', 'subgroups'], fail);
      const heading = { text: transformMarkup(textNode(group.get('title', true), source, fail)) };
      const path = [...parents, heading];
      if (group.has('items') === group.has('subgroups')) fail(t('build_group_contents'), group.range[0]);
      if (group.has('subgroups')) groups(group.get('subgroups', true), path);
      else {
        const items = group.get('items', true);
        if (!isSeq(items) || !items.items.length) fail(t('build_items_list'), items?.range?.[0] ?? group.range[0]);
        leaves.push({ path, items: items.items.map(item => transformMarkup(textNode(item, source, fail))) });
      }
    }
  }
  groups(root.get('groups', true));
  const depth = Math.max(...leaves.map(leaf => leaf.path.length));
  const rows = leaves.map((leaf, index) => ({
    cells: leaf.path.flatMap((heading, level) => {
      if (leaves[index - 1]?.path[level] === heading) return [];
      let span = 1;
      while (leaves[index + span]?.path[level] === heading) span++;
      return [{ text: heading.text, rowspan: span, colspan: level === leaf.path.length - 1 ? depth - level : 1 }];
    }),
    items: leaf.items,
  }));
  return { title, collapsed, rows };
}

const namePattern = /^[^\\/\u0000-\u001f]+$/u;
function componentName(name, fail) {
  if (typeof name !== 'string' || !name.trim() || !namePattern.test(name) || ['.', '..'].includes(name)) fail(t('build_component_name'));
  return name.trim().normalize('NFC');
}

/** Load only requested definitions, retaining both caller and definition diagnostics. */
export function componentLoader(root) {
  const cache = new Map();
  async function load(kind, name, extension, caller) {
    const file = `${root}content/${kind}/${name}.${extension}`;
    if (!cache.has(file)) {
      try { cache.set(file, await readFile(file, 'utf8')); }
      catch (error) {
        if (error.code === 'ENOENT') throw new Error(t('build_component_missing', { Caller: caller, Kind: kind, Name: name }));
        throw error;
      }
    }
    return { file, source: cache.get(file) };
  }
  /** isWiki：页面是百科条目；模板中的内置值 {{{本页}}} 在条目中为“本条目”，在讲义等其他页面中为“本页面”。 */
  return async function prepare(metadata, caller, { isWiki = true } = {}) {
    const callerFail = message => { throw new Error(`${caller}:1: ${message}`); };
    const result = { notices: [], navboxes: [] };
    for (const kind of ['notices', 'navboxes']) {
      const declarations = metadata[kind] ?? [];
      if (!Array.isArray(declarations)) callerFail(t('build_component_list', { Kind: kind }));
      for (const declaration of declarations) {
        const call = typeof declaration === 'string' ? { name: declaration } : declaration;
        if (!call || typeof call !== 'object' || Array.isArray(call)) callerFail(t('build_component_entry', { Kind: kind }));
        const name = componentName(call.name, callerFail);
        const { file, source } = await load(kind, name, kind === 'notices' ? 'md' : 'yaml', caller);
        const fail = (message, offset = 0) => { throw new Error(t('build_component_context', { Caller: caller, Kind: kind, Name: name, File: file, Line: source.slice(0, offset).split('\n').length, Value: message })); };
        if (kind === 'navboxes') {
          if (Object.keys(call).some(key => key !== 'name')) callerFail(t('build_navbox_parameters', { Name: name }));
          result.navboxes.push({ name, ...parseNavbox(source, fail) });
          continue;
        }
        const match = source.match(/^(?:\uFEFF)?---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
        if (!match) fail(t('build_notice_frontmatter'));
        const headerOffset = source.indexOf('\n') + 1;
        const doc = yamlDocument(match[1], (message, offset) => fail(message, headerOffset + offset));
        mapFields(doc.contents, ['title', 'style', 'icon', 'parameters'], (message, offset) => fail(message, headerOffset + offset));
        const config = doc.toJS();
        const style = config.style ?? 'info';
        if (!['info', 'warning', 'error', 'note'].includes(style)) fail(t('build_notice_style'));
        const icon = config.icon ?? '';
        if (typeof icon !== 'string' || (icon && !['disambiguation', 'tip', 'problem'].includes(icon))) fail(t('build_notice_icon'));
        if (config.title !== undefined && typeof config.title !== 'string') fail(t('build_notice_title'));
        const schema = config.parameters ?? {};
        if (!schema || typeof schema !== 'object' || Array.isArray(schema)) fail(t('build_notice_parameters'));
        for (const key of Object.keys(call)) {
          if (key !== 'name' && !Object.hasOwn(schema, key)) callerFail(t('build_notice_unknown_parameter', { Name: name, Key: key }));
        }
        const values = Object.create(null);
        const fieldNames = new Set();
        const isText = value => typeof value === 'string' && !/[\r\n]/.test(value);
        for (const [key, rule] of Object.entries(schema)) {
          if (key === 'name' || !/^[\p{L}\p{N}_-]+$/u.test(key)) fail(t('build_parameter_name', { Key: key }));
          if (!rule || typeof rule !== 'object' || Array.isArray(rule) || Object.keys(rule).some(field => !['required', 'default', 'type', 'fields'].includes(field))) fail(t('build_parameter_config', { Key: key }));
          if (rule.required !== undefined && typeof rule.required !== 'boolean') fail(t('build_parameter_required_boolean', { Key: key }));
          const type = rule.type ?? 'text';
          if (!['text', 'list'].includes(type) || (type === 'list' && rule.default !== undefined)) fail(t('build_parameter_type', { Key: key }));
          const fields = rule.fields;
          if (fields !== undefined && (type !== 'list' || !fields || typeof fields !== 'object' || Array.isArray(fields)
            || Object.entries(fields).some(([field, config]) => !/^[\p{L}\p{N}_-]+$/u.test(field) || !config || typeof config !== 'object'
              || Array.isArray(config) || Object.keys(config).some(option => !['required', 'type'].includes(option))
              || (config.required !== undefined && typeof config.required !== 'boolean')
              || (config.type !== undefined && !['text', 'list'].includes(config.type))))) fail(t('build_parameter_fields', { Key: key }));
          for (const field of Object.keys(fields ?? {})) fieldNames.add(field);
          const value = Object.hasOwn(call, key) ? call[key] : rule.default;
          if (value === undefined && rule.required) callerFail(t('build_notice_required_parameter', { Name: name, Key: key }));
          if (value !== undefined && type === 'text' && !isText(value)) callerFail(t('build_notice_parameter_text', { Name: name, Key: key }));
          let normalized = value;
          if (value !== undefined && type === 'list') {
            if (!Array.isArray(value) || !value.length) callerFail(t('build_notice_parameter_list', { Name: name, Key: key }));
            normalized = value.map(item => {
              if (!fields) {
                if (!isText(item)) callerFail(t('build_notice_parameter_item', { Name: name, Key: key }));
                return item;
              }
              if (!item || typeof item !== 'object' || Array.isArray(item)) callerFail(t('build_notice_parameter_record', { Name: name, Key: key }));
              for (const field of Object.keys(item)) {
                if (!Object.hasOwn(fields, field)) callerFail(t('build_notice_unknown_field', { Name: name, Key: key, Field: field }));
              }
              const record = { ...item };
              for (const [field, config] of Object.entries(fields)) {
                if (item[field] === undefined) {
                  if (config.required) callerFail(t('build_notice_required_field', { Name: name, Key: key, Field: field }));
                  continue;
                }
                // 列表字段可写单个文字（视为一项）或文字的非空列表。
                if (config.type === 'list') {
                  record[field] = Array.isArray(item[field]) ? item[field] : [item[field]];
                  if (!record[field].length || !record[field].every(isText)) callerFail(t('build_notice_parameter_field_list', { Name: name, Key: `${key}.${field}` }));
                } else if (!isText(item[field])) callerFail(t('build_notice_parameter_text', { Name: name, Key: `${key}.${field}` }));
              }
              return record;
            });
          }
          values[key] = normalized ?? (type === 'list' ? [] : '');
        }
        if (!Object.hasOwn(values, '本页')) values['本页'] = isWiki ? '本条目' : '本页面';
        // 正文模板：{{{参数}}} 替换为文字；{{{#参数}}}…{{{/参数}}} 对列表逐项重复（列表项为文字时用 {{{.}}}），
        // 对文字在非空时出现一次；{{{^参数}}}…{{{/参数}}} 在参数为空时出现；{{{#参数|分隔}}} 在各项之间插入分隔文字。
        // 开始标记后紧跟的换行不计入，便于逐行书写列表。
        const lookup = (key, stack) => {
          for (let k = stack.length - 1; k >= 0; k--) if (Object.hasOwn(stack[k], key)) return stack[k][key];
          if (key !== '.' && !Object.hasOwn(values, key) && !fieldNames.has(key)) fail(t('build_notice_undeclared_parameter', { Key: key }));
          return undefined;
        };
        const empty = value => value === undefined || value === '' || (Array.isArray(value) && !value.length);
        const render = (text, stack) => text.replace(
          /\{\{\{([#^])([^{}|]+?)(?:\|([^{}]*))?\}\}\}\n?([\s\S]*?)\{\{\{\/\2\}\}\}|\{\{\{([^{}#^/]+)\}\}\}/g,
          (_match, mode, key, separator = '', inner, plain) => {
            if (plain !== undefined) {
              const value = lookup(plain.trim(), stack);
              return typeof value === 'string' ? value : '';
            }
            const value = lookup(key.trim(), stack);
            if (mode === '^') return empty(value) ? render(inner, stack) : '';
            if (empty(value)) return '';
            if (!Array.isArray(value)) return render(inner, stack);
            return value.map(item => render(inner, [...stack, typeof item === 'string' ? { '.': item } : item])).join(separator);
          });
        const interpolate = text => render(text, [values]);
        result.notices.push({ name, style, icon, title: transformMarkup(interpolate(config.title ?? '')), body: transformMarkup(interpolate(source.slice(match[0].length))) });
      }
    }
    return result;
  };
}
