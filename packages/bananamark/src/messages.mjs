import zhCN from './messages/zh-cn.mjs';
import en from './messages/en.mjs';

/**
 * bananamark's messages, in two kinds: errors (problem(key, values)), in the locale the caller asks for, and the text
 * the page itself holds (reference text such as “Section 1”, “See also:”, the words of bibliographies), in the page's
 * language (lang: zh… in Chinese, en… in English, any other in English unless the caller gives messages for it).
 * t(key, values) everywhere in the package; the entry points (transformDocument, transformFragment, createRenderer,
 * createProcessor, createBook) take the locale, lang and messages options and run in them (withLocale); anything else
 * runs in the default, en for both.
 *
 * messages (the option): more tables, or changes to these, by locale: { de: { reference_section: 'Abschnitt {number}', … },
 * en: { proof_heading: … } }. A page whose lang is de (or de-…) then takes de's. A key is looked for in the caller's
 * table for the locale, then bananamark's, then in English (the caller's, then bananamark's). The same locales serve
 * errors (locale: 'de').
 *
 * A message may hold {name}: a value (a name in lower camel case, in braces without spaces); an array, a list, is
 * joined as the locale joins one (list_separator: ", ", "、").
 */

export const messages = { 'zh-cn': zhCN, en };
export const locales = Object.keys(messages);
export const defaultLocale = 'en';

// The caller's tables (the messages option) of the entry point running now.
let errors = defaultLocale, content = defaultLocale, custom;

const known = (locale, given = custom) => Object.hasOwn(messages, locale) || Boolean(given && Object.hasOwn(given, locale));

/**
 * The messages a page in language lang holds: a locale with tables (bananamark's or the caller's, given) named as
 * lang, or as its first part (de-AT: de; zh-TW: zh-cn, the Chinese tables); otherwise English.
 */
export function contentLocale(lang, given = custom) {
  const name = String(lang ?? '').toLowerCase();
  if (name && known(name, given)) return name;
  const primary = name.split('-')[0];
  if (primary === 'zh') return 'zh-cn';
  if (primary && known(primary, given)) return primary;
  return defaultLocale;
}

/**
 * Runs action with errors in locale (default en) and the page's text in the messages of lang (default en),
 * with the caller's tables given (see above; by default those of the call it is in); calls nest, and what was before
 * comes back after.
 */
export function withLocale(locale = defaultLocale, lang = defaultLocale, action, given = custom) {
  if (!known(locale, given)) throw new Error(`bananamark: unknown locale "${locale}" (known: ${[...new Set([...locales, ...Object.keys(given ?? {})])].join(', ')})`);
  const previous = [errors, content, custom];
  [errors, content, custom] = [locale, contentLocale(lang, given), given];
  try { return action(); } finally { [errors, content, custom] = previous; }
}

/** The locale of the page's text now: environment names follow it (English for a locale they do not name). */
export const currentContentLocale = () => content;

/** The locale's message, the caller's or bananamark's; otherwise English, the caller's or bananamark's. */
function template(locale, key) {
  const found = [custom?.[locale], messages[locale], custom?.en, messages.en].find(table => table && typeof table[key] === 'string')?.[key];
  if (typeof found !== 'string') throw new Error(`Missing message: ${key}`);
  return found;
}

/** A message in locale: {name} its values, a list (an array) joined as the locale joins one (list_separator). */
function message(locale, key, values) {
  return template(locale, key).replace(/\{([a-z][A-Za-z0-9]*)\}/g, (_match, name) => {
    if (!Object.hasOwn(values, name)) throw new Error(`Missing message value: ${key}.${name}`);
    const value = values[name];
    return Array.isArray(value) ? value.join(template(locale, 'list_separator')) : String(value);
  });
}

/** A message of the page's text, in the page's language. */
export const t = (key, values = {}) => message(content, key, values);

/**
 * A message to report, put into words when it is: problem(key, values) given to an error (sourceError) gives it
 * error.code (the key) and error.params (the values); in text (`${problem}`) it is its words.
 */
export const problem = (key, values = {}) => ({ key, values, toString: () => message(errors, key, values) });

/**
 * An error in a page or in a setting. message: where (file:line: ) and reason, the message itself; file, line, column
 * (from 1): where, as far as known; code and params: the message's key and values (bananamark's errors; one a caller
 * reports as text has none); cause: the error a caller's function threw, when one did (see guarded).
 */
export class BananamarkError extends Error {
  constructor(message, { cause, ...fields } = {}) {
    super(message, cause === undefined ? undefined : { cause });
    this.name = 'BananamarkError';
    Object.assign(this, fields);
  }
}

/**
 * An error in a page: prefix (where: "page.md:12: ") and the message, a problem() or text; more: further fields
 * (file, line, column, cause).
 */
export function sourceError(prefix, message, more = {}) {
  const coded = typeof message === 'object' && message !== null && typeof message.key === 'string';
  const reason = String(message);
  return new BananamarkError(prefix + reason, { reason, ...(coded ? { code: message.key, params: message.values } : {}), ...more });
}

/**
 * Runs a caller's function (hook, a hook such as resolveWikiLink; a data block's read, a tag's render): what it throws,
 * other than a BananamarkError, is reported by fail as hook_failed, with the error as cause.
 */
export function guarded(hook, action, fail) {
  try { return action(); }
  catch (error) {
    if (error instanceof BananamarkError) throw error;
    try { fail(problem('hook_failed', { hook, message: error?.message ?? String(error) })); }
    catch (wrapped) {
      if (wrapped instanceof BananamarkError && wrapped.cause === undefined) Object.defineProperty(wrapped, 'cause', { value: error, configurable: true, writable: true });
      throw wrapped;
    }
    throw error;
  }
}

/** The language of the messages (language_names_locale), in lower case for lang attributes: zh-cn, en. */
export const messageLanguage = () => t('language_names_locale').toLowerCase();

const displayNames = new Map();
/**
 * A language's name in the language of the messages (俄语, Russian), or the code when it has none; a code that is
 * not a language tag throws (RangeError).
 */
export function languageName(code) {
  const locale = t('language_names_locale');
  if (!displayNames.has(locale)) displayNames.set(locale, new Intl.DisplayNames([locale], { type: 'language' }));
  return displayNames.get(locale).of(code) ?? code;
}
