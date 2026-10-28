// Checking a page in the editor: bananamark's syntax layer run on the text, its first error (it stops at the
// first) as a problem to show. What depends on the whole site (links, the numbering a book's pages share) is left
// to a full build.
import { linter } from '@codemirror/lint';
import { BananamarkError, createBook, transformDocument } from 'bananamark';

/**
 * The problems in a page's body: [{ line, column, message }], lines and columns from 1 (the column where known).
 * options: bananamark's syntax options (lang, environments, dataBlocks, tags, messages, locale, katex, rewriteMath,
 * lineOffset…), formulas checked with KaTeX (checkMath) unless said otherwise. labels: on a book's page, the labels of
 * the book's other pages ([{ name, text, page }]: text is how a reference shows it, page its page's key), so that
 * references to them are not errors; the page is then checked as a book's page (key: options.key).
 */
export function checkDocument(source, { labels, ...options } = {}) {
  const settings = { checkMath: true, ...options };
  try {
    if (!labels) transformDocument(source, settings);
    else {
      // A book of this page alone, with the others' labels declared; every heading level may be numbered here, so
      // that none is wrongly an error.
      const { key = 'page', title, number, depth, numbering, ...shared } = settings;
      const book = createBook({ ...shared, numbering: { headings: { depth: 5 } } });
      for (const { name, page, text } of labels) book.declare(name, { text: text || '1', number: '1', page });
      book.transform(book.add(source, { key, title, number, depth }));
    }
  } catch (error) {
    // The page's error; anything else (a bug, a wrong option) is the caller's to see.
    if (!(error instanceof BananamarkError)) throw error;
    return [{ line: error.line ?? 1, column: error.column, message: error.reason ?? error.message, code: error.code, params: error.params }];
  }
  return [];
}

/**
 * Where to mark a problem in the editor's document: { from, to }, the line (no column), or from the column the
 * word there (a [[link]] whole).
 */
export function problemRange(doc, lineNumber, column) {
  const line = doc.line(Math.min(Math.max(lineNumber, 1), doc.lines));
  if (!column) return { from: line.from, to: line.to };
  const rest = line.text.slice(column - 1);
  const length = rest.startsWith('[[') ? (rest.indexOf(']]') + 1 || rest.length - 1) + 1 : rest.match(/^[^\s，。；、：！？,.;!?()（）]+/)?.[0].length ?? 1;
  const from = Math.min(line.from + column - 1, line.to);
  return { from, to: Math.min(from + Math.max(length, 1), line.to) };
}

/**
 * The problems in a whole file (checkDocument's options and problems): front matter at its start (between --- lines,
 * as the language reads it) is skipped, and lines are counted from the file's first.
 */
export function checkFile(text, options = {}) {
  const frontMatter = text.match(/^\uFEFF?---\r?\n[\s\S]*?\r?\n---[ \t]*(?:\r?\n|$)/)?.[0] ?? '';
  const lineOffset = (options.lineOffset ?? 0) + frontMatter.split('\n').length - 1;
  return checkDocument(text.slice(frontMatter.length), { ...options, lineOffset });
}

/** A CodeMirror linter of the whole document as a file (checkFile), and delay in ms. */
export function bananamarkLinter({ delay = 300, ...options } = {}) {
  return linter(view => checkFile(view.state.doc.toString(), options).map(problem => ({
    ...problemRange(view.state.doc, problem.line, problem.column), severity: 'error', message: problem.message,
  })), { delay });
}
