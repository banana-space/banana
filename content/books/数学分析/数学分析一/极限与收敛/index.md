---
title: 极限与收敛
---

我们通常用 $\{x_n\}_{n\geqslant 1}$ 来表示一列数（有顺序）$x_1,x_2,\cdots,x_m,\cdots$
并且将它称为**数列**。一个数列实际上就是一个映射
\[
f\colon \mathbb{Z}_{\geqslant 1}\rightarrow \mathbb{R}, \ \ k\mapsto f(k)=a_k.
\]
同样的，给定一个映射
\[
f\colon \mathbb{Z}_{\geqslant 1}\rightarrow X, \ \ k\mapsto f(k)=x_k,
\]
其中 $(X,d)$ 是一个距离空间，我们就得到了距离空间中的一个**点列**。
如果把 $\mathbb{R}$ 看成是距离空间的话（我们之前已经这样做了），那么数列只是点列的一个特殊情况。

::: definition [极限的定义，$\varepsilon-N$ 语言]
假设 $\{x_n\}_{n\geqslant 1}$ 是实数序列。
如果存在 $x\in \mathbb{R}$，使得对任意的 $\varepsilon>0$，总存在 $N\geqslant 1$，
使得对任意的 $n\geqslant N$，我们都有
\[
|x_n-x|<\varepsilon,
\]
那么，我们就说数列 $\{x_n\}_{n\geqslant 1}$**有极限**并把 $x$ 称作是数列 $\{x_n\}$ 的**极限**，
记作 $\displaystyle\lim_{n\rightarrow \infty}x_n=x$。
如果数列 $\{x_n\}$ 有极限，我们还说它是**收敛的**。
:::

::: remark*
我们直观上总是认为 $\varepsilon$ 是非常小的数，$N$ 是非常大的数

- 1\) 上述定义中的 $N$ 是在 $\varepsilon$（任意的）选定之后再选择的，
  它通常依赖于 $\varepsilon$ 的大小，我们有时候也写成 $N=N(\varepsilon)$ 来表示这种依赖性。

- 2\) 上述定义就是想描叙下面的直观：无论 $\varepsilon$ 有多么小，总存在很大的 $N$，
  使得从数列的第 $N$ 项开始，数列的每个数都和 $x$ 的误差不超过 $\varepsilon$（离着 $x$ 很近）。

:::

把数列的极限的概念推广到距离空间是轻而易举的事情：

::: definition [度量空间中点列的极限]
$\{x_n\}_{n\geqslant 1}$ 是度量空间 $(X,d)$ 中点的序列，如果存在 $x\in X$，
使得对任意的 $\varepsilon>0$，总存在 $N\geqslant 1$，使得对任意的 $n\geqslant N$，我们都有
\[
d(x_n,x)<\varepsilon,
\]
那么就称点列 $\{x_n\}$ 在 $(X,d)$ 中有**极限**的，$x$ 称作是它的**极限**，
记为 $\displaystyle\lim_{n\rightarrow \infty}x_n=x$。
:::

为了了解极限的概念，我们从一些重要的例子入手：

::: example*
- 1\) 这是一个反面的例子。
  极限是否存在将是我们的核心课题，下面的例子可以表明这个问题的重要性与困难之处：
  我们考虑实数数列 $\{x_n\}_{n\geqslant 1}$，其中
  \[
  x_n=1-\dfrac{1}{3}+\dfrac{1}{5}-\cdots + \dfrac{(-1)^{n-1}}{2n-1},
  \]

  - 我们想知道这个序列是不是有极限。

    然而，根据极限的定义，如果有极限，我们要先验地知道极限是什么才可以利用定义来证明。
    事实上，要想猜到这个极限的值是很困难的。
    通过这个例子，我们发现极限的定义对于判断极限是否存在并没有太大的帮助。

  - 从概念上而言，极限的定义在哲学意义上有一个先天的缺陷：判断数列收敛与否，
    应该由数列本身所决定而不需要依赖于外在的信息，比如说事先知道极限是什么。
    换句话说，我们想要**内蕴地**来考虑极限问题。这种看法和思考方式对数学的学习是大有裨益的。

  - 假设我们已经得知上述数列的极限是 $\dfrac{\pi}{4}$（注意，目前我们还没有定义圆周率 $\pi$）。
    然而，要尝试从定义出发来证明极限就是 $\dfrac{\pi}{4}$，我们目前还是无能为力，
    因为我们缺乏基本的工具。
    我们将学习微分和积分等基本的分析工具，有了这些技术手段的支持，我们才可以真正地计算类似的极限。

  - 让我们暂且接受 $\pi$ 是无理数这个事实。
    我们注意到，这个数列的每一项都是有理数，但是它在有理数 $\mathbb{Q}$ 中是没有极限的。
    我们知道，$(\mathbb{Q},d(x,y)=|x-y|)$ 也是一个距离空间（参见第一次作业题的 ${\rm A3)}$）。
    可见，一个点的序列能否收敛与这个点列所生活的空间的性质密切相关。

  - 题外话：我们可以把上述极限写为
    \[
    \lim_{n\rightarrow \infty}\left( 1-\dfrac{1}{3}+\dfrac{1}{5}-\cdots + \dfrac{(-1)^{n-1}}{2n-1} \right) =\frac{\pi}{4}.
    \]
    等式左边每一项都是用算术来定义的，即通过整数进行加减乘除而来。
    然而，通过取极限的过程，右边得到了和圆周率有关的信息。
    简而言之，一个算术的对象和一个几何的对象通过极限联系在一起：可以不夸张地说，
    极限是从算术世界通往几何世界的秘密通道。

- 2\) 如果 $x_n =x$，那么 $\displaystyle\lim_{n\rightarrow \infty} x_n=x$。

  我们按照定义来证明：对任意的 $\varepsilon>0$，我们取 $N=1$，当 $n\geqslant 1$ 时，
  有 $|x_n-x|=0<\varepsilon$。

- 3\) 我们有极限 $\displaystyle\lim_{n\rightarrow \infty} \dfrac{1}{n}=0$。

  我们按照定义来证明：对任意的 $\varepsilon>0$，可以选取 $N$，使得 $N>\dfrac{1}{\varepsilon}$，
  比如说，$N=\left\lfloor {\dfrac{1}{\varepsilon}} \right\rfloor+1$。
  当 $n\geqslant N$ 时，有 $|x_n-0|=\dfrac{1}{n}\leqslant\dfrac{1}{N}<\varepsilon$。

- 4\) 我们有极限 $\displaystyle\lim_{n\rightarrow \infty} \dfrac{1}{\lambda^n}=0$，
  其中 $\lambda>1$。

  先陈述一个技术事实：假设 $\lambda=1+\delta$，其中，$\delta>0$。
  根据二项式的展开（只需要乘法和加法以及各类实数的四则运算就可以证明），我们有
  \[
  \lambda^n=(1+\delta)^n = 1+n\delta+\cdots \geqslant 1+n\delta.
  \]
  所以，对任意的一个数 $M$，总能选到 $n$，使得 $\lambda^n>M$（Archimedes原理）。

  我们现在按照定义来证明：对任意的 $\varepsilon>0$，可以选取 $N$，
  使得 $\lambda^N>\dfrac{1}{\varepsilon}$，比如说，
  $N=\left\lfloor {\dfrac{1}{\varepsilon\delta}} \right\rfloor+1$。
  当 $n\geqslant N$ 时，有 $|x_n-0|=\dfrac{1}{\lambda^n}\leqslant\dfrac{1}{\lambda^N}<\varepsilon$。

:::

有了极限，我们可以定义无限个数求和这一个概念，这也就是级数的概念。
不夸张地说，这是极限最重要的一个应用，因为几乎所有有意义的数和函数都是通过级数的方式来构造的。
另外，我们还可以仿照极限的定义方式，研究极限是 $+\infty$ 或者 $-\infty$ 的数列。
为此，我们对极限的定义进行扩充

::: definition [极限定义的补充]
我们假定 $\{x_n\}_{n\geqslant 1}$ 是实数的序列。

- 1\) 如果对任意的 $M>0$（很大），总存在 $N>0$，使得对任意的 $n\geqslant N$，都有 $x_n>M$，
  我们就称 $x_n$**收敛到正无穷**，记作 $\displaystyle\lim_{n\rightarrow \infty} x_n=+\infty$。
  类似地，如果对任意的 $M>0$，总存在 $N>0$，使得对任意的 $n\geqslant N$，都有 $x_n<-M$，
  我们就称 $x_n$**收敛到负无穷**，记作 $\displaystyle\lim_{n\rightarrow \infty} x_n=-\infty$。
  如果上述之一发生，我们就称 $x_n$ 是**发散的**。

- 2\) $a_1,a_2,\cdots$ 是一列实数，令 $x_n=\displaystyle\sum_{i=1}^n a_i$，
  如果 $\{x_n\}_{n\geqslant 1}$ 有极限，
  我们就说级数 $a_1+a_2+a_3+\cdots$**收敛**并把它的极限
  $\displaystyle\lim_{n\rightarrow \infty} x_n$ 记作 $\displaystyle\sum_{i=1}^\infty a_i$；
  如果 $\{x_n\}_{n\geqslant 1}$ 是发散的，我们就称级数 $a_1+a_2+a_3+\cdots$**发散**。
  根据之前的定义，
  我们可以想当然地定义 $\displaystyle\sum_{i=1}^\infty a_i=+\infty$ 或者
  $\displaystyle\sum_{i=1}^\infty a_i=-\infty$ 并称这个级数是收敛到正无穷或者负无穷的。

:::

::: remark*
为了理解这几个定义，我们再给出几个简单的例子：

- 1\) 一个数列既没有极限也不发散，比如说 $\{x_n\}_{n\geqslant 1}$，其中 $x_n=(-1)^{n-1}$。
  这个数列是没有极限的：如若不然，假设它的极限是 $x$。
  根据定义，对于 $\varepsilon=0.1$（因为对于任意的 $\varepsilon$ 都成立，特别地，我们就取这个数），
  存在 $N_0$，使得当 $n\geqslant N_0$ 时，$|x_n-x|<0.1$。所以，根据三角不等式，
  \[
  2=|x_{N_0}-x_{N_0+1}|\leqslant |x_{N_0}-x|+|x-x_{N_0+1}|<0.1+0.1=0.2,
  \]
  矛盾。

- 2\) 在度量空间中，我们有收敛的概念，但是我们一般而言并没有级数的概念，
  原因是对于点列 $\{a_k\}_{k\geqslant 1}$，
  求和 $a_1+a_2+\cdots+a_n$ 是不能被定义的（因为我们没有加法运算 $X\times X\rightarrow X$）。

  根据这个讨论，如果 $X$ 还是一个线性空间，那么，我们可以定义级数 $a_1+a_2+\cdots+a_n$。
  比如说，$X=\mathbb{C}$ 是复数，我们就可以定义复数的级数。

- 3\) 调和级数 $1+\dfrac{1}{2}+\dfrac{1}{3}+\cdots+\dfrac{1}{n}+\cdots$ 是最经典的发散级数的例子。

  调和级数发散的证明（分析中最经典的证明之一）：考虑 $n=2^k$，那么，我们有
  \[
  \begin{aligned}
  \sum_{j=1}^{n-1}\frac{1}{j}&=\underbrace{\frac{1}{1}}_{1\text{个},~\geqslant \frac{1}{2}}+\underbrace{\left(\frac{1}{2}+\frac{1}{3}\right)}_{2\text{个},~\geqslant \frac{1}{4}}+\underbrace{\left(\frac{1}{4}+\frac{1}{5}+\frac{1}{6}+\frac{1}{7}\right)}_{4\text{个},~\geqslant \frac{1}{8}}+\cdots+\underbrace{\left(\frac{1}{2^{k-1}}+\frac{1}{2^{k-1}+1}+\cdot+\frac{1}{2^{k}-1}\right)}_{2^{k-1}\text{个},~\geqslant \frac{1}{2^k}}\\
  &> 1\times \frac{1}{2}+ 2\times \frac{1}{4}+4\times \frac{1}{8}+\cdots+2^{k-1}\times \frac{1}{2^k}=\frac{k}{2}.
  \end{aligned}
  \]
  所以，对任意的 $M$，我们总可以选取很大的 $n$，使得 $a_n\geqslant M$，这说明调和级数是发散的。
  我们发现证明从技术上仍然和庄子的二分法相似，究其根本，是因为二分之后求和变得容易计算。
  可计算性将在很多数学问题中都是头等重要的事情，我们后面会数次遇到类似的事情。

:::

我们收集与极限定义相关的一些简单性质，我们对距离空间 $(X,d)$ 中的点列来陈述这些性质，
它们自然的对实数的序列也成立：

::: proposition
给定距离空间 $(X,d)$，$\{x_n\}_{n\geqslant 1}$ 是 $X$ 中点的序列，我们有

- 1\) 如果 $\{x_n\}_{n\geqslant 1}$ 收敛，那么它的极限唯一，
  即若 $\displaystyle\lim_{n\rightarrow \infty} x_n=x$
  并且 $\displaystyle\lim_{n\rightarrow \infty} x_n=y$，
  那么 $x=y$。

- 2\) 任意改变序列中有限项之后，不会改变序列的极限，
  即若 $\displaystyle\lim_{n\rightarrow \infty} x_n=x$，
  $\{y_n\}_{n\geqslant 1}$ 是另外一个点列，
  其中当 $n\geqslant N_0$ 时，$y_n=x_n$，
  那么 $\{y_n\}_{n\geqslant 1}$ 也收敛并且
  $\displaystyle\lim_{n\rightarrow \infty} y_n=x$。

- 3\) 假设 $1\leqslant n_1 < n_2<\cdots <n_k<\cdots$
  是一列上升的指标，对 $k\geqslant 1$，$y_k=x_{n_k}$，
  那么点列 $\{y_k\}_{k\geqslant 1}$ 称作是 $\{x_n\}$ 的**子列**，
  子列也经常写成 $\{x_{n_k}\}_{k\geqslant 1}$。
  一个收敛点列的子列也收敛到同一个极限，
  即若序列 $\{x_n\}_{n\geqslant 1}$ 是收敛的，
  那么子列 $\{x_{n_k}\}_{k\geqslant 1}$ 也收敛并且
  $\displaystyle\lim_{n\rightarrow \infty} x_n
=\lim_{k\rightarrow \infty} x_{n_k}$。

- 4\) 如果实数数列 $\{x_n\}_{n\geqslant 1}$ 是收敛的，那么它是有界的。
  （在距离空间中我们也可以定义有界性，但是这里我们只对实数陈述这个事实）

- 5\)（否定命题的叙述，重要）
  假设 $\{x_n\}_{n\geqslant 1}$ 的极限不是 $x$（可以不收敛），
  这个命题用数学的语言说就是：存在 $\varepsilon>0$，
  对任意的 $N\geqslant 1$，总存在 $n\geqslant N$，使得 $d(x_n,x)\geqslant \varepsilon$。

:::

::: proof
我们逐条的进行论证。
这些证明是简单的，但是对于第一次接触极限的同学，应该坚持把证明写完整以熟悉这种语言。

- 1\) 任意给定 $\varepsilon>0$，根据极限的定义，存在 $N_1\geqslant 1$，
  使得对任意的 $n\geqslant N_1$，我们都有 $d(x_n,x)<\varepsilon$，也存在 $N_2 \geqslant 1$，
  使得对任意的 $n\geqslant N_2$，我们都有 $d(x_n,y)<\varepsilon$。
  那么，对于 $n_0=\max(N_1,N_2)$，
  我们有 $d(x_{n_0},x)<\varepsilon$ 和 $d(x_{n_0},y)<\varepsilon$ 同时成立。
  从而，根据三角不等式，我们有
  \[
  d(x,y)<d(x_{n_0},x)+d(x_{n_0},y)<2\varepsilon.
  \]
  由于 $\varepsilon$ 是任意选取的，所以 $d(x,y)=0$，所以 $x=y$。

- 2\) 对任意给定的 $\varepsilon>0$，我们想要找一个 $N\geqslant 1$，使得对任意的 $n\geqslant N$，
  我们都有 $d(y_n,x)<\varepsilon$。
  根据极限的定义，对于这个 $\varepsilon$，存在 $N_1\geqslant 1$，使得对任意的 $n\geqslant N_1$，
  我们都有 $d(x_n,x)<\varepsilon$。
  我们只需要令 $N=\max(N_0,N_1)$，此时，当 $n\geqslant N$ 时，我们有
  \[
  d(y_n,x)=d(x_n,x)<\varepsilon.
  \]

- 3\) 我们将 $\{x_n\}_{n\geqslant 1}$ 的极限记做 $x$，
  为了证明 $\lim_{k\rightarrow \infty} x_{n_k}=x$，我们任选 $\varepsilon>0$。
  根据 $\{x_n\}_{n\geqslant 1}$ 的极限的定义，存在 $N\geqslant 1$，使得对任意的 $n\geqslant N$，
  $d(x_{n},x)<\varepsilon$。
  那么，对任意的 $k\geqslant N$，根据 $n_k\geqslant k\geqslant N$，
  我们知道 $d(x_{n_k},x)<\varepsilon$，从而 $\lim_{k\rightarrow \infty} x_{n_k}=x$。

- 4\) 假设 $\displaystyle\lim_{n\rightarrow \infty} x_n=x$，根据定义，对 $\varepsilon=1$，存在 $N$，
  使得当 $n\geqslant N$ 时，我们有 $|x_n-x|\leqslant 1$。
  特别地，对一切满足 $n\geqslant N$ 的指标 $n$，$x_n$ 都落在区间 $[x-1,x+1]$ 中，这是有界的。
  对于 $n=1,2,\cdots,N-1$，这是有限多个数，它们自然有界，所以数列本身有界。

最后一个命题5)是基本的（但是别扭）逻辑。
:::

::: remark*
对于 ${\rm 4)}$，我们注意到如果一个数列是有界的，
那么它不一定是收敛的，比如说 $x_n=(-1)^n$ 所给出的数列。
但是，（后面会证明）如果一个数列是有界的，那么它一定包含着收敛的子列。

极限是我们在高等数学学习中所最先接触的几个数学对象之一。
在数学中，对于每一个数学对象（例如极限），
我们会例行公事般地考虑它的一些常见的性质。
比如说，这个对象最基本的例子是什么，
这种对象是否存在，
如果存在的话它是否具有唯一性，
它的子对象和商对象
（如果有的话）都具有什么性质（比如说遗传了原来的对象的什么性质），
这个对象的可计算性以及在特定映射下的行为等等。
作为例子，我们刚刚见到一个点列的子对象（即子列）遗传了点列的收敛性（和有界性）。
尽管这是一种八股文一般的讨论方式
（Bourbaki学派是这种方式最忠实的实践者[^1]），
但是是非常有效率的一种学习和记忆方式，
我们在课程上会尽量的按照这种习惯来学习。
特别要强调的是，每一个定义大家都应该搞清楚最基本的例子是什么。
:::

在实数 $\mathbb{R}$ 上，我们有四则运算和序关系，我们自然要研究它们与极限的关系

::: proposition [四则运算与序关系的交换性]
假设 $\{x_n\}_{n\geqslant 1}$ 和 $\{y_n\}_{n\geqslant 1}$ 是两个收敛的实数数列，
那么我们有

- 1\) 数列 $\{x_n+y_n\}_{n\geqslant 1}$ 收敛并且
  $\displaystyle\lim_{n\rightarrow \infty}(x_n+y_n)=\lim_{n\rightarrow \infty}x_n+\lim_{n\rightarrow \infty}y_n$。

- 2\) 数列 $\{x_n-y_n\}_{n\geqslant 1}$ 收敛并且
  $\displaystyle\lim_{n\rightarrow \infty}(x_n-y_n)=\lim_{n\rightarrow \infty}x_n-\lim_{n\rightarrow \infty}y_n$。

- 3\) $\{x_n\cdot y_n\}_{n\geqslant 1}$ 收敛并且
  $\displaystyle\lim_{n\rightarrow \infty}(x_n\cdot y_n)=\lim_{n\rightarrow \infty}x_n \cdot \lim_{n\rightarrow \infty}y_n$。
  特别地，对任意实数 $\lambda\in \mathbb{R}$，
  $\displaystyle\lim_{n\rightarrow \infty}\lambda \cdot x_n=\lambda \cdot \lim_{n\rightarrow \infty}x_n$。

- 4\) 如果 $\displaystyle\lim_{n\rightarrow \infty}y_n\neq 0$，则存在 $N$，
  使得当 $n \geqslant N$ 时，$y_n\neq 0$，
  那么数列 $\left\{\dfrac{x_n}{y_n}\right\}_{n\geqslant N}$ 收敛并且
  $\displaystyle\lim_{n\rightarrow \infty}\dfrac{x_n}{y_n}=\dfrac{\displaystyle\lim_{n\rightarrow \infty}x_n}{\displaystyle\lim_{n\rightarrow \infty}y_n}$。

- 5\) 如果对足够大的 $n$（即存在 $N$，使得 $n\geqslant N$ 时），有 $x_n\leqslant y_n$，
  那么
  $\displaystyle\lim_{n\rightarrow \infty}x_n\leqslant \displaystyle\lim_{n\rightarrow \infty}y_n$。

:::

::: proof
这几个命题的证明不困难，但是对初学者而言，细节的训练是重要的。
我们假设 $\displaystyle\lim_{n\rightarrow \infty}x_n=x$，
$\displaystyle\lim_{n\rightarrow \infty}y_n=y$。

- 1\) 任意给定 $\varepsilon>0$，我们要证明存在 $N$，使得对所有的 $n\geqslant N$，
  我们都有 $|(x_n+y_n)-(x+y)|<\varepsilon$。
  对于正数 $\dfrac{\varepsilon}{2}$ 而言，因为 $x_n\rightarrow x$，所以存在 $N_1$，
  使得对所有的 $n\geqslant N_1$，我们都有 $|x_n-x|<\dfrac{1}{2}\varepsilon$；
  因为 $y_n\rightarrow y$，所以存在 $N_2$，使得对所有的 $n\geqslant N_2$，
  我们都有 $|y_n-y|<\dfrac{1}{2}\varepsilon$。
  此时，我们可以选取 $N=\max(N_1,N_2)$，所以当 $n\geqslant N$ 时，我们有
  \[
  |(x_n+y_n)-(x+y)|\leqslant |x_n-x|+|y_n-y|<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon.
  \]

- 2\) 把上面证明中的适当位置的加号换成减号即可。

- 3\) 由于两个数列都收敛，所以它们都是有界的，所以存在一个常数 $C$，使得对任意的 $n\geqslant 1$，
  我们都有 $|x_n|\leqslant C$，$|y_n|\leqslant C$。为了证明极限存在，我们先做计算
  \[
  \begin{aligned}
  |x_ny_n-xy|&=|x_n(y_n-y)+(x_n-x)y|\leqslant |x_n||y_n-y|+|x_n-x||y|\\
  &\leqslant C\bigl(|y_n-y|+|x_n-x|\bigr).
  \end{aligned}
  \]
  任意给定 $\varepsilon$，我们可以选取 $N$，使得当 $n\geqslant N$ 时，
  $|x_n-x|<\varepsilon$ 和 $|y_n-y|<\varepsilon$ 同时成立，此时，对于 $n\geqslant N$，我们就有
  \[
  |x_ny_n-xy|\leqslant C(\varepsilon +\varepsilon)=2C\varepsilon.
  \]
  由于 $\varepsilon$ 可以任意选取，命题就得到了证明（实际上，为了把证明写的和定义完全一致，
  我们应该回头把原来的 $\varepsilon$ 替换成 $\dfrac{\varepsilon}{2C}$）。

- 4\) 这一条性质的证明我们留成作业。

- 5\) 我们可以利用反证法：如若不然，我们有 $x>y$，选取 $\varepsilon=\dfrac{|x-y|}{2}$，
  根据极限的定义，我们可以选取 $N$，使得当 $n\geqslant N$ 时，
  $|x_n-x|<\varepsilon$ 和 $|y_n-y|<\varepsilon$ 同时成立，从而对于任意一个这样的 $n$，我们都有
  \[
  x_n =(x_n-x)+x>x-\varepsilon=\frac{x+y}{2},
  \]
  \[
  y_n =(y_n-y)+y<y+\varepsilon=\frac{x+y}{2},
  \]
  从而，我们得到 $x_n>y_n$，矛盾！

:::

::: remark*
我们对命题本身稍加解释：

a) 在命题的 ${\rm 5)}$ 中出现的“对足够大的 $n$”的讲法，指的是“存在 $N$，使得 $n\geqslant N$ 时”，
   我们将经常使用这种分析中的“黑话”。

b) 命题 ${\rm 1)}$ 的等号左边说我们先逐项求和然后取极限，右边我们可以先求极限再求和，
   所以交换了求和和取极限这两种操作之后，我们得到了同样的结果。
   其他几个命题都是将极限符号和四则运算可以交换。
   在数学和物理的很多分支中，两种操作的顺序是否可交换的是很重要的，
   比如说在线性代数里两个矩阵的乘积何时可交换是很核心的话题，时空的弯曲与此有关，
   量子力学中的Heisenberg测不准原理也是。

c) 命题的 ${\rm 5)}$ 说的是 $\lim$ 与 $\leqslant$ 可以交换。
   如果我们要求对足够大的 $n$，有 $x_n<y_n$，那么取极限之后 $x< y$ 未必成立（试举一个反例，
   举反例是很重要的练习，尤其是接触新概念时，这不失为理解抽象概念的最好方式之一），
   即严格大小关系和极限不交换。
   另外，将 $\leqslant$ 换成 $\geqslant$ 结论也成立，
   课程后面这种平行的命题我们一般只选择证明其中的一条。

d) 在命题的 ${\rm 3)}$ 的证明中，
   我们不需要区别 $\varepsilon$ 和 $2C\varepsilon$ 或者 $10000\varepsilon$，
   这是因为 $\varepsilon$ 可以任意选取。这是数学分析的行规：$\varepsilon\approx10000\varepsilon$。

e) 这个性质最重要的应用是用于计算！通过交换极限和四则运算，
   很多复杂极限问题可以化成简单的四则运算问题（四则运算我们更熟悉）。
   比如说，我们要计算 $\displaystyle\lim_{n\rightarrow \infty} \dfrac{n^2+3n+2}{n^2+1}$，
   我们可以按照下面的步骤来做：
   \[
   \begin{aligned}
   \lim_{n\rightarrow \infty} \dfrac{n^2+3n+2}{n^2+1}&=\lim_{n\rightarrow \infty} \dfrac{1+\dfrac{3}{n}+\dfrac{2}{n^2}}{1+\dfrac{1}{n^2}}\\
   &= \dfrac{\displaystyle\lim_{n\rightarrow \infty}\left(1+\frac{3}{n}+\frac{2}{n^2}\right)}{\displaystyle\lim_{n\rightarrow \infty}\left(1+\frac{1}{n^2}\right)}\\
   &=\dfrac{\displaystyle\lim_{n\rightarrow \infty} 1+\displaystyle\lim_{n\rightarrow \infty} \frac{3}{n}+\displaystyle\lim_{n\rightarrow \infty} \frac{2}{n^2}}{\displaystyle\lim_{n\rightarrow \infty} 1+\displaystyle\lim_{n\rightarrow \infty} \frac{1}{n^2}}=\frac{1+0+0}{1+0}=1.
   \end{aligned}
   \]

:::

我们现在回到最本质的一个问题：极限的存在性。我们有一种内蕴的方式来判断极限的存在性：

::: theorem [Cauchy 列与 Cauchy 判别准则]
假设 $\{x_n\}_{n\geqslant 1}$ 是实数的数列，那么如下命题等价：

- 1\) $\{x_n\}_{n\geqslant 1}$ 收敛；

- 2\) 对任意的 $\varepsilon>0$，存在 $N>0$，使得对任意的 $m,n>N$，都有 $|x_n-x_m|<\varepsilon$。

满足第二条性质的数列被称作是**Cauchy列**。
:::

为了证明这个重要的定理，我们先做一些准备工作。
如果实数数列 $\{x_n\}_{n \geqslant 1}$ 满足 $x_1\leqslant x_2\leqslant x_3\leqslant\cdots$，
就称之为**单调上升的**或者**递增的**；如果它满足 $x_1< x_2<x_3<\cdots$，
就称之为**严格单调上升的**或者**严格递增的**。
类似地可定义 **（严格）单调下降的**或者 **（严格）递减的**序列。

::: theorem
如果单调上升的实数序列 $\{x_n\}_{n\geqslant 1}$ 是有界的，
那么 $\{x_n\}_{n\geqslant 1}$ 收敛并且
$\displaystyle\lim_{n\rightarrow \infty}x_n=\sup_{n\geqslant 1}x_n$。
（单调下降的序列也满足类似的结论）
:::

::: proof
根据确界原理，我们令 $s=\sup_{n\geqslant 1}x_n$。
我们将证明对任意给定的 $\varepsilon$，存在 $N$，使得当 $n\geqslant N$ 时，$|x_n-s|<\varepsilon$。

在第二课确界原理证明之后的评注中，我们知道可以如下地刻画上确界：对 $\varepsilon>0$，存在 $x_{n_0}$，
使得 $s-\varepsilon < x_{n_0}$。
我们选取 $N=n_0$，根据单调性，对任意的 $n\geqslant N=n_0$，
我们有 $x_n \geqslant x_{n_0}>s-\varepsilon$。另外，根据上确界的定义，我们还有 $x_n\leqslant s$。
所以，对任意的 $n\geqslant N$，都有 $|x_n-s|< \varepsilon$。证毕。
:::

作为应用，我们证明级数 $\displaystyle\sum_{k=1}^\infty \frac{1}{k^2}$ 是收敛的：

::: example*
级数 $\displaystyle \frac{1}{1^2}+\frac{1}{2^2}+\frac{1}{3^2}+\frac{1}{4^2}+\cdots$ 是收敛的。

我们定义部分和 $\displaystyle x_n=\sum_{k=1}^n \frac{1}{k^2}$，
所谓的级数收敛指的就是 $\{x_n\}_{n\geqslant 1}$ 这个数列有极限。
这是一个单调上升的数列，根据上面的定理，我们只需要说明 $\{x_n\}_{n\geqslant 1}$ 有界即可：
\[
\begin{aligned}
0<x_n&=\frac{1}{1^2}+\frac{1}{2^2}+\frac{1}{3^2}+\frac{1}{4^2}+\cdots+\frac{1}{(n-1)^2}+\frac{1}{n^2}\\
&\leqslant 1+\frac{1}{1\times 2}+\frac{1}{2\times 3}+\frac{1}{3\times 4}+\cdots+\frac{1}{(n-1)\times n}+\frac{1}{n\times (n+1)}\\
&= 1+\left(\frac{1}{1}-\frac{1}{2}\right)+\left(\frac{1}{2}-\frac{1}{3}\right)+\left(\frac{1}{3}-\frac{1}{4}\right)+\cdots+\left(\frac{1}{n-1}-\frac{1}{n}\right)+\left(\frac{1}{n}-\frac{1}{n+1}\right)\\
&=2-\frac{1}{n+1}<2.
\end{aligned}
\]
:::

[^1]: 我们的香蕉空间网站也是忠实的实践者
