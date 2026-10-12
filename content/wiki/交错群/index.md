---
title: 交错群
aliases: [偶置换群]
categories: [有限群论]
notices:
  - name: 问题
    items:
      - “生成元”一节中的命题与“单性”一节中的定理缺少证明。
      - “小群结构”“自同构”“群同调”“表示论”各节需要扩充。
      - “自同构”一节中“$n$ 很大时 $\mathfrak{A}_n$ 的中心化子是 $\mathfrak{S}_n$”似乎有误：$n\ge 4$ 时 $\mathfrak{A}_n$ 在 $\mathfrak{S}_n$ 中的中心化子是平凡的。
navboxes: [群论]
---

$n$ 元**交错群**（或**偶置换群**）$\mathfrak{A}_n$
是所有 $n$ 元[[偶置换]]构成的[[群]]，
其中 $n$ 是[[自然数]]。

交错群 $\mathfrak{A}_n$ 是[[置换群]] $\mathfrak{S}_n$ 的[[正规子群]]，并且有
\[
[\mathfrak{S}_n : \mathfrak{A}_n] =
\begin{cases}
  1, & n = 0, 1, \\
  2, & n \geq 2.
\end{cases}
\]
换言之，在至少$2$个元素的[[有限集]]上，偶置换和奇置换数量相等，各占总置换数量的一半。
因为$\mathfrak S_0,\mathfrak S_1$平凡，所以大多数时候我们仅在$n\ge 2$时研究交错群${\mathfrak A}_n$。

## 定义

::: definition [交错群]
[[有限集]] $X$ 上的**交错群** $\mathfrak{A}_X$ 是[[置换群]] $\mathfrak{S}_X$
中所有[[偶置换]]构成的[[子群]]。

特别地，当 $X = \{ 1, \dotsc, n \}$ 时，也将 $\mathfrak{A}_X$ 记为 $\mathfrak{A}_n$。
:::

## 性质

### 生成元

在[[置换群]] $\mathfrak{S}_n$ 中，对两两不同的 $i, j, k \in \{ 1, \dotsc, n \}$，有
\[
(i\ j\ k) = (i\ k)(i\ j)(i\ k)^{-1}(i\ j)^{-1}.
\]
从而 $(i \ j \ k) \in \mathfrak{A}_n$。
事实上，这样的轮换构成 $\mathfrak{A}_n$ 的一组[[生成 (群论)|生成元]]。

::: proposition [三轮换生成]
交错群 $\mathfrak{A}_n$ 由其中的三轮换$(i\ j\ k)$生成。
:::

### 小群结构

比较值得介绍的是$\mathfrak A_4,\mathfrak A_5$的结构。

### 单性

::: theorem
当 $n \geq 5$ 时，
$\mathfrak{A}_n$ 为非交换[[单群]]。
:::

交错群是[[有限单群分类]]中的一族。

### 自同构

交错群 $\mathfrak{A}_n$ 的[[自同构群]]在大多数时候都是$\mathfrak{S}_n$。
注意到$\mathfrak{A}_n\trianglelefteq\mathfrak{S}_n$是正规子群，
而且$n$很大时${\mathfrak A}_n$的[[中心化子]]是${\mathfrak S}_n$，
所以自同构作用就是$\mathfrak{S}_n$上的[[共轭作用]]。

实际上，
当$n>1,\ n\ne 2,3,6$时
$\operatorname{Aut}(\mathfrak{A}_n)=\mathfrak{S}_n, \operatorname{Out}(\mathfrak{A}_n)=\mathbb Z/2\mathbb Z$。

当$n=2$时，因为是[[平凡群]]，
故$\operatorname{Aut}(\mathfrak{A}_2)=\operatorname{Out}(\mathfrak{A}_2)$都平凡；

当$n=3$时，此时是[[循环群]]，
故$\operatorname{Aut}(\mathfrak{A}_3)=\operatorname{Out}(\mathfrak{A}_3)=\mathbb Z/2\mathbb Z$
是域乘法群$\mathbb F_3^\times$。

比较有趣的情况是$n=6$，此时$\operatorname{Aut}(\mathfrak{A}_6)=S_6\rtimes(\mathbb Z/2\mathbb Z)$，
而[[外自同构群]] $\operatorname{Out}(\mathfrak{A}_6)=(\mathbb Z/2\mathbb Z)^2$。

### 群同调

交错群 $\mathfrak{A}_n$ 的[[群同调]]在 $n$ 充分大时会稳定。
首先是$H_1$，就是交换化，我们有：
\[
\begin{aligned}
H_1({\mathfrak A}_2,\mathbb Z)&=\{1\}, \\
H_1({\mathfrak A}_3,\mathbb Z)=H_1({\mathfrak A}_4,\mathbb Z)&=\mathbb Z/3\mathbb Z, \\
H_1({\mathfrak A}_n,\mathbb Z)&=\{1\},\ n\ge 5.
\end{aligned}
\]

然后是$H_2$，即[[Schur 乘子]]，我们有：

\[
\begin{aligned}
H_2({\mathfrak A}_2,\mathbb Z)=H_2({\mathfrak A}_3,\mathbb Z)&=\{1\}, \\
H_2({\mathfrak A}_4,\mathbb Z)=H_2({\mathfrak A}_5,\mathbb Z)&=\mathbb Z/2\mathbb Z, \\
H_2({\mathfrak A}_6,\mathbb Z)=H_2({\mathfrak A}_7,\mathbb Z)&=\mathbb Z/6\mathbb Z, \\
H_2({\mathfrak A}_n,\mathbb Z)&=\mathbb Z/2\mathbb Z,\ n\ge 8.
\end{aligned}
\]

### 表示论

```terms
交错群:
  en: alternating group
  de: alternierende Gruppe :f
  fr: groupe alterné :m
  grc: ἀλλάττουσα ὁμάς :f
  la: caterva alterna :f
```
