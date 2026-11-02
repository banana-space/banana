# Changelog

## 0.2.1

- **A formula followed by punctuation in a bibliography entry** (`$D$-modules`) no longer overlaps the text before it in `bananamark/style.css`: the box that keeps a formula's end with its punctuation took on the entry's hanging indent. An inline TikZ diagram there did the same.
- **A paragraph that introduces a bibliography** sits close to its entries in `bananamark/style.css`, and further from a bibliography before it, so that grouped references read as groups.
- **bananamark-tikz lets only a drawing into a page.** A diagram whose SVG has an element TikZ does not draw with (links, scripts, animation, embedded content), an event handler, a reference outside the picture or a markup declaration is now an error, `tikz_unsafe` (with what was found as `params.found`), however its TeX wrote it and also when it is in the cache. `\special` in a diagram's source, which writes into the SVG as it is, is an error of its own, `tikz_command`.
- **bananamark-tikz remembers a diagram that ran out of time** for ten minutes, as it does one whose TeX fails: instances whose `timeout` is no longer fail it at once rather than compile it again.

## 0.2.0

- **A command.** `bananamark file.md` writes `file.html`, a whole page holding its stylesheets and fonts (see the README).
- **More of a page can be styled on its own.** New classes: `bm-envnumber` and `bm-envnote` in an environment's title, `bm-reference` on cross-references, `bm-spoiler` on `<spoiler>`, and `bm-bibliography-title` and `bm-bibliography-year` in bibliographies. `bananamark/style.css` now styles `.bm-spoiler` rather than every `details`.
- **`data-display` is gone from formulas.** The class `bm-math-display` says the same; read that instead. `style="--bm-outer: 0"` is gone too: use `var(--bm-outer, 0)`.
- **The documentation is in two files.** The README has how to use the package; everything in detail is now in REFERENCE.md.

The dialect's typography and bare addresses are now its own rules, stated in the reference, rather than a port of another Markdown parser's. They read Chinese text better. A page may render differently where it has:

- **Quotation marks beside Han characters.** `他说"你好"然后` is now `他说“你好”然后`; the marks used to stay straight. A mark with a space on one side goes by that space; otherwise `"` goes by pairing, and `'` after a letter or digit is `’`. See [Quotation marks](README.md#quotation-marks).
- **A decade after a space or a word**, such as `STOC '71`: now `’71`, not `‘71`.
- **Quotation marks with no match.** `"a""` is now `“a”"`, not `“a"”`; `a ' b` stays straight, not `’`.
- **Bare addresses beside Han characters.** `见https://example.org/a和` is now a link to `https://example.org/a`; it used to be no link. An address ends at the first character outside ASCII.
- **Other bare addresses.** `ftp://` addresses are no longer links (they used to be an error, `link_scheme`), and an address no longer takes in `"`, `'`, `>`, `^`, `{`, `}`, `[`, `]` or a backtick.
- **The plain text of a link or an image** (an image's `alt`, `plainText` in the hooks) now has all of its text: `![Ti*k*Z](a.png)` is `TikZ`, not `Ti`.
- **Comments and declarations** in a page are left out, with no `<!-- raw HTML omitted -->` in their place, and only they are: what follows one on its line is now text (`<!-- 说明 --> 文字` used to lose `文字`). Other HTML tags are errors, as before.

In editors, `bananamark/grammar` and `bananamark-codemirror` now mark as an address exactly what the renderer links, and as a comment exactly what it leaves out.
