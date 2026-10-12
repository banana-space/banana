---
title: 赋值环
categories: [交换代数]
notices:
  - name: 问题
    items:
      - “性质”一节的推论似乎需要假设 $\ker f\subseteq\mathfrak{p}$（例如 $f$ 是单射）；否则 $f^{-1}(\mathfrak{m}_R)$ 总包含 $\ker f$，不能等于不包含 $\ker f$ 的素理想 $\mathfrak{p}$。证明中的“局部环 $f(A_\mathfrak{p})$”也需要同样的假设才有意义。
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

[[交换代数]]中，**赋值环**指任两个元素都有整除关系的[[整环]]。
其名称来源于[[赋值]]的概念。

## 定义

::: definition [赋值环]
$R$ 是整环，$K$ 是其[[分式域]]。以下几条等价：

1. {@极大} 对任意 $x\in K^\times$，$x$ 和 $x^{-1}$ 中至少有一个在 $R$ 中。

2. {@理想全序} $R$ 的任两个理想都有包含关系。

3. {@元素全序} $R$ 的任两个元素都有整除关系，换言之其任两个主理想都有包含关系。

4. {@赋值} 存在全序交换群 $\Gamma$ 以及[[赋值]] $v\colon K\to\Gamma\cup\{\infty\}$，
   使得 $R$ 是此赋值的赋值环，即 $R=\{x\in K\mid v(x)\ge0\}$。

如 $R$ 满足这些等价条件，则称其为赋值环，也称其为 $K$ 的一个赋值环。
[条件 4](@赋值)中的 $\Gamma$ 称为其值群。
:::

这里的等价都是容易的，比如 @极大 推 @理想全序 是因为如有理想
$I,J$ 互不包含，则取 $i\in I\setminus J$，$j\in J\setminus I$，
就有 $i/j$ 和 $j/i$ 都不在 $R$ 中。

由 @理想全序 可以看出赋值环都是[[局部环]]，然后由 @极大
可以看出 $R$ 的极大理想恰由 $0$ 与 $K\setminus R$ 中元素的逆组成。
由 @元素全序 可以看出赋值环的有限生成理想都是主理想。

## 例子

- [[域]]都是赋值环。

- 域上一元[[形式幂级数]]环 $k[[X]]$ 是赋值环。
  其分式域为 Laurent 级数域 $k((X))$，值群为 $\mathbb{Z}$，
  赋值 $v(f)$ 为 $f$ 的最低次项次数。

- [[p 进数|$p$ 进整数环]] $\mathbb{Z}_p$ 是赋值环。
  其分式域为 $\mathbb{Q}_p$，赋值 $v_p(n)$ 为 $n$ 中含
  $p$ 的次数。

- 一般地，[[Krull 维数|一维]][[正则环|正则]]局部环都是赋值环。
  见[[离散赋值环]]。

- 设 $K$ 是[[序域]]。考虑
  $R=\{x\in K\mid\exists n\in\mathbb{N},\,-n<x<n\}$，
  则 $R$ 是赋值环。事实上 $R$ 的子集 $\{x\in K\mid -1\le x\le1\}$
  已经满足 $K$ 中任一元素与其逆至少一个属之；只是它并不是环，
  $R$ 才是环。

- 二元形式幂级数环 $k[[X,Y]]$ 不是赋值环，因为
  $X/Y$ 与 $Y/X$ 都不在其中。

## 性质

赋值环的条件等价于其在分式域中的一种极大性：

::: proposition
固定域 $K$。考虑其所有局部子环之集，赋予偏序
$(R,\mathfrak{m}_R)\le(S,\mathfrak{m}_S)$ 当且仅当
$R\subseteq S$ 且 $\mathfrak{m}_R\subseteq\mathfrak{m}_S$，
即要求含入映射是局部同态。那么 $K$ 的赋值环恰是该偏序集的极大元。
:::

::: proof
首先设 $R$ 是 $K$ 的一个赋值环，证明它极大。反证法，
如 $R<S$，取 $x\in S\setminus R$。由于 $x\notin R$，
有 $x^{-1}\in\mathfrak{m}_R$，而 $\mathfrak{m}_R\subseteq\mathfrak{m}_S$，
于是 $x^{-1}\in\mathfrak{m}_S$，极大理想里出现可逆元，矛盾。
故 $R$ 极大。

其次对极大元 $(R,\mathfrak{m})$ 证明它是赋值环。反证法，
设有 $x\in K^\times$，$x,x^{-1}$ 都不属于 $R$。
由极大性，子环 $R[x]\subseteq K$
的每个素理想都不能包含 $\mathfrak{m}$，否则对其局部化，
将出现大于 $R$ 的子环。换言之，$\mathfrak{m}R[x]=R[x]$。
同样地，$\mathfrak{m}R[x^{-1}]=R[x^{-1}]$。
于是写出等式
$$
1=a_0+a_1x+\cdots+a_nx^n,\,a_0,\ldots,a_n\in\mathfrak{m};
$$
$$
1=b_0+b_1x^{-1}+\cdots+b_mx^{-m},\,b_0,\ldots,b_m\in\mathfrak{m};
$$
不妨设这是此种等式中 $n+m$ 最小者，并设 $n\ge m$。
将后一个等式乘以 $x^n$ 得
$$
(1-b_0)x^n=b_1x^{n-1}+\cdots+b_mx^{n-m};
$$
由于 $b_0\in\mathfrak{m}$，$1-b_0\in R^\times$，可两边除以 $1-b_0$ 得
$$
x^n=c_1x^{n-1}+\cdots+c_mx^{n-m};
$$
把此式代入 $1=a_0+a_1x+\cdots+a_nx^n$ 中便可把 $n$ 变小，
矛盾！故 $R$ 是赋值环。
:::

::: corollary
设 $A$ 是环，$\mathfrak{p}$ 是其一个素理想，
$K$ 是域，$f\colon A\to K$ 是环同态。则 $K$ 有包含
$f(A)$ 的赋值环 $R$ 满足 $f^{-1}(\mathfrak{m}_R)=\mathfrak{p}$。
特别地，$(A,\mathfrak{p})$ 是局部环时，这相当于说任一环同态
$f\colon A\to K$ 都穿过一个到赋值环的局部同态。
:::

::: proof
考虑命题所述偏序集中大于等于局部环 $f(A_\mathfrak{p})$ 的极大元。
由 [[Zorn 引理]]不难发现其存在。此即所求。
:::

以上命题与推论在[[赋值判别法]]的证明中用到。

```terms
赋值环:
  en: valuation ring
  fr: anneau de valuation :m
  de: Bewertungsring :m
```
