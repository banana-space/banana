"""Build site/files/fonts/BananaMath-Regular.woff2: the glyph KaTeX's fonts lack.

- U+1D7D9 𝟙 (double-struck one), drawn for this site; its outline is taken from an
  existing font that has it, by default the current BananaMath.

(Mirrored letters are written \\mathreflectbox{\\mathrm{DK}}, which KaTeX draws itself.)

The font is a modified KaTeX_Main (SIL OFL 1.1, Reserved Font Name KaTeX_Main; see
site/files/fonts/BananaMath-OFL.txt), so it is renamed and keeps KaTeX_Main's metrics.
_katex.scss serves it as KaTeX_Main for these code points only. Commutative diagrams
draw 𝟙 with this font too, using its metrics in webGlyphs (packages/bananamark-tikz/src/compiler.mjs);
update them when the glyph changes. Needs fontTools and brotli:
    python3 scripts/fonts/banana-math.py [font-with-𝟙] [KaTeX_Main-Regular.ttf] [output]
"""
import sys
from fontTools.ttLib import TTFont
from fontTools import subset
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.cu2quPen import Cu2QuPen

one_source = sys.argv[1] if len(sys.argv) > 1 else 'site/files/fonts/BananaMath-Regular.woff2'
katex = sys.argv[2] if len(sys.argv) > 2 else 'node_modules/katex/dist/fonts/KaTeX_Main-Regular.ttf'
output = sys.argv[3] if len(sys.argv) > 3 else 'site/files/fonts/BananaMath-Regular.woff2'

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
# KaTeX_Main's tables and metrics, none of its glyphs.
subsetter.populate(unicodes=[])
subsetter.subset(font)
glyf, hmtx = font['glyf'], font['hmtx']

one_glyph.recalcBounds(glyf)
font.setGlyphOrder(font.getGlyphOrder() + ['u1D7D9'])
glyf['u1D7D9'] = one_glyph
hmtx['u1D7D9'] = (one_advance, getattr(one_glyph, 'xMin', 0))
font['maxp'].numGlyphs = len(font.getGlyphOrder())
codes = {0x1D7D9: 'u1D7D9'}
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
