import { createProject } from './helpers/project.mjs';
import assert from 'node:assert/strict';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { spawn, execFileSync } from 'node:child_process';
import { once } from 'node:events';
import { createServer } from 'node:net';
import { join } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';

// Local editing (scripts/service/local-edit.mjs): serve without --api reads, previews and saves the files here, and
// tells the editor of their changes on disk and in Git's HEAD.
const root = await createProject('local-edit', ['scripts', 'site', 'data', 'content/navboxes']);
let child, output = '';
async function until(check, description, timeout = 15000) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    if (child && (child.exitCode !== null || child.signalCode !== null)) throw new Error(`serve 提前退出：${output}`);
    try { if (await check()) return; } catch (error) {
      if (!['ENOENT', 'ECONNREFUSED'].includes(error.code) && !(error instanceof TypeError)) throw error;
    }
    await delay(75);
  }
  throw new Error(`${description} 超时：${output}`);
}
const git = (...args) => execFileSync('git', args, { cwd: root, stdio: 'pipe' });
try {
  const file = join(root, 'content/wiki/甲/index.md');
  const source = text => `---\ntitle: 甲\ncategories: []\n---\n\n${text}\n`;
  await mkdir(join(root, 'content/wiki/甲'), { recursive: true });
  await writeFile(file, source('第一行。\n\n第二行。'));
  await mkdir(join(root, 'content/wiki/乙'), { recursive: true });
  await writeFile(join(root, 'content/wiki/乙/index.md'), '---\ntitle: 乙\n---\n\n[[甲]]\n');
  await writeFile(join(root, 'data/categories.yaml'), '{}\n');
  git('init');
  git('add', 'content');
  git('-c', 'user.name=test', '-c', 'user.email=test@example.org', 'commit', '-m', 'start');

  const probe = createServer();
  await new Promise((resolve, reject) => { probe.once('error', reject); probe.listen(0, '127.0.0.1', resolve); });
  const port = probe.address().port;
  await new Promise(resolve => probe.close(resolve));
  const base = `http://127.0.0.1:${port}`;
  child = spawn(process.execPath, ['scripts/serve.mjs', '--port', String(port)], { cwd: root, stdio: ['ignore', 'pipe', 'pipe'], detached: process.platform !== 'win32' });
  child.stdout.on('data', data => { output += data; });
  child.stderr.on('data', data => { output += data; });
  await until(async () => (await fetch(`${base}/wiki/甲/`)).status === 200, '首次构建', 60000);
  await until(() => output.includes('warm-up done'), '预热');

  const local = (route, body, headers = {}) => fetch(`${base}/__banana_local/${route}`, body === undefined ? { headers } : {
    method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body),
  });
  const json = async (...args) => { const response = await local(...args); return [response.status, await response.json()]; };

  // The editor page knows it edits locally; other pages do not.
  const editor = await (await fetch(`${base}/edit/`)).text();
  assert.match(editor, /<html [^>]*data-local-edit/);
  assert.doesNotMatch(await (await fetch(`${base}/wiki/甲/`)).text(), /data-local-edit/);
  const revisionOf = html => html.match(/data-preview-revision="(\d+)"/)[1];

  // The source, with HEAD's version and the page's address.
  let [status, body] = await json(`source?path=${encodeURIComponent('wiki/甲/index.md')}`);
  assert.equal(status, 200);
  assert.equal(body.text, source('第一行。\n\n第二行。'));
  assert.equal(body.head, body.text);
  assert.equal(body.url, '/wiki/甲/');
  [, body] = await json(`source?path=${encodeURIComponent('wiki/新/index.md')}`);
  assert.deepEqual([body.exists, body.text, body.head], [false, '', null]);
  // Paths outside content/, other hosts and other sites are refused.
  for (const path of ['../package.json', 'wiki/../../package.json', 'wiki/甲/index.yaml', 'navboxes/x.md']) {
    assert.equal((await local(`source?path=${encodeURIComponent(path)}`)).status, 400, path);
  }
  const foreign = await new Promise((resolve, reject) => {
    // fetch sets Host itself; a raw request names another.
    import('node:http').then(({ request }) => request({ host: '127.0.0.1', port, path: '/__banana_local/source?path=wiki%2F%E7%94%B2%2Findex.md', headers: { Host: 'attacker.example' } }, resolve).on('error', reject).end());
  });
  assert.equal(foreign.statusCode, 403, '其他主机名');
  assert.equal((await local('save', { path: 'wiki/甲/index.md', text: 'x', base: null }, { Origin: 'https://attacker.example' })).status, 403, '其他网站');

  // Preview and check, as the API gives them; errors with their lines. Keys the online editor refuses are allowed.
  [status, body] = await json('preview', { path: 'wiki/甲/index.md', text: source('预览的稿件。') });
  assert.equal(status, 200);
  assert.match(body.html, /预览的稿件/);
  assert.match(body.html, /data-source-line/);
  [status, body] = await json('preview', { path: 'wiki/甲/index.md', text: '---\ntitle: 甲\ndraft: false\n---\n\n[[不存在]]\n' });
  assert.equal(status, 200);
  assert.deepEqual(body.missingLinks.map(link => link.target), ['不存在']);
  [status, body] = await json('preview', { path: 'wiki/甲/index.md', text: '---\ntitle: 甲\nunknown: 1\n---\n' });
  assert.equal(status, 422);
  assert.deepEqual([body.errors[0].file, body.errors[0].line], ['content/wiki/甲/index.md', 3]);
  [status, body] = await json('check', { path: 'wiki/甲/index.md', text: source('$x') });
  assert.equal(status, 422);
  assert.equal(body.errors[0].file, 'content/wiki/甲/index.md');
  assert.ok(body.errors[0].line >= 6);

  // Events: the file as it is when subscribing, then its changes on disk; not the editor's own saves.
  const events = (await local(`events?path=${encodeURIComponent('wiki/甲/index.md')}`)).body.getReader();
  let buffered = '';
  const next = async () => {
    for (;;) {
      const end = buffered.indexOf('\n\n');
      if (end >= 0) {
        const block = buffered.slice(0, end);
        buffered = buffered.slice(end + 2);
        return { event: block.match(/^event: (.*)$/m)[1], data: JSON.parse(block.match(/^data: (.*)$/m)[1]) };
      }
      const { value, done } = await Promise.race([events.read(), delay(10000).then(() => { throw new Error('未收到事件'); })]);
      if (done) throw new Error('事件流结束');
      buffered += new TextDecoder().decode(value);
    }
  };
  assert.deepEqual(await next(), { event: 'file', data: { text: source('第一行。\n\n第二行。') } });
  await writeFile(file, source('第一行，由别处修改。\n\n第二行。'));
  assert.deepEqual(await next(), { event: 'file', data: { text: source('第一行，由别处修改。\n\n第二行。') } });

  // Saving: against the text the editor knows of the file; otherwise 409 with the file as it is.
  const otherRevision = revisionOf(await (await fetch(`${base}/wiki/乙/`)).text());
  const editorRevision = revisionOf(editor);
  [status, body] = await json('save', { path: 'wiki/甲/index.md', text: source('保存的。'), base: source('第一行。\n\n第二行。') });
  assert.equal(status, 409);
  assert.equal(body.current, source('第一行，由别处修改。\n\n第二行。'));
  assert.equal(await readFile(file, 'utf8'), source('第一行，由别处修改。\n\n第二行。'));
  [status, body] = await json('save', { path: 'wiki/甲/index.md', text: source('保存的。'), base: source('第一行，由别处修改。\n\n第二行。') });
  assert.equal(status, 200);
  assert.equal(await readFile(file, 'utf8'), source('保存的。'));
  await until(async () => (await (await fetch(`${base}/wiki/甲/`)).text()).includes('保存的'), '保存后页面更新');
  // Only the page that changed reloads: not other pages, and not the editor (whose unsaved text would be lost).
  assert.equal(revisionOf(await (await fetch(`${base}/wiki/乙/`)).text()), otherRevision, '其他页面不应刷新');
  assert.equal(revisionOf(await (await fetch(`${base}/edit/`)).text()), editorRevision, '编辑器页面不应刷新');
  // A new file, in a new directory; and the next change on disk is the first event since the save.
  [status] = await json('save', { path: 'wiki/丙/index.md', text: '---\ntitle: 丙\n---\n', base: null });
  assert.equal(status, 200);
  assert.equal(await readFile(join(root, 'content/wiki/丙/index.md'), 'utf8'), '---\ntitle: 丙\n---\n');
  assert.equal((await local('save', { path: 'wiki/丙/index.md', text: 'x', base: null })).status, 409, '已存在的文件');
  await writeFile(file, source('再次由别处修改。'));
  assert.deepEqual(await next(), { event: 'file', data: { text: source('再次由别处修改。') } });

  // A commit: the file's new version in HEAD.
  git('add', 'content');
  git('-c', 'user.name=test', '-c', 'user.email=test@example.org', 'commit', '-m', 'next');
  assert.deepEqual(await next(), { event: 'head', data: { head: source('再次由别处修改。') } });
  await events.cancel();

  const closed = once(child, 'close');
  child.kill('SIGINT');
  await closed;
  console.log('本地编辑：编辑器页面的标记、读取源文件与 HEAD 中的版本、拒绝 content/ 之外的路径与其他主机和网站、预览与检查及其错误、文件变化与 HEAD 变化的通知、保存与冲突、新文件、保存后只刷新变化的页面验证通过');
} finally {
  if (child?.pid) {
    try { process.kill(process.platform === 'win32' ? child.pid : -child.pid, 'SIGTERM'); } catch (error) { if (error.code !== 'ESRCH') throw error; }
    if (child.exitCode === null && child.signalCode === null) await once(child, 'close');
  }
  await rm(root, { recursive: true, force: true });
}
