import { dialectSupport, yamlLanguage } from 'bananamark/grammar';

/**
 * What the site adds to bananamark's grammar, without the rest of bananamark (the editor's scripts load this): its
 * data blocks (```terms, terms.mjs) highlighted as YAML, in the editor (dialectLanguages, bananamark-codemirror's
 * codeLanguages) and in code blocks (syntax.mjs's dialect), also inside the Markdown of code blocks; siteLanguage, the
 * grammar with them (for tests).
 */
export const dialectLanguages = { terms: yamlLanguage };
export const siteLanguage = dialectSupport({ codeLanguages: dialectLanguages });
