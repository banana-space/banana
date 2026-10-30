import { readFileSync } from 'node:fs';
import { parse } from 'yaml';

// The site's own text (i18n/zh-cn.yaml): the interface and the site's messages.
// bananamark's messages (errors in the dialect, reference text) are its own (packages/bananamark/src/messages/).
const table = parse(readFileSync(new URL('../../i18n/zh-cn.yaml', import.meta.url), 'utf8'));

/**
 * A message, with {Name} in it filled in from values; {name} in small letters is left for a browser script to fill
 * in. Not escaped: a template escapes it, unless it is HTML (raw). A key or a value the table wants and does not
 * have is an error.
 */
export function t(key, values = {}) {
  const template = table[key];
  if (typeof template !== 'string') throw new Error(`Missing translation: ${key}`);
  return template.replace(/\{([A-Z][A-Za-z0-9]*)\}/g, (_match, name) => {
    if (!Object.hasOwn(values, name)) throw new Error(`Missing translation value: ${key}.${name}`);
    return String(values[name] ?? '');
  });
}
