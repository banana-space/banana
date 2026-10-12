---
title: 随机变量
categories: [概率论]
navboxes: [概率论]
---

**随机变量**是[[概率论]]中的基本概念，
描述可以“随机取值”的变量。
例如，掷一枚正常的骰子，得到的点数 $X$ 就是一个随机变量，
它以 $1/6$ 的[[概率]]分别取 $1, 2, 3, 4, 5, 6$ 这 $6$ 个值。

严格地说，在以[[测度论]]为基础的[[概率论]]中，
随机变量就是从[[概率空间]]出发的[[可测函数]]。
概率空间的元素对应于每种可能发生的情况，
而该可测函数在该元素的取值就是在这种情况发生时，该随机变量的取值。

## 定义

::: definition [随机变量]
设 $(\Omega, \mathcal{F}, \mathbb{P})$ 为[[概率空间]]，
$(E, \mathcal{G})$ 为[[可测空间]]。
则 $\Omega$ 上取值于 $E$ 的**随机变量**就是指[[可测函数]]
\[
X \colon \Omega \longrightarrow E.
\]
:::

直观来看，说 $X$ 是取值于 $E$ 的随机变量，
大致的含义是 $X$ 会随机地给出 $E$ 的元素。

常常取 $E = \mathbb{R}$ 或 $\mathbb{C}$，
并配以 [[Borel $\sigma$-代数]]而成为[[可测空间]]。
此时的随机变量
\[
X \colon \Omega \longrightarrow \mathbb{R} \text{ 或 } \mathbb{C}
\]
分别称为**实值随机变量**、**复值随机变量**。

## 运算

- 对取值于[[可测空间]] $E$ 的随机变量 $X$，
  若有可测空间 $F$ 和[[可测函数]] $f \colon E \to F$，
  则可以定义取值于 $F$ 的随机变量 $f (X)$，
  也就是[[复合映射]] $f \circ X \colon \Omega \to F$。

  - 特别地，对实值或复值随机变量 $X, Y$，
    可以定义随机变量 $X + Y$、$X - Y$、$X Y$ 等，
    由实值或复值函数的和、差、积给出。

- 设 $X$ 是取值于可测空间 $E$ 的随机变量。
  对[[可测集]] $F \subset E$，有[[事件]]“$X \in F$”，定义为
  \[
  (X \in F) = \{ \omega \in \Omega \mid X (\omega) \in F \}.
  \]
  特别地，对实值随机变量 $X$ 和实数 $a \in \mathbb{R}$，
  可以定义事件“$X < a$”“$X \leq a$”等等。

  - 特别地，对元素 $e \in E$，若 $\{ e \}$ 是 $E$ 中的可测集，
    则有事件“$X = e$”，定义为
    \[
    (X = e) = \{ \omega \in \Omega \mid X (\omega) = e \}.
    \]
    类似地，也有其对立事件“$X \neq e$”。

```terms
随机变量:
  en: random variable
  fr: variable aléatoire :f
  de: Zufallsvariable :f
  ja: 確<かく>率<りつ>変<へん>数<すう>
  ko: 확률 변수 (確率變數)
```
