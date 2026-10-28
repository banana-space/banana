import { createProject, buildProject } from './helpers/project.mjs';
import assert from 'node:assert/strict';
import { mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parse as parseHTML, parseFragment, serialize } from 'parse5';
import { defineDialect, renderDocument, renderKaTeX } from 'bananamark';
import { decodeEntities, pageSummary, plainify } from '../scripts/shared/summary.mjs';
import { parse as parseYAML } from 'yaml';
import { normalizeText, normalizeTokens } from 'bananamark/internal/typography.mjs';
import { typesetTree } from 'bananamark/typography';
import { typography } from '../scripts/shared/typography.mjs';

// A whole page typeset as the site generator does (bananamark's typography with the site's options).
const normalizeHTML = html => serialize(typesetTree(parseHTML(html), { lang: 'zh-cn', typography }));
import { normalizeTarget } from 'bananamark/internal/markup.mjs';
import { pageName } from '../scripts/shared/names.mjs';
import { headingId } from 'bananamark/internal/structure.mjs';

// Names (scripts/shared/names.mjs): typeset as the page's text, their brackets as written.
for (const name of ['维数(向量空间)', '维数 (向量空间)', '维数（向量空间）']) {
  assert.equal(pageName(name, 'test.md').name, name.includes('（') ? '维数（向量空间）' : '维数 (向量空间)');
  assert.equal(pageName(name, 'test.md').parts.map(part => part.text).join(''), name, 'prebuild 改写了显示括号或空白');
}
assert.equal(pageName(String.raw`中文$\infty$理论`, 'test.md').name, '中文 ∞ 理论');
assert.equal(pageName('Function (vector spaces)', 'test.md').name, 'Function (vector spaces)');
assert.equal(pageName('函数 f(x)', 'test.md').name, '函数 f(x)');
assert.equal(pageName('维数 ($R$ 向量空间)', 'test.md').name, '维数 (R 向量空间)');
// A page's summary (scripts/shared/summary.mjs, for its description): a TikZ diagram's source is not in it.
assert.equal(plainify(pageSummary(renderDocument('See\n\n```tikz\n\\draw (0,0);\n```\n\nafter.', { dialect: defineDialect({ tikz: true }) }).html)), 'See\nafter.\n');

function nodes(html) {
  const result = [];
  const visit = node => { result.push(node); for (const child of node.childNodes ?? []) visit(child); };
  visit(parseHTML(html));
  return result;
}
const attr = (node, name) => node.attrs?.find(attr => attr.name === name)?.value;
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(text).join('');
const sample = `<html lang="zh-CN"><head><title>中文API。</title><meta property="og:title" content="中文API。"></head><body>
<p id="mixed">中文<a href="/中文API。">API</a>汉<strong>字</strong>（ <em>汉 字</em> ）汉<span class="bm-math-rendered" data-display="false" data-tex="汉 字。">汉 字。</span>字。</p>
<p id="links"><a href="/a">汉</a><a href="/b">ABC</a>汉</p>
<p id="punctuation">如式<a href="/eq">(1.1)</a>所示<span>,</span><em>然后</em>.<a href="/next">其次</a></p>
<p id="punctuation-break">中文。 \n<span>（注）</span></p>
<p id="terms"><span lang="en">group</span><span class="term-separator" data-typography="boundary"></span><span>法语</span> <span lang="fr">groupe</span></p>
<p id="empty-span">中文<span></span>ABC</p>
<p id="quotes">汉<a href="/quote">“</a>字<span>”</span>汉</p>
<p id="western-fullwidth"><a href="/latin" lang="en">xxx</a> \n<span>（注），</span> <em lang="en">next</em> 。</p>
<p id="han-fullwidth">汉字 。 \n<a href="/han">汉字</a> ， <strong>汉字</strong> <span>；</span> 汉字</p>
<p id="math-fullwidth"><span class="bm-math-rendered" data-tex="a">a</span> ， <span class="bm-math-rendered" data-tex="b">b</span> 。 汉字</p>
<p id="special">汉&nbsp;字（&#x2009;汉&#x2009;）汉&#x202f;A</p>
<p id="korean" lang="ko">한 글ABC 漢 字。</p><p id="english" lang="en">漢 字 ( English ) 。</p>
<div class="bm-bibliography" data-typography="off" lang="en">汉 字。 ( A )</div>
<pre>汉 字API。 ( X )</pre><script>const title="汉 字API。";</script>
<p><span class="bm-math-rendered" data-display="true" data-tex="x。">x。</span></p>
<h2>维数 ( <em>向量空间</em> )</h2></body></html>`;
const formatted = normalizeHTML(sample), all = nodes(formatted);
const id = name => all.find(node => attr(node, 'id') === name);
assert.equal(text(id('mixed')), '中文 API 汉字（汉字）汉 汉 字。 字．');
assert.equal(text(id('links')), '汉 ABC 汉');
assert.equal(text(id('punctuation')), '如式 (1.1) 所示, 然后. 其次');
assert.equal(text(id('punctuation-break')), '中文．（注）');
assert.equal(text(id('terms')), 'group法语 groupe');
assert.equal(text(id('empty-span')), '中文 ABC');
assert.equal(text(id('quotes')), '汉 “字” 汉');
assert.equal(text(id('western-fullwidth')), 'xxx（注），next．');
assert.equal(text(id('han-fullwidth')), '汉字．汉字，汉字；汉字');
assert.equal(text(id('math-fullwidth')), 'a，b．汉字');
assert.equal(text(id('special')), '汉\u00a0字（\u2009汉\u2009）汉\u202fA');
assert.equal(text(id('korean')), '한 글ABC 漢 字。');
// In English text, the rules apply to the Chinese characters only.
assert.equal(text(id('english')), '漢字 ( English ) ．');
assert.equal(text(all.find(node => attr(node, 'class') === 'bm-bibliography')), '汉 字。 ( A )');
assert.equal(text(all.find(node => node.tagName === 'pre')), '汉 字API。 ( X )');
assert.equal(text(all.find(node => node.tagName === 'script')), 'const title="汉 字API。";');
assert.equal(text(all.find(node => node.tagName === 'h2')), '维数 (向量空间)');
assert.equal(text(all.find(node => node.tagName === 'title')), '中文 API．');
assert.equal(attr(all.find(node => node.tagName === 'meta'), 'content'), '中文 API．');
assert.equal(attr(all.find(node => attr(node, 'href') === '/中文API。'), 'href'), '/中文API。');
assert.equal(text(all.find(node => attr(node, 'data-display') === 'true')), 'x。');
for (const link of all.filter(node => node.tagName === 'a')) assert.equal(text(link), text(link).trim(), '边界空格进入链接内部');
assert.equal(normalizeHTML(formatted), formatted, '后处理不是幂等的');
assert.match(normalizeHTML('<html lang="zh" data-typography-full-stop="off"><body><p>汉字。</p></body></html>'), /汉字。/);

const proof = normalizeHTML('<div class="bm-envgroup-proof"><span class="bm-envtitle">证明\u3000</span><div class="bm-envcontent">\n \n<p>正文</p></div></div>');
assert.match(proof, /证明\u3000<\/span><div class="bm-envcontent"><p>正文<\/p>/);
assert.equal(normalizeHTML(proof), proof);

const root = await createProject('typography', ['scripts', 'assets', 'static', 'i18n', 'data', 'site.yaml']);
try {
  await mkdir(join(root, 'content/wiki/dimension'), { recursive: true });
  await mkdir(join(root, 'content/wiki/disabled'), { recursive: true });
  await mkdir(join(root, 'content/wiki/korean'), { recursive: true });
  await writeFile(join(root, 'data/categories.yaml'), '数学: {}\n');
  let source = '---\ntitle: 维 数 ( 向 量 空 间 )\n---\n## 中文API与$f$ {@sec:test}\n\n[[维数(向量空间)]] [[维数（向量空间）]] [[维数 (向量空间)]]\n\n中文[API](https://example.com)与$f$。见 @sec:test。\n\n<lang ko>한 글ABC 漢 字。</lang>\n\n## 维数 ( 向量空间 )\n\n```bibliography\nbook:\n  type: book\n  title: Hello , world ( A )\n  author: Example\n  year: 2026\n  note: 汉 字。\n```\n';
  source += String.raw`
间距：汉$x$字，汉[式 $x$](https://example.com)字。汉[$x$](https://example.com/formula)字。汉$\text{汉 字。}$字。

$$x + y$$

公式后正文。
`;
  await writeFile(join(root, 'content/wiki/dimension/index.md'), source);
  await writeFile(join(root, 'content/wiki/disabled/index.md'), '---\ntitle: 中文API。\ntypography:\n  convertChineseFullStop: false\n---\n中文API。定理 X.Y。\n');
  await writeFile(join(root, 'content/wiki/korean/index.md'), '---\ntitle: 漢 字\nlang: ko\n---\n## 漢 字\n\n漢 字ABC。\n\n[[漢 字]]\n');
  buildProject(root);
  const generated = await readFile(join(root, '.build/content/wiki/dimension/index.md'), 'utf8');
  assert.equal(parseYAML(generated.split('---\n')[1]).title, '维 数 ( 向 量 空 间 )');
  // The body is typeset by bananamark already; the text of the templates (the title) as the page is finished.
  const html = await readFile(join(root, 'public/wiki/dimension/index.html'), 'utf8');
  assert.match(html, /<p>中文 <a[^>]*>API/);
  const formulas = value => nodes(value).filter(node => attr(node, 'class')?.split(/\s+/).includes('bm-math-rendered'));
  // Each formula holds exactly KaTeX's HTML for its data-tex (rendered by bananamark, or by Hugo in template
  // text), which typography leaves alone.
  const katexSpan = node => {
    const span = parseFragment(`<span>${renderKaTeX(decodeEntities(attr(node, 'data-tex')), attr(node, 'data-display') === 'true')}</span>`).childNodes[0];
    return serialize(span);
  };
  // A formula followed by punctuation has KaTeX's last box with the punctuation in span.bm-math-end (bananamark):
  // put back in place, KaTeX's HTML as it was.
  const unglued = node => serialize(node).replace(/<\/span><\/span><span class="bm-math-end"><span class="katex"><span class="katex-html" aria-hidden="true">([\s\S]*)<\/span><\/span>[^<>]*<\/span>$/, '$1</span></span>');
  assert.deepEqual(formulas(html).filter(node => !attr(node, 'class').includes('bm-tikz-source')).map(unglued), formulas(html).filter(node => !attr(node, 'class').includes('bm-tikz-source')).map(katexSpan), '后处理改写了公式内部的 HTML/MathML/TeX');
  assert.ok(formulas(html).some(node => /<span class="bm-math-end">[\s\S]*<\/span>[，。．]<\/span>$/.test(serialize(node))), '公式后的标点与公式的末尾在一起');
  assert.ok(formulas(html).length >= 7);
  assert.ok(formulas(html).every(node => nodes(serialize(node)).some(child => child.tagName === 'math')));
  assert.doesNotMatch(html, /<script[^>]+(?:katex|js\/math\.js)|math-source/);
  assert.match(html, /汉 <span class="bm-math-rendered"[^>]*>[\s\S]*?<\/span> 字/);
  assert.match(html, /汉<a[^>]*>式 <span class="bm-math-rendered"[^>]*>[\s\S]*?<\/a> 字/);
  assert.match(html, /汉 <a[^>]*><span class="bm-math-rendered"[^>]*>[\s\S]*?<\/a> 字/);
  const formulaWithText = formulas(html).find(node => attr(node, 'data-tex') === String.raw`\text{汉 字。}`);
  assert.ok(serialize(formulaWithText).includes('汉 字。'));
  // Typesetting the finished page again changes nothing (beyond writing it as parse5 does: KaTeX's HTML is not).
  assert.equal(normalizeHTML(html), serialize(parseHTML(html)));
  const cssURL = nodes(html).find(node => node.tagName === 'link' && /\/css\/site\..*css$/.test(attr(node, 'href') ?? ''));
  const css = await readFile(join(root, 'public', attr(cssURL, 'href')), 'utf8');
  const punctuationFaces = [...css.matchAll(/@font-face\s*\{([^}]+)\}/g)].filter(match => /banana punctuation/i.test(match[1]));
  assert.equal(punctuationFaces.length, 3);
  for (const face of punctuationFaces) {
    assert.match(face[1], /\.woff2"?\)\s*format\("woff2"\)/);
    assert.match(face[1], /U\+2018-2019,\s*U\+201C-201D/i, '弯引号未使用自制标点字体');
  }
  const built = nodes(html), heading = built.find(node => node.tagName === 'h2');
  assert.equal(attr(heading, 'id'), '中文-api-与-f');
  const wiki = built.filter(node => attr(node, 'class') === 'bm-wiki-link');
  assert.equal(wiki.length, 3); assert.ok(wiki.every(node => attr(node, 'href') === '/wiki/dimension/'));
  assert.deepEqual(wiki.map(text), ['维数 (向量空间)', '维数（向量空间）', '维数 (向量空间)']);
  assert.ok(built.some(node => node.tagName === 'a' && decodeURIComponent(attr(node, 'href') ?? '') === '#中文-api-与-f'));
  assert.ok(built.some(node => node.tagName === 'a' && decodeURIComponent(attr(node, 'href') ?? '') === '#维数-向量空间' && text(node).endsWith('维数 (向量空间)')));
  assert.equal(text(built.find(node => node.tagName === 'h1')).trim(), '维数 (向量空间)');
  assert.doesNotMatch(html, /(?:src|href)="[^"]*(?:typography|scripts\/postbuild)/);
  for (const filename of ['typography.js', 'typography-live.js', 'typography.mjs']) {
    await assert.rejects(stat(join(root, 'public/js', filename)), { code: 'ENOENT' });
  }
  assert.match(html, /<p>中文 <a[^>]*>API/);
  assert.match(html, /<span lang="ko">한 글ABC 漢 字。<\/span>/);
  // A bibliography is typeset as prose, its Western data (marked English) as written; its Chinese note as Chinese.
  const bibliography = built.find(node => attr(node, 'class') === 'bm-bibliography');
  assert.match(text(bibliography), /Hello , world \( A \)/);
  assert.match(text(bibliography), /汉字．/);
  const disabled = await readFile(join(root, 'public/wiki/disabled/index.html'), 'utf8');
  assert.match(disabled, /中文 API。定理 X.Y。/);
  assert.doesNotMatch(disabled, /中文 API．/);
  const korean = await readFile(join(root, 'public/wiki/korean/index.html'), 'utf8');
  assert.match(korean, /<html lang="ko">/);
  assert.match(korean, /<h2 id="漢-字">/);
  assert.match(korean, /<p>漢 字ABC。<\/p>/);
  assert.match(korean, /href="\/wiki\/korean\/" class="bm-wiki-link">漢 字<\/a>/);
  assert.equal(await readFile(join(root, 'content/wiki/dimension/index.md'), 'utf8'), source);
  // Typesetting the finished page again changes nothing (beyond writing it as parse5 does: KaTeX's HTML is not).
  assert.equal(normalizeHTML(html), serialize(parseHTML(html)));
} finally { await rm(root, { recursive: true, force: true }); }
console.log('排版：链接/公式边界、特殊空格、韩文、括号与引号、标题/锚点、三种条目名称、句号开关、参考文献按语言排版及重复构建验证通过');
