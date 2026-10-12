---
title: Möbius 函数（数论）
categories: [初等数论, 解析数论]
notices:
  - name: 消歧义
    see:
      - page: Möbius 函数
  - name: 问题
    items:
      - '“与 Riemann 猜想的关系”一节第一个证明的末尾，由 $\ll x^{\frac12+{3\varepsilon\over2}}$ 得到结论似乎应取 $\varepsilon=2\varepsilon''/3$，而不是 $\varepsilon=3\varepsilon''/2$。'
      - “与 Riemann 猜想的关系”一节第二个证明中，竖直线段上积分的下限 $\frac12+\sigma+\varepsilon-iT$ 似乎应为 $\frac12-\sigma+\varepsilon-iT$。
---

::: convention
在本文中，

- 符号$s$总是表示以$\sigma$为实部、$t$为虚部的复数。

:::

在数论中，**Möbius 函数**指[[数论函数]]
$\mu \colon \mathbb{N}_+ \to \mathbb{Z}$：

\[
\mu(n)=
\begin{cases}
  (-1)^{\omega(n)} & n \ 无平方因子 \\
  0 & n \ 有平方因子
\end{cases}
\]

其中$\omega(n)$表示$n$的不同素因子之个数。
它是 [[Dirichlet 卷积]]意义下，正整数上常值函数 $1$ 之逆。

## 定义

::: definition
**Möbius 函数**是函数
$\mu \colon \mathbb{N}_+ \to \mathbb{Z}$：
\[
\mu(n)=
\begin{cases}
  (-1)^{\omega(n)} & n\ 无平方因子 \\
  0 & n\ 有平方因子
\end{cases}
\]
其中 $\omega(n)$ 表示 $n$ 的不同素因子个数。
:::

## 性质

### 基本性质

下面的结论由 $\mu$ 的定义可知。

::: proposition
$\mu$是[[积性函数]]，且 $f$ 为积性函数时，
\[
\sum_{d|n}f(d)\mu(d) = \prod_{p|n}(1-f(p))
\]
特别地，分别将$f(n)=1$和$f(n)=1/n$代入，便有：
\[
\sum_{d|n}{\mu(d)\over d}={\varphi(n)\over n},
\]
\[
\sum_{d|n}\mu(d)=
\begin{cases}
  1 & n=1 \\
  0 & n>1.
\end{cases}
\]
:::

通过上面的命题可以看出
\[
\mu * 1 = \delta(1)
\]
即 $\mu$ 是 [[Dirichlet 卷积]]意义下，正整数上常值函数 $1$ 之逆。
因此我们有如下函数间的等式。

::: proposition
记 $\mathrm{id}$ 为 $\mathbb{N}_+$ 上[[恒等映射]]，
$\varphi$ 为 [[Euler 函数]]，
$1$ 为常为 $1$ 的函数，
$\tau$ 为[[约数个数函数]]，$\sigma$ 为[[约数和函数]]，
则有
\[
\begin{aligned}
  \mu * \mathrm{id} &= \varphi \\
  \mu * \tau &= 1 \\
  \mu * \sigma &= \mathrm{id}.
\end{aligned}
\]
$*$ 即为 [[Dirichlet 卷积]]：
\[
f * g(n) = \sum_{d|n} f(d)g(\frac{n}{d})
\]
:::

将上述卷积等式写成 [[Dirichlet 级数]]的形式，
可知

::: proposition
\[
\sum_{n\ge1}{\mu(n)\over n^s}={1\over\zeta(s)}.
\]
:::

### 部分和

<see>[[Riemann zeta 函数]]、[[Perron 公式]]</see>

利用[[Perron 公式]]，可知当$k=1-\sigma+(\log x)^{-1}$、$2\le T\le x$时总有：

```math {@eqp}
\sum_{n\le x}{\mu(n)\over n^s}={1\over2\pi i}\int_{k-iT}^{k+iT}{x^w\over w\zeta(s+w)}\mathrm dw+O\left(x^{1-\sigma}\log x\over T\right)
```

根据[@titchmarsh1986, (3.11.8)]以及[[Riemann zeta 函数|非零区域$\sigma\ge1-A/\log(\lvert t\rvert+2)$的一个推论]]，
可知存在$A>0$使得当$\sigma\ge1-A/\log T$且$2\le|t|\le T$时：

\[
{1\over\zeta(s)}=O(\log T)
\]

因此当$\delta=A/\log T$且$\sigma\ge1$时根据留数定理可知：

```math
\begin{aligned}
    \int_{k-iT}^{k+iT}
    &={1\over\zeta(s)}+\int_{k-iT}^{1-\sigma-\delta-iT}+\int_{1-\sigma-\delta-iT}^{1-\sigma-\delta+iT}+\int_{1-\sigma-\delta+iT}^{k+iT} \\
    &={1\over\zeta(s)}+O\left(x^k\log T\over T\right)+O\left\{x^{1-\sigma-\delta}(\log T)^2\right\} \\
    &={1\over\zeta(s)}+O\left(x^k\log T\over T\right)+O\left\{x^{1-\sigma}(\log T)^2\exp\left(-{A\log x\over\log T}\right)\right\}
\end{aligned}
```

将此结论代入至 @eqp 中便得：

```math {@eqp2}
\sum_{n\le x}{\mu(n)\over n^s}={1\over\zeta(s)}+O\left(x^{1-\sigma}\log x\over T\right)+O\left\{x^{1-\sigma}\exp\left(-{A\log x\over2\log T}\right)\right\}
```

现在把$\log T=\sqrt{\log x}$代入回 @eqp2 中，就能得到结论：

::: theorem [Landau] {@thms}
存在固定常数$c>0$使得对于所有$\sigma\ge1$、$t\in\mathbb R$，均有：
\[
\sum_{n\le x}{\mu(n)\over n^s}={1\over\zeta(s)}+O\left\{x^{1-\sigma}\exp\left(-c\sqrt{\log x}\right)\right\}
\]
特别地，有：
\[
\sum_{n\ge1}{\mu(n)\over n}=0
\]
:::

当$0\le\sigma<1$时我们只需要在采用留数定理时不将$1/\zeta(s)$包含进来即可，
相应结论为：

::: theorem [Landau]
存在常数$c>0$使得当$0\le\sigma<1$时：
\[
\sum_{n\le x}\frac{\mu(n)}{n^s}=
O\left\{x^{1-\sigma}\exp\left(-c\sqrt{\log x}\right)\right\}
\]
特别地，有：
\[
\lim_{x\to\infty}\frac1x\sum_{n\le x}\mu(n)=0
\]
:::

## 与 Riemann 猜想的关系

事实上 Möbius 函数与[[Riemann 猜想]]有着密切的联系：

::: proposition {@prhm}
若 Riemann 猜想成立，则对于所有的$\varepsilon>0$均有：

```math
\sum_{n\le x}\mu(n)=O(x^{\frac12+\varepsilon})
```

其中隐含常数只与$\varepsilon$有关。
:::

::: proof
将$s=0$代入至 @eqp 中，可知：

```math {@eqp3}
\sum_{n\le x}\mu(n)={1\over2\pi i}\int_{k-iT}^{k+iT}{x^w\mathrm dw\over w\zeta(w)}+O\left(x\log x\over T\right)
```

对于 @eqp3 中的积分，利用留数定理可知：

```math {@eqri}
{1\over2\pi i}\int_{k-iT}^{k+iT}{x^w\mathrm dw\over w\zeta(w)}=\int_{k-iT}^{\frac12+\varepsilon-iT}+\int_{\frac12+\varepsilon-iT}^{\frac12+\varepsilon+iT}+\int_{\frac12+\varepsilon+iT}^{k+iT}
```

根据[@titchmarsh1986, (14.14.5)]，可知当 Riemann 猜想成立时对于所有的$\varepsilon>0$、
$\frac12+\varepsilon\le\sigma\le2$、$2\le|t|\le T$时均有：
\[
\left|1\over\zeta(s)\right|=O(T^\varepsilon)
\]
这意味着 @eqri 可以被简化成：

```math
\begin{aligned}
    \int_{k-iT}^{k+iT}
    &\ll{x\over T^{1-\varepsilon}}+x^{\frac12+\varepsilon}T^\varepsilon \\
    &\le x^{\frac12+\varepsilon}(x^{\frac12}T^{-1}+T^\varepsilon)
\end{aligned}
```

现在设$T=x^{\frac12}$并将此结果回代至 @eqp3 中，即可发现对于所有的$\varepsilon'>0$均有：
\[
\sum_{n\le x}\mu(n)\ll x^{\frac12}\log x+x^{\frac12+\varepsilon}\cdot x^{\frac\varepsilon2}\ll x^{\frac12+{3\varepsilon\over2}}
\]
设$\varepsilon=3\varepsilon'/2$即得结论。
:::

事实上，我们也可以用$\mu(n)$的 Dirichlet 级数构造一个与 Riemann 猜想的充要条件：

::: proposition
Riemann 猜想成立当且仅当下列等式对一切$\sigma>1/2$均成立：

```math {@eqnrhm}
\sum_{n\ge1}{\mu(n)\over n^s}={1\over\zeta(s)}
```

:::

::: proof
必要性显然，现证充分性：
对于 @eqp 中的积分，通过留数定理可知：

```math {@eqnri2}
\int_{k-iT}^{k+iT}={1\over\zeta(s)}+\int_{k-iT}^{\frac12-\sigma+\varepsilon-iT}+\int_{\frac12+\sigma+\varepsilon-iT}^{\frac12-\sigma+\varepsilon+iT}+\int_{\frac12-\sigma+\varepsilon+iT}^{k+iT}
```

根据[@titchmarsh1986, (14.14.5)]，可知当 Riemann 猜想成立时对于所有的$\varepsilon>0$、
$\frac12+\varepsilon\le\sigma\le2$、$2\le|t|\le T$时均有：
\[
\left|1\over\zeta(s)\right|=O(T^\varepsilon)
\]
所以 @eqnri2 右侧的积分满足：

```math
\begin{aligned}
    \int_{k-iT}^{\frac12-\sigma+\varepsilon-iT}+\int_{\frac12+\sigma+\varepsilon-iT}^{\frac12-\sigma+\varepsilon+iT}+\int_{\frac12-\sigma+\varepsilon+iT}^{k+iT}
    &\ll x^{1-\sigma}T^{\varepsilon-1}+x^{\frac12-\sigma+\varepsilon}T^\varepsilon \\
    &\le x^{\frac12-\sigma}(x^{\frac12}T^{-1}+T^\varepsilon)
\end{aligned}
```

将此结果回代至 @eqp 中并设$T=x^{\frac12}$，即得：
\[
\sum_{n\le x}{\mu(n)\over n^s}={1\over\zeta(s)}+O(x^{\frac12-\sigma+{3\varepsilon\over2}})
\]
让$\varepsilon$足够小，并令$x\to\infty$即得 @eqnrhm。
:::

## 参考文献

```bibliography
landau1974:
  type: book
  label: Lan74
  author: E. Landau
  year: 1974
  title: Handbuch der Lehre von der Verteilung der Primzahlen
  edition: 3
  publisher: Chelsea Pub. Co.
titchmarsh1986:
  type: book
  label: Tit86
  author: [E. C. Titchmarsh, D. R. Heath-Brown]
  year: 1986
  title: The Theory of the Riemann Zeta-Function
  edition: 2
  publisher: Oxford University Press
```

```terms
Möbius 函数:
  en: Möbius function
  de: Möbiusfunktion
  fr: fonction de Möbius
```
