---
title: 直和（线性代数）
categories: [线性代数]
notices:
  - name: 消歧义
    about: 向量空间的直和
    see:
      - topic: 一般代数结构的直和
        page: 直和
navboxes: [线性代数]
---

在[[线性代数]]中，[[向量空间]]的**直和**是把几个向量空间并排放在一起而得到的向量空间。
例如，平面 $\mathbb{R}^2$ 是两条坐标轴的直和 $\mathbb{R} \oplus \mathbb{R}$：
每个向量唯一地分解为水平分量与竖直分量之和。

直和有两种看法，二者本质上相同。
**外直和**从给定的几个向量空间出发，构造新的向量空间，
其元素是由各空间中的元素组成的组；
**内直和**则是把给定的向量空间分解为几个[[子向量空间|子空间]]，
使得每个向量唯一地写成各子空间中向量的和。

有限个向量空间的直和与它们的[[直积（线性代数）|直积]]相同。
对于无限多个向量空间，直和只包含有限个分量非零的元素，因而小于直积。

## 定义

### 外直和

::: definition [直和] {@def:external}
设 $k$ 是[[域]]，$(V_i)_{i \in I}$ 是一族 $k$-向量空间。
它们的**直和**，记为
\[
\bigoplus_{i \in I} V_i ,
\]
是由满足以下条件的族 $(v_i)_{i \in I}$ 构成的集合：
对每个 $i \in I$，$v_i \in V_i$，且只有有限个 $i$ 使得 $v_i \neq 0$。
其加法和数乘逐个分量进行：
\[
\begin{aligned}
  (v_i)_{i \in I} + (w_i)_{i \in I} & = (v_i + w_i)_{i \in I} , \\
  c \, (v_i)_{i \in I} & = (c v_i)_{i \in I} .
\end{aligned}
\]
:::

当 $I = \{ 1, \dotsc, n \}$ 是有限集时，直和也记为 $V_1 \oplus \cdots \oplus V_n$，
其元素写成 $(v_1, \dotsc, v_n)$。

对每个 $j \in I$，有**典范嵌入** $\iota_j \colon V_j \to \bigoplus_{i \in I} V_i$，
它把 $v \in V_j$ 映到第 $j$ 个分量为 $v$、其余分量为 $0$ 的元素。
这是单射线性映射，通过它可以把 $V_j$ 看作直和的子空间。

### 内直和

::: definition [内直和] {@def:internal}
设 $k$ 是域，$V$ 是 $k$-向量空间，$(W_i)_{i \in I}$ 是 $V$ 的一族子向量空间。
称 $V$ 是这族子空间的**内直和**，记为
\[
V = \bigoplus_{i \in I} W_i ,
\]
如果 $V$ 的每个元素都唯一地写成和 $\sum_{i \in I} w_i$，
其中 $w_i \in W_i$，且只有有限个 $w_i$ 非零。
:::

两种定义的联系如下：
$V$ 是子空间 $(W_i)_{i \in I}$ 的内直和，当且仅当线性映射
\[
\bigoplus_{i \in I} W_i \longrightarrow V, \qquad
(w_i)_{i \in I} \longmapsto \sum_{i \in I} w_i
\]
是[[同构]]，其中左边是外直和。
因此两者使用相同的记号。
反之，外直和 $\bigoplus_{i \in I} V_i$ 是子空间 $\iota_i (V_i)$ 的内直和。

对两个子空间，内直和的条件可以如下检验：

::: proposition [两个子空间的直和] {@prop:two}
设 $V$ 是向量空间，$W_1, W_2 \subset V$ 是子向量空间。
则 $V = W_1 \oplus W_2$，当且仅当 $W_1 + W_2 = V$ 且 $W_1 \cap W_2 = 0$。
:::

::: proof
$W_1 + W_2 = V$ 恰好是说每个元素都能写成 $w_1 + w_2$ 的形式。
若 $W_1 \cap W_2 = 0$，且 $w_1 + w_2 = w_1' + w_2'$，
则 $w_1 - w_1' = w_2' - w_2 \in W_1 \cap W_2$，故 $w_1 = w_1'$，$w_2 = w_2'$。
反之，若 $0 \neq w \in W_1 \cap W_2$，则 $w = w + 0 = 0 + w$ 是两种不同的写法。
:::

此时，称 $W_2$ 是 $W_1$ 在 $V$ 中的**补空间**。

对三个或更多子空间，两两相交为零并不足以保证直和。
例如，$\mathbb{R}^2$ 中三条不同的经过原点的直线两两相交为零，
但 $\mathbb{R}^2$ 不是它们的直和。
正确的条件是：对每个 $j \in I$，
\[
W_j \cap \sum_{i \neq j} W_i = 0 ,
\]
并且所有 $W_i$ 的和等于 $V$。

## 例子

::: example [空族与零空间]
空族的直和是[[零向量空间]] $0$。
对任何向量空间 $V$，有 $V \oplus 0 \simeq V$。
:::

::: example [坐标空间]
设 $k$ 是域，$n$ 是正整数。
则 $k^n = k \oplus \cdots \oplus k$（$n$ 个 $k$ 的直和）。
写成内直和，即
\[
k^n = k e_1 \oplus \cdots \oplus k e_n ,
\]
其中 $e_1, \dotsc, e_n$ 是标准基。

更一般地，选定向量空间 $V$ 的一组[[基]] $(e_i)_{i \in I}$，
就相当于把 $V$ 写成一维子空间的直和 $V = \bigoplus_{i \in I} k e_i$。
:::

::: example [多项式按次数分解]
设 $k$ 是域。多项式空间 $k[x]$ 是可数多个一维子空间的直和：
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

::: example [对称矩阵与反对称矩阵]
设 $k$ 是特征不为 $2$ 的域，$n$ 是正整数。
则所有 $n \times n$ 矩阵构成的空间是
[[对称矩阵]]与[[反对称矩阵]]构成的子空间的直和：
\[
A = \frac{A + A^\mathrm{T}}{2} + \frac{A - A^\mathrm{T}}{2} .
\]
当 $k$ 的特征为 $2$ 时，反对称矩阵就是对称矩阵，这一分解不成立。
:::

::: example [特征子空间分解]
设 $V$ 是有限维向量空间，$f \colon V \to V$ 是[[可对角化]]的[[线性变换]]。
则 $V$ 是 $f$ 的各个[[特征子空间]]的直和。
:::

## 性质

### 万有性质

::: proposition [万有性质] {@prop:universal}
设 $k$ 是域，$(V_i)_{i \in I}$ 是一族 $k$-向量空间，$U$ 是 $k$-向量空间。
则对任意一族线性映射 $f_i \colon V_i \to U$，
存在唯一的线性映射 $f \colon \bigoplus_{i \in I} V_i \to U$，
使得对所有 $i \in I$，有 $f \circ \iota_i = f_i$。
:::

::: proof
由于直和的元素只有有限个非零分量，
\[
f \bigl( (v_i)_{i \in I} \bigr) = \sum_{i \in I} f_i (v_i)
\]
是有限和，它定义了满足条件的线性映射。
直和中的每个元素都是有限个 $\iota_i (v_i)$ 之和，故 $f$ 是唯一的。
:::

换言之，直和是[[向量空间范畴]]中的[[余积]]，并且有自然的同构
\[
\operatorname{Hom} \Bigl( \bigoplus_{i \in I} V_i , U \Bigr)
\simeq \prod_{i \in I} \operatorname{Hom} (V_i, U) .
\]
当 $I$ 是有限集时，直和同时也是[[积 (范畴论)|积]]，即[[双积]]。

### 维数

::: proposition [直和的基与维数]
设 $(V_i)_{i \in I}$ 是一族向量空间，$B_i$ 是 $V_i$ 的基。
则 $\bigcup_{i \in I} \iota_i (B_i)$ 是 $\bigoplus_{i \in I} V_i$ 的基。
特别地，
\[
\dim \bigoplus_{i \in I} V_i = \sum_{i \in I} \dim V_i ,
\]
其中右边是[[基数]]的和。
:::

::: proof
直和的元素只有有限个非零分量，每个分量 $v_i$ 唯一地写成 $B_i$ 中元素的线性组合，
因此直和的元素唯一地写成 $\bigcup_i \iota_i (B_i)$ 中元素的线性组合。
:::

### 补空间

向量空间的每个子空间都有补空间，见[[向量空间]]。
补空间一般不唯一：
例如，在 $\mathbb{R}^2$ 中，任何一条不同于直线 $L$ 的、经过原点的直线都是 $L$ 的补空间。
但子空间 $W \subset V$ 的所有补空间都同构于[[商向量空间]] $V / W$，
因而具有相同的维数。

### 直和分解与投影

::: proposition [直和分解与幂等变换]
设 $V$ 是向量空间。则
\[
p \longmapsto (\operatorname{im} p, \ker p)
\]
给出以下两者之间的一一对应：

- 满足 $p \circ p = p$ 的[[线性变换]] $p \colon V \to V$；

- 满足 $V = W_1 \oplus W_2$ 的有序子空间对 $(W_1, W_2)$。

其逆映射把 $(W_1, W_2)$ 映到**投影** $p (w_1 + w_2) = w_1$，
其中 $w_1 \in W_1$，$w_2 \in W_2$。
:::

::: proof
设 $p \circ p = p$。每个 $v \in V$ 写成 $v = p (v) + (v - p (v))$，
其中 $p (v) \in \operatorname{im} p$，且 $p (v - p (v)) = p (v) - p (v) = 0$。
若 $v = p (u) \in \ker p$，则 $v = p (u) = p (p (u)) = p (v) = 0$。
由 @prop:two，$V = \operatorname{im} p \oplus \ker p$。
反之，由 $V = W_1 \oplus W_2$ 定义的投影 $p$ 满足 $p \circ p = p$，
且 $\operatorname{im} p = W_1$，$\ker p = W_2$。
容易验证两个构造互逆。
:::

### 线性映射的分块

设 $V = V_1 \oplus V_2$，$W = W_1 \oplus W_2$。
由直和与[[直积（线性代数）|直积]]的万有性质，
线性映射 $f \colon V \to W$ 相当于四个线性映射 $f_{ij} \colon V_j \to W_i$，
可以写成[[分块矩阵]]的形式
\[
f =
\begin{pmatrix}
  f_{11} & f_{12} \\
  f_{21} & f_{22}
\end{pmatrix} .
\]
特别地，若 $V = W$，$V_1 = W_1$，$V_2 = W_2$，
则 $f$ 把 $V_1$、$V_2$ 都映到自身，当且仅当 $f_{12} = f_{21} = 0$，
即 $f$ 的矩阵是分块对角的。

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
补空间:
  en: [complement, complementary subspace]
  fr: supplémentaire :m
  de: Komplementärraum :m
```
