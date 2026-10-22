// Native fragment navigation keeps keyboard, history and modified-click behavior.
// CSS performs the smooth scroll; the measured offset follows a wrapping navigation bar.
const navigation = document.querySelector('.navigation');
if (navigation) {
  const updateOffset = () => {
    document.documentElement.style.setProperty('--anchor-offset', `${navigation.getBoundingClientRect().height + 16}px`);
  };
  updateOffset();
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(updateOffset).observe(navigation);
  else window.addEventListener('resize', updateOffset);

  // Re-align a direct fragment URL after fonts and formulas have finished laying out.
  window.addEventListener('load', () => {
    updateOffset();
    if (!window.location.hash) return;
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); }
    catch { return; }
    document.getElementById(id)?.scrollIntoView({ block: 'start', behavior: 'instant' });
  });
}

// A bibliography entry is highlighted while it is the fragment target, fading out (_bibliography.scss). Following a
// citation to the entry that already is the target changes nothing for CSS: restart the highlight.
document.addEventListener('click', event => {
  const link = event.target.closest?.('a[href*="#"]');
  if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (link.origin !== window.location.origin || link.pathname !== window.location.pathname || link.hash !== window.location.hash) return;
  let target;
  try { target = document.getElementById(decodeURIComponent(link.hash.slice(1))); }
  catch { return; }
  if (!target?.matches('.bibliography-entry, .bibliography-version')) return;
  target.style.animation = 'none';
  void target.offsetWidth; // Applies the removal, so that the animation starts again.
  target.style.animation = '';
});

// Reading controls share one directory, moved into the header only while it is open.
// Native details and fragment links remain usable without JavaScript.
if (navigation) {
  const disclosure = document.querySelector('.toc-disclosure');
  const directory = document.getElementById('TableOfContents');
  const directoryButton = navigation.querySelector('.header-toc-button');
  const directoryPanel = document.getElementById('header-toc-panel');
  const menu = navigation.querySelector('.navigation-menu');
  // The search results page has no header search.
  const search = navigation.querySelector('.site-search');
  const input = search?.querySelector('input');
  const searchToggle = navigation.querySelector('.search-toggle');
  const searchBack = navigation.querySelector('.search-back');
  const searchClear = navigation.querySelector('.search-clear');
  const searchPanel = search?.querySelector('.search-panel');
  // Keep these thresholds in sync with _variables.scss.
  const wide = window.matchMedia('(min-width: 1100px)');
  const compactSearch = window.matchMedia('(max-width: 760px)');
  const entries = directory ? Array.from(directory.querySelectorAll('a')).map(link => {
    let heading;
    try { heading = document.getElementById(decodeURIComponent(link.hash.slice(1))); }
    catch { /* An invalid fragment must not break the remaining navigation. */ }
    return { link, heading };
  }).filter(entry => entry.heading) : [];
  let active = null;
  let scheduled = false;

  const revealActive = () => {
    // Keep the current heading visible through any collapsed ancestor sections.
    for (let branch = active?.link.closest('details.toc-branch'); branch && directory.contains(branch); branch = branch.parentElement.closest('details.toc-branch')) {
      branch.open = true;
    }
    if (!active || (!wide.matches && directoryPanel.hidden && !disclosure.open)) return;
    const bounds = directory.getBoundingClientRect();
    const item = active.link.getBoundingClientRect();
    if (item.top < bounds.top) directory.scrollTop += item.top - bounds.top;
    else if (item.bottom > bounds.bottom) directory.scrollTop += item.bottom - bounds.bottom;
  };

  const closeDirectory = (restoreFocus = false) => {
    if (!directoryPanel || directoryPanel.hidden) return;
    directoryPanel.hidden = true;
    disclosure.append(directory);
    directoryButton.setAttribute('aria-expanded', 'false');
    if (restoreFocus) directoryButton.focus();
  };

  // Results load with static/js/search.js on first use (see headerSearch there).
  let searchController = null;
  let searchLoading = null;
  const loadSearch = () => {
    let settings;
    try { settings = JSON.parse(document.getElementById('search-config').textContent); }
    catch { return; }
    searchLoading ??= import(settings.module).then(module => {
      searchController = module.headerSearch({
        search, input,
        compact: () => compactSearch.matches,
        onNavigate: (link, event) => {
          // Links within this page do not unload it, so the panel closes itself.
          if (event.defaultPrevented || link.pathname !== window.location.pathname || !link.hash) return;
          closeSearch({ keepHistory: true });
        },
      });
    }).catch(() => { searchLoading = null; });
  };

  // The compact search covers the page. It takes a history entry, so the back
  // gesture closes it and returning to the page restores the query.
  const searchHistory = () => window.history?.state?.search !== undefined;
  const pushSearchHistory = () => {
    if (!searchHistory()) window.history?.pushState({ ...window.history.state, search: input.value }, '');
  };
  const dropSearchHistory = () => {
    const { search: _, ...state } = window.history.state;
    window.history.replaceState(Object.keys(state).length ? state : null, '');
  };

  // Fit the compact results above the on-screen keyboard.
  const fitSearchPanel = () => {
    if (!navigation.classList.contains('is-searching')) return;
    const viewport = window.visualViewport;
    const height = (viewport?.height ?? window.innerHeight) - search.getBoundingClientRect().bottom;
    searchPanel.style.setProperty('--search-panel-height', `${Math.max(height, 0)}px`);
  };

  const closeSearch = ({ restoreFocus = false, keepHistory = false } = {}) => {
    if (!search) return;
    const wasCompact = navigation.classList.contains('is-searching');
    navigation.classList.remove('is-searching');
    document.documentElement.classList.remove('search-locked');
    search.classList.remove('is-open');
    searchToggle.setAttribute('aria-expanded', 'false');
    searchBack.hidden = true;
    searchClear.hidden = true;
    searchController?.reset();
    if (wasCompact && search.contains(document.activeElement)) input.blur();
    if (restoreFocus && wasCompact) searchToggle.focus();
    if (searchHistory()) {
      if (keepHistory || !wasCompact) dropSearchHistory();
      else window.history.back();
    }
  };

  const updateReadingPosition = () => {
    scheduled = false;
    const navHeight = navigation.getBoundingClientRect().height;
    if (directoryButton) {
      const passed = disclosure.querySelector('summary').getBoundingClientRect().bottom <= navHeight;
      directoryButton.classList.toggle('is-visible', !wide.matches && passed);
      if (!passed || wide.matches) closeDirectory();
    }
    const readingLine = navHeight + Math.min(window.innerHeight * 0.18, 140);
    let current = null;
    for (const entry of entries) {
      if (entry.heading.getBoundingClientRect().top <= readingLine) current = entry;
      else break;
    }
    if (entries.length && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      current = entries.at(-1);
    }
    if (current !== active) {
      active?.link.removeAttribute('aria-current');
      current?.link.setAttribute('aria-current', 'location');
      active = current;
      revealActive();
    }
  };

  const scheduleUpdate = () => {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(updateReadingPosition);
    }
  };

  const openSearch = () => {
    closeDirectory();
    menu.open = false;
    loadSearch();
    search.classList.add('is-open');
    if (compactSearch.matches && !navigation.classList.contains('is-searching')) {
      navigation.classList.add('is-searching');
      document.documentElement.classList.add('search-locked');
      searchToggle.setAttribute('aria-expanded', 'true');
      searchBack.hidden = false;
      searchClear.hidden = false;
      pushSearchHistory();
      fitSearchPanel();
      searchController?.update();
    }
    if (document.activeElement !== input) input.focus({ preventScroll: true });
  };

  document.addEventListener('collection-open', () => {
    closeDirectory();
    closeSearch();
    menu.open = false;
    if (disclosure && !wide.matches) disclosure.open = false;
  });

  if (search) {
    input.disabled = false;
    searchToggle.hidden = false;
    searchToggle.addEventListener('click', openSearch);
    input.addEventListener('focus', openSearch);
    input.addEventListener('input', () => {
      // Typing reopens a search that was closed while the box kept focus.
      if (!search.classList.contains('is-open')) openSearch();
      if (searchHistory()) window.history.replaceState({ ...window.history.state, search: input.value }, '');
    });
    // Until the results script has loaded, Enter goes straight to the results page.
    input.addEventListener('keydown', event => {
      if (event.key !== 'Enter' || searchController || event.isComposing) return;
      event.preventDefault();
      const query = input.value.trim();
      const page = searchPanel.querySelector('.search-all');
      if (query) window.location.assign(`${page.getAttribute('href')}?q=${encodeURIComponent(query)}`);
    });
    searchBack.addEventListener('click', () => closeSearch({ restoreFocus: true }));
    search.addEventListener('focusout', event => {
      // Switching to another window or app keeps the search as it was.
      if (document.hasFocus && !document.hasFocus()) return;
      if (!search.contains(event.relatedTarget) && !searchToggle.contains(event.relatedTarget)) closeSearch();
    });
    searchClear.addEventListener('click', () => {
      input.value = '';
      input.dispatchEvent(new Event('input'));
      input.focus({ preventScroll: true });
    });
    // Scrolling the compact results hides the keyboard; focus stays in the search.
    searchPanel.addEventListener('touchmove', () => {
      if (document.activeElement === input) searchPanel.focus({ preventScroll: true });
    }, { passive: true });
    window.visualViewport?.addEventListener('resize', fitSearchPanel);
    window.addEventListener('popstate', event => {
      if (event.state?.search === undefined) {
        if (navigation.classList.contains('is-searching')) closeSearch({ keepHistory: true });
      } else if (compactSearch.matches) {
        input.value = event.state.search;
        openSearch();
      }
    });
  }

  if (directoryButton) {
    directoryButton.hidden = false;
    directoryButton.addEventListener('click', () => {
      if (!directoryPanel.hidden) { closeDirectory(true); return; }
      closeSearch();
      menu.open = false;
      disclosure.open = false;
      directoryPanel.append(directory);
      directoryPanel.hidden = false;
      directoryButton.setAttribute('aria-expanded', 'true');
      revealActive();
      (active?.link ?? entries[0]?.link)?.focus({ preventScroll: true });
    });
    directory.addEventListener('click', event => {
      const link = event.target.closest('a');
      if (!link || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      closeDirectory();
      if (!wide.matches) disclosure.open = false;
      const target = entries.find(entry => entry.link === link)?.heading;
      if (target) {
        target.tabIndex = -1;
        target.focus({ preventScroll: true });
      }
      scheduleUpdate();
    });
    disclosure.addEventListener('toggle', () => {
      if (disclosure.open && !wide.matches) {
        closeDirectory();
        closeSearch();
        menu.open = false;
      }
      scheduleUpdate();
    });
  }

  menu.addEventListener('toggle', () => {
    if (menu.open) { closeDirectory(); closeSearch(); }
  });
  // A drag that starts in the search box (selecting its text) and ends outside
  // it fires its click on a common ancestor; that is not a click outside.
  let pressedInSearch = false;
  document.addEventListener('pointerdown', event => {
    pressedInSearch = Boolean(search?.contains(event.target) || searchToggle?.contains(event.target));
  }, { capture: true });
  document.addEventListener('click', event => {
    if (!directoryPanel?.contains(event.target) && !directoryButton?.contains(event.target)) closeDirectory();
    if (search && !pressedInSearch && !search.contains(event.target) && !searchToggle.contains(event.target)) closeSearch();
    pressedInSearch = false;
    if (!menu.contains(event.target)) menu.open = false;
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const searchOpen = search?.classList.contains('is-open');
    const somethingOpen = (directoryPanel && !directoryPanel.hidden) || searchOpen || menu.open || (disclosure?.open && !wide.matches);
    if (!somethingOpen) return;
    event.preventDefault();
    if (directoryPanel && !directoryPanel.hidden) closeDirectory(true);
    else if (navigation.classList.contains('is-searching')) closeSearch({ restoreFocus: true });
    else if (searchOpen) { closeSearch(); input.blur(); }
    else if (menu.open) { menu.open = false; menu.querySelector('summary').focus(); }
    else if (disclosure?.open && !wide.matches) { disclosure.open = false; disclosure.querySelector('summary').focus(); }
  }, { capture: true });
  // Close a panel when keyboard focus leaves it, so it never obscures the next control.
  document.addEventListener('focusin', event => {
    if (!directoryPanel?.contains(event.target) && !directoryButton?.contains(event.target)) closeDirectory();
    if (search && !search.contains(event.target) && !searchToggle.contains(event.target)) closeSearch();
    if (!menu.contains(event.target)) menu.open = false;
  });

  const applyLayout = () => {
    const searchHadFocus = search?.contains(document.activeElement);
    const directoryHadFocus = directoryPanel?.contains(document.activeElement);
    closeDirectory();
    closeSearch({ keepHistory: true });
    menu.open = false;
    if (disclosure) disclosure.open = wide.matches;
    if (searchHadFocus && compactSearch.matches) searchToggle.focus();
    if (directoryHadFocus) {
      if (wide.matches) (active?.link ?? entries[0]?.link)?.focus({ preventScroll: true });
      else disclosure.querySelector('summary').focus({ preventScroll: true });
    }
    scheduleUpdate();
  };
  wide.addEventListener('change', applyLayout);
  compactSearch.addEventListener('change', applyLayout);
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('load', scheduleUpdate);
  window.addEventListener('hashchange', scheduleUpdate);
  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(navigation);
    const article = document.querySelector('.page > article');
    if (article) observer.observe(article);
  }
  applyLayout();
  // A reload or a return without the page cache: reopen the compact search.
  if (search && window.history?.state?.search !== undefined && compactSearch.matches) {
    input.value = window.history.state.search;
    openSearch();
  }
}

// The home page has its own search field (layouts/index.html). It shows results in a panel like the header's,
// through the same module; on a narrow screen, typing hands the query over to the header's full-screen search.
// The header's field stays out of the way while the page's is in view (styles in _home.scss).
const homeSearch = document.querySelector('.home-search');
if (navigation && homeSearch) {
  const input = homeSearch.querySelector('input');
  const compact = window.matchMedia('(max-width: 760px)');
  const headerInput = navigation.querySelector('.site-search input');
  const headerToggle = navigation.querySelector('.search-toggle');
  let controller = null;
  let loading = null;
  const load = () => {
    let settings;
    try { settings = JSON.parse(document.getElementById('search-config').textContent); }
    catch { return; }
    loading ??= import(settings.module).then(module => {
      controller = module.headerSearch({ search: homeSearch, input, compact: () => false, onNavigate: () => {} });
    }).catch(() => { loading = null; });
  };
  const open = () => {
    if (compact.matches) return;
    homeSearch.classList.add('is-open');
    load();
  };
  const close = () => {
    homeSearch.classList.remove('is-open');
    controller?.reset();
  };
  // The header's compact search covers the page; the toggle opens it and focuses its field.
  const handOver = () => {
    if (!headerInput || !headerToggle) return false;
    headerInput.value = input.value;
    input.value = '';
    homeSearch.classList.remove('has-query');
    headerToggle.click();
    headerInput.dispatchEvent(new Event('input'));
    return true;
  };
  input.addEventListener('focus', open);
  input.addEventListener('input', () => {
    if (compact.matches && input.value && handOver()) return;
    if (!homeSearch.classList.contains('is-open')) open();
  });
  input.addEventListener('keydown', event => {
    if (event.key === 'Escape') { close(); input.blur(); }
  });
  homeSearch.addEventListener('focusout', event => {
    if (document.hasFocus && !document.hasFocus()) return;
    if (!homeSearch.contains(event.relatedTarget)) close();
  });
  if (typeof IntersectionObserver !== 'undefined') {
    const navHeight = Math.round(navigation.getBoundingClientRect().height) || 72;
    new IntersectionObserver(([entry]) => {
      navigation.classList.toggle('home-search-visible', entry.isIntersecting);
    }, { rootMargin: `-${navHeight}px 0px 0px 0px` }).observe(homeSearch);
  }
}
