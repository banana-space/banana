---
title: Einstein 场方程
categories: [相对论]
---

<problems>
- “陈述”之前的段落中，理想流体能动张量的公式 $T^{\mu\nu} = (p+g)U^\mu U^\nu + pg^{\mu\nu}$ 中的 $p+g$ 似乎应为 $\rho+p$（$\rho$ 为能量密度，$p$ 为压强，一般不是常数）。
- “精确解”一节需要扩充。
</problems>

::: convention
在本文中，

- 为简洁起见，我们设定光速 $c = 1$，
  引力常数 $G=1$。

:::

[[广义相对论]]中，
**Einstein 场方程**描述了物质分布和时空弯曲的关系。
大致来说，
时空弯曲由各种[[曲率]] $R$、
$\operatorname{Ric}$ 或者 [[Einstein 张量]] $G$ 描述，
而物质分布由[[能动张量]] $T$ 描述。
在这种描述下，
Einstein 方程是
\[
G=8\pi T.
\]

需要注意的是，
在求解方程的过程中，
我们需要人为设定 $T$ 的形式，
且这一形式可能与时空度规 $g$ 有关。
例如，理想流体的能动张量设定为
\[
T^{\mu\nu} = (p+g)U^\mu U^\nu + pg^{\mu\nu},
\]
其中 $p$ 是常数，$U$ 是 $4$-速度。
因此严格来说不能认为是物质分布“决定”时空度规。

## 陈述

设时空度量为 $g$，
其[[Ricci 曲率]]为 $\operatorname{Ric}$，
[[数量曲率]]为 $R$，
我们可以定义 Einstein 张量为
\[
G=\operatorname{Ric}-\frac1{2}Rg.
\]
时空里有物质分布，
设其能动张量为 $T$。

那么时空必须满足**Einstein 场方程**：

```math {@Einstein}
G=8\pi T.
```

如果能动张量为 $0$，我们称此时的状态为 **[[真空]]**，
那么时空满足**真空 Einstein 场方程**
\[
G=0.
\]
真空 Einstein 场方程等价于 $\operatorname{Ric}=0$。

## 导出

### 原始思路

设引力势为 $\phi$，
Newton 近似下的方向为 $\lambda(\tau)$ 的[[潮汐加速度]]可轻易计算出：
\[
\frac{d^2}{dt^2}\left(\frac{d\lambda^i}{d\tau}\right)=
\frac{\partial^2\phi}{dx^idx^j}\frac{d\lambda^j}{d\tau}.
\]
而在弯曲的时空中，
潮汐加速度代表测地线的变分所满足的运动方程，
所以是[[Jacobi 方程]]：
\[
\frac{D^2}{dt^2}J+R(J,\dot{\gamma})\dot{\gamma}=0.
\]
从而我们可以近似地把引力势的[[Hesse 矩阵]]看作[[Riemann 曲率]]的分量：
\[
\left(\frac{\partial^2}{dx^idx^j}\phi\right)=
-R(-,\dot{\gamma})\dot{\gamma}.
\]
缩并，
Newton 近似后得
\[
\Delta\phi=-\operatorname{Ric}(\dot{\gamma},\dot{\gamma})
\approx-\operatorname{Ric}_{00}.
\]
引力势的[[Poisson 方程]]给出
\[
\Delta\phi=-4\pi T_{00},
\]
所以不妨猜测
\[
\operatorname{Ric}=4\pi T.
\]
这也是 Einstein 最初的假设，
但是它的缺陷在于 $\operatorname{Ric}$ 不一定满足如下连续性方程：
\[
\nabla^aT_{ab}=0;\quad\nabla^a\operatorname{Ric}_{ab}\neq0.
\]
Einstein 就用 Einstein 张量 $G$ 修正此方程，
变为
\[
G=8\pi T.
\]
这正是 Einstein 场方程。

### 通过 Einstein–Hilbert 作用量

<see>[[Einstein–Hilbert 作用量]]</see>

考虑 [[Lagrange 量]]
\[
\mathcal{L}=\frac1{16\pi}R+\mathcal{M}
\]
的作用量，
称为**Einstein–Hilbert 作用量**：
\[
S=\int\mathcal{L}\operatorname{vol},
\]
其中 $\operatorname{vol}$ 是[[体积元]]。
则它关于度规 $g$ 的变分方程就是 Einstein 场方程。

## 线性化

在时空接近平直时，
我们可以把 Einstein 场方程做线性近似。
此时可设 $g=\eta+h$，
其中 $\eta$ 是 [[Minkowski 度规]]，
$h$ 是一阶小量。
则[[Christoffel 符号]]近似为
\[
\Gamma^c_{ab}=\frac1{2}\eta^{cd}\left(
\partial_ah_{bd}+\partial_bh_{ad}-\partial_dh_{ab} \right).
\]
所以 Ricci 曲率近似为
\[
R_{ab}=\partial_c\Gamma^c_{ab}-\partial_b\Gamma^c_{ca}
\approx\frac1{2}\left(\partial^c\partial_ah_{bc}
+\partial^c\partial_bh_{ac}\right)
-\frac1{2}\left(\partial^c\partial_c h_{ab}
+\partial_a\partial_bh^c_c\right).
\]
从而
\[
R=\partial^c\partial^bh_{bc}-\partial^c\partial_c h^b_{b}.
\]
这给出了**线性 Einstein 场方程**：
\[
\frac1{2}\left(\partial^c\partial_ah_{bc}
+\partial^c\partial_bh_{ac}\right)
-\frac1{2}\left(\partial^c\partial_c h_{ab}
+\partial_a\partial_bh^c_c\right)
-\frac1{2}\eta_{ab}\left(
\partial^c\partial^dh_{cd}-\partial^c\partial_c h^d_{d} \right)
=8\pi T_{ab}.
\]
在换元 $\overline{h}_{ab}=h_{ab}-\frac1{2}\eta_{ab}h^c_c$ 下，
方程变为
\[
\frac1{2}\left(\partial^c\partial_a\overline{h}_{bc}
+\partial^c\partial_b\overline{h}_{ac}\right)
-\frac1{2}\partial^c\partial_c\overline{h}_{ab}
-\frac1{2}\eta_{ab}\partial^c\partial^d\overline{h}_{cd}
=8\pi T_{ab}.
\]
左式在规范变换 $x^a\mapsto x^a+\xi^a$ 下不变
（以
$\overline{h}_{ab}\mapsto \overline{h}_{ab}+\partial_a\xi_b+\partial_b\xi_a-\eta_{ab}\partial_c\xi^c$
代入验证），
且在此变换下
$\partial_a\overline{h}^{ab}\mapsto\partial_a\overline{h}^{ab}+\partial^c\partial_c\xi^a$。
故可以选取[[Lorenz 规范]]
\[
\partial_a\overline{h}^{ab}=0.
\]
在此规范下重写线性 Einstein 场方程为
\[
-\frac1{2}\partial^c\partial_c\overline{h}_{ab}=8\pi T_{ab}.
\]
在真空条件 $T=0$ 下，
此方程代表[[引力波]]，
类比[[标准模型]]应该对应于某个[[自旋]]为 $2$ 的粒子，
称为[[引力子]]。

## 精确解

### Schwarzschild 真空解

<see>[[Schwarzschild 度规]]</see>

### Friedmann–Lemaître–Robertson–Walker 度规

<see>[[Friedmann–Lemaître–Robertson–Walker 度规]]</see>

### Tolman–Oppenheimer–Volkoff 方程

<see>[[Tolman–Oppenheimer–Volkoff 方程]]</see>
