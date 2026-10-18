---
title: 曾定理
aliases: [曾炯定理]
categories: [域论]
navboxes: [域论]
---

**曾定理**是[[曾炯]]于 1933 年证明的定理，说的是
[[$\mathrm{C}_k$ 域|$\mathrm{C}_1$ 域]]的 [[Brauer 群]]平凡。
其在发展[[平展上同调]]时有重要应用。

## 定理与证明

::: theorem
设 $F$ 是 $\text{C}_1$ 域，$D$ 是 $F$ 上的有限维[[中心单代数|中心]][[除环]]，
则 $D=F$。换言之，$\text{C}_1$ 域的 [[Brauer 群]]平凡。
:::

::: proof
取 $F$ 的可分闭包 $K$。由[[中心单代数]]的理论，基变换
$D_K=D\otimes_FK$ 是 $K$ 上矩阵代数。
设其为 $\operatorname{M}_d(K)$，则 $\dim_FD=\dim_KD_K=d^2$，
要证 $d=1$。

考虑[[行列式]]映射 $\det\colon\operatorname{M}_d(K)\to K$。
由 [[Noether–Skolem 定理]]，$\operatorname{M}_d(K)$
的[[自同构]]都是[[内自同构]]，保持行列式；故这定义了与同构
$D_K\cong\operatorname{M}_d(K)$ 的选取无关的映射
$N_K\colon D_K\to K$。由于 $D_K$ 是从 $F$ 上基变换来，
它带有 [[Galois 群]] $G(K/F)$ 的作用。仍因
$\operatorname{M}_d(K)$ 的自同构都保持行列式，有
$N_K\colon D_K\to K$ 保持 Galois 作用。取两边的 Galois 不动元，
它定义了映射 $N\colon D\to F$，称为**既约范数**。

由于行列式是乘性的 $d$ 次齐次多项式，既约范数也是。
由于 $D$ 是除环，乘性就保证既约范数把非零元映射到非零元。
如果 $d>1$，$d^2>d$，则由 [[$\mathrm{C}_k$ 域|$\mathrm{C}_1$]]，
$d^2$ 维线性空间的 $d$ 次齐次多项式有非平凡零点，矛盾！
故只有 $d=1$，$D=F$。
:::

::: remark
曾炯证明的其实是[[代数闭域]]上[[超越次数]] $1$ 的扩张上没有非平凡中心除环。
关于证明的另一部分，即这样的域为什么 $\text{C}_1$，
参见主条目 [[$\mathrm{C}_k$ 域]]。
:::

## 应用

它最重要的应用是在[[平展上同调]]理论中。由于 [[Brauer 群]]就是域上乘法群的二阶平展上同调，
曾定理说明[[代数闭域]]上[[代数曲线]][[普遍点]]平展上同调消失。
正因有它，人们才能得知代数曲线没有高于 $2$ 阶的平展上同调，
进而得到一般代数簇的相应同调维数有限。

```terms
曾定理:
  en: Tsen's theorem
  de: Satz von Tsen
  fr: théorème de Tsen
```
