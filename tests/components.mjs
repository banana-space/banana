import { createProject, buildProject } from './helpers/project.mjs';
import assert from 'node:assert/strict';
import { mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { parseNavbox } from '../scripts/prebuild/components.mjs';
import { parse, serialize } from 'parse5';
import { typesetTree } from 'bananamark/typography';
import { typography } from '../scripts/shared/typography.mjs';
import { inspectDocument } from 'bananamark/internal/nodes.mjs';

const normalizeHTML = html => serialize(typesetTree(parse(html), { lang: 'zh-cn', typography }));

const fail = (message, offset) => { throw new Error(`${offset ?? 0}: ${message}`); };
const grouped = `title: [[代数拓扑]]
groups:
  - title: 同调论
    subgroups:
      - title: 同调
        items:
          - [[奇异同调]]
          - [[逗号,名称|显示文字]]
      - title: 上同调
        items: ['[[奇异上同调]]', '$H^n$']
  - title: 同伦论
    items:
      - [[基本群]]
`;
const navbox = parseNavbox(grouped, fail);
assert.equal(navbox.rows[0].cells[0].rowspan, 2);
assert.equal(navbox.rows[1].cells.length, 1);
assert.equal(navbox.rows[2].cells[0].colspan, 2);
assert.equal(inspectDocument(navbox.rows[0].items[1]), '[显示文字](⟦wiki target="逗号, 名称" name="逗号, 名称" source="逗号,名称"⟧)');
assert.equal(inspectDocument(navbox.rows[1].items[1]), '⟦math tex="H^n"⟧');
assert.throws(() => parseNavbox(grouped.replace('items: [', 'extra: ['), fail), /未知字段/);
assert.throws(() => parseNavbox('title: X\ngroups: []', fail), /非空列表/);
assert.throws(() => parseNavbox('title: X\ngroups:\n- title: Y\n  items: [[not-a-link], [also-not-a-link]]', fail), /非空文字/);
assert.throws(() => parseNavbox('title: X\ngroups:\n- title: Y\n  items: [X]\n  subgroups: []', fail), /只能填写/);

const root = await createProject('components');
try {
  await writeFile(join(root, 'content/navboxes/代数拓扑.yaml'), grouped);
  const page = join(root, 'content/wiki/components-example/index.md');
  const original = await readFile(page, 'utf8');
  await writeFile(page, original
    .replace('## 人名标注', '```terms\n前置术语: {en: early term}\n```\n\n## 人名标注')
    .replace('  de: Gruppe :f', '  de: Gruppe :f\n环:\n  de: Ring :m\n  en: ring') + '\n```terms\n多译名:\n  en: [first, second]\n  ja: {text: 位相, reading: [い, そう]}\n  fr: {text: "<script>literal</script>", gender: f}\n```\n\n数据块之后的正文。\n');
  // Old generated definitions must be removed on the next successful prebuild.
  await mkdir(join(root, '.build/content/navboxes'), { recursive: true });
  await writeFile(join(root, '.build/content/navboxes/leaked.md'), 'This must not become a page.');
  const build = () => buildProject(root);
  build();
  await assert.rejects(stat(join(root, '.build/content/navboxes')), { code: 'ENOENT' });
  await assert.rejects(stat(join(root, 'public/navboxes/leaked/index.html')), { code: 'ENOENT' });
  const html = await readFile(join(root, 'public/wiki/components-example/index.html'), 'utf8');
  assert.match(html, /rowspan="2"/);
  assert.match(html, /colspan="2"/);
  assert.match(html, /<ruby>位<rp> \(<\/rp><rt>い<\/rt>/);
  assert.match(html, /<ruby>相<rp> \(<\/rp><rt>そう<\/rt>/);
  assert.match(html, /<ruby>埋<rp> \(<\/rp><rt>う<\/rt><rp>\) <\/rp><\/ruby>め<ruby>込<rp> \(<\/rp><rt>こ<\/rt><rp>\) <\/rp><\/ruby>み/);
  assert.match(html, /<ruby>位相<rp> \(<\/rp><rt>いそう<\/rt>/);
  assert.match(html, /groupe(?:&nbsp;|\u00a0)<span class="term-gender" title="阳性">\(m\)/);
  assert.match(html, /Gruppe(?:&nbsp;|\u00a0)<span class="term-gender" title="阴性">\(f\)/);
  assert.match(html, /first、second/);
  assert.equal((html.match(/class="notice-icon"/g) ?? []).length, 3);
  assert.match(html, /aria-label="提示"[\s\S]*日语译名的假名/);
  assert.match(html, /aria-label="问题">[\s\S]*?<p>本条目存在以下问题：<\/p>\s*<ul>\s*<li>这是一条演示问题提示/);
  // The notices are the page's text: a reference names the section by its number.
  assert.match(html, /<li><a href="#[^"]+">第 1 节<\/a>缺少来源．<\/li>/);
  // Neither in the description nor in the search document.
  assert.match(html, /<meta property="og:description" content="这个页面演示顶部提示/);
  const terms = html.match(/<section class="terms"[\s\S]*?<\/section>/)[0];
  assert.equal((html.match(/class="terms"/g) ?? []).length, 1);
  assert.doesNotMatch(terms, /<table|<tr|<td|terms-scroll/);
  // Separators are drawn by CSS; the fixture also contains gender and Japanese readings.
  const ring = terms.match(/<p class="term-entry"><strong class="term-title">环<\/strong>[\s\S]*?<\/p>/)[0];
  assert.match(ring, /<span class="term-separator" data-typography="boundary" aria-hidden="true"><\/span><span class="term-language" data-typography="boundary">德语<\/span> <span lang="de">Ring/);
  const formattedTerms = normalizeHTML(html).match(/<section class="terms"[\s\S]*?<\/section>/)[0];
  assert.match(formattedTerms, /<\/span><span class="term-separator"[^>]*><\/span><span class="term-language" data-typography="boundary">/);
  assert.doesNotMatch(formattedTerms, /<\/span>\s+<span class="term-separator"|term-separator"[^>]*><\/span>\s+<span class="term-language"/);
  assert.match(ring, /<span class="term-language" data-typography="boundary">英语<\/span> <span lang="en">ring<\/span>/);
  assert.deepEqual([...terms.matchAll(/class="term-title">([^<]+)/g)].map(match => match[1]), ['前置术语', '群', '环', '拓扑空间', '嵌入', '拓扑', '多译名']);
  assert.match(html, /&lt;script&gt;literal&lt;\/script&gt;/);
  assert.match(html, /lang="ru">原文姓名/);
  assert.match(html, /lang="und-fonipa">\/…\//);
  assert.match(html, /）<\/span>．/, 'typeset by bananamark already');
  const article = html.slice(html.indexOf('<article>'));
  assert.ok(article.indexOf('<aside class="notice ') >= 0);
  assert.ok(article.indexOf('<aside class="notice ') < article.indexOf('这个页面演示'));
  assert.ok(article.indexOf('数据块之后的正文') < article.indexOf('navbox'));
  assert.ok(article.indexOf('navbox') < article.indexOf('terms'));
  assert.ok(article.indexOf('terms') < article.indexOf('article-footer'));
  assert.match(html, /href="\/wiki\/example\/"[^>]*>排版示例/);
  assert.ok(html.includes('href="/wiki/' + encodeURIComponent('奇异上同调') + '/"'));
  assert.match(html, /bm-wiki-link-missing/);
  assert.doesNotMatch(html, /raw HTML omitted|```terms|\{\{\{|wiki:\?/);
  assert.equal((html.match(/class="bm-section-number"/g) ?? []).length, 2);
  await writeFile(join(root, 'content/navboxes/代数拓扑.yaml'), grouped.replace('title: [[代数拓扑]]', 'title: 改后的导航标题\ncollapsed: true'));
  build();
  assert.match(await readFile(join(root, 'public/wiki/components-example/index.html'), 'utf8'), /<details>\s*<summary>改后的导航标题/);
  await mkdir(join(root, 'content/wiki/self-target'), { recursive: true });
  await writeFile(join(root, 'content/wiki/self-target/index.md'), '---\ntitle: 当前页\nslug: custom-address\nnavboxes: [代数拓扑]\n---\n[[当前页|正文链接]]\n');
  await writeFile(join(root, 'content/navboxes/代数拓扑.yaml'), grouped
    .replace('title: [[代数拓扑]]', 'title: [[当前页|当前页标题]]')
    .replace('- [[基本群]]', '- [[基本群]]\n      - [[当前页|当前 **条目**]]\n      - [[当前页|$H^n$]]\n      - "[绝对地址](https://example.org/wiki/custom-address/)"\n      - "[其他站点](https://other.example/wiki/custom-address/)"'));
  build();
  const selfHTML = await readFile(join(root, 'public/wiki/custom-address/index.html'), 'utf8');
  assert.doesNotMatch(selfHTML, /class="terms"/);
  const selfNav = selfHTML.match(/<nav class="navbox"[\s\S]*?<\/nav>/)[0];
  assert.match(selfNav, /<strong class="navbox-current" aria-current="page">当前页标题<\/strong>/);
  assert.match(selfNav, /<strong class="navbox-current" aria-current="page">当前<strong>条目<\/strong><\/strong>/);
  assert.match(selfNav, /<strong class="navbox-current" aria-current="page"><span class="bm-math-rendered"/);
  assert.match(selfNav, /<strong class="navbox-current" aria-current="page">绝对地址<\/strong>/);
  assert.match(selfNav, /<a href="https:\/\/other.example\/wiki\/custom-address\/"/);
  assert.match(selfHTML, /<a href="\/wiki\/custom-address\/" class="bm-wiki-link">正文链接<\/a>/);
  const config = await readFile(join(root, 'site.yaml'), 'utf8');
  await writeFile(join(root, 'site.yaml'), config.replace("https://example.org/", "https://example.org/encyclopedia/"));
  build();
  const subpath = await readFile(join(root, 'public/wiki/custom-address/index.html'), 'utf8');
  assert.match(subpath, /<strong class="navbox-current" aria-current="page">当前<strong>条目<\/strong><\/strong>/);
  assert.match(subpath, /href="\/encyclopedia\/wiki\/custom-address\/" class="bm-wiki-link">正文链接/);
  await writeFile(join(root, 'site.yaml'), config);
  for (const [frontMatter, error] of [
    ['notices:\n  - name: 提示\n    text: 已改为正文中的标签', /页面提示已改为正文中的标签/],
    ['navboxes: [不存在]', /组件不存在：navboxes\/不存在/],
    ['navboxes: ["../代数拓扑"]', /不能包含路径/],
  ]) {
    await writeFile(page, `---\ntitle: 组件示例\n${frontMatter}\n---\n正文\n`);
    assert.throws(() => execFileSync(process.execPath, ['scripts/prebuild.mjs'], { cwd: root, stdio: 'pipe' }), error);
  }
  // An image's width in its address, as on the Hugo site: an error on its line.
  await writeFile(page, '---\ntitle: 组件示例\n---\n\n正文\n\n![图](pic.png?width=120)\n');
  assert.throws(() => execFileSync(process.execPath, ['scripts/prebuild.mjs'], { cwd: root, stdio: 'pipe' }), /index\.md:7: 图片的宽度已改为写在图片之后/);
  // 人名的生卒年、日语注音与姓名语言；参见；图片宽度；条目默认地址保留大小写与标点。
  await writeFile(page, '---\ntitle: 组件示例\n---\n正文\n');
  await mkdir(join(root, 'content/wiki/Person Test（甲）'), { recursive: true });
  await writeFile(join(root, 'content/wiki/Person Test（甲）/index.md'), [
    '---', 'title: 人名测试',
    'categories: [数学家]', '---',
    '**Nobuo Yoneda** <person original="[米田]<よねだ> 信<のぶ>夫<お>" lang="ja" translit="Yoneda Nobuo" years="1930--1996" />，',
    'Armand Borel <person lang="fr" ipa="/a/">。',
    // Continued on the next lines (a long tag within the line width).
    '**Peter Dirichlet**', '<person lang="de" years="1805--1859"', '  ipa="/x/"', '  />，德国数学家。', '',
    '<see>[[奇异上同调]]、[[不存在的条目]]</see>', '',
    '![图](pic.png){width=120}', '', '![](pic.png "替代文字")', '', '<align right>', '——某人\\', '*某书*', '</align>', '', '```terms', '米田 信夫:', '  lang: ja', '  zh: 米田信夫', '$\\infty$-范畴:', '  en: $\\infty$-category', '```', '',
  ].join('\n'));
  await writeFile(join(root, 'content/wiki/Person Test（甲）/pic.png'), 'png');
  build();
  const personHTML = await readFile(join(root, 'public/wiki/Person_Test（甲）/index.html'), 'utf8');
  assert.match(personHTML, /<span class="person-annotations">（<span class="person-label" data-typography="boundary">日语<\/span> <span lang="ja"><ruby>米田<rp> \(<\/rp><rt>よねだ<\/rt><rp>\) <\/rp><\/ruby> <ruby>信<rp> \(<\/rp><rt>のぶ<\/rt>[\s\S]*?，<span class="person-years">1930(?:–|&ndash;)1996<\/span>）/);
  // The note follows the name (the space between them goes); years are Markdown ("--" is a dash).
  assert.match(personHTML, /<strong>Nobuo Yoneda<\/strong><span class="person-annotations">/);
  assert.match(personHTML, /<strong>Peter Dirichlet<\/strong><span class="person-annotations">（<span class="person-label" data-typography="boundary">德语<\/span> <span class="person-label" data-typography="boundary">IPA<\/span> <span class="person-ipa"[\s\S]*?1805(?:–|&ndash;)1859<\/span>）<\/span>，德国数学家/);
  assert.match(personHTML, /Armand Borel<span class="person-annotations">（<span class="person-label" data-typography="boundary">法语<\/span> <span class="person-label" data-typography="boundary">IPA<\/span> <span class="person-ipa"/);
  assert.match(personHTML, /，<span class="person-label" data-typography="boundary">拉丁转写<\/span> <i class="person-transliteration" lang="ja-Latn">Yoneda Nobuo<\/i>/);
  assert.match(personHTML, /<p class="terms-title">译名<\/p>/);
  assert.match(personHTML, /<strong class="term-title" lang="ja">米田 信夫<\/strong>/);
  assert.match(personHTML, /<strong class="term-title"><span class="bm-math-rendered"[^>]*data-tex="\\infty"[\s\S]*?<\/span>-范畴<\/strong>/);
  assert.match(personHTML, /<span lang="en"><span class="bm-math-rendered"[^>]*data-tex="\\infty"[\s\S]*?<\/span>-category<\/span>/);
  assert.match(personHTML, /data-typography="boundary">中文<\/span> <span lang="zh">米田信夫/);
  assert.match(personHTML, /<div class="see-also"><span class="see-also-label">参见：<\/span><a href="[^"]*" class="bm-wiki-link">奇异上同调<\/a>、<a [^>]*bm-wiki-link-missing/);
  assert.doesNotMatch(personHTML, /<p>\s*<div class="see-also"/);
  assert.match(personHTML, /<img src="\/wiki\/Person_Test%EF%BC%88%E7%94%B2%EF%BC%89\/pic.png" alt="图" width="120"/);
  // 单独成段的图片显示为居中的图，说明文字写在图下。
  assert.match(personHTML, /<figure class="bm-content-figure"><img [^>]*pic.png[^>]*><figcaption>图<\/figcaption><\/figure>/);
  // 方括号留空时，标题只作替代文字，不显示在图下。
  assert.match(personHTML, /<figure class="bm-content-figure"><img [^>]*alt="替代文字"[^>]*><\/figure>/);
  // align：居右的署名，行末反斜杠是硬换行。
  assert.match(personHTML, /<div class="bm-align-right"><p>——某人<br>\s*<em>某书<\/em><\/p>\s*<\/div>/);
  await rm(join(root, 'content/wiki/Person Test（甲）'), { recursive: true });

  // <problems> on a page that is not an article: “本页面”; also within a section, where it is written. Empty: an error.
  const appendix = join(root, 'content/books/线性代数拾遗/appendix/index.md');
  const appendixSource = await readFile(appendix, 'utf8');
  await writeFile(appendix, appendixSource + '\n## 待补充\n\n<problems>\n本节需要扩充。\n</problems>\n\n本节的正文。\n');
  build();
  const appendixHTML = await readFile(join(root, 'public/books/线性代数拾遗/appendix/index.html'), 'utf8');
  assert.match(appendixHTML, /待补充[\s\S]*<p>本页面存在以下问题：<\/p>\s*<p>本节需要扩充．<\/p>[\s\S]*本节的正文/);
  await writeFile(appendix, appendixSource);
  for (const tag of ['problems', 'disambiguation', 'tip']) {
    await writeFile(page, `---\ntitle: 组件示例\n---\n<${tag}>\n</${tag}>\n\n正文\n`);
    assert.throws(build, new RegExp(`<${tag}> 的内容不能为空`));
  }
  await writeFile(page, '---\ntitle: 组件示例\n---\n示例 <person name="示例" />\n');
  assert.throws(build, /<person> 没有参数 name/);
  await writeFile(page, '---\ntitle: 组件示例\n---\n示例 <person lang="en" />\n');
  assert.throws(build, /<person> 至少需要 original、translit、ipa、years 之一/);
  // A tag continues on the next lines between its parameters, not within a value or across a blank line.
  for (const tag of ['<person lang="en" ipa="/a\n  b/" />', '<person lang="en"\n\n  ipa="/a/" />', '<person lang="en"\n> ipa="/a/" />']) {
    await writeFile(page, `---\ntitle: 组件示例\n---\n示例 ${tag}\n`);
    assert.throws(build, /<person> 的写法有误/, tag);
    assert.throws(() => execFileSync(process.execPath, ['scripts/check.mjs', 'content/wiki/components-example'], { cwd: root, stdio: 'pipe' }), error => /<person> 的写法有误/.test(error.stdout), tag);
  }
  await writeFile(page, '---\ntitle: 组件示例\n---\n示例 <person lang="en"\n  ipa="/a/" />\n');
  execFileSync(process.execPath, ['scripts/check.mjs', 'content/wiki/components-example'], { cwd: root, stdio: 'pipe' });
  // In a quote, the continuation lines carry the quote's marks (or none, a lazy line), as many as the first line.
  await writeFile(page, '---\ntitle: 组件示例\n---\n> > 甲 <person lang="en"\n> >   ipa="/a/"\n  years="1900" />，乙\n');
  build();
  assert.match(normalizeHTML(await readFile(join(root, 'public/wiki/components-example/index.html'), 'utf8')),
    /<blockquote>\s*<blockquote>\s*<p>甲<span class="person-annotations">[\s\S]*?1900<\/span>）<\/span>，乙<\/p>/);
  await writeFile(page, '---\ntitle: 组件示例\n---\n> 甲 <person lang="en"\n> > ipa="/a/" />\n');
  assert.throws(build, /<person> 的写法有误/);
  console.log('导航框定义排除及清理、提示标签（图标、引用、本页面、节中的提示、空内容与旧的 notices 报错、页面描述）、人名注音与生卒年、参见、图片宽度（地址中旧的 ?width= 报错）、默认地址、术语汇总与段落排版、导航当前页识别与自定义地址、分组与链接、假名、人名及最终 Hugo 输出验证通过');
} finally { await rm(root, { recursive: true, force: true }); }
