# bananamark-tikz

TikZ diagrams for [bananamark](https://github.com/banana-space/banana/tree/main/packages/bananamark#readme). With TikZ on (the dialect's `tikz: true`), TikZ diagrams (```` ```tikz ```` blocks, and `tikzcd` and `tikzpicture` environments in formulas) are placeholders in bananamark's HTML, elements holding their source; this package compiles them with node-tikzjax (a TeX engine in WebAssembly) in a worker thread and puts the SVG in their place. Node only.

## Status

Version 0.1, released with `bananamark` (see its [status](https://github.com/banana-space/banana/tree/main/packages/bananamark#status)): until 1.0, a minor version may change the interface. Peer dependency: `bananamark` of the same minor version. ES modules only; MIT licence.

```sh
npm install bananamark bananamark-tikz
```

## Use

As a processor's plugin:

```js
import { createProcessor, defineDialect } from 'bananamark';
import { tikz } from 'bananamark-tikz';

const diagrams = tikz({
  cache: 'cache/tikz',                  // compiled diagrams are kept here (a JSON file each); without it, in memory only
  fonts: { directory: 'site/fonts' },   // the fonts of diagrams' text are copied here
});
const processor = createProcessor({ dialect: defineDialect({ tikz: true }), plugins: [diagrams] });
const page = await processor.renderAsync(source, { file: 'groups.md', outputPath: 'site/groups/index.html' });
await processor.close();   // closes the plugin: stops its worker
```

Or on HTML (a whole page from a site's templates, say):

```js
const diagrams = tikz({ cache: 'cache/tikz', fonts: { directory: 'site/fonts' } });
const html = await diagrams.render(pageHTML, { outputPath: 'site/groups/index.html' });
await diagrams.close();
```

`render(html, page)` (`postprocess`, as a plugin) gives the HTML with the diagrams in place. `page` is `{ outputPath, file, locale, messages }`: `outputPath`, the page's HTML file, which the fonts' addresses are relative to; `file`, the file errors name (default `outputPath`); `locale` and `messages`, for errors (see [Errors](#errors); a processor gives its plugins its own). When diagrams have text, the `@font-face` rules for its fonts go before `</head>` on a whole page, or at the start of HTML without a `<head>` (a page's body, as a plugin sees it).

Once every page is rendered, `prune()` deletes what the cache no longer needs; `close()` stops the worker.

## Options

| Option | Meaning | Default |
| --- | --- | --- |
| `cache` | The directory compiled diagrams are kept in | in memory only |
| `fonts` | `{ directory }`: the fonts a page's diagrams use are copied there (with their licence), and the page refers to them by their path from its HTML file; or `{ href(font, outputPath) }`: the fonts' addresses | none: diagrams with text are an error |
| `timeout` | A diagram's longest compilation, in ms | 15000 |
| `totalTimeout` | The time, in ms, this instance may spend compiling in all (a preview: a draft with many slow diagrams must not hold the queue); diagrams after it fail | no limit |
| `workerIdleTimeout` | In ms: instances share one worker (about 0.5 s to start, 370 MB), kept that long after the last of them closes | each instance its own worker |
| `locale`, `messages` | The language of errors and the caller's messages, as bananamark's options (this package's own messages: `tikz_failed`, `tikz_timeout`, `tikz_total_timeout`, `tikz_worker_exit`), over the page's | the page's; otherwise `'en'` |

## Output

A placeholder (`bm-tikz-source`, whose `code.bm-tikz-code` shows the source until it is compiled) becomes `bm-tikz-rendered`, holding the SVG in `span.bm-tikz-body` (`svg.bm-tikz-svg`; Chinese characters `bm-tikz-cjk`). A numbered diagram is in `span.bm-tikz-layout`, its number in `span.bm-tikz-tag`, and `--bm-tikz-tag-space` the number's width.

## What diagrams can use

- TeX packages `tikz-cd`, `amsmath`, `amssymb` and `array`; TikZ libraries a diagram loads with `\usetikzlibrary{…}`.
- The commands `\coloneqq`, `\eqqcolon`, `\bra`, `\ket`, `\braket`, `\set`, `\Set` and `\bm`, and Unicode maths symbols, Greek letters and accented Latin letters typed directly, as in KaTeX.
- Chinese characters, drawn with the page's fonts.
- Not bananamark's `katex` macros: diagrams are compiled by TeX, apart from KaTeX. There is no option for a preamble of the caller's yet.

## How diagrams are drawn

- A formula holding a diagram is compiled whole by TeX: several diagrams, `\left…\right` or fractions around one are laid out by TeX, following LaTeX rather than KaTeX (KaTeX's own commands are not there). A `\tag` around it is compiled apart and put on the right, so numbers and references stay. An inline one-line `tikzcd` is aligned on its cells' baseline; a `tikzpicture` takes the usual `baseline=(node.base)`.
- The SVG is the TeX engine's own drawing, with an offset of the upstream converter (0.27 pt) corrected, so that it lines up with the formula's box. The page only shows it: nothing is measured or moved in the browser, and it shows without JavaScript.
- Chinese: the engine has no Chinese fonts. Each Han character and full-width punctuation mark is declared to TeX as a box one em wide (at the size of the text: the formula's enlargement, 1.1, is undone), 85% of the size high and 15% deep; TeX places nodes, labels and arrows around these boxes, and the SVG writes the characters as `<text>` where TeX put them (through `dvisvgm:raw`), drawn in the page's fonts, `textLength` keeping their width. Characters on one line are one `<text>`, so a word copies on one line. The size follows the mathematical style, bold and italic follow TeX's fonts, and colour and rotation TikZ's.
- This is not CTeX or xeCJK: widths are assumed, not measured from the reader's fonts (whether a rare character shows depends on them), and there is no line breaking of Chinese text, no rules for punctuation at line ends and no vertical text. Write node names in ASCII; Chinese is for what is shown.
- Accented Latin letters are declared as TeX's accents, so `\text{Möbius}` and `\mathsf{Ét}` can be typed directly.
- Copying gives the Chinese characters as they are; the Western maths is in the engine's BaKoMa fonts, whose Greek letters, symbols and large brackets may copy as other characters. Diagrams have no MathML.

## The cache

A compiled diagram is kept by a hash of its input (its source, whether display, its mode), the compiler's code, the engine's version and the preamble it gets (the optional lines above are in it only when the diagram uses them): changing one command compiles again only the diagrams using it.

- `prune({ maxAge })`: after rendering every page, deletes the cache's files this instance did not use and nothing has used within `maxAge` (ms, default a week: drafts being edited online keep theirs). Returns the number deleted.
- A diagram whose TeX fails is remembered (the 200 most recent), and not compiled again; a diagram several pages ask for at once is compiled once.

## Errors

When a diagram does not compile, `render` throws a bananamark `BananamarkError`: its message is the file and the reason ("groups.md: TikZ compilation failed: …" and TeX's error), `error.file` the file, `error.code` and `error.params` the message's key and values (`tikz_failed`, with TeX's error as `params.message`; `tikz_timeout` and `tikz_total_timeout`, with `seconds`; `tikz_worker_exit`, with the worker's exit `code`), and `error.cause` the error under it. The words are in the instance's `locale` and `messages`, or else the page's (a processor gives its plugins its own), in English by default; a locale of the caller's without these keys takes English's.

## Contributing

Tests: see [CONTRIBUTING.md](https://github.com/banana-space/banana/blob/main/packages/CONTRIBUTING.md).
