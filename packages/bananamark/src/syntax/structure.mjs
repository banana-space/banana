import { defaultNumbering, nextNumber, numbering as numberingConfig, pageNumbering } from './numbering.mjs';
import { currentContentLocale, t, withLocale, problem, sourceError, guarded } from '../messages.mjs';
import { katexError } from './katex-check.mjs';
import { checkOptions, dialectOptions, withDialect } from '../dialect.mjs';
import { looksLikeTag, readTag, createTagRegistry } from './tags.mjs';
import { labelledMarkerSource } from './scan.mjs';
import { escaped, protectedToken, readMath, readMarkdownLink, readWiki, normalizeTarget, transformMarkup, typographer, validReferenceName, markdownText, unclosedProtected } from './markup.mjs';
import { withSyntax } from './switches.mjs';
import { readBibliography, prepareBibliography, bibliographyMarkdown, bibliographyData } from './bibliography.mjs';
import { MARK_OPEN, encodeLine } from './source-lines.mjs';
import { readDataBlock, checkDataBlocks } from './data-blocks.mjs';
import { blockStart, movedLabelStart, parseLists } from './lists.mjs';
import MarkdownIt from 'markdown-it';
import { normalizeTokens } from './typography.mjs';
import { checkEnvironments, environmentName, resolveEnvironments } from './environments.mjs';
import { inspectDocument, describeMarkdown, newDocument, nodeMarker, reservedNotation } from './nodes.mjs';
import { parseAttributeList } from '../markdown/attributes.mjs';

/**
 * The dialect's layer on a page: its structure (sections, theorem-like environments, numbered formulas,
 * bibliographies, data blocks) and its references. A first pass collects them and their labels, recording the spans
 * of the source to replace; a second resolves references (forward ones too) and writes the document (Markdown and
 * its node table, nodes.mjs) with the page's data. References in headings' text are resolved here; the renderer
 * writes the HTML.
 */

// Headings' text as CommonMark reads it (markdown-it without the renderer's extensions, which would change the
// text ids are made of: the typographer, linkify).
const headingParser = new MarkdownIt('commonmark');
/** The inline tokens of a Markdown document, in order. */
const inlineTokens = markdown => headingParser.parse(markdown, {}).flatMap(token => token.type === 'inline' ? token.children : []);
// A line starting with a labelled list item's marker (after container markers): a setext heading's text ends before it.
const labelledLine = new RegExp(`^ {0,3}${labelledMarkerSource}`);

/** A heading's trailing * (unnumbered) may stand against its text; a * closing Markdown emphasis is the text's. */
function stripHeadingStar(value) {
  const title = value.trimEnd();
  if (!title.endsWith('*') || escaped(title, title.length - 1)) return { title, unnumbered: false };
  const last = inlineTokens(`# ${title}`).filter(token => token.type !== 'text' || token.content).at(-1);
  if (last?.type === 'em_close' || last?.type === 'strong_close') return { title, unnumbered: false };
  return { title: title.slice(0, -1).trimEnd(), unnumbered: true };
}

/**
 * The text of a heading its id is made from, as tokens: a link's text, a formula's key (normalizeTarget: H^1(X;Z));
 * $ and backslashes in code are literal, not formulas. Not a Markdown renderer: the renderer (../render/) writes the
 * heading's HTML.
 */
function headingTokens(value, initialLang = 'en') {
  const tokens = [];
  let lang = initialLang;
  const languages = [];
  const append = (text, extra = {}) => tokens.push({ text, lang, ...extra });
  for (let i = 0; i < value.length;) {
    const protectedEnd = protectedToken(value, i);
    if (protectedEnd) {
      const token = value.slice(i, protectedEnd);
      // <lang de>…</lang> sets the language of what it holds.
      const tag = readTag(token, 0);
      if (tag && !tag.closing && tag.name === 'lang') {
        languages.push(lang);
        lang = tag.attributes[0]?.key ?? lang;
      } else if (tag?.closing && tag.name === 'lang' && languages.length) lang = languages.pop();
      if (token.startsWith('`')) {
        append(token.replace(/^`+|`+$/g, ''), { opaque: true });
      }
      i = protectedEnd;
      continue;
    }
    const math = readMath(value, i);
    if (math) {
      append(normalizeTarget(value.slice(i, math.end)), { math: true });
      i = math.end;
      continue;
    }
    const link = readWiki(value, i) ?? readMarkdownLink(value, i);
    if (link) {
      tokens.push(...headingTokens(link.label, lang));
      i = link.end;
      continue;
    }
    // An HTML entity (named or numeric) as the character it shows: its name is not in the id.
    if (value[i] === '&') {
      const entity = value.slice(i).match(/^&(?:#x[0-9a-f]+|#\d+|[a-z][a-z0-9]*);/i)?.[0];
      if (entity) {
        append(headingParser.parseInline(entity, {})[0]?.children[0]?.content ?? entity);
        i += entity.length;
        continue;
      }
    }
    if (value[i] === '\\' && /[!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~]/.test(value[i + 1] ?? '')) {
      i++; // A Markdown escape: the backslash is not shown.
    }
    append(value[i++]);
  }
  return tokens;
}

/** A heading's text as its id is made from it: Markdown emphasis taken out, typeset (lang, spaceQuotes). */
function headingText(value, lang, spaceQuotes) {
  const sourceTokens = headingTokens(value, lang);
  // Strip Markdown emphasis before spacing. Math/code and language switches
  // use private markers so Markdown never interprets their contents.
  const markers = new Map();
  let counter = 0, activeLang = lang, markdown = '';
  const marker = data => {
    let character;
    do { character = String.fromCodePoint(0xf0000 + counter++); } while (value.includes(character));
    markers.set(character, data);
    return character;
  };
  for (const token of sourceTokens) {
    if (token.lang !== activeLang) { markdown += marker({ lang: token.lang }); activeLang = token.lang; }
    markdown += token.math || token.opaque ? marker({ token }) : token.text.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  }
  const tokens = [];
  activeLang = lang;
  for (const node of inlineTokens(markdown)) {
    const literal = node.type === 'softbreak' ? ' ' : ['text', 'code_inline'].includes(node.type) ? node.content : '';
    for (const character of literal) {
      const data = markers.get(character);
      if (data?.token) tokens.push(data.token);
      else if (data) activeLang = data.lang;
      else tokens.push({ text: character, lang: activeLang });
    }
  }
  // Merge adjacent literal tokens before calculating visible spacing for IDs.
  const merged = [];
  for (const token of tokens) {
    if (!token.math && !token.opaque && merged.at(-1) && !merged.at(-1).math && !merged.at(-1).opaque && merged.at(-1).lang === token.lang) merged.at(-1).text += token.text;
    else merged.push(token);
  }
  normalizeTokens(merged, { lang, spaceQuotes });
  return merged.map(token => token.text).join('');
}

/**
 * A heading's id, before like ones are told apart (uniqueHeadingId, on each page). To change how ids are made,
 * change this function.
 *
 * 1. Formulas as their Unicode text ($\infty$ → ∞).
 * 2. Diacritics removed (NFD, the marks dropped, NFC again: ü → u, é → e).
 * 3. -- as – (as the text's typographer makes it), then en dashes (–) as ASCII hyphens (-); letters in lower case.
 * 4. Punctuation of formatting removed; Han, letters, digits and mathematical symbols kept; spaces as -.
 * lang: the page's language (default en); typography: its options (typography.mjs): ids are made from headings as
 * typeset, the full stop not converted.
 */
export function headingId(title, { lang = 'en', typography } = {}) {
  return typographer(headingText(title, lang, typography?.spaceQuotes ?? false))
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .normalize('NFC')
    .replace(/–/g, '-')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\p{S}\s_-]/gu, '')
    // ASCII symbols out: ids were written in Goldmark's {#…} attribute, which they broke, and stay as they were.
    .replace(/[$+<=>^`|~]/g, '')
    .trim()
    .replace(/\s+/gu, '-') || 'heading';
}

/**
 * The dialect's layer on a page (see above): the document { markdown, nodes, meta } (nodes.mjs), meta being the
 * page's data: labels (those declared, { name, anchor, kind, line }), bibliography (its entries as data, citations
 * told apart), data (what the data blocks read, data-blocks.mjs), headingTitles (anchor → the heading's document, for
 * a table of contents), sectionNumbers (anchor → the number the contents and the text share; '' for an unnumbered
 * section), wikiLinks (each [[link]], { target, line, column }, columns from 1).
 *
 * In two passes: the first collects labels and numbers and records edits, the second writes the text. An edit's
 * start and end are offsets in the source as written and its output is written in the second pass, so that
 * references forward resolve and errors name the source's lines, whatever nodes and formulas replace.
 *
 * Options (documentOptions; others are an error):
 * - the dialect (dialect, from defineDialect, or its settings): environments (kind → { name, group, numbered }, or
 *   false to remove one, over default-environments.mjs), dataBlocks (fence name → { read(source, { lang, fail }),
 *   outsideEnvironments }, data-blocks.mjs), tags (name → a tag, tags.mjs, over bananamark's <lang>; false removes
 *   one), messages (../messages.mjs), katex and rewriteMath (as the renderer's: formulas checked with checkMath),
 *   tikz, wikiLinks, bibliography;
 * - lang: the page's language (default en), which its typography, heading ids and the text written in it (reference
 *   text, environment names) follow; locale: the language of errors (default en); typography: its options
 *   (typography.mjs: spaceQuotes…; heading ids are made from headings as typeset);
 * - file and lineOffset: where errors are (the page's file, and the lines before its body, front matter);
 * - checkMath: each formula checked with KaTeX; allowH1: first-level headings allowed (default true); pageAnchor:
 *   the page has a title of its own (the anchor page-title, which headings then do not take);
 *   formatSectionReference(number, depth): a numbered section's reference text; resolvePersonLink(name): the link of
 *   a bibliography's author without a page field, { target } (a wiki link) or { url }, or none;
 * - the page: key (what references from other pages name), title (its title, Markdown, shown where its {@label} is
 *   referred to), number, depth: with key or title, a {@label} at the start of the body is the page's; numbering:
 *   how it is numbered (numbering.mjs's format), otherwise sections and environments within the page.
 * A book's pages: book.mjs.
 */
export function transformDocument(source, given = {}) {
  checkOptions(given, documentOptions, 'transformDocument');
  return transformPage(source, given);
}

/** The options transformDocument takes. */
export const documentOptions = [
  ...dialectOptions, 'dialect', 'lang', 'locale', 'typography', 'checkMath', 'allowH1', 'pageAnchor', 'formatSectionReference',
  'resolvePersonLink', 'file', 'lineOffset', 'key', 'title', 'number', 'depth', 'numbering',
];

/**
 * transformDocument with what only a book gives (book.mjs), its options unchecked: book.page (the page's key, title
 * and place), book.numbers (its numbering among the book's), book.context (the labels, bibliography and references
 * the book's pages share), and book.prepareOnly (a function that gives the document later, once every page is in).
 */
export function transformPage(source, given = {}, book = {}) {
  const options = withDialect(given);
  // Errors in options.locale; the page's text (reference text, environment names) in its language, options.lang.
  const syntax = { wikiLinks: options.wikiLinks, tikz: options.tikz, bibliography: options.bibliography, katex: options.katex };
  return withLocale(options.locale, options.lang, () => withSyntax(syntax, () => {
    const { finish, meta } = transform(source, options, book);
    const document = () => ({ ...newDocument(finish), meta });
    // The rendering prepareOnly leaves for later runs in these too, its nodes in a table of its own.
    return book.prepareOnly ? () => withLocale(options.locale, options.lang, () => withSyntax(syntax, document), options.messages) : document();
  }), options.messages);
}

function transform(source, { file = String(problem('body_name')), lang = 'en', lineOffset = 0, dataBlocks = {}, tags, resolvePersonLink, formatSectionReference, allowH1 = true, pageAnchor = false, checkMath = false, katex, rewriteMath, tikz = false, wikiLinks = false, bibliography: bibliographyBlocks = false, environments: givenEnvironments, typography, key, title, number: pageNumber, depth, numbering } = {}, { context, page: given, numbers: givenNumbers } = {}) {
  // The page's data, filled as it is read (wiki links) and when it is finished (see transformDocument).
  const meta = { labels: [], bibliography: [], data: {}, headingTitles: {}, sectionNumbers: {}, wikiLinks: [] };
  const environments = resolveEnvironments(givenEnvironments);
  checkEnvironments(environments);
  checkDataBlocks(dataBlocks, { tikz, bibliography: bibliographyBlocks });
  const pageTags = createTagRegistry(tags);
  const page = given ?? (key !== undefined || title !== undefined ? { key, title: title ?? '', number: pageNumber ?? '', depth: depth ?? 0, vector: [] } : undefined);
  const numbers = givenNumbers ?? (numbering === undefined ? undefined
    : pageNumbering(page ?? { key: key ?? '', vector: [] }, numberingConfig(numbering, { ...defaultNumbering, pages: false }, file)));
  const text = source.replace(/\r\n/g, '\n');
  // checkMath: each formula checked with KaTeX (an editor's checks; see katex-check.mjs).
  const katexProblem = (tex, display) => { const error = katexError(tex, display, { katex, rewriteMath, tikz }); return error && problem('katex', { message: error }); };
  const { items, labelled, problems: listProblems, codeBlocks, mathFences } = parseLists(text);
  const blockCodeEnd = offset => codeBlocks.find(([start, end]) => offset >= start && offset < end)?.[1];
  const edits = []; // Spans of the source to replace, not overlapping; sorted by where they start once list items are in.
  const labels = new Map(); // The page's labels: name → its kind, number, anchor and line.
  const registry = context?.labels ?? labels;
  const bibliography = []; // The entries of every bibliography block: cited and told apart together, written where each block is.
  const data = Object.fromEntries(Object.keys(dataBlocks).map(name => [name, []])); // Each data block's value, by name, in order.
  const headings = []; // The headings, their titles converted for the contents too (meta.headingTitles).
  const resolving = context?.resolving ?? new Set(); // The labels whose text is being written: a cycle of references is an error.
  const headingIds = new Set(pageAnchor ? ['page-title'] : []); // The ids headings on the page have taken.
  const stack = []; // The ::: environments not yet closed, the latest last.
  const openTags = []; // Paired HTML-style tags (<lang>…) not yet closed, the latest last: { name, start }.
  /** A paired tag at offset: opened, or closed in order. Its parameters are checked as it is converted. */
  function pairTag(offset) {
    const tag = readTag(text, offset);
    if (!tag || !Object.hasOwn(pageTags, tag.name) || !pageTags[tag.name].paired || tag.selfClosing) return;
    if (!tag.closing) { openTags.push({ name: tag.name, start: offset }); return; }
    const open = openTags.pop();
    if (!open) fail(problem('tag_unopened', { name: tag.name }), offset);
    if (open.name !== tag.name) fail(problem('tag_mismatched', { name: tag.name, open: open.name }), offset);
  }
  let section = 0; // Before the first numbered section, numbers have no section's part.
  let sectionPart = '';
  let theorem = 0; // Shared by every numbered environment (proofs are not numbered).
  let equation = 0; // Formulas counted on their own; both start again in each section.
  let newlines; // Where the text's newlines are, found when first needed: lines are counted by a search, not from the start.
  /** The line (with lineOffset) of offset; none: the text's last. */
  const lineAt = (offset = text.length) => {
    newlines ??= [...text.matchAll(/\n/g)].map(match => match.index);
    let low = 0, high = newlines.length;
    while (low < high) { const middle = (low + high) >> 1; if (newlines[middle] < offset) low = middle + 1; else high = middle; }
    return lineOffset + low + 1;
  };
  /** The column (from 1) of offset, on its line (lineAt). */
  const columnAt = (offset, line = lineAt(offset)) => offset - (newlines[line - lineOffset - 2] ?? -1);
  // The message carries the line; the error also carries the column (1-based), for editors to mark the spot.
  const fail = (message, offset) => {
    const line = lineAt(offset);
    const column = offset === undefined ? undefined : columnAt(offset, line);
    throw sourceError(`${file}:${line}: `, message, { file, line, column });
  };
  const reserved = reservedNotation(text);
  if (reserved) fail(reserved.message, reserved.offset);
  const objectNumber = ordinal => sectionPart ? `${sectionPart}.${ordinal}` : String(ordinal);
  /** A label in NFC; characters that would end a reference or break an attribute are an error. */
  function labelName(value, offset) {
    const name = value.normalize('NFC');
    if (!validReferenceName(name)) fail(problem('label_invalid', { value }), offset);
    return name;
  }
  /** Records a label with its target and where it is; one label for one target, whatever their kinds. */
  function register(value, target, offset) {
    if (!value) return;
    const name = labelName(value, offset);
    const line = lineAt(offset);
    const previous = registry.get(name);
    if (previous) {
      // List items are recorded after the rest: the error names the later of the two in the source.
      if (previous.file && previous.file !== file) fail(problem('label_duplicate_elsewhere', { name, first: previous.line ? `${previous.file}:${previous.line}` : previous.file }), offset);
      const firstLine = previous.offset < offset ? previous.line : line;
      fail(problem('label_duplicate', { name, line: firstLine }), Math.max(previous.offset, offset));
    }
    const record = { ...target, offset, line, file, page: page?.key, render };
    labels.set(name, record);
    registry.set(name, record);
  }
  /** A heading's id, from its text; a like one gets -1, -2…, checked against every id taken (a heading may be "X-1"). */
  const nextSuffix = new Map(); // The next suffix to try for an id, so that many like headings stay linear.
  function uniqueHeadingId(title) {
    const base = headingId(title, { lang, typography });
    let id = base, suffix = nextSuffix.get(base) ?? 1;
    if (headingIds.has(id)) { while (headingIds.has(`${base}-${suffix}`)) suffix++; id = `${base}-${suffix}`; nextSuffix.set(base, suffix + 1); }
    headingIds.add(id);
    return id;
  }
  /** Records a wiki link's target with its line and column (from 1), once for each place. */
  const wikiLinkPlaces = new Set();
  function reportWikiLink(target, offset) {
    if (offset === undefined) return;
    const line = lineAt(offset), column = columnAt(offset, line);
    const place = `${line}:${column}:${target}`;
    if (wikiLinkPlaces.has(place)) return;
    wikiLinkPlaces.add(place);
    meta.wikiLinks.push({ target, line, column });
  }
  /** A wiki link: its target recorded, [[page@label]] (kept for references across pages) an error, its text converted. */
  function resolveWiki(wiki, offset) {
    if (wiki.target.includes('@')) fail(problem('cross_page_reference'), offset);
    reportWikiLink(wiki.target, offset);
    const caption = render(wiki.label, offset);
    // Rendered on its own when it holds what the link's text cannot (a reference, a link).
    if (describeMarkdown(caption) !== inspectDocument(newDocument(() => transformMarkup(wiki.label, [], { wiki: false, tags: pageTags })))) {
      return { caption, label: 'wiki' };
    }
  }
  /**
   * A reference (@label, {@label}, [text](@label)) to a label of the page or the book: { label (the link's text), node
   * (a reference or a citation) }. Text of its own, and an unnumbered heading's, is converted as a caption of its own,
   * so that links do not nest in the link's text.
   */
  function resolveReference(value, offset, customLabel) {
    // @-label shows the number alone (“第一同构定理（@-x）” reads “第一同构定理（1.2）”).
    let numberOnly = value.startsWith('-') && customLabel === undefined;
    const name = labelName(numberOnly ? value.slice(1) : value, offset);
    const target = registry.get(name);
    if (!target) fail(problem('label_missing', { name }), offset);
    // A labelled list item's reference text is its number: (a), 2 (a).
    if (target.kind === 'item' && target.label !== undefined) numberOnly = false;
    // A heading's label is not its id: a reference goes to its anchor; to other targets, to the label.
    const id = target.anchor ?? name;
    // The key of the page it is on, when that is another page of the book.
    const onPage = target.page && target.page !== page?.key ? target.page : undefined;
    if (numberOnly) {
      if (target.kind === 'bibliography' || !target.number) fail(problem('reference_number_missing', { name }), offset);
      return { node: { type: 'reference', id, page: onPage }, label: markdownText(String(target.number)) };
    }
    const caption = customLabel !== undefined || (!target.text && target.kind !== 'bibliography');
    if (caption) {
      const recursive = customLabel === undefined;
      if (recursive && resolving.has(name)) fail(problem('heading_reference_cycle', { path: [...resolving, name].join(' → ') }), offset);
      if (recursive) resolving.add(name);
      let rendered;
      try { rendered = customLabel === undefined ? target.render(target.label, target.offset) : render(customLabel, offset); }
      finally { if (recursive) resolving.delete(name); }
      const node = target.kind === 'bibliography'
        ? { type: 'citation', id, key: name, caption: rendered, page: onPage }
        : { type: 'reference', id, caption: rendered, page: onPage };
      return { node, label: 'reference' };
    }
    if (target.kind === 'bibliography') {
      return { node: { type: 'citation', id, key: name, page: onPage }, label: markdownText(target.entry.citationLabel) };
    }
    // An environment's or formula's id is its label; its reference text (target.text) was written in the page's language.
    const node = { type: 'reference', id, text: target.text, page: onPage };
    if (target.referenceText !== undefined) node.caption = markdownText(target.referenceText);
    if (target.title) {
      if (resolving.has(name)) fail(problem('environment_reference_cycle', { path: [...resolving, name].join(' → ') }), offset);
      resolving.add(name);
      try { node.title = target.render(target.title, target.offset); }
      finally { resolving.delete(name); }
    }
    return { node, label: 'reference' };
  }
  const render = (value, offset, { data = false } = {}) => transformMarkup(value, [], {
    tags: pageTags,
    resolveWiki: (wiki, i) => resolveWiki(wiki, offset + i),
    resolveReference: (key, i, label) => resolveReference(key, offset + i, label),
    fail: (message, i) => fail(message, offset + i),
    checkMath: checkMath ? katexProblem : undefined,
    indentedCode: false,
    // Data in a fence (a bibliography's notes) is text, though the fence is code to the Markdown parser.
    blockCodeEnd: data ? () => undefined : i => {
      const end = blockCodeEnd(offset + i);
      return end === undefined ? undefined : Math.min(value.length, end - offset);
    },
  });
  /** The attributes at a heading's end ({@label .class key=value number=…}): the label apart from the renderer's attributes. */
  function parseAttributes(value, offset) {
    const match = value.match(/\s*\{([^{}\n]*)\}\s*$/);
    if (!match) return { title: value.trim(), attributes: '', id: '' };
    const ids = [...match[1].matchAll(/(?:^|\s)@([^\s]*)/g)];
    if (ids.length > 1 || /(?:^|\s)id\s*=/.test(match[1])) fail(problem('unique_label'), offset);
    if (/data-section-(?:number|unnumbered)\s*=/.test(match[1])) fail(problem('reserved_section_attributes'), offset);
    const id = ids[0] ? labelName(ids[0][1], offset) : '';
    let attrs = ids[0] ? match[1].replace(ids[0][0], '') : match[1];
    const number = attrs.match(/(?:^|\s)number\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s]+))/);
    if (number) attrs = attrs.replace(number[0], '');
    return { title: value.slice(0, match.index).trim(), attributes: attrs.trim(), id, customNumber: number ? (number[1] ?? number[2] ?? number[3]) : undefined };
  }
  let setextFailed = { from: -1, to: -1 };
  /** An ATX or setext heading at start: its level, text, container prefix and end; not numbered or converted yet. */
  function readHeading(start) {
    const line = text.slice(start).match(/^[^\n]*(?:\n|$)/)[0];
    // ATX headings in quotations and lists too, their ids made alike; the container's prefix is kept, so that the
    // heading stays in its quotation or list.
    // Each quote marker taken whole, once ((?=(…))\k<…> stands for an atomic group): with "(?: {0,3}>[ \t]?)*"
    // a space after ">" could also start the next marker, and a line of many "> " failed in exponential time.
    const atx = line.trimEnd().match(/^(?<prefix>(?:(?=(?<quote> {0,3}>[ \t]?))\k<quote>)* {0,3}(?:(?:[-+*]|\d+[.)])[ \t]+)?)(?<marks>#{1,6})(?:[ \t]+(?<title>.*)|$)/);
    if (atx) return {
      end: start + line.length,
      level: atx.groups.marks.length,
      title: (atx.groups.title ?? '').replace(/[ \t]+#+[ \t]*$/, ''),
      prefix: atx.groups.prefix,
    };
    // A setext heading may span lines; it stops at a list, a quotation or another block's start, so that text and
    // thematic breaks are not taken for one.
    // A line after one whose scan found no underline, before where that scan stopped, finds none either (that
    // underline would have made the earlier line a heading): not scanned again, or a long paragraph would
    // take quadratic time.
    if (start > setextFailed.from && start < setextFailed.to) return;
    let end = start, title = [];
    while (end < text.length) {
      const current = text.slice(end).match(/^[^\n]*(?:\n|$)/)[0];
      const underline = current.trimEnd().match(/^ {0,3}(=+|-+)[ \t]*$/);
      if (underline && title.length) return { end: end + current.length, level: underline[1][0] === '=' ? 1 : 2, title: title.join(' ') };
      if (!current.trim() || /^(?: {4}|\t| {0,3}(?:[#>~<]|`{3,}|:::|[-+*]\s|\d+[.)]\s|\[.*\]:))/.test(current) || labelledLine.test(current) || /^ {0,3}(?:[-*_][ \t]*){3,}$/.test(current.trimEnd())) break;
      // A formula across lines is not a heading's text: what looks like an underline in it is TeX.
      let crossesLine = false;
      for (let p = end; p < end + current.length; p++) {
        const math = readMath(text, p);
        if (math && math.end > end + current.length) { crossesLine = true; break; }
        if (math) p = math.end - 1;
      }
      if (crossesLine) break;
      title.push(current.trimEnd());
      end += current.length;
    }
    setextFailed = { from: start, to: end };
  }
  // The first pass collects the structure and the labels and records edits: the text cannot be converted yet, as a
  // reference may name a label further on.

  /** A bibliography block (before code is protected): its data is not the page's text (no formulas, references or environments in it). */
  function collectBibliography(i) {
    if (!bibliographyBlocks) return;
    const block = readBibliography(text, i, fail);
    if (!block) return;
    if (stack.length) fail(problem('bibliography_position'), i);
    for (const entry of block.entries) {
      entry.key = labelName(entry.key, entry.offset);
      register(entry.key, { kind: 'bibliography', anchor: entry.anchor, entry }, entry.offset);
      // A version with a key (a translation, a later edition) is cited on its own.
      for (const version of entry.versions) {
        if (!version.key) continue;
        version.key = labelName(version.key, version.offset);
        register(version.key, { kind: 'bibliography', anchor: version.anchor, entry: version }, version.offset);
      }
      bibliography.push(entry);
    }
    // On an editor's previewed page (its lines marked, source-lines.mjs), each entry is marked with its key's line:
    // the block's own lines are code, which has no marks.
    const mark = text.includes(MARK_OPEN) ? entry => encodeLine(lineAt(entry.offset)) : undefined;
    edits.push({ start: i, end: block.end, output: () => bibliographyMarkdown(block.entries, { mark, render: (value, offset) => render(value, offset, { data: true }), wikiLinks, resolvePersonLink: resolvePersonLink && (name => guarded('resolvePersonLink', () => resolvePersonLink(name), message => fail(message, i))), onWikiLink: reportWikiLink, fail }) });
    return block.end;
  }

  /** A data block (data-blocks.mjs): read, kept out of the page. */
  function collectDataBlock(i) {
    const block = readDataBlock(text, i, dataBlocks, { lang, fail, inEnvironment: stack.length > 0 });
    if (!block) return;
    data[block.name].push(block.value);
    edits.push({ start: i, end: block.end, output: () => '\n' });
    return block.end;
  }

  /** A math block (numbered): where it ends in the source. */
  function collectNumberedMath(i) {
    // In a list item, a fence as CommonMark's tree finds it, indented to the item's content; written with that indentation.
    const inList = mathFences?.has(i);
    const mathFence = text.slice(i).match(inList ? /^([ \t]*)(`{3,}|~{3,})math(?:[ \t]+([^\n]*))?[ \t]*(?:\n|$)/ : /^( {0,3})(`{3,}|~{3,})math(?:[ \t]+([^\n]*))?[ \t]*(?:\n|$)/);
    if (!mathFence) return;
    const indent = inList ? mathFence[1] : '';
    mathFence.splice(1, 1);
    const info = (mathFence[2] ?? '').trim();
    if (info && !/^\{@[^{}\s]+\}$/.test(info)) fail(problem('math_parameters'), i);
    const id = info ? labelName(info.slice(2, -1), i) : '';
    const close = new RegExp(`^${inList ? '[ \\t]*' : ' {0,3}'}${mathFence[1][0]}{${mathFence[1].length},}[ \\t]*(?:\\n|$)`, 'gm');
    close.lastIndex = i + mathFence[0].length;
    const closing = close.exec(text);
    if (!closing) fail(problem('math_unclosed'), i);
    const tex = text.slice(i + mathFence[0].length, closing.index).trimEnd()
      .split('\n').map(line => line.startsWith(indent) ? line.slice(indent.length) : line.trimStart()).join('\n');
    // A \tag written by hand is an error, outside TeX comments (whose commands do nothing).
    const active = tex.split('\n').map(line => {
      let comment = -1;
      for (let p = 0; p < line.length; p++) {
        if (line[p] === '%' && !escaped(line, p)) { comment = p; break; }
      }
      return comment < 0 ? line : line.slice(0, comment);
    }).join('\n');
    if (/(?<!\\)(?:\\\\)*\\tag\*?\b/.test(active)) fail(problem('math_manual_tag'), i);
    if (checkMath) { const error = katexProblem(tex, true); if (error) fail(error, i); }
    const number = numbers ? numbers.object('equations') : objectNumber(++equation);
    register(id, { text: t(number ? 'reference_equation' : 'reference_equation_unnumbered', { number }), number, kind: 'equation' }, i);
    const formula = { type: 'math', tex: number ? `${tex}\n\\tag{${number}}` : tex, display: true, id };
    const end = closing.index + closing[0].length;
    edits.push({ start: i, end, output: () => `\n${indent}${nodeMarker(formula)}\n\n` });
    return end;
  }

  /** A heading: its number goes to the renderer in its node, not in its text. */
  function collectHeading(i) {
    const heading = readHeading(i);
    if (!heading) return;
    if (heading.level === 1 && !allowH1) fail(problem('heading_level_one'), i);
    if (heading.level === 2 && heading.prefix?.trim()) {
      fail(problem('heading_level_two'), i);
    }
    if (stack.length && heading.level === 2) fail(problem('heading_in_environment'), i);
    // The * may stand before the attributes or at the line's end; \* is a literal asterisk.
    const trailing = stripHeadingStar(heading.title);
    const parsed = parseAttributes(trailing.title, i);
    const marked = trailing.unnumbered ? { title: parsed.title, unnumbered: true } : stripHeadingStar(parsed.title);
    parsed.title = marked.title;
    const unnumbered = marked.unnumbered;
    let number;
    if (numbers) number = numbers.heading(heading.level, unnumbered, parsed.customNumber, `${file}:${lineAt(i)}`);
    else if (heading.level === 2 && !unnumbered) {
      const next = nextNumber(parsed.customNumber, section, file);
      section = next.cursor;
      number = sectionPart = next.part;
    } else if (parsed.customNumber !== undefined) fail(problem('number_custom_heading'), i);
    if (!numbers && number) { theorem = 0; equation = 0; }
    const target = number
      ? { text: t('reference_section', { number: String(number) }), number: String(number), kind: 'heading' }
      : { label: parsed.title, kind: 'heading' };
    const anchor = uniqueHeadingId(parsed.title);
    register(parsed.id, { ...target, anchor, ...(number && formatSectionReference ? { referenceText: formatSectionReference(String(number), (page?.depth ?? 0) + heading.level - 1) } : {}) }, i);
    headings.push({ anchor, title: parsed.title, offset: i, level: heading.level, number: number ? String(number) : '' });
    // The author's attributes ({.accent}) as Goldmark reads them; the anchor and the number are the syntax layer's.
    const own = parsed.attributes ? parseAttributeList(`{${parsed.attributes}}`) : { classes: [], attributes: [] };
    if (!own) fail(problem('heading_attributes', { attributes: parsed.attributes }), i);
    // The id is the heading's text (references, the contents and the duplicate check go by it): no {#id} of its own.
    if (own.id !== undefined) fail(problem('heading_id', { id: own.id }), i);
    const node = {
      type: 'heading', id: anchor, classes: own.classes, attributes: own.attributes,
      number: number ? String(number) : undefined, unnumbered: !number && heading.level === 2,
    };
    edits.push({ start: i, end: heading.end, output: () => {
      const title = render(parsed.title, i);
      return `${heading.prefix ?? ''}${'#'.repeat(heading.level)} ${title} ${nodeMarker(node)}\n`;
    } });
    return heading.end;
  }

  /** An environment's fence: the opening and closing fences are replaced; its content is the page's text. */
  function collectEnvironment(i) {
    const fence = text.slice(i).match(/^ {0,3}(:{3,})([^\n]*)(?:\n|$)/);
    if (!fence) return;
    const header = fence[2].trim();
    if (!header) {
      const open = stack.pop();
      if (!open || open.fence !== fence[1]) fail(problem('environment_fence'), i);
      edits.push({ start: i, end: i + fence[0].length, output: () => `\n${nodeMarker({ type: 'environmentEnd' })}\n\n` });
    } else {
      // definition (条件): “条件” shown for the kind's name, the number, counter and colour still the kind's;
      // remark* (寄语): not numbered. The old -remark [寄语] is an error that gives the new way.
      if (/^-[a-z]/.test(header)) fail(problem('environment_dash', { header }), i);
      const type = header.match(/^([a-z]+)(\*)?(?:[ \t]+\(([^()\n]*)\))?(?:\s|$)/);
      const kind = type?.[1];
      const custom = type?.[3]?.trim();
      if (!Object.hasOwn(environments, kind ?? '')) fail(problem('environment_unknown', { header }), i);
      if (custom !== undefined && (!custom || kind === 'proof' || /[$\\<>[\]{}]/.test(custom))) {
        fail(problem('environment_name', { header }), i);
      }
      if (kind === 'proof' && stack.length) fail(problem('proof_position'), i);
      if (stack.some(open => open.kind === 'proof')) fail(problem('proof_nested_environment'), i);
      const rest = header.slice(type[0].trimEnd().length).trim();
      const parsed = parseAttributes(rest, i);
      if (parsed.attributes || parsed.customNumber !== undefined) fail(problem('environment_parameters'), i);
      if (parsed.title && !/^\[[\s\S]*\]$/.test(parsed.title)) fail(problem('environment_title_format'), i);
      const title = parsed.title ? parsed.title.slice(1, -1) : '';
      // The title is rendered on its own, in the environment's heading, where a tag cannot stand.
      const titleStart = i + fence[0].indexOf('[') + 1;
      for (let k = 0; k < title.length;) {
        const math = readMath(title, k);
        if (math) { k = math.end; continue; }
        const end = protectedToken(title, k);
        if (end && title[k] === '<' && (readTag(title, k) || looksLikeTag(title, k))) {
          fail(problem('tag_in_title', { name: title.slice(k).match(/^<\/?([A-Za-z][A-Za-z0-9-]*)/)[1] }), titleStart + k);
        }
        k = end ?? k + 1;
      }
      const { group, numbered = true } = environments[kind];

      const number = numbered && !type[2] ? (numbers ? numbers.object('theorems') : objectNumber(++theorem)) : '';
      // The environment's name (its own, in parentheses, or its kind's) and number: “定理 1.2”, “条件 3”, “注”.
      const name = custom ?? environmentName(environments[kind], currentContentLocale()) ?? fail(problem('environment_config', { kind }), i);
      const caption = `${name}${number ? ` ${number}` : ''}`;
      // A proof with a title shows its title alone: ::: proof [@thm 的证明] reads “定理 1 的证明”.
      const titleOnly = kind === 'proof' && Boolean(title.trim());
      register(parsed.id, titleOnly ? { text: caption, number, kind: 'environment', referenceText: title }
        : { text: caption, number, kind: 'environment', ...(!number && kind !== 'proof' && title ? { title } : {}) }, i);
      stack.push({ fence: fence[1], start: i, kind });
      edits.push({ start: i, end: i + fence[0].length, output: () => {
        const headingTitle = render(title, i + fence[0].indexOf('[') + 1);
        return `\n${nodeMarker({ type: 'environment', kind, group, caption, title: headingTitle, bare: titleOnly, id: parsed.id })}\n\n`;
      } });
    }
    return i + fence[0].length;
  }

  // In order: bibliography and math fences before code is protected; headings before inline formulas and links (a
  // setext heading may start with a formula); environments only outside code and formulas.
  let bodyStart = 0;
  const pageLabel = page && text.match(/^\s*\{@([^{}\s]+)\}[ \t]*(?:\n|$)/);
  if (pageLabel) {
    const number = page.number;
    register(pageLabel[1], number ? { kind: 'page', anchor: 'page-title', text: t('reference_section', { number }), number, referenceText: formatSectionReference?.(number, page.depth) ?? number } : { kind: 'page', anchor: 'page-title', label: page.title }, text.indexOf('{@'));
    edits.push({ start: 0, end: pageLabel[0].length, output: () => '\n' });
    bodyStart = pageLabel[0].length;
  }
  for (let i = bodyStart; i < text.length;) {
    const lineStart = i === 0 || text[i - 1] === '\n';
    if (lineStart) {
      const end = collectBibliography(i) ?? collectDataBlock(i) ?? collectNumberedMath(i) ?? collectHeading(i);
      if (end !== undefined) {
        i = end;
        continue;
      }
    }
    const protectedEnd = blockCodeEnd(i) ?? protectedToken(text, i, { indentedCode: false });
    if (protectedEnd) {
      const problem = unclosedProtected(text, i, protectedEnd);
      if (problem) fail(problem, i);
      pairTag(i);
      i = protectedEnd;
      continue;
    }
    const token = readMath(text, i) ?? readMarkdownLink(text, i) ?? readWiki(text, i);
    if (token) {
      i = token.end;
      continue;
    }
    if (lineStart) {
      const end = collectEnvironment(i);
      if (end !== undefined) {
        i = end;
        continue;
      }
    }
    i++;
  }
  if (stack.length) fail(problem('environment_unclosed'), stack.at(-1).start);
  if (openTags.length) fail(problem('tag_unclosed', { name: openTags.at(-1).name }), openTags.at(-1).start);
  if (listProblems.length) fail(problem(listProblems[0].key), listProblems[0].offset);
  // Labelled list items: the marker becomes an ordered list's, the label is shown at the item's start (an itemLabel
  // node). Markers right after one another on a line ((3) (4) …) are nested lists: the outer labels go at the start
  // of the innermost item (no text between the markers), each with how far out it is.
  // The labels are written in the text, on its baseline (itemLabel); a label with no text on its line (before a
  // display formula, a code block, a list, or nothing) stands beside the item instead (block). A label
  // alone on its line goes to the start of the text on the next line, when that line is a paragraph's.
  const label = (marker, outer, block) => {
    const shown = marker.parenthesized ? `(${marker.label})` : `${marker.label})`;
    return nodeMarker({ type: 'itemLabel', outer, block }) + render(shown, marker.start) + nodeMarker({ type: 'itemLabelEnd' });
  };
  const sorted = [...labelled].sort((a, b) => a.start - b.start);
  for (let i = 0; i < sorted.length;) {
    let j = i;
    while (j + 1 < sorted.length && sorted[j + 1].start === sorted[j].end) j++;
    const chain = sorted.slice(i, j + 1), last = chain.at(-1);
    const labels = block => chain.map((outer, n) => label(outer, chain.length - 1 - n, block)).join('');
    const lineEnd = text.indexOf('\n', last.end) < 0 ? text.length : text.indexOf('\n', last.end);
    const rest = text.slice(last.end, lineEnd);
    // Where the text of an item alone on its line starts, when it is the next line's paragraph's (the list
    // structure, lists.mjs, reads the same).
    const next = rest.trim() ? -1 : movedLabelStart(text, lineEnd);
    const inline = rest.trim() ? !blockStart.test(rest) : next >= 0;
    const moved = next >= 0;
    chain.forEach((marker, k) => edits.push({ start: marker.start, end: marker.end, output: () => k < chain.length - 1 ? marker.marker
      // Nothing after the marker on its line: a space after it, or the marker is text.
      : marker.marker + (marker.marker.endsWith(' ') ? '' : ' ') + (moved ? '' : labels(!inline)) }));
    if (moved) edits.push({ start: next, end: next, output: () => labels(false) });
    i = j + 1;
  }
  for (const item of items) {
    if (!item.id) fail(problem('item_label_empty'), item.start);
    register(item.id, item.caption === undefined ? { text: t('reference_item', { number: item.number }), number: item.number, kind: 'item' } : { label: item.caption, kind: 'item' }, item.start);
    // The spaces after it too: the text starts right after the label.
    const end = item.end + text.slice(item.end).match(/^[ \t]*/)[0].length;
    edits.push({ start: item.start, end, output: () => nodeMarker({ type: 'itemTarget', id: item.id.normalize('NFC') }) });
  }
  edits.sort((a, b) => a.start - b.start);
  if (context) context.bibliography.push(...bibliography);
  else prepareBibliography(bibliography);
  const anchors = new Map(pageAnchor ? [['page-title', String(problem('page_title_name'))]] : []);
  for (const [name, target] of labels) {
    if (target.kind === 'heading' || target.kind === 'page') continue;
    const anchor = target.anchor ?? name;
    if (anchors.has(anchor)) fail(problem('anchor_duplicate', { anchor, other: anchors.get(anchor) }), target.offset);
    anchors.set(anchor, name);
  }
  const finish = () => {
    meta.bibliography = bibliography.map(bibliographyData);
    meta.data = data;
    meta.headingTitles = Object.fromEntries(headings.map(heading => [heading.anchor, newDocument(() => render(heading.title, heading.offset))]));
    meta.sectionNumbers = Object.fromEntries(headings.map(heading => [heading.anchor, heading.number]));
    meta.labels = [...labels].map(([name, target]) => ({ name, anchor: target.anchor ?? name, kind: target.kind, line: target.line }));

    // The second pass, in order: the text between edits converted (markup.mjs), each edit's output written. Every
    // label is known now: references in the text and in titles may name later ones.
    let result = '', cursor = 0;
    for (const edit of edits) {
      result += render(text.slice(cursor, edit.start), cursor) + edit.output();
      cursor = edit.end;
    }
    return result + render(text.slice(cursor), cursor);
  };
  return { finish, meta };
}
