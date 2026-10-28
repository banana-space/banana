import { readFileSync } from 'node:fs';
import { parse } from 'yaml';

/** The site's settings (site.yaml): { baseURL, title, description, language, repository }. */
export const config = parse(readFileSync(new URL('../../site.yaml', import.meta.url), 'utf8'));
