/** Number vectors are structural; zero removal is a display operation only. */
const mapping = value => value && typeof value === 'object' && !Array.isArray(value);
export function numbering(value = {}, base = {}, file = '<编号>') {
  if (!mapping(value)) throw new Error(`${file}: numbering 必须是字段映射`);
  const result = structuredClone(base);
  for (const [key, setting] of Object.entries(value)) {
    if (!['pages', 'headings', 'theorems', 'equations'].includes(key)) throw new Error(`${file}: 未知编号设置 ${key}`);
    if (key === 'pages') {
      if (typeof setting !== 'boolean') throw new Error(`${file}: pages 必须是布尔值`);
      result.pages = setting;
      continue;
    }
    if (setting === false) { result[key] = false; continue; }
    if (!mapping(setting)) throw new Error(`${file}: ${key} 必须是字段映射或 false`);
    const allowed = key === 'headings' ? ['depth', 'prefix', 'removeZeroes'] : ['depth', 'absoluteDepth', 'prefix', 'removeZeroes'];
    for (const field of Object.keys(setting)) if (!allowed.includes(field)) throw new Error(`${file}: 未知 ${key} 设置 ${field}`);
    if (setting.depth !== undefined && setting.absoluteDepth !== undefined) throw new Error(`${file}: depth 与 absoluteDepth 不能同时设置`);
    const config = { ...(mapping(result[key]) ? result[key] : { depth: 1, prefix: true, removeZeroes: true }), ...setting };
    if (setting.absoluteDepth !== undefined) delete config.depth;
    if (setting.depth !== undefined) delete config.absoluteDepth;
    for (const field of ['depth', 'absoluteDepth']) if (config[field] !== undefined && (!Number.isInteger(config[field]) || config[field] < 0 || config[field] > 32)) throw new Error(`${file}: ${field} 必须是 0 至 32 的整数`);
    if (key === 'headings' && config.depth > 5) throw new Error(`${file}: 标题 depth 不能超过 5`);
    if (typeof config.prefix !== 'boolean' && (typeof config.prefix !== 'string' || !validNumber(config.prefix))) throw new Error(`${file}: prefix 必须是布尔值或编号文字`);
    if (typeof config.removeZeroes !== 'boolean') throw new Error(`${file}: removeZeroes 必须是布尔值`);
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
  if (!['string', 'number'].includes(typeof value) || !validNumber(value)) throw new Error(`${file}: 自定义编号应为正整数或单个字母/文字分量`);
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
      if (unnumbered && custom !== undefined) throw new Error(`${file}: 不编号星号与自定义编号不能同时使用`);
      if (!config.headings || depth < 1 || depth > config.headings.depth || unnumbered) {
        if (custom !== undefined) throw new Error(`${file}: 自定义编号必须位于启用编号的标题层级内`);
        return '';
      }
      const next = nextNumber(custom, cursors[depth - 1], file);
      local[depth - 1] = next.part;
      cursors[depth - 1] = next.cursor;
      for (let i = depth; i < local.length; i++) { local[i] = 0; cursors[i] = 0; }
      if (depth === 1) childNumbers.add(next.part);
      const vector = [...page.vector, ...local.slice(0, depth)];
      const structural = vector.join('.');
      if (used.has(structural)) throw new Error(`${file}: 标题编号重复：${structural}`);
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
