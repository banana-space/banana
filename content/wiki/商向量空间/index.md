---
title: 商向量空间
categories: [线性代数]
navboxes: [线性代数]
---

在[[线性代数]]中，
[[向量空间]]的**商向量空间**（简称**商空间**）
是指该向量空间的[[商集]]，
该商集上也有良好定义的向量空间结构。

要构造向量空间 $V$ 的商空间，
需先选取一个[[子向量空间]] $W \subset V$。
则商向量空间 $V / W$ 是由 $W$ 在 $V$ 中的所有平移构成的集合。
换言之，$V / W$ 就是从 $V$ 出发，将 $W$ 的每个平移都分别捏成一个点，而得到的集合。
特别地，$W$ 自身捏成的点就是 $V / W$ 的[[原点]]。

根据上述描述，我们能得到自然的映射 $V \to V / W$，称为**投影**。
它是[[线性映射]]。

此时，我们有向量空间的[[短正合列]]
\[
0 \to W \longrightarrow
V \longrightarrow
V / W \to 0.
\]

## 定义

::: definition [商向量空间]
设 $k$ 是[[域]]，$V$ 是 $k$-[[向量空间]]，
$W \subset V$ 是[[子向量空间]]。

则**商向量空间** $V / W$ 定义如下：

- 对每个 $x \in V$，定义
  \[
  [x] = x + W = \{ x + w \mid w \in W \}
  \]
  为 $W$ 沿 $x$ 的**平移**。

- 定义
  \[
  V / W = \{ [x] \mid x \in V \}
  \]
  为 $W$ 的所有平移的集合。

- 定义 $V / W$ 中的加法如下：对 $x, y \in V$，定义
  \[
  [x] + [y] = [x + y].
  \]
  可以验证这是良好定义的：若 $[x] = [x']$，$[y] = [y']$，
  则 $[x + y] = [x' + y']$。

- 定义 $V / W$ 中的数乘如下：对 $c \in k$ 和 $x \in V$，定义
  \[
  c [x] = [c x].
  \]
  可以验证这是良好定义的：若 $[x] = [x']$，
  则 $[c x] = [c x']$。

可以验证，这样定义的 $V / W$ 确实是向量空间。
:::

## 例子

::: example [平凡情形]
设 $V$ 是向量空间。则 $V / V \simeq 0$，
$V / 0 \simeq V$，这里 $0$ 表示[[零向量空间]]。
:::

::: example [直和的商]
设 $V$、$W$ 是向量空间。则 $(V \oplus W) / V \simeq W$，
其中 $V$ 自然地视为 $V \oplus W$ 的子空间。
:::

## 性质

- 设 $W$ 是 $V$ 的[[子向量空间]]。
  则投影映射 $V \to V / W$ 是[[线性映射]]，且是[[满射]]。
  有向量空间的[[短正合列]]
  \[
  0 \to W \longrightarrow
  V \longrightarrow
  V / W \to 0.
  \]

```terms
商向量空间:
  en: quotient vector space
  fr: espace vectoriel quotient :m
  de: Quotientenvektorraum :m
```
