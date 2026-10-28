// Atomic SVGs can break before closing punctuation. Protect that boundary while
// preserving wrapping within link labels.
// First, an external link's last word goes with its icon.
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
  if (!text || label.querySelector('.bm-math-rendered, .katex')) {
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

// Closing punctuation right after an inline diagram or an external link's icon stays on its line: a nowrap group of
// the two, the link's label wrapping inside it. (After a formula, bananamark already keeps it with the formula's last
// box: span.bm-math-end.)
document.querySelectorAll('a.external-link, .bm-tikz-rendered[data-display="false"]').forEach(element => {
  if (element.parentElement.classList.contains('inline-punctuation')) return;
  const following = element.nextSibling;
  if (following?.nodeType !== Node.TEXT_NODE) return;
  const punctuation = following.data.match(/^[,.;:!?，。．；：！？、)\]}）］｝〉》」』】〕〗〙〛”’»›…]+/u)?.[0];
  if (!punctuation) return;
  if (element.tagName === 'A' && !element.querySelector('.icon-external')) return;

  const group = document.createElement('span');
  group.className = 'inline-punctuation';
  following.splitText(punctuation.length);
  element.before(group);
  group.append(element, following);
});
