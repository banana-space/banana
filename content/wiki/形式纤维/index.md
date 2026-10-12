---
title: 形式纤维
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**形式纤维**是进阶[[交换代数]]中的重要概念，由
[[Grothendieck]] 首先研究。
其重要性来自[[完备化 (交换代数)|完备化]]的重要性：
交换代数或[[代数几何]]中经常考虑 [[Noether 环|Noether]] [[局部环]]
$(R,\mathfrak{m})$ 的完备化 $\hat{R}$，故我们常常希望当
$R$ 具有某性质时 $\hat{R}$ 也具有相应性质；对[[正则环|正则]]、
[[Gorenstein 环|Gorenstein]]、[[Cohen–Macaulay 环|Cohen–Macaulay]]
这样的性质这固然没有问题，但对[[既约环|既约]]、
[[正规环|正规]]这种低余维的性质这就可能失败（@不既约）。
形式纤维正控制了各种性质在完备化下的行为。

## 定义

::: definition
设 $(R,\mathfrak{m})$ 是 Noether 局部环。对 $R$ 的[[素理想]]
$\mathfrak{p}$，$R$ 在 $\mathfrak{p}$
处的**形式纤维**指的是 $k(\mathfrak{p})$-代数
$\hat{R}\otimes_Rk(\mathfrak{p})$，其中 $k(\mathfrak{p})$
表示剩余域，$\hat{R}$ 表示 $(R,\mathfrak{m})$ 的完备化。
:::

::: definition
设 $\mathrm{P}$ 是 Noether 环的性质，如[[正则环|正则]]、
[[Cohen–Macaulay 环|Cohen–Macaulay]]、$(\mathrm{R}_k)$、
$(\mathrm{S}_k)$ 等。
称 Noether 环[[平坦同态]] **$R\to A$ 的纤维几何 $\mathrm{P}$**，
指对 $R$ 的任一素理想 $\mathfrak{p}$ 及剩余域
$k(\mathfrak{p})$ 的任一有限扩张 $\ell$，
$A\otimes_R\ell$ 都满足性质 $\mathrm{P}$。
称 Noether 局部环 **$R$ 的形式纤维几何 $\mathrm{P}$**，
指完备化映射 $R\to\hat{R}$ 的纤维几何 $\mathrm{P}$。
对 Noether 环 $A$ 及其素理想 $\mathfrak{q}$，称
**$A$ 在 $\mathfrak{q}$ 处形式纤维几何 $\mathrm{P}$**，
指[[局部化]] $A_{\mathfrak{q}}$ 的形式纤维几何 $\mathrm{P}$。
为简短起见，我们时常省略“几何”二字。
:::

## 例子

::: example {@不既约}
本例给出一维 Noether 局部整环，其完备化不既约。

取特征 $p$ 域 $k$ 使得 $[k^{1/p}:k]=\infty$，例如
$\mathbb{F}_p$ 上无穷个变元的有理函数域。考虑
$$
A=\left\{\sum_{n=0}^\infty a_nx^n\in k^{1/p}[[x]]\Biggm|
[k(a_n)_{n=0}^\infty:k]<\infty\right\},
$$
则 $A$ 为[[离散赋值环]]，素元为 $x$。记其分式域为 $K$。
取常数项为 $0$ 的 $f\in k^{1/p}[[x]]\setminus A$，则
$f^p\in A$。记 $A'=A[f]$，$L=K(f)$，则 $L/K$ 为 $p$
次纯不可分扩张，$A'$ 作为 $A$-模秩 $p$ 自由，且是局部整环，
极大理想为 $(x,f)$。所以
$$
\widehat{A'}=A'\otimes_A\hat{A}=k^{1/p}[[x]][T]/(T^p-f^p)
=k^{1/p}[[x]][T]/(T-f)^p,
$$
不既约。本例中 $A'$ 在素理想 $0$ 处的形式纤维是
$$
L\otimes_Kk^{1/p}((x))=k^{1/p}((x))[T]/(T-f)^p,
$$
不既约。
:::

```terms
形式纤维:
  en: formal fiber
```
