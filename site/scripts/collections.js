// Native details also opens/closes the drawer without JavaScript.
(() => {
  const drawer = document.getElementById('collection-drawer');
  if (!drawer) return;
  const summary = drawer.querySelector('summary');
  const panel = drawer.querySelector('.collection-drawer-panel');
  const mobile = window.matchMedia('(max-width: 760px)');
  const wide = window.matchMedia('(min-width: 1320px)');
  const rightWide = window.matchMedia('(min-width: 1100px)');
  const sidebar = document.querySelector('.collection-sidebar-inner');
  // Centre the current page's row in a scrolling directory, without scrolling the page itself.
  const centreCurrent = container => {
    const current = container?.querySelector('.directory-tree a[aria-current="page"]');
    if (!current || !container.clientHeight) return;
    const bounds = container.getBoundingClientRect(), item = current.getBoundingClientRect();
    container.scrollTop += item.top + item.height / 2 - (bounds.top + container.clientHeight / 2);
  };
  const background = [document.querySelector('main'), document.querySelector('.site-footer'), document.querySelector('.navigation-inner'), document.querySelector('.collection-breadcrumbs')].filter(Boolean);
  const previousInert = new Map();
  let focusedBefore;
  const restoreBackground = () => {
    for (const [element, value] of previousInert) element.inert = value;
    previousInert.clear();
    document.body.classList.remove('collection-drawer-open');
    panel.removeAttribute('role');
    panel.removeAttribute('aria-modal');
  };
  const close = (restoreFocus = false) => {
    if (!drawer.open) return;
    drawer.open = false;
    restoreBackground();
    if (restoreFocus) {
      const target = focusedBefore?.isConnected && focusedBefore.getClientRects().length ? focusedBefore : wide.matches ? document.querySelector('.collection-sidebar a[aria-current]') : summary;
      target?.focus({ preventScroll: true });
    }
  };
  drawer.addEventListener('toggle', () => {
    restoreBackground();
    summary.setAttribute('aria-expanded', String(drawer.open));
    summary.setAttribute('aria-label', drawer.open ? summary.dataset.closeLabel : summary.dataset.openLabel);
    if (!drawer.open) return;
    document.dispatchEvent(new Event('collection-open'));
    focusedBefore = document.activeElement;
    if (mobile.matches) {
      document.body.classList.add('collection-drawer-open');
      panel.setAttribute('role', 'dialog');
      panel.setAttribute('aria-modal', 'true');
      panel.setAttribute('aria-label', panel.querySelector('.collection-tree-title')?.textContent.trim() ?? '');
      for (const element of background) { previousInert.set(element, element.inert); element.inert = true; }
    }
    centreCurrent(panel);
    (panel.querySelector('a[aria-current="page"]') ?? panel.querySelector('a'))?.focus({ preventScroll: true });
  });
  panel.addEventListener('click', event => {
    if (event.target.closest('a') && event.button === 0 && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) close();
  });
  document.addEventListener('click', event => { if (!drawer.contains(event.target)) close(); });
  document.addEventListener('keydown', event => {
    if (!drawer.open) return;
    if (event.key === 'Escape') { event.preventDefault(); event.stopImmediatePropagation(); close(true); return; }
    if (event.key !== 'Tab' || !mobile.matches) return;
    const controls = [summary, ...panel.querySelectorAll('a, summary, button')].filter(element => element.getClientRects().length);
    const first = controls[0], last = controls.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  }, { capture: true });
  document.querySelector('.header-toc-button')?.addEventListener('click', () => close());
  document.querySelector('.toc-disclosure')?.addEventListener('toggle', event => { if (event.target.open && !rightWide.matches) close(); });
  document.querySelector('.site-search input')?.addEventListener('focus', () => close());
  document.querySelector('.navigation-menu')?.addEventListener('toggle', event => { if (event.target.open) close(); });
  mobile.addEventListener('change', () => close(true));
  wide.addEventListener('change', () => { close(true); if (wide.matches) centreCurrent(sidebar); });
  centreCurrent(sidebar);
})();
