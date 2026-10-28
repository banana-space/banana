---
title: 最大公因子
aliases: [最大公因数]
categories: [初等数论, 交换代数]
navboxes: [交换代数]
---

<problems>
- “性质”一节中 $(ma_1,ma_2,\cdots,ma_n)=m(a_1,a_2,\cdots a_n)$ 及其后一条的等式在 $m<0$ 时似乎应取 $\lvert m\rvert$。
- “推广”一节需要扩充。
</problems>

**最大公因子**，又叫**最大公约数**，
是几个[[整数]]最大的公共[[因子]]，或更一般地，
[[交换环]]中几个元素在[[整除]]偏序下最大的公共[[因子]]。

最大公因数是[[初等数论]]的主要研究对象，具有丰富的性质。

## 定义

::: definition
整数$a_1,a_2,\cdots,a_n$的最大公因数$\gcd(a_1,a_2,\cdots,a_n)$是
指满足
\[
d\mid a_i\ (i=1,2,\cdots,n)
\]
的最大整数$d$。

最大公因数也常记为$(a_1,a_2,\cdots,a_n)$。
:::

容易知道任何整数的最大公因数总是存在的。

## 性质

- 最大公因数与整数的次序无关。

- 若$a\mid b$，则$(a,b)=a$。

- $((a_1,\cdots,a_k),(a_{k+1},\cdots,a_n))=(a_1,\cdots,a_n)$。

- 几个整数的公因数总是整除最大公因数，
  即若存在一个数$d$使
  \[
  d\mid a_i\ (a_i\in\mathbb{Z},i=1,2,\cdots n),
  \]
  则$d\mid (a_1,a_2,\cdots,a_n)$。

- 对任意$m\in\mathbb{Z}$，
  \[
  (ma_1,ma_2,\cdots,ma_n)=m(a_1,a_2,\cdots a_n).
  \]

- 对任意$m\in\mathbb{Z}$，若
  \[
  m\mid a_i\ (a_i\in\mathbb{Z},i=1,2,\cdots,n),
  \]
  则
  \[
  \left(\frac{a_1}{m},\frac{a_2}{m},\cdots,
  \frac{a_n}{m}\right)=\frac{(a_1,a_2,\cdots a_n)}{m}.
  \]

- 若$a,c$[[互素]]，
  即$(a,c)=1$，
  则对任意整数$b$，$(ab,c)=(b,c)$。

- 若$a,b$互素，
  则对任意整数$d$，$(ab,d)=(a,d)(b,d)$。

- 对任意$x,y\in\mathbb{Z}$，总有$(a,b)\mid (ax+by)$。

  一般地，$(a_1,a_2,\cdots,a_n)$是集合
  \[
  \{
  a_1x_1+a_2x_2+\cdots+a_nx_n\mid
  x_i\in\mathbb{Z},
  i=1,2,\cdots,n
  \}
  \]
  中的最小正整数。这个性质又称[[Bézout 引理]]。

- $(a,b)[a,b]=\mid ab\mid $，其中$[a,b]$是两整数的[[最小公倍数]]。

- 对任意$a,b,q\in\mathbb{Z}$，均有$(a,qa+b)=(a,b)$。

  这是[[辗转相除法]]的原理。

此外最大公因数可用整数的[[算术基本定理|分解式]]写出。

::: theorem
如果整数$a_i(i=1,2,\cdots,n)$被分解成
\[
a_i=p_1^{s_{i1}}p_2^{s_{i2}}p_3^{s_{i3}}\cdots,
s_{ij}\geq 0,p_j<p_{j+1}, j=1,2,\cdots,
\]
其中$p_1,p_2,\cdots$都是[[素数]]，
则
\[
(a_1,a_2,\cdots,a_n)=p_1^{b_{1}}p_2^{b_{2}}p_3^{b_{3}}\cdots,
\]
其中
\[
b_j=\min\{s_{1j},s_{2j},\cdots,s_{nj}\},j=1,2,\cdots.
\]
:::

::: proof
由[[算术基本定理]]，我们可以设
\[
(a_1,a_2,\cdots,a_n)=p_1^{b_{1}}p_2^{b_{2}}p_3^{b_{3}}\cdots,
b_j\geq 0,p_j<p_{j+1}, j=1,2,\cdots.
\]

由$(a_1,a_2,\cdots,a_n)\mid a_i, i=1,2,\cdots,n$知
\[
b_j\leq s_{ij}.
\]

又最大公因数是最大的公因数，所以
\[
b_j=\min\{s_{1j},s_{2j},\cdots,s_{nj}\},j=1,2,\cdots.
\]
:::

上面的绝大多数性质都可以用此定理证明。

## 计算

通常，我们使用辗转相除法来计算两个整数的最大公因数。

## 推广

（推广到[[主理想整环]]、[[唯一分解整环]]、[[Prüfer 环]]上。）

```terms
最大公因子:
  en: greatest common divisor
  de: größte gemeinsame Teiler
  fr: plus grand commun diviseur
  la: maximus communis divisor
```
