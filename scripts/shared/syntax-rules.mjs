import { alignTagRule, spoilerTagRule } from 'bananamark/rules';

/**
 * What the site adds to bananamark's dialect, as rules only (no rendering, nothing read from files), for the
 * editor in the browser, whose completion needs them (bananamark-codemirror): the site's HTML-style tags with
 * their parameters and how they are completed, and its data blocks' names. tags.mjs and syntax.mjs add the rest.
 */
export const tagRules = {
  align: alignTagRule,
  spoiler: spoilerTagRule,
  see: { paired: true, completion: { snippet: '<see>${}</see>' } },
  // Notices: at the top of the page; problems also in the section they are about.
  problems: { paired: true, completion: { snippet: '<problems>\n- ${}\n</problems>' } },
  disambiguation: { paired: true, completion: { snippet: '<disambiguation>\n${}\n</disambiguation>' } },
  tip: { paired: true, completion: { snippet: '<tip>\n${}\n</tip>' } },
  // After a name: **Name** <person lang="fr" years="1900--1980" />. At least one of what it shows.
  person: {
    attachToPrevious: true, // To what comes before: the spaces between are dropped.
    named: { original: { reading: true }, lang: { language: true }, translit: {}, ipa: {}, years: {} },
    requireOneOf: ['original', 'translit', 'ipa', 'years'],
    completion: { snippet: '<person ${} />', then: true },
  },
};

export const dataBlockNames = ['terms'];
