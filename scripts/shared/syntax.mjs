import { alignTag, defineDialect, spoilerTag } from 'bananamark';
import { termsBlock } from './terms.mjs';
import { messages as tagMessages, tags } from './tags.mjs';
import { environments } from './environments.mjs';
import { rewriteMath } from './math.mjs';
import { dialectLanguages } from './dialect.mjs';

/** bananamark's messages as the site words them: an article's title is in its front matter. */
const messages = {
  'zh-cn': { ...tagMessages['zh-cn'], heading_level_one: '百科正文不能使用一级标题；请在 front matter 中填写 title' },
  en: { ...tagMessages.en, heading_level_one: 'an article cannot use first-level headings; give its title in the front matter' },
};

/**
 * The site's dialect (bananamark's defineDialect), for every call into bananamark (the prebuild, the renderer, the
 * editor's checks in the browser): TikZ, wiki links and bibliographies on; its theorem-like environments
 * (data/theorems.yaml); its data blocks (```terms, terms.mjs, highlighted as YAML); its HTML-style tags (bananamark's
 * <align> and <spoiler>, and <see>, <person>, tags.mjs) with their text; its wording of bananamark's messages; its
 * changes to formulas (math.mjs).
 */
export const siteDialect = defineDialect({
  environments,
  dataBlocks: { terms: termsBlock },
  tags: { align: alignTag, spoiler: spoilerTag, ...tags },
  messages,
  codeLanguages: dialectLanguages,
  rewriteMath,
  tikz: true,
  wikiLinks: true,
  bibliography: true,
});

/** The options every call into bananamark takes: the dialect, and errors in Chinese (a page's language is its own). */
export const siteSyntax = { dialect: siteDialect, locale: 'zh-cn' };
