---
title: 条件方差
categories: [概率论]
navboxes: [概率论]
---

**条件方差**通俗来说，就是在一定条件下[[随机变量]]的[[方差]]。

## 定义

::: definition
设 $X$ 是[[概率空间]] $(\Omega,\mathcal F,\mathbb P)$
上的随机变量，$\mathcal G\subset\mathcal F$ 是子 [[$\sigma$-代数]]，
则可以定义[[条件期望]] $\mu=\mathbb{E}(X \mid \mathcal G)$。定义
$X$ 的**条件方差**为
\[
\operatorname{Var}(X \mid \mathcal G) = \mathbb{E}((X-\mu)^2 \mid \mathcal G)
\]
也可以写成
\[
\operatorname{Var}(X \mid \mathcal G) = \mathbb{E}(X^2 \mid \mathcal G)-\mu^2
\]
与条件期望同样地，对于随机变量 $X$、$Y$，也可以讨论 $\operatorname{Var}(X\mid Y)$ 的概念。
:::

## 性质

::: proposition [条件方差公式]
设 $X$ 是[[概率空间]] $(\Omega,\mathcal F,\mathbb P)$
上的随机变量，$\mathcal G\subset\mathcal F$ 是子 $\sigma$-代数，
则
\[
\operatorname{Var}(X) = \operatorname{Var}(\mathbb{E}(X\mid \mathcal G)) + \mathbb{E}(\operatorname{Var}(X \mid \mathcal G))
\]
:::

::: proof
令 $\mu=\mathbb{E}(X \mid \mathcal G)$，则
$\mathbb{E}(\mu)=\mathbb{E}(X)$。此时
\[
\begin{aligned}
  &\quad\operatorname{Var}(\mathbb{E}(X\mid \mathcal G)) + \mathbb{E}(\operatorname{Var}(X \mid \mathcal G))\\
  &=\operatorname{Var}(\mu) + \mathbb{E}(\mathbb{E}(X^2 \mid \mathcal G)-\mu^2)\\
  &=\mathbb{E}(\mathbb{E}(X^2 \mid \mathcal G))+\operatorname{Var}(\mu)-\mathbb{E}(\mu^2)\\
  &=\mathbb{E}(X^2)-(\mathbb{E}(\mu))^2\\
  &=\mathbb{E}(X^2)-(\mathbb{E}(X))^2=\operatorname{Var}(X)
\end{aligned}
\]
:::

```terms
条件方差:
  en: conditional variance
```
