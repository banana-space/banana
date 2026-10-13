import { createProject } from './helpers/project.mjs';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { join } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { sign } from '../scripts/editor/session.mjs';

// GitHub stand-in: OAuth login and the REST calls the editor makes, on an in-memory repository.
const blob = text => createHash('sha1').update(`blob ${Buffer.byteLength(text)}\0`).update(text).digest('hex');
const commits = new Map(); // id -> Map(path -> text)
const branches = new Map(); // name -> commit id
const pulls = [];
const comments = []; // { number, body }
const log = []; // Repository calls, "METHOD path".
let commitCount = 0;
function commit(files) {
  const id = createHash('sha1').update(String(++commitCount)).digest('hex');
  commits.set(id, files);
  return id;
}
const botToken = 'bot-token', userToken = 'user-token';
const github = createServer(async (request, response) => {
  const url = new URL(request.url, 'http://localhost');
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  const body = chunks.length ? JSON.parse(Buffer.concat(chunks).toString('utf8')) : undefined;
  const reply = (status, value) => { response.writeHead(status, { 'Content-Type': 'application/json' }); response.end(JSON.stringify(value)); };
  if (url.pathname === '/login/oauth/authorize') {
    assert.equal(url.searchParams.get('client_id'), 'client-id');
    response.writeHead(302, { Location: `${url.searchParams.get('redirect_uri')}?code=the-code&state=${url.searchParams.get('state')}` });
    return response.end();
  }
  if (url.pathname === '/login/oauth/access_token') {
    if (body.client_secret !== 'client-secret' || body.code !== 'the-code') return reply(200, { error: 'bad_verification_code' });
    return reply(200, { access_token: userToken });
  }
  if (url.pathname === '/user') {
    if (request.headers.authorization !== `Bearer ${userToken}`) return reply(401, { message: 'Bad credentials' });
    return reply(200, { id: 42, login: 'octo', name: 'Octo Cat', avatar_url: 'https://avatars.example/42' });
  }
  const match = url.pathname.match(/^\/repos\/owner\/site(\/.*)$/);
  if (!match) return reply(404, { message: 'Not Found' });
  if (request.headers.authorization !== `Bearer ${botToken}`) return reply(401, { message: 'Bad credentials' });
  const path = decodeURIComponent(match[1]);
  log.push(`${request.method} ${path.replace(/\/contents\/.*/, '/contents/…')}`);
  if (request.method === 'GET' && path.startsWith('/git/ref/heads/')) {
    const sha = branches.get(path.slice('/git/ref/heads/'.length));
    return sha ? reply(200, { object: { sha } }) : reply(404, { message: 'Not Found' });
  }
  if (request.method === 'POST' && path === '/git/refs') {
    const name = body.ref.replace('refs/heads/', '');
    if (branches.has(name)) return reply(422, { message: 'Reference already exists' });
    branches.set(name, body.sha);
    return reply(201, {});
  }
  if (request.method === 'PATCH' && path.startsWith('/git/refs/heads/')) {
    branches.set(path.slice('/git/refs/heads/'.length), body.sha);
    return reply(200, {});
  }
  if (path.startsWith('/contents/')) {
    const file = path.slice('/contents/'.length);
    if (request.method === 'GET') {
      const text = commits.get(branches.get(url.searchParams.get('ref')))?.get(file);
      return text === undefined ? reply(404, { message: 'Not Found' }) : reply(200, { type: 'file', content: Buffer.from(text).toString('base64'), sha: blob(text) });
    }
    if (request.method === 'PUT') {
      const files = new Map(commits.get(branches.get(body.branch)));
      const current = files.get(file);
      if ((current === undefined ? undefined : blob(current)) !== body.sha) return reply(409, { message: 'sha does not match' });
      const text = Buffer.from(body.content, 'base64').toString('utf8');
      files.set(file, text);
      branches.set(body.branch, commit(files));
      log.push(`commit ${body.branch} by ${body.author.name} <${body.author.email}>: ${body.message}`);
      return reply(200, { content: { sha: blob(text) } });
    }
  }
  if (path === '/pulls' && request.method === 'GET') {
    const head = url.searchParams.get('head')?.replace('owner:', '');
    const page = Number(url.searchParams.get('page') ?? 1), size = Number(url.searchParams.get('per_page') ?? 30);
    const open = pulls.filter(pull => pull.state === 'open' && (head === undefined || pull.head === head)).slice((page - 1) * size, page * size);
    return reply(200, open.map(pull => ({ number: pull.number, html_url: pull.url, title: pull.title, head: { ref: pull.head, repo: { full_name: pull.fork ? 'fork/site' : 'Owner/Site' } } })));
  }
  if (request.method === 'GET' && /^\/pulls\/\d+$/.test(path)) {
    const pull = pulls[Number(path.split('/')[2]) - 1];
    return pull ? reply(200, { number: pull.number, state: pull.state, merged: Boolean(pull.merged) }) : reply(404, { message: 'Not Found' });
  }
  if (request.method === 'PATCH' && /^\/pulls\/\d+$/.test(path)) {
    Object.assign(pulls[Number(path.split('/')[2]) - 1], body);
    return reply(200, {});
  }
  if (request.method === 'POST' && /^\/issues\/\d+\/comments$/.test(path)) {
    comments.push({ number: Number(path.split('/')[2]), body: body.body });
    return reply(201, {});
  }
  if (path === '/pulls' && request.method === 'POST') {
    const pull = { ...body, number: pulls.length + 1, state: 'open', url: `https://github.example/owner/site/pull/${pulls.length + 1}` };
    pulls.push(pull);
    return reply(201, { number: pull.number, html_url: pull.url });
  }
  reply(404, { message: 'Not Found' });
});
github.listen(0, '127.0.0.1');
await once(github, 'listening');
const githubOrigin = `http://127.0.0.1:${github.address().port}`;

const root = await createProject('editor-github');
let child, output = '';
try {
  await mkdir(join(root, 'content/wiki/甲'), { recursive: true });
  const original = '---\ntitle: 甲\ncategories: []\n---\n\n甲的正文。\n';
  await writeFile(join(root, 'content/wiki/甲/index.md'), original);
  branches.set('main', commit(new Map([['content/wiki/甲/index.md', original]])));

  // Secrets from a file (--env-file), as when trying it out locally.
  await writeFile(join(root, '.env.editor'), `BANANA_SESSION_SECRET=secret\nBANANA_GITHUB_CLIENT_ID=client-id\nBANANA_GITHUB_CLIENT_SECRET=client-secret\nBANANA_GITHUB_TOKEN=${botToken}\n`);
  child = spawn(process.execPath, ['scripts/editor-api.mjs', '--port', '0', '--public-url', 'http://site.example', '--github-repo', 'owner/site',
    '--preview-interval', '0.6', '--env-file', '.env.editor', '--cacheDir', join(root, 'cache')], {
    cwd: root, stdio: ['ignore', 'pipe', 'pipe'], detached: process.platform !== 'win32',
    env: { ...process.env, BANANA_GITHUB_WEB: githubOrigin, BANANA_GITHUB_API: githubOrigin },
  });
  child.stdout.on('data', data => { output += data; });
  child.stderr.on('data', data => { output += data; });
  const deadline = Date.now() + 60000;
  while (!/listening on (http:\/\/\S+)\/api\//.test(output)) {
    if (child.exitCode !== null || Date.now() > deadline) throw new Error(`editor-api 未启动：${output}`);
    await delay(100);
  }
  const base = output.match(/listening on (http:\/\/\S+)\/api\//)[1];

  // OAuth: login → GitHub → callback (state checked against the cookie) → session → back to the editor.
  const start = await fetch(`${base}/api/auth/login?return=${encodeURIComponent('/edit/?path=wiki/甲')}`, { redirect: 'manual' });
  const authorize = new URL(start.headers.get('location'));
  assert.equal(authorize.origin + authorize.pathname, `${githubOrigin}/login/oauth/authorize`);
  assert.equal(authorize.searchParams.get('redirect_uri'), 'http://site.example/api/auth/callback');
  assert.equal(authorize.searchParams.get('scope'), '', '登录不应请求仓库权限');
  const pending = start.headers.get('set-cookie').split(';')[0];
  const back = new URL((await fetch(authorize, { redirect: 'manual' })).headers.get('location'));
  const callback = `${base}${back.pathname}${back.search}`;
  assert.equal((await fetch(callback, { redirect: 'manual' })).status, 400, '没有登录 cookie 的回调');
  assert.equal((await fetch(callback.replace(/state=\w+/, 'state=forged'), { redirect: 'manual', headers: { Cookie: pending } })).status, 400, '伪造的 state');
  const finished = await fetch(callback, { redirect: 'manual', headers: { Cookie: pending } });
  assert.equal(finished.headers.get('location'), `/edit/?path=wiki/${encodeURIComponent('甲')}`);
  const session = finished.headers.getSetCookie().find(value => value.startsWith('banana_session=')).split(';')[0];
  assert.deepEqual((await (await fetch(`${base}/api/me`, { headers: { Cookie: session } })).json()).user, { login: 'octo', name: 'Octo Cat', avatar: 'https://avatars.example/42', url: `${githubOrigin}/octo`, pulls: `${githubOrigin}/owner/site/pulls?q=is%3Apr%20mentions%3Aocto` }, '我的 PR：提到该用户的 PR');
  // Open redirects are refused: only paths on this site.
  const away = await fetch(`${base}/api/auth/login?return=//evil.example/`, { redirect: 'manual' });
  assert.equal(verifyReturn(away), '/');

  const call = async (method, path, body) => {
    const response = await fetch(`${base}/api/${path}`, { method, headers: { 'Content-Type': 'application/json', Cookie: session }, body: body && JSON.stringify(body) });
    return { status: response.status, json: await response.json(), headers: response.headers };
  };
  let source = (await call('GET', 'source?path=wiki/甲/index.md')).json;
  assert.deepEqual([source.text, source.original, source.pull], [original, blob(original), null]);
  assert.equal(source.file, `${githubOrigin}/owner/site/blob/main/content/wiki/${encodeURIComponent('甲')}/index.md`);

  // First submission: a branch from main, a commit authored by the user, a pull request.
  const edited = original.replace('甲的正文。', '甲的正文，已修改。');
  let answer = await call('POST', 'submit', { path: 'wiki/甲/index.md', text: edited, original: source.original, message: '修正\n措辞' });
  assert.equal(answer.status, 200, JSON.stringify(answer.json));
  assert.deepEqual([answer.json.number, answer.json.updated, answer.json.original], [1, false, blob(edited)]);
  const branch = pulls[0].head;
  assert.match(branch, /^edit\/octo\/[0-9a-f]{12}$/);
  assert.deepEqual([pulls[0].title, pulls[0].base], ['甲', 'main'], 'PR 标题为页面标题');
  assert.match(pulls[0].body, /由 @octo 通过在线编辑器提交。\n\n> 修正 措辞\n\n页面：`content\/wiki\/甲\/index.md`/);
  assert.match(pulls[0].body, /\n\n\[在线编辑此 PR\]\(https?:\/\/[^)\s]+\/edit\/\?path=wiki%2F%E7%94%B2%2Findex\.md&pull=1\)$/, 'PR 正文链接到编辑器中的该 PR');
  assert.ok(log.includes(`commit ${branch} by Octo Cat <42+octo@users.noreply.github.com>: 修正 措辞`));
  assert.equal(commits.get(branches.get('main')).get('content/wiki/甲/index.md'), original, 'main 不应被修改');

  // Reopening the page loads the pull request's version; submitting again updates the same pull request.
  source = (await call('GET', 'source?path=content/wiki/甲/index.md')).json;
  assert.deepEqual([source.text, source.original, source.pull], [edited, blob(edited), { number: 1, url: 'https://github.example/owner/site/pull/1', author: 'octo', title: '甲' }]);
  assert.equal(source.file, `${githubOrigin}/owner/site/blob/${branch}/content/wiki/${encodeURIComponent('甲')}/index.md`, 'PR 中的版本链接到 PR 分支');
  answer = await call('POST', 'submit', { path: 'wiki/甲/index.md', text: edited + '\n补充。\n', original: source.original, message: '' });
  assert.equal(answer.status, 429, '提交间隔');
  assert.ok(Number(answer.headers.get('retry-after')) >= 1);
  await delay(3100);
  answer = await call('POST', 'submit', { path: 'wiki/甲/index.md', text: edited + '\n补充。\n', original: source.original, message: '' });
  assert.equal(answer.status, 200, JSON.stringify(answer.json));
  assert.deepEqual([answer.json.number, answer.json.updated, pulls.length], [1, true, 1]);
  assert.ok(log.includes(`commit ${branch} by Octo Cat <42+octo@users.noreply.github.com>: 编辑 甲`));

  // A stale start: the file changed on the branch since; nothing is written, the current version comes back.
  await delay(3100);
  const before = branches.get(branch);
  answer = await call('POST', 'submit', { path: 'wiki/甲/index.md', text: edited + '\n过时。\n', original: blob(edited), message: '' });
  assert.equal(answer.status, 409);
  assert.deepEqual(answer.json.current, { text: edited + '\n补充。\n', original: blob(edited + '\n补充。\n') });
  assert.equal(branches.get(branch), before);

  // Errors are caught before GitHub sees anything.
  await delay(3100);
  const calls = log.length;
  answer = await call('POST', 'submit', { path: 'wiki/甲/index.md', text: '---\ntitle: 甲\ncategories: []\n---\n\n见 @eq:不存在。\n', original: blob(edited), message: '' });
  assert.equal(answer.status, 422);
  assert.equal(answer.json.errors[0].line, 6);
  assert.equal(log.length, calls, '有错误的稿件不应提交');

  // Someone else edits octo's pull request: offered with the page, loaded on request, committed to octo's branch
  // under their own name; octo hears of it in a comment. A fork's branch of the same name is not the editor's.
  const other = `banana_session=${sign('secret', { id: 7, login: 'hubot', name: 'Hu Bot', exp: Date.now() + 3600e3 })}`;
  const callAs = async (cookie, method, path, body) => {
    const response = await fetch(`${base}/api/${path}`, { method, headers: { 'Content-Type': 'application/json', Cookie: cookie }, body: body && JSON.stringify(body) });
    return { status: response.status, json: await response.json() };
  };
  const inPull = edited + '\n补充。\n';
  pulls.push({ number: 2, state: 'open', head: branch.replace('octo', 'evil'), fork: true, title: '伪造' });
  source = (await callAs(other, 'GET', 'source?path=wiki/甲/index.md')).json;
  pulls.pop();
  const octoPull = { number: 1, url: 'https://github.example/owner/site/pull/1', author: 'octo', title: '甲' };
  assert.deepEqual([source.text, source.pull, source.pulls, source.pullMissing], [original, null, [octoPull], null], '他人的 PR 列出但不默认载入');
  source = (await callAs(other, 'GET', 'source?path=wiki/甲/index.md&pull=1')).json;
  assert.deepEqual([source.text, source.original, source.pull], [inPull, blob(inPull), octoPull], '按编号载入他人的 PR');
  assert.deepEqual((await callAs(other, 'GET', 'source?path=wiki/甲/index.md&pull=99')).json.pullMissing, 99, '已关闭的 PR');
  assert.equal((await callAs(other, 'GET', 'source?path=wiki/甲/index.md&pull=x')).status, 400);
  assert.equal((await callAs(other, 'GET', 'source?path=wiki/甲/index.md&pull=none')).json.text, original);
  answer = await callAs(other, 'POST', 'submit', { path: 'wiki/甲/index.md', text: inPull + '\n他人补充。\n', original: blob(inPull), message: '补一句', pull: 1 });
  assert.equal(answer.status, 200, JSON.stringify(answer.json));
  assert.deepEqual([answer.json.number, answer.json.updated, pulls.length], [1, true, 1]);
  assert.ok(log.includes(`commit ${branch} by Hu Bot <7+hubot@users.noreply.github.com>: 补一句`), '以编辑者为作者提交到原 PR 分支');
  assert.deepEqual(comments, [{ number: 1, body: '@hubot 通过在线编辑器更新了此 PR：\n\n> 补一句' }], '通知 PR 作者');
  assert.ok(!branches.has(branch.replace('octo', 'hubot')), '不另开分支');
  await delay(3100);
  answer = await callAs(other, 'POST', 'submit', { path: 'wiki/甲/index.md', text: inPull, original: blob(inPull), message: '', pull: 99 });
  assert.equal(answer.status, 410, '目标 PR 已关闭');
  assert.deepEqual([answer.json.current, answer.json.merged, answer.json.pull], [{ text: original, original: blob(original) }, false, null], '不带 pull 提交的基础：网站上的版本');
  // octo's own edits carry on from hubot's.
  source = (await call('GET', 'source?path=wiki/甲/index.md')).json;
  assert.deepEqual([source.text, source.pull], [inPull + '\n他人补充。\n', octoPull]);

  // A new page; a merged pull request's branch left behind starts over from main.
  await delay(3100);
  answer = await call('POST', 'submit', { path: 'wiki/新条目/index.md', text: '---\ntitle: 新条目\ncategories: []\n---\n\n新的。\n', original: null, message: '新建' });
  assert.equal(answer.status, 200, JSON.stringify(answer.json));
  assert.equal(pulls[1].title, '新条目');
  assert.equal(comments.length, 1, '自己的 PR 不发评论');
  // Only entries are created online.
  await delay(3100);
  const beforeRefusal = log.length;
  answer = await call('POST', 'submit', { path: 'books/新讲义/index.md', text: '---\ntitle: 新讲义\n---\n\n新的。\n', original: null, message: '' });
  assert.equal(answer.status, 403);
  assert.equal(log.length, beforeRefusal, "不应提交条目以外的新页面");
  // octo's pull request merged while he edits it: nothing is written; he is told, with what a new one starts from.
  Object.assign(pulls[0], { state: 'closed', merged: true });
  await delay(3100);
  const beforeMerged = branches.get(branch);
  answer = await call('POST', 'submit', { path: 'wiki/甲/index.md', text: original + '\n晚了。\n', original: blob(inPull + '\n他人补充。\n'), message: '', pull: 1 });
  assert.equal(answer.status, 410);
  assert.deepEqual([answer.json.current, answer.json.merged, answer.json.pull], [{ text: original, original: blob(original) }, true, null], '已合并');
  assert.equal(branches.get(branch), beforeMerged, '已合并的 PR 不写入');
  await delay(3100);
  answer = await call('POST', 'submit', { path: 'wiki/甲/index.md', text: original + '\n再来。\n', original: blob(original), message: '' });
  assert.equal(answer.status, 200, JSON.stringify(answer.json));
  assert.deepEqual([answer.json.number, answer.json.updated, pulls[2].head], [3, false, branch]);
  assert.ok(log.includes(`PATCH /git/refs/heads/${branch}`), '残留分支应重置到 main');
  assert.equal(commits.get(branches.get(branch)).get('content/wiki/甲/index.md'), original + '\n再来。\n');
  // What is committed is formatted (scripts/format/markdown.mjs), and the answer has it.
  await delay(3100);
  answer = await call('POST', 'submit', { path: 'wiki/甲/index.md', text: original + '\n再来。\n\n* 列表项\n', original: blob(original + '\n再来。\n'), message: '' });
  assert.equal(answer.status, 200, JSON.stringify(answer.json));
  assert.equal(answer.json.text, original + '\n再来。\n\n- 列表项\n');
  assert.equal(commits.get(branches.get(branch)).get('content/wiki/甲/index.md'), answer.json.text);

  // Per-account previews: three at once (opening a few pages quickly), then one per interval.
  const draft = { path: 'wiki/甲/index.md', text: original };
  for (let i = 0; i < 3; i++) assert.equal((await call('POST', 'preview', draft)).status, 200, `连续第 ${i + 1} 次预览`);
  const limited = await call('POST', 'preview', draft);
  assert.equal(limited.status, 429);
  assert.equal(limited.headers.get('retry-after'), '1');
  assert.match(output, /\[editor-api\] preview octo refused: too frequent/);
  await delay(700);
  assert.equal((await call('POST', 'preview', draft)).status, 200);
  assert.match(output, /\[editor-api\] preview octo content\/wiki\/甲\/index\.md \d+ ms \(prebuild \d+, hugo \d+, postbuild \d+\)/, '每次预览一行日志');

  // Logging out ends the session cookie.
  const logout = await fetch(`${base}/api/auth/logout`, { method: 'POST', headers: { Cookie: session } });
  assert.match(logout.headers.get('set-cookie'), /^banana_session=; Path=\/api\/; Max-Age=0/);
  assert.ok(!output.includes(botToken) && !output.includes(userToken), '令牌不应出现在日志中');
  console.log('编辑接口与 GitHub：OAuth 登录与 state 校验、站内跳转、PR 分支上的源文本、以用户为作者提交并开 PR、再次提交更新同一 PR、编辑他人的 PR 并通知作者、PR 中途合并或关闭、冲突检测、有错误不提交、新页面、残留分支重置、提交排版后的文本、按账号限流（可连续三次）、预览日志与退出登录验证通过');
} catch (error) {
  if (output) console.error(output);
  throw error;
} finally {
  if (child?.pid) {
    try { process.kill(process.platform === 'win32' ? child.pid : -child.pid, 'SIGTERM'); } catch (error) { if (error.code !== 'ESRCH') throw error; }
    if (child.exitCode === null && child.signalCode === null) await once(child, 'close');
  }
  github.close();
  await rm(root, { recursive: true, force: true });
}

function verifyReturn(response) {
  // With GitHub configured the return path travels in the signed login cookie; decode it.
  const value = response.headers.get('set-cookie').split(';')[0].split('=')[1].split('.')[0];
  return JSON.parse(Buffer.from(value, 'base64url').toString('utf8')).back;
}
