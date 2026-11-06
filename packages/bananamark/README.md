# bananamark

bananamark is a Markdown dialect for mathematical writing. It adds TeX formulas, numbered sections and theorems, and cross-references to Markdown, and renders documents to HTML.

```markdown
## Groups

::: definition [Group] {@def:group}
A **group** is a set with an associative operation, an identity $e$ and inverses.
:::

By @def:group, every group has an identity.
```

Here the section is numbered 1, the definition is titled "Definition 1.1 (Group)", and the reference becomes a link reading "Definition 1.1".

It also supports bibliographies, footnotes, TikZ diagrams and Chinese typography. It can be used as a command or as a library, and it renders the pages of [香蕉空间](https://bananaspace.org/), a Chinese mathematics wiki.

## Install

```sh
npm install bananamark       # in a project
npm install -g bananamark    # for the command, anywhere
```

Or without installing: `npx bananamark file.md`. Node 22 (from 22.22.2), 24 (from 24.15), or 26 and later.

## From the command line

```sh
bananamark file.md
```

writes `file.html` beside the file: a whole page holding its stylesheets and fonts, which opens by itself and works offline. An error names its line (`file.md:5: unknown theorem environment: nope`), and the command exits with status 1.

| Option | Meaning |
| --- | --- |
| `-o`, `--output <file>` | Where the HTML goes; `-` for standard output |
| `--fragment` | Only the body's HTML, to put in a page of your own (style it with [`bananamark/style.css`](https://github.com/banana-space/banana/blob/main/packages/bananamark/REFERENCE.md#the-stylesheet) and `bananamark/katex.css`) |
| `--css <file or URL>` | A stylesheet added after the others, so that it takes priority: a file is embedded, a URL linked. Can be given several times |
| `--no-default-style` | Leaves out bananamark's look and the page's layout, keeping only what formulas need |
| `--lang <code>` | The page's language: `zh-cn` gives Chinese typography and 定理, 证明…; over the front matter's; default `en` |
| `--locale <code>` | The language of errors, `en` or `zh-cn`; default `en` |
| `--dialect <file>` | A module holding the [dialect](https://github.com/banana-space/banana/blob/main/packages/bananamark/REFERENCE.md#the-dialect) (below) |
| `--tikz` | Compile TikZ diagrams (below) |
| `-h`, `--help`; `-v`, `--version` | |

With `-` as the file, it reads standard input and writes standard output.

**Stylesheets.** A page holds KaTeX's stylesheet and fonts, bananamark's [stylesheet](https://github.com/banana-space/banana/blob/main/packages/bananamark/REFERENCE.md#the-stylesheet) and a few lines of layout. A file given with `--css` comes after these, so a few rules are enough to change the look. The colours of environments are custom properties:

```css
/* mine.css, for bananamark file.md --css mine.css */
:root { --bm-accent-theorem: crimson; }
a { color: teal; }
body { font-family: sans-serif; }
```

To start from nothing, add `--no-default-style`. The addresses in an embedded file start from the page, not from the file.

**Front matter.** A YAML block at the start of the file, between lines of `---`, is optional. The command reads `title` (shown as the page's heading, and it may hold formulas), `lang`, `numbering` and `typography` (see [Numbering](https://github.com/banana-space/banana/blob/main/packages/bananamark/REFERENCE.md#numbering) and [Typography](https://github.com/banana-space/banana/blob/main/packages/bananamark/REFERENCE.md#typography)), and ignores other fields.

```markdown
---
title: Groups and $\mathbb{Z}$
lang: en
---

## Definition {@sec:def}
…
```

Without a `title`, the page's title is its first heading's text or, failing that, the file's name. Relative image addresses are written as they are, so they hold from where the HTML is.

**What it reads.** Bibliographies are on and every [code language](https://github.com/banana-space/banana/blob/main/packages/bananamark/REFERENCE.md#code-highlighting) is highlighted; wiki links are off, since a single file has no site for them to go to, so `[[…]]` stays text. To change this, or add macros, give `--dialect` a module exporting the dialect's settings. It needs no import, so it works wherever the command is installed:

```js
// dialect.mjs
export default { wikiLinks: true, katex: { macros: { '\\RR': '\\mathbb{R}' } } };
```

A module may instead export what `defineDialect` returned (as its default, or as `dialect`), which is then used as it is. That needs the same copy of `bananamark` as the command, so install both in the project.

**TikZ.** Diagrams need the separate package [`bananamark-tikz`](https://www.npmjs.com/package/bananamark-tikz), installed beside `bananamark`. With `--tikz` (or a dialect with `tikz: true`) they are compiled to SVG, and their fonts are put in the page too; without it, ```` ```tikz ```` blocks are ordinary code blocks. To try it without installing: `npx -p bananamark -p bananamark-tikz bananamark file.md --tikz`.

## In a program

```js
import { renderDocument } from 'bananamark';
import 'bananamark/katex.css';   // with a bundler; or serve katex/dist/ of the same KaTeX version, 0.18.4
import 'bananamark/style.css';   // a plain look, to start from

const source = '## Groups {@sec:groups}\n\n::: definition [Group] {@def:group}\nA set with an operation…\n:::\n\nBy @def:group, $e$ is unique.';
const result = renderDocument(source, { file: 'groups.md' });
result.html;       // the body's HTML: "Definition 1.1 (Group)", "By Definition 1.1, …"
result.headings;   // [{ level: 2, id: 'groups', number: '1', title: 'Groups' }]
```

To render many pages, make a processor once:

```js
import { createProcessor, defineDialect } from 'bananamark';

const dialect = defineDialect({ wikiLinks: true, bibliography: true });
const processor = createProcessor({
  dialect,
  resolveWikiLink: target => articles.has(target) ? { url: `/wiki/${encodeURIComponent(target)}/` } : undefined,
});
for (const [file, source] of pages) output.set(file, processor.render(source, { file }).html);
```

A page's front matter is the caller's: remove it before rendering, and give `lineOffset` (the number of lines before the body) so that errors point at the file's own lines.

## Syntax

CommonMark with GFM tables, strikethrough and footnotes, and:

| Feature | Written |
| --- | --- |
| Formulas | `$…$`, `\(…\)`; display `$$…$$`, `\[…\]`; numbered: a ```` ```math {@eq:label} ```` block |
| Sections | `##` headings are numbered; `## Title*` is not; `{@sec:label}` at the end declares a label |
| Theorem-like environments | `::: theorem [Title] {@thm:label}` … `:::`; `::: definition (Name)` gives the environment its own name, `remark*` is unnumbered; `::: proof` (kinds: see [Default environments](https://github.com/banana-space/banana/blob/main/packages/bananamark/REFERENCE.md#default-environments)) |
| Cross-references | `@label`, `{@label}`, `@-label` (the number alone), `[text](@label)` |
| Labelled list items | `(a)`, `iv)`, `(A1)` and the like as list markers; `(a) {@it:label} text` can be referred to |
| Data blocks | fenced blocks the caller names, holding data about the page, not shown (see [Data blocks](https://github.com/banana-space/banana/blob/main/packages/bananamark/REFERENCE.md#data-blocks)) |
| HTML-style tags | `<lang de>…</lang>`; the caller may add its own, and bananamark's ready-made `<align right>…</align>` and `<spoiler title="…">…</spoiler>` (see [HTML-style tags](https://github.com/banana-space/banana/blob/main/packages/bananamark/REFERENCE.md#html-style-tags)) |
| Image width | `![caption](image.png){width=200}`: `width` (whole pixels) becomes `<img width>` |
| Typography | Chinese typography (see [Typography](https://github.com/banana-space/banana/blob/main/packages/bananamark/REFERENCE.md#typography)); straight quotation marks become curly ones (see [Quotation marks](https://github.com/banana-space/banana/blob/main/packages/bananamark/REFERENCE.md#quotation-marks)), `--`, `---` and `...` become –, —, … |
| Bare addresses | `https://…`, `http://…`, `www.…` and e-mail addresses become links, also right after Han characters. An address is in ASCII and ends at the first character that is not; `?!.,:;*_~` and unbalanced `)` at its end are not part of it. Write others as `[text](…)` or `<…>` |
| Wiki links (`wikiLinks`) | `[[Target]]`, `[[Target\|text]]`; the target may hold formulas |
| Bibliographies (`bibliography`) | a ```` ```bibliography ```` block (YAML; fields: see [Bibliography fields](https://github.com/banana-space/banana/blob/main/packages/bananamark/REFERENCE.md#bibliography-fields)); `@key` in the text cites an entry |
| TikZ (`tikz`) | a ```` ```tikz ```` block (`{caption="…"}` after `tikz` gives it a caption), `tikzcd` and `tikzpicture` environments in formulas (compiled by `bananamark-tikz`) |

The last three are off unless the dialect turns them on (see [The dialect](https://github.com/banana-space/banana/blob/main/packages/bananamark/REFERENCE.md#the-dialect)): otherwise `[[…]]` is text, and ```` ```bibliography ```` and ```` ```tikz ```` blocks are ordinary code blocks.

In these docs a *label* is the target of a reference (`{@thm:a}`); `<lang>` and the like are *HTML-style tags*. The [reference](https://github.com/banana-space/banana/blob/main/packages/bananamark/REFERENCE.md) describes each feature in full, and the spec files show every one with examples.

## Packages

| Package | What for |
| --- | --- |
| `bananamark` (this one) | Rendering pages to HTML, in Node or in a browser |
| [`bananamark-tikz`](https://www.npmjs.com/package/bananamark-tikz) | TikZ diagrams (```` ```tikz ```` blocks, `tikzcd` in formulas) compiled to SVG; Node only |
| [`bananamark-codemirror`](https://www.npmjs.com/package/bananamark-codemirror) | Editing the dialect in CodeMirror 6: highlighting, completion, checking as you type |

A site renders with `bananamark` (plus `bananamark-tikz` for diagrams); an editor in the browser adds `bananamark-codemirror`. Describe the site's dialect once with [`defineDialect`](https://github.com/banana-space/banana/blob/main/packages/bananamark/REFERENCE.md#the-dialect), in a module of its own, and give it to each, so that the editor reads pages as the renderer does:

```js
// dialect.js, imported by the site's build and by its editor
import { alignTag, defineDialect } from 'bananamark';
export const dialect = defineDialect({ wikiLinks: true, tags: { align: alignTag } });

// the build
createProcessor({ dialect, resolveWikiLink });
// the editor
new EditorView({ extensions: [basicSetup, bananamark({ dialect })] });   // bananamark-codemirror
```

## Documentation

- [REFERENCE.md](https://github.com/banana-space/banana/blob/main/packages/bananamark/REFERENCE.md): everything in detail: the syntax, options, hooks, the result and its errors, messages, extending, books, the HTML, typography, KaTeX, highlighting and the API.
- [`test/spec/`](https://github.com/banana-space/banana/tree/main/packages/bananamark/test/spec): the conformance examples, which are the dialect's specification, kept in the repository (not in the npm package).
- [CHANGELOG.md](https://github.com/banana-space/banana/blob/main/packages/bananamark/CHANGELOG.md): what changed in each version.

## Status

- Version 0.3. Until 1.0, a minor version (0.4) may change the interface and the HTML the spec describes; a patch version (0.3.1) does not. The three packages are released together with the same version; `bananamark-codemirror` and `bananamark-tikz` take `bananamark` as a peer dependency of the same minor version.
- Node 22 (from 22.22.2), 24 (from 24.15), or 26 and later; browsers from 2023 on (the stylesheet needs `:has()`).
- ES modules only. No TypeScript types yet.
- MIT licence.

## Contributing

Tests, the spec's examples and how to update them: see [CONTRIBUTING.md](https://github.com/banana-space/banana/blob/main/packages/CONTRIBUTING.md).
