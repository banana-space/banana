---
title: 几乎必然收敛
categories: [概率论]
navboxes: [概率论]
---

在[[概率论]]中，**几乎必然收敛**是[[随机变量]]的一种
很强的收敛的概念。
大致来说，称一列随机变量 $(X_n)_{n \geq 1}$ 几乎必然收敛到随机变量 $X$，
是指这列随机变量的取值，也就是一个随机的实数列，以概率 $1$ 收敛到 $X$ 的取值。

## 定义

::: definition [随机变量序列的几乎必然收敛]
设实值[[随机变量]] $X$ 和实值随机变量序列 $(X_n)_{n \geq 1}$
均定义在[[概率空间]] $(\Omega, \mathcal{F}, \mathbb{P})$
上。如果
\[
\mathbb{P} \Bigl(
  \lim_{n \to \infty} X_n = X
\Bigr) = 1,
\]
则称 $(X_n)$ **几乎必然收敛**到 $X$，
记为
\[
X_n \xrightarrow{\mathrm{a.s.}} X.
\]
:::

严格地说，上述定义中等式的含义是
\[
\mathbb{P} \Bigl\{
  \omega \in \Omega \Bigm|
  \lim_{n \to \infty} X_n(\omega) = X(\omega)
\Bigr\} = 1.
\]

另外，也可以定义随机变量级数的几乎必然收敛。

::: definition [随机变量级数的几乎必然收敛]
设实值[[随机变量]] $X$ 和实值随机变量序列 $(X_n)_{n \geq 1}$
均定义在[[概率空间]] $(\Omega, \mathcal{F}, \mathbb{P})$ 上。
称随机变量级数
\[
\sum_{n=1}^{\infty} X_n
\]
**几乎必然收敛**到随机变量 $X$，
是指其部分和 $(S_n)_{n \geq 1}$ 几乎必然收敛到 $X$，
其中 $S_n = X_1 + \cdots + X_n$。
:::

## 性质

### 基本性质

设 $X$ 和 $(X_n)_{n \geq 1}$ 分别是[[概率空间]]
$(\Omega, \mathcal{F}, \mathbb{P})$ 上的随机变量和随机变量序列。

- 几乎必然收敛的定义等价于
  \[
  \mathbb{P}\left(\bigcap_{\varepsilon > 0} \bigcup_{k=1}^{\infty} \bigcap_{n=k}^{\infty} (|X_n - X| < \varepsilon)\right) = 1.
  \]
  换言之，对任意 $\varepsilon > 0$，
  \[
  \lim_{k \to \infty}\mathbb{P}\left(\bigcup_{n=k}^{\infty} (|X_n - X| \geq \varepsilon)\right) = 0.
  \]

- 于是，根据事件包含关系不难推出 $X_n \xrightarrow{\mathrm{a.s.}} X$ 蕴含
  $X_n \xrightarrow{p} X$。

- 结合事件无穷多次发生的概念（参见 [[Borel–Cantelli 引理]]），
  $X_n \xrightarrow{\mathrm{a.s.}} X$ 等价于对任意 $\varepsilon > 0$，
  \[
  \mathbb{P}(|X_n - X| \geq \varepsilon \ \mathrm{i.o.}) = 0.
  \]

- 根据 [[Cauchy 收敛准则]]，$(X_n)$ 几乎必然收敛等价于
  存在一个概率为 $1$ 的集合 $\Omega_0$，使得对任意 $\omega \in \Omega_0$
  和 $\varepsilon > 0$，存在 $N = N(\omega, \varepsilon)$ 使得
  \[
  n_1, n_2 \geq N \Rightarrow |X_{n_1}(\omega) - X_{n_2}(\omega)| < \varepsilon.
  \]

- 如果 $X_n \xrightarrow{p} X$，虽然无法推出几乎必然收敛，
  但有子列 $(X_{n_k})$ 满足 $X_{n_k} \xrightarrow{\mathrm{a.s.}} X$。

### 随机变量级数的几乎必然收敛

设 $\sum_{n=1}^{\infty} X_n$ 是随机变量级数。我们显然可以通过上面
的类似于 Cauchy 收敛准则的结论来判断几乎必然收敛性。下面介绍更多的方法。

::: proposition
设 $(X_n)_{n \geq 1}$ 是随机变量序列，满足对某个 $0<r\leq 1$，
$\sum_{n=1}^{\infty} \mathbb{E}|X_n|^r < \infty$。则
$\sum_{n=1}^{\infty} X_n$ 几乎必然收敛。
:::

::: proof
根据 $C_r$ 不等式（参见[[矩]]的内容），有
\[
\mathbb{E}\left(\sum_{n=1}^{\infty} |X_n|\right)^r \leq \sum_{n=1}^{\infty}\mathbb{E}|X_n|^r < \infty,
\]
这表明 $\sum_{n=1}^\infty |X_n|$ 几乎必然收敛，即
$\sum_{n=1}^{\infty} X_n$ 几乎必然绝对收敛，当然也就几乎必然收敛。
:::

在[[大数定律]]的讨论中常考虑相互独立的随机变量序列，它们求和
的收敛性是较为重要的。接下来的目的是证明 Kolmogorov 著名的“三级数定理”，
它把几乎必然收敛问题简化为验证三个数项级数收敛。为此需要两个引理。

::: lemma {@1}
设 $(X_n)_{n \geq 1}$ 是相互独立的随机变量序列。如果

- $\mathbb{E}(X_n) = 0, \quad n\in\mathbb{N}$；

- $\sum_{n=1}^{\infty} \mathbb{E}(X_n^2) < \infty$，

则 $\sum_{n=1}^{\infty} X_n$ 几乎必然收敛。
:::

::: proof
记 $S_n = \sum_{k=1}^{n} X_k$。根据 [[Chebyshev 不等式]]
和条件，当 $m \geq n \to \infty$ 时，有
\[
\begin{aligned}
  P(|S_m - S_n| \geq \varepsilon)
  &\leq \frac{1}{\varepsilon^2} \operatorname{Var}\left(\sum_{k=n+1}^{m} X_k\right)\\
  &= \frac{1}{\varepsilon^2} \sum_{k=n+1}^{m} \mathbb{E}(X_k^2) \to 0.
\end{aligned}
\]
也就是说存在随机变量 $S$ 使得 $S_n \xrightarrow{p} S$。
从而，存在子列使得
\[
S_{n_k} \xrightarrow{\mathrm{a.s.}} S
\]
进一步，根据 [[Kolmogorov 不等式]]，
\[
\begin{aligned}
  \sum_{k=1}^{\infty} \mathbb{P}\left(\max_{n_k \leq j \leq n_{k+1}} |S_j - S_{n_k}| \geq \varepsilon\right)
  &\leq \frac{1}{\varepsilon^2} \sum_{k=1}^{\infty} \sum_{j=n_k+1}^{n_{k+1}} \mathbb{E}(X_j^2)\\
  &\leq \frac{1}{\varepsilon^2} \sum_{j=1}^{\infty} \mathbb{E}(X_j^2) < \infty.
\end{aligned}
\]
令事件
\[
A_k = \left(\max_{n_k \leq j \leq n_{k+1}} |S_j - S_{n_k}| \geq \varepsilon\right), \quad k\in\mathbb{N},
\]
则 $\sum_{k=1}^{\infty} \mathbb{P}(A_k) < \infty$。
由 [[Borel–Cantelli 引理]]，有 $\mathbb{P}(A_n \ \mathrm{i.o.}) = 0$。
因为 $\varepsilon > 0$ 是任意的，故
\[
\max_{n_k \leq j \leq n_{k+1}} |S_j - S_{n_k}| \longrightarrow 0 \quad \mathrm{a.s.},
\]
从而 $S_n \xrightarrow{\mathrm{a.s.}} S$。
:::

在上述引理中，还可以把第二个条件中的 $\mathbb{E}(X_n^2)$ 优化为
$\mathbb{E}|X_n|^r$，其中 $1 < r \leq 2$。

::: lemma {@2}
设 $(X_n)_{n \geq 1}$ 是相互独立的随机变量序列。如果它们一致有界，
即存在 $c > 0$ 使得 $|X_n| \leq c$ 对任意 $n\in\mathbb{N}$
几乎必然成立，则

- 如果 $\mathbb{E}(X_n) = 0$，且 $\sum_{n=1}^{\infty} \operatorname{Var}(X_n) = \infty$，
  则 $\sum_{n=1}^{\infty} X_n$ 几乎必然发散。

- 如果 $\sum_{n=1}^{\infty} X_n$ 几乎必然收敛，则
  $\sum_{n=1}^{\infty} \mathbb{E}(X_n)$ 和 $\sum_{n=1}^{\infty} \operatorname{Var}(X_n)$
  都收敛。
:::

::: proof
对于第一条，对任意 $\varepsilon > 0$ 和 $n\in\mathbb{N}$，由 [[Kolmogorov 不等式]]：
\[
\mathbb{P}\left(\max_{1 \leq k \leq m} |X_{n+1} + \cdots + X_{n+k}| \geq \varepsilon\right)
\geq 1 - \frac{(c + \varepsilon)^2}{\displaystyle\sum_{k=n+1}^{n+m} \mathbb{E}(X_k^2)}.
\]
根据条件和 $\operatorname{Var}(X_k) = \mathbb{E}(X_k^2)$，
令 $m \to \infty$ 得
\[
\mathbb{P}\left(\max_{k \geq 1} |X_{n+1} + \cdots + X_{n+k}| \geq \varepsilon\right) = 1,
\]
也就得到 $\sum_{n=1}^{\infty} X_n$ 几乎必然发散。

对于第二条，先取与 $(X_n)$ 对应同分布且相互独立的序列 $(X_n')$，
并令 $\tilde X_n = X_n - X_n'$。则
\[
|\tilde X_n| \leq 2c \ \mathrm{a.s.}, \quad \mathbb{E}(\tilde X_n) = 0, \quad \operatorname{Var}(\tilde X_n) = 2\operatorname{Var}(X_n).
\]
因为 $\sum_{n=1}^{\infty} X_n$ 几乎必然收敛，故不难得出
$\sum_{n=1}^{\infty} \tilde X_n$ 也几乎必然收敛。根据第一条，有
$2 \sum_{n=1}^{\infty} \operatorname{Var}(X_n) = \sum_{n=1}^{\infty} \operatorname{Var}(\tilde X_n)$
收敛。再根据 @1，有 $\sum_{n=1}^{\infty} (X_n - \mathbb{E}(X_n))$
几乎必然收敛，即得 $\sum_{n=1}^{\infty} \mathbb{E}(X_n)$ 收敛。
:::

现在可以证明三级数定理了。

::: theorem [三级数定理]
设 $(X_n)$ 为相互独立的随机变量序列。则级数 $\sum_{n=1}^\infty X_n$
几乎必然收敛的充要条件是：存在 $c>0$，使得

1. $\sum_{n=1}^\infty \mathbb{P}(|X_n|>c)<\infty$；

2. $\sum_{n=1}^\infty \mathbb{E}(X_nI(|X_n|\leq c))$ 收敛；

3. $\sum_{n=1}^\infty \operatorname{Var}(X_nI(|X_n|\leq c))<\infty$；

其中 $I(A)$ 表示事件 $A$ 的[[指示函数|指示变量]]。
:::

::: proof
必要性。如果 $\sum_{n=1}^{\infty} X_n$ 几乎必然收敛，
则 $X_n \xrightarrow{\mathrm{a.s.}} 0$。设事件
$A_n = (|X_n| \geq c)$，则 $\mathbb{P}(A_n \ \mathrm{i.o.}) = 0$。
因为 $(A_n)$ 是独立的事件序列，所以由 [[Borel–Cantelli 引理]]，必然有第一条成立。
记 $Y_n = X_n I(|X_n| \leq c)$，则第一条表明
\[
\sum_{n=1}^{\infty} \mathbb{P}(Y_n \neq X_n) = \sum_{n=1}^{\infty} P(|X_n| > c) < \infty,
\]
由 [[Borel–Cantelli 引理]]，$\mathbb{P}(Y_n \neq X_n \ \mathrm{i.o.}) = 0$。
因为 $\sum_{n=1}^{\infty} X_n$ 几乎必然收敛，所以 $\sum_{n=1}^{\infty} Y_n$
也几乎必然收敛。注意到 $(Y_n)$ 是一致有界的，根据 @2 得
第二条和第三条成立。

充分性。
如果三个级数收敛，仍按上述记号定义 $Y_n$，
则第一条表明 $\mathbb{P}(Y_n \neq X_n \ \mathrm{i.o.}) = 0$，
也就是说 $\sum_{n=1}^{\infty} X_n$ 与 $\sum_{n=1}^{\infty} Y_n$ 同几乎必然敛散性。
而 @2 和第二、第三条说明后者是几乎必然收敛的，故前者也是。
:::

在必要性的证明中没有指定 $c$ 的值，实际上必要性可以加强为对任意的 $c$ 都成立。

我们最后讨论另一个定理，它说明对于独立的随机变量级数，实际上只要[[收敛（随机变量）|依概率收敛]]
就够了。先证明一个与中位数有关的引理。

::: lemma [Lévy 不等式] {@3}
设 $(X_n)_{n \geq 1}$ 为相互独立的随机变量序列，令
$S_n = \sum_{k=1}^n X_k$。则对任意正数 $\varepsilon$：
\[
\mathbb{P}\left(\max_{1 \leq k \leq n} (S_k + m(S_n - S_k)) \geq \varepsilon\right) \leq 2\mathbb{P}(S_n \geq \varepsilon),\\
\mathbb{P}\left(\max_{1 \leq k \leq n} |S_k + m(S_n - S_k)| \geq \varepsilon\right) \leq 2\mathbb{P}(|S_n| \geq \varepsilon).
\]
其中 $m(X)$ 表示随机变量 $X$ 的[[分位数|中位数]]。
:::

::: proof
先证明第一个式子。令 $t$ 表示使得 $S_k + m(S_n - S_k) \geq \varepsilon$ 成立的最小整数
$k \in \{1, \cdots, n\}$。如果这样的数不存在，则令 $t = n + 1$。
令事件 $B_k = (S_n - S_k \geq m(S_n - S_k))$，则根据中位数的定义
\[
\mathbb{P}(B_k) \geq \frac{1}{2}.
\]
因为事件 $(t = k)$ 只与 $X_1, \cdots, X_k$ 有关，$B_k$ 与 $X_{k+1}, \cdots, X_n$ 有关，
故它们是独立的。另一方面：
\[
\begin{aligned}
  (S_n \geq \varepsilon) &\supseteq (S_n \geq \varepsilon, t \leq n)\\
               &\supseteq \bigcup_{k=1}^{n} (t = k, S_n - S_k - m(S_n - S_k) \geq 0),
\end{aligned}
\]
故
\[
\begin{aligned}
  \mathbb{P}(S_n \geq \varepsilon) &\geq \sum_{k=1}^{n} \mathbb{P}(t = k) \mathbb{P}(B_k)\\
                   &\geq \frac{1}{2} \sum_{k=1}^{n} \mathbb{P}(t = k)\\
                   &= \frac{1}{2} \mathbb{P}(t \leq n)\\
                   &= \frac{1}{2} \mathbb{P}\left(\max_{1 \leq k \leq n} (S_k + m(S_n - S_k)) \geq \varepsilon\right).
\end{aligned}
\]
第一个式子得证。关于第二个式子，实际上只需要把第一个式子
对 $-X_1, \cdots, -X_n$ 再用一遍就能得到。
:::

::: theorem [Lévy 定理]
设 $(X_n)_{n \geq 1}$ 为相互独立的随机变量序列。则 $\sum_{n=1}^{\infty} X_n$
几乎必然收敛的充要条件是它依概率收敛。
:::

::: proof
记 $S_n = \sum_{k=1}^n X_k$。显然只需要证明充分性。
如果 $S_n \xrightarrow{p} S$，则可以取子列 $(S_{n_k})$
使得
\[
\sum_{k=1}^{\infty} \mathbb{P}\left(|S_{n_k} - S| > 2^{-k-1}\right) < \infty.
\]
根据 [[Borel–Cantelli 引理]]，得到 $S_{n_k} \xrightarrow{\mathrm{a.s.}} S$。而且

```math {@x}
\sum_{k=1}^{\infty} \mathbb{P}\left(|S_{n_k} - S_{n_{k-1}}| > 2^{-k}\right) < \infty.
```

根据 @3，对任意 $\varepsilon > 0$：
\[
\begin{aligned}
  &\quad\  \mathbb{P} \left(\max_{n_{k-1} < n \leq n_k} |S_n - S_{n_{k-1}} + m(S_{n_k} - S_n)| \geq \varepsilon\right)\\
  &= \mathbb{P} \left(\max_{n_{k-1} < n \leq n_k} |S_n - S_{n_{k-1}} + m((S_{n_k} - S_{n_{k-1}}) - (S_n - S_{n_{k-1}}))| \geq \varepsilon\right)\\
  &\leq 2\mathbb{P} \left(|S_{n_k} - S_{n_{k-1}}| \geq \varepsilon\right).
\end{aligned}
\]
令 $\varepsilon = 2^{-k}$，代入上面的级数 @x，再使用
[[Borel–Cantelli 引理]]，就得到
\[
\max_{n_{k-1} < n \leq n_k} |S_n - S_{n_{k-1}} + m(S_{n_k} - S_n)| \longrightarrow 0 \ \mathrm{a.s.}.
\]
而
\[
|S_n - S + m(S_{n_k} - S_n)| \leq |S_n - S_{n_{k-1}} + m(S_{n_k} - S_n)| + |S_{n_{k-1}} - S|,
\]
结合 $S_{n_k} \xrightarrow{\mathrm{a.s.}} S$ 就得到
\[
\max_{n_{k-1} < n \leq n_k}|S_n - S + m(S_{n_k} - S_n)| \longrightarrow 0 \ \mathrm{a.s.}.
\]
因为对 $n_k \geq n \to \infty$，有 $S_{n_k} - S_n \xrightarrow{p} 0$，故
$m(S_{n_k} - S_n) \to 0$。这就得到 $S_n \xrightarrow{\mathrm{a.s.}} S$。
:::

```terms
几乎必然收敛:
  en: [almost sure convergence, almost surely converge]
  fr: [convergence presque sûre :f, converger presque sûrement]
  de: fast sichere Konvergenz :f
```
