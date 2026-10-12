---
title: Euler 函数
categories: [初等数论, 解析数论]
notices:
  - name: 问题
    items:
      - “倒数和”一节中由分部求和得到的 $S_2(x)$ 的表达式里，${S_1(x)\over x}$ 一项的符号似乎应为负（不影响其后的估计）。
---

在数论中，
Euler 函数 $\varphi(n)$
表示大小不超过 $n$ 且与 $n$ 互素的正整数个数。

## 定义

::: definition
Euler 函数是函数
\[
\varphi \colon \mathbb{N}_+ \to \mathbb{N},
\quad \varphi(n) = 1, 2, \dots, n\ 中与\ n\ 互素的正整数个数.
\]
:::

## 性质

### 基本性质

<see>[[Möbius 函数 (数论)]]</see>

利用 Möbius 反演，可知：

\[
\begin{aligned}
  \varphi(n)
  &=\sum_{\substack{k\le n\\(k,n)=1}}1=\sum_{k\le n}\sum_{d|(k,n)}\mu(d) \\
  &=\sum_{d|n}\mu(d)\sum_{\substack{k\le n\\d|k}}1=\sum_{d|n}\mu(d)\frac nd
\end{aligned}
\]

将此与[[Dirichlet 卷积]]的性质结合，我们就可以得到 Euler 函数的若干基本性质：

::: proposition
Euler 函数是[[积性函数]]，即$a,b$互素时$\varphi(ab)=\varphi(a)\varphi(b)$
:::

::: proposition {@prop-eulerprod}
\[
\varphi(n)=n\prod_{p|n}\left(1-\frac1p\right)
\]
:::

::: proposition
\[
\sum_{d|n}\varphi(d)=n
\]
:::

### Euler 定理

::: theorem [Euler]
当$(a,q)=1$时总有$a^{\varphi(q)}\equiv1\pmod q$
:::

::: proof
用$a_1,a_2,\dots,a_{\varphi(q)}$表示模$q$[[缩剩余系]]$\mathbb{Z}_q^\times$中的所有元素。
则利用$\mathbb{Z}_q^\times$的乘法封闭性可知对于任意$a\in\mathbb{Z}_q^\times$总有：
\[
\prod_{1\le i\le\varphi(q)}(a_ia)\equiv\prod_{1\le i\le\varphi(q)}a_i\pmod q
\]
再利用消去律，即得：
\[
a^{\varphi(q)}\equiv1\pmod q
\]
:::

### 渐近性质

#### 最大阶与最小阶

由于$\varphi(n)\le n-1$且对于所有素数$p$均有$\varphi(p)=p-1$。
而因为素数有无穷个，所以$n$就是$\varphi(n)$的最大阶：

::: proposition [Euler 函数的最大阶]
\[
\limsup_{n\to\infty}{\varphi(n)\over n}=1
\]
:::

另外一方面，当$1\le t\le n$时利用 @prop-eulerprod 可知：

\[
{\varphi(n)\over n}\ge\prod_{p\le t}\left(1-\frac1p\right)\prod_{\substack{p|n\\p>t}}\left(1-\frac1p\right)
\]

利用[[Mertens 定理]]可知：

\[
\prod_{p\le t}\left(1-\frac1p\right)={e^{-\gamma}\over\log t}+O\left(1\over\log^2t\right)
\]

很明显$n$中$>t$的素因子个数不超过$\log n/\log t$，所以有：

\[
\begin{aligned}
  {\varphi(n)\over n}
  &>{e^{-\gamma}\over\log t}\left(1-\frac1t\right)^{\log n/\log t}\left\{ 1+O\left(1\over\log t\right) \right\} \\
  &={e^{-\gamma}\over\log t}\left\{ 1+O\left(\log n\over t\log t\right) \right\}\left\{ 1+O\left(1\over\log t\right) \right\}
\end{aligned}
\]

现代入$t=\log n$，即得：

```math {@eqn-euler-inf}
\varphi(n)>{e^{-\gamma}n\over\log\log n}\left\{1+O\left(1\over\log\log n\right)\right\}
```

另一方面当$n_x$表示大小不超过$x$的素数乘积时，有：

\[
\varphi(n_x)=n_x\prod_{p\le x}\left(1-\frac1p\right)\sim{e^{-\gamma}n_x\over\log x}
\]

然而根据[[素数定理]]可知：

\[
\log n_x=\sum_{p\le x}\log p=\vartheta(x)\sim x
\]

所以有：

```math {@eqn-euler-pnt}
\varphi(n_x)\sim{e^{-\gamma}n_x\over\log\log n_x}
```

现在将 @eqn-euler-inf 和 @eqn-euler-pnt 相结合，
可知$\varphi(n)$的最小阶为$e^{-\gamma}n/\log\log n$：

::: proposition [Euler 函数的最小阶]
\[
\liminf_{n\to\infty}{\varphi(n)\log\log n\over n}=e^{-\gamma}
\]
:::

#### 平均阶

利用$\varphi(n)$的定义，可知：

\[
\begin{aligned}
  \sum_{n\le x}\varphi(n)
  &=\sum_{n\le x}\sum_{n=ab}\mu(a)b=\sum_{a\le x}\mu(a)\sum_{b\le x/a}b \\
  &=\sum_{a\le x}\mu(a)\left\{ {x^2\over2a^2}+O\left( \frac xa \right) \right\} \\
  &={x^2\over2}\sum_{a\le x}{\mu(a)\over a^2}+O\left\{ x\sum_{a\le x}\frac1a \right\} \\
\end{aligned}
\]

利用[[Dirichlet 级数]]的 Euler 乘积可知：

\[
\sum_{a\ge1}{\mu(a)\over a^2}=\prod_p\left(1-{1\over p^2}\right)={1\over\zeta(2)}
\]

再根据常用结论$\sum_{a>x}1/a^2=O(1/x)$以及$\sum_{a\le x}1/a=O(\log x)$，我们就得到了结论：

::: proposition [Euler 函数的平均阶]
\[
\sum_{n\le x}\varphi(n)={x^2\over2\zeta(2)}+O(x\log x)
\]
换言之，$\varphi(n)$的均阶为$n/\zeta(2)$。
:::

#### 倒数和

在本节中，我们将证明：

::: theorem [Landau] {@th-euler-reciprocal}
存在常数$A,B$使得：
\[
\sum_{n\le x}{1\over\varphi(n)}=A(\log x+B)+O\left(\log x\over x\right)
\]
其中：
\[
A={\zeta(2)\zeta(3)\over\zeta(6)}={315\zeta(3)\over2\pi^4}
\]
\[
B=\gamma-\sum_p{\log p\over p^2-p+1}
\]
:::

利用 @prop-eulerprod，可知：

\[
{1\over\varphi(n)}=\frac1n\prod_{p|n}\left(1+{1\over p-1}\right)=\frac1n\sum_{d|n}{\mu^2(d)\over\varphi(d)}
\]

因此有：

\[
\begin{aligned}
  \sum_{n\le x}{1\over\varphi(n)}
  &=\sum_{n\le x}\frac1n\sum_{n=ab}{\mu^2(a)\over\varphi(a)}=\sum_{a\le x}{\mu^2(a)\over a\varphi(a)}\sum_{b\le x/a}\frac1b \\
  &=\sum_{a\le x}{\mu^2(a)\over a\varphi(a)}\left\{ \log\frac xa+\gamma+O\left( \frac ax \right) \right\} \\
  &=(\log x+\gamma)\sum_{a\le x}{\mu^2(a)\over a\varphi(a)}+\sum_{a\le x}{\mu^2(a)\over a\varphi(a)}(-\log a) \\
  &+O\left\{ \frac1x\sum_{a\le x}{\mu^2(a)\over\varphi(a)} \right\}
\end{aligned}
\]

当$F(s)$表示$\mu^2(n)/\varphi(n)$的[[Dirichlet 级数]]时，根据 Euler 乘积可知：

```math {@eqn-euler-fs}
F(s)=\sum_{a\ge1}{\mu^2(a)\over a^s\varphi(a)}=\prod_p\left(1+{p^{-s}\over p-1}\right)=\prod_p{p^{-s}+p-1\over p-1}
```

这意味着：

\[
\begin{aligned}
  F(1)
  &=\prod_p{p^{-2}-p^{-1}+1\over1-p^{-1}}=\prod_p{1+p^{-3}\over1-p^{-2}} \\
  &=\prod_p{1-p^{-6}\over(1-p^{-2})(1-p^{-3})}={\zeta(2)\zeta(3)\over\zeta(6)}=A
\end{aligned}
\]

另一方面通过对 @eqn-euler-fs 取对数导可得：

\[
\begin{aligned}
  {F'\over F}(s)
  &={\mathrm d\over\mathrm ds}\log F(s)=\sum_p{\mathrm d\over\mathrm ds}\log{p^{-s}+p-1\over p-1} \\
  &=\sum_p{-p^{-s}\log p\over p^{-s}+p-1}=-\sum_p{\log p\over p^{s+1}-p^s+1}
\end{aligned}
\]

因此有：

\[
F'(1)=F(1){F'\over F}(1)=A(B-\gamma)
\]

另一方面由于：

\[
\begin{aligned}
  S_1(x)
  &=\sum_{a\le x}{\mu^2(a)\over\varphi(a)}\le\sum_{\substack{p|a\Rightarrow p\le x}}{\mu^2(a)\over\varphi(a)} \\
  &=\prod_{p\le x}\left(1+{1\over p-1}\right)=\prod_{p\le x}\left(1-\frac1p\right)^{-1}=O(\log x)
\end{aligned}
\]

所以利用分部求和法，可知：

\[
\begin{aligned}
  S_2(x)
  &=\sum_{a>x}{\mu^2(a)\over a\varphi(a)}={S_1(x)\over x}+\int_x^\infty{S_1(t)\over t^2}\mathrm dt \\
  &\ll{\log x\over x}+\int_x^\infty{\log t\over t^2}\mathrm dt=O\left(\log x\over x\right)
\end{aligned}
\]

同样地，有：

\[
\begin{aligned}
  S_3(x)
  &=\sum_{a>x}{\mu^2(a)\over a\varphi(a)}\log a=-\int_x^\infty\log t\mathrm dS_2(t) \\
  &=S_2(x)\log x+\int_x^\infty{S_2(t)\over t}\mathrm dt \\
  &=S_2(x)\log x+O\left( \log x\over x \right)
\end{aligned}
\]

综上所述，可知：

\[
\begin{aligned}
  \sum_{n\le x}{1\over\varphi(n)}
  &=[F(1)-S_2(x)](\log x+\gamma)+F'(1)+S_3(x)+O\left( S_1(x)\over x \right) \\
  &=A(\log x+B)-S_2(x)\log x+S_3(x)+O\left( \log x\over x \right) \\
  &=A(\log x+B)+O\left( \log x\over x \right)
\end{aligned}
\]

至此 @th-euler-reciprocal 证明完毕。

```terms
Euler 函数:
  en: Euler's totient function
  de: 'eulersche $\varphi$-Funktion'
  fr: indicatrice d'Euler
```
