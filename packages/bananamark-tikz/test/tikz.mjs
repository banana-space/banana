import assert from 'node:assert/strict';
import { mkdtemp, readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { JSDOM } from 'jsdom';
import { BananamarkError, createProcessor } from 'bananamark';
import { sharedTikzWorker, tikz } from 'bananamark-tikz';
import { splitTag } from '../src/compiler.mjs';
import { preambleFor } from '../src/preamble.mjs';
import zh from '../src/messages/zh-cn.mjs';
import en from '../src/messages/en.mjs';
import { readFileSync } from 'node:fs';

// This package's messages: every one the code uses, in both languages with the same values.
{
  const code = readFileSync(new URL('../src/index.mjs', import.meta.url), 'utf8');
  const used = new Set([...code.matchAll(/'(tikz_\w+)'/g)].map(match => match[1]));
  assert.deepEqual([...used].sort(), ['tikz_failed', 'tikz_timeout', 'tikz_total_timeout', 'tikz_worker_exit']);
  for (const key of used) assert.ok(zh[key] && en[key], key);
  assert.deepEqual(Object.keys(zh).sort(), Object.keys(en).sort());
  const values = template => [...template.matchAll(/\{([a-z][A-Za-z0-9]*)\}/g)].map(match => match[1]).sort();
  for (const key of Object.keys(zh)) assert.deepEqual(values(en[key]), values(zh[key]), key);
}

assert.ok(preambleFor('\\usetikzlibrary{calc, arrows.meta}\n\\begin{tikzpicture}\\end{tikzpicture}')
  .includes('\\usetikzlibrary{calc, arrows.meta}'), 'TikZ libraries load in the preamble, outside the diagram box');
assert.deepEqual(splitTag(String.raw`x \tag{2.1}`), { tex: 'x ', tag: '(2.1)' });
assert.equal(splitTag(String.raw`x \tag*{\text{甲}}`).tag, String.raw`\text{甲}`);
assert.equal(splitTag('x % \\tag{ignored}\n').tag, undefined);
assert.equal(splitTag(String.raw`\text{\tag{inside}}`).tag, undefined);
assert.throws(() => splitTag(String.raw`x \tag{1} \tag{2}`), /one outer/);
assert.throws(() => splitTag(String.raw`x \tag{1`), /Unclosed/);

// Compiled diagrams are kept between runs (each takes a second or so); those that must be compiled are new each run.
const cache = join(tmpdir(), 'bananamark-tikz-test-cache');
const scratch = await mkdtemp(join(tmpdir(), 'bananamark-tikz-'));
// Errors in Chinese here (English by default, below).
const diagrams = (options = {}) => tikz({ cache, fonts: { directory: join(scratch, 'fonts') }, locale: 'zh-cn', ...options });
const renderer = diagrams();
const escape = value => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const placeholder = (tex, display = true) => `<html><head></head><body><span class="bm-math-rendered bm-tikz-source" data-tex="${escape(tex)}" data-display="${display}"></span></body></html>`;
// DVI text coordinates live inside nested SVG transforms. Compare the final
// glyph position with the formula baseline, rather than its local y value.
function glyphBaseline(node) {
  let x = Number(node.getAttribute('x')), y = Number(node.getAttribute('y'));
  for (let parent = node; parent.localName !== 'svg'; parent = parent.parentElement) {
    const transforms = [...(parent.getAttribute('transform') ?? '').matchAll(/(translate|scale|matrix)\(([^)]+)\)/g)];
    for (const [, kind, args] of transforms.reverse()) {
      const values = args.split(/[ ,]+/).map(Number);
      if (kind === 'translate') { x += values[0]; y += values[1] ?? 0; }
      else if (kind === 'scale') { x *= values[0]; y *= values[1] ?? values[0]; }
      else {
        const [a, b, c, d, e, f] = values;
        [x, y] = [a * x + c * y + e, b * x + d * y + f];
      }
    }
  }
  return y;
}
try {
  await assert.rejects(renderer.render(placeholder(String.raw`\undefinedBananaCommand\begin{tikzcd} A & B \end{tikzcd}`), { outputPath: join(scratch, 'bad.html') }), /bad.html.*TikZ 编译失败.*Undefined control sequence/s);
  const good = await renderer.render(placeholder(String.raw`\begin{tikzcd} A \arrow[r] & B \end{tikzcd}`), { outputPath: join(scratch, 'good.html') });
  assert.match(good, /bm-tikz-rendered/, 'A failed compilation does not poison the next drawing');
  // A TeX error is remembered: the same diagram fails at once, also for another renderer.
  const again = diagrams(), start = performance.now();
  await assert.rejects(again.render(placeholder(String.raw`\undefinedBananaCommand\begin{tikzcd} A & B \end{tikzcd}`), { outputPath: join(scratch, 'bad.html') }), /Undefined control sequence/);
  assert.ok(performance.now() - start < 100, 'A remembered failure is not compiled again');
  await again.close();
  const word = await renderer.render(placeholder(String.raw`\text{商群}`), { outputPath: join(scratch, 'word.html') });
  assert.ok(Math.abs(parseFloat(new JSDOM(word).window.document.querySelector('svg').getAttribute('width')) * 1.1 - 2) < .001,
    'Adjacent CJK boxes must occupy prose ems without accidental TeX whitespace');
  for (const tex of [
    String.raw`\begin{tikzcd} A \arrow[r,"f",bend left] & A \end{tikzcd}`,
    String.raw`\begin{tikzcd} & A \arrow[r] & A \end{tikzcd}`,
    String.raw`\begin{tikzcd} A & \end{tikzcd}`,
    String.raw`\begin{tikzcd} 中 \arrow[r,"同态"] & 中 \end{tikzcd}`,
    String.raw`\begin{tikzcd} A \end{tikzcd} + \begin{tikzcd} A \end{tikzcd}`,
  ]) {
    const inline = await renderer.render(placeholder(tex, false), { outputPath: join(scratch, 'inline.html') });
    const svg = new JSDOM(inline).window.document.querySelector('svg');
    const [, minY, , height] = svg.getAttribute('viewBox').split(/\s+/).map(Number);
    const depth = -Number(svg.getAttribute('style').match(/vertical-align: ([\d.-]+)em/)[1]) * 10;
    const baseline = minY + height - depth;
    const cells = [...svg.querySelectorAll('text')].filter(node => ['A', '中'].includes(node.textContent));
    assert.ok(cells.length > 0);
    assert.ok(cells.every(node => Math.abs(glyphBaseline(node) - baseline) < .001),
      `Single-row inline cells align to the formula baseline: ${tex}`);
  }
  const multi = String.raw`\begin{tikzcd} A \arrow[d] \\ A \end{tikzcd}`;
  const multiInline = new JSDOM(await renderer.render(placeholder(multi, false), { outputPath: join(scratch, 'multi-inline.html') })).window.document.querySelector('svg');
  const multiDisplay = new JSDOM(await renderer.render(placeholder(multi), { outputPath: join(scratch, 'multi-display.html') })).window.document.querySelector('svg');
  for (const attribute of ['viewBox', 'width', 'height', 'style']) {
    assert.equal(multiInline.getAttribute(attribute), multiDisplay.getAttribute(attribute), 'Multi-row diagrams retain native centring');
  }
} finally { await renderer.close(); }
const limited = diagrams({ timeout: 750 });
try {
  await assert.rejects(limited.render(placeholder(String.raw`\def\BananaForever{\BananaForever}\BananaForever\begin{tikzcd} A & B \end{tikzcd}`), { outputPath: join(scratch, 'loop.html') }), /超过/);
} finally { await limited.close(); }
// A preview's diagrams share a budget: once it is spent, the rest fail rather than wait.
const budgeted = diagrams({ totalTimeout: 750 });
try {
  await assert.rejects(budgeted.render(placeholder(String.raw`\def\BananaForever{\BananaForever}\BananaForever\begin{tikzcd} A & C \end{tikzcd}`), { outputPath: join(scratch, 'budget.html') }), /太多或太复杂/);
  await assert.rejects(budgeted.render(placeholder(String.raw`\begin{tikzcd} A & D_{${Date.now()}} \end{tikzcd}`), { outputPath: join(scratch, 'budget.html') }), /太多或太复杂/);
} finally { await budgeted.close(); }
// Fonts: copied beside the pages, with their licence; a page refers to them by its own path (or fonts.href).
{
  const fonts = await readdir(join(scratch, 'fonts'));
  assert.ok(fonts.includes('LICENCE') && fonts.some(name => name.endsWith('.ttf')), 'Fonts and their licence are copied');
  const nested = diagrams();
  const page = await nested.render(placeholder(String.raw`\begin{tikzcd} 甲 \arrow[r] & B \end{tikzcd}`), { outputPath: join(scratch, 'a/b/index.html') });
  await nested.close();
  assert.match(page, /@font-face\{font-family:tikzjax-[a-z0-9]+;src:url\("\.\.\/\.\.\/fonts\/[a-z0-9]+\.ttf"\)/, 'Font addresses start from the page');
  const elsewhere = tikz({ cache, fonts: { href: font => `/static/${font}.ttf` } });
  assert.match(await elsewhere.render(placeholder(String.raw`\begin{tikzcd} 甲 \arrow[r] & B \end{tikzcd}`)), /src:url\("\/static\/[a-z0-9]+\.ttf"\)/, 'fonts.href');
  // A body without <head> (what a processor's plugin gets): the rules come first.
  const body = await elsewhere.render(placeholder(String.raw`\begin{tikzcd} 甲 \arrow[r] & B \end{tikzcd}`).replace(/^.*<body>|<\/body>.*$/g, ''));
  assert.match(body, /^<style data-tikz-fonts>@font-face/, 'fonts in a body');
  await elsewhere.close();
}
// Errors in the locale asked for.
{
  const english = tikz({ cache, fonts: { directory: join(scratch, 'fonts') }, locale: 'en' });
  await assert.rejects(english.render(placeholder(String.raw`\undefinedBananaCommand\begin{tikzcd} A & B \end{tikzcd}`), { file: 'bad.html' }), /bad\.html: TikZ compilation failed/);
  await english.close();
}
// A locale of the caller's: its messages, English where it has none; errors are bananamark's, with code and cause.
{
  const bad = placeholder(String.raw`\undefinedBananaCommand\begin{tikzcd} A & B \end{tikzcd}`);
  const german = tikz({ cache, locale: 'de', messages: { de: { tikz_failed: 'TikZ-Fehler: {message}' } } });
  await assert.rejects(german.render(bad, { file: 'bad.md' }), error => error instanceof BananamarkError && error.code === 'tikz_failed' && error.file === 'bad.md'
    && /^bad\.md: TikZ-Fehler: .*Undefined control sequence/s.test(error.message) && error.cause instanceof Error);
  await german.close();
  const french = tikz({ cache, locale: 'fr', messages: { fr: {} } });
  await assert.rejects(french.render(bad, { file: 'bad.md' }), /^BananamarkError: bad\.md: TikZ compilation failed/);
  await french.close();
  // Without a locale of its own, the page's (a processor's plugins get the processor's locale and messages).
  const plain = tikz({ cache });
  await assert.rejects(plain.render(bad, { file: 'bad.md', locale: 'zh-cn' }), /bad\.md: TikZ 编译失败/);
  await assert.rejects(plain.render(bad, { file: 'bad.md', locale: 'de', messages: { de: { tikz_failed: 'Fehler' } } }), /bad\.md: Fehler$/);
  const processor = createProcessor({ tikz: true, locale: 'zh-cn', plugins: [plain] });
  await assert.rejects(processor.renderAsync('```tikz\n\\undefinedBananaCommand\\begin{tikzpicture}\\end{tikzpicture}\n```\n', { file: 'p.md', outputPath: join(scratch, 'p.html') }), /^BananamarkError: p\.md: TikZ 编译失败/);
  await processor.close();
}
// A processor's plugin: renderAsync renders the page, then the diagrams.
{
  const plugin = diagrams();
  const processor = createProcessor({ tikz: true, plugins: [plugin] });
  const page = await processor.renderAsync('```tikz\n\\begin{tikzpicture}\\draw (0,0) -- (1,1);\\end{tikzpicture}\n```\n', { outputPath: join(scratch, 'plugin.html') });
  assert.match(page.html, /class="bm-math-rendered bm-math-display bm-tikz-rendered"[^>]*><span class="bm-tikz-body"><svg/);
  assert.throws(() => processor.render('正文'), /plugins \(tikz\), which run only in renderAsync/, 'render() would leave the placeholders');
  assert.throws(() => processor.book().render({}), /renderAsync/);
  await processor.close();
}
// Instances with workerIdleTimeout share one worker, stopped once it has idled that long. The diagrams are new
// each run, so that they are compiled rather than read from the cache.
const run = Date.now().toString(36);
try {
  const first = diagrams({ workerIdleTimeout: 400 });
  await first.render(placeholder(String.raw`\begin{tikzcd} A \arrow[r] & C_{${run}} \end{tikzcd}`), { outputPath: join(scratch, 'shared.html') });
  const worker = sharedTikzWorker();
  assert.ok(worker);
  await first.close();
  const second = diagrams({ workerIdleTimeout: 400 });
  await second.render(placeholder(String.raw`\begin{tikzcd} A \arrow[d] \\ C_{${run}} \end{tikzcd}`), { outputPath: join(scratch, 'shared.html') });
  assert.equal(sharedTikzWorker(), worker, 'The next instance reuses the worker');
  await second.close();
  await new Promise(resolve => setTimeout(resolve, 700));
  assert.equal(sharedTikzWorker(), undefined, 'An idle shared worker stops');
} finally { await rm(scratch, { recursive: true, force: true }); }
console.log('tikz: passed');
