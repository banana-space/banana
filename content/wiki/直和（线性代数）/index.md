---
title: 直和（线性代数）
categories: [线性代数]
navboxes: [线性代数]
---

<disambiguation>
本条目介绍的是向量空间的直和。关于一般代数结构的直和，请参见[[直和]]。
</disambiguation>

在[[线性代数]]中，
一族[[向量空间]]的**直和**是一个由它们组合而成的向量空间，
其中每个向量都能唯一地写成原来向量空间中的向量之和。
例如，平面 $\mathbb{R}^2$ 是两条坐标轴的直和 $\mathbb{R} \oplus \mathbb{R}$。

有时将直和分为以下两种，但它们本质上相同：

- **外直和**，即从一族向量空间出发，抽象地造出一个新的向量空间；

- **内直和**，即给定一个向量空间和其中的一族[[子向量空间|子空间]]，
  在原向量空间内部做直和，得到新的子空间。

有限个向量空间的直和与它们的[[直积（线性代数）|直积]]相同。
对于无限多个向量空间，直和是直积的子空间，由只有有限个分量非零的元素构成。

## 定义

### 外直和

::: definition [直和] {@def:external}
设 $k$ 是[[域]]，$(V_i)_{i \in I}$ 是一族 $k$-向量空间。
它们的**直和**
\[
\bigoplus_{i \in I} V_i
\]
是由满足以下条件的族 $(v_i)_{i \in I}$ 构成的向量空间：
对每个 $i \in I$，$v_i \in V_i$，且只有有限个 $i$ 使得 $v_i \neq 0$。
其加法和数乘逐个分量进行。
:::

当 $I = \{ 1, \dotsc, n \}$ 时，直和也记为 $V_1 \oplus \cdots \oplus V_n$，
其元素写成 $(v_1, \dotsc, v_n)$。
每个 $V_j$ 可以看作直和的子空间，
即第 $j$ 个分量之外都为 $0$ 的元素构成的子空间。

### 内直和

::: definition [内直和] {@def:internal}
设 $k$ 是域，$V$ 是 $k$-向量空间，$(W_i)_{i \in I}$ 是 $V$ 的一族子向量空间。
定义**和空间**
\[
\sum_{i \in I} W_i =
\biggl\{ \sum_{i \in I} w_i \in V \biggm| w_i \in W_i
\text{ 且只有有限个 $w_i$ 非零} \biggr\}.
\]
如果和空间 $W = \sum_{i \in I} W_i$
的每个元素都唯一地写成 $\sum_{i \in I} w_i$ 的形式，
其中 $w_i \in W_i$ 且只有有限个 $w_i$ 非零，
则称这个和是**直和**，或**内直和**，记为
\[
W = \bigoplus_{i \in I} W_i \subset V .
\]
:::

例如，对两个子空间 $W_1, W_2 \subset V$，
其和 $W_1 + W_2$ 是直和当且仅当 $W_1 \cap W_2 = 0$。

对三个或更多子空间，两两相交为零并不足够。
例如，$\mathbb{R}^2$ 中三条不同的经过原点的直线两两相交为零，
但它们的和不是直和。

## 例子

::: example [坐标空间]
设 $k$ 是域，$e_1, \dotsc, e_n$ 是 $k^n$ 的标准基。则
\[
k^n = k e_1 \oplus \cdots \oplus k e_n .
\]
更一般地，选定向量空间 $V$ 的一组[[基]] $(e_i)_{i \in I}$，
就相当于把 $V$ 分解为一维子空间的直和 $V = \bigoplus_{i \in I} k e_i$。
:::

::: example [多项式按次数分解]
设 $k$ 是域。多项式空间 $k[x]$ 分解为可数多个一维子空间的直和：
\[
k[x] = \bigoplus_{n \geq 0} k x^n .
\]
相应的直积 $\prod_{n \geq 0} k x^n$ 则可以看作[[形式幂级数]]的空间 $k[[x]]$。
:::

::: example [偶函数与奇函数]
记 $V$ 为所有函数 $f \colon \mathbb{R} \to \mathbb{R}$ 构成的实向量空间，
$V_+$、$V_-$ 分别为偶函数与奇函数构成的子空间。
则 $V = V_+ \oplus V_-$：每个函数唯一地分解为
\[
f (x) = \frac{f (x) + f (-x)}{2} + \frac{f (x) - f (-x)}{2} ,
\]
右边第一项是偶函数，第二项是奇函数。
:::

::: example [特征子空间分解]
设 $V$ 是有限维向量空间，$f \colon V \to V$ 是[[线性变换]]。
则 $f$ 的各个[[特征子空间]]的和总是直和；
它等于 $V$，当且仅当 $f$ [[可对角化]]。
:::

## 性质

### 维数

设 $(V_i)_{i \in I}$ 是一族向量空间，$B_i$ 是 $V_i$ 的基。
则各个 $B_i$ 的并是 $\bigoplus_{i \in I} V_i$ 的基，因此
\[
\dim \bigoplus_{i \in I} V_i = \sum_{i \in I} \dim V_i .
\]

### 万有性质

<see>[[万有性质]]</see>

从直和出发的线性映射，相当于从每个分量出发的一族线性映射：
对任意向量空间 $U$，有自然的同构
\[
\operatorname{Hom} \Bigl( \bigoplus_{i \in I} V_i , U \Bigr)
\simeq \prod_{i \in I} \operatorname{Hom} (V_i, U) ,
\]
它把 $f$ 映到 $f$ 在各个 $V_i$ 上的限制。
换言之，直和是[[向量空间范畴]]中的[[余积]]。
当 $I$ 是有限集时，直和同时也是[[积 (范畴论)|积]]，即[[双积]]。

```terms
直和:
  en: direct sum
  fr: somme directe :f
  de: direkte Summe :f
外直和:
  en: external direct sum
  fr: somme directe externe :f
  de: äußere direkte Summe :f
内直和:
  en: internal direct sum
  fr: somme directe interne :f
  de: innere direkte Summe :f
```
