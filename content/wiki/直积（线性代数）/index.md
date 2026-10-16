---
title: 直积（线性代数）
categories: [线性代数]
notices:
  - name: 消歧义
    about: 向量空间的直积
    see:
      - topic: 一般代数结构的直积
        page: 直积
  - name: 问题
    items:
      - Erdős–Kaplansky 定理需要证明或参考文献。
navboxes: [线性代数]
---

在[[线性代数]]中，一族[[向量空间]]的**直积**是由各空间中的元素组成的所有族构成的向量空间，
其加法和数乘逐个分量进行。
例如，所有实数列 $(a_0, a_1, a_2, \dotsc)$ 构成的空间就是可数多个 $\mathbb{R}$ 的直积。

有限个向量空间的直积与它们的[[直和（线性代数）|直和]]相同，
通常写成直和 $V_1 \oplus \cdots \oplus V_n$。
对于无限多个向量空间，直和只包含有限个分量非零的元素，是直积的真子空间。
二者的差别在[[对偶空间]]中尤为明显：直和的对偶空间是各对偶空间的直积。

## 定义

::: definition [直积]
设 $k$ 是[[域]]，$(V_i)_{i \in I}$ 是一族 $k$-向量空间。
它们的**直积**是[[积集]]
\[
\prod_{i \in I} V_i = \{ (v_i)_{i \in I} \mid \text{对所有 } i \in I, \ v_i \in V_i \} ,
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

直和 $\bigoplus_{i \in I} V_i$ 是直积 $\prod_{i \in I} V_i$ 的子空间。
二者相等，当且仅当只有有限个 $V_i$ 不为零。

由[[直和（线性代数）|直和]]的万有性质，取 $U = k$，得到：

::: proposition [直和的对偶]
设 $(V_i)_{i \in I}$ 是一族向量空间。则有自然的同构
\[
\Bigl( \bigoplus_{i \in I} V_i \Bigr)^* \simeq \prod_{i \in I} V_i^* ,
\]
其中 $V^*$ 表示 $V$ 的[[对偶空间]]。
:::

特别地，若向量空间 $V$ 有一组基 $B$，
则 $V \simeq \bigoplus_{b \in B} k$，故 $V^* \simeq k^B$：
$V$ 上的[[线性函数]]由它在基上的值决定，而这些值可以任意选取。

### 维数

直积的维数可以远大于直和的维数：

::: theorem [Erdős–Kaplansky 定理]
设 $k$ 是域，$V$ 是无限维 $k$-向量空间。则
\[
\dim V^* = |k|^{\dim V} ,
\]
其中右边是[[基数]]的幂。
:::

由于 $|k| \geq 2$，由 [[Cantor 定理]]，此时 $\dim V^* > \dim V$。
因此，对无限集 $I$，有 $\dim k^I = |k|^{|I|} > |I| = \dim \bigoplus_{i \in I} k$；
并且无限维向量空间不同构于它的对偶空间，这与有限维的情形不同。

```terms
直积:
  en: direct product
  fr: produit direct :m
  de: direktes Produkt :n
```
