"""Build static/fonts/BananaMath-Regular.woff2: the few glyphs KaTeX's fonts lack.

- U+1D7D9 𝟙 (double-struck one), drawn for this site; its outline is taken from an
  existing font that has it, by default the current BananaMath.
- U+A4D8 ꓘ and U+A4F7 ꓷ, KaTeX_Main's K and D mirrored left to right; the site uses
  them for mirrored letters such as \\mathrm{ꓘꓷ}.

The font is a modified KaTeX_Main (SIL OFL 1.1, Reserved Font Name KaTeX_Main; see
static/fonts/BananaMath-OFL.txt), so it is renamed and keeps KaTeX_Main's metrics.
_katex.scss serves it as KaTeX_Main for these code points only. Commutative diagrams
draw 𝟙 with this font too, using its metrics in webGlyphs (scripts/tikz/compiler.mjs);
update them when the glyph changes. Needs fontTools and brotli:
    python3 scripts/fonts/banana-math.py [font-with-𝟙] [KaTeX_Main-Regular.ttf] [output]
"""
import sys
from fontTools.ttLib import TTFont
from fontTools import subset
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.reverseContourPen import ReverseContourPen
from fontTools.pens.cu2quPen import Cu2QuPen

one_source = sys.argv[1] if len(sys.argv) > 1 else 'static/fonts/BananaMath-Regular.woff2'
katex = sys.argv[2] if len(sys.argv) > 2 else 'node_modules/katex/dist/fonts/KaTeX_Main-Regular.ttf'
output = sys.argv[3] if len(sys.argv) > 3 else 'static/fonts/BananaMath-Regular.woff2'

# Read the 𝟙 outline first: the output may be the same file.
one_font = TTFont(one_source)
one_name = one_font.getBestCmap()[0x1D7D9]
one_glyphs = one_font.getGlyphSet()
one_pen = TTGlyphPen(None)
one_glyphs[one_name].draw(Cu2QuPen(one_pen, max_err=1, reverse_direction=one_font.has_key('CFF ')))
one_glyph = one_pen.glyph()
one_advance = one_font['hmtx'][one_name][0]

font = TTFont(katex)
options = subset.Options()
options.layout_features = []
options.name_IDs = ['*']
options.notdef_outline = True
subsetter = subset.Subsetter(options)
subsetter.populate(text='DK')
subsetter.subset(font)
cmap = font.getBestCmap()
mirrored = {cmap[ord('K')]: 0xA4D8, cmap[ord('D')]: 0xA4F7}
glyf, hmtx = font['glyf'], font['hmtx']
glyphs = font.getGlyphSet()
for name in mirrored:
    advance = hmtx[name][0]
    pen = TTGlyphPen(glyphs)
    glyphs[name].draw(TransformPen(ReverseContourPen(pen), (-1, 0, 0, 1, advance, 0)))
    glyph = pen.glyph()
    glyph.recalcBounds(glyf)
    glyf[name] = glyph
    hmtx[name] = (advance, getattr(glyph, 'xMin', 0))

one_glyph.recalcBounds(glyf)
font.setGlyphOrder(font.getGlyphOrder() + ['u1D7D9'])
glyf['u1D7D9'] = one_glyph
hmtx['u1D7D9'] = (one_advance, getattr(one_glyph, 'xMin', 0))
font['maxp'].numGlyphs = len(font.getGlyphOrder())
codes = {**{code: name for name, code in mirrored.items()}, 0x1D7D9: 'u1D7D9'}
for table in font['cmap'].tables:
    table.cmap = {code: name for code, name in codes.items() if code <= 0xFFFF or table.format in (12, 13)}
if not any(table.format == 12 for table in font['cmap'].tables):
    from fontTools.ttLib.tables._c_m_a_p import cmap_format_12
    table = cmap_format_12(12)
    table.platformID, table.platEncID, table.language, table.cmap = 3, 10, 0, dict(codes)
    font['cmap'].tables.append(table)
for record in font['name'].names:
    if record.nameID in (1, 4, 16):
        record.string = 'Banana Math'
    elif record.nameID == 3:
        record.string = 'Banana Math Regular'
    elif record.nameID == 6:
        record.string = 'BananaMath-Regular'
font.flavor = 'woff2'
font.save(output)
print(output, {hex(code): name for code, name in codes.items()})
