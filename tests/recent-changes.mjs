import { createProject } from './helpers/project.mjs';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { execFileSync, spawn } from 'node:child_process';
import { once } from 'node:events';
import { join } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';

// 最近更改的接口（/api/recent-changes 与 /api/recent-changes/diff），对着 GitHub 的替身：PR 列表与分页、
// 在线编辑器的 PR 的作者、页面标题、差异的前后全文，以及差异页面的编辑按钮打开哪个版本。
const main = 'a'.repeat(40);
const files = new Map([ // "commit:path" -> text
  [`${main}:content/wiki/甲/index.md`, '---\ntitle: 甲\ncategories: []\n---\n\n甲的正文。\n'],
]);
const at = (sha, path, text) => files.set(`${sha}:${path}`, text);
const pulls = [];
const committed = number => `2026-09-${String(number % 28 + 1).padStart(2, '0')}T23:30:00Z`;
function pull(number, { ref, fork = false, user = 'banana-bot', merged = false, closed = false, changed, title }) {
  const head = String(number).padStart(40, 'b');
  for (const [path, text] of Object.entries(changed)) if (text !== null) at(head, path, text);
  pulls.push({
    number, title, html_url: `https://github.example/owner/site/pull/${number}`, user: { login: user },
    state: merged || closed ? 'closed' : 'open', merged_at: merged ? `2026-10-0${number % 9 + 1}T08:00:00Z` : null,
    // A commit the editor API's checkout does not have: merged, not yet deployed. #6's is set to the checkout's below.
    merge_commit_sha: merged ? 'c'.repeat(40) : null,
    updated_at: `2026-10-1${number % 9}T08:00:00Z`, created_at: '2026-10-01T08:00:00Z', draft: false,
    base: { sha: main }, head: { sha: head, ref, repo: { full_name: fork ? 'fork/site' : 'Owner/Site' } },
    files: Object.entries(changed).map(([path, text]) => ({
      filename: path, status: text === null ? 'removed' : files.has(`${main}:${path}`) ? 'modified' : 'added', additions: 1, deletions: 0,
    })),
  });
}
const page = (title, body) => `---\ntitle: ${title}\ncategories: []\n---\n\n${body}\n`;
// Newest first, as GitHub lists them by update.
pull(9, { ref: 'edit/octo/0123456789ab', title: '乙', changed: { 'content/wiki/乙/index.md': page('乙', '新条目。') } });
pull(8, { ref: 'new-page', user: 'hand', title: '手写的新页面', changed: { 'content/wiki/丙/index.md': page('丙', '手写。') } });
pull(7, { ref: 'edit/evil/0123456789ab', fork: true, user: 'evil', title: '甲', changed: { 'content/wiki/甲/index.md': page('甲', '复刻中的修改。') } });
pull(6, { ref: 'edit/hubot/fedcba987654', merged: true, title: '甲', changed: { 'content/wiki/甲/index.md': page('甲', '甲的新正文。') } });
pull(5, { ref: 'closed', closed: true, title: '关闭的', changed: { 'content/wiki/甲/index.md': page('甲', '没有合并。') } });
// The list of books is the site's own page, not a book's.
pull(4, { ref: 'site-code', user: 'dev', merged: true, title: '网站代码', changed: { 'scripts/x.mjs': 'x', 'content/books/_index.md': '---\ntitle: 讲义\n---\n' } });
for (let number = 40; number < 70; number++) pull(number, { ref: `old-${number}`, merged: true, title: `旧 ${number}`, changed: { 'content/wiki/甲/index.md': page('甲', `旧 ${number}`) } });
// A later page of GitHub's list holds older pull requests.
pulls.sort((a, b) => (b.number < 10) - (a.number < 10) || b.number - a.number);

const requests = [];
const github = createServer((request, response) => {
  const url = new URL(request.url, 'http://localhost');
  const reply = (status, value) => { response.writeHead(status, { 'Content-Type': 'application/json' }); response.end(JSON.stringify(value)); };
  const match = url.pathname.match(/^\/repos\/owner\/site(\/.*)$/);
  if (!match) return reply(404, { message: 'Not Found' });
  const path = decodeURIComponent(match[1]);
  requests.push(path);
  if (path === '/pulls') {
    const number = Number(url.searchParams.get('page') ?? 1), size = Number(url.searchParams.get('per_page'));
    assert.equal(url.searchParams.get('state'), 'all');
    return reply(200, pulls.slice((number - 1) * size, number * size).map(({ files: _, ...pull }) => pull));
  }
  let found = path.match(/^\/pulls\/(\d+)(\/files)?$/);
  if (found) {
    const pull = pulls.find(pull => pull.number === Number(found[1]));
    if (!pull) return reply(404, { message: 'Not Found' });
    const { files: changed, ...rest } = pull;
    return reply(200, found[2] ? (Number(url.searchParams.get('page')) > 1 ? [] : changed) : rest);
  }
  // The latest commit's date: written in the night, merged the next morning. #4's is missing.
  found = path.match(/^\/commits\/(\w+)$/);
  if (found) {
    const pull = pulls.find(pull => pull.head.sha === found[1]);
    if (!pull || pull.number === 4) return reply(404, { message: 'Not Found' });
    return reply(200, { sha: found[1], commit: { committer: { date: committed(pull.number) } } });
  }
  found = path.match(/^\/compare\/(\w+)\.\.\.(\w+)$/);
  if (found) return reply(200, { merge_base_commit: { sha: found[1] } });
  if (path.startsWith('/contents/')) {
    const text = files.get(`${url.searchParams.get('ref')}:${path.slice('/contents/'.length)}`);
    if (text === undefined) return reply(404, { message: 'Not Found' });
    assert.equal(request.headers.accept, 'application/vnd.github.raw+json');
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    return response.end(text);
  }
  reply(404, { message: 'Not Found' });
});
github.listen(0, '127.0.0.1');
await once(github, 'listening');
const githubOrigin = `http://127.0.0.1:${github.address().port}`;

const root = await createProject('recent-changes');
let child, output = '';
try {
  await mkdir(join(root, 'content/wiki/甲'), { recursive: true });
  await writeFile(join(root, 'content/wiki/甲/index.md'), files.get(`${main}:content/wiki/甲/index.md`));
  // The editor API runs in the deployed checkout: what its commit contains is on the site.
  const git = (...args) => execFileSync('git', ['-c', 'user.name=test', '-c', 'user.email=test@example.org', ...args], { cwd: root, encoding: 'utf8' }).trim();
  git('init', '-q');
  git('add', '-A');
  git('commit', '-q', '-m', 'deployed');
  pulls.find(pull => pull.number === 6).merge_commit_sha = git('rev-parse', 'HEAD');
  /** Starts the editor API (no token: the repository is public). */
  function start() {
    output = '';
    child = spawn(process.execPath, ['scripts/editor-api.mjs', '--port', '0', '--github-repo', 'owner/site', '--cacheDir', join(root, 'cache')], {
      cwd: root, stdio: ['ignore', 'pipe', 'pipe'], detached: process.platform !== 'win32',
      env: { ...process.env, BANANA_GITHUB_API: githubOrigin, BANANA_GITHUB_TOKEN: '' },
    });
    child.stdout.on('data', data => { output += data; });
    child.stderr.on('data', data => { output += data; });
  }
  /** The editor API's address, once its log shows pattern. */
  async function logged(pattern) {
    const deadline = Date.now() + 60000;
    while (!pattern.test(output)) {
      if (child.exitCode !== null || Date.now() > deadline) throw new Error(`editor-api 未启动：${output}`);
      await delay(20);
    }
    return output.match(pattern)[1];
  }
  async function stop() {
    process.kill(process.platform === 'win32' ? child.pid : -child.pid, 'SIGTERM');
    await once(child, 'exit');
  }
  let base;
  const get = async path => {
    const response = await fetch(`${base}/api/${path}`);
    return { status: response.status, json: await response.json(), headers: response.headers };
  };

  // While it starts (on the server about a minute after each deploy), the recent changes are answered once the
  // prebuild has the site's pages; editing waits for the preview service.
  start();
  base = await logged(/starting: answering recent changes on (http:\/\/\S+)\/api\//);
  const editing = get('source?path=wiki/甲/index.md');
  const early = await get('recent-changes');
  assert.equal(early.status, 200, JSON.stringify(early.json));
  if (!/listening on/.test(output)) {
    const answer = await editing;
    assert.deepEqual([answer.status, answer.headers.get('retry-after')], [503, '5'], '启动期间编辑返回 503');
  }
  assert.equal(await logged(/listening on (http:\/\/\S+)\/api\//), base);

  // The list: closed pull requests left out, the editor's by their author, a fork's branch of the same name not.
  let { json } = await get('recent-changes');
  assert.equal(json.ok, true);
  const json0 = json;
  const first = json.pulls.filter(pull => pull.number < 10);
  assert.deepEqual(first.map(pull => [pull.number, pull.state, pull.author, pull.editor]),
    [[9, 'open', 'octo', true], [8, 'open', 'hand', false], [7, 'open', 'evil', false], [6, 'merged', 'hubot', true], [4, 'merged', 'dev', false]]);
  const [bySomeoneNew, byHandNew, , merged, code] = first;
  assert.deepEqual(bySomeoneNew.pages.map(({ path, title, url, status, letter }) => ({ path, title, url, status, letter })),
    [{ path: 'wiki/乙/index.md', title: '乙', url: null, status: 'added', letter: 'y' }], '新页面以目录名为标题，尚无网址');
  assert.equal(bySomeoneNew.namesPage, true, '编辑器的 PR 以页面命名');
  assert.equal(byHandNew.namesPage, false);
  assert.deepEqual(merged.pages.map(page => [page.title, page.url, page.status]), [['甲', '/wiki/甲/', 'modified']]);
  assert.deepEqual([code.pages, code.otherFiles], [[], 2], '只改网站代码（与讲义列表）的 PR');
  assert.deepEqual(first.map(pull => [pull.time, pull.merged]), [
    [committed(9), null], [committed(8), null], [committed(7), null],
    [committed(6), pulls.find(pull => pull.number === 6).merged_at],
    [pulls.find(pull => pull.number === 4).merged_at, pulls.find(pull => pull.number === 4).merged_at],
  ], '时间是最新提交的时间，不是合并的时间；读不到提交时退回合并的时间');
  assert.deepEqual(first.map(pull => pull.live), [null, null, null, true, false], '已合并的 PR 是否已在网站上：部署的提交包含合并提交');

  // Pages of 30: the next page continues, the last says there is no more.
  assert.equal(json.more, true);
  const second = (await get('recent-changes?page=2')).json;
  assert.equal(second.more, false);
  assert.equal(json.pulls.length + second.pulls.length, pulls.length - 1, '两页合起来是全部（关闭的除外）');
  assert.equal((await get('recent-changes?page=0')).status, 400);

  // The diff of a page, from where the branch left main to its latest commit; and what its edit button opens.
  const diff = (number, path) => get(`recent-changes/diff?pr=${number}&path=${encodeURIComponent(path)}`);
  ({ json } = await diff(9, 'wiki/乙/index.md'));
  assert.deepEqual([json.before, json.after, json.page.status], [null, page('乙', '新条目。'), 'added']);
  assert.deepEqual(json.edit, { path: 'wiki/乙/index.md', pull: 9 }, '编辑器开的 PR 中的新页面：在编辑器中打开该 PR 的版本，而不是空白的新页面');
  ({ json } = await diff(8, 'wiki/丙/index.md'));
  assert.equal(json.edit, null, '其他 PR 中的新页面不能在线编辑');
  ({ json } = await diff(7, 'wiki/甲/index.md'));
  assert.deepEqual(json.edit, { path: 'wiki/甲/index.md' }, '复刻中的同名分支不是编辑器的 PR：编辑网站上的版本');
  ({ json } = await diff(6, 'wiki/甲/index.md'));
  assert.deepEqual([json.before, json.after], [files.get(`${main}:content/wiki/甲/index.md`), page('甲', '甲的新正文。')]);
  assert.deepEqual(json.edit, { path: 'wiki/甲/index.md' }, '已合并：编辑网站上的版本');
  assert.equal(json.pull.live, true);
  assert.equal(json.pull.time, committed(6));
  assert.equal('mergeCommit' in json.pull, false);
  assert.deepEqual([json.pull.number, json.pull.state, json.pull.author, json.pull.namesPage], [6, 'merged', 'hubot', true]);

  // Pages a pull request does not change, closed pull requests and bad requests.
  assert.equal((await diff(9, 'wiki/甲/index.md')).status, 404);
  assert.equal((await diff(5, 'wiki/甲/index.md')).status, 404, '关闭而未合并的 PR');
  assert.equal((await diff(99, 'wiki/甲/index.md')).status, 404, 'GitHub 上没有的 PR');
  assert.equal((await get('recent-changes/diff?pr=x&path=wiki/甲/index.md')).status, 400);
  assert.equal((await diff(4, 'scripts/x.mjs')).status, 400, '只有页面');

  // Merged pull requests do not change: their files are read once.
  const before = requests.filter(path => path === '/pulls/6/files').length;
  await diff(6, 'wiki/甲/index.md');
  assert.equal(requests.filter(path => path === '/pulls/6/files').length, before, '文件列表按提交缓存');

  // What a commit fixes (its date, its files, where its branch left main) is kept on disk: after a restart (as after
  // each deploy) the first load reads only the lists from GitHub.
  const cacheFile = join(root, '.build/recent-changes.json');
  const deadline = Date.now() + 10000;
  while (!existsSync(cacheFile)) {
    if (Date.now() > deadline) throw new Error('没有写入缓存文件');
    await delay(100);
  }
  await delay(2500); // The last write of a burst.
  await stop();
  requests.length = 0;
  start();
  base = await logged(/listening on (http:\/\/\S+)\/api\//);
  const again = (await get('recent-changes')).json;
  assert.deepEqual(again.pulls.map(pull => [pull.number, pull.time]), json0.pulls.map(pull => [pull.number, pull.time]), '重启后结果相同');
  await diff(6, 'wiki/甲/index.md');
  // #4's commit cannot be read: a failure is not kept, and is asked again.
  const failing = pulls.find(pull => pull.number === 4).head.sha;
  assert.deepEqual(requests.filter(path => /^\/(commits|compare)\/|\/files$/.test(path)), [`/commits/${failing}`], '重启后不再读取提交、文件列表与分支起点');
  await writeFile(cacheFile, '{broken');
  await stop();
  start();
  base = await logged(/listening on (http:\/\/\S+)\/api\//);
  assert.equal((await get('recent-changes')).json.pulls.length, json0.pulls.length, '缓存文件损坏时从头读取');

  console.log('最近更改：PR 列表与分页、关闭的 PR、编辑器 PR 的作者与复刻分支、页面标题与新页面、只改代码的 PR 与讲义列表、合并后是否已发布、最新提交的时间、差异的前后全文、编辑按钮（编辑器 PR 中的新页面打开该 PR）、错误请求与缓存、启动期间的回答、重启后从磁盘读取缓存验证通过');
} finally {
  if (child && child.exitCode === null) {
    try { process.kill(process.platform === 'win32' ? child.pid : -child.pid, 'SIGTERM'); } catch {}
    await once(child, 'exit').catch(() => {});
  }
  github.close();
  await rm(root, { recursive: true, force: true });
}
