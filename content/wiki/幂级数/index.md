---
title: 幂级数
categories: [实分析, 复分析]
notices:
  - name: 问题
    items:
      - “定义”一节缺少多元幂级数的情形。
      - “收敛性”“可微性”各节需要扩充。
navboxes: [微积分学]
---

**幂级数**是一类函数项[[级数]]，是指形如
\[
a_0 + a_1 x + a_2 x^2 + a_3 x^3 + \cdots
\]
的级数。在[[微积分学]]和[[复分析]]中，常常将函数表示为幂级数的形式，
以研究其性质。
局部上能写成收敛的幂级数的函数称为[[解析函数]]。

## 定义

::: definition
设 $x_0 \in \mathbb{R}$（或 $\mathbb{C}$）。
则以 $x_0$ 为中心的**幂级数**是指形如
\[
f (x) = \sum_{n = 0}^{\infty} a_n \, (x - x_0)^n
\]
的函数项[[级数]]，其中 $a_n \in \mathbb{R}$（或 $\mathbb{C}$）。
:::

## 例子

- 考虑幂级数
  \[
  f (x) = 1 + x + x^2 + x^3 + \cdots .
  \]
  它在 $|x| < 1$ 时收敛到 $1/(1 - x)$，
  而在 $|x| \geq 1$ 时发散。

- 对任何[[光滑函数]] $F \colon \mathbb{R} \to \mathbb{R}$ 和 $x_0 \in \mathbb{R}$，
  都可以定义 $F$ 在 $x_0$ 处的 [[Taylor 级数]]
  \[
  \sum_{n=0}^{\infty} \frac{F^{(n)} (x_0)}{n!} \, (x - x_0)^n.
  \]
  在某些假设下，Taylor 级数会在某个区间内收敛到原来的函数 $F$。

## 性质

### 收敛性

### 可微性

```terms
幂级数:
  en: power series
  fr: série entière :f
  de: Potenzreihe :f
  ja: 冪<べき>級<きゅう>数<すう>
  ko: 멱급수 (冪級數)
```
