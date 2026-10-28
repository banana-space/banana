// Completion in the dialect, kept to what one types most:
// - ":::" at the start of a line: an environment, opened and closed (::: theorem, a line for its text, :::),
//   with a shorthand for its title and label (":::th 标题 @label");
// - "```" at the start of a line: a math, tikz or bibliography block, or one of the caller's data blocks, opened
//   and closed;
// - "[[" and a character: an entry, by its title or an alias (the title as written, its formulas in TeX),
//   closed by "]]";
// - "@" or "{@": a label declared on this page (headings, environments, list items, numbered formulas, bibliography
//   entries' keys), and on a book page, the labels of the book's other pages (which it can reference too);
// - in a formula, "\name": a KaTeX command or environment (katex-commands.json);
// - "<" and a letter: an HTML-style tag (bananamark's and the caller's), opened and closed; "</" closes the tag
//   still open; inside a tag, its parameters, and a language (a parameter that takes a language code) or one of a
//   parameter's values (<align right>).
// The words shown beside the options are messages (messages/), which the caller may change or add to.
// What the page holds (its labels, whether its fences balance) is read from its lines as they are being typed: the
// dialect's layer stops at a page's first error, and a page being written has some.
import { snippetCompletion, startCompletion } from '@codemirror/autocomplete';
import { syntaxTree } from '@codemirror/language';
// Data only (bananamark's tag rules and environments), so that a bundle does not take the rest of bananamark.
import { defaultEnvironments, defaultTagRules, environmentName } from 'bananamark/rules';
import { closesFence, escaped, fenceMarker, labelledMarkerSource, mathReader, readTag } from 'bananamark/scan';
import katexCommands from './katex-commands.json' with { type: 'json' };
import { message } from './messages.mjs';

// A list item's line that declares a label: the label, and the start of the item's text.
const itemLabel = new RegExp(String.raw`^\s*(?:>\s*)*(?:(?:[-*+]|\d+[.)]|${labelledMarkerSource})\s+)+\{@([^}\s]+)\}\s*(.*)$`);

/**
 * How bananamark's tags are completed: snippet (the cursor at each ${}), then (the list opens again for what is
 * written next). A caller's tag may say the same in its completion field; otherwise its snippet follows from its
 * parameters.
 */
const builtinCompletion = {
  lang: { snippet: '<lang ${}>${}</lang>', then: true },
  align: { snippet: '<align ${}>\n${}\n</align>', then: true },
  spoiler: { snippet: '<spoiler title="${}">\n${}\n</spoiler>' },
};
const commonLanguages = ['en', 'fr', 'de', 'ru', 'ja', 'la', 'it', 'grc'];

/** A value, or what a function gives (perhaps a promise), at most once at a time; null when it fails. */
function loader(value) {
  if (typeof value !== 'function') return () => Promise.resolve(value);
  let loading;
  return () => loading ??= Promise.resolve().then(value).catch(() => { loading = undefined; return null; });
}

/**
 * The completion sources (bananamark() registers them; or give them to autocompletion({ override })). Options:
 * - dialect: bananamark's defineDialect: its environments, data blocks, tags, messages and switches, under the
 *   options below;
 * - tikz, wikiLinks, bibliography: whether ```tikz and ```bibliography blocks and [[links]] are offered (as the
 *   dialect's; default false);
 * and, each a value or a function giving it (perhaps a promise, asked for the first time it is needed):
 * - environments: as bananamark's (kind → { name, group, numbered }, or false), over bananamark's; names in the locale;
 * - dataBlocks: as bananamark's (only their names are used), or their names;
 * - tags: as bananamark's (their parameters, and how each is completed: completion { snippet, then, values });
 *   a bare parameter's values are positional.values, or completion.values;
 * - entries: [{ title, aliases }], the articles [[links]] may name;
 * - languages: { code: name }, offered where a tag takes a language;
 * - mathCommands: { commands: [[name, arguments, glyph?]], environments: [[name, arguments]] }; default KaTeX's
 *   (katex-commands.json);
 * - otherLabels(): on a book's page, the labels of its other pages ([{ name, text, page }], text how a reference shows
 *   it, page the page's name);
 * - locale (default en) and messages ({ locale: { key: text } }, as bananamark's): the words beside the options (messages/).
 */
export function completionSources(given = {}) {
  // A dialect's settings (bananamark's defineDialect) under the options given.
  const { dialect, ...rest } = given;
  const options = { ...(dialect && { environments: dialect.environments, dataBlocks: dialect.dataBlocks, tags: dialect.tags, messages: dialect.messages, tikz: dialect.tikz, wikiLinks: dialect.wikiLinks, bibliography: dialect.bibliography }), ...Object.fromEntries(Object.entries(rest).filter(([, value]) => value !== undefined)) };
  const { otherLabels = () => [], locale = 'en', messages = {}, tikz = false, wikiLinks = false, bibliography = false } = options;
  const text = key => message(key, { locale, messages });
  const loadEnvironments = loader(options.environments ?? {});
  const loadEntries = loader(options.entries);
  const loadLanguages = loader(options.languages);
  const loadKatex = loader(options.mathCommands ?? katexCommands);
  const loadTags = loader(options.tags ?? {});
  // A dialect's environments and tags are complete already (its removals made); options given are over bananamark's.
  const ownEnvironments = !(dialect && rest.environments === undefined), ownTags = !(dialect && rest.tags === undefined);
  const tagsOf = given => Object.fromEntries(Object.entries(ownTags ? { ...defaultTagRules, ...given } : given).filter(([, tag]) => tag));

  /**
   * ":::name" at a line's start (after indentation and quote marks), and a shorthand for the rest of the
   * opening fence: ":::th 标题 @label" gives "::: theorem [标题] {@label}". A bare ":::" (how an environment
   * closes) offers nothing unless asked.
   */
  async function environments(context) {
    if (context.view?.composing) return null;
    const match = context.matchBefore(/^[ \t]*(?:>[ \t]*)*:::[ \t]*[\w-]*(?:[ \t].*)?$/);
    // Typed at the end of the line: not while editing inside a title or label.
    if (!match || context.state.sliceDoc(context.pos, context.state.doc.lineAt(context.pos).to).trim()) return null;
    const fence = match.text.indexOf(':::'), typed = match.text.slice(fence + 3);
    const [, prefix, rest = ''] = typed.match(/^[ \t]*([\w-]*)(?:[ \t]+(.*))?$/);
    if (!prefix && !context.explicit) return null;
    const given = await loadEnvironments();
    if (!given) return null;
    const kinds = Object.fromEntries(Object.entries(ownEnvironments ? { ...defaultEnvironments, ...given } : given).filter(([, kind]) => kind));
    const { title, label } = shorthand(rest);
    const header = name => `::: ${name}${title ? ` [${title}]` : ''}${label ? ` {@${label}}` : ''}`;
    const options = Object.keys(kinds).sort()
      .filter(name => name.startsWith(prefix))
      .map(name => ({
        label: header(name), displayLabel: header(name), detail: environmentName(kinds[name], locale) ?? Object.values(kinds[name].name ?? {})[0], type: 'environment',
        boost: ['definition', 'theorem', 'proof'].includes(name) ? 1 : 0,
        apply: openEnvironment(header(name), match.text.slice(0, fence)),
      }));
    return options.length ? { from: match.from + fence, options, filter: false } : null;
  }
  /** "标题 @label", "@label" or "标题" (also written "[标题] {@label}"): the title and the label. */
  function shorthand(rest) {
    const found = rest.trim().match(/^(.*?)\s*(?:\{?@([^\s{}]*)\}?)?$/);
    return { title: found[1].replace(/^\[(.*)\]$/, '$1').trim(), label: found[2] ?? '' };
  }
  /**
   * Inserts an environment's opening fence, a line for its text (where the cursor goes) and its closing fence;
   * on the opening of an environment that has its closing already (the page's fences balance), the opening
   * line alone.
   */
  const openEnvironment = (header, indent) => (view, completion, from, to) => {
    const lineEnd = view.state.doc.lineAt(to).to;
    if (fencesBalance(view.state.doc.toString())) {
      view.dispatch({ changes: { from, to: lineEnd, insert: header }, selection: { anchor: from + header.length } });
      return;
    }
    const insert = `${header}\n${indent}\n${indent}:::`;
    view.dispatch({ changes: { from, to: lineEnd, insert }, selection: { anchor: from + header.length + 1 + indent.length } });
  };

  /** "```name" at a line's start: the blocks bananamark reads itself, and the caller's data blocks. */
  const blocks = options.dataBlocks ?? {};
  const fenceKinds = ['math', ...(tikz ? ['tikz'] : []), ...(Array.isArray(blocks) ? blocks : Object.keys(blocks)), ...(bibliography ? ['bibliography'] : [])];
  function fences(context) {
    if (context.view?.composing) return null;
    const match = context.matchBefore(/^[ \t]*(?:>[ \t]*)*```\w*$/);
    if (!match) return null;
    const from = match.from + match.text.indexOf('```');
    return {
      from,
      options: fenceKinds.map(name => snippetCompletion(`\`\`\`${name}\n\${}\n\`\`\``, { label: `\`\`\`${name}`, displayLabel: name, detail: text(`completion_${name}`), type: 'fence' })),
    };
  }

  /**
   * "[[" and what follows, up to a separator: entries by title and alias, once something other than "$" is
   * typed (or when asked), and not while an input method composes (see afterComposition).
   */
  async function entries(context) {
    if (!wikiLinks || context.view?.composing) return null;
    const match = context.matchBefore(/\[\[[^\]|\n]*$/);
    if (!match || !/[^$]/.test(match.text.slice(2))) return null;
    const list = await loadEntries();
    if (!list) return null;
    const options = [];
    for (const { title, aliases = [] } of list) {
      options.push({ label: title, type: 'entry', apply: closeLink(title) });
      for (const alias of aliases) options.push({ label: alias, detail: `→ ${title}`, type: 'alias', apply: closeLink(alias) });
    }
    // Deleting back to "[[" (or "[[$") closes the list again.
    return { from: match.from + 2, options, validFor: text => /^[^\]|\n]*$/.test(text) && /[^$]/.test(text) };
  }
  /** Inserts a link's target and its "]]" (not again when the brackets were closed as they were typed). */
  const closeLink = name => (view, completion, from, to) => {
    const closed = view.state.sliceDoc(to, to + 2) === ']]';
    view.dispatch({
      changes: { from, to, insert: closed ? name : `${name}]]` },
      selection: { anchor: from + name.length + 2 },
    });
  };

  /** "@" (after a non-word character) or "{@": the labels declared on this page, then those on the book's other pages. */
  function labels(context) {
    if (context.view?.composing) return null;
    const match = context.matchBefore(/(?:\{@|(?<![\p{L}\p{N}_@./%+\\])@)[^\s@{}<>[\]|\\`()，。；：！？、]*$/u);
    if (!match) return null;
    const braced = match.text.startsWith('{@');
    const declared = declaredLabels(context.state.doc.toString(), { bibliography }), own = new Set(declared.map(({ name }) => name));
    const others = otherLabels().filter(({ name }) => !own.has(name));
    if (!declared.length && !others.length) return null;
    const option = (name, detail, boost) => ({ label: name, detail, type: 'label', boost, apply: braced && context.state.sliceDoc(context.pos, context.pos + 1) !== '}' ? `${name}}` : name });
    return {
      from: match.from + (braced ? 2 : 1),
      // This page's labels first; another page's say which page.
      options: [...declared.map(({ name, text }) => option(name, text, 1)), ...others.map(({ name, text, page }) => option(name, page ? `${text} · ${page}` : text, 0))],
      validFor: /^[^\s@{}<>[\]|\\`()]*$/,
    };
  }

  /**
   * In a formula: "\name", a KaTeX command (its braces added, the cursor in the first), or an environment
   * ("\begin{…}", or its name after "\begin{"), opened and closed around a line for its content.
   */
  async function katex(context) {
    if (context.view?.composing || !inFormula(context.state, context.pos)) return null;
    const environment = context.matchBefore(/\\begin\{[a-zA-Z*]*$/);
    const command = environment ? null : context.matchBefore(/\\[a-zA-Z]+$/);
    if (!environment && !command) return null;
    // At the end of a name (an environment's: before its closing brace), not within one.
    const after = context.state.sliceDoc(context.pos, Math.min(context.state.doc.length, context.pos + 1));
    if (environment ? !/^[}\s]?$/.test(after) : /^[a-zA-Z]$/.test(after)) return null;
    // "\\a" is a line break and a letter, not a command.
    const at = (environment ?? command).from;
    if (escaped(context.state.sliceDoc(Math.max(0, at - 100), at + 1), Math.min(at, 100))) return null;
    const data = await loadKatex();
    if (!data) return null;
    const indent = context.state.doc.lineAt(context.pos).text.match(/^[ \t>]*/)[0];
    const environments = data.environments.map(([name, args]) => ({
      label: environment ? name : `\\begin{${name}}`, displayLabel: `\\begin{${name}}`, type: 'tex-environment',
      apply: openTeXEnvironment(name, args, indent),
    }));
    if (environment) return { from: environment.from + 7, options: environments, validFor: /^[a-zA-Z*]*$/ };
    const commands = data.commands.map(([name, args, glyph]) => ({
      label: name, detail: glyph, type: 'tex-command', apply: args ? insertCommand(name, args) : name,
    }));
    return { from: command.from, options: [...commands, ...environments], validFor: /^\\[a-zA-Z]+$/ };
  }
  /** A command with its braces, the cursor in the first. */
  const insertCommand = (name, args) => (view, completion, from, to) => {
    view.dispatch({ changes: { from, to, insert: name + '{}'.repeat(args) }, selection: { anchor: from + name.length + 1 } });
  };
  /** \begin{name} (with a pair of braces for its argument, the cursor there), a line for its content, \end{name}. */
  const openTeXEnvironment = (name, args, indent) => (view, completion, from, to) => {
    const line = view.state.doc.lineAt(to);
    // From "\begin{" on (when completing the name), to a closing brace typed or paired already.
    const start = view.state.sliceDoc(line.from, from).endsWith('\\begin{') ? from - 7 : from;
    const end = view.state.sliceDoc(to, to + 1) === '}' ? to + 1 : to;
    // An environment that has its \end already: renamed, at both ends.
    const closing = matchingEnd(view.state, start, end);
    if (closing) {
      view.dispatch({
        changes: [{ from: start, to: end, insert: `\\begin{${name}}` }, { from: closing.from, to: closing.to, insert: `\\end{${name}}` }],
        selection: { anchor: start + `\\begin{${name}}`.length },
      });
      return;
    }
    const head = `\\begin{${name}}${args ? '{}' : ''}`, inner = `${indent}  `;
    view.dispatch({
      changes: { from: start, to: end, insert: `${head}\n${inner}\n${indent}\\end{${name}}` },
      selection: { anchor: args ? start + head.length - 1 : start + head.length + 1 + inner.length },
    });
  };

  /**
   * HTML-style tags (bananamark's tags, whose parameters these follow): "<" and a letter offers each, opened and
   * closed with the cursor where one writes next (in an existing tag, the name alone); "</" the closing of the
   * tag still open; a parameter's name; a language code for a parameter that takes one; a bare parameter's values.
   * Not in code, formulas or the front matter.
   */
  async function tags(context) {
    if (context.view?.composing) return null;
    const { state, pos } = context;
    if (!inText(state, pos)) return null;
    const registry = tagsOf(await loadTags() ?? {});
    const line = state.doc.lineAt(pos), before = line.text.slice(0, pos - line.from), after = line.text.slice(pos - line.from);
    // With the lines before in its paragraph: a tag with named parameters may continue on the next lines.
    const paragraph = state.sliceDoc(Math.max(0, line.from - 1000), line.from).split(/\n[ \t]*\n/).at(-1) + before;
    const how = name => ({ ...builtinCompletion[name], ...registry[name].completion });
    let match;
    // A bare parameter (<lang en>, <align right>) shows as a parameter, a quoted one (lang="en") as a value.
    if ((match = before.match(/<([a-z][a-z0-9-]*)[ \t]+([a-zA-Z-]*)$/)) && registry[match[1]]?.positional) {
      const [, name, typed] = match;
      if (registry[name].positional.language) return languageOptions(pos - typed.length, 'attribute');
      const values = how(name).values ?? registry[name].positional.values;
      if (!values) return null;
      return { from: pos - typed.length, validFor: /^[a-z]*$/, options: values.map(value => ({ label: value, detail: text(`completion_${name}_${value}`), type: 'attribute' })) };
    }
    if ((match = paragraph.match(/<([a-z][a-z0-9-]*)\b[^<>]*\s([a-z]+)="([a-zA-Z-]*)$/)) && registry[match[1]]?.named?.[match[2]]?.language) {
      return languageOptions(pos - match[3].length, 'value');
    }
    // A parameter's name, not within a quoted value.
    if ((match = paragraph.match(/<([a-z][a-z0-9-]*)\b([^<>]*\s)([a-z]*)$/)) && registry[match[1]]?.named && match[2].split('"').length % 2 === 1) {
      if (!match[3] && !context.explicit) return null;
      const named = registry[match[1]].named;
      const written = new Set([...`${match[2]} ${after.split('>')[0]}`.matchAll(/([a-z]+)=/g)].map(found => found[1]));
      const options = Object.keys(named).filter(key => !written.has(key)).map(key => snippetCompletion(`${key}="\${}"`, {
        label: key, detail: text(`completion_parameter_${key}`), type: 'attribute',
        // A language from a list.
        ...(named[key].language ? { apply: withCompletion(snippetCompletion(`${key}="\${}"`, {}).apply) } : {}),
      }));
      return options.length ? { from: pos - match[3].length, options, validFor: /^[a-z]*$/ } : null;
    }
    if ((match = before.match(/<\/([A-Za-z]*)$/))) {
      const open = openTag(state, pos - match[0].length, registry);
      if (!open || !open.startsWith(match[1])) return null;
      return { from: pos - match[0].length, options: [{ label: `</${open}>`, type: 'tag', apply: after.startsWith('>') ? `</${open}` : `</${open}>` }] };
    }
    match = before.match(/(?<!\\)<([A-Za-z]*)$/);
    if (!match || (!match[1] && !context.explicit) || /^[A-Za-z0-9-]/.test(after)) return null;
    // In a tag already written (its parameters or ">" follow): the name alone.
    const existing = /^[ \t>\/]/.test(after);
    const options = Object.keys(registry).map(name => {
      const option = { label: `<${name}`, displayLabel: name, detail: text(`completion_tag_${name}`), type: 'tag' };
      if (existing) return { ...option, apply: `<${name}` };
      const { snippet = defaultSnippet(name, registry[name]), then = !registry[name].paired && Boolean(registry[name].named || registry[name].positional) } = how(name);
      const completion = snippetCompletion(snippet, option);
      return then ? { ...completion, apply: withCompletion(completion.apply) } : completion;
    });
    return { from: pos - match[0].length, options, validFor: /^<[A-Za-z]*$/ };
  }
  /** The languages, codes with their names, the common ones first. */
  async function languageOptions(from, type) {
    const names = await loadLanguages();
    if (!names) return null;
    return { from, validFor: /^[a-zA-Z-]*$/, options: Object.entries(names).map(([code, name]) => ({ label: code, detail: name, type, boost: commonLanguages.includes(code) ? 1 : 0 })) };
  }
  /** An apply function that opens the completion list again afterwards (for what is written next). */
  const withCompletion = apply => (view, completion, from, to) => {
    apply(view, completion, from, to);
    startCompletion(view);
  };

  return [environments, fences, entries, labels, katex, tags];
}

/** A tag's snippet from its parameters: <name ${}>${}</name>, <name>${}</name>, <name ${} />. */
function defaultSnippet(name, tag) {
  const parameters = tag.positional || tag.named ? ' ${}' : '';
  return tag.paired ? `<${name}${parameters}>\${}</${name}>` : `<${name}${parameters} />`;
}


/**
 * Whether completion should start once an input method has committed its text (sources offer nothing while it
 * composes): in a link's target, where names are typed in Chinese, say.
 */
export function afterComposition(state) {
  const pos = state.selection.main.head, line = state.doc.lineAt(pos), before = line.text.slice(0, pos - line.from);
  return /\[\[[^\]|\n]*[^$\]|\n][^\]|\n]*$/.test(before);
}

/** Whether pos is in the body's running text: not in code, a formula, a comment or the front matter. */
function inText(state, pos) {
  if (inFormula(state, pos)) return false;
  for (let node = syntaxTree(state).resolveInner(pos, -1); node; node = node.parent) {
    if (/^(?:InlineCode|FencedCode|CodeBlock|Comment|FrontMatter)$/.test(node.name)) return false;
  }
  return true;
}

/** The paired tag still open at pos (the innermost), from the text before it, or null; tags: the page's. */
function openTag(state, pos, tags) {
  const start = Math.max(0, pos - 20000), text = state.sliceDoc(start, pos), stack = [];
  for (let i = text.indexOf('<'); i >= 0; i = text.indexOf('<', i + 1)) {
    const tag = readTag(text, i);
    if (!tag || !tags[tag.name]?.paired || tag.selfClosing) continue;
    if (!tag.closing) stack.push(tag.name);
    else if (stack.at(-1) === tag.name) stack.pop();
  }
  return stack.at(-1) ?? null;
}

/** Whether the page's environment fences balance (as many closings as openings, outside code blocks). */
export function fencesBalance(text) {
  let depth = 0, fence = null;
  for (const line of text.split('\n')) {
    const marker = fenceMarker(line);
    if (fence) { if (closesFence(marker, fence)) fence = null; continue; }
    if (marker) { fence = marker; continue; }
    if (/^[ \t]*(?:>[ \t]*)*:::[ \t]*\S/.test(line)) depth++;
    else if (/^[ \t]*(?:>[ \t]*)*:::[ \t]*$/.test(line)) depth--;
  }
  return depth <= 0;
}

/**
 * The \end matching a \begin at [from, to) (the formula's \begin and \end balance), as { from, to }, or null:
 * a \begin still being written has none.
 */
export function matchingEnd(state, from, to) {
  // The formula: its node, or (one still being typed) its paragraph.
  let region = null;
  for (let node = syntaxTree(state).resolveInner(from, 1); node && !region; node = node.parent) {
    if (/^(?:InlineMath|DisplayMath|FencedCode)$/.test(node.name)) region = { from: node.from, to: node.to };
  }
  if (!region) {
    const text = state.doc.toString();
    const before = text.lastIndexOf('\n\n', from), after = text.indexOf('\n\n', to);
    region = { from: before < 0 ? 0 : before, to: after < 0 ? text.length : after };
  }
  const text = state.sliceDoc(region.from, region.to);
  const begins = (text.match(/\\begin\b/g) ?? []).length, ends = (text.match(/\\end\b/g) ?? []).length;
  if (begins > ends) return null;
  let depth = 1;
  for (const match of state.sliceDoc(to, region.to).matchAll(/\\(begin|end)\s*\{[^}\n]*\}/g)) {
    depth += match[1] === 'begin' ? 1 : -1;
    if (depth === 0) return { from: to + match.index, to: to + match.index + match[0].length };
  }
  return null;
}

/**
 * Whether a position is in a formula: the dialect's formulas, math, tikz, latex and tex blocks, and a formula
 * still being typed (opened before the position in its paragraph, not yet closed).
 */
export function inFormula(state, pos) {
  if (openFormula(state, pos)) return true;
  for (let node = syntaxTree(state).resolveInner(pos, -1); node; node = node.parent) {
    if (node.name === 'InlineMath' || node.name === 'DisplayMath') return node.from < pos && pos <= node.to;
    if (node.name === 'FencedCode') {
      // Its language from its first line (the info string has a grammar of its own in the tree).
      const first = state.doc.lineAt(node.from);
      return /^[ \t]*(?:>[ \t]*)*(?:`{3,}|~{3,})[ \t]*(?:math|tikz|latex|tex)\b/.test(first.text) && pos > first.to;
    }
  }
  return false;
}

/** Whether a formula opens before pos in its paragraph and does not close by pos. */
function openFormula(state, pos) {
  const start = Math.max(0, pos - 2000), before = state.sliceDoc(start, pos);
  const text = before.slice(before.search(/\n[ \t>]*\n(?![\s\S]*\n[ \t>]*\n)/) + 1), readMath = mathReader();
  for (let i = 0; i < text.length; i++) {
    const math = readMath(text, i);
    if (math) { i = math.end - 1; continue; }
    if ((text[i] === '$' || /^\\[([]/.test(text.slice(i, i + 2))) && !escaped(text, i)) return true;
  }
  return false;
}

/**
 * The labels a page declares, in order: at the end of headings and environment fences, at the start of list items,
 * after a math fence's language; with bibliography (bibliography blocks on), the keys of a bibliography block's
 * entries and of their versions that have one (their text: the entry's title). An environment's title may hold
 * brackets itself ("[[[链接]]]", "[[文字](网址)]").
 */
export function declaredLabels(text, { bibliography = false } = {}) {
  const found = [], seen = new Set();
  let fence = null, entry = null; // entry: in a bibliography block, the entry being read.
  for (const line of text.split('\n')) {
    const marker = fenceMarker(line);
    if (fence) {
      if (closesFence(marker, fence)) fence = null;
      else if (entry !== null) bibliographyLine(line);
      continue;
    }
    if (marker) {
      fence = marker;
      const math = line.match(/^\s*(?:>\s*)*`{3,}math\s*\{@([^}\s]+)\}/);
      if (math) add(math[1], 'math');
      entry = bibliography && /^\s*(?:>\s*)*(?:`{3,}|~{3,})[ \t]*bibliography(?:\s|\{|$)/.test(line) ? false : null;
      continue;
    }
    let match;
    if ((match = line.match(/^(#{1,6})\s+(.*?)\s*\{@([^}\s]+)\}\s*\*?\s*$/))) add(match[3], match[2]);
    else if ((match = line.match(/^\s*(?:>\s*)*:::\s*([\w-]+\*?(?:[ \t]+\([^()\n]*\))?)(?:\s*\[(.*)\])?\s*\{@([^}\s]+)\}/))) add(match[3], match[2] ? `${match[1]} [${match[2]}]` : match[1]);
    else if ((match = line.match(itemLabel))) add(match[1], match[2].slice(0, 20));
  }
  function add(name, text) {
    if (seen.has(name)) return;
    seen.add(name);
    found.push({ name, text });
    return found.at(-1);
  }
  // A line of a bibliography block (YAML): an entry's key at its start, its title (on the key's line, or below it), a
  // version's key.
  function bibliographyLine(line) {
    const key = line.match(/^([^\s#:'"{}[\],&*!|>%@`][^\s:]*)[ \t]*:(?:\s|$)/);
    const title = line.match(/(?:^\s+|[{,]\s*)title:\s*(?:"([^"]*)"|'([^']*)'|([^,}#]*[^\s,}#]))/);
    const titleText = title && (title[1] ?? title[2] ?? title[3]).slice(0, 40);
    if (key) entry = add(key[1], '') ?? false;
    if (entry && titleText && !entry.text) entry.text = titleText;
    const version = !key && line.match(/^\s+(?:-\s+)?(?:\{\s*)?(?:.*[{,]\s*)?key:\s*([^\s,}#'"]+)/);
    if (version) add(version[1], entry ? entry.text : '');
  }
  return found;
}
