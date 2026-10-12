import { createProject, buildProject } from './helpers/project.mjs';
import assert from 'node:assert/strict';
import { copyFile, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { JSDOM, VirtualConsole } from 'jsdom';

// The editor page as built (production: minified and fingerprinted), driven in jsdom against a stand-in /api/.
const root = await createProject('editor-page');
try {
  buildProject(root);
  const html = await readFile(join(root, 'public/edit/index.html'), 'utf8');
  const config = JSON.parse(html.match(/<script type="?application\/json"? id="?editor-config"?>(.*?)<\/script>/s)[1]);
  assert.equal(config.api, '/api/');
  assert.equal(config.strings.missing_link, '条目 “{name}” 不存在');
  const script = html.match(/<script type="?module"? src="?(\/js\/editor\.[0-9a-f]+\.js)"?/)[1];
  // The bundle is an ES module without imports; as a function body it runs in jsdom, which has no modules.
  // Its one dynamic import, of the instant checks, goes to Node instead, which runs the same bundle.
  const code = await readFile(join(root, 'public', script), 'utf8');
  assert.equal(code.split('import(').length, 2, '编辑器只有一处动态导入');
  const bundle = `(() => { "use strict";\n${code.replace('import(', 'window.importCheck(')}\n})()`;
  const checkModule = join(root, 'editor-check.mjs');
  await copyFile(join(root, 'public', config.check), checkModule);
  assert.match(await readFile(join(root, 'public/wiki/example/index.html'), 'utf8'), /<a href="?\/edit\/\?path=wiki%2fexample%2findex\.md"? rel="?nofollow"?>编辑本页<\/a>/i);
  // The missing-entry page links to the editor for that entry.
  // With a formula, the link's target as written (source=) becomes the title.
  for (const [query, title] of [['?title=新的条目', '新的条目'], [`?title=${encodeURIComponent('怪 ℝ^4')}&source=${encodeURIComponent(String.raw`怪 $\mathbb{R}^4$`)}`, String.raw`怪 $\mathbb{R}^4$`]]) {
    const missing = new JSDOM(await readFile(join(root, 'public/missing/index.html'), 'utf8'), { url: `http://site.test/missing/${query}`, runScripts: 'outside-only' });
    missing.window.eval(await readFile(join(root, 'static/js/missing.js'), 'utf8'));
    const creates = [...missing.window.document.querySelectorAll('.missing-create')];
    assert.deepEqual(creates.map(link => [link.textContent, link.getAttribute('href')]), Array(2).fill(['创建条目', `/edit/?title=${encodeURIComponent(title)}`]), '缺失条目页的创建链接');
    assert.equal(missing.window.document.querySelector('[data-related="found"]').textContent, '浏览下方的相关页面，或创建条目．');
    missing.window.close();
  }

  const source = '---\ntitle: 甲\ncategories: []\n---\n\n正文。\n';
  const original = 'a'.repeat(40);
  const until = async (check, description) => {
    for (let i = 0; i < 200; i++) { if (check()) return; await delay(50); }
    throw new Error(`${description} 超时`);
  };
  /** Opens /edit/ for a path (or a query: ?title=…); routes answer requests by path ("preview", "source", …) with [status, json, headers]. */
  // Errors the page logs (CodeMirror reports exceptions in its listeners this way) fail the test at the end.
  const consoleErrors = [];
  function open(path, routes, { storage = {}, checkFailures = 0 } = {}) {
    const virtualConsole = new VirtualConsole();
    virtualConsole.on('error', (...args) => consoleErrors.push(args.map(String).join(' ')));
    virtualConsole.on('jsdomError', error => { if (!/Not implemented/.test(error.message)) consoleErrors.push(error.message); });
    const dom = new JSDOM(html, { url: `http://site.test/edit/${path.startsWith('?') ? path : path ? `?path=${encodeURIComponent(path)}` : ''}`, runScripts: 'outside-only', pretendToBeVisual: true, virtualConsole });
    const { window } = dom;
    for (const [key, value] of Object.entries(storage)) window.localStorage.setItem(key, JSON.stringify(value));
    // jsdom has no layout; CodeMirror measures text ranges.
    window.Range.prototype.getClientRects = () => [];
    window.Range.prototype.getBoundingClientRect = () => ({ left: 0, right: 0, top: 0, bottom: 0, width: 0, height: 0 });
    if (!window.HTMLDialogElement?.prototype.showModal) {
      Object.assign(window.HTMLElement.prototype, { showModal() { this.open = true; }, close() { this.open = false; } });
    }
    const requests = [];
    window.fetch = async (url, options = {}) => {
      const route = url.replace(/^\/api\//, '').replace(/\?.*$/, '');
      const body = options.body ? JSON.parse(options.body) : undefined;
      requests.push({ method: options.method ?? 'GET', route, url, body });
      const [status, json, headers = {}] = await routes[route](body, url);
      return { status, headers: { get: name => headers[name] ?? null }, json: async () => json };
    };
    let failures = checkFailures;
    window.importCheck = () => failures-- > 0 ? Promise.reject(new Error('not deployed yet')) : import(checkModule);
    window.eval(bundle);
    const document = window.document;
    return {
      window, document, requests,
      $: selector => document.querySelector(selector),
      view: () => document.getElementById('editor').editorView,
      type(text) { const view = this.view(); view.dispatch({ changes: { from: view.state.doc.length, insert: text } }); },
      text() { return this.view().state.doc.toString(); },
    };
  }
  const me = user => () => [200, { ok: true, user }];
  const tester = { login: 'tester', name: '测试者', avatar: 'https://avatars.example/tester.png', url: 'https://github.example/tester', pulls: 'https://github.example/owner/site/pulls?q=mentions' };
  const page = (extra = {}) => () => [200, { ok: true, path: 'content/wiki/甲/index.md', exists: true, text: source, original, pull: null, file: null, url: '/wiki/甲/', ...extra }];
  const rendered = body => `<!DOCTYPE html><html><head></head><body><p>${body.text.length}</p></body></html>`;

  // Logged out: an invitation to log in, which returns here, instead of an editor.
  let editor = open('wiki/甲/index.md', { me: me(null), source: page() });
  await until(() => !editor.$('.editor-login').hidden, '登录提示');
  assert.ok(editor.$('.editor-workspace').hidden && editor.$('.editor-loading').hidden);
  assert.equal(editor.$('.editor-login h2').textContent, '请登录 GitHub 以继续');
  assert.equal(editor.$('.editor-login a').getAttribute('href'), `/api/auth/login?return=${encodeURIComponent('/edit/?path=wiki%2F%E7%94%B2%2Findex.md')}`);
  await delay(300);
  assert.deepEqual(editor.requests.map(request => request.route), ['me']);
  editor.window.close();
  editor = open('wiki/甲/index.md', { me: () => [502, { ok: false, errors: [{ message: 'down' }] }] });
  await until(() => !editor.$('.editor-unavailable').hidden, '服务不可用');
  assert.equal(editor.$('.editor-unavailable').textContent, '暂时无法连接编辑服务，请稍后再试。');
  assert.ok(editor.$('.editor-login').hidden && editor.$('.editor-workspace').hidden);
  editor.window.close();

  // Logged in. The account links to GitHub. The first preview comes at once; a later edit is previewed after a
  // pause, never sooner than 3 s after the last request, while the status pulses. A refusal (429) is retried
  // quietly, a failed request offers a retry, and errors in the draft appear over the preview, not in the status.
  // Ctrl+S previews at once, but only a changed text. The first load of the instant checks fails, the next works.
  const behaviour = ['ok', '429', 'network', 'ok', '422', 'ok'], times = [];
  editor = open('wiki/甲/index.md', {
    me: me(tester), source: page({ file: 'https://github.example/blob/main/content/wiki/甲/index.md' }),
    preview: body => {
      times.push(Date.now());
      const kind = behaviour[times.length - 1] ?? 'ok';
      if (kind === 'network') throw new TypeError('Failed to fetch');
      if (kind === '429') return [429, { ok: false, errors: [{ message: 'too many' }] }, { 'Retry-After': '1' }];
      // An error only Hugo finds (the browser checks the rest itself).
      if (kind === '422') return [422, { ok: false, errors: [{ file: 'content/wiki/甲/index.md', line: 6, message: 'KaTeX 无法解析公式' }] }];
      return [200, { ok: true, url: '/wiki/甲/', html: rendered(body), missingLinks: [{ line: 6, column: 1, target: '乙' }], timings: {} }];
    },
  }, { checkFailures: 1 });
  const status = () => editor.$('.editor-status');
  const pressSave = () => editor.view().contentDOM.dispatchEvent(new editor.window.KeyboardEvent('keydown', { key: 's', ctrlKey: true, bubbles: true, cancelable: true }));
  await until(() => editor.$('.editor-frame').getAttribute('srcdoc'), '首次预览');
  assert.deepEqual(editor.requests.at(-1).body, { path: 'wiki/甲/index.md', text: source });
  assert.match(editor.$('.editor-frame').getAttribute('srcdoc'), /<style>\.navigation, \.toc-shell, \.article-footer, \.site-footer, \.collection-pagination \{ display: none !important; \}.*<\/style><\/head>/, '预览隐藏导航栏、目录与页脚');
  await until(() => status().textContent === '', '预览完成后状态消失');
  // The account: avatar and login open a menu (also on hover, in CSS): my pull requests, GitHub page, log out.
  const account = editor.$('.editor-user'), accountButton = account.querySelector('.editor-account-button');
  assert.deepEqual([accountButton.querySelector('strong').textContent, accountButton.querySelector('img').getAttribute('src')], ['tester', tester.avatar]);
  assert.deepEqual([...account.querySelectorAll('.editor-account-item')].map(item => [item.textContent, item.getAttribute('href')]),
    [['我的 PR', tester.pulls], ['GitHub 主页', tester.url], ['退出登录', null]], '账号菜单');
  accountButton.click();
  assert.ok(account.classList.contains('is-open') && accountButton.getAttribute('aria-expanded') === 'true', '点击打开菜单');
  editor.document.body.click();
  assert.ok(!account.classList.contains('is-open'), '点击别处关闭菜单');
  assert.deepEqual([editor.$('.editor-path').getAttribute('href'), editor.$('.editor-path-name').textContent], ['https://github.example/blob/main/content/wiki/甲/index.md', 'content/wiki/甲/index.md'], '文件名链接到 GitHub');
  assert.ok(editor.$('.editor-path svg.ui-icon') && editor.$('.editor-view svg.ui-icon'), '文件与页面的图标');
  assert.deepEqual([editor.$('.editor-view').hidden, editor.$('.editor-view').textContent.trim()], [false, '原页面']);
  // The toolbar's submit button is always there; the dialog's waits for a successful preview.
  const confirmButton = () => editor.$('.editor-submit-dialog button[value="submit"]');
  const waitNote = () => editor.$('.editor-submit-wait');
  assert.ok(!confirmButton().disabled && waitNote().hidden, '预览成功后可以提交');
  assert.equal(editor.$('.editor-submit-button').textContent, '提交');
  // Problems are marked in the source only (there is no list): the missing entry, at its line and column.
  const marks = severity => [...editor.document.querySelectorAll(`.cm-lintRange-${severity}`)].map(mark => mark.textContent);
  await until(() => marks('warning').length, '缺失条目的标记');
  assert.deepEqual(marks('warning'), ['正文'], '只标出该处');
  assert.equal(editor.document.querySelector('.editor-problems'), null, '没有问题列表');
  // The server's marks follow the edits made since: a new line above leaves the mark on its word.
  const blank = editor.view().state.doc.line(5).from;
  editor.view().dispatch({ changes: { from: blank, insert: '\n' } });
  await delay(500);
  assert.deepEqual(marks('warning'), ['正文'], '插入新行后标记仍在原处');
  editor.view().dispatch({ changes: { from: blank, to: blank + 1 } });
  await delay(500);
  assert.deepEqual(marks('warning'), ['正文'], '删去新行后标记仍在原处');
  // Editing inside a marked word drops its mark at once (it may no longer hold); typing next to it does not.
  const word = editor.text().indexOf('正文');
  editor.view().dispatch({ changes: { from: word, insert: '甲' } });
  await delay(50);
  assert.deepEqual(marks('warning'), ['正文'], '在标记之前输入不影响标记');
  editor.view().dispatch({ changes: { from: word, to: word + 1 } });
  editor.view().dispatch({ changes: { from: word + 1, insert: '乙' } });
  await delay(50);
  assert.deepEqual(marks('warning'), [], '修改标记内的文字后标记消失');
  editor.view().dispatch({ changes: { from: word + 1, to: word + 2 } });
  await delay(400);
  assert.deepEqual(marks('warning'), [], '服务器的标记要等下一次预览');
  pressSave();
  await delay(400);
  assert.equal(times.length, 1, '内容未变时 Ctrl+S 不预览');
  editor.type('新增。\n');
  assert.ok(!editor.$('.editor-submit-button').disabled, '工具栏的提交按钮总可以点');
  assert.deepEqual([confirmButton().disabled, waitNote().textContent], [true, '预览成功后才能提交。'], '修改后需要重新预览才能提交');
  const saved = JSON.parse(editor.window.localStorage.getItem('banana-editor:wiki/甲/index.md'));
  assert.deepEqual([saved.text, saved.original], [`${source}新增。\n`, original], '修改保存在本机');
  // Typing does not preview; the button and Ctrl+S do (its key in the button's hover text).
  await delay(2000);
  assert.equal(times.length, 1, '输入不触发预览');
  const previewButton = editor.$('.editor-preview-button');
  assert.deepEqual([previewButton.textContent, previewButton.title], ['预览', '预览（Ctrl+S）']);
  assert.equal(editor.$('.editor-preview-empty').textContent, '点击 “预览” 或按 Ctrl+S 查看修改后的页面。');
  previewButton.click();
  // A spinner on the button while the preview is on its way, nothing in the status.
  const spinner = () => !editor.$('.editor-spinner').hidden;
  assert.ok(spinner() && previewButton.getAttribute('aria-busy') === 'true', '预览按钮左边显示等待');
  assert.equal(status().textContent, '');
  await until(() => times.length === 2, '点击预览');
  await delay(300);
  assert.ok(spinner(), '被限流时仍显示等待');
  await until(() => times.length === 3, '限流后自动重试');
  await until(() => status().querySelector('button'), '失败后可重试');
  assert.equal(status().textContent, '预览失败，点击此处重试');
  status().querySelector('button').click();
  await until(() => times.length === 4, '点击重试');
  await until(() => status().textContent === '' && !spinner(), '重试成功');
  assert.equal(editor.requests.at(-1).body.text, `${source}新增。\n`);
  // Errors the browser finds: marked on their line while typing, and over the preview when previewing,
  // without asking the server.
  const requestsBefore = editor.requests.length;
  editor.type('见 @eq:不存在。\n');
  await until(() => marks('error').length, '浏览器内检查');
  assert.equal(editor.document.querySelector('.cm-lintRange-error').textContent, '@eq:不存在', '只标出出错的部分');
  assert.ok(editor.$('.editor-preview-error').hidden, '输入时不显示在预览上');
  pressSave();
  await until(() => !editor.$('.editor-preview-error').hidden, '浏览器发现的错误显示在预览上');
  assert.equal(editor.$('.editor-preview-error h2').textContent, '预览错误');
  assert.equal(editor.$('.editor-preview-error pre').textContent, '第 8 行：引用标签不存在：eq:不存在\n');
  await delay(3500);
  assert.equal(editor.requests.length, requestsBefore, '浏览器发现错误时不请求服务器预览');
  assert.equal(status().textContent, '', '错误不显示在状态中');
  assert.deepEqual([confirmButton().disabled, waitNote().textContent], [true, '预览有错误，修正后才能提交。'], '有错误时不能提交');
  editor.$('.editor-submit-button').click();
  await delay(100);
  assert.ok(!editor.$('.editor-submit-dialog').open && editor.$('.editor-spinner').hidden, '有错误时不打开提交对话框');
  const view = editor.view();
  view.dispatch({ changes: { from: view.state.doc.line(8).from, to: view.state.doc.line(8).to, insert: '修正。' } });
  await until(() => !marks('error').length, '修正后消失');
  // The front matter the editor requires: removing it, or emptying the title, is an error at once.
  const body = editor.text();
  view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: body.replace(/^---[\s\S]*?---\n/, '') } });
  const overlayText = () => editor.$('.editor-preview-error').hidden ? '' : editor.$('.editor-preview-error pre').textContent;
  pressSave();
  await until(() => overlayText().startsWith('第 1 行：缺少导言区'), '删去导言区');
  view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: body.replace('title: 甲', 'title: ') } });
  pressSave();
  await until(() => overlayText() === '第 2 行：title 不能为空\n', 'title 为空');
  view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: body } });
  pressSave();
  await until(() => !/导言区|title/.test(overlayText()), '恢复导言区');
  // An error only the server finds: over the preview, its line number leading to the line.
  await until(() => times.length === 5, '修正后预览');
  await until(() => editor.$('.editor-preview-error pre').textContent.includes('KaTeX'), '服务器的错误显示在预览上');
  assert.equal(editor.$('.editor-preview-error pre').textContent, '第 6 行：KaTeX 无法解析公式\n');
  editor.$('.editor-preview-error button').click();
  assert.equal(view.state.selection.main.head, view.state.doc.line(6).from, '点击行号跳到该行');
  pressSave();
  await delay(400);
  assert.equal(times.length, 5, '有错误的同一文本不再预览');
  editor.type('再改。\n');
  pressSave();
  await until(() => editor.$('.editor-preview-error').hidden, '成功预览后错误消失');
  assert.ok(!confirmButton().disabled && waitNote().hidden, '成功预览后可以提交');
  for (let i = 1; i < times.length; i++) assert.ok(times[i] - times[i - 1] >= 2990, `第 ${i + 1} 次预览距上一次不足 3 秒`);
  editor.window.close();

  // A draft from an earlier visit is restored; the notice can be closed (keeping the draft), and the draft discarded.
  const draft = `${source}草稿。\n`;
  editor = open('wiki/甲/index.md', { me: me(tester), source: page(), preview: body => [200, { ok: true, url: '/wiki/甲/', html: rendered(body), missingLinks: [], timings: {} }] },
    { storage: { 'banana-editor:wiki/甲/index.md': { text: draft, original } } });
  await until(() => editor.view(), '载入草稿');
  assert.ok(!editor.$('.editor-view').hidden, '恢复草稿时仍显示页面链接');
  editor.$('.editor-banner-close').click();
  assert.ok(editor.$('.editor-banner').hidden, '关闭提示');
  assert.equal(editor.text(), draft, '关闭提示不放弃草稿');
  editor.window.close();
  editor = open('wiki/甲/index.md', { me: me(tester), source: page(), preview: body => [200, { ok: true, url: '/wiki/甲/', html: rendered(body), missingLinks: [], timings: {} }] },
    { storage: { 'banana-editor:wiki/甲/index.md': { text: draft, original } } });
  await until(() => editor.view(), '载入草稿');
  assert.equal(editor.text(), draft);
  assert.equal(editor.$('.editor-banner').textContent, '已恢复保存的草稿。 放弃草稿');
  editor.$('.editor-banner button').click();
  assert.equal(editor.text(), source);
  assert.equal(editor.window.localStorage.getItem('banana-editor:wiki/甲/index.md'), null);
  editor.window.close();

  // A draft made on an older version is not loaded by itself: it can be loaded, then compared with the
  // current version, or discarded.
  editor = open('wiki/甲/index.md', { me: me(tester), source: page(), preview: body => [200, { ok: true, url: '/wiki/甲/', html: rendered(body), missingLinks: [], timings: {} }] },
    { storage: { 'banana-editor:wiki/甲/index.md': { text: draft, original: 'f'.repeat(40) } } });
  await until(() => editor.view(), '载入旧草稿');
  assert.equal(editor.text(), source);
  assert.equal(editor.$('.editor-banner').textContent, '有未保存的草稿，但页面在此之后已被修改。 加载草稿 放弃草稿');
  editor.$('.editor-banner button').click();
  assert.equal(editor.text(), draft);
  assert.match(editor.$('.editor-banner').textContent, /^已加载草稿，下面标出了与当前版本的差异。/);
  await until(() => editor.document.querySelector('.cm-changedLine, .cm-insertedLine'), '比较视图');
  assert.equal(editor.$('.editor-banner button').textContent, '完成比较');
  editor.$('.editor-banner button').click();
  await until(() => !editor.document.querySelector('.cm-changedLine, .cm-insertedLine'), '退出比较');
  editor.window.close();

  editor = open('wiki/甲/index.md', { me: me(tester), source: page(), preview: body => [200, { ok: true, url: '/wiki/甲/', html: rendered(body), missingLinks: [], timings: {} }] },
    { storage: { 'banana-editor:wiki/甲/index.md': { text: draft, original: 'f'.repeat(40) } } });
  await until(() => editor.view(), '载入旧草稿');
  editor.document.querySelectorAll('.editor-banner button')[1].click();
  assert.deepEqual([editor.text(), editor.$('.editor-banner').hidden, editor.window.localStorage.getItem('banana-editor:wiki/甲/index.md')], [source, true, null], '放弃旧草稿');
  editor.window.close();

  // Submitting: unchanged text is not sent; a pull request is opened; a conflict shows the newer version
  // to compare with, and the next submission starts from it.
  let submissions = 0;
  editor = open('wiki/甲/index.md', {
    me: me(tester), source: page(),
    preview: body => [200, { ok: true, url: '/wiki/甲/', html: rendered(body), missingLinks: [], timings: {} }],
    // The first submission comes back formatted (as the API commits it).
    submit: () => ++submissions === 1 ? [200, { ok: true, number: 7, url: 'https://github.example/pull/7', updated: false, original: 'b'.repeat(40), text: `${source}修改一（已排版）。\n` }]
      : submissions === 2 ? [409, { ok: false, errors: [{ message: 'changed' }], current: { text: `${source}别人的修改。\n`, original: 'c'.repeat(40) } }]
      : [200, { ok: true, number: 7, url: 'https://github.example/pull/7', updated: true, original: 'd'.repeat(40) }],
  });
  await until(() => editor.view(), '载入提交页面');
  const dialog = editor.$('.editor-submit-dialog');
  const confirm = dialog.querySelector('button[value="submit"]');
  await until(() => editor.$('.editor-preview-empty').hidden, '首次预览');
  editor.$('.editor-submit-button').click();
  assert.equal(editor.$('.editor-status').textContent, '尚未编辑。');
  assert.ok(!dialog.open);
  // Not yet previewed: the button waits (a spinner) for the preview, and opens the dialog once it succeeds.
  editor.type('修改一。\n');
  const submitButton = editor.$('.editor-submit-button');
  submitButton.click();
  assert.ok(!dialog.open && !editor.$('.editor-spinner').hidden && submitButton.getAttribute('aria-busy') === 'true', '预览完成之前不打开对话框，显示等待');
  assert.equal(editor.document.querySelectorAll('.editor-actions .editor-spinner:not([hidden])').length, 1, '只有一个等待图标');
  await until(() => dialog.open, '预览成功后打开对话框');
  assert.ok(editor.$('.editor-spinner').hidden && !submitButton.hasAttribute('aria-busy') && !confirm.disabled, '对话框打开时可以提交');
  assert.ok(!editor.requests.some(request => request.route === 'submit'), '打开对话框不提交');
  dialog.querySelector('input').value = '修正';
  confirm.click();
  const confirmation = dialog.querySelector('.editor-submit-done');
  await until(() => !confirmation.hidden, '提交成功');
  assert.deepEqual(editor.requests.at(-1).body, { path: 'wiki/甲/index.md', text: `${source}修改一。\n`, original, message: '修正' });
  assert.ok(dialog.querySelector('.editor-submit-form').hidden, '对话框变为提交成功');
  assert.equal(confirmation.querySelector('h2').textContent, '提交成功');
  assert.ok(confirmation.querySelector('svg.editor-done-icon'));
  assert.match(confirmation.querySelector('.editor-submit-done-text').textContent, /^已创建 PR #7，/);
  assert.equal(confirmation.querySelector('.editor-submit-done-link').getAttribute('href'), 'https://github.example/pull/7');
  assert.equal(dialog.querySelector('input').value, '', '清空修改说明');
  assert.equal(editor.$('.editor-pull').textContent, 'PR #7');
  assert.ok(editor.$('.editor-pull svg.ui-icon'), '编辑图标');
  assert.equal(editor.$('.editor-pull').nextElementSibling, editor.$('.editor-view'), 'PR 在原页面之前');
  assert.ok(!editor.$('.editor-pull').hidden);
  const pullLink = link => [link.textContent, link.getAttribute('href')];
  assert.deepEqual(pullLink(editor.$('.editor-pull')), ['PR #7', 'https://github.example/pull/7'], '图标与 PR #7 一起是链接');
  assert.deepEqual(pullLink(confirmation.querySelector('.editor-submit-done-text a')), ['PR #7', 'https://github.example/pull/7'], '成功提示中的 PR 链接');
  assert.equal(editor.window.localStorage.getItem('banana-editor:wiki/甲/index.md'), null, '提交后清除草稿');
  assert.equal(editor.text(), `${source}修改一（已排版）。\n`, '编辑器显示提交（排版）后的文本');
  assert.equal(editor.window.localStorage.getItem('banana-editor:wiki/甲/index.md'), null, '排版后的文本不是草稿');
  confirmation.querySelector('.editor-submit-done-close').click();
  assert.ok(!dialog.open);
  editor.type('修改二。\n');
  editor.$('.editor-submit-button').click();
  await until(() => dialog.open && !confirm.disabled, '再次预览成功');
  assert.ok(!dialog.querySelector('.editor-submit-form').hidden && confirmation.hidden, '再次打开时是提交表单');
  assert.equal(dialog.querySelector('.editor-submit-update').textContent, '编辑将添加到 PR #7。');
  assert.deepEqual(pullLink(dialog.querySelector('.editor-submit-update a')), ['PR #7', 'https://github.example/pull/7'], '追加提示中的 PR 链接');
  dialog.querySelector('button[value="submit"]').click();
  await until(() => !dialog.open, '冲突后关闭对话框');
  assert.equal(editor.requests.at(-1).body.original, 'b'.repeat(40));
  assert.match(editor.$('.editor-banner').textContent, /^这个页面在你编辑期间被修改了。/);
  await until(() => editor.document.querySelector('.cm-changedLine, .cm-insertedLine, .cm-deletedChunk'), '冲突比较视图');
  editor.$('.editor-submit-button').click();
  dialog.querySelector('button[value="submit"]').click();
  await until(() => !confirmation.hidden, '再次提交');
  assert.equal(editor.requests.at(-1).body.original, 'c'.repeat(40), '以最新版本为基础提交');
  assert.equal(confirmation.querySelector('.editor-submit-done-text').textContent, '已将编辑添加到 PR #7。');
  editor.window.close();

  // A new page starts from a title; without a path, the page asks for one.
  editor = open('wiki/新条目', { me: me(tester), source: () => [200, { ok: true, path: 'content/wiki/新条目/index.md', exists: false, text: '', original: null, pull: null }], preview: body => [200, { ok: true, url: '/wiki/新条目/', html: rendered(body), missingLinks: [], timings: {} }] });
  await until(() => editor.view(), '新页面');
  assert.equal(editor.text(), '---\ntitle: 新条目\ncategories: []\nnavboxes: []\n---\n\n', '新条目带上空的分类与导航');
  assert.equal(editor.$('.editor-path').textContent.trim(), 'content/wiki/新条目/index.md新页面');
  assert.equal(editor.$('.editor-new-page').textContent, '新页面');
  assert.ok(!editor.$('.editor-path').hasAttribute('href'), '新页面没有 GitHub 地址');
  assert.equal(editor.requests[1].url, `/api/source?path=${encodeURIComponent('wiki/新条目/index.md')}`);
  editor.window.close();
  // An entry by its title: the directory named as the migration did, the title kept with its TeX.
  editor = open(`?title=${encodeURIComponent(String.raw`怪 $\mathbb{R}^4$`)}`, { me: me(tester), source: () => [200, { ok: true, path: 'content/wiki/怪 R^4/index.md', exists: false, text: '', original: null, pull: null }], preview: body => [200, { ok: true, url: '/wiki/怪_R^4/', html: rendered(body), missingLinks: [], timings: {} }] });
  await until(() => editor.view(), '按标题新建');
  assert.equal(editor.requests[1].url, `/api/source?path=${encodeURIComponent('wiki/怪 R^4/index.md')}`);
  assert.equal(editor.text(), '---\ntitle: 怪 $\\mathbb{R}^4$\ncategories: []\nnavboxes: []\n---\n\n');
  editor.window.close();
  editor = open(`?title=${encodeURIComponent('P/NP: 问题')}`, { me: me(tester), source: () => [200, { ok: true, path: 'content/wiki/P／NP： 问题/index.md', exists: false, text: '', original: null, pull: null }], preview: body => [200, { ok: true, url: '/wiki/x/', html: rendered(body), missingLinks: [], timings: {} }] });
  await until(() => editor.view(), '标题中的特殊字符');
  assert.equal(editor.requests[1].url, `/api/source?path=${encodeURIComponent('wiki/P／NP： 问题/index.md')}`);
  assert.match(editor.text(), /^---\ntitle: 'P\/NP: 问题'\n/);
  editor.window.close();
  // In the one-pane layout the preview tab previews too, its spinner inside, and shows once the preview is done.
  editor = open('wiki/甲/index.md', { me: me(tester), source: () => [200, { ok: true, path: 'content/wiki/甲/index.md', exists: true, text: '---\ntitle: 甲\n---\n\n正文\n', original: 'x', pull: null }], preview: body => [200, { ok: true, url: '/wiki/x/', html: rendered(body), missingLinks: [], timings: {} }] });
  await until(() => editor.view() && editor.requests.some(request => request.url === '/api/preview'), '标签页');
  const [sourceTab, previewTab] = editor.document.querySelectorAll('.editor-tab'), pane = () => editor.$('.editor-panes').dataset.pane;
  editor.type('标签页');
  previewTab.click();
  assert.ok(pane() === 'source' && !previewTab.querySelector('.editor-spinner').hidden, '预览完成前留在代码页，标签中显示等待');
  await until(() => pane() === 'preview', '预览完成后切换到预览页');
  assert.ok(previewTab.querySelector('.editor-spinner').hidden && previewTab.getAttribute('aria-selected') === 'true');
  assert.equal(editor.requests.at(-1).body.text, '---\ntitle: 甲\n---\n\n正文\n标签页');
  sourceTab.click();
  assert.deepEqual([pane(), sourceTab.getAttribute('aria-selected')], ['source', 'true']);
  editor.window.close();
  // A book page is checked in the browser too, its references to the book's other pages against their labels:
  // a formula left open across a blank line is marked, and the mark goes once the line is written.
  const bookSource = '---\ntitle: 一\n---\n\n见 @thm:other。\n';
  let bookPreviews = 0;
  editor = open('books/甲/一.md', {
    me: me(tester),
    source: () => [200, { ok: true, path: 'content/books/甲/一.md', exists: true, text: bookSource, original, pull: null, file: null, url: '/books/甲/一/', labels: [{ name: 'thm:other', detail: '定理 1', page: '二' }] }],
    preview: body => { bookPreviews++; return [200, { ok: true, url: '/books/甲/一/', html: rendered(body), missingLinks: [], timings: {} }]; },
  });
  await until(() => editor.$('.editor-frame').getAttribute('srcdoc'), '书册页面首次预览');
  editor.type('\\[\n\n\\]\n');
  await until(() => marks('error').length, '书册页面的浏览器内检查');
  assert.deepEqual(marks('error'), ['\\['], '未结束的公式');
  const formulaLine = editor.view().state.doc.lines - 2;
  editor.view().dispatch({ changes: { from: editor.view().state.doc.line(formulaLine).from, insert: 'x' } });
  await until(() => !marks('error').length, '在空行中输入后标记消失');
  editor.type('见 @thm:none。\n');
  await until(() => marks('error').length, '书中不存在的标签');
  assert.deepEqual(marks('error'), ['@thm:none']);
  assert.equal(bookPreviews, 1, '浏览器内检查不请求服务器');
  editor.window.close();
  // Only entries are created: a new page elsewhere is refused.
  editor = open('books/新讲义/index.md', { me: me(tester), source: () => [200, { ok: true, path: 'content/books/新讲义/index.md', exists: false, text: '', original: null, pull: null }] });
  await until(() => editor.$('.editor-status').textContent, '新的非条目页面');
  assert.equal(editor.$('.editor-status').textContent, '在线编辑只能新建百科条目。');
  assert.ok(!editor.view(), '不应打开编辑器');
  editor.window.close();
  // The start page takes an entry's name, not a path.
  editor = open('', { me: me(tester) });
  await until(() => !editor.$('.editor-open').hidden, '选择页面');
  assert.ok(editor.$('.editor-workspace').hidden);
  const input = editor.$('.editor-open input');
  input.value = 'books/新讲义';
  editor.$('.editor-open').dispatchEvent(new editor.window.Event('submit', { cancelable: true }));
  assert.equal(input.validationMessage, '条目名中不能含有 “/”。');
  assert.equal(editor.window.location.search, '');
  editor.window.close();

  assert.deepEqual(consoleErrors, [], '页面不应记录错误');
  console.log('编辑器页面：未登录时的登录提示、服务不可用、账号菜单、文件与页面及 PR 的图标、文件链接、首次预览、输入不预览、预览按钮与 Ctrl+S、提交时等待预览成功再打开对话框、提交后显示排版后的文本、按钮的等待图标、预览标签页等预览完成再切换、修改标记内文字时标记消失、前端 3 秒间隔、限流与网络失败后重试、Ctrl+S 只预览修改、浏览器发现错误时不请求服务器、错误遮罩与行号跳转、工具栏提交按钮总可点而对话框等待预览、提示的关闭按钮、旧版本草稿的加载与放弃、缺失条目页的创建链接（公式标题）、按标题新建条目与目录名、只能新建条目、导言区的必要项目、只标出出错部分、服务器标记随编辑移动、预览隐藏页脚、预览中隐藏导航与目录、问题跳转、浏览器内检查与加载失败后重试、本机草稿的恢复与比较、提交与成功提示、PR 编号链接、更新已有 PR、冲突后比较并以新版本为基础、书册页面的浏览器内检查（书中其他页面的标签）、新页面与打开页面验证通过');
} finally {
  await rm(root, { recursive: true, force: true });
}
