# Changelog

## 0.3.0

- **Feature:** bananamark-codemirror wraps a selection in `*`, `` ` `` or `$` typed over it.
- **Feature:** bananamark-codemirror closes a formula opened by `$$` on Enter, and steps over a `\]` or `\)` it added.
- **Feature:** bananamark-tikz draws `\mathreflectbox`, as KaTeX does.
- **Change:** Stars may open and close emphasis beside punctuation, with no spaces added around them: `文字*（注）*文字`, `a**(b)**c`. Headings and editor highlighting follow. `_` is unchanged and follows CommonMark.
- **Change:** KaTeX 0.19.1 (from 0.18.4), with `\mapsfrom` and `\reflectbox`. Characters outside its fonts are still never reported, whatever `strict` is.
- **Fix:** A stray run of stars no longer upsets emphasis elsewhere in its paragraph.
- **Fix:** bananamark-codemirror closes a formula opened by `\[` on Enter also when a later formula is in the same paragraph.
- **Security:** markdown-it 15.0.3, which no longer takes quadratic time on some reference definitions and unclosed inline HTML.

## 0.2.1

- **Change:** A paragraph introducing a bibliography sits closer to its entries.
- **Change:** bananamark-tikz does not retry a diagram that timed out for ten minutes.
- **Fix:** A formula followed by punctuation no longer overlaps the text before it in a bibliography entry.
- **Security:** bananamark-tikz lets only drawings into a page (`tikz_unsafe`, `tikz_command`).

## 0.2.0

- **Feature:** A command: `bananamark file.md` writes a standalone HTML page.
- **Feature:** New classes for styling environment titles, references, spoilers and bibliographies.
- **Change:** Formulas lose `data-display` (use the class `bm-math-display`) and `--bm-outer: 0` (use `var(--bm-outer, 0)`).
- **Change:** Typography and bare addresses follow the dialect's own rules, which may change quotation marks and links beside Chinese text.
- **Fix:** A link's or an image's plain text keeps all of its text.
- **Fix:** A comment no longer takes the text after it on its line with it.
- **Docs:** Detailed documentation moved to REFERENCE.md.
