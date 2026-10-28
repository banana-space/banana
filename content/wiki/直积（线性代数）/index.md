---
title: 直积（线性代数）
categories: [线性代数]
navboxes: [线性代数]
---

<disambiguation>
本条目介绍的是向量空间的直积。关于一般代数结构的直积，请参见[[直积]]。
</disambiguation>

在[[线性代数]]中，一族[[向量空间]]的**直积**是其[[积集]]，带有自然的向量空间结构。

有限个向量空间的直积与其[[直和（线性代数）|直和]]相同，
而对于无限多个向量空间，直和是直积的子空间，由只有有限个分量非零的元素构成。
此时直积一般比直和大得多。

## 定义

::: definition [直积]
设 $k$ 是[[域]]，$(V_i)_{i \in I}$ 是一族 $k$-向量空间。
其**直积**是[[积集]]
\[
\prod_{i \in I} V_i = \{ (v_i)_{i \in I} \mid v_i \in V_i \} ,
\]
带有逐个分量的加法和数乘：
\[
\begin{aligned}
  (v_i)_{i \in I} + (w_i)_{i \in I} & = (v_i + w_i)_{i \in I} , \\
  c \, (v_i)_{i \in I} & = (c v_i)_{i \in I} .
\end{aligned}
\]
:::

当所有 $V_i$ 都等于同一个向量空间 $V$ 时，直积也记为 $V^I$，
它就是所有映射 $I \to V$ 构成的集合。

对每个 $j \in I$，有**投影** $p_j \colon \prod_{i \in I} V_i \to V_j$，
它把 $(v_i)_{i \in I}$ 映到 $v_j$。

## 例子

::: example [空族与有限族]
空族的直积是[[零向量空间]] $0$。
当 $I$ 是有限集时，直积与直和相同，
例如 $k^n = k \times \cdots \times k = k \oplus \cdots \oplus k$。
:::

::: example [函数空间]
设 $k$ 是域，$X$ 是集合。
则 $k^X$ 是所有函数 $X \to k$ 构成的向量空间，
其运算是逐点的加法和数乘。
许多函数空间是它的子空间，
例如，对[[拓扑空间]] $X$，[[连续函数]]空间 $C (X)$ 是 $\mathbb{R}^X$ 的子空间。
:::

::: example [数列与形式幂级数]
设 $k$ 是域。
所有数列 $(a_0, a_1, a_2, \dotsc)$ 构成的空间是直积 $k^\mathbb{N}$，
其中只有有限项非零的数列构成子空间 $\bigoplus_{n \in \mathbb{N}} k$。
通过系数，[[形式幂级数]]的空间 $k[[x]]$ 同构于 $k^\mathbb{N}$，
而其中的多项式空间 $k[x]$ 对应于直和 $\bigoplus_{n \in \mathbb{N}} k$。
:::

## 性质

### 万有性质

<see>[[万有性质]]</see>

::: proposition [万有性质]
设 $k$ 是域，$(V_i)_{i \in I}$ 是一族 $k$-向量空间，$U$ 是 $k$-向量空间。
则对任意一族线性映射 $f_i \colon U \to V_i$，
存在唯一的线性映射 $f \colon U \to \prod_{i \in I} V_i$，
使得对所有 $i \in I$，有 $p_i \circ f = f_i$，
即 $f (u) = (f_i (u))_{i \in I}$。
:::

换言之，直积是[[向量空间范畴]]中的[[积 (范畴论)|积]]，并且有自然的同构
\[
\operatorname{Hom} \Bigl( U, \prod_{i \in I} V_i \Bigr)
\simeq \prod_{i \in I} \operatorname{Hom} (U, V_i) .
\]

### 与直和的关系

直和 $\bigoplus_{i \in I} V_i$ 是直积 $\prod_{i \in I} V_i$ 的子空间，
由只有有限个分量 $v_i$ 非零的元素 $(v_i)_{i \in I}$ 构成。

由[[直和（线性代数）|直和]]的万有性质，取 $U = k$，得到：

::: proposition [直和的对偶]
设 $(V_i)_{i \in I}$ 是一族向量空间。则有自然的同构
\[
\Bigl( \bigoplus_{i \in I} V_i \Bigr)^\vee \simeq \prod_{i \in I} V_i^\vee ,
\]
其中 $V^\vee$ 表示 $V$ 的[[对偶空间]]。
:::

特别地，若向量空间 $V$ 有一组基 $B$，
则 $V \simeq \bigoplus_{b \in B} k$，
从而 $V^\vee \simeq \prod_{b \in B} k \simeq k^B$。

```terms
直积:
  en: direct product
  fr: produit direct :m
  de: direktes Produkt :n
```
