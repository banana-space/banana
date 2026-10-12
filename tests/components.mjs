import { createProject, buildProject } from './helpers/project.mjs';
import assert from 'node:assert/strict';
import { mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { parseNavbox } from '../scripts/prebuild/components.mjs';
import { translation, readTerms } from '../scripts/prebuild/terms.mjs';
import { normalizeHTML } from '../scripts/postbuild/typography-html.mjs';
import { transformDocument } from '../scripts/prebuild/structure.mjs';

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
assert.match(navbox.rows[0].items[1], /显示文字.*%2C/);
assert.match(navbox.rows[1].items[1], /@@math:/);
assert.throws(() => parseNavbox(grouped.replace('items: [', 'extra: ['), fail), /未知字段/);
assert.throws(() => parseNavbox('title: X\ngroups: []', fail), /非空列表/);
assert.throws(() => parseNavbox('title: X\ngroups:\n- title: Y\n  items: [[not-a-link], [also-not-a-link]]', fail), /非空文字/);
assert.throws(() => parseNavbox('title: X\ngroups:\n- title: Y\n  items: [X]\n  subgroups: []', fail), /只能填写/);
assert.deepEqual(translation('位<い>相<そう>空間', 'ja', fail).ruby, [{ text: '位', reading: 'い' }, { text: '相', reading: 'そう' }, { text: '空間' }]);
assert.deepEqual(translation('[位相]<いそう>', 'ja', fail).ruby, [{ text: '位相', reading: 'いそう' }]);
assert.deepEqual(translation('位相空<くう>間', 'ja', fail).ruby, [{ text: '位相' }, { text: '空', reading: 'くう' }, { text: '間' }]);
assert.deepEqual(translation('埋<う>め込<こ>み', 'ja', fail).ruby, [{ text: '埋', reading: 'う' }, { text: 'め' }, { text: '込', reading: 'こ' }, { text: 'み' }]);
assert.deepEqual(translation('から[写像]<しゃぞう>へ', 'ja', fail).ruby, [{ text: 'から' }, { text: '写像', reading: 'しゃぞう' }, { text: 'へ' }]);
assert.deepEqual(translation('$L^p$ 空<くう>間', 'ja', fail).ruby, [{ text: 'L^p ', parts: [{ tex: 'L^p', text: 'L^p' }, { text: ' ' }] }, { text: '空', reading: 'くう' }, { text: '間' }]);
assert.deepEqual(translation('$a<b$ 線<せん>', 'ja', fail).ruby.map((part) => part.reading), [undefined, 'せん']);
assert.throws(() => translation('$x$<えっくす>', 'ja', fail), /注音前必须有文字/);
// Terms are typeset like Markdown text, outside formulas; Japanese stays as written.
assert.equal(translation("l'Hôpital's rule", 'en', fail).text, 'l’Hôpital’s rule');
assert.deepEqual(translation("théorème d'Euler :m", 'fr', fail), { text: 'théorème d’Euler', gender: 'm' });
assert.deepEqual(translation({ text: 'the "free" monoid', note: "Bayes' sense" }, 'en', fail), { text: 'the “free” monoid', note: 'Bayes’ sense' });
assert.deepEqual(translation("$f'$-module -- $g$'s", 'en', fail).parts.map(part => part.tex ?? part.text), ["f'", '-module – ', 'g', '’s']);
assert.equal(translation("ア'イ", 'ja', fail).text, "ア'イ");
assert.equal(readTerms("```terms\nl'Hôpital 法则:\n  en: l'Hôpital's rule\n```\n", 0, fail).terms[0].title, 'l’Hôpital 法则');
assert.throws(() => translation('[$x$ 空間]<えっくすくうかん>', 'ja', fail), /注音前必须有文字/);
assert.deepEqual(translation('𠮷<よし>田', 'ja', fail).ruby, [{ text: '𠮷', reading: 'よし' }, { text: '田' }]);
assert.deepEqual(translation({ text: '埋め込み', reading: ['う', null, 'こ', null] }, 'ja', fail).ruby, [{ text: '埋', reading: 'う' }, { text: 'め' }, { text: '込', reading: 'こ' }, { text: 'み' }]);
assert.deepEqual(translation({ text: '位相', reading: ['い', 'そう'] }, 'ja', fail).ruby, [{ text: '位', reading: 'い' }, { text: '相', reading: 'そう' }]);
assert.deepEqual(translation({ text: '位相', ruby: [{ text: '位相', reading: 'いそう' }] }, 'ja', fail).ruby, [{ text: '位相', reading: 'いそう' }]);
assert.equal(translation('groupe :m', 'fr', fail).gender, 'm');
assert.equal(translation('Gruppe :f', 'de', fail).gender, 'f');
for (const [value, lang, message] of [
  ['群<ぐん', 'ja', /假名格式/], ['groupe :x', 'fr', /未知性别/],
  ['<ぐん>', 'ja', /假名格式/], ['群<>', 'ja', /假名格式/],
  ['[位相]<いそう', 'ja', /假名格式/], ['群<ぐん><ぐん>', 'ja', /假名格式/],
  [{ text: '位相', reading: ['い'] }, 'ja', /逐字对应/],
  [{ text: '群', ruby: [{ text: '環', reading: 'かん' }] }, 'ja', /与 text 一致/],
  [{ text: 'group', reading: 'ぐん' }, 'en', /仅用于日语/],
  [{ text: 'groupe', pos: 'noun' }, 'fr', /未知译名字段/],
]) assert.throws(() => translation(value, lang, fail), message);
assert.match(transformDocument('````markdown\n```terms\n群:\n  en: group\n```\n````'), /```terms/);
assert.throws(() => transformDocument('```terms\n群:\n  ja: 群<ぐん\n```', { file: 'source.md', lineOffset: 5 }), /source.md:8:.*假名格式/);
assert.throws(() => transformDocument('```terms\n群: {en: group}\n群: {en: ring}\n```'), /YAML 无效/);
assert.throws(() => transformDocument('```terms\n群:\n  ja:\n```'), /译名必须是文字或字段映射/);
assert.throws(() => transformDocument('::: theorem\n```terms\n群: {en: group}\n```\n:::'), /环境之外/);
let collectedTerms;
const withoutTerms = transformDocument('前段\n```terms\n群: {en: group}\n```\n中段\n```terms\n环: {en: ring}\n```\n后段', { onTerms: terms => { collectedTerms = terms; } });
assert.deepEqual(collectedTerms.map(term => term.title), ['群', '环']);
assert.equal(withoutTerms, '前段\n\n中段\n\n后段');

const root = await createProject('components');
try {
  await writeFile(join(root, 'content/navboxes/代数拓扑.yaml'), grouped);
  const page = join(root, 'content/wiki/components-example/index.md');
  const original = await readFile(page, 'utf8');
  await writeFile(page, original
    .replace('## 人名标注', '```terms\n前置术语: {en: early term}\n```\n\n## 人名标注')
    .replace('  de: Gruppe :f', '  de: Gruppe :f\n环:\n  de: Ring :m\n  en: ring') + '\n```terms\n多译名:\n  en: [first, second]\n  ja: {text: 位相, reading: [い, そう]}\n  fr: {text: "<script>literal</script>", gender: f}\n```\n\n数据块之后的正文。\n');
  // Old generated definitions must be removed on the next successful prebuild.
  for (const kind of ['notices', 'navboxes']) {
    await mkdir(join(root, '.build/content', kind), { recursive: true });
    await writeFile(join(root, '.build/content', kind, 'leaked.md'), 'This must not become a page.');
  }
  const build = () => buildProject(root);
  build();
  for (const kind of ['notices', 'navboxes']) {
    await assert.rejects(stat(join(root, '.build/content', kind)), { code: 'ENOENT' });
    await assert.rejects(stat(join(root, 'public', kind, 'leaked/index.html')), { code: 'ENOENT' });
  }
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
  assert.match(html, /aria-label="问题"[\s\S]*演示问题提示/);
  const terms = html.match(/<section class="terms"[\s\S]*?<\/section>/)[0];
  assert.equal((html.match(/class="terms"/g) ?? []).length, 1);
  assert.doesNotMatch(terms, /<table|<tr|<td|terms-scroll/);
  // Separators are drawn by CSS; the fixture also contains gender and Japanese readings.
  const ring = terms.match(/<p class="term-entry"><strong class="term-title">环<\/strong>[\s\S]*?<\/p>/)[0];
  assert.match(ring, /<span class="term-separator" data-typography-boundary="true" aria-hidden="true"><\/span><span class="term-language" data-typography-boundary="true">德语<\/span> <span lang="de">Ring/);
  const formattedTerms = normalizeHTML(html).match(/<section class="terms"[\s\S]*?<\/section>/)[0];
  assert.match(formattedTerms, /<\/span><span class="term-separator"[^>]*><\/span><span class="term-language" data-typography-boundary="true">/);
  assert.doesNotMatch(formattedTerms, /<\/span>\s+<span class="term-separator"|term-separator"[^>]*><\/span>\s+<span class="term-language"/);
  assert.match(ring, /<span class="term-language" data-typography-boundary="true">英语<\/span> <span lang="en">ring<\/span>/);
  assert.deepEqual([...terms.matchAll(/class="term-title">([^<]+)/g)].map(match => match[1]), ['前置术语', '群', '环', '拓扑空间', '嵌入', '拓扑', '多译名']);
  assert.match(html, /&lt;script&gt;literal&lt;\/script&gt;/);
  assert.match(html, /lang="ru">原文姓名/);
  assert.match(html, /lang="und-fonipa">\/…\//);
  assert.match(html, /）<\/span>。/);
  const article = html.slice(html.indexOf('<article>'));
  assert.ok(article.indexOf('<aside class="notice ') >= 0);
  assert.ok(article.indexOf('<aside class="notice ') < article.indexOf('这个页面演示'));
  assert.ok(article.indexOf('数据块之后的正文') < article.indexOf('navbox'));
  assert.ok(article.indexOf('navbox') < article.indexOf('terms'));
  assert.ok(article.indexOf('terms') < article.indexOf('article-footer'));
  assert.match(html, /href="\/wiki\/example\/"[^>]*>排版示例/);
  assert.ok(html.includes('href="/wiki/' + encodeURIComponent('奇异上同调') + '/"'));
  assert.match(html, /wiki-link-missing/);
  assert.doesNotMatch(html, /raw HTML omitted|```terms|\{\{\{|wiki:\?/);
  assert.equal((html.match(/class="section-number"/g) ?? []).length, 2);
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
  assert.match(selfNav, /<strong class="navbox-current" aria-current="page">当前 <strong>条目<\/strong><\/strong>/);
  assert.match(selfNav, /<strong class="navbox-current" aria-current="page"><span class="math-rendered"/);
  assert.match(selfNav, /<strong class="navbox-current" aria-current="page">绝对地址<\/strong>/);
  assert.match(selfNav, /<a href="https:\/\/other.example\/wiki\/custom-address\/"/);
  assert.match(selfHTML, /<a href="\/wiki\/custom-address\/" class="wiki-link">正文链接<\/a>/);
  const config = await readFile(join(root, 'hugo.toml'), 'utf8');
  await writeFile(join(root, 'hugo.toml'), config.replace("https://example.org/", "https://example.org/encyclopedia/"));
  build();
  const subpath = await readFile(join(root, 'public/wiki/custom-address/index.html'), 'utf8');
  assert.match(subpath, /<strong class="navbox-current" aria-current="page">当前 <strong>条目<\/strong><\/strong>/);
  assert.match(subpath, /href="\/encyclopedia\/wiki\/custom-address\/" class="wiki-link">正文链接/);
  await writeFile(join(root, 'hugo.toml'), config);
  for (const [frontMatter, error] of [
    ['notices:\n  - name: 消歧义', /缺少必填参数：other/],
    ['notices:\n  - name: 缺少来源\n    typo: X', /未知参数：typo/],
    ['navboxes: [不存在]', /组件不存在：navboxes\/不存在/],
    ['navboxes: ["../代数拓扑"]', /不能包含路径/],
  ]) {
    await writeFile(page, `---\ntitle: 组件示例\n${frontMatter}\n---\n正文\n`);
    assert.throws(() => execFileSync(process.execPath, ['scripts/prebuild.mjs'], { cwd: root, stdio: 'pipe' }), error);
  }
  // 人名的生卒年、日语注音与姓名语言；参见；图片宽度；条目默认地址保留大小写与标点。
  await writeFile(page, '---\ntitle: 组件示例\n---\n正文\n');
  await mkdir(join(root, 'content/wiki/Person Test（甲）'), { recursive: true });
  await writeFile(join(root, 'content/wiki/Person Test（甲）/index.md'), [
    '---', 'title: 人名测试',
    'categories: [数学家]', '---',
    '**Nobuo Yoneda** <person original="[米田]<よねだ> 信<のぶ>夫<お>" lang="ja" translit="Yoneda Nobuo" years="1930--1996" />，',
    'Armand Borel <person lang="fr" ipa="/a/">。', '',
    '<see>[[奇异上同调]]、[[不存在的条目]]</see>', '',
    '![图](pic.png?width=120)', '', '![](pic.png "替代文字")', '', '<align right>', '——某人\\', '*某书*', '</align>', '', '```terms', '米田 信夫:', '  lang: ja', '  zh: 米田信夫', '$\\infty$-范畴:', '  en: $\\infty$-category', '```', '',
  ].join('\n'));
  await writeFile(join(root, 'content/wiki/Person Test（甲）/pic.png'), 'png');
  build();
  const personHTML = await readFile(join(root, 'public/wiki/Person_Test（甲）/index.html'), 'utf8');
  assert.match(personHTML, /<span class="person-annotations">（<span class="person-label" data-typography-boundary="true">日语<\/span> <span lang="ja"><ruby>米田<rp> \(<\/rp><rt>よねだ<\/rt><rp>\) <\/rp><\/ruby> <ruby>信<rp> \(<\/rp><rt>のぶ<\/rt>[\s\S]*?，<span class="person-years">1930(?:–|&ndash;)1996<\/span>）/);
  // The note follows the name (the space between them goes); years are Markdown ("--" is a dash).
  assert.match(personHTML, /<strong>Nobuo Yoneda<\/strong><span class="person-annotations">/);
  assert.match(personHTML, /Armand Borel<span class="person-annotations">（<span class="person-label" data-typography-boundary="true">法语<\/span> <span class="person-label" data-typography-boundary="true">IPA<\/span> <span class="person-ipa"/);
  assert.match(personHTML, /，<span class="person-label" data-typography-boundary="true">拉丁转写<\/span> <i class="person-transliteration" lang="ja-Latn">Yoneda Nobuo<\/i>/);
  assert.match(personHTML, /<p class="terms-title">译名<\/p>/);
  assert.match(personHTML, /<strong class="term-title" lang="ja">米田 信夫<\/strong>/);
  assert.match(personHTML, /<strong class="term-title"><span class="math-rendered"[^>]*data-tex="\\infty"[\s\S]*?<\/span>-范畴<\/strong>/);
  assert.match(personHTML, /<span lang="en"><span class="math-rendered"[^>]*data-tex="\\infty"[\s\S]*?<\/span>-category<\/span>/);
  assert.match(personHTML, /data-typography-boundary="true">中文<\/span> <span lang="zh">米田信夫/);
  assert.match(personHTML, /<div class="see-also"><span class="see-also-label">参见：<\/span><a href="[^"]*" class="wiki-link">奇异上同调<\/a>、<a [^>]*wiki-link-missing/);
  assert.doesNotMatch(personHTML, /<p>\s*<div class="see-also"/);
  assert.match(personHTML, /<img src="\/wiki\/Person_Test%EF%BC%88%E7%94%B2%EF%BC%89\/pic.png" alt="图" width="120"/);
  // 单独成段的图片显示为居中的图，说明文字写在图下。
  assert.match(personHTML, /<figure class="content-figure"><img [^>]*pic.png[^>]*><figcaption>图<\/figcaption><\/figure>/);
  // 方括号留空时，标题只作替代文字，不显示在图下。
  assert.match(personHTML, /<figure class="content-figure"><img [^>]*alt="替代文字"[^>]*><\/figure>/);
  // align：居右的署名，行末反斜杠是硬换行。
  assert.match(personHTML, /<div class="align-right"><p>——某人<br>\s*<em>某书<\/em><\/p>\s*<\/div>/);
  await rm(join(root, 'content/wiki/Person Test（甲）'), { recursive: true });

  // 列表参数：文字列表、字段记录、列表字段（单个文字视为一项）、分隔文字与空参数段落。
  await writeFile(join(root, 'content/notices/列表.md'), [
    '---', 'parameters:', '  items:', '    type: list', '    required: true', '  see:', '    type: list',
    '    fields:', '      topic: {}', '      page:', '        type: list', '        required: true', '  note: {}', '---',
    '问题如下：', '', '{{{#items}}}', '- {{{.}}}', '{{{/items}}}', '',
    '{{{#see|；}}}关于{{{#topic}}}{{{topic}}}{{{/topic}}}{{{^topic}}}其他含义{{{/topic}}}见 {{{#page|、}}}[[{{{.}}}]]{{{/page}}}{{{/see}}}{{{^note}}}（无附注）{{{/note}}}',
  ].join('\n'));
  await writeFile(page, '---\ntitle: 组件示例\nnotices:\n  - name: 列表\n    items: [第一项 $x$, "[[奇异上同调]]"]\n    see:\n      - page: 甲\n      - {topic: 乙义, page: 乙}\n      - {topic: 丙义, page: [丙, 丁]}\n---\n正文\n');
  build();
  const listNotice = (await readFile(join(root, 'public/wiki/components-example/index.html'), 'utf8')).match(/<aside class="notice[\s\S]*?<\/aside>/)[0];
  assert.match(listNotice, /<ul>\s*<li>第一项 <span class="math-rendered"[\s\S]*<li><a href="\/wiki\/%E5%A5%87/);
  assert.match(listNotice, /关于其他含义见 <a[^>]*>甲<\/a>；关于乙义见 <a[^>]*>乙<\/a>；关于丙义见 <a[^>]*>丙<\/a>、<a[^>]*>丁<\/a>（无附注）/);
  // 内置值 {{{本页}}}：条目中为“本条目”，讲义页面中为“本页面”。
  await writeFile(join(root, 'content/notices/本页.md'), '---\nparameters: {}\n---\n{{{本页}}}用于测试。\n');
  const appendix = join(root, 'content/books/线性代数拾遗/appendix/index.md');
  const appendixSource = await readFile(appendix, 'utf8');
  await writeFile(appendix, appendixSource.replace('title: 符号约定', 'title: 符号约定\nnotices:\n  - name: 本页'));
  await writeFile(page, '---\ntitle: 组件示例\nnotices:\n  - name: 本页\n---\n正文\n');
  build();
  assert.match(await readFile(join(root, 'public/wiki/components-example/index.html'), 'utf8'), /本条目用于测试。/);
  assert.match(await readFile(join(root, 'public/books/线性代数拾遗/appendix/index.html'), 'utf8'), /本页面用于测试。/);
  await writeFile(appendix, appendixSource);
  await rm(join(root, 'content/notices/本页.md'));

  for (const [notice, error] of [
    ['    items: []', /items 必须是非空列表/],
    ['    items: [a]\n    see: [{page: 甲, typo: X}]', /see 中有未知字段：typo/],
    ['    items: [a]\n    see: [{topic: 乙}]', /see 中有一项缺少必填字段：page/],
    ['    items: [{a: b}]', /items 的每一项必须是单行文字/],
    ['    items: [a]\n    see: [{page: []}]', /see.page 必须是单行文字或单行文字的非空列表/],
    ['    items: [a]\n    see: [{page: [甲, {a: b}]}]', /see.page 必须是单行文字或单行文字的非空列表/],
  ]) {
    await writeFile(page, `---\ntitle: 组件示例\nnotices:\n  - name: 列表\n${notice}\n---\n正文\n`);
    assert.throws(() => execFileSync(process.execPath, ['scripts/prebuild.mjs'], { cwd: root, stdio: 'pipe' }), error);
  }
  await writeFile(page, '---\ntitle: 组件示例\n---\n示例 <person name="示例" />\n');
  assert.throws(build, /<person> 没有参数 name/);
  await writeFile(page, '---\ntitle: 组件示例\n---\n示例 <person lang="en" />\n');
  assert.throws(build, /<person> 至少需要 original、translit、ipa、years 之一/);
  console.log('内容内组件定义排除及清理、提示图标、列表参数、列表字段与模板段落、人名注音与生卒年、参见、图片宽度、默认地址、术语汇总与段落排版、导航当前页识别与自定义地址、分组与链接、假名、人名及最终 Hugo 输出验证通过');
} finally { await rm(root, { recursive: true, force: true }); }
