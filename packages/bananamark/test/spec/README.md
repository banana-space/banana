# Conformance examples

These files list the dialect feature by feature, as examples: a piece of the dialect and the HTML it renders to. They are bananamark's tests, and the dialect's specification: another implementation can check itself against them. The examples' content is mostly Chinese, as the dialect's first site is; every feature works the same in any language.

## Format

Examples are written as in the [CommonMark spec](https://spec.commonmark.org/): between fences of 32 backticks with the info string `example`, the input, a line holding only `.`, then the output. `→` in the input stands for a tab. After `example`, options may follow as JSON, such as ```` example {"lang": "en"} ````: the page's (`lang`, `typography`, `numbering`, `key`, `title`; see the package's README), and the dialect's switches `wikiLinks`, `bibliography` and `tikz`, each `false` to turn it off for that example (the site below has them on).

- The output is the body's HTML, compared byte for byte. Text and attribute values escape only `&`, `<`, `>` and `"` (as `&quot;`; in highlighted code, quotation marks stay as they are); anchors and addresses are percent-encoded in upper-case hex (`#%E5%AE%9A`); curly quotation marks and dashes are written as characters. An implementation that does not mind these details can parse and serialize both sides the same way (with parse5, say) before comparing.
- Inside formulas, KaTeX's own markup is written `…`: only a formula's outer element is compared (its TeX is in `data-tex`).
- An output starting with `!error ` means the input is an error: after it come the error's code and its parameters as JSON (`!error label_missing {"name":"nowhere"}`), as bananamark's `error.code` and `error.params`. The codes are the keys of bananamark's messages (`bananamark/messages`); their words are not compared.

## The examples' site

Every example is rendered with these settings (`test/spec.mjs`); the other options and hooks are the defaults (see the package's README), except `lang`, which is `zh-cn` (the examples are a Chinese site's pages), and `typography`, which is `{}`:

```js
// The site's dialect: everything on (an example may turn wikiLinks, bibliography or tikz off), the languages of
// bananamark/languages for code blocks, the data block notes and the tag <note> of its own.
const dialect = defineDialect({
  tikz: true,
  wikiLinks: true,
  bibliography: true,
  codeLanguages: languages,   // import { languages } from 'bananamark/languages'
  dataBlocks: { notes: { read: source => source, outsideEnvironments: true } },
  tags: { align: alignTag, spoiler: spoilerTag, note: { paired: true, render: ({ inner, fragment }) => `<div class="note">${fragment(inner.trim())}</div>\n` } },
});
const articles = new Map([['群', ['/wiki/群/', false]], ['集合', ['/wiki/集合/', false]], ['集', ['/wiki/集合/', true]], ['Jean-Pierre Serre', ['/wiki/Jean-Pierre_Serre/', false]]]);
createProcessor({
  dialect,
  lang: 'zh-cn',
  // An article's address (an alias's with ?from=); a missing article's, /missing/ with the link's text (and the
  // target as written when it has formulas).
  resolveWikiLink: (target, { text, written }) => {
    if (!articles.has(target)) return { url: `/missing/?title=${queryEscape(text)}${written ? `&source=${queryEscape(written)}` : ''}`, missing: true };
    const [url, alias] = articles.get(target);
    return { url: encodeURI(url) + (alias ? `?from=${queryEscape(target)}` : '') };
  },
  resolvePersonLink: name => name.family === 'Serre' && /^J/.test(name.given ?? '') ? { target: 'Jean-Pierre Serre' } : undefined,
});
```

`queryEscape` is the main entry's encoding of query parameters (spaces as `+`; everything but letters, digits and `-_.~` encoded).

## Running and updating

```sh
node test/spec.mjs            # check every example
node test/spec.mjs --update   # write each example's output as this implementation renders it
```

Write a new example's input with its output empty, fill it in with `--update`, and read it before committing it; the same after a change meant to alter the output.
