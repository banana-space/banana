---
title: Dehn 不变量
categories: [组合几何]
---

**Dehn 不变量**是刻画[[多面体]]的剪切、粘贴的一个不变量，
由 [[David Hilbert]] 的学生 [[Max Dehn]]
为解决 [[Hilbert 第三问题]]而作。
在 Hilbert 提出其问题当年，Dehn 就作出此不变量而解决之，
使此问题成为 [[Hilbert 的 23 个问题]]中解决最快者。

## 定义

::: definition
设 $\mathbb{R}^3$ 中多面体 $X$ 各棱长度为 $\ell_1,\ldots,\ell_e$，
对应的[[二面角]]角度分别为 $\theta_1,\ldots,\theta_e$，则其
**Dehn 不变量**定义为 $\mathbb{R}\otimes_\mathbb{Z}\mathbb{R}/\mathbb{Z}\pi$ 中的元素
$$
\sum_{i=1}^e\ell_i\otimes\theta_i.
$$
因剪切多面体时或者切断一条棱而不改变其二面角，
或者沿着一条棱切割二面角，又或者切断一个面从而产生两个互补的二面角，
故依定义容易发现，一个多面体集合的各元素 Dehn 不变量之和在多面体剪切、粘贴操作下不变。
:::

::: remark {@有理张量积}
注意
$\mathbb{R}\otimes_\mathbb{Z}\mathbb{R}/\mathbb{Z}\pi=\mathbb{R}\otimes_\mathbb{Q}\mathbb{R}/\mathbb{Q}\pi$
为 $\mathbb{Q}$-[[线性空间]]张量积。故如 $c_1,\ldots,c_n$
与 $\alpha_1,\ldots,\alpha_n$ 为非零实数，满足
$\alpha_1,\ldots,\alpha_n,\pi$ 在 $\mathbb{Q}$ 上[[线性无关]]，则
$$
\sum_{i=1}^nc_i\otimes\alpha_i\ne0.
$$
:::

## 例子

- 显然[[长方体]]的 Dehn 不变量总是 $0$。

- 顶点处于 $(\pm1,0,0),(0,\pm1,0),(0,0,\pm1)$
  的标准[[正八面体]]的 Dehn 不变量为 $24\sqrt2\otimes\arctan\sqrt2\ne0$。
  （注意如果 $\arctan\sqrt2=q\pi$ 而 $q\in\mathbb{Q}$，则由于 $\tan(q\pi)=\sqrt2$
  为二次代数数，由[[单位根]]的理论知 $q$ 的分母至多是 $8$；
  逐一验证知不可能。）

## 应用

Dehn 不变量是为以下 [[Hilbert 第三问题]]量身打造的。

::: theorem [Dehn]
存在两个体积相等的多面体，不能将一个剪切然后粘贴成另一个。
:::

::: proof
上面已经算出标准正八面体具有非零 Dehn 不变量；
任取与之体积相等的长方体即得结论。
:::

::: remark [关于选择公理]
虽然线性空间必有基需要[[选择公理]]，但此处并不需要。
注意本质上用到的也就是 @有理张量积，而
$$
\mathbb{R}\otimes_\mathbb{Q}\mathbb{R}/\mathbb{Q}\pi=\operatornamewithlimits{colim}_{V,W}V\otimes_\mathbb{Q}W,
$$
其中 $V\subseteq\mathbb{R}$、$W\subseteq\mathbb{R}/\mathbb{Q}\pi$ 均取遍有限维 $\mathbb{Q}$-子空间；
而[[滤余极限]]中一个元素为 $0$ 当且仅当其在某一步已经为 $0$，
从而只需在有限维线性空间中证明 @有理张量积，自然不需要选择公理。
:::

Jean-Pierre Sydler 于 1965 年证明，只要两个多面体体积和 Dehn 不变量都相等，
就可以将一个剪切然后粘贴成另一个。这说明体积和 Dehn 不变量是多面体仅有的两个剪切不变量。

```terms
Dehn 不变量:
  en: Dehn invariant
```
