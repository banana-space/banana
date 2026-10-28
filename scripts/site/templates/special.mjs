import { readFileSync } from 'node:fs';
import { parse } from 'yaml';
import { i18n } from '../../shared/i18n.mjs';
import { relURL } from '../../shared/urls.mjs';
import { escape, html, json, raw, url } from '../html.mjs';
import { icon } from './layout.mjs';

/**
 * The pages whose content their scripts build (by their layout parameter): the missing article, the recent
 * changes, a page's history, a change's diff, the editor; and the 404 page.
 */

/** Related pages for a name without a page ("title" or "path"), filled by static/js/related-search.js. */
const relatedSearch = source => html`<section class="related-search" data-source="${source}" aria-labelledby="related-search-title" hidden>
  <h2 id="related-search-title" class="related-search-title">${i18n('related_search_title')}</h2>
  <div class="search-page-results related-search-results"></div>
  <p class="related-search-more"><a href="${url(relURL('search/'))}"></a></p>
</section>
<script type="module" src="${url(relURL('js/related-search.js'))}"></script>`;

/** The 404 page. */
export const notFoundContent = site => html`<section class="container centered">
  <div class="error">
    <h1>404</h1>
    <h2>${i18n('page_not_found')}</h2>
    <p>${i18n('page_does_not_exist')}<br /><span data-related="none">${raw(i18n('head_back', site.home.href))}</span><span data-related="found" hidden>${raw(i18n('head_back_related', site.home.href))}</span></p>
  </div>
  ${relatedSearch('path')}
</section>`;

/** The missing-article page. */
export function missingContent(site) {
  const name = `<span id="missing-name" data-title-format="${escape(i18n('missing_page_title', { Name: '{name}' }))}" data-name-format="${escape(i18n('missing_quoted_name', { Name: '{name}' }))}">${escape(i18n('missing_name'))}</span>`;
  const links = { Home: site.home.href, Create: relURL('edit/') };
  return html`<section class="container page">
  <article>
    <h1>${i18n('missing_article')}</h1>
    <p>${raw(i18n('missing_content', { Name: name }))}</p>
    <p><span data-related="none">${raw(i18n('missing_create', links))}</span><span data-related="found" hidden>${raw(i18n('missing_create_related', links))}</span></p>
    ${relatedSearch('title')}
  </article>
</section>
<script defer src="${url(relURL('js/missing.js'))}"></script>`;
}

/** Recent pull requests, rendered by static/js/recent-changes.js. */
export function recentChangesContent() {
  const keys = { loading: 'loading', error: 'error', empty: 'empty', today: 'today', yesterday: 'yesterday', date: 'date', open: 'open', draft: 'draft', merged: 'merged', publishing: 'publishing', publishingHint: 'publishing_hint', added: 'added', removed: 'removed', renamed: 'renamed', pages: 'pages', morePages: 'more_pages', showPages: 'show_pages', hidePages: 'hide_pages', otherFiles: 'other_files', siteOnly: 'site_only', truncated: 'truncated', filterPages: 'filter_pages', noPages: 'no_pages' };
  const strings = Object.fromEntries(Object.entries(keys).map(([name, key]) => [name, i18n(`recent_changes_${key}`)]));
  Object.assign(strings, { loadMore: i18n('search_load_more'), minor: i18n('history_minor'), minorHint: i18n('history_minor_hint'), groups: { wiki: i18n('search_kind_wiki'), help: i18n('search_kind_guide') }, icons: { book: icon('book') } });
  return html`<section class="container recent-changes">
  <header class="recent-changes-header">
    <h1>${i18n('recent_changes_title')}</h1>
    <p class="recent-changes-intro">${raw(i18n('recent_changes_intro'))}</p>
  </header>
  <div class="recent-changes-controls" hidden>
    <div class="recent-changes-filters" role="group" aria-label="${i18n('search_filter')}">
      <button type="button" data-filter="all" aria-pressed="true">${i18n('search_kind_all')}</button>
      <button type="button" data-filter="open" aria-pressed="false">${i18n('recent_changes_open')}</button>
      <button type="button" data-filter="merged" aria-pressed="false">${i18n('recent_changes_merged')}</button>
    </div>
    <label class="recent-changes-toggle"><input type="checkbox" data-show="site" autocomplete="off"> ${i18n('recent_changes_show_site')}</label>
  </div>
  <p class="recent-changes-status" role="status"><noscript>${i18n('recent_changes_noscript')}</noscript></p>
  <div class="recent-changes-list"></div>
  <button class="recent-changes-more" type="button" hidden>${i18n('search_load_more')}</button>
</section>
<script type="application/json" id="recent-changes-config">${json({ api: relURL('api/recent-changes'), diff: relURL('diff/'), strings })}</script>
<script type="module" src="${url(relURL('js/recent-changes.js'))}"></script>`;
}

/** A page's history, rendered by static/js/history.js. */
export function historyContent(site) {
  const strings = {
    loading: i18n('recent_changes_loading'), error: i18n('history_error'), missing: i18n('history_missing'), pendingError: i18n('history_pending_error'),
    heading: i18n('history_title', { Title: '{title}' }), pageTitle: `${i18n('history_title', { Title: '{title}' })} - ${site.title}`,
    open: i18n('recent_changes_open'), draft: i18n('recent_changes_draft'), merged: i18n('recent_changes_merged'), publishing: i18n('recent_changes_publishing'),
    publishingHint: i18n('recent_changes_publishing_hint'), added: i18n('recent_changes_added'), removed: i18n('recent_changes_removed'), renamed: i18n('recent_changes_renamed'),
    commit: i18n('history_commit'), imported: i18n('history_imported'), created: i18n('history_created'), legacy: i18n('history_legacy'),
    legacyNote: i18n('history_legacy_note'), legacyShow: i18n('history_legacy_show'), hide: i18n('recent_changes_hide_pages'), showMore: i18n('history_show_more'),
    minor: i18n('history_minor'), minorHint: i18n('history_minor_hint'), noSummary: i18n('history_no_summary'), hiddenUser: i18n('history_hidden_user'),
  };
  return html`<section class="container history-page">
  <header class="history-header" hidden>
    <h1 class="history-title"></h1>
    <div class="diff-actions">
      <a class="diff-action history-view-page">${icon('view')}${i18n('diff_view_page')}</a>
      <a class="diff-action history-edit-page" rel="nofollow">${icon('edit')}${i18n('diff_edit_page')}</a>
    </div>
  </header>
  <p class="recent-changes-status history-status" role="status"><noscript>${i18n('history_noscript')}</noscript></p>
  <div class="history-list"></div>
</section>
<script type="application/json" id="history-config">${json({ data: relURL('history/data/'), api: relURL('api/page-history'), diff: relURL('diff/'), edit: relURL('edit/'), repository: `https://github.com/${site.repository}`, strings })}</script>
<script type="module" src="${url(relURL('js/history.js'))}"></script>`;
}

/** One page's change in one pull request, rendered by assets/js/diff/main.js. */
export function diffContent(site) {
  const strings = {
    loading: i18n('recent_changes_loading'), error: i18n('diff_error'), missing: i18n('diff_missing'), open: i18n('recent_changes_open'),
    draft: i18n('recent_changes_draft'), merged: i18n('recent_changes_merged'), publishing: i18n('recent_changes_publishing'),
    publishingHint: i18n('recent_changes_publishing_hint'), added: i18n('recent_changes_added'), removed: i18n('recent_changes_removed'),
    renamed: i18n('recent_changes_renamed'), icons: { book: icon('book') }, pageTitle: `${i18n('diff_title', { Title: '{title}' })} - ${site.title}`,
    openNote: i18n('diff_open_note'), historyBack: i18n('history_back'), cm_unchanged_lines: i18n('editor_cm_unchanged_lines'),
  };
  return html`<section class="container diff-page">
  <a class="diff-back" href="${url(relURL('recent-changes/'))}">${icon('back')}<span class="diff-back-text">${i18n('recent_changes_title')}</span></a>
  <header class="diff-header" hidden>
    <h1 class="diff-title"><span class="diff-title-text"></span></h1>
    <div class="diff-meta"></div>
    <p class="diff-note" hidden></p>
    <div class="diff-actions">
      <a class="diff-action diff-view-page" hidden>${icon('view')}${i18n('diff_view_page')}</a>
      <a class="diff-action diff-edit-page" rel="nofollow" hidden>${icon('edit')}${i18n('diff_edit_page')}</a>
    </div>
  </header>
  <p class="diff-status" role="status"><noscript>${i18n('recent_changes_noscript')}</noscript></p>
  <div class="diff-view" hidden></div>
</section>
<script type="application/json" id="diff-config">${json({ api: relURL('api/recent-changes/diff'), edit: relURL('edit/'), history: relURL('history/'), strings })}</script><script type="module" src="${url(site.assets.diff.href)}"></script>`;
}

const editorKeys = 'new_page view_page in_pull in_pull_by pull_choice pull_choice_own pull_none pull_missing pull_closed pull_conflict pull_merged resubmit_new resubmit_new_compare resubmit_own_compare resubmit_button submit_update_other submit_done_view loading load_failed unavailable logout my_pulls profile account_menu close submit_wait_preview submit_wait_errors draft_compare submit_done_opened submit_done_updated previewing preview_failed preview_empty preview_error_line problem_line missing_link draft_restored draft_discard draft_outdated draft_load conflict merge_done change_revert submit_update submitting submitted submit_updated submit_failed unchanged offline_unsaved open_no_slash new_page_not_entry preview_button_title completion_tag_see completion_tag_problems completion_tag_disambiguation completion_tag_tip completion_tag_person completion_parameter_original completion_parameter_lang completion_parameter_translit completion_parameter_ipa completion_parameter_years completion_terms cm_find cm_replace cm_next cm_previous cm_all cm_match_case cm_regexp cm_by_word cm_replace_one cm_replace_all cm_close cm_current_match cm_on_line cm_replaced_match cm_replaced_matches cm_go_to_line cm_go cm_diagnostics cm_no_diagnostics cm_folded_code cm_to cm_unfold cm_fold_line cm_unfold_line cm_folded_lines cm_unfolded_lines cm_completions cm_control_character cm_selection_deleted cm_unchanged_lines cm_accept cm_reject cm_revert_chunk'.split(' ');

const data = name => parse(readFileSync(new URL(`../../../data/${name}`, import.meta.url), 'utf8'));

/**
 * The data the editor's completion fetches (js/editor-names.json): each article's title as written (formulas in
 * TeX) with its aliases, the categories, the environments with their names, the language names (KaTeX's commands
 * come with bananamark-codemirror).
 */
export function editorNames(site) {
  const entries = site.regularPages.filter(page => page.section === 'wiki').flatMap(page => {
    const title = (page.params.titleParts ?? []).map(part => part.tex ? `$${part.tex}$` : part.text).join('');
    return title ? [{ title, aliases: page.params.wikiAliases ?? [] }] : [];
  });
  const theorems = data('theorems.yaml');
  const environments = Object.keys(theorems).sort().map(name => ({ name, label: typeof theorems[name].name === 'object' ? theorems[name].name['zh-cn'] : theorems[name].name }));
  return String(json({ entries, categories: Object.keys(data('categories.yaml') ?? {}).sort(), environments, languages: data('language_names.yaml') }));
}

/** The online editor (assets/js/editor/). */
export function editorContent(site, page) {
  const strings = Object.fromEntries(editorKeys.map(key => [key, i18n(`editor_${key}`)]));
  const { editor, editorCheck, editorNames: names } = site.assets;
  return html`<section class="editor" id="editor">
  <h1 class="sr-only">${i18n('editor_page_title')}</h1>
  <p class="editor-loading">${i18n('editor_loading')}</p>
  <div class="editor-login" hidden>
    <h2>${i18n('editor_login_title')}</h2>
    <p>${i18n('editor_login_intro')}</p>
    <a class="editor-button editor-button-primary editor-login-button" href="${url(relURL('api/auth/login'))}">${i18n('editor_login')}</a>
  </div>
  <p class="editor-unavailable" role="alert" hidden></p>
  <form class="editor-open" hidden>
    <label for="editor-open-input">${i18n('editor_open_label')}</label>
    <div class="editor-open-row">
      <input id="editor-open-input" name="path" autocomplete="off" spellcheck="false" placeholder="${i18n('editor_open_placeholder')}">
      <button type="submit" class="editor-button editor-button-primary">${i18n('editor_open_button')}</button>
    </div>
    <p class="editor-open-hint">${i18n('editor_open_hint')}</p>
  </form>
  <div class="editor-workspace" hidden>
    <div class="editor-bar">
      <div class="editor-page">
        <a class="editor-path editor-chip" target="_blank" rel="noopener">${icon('file')}<span class="editor-path-name"></span></a>
        <a class="editor-pull editor-chip" target="_blank" rel="noopener" hidden>${icon('edit')}<span class="editor-pull-text"></span></a>
        <a class="editor-view editor-chip" target="_blank" hidden>${icon('view')}${i18n('editor_view_page')}</a>
      </div>
      <div class="editor-actions">
        <span class="editor-status" role="status" aria-live="polite"></span>
        <span class="editor-spinner" hidden></span>
        <button type="button" class="editor-button editor-preview-button">${i18n('editor_preview_button')}</button>
        <button type="button" class="editor-button editor-button-primary editor-submit-button">${i18n('editor_submit_button')}</button>
        <span class="editor-user"></span>
      </div>
    </div>
    <div class="editor-banner" hidden></div>
    <div class="editor-tabs" role="tablist">
      <button type="button" role="tab" class="editor-tab" data-pane="source" aria-selected="true">${i18n('editor_source_tab')}</button>
      <button type="button" role="tab" class="editor-tab" data-pane="preview" aria-selected="false"><span class="editor-spinner" hidden></span>${i18n('editor_preview_tab')}</button>
    </div>
    <div class="editor-panes" data-pane="source">
      <div class="editor-source"></div>
      <div class="editor-preview">
        <p class="editor-preview-empty"></p>
        <div class="editor-preview-error" role="alert" hidden><h2>${i18n('editor_preview_error_title')}</h2><pre></pre></div>
        <iframe class="editor-frame" sandbox="allow-same-origin allow-popups allow-popups-to-escape-sandbox" title="${i18n('editor_preview_tab')}" hidden></iframe>
        <iframe class="editor-frame" sandbox="allow-same-origin allow-popups allow-popups-to-escape-sandbox" title="${i18n('editor_preview_tab')}" hidden></iframe>
      </div>
    </div>
  </div>
  <dialog class="editor-dialog editor-submit-dialog">
    <div class="editor-submit-done" hidden>
      <svg class="editor-done-icon" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="22"/><path d="M14.5 24.5l6.5 6.5 13-14"/></svg>
      <h2>${i18n('editor_submit_done_title')}</h2>
      <p class="editor-submit-done-text"></p>
      <div class="editor-dialog-actions">
        <a class="editor-button editor-submit-done-link" target="_blank">${i18n('editor_submit_done_view')}</a>
        <button type="button" class="editor-button editor-button-primary editor-submit-done-close">${i18n('editor_submit_close')}</button>
      </div>
    </div>
    <form method="dialog" class="editor-submit-form">
      <h2>${i18n('editor_submit_title')}</h2>
      <p class="editor-submit-intro">${i18n('editor_submit_intro')}</p>
      <p class="editor-submit-update" hidden></p>
      <label for="editor-submit-message">${i18n('editor_submit_message')}</label>
      <input id="editor-submit-message" name="message" maxlength="200" autocomplete="off">
      <label class="editor-submit-minor"><input type="checkbox" name="minor"><span>${i18n('editor_submit_minor')}<span class="editor-submit-minor-hint">${i18n('editor_submit_minor_hint')}</span></span></label>
      <p class="editor-submit-wait" hidden></p>
      <p class="editor-submit-result" role="status"></p>
      <div class="editor-dialog-actions">
        <button type="submit" value="cancel" class="editor-button">${i18n('editor_submit_cancel')}</button>
        <button type="submit" value="submit" class="editor-button editor-button-primary">${i18n('editor_submit_confirm')}</button>
      </div>
    </form>
  </dialog>
  <dialog class="editor-dialog editor-pull-dialog">
    <form method="dialog">
      <h2>${i18n('editor_pull_title')}</h2>
      <p class="editor-submit-intro">${i18n('editor_pull_intro')}</p>
      <div class="editor-pull-choices"></div>
      <div class="editor-dialog-actions">
        <button type="submit" value="confirm" class="editor-button editor-button-primary">${i18n('editor_pull_confirm')}</button>
      </div>
    </form>
  </dialog>
  <noscript><p>${i18n('editor_noscript')}</p></noscript>
  <template id="editor-icons"><span data-icon="close">${icon('close')}</span><span data-icon="chevron">${icon('chevron')}</span></template>
</section><script type="application/json" id="editor-config">${json({ api: relURL('api/'), check: editorCheck.href, names: names.href, page: page.href, strings })}</script><script type="module" src="${url(editor.href)}"></script>`;
}
