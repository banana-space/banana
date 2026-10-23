import { isPublished } from './collections.mjs';
import { readingMetadata } from './reading.mjs';

/**
 * The site's latest changes for the home page (layouts/index.html), from the pages' Git histories (page-history.mjs):
 * the newest `limit` changes (pull requests, or commits made directly on the branch) that touched a published article
 * or a page of a lecture or guide, newest first. The first commit, which imported the site, is left out.
 *
 * Each change is { time, pages, items, more, title }, or { time, pages, book, added, title } when every page it touched
 * is in one book (the list then names only the book):
 * - time: when the change was written (as on the recent changes page); pages: how many of those pages it touched;
 * - items: up to `shown` of them in reading order, new and renamed pages first, then articles; each { page, added },
 *   or for a book { book, page, added } (one of its pages) or { book, added } (several, the book standing for them;
 *   added when the book itself is new);
 * - more: whether the items leave pages out ("等 N 个页面");
 * - title: for a change to more than one page, the pull request's title or the commit's subject, to say what the
 *   change did.
 * page and book are content paths without index.md, as site.GetPage takes them.
 */
export function recentChanges(histories, records, { limit = 5, shown = 3 } = {}) {
  const changes = new Map();
  for (const [path, { changes: entries }] of histories) {
    const relative = path.slice('content/'.length), record = records.get(relative);
    if (!listed(record)) continue;
    for (const entry of entries) {
      if (entry.import) continue;
      const key = entry.pr !== undefined ? `pr ${entry.pr}` : `commit ${entry.commit}`;
      if (!changes.has(key)) changes.set(key, { time: entry.time, merged: entry.merged, title: entry.title, pages: [] });
      changes.get(key).pages.push({ path: contentPath(relative), metadata: record.metadata, added: entry.status === 'added', renamed: entry.status === 'renamed' });
    }
  }
  const newest = (a, b) => Date.parse(b.time) - Date.parse(a.time) || Date.parse(b.merged) - Date.parse(a.merged);
  return [...changes.values()].sort(newest).slice(0, limit).map(change => {
    const units = [], books = new Map();
    for (const page of change.pages) {
      const root = page.metadata.collectionRoot;
      if (!root) units.push({ page: page.path, added: page.added, first: page.added || page.renamed, key: readingOf(page.metadata), title: page.metadata.title, article: true });
      else {
        if (!books.has(root)) books.set(root, { book: root, title: page.metadata.collectionTitle, pages: [] });
        books.get(root).pages.push(page);
      }
    }
    for (const { book, title, pages } of books.values()) {
      const home = pages.find(page => page.metadata.collectionHome);
      if (pages.length === 1 && !home) units.push({ book, page: pages[0].path, added: pages[0].added, first: pages[0].added || pages[0].renamed, key: readingOf(pages[0].metadata), title: pages[0].metadata.title });
      else units.push({ book, added: Boolean(home?.added), first: Boolean(home?.added), key: readingMetadata({ name: title }).sortKey, title, several: pages.length > 1 });
    }
    const total = change.pages.length;
    if (units.length === 1 && units[0].several) return { time: change.time, pages: total, book: units[0].book, added: units[0].added, title: change.title };
    units.sort((a, b) => b.first - a.first || Boolean(b.article) - Boolean(a.article) || a.key.localeCompare(b.key) || a.title.localeCompare(b.title, 'zh-Hans-CN'));
    const items = units.slice(0, shown).map(({ book, page, added }) => ({ ...(book ? { book } : {}), ...(page ? { page } : {}), added }));
    return { time: change.time, pages: total, items, more: total > items.length, ...(total > 1 ? { title: change.title } : {}) };
  });
}

/** An article or a page of a lecture or guide that the site shows. */
function listed(record) {
  return Boolean(record?.normalized && !record.generated && isPublished(record.metadata) && (record.isWiki || record.metadata.collectionRoot));
}

/** A page's reading (scripts/prebuild/reading.mjs), as the site's lists sort it. */
const readingOf = metadata => metadata.sortKey ?? readingMetadata({ name: metadata.title, manual: metadata.sort }).sortKey;

/** The page's content path, as Hugo's site.GetPage takes it: wiki/甲/index.md -> wiki/甲. */
const contentPath = relative => relative.replace(/\/_?index\.md$/, '').replace(/\.md$/, '');
