---
title: 生成（群论）
categories: [群论]
---

**生成**是一种构造[[群]]的手段，
其大致思想为由较少的一些元素通过群的运算关系，
产生出较大的一个群。

## 定义

“生成”大致分为两种：通过给定的群中的运算，通过其某个子集产生一个子群，
即**内生成**（@def-ingen）；
通过“[[万有]]”的群运算以及一些约束条件（关系），
从一个集合（生成元）直接构造一个群，即**外生成**（@def-exgen）。

### 内生成

::: definition {@def-ingen}
对群 $G$ 以及其子集 $S$，包含 $S$ 的最小[[子群]] $H$ 称为 $S$ **生成**的子群，
$S$ 称为 $H$ 的一组**生成元**。
:::

::: definition {@def-ingen-nor}
对群 $G$ 以及其子集 $S$，
包含 $S$ 的最小[[正规子群]] $H$ 称为 $S$ **生成**的正规子群。
:::

### 外生成

::: definition {@def-freegrp}
对集合 $S$，其**生成**的**自由群**为

- 其下集合
  \[
  F_S = \{ a_1^{k_1} \dots a_n^{k_n} \mid
  a_i \in S, k_i \in \mathbb{Z} \} / \sim.
  \]
  这里 $a_1^{k_1} \dots a_n^{k_n}$ 是一个可以为空的字符串。
  而 $\sim$ 是由下述关系[[生成 (等价关系)|生成]]的等价关系：
  \[
  \begin{aligned}
    P a^0 Q & \sim P Q, \quad \forall a \in S, \\
    P a^{k_1} a^{k_2} Q & \sim P a^{k_1 + k_2} Q, \quad \forall a \in S.
  \end{aligned}
  \]
  这里 $P,\ Q$ 是形如上述的字符串。

- 乘法
  \[
  (a_1^{k_1} \dots a_n^{k_n}) \cdot (b_1^{l_1} \dots b_m^{l_m})
  = a_1^{k_1} \dots a_n^{k_n}b_1^{l_1} \dots b_m^{l_m}.
  \]

- 单位元
  $e$ 为空字符串。

- 逆元
  \[
  (a_1^{k_1} \dots a_n^{k_n})^{-1} = a_n^{-k_n} \dots a_1^{-k_1}.
  \]

:::

::: definition {@def-exgen}
对集合 $S$ 以及一由形如
\[
a_1^{k_1} \dots a_n^{k_n},
\quad a_1, \dots, a_n \in S, k_1, \dots, k_n \in \mathbb{Z}.
\]
的字串构成的集合 $T$，
$T$ 可视为 $S$ 生成的自由群 $G$ 的子集，其生成的正规子群（@def-ingen-nor）
记为 $H$，$G / H$ 称为由**生成元** $S$ 与关系 $T = 1$ **生成**的群。
记作 $\langle S \mid T = 1 \rangle$。
:::

::: definition {@def-freeabgrp}
对集合 $S$，令
\[
T = \{a b a^{-1} b^{-1} \mid a,\ b \in S\},
\]
由**生成元** $S$ 与关系 $T = 1$ **生成**的群称为由
$S$ 生成的**自由 Abel 群**。
:::

## 性质

::: proposition
任何群可以作为由一组生成元 $S$ 和一组关系 $T = 1$ 生成的群，
其中取
\[
S = G, \quad T = \{ g_1 g_2 (g_1 \cdot g_2)^{-1} \mid g_1 g_2 \in G\}.
\]
:::

## 例子

- 在某个群内，[[空集]]（内）生成的群为[[平凡群]]。

- 在 $S$ 为空集（从而 $T$ 必为空集）时，
  由生成元 $S$（外）生成的群为平凡群。

- $T$ 为空集时，$S$ 与 $T$ 生成的群为 $S$ 生成的[[自由群]]。

- 生成元 $S = \{ a \}$ 与关系 $T = \{ a^n\}$
  （$n \in \mathbb{Z}$，$n \geq 2$）
  生成的群为[[循环群]]
  $\langle a \mid a^n = 1 \rangle = \mathbb{Z} / n \mathbb{Z}$。

- 生成元 $S = \{ a, b \}$ 与关系 $T = \{ a^2, b^2, (a b)^n\}$
  （$n \in \mathbb{Z}$，$n \geq 2$）
  生成的群为[[二面体群]]
  $D_n = \langle a, b \mid a^2 = b^2 = (a b)^n = 1 \rangle$，
  它是 [[Coxeter 群]]的特例。

```terms
生成:
  en: generate
  de: erzeugen
  fr: engendrer
  grc: παράγω
  la: genero
```
