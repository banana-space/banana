import zhCN from './messages/zh-cn.mjs';
import en from './messages/en.mjs';

/**
 * The words the editor shows beside completion's options, by locale (zh-cn, en). Keys: completion_<block> for a
 * fenced block (math, a data block's name…), completion_tag_<name> for a tag, completion_parameter_<key> for a
 * tag's named parameter, completion_<tag>_<value> for a bare parameter's value. A caller's messages (by locale,
 * { locale: { key: text } }, as bananamark's option) come first: its own tags' and data blocks' words, or changes to
 * these; a locale without the key, the caller's or these, falls back to English. A key nobody has shows no words.
 */
export const messages = { 'zh-cn': zhCN, en };

export function message(key, { locale = 'en', messages: given = {} } = {}) {
  for (const table of [given[locale], messages[locale], given.en, messages.en]) if (table && Object.hasOwn(table, key)) return table[key];
  return undefined;
}
