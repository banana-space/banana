const title = new URLSearchParams(window.location.search).get('title');
if (title) {
  // The online editor makes an entry of this title (as the link wrote it, with its TeX), naming its
  // directory after it.
  const source = new URLSearchParams(window.location.search).get('source') ?? title;
  for (const create of document.querySelectorAll('.missing-create')) create.setAttribute('href', `${create.getAttribute('href')}?title=${encodeURIComponent(source)}`);
  const name = document.getElementById('missing-name');
  name.textContent = name.dataset.nameFormat.replace('{name}', () => title);
  document.title = name.dataset.titleFormat.replace('{name}', () => title);
  // The name arrives after the build's typography pass, so apply its curly-quote
  // rule (docs/typography.md) at the name's edges: a space between a Chinese
  // character and an opening quote, and between a closing quote and a Chinese character.
  const han = /\p{Script=Han}/u;
  const before = name.previousSibling, after = name.nextSibling;
  if (/^[‘“]/.test(name.textContent) && before?.nodeType === 3 && han.test(before.data.at(-1) ?? '')) before.data += ' ';
  if (/[’”]$/.test(name.textContent) && after?.nodeType === 3 && han.test(after.data[0] ?? '')) after.data = ` ${after.data}`;
}
