---
title: 泛包络代数
categories: [Lie 理论]
---

**泛包络代数**是从 [[Lie 代数]]出发构造的[[结合代数]]，
其构造意图在于将 Lie 代数的表示视为某个结合代数上的模。

## 定义

::: definition
对域 $\Bbbk$ 上的 [[Lie 代数]] $\mathfrak{g}$，其**泛包络代数**
$U(\mathfrak{g})$ 为
\[
U(\mathfrak{g}) = \frac{\mathrm{T}(\mathfrak{g})}{(x \otimes y - y \otimes x
- [x, y])}
\]
其中，$\mathrm{T}(\mathfrak{g})$ 表示 $\mathfrak{g}$（作为向量空间）的[[张量代数]]，
分母为所有 $x \otimes y - y \otimes x - [x, y]$ （$x, y \in \mathfrak{g}$）
生成的双边理想。
:::

## 性质

::: proposition
存在范畴等价
\[
\mathsf{Rep}(\mathfrak{g}) \simeq U(\mathfrak{g})\text{-}\mathsf{Mod}.
\]
即 [[Lie 代数]]的表示的范畴与相应泛包络代数上的左模范畴等价。
:::

::: proposition
$U(\mathfrak{g})$ 上有自然的滤链 $\operatorname{Fil}^\bullet$，
其中 $\operatorname{Fil}^n$ 为由元素
\[
x_1 \otimes \cdots \otimes x_m, \quad m \leq n
\]
生成的向量空间。
此时有 $\operatorname{Fil}^m \operatorname{Fil}^n
  \subset \operatorname{Fil}^{m+n}$。此滤链对应的分次环为
\[
\operatorname{gr}^\bullet U(\mathfrak{g}) \simeq
\operatorname{Sym}^\bullet (\mathfrak{g}),
\]
后者为 $\mathfrak{g}$（作为向量空间）的[[对称代数]]。
:::

我们接下来考虑 $\mathfrak{g}$ 有较好性质的情况，此时 $U(\mathfrak{g})$ 亦有较好性质。

::: notation*
- $\Bbbk$ 为特征 $0$ 域，$\mathfrak{g}$ 为其上[[半单 Lie 代数]]
  （一般地，[[Kac–Moody 代数]]）。

- $\mathfrak{h}$ 为 $\mathfrak{g}$ 的 [[Cartan 子代数]]。

- $\mathfrak{n}^+$、$\mathfrak{n}^-$ 分别为 $\mathfrak{g}$ 的正、负[[幂零子代数]]。

- $W$ 为 $\mathfrak{g}$ 的 Weyl 群。

:::

::: proposition [Poincaré–Birkhoff–Witt] {@PBW-theorem}
<see>[[Poincaré–Birkhoff–Witt 定理]]</see>

存在作为线性空间的同构
\[
U(\mathfrak{n}^-) \otimes U(\mathfrak{h}) \otimes U(\mathfrak{n}^+) \simeq U(\mathfrak{g}),
\]
由
\[
x_1 \otimes x_2 \otimes x_3 \to x_1 x_2 x_3
\]
给出。
:::

::: proposition [Harish-Chandra]
<see>[[Harish-Chandra 同构]]</see>

存在同构
\[
\mathrm{Z}(U(\mathfrak{g})) \simeq \mathrm{S}(\mathfrak{h})^{W_\bullet}
\]
其中 $\mathrm{Z}(U(\mathfrak{g}))$ 表示 $U(\mathfrak{g})$ 的[[中心]]，
$\mathrm{S}(\mathfrak{h})^{W_\bullet}$ 为 $\mathfrak{h}$ 的[[对称代数]]在
$W$ 作用下的不变量。
这一同构由以下方式给出：
由 @PBW-theorem，
\[
U(\mathfrak{g}) \simeq U(\mathfrak{h}) \oplus (U(\mathfrak{g}) \mathfrak{n}^+ + \mathfrak{n}^- U(\mathfrak{g})),
\]
映射被定义为：先将 $\mathrm{Z}(U(\mathfrak{g}))$ 嵌入至 $U(\mathfrak{g})$，
再沿上述分解投影至 $U(\mathfrak{h}) \simeq \mathrm{S}(\mathfrak{h})$。
:::

## 例子

- $\mathfrak{g}$ 为 [[交换 Lie 代数]]时，
  $U(\mathfrak{g}) \simeq \mathrm{S}(\mathfrak{g})$。

```terms
泛包络代数:
  en: universal enveloping algebra
  de: universelle einhüllende Algebra
  fr: algèbre enveloppante
```
