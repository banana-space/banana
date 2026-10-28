/**
 * The default theorem-like environments (::: kind): each kind's name (one text, or one per language of the page:
 * zh-cn, en), its colour group (the class bm-envgroup-<group>) and whether it is numbered (on the shared counter of
 * its section). A dialect's environments are over these (defineDialect's environments).
 */
export default {
  definition: { name: { 'zh-cn': '定义', en: 'Definition' }, group: 'definition' },
  theorem: { name: { 'zh-cn': '定理', en: 'Theorem' }, group: 'theorem' },
  lemma: { name: { 'zh-cn': '引理', en: 'Lemma' }, group: 'theorem' },
  proposition: { name: { 'zh-cn': '命题', en: 'Proposition' }, group: 'theorem' },
  corollary: { name: { 'zh-cn': '推论', en: 'Corollary' }, group: 'theorem' },
  example: { name: { 'zh-cn': '例', en: 'Example' }, group: 'example' },
  remark: { name: { 'zh-cn': '注', en: 'Remark' }, group: 'remark' },
  notation: { name: { 'zh-cn': '记号', en: 'Notation' }, group: 'definition' },
  conjecture: { name: { 'zh-cn': '猜想', en: 'Conjecture' }, group: 'theorem' },
  exercise: { name: { 'zh-cn': '习题', en: 'Exercise' }, group: 'example' },
  convention: { name: { 'zh-cn': '约定', en: 'Convention' }, group: 'remark', numbered: false },
  proof: { name: { 'zh-cn': '证明', en: 'Proof' }, group: 'proof', numbered: false },
};
