# bananamark-codemirror

CodeMirror 6 language support for the [bananamark](https://github.com/banana-space/banana/tree/main/packages/bananamark#readme) Markdown dialect: highlighting, folding, keys, completion and checking. The grammar is bananamark's own (`bananamark/grammar`), where formulas and tags end comes from bananamark's scanner (`bananamark/scan`), and checking runs bananamark's dialect layer, so the editor reads pages as the renderer does. Completion takes the dialect's rules from `bananamark/rules` (data only). It runs in browsers (with a bundler); checking also runs in Node.

## Status

Version 0.1, released with `bananamark` (see its [status](https://github.com/banana-space/banana/tree/main/packages/bananamark#status)): until 1.0, a minor version may change the interface. Peer dependencies: `bananamark` of the same minor version, and CodeMirror's `@codemirror/language`, `state`, `view`, `autocomplete`, `lint` and `lang-markdown` (one copy of each in your bundle: CodeMirror does not work with two). ES modules only; MIT licence.

```sh
npm install bananamark bananamark-codemirror codemirror
```

## A minimal example

```js
import { EditorView, basicSetup } from 'codemirror';
import { bananamark } from 'bananamark-codemirror';
import { dialect } from './dialect.js';   // the site's, from bananamark's defineDialect

new EditorView({
  parent: document.querySelector('#editor'),
  extensions: [
    basicSetup,
    bananamark({ dialect, completion: { entries: async () => (await fetch('/names.json')).json() } }),
  ],
});
```

Give the editor the dialect the renderer has (bananamark's [`defineDialect`](https://github.com/banana-space/banana/tree/main/packages/bananamark#the-dialect)): its grammar, environments, data blocks, tags, messages and switches (wiki links, bibliographies, TikZ) are then the renderer's. Highlighting gives classes (`bm-hl-…`, the same as bananamark's code blocks), so one stylesheet (`bananamark/style.css`) does for the editor and for code blocks in pages.

## Everything at once

`bananamark(options)` returns an array of extensions: the language, highlighting, keys, formula editing, completion and checking, in the order and with the precedence they need.

| Option | Meaning | Default |
| --- | --- | --- |
| `dialect` | bananamark's `defineDialect` | bananamark's defaults |
| `codeLanguages`, `wikiLinks` | Without a dialect: more languages of fenced code (CodeMirror `Language`s, by name) and whether `[[wiki links]]` are read, as `bananamarkLanguage` takes them (`wikiLinks` for completion and checking too) | none; `false` |
| `locale` | The language of the words beside completion's options and of errors: `'en'`, `'zh-cn'`, or one in the dialect's messages | `'en'` |
| `completion` | `completionSources`' options (`entries`, `languages`, `otherLabels`, `mathCommands`…), `sources` (more completion sources of the caller's) and `afterComposition(state)` (whether completion opens once an input method commits); or `false` | `{}` |
| `lint` | `checkFile`'s options and `delay` (ms); or `false` | `{}` |
| `highlight` | The `bm-hl-…` classes (`syntaxHighlighting(highlightClasses)`) | `true` |
| `keymap` | `bananamarkKeymap` | `true` |
| `formulaEditing` | `\[` and `\(` closed as they are typed (`pairFormulaDelimiters`) | `true` |

Completion is registered as language data (`EditorState.languageData`), at every position, formulas included: CodeMirror's `autocompletion()` (in `basicSetup`, or added by `bananamark`) uses it, together with other extensions' sources. Nothing is offered while an input method composes; when it commits, completion opens where names are typed (`afterComposition`).

Each piece is exported too, for an editor that puts them together itself (with a linter of its own, say).

## The language

`bananamarkLanguage({ dialect })` returns CodeMirror's `LanguageSupport`:

- bananamark's grammar (`bananamark/grammar`): front matter (YAML), formulas (highlighted as TeX), wiki links (when the dialect has them), references, theorem-like environments' fences, labelled list items, HTML-style tags, images' `{width=…}`, code blocks highlighted by language (the dialect's `codeLanguages` among them). Without a dialect: `bananamarkLanguage({ codeLanguages, wikiLinks })` (CodeMirror `Language`s; wiki links off by default, as bananamark's).
- Folding: besides headings, the front matter (between its `---` lines) and theorem-like environments (from `::: name` to before its `:::`, nested ones counted, `:::` in code not).
- Backspace removes list markers and quote marks.

`newlineAndIndent`: Enter, with the new line indented to where the line's text starts (a list item's text from its first line; a quotation keeps its `>`), without adding list markers; spaces either side of the cursor are removed, and a line of spaces alone is left empty. In front matter, code blocks and display formulas it returns `false` (CodeMirror's own Enter then).

`bananamarkKeymap`: Enter and Backspace in the dialect, in order: `closeDisplayFormula`, `newlineAndIndent`, then `deleteFormulaDelimiters` (below).

`highlightClasses`, `highlightTags`: the highlighting's classes, and the dialect's own highlighting tags (from `bananamark/grammar`).

## Editing formulas

- `pairFormulaDelimiters(view, from, to, text)`: typing `[` or `(` after `\` gives the pair (`\[|\]`). An `EditorView.inputHandler`, before bracket closing (`Prec.high`).
- `deleteFormulaDelimiters(view)`: Backspace between an empty `\[` and `\]` removes both. A Backspace command.
- `closeDisplayFormula(view)`: Enter on a line holding only `\[` (with its `\]`, perhaps) gives `\[`, an empty line and `\]`, indented alike. An Enter command, before `newlineAndIndent`.

## Completion

`completionSources(options)` returns completion sources (`bananamark()` registers them; or give them to `autocompletion({ override })`), which offer:

- `:::` at a line's start and an environment's name: theorem-like environments, with their opening and closing fences (only the line when the page's fences already balance); a shorthand for the title and label may follow the name (`:::th Title @label` becomes `::: theorem [Title] {@label}`).
- ```` ``` ```` at a line's start: `math`, `tikz` (with TikZ on), the caller's data blocks and `bibliography` blocks (with bibliographies on).
- After `[[` and a character other than `$` (with wiki links on): articles' titles and aliases, closed with `]]`.
- `@`, `{@`: the labels the page declares (headings, environments, list items, `math` blocks, and with bibliographies on, the keys of its bibliography entries and of versions with a key, with the entry's title), then the labels of the book's other pages.
- `\` and letters in a formula: KaTeX's commands (with the braces they need) and environments (`\begin{…}`: its beginning, an empty line and its end; renaming both when they already pair).
- `<` and letters: HTML-style tags (the opening and closing tags, the cursor where text goes next); `</` closes a tag still open; in a tag, its parameters' names, language codes and parameters' values.

Options, all optional; except `dialect`, `otherLabels`, `locale`, `messages` and the switches, each is a value or a function giving it (a promise too), asked for the first time it is needed:

| Option | Meaning | Default |
| --- | --- | --- |
| `dialect` | bananamark's `defineDialect`: its environments, data blocks, tags, messages and switches, under the options below | none |
| `tikz`, `wikiLinks`, `bibliography` | Whether ```` ```tikz ```` and ```` ```bibliography ```` blocks and `[[links]]` are offered | the dialect's, or `false` |
| `environments` | Theorem-like environments, as bananamark's (kind → `{ name, … }`, or `false`), over bananamark's defaults; names in `locale` | bananamark's |
| `dataBlocks` | Data blocks, as bananamark's (only their names are used), or an array of names | none |
| `tags` | The caller's HTML-style tags, as bananamark's (no `render` needed); `completion: { snippet, then, values }` says how one is completed (`${}`: where the cursor goes; `then`: open the list again after inserting; `values`: a bare parameter's values), otherwise worked out from its parameters | none |
| `entries` | Articles: `[{ title, aliases }]` | none (no articles offered) |
| `languages` | Language code → name, for parameters taking a language (`<lang …>` and the like) | none |
| `mathCommands` | `{ commands: [[name, arguments, glyph?]], environments: [[name, arguments]] }` | the package's `katex-commands.json` |
| `otherLabels()` | The labels of the book's other pages: `[{ name, text, page }]` (`text`: how a reference shows it; `page`: the page's name; bananamark's `book.labels()` gives them, with the page's key as `page`) | none |
| `locale` | The language of the words beside the options: `'en'`, `'zh-cn'`, or one in `messages` | `'en'` |
| `messages` | The words beside the options, by language as bananamark's (`{ en: { key: text } }`); keys `completion_<block>`, `completion_tag_<tag>`, `completion_parameter_<parameter>`, `completion_<tag>_<value>`; the caller's tags and data blocks have their words here | the package's English and Chinese |

`afterComposition(state)`: whether completion should open once an input method has committed its text (in a `[[link]]`'s target); call it on `compositionend`. Completion offers nothing while text is being composed.

`katex-commands.json` (also `import`able as `bananamark-codemirror/katex-commands.json`) is generated from KaTeX's own definitions: the commands KaTeX renders, except those defining macros, links and HTML, and environments formulas cannot use in the dialect (`align`), with `tikzcd` and `tikzpicture`, which TeX compiles. It follows the KaTeX version `bananamark` depends on.

## Checking

- `checkDocument(source, options)`: checks a page's body with bananamark's dialect layer, giving its problems, `[{ line, column, message, code, params }]` (from 1; `column` when known; `code` and `params`: the error's, as bananamark's `BananamarkError` has them). The layer stops at the first error, so there is at most one. `options` are the dialect layer's (`dialect`, `lang`, `locale`, `allowH1`, `lineOffset` and so on; another is an error); formulas are checked with KaTeX (`checkMath: false`: not). `labels`: on a book's page, the labels of the book's other pages (`[{ name, text, page }]`, `page` the page's key; bananamark's `book.labels()` gives them): references to them are not errors. Whether links exist, and the numbering a book's pages share, depend on the whole site and are not checked. What is not an error in the page (a wrong option, a bug) is thrown, not reported as a problem.
- `checkFile(text, options)`: the same for a whole file: front matter at its start (between `---` lines) is skipped, and lines count from the file's first. In Node too, to check files outside an editor.
- `problemRange(doc, line, column)`: where a problem is marked in the editor's document: from its column, a word (a `[[link]]` whole), or the line when there is no column.
- `bananamarkLinter({ delay, ...options })`: CodeMirror's linter of the whole document as a file (`checkFile`'s options; `delay` in ms, default 300); `bananamark()` adds it.

## Helpers

- `declaredLabels(text, { bibliography })`: the labels a page declares, in order, `[{ name, text }]` (with `bibliography: true`, its bibliography entries' keys too). Read from the page's lines, as it is being typed (the dialect's layer stops at a page's first error).
- `fencesBalance(text)`: whether the page's environment fences balance (outside code blocks).
- `inFormula(state, pos)`: whether a position is in a formula (one still being typed too).
- `matchingEnd(state, from, to)`: the `\end` matching a `\begin` at `[from, to)`, `{ from, to }`, or `null`.
- `messages`: the package's own words, `{ en, 'zh-cn' }`.

## Contributing

Tests, and regenerating `katex-commands.json` after a KaTeX update: see [CONTRIBUTING.md](https://github.com/banana-space/banana/blob/main/packages/CONTRIBUTING.md).
