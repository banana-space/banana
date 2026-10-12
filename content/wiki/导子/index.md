---
title: 导子
aliases: [分次导子]
categories: [代数论]
---

**导子**是[[求导]]在代数上的一种推广。

## 定义

### 代数上的导子

::: definition [代数上的导子] {@def-der-algebra}
假设 $A$ 是[[交换环]] $R$ 上的[[结合代数|代数]]，
$d \colon A\to A$ 是 $R$-模同态。
如果满足

- （[[Leibniz 法则]]）
  对任意 $a,b\in A$，有
  \[
  d(ab) = d(a) \, b + a \, d(b),
  \]

则称 $d$ 为 $A$ 上的**导子**或 **$R$-导子**。
$A$ 上所有 $R$-导子的集合通常记为 $\operatorname{Der}_R (A)$。
:::

::: remark
在 @def-der-algebra 中，
如果 $d^2 = 0$，
就称 $(A, d)$ 为一个 **[[微分代数]]**。
:::

::: remark
由 Leibniz 法则，导子的 $R$-线性条件等价于对 $r\in R$
都有 $dr=0$。下同。
:::

### 模上的导子

::: definition [模上的导子]
假设 $A$ 是交换环 $R$ 上的代数，$M$ 是 $A$ 上的[[模|双模]]，
$d \colon A\to M$ 是 $R$-模同态。
如果满足

- （[[Leibniz 法则]]）
  对任意 $a, b \in A$，有
  \[
  d (ab) = d(a) \, b + a \, d(b),
  \]

则称 $d$ 为 $A$ 到 $M$ 的**导子**或 **$R$-导子**。
$A$ 到 $M$ 的 $R$-导子的全体通常记为 $\operatorname {Der}_R (A,M)$。
:::

### 分次导子

::: definition [分次代数上的导子] {@def-graded-der}
假设 $A$ 是交换环 $R$ 上的[[分次代数]]，
$d \colon A \to A$ 是 $R$-模同态，
其次数记为 $|d|$。
如果满足

- （[[Leibniz 法则]]）
  对任意[[齐次]]元素 $a, b\in A$，有
  \[
  d (a b) = d (a) \, b + (-1)^{|d| \, |a|} \, a \, d(b),
  \]
  其中 $|d|$ 和 $|a|$ 分别为
  $d$ 和 $a$ 的次数，

则称 $d$ 为 $A$ 上的**导子**或 **$R$-导子**。
:::

::: remark
在 @def-graded-der 中的符号 $(-1)^{|d| \, |a|}$
来自 [[Koszul 符号法则]]。
:::

::: remark
在 @def-graded-der 中，
如果 $|d| = \pm 1$，并且满足 $d^2 = 0$，
就称 $(A, d)$ 为一个 **[[微分分次代数]]**。
:::

## 例子

- 零映射总是导子，称为**平凡导子**。

- $\mathbb{R}$ 上所有[[光滑函数]]构成的代数 $C^\infty (\mathbb{R})$ 中，
  [[求导]]算子是一个导子。

- 设 $R$ 是[[环]]。
  在[[多项式环]] $R [x_1, \dotsc, x_n]$ 上，
  对每个 $x_i$ 求[[形式导数]]的算子 $\partial / \partial x_i$
  都是导子。

- 设 $M$ 是[[光滑流形]]，$X$ 是 $M$ 上的[[向量场]]。
  则 $M$ 上的光滑函数环 $C^\infty (M)$ 的元素可以沿 $X$ 求[[方向导数]]，
  这给出了 $C^\infty (M)$ 上的一个导子。
  事实上，向量场就被定义为这样的导子。

- 设 $M$ 是[[光滑流形]]。
  则 $M$ 上的[[微分形式]]构成分次代数 $\Omega^\bullet (M)$，
  [[外微分]] $d$ 是其上的一个次数为 $1$ 的导子，
  $(\Omega^\bullet (M), d)$ 构成[[微分分次代数]]。

```terms
导子:
  en: derivation
  de: Derivation :f
  fr: dérivation :f
```
