# Contributing to the bananamark packages

`bananamark`, `bananamark-codemirror` and `bananamark-tikz` live in the [香蕉空间 repository](https://github.com/banana-space/banana), as npm workspaces under `packages/`; the site (the rest of the repository) uses them. Issues and pull requests go to that repository.

## Tests

```sh
npm test --workspace bananamark              # or npm test in the package's directory
npm test --workspace bananamark-codemirror
npm test --workspace bananamark-tikz
npm test                                     # everything: the site's tests and the packages'
```

- `bananamark/test/spec/`: the conformance examples, the dialect feature by feature (see its [README](bananamark/test/spec/README.md)). After a change meant to alter the output, `node test/spec.mjs --update` in `packages/bananamark` writes the new outputs: read them before committing. A new example: write its input with its output empty, then `--update`.
- `bananamark/test/*.mjs`: unit tests of the dialect's layer, the renderer and the hooks (`options.mjs`: what each entry point takes, page fields, plugins, images' addresses), and of the message tables (every message used is in each table, and English and Chinese have the same keys and values). The tests' pages are mostly Chinese and use the whole dialect: `test/zh.mjs` gives the entry points with `lang` and `locale` `zh-cn`, wiki links, bibliographies, TikZ, `<align>` and `<spoiler>` on, and `zh(fn)` for internal functions. The spec's examples highlight code with `bananamark/languages`.
- `bananamark-codemirror/test/`: the language (Enter, folding, code blocks' languages), completion (what each source offers where, the text after accepting), editing formulas, checking, and the whole setup with a dialect (`setup.mjs`); and whether `src/katex-commands.json` is up to date.
- `bananamark-tikz/test/tikz.mjs`: compiling, the cache, fonts, errors, the plugin, a shared worker. It compiles with node-tikzjax, which takes a while.
- The site's own tests also run every page through the packages: `tests/markdown-language.mjs` checks that the editor's grammar reads every page as the renderer does, and `npm run compare` compares the whole built site with another commit's.

## Regenerating `katex-commands.json`

`bananamark-codemirror/src/katex-commands.json` (the KaTeX commands completion offers) is generated from KaTeX's own definitions. After updating KaTeX:

```sh
npm run katex-commands --workspace bananamark-codemirror
```

## The TikZ cache

`bananamark-tikz`'s cache keys hold the compiler's code (`src/compiler.mjs`, `src/worker.mjs`) and the preamble a diagram gets (`src/preamble.mjs`). Changing them recompiles every diagram, which for the site takes an hour on its server: change them only when the output must change.

## The source

`bananamark/src/`: `syntax/`, the dialect's layer (a page to a document); `markdown/`, markdown-it set up to read Markdown as Goldmark does, with its renderer; `render/`, the renderer (a document to HTML: hooks, nodes, formulas, typography); `highlight/`, the dialect's lezer grammar (`grammar.mjs`), code blocks' highlighting and the language packs (`languages.mjs`); and at the top, the entry points (`index.mjs`, `document.mjs`, `dialect.mjs`, `messages.mjs`, `scan.mjs`, `rules.mjs`, `typography.mjs`, `bibliography.mjs`) and the stylesheets.

What only the site needs is in the site (`scripts/shared/`: page names, the YAML of notices and navboxes, a page's summary), not in the packages.

## Internal modules

`bananamark/internal/*` are the dialect layer's modules (`packages/bananamark/src/syntax/`). The site's preprocessing, editor and formatter use some directly; they are not part of the interface.

| Module | What |
| --- | --- |
| `scan.mjs` | Scanning formulas, tags, escapes and references (public as `bananamark/scan`) |
| `markup.mjs` | Inline syntax: links, formulas, references, bold; names' matching keys |
| `nodes.mjs` | Documents and their node tables |
| `structure.mjs` | A page's structure: sections, environments, numbered formulas, labels and references |
| `lists.mjs` | Labelled list items; the block structure the renderer's parser reads |
| `tags.mjs`, `tag-rules.mjs` | HTML-style tags; bananamark's tags' rules (data only) |
| `bibliography.mjs`, `data-blocks.mjs` | Bibliographies; data blocks |
| `environments.mjs`, `default-environments.mjs` | Theorem-like environments; the defaults (data only) |
| `numbering.mjs`, `book.mjs` | Numbering settings and counts; books (pages sharing labels, numbering and bibliographies) |
| `math-name.mjs`, `math-text.mjs` | Formulas in names (keys, headings' ids), MathML as text |
| `typography.mjs` | The rules of Chinese typography (on HTML: `bananamark/typography`) |
| `source-lines.mjs` | Source line marks for an editor's preview |
| `katex-check.mjs` | Checking formulas with KaTeX (`checkMath`) |
| `switches.mjs` | The dialect's switches (wiki links, TikZ, bibliographies) and KaTeX's options during one call |

## Publishing

The three packages are released together with the same version. `bananamark-codemirror` and `bananamark-tikz` take `bananamark` as a peer dependency of the same minor version (`~0.1.0`): update it with each minor version. `bananamark` takes the CodeMirror and lezer packages its grammar shares with an editor as peer dependencies (one copy of each in a bundle), and the language packs of `bananamark/languages` as dependencies.

To publish a version: set the same `version` in the three `package.json` files (and the peer dependency on `bananamark`, for a new minor version), run every package's tests, check what each will contain with `npm pack --dry-run`, then publish `bananamark` first and the other two after it, from each package's directory: `npm publish`.
