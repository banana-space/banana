/**
 * The rules of bananamark's HTML-style tags, as data (tags.mjs adds how each renders): what an editor needs for its
 * completion without the rest of bananamark. positional: the bare parameter, a language code (language) or one of
 * some values (values); named: the parameters written key="value". <lang> is always there; <align> and <spoiler>
 * are ready for a caller to add.
 */
export const langTagRule = { paired: true, positional: { language: true } };
export const alignTagRule = { paired: true, positional: { values: ['right', 'center'] } };
export const spoilerTagRule = { paired: true, named: { title: { markdown: true } } };

export const defaultTagRules = { lang: langTagRule };
