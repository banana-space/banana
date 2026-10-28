import assert from 'node:assert/strict';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { alignTag, createProcessor, defineDialect, queryEscape, spoilerTag } from 'bananamark';
import { languages } from 'bananamark/languages';

/**
 * The conformance examples (spec/*.md): the dialect, feature by feature, as input and the HTML it renders to, for
 * this package and for any other implementation of the dialect.
 *
 * An example is written as in the CommonMark spec, between fences of 32 backticks with the info string "example"
 * (and after it, optionally, the page's options as JSON: lang, typography, numbering, key, title, and the dialect's
 * switches wikiLinks, bibliography, tikz, to turn one off): the input, a line
 * holding only ".", then the expected output. The output is the page's HTML, with KaTeX's own
 * markup inside each formula written "…" (the formula's TeX is in data-tex); or, for an input that is an error,
 * "!error ", the error's code and its parameters as JSON.
 *
 * The examples run as one Chinese site (lang zh-cn) with these articles: 群, 集合 (with the alias 集), Jean-Pierre
 * Serre; nothing else exists. There is one data block, notes (read as its text, outside environments), and one tag of
 * the site's, <note>. Everything else is the processor's default.
 *
 * node test/spec.mjs --update writes each example's output as this implementation renders it: for a new example
 * (whose output is empty), or after a change meant to alter the output, to be read before it is committed.
 */

const directory = new URL('./spec/', import.meta.url);
const update = process.argv.includes('--update');
const fence = '`'.repeat(32);

const articles = new Map([['群', ['/wiki/群/', false]], ['集合', ['/wiki/集合/', false]], ['集', ['/wiki/集合/', true]], ['Jean-Pierre Serre', ['/wiki/Jean-Pierre_Serre/', false]]]);
// The site's dialect: everything on (an example may turn wikiLinks, bibliography or tikz off), the languages of
// bananamark/languages for code blocks, the data block notes and the tag <note> of its own.
const siteDialect = (switches = {}) => defineDialect({
  tikz: true,
  wikiLinks: true,
  bibliography: true,
  codeLanguages: languages,
  ...switches,
  dataBlocks: { notes: { read: source => source, outsideEnvironments: true } },
  tags: { align: alignTag, spoiler: spoilerTag, note: { paired: true, render: ({ inner, fragment }) => `<div class="note">${fragment(inner.trim())}</div>\n` } },
});
const site = dialect => createProcessor({
  dialect,
  lang: 'zh-cn',
  // An article's address (an alias's with ?from=); a missing one's, /missing/ with the link's text (and the target as
  // written when it has formulas).
  resolveWikiLink: (target, { text, written }) => {
    if (!articles.has(target)) return { url: `/missing/?title=${queryEscape(text)}${written ? `&source=${queryEscape(written)}` : ''}`, missing: true };
    const [url, alias] = articles.get(target);
    return { url: encodeURI(url) + (alias ? `?from=${queryEscape(target)}` : '') };
  },
  resolvePersonLink: name => name.family === 'Serre' && /^J/.test(name.given ?? '') ? { target: 'Jean-Pierre Serre' } : undefined,
});
export const processor = site(siteDialect());
const processors = new Map([['{}', processor]]);

/** KaTeX's markup inside formulas written "…": balanced <span>…</span> from the katex span. */
export function elideKaTeX(html) {
  let result = '', cursor = 0;
  const open = /<span class="katex(?:-display)?">/g;
  let match;
  while ((match = open.exec(html))) {
    let depth = 0, i = match.index;
    const tags = /<span\b[^>]*>|<\/span>/g;
    tags.lastIndex = i;
    let tag;
    while ((tag = tags.exec(html))) {
      depth += tag[0] === '</span>' ? -1 : 1;
      if (depth === 0) break;
    }
    result += html.slice(cursor, match.index) + '…';
    cursor = tags.lastIndex;
    open.lastIndex = cursor;
  }
  return result + html.slice(cursor);
}

export function run(input, { wikiLinks, bibliography, tikz, ...options } = {}) {
  const switches = JSON.stringify(Object.fromEntries(Object.entries({ wikiLinks, bibliography, tikz }).filter(([, value]) => value !== undefined)));
  if (!processors.has(switches)) processors.set(switches, site(siteDialect(JSON.parse(switches))));
  try { return elideKaTeX(processors.get(switches).render(input, { ...options, file: 'example.md' }).html); }
  catch (error) { return `!error ${error.code} ${JSON.stringify(error.params)}`; }
}

const pattern = new RegExp(`^${fence} example( \\{.*\\})?\\n([\\s\\S]*?)^\\.\\n([\\s\\S]*?)^${fence}$`, 'gm');
let count = 0, failures = 0;
for (const name of (await readdir(directory)).filter(file => file.endsWith('.md')).sort()) {
  const file = new URL(name, directory);
  const text = await readFile(file, 'utf8');
  const next = text.replace(pattern, (whole, options = '', input, expected) => {
    count++;
    // In the files, → stands for a tab (as in the CommonMark spec).
    const actual = run(input.replace(/→/g, '\t'), options ? JSON.parse(options) : {});
    const line = text.slice(0, text.indexOf(whole)).split('\n').length;
    if (update) {
      return `${fence} example${options}\n${input}.\n${actual}${actual.endsWith('\n') ? '' : '\n'}${fence}`;
    }
    const wanted = expected.startsWith('!error ') ? expected.trimEnd() : expected;
    const ok = wanted.startsWith('!error ') ? actual.startsWith(wanted) : actual === wanted || actual + '\n' === wanted;
    if (!ok) {
      failures++;
      console.error(`spec/${name}:${line}:\n--- input\n${input}--- expected\n${wanted}--- actual\n${actual}\n`);
    }
    return whole;
  });
  if (update && next !== text) await writeFile(file, next);
}
assert.ok(count > 0, 'no examples');
if (failures) {
  console.error(`spec: ${failures} of ${count} examples failed`);
  process.exit(1);
}
console.log(`spec: ${count} examples passed${update ? ' (updated)' : ''}`);
