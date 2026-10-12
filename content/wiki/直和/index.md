---
title: 直和
categories: [一般代数, 范畴论]
navboxes: [范畴论]
---

**直和**是[[代数学]]中的一种构造。
一族[[代数结构]] $(X_i)_{i \in I}$ 的直和，记为
\[
X = \bigoplus_{i \in I} X_i ,
\]
通常由形如
\[
x = (x_i)_{i \in I}
\]
的元素构成，其中 $x_i \in X_i$，且其中只有有限个不是[[零元]]。
特别地，有限个代数结构的直和常常与其[[积 (范畴论)|积]]相同。

直和也可以在一般的[[范畴]]中定义。
当范畴具有[[双积]]时，直和与双积相同。

## 例子

### 对模

::: definition
设 $R$ 是[[环]]，$(X_i)_{i \in I}$ 是一族 $R$-[[左模]]。
则这族模的**直和**，记为
\[
X = \bigoplus_{i \in I} X_i,
\]
也是一个 $R$-左模，其元素形如
\[
x = (x_i)_{i \in I},
\]
其中 $x_i \in X_i$，且其中只有有限个非零。
其加法、标量乘法都逐个分量定义。
:::

特别地，

- 若 $R$ 是[[域]]，则这定义了[[向量空间]]的直和。

- 若取 $R = \mathbb{Z}$，则这定义了 [[Abel 群]]的直和。

### 对群

::: definition
设 $(G_i)_{i \in I}$ 是一族[[群]]。
则其**直和**，记为
\[
G = \bigoplus_{i \in I} G_i,
\]
也是一个群，其元素形如
\[
g = (g_i)_{i \in I},
\]
其中 $g_i \in G_i$，且其中只有有限个不是相应群中的单位元。
其乘法逐个分量定义。
:::

## 一般定义

::: definition [直和]
设 $\mathcal{C}$ 是带有[[零对象]]、[[积]]、[[余积]]、[[像 (范畴论)|像]]的[[范畴]]。
设 $(X_i \in \mathcal{C})_{i \in I}$ 是一族[[对象]]。
考虑态射
\[
r \colon \coprod_{i \in I} X_i \longrightarrow
\prod_{i \in I} X_i,
\]
它将每个 $X_i$ 以[[恒同态射]]映到右边的 $X_i$，
而以[[零态射]]映到右边的其它 $X_j$。
则 $(X_i)_{i \in I}$ 的**直和**定义为 $r$ 的[[像 (范畴论)|像]]，
从而有分解
\[
\coprod_{i \in I} X_i \longrightarrow
\bigoplus_{i \in I} X_i \longrightarrow
\prod_{i \in I} X_i.
\]
:::

```terms
直和:
  en: direct sum
  fr: somme directe :f
  de: direkte Summe :f
```
