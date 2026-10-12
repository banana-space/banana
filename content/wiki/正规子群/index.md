---
title: 正规子群
categories: [群论]
navboxes: [群论]
---

**正规子群**是在[[共轭作用]]下不变的[[子群]]。
只有正规子群才能用来定义[[商群]]。

## 定义

::: definition {@def-norsubgrp}
[[群]] $G$ 的[[子群]] $H$ 是**正规子群**，
如果对任意 $g \in G$ 和 $h \in H$，有
\[
g h g^{-1} \in H.
\]
等价地说，我们有
\[
g H g^{-1} = H.
\]
此时，我们记 $H \lhd G$。
:::

::: remark
在上述定义中，由 $h \mapsto g h g^{-1}$ 的映射称为 $g$ 的**共轭作用**，
记为 $\operatorname{Ad}_g$。
上述定义即等价于说 $H$ 对 $G$ 中任意元素的共轭作用下稳定。
:::

::: remark
条件 $g H g^{-1} = H$ 等价于
\[
g H = H g,
\]
即 $H$ 的左[[陪集]]与右陪集相同。
:::

## 性质

::: proposition
对群 $G$ 的正规子群 $H$，左[[陪集]]之集 $G / H$ 与右陪集之集 $H \backslash G$
相同，并带有自然的群结构。
:::

::: proof
因为 $H$ 是正规子群，
所以对任何 $g \in G$，有 $g H = H g$。
集合 $G/H$ 上的群结构定义为
\[
\begin{aligned}
  (g_1 H) \cdot (g_2 H)
  & = \{ g_1 h_1 g_2 h_2 \mid h_1, h_2 \in H \} \\
  & = g_1 g_2 H,
\end{aligned}
\]
其单位元为 $H$，元素 $gH$ 的逆元为 $g^{-1} H$。
:::

::: definition
以上构造的群 $G / H$ 称为 **[[商群]]**。
:::

## 例子

- 对任意群，其本身和[[平凡群]]均是其正规子群。

- [[群同态]]的[[核 (代数)|核]]是正规子群。
  这是群的[[第一同构定理]]的一部分。

  - [[特殊线性群]]是[[一般线性群]]的正规子群。

- 包含于群的[[中心 (群)|中心]]的子群为正规子群，
  这是因为[[共轭作用]]在中心上的限制为[[恒等映射]]。

- [[Abel 群]]的任何子群均为正规子群，这是上一例的特例。

```terms
正规子群:
  en: normal subgroup
  de: [Normalteiler :m, normale Untergruppe :f]
  fr: sous-groupe normal :m
正规:
  en: normal
  de: normal
  fr: normal
```
