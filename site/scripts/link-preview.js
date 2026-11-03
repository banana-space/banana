// Previews of the body's links, shown while the pointer rests on one or the keyboard focuses it: a reference shows the
// environment, list item or display formula (between the paragraphs around it) it names; a citation, its bibliography
// entry; a footnote's mark, the footnote; a wiki link, the article's opening, which links to the article as a whole
// (as Wikipedia's page previews do). A target on this page is copied from it;
// one on another page (a book's other pages, articles) is copied from that page, fetched once, which also has it ready
// for a click. Touch shows none: a tap follows the link. The preview is a popover (in the top layer) inside the link's
// article, so that the article's styles apply to it, with a wedge pointing at the link.

const links = 'a.bm-reference, a.bm-citation, a.bm-footnote-ref, a.bm-wiki-link:not(.bm-wiki-link-missing)';
// Links that navigate rather than read on: the contents, the footer; and the preview's own.
const elsewhere = '.toc-shell, .article-footer, .collection-sidebar, .collection-footer, .link-preview';
// The blocks of text a wiki link's preview shows, and that stand around a formula.
const prose = 'p:not([class]), ul, ol, blockquote, .bm-math-display';
// Articles are full of wiki links, so a pointer passing over them waits longer before showing one.
const delays = { reference: 250, wiki: 400, close: 250 };
// gap: between the link and the panel, room for the wedge; inset: the least distance from the wedge to the panel's
// ends, clear of its rounded corners.
const margin = 16, gap = 8, inset = 24;
// The lines of a formula's context shown on each side of it.
const contextLines = 3.5;
// The interface's text (data/messages.yaml), given on the script's element.
const goToArticle = document.querySelector('script[data-go-to-article]')?.dataset.goToArticle ?? '';
// The end of a sentence: a full stop, an exclamation or a question mark or an ellipsis, and the closing quotation
// marks and brackets after it.
const sentenceEnd = /[。．.！!？?…][”’"'）)」』】\]]*$/u;

/** What a link previews: a wiki link, a citation, a footnote or (a reference) a numbered target. */
const kindOf = link => link.matches('.bm-wiki-link') ? 'wiki' : link.matches('.bm-citation') ? 'citation'
  : link.matches('.bm-footnote-ref') ? 'footnote' : 'reference';

/** The address of a page as compared: decoded, since the same page may be written with either case of escapes. */
function decodedPath(url) {
  try { return decodeURI(url.pathname); }
  catch { return url.pathname; }
}

// Pages fetched for previews, by path: { document, url } (url: the address the page came from, after redirects).
const pages = new Map();
function fetchPage(url) {
  const path = url.pathname;
  if (!pages.has(path)) {
    pages.set(path, fetch(path, { credentials: 'same-origin' }).then(async response => {
      if (!response.ok || !response.headers.get('content-type')?.includes('text/html')) return null;
      return { document: new DOMParser().parseFromString(await response.text(), 'text/html'), url: response.url };
    }).catch(() => null).then(page => {
      if (!page) pages.delete(path); // Tried again on the next hover.
      return page;
    }));
    // A few pages serve reading back and forth; a parsed page is not small.
    if (pages.size > 10) pages.delete(pages.keys().next().value);
  }
  return pages.get(path);
}

// The families of the diagrams' fonts this page declares, read when a diagram from another page first needs its own.
let fonts = null;
const fontFace = /@font-face\{font-family:([\w-]+);src:url\("([^"]+)"\)/g;
/**
 * The fonts of another page's diagrams (source: { document, url }) that this page lacks: a page declares only those its
 * own diagrams use (bananamark-tikz's style[data-tikz-fonts]), at addresses from it.
 */
function addFonts({ document: source, url }) {
  fonts ??= new Set(Array.from(document.querySelectorAll('style[data-tikz-fonts]'), style => Array.from(style.textContent.matchAll(fontFace), ([, family]) => family)).flat());
  const rules = [];
  for (const style of source.querySelectorAll('style[data-tikz-fonts]')) {
    for (const [, family, address] of style.textContent.matchAll(fontFace)) {
      if (fonts.has(family)) continue;
      fonts.add(family);
      rules.push(`@font-face{font-family:${family};src:url("${new URL(address, url).href}") format("truetype")}`);
    }
  }
  if (rules.length) document.head.append(Object.assign(document.createElement('style'), { textContent: rules.join('') }));
}

let copies = 0;
/**
 * A copy of a part of a page for the preview. Ids would repeat this page's, or meet them when the part comes from
 * another page: they are dropped, except a diagram's, renamed together with the references to them inside it. From
 * another page (source: { document, url }), links and images are made to point where they did there, and the
 * diagrams' fonts are declared here.
 */
function copy(element, source) {
  const base = source?.url;
  const clone = document.importNode(element, true);
  clone.querySelectorAll('script, .bm-heading-link').forEach(child => child.remove());
  const prefix = `link-preview-${++copies}-`, renamed = new Map();
  for (const child of [clone, ...clone.querySelectorAll('[id]')]) {
    if (!child.id) continue;
    if (child.closest('svg')) {
      renamed.set(child.id, prefix + child.id);
      child.id = prefix + child.id;
    } else child.removeAttribute('id');
  }
  if (renamed.size) {
    for (const child of clone.querySelectorAll('svg *')) {
      for (const attribute of child.attributes) {
        const value = attribute.value.replace(/#([\w.-]+)/g, (match, id) => renamed.has(id) ? `#${renamed.get(id)}` : match);
        if (value !== attribute.value) attribute.value = value;
      }
    }
  }
  if (base) {
    for (const child of clone.querySelectorAll('a[href], img[src]')) {
      const name = child instanceof HTMLAnchorElement ? 'href' : child instanceof HTMLImageElement ? 'src' : '';
      if (!name) continue;
      let url;
      try { url = new URL(child.getAttribute(name), base); }
      catch { continue; }
      child.setAttribute(name, url.origin === window.location.origin ? url.pathname + url.search + url.hash : url.href);
    }
    if (clone.querySelector('svg')) addFonts(source);
  }
  return clone;
}

/** What a reference's, a citation's or a footnote mark's target shows: null for a heading or a page's title. */
function targetBlock(element) {
  if (!element) return null;
  // A version cited on its own shows its entry, which holds the authors and the title it takes.
  if (element.matches('.bm-bibliography-entry, .bm-bibliography-version')) return element.closest('.bm-bibliography-entry');
  if (element.matches('.bm-env, .bm-math-display, .bm-footnotes li')) return element;
  if (element.matches('.bm-item-target')) return element.closest('li');
  return null;
}

/** The number a numbered list shows for its item. */
function itemNumber(list, item) {
  let number = list.start;
  for (const child of list.children) {
    if (child.tagName !== 'LI') continue;
    if (child.hasAttribute('value')) number = Number.parseInt(child.getAttribute('value'), 10);
    if (child === item) break;
    number += 1;
  }
  return number;
}

/**
 * A copied target in what its styles need around it: an entry in its bibliography, an item in its list (numbered as
 * there); a footnote's text, without its number and the link back.
 */
function placed(block, clone) {
  if (block.matches('.bm-footnotes li')) {
    for (const back of clone.querySelectorAll('.bm-footnote-backref')) {
      if (back.previousSibling?.nodeType === Node.TEXT_NODE) back.previousSibling.data = back.previousSibling.data.trimEnd();
      back.remove();
    }
    const note = document.createElement('div');
    note.className = 'link-preview-footnote';
    note.append(...clone.childNodes);
    return note;
  }
  const list = block.parentElement;
  const around = block.matches('.bm-bibliography-entry') ? document.createElement('div')
    : block.matches('li') ? document.createElement(list.tagName.toLowerCase()) : null;
  if (!around) return clone;
  around.className = block.matches('li') ? 'link-preview-item' : 'bm-bibliography';
  if (around instanceof HTMLOListElement) around.start = itemNumber(list, block);
  around.append(clone);
  return around;
}

/** Whether an element's text as read (without the formulas' MathML) ends a sentence. */
function endsSentence(element) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  let last = '';
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (node.data.trim() && !node.parentElement.closest('.katex-mathml')) last = node.data;
  }
  return sentenceEnd.test(last.trimEnd());
}

/**
 * How far the last line of an element's visible text reaches, as a part of the element's width: of the lines at least
 * half shown, the lowest.
 */
function lastLineReach(element) {
  const box = element.getBoundingClientRect();
  if (!box.width) return 0;
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const range = document.createRange(), rects = [];
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (!node.data.trim() || node.parentElement.closest('.katex-mathml')) continue;
    range.selectNodeContents(node);
    for (const rect of range.getClientRects()) if (rect.width && (rect.top + rect.bottom) / 2 < box.bottom) rects.push(rect);
  }
  if (!rects.length) return 0;
  const middle = rect => (rect.top + rect.bottom) / 2;
  const last = Math.max(...rects.map(middle));
  const line = rects.filter(rect => last - middle(rect) < rect.height / 2);
  return (Math.max(...line.map(rect => rect.right)) - box.left) / box.width;
}

/** The length of an element's text as read, without the formulas' MathML. */
function textLength(element) {
  let length = element.textContent.trim().length;
  for (const mathml of element.querySelectorAll('.katex-mathml')) length -= mathml.textContent.length;
  return length;
}

/**
 * A display formula between the blocks of text around it, which the preview cuts to a few lines (fit, when shown);
 * the formula copied is marked.
 */
function inContext(formula, source) {
  const context = document.createElement('div');
  context.className = 'link-preview-context';
  const target = copy(formula, source);
  target.classList.add('link-preview-target');
  const before = formula.previousElementSibling, after = formula.nextElementSibling;
  if (before?.matches(prose)) context.append(copy(before, source));
  context.append(target);
  if (after?.matches(prose)) context.append(copy(after, source));
  return context;
}

/**
 * An article's opening, shown for a wiki link: its paragraphs, lists and display formulas before the first heading,
 * until about two lines of text; or its first environment, when it starts with one. Notices, figures and the
 * conventions many articles start with are left out. An article whose text starts under its first heading shows that
 * text.
 */
function opening(article) {
  const blocks = [];
  let length = 0;
  for (const element of article.children) {
    if (element.matches('h2, h3, h4, h5, h6, .toc-shell')) {
      if (blocks.length) break;
      continue;
    }
    if (element.matches('.navbox, .terms, .article-footer, .collection-footer')) break;
    if (!element.matches(`${prose}, .bm-env:not(.bm-envgroup-proof, .bm-env-convention)`) || !textLength(element)) continue;
    if (element.matches('.bm-env') && blocks.length) break;
    blocks.push(element);
    length += textLength(element);
    if (element.matches('.bm-env') || length >= 120 || blocks.length === 3) break;
  }
  return blocks;
}

/**
 * A wiki link's preview: the article's opening (cut to its height when shown, fit) and "go to the article" under it,
 * one link to the article, so that it reads as a way there rather than a note. The opening's own links become text;
 * footnote marks and the annotations after people's names (<person>) are left out.
 */
function articlePreview(page, link) {
  const article = page.document.querySelector('article');
  const blocks = article ? opening(article) : [];
  if (!blocks.length) return null;
  const area = document.createElement('a');
  area.className = 'link-preview-article';
  area.setAttribute('href', link.getAttribute('href'));
  const excerpt = document.createElement('div');
  excerpt.className = 'link-preview-excerpt';
  for (const block of blocks) {
    const clone = copy(block, page);
    clone.querySelectorAll('.bm-footnote-ref').forEach(mark => (mark.closest('sup') ?? mark).remove());
    clone.querySelectorAll('.person-annotations').forEach(annotations => annotations.remove());
    clone.querySelectorAll('a').forEach(anchor => anchor.replaceWith(...anchor.childNodes));
    excerpt.append(clone);
  }
  area.append(excerpt);
  if (goToArticle) {
    const more = document.createElement('span');
    more.className = 'link-preview-more';
    more.textContent = goToArticle;
    area.append(more);
  }
  return area;
}

/** The preview of a link (a node to show), or null when it has none. */
async function preview(link) {
  let url;
  try { url = new URL(link.href); }
  catch { return null; }
  if (url.origin !== window.location.origin) return null;
  const here = decodedPath(url) === decodedPath(window.location);
  if (link.matches('.bm-wiki-link')) {
    if (here) return null;
    const page = await fetchPage(url);
    return page && articlePreview(page, link);
  }
  let id;
  try { id = decodeURIComponent(url.hash.slice(1)); }
  catch { return null; }
  if (!id) return null;
  const page = here ? null : await fetchPage(url);
  if (!here && !page) return null;
  const block = targetBlock((page?.document ?? document).getElementById(id));
  if (!block) return null;
  return block.matches('.bm-math-display') ? inContext(block, page) : placed(block, copy(block, page));
}

function start() {
  const popover = document.createElement('div');
  popover.className = 'link-preview';
  popover.setAttribute('popover', 'manual');
  const body = document.createElement('div');
  body.className = 'link-preview-body';
  popover.append(body);

  // pending: the link waiting to show its preview; current: the link whose preview is shown. request counts the
  // previews asked for, so that one arriving after another was asked for is dropped.
  let pending = null, current = null, open = false, request = 0, openTimer = 0, closeTimer = 0, pointer = null;

  // The fade at the bottom, while there is more below: to scroll to, or cut (a wiki link's preview).
  const updateClipped = () => popover.classList.toggle('is-clipped', body.scrollTop + body.clientHeight < body.scrollHeight - 1);
  body.addEventListener('scroll', updateClipped, { passive: true });

  // Cut to fit, once laid out: an article's opening to its height, faded out when it is cut or stops short of the end
  // of a sentence, and further from "go to the article" when its last line reaches over to it; a formula's context to
  // a few lines on each side of the formula, faded where they are cut.
  const fit = () => {
    const excerpt = body.querySelector('.link-preview-excerpt');
    if (excerpt) {
      excerpt.classList.toggle('is-faded', excerpt.scrollHeight > excerpt.clientHeight + 1 || !endsSentence(excerpt));
      excerpt.classList.toggle('is-wide-end', lastLineReach(excerpt) > 2 / 3);
    }
    const context = body.querySelector('.link-preview-context');
    if (!context) return;
    const target = context.querySelector('.link-preview-target');
    const room = contextLines * (Number.parseFloat(getComputedStyle(context).lineHeight) || 26);
    const start = target.offsetTop, end = start + target.offsetHeight, total = context.scrollHeight;
    const from = Math.max(start - room, 0), to = Math.min(end + room, total);
    context.style.height = `${to - from}px`;
    context.scrollTop = from;
    context.classList.toggle('is-cut-start', from > 0);
    context.classList.toggle('is-cut-end', to < total);
  };

  // Under the link, or above it when there is more room there; on the line of the link the pointer is on, when the
  // link wraps, with the wedge at its middle. Centred on the wedge, within the window, and on the left at least 1em in
  // from the article's edge (within the window comes first). Positioned in the page, so that it scrolls with the link.
  const place = link => {
    const rects = Array.from(link.getClientRects());
    const rect = (pointer && rects.find(box => pointer.y >= box.top && pointer.y <= box.bottom)) ?? rects[0] ?? link.getBoundingClientRect();
    const width = document.documentElement.clientWidth, height = window.innerHeight;
    // The navigation bar stays at the top of the window.
    const top = Math.max(document.querySelector('.navigation')?.getBoundingClientRect().bottom ?? 0, 0) + margin;
    body.style.maxHeight = '';
    popover.style.left = popover.style.top = '0px';
    const size = popover.getBoundingClientRect();
    const below = height - margin - rect.bottom - gap, above = rect.top - gap - top;
    const downward = size.height <= below || below >= above;
    const room = Math.max(downward ? below : above, 0);
    if (size.height > room) body.style.maxHeight = `${room}px`;
    const y = downward ? rect.bottom + gap : rect.top - gap - Math.min(size.height, room);
    const middle = rect.left + rect.width / 2;
    const article = link.closest('article');
    const end = width - margin - size.width;
    const start = Math.min(Math.max(article.getBoundingClientRect().left + Number.parseFloat(getComputedStyle(article).fontSize), margin), end);
    const x = Math.max(Math.min(middle - size.width / 2, end), start);
    popover.dataset.side = downward ? 'below' : 'above';
    popover.style.setProperty('--wedge-x', `${Math.max(Math.min(middle - x, size.width - inset), inset)}px`);
    popover.style.left = `${x + window.scrollX}px`;
    popover.style.top = `${y + window.scrollY}px`;
    updateClipped();
  };

  const hide = () => {
    clearTimeout(closeTimer);
    current = null;
    if (open) popover.hidePopover();
    open = false;
    body.replaceChildren();
  };

  const cancel = () => {
    clearTimeout(openTimer);
    pending = null;
    request += 1;
  };

  const show = async link => {
    const asked = ++request;
    const content = await preview(link).catch(() => null);
    if (asked !== request || pending !== link) return;
    pending = null;
    if (!content || !link.isConnected) return;
    hide();
    const article = link.closest('article');
    if (popover.parentElement !== article) article.append(popover);
    popover.dataset.kind = kindOf(link);
    body.replaceChildren(content);
    body.scrollTop = 0;
    popover.showPopover();
    open = true;
    current = link;
    fit();
    place(link);
  };

  const schedule = link => {
    clearTimeout(openTimer);
    request += 1;
    pending = link;
    openTimer = setTimeout(() => show(link), kindOf(link) === 'wiki' ? delays.wiki : delays.reference);
  };

  const previewable = link => Boolean(link?.closest('article')) && !link.closest(elsewhere);

  document.addEventListener('pointermove', event => { pointer = { x: event.clientX, y: event.clientY }; }, { passive: true });

  document.addEventListener('pointerover', event => {
    if (event.pointerType === 'touch') return;
    pointer = { x: event.clientX, y: event.clientY };
    if (popover.contains(event.target)) {
      clearTimeout(closeTimer);
      return;
    }
    const link = event.target.closest?.(links);
    if (!previewable(link)) return;
    if (link === current) clearTimeout(closeTimer);
    else if (link !== pending) schedule(link);
  });

  document.addEventListener('pointerout', event => {
    if (event.pointerType === 'touch') return;
    const from = event.target, to = event.relatedTarget;
    if (pending?.contains(from) && !pending.contains(to)) cancel();
    // Leaving the link for its preview, or the preview for its link, keeps it; a moment's grace covers the gap.
    if (current && (current.contains(from) || popover.contains(from)) && !current.contains(to) && !popover.contains(to)) {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(hide, delays.close);
    }
  });

  document.addEventListener('focusin', event => {
    const link = event.target.closest?.(links);
    if (!previewable(link)) return;
    let keyboard = true;
    try { keyboard = link.matches(':focus-visible'); }
    catch { /* A browser without :focus-visible: any focus. */ }
    if (!keyboard || link === current) return;
    pointer = null;
    schedule(link);
  });

  document.addEventListener('focusout', event => {
    if (event.target === pending) cancel();
    if (event.target === current) hide();
  });

  // A press anywhere but in the preview, the link's own included (it is followed), closes it.
  document.addEventListener('pointerdown', event => {
    if (popover.contains(event.target)) return;
    cancel();
    hide();
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || (!current && !pending)) return;
    cancel();
    hide();
  });

  const reset = () => { cancel(); hide(); };
  window.addEventListener('resize', reset);
  window.addEventListener('pagehide', reset);
}

if (typeof HTMLElement.prototype.showPopover === 'function' && typeof DOMParser === 'function') start();
