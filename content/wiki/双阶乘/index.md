---
title: 双阶乘
categories: [特殊函数]
---

## 定义

::: definition
**双阶乘**是定义在 $\mathbb{N}$ 上的函数，
\[
\begin{aligned}
  n!!:=\prod_{k=0}^{\lfloor\frac{n-1}2\rfloor}(n-2k)
\end{aligned}
\]
:::

::: example
\[
6!!=2\times 4\times 6=48
\]
:::

## 性质

::: proposition [递推方程]
\[
n!!=n(n-2)!!
\]
:::

::: proposition [与[[阶乘]]的关系]
\[
\begin{aligned}
  (2n)!!&=2^nn!\\
  (2n-1)!!&=\frac{(2n)!}{2^nn!}
\end{aligned}
\]
:::

## 推广

### 负奇数上的推广

根据递推方程可以将双阶乘推广到负奇数。

::: definition
\[
(-2n-1)!!:=\frac{(-1)^n}{(2n-1)!!}
\]
:::

### 复数上的推广

同样可以使用推广[[阶乘]]的方式来推广双阶乘，即使用[[$\Gamma$ 函数]]。
需要注意的是，双阶乘与阶乘的两个关系等式之间并不兼容，有必要进行插值。

::: definition
\[
n!!:=2^{\frac n2}\Gamma\left(\frac n2+1\right)
\left(\frac\pi2\right)^{\frac{\cos n\pi-1}4}
\]
:::
