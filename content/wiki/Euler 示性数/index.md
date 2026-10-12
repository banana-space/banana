---
title: Euler 示性数
categories: [同调论]
---

**Euler 示性数**是[[拓扑空间]]的一个代数不变量，
它对每个拓扑空间赋予一个整数，
以反映此拓扑空间的信息。

Euler 示性数最早起源于[[凸多面体]]的 [[Euler 公式]]
$V + F - E = 2$，其中 $V$ 表示顶点数；
$F$ 表示面数，$E$ 表示边数，
这即是说[[球面]]的 Euler 示性数是 2。
作为推广，对一般的拓扑空间，
它的 Euler 示性数定义是它的[[奇异上同调|上同调]]维数的交错和。

Euler 示性数的概念也可类比至其它数学对象上，
例如[[链复形]]、[[层]]、[[代数簇]]上。

## 定义

::: definition
[[拓扑空间]] $X$ 的 **Euler 示性数**是
\[
\chi(X) = \sum_{i = 0}^\infty (-1)^i h^i(X),
\]
其中 $h^i(X)$ 表示 $X$ 的第 $i$ 阶[[奇异上同调]]
（作为 $\mathbb{Z}$-模）的[[秩 (模论)|秩]]
（我们假定每个 $h^i$ 均有限，且此和为有限和）。
:::

## 性质

### 基本性质

::: proposition [同伦不变性]
对[[弱同伦等价]] $X \to Y$，它们的 Euler 示性数相等。
特别地，Euler 示性数是拓扑空间的（同胚意义下）不变量。
:::

::: proof
由[[奇异上同调]]在弱同伦等价下的不变性即证。
:::

::: proposition [容斥原理]
对拓扑空间 $X$ 的[[子空间]] $X_1, X_2$，满足
$X_1 \cup X_2 = X$，且
$(X_1, X_1 \cap X_2)$ 与 $(X_2, X_1 \cap X_2)$
均为[[好空间对]]（例如 $X$ 为[[CW 复形]]，
$X_1$、$X_2$ 为它的子复形）
则有
\[
\chi(X) = \chi(X_1) + \chi(X_2) - \chi(X_1 \cap X_2).
\]
:::

::: proof
由[[Mayer–Vietoris 序列]]即证。
:::

::: proposition [积]
对拓扑空间 $X, Y$，其[[乘积空间]]满足
\[
\chi(X \times Y) = \chi(X) \times \chi(Y).
\]
:::

::: proof
由[[Künneth 公式]]即证。
:::

### 与几何的联系

在几何中，Euler 示性数可以由一些几何量所描述。
[[Poincaré–Hopf 定理]]、[[陈–Gauß–Bonnet 定理]]即描述了这些事实。

::: theorem [Poincaré–Hopf]
对[[紧]][[定向]][[光滑流形]] $M$ 上的[[向量场]]，
如它只有孤立零点，则它在这些点处的[[指标 (向量场)|指标]]
之和为 $M$ 的 Euler 示性数。
:::

::: theorem [陈–Gauß–Bonnet]
对[[紧]][[定向]]偶数维[[光滑流形]] $M$，
以及 $M$ 的[[切丛]]上的任意[[联络]]，
有等式
\[
\chi(M) = \left(\frac{-1}{2\pi}\right)^{n/2} \int_M \operatorname{pf}(\Omega).
\]
其中 $\Omega$ 表示[[曲率形式]]，
$\operatorname{pf}$ 表示 [[Pfaff 式]]。
:::

## 例子

- $n$ 维 [[Euclid 空间]]的 Euler 示性数为 $1$，
  $n$ 维[[球面]]的 Euler 示性数为 $1 + (-1)^n$。

- 对[[凸多面体]]，它的表面是一个同胚于球的拓扑空间，
  并给出了球的一个胞腔结构，
  因此它表面的 Euler 示性数为 $2$，
  由[[胞腔上同调]]可知此值为顶点加面数减边数。

- 对[[平面图]] $G$，它给出了圆盘的一个胞腔结构，
  因此它的 Euler 示性数为 $1$，
  由[[胞腔上同调]]可知此值为顶点加面数减边数。

## 类比与推广

Euler 示性数在其它数学对象，例如[[链复形]]、
[[层]]、[[代数簇]]上也可以类似地定义。

::: definition
对[[整环]] $A$ 与 $A$ 的模范畴上的[[链复形]] $K^\bullet$，
它的 Euler 示性数为
\[
\chi(K^\bullet) = \sum_{i \in \mathbb{Z}} (-1)^i h^i(K^\bullet),
\]
其中 $h^i$ 表示第 $i$ 阶链上同调作为 $A$-模的[[秩 (模论)|秩]]。
:::

::: remark
在 $K^\bullet$ 取拓扑空间 $X$ 的 $\mathbb{Z}$-系数奇异（上）链复形时，
即化为拓扑空间 $X$ 的 Euler 示性数。
:::

::: definition
整环 $A$-模[[层]] $\mathcal{F}$
的 Euler 示性数为
\[
\chi(\mathcal{F}) = \sum_{i \in \mathbb{Z}} (-1)^i h^i(\mathcal{F}),
\]
其中 $h^i$ 表示 $\mathcal{F}$ 的第 $i$ 阶[[层上同调]]作为 $A$-模的秩。
:::

::: remark
在 $\mathcal{F}$ 取拓扑空间 $X$ 上的 $\mathbb{Z}$-[[常值层]]时，
且此空间较好（局部可缩）时，即化为上述拓扑空间的 Euler 示性数。
:::

::: definition
[[代数簇]] $X$ 的 Euler 示性数为
\[
\chi(X) = \sum_{i = 0}^\infty (-1)^i h^i(X)
\]
其中 $h^i$ 表示 $X$ 的第 $i$ 阶上同调
（取定某种[[上同调]]理论）的维数。
:::

```terms
Euler 示性数:
  en: Euler characteristic
  de: Euler-Charakteristik :f
  fr: caractéristique d'Euler :f
```
