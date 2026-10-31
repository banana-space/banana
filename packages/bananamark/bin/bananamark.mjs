#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { basename, dirname, extname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';
import { parseFragment } from 'parse5';
import { parse as parseYAML } from 'yaml';
import { BananamarkError, createProcessor, createRenderer, defineDialect, transformFragment } from 'bananamark';
import { languages } from 'bananamark/languages';

/**
 * bananamark file.md: a document to a page of HTML that needs nothing else (stylesheets and fonts are in it). This is
 * a caller of the package like any other: what the package leaves to its caller is decided here, namely the front
 * matter, the page around the body and its look.
 */

const usage = `Usage: bananamark <file.md> [options]

Writes file.html beside the file. With - as the file, reads standard input and writes standard output.

Options:
  -o, --output <file>   Where the HTML goes; - for standard output
      --fragment        Only the body's HTML, without a page, stylesheets or fonts
      --lang <code>     The page's language (zh-cn, en…), over the front matter's; default en
      --locale <code>   The language of errors (en or zh-cn); default en
      --dialect <file>  A module whose default export (or export named dialect) is the dialect
      --tikz            Compile TikZ diagrams, with bananamark-tikz
  -h, --help            Show this
  -v, --version         Show the version
`;

// What the package leaves to the page: its look apart from bananamark's own classes.
const pageStyle = `:root { color-scheme: light dark; }
body { max-width: 46rem; margin: 0 auto; padding: 2rem 1rem; font: 1rem/1.7 ui-serif, Georgia, serif; overflow-wrap: break-word; }
img { max-width: 100%; height: auto; }
pre, .katex-display { overflow-x: auto; overflow-y: hidden; }
table { border-collapse: collapse; }
th, td { padding: 0.25em 0.75em; border: 1px solid color-mix(in srgb, currentColor 30%, transparent); }
`;

const packageFile = createRequire(import.meta.url).resolve;
const escape = text => String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const base64 = file => readFileSync(file).toString('base64');

/** An error in how the command was called, as opposed to in the document. */
class UsageError extends Error {}

/** The front matter of a file and the rest of it: { metadata, body, lineOffset }. A first block that holds no fields is the body's. */
function readFrontMatter(text, file) {
  const source = text.replace(/^﻿/, '');
  const match = source.match(/^---[ \t]*\r?\n(?:([\s\S]*?)\r?\n)?---[ \t]*(?:\r?\n|$)/);
  let metadata;
  try {
    metadata = match && parseYAML(match[1] ?? '');
  } catch (error) {
    throw new Error(`${file}:${(error.linePos?.[0].line ?? 0) + 1}: ${error.message.replace(/ at line[\s\S]*/, '')}`);
  }
  if (metadata === null && match?.[1] === undefined) metadata = {};
  if (!match || !metadata || typeof metadata !== 'object' || Array.isArray(metadata)) return { metadata: {}, body: source, lineOffset: 0 };
  return { metadata, body: source.slice(match[0].length), lineOffset: match[0].split('\n').length - 1 };
}

/** The dialect: a module's, or what suits a document with no site: every code language and bibliographies. */
async function readDialect(file) {
  const settings = { bibliography: true, codeLanguages: languages };
  if (!file) return defineDialect(settings);
  const module = await import(pathToFileURL(resolve(file)).href);
  const given = module.dialect ?? module.default;
  if (!given || typeof given !== 'object') throw new UsageError(`${file} exports no dialect (a default export, or an export named dialect)`);
  // From defineDialect, or only its settings, which need no copy of bananamark where the module is.
  if (given.language) return given;
  return defineDialect({ ...settings, ...given, codeLanguages: { ...languages, ...given.codeLanguages } });
}

/** bananamark-tikz, with diagrams' fonts inside the page like the others. */
async function readTikz() {
  let module;
  try {
    module = await import('bananamark-tikz');
  } catch (error) {
    if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error;
    throw new UsageError('TikZ diagrams need bananamark-tikz, installed beside bananamark: npm install bananamark-tikz');
  }
  return module.tikz({ fonts: { href: font => `data:font/ttf;base64,${base64(module.fontFile(font))}` } });
}

/** A title's HTML as text, for <title>: formulas as their TeX. */
function plainText(html) {
  const textOf = node => {
    if (node.nodeName === '#text') return node.value;
    const tex = node.attrs?.find(attribute => attribute.name === 'data-tex');
    return tex ? tex.value : (node.childNodes ?? []).map(textOf).join('');
  };
  return textOf(parseFragment(html));
}

/** KaTeX's stylesheet with its fonts inside (woff2 alone: every browser the stylesheet serves has it). */
function katexStyle() {
  const file = packageFile('katex/dist/katex.min.css');
  return readFileSync(file, 'utf8').replace(/url\((fonts\/[^)]+)\)\s*format\("(\w+)"\),?/g, (_, font, format) => {
    return format === 'woff2' ? `url(data:font/woff2;base64,${base64(join(dirname(file), font))}) format("woff2")` : '';
  });
}

function page({ lang, title, heading, body }) {
  const style = readFileSync(new URL('../src/style.css', import.meta.url), 'utf8');
  return `<!doctype html>
<html lang="${escape(lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(title)}</title>
<style>${katexStyle()}</style>
<style>${style}</style>
<style>${pageStyle}</style>
</head>
<body>
<main>
${heading ? `<h1 id="page-title">${heading}</h1>\n` : ''}${body}</main>
</body>
</html>
`;
}

async function main() {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: {
      output: { type: 'string', short: 'o' }, fragment: { type: 'boolean' }, lang: { type: 'string' }, locale: { type: 'string' },
      dialect: { type: 'string' }, tikz: { type: 'boolean' }, help: { type: 'boolean', short: 'h' }, version: { type: 'boolean', short: 'v' },
    },
  });
  if (values.help) return void process.stdout.write(usage);
  if (values.version) return void console.log(JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')).version);
  if (positionals.length !== 1) throw new UsageError(positionals.length ? 'give one file at a time' : 'give a file');

  const [input] = positionals, standardInput = input === '-';
  const file = standardInput ? '<stdin>' : input;
  let text;
  try {
    text = readFileSync(standardInput ? 0 : input, 'utf8');
  } catch (error) {
    throw new Error(`cannot read ${file}: ${error.code === 'ENOENT' ? 'no such file' : error.message}`);
  }
  const { metadata, body, lineOffset } = readFrontMatter(text, file);
  const { locale } = values, lang = values.lang ?? metadata.lang ?? 'en', { typography, numbering } = metadata;
  const title = metadata.title === undefined ? undefined : String(metadata.title);

  const dialect = await readDialect(values.dialect);
  const tikz = values.tikz || dialect.tikz;
  const processor = createProcessor({ dialect, tikz, locale, plugins: tikz ? [await readTikz()] : [] });
  let result;
  try {
    const name = standardInput ? 'page' : basename(input, extname(input));
    result = await processor.renderAsync(body, {
      file, lineOffset, lang, typography, numbering,
      ...(title === undefined ? {} : { key: name, title, pageAnchor: true }),
    });
  } finally {
    await processor.close();
  }

  let html = result.html;
  if (!values.fragment) {
    const heading = title && createRenderer({ dialect, lang, typography }).renderFragment(transformFragment(title, { dialect, lang, locale }), { file, lang });
    const name = heading ?? result.headings[0]?.title;
    html = page({ lang, heading, body: html, title: name ? plainText(name) : standardInput ? 'Document' : basename(input, extname(input)) });
  }
  const output = values.output ?? (standardInput ? '-' : `${input.replace(/\.(md|markdown)$/i, '')}.html`);
  if (output === '-') process.stdout.write(html);
  else writeFileSync(output, html);
}

try {
  await main();
} catch (error) {
  if (error instanceof UsageError || error.code?.startsWith('ERR_PARSE_ARGS')) {
    console.error(`bananamark: ${error.message}\nSee bananamark --help.`);
    process.exitCode = 2;
  } else {
    // The dialect's errors already say where.
    console.error(error instanceof BananamarkError ? error.message : `bananamark: ${error.message}`);
    process.exitCode = 1;
  }
}
