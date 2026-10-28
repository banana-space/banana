import { readFileSync } from 'node:fs';
import { parse } from 'yaml';
import { defaultEnvironments } from 'bananamark';

/**
 * The site's theorem-like environments (data/theorems.yaml), given to bananamark's transformDocument: those, and
 * none of bananamark's others (its own are over bananamark's defaults).
 */
export const environments = {
  ...Object.fromEntries(Object.keys(defaultEnvironments).map(kind => [kind, false])),
  ...parse(readFileSync(new URL('../../data/theorems.yaml', import.meta.url), 'utf8')),
};
