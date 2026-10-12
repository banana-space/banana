// The KaTeX commands and environments the online editor offers in formulas (data/katex.json; the editor's page
// passes them on with the entry names, see layouts/_default/editor.html). Run after upgrading KaTeX:
//
//   node scripts/editor/katex-commands.mjs
//
// The names come from KaTeX's own definitions; a command is kept when KaTeX renders it in math with 0 to 3
// arguments, the first count that works being its number of arguments. A symbol records the character it
// renders as (\alpha: α). Commands that define macros, or that the site's KaTeX does not trust (links, HTML),
// are left out; so are environments a formula cannot hold on this site (align, equation and the like: they are
// written inside \[ \] as aligned and so on). tikzcd and tikzpicture are not KaTeX's: a formula that holds one
// is compiled by TeX instead (docs/tikz.md).
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import katex from 'katex';
import { mathDisplayText } from '../shared/math-name.mjs';

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

/** The commands ([name, arguments, glyph?]) and environments ([name, arguments]), as in data/katex.json. */
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
  writeFileSync(new URL('../../data/katex.json', import.meta.url), JSON.stringify(result) + '\n');
  console.log(`data/katex.json: ${result.commands.length} commands, ${result.environments.length} environments`);
}
