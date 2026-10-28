/**
 * The site's line icons, as SVG: in the templates (layout.mjs's icon) and in the notices pages write (tags.mjs).
 */
const shapes = {
  search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  sidebar: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>',
  back: '<path d="m11 5-7 7 7 7M4 12h16"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  subitem: '<path d="M6 4v6a4 4 0 0 0 4 4h9"/><path d="m15 10 4 4-4 4"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
  book: '<path d="M12 3l9 2.5v14L12 17Z"/><path d="M12 3 3 4.5v14l4.5-.75M12 3c-1.4 1-2.2 2.4-4.5 3.5v14l4.5-3.5"/>',
  external: '<path d="M14 3h7v7M21 3 10 14M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5"/>',
  disambiguation: '<path d="M4 12h4c3 0 4-2 4-5s1-3 4-3h4M8 12c3 0 4 2 4 5s1 3 4 3h4M17 1l3 3-3 3M17 17l3 3-3 3"/>',
  tip: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6"/><circle cx="12" cy="7" r="1.2" fill="currentColor" stroke="none"/>',
  file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z"/><path d="M14 3v5h5"/>',
  view: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  edit: '<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4Z"/><path d="m13.5 6.5 4 4"/>',
  problem: '<path d="M12 3 2 21h20L12 3Z M12 9v5"/><circle cx="12" cy="18" r="1.2" fill="currentColor" stroke="none"/>',
};
export const iconSVG = name => `<svg class="ui-icon${['folder', 'book', 'external'].includes(name) ? ` link-icon icon-${name}` : ''}" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${shapes[name] ?? ''}</svg>`;
