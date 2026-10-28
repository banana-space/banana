import { readFileSync } from 'node:fs';
import { parse } from 'yaml';

// The site's own text (i18n/zh-cn.yaml), which Hugo's templates read too: the interface and the site's messages.
// bananamark's messages (errors in the dialect, reference text) are its own (packages/bananamark/src/messages/).
// Build messages use only simple {{ .Name }} placeholders, and {{ with .Name }}…{{ . }}…{{ end }}; Hugo owns its
// richer UI templates.
const table = parse(readFileSync(new URL('../../i18n/zh-cn.yaml', import.meta.url), 'utf8'));

export function t(key, values = {}) {
  const template = table[key]?.other;
  if (typeof template !== 'string') throw new Error(`Missing translation: ${key}`);
  return template.replace(/{{\s*with\s+\.([A-Za-z][A-Za-z0-9]*)\s*}}([\s\S]*?){{\s*end\s*}}/g, (_match, name, inner) => {
    if (!Object.hasOwn(values, name)) throw new Error(`Missing translation value: ${key}.${name}`);
    return values[name] ? inner.replace(/{{\s*\.\s*}}/g, () => String(values[name])) : '';
  }).replace(/{{\s*\.([A-Za-z][A-Za-z0-9]*)\s*}}/g, (_match, name) => {
    if (!Object.hasOwn(values, name)) throw new Error(`Missing translation value: ${key}.${name}`);
    return String(values[name]);
  });
}

/**
 * A message as Hugo's i18n gave it to the templates: data is a map ({{ .Name }}), or a number or text ({{ . }},
 * and {{ .Count }} for a number); '' for a key the table lacks. Not escaped: a template escapes it, unless it is HTML (safeHTML).
 */
export function i18n(key, data) {
  const template = table[key]?.other;
  // As Hugo: a key the table lacks gives nothing.
  if (typeof template !== 'string') return '';
  const value = name => {
    if (name === undefined) return data;
    if (data !== null && typeof data === 'object' && Object.hasOwn(data, name)) return data[name];
    if (name === 'Count' && typeof data === 'number') return data;
    throw new Error(`Missing translation value: ${key}.${name}`);
  };
  return template.replace(/{{\s*\.([A-Za-z][A-Za-z0-9]*)?\s*}}/g, (_match, name) => String(value(name) ?? ''));
}
