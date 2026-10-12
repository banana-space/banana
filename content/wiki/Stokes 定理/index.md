---
title: Stokes 定理
aliases: [Stokes 公式]
categories: [实分析, 微分几何]
---

**Stokes 定理**是[[微积分基本定理]]在高维空间的推广。
它说明[[微分形式]] $\omega$ 在[[光滑流形]] $M$ 的[[边界]]上的[[微分形式的积分|积分]]
等于其[[外微分]]在 $M$ 上的积分：
\[
\int_M d \omega = \int_{\partial M} \omega.
\]

## 定理与证明

::: theorem [Stokes] {@Stokesthm}
设 $M$ 是[[定向]][[带边流形|带边]] $n$ 维[[光滑流形]]，
$\omega$ 是 $M$ 上的紧支 $(n - 1)$-[[微分形式|形式]]。
则
\[
\int_M d \omega = \int_{\partial M} \omega.
\]
特别地，如果 $\partial M = \varnothing$，则 $\int_M d \omega = 0$。
:::

::: proof
取 $M$ 的坐标图册 $\{U_i\}_{i\in I}$，其中每个开集都同胚于 $n$ 维空间或者闭半空间。
取支于其上的[[单位分解]]，即 $M$ 上一族非负光滑函数 $\{\varphi_i\}_{i\in I}$，
满足 $\varphi_i$ 支集紧、包含于 $U_i$，$M$ 上每点都有邻域上面只有有限个
$\varphi_i$ 非零，以及 $\sum_{i\in I}\varphi_i=1$。
令 $\omega_i=\varphi_i\omega$，则 $\sum_{i\in I}\omega_i=\omega$。
又由于 $\omega$ 紧支，只有有限个 $\omega_i$ 非零，
于是只需对每个 $\omega_i$ 证明定理。这样便只需证 $M$ 是 $n$
维空间和闭半空间的情形。以下分别证之。

$M=\mathbb{R}^n$。
此时写出 $\omega=\sum_{i=1}^nf_idx_1\wedge\cdots\wedge\widehat{dx_i}\wedge\cdots\wedge dx_n$，
其中 $\hat{}$ 表示不出现。只需对求和中每一项证明定理；置换坐标可设只有第一项，
即 $\omega=fdx_2\wedge\cdots\wedge dx_n$。此时
$d\omega=\frac{\partial f}{\partial x_1}dx_1\wedge\cdots\wedge dx_n$。
由 [[Fubini 定理]]和[[微积分基本定理]]，
$$
左边=\int_{\mathbb{R}^{n-1}}\left(\int_\mathbb{R}\frac{\partial f}{\partial x_1}dx_1\right)dx_2\cdots dx_n
=\int_{\mathbb{R}^{n-1}}f(\cdot,x_2,\ldots,x_n)\big|^{+\infty}_{-\infty}dx_2\cdots dx_n
=\int_{\mathbb{R}^{n-1}}0dx_2\cdots dx_n=0=右边,
$$
因为 $f$ 紧支。

$M=\{x\in\mathbb{R}^n\mid x_1\le0\}$。
此时仍写 $\omega=\sum_{i=1}^nf_idx_1\wedge\cdots\wedge\widehat{dx_i}\wedge\cdots\wedge dx_n$。
仍只需对求和中每一项证明定理。后 $n-1$ 项的计算和上一段一样是 $0$。
对第一项，由 [[Fubini 定理]]和[[微积分基本定理]]，
$$
左边=\int_{\mathbb{R}^{n-1}}\left(\int_{-\infty}^0\frac{\partial f}{\partial x_1}dx_1\right)dx_2\cdots dx_n
=\int_{\mathbb{R}^{n-1}}f(\cdot,x_2,\ldots,x_n)\big|^0_{-\infty}dx_2\cdots dx_n
=\int_{0\times\mathbb{R}^{n-1}}fdx_2\cdots dx_n=右边,
$$
由于带边流形的定向约定。
:::

## 特例

### Newton–Leibniz 公式

在 Stokes 定理（@Stokesthm）中取 $M=[a,b]$，
可以得到光滑版本的[[微积分基本定理|Newton–Leibniz 公式]]：
\[
\int_a^b f'(t)dt=f(b)-f(a).
\]

### Green 公式

设 $C$ 是 $\mathbb{R}^2$ 中一条光滑[[简单闭曲线]]，
由 [[Jordan 曲线定理]]知它围成一个区域 $D$。
设 $f,g$ 是定义在 $\bar D$ 上的光滑函数。
在 Stokes 定理（@Stokesthm）中取 $M=D$，
$\omega=fdx+gdy$，
得到光滑版本的[[Green 公式]]：
\[
\int_{C}(fdx+gdy)=
\int_D\left( \frac{\partial g}{\partial x}-
\frac{\partial f}{\partial y} \right)dxdy.
\]
其中 $C$ 的定向取成绕逆时针的定向。

### Kelvin–Stokes 公式

设 $\Sigma$ 是 $\mathbb{R}^3$ 中一个可定向的光滑[[曲面]]，
带有边界 $C$。
设 $P,Q,R$ 是定义在 $\Sigma$ 上的光滑函数。
在 Stokes 定理（@Stokesthm）中取 $M=\Sigma$，
$\omega=Pdx+Qdy+Rdz$，
得到[[Kelvin–Stokes 公式]]：
\[
\int_C(Pdx+Qdy+Rdz)=
\int_{\Sigma}\left(
\left( \frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z} \right)dydz+
\left( \frac{\partial P}{\partial z}-\frac{\partial R}{\partial x} \right)dzdx+
\left( \frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y} \right)dxdy \right).
\]
其中 $\Sigma$ 的定向和 $C$ 的定向满足[[右手定则]]。

### Ostrogradsky–Gauß 公式

设 $\Sigma$ 是 $\mathbb{R}^3$ 中的一个光滑[[简单闭曲面]]，
由[[Jordan–Brouwer 分离定理]]知它围成一个区域 $\Omega$。
设 $P,Q,R$ 是定义在 $\bar\Omega$ 上的光滑函数。
在 Stokes 定理（@Stokesthm）中取 $M=\Omega$，
$\omega=Pdydz+Qdzdx+Rdxdy$，
得到[[Ostrogradsky–Gauß 公式]]：
\[
\int_{\Sigma}\left( Pdydz+Qdzdx+Rdxdy \right)=
\int_{\Omega}\left( \frac{\partial P}{\partial x}+
\frac{\partial Q}{\partial y}+
\frac{\partial R}{\partial z} \right)dxdydz.
\]
其中 $\Sigma$ 的定向由[[外法向量]]给出。

### 散度定理

用[[Hausdorff 测度]]，
或者更一般的[[Riemann 体积形式]]，
可以把 Green 公式和 Ostrogradsky–Gauß 公式写成更好看的形式，
并且推广到一般的[[Riemann 流形]]上，
这就是[[散度定理]]。

::: theorem [散度定理]
$M$ 是定向 $n$ 维 Riemann 流形，
$X$ 是其上光滑[[向量场]]，则
\[
\int_M\operatorname{div} X=
\int_{\partial M}\langle X,\mathbf{n}\rangle.
\]
其中 $\mathbf{n}$ 是 $\partial M$ 的外法向量，
$\operatorname{div}X$ 是 $X$ 的[[散度]]。
:::
