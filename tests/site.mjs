import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';

const script = await readFile(new URL('../static/js/site.js', import.meta.url), 'utf8');
const anchorScript = script.split('// Reading controls')[0];
let height = 60, resize;
const offsets = [], scrolls = [], handlers = new Map();
const navigation = { getBoundingClientRect: () => ({ height }) };
const location = { hash: '#bib-nlab%3A%E4%B8%AD%E6%96%87' };
const document = {
  querySelector: selector => { assert.equal(selector, '.navigation'); return navigation; },
  documentElement: { style: { setProperty: (...args) => offsets.push(args) } },
  getElementById: id => {
    assert.equal(id, 'bib-nlab:中文');
    return { scrollIntoView: options => scrolls.push({ ...options }) };
  },
};
runInNewContext(anchorScript, {
  document,
  window: { location, addEventListener: (type, callback) => handlers.set(type, callback) },
  ResizeObserver: class {
    constructor(callback) { resize = callback; }
    observe(element) { assert.equal(element, navigation); }
  },
});
assert.deepEqual(offsets.at(-1), ['--anchor-offset', '76px']);
height = 100;
resize();
assert.deepEqual(offsets.at(-1), ['--anchor-offset', '116px']);
handlers.get('load')();
assert.deepEqual(scrolls, [{ block: 'start', behavior: 'instant' }]);
location.hash = '#%invalid';
assert.doesNotThrow(handlers.get('load'));
assert.equal(scrolls.length, 1);
location.hash = '';
handlers.get('load')();
assert.equal(scrolls.length, 1);
const fallback = new Map();
runInNewContext(anchorScript, { document, window: { location, addEventListener: (type, callback) => fallback.set(type, callback) } });
assert.ok(fallback.has('resize'));
runInNewContext(anchorScript, { document: { querySelector: () => null } });

const css = await readFile(new URL('../assets/scss/_base.scss', import.meta.url), 'utf8');
assert.match(css, /\.content \[id\]\s*\{\s*scroll-margin-top: var\(--anchor-offset, 8rem\)/);
assert.doesNotMatch(css, /scroll-padding-top\s*:/);
assert.match(css, /scroll-behavior: smooth/);
assert.match(css, /prefers-reduced-motion: reduce[\s\S]*scroll-behavior: auto/);
console.log('导航栏动态滚动偏移、直接锚点 URL、无效 fragment、动画与减少动态效果偏好验证通过');

// Exercise the reading controls with a small DOM fixture; the actual responsive
// layout and native fragment scrolling are also checked in a browser.
function readingFixture(hasDirectory = true) {
  const frames = [], media = new Map();
  let doc;
  const node = () => {
    const listeners = new Map(), attributes = new Map(), classes = new Set();
    return {
      hidden: true, open: false, value: '', scrollTop: 0, queries: {}, children: [],
      classList: {
        add: name => classes.add(name), remove: name => classes.delete(name),
        contains: name => classes.has(name),
        toggle: (name, enabled) => enabled ? classes.add(name) : classes.delete(name),
      },
      addEventListener(type, callback) { listeners.set(type, [...(listeners.get(type) ?? []), callback]); },
      emit(type, event = {}) { for (const callback of listeners.get(type) ?? []) callback(event); },
      querySelector(selector) { return this.queries[selector] ?? null; },
      querySelectorAll() { return this.children; },
      append(child) {
        if (child.parent) child.parent.children = child.parent.children.filter(item => item !== child);
        child.parent = this; this.children.push(child);
      },
      contains(child) { for (let item = child; item; item = item.parent) if (item === this) return true; return false; },
      dispatchEvent(event) { this.emit(event.type, event); },
      setAttribute(name, value) { attributes.set(name, value); },
      getAttribute(name) { return attributes.get(name); },
      removeAttribute(name) { attributes.delete(name); },
      focus() { doc.activeElement = this; },
      blur() { if (doc.activeElement === this) doc.activeElement = null; },
      closest(selector) { return selector === 'a' ? this : this.branch ?? null; },
      getBoundingClientRect: () => ({ top: 100, bottom: 400, height: 60 }),
    };
  };
  const navbar = node(), details = node(), summary = node(), directory = node(), panel = node();
  const toggle = node(), menu = node(), menuSummary = node(), search = node(), input = node();
  const searchToggle = node(), back = node(), clear = node(), searchPanel = node(), searchAll = node();
  const pageClasses = node().classList, visits = [];
  const headings = [node(), node(), node()], links = [node(), node(), node()];
  const win = node();
  Object.assign(win, {
    innerHeight: 800, scrollY: 0, location: { hash: '', assign: url => visits.push(url) },
    requestAnimationFrame: callback => frames.push(callback),
    matchMedia(query) {
      if (!media.has(query)) media.set(query, Object.assign(node(), { matches: query.includes('max-width') }));
      return media.get(query);
    },
  });
  navbar.getBoundingClientRect = () => ({ height: 60 });
  summary.getBoundingClientRect = () => ({ bottom: 440 - win.scrollY });
  headings.forEach((heading, index) => {
    heading.getBoundingClientRect = () => ({ top: [600, 1200, 2100][index] - win.scrollY });
    links[index].hash = `#${encodeURIComponent(['第一节', '小节', '第二节'][index])}`;
    directory.append(links[index]);
  });
  navbar.queries = { '.header-toc-button': hasDirectory ? toggle : null, '.navigation-menu': menu,
    '.site-search': search, '.search-toggle': searchToggle, '.search-back': back, '.search-clear': clear };
  search.queries = { input, '.search-panel': searchPanel };
  searchPanel.queries = { '.search-all': searchAll };
  searchPanel.style = { setProperty() {} };
  searchAll.getAttribute = () => '/search/';
  details.queries = { summary };
  menu.queries = { summary: menuSummary };
  details.append(summary); details.append(directory);
  for (const child of [input, back, clear, searchPanel]) search.append(child);
  for (const child of [toggle, search, searchToggle, menu, panel]) navbar.append(child);
  doc = Object.assign(node(), {
    activeElement: null,
    documentElement: { scrollHeight: 3000, style: { setProperty() {} }, classList: pageClasses },
    querySelector: selector => ({ '.navigation': navbar, '.toc-disclosure': hasDirectory ? details : null, '.page > article': null })[selector],
    getElementById: id => ({ TableOfContents: hasDirectory ? directory : null,
      'header-toc-panel': hasDirectory ? panel : null,
      '第一节': headings[0], '小节': headings[1], '第二节': headings[2] })[id],
  });
  // The second heading belongs to a nested section which may be collapsed.
  const ancestor = node(), branch = node();
  ancestor.parent = directory; ancestor.parentElement = directory;
  branch.parent = ancestor; branch.parentElement = ancestor; ancestor.branch = ancestor;
  links[1].branch = branch;
  const flush = () => { while (frames.length) frames.shift()(); };
  runInNewContext(script, { document: doc, window: win, Event: class { constructor(type) { this.type = type; } } });
  flush();
  return { doc, win, navbar, details, directory, panel, toggle, menu, search, input, searchToggle, back, clear, pageClasses, visits, headings, links, media, flush, branch, ancestor };
}

const reading = readingFixture();
const { doc, win, navbar, details, directory, panel, toggle, menu, search, input, searchToggle, back, clear, pageClasses, visits, headings, links, media, flush } = reading;
assert.equal(details.open, false);
assert.equal(toggle.classList.contains('is-visible'), false);
win.scrollY = 700; win.emit('scroll'); flush();
assert.equal(toggle.classList.contains('is-visible'), true);
assert.equal(links[0].getAttribute('aria-current'), 'location');
win.scrollY = 900; win.emit('scroll'); flush();
assert.equal(links[0].getAttribute('aria-current'), 'location', '长节中应持续高亮');
win.scrollY = 1200; win.emit('scroll'); flush();
assert.equal(links[0].getAttribute('aria-current'), undefined);
assert.equal(links[1].getAttribute('aria-current'), 'location');
assert.equal(reading.branch.open, true, '当前小节的折叠节点应自动展开');
assert.equal(reading.ancestor.open, true, '当前小节的所有祖先应自动展开');
reading.branch.open = false; reading.ancestor.open = false;
win.emit('scroll'); flush();
assert.equal(reading.branch.open, false, '高亮不变时应尊重手动折叠');
toggle.emit('click');
assert.equal(directory.parent, panel);
assert.equal(doc.activeElement, links[1]);
directory.emit('click', { target: links[2], button: 0, ctrlKey: true });
assert.equal(panel.hidden, false, '修饰键点击应保留原生链接行为');
directory.emit('click', { target: links[2], button: 0 });
assert.equal(panel.hidden, true);
assert.equal(directory.parent, details);
assert.equal(doc.activeElement, headings[2]);
toggle.emit('click');
doc.emit('keydown', { key: 'Escape', preventDefault() {} });
assert.equal(panel.hidden, true);
assert.equal(doc.activeElement, toggle);
toggle.emit('click');
menu.open = true; menu.emit('toggle');
assert.equal(panel.hidden, true, '菜单和目录不应同时展开');
searchToggle.emit('click');
assert.equal(menu.open, false);
assert.equal(navbar.classList.contains('is-searching'), true);
assert.equal(search.classList.contains('is-open'), true);
assert.equal(pageClasses.contains('search-locked'), true, '全屏搜索应锁定页面滚动');
assert.equal(doc.activeElement, input);
let cleared = false;
input.addEventListener('input', () => { cleared = input.value === ''; });
input.value = 'cohomology'; clear.emit('click');
assert.equal(input.value, '');
assert.equal(cleared, true, '清空后应更新结果');
let prevented = false;
input.emit('keydown', { key: 'Enter', preventDefault() { prevented = true; } });
assert.equal(prevented, true, '空查询不应提交');
assert.deepEqual(visits, []);
input.value = ' 上同调 ';
input.emit('keydown', { key: 'Enter', preventDefault() {} });
assert.deepEqual(visits, [`/search/?q=${encodeURIComponent('上同调')}`], '结果脚本加载前 Enter 进入结果页');
doc.emit('keydown', { key: 'Escape', preventDefault() {} });
assert.equal(navbar.classList.contains('is-searching'), false);
assert.equal(search.classList.contains('is-open'), false);
assert.equal(pageClasses.contains('search-locked'), false);
assert.equal(doc.activeElement, searchToggle);
assert.equal(win.scrollY, 1200, '搜索退出不应改变阅读位置');
searchToggle.emit('click');
reading.search.emit('focusout', { relatedTarget: headings[0] });
assert.equal(navbar.classList.contains('is-searching'), false, '搜索失去焦点后应恢复顶栏');
toggle.emit('click');
const wideLayout = media.get('(min-width: 1100px)');
wideLayout.matches = true; wideLayout.emit('change'); flush();
assert.equal(details.open, true);
assert.equal(panel.hidden, true);
assert.equal(directory.parent, details);
assert.equal(toggle.classList.contains('is-visible'), false);
const withoutDirectory = readingFixture(false);
withoutDirectory.searchToggle.emit('click');
withoutDirectory.back.emit('click');
assert.equal(withoutDirectory.navbar.classList.contains('is-searching'), false);
console.log('目录滚动高亮、浮层迁移、原生链接、互斥面板、键盘焦点、手机全屏搜索及无目录页面验证通过');

// The missing-article page fills in the name after the typography pass, so it
// applies the curly-quote spacing itself.
const missingScript = await readFile(new URL('../static/js/missing.js', import.meta.url), 'utf8');
function missingPage(search, before = '', after = '目前还没有内容．') {
  const previous = { nodeType: 3, data: before }, next = { nodeType: 3, data: after };
  const name = { textContent: '你访问的条目', previousSibling: before ? previous : null, nextSibling: next,
    dataset: { nameFormat: '“{name}”', titleFormat: '{name}：条目尚未创建' } };
  const doc = { title: '', getElementById: id => id === 'missing-name' ? name : null, querySelectorAll: () => [] };
  runInNewContext(missingScript, { document: doc, window: { location: { search } }, URLSearchParams });
  return { text: `${previous.data}${name.textContent}${next.data}`, title: doc.title };
}
assert.deepEqual(missingPage('?title=上同调'), { text: '“上同调” 目前还没有内容．', title: '上同调：条目尚未创建' });
assert.equal(missingPage('?title=上同调', '关于').text, '关于 “上同调” 目前还没有内容．');
assert.equal(missingPage('?title=%24%26', '', ', see').text, '“$&”, see');
assert.equal(missingPage('').text, '你访问的条目目前还没有内容．');
console.log('缺失条目名称的引号间距验证通过');
