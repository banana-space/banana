import { createProject } from './helpers/project.mjs';
import assert from 'node:assert/strict';
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { spawn, execFileSync } from 'node:child_process';
import { once } from 'node:events';
import { join } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';

const root = await createProject('api');
const page = async (path, text) => {
  await mkdir(join(root, 'content', path, '..'), { recursive: true });
  await writeFile(join(root, 'content', path), text);
};
const read = path => readFile(join(root, 'content', path), 'utf8');
// Entries carry categories: the editor requires them (scripts/prebuild/front-matter-rules.mjs). The body starts on line 6.
const wiki = (title, body, extra = '') => `---\ntitle: ${title}\ncategories: []\n${extra}---\n\n${body}\n`;
let child, output = '';
try {
  await page('wiki/甲/index.md', wiki('甲', '甲的正文，公式 $x^2$。'));
  await page('wiki/乙/index.md', wiki('乙', '链接 [[甲]] 与 [[别名丙]]。'));
  // Spaces and capitals in the pages' paths.
  const many = Array.from({ length: 16 }, (_, i) => `wiki/Stress Page ${String(i + 1).padStart(2, '0')}/index.md`);
  for (const [i, path] of many.entries()) await page(path, wiki(`压力${i + 1}`, `第 ${i + 1} 页：$\\int_0^1 x^{${i}} dx$`));

  child = spawn(process.execPath, ['scripts/api.mjs', '--port', '0', '--dev-user', 'tester', '--preview-interval', '0'], {
    cwd: root, stdio: ['ignore', 'pipe', 'pipe'], detached: process.platform !== 'win32',
  });
  child.stdout.on('data', data => { output += data; });
  child.stderr.on('data', data => { output += data; });
  const deadline = Date.now() + 60000;
  while (!/listening on (http:\/\/\S+)\/api\//.test(output)) {
    if (child.exitCode !== null || Date.now() > deadline) throw new Error(`API 未启动：${output}`);
    await delay(100);
  }
  const base = output.match(/listening on (http:\/\/\S+)\/api\//)[1];
  // --dev-user logs in without GitHub; previews need the session.
  const loginResponse = await fetch(`${base}/api/auth/login?return=/edit/`, { redirect: 'manual' });
  assert.equal(loginResponse.headers.get('location'), '/edit/');
  const session = loginResponse.headers.get('set-cookie').split(';')[0];
  assert.match(loginResponse.headers.get('set-cookie'), /HttpOnly; SameSite=Lax/);
  assert.deepEqual(await (await fetch(`${base}/api/me`, { headers: { Cookie: session } })).json(), { ok: true, user: { login: 'tester', name: 'tester', url: 'https://github.com/tester', pulls: null } });
  assert.deepEqual(await (await fetch(`${base}/api/me`)).json(), { ok: true, user: null });
  assert.equal((await fetch(`${base}/api/preview`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{"path":"wiki/甲/index.md","text":""}' })).status, 401);
  assert.equal((await fetch(`${base}/api/preview`, { method: 'POST', headers: { 'Content-Type': 'application/json', Cookie: `${session}x` }, body: '{"path":"wiki/甲/index.md","text":""}' })).status, 401, '篡改的会话');
  assert.equal((await fetch(`${base}/api/preview`, { method: 'POST', headers: { 'Content-Type': 'application/json', Cookie: session, Origin: 'https://evil.example' }, body: '{"path":"wiki/甲/index.md","text":""}' })).status, 403, '跨站请求');
  // The current source and its blob id, for the editor to start from.
  const source = await (await fetch(`${base}/api/source?path=content/wiki/甲/index.md`)).json();
  assert.equal(source.text, await read('wiki/甲/index.md'));
  assert.equal(source.original, execFileSync('git', ['hash-object', '--stdin'], { input: source.text, encoding: 'utf8' }).trim());
  assert.deepEqual([source.exists, source.pull, source.file, source.url], [true, null, null, '/wiki/甲/'], '未配置提交时没有 GitHub 地址；页面地址');
  assert.deepEqual(await (await fetch(`${base}/api/source?path=wiki/尚无/index.md`)).json(), { ok: true, path: 'content/wiki/尚无/index.md', exists: false, text: '', original: null, minor: false, pull: null, pulls: [], pullMissing: null, file: null, url: null, labels: [] });
  // A book page's source comes with the labels of the book's other pages, for completion.
  const bookLabels = (await (await fetch(`${base}/api/source?path=books/线性代数拾遗/maps/kernel/index.md`)).json()).labels;
  assert.deepEqual(bookLabels.slice(0, 4), [
    { name: 'chap:vectors', text: '第 1 章', page: '向量空间' }, { name: 'def:vector-space', text: '定义 1.1', page: '向量空间' },
    { name: 'sec:basis', text: '第 1.1 节', page: '向量空间' }, { name: 'thm:basis', text: '定理 1.1.1', page: '向量空间' },
  ], '书中其他页面的标签，按引用的显示');
  assert.ok(bookLabels.some(label => label.name === 'def:linear-map') && !bookLabels.some(label => label.name === 'def:kernel'), '不含本页的标签');
  // The service is warmed up before the first request is accepted; the temporary page leaves nothing behind
  // (checked with the whole generated directory below).
  assert.match(output, /\[preview\] warm-up done \(\d+ ms\)[\s\S]*listening on/);
  const request = async (action, body, headers = { 'Content-Type': 'application/json' }) => {
    const response = await fetch(`${base}/api/${action}`, { method: 'POST', headers: { ...headers, Cookie: session }, body: typeof body === 'string' ? body : JSON.stringify(body) });
    return { status: response.status, json: await response.json() };
  };
  const preview = async (path, text) => {
    const { status, json } = await request('preview', { path, text });
    assert.equal(status, 200, JSON.stringify(json));
    return json;
  };

  /** Applies the drafts to content/, runs the production build, reads the given pages, and restores content/. */
  async function fullBuild(drafts, urls) {
    const originals = new Map();
    for (const [path, text] of drafts) {
      originals.set(path, await read(path).catch(() => undefined));
      await page(path, text);
    }
    try {
      execFileSync(process.execPath, ['scripts/build.mjs'], { cwd: root, stdio: 'pipe' });
      return Promise.all(urls.map(url => readFile(join(root, 'public', decodeURI(url), 'index.html'), 'utf8')));
    } finally {
      for (const [path, text] of originals) {
        if (text === undefined) await rm(join(root, 'content', path, '..'), { recursive: true });
        else await page(path, text);
      }
    }
  }

  // Drafts of an article body, an article with a new alias, a new page, a page in a new section and a collection page
  // (a new section renumbers the following ones): each equals the full build of the same edit.
  const drafts = new Map([
    ['wiki/奇异上同调/index.md', (await read('wiki/奇异上同调/index.md')).replace('**奇异上同调**是', '**奇异上同调**（草稿）是')],
    ['wiki/甲/index.md', wiki('甲', '甲的新正文，见 [[乙]]。', 'aliases: [甲之别名]\n')],
    ['wiki/新页面/index.md', wiki('新页面', '新页面链接 [[甲]]、[[不存在的条目]]。\n\n第二段。')],
    ['books/线性代数拾遗/vectors/index.md', (await read('books/线性代数拾遗/vectors/index.md')).replace(/\n## /, '\n## 新插入的一节\n\n插入的正文。\n\n## ')],
  ]);
  const results = new Map();
  for (const [path, text] of drafts) results.set(path, await preview(path, text));
  assert.deepEqual(results.get('wiki/新页面/index.md').missingLinks, [{ line: 6, column: 13, target: '不存在的条目' }], '缺失链接带行号与列号');
  assert.match(results.get('books/线性代数拾遗/vectors/index.md').html, /新插入的一节/);
  // Previews carry source-line marks (empty spans) for the editor; without them, a preview is the full build's
  // page, apart from the summary in the head, which is cut by length, marks included.
  const comparable = html => html.replace(/<span data-source-line="\d+"><\/span>/g, '').replace(/<meta property="og:description"[^>]*>/, '');
  const expected = await fullBuild(drafts, [...results.values()].map(result => result.url));
  for (const [i, result] of [...results.values()].entries()) assert.equal(comparable(result.html), comparable(expected[i]), `${result.url} 与完整构建不一致`);
  // The marks give each line its source line: the draft's new section and its text in the collection page.
  const book = drafts.get('books/线性代数拾遗/vectors/index.md').split('\n');
  const inserted = book.indexOf('插入的正文。') + 1;
  assert.match(results.get('books/线性代数拾遗/vectors/index.md').html, new RegExp(`<span data-source-line="${inserted}"></span>插入的正文`), '行号标记');
  assert.doesNotMatch(results.get('books/线性代数拾遗/vectors/index.md').html, /[\uE000-\uF8FF\u2E3D]/u, '标记字符不应留在页面中');

  // The previous draft is put back before the next request: 乙 must not see 甲's draft alias.
  await preview('wiki/甲/index.md', wiki('甲', '甲', 'aliases: [别名丙]\n'));
  const second = await preview('wiki/乙/index.md', await read('wiki/乙/index.md'));
  assert.deepEqual(second.missingLinks.map(link => link.target), ['别名丙']);
  assert.match(second.html, /class="bm-wiki-link bm-wiki-link-missing">别名丙/);

  // Stress: 20 requests at once, for different pages, the same page twice, and the alias pair.
  // Requests run one at a time in arrival order; every response must be its own page exactly.
  const marker = i => `MARKER${String.fromCharCode(97 + i)}Z`; // Distinct letters: none is part of another.
  const concurrent = [
    ...many.map((path, i) => [path, wiki(`压力${i + 1}`, `第 ${i + 1} 页：$\\int_0^1 x^{${i}} dx$ ${marker(i)}`)]),
    ['wiki/Stress Page 01/index.md', wiki('压力1', `重复预览 ${marker(16)}`)],
    ['wiki/甲/index.md', wiki('甲', `甲 ${marker(17)}`, 'aliases: [别名丙]\n')],
    ['wiki/乙/index.md', (await read('wiki/乙/index.md')).replace('。', `。${marker(18)}`)],
    ['books/线性代数拾遗/appendix/index.md', (await read('books/线性代数拾遗/appendix/index.md')) + `\n${marker(19)}\n`],
  ];
  const started = performance.now();
  const answers = await Promise.all(concurrent.map(([path, text]) => preview(path, text)));
  const elapsed = performance.now() - started;
  for (const [i, answer] of answers.entries()) {
    assert.ok(answer.html.includes(marker(i)), `第 ${i + 1} 个请求缺少自己的内容`);
    for (let j = 0; j < concurrent.length; j++) if (j !== i) assert.ok(!answer.html.includes(marker(j)), `第 ${i + 1} 个请求混入了第 ${j + 1} 个的内容`);
  }
  assert.deepEqual(answers[18].missingLinks.map(link => link.target), ['别名丙'], '并发时稿件别名泄漏到其他预览');
  const independent = concurrent.slice(0, 16);
  const expectedMany = await fullBuild(new Map(independent), answers.slice(0, 16).map(answer => answer.url));
  for (let i = 0; i < 16; i++) assert.equal(comparable(answers[i].html), comparable(expectedMany[i]), `并发预览 ${independent[i][0]} 与完整构建不一致`);

  // Drafts never reach the generated directory: it is the site's, without the new page.
  execFileSync(process.execPath, ['--input-type=module', '-e', `const { prebuild } = await import(${JSON.stringify(join(root, 'scripts/prebuild/run.mjs'))}); await prebuild({ destination: ${JSON.stringify(join(root, 'committed'))}, frontMatterOnly: true });`], { cwd: root, stdio: 'pipe' });
  const tree = async directory => {
    const files = new Map();
    for (const entry of await readdir(directory, { recursive: true, withFileTypes: true })) {
      if (entry.isFile()) files.set(join(entry.parentPath, entry.name).slice(directory.length), await readFile(join(entry.parentPath, entry.name), 'utf8'));
    }
    return files;
  };
  assert.deepEqual(await tree(join(root, '.build/api/content')), await tree(join(root, 'committed')), '稿件写入了生成目录');

  // Errors carry the page's line; unpublished pages and duplicate names are reported.
  let answer = await request('preview', { path: 'content/wiki/甲/index.md', text: wiki('甲', '见 @eq:不存在。') });
  assert.equal(answer.status, 422);
  assert.equal(answer.json.errors[0].file, 'content/wiki/甲/index.md');
  assert.deepEqual([answer.json.errors[0].line, answer.json.errors[0].column], [6, 3], '错误带行号与列号');
  // A formula KaTeX cannot render: its line and KaTeX's message.
  answer = await request('preview', { path: 'wiki/甲/index.md', text: wiki('甲', '甲\n\n$\\begin{alignedat}{1}a&b&c&d\\end{alignedat}$') });
  assert.equal(answer.status, 422);
  assert.deepEqual([answer.json.errors[0].line, answer.json.errors[0].message], [8, '公式无法渲染：Too many math in a row: expected 1, but got 2'], 'KaTeX 的错误');
  // What the editor requires of the front matter, checked before anything else.
  answer = await request('preview', { path: 'wiki/甲/index.md', text: '甲的正文。\n' });
  assert.equal(answer.status, 422);
  assert.match(answer.json.errors[0].message, /^缺少导言区/);
  answer = await request('check', { path: 'wiki/甲/index.md', text: '---\ntitle: 甲\n\n正文\n' });
  assert.deepEqual([answer.status, answer.json.errors[0].message, answer.json.errors[0].line], [422, '导言区没有结束：front matter 之后应有单独一行的 ---', 1]);
  answer = await request('check', { path: 'wiki/甲/index.md', text: '---\ntitle: \n---\n\n正文\n' });
  assert.deepEqual([answer.status, answer.json.errors[0].message, answer.json.errors[0].line], [422, 'title 不能为空', 2]);
  // Keys Hugo would act on (markup, layout, url, cascade…) are not the editor's to set.
  answer = await request('check', { path: 'wiki/甲/index.md', text: '---\ntitle: 甲\nmarkup: html\n---\n\n正文\n' });
  assert.deepEqual([answer.status, answer.json.errors[0].line], [422, 3]);
  assert.match(answer.json.errors[0].message, /不能使用字段 “markup”/);
  answer = await request('preview', { path: 'wiki/甲/index.md', text: wiki('甲', '草稿', 'draft: true\n') });
  assert.equal(answer.status, 422);
  assert.match(answer.json.errors[0].message, /不能使用字段 “draft”/);
  answer = await request('check', { path: 'wiki/重名/index.md', text: wiki('甲', '重名') });
  assert.equal(answer.status, 422);
  assert.match(answer.json.errors[0].message, /甲/);
  answer = await request('check', { path: 'wiki/乙/index.md', text: await read('wiki/乙/index.md') });
  assert.deepEqual(answer.json, { ok: true, missingLinks: [{ line: 6, column: 12, target: '别名丙' }] });

  // At most 20 requests wait; the rest are refused at once. A preview without new TikZ diagrams runs without waiting
  // on anything, so requests wait only behind one that compiles a diagram (and counts among the 20).
  const diagram = `\`\`\`tikz\n\\begin{tikzpicture}\\node {${Date.now()}};\\end{tikzpicture}\n\`\`\``;
  const slow = request('preview', { path: many[0], text: wiki('压力', diagram) });
  await delay(100);
  const crowd = await Promise.all(Array.from({ length: 25 }, (_, i) => request('preview', { path: many[i % 16], text: wiki('压力', `第 ${i} 次`) })));
  assert.equal((await slow).status, 200);
  assert.deepEqual([crowd.filter(answer => answer.status === 200).length, crowd.filter(answer => answer.status === 503).length], [19, 6]);

  // Request limits.
  for (const [path, status] of [['../hugo.md', 400], ['content/navboxes/提示.md', 400], ['wiki/甲/index.html', 400], [3, 400], ['search/index.md', 400], ['wiki/甲.md', 400], ['wiki/甲/_index.md', 400], ['wiki/甲/子页/index.md', 400], [`wiki/${'甲/'.repeat(9)}index.md`, 400]]) {
    assert.equal((await request('preview', { path, text: '' })).status, status, String(path));
  }
  assert.equal((await request('preview', { path: 'wiki/甲/index.md', text: 'x'.repeat(1024 * 1024) })).status, 413);
  assert.equal((await request('preview', '{', { 'Content-Type': 'application/json' })).status, 400);
  assert.equal((await request('preview', '{}', { 'Content-Type': 'text/plain' })).status, 415);
  assert.equal((await request('nothing', {})).status, 404);
  assert.equal((await fetch(`${base}/api/preview`)).status, 405);
  assert.equal((await request('submit', { path: 'wiki/甲/index.md', text: '', original: null })).status, 503, '未配置 GitHub 时不能提交');
  assert.deepEqual(await (await fetch(`${base}/api/health`)).json(), { ok: true, waiting: 0 });
  // Still serving after the errors.
  assert.match((await preview('wiki/甲/index.md', wiki('甲', '恢复正常'))).html, /恢复正常/);

  const closed = once(child, 'close');
  child.kill('SIGTERM');
  await closed;
  console.log(`API：开发登录、会话与跨站拒绝、源文本；条目、别名、新页面与书册稿件（去掉行号标记后）与完整构建一致、行号标记，稿件之间互不影响，20 个并发预览按序正确（${Math.round(elapsed)} ms），启动预热、生成目录不受稿件影响、错误行号、未发布与重名、请求限制验证通过`);
} catch (error) {
  if (output) console.error(output);
  throw error;
} finally {
  if (child?.pid) {
    try { process.kill(process.platform === 'win32' ? child.pid : -child.pid, 'SIGTERM'); } catch (error) { if (error.code !== 'ESRCH') throw error; }
    if (child.exitCode === null && child.signalCode === null) await once(child, 'close');
  }
  await rm(root, { recursive: true, force: true });
}
