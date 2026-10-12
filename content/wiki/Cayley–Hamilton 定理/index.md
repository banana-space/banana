---
title: Cayley–Hamilton 定理
aliases: [Cayley-Hamilton 定理]
categories: [线性代数]
notices:
  - name: 问题
    items:
      - “推论与应用”一节需要扩充。
navboxes: [线性代数]
---

**[[Arthur Cayley|Cayley]]–[[William Rowan Hamilton|Hamilton]] 定理**
是[[线性代数]]中的一个结论，
它说明任何[[方阵]]都满足它自身的[[特征方程 (线性代数)|特征方程]]。
也就是说，其[[特征多项式]]作用于自身，等于[[零矩阵]]。

## 陈述与证明

::: theorem [Cayley–Hamilton]
设 $A$ 为[[交换环]] $R$ 上的 $n \times n$ [[方阵]]，
其中 $n$ 为正整数。设
\[
p (x) = \det (x I - A)
\]
为 $A$ 的[[特征多项式]]。则
\[
p (A) = 0,
\]
其中右边是 $n \times n$ 的[[零矩阵]]。
:::

::: proof
记 $B (x) = x I - A$，并视之为 $R[x]$ 上的矩阵。
记 $\widetilde{B} (x)$ 为 $B (x)$ 的[[伴随矩阵]]，从而
\[
B (x) \, \widetilde{B} (x) =
\widetilde{B} (x) \, B (x) =
p (x) \, I_n ,
\]
其中 $I_n$ 为 $n \times n$ [[单位矩阵]]。
对任何列向量 $u (x) = u_0 + x u_1 + \cdots + x^m u_m \in R[x]^n$，
其中每个 $u_i \in R^n$，我们记
\[
u (x) \, |_{x = A} =
u_0 + A u_1 + \cdots + A^m u_m.
\]
则对任何列向量 $v \in R^n$，有
\[
\begin{aligned}
  p (A) \, v
  & = p (x) \, v \, |_{x = A} \\
  & = \widetilde{B} (x) \, B (x) \, v \, |_{x = A} \\
  & = \widetilde{B} (x) \, (x v - A v) \, |_{x = A} \\
  & = 0.
\end{aligned}
\]
因此，$p (A)$ 必为零矩阵。
:::

## 推广

上述证明 Cayley–Hamilton 定理的方法可以用来证明一些看起来更一般的结论，例如下述命题。

::: proposition
设 $R$ 和 $M$ 如前所述（即 $R$ 为交换含幺环，$M$ 为有限秩自由含幺 $R$-模）。
设 $f_1, \dots, f_n, a_1, \dots, a_n$ 为 $M$ 的自同态，且满足：

1. $f_1 a_1 + \dots + f_n a_n = 0$

2. $a_1, \dots, a_n$ 两两交换。

设
\[
p = f_1 X_1 + \dots + f_n X_n
\in \mathrm{End}_{R[X_1, \dots, X_n]}(M[X_1, \dots, X_n])
\]
且
\[
P = \det p \in R[X_1, \dots, X_n].
\]
则
\[
P(a_1, \dots, a_n) = 0.
\]
:::

::: example
设 $a$ 与 $b$ 为 $M$ 的两个可交换的自同态，且设
\[
p = bX - aY \in \mathrm{End}_{R[X,Y]}(M[X,Y]).
\]
则将 $P = \det p$ 中的 $X$ 替换为 $a$，$Y$ 替换为 $b$ 会得到 0：
\[
P(a,b) = 0.
\]
:::

## 推论与应用

```terms
Cayley–Hamilton 定理:
  en: Cayley–Hamilton theorem
  de: Satz von Cayley–Hamilton :m
  fr: théorème de Cayley–Hamilton :m
```
