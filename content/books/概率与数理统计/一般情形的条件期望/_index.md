---
title: '（${}^\star$）一般情形的条件期望'
---
本章将对条件期望的一般理论进行简要的介绍。为了数学上的严格性，
我们先简要介绍一下Borel集与Borel可测函数的概念。

::: definition
我们将$\mathbb{R}^n$上包含了所有方块的最小事件域
称作$\mathbb{R}^n$的**Borel代数**（Borel algebra），
并将其记作$\mathcal{B}(\mathbb{R}^n).$
这里的“方块”是指任何能表示成$n$个一维区间的笛卡尔积的集合。
换句话说，若$\mathbb{R}^n$上的一个事件域
$\mathcal{F}\subseteq 2^{{\mathbb{R}^n}}$包含了所有方块，
则必定有$\mathcal{B}(\mathbb{R}^n)\subseteq\mathcal{F}$。

Borel代数$\mathcal{B}(\mathbb{R}^n)$中的元素
被称为**Borel集**。
:::

可以证明，所有$\mathbb{R}^n$的开子集、闭子集，
以及可数多个开子集或闭子集经过若干步并集、交集、差集运算所得到的集合
都属于$\mathcal{B}(\mathbb{R}^n)$；也就是说，
绝大多数常见的$\mathbb{R}^n$的子集都是Borel集。
然而，基于集合论的选择公理，可以证明存在$\mathbb{R}^n$的子集
不是Borel集，直观上我们会认为这样的集合是病态的。

::: definition
我们称函数$f:\mathbb{R}^n\rightarrow\mathbb{R}$
是**Borel可测**的（Borel measurable），
若对任意区间$I\subseteq\mathbb{R}$，它在$f$下的原像
$
f^{-1}(I) = \{x \mid f(x)\in I\}
$
都是$\mathbb{R}^n$的Borel集。
:::

由于非Borel集的存在，可证明不Borel可测的函数也是存在的。
不过以下定理说明，常见的函数都是Borel可测函数；
我们在这里不给出其证明，感兴趣的读者可参考
[@billingsley1995probability]第13节的内容。

::: theorem
1. 定义在$\mathbb{R}^n$上的连续函数可测。

2. 设$f,g:\mathbb{R}^n\rightarrow\mathbb{R}$为可测函数，
   则$f+g,f-g,f\cdot g,\max\{f,g\},\min\{f,g\}$可测。
   若进一步有$g(x)\neq 0,\,\forall x$，则$f/g$可测。

3. Borel可测函数的经过复合后是Borel可测的。例如，
   若$f:\mathbb{R}^n\rightarrow\mathbb{R}$与
   $g:\mathbb{R}\rightarrow\mathbb{R}$是可测的，
   则$g\circ f$可测；又如，若$f:\mathbb{R}^m\rightarrow\mathbb{R},
g:\mathbb{R}^n\rightarrow\mathbb{R}$与
   $h:\mathbb{R}^2\rightarrow\mathbb{R}$可测，
   则函数$(x,y)\mapsto h(f(x),g(y))$可测。

4. 设$f_1,f_2,\ldots$为一列可测函数，令
   \[
       f_\infty(x) = \begin{cases}
       \displaystyle\lim_{n\rightarrow\infty} f_n(x), & \text{若极限存在}, \\
       0, & \text{若极限不存在},
       \end{cases}
       \qquad \forall x,
   \]
   则$f_\infty$可测。

:::

此外也可以证明，若$g:\mathbb{R}^n\rightarrow\mathbb{R}$为
Borel可测函数，那么对任意$n$个随机变量$X_1,\ldots,X_n$，
其函数$g(X_1,\ldots,X_n)$也必定是随机变量。

在条件期望的一般理论中，一些技术细节会对函数的Borel可测性有要求。
本讲义不会对这些技术细节进行展开，但为了严格起见，本章其余内容中，
一旦谈到函数（包括一元与多元函数）则都是指Borel可测函数。
