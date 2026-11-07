import katex from 'katex';

// A character outside KaTeX's fonts (𝟙, •, Han characters in \text, a symbol a page's own fonts draw) has no metrics,
// and the formula renders all the same. KaTeX reports it through its strict option (symbolNotInFont), with "warn" a
// message on the console for every such character each time it renders one, with "error" an error: here it is always
// ignored. KaTeX's other checks follow the caller's strict (default "ignore").

/** KaTeX's options with strict ignoring characters without metrics. */
export function katexOptions(options = {}) {
  const { strict = 'ignore' } = options;
  return { ...options, strict: (code, message, token) => code === 'symbolNotInFont' ? 'ignore' : typeof strict === 'function' ? strict(code, message, token) : strict };
}

/** katex.renderToString, characters without metrics ignored (katexOptions). */
export const renderToString = (tex, options) => katex.renderToString(tex, katexOptions(options));
