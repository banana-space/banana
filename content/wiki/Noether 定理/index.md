---
title: Noether 定理
categories: [经典力学]
notices:
  - name: 提示
    text: 本条目会预设函数或映射的光滑性或衰减性，在定义中则只会模糊地使用“函数”这一概念。
  - name: 问题
    items:
      - “质点力学版本”“质点力学中例子”各节需要扩充。
---

**Noether 定理**是说对称性蕴含守恒律。
精确地说，
如果[[作用量]]具有连续的对称性（例如平移不变、旋转不变等），
则存在某个不随质点的运动或场的演化而变化的量，即守恒量。
例如，在[[质点力学]]中，如果作用量不随空间平移而变，
则质点的[[动量]]守恒；如果作用量不随时间平移而变，
则质点的[[能量]]守恒。

## 陈述与证明

### 质点力学版本

### 场论版本

给定[[时空]] $\mathbb{R}^n$，第零个分量代表[[时间]]，
后面的分量代表[[空间]]。
时空上的一个函数 $\phi$ 的固定时间的截面描述了一个场，
它本身表明了场的演化过程。
由于在 Lagrange 力学中**作用量**是基本概念，
对称性即是说作用量的对称性。
首先回顾作用量的定义。

::: definition {@action}
给定基域 $K$，记 $C(\mathbb{R}^n, K)$ 表示全体 $K$ 值函数，
对函数 $\mathcal{L} \colon K^{n+1} \to K$，
定义
\[
\Phi(x) :=
\mathcal{L}(\phi(x), \partial_0 \phi(x), \dots, \partial_{n-1} \phi(x)).
\]
为 $\phi$ 相应的**作用量密度**函数，通常记作
$\mathcal{L} = \mathcal{L}(\phi)
  = \mathcal{L}(\phi, \partial_\mu \phi)$。

**作用量**定义为作用量密度函数在全空间的积分，记作 $S$。
在不引起混淆时也会将作用量密度函数简称为作用量。
:::

::: definition
作用量 $\mathcal{L} = \mathcal{L}(\phi, \partial_\mu \phi)$
的一族连续对称性为如下数据：

- 群同态 $f \colon \mathbb{R} \to \operatorname{Aut}(\mathbb{R}^n)$，

- 群同态 $\mathcal{G} \colon \mathbb{R} \to \operatorname{Aut}(C(\mathbb{R}^n, K))$

（注：这里 $\operatorname{Aut}$ 表示它是线性且保持一切需要的微分结构，
记 $f(t) = f_t$，$\mathcal{G}(t) = \mathcal{G}_t$）

满足此变换逐点保持作用量密度：对任意点 $x \in \mathbb{R}^n$，等式
\[
\mathcal{L}(\phi)(x) d^n x=
\mathcal{L} (\mathcal{G}_t(\phi)) (f_t(x)) d^n f(x)
\]
即

```math {@invariant}
\mathcal{L}(\phi)(x) =
\mathcal{L} (\mathcal{G}_t(\phi)) (f_t(x)) |\operatorname{Jac}(f_t)|,
```

成立。
:::

从一族连续对称性可以定义它的切映射，即无穷小对称性。

::: definition
在上述记号下，记
\[
\mathcal{F}_t(\phi) = \mathcal{G}_t(\phi) \circ f_t,
\]
$f_t$、$\mathcal{F}_t$ 相应的微分为
\[
f = \lim_{t \to 0} \frac{1}{t} (f_t - \mathrm{id}) \in
\operatorname{End}(\mathbb{R}^n),
\]
\[
\mathcal{F} = \lim_{t \to 0} \frac{1}{t}
(\mathcal{F}_t - \mathrm{id}) \in
\operatorname{End}(C(\mathbb{R}^n, K)).
\]
:::

::: theorem
对给定的函数 $\phi$，存在 $\mathbb{R}^n$ 上的[[向量场]]
$j^\mu = j^\mu(\phi)(x)$，称为**守恒流**，
满足对任意函数 $\omega$
\[
\lim_{t \to 0} \frac{1}{t}(S(\phi'_t) - S(\phi))
= - \int j^\mu(x) \partial_\mu\omega d^n x
\]
其中 $S$ 表示作用量（@action），
而 $\phi'_t$ 满足
（它是偏离此对称性的一个小扰动）
\[
\phi'_t(x + t\omega(x)f(x)) = \phi(x) + t\omega(x)\mathcal{F}(\phi).
\]
$j^\mu$ 的具体形式可以求出：
（注意 $j^\mu$ 是 $\phi$ 的函数）
\[
j^\mu = \left(
\frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi)} \partial_\nu \phi
- \delta_\nu^\mu \mathcal{L} \right) f^\nu -
\frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi)}\mathcal{F}(\phi)
\]
且当 $\phi$ 满足运动方程时，$\partial_\mu j^\mu = 0$。
:::

::: proof
计算可得（记 $x' = x + \omega(x) f(x)$，并只取一阶近似）
\[
\begin{aligned}
  S(\phi_t')
  &= \int d^n x\ \mathcal{L}(\phi'_t, \partial_\mu \phi'_t)(x) \\
  &= \int d^n x'\ \mathcal{L}(\phi'_t, \partial_\mu \phi'_t)(x') \\
  &= \int d^n x'\
  \biggl(\mathcal{L}(\phi, \partial_\mu\phi)(x) +
  \frac{\partial \mathcal{L}}{\partial \phi}(\phi'_t(x')-\phi(x)) \\
  &+ \frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi)}
  ((\partial_\mu \phi'_t)(x') - \partial_\mu \phi(x)) \biggr)
\end{aligned}
\]
由于
\[
\begin{aligned}
  d^n x' &= d^n x(1 + t\partial_\mu \omega f^\mu + t\omega\partial_\mu f^\mu)\\
  \phi'_t(x') &= \phi(x) + t\omega \mathcal{F}(\phi) \\
  (\partial_\mu \phi'_t)(x') &= \partial_\mu \phi(x) + t(\partial_\mu \omega \mathcal{F}(\phi)
  + \omega\partial_\mu \mathcal{F}(\phi)
  - \partial_\nu\phi (\partial_\mu \omega f^\nu + \omega\partial_\mu f^\nu))
\end{aligned}
\]
可得
\[
\begin{aligned}
  &\lim_{t \to 0} \frac{1}{t}(S(\phi'_t) - S(\phi)) \\
  =&
  \int d^n x\ \omega\biggl(\partial_\mu f^\mu +
  \frac{\partial \mathcal{L}}{\partial \phi}\mathcal{F}(\phi)
  -\frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi)}
  (\partial_\nu \phi \partial_\mu f^\nu -\partial_\mu\mathcal{F}(\phi))\biggr) \\
  -& \int d^n x\ \partial_\mu \omega\left((
  \frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi)} \partial_\nu \phi
  - \delta_\nu^\mu \mathcal{L} ) f^\nu - \frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi)}\mathcal{F}(\phi)\right)
\end{aligned}
\]
将对称性条件 @invariant 微分可得上式中第一项为 $0$，
由此定理的第一部分得证。

当 $\phi$ 满足[[运动方程]]时，
$S$ 在 $\phi$ 处一阶变分为 $0$，因此
\[
0 = \lim_{t \to 0} \frac{1}{t}(S(\phi'_t) - S(\phi))
= - \int j^\mu(x) \partial_\mu \omega d^n x
= \int \omega\partial_\mu j^\mu d^n x
\]
对任意函数 $\omega$ 成立，因此 $\partial_\mu j^\mu = 0$。
:::

::: remark
我们可以谈论许多族对称性，
或者有关很多个场的一族对称性，
这只是个平凡的推广：相应的守恒流就是把每一族对应的流，
或者每个场对应的流加起来。
:::

::: remark
$j^\mu$ 在相差 $\partial_\nu B^{\mu\nu}$ 下唯一，
其中 $B$ 为 $(0,2)$ 阶反对称[[张量]]。
一般称在定理中定义的 $j^\mu$ 为“典范的”。
:::

::: proposition
由于对满足运动方程的 $\phi$，有
\[
Q = \int j^0(x) d^{n-1}x
\]
对 $0$ 对应的那个分量（在物理上即是时间）是常量，
即它不随场的演化而变，
称为**守恒荷**。
这也说明了“守恒流”之名是合理的。
:::

::: proof
\[
\frac{dQ}{dx^0} = \int \partial_0 j^0 d^{n-1}x
= -\int \partial_i j^i d^{n-1} x = 0,
\]
其中 $i$ 取遍 $0$ 之外的所有角标。
:::

## 例子

下面是一些基本的对称性的例子：

### 质点力学中例子

### 场论中例子

::: example [平移对称性]
如 $\mathcal{L}$ 满足平移对称性，即在变换
\[
\begin{aligned}
  \mathcal{G}_t(\phi)(x) & = \phi(x - tv) ,\\
  \mathcal{f}_t(x) & = x + tv,
\end{aligned}
\]
之下不变，
则微分 $f(x) = v$，$\mathcal{F}(\phi) = 0$，
由此相应的守恒流为
\[
j^\mu = \left(
\frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi)} \partial_\nu \phi
- \delta_\nu^\mu \mathcal{L} \right) v^\nu
=: T^\mu_\nu v^\nu
\]
其中 $T^\mu_\nu$ 即定义为典范 **[[能动张量]]**。
:::

例如作用量
\[
\frac{1}{2}\left(
- m^2 \varphi^2 + (\partial_\mu \varphi)(\partial^\mu \varphi)
\right)
\]
（$\phi$ 为实值函数，$m$ 为常数）
即满足平移对称性，相应的场称为 [[Klein–Gordon 场]]。

::: example [Lorentz 对称性]
给定全空间的一个标准伪度量（正、负惯性指数为 $p$、$q$）
以及 Lorentz 群 $\mathrm{O}(p,q)$ 的 Lie 代数的表示
$D \colon \mathfrak{o}(p,q) \to \mathfrak{gl}_m(K)$，
设作用量涉及到 $m$ 个场 $\phi = (\phi_i)$，
且作用量有对称性（对某个 $\Lambda \in \mathfrak{o}(p, q)$）：
\[
\begin{aligned}
  \mathcal{G}_t(\phi)(x) & = e^{tD(\Lambda)}\phi(e^{-t\Lambda} x)\\
  \mathcal{f}_t(x) & = e^{t\Lambda}x
\end{aligned}
\]
则 $f(x) = \Lambda x$，$\mathcal{F}(\phi) = D(\Lambda)\phi$，
即有相应的守恒流为
\[
j^\mu = T_\nu^\mu \Lambda_\alpha^\nu x^\alpha - \frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi)}D(\Lambda)\phi
\]
上述等式的意义为先对每个场做，之后加起来。
:::

例如上面给出的作用量即满足 $D=0$ 时的 Lorentz 对称性。

::: remark
这里之所以说相应的 Lie 代数的表示而非群表示，
是因为 $\mathrm{O}(p, q)$ 基本群非平凡。
不过有时为了说起来简便也会说 Lorentz 群的表示，
说的实际上是它的万有覆叠的表示。
:::

::: example [伸缩对称性]
设作用量有对称性（$\Delta$ 为常数）：
\[
\begin{aligned}
  \mathcal{G}_t(\phi)(x) & = e^{-\Delta t}\phi(e^{-t} x)\\
  \mathcal{f}_t(x) & = e^{t}x,
\end{aligned}
\]
则 $f(x) = x$，$\mathcal{F}(\phi) = -\Delta\phi$，
即有相应的守恒流为
\[
j^\mu = T_\nu^\mu x^\nu + \Delta\frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi)}\phi.
\]
:::

例如，下面给出的作用量
\[
\mathcal{L} = \partial_\mu \phi \partial^\mu \phi
\]
（$\phi$ 为实值函数）
满足 $\Delta = \frac{1}{2}n - 1$ 的伸缩对称性。

```terms
Noether 定理:
  en: Noether's theorem
  de: Noether-Theorem
  fr: théorème de Noether
```
