import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { setTimeout as sleep } from 'node:timers/promises';
import { renderDocument } from 'bananamark';
import { JSDOM } from 'jsdom';
import { siteSyntax } from '../scripts/shared/syntax.mjs';

// site/scripts/link-preview.js on the site's markup: what a reference, a citation, a footnote's mark and a wiki link
// preview, and which links have none. jsdom has no popovers and no layout: showPopover and hidePopover are stubbed, positions are zero.
const script = await readFile(new URL('../site/scripts/link-preview.js', import.meta.url), 'utf8');
const articles = { 甲: '/wiki/%E7%94%B2/', 乙: '/wiki/%E4%B9%99/', 戊: '/wiki/%E6%88%8A/' };
const render = source => renderDocument(source, {
  ...siteSyntax, lang: 'zh-cn',
  resolveWikiLink: target => articles[target] ? { url: articles[target] } : undefined,
}).html;

const body = render(`[[乙]]、[[丙]]、[[戊]]与[[甲]]．[^1]

::: theorem [Lagrange] {@thm:a}
设 $G$ 是有限群．
:::

前文．

\`\`\`math {@eq:a}
x = 1
\`\`\`

后文．

1. 甲
2. {@item:b} 乙

## 节 {@sec:a}

见 @thm:a、@eq:a、@item:b、@sec:a、[@serre]．

\`\`\`bibliography
serre:
  type: book
  author: Serre, Jean-Pierre
  title: Cours d'arithmétique
  year: 1970
\`\`\`

[^1]: 脚注．

    第二段．`);

// 乙: a convention, a notice and the redirect line before its opening, and a person's annotations, a link and a
// footnote's mark in it; a theorem with a link and a diagram, whose ids this page's diagram shares, in a font this page
// does not declare.
const fontFace = font => `@font-face{font-family:tikzjax-${font};src:url("../../fonts/tikzjax/${font}.ttf") format("truetype")}`;
const other = `<!doctype html><html><head><meta property="article:section" content="wiki"><style data-tikz-fonts>${fontFace('cmmi10')}${fontFace('cmr10')}</style></head><body><main class="content"><article>
<header><h1 class="title" id="page-title"><a class="title-link" href="/wiki/%E4%B9%99/">乙 $n$</a></h1></header>
<p id="redirect-source" class="redirect-source" hidden>跳转自：</p>
<div class="bm-env bm-envgroup-remark bm-env-convention"><p class="bm-envtitle">约定</p><div class="bm-envcontent"><p>环都交换．</p></div></div>
<aside class="notice notice-problems"><p>本条目有问题．</p></aside>
<p><strong>乙</strong><span class="person-annotations">（1900–1990）</span>是一种<a href="../%E4%B8%81/" class="bm-wiki-link">丁</a><sup id="fnref:1"><a href="#fn:1" class="bm-footnote-ref" role="doc-noteref">1</a></sup>．</p>
<p>第二段．</p>
<h2 id="定义">定义</h2>
<p>正文．</p>
<div class="bm-env bm-envgroup-theorem bm-env-theorem" id="thm:b"><p class="bm-envtitle">定理 1</p><div class="bm-envcontent"><p><a href="../%E4%B8%81/" class="bm-wiki-link">丁</a>的<a href="#fn:1">注</a>，图：<svg><defs><path id="tikz-1-g0" d=""/></defs><use href="#tikz-1-g0"/></svg></p></div></div>
</article></main></body></html>`;

// 戊: an article whose opening stops short of the end of a sentence.
const short = `<!doctype html><html><body><main class="content"><article>
<p>戊有以下几种：</p>
</article></main></body></html>`;

const dom = new JSDOM(`<!doctype html><html><head><style data-tikz-fonts>${fontFace('cmmi10')}</style><script type="module" src="/js/link-preview.js" data-go-to-article="前往条目"></script></head><body><main class="content"><article>
<header><h1 class="title" id="page-title"><a class="title-link" href="/wiki/%E7%94%B2/">甲</a></h1></header>
${body}
<p><a class="bm-reference" href="/wiki/%E4%B9%99/#thm:b">定理 1</a>，<a class="bm-reference" href="/wiki/%E4%B9%99/#nowhere">没有</a></p>
<p><svg><defs><path id="tikz-1-g0" d=""/></defs><use href="#tikz-1-g0"/></svg></p>
<nav class="navbox"><a class="bm-wiki-link" href="/wiki/%E4%B9%99/">乙</a></nav>
</article></main></body></html>`, { url: 'https://banana.test/wiki/%E7%94%B2/', runScripts: 'outside-only' });
const { window } = dom, { document } = window;

let open = false;
window.HTMLElement.prototype.showPopover = function () { open = true; };
window.HTMLElement.prototype.hidePopover = function () { open = false; };
const fetched = [];
const served = { [articles.乙]: other, [articles.戊]: short };
window.fetch = async path => {
  fetched.push(path);
  return { ok: Object.hasOwn(served, path), url: `https://banana.test${path}`, headers: { get: name => name === 'content-type' ? 'text/html; charset=utf-8' : null }, text: async () => served[path] };
};
window.eval(script);

const pointer = (type, target, fields = {}) => {
  const event = new window.MouseEvent(type, { bubbles: true, ...fields });
  Object.defineProperty(event, 'pointerType', { value: fields.pointerType ?? 'mouse' });
  target.dispatchEvent(event);
};
const popover = () => document.querySelector('.link-preview');
/** The preview a link shows after the pointer rests on it, or null; the pointer then leaves, and the preview closes. */
async function hover(link, pointerType) {
  pointer('pointerover', link, { pointerType });
  await sleep(500);
  const shown = open ? popover().firstChild.cloneNode(true) : null;
  pointer('pointerout', link, { pointerType, relatedTarget: document.body });
  await sleep(300);
  assert.equal(open, false, 'leaving the link closes its preview');
  return shown;
}
const link = selector => {
  const found = document.querySelector(selector);
  assert.ok(found, selector);
  return found;
};

// A theorem: the environment as on the page, without its id; the preview stands in the article.
const theorem = await hover(link('a.bm-reference[href="#thm:a"]'));
assert.equal(theorem.firstElementChild.className, 'bm-env bm-envgroup-theorem bm-env-theorem');
assert.match(theorem.querySelector('.bm-envtitle').textContent, /^定理 \d+.*Lagrange/);
assert.equal(theorem.querySelectorAll('[id]').length, 0, 'no ids repeated');
assert.equal(popover().parentElement.tagName, 'ARTICLE');
assert.equal(popover().dataset.kind, 'reference');

// A display formula, between the paragraphs around it; a list item, in a list numbered as on the page.
const formula = await hover(link('a.bm-reference[href="#eq:a"]'));
const context = formula.querySelector(':scope > .link-preview-context');
assert.deepEqual(Array.from(context.children, child => child.matches('.bm-math-display.link-preview-target') ? '公式' : child.textContent), ['前文．', '公式', '后文．']);
const item = await hover(link('a.bm-reference[href="#item:b"]'));
assert.deepEqual([item.firstElementChild.tagName, item.firstElementChild.className, item.firstElementChild.getAttribute('start')], ['OL', 'link-preview-item', '2']);
assert.equal(item.textContent.trim(), '乙');

// A citation: the entry, in a bibliography for its styles.
const citation = await hover(link('a.bm-citation'));
assert.ok(citation.querySelector(':scope > .bm-bibliography > .bm-bibliography-entry'));
assert.match(citation.textContent, /Serre, Jean-Pierre \(1970\)\. Cours d’arithmétique/);

// A footnote's mark: the footnote's text, without the link back.
const footnote = await hover(link('a.bm-footnote-ref'));
assert.deepEqual(Array.from(footnote.querySelectorAll(':scope > .link-preview-footnote > p'), paragraph => paragraph.textContent), ['脚注．', '第二段．']);

// A wiki link: the article's opening, without the title, the convention, the notice, the redirect line, the
// person's annotations and the footnote's mark, its own links made text, ending a sentence, so not faded; and "go to
// the article" under it: one link to the article. Fetched once. In a navigation box too.
assert.equal(fetched.length, 0, 'nothing fetched for this page\'s targets');
const article = await hover(link('a.bm-wiki-link[href="/wiki/%E4%B9%99/"]'));
const area = article.querySelector(':scope > a.link-preview-article');
assert.equal(area.getAttribute('href'), '/wiki/%E4%B9%99/');
assert.deepEqual(Array.from(area.querySelector(':scope > .link-preview-excerpt').children, child => child.textContent.trim()), ['乙是一种丁．', '第二段．']);
assert.equal(area.querySelector(':scope > .link-preview-more').textContent, '前往条目');
assert.equal(area.querySelector('.link-preview-excerpt').classList.contains('is-faded'), false);
assert.equal(area.querySelectorAll('a').length, 0, 'no links in it');
assert.equal((await hover(link('.navbox a'))).textContent, article.textContent);

// A reference to another page: copied from it, its links pointing where they did there, its diagram's ids renamed
// with their references, so as not to meet this page's.
const remote = await hover(link('a.bm-reference[href="/wiki/%E4%B9%99/#thm:b"]'));
assert.deepEqual(Array.from(remote.querySelectorAll('p a'), anchor => anchor.getAttribute('href')), ['/wiki/%E4%B8%81/', '/wiki/%E4%B9%99/#fn:1']);
const [path] = remote.querySelectorAll('path');
assert.match(path.id, /^link-preview-\d+-tikz-1-g0$/);
assert.equal(remote.querySelector('use').getAttribute('href'), `#${path.id}`);
assert.deepEqual(fetched, [articles.乙], 'the page fetched once');
// The diagram's font that this page lacks is declared, at its address from that page.
assert.deepEqual(Array.from(document.querySelectorAll('head style'), style => style.textContent),
  [fontFace('cmmi10'), '@font-face{font-family:tikzjax-cmr10;src:url("https://banana.test/fonts/tikzjax/cmr10.ttf") format("truetype")}']);

// An opening stopping short of the end of a sentence: faded.
const unfinished = await hover(link('a.bm-wiki-link[href="/wiki/%E6%88%8A/"]'));
assert.ok(unfinished.querySelector('.link-preview-excerpt').classList.contains('is-faded'));

// No preview: a heading's reference, a missing target, a missing article, this page, touch.
for (const [selector, pointerType] of [
  ['a.bm-reference[href="#%E8%8A%82"]'], ['a.bm-reference[href$="#nowhere"]'],
  ['a.bm-wiki-link-missing'], ['a.bm-wiki-link[href="/wiki/%E7%94%B2/"]'],
  ['a.bm-reference[href="#thm:a"]', 'touch'],
]) assert.equal(await hover(link(selector), pointerType), null, `${selector} ${pointerType ?? ''}`);

// The pointer moving into the preview keeps it; Escape closes it.
pointer('pointerover', link('a.bm-citation'));
await sleep(500);
pointer('pointerout', link('a.bm-citation'), { relatedTarget: popover().firstChild });
pointer('pointerover', popover().firstChild, { relatedTarget: link('a.bm-citation') });
await sleep(400);
assert.equal(open, true, 'kept while the pointer is in it');
document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
assert.equal(open, false, 'Escape closes it');

