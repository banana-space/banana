// Keep the build's UTC fallback and machine-readable instant when conversion
// is unavailable. Date getters use the visitor's zone, including historical DST.
// A date may also name the visitor's today and yesterday (data-today, data-yesterday)
// and give another format for a year other than the current one (data-year-format).
document.querySelectorAll('time[data-local-time]').forEach(element => {
  const date = new Date(element.getAttribute('datetime'));
  if (!Number.isFinite(date.getTime()) || !element.dataset.format) return;
  const pad = value => String(value).padStart(2, '0');
  const values = {
    year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate(),
    hour: pad(date.getHours()), minute: pad(date.getMinutes()),
  };
  const now = new Date();
  const sameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  const { today, yesterday, yearFormat } = element.dataset;
  if (today && sameDay(date, now)) { element.textContent = today; return; }
  if (yesterday && sameDay(date, new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1))) { element.textContent = yesterday; return; }
  const format = yearFormat && date.getFullYear() !== now.getFullYear() ? yearFormat : element.dataset.format;
  element.textContent = format.replace(/\{(year|month|day|hour|minute)\}/g, (_match, key) => values[key]);
});
// In a list marked data-hide-repeats, a date the row above already shows (in the visitor's zone) is marked
// is-repeat, which hides it; the build marked them by the UTC date.
document.querySelectorAll('[data-hide-repeats]').forEach(list => {
  let previous;
  for (const element of list.querySelectorAll('time[data-local-time]')) {
    element.classList.toggle('is-repeat', element.textContent === previous);
    previous = element.textContent;
  }
});
