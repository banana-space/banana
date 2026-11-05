import assert from 'node:assert/strict';
import { transformDocument } from 'bananamark/internal/structure.mjs';
import { markSourceLines, formulaRanges } from 'bananamark/internal/source-lines.mjs';
import { siteLanguage } from '../scripts/shared/dialect.mjs';

const bananaParser = siteLanguage.language.parser;
import { frontMatterProblems } from '../scripts/prebuild/front-matter-rules.mjs';
import { parse } from 'yaml';

// Drafts from the online editor reach the preview service, which runs in the API's process: no text may
// make the scanners take more than about linear time. Each pattern, repeated to 30 000 characters (as one line
// and as lines), goes through the build's scanning and transformation (with the editor's KaTeX check) and the
// editor's grammar. Quadratic or exponential scans take seconds to hours here; linear ones milliseconds.
const units = [
  '${', 'a\\(\\{', '\\[{', '[[$x', '[[a', 'a`b', '``a`', '{@', '@a ', '[a](', '![a](', '[a]:', '\\', '<!--', '{{<',
  '**a*', '- ', '> ', ' > ', '> - ', '- > ', '1. > ', '>\t', '\t> ', '- [ ] ', '|a', '| a |\n', '::: theorem\n', ':::\n',
  '$$\n', '\\[\n', '```\n', '~~~\n', '[^1]: ', '[^', '<see>', '</see>', '{@a}', '<x>', '<a b="', '<a b=c ', '<a\n', '<person name="x" ', '<lang ', '&#', '\\begin{', '%', '#', '## a\n',
  '=\n', 'a\n=\n', '$a\n', '\\(', '[[a|', '[[a\\|', '{{% ', '<a href="', '<pre>', '*', '_a', '~~', '---\n',
];
const size = 30000, limit = 2000;
const timed = (name, run) => {
  const start = performance.now();
  try { run(); } catch {}
  const ms = performance.now() - start;
  assert.ok(ms < limit, `${name}: ${Math.round(ms)} ms`);
};
for (const unit of units) {
  for (const body of [unit.repeat(Math.ceil(size / unit.length)).slice(0, size), `${unit}\n`.repeat(Math.ceil(size / (unit.length + 1))).slice(0, size)]) {
    const name = JSON.stringify(unit);
    timed(`${name} scan`, () => formulaRanges(body));
    timed(`${name} marks`, () => markSourceLines(body));
    timed(`${name} transform`, () => transformDocument(body, { file: 'f.md', checkMath: true }));
    timed(`${name} grammar`, () => bananaParser.parse(body));
  }
}
// A YAML "billion laughs" front matter is refused quickly (aliases are limited).
const bomb = '---\na: &a ["x","x","x","x","x","x","x","x","x"]\nb: &b [*a,*a,*a,*a,*a,*a,*a,*a,*a]\nc: &c [*b,*b,*b,*b,*b,*b,*b,*b,*b]\nd: &d [*c,*c,*c,*c,*c,*c,*c,*c,*c]\ne: &e [*d,*d,*d,*d,*d,*d,*d,*d,*d]\nf: [*e,*e,*e,*e,*e,*e,*e,*e,*e]\ntitle: x\n---\n';
timed('YAML aliases', () => { frontMatterProblems(bomb); parse(bomb.split('---\n')[1]); });
