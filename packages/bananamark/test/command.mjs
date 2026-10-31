import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The command: where the HTML goes, the page around the body, the front matter, the dialect it reads with, and how it
// fails. In a directory inside the package, for a dialect's module to find bananamark.
const command = fileURLToPath(new URL('../bin/bananamark.mjs', import.meta.url));
const directory = mkdtempSync(fileURLToPath(new URL('./.command-', import.meta.url)));
const run = (args, input) => {
  const { status, stdout, stderr } = spawnSync(process.execPath, [command, ...args], { cwd: directory, encoding: 'utf8', input });
  return { status, stdout, stderr };
};
const write = (name, text) => writeFileSync(join(directory, name), text);
const read = name => readFileSync(join(directory, name), 'utf8');

try {
  // A page that needs nothing else, written beside the file.
  write('groups.md', '# Groups\n\nBy @thm:a, $x^2$.\n\n::: theorem {@thm:a}\nText.\n:::\n\n```python\nprint(1)\n```\n');
  assert.deepEqual(run(['groups.md']), { status: 0, stdout: '', stderr: '' });
  const page = read('groups.html');
  assert.match(page, /^<!doctype html>\n<html lang="en">/);
  assert.match(page, /<title>Groups<\/title>/);
  assert.match(page, /<a href="#thm:a">Theorem 1<\/a>/);
  assert.match(page, /\.bm-env/, 'bananamark\'s stylesheet');
  assert.match(page, /url\(data:font\/woff2;base64,/, 'KaTeX\'s fonts');
  assert.doesNotMatch(page, /url\(fonts\/|format\("(woff|truetype)"\)/);
  assert.match(page, /<span class="bm-hl-variable">print<\/span>/, 'a language outside the built-in ones');

  // Where it goes.
  write('notes', 'x');
  assert.equal(run(['notes']).status, 0);
  assert.ok(existsSync(join(directory, 'notes.html')));
  assert.equal(run(['groups.md', '-o', 'elsewhere.html']).status, 0);
  assert.equal(read('elsewhere.html'), page);
  assert.equal(run(['groups.md', '-o', '-']).stdout, page);
  rmSync(join(directory, 'groups.html'));
  assert.equal(run(['groups.md', '-o', '-']).stderr, '');
  assert.ok(!existsSync(join(directory, 'groups.html')));

  // Standard input goes to standard output; the title falls back on the first heading, then a word.
  const fromInput = run(['-'], '# Sets $x$\n');
  assert.equal(fromInput.status, 0);
  assert.match(fromInput.stdout, /<title>Sets x<\/title>/);
  assert.match(run(['-'], 'x').stdout, /<title>Document<\/title>/);
  assert.match(read('notes.html'), /<title>notes<\/title>/);

  // --fragment: the body alone.
  assert.equal(run(['-', '--fragment'], 'x').stdout, '<p>x</p>\n');

  // Stylesheets: the caller's after the others, in order, a file embedded and a URL linked.
  write('mine.css', ':root { --bm-link: teal; }\n');
  write('closing.css', 'a::after { content: "</style>"; }\n');
  const styled = run(['-', '--css', 'mine.css', '--css', 'https://example.org/a.css?b=1&c=2', '--css', 'closing.css'], 'x');
  assert.equal(styled.status, 0, styled.stderr);
  const places = ['KaTeX_AMS', '.bm-env', 'max-width: 46rem', '--bm-link: teal', 'href="https://example.org/a.css?b=1&amp;c=2"', 'a::after'].map(text => styled.stdout.indexOf(text));
  assert.ok(places.every((place, index) => place > (places[index - 1] ?? -1)), `the order: ${places}`);
  assert.equal(styled.stdout.match(/<\/style>/g).length, 5, 'a stylesheet cannot close its element');
  assert.deepEqual(run(['-', '--css', 'missing.css'], 'x'), { status: 1, stdout: '', stderr: 'bananamark: cannot read missing.css: no such file\n' });

  // --no-default-style: only what formulas need stays, and the caller's.
  const bare = run(['-', '--no-default-style', '--css', 'mine.css'], '$x$').stdout;
  assert.match(bare, /KaTeX_AMS/);
  assert.match(bare, /\.bm-math-end \{ display: inline-block/);
  assert.match(bare, /--bm-link: teal/);
  assert.doesNotMatch(bare, /\.bm-env|max-width: 46rem/);
  assert.match(run(['-', '--no-default-style'], 'x').stdout, /<\/style>\n<\/head>/);

  // They are for a whole page.
  assert.equal(run(['-', '--fragment', '--css', 'mine.css'], 'x').status, 2);
  assert.equal(run(['-', '--fragment', '--no-default-style'], 'x').status, 2);

  // Front matter: the title with its formulas, shown and referred to; the language; numbering; typography. It is
  // removed, and errors count its lines.
  write('zh.md', '---\ntitle: 关于 $x$\nlang: zh-cn\nauthor: not ours, and no error\nnumbering: { theorems: { depth: 0 } }\ntypography: { convertFullStop: true }\n---\n\n{@self}\n\n## 节\n\n见 @self。\n\n句子。\n\n::: theorem\n正文\n:::\n');
  const zh = run(['zh.md', '-o', '-']).stdout;
  assert.match(zh, /<html lang="zh-cn">/);
  assert.match(zh, /<title>关于 x<\/title>/);
  assert.match(zh, /<h1 id="page-title">关于 <span class="bm-math-rendered"/);
  assert.match(zh, /见<a href="#page-title">关于 /);
  assert.match(zh, /句子．<\/p>/);
  assert.match(zh, /定理 1<\/p>/);
  assert.doesNotMatch(zh, /author:/);
  assert.match(run(['zh.md', '-o', '-', '--lang', 'en']).stdout, /<html lang="en">[\s\S]*Theorem 1<\/p>/);
  // Not front matter: empty is none, and a first block that holds no fields is the body's.
  write('empty.md', '---\n---\nx\n');
  assert.equal(run(['empty.md', '-o', '-', '--fragment']).stdout, '<p>x</p>\n');
  write('rule.md', '---\ntext\n---\nx\n');
  assert.match(run(['rule.md', '-o', '-', '--fragment']).stdout, /<hr>\n<h2 id="text">/);

  // Errors: the dialect's name their line of the file, with no stack and no output.
  write('bad.md', '---\ntitle: x\n---\n\n::: nope\n:::\n');
  assert.deepEqual(run(['bad.md']), { status: 1, stdout: '', stderr: 'bad.md:5: unknown theorem environment: nope\n' });
  assert.ok(!existsSync(join(directory, 'bad.html')));
  assert.equal(run(['bad.md', '--locale', 'zh-cn']).stderr, 'bad.md:5: 未知定理环境：nope\n');
  write('yaml.md', '---\na: 1\nb: [\n---\n');
  const yaml = run(['yaml.md']);
  assert.equal(yaml.status, 1);
  assert.match(yaml.stderr, /^bananamark: yaml\.md:3: /);
  assert.deepEqual(run(['missing.md']), { status: 1, stdout: '', stderr: 'bananamark: cannot read missing.md: no such file\n' });

  // How it is called.
  assert.equal(run([]).status, 2);
  assert.equal(run(['a.md', 'b.md']).status, 2);
  assert.equal(run(['--nope', 'a.md']).status, 2);
  assert.match(run(['--help']).stdout, /^Usage: bananamark /);
  assert.equal(run(['--version']).stdout.trim(), JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')).version);

  // The dialect. Bibliographies are on and wiki links off without one.
  const source = '[[A]] $\\RR$\n\n```bibliography\nb:\n  type: book\n  title: T\n```\n\n```python\nprint(1)\n```\n';
  const plain = run(['-', '--fragment'], source.replace('$\\RR$', ''));
  assert.match(plain.stdout, /<p>\[\[A\]\]/);
  assert.match(plain.stdout, /bm-bibliography/);
  assert.equal(run(['-', '--fragment'], source).status, 1, 'no macros');
  // Settings alone, over those: no import, so they work wherever the command is installed.
  write('settings.mjs', 'export default { wikiLinks: true, katex: { macros: { "\\\\RR": "\\\\mathbb{R}" } } };\n');
  const set = run(['-', '--fragment', '--dialect', 'settings.mjs'], source).stdout;
  assert.match(set, /bm-wiki-link/);
  assert.match(set, /bm-bibliography/);
  assert.match(set, /bm-hl-/);
  // What defineDialect returned, as it is.
  write('defined.mjs', 'import { defineDialect } from "bananamark";\nexport const dialect = defineDialect({ wikiLinks: true, katex: { macros: { "\\\\RR": "\\\\mathbb{R}" } } });\n');
  const defined = run(['-', '--fragment', '--dialect', 'defined.mjs'], source).stdout;
  assert.match(defined, /bm-wiki-link/);
  assert.doesNotMatch(defined, /bm-bibliography/);
  write('none.mjs', 'export const other = 1;\n');
  assert.equal(run(['-', '--dialect', 'none.mjs'], 'x').status, 2);

  // Runnable as npm installs it.
  assert.ok(statSync(command).mode & 0o100);
  assert.equal(JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')).bin.bananamark, 'bin/bananamark.mjs');
} finally {
  rmSync(directory, { recursive: true, force: true });
}

console.log('command: ok');
