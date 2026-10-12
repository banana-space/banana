---
title: 计数测度
categories: [测度论]
navboxes: [测度论]
---

在[[测度论]]中，**计数测度**是一种定义在任何[[集合]]上的[[测度]]。集合的计数测度就是
集合的元素个数，即[[势]]。

## 定义

::: definition [计数测度]
设 $A$ 是[[集合]]，考虑[[可测空间]] $(A,2^A)$。对任意 $E \subset A$，定义
\[
\mu(E) = \begin{cases}
  |E|, & E \text{ 是有限集}, \\
  \infty, & E \text{ 是无限集},
\end{cases}
\]
它是该[[可测空间]]上的[[测度]]，称为**计数测度**。
:::

## 性质

- 带有计数测度的空间 $(A,2^A,\mu)$ 是 [[$\sigma$-有限测度空间]]
  等价于 $A$ 是[[可数集]]。

- 对任何[[函数]] $f \colon A \to [0,\infty]$，可定义
  \[
  \nu(E) = \sum_{x \in E} f(x), \quad E \subset A,
  \]
  它是可测空间 $(A,2^A)$ 上的测度。在求和式中，不可数个元素的求和按如下方式确定：
  \[
  \sum_{y \in Y} y := \sup_{E \subset Y, |E| < \infty}\Bigg(\sum_{y \in E} y\Bigg).
  \]
  如果令 $f$ 是恒为 $1$ 的函数，则得到计数测度 $\mu$。另外，还有
  \[
  \nu(E) = \int_E f \mathrm d\mu.
  \]

```terms
计数测度:
  en: counting measure
  fr: mesure de comptage
  de: Zählmaß
  ja: 数<かぞ>え上<あ>げ測<そく>度<ど>
```
