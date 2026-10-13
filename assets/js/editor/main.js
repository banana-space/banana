// The online editor on /edit/ (layouts/_default/editor.html), bundled by Hugo's js.Build.
// The page's source comes from /api/source; previews, checks and submissions go to /api/
// (scripts/editor-api.mjs). Drafts are kept in localStorage until they are submitted.
import { ChangeSet, Compartment, EditorState, Prec, Text } from '@codemirror/state';
import {
  EditorView, crosshairCursor, drawSelection, dropCursor, highlightActiveLine, highlightActiveLineGutter,
  highlightSpecialChars, keymap, lineNumbers, rectangularSelection,
} from '@codemirror/view';
import { bracketMatching, foldGutter, foldKeymap, indentOnInput, indentUnit, syntaxHighlighting } from '@codemirror/language';
import { defaultKeymap, history, historyKeymap, indentWithTab } from '@codemirror/commands';
import { highlightSelectionMatches, searchKeymap } from '@codemirror/search';
import { autocompletion, closeBrackets, closeBracketsKeymap, completionKeymap, startCompletion } from '@codemirror/autocomplete';
import { forEachDiagnostic, lintGutter, lintKeymap, linter, setDiagnostics } from '@codemirror/lint';
import { diff, unifiedMergeView } from '@codemirror/merge';
import { bananaHighlighter, bananaMarkdown } from '../scripts/shared/markdown-language.mjs';
import { afterComposition, closeDisplayFormula, completionSources, deleteFormulaDelimiters, pairFormulaDelimiters } from '../scripts/editor/completion.mjs';

const root = document.getElementById('editor');
// A book page's labels on the book's other pages (from /api/source), offered with the page's own.
let bookLabels = [];

/** CodeMirror's basicSetup, spelled out so that the fold markers can be the site's chevron. */
function setup() {
  return [
    lineNumbers(), highlightActiveLineGutter(), highlightSpecialChars(), history(),
    foldGutter({
      markerDOM: open => {
        const marker = Object.assign(document.createElement('span'), { className: `editor-fold${open ? '' : ' is-folded'}` });
        marker.append(icon('chevron'));
        return marker;
      },
    }),
    drawSelection(), dropCursor(), EditorState.allowMultipleSelections.of(true), indentOnInput(),
    syntaxHighlighting(bananaHighlighter), bracketMatching(), closeBrackets(),
    autocompletion({ override: completionSources(config.names, text, () => bookLabels), icons: true }),
    // Nothing is offered while an input method composes; once it commits, completion starts where names are typed.
    EditorView.domEventHandlers({
      compositionend: (event, view) => { setTimeout(() => { if (afterComposition(view.state)) startCompletion(view); }); },
    }),
    rectangularSelection(), crosshairCursor(), highlightActiveLine(), highlightSelectionMatches(),
    EditorState.phrases.of(Object.fromEntries(Object.entries(codemirrorPhrases).map(([phrase, key]) => [phrase, config.strings[key]]))),
    // Ahead of the bracket pairing: "\[" closes with "\]", not "]".
    Prec.high(EditorView.inputHandler.of(pairFormulaDelimiters)),
    // Tab and Shift+Tab indent and outdent the lines, by two spaces (the site's indentation, as in YAML; a list
    // item's continuation lines are at its text, two spaces after "-", three after "1.").
    indentUnit.of('  '),
    keymap.of([{ key: 'Enter', run: closeDisplayFormula }, { key: 'Backspace', run: deleteFormulaDelimiters }, indentWithTab, ...closeBracketsKeymap, ...defaultKeymap, ...searchKeymap, ...historyKeymap, ...foldKeymap, ...completionKeymap, ...lintKeymap]),
  ];
}
const config = JSON.parse(document.getElementById('editor-config').textContent);
// CodeMirror's own words, by its phrases.
const codemirrorPhrases = {
  'Find': 'cm_find',
  'Replace': 'cm_replace',
  'next': 'cm_next',
  'previous': 'cm_previous',
  'all': 'cm_all',
  'match case': 'cm_match_case',
  'regexp': 'cm_regexp',
  'by word': 'cm_by_word',
  'replace': 'cm_replace_one',
  'replace all': 'cm_replace_all',
  'close': 'cm_close',
  'current match': 'cm_current_match',
  'on line': 'cm_on_line',
  'replaced match on line $': 'cm_replaced_match',
  'replaced $ matches': 'cm_replaced_matches',
  'Go to line': 'cm_go_to_line',
  'go': 'cm_go',
  'Diagnostics': 'cm_diagnostics',
  'No diagnostics': 'cm_no_diagnostics',
  'folded code': 'cm_folded_code',
  'to': 'cm_to',
  'unfold': 'cm_unfold',
  'Fold line': 'cm_fold_line',
  'Unfold line': 'cm_unfold_line',
  'Folded lines': 'cm_folded_lines',
  'Unfolded lines': 'cm_unfolded_lines',
  'Completions': 'cm_completions',
  'Control character': 'cm_control_character',
  'Selection deleted': 'cm_selection_deleted',
  '$ unchanged lines': 'cm_unchanged_lines',
  'Accept': 'cm_accept',
  'Reject': 'cm_reject',
  'Revert this chunk': 'cm_revert_chunk',
};
const $ = selector => root.querySelector(selector);
const text = (key, values = {}) => config.strings[key].replace(/\{(\w+)\}/g, (match, name) => values[name] ?? match);

const storage = {
  get(key) { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch { return false; } },
  remove(key) { try { localStorage.removeItem(key); } catch {} },
};

async function request(method, path, body) {
  try {
    const response = await fetch(config.api + path, {
      method, credentials: 'same-origin',
      headers: body ? { 'Content-Type': 'application/json' } : {}, body: body && JSON.stringify(body),
    });
    const json = await response.json().catch(() => ({ ok: false, errors: [{ message: `HTTP ${response.status}` }] }));
    return { status: response.status, retryAfter: Number(response.headers.get('Retry-After')) || 0, json };
  } catch (error) {
    return { status: 0, retryAfter: 0, json: { ok: false, errors: [{ message: error.message }] } };
  }
}
const errorText = json => (json.errors ?? []).map(error => error.message).join('；');
/** A copy of one of the icons in the page's #editor-icons template. */
const icon = name => document.getElementById('editor-icons').content.querySelector(`[data-icon="${name}"] svg`).cloneNode(true);
/** Fills an element with a message whose "PR #<number>" links to the pull request. */
function withPullLink(element, message, url) {
  element.replaceChildren(...message.split(/(PR #\d+)/).filter(Boolean).map(part => /^PR #\d+$/.test(part)
    ? Object.assign(document.createElement('a'), { href: url, target: '_blank', rel: 'noopener', textContent: part })
    : part));
}

/**
 * Asks which of a page's pull requests to edit (pull: the one loaded, null for the site's version). Resolves to a
 * pull request's number as a string, or "none" for the site's version; closing the dialog keeps the one loaded.
 */
function choosePull(pulls, pull, user) {
  const dialog = $('.editor-pull-dialog'), list = dialog.querySelector('.editor-pull-choices');
  const own = number => pulls.find(other => other.number === number)?.author.toLowerCase() === user.login.toLowerCase();
  const loaded = pull ? String(pull.number) : 'none';
  // The user's own pull request is where their edits go anyway: with it there is no starting afresh.
  const choices = pulls.map(({ number, title, author, url }) => ({ value: String(number), url, label: text(own(number) ? 'pull_choice_own' : 'pull_choice', { number, title, author }) }));
  if (!pulls.some(other => own(other.number))) choices.push({ value: 'none', label: text('pull_none') });
  list.replaceChildren(...choices.map(({ value, label, url }) => {
    const element = document.createElement('label');
    element.append(Object.assign(document.createElement('input'), { type: 'radio', name: 'pull', value, checked: value === loaded }), label);
    if (url) element.append(Object.assign(document.createElement('a'), { href: url, target: '_blank', rel: 'noopener', textContent: text('submit_done_view') }));
    return element;
  }));
  return new Promise(resolve => {
    dialog.addEventListener('close', () => resolve(dialog.returnValue === 'confirm' ? list.querySelector('input:checked')?.value ?? loaded : loaded), { once: true });
    dialog.returnValue = '';
    dialog.showModal();
  });
}

/** content/ 内的页面路径：完整路径原样使用；没有斜线的视为条目名；目录补上 index.md。 */
function pagePath(value) {
  const path = value.trim().replace(/^\/+|\/+$/g, '').replace(/^content\//, '');
  if (!path) return;
  if (/\.md$/i.test(path)) return path;
  return path.includes('/') ? `${path}/index.md` : `wiki/${path}/index.md`;
}

// The browser's checks (check.js), loaded once the editor is up; null when they fail to load.
let checkModule;
const loadCheckModule = () => checkModule ??= import(config.check).catch(() => { checkModule = undefined; return null; });

/** YAML for a title: plain where YAML allows, otherwise in single quotes. */
const yamlString = value => /^[\s\-?:,[\]{}#&*!|>'"%@`]|: | #|\s$/.test(value) ? `'${value.replaceAll("'", "''")}'` : value;

/** The page of an entry with this title: wiki/<directory>/index.md, the directory named as the migration did. */
async function entryPath(title) {
  const module = await loadCheckModule();
  const directory = module ? module.directoryName(title) : title.replace(/\$/g, '').replace(/[/\\:*?"<>|]/g, '').trim();
  return directory && `wiki/${directory}/index.md`;
}

// ?path= opens a page; ?title= an entry by its title (the "create entry" link of a missing page).
const params = new URLSearchParams(location.search);
start(params.get('path'), params.get('title')?.trim());

/** Logged out: an invitation to log in instead of an editor that cannot preview. Then a page, or the choice of one. */
async function start(requested, title) {
  const me = await request('GET', 'me');
  $('.editor-loading').hidden = true;
  if (!me.json.ok) {
    Object.assign($('.editor-unavailable'), { textContent: text('unavailable'), hidden: false });
    return;
  }
  if (!me.json.user) {
    const login = $('.editor-login');
    login.querySelector('a').href = `${config.api}auth/login?return=${encodeURIComponent(location.pathname + location.search)}`;
    login.hidden = false;
    return;
  }
  const path = requested ? pagePath(requested) : title && await entryPath(title);
  if (path) { openPage(path, me.json.user, title); return; }
  const form = $('.editor-open');
  form.hidden = false;
  // The title of an entry, never a path: only entries are created online (other pages are edited from
  // their own "edit this page" link).
  const input = form.elements.path;
  input.addEventListener('input', () => input.setCustomValidity(''));
  form.addEventListener('submit', event => {
    event.preventDefault();
    const value = input.value.trim();
    if (value.includes('/')) { input.setCustomValidity(text('open_no_slash')); input.reportValidity(); return; }
    if (value) location.search = `?title=${encodeURIComponent(value)}`;
  });
  form.elements.path.focus();
}

async function openPage(path, user, title) {
  $('.editor-workspace').hidden = false;
  const status = message => { $('.editor-status').textContent = message; };
  status(text('loading'));
  const file = $('.editor-path');
  $('.editor-path-name').textContent = `content/${path}`;
  // ?pull= is the pull request to edit (a number, or "none" for the site's version), as chosen below or linked
  // from the pull request's description.
  const asked = params.get('pull');
  const source = await request('GET', `source?path=${encodeURIComponent(path)}${asked ? `&pull=${encodeURIComponent(asked)}` : ''}`);
  if (!source.json.ok) { status(text('load_failed', { message: errorText(source.json) })); return; }
  // Other people's pull requests of the page: the user chooses which to edit, unless the address says.
  const pulls = source.json.pulls ?? [];
  if (!asked && pulls.some(other => other.number !== source.json.pull?.number)) {
    const chosen = await choosePull(pulls, source.json.pull, user);
    if (chosen !== (source.json.pull ? String(source.json.pull.number) : 'none')) {
      location.search = `?${new URLSearchParams({ path, pull: chosen })}`;
      return;
    }
  }
  // Only entries are created online.
  if (!source.json.exists && !/^wiki\/[^/]+\/index\.md$/.test(path)) { status(text('new_page_not_entry')); return; }
  status('');
  bookLabels = source.json.labels ?? [];
  let { original, pull } = source.json;
  // The version the server has: drafts and "unchanged" are measured against it.
  // A new page starts from the front matter the editor requires (categories for an entry, even if empty).
  const article = path.startsWith('wiki/') && !path.endsWith('/_index.md');
  let baseline = source.json.exists ? source.json.text
    : `---\ntitle: ${yamlString(title || (path.split('/').at(-2) ?? path.replace(/\.md$/, '')))}\n${article ? 'categories: []\nnavboxes: []\n' : ''}---\n\n`;
  if (source.json.file) file.href = source.json.file;
  if (!source.json.exists) file.append(Object.assign(document.createElement('span'), { className: 'editor-new-page', textContent: text('new_page') }));
  if (source.json.url) Object.assign($('.editor-view'), { href: source.json.url, hidden: false });
  showPull();
  if (source.json.pullMissing) banner(text('pull_missing', { number: source.json.pullMissing }), [], { closable: true });

  // Account: the GitHub avatar and login open a menu (also on hover): the user's pull requests, their
  // GitHub page, logging out.
  const account = $('.editor-user');
  const toggle = Object.assign(document.createElement('button'), { type: 'button', className: 'editor-account-button', title: user.name });
  toggle.setAttribute('aria-haspopup', 'menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', `${user.login} · ${text('account_menu')}`);
  if (user.avatar) toggle.append(Object.assign(document.createElement('img'), { className: 'editor-avatar', src: user.avatar, alt: '', width: 24, height: 24 }));
  toggle.append(Object.assign(document.createElement('strong'), { textContent: user.login }), icon('chevron'));
  const menu = Object.assign(document.createElement('div'), { className: 'editor-account-menu' });
  menu.setAttribute('role', 'menu');
  const item = (element, label) => {
    Object.assign(element, { className: 'editor-account-item', textContent: label });
    element.setAttribute('role', 'menuitem');
    menu.append(element);
    return element;
  };
  if (user.pulls) item(Object.assign(document.createElement('a'), { href: user.pulls, target: '_blank', rel: 'noopener' }), text('my_pulls'));
  item(Object.assign(document.createElement('a'), { href: user.url, target: '_blank', rel: 'noopener' }), text('profile'));
  item(Object.assign(document.createElement('button'), { type: 'button' }), text('logout'))
    .addEventListener('click', async () => { await request('POST', 'auth/logout'); location.reload(); });
  const setOpen = open => { account.classList.toggle('is-open', open); toggle.setAttribute('aria-expanded', String(open)); };
  toggle.addEventListener('click', () => setOpen(!account.classList.contains('is-open')));
  document.addEventListener('click', event => { if (!account.contains(event.target)) setOpen(false); });
  account.addEventListener('keydown', event => { if (event.key === 'Escape') { setOpen(false); toggle.focus(); } });
  account.append(toggle, menu);

  // Editor.
  const draftKey = `banana-editor:${path}`;
  const merge = new Compartment(), lint = new Compartment();
  let storageWorks = true;
  // Preview state: the frame shown and the one loading, the pending timer, whether a request is
  // running, when the last one started, and the text last previewed (successfully or with errors).
  const frames = [...root.querySelectorAll('.editor-frame')];
  let active = -1, loading, timer, running = false, lastRequest = -Infinity, previewed = null;
  // The text of the preview shown, as a Text, and the tracker of the edits made since it was sent.
  let shownSource = null, shownURL = null; // the shown preview's text and the page's address
  // The text last previewed without errors: only that can be submitted.
  let approved = null, submitting = false;
  // What the server reported, in the current text, and the edits since each request in flight (see follow()).
  let reported = []; // [{ from, to, severity, message }]
  const trackers = new Set(); // { changes }
  const view = new EditorView({
    doc: baseline,
    parent: $('.editor-source'),
    extensions: [
      // No line wrapping: indentation stays visible, and long lines are better broken in the source.
      setup(), bananaMarkdown(), lintGutter(), merge.of([]), lint.of([]),
      keymap.of([{ key: 'Mod-s', preventDefault: true, run: () => { if (current() !== previewed) schedulePreview(0); return true; } }]),
      EditorView.updateListener.of(update => { if (update.docChanged) { follow(update.changes); dropTouched(update); changed(); } }),
    ],
  });
  root.editorView = view; // For tests and debugging.
  const current = () => view.state.doc.toString();
  function changed() {
    const value = current();
    if (value === baseline) storage.remove(draftKey);
    else storageWorks = storage.set(draftKey, { text: value, original, saved: Date.now() });
    updateSubmit();
  }
  addEventListener('beforeunload', event => { if (!storageWorks && current() !== baseline) event.preventDefault(); });

  // A banner above the editor, with buttons, and a close button when it only informs.
  function banner(message, actions = [], { closable = false } = {}) {
    const element = $('.editor-banner');
    element.replaceChildren(message);
    for (const { label, run } of actions) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'editor-link-button';
      button.textContent = label;
      button.addEventListener('click', run);
      element.append(' ', button);
    }
    if (closable) {
      const close = Object.assign(document.createElement('button'), { type: 'button', className: 'editor-banner-close', title: text('close') });
      close.setAttribute('aria-label', text('close'));
      close.append(icon('close'));
      close.addEventListener('click', () => clearBanner());
      element.append(close);
    }
    element.hidden = false;
  }
  const clearBanner = () => { $('.editor-banner').hidden = true; };
  /** Shows the draft against another version, with the differences marked; edits continue as usual. */
  function compareWith(otherText, message) {
    view.dispatch({ effects: merge.reconfigure(unifiedMergeView({ original: otherText, mergeControls: true })) });
    banner(message, [{ label: text('merge_done'), run: () => { view.dispatch({ effects: merge.reconfigure([]) }); clearBanner(); } }]);
  }
  const replaceAll = value => view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: value } });

  // A draft from an earlier visit.
  const draft = storage.get(draftKey);
  if (draft?.text && draft.text !== baseline) {
    if (draft.original === original) {
      replaceAll(draft.text);
      banner(text('draft_restored'), [{ label: text('draft_discard'), run: () => { replaceAll(baseline); storage.remove(draftKey); clearBanner(); } }], { closable: true });
    } else {
      // The page changed since the draft was saved: nothing is loaded until the user chooses.
      banner(text('draft_outdated'), [
        { label: text('draft_load'), run: () => { replaceAll(draft.text); compareWith(baseline, text('draft_compare')); } },
        { label: text('draft_discard'), run: () => { storage.remove(draftKey); clearBanner(); } },
      ]);
    }
  }

  // Preview: after a pause in typing, or at once with Ctrl+S / ⌘S.
  // The frames run no scripts (sandbox without allow-scripts) but share the origin: the editor carries
  // the scroll position over and makes links open in a new tab, except those within the page. (Chrome fires
  // no scroll events in such documents, so the position is read when it is needed.)
  for (const frame of frames) {
    frame.addEventListener('load', () => {
      if (frame !== loading) return;
      const inner = frame.contentWindow;
      const top = active >= 0 ? frames[active].contentWindow.scrollY : 0;
      inner.scrollTo({ top, behavior: 'instant' }); // The site's smooth scrolling would animate from the top.
      prepare(inner.document);
      for (const other of frames) other.classList.toggle('is-active', other === frame);
      active = frames.indexOf(frame);
      loading = undefined;
    });
  }
  const prepared = new WeakSet();
  /** Links of a preview open in a new tab, links within it scroll it (once per document). */
  function prepare(doc) {
    // setAttribute: an SVG link's target property is read-only.
    for (const link of doc.querySelectorAll('a[href]')) {
      if (inPage(link.getAttribute('href')) !== null) continue;
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener');
    }
    if (prepared.has(doc)) return;
    prepared.add(doc);
    // Links within the page (footnotes, references, headings) scroll the preview: the frame's document has
    // the editor's address, so "#id" would load the editor in the frame.
    doc.addEventListener('click', event => {
      const link = event.target.closest?.('a[href]');
      const id = link && inPage(link.getAttribute('href'));
      if (id === null || id === undefined) return;
      event.preventDefault();
      // The frame's window alone: scrollIntoView would also scroll the editor's page to the frame. The target
      // a little below the top (the site's own scroll margin makes room for its navigation bar, which the
      // preview hides).
      const target = id ? doc.getElementById(id) : null, window = doc.defaultView;
      window.scrollTo({ top: target ? target.getBoundingClientRect().top + window.scrollY - 15 : 0 });
    });
  }

  /** The id a link of the shown preview points to within that page ('' for its top), or null for another page. */
  function inPage(href) {
    let url;
    try { url = new URL(href, new URL(shownURL ?? '/', location.origin)); } catch { return null; }
    if (url.origin !== location.origin || url.pathname !== new URL(shownURL ?? '/', location.origin).pathname || (!url.hash && !href.startsWith('#'))) return null;
    try { return decodeURIComponent(url.hash.slice(1)); } catch { return url.hash.slice(1); }
  }

  // Scrolling either side scrolls the other to the same place, unless the preview shows errors or failed. The
  // preview's source-line marks anchor the two (without them, each "#" heading of the source and its heading in
  // the preview, both in order); between anchors, positions are interpolated by line.
  let headingCache = { doc: null, lines: [] };
  /** Lines (from 1) of the source's headings, outside the front matter and code blocks. */
  function sourceHeadings() {
    const doc = view.state.doc;
    if (headingCache.doc === doc) return headingCache.lines;
    const lines = [];
    let fence = null, frontMatter = doc.lines > 0 && doc.line(1).text === '---';
    for (let number = 1; number <= doc.lines; number++) {
      const text = doc.line(number).text;
      if (frontMatter) { if (number > 1 && text === '---') frontMatter = false; continue; }
      const marker = text.match(/^\s{0,3}(`{3,}|~{3,})/)?.[1];
      if (fence) { if (marker && marker[0] === fence[0] && marker.length >= fence.length) fence = null; continue; }
      if (marker) { fence = marker; continue; }
      if (/^#{1,6}\s/.test(text)) lines.push(number);
    }
    headingCache = { doc, lines };
    return lines;
  }
  /** A line of the shown preview's source, as a line of the current text (edits since moved it). */
  function currentLine(line) {
    if (!shownSource) return line;
    const { doc, tracker } = shownSource, from = doc.line(Math.min(Math.max(line, 1), doc.lines)).from;
    return view.state.doc.lineAt(Math.min(tracker.changes.mapPos(from, 1), view.state.doc.length)).number;
  }
  /** The shown preview's source-line marks (scripts/prebuild/source-lines.mjs) that are laid out. */
  const lineMarks = doc => [...doc.querySelectorAll('[data-source-line]')].filter(mark => mark.getClientRects().length);
  /**
   * Anchors pairing lines of the current text with positions in the shown preview, or null without a
   * usable preview: the preview's source-line marks, or, should it have none, the headings.
   */
  function anchors() {
    if (active < 0 || !$('.editor-preview-error').hidden || $('.editor-status button')) return null;
    const doc = frames[active].contentDocument, scroll = doc.defaultView.scrollY;
    const top = element => element.getClientRects()[0].top + scroll;
    let pairs = lineMarks(doc).map(mark => ({ line: currentLine(Number(mark.dataset.sourceLine)), y: top(mark) }));
    if (!pairs.length) {
      const headings = [...doc.querySelectorAll('article h2, article h3, article h4, article h5, article h6')]
        .filter(heading => !heading.closest('.toc-shell, .notice, .navbox, .terms, .article-footer, .collection-sidebar'));
      pairs = sourceHeadings().slice(0, headings.length).map((line, i) => ({ line, y: top(headings[i]) }));
    }
    const points = [{ line: 1, y: 0 }];
    // Keep both increasing: a mark the preview places out of order is skipped.
    for (const pair of pairs) if (pair.line > points.at(-1).line && pair.y > points.at(-1).y) points.push(pair);
    points.push({ line: view.state.doc.lines + 1, y: Math.max(doc.documentElement.scrollHeight, points.at(-1).y + 1) });
    return points;
  }
  const between = (points, key, value, other) => {
    let i = 1;
    while (i < points.length - 1 && points[i][key] <= value) i++;
    const a = points[i - 1], b = points[i];
    return a[other] + (b[other] - a[other]) * Math.min(Math.max((value - a[key]) / (b[key] - a[key] || 1), 0), 1);
  };
  // Only the user's own scrolling of the source moves the preview (wheel, touch, scroll bar, navigation keys):
  // not a jump to a line (the preview stays where the user looked), CodeMirror's own adjustments as it
  // measures lines, or the cursor following typing.
  let syncing = false, userScroll = 0; // userScroll: until when scroll events count as the user's (ms)
  const byUser = () => { if (userScroll !== Infinity) userScroll = Date.now() + 300; };
  view.scrollDOM.addEventListener('wheel', byUser, { passive: true });
  view.scrollDOM.addEventListener('touchmove', byUser, { passive: true });
  view.scrollDOM.addEventListener('keydown', event => { if (/^(Page(Up|Down)|Arrow(Up|Down)|Home|End)$/.test(event.key)) byUser(); });
  view.scrollDOM.addEventListener('pointerdown', () => { userScroll = Infinity; }); // Dragging the scroll bar.
  addEventListener('pointerup', () => { if (userScroll === Infinity) userScroll = Date.now() + 300; });
  // Scrolled to the right: the gutter's edge fades (_editor.scss), as there is more code on the left.
  view.scrollDOM.addEventListener('scroll', () => view.dom.classList.toggle('editor-scrolled-x', view.scrollDOM.scrollLeft > 0), { passive: true });
  view.scrollDOM.addEventListener('scroll', () => {
    if (syncing || Date.now() > userScroll) return;
    syncing = true;
    requestAnimationFrame(() => {
      syncing = false;
      scrollPreviewTo(sourceTopLine());
    });
  }, { passive: true });
  /** The line at the top of the source, with the fraction of it scrolled past. */
  function sourceTopLine() {
    const top = view.scrollDOM.scrollTop, block = view.lineBlockAtHeight(top);
    return view.state.doc.lineAt(block.from).number + (top - block.top) / (block.height || 1);
  }
  function scrollSourceTo(line) {
    const doc = view.state.doc, number = Math.min(Math.max(Math.floor(line), 1), doc.lines);
    const block = view.lineBlockAt(doc.line(number).from);
    view.scrollDOM.scrollTop = block.top + (line - number) * block.height;
  }
  /** The line at the top of the preview, or null without a usable preview. */
  function previewTopLine() {
    const points = anchors();
    return points && between(points, 'y', frames[active].contentWindow.scrollY, 'line');
  }
  /** Scrolls the preview to a line of the source, offset (px) below its top. */
  function scrollPreviewTo(line, offset = 0) {
    const points = anchors();
    if (!points) return;
    const frame = frames[active].contentWindow;
    frame.scrollTo({ top: between(points, 'line', line, 'y') - offset, behavior: 'instant' });
    previewSeen = { frame, y: frame.scrollY }; // Not the user's scrolling of the preview.
  }
  // The other way: the preview's frame runs no scripts, and Chrome fires no scroll events in it, so its
  // position is watched each frame. A change that the source did not cause (the user's scrolling, a link
  // within the page) scrolls the source; a newly shown preview only sets where watching starts.
  let previewSeen = { frame: null, y: 0 };
  (function watchPreview() {
    requestAnimationFrame(watchPreview);
    const frame = active >= 0 ? frames[active].contentWindow : null;
    if (!frame || frame.innerHeight === 0) return; // None shown, or its pane hidden (one-pane layout).
    const y = frame.scrollY;
    if (previewSeen.frame !== frame) { previewSeen = { frame, y }; return; }
    if (y === previewSeen.y) return;
    previewSeen.y = y;
    if (Date.now() <= userScroll) return; // The source is being scrolled and leads.
    const line = previewTopLine();
    if (line !== null) scrollSourceTo(line);
  })();
  function select(anchor, head) {
    view.dispatch({ selection: { anchor, head }, effects: EditorView.scrollIntoView(anchor, { y: 'center' }) });
    view.focus();
  }
  // Previews come on request (the button, Ctrl+S or ⌘S), and once when the page opens: previewing while typing
  // kept the preview restless and the server busy.
  const previewKey = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent) ? '⌘S' : 'Ctrl+S';
  const previewButton = $('.editor-preview-button');
  previewButton.title = text('preview_button_title', { key: previewKey });
  previewButton.addEventListener('click', () => schedulePreview(0));
  $('.editor-preview-empty').textContent = text('preview_empty', { key: previewKey });
  // A preview on its way (asked for by either button) shows as a spinner left of the preview button, or, in
  // the one-pane layout, inside the preview tab; the status shows only a failure that can be retried. Errors
  // in the draft appear over the preview instead.
  const spinners = root.querySelectorAll('.editor-spinner'), waiting = new Set();
  /** A button waiting for what it asked for: the spinner turns while any does. */
  function busy(button, on) {
    if (on) { waiting.add(button); button.setAttribute('aria-busy', 'true'); }
    else { waiting.delete(button); button.removeAttribute('aria-busy'); }
    for (const spinner of spinners) spinner.hidden = !waiting.size;
  }
  function previewStatus(state) {
    const element = $('.editor-status');
    if (state === 'failed') {
      const retry = Object.assign(document.createElement('button'), { type: 'button', className: 'editor-link-button', textContent: text('preview_failed') });
      retry.addEventListener('click', () => schedulePreview(0));
      element.replaceChildren(retry);
    } else element.textContent = '';
  }
  const minInterval = 3000; // The server allows one preview per account every 3 s.
  // again: a preview was asked for while one was on its way; submitWaiting: the submit button waits for the
  // preview, to open the dialog once it succeeds.
  let again = false, submitWaiting = false;
  // previewTabWaiting: the preview tab (one-pane layout) was chosen; it shows once the preview is done.
  let previewTabWaiting = false;
  function schedulePreview(delay = 0) {
    clearTimeout(timer);
    busy(previewButton, true);
    if (running) again = true;
    timer = setTimeout(runPreview, delay);
  }
  /** The preview asked for is done (or failed, or there was nothing to preview). */
  function settle(failed = false) {
    again = false;
    busy(previewButton, false);
    if (previewTabWaiting) { previewTabWaiting = false; showPane('preview'); }
    previewStatus(failed ? 'failed' : undefined);
    if (submitWaiting) {
      submitWaiting = false;
      busy($('.editor-submit-button'), false);
      if (!failed && current() === approved) openSubmitDialog();
    }
  }
  async function runPreview() {
    const value = current();
    if (value === previewed) { settle(); return; }
    const tracker = track(); // Edits from now on, to place what the server says about this text.
    // The shown preview's tracker stays: its source-line marks are placed through it.
    try { await previewText(value, tracker); } finally { if (tracker !== shownSource?.tracker) trackers.delete(tracker); }
  }
  async function previewText(value, tracker) {
    // Errors the browser finds itself go straight over the preview; the server would only repeat them.
    const check = await loadChecker();
    const local = check ? check(value, path, bookLabels) : [];
    if (local.length) {
      previewed = value;
      showErrors(local);
      updateSubmit();
      settle();
      return;
    }
    if (running) return; // Run again when the current request ends (again).
    const wait = lastRequest + minInterval - Date.now();
    if (wait > 0) { schedulePreview(wait); return; }
    running = true;
    lastRequest = Date.now();
    const { status: code, retryAfter, json } = await request('POST', 'preview', { path, text: value });
    running = false;
    if (code === 429) { schedulePreview(Math.max(retryAfter * 1000, 1000)); return; }
    if (json.ok) {
      previewed = approved = value;
      if (shownSource) trackers.delete(shownSource.tracker);
      shownSource = { doc: Text.of(value.split('\n')), tracker };
      shownURL = json.url;
      show(json.html);
      showErrors([]);
      problems(json.missingLinks, [], tracker, value);
      if (json.url && source.json.exists) Object.assign($('.editor-view'), { href: json.url, hidden: false });
    } else if (code === 422) {
      previewed = value; // The same text would fail again.
      showErrors(json.errors, json.log);
      problems([], json.errors, tracker, value);
    } else {
      settle(true);
      return;
    }
    updateSubmit();
    // Asked again meanwhile, or the submit button waits for the text as it is now.
    if ((again || submitWaiting) && current() !== value) runPreview();
    else settle();
  }
  /** The dialog's submit button waits for the current text to be previewed without errors, and says so. */
  function updateSubmit() {
    const ready = current() === approved, wait = $('.editor-submit-wait');
    $('.editor-submit-dialog button[value="submit"]').disabled = !ready || submitting;
    wait.hidden = ready;
    if (!ready) wait.textContent = text($('.editor-preview-error').hidden ? 'submit_wait_preview' : 'submit_wait_errors');
  }
  /** Moves the cursor to a line (and column) of the source, scrolled to the middle. */
  function goToLine(number, column = 1) {
    const doc = view.state.doc, line = doc.line(Math.min(Math.max(number, 1), doc.lines));
    const position = Math.min(line.from + column - 1, line.to);
    select(position, position);
  }
  /** Errors over the preview, in a monospace font, each line number leading to its line; none hides them. */
  function showErrors(errors, log) {
    const overlay = $('.editor-preview-error'), list = overlay.querySelector('pre');
    list.replaceChildren();
    // Before any preview, the hint that one is coming would show through the errors.
    $('.editor-preview-empty').style.visibility = errors.length ? 'hidden' : '';
    for (const error of errors) {
      if (error.line && (!error.file || error.file === `content/${path}`)) {
        // "{line}：{message}", with {line} ("第 7 行") as the link to the line.
        const [before, after] = text('preview_error_line', { line: '\0', message: error.message }).split('\0');
        const jump = Object.assign(document.createElement('button'), { type: 'button', className: 'editor-link-button', textContent: text('problem_line', { line: error.line }) });
        jump.addEventListener('click', () => goToLine(error.line, error.column));
        list.append(before, jump, after, '\n');
      } else {
        list.append(`${error.file ? `${error.file}${error.line ? `:${error.line}` : ''}: ` : ''}${error.message}\n`);
      }
    }
    if (log) list.append('\n', log);
    overlay.hidden = !errors.length;
  }
  /**
   * Shows a preview. While the stylesheets stay the same, the shown document takes the new page's content in
   * place: nothing reloads, so nothing flashes unstyled, and the scroll position stays. Otherwise the page
   * loads into the hidden frame and is shown, at the current scroll position, once loaded.
   */
  function show(html) {
    $('.editor-preview-empty').hidden = true;
    // The frame runs no scripts; leaving them out spares their requests and the console's complaints.
    // The site's navigation bar and the page's table of contents are left out of the preview.
    // So are the footers and a book page's links to the previous and next pages, and the space above the
    // title is narrower.
    const style = '<style>.navigation, .toc-shell, .article-footer, .site-footer, .collection-pagination { display: none !important; }'
      + ' .content { margin-top: 0 !important; } .content header { margin-top: 2rem !important; }</style>';
    const page = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<\/head>/i, `${style}</head>`);
    const shown = active >= 0 && !loading ? frames[active].contentDocument : null;
    const next = new DOMParser().parseFromString(page, 'text/html');
    const sheets = doc => [...doc.querySelectorAll('link[rel~="stylesheet"]')].map(link => link.getAttribute('href')).join('\n');
    if (shown?.body && sheets(shown) === sheets(next)) {
      const top = shown.defaultView.scrollY, element = shown.documentElement;
      for (const { name } of [...element.attributes]) element.removeAttribute(name);
      for (const { name, value } of next.documentElement.attributes) element.setAttribute(name, value);
      for (const old of shown.head.querySelectorAll('style')) old.remove();
      for (const added of next.head.querySelectorAll('style')) shown.head.append(shown.importNode(added, true));
      shown.title = next.title;
      shown.body.replaceWith(shown.importNode(next.body, true));
      prepare(shown);
      shown.defaultView.scrollTo({ top, behavior: 'instant' });
      return;
    }
    loading = frames[active === 0 ? 1 : 0];
    loading.hidden = false;
    loading.srcdoc = page;
  }
  /** The caret's line and how far below the source pane's top it is, or null when it is out of sight. */
  function caretPlace() {
    const head = view.state.selection.main.head, block = view.lineBlockAt(head);
    const offset = block.top - view.scrollDOM.scrollTop;
    if (offset < 0 || offset + block.height > view.scrollDOM.clientHeight) return null;
    return { line: view.state.doc.lineAt(head).number, offset };
  }
  /** Shows one pane of the one-pane layout, at the place the other one showed. */
  function showPane(pane) {
    const panes = $('.editor-panes');
    if (panes.dataset.pane === pane) return;
    // Read while the pane being left is laid out; placed once the other one is. To the preview: the caret's line,
    // as far down as it is in the source (the top line when the caret is out of sight).
    const caret = pane === 'preview' ? caretPlace() : null;
    const line = caret ? caret.line : pane === 'preview' ? sourceTopLine() : previewTopLine();
    panes.dataset.pane = pane;
    for (const tab of root.querySelectorAll('.editor-tab')) tab.setAttribute('aria-selected', String(tab.dataset.pane === pane));
    previewSeen = { frame: null, y: 0 }; // Where the preview stood while hidden says nothing.
    if (line === null) return;
    if (pane === 'preview') scrollPreviewTo(line, caret?.offset); // Reading its layout lays it out.
    else {
      // Through CodeMirror, which otherwise puts back its own position once it sees itself shown again.
      const doc = view.state.doc, number = Math.min(Math.max(Math.floor(line), 1), doc.lines);
      const block = view.lineBlockAt(doc.line(number).from);
      view.dispatch({ effects: EditorView.scrollIntoView(block.from, { y: 'start', yMargin: -(line - number) * block.height }) });
    }
  }
  // In the one-pane layout the preview tab is the preview button: it previews, and shows the preview once done.
  for (const button of root.querySelectorAll('.editor-tab')) {
    button.addEventListener('click', () => {
      if (button.dataset.pane === 'source') { previewTabWaiting = false; showPane('source'); return; }
      if ($('.editor-panes').dataset.pane === 'preview') return;
      previewTabWaiting = true;
      schedulePreview(0);
    });
  }

  // Problems are marked in the source. Two sources: the instant check in the browser (assets/js/editor/check.js,
  // loaded once the editor is up), run on the current text after a short pause in typing; and what the server
  // reported about a text previewed or submitted earlier. The server's findings are placed on that text and
  // carried through every edit since, so they stay on the words they point to until the next report.
  function track() {
    const tracker = { changes: ChangeSet.empty(view.state.doc.length) };
    trackers.add(tracker);
    return tracker;
  }
  function follow(changes) {
    for (const tracker of trackers) tracker.changes = tracker.changes.compose(changes);
    reported = reported.filter(problem => !touched(changes, problem)).map(problem => {
      const from = changes.mapPos(problem.from, 1), to = changes.mapPos(problem.to, -1);
      return { ...problem, from, to: Math.max(from, to) };
    });
  }
  /**
   * Whether an edit changed something in a marked range (positions before the edit): text replaced or
   * deleted in it, or typed inside it (typing just before or after it leaves it alone).
   */
  function touched(changes, { from, to }) {
    let hit = false;
    changes.iterChangedRanges((fromA, toA) => {
      if (fromA < toA ? fromA < to && toA > from : from < fromA && fromA < to) hit = true;
    });
    return hit;
  }
  /** Marks whose text was edited go at once: they may no longer hold (the next check or preview says again). */
  function dropTouched(update) {
    const kept = [];
    let dropped = false;
    forEachDiagnostic(update.startState, (diagnostic, from, to) => {
      if (touched(update.changes, { from, to })) { dropped = true; return; }
      const start = update.changes.mapPos(from, 1), end = update.changes.mapPos(to, -1);
      kept.push({ ...diagnostic, from: start, to: Math.max(start, end) });
    });
    // Not within this update: CodeMirror takes no new transaction while it applies one.
    if (dropped) queueMicrotask(() => view.dispatch(setDiagnostics(view.state, kept)));
  }
  // A failed load (a deployment in progress, say) is tried again at the next check.
  const loadChecker = () => loadCheckModule().then(module => module?.check);
  const lintNow = async () => { const check = await loadChecker(); return lintPage(check ? check(current(), path, bookLabels) : []); };
  /** What the server reported about `sent` (the text then), placed in the current text and shown at once. */
  async function problems(missing, errors, tracker, sent) {
    const doc = Text.of(sent.split('\n'));
    const place = range => {
      const from = tracker.changes.mapPos(range.from, 1), to = tracker.changes.mapPos(range.to, -1);
      return { from, to: Math.max(from, to) };
    };
    reported = [
      ...errors.filter(error => error.line && (!error.file || error.file === `content/${path}`))
        .map(error => ({ ...place(problemRange(doc, error.line, error.column)), severity: 'error', message: error.message })),
      ...missing.map(link => ({ ...place(problemRange(doc, link.line, link.column)), severity: 'warning', message: text('missing_link', { name: link.target }) })),
    ];
    // forceLinting only hurries a check already due after an edit; set the marks directly.
    const diagnostics = await lintNow();
    view.dispatch(setDiagnostics(view.state, diagnostics));
  }
  /**
   * The part of a text a problem points to: from its column to the end of the link or word there,
   * or the whole line when the column is unknown.
   */
  function problemRange(doc, number, column) {
    const line = doc.line(Math.min(Math.max(number, 1), doc.lines));
    if (!column) return { from: line.from, to: line.to };
    const rest = line.text.slice(column - 1);
    const length = rest.startsWith('[[') ? (rest.indexOf(']]') + 1 || rest.length - 1) + 1 : rest.match(/^[^\s，。；、：！？,.;!?()（）]+/)?.[0].length ?? 1;
    const from = Math.min(line.from + column - 1, line.to);
    return { from, to: Math.min(from + Math.max(length, 1), line.to) };
  }
  /** The browser's own findings on the current text, with the server's; the same message once. */
  function lintPage(local) {
    const doc = view.state.doc;
    const found = local.map(error => ({ ...problemRange(doc, error.line, error.column), severity: 'error', message: error.message }));
    const messages = new Set(found.map(problem => problem.message));
    return [...found, ...reported.filter(problem => !messages.has(problem.message))];
  }
  view.dispatch({ effects: lint.reconfigure(linter(lintNow, { delay: 300 })) });

  // Submitting.
  /** Whether the pull request is someone else's (GitHub logins are case-insensitive). */
  function othersPull() { return Boolean(pull?.author) && pull.author.toLowerCase() !== user.login.toLowerCase(); }
  function showPull() {
    const element = $('.editor-pull');
    element.hidden = !pull;
    if (pull) {
      element.href = pull.url;
      element.querySelector('.editor-pull-text').textContent = text(othersPull() ? 'in_pull_by' : 'in_pull', { number: pull.number, author: pull.author });
    }
  }
  const dialog = $('.editor-submit-dialog');
  const form = dialog.querySelector('.editor-submit-form'), done = dialog.querySelector('.editor-submit-done');
  const result = dialog.querySelector('.editor-submit-result');
  done.querySelector('.editor-submit-done-close').addEventListener('click', () => dialog.close());
  // The dialog opens once the text is previewed without errors: at once if it is, otherwise after its preview
  // (the button shows a spinner meanwhile); errors appear over the preview instead.
  $('.editor-submit-button').addEventListener('click', () => {
    if (current() === baseline && source.json.exists) { $('.editor-status').textContent = text('unchanged'); return; }
    if (current() === approved) { openSubmitDialog(); return; }
    if (submitWaiting) return;
    submitWaiting = true;
    busy($('.editor-submit-button'), true);
    schedulePreview(0);
  });
  function openSubmitDialog() {
    const update = dialog.querySelector('.editor-submit-update');
    update.hidden = !pull;
    if (pull) withPullLink(update, text(othersPull() ? 'submit_update_other' : 'submit_update', { number: pull.number, author: pull.author }), pull.url);
    result.replaceChildren();
    form.hidden = false;
    done.hidden = true;
    updateSubmit();
    dialog.showModal();
  }
  dialog.querySelector('form').addEventListener('submit', async event => {
    if (event.submitter?.value !== 'submit') return;
    event.preventDefault();
    if (current() !== approved || submitting) return;
    submitting = true;
    updateSubmit();
    result.textContent = text('submitting');
    const value = current();
    const tracker = track();
    const { status: code, json } = await request('POST', 'submit', { path, text: value, original, message: dialog.querySelector('input').value, ...(pull ? { pull: pull.number } : {}) });
    trackers.delete(tracker);
    submitting = false;
    updateSubmit();
    if (json.ok) {
      original = json.original;
      // The page as committed: formatted (scripts/format/markdown.mjs). Unless typing went on meanwhile, the editor
      // shows it, changing only the lines that differ (the cursor and the marks stay where they were).
      const committed = typeof json.text === 'string' ? json.text : value;
      baseline = committed;
      if (committed !== value && current() === value) {
        view.dispatch({ changes: diff(value, committed).map(({ fromA, toA, fromB, toB }) => ({ from: fromA, to: toA, insert: committed.slice(fromB, toB) })) });
        // It renders as the previewed text did.
        previewed = approved = committed;
      }
      pull = { number: json.number, url: json.url, author: pull?.author ?? user.login };
      storage.remove(draftKey);
      showPull();
      // Reopening the editor (or reloading it) continues on this pull request.
      window.history.replaceState(null, '', `?${new URLSearchParams({ path, pull: json.number })}`);
      // The dialog turns into the confirmation.
      dialog.querySelector('input').value = '';
      withPullLink(done.querySelector('.editor-submit-done-text'), text(json.updated ? 'submit_done_updated' : 'submit_done_opened', { number: json.number }), json.url);
      done.querySelector('.editor-submit-done-link').href = json.url;
      form.hidden = true;
      done.hidden = false;
      return;
    }
    if (code === 409 && json.current) {
      // Someone changed the page: compare with their version, then submit against it.
      dialog.close();
      original = json.current.original;
      baseline = json.current.text;
      compareWith(json.current.text, text('conflict'));
      return;
    }
    if (code === 422) problems([], json.errors, tracker, value);
    if (code === 410) { result.textContent = text('pull_closed'); return; }
    result.textContent = text('submit_failed', { message: errorText(json) });
  });

  if (!storageWorks) status(text('offline_unsaved'));
  schedulePreview(0);
}
