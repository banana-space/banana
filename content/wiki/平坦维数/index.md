---
title: 平坦维数
categories: [同调代数]
---

**平坦维数**衡量环上的模离平坦有多远。

## 定义

::: definition
$R$ 是[[环]]，$M$ 是左 $R$-模。
$M$ 的**平坦维数** $\operatorname{fd}(M)$
指的是函子 $-\otimes_RM$ 的[[同调维数]]。换言之，
$$
\operatorname{fd}(M)=\sup\{n\in\mathbb{N}\mid\operatorname{Tor}_n(-,M)\ne0\}.
$$
显然对右模也可作同样定义，只是要放在张量积的左边。
:::

::: remark {@另一定义}
依定义，$\operatorname{fd}(M)$ 也是
$\mathcal{A}$ 到 $\mathsf{Fun}(\mathcal{A},\mathsf{Ab})$
的函子 $M\mapsto-\otimes_RM$ 下，
对象 $M$ 的同调维数。
:::

## 性质

记号沿上。

::: proposition
对短正合列
$$
0\to N\to M\to Q\to0,
$$
有 $\operatorname{fd}(M)\le\max\{\operatorname{fd}(N),\operatorname{fd}(Q)\}$，
$\operatorname{fd}(N)\le\max\{\operatorname{fd}(M),\operatorname{fd}(Q)\}$，
$\operatorname{fd}(Q)\le\max\{\operatorname{fd}(M),\operatorname{fd}(N)+1\}$。
如果 $\operatorname{fd}(M)<\operatorname{fd}(Q)$，则 $\operatorname{fd}(Q)=\operatorname{fd}(N)+1$。
:::

::: proposition {@消解定义}
$M$ 的平坦维数就是其平坦消解的最短长度，即
$$
\operatorname{fd}(M)=\inf\{n\in\mathbb{N}\mid\,存在正合列\,
0\to F_n\to\cdots\to F_0\to M\to0,\,各\,F_i\,平坦\}.
$$
此外，对任意 $n\ge \operatorname{fd}(M)$ 以及正合列
$$
0\to F_n\to\cdots\to F_0\to M\to0,
$$
只要 $F_0,\ldots,F_{n-1}$ 平坦，$F_n$ 也就平坦。
:::

::: proposition
$$
\operatorname{fd}(M)=\inf\{n\in\mathbb{N}\mid\operatorname{Tor}_{n+1}(-,M)=0\}.
$$
特别地，$M$ 平坦当且仅当 $\operatorname{Tor}_1(-,M)=0$。
:::

考虑到 @另一定义，这些命题是[[同调维数]]条目对应命题的立即推论。

以下是一些具体结论。

::: proposition
环上模的平坦维数小于等于[[投射维数]]。
对 [[Noether 环]]上的[[有限生成模]]，这两维数相等。
:::

::: proof
第一句话是因为 @消解定义、投射维数的对应命题、
环上投射模都平坦。第二句话则是因为 Noether
环有限生成模的子模有限生成，消解时总可使用有限生成模；
然后 Noether 环上有限生成模[[有限表现模|有限表现]]，
而有限表现[[平坦模]]和有限生成[[投射模]]是一回事。
:::

::: proposition
$R$ 是环，$M$ 是左 $R$-模。则
$$
\operatorname{fd}(M)=\inf\{n\in\mathbb{N}\mid\forall J\subseteq R\,有限生成右理想,\,
\operatorname{Tor}_{n+1}(R/J,M)=0\}.
$$
:::

::: proof
只需对固定的 $m\in\mathbb{N}$ 证明，如果 $\operatorname{Tor}_m(R/J,M)=0$
对所有有限生成右理想 $J\subseteq R$ 成立，就有
$\operatorname{Tor}_m(N,M)=0$ 对所有右模 $N$ 成立。我们分以下几步：

1. 首先 $\operatorname{Tor}_m(R/J,M)=0$ 对所有右理想 $J$ 成立。
   这是因为可将 $J$ 写成有限生成右理想的[[滤余极限]]，
   从而 $R/J$ 也是对应的商去有限生成右理想的滤余极限，而 $\operatorname{Tor}$
   函子与滤余极限交换。

2. 其次 $\operatorname{Tor}_m(N,M)=0$ 对所有有限生成模 $N$ 成立。
   这是因为可对生成元个数归纳，一元生成就是 $R/J$，上面已经处理；
   多元生成时写短正合列
   $$
   0\to N'\to N\to N''\to0
   $$
   使得 $N',N''$ 都由更少的元素生成，然后写出 $\operatorname{Tor}$
   函子长正合列，用归纳假设即可。

3. 最后证明 $\operatorname{Tor}_m(N,M)=0$ 对所有的 $N$ 成立。
   这是因为可将 $N$ 写成有限生成右模的滤余极限，利用 $\operatorname{Tor}$
   函子与滤余极限交换得到结论。

:::

由于交换环上模的[[平坦模|平坦]]性可以局部检查，其上平坦维数也可以局部计算。

::: proposition
对交换环 $A$ 及其模 $M$，
$$
\operatorname{fd}_A(M)=
\sup\{\operatorname{fd}_{A_\mathfrak{p}}(M_\mathfrak{p})\mid\mathfrak{p}\in\operatorname{Spec}A\}.
$$
:::

::: proof
由于 $M$ 的平坦消解对 $\mathfrak{p}$ 局部化就能得到
$M_\mathfrak{p}$ 作为 $A_\mathfrak{p}$-模的平坦消解，
所以 $\operatorname{fd}_A(M)\ge\operatorname{fd}_{A_\mathfrak{p}}(M_\mathfrak{p})$。
反过来如果对每个素理想 $\mathfrak{p}$ 都有
$\operatorname{fd}_{A_\mathfrak{p}}(M_\mathfrak{p})\le n$，
需要证明 $\operatorname{fd}_A(M)\le n$。取 $M$ 的
$n-1$ 步平坦消解
$$
F_{n-1}\to\cdots\to F_0\to M\to0
$$
并令 $F_n=\ker(F_{n-1}\to F_{n-2})$。
对素理想 $\mathfrak{p}$，正合列
$$
0\to F_n\to\cdots\to F_0\to M\to0
$$
在 $\mathfrak{p}$ 处的局部化是 $M_\mathfrak{p}$ 的消解；
由于 $\operatorname{fd}_{A_\mathfrak{p}}(M_\mathfrak{p})\le n$，
@消解定义 给出 $(F_n)_\mathfrak{p}$ 是平坦 $A_{\mathfrak{p}}$-模。
这对任一素理想成立，于是 $F_n$ 是平坦 $A$-模，
$\operatorname{fd}_A(M)\le n$。
:::

## 例子

- 平坦对象就是平坦维数 $0$ 的对象。

- 由于[[主理想整环]]上[[平坦模]]就是[[无挠模]]，无挠模的子模无挠，
  由 @消解定义 即知主理想整环上模的平坦维数至多是 $1$。
  作为 $\mathbb{Z}$-模，$\mathbb{Z}/n$、$\mathbb{Q}/\mathbb{Z}$
  的平坦维数都是 $1$，而 $\mathbb{Q}$ 的平坦维数是 $0$。
  由此可见，平坦维数可以严格小于[[投射维数]]。

- $\mathbb{Z}/2$ 作为 $\mathbb{Z}/4$-模的平坦维数是 $\infty$。

```terms
平坦维数:
  en: flat dimension
  de: flache Dimension
  fr: dimension plate
```
