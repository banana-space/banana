// The tags authors write for what Markdown cannot say: <see>, <lang>, <align>, <person> and <spoiler>. The
// preprocessing turns each into the Hugo shortcode of the same name (layouts/shortcodes/), after checking its
// parameters; pages never contain shortcodes of their own. Hugo runs every shortcode it finds, also in code
// blocks and in the shortcodes the preprocessing writes itself, so "{{<" and "{{%" may not appear anywhere in
// a page's source (front matter included): only the preprocessing writes them.
//
// A shortcode whose name starts with "_" (_theorem-start, _item-target and so on) is internal: the
// preprocessing writes it, and no tag reaches it (a tag's name starts with a letter). The others are the
// authors', each with its tag here; the build checks that the two lists agree (authorTagNames).
//
// Parameter values are plain text: no quotes, backslashes, braces, line breaks or control characters, and no
// "<" or ">" except in a person's original name, where <かな> marks a reading (as in term translations). The
// templates escape what they print as well.
import { t } from '../shared/i18n.mjs';
import { readTag } from '../shared/scan.mjs';

export { readTag };

const languageTag = /^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/;
const maxValue = 300;

/**
 * The authors' tags. paired: written <name>…</name> (otherwise alone, <name …> or <name … />). positional: the
 * one bare parameter it takes ({ check(value), error(name, value) }); named: the parameters written key="value"
 * ({ key: { required?, check?(value) } }), someOf: of which at least one. A tag with neither takes no parameters.
 * attached: it follows what it annotates, without the spaces written between.
 */
export const authorTags = {
  see: { paired: true },
  lang: { paired: true, positional: { check: value => languageTag.test(value), error: (name, value) => t('build_tag_language', { Name: name, Value: value }) } },
  align: { paired: true, positional: { check: value => value === 'right' || value === 'center', error: name => t('build_tag_align', { Name: name }) } },
  // After a name: **Name** <person lang="fr" years="1900--1980" />. At least one of what it shows.
  person: {
    paired: false,
    attached: true, // To what comes before: the spaces between are dropped.
    named: {
      original: { reading: true }, lang: { check: value => languageTag.test(value), language: true },
      translit: {}, ipa: {}, years: {},
    },
    someOf: ['original', 'translit', 'ipa', 'years'],
  },
  spoiler: { paired: true, named: { title: {} } },
};
export const authorTagNames = Object.keys(authorTags);
const allowed = () => authorTagNames.map(name => `<${name}>`).join('、');

/** Whether a "<" at start is a tag spread over lines (Markdown reads those as HTML too): an error as well. */
export function looksLikeTag(text, start) {
  return Boolean(readTag(text.slice(start, start + 1000).replace(/\n(?![ \t]*\n)/g, ' '), 0));
}

/** A parameter value's problem, or undefined. */
function valueProblem(value, reading) {
  if (value.length > maxValue || /[\u0000-\u001f\u007f"\\`{}]/.test(value)) return true;
  // Readings: <かな> after a character or a [group]; nothing that reads as a tag (letters, "/", "=").
  const rest = reading ? value.replace(/<[^<>A-Za-z/=\s]+>/g, '') : value;
  return /[<>]/.test(rest);
}

/**
 * The shortcode a tag stands for ({{< name … >}}, {{< /name >}}), or { error } (a message) when it is not an
 * author's tag or its parameters are wrong.
 */
export function tagShortcode(tag) {
  const { name, closing, selfClosing, attributes } = tag;
  const spec = Object.hasOwn(authorTags, name) ? authorTags[name] : undefined;
  if (!spec) return { error: t('build_tag_unknown', { Name: name, Allowed: allowed() }) };
  if (closing) {
    if (!spec.paired) return { error: t('build_tag_void', { Name: name }) };
    if (attributes.length || selfClosing) return { error: t('build_tag_closing_parameters', { Name: name }) };
    return { output: `{{< /${name} >}}` };
  }
  if (selfClosing && spec.paired) return { error: t('build_tag_self_closing', { Name: name }) };
  if (spec.positional) {
    if (attributes.length !== 1 || attributes[0].value !== undefined) return { error: spec.positional.error(name, attributes.map(({ key, value }) => value === undefined ? key : `${key}=…`).join(' ')) };
    const [{ key: value }] = attributes;
    if (!spec.positional.check(value)) return { error: spec.positional.error(name, value) };
    return { output: `{{< ${name} ${value} >}}` };
  }
  if (!spec.named) {
    if (attributes.length) return { error: t('build_tag_no_parameters', { Name: name }) };
    return { output: `{{< ${name} >}}` };
  }
  const keys = Object.keys(spec.named), seen = new Set(), parts = [];
  for (const { key, value } of attributes) {
    if (!Object.hasOwn(spec.named, key)) return { error: t('build_tag_parameter_unknown', { Name: name, Key: key, Allowed: keys.join('、') }) };
    if (seen.has(key)) return { error: t('build_tag_parameter_duplicate', { Name: name, Key: key }) };
    if (value === undefined) return { error: t('build_tag_parameter_value_missing', { Name: name, Key: key }) };
    seen.add(key);
    const rule = spec.named[key];
    if (valueProblem(value, rule.reading)) return { error: t('build_tag_parameter_value', { Name: name, Key: key }) };
    if (rule.check && !rule.check(value)) return { error: rule.language ? t('build_tag_language', { Name: name, Value: value }) : t('build_tag_parameter_value', { Name: name, Key: key }) };
    parts.push(`${key}="${value}"`);
  }
  for (const key of keys) if (spec.named[key].required && !seen.has(key)) return { error: t('build_tag_parameter_required', { Name: name, Key: key }) };
  if (spec.someOf && !spec.someOf.some(key => seen.has(key))) return { error: t('build_tag_parameter_some', { Name: name, Keys: spec.someOf.join('、') }) };
  return { output: `{{< ${[name, ...parts].join(' ')} >}}`, attached: spec.attached };
}

/**
 * The last check on a generated page, before Hugo sees it: no shortcode in any string of its front matter
 * (templates pass some to RenderString and markdownify, which run shortcodes too; YAML escapes such as \x7B
 * could spell one that the source does not show), and in its body only shortcodes of ours (templates), written
 * {{< … >}}. Returns a problem's message, or undefined.
 */
export function generatedShortcodeProblem(metadata, body, templates) {
  const strings = [];
  const walk = value => {
    if (typeof value === 'string') strings.push(value);
    else if (Array.isArray(value)) value.forEach(walk);
    else if (value && typeof value === 'object') for (const [key, item] of Object.entries(value)) { strings.push(key); walk(item); }
  };
  walk(metadata);
  const inMetadata = strings.find(value => shortcodeOffset(value) >= 0);
  if (inMetadata !== undefined) return t('build_shortcode_syntax', { Text: shortcodeText(inMetadata, shortcodeOffset(inMetadata)) });
  for (const match of body.matchAll(/\{\{([<%])\s*\/?\s*([^\s>%}]*)/g)) {
    if (match[1] !== '<' || !templates.has(match[2])) return t('build_shortcode_syntax', { Text: match[0] });
  }
}

/** How a message quotes the shortcode at offset: up to its "}}", on its line, at most forty characters. */
export function shortcodeText(text, offset) {
  const line = text.slice(offset, offset + 40).split('\n')[0], close = line.indexOf('}}');
  return close < 0 ? line : line.slice(0, close + 2);
}

/** Where text first holds a shortcode's opening ("{{<" or "{{%"): its offset, or -1. Only the preprocessing writes them. */
export function shortcodeOffset(text) {
  return text.search(/\{\{[<%]/);
}
