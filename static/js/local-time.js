// Keep the build's UTC fallback and machine-readable instant when conversion
// is unavailable. Date getters use the visitor's zone, including historical DST.
document.querySelectorAll('time[data-local-time]').forEach(element => {
  const date = new Date(element.getAttribute('datetime'));
  if (!Number.isFinite(date.getTime()) || !element.dataset.format) return;
  const pad = value => String(value).padStart(2, '0');
  const values = {
    year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate(),
    hour: pad(date.getHours()), minute: pad(date.getMinutes()),
  };
  element.textContent = element.dataset.format.replace(/\{(year|month|day|hour|minute)\}/g, (_match, key) => values[key]);
});
