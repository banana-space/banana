import { createProject } from './helpers/project.mjs';
import assert from 'node:assert/strict';
import { mkdir, readFile, readdir, rename, rm, stat, writeFile } from 'node:fs/promises';
import { spawn, execFileSync } from 'node:child_process';
import { once } from 'node:events';
import { createServer } from 'node:net';
import { join } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';

const root = await createProject('serve', ['scripts', 'layouts', 'assets', 'static', 'i18n', 'data', 'content/notices', 'content/navboxes', 'hugo.toml']);
let child, output = '';
async function until(check, description) {
  const deadline = Date.now() + 15000;
  while (Date.now() < deadline) {
    if (child && (child.exitCode !== null || child.signalCode !== null)) throw new Error(`serve 提前退出：${output}`);
    try { if (await check()) return; } catch (error) {
      if (!['ENOENT', 'ECONNREFUSED'].includes(error.code) && !(error instanceof TypeError)) throw error;
    }
    await delay(75);
  }
  throw new Error(`${description} 超时：${output}`);
}
// Successful rebuilds; unchanged pages keep their HTML, including the preview revision.
/** Waits until serve has printed nothing for a second, so no rebuild is still running. */
async function settle() {
  for (let length = -1; length !== output.length;) { length = output.length; await delay(1000); }
}
const completed = () => (output.match(/full build done|updated \d+ page/g) ?? []).length;
const body = text => `---\ntitle: Live\ncategories: [测试]\nnotices: [缺少来源]\nnavboxes: [预览导航]\n---\n## 参考文献* {@sec:ref}\n\n${text}\n\n@sec:ref\n`;
try {
  const page = join(root, 'content/wiki/live/index.md');
  await mkdir(join(root, 'content/wiki/live'), { recursive: true });
  await writeFile(page, body('@missing'));
  await mkdir(join(root, 'content/wiki/other'), { recursive: true });
  await writeFile(join(root, 'content/wiki/other/index.md'), '---\ntitle: Other\n---\n[[Live]]\n');
  await writeFile(join(root, 'data/categories.yaml'), '测试: {}\n');
  const navbox = join(root, 'content/navboxes/预览导航.yaml');
  const navContent = title => `title: ${title}\ngroups:\n- title: 分组\n  items: ["[[Live]]"]\n`;
  await writeFile(navbox, navContent('导航初始'));
  // A collection whose second page refers to a section of the first.
  const chapter = join(root, 'content/books/讲义/甲/index.md');
  const chapterBody = text => `---\ntitle: 甲\n---\n${text}## 开头 {@sec:start}\n`;
  for (const name of ['甲', '乙']) await mkdir(join(root, 'content/books/讲义', name), { recursive: true });
  await writeFile(join(root, 'content/books/讲义/collection.yaml'), 'title: 讲义\ncontents:\n  - page: 甲\n  - page: 乙\n');
  await writeFile(chapter, chapterBody(''));
  await writeFile(join(root, 'content/books/讲义/乙/index.md'), '---\ntitle: 乙\n---\n见 @sec:start。\n');
  execFileSync('git', ['init'], { cwd: root, stdio: 'pipe' });
  const probe = createServer();
  await new Promise((resolve, reject) => { probe.once('error', reject); probe.listen(0, '127.0.0.1', resolve); });
  const port = probe.address().port;
  await new Promise(resolve => probe.close(resolve));
  const base = `http://127.0.0.1:${port}`;
  const html = async path => (await fetch(base + path, { signal: AbortSignal.timeout(2000) })).text();
  child = spawn(process.execPath, ['scripts/serve.mjs', '--port', String(port), '--cacheDir', join(root, 'cache')], {
    cwd: root, stdio: ['ignore', 'pipe', 'pipe'], detached: process.platform !== 'win32',
  });
  child.stdout.on('data', data => { output += data; });
  child.stderr.on('data', data => { output += data; });
  await until(() => output.includes('prebuild failed'), '首次语法错误提示');
  await writeFile(page, body('初始成功：如式(1.1)所示,成立.然后中文API。'));
  await until(async () => (await html('/wiki/live/')).includes('初始成功'), '修正后启动 Hugo');
  assert.ok(output.includes(`:${port}/`), 'Hugo 参数未透传');
  const initial = await html('/wiki/live/');
  assert.match(initial, /如式 \(1\.1\) 所示, 成立\. 然后中文 API．/);
  assert.doesNotMatch(initial, /(?:src|href)="[^"]*typography/);
  assert.equal((await fetch(base + '/js/typography.js')).status, 404);
  assert.equal((await fetch(base + '/js/typography-live.js')).status, 404);
  assert.match(await readFile(join(root, '.build/preview/wiki/live/index.html'), 'utf8'), /如式 \(1\.1\) 所示, 成立\. 然后中文 API．/);
  for (const kind of ['notices', 'navboxes']) await assert.rejects(stat(join(root, '.build/content', kind)), { code: 'ENOENT' });
  // The pages come first; the search index follows in the background and is served once written.
  await until(() => output.includes('search index updated'), '搜索索引');
  await until(async () => (await fetch(base + '/pagefind/pagefind.js')).status === 200, '提供搜索索引');
  assert.equal((await fetch(base + '/search-manifest.json')).status, 404, '搜索清单不应发布');
  assert.match(initial, /<h2 id="参考文献"><a class="heading-link"[^>]*>§<\/a>参考文献<\/h2>/);
  assert.doesNotMatch(initial, /class="section-number"/);
  const cssPath = initial.match(/href="([^"]+\/css\/[^" ]+\.css)"/)?.[1] ?? initial.match(/href="(\/css\/[^" ]+\.css)"/)[1];
  assert.match(await html(cssPath), /sourceMappingURL/);
  const configFile = join(root, 'hugo.toml');
  const originalConfig = await readFile(configFile, 'utf8');
  const replacementConfig = join(root, 'config.tmp');
  await writeFile(replacementConfig, originalConfig.replace("title = '香蕉空间'", "title = '预览站点一'"));
  await rename(replacementConfig, configFile);
  await until(async () => (await html('/wiki/live/')).includes('预览站点一'), '配置替换保存');
  await writeFile(configFile, originalConfig.replace("title = '香蕉空间'", "title = '预览站点二'"));
  await until(async () => (await html('/wiki/live/')).includes('预览站点二'), '替换后的配置继续监听');
  await writeFile(configFile, originalConfig);
  await until(async () => (await html('/wiki/live/')).includes('香蕉空间'), '恢复站点配置');
  // The prebuild runs in the resident preview service, which restarts after script changes.
  for (const entry of ['prebuild/run', 'postbuild']) {
    const script = join(root, `scripts/${entry}.mjs`);
    const old = await readFile(script, 'utf8');
    // Unchanged pages keep their revision; wait for the rebuild to finish instead.
    const finished = completed();
    await writeFile(script, old + `\nconsole.log('${entry} entry refreshed');\n`);
    await until(() => output.includes(`${entry} entry refreshed`) && completed() > finished, `${entry} 入口修改刷新`);
  }
  const generated = join(root, '.build/content/wiki/live/index.md');
  const contentDirectory = await stat(join(root, '.build/content'));
  const originalTime = (await stat(generated)).mtimeMs;
  const builds = (output.match(/prebuild: \d+ pages|updated \d+ page/g) ?? []).length;
  const events = await fetch(base + '/__banana_events');
  const reader = events.body.getReader();
  const firstEvent = new TextDecoder().decode((await reader.read()).value);
  assert.match(firstEvent, /event: build\ndata: \d+/);
  await writeFile(page, body('初始成功：如式(1.1)所示,成立.然后中文API。'));
  await until(() => (output.match(/prebuild: \d+ pages|updated \d+ page/g) ?? []).length > builds, '内容相同的保存');
  assert.equal((await stat(generated)).mtimeMs, originalTime, '未变化的文件被重写');
  const nextEvent = await Promise.race([reader.read(), delay(5000).then(() => { throw new Error('完成 postbuild 后未通知刷新'); })]);
  assert.notEqual(new TextDecoder().decode(nextEvent.value), firstEvent);
  await reader.cancel();

  // Neither rendering failures nor postbuild failures may expose partial HTML.
  const goodPreview = await html('/wiki/live/');
  const template = join(root, 'layouts/partials/page.html');
  const originalTemplate = await readFile(template, 'utf8');
  await writeFile(template, '{{ if');
  await until(() => output.includes('hugo failed'), '模板错误提示');
  assert.equal(await html('/wiki/live/'), goodPreview, '模板错误破坏了成功预览');
  const beforeTemplate = completed();
  await writeFile(template, originalTemplate);
  await until(() => completed() > beforeTemplate, '模板恢复后重新构建');
  assert.equal(await html('/wiki/live/'), goodPreview, '内容未变的页面不应刷新');
  const postbuild = join(root, 'scripts/postbuild/typography-html.mjs');
  const originalPostbuild = await readFile(postbuild, 'utf8');
  const beforePostbuildError = await html('/wiki/live/');
  await writeFile(postbuild, originalPostbuild + '\nsyntax error\n');
  await until(() => output.includes('postbuild failed'), '后处理错误提示');
  assert.equal(await html('/wiki/live/'), beforePostbuildError, '后处理错误暴露了未排版的页面');
  const beforeRestore = completed();
  await writeFile(postbuild, originalPostbuild);
  await until(() => completed() > beforeRestore, '后处理恢复后重新构建');

  for (let i = 0; i < 12; i++) await writeFile(page, body(`连续保存 ${i}`));
  await until(async () => (await html('/wiki/live/')).includes('连续保存 11'), '连续保存自动刷新');
  const successful = await readFile(generated, 'utf8');
  await writeFile(page, body('@missing'));
  await until(() => (output.match(/prebuild failed|page update failed/g) ?? []).length >= 2, '后续语法错误提示');
  assert.equal(await readFile(generated, 'utf8'), successful, '语法错误破坏了成功副本');
  assert.ok((await html('/wiki/live/')).includes('连续保存 11'));
  assert.equal((await stat(join(root, '.build/content'))).ino, contentDirectory.ino, '监听目录被替换');
  assert.ok(!(await readdir(join(root, '.build'))).some(name => name.startsWith('prebuild-')), '临时目录未清理');
  await writeFile(page, body('错误后恢复'));
  await until(async () => (await html('/wiki/live/')).includes('错误后恢复'), '错误后自动恢复');

  // A body-only edit renders just that page, and only its open tabs reload.
  const subscribe = async path => {
    const stream = (await fetch(`${base}/__banana_events?path=${encodeURIComponent(path)}`)).body.getReader();
    return async () => {
      const { value } = await Promise.race([stream.read(), delay(10000).then(() => { throw new Error(`${path} 未收到构建通知`); })]);
      return new TextDecoder().decode(value).match(/data: (\d+)\n\n$/)[1];
    };
  };
  const liveEvent = await subscribe('/wiki/live/'), otherEvent = await subscribe('/wiki/other/');
  const [liveBefore, otherBefore] = [await liveEvent(), await otherEvent()];
  const revisionOf = async path => (await html(path)).match(/data-preview-revision="(\d+)"/)[1];
  assert.equal(await revisionOf('/wiki/live/'), liveBefore);
  assert.equal(await revisionOf('/wiki/other/'), otherBefore);
  const fullBuilds = (output.match(/^prebuild: \d+ pages/gm) ?? []).length;
  await writeFile(page, body('单页更新'));
  await until(async () => (await html('/wiki/live/')).includes('单页更新'), '单页更新');
  assert.match(output, /body-only change, updating just: content\/wiki\/live\/index\.md/);
  assert.equal((output.match(/^prebuild: \d+ pages/gm) ?? []).length, fullBuilds, '正文修改触发了完整构建');
  assert.notEqual(await liveEvent(), liveBefore);
  assert.equal(await otherEvent(), otherBefore, '其他页面不应刷新');
  assert.equal(await revisionOf('/wiki/other/'), otherBefore);
  assert.match(await readFile(join(root, '.build/preview/wiki/live/index.html'), 'utf8'), /单页更新/);
  const fastHTML = (await html('/wiki/live/')).replace(/ data-preview-revision="\d+"/, '');
  // Front matter is visible to other pages: the page is rendered again with those that depend on it (a link
  // to it, its category, lists), without a full build. The end of the test compares with a full build.
  const updates = () => (output.match(/updated \d+ page\(s\) \(\d+ ms;/g) ?? []).length;
  let partial = updates();
  await writeFile(page, body('单页更新').replace('title: Live', 'title: Live 改名'));
  await until(() => updates() > partial, '修改 front matter 部分更新');
  assert.match(output, /front matter changed, updating these pages and those that depend on them: content\/wiki\/live\/index\.md/);
  assert.match(await html('/wiki/other/'), /class="wiki-link wiki-link-missing"/, '链接到改名页面的页面未更新');
  assert.match(await html('/categories/测试/'), /Live 改名/, '分类页未更新');
  partial = updates();
  await writeFile(page, body('单页更新'));
  await until(() => updates() > partial, '恢复 front matter');
  assert.doesNotMatch(await html('/wiki/other/'), /wiki-link-missing/, '恢复后链接未更新');
  assert.equal((output.match(/^prebuild: \d+ pages/gm) ?? []).length, fullBuilds, '修改 front matter 触发了完整构建');
  assert.equal((await html('/wiki/live/')).replace(/ data-preview-revision="\d+"/, ''), fastHTML, '恢复 front matter 后页面不同');
  // A collection page's body renders the whole collection: other pages' numbers and references follow.
  const sibling = async () => (await html('/books/讲义/乙/')).replace(/ data-preview-revision="\d+"/, '');
  const referenceBefore = await sibling();
  const collectionBuilds = (output.match(/^prebuild: \d+ pages/gm) ?? []).length;
  await writeFile(chapter, chapterBody('## 新节\n\n'));
  await until(async () => (await sibling()) !== referenceBefore, '书册正文修改更新同组页面');
  assert.match(output, /body-only change, updating just: content\/books\/讲义\/甲\/index\.md/);
  assert.equal((output.match(/^prebuild: \d+ pages/gm) ?? []).length, collectionBuilds, '书册正文修改触发了完整构建');
  const fastSibling = await sibling(), fastRoot = (await html('/books/讲义/')).replace(/ data-preview-revision="\d+"/, '');
  // A collection page's title shows on the others (contents, previous and next).
  partial = updates();
  await writeFile(chapter, chapterBody('## 新节\n\n').replace('title: 甲', 'title: 甲改'));
  await until(() => updates() > partial, '书册 front matter 部分更新');
  assert.match(await sibling(), /甲改/, '同组页面未更新标题');
  partial = updates();
  await writeFile(chapter, chapterBody('## 新节\n\n'));
  await until(() => updates() > partial, '恢复书册 front matter');
  assert.equal((output.match(/^prebuild: \d+ pages/gm) ?? []).length, collectionBuilds, '书册 front matter 触发了完整构建');
  assert.equal(await sibling(), fastSibling, '书册单页结果与完整构建不一致');
  assert.equal((await html('/books/讲义/')).replace(/ data-preview-revision="\d+"/, ''), fastRoot, '书册目录页与完整构建不一致');
  // Editors' temporary files that come and go cause no rebuild.
  const quiet = output.length;
  await writeFile(join(root, 'content/wiki/live/.index.md.tmp'), 'x');
  await rm(join(root, 'content/wiki/live/.index.md.tmp'));
  await delay(1000);
  assert.doesNotMatch(output.slice(quiet), /^prebuild: \d+ pages|body-only change/m);

  const nested = join(root, 'content/wiki/added/deep');
  await mkdir(nested, { recursive: true });
  await writeFile(join(root, 'content/wiki/added/index.md'), '---\ntitle: Added\n---\n新增页面\n');
  await writeFile(join(nested, 'asset.txt'), '附件一');
  await until(async () => (await html('/wiki/added/')).includes('新增页面'), '新增嵌套目录');
  await until(async () => (await html('/wiki/added/deep/asset.txt')) === '附件一', '新增附件');
  await writeFile(join(nested, 'asset.txt'), '附件二');
  await until(async () => (await html('/wiki/added/deep/asset.txt')) === '附件二', '附件更新');
  await rename(join(root, 'content/wiki/added'), join(root, 'content/wiki/renamed'));
  await until(async () => (await html('/wiki/renamed/')).includes('新增页面'), '目录重命名');
  await until(async () => !(await html('/wiki/')).includes('href="/wiki/added/"'), '列表移除旧地址');
  await until(() => stat(join(root, '.build/content/wiki/added')).then(() => false, error => error.code === 'ENOENT'), '生成目录删除 added');
  await rm(join(root, 'content/wiki/renamed'), { recursive: true });
  await until(async () => !(await html('/wiki/')).includes('href="/wiki/renamed/"'), '删除页面后刷新列表');
  await until(() => stat(join(root, '.build/content/wiki/renamed')).then(() => false, error => error.code === 'ENOENT'), '生成目录删除 renamed');

  const categoryTemp = join(root, 'data/categories.tmp');
  await writeFile(categoryTemp, '测试: {parent: 总类}\n总类: {}\n');
  await rename(categoryTemp, join(root, 'data/categories.yaml'));
  await until(async () => (await readFile(generated, 'utf8')).includes('总类'), '分类树原子保存');
  await until(async () => (await html('/categories/总类/')).includes('>测试</a>'), '分类页刷新');
  await until(async () => (await html('/categories/测试/')).includes('>总类</a>'), '分类导航刷新');
  const navTemp = join(root, 'content/navboxes/预览导航.tmp');
  await writeFile(navTemp, navContent('导航更新'));
  await rename(navTemp, navbox);
  await until(async () => (await html('/wiki/live/')).includes('导航更新'), '导航框原子保存刷新');
  const notice = join(root, 'content/notices/缺少来源.md');
  await writeFile(notice, (await readFile(notice, 'utf8')) + '\n提示更新\n');
  await until(async () => (await html('/wiki/live/')).includes('提示更新'), '提示内容更新刷新');
  const beforeDelete = (output.match(/prebuild failed/g) ?? []).length;
  await rm(navbox);
  await until(() => (output.match(/prebuild failed/g) ?? []).length > beforeDelete, '删除被使用的导航框时报错');
  assert.ok((await html('/wiki/live/')).includes('导航更新'), '组件错误应保留上次成功的内容');
  await writeFile(navbox, navContent('导航恢复'));
  await until(async () => (await html('/wiki/live/')).includes('导航恢复'), '重新创建导航框后恢复');
  execFileSync('git', ['add', 'content/wiki/live/index.md'], { cwd: root, stdio: 'pipe' });
  execFileSync('git', ['-c', 'user.name=Test', '-c', 'user.email=test@example.invalid', '-c', 'core.hooksPath=/dev/null', 'commit', '-m', 'Preview commit'], {
    cwd: root, stdio: 'pipe', env: { ...process.env, GIT_AUTHOR_DATE: '2000-01-01T00:00:00Z', GIT_COMMITTER_DATE: '2025-07-10T13:00:00Z' },
  });
  await until(async () => (await html('/wiki/live/')).includes('2025 年 7 月 10 日'), 'Git 提交后修改日期刷新');
  // After all these partial updates, the preview is what a full build makes of the same sources. Not compared:
  // the search index, the sitemap and the pages' histories (left to full builds) and earlier versions of fingerprinted files.
  const previewFiles = async () => {
    const result = new Map(), directory = join(root, '.build/preview');
    for (const entry of await readdir(directory, { recursive: true, withFileTypes: true })) {
      const path = join(entry.parentPath, entry.name).slice(directory.length);
      if (entry.isFile() && !/^\/(?:pagefind\/|search-manifest\.json$|sitemap\.xml$|history\/data\/|js\/editor-names\.)/.test(path)) result.set(path, await readFile(join(directory, path), 'utf8'));
    }
    return result;
  };
  await settle();
  const partialPreview = await previewFiles(), fullBefore = completed();
  const fullCount = () => (output.match(/full build done/g) ?? []).length, fullsBefore = fullCount();
  await writeFile(configFile, originalConfig);
  await until(() => fullCount() > fullsBefore && completed() > fullBefore, '完整构建');
  await settle();
  const fullPreview = await previewFiles();
  assert.deepEqual([...partialPreview.keys()].sort(), [...fullPreview.keys()].sort(), '部分更新与完整构建的文件不同');
  for (const [path, content] of fullPreview) assert.equal(partialPreview.get(path), content, `部分更新与完整构建不同：${path}`);
  // Hugo is warmed up once per preview service, after the service's first full build.
  assert.match(output, /\[preview\] warm-up done \(\d+ ms\)/);
  const closed = once(child, 'close');
  child.kill('SIGINT');
  const [code] = await Promise.race([closed, delay(5000, undefined, { ref: false }).then(() => { throw new Error('Ctrl+C 未停止预览'); })]);
  assert.equal(code, 0);
  await assert.rejects(fetch(base + '/wiki/live/', { signal: AbortSignal.timeout(1000) }), 'Hugo 子进程未停止');
  console.log('serve 的自动预处理、后台写入的搜索索引、front matter 与其他内容修改的部分更新（与完整构建一致）、正文修改单页更新与按页刷新、书册正文修改整组更新、连续保存、错误恢复、嵌套目录与附件增删改名、分类树、提示与导航组件刷新和恢复、参数透传、Hugo 预热及 Ctrl+C 验证通过');
} finally {
  if (child?.pid) {
    try { process.kill(process.platform === 'win32' ? child.pid : -child.pid, 'SIGTERM'); } catch (error) { if (error.code !== 'ESRCH') throw error; }
    if (child.exitCode === null && child.signalCode === null) await once(child, 'close');
  }
  await rm(root, { recursive: true, force: true });
}
