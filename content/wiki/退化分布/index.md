---
title: 退化分布
categories: [概率论]
notices:
  - name: 问题
    items:
      - “定义”一节中高维情形的定义要求 $B$ 包含于 $n-1$ 维线性子空间，但随后的例子 $(X, aX+b)$ 在 $b \neq 0$ 时取值于不过原点的直线；这里似乎应为仿射子空间。
navboxes: [概率论]
---

**退化分布**是一类[[概率分布]]。在一维情形，它的取值几乎一定是常数。这时候它基本不再具有随机性，
所以被称为是“退化”的。在高维情形，这表示[[随机向量]]的取值以概率 $1$ 分布于较低维数的[[子空间]]中。

## 定义

::: definition [退化分布，一维情形]
设 $X$ 是[[概率空间]] $(\Omega, \mathcal{F}, \mathbb{P})$ 中的实值[[随机变量]]。
如果存在[[实数]] $c$，使得
\[
\mathbb{P} \{\omega \in \Omega \mid X(\omega) = c\} = 1,
\]
则称 $X$ 是**常值随机变量**，服从**退化分布**。取值几乎为 $c$ 的常值随机变量一般仍记为
$c$。
:::

::: definition [退化分布，高维情形]
设 $\bm{X}: \Omega \to \mathbb{R}^n$ 是[[随机向量]]。
如果存在包含于某个 $\mathbb{R}^n$ 的 $n-1$ 维[[子空间]]的
[[Borel 测度|Borel]] [[可测集]] $B$ 使得 $\mathbb{P}(\bm X \in B) = 1$，
则称 $\bm X$ 服从**退化分布**。
:::

关于高维退化分布，一个简单的例子是 $(X, aX+b)$，这个随机向量的值域被限制于一条直线上，
所以服从退化分布。

## 性质

- 设 $c$ 表示取值几乎为 $c$ 的常值随机变量。

  - 它的[[累积分布函数]]是 $F(x) = \mathbb{1}_{\{x \geq c\}}$，
      其中 $\mathbb{1}_{A}$ 表示[[指示函数]]；
    可以用 [[Dirac $\delta$ 函数]]表示它的[[概率密度函数]]：$p(x) = \delta (x - c)$。

  - [[期望]]是 $\mathbb{E}(c) = c$；[[方差]]是 $\operatorname{Var}(c) = 0$。

  - [[特征函数]]是 $\phi_c(t) = \mathrm e^{\mathrm i c t}$。

- 设随机向量 $\bm X$ 服从退化分布，则 $\bm X$ 的[[协方差|协方差矩阵]]是奇异的。

```terms
退化分布:
  en: degenerate distribution
  de: Dirac-Verteilung
  fr: distribution dégénérée
```
