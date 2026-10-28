---
title: Chebyshev 不等式
categories: [概率论]
navboxes: [概率论]
---

<disambiguation>
本条目介绍的是[[概率论]]中的不等式。关于初等数学的同名不等式，请参见[[排序不等式]]。
</disambiguation>

**Chebyshev 不等式**是[[概率论]]中的不等式，
它说明[[随机变量]]若存在[[方差]]，
则它取离[[期望]]值较远的值的[[概率]]不能高于某个上界。

## 定理与证明

::: theorem [Chebyshev 不等式] {@Chebyshev-不等式}
设 $X$ 是[[概率空间]] $(\Omega, \mathcal{F}, \mathbb{P})$
上的实值[[随机变量]]。如果 $X$ 存在有限的[[方差]]（从而也存在[[期望]]），
则对任意 $b > 0$，有
\[
\mathbb{P}(|X - \mathbb{E}(X)| \geq b) \leq \frac{\operatorname{Var}(X)}{b^2}.
\]
:::

::: proof
根据 [[Markov 不等式]]，
\[
\begin{aligned}
  \mathbb{P}(|X - \mathbb{E}(X)| \geq b)
  &= \mathbb{P}((X - \mathbb{E}(X))^2 \geq b^2)\\
  &\leq \frac{\mathbb{E}(X - \mathbb{E}(X))^2}{b^2}\\
  &= \frac{\operatorname{Var}(X)}{b^2}.
\end{aligned}
\]
:::

由上述定理的证明，可以得到以下更一般的结论，
有时也称为 Chebyshev 不等式。

::: theorem [Chebyshev 不等式，推广]
设 $X$ 是随机变量，
$g \colon [0,+\infty\mathclose{[} \to [0,+\infty\mathclose{[}$
是[[单调映射|递增函数]]，满足 $\mathbb{E}(g(|X|)) < +\infty$。如果正数 $a$
满足 $g(a) > 0$，则
\[
\mathbb{P}(|X| \geq a) \leq \frac{\mathbb{E}(g(|X|))}{g(a)}.
\]
:::

::: proof
因为 $g$ 是增函数，故有事件包含关系
\[
(|X| \geq a) \subseteq (g(|X|) \geq g(a)),
\]
于是由 [[Markov 不等式]]，
\[
\begin{aligned}
  \mathbb{P}(|X| \geq a)
  &\leq \mathbb{P}(g(|X|) \geq g(a))\\
  &\leq \frac{\mathbb{E}(g(|X|))}{g(a)}.
\end{aligned}
\]
:::

## 例子

- 在 @Chebyshev-不等式 中，
  若取 $b = k \sigma$，其中 $\sigma$ 为 $X$ 的[[标准差]]，
  $k > 0$ 为任意正数，则得到
  \[
  \mathbb{P} (|X - \mathbb{E} (X)| \geq k\sigma) \leq \frac{1}{k^2}.
  \]
  由此，我们得到 $X$ 的取值落在 $k$ 个标准差之外的概率的上界。

```terms
Chebyshev 不等式:
  en: Chebyshev's inequality
  fr: inégalité de Tchebychev :f
  de: tschebyscheffsche Ungleichung :f
  ja: Chebyshev の不<ふ>等<とう>式<しき>
  ko: Chebyshev 부등식
```
