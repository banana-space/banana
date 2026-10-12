---
title: 区间
aliases: [开区间, 闭区间, 半开区间, 半开半闭区间]
categories: [序论]
notices:
  - name: 消歧义
    about: '[[偏序集]]上的区间'
    see:
      - topic: '[[拓扑空间]] $I = [0, 1]$'
        page: 区间（拓扑空间）
---

[[实数]]上的**区间**是指介于两个给定的数之间的数的集合。
这一概念也可以推广到一般的[[偏序集]]。

## 定义

::: definition [区间]
设 $X$ 是[[偏序集]]（例如 $X = \mathbb{R}$），设 $a, b \in X$。
$X$ 中的**区间**是指以下任意一种 $X$ 的子集：

- **闭区间**：
  \[
  [a, b] =
  \{ x \in X \mid a \leq x \leq b \}.
  \]

- **半开区间**（或**半开半闭区间**）：
  \[
  \begin{aligned}
    [ a, b \mathclose{[}
    & =
    \{ x \in X \mid a \leq x < b \}, \\
    \mathopen{]} a, b ]
    & =
    \{ x \in X \mid a < x \leq b \}, \\
    [ a, \infty \mathclose{[}
    & =
    \{ x \in X \mid a \leq x \}, \\
    \mathopen{]} -\infty, b ]
    & =
    \{ x \in X \mid x \leq b \}.
  \end{aligned}
  \]

- **开区间**：
  \[
  \begin{aligned}
    \mathopen{]} a, b \mathclose{[}
    & =
    \{ x \in X \mid a < x < b \}, \\
    \mathopen{]} a, \infty \mathclose{[}
    & =
    \{ x \in X \mid a < x \}, \\
    \mathopen{]} -\infty, b \mathclose{[}
    & =
    \{ x \in X \mid x < b \}, \\
    \mathopen{]} -\infty, \infty \mathclose{[}
    & =
    X.
  \end{aligned}
  \]

:::

```terms
区间:
  en: interval
  de: Intervall :n
  fr: intervalle :m
  grc: διάστημα :n
  la: intervallum :n
闭区间:
  en: closed interval
  de: abgeschlossenes Intervall
  fr: intervalle fermé
  grc: κλειστὸν διάστημα
  la: intervallum clausum
半开区间:
  en: half-open interval
  de: halboffenes Intervall
  fr: intervalle semi-ouvert
  grc: ἡμιανοικτὸν διάστημα
  la: intervallum semi-apertum
开区间:
  en: open interval
  de: offenes Intervall
  fr: intervalle ouvert
  grc: ἀνοικτὸν διάστημα
  la: intervallum apertum
```
