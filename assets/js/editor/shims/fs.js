// node:fs for the browser check (assets/js/editor/check.js): the data files the preprocessing reads
// (the language table, theorem environments) are embedded at build time through js.Build's params.
import * as params from '@params';

export function readFileSync(path) {
  const name = String(path);
  for (const [file, text] of Object.entries(params.files)) if (name.endsWith(`/${file}`)) return text;
  throw new Error(`${name} is not available in the browser`);
}
