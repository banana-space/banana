---
title: 特征值
aliases: [特征向量]
categories: [线性代数]
navboxes: [线性代数]
---

在[[线性代数]]中，
[[线性变换]]的**特征值**是一组用来描述该线性变换的数。
具体来说，对线性变换 $f \colon V \to V$，
其特征值是数 $\lambda$，使得存在非零向量 $v \in V$，满足方程
\[
f (v) = \lambda v,
\]
其中 $v$ 称为特征值 $\lambda$ 的**特征向量**。

例如，若 $V = \mathbb{R}^2$ 是平面，$f$ 是沿 $x$ 轴的翻转，即 $f (x, y) = (x, -y)$，
则 $f$ 的特征值为 $1$ 和 $-1$，
因为
\[
f (1, 0) = (1, 0), \qquad
f (0, 1) = (0, -1).
\]

若 $V$ 是有限维向量空间，则 $V$ 上线性变换的特征值就是其[[特征多项式]]的[[根]]。
因此，在[[代数闭域]]上，$n$ 维空间上的线性变换就有 $n$ 个特征值，
但这些特征值可能重复。

## 定义

::: definition [特征值]
设 $k$ 是[[域]]，$V$ 是 $k$-[[向量空间]]，
$f \colon V \to V$ 是 $V$ 上的[[线性变换]]。

称元素 $\lambda \in k$ 为 $f$ 的**特征值**，
如果存在非零元素 $v \in V$，使得
\[
f (v) = \lambda v.
\]
此时，称 $v$ 为特征值 $\lambda$ 的**特征向量**。
:::

```terms
特征值:
  en: eigenvalue
  fr: valeur propre :m
  de: Eigenwert :m
特征向量:
  en: eigenvector
  fr: vecteur propre :m
  de: Eigenvektor :m
```
