// Atomic SVGs and KaTeX bases can break before closing punctuation. Protect
// that boundary while preserving wrapping within link labels and formulas.
document.querySelectorAll('a.external-link').forEach(element => {
  if (element.querySelector('.external-link-label')) return;
  const icon = element.querySelector('.icon-external');
  if (!icon) return;

  const label = document.createElement('span');
  label.className = 'external-link-label';
  while (element.firstChild && element.firstChild !== icon) label.append(element.firstChild);
  element.prepend(label);

  // Leave the final word outside the wrapping prefix, so it stays with the
  // icon. Segment Unicode text and preserve emphasis across the split.
  const walker = document.createTreeWalker(label, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  const text = textNodes.map(node => node.data).join('').trimEnd();
  if (!text || label.querySelector('.math-rendered, .katex')) {
    label.style.whiteSpace = 'nowrap';
    return;
  }
  const segments = [...new Intl.Segmenter(undefined, { granularity: 'word' }).segment(text)];
  let final = segments.at(-1);
  if (/^\p{Punctuation}+$/u.test(final.segment)) {
    final = segments.findLast(segment => segment.isWordLike) ?? final;
  }
  let offset = final.index;
  const range = document.createRange();
  for (const node of textNodes) {
    if (offset < node.length) {
      range.setStart(node, offset);
      break;
    }
    offset -= node.length;
  }
  range.setEnd(label, label.childNodes.length);
  icon.before(range.extractContents());
});

document.querySelectorAll('a.external-link, .math-rendered[data-display="false"]').forEach(element => {
  if (element.parentElement.classList.contains('inline-punctuation')) return;
  const following = element.nextSibling;
  if (following?.nodeType !== Node.TEXT_NODE) return;
  const punctuation = following.data.match(/^[,.;:!?，。．；：！？、)\]}）］｝〉》」』】〕〗〙〛”’»›…]+/u)?.[0];
  if (!punctuation) return;

  const icon = element.querySelector('.icon-external');
  const bases = [...element.querySelectorAll('.katex-html > .katex-base')];
  const tikz = element.classList.contains('tikz-rendered');
  if (!icon && !bases.length && !tikz) return;

  const group = document.createElement('span');
  group.className = 'inline-punctuation';
  following.splitText(punctuation.length);
  element.before(group);
  group.append(element, following);

  if (!icon && !tikz) {
    // KaTeX normally permits breaks between these atomic bases. A wbr keeps
    // those same opportunities explicit inside the nowrap punctuation group.
    bases.slice(0, -1).forEach(base => base.after(document.createElement('wbr')));
  }
});
