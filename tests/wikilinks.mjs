import { createProject, buildProject, projectRoot } from './helpers/project.mjs';
import assert from 'node:assert/strict';
import { mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { runInNewContext } from 'node:vm';
import { transformMarkup, normalizeTarget, plainName, readMath } from 'bananamark/internal/markup.mjs';

const project = projectRoot;
// A formula whose \text holds a formula and brackets: neither a link nor the formula's end.
const nested = String.raw`$a \text{$b$ [[不要链接]]} c$`;

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

加粗的链接：文字**[[顶点代数]]**文字。

` + '```tex\n$A[[t]]$ [[顶点代数]]\n```';
  await article('link-test', 'title: 链接测试', body);
  const source = await readFile(join(root, 'content/wiki/link-test/index.md'), 'utf8');
  const build = (extra = []) => buildProject(root, extra);
  build();
  const html = await readFile(join(root, 'public/wiki/link-test/index.html'), 'utf8');
  assert.match(html, /加粗的链接：文字<strong><a [^>]*>顶点代数<\/a><\/strong>文字/, 'bold around a link, between Chinese: the spaces the syntax layer added go again');
  assert.ok(html.includes(`href="/wiki/${encodeURIComponent('顶点代数')}/" class="bm-wiki-link"`));
  assert.match(html, /href="\/custom-infinity\/" class="bm-wiki-link"><span class="bm-math-rendered" data-tex="\\infty"/);
  assert.match(html, /class="bm-wiki-link">块内链接<\/a>/);
  assert.match(html, /bm-wiki-link-missing/);
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
  // Links and images: site addresses, http and https (and mailto for links); an image's address is encoded, as a link's.
  await article('unsafe-image', 'title: 图', '![图](<x.png" onerror="alert(1)>)');
  build();
  const imageHTML = await readFile(join(root, 'public/wiki/unsafe-image/index.html'), 'utf8');
  assert.match(imageHTML, /<img src="x.png%22%20onerror=%22alert%281%29"/);
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
