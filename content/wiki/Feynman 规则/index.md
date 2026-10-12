---
title: Feynman 规则
categories: [量子场论]
notices:
  - name: 问题
    items:
      - “陈述”一节中关于 $S$ 矩阵的定理缺少规则的具体内容。
      - “证明”“例子”各节需要扩充。
      - “例子”一节中，自由电子传播子的 $\langle \psi(x)\bar{\psi}(x) \rangle$ 似乎应为 $\langle \psi(x)\bar{\psi}(y) \rangle$，两个传播子积分中的指数 $\mathrm{e}^{-\mathrm{i} (x - y)}$ 似乎缺少动量因子（应为 $\mathrm{e}^{-\mathrm{i} p \cdot (x - y)}$、$\mathrm{e}^{-\mathrm{i} k \cdot (x - y)}$）；光子传播子中的 $g^{\mu\nu} (1 - \xi) \frac{k^\mu k^\nu}{k^2}$ 似乎缺少减号，应为 $g^{\mu\nu} - (1 - \xi) \frac{k^\mu k^\nu}{k^2}$。
---

**Feynman 规则**为每个 [[Feynman 图]]赋予一个数。
从而对所有满足条件的 Feynman 图相应的数求和可以得到[[多点函数]]或
[[S 矩阵|$S$ 矩阵]]的项的值。

## 陈述

设 $M$、$N$ 是两个集合，代表可能出现的粒子，
$M$ 中元素代表反粒子是其自身的粒子，对应的场记为 $\phi_m$，
$N$ 中元素代表反粒子不是其自身的粒子，
对应的场记为 $\psi_n$、$\bar{\psi}_n$。
记相应理论的作用量密度为
\[
\mathcal{L} = \mathcal{L}_{自由} +
\sum \frac{g_{m_1\cdots n_l}}
{a_1!\cdots a_k!(b_1 !)^2 \cdots (b_l !)^2}
\phi_{m_1}^{a_1} \cdots \phi_{m_k}^{a_k}
\psi_{n_1}^{b_1}\bar{\psi}_{n_1}^{b_1} \cdots
\psi_{n_l}^{b_l}\bar{\psi}_{n_l}^{b_l}
\]
其中 $\mathcal{L}_{自由}$ 是所有粒子的自由场的作用量密度之和。
剩下的项代表相互作用，$g$ 即相应的[[耦合常数]]。
则 Feynman 规则如下。

对多点函数：

::: theorem
一个 [[Feynman 图]] $(G, V_0, f, o)$ 对应的值按照如下步骤得出：

- 对图的每一条边赋予一个时空向量（即动量）$p \in \mathbb{R}^{n+1}$，
  并为图随意赋予一个定向（未必与 $o$ 相容）。

- 对每一条边，写下相应的粒子的 [[Feynman 传播子]]在动量
  $p$ 处的取值。

- 对每个内顶点，写下
  $-\mathrm{i} g (2\pi)^{n+1} \delta(\sum p -\sum p')$，
  其中 $g$ 为相应相互作用的耦合常数，
  $\sum p - \sum p'$ 代表（在第一步中赋予的）
  进入和出去的动量之差，
  $\delta$ 为 [[$\delta$ 函数]]。

- 对每个外顶点，写下 $\mathrm{e}^{\pm \mathrm{i} p \cdot x}$，
  其中 $x$ 为多点函数中每一点的坐标，
  $\pm p$ 为第一步中赋予的动量（进入为 $+$，出去为 $-$ 或相反）。

- 取上述写下的所有量的乘积，并对每个赋予的动量 $p$ 作积分
  $\int \frac{dp}{(2\pi)^{n+1}}$。

- 把结果除以 Feynman 图的自同构群的阶数。

- 如果一些场是 Fermi 场，乘以 $-1$ 的若干次方。

:::

对 $S$ 矩阵的项：

::: theorem
一个有向 [[Feynman 图]]
（给定每一条外线相应的粒子的[[动量]] $p$ 和自旋 $\sigma$）
对应的值由如下规则得出。
:::

::: remark
实际上 $\phi$、$\psi$ 未必是标量场，因此会有分量，
相互作用项中也可能涉及到相应的场的导数，
但为了简洁起见我们在这里只把结论大致写出来，
而遇到具体情况时再写得更严格些。
:::

## 证明

## 例子

考虑[[量子电动力学]]，相应的[[作用量]]密度为（时空为四维）
\[
\mathcal{L} = \bar{\psi}(\mathrm{i}\mathrlap{\!\not{\phantom{\partial}}}\partial - m)\psi
- \frac{1}{4}(\partial_\nu A_\mu - \partial_\mu A_\nu)^2
- e \bar{\psi} \gamma^\mu \psi A_\mu
\]

其中 $A_\mu$ 为光子场，$\psi$ 是电子场，$e$ 是常数，即[[元电荷]]。
则相应物理量为：

- 自由电子传播子
  \[
  D_F(x - y) =
  \langle \psi(x)\bar{\psi}(x) \rangle =
  \int \frac{dp}{(2\pi)^4}
  \frac{\mathrm{i}(\mathrlap{\!\not{\phantom{p}}}p + m)}{p^2 - m^2 + \mathrm{i}\epsilon}
  \mathrm{e}^{-\mathrm{i} (x - y)}
  \]
  写成动量形式，则有
  \[
  D_F(p) = \frac{\mathrm{i}(\mathrlap{\!\not{\phantom{p}}}p + m)}{p^2 - m^2 + \mathrm{i}\epsilon}
  \]

- 自由光子传播子
  \[
  D_F^{\mu\nu}(x - y)
  = \langle A^\mu(x) A^\nu(y) \rangle
  = \int \frac{dk}{(2\pi)^4} \frac{-\mathrm{i}}{k^2 + \mathrm{i}\epsilon}
  \left( g^{\mu\nu} (1 - \xi) \frac{k^\mu k^\nu}{k^2} \right)
  \mathrm{e}^{-\mathrm{i} (x - y)}
  \]
  写成动量形式，则有
  \[
  D_F^{\mu\nu}(k) = \frac{-\mathrm{i}}{k^2 + \mathrm{i}\epsilon}
  \left( g^{\mu\nu} (1 - \xi) \frac{k^\mu k^\nu}{k^2} \right)
  \]

```terms
Feynman 规则:
  en: Feynman rules
  de: Feynman-Regeln
  fr: règles de Feynman
```
