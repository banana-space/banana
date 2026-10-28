/**
 * bananamark/bibliography: an author's structured name ({ family, given } or { literal }, as resolvePersonLink gets
 * it) written out, for matching it to a site's pages: fullName ("Serre, Jean-Pierre"; a Chinese name family and given
 * name together, 丘成桐), naturalName ("Jean-Pierre Serre"; 丘成桐), isChineseName (its family name in Han characters).
 * A literal name is itself.
 */
export { fullName, isChineseName, naturalName } from './syntax/bibliography.mjs';
