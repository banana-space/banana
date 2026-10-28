import katex from 'katex';

// KaTeX prints “No character metrics for '…' in style '…' and mode '…'” on the console for every character outside
// its fonts (𝟙, •, or a symbol a page's own fonts draw), each time it renders one. The formula renders all the same,
// so these messages are left out; KaTeX's other warnings (strict: 'warn', say) still reach the console.
const noMetrics = /^No character metrics for /;

/** katex.renderToString, without KaTeX's messages about characters it has no metrics for. */
export function renderToString(tex, options) {
  const warn = console.warn;
  console.warn = (...args) => { if (!noMetrics.test(String(args[0]))) warn.apply(console, args); };
  try { return katex.renderToString(tex, options); }
  finally { console.warn = warn; }
}
