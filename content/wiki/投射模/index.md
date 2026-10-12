---
title: 投射模
aliases: [投射右模]
categories: [同调代数, 模论]
---

**投射模**是[[模范畴]]中的[[投射对象]]，
即使得[[函子]] $\operatorname{Hom}_A (P, -)$
[[正合函子|正合]]的 $A$-模 $P$。

## 定义

::: definition [投射模]
对[[环]] $A$，
$A$-模 $P$ 称为投射模，
如果[[函子]] $\operatorname{Hom}_A (P, -)$ [[正合函子|正合]]。
即对任意[[正合列]] $0 \to M' \to M \to M'' \to 0$，
有正合列
\[
0 \to \operatorname{Hom}_A (P, M') \to
\operatorname{Hom}_A (P, M) \to
\operatorname{Hom}_A (P, M'') \to 0.
\]
:::

::: remark
由于对任意 $A$-模 $M$，[[函子]] $\operatorname{Hom}_A(M, -)$
是左正合的，因此投射模定义等价于此函子保持满射。
:::

## 性质

::: proposition [等价定义]
如下事实等价：

- $P$ 是投射模。

- $P$ 是[[自由模]]的[[直和项]]，
  即存在自由模 $M$ 和模 $N$ 使得
  $M = N \oplus P$。

- 任意满射 $p \colon M \to P$ 存在[[截面]]，
  即存在 $i \colon P \to M$ 使得 $p \circ i = \mathrm{id}$。

:::

::: proposition [足够投射对象]
对任意模 $M$，存在投射模 $P$ 与[[满射]] $P \to M$。
:::

::: proposition [与自由模的关系]
[[自由模]]是投射模；
[[局部环]]上投射模是自由模，
一些特殊的环（例如[[主理想整环]]、[[域]]上[[多项式环]]）
上有限生成投射模是自由模。
:::

::: proposition [与平坦模的关系]
投射模是[[平坦模]]；
[[有限表现模|有限表现]]平坦模与有限生成投射模二者等价。
:::

::: proof
由投射模是自由模的直和项，有限生成投射模是有限自由模的直和项，
立得投射模平坦，有限生成投射模有限表现。下证有限表现平坦模投射。
设 $M$ 为有限表现平坦左 $A$-模，即函子 $-\otimes_AM$ 正合。
以 $-^*$ 记 $\operatorname{Hom}_\mathbb{Z}(-,\mathbb{Q}/\mathbb{Z})$，
则它[[忠实函子|忠实]]、[[正合函子|正合]]，故欲证 $\operatorname{Hom}_A(M,-)$
正合，只需证 $\operatorname{Hom}_A(M,-)^*$ 正合。由于 $-^*$ 正合，$M$ 平坦，
又只需证 $\operatorname{Hom}_A(M,-)^*\cong-^*\otimes_AM$。下证之。

右边到左边有自然映射 $f\otimes m\mapsto(g\mapsto f(g(m)))$，
需要证它是同构。注意两边都关于 $M$ 右正合，而由 $M$ 有限表现有右半正合列
$A^m\to A^n\to M\to0$，故只需证 $M=A^n$ 时它是同构。此时两边都是
$(-^*)^n$，显然同构。
:::

::: proposition [与内射模的关系]
如 $A$ 是[[域]] $k$ 上代数，
$M$ 是 $A$ 模且是有限维 $k$-向量空间，
则 $M$ 是投射 $A$-模当且仅当 $M^*$ 是内射 $A^{\mathrm{op}}$-模，
反之亦然。（其中 $M^* = \operatorname{Hom}_k(M, k)$）。
:::

::: theorem [交换环上的刻画]
$A$ 是交换环，$M$ 是有限生成 $A$-模。则 $M$ 投射当且仅当其在一个
Zariski 开覆盖上自由，即存在 $a_1,\ldots,a_n\in A$，
$\sum_{i=1}^na_i=1$，使得 $M_{a_i}$ 是自由 $A_{a_i}$-模。
:::

::: theorem [Kaplansky 结构定理]
投射模是可数生成投射模的直和。[[可数生成模]]投射当且仅当其为[[平坦模|平坦]]
[[Mittag-Leffler 模]]。
:::

::: proof
后一句话的证明见 [[Mittag-Leffler 模]]条目，这里只证前一句话。
由标准的 [[Zorn 引理]]论证，只需说明非零投射 $A$-模 $P$
都有可数生成投射的直和项 $Q$。为此把 $P$ 写成自由模的直和项
$P\xhookrightarrow{\iota}A^{\oplus I}
  \xtwoheadrightarrow{\pi}P$，并取非零有限生成子模
$Q_0\subseteq P$。然后对 $n\in\mathbb{N}$ 归纳定义 $J_n$
为 $I$ 的最小子集使得 $\iota(Q_n)\subseteq A^{\oplus J_n}$，
$Q_{n+1}$ 为 $\pi(A^{\oplus J_n})$。显然
$J_n\subseteq J_{n+1}$，$Q_n\subseteq Q_{n+1}$。
令 $Q=\bigcup_{n\in\mathbb{N}}Q_n$，$J=\bigcup_{n\in\mathbb{N}}J_n$，
则由构造立知 $Q$ 沿映射 $Q\xhookrightarrow{\iota|_Q}
  A^{\oplus J}\xtwoheadrightarrow{\pi|_{A^{\oplus J}}}Q$ 成为 $A^{\oplus J}$
的直和项，故为可数生成投射模，且由 $\iota|_Q$ 可分解为
$Q\hookrightarrow P\xrightarrow{\iota}A^{\oplus I}
  \twoheadrightarrow A^{\oplus J}$ 便知 $Q$ 是 $P$
的直和项。
:::

::: corollary [平坦下降]
$A\to B$ 是交换环的[[忠实平坦]]同态，$M$ 是 $A$-模。
则 $M$ 是投射 $A$-模当且仅当 $M\otimes_AB$ 是投射 $B$-模。
:::

## 例子

- [[自由模]]是投射模，例如环 $A$ 本身是其上的投射模。

- 如 $e$ 是环 $A$ 上[[幂等元]]，则 $Ae$ 是 $A$ 上投射模。

```terms
投射模:
  en: projective module
  de: projektiver Modul
  fr: module projectif
  grc: προϊετικὸν πρότυπον
  la: modulus projectivus
```
