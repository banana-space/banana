---
title: Artin 逼近定理
categories: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**Artin 逼近定理**是个[[交换代数]]定理，
从方程组在[[完备化 (交换代数)|完备化]]中的解出发，
获得它在某个[[平展同态|平展]]邻域中的解。其应用包括
[[Artin 可表性定理]]、平展上同调的紧合基变换等定理。

## 定理

::: theorem {@artin}
设 Noether 局部环 $(R,\mathfrak{m})$ 的[[形式纤维]]几何正则，
换言之完备化 $R\to\hat{R}$ 是[[正则同态]]。设多项式
$f_1,\ldots,f_m\in R[x_1,\ldots,x_n]$ 在 $\hat{R}$
里有零点 $(a_1,\ldots,a_n)\in\hat{R}^n$。则对任意
$d\in\mathbb{N}$，存在：

- [[平展同态|平展]] $R$-代数 $S$ 使得
  $R/\mathfrak{m}=S/\mathfrak{m}S$
  （从而 $\hat{R}=\hat{S}$）；

- $f_1,\ldots,f_m$ 在 $S$ 的零点
  $(b_1,\ldots,b_n)\in S^n$；

使得 $a_1-b_1,\ldots,a_n-b_n\in\mathfrak{m}^d\hat{R}$。
:::

::: proof
由 [[Popescu 逼近定理]]，$\hat{R}$ 是[[光滑同态|光滑]]
$R$-代数的[[滤余极限]]，故存在光滑 $R$-代数 $A$
以及映射 $A\to\hat{R}$，使得 $a_1,\ldots,a_n$ 来自 $A$，
且在 $A$ 中为 $f_1,\ldots,f_m$ 的零点。$A$
中相应元素仍记作 $a_1,\ldots,a_n$。由于
$\hat{R}/\mathfrak{m}^d\hat{R}=R/\mathfrak{m}^d$，
映射 $A\to\hat{R}$ 给出映射 $A\to R/\mathfrak{m}^d$。
在 @提升 中取 $I=\mathfrak{m}^d$ 得 $R$-代数 $S$，
再令 $b_1,\ldots,b_n\in S$ 为 $a_1,\ldots,a_n\in A$
在 $S$ 中的像，即得欲证。
:::

::: lemma {@提升}
设 $R\to A$ 是[[光滑同态]]，$I$ 是 $R$ 的理想，
$A\to R/I$ 是 $R$-代数同态。则存在：

- [[平展同态|平展]] $R$-代数 $S$ 使得 $S/IS=R/I$；

- $R$-代数同态 $A\to S$ 提升 $A\to R/I$。

:::

## 注记

::: remark
设 $(R,\mathfrak{m})$ 是以下几类环之一的[[局部化]]：

1. [[域]]；

2. [[完备 Noether 局部环]]；

3. [[分式域]][[特征 (代数)|特征]] $0$ 的 [[Dedekind 整环]]；

4. 以上几类环上有限型的环；

则 $(R,\mathfrak{m})$ 满足 @artin 的条件，
证明参见条目 [[G-环]]。由此可见 @artin
的适用范围十分广泛。
:::

::: remark
如 $(R,\mathfrak{m})$ 为 [[Hensel 环]]，
则满足 $R/\mathfrak{m}=S/\mathfrak{m}S$
的平展 $R$-代数 $S$ 都有截面 $S\to R$，所以 @artin 中的零点 $(b_1,\ldots,b_n)$ 在 $R$ 里就有。
换言之，此时 $R$ 上多项式在 $\hat{R}$ 里的零点都被其在
$R$ 里的零点逼近。
:::

```terms
Artin 逼近定理:
  en: Artin's approximation theorem
```
