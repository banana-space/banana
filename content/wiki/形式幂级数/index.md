---
title: 形式幂级数
aliases: [形式级数, 形式幂级数环]
categories: [初等代数]
---

**形式幂级数**是[[多项式]]的一种推广。
大致来说，形式幂级数就是可以有无穷多项的多项式。
例如，无限求和
\[
1 + x + x^2 + \cdots
\]
是关于变量 $x$ 的形式幂级数，但不是关于 $x$ 的多项式。

形式幂级数的概念与[[幂级数]]类似。
但在考虑形式幂级数时，我们不关心级数的收敛性，
而仅关注其代数性质。

给定[[环]] $A$ 与变元 $x_1, \cdots, x_n$，
$A$ 上的全体形式幂级数可以构成环 $A[[x_1,\cdots, x_n]]$，
称为**形式幂级数环**。
在[[代数–几何对应]]下，
形式幂级数环对应的几何对象是[[形式圆盘]]。

## 定义

::: definition [形式幂级数]
设 $A$ 是[[环]]。

- $A$ 上关于变元 $x$ 的**形式幂级数**是形如
  \[
  f (x) = a_0 + a_1 x + a_2 x^2 + \cdots
  \]
  的无限求和表达式，其中 $a_i \in A$ $(i \in \mathbb{N})$。

  式中，每个 $a_i x^i$ 称为幂级数 $f$ 的**项**，
  其中 $a_i$ 称为该项的**系数**。
  所有这样的形式幂级数构成的集合记为 $A [[x]]$。

- $A$ 上关于 $n$ 个变元
  $x_1, \dotsc, x_n$ 的**形式幂级数**是形如
  \[
  f (x_1, \dotsc, x_n) =
  \sum_{ i_1, \, \dotsc \, , \, i_n \geq 0 }
  a_{ i_1, \, \dotsc \, , \, i_n } \, x_1^{i_1} \dotsm x_n^{i_n}
  \]
  的表达式，其中 $i_1, \dotsc, i_n$ 取遍所有非负整数，
  $a_{ i_1, \, \dotsc \, , \, i_n } \in A$。

  式中，每个
  $a_{ i_1, \, \dotsc \, , \, i_n } \, x_1^{i_1} \dotsm x_n^{i_n}$
  称为幂级数 $f$ 的**项**，
  其中 $a_{ i_1, \, \dotsc \, , \, i_n }$ 称为该项的**系数**。
  所有这样的形式幂级数构成的集合记为 $A [[x_1, \dotsc, x_n]]$。
:::

形式幂级数可以相加和相乘，从而
$A [[x]]$ 和 $A [[x_1, \dotsc, x_n]]$ 有[[环]]结构，
称为 $A$ 上的**形式幂级数环**。
当 $A$ 是[[交换环]]时，
形式幂级数环实际上是 $A$-[[交换代数 (代数结构)|交换代数]]。

::: definition [加法与乘法]
- 形式幂级数的加法是
  \[
  \sum_{\underline{i}\geq 0}a_{\underline{i}}
  \underline{x}^{\underline{i}}
  + \sum_{\underline{i}\geq 0}b_{\underline{i}}
  \underline{x}^{\underline{i}}
  = \sum_{\underline{i}\geq 0}
  (a_{\underline{i}}+b_{\underline{i}})
  \underline{x}^{\underline{i}}
  \]
- 形式幂级数的乘法是
  \[
  \left( \sum_{\underline{i}\geq 0}a_{\underline{i}}
  \underline{x}^{\underline{i}} \right)
  \left( \sum_{\underline{i}\geq 0}b_{\underline{i}}
  \underline{x}^{\underline{i}} \right)
  = \sum_{\underline{i}\geq 0}
  \left( \sum_{0\leq\underline{j}\leq \underline{i}}
  a_{\underline{j}}b_{\underline{i}-\underline{j}} \right)
  \underline{x}^{\underline{i}}
  \]

其中，$\underline{i}$ 是 $i_1,\cdots,i_n$ 的简写，
$\underline{x}^{\underline{i}}:=x_1^{i_1}\cdots x_n^{i_n}$。
:::

例如，单变量形式幂级数的乘法定义如下：
对环 $A$ 上的形式幂级数
$f(x) = \sum_{n} a_n x^n$ 及 $g(x) = \sum_{n} b_n x^n$，
定义
\[
f(x) \, g(x) =
\sum_{n = 0}^{\infty} \left(\sum_{k=0}^{n} a_k \, b_{n-k}\right) x^n.
\]

## 性质

### 基本性质

- 对[[环]] $A$，
  $A[[x]]$ 是多项式环 $A[x]$ 在素理想 $(x)$ 处的[[局部化]] $A[x]_{(x)}$
  的[[完备化 (交换代数)|完备化]]。

- 对环 $A$，有环的同构
  \[
  A [[x_1, x_2, \dotsc, x_n]] \simeq
  A [[x_1]] [[x_2]] \cdots [[x_n]].
  \]

### 代数性质

- 如果 $A$ 是[[整环]]，则 $A [[x]]$ 也是。

::: proposition
设有环 $A$ 上的形式幂级数
$f(x) = \sum_{n} a_n x^n$。
则 $f (x)$ 在 $A [[x]]$ 中可逆当且仅当 $a_0$ 在 $A$ 中可逆。
:::

::: proof
若 $f(x)g(x)=1$，比较常数项得到 $a_0b_0=1$，
其中 $b_0$ 是 $g(x)$ 的常数项。
因此 $a_0$可逆。

反过来，假设 $a_0$可逆。
我们逐项构造
\[
g(x)=b_0+b_1x+b_2x^2+\cdots,
\]
使得 $f(x)g(x)=1$。

比较常数项，必须取
\[
b_0=a_0^{-1}.
\]
对每个 $n\geq1$，乘积的 $x^n$ 系数应当为零，即
\[
a_0b_n+a_1b_{n-1}+\cdots+a_nb_0=0.
\]
因此，在 $b_0,\dotsc,b_{n-1}$ 已经确定后，
可以唯一地定义
\[
b_n=-a_0^{-1}\sum_{i=1}^n a_i b_{n-i}.
\]
这个递推过程确定了所有系数，
并且每一步只涉及有限次运算。
所得形式幂级数 $g(x)$ 满足 $f(x)g(x)=1$，
所以 $f(x)$ 可逆。
:::

- 设 $A$ 是[[交换环]]。则形式幂级数环 $A [[x]]$ 的[[幂零根]]满足
  \[
  \operatorname{Nil}(A[[x]]) \subseteq \operatorname{Nil}(A)[[x]].
  \]

```terms
形式幂级数:
  en: formal power series
  de: formale Potenzreihe
  fr: série formelle
```
