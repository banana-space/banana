---
title: 归纳与递归
notices:
  - name: 问题
    items:
      - 定理“良基归纳法，真类版本”的证明中，第 2 条改写式末尾的 $\forall x(\varphi_X(x)\to\varphi_X(s))$ 似乎应为 $\forall x(\varphi_X(x)\to\varphi_S(x))$。
---

我们现在来考察良基关系的一些重要性质。首先，我们来指出良基的一个重要等价定义。

::: theorem [良基归纳法]
以下两种对带有二元关系$R\subseteq X\times X$的集合$X$的描述等价：

1. $\forall S\subseteq X(S\not=\varnothing\rightarrow \exists s\in S\forall x\in S(\neg xRs))$

2. $\forall S\subseteq X(\forall x\in X(\forall y\in X(yRx\to y\in S)\to x\in S)\to S=X)$

第一条性质称作经典良基，第二条性质称作良基归纳法。
:::

::: proof
$1\to 2$：反证。
如果存在$S\subsetneqq X$满足$\forall x\in X(\forall y\in X(yRx\to y\in S)\to x\in S)$，
我们对$X\backslash S\not=\varnothing$使用$1$得到其中的$s$，
它应该满足条件$s\not\in S$和$\forall x\in X(x\not\in S\to\neg xRs)$，
后者逆否得到$\forall x\in X(xRs\to x\in S)$，由$S$满足的式子我们知道这推出$s\in S$，产生矛盾。

$2\to 1$：反证，如果存在这个$S\not=\varnothing$满足$\forall s\in S\exists x\in S(xRs)$，
我们再考虑一个集合$T=\{x\in X|x\not\in S\wedge \forall y\in X(yRx\to y\not\in S)\}$，
不难验证$T$满足$\forall x\in X(\forall y\in X(yRx\to y\in T)\to x\in T)$。
因此$2$指出$T=X$，然而$S\cap T=\varnothing$，因此$S=\varnothing$，矛盾。
:::

::: remark*
$2\to 1$的反证法是必要的，$1\to 2$的反证法则不是必要的。
:::

在没有选择公理时，下面的条件不足以与前两个条件等价。
我们需要一个选择公理的弱化形式，它称作依赖选择公理（axiom of Dependent Choice）。

::: definition [DC]
给定带二元关系$R\subseteq X\times X$的集合$X$，如果$\forall x\in X\exists y\in X(yRx)$，
则存在$\{x_n|n\in\mathbb{N}\}\subseteq X$使得$\forall n\in\mathbb{N}(x_{n+1}Rx_n)$。
:::

::: remark*
即使看起来如此自然，它仍然是ZF不可证明的一个命题。
:::

::: theorem
称$\neg\exists \{x_n|n\in\mathbb{N}\}\subseteq X\forall n(x_{n+1}Rx_n)$这一条件为不存在无穷降链。

在ZF中，良基推出不存在无穷降链；在ZF+DC中，不存在无穷降链推出良基。
:::

::: proof
存在无穷降链与经典良基显然矛盾，用DC和经典良基的否定可以轻松得到无穷降链的存在性。
:::

接下来，我们指出ZF中最自然的一个良基关系。

::: theorem
$(X,\in|_{X\times X})$是良基关系，这里$\in|_{X\times X}=\{(x,y)\in X\times X|x\in y\}$。
:::

::: proof
由公理(Fund)显然。
:::

当然，我们还是想要声明某种$\in$的归纳法，但$\in$是个真类，
因此我们还得论述上面良基归纳法对于某些真类仍然成立。

::: definition
真类$X$上的二元关系$R$如果满足$\forall y\exists x\forall z(zRy\leftrightarrow z\in x)$，
则称$R$是set-like的二元关系。
:::

::: theorem [良基归纳法，真类版本]
以下三种对带有set-like二元关系$R\subseteq X\times X$的真类$X$的描述等价：

1. $\forall s\subseteq X(s\not=\varnothing\rightarrow \exists t\in s\forall x\in s(\neg xRt))$

2. $\forall S\subseteq X(\forall x\in X(\forall y\in X(yRx\to y\in S)\to x\in S)\to S=X)$

3. $\forall S\subseteq X(S\not=\varnothing\rightarrow \exists s\in S\forall x\in S(\neg xRs))$

第一条和第三条性质称作经典良基，第二条性质称作良基归纳法。
:::

::: remark*
我们默认大写字母是类而小写字母是集合，这里$X$是句子$\varphi_X(x):x\in X$，
$R$是句子$\varphi_R(x,y):(x,y)\in R$，
$R$是$X$上的二元关系指的是$\forall x\forall y(\varphi_R(x,y)\to(\varphi_X(x)\wedge\varphi_X(y)))$。
:::

::: proof
我们重新写这两个东西。

1. $\forall s(\forall x(x\in s\to \varphi_X(x))\to \exists x(x\in s)\to\exists t(t\in s\wedge\forall x(x\in s\to\neg\varphi_R(x,t))))$

2. $\forall x(\varphi_S(x)\to\varphi_X(x))\to(\forall x(\varphi_X(x)\to\forall y(\varphi_X(y)\to \varphi_R(y,x)\to\varphi_S(y))\\\to\varphi_S(x)))\to\forall x(\varphi_X(x)\to\varphi_X(s))$

3. $\forall S(\forall x(x\in S\to \varphi_X(x))\to \exists x(x\in S)\to\exists s(s\in S\wedge\forall x(x\in S\to\neg\varphi_R(x,s))))$

接下来的证明大致思路和上面一样。

$1\to 2$：反证，假定$\exists x(\varphi_X(x)\wedge\neg\varphi_S(x))$，
由set-like知存在$z$满足$\forall w(\varphi_R(w,x)\leftrightarrow w\in z)$。
如果$z$中不存在与$x$满足同样条件的$w$，则对$z\cup\{x\}$应用集合版本的定理推出矛盾；如果存在，
则应用$1$取出极小元，记之为$x'$，又作$z'$，化归为前一情况。

$2\to 3$：反证，只是上面的集合$T$变成了同样定义的$\varphi_T$，其余照旧。

$3\to 1$：显然。
:::

::: corollary [$\in$的归纳法]
如果一个性质$P$满足$\forall y\in x(P(y))\to P(x)$，则$\forall x(P(x))$。
:::

有了归纳法，接下来就是递归定义。这里的操作步骤其实就是在推广$\mathbb{N}$上的递归定义。

::: theorem [递归定义原理]
给定配有良基关系的集合$(X,<)$。
若有函数$G:X\times Y^{<X}\to Y$，这里$Y^{<X}=\{f:A\to Y|A\subseteq X\}$是全体部分函数构成的集合；
则存在唯一的函数$F:X\to Y$，满足$\forall x\in X(F(x)=G(x,F|_{X[x]}))$，
这个$X[x]$指的是$x$定义的真前段。
:::

::: proof
显然，我们还是需要用一大堆$f_x:X[x]\cup\{x\}\to Y$来近似$F$，
因此我们就来证明
$\forall x\in X\exists f_x:X[x]\cup\{x\}\to Y(\forall z\in X[x](f_x(z)=G(z,f_x|_{X[z]}))\wedge f_x(x)=G(x,f_x|_{X[x]}))$。
我们加入$z<x\to f_z=f_x|_{X[z]\cup\{z\}}$的要求进行加强归纳，根据归纳法，
接下来需要证明$\forall z\in X[x]\exists f_z\to\exists f_x$和$f_x|_{X[z]\cup\{z\}}=f_z$，
而不难意识到我们只需要令$f_x(z)=G(z,f_z)$，它们合起来已经定义了$f_x|_{X[x]}$，
所以继续要求$f_x(x)=G(x,f_x|_{X[x]})$即可。最后，我们做$F(x)=f_x(x)$，余下的唯一性验证是简单的。
:::

自然，我们也有真类版本的定理。

::: theorem [递归定义原理，真类版本]
给定配有良基set-like关系的类$(X,R)$。
若有类函数$G:X\times Y^{RX}\to Y$，
这里$Y^{RX}=\{f:A\to Y|A\subseteq X\}$是全体从集合$A$出发的部分函数构成的类；
则存在唯一外延的类函数$F:X\to Y$，满足$\forall x\in X(F(x)=G(x,F|_{X[x]}))$，
这个$X[x]$指的是$x$定义的真前段。
:::

::: remark*
注意，如果$R$不是set-like关系，$Y^{RX}$就不是个类了。
这里强调唯一外延，是因为这个类函数的内涵即其定义公式显然不是唯一的。
:::

::: proof
只要将上述证明过程写成一句话：
$F(x)=y$就是
$\exists X[x](\forall z\in X(zRx\\\leftrightarrow z\in X[x])\wedge\exists f:X[x]\to Y(\forall z\in X[x](f(z)=G(z,f|_{X[x][z]}))\wedge y=G(x,f)))$，
这里$X[x][z]=\{t\in X[x]|tRz\}$真的是一个集合上良基关系给出的真前段。
:::

::: corollary [$\in$的递归定义原理]
若有类函数$G:\mathbf{V}\to\mathbf{V}$，则存在唯一的类函数$F:\mathbf{V}\to\mathbf{V}$，
满足$\forall x\in X(F(x)=G(F|_{x}))$。注意此时$x=\mathbf{V}[x]=\mathrm{dom}(F|_x)$。
:::

最后，我们来证明一个重要的定理，它允许我们把良基集实现为一个传递集。

::: definition
我们将$(x,\in)$的$\in$是传递的简称为$x$是传递的，
记为$\mathrm{isTrans}\\(x):\,\,\forall y(y\in x\rightarrow y\subseteq x)$。
我们用同一个公式定义一个真类的传递性。

我们称满足$X[x]=X[y]\to x=y$的关系为外延关系。我们用同一个公式定义一个真类的外延性。
:::

::: theorem [Mostowski坍塌定理]
给定外延良基集$(X,<)$，存在传递集$T$，使得$(T,\in)$与之序同构。
:::

::: proof
只要能理解为什么这个定理叫做坍塌就好了。
我们递归地令这个序同构$\pi:X\to T$为$\pi(x)=\{\pi(y)|y<x\}$。
:::

它同样有真类版本的定理。

::: theorem [Mostowski坍塌定理，真类版本]
给定配有外延良基set-like关系的真类$(X,R)$，
存在类函数$F:X\to\mathbf{V}$见证它到$(\mathbf{V},\in)$的序嵌入。
:::

::: remark*
存在传递真类与之同构不如这个叙述强，因为前者会被理解为一个元定理，
这个序同构能否实现为一个公式定义的类函数是未知的。
:::

::: proof
显然，我们正在使用递归定义原理的真类版本，所以需要正确地决定这个$G(x,\pi_{X[x]})=\pi(x)$。
我们还是想要$\pi(x)=\{\pi(y)|y\in X[x]\}$，因此其实我们会写出$G(x,f)=\mathrm{ran}(f)$。
今后我们会默认给出的信息足以确定这些构造中$G$的具体公式。
:::
