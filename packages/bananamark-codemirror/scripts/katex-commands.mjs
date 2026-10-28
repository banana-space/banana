// The KaTeX commands and environments completion offers in formulas (src/katex-commands.json, completion's
// default). Run after upgrading KaTeX (the package's tests check that the file is current):
//
//   npm run katex-commands --workspace bananamark-codemirror
//
// The names come from KaTeX's own definitions; a command is kept when KaTeX renders it in math with 0 to 3
// arguments, the first count that works being its number of arguments. A symbol records the character it
// renders as (\alpha: α). Commands that define macros, or that KaTeX does not trust by default (links, HTML), are
// left out; so are environments a formula of the dialect cannot hold (align, equation and the like: they are written
// inside \[ \] as aligned and so on). tikzcd and tikzpicture are not KaTeX's: a formula that holds one is compiled
// by TeX instead (bananamark-tikz).
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import katex from 'katex';
import { mathDisplayText } from 'bananamark/internal/math-name.mjs';

const require = createRequire(import.meta.url);
const excluded = new Set([
  '\\def', '\\gdef', '\\edef', '\\xdef', '\\let', '\\futurelet', '\\global', '\\newcommand', '\\renewcommand',
  '\\providecommand', '\\href', '\\url', '\\includegraphics', '\\htmlClass', '\\htmlId', '\\htmlStyle', '\\htmlData',
  '\\char', '\\TextOrMath', '\\relax', '\\begin', '\\end', '\\verb', '\\newline', '\\nonumber', '\\notag',
  '\\tag', '\\label', '\\ref', '\\eqref', '\\begingroup', '\\endgroup', '\\expandafter', '\\noexpand',
  '\\show', '\\message', '\\errmessage',
]);
const environments = [
  'matrix', 'pmatrix', 'bmatrix', 'Bmatrix', 'vmatrix', 'Vmatrix', 'smallmatrix', 'cases', 'rcases', 'dcases',
  'aligned', 'alignedat', 'gathered', 'split', 'array', 'subarray', 'tikzcd', 'tikzpicture',
];
// Environments whose \begin takes an argument (column alignments, a count).
const environmentArguments = new Set(['array', 'subarray', 'alignedat']);

/** The commands ([name, arguments, glyph?]) and environments ([name, arguments]), as in src/katex-commands.json. */
export function katexCommands() {
  const source = readFileSync(require.resolve('katex/dist/katex.mjs'), 'utf8');
  const names = new Set();
  for (const [, name] of source.matchAll(/"\\\\([a-zA-Z]+)"/g)) names.add(`\\${name}`);
  const commands = [];
  // KaTeX reports what it cannot draw on the console; those reports say nothing here.
  const { log, warn } = console;
  console.log = console.warn = () => {};
  try {
    for (const name of [...names].sort()) {
      if (excluded.has(name)) continue;
      const arity = [0, 1, 2, 3].find(count => {
        try { katex.renderToString(name + '{x}'.repeat(count), { throwOnError: true, strict: 'ignore' }); return true; } catch { return false; }
      });
      if (arity === undefined) continue;
      let glyph = '';
      if (arity === 0) {
        try {
          const text = mathDisplayText(name).trim();
          // A character or two, not the name's own letters (\sin reads "sin").
          if (text && [...text].length <= 2 && !/^[a-zA-Z]+$/.test(text)) glyph = text;
        } catch {}
      }
      commands.push(glyph ? [name, arity, glyph] : [name, arity]);
    }
  } finally { Object.assign(console, { log, warn }); }
  return { commands, environments: environments.map(name => [name, environmentArguments.has(name) ? 1 : 0]) };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const result = katexCommands();
  writeFileSync(new URL('../src/katex-commands.json', import.meta.url), JSON.stringify(result) + '\n');
  console.log(`src/katex-commands.json: ${result.commands.length} commands, ${result.environments.length} environments`);
}
