"""Add the `halt` feature to static/fonts/BananaPunctuation-*.woff2, in place.

`halt` gives each punctuation glyph a narrower alternate spacing by trimming its
empty side: opening brackets lose space on the left, closing brackets and the
sentence punctuation on the right. Browsers that implement `text-spacing-trim`
(Chromium) use it to trim punctuation at line starts and between adjacent
punctuation; without `halt` they do nothing. The kern pairs stay as they are, for
browsers without `text-spacing-trim`.

Running it again replaces the feature. Needs fontTools (and brotli for woff2):
    python3 scripts/fonts/banana-punctuation.py [font.woff2 ...]
"""
import sys
from fontTools.ttLib import TTFont
from fontTools.ttLib.tables import otTables
from fontTools.otlLib.builder import buildSinglePos, buildValue, buildLookup

fonts = sys.argv[1:] or [f'static/fonts/BananaPunctuation-{weight}.woff2'
                         for weight in ('Regular', 'Medium', 'SemiBold')]

# Trim in font units (1000 per em; the full punctuation width is 850).
opening, closing = '〈《「『【〔〖（［｛', '〉》」』】〕〗）］｝'
trims = {**{char: 400 for char in opening + closing},
         **{char: 400 for char in '。．'}, **{char: 225 for char in '、，：；'}}

for path in fonts:
    font = TTFont(path)
    cmap = font.getBestCmap()
    gpos = font['GPOS'].table
    values = {cmap[ord(char)]: buildValue({'XAdvance': -trim, **({'XPlacement': -trim} if char in opening else {})})
              for char, trim in trims.items()}
    lookup = buildLookup(buildSinglePos(values, font.getReverseGlyphMap()))

    records = [record for record in gpos.FeatureList.FeatureRecord if record.FeatureTag not in ('chws', 'halt')]
    kern = next(record for record in records if record.FeatureTag == 'kern')
    lookups = gpos.LookupList.Lookup
    used = {index for record in records for index in record.Feature.LookupListIndex}
    # Drop a previous run's lookup, which only `halt` used.
    kept = [i for i in range(len(lookups)) if i in used]
    renumber = {old: new for new, old in enumerate(kept)}
    gpos.LookupList.Lookup = [lookups[i] for i in kept] + [lookup]
    for record in records:
        record.Feature.LookupListIndex = [renumber[i] for i in record.Feature.LookupListIndex]
        record.Feature.LookupCount = len(record.Feature.LookupListIndex)

    def feature(tag, indices):
        record = otTables.FeatureRecord()
        record.FeatureTag = tag
        record.Feature = otTables.Feature()
        record.Feature.FeatureParams = None
        record.Feature.LookupListIndex = list(indices)
        record.Feature.LookupCount = len(indices)
        return record
    halt = feature('halt', [len(gpos.LookupList.Lookup) - 1])
    chws = feature('chws', kern.Feature.LookupListIndex)
    records = sorted(records + [chws, halt], key=lambda record: record.FeatureTag)
    gpos.FeatureList.FeatureRecord = records
    gpos.FeatureList.FeatureCount = len(records)
    gpos.LookupList.LookupCount = len(gpos.LookupList.Lookup)

    # Every script and language system gets every feature.
    for script in gpos.ScriptList.ScriptRecord:
        systems = [script.Script.DefaultLangSys] + [record.LangSys for record in script.Script.LangSysRecord]
        for system in filter(None, systems):
            system.FeatureIndex = list(range(len(records)))
            system.FeatureCount = len(records)
    font.save(path)
