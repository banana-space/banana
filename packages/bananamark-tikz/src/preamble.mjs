// The TeX preamble of a diagram. Kept apart from the compiler so that the TikZ cache (index.mjs) is keyed by the
// preamble a diagram actually gets: a \providecommand or a Unicode character declaration goes in only when the
// diagram uses that command or character, and each section below only when the diagram uses what it defines, so
// changing one invalidates just the diagrams that use it.
import fontMetrics from 'katex/src/fontMetricsData.js';
import bananaMath from './banana-math-metrics.mjs';

const cjkCharacter = /[\p{Script=Han}　-〿！-｠]/u;

// Han characters. The bundled engine already understands UTF-8, but has no CJK fonts. Give TeX a prose-sized box,
// then emit Unicode SVG text at its final DVI position. TikZ still controls colours, transforms, label sizes and all
// arrow geometry.
const cjkSection = String.raw`\def\BananaCJKBox#1{\begingroup%
  \dimen@=\f@size pt\relax%
  \dimen@=.9090909\dimen@% compensate the surrounding 1.1em math size
  \hbox to\dimen@{\vrule width0pt height.85\dimen@ depth.15\dimen@%
    \special{dvisvgm:raw <text x="{?x}" y="{?y}" class="bm-tikz-cjk" font-size="\strip@pt\dimen@" data-series="\f@series" data-shape="\f@shape">banana-cjk-#1</text>}\hss}%
\endgroup}
\DeclareRobustCommand\BananaCJK[1]{\ifmmode\text{\BananaCJKBox{#1}}\else\BananaCJKBox{#1}\fi}`;

// Mirrored letters (U+A4D8 ꓘ, U+A4F7 ꓷ) stand for a reversed K and D, as in the inverse Dold–Kan functor.
const mirrorSection = String.raw`% Reflect the glyphs about the centre of their box: at the centre x, p -> 2x - p.
\DeclareRobustCommand\BananaMirror[1]{\ifmmode\mathchoice{\BananaMirrorBox{$\displaystyle\mathrm{#1}$}}{\BananaMirrorBox{$\textstyle\mathrm{#1}$}}{\BananaMirrorBox{$\scriptstyle\mathrm{#1}$}}{\BananaMirrorBox{$\scriptscriptstyle\mathrm{#1}$}}\else\BananaMirrorBox{#1}\fi}
\def\BananaMirrorBox#1{\setbox0\hbox{#1}\hbox{\kern.5\wd0\special{dvisvgm:raw <g transform="translate({?x},0) translate({?x},0) scale(-1,1)">}\kern-.5\wd0\copy0\special{dvisvgm:raw </g>}}}`;

const symbols = String.raw`% Unicode maths symbols and Greek letters that authors type directly, as in KaTeX.
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

// Web glyphs: characters this TeX has no font for are drawn by the browser in a font the page already loads. TeX
// reserves a box with the glyph's metrics (in em of the current maths size: \tf@size, \sf@size or \ssf@size) and
// dvisvgm writes an SVG <text> element at the box's position; the compiler puts the character in place of the marker.
//   \mathscr: KaTeX_Script, with KaTeX's own metrics, so diagrams match formulas.
//   𝟙: KaTeX_Main, which BananaMath supplies for U+1D7D9 (see _katex.scss).
//   \mathbb of A–Z and k: Banana Math, the blackboard letters BananaMath has at those code points (_katex.scss);
//   other letters keep this TeX's msbm (none on the site: \mathbb{1} is 𝟙 by then).
// Other tokens in their argument (F^2) pass as they are. Both give one group, so that _\mathbb{N} works as with a
// maths alphabet.
// The BananaMath metrics are written by scripts/fonts/banana-math.py.
const glyphSection = String.raw`\def\BananaGlyphBox#1#2#3#4#5#6{\dimen@=#6pt\relax\hbox{\vrule width0pt height#4\dimen@ depth#5\dimen@\special{dvisvgm:raw <text x="{?x}" y="{?y}" class="bm-tikz-glyph" font-family="#1" font-size="\strip@pt\dimen@">#2</text>}\kern#3\dimen@}}
\def\BananaGlyph#1#2#3#4#5{\mathord{\mathchoice{\BananaGlyphBox{#1}{#2}{#3}{#4}{#5}\tf@size}{\BananaGlyphBox{#1}{#2}{#3}{#4}{#5}\tf@size}{\BananaGlyphBox{#1}{#2}{#3}{#4}{#5}\sf@size}{\BananaGlyphBox{#1}{#2}{#3}{#4}{#5}\ssf@size}}}
\def\BananaLetter#1#2#3{\ifcat a\noexpand#3\expandafter\@firstoftwo\else\expandafter\@secondoftwo\fi{\ifcsname #1@#3\endcsname\csname #1@#3\endcsname\else#2{#3}\fi}{#3}}`;
const glyph = (family, marker, [width, height, depth]) => String.raw`\BananaGlyph{${family}}{${marker}}{${width}}{${height}}{${depth}}`;
const letterDefinition = (prefix, letter, definition) => String.raw`\expandafter\def\csname ${prefix}@${letter}\endcsname{${definition}}`;

const scriptMetrics = fontMetrics['Script-Regular'];
const scriptSection = String.raw`\def\BananaScriptLetters#1{\ifx#1\relax\else\BananaLetter{BananaScript}\relax{#1}\expandafter\BananaScriptLetters\fi}
\DeclareRobustCommand\mathscr[1]{{\BananaScriptLetters#1\relax}}
` + [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map(letter => {
  const [depth, height, , , width] = scriptMetrics[letter.charCodeAt(0)];
  return letterDefinition('BananaScript', letter, glyph('KaTeX_Script', `banana-letter-${letter}`, [width, height, depth]));
}).join('\n');

const blackboardLetters = Object.keys(bananaMath).filter(key => /^[A-Za-z]$/.test(key));
const blackboardSection = String.raw`\DeclareMathAlphabet{\BananaMsbm}{U}{msb}{m}{n}
\def\BananaBlackboardLetters#1{\ifx#1\relax\else\BananaLetter{BananaBlackboard}\BananaMsbm{#1}\expandafter\BananaBlackboardLetters\fi}
\DeclareRobustCommand\mathbb[1]{{\BananaBlackboardLetters#1\relax}}
` + blackboardLetters.map(letter => letterDefinition('BananaBlackboard', letter, glyph('Banana Math', `banana-letter-${letter}`, bananaMath[letter]))).join('\n');

const oneSection = String.raw`\DeclareUnicodeCharacter{1D7D9}{\ensuremath{${glyph('KaTeX_Main', `banana-glyph-${0x1D7D9}`, bananaMath[0x1D7D9])}}}`;

const usesCommand = (tex, name) => new RegExp(String.raw`\\${name}(?![A-Za-z])`).test(tex);
// The sections, in order, each with when a diagram needs it.
const sections = [
  [tex => cjkCharacter.test(tex), cjkSection],
  [tex => /[ꓘꓷ]/u.test(tex), mirrorSection],
  [tex => usesCommand(tex, 'mathscr') || usesCommand(tex, 'mathbb') || tex.includes('\u{1D7D9}'), glyphSection],
  [tex => usesCommand(tex, 'mathscr'), scriptSection],
  [tex => usesCommand(tex, 'mathbb'), blackboardSection],
  [tex => tex.includes('\u{1D7D9}'), oneSection],
];
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

/** A line of the symbols: a \providecommand or a character declaration only when the source uses it. */
const used = (line, tex) => {
  const command = line.match(/^\\providecommand\\([A-Za-z]+)/)?.[1];
  if (command) return usesCommand(tex, command);
  const code = line.match(/^\\DeclareUnicodeCharacter\{([0-9A-F]+)\}/)?.[1];
  return !code || tex.includes(String.fromCodePoint(parseInt(code, 16)));
};

// Loading a TikZ library leaves stray spaces, which would widen the box holding the
// diagram and push the picture off centre. Load the libraries a source names in the
// preamble instead; loading them again in the diagram itself then does nothing.
const tikzLibrary = /\\usetikzlibrary\s*\{[^{}]*\}/g;

/** The preamble for one diagram: the symbols and sections its source uses, its Han and accented characters, its TikZ libraries. */
export function preambleFor(tex) {
  const fixed = symbols.split('\n').filter(line => used(line, tex)).join('\n');
  const needed = sections.filter(([uses]) => uses(tex)).map(([, section]) => section);
  const definitions = needed.length ? `\\makeatletter\n${needed.join('\n')}\n\\makeatother\n` : '';
  const declarations = [...new Set(tex.match(new RegExp(cjkCharacter, 'gu')) ?? [])].map(char => {
    const code = char.codePointAt(0);
    return `\\DeclareUnicodeCharacter{${code.toString(16).toUpperCase()}}{\\BananaCJK{${code}}}`;
  }).concat([...new Set(tex.match(accentedLetter) ?? [])].map(accentDeclaration).filter(Boolean))
    .concat([...new Set(tex.match(tikzLibrary) ?? [])]);
  return fixed + definitions + declarations.join('\n');
}
