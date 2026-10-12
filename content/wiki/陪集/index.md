---
title: 陪集
categories: [群论]
---

**陪集**描述一个[[群]]对它的某个[[子群]]的“商”（@def-coset）。

## 定义

::: definition {@def-coset}
对群 $G$ 与其子群 $H$，下述二者为[[等价关系]]

- $g_1 \sim_\ell g_2$，如存在 $h \in H$ 使 $g_1 h = g_2$。

- $g_1 \sim_r g_2$，如存在 $h \in H$ 使 $h g_1 = g_2$。

由第一个等价关系定义的集合称为**左陪集**，记为 $G / H$，
则 $g$ 所在的等价类为 $g H$，即
\[
\{g h \mid h \in H\}.
\]
由第二个等价关系定义的集合称为**右陪集**，记为 $H \backslash G$，
则 $g$ 所在的等价类记作 $H g$，即
\[
\{h g \mid h \in H\}.
\]
:::

## 性质

::: proposition
$G / H$ 与 $H \backslash G$ 有自然双射，由 $g H \mapsto H g^{-1}$ 给出。
:::

::: definition
$G / H$（或 $H \backslash G$）的[[势]]称为 $H$ 在 $G$ 中的**指数**。
:::

::: proposition
如 $G$ 为[[有限群]]，
\[
| G / H | = | H \backslash G | = \frac {| G |} {| H |}.
\]
其中 $| \cdot |$ 表示一个集合的[[基数]]。
:::

::: proof
$G / H$ 与 $H \backslash G$ 中每个等价类均含有 $| H |$ 个元素。
这些等价类的并为 $G$，则共有 $| G | / | H |$ 个等价类，即
$G / H$ 与 $H \backslash G$ 均有 $| G | / | H |$ 个元素。
:::

::: corollary [Lagrange]
对有限群的任意子群 $H$，$H$ 的元素个数整除 $G$ 的元素个数。
:::

::: proposition
对群 $G$ 的[[正规子群]] $H$，左陪集 $G / H$ 与右陪集 $H \backslash G$
二者具有同构的群结构。
:::

::: proof
群结构由

- 乘法
  $(g_1 H) \cdot (g_2 H) = g_1 g_2 H \in G / H$，
  $(H g_1) \cdot (H g_2) = H g_1 g_2 \in H \backslash G$。

- 单位元
  $e H \in G / H$，$H e \in H \backslash G$。

- 逆元
  $(g H)^{-1} = g^{-1} H \in G / H$，
  $(H g)^{-1} = H g^{-1} \in H \backslash G$

分别给出。
同构由 $g H \mapsto H g$ 给出。
:::

::: definition
对上述 $G, H$，$G / H$ 和 $H \backslash G$ 统称为商群，记为 $G / H$。
:::

## 例子

- 如 $H = G$，则左陪集 $G / H$ 与右陪集 $H \backslash G$ 均为单点集。

- 如 $H$ 为平凡群，则左陪集 $G / H$ 与右陪集 $H \backslash G$ 均与
  $G$ 有自然双射。

```terms
陪集:
  en: coset
  de: Nebenklasse :f
  fr: classe (suivant un sous-groupe) :f
  ja: 剰<じょう>余<よ>類<るい>
  ko: 剩餘類
指数:
  en: index
  ja: 指<し>数<すう>
  ko: 指數
```
