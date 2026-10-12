---
title: 齐次函数
aliases: [齐次多项式]
categories: [线性代数]
---

[[向量空间]]上的**齐次函数**是有倍数性质的[[函数]]：
如果[[向量]]乘以一个标量，则新函数会是原函数再乘上标量的某次方倍。

齐次函数最重要的例子是 $\mathbb{R}^n$ 上的齐次[[多项式]]。

## 定义

::: definition [齐次函数] {@homogeneous-function}
给定[[域]] $\mathbb{k}$ 和 $\mathbb{k}$-向量空间 $V$，$W$。
如果存在[[整数]] $s$，
使得[[映射]]$f: V \to W$对任意 $\textbf{x} \in V$ 和非[[零]]数 $t \in \mathbb{k}$ 满足
\[
f(t\textbf{x})=t^sf(\textbf{x}),
\]
则称 $f$ 是 **$s$ 次齐次函数**或满足**齐次性**，同时称 $s$ 为 $f$ 的**齐次数**。
:::

::: remark
有时不要求 $f: V \to W$ 的定义域 $V$ 是 $\mathbb{k}$-向量空间，
只要求 $V$ 是某个 $\mathbb{k}$-向量空间内的[[锥 (线性代数)|线性锥]]。
容易看出此时定义是良定的，且是上述定义之推广。
:::

::: remark
有时域 $\mathbb{k}$ 上有[[全序]]关系，此时在 @homogeneous-function 中置“非零数 $t$”为
“$t>0$”可定义**正齐次函数**。诚然，齐次函数都是正齐次的。
:::

::: remark
有时域 $\mathbb{k}$ 是[[范数|赋范]]域，也即带有[[绝对值]]，
此时在 @homogeneous-function 中置
“$f(t\textbf{x})=t^sf(\textbf{x})$”为
“$f(t\textbf{x})=|t|^sf(\textbf{x}),$”可定义**绝对齐次函数**。
:::

::: definition [齐次多项式]
给定[[多项式环]] $A[x_1 , x_2 ,\dots, x_n]$。若对 $A[x_1 , x_2 ,\dots, x_n]$ 中[[元素]]
\[
f (x_1, \dotsc, x_n) =
\sum_{ i_1, \, \dotsc \, , \, i_n \geq 0 }
a_{ i_1, \, \dotsc \, , \, i_n } \, x_1^{i_1} \dotsm x_n^{i_n}
\]
存在一个固定的[[自然数]] $s$ 使得 $i_1 + i_2 + \dots + i_n = s$
对任意非零 $a_{ i_1, \, \dotsc \, , \, i_n }$ 都成立，
则称 $f$ 为 **$s$ 次齐次多项式**。
:::

::: remark
有时也称齐次多项式为**代数形式**，不致混淆时简称**形式**。例如[[二次型]]就是二次齐次多项式。
:::

## 性质

::: theorem {@homogeneous-prod}
若两个齐次函数的积有定义，则积为齐次函数，齐次数为二者之和。
:::

::: proof
直接验证定义：设 $f: V \to \mathbb{k}, g: W \to \mathbb{k}$均为齐次函数，齐次数分别为 $a, b$，记
$h(\textbf{x}, \textbf{y}) := f(\textbf{x})g(\textbf{y})$，则有
\[
h(t\textbf{x}, t\textbf{y}) = f(t\textbf{x}) g(t\textbf{y})
= \bigl( t^a f(\textbf{x}) \bigr) \bigl( t^b g(\textbf{y}) \bigr)
=t^{a+b} f(\textbf{x}) g(\textbf{y})
=t^{a+b} h(\textbf{x}, \textbf{y}) .
\]
:::

::: theorem
若两个齐次函数的商有定义，则商为齐次函数，齐次数为二者之差。
:::

::: proof
设 $f: V \to \mathbb{k}$是齐次函数，齐次数为 $s$，
由 @homogeneous-prod，
只需验证 $g(\textbf{x}):= 1 / f(\textbf{x})$ 之齐次性并计算其齐次数。
\[
g(t\textbf{x}) = \frac{1} {f(t\textbf{x})} = \frac{1} {t^s} \frac{1} {f(\textbf{x})}
=t^{-s} g(\textbf{x}).
\]
:::

## 例子

- $\mathbb{R}^n$ 上的 $s$ 次齐次多项式是 $s$ 次齐次函数。

- [[线性映射]]都是 $1$ 次齐次函数。

- [[多重线性映射|$n$ 重线性映射]]都是 $n$ 次齐次函数。

- 全序域上的[[半范数]]是 $1$ 次正齐次函数，但不是齐次函数。
  特例是 $\mathbb{R}$ 上的[[绝对值]]函数。

- $\mathbb{R^n}$上的[[最小值]]函数
  $f(x_1,\dots ,x_n)=\operatorname{min}\{x_1,\dots ,x_n\}$和[[最大值]]函数
  都是 $1$ 次正齐次函数，但都不是齐次函数。

```terms
(正)齐次函数:
  en: (positively) homogeneous function
  de: (positiv) homogene Funktion :f
  fr: fonction (positivement) homogène :f
绝对齐次函数:
  en: absolute homogeneous function
  de: absolute homogene Funktion :f
  fr: fonction absolument homogène :f
齐次多项式:
  en: homogeneous polynomial
  de: homogene Polynom :n
  fr: polynôme homogène :m
(代数)形式:
  en: (algebraic) form
  de: (algebraische) Form :f
  fr: forme (algébrique) :f
```
