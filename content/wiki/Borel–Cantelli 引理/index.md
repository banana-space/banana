---
title: Borel–Cantelli 引理
aliases: [Borel-Cantelli 引理]
categories: [概率论]
navboxes: [概率论]
---

**Borel–Cantelli 引理**是[[概率论]]中的结论，
是一种基本的[[零一律]]。
它说明，假设有无穷个[[随机事件]]，则在一定条件下，
这些事件中有无穷多个事件同时发生的[[概率]]是 $0$ 或 $1$，
取决于这些事件发生的概率之和是否有限。

## 陈述与证明

::: definition [上极限]
设 $(A_n)_{n \geq 1}$ 是一列[[集合]]。
则其 **[[上极限 (集合论)|上极限]]** 定义为集合
\[
\limsup_{n \to \infty} A_n =
\bigcap_{k=1}^{\infty} \bigcup_{n=k}^{\infty} A_n.
\]
:::

在上述定义中，若 $A_n$ 是某个[[概率空间]]
$(\Omega, \mathcal{F}, \mathbb{P})$ 中的[[事件]]，
则上极限 $\limsup A_n$ 也可等价地表述为
\[
\limsup_{n \to \infty} A_n =
\{ \omega \in \Omega \mid \text{存在无穷多个 } n \text{ 使得 } \omega \in A_n \}.
\]
也就是说，事件 $\limsup A_n$ 描述的是
“在所有事件 $A_n$ 中，有无穷多个事件同时发生”。
有时也将 $\limsup A_n$ 记为 $A_n \ \mathrm{i.o.}$，
其中 $\mathrm{i.o.}$ 为“无穷多次发生”之英文简称。

::: theorem [Borel–Cantelli 引理] {@bc}
设 $(A_n)_{n \geq 1}$ 是[[概率空间]] $(\Omega, \mathcal{F}, \mathbb{P})$
中的一列[[事件]]。

- 如果
  \[
  \sum_{n=1}^{\infty} \mathbb{P}(A_n) < +\infty,
  \]
  则
  \[
  \mathbb{P} \Bigl( \limsup_{n \to \infty} A_n \Bigr) = 0.
  \]

- 如果 $(A_n)$ 相互[[独立事件|独立]]，且
  \[
  \sum_{n=1}^{\infty} \mathbb{P}(A_n) = +\infty,
  \]
  则
  \[
  \mathbb{P} \Bigl( \limsup_{n \to \infty} A_n \Bigr) = 1.
  \]
:::

::: proof
对第一条，有
\[
\mathbb{P}\left(\bigcap_{k=1}^{\infty} \bigcup_{n=k}^{\infty} A_n\right)
= \lim_{k\to\infty} \mathbb{P}\left(\bigcup_{n=k}^{\infty} A_n\right).
\]
根据条件和 [[Boole 不等式]]，得
\[
\lim_{k\to\infty} \mathbb{P}\left(\bigcup_{n=k}^{\infty} A_n\right)
\leq \lim_{k\to\infty} \sum_{n=k}^{\infty} \mathbb{P}(A_n) = 0,
\]
所以 $\mathbb{P} (\limsup A_n) = 0$。

对第二条，记 $\bar{A}_n$ 为 $A_n$ 的[[补集]]。
考虑事件 $\limsup A_n$ 的补集，其概率为
\[
\mathbb{P}\left(\bigcup_{k=1}^{\infty} \bigcap_{n=k}^\infty \bar{A}_n\right)
= \lim_{k\to\infty} \mathbb{P}\left(\bigcap_{n=k}^{\infty} \bar{A}_n\right).
\]
对 $K>k$，根据独立性和不等式 $1 - x \leq \mathrm e^{-x}$，可得
\[
\begin{aligned}
    \mathbb{P}\left(\bigcap_{n=k}^{K} \bar{A}_n\right)
  &=\prod_{n=k}^{K} \mathbb{P}(\bar{A}_n)\\
  &=\prod_{n=k}^{K} (1-\mathbb{P}(A_n))\\
  &\leq \exp\left(- \sum_{n=k}^{K} \mathbb{P}(A_n)\right).
\end{aligned}
\]
令 $K\to\infty$，根据假设，指数函数中的部分趋于 $-\infty$，所以等式右边趋于零。
所以
\[
\mathbb{P}\left(\bigcup_{k=1}^{\infty} \bigcap_{n=k}^\infty \bar{A}_n\right)
= \lim_{k\to\infty} \mathbb{P}\left(\bigcap_{n=k}^{\infty} \bar{A}_n\right)
= 0,
\]
即 $\mathbb{P}(\limsup A_n) = 1$。
:::

## 变体

::: theorem
在 @bc 的第二部分中，把事件序列相互独立减弱为
两两独立，结论仍成立。
:::

::: proof
记 $I_n = I(A_n)$ 为[[指示函数|指示变量]]。则两两独立可以推出
$\operatorname{Cov}(I_m, I_n) = 0(m \neq n)$，而
级数条件可以改写为
\[
\sum_{n=1}^{\infty} \mathbb{E}(I_n) = +\infty.
\]
考虑随机变量级数 $\sum_{n=1}^\infty I_n$。对任意 $\omega\in\Omega$，
这个级数发散当且仅当使得 $I_n(\omega) = 1$ 的 $n$ 有无限个。即
\[
\mathbb{P} \Bigl( \limsup_{n \to \infty} A_n \Bigr) =
\mathbb{P}\left(\sum_{n=1}^{\infty} I_n = +\infty\right).
\]
下面证明右边的概率等于 $1$。令 $J_k = \sum_{n=1}^{k} I_n$，
由 [[Chebyshev 不等式]]：对任意 $A>0$ 有

```math {@1}
\mathbb{P}(|J_k - \mathbb{E}(J_k)| < A\sigma(J_k))
\geq 1-\frac{1}{A^2}.
```

令 $p_n = \mathbb{P}(A_n) = \mathbb{E}(I_n)$，则结合独立性得
\[
\mathbb{E}(J_k) = \sum_{n=1}^{k} p_n \to +\infty, \quad k\to\infty,
\]
\[
\begin{aligned}
  \operatorname{Var}(J_k) &= \sum_{n=1}^{k} \operatorname{Var}(I_n)\\
              &= \sum_{n=1}^{k} (\mathbb{E}(I_n^2) - \mathbb{E}(I_n)^2)\\
              &= \sum_{n=1}^{k} (p_n - p_n^2).
\end{aligned}
\]
于是 $\sigma(J_k) = \sqrt{\operatorname{Var}(J_k)} \leq \sqrt{\mathbb{E}(J_k)}$，
即 $\sigma(J_k) = o(\mathbb{E}(J_k)), \quad k\to\infty$。令 $k$ 充分大，
结合 @1 式就得到
\[
\mathbb{P}\left(J_k > \frac{1}{2} \mathbb{E}(J_k)\right) \geq 1-\frac{1}{A^2}.
\]
因为 $J_k$ 是不减的，故上式中用 $\lim_{k\to\infty} J_k$ 代替 $J_k$，
式子仍成立。再令 $k\to\infty$，得
\[
\mathbb{P}\left(\lim_{k\to\infty} J_k = +\infty\right) \geq 1-\frac{1}{A^2}.
\]
最后令 $A\to +\infty$ 即可。
:::

```terms
Borel–Cantelli 引理:
  en: Borel–Cantelli lemma
  fr: théorème de Borel–Cantelli :m
  de: Borel-Cantelli-Lemma :n
  ja: Borel–Cantelli の補<ほ>題<だい>
  ko: Borel–Cantelli 보조정리
```
