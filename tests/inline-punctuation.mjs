import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { renderDocument } from 'bananamark';
import { JSDOM } from 'jsdom';

// site/scripts/inline-punctuation.js on the site's markup: closing punctuation after an inline diagram or an external
// link's icon is grouped with it; after a formula, bananamark has kept it with the formula already (span.bm-math-end),
// and the script leaves it alone.
const script = await readFile(new URL('../site/scripts/inline-punctuation.js', import.meta.url), 'utf8');
const icon = '<svg class="ui-icon link-icon icon-external" aria-hidden="true"></svg>';
const formulas = renderDocument('设 $a = b + c$，则 $n$’s 文字', { lang: 'zh-cn' }).html;
const dom = new JSDOM(`${formulas}
<p>图 <span class="bm-math-rendered bm-tikz-rendered"><span class="bm-tikz-body"><svg></svg></span></span>，见 <a class="external-link" href="https://example.org/">某个 网站${icon}</a>．</p>`, { runScripts: 'outside-only' });
dom.window.eval(script);
const { document } = dom.window;
const [first, second] = document.querySelectorAll('p');

// Formulas: bananamark's, as they were.
assert.equal(first.querySelector('.bm-math-end').lastChild.data, '，', 'bananamark kept the punctuation with the formula');
assert.equal(first.querySelectorAll('.inline-punctuation').length, 0, 'formulas are left alone');

const [diagram, link] = second.querySelectorAll('.inline-punctuation');
assert.deepEqual([diagram.firstElementChild.classList.contains('bm-tikz-rendered'), diagram.lastChild.data], [true, '，'], 'a diagram grouped with its punctuation');
assert.deepEqual([link.firstElementChild.tagName, link.lastChild.data], ['A', '．'], 'a link grouped with its punctuation');
assert.equal(link.querySelector('.external-link-label').textContent, '某个 ', 'the link\'s last word goes with its icon');
// Run again: nothing more.
dom.window.eval(script);
assert.equal(document.querySelectorAll('.inline-punctuation').length, 2);
