---
title: 泛代数概述
---

本节介绍泛代数。

在平凡的意义下，抽象代数是指讨论群、环、域三种结构，以及它们相关的G-集合、模、代数、
线性空间等等结构的性质的学问。
然而，泛代数当然要体现出泛，于是我们就来观察：作为语言，群、环、域有何特点？

答案是：这些语言没有谓词。因此，我们称没有谓词的语言的结构为（泛）代数。
注意，由于没有谓词，同态和嵌入现在是同一件事。

现在，我们来尽可能地将抽象代数中学到的东西在泛代数的语境下复现出来。
我们总是默认语言$\mathcal{L}=\{f_i|i\in I\}\cup\{\approx\}$。

::: definition [子代数]
给定一个代数$\mathcal{M}$和一个$N\subseteq M$，我们将$N$自然地赋予结构：

1. $f_i^N=f_i^M|_{N^n}$，其中$f_i$是$n$元函数。

2. $\approx^N=\approx^M\cap(N\times N)$，注意$\approx^M\subseteq M\times M$。

如果这样确实使$N$成为一个代数（换言之，$f_i^N$的值域确实包含于$N$），则称$N$为$M$的子代数，
记为$N\sqsubset M$。
:::

::: remark*
子代数的另一种定义是集合的自然嵌入$i:N\hookrightarrow M$是代数的同态。
:::

::: proposition
子代数的交还是子代数。
:::

::: remark*
证明是显然的，而这不难进而衍生出生成子代数的概念。
:::

::: definition [积代数]
给定两个代数$M$与$N$，我们将$S=M\times N$自然地赋予结构：

1. $f_i^S((x_1,y_1),(x_2,y_2),...,(x_n,y_n))=(f_i^M(x_1,...,x_n),f_i^N(y_1,...,y_n))$，
   其中$f_i$是$n$元函数。

2. $((x_1,y_1),(x_2,y_2))\in\approx^S\leftrightarrow (x_1,x_2)\in\approx^M\wedge(y_1,y_2)\in\approx^N$。

这样一定使$S$成为一个代数，称之为$M$与$N$的（二元）积代数。

给定一族代数$M=\{M_k|k\in K\}$，
我们将积集合$S=\prod_{k\in K}M_k=\{t:K\rightarrow M\}$自然地赋予结构：

1. $f_i^S(t_1,t_2,...,t_n)(k)=f_i^{M_k}(t_1(k),...,t_n(k))$，其中$f_i$是$n$元函数符号。

2. $(t_1,t_2)\in\approx^S\leftrightarrow \forall k\in K((t_1(k),t_2(k))\in\approx^{M_k})$。

这样一定使$S$成为一个代数，称之为这族代数的积代数。
:::

::: theorem [积的泛性质]
考虑全体代数和它们之间同态构成的范畴，积代数恰是积对象。
:::

::: remark*
这个定理对知道在说什么的人是废话，对不知道在说什么的人也是废话。
:::

::: definition [商代数]
给定代数$M$作为集合的一个等价关系$\sim\subseteq M\times M$，我们称它与代数一致，
并简称为一致等价关系，若

1. $x_1\sim y_1\wedge x_2\sim y_2\wedge...\wedge x_n\sim y_n\rightarrow f_i^M(x_1,...,x_n)\sim f_i^M(y_1,...,y_n)$，
   其中$f_i$是$n$元函数符号。

2. $\approx^M\subseteq \sim$。

给定代数$M$的一个一致等价关系$\sim$，我们可以给商集$N=M/\sim=\{[x]_\sim|x\in M\}$自然地赋予结构：

1. $f_i^N([x_1]_\sim,...,[x_n]_\sim)=[f_i^M(x_1,...,x_n)]_\sim$，其中$f_i$是$n$元函数符号。

2. $([x_1]_\sim,[x_2]_\sim)\in\approx^N\leftrightarrow (x_1,x_2)\in\approx^M$。

这样一定使$N$成为一个代数，称之为$M$商掉$\sim$所得的商代数。
:::

::: remark*
如果我们想按这个方式在群里商掉正规子群，或者在环上商掉理想，
就需要先把正规子群或者理想等价地变成一个一致等价关系，具体方式是和这两个理论相关的，
因此留予读者自证。
:::

::: theorem [商的泛性质]
在代数与同态构成的范畴中，
所有从$M$出发且将一致等价关系$\sim$映为平凡的$\approx$的态射都有唯一经过$M/\sim$的分解。
:::

::: remark*
和积一样，这个定理对知道在说什么的人是废话，对不知道在说什么的人也是废话。
:::

::: definition [核]
给定同态$\alpha:M\rightarrow N$，我们在$M$上定义一个一致等价关系，
称作这个同态的核$\mathrm{ker}(\alpha)$如下：

$x\sim y\leftrightarrow \alpha(x)\approx\alpha(y)$，这里$\sim$是$\mathrm{ker}(\alpha)$的缩写。
:::

::: theorem [同态基本定理]
若$\alpha:M\rightarrow N$是代数之间的同态，则可以作$\alpha=i\circ \beta\circ \pi$，其中

$\pi:M\twoheadrightarrow M/\mathrm{ker}(\alpha)$是商映射，
$\beta:M/\mathrm{ker}(\alpha)\rightarrow\mathrm{im}(\alpha)$是同构，
$i:\mathrm{im}(\alpha)\hookrightarrow N$是自然嵌入。
:::

::: remark*
这同时说了商映射是满射、像是子代数和商代数与像同构。证明是简单的。
:::

到此为止，我们把简单的抽代定理都移植过来了，但我们还可以做得更多。

::: theorem [Birkhoff's HSP Theorem]
一族$\mathcal{L}$结构$\mathcal{K}$恰好是满足一些全称量化自由变量后的原子等式组成的理论的全体模型，
当且仅当它们在同构、取子代数、取积代数和取商代数下始终封闭。
:::

::: remark*
H指的是同态像Homomorphic image，S指的是Subalgebra，P指的是Product。
同态基本定理指出同态像就是商的同构，所以在同态像下封闭等价于同构封闭且取商封闭。
:::

我们将满足一些全称量化自由变量后的原子等式组成的理论的全体模型的类称作等式初等类。
全称量化自由变量后的原子等式今后简称等式。

为了证明这个定理，我们首先需要发展更多的构造结构的方法。

::: definition [项代数]
在语言$\mathcal{L}$中，给出一集变量符号$\bar{x}$，记它们构成的全体项的集合为$T=T(\bar{x})$，
我们把它变成一个$\mathcal{L}$结构：

1. $f_i^T(t_1,...,t_n)=f_i(t_1,...,t_n)$，其中$f_i$是$n$元函数符号。

2. $(t_1,t_2)\in\approx^T\leftrightarrow t_1=t_2$

:::

现在，我们来考虑一些等式组成的理论$\Sigma$。

::: definition [自由代数]
我们在项代数$T(\bar{x})$上定义一个一致等价关系$\sim_\Sigma$：

$t_1\sim t_2\leftrightarrow \Sigma\vDash (t_1\approx t_2)$

称商代数$T(\bar{x})/\sim_\Sigma$为变量集$\bar{x}$上的$\Sigma-$自由代数，记为$F_\Sigma(\bar{x})$。
:::

它其实是环论里的多项式环的推广，因而也具有长得差不多的一个泛性质。

::: theorem [自由代数的泛性质]
把$\bar{x}$里的变量符号加入语言中作为常元，
考虑以所有满足$\Sigma$的代数$A$以及它们之间的同态构成的范畴，$F_\Sigma(\bar{x})$是这范畴的始对象。
:::

::: corollary
任给一个代数$A\vDash\Sigma$，一定有满同态$\alpha:F_\Sigma(A)\twoheadrightarrow A$。
:::

现在，我们来证明HSP定理。

::: proof [HSP 定理的证明]
显然，等式初等类关于上述四个操作封闭，所以只要证明反方向的定理成立。
我们考虑$\mathcal{K}$中所有结构都满足的等式，记为$\Sigma$。
我们再把全体$\Sigma$的模型做成一个包含$\mathcal{K}$的类，记为$\bar{\mathcal{K}}$。

**断言。** 任给一集变元符号$\bar{x}$，$F_\Sigma(\bar{x})\in\mathcal{K}$。

**断言的证明。** 显然$F=F_\Sigma(\bar{x})\in\bar{\mathcal{K}}$，所以这一断言并不平凡。
我们把全体$F$中的不同元素的对子做一个列举$\{([t_i(\bar{x})]_\sim,[s_i(\bar{x})]_\sim)|i\in I\}$。

这两个东西不同指的是$\neg(t_i\sim s_i)$，换言之$(t_i\approx s_i)\not\in\Sigma$。
于是存在$A_i\in\mathcal{K}$使得$A_i\not\vDash(t_i\approx s_i)$，
进而有$\bar{a}_i\subseteq A_i$使得$t_i^{A_i}(\bar{a}_i)\not\approx s_i^{A_i}(\bar{a}_i)$。

由于$A_i\in\bar{\mathcal{K}}$，
我们可以作$\beta_i:F_\Sigma(\bar{x})\rightarrow A_i$使得
$\beta_i(t_i(\bar{x}))=t_i^{A_i}(\bar{a}_i)$，
于是$\beta_i([t_i(\bar{x})]_\sim)\not\approx\beta_i([s_i(\bar{x})]_\sim)$，
进而把所有$\beta_i$合起来可以取得一个$\beta:F_\Sigma(\bar{x})\to\prod_{i\in I}A_i$。

由定义，$\beta$明显是个单射，而$\prod_{i\in I}A_i$明显在$\mathcal{K}$中。
这样，同态基本定理就指出$F_\Sigma(\bar{x})$是$\mathcal{K}$中一个代数的子代数，
于是由封闭性它也在$\mathcal{K}$中。

现在，任取一个$A\in\bar{\mathcal{K}}$，我们一定可以找一个满同态$\alpha:F_\Sigma(A)\to A$，
而前者在$\mathcal{K}$中，满和同态基本定理立刻指出$A$是这个代数的商代数，于是$A\in\mathcal{K}$，
于是$\mathcal{K}$与$\bar{\mathcal{K}}$相互包含，于是它们相等，
这指出$\mathcal{K}$是$\Sigma$定义的等式初等类。
:::

::: corollary
记$P(\mathcal{K})$为$\mathcal{K}$中任意代数的积全体组成的类，$S(\mathcal{K})$又加入全体子代数，
$H(\mathcal{K})$又加入全体同态像，
则包含$\mathcal{K}$的最小等式初等类恰好就是$H(S(P(\mathcal{K})))$。
:::
