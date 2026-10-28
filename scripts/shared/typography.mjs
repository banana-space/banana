/**
 * The site's typography (bananamark's typography option, packages/bananamark/src/syntax/typography.mjs): 。 as ．
 * (a page may keep 。: typography.convertChineseFullStop: false in its front matter), and spaces between Han and
 * quotation marks, which the site's punctuation font draws as Western glyphs.
 */
export const typography = { convertFullStop: true, spaceQuotes: true };

/** A page's own typography, from its front matter, over the site's. */
export const pageTypography = metadata => metadata?.typography?.convertChineseFullStop === false ? { ...typography, convertFullStop: false } : typography;
