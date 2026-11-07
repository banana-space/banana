// The TeX preamble of a diagram. Kept apart from the compiler so that the TikZ cache (index.mjs) is keyed by the
// preamble a diagram actually gets: a \providecommand or a Unicode character declaration goes in only when the
// diagram uses that command or character, and each section below only when the diagram uses what it defines, so
// changing one invalidates just the diagrams that use it. The glyphs a caller gives (tikz()'s glyphs) are part of it.
import { createHash } from 'node:crypto';
import fontMetrics from 'katex/src/fontMetricsData.js';
import { writeTfm } from './tfm.mjs';

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


// Greek letters as KaTeX has them: the character and its command (ε is \varepsilon, ϵ \epsilon; φ \varphi, ϕ \phi).
const greek = new Map(`Γ Gamma Δ Delta Θ Theta Λ Lambda Ξ Xi Π Pi Σ Sigma Υ Upsilon Φ Phi Ψ Psi Ω Omega α alpha β beta γ gamma
  δ delta ϵ epsilon ζ zeta η eta θ theta ι iota κ kappa λ lambda μ mu ν nu ξ xi π pi ρ rho σ sigma τ tau υ upsilon ϕ phi
  χ chi ψ psi ω omega ε varepsilon ϑ vartheta ϖ varpi ϱ varrho ς varsigma φ varphi ϰ varkappa ϝ digamma`
  .split(/\s+/).flatMap((word, i, words) => i % 2 ? [] : [[word, words[i + 1]]]));
const hex = char => char.codePointAt(0).toString(16).toUpperCase().padStart(4, '0');
const greekDeclarations = [...greek].map(([char, command]) => `\\DeclareUnicodeCharacter{${hex(char)}}{\\ensuremath{\\${command}}}`).join('\n');

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
${greekDeclarations}
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

// Custom glyphs: characters the browser draws in a font the page loads, in place of TeX's (see glyphTable). Each such
// font is a TeX font as well, with the glyphs' metrics (a metric file glyphTable writes, tfm.mjs, which the compiler
// gives the engine): TeX sets its characters as its own letters, at the size of the maths around them, with their
// italic corrections (a superscript and what follows moved out, a subscript not) and skews (accents). The compiler
// then writes the page's font and the characters in the SVG in place of the TeX font and its codes.
// \BananaGlyphFont{name} declares one as a maths family of its own (\symname).
const fontSection = String.raw`\def\BananaGlyphFont#1{\DeclareFontFamily{U}{#1}{\skewchar\font=255 }\DeclareFontShape{U}{#1}{m}{n}{<-> #1}{}\DeclareSymbolFont{#1}{U}{#1}{m}{n}}`;

// An alphabet with glyphs (\BananaAlphabet{mathbb}) reads its argument token by token: a letter or digit with a glyph
// (\Banana@mathbb@Z, a \mathchardef) is the glyph, one without is the alphabet's own (TeX's \mathbb, kept as
// \BananaOriginal@mathbb; plain maths when TeX has no such alphabet, as \mathscr); a group is read the same way inside
// braces, and a sub- or superscript too; at anything else (a command, say) the rest of the argument goes to the
// alphabet's own as it is, which first notes the family it sets (\Banana@fam) for a Greek letter there (greekSection).
// A lone glyph is then a character to TeX, as TeX's alphabets give: \mathbb{Z}^2 is Z^2.
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
\def\Banana@rest#1\Banana@end{\Banana@original{\edef\Banana@fam{\the\fam}#1}}
\def\BananaAlphabet#1{\expandafter\let\csname BananaOriginal@#1\expandafter\endcsname\csname #1\endcsname
  \expandafter\ifx\csname BananaOriginal@#1\endcsname\relax\expandafter\let\csname BananaOriginal@#1\endcsname\@firstofone\fi
  \expandafter\DeclareRobustCommand\csname BananaAlphabet@#1\endcsname[1]{{\def\Banana@alphabet{#1}\BananaAlphabetTokens##1\Banana@end}}%
  \expandafter\let\csname #1\expandafter\endcsname\csname BananaAlphabet@#1\endcsname}`;

// A Greek letter with a glyph, as a command (\Gamma) or typed (Γ, which is the command), is a command of its own
// (\BananaGreek{Gamma}): the alphabet's glyph (\Banana@mathbf@Gamma) in an alphabet with one, while the family is the
// one it set (not inside \mathrm in it); in plain maths (\fam is -1, and \Banana@alphabet empty outside alphabets),
// the glyph of letters typed in maths (\Banana@@Gamma); otherwise TeX's letter (\BananaGreek@Gamma), as \mathrm{\Gamma}.
const greekSection = String.raw`\def\Banana@alphabet{}\def\Banana@fam{-1}
\def\Banana@greek#1{\ifcsname Banana@\Banana@alphabet @#1\endcsname\ifnum\fam=\Banana@fam\relax\csname Banana@\Banana@alphabet @#1\endcsname
  \else\Banana@greek@plain{#1}\fi\else\Banana@greek@plain{#1}\fi}
\def\Banana@greek@plain#1{\ifcsname Banana@@#1\endcsname\ifnum\fam=\m@ne\csname Banana@@#1\endcsname
  \else\csname BananaGreek@#1\endcsname\fi\else\csname BananaGreek@#1\endcsname\fi}
\def\BananaGreek#1{\expandafter\let\csname BananaGreek@#1\expandafter\endcsname\csname #1\endcsname
  \expandafter\protected\expandafter\def\csname #1\endcsname{\Banana@greek{#1}}}`;

/**
 * One of KaTeX's fonts as glyphs, for tikz()'s glyphs option: { family, style, weight, metrics } with KaTeX's
 * metrics (width, height, depth, italic correction and skew) of the characters given, by default every letter and
 * digit it has. font is the name of its metrics: Main-Regular, Math-Italic, Caligraphic-Regular, Script-Regular…
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
    const [depth, height, italic, skew, width] = values;
    glyphs.metrics[char] = [width, height, depth, italic, skew];
  }
  return glyphs;
}

/** The glyphs diagrams have without the glyphs option: \mathscr in KaTeX_Script, as KaTeX draws it (this TeX has none). */
export const defaultGlyphs = Object.freeze([Object.freeze({ alphabet: '\\mathscr', ...katexGlyphs('Script-Regular') })]);

const letterOrDigit = /^[A-Za-z0-9]$/;
const range = (from, to) => Array.from({ length: to - from + 1 }, (_, i) => from + i);
// Codes for a glyph that cannot have its own: not 0 to 32 or 127, which the DVI converter writes as other characters,
// nor 255 (tfm.mjs's skew character), nor ones HTML would take for markup, a space or a soft hyphen.
const spareCodes = [...range(161, 254).filter(code => code !== 173), 33, ...range(35, 37), ...range(40, 47), 58, 59, 61, 63, 64,
  ...range(91, 96), ...range(123, 126)];

// The TeX fonts of the page fonts (family, style and weight): a letter or digit typed in maths has its own code (its
// \mathcode keeps the code for the alphabets that take the letter back: \mathrm{x} is TeX's x), as has any other
// letter or digit while it is free; the rest have spare codes. The same character with the same metrics is there once,
// and a page font with more glyphs than codes has a second TeX font.
function placeGlyphs() {
  const fonts = new Map();
  const place = (attributes, char, metrics, own) => {
    const key = JSON.stringify([attributes.family, attributes.style, attributes.weight]);
    if (!fonts.has(key)) fonts.set(key, []);
    const list = fonts.get(key), id = JSON.stringify([char, metrics]);
    const codes = [...(letterOrDigit.test(char) ? [char.charCodeAt(0)] : []), ...(own ? [] : spareCodes)];
    for (const font of list) {
      if (font.placed.has(id)) return { font, code: font.placed.get(id) };
      const code = codes.find(code => !font.slots.has(code));
      if (code !== undefined) { font.slots.set(code, [char, metrics]); font.placed.set(id, code); return { font, code }; }
    }
    list.push({ attributes, slots: new Map(), placed: new Map() });
    return place(attributes, char, metrics, own);
  };
  return { place, fonts: () => [...fonts.values()].flat() };
}

// A font's name, for TeX (its metric file, font family and \sym) and the compiler: letters from a digest of the
// font, so that the name changes with any of it, and with it the preamble and so the key of each diagram using it.
const fontName = data => 'banana' + [...createHash('sha256').update(data).digest().subarray(0, 12)].map(byte => String.fromCharCode(97 + byte % 26)).join('');

const tables = new WeakMap();
/**
 * tikz()'s glyphs option, checked and written as TeX: an array of { alphabet, family, style, weight, metrics }, each a
 * font the page has (family: CSS font names; style, weight: as CSS's) and the characters to draw in it, metrics
 * { character: [width, height, depth, italic correction, skew] } in em (the last two may be left out: 0). With
 * alphabet (a command such as \mathbb), the characters (letters, digits and Greek letters, as Γ for \Gamma) are drawn
 * in it; without, where typed in maths outside an alphabet (letters, digits, Greek letters typed or as commands, and
 * characters beyond ASCII). A later entry wins over an earlier one for the same character. The table: the TeX fonts
 * ({ name, tfm: base64, family, style, weight, characters: { code: character } }), and the TeX of each alphabet, of the
 * letters and digits, of each Greek letter and of each other character, with their fonts.
 */
export function glyphTable(glyphs) {
  if (tables.has(glyphs)) return tables.get(glyphs);
  if (!Array.isArray(glyphs)) throw new TypeError('bananamark-tikz: glyphs is an array of { alphabet, family, style, weight, metrics }');
  const alphabets = new Map(), typed = new Map();
  for (const entry of glyphs) {
    const { alphabet, family, style, weight, metrics } = entry ?? {};
    const where = `bananamark-tikz: glyphs${alphabet === undefined ? '' : ` of ${alphabet}`}`;
    if (alphabet !== undefined && !/^\\[A-Za-z]+$/.test(alphabet)) throw new TypeError(`${where}: the alphabet is a command such as \\mathbb`);
    if (typeof family !== 'string' || !/^[\w ,'.-]+$/.test(family)) throw new TypeError(`${where}: family is a list of font names (letters, digits, spaces and , ' . - _)`);
    if (style !== undefined && !/^(normal|italic|oblique)$/.test(style)) throw new TypeError(`${where}: style is normal, italic or oblique`);
    if (weight !== undefined && !/^(normal|bold|[1-9]00)$/.test(String(weight))) throw new TypeError(`${where}: weight is normal, bold, or 100 to 900`);
    if (!metrics || typeof metrics !== 'object') throw new TypeError(`${where}: metrics is { character: [width, height, depth, italic correction, skew] }`);
    const name = alphabet?.slice(1);
    if (name !== undefined && !alphabets.has(name)) alphabets.set(name, new Map());
    const target = name === undefined ? typed : alphabets.get(name);
    const attributes = { family, ...(style === undefined ? {} : { style }), ...(weight === undefined ? {} : { weight: String(weight) }) };
    for (const [char, values] of Object.entries(metrics)) {
      const allowed = letterOrDigit.test(char) || greek.has(char) || (name === undefined && [...char].length === 1 && char.codePointAt(0) > 0x9f);
      if (!allowed) throw new TypeError(`${where}: ${JSON.stringify(char)} is not a letter, digit or Greek letter${name === undefined ? ' or one character beyond ASCII' : ''}`);
      if (!Array.isArray(values) || values.length < 3 || values.length > 5 || !values.every(value => Number.isFinite(value) && Math.abs(value) < 16)) {
        throw new TypeError(`${where}: the metrics of ${char} are [width, height, depth, italic correction, skew] in em (the last two optional), each less than 16`);
      }
      target.set(char, [attributes, [0, 1, 2, 3, 4].map(i => values[i] ?? 0)]);
    }
  }
  // Letters and digits typed in maths first, so that they have their own codes.
  const placer = placeGlyphs();
  const letters = [...typed].filter(([char]) => char < '\x80').map(([char, [attributes, metrics]]) => [char, placer.place(attributes, char, metrics, true)]);
  const characters = [...typed].filter(([char]) => char >= '\x80').map(([char, [attributes, metrics]]) => [char, placer.place(attributes, char, metrics, false)]);
  const greekLetters = characters.filter(([char]) => greek.has(char)), others = characters.filter(([char]) => !greek.has(char));
  const alphabetGlyphs = [...alphabets].map(([name, chars]) => [name, [...chars].map(([char, [attributes, metrics]]) => [char, placer.place(attributes, char, metrics, false)])]);
  const fonts = placer.fonts().map(font => {
    const tfm = Buffer.from(writeTfm(new Map([...font.slots].map(([code, [, metrics]]) => [code, metrics])))).toString('base64');
    const codes = Object.fromEntries([...font.slots].map(([code, [char]]) => [code, char]));
    font.name = fontName(JSON.stringify([font.attributes, codes, tfm]));
    return { name: font.name, tfm, ...font.attributes, characters: codes };
  });
  // A glyph as a maths character: an ordinary symbol, or (a letter or digit typed in maths) one of variable family.
  const mathchar = ({ font, code }, variable = false) => String.raw`\numexpr${variable ? '"7000+' : ''}\sym${font.name}*256+${code}\relax`;
  const fontsOf = placed => [...new Set(placed.map(([, { font }]) => font.name))];
  // A glyph's name in an alphabet (\Banana@mathbb@Z) or for Greek letters typed in maths (\Banana@@Gamma).
  const glyphName = (alphabet, char) => `Banana@${alphabet}@${greek.get(char) ?? char}`;
  const glyphDefinition = (alphabet, char, glyph) => String.raw`\expandafter\mathchardef\csname ${glyphName(alphabet, char)}\endcsname=${mathchar(glyph)}`;
  const table = {
    fonts,
    alphabets: alphabetGlyphs.map(([name, placed]) => ({
      name, fonts: fontsOf(placed), greek: placed.filter(([char]) => greek.has(char)).map(([char]) => greek.get(char)),
      definitions: [`\\BananaAlphabet{${name}}`, ...placed.map(([char, glyph]) => glyphDefinition(name, char, glyph))].join('\n'),
    })),
    letters: { fonts: fontsOf(letters), definitions: letters.map(([char, glyph]) => `\\mathcode${char.charCodeAt(0)}=${mathchar(glyph, true)}`).join('\n') },
    greek: greekLetters.map(([char, glyph]) => ({ char, command: greek.get(char), definition: glyphDefinition('', char, glyph), font: glyph.font.name })),
    characters: others.map(([char, glyph]) => [char, String.raw`\DeclareUnicodeCharacter{${hex(char)}}{\ensuremath{\mathchar${mathchar(glyph)}}}`, glyph.font.name]),
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
  return `\\DeclareUnicodeCharacter{${hex(char)}}{\\ifmmode\\${accent[1]}{${mathLetter}}\\else\\${accent[0]}{${letter}}\\fi}`;
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
 * libraries, and its glyphs (glyphTable's: the alphabets it uses, letters and digits, the Greek letters and other
 * characters beyond ASCII it has).
 */
export function preambleFor(tex, glyphs = glyphTable(defaultGlyphs)) {
  const fixed = symbols.split('\n').filter(line => used(line, tex)).join('\n');
  const alphabets = glyphs.alphabets.filter(({ name }) => usesCommand(tex, name));
  const characters = glyphs.characters.filter(([char]) => tex.includes(char));
  const greekLetters = glyphs.greek.filter(({ char, command }) => tex.includes(char) || usesCommand(tex, command));
  const greekCommands = new Set([...alphabets.flatMap(({ greek }) => greek), ...greekLetters.map(({ command }) => command)]);
  const glyphFonts = new Set([...alphabets.flatMap(({ fonts }) => fonts), ...glyphs.letters.fonts, ...greekLetters.map(({ font }) => font),
    ...characters.map(([, , font]) => font)]);
  const fonts = glyphs.fonts.filter(({ name }) => glyphFonts.has(name));
  const needed = [
    [cjkCharacter.test(tex), cjkSection],
    [fonts.length, fontSection],
    ...fonts.map(({ name }) => [true, `\\BananaGlyphFont{${name}}`]),
    [alphabets.length, alphabetSection],
    ...alphabets.map(({ definitions }) => [true, definitions]),
    [glyphs.letters.definitions, glyphs.letters.definitions],
    [greekCommands.size, greekSection],
    ...greekLetters.map(({ definition }) => [true, definition]),
    ...[...greekCommands].map(command => [true, `\\BananaGreek{${command}}`]),
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
