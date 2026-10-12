---
title: 有限生成模
aliases: [有限生成左模, 有限型模]
categories: [模论]
---

**有限生成模**，又称**有限型模**，
指被有限个元素生成的模。这是关于[[模]]最基本的有限性条件。

## 定义

::: definition
$R$ 是[[环]]，$M$ 是左 $R$-模。称 $M$ 有限生成，指存在
$n\in\mathbb{N}$ 以及 $m_1,\ldots,m_n\in M$，满足每个元素 $m\in M$
都能写成 $\sum_{i=1}^nr_im_i$ 的形式，其中 $r_1,\ldots,r_n\in R$。
换言之，有限个元素 $m_1,\ldots,m_n$ 生成 $M$。
:::

右模自然也可作类似定义。

## 例子

- 有限维[[线性空间]]是有限生成模。

- 一般地，对 $n\in\mathbb{N}$，$R^n$ 是有限生成 $R$-模。

- $\mathbb{Z}/n$ 是有限生成 $\mathbb{Z}$-模：它被 $1$ 生成。

- 一般地，有限生成模的[[商模]]有限生成。

- $\mathbb{Q}$ 不是有限生成 $\mathbb{Z}$-模：
  有限个分数总能通分，分母不整除它们的公分母的分数自然不被它们生成。

## 性质

有限生成模的定义是用元素写出；其实它有一些[[范畴论]]刻画，可不用提及元素，
直接在范畴 $R\text{-}\mathsf{Mod}$ 中取出有限生成模。

::: proposition [拟紧]
$M\in R\text{-}\mathsf{Mod}$ 有限生成，当且仅当对任一族左 $R$-模
$\{N_i\}_{i\in I}$ 以及满射 $\bigoplus_{i\in I}N_i\twoheadrightarrow M$，
存在有限子集 $J\subseteq I$ 使得 $\bigoplus_{j\in J}N_j\to M$
已经满。
:::

::: proposition [紧]
$M\in R\text{-}\mathsf{Mod}$ 有限生成，当且仅当对任一左 $R$-模
$N$ 一[[滤相系]]的子模 $\{N_i\}_{i\in I}$ 满足
$\bigcup_{i\in I}N_i=N$，每个映射 $M\to N$ 都穿过某个 $N_i$。
:::

另外在环交换时有限生成模还有一重要性质，见 [[Nakayama 引理]]。

::: lemma
$R$ 是交换环，$I\subseteq R$ 是理想，$M$ 是有限生成 $R$-模，
被 $n$ 个元素生成。则对任一同态 $f\colon M\to IM$，都存在
$a_1,\ldots,a_n\in I$，使得
$$
f^n+a_1f^{n-1}+\cdots+a_n=0.
$$
这里次方表示 $f$ 复合自己。
:::

```terms
有限生成模:
  en: finitely generated module
  de: endlich erzeugter Modul
  fr: module de type fini
  grc: πεπερασμένως παραγόμενον πρότυπον
  la: modulus finite generatus
```
