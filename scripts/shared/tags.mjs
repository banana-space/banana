import { readFileSync } from 'node:fs';
import { parse } from 'yaml';
import { tagRules } from './syntax-rules.mjs';
import { iconSVG } from './icons.mjs';

/**
 * The site's HTML-style tags, added to bananamark's (its tags option): <see>…</see>, a "see also" line;
 * <person … />, the annotations after a person's name (the name in its own language, a romanization, IPA, the years
 * of their life); and the notices, boxes of their text: <problems> (what the page still lacks or gets wrong, after
 * "本条目存在以下问题："), <disambiguation> (what the page is about, and where its namesakes are) and <tip>. Their
 * text in the page's language comes from messages (bananamark's messages option, given with the tags), as do their
 * errors. Their parameters are in syntax-rules.mjs (also for the editor's completion).
 */

// Read when a page is rendered (the editor's checks in the browser only check the tags' parameters).
let languageNames;
const languageName = code => (languageNames ??= parse(readFileSync(new URL('../../data/language_names.yaml', import.meta.url), 'utf8')))[code];

/** A notice: its text (Markdown of the page) in a box, with the notice's name for screen readers and its icon. */
const notice = (tag, style, icon, intro) => ({
  ...tagRules[tag],
  render: ({ name, inner, page, fragment, message, escape, fail, problem }) => {
    if (!inner.trim()) fail(problem('tag_empty', { name }));
    const text = intro ? `${message(intro(page))}\n\n${inner.trim()}` : inner.trim();
    return `<aside class="notice notice-${style}" aria-label="${escape(message(`${tag}_label`))}">
  <span class="notice-icon">${iconSVG(icon)}</span>
  <div class="notice-content">
  <div class="notice-body">${fragment(text, { block: true })}</div>
  </div>
</aside>\n`;
  },
});
// An article (a page of the wiki) or another page.
const article = page => page.section === 'wiki' && page.isPage;

export const tags = {
  problems: notice('problems', 'warning', 'problem', page => article(page) ? 'problems_article' : 'problems_page'),
  disambiguation: notice('disambiguation', 'info', 'disambiguation'),
  tip: notice('tip', 'info', 'tip'),
  see: {
    ...tagRules.see,
    render: ({ inner, fragment, message, escape, fail, problem }) => {
      if (!inner.trim()) fail(problem('see_empty'));
      return `<div class="see-also"><span class="see-also-label">${escape(message('see_also_label'))}</span>${fragment(inner.trim())}</div>\n`;
    },
  },
  person: {
    ...tagRules.person,
    render: ({ parameters, fragment, message, escape }) => {
      const { original = '', lang = '', ipa = '', translit = '', years = '' } = parameters.named;
      // A Japanese name may carry its reading as in term translations: 字<かな>, [語句]<かな>.
      let originalHTML = escape(original);
      if (lang.startsWith('ja')) {
        const ruby = '<ruby>$1<rp> (</rp><rt>$2</rt><rp>) </rp></ruby>';
        originalHTML = originalHTML.replace(/\[([^\]]+)\]&lt;(.+?)&gt;/g, ruby).replace(/([^\x00-\x7F])&lt;(.+?)&gt;/gu, ruby);
      }
      const label = text => `<span class="person-label" data-typography="boundary">${text}</span> `;
      let parts = [];
      if (original) parts.push(`<span${lang ? ` lang="${lang}"` : ''}>${originalHTML}</span>`);
      if (translit) parts.push(`${label(message('person_transliteration_label'))}<i class="person-transliteration"${lang ? ` lang="${lang}-Latn"` : ''}>${escape(translit)}</i>`);
      if (ipa) parts.push(`${label(message('person_ipa_label'))}<span class="person-ipa" lang="und-fonipa">${escape(ipa)}</span>`);
      const name = lang && parts.length ? languageName(lang) : undefined;
      if (name) parts = [`${label(name)}${parts[0]}`, ...parts.slice(1)];
      if (years) parts.push(`<span class="person-years">${fragment(years)}</span>`);
      return `<span class="person-annotations">${escape(message('annotation_open'))}${parts.join(message('annotation_separator'))}${escape(message('annotation_close'))}</span>`;
    },
  },
};

/** The tags' text in pages, by the page's language, and their errors, by the locale (bananamark's messages option). */
export const messages = {
  'zh-cn': {
    see_also_label: '参见：', person_transliteration_label: '拉丁转写', person_ipa_label: 'IPA',
    problems_label: '问题', problems_article: '本条目存在以下问题：', problems_page: '本页面存在以下问题：',
    disambiguation_label: '消歧义', tip_label: '提示',
    annotation_open: '（', annotation_separator: '，', annotation_close: '）',
    see_empty: 'see 的内容不能为空',
  },
  en: {
    see_also_label: 'See also: ', person_transliteration_label: 'romanized', person_ipa_label: 'IPA',
    problems_label: 'Problems', problems_article: 'This article has the following problems:',
    problems_page: 'This page has the following problems:', disambiguation_label: 'Disambiguation', tip_label: 'Note',
    annotation_open: ' (', annotation_separator: ', ', annotation_close: ')',
    see_empty: '<see> must not be empty',
  },
};
