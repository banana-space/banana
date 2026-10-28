import { isMap, isScalar, isSeq } from "yaml";
import { languageName } from "bananamark/messages";
import { yamlDocument } from "./yaml.mjs";
import { readMath, typesetText } from "bananamark/internal/markup.mjs";
import { nameParts } from "./names.mjs";
import { t } from "./i18n.mjs";

/**
 * The site's term translations, a data block of bananamark (its syntax/data-blocks.mjs): ```terms holds a mapping of
 * terms to their translations by language, shown at the end of the page. Translations are plain text, with
 * grammatical gender and Japanese ruby.
 */

const genders = new Set(["m", "f", "n", "mf", "pl"]);
/**
 * 术语、译名和附注的文字按正文的 Markdown 排版替换（公式除外）：l'Hôpital's rule → l’Hôpital’s rule，
 * -- → –。日语不替换：注音按字符对应，日语也不用这些符号。
 */
const typeset = (value, lang) => (lang?.split("-")[0] === "ja" ? value : typesetText(value));

function nonempty(value, fail) {
  if (typeof value !== "string" || !value.trim() || /[\r\n]/.test(value))
    fail(t('build_term_text'));
  return value.trim();
}

/**
 * 术语与译名可含行内公式（如 `$\infty$-范畴`）：拆成文字与公式部分，模板逐段渲染。
 * 没有公式时返回 undefined；text 是公式写成线性文字的形式（∞-范畴）。
 */
function mathParts(value, fail) {
  if (!/\$|\\\(/.test(value)) return undefined;
  const parts = nameParts(value, fail);
  return parts.some(part => part.tex !== undefined) ? parts : undefined;
}

/**
 * 注音译名中的行内公式：合并相邻的无注音分段，再按 mathParts 拆出公式，
 * 模板逐段渲染；分段 text 改为公式的线性文字形式。注音的基字不含公式。
 */
function withMath(ruby, fail) {
  const merged = [];
  for (const part of ruby) {
    const last = merged.at(-1);
    if (part.reading === undefined && last && last.reading === undefined)
      last.text += part.text;
    else merged.push({ ...part });
  }
  for (const part of merged) {
    if (part.reading !== undefined) {
      if (mathParts(part.text, fail)) fail(t('build_ruby_format'));
      continue;
    }
    const parts = mathParts(part.text, fail);
    if (parts) {
      part.parts = parts;
      part.text = parts.map((piece) => piece.text).join("");
    }
  }
  return merged;
}

/** A reading binds to one preceding Unicode character, or an explicit [group]. */
function inlineRuby(text, fail) {
  const ruby = [];
  let plain = "",
    cursor = 0;
  const invalid = () =>
    fail(t('build_ruby_format'));
  const flush = () => {
    if (plain) ruby.push({ text: plain });
    plain = "";
  };
  while (cursor < text.length) {
    // 公式原样保留为无注音的一段，其中的 [ < > 不是注音写法，紧随其后的 <假名> 无基字。
    const math = readMath(text, cursor);
    if (math) {
      flush();
      ruby.push({ text: text.slice(cursor, math.end) });
      cursor = math.end;
      continue;
    }
    const character = String.fromCodePoint(text.codePointAt(cursor));
    if (character === "[") {
      const group = text.slice(cursor).match(/^\[([^\[\]<>]+)\]<([^<>]+)>/u);
      if (group) {
        flush();
        ruby.push({
          text: nonempty(group[1], fail),
          reading: nonempty(group[2], fail),
        });
        cursor += group[0].length;
        continue;
      }
    }
    if (character === "<") {
      const reading = text.slice(cursor).match(/^<([^<>]+)>/u);
      const characters = [...plain],
        base = characters.pop();
      if (!reading || !base || /[\s\[\]<>]/u.test(base)) invalid();
      plain = characters.join("");
      flush();
      ruby.push({ text: base, reading: nonempty(reading[1], fail) });
      cursor += reading[0].length;
      continue;
    }
    if (character === ">") invalid();
    plain += character;
    cursor += character.length;
  }
  flush();
  return ruby;
}

export function translation(value, lang, fail) {
  let data;
  if (typeof value === "string") {
    let text = typeset(nonempty(value, fail), lang),
      gender;
    const suffix = text.match(/\s+:([a-z]+)$/);
    if (suffix) {
      if (!genders.has(suffix[1])) fail(t('build_gender_suffix', { Suffix: suffix[1] }));
      gender = suffix[1];
      text = nonempty(text.slice(0, suffix.index), fail);
    }
    data = { text, ...(gender ? { gender } : {}) };
    if (lang.split("-")[0] === "ja" && /[<>]/.test(text)) {
      const ruby = inlineRuby(text, fail);
      data.text = ruby.map((part) => part.text).join("");
      data.ruby = ruby;
    }
  } else {
    if (!value || typeof value !== "object" || Array.isArray(value))
      fail(t('build_translation_mapping'));
    for (const key of Object.keys(value))
      if (!["text", "reading", "ruby", "gender", "note"].includes(key))
        fail(t('build_translation_unknown_field', { Key: key }));
    data = { ...value, text: typeset(nonempty(value.text, fail), lang) };
    if (data.reading !== undefined && data.ruby !== undefined)
      fail(t('build_reading_and_ruby'));
    if (data.reading !== undefined) {
      if (Array.isArray(data.reading)) {
        const characters = [...data.text];
        if (data.reading.length !== characters.length)
          fail(t('build_reading_length'));
        data.ruby = characters.map((text, index) => ({
          text,
          ...(data.reading[index] === null
            ? {}
            : { reading: nonempty(data.reading[index], fail) }),
        }));
      } else
        data.ruby = [
          { text: data.text, reading: nonempty(data.reading, fail) },
        ];
      delete data.reading;
    } else if (data.ruby !== undefined) {
      if (!Array.isArray(data.ruby) || !data.ruby.length)
        fail(t('build_ruby_list'));
      data.ruby = data.ruby.map((part) => {
        if (
          !part ||
          typeof part !== "object" ||
          Array.isArray(part) ||
          Object.keys(part).some((key) => !["text", "reading"].includes(key))
        )
          fail(t('build_ruby_fields'));
        return {
          text: nonempty(part.text, fail),
          ...(part.reading === undefined
            ? {}
            : { reading: nonempty(part.reading, fail) }),
        };
      });
      if (data.ruby.map((part) => part.text).join("") !== data.text)
        fail(t('build_ruby_text'));
    }
  }
  if (data.gender !== undefined && !genders.has(data.gender))
    fail(t('build_gender_value'));
  if (data.note !== undefined) data.note = typeset(nonempty(data.note, fail));
  if (data.ruby && lang.split("-")[0] !== "ja")
    fail(t('build_ruby_language'));
  if (data.ruby) {
    data.ruby = withMath(data.ruby, fail);
    data.text = data.ruby.map((part) => part.text).join("");
  }
  const parts = data.ruby ? undefined : mathParts(data.text, fail);
  if (parts) {
    data.parts = parts;
    data.text = parts.map((part) => part.text).join("");
  }
  return data;
}

/** A ```terms block's content: its terms, [{ title, titleParts?, lang?, entries }]; errors by fail(message, offset). */
export function readTerms(source, fail) {
  const doc = yamlDocument(source, fail);
  if (!isMap(doc.contents) || !doc.contents.items.length)
    fail(t('build_terms_mapping'), 0);
  const values = doc.toJS({ maxAliasCount: 50 });
  const terms = doc.contents.items.map((pair) => {
    const at = (node) => node?.range?.[0] ?? pair.key.range[0];
    if (!isScalar(pair.key)) fail(t('build_term_name'), at(pair.key));
    const title = nonempty(pair.key.value, (message) =>
      fail(message, at(pair.key)),
    );
    if (!isMap(pair.value) || !pair.value.items.length)
      fail(t('build_term_languages'), at(pair.value));
    // 保留字段 lang 标注术语本身（标题）的语言，如人名原文的 ja。
    let titleLang;
    const items = pair.value.items.filter((item) => {
      if (item.key?.value !== 'lang') return true;
      titleLang = item.value?.value;
      if (typeof titleLang !== 'string' || !/^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/.test(titleLang))
        fail(t('build_term_language_code'), at(item.value));
      return false;
    });
    if (!items.length) fail(t('build_term_languages'), at(pair.value));
    const entries = items.map((item) => {
      const lang = item.key?.value;
      if (
        typeof lang !== "string" ||
        !/^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/.test(lang)
      )
        fail(t('build_term_language_code'), at(item.key));
      let label;
      try {
        label = languageName(lang);
      } catch {
        fail(t('build_term_language_invalid', { Language: lang }), at(item.key));
      }
      const value = values[pair.key.value][lang];
      const variants = Array.isArray(value) ? value : [value];
      if (!variants.length) fail(t('build_translation_empty'), at(item.value));
      return {
        lang,
        label,
        variants: variants.map((value, index) =>
          translation(value, lang, (message) =>
            fail(
              `${title}/${lang}: ${message}`,
              at(isSeq(item.value) ? item.value.items[index] : item.value),
            ),
          ),
        ),
      };
    });
    const typesetTitle = typeset(title, titleLang);
    const titleParts = mathParts(typesetTitle, (message) => fail(message, at(pair.key)));
    return {
      title: titleParts ? titleParts.map((part) => part.text).join("") : typesetTitle,
      ...(titleParts ? { titleParts } : {}),
      ...(titleLang ? { lang: titleLang } : {}),
      entries,
    };
  });
  return terms;
}

/** The block as bananamark's dataBlocks take it; onData gives a list of terms for each block. */
export const termsBlock = { read: (source, { fail }) => readTerms(source, fail), outsideEnvironments: true };
