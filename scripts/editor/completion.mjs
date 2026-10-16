// Completion in the online editor (assets/js/editor/main.js), kept to what one types most:
// - ":::" at the start of a line: an environment, opened and closed (::: theorem, a line for its text, :::),
//   with a shorthand for its title and label (":::th 标题 @label");
// - "```" at the start of a line: a math, tikz, terms or bibliography block, opened and closed;
// - "[[" and a character: an entry, by its title or an alias (the title as written, its formulas in TeX),
//   closed by "]]";
// - "@" or "{@": a label declared on this page (headings, environments, list items, numbered formulas), and
//   on a book page, the labels of the book's other pages (which it can reference too);
// - in the front matter's categories: a category;
// - in a formula, "\name": a KaTeX command or environment (data/katex.json);
// - "<" and a letter: a tag (<see>, <lang>, <align>, <spoiler>, <person />), opened and closed; "</" closes the
//   tag still open; inside a tag, its parameters, and a language (<lang …>, lang="…") or a side (<align …>).
// And Enter after a line's "\[" adds "\]" (closeDisplayFormula). Entry names, categories, environments and
// KaTeX's commands come from a file the build writes (layouts/_default/editor.html), fetched the first time
// they are needed.
import { snippetCompletion, startCompletion } from '@codemirror/autocomplete';
import { syntaxTree } from '@codemirror/language';
import { escaped, labelledMarkerSource, readMath, readTag } from '../shared/scan.mjs';

// A list item's line that declares a label: the label, and the start of the item's text.
const itemLabel = new RegExp(String.raw`^\s*(?:>\s*)*(?:(?:[-*+]|\d+[.)]|${labelledMarkerSource})\s+)+\{@([^}\s]+)\}\s*(.*)$`);

/**
 * The completion sources, for autocompletion({ override }). namesURL: the build's file of names; text(key):
 * the editor's strings; otherLabels(): the labels of the book's other pages ({ name, detail, page }).
 */
export function completionSources(namesURL, text, otherLabels = () => []) {
  let names;
  const loadNames = () => names ??= fetch(namesURL).then(response => response.json()).catch(() => { names = undefined; return null; });

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
    const data = await loadNames();
    if (!data) return null;
    const { title, label } = shorthand(rest);
    const header = name => `::: ${name}${title ? ` [${title}]` : ''}${label ? ` {@${label}}` : ''}`;
    const options = data.environments
      .filter(({ name }) => name.startsWith(prefix))
      .map(({ name, label: detail }) => ({
        label: header(name), displayLabel: header(name), detail, type: 'environment',
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
  /** Inserts an environment's opening fence, a line for its text (where the cursor goes) and its closing fence. */
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

  /** "```name" at a line's start: the blocks the site renders itself. */
  const fenceKinds = ['math', 'tikz', 'terms', 'bibliography'].map(name => [name, text(`completion_${name}`)]);
  function fences(context) {
    if (context.view?.composing) return null;
    const match = context.matchBefore(/^[ \t]*(?:>[ \t]*)*```\w*$/);
    if (!match) return null;
    const from = match.from + match.text.indexOf('```');
    return {
      from,
      options: fenceKinds.map(([name, detail]) => snippetCompletion(`\`\`\`${name}\n\${}\n\`\`\``, { label: `\`\`\`${name}`, displayLabel: name, detail, type: 'fence' })),
    };
  }

  /**
   * "[[" and what follows, up to a separator: entries by title and alias, once something other than "$" is
   * typed (or when asked), and not while an input method composes (see afterComposition).
   */
  async function entries(context) {
    if (context.view?.composing) return null;
    const match = context.matchBefore(/\[\[[^\]|\n]*$/);
    if (!match || !/[^$]/.test(match.text.slice(2))) return null;
    const data = await loadNames();
    if (!data) return null;
    const options = [];
    for (const { title, aliases } of data.entries) {
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
    const declared = declaredLabels(context.state.doc.toString()), own = new Set(declared.map(({ name }) => name));
    const others = otherLabels().filter(({ name }) => !own.has(name));
    if (!declared.length && !others.length) return null;
    const option = (name, detail, boost) => ({ label: name, detail, type: 'label', boost, apply: braced && context.state.sliceDoc(context.pos, context.pos + 1) !== '}' ? `${name}}` : name });
    return {
      from: match.from + (braced ? 2 : 1),
      // This page's labels first; another page's say which page.
      options: [...declared.map(({ name, detail }) => option(name, detail, 1)), ...others.map(({ name, detail, page }) => option(name, page ? `${detail} · ${page}` : detail, 0))],
      validFor: /^[^\s@{}<>[\]|\\`()]*$/,
    };
  }

  /** A category: in the front matter, after "categories:" (a flow list) or in its block list. */
  async function categories(context) {
    if (context.view?.composing) return null;
    const { state, pos } = context;
    const doc = state.doc, line = doc.lineAt(pos);
    if (doc.line(1).text !== '---') return null;
    let close = 0;
    for (let n = 2; n <= Math.min(doc.lines, 200); n++) if (doc.line(n).text === '---') { close = n; break; }
    if (!close || line.number >= close || line.number < 2) return null;
    const before = line.text.slice(0, pos - line.from);
    let match = before.match(/^categories:\s*\[(?:[^\]]*,)?\s*([^,\]]*)$/);
    if (!match) {
      // A block list item, under the categories key.
      match = before.match(/^\s+-\s+(.*)$/);
      if (match) {
        let key;
        for (let n = line.number - 1; n > 1 && !key; n--) key = doc.line(n).text.match(/^([\w-]+):/)?.[1];
        if (key !== 'categories') match = null;
      }
    }
    if (!match || !match[1]) return null;
    const data = await loadNames();
    if (!data) return null;
    return { from: pos - match[1].length, options: data.categories.map(name => ({ label: name, type: 'category' })), validFor: /^[^,\]\n]+$/ };
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
    const data = await loadNames();
    if (!data?.katex) return null;
    const indent = context.state.doc.lineAt(context.pos).text.match(/^[ \t>]*/)[0];
    const environments = data.katex.environments.map(([name, args]) => ({
      label: environment ? name : `\\begin{${name}}`, displayLabel: `\\begin{${name}}`, type: 'tex-environment',
      apply: openTeXEnvironment(name, args, indent),
    }));
    if (environment) return { from: environment.from + 7, options: environments, validFor: /^[a-zA-Z*]*$/ };
    const commands = data.katex.commands.map(([name, args, glyph]) => ({
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
   * Tags (scripts/prebuild/tags.mjs, whose parameters these follow): "<" and a letter offers each, opened and
   * closed with the cursor where one writes next (in an existing tag, the name alone); "</" the closing of the
   * tag still open; a parameter's name in <person …> and <spoiler …>; a language code after "<lang " and in
   * lang="…"; right or center after "<align ". Not in code, formulas or the front matter.
   */
  async function tags(context) {
    if (context.view?.composing) return null;
    const { state, pos } = context;
    if (!inText(state, pos)) return null;
    const line = state.doc.lineAt(pos), before = line.text.slice(0, pos - line.from), after = line.text.slice(pos - line.from);
    // With the lines before in its paragraph: a <person …> or <spoiler …> may continue on the next lines.
    const paragraph = state.sliceDoc(Math.max(0, line.from - 1000), line.from).split(/\n[ \t]*\n/).at(-1) + before;
    let match;
    // A bare parameter (<lang en>, <align right>) shows as a parameter, a quoted one (lang="en") as a value.
    const bareLanguage = before.match(/<lang[ \t]+([a-zA-Z-]*)$/);
    if ((match = bareLanguage ?? paragraph.match(/<person\b[^<>]*\slang="([a-zA-Z-]*)$/))) {
      const data = await loadNames();
      if (!data?.languages) return null;
      const type = bareLanguage ? 'attribute' : 'value';
      return {
        from: pos - match[1].length, validFor: /^[a-zA-Z-]*$/,
        options: Object.entries(data.languages).map(([code, name]) => ({ label: code, detail: name, type, boost: commonLanguages.includes(code) ? 1 : 0 })),
      };
    }
    if ((match = before.match(/<align[ \t]+([a-z]*)$/))) {
      return { from: pos - match[1].length, validFor: /^[a-z]*$/, options: ['right', 'center'].map(side => ({ label: side, detail: text(`completion_align_${side}`), type: 'attribute' })) };
    }
    // A parameter's name, not within a quoted value.
    if ((match = paragraph.match(/<(person|spoiler)\b([^<>]*\s)([a-z]*)$/)) && match[2].split('"').length % 2 === 1) {
      if (!match[3] && !context.explicit) return null;
      const written = new Set([...`${match[2]} ${after.split('>')[0]}`.matchAll(/([a-z]+)=/g)].map(found => found[1]));
      const options = tagParameters[match[1]].filter(key => !written.has(key)).map(key => snippetCompletion(`${key}="\${}"`, {
        label: key, detail: text(`completion_parameter_${key}`), type: 'attribute',
        // A language from a list.
        ...(key === 'lang' ? { apply: withCompletion(snippetCompletion(`${key}="\${}"`, {}).apply) } : {}),
      }));
      return options.length ? { from: pos - match[3].length, options, validFor: /^[a-z]*$/ } : null;
    }
    if ((match = before.match(/<\/([A-Za-z]*)$/))) {
      const open = openTag(state, pos - match[0].length);
      if (!open || !open.startsWith(match[1])) return null;
      return { from: pos - match[0].length, options: [{ label: `</${open}>`, type: 'tag', apply: after.startsWith('>') ? `</${open}` : `</${open}>` }] };
    }
    match = before.match(/(?<!\\)<([A-Za-z]*)$/);
    if (!match || (!match[1] && !context.explicit) || /^[A-Za-z0-9-]/.test(after)) return null;
    // In a tag already written (its parameters or ">" follow): the name alone.
    const existing = /^[ \t>\/]/.test(after);
    const options = tagSnippets.map(([name, snippet, then]) => {
      const option = { label: `<${name}`, displayLabel: name, detail: text(`completion_tag_${name}`), type: 'tag' };
      if (existing) return { ...option, apply: `<${name}` };
      const completion = snippetCompletion(snippet, option);
      return then ? { ...completion, apply: withCompletion(completion.apply) } : completion;
    });
    return { from: pos - match[0].length, options, validFor: /^<[A-Za-z]*$/ };
  }
  /** An apply function that opens the completion list again afterwards (for what is written next). */
  const withCompletion = apply => (view, completion, from, to) => {
    apply(view, completion, from, to);
    startCompletion(view);
  };

  return [environments, fences, entries, labels, categories, katex, tags];
}

// The tags as completion snippets: [name, snippet, whether the list opens again for what comes next].
const tagSnippets = [
  ['see', '<see>${}</see>'],
  ['lang', '<lang ${}>${}</lang>', true],
  ['align', '<align ${}>\n${}\n</align>', true],
  ['spoiler', '<spoiler title="${}">\n${}\n</spoiler>'],
  ['person', '<person ${} />', true],
];
// The named parameters of <person> and <spoiler>, and the tags that close (as in scripts/prebuild/tags.mjs,
// which the browser does not load).
const tagParameters = { person: ['original', 'lang', 'translit', 'ipa', 'years'], spoiler: ['title'] };
const pairedTags = ['see', 'lang', 'align', 'spoiler'];
const commonLanguages = ['en', 'fr', 'de', 'ru', 'ja', 'la', 'it', 'grc'];

/** Whether pos is in the body's running text: not in code, a formula, a comment or the front matter. */
function inText(state, pos) {
  if (inFormula(state, pos)) return false;
  for (let node = syntaxTree(state).resolveInner(pos, -1); node; node = node.parent) {
    if (/^(?:InlineCode|FencedCode|CodeBlock|Comment|FrontMatter)$/.test(node.name)) return false;
  }
  return true;
}

/** The paired tag still open at pos (the innermost), from the text before it, or null. */
function openTag(state, pos) {
  const start = Math.max(0, pos - 20000), text = state.sliceDoc(start, pos), stack = [];
  for (let i = text.indexOf('<'); i >= 0; i = text.indexOf('<', i + 1)) {
    const tag = readTag(text, i);
    if (!tag || !pairedTags.includes(tag.name) || tag.selfClosing) continue;
    if (!tag.closing) stack.push(tag.name);
    else if (stack.at(-1) === tag.name) stack.pop();
  }
  return stack.at(-1) ?? null;
}

/** Whether the page's environment fences balance (as many closings as openings, outside code blocks). */
export function fencesBalance(text) {
  let depth = 0, fence = null;
  for (const line of text.split('\n')) {
    const marker = line.match(/^\s*(?:>\s*)*(`{3,}|~{3,})/)?.[1];
    if (fence) { if (marker && marker[0] === fence[0] && marker.length >= fence.length) fence = null; continue; }
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
  const text = before.slice(before.search(/\n[ \t>]*\n(?![\s\S]*\n[ \t>]*\n)/) + 1);
  for (let i = 0; i < text.length; i++) {
    const math = readMath(text, i);
    if (math) { i = math.end - 1; continue; }
    if ((text[i] === '$' || /^\\[([]/.test(text.slice(i, i + 2))) && !escaped(text, i)) return true;
  }
  return false;
}

/**
 * "\[" and "\(" typed after a backslash (not an escaped one) close at once: "\[|\]", the cursor between.
 * For EditorView.inputHandler, ahead of the bracket pairing.
 */
export function pairFormulaDelimiters(view, from, to, text) {
  if ((text !== '[' && text !== '(') || from !== to) return false;
  const before = view.state.sliceDoc(Math.max(0, from - 100), from);
  if (!before.endsWith('\\') || escaped(before, before.length - 1)) return false;
  view.dispatch({ changes: { from, insert: `${text}\\${text === '[' ? ']' : ')'}` }, selection: { anchor: from + 1 }, userEvent: 'input.type' });
  return true;
}
/** Backspace between "\[" and "\]" (or "\(" and "\)") with nothing between: both go. */
export function deleteFormulaDelimiters(view) {
  const { state } = view, range = state.selection.main;
  if (!range.empty) return false;
  const around = state.sliceDoc(Math.max(0, range.head - 2), range.head + 2);
  if (around !== '\\[\\]' && around !== '\\(\\)') return false;
  const before = state.sliceDoc(Math.max(0, range.head - 100), range.head);
  if (escaped(before, before.length - 2)) return false;
  view.dispatch({ changes: { from: range.head - 2, to: range.head + 2 }, userEvent: 'delete.backward' });
  return true;
}

/**
 * Enter after a line's "\[" (an opening it does not yet close): a line for the formula, indented, and "\]"
 * below it. A "\]" (or "]") the pairing added after "\[" moves there.
 */
export function closeDisplayFormula(view) {
  const { state } = view, range = state.selection.main;
  if (!range.empty) return false;
  const line = state.doc.lineAt(range.head), before = line.text.slice(0, range.head - line.from), after = line.text.slice(range.head - line.from);
  if (!/^[ \t>]*\\\[$/.test(before) || !/^(?:\\?\])?\s*$/.test(after)) return false;
  // Closed already, on a later line? (What follows on this line is the pairing's, and goes.)
  if (readMath('\\[' + state.sliceDoc(line.to, Math.min(state.doc.length, line.to + 5000)), 0)) return false;
  // The formula's lines at the indentation of the \[ line (the site's layout, scripts/format/markdown.mjs).
  const indent = before.match(/^[ \t>]*/)[0];
  view.dispatch({
    changes: { from: range.head, to: line.to, insert: `\n${indent}\n${indent}\\]` },
    selection: { anchor: range.head + 1 + indent.length },
  });
  return true;
}

/**
 * Whether completion should start once an input method has committed its text (sources offer nothing while it
 * composes): in a link's target or a category, where names are typed in Chinese.
 */
export function afterComposition(state) {
  const pos = state.selection.main.head, line = state.doc.lineAt(pos), before = line.text.slice(0, pos - line.from);
  return /\[\[[^\]|\n]*[^$\]|\n][^\]|\n]*$/.test(before) || /^(?:categories:\s*\[.*|\s+-\s+.+)$/.test(before);
}

/** The labels a page declares, in order: at the end of headings and environment fences, at the start of list items, after a math fence's language. */
export function declaredLabels(text) {
  const found = [], seen = new Set();
  let fence = null;
  for (const line of text.split('\n')) {
    const marker = line.match(/^\s*(?:>\s*)*(`{3,}|~{3,})/)?.[1];
    if (fence) { if (marker && marker[0] === fence[0] && marker.length >= fence.length) fence = null; continue; }
    if (marker) {
      fence = marker;
      const math = line.match(/^\s*(?:>\s*)*`{3,}math\s*\{@([^}\s]+)\}/);
      if (math) add(math[1], 'math');
      continue;
    }
    let match;
    if ((match = line.match(/^(#{1,6})\s+(.*?)\s*\{@([^}\s]+)\}\s*\*?\s*$/))) add(match[3], match[2]);
    else if ((match = line.match(/^\s*(?:>\s*)*:::\s*([\w-]+\*?(?:[ \t]+\([^()\n]*\))?)(?:\s*\[([^\]]*)\])?\s*\{@([^}\s]+)\}/))) add(match[3], match[2] ? `${match[1]} [${match[2]}]` : match[1]);
    else if ((match = line.match(itemLabel))) add(match[1], match[2].slice(0, 20));
  }
  function add(name, detail) {
    if (seen.has(name)) return;
    seen.add(name);
    found.push({ name, detail });
  }
  return found;
}
