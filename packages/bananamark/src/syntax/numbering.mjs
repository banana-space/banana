import { problem, sourceError } from '../messages.mjs';

/** Number vectors are structural; zero removal is a display operation only. */
const mapping = value => value && typeof value === 'object' && !Array.isArray(value);
/** An error in a numbering setting, or a page's numbering, in file. */
const invalid = (file, key, values) => sourceError(`${file}: `, problem(key, values), { file });

export function numbering(value = {}, base = {}, file = String(problem('numbering_name'))) {
  if (!mapping(value)) throw invalid(file, 'numbering_mapping');
  const result = structuredClone(base);
  for (const [key, setting] of Object.entries(value)) {
    if (!['pages', 'headings', 'theorems', 'equations'].includes(key)) throw invalid(file, 'numbering_unknown', { key });
    if (key === 'pages') {
      if (typeof setting !== 'boolean') throw invalid(file, 'numbering_pages');
      result.pages = setting;
      continue;
    }
    if (setting === false) { result[key] = false; continue; }
    if (!mapping(setting)) throw invalid(file, 'numbering_setting', { key });
    const allowed = key === 'headings' ? ['depth', 'prefix', 'removeZeroes'] : ['depth', 'absoluteDepth', 'prefix', 'removeZeroes'];
    for (const field of Object.keys(setting)) if (!allowed.includes(field)) throw invalid(file, 'numbering_unknown_field', { key, field });
    if (setting.depth !== undefined && setting.absoluteDepth !== undefined) throw invalid(file, 'numbering_depth_both');
    const config = { ...(mapping(result[key]) ? result[key] : { depth: 1, prefix: true, removeZeroes: true }), ...setting };
    if (setting.absoluteDepth !== undefined) delete config.depth;
    if (setting.depth !== undefined) delete config.absoluteDepth;
    for (const field of ['depth', 'absoluteDepth']) if (config[field] !== undefined && (!Number.isInteger(config[field]) || config[field] < 0 || config[field] > 32)) throw invalid(file, 'numbering_depth_range', { field });
    if (key === 'headings' && config.depth > 5) throw invalid(file, 'numbering_heading_depth');
    if (typeof config.prefix !== 'boolean' && (typeof config.prefix !== 'string' || !validNumber(config.prefix))) throw invalid(file, 'numbering_prefix');
    if (typeof config.removeZeroes !== 'boolean') throw invalid(file, 'numbering_remove_zeroes');
    result[key] = config;
  }
  return result;
}
export const defaultNumbering = numbering({ pages: true, headings: {}, theorems: {}, equations: {} });
export function validNumber(value) {
  const text = String(value);
  return (/^[1-9]\d*$/.test(text) && Number.isSafeInteger(Number(text))) || /^[\p{L}][\p{L}\p{N}_-]*$/u.test(text);
}
export function nextNumber(value, cursor, file) {
  if (value === false) return { part: null, cursor };
  if (value === undefined || value === true) return { part: String(cursor + 1), cursor: cursor + 1 };
  if (!['string', 'number'].includes(typeof value) || !validNumber(value)) throw invalid(file, 'number_custom_invalid');
  return { part: String(value), cursor: /^\d+$/.test(String(value)) ? Number(value) : cursor };
}
export function formatNumber(vector, config = {}) {
  return vector.filter(part => !config.removeZeroes || String(part) !== '0').join('.');
}
export function pageNumbering(page, config, counters = new Map()) {
  const local = [0, 0, 0, 0, 0], cursors = [0, 0, 0, 0, 0], used = new Set(), childNumbers = new Set();
  const prefix = setting => setting.prefix === false ? [] : typeof setting.prefix === 'string' ? [setting.prefix] : page.vector;
  return {
    local, childNumbers,
    heading(level, unnumbered, custom, file) {
      const depth = level - 1;
      if (unnumbered && custom !== undefined) throw invalid(file, 'number_custom_unnumbered');
      if (!config.headings || depth < 1 || depth > config.headings.depth || unnumbered) {
        if (custom !== undefined) throw invalid(file, 'number_custom_level');
        return '';
      }
      const next = nextNumber(custom, cursors[depth - 1], file);
      local[depth - 1] = next.part;
      cursors[depth - 1] = next.cursor;
      for (let i = depth; i < local.length; i++) { local[i] = 0; cursors[i] = 0; }
      if (depth === 1) childNumbers.add(next.part);
      const vector = [...page.vector, ...local.slice(0, depth)];
      const structural = vector.join('.');
      if (used.has(structural)) throw invalid(file, 'number_heading_duplicate', { number: structural });
      used.add(structural);
      return formatNumber([...prefix(config.headings), ...local.slice(0, depth)], config.headings);
    },
    object(kind) {
      const setting = config[kind];
      if (!setting) return '';
      const absolute = setting.absoluteDepth !== undefined;
      const depth = setting.absoluteDepth ?? setting.depth;
      const selectedLocal = Array.from({ length: depth }, (_, index) => local[index] ?? 0);
      const structural = absolute ? [...page.vector, ...local] : [...page.vector, ...selectedLocal];
      while (structural.length < depth) structural.push(0);
      const scope = absolute ? structural.slice(0, depth) : structural;
      const key = `${kind}:${absolute ? '' : `${page.key}:`}${scope.join('.')}`;
      const ordinal = (counters.get(key) ?? 0) + 1;
      counters.set(key, ordinal);
      let displayed = absolute ? scope : [...prefix(setting), ...selectedLocal];
      if (absolute && setting.prefix === false) displayed = [];
      else if (absolute && typeof setting.prefix === 'string') displayed = [setting.prefix, ...scope];
      return formatNumber([...displayed, ordinal], setting);
    },
    get childCursor() { return cursors[0]; },
  };
}
