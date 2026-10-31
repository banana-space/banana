import { plainText } from '../../shared/summary.mjs';
import { t } from '../../shared/i18n.mjs';
import { relURL } from '../../shared/urls.mjs';
import { html, raw } from '../html.mjs';
import { displayTitle, icon } from './layout.mjs';

/**
 * The home page: the title, a sentence and the search field; the tiles for the wiki and the
 * lectures, the recent changes, the links to the guides and GitHub, and the body (content/index.md) as a note,
 * its first level-two heading the note's title.
 */

const two = number => String(number).padStart(2, '0');

/** A name in the recent changes: a page, a book ({ book }), or a page in one ({ book, page }); added: a new page. */
function recentName(site, item) {
  const book = item.book && site.pageAt(`/${item.book}`);
  const page = item.page && site.pageAt(`/${item.page}`);
  return html`<span class="home-recent-name">${book ? html`<a href="${book.href}">${book.metadata.collectionKind === 'lecture' ? icon('book') : ''}${displayTitle(site, book)}</a>` : ''}${item.book && item.page ? html`<span class="home-recent-path" aria-hidden="true">›</span>` : ''}${page ? html`<a href="${page.href}">${displayTitle(site, page)}</a>` : ''}${item.added ? html`<sup class="home-recent-new"><span aria-hidden="true">+</span><span class="sr-only">${t('recent_changes_added')}</span></sup>` : ''}</span>`;
}

/** The latest changes. */
function recentChanges(site, changes) {
  const recent = site.pageAt('/recent-changes');
  return html`<section class="home-recent" aria-labelledby="home-recent-title">
  <h2 class="home-recent-title" id="home-recent-title">${t('recent_changes_title')}</h2>
  <ol class="home-recent-list">${changes.map(change => {
    const time = new Date(change.time);
    const instant = `${time.getUTCFullYear()}-${two(time.getUTCMonth() + 1)}-${two(time.getUTCDate())}T${two(time.getUTCHours())}:${two(time.getUTCMinutes())}:${two(time.getUTCSeconds())}Z`;
    const pages = change.book
      ? html`${recentName(site, { book: change.book, added: change.added })}<span class="home-recent-more">${t('home_recent_in_book', { Count: change.pages })}</span>${change.title ? html`<span class="home-recent-summary">${change.title}</span>` : ''}`
      : html`${(change.items ?? []).map((item, index) => html`${index ? html`<span class="home-recent-separator"><span aria-hidden="true">·</span><span class="sr-only">、</span></span>` : ''}${recentName(site, item)}`)}${change.more ? html`<span class="home-recent-more">${t('home_recent_more', { Count: change.pages })}</span>` : ''}${change.title ? html`<span class="home-recent-summary">${change.title}</span>` : ''}`;
    return html`
    <li class="home-recent-item">
      <span class="home-recent-pages">${pages}</span>
      <time class="home-recent-day" datetime="${instant}" data-local-time data-format="${t('recent_changes_date')}" data-year-format="${t('home_recent_year_date')}" data-today="${t('recent_changes_today')}" data-yesterday="${t('recent_changes_yesterday')}">${t('recent_changes_date').replace('{month}', time.getUTCMonth() + 1).replace('{day}', time.getUTCDate())}</time>
      <time class="home-recent-clock" datetime="${instant}" data-local-time data-format="{hour}:{minute}">${two(time.getUTCHours())}:${two(time.getUTCMinutes())}</time>
    </li>`;
  })}
  </ol>
  <div class="home-recent-all"><a href="${recent.href}">${t('home_recent_all')} <span aria-hidden="true">→</span></a></div>
</section>`;
}

/** The body as the note: its first level-two heading the note's title, the rest its text. */
function note(content) {
  if (!content) return '';
  const heading = content.match(/^\s*<h2\b[\s\S]*?<\/h2>/)?.[0] ?? '';
  const title = plainText(heading.replace(/<a class="bm-heading-link"[^>]*>.*?<\/a>|<span class="bm-section-number">.*?<\/span>/g, ''));
  const body = content.startsWith(heading) ? content.slice(heading.length) : content;
  return html`<aside class="notice notice-note home-notice"${title ? html` aria-label="${title}"` : ''}>
        <span class="notice-icon">${icon('tip')}</span>
        <div class="notice-content">
          ${title ? html`<p class="notice-title">${title}</p>` : ''}
          <div class="notice-body">${raw(body)}</div>
        </div>
      </aside>`;
}

export function homeContent(site, page) {
  const wiki = site.leaves.filter(item => item.section === 'wiki').length;
  const books = site.listed.filter(item => item.metadata.collectionHome === true && item.metadata.collectionKind === 'lecture').length;
  const categories = site.pageAt('/categories'), bookIndex = site.pageAt('/books'), recent = site.pageAt('/recent-changes'), help = site.pageAt('/help');
  return html`<section class="container page home">
  <article>
    <header>
      <h1 class="title" id="page-title"><a class="title-link" href="${page.permalink}">${page.title}</a></h1>
      <p class="home-lede">${t('home_lede')}</p>
    </header>

    <form class="home-search" role="search" action="${relURL('search/')}" method="get">
      <label class="search-field home-search-field">
        ${icon('search')}
        <span class="sr-only">${t('search_label', { Site: site.title })}</span>
        <input type="search" name="q" enterkeyhint="search" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="home-search-results" aria-describedby="home-search-status" placeholder="${t('home_search_placeholder')}" autocomplete="off" spellcheck="false">
      </label>
      <div class="search-panel" tabindex="-1">
        <p id="home-search-status" class="search-status" role="status"></p>
        <div id="home-search-results" class="search-results" role="listbox" aria-label="${t('search_results')}"></div>
        <a class="search-all" href="${relURL('search/')}" hidden></a>
      </div>
    </form>

    <section class="home-browse" aria-labelledby="home-browse-title">
      <h2 class="home-browse-title" id="home-browse-title">${t('home_browse')}</h2>
      <div class="home-tiles">
        ${categories ? html`<a class="home-tile" href="${categories.href}">
          <span class="home-tile-name">${t('home_wiki')}</span>
          <span class="home-tile-text">${t('home_wiki_text')}</span>
          <span class="home-tile-foot"><span>${raw(t('home_wiki_count', { Count: wiki }))}</span><span class="home-tile-arrow" aria-hidden="true">→</span></span>
        </a>` : ''}
        ${bookIndex ? html`<a class="home-tile" href="${bookIndex.href}">
          <span class="home-tile-name">${displayTitle(site, bookIndex)}</span>
          <span class="home-tile-text">${t('home_books_text')}</span>
          <span class="home-tile-foot"><span>${raw(t('home_books_count', { Count: books }))}</span><span class="home-tile-arrow" aria-hidden="true">→</span></span>
        </a>` : ''}
      </div>
      ${page.metadata.recentChanges?.length ? recentChanges(site, page.metadata.recentChanges) : ''}
      <ul class="home-links">
        ${!page.metadata.recentChanges?.length ? html`<li><a href="${recent.href}"><span class="home-link-name">${t('recent_changes_title')}</span><span class="home-link-text">${t('home_recent_changes_text')}</span></a></li>` : ''}
        ${help ? html`<li><a href="${help.href}"><span class="home-link-name">${displayTitle(site, help)}</span><span class="home-link-text">${t('home_help_text')}</span></a></li>` : ''}
        ${site.repository ? html`<li><a href="${`https://github.com/${site.repository}`}" target="_blank" rel="noopener"><span class="home-link-name">GitHub${icon('external')}</span><span class="home-link-text">${t('home_github_text')}</span></a></li>` : ''}
      </ul>
      ${note(page.content)}
    </section>
  </article>
</section>`;
}
