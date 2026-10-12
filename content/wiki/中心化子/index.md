---
title: 中心化子
categories: [群论]
navboxes: [群论]
---

在[[群论]]中，[[群]] $G$ 的某个子集 $S$ 的**中心化子**
是指与 $S$ 中所有元素交换的元素构成的 $G$ 的[[子群]]。

## 定义

### 对群

::: definition
给定[[群]] $G$，及[[子集]] $S \subset G$，
则 $S$ 在 $G$ 中的**中心化子**是 $G$ 的[[子群]]
\[
Z_G (S) = \set{
  g \in G |
  \text{对所有 } s \in S \text{, 有 } g s = s g
}.
\]
:::

上述定义中，也可以考虑其它代数结构 $G$，
例如[[半群]]、[[环]]、[[结合代数]]等，
也可以考虑带有附加结构的这些代数结构，
例如 [[Lie 群]]、[[代数群]]等。
此时，中心化子是 $G$ 的相应类型的子代数结构。

### 对 Lie 代数

::: definition
给定[[交换环]] $k$ 上的 [[Lie 代数]] $\mathfrak{g}$，
及[[子集]] $S \subset \mathfrak{g}$，
则 $S$ 在 $\mathfrak{g}$ 中的**中心化子**是
$\mathfrak{g}$ 的[[子 Lie 代数]]
\[
Z_{\mathfrak{g}} (S) = \set{
  x \in \mathfrak{g} |
  \text{对所有 } s \in S \text{, 有 } [x, s] = 0
}.
\]
:::

```terms
中心化子:
  en: centralizer
  fr: centralisateur :m
  de: Zentralisator :m
  ja: 中<ちゅう>心<しん>化<か>群<ぐん>
  ko: 중심화 부분군 (中心化部分群)
```
