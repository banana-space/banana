---
title: 线性拓扑空间
---

<problems>
- “若$V$是LCH的，则$V$是有限维的”的证明中，式子“$O\subseteq Y+\frac12 O\subseteq 2Y+\frac14 O=Y=\frac14 O$”似乎有误，且证明中的 $X$ 似乎应为 $V$。
- 连续线性函数必然有界的逆命题的反例中，赋予左闭右开拓扑的 $\mathbb{R}$ 似乎不是线性拓扑空间（数乘 $-1$ 不连续）。
</problems>

::: definition [线性拓扑空间]
对$\mathbb{R}$上的线性空间$V$而言，考虑$V$上具有以下性质的拓扑$\tau$：

1. $+:V\times V\rightarrow V$作为积拓扑空间到原空间的函数是连续的；

2. $\cdot:\mathbb{R}\times V\rightarrow V$作为积拓扑空间到原空间的函数是连续的。

此时称$V$是线性拓扑空间。为了区分原点与零，记$V$的加法单位元为$\Theta$。
:::

::: remark*
对一般域$F$，如果能预先指定其上的拓扑，也可以同理定义线性拓扑空间。
方便起见，我们只讨论将要遇到的$\mathbb{R}$的线性空间。
:::

由于线性代数的结论很美观，这里也随之产生了相应的美丽结果。
首先，最基本的代数操作也都是拓扑性质良好的。

::: proposition
平移$T_{x_0}:V\rightarrow V,x\mapsto x+x_0$与数乘$D_\lambda:V\rightarrow V,x\mapsto \lambda\cdot x$
都是连续函数，从而除了$D_0$外都是自同胚。
:::

::: proof
真的很显然。
:::

平移是连续函数，而任意$x\in V$都是$T_x(\Theta)$，于是$\Theta$处的邻域基可以直接给出整个空间的基。
换言之，这个空间任意一个局部的结构都可以给出整体的结构。

::: proposition
线性拓扑空间必在$\Theta$处有一个对称基$\mathcal{B}_\Theta$，
即由$\forall x\in V(x\in B\leftrightarrow -x\in B)$这样的对称集构成的邻域基。
:::

::: proof
由于数乘是连续函数，特别的$D_{-1}$也是连续函数。
我们对每个$\Theta$的邻域$U$考虑$U\cap D_{-1}U$，全体这样的东西显然构成对称基。
:::

::: proposition
任给$\Theta$的开邻域$U$，必有$V=\bigcup_{\lambda\in\mathbb{R}}\lambda U$，
这里$\lambda U$是$D_\lambda(U)$的缩写。
:::

::: proof
对任何$x\in V$，由于$D_0$当然连续，
$0\cdot x=\Theta$指出存在$\delta\in\mathbb{R}$使得$x\in\delta^{-1}U$。（开球构成基的推论）
:::

::: proposition
$V$是$T_2$空间，当且仅当每个单点集都是闭集，当且仅当$\Theta$处全体对称邻域的交是$\{\Theta\}$。
:::

::: proof
显然$T_2$推出单点集是闭集。

如果单点集都是闭集，则任给$x\not=\Theta\in V$，$\{v\in V|v\not=x\}$是$\Theta$的开邻域，
作对称化后不包含$x$，因此$\Theta$处全体对称邻域的交只能是$\{\Theta\}$。

如果$V$不是$T_2$空间，则存在两点$x_1$与$x_2$，包含$x_1$的开集与包含$x_2$的开集必有交，
平移后得到存在$x$，包含$\Theta$的开集与包含$x$的开集必有交。
如果有一个$\Theta$处的对称邻域不包括$x$，将它平移到$x$处得到的开集与它自己必须有交，
而这个交集必是$\Theta$处的另一个对称邻域平移到$\frac12 x$处的开集。
将它平移到$\Theta$与$x$处将得到分离这两点的两个开集，矛盾。
:::

::: proposition
任何$f:V_1\rightarrow V_2$连续当且仅当在它$V_1$的任意一点处连续。
:::

::: proof
平移可知一点连续则处处连续。
:::

对于比较好的有限维线性拓扑空间，我们仍然可以断言它在各种意义上都和$\mathbb{R}^n$看不出区别。

::: theorem
$n$维$T_2$线性拓扑空间必同胚于装配欧氏拓扑的$\mathbb{R}^n$。
:::

::: proof
对$n$归纳，随便选取一个基，容易证明用这基从$\mathbb{R}^n$表示出$V$的函数恰好是同胚。
:::

当然，$T_2$也可以换成别的一些条件，这里举一个简单的例子。

::: theorem
若$V$是LCH的，则$V$是有限维的，进而同胚于对应的$\mathbb{R}^n$。
:::

::: proof
假定$\Theta$处有邻域$O$，其闭包为紧集。
不妨假定$O$对称，且$\forall\lambda\in[-1,1](\lambda O\subseteq O)$。
紧致性告诉我们存在某个$n$个$x_i$使得$\mathrm{Cl}(O)\subseteq\bigcup_{i}(x_i+\frac12 O)$，
于是我们来考察子空间$Y=\mathrm{span}\{x_i\}$。

显然此时$\frac12 O\subseteq Y+\frac14 O$，
于是$O\subseteq Y+\frac12 O\subseteq 2Y+\frac14 O=Y=\frac14 O$，
进而$O\subseteq \bigcap_{n}(Y+\frac{1}{2^n}O)=\mathrm{Cl}(Y)=Y$，
于是$X=\bigcup_{\lambda\in\mathbb{R}}\lambda O\subseteq Y\subseteq X$，
这指出$X$就是这个有限维空间$Y$。
:::

对于任意线性拓扑空间的研究通常归于泛函分析，不过我们也可以对其连续函数的性质稍作讨论。
值得注意的是，无穷维空间的许多性质与有限维大不相同。以下出现的空间皆默认是线性拓扑空间。

::: definition [有界性]
称一个$E\subseteq V$是有界的，
若对每个$\Theta$的开邻域$U$都存在$\mu>0$使得$\forall \lambda>\mu(E\subseteq \lambda U)$。

称函数$T:X\to Y$是有界的，若它将$X$的有界子集映为$Y$的有界子集。
:::

有界性几乎是线性连续函数的本质特征。然而，在这里并不是。

::: theorem
连续线性函数$T:X\to Y$必然有界。然而，逆命题不成立。
:::

::: proof
记$X$的原点为$\Theta$，$Y$的原点为$\theta$。
对有界集$E\subseteq X$，$\theta$的邻域$U$的原像$T^{-1}(U)$是$\Theta$的邻域，
因此$E\subseteq\delta T^{-1}(U)$给出$T(E)\subseteq\delta U$，这说明$T(E)$有界。

为了给出逆命题的反例，我们需要一个有界线性的不连续函数。
我们考察$id:\mathbb{R}\to\mathbb{R}$，
但第一个$\mathbb{R}$
赋予正常的序拓扑（开区间为基的拓扑）而第二个赋予左闭右开拓扑（左闭右开区间为基的拓扑）。
:::

逆命题不成立是因为我们要求太少；在线性度量空间中，这个逆命题成立。
另一方面，如果我们考虑的不是一般的函数而是特殊的泛函，这个定理成立。

::: theorem
考虑线性泛函$T:V\to\mathbb{R}$，
我们有$T$连续当且仅当$\mathrm{ker}(T)$是闭集当且仅当它在原点的一个邻域内有界。
:::

::: proof
若$T$连续，则$\mathrm{ker}(T)=T^{-1}(\{0\})$是闭集的原像集，显然必须是闭集。

若$\mathrm{ker}(T)$是闭集，
则存在$x\in V$和$\Theta$的开邻域$U$使得$(x+U)\cap\mathrm{ker}(T)=\varnothing$，
我们不妨设$U$是对称的，且$\forall\lambda\in[-1,1](\lambda U\subseteq U)$。
这时，$T(U)$一定是关于$0$对称的区间；若它恰好也有界我们就证毕了；否则，若$T(U)=\mathbb{R}$，
那么$\exists y\in U$使得$T(y)=T(x)$，进而$x-y\in\mathrm{ker}(T)$，
这指出$(x+U)\cap\mathrm{ker}(T)$不空，矛盾。

若$T$在$\Theta$的邻域$U$内有界，即$|T(U)|\leq k$。
对每个$\epsilon\in(0,k)$显然$T^{-1}((-\epsilon,\epsilon))$包含全体$\lambda U$，
这里$\lambda\in(0,\frac{\epsilon}{k})$；这指出$T$在$\Theta$处是连续的，因而也处处连续。
:::

因此，研究线性拓扑空间的对偶空间，乃至于其二重对偶空间上的拓扑结构是极有意义的。
