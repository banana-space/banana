---
title: Artin–Wedderburn 定理
aliases: [Wedderburn–Artin 定理, Artin-Wedderburn 定理]
categories: [一般环论]
---

**Artin–Wedderburn 定理**完全分类了[[半单环]]，
指出半单环都是除环上矩阵环的有限[[直积]]。

## 定理与证明

::: theorem
$R$ 是[[半单环]]。则存在正整数 $n$，
$d_1,\ldots,d_n$ 以及[[除环]] $D_1,\ldots,D_n$，使得
$$
R\cong\prod_{i=1}^n\operatorname{M}_{d_i}(D_i).
$$
:::

以下证明中，半单性采用左边的定义，即左 $R$-模都半单。

::: proof
$R$ 自己作为左 $R$-模半单，故存在一族单左理想 $\{L_i\}_{i\in I}$，
$$
R=\bigoplus_{i\in I}L_i.
$$
记幺元 $1$ 在 $L_i$ 的投影为 $e_i$，则对于 $r\in R$，
$r=r1$ 在 $L_i$ 的投影就是 $re_i$，于是
$L_i=\{r\in R\mid re_i=r\}$。所以如果 $e_i=0$，则 $L_i=0$，
与 $L_i$ 是[[单模]]矛盾；故各个 $e_i$ 都非零，于是只有有限个 $L_i$。
将其依同构分类，可写
$$
R\cong\bigoplus_{i=1}^nL_i^{d_i},
$$
其中 $L_1,\ldots,L_n$ 互不同构。此时由 [[Schur 引理]]，
$$
\operatorname{End}_R(R)\cong
\prod_{i=1}^n\operatorname{End}_R(L_i^{d_i})=\prod_{i=1}^n\operatorname{M}_{d_i}(\operatorname{End}_R(L_i)).
$$
再由 Schur 引理 $\operatorname{End}_R(L_i)$ 是除环，取 $D_i$ 为其[[反环]]；
则由于 $\operatorname{End}_R(R)=R^\mathrm{op}$，即得
$$
R\cong\prod_{i=1}^n\operatorname{M}_{d_i}(D_i).
$$
:::

::: remark {@单模}
有以上定理之后容易发现，$R$ 的不同构的单模 $L_i$ 无非就是
$D_i^{d_i}$ 作为 $\operatorname{M}_{d_i}(D_i)$-模。
:::

::: remark
这里的 $D_i$ 与 $d_i$ 在同构意义下唯一：由以上证明，
$D_i$ 就是 $R$ 那些单左理想 $L_i$ 的[[自同态环]]，
而 $d_i$ 就是 $\dim_{D_i}(L_i)$。
:::

## 推论

[[半单环]]的定义并不对称，但由 Artin–Wedderburn 定理立得：

::: corollary
左半单环和右半单环是一回事。
:::

::: corollary
$G$ 是有限群，$k$ 是代数闭域，满足 $\operatorname{char}k\nmid\#G$。
则 $G$ 的诸不可约表示维数平方和为 $\#G$。
:::

::: proof
由 [[Maschke 定理]]，$k[G]$ 半单。由于代数闭域上有限维除环只有其本身，
故 Artin–Wedderburn 定理推出
$$
k[G]\cong\prod_{i=1}^n\operatorname{M}_{d_i}(k).
$$
由以上 @单模，$d_i$ 就是不可约表示的维数，计算上式两边在
$k$ 上的维数即知
$$
\#G=\sum_{i=1}^nd_i^2.
$$
:::

```terms
Artin–Wedderburn 定理:
  en: Artin–Wedderburn theorem
```
