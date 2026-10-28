---
title: l’Hôpital 法则
aliases: [L’Hôpital 法则, 洛必达法则]
categories: [实分析]
---

<problems>
- “定理和证明”一节的定理中，条件 $b < +\infty$ 似乎应为 $b \leq +\infty$，否则与 $c$ 可以是 $+\infty$ 矛盾。
</problems>

**[[Guillaume de l'Hôpital|l'Hôpital]] 法则**
是[[微积分]]中，计算[[函数]]的[[极限]]的一种方法。
考虑形如
\[
\lim_{x \to c} \frac{f(x)}{g(x)}
\]
的极限。
如果 $\lim_{x \to c} f (x)$ 和 $\lim_{x \to c} g (x)$
均为 $0$（也称为 $\frac{0}{0}$ 型），
或二者均为 $\infty$（也称为 $\frac{\infty}{\infty}$ 型），
那么在适当条件下，就有
\[
\lim_{x \to c} \frac{f(x)}{g(x)} =
\lim_{x \to c} \frac{f'(x)}{g'(x)}.
\]
这样，我们常常可以化简极限的表达式，从而求出其值。

## 定理和证明

::: theorem [l'Hôpital 法则] {@主}
设 $f, g \colon I \to \mathbb{R}$
是定义在[[开区间]] $I = \mathopen{]} a, b \mathclose{[}$ 上的函数，
其中 $-\infty \leq a < b < +\infty$。
设 $c \in [a, b]$（可以是 $\pm \infty$）。
假设

- $f$、$g$ 在 $I \setminus \{ c \}$ 上[[导数|可导]]。

- 以下二者之一成立：

  - $\lim_{x \to c} f (x) = \lim_{x \to c} g (x) = 0$，或者

  - $\lim_{x \to c} g (x) = \infty$。

- [[极限]] $\lim_{x \to c} \frac{f'(x)}{g'(x)}$ 存在。
  特别地，$g' (x)$ 在 $c$ 附近非零。

则
\[
\lim_{x \to c} \frac{f(x)}{g(x)} =
\lim_{x \to c} \frac{f'(x)}{g'(x)}.
\]
（如果 $c$ 是区间 $I$ 的端点，
那么上述所有极限都用相应的单边极限代替。）
:::

::: proof
通过缩小区间 $I$，不妨设 $g' (x)$ 在整个 $I$ 中非零。
这样，由 [[Rolle 定理]]，$g$ 在 $I \setminus \{ c \}$
的每个[[连通分支|分支]]（共 $1$ 或 $2$ 个）上是[[单调函数]]。

由此及 [[Cauchy 中值定理]]，对任意 $x, y \in I \setminus \{ c \}$，
如果它们在 $c$ 的同一侧，
并且 $x \neq y$，则存在 $\xi \in I$，它介于 $x, y$ 之间，使得
\[
\frac {f' (\xi)} {g' (\xi)} =
\frac {f (x) - f (y)} {g (x) - g(y)}.
\]
上式可以重写为

```math {@证明}
\frac {f (x)} {g (x)} =
\frac {f (y)} {g (x)} +
\frac {f' (\xi)} {g' (\xi)} \biggl(
    1 - \frac {g (y)} {g (x)}
\biggr).
```

当 $x \to c$ 时，我们可以同时令 $y \to c$，使得在这一过程中，
\[
\frac {f (y)} {g (x)} \to 0, \quad
\frac {g (y)} {g (x)} \to 0.
\]
这一点可以做到，是由于定理中二选一的条件。
而 $\xi$ 介于 $x, y$ 之间，从而在这一过程中，也有 $\xi \to c$。
这样，式 @证明 蕴涵我们想要的结论。
:::

## 例子

::: example
我们来计算极限
\[
\lim_{x \to 0} \frac {\mathrm{e}^x - 1} {\sin x}.
\]
使用 @主，我们立刻得出
\[
\lim_{x \to 0} \frac {\mathrm{e}^x - 1} {\sin x} =
\lim_{x \to 0} \frac {\mathrm{e}^x} {\cos x} = 1.
\]
:::

```terms
l'Hôpital 法则:
  en: l'Hôpital's rule
  de: Regel von l'Hôpital :f
  fr: règle de l'Hôpital :f
```
