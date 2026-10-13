import { createServer } from 'node:http';
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
// POST /api/preview { path, text }          { ok, url, html, missingLinks, timings }（需登录）
// POST /api/check   { path, text }          { ok, missingLinks }（需登录）
// POST /api/submit  { path, text, original, message, pull }
//                                          { ok, number, url, updated, original }（需登录）：检查通过后提交，
//                                          打开或更新该用户对该页的 PR；有 pull（PR 编号）时添加到该页的这个 PR，
//                                          可以是别人的（并在 PR 中留言通知），已不再打开时返回 410；original 为编辑开始时的 blob id，
//                                          页面已被别人修改时返回 409 与 current: { text, original }
// path 为 content/ 中的页面（可省略 content/ 前缀，可以是新页面；只能提交新的条目 wiki/<名称>/index.md，其他新页面返回 403）。
// 错误时为 { ok: false, errors: [{ file, line, message }] }：预处理与 Hugo 错误为 422（Hugo 错误另带 log），
// 未登录 401，请求过于频繁 429（带 Retry-After），排队超过 20 个 503。
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
  const text = JSON.stringify(body);
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

// Per account and action, a token bucket: up to `burst` requests at once, then one per `interval`.
// Opening a few pages in quick succession previews each at once; a steady stream is held to the interval.
const limits = {
  preview: { interval: options.previewInterval * 1000, burst: 3 },
  check: { interval: options.previewInterval * 1000 / 3, burst: 1 },
  submit: { interval: options.previewInterval * 5000, burst: 1 },
};
const buckets = new Map(); // "login\0action" -> { tokens, time }
function throttle(user, action) {
  const { interval, burst } = limits[action], key = `${user.login}\0${action}`, now = Date.now();
  const bucket = buckets.get(key) ?? { tokens: burst, time: now };
  bucket.tokens = interval ? Math.min(burst, bucket.tokens + (now - bucket.time) / interval) : burst;
  bucket.time = now;
  if (bucket.tokens < 1) {
    const seconds = Math.ceil((1 - bucket.tokens) * interval / 1000);
    buckets.set(key, bucket);
    console.log(`[editor-api] ${action} ${user.login} refused: too frequent, retry in ${seconds} s`);
    throw new RequestError(429, `too many requests; try again in ${seconds} s`, { headers: { 'Retry-After': String(seconds) } });
  }
  bucket.tokens -= 1;
  buckets.set(key, bucket);
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
  'POST /api/preview': queued(async (request, response, user) => {
    throttle(user, 'preview');
    const { path, text } = await draft(request);
    const start = performance.now();
    const result = await serviceCall(response, 'preview', path, text);
    // One line per preview: who, which page, how it went and where the time went.
    const steps = result ? Object.entries(result.timings).map(([name, ms]) => `${name} ${ms}`).join(', ') : 'failed';
    console.log(`[editor-api] preview ${user.login} content/${path} ${Math.round(performance.now() - start)} ms (${steps})`);
    if (result) send(response, 200, { ok: true, ...result });
  }),
  'POST /api/check': queued(async (request, response, user) => {
    throttle(user, 'check');
    const { path, text } = await draft(request);
    const result = await serviceCall(response, 'check', path, text);
    if (result) send(response, 200, { ok: true, ...result });
  }),
  'POST /api/submit': queued(async (request, response, user) => {
    if (!repository) throw new RequestError(503, 'submitting is not configured');
    throttle(user, 'submit');
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
      if (error.status === 410) throw new RequestError(410, error.message);
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
try {
  await service.refresh();
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
server.listen(options.port, options.bind, () => {
  const { address, port } = server.address();
  console.log(`[editor-api] listening on http://${address.includes(':') ? `[${address}]` : address}:${port}/api/`);
});
