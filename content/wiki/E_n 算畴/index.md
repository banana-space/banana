---
title: '$\mathbb{E}_n$ 算畴'
aliases: [En 算畴]
categories: [高阶代数]
notices:
  - name: 问题
    items:
      - “例子”一节称 $\mathbb{E}_0$ 的多元运算只有恒同运算，但按定义 $\mathbb{E}_0(0)$ 似乎是单点，即 $\mathbb{E}_0$ 似乎还有一个零元运算。
navboxes: [高阶代数]
---

**$\mathbb{E}_n$ 算畴**，
也称为 $n$ 维**小圆盘算畴**或**小方体算畴**，
是一种 [[$(\infty, 1)$-算畴]]，也可以视为[[拓扑算畴]]，
它是[[交换算畴]] $\mathsf{Comm}$ 在[[高阶代数]]中的推广。
大致来说，[[$\mathbb{E}_n$-代数]]类似于[[交换代数 (范畴论)|交换代数]]，
它在同伦意义下满足交换律，而这些同伦又满足高阶同伦意义下的相容条件，
直至 $n$ 阶同伦为止，不要求满足更高阶的相容条件。
当 $n$ 趋于无穷时，我们有 [[$\mathbb{E}_\infty$ 算畴]]，
而 [[$\mathbb{E}_\infty$-代数]]就是在同伦意义下完全满足交换律的代数。

具体来说，$\mathbb{E}_n$ 中的多元运算是多个 $n$ 维小立方体到一个大的 $n$ 维立方体的嵌入，
而多元运算的复合则是这些嵌入的复合。

例如，[[拓扑空间]]的 $n$ 阶[[环路空间]]带有 $\mathbb{E}_n$-代数的结构。

## 定义

::: definition [立方体与矩形嵌入]
设 $n$ 为自然数。记
\[
\square^n = \mathopen{]} -1, 1 \mathclose{[} ^n
\]
为 $n$ 维开立方体。
若映射 $f \colon \square^n \to \square^n$ 形如
\[
f(x_1, \dots, x_n) = (a_1 x_1 + b_1, \dots, a_n x_n + b_n), \quad a_i > 0
\]
就称 $f$ 为**矩形嵌入**。

更一般地，若 $S$ 是有限集，$f$ 为 $\square^n \times S \to \square^n$ 的**单射**，
且 $f$ 限制在每个 $\square^n \times \{ s \}\ (s \in S)$ 上都是矩形嵌入，
就说 $f$ 是**矩形嵌入**。

记 $\operatorname{Rect} (\square^n \times S, \square^n)$ 为所有
$\square^n \times S \to \square^n$ 的矩形嵌入的集合，
并为其配备 $(\mathbb{R}^{2n})^S$ 的子空间拓扑。
:::

::: definition [$\mathbb{E}_n$ 算畴]
定义[[拓扑算畴]] $\mathbb{E}_n$ 如下。

- $\mathbb{E}_n$ 的 $k$ 元运算空间为
  $\mathbb{E}_n (k) =
  \operatorname{Rect} (\square^n \times \{ 1, \dots, k \}, \square^n)$。

- 恒同映射 $\mathbb{1}$ 由 $\mathrm{id}_{\square^n}$ 给出。

- 多元运算的复合由矩形嵌入的复合自然地给出。

将 $\mathbb{E}_n$ 通过[[算畴脉]]而视为 [[$(\infty, 1)$-算畴]]，
称为 **$\mathbb{E}_n$ 算畴**。
:::

## 性质

::: proposition
对任意自然数 $n, n'$，
[[张量积算畴]] $\mathbb{E}_n \otimes \mathbb{E}_{n'}$ 等价于 $\mathbb{E}_{n + n'}$。
:::

## 例子

- $n = 0$ 时，$\mathbb{E}_0$ 是[[平凡算畴]]，即多元运算只有恒同运算的算畴。

- $n = 1$ 时，$\mathbb{E}_1$ 等价于 [[$\mathbb{A}_\infty$ 算畴]]，
  也等价于[[结合算畴]] $\mathsf{Assoc}$。

```terms
'$\mathbb{E}_n$ 算畴':
  en: '$\mathbb{E}_n$ operad'
  fr: '$\mathbb{E}_n$ opérade :f'
小圆盘算畴:
  en: little disks operad
小方体算畴:
  en: little cubes operad
```
