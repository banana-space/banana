/**
 * The dialect's rules as data (bananamark/rules), without the rest of bananamark: the theorem-like environments it
 * has by default and environmentName(config, locale) (an environment's name in a locale: its one name, or its name in
 * that locale, or in English), and the rules of its HTML-style tags (what they take, not how they render), for an
 * editor's completion. bananamark's main entry has the environments and the rules too.
 */
export { default as defaultEnvironments } from './syntax/default-environments.mjs';
export { environmentName } from './syntax/environments.mjs';
export { alignTagRule, defaultTagRules, langTagRule, spoilerTagRule } from './syntax/tag-rules.mjs';
