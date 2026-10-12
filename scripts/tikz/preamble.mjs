// The TeX preamble of a diagram. Kept apart from the compiler so that the
// TikZ cache (scripts/postbuild/tikz.mjs) is keyed by the preamble a diagram
// actually gets: optional lines — a \providecommand or a Unicode character
// declaration — are included only when the diagram uses that command or
// character, so adding one invalidates just the diagrams that use it.
import fontMetrics from 'katex/src/fontMetricsData.js';

// The bundled engine already understands UTF-8, but has no CJK fonts. Give
// TeX a prose-sized box, then emit Unicode SVG text at its final DVI position.
// TikZ still controls colours, transforms, label sizes and all arrow geometry.
const cjkPreamble = String.raw`\makeatletter
\def\BananaCJKBox#1{\begingroup%
  \dimen@=\f@size pt\relax%
  \dimen@=.9090909\dimen@% compensate the surrounding 1.1em math size
  \hbox to\dimen@{\vrule width0pt height.85\dimen@ depth.15\dimen@%
    \special{dvisvgm:raw <text x="{?x}" y="{?y}" class="tikz-cjk" font-size="\strip@pt\dimen@" data-series="\f@series" data-shape="\f@shape">banana-cjk-#1</text>}\hss}%
\endgroup}
\DeclareRobustCommand\BananaCJK[1]{\ifmmode\text{\BananaCJKBox{#1}}\else\BananaCJKBox{#1}\fi}
\makeatother
% Mirrored letters (U+A4D8 ꓘ, U+A4F7 ꓷ) stand for a reversed K and D, as in the inverse Dold–Kan functor.
% Reflect the glyphs about the centre of their box: at the centre x, p -> 2x - p.
\DeclareRobustCommand\BananaMirror[1]{\ifmmode\mathchoice{\BananaMirrorBox{$\displaystyle\mathrm{#1}$}}{\BananaMirrorBox{$\textstyle\mathrm{#1}$}}{\BananaMirrorBox{$\scriptstyle\mathrm{#1}$}}{\BananaMirrorBox{$\scriptscriptstyle\mathrm{#1}$}}\else\BananaMirrorBox{#1}\fi}
\def\BananaMirrorBox#1{\setbox0\hbox{#1}\hbox{\kern.5\wd0\special{dvisvgm:raw <g transform="translate({?x},0) translate({?x},0) scale(-1,1)">}\kern-.5\wd0\copy0\special{dvisvgm:raw </g>}}}
% Unicode maths symbols and Greek letters that authors type directly, as in KaTeX.
\DeclareUnicodeCharacter{00D7}{\ensuremath{\times}}
\DeclareUnicodeCharacter{00B7}{\ensuremath{\cdot}}
\DeclareUnicodeCharacter{2208}{\ensuremath{\in}}
\DeclareUnicodeCharacter{2209}{\ensuremath{\notin}}
\DeclareUnicodeCharacter{220B}{\ensuremath{\ni}}
\DeclareUnicodeCharacter{2192}{\ensuremath{\to}}
\DeclareUnicodeCharacter{2190}{\ensuremath{\leftarrow}}
\DeclareUnicodeCharacter{2194}{\ensuremath{\leftrightarrow}}
\DeclareUnicodeCharacter{21D2}{\ensuremath{\Rightarrow}}
\DeclareUnicodeCharacter{21D0}{\ensuremath{\Leftarrow}}
\DeclareUnicodeCharacter{21D4}{\ensuremath{\Leftrightarrow}}
\DeclareUnicodeCharacter{21A6}{\ensuremath{\mapsto}}
\DeclareUnicodeCharacter{21AA}{\ensuremath{\hookrightarrow}}
\DeclareUnicodeCharacter{2218}{\ensuremath{\circ}}
\DeclareUnicodeCharacter{22F0}{\ensuremath{\mathinner{\mkern1mu\raise1pt\hbox{.}\mkern2mu\raise4pt\hbox{.}\mkern2mu\raise7pt\vbox{\kern7pt\hbox{.}}\mkern1mu}}}
\DeclareUnicodeCharacter{2297}{\ensuremath{\otimes}}
\DeclareUnicodeCharacter{2295}{\ensuremath{\oplus}}
\DeclareUnicodeCharacter{2245}{\ensuremath{\cong}}
\DeclareUnicodeCharacter{2243}{\ensuremath{\simeq}}
\DeclareUnicodeCharacter{2248}{\ensuremath{\approx}}
\DeclareUnicodeCharacter{2261}{\ensuremath{\equiv}}
\DeclareUnicodeCharacter{2260}{\ensuremath{\neq}}
\DeclareUnicodeCharacter{2264}{\ensuremath{\leq}}
\DeclareUnicodeCharacter{2265}{\ensuremath{\geq}}
\DeclareUnicodeCharacter{2282}{\ensuremath{\subset}}
\DeclareUnicodeCharacter{2286}{\ensuremath{\subseteq}}
\DeclareUnicodeCharacter{222A}{\ensuremath{\cup}}
\DeclareUnicodeCharacter{2229}{\ensuremath{\cap}}
\DeclareUnicodeCharacter{2200}{\ensuremath{\forall}}
\DeclareUnicodeCharacter{2203}{\ensuremath{\exists}}
\DeclareUnicodeCharacter{221E}{\ensuremath{\infty}}
\DeclareUnicodeCharacter{2205}{\ensuremath{\emptyset}}
\DeclareUnicodeCharacter{2202}{\ensuremath{\partial}}
\DeclareUnicodeCharacter{2207}{\ensuremath{\nabla}}
\DeclareUnicodeCharacter{22C6}{\ensuremath{\star}}
\DeclareUnicodeCharacter{2211}{\ensuremath{\sum}}
\DeclareUnicodeCharacter{220F}{\ensuremath{\prod}}
\DeclareUnicodeCharacter{2210}{\ensuremath{\coprod}}
\DeclareUnicodeCharacter{2032}{\ensuremath{\prime}}
\DeclareUnicodeCharacter{2212}{\ensuremath{-}}
\DeclareUnicodeCharacter{0393}{\ensuremath{\Gamma}}
\DeclareUnicodeCharacter{0394}{\ensuremath{\Delta}}
\DeclareUnicodeCharacter{0398}{\ensuremath{\Theta}}
\DeclareUnicodeCharacter{039B}{\ensuremath{\Lambda}}
\DeclareUnicodeCharacter{039E}{\ensuremath{\Xi}}
\DeclareUnicodeCharacter{03A0}{\ensuremath{\Pi}}
\DeclareUnicodeCharacter{03A3}{\ensuremath{\Sigma}}
\DeclareUnicodeCharacter{03A6}{\ensuremath{\Phi}}
\DeclareUnicodeCharacter{03A8}{\ensuremath{\Psi}}
\DeclareUnicodeCharacter{03A9}{\ensuremath{\Omega}}
\DeclareUnicodeCharacter{03B1}{\ensuremath{\alpha}}
\DeclareUnicodeCharacter{03B2}{\ensuremath{\beta}}
\DeclareUnicodeCharacter{03B3}{\ensuremath{\gamma}}
\DeclareUnicodeCharacter{03B4}{\ensuremath{\delta}}
\DeclareUnicodeCharacter{03B5}{\ensuremath{\epsilon}}
\DeclareUnicodeCharacter{03B6}{\ensuremath{\zeta}}
\DeclareUnicodeCharacter{03B7}{\ensuremath{\eta}}
\DeclareUnicodeCharacter{03B8}{\ensuremath{\theta}}
\DeclareUnicodeCharacter{03B9}{\ensuremath{\iota}}
\DeclareUnicodeCharacter{03BA}{\ensuremath{\kappa}}
\DeclareUnicodeCharacter{03BB}{\ensuremath{\lambda}}
\DeclareUnicodeCharacter{03BC}{\ensuremath{\mu}}
\DeclareUnicodeCharacter{03BD}{\ensuremath{\nu}}
\DeclareUnicodeCharacter{03BE}{\ensuremath{\xi}}
\DeclareUnicodeCharacter{03C0}{\ensuremath{\pi}}
\DeclareUnicodeCharacter{03C1}{\ensuremath{\rho}}
\DeclareUnicodeCharacter{03C3}{\ensuremath{\sigma}}
\DeclareUnicodeCharacter{03C4}{\ensuremath{\tau}}
\DeclareUnicodeCharacter{03C5}{\ensuremath{\upsilon}}
\DeclareUnicodeCharacter{03C6}{\ensuremath{\phi}}
\DeclareUnicodeCharacter{03C7}{\ensuremath{\chi}}
\DeclareUnicodeCharacter{03C8}{\ensuremath{\psi}}
\DeclareUnicodeCharacter{03C9}{\ensuremath{\omega}}
\DeclareUnicodeCharacter{00B9}{\ensuremath{^{1}}}
\DeclareUnicodeCharacter{00B2}{\ensuremath{^{2}}}
\DeclareUnicodeCharacter{00B3}{\ensuremath{^{3}}}
% No bold maths fonts (cmmib) here: \boldsymbol falls back to poor man's bold, \boldmath does nothing.
\AtBeginDocument{\renewcommand\boldsymbol[1]{\pmb{#1}}\renewcommand\boldmath{}}
% mathtools and braket commands KaTeX accepts but this TeX lacks.
\providecommand\coloneqq{\mathrel{\vcenter{\hbox{:}}{=}}}
\providecommand\eqqcolon{\mathrel{{=}\vcenter{\hbox{:}}}}
\providecommand\braket[1]{\langle #1\rangle}
\providecommand\bm{\boldsymbol}
\providecommand\set[1]{\{#1\}}
\providecommand\Set[1]{\left\{#1\right\}}
\providecommand\bra[1]{\langle #1\rvert}
\providecommand\ket[1]{\lvert #1\rangle}
\DeclareUnicodeCharacter{A4D8}{\BananaMirror{K}}
\DeclareUnicodeCharacter{A4F7}{\BananaMirror{D}}
`;
// Web glyphs: characters this TeX has no font for are drawn by the browser in a
// font the page already loads. TeX reserves a box with the glyph's metrics (in em
// of the current maths size) and dvisvgm writes an SVG <text> element at the box's
// position; the marker text is replaced by the character after compilation.
//   \mathscr: KaTeX_Script, with KaTeX's own metrics, so diagrams match formulas.
//   𝟙: KaTeX_Main, which BananaMath supplies for U+1D7D9 (see _katex.scss).
const scriptMetrics = fontMetrics['Script-Regular'];
const webGlyphs = { 0x1D7D9: { family: 'KaTeX_Main', width: 0.663, height: 0.655, depth: 0 } };
const glyphPreamble = String.raw`\makeatletter
\def\BananaGlyphBox#1#2#3#4#5#6{\dimen@=\fontdimen6#6\relax%
  \hbox{\vrule width0pt height#4\dimen@ depth#5\dimen@%
    \special{dvisvgm:raw <text x="{?x}" y="{?y}" class="tikz-glyph" font-family="#1" font-size="\strip@pt\dimen@">#2</text>}%
    \kern#3\dimen@}}
\def\BananaGlyph#1#2#3#4#5{\mathord{\mathchoice{\BananaGlyphBox{#1}{#2}{#3}{#4}{#5}{\textfont2}}{\BananaGlyphBox{#1}{#2}{#3}{#4}{#5}{\textfont2}}{\BananaGlyphBox{#1}{#2}{#3}{#4}{#5}{\scriptfont2}}{\BananaGlyphBox{#1}{#2}{#3}{#4}{#5}{\scriptscriptfont2}}}}
\def\BananaScriptLetter#1{\BananaGlyph{KaTeX_Script}{banana-letter-#1}{\csname BananaScriptW@#1\endcsname}{\csname BananaScriptH@#1\endcsname}{\csname BananaScriptD@#1\endcsname}}
\def\BananaScriptLetters#1{\ifx#1\relax\else\BananaScriptLetter{#1}\expandafter\BananaScriptLetters\fi}
\DeclareRobustCommand\mathscr[1]{\BananaScriptLetters#1\relax}
` + [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map(letter => {
  const [depth, height, , , width] = scriptMetrics[letter.charCodeAt(0)];
  return String.raw`\expandafter\def\csname BananaScriptW@${letter}\endcsname{${width}}\expandafter\def\csname BananaScriptH@${letter}\endcsname{${height}}\expandafter\def\csname BananaScriptD@${letter}\endcsname{${depth}}`;
}).join('\n') + '\n' + Object.entries(webGlyphs).map(([code, glyph]) =>
  String.raw`\DeclareUnicodeCharacter{${Number(code).toString(16).toUpperCase()}}{\ensuremath{\BananaGlyph{${glyph.family}}{banana-glyph-${code}}{${glyph.width}}{${glyph.height}}{${glyph.depth}}}}`).join('\n') + '\n\\makeatother\n';
const cjkCharacter = /[\p{Script=Han}\u3000-\u303f\uff01-\uff60]/gu;
// Accented Latin letters (Ét, Möbius): TeX accents in text, maths accents in formulas.
const accents = { '\u0300': ['`', 'grave'], '\u0301': ["'", 'acute'], '\u0302': ['^', 'hat'], '\u0303': ['~', 'tilde'], '\u0304': ['=', 'bar'],
  '\u0306': ['u', 'breve'], '\u0307': ['.', 'dot'], '\u0308': ['"', 'ddot'], '\u030a': ['r', 'mathring'], '\u030c': ['v', 'check'] };
const accentedLetter = /[\u00c0-\u017f]/gu;
function accentDeclaration(char) {
  const [base, mark, ...rest] = char.normalize('NFD');
  const accent = accents[mark];
  if (!/^[A-Za-z]$/.test(base) || !accent || rest.length) return '';
  const letter = base === 'i' ? '\\i' : base === 'j' ? '\\j' : base;
  const mathLetter = base === 'i' ? '\\imath' : base === 'j' ? '\\jmath' : base;
  return `\\DeclareUnicodeCharacter{${char.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')}}{\\ifmmode\\${accent[1]}{${mathLetter}}\\else\\${accent[0]}{${letter}}\\fi}`;
}

/** Fixed lines always; a \\providecommand or character declaration only when the source uses it. */
const used = (line, tex) => {
  const command = line.match(/^\\providecommand\\([A-Za-z]+)/)?.[1];
  if (command) return new RegExp(`\\\\${command}(?![A-Za-z])`).test(tex);
  const code = line.match(/^\\DeclareUnicodeCharacter\{([0-9A-F]+)\}/)?.[1];
  return !code || tex.includes(String.fromCodePoint(parseInt(code, 16)));
};

/** The preamble for one diagram: fixed definitions, plus the optional ones its source uses. */
export function preambleFor(tex) {
  const fixed = (cjkPreamble + glyphPreamble).split('\n').filter(line => used(line, tex)).join('\n');
  const declarations = [...new Set(tex.match(cjkCharacter) ?? [])].map(char => {
    const code = char.codePointAt(0);
    return `\\DeclareUnicodeCharacter{${code.toString(16).toUpperCase()}}{\\BananaCJK{${code}}}`;
  }).concat([...new Set(tex.match(accentedLetter) ?? [])].map(accentDeclaration).filter(Boolean));
  return fixed + declarations.join('\n');
}
