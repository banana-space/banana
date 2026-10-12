---
title: 内射维数
categories: [同调代数]
---

在有足够[[内射对象]]的 [[Abel 范畴]]中，
**内射维数**衡量一个对象离内射有多远。

## 定义

::: definition
$\mathcal{A}$ 是 Abel 范畴，有足够内射对象，$M\in\mathcal{A}$。
$M$ 的**内射维数** $\operatorname{id}(M)$
指的是函子 $\operatorname{Hom}(-,M)$ 的[[同调维数]]。换言之，
$$
\operatorname{id}(M)=\sup\{n\in\mathbb{N}\mid\operatorname{Ext}^n(-,M)\ne0\}.
$$
:::

::: remark {@另一定义}
依定义，$\operatorname{id}(M)$ 也是
$\mathcal{A}$ 到 $\mathsf{Fun}(\mathcal{A}^\text{op},\mathsf{Ab})$
的函子 $M\mapsto\operatorname{Hom}(-,M)$ 下，
对象 $M$ 的同调维数。
:::

## 性质

记号沿上。

::: proposition
对短正合列
$$
0\to N\to M\to Q\to0,
$$
有 $\operatorname{id}(M)\le\max\{\operatorname{id}(N),\operatorname{id}(Q)\}$，
$\operatorname{id}(Q)\le\max\{\operatorname{id}(M),\operatorname{id}(N)\}$，
$\operatorname{id}(N)\le\max\{\operatorname{id}(M),\operatorname{id}(Q)+1\}$。
如果 $\operatorname{id}(M)<\operatorname{id}(N)$，则 $\operatorname{id}(N)=\operatorname{id}(Q)+1$。
:::

::: proposition {@消解定义}
$M$ 的内射维数就是其内射消解的最短长度，即
$$
\operatorname{id}(M)=\inf\{n\in\mathbb{N}\mid\,存在正合列\,
0\to M\to I_0\cdots\to I_n\to0,\,各\,I_i\,内射\}.
$$
此外，对任意 $n\ge \operatorname{id}(M)$ 以及正合列
$$
0\to M\to I_0\cdots\to I_n\to0,
$$
只要 $I_0,\ldots,I_{n-1}$ 内射，$I_n$ 也就内射。
:::

::: proposition {@n+1}
$$
\operatorname{id}(M)=\inf\{n\in\mathbb{N}\mid\operatorname{Ext}^{n+1}(-,M)=0\}.
$$
特别地，$M$ 内射当且仅当 $\operatorname{Ext}^1(-,M)=0$。
:::

考虑到 @另一定义，这些命题是[[同调维数]]条目对应命题的立即推论。

以下是关于环上模的一些具体结论。

::: proposition
$R$ 是环，$M$ 是左 $R$-模。则
$$
\operatorname{id}(M)=\inf\{n\in\mathbb{N}\mid\forall J\subseteq R\,左理想,\,\operatorname{Ext}^{n+1}(R/J,M)=0\}.
$$
:::

::: proof
显然右边只可能更小，因为其条件相比 @n+1 的右边更容易满足。
以下对 $d\in\mathbb{N}$ 归纳证明，只要左边大于 $d$，右边也会大于 $d$。
$d=0$ 的情形是 [[Baer 判别法]]。$d>0$ 时，假设命题对 $d-1$ 成立，
作短正合列
$$
0\to M\to I\to C\to0,
$$
其中 $I$ 内射。由 $\operatorname{id}(M)>d$ 可知
$\operatorname{id}(C)>d-1$。对 $C$ 用归纳假设知存在左理想 $J$，
$\operatorname{Ext}^d(R/J,C)\ne0$。对以上短正合列写出
$\operatorname{Hom}(R/J,-)$ 的导出函子长正合列即得
$$
\operatorname{Ext}^{d+1}(R/J,M)\cong\operatorname{Ext}^d(R/J,C)\ne0,
$$
结合对 $M$ 的归纳假设即得命题里的右边大于 $d$。
:::

## 例子

- 内射对象就是内射维数 $0$ 的对象。

- 由于[[主理想整环]]上[[内射模]]就是[[可除模]]，而可除模的商模可除，
  由 @消解定义 即知主理想整环上模的内射维数至多是 $1$。在 $\mathsf{Ab}$ 中，
  $\mathbb{Z}$ 和 $\mathbb{Z}/n$ 的内射维数都是 $1$，
  而 $\mathbb{Q}$ 和 $\mathbb{Q}/\mathbb{Z}$ 的则是 $0$。

- $\mathbb{Z}/2$ 作为 $\mathbb{Z}/4$-模的内射维数是 $\infty$。

```terms
内射维数:
  en: injective dimension
  de: injektive Dimension
  fr: dimension injective
  grc: ἑνιετικὴ διάστασις
  la: dimensio iniectiva
```
