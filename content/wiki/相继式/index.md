---
title: 相继式
categories: [证明论]
navboxes: [逻辑学]
---

在[[逻辑学]]中，**相继式**（或称**假言判断**、**条件判断**）
是描述命题之间的推理关系的表达式，
它一般是描述数学的[[元语言]]的一部分，且会和[[推理规则]]结合使用。

相继式格式如下：

\[
前因 \vdash 后果
\]

其中：

- **前因**是一些[[判断]]（参见[[语境]]），
- **后果**也是[[判断]]，
- $\vdash$ 符号表示从前因可以推出后果。

判断可以粗略地理解为元语言中的[[命题]]。
因此，我们可以这样阅读它：

- 若前因成立，那么可以证明后果。
- 前因推出后果。

等等。若前因和后果中包含多个表达式的话，
一般认为前因是由[[与]]关系连接，而后果是由[[或]]关系连接，形成某种对称性。

## 与推理规则的关系

相继式可以看作是一种压缩的[[推理规则]]：
\[
前因 \vdash 后果 \qquad 等价于 \qquad \cfrac{前因}{后果}
\]
将推理规则压缩为相继式后，可以把这些相继式视为命题，去讨论它们之间的推理规则。

[[直觉主义相继式]]最多有一个后果，
这导致[[经典相继式演算]]中对[[排中律]]的证明无法生效。

## 历史与参考文献

最早由 [[Gerhard Gentzen]] 提出相继式的概念时，
由德语中表示“后果”的单词 Konsequenz 演化出 sequenz 这一称呼：

```bibliography
Gentzen:
  type: article
  title: Untersuchungen über das logische Schließen I
  author: Gerhard Gentzen
  year: 1935
  doi: 10.1007/BF01201353
  journaltitle: Mathematische Zeitschrift
```

后来才演变为今天的拼写方式。
[[Per Martin-Löf]] 在作品中指出 Gentzen 的相继式中去掉前因和后果的对称性后的
“这种形式的假言判断是我需要的”：

```bibliography
PML:
  type: article
  title: On the Meanings of the Logical Constants and the Justifications of the Logical Laws
  author: Per Martin-Löf
  url: http://docenti.lett.unisi.it/files/4/1/1/6/martinlof4.pdf
  year: 1996
  journaltitle: Nordic Journal of Philosophical Logic
```

并且将判断的概念和命题分离开。参见[[Martin-Löf 类型论]]。

后来由 [[Frank Pfenning]] 在他的讲义中将相继式直接称为“假言判断”：

```bibliography
FP:
  type: article
  title: A judgmental reconstruction of modal logic
  author: [Frank Pfenning, Rowan Davies]
  year: 2000
  url: http://www.cs.cmu.edu/~fp/papers/mscs00.pdf
```

```terms
相继式:
  en: sequent
假言判断:
  en: hypothetical judgment
前因:
  en: antecedent
后果:
  en: succedent
```
