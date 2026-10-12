---
title: 商群
categories: [群论]
navboxes: [群论]
---

**商群**指将[[群]]中某些元素合并为一个元素，而得到较小群的操作。

## 定义

::: proposition
对群 $G$ 的[[正规子群]] $H$，左[[陪集]]之集 $G / H$ 与右陪集之集 $H \backslash G$
相同，并带有自然的群结构。
:::

::: proof
因为 $H$ 是正规子群，
所以对任何 $g \in G$，有 $g H = H g$。
集合 $G/H$ 上的群结构定义为
\[
\begin{aligned}
  (g_1 H) \cdot (g_2 H)
  & = \set{ g_1 h_1 g_2 h_2 | h_1, h_2 ∈ H } \\
  & = g_1 g_2 H,
\end{aligned}
\]
其单位元为 $H$，元素 $gH$ 的逆元为 $g^{-1} H$。
:::

::: definition
以上构造的群 $G / H$ 称为 $G$ 对 $H$ 的 **商群**。
:::

::: remark
等价地，商群是[[群范畴]]中的[[商对象]]。
:::

## 性质

::: proposition
对群 $G$ 以及其[[正规子群]] $H$，有自然的[[满射|满]][[同态]]
\[
G \twoheadrightarrow G / H, \quad g \mapsto g H.
\]
:::

- [[第一同构定理]]
- [[第二同构定理]]
- [[第三同构定理]]

## 例子

- 群 $G$ 对自身的商 $G/G$ 是[[平凡群]]，这说明平凡群是任意群的商群。

- 群 $G$ 对平凡群的商群 $G/\{1\}$ 与其自身同构。

- 对整数 $n \neq 0$，
  商群 $\mathbb{Z} / n \mathbb{Z}$ 是 $n$ 阶[[循环群]]。

```terms
商群:
  en: quotient group
  de: [Faktorgruppe, Quotientengruppe :f]
  fr: quotient de groupe :m
```
