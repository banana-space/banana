---
title: '乘积级数与 Riemann $\zeta$ 函数，振荡级数的收敛判断，完备赋范线性空间'
---

## 乘积与 Riemann $\zeta$ 函数

$\{a_n\}_{n\geqslant 1}$ 是复数的数列，我们假设对任意的 $n$，$a_n\neq 0$。
令 $P_n=a_1\cdot a_2\cdot \cdots \cdot a_n$，
如果数列 $\{P_n\}_{n\geqslant 1}$ 的极限存在并且该**极限不是 $\mathbf{0}$**，
我们就称无限乘积 $\displaystyle\prod_{n\geqslant 1}a_n$ 收敛
并且记 $\displaystyle\prod_{n\geqslant 1}a_n=\lim_{n\rightarrow \infty}P_n$。
作为练习，我们有这种情况下的Cauchy判别准则：

::: exercise*
证明，$\displaystyle\prod_{n\geqslant 1}a_n$ 收敛
当且仅当对任意的 $\varepsilon>0$，存在 $N$，
使得对任意的 $n\geqslant N$，任意的 $p\geqslant 0$，我们都有
\[
\big|a_n\cdot a_{n+1}\cdot \cdots \cdot a_{n+p}-1\big|<\varepsilon.
\]
:::

::: proof
假设 $\displaystyle \lim_{n\rightarrow \infty}P_n=P \neq 0$。
特别地，存在 $N_0$，使得当 $n\geqslant N_0$ 时，$|P_n|\geqslant \dfrac{|P|}{2}$；
根据Cauchy判别准则，存在 $N_1$，使得对任意的 $n\geqslant N_1$，
任意的 $p\geqslant 0$，我们都有 $|P_{n-1}-P_{n+p}|<\varepsilon$。
从而，当 $n\geqslant \max(N_0+1,N_1)$ 时，我们有
\[
|P_{n-1}-P_{n+p}|<\varepsilon\ \Leftrightarrow \ |P_{n-1}|\big|a_n\cdot a_{n+1}\cdot \cdots \cdot a_{n+p}-1\big|<\varepsilon.
\]
从而，
\[
\big|a_n\cdot a_{n+1}\cdot \cdots \cdot a_{n+p}-1\big|<\frac{\varepsilon}{|P_{n-1}|}\le\frac{2\varepsilon}{|P|}.
\]
这完成了命题的一个方面。

反之，假设对任意的给定的 $\varepsilon>0$，存在 $N$，
使得对任意的 $n\geqslant N$，任意的 $p\geqslant 0$，我们都有
\[
\big|a_n\cdot a_{n+1}\cdot \cdots \cdot a_{n+p}-1\big|<\varepsilon.
\]
我们要证明 $\{P_n\}_{n\geqslant 1}$ 是Cauchy列。
此时，我们注意到 $\{P_n\}_{n\geqslant 1}$ 首先是有界的序列，
这因为如果我们取 $\varepsilon=1$，那么存在 $N$，
使得对任意的 $n\geqslant N$，任意的 $p\geqslant 0$，我们都有
\[
\big|a_n\cdot a_{n+1}\cdot \cdots \cdot a_{n+p}-1\big|<1\Rightarrow |a_n\cdot a_{n+1}\cdot \cdots \cdot a_{n+p}|<2.
\]
所以，对任意的 $p$，我们都有 $|P_{N+p}|<2 |P_{N-1}|$，
所以整个序列有界，假设 $M=\displaystyle \sup_{n\geqslant 1}|P_n|$。

此时，对于选取好的 $\varepsilon$，有
\[
|P_{n-1}-P_{n+p}| = |P_{n-1}|\big|a_n\cdot a_{n+1}\cdot \cdots \cdot a_{n+p}-1\big|<M\varepsilon.
\]
所以，$\{P_n\}_{n\geqslant 1}$ 是Cauchy列，
从而 $\displaystyle \lim_{n\rightarrow \infty}P_n$ 存在。

最终，我们要说明 $\displaystyle \lim_{n\rightarrow \infty}P_n\neq 0$。
如果不然，那么 $\displaystyle \lim_{n\rightarrow \infty}P_n= 0$。
取 $\varepsilon=\frac{1}{2}$，根据刚才的证明，存在 $N$，当 $n\geqslant N$ 时，我们有
\[
\big|\frac{P_n}{P_N}-1\big|<\frac{1}{2}.
\]
固定 $N$，令 $n\rightarrow \infty$ 就得到了矛盾。
:::

我们首先证明关于非负数序列的存在定理：

::: lemma
$\{a_n\}_{n\geqslant 1}$ 是非负数的数列，即对任意的 $n$，$a_n\geqslant 0$。
那么，如下两个命题是等价的：

(P) 无限乘积 $\displaystyle\prod_{n=1}^{\infty}(1+a_n)$ 收敛（极限必然不是零）；

(S) 级数 $\displaystyle\sum_{n =1}^{\infty} a_n$ 收敛。

:::

::: corollary [绝对收敛的类比]
$\{a_n\}_{n\geqslant 1}$ 是复数的数列，
如果 $\displaystyle\prod_{n=1}^{\infty}(1+|a_n|)$ 收敛，
那么，$\displaystyle\prod_{n=1}^{\infty}(1+a_n)$ 收敛（极限不是零）。
特别地，如果级数 $\displaystyle\sum_{n =1}^{\infty} a_n$ 绝对收敛，
那么 $\displaystyle\prod_{n=1}^{\infty}(1+a_n)$ 收敛。
:::

::: proof
(P)$\Rightarrow$(S)是显然的，这是因为部分和有界：
\[
\sum_{k =1}^{n} a_k \leqslant \prod_{k=1}^{n}(1+a_k)\leqslant \prod_{n=1}^{\infty}(1+a_n).
\]
现在证明(S)$\Rightarrow$(P)，我们要用到指数函数的 $\exp$ 的性质：
$1+x\leqslant e^x$，其中 $x\geqslant 0$。对于部分乘积，我们有
\[
\prod_{k =1}^{n}(1+ a_k) \leqslant \prod_{k=1}^{n}e^{a_k}
\leqslant \exp\bigl(\sum_{k=1}^{n} a_k\bigr)
\leqslant \exp\bigl(\sum_{k=1}^{\infty} a_k\bigr).
\]
这也是有界的。
而部分乘积 $\{P_n=\displaystyle \prod_{k=1}^n(1+a_k)\}_{n\geqslant 1}$ 是单调上升的序列，
所以有极限。
:::

::: proof [推论的证明]
只要证明第一个论断即可：我们有如下的不等式
\[
\big|\prod_{k =n}^{n+p}(1+ a_k) -1\big|
\leqslant \prod_{k =n}^{n+p}(1+ |a_k|) -1.
\]
利用Cauchy判别准则立得结论。
:::

我们还有一个有趣（有用）的习题：

::: exercise*
数列 $\{a_n\}_{n\geqslant 1}$ 满足对任意的 $n$，$1>a_n>0$。
特别地，无限乘积 $\displaystyle\prod_{n=1}^{\infty}(1-a_n)$ 的部分乘积总是收敛的（递减）。
证明，$\displaystyle\prod_{n=1}^{\infty}(1-a_n)$ 收敛（$\neq 0$）
当且仅当级数 $\displaystyle\sum_{n =1}^{\infty} a_n$ 收敛。
:::

::: proof
如果 $\displaystyle\prod_{n=1}^{\infty}(1-a_n)$ 收敛
但是级数 $\displaystyle\sum_{n =1}^{\infty} a_n$ 发散，那么我们有
\[
(1-a_1)\cdots(1-a_n)\leqslant \dfrac{1}{(1+a_1)\cdots(1+a_n)}
\leqslant \dfrac{1}{a_1+\cdots+a_n}\rightarrow 0.
\]
从而，$\displaystyle\prod_{n=1}^{\infty}(1-a_n)=0$，矛盾。
所以，级数 $\displaystyle\sum_{n =1}^{\infty} a_n$ 收敛。
反过来从级数收敛证明乘积收敛是显然的。
:::

我们现在假定大家熟悉算术基本定理，即每个正整数都可以唯一地写成若干个素数的乘积。

::: theorem [Euler乘积公式]
假设 $\mathcal{P}$ 是所有的素数组成的集合，
我们可以将它们从小到大排列为 $2=p_1<p_2<p_3<\cdots$。对于 $s>1$，$\zeta$-函数
\[
\zeta(s)=\sum_{n=1}^\infty \frac{1}{n^s}
\]
是良好定义的。那么，我们有
\[
\zeta(s)=\prod_{p\in \mathcal{P}}\frac{1}{1-p^{-s}},
\]
其中上面的乘积是收敛的（我们可以假定是按照素数从小到大的顺序来做乘积的）。
:::

（我们将在连续函数一节定义幂函数 $x^s$，这里我们不妨假定它满足中学大家学过的基本性质）

::: proof
我们已经证明过，当 $s>1$ 时，$\displaystyle \sum_{n=1}^\infty \frac{1}{n^s}$ 收敛。
我们先来研究乘积。令 $\displaystyle P_n=\prod_{k\leqslant n}\frac{1}{1-p_k^{-s}}$。
首先，我们注意到，我们有
\[
\frac{1}{1-(p_k)^{-s}}=\sum_{e=0}^\infty \frac{1}{p_k^{es}},
\]
这是一个绝对（正项）收敛级数，所以，根据我们已经证明的
关于绝对收敛级数乘积的公式（不依赖于重排），我们有
\[
P_N=\prod_{k\leqslant N}\frac{1}{1-p_k^{-s}}=\sum_{e_1,e_2,\cdots,e_N=0}^\infty \frac{1}{p_1^{e_1s}p_2^{e_2s}\cdots p_N^{e_Ns}}=\sum_{e_1,e_2,\cdots,e_N=0}^\infty \frac{1}{\bigl(p_1^{e_1}p_2^{e_2}\cdots p_N^{e_N}\bigr)^s}.
\]
所以，
如果令
$\mathbf{N}_N=\bigl\{n\in \mathbb{Z}_{\geqslant 1}\bigm| n\text{ 的素因子分解中出现的素数}\leqslant p_N\bigr\}$，
我们就有
\[
P_N=\prod_{k\leqslant N}\frac{1}{1-p_k^{-s}}
=\sum_{n\in \mathbf{N}_N} \frac{1}{n^s}.
\]
从而，我们有
\[
0\leqslant \zeta(s)-P_N=\sum_{n\text{含有 }>p_N\text{ 的素因子}}
\frac{1}{n^s}<\sum_{n >p_N}\frac{1}{n^s}.
\]
（注意到如果只有有限个素数，那么上式的右端是零，然后证明就结束了）
由于 $\zeta(s)$ 是收敛的，所以当 $N\rightarrow \infty$ 时，
我们有 $\displaystyle \lim_{N\rightarrow \infty}(\zeta(s)-P_N)=0$，这就完成了证明。
:::

根据庄子的想法（再一次！这就是我们需要好好理解调和级数发散之证明的原因），
我们对于比较接近于 $1$ 的 $s>1$，给出 $\zeta(s)$ 的下界估计：
\[
\begin{aligned}
\sum_{n=1}^{\infty}\frac{1}{n^s}
&=\underbrace{\frac{1}{1^s}}_{1\text{个},~\geqslant \frac{1}{2^s}}
+\underbrace{\left(\frac{1}{2^s}+\frac{1}{3^s}\right)}_{2\text{个},~\geqslant \frac{1}{4^s}}
+\cdots+\underbrace{\left(\frac{1}{2^{(k-1)s}}+\frac{1}{\bigl(2^{k-1}+1\bigr)^s}+\cdots+\frac{1}{\bigl(2^{k}-1\bigr)^s}\right)}_{2^{k-1}\text{个},~\geqslant \frac{1}{2^{ks}}}+\cdots\\
&\geqslant \sum_{k=1}^{\infty}\frac{1}{2^{ks}}\times 2^{k-1}
=\frac{1}{2}\frac{1}{2^{s-1}-1}.
\end{aligned}
\]
假设我们知道当 $s\rightarrow 1$ 时，$2^{s-1}\rightarrow 1$
（这个在后面学习连续函数的时候就会证明），从而当 $s$ 距离 $1$ 很近的时候，
$\zeta(s)$ 的值可以很大（$\rightarrow \infty$）。
根据乘积公式，如果 $\mathcal{P}$ 是有限集合，
那么，选取一串 $s_\ell\rightarrow 1$，其中 $s_\ell>1$，那么，我们有
\[
\zeta(s_\ell)=\prod_{p\in \mathcal{P}}\frac{1}{1-p^{-s_\ell}}
\stackrel{\ell\rightarrow \infty}{\longrightarrow}
\prod_{p\in \mathcal{P}}\frac{1}{1-p^{-1}}<\infty.
\]
这给出了矛盾。所以有无限多个素数。
这种方法的进一步发展可以给出 $\leqslant n$ 的素数的个数的渐近公式
（第 $n$ 个素数的大小大约应该是 ${n}{\log(n)}$），这就是著名的素数定理，
首先由 Hadamard 和 de la Vallée Poussin 分别于 1896 年独立证明。

## 振荡型的级数收敛判别

我们目前接触的数列或级数收敛的判定的基本模式都是“控制”，
即用某个较大且收敛的对象来作为上界从而说明本来问题的收敛性。
我们下面将看到另一种模式的收敛判别准则，这对应着积分理论中振荡积分的想法。
作为例子，我们回忆在第二次的作业中已经证明的结论（Leibniz的结果）：

$\{a_n\}_{n\geqslant 1}$ 是递减的正数数列并且
$\displaystyle\lim_{n\rightarrow \infty}a_n=0$。
那么，交错级数 $a_1-a_2+a_3-a_4+\cdots$ 收敛。

通过这个例子，我们有这样的直观：如果一个级数有正有负
（**振荡的**：把它们画成 $(n,a_n)$ 就可以看到这个数列对于 $x$ 轴是上下波动的），
那么正负可以相互抵消很多，这样求和的时候仍然可以收敛。

我们先回忆一下经典的**Abel求和公式**：

::: lemma
$\{a_k\}_{k\geqslant 1}$ 和 $\{b_k\}_{k\geqslant 1}$ 是复数（矩阵）的序列，那么
\[
\sum_{k=1}^n{a_kb_k}=S_nb_n+\sum_{k=1}^{n-1}S_k(b_k-b_{k+1}),
\]
其中我们用 $S_n=a_1+a_2+\cdots+a_n$ 表示数列 $\{a_k\}_{k\geqslant 1}$ 的部分和。
:::

::: proof
证明是平凡的：在和式 $\displaystyle\sum_{k=1}^n{a_kb_k}$ 中，
将 $a_k$ 替换成 $S_k-S_{k-1}$（我们要求 $S_0=0$），然后按照 $S_k$ 的指标合并同类项即可。
:::

Abel求和公式是离散版本的分部积分公式，它在（振荡的）级数的收敛理论中有着非凡的应用：

::: theorem [Dirichlet判别法]
给定实数数列 $\{a_k\}_{k\geqslant 1}$ 和 $\{b_k\}_{k\geqslant 1}$，
用 $S_n$ 表示 $\{a_k\}_{k\geqslant 1}$ 的部分和。假设它们满足如下条件：

- 1\) $\{b_k\}_{k\geqslant 1}$ 是单调数列并且
  $\displaystyle\lim_{k\rightarrow \infty}b_k=0$；

- 2\) 存在 $M$，使得对任意的 $n\geqslant 1$，$|S_n|\leqslant M$。

那么，级数 $\displaystyle\sum_{k=1}^\infty{a_kb_k}$ 收敛。
:::

上面的第二个条件说的是 $\{a_k\}_{k\geqslant 1}$ 是振荡的并且正负相互抵消很多！[^1]

::: proof
我们利用级数收敛的Cauchy判别准则：任取 $n,m$，其中 $m\geqslant n$，那么，根据Abel求和法
\[
\sum_{n+1\leqslant k \leqslant m} a_k b_k
= S_mb_m-S_nb_n+\sum_{k=n}^{m-1}S_k(b_k-b_{k+1}).
\]

上式中，前两项 $S_mb_m$ 和 $S_nb_n$ 在 $n,m\rightarrow \infty$ 时自然趋于 $0$，
这是因为 $S_n$ 有界，$b_n\rightarrow 0$。
为了处理上式中最后一项的和式，我们需要利用单调性。
我们不妨假设 $\{b_n\}_{n\geqslant 1}$ 是单调下降的，那么
\[
\begin{aligned}
\big|\sum_{k=n}^{m-1}S_k(b_k-b_{k+1})\big|
&\leqslant \sum_{k=n}^{m-1}|S_k|(b_k-b_{k+1})\\
&\leqslant  M \sum_{k=n}^{m-1}(b_k-b_{k+1})=M(b_n-b_m).
\end{aligned}
\]
很明显，当 $n,m\rightarrow \infty$ 时，这一项的极限也是零。
:::

作为Dirichlet判别法的推论，我们有

::: theorem [Abel判别法]
实数数列 $\{a_k\}_{k\geqslant 1}$ 和 $\{b_k\}_{k\geqslant 1}$ 满足如下条件：

- 1\) $\{b_k\}_{k\geqslant 1}$ 是单调有界数列；

- 2\) 级数 $a_1+a_2+a_3+\cdots$ 收敛。

那么，级数 $\displaystyle\sum_{k=1}^\infty{a_kb_k}$ 收敛。
:::

::: proof
令 $b=\displaystyle\lim_{k\rightarrow \infty} b_k$，
那么，我们可以将 $\displaystyle \sum_{k=1}^\infty{a_kb_k}$（形式上）写成：
\[
\sum_{k=1}^\infty{a_kb_k}
=\sum_{k=1}^\infty{a_k(b_k-b)}+b\sum_{k=1}^\infty{a_k}.
\]
上述等式右边的第一个级数满足Dirichlet判别法的要求，所以是收敛的，
从而 $\displaystyle \sum_{k=1}^\infty{a_kb_k}$ 收敛。
:::

作为上述判别法的应用，我们考虑一个（最）经典的级数收敛问题
（这里我们假设我们已经知道 $\sin(x)$ 和 $\cos(x)$ 在 $\mathbb{R}$ 上的零点的位置，
这个事实我们会在本学期后面的课程给出证明）：

::: example*
研究级数 $\displaystyle \sum_{n=1}^\infty \frac{\cos(nx)}{n}$ 的收敛性问题，
其中 $x\in \mathbb{R}$。（我们先假设 $\cos(x)$ 满足我们中学学习过的各种性质）。
:::

我们这里可以选取 $a_n=\cos(nx)$，$b_n=\dfrac{1}{n}$，先计算部分和：
\[
S_N=\sum_{1\leqslant n \leqslant N}\cos(nx)
=\dfrac{\sin(N+\frac{1}{2})x-\sin\frac{x}{2}}{2\sin{\frac{x}{2}}}.
\]

我们这里假设 $x\notin 2\pi\mathbb{Z}$，
所以 $|S_N|\leqslant |\dfrac{1}{\sin(\frac{x}{2})}|$ 是有界的，
根据Dirichlet判别法，级数是收敛的。如果 $x\in 2\pi\mathbb{Z}$，
我们级数变成了 $\displaystyle \sum_{n=1}^\infty \frac{1}{n}$，即调和级数，自然不收敛。

::: exercise*
证明，如下两个级数都是收敛的：
\[
\sum_{n=1}^\infty \frac{(-1)^n}{n}\left(1+\frac{1}{n}\right)^n,
\ \ \sum_{n=1}^\infty \frac{(-1)^n}{n}\cos(\frac{1}{n}).
\]
:::

## 距离空间和赋范线性空间上的收敛与极限

给定距离空间 $(X,d)$，我们也有Cauchy列的概念：
如果点列 $\{x_n\}_{n\geqslant 1}$ 使得对任意的 $\varepsilon>0$，
总存在 $N$，对任意的 $n,m\geqslant N$，都有 $d(x_m,x_n)<\varepsilon$，
就称该点列为**Cauchy列**。然而，在一般的距离空间中，Cauchy列未必收敛，我们举两个例子：

- 1\) $(\mathbb{Q}, d(x,y)=|x-y|)$ 不是完备的度量空间。
  我们可以选取 $x_n=\displaystyle \sum_{k=0}^n \frac{1}{k!}$，
  这是一个Cauchy列，我们已经证明过这个序列在 $\mathbb{Q}$ 中不收敛
  （我们用的是反证法，并且那个证明不需要事先知道 $e$ 的存在性）。

- 2\) $X=\mathbb{R}-\{0\}$，$d(x,y)=|x-y|$。
  选取数列 $\{\dfrac{1}{n}\}_{n\geqslant 1}$，它是Cauchy列但是不收敛。

- 3\)* $X$=$[0,1]$ 上的实系数多项式函数，
  $d(f,g)=\displaystyle\sup_{x\in [0,1]}|f(x)-g(x)|$。这个空间不完备。
  在闭区间上，多项式可以（一致）收敛到任意的连续函数（Weierstrass逼近定理）。
  我们将在后来的作业中证明这个著名的定理。

::: definition
$(X,d)$ 是距离空间，如果 $(X,d)$ 中的每个Cauchy列都收敛，
那么我们就称 $X$ 是**完备的**距离空间。
:::

很明显，假设 $(X,d)$ 是完备的距离空间，
如果将 $d$ 换成与它相等价的距离 $d'$，那么 $(X,d')$ 也是完备的。

::: theorem
$(\mathbb{R}^n,d_2)$ 是完备的距离空间，其中 $d_2(x,y)=\displaystyle\sqrt{\sum_{j=1}^n(x_j-y_j)^2}$。
:::

::: proof
假设 $\{x^{(k)}\}_{k\geqslant 1}$ 是 $\mathbb{R}^n$ 中的Cauchy列。
先固定指标 $j\in \{1,\cdots,n\}$，那么 $x^{(k)}$ 的第 $j$ 个坐标 $x^{(k)}_j$
显然满足 $|x^{(m_1)}_j-x_j^{(m_2)}| \leqslant d(x^{(m_1)},x^{(m_2)})$。
所以，作为实数数列 $\{x^{(k)}_j\}_{k\geqslant 1}$ 也是Cauchy列，
根据 $\mathbb{R}$ 的完备性，这个数列收敛。我们已经证明过（作业二的A3)）$\mathbb{R}^n$ 的序列收敛
当且仅当其所有坐标的序列收敛，这就完成了证明。
:::

::: theorem [压缩映像定理／Banach或Picard不动点定理]
$(X,d)$ 是**完备的**距离空间。假设映射 $T\colon X\rightarrow X$
是**压缩映射**，即存在常数 $0<\gamma<1$，使得对任意的 $x,x'\in X$，我们都有
\[
d(T(x),T(x'))\leqslant \gamma d(x,x').
\]
那么，$T$ 必有唯一的不动点，即存在唯一的 $x_*\in X$，使得 $T(x_*)=x_*$。
:::

::: proof
任意选取 $x_0\in X$，考虑点列 $\{x_n\}_{n\geqslant 1}$，其中 $x_n=T^n(x_0)$。
我们说明它是Cauchy列：任选自然数 $n$ 和 $p$，我们有
\[
\begin{aligned}
d(x_n,x_{n+p})&=d(T^n(x_0),T^{n+p}(x_0))\leqslant \gamma^n d(x_0,T^p(x_0))\\
&\leqslant \gamma^n \bigl(d(x_0,T(x_0))+d(T(x_0),T^2(x_0))
+\cdots +d(T^{p-1}(x_0),T^p(x_0))\bigr)\\
&\leqslant  \gamma^n \bigl(d(x_0,T(x_0))+\gamma d(x_0,T(x_0))
+\cdots +\gamma^{p-1}d(x_0,T(x_0))\bigr)\\
&\leqslant \frac{\gamma^n}{1-\gamma} d(x_0,x_1).
\end{aligned}
\]
由于 $\gamma<1$，所以当 $n\rightarrow \infty$ 时，上式可以任意小，
所以 $\{x_n\}_{n\geqslant 1}$ 是Cauchy列。
根据 $(X,d)$ 的完备性，存在 $x_*\in X$，使得
$\displaystyle \lim_{n\rightarrow \infty}x_n=x_*$。

现在说明 $T(x_*)=x_*$。任意选取 $\varepsilon>0$，存在 $m$，
使得 $d(x_m,x_*)<\varepsilon$ 并且 $d(x_{m+1},x_m)<\varepsilon$。
根据三角不等式，我们有
\[
\begin{aligned}
d(T(x_*),x_*)&\leqslant d(T(x_*),T(x_m))+d(T(x_m),x_m)+d(x_m,x_*)\\
&\leqslant  \gamma d(x_*,x_m)+d(x_{m+1},x_m)+d(x_m,x_*)
\leqslant (\gamma+2)\varepsilon.
\end{aligned}
\]
所以，$d(T(x_*),x_*)=0$，即 $T(x_*)=x_*$。

最终我们来证明不动点是唯一的：假设 $x_*$ 和 $x_\bullet$ 均为不动点，那么
\[
0\leqslant d(x_*,x_\bullet)=d(T(x_*),T(x_\bullet))
\leqslant \gamma d(x_*,x_\bullet).
\]
由于 $0<\gamma<1$，所以 $d(x_*,x_\bullet)=0$，从而 $x_*=x_\bullet$。
:::

::: exercise*
- 1\) $(X,d)$ 是完备的度量空间，$T\colon X\rightarrow X$ 是映射，
  $r\in \mathbb{Z}_{\geqslant 1}$ 是正整数。假设 $T^r$ 是压缩映射，
  证明，$T$ 必有唯一的不动点。

- 2\) 考虑映射 $f\colon \mathbb{R}\rightarrow \mathbb{R}, \ x\mapsto e^{-x}$。
  证明，$f$ 不是压缩映像但是 $f\circ f$ 是压缩映像。

:::

在分析学习中，最经常用到的距离空间实际上都是赋范线性空间，我们现在就引入这个概念。

::: definition [赋范线性空间]
$V$ 是 $\mathbb{R}$（或者 $\mathbb{C}$）上的线性空间（可以是无限维的）。
假设 $\|\cdot\|\colon V\rightarrow \mathbb{R}_{\geqslant 0}$
是 $V$ 上的满足如下三条性质的函数：

- 1\) 对任意的 $x\in V$，$\lambda\in \mathbb{R}$（或者 $\mathbb{C}$），
  有 $\|\lambda x\|=|\lambda|\|x\|$；

- 2\) $\|x\|=0$ 当且仅当 $x=0$；

- 3\) 对任意的 $x,y\in V$，$\|x+y\|\leqslant \|x\|+\|y\|$。

我们称 $\|\cdot\|$ 是 $V$ 上的一个**范数**
并且称 $(V,\|\cdot\|)$ 是一个**赋范线性空间**。
:::

直观上，$\|v\|$ 就是计算向量 $v$ 的某种长度。

::: remark*
$(V,\|\cdot\|)$ 是赋范线性空间，那么 $(V,d(x,y)=\|x-y\|)$ 是一个距离空间。
如果我们不另加注释的话，我们总是以这种方式把一个赋范线性空间看作是一个距离空间。

特别地，在赋范线性空间 $(V,\|\cdot\|)$ 上，
点列 $\{x_n\}_{n\geqslant 1}$ 收敛到 $x\in V$ 的含义是
$\displaystyle\lim_{n\rightarrow \infty}\|x_n-x\|=0$。
:::

我们有如下常见的赋范线性空间（请注意，它们都是有限维的，
最重要的一个无限维的例子需要等到我们引入了连续函数才介绍）：

::: example*
- 1\) 我们在 $\mathbb{R}^n$ 或者 $\mathbb{C}^n$ 上面可以定义三种范数：
  \[
  \begin{aligned}
  \|x\|_{1}&=\sum_{j=1}^n|x_j|, \\  \|x\|_2&=\sqrt{\sum_{j=1}^n(x_j)^2}, \\
  \|x\|_\infty&=\sup_{i=1,2,\cdots,n}|x_i|.
  \end{aligned}
  \]
  其中，$x=(x_1,\cdots,x_n)$。

- 2\) 我们在 $\mathbf{M}_n(\mathbb{R})$ 或者 $\mathbf{M}_n(\mathbb{C})$
  （视作是 $\mathbb{R}^{n^2}$ 或者 $\mathbb{C}^{n^2}$）上也有三个范数：
  对任意的 $n\times n$ 的矩阵 $A=(A_{ij})$，
  其中 $1\leqslant i, j \leqslant n$，我们有
  \[
  \begin{aligned}
    \|A\|_1&=\sum_{1\leqslant i,j\leqslant n}|A_{ij}|, \\
    \|A\|_2&=\sqrt{\sum_{1\leqslant i,j\leqslant n}(A_{ij})^2}, \\
    \|A\|_\infty&=\sup_{1\leqslant i,j\leqslant n}|A_{ij}|.
  \end{aligned}
  \]

这三种范数都是上面线性空间情况直接搬过来的。
实际上，利用矩阵的知识，我们还可以定义其他更有几何意义的范数，
比如说我们可以利用矩阵的特征值来定义一些范数，限于知识范围，我们不再展开。
:::

假设 $\|\cdot\|_1$ 和 $\|\cdot\|_2$ 均为线性空间 $V$ 上的范数，
如果存在常数 $C_1>0$ 和 $C_2>0$，使得对任意的 $x\in V$，都有
\[
\|x\|_2\leqslant C_1 \|x\|_1, \ \ \|x\|_1\leqslant C_2 \|x\|_2,
\]
那么就称这两个范数 $\|\cdot\|_1$ 和 $\|\cdot\|_2$ 是**等价的**。
根据上面的注记，等价的范数自然给出等价的距离函数，所以它们定义出的收敛和极限的概念是一致的。

如果一个赋范线性空间是完备的距离空间，我们就称它为**完备的赋范线性空间**或者是
**Banach空间**，我们上面看到的例子（$\mathbb{R}^n$ 以及矩阵的空间）都是完备的赋范线性空间。

我们已经在矩阵空间上 $\mathbf{M}_n(\mathbb{R})$ 建立了距离结构并说明这是一个完备的空间，
作为应用，我们要定义在矩阵空间上的指数函数。
为此，我们要在这个场合下把我们对于实数数列熟知的结论再按照之前学习的顺序验证一下。

除了定义之外（根据完备性，极限的判断可以用Cauchy判别准则），
我们研究的第一个关于极限的有意义的问题就是求极限这个操作是否和代数操作交换。
事实上，假设 $(V,\|\cdot\|)$ 是赋范线性空间，那么作为线性空间 $V$ 中的两个点能做加法
（特别地，我们还可以通过用加法加上取极限的操作来定义级数），我们自然要问：
\[
\lim_{n\rightarrow \infty}(x_n+y_n)
=\lim_{n\rightarrow \infty} x_n+\lim_{n\rightarrow \infty} y_n, \ \
\lim_{n\rightarrow \infty} \lambda x_n =\lambda \lim_{n\rightarrow \infty} x_n,
\]
是否成立。这个问题非常简单：只要把数列的证明过程中的绝对值符号 $|\cdot|$ 换成 $\|\cdot \|$ 即可！

某些赋范线性空间上是可以定义乘法的，比如说 $n\times n$ 的矩阵空间 $\mathbf{M}_n(\mathbb{R})$，
这样的空间中的两个点能相乘，所以在这种情况下，我们想知道下面的公式是否成立：
\[
\lim_{n\rightarrow \infty}(x_n \cdot y_n)
=\lim_{n\rightarrow \infty} x_n \cdot \lim_{n\rightarrow \infty} y_n.
\]
不妨设 $\displaystyle \lim_{n\rightarrow \infty} x_n=x$
和 $\displaystyle \lim_{n\rightarrow \infty} y_n=y$。
在数列的情况下，我们的证明如下：
\[
|x_n\cdot y_n-x\cdot y|\leqslant |(x_n-x)y_n|+|x(y_n-y)|
\leqslant  |x_n-x||y_n|+|x||y_n-y|.
\]
然后，利用 $y_n$ 的有界性，我们用一个常数 $M$ 来控制 $x$ 和 $y_n$，就有
\[
|x_n\cdot y_n-x\cdot y|\leqslant M( |x_n-x|+|y_n-y|)\rightarrow 0.
\]
证明的第一个不等号用到了三角不等式，这对任意赋范线性空间的范数 $\|\cdot\|$ 都成立；
第二个不等号用到了绝对值和乘法之间的关系 $|x\cdot y|=|x||y|$；
第三步用到了 $y_n$ 是有界的。

在矩阵的空间里，$|x\cdot y|=|x||y|$ 可能不成立，比如说，我们用 $\|\cdot\|_{\infty}$-范数。
但是，对 $\|\cdot\|_{\infty}$-范数，我们有
\[
\|A\cdot B\|_{\infty}=\sup_{i,j\leqslant n}\big|\sum_{k=1}^n A_{ik}B_{kj}\big|\leqslant \sum_{k=1}^n \|A\|_{\infty}\|B\|_{\infty}=n\|A\|_{\infty}\|B\|_{\infty}.
\]
即对任意的 $x,y \in X$，我们都有
\[
\|x\cdot y\|\leqslant C \|x\| \|y\|,
\]
其中 $C$ 不依赖于 $x$ 和 $y$ 的选取，所以仿照数列的证明，我们就有
\[
\begin{aligned}
d(x_n\cdot y_n, x\cdot y)&=\|x_n\cdot y_n-x\cdot y\|\leqslant \|(x_n-x)y_n\|+\|x(y_n-y)\|\\
&\leqslant  C\bigl(\|x_n-x\|\|y_n\|+\|x\|\|y_n-y\|\bigr)\\
&\leqslant CM\bigl(\|x_n-x\|+\|y_n-y\|\bigr).
\end{aligned}
\]
其中 $\|y_n\|\leqslant M$ 这个有界性是明显的。据此，我们知道乘法和极限是交换的。

::: remark*
我们（自豪地）发现，上述做法根本没涉及矩阵的分量，
我们可以将矩阵视为一个整体（不需要考虑分量）进行操作，就像对数字的序列一样。
:::

最终，我们来定义 $e^A$，其中，$A$ 是一个 $n\times n$ 的实（复）系数矩阵。令
\[
\exp\colon \mathbf{M}_n(\mathbb{R}) \rightarrow \mathbf{M}_n(\mathbb{R}),  \ \ A \mapsto e^A\coloneqq\sum_{k=0}^\infty \frac{A^k}{k!}.
\]
为了说明 $e^A$ 是良好定义的，我们验证级数
$\displaystyle\sum_{k=0}^\infty \frac{A^k}{k!}$ 是收敛的
（即部分和在这个赋范线性空间或者距离空间里收敛）。
我们也想仿照数列的情况利用**绝对收敛的级数**的概念。
所以，对于级数 $\displaystyle \sum_{k=0}^\infty x_k$，我们定义，
如果 $\displaystyle \sum_{k=0}^\infty \|x_k\|$ 是收敛的
（加范数后变成了我们熟悉的数项级数），
就称级数 $\displaystyle \sum_{k=0}^\infty x_k$ 是**绝对收敛的**。
有了这样的动机，我们自然要证明下面的命题：

::: proposition
假设 $\{x_k\}_{k\geqslant 1}$ 是完备的赋范线性空间 $(V,\|\cdot\|)$ 中的点列。
如果级数 $\displaystyle \sum_{k=0}^\infty x_k$ 绝对收敛，那么它收敛。
:::

证明和数列的情况完全一致，我们把它留做作业题。

为了证明绝对收敛性，我们做如下的估计：
\[
\sum_{k=0}^\infty \Bigl\|\frac{A^k}{k!}\Bigr\|
\leqslant \sum_{k=0}^\infty \frac{C^{k-1}\|A\|^k}{k!}
\leqslant \sum_{k=0}^\infty \frac{C^{k}\|A\|^k}{k!}=e^{C\|A\|}.
\]
其中，我们用到了 $\|A^k\|\leqslant C^{k-1}\|A\|^k$（不妨设 $C\geqslant 1$）。

::: remark*
假设 $A$ 和 $B$ 是 $n\times n$ 的（复）矩阵，
那么 $e^{A+B}\stackrel{?}{=}e^A\cdot e^B$ 可能未必成立，
因为如果 $A\cdot B\neq B\cdot A$，
那么上面的红色等号[^2]
可能就不成立了。请参考 $e^{z_1+z_2}=e^{z_1}e^{z_2}$ 的证明。
:::

::: exercise*
如果 $A$ 是 $n\times n$ 的（复）矩阵，那么对任意的 $s,t\in \mathbb{C}$，
我们都有 $e^{sA}\cdot e^{tA}=e^{(s+t)A}$。
特别地，证明，$e^{-A}=\bigl(e^A\bigr)^{-1}$。
:::

我们还可以仿照数的情形定义 $\cos(A)$ 和 $\sin(A)$，
当然，此时这些函数所要表达的几何意义已经不再清楚（但是为什么一定要清楚呢）。
最后，我们要说明，$e^A$ 在我们后面的课程中大有用处。

至此，我们关于极限部分的介绍结束，下一部分我们要研究函数的连续性。

[^1]: 讲义原文如此，其实不一定是振荡的。
[^2]: 原文如此，可能是说前文中关于指数运算 $e^{z_1+z_2} = e^{z_1} e^{z_2}$ 证明中的红色等号。
