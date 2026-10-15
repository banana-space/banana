---
title: 赋范线性空间
notices:
  - name: 问题
    items:
      - 本页面转换自定理与证明环境互相嵌套的原文，相应部分的结构需要整理。
---
现在，我们不但要求线性空间上有拓扑，还要求这个拓扑是一个与线性结构相合的度量给出的。

::: definition [线性度量空间]
如果$\mathbb{R}$的线性空间$V$上装备了一个度量$d$，且满足：

1. $+:V\times V\rightarrow V$作为积度量空间到原度量空间的函数是连续的；

2. $\cdot:\mathbb{R}\times V\rightarrow V$作为积度量空间到原度量空间的函数是连续的。

则称$V$是一个线性度量空间。
:::

::: theorem
线性度量空间之间的线性映射连续当且仅当有界。
:::

::: proof
连续则有界早已得到，我们现在要利用度量和有界来推出原点处连续，进而得到处处连续。事实上只需要处理开球，而有界性此时可以直接描述为被开球包住。
:::

这里对于度量的要求是比较弱的；我们也可以要求更强的度量。

::: definition [范数与度量]
我们首先定义$\mathbb{R}$的线性空间$V$上的另一种函数$||:V\to\mathbb{R}$，它在满足这些条件时称作度量：

1. $|\Theta|=0$且$\forall x\not=\Theta(|x|>0)$

2. $|x+y|\leq|x|+|y|$

3. $\forall r\in\mathbb{R}(|rx|=|r|\cdot|x|)$

每个范数都对应一个度量$d(x,y)=|x-y|$。反之，每个满足以下条件的度量也可以对应一个范数$|x|=d(x,\Theta)$：

1. $\forall x\forall y\forall z(d(x,y)=d(x+z,y+z))$

2. $\forall x\forall y\forall r\in\mathbb{R}(|r|d(x,y)=d(rx,ry))$

带有度量的线性空间称作赋范线性空间。
:::

::: theorem
赋范线性空间在范数给出的度量下成为度量线性空间。
:::

::: proof
显然的。
:::

显然，范数对应的度量给出的线性度量空间的性质要比一般线性度量空间好得多，因此我们总是喜欢考虑赋范线性空间。

赋范线性空间$X$中，最有趣的结构莫过于单位球$\mathcal{S}_1=\{x\in X||x|=1\}$。

::: theorem
赋范线性空间是有限维的，当且仅当其单位球是紧致的。
:::

::: proof
我们需要一个重要的引理，它将在这个主题下反复出现。

**引理（Riesz）。** 若赋范线性空间$X$有一真闭子空间$X_0$，则$\forall\epsilon\in(0,1)\exists x_\epsilon\in \mathcal{S}_1\forall x\in X_0(|x-x_\epsilon|\geq 1-\epsilon)$。

**证明。** 固定$x_0\in X\backslash X_0$，记$d_0=d(x_0,X_0)=\mathrm{inf}_{x\in X_0}|x-x_0|>0$。由于$d_0$是下确界，存在$x_1\in X_0$满足$d_0\leq |x_0-x_1|\leq d_0+\frac{d_0\epsilon}{1-\epsilon}$，我们令$x_\epsilon=\frac{x_0-x_1}{|x_0-x_1|}$。

注意$x\in X_0\to\bar{x}=x_1+|x_0-x_1|x\in X_0$，我们有$|x-x_\epsilon|=\frac{|x_0-\bar{x}|}{x_0-x_1}\geq\frac{d}{|x_0-x_1|}\geq 1-\epsilon$。

现在，若$X$不是有限维的，任选$x_1\in\mathcal{S}_1$，考虑它张成的闭子空间$X_1=\mathrm{span}\{x_1\}$，无穷维说明它真，于是Riesz引理给出一个$x_2\in\mathcal{S}_1$满足$|x_1-x_2|\geq\frac12$。

我们又来考虑真闭子空间$X_2=\mathrm{span}\{x_1,x_2\}$，然后用Riesz取$x_3$，然后继续看$X_3$，一直进行下去，我们就得到了一列$\{x_n\}\subseteq\mathcal{S}_1$，它们两两之间距离都至少是$\frac12$，因而这个点列没有收敛子列，与$\mathcal{S}_1$的紧致性矛盾。

另一个方向是显然的。
:::

Riesz引理没说这个赋范线性空间$X$是有限维的，换句话说对无限维赋范线性空间也能用。由于有限维的对象基本就是$\mathbb{R}^n$，大家都知道怎么算，但是无穷维的对象不单是$\mathbb{R}^\omega$之流，还有各种连续函数空间、可积函数空间、对偶空间、二重对偶空间等等，所以大家格外看重这种没有假定维数的结论。

::: definition [Banach空间]
完备赋范线性空间称为巴纳赫空间。
:::

各种巴纳赫空间构成了泛函分析考察的主要对象。
