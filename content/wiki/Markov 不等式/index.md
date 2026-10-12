---
title: Markov 不等式
categories: [概率论]
navboxes: [概率论]
---

**Markov 不等式**是[[概率论]]中基础的不等式，它用[[期望]]给出非负[[随机变量]]不小于某值的[[概率]]的
上界。对非负随机变量 $X$ 和 $a > 0$，从直观上来看，我们有
\[
\mathbb{E}(X) = \mathbb{P}(X < a) \mathbb{E}(X \mid X < a) + \mathbb{P}(X \geq a) \mathbb{E}(X \mid X \geq a),
\]
在事件 $(X \geq a)$ 内有 $\mathbb{E}(X \mid X \geq a) \geq a$，所以
\[
\mathbb{E}(X) \geq \mathbb{P}(X \geq a) \mathbb{E}(X \mid X \geq a) \geq a \mathbb{P}(X \geq a),
\]
从而得到 $\mathbb{P}(X \geq a)$ 的上界估计。

## 叙述与证明

::: theorem [Markov 不等式]
设 $(\Omega, \mathcal{F}, \mathbb{P})$ 是[[概率空间]]，$X$ 是其上的非负[[随机变量]]，
其[[期望]]存在。则对任意 $a > 0$，有
\[
\mathbb{P}(X \geq a) \leq \frac{\mathbb{E}(X)}{a}.
\]
:::

::: proof [证明（用期望定义）]
根据定义和 $X$ 是非负的：
\[
\mathbb{E}(X) = \int_0^{+\infty} x \mathrm dF(x),
\]
其中 $F$ 是[[累积分布函数]]。此时
\[
\mathbb{E}(X) \geq \int_a^{+\infty} x \mathrm dF(x) \geq a \int_a^{+\infty} \mathrm dF(x) = a \mathbb{P}(X \geq a),
\]
也就得到结果。
:::

::: proof [证明（用指示变量）]
记 $I_a$ 为事件 $(X \geq a)$ 的[[指示函数|指示变量]]。则有不等式
\[
aI_a \leq X,
\]
这是因为，如果 $X < a$，则 $aI_a = 0 \leq X$；如果 $X \geq a$，则 $aI_a = a \leq X$。两边取期望：
\[
\mathbb{E}(aI_a) = a \mathbb{P}(X \geq a) \leq \mathbb{E}(X).
\]
:::

## 应用

通过 Markov 不等式可以无困难地推导出 [[Chebyshev 不等式]]，参见对应条目。

另外，借助[[矩母函数]]，可以得到下面的 Chernoff 界：

::: corollary [Chernoff 界]
设 $(\Omega, \mathcal{F}, \mathbb{P})$ 是[[概率空间]]，$X$ 是其上的[[随机变量]]，存在
[[矩母函数]] $M(t) = \mathbb{E}(\mathrm e^{tX})$。则对任意[[实数]] $a$：
\[
\mathbb{P}(X \geq a) \leq M(t)\mathrm e^{-ta}, \quad \forall t > 0,\\
\mathbb{P}(X \leq a) \leq M(t)\mathrm e^{-ta}, \quad \forall t < 0,\\
\]
:::

::: proof
不失一般性，只证明第一个式子。根据 Markov 不等式：
\[
\mathbb{P}(X \geq a) = \mathbb{P}(\mathrm e^{tX} \geq \mathrm e^{ta}) \leq \frac{\mathbb{E}(\mathrm e^{tX})}{\mathrm e^{ta}} = M(t)\mathrm e^{-ta}.
\]
:::

```terms
Markov 不等式:
  en: Markov's inequality
```
