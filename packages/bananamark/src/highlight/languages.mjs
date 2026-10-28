/**
 * Languages for code blocks beyond the dialect's own (bananamark/languages): CodeMirror's language packages (lezer
 * grammars) and its legacy modes, by the names code fences use (in lower case). Give them to a renderer or a dialect:
 * defineDialect({ codeLanguages: languages }) or createProcessor({ codeLanguages: { ...languages, lean } }). About
 * 35 languages: only what imports this module loads them.
 */
import { javascriptLanguage, jsxLanguage, tsxLanguage, typescriptLanguage } from '@codemirror/lang-javascript';
import { pythonLanguage } from '@codemirror/lang-python';
import { cppLanguage } from '@codemirror/lang-cpp';
import { rustLanguage } from '@codemirror/lang-rust';
import { javaLanguage } from '@codemirror/lang-java';
import { jsonLanguage } from '@codemirror/lang-json';
import { htmlLanguage } from '@codemirror/lang-html';
import { cssLanguage } from '@codemirror/lang-css';
import { shell } from '@codemirror/legacy-modes/mode/shell';
import { haskell } from '@codemirror/legacy-modes/mode/haskell';
import { julia } from '@codemirror/legacy-modes/mode/julia';
import { mathematica } from '@codemirror/legacy-modes/mode/mathematica';
import { octave } from '@codemirror/legacy-modes/mode/octave';
import { r } from '@codemirror/legacy-modes/mode/r';
import { lua } from '@codemirror/legacy-modes/mode/lua';
import { ruby } from '@codemirror/legacy-modes/mode/ruby';
import { go } from '@codemirror/legacy-modes/mode/go';
import { swift } from '@codemirror/legacy-modes/mode/swift';
import { scheme } from '@codemirror/legacy-modes/mode/scheme';
import { commonLisp } from '@codemirror/legacy-modes/mode/commonlisp';
import { fSharp, oCaml } from '@codemirror/legacy-modes/mode/mllike';
import { csharp, kotlin, objectiveC, scala } from '@codemirror/legacy-modes/mode/clike';
import { standardSQL } from '@codemirror/legacy-modes/mode/sql';
import { diff } from '@codemirror/legacy-modes/mode/diff';
import { toml } from '@codemirror/legacy-modes/mode/toml';
import { fortran } from '@codemirror/legacy-modes/mode/fortran';
import { erlang } from '@codemirror/legacy-modes/mode/erlang';
import { perl } from '@codemirror/legacy-modes/mode/perl';

export const languages = {
  // Lezer grammars.
  javascript: javascriptLanguage, js: javascriptLanguage, mjs: javascriptLanguage, cjs: javascriptLanguage,
  typescript: typescriptLanguage, ts: typescriptLanguage, jsx: jsxLanguage, tsx: tsxLanguage,
  python: pythonLanguage, py: pythonLanguage, python3: pythonLanguage, sage: pythonLanguage, sagemath: pythonLanguage,
  c: cppLanguage, cpp: cppLanguage, 'c++': cppLanguage, cc: cppLanguage, cxx: cppLanguage, h: cppLanguage, hpp: cppLanguage,
  rust: rustLanguage, rs: rustLanguage,
  java: javaLanguage,
  json: jsonLanguage,
  html: htmlLanguage,
  css: cssLanguage,
  // Legacy modes.
  shell, sh: shell, bash: shell, zsh: shell,
  haskell, hs: haskell,
  julia, jl: julia,
  mathematica, wolfram: mathematica, wl: mathematica,
  matlab: octave, octave,
  r,
  lua,
  ruby, rb: ruby,
  go, golang: go,
  swift,
  scheme, racket: scheme,
  lisp: commonLisp, commonlisp: commonLisp,
  ocaml: oCaml, ml: oCaml, fsharp: fSharp, 'f#': fSharp,
  csharp, cs: csharp, 'c#': csharp,
  kotlin, kt: kotlin,
  scala,
  objc: objectiveC, objectivec: objectiveC,
  sql: standardSQL,
  diff, patch: diff,
  toml,
  fortran, f90: fortran,
  erlang,
  perl,
};
