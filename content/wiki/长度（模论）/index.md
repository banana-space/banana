---
title: 长度（模论）
aliases: [有限长模]
categories: [模论]
---

[[模论]]中，[[模]]的**长度**指的是其[[合成列]]的长度。
这是模论中最基本的一个数值不变量。

以下只对[[左模]]陈述定义与性质。右模的情形当然完全一样。

## 定义

::: definition
$R$ 是环，$M$ 是左 $R$-模。称 $M$ **有限长**，
指它有[[合成列]]，即存在链
$$
0=M_0\subset M_1\subset\cdots\subset M_n=M,
$$
使得对 $i=1,\ldots,n$，$M_i/M_{i-1}$ 为[[单模]]。
由 [[Jordan–Hölder 定理]]，这个自然数 $n$
只依赖于 $M$，而不依赖于以上模链的选取。将其称为 $M$
的**长度**，记作 $\ell(M)$ 或 $\ell_R(M)$。
当 $M$ 不是有限长时，称其长度为无穷。
:::

## 性质

### 一般性质

::: proposition
对环 $R$ 及其左模短正合列
$$
0\to N\to M\to Q\to0,
$$
$M$ 有限长当且仅当 $N$ 和 $Q$ 都有限长，且有
$$
\ell(M)=\ell(N)+\ell(Q).
$$
:::

::: proof
如 $M$ 有限长，取其合成列，将各项与 $N$ 取交，
再删去重复的项，就会得到 $N$ 的合成列；同样地，取各项在
$Q$ 中的像，再删去重复的项，就会得到 $Q$ 的合成列。
所以如 $M$ 有限长，就有 $N$ 和 $Q$ 都有限长。

反过来如 $N$ 和 $Q$ 都有限长，把 $Q$ 的合成列在 $M$
中取原像，再与 $N$ 的合成列相接，就会得到 $M$
的合成列。于是有 $M$ 有限长，且
$\ell(M)=\ell(N)+\ell(Q)$。
:::

::: proposition {@刻画}
对[[环]] $R$ 及其[[左模]] $M$，以下几条等价：

1. $M$ 为有限长。

2. $M$ 为 [[Artin 模|Artin]] 且 [[Noether 模|Noether]]。

3. $M$ 为 Artin 且[[有限生成模|有限生成]]。

此时 $R/\operatorname{Ann}(M)$ 为左 [[Artin 环]]。
:::

::: proof
以下在 3 推 1 的过程中证明 $R/\operatorname{Ann}(M)$ 左 Artin。

- **1 推 2** 如 $M$ 有限长，则其任一子模族中长度最小、最大者显然就是族的极小、极大元，
  所以 $M$ 为 Artin 且 Noether。

- **2 推 3** 这是因为 Noether 模都有限生成。

- **3 推 1** 商去 $\operatorname{Ann}(M)$ 不改变任何事情，
  故可不妨设 $\operatorname{Ann}(M)=0$。
  取 $M$ 的生成元 $m_1,\ldots,m_n$，则映射
  $$
  (m_1,\ldots,m_n)\colon R\to M^n
  $$
  为单射。所以 $R$ 作为自己的左模 Artin，即其为左
  Artin 环。于是由 [[Artin 环|Hopkins–Levitzki 定理]]知
  $R$ 作为自己的左模有限长。这样由 $R^n\twoheadrightarrow M$
  知 $M$ 为有限长。

:::

::: proposition
设 $R$ 是环，$M$ 是有限长左 $R$-模，$f\colon M\to M$
是自同态。则存在唯一 $f$-不变直和分解
$M=N\oplus Q$，使得 $f\colon N\to N$ 为幂零，
$f\colon Q\to Q$ 为同构。特别地，
$$
f\,是单射\iff f\,是满射\iff f\,是同构\iff N=0.
$$
:::

::: proof
由 @刻画，子模链
$$
0\subset\ker(f)\subset\ker(f^2)\subset\cdots
$$
与
$$
M\supset\operatorname{im}(f)\supset\operatorname{im}(f^2)\supset\cdots
$$
均终止。取 $n\in\mathbb{N}$ 使其终止于 $\ker(f^n)$，
$\operatorname{im}(f^n)$。记此二模为 $N,Q$，
下证其满足要求。

首先对 $f^n$ 用同构定理知 $Q\cong M/N$，于是
$\ell(N)+\ell(Q)=\ell(M)$。
显然 $N,Q$ 皆为 $f$ 不变，且 $f$ 在 $N$ 上幂零。
由 $f(Q)=f(\operatorname{im}(f^n))=\operatorname{im}(f^{n+1})=Q$
知 $f$ 在 $Q$ 上是满射。于是 $N\cap Q=0$，从而由长度等式知
$M=N\oplus Q$。最后由 $\ker(f)\subseteq N$ 知 $f$
在 $Q$ 上是同构。
:::

### 交换代数性质

本小节中的环都是交换环。

::: proposition
对 [[Noether 环]] $A$ 及其[[有限生成模]] $M$，
以下几条等价：

1. $M$ 为有限长。

2. $M$ 的支集 $\operatorname{Supp}(M)$ 只有[[极大理想]]。

3. $M$ 的[[结合素理想]]
   $\operatorname{Ass}(M)$ 只有极大理想。

特别地，如 $A$ 是局部环，极大理想为 $\mathfrak{m}$，则
$$
\ell(M)<\infty\iff\operatorname{Supp}(M)=\{\mathfrak{m}\}
\iff\operatorname{Ass}(M)=\{\mathfrak{m}\}.
$$
:::

::: proof
首先由[[结合素理想]]包含支集中所有极小元，知 2 与 3 等价。

- **1 推 2** 由于对短正合列
  $$
  0\to N\to M\to Q\to0
  $$
  有 $\operatorname{Supp}(M)=\operatorname{Supp}(N)\cup\operatorname{Supp}(Q)$，
  将 $M$ 按合成列拆成单模，只需对单模证。而[[单模]]都形如
  $A/\mathfrak{m}$，$\mathfrak{m}$ 为极大理想，
  其支集为 $\{\mathfrak{m}\}$，当然只有极大理想。

- **2 推 1** 由[[结合素理想]]的理论，$M$ 有滤链
  $$
  0=M_0\subset M_1\subset\cdots\subset M_n=M
  $$
  满足 $M_i/M_{i-1}=A/\mathfrak{p}_i$，$\mathfrak{p}_i$
  为素理想。由 $M$ 的支集中只有极大理想，知这些 $\mathfrak{p}_i$
  都是极大理想。于是 $M_i/M_{i-1}$ 都是单模，以上滤链为合成列，
  故 $M$ 有限长。

:::

于是 Noether 环上的非零模有限长当且仅当其 [[Krull 维数]]是 $0$。

## 例子

- [[除环]]上的模是[[自由模]]，长度就是其[[秩]]。

- 取定域 $k$。其上一元多项式环 $k[X]$ 的模
  $k[X]/X^n$ 的长度是 $n$。

- 一般地，对[[主理想整环]] $A$ 及其元素 $a$，
  $A/a$ 的长度是 $a$ 的素因子个数（计重数）。

```terms
长度:
  en: length
  de: Länge :f
  fr: longueur :f
  grc: μῆκος :n
  la: longitudo :f
```
