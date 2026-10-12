import { readFileSync } from 'node:fs';
import { parse } from 'yaml';

// The same translation table is consumed by Hugo. Build messages use only simple {{ .Name }}
// placeholders, and {{ with .Name }}…{{ . }}…{{ end }} (the reference names: "定理{{ with .Number }} {{ . }}{{ end }}");
// Hugo owns its richer UI templates.
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
