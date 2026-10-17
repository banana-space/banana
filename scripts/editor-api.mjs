import { createServer } from 'node:http';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { randomBytes } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { parse as parseYAML } from 'yaml';
import { previewService } from './preview-service.mjs';
import { describeError } from './shared/errors.mjs';
import { frontMatterProblems } from './prebuild/front-matter-rules.mjs';
import { formatMarkdown } from './format/markdown.mjs';
import { cookie, parseCookies, sign, verify } from './editor/session.mjs';
import { blobId, githubLogin, githubRepository } from './editor/github.mjs';
import { recentPullRequests } from './editor/recent-changes.mjs';
import { defaultReading, normalizeReading, sortGroup } from './prebuild/reading.mjs';
import { displayTitle } from './shared/display-title.mjs';

// 在线编辑的接口（见 docs/preview.md）：常驻预览服务加一个只监听本机的 HTTP 服务，由 Apache 把
// /api/ 反向代理过来。静态站点由 Apache 直接提供，预览页面中的地址都指向它。
//
// 用法：npm run editor-api -- [选项] [--buildDrafts 等 Hugo 参数]
//   --port 8787、--bind 127.0.0.1    监听地址
//   --base-url <地址>                页面中的站点地址，默认取 hugo.toml 的 baseURL
//   --public-url <地址>              浏览器访问站点（与 /api/）的地址，用于登录回调，默认为 base-url 的源
//   --github-repo owner/name         提交 PR 的仓库；--github-base main 为目标分支
//   --preview-interval <秒>          每个账号的预览频率：可以连续预览 3 次，之后每隔这么久恢复一次，默认 3；
//                                    检查的最短间隔为它的 1/3，提交为 5 倍
//   --idle-restore <毫秒>            稿件空闲多久后换回全站版本，默认 30000
//   --dev-user <login>               本地开发：不经 GitHub，直接以该用户登录（只允许监听本机地址时使用）
//   --env-file <文件>                先从该文件读取环境变量（KEY=value 每行一个，如 .env.editor，已被 git 忽略）
// 密钥只从环境变量读取（systemd 的 EnvironmentFile，或上面的 --env-file）：
//   BANANA_SESSION_SECRET             会话签名密钥（未设置时每次启动随机生成，重启后需重新登录）
//   BANANA_GITHUB_CLIENT_ID、BANANA_GITHUB_CLIENT_SECRET   GitHub OAuth App，用于登录
//   BANANA_GITHUB_TOKEN               机器人令牌：只对站点仓库有 Contents 与 Pull requests 读写权限
// Hugo 默认使用 production 环境，与正式构建一致；可以用 --environment 改变。
//
// GET  /api/health                         { ok, waiting }
// GET  /api/me                             { ok, user: { login, name, avatar, url, pulls } | null }：url 为 GitHub 用户页，
//                                          pulls 为站点仓库中该用户提交的 PR 列表（未配置提交时为 null）
// GET  /api/auth/login?return=<站内路径>    跳转到 GitHub 登录，完成后回到 return
// GET  /api/auth/callback                  GitHub 登录回调
// POST /api/auth/logout
// GET  /api/source?path=<页面>[&pull=<编号>|none]
//                                          { ok, path, exists, text, original, pull, pulls, pullMissing, file }：当前源文本及其 blob id；
//                                          登录用户对该页有未合并的 PR 时取 PR 分支上的版本，pull 为 { number, url, author, title }；
//                                          pulls 为编辑器为该页开的全部未合并 PR（任何人的），pull=<编号> 取其中一个的版本
//                                          （已不再打开时退回默认版本，pullMissing 为该编号），pull=none 取网站上的版本；
//                                          file 为该文件在 GitHub 上的地址（未配置提交或尚无此文件时为 null），
//                                          url 为页面在站点上的地址（尚无此页面或未发布时为 null）
// GET  /api/recent-changes?page=<n>       { ok, pulls: [{ number, url, title, state, draft, author, time, pages, otherFiles, additions, deletions, truncated, namesPage }], more }：
//                                          站点仓库最近的 PR（待审阅与已合并）修改的页面，每页 30 个 PR，供 /recent-changes/ 使用
//                                          （需 --github-repo，令牌可选）；已合并的 PR 的 live 表示修改是否已在网站上（编辑接口所在的提交是否包含它），
//                                          其他为 null；pages 为 [{ path, title, titleHTML, url, status, previous, group, letter, sortKey }]，
//                                          title 为纯文本，titleHTML 中的公式已由 KaTeX 渲染；group 为 { kind, title, titleHTML }，letter 为列表中的字母分组（a–z 或 #）
// GET  /api/recent-changes/diff?pr=<n>&path=<页面>
//                                          { ok, pull, page, before, after, edit }：该 PR 修改的一个页面在 PR 前后的全文（不存在时为 null），供 /diff/ 使用；
//                                          edit 为编辑按钮打开的编辑器参数：在线编辑器开的未合并 PR 为 { path, pull }（编辑该 PR 的版本，
//                                          页面在 PR 中新建时也是），否则网站上有此页面时为 { path }，不能在线编辑时为 null
// GET  /api/page-history?path=<页面>       { ok, pulls }：修改该页面而尚未出现在网站上的 PR（待审阅的，以及已合并、编辑接口所在的提交
//                                          还不包含的），供页面历史（/history/）补在构建时的历史之前；每项同 recent-changes，另有该页面在 PR
//                                          中的 path、status、previous、additions、deletions。所有页面共用一份 PR 列表，每分钟至多向 GitHub
//                                          读取一次；同一来源地址的请求限频（与 recent-changes 及其 diff 一样，可以连续 20 次，之后每 2 秒一次）
// POST /api/preview { path, text }          { ok, url, html, missingLinks, timings }（需登录）
// POST /api/check   { path, text }          { ok, missingLinks }（需登录）
// POST /api/submit  { path, text, original, message, pull }
//                                          { ok, number, url, updated, original }（需登录）：检查通过后提交，
//                                          打开或更新该用户对该页的 PR；有 pull（PR 编号）时添加到该页的这个 PR，
//                                          可以是别人的（并在 PR 中留言通知）；已不再打开时返回 410 与 merged、
//                                          不带 pull 提交时的基础 current: { text, original } 以及该用户自己的 pull（或 null）；original 为编辑开始时的 blob id，
//                                          页面已被别人修改时返回 409 与 current: { text, original }
// path 为 content/ 中的页面（可省略 content/ 前缀，可以是新页面；只能提交新的条目 wiki/<名称>/index.md，其他新页面返回 403）。
// 错误时为 { ok: false, errors: [{ file, line, message }] }：预处理与 Hugo 错误为 422（Hugo 错误另带 log），
// 未登录 401，请求过于频繁 429（带 Retry-After），排队超过 20 个 503。
// 启动期间（预处理、Hugo 首次渲染与预热，正式部署中约一分钟）只回答登录与最近更改（后者在预处理完成后），其他请求返回 503
// （带 Retry-After）；就绪时打印 listening on。
const root = fileURLToPath(new URL('../', import.meta.url));
const maxBody = 300 * 1024; // The largest page on the site is about 130 KB.
const maxWaiting = 20;
const sessionDays = 30;

const args = process.argv.slice(2);
const options = {
  port: 8787, bind: '127.0.0.1', baseURL: undefined, publicURL: undefined, idleRestore: 30000,
  previewInterval: 3, githubRepo: undefined, githubBase: 'main', devUser: undefined, envFile: undefined,
};
const names = { 'base-url': 'baseURL', 'public-url': 'publicURL', 'idle-restore': 'idleRestore', 'preview-interval': 'previewInterval', 'github-repo': 'githubRepo', 'github-base': 'githubBase', 'dev-user': 'devUser', 'env-file': 'envFile' };
const hugoArgs = [];
for (let i = 0; i < args.length; i++) {
  const match = args[i].match(/^--(port|bind|base-url|public-url|idle-restore|preview-interval|github-repo|github-base|dev-user|env-file)(?:=(.*))?$/);
  if (!match) { hugoArgs.push(args[i]); continue; }
  const value = match[2] ?? args[++i];
  const key = names[match[1]] ?? match[1];
  options[key] = ['port', 'idleRestore', 'previewInterval'].includes(key) ? Number(value) : value;
}
if (!Number.isInteger(options.port) || options.port < 0 || options.port > 65535) throw new Error('invalid --port');
if (!Number.isFinite(options.idleRestore) || options.idleRestore < 0) throw new Error('invalid --idle-restore');
if (!Number.isFinite(options.previewInterval) || options.previewInterval < 0) throw new Error('invalid --preview-interval');
if (options.githubRepo !== undefined && !/^[\w.-]+\/[\w.-]+$/.test(options.githubRepo)) throw new Error('--github-repo must be owner/name');
if (options.devUser !== undefined) {
  if (!/^[A-Za-z0-9-]+$/.test(options.devUser)) throw new Error('invalid --dev-user');
  if (!['127.0.0.1', '::1', 'localhost'].includes(options.bind)) throw new Error('--dev-user is only allowed when listening on a loopback address');
}
options.baseURL ??= (await readFile(join(root, 'hugo.toml'), 'utf8')).match(/^baseURL\s*=\s*['"]([^'"]+)['"]/m)?.[1];
if (!options.baseURL) throw new Error('--base-url is required when hugo.toml sets no baseURL');
const publicOrigin = new URL(options.publicURL ?? options.baseURL).origin;
const secure = publicOrigin.startsWith('https:');
const redirectURI = `${publicOrigin}/api/auth/callback`;

if (options.envFile) process.loadEnvFile(options.envFile);
const env = process.env;
const githubWeb = env.BANANA_GITHUB_WEB ?? 'https://github.com';
const sessionSecret = env.BANANA_SESSION_SECRET || randomBytes(32).toString('hex');
if (!env.BANANA_SESSION_SECRET) console.warn('[editor-api] BANANA_SESSION_SECRET is not set: sessions end when the service restarts');
const login = env.BANANA_GITHUB_CLIENT_ID && env.BANANA_GITHUB_CLIENT_SECRET
  ? githubLogin({ clientId: env.BANANA_GITHUB_CLIENT_ID, clientSecret: env.BANANA_GITHUB_CLIENT_SECRET, web: env.BANANA_GITHUB_WEB, api: env.BANANA_GITHUB_API })
  : undefined;
const repository = env.BANANA_GITHUB_TOKEN && options.githubRepo
  ? githubRepository({ token: env.BANANA_GITHUB_TOKEN, repo: options.githubRepo, base: options.githubBase, api: env.BANANA_GITHUB_API })
  : undefined;
// Reading public pull requests needs no token; the bot's raises GitHub's rate limit.
const recentPulls = options.githubRepo
  ? recentPullRequests({ repo: options.githubRepo, token: env.BANANA_GITHUB_TOKEN, api: env.BANANA_GITHUB_API, cacheFile: join(root, '.build/recent-changes.json') })
  : undefined;
if (!login && !options.devUser) console.warn('[editor-api] GitHub login is not configured (BANANA_GITHUB_CLIENT_ID/SECRET): nobody can log in');
if (!repository) console.warn('[editor-api] submitting is not configured (BANANA_GITHUB_TOKEN and --github-repo)');

// prebuild reads publishing flags (--buildDrafts and the like) from process.argv, as Hugo does.
// A later --environment among hugoArgs overrides production.
const service = previewService({
  baseURL: options.baseURL, output: join(root, '.build/api'), content: '.build/api/content',
  environment: 'production', frontMatterOnly: true, hugoArgs, idleRestore: options.idleRestore,
});

class RequestError extends Error {
  constructor(status, message, extra = {}) { super(message); this.status = status; this.extra = extra; }
}

/** content/ 内的页面相对路径；拒绝组件定义、非 Markdown 文件与越出 content/ 的路径。 */
function pagePath(value) {
  if (typeof value !== 'string') throw new RequestError(400, 'path must be a string');
  const path = value.replace(/^content\//, '');
  const parts = path.split('/');
  if (!/\.md$/i.test(path) || /[\\\u0000-\u001f]/.test(path) || parts.some(part => ['', '.', '..'].includes(part))) {
    throw new RequestError(400, 'path must be a Markdown page in content/, such as content/wiki/条目/index.md');
  }
  if (['notices', 'navboxes'].includes(parts[0])) throw new RequestError(400, 'component definitions are not pages');
  // Entries, books and the guides: not the site's own pages (the home page, search, the editor), whose front
  // matter chooses templates and outputs.
  if (!['wiki', 'books', 'help'].includes(parts[0]) || parts.length < 2) throw new RequestError(400, 'only pages under wiki/, books/ and help/ can be edited online');
  if (path.length > 300 || parts.length > 8) throw new RequestError(400, 'path too long');
  // A page is a bundle: index.md in its own directory (not the section's, which would make the whole section
  // one page), or _index.md for a book or a chapter.
  const name = parts.at(-1);
  if (!(name === '_index.md' || (name === 'index.md' && parts.length >= 3))) {
    throw new RequestError(400, 'a page is index.md in its own directory, such as wiki/条目/index.md, or a book\'s _index.md');
  }
  return path;
}

/** A new page must not turn an existing page into something else, or itself become another page's file. */
function newPageFits(path) {
  if (service.source(path) !== undefined) return;
  const parts = path.split('/'), directory = parts.slice(0, -1);
  const other = parts.at(-1) === 'index.md' ? '_index.md' : 'index.md';
  if (service.source([...directory, other].join('/')) !== undefined) throw new RequestError(400, `${directory.join('/')} already has ${other}`);
  for (let i = 2; i < directory.length; i++) {
    if (service.source([...directory.slice(0, i), 'index.md'].join('/')) !== undefined) throw new RequestError(400, `${directory.slice(0, i).join('/')} is a page, not a directory of pages`);
  }
}

async function readJSON(request) {
  if (!/^application\/json\b/i.test(request.headers['content-type'] ?? '')) throw new RequestError(415, 'expected application/json');
  // Refuse before reading: answering in the middle of an upload looks like a failure to a proxy.
  if (Number(request.headers['content-length']) > maxBody) throw new RequestError(413, `request body exceeds ${maxBody} bytes`);
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > maxBody) throw new RequestError(413, `request body exceeds ${maxBody} bytes`);
    chunks.push(chunk);
  }
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8')); }
  catch { throw new RequestError(400, 'invalid JSON'); }
}

function send(response, status, body, headers = {}) {
  sendJSON(response, status, JSON.stringify(body), headers);
}
/** send, with the body already serialized. */
function sendJSON(response, status, text, headers = {}) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(text), 'Cache-Control': 'no-store', ...headers });
  response.end(text);
}
function redirect(response, location, cookies = []) {
  response.writeHead(302, { Location: location, 'Cache-Control': 'no-store', 'Set-Cookie': cookies });
  response.end();
}
/** A path on this site to return to after logging in, percent-encoded for the Location header; anything else returns to the home page. */
function localPath(value) {
  if (typeof value !== 'string' || !/^\/(?![/\\])/.test(value)) return '/';
  const url = new URL(value, 'http://localhost');
  return url.pathname + url.search + url.hash;
}

function currentUser(request) {
  return verify(sessionSecret, parseCookies(request.headers.cookie).get('banana_session'));
}
function requireUser(request) {
  const user = currentUser(request);
  if (!user) throw new RequestError(401, 'log in with GitHub first');
  return user;
}
function startSession(user) {
  const value = sign(sessionSecret, { id: user.id, login: user.login, name: user.name, avatar: user.avatar, exp: Date.now() + sessionDays * 86400e3 });
  return cookie('banana_session', value, { maxAge: sessionDays * 86400, secure });
}

// Per account (or, for what needs no login, per client address) and action, a token bucket: up to `burst` requests at
// once, then one per `interval`. Opening a few pages in quick succession previews each at once; a steady stream is held
// to the interval.
const limits = {
  preview: { interval: options.previewInterval * 1000, burst: 3 },
  check: { interval: options.previewInterval * 1000 / 3, burst: 1 },
  submit: { interval: options.previewInterval * 5000, burst: 1 },
  // Answered from memory, but anyone may ask, and a crawler would ask for every page.
  history: { interval: 2000, burst: 20 },
  // Each new pull request and page is read from GitHub, whose limit the whole site shares. Pages of the recent
  // changes are kept a minute, but each later page (up to 100) reads 30 more pull requests.
  diff: { interval: 2000, burst: 20 },
  recent: { interval: 2000, burst: 20 },
};
const maxBuckets = 50000;
const buckets = new Map(); // "login or address\0action" -> { tokens, time }
function throttle(who, action) {
  const { interval, burst } = limits[action], key = `${who}\0${action}`, now = Date.now();
  const bucket = buckets.get(key) ?? { tokens: burst, time: now };
  bucket.tokens = interval ? Math.min(burst, bucket.tokens + (now - bucket.time) / interval) : burst;
  bucket.time = now;
  buckets.delete(key); // Most recently used last: when there are too many, the longest idle go first.
  if (bucket.tokens < 1) {
    const seconds = Math.ceil((1 - bucket.tokens) * interval / 1000);
    buckets.set(key, bucket);
    console.log(`[editor-api] ${action} ${who} refused: too frequent, retry in ${seconds} s`);
    throw new RequestError(429, `too many requests; try again in ${seconds} s`, { headers: { 'Retry-After': String(seconds) } });
  }
  bucket.tokens -= 1;
  buckets.set(key, bucket);
  while (buckets.size > maxBuckets) buckets.delete(buckets.keys().next().value);
}
// Forget accounts whose buckets have filled up again.
setInterval(() => {
  const now = Date.now();
  for (const [key, bucket] of buckets) {
    const { interval, burst } = limits[key.split('\0')[1]];
    if (bucket.tokens + (now - bucket.time) / (interval || 1) >= burst) buckets.delete(key);
  }
}, 60000).unref();

/**
 * Who sent a request that needs no login: the client's address as Apache passed it on (the last X-Forwarded-For entry,
 * which Apache added; only believed from a proxy on this machine), an IPv6 address by its /64 network, which one
 * client can fill.
 */
function client(request) {
  const peer = request.socket.remoteAddress ?? '';
  const local = peer === '::1' || peer.startsWith('127.') || peer.startsWith('::ffff:127.');
  const forwarded = local ? request.headers['x-forwarded-for']?.split(',').at(-1).trim() : undefined;
  const address = (forwarded || peer).replace(/^::ffff:(?=\d+\.)/, '');
  if (!address.includes(':')) return address;
  const [head, tail] = address.split('::'), part = text => text ? text.split(':') : [];
  const groups = tail === undefined ? part(head) : [...part(head), ...Array(8 - part(head).length - part(tail).length).fill('0'), ...part(tail)];
  return `${groups.slice(0, 4).join(':')}::/64`;
}

/**
 * Runs a service request for a page, answering preprocessing and Hugo errors with 422. What the editor
 * requires of the front matter (prebuild/front-matter-rules.mjs, stricter than full builds) comes first.
 */
async function serviceCall(response, action, path, text) {
  const problems = frontMatterProblems(text);
  if (problems.length) {
    send(response, 422, { ok: false, errors: problems.map(problem => ({ file: `content/${path}`, ...problem })) });
    return;
  }
  try { return await service[action](path, text); }
  catch (error) {
    const described = describeError(root, error, join(root, 'content', path));
    send(response, 422, { ok: false, errors: [described], ...(error.log ? { log: error.log.replaceAll(root, '') } : {}) });
  }
}

const routes = {
  'GET /api/health': (_request, response) => send(response, 200, { ok: true, waiting: admitted }),
  'GET /api/me': (request, response) => {
    const user = currentUser(request);
    // Pull requests are opened by the bot and mention their author: search for the mentions.
    const pulls = repository ? `${githubWeb}/${options.githubRepo}/pulls?q=${encodeURIComponent(`is:pr mentions:${user?.login}`)}` : null;
    send(response, 200, { ok: true, user: user ? { login: user.login, name: user.name, avatar: user.avatar, url: `${githubWeb}/${user.login}`, pulls } : null });
  },
  'GET /api/auth/login': (request, response, url) => {
    const back = localPath(url.searchParams.get('return'));
    if (options.devUser) return redirect(response, back, [startSession({ id: 0, login: options.devUser, name: options.devUser })]);
    if (!login) throw new RequestError(503, 'GitHub login is not configured');
    const state = randomBytes(16).toString('hex');
    const pending = sign(sessionSecret, { state, back, exp: Date.now() + 600e3 });
    redirect(response, login.authorizeURL({ state, redirectURI }), [cookie('banana_oauth', pending, { maxAge: 600, secure })]);
  },
  'GET /api/auth/callback': async (request, response, url) => {
    if (!login) throw new RequestError(503, 'GitHub login is not configured');
    const pending = verify(sessionSecret, parseCookies(request.headers.cookie).get('banana_oauth'));
    if (!pending || pending.state !== url.searchParams.get('state') || !url.searchParams.get('code')) throw new RequestError(400, 'the login expired or did not start here; try again');
    const user = await login.identify({ code: url.searchParams.get('code'), redirectURI });
    redirect(response, pending.back, [startSession(user), cookie('banana_oauth', '', { maxAge: 0, secure })]);
  },
  'POST /api/auth/logout': (_request, response) => send(response, 200, { ok: true }, { 'Set-Cookie': cookie('banana_session', '', { maxAge: 0, secure }) }),
  'GET /api/source': async (request, response, url) => {
    const path = pagePath(url.searchParams.get('path'));
    const user = currentUser(request);
    // ?pull=<number> asks for that pull request of the page (anyone's), ?pull=none for the site's version; by
    // default the user's own pull request, if any.
    const asked = url.searchParams.get('pull');
    if (asked !== null && asked !== 'none' && !/^[1-9]\d{0,9}$/.test(asked)) throw new RequestError(400, 'pull must be a pull request number or none');
    let text = service.source(path), original = text === undefined ? null : blobId(text), pull, pulls = [], pullMissing = null;
    if (user && repository) {
      try {
        pulls = await repository.pagePullRequests(`content/${path}`);
        const own = pulls.find(candidate => sameLogin(candidate.author, user.login));
        if (asked === null) pull = own;
        else if (asked !== 'none') {
          pull = pulls.find(candidate => candidate.number === Number(asked));
          // Merged or closed since the link was made: the user's own, or the site's version.
          if (!pull) { pullMissing = Number(asked); pull = own; }
        }
        if (pull) {
          const file = await repository.readFile(`content/${path}`, pull.branch);
          text = file?.text;
          original = file?.blob ?? null;
        }
      } catch (error) {
        console.error(`[editor-api] ${error.message}`);
        throw new RequestError(502, 'could not look up the pull requests on GitHub; try again later');
      }
    }
    const segments = value => value.split('/').map(encodeURIComponent).join('/');
    const file = repository && text !== undefined ? `${githubWeb}/${options.githubRepo}/blob/${segments(pull?.branch ?? options.githubBase)}/${segments(`content/${path}`)}` : null;
    const describe = ({ number, url, author, title }) => ({ number, url, author, title });
    send(response, 200, {
      ok: true, path: `content/${path}`, exists: text !== undefined, text: text ?? '', original, pull: pull ? describe(pull) : null,
      pulls: pulls.map(describe), pullMissing, file, url: service.url(path) ?? null, labels: service.labels(path),
    });
  },
  'GET /api/recent-changes': async (request, response, url) => {
    if (!recentPulls) throw new RequestError(503, 'recent changes are not configured (--github-repo)');
    throttle(client(request), 'recent');
    await sourcesReady;
    const page = Number(url.searchParams.get('page') ?? 1);
    if (!Number.isInteger(page) || page < 1 || page > 100) throw new RequestError(400, 'page must be a number from 1 to 100');
    const listed = await recentPulls.list(page).catch(githubFailed), { pulls, more } = listed;
    const live = await Promise.all(pulls.map(pull => isLive(pull.mergeCommit)));
    const pages = pulls.map(pull => pull.files.map(changedPageCached).filter(Boolean));
    // The same list from GitHub, with the same pages and the same live states, is the same answer: written once.
    const known = recentResponses.get(listed);
    if (known && sameItems(known.live, live) && known.pages.every((each, index) => sameItems(each, pages[index]))) {
      return sendJSON(response, 200, known.text, { 'Cache-Control': 'public, max-age=60' });
    }
    const text = JSON.stringify({
      ok: true, more,
      pulls: pulls.map(({ files, fileCount, author, mergeCommit, ...pull }, index) => {
        // The online editor names its pull requests after the page (its title as written, formulas in TeX).
        const namesPage = pages[index].some(page => page.title === pull.title || page.source === pull.title);
        return {
          ...pull, author: author.login, live: live[index], pages: pages[index].map(({ source, ...page }) => page), otherFiles: fileCount - pages[index].length, namesPage,
          additions: files.reduce((sum, file) => sum + file.additions, 0), deletions: files.reduce((sum, file) => sum + file.deletions, 0),
        };
      }),
    });
    recentResponses.set(listed, { live, pages, text });
    sendJSON(response, 200, text, { 'Cache-Control': 'public, max-age=60' });
  },
  'GET /api/recent-changes/diff': async (request, response, url) => {
    if (!recentPulls) throw new RequestError(503, 'recent changes are not configured (--github-repo)');
    throttle(client(request), 'diff');
    await sourcesReady;
    const number = Number(url.searchParams.get('pr'));
    if (!Number.isInteger(number) || number < 1) throw new RequestError(400, 'pr must be a pull request number');
    const path = pagePath(url.searchParams.get('path'));
    const { pull, file, before, after } = await recentPulls.diff(number, `content/${path}`).catch(error => {
      if (error.status === 404) throw new RequestError(404, error.message);
      return githubFailed(error);
    });
    const { source, ...page } = changedPageCached(file);
    // What the page's edit button opens: an open pull request from the online editor in the editor (?pull=, which the
    // editor can add to, also when the page is new in it), otherwise the page on the site. A page that exists only in
    // another kind of pull request cannot be edited online.
    const edit = page.status === 'removed' ? null
      : pull.state === 'open' && pull.editor ? { path: page.path, pull: pull.number }
        : service.source(page.path) !== undefined ? { path: page.path } : null;
    const { mergeCommit, ...shown } = pull;
    send(response, 200, { ok: true, pull: { ...shown, author: pull.author.login, live: await isLive(mergeCommit), namesPage: pull.title === page.title || pull.title === source }, page, before, after, edit }, { 'Cache-Control': 'public, max-age=60' });
  },
  'GET /api/page-history': async (request, response, url) => {
    if (!recentPulls) throw new RequestError(503, 'recent changes are not configured (--github-repo)');
    throttle(client(request), 'history');
    const path = pagePath(url.searchParams.get('path'));
    const file = `content/${path}`;
    // Shared by every page and every client: GitHub is asked at most once a minute, however many ask here.
    const [open, recent] = await Promise.all([recentPulls.open(), recentPulls.list(1)]).catch(githubFailed);
    const merged = recent.pulls.filter(pull => pull.state === 'merged');
    const live = await Promise.all(merged.map(pull => isLive(pull.mergeCommit)));
    const pulls = [];
    for (const pull of [...open, ...merged.filter((_, index) => live[index] === false)]) {
      const change = pull.files.find(changed => changed.path === file || changed.previous === file);
      if (!change) continue;
      const { files, fileCount, truncated, author, mergeCommit, ...shown } = pull;
      pulls.push({
        ...shown, author: author.login, live: pull.state === 'merged' ? false : null,
        path: change.path.replace(/^content\//, ''), status: change.status, previous: change.previous?.replace(/^content\//, '') ?? null,
        additions: change.additions, deletions: change.deletions,
      });
    }
    pulls.sort((a, b) => b.time.localeCompare(a.time));
    send(response, 200, { ok: true, pulls }, { 'Cache-Control': 'public, max-age=60' });
  },
  'POST /api/preview': queued(async (request, response, user) => {
    throttle(user.login, 'preview');
    const { path, text } = await draft(request);
    const start = performance.now();
    const result = await serviceCall(response, 'preview', path, text);
    // One line per preview: who, which page, how it went and where the time went.
    const steps = result ? Object.entries(result.timings).map(([name, ms]) => `${name} ${ms}`).join(', ') : 'failed';
    console.log(`[editor-api] preview ${user.login} content/${path} ${Math.round(performance.now() - start)} ms (${steps})`);
    if (result) send(response, 200, { ok: true, ...result });
  }),
  'POST /api/check': queued(async (request, response, user) => {
    throttle(user.login, 'check');
    const { path, text } = await draft(request);
    const result = await serviceCall(response, 'check', path, text);
    if (result) send(response, 200, { ok: true, ...result });
  }),
  'POST /api/submit': queued(async (request, response, user) => {
    if (!repository) throw new RequestError(503, 'submitting is not configured');
    throttle(user.login, 'submit');
    const { path, text, body } = await draft(request);
    if (body.original !== null && !(typeof body.original === 'string' && /^[0-9a-f]{40}$/.test(body.original))) throw new RequestError(400, 'original must be the blob id from /api/source, or null for a new page');
    if (body.original === null && !/^wiki\/[^/]+\/index\.md$/.test(path)) throw new RequestError(403, 'only entries (content/wiki/<name>/index.md) can be created online');
    if (body.pull !== undefined && body.pull !== null && !(Number.isInteger(body.pull) && body.pull > 0)) throw new RequestError(400, 'pull must be a pull request number');
    const message = typeof body.message === 'string' ? body.message.replace(/\s+/g, ' ').trim().slice(0, 200) : '';
    if (!await serviceCall(response, 'check', path, text)) return;
    // What is committed is formatted (npm run format: line breaks and indentation, the page unchanged); the editor
    // takes the formatted text from the answer.
    let formatted = text;
    try { formatted = formatMarkdown(text); } catch (error) { console.error(`[editor-api] formatting content/${path} failed: ${error.message}`); }
    let title;
    try { title = parseYAML(text.match(/^(?:﻿)?---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '')?.title; } catch {}
    title = typeof title === 'string' && title.trim() ? title.trim() : path.replace(/\/_?index\.md$|\.md$/, '').split('/').at(-1);
    const result = await repository.submit({
      user, path: `content/${path}`, text: formatted, original: body.original,
      message: message || `编辑 ${title}`, title, target: body.pull ?? undefined,
      body: number => `由 @${user.login} 通过在线编辑器提交。\n\n${message ? `> ${message}\n\n` : ''}页面：\`content/${path}\`\n\n[在线编辑此 PR](${editorURL(path, number)})`,
    }).catch(error => {
      if (error.status === 409) throw new RequestError(409, error.message, { current: error.current && { text: error.current.text, original: error.current.blob } });
      if (error.status === 410) {
        throw new RequestError(410, error.message, {
          current: error.current && { text: error.current.text, original: error.current.blob }, merged: error.merged,
          pull: error.pull ? { number: error.pull.number, url: error.pull.url, author: error.pull.author } : null,
        });
      }
      console.error(`[editor-api] ${error.message}`);
      throw new RequestError(502, 'GitHub refused the submission; try again later');
    });
    // Someone else's pull request: its author hears of the change.
    if (!sameLogin(result.author, user.login)) {
      await repository.comment(result.number, `@${user.login} 通过在线编辑器更新了此 PR${message ? `：\n\n> ${message}` : '。'}`);
    }
    console.log(`[editor-api] ${user.login} ${result.updated ? 'updated' : 'opened'} pull request #${result.number}${sameLogin(result.author, user.login) ? '' : ` (by ${result.author})`} for content/${path}`);
    send(response, 200, { ok: true, number: result.number, url: result.url, updated: result.updated, original: result.blob, text: formatted });
  }),
};

/** GitHub logins are case-insensitive. */
const sameLogin = (a, b) => a.toLowerCase() === b.toLowerCase();
/** The editor for a page, on a pull request of it (without a number, the editor offers the page's pull requests). */
const editorURL = (path, number) => new URL(`edit/?${new URLSearchParams({ path, ...(number ? { pull: number } : {}) })}`, options.baseURL.replace(/\/?$/, '/')).href;

/**
 * Whether a merged pull request's change is on the site: the editor API runs in the deployed checkout (deploy/deploy.sh
 * moves it to each published commit and restarts it), so its commit contains everything live. The site lags a merge by
 * the next check and a build. null for an open pull request, or when this is not a Git checkout.
 */
const git = promisify(execFile);
const checkout = git('git', ['rev-parse', 'HEAD'], { cwd: root }).then(() => true, () => false);
const liveCommits = new Set();
async function isLive(commit) {
  if (!commit || !await checkout) return null;
  if (liveCommits.has(commit)) return true;
  try {
    await git('git', ['merge-base', '--is-ancestor', commit, 'HEAD'], { cwd: root });
    liveCommits.add(commit);
    return true;
  } catch (error) {
    // 1: not an ancestor; 128: a commit this checkout has not fetched yet. Either way not deployed.
    if (error.code === 1 || error.code === 128) return false;
    console.error(`[editor-api] git merge-base: ${error.message}`);
    return null;
  }
}

function githubFailed(error) {
  console.error(`[editor-api] ${error.message}`);
  throw new RequestError(502, 'could not read pull requests from GitHub; try again later');
}

/** A page's front matter field (title, sort), or undefined. */
function frontMatterField(text, field) {
  try {
    const value = parseYAML(text?.match(/^(?:\uFEFF)?---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '')?.[field];
    return typeof value === 'string' && value.trim() ? value.trim() : undefined;
  } catch {}
}
const titleOf = text => frontMatterField(text, 'title');
/**
 * What a changed file in content/ is on the site: { path, title, url, status, previous, group }, or undefined for
 * files that are not pages (attachments, component definitions, the site's own pages). Titles and addresses are the
 * current ones on the site; a page that is new in an open pull request is named after its directory.
 */
function changedPage(file) {
  const match = file.path.match(/^content\/((wiki|books|help)\/.+\.md)$/);
  if (!match) return;
  const path = match[1], parts = path.split('/');
  // The lists of entries and of books (wiki/_index.md, books/_index.md) are the site's own pages, not in a book.
  if (parts.length === 2 && parts[1] === '_index.md' && parts[0] !== 'help') return;
  const directory = parts.at(-1).match(/^_?index\.md$/) ? parts.at(-2) : parts.at(-1).replace(/\.md$/, '');
  const group = parts[0] === 'books'
    ? { kind: 'book', ...displayTitle(titleOf(service.source(`books/${parts[1]}/_index.md`)) ?? parts[1], `books/${parts[1]}/_index.md`) }
    : { kind: parts[0], title: null, titleHTML: null };
  const text = service.source(path), { title, titleHTML } = displayTitle(titleOf(text) ?? directory, path);
  // Ordered and grouped by letter as in the site's lists; a bulk change lists hundreds of pages.
  let sortKey;
  try { sortKey = frontMatterField(text, 'sort') === undefined ? defaultReading(title) : normalizeReading(frontMatterField(text, 'sort'), path); }
  catch { sortKey = defaultReading(title); }
  return {
    path, title, titleHTML, source: titleOf(text), url: file.status === 'removed' ? null : service.url(path) ?? null,
    status: file.status, previous: file.previous?.replace(/^content\//, '') ?? null, group, letter: sortGroup(title, sortKey), sortKey,
  };
}

/**
 * changedPage, remembered: a page of the recent changes is listed again on every request, and a bulk change has
 * hundreds (front matter, KaTeX, pinyin each time). What it depends on, the page's source, its book's and its address,
 * is compared on each use, so a change to the site's pages shows at once. Callers must not change the result.
 */
const changedPages = new Map(); // "path\0status\0previous" -> { source, book, url, page }
function changedPageCached(file) {
  const path = file.path.replace(/^content\//, ''), parts = path.split('/');
  const source = service.source(path), book = parts[0] === 'books' ? service.source(`books/${parts[1]}/_index.md`) : undefined;
  const url = file.status === 'removed' ? null : service.url(path);
  const key = `${file.path}\0${file.status}\0${file.previous ?? ''}`, known = changedPages.get(key);
  if (known && known.source === source && known.book === book && known.url === url) return known.page;
  const page = changedPage(file);
  changedPages.delete(key);
  changedPages.set(key, { source, book, url, page });
  if (changedPages.size > 5000) changedPages.delete(changedPages.keys().next().value);
  return page;
}

/** A page of /api/recent-changes as sent, by the list it was made from (recentPulls keeps a list for a minute). */
const recentResponses = new WeakMap(); // list -> { live, pages, text }
const sameItems = (a, b) => a.length === b.length && a.every((item, index) => item === b[index]);

async function draft(request) {
  const body = await readJSON(request);
  const path = pagePath(body?.path);
  if (typeof body.text !== 'string') throw new RequestError(400, 'text must be a string');
  newPageFits(path);
  return { path, text: body.text, body };
}

// Requests admitted and not yet answered; counted on arrival, before the body is read.
let admitted = 0;
/** A logged-in request that waits in the preview service's queue. */
function queued(handler) {
  return async (request, response) => {
    const user = requireUser(request);
    if (admitted >= maxWaiting) throw new RequestError(503, 'too many preview requests are waiting; try again shortly');
    admitted++;
    try { await handler(request, response, user); } finally { admitted--; }
  };
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url, 'http://localhost');
    const route = routes[`${request.method} ${url.pathname}`];
    if (!route) throw new RequestError(Object.keys(routes).some(key => key.endsWith(` ${url.pathname}`)) ? 405 : 404, 'not found');
    if (!started && !early.has(`${request.method} ${url.pathname}`)) throw new RequestError(503, 'the editor is starting; try again shortly', { headers: { 'Retry-After': '5' } });
    // Cookies authenticate requests, so a write must come from the site itself. Requests from
    // other sites carry their Origin; JSON bodies also need a preflight that is never granted.
    if (request.method === 'POST' && request.headers.origin && request.headers.origin !== publicOrigin) throw new RequestError(403, 'cross-site request refused');
    await route(request, response, url);
  } catch (error) {
    if (error instanceof RequestError) {
      const { headers = {}, ...extra } = error.extra;
      return send(response, error.status, { ok: false, errors: [{ file: null, line: null, message: error.message }], ...extra }, headers);
    }
    console.error(error);
    if (!response.headersSent) send(response, 500, { ok: false, errors: [{ file: null, line: null, message: 'internal error' }] });
  }
});

const stop = () => { service.close(); server.close(); process.exit(); };
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, stop);

// Starting takes a while (on the server about a minute after each deploy: prebuild, Hugo's first render, the warm-up).
// Meanwhile logging in and the recent changes are answered, the latter once the prebuild has the site's pages; the
// rest is 503 until the preview service is ready, when "listening on" is logged.
let started = false;
const early = new Set(['GET /api/me', 'GET /api/auth/login', 'GET /api/auth/callback', 'POST /api/auth/logout', 'GET /api/recent-changes', 'GET /api/recent-changes/diff', 'GET /api/page-history']);
const sourcesReady = service.refresh();
sourcesReady.catch(() => {}); // Reported below; the process exits.
await new Promise((resolve, reject) => { server.once('error', reject); server.listen(options.port, options.bind, resolve); });
const { address, port } = server.address();
const apiURL = `http://${address.includes(':') ? `[${address}]` : address}:${port}/api/`;
console.log(`[editor-api] starting: answering recent changes on ${apiURL}`);
try {
  await sourcesReady;
  const start = performance.now();
  await service.hugoReady();
  console.log(`hugo: rendered the site (${Math.round(performance.now() - start)} ms)`);
  // The first request would otherwise pay for initialization, once taking 4.6 s.
  await service.warmUp();
} catch (error) {
  console.error(error.message);
  if (error.log) console.error(error.log);
  service.close();
  process.exit(1);
}
started = true;
console.log(`[editor-api] listening on ${apiURL}`);
