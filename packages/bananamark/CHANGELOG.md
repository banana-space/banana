# Changelog

## 0.2.0

The dialect's typography and bare addresses are now its own rules, stated in the README, rather than a port of another Markdown parser's. They read Chinese text better. A page may render differently where it has:

- **Quotation marks beside Han characters.** `他说"你好"然后` is now `他说“你好”然后`; the marks used to stay straight. A mark with a space on one side goes by that space; otherwise `"` goes by pairing, and `'` after a letter or digit is `’`. See [Quotation marks](README.md#quotation-marks).
- **A decade after a space or a word**, such as `STOC '71`: now `’71`, not `‘71`.
- **Quotation marks with no match.** `"a""` is now `“a”"`, not `“a"”`; `a ' b` stays straight, not `’`.
- **Bare addresses beside Han characters.** `见https://example.org/a和` is now a link to `https://example.org/a`; it used to be no link. An address ends at the first character outside ASCII.
- **Other bare addresses.** `ftp://` addresses are no longer links (they used to be an error, `link_scheme`), and an address no longer takes in `"`, `'`, `>`, `^`, `{`, `}`, `[`, `]` or a backtick.
- **The plain text of a link or an image** (an image's `alt`, `plainText` in the hooks) now has all of its text: `![Ti*k*Z](a.png)` is `TikZ`, not `Ti`.
- **Comments and declarations** in a page are left out, with no `<!-- raw HTML omitted -->` in their place, and only they are: what follows one on its line is now text (`<!-- 说明 --> 文字` used to lose `文字`). Other HTML tags are errors, as before.

In editors, `bananamark/grammar` and `bananamark-codemirror` now mark as an address exactly what the renderer links, and as a comment exactly what it leaves out.
