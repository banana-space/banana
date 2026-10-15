---
title: 集合论回顾
---
数学上，**集合**(set)的严格定义由公理集合论给出，
然而对公理集合论的介绍超出了本课程的要求。
本节不对集合这一基本概念进行严格的定义，
读者可直观上将一个集合理解为一组确定性对象组成的整体，
这组对象被称为该集合的**元素**。特别地，集合具有如下性质：

1. 给定任意的对象$x$与集合$A$，
   要么$x$是$A$的元素（或者说$x$属于$A$，记作$x\in A$），
   要么$x$不是$A$的元素（或者说$x$不属于$A$，记作$x\notin A$）。

2. 两个集合$A$与$B$相等，当且仅当$A$的所有元素也都是$B$的元素，
   且$B$的所有元素也都是$A$的元素。换句话说，$A=B$当且仅当
   对任意的$x\in A$均有$x\in B$，且对任意的$x\in B$均有$x\in A$。

不包含任何元素的集合被称为**空集**（empty set），
在本讲义中用$\varnothing$表示。换句话说，对任意对象$x$，
均有$x\notin \varnothing$。其它一些常见的集合包括
自然数集$\mathbb{N}=\{0,1,2,\ldots\}$、
正整数集$\mathbb{N}_+=\{1,2,3,\ldots\}$、
整数集$\mathbb{Z}=\{0,\pm1,\pm2,\pm3,\ldots\}$、
有理数集$\mathbb{Q}$、实数集$\mathbb{R}$等。

给定集合$A$与$B$，我们称$A$是$B$的**子集**
（subset，记作$A\subseteq B$），若$A$的所有元素都是$B$的元素
（即对任意$x\in A$均有$x\in B$）。注意到对任意集合$A$，
均有$A\subseteq A$以及$\varnothing\subseteq A$。
一个集合$A$的所有子集可以构成一个集合，
称作$A$的**幂集**（power set），在本讲义中记作$2^A$。

设$A$为一集合，而$\varphi(x)$为一关于变量$x$的命题。
若对任意对象$x$，$x\in A$当且仅当命题$\varphi(x)$成立，
则我们可将集合$A$表示为$\{x\mid \varphi(x)\}$
或$\{x:\varphi(x)\}$。
需要注意的是，并非所有关于$x$的命题$\varphi(x)$都能按照这种方式
给出相应的集合[^1]．
但另一方面，公理集合论允许按如下方式构造集合：
给定集合$A$与关于$x$的命题$\varphi(x)$，$A$中所有
满足命题$\varphi(x)$的元素$x$可构成一集合，记作
$
\{x\in A\mid \varphi(x)\}
$
或
$
\{x\in A: \varphi(x)\}
$。
例如，$\mathbb{R}$当中的开区间与闭区间可表示为[^2]
\[
    \left]a,b\right[=\{x\in\mathbb{R}\mid a<x<b\},
    \qquad
    [a,b]=\{x\in\mathbb{R}\mid a\leq x\leq b\}.
\]
本讲义中，“区间”这个概念也包括形如
$\left]-\infty,b\right]=\{x\in\mathbb{R}\mid x\leq b\}$
的无限区间，以及形如$[a,a]=\{a\}$的单点集。

我们称一个无限集$A$是**可数无限集**（countably infinite set）
或**可列集**（denumerable set），若它的所有元素可以被
一个序列所穷尽，也就是说存在一个序列$(a_n)_{n=1}^\infty$，使得
\[
    A = \{a_1,a_2,a_3,\ldots\}
\]
我们用 **（至多）可数集**（countable set）来称呼有限或可列的集合。
不是可数集的集合被称作**不可数集**（uncountable set）。可以证明：

- 可数集的子集仍是可数集。

- 若一个映射$f$的定义域为可数集$S$，那么这个映射的像集
  \[
      \operatorname{Im}f = \{f(s)\mid s\in S\}
  \]
  也是可数集。

在常见的集合中，自然数集$\mathbb{N}$、
正整数集$\mathbb{N}_{+}$、整数集$\mathbb{Z}$、
有理数集$\mathbb{Q}$为可数无限集，而实数集$\mathbb{R}$、
欧氏空间$\mathbb{R}^n$、欧氏空间中的开集为不可数集。

接下来我们回顾一些常见的集合运算：

- 给定任意集合$A$与$B$，它们的**并集**
  （union，记作$A\cup B$）是恰好包含所有属于$A$或属于$B$的对象的集合，
  即$A\cup B= \{x \mid x\in A\ \text{或}\ x\in B\}$。

  两个集合的并集运算满足如下交换律与结合律：
  \[
      A\cup B = B\cup A,
      \qquad
      (A\cup B)\cup C = A\cup(B\cup C).
  \]
  由此不难将并集运算推广到有限多个集合上。

- 给定任意集合$A$与$B$，它们的**交集**
  （intersection，记作$A\cap B$）是恰好包含所有
  既属于$A$也属于$B$的对象的集合，即
  $A\cap B= \{x\mid x\in A\ \text{且}\ x\in B\}$。

  两个集合的交集运算满足如下交换律与结合律：
  \[
      A\cap B = B\cap A,\qquad
      (A\cap B)\cap C = A\cap(B\cap C).
  \]
  由此不难将交集运算推广到有限多个集合上。

- 更一般地，设$\mathcal{I}$为某个非空集合
  （可以是有限集、可数无限集或不可数无限集），
  且每个$i\in\mathcal{I}$都对应于一个集合$A_i$，
  则所有$A_i$的并集$\bigcup_{i\in\mathcal{I}} A_i$被定义为
  \[
      \bigcup_{i\in\mathcal{I}} A_i
      = \left\{x\mid\text{存在某个\ $i\in\mathcal{I}$\
      使得\ $x\in A_i$}\right\}.
  \]
  所有$A_i$的交集$\bigcap_{i\in\mathcal{I}}A_i$被定义为
  \[
      \bigcap_{i\in\mathcal{I}} A_i
      = \left\{x \mid \text{对任意\ $i\in\mathcal{I}$\
      均有\ $x\in A_i$}\right\}.
  \]
  当$\mathcal{I}=\mathbb{N}_+$时，
  我们通常将$\bigcup_{i\in\mathcal{I}} A_i$
  与$\bigcap_{i\in\mathcal{I}} A_i$分别记为
  $\bigcup_{i=1}^\infty A_i$与$\bigcap_{i=1}^\infty A_i$。例如，
  \[
      \begin{aligned}
      \bigcup_{i=1}^\infty
      \left[0,\frac{i}{i+1}\right]
      & =\left\{x\biggm\vert\text{存在正整数\ $i$\ 使得}\ x\in \left[0,\frac{i}{i+1}\right]\right\} \\
      & =\{x\in\mathbb{R}\mid 0\leq x<1\} = [0,1[.
      \end{aligned}
  \]
  又如，
  \[
      \begin{aligned}
      \bigcap_{i=1}^\infty \left]0,\frac{1}{i}\right[
      & = \left\{x \biggm\vert \text{对任意正整数\ $i$\ 均有}\
      x\in \left]0,\frac{1}{i}\right[\,\right\} \\
      & = \left\{x\in\mathbb{R} \biggm\vert x>0\
      \text{且对任意正整数$i$均有}\ x<\frac{1}{i}\right\} =\varnothing.
      \end{aligned}
  \]

  可以证明，当$\mathcal{I}$为可数集且每个$A_i$都是可数集时，
  并集$\bigcup_{i\in\mathcal{I}} A_i$依然是可数集，或者说，
  可数个可数集的并集为可数集。而对于交集
  $\bigcap_{i\in\mathcal{I}} A_i$，由于它包含于任一$A_i$当中，
  故只要存在某个$i\in\mathcal{I}$使得$A_i$是可数集，则交集
  $\bigcap_{i\in\mathcal{I}} A_i$就是可数集。

- 给定集合$A,B$，**差集**$A\backslash B$为
  恰好包括所有属于$A$但不属于$B$的对象的集合，
  即$A\backslash B= \{x\in A\mid x\notin B\}$。

  当集合$B$是集合$A$的子集时，
  我们也称集合$A\backslash B$是集合$B$在集合$A$中的
  **补集**(complement)。特别是，当集合$A$已经
  事先给定且不会产生歧义时，我们也会用$B^c$来表示$B$在$A$中的补集。
  注意到此时有$(B^c)^c=B$。

- 关于并集、交集与差集，还有如下运算律成立：

  1. 分配律：
     \[
         A\cup(B\cap C) = (A\cup B)\cap (A\cup C),
         \qquad
         A\cap(B\cup C) = (A\cap B)\cup (A\cap C).
     \]
     更一般地，设$\mathcal{I}$为任意非空集合，
     每个$i\in\mathcal{I}$对应于一个集合$B_i$，则
     \[
         A\cup\left(\bigcap_{i\in\mathcal{I}} B_i\right)
         =\bigcap_{i\in\mathcal{I}} (A\cup B_i),
         \qquad
         A\cap\left(\bigcup_{i\in\mathcal{I}} B_i\right)
         =\bigcup_{i\in\mathcal{I}} (A\cap B_i).
     \]

  2. 德·摩根律（De Morgan's laws）：设$A,B$均为某个集合$U$的子集，
     则
     \[
         (A\cup B)^c = A^c\cap B^c,
         \qquad
         (A\cap B)^c = A^c\cup B^c,
     \]
     其中的${}^c$均表示在$U$中的补集。更一般地，
     设$\mathcal{I}$为任意非空集合，
     每个$i\in\mathcal{I}$对应于$U$的一个子集$A_i$，则有
     \[
         \left(\bigcup_{i\in\mathcal{I}} A_i\right)^{\!c}
         =\bigcap_{i\in\mathcal{I}} A_i^c,
         \qquad
         \left(\bigcap_{i\in\mathcal{I}} A_i\right)^{\!c}
         =\bigcup_{i\in\mathcal{I}} A_i^c.
     \]

- 给定集合$A,B$，我们将所有形如$(a,b)$的有序对
  （其中$a\in A,b\in B$）构成的集合称作$A$与$B$的
  **笛卡尔积**（Cartesian product），记作$A\times B$，即
  \[
      A\times B = \{(a,b) \mid a\in A,b\in B\}.
  \]
  类似地，也可定义有限个集合的笛卡尔积。特别是，对任意集合$A$，我们定义
  \[
      A^n = \{(a_1,\ldots,a_n)\mid a_i\in A,\,\forall i=1,\ldots,n\}.
  \]
  例如，$\mathbb{R}^n$即为所有形如$(x_1,\ldots,x_n)$的
  $n$维实向量构成的集合。

  可以证明，有限个可数集的笛卡尔积依然是可数集。

在部分教材中，交集$A\cap B$有时也被记为$AB$，
差集$A\backslash B$有时也被记为$A-B$，
补集$B^c$有时也被记为$\overline{B}$。

[^1]: 例如对于命题$x\notin x$就不存在 相应的集合$\{x\mid x\notin x\}$，否则会导致罗素悖论。
[^2]: 本讲义中 用$]a,b[$而非$(a,b)$表示开区间，这是为了不和二元有序对$(a,b)$相混淆。
