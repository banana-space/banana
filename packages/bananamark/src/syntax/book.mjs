import { prepareBibliography } from './bibliography.mjs';
import { defaultNumbering, numbering as numberingConfig, pageNumbering } from './numbering.mjs';
import { documentOptions, transformPage } from './structure.mjs';
import { checkOptions } from '../dialect.mjs';
import { problem, withLocale } from '../messages.mjs';
import { withDialect } from '../dialect.mjs';

/**
 * A book: pages that share their labels (a page refers to another's: @label), their numbering (sections and
 * counters run on across pages) and their bibliography (Smith 2020a and 2020b across the book). In two passes:
 *
 * 1. add(source, page), the pages in reading order: their labels and numbers, no HTML yet. page:
 *    - key: the page's key, which references to it carry (node.page; the renderer's resolvePageLink(key) gives its address);
 *    - title: its title (Markdown), which a {@label} at the start of its body refers to when it has no number;
 *    - position: its place in the book's outline ([2, 1] for 2.1); number: as shown (default position.join('.'), ''
 *      for none); depth: how deep it is (default position.length; formatSectionReference's depth for its sections);
 *    - numbering: its own over the book's (numbering.mjs's format);
 *    - and transformDocument's options for the page (file, lineOffset, lang…).
 *    Returns the page's handle: { key, headingNumbers: { last, taken } } (the last number its level-two headings
 *    took and the set of those they took, which pages below it in the outline go on from and must not take).
 * 2. transform(handle), any page in any order once all are added: its document ({ markdown, nodes, meta }).
 *
 * declare(name, target) adds a label of a page whose source the book does not have: { text, number?, page }
 * (text: how a reference shows it, such as “定理 2.3”; page: its page's key). labels(): the book's labels in the order
 * they were declared, for listing them (an editor's completion, say): { name, kind, page, file, line, anchor, text },
 * text being how a reference to it shows, on one line: its number's words (“定理 2.3”, with an unnumbered
 * environment's title after it in brackets), a heading's or an item's own text (Markdown), or a citation's label (once
 * the pages are transformed: 2020a needs them all). bananamark-codemirror's checkDocument takes them as labels.
 *
 * options: the book's numbering (default: pages, level-two headings, theorems and equations numbered, each
 * within its page's number), formatSectionReference(number, depth), and transformDocument's options for every page
 * (lang, locale, environments, typography, resolvePersonLink, checkMath, allowH1, pageAnchor…).
 */
const oneLine = text => String(text ?? '').replace(/\s+/g, ' ').trim();
/** How a reference to a label shows, on one line (see labels() above). */
function shownText(target) {
  if (target.kind === 'bibliography') return oneLine(target.entry?.citationLabel);
  if (target.referenceText !== undefined) return oneLine(target.referenceText);
  if (target.text) return target.text + (target.title ? ` [${oneLine(target.title)}]` : '');
  return oneLine(target.label);
}

/** The options of a book (createBook's), and of its pages (add's). */
const bookOptions = documentOptions.filter(name => !['key', 'title', 'number', 'depth'].includes(name));
const pageOptions = [...documentOptions, 'position'];

export function createBook(given = {}) {
  checkOptions(given, bookOptions, 'createBook');
  const { numbering, ...options } = withDialect(given);
  const defaults = numberingConfig(numbering ?? {}, defaultNumbering, String(problem('body_name')));
  const context = { labels: new Map(), bibliography: [], resolving: new Set() };
  const counters = new Map();
  let transforming = false;
  return {
    add(source, given = {}) {
      checkOptions(given, pageOptions, 'book.add');
      const { key, title = '', position = [], number = position.join('.'), depth = position.length, numbering: own, ...page } = given;
      if (transforming) throw new Error('bananamark: a page added to a book after its pages were transformed');
      if (typeof key !== 'string' || !key) throw new Error('bananamark: a book\'s page needs a key');
      const settings = { ...options, ...page };
      const numbers = withLocale(settings.locale, settings.lang, () => pageNumbering({ key, vector: position }, numberingConfig(own ?? {}, defaults, settings.file), counters), settings.messages);
      const finish = transformPage(source, settings, { page: { key, title, vector: position, number: String(number), depth }, numbers, context, prepareOnly: true });
      return { key, finish, headingNumbers: { get last() { return numbers.childCursor; }, taken: numbers.childNumbers } };
    },
    labels: () => [...context.labels].map(([name, target]) => ({
      name, kind: target.kind, page: target.page, file: target.file, line: target.line, anchor: target.anchor ?? name, text: shownText(target),
    })),
    declare(name, { text, number = '', page, ...rest } = {}) {
      context.labels.set(String(name).normalize('NFC'), { ...rest, kind: 'other', text, number: String(number), page, file: page });
    },
    transform(handle) {
      if (!transforming) {
        withLocale(options.locale, options.lang, () => prepareBibliography(context.bibliography), options.messages);
        transforming = true;
      }
      return handle.finish();
    },
  };
}
