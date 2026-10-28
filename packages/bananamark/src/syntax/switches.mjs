// The dialect's settings that reach every function of the dialect's layer during one call of an entry point
// (transformDocument, transformFragment): wikiLinks, tikz, bibliography, and katex (KaTeX's options, for formulas in
// names: heading ids, wiki link targets). Outside an entry point all switches are off and KaTeX has its defaults.

let active = {};

/** Runs action with the dialect's settings { wikiLinks, tikz, bibliography, katex }; calls nest. */
export function withSyntax({ wikiLinks = false, tikz = false, bibliography = false, katex } = {}, action) {
  const previous = active;
  active = { wikiLinks, tikz, bibliography, katex };
  try { return action(); } finally { active = previous; }
}

/** The settings now. */
export const currentSyntax = () => active;
