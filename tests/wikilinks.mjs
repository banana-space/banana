import { createProject, buildProject, projectRoot } from './helpers/project.mjs';
import assert from 'node:assert/strict';
import { mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { runInNewContext } from 'node:vm';
import { transformMarkup, normalizeTarget, plainName, readMath } from '../scripts/prebuild/markup.mjs';

const project = projectRoot;
const link = (name, display = name) => `wiki:?title=${encodeURIComponent(name)}&name=${encodeURIComponent(display)}`;
assert.equal(transformMarkup('[[交换环]] [[模|文字]]'), `[交换环](${link('交换环')}) [文字](${link('模')})`);
// 表格中的链接把分隔符写成转义竖线 \|。
assert.equal(transformMarkup('| [[模\\|文字]] |'), `| [文字](${link('模')}) |`);
assert.equal(normalizeTarget(String.raw`$\infty$-范畴`), '∞-范畴');
// Formulas in names: linear text from KaTeX's MathML. Keys ignore spacing inside
// formulas and compatibility variants; equivalent TeX spellings agree.
assert.equal(normalizeTarget(String.raw`$\mathcal{C}\otimes D$`), 'C⊗D');
assert.notEqual(normalizeTarget('$L^p$ 空间'), normalizeTarget('$L_p$ 空间'));
assert.equal(normalizeTarget(String.raw`$H^1(X;\mathbb Z)$`), 'H^1(X;Z)');
for (const spelling of [String.raw`$H^{1}( X ; \mathbb{Z} )$`, String.raw`$H^1(X;\Bbb Z)$`, '$H^1(X;ℤ)$', 'H^1(X;Z)']) {
  assert.equal(normalizeTarget(spelling), 'H^1(X;Z)', spelling);
}
assert.equal(normalizeTarget(String.raw`$\operatorname{Hom}(A,B)$`), normalizeTarget(String.raw`$\mathrm{Hom}(A, B)$`));
assert.equal(normalizeTarget('$a_2$ 的性质'), normalizeTarget('a_2 的性质'));
assert.equal(plainName(String.raw`$H^1(X;\mathbb Z)$ 与 $f\colon X\to Y$`), 'H^1(X; ℤ) 与 f : X → Y');
assert.equal(transformMarkup(String.raw`[[$f\colon X\to Y$]]`).match(/\(wiki:([^)]*)\)/)[1], `${link('f:X→Y', 'f : X → Y').slice(5)}&source=${encodeURIComponent(String.raw`$f\colon X\to Y$`)}`);
assert.throws(() => normalizeTarget(String.raw`$\unknown$`), /公式无法解析：\\unknown/);
// Link text goes through Hugo's typographer, so the target is read the same way: -- is an en dash,
// --- an em dash, ... an ellipsis; keys take any quotation marks as straight ones. Formulas keep theirs.
assert.equal(normalizeTarget('Auslander--Buchsbaum 公式'), normalizeTarget('Auslander–Buchsbaum 公式'));
assert.equal(plainName('Auslander--Buchsbaum 公式'), 'Auslander–Buchsbaum 公式');
assert.equal(plainName('甲---乙...'), '甲—乙…');
assert.equal(normalizeTarget("Guillaume de l'Hôpital"), normalizeTarget('Guillaume de l’Hôpital'));
assert.equal(normalizeTarget('"行"列式'), normalizeTarget('“行”列式'));
assert.equal(plainName('Guillaume de l’Hôpital'), 'Guillaume de l’Hôpital');
assert.equal(normalizeTarget("l'Hôpital 法则"), 'l’Hôpital 法则');
assert.equal(plainName("Bayes' 定理"), 'Bayes’ 定理');
// A missing article's title comes from the target, typeset outside its formulas.
assert.match(transformMarkup("[[$f'$ 与 O'Nan--群]]"), /&source=%24f'%24%20%E4%B8%8E%20O%E2%80%99Nan%E2%80%93%E7%BE%A4\)/);
assert.notEqual(normalizeTarget('$a--b$'), normalizeTarget('$a–b$'));
// Formulas do not cross a blank line: an unmatched { does not carry one into the next paragraph.
assert.equal(readMath('${$ 甲\n\n乙 } $', 0), undefined);
assert.equal(readMath('$a\n> \n b$', 0), undefined);
assert.equal(readMath('$a\nb$', 0).end, 5);
assert.equal(readMath('\\[a\n\nb\\]', 0), undefined, 'nor display formulas: \\[[x]] does not reach a later \\]');
assert.equal(readMath('\\[[E:K]=[E:L][L:K].\\]', 0).end, 21, 'a display formula may start with a bracket');
// Code spans end with their paragraph: a stray backtick does not make the next paragraphs code.
assert.match(transformMarkup('`甲\n\n[[乙]] `丙`'), /\[乙\]\(wiki:/);
const nested = String.raw`$a \text{$b$ [[不要链接]]} c$`;
assert.equal(readMath(nested, 0).value, String.raw`a \text{$b$ [[不要链接]]} c`);
for (const math of [nested, '$A[[t]]$', '$$A[[t]]$$', String.raw`\(A[[t]]\)`, String.raw`\[A[[t]]\]`, String.raw`$a \{b\} \$ c$`]) {
  const transformed = transformMarkup(`${math} [[交换环]]`);
  assert.equal((transformed.match(/wiki:/g) ?? []).length, 1);
  assert.match(transformed, /@@(?:display)?math:/);
}
for (const code of ['`[[交换环]] $x$`', '`` ` [[交换环]] ``', '```md\n[[交换环]] $x$\n```', '~~~\n[[交换环]]\n~~~', '    [[交换环]] $x$\n', '> ```\n> [[交换环]]\n> ```', '<!-- [[交换环]] -->']) {
  assert.equal(transformMarkup(code), code);
}
// A tag's parameters are text.
assert.equal(transformMarkup('<spoiler title="[[交换环]]">'), '{{< spoiler title="[[交换环]]" >}}');
assert.equal(transformMarkup(String.raw`\[[交换环]] \$5 \\$6`), String.raw`\[[交换环]] \$5 \\$6`);
assert.equal((transformMarkup(String.raw`\\[[交换环]]`).match(/wiki:/g) ?? []).length, 1);
assert.equal((transformMarkup(String.raw`\\([[不是数学]]\\)`).match(/wiki:/g) ?? []).length, 1);
assert.equal((transformMarkup(String.raw`[[模|$a \text{$b$ | [[t]]} c$]]`).match(/wiki:/g) ?? []).length, 1);
assert.throws(() => transformMarkup(String.raw`[[$\unknown$]]`), /公式无法解析/);
assert.throws(() => transformMarkup(String.raw`[[$\,$]]`), /规范化后为空/);
assert.equal(transformMarkup('[标签](https://example.com/$a$)'), '[标签](https://example.com/$a$)');
assert.equal(transformMarkup('[标签][id]\n\n[id]: /$a$'), '[标签][id]\n\n[id]: /$a$');
assert.equal(transformMarkup('[标签 [[交换环]]](https://example.com)'), '[标签 [[交换环]]](https://example.com)');
assert.equal(readMath('$a % } $ \n b$', 0).value, 'a % } $ \n b');
assert.equal(transformMarkup('@@', [(text, start) => text.startsWith('@@', start) ? { end: start + 2, output: '扩展' } : undefined]), '扩展');

const root = await createProject('links');
try {
  async function article(name, metadata, body = '') {
    const directory = join(root, 'content/wiki', name);
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, 'index.md'), `---\n${metadata}\n---\n${body}\n`);
  }
  await article('infinity', 'title: ∞-范畴\nurl: /custom-infinity/');
  await article('draft', 'title: 草稿\ndraft: true');
  const body = String.raw`[[顶点代数]] [[$\infty$-范畴]] [[缺失 & "条目"|缺失 $A$-模]] [[草稿]]

${nested}

\$5 与 \$6，反斜杠 \\。[[顶点代数]]

\[
A[[t]] \text{$b$}
\]

[外部](https://example.com) [普通](/wiki/example/)

[站内绝对地址](https://example.org/wiki/example/) [站内协议相对地址](//example.org/wiki/example/)
[分类总览](/categories/) [相对分类](../../categories/顶点代数/?view=tree#top)
[无尾斜线总览](/categories) [绝对分类总览](https://example.org/categories/?view=tree#top)
[编码分类](/categories/%E9%A1%B6%E7%82%B9%E4%BB%A3%E6%95%B0/)
[绝对分类](https://example.org/categories/顶点代数/) [协议相对分类](//example.org/categories/顶点代数/)
[外站分类](//example.com/categories/顶点代数/) [未创建分类](/categories/未创建/)
[邮件](mailto:hello@example.org) [页内](#top)

::: definition* [定义]
[[顶点代数|块内链接]] $a \text{$b$} c$
:::

&#91;[字面双括号]]

` + '```tex\n$A[[t]]$ [[顶点代数]]\n```';
  await article('link-test', 'title: 链接测试', body);
  const source = await readFile(join(root, 'content/wiki/link-test/index.md'), 'utf8');
  const build = (extra = []) => buildProject(root, extra);
  build();
  const html = await readFile(join(root, 'public/wiki/link-test/index.html'), 'utf8');
  assert.ok(html.includes(`href="/wiki/${encodeURIComponent('顶点代数')}/" class="wiki-link"`));
  assert.match(html, /href="\/custom-infinity\/" class="wiki-link"><span class="math-rendered" data-tex="\\infty"/);
  assert.match(html, /class="wiki-link">块内链接<\/a>/);
  assert.match(html, /wiki-link-missing/);
  assert.match(html, /href="\/missing\/\?title=/);
  assert.match(html, /data-tex="a \\text\{\$b\$ \[\[不要链接\]\]\} c"/);
  assert.match(html, /data-display="true"/);
  assert.match(html, /\$5 与 \$6，反斜杠 \\/);
  assert.doesNotMatch(html, /wiki:|ZgotmplZ/);
  assert.match(html, /class="external-link" target="_blank" rel="noopener"/);
  assert.match(html, /href="\/wiki\/example\/">普通<\/a>/);
  const renderedLinks = html.match(/<a\b[^>]*>[\s\S]*?<\/a>/g);
  const renderedLink = caption => {
    const link = renderedLinks.find(link => link.replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/g, '').replace(/<[^>]*>/g, '') === caption);
    assert.ok(link, `未找到链接：${caption}`);
    return link;
  };
  for (const caption of ['相对分类', '编码分类', '绝对分类', '协议相对分类']) {
    assert.match(renderedLink(caption), /class="category-link"/);
    assert.match(renderedLink(caption), /icon-folder/);
    assert.doesNotMatch(renderedLink(caption), /target="_blank"/);
  }
  for (const caption of ['外部', '外站分类']) {
    assert.match(renderedLink(caption), /class="external-link"/);
    assert.match(renderedLink(caption), /icon-external/);
    assert.doesNotMatch(renderedLink(caption), /icon-folder/);
  }
  for (const caption of ['分类总览', '无尾斜线总览', '绝对分类总览', '站内绝对地址', '站内协议相对地址', '未创建分类', '邮件', '页内']) {
    assert.doesNotMatch(renderedLink(caption), /link-icon|target="_blank"/);
  }
  assert.match(html, /条目尚未创建：草稿/);
  assert.match(await readFile(join(root, 'public/missing/index.html'), 'utf8'), /id="missing-name"/);
  assert.equal(await readFile(join(root, 'content/wiki/link-test/index.md'), 'utf8'), source);
  build(['--baseURL', 'https://example.org/docs/']);
  const subpathHTML = await readFile(join(root, 'public/wiki/link-test/index.html'), 'utf8');
  assert.match(subpathHTML, /href="\.\.\/\.\.\/categories\/[^\"]+" class="category-link"><svg[^>]+icon-folder/);
  assert.match(subpathHTML, /href="\/docs\/categories\/"/);
  assert.match(subpathHTML, /href="\/docs\/categories\/">分类总览<\/a>/);
  build(['--buildDrafts']);
  assert.doesNotMatch(await readFile(join(root, 'public/wiki/link-test/index.html'), 'utf8'), /条目尚未创建：草稿/);
  // Links and images: site addresses, http and https (and mailto for links); an image's address is escaped.
  await article('unsafe-image', 'title: 图', '![图](<x.png" onerror="alert(1)>)');
  build();
  const imageHTML = await readFile(join(root, 'public/wiki/unsafe-image/index.html'), 'utf8');
  assert.match(imageHTML, /<img src="x.png&#34; onerror=&#34;alert\(1\)"/);
  assert.doesNotMatch(imageHTML, / onerror="/);
  for (const [name, body] of [['unsafe-link', '[点](javascript:alert(1))'], ['unsafe-data', '![图](data:image/svg+xml,x)'], ['unsafe-autolink', '<javascript:alert(1)>']]) {
    await article(name, 'title: 链', body);
    assert.throws(() => build(), /链接或图片的地址只能是站内地址或 http、https/, name);
    await rm(join(root, 'content/wiki', name), { recursive: true });
  }
  await rm(join(root, 'content/wiki/unsafe-image'), { recursive: true });
  await article('duplicate', 'title: ∞-范畴');
  assert.throws(() => execFileSync(process.execPath, ['scripts/prebuild.mjs'], { cwd: root, stdio: 'pipe' }), /条目名称重复/);
} finally { await rm(root, { recursive: true, force: true }); }

const name = { textContent: '', dataset: { nameFormat: '“{name}”', titleFormat: '{name}：条目尚未创建' } };
const document = { getElementById: id => id === 'missing-name' ? name : null, querySelectorAll: () => [], title: '' };
runInNewContext(await readFile(join(project, 'static/js/missing.js'), 'utf8'), { document, URLSearchParams, window: { location: { search: '?title=%3Cscript%3E' } } });
assert.equal(name.textContent, '“<script>”');
console.log('内部链接、数学嵌套与转义、代码保护、实际 URL、缺失条目、草稿、同名冲突及构建时公式渲染验证通过');
