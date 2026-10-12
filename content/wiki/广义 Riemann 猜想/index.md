---
title: 广义 Riemann 猜想
categories: [解析数论, 代数数论, 算术几何]
---

**广义 Riemann 猜想**是 [[Riemann 猜想]]的一系列推广，
有多种越来越广的形式，最广者是关于[[算术 $\zeta$ 函数]]的。

## Dirichlet $L$ 函数

::: conjecture
对 [[Dirichlet 特征]] $\chi$，其
[[Dirichlet L 函数|$L$ 函数]] $L(s,\chi)$
在区域 $0<\Re(s)<1$ 内的零点都在 $\Re(s)=1/2$ 上。
:::

::: remark
此处需限制在 $0<\Re(s)<1$ 内，
是因为当 $\chi$ 不为本原特征或 $\chi(-1)=1$ 时，
$L(s,\chi)$ 在 $\Re(s)=0$ 上会出现零点。
:::

## Dedekind $\zeta$ 函数

::: conjecture
对[[数域]] $K$，其 [[Dedekind $\zeta$ 函数]] $\zeta_K(s)$
在区域 $0<\Re(s)<1$ 内的零点都在 $\Re(s)=1/2$ 上。
:::

::: remark
对正整数 $n$，取 $K=\mathbb{Q}(\zeta_n)$，则
$$
\zeta_K(s)=\prod_{\chi\in((\mathbb{Z}/n)^\times)^*}L(s,\chi),
$$
所以分圆域 Dedekind $\zeta$ 函数的 Riemann
猜想等价于 Dirichlet $L$ 函数的 Riemann 猜想。
:::

::: remark
这里限制在区域 $0<\Re(s)<1$ 是因为外面的零点都相对“平凡”，
实际上来自 $\zeta$ 函数定义中无穷位点的欠缺。
如将其乘上表示无穷位点的因子，则猜想可陈述为所有的零点都在
$\Re(s)=1/2$ 上。
:::

## 算术 $\zeta$ 函数

::: conjecture
对 $\mathbb{Z}$ 上[[有限型态射|有限型]][[概形]] $X$，设 $n=\dim X$。
则其[[算术 $\zeta$ 函数]] $\zeta_X(s)$ 在区域
$0<\Re(s)<n$ 内的零点实部都是半整数，极点实部都是整数。
:::

::: remark
如 $X$ 在某个 $\mathbb{F}_p$ 上，则这是 [[Weil 猜想]]，
已被 [[Grothendieck]] 和 [[Deligne]] 于 20
世纪六七十年代解决。如 $K$ 是数域，$X=\operatorname{Spec}
\mathcal{O}_K$，则这就是 Dedekind $\zeta$ 函数的
Riemann 猜想。
:::

::: remark
和上面一样，这里限制在区域 $0<\Re(s)<n$
是因为外面的零点都相对“平凡”，来自无穷位点的欠缺。
如将其乘上适当的表示无穷位点的因子，则猜想可陈述为所有零点实部都是
$[0,n]$ 中的半整数，所有极点实部都是 $[0,n]$ 中的整数。
:::

```terms
广义 Riemann 猜想:
  en: generalized Riemann hypothesis
  de: verallgemeinerte Riemannsche Vermutung
  fr: hypothèse de Riemann généralisée
```
