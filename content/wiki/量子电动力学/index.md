---
title: 量子电动力学
categories: [电动力学, 量子场论]
notices:
  - name: 问题
    items:
      - “对称性”“Feynman 规则”“可重整性”“计算”各节需要扩充。
---

::: convention
在本文中，

- 全[[时空]]为 $\mathbb{R}^4$，第零个分量表示时间，带有平坦度量 $(+,-,-,-)$。
- 采用[[自然单位制]]，即光速 $c$ 与[[约化 Planck 常数]] $\hbar$ 均设定为 $1$。

:::

**量子电动力学**是[[电动力学]]的[[量子化]]，
以描述粒子间的电磁相互作用。

量子电动力学是一种[[量子场论]]，更精确地说，它是
$\mathrm{U}(1)$-[[规范场论]]。
由于它的[[耦合常数]]较小，并且[[重整化|可重整化]]，
可以使用[[微扰量子场论]]的方法计算之。

## 形式化

可以写出量子电动力学的 [[作用量密度]]，从而形式化之。

::: definition
量子电动力学涉及 $n+1$ 个[[量子场]]：
$\psi_1, \cdots, \psi_n$ 和 $A$，
其中每个场都有四个分量。
它的[[作用量密度]]是
\[
\begin{aligned}
  \mathcal{L} &= \sum_{k = 1}^n \bar{\psi}_k
  (\mathrm{i} \gamma^\mu D_\mu - m_k) \psi_k
  - \frac{1}{4} F_{\mu\nu}F^{\mu\nu}, \\
  &= \sum_{k = 1}^n \bar{\psi}_k
  (\mathrm{i} \gamma^\mu \partial_\mu - m_k) \psi_k
  - \sum_{k = 1}^n e_k\bar{\psi}_k
  \gamma^\mu A_\mu \psi_k
  - \frac{1}{4} F_{\mu\nu}F^{\mu\nu},
\end{aligned}
\]
其中
\[
\begin{aligned}
  \bar{\psi} &= \psi^{\dagger} \gamma^0, \\
  D_\mu &= \partial_\mu + \mathrm{i} e_k A_\mu, \\
  F_{\mu\nu} &= \partial_\mu A_\nu - \partial_\nu A_\mu,
\end{aligned}
\]
$\gamma^\mu$ 是 [[Dirac 矩阵]]，$e_k, m_k$ 是常数。
我们这里用到了[[上下指标]]和 [[Einstein 求和约定]]。
:::

这些场的物理意义如下：

- $\psi_k$ 都是 [[Dirac 场]]，
它代表各种带电粒子，$e_k$ 是其[[电荷]]，$m_k$ 是其[[质量]]。

- $A_\mu$ 是 $\mathrm{U}(1)$-[[规范场]]
（即把经典[[电动力学]]之[[电势]]和[[磁矢势]]放在一起后做[[量子化]]），
代表[[光子]]，它是自旋 $1$ 的无质量粒子。
$F_{\mu\nu}$ 即是它的[[场强]]
（即把经典电动力学中[[电场强度]]和[[磁感应强度]]放在一起后做量子化）。

作用量密度的每一项物理意义如下：

- $F_{\mu\nu}F^{\mu\nu}$ 项表示自由[[光子场]]的作用量。

- $\bar{\psi}_k (\mathrm{i} \gamma^\mu \partial_\mu - m_k) \psi_k$
项表示每个自由 [[Dirac 场]]的作用量。

- $e_k\bar{\psi}_k \gamma^\mu A_\mu \psi_k$ 项表示二者的相互作用，
即经典意义下的[[电磁相互作用]]。此相互作用的[[耦合常数]]就是 $e_k$。

## 性质

### 对称性

### Feynman 规则

### 可重整性

## 计算

```terms
量子电动力学:
  en: quantum electrodynamics
  de: Quantenelektrodynamik
  fr: électrodynamique quantique
  grc: ποσικὴ ἠλεκτροδυναμική
  la: electrodynamica quantica
```
