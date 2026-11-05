import { execFile } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { promisify } from 'node:util';
import { describeError } from '../shared/errors.mjs';
import { frontMatterProblems, pageKeys } from '../prebuild/front-matter-rules.mjs';

const git = promisify(execFile);
const maxBody = 2 * 1024 * 1024;
export const localPrefix = '/__banana_local/';

/**
 * 本地编辑（见 docs/preview.md）：serve 不转发 /api/ 时，编辑器（/edit/）读写本机 content/ 中的文件，不登录、不提交 PR。
 * 预览与检查交给 serve 的常驻预览服务；保存直接写入文件，serve 照常增量更新。编辑器订阅所编辑文件的变化（别的编辑器、
 * Claude 写入的修改），以及 Git 的 HEAD（行旁的修改标记相对 HEAD 中的版本）。
 *
 * GET  /__banana_local/source?path=<页面>   { ok, path, exists, text, head, url, labels }：head 为 HEAD 中的版本（没有时为
 *                                          null）
 * GET  /__banana_local/events?path=<页面>   事件流：file { text }（文件的内容，订阅时一次，之后每次变化；删除时不报告），
 *                                          head { head }（HEAD 中的版本变了）
 * POST /__banana_local/preview { path, text }  同 /api/preview
 * POST /__banana_local/check   { path, text }  同 /api/check
 * POST /__banana_local/save    { path, text, base }  { ok }：base 为编辑器所知的文件内容（新文件为 null）；文件已不是 base 时
 *                                          返回 409 与 current（文件现在的内容，或 null）
 *
 * 只在 serve 监听本机地址时开放；请求的 Host 必须是 serve 的地址（防止 DNS rebinding），写入请求不能来自别的网站。
 * request(method, ...args) 向预览服务发出请求（serve 的 service.request；服务不在时为 undefined）。
 */
export function localEditor({ root, origin, request }) {
  const port = new URL(origin).port;
  const hosts = new Set([new URL(origin).host, `localhost:${port}`, `127.0.0.1:${port}`, `[::1]:${port}`]);
  const subscribers = new Map(); // page path -> Set of { response, text, head }
  const timers = new Map(); // page path -> pending read of the file
  let headTimer;

  const fail = (status, message, extra = {}) => Object.assign(new Error(message), { status, extra });
  function send(response, status, body) {
    const text = JSON.stringify(body);
    response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(text), 'Cache-Control': 'no-store' });
    response.end(text);
  }
  const event = (response, name, data) => response.write(`event: ${name}\ndata: ${JSON.stringify(data)}\n\n`);

  /** content/ 内的 Markdown 文件的相对路径；拒绝越出 content/ 的路径与组件定义。 */
  function pagePath(value) {
    if (typeof value !== 'string') throw fail(400, 'path must be a string');
    const path = value.replace(/^content\//, ''), parts = path.split('/');
    if (!/\.md$/i.test(path) || /[\\\u0000-\u001f]/.test(path) || parts.some(part => ['', '.', '..'].includes(part)) || path.length > 300) {
      throw fail(400, 'path must be a Markdown file in content/, such as content/wiki/条目/index.md');
    }
    if (parts[0] === 'navboxes') throw fail(400, 'component definitions are not pages');
    return path;
  }
  const absolute = path => join(root, 'content', path);
  const readText = path => readFile(absolute(path), 'utf8').catch(error => { if (error.code === 'ENOENT') return null; throw error; });
  /** The file as HEAD has it, or null (not committed, or no commits yet). */
  const headText = path => git('git', ['show', `HEAD:content/${path}`], { cwd: root, maxBuffer: 64 * 1024 * 1024 })
    .then(({ stdout }) => stdout, () => null);

  async function readJSON(incoming) {
    if (!/^application\/json\b/i.test(incoming.headers['content-type'] ?? '')) throw fail(415, 'expected application/json');
    const chunks = [];
    let size = 0;
    for await (const chunk of incoming) {
      size += chunk.length;
      if (size > maxBody) throw fail(413, `request body exceeds ${maxBody} bytes`);
      chunks.push(chunk);
    }
    let body;
    try { body = JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch { throw fail(400, 'invalid JSON'); }
    if (typeof body?.text !== 'string') throw fail(400, 'text must be a string');
    return { ...body, path: pagePath(body.path) };
  }

  /** A preview service request for a draft, its errors as the API gives them (422; 503 while there is no service). */
  async function draftCall(method, path, text) {
    const problems = frontMatterProblems(text, { keys: pageKeys });
    if (problems.length) throw fail(422, problems[0].message, { errors: problems.map(problem => ({ file: `content/${path}`, ...problem })) });
    const reply = await request(method, path, text);
    if (!reply) throw fail(503, 'the preview service is starting; try again shortly');
    if (reply.ok) return reply.result;
    if (/no successful full prebuild|not running|exited/.test(reply.error)) throw fail(503, reply.error);
    const described = describeError(root, { message: reply.error }, absolute(path));
    throw fail(422, described.message, { errors: [described], ...(reply.log ? { log: reply.log.replaceAll(root, '') } : {}) });
  }
  /** The service's answer to a question about the site (url, labels), or the fallback when it has none. */
  const ask = async (fallback, method, ...args) => {
    const reply = await request(method, ...args);
    return reply?.ok ? reply.result ?? fallback : fallback;
  };

  const routes = {
    'GET source': async (_incoming, response, url) => {
      const path = pagePath(url.searchParams.get('path'));
      const [text, head, address, labels] = await Promise.all([readText(path), headText(path), ask(null, 'url', path), ask([], 'labels', path)]);
      send(response, 200, {
        ok: true, path: `content/${path}`, exists: text !== null, text: text ?? '', head, url: address, labels,
      });
    },
    'GET events': async (incoming, response, url) => {
      const path = pagePath(url.searchParams.get('path'));
      response.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
      // Subscribed at once, so that no change is missed while the file is read.
      const subscriber = { response, text: undefined, head: undefined };
      if (!subscribers.has(path)) subscribers.set(path, new Set());
      subscribers.get(path).add(subscriber);
      incoming.on('close', () => {
        subscribers.get(path)?.delete(subscriber);
        if (!subscribers.get(path)?.size) subscribers.delete(path);
      });
      const [text, head] = await Promise.all([readText(path), headText(path)]);
      subscriber.head ??= head;
      if (subscriber.text === undefined) {
        subscriber.text = text;
        if (text !== null) event(response, 'file', { text });
      }
    },
    'POST preview': async (incoming, response) => {
      const { path, text } = await readJSON(incoming);
      send(response, 200, { ok: true, ...await draftCall('preview', path, text) });
    },
    'POST check': async (incoming, response) => {
      const { path, text } = await readJSON(incoming);
      send(response, 200, { ok: true, ...await draftCall('check', path, text) });
    },
    'POST save': async (incoming, response) => {
      const { path, text, base } = await readJSON(incoming);
      if (base !== null && typeof base !== 'string') throw fail(400, 'base must be the text the editor last had from the file, or null for a new file');
      const current = await readText(path);
      if (current !== base) throw fail(409, 'the file changed on disk', { current });
      await mkdir(dirname(absolute(path)), { recursive: true });
      await writeFile(absolute(path), text);
      // The editor knows this text already: not reported back as a change.
      for (const subscriber of subscribers.get(path) ?? []) subscriber.text = text;
      send(response, 200, { ok: true });
    },
  };

  /** Answers a request under localPrefix. */
  async function handle(incoming, response, url) {
    try {
      if (!hosts.has(incoming.headers.host)) throw fail(403, 'unexpected host');
      if (incoming.method === 'POST' && incoming.headers.origin && !hosts.has(incoming.headers.origin.replace(/^http:\/\//, ''))) throw fail(403, 'cross-site request refused');
      const route = routes[`${incoming.method} ${url.pathname.slice(localPrefix.length)}`];
      if (!route) throw fail(404, 'not found');
      await route(incoming, response, url);
    } catch (error) {
      if (response.headersSent) { response.end(); return; }
      if (!error.status) console.error(error);
      const { errors = [{ file: null, line: null, message: error.status ? error.message : 'internal error' }], ...extra } = error.extra ?? {};
      send(response, error.status ?? 500, { ok: false, errors, ...extra });
    }
  }

  /** A file under content/ changed (its path relative to content/): its subscribers hear of its new content. */
  function contentChanged(path) {
    if (!subscribers.has(path) || timers.has(path)) return;
    // Saves come in bursts (an editor may write a file in several steps).
    timers.set(path, setTimeout(async () => {
      timers.delete(path);
      const text = await readText(path).catch(() => null);
      if (text === null) return; // Deleted, or between an editor's steps.
      for (const subscriber of subscribers.get(path) ?? []) {
        if (subscriber.text === text) continue;
        subscriber.text = text;
        event(subscriber.response, 'file', { text });
      }
    }, 50));
  }

  /** A commit or a checkout: subscribers hear of their files' new versions in HEAD. */
  function headChanged() {
    clearTimeout(headTimer);
    headTimer = setTimeout(async () => {
      for (const [path, set] of subscribers) {
        const head = await headText(path);
        for (const subscriber of set) {
          if (subscriber.head === head) continue;
          subscriber.head = head;
          event(subscriber.response, 'head', { head });
        }
      }
    }, 200);
  }

  function close() {
    clearTimeout(headTimer);
    for (const timer of timers.values()) clearTimeout(timer);
    for (const set of subscribers.values()) for (const { response } of set) response.end();
  }

  return { handle, contentChanged, headChanged, close };
}
