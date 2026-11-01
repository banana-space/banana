import { t } from '../../shared/i18n.mjs';
import { relURL } from '../../shared/urls.mjs';
import { html, json } from '../html.mjs';
import { icon } from './layout.mjs';

/** Settings and text for site/scripts/search.js ({count} and the like it fills in). */
export function searchConfig(site) {
  const strings = {
    loading: t('search_loading'),
    error: t('search_error'),
    hint: t('search_hint'),
    noResults: t('search_no_results', { Query: '{query}' }),
    count: t('search_result_count', { Count: '{count}' }),
    viewAll: t('search_view_all', { Count: '{count}' }),
    moreInCollection: t('search_more_in_collection', { Collection: '{collection}', Count: '{count}' }),
    alias: t('search_alias', { Name: '{name}' }),
    loadMore: t('search_load_more'),
    relatedMore: t('related_search_more', { Query: '{query}' }),
    pageTitle: `${t('search_page_title')} - ${site.title}`,
    resultsTitle: `${t('search_results_title', { Query: '{query}' })} - ${site.title}`,
    icons: { folder: icon('folder'), book: icon('book'), subitem: icon('subitem') },
    kinds: {
      all: t('search_kind_all'), wiki: t('search_kind_wiki'), lecture: t('search_kind_lecture'),
      guide: t('search_kind_guide'), category: t('search_kind_category'), page: t('search_kind_page'),
    },
  };
  return html`<script type="application/json" id="search-config">${json({ bundle: relURL('pagefind/pagefind.js'), module: relURL('js/search.js'), page: relURL('search/'), strings })}</script>`;
}

/** The results page. */
export function searchPage(site, page) {
  return html`<section class="container search-page">
  <h1 class="sr-only">${t('search_page_title')}</h1>
  <form class="search-page-form" role="search" action="${page.href}" method="get">
    <label class="search-field search-page-field">
      ${icon('search')}
      <span class="sr-only">${t('search_label', { Site: site.title })}</span>
      <input type="search" name="q" enterkeyhint="search" placeholder="${t('search_placeholder', { Site: site.title })}" aria-describedby="search-page-status" autocomplete="off" spellcheck="false">
    </label>
  </form>
  <div class="search-filters" role="group" aria-label="${t('search_filter')}" hidden></div>
  <p id="search-page-status" class="search-page-status" role="status"><noscript>${t('search_noscript')}</noscript></p>
  <div class="search-page-results"></div>
  <button class="search-load-more" type="button" hidden>${t('search_load_more')}</button>
</section>
<script type="module" src="${relURL('js/search-page.js')}"></script>`;
}
