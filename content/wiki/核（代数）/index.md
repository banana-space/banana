---
title: 核（代数）
aliases: [Ker]
categories: [一般代数, 范畴论]
notices:
  - name: 消歧义
    see:
      - page: 核
navboxes: [范畴论]
---

一个[[映射]] $f \colon X \to Y$ 的**核**
是被 $f$ 映到零元 $0 \in Y$ 的元素的集合，
通常记为
\[
\ker f
= \{ x \in X \mid f (x) = 0 \},
\]
这里 $Y$ 带有某种[[代数结构]]，使得零元 $0 \in Y$ 的概念是有意义的。

与核[[对偶]]的概念是[[余核]]。

## 例子

### 对带点集合的映射

带点集合的映射的核是一种基本的核。

::: definition [带点集合，标记点] {@def-pointed-set}
**[[带点集合]]** 是指一个二元组 $(X, *)$，
其中 $X$ 是[[集合]]，$* \in X$ 是一个元素，称为**标记点**。
带点集合之间的映射要求把标记点映到标记点。
:::

::: definition [带点集合的映射的核] {@def-kernel-pointed-sets}
设 $f \colon (X, *_X) \to (Y, *_Y)$ 是带点集合的映射（@def-pointed-set）。
则 $f$ 的**核**定义为
\[
\ker f = f^{-1} (*_Y).
\]
:::

### 对群同态

[[群]]同态的核是带点集合的映射的核（@def-kernel-pointed-sets）
的特例，我们将群的单位元视作标记点。

::: definition [群同态的核] {@def-kernel-groups}
设 $f \colon G \to H$ 是[[群]]同态。
则 $f$ 的**核**定义为
\[
\ker f = f^{-1} (e),
\]
其中 $e$ 是 $H$ 的单位元。
:::

群同态 $f \colon G \to H$ 的核是 $G$ 的[[子群]]。

### 对环同态

[[环]]同态的核是群同态的核（@def-kernel-groups）
的特例，这里考虑的是环的加法群。

::: definition [环同态的核] {@def-kernel-rings}
设 $f \colon A \to B$ 是[[环]]同态。
则 $f$ 的**核**定义为
\[
\ker f = f^{-1} (0).
\]
:::

环同态 $f \colon A \to B$ 的核是 $A$ 的[[双边理想]]。

### 对模同态

[[模]]同态的核是群同态的核（@def-kernel-groups）
的特例，这里考虑的是模的加法群。

::: definition [模同态的核] {@def-kernel-modules}
设 $A$ 是环，
$f \colon M \to N$ 是 $A$-左[[模]]之间的同态。
则 $f$ 的**核**定义为
\[
\ker f = f^{-1} (0).
\]
:::

模同态 $f \colon M \to N$ 的核是 $M$ 的[[子模]]。

### 对线性映射

在 @def-kernel-modules 中，如果 $A$ 是[[域]]，
那么 $A$-模就是 $A$-[[向量空间]]，
该定义可以重新叙述如下。

::: definition [线性映射的核] {@def-kernel-vector-spaces}
设 $\mathbb{k}$ 是[[域]]，
$f \colon V \to W$ 是 $\mathbb{k}$-[[线性映射]]。
则 $f$ 的**核**定义为
\[
\ker f = f^{-1} (0).
\]
:::

线性映射 $f \colon V \to W$ 的核是 $V$ 的[[线性子空间]]。

## 一般定义

::: definition [核] {@def-kernel-as-pullback}
设 $\mathcal{C}$ 是[[范畴]]，
带有[[零对象]] $0 \in \mathcal{C}$。
设 $f \colon X \to Y$ 是 $\mathcal{C}$ 中的态射。
则 $f$ 的**核**（如果存在）定义为以下[[拉回 (范畴论)|拉回]]：
\[
\begin{tikzcd}
  \ker f \ar[d] \ar[r] \ar[dr, phantom, pos=.2, "\ulcorner"] &
  0 \ar[d] \\
  X \ar[r, "f"] &
  Y \rlap{.}
\end{tikzcd}
\]
有时，我们也将上述图表中的态射 $\ker f \to X$
称为 $f$ 的**核**。
:::

::: remark
@def-kernel-as-pullback 中的拉回可以等价地表述为下面的[[泛性质]]：
对任意态射 $g \colon Z \to X$，如果 $f \circ g = 0$，
那么存在唯一态射 $Z \to \ker f$，
使得复合态射 $Z \to \ker f \to X$ 等于 $g$。
:::

::: remark
如果要将环同态的核（@def-kernel-rings）
视为 @def-kernel-as-pullback 的特例，
就需要考虑[[无幺环]]的范畴，
因为环同态的核不再具有幺元。
:::

```terms
核:
  en: kernel
  de: Kern :m
  fr: noyau :m
  grc: πυρήν :m
  la: nucleus :m
```
