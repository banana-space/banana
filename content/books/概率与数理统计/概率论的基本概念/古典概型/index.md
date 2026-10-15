---
title: 古典概型
---

对于一个只有有限个结果的随机试验，
若我们没有证据指出其中的某个结果会比其它结果更有可能发生，
则通常将这个随机试验用**古典概型**（classical probability）
进行建模。在古典概型中，取样本空间为
$\Omega=\{\omega_1,\ldots,\omega_N\}$，
其中$\omega_1,\ldots,\omega_N$代表该随机试验的$N$个结果，
事件域$\mathcal{F}$取为$2^\Omega$（即$\Omega$的所有子集都是事件），
概率测度$\mathbb{P}$则由
\[
\mathbb{P}(E) = \frac{|E|}{N}
=\sum_{\omega\in E}\frac{1}{N},
\qquad\forall E\subseteq \Omega
\]
给出，其中我们用$|E|$表示集合$E$中元素的个数。
不难验证上述$\mathbb{P}$的确满足
@definition:probability_space，此外
\[
\mathbb{P}(\{\omega_1\})=\cdots=\mathbb{P}(\{\omega_N\})
=\frac{1}{N},
\]
也就是说每个仅包含单个试验结果的事件都具有相同的概率$1/N$。

由于古典概型中的概率与计数直接相关，
因此关于古典概型的概率论问题通常会用到组合计数的诸多方法。
接下来我们对一些基本的组合计数方法进行简要回顾；
相关结果更详细的介绍以及证明可参考
[@ross_first_course_probability; @chung_elementary_probability]
等教材。

**乘法原理：** 设某个试验共包括$r$个依次执行的阶段，其中

1. 第1个阶段总共有$n_1$个可能的结果；

2. 在完成前$i-1$个阶段并得到一个相应的结果后，
   第$i$个阶段将总共有$n_{i}$个可能的结果。

则该试验总共有$n_1\cdot n_2\cdots n_r$个可能的结果。

**加法原理：** 设完成某个试验有$r$种不同的途径，
且只能在这$r$种途径中选一种来完成该试验。
若采取第$i$种途径时总共有$n_i$个可能的结果，
则该试验总共有$n_1+n_2+\cdots+n_r$个可能的结果。

**排列：** 假设有$n$个不同的个体，
我们需要从中选出$m$个个体并将它们排成一个序列。则总共有
\[
n(n-1)\cdots (n-m+1)=\frac{n!}{(n-m)!}
\]
个可能的排列方式。

**组合：** 假设一个集合包含$n$个不同的元素，
我们需要从中选出$m$个元素构成一个子集。则可能得到的子集总共有
\[
\frac{n(n-1)\cdots (n-m+1)}{m!} = \frac{n!}{m!(n-m)!}
\]
个。上式给出的正整数又被称作**二项式系数**
（binomial coefficient），
记作$\displaystyle\binom{n}{m}$，这是因为二项式定理给出
\[
(x+y)^n = \sum_{m=0}^n \binom{n}{m} x^m y^{n-m}.
\]

**多项式系数：** 给定一组自然数$n_1,\ldots,n_r$
以及$n=n_1+\cdots+n_r$，相应的**多项式系数**
（multinomial coefficient）被定义为
\[
\binom{n}{n_1,n_2,\ldots,n_r}
=\frac{n!}{n_1!\,n_2!\cdots n_r!}.
\]
多项式系数的含义可以有如下两种解释：

- 设总共有$r$类对象，其中第$i$类对象包含$n_i$个不可区分的个体，
  我们需要将这$n=n_1+\cdots+n_r$个个体排成一个序列。
  则可以证明，可能的排列方式总共有
  $\displaystyle\binom{n}{n_1,n_2,\ldots,n_r}$个。

- 设一个集合$A$总共有$n$个元素，我们需要将这个集合划分为
  $r$个互不相交的子集$A_1,\ldots,A_r$，其中要求
  子集$A_i$包含$n_i$个元素。则可以证明，可能的子集划分方式
  总共有$\displaystyle\binom{n}{n_1,n_2,\ldots,n_r}$个。

实际上，第一种解释下的排列方式与第二种解释下的子集划分方式有
一一对应关系：给定第一种解释下的任一排列方式，
将其中第$k$个位置上的个体的类别记为$\sigma(k)\in\{1,\ldots,r\}$，
那么对于集合$A=\{a_1,\ldots,a_n\}$，通过将每个元素$a_k$
分到子集$A_{\sigma(k)}$当中，即可对应到一个子集划分方式，
且不难看出这是个一一对应关系。

此外，多项式系数还出现在多项式定理当中：
\[
(x_1+x_2+\cdots+x_r)^n
=\sum
\binom{n}{n_1,n_2,\ldots,n_r} x_1^{n_1}\,x_2^{n_2}\cdots x_r^{n_r},
\]
其中的求和遍历所有满足$n_1+\cdots+n_r=n$的自然数$n_1,\ldots,n_r$。

::: example [Banach火柴盒问题] {@example:Banach_matchbox}
Banach火柴盒问题（Banach matchbox problem）的表述如下：
一个人有两个火柴盒，一开始每个火柴盒里有$n$根火柴，
之后每次随机选择一个火柴盒并从里面取$1$根火柴，
直到某次取火柴时发现那个待取的火柴盒已经空了，
求此时另一个火柴盒里还剩$k$根火柴的概率。

首先注意到如下事实：若取火柴时发现待取火柴盒已空而
另一个火柴盒还剩$k$根火柴，则此时必定是第$n+(n-k)+1=2n-k+1$次取火柴；
反之，若第$2n-k+1$次取火柴时发现待取火柴盒已空，那么另一个火柴盒
必定剩余$k$根火柴。此外，整个试验中取火柴的总次数
（包括发现火柴盒空了的这一次）不会超过$2n+1$。
基于以上观察，我们可以把原问题变换成如下等价的问题：
一个人独立重复地抛$2n+1$次均匀硬币，并将其结果记录为多元组
$(\omega_1,\ldots,\omega_{2n+1})$，其中
$\omega_i\in\{\mathrm{H},\mathrm{T}\}$，
则$(\omega_1,\ldots,\omega_{2n-k+1})$当中恰好出现
$n+1$次$\omega_{2n-k+1}$的概率是多少？

对于变换后的问题，显然可以令
\[
\Omega=\left\{(\omega_1,\ldots,\omega_{2n+1}) \mid
\omega_i\in\{\mathrm{H},\mathrm{T}\},\,\forall i\right\},
\]
并取$(\Omega,2^\Omega,\mathbb{P})$为古典概型，
其中每个$\Omega$的单点集的概率为$1/2^{2n+1}$。记事件
\[
\begin{aligned}
E &=
\left\{(\omega_1,\ldots,\omega_{2n+1}) \mid
\text{$(\omega_1,\ldots,\omega_{2n-k+1})$ 当中恰好出现
$n+1$ 次 $\omega_{2n-k+1}$}\right\}, \\
E_{\mathrm{H}}
& =\left\{(\omega_1,\ldots,\omega_{2n+1}) \mid
\omega_{2n-k+1}=\mathrm{H}\ \text{且
$(\omega_1,\ldots,\omega_{2n-k})$ 当中恰好出现
$n$ 次 $\mathrm{H}$}\right\} \\
E_{\mathrm{T}}
& =\left\{(\omega_1,\ldots,\omega_{2n+1}) \mid
\omega_{2n-k+1}=\mathrm{T}\ \text{且
$(\omega_1,\ldots,\omega_{2n-k})$ 当中恰好出现
$n$ 次 $\mathrm{T}$}\right\},
\end{aligned}
\]
则$E=E_{\mathrm{H}}\cup E_{\mathrm{T}}$
且$E_{\mathrm{H}}\cap E_{\mathrm{T}}=\varnothing$，故
\[
\mathbb{P}(E)=\mathbb{P}(E_{\mathrm{H}})
+\mathbb{P}(E_{\mathrm{T}}).
\]
而$E_{\mathrm{H}}$中的元素可以用如下方法不重不漏地构造出来：
首先从$(\omega_1,\ldots,\omega_{2n-k})$中取出$n$个分量
并将它们的值赋为$\mathrm{H}$，其余$n-k$个分量赋值为$\mathrm{T}$；
再令$\omega_{2n-k+1}=\mathrm{H}$；最后依次对
$\omega_i,\,i> 2n-k+1$赋值$\mathrm{H}$或$\mathrm{T}$。
由乘法公式与排列数公式可得$E_{\mathrm{H}}$的元素个数为
\[
\binom{2n-k}{n}\cdot 2^{k}
\]
故
\[
\mathbb{P}(E_{\mathrm{H}})=\binom{2n-k}{n}\cdot 2^k \cdot \frac{1}{2^{2n+1}}
=\binom{2n-k}{n}\cdot \frac{1}{2^{2n-k+1}},
\]
由对称性可得$E_{\mathrm{T}}$与$E_{\mathrm{H}}$包含相同多的元素，故
\[
\mathbb{P}(E_{\mathrm{T}})=\binom{2n-k}{n}\cdot\frac{1}{2^{2n-k+1}}.
\]
最终有
\[
\mathbb{P}(E)
=\binom{2n-k}{n}\cdot\frac{1}{2^{2n-k}}.
\]
:::
