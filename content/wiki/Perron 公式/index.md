---
title: Perron 公式
categories: [解析数论]
notices:
  - name: 问题
    items:
      - '@thperrons 中的 $\sigma_0$ 似乎没有定义（似乎应为 $\sigma_a$）；误差项 $x^{1-\sigma}(\log x)^\alpha/T$ 似乎只在 $\sigma_a=1$ 时与 $c$ 的取法相符。'
      - “调和数的渐近展开”一节中，围道左侧的横坐标先记作 $-k$，后又写作 $c=-A/\log T$，似乎应为 $k=A/\log T$；同一处等式两侧积分前的系数 ${1\over2\pi i}$ 似乎也不一致。
---

**Perron 公式**一般指下列用于估计[[Dirichlet 级数]]部分和的积分公式：

```math {@eqnp0}
\mathop{\sum_{n\le x}}'{a_n\over n^s}=\lim_{T\to+\infty}{1\over2\pi i}\int_{c-iT}^{c+iT}{x^w\over w}F(s+w)\mathrm dw
```

其中 $\mathop{\sum_{n\le x}}'$ 在 $x$ 为整数时取柯西主值，$F(s)$ 为 $a_n$ 对应的 Dirichlet 级数。

## Perron 公式的起源

倘若我们定义：

\[
H(t)=\begin{cases}
  0 & t<0 \\
  1 & t\ge0
\end{cases}
\]

则根据 Laplace 逆变换公式可以发现，当 $t\ne0$、$c>0$ 时：

```math {@eqnh}
H(t)={1\over2\pi i}\int_{c-i\infty}^{c+i\infty}{e^{wt}\over w}\mathrm dw
```

因此形式上我们可以发现，当 $x$ 不为整数时：

```math
\begin{aligned}
    \sum_{n\le x}{a_n\over n^s}
    &=\sum_{n\ge1}{a_n\over n^s}H(\log x-\log n) \\
    &=\sum_{n\ge1}{1\over2\pi i}\int_{c-i\infty}^{c+i\infty}\left(\frac xn\right)^w{a_n\over n^s}{\mathrm dw\over w} \\
    &={1\over2\pi i}\int_{c-i\infty}^{c+i\infty}{x^w\over w}F(s+w)\mathrm dw
\end{aligned}
```

但由于 @eqnh 中的柯西主值积分不绝对收敛，
所以直接用形如 @eqnp0 的反演公式来研究渐近问题将会非常困难。
因此接下来我们要把 @eqnh 化为带误差项的有限积分，从而得到可操作性更强的 Perron 公式。

## 带误差项的 Perron 公式

### 阶梯函数的积分公式

现在我们设 $T>0$ 并研究积分：

```math {@eqnit}
I(t;c,T)={1\over2\pi i}\int_{c-iT}^{c+iT}{e^{wt}\over w}\mathrm dw
```

很明显当 $t>0$ 时 $I(t;c,T)$ 在 $c\to-\infty$ 时趋于零，此时根据留数定理可知，当 $c,k>0$ 时：

```math
\begin{aligned}
    I(t;c,T)-I(t;-k,T)-1
    &=\int_{c-iT}^{-k-iT}+\int_{-k+iT}^{c+iT} \\
    &\ll\frac1T\int_{-k}^c e^{rt}\mathrm dt={e^{ct}-e^{-kt}\over Tt}
\end{aligned}
```

另一方面，当 $t<0$ 时 $I(t;c,T)$ 在 $c\to+\infty$ 时趋于零，所以 $c,k>0$ 时有：

```math
\begin{aligned}
    I(t;c,T)-I(t;k,T)
    &=\int_{c-iT}^{k-iT}+\int_{k+iT}^{c+iT} \\
    &\ll{e^{ct}-e^{kt}\over T|t|}
\end{aligned}
```

现在令 $k\to+\infty$，我们就可以把上面两个结论统一，并得到适用于 $t\ne0$ 的表达式：

```math {@eqnh2}
H(t)=I(t;c,T)+O\left( e^{ct}\over T|t| \right)
```

当 $z\to0$ 时我们知道 $e^z=1+O(|z|)$，所以当 $t$ 在零附近时：

```math
\begin{aligned}
    I(t;c,T)
    &={1\over2\pi i}\int_{c-iT}^{c+iT}{e^{ct}\mathrm dw\over w}+O\left\{ e^{ct}\int_{c-iT}^{c+iT}|t\Im(w)|{|\mathrm dw|\over|w|} \right\} \\
    &=O(e^{ct})+O\left\{ e^{ct}|t|\int_0^T\mathrm dr \right\}=O(e^{ct}(1+|t|T))
\end{aligned}
```

很明显当 $|t|\le T^{-1}$ 时右侧就变成了 $O(1)$，
所以将 $|t|\le T^{-1}$ 的误差项和 $|t|\ge T^{-1}$ 时的 @eqnh2 结合起来，便得结论：

::: lemma {@lmit}
对于一切实数 $t$ 和正实数 $T>0$ 均有：
\[
|H(t)-I(t;c,T)|\ll e^{ct}\min\left({1\over T|t|},1 \right)
\]
:::

### 第一型 Perron 公式

现在我们对部分和 $\sum_{n\le x}a_nn^{-s}$ 套用 @lmit，并结合 @eqnit 可知：

::: theorem {@thperron}
若 $\{a_n\}_{n\ge1}$ 为 Dirichlet 级数 $F(s)$ 的系数，则当 $\Re(s)=\sigma$、$c>0$、$T\ge2$ 时：

```math {@eqnp}
\sum_{n\le x}{a_n\over n^s}={1\over2\pi i}\int_{c-iT}^{c+iT}{x^w\over w}F(s+w)\mathrm dw+R
```

其中误差项 $R$ 满足：

```math {@eqnr}
R\ll\sum_{n\ge1}{|a_n|\over n^\sigma}\left( \frac xn \right)^c\min\left( {1\over T|\log x/n|},1 \right)
```

:::

在文献 [@tenenbaum1995] 中，@thperron 被称为**第一型 Perron 公式**。

### 误差项 $R$ 的简化

从 @eqnr 中我们可以发现第一型 Perron 公式余项中的分母 $|\log x/n|$ 处理起来是最棘手的。
因此我们先考虑把 $|\log x/n|\ge\log2$ 的情况分离出来，便有：

```math {@eqnr0}
R\ll{x^c\over T}\sum_{n\ge1}{|a_n|\over n^{\sigma+c}}+\underbrace{\sum_{x/2\le n\le2x}{|a_n|\over n^\sigma}\left( \frac xn \right)^c\min\left({1\over T|\log x/n|},1\right)}_{R_1}
```

当 $z\to0$ 时我们知道 $\log(1+z)\sim z$，所以 $x/2\le n\le2x$ 时总有：

\[
\left|\log\frac xn\right|\gg{|x-n|\over x}
\]

利用这一点，$R_1$ 就可以被化为：

```math
\begin{aligned}
    R_1
    &\ll\sum_{x/2\le n\le2x}{|a_n|\over n^\sigma}\left(\frac xn\right)^c\min\left({x\over T|x-n|},1\right) \\
    &\ll{1\over x^\sigma}\sum_{x/2\le n\le2x}|a_n|\min\left({x\over T|x-n|},1\right)
\end{aligned}
```

现在我们设 $N$ 为满足 $a_N\ne0$ 且 $|x-N|$ 达到最小值的正整数，则有：

```math {@eqnr1}
R_1\ll{x^{1-\sigma}\over T}\underbrace{\sum_{\substack{x/2\le n\le2x\\n\ne N}}{|a_n|\over|x-n|}}_{R_3}+{|a_N|\over x^\sigma}\min\left( {x\over T|x-N|},1 \right)
```

现在我们设正整数 $N_1$ 同时满足 $a_{N_1}\ne0$ 和 $N_1<N$，
正整数 $N_2$ 同时满足 $a_{N_2}\ne0$ 和 $N_2>N$，则根据 $N$ 的定义可知 $i=1,2$ 时 $|x-N_i|\ge1/2$，
所以

```math
\begin{aligned}
    R_3
    &\ll\max_{\substack{x/2\le n\le2x\\n\ne N}}|a_n|\left( \sum_{x/2\le n\le N_1}{1\over x-n}+\sum_{N_2\le n\le 2x}{1\over n-x} \right) \\
    &\ll\max_{\substack{x/2\le n\le2x\\n\ne N}}|a_n|\left( \log{x/2\over x-N_1}+\log{x\over N_2-x} \right) \\
    &\ll\max_{\substack{x/2\le n\le2x\\n\ne N}}|a_n|\left( \log{x/2\over1/2}+\log{x\over1/2} \right)\ll(\log x)\max_{\substack{x/2\le n\le2x\\n\ne N}}|a_n|
\end{aligned}
```

至此我们完成了对误差项 $R$ 的简化。整合起来，我们就得到了**第二型 Perron 公式**。

### 第二型 Perron 公式

现在将 $R_3$ 的上界与 @eqnr0、@eqnr1 相结合，便有：

::: theorem {@thperron2}
若 $\{a_n\}_{n\ge1}$ 为 Dirichlet 级数 $F(s)$ 的系数，则当 $\Re(s)=\sigma$、$c>0$、$T\ge2$ 时：

```math
\begin{aligned}
    \sum_{n\le x}{a_n\over n^s}
    &={1\over2\pi i}\int_{c-iT}^{c+iT}{x^w\over w}F(s+w)\mathrm dw \\
    &+O\left\{ {x^c\over T}\sum_{n\ge1}{|a_n|\over n^{\sigma+c}} \right\}+O\left\{{x^{1-\sigma}\log x\over T}\max_{\substack{x/2\le n\le2x\\n\ne N}}|a_n|\right\} \\
    &+O\left\{ {|a_N|\over x^\sigma}\min\left({x\over T|x-N|},1\right) \right\}
\end{aligned}
```

其中 $N$ 为满足 $a_N\ne0$ 且距 $x$ 最近的整数。
:::

### 简化的 Perron 公式

@thperron2 的误差项非常复杂，但如果我们对参数进行更多的限制，就可以得到误差项更简单的 Perron 公式：

::: theorem
若 $\{a_n\}_{n\ge1}$ 为 Dirichlet 级数 $F(s)$ 的系数，则当 $\Re(s)=\sigma$、$c>0$、
$2\le T\le x$ 时：

```math
\begin{aligned}
    \sum_{n\le x}{a_n\over n^s}
    &={1\over2\pi i}\int_{c-iT}^{c+iT}{x^w\over w}F(s+w)\mathrm dw \\
    &+O\left\{ {x^c\over T}\sum_{n\ge1}{|a_n|\over n^{\sigma+c}} \right\}+O\left\{{x^{1-\sigma}\log x\over T}\max_{x/2\le n\le2x}|a_n|\right\}
\end{aligned}
```

:::

当 $a_n=1$ 时，我们发现 $\sigma>1$ 时 $F(s)=\zeta(s)\ll(\sigma-1)^{-1}$。所以我们可以做如下推广：

::: theorem {@thperrons}
若 Dirichlet 级数 $F(s)=\sum_{n\ge1}a_nn^{-s}$ 的绝对收敛横坐标为 $\sigma_a$，且存在 $\alpha>0$，
使得当 $u>\sigma_a$ 时：
\[
\sum_{n\ge1}{|a_n|\over n^u}=O\left\{1\over(u-\sigma_a)^\alpha\right\}
\]
则当 $\Re(s)=\sigma\le\sigma_0$、$c=\sigma_0-\sigma+(\log x)^{-1}$、$T\ge2$ 时：

```math
\begin{aligned}
    \sum_{n\le x}{a_n\over n^s}
    &={1\over2\pi i}\int_{c-iT}^{c+iT}{x^w\over w}F(s+w)\mathrm dw \\
    &+O\left\{ {x^{1-\sigma}(\log x)^\alpha\over T}\right\}+O\left\{{x^{1-\sigma}\log x\over T}\max_{x/2\le n\le2x}|a_n|\right\} \\
    &+O\left\{ {|a_N|\over x^\sigma}\min\left({x\over T|x-N|},1\right) \right\}
\end{aligned}
```

其中 $N$ 为满足 $a_N\ne0$ 且距 $x$ 最近的整数。
倘若在此基础上再要求 $T\le x$，则上式中的最后一项可以被忽略掉。
:::

## 应用

Perron 公式在数论上有诸多应用。

### 调和数的渐近展开

我们不难发现 $\zeta(s)$ 恰好在 $\alpha=1$ 时满足 @thperrons 的条件，所以当 $c=(\log x)^{-1}$、
$T\ge2$ 时：

\[
\sum_{n\le x}\frac1n={1\over2\pi i}\int_{c-iT}^{c+iT}{x^w\over w}\zeta(w+1)\mathrm dw+O\left( \log x\over T \right)+O\left(\frac1x\right)
\]

现在我们设 $k>0$，则根据留数定理可知：

\[
\int_{c-iT}^{c+iT}={1\over2\pi i}\int_{(0+)}{x^w\over w}\zeta(w+1)\mathrm dw+\int_{c-iT}^{-k-iT}+\int_{-k-iT}^{-k+iT}+\int_{-k+iT}^{c+iT}
\]

由 [@tenenbaum1995, 定理 16] 可知，存在 $A>0$，
使得当 $c=-A/\log T$ 时 $\zeta(1+w)$ 在积分路径内均为 $O(\log T)$，于是：

\[
\int_{c-iT}^{-k-iT}+\int_{-k-iT}^{-k+iT}+\int_{-k+iT}^{c+iT}
\ll (\log T)^2\exp\left( -{A\log x\over\log T} \right)+{\log T\over T}
\]

对于留数，利用 $\zeta(s)$ 在 $s\to1$ 时的展开式

\[
\zeta(s)={1\over s-1}+\gamma+O(|s-1|)
\]

可得：

```math
\begin{aligned}
    {1\over2\pi i}\int_{(0+)}{x^w\over w}\zeta(w+1)\mathrm dw
    &={1\over2\pi i}\int_{(0+)}{x^w\over w}\left[\frac1w+\gamma+O(|w|)\right]\mathrm dw \\
    &={1\over2\pi i}\int_{(0+)}{x^w\over w^2}\mathrm dw+{\gamma\over2\pi i}\int_{(0+)}{x^w\over w}\mathrm dw \\
    &=x^0\log x+x^0\gamma=\log x+\gamma
\end{aligned}
```

因此取 $\log T=\sqrt{\log x}$ 以及 $0<c_0<\min(1,A)$，即得：

```math {@eqnhp}
\sum_{n\le x}\frac1n=\log x+\gamma+O\left\{ \exp\left(-c_0\sqrt{\log x}\right) \right\}
```

事实上利用初等方法，@eqnhp 的误差项就可以被改进到 $O(1/x)$。
这个例子也体现出：即使 Perron 公式是一种非常通用的解析方法，有时初等方法也能给出更好的误差项。

## 参考文献

```bibliography
tenenbaum1995:
  type: book
  label: Ten95
  author: G. Tenenbaum
  year: 1995
  title: Introduction to Analytic and Probabilistic Number Theory
  publisher: Cambridge University Press
titchmarsh1986:
  type: book
  label: Tit86
  author: [E. C. Titchmarsh, D. R. Heath-Brown]
  year: 1986
  title: The Theory of the Riemann Zeta-Function
  edition: 2
  publisher: Oxford University Press
```
