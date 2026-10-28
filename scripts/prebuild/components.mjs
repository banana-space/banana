import { t } from '../shared/i18n.mjs';
/** Grouped navigation (navboxes). Content is parsed independently of article numbering. */
import { readFile } from 'node:fs/promises';
import { isScalar, isSeq } from 'yaml';
import { yamlDocument, mapFields } from '../shared/yaml.mjs';
import { readWiki, transformFragment } from 'bananamark/internal/markup.mjs';
import { siteSyntax } from '../shared/syntax.mjs';

/** Text of the front matter or of a component, with the site's tags. */
const siteText = text => transformFragment(text, { ...siteSyntax, lang: 'zh-cn' });

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
  const title = siteText(textNode(root.get('title', true), source, fail));
  const collapsed = root.get('collapsed') ?? false;
  if (typeof collapsed !== 'boolean') fail(t('build_collapsed_boolean'), root.get('collapsed', true)?.range?.[0] ?? 0);
  const leaves = [];
  function groups(node, parents = []) {
    if (!isSeq(node) || !node.items.length) fail(t('build_groups_list'), node?.range?.[0] ?? 0);
    if (parents.length >= 4) fail(t('build_group_depth'), node.range[0]);
    for (const group of node.items) {
      mapFields(group, ['title', 'items', 'subgroups'], fail);
      const heading = { text: siteText(textNode(group.get('title', true), source, fail)) };
      const path = [...parents, heading];
      if (group.has('items') === group.has('subgroups')) fail(t('build_group_contents'), group.range[0]);
      if (group.has('subgroups')) groups(group.get('subgroups', true), path);
      else {
        const items = group.get('items', true);
        if (!isSeq(items) || !items.items.length) fail(t('build_items_list'), items?.range?.[0] ?? group.range[0]);
        leaves.push({ path, items: items.items.map(item => siteText(textNode(item, source, fail))) });
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
  const cache = new Map(), kind = 'navboxes';
  async function load(name, caller) {
    const file = `${root}content/${kind}/${name}.yaml`;
    if (!cache.has(file)) {
      try { cache.set(file, await readFile(file, 'utf8')); }
      catch (error) {
        if (error.code === 'ENOENT') throw new Error(t('build_component_missing', { Caller: caller, Kind: kind, Name: name }));
        throw error;
      }
    }
    return { file, source: cache.get(file) };
  }
  return async function prepare(metadata, caller) {
    const callerFail = message => { throw new Error(`${caller}:1: ${message}`); };
    const result = { navboxes: [] };
    const declarations = metadata[kind] ?? [];
    if (!Array.isArray(declarations)) callerFail(t('build_component_list', { Kind: kind }));
    for (const declaration of declarations) {
      const call = typeof declaration === 'string' ? { name: declaration } : declaration;
      if (!call || typeof call !== 'object' || Array.isArray(call)) callerFail(t('build_component_entry', { Kind: kind }));
      const name = componentName(call.name, callerFail);
      const { file, source } = await load(name, caller);
      const fail = (message, offset = 0) => { throw new Error(t('build_component_context', { Caller: caller, Kind: kind, Name: name, File: file, Line: source.slice(0, offset).split('\n').length, Value: message })); };
      if (Object.keys(call).some(key => key !== 'name')) callerFail(t('build_navbox_parameters', { Name: name }));
      result.navboxes.push({ name, ...parseNavbox(source, fail) });
    }
    return result;
  };
}
