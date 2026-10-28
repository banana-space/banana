import { fullName, isChineseName, naturalName } from 'bananamark/bibliography';

/**
 * 文献作者与香蕉空间传记条目的对应：站点的功能，以 resolvePersonLink 交给 bananamark（作者写了 page 字段时不经过这里）。
 */

const han = /\p{Script=Han}/u;

/**
 * 传记条目的姓名索引，供文献作者链接到条目（bananamark 的 resolvePersonLink）。people：[{ key, names }]，names 为
 * 条目标题与别名（匹配键）。match(name) 返回唯一匹配的条目，否则 undefined：
 * 全名与标题或别名相同；或者姓相同，名字依次相符（缩写 J.-P. 对应 Jean-Pierre，可省略中间名的缩写），且只有一个条目符合。
 */
export function personIndex(people) {
  const fold = value => value.normalize('NFD').replace(/\p{M}/gu, '').replace(/[’‘`]/g, "'").toLowerCase();
  const words = value => fold(value).split(/[\s‐-]+|(?<=\.)(?=\S)/u).filter(Boolean)
    .map(word => ({ text: word.replace(/\.$/, ''), short: word.endsWith('.') || word.length === 1 }));
  const exact = new Map(), parsed = [];
  for (const { key, names } of people) for (const name of names) {
    exact.set(fold(name), key);
    if (!han.test(name)) parsed.push({ key, words: words(name).map(word => word.text) });
  }
  // The author's given names in order among the page's, the first with the first; a middle initial may be missing.
  const fits = (given, rest) => {
    let j = 0;
    return given.every((word, i) => {
      const fit = page => word.short ? page.startsWith(word.text) : page === word.text;
      if (i === 0) return rest.length > 0 && fit(rest[j++]);
      const found = rest.slice(j).findIndex(fit);
      if (found >= 0) { j += found + 1; return true; }
      return word.short;
    });
  };
  return {
    match(name) {
      const whole = name.literal ?? (isChineseName(name) ? fullName(name) : naturalName(name));
      const found = exact.get(fold(whole));
      if (found || name.literal || isChineseName(name) || !name.given) return found;
      const family = words(name.family).map(word => word.text), given = words(name.given);
      const keys = new Set();
      for (const person of parsed) {
        const n = person.words.length - family.length;
        if (n > 0 && family.every((word, i) => person.words[n + i] === word) && fits(given, person.words.slice(0, n))) keys.add(person.key);
      }
      return keys.size === 1 ? [...keys][0] : undefined;
    },
  };
}
