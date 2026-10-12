---
title: 阶乘
categories: [初等数论, 组合函数]
navboxes: [计数组合]
---

[[自然数]] $n$ 的**阶乘**是指乘积
\[
n! = 1 \cdot 2 \cdot 3 \cdots n.
\]
它也是将[[集合]] $\{ 1, 2, 3, \dotsc, n \}$ 的元素排成一列的方法数。

例如，$3! = 1 \cdot 2 \cdot 3 = 6$。
总共有 $6$ 种方法将 $\{ 1, 2, 3 \}$ 的元素排成一列，即
$123$、$132$、$213$、$231$、$312$、$321$。

## 定义

::: definition
[[自然数]] $n$ 的**阶乘**是指乘积
\[
n! = 1 \cdot 2 \cdot 3 \cdots n.
\]
特别地，当 $n = 0$ 时，我们约定 $0! = 1$。
:::

## 性质

### 基本性质

- 对任何自然数 $n > 1$，有递推关系
  $n! = n \cdot (n-1)!$。

### 数论性质

- $n!$ 的 [[$p$ 进赋值]]是
  \[
  v_p (n!) = \sum_{k = 1}^{\infty}
  \left\lfloor \frac{n}{p^k} \right\rfloor.
  \]

- [[Wilson 定理]]说明，对[[素数]] $p$，有[[同余]]
  \[
  (p - 1)! \equiv -1 \pmod p.
  \]

### 渐近性质

[[Stirling 公式]]说明，$n!$ 可以由下面的表达式近似给出：
\[
n! \sim \sqrt{2 \pi n} \left( \frac{n}{\mathrm{e}} \right)^n.
\]
严格地说，当 $n \to +\infty$ 时，上式两边的比值趋于 $1$。

## 推广

### 复数的阶乘

通过 [[$\Gamma$ 函数]]，可以将阶乘的[[定义域]]推广到[[复数]]域 $\mathbb{C}$ 上。
对任何复数 $z$，我们可以定义
\[
z! = \Gamma (z + 1).
\]
此时，仍然有递推关系 $z! = z \cdot (z-1)!$。
但当 $z$ 为负整数时，$z!$ 没有定义。
例如，我们有
\[
\frac{1}{2}! = \frac{1}{2} \sqrt{\pi}, \qquad
\frac{3}{2}! = \frac{3}{4} \sqrt{\pi},
\]
如此等等。

### $q$-模拟

阶乘的 [[$q$-模拟]]，即 [[$q$-阶乘]]，定义为

```math
\begin{aligned}
    [n]_q!&=[1]_{q}\cdot [2]_{q}\cdots [n-1]_{q}\cdot [n]_{q}\\
    &=1\cdot (1+q)\cdots (1+q+\cdots +q^{n-2})\cdot (1+q+\cdots +q^{n-1}).
\end{aligned}
```

当 $q = 1$ 时，得到的就是普通的阶乘。

```terms
阶乘:
  en: factorial
  de: Fakultät :f
  fr: factorielle :f
  la: factorialis :f
```
