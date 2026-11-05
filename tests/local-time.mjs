import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const script = await readFile(new URL('../site/scripts/local-time.js', import.meta.url), 'utf8');
const format = '{year}/{month}/{day} {hour}:{minute}';
for (const [zone, instant, expected, viewedAt = '2024-07-01T12:00:00Z'] of [
  ['UTC', '2024-06-01T12:30:55Z', '2024/6/1 12:30'],
  ['Asia/Shanghai', '2024-06-01T12:30:55Z', '2024/6/1 20:30'],
  ['America/Los_Angeles', '2025-01-01T00:05:00Z', '2024/12/31 16:05'],
  ['Europe/London', '2024-06-01T12:30:00Z', '2024/6/1 13:30', '2024-01-01T12:00:00Z'],
  ['Europe/London', '2024-01-01T12:30:00Z', '2024/1/1 12:30'],
  ['Asia/Kathmandu', '2024-06-01T12:30:00Z', '2024/6/1 18:15'],
  ['Australia/Adelaide', '2024-06-01T12:30:00Z', '2024/6/1 22:00'],
  ['UTC', 'invalid', 'UTC fallback'],
]) {
  const code = `
    import { runInNewContext } from 'node:vm';
    const element = {
      textContent: 'UTC fallback', dataset: { format: ${JSON.stringify(format)} },
      getAttribute: name => { if (name !== 'datetime') throw Error(name); return ${JSON.stringify(instant)}; },
    };
    class ClockDate extends Date {
      constructor(...args) { super(...(args.length ? args : [${JSON.stringify(viewedAt)}])); }
      static now() { return Date.parse(${JSON.stringify(viewedAt)}); }
    }
    runInNewContext(${JSON.stringify(script)}, { Date: ClockDate, document: { querySelectorAll: selector => selector === 'time[data-local-time]' ? [element] : [] } });
    process.stdout.write(JSON.stringify(element));
  `;
  const result = JSON.parse(execFileSync(process.execPath, ['--input-type=module', '-e', code], {
    env: { ...process.env, TZ: zone }, encoding: 'utf8',
  }));
  assert.equal(result.textContent, expected, `${zone}: ${instant}`);
  assert.equal(result.dataset.format, format);
}
// A day named relative to the visitor's today, and its year only when it is not the current one.
for (const [zone, instant, viewedAt, expected] of [
  ['UTC', '2024-07-01T08:00:00Z', '2024-07-01T12:00:00Z', '今天'],
  ['UTC', '2024-06-30T23:59:00Z', '2024-07-01T12:00:00Z', '昨天'],
  ['Asia/Shanghai', '2024-06-30T20:00:00Z', '2024-07-01T12:00:00Z', '今天'], // 7 月 1 日 4:00 in Shanghai.
  ['UTC', '2024-06-29T12:00:00Z', '2024-07-01T12:00:00Z', '6 月 29 日'],
  ['UTC', '2023-12-31T12:00:00Z', '2024-01-01T12:00:00Z', '昨天'],
  ['UTC', '2023-12-30T12:00:00Z', '2024-01-01T12:00:00Z', '2023 年 12 月 30 日'],
]) {
  const code = `
    import { runInNewContext } from 'node:vm';
    const element = {
      textContent: 'fallback',
      dataset: { format: '{month} 月 {day} 日', yearFormat: '{year} 年 {month} 月 {day} 日', today: '今天', yesterday: '昨天' },
      getAttribute: () => ${JSON.stringify(instant)},
    };
    class ClockDate extends Date {
      constructor(...args) { super(...(args.length ? args : [${JSON.stringify(viewedAt)}])); }
      static now() { return Date.parse(${JSON.stringify(viewedAt)}); }
    }
    runInNewContext(${JSON.stringify(script)}, { Date: ClockDate, document: { querySelectorAll: selector => selector === 'time[data-local-time]' ? [element] : [] } });
    process.stdout.write(element.textContent);
  `;
  const result = execFileSync(process.execPath, ['--input-type=module', '-e', code], { env: { ...process.env, TZ: zone }, encoding: 'utf8' });
  assert.equal(result, expected, `${zone}: ${instant} seen at ${viewedAt}`);
}
// In a list marked data-hide-repeats (the home page's recent changes), a date that the row above shows in the
// visitor's zone is marked is-repeat: two changes a few hours apart fall on one day in Shanghai, on two in UTC.
for (const [zone, expected] of [['Asia/Shanghai', [false, true, false]], ['UTC', [false, false, false]]]) {
  const code = `
    import { runInNewContext } from 'node:vm';
    const instants = ['2024-06-02T03:00:00Z', '2024-06-01T20:00:00Z', '2024-05-30T12:00:00Z'];
    const elements = instants.map(instant => ({
      textContent: 'fallback', dataset: { format: '{month} 月 {day} 日' }, getAttribute: () => instant,
      classList: { marked: false, toggle(name, on) { this.marked = on; } },
    }));
    const list = { querySelectorAll: () => elements };
    class ClockDate extends Date {
      constructor(...args) { super(...(args.length ? args : ['2024-07-01T12:00:00Z'])); }
    }
    runInNewContext(${JSON.stringify(script)}, { Date: ClockDate, document: { querySelectorAll: selector => selector === '[data-hide-repeats]' ? [list] : elements } });
    process.stdout.write(JSON.stringify(elements.map(element => element.classList.marked)));
  `;
  const result = JSON.parse(execFileSync(process.execPath, ['--input-type=module', '-e', code], { env: { ...process.env, TZ: zone }, encoding: 'utf8' }));
  assert.deepEqual(result, expected, `${zone}: 同一天的日期只显示一次`);
}
