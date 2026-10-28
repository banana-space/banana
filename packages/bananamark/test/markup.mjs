import assert from 'node:assert/strict';
import { mathReader, readMath as scanMath } from 'bananamark/scan';
import { transformMarkup as anyMarkup, normalizeTarget, plainName, readMath as anyMath } from 'bananamark/internal/markup.mjs';
import { spoilerTag, transformFragment, zh } from './zh.mjs';

const transform = zh(anyMarkup), readMath = zh(anyMath);
import { inspectDocument, newDocument } from 'bananamark/internal/nodes.mjs';

// The document written out (inspectDocument): nodes as ⟦type field="…"⟧.
const transformMarkup = (text, extensions, options) => inspectDocument(newDocument(() => transform(text, extensions, options)));
const link = (name, display = name) => `⟦wiki target=${JSON.stringify(name)} name=${JSON.stringify(display)}⟧`;
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
assert.equal(transformMarkup(String.raw`[[$f\colon X\to Y$]]`).match(/\]\((⟦wiki .*⟧)\)$/)[1], `${link('f:X→Y', 'f : X → Y').slice(0, -1)} source=${JSON.stringify(String.raw`$f\colon X\to Y$`)}⟧`);
assert.throws(() => normalizeTarget(String.raw`$\unknown$`), /formula cannot be parsed: \\unknown/);
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
assert.match(transformMarkup("[[$f'$ 与 O'Nan--群]]"), /source="\$f'\$ 与 O’Nan–群"⟧\)$/);
assert.notEqual(normalizeTarget('$a--b$'), normalizeTarget('$a–b$'));
// Formulas do not cross a blank line: an unmatched { does not carry one into the next paragraph.
assert.equal(readMath('${$ 甲\n\n乙 } $', 0), undefined);
assert.equal(readMath('$a\n> \n b$', 0), undefined);
assert.equal(readMath('$a\nb$', 0).end, 5);
assert.equal(readMath('\\[a\n\nb\\]', 0), undefined, 'nor display formulas: \\[[x]] does not reach a later \\]');
assert.equal(readMath('\\[[E:K]=[E:L][L:K].\\]', 0).end, 21, 'a display formula may start with a bracket');
// Code spans end with their paragraph: a stray backtick does not make the next paragraphs code.
assert.match(transformMarkup('`甲\n\n[[乙]] `丙`'), /\[乙\]\(⟦wiki /);
const nested = String.raw`$a \text{$b$ [[不要链接]]} c$`;
assert.equal(readMath(nested, 0).value, String.raw`a \text{$b$ [[不要链接]]} c`);
for (const math of [nested, '$A[[t]]$', '$$A[[t]]$$', String.raw`\(A[[t]]\)`, String.raw`\[A[[t]]\]`, String.raw`$a \{b\} \$ c$`]) {
  const transformed = transformMarkup(`${math} [[交换环]]`);
  assert.equal((transformed.match(/⟦wiki /g) ?? []).length, 1);
  assert.match(transformed, /⟦(?:display)?math /);
}
for (const code of ['`[[交换环]] $x$`', '`` ` [[交换环]] ``', '```md\n[[交换环]] $x$\n```', '~~~\n[[交换环]]\n~~~', '    [[交换环]] $x$\n', '> ```\n> [[交换环]]\n> ```', '<!-- [[交换环]] -->', '````md\n```tikz {caption="[[交换环]]"}\n```\n````']) {
  assert.equal(transformMarkup(code), code);
}
// A tag's parameters are text, except those of the page's text (markdown: true), converted as it is.
assert.equal(transformMarkup('<spoiler title="[[交换环]]">', [], { tags: { spoiler: spoilerTag } }), '⟦spoiler title="[交换环](⟦wiki target=\\"交换环\\" name=\\"交换环\\"⟧)"⟧');
assert.equal(transformMarkup('<box title="[[交换环]]">', [], { tags: { box: { named: { title: {} }, render: () => '' } } }), '⟦box title="[[交换环]]"⟧');
assert.equal(transformMarkup(String.raw`\[[交换环]] \$5 \\$6`), String.raw`\[[交换环]] \$5 \\$6`);
assert.equal((transformMarkup(String.raw`\\[[交换环]]`).match(/⟦wiki /g) ?? []).length, 1);
assert.equal((transformMarkup(String.raw`\\([[不是数学]]\\)`).match(/⟦wiki /g) ?? []).length, 1);
assert.equal((transformMarkup(String.raw`[[模|$a \text{$b$ | [[t]]} c$]]`).match(/⟦wiki /g) ?? []).length, 1);
assert.throws(() => transformMarkup(String.raw`[[$\unknown$]]`), /公式无法解析/);
assert.throws(() => transformMarkup(String.raw`[[$\,$]]`), /规范化后为空/);
assert.equal(transformMarkup('[标签](https://example.com/$a$)'), '[标签](https://example.com/$a$)');
assert.equal(transformMarkup('[标签][id]\n\n[id]: /$a$'), '[标签][id]\n\n[id]: /$a$');
assert.equal(transformMarkup('[标签 [[交换环]]](https://example.com)'), '[标签 [[交换环]]](https://example.com)');
assert.equal(readMath('$a % } $ \n b$', 0).value, 'a % } $ \n b');
assert.equal(transformMarkup('@@', [(text, start) => text.startsWith('@@', start) ? { end: start + 2, output: '扩展' } : undefined]), '扩展');
// Bold between a letter and punctuation (CommonMark's flanking rules would leave its "**" as text): a space
// beside it, which postbuild takes out again next to Chinese. Only where a run could not open or close.
assert.equal(transformMarkup('文字**[[模]]**文字'), `文字 **[模](${link('模')})** 文字`);
assert.equal(transformMarkup('文字**（注）**文字，**$x$**是'), '文字 **（注）** 文字，**⟦math tex="x"⟧** 是');
assert.equal(transformMarkup('**粗体**[[模]]'), `**粗体**[模](${link('模')})`, 'a closing after a letter');
assert.equal(transformMarkup('文字**普通**文字 a ** b'), '文字**普通**文字 a ** b');
assert.equal(transformMarkup('- K2**) 证明\n\n**甲**'), '- K2**) 证明\n\n**甲**', 'a stray run');
assert.equal(transformMarkup('**甲**\n\n文字**[[模]]**'), `**甲**\n\n文字 **[模](${link('模')})**`, 'each paragraph in turn');

// A TikZ figure's caption is text of the page, a node after the fence's language.
assert.equal(transformMarkup('```tikz {caption="见 [[交换环]]"}\n\\draw;\n```'), '```tikz ⟦caption text="见 [交换环](⟦wiki target=\\"交换环\\" name=\\"交换环\\"⟧)"⟧\n\\draw;\n```');

// transformFragment: a document of its own, { markdown, nodes }; what only bananamark writes cannot be in the text.
assert.deepEqual(transformFragment('$x$ 与 [[群]]'), { markdown: '@@node:0:node@@ 与 [群](bananamark:1)', nodes: [{ type: 'math', tex: 'x', display: false }, { type: 'wiki', target: '群', name: '群', source: undefined, caption: undefined }] });
for (const text of ['@@node:0:node@@', '`@@node:x`', '[a](bananamark:0)']) {
  assert.throws(() => transformFragment(text), /bananamark 内部使用的写法/, text);
}

// bananamark/scan's readMath gives the same whatever was read before; mathReader() remembers a formula that did not
// close, for a scan from left to right (it then does not look again inside it).
{
  const text = '$a$ $b';
  const first = [scanMath(text, 4), scanMath(text, 0), scanMath('$x', 0), scanMath('$x', 0)];
  assert.deepEqual(first, [undefined, { end: 3, value: 'a', display: false }, undefined, undefined]);
  assert.deepEqual([scanMath(text, 0), scanMath(text, 4)], [first[1], undefined]);
  const read = mathReader();
  assert.deepEqual([read('$a $b$', 0), read('$a $b$', 3)], [{ end: 4, value: 'a ', display: false }, { end: 6, value: 'b', display: false }]);
}

console.log('markup: passed');
