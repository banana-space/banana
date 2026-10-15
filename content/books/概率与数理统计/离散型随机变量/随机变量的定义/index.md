---
title: 随机变量的定义
---

在许多随机试验中，相较于直接考察试验结果的统计规律，
我们往往会从各个试验结果中提炼出一些定量特征来进行研究，
这些定量特征可以看成是试验结果的函数。在概率论中，
我们将试验结果的实值函数称为随机变量。引入随机变量能够带来
如下几个方面的好处：

- 在某些随机试验中，我们只关心试验结果的某个函数的取值情况，
  此时将研究重点放在相应的随机变量上能使我们更有针对性地揭示统计规律；

- 样本空间作为一个一般的集合，有时难以直接对其元素进行运算
  或比较大小关系，而样本空间上的实值函数则可进行各种运算
  及大小关系的比较，从而能帮助我们挖掘更深层次的统计规律；

- 随机变量将“底层”的概率空间
  $(\Omega,\mathcal{F},\mathbb{P})$包装为分布函数、分布列、
  概率密度函数等利用微积分知识即可方便使用的“接口”，
  这为概率建模与相关的推导提供了莫大的便利。

::: definition {@definition:rand_var}
设$(\Omega,\mathcal{F},\mathbb{P})$为一概率空间。
我们将定义在$\Omega$上的实值函数$X:\Omega\rightarrow\mathbb{R}$
称作一个**随机变量**（random variable），
若对任意$\mathbb{R}$中的区间$I$，均有
\[
\left\{\omega\in\Omega \mid X(\omega)\in I\right\}\in\mathcal{F}.
\]
:::

@definition:rand_var 中要求形如
$\{\omega\in \Omega \mid X(\omega)\in I\}$的集合
都在事件域$\mathcal{F}$中，它保证了
$\{\omega\in \Omega \mid X(\omega)\in I\}$的概率是有定义的，
也就是说对任意区间$I$，我们都可以谈论“随机变量的取值落在区间$I$中”
这一事件的概率。

给定随机变量$X$以及关于实数$x$的命题$\varphi(x)$，
我们经常用记号$\{\varphi(X)\}$来表示集合
$\{\omega\in \Omega\mid \text{$\varphi(X(\omega))$ 成立}\}$，
例如
\[
\{\text{$X$ 是有理数}\} = \left\{\omega\in \Omega \mid
\text{$X(\omega)$ 是有理数}\right\}.
\]
对于实际问题中所关心的绝大多数命题$\varphi(x)$，
原则上均可证明$\{\varphi(X)\}$为一事件，
也就是说$\{\varphi(X)\}$的概率是有定义的[^1]，
此时我们用$\mathbb{P}(\varphi(X))$表示$\{\varphi(X)\}$的概率。
例如
\[
\mathbb{P}(a\leq X<b)
=\mathbb{P}\!\left(
\left\{\omega\in \Omega \mid a\leq X(\omega)<b\right\}\right).
\]

从已有的随机变量出发，可以构造出新的随机变量。
具体而言，给定$n$个随机变量$X_1,\ldots,X_n$以及
函数$f:\mathbb{R}^n\rightarrow\mathbb{R}$，
我们用$f(X_1,\ldots,X_n)$表示将$\omega\in \Omega$
映为$f(X_1(\omega),\ldots,X_n(\omega))$的函数。
对于绝大多数实际问题中遇到的函数$f$，原则上均可证明
$f(X_1,\ldots,X_n)$为一随机变量；特别是，
给定随机变量$X,Y$以及实数$\lambda$，则
$\lambda X,|X|,X+Y,X\cdot Y$均为随机变量。

在本讲义中，若无特别说明，均假定形如$\{\varphi(X)\}$的集合
是一个事件（也就是说其概率$\mathbb{P}(\varphi(X))$有定义），
而形如$f(X_1,\ldots,X_n)$的函数为一随机变量。

::: example [指示函数] {@example:indicator_function}
事件的指示函数是最简单的一类随机变量。设$S$为任意集合，
$A$为$S$的任一子集，我们定义$A$的**指示函数**
（indicator function）$\mathsf{1}_A:S\rightarrow\mathbb{R}$为
\[
\mathsf{1}_A(x) = \begin{cases}
1, & \text{若}\ x\in A, \\
0, & \text{若}\ x\notin A.
\end{cases}
\]
现设$(\Omega,\mathcal{F},\mathbb{P})$为一概率空间，
任给一事件$E$，我们证明其指示函数$\mathsf{1}_E$为随机变量：
任取区间$I\subseteq\mathbb{R}$，有
\[
\{\mathsf{1}_E\in I\}
=\left\{\omega\in\Omega \mid \mathsf{1}_E(\omega)\in I\right\}
=\begin{cases}
\Omega, & \{0,1\}\subseteq I, \\
E, & 1\in I, 0\notin I, \\
E^c, & 0\in I, 1\notin I, \\
\varnothing & \{0,1\}\cap I = \varnothing,
\end{cases}
\]
而$\Omega,E,E^c,\varnothing$均为事件，
故$\mathsf{1}_E$为一随机变量。不难看出，
随机变量$\mathsf{1}_E$在事件$E$发生时取值为$1$，
而在$E$没有发生时取值为$0$。

指示函数在概率论中有着基础性作用，从指示函数出发，
可以构造一系列更加复杂的随机变量。例如，
设$E_1,E_2,\ldots$为一列两两互斥的事件，
$x_1,x_2,\ldots$为任意一列实数，则可以证明
\[
X = \sum_{i=1}^\infty x_i\cdot\mathsf{1}_{E_i}
\]
为一随机变量，该随机变量在事件$E_i$发生时的取值即为$x_i$。
:::

::: example {@example:var_continuous}
设概率空间$(\Omega,\mathcal{F},\mathbb{P})$中
$\Omega=\left[0,1\right]$，概率测度$\mathbb{P}$
对任意$\left[0,1\right]$的子区间$J$均有定义，
且$\mathbb{P}(J)$等于$J$的长度。
现任取$\alpha>0$，并定义$X:\Omega\rightarrow\mathbb{R}$为
\[
X(\omega)=\alpha\omega,\qquad \omega\in\left[0,1\right].
\]
则对任意区间$I\subseteq\mathbb{R}$，有
\[
\{X\in I\} =
\left\{\omega\in\left[0,1\right]\mid\alpha\omega\in I\right\}
\]
由于$\omega\mapsto \alpha\omega$是严格单调的连续函数，
可知上式右端为$\left[0,1\right]$的子区间或空集，
故$\mathbb{P}(X\in I)$有定义，从而由区间$I$的任意性可得$X$
为一随机变量。

注意到对任意区间$I\subseteq \mathbb{R}$，有
\[
\begin{aligned}
\mathbb{P}(X\in I)
& =\mathbb{P}(\{\omega\in\left[0,1\right] \mid
\alpha\omega\in I\}) \\
& = \int_{0}^1
\mathsf{1}_{\{x\mid\alpha x\in I\}}(x)
\,\mathrm{d} x \\
& = \int_{0}^{\alpha}
\mathsf{1}_{I}(t)\cdot\alpha^{-1}\mathrm{d} t =
\int_{I}
\alpha^{-1}\mathsf{1}_{\left[0,\alpha\right]}(t)\,\mathrm{d} t,
\end{aligned}
\]
其中我们进行了积分换元$t=\alpha x$。
上式意味着$\mathbb{P}(X\in I)$可以表示为一个非负函数
在区间$I$上的积分。
:::

@example:indicator_function 与
@example:var_continuous 各自给出了
如下两类随机变量的典型例子：前一类随机变量可能的取值只有可数多个；
后一类随机变量可能的取值有不可数个，且它取值于任一区间的概率
等于某个非负函数在该区间上的积分。
我们将前一类随机变量称为**离散型随机变量**，
而后一类随机变量则称为**连续型随机变量**。
考虑到数学工具上的限制以及大多数实际应用的情形，
本讲义中将分别对这两类随机变量进行较为详细的讨论，
而一般性的随机变量理论则只做简要介绍。

[^1]: 相关证明超出本讲义范围，属于高等概率论的内容。
