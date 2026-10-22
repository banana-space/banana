"""Write static/fonts/JetBrainsMono-Cyrillic*.woff2: the letters Commit Mono lacks, from JetBrains Mono.

Commit Mono (the code font) has no Cyrillic and only part of the Greek block. JetBrains Mono has the same
advance width (600 of 1000 units) and similar heights, so a code line mixing the two stays aligned. Only the
Cyrillic and Greek letters that Commit Mono does not have are kept. For each style (upright, italic) there are
two files: -Regular, a fixed instance at weight 350 for normal code, as JetBrains Mono at 400 looks heavier
than Commit Mono; and the variable font (weights 100–800) for bold code. The script prints the unicode-range
for the @font-face rules in _base.scss.

Takes the variable fonts of a JetBrains Mono release (https://github.com/JetBrains/JetBrainsMono, OFL;
fonts/variable/ in the release zip). Needs fontTools and brotli:
    python3 scripts/fonts/jetbrains-mono-cyrillic.py path/to/JetBrainsMono[wght].ttf path/to/JetBrainsMono-Italic[wght].ttf
"""
import sys
from fontTools.ttLib import TTFont
from fontTools import subset
from fontTools.varLib import instancer

REGULAR = 350  # The weight normal code is drawn at.

upright, italic = sys.argv[1:3]
commit = set(TTFont('static/fonts/CommitMono.woff2').getBestCmap())
# Greek and Coptic, Cyrillic, Cyrillic Supplement, Cyrillic Extended-A, -B, -C.
blocks = [(0x370, 0x3FF), (0x400, 0x52F), (0x1C80, 0x1C8F), (0x2DE0, 0x2DFF), (0xA640, 0xA69F)]
available = set(TTFont(upright).getBestCmap())
wanted = sorted(c for start, end in blocks for c in range(start, end + 1) if c in available and c not in commit)

for source, name in ((upright, 'JetBrainsMono-Cyrillic'), (italic, 'JetBrainsMono-Cyrillic-Italic')):
    options = subset.Options()
    options.flavor = 'woff2'
    options.layout_features = ['*']
    options.hinting = False
    options.name_IDs = ['*']
    font = subset.load_font(source, options)
    subsetter = subset.Subsetter(options)
    subsetter.populate(unicodes=wanted)
    subsetter.subset(font)
    subset.save_font(font, f'static/fonts/{name}.woff2', options)
    regular = instancer.instantiateVariableFont(font, {'wght': REGULAR})
    regular['OS/2'].usWeightClass = REGULAR
    subset.save_font(regular, f'static/fonts/{name}-Regular.woff2', options)
    print(f'{name}: {len(wanted)} characters')

# Consecutive characters as ranges, for unicode-range.
ranges, start = [], None
for i, c in enumerate(wanted):
    if start is None: start = c
    if i + 1 == len(wanted) or wanted[i + 1] != c + 1:
        ranges.append(f'U+{start:04X}' + (f'-{c:04X}' if c != start else ''))
        start = None
print('unicode-range:', ', '.join(ranges))
