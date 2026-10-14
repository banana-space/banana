// 页面历史（layouts/_default/history.html）：/history/?path=<页面>。网站上已有的修改与旧站的修订来自构建时写出的
// /history/data/<页面>.json（scripts/prebuild/page-history.mjs），尚未出现在网站上的修改（待审阅的、已合并而还在发布的）
// 来自 /api/page-history；读取后者失败时只列出前者。修改链接到它的差异（/diff/），不按日期分组，最新的在前。

const config = JSON.parse(document.getElementById('history-config').textContent);
const strings = config.strings;
const root = document.querySelector('.history-page');
const status = root.querySelector('.history-status');
const list = root.querySelector('.history-list');

const fill = (text, values) => text.replace(/\{(\w+)\}/g, (match, key) => key in values ? values[key] : match);
function element(tag, className, ...children) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  node.append(...children.filter(child => child !== undefined && child !== null && child !== false));
  return node;
}
function link(href, className, ...children) {
  const node = element('a', className, ...children);
  node.href = href;
  return node;
}
const external = node => Object.assign(node, { target: '_blank', rel: 'noopener' });
const segments = path => path.split('/').map(encodeURIComponent).join('/');
const pageName = path => path.replace(/\/_?index\.md$/, '').replace(/\.md$/, '').split('/').at(-1);

const pad = value => String(value).padStart(2, '0');
/** When, in the reader's time zone: the date, and the time beneath it. */
function when(iso) {
  const date = new Date(iso);
  const node = element('time', 'history-time',
    element('span', 'history-date', `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`),
    element('span', 'history-clock', `${pad(date.getHours())}:${pad(date.getMinutes())}`));
  node.dateTime = iso;
  return node;
}

function diffStat(add, del) {
  if (add === null || add === undefined) return null; // A binary file.
  return element('span', 'recent-diff', element('span', 'recent-diff-add', `+${add}`), element('span', 'recent-diff-del', `−${del}`));
}

function badges(change) {
  if (change.status === 'added') return element('span', 'recent-badge recent-badge-added', strings.added);
  if (change.status === 'removed') return element('span', 'recent-badge recent-badge-removed', strings.removed);
  if (change.status === 'renamed' && change.previous) return element('span', 'recent-badge', fill(strings.renamed, { name: pageName(change.previous) }));
}

function stateLabel(state) {
  const label = element('span', `recent-state recent-state-${state}`, strings[state]);
  if (state === 'publishing') label.title = strings.publishingHint;
  return label;
}

function row(className, time, head, meta) {
  return element('li', `recent-item history-item ${className}`, when(time), element('div', 'recent-main', head, meta));
}

/** A pull request: its title links to its change of this page; who and which pull request, to GitHub. */
function pullRow(pull, path) {
  const state = pull.state === 'open' ? (pull.draft ? 'draft' : 'open') : pull.live === false ? 'publishing' : 'merged';
  // The diff page's back link returns here (history: the page's path now, which a rename may have changed).
  const title = link(`${config.diff}?${new URLSearchParams({ pr: pull.number, path: pull.path ?? path, history: path })}`, 'recent-pull-title', pull.title);
  const by = external(link(pull.url ?? `${config.repository}/pull/${pull.number}`, 'recent-pull',
    element('span', 'recent-author', pull.author ?? ''), element('span', 'recent-pull-number', `#${pull.number}`)));
  return row(`recent-item-${pull.state === 'open' ? 'open' : 'merged'}`, pull.time,
    element('div', 'recent-head', title, badges(pull)),
    element('div', 'recent-meta', stateLabel(state), by, diffStat(pull.additions ?? pull.add, pull.deletions ?? pull.del)));
}

/**
 * A commit made on the branch itself, not through a pull request: to GitHub. The first commit, which imported the
 * site, is the site's own: no author or commit shown.
 */
function commitRow(change, withLegacy) {
  if (change.import) {
    // Its line count is the converted page, not a change of it, where the legacy site's history comes before.
    return row('recent-item-merged history-import', change.time,
      element('div', 'recent-head', element('span', 'recent-pull-title', withLegacy ? strings.imported : strings.created)),
      element('div', 'recent-meta', stateLabel('merged'), withLegacy ? null : diffStat(change.add, change.del)));
  }
  const by = external(link(`${config.repository}/commit/${change.commit}`, 'recent-pull',
    element('span', 'recent-author', change.author ?? ''), element('span', 'recent-pull-number', change.commit.slice(0, 7))));
  return row('recent-item-merged', change.time,
    element('div', 'recent-head', element('span', 'recent-pull-title', change.title), badges(change)),
    element('div', 'recent-meta', stateLabel('merged'), by, diffStat(change.add, change.del)));
}

/** A revision on the legacy site: its summary (plain text), who, and how many lines. */
function legacyRow(revision) {
  const summary = revision.comment
    ? element('span', 'history-summary', revision.comment)
    : element('span', 'history-summary is-empty', strings.noSummary);
  const minor = revision.minor ? Object.assign(element('span', 'recent-badge history-minor', strings.minor), { title: strings.minorHint }) : null;
  return row('history-legacy-item', revision.time,
    element('div', 'recent-head', summary, minor),
    element('div', 'recent-meta', revision.user
      ? element('span', 'recent-author', revision.user)
      : element('span', 'recent-author is-hidden', strings.hiddenUser), diffStat(revision.add, revision.del)));
}

function header(data, path) {
  document.title = fill(strings.pageTitle, { title: data.title });
  // "{title} 的历史", the title with its formulas rendered.
  const [before, after] = strings.heading.split('{title}');
  const name = element('span', 'history-title-name');
  name.innerHTML = data.titleHTML;
  root.querySelector('.history-title').replaceChildren(before, name, element('span', 'history-title-suffix', after));
  root.querySelector('.history-view-page').href = data.url;
  root.querySelector('.history-edit-page').href = `${config.edit}?${new URLSearchParams({ path })}`;
  root.querySelector('.history-header').hidden = false;
}

/** Rows shown at a time: the first of the changes, and of the legacy site's once it is opened; more on request. */
const pageSize = 30;
const shown = { changes: pageSize, legacy: 0 };

function moreButton(onClick) {
  const button = element('button', 'recent-changes-more', strings.showMore);
  button.type = 'button';
  button.addEventListener('click', onClick);
  return button;
}

/** Rows for the entries up to the number shown, and a button for the next ones while there are more. */
function paged(entries, toRow, key, rerender) {
  const items = element('ol', 'recent-items history-items', ...entries.slice(0, shown[key]).map(toRow));
  return [items, entries.length > shown[key] && moreButton(() => { shown[key] += pageSize; rerender(); })];
}

function render(data, pending) {
  const rerender = () => render(data, pending);
  const known = new Set(data.changes.map(change => change.pr).filter(Boolean));
  const entries = [...pending.filter(pull => !known.has(pull.number)), ...data.changes];
  const toRow = change => change.commit ? commitRow(change, data.legacy.length > 0)
    : pullRow(change.pr ? { ...change, number: change.pr, state: 'merged' } : change, data.path);
  list.replaceChildren(...paged(entries, toRow, 'changes', rerender).filter(Boolean));
  if (!data.legacy.length) return;
  // The legacy site's history, folded at first: a page can have hundreds of revisions there.
  const open = shown.legacy > 0;
  const toggle = element('button', 'recent-expand history-legacy-toggle', open ? strings.hide : fill(strings.legacyShow, { count: data.legacy.length }));
  toggle.type = 'button';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.addEventListener('click', () => { shown.legacy = open ? 0 : pageSize; rerender(); });
  const section = element('section', 'history-legacy',
    element('h2', 'history-legacy-title', strings.legacy),
    element('p', 'history-legacy-note', strings.legacyNote, ' ', toggle));
  // Built only when opened.
  if (open) section.append(...paged(data.legacy, legacyRow, 'legacy', rerender).filter(Boolean));
  list.append(section);
}

async function load() {
  const path = (new URLSearchParams(location.search).get('path') ?? '').replace(/^content\//, '');
  status.textContent = strings.loading;
  // Not yet on the site: asked for alongside the page's history, and left out if it cannot be had.
  const pending = path ? fetch(`${config.api}?${new URLSearchParams({ path })}`, { headers: { Accept: 'application/json' } })
    .then(async response => {
      const body = await response.json();
      if (!response.ok || !body.ok) throw new Error(body.errors?.[0]?.message ?? response.status);
      return body.pulls;
    }) : Promise.resolve([]);
  pending.catch(() => {});
  try {
    if (!/^[^/].*\.md$/.test(path) || path.split('/').includes('..')) throw Object.assign(new Error('not a page'), { missing: true });
    const response = await fetch(`${config.data}${segments(path)}.json`, { headers: { Accept: 'application/json' } });
    if (response.status === 404) throw Object.assign(new Error('no history'), { missing: true });
    if (!response.ok) throw new Error(response.status);
    const data = await response.json();
    header(data, path);
    // What is on the site at once; the rest at the top once it comes (GitHub can take a while).
    render(data, []);
    status.textContent = '';
    try { render(data, await pending); }
    catch (error) {
      console.error(error);
      status.textContent = strings.pendingError;
    }
  } catch (error) {
    console.error(error);
    status.textContent = error.missing ? strings.missing : strings.error;
    status.classList.add('is-error');
  }
}

await load();
