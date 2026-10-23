import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const script = await readFile(new URL('../static/js/local-time.js', import.meta.url), 'utf8');
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
    runInNewContext(${JSON.stringify(script)}, { Date: ClockDate, document: { querySelectorAll: () => [element] } });
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
    runInNewContext(${JSON.stringify(script)}, { Date: ClockDate, document: { querySelectorAll: () => [element] } });
    process.stdout.write(element.textContent);
  `;
  const result = execFileSync(process.execPath, ['--input-type=module', '-e', code], { env: { ...process.env, TZ: zone }, encoding: 'utf8' });
  assert.equal(result, expected, `${zone}: ${instant} seen at ${viewedAt}`);
}
console.log('用户时区、夏令时、跨日与跨年、非整小时时差、分钟精度、无效日期回退，以及今天、昨天与其他年份的日期验证通过');
