import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { normalizeText as anyText, normalizeTokens as anyTokens } from 'bananamark/internal/typography.mjs';
import { normalizeTarget } from 'bananamark/internal/markup.mjs';
import { headingId as anyHeadingId } from 'bananamark/internal/structure.mjs';
import { renderDocument, typesetHTML } from './zh.mjs';

// Chinese text unless a test says otherwise (the functions' default is English).
const normalizeText = (text, options) => anyText(text, { lang: 'zh-cn', ...options });
const normalizeTokens = (tokens, options) => anyTokens(tokens, { lang: 'zh-cn', ...options });
const headingId = (title, options) => anyHeadingId(title, { lang: 'zh-cn', ...options });

// The defaults: 。 kept, spaces next to quotation marks as written; the rest of the rules always.
assert.equal(normalizeText('中文API与3个整数。'), '中文 API 与 3 个整数。');
assert.equal(normalizeText('汉“字”汉 “字” 汉‘字’'), '汉“字”汉 “字” 汉‘字’');
assert.equal(normalizeText('（ 汉 ）'), '（汉）');
// Straight quotes are Western whatever spaceQuotes says (their full-width forms are other characters).
assert.equal(normalizeText('汉"字"汉'), '汉 "字" 汉');
// A footnote reference keeps the spaces written around it.
assert.equal(typesetHTML('<p>正文<sup><a class="bm-footnote-ref">1</a></sup>，再引 <sup><a class="bm-footnote-ref">2</a></sup> 汉字</p>'),
  '<p>正文<sup><a class="bm-footnote-ref">1</a></sup>，再引 <sup><a class="bm-footnote-ref">2</a></sup> 汉字</p>');
// Outside Chinese text (a page in English, say), the rules apply to its Chinese characters; not in Japanese or
// Korean text.
assert.equal(normalizeText('English中文English ( x ) xxx （note）， next', { lang: 'en' }), 'English 中文 English ( x ) xxx（note），next');
assert.equal(normalizeText('中文。', { lang: 'en', convertFullStop: true }), '中文．');
assert.equal(normalizeText('日本語English。', { lang: 'ja', convertFullStop: true }), '日本語English。');
// On HTML: formulas as atoms, lang from the elements, the full stop as data-typography-full-stop says.
assert.equal(typesetHTML('<p>中文<a href="#x">API</a><span class="bm-math-rendered" data-display="false">x</span>值。</p><p lang="ja">漢字A</p><p data-typography-full-stop="off">汉。</p>', { typography: { convertFullStop: true } }),
  '<p>中文 <a href="#x">API</a><span class="bm-math-rendered" data-display="false">x</span> 值．</p><p lang="ja">漢字A</p><p data-typography-full-stop="off">汉。</p>');

// The site's options (香蕉空间: 。 as ．, quotation marks as Western glyphs).
const site = { convertFullStop: true, spaceQuotes: true };
const typeset = (value, options) => normalizeText(value, { ...site, ...options });

assert.equal(typeset('中文API与3个整数。定理 X.Y，数值3.14。'), '中文 API 与 3 个整数．定理 X.Y，数值 3.14．');
assert.equal(typeset('汉 字（ 汉 字 ）汉 “ 汉 字 ” 汉 「 汉 字 」 汉'), '汉字（汉字）汉 “汉字” 汉「汉字」汉');
assert.equal(typeset('汉 ( 汉 ) 汉 [ 汉 ] 汉 { 汉 } 汉 " 汉 " 汉'), '汉 (汉) 汉 [汉] 汉 {汉} 汉 "汉" 汉');
assert.equal(typeset("汉 ' hello world ' 汉，don't，James' book"), "汉 'hello world' 汉，don't，James' book");
assert.equal(typeset('如式(1.1)所示'), '如式 (1.1) 所示');
assert.equal(typeset('如式 ( 1.1 ) 所示'), '如式 (1.1) 所示');
assert.equal(typeset('汉"汉"汉\'汉\'汉'), '汉 "汉" 汉 \'汉\' 汉');
assert.equal(typeset('整数,实数.然后;其次:结论!成立?未知'), '整数, 实数. 然后; 其次: 结论! 成立? 未知');
assert.equal(typeset('定理 X.Y，小数3.14，函数f(x)，中文（注）汉“引文”'), '定理 X.Y，小数 3.14，函数 f(x)，中文（注）汉 “引文”');
assert.equal(typeset('汉“字”汉‘字’汉'), '汉 “字” 汉 ‘字’ 汉');
assert.equal(typeset('汉“字，汉‘字；”汉，’汉'), '汉 “字，汉 ‘字；” 汉，’ 汉');
assert.equal(typeset('“汉，汉”；‘汉，汉’'), '“汉，汉”；‘汉，汉’');
assert.equal(typeset('Noether’s theorem, James’ theorem, “quoted”'), 'Noether’s theorem, James’ theorem, “quoted”');
assert.equal(typeset('English. “Quoted”'), 'English. “Quoted”');
assert.equal(typeset('xxx （注）， xxx 。 123 ； α ： β ！'), 'xxx（注），xxx．123；α：β！');
assert.equal(typeset('。 汉字， 汉字 ； 汉字 ： 汉字 ！ 汉字 ？ 汉字'), '．汉字，汉字；汉字：汉字！汉字？汉字');
assert.equal(typeset('汉字 , 汉字 . 汉字 ; 汉字 : 汉字 ! 汉字 ? 汉字'), '汉字, 汉字. 汉字; 汉字: 汉字! 汉字? 汉字');
assert.equal(typeset('xxx (note), next. “quoted”'), 'xxx (note), next. “quoted”');
assert.equal(typeset('한글 （注）， 한글', { lang: 'ko' }), '한글 （注）， 한글');
assert.equal(typeset('中文。 \n（注） 、 「附注」 ； “说明” 。'), '中文．（注）、「附注」；“说明”．');
assert.equal(typeset('中文。 \n（注）', { convertFullStop: false }), '中文。（注）');
assert.equal(typeset('English. (Note), next.', { lang: 'en' }), 'English. (Note), next.');
assert.equal(typeset('한 글ABC 漢 字。', { lang: 'ko' }), '한 글ABC 漢 字。');
assert.equal(typeset('中文。', { convertFullStop: false }), '中文。');
assert.equal(typeset('文𠀀A字é字α字'), '文𠀀 A 字 é 字 α 字');
assert.equal(typeset('字e\u0301字'), '字 e\u0301 字');
assert.equal(typeset('汉\u{E0100}A字'), '汉\u{E0100} A 字');
// Cover both directions for every Chinese punctuation class, ordinary
// whitespace, combining letters, numbers and opaque inline formulas.
const fullwidthMarks = Array.from('。，．、；：！？…—（）「」『』《》〈〉【】〔〕［］｛｝〈〉〝〞＂＇／＼＃％＆＊＠＿');
for (const mark of fullwidthMarks) for (const neighbor of ['汉', '漢', '𠀀', 'A', 'é', 'e\u0301', 'α', '1']) {
  for (const whitespace of ['', ' ', '   ', '\t', '\r\n']) {
    for (const [left, right] of [[mark, neighbor], [neighbor, mark]]) {
      const original = left + whitespace + right, expected = left + right;
      const actual = typeset(original, { convertFullStop: false });
      assert.equal(actual, expected, `标点边界 ${JSON.stringify(original)}`);
      assert.equal(typeset(actual, { convertFullStop: false }), actual, '边界处理不幂等');
    }
  }
}
for (const mark of fullwidthMarks) for (const whitespace of [' ', '\n', '\t']) {
  for (const before of [true, false]) {
    const math = { math: true, text: String.raw`x + \text{汉 字。}` };
    const literal = { text: before ? mark + whitespace : whitespace + mark };
    normalizeTokens(before ? [literal, math] : [math, literal], { ...site, convertFullStop: false });
    assert.equal(literal.text, mark, '标点与公式之间留下普通空白');
    assert.equal(math.text, String.raw`x + \text{汉 字。}`, '公式内容发生变化');
  }
}
for (const space of ['\u00a0', '\u1680', '\u2000', '\u2001', '\u2002', '\u2003', '\u2004', '\u2005', '\u2006', '\u2007', '\u2008', '\u2009', '\u200a', '\u202f', '\u205f', '\u3000', '\u200b', '\ufeff']) {
  const text = `汉${space}字（${space}汉${space}）汉${space}A`;
  assert.equal(typeset(text), text, `特殊空格 U+${space.codePointAt(0).toString(16)} 被修改`);
  assert.equal(typeset(`如式${space}(1.1)${space}所示,${space}汉字`), `如式${space}(1.1)${space}所示,${space}汉字`);
  assert.equal(typeset(`。${space}（注）`), `．${space}（注）`);
  assert.equal(typeset(`xxx${space}（注），${space}123`), `xxx${space}（注），${space}123`);
  assert.equal(typeset(`汉${space}，${space}字`), `汉${space}，${space}字`);
  assert.equal(typeset(`汉${space},${space}字`), `汉${space},${space}字`);
  assert.equal(typeset(`汉${space}“字”${space}汉‘${space}字${space}’`), `汉${space}“字”${space}汉 ‘${space}字${space}’`);
}
for (const name of ['维数(向量空间)', '维数 (向量空间)', '维数（向量空间）']) assert.equal(normalizeTarget(name), '维数 (向量空间)');
assert.equal(normalizeTarget('维 数API ( 向 量 空 间 )'), '维数 API (向量空间)');
assert.equal(headingId('中文[API](/target)与$f$'), '中文-api-与-f');
assert.equal(headingId('中文 API 与 $f$'), '中文-api-与-f');
assert.equal(headingId('汉**API**字'), '汉-api-字');
assert.equal(headingId(String.raw`汉**$\infty$**字`), '汉-∞-字');
assert.equal(headingId('漢 字', { lang: 'ko' }), '漢-字');
assert.equal(headingId('Auslander--Buchsbaum 公式'), headingId('Auslander–Buchsbaum 公式'));
assert.equal(headingId('<lang ko>漢 字</lang>'), '漢-字');

// Without Intl.Segmenter (Firefox before 125), characters with their combining marks: the same typography.
{
  const pages = ['<p>中文English。</p>', '<p>Cafe\u0301中文 “引号” x\u0308\u0301汉</p>', '<p>汉👩‍👩‍👧A</p>'];
  const script = `const { typesetHTML } = await import('bananamark/typography'); process.stdout.write(JSON.stringify(${JSON.stringify(pages)}.map(html => typesetHTML(html, { lang: 'zh-cn', typography: { spaceQuotes: true } }))))`;
  const run = prefix => JSON.parse(execFileSync(process.execPath, ['--input-type=module', '-e', prefix + script], { encoding: 'utf8' }));
  const [segmented, plain] = [run(''), run('delete Intl.Segmenter; ')];
  assert.equal(segmented[0], '<p>中文 English。</p>');
  assert.deepEqual(plain, segmented);
}

// Punctuation the renderer keeps with a formula (span.bm-math-end) is text after the formula to a second pass: the
// text around it stays as it was (a site typesets its templates' text, which may hold rendered fragments).
{
  const html = renderDocument('设 $x$，则 $y$“引”与$z$；文字', { lang: 'zh-cn', typography: { convertFullStop: true, spaceQuotes: true } }).html;
  assert.match(html, /bm-math-end/);
  assert.equal(typesetHTML(html, { lang: 'zh-cn', typography: { convertFullStop: true, spaceQuotes: true } }), html);
}

console.log('typography: passed');
