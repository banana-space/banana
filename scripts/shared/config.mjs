import { readFileSync } from 'node:fs';
import { parse } from 'yaml';

/** The site's settings (data/site.yaml): { baseURL, title, description, language, repository }. */
export const config = parse(readFileSync(new URL('../../data/site.yaml', import.meta.url), 'utf8'));
