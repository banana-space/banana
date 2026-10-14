// 最近更改（layouts/_default/recent-changes.html）：从 /api/recent-changes 逐页读取最近的 PR，按日期分组列出它们修改的页面；
// 页面链接到它在该 PR 中的差异（/diff/）。修改的页面不多时逐一列出；批量修改（如统一格式）只显示 PR 的标题、页面数与
// 按讲义分组的统计，页面列表折叠，展开后按字母分组，页面多时可以筛选。

const config = JSON.parse(document.getElementById('recent-changes-config').textContent);
const strings = config.strings;
const root = document.querySelector('.recent-changes');
const status = root.querySelector('.recent-changes-status');
const list = root.querySelector('.recent-changes-list');
const controls = root.querySelector('.recent-changes-controls');
const more = root.querySelector('.recent-changes-more');

/** Pull requests changing more pages than this are shown as one bulk change. */
const inlinePages = 5;
/** An expanded bulk change gets a filter field from this many pages, and letter headings within a part from this many. */
const filterFrom = 30, lettersFrom = 24;

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

const pad = value => String(value).padStart(2, '0');
const dayKey = date => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
function dayLabel(date) {
  const today = new Date(), yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
  const label = fill(strings.date, { month: date.getMonth() + 1, day: date.getDate() });
  const year = date.getFullYear() === today.getFullYear() ? '' : `${date.getFullYear()} 年 `;
  if (dayKey(date) === dayKey(today)) return [strings.today, label];
  if (dayKey(date) === dayKey(yesterday)) return [strings.yesterday, label];
  return [year + label, null];
}

const groupName = group => group.kind === 'book' ? group.title : strings.groups[group.kind] ?? group.kind;
/** A title with its formulas rendered (the server's KaTeX HTML), or the plain text. */
function titleNode(className, item) {
  const node = element('span', className);
  if (item.titleHTML) node.innerHTML = item.titleHTML;
  else node.textContent = item.title ?? strings.groups[item.kind] ?? item.kind;
  return node;
}
const diffURL = (pull, page) => `${config.diff}?${new URLSearchParams({ pr: pull.number, path: page.path })}`;
const byReading = (a, b) => a.sortKey.localeCompare(b.sortKey) || a.title.localeCompare(b.title, 'zh-CN');

function pageLink(pull, page, withBook = true) {
  const node = link(diffURL(pull, page), `recent-page${page.status === 'removed' ? ' is-removed' : ''}`);
  node.append(...titleNode(null, page).childNodes);
  // Pinyin, joined, for the filter of a bulk change: "qiyi" finds 奇异上同调.
  node.dataset.reading = page.sortKey.replace(/ /g, '');
  node.dataset.title = page.title.toLowerCase().replace(/\s+/g, '');
  const badges = [];
  if (page.status === 'added') badges.push(element('span', 'recent-badge recent-badge-added', strings.added));
  if (page.status === 'removed') badges.push(element('span', 'recent-badge recent-badge-removed', strings.removed));
  if (page.status === 'renamed' && page.previous) badges.push(element('span', 'recent-badge', fill(strings.renamed, { name: page.previous.replace(/\/_?index\.md$/, '').split('/').at(-1) })));
  // A page in a book carries the book's name, since chapter titles repeat across books.
  const book = withBook && page.group.kind === 'book' ? titleNode('recent-page-group', page.group) : null;
  return element('span', 'recent-page-item', node, book, ...badges);
}

function stateLabel(pull) {
  const state = pull.state === 'merged' ? 'merged' : pull.draft ? 'draft' : 'open';
  const label = element('span', `recent-state recent-state-${state}`, strings[state]);
  // Merged, and the site not yet rebuilt with it (live is null where the server cannot tell).
  if (pull.live === false) {
    label.classList.add('is-publishing');
    label.append(Object.assign(element('span', 'recent-publishing', strings.publishing), { title: strings.publishingHint }));
  }
  return label;
}

/** Who and which pull request, as one link to the pull request. */
function pullLink(pull) {
  const node = link(pull.url, 'recent-pull', element('span', 'recent-author', pull.author), element('span', 'recent-pull-number', `#${pull.number}`));
  Object.assign(node, { target: '_blank', rel: 'noopener' });
  return node;
}

function diffStat(pull) {
  return element('span', 'recent-diff',
    element('span', 'recent-diff-add', `+${pull.additions}`),
    element('span', 'recent-diff-del', `−${pull.deletions}`));
}

function renderPull(pull) {
  const time = new Date(pull.time);
  const bulk = pull.pages.length > inlinePages;
  const siteOnly = pull.pages.length === 0;
  const item = element('li', `recent-item recent-item-${pull.state}${bulk ? ' is-bulk' : ''}${siteOnly ? ' is-site' : ''}`);

  const head = element('div', 'recent-head');
  if (siteOnly) {
    head.append(element('span', 'recent-pull-title', pull.title), element('span', 'recent-chip', strings.siteOnly));
  } else if (bulk) {
    head.append(element('span', 'recent-pull-title', pull.title), element('span', 'recent-chip recent-chip-count', fill(strings.pages, { count: pull.pages.length })));
  } else {
    pull.pages.forEach((page, index) => {
      if (index) head.append(element('span', 'recent-sep', '、'));
      head.append(pageLink(pull, page));
    });
  }

  const meta = element('div', 'recent-meta',
    stateLabel(pull),
    pullLink(pull),
    // The pull request's own title, where it says more than the page's name.
    !bulk && !siteOnly && !pull.namesPage ? element('span', 'recent-pull-summary', pull.title) : null,
    diffStat(pull),
    !siteOnly && pull.otherFiles ? element('span', 'recent-other', fill(strings.otherFiles, { count: pull.otherFiles })) : null,
  );

  const main = element('div', 'recent-main', head, meta);
  if (bulk) main.append(bulkPages(pull));
  const clock = element('time', 'recent-time', `${pad(time.getHours())}:${pad(time.getMinutes())}`);
  clock.dateTime = pull.time;
  item.append(clock, main);
  return item;
}

/** A bulk change: how many pages in each part of the site, and the full list on request. */
function bulkPages(pull) {
  const groups = new Map();
  for (const page of pull.pages) {
    const name = groupName(page.group);
    if (!groups.has(name)) groups.set(name, { group: page.group, pages: [] });
    groups.get(name).pages.push(page);
  }
  const sorted = [...groups.values()].sort((a, b) => b.pages.length - a.pages.length);
  const summary = element('div', 'recent-groups', ...sorted.map(({ group, pages }) =>
    element('span', 'recent-group', titleNode('recent-group-name', group), element('span', 'recent-group-count', String(pages.length)))));
  const toggle = element('button', 'recent-expand', strings.showPages);
  toggle.type = 'button';
  toggle.setAttribute('aria-expanded', 'false');
  const panel = element('div', 'recent-page-panel');
  panel.hidden = true;
  toggle.addEventListener('click', () => {
    const open = panel.hidden;
    // Built on first use: a formatting pull request can list a thousand pages.
    if (open && !panel.childElementCount) fillPanel(panel, pull, sorted);
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? strings.hidePages : strings.showPages;
  });
  summary.append(toggle);
  const notes = pull.truncated ? element('p', 'recent-truncated', fill(strings.truncated, { count: pull.pages.length + pull.otherFiles })) : null;
  return element('div', 'recent-bulk', summary, panel, notes);
}

/** The pages of a bulk change by part of the site; a long part by letter, as in the site's lists. */
function fillPanel(panel, pull, groups) {
  const sections = [];
  for (const { group, pages } of groups) {
    pages.sort(byReading);
    const section = element('section', 'recent-page-section',
      element('h3', 'recent-page-panel-title', titleNode(null, group), element('span', 'recent-group-count', String(pages.length))));
    if (pages.length < lettersFrom) {
      section.append(element('ul', 'recent-page-grid', ...pages.map(page => element('li', null, pageLink(pull, page, false)))));
    } else {
      const letters = new Map();
      for (const page of pages) {
        if (!letters.has(page.letter)) letters.set(page.letter, []);
        letters.get(page.letter).push(page);
      }
      // '#' (digits and symbols) last, as in the site's lists.
      const order = [...letters.keys()].sort((a, b) => (a === '#') - (b === '#') || a.localeCompare(b));
      section.append(element('dl', 'recent-letters', ...order.flatMap(letter => [
        element('dt', 'recent-letter', letter.toUpperCase()),
        element('dd', null, element('ul', 'recent-letter-pages', ...letters.get(letter).map(page => element('li', null, pageLink(pull, page, false))))),
      ])));
    }
    sections.push(section);
  }
  if (pull.pages.length >= filterFrom) {
    const input = element('input', 'recent-page-filter');
    Object.assign(input, { type: 'search', placeholder: strings.filterPages, autocomplete: 'off', spellcheck: false });
    input.setAttribute('aria-label', strings.filterPages);
    const none = element('p', 'recent-page-none', strings.noPages);
    none.hidden = true;
    input.addEventListener('input', () => {
      const query = input.value.trim().toLowerCase().replace(/\s+/g, '');
      let any = false;
      for (const section of sections) {
        let shown = 0;
        for (const item of section.querySelectorAll('li')) {
          const page = item.querySelector('.recent-page');
          const match = !query || page.dataset.title.includes(query) || page.dataset.reading.includes(query);
          item.hidden = !match;
          if (match) shown++;
        }
        for (const dd of section.querySelectorAll('dd')) {
          const empty = ![...dd.querySelectorAll('li')].some(item => !item.hidden);
          dd.hidden = empty;
          dd.previousElementSibling.hidden = empty;
        }
        section.hidden = !shown;
        any ||= shown > 0;
      }
      none.hidden = any;
    });
    panel.append(element('div', 'recent-page-tools', input), none);
  }
  panel.append(...sections);
}

let pulls = [], page = 0;
const state = { filter: 'all', site: false };

function render() {
  const shown = pulls.filter(pull =>
    (state.filter === 'all' || pull.state === state.filter) && (state.site || pull.pages.length));
  list.replaceChildren();
  status.textContent = shown.length || !more.hidden ? '' : strings.empty;
  let day, items;
  for (const pull of shown) {
    const date = new Date(pull.time);
    if (dayKey(date) !== day) {
      day = dayKey(date);
      const [label, detail] = dayLabel(date);
      items = element('ol', 'recent-items');
      list.append(element('section', 'recent-day', element('h2', 'recent-day-title', label, detail && element('span', 'recent-day-date', detail)), items));
    }
    items.append(renderPull(pull));
  }
}

controls.addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  state.filter = button.dataset.filter;
  for (const other of controls.querySelectorAll('[data-filter]')) other.setAttribute('aria-pressed', String(other === button));
  render();
});
controls.querySelector('[data-show="site"]').addEventListener('change', event => { state.site = event.target.checked; render(); });

/**
 * The next page of pull requests. GitHub orders them by their last update, the list by when they were merged, so a
 * later page can hold a change that belongs among those already shown: the whole list is sorted again.
 */
async function loadMore() {
  more.disabled = true;
  more.textContent = strings.loading;
  try {
    const response = await fetch(`${config.api}?page=${page + 1}`, { headers: { Accept: 'application/json' } });
    const body = await response.json();
    if (!response.ok || !body.ok) throw new Error(body.errors?.[0]?.message ?? response.status);
    page++;
    const known = new Set(pulls.map(pull => pull.number));
    pulls.push(...body.pulls.filter(pull => !known.has(pull.number)));
    pulls.sort((a, b) => b.time.localeCompare(a.time));
    more.hidden = !body.more;
    controls.hidden = false;
    render();
  } catch (error) {
    console.error(error);
    if (!page) {
      status.textContent = strings.error;
      status.classList.add('is-error');
    } else {
      more.hidden = false;
    }
  } finally {
    more.disabled = false;
    more.textContent = strings.loadMore;
  }
}
more.addEventListener('click', loadMore);

status.textContent = strings.loading;
await loadMore();
