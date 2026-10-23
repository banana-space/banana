import assert from 'node:assert/strict';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { createProject, buildProject } from './helpers/project.mjs';
import { pageHistories } from '../scripts/prebuild/page-history.mjs';
import { recentChanges } from '../scripts/prebuild/recent-changes.mjs';

// 页面历史（scripts/prebuild/page-history.mjs）：从本地 Git 历史中读出每个页面的 PR 与提交，跟随改名，
// 认出 PR 的作者与时间；从旧站迁移来的页面另带旧站的修订（legacy/history.json，以导入时的路径为键，页面不晚于键加入）；
// 构建写出 /history/data/<页面>.json，页面底部链接到 /history/；首页列出最近的几次修改（scripts/prebuild/recent-changes.mjs）。
const root = await createProject('page-history');
const page = (title, body) => `---\ntitle: '${title}'\n---\n\n${body}\n`;
const at = (path, text) => mkdir(join(root, path, '..'), { recursive: true }).then(() => writeFile(join(root, path), text));
function git(args, { name = 'Maintainer', email = 'maintainer@example.org', date = '2026-01-01T00:00:00Z' } = {}) {
  return execFileSync('git', ['-c', `user.name=${name}`, '-c', `user.email=${email}`, '-c', 'core.hooksPath=/dev/null', ...args], {
    cwd: root, encoding: 'utf8', env: { ...process.env, GIT_AUTHOR_DATE: date, GIT_COMMITTER_DATE: date },
  }).trim();
}
/** A pull request: a branch from main with one commit by author, merged as GitHub merges, titled in the body. */
async function pull(number, from, branch, title, author, written, merged, change) {
  git(['checkout', '-q', '-b', `pr-${number}`, 'main']);
  await change();
  git(['add', '-A']);
  git(['commit', '-q', '-m', title], { ...author, date: written });
  git(['checkout', '-q', 'main']);
  git(['merge', '-q', '--no-ff', `pr-${number}`, '-m', `Merge pull request #${number} from ${from}/${branch}`, '-m', title], { date: merged });
}

try {
  // The import: two entries from the legacy site, and help pages written for the new one.
  await at('content/wiki/甲/index.md', page('甲', '甲的正文。\n\n第二段。'));
  await at('content/wiki/乙/index.md', page('$\\infty$-乙', '乙的正文。'));
  await at('legacy/history.json', JSON.stringify({
    'content/wiki/甲/index.md': [
      { time: '2021-01-01T00:00:00Z', user: 'Ada', add: 3, del: 0, comment: '创建页面' },
      { time: '2022-02-02T00:00:00Z', user: 'Bob', add: 1, del: 1, minor: true },
    ],
    'content/wiki/乙/index.md': [{ time: '2023-03-03T00:00:00Z', user: 'Cy', add: 2, del: 0 }],
    // Not in the import: a page made later under this name is a new page.
    'content/wiki/丁/index.md': [{ time: '2020-01-01T00:00:00Z', user: 'Old', add: 1, del: 0 }],
  }));
  git(['init', '-q', '-b', 'main']);
  git(['add', '-A']);
  git(['commit', '-q', '-m', '香蕉空间'], { date: '2026-02-01T00:00:00Z' });

  // The online editor's pull request: its author is in the branch's name.
  await pull(1, 'banana-space', 'edit/octo/0123456789ab', '甲', { name: 'banana-bot', email: 'bot@example.org' }, '2026-03-01T23:00:00Z', '2026-03-02T08:00:00Z',
    () => at('content/wiki/甲/index.md', page('甲', '甲的新正文。\n\n第二段。')));
  // A fork's pull request renaming 乙 to 丙: its author is the fork's owner.
  await pull(2, 'forker', 'rename', '乙改名为丙', { name: 'Someone', email: 'someone@example.org' }, '2026-04-01T00:00:00Z', '2026-04-02T00:00:00Z', async () => {
    git(['mv', 'content/wiki/乙', 'content/wiki/丙']);
    await at('content/wiki/丙/index.md', page('$\\infty$-丙', '乙的正文。'));
  });
  // A branch of the repository itself: its author by the GitHub address.
  await pull(3, 'banana-space', 'new-page', '新页面丁', { name: 'Real Name', email: '12345+writer@users.noreply.github.com' }, '2026-05-01T00:00:00Z', '2026-05-02T00:00:00Z',
    () => at('content/wiki/丁/index.md', page('丁', '新的丁。')));
  // A commit straight to main.
  await writeFile(join(root, 'content/help/style/index.md'), `${await readFile(join(root, 'content/help/style/index.md'), 'utf8')}\n更多帮助。\n`);
  git(['commit', '-q', '-am', '补充帮助'], { name: 'Direct', email: 'direct@example.org', date: '2026-06-01T00:00:00Z' });
  // A book migrated later in a pull request: its pages first, then their legacy history, in two commits of the branch.
  const withLegacy = async entries => at('legacy/history.json', JSON.stringify({ ...JSON.parse(await readFile(join(root, 'legacy/history.json'), 'utf8')), ...entries }));
  git(['checkout', '-q', '-b', 'pr-4', 'main']);
  await at('content/books/戊/_index.md', page('戊', '戊的正文。'));
  git(['add', '-A']);
  git(['commit', '-q', '-m', '迁移讲义戊'], { date: '2026-07-01T00:00:00Z' });
  await withLegacy({ 'content/books/戊/_index.md': [{ time: '2022-01-01T00:00:00Z', user: 'Dee', add: 1, del: 0 }] });
  git(['add', '-A']);
  git(['commit', '-q', '-m', '戊的旧站历史'], { date: '2026-07-01T01:00:00Z' });
  git(['checkout', '-q', 'main']);
  git(['merge', '-q', '--no-ff', 'pr-4', '-m', 'Merge pull request #4 from banana-space/book', '-m', '迁移讲义戊'], { date: '2026-07-02T00:00:00Z' });
  // The same straight on a branch: the page in one commit, its legacy history in a later one.
  await at('content/books/己/_index.md', page('己', '己的正文。'));
  git(['add', '-A']);
  git(['commit', '-q', '-m', '迁移讲义己'], { date: '2026-08-01T00:00:00Z' });
  await withLegacy({ 'content/books/己/_index.md': [{ time: '2022-02-01T00:00:00Z', user: 'Eve', add: 1, del: 0 }] });
  git(['add', '-A']);
  git(['commit', '-q', '-m', '己的旧站历史'], { date: '2026-08-02T00:00:00Z' });

  const histories = await pageHistories(root, { repository: 'banana-space/banana' });
  const shown = path => histories.get(path).changes.map(({ pr, commit, title, author, time, status, add, del, path: then, previous, import: imported }) =>
    ({ id: pr ?? commit.length, title, author, time, status, add, del, ...(then ? { then } : {}), ...(previous ? { previous } : {}), ...(imported ? { imported } : {}) }));
  const head = git(['rev-list', '--max-parents=0', 'HEAD']);
  assert.equal(histories.get('content/wiki/甲/index.md').changes.at(-1).commit, head);
  assert.deepEqual(shown('content/wiki/甲/index.md'), [
    { id: 1, title: '甲', author: 'octo', time: '2026-03-01T23:00:00Z', status: 'modified', add: 1, del: 1 },
    { id: 40, title: '香蕉空间', author: 'Maintainer', time: '2026-02-01T00:00:00Z', status: 'added', add: 7, del: 0, imported: true },
  ], '编辑器的 PR：作者取自分支名，时间是分支上最新提交的时间（不是合并的时间），标题取自合并提交的正文');
  assert.equal(histories.get('content/wiki/甲/index.md').changes[0].merged, '2026-03-02T08:00:00Z');
  assert.deepEqual(histories.get('content/wiki/甲/index.md').legacy.map(revision => revision.user), ['Bob', 'Ada'], '旧站的修订，最新的在前');
  assert.deepEqual(shown('content/wiki/丙/index.md'), [
    { id: 2, title: '乙改名为丙', author: 'forker', time: '2026-04-01T00:00:00Z', status: 'renamed', add: 1, del: 1, previous: 'wiki/乙/index.md' },
    { id: 40, title: '香蕉空间', author: 'Maintainer', time: '2026-02-01T00:00:00Z', status: 'added', add: 5, del: 0, then: 'wiki/乙/index.md', imported: true },
  ], '改名之前的历史跟随旧名；复刻的 PR 的作者是复刻的所有者');
  assert.deepEqual(histories.get('content/wiki/丙/index.md').legacy.map(revision => revision.user), ['Cy'], '改名的页面带着导入时的名字的旧站历史');
  assert.equal(histories.has('content/wiki/乙/index.md'), false, '只有当前的页面');
  assert.deepEqual(shown('content/wiki/丁/index.md'), [{ id: 3, title: '新页面丁', author: 'writer', time: '2026-05-01T00:00:00Z', status: 'added', add: 5, del: 0 }],
    '仓库中的分支：作者取自 GitHub 的地址');
  assert.deepEqual(histories.get('content/wiki/丁/index.md').legacy, [], '导入之后新建的页面没有旧站的历史，即使旧站有同名页面');
  assert.deepEqual(histories.get('content/books/戊/_index.md').legacy.map(revision => revision.user), ['Dee'], '之后在 PR 中迁移的讲义：页面与旧站历史一起合并');
  assert.deepEqual(histories.get('content/books/己/_index.md').legacy.map(revision => revision.user), ['Eve'], '之后迁移的讲义：旧站历史晚于页面加入');
  assert.deepEqual(shown('content/help/style/index.md').map(change => [change.id, change.title, change.author]), [[40, '补充帮助', 'Direct'], [40, '香蕉空间', 'Maintainer']],
    '直接提交到分支的提交');
  assert.deepEqual(histories.get('content/help/style/index.md').legacy, []);

  // The build writes each published page's history with its title and address; the page links to its history.
  buildProject(root);
  const data = JSON.parse(await readFile(join(root, 'public/history/data/wiki/丙/index.md.json'), 'utf8'));
  assert.deepEqual([data.path, data.title, data.url, data.legacy.length, data.changes.length], ['wiki/丙/index.md', '∞-丙', '/wiki/丙/', 1, 2]);
  assert.match(data.titleHTML, /class="math-rendered"><span class="katex">/, '标题中的公式已渲染');
  assert.ok(existsSync(join(root, 'public/history/index.html')));
  const html = await readFile(join(root, 'public/wiki/丙/index.html'), 'utf8');
  const query = encodeURIComponent('wiki/丙/index.md');
  assert.ok(html.includes(`href="/history/?path=${query}"`), '页面历史的链接');
  assert.ok(html.includes(`href="/edit/?path=${query}"`), '编辑的链接');

  // The home page lists the latest changes, newest first: pages link to themselves, new pages carry a plus, a guide's page
  // follows its guide's name; the import and pages outside the site's articles, lectures and guides are left out.
  const home = await readFile(join(root, 'public/index.html'), 'utf8');
  const rows = [...home.matchAll(/<li class="home-recent-item">([\s\S]*?)<\/li>/g)].map(match => match[1]);
  assert.equal(rows.length, 4, '四次修改：直接提交、PR 3、2、1；导入与 books/ 中不属于讲义的页面不列出');
  assert.match(rows[0], /写作指南<\/a><span class="home-recent-path" aria-hidden="true">›<\/span><a href="\/help\/style\/">风格指引<\/a>/);
  assert.doesNotMatch(rows[0], /icon-book/, '指南不是讲义，没有书的图标');
  assert.match(rows[1], /href="\/wiki\/%E4%B8%81\/">丁<\/a><sup class="home-recent-new"><span aria-hidden="true">\+<\/span><span class="sr-only">新页面<\/span><\/sup>/);
  assert.match(rows[2], /href="\/wiki\/%E4%B8%99\/"><span class="math-rendered"/);
  assert.doesNotMatch(rows[2], /home-recent-new/, '改名不是新页面');
  assert.match(rows[3], /href="\/wiki\/%E7%94%B2\/">甲<\/a>/);
  assert.match(rows[3], /<time class="home-recent-day" datetime="2026-03-01T23:00:00Z" data-local-time[^>]*>3 月 1 日<\/time>/, '日期与时间：写作的时间，没有脚本时为 UTC');
  assert.match(rows[3], /<time class="home-recent-clock" datetime="2026-03-01T23:00:00Z" data-local-time data-format="\{hour\}:\{minute\}">23:00<\/time>/);
  assert.doesNotMatch(home.match(/<ul class="home-links">[\s\S]*?<\/ul>/)[0], /recent-changes/, '有最近更改一节时，链接一行不再重复');

  // Without Git history: no history, and no link to it.
  await rm(join(root, '.git'), { recursive: true, force: true });
  assert.equal((await pageHistories(root)).size, 0);
  buildProject(root);
  assert.equal(existsSync(join(root, 'public/history/data/wiki/丙/index.md.json')), false);
  assert.equal((await readFile(join(root, 'public/wiki/丙/index.html'), 'utf8')).includes('/history/?path='), false);
  const plain = await readFile(join(root, 'public/index.html'), 'utf8');
  assert.doesNotMatch(plain, /home-recent/, '没有 Git 历史时首页没有最近更改一节');

  // Grouping: a bulk change names its first pages, then how many in all; the pages of one book stand as the book;
  // a change within one book names only the book; a change to more than one page has its title; at most `limit`
  // changes, newest first.
  const article = (name, extra = {}) => [`wiki/${name}/index.md`, { normalized: true, isWiki: true, metadata: { title: name, ...extra } }];
  const lecture = (name, home = false) => [`books/书/${home ? '_index' : `${name}/index`}.md`,
    { normalized: true, metadata: { title: name, collectionRoot: 'books/书', collectionTitle: '书', collectionHome: home, collectionKind: 'lecture' } }];
  const records = new Map([article('Abel 群'), article('环'), article('域'), article('模'), article('草稿', { draft: true }), lecture('书', true), lecture('一'), lecture('二')]);
  const history = (...changes) => ({ changes: changes.map(([id, status = 'modified']) => ({ pr: id, time: `2026-01-0${id}T00:00:00Z`, merged: `2026-01-0${id}T01:00:00Z`, status, title: `PR ${id}` })) });
  const recent = recentChanges(new Map([
    ['content/wiki/环/index.md', history([1], [3], [5])], ['content/wiki/域/index.md', history([3, 'added'])],
    ['content/wiki/模/index.md', history([3])], ['content/wiki/Abel 群/index.md', history([3], [4])],
    ['content/wiki/草稿/index.md', history([5])], ['content/books/书/一/index.md', history([2], [3])], ['content/books/书/二/index.md', history([2], [4])],
    ['content/books/书/_index.md', history([4, 'added'])],
  ]), records, { limit: 4 });
  assert.deepEqual(recent, [
    { time: '2026-01-05T00:00:00Z', pages: 1, items: [{ page: 'wiki/环', added: false }], more: false },
    { time: '2026-01-04T00:00:00Z', pages: 3, items: [{ book: 'books/书', added: true }, { page: 'wiki/Abel 群', added: false }], more: true, title: 'PR 4' },
    { time: '2026-01-03T00:00:00Z', pages: 5, items: [{ page: 'wiki/域', added: true }, { page: 'wiki/Abel 群', added: false }, { page: 'wiki/环', added: false }], more: true, title: 'PR 3' },
    { time: '2026-01-02T00:00:00Z', pages: 2, book: 'books/书', added: false, title: 'PR 2' },
  ], '新的页面与讲义在前，其余条目按读音，讲义随后；草稿不算；只在一部讲义中的修改只写讲义名；不止一个页面的修改带标题');
  assert.deepEqual(recentChanges(new Map([['content/wiki/环/index.md', history([6])], ['content/wiki/域/index.md', history([6])]]), records),
    [{ time: '2026-01-06T00:00:00Z', pages: 2, items: [{ page: 'wiki/环', added: false }, { page: 'wiki/域', added: false }], more: false, title: 'PR 6' }],
    '全部列出的两个页面也带标题');
  console.log('页面历史：PR 的作者、时间与标题、复刻与编辑器的分支、直接提交、改名、旧站的修订（导入时与之后迁移的页面）、构建写出的数据与链接、首页的最近更改（分组与排序）、没有 Git 历史时验证通过');
} finally { await rm(root, { recursive: true, force: true }); }
