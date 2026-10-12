---
title: Chevalley 可构造性定理
categories: [概形论]
---

**Chevalley 可构造性定理**是[[代数几何]]中的基本结论，
说的是[[代数簇]][[概形态射|态射]]的[[像集]]都是[[可构造集]]。

## 定理与证明

用[[概形]]的语言，Chevalley 定理可推广到
[[Noether 概形]]的[[有限型态射]]，证明并不更难，
故我们直接陈述这一推广：

::: theorem
设 $f\colon X\to Y$ 是 Noether 概形的有限型态射，则像集
$f(X)$ [[可构造集|可构造]]。换言之，存在 $Y$ 的闭子集
$Z_1,\ldots,Z_n$ 和开子集 $U_1,\ldots,U_n$，使得
$$
f(X)=\bigcup_{i=1}^n(Z_i\cap U_i).
$$
:::

::: proof
对 $Y$ 用 [[Noether 归纳法]]，即假设定理对任一闭子概形
$Y'\subsetneqq Y$ 及 $Y'$ 上任一有限型概形都成立。接下来：

1. 如 $Y$ 不[[既约概形|既约]]，则 $Y_{\mathrm{red}}
   \subsetneqq Y$，由归纳假设定理对 $Y_{\mathrm{red}}$
   成立，于是定理对 $Y$ 显然也成立。故可设 $Y$ 既约。

2. {@仿射化归} 如 $Y=\emptyset$ 则定理显然成立。设 $Y\ne\emptyset$，
   取非空仿射开集 $U\subseteq Y$，令
   $Z=(Y\setminus U)_{\mathrm{red}}$。由归纳假设，定理对
   $f^{-1}(Z)\to Z$ 成立。由于 $U$ 和 $Z$ 的可构造集含入
   $Y$ 仍然可构造，可构造集的有限并也可构造，只需再证定理对
   $f^{-1}(U)\to U$ 成立。故可把 $Y$ 换成 $U$，设
   $Y=\operatorname{Spec}R$ 非空仿射，其中 $R$ 是[[既约环]]。

3. 取 $X$ 的有限仿射开覆盖。由于有限并与取像集交换，
   可构造集的有限并也可构造，可设
   $X=\operatorname{Spec}A$ 仿射。于是
   $f\colon X\to Y$ 相当于环同态 $R\to A$。

4. 由[[广泛自由]]，存在非零 $r\in R$ 使得
   $A_r$ 是[[自由模|自由]] $R_r$-模。由归纳假设，定理对
   $R/r\to A/rA$ 成立，故和[第 2 步](@仿射化归)一样，
   可把 $R$ 换成 $R_r$，设 $A$ 是自由 $R$-模。

5. 现如 $A=0$，则 $f(\operatorname{Spec}A)=
   \operatorname{Spec}A=\emptyset$，定理显然成立；
   如 $A\ne0$，由 $A$ 是自由 $R$-模可知对任一 $\mathfrak{p}
   \in\operatorname{Spec}R$，
   $A\otimes_Rk(\mathfrak{p})\ne0$，故
   $f(\operatorname{Spec}A)=\operatorname{Spec}R$，
   定理也成立。

:::

```terms
Chevalley 可构造性定理:
  en: Chevalley's theorem on constructibility
```
