---
title: Artin–Rees 引理
aliases: [Artin-Rees 引理]
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**Artin–Rees 引理**是[[交换代数]]中的重要定理。它大体上说的是，
对 [[Noether 环]] $A$ 及其[[理想]] $I$，$A$ 上[[有限生成模]]的
[[I 进拓扑|$I$ 进拓扑]]限制在子模上就是子模的 $I$ 进拓扑。

## 定理与证明

::: theorem [Artin–Rees 引理]
$A$ 是 [[Noether 环]]，$I$ 是其理想，$M$ 是其上[[有限生成模]]，
$N\subseteq M$。则存在 $c\in\mathbb{N}$，使得对任意 $n\in\mathbb{N}$，都有
$I^{n+c}M\cap N=I^n(I^cM\cap N)$；特别地，
$I^{n+c}M\cap N\subseteq I^nN$。
:::

::: proof
首先注意 $\supseteq$ 是显然的。定理的内容是 $\subseteq$。

作 [[Rees 代数]] $B=\bigoplus_{n=0}^\infty I^n$。
它是[[分次环|分次]] $A$-代数，且如 $I=(a_1,\ldots,a_d)$，则有满射
$A[T_1,\ldots,T_d]\twoheadrightarrow B$，$T_i\mapsto a_i$。
于是由 [[Hilbert 基定理]]，$B$ 也是 Noether 环。由
$M$ 是有限生成 $A$-模，不难发现 $M'=\bigoplus_{n=0}^\infty I^nM$
是[[分次模|分次]] $B$-模且有限生成，因为 $M$ 的一组生成元就给出 $M'$ 的一组生成元。
令 $N'=\bigoplus_{n=0}^\infty(I^nM\cap N)$，则 $N'$
是 $M'$ 的分次 $B$-子模，故由 $B$ Noether，$N'$ 也有限生成。
可设其一组生成元是 $x_1,\ldots,x_r$，其中 $x_i\in I^{n_i}M\cap N$。
取 $c=\max\{n_1,\ldots,n_r\}$，下证其满足要求。

需对任意 $n\in\mathbb{N}$ 证明 $I^{n+c}M\cap N\subseteq I^nN$。
任取 $x\in I^{n+c}M\cap N$，将其视为 $N'$ 的 $n+c$ 次元素。
由于 $x_1,\ldots,x_r$ 生成 $N'$，存在 $b_1,\ldots,b_r\in B$ 使得
$$
x=\sum_{i=1}^rb_ix_i.
$$
由于 $x$ 为 $n+c$ 次，可舍掉右边各项的非 $n+c$ 次部分，而等式仍成立。
于是可设 $b_i$ 为 $n+c-n_i$ 次，即 $b_i\in I^{n+c-n_i}$，
上式作为 $I^{n+c}M\cap N$ 中的等式成立。这样由 $c\ge n_i$，
$I^{c-n_i}(I^{n_i}M\cap N)\subseteq I^cM\cap N$，便有
$$
x=\sum_{i=1}^rb_ix_i\in\sum_{i=1}^rI^{n+c-n_i}(I^{n_i}M\cap N)\subseteq I^n(I^cM\cap N).
$$
所以 $I^{n+c}M\cap N\subseteq I^nN$。
:::

以下推论是显然的。

::: corollary {@共尾}
记号同定理。$N$ 的两列子模 $(I^nM\cap N)_{n\in\mathbb{N}}$
与 $(I^nN)_{n\in\mathbb{N}}$ 共尾，即对任意 $n\in\mathbb{N}$，存在
$n'\in\mathbb{N}$，使得 $I^{n'}M\cap N\subseteq I^nN$，
$I^{n'}N\subseteq I^nM\cap N$。
:::

## 应用

其最主要的应用是说明 Noether 环上有限生成模的完备化表现良好，
即它是[[正合函子]]。

::: proposition
$A$ 是 [[Noether 环]]，$I$ 是其理想，
$$
0\to N\to M\to Q\to0
$$
是有限生成 $A$-模的短正合列。以 $\widehat{M}$ 记完备化
$\lim_{n\in\mathbb{N}}M/I^nM$，余类同。则
$$
0\to\widehat{N}\to\widehat{M}\to\widehat{Q}\to0
$$
也正合。
:::

::: proof
对任意 $n\in\mathbb{N}$，原短正合列给出如下短正合列
$$
0\to\frac{N}{I^nM\cap N}\to M/I^nM\to Q/I^nQ\to0.
$$
将其对 $n$ 取极限。由 @共尾，上列第一项的极限是
$\widehat{N}$。于是由极限左正合，即知
$$
0\to\widehat{N}\to\widehat{M}\to\widehat{Q}
$$
正合。尚需证明 $\widehat{M}\twoheadrightarrow\widehat{Q}$。
由极限的定义，只需证对任意 $q_{n+1}\in Q/I^{n+1}Q$
以及 $m_n\in M/I^nM$ 满足它们在 $Q/I^nQ$ 的像 $q_n$ 相同，
都有 $m_{n+1}\in M/I^{n+1}M$，在 $Q/I^{n+1}Q$ 的像是
$q_{n+1}$，在 $M/I^nM$ 的像是 $m_n$。

任取 $m\in M/I^{n+1}M$ 使其在 $Q/I^{n+1}Q$ 的像是 $q_{n+1}$。
以 $\bar{m}$ 记 $m$ 在 $M/I^nM$ 的像，则 $m_n-\bar{m}$
在 $Q/I^nQ$ 的像为 $0$，故它来自 $\frac{N}{I^nM\cap N}$。
取 $d\in\frac{N}{I^{n+1}M\cap N}$ 使其在 $\frac{N}{I^nM\cap N}$
的像为 $m_n-\bar{m}$。则不难验证 $m_{n+1}=m+d$ 满足要求。
:::

此外它也用于证明 [[Krull 交定理]]，具体参见主条目。

```terms
Artin–Rees 引理:
  en: Artin–Rees lemma
  de: Lemma von Artin–Rees
  fr: lemme d'Artin–Rees
```
