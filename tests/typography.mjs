import { createProject, buildProject } from './helpers/project.mjs';
import assert from 'node:assert/strict';
import { mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { parse as parseHTML, serialize } from 'parse5';
import { parse as parseYAML } from 'yaml';
import { normalizeText, normalizeTokens } from '../scripts/shared/typography.mjs';
import { normalizeHTML } from '../scripts/postbuild/typography-html.mjs';
import { normalizeTarget } from '../scripts/prebuild/markup.mjs';
import { pageName } from '../scripts/prebuild/names.mjs';
import { headingId } from '../scripts/prebuild/structure.mjs';

assert.equal(normalizeText('中文API与3个整数。定理 X.Y，数值3.14。'), '中文 API 与 3 个整数．定理 X.Y，数值 3.14．');
assert.equal(normalizeText('汉 字（ 汉 字 ）汉 “ 汉 字 ” 汉 「 汉 字 」 汉'), '汉字（汉字）汉 “汉字” 汉「汉字」汉');
assert.equal(normalizeText('汉 ( 汉 ) 汉 [ 汉 ] 汉 { 汉 } 汉 " 汉 " 汉'), '汉 (汉) 汉 [汉] 汉 {汉} 汉 "汉" 汉');
assert.equal(normalizeText("汉 ' hello world ' 汉，don't，James' book"), "汉 'hello world' 汉，don't，James' book");
assert.equal(normalizeText('如式(1.1)所示'), '如式 (1.1) 所示');
assert.equal(normalizeText('如式 ( 1.1 ) 所示'), '如式 (1.1) 所示');
assert.equal(normalizeText('汉"汉"汉\'汉\'汉'), '汉 "汉" 汉 \'汉\' 汉');
assert.equal(normalizeText('整数,实数.然后;其次:结论!成立?未知'), '整数, 实数. 然后; 其次: 结论! 成立? 未知');
assert.equal(normalizeText('定理 X.Y，小数3.14，函数f(x)，中文（注）汉“引文”'), '定理 X.Y，小数 3.14，函数 f(x)，中文（注）汉 “引文”');
assert.equal(normalizeText('汉“字”汉‘字’汉'), '汉 “字” 汉 ‘字’ 汉');
assert.equal(normalizeText('汉“字，汉‘字；”汉，’汉'), '汉 “字，汉 ‘字；” 汉，’ 汉');
assert.equal(normalizeText('“汉，汉”；‘汉，汉’'), '“汉，汉”；‘汉，汉’');
assert.equal(normalizeText('Noether’s theorem, James’ theorem, “quoted”'), 'Noether’s theorem, James’ theorem, “quoted”');
assert.equal(normalizeText('English. “Quoted”'), 'English. “Quoted”');
assert.equal(normalizeText('xxx （注）， xxx 。 123 ； α ： β ！'), 'xxx（注），xxx．123；α：β！');
assert.equal(normalizeText('。 汉字， 汉字 ； 汉字 ： 汉字 ！ 汉字 ？ 汉字'), '．汉字，汉字；汉字：汉字！汉字？汉字');
assert.equal(normalizeText('汉字 , 汉字 . 汉字 ; 汉字 : 汉字 ! 汉字 ? 汉字'), '汉字, 汉字. 汉字; 汉字: 汉字! 汉字? 汉字');
assert.equal(normalizeText('xxx (note), next. “quoted”'), 'xxx (note), next. “quoted”');
assert.equal(normalizeText('xxx （note）， next', { lang: 'en' }), 'xxx （note）， next');
assert.equal(normalizeText('한글 （注）， 한글', { lang: 'ko' }), '한글 （注）， 한글');
assert.equal(normalizeText('中文。 \n（注） 、 「附注」 ； “说明” 。'), '中文．（注）、「附注」；“说明”．');
assert.equal(normalizeText('中文。 \n（注）', { convertChineseFullStop: false }), '中文。（注）');
assert.equal(normalizeText('English. (Note), next.', { lang: 'en' }), 'English. (Note), next.');
assert.equal(normalizeText('한 글ABC 漢 字。', { lang: 'ko' }), '한 글ABC 漢 字。');
assert.equal(normalizeText('中文。', { convertChineseFullStop: false }), '中文。');
assert.equal(normalizeText('文𠀀A字é字α字'), '文𠀀 A 字 é 字 α 字');
assert.equal(normalizeText('字e\u0301字'), '字 e\u0301 字');
assert.equal(normalizeText('汉\u{E0100}A字'), '汉\u{E0100} A 字');
// Cover both directions for every Chinese punctuation class, ordinary
// whitespace, combining letters, numbers and opaque inline formulas.
const fullwidthMarks = Array.from('。，．、；：！？…—（）「」『』《》〈〉【】〔〕［］｛｝〈〉〝〞＂＇／＼＃％＆＊＠＿');
for (const mark of fullwidthMarks) for (const neighbor of ['汉', '漢', '𠀀', 'A', 'é', 'e\u0301', 'α', '1']) {
  for (const whitespace of ['', ' ', '   ', '\t', '\r\n']) {
    for (const [left, right] of [[mark, neighbor], [neighbor, mark]]) {
      const original = left + whitespace + right, expected = left + right;
      const actual = normalizeText(original, { convertChineseFullStop: false });
      assert.equal(actual, expected, `标点边界 ${JSON.stringify(original)}`);
      assert.equal(normalizeText(actual, { convertChineseFullStop: false }), actual, '边界处理不幂等');
    }
  }
}
for (const mark of fullwidthMarks) for (const whitespace of [' ', '\n', '\t']) {
  for (const before of [true, false]) {
    const math = { math: true, text: String.raw`x + \text{汉 字。}` };
    const literal = { text: before ? mark + whitespace : whitespace + mark };
    normalizeTokens(before ? [literal, math] : [math, literal], { convertChineseFullStop: false });
    assert.equal(literal.text, mark, '标点与公式之间留下普通空白');
    assert.equal(math.text, String.raw`x + \text{汉 字。}`, '公式内容发生变化');
  }
}
for (const space of ['\u00a0', '\u1680', '\u2000', '\u2001', '\u2002', '\u2003', '\u2004', '\u2005', '\u2006', '\u2007', '\u2008', '\u2009', '\u200a', '\u202f', '\u205f', '\u3000', '\u200b', '\ufeff']) {
  const text = `汉${space}字（${space}汉${space}）汉${space}A`;
  assert.equal(normalizeText(text), text, `特殊空格 U+${space.codePointAt(0).toString(16)} 被修改`);
  assert.equal(normalizeText(`如式${space}(1.1)${space}所示,${space}汉字`), `如式${space}(1.1)${space}所示,${space}汉字`);
  assert.equal(normalizeText(`。${space}（注）`), `．${space}（注）`);
  assert.equal(normalizeText(`xxx${space}（注），${space}123`), `xxx${space}（注），${space}123`);
  assert.equal(normalizeText(`汉${space}，${space}字`), `汉${space}，${space}字`);
  assert.equal(normalizeText(`汉${space},${space}字`), `汉${space},${space}字`);
  assert.equal(normalizeText(`汉${space}“字”${space}汉‘${space}字${space}’`), `汉${space}“字”${space}汉 ‘${space}字${space}’`);
}
for (const name of ['维数(向量空间)', '维数 (向量空间)', '维数（向量空间）']) {
  assert.equal(normalizeTarget(name), '维数 (向量空间)');
  assert.equal(pageName(name, 'test.md').name, name.includes('（') ? '维数（向量空间）' : '维数 (向量空间)');
  assert.equal(pageName(name, 'test.md').parts.map(part => part.text).join(''), name, 'prebuild 改写了显示括号或空白');
}
assert.equal(normalizeTarget('维 数API ( 向 量 空 间 )'), '维数 API (向量空间)');
assert.equal(pageName(String.raw`中文$\infty$理论`, 'test.md').name, '中文 ∞ 理论');
assert.equal(pageName('Function (vector spaces)', 'test.md').name, 'Function (vector spaces)');
assert.equal(pageName('函数 f(x)', 'test.md').name, '函数 f(x)');
assert.equal(pageName('维数 ($R$ 向量空间)', 'test.md').name, '维数 (R 向量空间)');
assert.equal(headingId('中文[API](/target)与$f$'), '中文-api-与-f');
assert.equal(headingId('中文 API 与 $f$'), '中文-api-与-f');
assert.equal(headingId('汉**API**字'), '汉-api-字');
assert.equal(headingId(String.raw`汉**$\infty$**字`), '汉-∞-字');
assert.equal(headingId('漢 字', { lang: 'ko' }), '漢-字');
assert.equal(headingId('Auslander--Buchsbaum 公式'), headingId('Auslander–Buchsbaum 公式'));
assert.equal(headingId('<lang ko>漢 字</lang>'), '漢-字');

function nodes(html) {
  const result = [];
  const visit = node => { result.push(node); for (const child of node.childNodes ?? []) visit(child); };
  visit(parseHTML(html));
  return result;
}
const attr = (node, name) => node.attrs?.find(attr => attr.name === name)?.value;
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(text).join('');
const sample = `<html lang="zh-CN"><head><title>中文API。</title><meta property="og:title" content="中文API。"></head><body>
<p id="mixed">中文<a href="/中文API。">API</a>汉<strong>字</strong>（ <em>汉 字</em> ）汉<span class="math-rendered" data-display="false" data-tex="汉 字。">汉 字。</span>字。</p>
<p id="links"><a href="/a">汉</a><a href="/b">ABC</a>汉</p>
<p id="punctuation">如式<a href="/eq">(1.1)</a>所示<span>,</span><em>然后</em>.<a href="/next">其次</a></p>
<p id="punctuation-break">中文。 \n<span>（注）</span></p>
<p id="terms"><span lang="en">group</span><span class="term-separator" data-typography-boundary="true"></span><span>法语</span> <span lang="fr">groupe</span></p>
<p id="empty-span">中文<span></span>ABC</p>
<p id="quotes">汉<a href="/quote">“</a>字<span>”</span>汉</p>
<p id="western-fullwidth"><a href="/latin" lang="en">xxx</a> \n<span>（注），</span> <em lang="en">next</em> 。</p>
<p id="han-fullwidth">汉字 。 \n<a href="/han">汉字</a> ， <strong>汉字</strong> <span>；</span> 汉字</p>
<p id="math-fullwidth"><span class="math-rendered" data-tex="a">a</span> ， <span class="math-rendered" data-tex="b">b</span> 。 汉字</p>
<p id="special">汉&nbsp;字（&#x2009;汉&#x2009;）汉&#x202f;A</p>
<p id="korean" lang="ko">한 글ABC 漢 字。</p><p id="english" lang="en">漢 字 ( English ) 。</p>
<div class="bibliography" data-typography="off" lang="en">汉 字。 ( A )</div>
<pre>汉 字API。 ( X )</pre><script>const title="汉 字API。";</script>
<p><span class="math-rendered" data-display="true" data-tex="x。">x。</span></p>
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
assert.equal(text(id('english')), '漢 字 ( English ) 。');
assert.equal(text(all.find(node => attr(node, 'class') === 'bibliography')), '汉 字。 ( A )');
assert.equal(text(all.find(node => node.tagName === 'pre')), '汉 字API。 ( X )');
assert.equal(text(all.find(node => node.tagName === 'script')), 'const title="汉 字API。";');
assert.equal(text(all.find(node => node.tagName === 'h2')), '维数 (向量空间)');
assert.equal(text(all.find(node => node.tagName === 'title')), '中文 API．');
assert.equal(attr(all.find(node => node.tagName === 'meta'), 'content'), '中文 API．');
assert.equal(attr(all.find(node => attr(node, 'href') === '/中文API。'), 'href'), '/中文API。');
assert.equal(text(all.find(node => attr(node, 'data-display') === 'true')), 'x。');
for (const link of all.filter(node => node.tagName === 'a')) assert.equal(text(link), text(link).trim(), '边界空格进入链接内部');
assert.equal(normalizeHTML(formatted), formatted, '后处理不是幂等的');
assert.match(normalizeHTML('<html lang="zh" data-typography-full-stop="false"><body><p>汉字。</p></body></html>'), /汉字。/);

const proof = normalizeHTML('<div class="theorem-proof"><span class="theorem-title">证明\u3000</span><div class="theorem-content">\n \n<p>正文</p></div></div>');
assert.match(proof, /证明\u3000<\/span><div class="theorem-content"><p>正文<\/p>/);
assert.equal(normalizeHTML(proof), proof);

const root = await createProject('typography', ['scripts', 'layouts', 'assets', 'static', 'i18n', 'data', 'hugo.toml']);
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
  const beforePostbuild = await readFile(join(root, 'public/wiki/dimension/index.html'), 'utf8');
  assert.equal(text(nodes(beforePostbuild).find(node => node.tagName === 'h1')).trim(), '维 数 ( 向 量 空 间 )');
  assert.match(beforePostbuild, /<p>中文<a[^>]*>API/);
  execFileSync(process.execPath, ['scripts/postbuild.mjs'], { cwd: root, stdio: 'pipe' });
  const html = await readFile(join(root, 'public/wiki/dimension/index.html'), 'utf8');
  const formulas = value => nodes(value).filter(node => attr(node, 'class')?.split(/\s+/).includes('math-rendered'));
  assert.deepEqual(formulas(html).map(serialize), formulas(beforePostbuild).map(serialize), '后处理改写了公式内部的 HTML/MathML/TeX');
  assert.ok(formulas(html).length >= 7);
  assert.ok(formulas(html).every(node => nodes(serialize(node)).some(child => child.tagName === 'math')));
  assert.doesNotMatch(html, /<script[^>]+(?:katex|js\/math\.js)|math-source/);
  assert.match(html, /汉 <span class="math-rendered"[^>]*>[\s\S]*?<\/span> 字/);
  assert.match(html, /汉<a[^>]*>式 <span class="math-rendered"[^>]*>[\s\S]*?<\/a> 字/);
  assert.match(html, /汉 <a[^>]*><span class="math-rendered"[^>]*>[\s\S]*?<\/a> 字/);
  const formulaWithText = formulas(html).find(node => attr(node, 'data-tex') === String.raw`\text{汉 字。}`);
  assert.ok(serialize(formulaWithText).includes('汉 字。'));
  assert.equal(normalizeHTML(html), html);
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
  const wiki = built.filter(node => attr(node, 'class') === 'wiki-link');
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
  const bibliography = built.find(node => attr(node, 'class') === 'bibliography');
  assert.match(text(bibliography), /Hello , world \( A \)/);
  assert.match(text(bibliography), /汉字．/);
  const disabled = await readFile(join(root, 'public/wiki/disabled/index.html'), 'utf8');
  assert.match(disabled, /中文 API。定理 X.Y。/);
  assert.doesNotMatch(disabled, /中文 API．/);
  const korean = await readFile(join(root, 'public/wiki/korean/index.html'), 'utf8');
  assert.match(korean, /<html lang="ko">/);
  assert.match(korean, /<h2 id="漢-字">/);
  assert.match(korean, /<p>漢 字ABC。<\/p>/);
  assert.match(korean, /href="\/wiki\/korean\/" class="wiki-link">漢 字<\/a>/);
  assert.equal(await readFile(join(root, 'content/wiki/dimension/index.md'), 'utf8'), source);
  assert.equal(normalizeHTML(html), html);
} finally { await rm(root, { recursive: true, force: true }); }
console.log('排版：链接/公式边界、特殊空格、韩文、括号与引号、标题/锚点、三种条目名称、句号开关、参考文献按语言排版及重复构建验证通过');
