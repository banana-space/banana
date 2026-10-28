// HTML-style tags, for what Markdown cannot say: bananamark has <lang>, and <align> and <spoiler> ready to add; a caller adds its
// own, or changes or removes these (the tags option). The syntax layer turns each tag into a node (nodes.mjs: tag,
// with its name and parameters) after checking its parameters; the renderer writes its HTML with the tag's render.
//
// Parameter values are plain text: no quotes, backslashes, braces, line breaks or control characters, and no
// "<" or ">" except in a parameter that allows readings (reading: true), where <かな> marks a reading. The renderer
// escapes what it prints as well. A parameter of the page's text (markdown: true, such as <spoiler>'s title) may hold
// backslashes, braces and backticks: it is converted as the page's text is (formulas, wiki links, references), and
// render gets Markdown to give to fragment.
import { problem, sourceError } from '../messages.mjs';
import { languageTag, readTag } from './scan.mjs';
import { alignTagRule, langTagRule, spoilerTagRule } from './tag-rules.mjs';

export { readTag };

const maxValue = 300;

/**
 * A tag: paired: written <name>…</name> (otherwise alone, <name …> or <name … />); positional: the one bare
 * parameter it takes ({ language: true } a language code, { values } one of these, or { check(value), error?(name,
 * value) }); named: the parameters written key="value" ({ key: { required?, check?(value), language? (a language
 * code), reading? (may hold readings), markdown? (the page's text, see above) } }), requireOneOf: of which at least
 * one; with neither it takes no parameters. attachToPrevious: it follows what it annotates, without the spaces written
 * between. render(context): its HTML, context being { name, parameters: { positional, named }, inner (a paired tag's
 * Markdown between its tags), page, fragment(markdown, { block }) (Markdown of the page as HTML: inline, or block),
 * message(key, values) (a message in the page's language, the caller's messages first), escape(text), fail(message)
 * (an error: text, or problem(key, values), an error message in the caller's locale with its code) }.
 */
export const defaultTags = {
  lang: {
    ...langTagRule,
    render: ({ parameters, inner, fragment, escape }) => {
      const lang = parameters.positional[0], text = inner.trim();
      if (/\n[ \t]*\n/.test(text)) return `<div lang="${escape(lang)}">${fragment(text, { block: true })}</div>`;
      return `<span lang="${escape(lang)}">${fragment(text)}</span>`;
    },
  },
};

/** <align right|center>…</align>: a block aligned (div.bm-align-right), ready for a caller's tags. */
export const alignTag = {
  ...alignTagRule,
  render: ({ name, parameters, inner, fragment, fail, problem }) => {
    if (!inner.trim()) fail(problem('tag_empty', { name }));
    return `<div class="bm-align-${parameters.positional[0]}">${fragment(inner.trim(), { block: true })}</div>\n`;
  },
};

/** <spoiler title="…">…</spoiler>: folded content (details), ready for a caller's tags. */
export const spoilerTag = {
  ...spoilerTagRule,
  render: ({ name, parameters, inner, fragment, fail, problem }) => {
    if (!inner.trim()) fail(problem('tag_empty', { name }));
    const title = parameters.named.title;
    return `<details>\n  <summary>${title ? fragment(title) : ''}</summary>\n  <div>${fragment(inner.trim(), { block: true })}</div>\n</details>\n`;
  },
};

const registries = new WeakMap(), resolved = new WeakSet([defaultTags]);
/**
 * The tags a page may use: bananamark's with the caller's (name → a tag as above, or false to remove one of
 * bananamark's), checked once; given such a set already, the set.
 */
export function createTagRegistry(given) {
  if (!given) return defaultTags;
  if (resolved.has(given)) return given;
  if (registries.has(given)) return registries.get(given);
  const registry = { ...defaultTags };
  for (const [name, tag] of Object.entries(given)) {
    if (tag === false) { delete registry[name]; continue; }
    const named = tag?.named === undefined || (typeof tag.named === 'object' && Object.values(tag.named).every(rule => rule && typeof rule === 'object'));
    if (!/^[a-z][a-z0-9-]*$/.test(name) || typeof tag?.render !== 'function' || !named || (tag.positional !== undefined && !(typeof tag.positional?.check === 'function' || tag.positional?.language || Array.isArray(tag.positional?.values)))) {
      throw sourceError('', problem('tag_config', { name }));
    }
    registry[name] = tag;
  }
  registries.set(given, registry);
  resolved.add(registry);
  return registry;
}

const allowed = registry => Object.keys(registry).map(name => `<${name}>`);

/**
 * Whether a "<" at start is a tag that readTag does not read, its lines joined (a value continued on the next
 * line, a quote's continuation line; Markdown reads those as HTML too): an error as well.
 */
export function looksLikeTag(text, start) {
  return Boolean(readTag(text.slice(start, start + 1000).replace(/\n(?![ \t]*\n)/g, ' '), 0));
}

/** The message for such a tag: one of the page's tags is written wrongly, another is not for pages. */
export function brokenTagMessage(text, start, registry = defaultTags) {
  const name = text.slice(start).match(/^<\/?([A-Za-z][A-Za-z0-9-]*)/)[1];
  return Object.hasOwn(registry, name) ? problem('tag_layout', { name }) : problem('tag_unknown', { name, allowed: allowed(registry) });
}

/** A parameter value's problem, or undefined. */
function valueProblem(value, { reading = false, markdown = false } = {}) {
  // The page's text (markdown) may hold formulas' backslashes and braces, and code.
  if (value.length > maxValue || /[\u0000-\u001f\u007f"]/.test(value) || (!markdown && /[\\`{}]/.test(value))) return true;
  // Readings: <かな> after a character or a [group]; nothing that reads as a tag (letters, "/", "=").
  const rest = reading ? value.replace(/<[^<>A-Za-z/=\s]+>/g, '') : value;
  return /[<>]/.test(rest);
}

/** The named parameters of tag name (in registry) that hold the page's text (markdown: true). */
export function markdownParameters(name, registry = defaultTags) {
  const named = Object.hasOwn(registry, name) ? registry[name].named : undefined;
  return named ? Object.keys(named).filter(key => named[key].markdown) : [];
}

const tagValue = (name, { closing = false, positional = [], named = {} } = {}) =>
  ({ type: 'tag', name, closing, parameters: { positional, named, isNamed: Object.keys(named).length > 0 } });

/**
 * The node a tag stands for, { node, attached } (nodes.mjs: { type: 'tag', name, closing, parameters }), or
 * { error } (a message) when it is not one of the page's tags or its parameters are wrong.
 */
export function tagNode(tag, registry = defaultTags) {
  const { name, closing, selfClosing, attributes } = tag;
  const spec = Object.hasOwn(registry, name) ? registry[name] : undefined;
  if (!spec) return { error: problem('tag_unknown', { name, allowed: allowed(registry) }) };
  if (closing) {
    if (!spec.paired) return { error: problem('tag_void', { name }) };
    if (attributes.length || selfClosing) return { error: problem('tag_closing_parameters', { name }) };
    return { node: tagValue(name, { closing: true }) };
  }
  if (selfClosing && spec.paired) return { error: problem('tag_self_closing', { name }) };
  if (spec.positional) {
    const { language, values } = spec.positional;
    const check = spec.positional.check ?? (language ? value => languageTag.test(value) : value => values.includes(value));
    const error = value => spec.positional.error?.(name, value)
      ?? (language ? problem('tag_language', { name, value })
        : values ? problem('tag_values', { name, values: values.join(problem('tag_values_or').toString()), first: values[0] })
        : problem('tag_positional', { name, value }));
    if (attributes.length !== 1 || attributes[0].value !== undefined) return { error: error(attributes.map(({ key, value }) => value === undefined ? key : `${key}=…`).join(' ')) };
    const [{ key: value }] = attributes;
    if (!check(value)) return { error: error(value) };
    return { node: tagValue(name, { positional: [value] }), attached: spec.attachToPrevious };
  }
  if (!spec.named) {
    if (attributes.length) return { error: problem('tag_no_parameters', { name }) };
    return { node: tagValue(name), attached: spec.attachToPrevious };
  }
  const keys = Object.keys(spec.named), seen = new Set(), named = {};
  for (const { key, value } of attributes) {
    if (!Object.hasOwn(spec.named, key)) return { error: problem('tag_parameter_unknown', { name, key, allowed: keys }) };
    if (seen.has(key)) return { error: problem('tag_parameter_duplicate', { name, key }) };
    if (value === undefined) return { error: problem('tag_parameter_value_missing', { name, key }) };
    seen.add(key);
    const rule = spec.named[key];
    if (valueProblem(value, rule)) return { error: problem(rule.markdown ? 'tag_parameter_value_markdown' : 'tag_parameter_value', { name, key }) };
    if (rule.language && !languageTag.test(value)) return { error: problem('tag_language', { name, value }) };
    if (rule.check && !rule.check(value)) return { error: problem('tag_parameter_invalid', { name, key, value }) };
    named[key] = value;
  }
  for (const key of keys) if (spec.named[key].required && !seen.has(key)) return { error: problem('tag_parameter_required', { name, key }) };
  if (spec.requireOneOf && !spec.requireOneOf.some(key => seen.has(key))) return { error: problem('tag_parameter_some', { name, keys: spec.requireOneOf }) };
  return { node: tagValue(name, { named }), attached: spec.attachToPrevious };
}
