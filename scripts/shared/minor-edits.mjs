/**
 * Minor edits: a change to a page that does not need to be pointed out (formatting, a fixed link, a typo), left off
 * the home page's recent changes and marked “小” where changes are listed (page history, /recent-changes).
 *
 * The marks are lines in commit messages, usually as Git trailers:
 *
 *   Minor-edit: all              every page the change (a pull request, or a commit on the branch) changes
 *   Major-edit: wiki/群           one page, by its path under content/ (index.md may be left out)
 *
 * A change's pages start as major. Its messages are read oldest first (a pull request's commits, then the merge
 * commit's message; a squashed or direct commit's own message), each mark over the earlier ones: all sets every page,
 * a path one page. So a reviewer's later commit (an empty one will do) changes what the author marked, and so does
 * the merge message.
 */

const markLine = /^(Minor|Major)-edit:[ \t]*(\S(?:.*\S)?)[ \t]*$/gim;

/** A page's path as marks and changes name it: content/…/index.md. */
export function markPath(value) {
  let path = value.trim().replace(/^\/+|\/+$/g, '');
  if (!path.startsWith('content/')) path = `content/${path}`;
  return /\.md$/i.test(path) ? path : `${path}/index.md`;
}

/** The marks in a message, in order: [{ minor, all } | { minor, path }]. */
export function marksIn(message) {
  return [...String(message ?? '').matchAll(markLine)].map(([, kind, target]) => {
    const minor = kind.toLowerCase() === 'minor';
    return /^all$/i.test(target) ? { minor, all: true } : { minor, path: markPath(target) };
  });
}

/**
 * The minor pages of a change: messages oldest first; paths, the change's pages (content/…, as Git names them; a
 * renamed page also by its previous path, [path, previous]). Returns a Set of the minor ones' paths (the first of
 * each pair).
 */
export function minorPages(messages, paths) {
  let all = false;
  const pages = new Map();
  for (const mark of messages.flatMap(marksIn)) {
    if (mark.all) { all = mark.minor; pages.clear(); }
    else pages.set(mark.path, mark.minor);
  }
  const minor = new Set();
  for (const names of paths) {
    const [path, previous] = Array.isArray(names) ? names : [names];
    if (pages.get(path) ?? (previous && pages.get(previous)) ?? all) minor.add(path);
  }
  return minor;
}

/** Whether a message holds any mark (most do not: their changes are all major). */
export const hasMarks = message => /^(?:Minor|Major)-edit:/im.test(String(message ?? ''));

/** The trailer the online editor writes for the page it commits (content/…). */
export const markTrailer = (path, minor) => `${minor ? 'Minor' : 'Major'}-edit: ${path.replace(/^content\//, '').replace(/\/index\.md$/, '')}`;
