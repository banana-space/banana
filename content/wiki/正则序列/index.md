---
title: 正则序列
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**正则序列**是个[[交换代数]]概念，
大体描述的是环中的一列元素相对其一个模的同调表现比较简单。
它在涉及[[同调代数]]的交换代数中十分重要，被用来定义、研究[[深度]]、
[[Cohen–Macaulay 环]]等概念。

## 定义

::: definition
$R$ 是环，$M$ 是 $R$-模。对 $n\in\mathbb{N}$，称 $R$ 中一列元素
$r_1,\ldots,r_n$ 是 **$M$-正则序列** 或
**$M$ 的正则序列**，意思是对每个 $i=1,\ldots,n$，
都有 $r_i$ 是 $M/(r_1,\ldots,r_{i-1})M$ 的[[非零因子]]。

不加定语的**正则序列**指 $R$ 作为自身的模的正则序列。
:::

::: remark
依定义：

- 空序列是正则序列。

- 任何序列都是零模的正则序列。

- 满足 $r_1=1$ 的序列是每个模的正则序列。

这与一些地方的约定不同，因那些地方要求 $M/(r_1,\ldots,r_n)M\ne0$。
由于大部分情况下讨论的都是 $R$ 为[[局部环]]，$M$ 为[[有限生成模]]，
$r_1,\ldots,r_n$ 在 $R$ 的[[极大理想]]中的情形，所以要不要求
$M/(r_1,\ldots,r_n)M\ne0$ 其实区别不大，因这时
[[Nakayama 引理]]总会保证此事。这里的约定好处在于其显然被[[局部化]]保持。
:::

::: remark
元素顺序是重要的。一般来说，把一个正则序列打乱顺序，
所得序列未必还正则。但在 $R$ 为 Noether 局部环，$M$ 为其有限生成模，
$r_1,\ldots,r_n$ 在 $R$ 的极大理想中的情形，
打乱顺序并不影响正则性，见 @打乱。
:::

## 例子

- 任取环 $R$。多项式环 $R[x_1,\ldots,x_n]$ 中的序列
  $x_1,\ldots,x_n$ 是正则序列。

- 任取域 $k$。环 $A=k[x,y]/(x^2,xy)$ 中的序列 $y$
  不是正则序列，但它是模 $A/x=k[y]$ 的正则序列。

- 对任意非零环和其上非零模，$1,0$ 总是正则序列，
  而 $0,1$ 总不是，故正则序列打乱顺序未必还正则。

- 如嫌上例过于平凡，可将其包装如下：任取域 $k$。在环
  $k[x,y,z]/(xz)$ 中，$x+1,xy$ 是正则序列但
  $xy,x+1$ 不是。本例满足商模 $k[x,y,z]/(xz,x+1,xy)=k[x,y,z]/(x+1,y,z)=k\ne0$，
  但其实它在 $(x,y,z)=(0,0,0)$ 处是上例。

## 性质

首先是局部性。

::: proposition
$R$ 是环，$M$ 是 $R$-模，$r_1,\ldots,r_n\in R$。以下几条等价：

- $r_1,\ldots,r_n$ 是 $M$-正则序列。

- 对 $R$ 的每个素理想 $\mathfrak{p}$，
  $r_1,\ldots,r_n$ 是 $M_\mathfrak{p}$-正则序列。

- 对 $R$ 的每个极大理想 $\mathfrak{m}$，
  $r_1,\ldots,r_n$ 是 $M_\mathfrak{m}$-正则序列。

:::

::: proof
这是因为局部化是正合的，单射是局部的。
:::

::: proposition
正则序列的 [[Koszul 复形]]零调。
:::

::: proposition
$R$ 是环，$I$ 是其理想，$M$ 是其模。设 $r_1,\ldots,r_n\in I$
是 $M$-正则序列。则对 $i<n$ 及任意 $R/I$-模 $N$，有
$\operatorname{Ext}^i_R(N,M)=0$。
:::

::: proof
用归纳法。$n=0$ 时平凡。$n>0$ 时写短正合列
$$
0\to M\to M\to M/r_1M\to0
$$
的 $\operatorname{Ext}^i_R(N,-)$ 长正合列，有
$$
\cdots\to\operatorname{Ext}^{i-1}_R(N,M/r_1M)\to\operatorname{Ext}^i_R(N,M)
\to\operatorname{Ext}^i_R(N,M)\to\cdots
$$
对 $i<n$，有 $i-1<n-1$，故由归纳假设
$\operatorname{Ext}^{i-1}_R(N,M/r_1M)=0$，从而
$r_1\colon \operatorname{Ext}^i_R(N,M)
  \to\operatorname{Ext}^i_R(N,M)$ 是单射。而 $N$
是 $R/I$-模，$r_1\in I$，故此映射是 $0$。
所以只有 $\operatorname{Ext}^i_R(N,M)=0$。
:::

::: proposition {@打乱}
设 $(R,\mathfrak{m})$ 是 Noether 局部环，$M$ 是[[有限生成模|有限生成]]
$R$-模，$r_1,\ldots,r_n\in\mathfrak{m}$
是 $M$-正则序列。则这些元素的任意置换都还是 $M$-正则序列。
:::

::: proof
每个置换都是若干个相邻两元素对换的复合，故只需证 $n=2$ 情形。
记 $K=\ker(r_2\colon M\to M)$，则由 Noether 环上[[有限生成模]]的性质知
$K$ 为[[有限生成模|有限生成]]。对图表
\[
\begin{tikzcd}
  0\ar[r]&M\ar[r,"r_1"]\ar[d,"r_2"]&M\ar[r]\ar[d,"r_2"]&M/r_1M\ar[r]\ar[d,"r_2"]&0\\
  0\ar[r]&M\ar[r,"r_1"]&M\ar[r]&M/r_1M\ar[r]&0
\end{tikzcd}
\]
用[[蛇引理]]，由条件 $r_2\colon M/r_1M\to M/r_1M$
为单射知 $r_1\colon K\to K$ 为满射。于是由
[[Nakayama 引理]]知 $K=0$。注意蛇引理还说明
$r_1\colon M/r_2M\to M/r_2M$ 为单射，故 $r_2,r_1$ 也是
$M$-正则序列，命题得证。
:::

```terms
正则序列:
  en: regular sequence
  de: reguläre Folge
  fr: suite régulière
  grc: κανονικὴ ἀκολουθία
  la: sequentia regularis
```
