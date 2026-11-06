import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defaultGlyphs, tikz } from 'bananamark-tikz';
import { blackboard, one } from './banana-math-metrics.mjs';

const root = fileURLToPath(new URL('../../', import.meta.url));

/**
 * The glyphs diagrams draw in the page's fonts, as formulas have them (site/styles/_katex.scss): \mathscr in
 * KaTeX_Script (bananamark-tikz's own), and the site's BananaMath: the blackboard letters, served as Banana Math, and
 * 𝟙 (\mathbb{1}, see math.mjs), served as KaTeX_Main. Other blackboard letters stay TeX's msbm.
 */
export const siteGlyphs = [
  ...defaultGlyphs,
  { alphabet: '\\mathbb', family: 'Banana Math', metrics: blackboard },
  { family: 'KaTeX_Main', metrics: { '𝟙': one } },
];

/**
 * The site's TikZ diagrams (bananamark-tikz) for an output directory: compiled diagrams kept in .build/tikz-cache/
 * (shared by every build in this checkout; deploy/deploy.sh copies it to the API's checkout), fonts in
 * <output>/fonts/tikzjax/, glyphs siteGlyphs. options: as tikz()'s (timeout, totalTimeout, workerIdleTimeout).
 */
export const siteDiagrams = (output, options = {}) => tikz({
  cache: join(root, '.build/tikz-cache'), fonts: { directory: join(output, 'fonts/tikzjax') }, locale: 'zh-cn', glyphs: siteGlyphs, ...options,
});
