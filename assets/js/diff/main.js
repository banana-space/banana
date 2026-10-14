// One page's change in one pull request, on /diff/?pr=<number>&path=<page> (layouts/_default/diff.html), bundled by
// Hugo's js.Build. The texts before and after come from /api/recent-changes/diff; CodeMirror shows them as one
// read-only document with the deleted lines inline, unchanged stretches folded.
import { EditorState } from '@codemirror/state';
import { EditorView, lineNumbers } from '@codemirror/view';
import { syntaxHighlighting } from '@codemirror/language';
import { unifiedMergeView } from '@codemirror/merge';
import { bananaHighlighter, bananaMarkdown } from '../scripts/shared/markdown-language.mjs';

const config = JSON.parse(document.getElementById('diff-config').textContent);
const strings = config.strings;
const root = document.querySelector('.diff-page');
const status = root.querySelector('.diff-status');
const fill = (text, values) => text.replace(/\{(\w+)\}/g, (match, key) => key in values ? values[key] : match);
function element(tag, className, ...children) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  node.append(...children.filter(child => child !== undefined && child !== null && child !== false));
  return node;
}

function header(pull, page, edit) {
  document.title = fill(strings.pageTitle, { title: page.title });
  root.querySelector('.diff-title-text').innerHTML = page.titleHTML;
  const title = root.querySelector('.diff-title');
  if (page.group.kind === 'book') title.append(Object.assign(element('span', 'recent-page-group'), { innerHTML: page.group.titleHTML }));
  if (page.status === 'added') title.append(element('span', 'recent-badge recent-badge-added', strings.added));
  if (page.status === 'removed') title.append(element('span', 'recent-badge recent-badge-removed', strings.removed));
  if (page.status === 'renamed' && page.previous) title.append(element('span', 'recent-badge', fill(strings.renamed, { name: page.previous.replace(/\/_?index\.md$/, '').split('/').at(-1) })));

  const state = pull.state === 'merged' ? 'merged' : pull.draft ? 'draft' : 'open';
  const stateLabel = element('span', `recent-state recent-state-${state}`, strings[state]);
  // Merged, and the site not yet rebuilt with it.
  if (pull.live === false) {
    stateLabel.classList.add('is-publishing');
    stateLabel.append(Object.assign(element('span', 'recent-publishing', strings.publishing), { title: strings.publishingHint }));
  }
  const time = new Date(pull.time), pad = value => String(value).padStart(2, '0');
  const pullLink = element('a', 'recent-pull', element('span', 'recent-author', pull.author), element('span', 'recent-pull-number', `#${pull.number}`));
  Object.assign(pullLink, { href: pull.url, target: '_blank', rel: 'noopener' });
  const when = element('time', 'diff-time', `${time.getFullYear()}-${pad(time.getMonth() + 1)}-${pad(time.getDate())} ${pad(time.getHours())}:${pad(time.getMinutes())}`);
  when.dateTime = pull.time;
  root.querySelector('.diff-meta').append(...[
    stateLabel, pullLink,
    pull.namesPage ? null : element('span', 'recent-pull-summary', pull.title), when,
  ].filter(Boolean));
  if (pull.state === 'open') Object.assign(root.querySelector('.diff-note'), { hidden: false, textContent: strings.openNote });
  if (pull.live === false) {
    Object.assign(root.querySelector('.diff-note'), { hidden: false, textContent: strings.publishingNote });
    root.querySelector('.diff-note').classList.add('is-publishing');
  }

  if (page.url) Object.assign(root.querySelector('.diff-view-page'), { hidden: false, href: page.url });
  // The server decides which version the editor opens (an open pull request's own, for one the editor can add to).
  if (edit) Object.assign(root.querySelector('.diff-edit-page'), { hidden: false, href: `${config.edit}?${new URLSearchParams(edit)}` });
  root.querySelector('.diff-header').hidden = false;
}

function show(before, after) {
  const container = root.querySelector('.diff-view');
  container.hidden = false;
  new EditorView({
    parent: container,
    state: EditorState.create({
      doc: after ?? '',
      extensions: [
        lineNumbers(), EditorState.readOnly.of(true), EditorView.editable.of(false),
        bananaMarkdown(), syntaxHighlighting(bananaHighlighter),
        EditorState.phrases.of({ '$ unchanged lines': strings.cm_unchanged_lines }),
        unifiedMergeView({ original: before ?? '', mergeControls: false,
          // A new or deleted page is one inserted or deleted chunk; marking every character in it adds nothing.
          highlightChanges: before !== null && after !== null, gutter: true, collapseUnchanged: { margin: 3, minSize: 6 } }),
      ],
    }),
  });
}

async function load() {
  const params = new URLSearchParams(location.search);
  status.textContent = strings.loading;
  try {
    const response = await fetch(`${config.api}?${new URLSearchParams({ pr: params.get('pr') ?? '', path: params.get('path') ?? '' })}`, { headers: { Accept: 'application/json' } });
    const body = await response.json().catch(() => ({}));
    if (response.status === 404 || response.status === 400) throw Object.assign(new Error(body.errors?.[0]?.message), { missing: true });
    if (!response.ok || !body.ok) throw new Error(body.errors?.[0]?.message ?? response.status);
    header(body.pull, body.page, body.edit);
    status.textContent = '';
    show(body.before, body.after);
  } catch (error) {
    console.error(error);
    status.textContent = error.missing ? strings.missing : strings.error;
    status.classList.add('is-error');
  }
}
load();
