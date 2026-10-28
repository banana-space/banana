import { i18n } from '../../shared/i18n.mjs';
import { relURL } from '../../shared/urls.mjs';
import { html, json, url } from '../html.mjs';
import { icon } from './layout.mjs';

/** Settings and text for static/js/search.js ({count} and the like it fills in). */
export function searchConfig(site) {
  const strings = {
    loading: i18n('search_loading'),
    error: i18n('search_error'),
    hint: i18n('search_hint'),
    noResults: i18n('search_no_results', { Query: '{query}' }),
    count: i18n('search_result_count', { Count: '{count}' }),
    viewAll: i18n('search_view_all', { Count: '{count}' }),
    moreInCollection: i18n('search_more_in_collection', { Collection: '{collection}', Count: '{count}' }),
    alias: i18n('search_alias', { Name: '{name}' }),
    loadMore: i18n('search_load_more'),
    relatedMore: i18n('related_search_more', { Query: '{query}' }),
    pageTitle: `${i18n('search_page_title')} - ${site.title}`,
    resultsTitle: `${i18n('search_results_title', { Query: '{query}' })} - ${site.title}`,
    icons: { folder: icon('folder'), book: icon('book'), subitem: icon('subitem') },
    kinds: {
      all: i18n('search_kind_all'), wiki: i18n('search_kind_wiki'), lecture: i18n('search_kind_lecture'),
      guide: i18n('search_kind_guide'), category: i18n('search_kind_category'), page: i18n('search_kind_page'),
    },
  };
  return html`<script type="application/json" id="search-config">${json({ bundle: relURL('pagefind/pagefind.js'), module: relURL('js/search.js'), page: relURL('search/'), strings })}</script>`;
}

/** The results page. */
export function searchPage(site, page) {
  return html`<section class="container search-page">
  <h1 class="sr-only">${i18n('search_page_title')}</h1>
  <form class="search-page-form" role="search" action="${url(page.href)}" method="get">
    <label class="search-field search-page-field">
      ${icon('search')}
      <span class="sr-only">${i18n('search_label', { Site: site.title })}</span>
      <input type="search" name="q" enterkeyhint="search" placeholder="${i18n('search_placeholder', { Site: site.title })}" aria-describedby="search-page-status" autocomplete="off" spellcheck="false">
    </label>
  </form>
  <div class="search-filters" role="group" aria-label="${i18n('search_filter')}" hidden></div>
  <p id="search-page-status" class="search-page-status" role="status"><noscript>${i18n('search_noscript')}</noscript></p>
  <div class="search-page-results"></div>
  <button class="search-load-more" type="button" hidden>${i18n('search_load_more')}</button>
</section>
<script type="module" src="${url(relURL('js/search-page.js'))}"></script>`;
}
