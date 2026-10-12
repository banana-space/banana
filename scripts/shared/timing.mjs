// Step timings for the build and serve scripts' progress output (in English, in milliseconds).
import { performance } from 'node:perf_hooks';

export const elapsed = start => Math.round(performance.now() - start);

/** Collects named steps; a step's time accumulates when it runs more than once (per page, say). */
export function stepTimer() {
  const steps = new Map();
  const add = (name, time) => steps.set(name, (steps.get(name) ?? 0) + time);
  return {
    add,
    async time(name, action) {
      const start = performance.now();
      try { return await action(); } finally { add(name, performance.now() - start); }
    },
    timeSync(name, action) {
      const start = performance.now();
      try { return action(); } finally { add(name, performance.now() - start); }
    },
    /** [name, ms] pairs, in the order the steps first ran. */
    steps: () => steps.entries(),
    /** "  name   123 ms" lines, in the order the steps first ran. */
    lines: () => [...steps].map(([name, time]) => `  ${name.padEnd(22)} ${String(Math.round(time)).padStart(6)} ms`),
  };
}

/** A headline such as "prebuild: 904 pages (1234 ms)". */
export const headline = (name, detail, ms) => `${name}: ${detail}${detail ? ' ' : ''}(${ms} ms)`;
