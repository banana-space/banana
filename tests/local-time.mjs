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
console.log('用户时区、夏令时、跨日与跨年、非整小时时差、分钟精度和无效日期回退验证通过');
