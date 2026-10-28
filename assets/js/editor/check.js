// Instant checks in the editor: the preprocessing's own parsing (bananamark's syntax layer, and scripts/prebuild/
// mounted under assets/js/scripts/) run on the draft in the browser, loaded once the editor is up. Only what a page
// decides alone is checked: the front matter (its syntax and what the editor requires of it), the
// title and aliases, and the body. A book page's references to the book's other pages are checked
// against those pages' labels as the editor received them; the numbering a book's pages share, and
// links, which depend on the whole site, are left to the server's preview.
import { parse } from 'yaml';
import { checkDocument } from 'bananamark-codemirror';
import { nameList, pageName } from '../scripts/shared/names.mjs';

export { directoryName } from '../scripts/shared/names.mjs';
import { frontMatterProblems } from '../scripts/prebuild/front-matter-rules.mjs';
import { pageTypography } from '../scripts/shared/typography.mjs';
import { siteSyntax } from '../scripts/shared/syntax.mjs';

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
  const article = path.startsWith('wiki/') && path !== 'wiki/index.md';
  // Not Markdown with the site's structure (see metadata.structuredPage in scripts/prebuild/run.mjs).
  if (['missing/', 'search/'].some(prefix => path.startsWith(prefix))) return problems;
  const lineOffset = text.slice(0, start).split('\n').length - 1;
  const lang = metadata.lang ?? 'zh-cn';
  if (article) {
    try {
      pageName(metadata.title ?? path.split('/').at(-2), file, 'title', { lang });
      nameList(metadata.aliases, file, 'aliases');
    } catch (error) { return [...problems, { line: 1, message: error.message }]; }
  }
  // The body, as the preprocessing reads it. A book's page (as in scripts/prebuild/collections.mjs) with the book's
  // other pages declared by their labels as the API gives them (text: how a reference shows it, such as “定理 1”).
  return [...problems, ...checkDocument(text.slice(start), {
    ...siteSyntax, key: path, file, lang, lineOffset, pageAnchor: true, allowH1: !article,
    typography: pageTypography(metadata), numbering: metadata.numbering, labels: article ? undefined : labels,
  })];
}
