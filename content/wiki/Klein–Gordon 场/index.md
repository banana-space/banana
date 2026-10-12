---
title: Klein–Gordon 场
aliases: [Klein-Gordon 场]
categories: [量子场论]
notices:
  - name: 问题
    items:
      - “多点函数与 $S$ 矩阵”一节需要扩充。
      - “能量、动量与荷”一节中交换子 $[Q, a_p^{c, \dagger}] = -[Q, a_p^\dagger] = \alpha$ 的右边似乎应为相应的产生算子乘以 $\alpha$，即 $[Q, a_p^{c, \dagger}] = \alpha a_p^{c, \dagger}$、$[Q, a_p^\dagger] = -\alpha a_p^\dagger$。
navboxes: [量子场论]
---

::: convention
在本文中，

- 全时空为 $\mathbb{R}^{n+1}$，第 0 个分量表示时间，带有平坦度量 $(+,-,\cdots,-)$。
- 采用[[自然单位制]]，即光速 $c$ 与[[约化 Planck 常数]] $\hbar$ 均设定为 $1$。

:::

**Klein–Gordon 场**是一种[[量子场]]，
以描述单一种有[[质量]]、[[自旋]] $0$、
无相互作用的 [[Bose 子]]，
它是个[[标量场]]，是[[自由量子场论]]最简单的例子。
Klein–Gordon 场有实或复两种，分别表示[[反粒子]]是或不是它本身的粒子。

如果粒子质量为 $0$，相应的场论会有很大区别，故不在本文讨论范围之内。

## 定义

::: definition [实 Klein–Gordon 场]
$n+1$ 维质量 $m$ 的**实 Klein–Gordon 场**对每个
$\mathbb{R}^{n+1}$ 中的点 $x$ 指定一个从质量 $m>0$ 的 Bose 子的
[[Fock 空间]]到它本身的算子
\[
\varphi(x) =
\int \frac{d^n \bf{p}}{(2\pi)^n}\frac{1}{\sqrt{2p^0}}
(a_{\bf{p}} {\mathrm{e}}^{\mathrm{i} p \cdot x}
+ a_{\bf{p}}^\dagger {\mathrm{e}}^{-\mathrm{i} p \cdot x})
\]
其中 $p^0 = \sqrt{|\bf{p}|^2 + m^2}$，$p = (p^0, \bf{p})$，
$\cdot$ 表示 [[Lorentz 度量]]下的内积。
$a_{\bf{p}}$、$a_{\bf{p}}^\dagger$ 表示湮灭和产生动量 $p$ 的粒子的算子。
:::

::: definition [复 Klein–Gordon 场]
$n+1$ 维质量 $m$ 的**复 Klein–Gordon 场**有两个，都对每个
$\mathbb{R}^{n+1}$ 中的点 $x$ 指定一个从质量 $m$ 的 Bose 子以及它的反粒子的
[[Fock 空间]]到它本身的算子
\[
\varphi(x) =
\int \frac{d^n \bf{p}}{(2\pi)^n}\frac{1}{\sqrt{2p^0}}
(a_{\bf{p}} {\mathrm{e}}^{\mathrm{i} p \cdot x}
+ a_{\bf{p}}^{c,\dagger} {\mathrm{e}}^{-\mathrm{i} p \cdot x})
\]
\[
\varphi^*(x) =
\int \frac{d^n \bf{p}}{(2\pi)^n}\frac{1}{\sqrt{2p^0}}
(a_{\bf{p}}^c {\mathrm{e}}^{\mathrm{i} p \cdot x}
+ a_{\bf{p}}^\dagger {\mathrm{e}}^{-\mathrm{i} p \cdot x})
\]
其中 $p^0$、$p$、$\cdot$ 同上，
$a_{\bf p}$、$a_{\bf p}^\dagger$ 表示湮灭和产生动量 ${\bf p}$ 的粒子的算子，
$a_{\bf p}^c$、$a_{\bf p}^{c,\dagger}$ 表示湮灭和产生动量 ${\bf p}$ 的反粒子的算子。
:::

::: remark
在物理中可以认为复场 $\varphi(x)$
的意义是在时空 $x$ 点处产生一个反粒子或湮灭一个粒子；
而 $\varphi^*(x)$
的意义则是在时空 $x$ 点处产生一个粒子或湮灭一个反粒子。
当然对于实场则无粒子与反粒子之别。
:::

## 性质

### 基本性质

Klein–Gordon 场满足自由量子场所要求的基本性质。

::: proposition [Lorentz 协变性]
Klein–Gordon 场满足标量场相应的 Poincaré 协变性，
即对 [[Lorentz 变换]] $\Lambda$ 有
\[
U(\Lambda, a) \varphi(x) U(\Lambda,a )^{-1} =
\varphi(\Lambda x + a)
\]
其中 $U(\Lambda, a)$ 为在变换 $x\mapsto \Lambda x + a$ 之下
[[Fock 空间]]相应的变换。
:::

::: proposition [因果性]
Klein–Gordon 场满足因果性，即若 $(x-y)^2 < 0$
（$x^2 := x \cdot x$），
对实场，有交换子
\[
[\varphi(x), \varphi(y)] = 0,
\]
对复场，有
\[
[\varphi(x), \varphi^*(y)] = 0.
\]
:::

并且可以证明，如果要求场由产生和湮灭算子的线性组合构成，
且满足上述二条件，则必为定义中所呈现的形式。

::: remark
Lorentz 协变性的意义较为明了。
因果性则是说如果一点在另一点的光锥之外，
在两点处发生的事情互不干扰，
这是为了符合信息的传递速度不能超过光速这一物理直观。
:::

### 经典方程

::: proposition
在经典意义下，Klein–Gordon 场满足方程
\[
(\square^2 + m^2)\varphi = 0,
\]
称为 **[[Klein–Gordon 方程]]**。
实场的作用量密度是
\[
\mathcal{L} = \frac{1}{2}\left(
- m^2 \varphi^2 + (\partial_\mu \varphi)(\partial^\mu \varphi)
\right),
\]
复场的作用量密度为
\[
\mathcal{L} = \frac{1}{2}\left(
- m^2 \varphi^*\varphi + (\partial_\mu \varphi^*)(\partial^\mu \varphi)
\right),
\]
:::

### 对称性

Klein–Gordon 场具有很好的对称性，并有相应的守恒流。

::: proposition
Klein–Gordon 场满足平移对称性，
即在平移变换
\[
\varphi'(x) = \varphi(x-a), x' = x + a
\]
下作用量不变。相应的[[守恒流]]为：
对实场
\[
j^\mu = T^\mu_\nu a^\nu =
(2(\partial^\mu\varphi)(\partial_\nu\varphi) - \delta_\nu^\mu\mathcal{L})a^\nu
\]
对复场
\[
j^\mu = T^\mu_\nu a^\nu =
2((\partial^\mu\varphi^*)(\partial_\nu\varphi) +
(\partial^\mu\varphi)(\partial_\nu\varphi^*) - \delta_\nu^\mu\mathcal{L})a^\nu
\]
:::

这里 $T^\mu_\nu$ 即为 Klein–Gordon 场的[[能动张量]]。

::: proposition
Klein–Gordon 场满足 Lorentz 对称性，
即在 Lorentz 变换下（$\Lambda \in \mathfrak{o}(1, n)$）
\[
\varphi'(x) = \varphi(\mathrm{e}^{-\Lambda} x), x' = e^\Lambda x
\]
作用量不变。相应的守恒流为
\[
j^\mu = T^\mu_\nu \Lambda_\alpha^\nu x^\alpha
\]
:::

除此之外，复 Klein–Gordon 场还有整体规范对称性。

::: proposition
复 Klein–Gordon 场有整体规范对称性，即在变换
\[
\varphi' = {\mathrm{e}}^{\mathrm{i} \alpha} \varphi,
(\varphi^*)' = {\mathrm{e}}^{-\mathrm{i} \alpha} \varphi^*, x' = x
\]
下作用量不变，相应的守恒流为
\[
j^\mu = \mathrm{i}\alpha(\varphi^*\partial^\mu\varphi
- \varphi\partial^\mu\varphi^*)
\]
:::

### 能量、动量与荷

由上述计算可知 Klein–Gordon 场的（典范）[[能动张量]]为
（$\eta$ 为 Lorentz 度量）
\[
T^{\mu\nu} = 2(\partial^\mu\varphi)(\partial^\nu\varphi)
- \eta^{\mu\nu}\mathcal{L}.
\]
由此可定义能量、动量算子。

::: proposition
Klein–Gordon 场的能量、动量算子为（在正规乘积下）：
对实场
\[
P^\nu = (E, {\bf{P}}^i) = \int d^n x T^{0\nu} = \int \frac{d^n \bf{p}}{(2\pi)^n}
p^{\nu} a_{\bf{p}}^\dagger a_{\bf{p}}
\]
对复场
\[
P^\nu = \int \frac{d^n\bf{p}}{(2\pi)^n} p^\nu
(a_{\bf p}^\dagger a_{\bf p} + a_{\bf p}^{c,\dagger} a_{\bf p}^c)
\]
:::

可以看出，态 $a_{\bf p}^\dagger|0\rangle$ 是 $P^\nu$ 的特征值为
$p^\nu$ 的特征向量，即此态能量-动量为 $p$，这也与
“产生动量 $\bf p$ 的粒子”的直观相符。

此外对复场，整体规范对称性引入了荷算子

\[
Q = \int d^n x\ \mathrm{i} \alpha(\varphi^*\partial_0\varphi - \varphi\partial_0\varphi^*)
= \int \frac{d^n \bf p}{(2\pi)^n} \alpha(a_{\bf p}^{c,\dagger}a_{\bf p}^c - a_{\bf p}^\dagger a_p)
\]

可以看出，交换子 $[Q, a_p^{c, \dagger}] = -[Q, a_p^\dagger] = \alpha$，
即反粒子的荷是 $\alpha$，粒子的荷是 $-\alpha$。

### 多点函数与 $S$ 矩阵

## 参考文献*

```bibliography
W95:
  type: book
  label: W95
  author: S. Weinberg
  year: 1995
  title: The Quantum Theory of Fields
  volume: 1
  publisher: Cambridge University Press
```

```terms
Klein–Gordon 场:
  en: Klein–Gordon field
  de: Klein–Gordon-Feld
  fr: champ de Klein–Gordon
```
