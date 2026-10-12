---
title: Chebyshev 不等式（数论）
categories: [解析数论]
---

在数论中，**Chebyshev 不等式**一般指存在正数 $x_0$、$c_1$、$c_2$ 使下列不等式

\[
c_1 x\le\vartheta(x)\le\psi(x)\le c_2x
\]

对所有$x\ge x_0$均成立。其中 $\vartheta$、$\psi$ 为[[Chebyshev 函数]]。

## 准备工作

### $\vartheta$ 与 $\psi$ 之关系

结合[[von Mangoldt 函数]]的定义，我们可以发现：

```math
\begin{aligned}
    0
    &\le\psi(x)-\vartheta(x)=\sum_{2\le k\le\log_2x}\vartheta(x^{1/k}) \\
    &\le\vartheta(x^{1/2})+\sum_{3\le k\le\log_2x}\vartheta(x^{1/3}) \\
    &\le x^{1/2}\log x+{x^{1/3}\log^2x\over\log2}
\end{aligned}
```

很明显第二项的增速比第一项慢很多，所以：

::: lemma {@lmc12}
对于$x\ge2$总有：
\[
\vartheta(x)=\psi(x)+O(x^{1/2}\log x)
\]
:::

通过 @lmc12，许多$\psi(x)$和$\vartheta(x)$之间的性质就可以互相转化了。

### $\log\lfloor x\rfloor!$的两种展开

::: lemma [Stirling] {@lmstirling}
设 $T(x)=\log\lfloor x\rfloor!$，则有：
\[
T(x)=x\log x-x+O(\log x)
\]
:::

::: proof
设$N=\lfloor x\rfloor$，则利用积分放缩，可知$T(x)$有上界：

```math
\begin{aligned}
    T(x)
    &=\sum_{1\le n\le N}\log n\le\log N+\sum_{1\le n\le N-1}\int_n^{n+1}\log t\mathrm dt \\
    &=\log N+\int_1^N\log t\mathrm dt=\underbrace{N\log N-N}_{f(N)}+\log N+1
\end{aligned}
```

以及下界：

```math
\begin{aligned}
    T(x)
    &\ge\sum_{1\le n\le N}\int_{n-1}^n\log t\mathrm dt=\int_0^N\log t\mathrm dt \\
    &=N\log N-N
\end{aligned}
```

当 $f(t)=t\log t-t$ 时 $f'(t)=\log t$，我们就可以利用均值定理得到：
\[
|f(N)-f(x)|\le f'(x+1)|N-x|=O(\log x)
\]
这意味着$f(N)=f(x)+O(\log x)$，所以命题得证。
:::

利用$\Lambda(n)$的性质：

\[
\sum_{d|n}\Lambda(d)=\log n
\]

可得：

```math {@eqnvm}
T(x)=\sum_{d\le x}\sum_{k\le x/d}\Lambda(k)=\sum_{d\le x}\psi\left(\frac xd\right)
```

根据 @lmstirling，我们知道：

\[
T(x)-2T\left(\frac x2\right)=x\log2+O(\log x)
\]

将此结论与 @eqnvm 结合，便有：

::: lemma [Ramanujan] {@lmr}
当$x\ge2$时，成立
\[
\psi(x)-\psi\left(\frac x2\right)+\psi\left(\frac x3\right)-\dots=x\log2+O(\log x)
\]
:::

## Chebyshev 上界的证明

由于$x\le y$时$\psi(x)\le\psi(y)$，所以根据 @lmr 可知：

\[
\psi(x)-\psi\left(\frac x2\right)\le x\log2+O(\log x)
\]

这意味着：

```math
\begin{aligned}
    \psi(x)
    &=\psi(x)-\psi\left(\frac x2\right)+\psi\left( \frac x2 \right)-\psi\left(\frac x4\right)+\dots \\
    &=\sum_{r\le\log_2x}\left[ \psi\left(x\over2^{r-1}\right)-\psi\left( x\over2^r \right) \right] \\
    &\le\sum_{r\le\log_2x}{x\over2^{r-1}}\log2+O(\log^2x) \\
\end{aligned}
```

最后结合几何级数的性质，即得：

::: theorem [Chebyshev] {@thcu}
当$x\ge2$时：
\[
\vartheta(x)\le\psi(x)\le2x\log2+O(\log^2x)
\]
:::

## Chebyshev 下界的证明

根据 @lmr 可知：

\[
\psi(x)-\psi\left(\frac x2\right)+\psi\left(\frac x3\right)\ge x\log2+O(\log x)
\]

现在再结合 @thcu，即得：

\[
\psi(x)-\psi\left(\frac x2\right)\ge\frac x3\log2+O(\log^2x)
\]

将此式与 @lmc12 结合，就有：

::: theorem [Bertrand–Chebyshev] {@thcl}
对于$x\ge2$总有：
\[
\psi(x)\ge\vartheta(x)-\vartheta\left(\frac x2\right)\ge\frac x3\log2+O(x^{1/2}\log x)
\]
:::

::: remark
事实上 @thcl 也意味着当$x$充分大时
\[
\sum_{x<p\le2x}\log p>0
\]
因此当$x$充分大时$(x,2x]$中总能找到素数，即 **[[Bertrand 假设]]**。
:::
