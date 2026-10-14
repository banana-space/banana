// The site's Markdown dialect for CodeMirror (the online editor) and for highlighting code blocks at build
// time: CommonMark with GFM tables (cells not split inside wiki links and formulas), task lists,
// strikethrough and autolinks, plus
// - front matter (YAML);
// - formulas $…$, $$…$$, \(…\), \[…\] (their TeX highlighted), ending where the build's scanner ends them
//   (scripts/shared/scan.mjs), also display formulas on lines of their own, which may hold lines that would
//   otherwise be Markdown (a lone "=" underlines a heading);
// - wiki links [[target|label]];
// - references @label and {@label} (also the labels of headings, environments and list items);
// - environment fences ::: name [title] {@label} and their closing :::;
// - labelled list items (a), iv), (A1) …, as ordered lists;
// - tags such as <see>, <lang en> and <person name="…">, on one line (HTML blocks are not parsed: a line
//   starting with a tag is a paragraph's, as the build reads it);
// - fenced code by its language: math and tikz as TeX, terms, bibliography and yaml as YAML, markdown as
//   this dialect.
// See docs/syntax.md for the syntax itself.
import { parseMixed } from '@lezer/common';
import { Tag, highlightTree, styleTags, tags, tagHighlighter } from '@lezer/highlight';
import { Autolink, Strikethrough, TaskList } from '@lezer/markdown';
import { LanguageSupport, StreamLanguage, ensureSyntaxTree, foldService } from '@codemirror/language';
import { commonmarkLanguage, markdown } from '@codemirror/lang-markdown';
import { yaml } from '@codemirror/lang-yaml';
import { escaped, labelledMarkerSource, readMath, readTag, referenceStop, referenceTail } from './scan.mjs';

/** Highlighting tags of the dialect's own syntax. */
export const bananaTags = {
  math: Tag.define(),
  mathMark: Tag.define(),
  wikiLink: Tag.define(),
  wikiMark: Tag.define(),
  wikiTarget: Tag.define(),
  yamlNumber: Tag.define(),
  yamlValue: Tag.define(),
  texEnvironment: Tag.define(),
  codeLanguage: Tag.define(),
  reference: Tag.define(),
  referenceMark: Tag.define(),
  structure: Tag.define(),
  environment: Tag.define(),
  environmentName: Tag.define(),
  environmentTitle: Tag.define(),
};

/**
 * TeX, by a small tokenizer of our own: commands (with ^, _ and the column separator &), the names of
 * environments in \begin{…} and \end{…}, brackets, comments (numbers are the formula's text). As a document
 * (latex and tex code blocks) it starts outside formulas, whose delimiters \[ \] \( \) $$ $ it marks; inside a formula (the
 * dialect's formulas, math and tikz blocks) it starts in one.
 */
function texTokenizer(document) {
  // The state: whether in a formula; the delimiter closing a document's formula; a step after \begin or \end;
  // after a command taking text (\text and the like), whether its brace comes; and the text groups open
  // within the formula, each { braces, math } (math: a formula inside the text, $…$).
  const inMath = state => state.groups.length ? state.groups.at(-1).math : state.math;
  return {
    startState: () => ({ math: !document, close: null, environment: 0, text: false, groups: [] }),
    copyState: state => ({ ...state, groups: state.groups.map(group => ({ ...group })) }),
    token(stream, state) {
      if (stream.eatSpace()) return null;
      if (stream.match(/^%.*/)) return 'comment';
      // After \begin or \end: the brace, then the environment's name.
      if (state.environment === 1 && stream.eat('{')) { state.environment = 2; return 'bracket'; }
      if (state.environment === 2) {
        state.environment = 0;
        if (stream.match(/^[a-zA-Z]+\*?/)) return 'environment';
      }
      state.environment = 0;
      // After \text and the like: its brace opens text.
      if (state.text) {
        state.text = false;
        if (stream.eat('{')) { state.groups.push({ braces: 1, math: false }); return 'bracket'; }
      }
      const group = state.groups.at(-1);
      if (group && !group.math) {
        // Text within a formula: braces counted, $ opens a formula again.
        if (stream.eat('$')) { group.math = true; return 'delimiter'; }
        if (stream.eat('{')) { group.braces++; return 'bracket'; }
        if (stream.eat('}')) { if (--group.braces === 0) state.groups.pop(); return 'bracket'; }
        if (stream.match(/^\\[a-zA-Z@]+\*?/) || stream.match(/^\\./)) return 'command';
        stream.match(/^[^\\${}%\s]+/) || stream.next();
        return null;
      }
      if (group?.math && stream.eat('$')) { group.math = false; return 'delimiter'; }
      if (!state.groups.length) {
        if (!state.math) {
          for (const [open, close] of [['\\[', '\\]'], ['\\(', '\\)'], ['$$', '$$'], ['$', '$']]) {
            if (stream.match(open)) { Object.assign(state, { math: true, close }); return 'delimiter'; }
          }
        } else if (state.close && stream.match(state.close)) {
          Object.assign(state, { math: false, close: null });
          return 'delimiter';
        }
      }
      if (stream.match(/^\\(?:begin|end)\b/)) { state.environment = 1; return 'command'; }
      if (inMath(state) && stream.match(/^\\(?:text[a-z]*|mbox|hbox)\b/)) { state.text = true; return 'command'; }
      if (stream.match(/^\\[a-zA-Z@]+\*?/) || stream.match(/^\\./)) return 'command';
      if (stream.match(/^[{}[\]()]/)) return 'bracket';
      if (!inMath(state)) { stream.match(/^[^\\%{}[\]()$\s]+/) || stream.next(); return null; }
      if (stream.match(/^[&^_]/)) return 'command';
      if (stream.match(/^\d+(?:\.\d+)?/)) return null; // Numbers as the formula's text.
      if (stream.match(/^[a-zA-Z]+/)) return 'variable';
      stream.next();
      return null;
    },
    tokenTable: {
      command: tags.tagName, bracket: tags.bracket, number: tags.number, variable: tags.variableName,
      comment: tags.comment, environment: bananaTags.texEnvironment, delimiter: bananaTags.mathMark,
    },
  };
}
const tex = StreamLanguage.define(texTokenizer(false));
const texDocument = StreamLanguage.define(texTokenizer(true));

// A code fence's info string: the language, then attributes such as {@eq:label} or {caption="…"}.
const codeInfo = StreamLanguage.define({
  startState: () => ({ label: false }),
  token(stream, state) {
    if (stream.sol() && stream.match(/^[\w-]+/)) return 'codeLanguage';
    if (state.label) {
      if (stream.match(/^[^}\s]+/)) return 'reference';
      state.label = false;
      if (stream.eat('}')) return 'referenceMark';
    }
    if (stream.match(/^\{@(?=[^}\s]*\})/)) { state.label = true; return 'referenceMark'; }
    stream.next();
    return null;
  },
  tokenTable: { codeLanguage: bananaTags.codeLanguage, reference: bananaTags.reference, referenceMark: bananaTags.referenceMark },
});
// YAML, with numbers apart from other plain values (the grammar calls both Literal): a literal that reads
// as a number is given to a parser that marks it so.
const yamlNumber = StreamLanguage.define({
  token(stream) { stream.skipToEnd(); return 'yamlNumber'; },
  tokenTable: { yamlNumber: bananaTags.yamlNumber },
});
const numberLiteral = /^[-+]?(?:\d[\d_]*(?:\.\d*)?|\.\d+)(?:[eE][-+]?\d+)?$/;
const yamlLanguage = yaml().language.configure({
  // Values in grey (the grammar tags them content, as Markdown tags paragraphs); keys keep their tag.
  props: [styleTags({ 'Literal QuotedLiteral BlockLiteralContent': bananaTags.yamlValue })],
  wrap: parseMixed((node, input) => node.name === 'Literal' && node.node.parent?.name !== 'Key'
    && numberLiteral.test(input.read(node.from, node.to)) ? { parser: yamlNumber.parser } : null),
});

// Formulas: the delimiters and the TeX between them (parsed as TeX by the mixed parser below). source is
// the formula's text.
function mathElement(cx, from, end, display, source) {
  const delimiter = /^(\$\$|\\\[|\\\()/.test(source) ? 2 : 1;
  // A display formula's delimiters (\[ \], $$) look like a math block's fence, an inline one's like a mark.
  const mark = /^(\$\$|\\\[)/.test(source) ? 'DisplayMathMark' : 'MathMark';
  return cx.elt(display ? 'DisplayMath' : 'InlineMath', from, end, [
    cx.elt(mark, from, from + delimiter),
    cx.elt('MathContent', from + delimiter, end - delimiter),
    cx.elt(mark, end - delimiter, end),
  ]);
}

/** Inline formulas, also $$…$$ and \[…\] within a paragraph. Before Escape: \( and \[ open formulas. */
const inlineMath = {
  name: 'Math',
  before: 'Escape',
  parse(cx, next, pos) {
    if (next !== 36 /* $ */ && next !== 92 /* \ */) return -1;
    const text = cx.text, at = pos - cx.offset;
    if (next === 92 && !/^\\[([]/.test(text.slice(at, at + 2))) return -1;
    const math = readMath(text, at);
    if (!math) return -1;
    const end = cx.offset + math.end;
    return cx.addElement(mathElement(cx, pos, end, math.display, text.slice(at, math.end)));
  },
};

/**
 * Display formulas starting a line, as blocks: the whole formula, whatever its lines look like. Only when
 * nothing follows on the closing line (otherwise the paragraph's inline parsing reads it), and not when the
 * line closes a formula a paragraph opened ($$ at the end of a line of text).
 */
const displayStart = line => /^(\$\$|\\\[)/.test(line.text.slice(line.pos));
function displayBlock(cx, line) {
  if (!displayStart(line)) return null;
  // Look ahead without consuming: a formula that never closes is text, as in the build.
  const text = lookahead(cx, line.text.slice(line.pos)), math = readMath(text, 0);
  if (!math) return null;
  const lines = text.slice(0, math.end).split('\n').length - 1;
  const closing = text.slice(math.end), rest = closing.slice(0, closing.indexOf('\n') + 1 || closing.length);
  if (rest.trim()) return null;
  return { text: text.slice(0, math.end), lines };
}
/**
 * first and the lines after the current one, up to the paragraph's end (a blank line, included) or 300 lines:
 * as far as a formula starting in first can reach (formulas do not cross a blank line). One walk forward.
 */
function lookahead(cx, first) {
  const input = cx.input;
  let text = first, position = cx.lineStart + cx.line.text.length;
  for (let n = 0; n < 300 && position < input.length; n++) {
    const next = lineAt(input, position + 1);
    text += '\n' + next;
    position += 1 + next.length;
    if (!next.trim()) break;
  }
  return text;
}
const displayMath = {
  name: 'DisplayMath',
  before: 'FencedCode',
  parse(cx, line) {
    const block = displayBlock(cx, line);
    if (!block) return false;
    const start = cx.lineStart + line.pos;
    for (let i = 0; i < block.lines; i++) cx.nextLine();
    cx.addElement(mathElement(cx, start, start + block.text.length, true, block.text));
    cx.nextLine();
    return true;
  },
  endLeaf: (cx, line, leaf) => displayStart(line) && openFormula(leaf) < 0 && displayBlock(cx, line) !== null,
};

/**
 * A formula a paragraph leaves open continues on the next lines, whatever they look like: a line "=" would
 * otherwise underline a heading, a line "+ x" start a list. Called before the parser's other checks for the
 * end of a paragraph (see bananaMarkdown): takes the formula's lines into the paragraph, and returns whether
 * the paragraph ends at the line after them.
 */
function continueFormula(cx, line, leaf) {
  const start = openFormula(leaf);
  if (start < 0) return false;
  const text = lookahead(cx, leaf.content.slice(start) + '\n' + line.text), math = readMath(text, 0);
  // Never closes: text, as in the build (and not looked for again in this paragraph).
  if (!math) { formulaScans.get(leaf).gaveUp = true; return false; }
  // The lines to take: from the current one to the one the formula closes on.
  const lines = (text.slice(0, math.end).split('\n').length - 1) - (leaf.content.slice(start).split('\n').length - 1);
  for (let i = 0; i < lines; i++) {
    leaf.content += '\n' + line.scrub();
    for (const mark of line.markers) leaf.marks.push(mark);
    if (!cx.nextLine()) return true;
  }
  return line.pos === line.text.length;
}
/**
 * Where a formula opens in a paragraph so far and does not close there (outside code spans), or -1. Kept per
 * paragraph and taken up where it stopped: asked at every line, a scan of the whole paragraph each time
 * would take quadratic time.
 */
const formulaScans = new WeakMap(); // leaf → { position: scanned up to, open: an open formula's start or -1, gaveUp }
function openFormula(leaf) {
  const text = leaf.content;
  const scan = formulaScans.get(leaf) ?? { position: 0, open: -1, gaveUp: false };
  formulaScans.set(leaf, scan);
  if (scan.gaveUp) return -1;
  if (scan.open >= 0) {
    const math = readMath(text, scan.open);
    if (!math) return scan.open;
    Object.assign(scan, { position: math.end, open: -1 });
  }
  const found = unclosed(text, scan.position);
  if (found < 0) scan.position = text.length;
  else Object.assign(scan, { position: found, open: found });
  return found;
}
/** Where a formula opens in text from a position on and does not close there (outside code spans), or -1. */
function unclosed(text, from = 0) {
  for (let i = from; i < text.length; i++) {
    if (text[i] === '`') {
      // A code span, if it closes (a lone backtick is text).
      const run = text.slice(i).match(/^`+/)[0];
      let end = -1;
      for (let j = i + run.length; j < text.length && end < 0; j++) {
        if (text[j] !== '`') continue;
        const found = text.slice(j).match(/^`+/)[0];
        if (found === run) end = j;
        j += found.length - 1;
      }
      i = end < 0 ? i + run.length - 1 : end + run.length - 1;
      continue;
    }
    const math = readMath(text, i);
    if (math) { i = math.end - 1; continue; }
    if ((text[i] === '$' || /^\\[([]/.test(text.slice(i, i + 2))) && !escaped(text, i)) return i;
  }
  return -1;
}

/** The front matter: from a first line --- to the next line ---, its content YAML (see dialect.wrap). */
const frontMatter = {
  name: 'FrontMatter',
  before: 'FencedCode',
  parse(cx, line) {
    if (cx.lineStart !== 0 || line.text !== '---') return false;
    // The closing line, walking forward once (up to 1000 lines: a front matter is short).
    let position = 4, lines = 1, text;
    while ((text = position <= cx.input.length ? lineAt(cx.input, position) : undefined) !== '---') {
      if (text === undefined || lines > 1000) return false; // Not closed: a thematic break.
      position += text.length + 1;
      lines++;
    }
    const close = position;
    const children = [cx.elt('FrontMatterMark', 0, 3)];
    if (close > 4) children.push(cx.elt('FrontMatterContent', 4, close - 1));
    children.push(cx.elt('FrontMatterMark', close, close + 3));
    for (let i = 0; i < lines; i++) cx.nextLine();
    cx.addElement(cx.elt('FrontMatter', 0, close + 3, children));
    cx.nextLine();
    return true;
  },
};

/** Footnote definitions [^label]: …, their content continuing on lines indented by four spaces. */
const footnoteStart = /^\[\^[^\]\s]+\]:[ \t]*/;
const footnote = {
  name: 'Footnote',
  before: 'LinkReference',
  parse(cx, line) {
    const marker = footnoteStart.exec(line.text.slice(line.pos));
    if (!marker) return false;
    cx.startComposite('Footnote', line.basePos, 4);
    cx.addElement(cx.elt('FootnoteMark', cx.lineStart + line.pos, cx.lineStart + line.pos + marker[0].trimEnd().length));
    line.moveBase(line.pos + marker[0].length);
    return null;
  },
};
/**
 * Labelled list items ((a), iv), (A1) …; scripts/prebuild/lists.mjs), read as CommonMark reads ordered lists: the
 * item's text at the column after its marker (at most fourteen columns on), a new list not interrupting a
 * paragraph, the next item of a list doing so.
 */
const labelledMarker = new RegExp(`^${labelledMarkerSource}`);
const labelledSize = line => labelledMarker.exec(line.text.slice(line.pos))?.[0].length ?? -1;
const inLabelledList = cx => cx.stack.some(block => block.type === cx.parser.getNodeType('LabelledList'));
const labelledList = {
  name: 'LabelledList',
  before: 'OrderedList',
  parse(cx, line) {
    const size = labelledSize(line);
    if (size < 0) return false;
    if (cx.block.type !== cx.parser.getNodeType('LabelledList')) cx.startComposite('LabelledList', line.basePos);
    // Where the item's text is (as lezer's lists: five spaces or more start indented code, one space on).
    const after = line.pos + size, skipped = line.skipSpace(after);
    const indentAfter = line.countIndent(after, line.pos, line.indent), indented = line.countIndent(skipped, after, indentAfter);
    const base = Math.min(indented >= indentAfter + 5 || skipped === line.text.length ? indentAfter + 1 : indented, line.indent + 14);
    cx.startComposite('LabelledItem', line.basePos, base - line.baseIndent);
    // A formula in the label: ($\ast$).
    const label = line.text.slice(line.pos, after), from = cx.lineStart + line.pos, children = [];
    for (let i = 0; i < label.length; i++) {
      const math = readMath(label, i);
      if (math) { children.push(mathElement(cx, from + i, from + math.end, false, label.slice(i, math.end))); break; }
    }
    cx.addElement(cx.elt('ListMark', from, from + size, children));
    line.moveBaseColumn(base);
    return null;
  },
  endLeaf: (cx, line) => labelledSize(line) >= 0 && inLabelledList(cx),
};

/**
 * Brackets that are not a link: [text] without (url) or [label] after it is text in the build (shortcut
 * reference links have no definitions on this site), as are citation groups [@a, note] and an escaped
 * \[[x]]. The opening bracket is taken as text, so that the Link parser does not see it.
 */
const plainBracket = {
  name: 'PlainBracket',
  before: 'Link',
  parse(cx, next, pos) {
    if (next !== 91 /* [ */) return -1;
    const text = cx.text, start = pos - cx.offset;
    let depth = 0;
    // Bounded as the build bounds links (scripts/prebuild/markup.mjs): text full of brackets stays linear.
    for (let i = start; i < text.length && i < start + 500; i++) {
      const math = i > start && readMath(text, i);
      if (math) { i = math.end - 1; continue; }
      if (text[i] === '\\') { i++; continue; }
      if (text[i] === '`') return -1; // Leave code to the Markdown parser.
      if (text[i] === '[') depth++;
      else if (text[i] === ']' && --depth === 0) return /[([]/.test(text[i + 1] ?? '') ? -1 : cx.addElement(cx.elt('PlainBracket', pos, pos + 1));
    }
    return cx.addElement(cx.elt('PlainBracket', pos, pos + 1));
  },
};

/** Footnote references [^label]. */
const footnoteReference = {
  name: 'FootnoteReference',
  before: 'Link',
  parse(cx, next, pos) {
    if (next !== 91 /* [ */ || cx.char(pos + 1) !== 94 /* ^ */) return -1;
    const match = /^\[\^[^\]\s]+\]/.exec(cx.slice(pos, Math.min(cx.end, pos + 100)));
    return match ? cx.addElement(cx.elt('FootnoteMark', pos, pos + match[0].length)) : -1;
  },
};

/** The line of the input starting at a position. */
function lineAt(input, position) {
  for (let end = position; ; end += 256) {
    const chunk = input.read(end, Math.min(end + 256, input.length)), newline = chunk.indexOf('\n');
    if (newline >= 0) return input.read(position, end + newline);
    if (end + 256 >= input.length) return input.read(position, input.length);
  }
}

/**
 * [[target]] and [[target|label]] (in tables also [[target\|label]]) at text[start]: { end, separator,
 * separatorLength }, or null. Formulas in them do not end them; they do not span lines.
 */
function readWikiLink(text, start) {
  if (!text.startsWith('[[', start) || escaped(text, start)) return null;
  let separator, separatorLength = 0;
  for (let i = start + 2; i < text.length && i < start + 300;) { // As the build: scripts/prebuild/markup.mjs
    const math = readMath(text, i);
    if (math) { i = math.end; continue; }
    if (text[i] === '\n') return null;
    if (text.startsWith(']]', i) && !escaped(text, i)) {
      return text.slice(start + 2, separator ?? i).trim() ? { end: i + 2, separator, separatorLength } : null;
    }
    if (separator === undefined && text[i] === '|') { separator = i; separatorLength = 1; }
    else if (separator === undefined && text.startsWith('\\|', i)) { separator = i; separatorLength = 2; i++; }
    i++;
  }
  return null;
}
const wikiLink = {
  name: 'WikiLink',
  before: 'Link',
  parse(cx, next, pos) {
    if (next !== 91 /* [ */) return -1;
    const text = cx.text, start = pos - cx.offset, wiki = readWikiLink(text, start);
    if (!wiki) return -1;
    const at = offset => cx.offset + offset, close = wiki.end - 2, { separator, separatorLength } = wiki;
    const children = [cx.elt('WikiMark', pos, pos + 2), cx.elt(separator === undefined ? 'WikiTarget' : 'WikiTargetBehindLabel', pos + 2, at(separator ?? close), mathIn(cx, start + 2, separator ?? close))];
    if (separator !== undefined) {
      children.push(cx.elt('WikiMark', at(separator), at(separator + separatorLength)));
      children.push(cx.elt('WikiLabel', at(separator + separatorLength), at(close), cx.parser.parseInline(text.slice(separator + separatorLength, close), at(separator + separatorLength))));
    }
    children.push(cx.elt('WikiMark', at(close), at(wiki.end)));
    return cx.addElement(cx.elt('WikiLink', pos, at(wiki.end), children));
  },
};
/** The formulas in text[from, to) of an inline context, as elements. */
function mathIn(cx, from, to) {
  const elements = [];
  for (let i = from; i < to; i++) {
    const math = readMath(cx.text, i);
    if (math && math.end <= to) {
      elements.push(mathElement(cx, cx.offset + i, cx.offset + math.end, math.display, cx.text.slice(i, math.end)));
      i = math.end - 1;
    }
  }
  return elements;
}

/** A reference @label or {@label} at [from, to): its marks (@, {@ and }) and the label. */
function referenceElement(cx, from, to, braced) {
  const open = braced ? 2 : 1, close = braced ? 1 : 0;
  return cx.elt('Reference', from, to, [
    cx.elt('ReferenceMark', from, from + open),
    ...(close ? [cx.elt('ReferenceMark', to - close, to)] : []),
  ]);
}

/** @label and {@label}, as the build reads them (readReference in scripts/prebuild/markup.mjs). */
const reference = {
  name: 'Reference',
  before: 'Emphasis',
  parse(cx, next, pos) {
    const text = cx.text, start = pos - cx.offset;
    if (next === 123 /* { */) {
      if (text[start + 1] !== '@' || escaped(text, start)) return -1;
      const close = text.indexOf('}', start + 2);
      if (close < 0 || text.slice(start, close).includes('\n')) return -1;
      return cx.addElement(referenceElement(cx, pos, cx.offset + close + 1, true));
    }
    if (next !== 64 /* @ */ || escaped(text, start) || (start > 0 && /[\p{L}\p{N}_@./%+\\]/u.test(text[start - 1]))) return -1;
    let end = start + 1;
    while (end < text.length && !referenceStop.test(text[end])) end++;
    const key = text.slice(start + 1, end).replace(referenceTail, '');
    if (!key) return -1;
    return cx.addElement(referenceElement(cx, pos, pos + 1 + key.length, false));
  },
};

/** Tags on one line: <name>, </name>, <name attribute="value" …>, <name … /> (scripts/prebuild/tags.mjs). */
const tag = {
  name: 'Tag',
  before: 'HTMLTag',
  parse(cx, next, pos) {
    if (next !== 60 /* < */) return -1;
    const start = pos - cx.offset, found = readTag(cx.text, start);
    if (!found) return -1;
    const at = offset => cx.offset + offset;
    const nameFrom = start + (found.closing ? 2 : 1), nameTo = nameFrom + found.name.length;
    const children = [cx.elt('TagMark', pos, at(nameFrom)), cx.elt('TagName', at(nameFrom), at(nameTo))];
    // A bare parameter (<lang en>, <align right>) is coloured as a parameter's name.
    for (const attribute of found.attributes) {
      children.push(cx.elt('AttributeName', at(attribute.keyFrom), at(attribute.keyTo)));
      if (attribute.valueFrom !== undefined) children.push(cx.elt('AttributeValue', at(attribute.valueFrom), at(attribute.valueTo)));
    }
    children.push(cx.elt('TagMark', at(found.end - (found.selfClosing ? 2 : 1)), at(found.end)));
    return cx.addElement(cx.elt('Tag', pos, at(found.end), children));
  },
};

/** ::: name [title] {@label} and the closing :::, each a line of its own. */
const environmentStart = line => /^:::/.test(line.text.slice(line.pos));
const environmentFence = {
  name: 'EnvironmentFence',
  before: 'FencedCode',
  parse(cx, line) {
    if (!environmentStart(line)) return false;
    const from = cx.lineStart + line.pos, rest = line.text.slice(line.pos), to = from + rest.trimEnd().length;
    const children = [cx.elt('EnvironmentMark', from, from + 3)];
    const name = rest.match(/^:::\s*(-?[\w-]+\*?)/);
    let at = 3;
    if (name) {
      children.push(cx.elt('EnvironmentName', from + name[0].length - name[1].length, from + name[0].length));
      at = name[0].length;
    }
    // The title in brackets, then the label.
    const title = rest.slice(at).match(/^\s*\[/);
    if (title) {
      const open = at + title[0].length - 1;
      let depth = 0, close = -1;
      for (let i = open; i < rest.length; i++) {
        const math = readMath(rest, i);
        if (math) { i = math.end - 1; continue; }
        if (rest[i] === '[' && !escaped(rest, i)) depth++;
        else if (rest[i] === ']' && !escaped(rest, i) && --depth === 0) { close = i; break; }
      }
      if (close > 0) {
        children.push(cx.elt('EnvironmentTitle', from + open, from + close + 1, cx.parser.parseInline(rest.slice(open + 1, close), from + open + 1)));
        at = close + 1;
      }
    }
    const label = rest.slice(at).match(/^\s*(\{@[^}\s]*\})/);
    if (label) children.push(referenceElement(cx, from + at + label[0].length - label[1].length, from + at + label[0].length, true));
    cx.addElement(cx.elt('EnvironmentFence', from, to, children));
    cx.nextLine();
    return true;
  },
  endLeaf: (cx, line) => environmentStart(line),
};

// GFM tables (from @lezer/markdown), with cells that wiki links and formulas do not split: the build reads
// those before Markdown does, so [[a|b]] and $|x|$ need no escaping in a table.
function parseRow(cx, line, startI = 0, elts, offset = 0) {
  let count = 0, first = true, cellStart = -1, cellEnd = -1, esc = false;
  const parseCell = () => {
    elts.push(cx.elt('TableCell', offset + cellStart, offset + cellEnd, cx.parser.parseInline(line.slice(cellStart, cellEnd), offset + cellStart)));
  };
  for (let i = startI; i < line.length; i++) {
    const next = line.charCodeAt(i);
    const skip = esc ? null : readWikiLink(line, i) ?? readMath(line, i);
    if (skip) {
      if (cellStart < 0) cellStart = i;
      i = cellEnd = skip.end;
      i--;
      esc = false;
      continue;
    }
    if (next === 124 /* | */ && !esc) {
      if (!first || cellStart > -1) count++;
      first = false;
      if (elts) {
        if (cellStart > -1) parseCell();
        elts.push(cx.elt('TableDelimiter', i + offset, i + offset + 1));
      }
      cellStart = cellEnd = -1;
    } else if (esc || (next !== 32 && next !== 9)) {
      if (cellStart < 0) cellStart = i;
      cellEnd = i + 1;
    }
    esc = !esc && next === 92;
  }
  if (cellStart > -1) {
    count++;
    if (elts) parseCell();
  }
  return count;
}
function hasPipe(text, start) {
  for (let i = start; i < text.length; i++) {
    const next = text.charCodeAt(i);
    if (next === 124 /* | */) return true;
    if (next === 92 /* \ */) i++;
  }
  return false;
}
const delimiterLine = /^[>\s]*\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/;
class TableParser {
  constructor() { this.rows = null; } // null: before the second line; false: not a table; else the rows so far.
  nextLine(cx, line, leaf) {
    if (this.rows === null) {
      this.rows = false;
      let lineText;
      if ((line.next === 45 || line.next === 58 || line.next === 124 /* -:| */) && delimiterLine.test(lineText = line.text.slice(line.pos))) {
        const firstRow = [], firstCount = parseRow(cx, leaf.content, 0, firstRow, leaf.start);
        if (firstCount === parseRow(cx, lineText, 0)) {
          this.rows = [cx.elt('TableHeader', leaf.start, leaf.start + leaf.content.length, firstRow),
            cx.elt('TableDelimiter', cx.lineStart + line.pos, cx.lineStart + line.text.length)];
        }
      }
    } else if (this.rows) {
      const content = [];
      parseRow(cx, line.text, line.pos, content, cx.lineStart);
      this.rows.push(cx.elt('TableRow', cx.lineStart + line.pos, cx.lineStart + line.text.length, content));
    }
    return false;
  }
  finish(cx, leaf) {
    if (!this.rows) return false;
    cx.addLeafElement(leaf, cx.elt('Table', leaf.start, leaf.start + leaf.content.length, this.rows));
    return true;
  }
}
const table = {
  defineNodes: [
    { name: 'Table', block: true },
    { name: 'TableHeader', style: { 'TableHeader/...': tags.heading } },
    'TableRow',
    { name: 'TableCell', style: tags.content },
    { name: 'TableDelimiter', style: tags.processingInstruction },
  ],
  parseBlock: [{
    name: 'Table',
    leaf: (_, leaf) => hasPipe(leaf.content, 0) ? new TableParser() : null,
    endLeaf(cx, line, leaf) {
      if (leaf.parsers.some(p => p instanceof TableParser) || !hasPipe(line.text, line.basePos)) return false;
      const next = cx.peekLine();
      return delimiterLine.test(next) && parseRow(cx, line.text, line.basePos) === parseRow(cx, next, line.basePos);
    },
    before: 'SetextHeading',
  }],
};

const dialect = {
  defineNodes: [
    // The whole formula, down into its TeX.
    { name: 'InlineMath', style: { 'InlineMath/...': bananaTags.math } },
    { name: 'DisplayMath', block: true, style: { 'DisplayMath/...': bananaTags.math } },
    { name: 'MathMark', style: bananaTags.mathMark },
    { name: 'DisplayMathMark', style: bananaTags.structure },
    { name: 'MathContent' },
    { name: 'WikiLink', style: { 'WikiLink/...': bananaTags.wikiLink } },
    { name: 'WikiTarget' },
    // The target is shown only when there is no label: then it is grey, the label in the link blue.
    { name: 'WikiTargetBehindLabel', style: { 'WikiTargetBehindLabel/...': bananaTags.wikiTarget } },
    { name: 'WikiLabel' },
    { name: 'FrontMatter', block: true },
    { name: 'FrontMatterMark', style: tags.meta },
    'FrontMatterContent',
    { name: 'WikiMark', style: bananaTags.wikiMark },
    { name: 'Reference', style: bananaTags.reference },
    { name: 'ReferenceMark', style: bananaTags.referenceMark },
    'Tag',
    { name: 'TagMark', style: bananaTags.structure },
    { name: 'TagName', style: bananaTags.codeLanguage },
    { name: 'AttributeName', style: tags.propertyName },
    { name: 'AttributeValue', style: bananaTags.yamlValue },
    { name: 'EnvironmentFence', block: true, style: bananaTags.environment },
    {
      name: 'Footnote', block: true,
      composite(cx, line, value) {
        if (line.indent < line.baseIndent + value && line.next > -1) return false;
        line.moveBaseColumn(line.baseIndent + value);
        return true;
      },
    },
    { name: 'FootnoteMark', style: tags.labelName },
    {
      // As lezer's ordered lists: blank lines, the list's next items and what is indented into an item.
      name: 'LabelledList', block: true,
      composite(cx, line) {
        const block = cx.stack[line.depth];
        if (line.pos === line.text.length || (block !== cx.block && line.indent >= cx.stack[line.depth + 1].value + line.baseIndent)) return true;
        return line.indent < line.baseIndent + 4 && labelledSize(line) > 0;
      },
    },
    {
      name: 'LabelledItem', block: true,
      composite(cx, line, value) {
        if (line.indent < line.baseIndent + value && line.next > -1) return false;
        line.moveBaseColumn(line.baseIndent + value);
        return true;
      },
    },
    'PlainBracket',
    { name: 'EnvironmentMark', style: bananaTags.structure },
    { name: 'EnvironmentName', style: bananaTags.environmentName },
    { name: 'EnvironmentTitle', style: bananaTags.environmentTitle },
  ],
  // Block structure (list items, quotes, rules, code fences) apart from inline markup; a heading's # marks
  // stay with the markup.
  props: [styleTags({
    'ListMark QuoteMark HorizontalRule CodeMark': bananaTags.structure,
    // Backticks of inline code are inline markup. (Matched this way round: after a language mounted in a
    // fence, the fence's closing mark no longer matches FencedCode/CodeMark.)
    'InlineCode/CodeMark': tags.processingInstruction,
  })],
  parseInline: [inlineMath, wikiLink, footnoteReference, plainBracket, reference, tag],
  // A line starting with a tag (<align right>, <see>) is a paragraph's: as an HTML block it would hide the
  // Markdown that follows. (Comments are still read inline.)
  remove: ['HTMLBlock'],
  parseBlock: [frontMatter, displayMath, environmentFence, footnote, labelledList],
  wrap: parseMixed(node => node.name === 'MathContent' ? { parser: tex.parser }
    : node.name === 'CodeInfo' ? { parser: codeInfo.parser }
    : node.name === 'FrontMatterContent' ? { parser: yamlLanguage.parser } : null),
};

/** The language of a fenced code block, by the first word of its info string. */
function codeLanguage(info) {
  const name = info.toLowerCase();
  if (name === 'math' || name === 'tikz') return tex;
  if (name === 'latex' || name === 'tex') return texDocument;
  if (name === 'yaml' || name === 'terms' || name === 'bibliography') return yamlLanguage;
  if (name === 'markdown' || name === 'md') return bodyLanguage;
  return null;
}

let bodyLanguage;
const body = markdown({ base: commonmarkLanguage, extensions: [table, TaskList, Strikethrough, Autolink, dialect], codeLanguages: codeLanguage, completeHTMLTags: false });
bodyLanguage = body.language;
// Extensions' checks for the end of a paragraph come after the built-in ones; this one must come first.
body.language.parser.endLeafBlock.unshift(continueFormula);

/**
 * Folding beyond headings: the front matter (between its --- lines) and environments (from ::: name to the
 * line before their closing :::, nested ones counted; fences in code are not fences).
 */
const folding = foldService.of((state, lineStart, lineEnd) => {
  const line = state.doc.lineAt(lineStart);
  if (line.number === 1 && line.text === '---') {
    for (let number = 2; number <= Math.min(state.doc.lines, 500); number++) {
      if (state.doc.line(number).text !== '---') continue;
      return number > 2 ? { from: lineEnd, to: state.doc.line(number - 1).to } : null;
    }
    return null;
  }
  if (!/^[ \t]*(?:>[ \t]*)*:::[ \t]*\S/.test(line.text)) return null;
  const tree = ensureSyntaxTree(state, state.doc.length, 50);
  if (!tree) return null;
  for (let node = tree.resolveInner(lineEnd, -1); node; node = node.parent) if (node.name === 'FencedCode') return null;
  let depth = 0, close = null;
  tree.iterate({
    from: lineStart,
    enter: node => {
      if (close || node.name === 'FencedCode') return false;
      if (node.name !== 'EnvironmentFence') return;
      const opening = node.node.getChild('EnvironmentName') !== null;
      depth += opening ? 1 : -1;
      if (depth === 0) close = state.doc.lineAt(node.from);
      return false;
    },
  });
  return close && close.number > line.number + 1 ? { from: lineEnd, to: state.doc.line(close.number - 1).to } : null;
});

/** The dialect with its front matter: a LanguageSupport for the editor. */
export function bananaMarkdown() {
  return new LanguageSupport(body.language, [body.support, folding]);
}

/** The parser, for highlighting outside an editor (code blocks at build time, tests). */
export const bananaParser = bananaMarkdown().language.parser;

/**
 * CSS classes of the highlighting, shared by the editor and the site's code blocks (assets/scss/_highlight.scss).
 * Inside formulas, TeX's own tokens: commands, brackets, comments.
 */
export const bananaHighlighter = tagHighlighter([
  { tag: [tags.heading1, tags.heading2, tags.heading3, tags.heading4, tags.heading5, tags.heading6], class: 'hl-heading' },
  { tag: tags.strong, class: 'hl-strong' },
  { tag: tags.emphasis, class: 'hl-emphasis' },
  { tag: tags.strikethrough, class: 'hl-strikethrough' },
  { tag: [tags.processingInstruction, tags.contentSeparator], class: 'hl-mark' },
  { tag: tags.meta, class: 'hl-structure' }, // The front matter's --- lines.
  { tag: tags.escape, class: 'hl-escape' },
  { tag: tags.link, class: 'hl-link' },
  { tag: tags.url, class: 'hl-url' },
  { tag: [tags.labelName], class: 'hl-label' },
  { tag: tags.monospace, class: 'hl-code' },
  { tag: [tags.comment, tags.lineComment, tags.blockComment], class: 'hl-comment' },
  { tag: tags.quote, class: 'hl-quote' },
  { tag: bananaTags.math, class: 'hl-math' },
  { tag: bananaTags.mathMark, class: 'hl-math-mark' },
  { tag: bananaTags.wikiLink, class: 'hl-wiki' },
  { tag: bananaTags.wikiMark, class: 'hl-wiki-mark' },
  { tag: bananaTags.wikiTarget, class: 'hl-wiki-target' },
  { tag: bananaTags.yamlNumber, class: 'hl-number' },
  { tag: bananaTags.yamlValue, class: 'hl-yaml-value' },
  { tag: bananaTags.texEnvironment, class: 'hl-tex-environment' },
  { tag: bananaTags.codeLanguage, class: 'hl-code-language' },
  { tag: bananaTags.reference, class: 'hl-reference' },
  { tag: bananaTags.referenceMark, class: 'hl-reference-mark' },
  { tag: bananaTags.structure, class: 'hl-structure' },
  { tag: bananaTags.environment, class: 'hl-environment' },
  { tag: bananaTags.environmentName, class: 'hl-environment-name' },
  { tag: bananaTags.environmentTitle, class: 'hl-environment-title' },
  // TeX (texTokenizer) and YAML.
  { tag: [tags.tagName, tags.keyword], class: 'hl-command' },
  { tag: [tags.bracket, tags.squareBracket, tags.brace, tags.paren], class: 'hl-bracket' },
  { tag: [tags.number, tags.atom, tags.bool, tags.null], class: 'hl-atom' },
  { tag: [tags.propertyName, tags.definition(tags.propertyName)], class: 'hl-key' },
  { tag: [tags.string, tags.special(tags.string)], class: 'hl-string' },
  { tag: [tags.punctuation, tags.separator, tags.operator], class: 'hl-punctuation' },
  { tag: [tags.typeName, tags.variableName, tags.special(tags.variableName)], class: 'hl-variable' },
]);

/** Parsers of the code-block languages highlighted with the dialect's classes, by name. */
const codeParsers = {
  markdown: () => bananaParser, md: () => bananaParser,
  yaml: () => yamlLanguage.parser, terms: () => yamlLanguage.parser, bibliography: () => yamlLanguage.parser,
  latex: () => texDocument.parser, tex: () => texDocument.parser, math: () => tex.parser, tikz: () => tex.parser,
};
/** Whether code of this language is highlighted by highlightCodeHTML. */
export const highlightsLanguage = language => Object.hasOwn(codeParsers, language);

const escapeHTML = text => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
/** Code of one of the languages above as HTML: the text, escaped, with spans of the highlighting classes. */
export function highlightCodeHTML(code, language) {
  const tree = codeParsers[language]().parse(code);
  let html = '', last = 0;
  highlightTree(tree, bananaHighlighter, (from, to, classes) => {
    html += escapeHTML(code.slice(last, from)) + `<span class="${classes}">${escapeHTML(code.slice(from, to))}</span>`;
    last = to;
  });
  return html + escapeHTML(code.slice(last));
}
