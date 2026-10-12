---
title: 分式
categories: [初等代数]
notices:
  - name: 问题
    items:
      - “定义”一节缺少分式的四则运算的定义。
      - “有理函数”一节需要扩充。
---

**分式**为两个[[多项式]]（形式上）的商。
在它视为函数时，也称**有理函数**。
例如，
\[
\frac{2 x^3 - x + 7}{x^5 - 2 y^7 + x^2 z^8 - 3 x y z + 1}
\]
是关于三个变元 $x$、$y$、$z$ 的分式。

分式的概念可从[[多项式环]]推广到一般的整环上，这一构造称为该环的[[分式域]]，
即环中元素的商构成的[[域]]。
特别地，关于一组变元的所有分式构成的域是相应多项式环的分式域。

## 定义

### 分式

::: definition [分式]
设 $A$ 是[[整环]]。

- $A$ 上关于变元 $x$ 的**分式**是形如两个多项式之商
  \[
  f (x) = \frac{P(x)}{Q(x)} =
  \frac{a_n x^n + a_{n-1} x^{n-1} + \cdots
  + a_1 x + a_0}{b_m x^m + b_{m-1} x^{m-1} + \cdots
  + b_1 x + b_0}
  \]
  的表达式，其中 $a_i, b_j \in A$
  $(i = 0, 1, \dotsc, n, j = 0, 1, \cdots m)$，
  且 $Q(x) \neq 0$（即 $b_j$ 不全为零）。

  两个分式 $\frac{P_1(x)}{Q_1(x)}$，
  $\frac{P_2(x)}{Q_2(x)}$ 视为相等，
  如果 $P_1(x) Q_2(x) = P_2(x)Q_1(x)$。

- 类似地，
  $A$ 上关于 $n$ 个变元
  $x_1, \dotsc, x_n$ 的**分式**是相应多项式之商，
  即形如
  \[
  f (x_1, \dotsc, x_n) = \frac{P(x)}{Q(x)}
  = \frac{\sum_{ i_1, \, \dotsc \, , \, i_n \geq 0 }
  a_{ i_1, \, \dotsc \, , \, i_n } \, x_1^{i_1} \dotsm x_n^{i_n}}
  {\sum_{ i_1, \, \dotsc \, , \, i_n \geq 0 }
  b_{ i_1, \, \dotsc \, , \, i_n } \, x_1^{i_1} \dotsm x_n^{i_n}}
  \]
  的表达式，其中 $i_1, \dotsc, i_n$ 取遍所有非负整数，
  $a_{ i_1, \, \dotsc \, , \, i_n }, b_{i_1, \cdots, i_n} \in A$，
  使得这些 $A$ 的元素中，只有有限个非零，
  且 $Q(x) \neq 0$（即 $b_{i_1, \cdots, i_n}$ 不全为零）。

  两个分式 $\frac{P_1(x)}{Q_1(x)}$，
  $\frac{P_2(x)}{Q_2(x)}$ 视为相等，
  如果 $P_1(x) Q_2(x) = P_2(x)Q_1(x)$。

:::

此时，多项式 $P(x)$ 可以视为 $\frac{P(x)}{1}$，从而成为分式。

::: remark
如果不要求上述 $A$ 是整环，则“相等”这一关系不传递。
而如果像[[局部化]]中那样只要求它们乘一个式子后相等，
则所有分式都会等于 $0$。
:::

固定系数环 $A$ 和变元 $x_1, \cdots, x_n$ 后，
多项式之间可以做四则运算，这样全体分式构成一个[[域]]，
称为 **[[有理函数域]]**，记为 $A(x_1, \cdots, x_n)$。
该域也是相应[[多项式环]]的[[分式域]]：
\[
A (x_1, \dotsc, x_n) \simeq
\mathrm{Frac} (A [x_1, \dotsc, x_n]).
\]

由 @thm:逐个引入变元，有理函数域中的变元可以逐个引入：
\[
A (x_1, x_2, \dotsc, x_n) \simeq
A (x_1) (x_2) \cdots (x_n).
\]

### 有理函数

## 性质

### 逐个引入变元

::: lemma [逐个引入变元] {@thm:逐个引入变元}
设 $A$ 是[[整环]]。则有域同构
\[
A (x_1, x_2, \dotsc, x_n) \simeq
A (x_1) (x_2) \cdots (x_n) \simeq
A [x_1, x_2, \dotsc, x_{n-1}](x_n).
\]
这说明分式的变元可以逐个引入。
:::

::: proof
由定义不难得出，对任意整环$A$，有域同构
\[
\mathrm{Frac}(A)(x) \simeq A(x).
\]
事实上，从右到左的域嵌入是显然的，
其逆映射由将分子与分母同时乘以一个 $A$ 中元素给出，
这不依赖选取的元素。
因此，
\[
\begin{aligned}
  A (x_1, x_2, \dotsc , x_n)
  & \simeq \mathrm{Frac}(A[x_1, x_2, \dotsc , x_n])\\
  & \simeq \mathrm{Frac}(A[x_1, x_2, \dotsc , x_{n-1}][x_n])\\
  & \simeq A[x_1, x_2, \dotsc , x_{n-1}](x_n)\\
  & \simeq A(x_1, x_2, \dotsc , x_{n-1})(x_n).
\end{aligned}
\]
不断应用这个等式，即证。
:::

```terms
分式:
  en: fraction
  de: Bruchterm :m
  fr: fraction :f
  la: fractio :f
```
