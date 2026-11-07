// TeX font metric (TFM) files for custom glyphs (preamble.mjs's glyphTable): a font TeX sets as its own, whose
// characters have the metrics given, so that italic corrections and accent skews work as for TeX's letters.
// The format is TeX's (tex.web, part 30; tftopl.web), as the engine and its DVI converter read it.

// The skew character is the last code, which the DVI converter never reads (it stops one short), and is empty.
const skewchar = 255;
const designSize = 10;

// A TFM keeps at most 15 heights and 15 depths besides 0 (63 italic corrections): close values share one, the
// largest of them, so that a glyph never has less room than it needs. The closest neighbours are joined first.
function shared(values, limit) {
  const groups = [...new Set(values.filter(value => value !== 0))].sort((a, b) => a - b).map(value => [value]);
  while (groups.length > limit) {
    let best = 0;
    for (let i = 1; i < groups.length - 1; i++) {
      if (groups[i + 1].at(-1) - groups[i][0] < groups[best + 1].at(-1) - groups[best][0]) best = i;
    }
    groups.splice(best, 2, [...groups[best], ...groups[best + 1]]);
  }
  const index = new Map([[0, 0]]);
  groups.forEach((group, i) => group.forEach(value => index.set(value, i + 1)));
  return { table: [0, ...groups.map(group => group.at(-1))], index };
}

// A fix_word: 12 bits of integer and 20 of fraction, in units of the design size (em).
const fixWord = value => Math.round(value * 2 ** 20) >>> 0;

/**
 * A TFM file: characters is a Map from code (0 to 254) to [width, height, depth, italic correction, skew] in em (each
 * less than 16). The skew is a kern with character 255, the font's \skewchar, which the font has (empty).
 * The font has no space and an x-height of 0.431em, as KaTeX's maths.
 */
export function writeTfm(characters) {
  const chars = new Map(characters).set(skewchar, [0, 0, 0, 0, 0]);
  const metric = i => [...chars.values()].map(values => values[i] ?? 0);
  const widths = [0, ...new Set(metric(0))];
  const heights = shared(metric(1), 15), depths = shared(metric(2), 15), italics = shared(metric(3), 63);
  const skews = [...new Set(metric(4).filter(value => value !== 0))];
  const codes = [...chars.keys()], bc = Math.min(...codes), ec = Math.max(...codes);
  const info = [];
  for (let code = bc; code <= ec; code++) {
    const values = chars.get(code);
    if (!values) { info.push(0, 0, 0, 0); continue; }
    const [width, height, depth, italic = 0, skew = 0] = values;
    // Width index 0 means no character: an empty one (the skew character) has a 0 of its own further on. Tag 1: a
    // lig/kern program, here one step, the kern with the skew character.
    info.push(widths.indexOf(width, 1), heights.index.get(height) << 4 | depths.index.get(depth),
      italics.index.get(italic) << 2 | (skew ? 1 : 0), skew ? skews.indexOf(skew) : 0);
  }
  // Each step stops (128), with the skew character, as a kern (128 + the kern's index).
  const ligKern = skews.flatMap((_, i) => [128, skewchar, 128 + (i >> 8), i & 255]);
  const params = [0, 0, 0, 0, 0.431, 1, 0]; // slant, space, stretch, shrink, x-height, quad, extra space
  const lh = 18; // header: checksum, design size, coding scheme (40 bytes), family (20 bytes), face; as tftopl writes
  const tables = [widths, heights.table, depths.table, italics.table];
  const lengths = [lh, bc, ec, ...tables.map(table => table.length), ligKern.length / 4, skews.length, 0, params.length];
  const lf = 6 + lh + (ec - bc + 1) + lengths.slice(3).reduce((a, b) => a + b, 0);
  const view = new DataView(new ArrayBuffer(lf * 4));
  let p = 0;
  const half = n => { view.setUint16(p, n); p += 2; };
  const word = n => { view.setUint32(p, n); p += 4; };
  const byte = n => { view.setUint8(p, n); p += 1; };
  const bcpl = (text, size) => { const start = p; byte(text.length); for (const char of text) byte(char.charCodeAt(0)); p = start + size; };
  [lf, ...lengths].forEach(half);
  word(0); word(fixWord(designSize)); bcpl('BANANA GLYPHS', 40); bcpl('BANANA', 20); word(0);
  info.forEach(byte);
  for (const table of tables) table.forEach(value => word(fixWord(value)));
  ligKern.forEach(byte);
  skews.forEach(value => word(fixWord(value)));
  params.forEach(value => word(fixWord(value)));
  if (p !== lf * 4) throw new Error('bananamark-tikz: TFM length mismatch');
  return new Uint8Array(view.buffer);
}
