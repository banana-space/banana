import { withLocale, problem, sourceError } from '../messages.mjs';
import { checkOptions, dialectOptions, withDialect } from '../dialect.mjs';
import { currentSyntax, withSyntax } from './switches.mjs';
import { katexError } from './katex-check.mjs';
import { normalizeTokens, trimOrdinary } from './typography.mjs';
import { mathDisplayText, mathKey } from './math-name.mjs';
import { blankLineAt, escaped, readMath, referenceStop, referenceTail, validReferenceName } from './scan.mjs';
import { brokenTagMessage, looksLikeTag, markdownParameters, readTag, tagNode, createTagRegistry } from './tags.mjs';
import { newDocument, nodeLink, nodeMarker, reservedNotation } from './nodes.mjs';

/**
 * The dialect's inline layer, shared by a page's structure (structure.mjs) and fragments (transformFragment).
 *
 * Text is read from left to right: code, HTML comments and authors' tags (converted to nodes) are protected first,
 * then links, formulas and references. In the Markdown it writes, formulas, wiki links, references and tags are
 * nodes (nodes.mjs), in the node table of the entry point (transformDocument, transformFragment). A readX function
 * gives { end, … } where it matches (end: where the match ends in the text, exclusive, for the caller to skip it
 * whole), and undefined elsewhere. Only Markdown is converted here: what a reference names is the caller's resolver's
 * to say, and nothing here numbers sections or reads files.
 */

export { escaped, readMath, validReferenceName };

/**
 * A reference @label or {@label} at start: { key, end } (end before punctuation of the text at its end). A bare
 * reference looks at what is before it, to leave e-mail addresses and URLs alone; ignoreEscape: read it even when
 * escaped (to protect escaped ones).
 */
export function readReference(text, start, { ignoreEscape = false } = {}) {
  if (!ignoreEscape && escaped(text, start)) return;
  if (text.startsWith('{@', start)) {
    const close = text.indexOf('}', start + 2);
    if (close < 0 || text.slice(start, close).includes('\n')) {
      return { end: start + 2, error: problem('reference_unclosed') };
    }
    return { end: close + 1, key: text.slice(start + 2, close) };
  }
  // An @ after a hyphen is a reference too (a range: @a-@b); after a letter, a digit and the like it is not (e-mail, URLs).
  if (text[start] !== '@' || (start > 0 && /[\p{L}\p{N}_@./%+\\]/u.test(text[start - 1]))) return;
  let end = start + 1;
  while (end < text.length && !referenceStop.test(text[end])) end++;
  const key = text.slice(start + 1, end).replace(referenceTail, '');
  if (!key) return;
  return { end: start + 1 + key.length, key };
}

/** A data field as literal text: Markdown, HTML and references in it escaped. */
export function markdownText(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\[/g, '&#91;').replace(/\]/g, '&#93;')
    .replace(/[\\`*_{}$!#]/g, '\\$&');
}

/** markdownText, but inline formulas ($…$, \(…\)) kept (a bibliography's titles and other data fields). */
export function markdownTextWithMath(value) {
  const source = String(value);
  let result = '', plain = '';
  for (let i = 0; i < source.length; i++) {
    const math = source[i] === '$' || source.startsWith('\\(', i) ? readMath(source, i) : undefined;
    if (math && !math.display) {
      result += markdownText(plain) + mathMarkdown(math);
      plain = '';
      i = math.end - 1;
    } else plain += source[i];
  }
  return result + markdownText(plain);
}

/** A formula in a name as linear text (math-name.mjs); wrong TeX is reported with the formula. */
function nameMath(tex, key) {
  try { return key ? mathKey(tex) : mathDisplayText(tex); }
  catch (error) { throw sourceError('', problem('math_invalid', { tex, message: error.message })); }
}

/**
 * What Goldmark's typographer (on in Hugo by default) makes of text (not CommonMark's missing << « and >> »): --- →
 * —, -- → –, ... → …, and straight quotes curly by what surrounds them: opening (‘ “) at the start, after a space, an
 * opening bracket or a dash and before something other than a space, closing (’ ”) otherwise (an apostrophe is ’ too:
 * l'Hôpital, Hilbert's, Bayes'). previous: the character before the text (after a formula: the formula's).
 */
export function typographer(text, previous = '') {
  const dashed = text.replace(/---/g, '—').replace(/--/g, '–').replace(/\.\.\./g, '…');
  let result = '';
  for (const char of dashed) {
    if (char === "'" || char === '"') {
      const next = dashed[result.length + 1] ?? '';
      const opening = (!previous || /[\s([{‘“–—]/u.test(previous)) && next && !/\s/u.test(next);
      result += char === "'" ? (opening ? '‘' : '’') : (opening ? '“' : '”');
    } else result += char;
    previous = char;
  }
  return result;
}

/** The text outside formulas typeset (typographer), formulas as written: a link's target as a new article's title, terms and translations. */
export function typesetText(value) {
  let result = '', start = 0;
  for (let i = 0; i < value.length;) {
    const math = readMath(value, i);
    if (!math) { i++; continue; }
    result += typographer(value.slice(start, i), start ? '$' : '') + value.slice(i, math.end);
    i = start = math.end;
  }
  return result + typographer(value.slice(start), start ? '$' : '');
}

/** A name's text (key: its matching key, normalizeTarget; otherwise as shown, plainName). */
function nameText(value, key) {
  const tokens = [];
  const append = text => {
    if (tokens.at(-1) && !tokens.at(-1).math) tokens.at(-1).text += text;
    else tokens.push({ text });
  };
  for (let i = 0; i < value.length;) {
    const math = readMath(value, i);
    if (math) {
      tokens.push({ text: nameMath(math.value, key), math: true });
      i = math.end;
    } else {
      append(value[i++]);
    }
  }
  for (const [index, token] of tokens.entries()) {
    if (token.math) continue;
    // Link text shows what Hugo's typographer makes of it ([[Auslander--Buchsbaum 公式]] reads
    // Auslander–Buchsbaum 公式), so the name and the key read the target the same way.
    token.text = typographer(token.text, index ? '$' : '');
    // Lookup keys accept both parenthesis styles; displayed captions stay verbatim.
    if (key) token.text = token.text.replace(/（/g, '(').replace(/）/g, ')');
  }
  // One rule for names whatever the page's language (an article's name is the same from every page): Chinese text's.
  normalizeTokens(tokens, { lang: 'zh-cn', spaceQuotes: true });
  const text = trimOrdinary(tokens.map(token => token.text).join('').normalize('NFC'));
  // Keys also accept any quotation marks, as titles are written either way. Single quotes become ’, the
  // apostrophe, since a key is also shown, as the alias a reader was redirected from.
  return key ? text.replace(/['‘]/g, '’').replace(/[“”]/g, '"') : text;
}

/**
 * The matching key of a name (an article's name or alias, a category, a link's target, a heading's anchor): formulas
 * as linear text, NFKC, without spaces in them ($H^1(X;\mathbb Z)$ → H^1(X;Z)); full-width parentheses as half-width
 * ones, single quotation marks all ’, double ones straight; -- as – (as the text's typographer makes it).
 */
export const normalizeTarget = value => nameText(value, true);

/** A name as plain text, shown (an HTML title, a missing article's name): $H^1(X;\mathbb Z)$ → H^1(X; ℤ). */
export const plainName = value => nameText(value, false);

// The three readers of code below give where the code ends, nothing converted.
function fencedCodeEnd(text, start) {
  // A fence may be in a quotation or a list; the closing fence is not shorter than the opening one.
  const fence = text.slice(start).match(/^([ \t]*(?:>[ \t]*)*(?:(?:[-+*]|\d+[.)])[ \t]+)?)(`{3,}|~{3,})[^\n]*(?:\n|$)/);
  if (!fence) return;
  const endPattern = new RegExp('^[ \\t]*(?:>[ \\t]*)*' + fence[2][0] + '{' + fence[2].length + ',}[ \\t]*\\r?$', 'gm');
  endPattern.lastIndex = start + fence[0].length;
  const end = endPattern.exec(text);
  // An unclosed fence protects the rest of the text, as in Markdown.
  return end ? end.index + end[0].length : text.length;
}

function indentedCodeEnd(text, start) {
  // Four spaces or a tab after a blank line are code (a paragraph's indented continuation lines are not).
  if (!/^(?: {4}|\t)/.test(text.slice(start, start + 4))) return;
  // The line before is blank: looked at backwards (a regular expression ending in $ on all the text before
  // would scan it whole at every line).
  if (start !== 0) {
    if (text[start - 1] !== '\n') return;
    const previous = text.lastIndexOf('\n', start - 2);
    if (previous < 0 || !/^[ \t]*$/.test(text.slice(previous + 1, start - 1))) return;
  }
  const block = text.slice(start).match(/^(?:(?: {4}|\t)[^\n]*(?:\n|$)|[ \t]*\n)+/);
  if (block) return start + block[0].length;
}

function inlineCodeEnd(text, start) {
  if (text[start] !== '`' || escaped(text, start)) return;
  // A code span closes with as many backticks as it opens with, within its paragraph (as in Markdown): otherwise a
  // stray backtick would make code of the formulas and links of the paragraphs after it.
  const ticks = text.slice(start).match(/^`+/)[0];
  const runs = /`+|\n/g;
  runs.lastIndex = start + ticks.length;
  let next;
  while ((next = runs.exec(text))) {
    if (next[0] === '\n') { if (blankLineAt(text, next.index)) return; continue; }
    if (next[0] === ticks) return next.index + ticks.length;
  }
}

function codeToken(text, start, indentedCode = true) {
  const lineStart = start === 0 || text[start - 1] === '\n';
  const blockEnd = lineStart ? fencedCodeEnd(text, start) ?? (indentedCode ? indentedCodeEnd(text, start) : undefined) : undefined;
  return blockEnd ?? inlineCodeEnd(text, start);
}

/**
 * The error, if a protected region (from start to end) does not end properly: a code block without its closing fence,
 * a comment without -->. Such a region would protect the rest of the page, its formulas, links and references not
 * converted, without an error.
 */
export function unclosedProtected(text, start, end) {
  if (text.startsWith('<!--', start)) return text.includes('-->', start + 4) ? undefined : problem('comment_unclosed');
  const fence = (start === 0 || text[start - 1] === '\n') && text.slice(start).match(/^([ \t]*(?:>[ \t]*)*(?:(?:[-+*]|\d+[.)])[ \t]+)?)(`{3,}|~{3,})[^\n]*(?:\n|$)/);
  if (fence) {
    const close = new RegExp('^[ \\t]*(?:>[ \\t]*)*' + fence[2][0] + '{' + fence[2].length + ',}[ \\t]*\\r?$', 'm');
    if (!close.test(text.slice(start + fence[0].length, end))) return problem('fence_unclosed', { fence: fence[2] });
  }
}

/** Where a region kept as written (code, a comment, a tag, an autolink) at start ends; the structure's scan and the inline layer protect alike. */
export function protectedToken(text, start, { indentedCode = true } = {}) {
  const code = codeToken(text, start, indentedCode);
  if (code) return code;
  if (text.startsWith('<!--', start)) {
    const end = text.indexOf('-->', start + 4);
    return end < 0 ? text.length : end + 3;
  }
  if (text[start] === '<') {
    // A tag (an author's, or any other: transformMarkup reports those), or an autolink. Bounded (under a
    // thousand characters): read at every "<", unbounded patterns over text full of unclosed tags would take
    // quadratic time.
    const tag = readTag(text, start);
    if (tag) return tag.end;
    const other = text.slice(start, start + 1000).match(/^<\/?[A-Za-z][^>]*>|^<[^\s<>]+(?:@|:\/\/)[^<>]*>/);
    if (other) return start + other[0].length;
  }
}

/** A wiki link [[target]] or [[target|text]] ([[target\|text]] in a table) at start, its target normalized; bars and ]] in formulas are not its. */
export function readWiki(text, start) {
  if (!text.startsWith('[[', start) || escaped(text, start)) return;
  let separator, targetEnd;
  // At most three hundred characters (links are far shorter): read at every "[[",
  // an unbounded scan of a long line full of them would take quadratic time.
  for (let i = start + 2; i < text.length && i < start + 300;) {
    const math = readMath(text, i);
    if (math) { i = math.end; continue; }
    if (text[i] === '\n') return;
    if (text.startsWith(']]', i) && !escaped(text, i)) {
      const target = text.slice(start + 2, targetEnd ?? i);
      const label = separator === undefined ? target : text.slice(separator + 1, i);
      if (!target.trim() || !label.trim()) return;
      return { end: i + 2, target: normalizeTarget(target), name: plainName(target), source: typesetText(target.trim()), label, customLabel: separator !== undefined };
    }
    // In a table the separator is written \| (a GFM table's escaped bar), a separator too.
    if (text[i] === '|' && separator === undefined) {
      separator = i;
      targetEnd = escaped(text, i) ? i - 1 : i;
    }
    i++;
  }
}

/**
 * An ordinary Markdown link or image at start: its address or reference id as written, its text converted (formulas;
 * no wiki links in it, which would nest links).
 */
export function readMarkdownLink(text, start) {
  const image = text.startsWith('![', start);
  const begin = start + (image ? 1 : 0);
  if (text[begin] !== '[' || text.startsWith('[[', begin) || escaped(text, start)) return;
  // The text and the address each at most five hundred characters (far more than links need): read at every "[", unbounded scans of text full of brackets would take quadratic time.
  const limit = 500;
  let depth = 1;
  let i = begin + 1;
  for (; i < text.length && i < begin + limit; i++) {
    const math = readMath(text, i);
    if (math) { i = math.end - 1; continue; }
    const code = codeToken(text, i);
    if (code) { i = code - 1; continue; }
    if (escaped(text, i)) continue;
    if (text[i] === '[') depth++;
    if (text[i] === ']' && --depth === 0) break;
  }
  if (depth !== 0) return;
  const label = text.slice(begin + 1, i);
  let end = i + 1;
  if (text[end] === '(') {
    let parentheses = 1;
    let quote = '';
    const stop = end + limit;
    for (end++; end < text.length && end < stop; end++) {
      if (escaped(text, end)) continue;
      if (quote) { if (text[end] === quote) quote = ''; continue; }
      if ((text[end] === '"' || text[end] === "'") && /\s/.test(text[end - 1])) { quote = text[end]; continue; }
      if (text[end] === '(') parentheses++;
      if (text[end] === ')' && --parentheses === 0) { end++; break; }
    }
    if (parentheses !== 0) return;
  } else if (text[end] === '[') {
    const close = text.indexOf(']', end + 1);
    if (close < 0 || close > end + limit) return;
    end = close + 1;
  } else return;
  return {
    end,
    label, // The text as written, which a heading's id is made from too (not the address).
    reference: !image && /^\(@[^\s]*\)$/.test(text.slice(i + 1, end)) ? text.slice(i + 3, end - 1) : undefined,
    // Converted when asked for (the structure's scan reads links only to pass them).
    get output() { return `${image ? '!' : ''}[${transformMarkup(label, [], { wiki: false })}]${text.slice(i + 1, end)}`; },
  };
}
/** A formula's node marker; an empty one (\[\], $$$$, $ $) leaves nothing (the passthrough would leave its delimiters). */
function mathMarkdown(math) {
  if (!math.value.trim()) return '';
  // A node: the Markdown has its number only, so that its TeX (an inner $, backslashes) is not read again.
  // A display formula's TeX without the layout of its lines (indentation, the line breaks around it), which TeX
  // ignores: the page (data-tex, the TikZ cache) does not change when the source is reformatted.
  const tex = math.display ? math.value.replace(/^[ \t]+/gm, '').trim() : math.value;
  return nodeMarker({ type: 'math', tex, display: math.display });
}

/** A wiki link's Markdown; the structure's layer may give a caption, for references in the link's text. */
function wikiMarkdown(wiki, position, options) {
  const resolved = options.resolveWiki?.(wiki, position);
  // Literal brackets escaped: the text must not become another Markdown link.
  const label = transformMarkup(resolved?.label ?? wiki.label, [], { wiki: false })
    .replace(/(?<!\\)[\[\]]/g, '\\$&');
  // target is the lookup key; name is how a missing article is shown; source is the target as written
  // (with its TeX, the text outside it typeset: O'Nan → O’Nan), the title of the article should someone create it.
  const source = wiki.source && wiki.source !== wiki.name ? wiki.source : undefined;
  return nodeLink(label, { type: 'wiki', target: wiki.target, name: wiki.name, source, caption: resolved?.caption });
}

/** A reference, by the page's resolver; text with links of its own is the node's caption, rendered on its own (no nested links). */
function referenceMarkdown(key, position, options, customLabel) {
  const resolved = options.resolveReference(key, position, customLabel);
  const label = transformMarkup(resolved.label, [], { wiki: false })
    .replace(/(?<!\\)[\[\]]/g, char => char === '[' ? '&#91;' : '&#93;');
  // Entities, not \[: the text written must not open a formula again.
  return nodeLink(label, resolved.node);
}

/**
 * A TikZ fence's caption (```tikz {caption="…"}) is the page's text: its formulas, links and references are converted,
 * and it becomes a caption node after the language (```tikz @@node:N:node@@).
 */
function tikzCaption(code, start, extensions, options) {
  return code.replace(/^([ \t]*(?:>[ \t]*)*(?:(?:[-+*]|\d+[.)])[ \t]+)?(?:`{3,}|~{3,})[ \t]*tikz)[ \t]*\{[^\n]*?\bcaption="([^"\n]*)"[^\n]*?\}[ \t]*(?=\n|$)/,
    // The quotes as entities, which the typographer leaves straight, as when the caption was an attribute's value.
    (match, head, caption) => {
      const offset = start + match.indexOf(`caption="${caption}"`) + 'caption="'.length;
      return `${head} ${nodeMarker({ type: 'caption', text: transformMarkup(caption, extensions, within(options, offset)).replace(/"/g, '&quot;') })}`;
    });
}

/**
 * options for a text at offset in the text they serve (a TikZ caption, a tag's Markdown parameter): the places their
 * functions are given moved by offset, and no code blocks in it.
 */
function within(options, offset) {
  const { resolveWiki, resolveReference, fail } = options;
  return {
    ...options, blockCodeEnd: undefined, indentedCode: false,
    ...(resolveWiki && { resolveWiki: (wiki, i) => resolveWiki(wiki, offset + i) }),
    ...(resolveReference && { resolveReference: (key, i, label) => resolveReference(key, offset + i, label) }),
    ...(fail && { fail: (message, i) => fail(message, offset + i) }),
  };
}

const flankingSpace = /\s/u;
// CommonMark's punctuation: Unicode's punctuation and symbols.
const flankingPunctuation = /[\p{P}\p{S}]/u;
/**
 * "**" at i (not "*" or "***"), as the opening or the closing of bold text (strong: whether one is open, the runs
 * of a paragraph taken in turn): { output, strong }. CommonMark's flanking rules keep a run between a letter and
 * punctuation from opening or closing, as in 文字**[[链接]]**文字 (its "[" and the link's ")"), and written so the
 * bold would not show; a space beside it makes it one (typography takes the space next to Chinese away again).
 * A run between spaces is neither, and left alone.
 */
/** Whether "**" comes again before the end of the paragraph (from i). */
function closes(text, i) {
  const end = text.slice(i).search(/\n[ \t>]*\n/);
  return text.slice(i, end < 0 ? undefined : i + end).includes('**');
}
function strongRun(text, i, result, strong) {
  if (!text.startsWith('**', i) || text[i - 1] === '*' || text[i + 2] === '*' || escaped(text, i)) return;
  const before = result.match(/[\s\S]$/u)?.[0] ?? ' ', after = text.slice(i + 2).match(/^[\s\S]/u)?.[0] ?? ' ';
  const space = char => flankingSpace.test(char), mark = char => flankingPunctuation.test(char);
  if (space(before) && space(after)) return { output: '**', strong };
  // Opening: not before punctuation unless after a space or punctuation. Closing: not after punctuation unless
  // before a space or punctuation.
  // A run with no other after it in its paragraph is text, as written.
  if (!strong) return { output: !space(after) && mark(after) && !space(before) && !mark(before) && closes(text, i + 2) ? ' **' : '**', strong: true };
  return { output: !space(before) && mark(before) && !space(after) && !mark(after) ? '** ' : '**', strong: false };
}

/**
 * A text of the dialect without the structure of a page (no sections, environments, labels or bibliographies;
 * formulas, wiki links and authors' tags): the document, { markdown, nodes } (nodes.mjs). Options: the dialect (or
 * its settings: tags, katex, rewriteMath, wikiLinks, tikz, bibliography, messages), errors in locale, the text it
 * writes in the messages of lang (as transformDocument's), and checkMath (each formula checked with KaTeX); no others.
 * An error has the line and column in the text.
 */
export function transformFragment(text, given = {}) {
  checkOptions(given, [...dialectOptions, 'dialect', 'locale', 'lang', 'checkMath'], 'transformFragment');
  const { locale, lang, messages, wikiLinks, tikz, bibliography, tags, katex, rewriteMath, checkMath = false } = withDialect(given);
  const fail = (message, offset = 0) => {
    const before = text.slice(0, offset);
    throw sourceError('', message, { line: before.split('\n').length, column: offset - before.lastIndexOf('\n') });
  };
  const options = {
    tags, fail,
    ...(checkMath ? { checkMath: (tex, display) => { const error = katexError(tex, display, { katex, rewriteMath, tikz }); return error && problem('katex', { message: error }); } } : {}),
  };
  return withLocale(locale, lang, () => withSyntax({ wikiLinks, tikz, bibliography, katex }, () => {
    const reserved = reservedNotation(text);
    if (reserved) fail(reserved.message, reserved.offset);
    return newDocument(() => transformMarkup(text, [], options));
  }), messages);
}

/**
 * The inline layer on text (its nodes go to the entry point's table, nodes.mjs; outside a page, transformFragment).
 * options: wiki: false, no wiki links; resolveWiki(wiki, offset): a wiki link's caption; resolveReference(key, offset,
 * customLabel): what a reference names (without it, @ is text); fail(message, offset); checkMath(tex, display); tags:
 * the HTML-style tags a page may use (tags.mjs's createTagRegistry), otherwise those of the call it is in (text
 * converted within a link's, say). extensions: functions (text, offset) → { end, output } taking a piece whole; new
 * syntax goes after what protects code, and must move forward (or code would change, or the scan loop).
 */
export function transformMarkup(text, extensions = [], options = {}) {
  const previous = activeTags;
  activeTags = options.tags ? createTagRegistry(options.tags) : activeTags;
  try { return markup(text, extensions, options); } finally { activeTags = previous; }
}

// The tags of the transformMarkup call under way, for the calls nested in it.
let activeTags;

function markup(text, extensions, options) {
  let result = '';
  let strong = false; // Within **…** in this paragraph (see strongRun).
  for (let i = 0; i < text.length;) {
    const blockEnd = options.blockCodeEnd?.(i);
    const protectedEnd = blockEnd ?? protectedToken(text, i, { indentedCode: options.indentedCode !== false });
    // An author's tag becomes its node; other HTML is not for pages (raw HTML is not output).
    if (protectedEnd && blockEnd === undefined && text[i] === '<' && (readTag(text, i) || looksLikeTag(text, i))) {
      const tag = readTag(text, i);
      const read = tag ? tagNode(tag, activeTags) : { error: brokenTagMessage(text, i, activeTags) };
      if (read.error) {
        if (options.fail) options.fail(read.error, i);
        throw sourceError('', read.error);
      }
      // Also across a line break (a formatter may put the tag on a line of its own).
      if (read.attached) result = result.replace(/[ \t]*(?:\n[ \t>]*)?$/, '');
      // A parameter of the page's text (markdown: true) is converted as the page's text is, for the tag's render to
      // give to fragment.
      for (const key of markdownParameters(read.node.name, activeTags)) {
        const attribute = tag.attributes.find(attribute => attribute.key === key);
        if (attribute === undefined) continue;
        const start = attribute.valueFrom + (/["']/.test(text[attribute.valueFrom]) ? 1 : 0);
        read.node.parameters.named[key] = transformMarkup(attribute.value, [], within(options, start));
      }
      result += nodeMarker(read.node);
      i = protectedEnd;
      continue;
    }
    if (protectedEnd) {
      result += currentSyntax().tikz ? tikzCaption(text.slice(i, protectedEnd), i, extensions, options) : text.slice(i, protectedEnd);
      i = protectedEnd;
      continue;
    }
    if ((i === 0 || text[i - 1] === '\n') && /^ {0,3}\[(?!\^)[^\]\n]+\]:/.test(text.slice(i))) {
      // [id]: URL defines a reference link: nothing in its address is converted (a footnote's text, [^1]:, is).
      const end = text.indexOf('\n', i);
      const stop = end < 0 ? text.length : end;
      result += text.slice(i, stop);
      i = stop;
      continue;
    }
    const markdownLink = readMarkdownLink(text, i);
    if (markdownLink) {
      result += markdownLink.reference !== undefined && options.resolveReference
        ? referenceMarkdown(markdownLink.reference, i, options, markdownLink.label)
        : markdownLink.output;
      i = markdownLink.end;
      continue;
    }
    const math = readMath(text, i);
    if (math) {
      // checkMath: each formula checked with KaTeX (katex-check.mjs), for an editor's checks.
      const problem = options.checkMath?.(math.value, math.display);
      if (problem) options.fail(problem, i);
      result += mathMarkdown(math);
      i = math.end;
      continue;
    }
    // A formula that does not close by the end of its paragraph: report it, rather than let it be text whose
    // remaining delimiters pair up wrongly. (Literal dollars are written \$, a bracket after a backslash
    // &#91;; \[@ is an escaped bracket before a citation.) Only where errors have a place.
    if (options.fail && /^(?:\$|\\\(|\\\[(?![ \t]*\{?@))/.test(text.slice(i, i + 8)) && !escaped(text, i)) {
      options.fail(problem('formula_unclosed', { formula: text.slice(i, i + 12).split('\n')[0] }), i);
    }
    const wiki = options.wiki === false || !currentSyntax().wikiLinks ? undefined : readWiki(text, i);
    if (wiki) {
      if (!wiki.target) throw sourceError('', problem('wiki_target_empty', { target: text.slice(i, wiki.end) }));
      result += wikiMarkdown(wiki, i, options);
      i = wiki.end;
      continue;
    }
    if (options.resolveReference) {
      if (escaped(text, i) && text.startsWith('{@', i)) {
        const literal = readReference(text, i, { ignoreEscape: true });
        if (literal && !literal.error) {
          result += text.slice(i, literal.end);
          i = literal.end;
          continue;
        }
      }
      // Anywhere in the text, also in brackets: [@a, 定理 1; @b 等] is text around two citations.
      const reference = readReference(text, i);
      if (reference) {
        if (reference.error) {
          if (options.fail) options.fail(reference.error, i);
          throw sourceError('', reference.error);
        }
        result += referenceMarkdown(reference.key, i, options);
        i = reference.end;
        continue;
      }
    }
    let custom;
    for (const extension of extensions) {
      custom = extension(text, i);
      if (custom) break;
    }
    if (custom) {
      if (!Number.isInteger(custom.end) || custom.end <= i) throw sourceError('', problem('extension_progress'));
      result += custom.output;
      i = custom.end;
      continue;
    }
    const run = strongRun(text, i, result, strong);
    if (run) {
      result += run.output;
      strong = run.strong;
      i += 2;
      continue;
    }
    if (text[i] === '\n' && blankLineAt(text, i)) strong = false;
    result += text[i++];
  }
  return result;
}
