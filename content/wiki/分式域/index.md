---
title: 分式域
categories: [交换代数]
navboxes: [交换代数]
---

在[[交换代数]]中，
[[整环]] $A$ 的**分式域** $\mathrm{Frac} (A)$ 是由形如
\[
\frac{a}{b} \quad (a \in A, \ b \in A \setminus \{ 0 \})
\]
的分式组成的[[域]]。
这些分式可以自然地进行四则运算。

例如，[[整数]]环 $\mathbb{Z}$ 的分式域是[[有理数]]域 $\mathbb{Q}$，
这也是有理数通常的定义。
又例如，域 $k$ 上一元[[多项式]]环 $k [x]$ 的分式域是一元[[分式|有理函数]]域 $k (x)$。

从[[代数几何]]的观点看，
整环 $A$ 的[[素谱]] $\operatorname{Spec} A$ 是[[整概形]]，
从而是[[不可约概形]]，故具有唯一的[[普遍点]]，
该普遍点即为分式域 $\mathrm{Frac} (A)$ 的素谱。

## 定义

::: definition
设 $A$ 是[[整环]]。定义[[商集]]
\[
\mathrm{Frac} (A) = \Bigl\{ \frac{a}{b} \Bigm| a \in A, \ b \in A \setminus \{ 0 \} \Bigr\} \Big/ {\sim},
\]
其中 $a/b \sim c/d$ 当且仅当 $ad = bc$。
在$\mathrm{Frac}(A)$上定义加法与乘法
\[
\frac a b+\frac c d:=\frac{ad+bc}{bd},\qquad
\frac a b\cdot\frac c d:=\frac{ac}{bd}.
\]
则$\mathrm{Frac}(A)$在这些运算下成为域，称为 $A$ 的**分式域**。
:::

我们有自然映射
\[
\iota \colon A\to \mathrm{Frac}(A),\qquad a\mapsto \frac a 1,
\]
它是[[单射]]、[[环同态]]。我们以此将 $A$ 视为 $\mathrm{Frac}(A)$ 的子环。

分式域是[[局部化]]的特例：它是对[[乘性子集]] $S:=A\setminus\{0\}$ 的局部化，即
\[
\mathrm{Frac}(A)\cong S^{-1}A.
\]

## 例子

- $\mathrm{Frac}(\mathbb Z)=\mathbb Q$。
  这也是通常定义[[有理数]]的方式。

- 设$k$是域，则一元[[多项式]]环 $k [x]$ 的分式域是一元[[分式|有理函数]]域 $k (x)$。
  同理，$n$ 元多项式环 $k[x_1,\dots,x_n]$ 的分式域是 $n$ 元有理函数域 $k(x_1,\dots,x_n)$。

## 推广

### 对非整环

对不一定是[[整环]]的[[交换环]] $A$ 而言，
$A \setminus \{0\}$ 不再是[[乘性子集]]，因此不能局部化。
换言之，将两个分式相乘可能导致分母为 $0$。

不过，仍可考虑自然的局部化 $S^{-1} A$，
其中 $S$ 为 $A$ 中[[非零因子]]的集合。
该局部化有时称为 $A$ 的**全分式环**，
它在整环情形给出分式域。

```terms
分式域:
  en: field of fractions
全分式环:
  en: total ring of fractions
```
