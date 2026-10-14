---
title: 作业：Lebesgue 控制收敛，十进制小数的研究
notices:
  - name: 问题
    items:
      - 'A5) 中“对任意的 $A\cap Y\subset \mathcal{A}|_Y$”的 $\subset$ 似乎应为 $\in$。'
---

## 课堂内容的补充与复习

A1) （积分与级数之间的关联）
    考虑正整数集上的测度空间
    $(\mathbb{Z}_{\geqslant 1},\mathcal{P}\left(\mathbb{Z}_{\geqslant 1}\right),\mu)$，
    其中 $\mu$ 是数元素个数的测度：
    \[
    \mu(A)=|A|.
    \]
    考虑这个空间上复数值函数 $f(x)$。证明，$f$ 可积分当且仅当
    \[
    \sum_{n=1}^\infty |f(n)|<\infty
    \]
    并且此时
    \[
    \int_{\mathbb{Z}_{\geqslant 1}}fd\mu = \sum_{n=1}^\infty f(n).
    \]

A2) （Beppo Levi定理的标准应用）
    考虑测度空间 $(X,\mathcal{A},\mu)$ 上的正函数列 $\{g_i\}_{i\geqslant 1}$。
    证明，函数级数 $\displaystyle \sum_{i=1}^\infty g_i$ 是 $X$ 上良好定义的可测正函数并且
    \[
    \int_X \sum_{i=1}^\infty g_i d\mu =  \sum_{i=1}^\infty \int_X g_i d\mu.
    \]

A3) 考虑 $\mathbb{R}$ 上的函数 $f(x)=\dfrac{\sin(x)}{x}$。证明，在Lebesgue的意义下，$f$ 不可积。

A4) $f$ 是测度空间 $(X,\mathcal{A},\mu)$ 上的简单函数。
    证明，$f$ 的积分与 $f$ 作为简单函数所定义的积分是一致的。（提示：利用已经证明的关于积分的线性）

A5) $(X,\mathcal{A},\mu)$ 是测度空间，$Y\in \mathcal{A}$，
    我们定义 $\mathcal{A}\big|_Y = \{A\in \mathcal{A}\mid A\subset Y\}$。
    对任意的 $A\cap Y\subset \mathcal{A}|_Y$，我们定义
    \[
    \mu\big|_{Y}(A\cap Y)=\mu(A\cap Y).
    \]
    证明，$\mu\big|_Y$ 是 $\mathcal{A}|_{Y}$ 上的测度。
    对于任意给定的可测函数 $f\colon Y\rightarrow \mathbb{C}$，令
    \[
    \widehat{f}\colon X\rightarrow \mathbb{C},  \ \ x\mapsto \widehat{f}(x)=\begin{cases}f(x), \ \ &x\in Y;\\
    0, \ \ &x\notin Y.\end{cases}
    \]
    证明，
    $f$ 在 $(Y,\mathcal{A}\big|_Y,\mu\big|_Y)$ 上可积当且仅当 $\widehat{f}$ 在 $(X,\mathcal{A},\mu)$
    上可积，并且此时我们有
    \[
    \int_X \widehat{f}d\mu = \int_Y f d\mu\big|_Y.
    \]

A6) （Fatou引理中的不等式的等号未必能取到）试构造某个测度空间 $(X,\mathcal{A},\mu)$
    上的可测正函数序列 $\{f_i\}_{i\geqslant 1}$，使得该序列逐点地收敛到 $f$ 但是
    \[
    \int_X f d\mu < \liminf_{i\rightarrow \infty}\int_X f_i d\mu.
    \]

A7) $(X,\mathcal{A},\mu)$ 是测度空间。
    证明，对任意可测函数 $f\colon X\rightarrow \mathbb{C}$，
    都存在阶梯函数序列 $\{\varphi_i\}_{i\geqslant 1}$，使得对每个 $x\in X$，都有
    \[
    \displaystyle\lim_{k\rightarrow \infty}\varphi_k(x)=f(x).
    \]

A8) 试构造例子，说明如果 $f$ 和 $g$ 是测度空间 $(X,\mathcal{A},\mu)$ 上的可积函数，
    它们的乘积 $f\cdot g$ 未必是。

## Lebesgue控制收敛定理（必须掌握的内容）

如果不加说明，那么 $\mathbb{R}^n$ 上的测度 $dx$ 总假定是Lebesgue测度。

### 问题B：基本的Lebesgue控制收敛习题

B1) $f$ 是 $\mathbb{R}^n$ 上的可积函数，
    $\{X_k\}_{k\geqslant 1}$ 是单调上升的Borel集的序列并且
    $\displaystyle \lim_{k\rightarrow \infty}X_k=\mathbb{R}^n$。试证明
    \[
    \lim_{k\rightarrow \infty} \int_{X_k} f(x) dx = \int_{\mathbb{R}^n}f(x)dx.
    \]

B2) 对于自然数 $n$，令
    \[
    \Gamma_n = \int_{0}^n (1-\frac{x}{n})^n e^{\frac{x}{2}}dx,
    \]
    试计算 $\displaystyle \lim_{n\rightarrow \infty} \Gamma_n$。

B3) 利用积分 $\displaystyle\int_{0}^1 \frac{dx}{1+x}$ 来计算
    $\displaystyle\sum_{n=1}^\infty \frac{(-1)^{n+1}}{n}$。

B4) $f$ 是 $\mathbb{R}^n$ 上的可积函数，$\{X_k\}_{k\geqslant 1}$ 是Borel-集的序列并且
    \[
    \lim_{k\rightarrow \infty}m(X_k)=0.
    \]
    试证明：
    \[
    \lim_{k\rightarrow \infty} \int_{X_k} f(x) dx = 0.
    \]

B5) $f$ 是 $\mathbb{R}$ 上的可积函数。我们令
    \[
    \widetilde{f}\colon[0,1]\mapsto \mathbb{C}, \ \ x\mapsto \sum_{k\in \mathbb{Z}}f(x+k).
    \]
    证明，$\widetilde{f}$ 是良定义的可测函数并且 $\widetilde{f}$ 在 $[0,1]$ 上可积，并进一步证明
    \[
    \int_{[0,1]}\widetilde{f}(x)dx = \int_\mathbb{R}f(x)dx.
    \]

B6) 对于每个 $x\geqslant 0$，
    我们定义 $\displaystyle F(x)=\int_{0}^\infty \frac{1-\cos(u)}{u^2}e^{-xu}du$。

    - B6-1) 证明，对于 $x\in [0,\infty)$，
      $F(x)$ 是良定义的并计算 $\displaystyle\lim_{x\rightarrow \infty}F(x)$。

    - B6-2) 证明，$F\in C^2\bigl((0,\infty)\bigr)$ 并计算其两阶导数 $F''$。

    - B6-3) 给出 $F$ 的解析表达式。

    - B6-4) 计算积分 $\displaystyle \int_{0}^\infty \frac{1-\cos(u)}{u^2}du$。

    - B6-5) $F(x)$ 在 $0$ 处的右导数是否存在？

### 问题C：卷积初步

$f$ 是 $\mathbb{R}$ 上的可积函数。

C1) 如果 $g$ 是 $\mathbb{R}$ 上的有界的连续函数，证明
    \[
    f*g(x)=\int_\mathbb{R}f(x-y)g(y)dy=\int_\mathbb{R}f(y)g(x-y)dy
    \]
    定义了 $\mathbb{R}$ 上的一个有界的连续函数。

C2) 如果 $g$ 是 $\mathbb{R}$ 上连续可微的函数，并且 $g$ 和 $g'$ 均有界，证明 $f*g$ 是连续可微的，
    并且
    \[
    (f*g)'=f*g'.
    \]

### 问题D：Fourier变换初步

D1) （有限测度的 Fourier 变换）我们在 $\mathbb{R}$ 上取定 Borel-代数（由开集生成的
    $\sigma$-代数）。

    - D1-1) 如果 $\mu$ 是一个有限测度（即 $\mu(\mathbb{R})<\infty$），那么
      \[
      \hat{\mu}(\xi)=\int_{\mathbb{R}}e^{-ix\xi}d\mu(x)
      \]
      定义了 $\mathbb{R}$ 上的一个连续有界的函数（称作是该有限测度的 Fourier 变换）。

    - D1-2) 我们定义 Dirac 测度 $\delta_0$ 如下：对于 Borel-集 $A$，如果 $0\in A$，
      则 $\delta_0(A)=1$；否则 $\delta_0(A)=0$。
      证明，$\delta_0$ 是一个有限测度并计算它的 Fourier 变换。

D2) （可积函数的 Fourier 变换）$f$ 是 $\mathbb{R}$ 上的可积函数。

    - D2-1) 对于 $\xi \in \mathbb{R}$，我们定义
      \[
      \hat{f}(\xi)=\int_{\mathbb{R}}e^{-ix\xi}f(x)dx.
      \]
      证明，上式定义了 $\mathbb{R}$ 上的一个连续有界的函数（称作是 $f$ 的 Fourier 变换）。

    - D2-2) 如果 $g(x)=xf(x)$ 也是 $\mathbb{R}$ 上的可积函数，证明 $\hat{f}(\xi)$ 连续可微并且
      \[
      \frac{d}{d\xi}\hat{f}(\xi) =  -i\hat{g}(\xi).
      \]

    - D2-3)（Riemann–Lebesgue引理）证明，对任意的 $f\in \mathcal{L}^1(\mathbb{R},dx)$，我们都有
      \[
      \lim_{\xi\rightarrow \infty}\widehat{f}(\xi)=0.
      \]
      （提示：先对特殊的简单函数来证明）

## 选做题：测度理论

### 十进制小数的研究

对 $x\in[0,1)$，
我们将它按照十进制小数展开写成 $\displaystyle x=\sum_{n=1}^\infty \frac{a_n(x)}{10^n}$，
其中 $a_n(x)\in \{0,1,\cdots, 9\}$。

E1) 证明，对 $x\in [0,1)$，下面的四个表述等价：

    - $x$ 允许至少两种不同的上述小数展开；

    - $x$ 有一种小数展开使得存在 $n_0$，当 $n\geqslant n_0$ 时，$a_n=0$；

    - $x$ 有一种小数展开使得存在 $n_0$，当 $n\geqslant n_0$ 时，$a_n=9$；

    - $x$ 可写为 $\dfrac{m}{10^k}$ 的形式，其中 $m,k$ 为整数。

    在此之后，我们用第二种表示，从而上述十进制小数展开是唯一的。

E2) 对 $\alpha_1, \alpha_2,\cdots, \alpha_n \in \{0,1,\cdots, 9\}$，我们定义
    \[
    I(\alpha_1,\cdots,\alpha_n) = \{x\in [0,1)\mid a_i(x)=\alpha_i, i=1,2, \cdots,n\}.
    \]
    证明，当 $n$ 固定的时候，
    不同的 $(\alpha_1,\cdots,\alpha_n)$ 所定义的 $I(\alpha_1,\cdots,\alpha_n)$ 两两不交并且恰好覆盖
    $[0,1)$。
    进一步说明 $I(\alpha_1,\cdots,\alpha_n)$ 是形如 $[a,b)$ 的区间并确定 $a,b$ 及该区间的长度。

E3) 给定子集 $A\subset [0,1)$ 和 $n\geqslant 1$，我们定义
    \[
    N_n(A) =\#\bigl\{I(\alpha_1,\cdots,\alpha_n)\bigm| I(\alpha_1,\cdots,\alpha_n)\cap A \neq \emptyset\bigr\}.
    \]
    证明，极限 $\displaystyle \lim_{n\rightarrow \infty}\frac{N_n(A)}{10^n}$ 存在。

E4) 假定 $A$ 是 Borel 集合，$m(A)$ 为其 Lebesgue 测度。
    证明，$\displaystyle m(A) \leqslant \lim_{n\rightarrow \infty}\frac{N_n(A)}{10^n}$。

E5) 举例子使得上述不等式中等号成立或者不成立。

E6) 我们定义
    \[
    A_{1^\times}=\{x\in[0,1)\mid\text{对每个}~n, a_n(x) \neq 1\}.
    \]
    证明，$A_{1^\times}$ 是 Borel 集并计算其的Lebesgue测度。

E7) 证明，
    $N_{n+1}(A_{1^\times}) \leqslant 9 N_{n}(A_{1^\times})$ 并利用这个不等式来检验上一步测度的计算。

E8) 对于 $\alpha_1,\cdots,\alpha_n \in \{0,1,2,\cdots\}$，定义
    \[
    A_{(\alpha_1,\cdots,\alpha_n)^\times}=\{x\in[0,1)\mid(\alpha_1,\cdots,\alpha_n)~\text{不作为~$x$~小数展开的连续的~$n$~项出现}\}.
    \]
    证明，$A_{(\alpha_1,\cdots,\alpha_n)^\times}$ 是 Borel 集。

E9) 证明，
    $N_{m+n}(A_{(\alpha_1,\cdots,\alpha_n)^\times}) \leqslant (10^n-1) N_{m}(A_{(\alpha_1,\cdots,\alpha_n)^\times})$
    并计算 $A_{(\alpha_1,\cdots,\alpha_n)^\times}$ 的测度。

E10) 证明，对几乎处处的 $x\in [0,1)$，
     任何由 $0,1,\cdots,9$ 构成的有限长度的字符串都会在 $x$ 的十进制小数展开中出现无限多次。

### 一个Borel集的研究

我们把有理数写成 $\dfrac{p}{q}$ 的形式并要求 $q>0$ 并且 $p$ 和 $q$ 互素。
给定 $n\in \mathbb{Z}_{\geqslant 0}$ 和 $\varepsilon>0$，定义
\[
A_{n,\varepsilon}=\bigcup_{\frac{p}{q}\in \mathbb{Q}}\bigl(\frac{p}{q}-\frac{\varepsilon}{q^n},\frac{p}{q}+\frac{\varepsilon}{q^n}\bigr),\ \ \widetilde{A_{n,\varepsilon}}= A_{n,\varepsilon}\cap [0,1], \ \ A_{n}=\bigcap_{\varepsilon>0}A_{n,\varepsilon},\ \ \widetilde{A_{n}}=\bigcap_{\varepsilon>0}\widetilde{A_{n,\varepsilon}}.
\]

F1) $A_{n}$ 是 $\mathbb{R}$ 上稠密的 Borel 集。

F2) 证明，如果 $n\geqslant 3$，那么 $A_{n}$ 是零测集（Lebesgue测度为零）。

F3) 证明，$\displaystyle \bigcap_{n} A_n \neq \mathbb{Q}$。

F4) 证明，$\displaystyle \bigcap_n A_n$ 是不可数集。

F5) 证明，$\displaystyle \bigcap_n A_n -\mathbb{Q}$ 在 $\mathbb{R}$ 中稠密。

F6) 证明，当 $n=2$ 并且 $\varepsilon=1$ 时，$A_{2,1}=\mathbb{R}$。

F7) 证明，$A_1=\mathbb{R}$。

::: -remark [寄语]
When I was about thirteen, the library was going to get *Calculus for the Practical Man*. By this time I knew, from reading the encyclopedia, that calculus was an important and interesting subject, and I ought to learn it.

<align right>
—— Richard P. Feynman
</align>
:::
