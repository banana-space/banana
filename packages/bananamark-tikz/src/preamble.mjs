// The TeX preamble of a diagram. Kept apart from the compiler so that the TikZ cache (index.mjs) is keyed by the
// preamble a diagram actually gets: a \providecommand or a Unicode character declaration goes in only when the
// diagram uses that command or character, and each section below only when the diagram uses what it defines, so
// changing one invalidates just the diagrams that use it. The glyphs a caller gives (tikz()'s glyphs) are part of it.
import fontMetrics from 'katex/src/fontMetricsData.js';

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
\providecommand\mathreflectbox[1]{\mathchoice{\reflectbox{$\displaystyle#1$}}{\reflectbox{$\textstyle#1$}}{\reflectbox{$\scriptstyle#1$}}{\reflectbox{$\scriptscriptstyle#1$}}}
`;
// \mathreflectbox (KaTeX's: \reflectbox of maths, at the surrounding size) mirrors as \reflectbox does.

// Page glyphs: characters the browser draws in a font the page loads, in place of TeX's (see glyphTable). TeX reserves
// a box with the glyph's metrics (in em of the current maths size: \tf@size, \sf@size or \ssf@size) and dvisvgm
// writes an SVG <text> element at the box's position, with the font's attributes; the compiler puts the character in
// place of the marker. A glyph is an ordinary symbol in a group of its own, so that _\mathbb{N} works as with TeX's.
const glyphSection = String.raw`\def\BananaGlyphBox#1#2#3#4#5#6{\dimen@=#6pt\relax\hbox{\vrule width0pt height#4\dimen@ depth#5\dimen@\special{dvisvgm:raw <text x="{?x}" y="{?y}" class="bm-tikz-glyph" #1 font-size="\strip@pt\dimen@">banana-glyph-#2</text>}\kern#3\dimen@}}
\def\BananaGlyph#1#2#3#4#5{{\mathchoice{\BananaGlyphBox{#1}{#2}{#3}{#4}{#5}\tf@size}{\BananaGlyphBox{#1}{#2}{#3}{#4}{#5}\tf@size}{\BananaGlyphBox{#1}{#2}{#3}{#4}{#5}\sf@size}{\BananaGlyphBox{#1}{#2}{#3}{#4}{#5}\ssf@size}}}`;

// An alphabet with glyphs (\BananaAlphabet{mathbb}) reads its argument token by token: a letter or digit with a glyph
// (\Banana@mathbb@Z) is the glyph, one without is the alphabet's own (TeX's \mathbb, kept as \BananaOriginal@mathbb;
// plain maths when TeX has no such alphabet, as \mathscr); a group is read the same way inside braces, and a sub- or
// superscript too; at anything else (a command, say) the rest of the argument goes to the alphabet's own as it is.
const alphabetSection = String.raw`\def\Banana@end{\Banana@end}
\def\BananaAlphabetTokens{\futurelet\Banana@token\Banana@step}
\def\Banana@step{\ifx\Banana@token\Banana@end\let\Banana@next\@gobble
  \else\ifx\Banana@token\bgroup\let\Banana@next\Banana@group
  \else\ifx\Banana@token\@sptoken\let\Banana@next\Banana@space
  \else\ifcat\noexpand\Banana@token^\let\Banana@next\Banana@script
  \else\ifcat\noexpand\Banana@token_\let\Banana@next\Banana@script
  \else\ifcat\noexpand\Banana@token a\let\Banana@next\Banana@character
  \else\ifcat\noexpand\Banana@token 1\let\Banana@next\Banana@character
  \else\let\Banana@next\Banana@rest\fi\fi\fi\fi\fi\fi\fi\Banana@next}
\def\Banana@original{\csname BananaOriginal@\Banana@alphabet\endcsname}
\def\Banana@group#1{{\BananaAlphabetTokens#1\Banana@end}\BananaAlphabetTokens}
\def\Banana@script#1#2{#1{\BananaAlphabetTokens#2\Banana@end}\BananaAlphabetTokens}
\@firstofone{\def\Banana@space} {\BananaAlphabetTokens}
\def\Banana@character#1{\ifcsname Banana@\Banana@alphabet @#1\endcsname\csname Banana@\Banana@alphabet @#1\endcsname\else\Banana@original{#1}\fi\BananaAlphabetTokens}
\def\Banana@rest#1\Banana@end{\Banana@original{#1}}
\def\BananaAlphabet#1{\expandafter\let\csname BananaOriginal@#1\expandafter\endcsname\csname #1\endcsname
  \expandafter\ifx\csname BananaOriginal@#1\endcsname\relax\expandafter\let\csname BananaOriginal@#1\endcsname\@firstofone\fi
  \expandafter\DeclareRobustCommand\csname BananaAlphabet@#1\endcsname[1]{{\def\Banana@alphabet{#1}\BananaAlphabetTokens##1\Banana@end}}%
  \expandafter\let\csname #1\expandafter\endcsname\csname BananaAlphabet@#1\endcsname}`;

// A letter or digit with a glyph typed in maths is active there (\mathcode "8000): outside an alphabet (\fam is -1)
// it is the glyph, in one (\mathrm, \operatorname, an alphabet's own) TeX's character.
const bq = '`';
const characterSection = String.raw`\def\BananaMathCharacter#1#2{\expandafter\def\csname Banana@@#1\endcsname{#2}%
  \expandafter\mathchardef\csname BananaMathOriginal@#1\endcsname=\mathcode${bq}#1\relax
  \begingroup\lccode${bq}\~=${bq}#1\relax\lowercase{\endgroup\def~}{\ifnum\fam=\m@ne\csname Banana@@#1\endcsname\else\csname BananaMathOriginal@#1\endcsname\fi}%
  \mathcode${bq}#1="8000\relax}`;

const texNumber = value => String(Number(value.toFixed(5)));
const glyphMacro = ({ family, style, weight }, char, [width, height, depth]) => String.raw`\BananaGlyph{font-family="${family}"`
  + (style ? ` font-style="${style}"` : '') + (weight ? ` font-weight="${weight}"` : '')
  + String.raw`}{${char.codePointAt(0)}}{${texNumber(width)}}{${texNumber(height)}}{${texNumber(depth)}}`;

/**
 * One of KaTeX's fonts as glyphs, for tikz()'s glyphs option: { family, style, weight, metrics } with KaTeX's
 * metrics (width, height and depth) of the characters given, by default every letter and digit it has. font is the
 * name of its metrics: Main-Regular, Math-Italic, Caligraphic-Regular, Fraktur-Regular, Script-Regular and so on.
 */
export function katexGlyphs(font, characters) {
  const metrics = Object.hasOwn(fontMetrics, font) ? fontMetrics[font] : undefined;
  if (!metrics) throw new TypeError(`bananamark-tikz: KaTeX has no font ${font} (its fonts: ${Object.keys(fontMetrics).join(', ')})`);
  const [name, variant] = font.split('-');
  const glyphs = { family: `KaTeX_${name}`, ...(/Italic/.test(variant) ? { style: 'italic' } : {}), ...(/Bold/.test(variant) ? { weight: 'bold' } : {}), metrics: {} };
  const chosen = characters === undefined
    ? Object.keys(metrics).map(code => String.fromCodePoint(Number(code))).filter(char => /^[A-Za-z0-9]$/.test(char)) : [...characters];
  for (const char of chosen) {
    const values = metrics[char.codePointAt(0)];
    if (!values) throw new TypeError(`bananamark-tikz: KaTeX's ${font} has no ${char}`);
    const [depth, height, , , width] = values;
    glyphs.metrics[char] = [width, height, depth];
  }
  return glyphs;
}

/** The glyphs diagrams have without the glyphs option: \mathscr in KaTeX_Script, as KaTeX draws it (this TeX has none). */
export const defaultGlyphs = Object.freeze([Object.freeze({ alphabet: '\\mathscr', ...katexGlyphs('Script-Regular') })]);

const tables = new WeakMap();
/**
 * tikz()'s glyphs option, checked and written as TeX: an array of { alphabet, family, style, weight, metrics }, each a
 * font the page has (family: CSS font names; style, weight: as CSS's) and the characters to draw in it, metrics
 * { character: [width, height, depth] } in em. With alphabet (a command such as \mathbb), the characters (letters and
 * digits) are drawn in it; without, where typed in maths outside an alphabet (letters, digits and characters beyond
 * ASCII). A later entry wins over an earlier one for the same character.
 */
export function glyphTable(glyphs) {
  if (tables.has(glyphs)) return tables.get(glyphs);
  if (!Array.isArray(glyphs)) throw new TypeError('bananamark-tikz: glyphs is an array of { alphabet, family, style, weight, metrics }');
  const alphabets = new Map(), characters = new Map();
  for (const entry of glyphs) {
    const { alphabet, family, style, weight, metrics } = entry ?? {};
    const where = `bananamark-tikz: glyphs${alphabet === undefined ? '' : ` of ${alphabet}`}`;
    if (alphabet !== undefined && !/^\\[A-Za-z]+$/.test(alphabet)) throw new TypeError(`${where}: the alphabet is a command such as \\mathbb`);
    if (typeof family !== 'string' || !/^[\w ,'.-]+$/.test(family)) throw new TypeError(`${where}: family is a list of font names (letters, digits, spaces and , ' . - _)`);
    if (style !== undefined && !/^(normal|italic|oblique)$/.test(style)) throw new TypeError(`${where}: style is normal, italic or oblique`);
    if (weight !== undefined && !/^(normal|bold|[1-9]00)$/.test(String(weight))) throw new TypeError(`${where}: weight is normal, bold, or 100 to 900`);
    if (!metrics || typeof metrics !== 'object') throw new TypeError(`${where}: metrics is { character: [width, height, depth] }`);
    const name = alphabet?.slice(1);
    if (name !== undefined && !alphabets.has(name)) alphabets.set(name, new Map());
    const target = name === undefined ? characters : alphabets.get(name);
    for (const [char, values] of Object.entries(metrics)) {
      const allowed = /^[A-Za-z0-9]$/.test(char) || (name === undefined && [...char].length === 1 && char.codePointAt(0) > 0x9f);
      if (!allowed) throw new TypeError(`${where}: ${JSON.stringify(char)} is not a letter or digit${name === undefined ? ' or one character beyond ASCII' : ''}`);
      if (!Array.isArray(values) || values.length !== 3 || !values.every(Number.isFinite)) throw new TypeError(`${where}: the metrics of ${char} are [width, height, depth], in em`);
      target.set(char, glyphMacro({ family, style, weight }, char, values));
    }
  }
  const table = {
    alphabets: [...alphabets].map(([name, glyphs]) => ({
      name, definitions: [`\\BananaAlphabet{${name}}`, ...[...glyphs].map(([char, macro]) => String.raw`\expandafter\def\csname Banana@${name}@${char}\endcsname{${macro}}`)].join('\n'),
    })),
    letters: [...characters].filter(([char]) => char < '\x80').map(([char, macro]) => String.raw`\BananaMathCharacter{${char}}{${macro}}`).join('\n'),
    characters: [...characters].filter(([char]) => char >= '\x80')
      .map(([char, macro]) => [char, String.raw`\DeclareUnicodeCharacter{${char.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')}}{\ensuremath{${macro}}}`]),
  };
  tables.set(glyphs, table);
  return table;
}

const usesCommand = (tex, name) => new RegExp(String.raw`\\${name}(?![A-Za-z])`).test(tex);

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

/**
 * The preamble for one diagram: the symbols and sections its source uses, its Han and accented characters, its TikZ
 * libraries, and its glyphs (glyphTable's: the alphabets it uses, letters and digits, its characters beyond ASCII).
 */
export function preambleFor(tex, glyphs = glyphTable(defaultGlyphs)) {
  const fixed = symbols.split('\n').filter(line => used(line, tex)).join('\n');
  const alphabets = glyphs.alphabets.filter(({ name }) => usesCommand(tex, name));
  const characters = glyphs.characters.filter(([char]) => tex.includes(char));
  const needed = [
    [cjkCharacter.test(tex), cjkSection],
    [alphabets.length || glyphs.letters || characters.length, glyphSection],
    [alphabets.length, alphabetSection],
    ...alphabets.map(({ definitions }) => [true, definitions]),
    [glyphs.letters, characterSection],
    [glyphs.letters, glyphs.letters],
  ].filter(([uses]) => uses).map(([, section]) => section);
  const definitions = needed.length ? `\\makeatletter\n${needed.join('\n')}\n\\makeatother\n` : '';
  const declarations = [...new Set(tex.match(new RegExp(cjkCharacter, 'gu')) ?? [])].map(char => {
    const code = char.codePointAt(0);
    return `\\DeclareUnicodeCharacter{${code.toString(16).toUpperCase()}}{\\BananaCJK{${code}}}`;
  }).concat([...new Set(tex.match(accentedLetter) ?? [])].map(accentDeclaration).filter(Boolean))
    .concat([...new Set(tex.match(tikzLibrary) ?? [])])
    // Last, so that a glyph wins over a symbol, a Han or an accented character declared above.
    .concat(characters.map(([, declaration]) => declaration));
  return fixed + definitions + declarations.join('\n');
}
