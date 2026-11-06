"""Build site/files/fonts/BananaMath-Regular.woff2: glyphs the site adds to KaTeX's fonts.

- U+1D7D9 𝟙 (double-struck one), drawn for this site; its outline is taken from an
  existing font that has it, by default the current BananaMath.
- Blackboard bold A–Z and k at their own code points: the double-stroke Computer Modern
  Roman of LaTeX's dsfont package (dsrom10, Olaf Kummer, https://ctan.org/pkg/doublestroke).
  KaTeX writes \\mathbb{R} and ℝ as an R in KaTeX_AMS; _katex.scss serves this font under
  another name before KaTeX_AMS there, for these code points only. KaTeX_Main and KaTeX_Math
  have strokes 14–18/1000 em thicker than cmr10 and cmmi10 (stems 104 against 89, hairlines
  46–51 against 31–34) at the same heights; KaTeX_AMS is as thin as msbm10. dsrom10's parts
  shared with cmr10 are as thin as cmr10's. Thickened by the full 15 the double-stroke letters
  look heavier than KaTeX's (two strokes, the counter between them narrowed), so they are
  thickened by half as much (FontForge's changeWeight, keeping the advance and the heights:
  the counters give way).

The font is a modified KaTeX_Main (SIL OFL 1.1, Reserved Font Name KaTeX_Main), so it is
renamed and keeps KaTeX_Main's metrics.
_katex.scss serves it as KaTeX_Main for 𝟙 only. Commutative diagrams
draw 𝟙 and \\mathbb with this font too (scripts/shared/diagrams.mjs), using the metrics this script writes to
scripts/shared/banana-math-metrics.mjs. Needs FontForge (to read Type 1), fontTools and brotli:
    python3 scripts/fonts/banana-math.py [font-with-𝟙] [KaTeX_Main-Regular.ttf] [output] [dsrom10.pfb]
"""
import copy
import sys
import subprocess
import tempfile
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools import subset
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.cu2quPen import Cu2QuPen

one_source = sys.argv[1] if len(sys.argv) > 1 else 'site/files/fonts/BananaMath-Regular.woff2'
katex = sys.argv[2] if len(sys.argv) > 2 else 'node_modules/katex/dist/fonts/KaTeX_Main-Regular.ttf'
output = sys.argv[3] if len(sys.argv) > 3 else 'site/files/fonts/BananaMath-Regular.woff2'
doublestroke = sys.argv[4] if len(sys.argv) > 4 else subprocess.run(['kpsewhich', 'dsrom10.pfb'], capture_output=True, text=True, check=True).stdout.strip()
blackboard_letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZk'
metrics_output = 'scripts/shared/banana-math-metrics.mjs'

# Read the 𝟙 outline first: the output may be the same file.
one_font = TTFont(one_source)
one_name = one_font.getBestCmap()[0x1D7D9]
if 'glyf' in one_font:
    # Copied as it is: drawing it through a pen would drop contours with no on-curve point.
    one_glyph = copy.deepcopy(one_font['glyf'][one_name])
    one_glyph.expand(one_font['glyf'])
else:
    one_pen = TTGlyphPen(None)
    one_font.getGlyphSet()[one_name].draw(Cu2QuPen(one_pen, max_err=1, reverse_direction=True))
    one_glyph = one_pen.glyph()
one_advance = one_font['hmtx'][one_name][0]

# FontForge's Python: argv = [script, source, output, letters, delta].
embolden = '''
import fontforge, sys
source, output, letters, delta = sys.argv[1], sys.argv[2], sys.argv[3], float(sys.argv[4])
font = fontforge.open(source)
for letter in letters:
    glyph = font[letter]
    advance = glyph.width
    glyph.changeWeight(delta, "LCG", 0, 0.9, "squish")
    glyph.transform((1, 0, 0, 1, (advance - glyph.width) / 2, 0))
    glyph.width = advance
    glyph.removeOverlap()
    glyph.correctDirection()
font.generate(output)
'''
stroke_delta = 7.5  # In 1/1000 em: half of KaTeX's strokes against Computer Modern's (see above).

# The blackboard letters, as quadratic outlines (dsrom10 is Type 1: cubic, the other way round).
with tempfile.TemporaryDirectory() as directory:
    otf = Path(directory) / 'dsrom10.otf'
    subprocess.run(['fontforge', '-quiet', '-lang=py', '-c', embolden, doublestroke, str(otf), blackboard_letters, str(stroke_delta)], check=True, capture_output=True)
    ds_font = TTFont(otf)
ds_cmap, ds_glyphs = ds_font.getBestCmap(), ds_font.getGlyphSet()
blackboard = {}
for letter in blackboard_letters:
    name = ds_cmap[ord(letter)]
    pen = TTGlyphPen(None)
    ds_glyphs[name].draw(Cu2QuPen(pen, max_err=1, reverse_direction=True))
    blackboard[f'bb.{letter}'] = (ord(letter), pen.glyph(), ds_font['hmtx'][name][0])

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

added = {'u1D7D9': (0x1D7D9, one_glyph, one_advance), **blackboard}
font.setGlyphOrder(font.getGlyphOrder() + list(added))
for name, (code, glyph, advance) in added.items():
    glyph.recalcBounds(glyf)
    glyf[name] = glyph
    hmtx[name] = (advance, getattr(glyph, 'xMin', 0))
font['maxp'].numGlyphs = len(font.getGlyphOrder())
codes = {code: name for name, (code, _, _) in added.items()}
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

# The glyphs' metrics for diagrams (bananamark-tikz's glyphs, in scripts/shared/diagrams.mjs): width, height and depth
# in em.
def metrics(name):
    glyph = glyf[name]
    return [round(hmtx[name][0] / 1000, 3), round(max(getattr(glyph, 'yMax', 0), 0) / 1000, 3), round(max(-getattr(glyph, 'yMin', 0), 0) / 1000, 3)]
Path(metrics_output).write_text(
    '// Generated by scripts/fonts/banana-math.py: the metrics of BananaMath\'s glyphs that diagrams draw with the page\'s\n'
    '// fonts (scripts/shared/diagrams.mjs), [width, height, depth] in em.\n'
    '/** 𝟙, served as KaTeX_Main. */\n'
    f"export const one = {metrics('u1D7D9')};\n"
    '/** The blackboard letters, served as Banana Math. */\n'
    'export const blackboard = {\n' + '\n'.join(f"  {letter}: {metrics(f'bb.{letter}')}," for letter in blackboard_letters) + '\n};\n')
print(metrics_output)
