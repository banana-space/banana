# bananamark

A Markdown dialect for mathematical writing, and its parser and renderer: CommonMark plus formulas, automatically numbered sections and theorem-like environments, one syntax for cross-references, and typography for Chinese text; bibliographies, wiki links and TikZ diagrams when a site turns them on. It takes a document and gives the HTML of its body and its metadata (headings, labels, bibliography, data blocks, wiki links). Pure JavaScript, for Node 22 and later and for browsers. Whatever depends on a site (where links go, how they look, image addresses) comes from hooks the caller gives, each with a default that needs no site.

It was written for [香蕉空间 (bananaspace.org)](https://bananaspace.org/), a Chinese mathematics wiki, which renders all its pages with it.

## Packages

| Package | What for |
| --- | --- |
| `bananamark` (this one) | Rendering pages to HTML, in Node or in a browser |
| [`bananamark-tikz`](https://github.com/banana-space/banana/tree/main/packages/bananamark-tikz#readme) | TikZ diagrams (```` ```tikz ```` blocks, `tikzcd` in formulas) compiled to SVG; Node only |
| [`bananamark-codemirror`](https://github.com/banana-space/banana/tree/main/packages/bananamark-codemirror#readme) | Editing the dialect in CodeMirror 6: highlighting, completion, checking as you type |

A site renders with `bananamark` (plus `bananamark-tikz` for diagrams); an editor in the browser adds `bananamark-codemirror`. Describe the site's dialect once with [`defineDialect`](#the-dialect), in a module of its own, and give it to each, so that the editor reads pages as the renderer does:

```js
// dialect.js, imported by the site's build and by its editor
import { alignTag, defineDialect } from 'bananamark';
export const dialect = defineDialect({ wikiLinks: true, tags: { align: alignTag } });

// the build
createProcessor({ dialect, resolveWikiLink });
// the editor
new EditorView({ extensions: [basicSetup, bananamark({ dialect })] });   // bananamark-codemirror
```

## Status

- Version 0.1. Until 1.0, a minor version (0.2) may change the interface and the HTML the spec describes; a patch version (0.1.1) does not. The three packages are released together with the same version; `bananamark-codemirror` and `bananamark-tikz` take `bananamark` as a peer dependency of the same minor version.
- Entry points: `bananamark`, `bananamark/typography`, `bananamark/highlight`, `bananamark/languages`, `bananamark/grammar`, `bananamark/rules`, `bananamark/messages`, `bananamark/bibliography`, `bananamark/scan`, and the stylesheets `bananamark/style.css` and `bananamark/katex.css` (see [API](#api)). `bananamark/internal/*` are the package's own modules, which may change at any time.
- Peer dependencies: CodeMirror's `@codemirror/language`, `@codemirror/lang-markdown` and `@codemirror/lang-yaml`, and lezer's `@lezer/common`, `@lezer/highlight` and `@lezer/markdown` (the dialect's grammar is built on them). npm installs them; a bundle must hold one copy of each, as CodeMirror needs (a `Language` from a second copy of `@codemirror/language` is an error).
- Node 22 and later; browsers from 2023 on (the stylesheet needs `:has()`). Where `Intl.Segmenter` is missing (Firefox before 125), typography takes each character with its combining marks, which gives the same result for the rules it applies.
- The conformance examples in [`test/spec/`](https://github.com/banana-space/banana/tree/main/packages/bananamark/test/spec) are the dialect's specification, kept in the repository (not in the npm package).
- ES modules only. No TypeScript types yet.
- MIT licence.

```sh
npm install bananamark
```

### Security

Raw HTML in pages is dropped, and link and image addresses can only be the site's own or http(s) (links also mailto), so what authors write cannot bring in scripts. Addresses that hooks return are held to the same rules. HTML that hooks and the caller's HTML-style tags return (`decorateLink`'s icons, `renderCodeBlock`, a tag's `render`) is written as it is: escaping it is the caller's job. KaTeX's `trust` option (see [KaTeX](#katex)) lets formulas write links and classes; leave it off for untrusted authors.

## A minimal example

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

CommonMark with GFM tables, strikethrough, footnotes and autolinks, and:

| Feature | Written |
| --- | --- |
| Formulas | `$…$`, `\(…\)`; display `$$…$$`, `\[…\]`; numbered: a ```` ```math {@eq:label} ```` block |
| Sections | `##` headings are numbered; `## Title*` is not; `{@sec:label}` at the end declares a label |
| Theorem-like environments | `::: theorem [Title] {@thm:label}` … `:::`; `::: definition (Name)` gives the environment its own name, `remark*` is unnumbered; `::: proof` (kinds: see [Reference](#reference)) |
| Cross-references | `@label`, `{@label}`, `@-label` (the number alone), `[text](@label)` |
| Labelled list items | `(a)`, `iv)`, `(A1)` and the like as list markers; `(a) {@it:label} text` can be referred to |
| Data blocks | fenced blocks the caller names, holding data about the page, not shown (see [Data blocks](#data-blocks)) |
| HTML-style tags | `<lang de>…</lang>`; the caller may add its own, and bananamark's ready-made `<align right>…</align>` and `<spoiler title="…">…</spoiler>` (see [HTML-style tags](#html-style-tags)) |
| Image width | `![caption](image.png){width=200}`: `width` (whole pixels) becomes `<img width>` |
| Typography | Chinese typography (see [Typography](#typography)); straight quotation marks become curly ones, `--`, `---` and `...` become –, —, … |
| Wiki links (`wikiLinks`) | `[[Target]]`, `[[Target\|text]]`; the target may hold formulas |
| Bibliographies (`bibliography`) | a ```` ```bibliography ```` block (YAML; fields: see [Reference](#bibliography-fields)); `@key` in the text cites an entry |
| TikZ (`tikz`) | a ```` ```tikz ```` block (`{caption="…"}` after `tikz` gives it a caption), `tikzcd` and `tikzpicture` environments in formulas (compiled by `bananamark-tikz`) |

The last three are off unless the dialect turns them on (see [The dialect](#the-dialect)): otherwise `[[…]]` is text, and ```` ```bibliography ```` and ```` ```tikz ```` blocks are ordinary code blocks.

In these docs a *label* is the target of a reference (`{@thm:a}`); `<lang>` and the like are *HTML-style tags*. [Reference](#reference) describes each feature in more detail, and the spec files show every one with examples.

Bold `**…**` may stand against letters, links, formulas and punctuation (`text**[[link]]**text`): bananamark pairs a paragraph's `**` in turn as openings and closings, where CommonMark alone would not; a `**` with no partner after it stays as written. An image alone in a paragraph is a figure: the text in its brackets (formulas and links allowed) is the caption below it, and its alt text; for alt text without a caption, leave the brackets empty and give a title, `![](image.png "alt text")`.

Heading ids are the heading's text: formulas as text, lower case, accents and formatting punctuation removed, spaces as `-` (`## Gödel's theorem and $\infty$` gets `godels-theorem-and-∞`); a repeated one gets `-1`, `-2`. A label on a heading refers to it, but the id stays the text's: `{#id}` on a heading is an error (`heading_id`), which says to write `{@label}`.

## The dialect

`defineDialect(options)` describes what a site's pages may hold. It checks the settings and returns a frozen object, which every entry point takes as its `dialect` option (`createProcessor`, `renderDocument`, `transformDocument`, `transformFragment`, `createRenderer`, `createBook`, and `bananamark-codemirror`'s functions); options given beside it win over its settings. Each setting can also be given directly to an entry point, without a dialect. An option an entry point does not have is an error (`option_unknown`), so that a misspelled one is not silently ignored.

| Option | Meaning | Default |
| --- | --- | --- |
| `wikiLinks`, `bibliography`, `tikz` | Turn on wiki links, ```` ```bibliography ```` blocks and TikZ diagrams (see [Syntax](#syntax)) | `false` |
| `environments` | Theorem-like environments: kind → `{ name, group, numbered }`, or `false` to remove one of the defaults; over the defaults (see [Reference](#default-environments)) | the 12 defaults |
| `dataBlocks` | Data blocks: name → `{ read, outsideEnvironments }` (see [Data blocks](#data-blocks)) | none |
| `tags` | The caller's HTML-style tags: name → definition, or `false` to remove `<lang>` (see [HTML-style tags](#html-style-tags)) | `<lang>` |
| `messages` | The caller's messages: more languages, or other words for bananamark's (see [Messages](#messages)) | none |
| `codeLanguages` | Languages of code blocks: name → a CodeMirror `Language`, a lezer `Parser` or a legacy mode (`{ token, startState }`), or `false` for no highlighting; `bananamark/languages` has about 35 (see [Code highlighting](#code-highlighting)). The dialect's own grammar, with these languages in it, is added for `markdown` and `md` blocks | the dialect's own: Markdown, YAML, TeX |
| `katex` | KaTeX's own options, such as `{ macros: { '\\RR': '\\mathbb{R}' } }` (not `displayMode`, `output` or `throwOnError`) | `{ strict: 'ignore' }` |
| `rewriteMath(tex)` | Changes to formulas before KaTeX (`data-tex` holds the changed TeX), such as symbols only the site's font has | none |

The dialect also holds its CodeMirror language (`dialect.language`, see [Code highlighting](#code-highlighting)), which `bananamark-codemirror` uses.

## Options

`createProcessor(options)` and `renderDocument(source, options)` take the dialect (`dialect`, or its settings directly), these, and the [hooks](#hooks); another option is an error for `createProcessor`, while `renderDocument` takes it as a field of the page (below). The page options (marked "page") can also be given to `processor.render(source, page)`, over the processor's.

| Option | Meaning | Default |
| --- | --- | --- |
| `lang` (page) | The page's language (BCP 47): the language of the text bananamark writes (reference text, environment names, bibliography words; see [Messages](#messages)), whether Chinese typography applies, heading ids | `'en'` |
| `locale` | The language of errors: `'en'`, `'zh-cn'`, or one in `messages` | `'en'` |
| `typography` (page) | Chinese typography: `{ convertFullStop, spaceQuotes }`, or `false` for none (see [Typography](#typography)) | `{}`: both off |
| `checkMath` | Check every formula with KaTeX while reading the page, so that errors name the formula's line (an editor's check); otherwise KaTeX's errors come while rendering, without a line | `false` |
| `allowH1` | Whether `#` headings are allowed; if not, one is an error | `true` |
| `formatSectionReference(number, depth)` | The text of a reference to a numbered section, such as "Chapter 2" for depth 1 in a book | the message `reference_section` ("Section N") |
| `plugins` | What finishes a page's HTML, such as `bananamark-tikz` (see [Plugins](#plugins)) | none |
| `basePath` | The site's path below its host, put before addresses authors write from the root (`/a/b`) | `'/'` |

**Options of a page alone** (`processor.render(source, page)`, or `renderDocument`'s options):

| Option | Meaning |
| --- | --- |
| `file` | The file named in errors |
| `lineOffset` | The lines before the body (such as front matter), so that errors point at the file's own lines |
| `key`, `title` | The page's key and title (Markdown): with them, a `{@label}` alone on the body's first line is the page's own label, and a reference to it shows the page's number or title |
| `number`, `depth` | The page's number and depth (pages of a book) |
| `numbering` | Numbering settings (see [Numbering](#numbering)); without them, sections and theorems are numbered within the page (sections 1, 2…, theorems 1.1, 1.2…) |
| `pageAnchor` | `true` when the page's template gives its title the id `page-title`: references to the page's label point there, and no heading takes that id |
| `outputPath` | The page's HTML file, for plugins (`bananamark-tikz` makes its fonts' addresses relative to it) |
| any other | A field of the caller's, which the hooks get with the page (`page.course`, say) |

## Hooks

Each is an option of `createProcessor` or `renderDocument`; `page` is the page as the renderer sees it, `{ file, lang, typography, outputPath }` and any other fields the caller gave.

| Hook | Meaning | Default |
| --- | --- | --- |
| `resolveWikiLink(target, { text, written, page })` | Where a `[[link]]` goes. `target` is the target's matching key, not the text as written: formulas normalized by how they are written (`$\mathbb Z$` and `ℤ` are the same; spaces in formulas removed; full-width and half-width brackets the same); `text` is the link's text; `written` the target as written, when it has formulas. Returns `{ url }`; for an article that does not exist, `{ url, missing: true }` (`url` optional, such as a page for creating it) or `undefined`. A missing article's link has the class `bm-wiki-link-missing` and the title "Article not yet created: …" (the message `missing_article_link`). Authors' `page` fields in bibliographies go through it too | nothing exists, no address |
| `resolvePersonLink(name)` | A bibliography author's link: `{ target }` (a wiki link's target, then given to `resolveWikiLink`; with wiki links on), `{ url }`, or `undefined`. `name` is the structured name, `{ family, given }` or `{ literal }`; `bananamark/bibliography` writes it out for matching. Not asked when the author has a `page` field | no links |
| `resolvePageLink(key, page)` | `{ url }` of another page of a book (where a reference's target is). Without one, a reference to that page is an error (`page_unpublished`) | none |
| `decorateLink(destination, page)` | How an ordinary link looks: `{ className, before, after, newTab }`; `before` and `after` are HTML around the link's text (an icon), `newTab` adds `target="_blank" rel="noopener"`. `undefined`: a plain link | addresses on other hosts (`http(s)://`, `//`): `{ className: 'bm-external-link', newTab: true }` |
| `resolveImage(path, page)` | The address of an image written with a relative path (a file beside the page): `path` decoded, without its query, which is kept after the address returned; `undefined` keeps the path. An address written from the site's root (`/a/b`) gets `basePath` instead | the path |
| `renderCodeBlock({ language, code, attributes })` | A code block in a language with no highlighting: `code` as written (not escaped); `attributes` the fence's `{key="value"}` attributes. Returns HTML | `<pre class="bm-code-block" data-highlight="…"><code>` with the escaped code |

Addresses from hooks are not changed (`basePath` goes only before addresses authors write from the root), and they are held to the same rules as authors' (see [Security](#security)): `resolveImage` must give text, within the site or http(s). Every link's and image's address is percent-encoded where it needs to be in HTML (`图.png` becomes `%E5%9B%BE.png`; valid `%XX` stay). An error a hook throws is reported as `hook_failed`, with the hook's own error as `cause` (see [Errors](#errors)).

## The result

`processor.render` and `renderDocument` return `{ html, headings, labels, bibliography, data, wikiLinks }`:

- `html`: the body's HTML (without the page's title).
- `headings`: the page's headings in order, `{ level, id, number, title }`: `id` is the HTML id, `number` the section number (`''` when unnumbered), `title` the heading's HTML (typeset, without the number).
- `labels`: the labels the page declares, `{ name, anchor, kind, line }`: `name` as written, `anchor` the id in the HTML, `kind` one of `heading`, `environment`, `equation`, `item`, `bibliography` (`page` in books), `line` where it is declared.
- `bibliography`: the bibliography's entries: the fields as normalized (names split into `{ family, given }`), with `key`, `anchor`, `citationLabel` (the citation's text, with a, b added where two would be the same) and `versions`.
- `data`: what data blocks read, by name (see [Data blocks](#data-blocks)).
- `wikiLinks`: every wiki link, `{ target, line, column }` (once for each place), `target` being the matching key; with bibliography authors' links (`page` fields and `resolvePersonLink`'s `{ target }`), for finding missing articles.

### Errors

A page with an error throws a `BananamarkError` (exported), at the first error (they are not collected):

- `error.message` starts with where: `file:line: ` for errors in the dialect, `file: ` for errors while rendering (link addresses, image widths, tags' parameters, formulas without `checkMath`); `error.reason` is the message without it.
- `error.file`, `error.line` and `error.column` (from 1) say where, as far as known.
- `error.code` is the message's key (such as `'label_missing'`) and `error.params` its values (`{ name: 'thm:x' }`; a list is an array, as `tag_unknown`'s `allowed`), for handling a kind of error or putting it in other words. An error a caller reports as text (a data block's or a tag's `fail('…')`) has no code; one reported with `problem(key, values)` has.
- A wrong setting (an unknown option, `option_unknown`; a plugin without `postprocess`, `plugin_invalid`; a dialect's bad environment or tag) is a `BananamarkError` too, without where.
- An error a hook, a data block's `read` or a tag's `render` throws becomes `hook_failed` (`{ hook, message }`), with where, and the original as `error.cause`.

## Messages

Every word bananamark writes is one of its messages, in English (`en`) and Chinese (`zh-cn`). There are two kinds:

- The page's text (reference text such as "Section 1" or "(1.1)", "Article not yet created: …", the words of bibliographies, and what the caller's tags take with `message`) is in the page's language, `lang`: the messages of that language when there are some (`de-AT` also looks for `de`; any `zh…` takes `zh-cn`), otherwise English. Environment names are in `environments`, chosen the same way (English when the language has no name); reference text is the name and the number ("Theorem 1.2", "定理 1.2").
- Errors are in `locale`: they are for the page's authors, whatever the page's language.

```js
renderDocument(source);                                       // Theorem 1.2, Section 1, Proof. …; errors in English
renderDocument(source, { lang: 'zh-cn', locale: 'zh-cn' });   // 定理 1.2、第 1 节、证明．…；errors in Chinese
renderDocument(source, {                                      // a German page: the messages it does not give in English
  lang: 'de',
  messages: { de: { reference_section: 'Abschnitt {number}', missing_article_link: 'Artikel fehlt: {name}' } },
  environments: { theorem: { name: { de: 'Satz', en: 'Theorem' }, group: 'theorem' } },
});
```

- `messages`: language → `{ key: text }`; a new language, other words for some of bananamark's, or the caller's own keys (its tags' words). A key is looked for in the caller's table for the language, then in bananamark's, then in English (the caller's, then bananamark's). A message may hold `{name}`, a value; a list (an array) is joined as the language joins one (the message `list_separator`: `, ` in English, `、` in Chinese). The keys and their values are in `bananamark/messages`' `messages` (`messages.en`, `messages['zh-cn']`); `error.code` is one of them.
- These options hold for the call alone. Functions of `bananamark/internal/*` called directly use English.

## Extending

bananamark has four ways for a site to add to it:

- **Hooks** decide what depends on the site: link addresses, how links look, images, code blocks (see [Hooks](#hooks)).
- **Data blocks** are fenced blocks the site names, for data about the page, not shown.
- **HTML-style tags** are inline or block markup the site defines, with checked parameters and its own HTML.
- **Plugins** finish a page's HTML after rendering, asynchronously, such as compiling diagrams.

### Data blocks

```js
const dialect = defineDialect({
  dataBlocks: {
    meta: { read: (source, { lang, fail }) => readMeta(source, fail), outsideEnvironments: true },
  },
});
const { data } = createProcessor({ dialect }).render(source, page);   // data.meta: each block's value, in order
```

- The fence's language is the block's name (letters, digits, `_`; not `math`, nor `tikz` or `bibliography` when those are on); the fence takes no parameters and must close. `outsideEnvironments: true`: the block must stand outside theorem-like environments.
- `read(source, { lang, fail })` gets the block's text and the page's language and returns any value; `fail(message, offset)` reports an error at `offset` in `source`, which points at that line of the page.
- A name not registered is an ordinary code block. Fences inside code blocks (an example in ```` ```markdown ````) are not data blocks.
- The result's `data` has every registered name, with an empty array when the page has no such block.
- To highlight a block's content in editors and code blocks (as YAML, say), give its language in `codeLanguages` (see [Code highlighting](#code-highlighting)).

### HTML-style tags

For what Markdown cannot write. bananamark always has `<lang de>…</lang>` (text in another language: a `div` when blank lines separate it, otherwise a `span`), and exports two more, ready to add: `alignTag`, `<align right|center>…</align>` (`div.bm-align-right` and so on), and `spoilerTag`, `<spoiler title="…">…</spoiler>` (`details`). Other HTML is an error. The caller's tags are added to `<lang>`, and can replace or remove it:

```js
const dialect = defineDialect({
  tags: {
    align: alignTag,
    spoiler: spoilerTag,
    note: {
      paired: true,
      render: ({ inner, fragment, message, escape }) => `<aside class="note">${escape(message('note_label'))}${fragment(inner.trim())}</aside>\n`,
    },
    badge: {   // Theorem 3 <badge new />
      attachToPrevious: true,
      positional: { values: ['new', 'updated'] },
      render: ({ parameters, escape }) => ` <span class="badge">${escape(parameters.positional[0])}</span>`,
    },
  },
  messages: { en: { note_label: 'Note: ' }, 'zh-cn': { note_label: '注：' } },
});
```

- Names are lower-case letters, digits and `-`. `paired: true`: written `<name>…</name>`; otherwise alone (`<name … />`, the `/` optional). `attachToPrevious: true`: the tag annotates what is just before it, and the spaces between are removed (after a name, say).
- Parameters: `positional`, the one parameter written as a bare value, a word starting with a letter (`<lang de>`): `{ language: true }` a language code, `{ values: [...] }` one of these, or `{ check(value) }`. `named`, parameters written `key="value"`, each with `required`, `check(value)` (one that fails gives `tag_parameter_invalid`), `language` (a language code), `reading` (the value may hold readings written `字<かな>`) or `markdown` (below). `requireOneOf`: of these, at least one is required. Without these a tag takes no parameters. Values are plain text: no quotation marks, backslashes, braces, line breaks, control characters, `<` or `>` (except readings), at most 300 characters. The dialect checks them, and errors name the tag's line.
- `markdown: true`: the parameter is text of the page, converted as the page's text is (formulas, wiki links, references, emphasis), and may hold backslashes, braces and backticks (not quotation marks, `<` or `>`); `render` gets it as Markdown, to give to `fragment`. `<spoiler>`'s `title` is one: `<spoiler title="On $\mathbb{Z}$">`. Errors in it name its line and column.
- `render(context)` returns the tag's HTML. The context: `name`; `parameters` (`{ positional, named }`); `inner` (a paired tag's Markdown); `page`; `fragment(markdown, { block })`, Markdown of the page as HTML (inline, or block with `block: true`); `message(key, values)`, a message in the page's language (the `messages` option first); `escape(text)`; `fail(message)`, an error (text, or `problem(key, values)` for one with a code, in `locale`); `problem(key, values)`.
- A tag standing alone in a paragraph is not wrapped in `<p>`; when it returns block HTML, end it with a line break.
- The main entry exports `defaultTags` (`<lang>`), `alignTag`, `spoilerTag`, their rules without `render` for editors (`defaultTagRules`, `alignTagRule`, `spoilerTagRule`), and `createTagRegistry(tags)` (bananamark's and the caller's together, checked).

### Plugins

A plugin is `{ name, postprocess(html, page), close() }` (`close` optional): `postprocess` is asynchronous and returns the page's HTML; `page` is `{ file, outputPath, lang, locale, messages }`, the page's and the processor's (a plugin's errors can be in the page's locale, as `bananamark-tikz`'s are). With plugins, render with `processor.renderAsync(source, page)` (a book's `renderAsync(handle)`, or `renderDocumentAsync(source, options)`), which runs them in order; `render` is then an error, since the plugins' work would be left undone. `processor.close()` closes the plugins once nothing more is rendered. `renderDocumentAsync` leaves them open (a TikZ worker keeps the process alive until it idles): render many pages with a processor, and close it, or call the plugins' `close()`.

`bananamark-tikz` is one (with `tikz` on): without it (in a browser, say) diagrams stay placeholders, which show their TeX (see [Output HTML](#output-html)).

## Books

When pages make a book, they share labels (a page can refer to another's), numbering (chapter and theorem numbers can run across pages) and bibliographies (made unambiguous over the book: Smith 2020a, 2020b). It takes two passes: add every page in reading order (which collects labels and numbers), then render each (in any order):

```js
const processor = createProcessor({ dialect, resolvePageLink: key => ({ url: `/books/${key}/` }) });
const book = processor.book({ numbering: { theorems: { depth: 0 } }, formatSectionReference: (number, depth) => depth === 1 ? `Chapter ${number}` : `Section ${number}` });

const intro = book.add(sourceIntro, { key: 'algebra/intro', title: 'Introduction', file: 'intro.md' });
const groups = book.add(sourceGroups, { key: 'algebra/groups', title: 'Groups', position: [1], file: 'groups.md' });
book.declare('other', { text: 'Theorem 9.1', page: 'analysis/9' });   // a label of a page outside the book

book.render(groups);   // as processor.render's result
```

- `add(source, page)`'s `page`: `key` (the page's key: references into it get its address from `resolvePageLink(key)`), `title`, `position` (its place in the contents, `[2, 1]` for 2.1), `number` (the number shown, default `position.join('.')`; `''` for none), `depth` (default `position.length`; `formatSectionReference` takes it), `numbering` (the page's own, over the book's), and the page options (`file`, `lineOffset`, `lang`, `typography`, `outputPath`).
- `add` returns the page's handle; `handle.headingNumbers` is `{ last, taken }`, the last number its `##` headings used and every number they used: the book's pages below it in the contents continue after `last` and cannot take a number in `taken`.
- `declare(label, { text, number, page })`: a label of a page whose source is not there (an editor that has only the other pages' labels, say); `text` is how a reference shows it.
- `labels()`: the book's labels in the order they were declared, `{ name, kind, page, file, line, anchor, text }`, for listing them (an editor's completion; `bananamark-codemirror`'s checks take them as `labels`): `page` its page's key, `text` how a reference to it shows, on one line ("Theorem 2.3", with an unnumbered environment's title after it in brackets; a heading's text; a citation's label, once the pages are rendered or transformed).
- `processor.book(options)`: `numbering`, `formatSectionReference` (over the processor's), and the dialect's options (`lang`, `locale`, `environments` and so on); hooks are the processor's.
- Without a processor: `createBook(options)`, with `add`, `declare` and `labels` as above, and `transform(handle)`, which gives the page's document (rendered by a renderer, see [Two layers](#two-layers-and-fragments)).

### Numbering

The format of `numbering` (a book's, a book page's or a single page's); every part can be left out:

```js
{
  pages: true,                                                // kept for the caller (below)
  headings: { depth: 1, prefix: true, removeZeroes: true },   // or false
  theorems: { depth: 1, prefix: true, removeZeroes: true },   // or false; depth or absoluteDepth
  equations: { depth: 1, prefix: true, removeZeroes: true },  // as theorems
}
```

- `headings.depth`: how many heading levels are numbered, from `##` (1: `##` only; at most 5); `0` or `false`: none.
- `depth` of `theorems` and `equations`: how many levels of the page's headings their numbers hold (`0`: the page's number and a count through the page; `1`: counted again at each `##`). `absoluteDepth`: the number is the first parts of the page's full number in the book and a count, shared by the pages whose numbers start the same (`0`: one count through the book). All numbered theorem-like environments share one count; equations have another.
- `prefix`: `true` puts the page's number first; `false` does not; text (`'A'`) puts that instead. `removeZeroes`: levels with no number are not shown (theorem 2.3.0.1, before page 2.3's first section, shows as 2.3.1).
- `pages` (true or false) is read and checked but left to the caller, which numbers a book's pages (bananamark takes each page's `number` as given): whether the book's pages are numbered.
- These are a book's defaults; a single page with `numbering` has these as its defaults too. The main entry's `parseNumbering(value, base, file)` checks a setting and puts it over `base` (errors name `file`).

## Output HTML

Every class bananamark writes starts with `bm-`, so as not to meet the page's own styles; ids (headings, labels, bibliography entries, footnotes) are part of addresses and have no prefix. The classes and attributes:

| Class / attribute | On |
| --- | --- |
| `bm-env bm-envgroup-<group> bm-env-<kind>`, `bm-envtitle`, `bm-envcontent` | Theorem-like environments (`<group>`: the environment's group, see [Reference](#default-environments)); a proof's title is an inline `span.bm-envtitle` |
| `bm-math-rendered`, `bm-math-display`; `data-tex`, `data-display` | Formulas: `data-tex` their TeX, `data-display` whether display |
| `bm-math-end` | In an inline formula followed by closing punctuation or a hyphen: KaTeX's last box and the punctuation, kept on one line (see [KaTeX](#katex)) |
| `bm-math-rendered bm-tikz-source`; `data-tikz-mode`; `code.bm-tikz-code` | A TikZ diagram's placeholder: `data-tex` its source, and the source as text in `code.bm-tikz-code`, shown where nothing compiles it (`data-tikz-mode`: `text` for a ```` ```tikz ```` block, `math` in a formula); `bananamark-tikz` makes it `bm-tikz-rendered` |
| `bm-heading-link`, `bm-section-number` | The § link before a heading (its `title`: the message `link_to_heading`), and the section number |
| `bm-wiki-link`, `bm-wiki-link-missing`, `bm-citation` (`data-reference`: the entry's key) | Wiki links, links to missing articles, citations; ordinary links' class is `decorateLink`'s (default `bm-external-link` for other hosts) |
| `bm-item-label`, `bm-item-label-outer`, `bm-item-label-block`, `bm-item-target`; `style="--bm-outer: N"` | Labelled list items (below); `bm-item-target` is a reference's anchor |
| `bm-bibliography`, `bm-bibliography-entry`, `bm-bibliography-version`, `bm-bibliography-label`, `bm-bibliography-names`, `bm-bibliography-relation`, `bm-bibliography-links` | Bibliographies: the list, an entry, a version; an entry's label, names; a version's relation; links to the work |
| `bm-align-right`, `bm-align-center` | `<align>` |
| `bm-content-figure` | An image alone in a paragraph (`figure`, its caption in `figcaption`), and a TikZ diagram with a caption |
| `bm-footnote-ref`, `bm-footnote-backref`, `bm-footnotes` | Footnotes: the reference, the link back, the list at the end (ids `fn:N`, `fnref:N`) |
| `bm-code-block` (`data-highlight`: its language), `bm-hl-…` | Code blocks, and the highlighting in them (see [Code highlighting](#code-highlighting)) |
| `data-typography="boundary"` | Where Chinese typography stops (see [Typography](#typography)) |

A page referring to its own label (with `key` and `title`) links to `#page-title`: give the page's title that id in the template.

A labelled list item's label is at the start of its text (`<span class="bm-item-label">(a)</span>`), and its `<ol>` counts from 0: the styles hide the list's own markers and put the labels where they would be. The outer label of nested labels on one line (`(a)(i)`) has `bm-item-label-outer`, and `--bm-outer` says how many levels out it is; `bm-item-label-block` is the label of an item that starts with a block (a formula, say).

### The stylesheet

`bananamark/style.css` gives all of this a plain look, to start from: environments with a coloured rule, proofs with □, punctuation kept with a formula's end, the § links, labelled list items, figures, `<align>` and `<spoiler>`, bibliographies (the entry a citation leads to marked), footnotes, TikZ placeholders and diagrams' numbers, and code highlighting. It styles only bananamark's classes (and `details`); the page's fonts, sizes, link colours and layout are its own. Colours are custom properties (`--bm-accent-theorem`, `--bm-link`, `--bm-hl-command` and so on), with a dark set for `prefers-color-scheme: dark`; set them on `:root` to change them. It needs a browser from 2023 or later (`:has()`, for list labels).

## Typography

The HTML bananamark writes (bodies, and `renderFragment`'s fragments) goes through typography for Chinese text:

- One space between Han characters and Latin letters, digits or inline formulas; ordinary spaces removed between Han characters, inside brackets and quotation marks, and beside full-width punctuation; one space between half-width brackets and Han characters outside them; spaces before half-width commas and the like removed, and one after them before Han characters. Special spaces (no-break, full-width) are kept; code, display formulas and the inside of formulas are not touched; new spaces go outside links and other inline elements. The spaces around footnote references are as written.
- The rules apply to Chinese: all the text of a Chinese page (`lang` `zh…`), and Han characters and Chinese punctuation in other pages; Japanese and Korean (`ja…`, `ko…`) are left alone. Attributes on elements count: `lang`; `data-typography="off"`, nothing changes inside; `data-typography="boundary"`, the rules do not reach across the element (a separator spaced by styles); `data-typography-full-stop="on"` or `"off"`, `convertFullStop` on or off inside.
- The option `typography`:
  - `convertFullStop` (default `false`): `。` becomes `．` (a mainland academic convention);
  - `spaceQuotes` (default `false`): for fonts whose curly quotation marks `‘’“”` are Western glyphs (Chinese and Western text share these characters; the font decides how they look): one space between them and Han characters outside, as for half-width brackets; when off, spaces beside curly quotation marks are as written. Straight quotation marks `"` `'` are always Western punctuation (the full-width ones are other characters).
  - `typography: false`: no typography.
- Heading ids are made from the typeset heading (without changing full stops).
- Typesetting HTML again (as a site does to its templates' text, which may hold rendered fragments) leaves it as it was: the punctuation in a formula's `bm-math-end` is read as text after the formula.
- A site's other text (titles in templates, navigation) can be typeset the same way with `bananamark/typography`'s `typesetHTML(html, { lang, typography })` (`lang` of the HTML's root, default `en`; `typography` as the option). `typesetTree(tree, options)` does the same to a parse5 tree, and takes `skip(node)`, an element to leave as it is.

Quotation marks and dashes (see [Syntax](#syntax)) are not Chinese typography: they are changed in the Markdown, also with `typography: false`.

## KaTeX

Formulas are rendered by KaTeX as HTML and MathML (`output: 'htmlAndMathml'`). The option `katex` goes to KaTeX: macros (`{ macros: { '\\RR': '\\mathbb{R}' } }`), `strict`, `trust`; bananamark decides `displayMode`, `output` and `throwOnError` (always throws). With `trust`, formulas can write links and HTML classes (`\href`, `\htmlClass`): only for trusted authors. `rewriteMath(tex)` changes formulas before KaTeX, and `data-tex` holds the changed TeX. With `checkMath: true`, formulas are checked with the same options while the page is read.

A formula KaTeX cannot render is an error, `katex` (while rendering, or while reading with `checkMath`).

KaTeX lays an inline formula out as boxes (`.katex-base`), and a line may break between two of them, after a relation or an operator. Closing punctuation right after an inline formula (`,.;:!?`, Chinese punctuation, closing brackets and quotation marks, as a run: `）。`) must not start the next line, and a browser may break before it: a `white-space: nowrap` group of the formula and the punctuation does not stop that in Chromium or Firefox. So bananamark puts KaTeX's last box with the punctuation into `span.bm-math-end`, inside the formula's span: the box in a `.katex` of its own, the punctuation after it, in the text's font, read and copied as the text's. The stylesheet makes `bm-math-end` an inline-block on one line (`display: inline-block; white-space: nowrap`): the formula still breaks where it could, and the punctuation stays with its end. A hyphen right after a formula goes the same way, whatever follows it (`$p$-adic`, `$A$-module`): the line breaks after the hyphen, not before. Not after a space, nor punctuation in a word (`$n$’s`, `$x$.5`); not after display formulas or TikZ diagrams. Code reading the formulas' HTML takes the text of `bm-math-end`, outside its `.katex`, as text after the formula (typography does).

## Code highlighting

Code blocks are highlighted with lezer grammars. Built in (`defaultLanguages`): the dialect itself (`markdown`, `md`; with its formulas and nested code blocks), `yaml`, `yml`, `bibliography`, and TeX (`latex`, `tex`, and `math`, `tikz`). `bananamark/languages` has about 35 more, which only what imports it loads: CodeMirror's language packages for JavaScript/TypeScript, Python, C/C++, Rust, Java, JSON, HTML and CSS, and CodeMirror's legacy modes for shell, Haskell, Julia, Mathematica, MATLAB/Octave, R, Lua, Ruby, Go, Swift, Scheme, Lisp, OCaml, F#, C#, Kotlin, Scala, Objective-C, SQL, diff, TOML, Fortran, Erlang and Perl (with their aliases: `js`, `py`, `sh`…). Names are case-insensitive. Every language's tokens get the same classes (`bm-hl-command`, `bm-hl-string`, `bm-hl-comment`, `bm-hl-atom`, `bm-hl-variable`, `bm-hl-key`, `bm-hl-number`, `bm-hl-bracket` and so on), so one stylesheet does for all.

```js
import { defineDialect, highlightCode } from 'bananamark';
import { languages } from 'bananamark/languages';

highlightCode('a: 1', 'yaml');   // '<span class="bm-hl-key">a</span>…'; undefined for a language it does not have
defineDialect({ codeLanguages: { ...languages, lean: leanMode, python: false } });   // these, a language more, none for one
```

The dialect's grammar (`bananamark/grammar`) is a CodeMirror language too: `bananamark-codemirror` builds the editor's language on it. Its fenced code is highlighted by language: `math` and `tikz` as TeX, `yaml` and `bibliography` as YAML, `markdown` as the dialect; a dialect's `codeLanguages` add more, in its code blocks and in the editor (a data block as YAML: `defineDialect({ codeLanguages: { meta: yamlLanguage } })`). Without a dialect, `dialectSupport({ codeLanguages, wikiLinks })` makes the language.

## Two layers and fragments

`renderDocument` is the dialect's layer and the renderer together; they can be called apart:

```js
import { createRenderer, inspectDocument, transformDocument, transformFragment } from 'bananamark';

const document = transformDocument(source, { dialect, file: 'example.md' });                       // the dialect's layer
const { html, headings } = createRenderer({ dialect, ...hooks }).renderDocument(document, { file: 'example.md' });   // the renderer

const caption = transformFragment('See [[Groups]] and $x$', { dialect, lang: 'en' });   // text without a page's structure
createRenderer({ dialect, ...hooks }).renderFragment(caption, page);                   // inline HTML; { block: true } for blocks
```

- The dialect's layer gives a document, `{ markdown, nodes, meta }`: what the dialect writes its own way becomes typed nodes in `nodes`, and the Markdown holds only their numbers (`@@node:N:node@@`, or links `[text](bananamark:N)`). The nodes' types and fields belong to the package and may change; a page cannot hold these two forms itself (an error).
- `meta` is the page's data: `labels`, `bibliography`, `data`, `wikiLinks` (as in [the result](#the-result)), `headingTitles` (anchor → the heading's document, for a renderer's `renderFragment`) and `sectionNumbers` (anchor → its number). Options go to the layer they concern: `resolvePersonLink`, `checkMath`, `katex` and `rewriteMath` to `transformDocument` (bibliographies and the check of formulas are there), the dialect to both, the other hooks to `createRenderer`. Each takes its own options and the page's (`transformDocument`: `file`, `lineOffset`, `lang`, `key`, `title`, `number`, `depth`, `numbering`, `pageAnchor`…); another is an error.
- `transformFragment(text, options)` reads text without a page's structure (no sections, environments, labels or bibliographies; formulas, wiki links and HTML-style tags), such as a caption or a notice; options: the dialect, `lang`, `locale`, `checkMath`. The renderer's `renderFragment(document, page, { block })` renders it: by default without the `<p>` around a single paragraph.
- `inspectDocument(document)` writes the nodes in their places, to be read (tests, debugging):

```
## Section ⟦heading id="section" number="1"⟧

See [reference](⟦reference id="t" text="Theorem 1.1"⟧) and ⟦math tex="x"⟧.
```

## Reference

What each part of the dialect does, in more detail than [Syntax](#syntax); the spec files show each with examples.

### Headings

- `##` headings are numbered 1, 2…, in order; `###` and below are not. A `*` at the end leaves a heading unnumbered: `## References*` (or `## References *`), before or after the label (`## References* {@sec:refs}`, `## References {@sec:refs}*`). An unnumbered section is in the contents and has its anchor, but takes no number and does not start theorem and equation numbers again; the numbered sections after it go on from the last number. `\*` is a literal star, and a star closing emphasis is the text's (`## **Strong***` is unnumbered). Setext headings (a line of `---` under the text) are the same, the star at the end of the text.
- A numbered heading can be given its own number after its label: `## Appendix {@sec:extra number="A"}` (a positive whole number or one word; not with `*`, and only on a level that is numbered); two headings cannot have the same number.
- `{@label}` at the end declares a label. A reference to a numbered heading reads "Section 1" (`reference_section`, or the book's `formatSectionReference`); to an unnumbered one or one of a lower level, its text.
- A `##` heading stands at the body's top level, not in a list or quotation (`heading_level_two`), and not inside an environment (`heading_in_environment`); lower levels can be anywhere. Up to three spaces may come before a heading or an environment's fence.
- Theorem-like environments and equations before the first numbered section are numbered 1, 2…; a page without numbered sections numbers them so throughout. Other schemes: [Numbering](#numbering).

### Default environments

| Kind | English | Chinese | Group | Numbered |
| --- | --- | --- | --- | --- |
| `definition` | Definition | 定义 | `definition` | ✓ |
| `theorem` | Theorem | 定理 | `theorem` | ✓ |
| `lemma` | Lemma | 引理 | `theorem` | ✓ |
| `proposition` | Proposition | 命题 | `theorem` | ✓ |
| `corollary` | Corollary | 推论 | `theorem` | ✓ |
| `example` | Example | 例 | `example` | ✓ |
| `remark` | Remark | 注 | `remark` | ✓ |
| `notation` | Notation | 记号 | `definition` | ✓ |
| `conjecture` | Conjecture | 猜想 | `theorem` | ✓ |
| `exercise` | Exercise | 习题 | `example` | ✓ |
| `convention` | Convention | 约定 | `remark` | |
| `proof` | Proof | 证明 | `proof` | |

The option `environments` is put over these: a kind of the caller's is added, one with a default's name replaces it, and `false` removes one. Kinds are lower-case letters; `name` is a name, or names by language (`{ en, 'zh-cn', … }`); `group` gives the class `bm-envgroup-<group>`; `numbered: false`, no numbers. All numbered kinds share one count. `proof` is special: its title is at the start of its text ("Proof."), it is not numbered, and it can be renamed. A `*` after a kind (`remark*`) leaves that one unnumbered; `[Title]` gives a title, in parentheses after the name.

- An environment is written `::: kind (Name) [Title] {@label}`, each part but the kind optional, in this order, on a line of its own; `:::` alone closes the nearest open one. Environments can be nested.
- `(Name)` is shown in place of the kind's name, with the kind's numbering and group: `::: definition (Condition) [Same law] {@cond:law}` reads "Condition 2.3 (Same law)", a reference to it "Condition 2.3"; `::: remark* (Note)` reads "Note". The name is plain text, shown as written: not empty, without brackets, formulas, `[]{}<>` or backslashes, and not on `proof` (`environment_name`); what needs more goes in the title. The old way, `::: -remark [Note]`, is an error that says so (`environment_dash`).
- The title is on the fence's line, with inline formulas, emphasis, links and references; literal square brackets in it are written `&#91;` and `&#93;`. A reference to an unnumbered environment reads its name and title ("Theorem (Existence)"), or the name alone.
- A proof stands on its own after an environment: not inside one, and holding none (`proof_position`, `proof_nested_environment`). Its title, when there is one, replaces "Proof" (`::: proof [Proof of @thm:main]`); it ends with □.

### Formulas

- Inline `$…$` and `\(…\)`, display `$$…$$` and `\[…\]`. The TeX inside is as written: Markdown escapes nothing in it (`\\` in `aligned` is `\\`). Braces and TeX comments are followed, so `$a \text{$b$} c$` is one formula. A literal dollar sign in the text is `\$`; `\[` starts a formula, so literal brackets around a link are `&#91;` and `&#93;`.
- A formula does not cross a blank line: one still open where its paragraph ends is an error at its start, rather than taking the paragraphs after it. So are a comment without `-->` and a code block without its closing fence. An empty formula (`$ $`, `\[\]`) writes nothing. In a quotation, each line of a display formula has its `> `.
- A ```` ```math ```` block is a numbered display formula, its TeX without delimiters (several lines in one `aligned`, one number); `{@eq:label}` after `math` declares a label. The number is a `\tag` bananamark adds: one written in the block is an error (`math_manual_tag`); other display formulas keep the `\tag`s they have. Numbers start again at each numbered `##` heading, and are (1), (2)… before the first.

### Labels and references

- `{@label}` declares a label: at the end of a heading or of an environment's or a math block's fence, or at the start of a list item, right after its marker. A bibliography's keys are labels too. A page's labels (a book's: all its pages') are one set: one declared twice is an error (`label_duplicate`), and so is a reference to one never declared (`label_missing`). Labels are NFC-normalized.
- A label holds no spaces, `#@{}<>[]|()\`, backticks or full-width punctuation, and does not end with `,.;:'"!?`, dashes or hyphens (`label_invalid`); punctuation inside one is fine (`thm:main`). Prefixes such as `sec:`, `thm:`, `eq:`, `item:` are a habit, not a kind.
- `@label` in the text refers to a label, and ends at a space, at a character a label cannot hold, or before the punctuation a label cannot end with: `@thm:a,` refers to `thm:a`, and `@eq:a–@eq:b` to two. `{@label}` in the text is a reference with clear ends (`by{@thm:a}we`). `@-label` shows the number alone (`reference_number_missing` for a target without one); `[text](@label)` shows the text. Square brackets are text: `[@serre, ch. 3]`, `[@a; @b]`.
- A reference reads: an environment's name and number ("Theorem 1.2"); "Section 1"; an equation's "(1.1)"; a list item's numbers ("2.1") or labels ("(a)", "2 (a)", "(2) i"); the text of a heading or an unnumbered environment; a citation. References may point further down the page.
- References are read in the text, footnotes included: not in formulas, code, comments, link addresses, tags' parameters or link definitions. `\@label` and `\{@label}` are literal.
- An environment's, an equation's and a list item's label is its anchor (its id); a heading's id is its text's, the label only finds it; a bibliography entry's is `bib-<key>`. A heading or environment title may hold references (as text in the contents); titles referring to each other in a cycle are an error.
- `[[page@label]]` is kept for references to other pages, and is an error for now (`cross_page_reference`).

### Wiki links

- With `wikiLinks` on, `[[Target]]` and `[[Target|text]]` link to articles; `resolveWikiLink` says where. The target may hold inline formulas.
- The target's matching key (`resolveWikiLink`'s `target`): formulas as linear text (`$H^1(X;\mathbb Z)$` → `H^1(X;Z)`, NFKC, without the spaces in them), full-width and half-width parentheses alike, `--` as `–` and `...` as `…` (as the link's text shows them), any single quotation mark as `’` and double ones straight, spaces as Chinese typography leaves them (`[[维数(向量空间)]]` and `[[维数 (向量空间)]]` are the same), NFC. Case matters. The same rules suit a site's article names and aliases, so that a link finds them however they are written.
- In a table, the `|` of a wiki link or a formula does not split the cell (`[[a|b]]`, `$|x|$`); `\|` works too.

### Bibliography fields

With `bibliography` on, a ```` ```bibliography ```` block is YAML: key → entry. The format is bananamark's own; its fields are named as BibLaTeX's. Every entry has `type`, and `title` or `translatedtitle`; `online` entries also `site` and `url`. Unknown fields are errors.

| `type` | For | Usual fields |
| --- | --- | --- |
| `book` | Books | `publisher`, `location`, `edition`, `series`, `volume` |
| `article` | Journal articles | `journaltitle`, `volume`, `number`, `pages` |
| `incollection` | Articles in books or collections | `booktitle`, `editor`, `publisher`, `pages`, `series`, `volume` |
| `thesis` | Theses | `institution`, `degree` (`phd`, `master` or any text), `location` |
| `preprint` | Preprints | `arxiv`, `url` |
| `online` | Web pages, online encyclopedias | `site`, `url`, `urldate` |

- Names: `author`, `editor`, `translator`, one or a list; `"Serre, Jean-Pierre"` or `Jean-Pierre Serre` (the last word the family name), or `{ family, given }`, `{ literal }` (kept whole; so are names in Han characters). A name object may have `page` (with wiki links on): the wiki link's target for the author's article, or `false` for no link.
- Text: `title` (the original title, or a transliteration), `translatedtitle` (a translation, shown in brackets), `shorttitle`, `edition`, `publisher`, `location`, `series`, `volume`, `number`, `pages`, `journaltitle`, `booktitle`, `institution`, `degree`, `site`; only inline formulas in them are rendered.
- `year`: four digits (a, b for the same author and year are added); `urldate`: `'YYYY-MM-DD'`; `language`: the work's language code, such as `ru`. An entry's `lang` in the HTML is its language: from its title's script, or `language`.
- Identifiers, linked: `doi`, `arxiv`, `zbmath`; and `url`.
- Inline Markdown (wiki links, references, formulas): `howpublished`, `note`.
- `label`: a label shown in bold before the entry.
- `versions`: other versions of the same work, each with its own fields and `relation` (`translation`, `original`, `edition`, `reprint`, `collected`); a version with `key` can be cited on its own. Versions take the entry's authors, title and so on.

- Identifiers: `doi`, `arxiv` (new or old, such as `q-alg/9706008`) and `zbmath` are the identifiers alone (quote numbers to keep leading zeros); `url` a complete http(s) address.

### Bibliographies as shown

- A ```` ```bibliography ```` block shows its entries where it stands, without a heading of its own; it stands outside environments. A page may have several, with text between them; entries keep the order they are written in.
- A citation shows one author's family name (a Chinese name whole), two authors' joined by an en dash (`Bott–Tu`; `、` with Chinese names), or the first and "et al." (`等`), then the year: `Serre 1955`, `Sklyanin et al., 1979`. Without authors, the editors; without them, `shorttitle`, `title` or `translatedtitle`. No year: "n.d."; a preprint has "preprint" in the year's place (`Winges preprint`), even with a year; an `online` entry is cited by its `site` (`nLab`), its year not used, and its authors only listed.
- Citations that would be the same on a page (in a book, across it) get a, b… in the order the entries are written, cited or not, versions with keys included: `Smith 2020a`, `nLab a`, `Sella preprint a`; after z, aa, ab. `label: "EGA I"` is the citation instead, and is shown in bold before the entry (entries sharing a label get a, b too).
- The list: no bullets, each entry's lines after the first indented by 2em. The authors in full, separated by `;` (`、` when one is Chinese; editors and translators the same), family names in bold (a Chinese or whole name entirely), then the year in brackets. Titles of books, journals and collections in italics in Western entries, in 《》 in Chinese ones. Editors are "Edited by …" or "… (eds.)"; an article in a collection "In *Collection*". Identifiers and links at the end, separated by `·`: doi, arXiv, zbMATH, the url (its text "pdf" for a PDF file, otherwise its host without `www.`) and the date it was accessed.
- An entry's language, its `lang`, comes from the title shown: with Han characters, Chinese (Chinese punctuation, 《》); Cyrillic or Greek, `language` or else Russian or Greek; Latin letters, `language` (when written in Latin letters) or else English. A `language` other than the title's is shown, as "(in Russian)". So a translated title goes in `translatedtitle`, not in `title` with `language: ru`. The words bananamark writes in an entry ("In", "Edited by", versions' relations) are in the page's language, and take the page's typography, as Chinese data does; Western data is left alone.
- `versions` are shown under their entry, each starting with its relation in bold: `translation` ("English translation" from its `language`, else "Translation"), `original` ("Russian original", else "Original"), `edition` ("2nd ed." from its `edition`, else "Other edition"), `reprint` ("Reprint"), `collected` ("Collected in": its type defaults to `incollection`, with its `booktitle`). A version takes its entry's `type`, authors, titles, `shorttitle` and `site`; its `editor` and `translator` but when collected, a translation or the original; its `language` but when a translation or the original. What it takes is not shown again. A version with a `key` can be cited and has its own anchor (and only then a `label`); a version has no versions.
- `note` and `howpublished` are inline Markdown (wiki links, references, also to the block's entries, emphasis, formulas), their errors pointing at the field; the other fields are text, only their inline formulas rendered.

## API

**`bananamark`**

- `defineDialect(options)`: a site's dialect (see [The dialect](#the-dialect)).
- `renderDocument(source, options)`, `renderDocumentAsync(source, options)`: a page, as [above](#the-result).
- `createProcessor(options)`: `{ render(source, page), renderAsync(source, page), book(options), close() }`.
- `transformDocument(source, options)`, `transformFragment(text, options)`, `createBook(options)`: the dialect's layer; `createRenderer(options)`: `{ renderDocument(document, page), renderFragment(document, page, { block }) }`; `inspectDocument(document)` (see [Two layers](#two-layers-and-fragments)).
- `BananamarkError` (see [Errors](#errors)).
- `defaultEnvironments`, `defaultTags`, `alignTag`, `spoilerTag`, `defaultTagRules`, `alignTagRule`, `spoilerTagRule`, `createTagRegistry(tags)`.
- `highlightCode(code, language)`, `defaultLanguages`.
- `parseNumbering(value, base, file)`.
- `renderKaTeX(tex, display, katex)`: a formula's KaTeX HTML (and MathML) as bananamark renders it, with KaTeX's options `katex` (`strict` defaults to `'ignore'`); without the `span.bm-math-rendered` the renderer puts around it.
- `pathEscape(text)`, `queryEscape(text)`: percent-encoding as in anchors (`#…`) and query strings (spaces as `+`).
- `messages`, `locales`, `defaultLocale`.

**`bananamark/typography`**: `typesetHTML(html, options)`, `typesetTree(tree, options)` (see [Typography](#typography)).

**`bananamark/highlight`**: `highlightCode`, `defaultLanguages`, `codeLanguage(name, languages)` (the language for a name).

**`bananamark/languages`**: `languages`, name → language, for `codeLanguages` (see [Code highlighting](#code-highlighting)).

**`bananamark/grammar`**: the dialect's CodeMirror language: `dialectSupport({ codeLanguages, wikiLinks })`, `defaultDialect` (`dialectSupport()`), `dialectParser`, `highlightClasses` (the `bm-hl-…` classes for lezer's tags), `highlightTags` (the dialect's own highlighting tags), `yamlLanguage`, `tex`, `texDocument`, `isLanguage(value)` (whether it is a CodeMirror `Language`; one of another copy of `@codemirror/language` throws).

**`bananamark/rules`**: the dialect's rules as data, without the rest of bananamark (for editors): `defaultEnvironments`, `environmentName(environment, locale)`, `defaultTagRules`, `langTagRule`, `alignTagRule`, `spoilerTagRule`.

**`bananamark/messages`**: `messages`, `locales`, `defaultLocale`, `withLocale(locale, lang, action, messages)` (runs `action` with errors in `locale` and the page's text in `lang`'s messages), `t(key, values)` (a message of the page's text), `problem(key, values)` (an error's message, with its code), `languageName(code)` (a language's name in the messages' language, from `Intl.DisplayNames`), `BananamarkError`. `bananamark/messages/en` and `bananamark/messages/zh-cn` are the tables.

**`bananamark/bibliography`**: `fullName(name)` ("Serre, Jean-Pierre"; 丘成桐), `naturalName(name)` ("Jean-Pierre Serre"; 丘成桐), `isChineseName(name)`: an author's structured name written out, for `resolvePersonLink`.

**`bananamark/scan`**: where the dialect's inline pieces end, as the renderer reads them (for editors and other tools): `readMath(text, start)` (each call on its own) and `mathReader()` (one for a scan from left to right, linear on text full of unclosed formulas), `readTag(text, start)`, `escaped(text, position)`, `readLabelledMarker(text, start)`, `labelledMarkerSource`, `markerPattern`, `continuation(line)`, `labelledWidth(marker)`, `fenceMarker(line)` and `closesFence(marker, open)` (fenced code's fences).

**`bananamark/style.css`**: the [stylesheet](#the-stylesheet). **`bananamark/katex.css`**: KaTeX's stylesheet (`@import`s the `katex` package bananamark depends on), for bundlers.

**`bananamark/internal/*`**: the package's own modules (the dialect's layer piece by piece). They are not part of the interface and may change at any time.

## Contributing

Tests, the spec's examples and how to update them: see [CONTRIBUTING.md](https://github.com/banana-space/banana/blob/main/packages/CONTRIBUTING.md).
