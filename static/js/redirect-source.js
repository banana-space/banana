// Only a declared alias of this page can appear in the source notice.
const notice = document.getElementById('redirect-source');
if (notice) {
  const source = new URLSearchParams(window.location.search).get('from');
  const aliases = JSON.parse(notice.dataset.aliases);
  if (aliases.includes(source)) {
    notice.querySelector('span').textContent = source;
    notice.hidden = false;
  }
}
