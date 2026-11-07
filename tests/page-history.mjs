import assert from 'node:assert/strict';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { execFile, execFileSync } from 'node:child_process';
import { createServer } from 'node:http';
import { once } from 'node:events';
import { mkdtemp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { promisify } from 'node:util';
import { createProject, buildProject, buildEnvironment } from './helpers/project.mjs';
import { pageHistories } from '../scripts/prebuild/page-history.mjs';
import { recentChanges } from '../scripts/prebuild/recent-changes.mjs';

// 页面历史（scripts/prebuild/page-history.mjs）：从本地 Git 历史中读出每个页面的 PR 与提交，跟随改名，
// PR 与提交的作者取自 GitHub（scripts/prebuild/github-authors.mjs，这里是模拟的 GitHub），PR 的时间；从旧站迁移来的页面另带旧站的修订（data/legacy_history.json，以导入时的路径为键，页面不晚于键加入）；
// 构建写出 /history/data/<页面>.json，页面底部链接到 /history/；首页列出最近的几次修改（scripts/prebuild/recent-changes.mjs）。
// A GitHub of the site's repository (scripts/prebuild/github-authors.mjs reads who wrote each change from it): pull
// requests by number, with their commits; the commits on the branch by commit.
const pulls = new Map(), branchCommits = new Map(), requests = [], broken = new Map();
const user = (login, type = 'User') => ({ login, type });
/** A merged pull request opened by author, its commits' authors as GitHub links them (a login, null for no account). */
function pullOnGitHub(number, author, writers, { ref = `branch-${number}`, from = 'banana-space/banana', merged = true } = {}) {
  pulls.set(number, {
    pull: { number, merged_at: merged ? '2026-01-01T00:00:00Z' : null, user: user(author), head: { ref, repo: { full_name: from } } },
    commits: writers.map((writer, i) => ({ sha: `${number}-${i}`, author: typeof writer === 'string' ? user(writer) : writer })),
  });
}
const fake = createServer((request, response) => {
  const url = new URL(request.url, 'http://localhost'), path = url.pathname.replace(/^\/repos\/banana-space\/banana/, '');
  requests.push({ path: `${path}${url.search}`, authorization: request.headers.authorization });
  const reply = (status, value) => { response.writeHead(status, { 'Content-Type': 'application/json' }); response.end(JSON.stringify(value)); };
  const failure = broken.get(path);
  if (failure === 'hang') return; // Never answers: the build gives up after its timeout.
  if (failure) return reply(failure, { message: 'API rate limit exceeded' });
  let match = path.match(/^\/pulls\/(\d+)(\/commits)?$/);
  if (match) {
    const found = pulls.get(Number(match[1]));
    if (!found) return reply(404, { message: 'Not Found' });
    if (!match[2]) return reply(200, found.pull);
    const page = Number(url.searchParams.get('page') ?? 1), size = Number(url.searchParams.get('per_page') ?? 30);
    return reply(200, found.commits.slice((page - 1) * size, page * size));
  }
  match = path.match(/^\/commits\/([0-9a-f]{40})$/);
  if (match) return reply(200, { sha: match[1], author: branchCommits.has(match[1]) ? branchCommits.get(match[1]) : null });
  reply(404, { message: 'Not Found' });
});
fake.listen(0, '127.0.0.1');
await once(fake, 'listening');
const api = `http://127.0.0.1:${fake.address().port}`;
const cacheDirectory = await mkdtemp(join(tmpdir(), 'banana-github-authors-'));
const warnings = [];
const github = { token: 'test-token', api, cacheFile: join(cacheDirectory, 'authors.json'), log: message => warnings.push(message) };
/** The requests made since the last call, as paths. */
const since = () => requests.splice(0).map(request => request.path);

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
  // The file moved after the import: its keys still count from when they appeared, at its former path.
  git(['mv', 'legacy/history.json', 'data/legacy_history.json']);
  git(['commit', '-q', '-m', '移动旧站历史'], { date: '2026-02-01T12:00:00Z' });

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
  const withLegacy = async entries => at('data/legacy_history.json', JSON.stringify({ ...JSON.parse(await readFile(join(root, 'data/legacy_history.json'), 'utf8')), ...entries }));
  git(['checkout', '-q', '-b', 'pr-4', 'main']);
  await at('content/books/戊/index.md', page('戊', '戊的正文。'));
  git(['add', '-A']);
  git(['commit', '-q', '-m', '迁移讲义戊'], { date: '2026-07-01T00:00:00Z' });
  await withLegacy({ 'content/books/戊/index.md': [{ time: '2022-01-01T00:00:00Z', user: 'Dee', add: 1, del: 0 }] });
  git(['add', '-A']);
  git(['commit', '-q', '-m', '戊的旧站历史'], { date: '2026-07-01T01:00:00Z' });
  git(['checkout', '-q', 'main']);
  git(['merge', '-q', '--no-ff', 'pr-4', '-m', 'Merge pull request #4 from banana-space/book', '-m', '迁移讲义戊'], { date: '2026-07-02T00:00:00Z' });
  // The same straight on a branch: the page in one commit, its legacy history in a later one.
  await at('content/books/己/index.md', page('己', '己的正文。'));
  git(['add', '-A']);
  git(['commit', '-q', '-m', '迁移讲义己'], { date: '2026-08-01T00:00:00Z' });
  await withLegacy({ 'content/books/己/index.md': [{ time: '2022-02-01T00:00:00Z', user: 'Eve', add: 1, del: 0 }] });
  git(['add', '-A']);
  git(['commit', '-q', '-m', '己的旧站历史'], { date: '2026-08-02T00:00:00Z' });

  // On GitHub: the editor's pull request is opened by the bot for octo, whose address its commit has; the fork's by its
  // owner, its commit's address belonging to no account; the book's by maint, with commits by none.
  pullOnGitHub(1, 'banana-bot', ['octo'], { ref: 'edit/octo/0123456789ab' });
  pullOnGitHub(2, 'forker', [null], { ref: 'rename', from: 'forker/banana' });
  pullOnGitHub(3, 'writer', ['writer']);
  pullOnGitHub(4, 'maint', [null, null]);
  branchCommits.set(git(['log', '-1', '--format=%H', '--grep=补充帮助']), user('direct'));

  const histories = await pageHistories(root, { repository: 'banana-space/banana', github });
  const asked = requests.splice(0);
  assert.deepEqual(asked.map(request => request.path).sort(), [
    ...[1, 2, 3, 4].flatMap(number => [`/pulls/${number}`, `/pulls/${number}/commits?per_page=100&page=1`]),
    ...git(['log', '--first-parent', '--no-merges', '--format=%H', 'HEAD', '--', 'content']).split('\n').map(sha => `/commits/${sha}`),
  ].sort(), '每个合并的 PR 两个请求（PR 与它的提交），每个直接提交一个');
  assert.ok(asked.every(request => request.authorization === 'Bearer test-token'), '带着令牌');
  const shown = path => histories.get(path).changes.map(({ pr, commit, title, author, time, status, add, del, path: then, previous, import: imported }) =>
    ({ id: pr ?? commit.length, title, author, time, status, add, del, ...(then ? { then } : {}), ...(previous ? { previous } : {}), ...(imported ? { imported } : {}) }));
  const head = git(['rev-list', '--max-parents=0', 'HEAD']);
  assert.equal(histories.get('content/wiki/甲/index.md').changes.at(-1).commit, head);
  assert.deepEqual(shown('content/wiki/甲/index.md'), [
    { id: 1, title: '甲', author: 'octo', time: '2026-03-01T23:00:00Z', status: 'modified', add: 1, del: 1 },
    { id: 40, title: '香蕉空间', author: null, time: '2026-02-01T00:00:00Z', status: 'added', add: 7, del: 0, imported: true },
  ], '编辑器的 PR：作者是编辑器的用户，不是开 PR 的机器人；时间是分支上最新提交的时间（不是合并的时间），标题取自合并提交的正文；GitHub 不知道作者的提交没有作者（不用 Git 记下的姓名）');
  assert.equal(histories.get('content/wiki/甲/index.md').changes[0].merged, '2026-03-02T08:00:00Z');
  assert.deepEqual(histories.get('content/wiki/甲/index.md').legacy.map(revision => revision.user), ['Bob', 'Ada'], '旧站的修订，最新的在前');
  assert.deepEqual(shown('content/wiki/丙/index.md'), [
    { id: 2, title: '乙改名为丙', author: 'forker', time: '2026-04-01T00:00:00Z', status: 'renamed', add: 1, del: 1, previous: 'wiki/乙/index.md' },
    { id: 40, title: '香蕉空间', author: null, time: '2026-02-01T00:00:00Z', status: 'added', add: 5, del: 0, then: 'wiki/乙/index.md', imported: true },
  ], '改名之前的历史跟随旧名；复刻的 PR 的作者是开 PR 的人，提交的邮箱不属于任何账号也不影响');
  assert.deepEqual(histories.get('content/wiki/丙/index.md').legacy.map(revision => revision.user), ['Cy'], '改名的页面带着导入时的名字的旧站历史');
  assert.equal(histories.has('content/wiki/乙/index.md'), false, '只有当前的页面');
  assert.deepEqual(shown('content/wiki/丁/index.md'), [{ id: 3, title: '新页面丁', author: 'writer', time: '2026-05-01T00:00:00Z', status: 'added', add: 5, del: 0 }],
    '仓库中的分支');
  assert.deepEqual(histories.get('content/wiki/丁/index.md').legacy, [], '导入之后新建的页面没有旧站的历史，即使旧站有同名页面');
  assert.deepEqual(histories.get('content/books/戊/index.md').legacy.map(revision => revision.user), ['Dee'], '之后在 PR 中迁移的讲义：页面与旧站历史一起合并');
  assert.deepEqual(histories.get('content/books/己/index.md').legacy.map(revision => revision.user), ['Eve'], '之后迁移的讲义：旧站历史晚于页面加入');
  assert.deepEqual(shown('content/help/style/index.md').map(change => [change.id, change.title, change.author]), [[40, '补充帮助', 'direct'], [40, '香蕉空间', null]],
    '直接提交到分支的提交：GitHub 对应到的账号');
  assert.deepEqual(histories.get('content/help/style/index.md').legacy, []);

  // The build writes each published page's history with its title and address; the page links to its history.
  buildProject(root);
  const data = JSON.parse(await readFile(join(root, 'public/history/data/wiki/丙/index.md.json'), 'utf8'));
  assert.deepEqual([data.path, data.title, data.url, data.legacy.length, data.changes.length], ['wiki/丙/index.md', '∞-丙', '/wiki/丙/', 1, 2]);
  assert.match(data.titleHTML, /class="bm-math-rendered"><span class="katex">/, '标题中的公式已渲染');
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
  assert.match(rows[1], /href="\/wiki\/%E4%B8%81\/">丁<\/a><span class="home-recent-new"><svg class="ui-icon"[^>]*><path d="M12 5v14M5 12h14"><\/path><\/svg><span class="sr-only">新页面<\/span><\/span>/);
  assert.match(rows[2], /href="\/wiki\/%E4%B8%99\/"><span class="bm-math-rendered"/);
  assert.doesNotMatch(rows[2], /home-recent-new/, '改名不是新页面');
  assert.match(rows[3], /href="\/wiki\/%E7%94%B2\/">甲<\/a>/);
  assert.match(rows[3], /<time class="home-recent-day" datetime="2026-03-01T23:00:00Z" data-local-time[^>]*>3 月 1 日<\/time>/, '日期：写作的时间，没有脚本时为 UTC');
  assert.doesNotMatch(home, /home-recent-clock/, '不写时间');
  assert.match(home, /<ol class="?home-recent-list"? data-hide-repeats/, '与上一行同一天的日期不显示（local-time.js）');
  assert.doesNotMatch(home.match(/<ul class="home-links">[\s\S]*?<\/ul>/)[0], /recent-changes/, '有最近更改一节时，链接一行不再重复');

  // Minor edits (scripts/shared/minor-edits.mjs): a pull request rewrites 甲 and fixes links in 丁 and 丙, marked in its
  // commits (a reviewer's later, empty commit overriding the author's mark for 丙); then a pull request of minor edits
  // alone, marked in its merge message.
  git(['checkout', '-q', '-b', 'pr-5', 'main']);
  await at('content/wiki/甲/index.md', page('甲', '甲的又一版正文。\n\n第二段。'));
  await at('content/wiki/丁/index.md', page('丁', '新的丁，链接。'));
  await at('content/wiki/丙/index.md', page('$\\infty$-丙', '乙的正文，链接。'));
  git(['add', '-A']);
  git(['commit', '-q', '-m', '改写甲，统一链接', '-m', 'Minor-edit: all\nMajor-edit: wiki/甲'], { date: '2026-09-01T00:00:00Z' });
  git(['commit', '-q', '--allow-empty', '-m', '审阅', '-m', 'Major-edit: content/wiki/丙/index.md'], { date: '2026-09-01T01:00:00Z' });
  git(['checkout', '-q', 'main']);
  git(['merge', '-q', '--no-ff', 'pr-5', '-m', 'Merge pull request #5 from banana-space/links', '-m', '改写甲，统一链接'], { date: '2026-09-02T00:00:00Z' });
  git(['checkout', '-q', '-b', 'pr-6', 'main']);
  await at('content/wiki/丁/index.md', page('丁', '新的丁，链接．'));
  git(['commit', '-q', '-am', '格式'], { date: '2026-10-01T00:00:00Z' });
  git(['checkout', '-q', 'main']);
  git(['merge', '-q', '--no-ff', 'pr-6', '-m', 'Merge pull request #6 from banana-space/format', '-m', '格式\n\nMinor-edit: all'], { date: '2026-10-02T00:00:00Z' });
  pullOnGitHub(5, 'linker', ['linker', 'reviewer']);
  pullOnGitHub(6, 'formatter', ['formatter']);
  const marked = await pageHistories(root, { repository: 'banana-space/banana', github });
  assert.deepEqual(since().sort(), [5, 6].flatMap(number => [`/pulls/${number}`, `/pulls/${number}/commits?per_page=100&page=1`]).sort(),
    '已经读过的 PR 与提交取自缓存，只读取新合并的 PR');
  assert.deepEqual(marked.get('content/wiki/甲/index.md').changes[0].authors, ['linker', 'reviewer'], '不止一个作者时另有 authors');
  const minor = path => marked.get(path).changes.filter(change => change.pr >= 5).map(change => [change.pr, Boolean(change.minor)]);
  assert.deepEqual(minor('content/wiki/甲/index.md'), [[5, false]], '标为主要修改的页面');
  assert.deepEqual(minor('content/wiki/丁/index.md'), [[6, true], [5, true]], '“all”标出的小修改；合并说明中的标记');
  assert.deepEqual(minor('content/wiki/丙/index.md'), [[5, false]], '审阅者后来的提交改变了标记');
  buildProject(root);
  const marks = await readFile(join(root, 'public/history/data/wiki/丁/index.md.json'), 'utf8');
  assert.deepEqual(JSON.parse(marks).changes.slice(0, 2).map(change => change.minor), [true, true], '页面历史的数据带着小修改');
  const latest = [...(await readFile(join(root, 'public/index.html'), 'utf8')).matchAll(/<li class="home-recent-item">([\s\S]*?)<\/li>/g)].map(match => match[1]);
  assert.equal(latest.length, 5, '只有小修改的 PR 6 不列出');
  assert.match(latest[0], /甲[\s\S]*丙|丙[\s\S]*甲/);
  assert.doesNotMatch(latest[0], /%E4%B8%81|>丁</, 'PR 5 中的小修改（丁）不列出');
  // A change to several pages: “2 个页面”, a button that shows all the names (site.js), hidden until names are left
  // out; the separator follows each name but the last.
  assert.match(latest[0], /<button type="?button"? class="?home-recent-toggle"? aria-expanded="?false"? aria-controls="?home-recent-names-0"? data-label="?2 个页面"? data-collapse="?收起"? hidden/, '页数是展开全部名称的按钮');
  assert.match(latest[0], /home-recent-entry"?><span class="?home-recent-name"?>(?:(?!home-recent-entry)[\s\S])*?<\/span><span class="?home-recent-separator"?>/, '分隔号在前一个名称后面');
  assert.doesNotMatch(latest[0], /home-recent-entry"?><span class="?home-recent-separator/, '名称前没有分隔号');

  // Previewing a branch: its commits not yet on origin/main will be one pull request, so their marks are read together,
  // as after the merge (a later commit marks an earlier one's pages). On main itself each commit is a change of its own.
  git(['update-ref', 'refs/remotes/origin/main', 'main']);
  git(['checkout', '-q', '-b', 'preview', 'main']);
  await at('content/wiki/甲/index.md', page('甲', '甲的又一版正文．\n\n第二段．'));
  git(['commit', '-q', '-am', '标点'], { date: '2026-10-02T01:00:00Z' });
  git(['commit', '-q', '--allow-empty', '-m', '标记', '-m', 'Minor-edit: all'], { date: '2026-10-02T02:00:00Z' });
  const newest = async () => (await pageHistories(root)).get('content/wiki/甲/index.md').changes[0];
  assert.deepEqual(await newest().then(({ commit, minor }) => ({ subject: git(['log', '-1', '--format=%s', commit]), minor })), { subject: '标点', minor: true },
    '分支上后来的提交标出前面提交的页面');
  git(['checkout', '-q', 'main']);
  git(['merge', '-q', '--ff-only', 'preview']);
  assert.equal((await newest()).minor, undefined, '直接提交到 main 的提交各是一次变化');
  git(['reset', '-q', '--hard', 'HEAD~2']);
  git(['branch', '-q', '-D', 'preview']);
  git(['update-ref', '-d', 'refs/remotes/origin/main']);

  // A page moved to another file of the same address and rewritten on the way (books/庚/_index.md → books/庚/index.md):
  // Git sees a page removed and another added, the history a move.
  await at('content/books/庚/_index.md', page('庚', '庚的正文。'));
  git(['add', '-A']);
  git(['commit', '-q', '-m', '新页面庚'], { date: '2026-10-03T00:00:00Z' });
  await rm(join(root, 'content/books/庚/_index.md'));
  await at('content/books/庚/index.md', page('庚', '<problems>\n\n本页面需要扩充。\n\n</problems>\n\n改写后的庚。'));
  git(['add', '-A']);
  git(['commit', '-q', '-m', '改写庚'], { date: '2026-10-04T00:00:00Z' });
  assert.match(git(['show', '--first-parent', '-M', '--name-status', '--format=', 'HEAD']), /^D\t.*\nA\t/m, 'Git 认不出这次改名');
  assert.deepEqual((await pageHistories(root)).get('content/books/庚/index.md').changes.map(({ status, path: then, previous }) => ({ status, then, previous })), [
    { status: 'renamed', then: undefined, previous: 'books/庚/_index.md' },
    { status: 'added', then: 'books/庚/_index.md', previous: undefined },
  ], '同一地址的页面移到另一个文件');

  // Who wrote a pull request is what GitHub says, not the names and addresses in Git: PR 7's commits are by “Real Name”
  // (an address GitHub links to writer), Helper (twice, spelt two ways), an address of no account and a bot; GitHub lists
  // 100 commits a page.
  git(['checkout', '-q', '-b', 'pr-7', 'main']);
  await at('content/wiki/甲/index.md', page('甲', '甲的第三版正文。\n\n第二段。'));
  git(['commit', '-q', '-am', '改写甲'], { name: 'Real Name', email: 'real@example.org', date: '2026-11-01T00:00:00Z' });
  await at('content/wiki/甲/index.md', page('甲', '甲的第三版正文．\n\n第二段．'));
  git(['commit', '-q', '-am', '格式'], { name: 'formatter[bot]', email: '9+formatter[bot]@users.noreply.github.com', date: '2026-11-01T02:00:00Z' });
  git(['checkout', '-q', 'main']);
  git(['merge', '-q', '--no-ff', 'pr-7', '-m', 'Merge pull request #7 from banana-space/rewrite', '-m', '改写甲'], { date: '2026-11-02T00:00:00Z' });
  pullOnGitHub(7, 'writer', ['writer', ...Array.from({ length: 100 }, (_, i) => i % 2 ? 'helper' : 'Helper'), null, user('formatter[bot]', 'Bot'), 'late']);
  await at('content/wiki/丁/index.md', page('丁', '直接改丁。'));
  git(['commit', '-q', '-am', '直接改丁'], { name: 'Real Name', email: 'real@example.org', date: '2026-11-04T00:00:00Z' });
  const direct = git(['rev-parse', 'HEAD']);
  branchCommits.set(direct, user('writer'));

  // GitHub does not answer about PR 7 and refuses the commit (the rate limit): the history is complete but for their
  // authors, which are not kept, so the next build asks again.
  broken.set('/pulls/7/commits', 'hang').set(`/commits/${direct}`, 403);
  const failed = await pageHistories(root, { repository: 'banana-space/banana', github: { ...github, timeout: 300 } });
  assert.deepEqual(['content/wiki/甲/index.md', 'content/wiki/丁/index.md'].map(path => [failed.get(path).changes[0].title, failed.get(path).changes[0].author]),
    [['改写甲', null], ['直接改丁', null]], '读取失败的修改没有作者');
  assert.equal(failed.get('content/wiki/甲/index.md').changes[1].author, 'linker', '其余照常');
  assert.match(warnings.join('\n'), /2 of 4 lookups failed/, '庚的两个直接提交照常读取');
  since();
  broken.clear();
  const byLogin = await pageHistories(root, { repository: 'banana-space/banana', github });
  assert.deepEqual(since().sort(), ['/pulls/7', '/pulls/7/commits?per_page=100&page=1', '/pulls/7/commits?per_page=100&page=2', `/commits/${direct}`].sort(),
    '下一次再读取失败的，提交多于 100 个时读取下一页');
  const latestOf = path => byLogin.get(path).changes[0];
  assert.deepEqual([latestOf('content/wiki/甲/index.md').author, latestOf('content/wiki/甲/index.md').authors], ['writer', ['writer', 'Helper', 'late']],
    'PR 的作者在前，再是提交的作者，各一次（不分大小写），机器人与不属于任何账号的提交除外');
  assert.deepEqual([latestOf('content/wiki/丁/index.md').author, latestOf('content/wiki/丁/index.md').authors], ['writer', undefined], '直接提交的作者');

  // Without the token only what is kept: nothing is asked; with nothing kept, no authors.
  const offline = await pageHistories(root, { repository: 'banana-space/banana', github: { ...github, token: undefined } });
  assert.deepEqual(offline.get('content/wiki/甲/index.md').changes[0].authors, ['writer', 'Helper', 'late'], '没有令牌时用缓存');
  const empty = await pageHistories(root, { repository: 'banana-space/banana', github: { ...github, token: undefined, cacheFile: join(cacheDirectory, 'none.json') } });
  assert.deepEqual(empty.get('content/wiki/甲/index.md').changes.map(change => change.author), [null, null, null, null], '没有令牌也没有缓存时没有作者');
  assert.deepEqual(since(), [], '没有令牌时不向 GitHub 读取');

  // The server's build (docs/deploy.md): the full build, given the token and GitHub's address in its environment, as
  // deploy.sh gives them; the authors are kept in .build/ for the next build, which then needs GitHub for nothing.
  const build = env => promisify(execFile)(process.execPath, ['scripts/build.mjs'], { cwd: root, env: buildEnvironment(env), maxBuffer: 2 ** 28 });
  await build({ BANANA_GITHUB_TOKEN: 'server-token', BANANA_GITHUB_API: api });
  const built = requests.splice(0);
  assert.ok(built.length >= 15 && built.every(request => request.authorization === 'Bearer server-token'), '构建用环境中的令牌读取全部 PR 与提交');
  const published = async () => JSON.parse(await readFile(join(root, 'public/history/data/wiki/甲/index.md.json'), 'utf8')).changes.map(change => [change.pr ?? 'commit', change.author, change.authors]);
  const expected = [[7, 'writer', ['writer', 'Helper', 'late']], [5, 'linker', ['linker', 'reviewer']], [1, 'octo', undefined], ['commit', null, undefined]];
  assert.deepEqual(await published(), expected, '发布的页面历史带着 GitHub 用户名');
  assert.ok(existsSync(join(root, '.build/github-authors.json')));
  for (const path of [...requests, ...built].map(request => request.path.replace(/\?.*/, ''))) broken.set(path, 500);
  await build({ BANANA_GITHUB_TOKEN: 'server-token', BANANA_GITHUB_API: api });
  assert.deepEqual(since(), [], '下一次构建不需要读取');
  assert.deepEqual(await published(), expected);
  broken.clear();

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
  const lecture = (name, home = false) => [`books/书/${home ? 'index' : `${name}/index`}.md`,
    { normalized: true, metadata: { title: name, collectionRoot: 'books/书', collectionTitle: '书', collectionHome: home, collectionKind: 'lecture' } }];
  const records = new Map([article('Abel 群'), article('环'), article('域'), article('模'), article('草稿', { draft: true }), lecture('书', true), lecture('一'), lecture('二')]);
  const history = (...changes) => ({ changes: changes.map(([id, status = 'modified']) => ({ pr: id, time: `2026-01-0${id}T00:00:00Z`, merged: `2026-01-0${id}T01:00:00Z`, status, title: `PR ${id}` })) });
  const recent = recentChanges(new Map([
    ['content/wiki/环/index.md', history([1], [3], [5])], ['content/wiki/域/index.md', history([3, 'added'])],
    ['content/wiki/模/index.md', history([3])], ['content/wiki/Abel 群/index.md', history([3], [4])],
    ['content/wiki/草稿/index.md', history([5])], ['content/books/书/一/index.md', history([2], [3])], ['content/books/书/二/index.md', history([2], [4])],
    ['content/books/书/index.md', history([4, 'added'])],
  ]), records, { limit: 4, shown: 3 });
  assert.deepEqual(recent, [
    { time: '2026-01-05T00:00:00Z', pages: 1, items: [{ page: 'wiki/环', added: false }], more: false },
    { time: '2026-01-04T00:00:00Z', pages: 3, items: [{ book: 'books/书', added: true }, { page: 'wiki/Abel 群', added: false }], more: true, title: 'PR 4' },
    { time: '2026-01-03T00:00:00Z', pages: 5, items: [{ page: 'wiki/域', added: true }, { page: 'wiki/Abel 群', added: false }, { page: 'wiki/环', added: false }], more: true, title: 'PR 3' },
    { time: '2026-01-02T00:00:00Z', pages: 2, book: 'books/书', added: false, title: 'PR 2' },
  ], '新的页面与讲义在前，其余条目按读音，讲义随后；草稿不算；只在一部讲义中的修改只写讲义名；不止一个页面的修改带标题');
  assert.deepEqual(recentChanges(new Map([['content/wiki/环/index.md', history([6])], ['content/wiki/域/index.md', history([6])]]), records),
    [{ time: '2026-01-06T00:00:00Z', pages: 2, items: [{ page: 'wiki/环', added: false }, { page: 'wiki/域', added: false }], more: false, title: 'PR 6' }],
    '全部列出的两个页面也带标题');
  // A title that only names the pages is left out; the home page names as many pages as fit (by default up to 12).
  const titled = (id, title) => ({ changes: [{ pr: id, time: `2026-01-0${id}T00:00:00Z`, merged: `2026-01-0${id}T01:00:00Z`, status: 'modified', title }] });
  assert.deepEqual(recentChanges(new Map([['content/wiki/环/index.md', titled(7, '环、域')], ['content/wiki/域/index.md', titled(7, '环、域')]]), records).map(change => change.title),
    [undefined], '只写了页面名称的标题不显示');
  assert.deepEqual(recentChanges(new Map([['content/wiki/环/index.md', titled(8, '环与域：补充例子')], ['content/wiki/域/index.md', titled(8, '环与域：补充例子')]]), records).map(change => change.title),
    ['环与域：补充例子'], '还说了别的的标题照常显示');
  assert.deepEqual(recentChanges(new Map([['content/books/书/一/index.md', titled(9, '书')], ['content/books/书/二/index.md', titled(9, '书')]]), records).map(change => [change.book, change.title]),
    [['books/书', undefined]], '只写了讲义名的标题不显示');
  assert.equal(recentChanges(new Map([...['环', '域', '模', 'Abel 群'].map(name => [`content/wiki/${name}/index.md`, history([3])])]), records)[0].items.length, 4, '默认列出所有页面（最多 50 个）');
} finally {
  fake.close();
  await rm(root, { recursive: true, force: true });
  await rm(cacheDirectory, { recursive: true, force: true });
}
