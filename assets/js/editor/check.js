// Instant checks in the editor: the preprocessing's own parsing (scripts/prebuild/, mounted under
// assets/js/scripts/) run on the draft in the browser, loaded once the editor is up. Only what a page
// decides alone is checked: the front matter (its syntax and what the editor requires of it), the
// title and aliases, and the body. A book page's references to the book's other pages are checked
// against those pages' labels as the editor received them; the numbering a book's pages share, and
// links, which depend on the whole site, are left to the server's preview.
import { parse } from 'yaml';
import { transformDocument } from '../scripts/prebuild/structure.mjs';
import { prepareBibliography } from '../scripts/prebuild/bibliography.mjs';
import { defaultNumbering, numbering, pageNumbering } from '../scripts/prebuild/numbering.mjs';
import { nameList, pageName } from '../scripts/prebuild/names.mjs';

export { directoryName } from '../scripts/prebuild/names.mjs';
import { frontMatterProblems } from '../scripts/prebuild/front-matter-rules.mjs';
import { shortcodeOffset, shortcodeText } from '../scripts/prebuild/tags.mjs';
import { t } from '../scripts/shared/i18n.mjs';

/**
 * Problems in a draft of content/<path>: [{ line, column, message }], lines and columns from 1, the
 * column only where known. The front matter's syntax error alone; otherwise what the editor requires
 * of the front matter, and the body's first error (the preprocessing stops at the first). labels: on a
 * book page, the labels of the book's other pages ({ name, page }, page being its title).
 */
export function check(text, path, labels = []) {
  const file = `content/${path}`;
  const match = text.match(/^(?:﻿)?---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  let metadata;
  try { metadata = match ? parse(match[1]) ?? {} : {}; }
  catch (error) {
    // Counted from the line after the opening ---.
    const [position] = error.linePos ?? [];
    return [{ line: (position?.line ?? 0) + 1, column: position?.col, message: error.message.split('\n')[0] }];
  }
  if (!metadata || typeof metadata !== 'object' || Array.isArray(metadata)) return [{ line: 1, message: 'front matter must be a mapping' }];
  const problems = frontMatterProblems(text);
  const start = match?.[0].length ?? 0;
  // No shortcodes on any page, front matter included: authors write tags (<see> and so on).
  const shortcode = shortcodeOffset(text);
  if (shortcode >= 0) {
    const before = text.slice(0, shortcode);
    problems.push({ line: before.split('\n').length, column: shortcode - before.lastIndexOf('\n'), message: t('build_shortcode_syntax', { Text: shortcodeText(text, shortcode) }) });
  }
  const article = path.startsWith('wiki/') && !path.endsWith('/_index.md');
  // Not Markdown with the site's structure (see metadata.structuredPage in scripts/prebuild/run.mjs).
  if (['missing/', 'search/'].some(prefix => path.startsWith(prefix))) return problems;
  const lineOffset = text.slice(0, start).split('\n').length - 1;
  const lang = metadata.lang ?? 'zh';
  try {
    if (article) {
      pageName(metadata.title ?? path.split('/').at(-2), file, 'title', { lang });
      nameList(metadata.aliases, file, 'aliases');
      const numbers = metadata.numbering === undefined ? undefined
        : pageNumbering({ key: path, vector: [] }, numbering(metadata.numbering ?? {}, { ...defaultNumbering, pages: false }, file));
      transformDocument(text.slice(start), { file, lang, lineOffset, pageAnchor: true, numbers, checkMath: true });
    } else {
      // As a book's pages are (scripts/prebuild/collections.mjs), but every target numbered alike: numbers
      // depend on the book's settings and the page's place in it. So are other pages' labels.
      const page = { key: path, title: '', number: '', vector: [] };
      const numbers = { heading: () => '1', object: () => '1' };
      const others = labels.map(({ name, page }) => [name.normalize('NFC'), { kind: 'other', name: 'reference_section', number: '1', file: page }]);
      const context = { labels: new Map(others), bibliography: [], resolving: new Set() };
      const finish = transformDocument(text.slice(start), { file, lang, lineOffset, pageAnchor: true, allowLevelOne: true, page, numbers, context, checkMath: true, prepareOnly: true });
      prepareBibliography(context.bibliography);
      finish();
    }
  } catch (error) {
    const located = error.message.match(/^[^\n]*?:(\d+): ([\s\S]*)$/);
    return [...problems, { line: located ? Number(located[1]) : 1, column: error.column, message: located ? located[2] : error.message }];
  }
  return problems;
}
