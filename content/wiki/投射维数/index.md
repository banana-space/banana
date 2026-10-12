---
title: 投射维数
categories: [同调代数]
---

在有足够[[投射对象]]的 [[Abel 范畴]]中，
**投射维数**衡量一个对象离投射有多远。

## 定义

::: definition
$\mathcal{A}$ 是 Abel 范畴，有足够投射对象，$M\in\mathcal{A}$。
$M$ 的**投射维数** $\operatorname{pd}(M)$
指的是函子 $\operatorname{Hom}(M,-)$ 的[[同调维数]]。换言之，
$$
\operatorname{pd}(M)=\sup\{n\in\mathbb{N}\mid\operatorname{Ext}^n(M,-)\ne0\}.
$$
:::

::: remark {@另一定义}
依定义，$\operatorname{pd}(M)$ 也是
$\mathcal{A}^\text{op}$ 到 $\mathsf{Fun}(\mathcal{A},\mathsf{Ab})$
的函子 $M\mapsto\operatorname{Hom}(M,-)$ 下，
对象 $M$ 的同调维数。
:::

## 性质

记号沿上。

::: proposition
对短正合列
$$
0\to N\to M\to Q\to0,
$$
有 $\operatorname{pd}(M)\le\max\{\operatorname{pd}(N),\operatorname{pd}(Q)\}$，
$\operatorname{pd}(N)\le\max\{\operatorname{pd}(M),\operatorname{pd}(Q)\}$，
$\operatorname{pd}(Q)\le\max\{\operatorname{pd}(M),\operatorname{pd}(N)+1\}$。
如果 $\operatorname{pd}(M)<\operatorname{pd}(Q)$，则 $\operatorname{pd}(Q)=\operatorname{pd}(N)+1$。
:::

::: proposition {@消解定义}
$M$ 的投射维数就是其投射消解的最短长度，即
$$
\operatorname{pd}(M)=\inf\{n\in\mathbb{N}\mid\,存在正合列\,
0\to P_n\to\cdots\to P_0\to M\to0,\,各\,P_i\,投射\}.
$$
此外，对任意 $n\ge \operatorname{pd}(M)$ 以及正合列
$$
0\to P_n\to\cdots\to P_0\to M\to0,
$$
只要 $P_0,\ldots,P_{n-1}$ 投射，$P_n$ 也就投射。
:::

::: proposition
$$
\operatorname{pd}(M)=\inf\{n\in\mathbb{N}\mid\operatorname{Ext}^{n+1}(M,-)=0\}.
$$
特别地，$M$ 投射当且仅当 $\operatorname{Ext}^1(M,-)=0$。
:::

考虑到 @另一定义，这些命题是[[同调维数]]条目对应命题的立即推论。

以下是关于环上模的一些具体结论。

::: proposition
环上模的投射维数大于等于[[平坦维数]]。
对 [[Noether 环]]上的[[有限生成模]]，这两维数相等。
:::

::: proof
第一句话是因为 @消解定义、平坦维数的对应命题、
环上投射模都平坦。第二句话则是因为 Noether
环有限生成模的子模有限生成，消解时总可使用有限生成模；
然后 Noether 环上有限生成模[[有限表现模|有限表现]]，
而有限表现[[平坦模]]和有限生成[[投射模]]是一回事。
:::

## 例子

- 投射对象就是投射维数 $0$ 的对象。

- 由于[[主理想整环]]上[[自由模]]的子模自由，由 @消解定义
  即知主理想整环上模的投射维数至多是 $1$。在 $\mathsf{Ab}$ 中，
  $\mathbb{Z}/n$、$\mathbb{Q}$、$\mathbb{Q}/\mathbb{Z}$ 的投射维数都是 $1$。
  注意 $\mathbb{Q}$ 是平坦 $\mathbb{Z}$-模；由此可见投射维数可以严格大于[[平坦维数]]。

- $\mathbb{Z}/2$ 作为 $\mathbb{Z}/4$-模的投射维数是 $\infty$。

```terms
投射维数:
  en: projective dimension
  de: projektive Dimension
  fr: dimension projective
  grc: προϊετικὴ διάστασις
  la: dimensio proiectiva
```
