import { createProject, buildProject, projectRoot } from './helpers/project.mjs';
import assert from 'node:assert/strict';
import { mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { runInNewContext } from 'node:vm';
import { parse, stringify } from 'yaml';
import { directoryName, pageName } from '../scripts/prebuild/names.mjs';

// Titles and aliases are typeset as Markdown text is, outside formulas; the key, and so every link, is unchanged.
{
  const typeset = pageName("$f'$ 与 l'Hôpital--法则", 'x', 'title', { typeset: true });
  assert.equal(typeset.name, 'f′ 与 l’Hôpital–法则');
  assert.deepEqual(typeset.parts.map(part => part.tex ?? part.text), ["f'", ' 与 l’Hôpital–法则']);
  assert.equal(typeset.key, pageName("$f'$ 与 l'Hôpital--法则", 'x').key);
  assert.equal(typeset.key, pageName('$f\'$ 与 l’Hôpital–法则', 'x').key);
  assert.equal(pageName("ア'イ", 'x', 'title', { lang: 'ja', typeset: true }).name, "ア'イ");
  assert.equal(directoryName("l'Hôpital 法则"), "l'Hôpital 法则");
}

// Directories of new entries, as the migration named them.
for (const [title, directory] of [[String.raw`怪 $\mathbb{R}^4$`, '怪 R^4'], [String.raw`$\mathbb{A}_\infty$-代数`, 'A_∞-代数'], [String.raw`$(\infty, 1)$-意象`, '(∞,1)-意象'],
  ['$L^p$ 空间', 'L^p 空间'], ['P/NP 问题', 'P／NP 问题'], ['a:b?<c>|"d"*', 'a：b？＜c＞｜＂d＂＊'], ['名称.', '名称']]) assert.equal(directoryName(title), directory, title);
assert.equal(pageName(String.raw`$\infty$-范畴`, 'example.md').name, '∞-范畴');
assert.equal(pageName(String.raw`\(p\) 进几何`, 'example.md').name, 'p 进几何');
for (const title of ['$p', '$$p$$', String.raw`\[p\]`, String.raw`p\)`, String.raw`$\unknown$`]) {
  assert.throws(() => pageName(title, 'example.md'), /example.md: title/);
}
const project = projectRoot;
const root = await createProject('names');
try {
  await rm(join(root, 'content/wiki'), { recursive: true, force: true });
  await mkdir(join(root, 'content/wiki'), { recursive: true });
  await rm(join(root, 'content/navboxes'), { recursive: true, force: true });
  await mkdir(join(root, 'content/navboxes'), { recursive: true });
  await writeFile(join(root, 'content/wiki/_index.md'), '---\ntitle: 全部条目\n---\n');
  const categoryName = '$p$ 进几何', childName = String.raw`$\mathcal{C}$ 空间`;
  const tree = { 数学: {}, [categoryName]: { parent: '数学' }, [childName]: { parent: categoryName } };
  await writeFile(join(root, 'data/categories.yaml'), stringify(tree));
  await writeFile(join(root, 'content/navboxes/别名.yaml'), stringify({
    title: '别名导航', groups: [{ title: '分类', items: ['[[无穷范畴|当前条目]]', '[页内章节](/custom-infinity/#chapter)'] }],
  }));
  async function article(name, metadata, body = '') {
    const path = join(root, 'content/wiki', name);
    await mkdir(path, { recursive: true });
    await writeFile(join(path, 'index.md'), `---\n${stringify(metadata)}---\n${body}\n`);
  }
  const metadata = {
    title: String.raw`$\infty$-范畴`,
    aliases: ['无穷范畴', String.raw`$\infty$范畴`, '无穷范畴', '∞-范畴'],
    url: '/custom-infinity/',
    categories: [childName], navboxes: ['别名'],
  };
  await article('infinity', metadata, String.raw`[[无穷范畴]] [[$\infty$范畴|别名 $p$]] [[$\infty$-范畴]] [[草稿别名]] [[未来别名]]`);
  await article('draft', { title: '草稿', aliases: ['草稿别名'], draft: true });
  await article('future', { title: '未来', aliases: ['未来别名'], date: '2999-01-01' });
  await article('case', { title: '$p$ 条目', categories: ['$q$ 空间', 'p 进几何'] });
  // L^p and L_p are different names; equivalent spellings of a formula link to the same article.
  await article('lp-upper', { title: '$L^p$ 空间' });
  await article('lp-lower', { title: '$L_p$ 空间' }, String.raw`[[$L^{p}$ 空间]] [[$L_p$  空间|下标]] [[$H^1(X;\mathbb Z)$ 的计算]]`);
  const source = await readFile(join(root, 'content/wiki/infinity/index.md'), 'utf8');
  const prebuild = () => execFileSync(process.execPath, ['scripts/prebuild.mjs'], { cwd: root, stdio: 'pipe' });
  const build = (extra = []) => {
    buildProject(root, extra);
  };
  const html = path => readFile(join(root, 'public', path, 'index.html'), 'utf8');
  build();
  const generated = parse((await readFile(join(root, '.build/content/wiki/infinity/index.md'), 'utf8')).split('---\n')[1]);
  assert.equal(generated.title, '∞-范畴');
  assert.deepEqual(generated.wikiAliases, ['无穷范畴', '∞ 范畴']);
  assert.equal(generated.aliases, undefined);
  assert.equal(generated.urlAliases, undefined);
  assert.deepEqual(generated.categories, ['C 空间', 'p 进几何', '数学']);
  const articleHTML = await html('custom-infinity');
  assert.match(articleHTML, /<title>\s*∞-范畴 - 香蕉空间/);
  assert.match(articleHTML, /property="og:title" content="∞-范畴"/);
  const summary = articleHTML.match(/property="og:description" content="([^"]*)"/)[1];
  assert.doesNotMatch(summary, /\\infty|ppp/);
  assert.equal((summary.match(/∞/g) ?? []).length, 1);
  assert.match(articleHTML, /<h1 class="title" id="page-title">[\s\S]*data-tex="\\infty" data-display="false">[\s\S]*?<\/span>-范畴/);
  assert.match(articleHTML, /href="\/custom-infinity\/\?from=%E6%97%A0%E7%A9%B7%E8%8C%83%E7%95%B4"/);
  assert.match(articleHTML, /href="\/custom-infinity\/\?from=%E2%88%9E(?:\+|&#43;)%E8%8C%83%E7%95%B4"[^>]*>别名 <span class="math-rendered" data-tex="p"/);
  assert.match(articleHTML, /href="\/custom-infinity\/" class="wiki-link"><span class="math-rendered"/);
  assert.match(articleHTML, /条目尚未创建：草稿别名/);
  assert.match(articleHTML, /条目尚未创建：未来别名/);
  assert.match(articleHTML, /<strong class="navbox-current" aria-current="page">当前条目<\/strong>/);
  assert.match(articleHTML, /<a href="\/custom-infinity\/#chapter">页内章节<\/a>/);
  assert.match(articleHTML, /<link rel="canonical" href="https:\/\/example.org\/custom-infinity\/">/);
  const listing = await html('wiki');
  assert.match(listing, /<span class="title"><span class="math-rendered" data-tex="p" data-display="false">[\s\S]*?<\/span> 条目<\/span>/);
  const pCategory = await html('categories/p-进几何');
  assert.match(pCategory, /<title>分类: p 进几何 - 香蕉空间<\/title>/);
  assert.match(pCategory, /data-tex="p" data-display="false">[\s\S]*?<\/span> 进几何/);
  assert.doesNotMatch(pCategory, /data-tex="P"|\$p\$|\$P\$/);
  assert.match(pCategory, /href="\/categories\/c-%E7%A9%BA%E9%97%B4\/"/);
  assert.match(pCategory, /<h2>条目<\/h2>/);
  assert.doesNotMatch(pCategory, /href="\/custom-infinity\/"/); // Only direct members are listed.
  const child = await html('categories/c-空间');
  const breadcrumb = child.match(/<nav aria-label="祖先分类"[\s\S]*?<\/nav>/)[0];
  assert.match(breadcrumb, /href="\/categories\/p-%E8%BF%9B%E5%87%A0%E4%BD%95\/"[^>]*><span class="math-rendered" data-tex="p"/);
  assert.match(breadcrumb, /data-tex="\\mathcal\{C\}"/);
  assert.match(await html('categories/q-空间'), /data-tex="q"/); // Undeclared categories also render formulas.
  const overview = await html('categories');
  assert.match(overview, /data-tex="p"/);
  assert.match(overview, />数学<\/a><sup>2<\/sup>/);
  const footer = articleHTML.match(/<footer class="article-footer">[\s\S]*?<\/footer>/)[0];
  assert.match(footer, /data-tex="\\mathcal\{C\}"/);
  assert.doesNotMatch(footer, /data-tex="p"/);
  const lower = await html('wiki/lp-lower');
  assert.match(lower, /<title>\s*L_p 空间 - 香蕉空间/);
  assert.match(lower, /href="\/wiki\/lp-upper\/" class="wiki-link"/);
  assert.match(lower, /href="\/wiki\/lp-lower\/" class="wiki-link">下标/);
  // A missing article is shown by its display text, not its lookup key.
  // The missing page also gets the target as written, the title should someone create the article.
  assert.match(lower, /href="\/missing\/\?title=H%5E1%28X%3B&#43;%E2%84%A4%29&#43;%E7%9A%84%E8%AE%A1%E7%AE%97&amp;source=%24H%5E1%28X%3B%5Cmathbb&#43;Z%29%24&#43;%E7%9A%84%E8%AE%A1%E7%AE%97"/);
  assert.match(lower, /title="条目尚未创建：H\^1\(X; ℤ\) 的计算"/);
  assert.match(await html('wiki/lp-upper'), /<title>\s*L\^p 空间 - 香蕉空间/);
  build(['--baseURL', 'https://example.org/docs/', '--buildDrafts', '--buildFuture']);
  const subpath = await html('custom-infinity');
  assert.match(subpath, /href="\/docs\/custom-infinity\/\?from=/);
  assert.doesNotMatch(subpath, /条目尚未创建：草稿别名|条目尚未创建：未来别名/);
  assert.match(subpath, /navbox-current/);
  assert.match(subpath, /src="\/docs\/js\/redirect-source.js"/);
  const cssPath = subpath.match(/href="\/docs\/(css\/site[^" ]+\.css)"/)[1];
  // KaTeX is self-hosted: its stylesheet sits beside the fonts its relative URLs name.
  const katexPath = subpath.match(/href="\/docs\/(katex\/katex[^" ]+\.css)"/)[1];
  const katexFonts = [...(await readFile(join(root, 'public', katexPath), 'utf8')).matchAll(/url\((fonts\/KaTeX_[\w-]+\.woff2)\)/g)].map(match => match[1]);
  assert.ok(katexFonts.length >= 20);
  for (const font of new Set(katexFonts)) await readFile(join(root, 'public/katex', font));
  assert.doesNotMatch(subpath, /cdn\.jsdelivr\.net/);
  const css = await readFile(join(root, 'public', cssPath), 'utf8');
  const fontURLs = [...css.matchAll(/url\(["']?([^\s)'"\n]+)["']?\)/g)].map(match => match[1]);
  // Commit Mono, Banana Math, Banana Punctuation (3), Inter (6) and the JetBrains Mono Cyrillic subsets (4).
  assert.equal(fontURLs.length, 15);
  assert.ok(fontURLs.every(url => url.startsWith('/docs/fonts/')));
  for (const url of fontURLs) await readFile(join(root, 'public', url.slice('/docs/'.length)));
  assert.doesNotMatch(css, /sourceMappingURL/);
  const homepage = await html('');
  assert.match(homepage, /href="\/docs\/wiki\/">全部条目/);
  assert.match(homepage, /href="\/docs\/categories\/">分类/);
  assert.equal(await readFile(join(root, 'content/wiki/infinity/index.md'), 'utf8'), source);

  // Conflicts are checked before publishing a new content snapshot.
  const snapshot = await readFile(join(root, '.build/content/wiki/infinity/index.md'), 'utf8');
  for (const entry of [{ title: '无穷范畴' }, { title: '其他', aliases: ['∞-范畴'] }, { title: '其他', aliases: ['无穷范畴'] }]) {
    await article('conflict', entry);
    assert.throws(prebuild, /条目名称重复/);
    assert.equal(await readFile(join(root, '.build/content/wiki/infinity/index.md'), 'utf8'), snapshot);
  }
  await rm(join(root, 'content/wiki/conflict'), { recursive: true });
  await article('infinity', { ...metadata, aliases: '无穷范畴' });
  assert.throws(prebuild, /aliases 必须是名称列表/);
  await article('infinity', { ...metadata, title: '$p' });
  assert.throws(prebuild, /infinity\/index.md: title 公式分隔符/);
  // A front matter without its closing --- would make the whole file the body.
  await writeFile(join(root, 'content/wiki/infinity/index.md'), `---\n${stringify(metadata)}\n正文。\n`);
  assert.throws(prebuild, /infinity\/index.md:1: 导言区没有结束/);
  // No shortcodes in a page, anywhere (Hugo runs them in code blocks too, and in strings it renders, such as
  // the front matter's): authors write tags, which the preprocessing turns into shortcodes.
  await article('infinity', metadata, '正文\n\n{{< _theorem-start >}}');
  assert.throws(prebuild, /infinity\/index.md:\d+: 页面中不能写 Hugo 短代码（\{\{< _theorem-start/);
  for (const body of ['```\n{{< youtube x >}}\n```', '`{{</* see */>}}`', '{{% see %}}', '<!-- {{< param x >}} -->']) {
    await article('infinity', metadata, body);
    assert.throws(prebuild, /页面中不能写 Hugo 短代码/, body);
  }
  // Nor in the front matter, also when YAML's escapes spell it.
  await article('infinity', { ...metadata, notices: [{ name: '{{< youtube x >}}' }] });
  assert.throws(prebuild, /infinity\/index.md:\d+: 页面中不能写 Hugo 短代码/);
  await writeFile(join(root, 'content/wiki/infinity/index.md'), `---\ntitle: "∞-范畴\\x7B\\x7B< youtube x >}}"\n---\n\n正文\n`);
  assert.throws(prebuild, /infinity\/index.md:1: 页面中不能写 Hugo 短代码（\{\{< youtube/);
  await article('infinity', metadata, '`\\{\\{<` 与 <see>[[无穷范畴]]</see>');
  prebuild();
  // A page's own address stays within the site.
  for (const url of ['/../../x/', '/a"b/', 'x/', '//evil.example/']) {
    await article('infinity', { ...metadata, url });
    assert.throws(prebuild, /url 必须是站内的地址/, url);
  }
  await article('infinity', { ...metadata, slug: '../x' });
  assert.throws(prebuild, /slug 必须是站内的地址/);
  await article('infinity', metadata);
  await writeFile(join(root, 'data/categories.yaml'), stringify({ [categoryName]: {}, 'p 进几何': {} }));
  assert.throws(prebuild, /分类名称重复：p 进几何/);
  await writeFile(join(root, 'data/categories.yaml'), stringify({ '$p': {} }));
  assert.throws(prebuild, /data\/categories.yaml: 分类名称 公式分隔符/);
} finally { await rm(root, { recursive: true, force: true }); }

const script = await readFile(join(project, 'static/js/redirect-source.js'), 'utf8');
for (const source of ['无穷范畴', '<script>', '未声明的来源', '', null]) {
  const caption = { textContent: '' }, notice = {
    dataset: { aliases: JSON.stringify(['无穷范畴', '<script>']) }, hidden: true,
    querySelector: () => caption,
  };
  runInNewContext(script, {
    document: { getElementById: () => notice }, URLSearchParams,
    window: { location: { search: source === null ? '' : `?from=${encodeURIComponent(source)}` } },
  });
  assert.equal(notice.hidden, !['无穷范畴', '<script>'].includes(source));
  assert.equal(caption.textContent, ['无穷范畴', '<script>'].includes(source) ? source : '');
}
console.log('公式标题与分类、纯文本名称、名称别名、来源提示、冲突校验、草稿与子路径验证通过');
