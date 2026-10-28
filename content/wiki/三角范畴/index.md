---
title: 三角范畴
categories: [同调代数]
---

<problems>
- “性质”“例子”各节需要扩充。
- “问题”一节需要扩充，例如锥的非函子性，以及同伦交换与同伦连贯的区别。
</problems>

**三角范畴**是带有额外结构的[[范畴]]，
是[[同调代数]]中[[导出范畴]]的结构的一种公理化描述。

从当代的观点看，三角范畴的结构可以自然地放进[[稳定同伦论]]的框架中。
三角范畴可以看成[[稳定 $\infty$-范畴]]在普通范畴论中的“影子”，
因为稳定 $\infty$-范畴的[[同伦范畴]]就是三角范畴，
而三角范畴的一些构造在稳定 $\infty$-范畴中更加自然（@问题）。

## 定义

::: definition [三角范畴]
**三角范畴**由以下信息组成：

- [[加性范畴]] $\mathcal{C}$。

- [[范畴等价]] $T \colon \mathcal{C} \to \mathcal{C}$，
  称为**平移函子**。对 $X \in \mathcal{C}$ 及[[整数]] $n$，记
  \[
  X [n] = T^n X.
  \]

- 一族**正合三角**，即 $\mathcal{C}$ 中一族选定的形如
  \[
  X \xrightarrow{f}
  Y \xrightarrow{g}
  Z \xrightarrow{h}
  X [1]
  \]
  的映射列。

它们满足以下公理：

- （**TR1**）

  - 正合三角被[[同构]]保持：
    同构于正合三角的三角也是正合三角。

  - 对任何 $X \in \mathcal{C}$，
    \[
    X \xrightarrow{\mathbb{1}_X}
    X \longrightarrow
    0 \longrightarrow
    X [1]
    \]
    是正合三角。

  - 对 $\mathcal{C}$ 中任何态射 $f \colon X \to Y$，
    都存在正合三角
    \[
    X \xrightarrow{f}
    Y \longrightarrow
    Z \longrightarrow
    X [1].
    \]

- （**TR2**）
  三角
  \[
  X \xrightarrow{f}
  Y \xrightarrow{g}
  Z \xrightarrow{h}
  X [1]
  \]
  是正合三角，当且仅当
  \[
  Y \xrightarrow{g}
  Z \xrightarrow{h}
  X [1] \xrightarrow{-f[1]}
  Y [1]
  \]
  是正合三角。

- （**TR3**）
  给定正合三角
  \[
  \begin{gathered}
    X \xrightarrow{f}
    Y \xrightarrow{g}
    Z \xrightarrow{h}
    X [1], \\
    X' \xrightarrow{f'}
    Y' \xrightarrow{g'}
    Z' \xrightarrow{h'}
    X' [1],
  \end{gathered}
  \]
  及交换图表
  \[
  \begin{tikzcd}
    X \ar[r, "f"] \ar[d, "a"'] &
    Y \ar[d, "b"] \\
    X' \ar[r, "f'"] &
    Y' \rlap{ ,}
  \end{tikzcd}
  \]
  存在（不一定唯一的）态射 $c \colon Z \to Z'$，使图表
  \[
  \begin{tikzcd}
    X \ar[r, "f"] \ar[d, "a"] &
    Y \ar[r, "g"] \ar[d, "b"] &
    Z \ar[r, "h"] \ar[d, "c"] &
    X [1] \ar[d, "{a[1]}"] \\
    X' \ar[r, "f'"] &
    Y' \ar[r, "g'"] &
    Z' \ar[r, "h'"] &
    X' [1]
  \end{tikzcd}
  \]
  交换。

- （**TR4**，**八面体公理**）
  给定正合三角
  \[
  \begin{gathered}
    X \xrightarrow{f}
    Y \xrightarrow{k}
    Y/X \xrightarrow{p}
    X [1], \\
    Y \xrightarrow{g}
    Z \xrightarrow{l}
    Z/Y \xrightarrow{q}
    Y [1], \\
    X \xrightarrow{h}
    Z \xrightarrow{m}
    Z/X \xrightarrow{r}
    X [1],
  \end{gathered}
  \]
  满足 $h = g \circ f$，
  则存在正合三角
  \[
  Y/X \xrightarrow{u}
  Z/X \xrightarrow{v}
  Z/Y \xrightarrow{w}
  (Y/X) [1],
  \]
  使得图表
  \[
  \begin{tikzcd}[column sep = {3em,between origins}, row sep = 2em]
    X \ar[rr, "h"] \ar[dr, "f"'] &&
    Z \ar[rr, "l"] \ar[dr, "m"'] &&
    Z/Y \ar[rr, "w"] \ar[dr, "q"'] && (Y/X)[1] \\
    & Y \ar[ur, "g"'] \ar[dr, "k"'] &&
    Z/X \ar[ur, "v"'] \ar[dr, "r"'] &&
    Y[1] \ar[ur, "{k[1]}"'] \\
    && Y/X \ar[rr, "p"'] \ar[ur, "u"'] &&
    X[1] \ar[ur, "{f[1]}"']
  \end{tikzcd}
  \]
  交换。

:::

::: remark
- 上述 (TR1–TR4) 沿用了 [@Verdier1996] 的编号。
  但事实上 (TR3) 是多余的，它可以由其它公理推出来。

- 公理 (TR4) 又称为八面体公理，因为其中的图表可以写成如下形式：
  \[
  \begin{tikzcd}[column sep = {5.2em,between origins}, row sep = {3em,between origins}]
    & Y \ar[dr, "g"] \ar[dddl, "k"] \\
    X \ar[ur, "f"] \ar[rr, crossing over, "h"'] &&
    Z \ar[dd, "l"] \ar[dddl, crossing over, "m"'] \\
    \\
    Y/X \ar[uu, dashed, "p"] \ar[dr, "u"'] &&
    Z/Y \ar[uuul, dashed, "q"] \ar[ll, dashed, "w"'] \\
    & Z/X \ar[uuul, dashed, crossing over, "r"'] \ar[ur, "v"']
  \end{tikzcd}
  \]
  其中虚线箭头表示从起点到终点的平移的态射。
  在八个三角形面中，有四个正合三角和四个交换的三角；
  另外，有两个连接 $Y$ 与 $Z/X$ 的交换四边形。

  八面体公理描述的是[[第三同构定理]]的类比，即
  $(Z/X)/(Y/X) \simeq Z/Y$。

:::

## 性质

## 例子

## 问题 {@问题}

## 参考文献

原始文献：

```bibliography
Verdier1996:
  type: book
  author: 'Verdier, Jean-Louis'
  year: 1996
  title: Des catégories dérivées des catégories abéliennes
  series: Astérisque
  number: 239
  publisher: Société Mathématique de France
  zbmath: '0882.18010'
```

```terms
三角范畴:
  en: triangulated category
  fr: catégorie triangulée
  de: triangulierte Kategorie
正合三角:
  en: distinguished triangle
  fr: triangle distingué
  de: ausgezeichnetes Tripel
```
