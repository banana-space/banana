---
title: Nakayama 引理
aliases: [中山引理]
categories: [交换代数]
navboxes: [交换代数]
---

**Nakayama 引理**（也称为 **Nakayama–Azumaya–Krull 引理**）
是[[交换代数]]中的一个基本结论，
它描述了[[交换环]]的 [[Jacobson 根]]与该环上非零的[[有限生成模]]之间的联系。

## 陈述与证明

以下引理虽通常不叫“Nakayama 引理”，但它是相关命题中形式最强者，
在[[整同态|整性]]中亦有应用。

::: lemma {@强形式}
$R$ 是交换环，$I\subseteq R$ 是理想，$M$ 是有限生成 $R$-模，
被 $n$ 个元素生成。则对任一同态 $f\colon M\to IM$，都存在
$a_1,\ldots,a_n\in I$，使得
$$
f^n+a_1f^{n-1}+\cdots+a_n=0.
$$
这里次方表示 $f$ 复合自己。
:::

::: proof
设 $\{ x_1, \dotsc, x_n \}$ 为 $M$ 的一组生成元，并设
\[
f(x_i) = \sum_{j=1}^n a_{ij} x_j,
\]
其中 $a_{ij} \in I$。
记 $A = (a_{ij})$ 为这些元素构成的 $n \times n$ 矩阵，并令
\[
p (t) = \det (tI_n - A)=t^n+a_1t^{n-1}+\cdots+a_n
\]
为 $A$ 的[[特征多项式]]。
则由 [[Cayley–Hamilton 定理]]，$p (A) = 0$，于是 $p(f)=0$，即
$f^n+a_1f^{n-1}+\cdots+a_n=0$。由于 $a_{ij}\in I$，
容易发现 $a_i\in I$。
:::

::: theorem [Nakayama 引理] {@Nakayama-引理}
设 $R$ 是[[交换环]]，$M$ 为 $R$ 上的[[有限生成模]]。

1. 如果[[理想]] $I \subset R$ 满足
   \[
   I M = M,
   \]
   则存在 $r \in R$，使得 $r M = 0$ 且 $r \equiv 1 \pmod{I}$。

2. 记 $J$ 为 $R$ 的 [[Jacobson 根]]。如果 $JM=M$，
   那么 $M = 0$。

:::

::: proof
1. 在 @强形式 中令 $f=\operatorname{id}$，
   即得 $a_1,\ldots,a_n\in I$，使得
   $$
   (1+a_1+\cdots+a_n)M=0.
   $$
   于是 $r=1+a_1+\cdots+a_n$ 即为所求。

2. 这是因为 $1+J\subseteq R^\times$。

:::

## 推论

::: corollary {@冗余性}
记号同 @Nakayama-引理。如果子模 $N\subseteq M$
满足 $M=N+JM$，那么 $M=N$。
:::

::: proof
$M=N+JM$ 即 $M/N=J(M/N)$。由 @Nakayama-引理，
这推出 $M/N=0$，即 $M=N$。
:::

::: corollary {@满射}
$N,M$ 是 $R$-模，$M$ 有限生成，$f\colon N\to M$
是模同态。如 $f$ 在模 $J$ 之后是满射，则 $f$ 自己就是满射。
:::

::: proof
对 $f(N)\subseteq M$ 用 @冗余性 即足。
:::

::: corollary
$N,M$ 是有限生成 $R$-模，$M$ [[投射模|投射]]，$f\colon N\to M$
是模同态。如 $f$ 在模 $J$ 之后是同构，则 $f$ 自己就是同构。
:::

::: proof
用 @满射 知 $f$ 是满射。于是用投射性知存在
$g\colon M\to N$ 使得 $f\circ g=\operatorname{id}_M$。
于是 $N=M\oplus K$，$K=\ker(f)$。现由 $f$ 模 $J$
是同构知 $K/JK=0$，故由 @Nakayama-引理 知 $K=0$，
$N=M$。
:::

现设 $R$ 是[[局部环]]，极大理想为 $\mathfrak{m}$，剩余域为 $k$。
则 $\mathfrak{m}$ 也是 $R$ 的 Jacobson 根。此时 Nakayama
引理说明有限生成 $R$ 模有“唯一”的极小生成元组：

::: corollary
$M$ 是局部环 $(R,\mathfrak{m},k)$ 上的有限生成模。
设 $n=\dim_k(M/\mathfrak{m}M)$，则

- $M$ 可由 $n$ 个元素生成。

- $m_1,\ldots,m_n\in M$ 生成 $M$ 当且仅当其在
  $M/\mathfrak{m}M$ 中的像是 $M/\mathfrak{m}M$ 在
  $k$ 上的一组基。

- 不同的 $n$ 元生成集之间相差 $R$ 上的可逆矩阵。

:::

::: proof
由 @冗余性，$M$ 中一些元素生成 $M$，当且仅当它们在
$M/\mathfrak{m}M$ 中的像生成 $M/\mathfrak{m}M$，
这样便得到前两句话。至于第三句话，设 $m_1,\ldots,m_n$
与 $m'_1,\ldots,m'_n$ 是两组生成元，并设
$$
m'_i=\sum_{j=1}^na_{ij}m_j,
$$
要证 $(a_{ij})$ 是 $R$ 上可逆矩阵。由于两组生成元的像都是
$M/\mathfrak{m}M$ 在 $k$ 上的基，有矩阵 $(a_{ij}\bmod\mathfrak{m})$
在 $k$ 上可逆。于是 $\det(a_{ij})\bmod\mathfrak{m}$ 非零，
即 $\det(a_{ij})\in R^\times$，故 $(a_{ij})$ 可逆。
:::

::: corollary
交换环上有限生成幂等理想是主理想，由一个[[幂等元]]生成。
:::

::: proof
设 $A$ 是交换环，$I$ 是其有限生成理想，$I^2=I$。
由 @Nakayama-引理，存在 $e\in1+I$ 使得
$eI=0$。于是 $e(1-e)=0$，即 $e$ 是幂等元。
现对任意 $i\in I$ 都有 $i=ei+(1-e)i=(1-e)i$，
所以 $I=(1-e)$ 由一个幂等元生成。
:::

## 其他版本

::: theorem [非交换 Nakayama]
$R$ 是环，$J$ 是其 [[Jacobson 根]]，$M$ 是有限生成左 $R$-模。
如果 $JM=M$，那么 $M=0$。
:::

::: proof
设 $M$ 由 $m_1,\ldots,m_n$ 生成，且生成元个数 $n$ 尽可能小。
如 $n\ne0$，由 $JM=M$，存在 $a_1,\ldots,a_n\in J$，
$$
m_n=\sum_{i=1}^na_im_i.
$$
此即
$$
(1-a_n)m_n=\sum_{i=1}^{n-1}a_im_i;
$$
而 $a_n\in J$，$1-a_n\in R^\times$，于是 $m_n$ 可被
$m_1,\ldots,m_{n-1}$ 生成，与 $n$ 最小矛盾！故 $n=0$，即 $M=0$。
:::

::: theorem [导出 Nakayama]
$R$ 是交换环，$I$ 是其有限生成理想，$M\in\mathsf{D}(R)$
为导出 $I$-完备。如果 $M\otimes^L_RR/I=0$，那么 $M=0$。
:::

```terms
Nakayama 引理:
  en: Nakayama's lemma
  de: Lemma von Nakayama
  fr: lemme de Nakayama
```
