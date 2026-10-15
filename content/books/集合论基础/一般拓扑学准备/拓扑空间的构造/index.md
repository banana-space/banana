---
title: 拓扑空间的构造
---
本节谈论最基础的拓扑空间的概念。

::: definition [拓扑空间]
一个拓扑空间是一个集合$X$与$\wp X$的一个子集$\mathcal{T}$组成的有序对$(X,\mathcal{T})$，其中$\mathcal{T}$中的元素称作开集，满足以下开集公理：

1. $\{\varnothing,X\}\subseteq\mathcal{T}$

2. $U\in\tau\wedge V\in\mathcal{T}\rightarrow (U \cap V)\in\mathcal{T}$

3. $\{U_i|i\in I\}\subseteq\mathcal{T}\rightarrow \bigcup_{i\in I}U_i\in\mathcal{T}$

在不引发歧义的时候，我们总是称$X$是一个拓扑空间，避而不谈其上的结构，而是通过声称$X$的某某子集是开集来间接指定这个结构。

如果$U$是开集，则称$X-U$是一个闭集。同样的，我们也可以说拓扑空间是$(X,\mathcal{C})$，其中$\mathcal{C}$中的元素称为闭集，满足以下闭集公理：

1. $\{\varnothing,X\}\subseteq\mathcal{C}$

2. $U\in\mathcal{T}\wedge V\in\mathcal{C}\rightarrow (U \cup V)\in\mathcal{C}$

3. $\{U_i|i\in I\}\subseteq\mathcal{C}\rightarrow \cap_{i\in I}U_i\in\mathcal{C}$

:::

首先我们来考虑能不能给出一部分的开集，让别的开集能据此生成出来。

::: definition [基与子基]
$\wp X$的子集$\mathcal{B}$将称为拓扑空间$(X,\mathcal{T})$的一组基，若

$\forall U\in \mathcal{T}\exists \{B_i|i\in I\}\subseteq \mathcal{B}(U=\bigcup_{i\in I}B_i)$

$\wp X$的子集$\mathcal{S}$将称为拓扑空间$(X,\mathcal{T})$的一组子基，若

$\mathcal{B}=\{\cap_{i=1}^{n} S_i|S_i\in \mathcal{S},n\in \mathbb{N}\}$是这拓扑空间的一组基。
:::

换言之，我们把开集公理减弱两次，第一次减弱取消掉并而用并来产生，产生基的概念；第二次减弱取消有限交而用有限交来产生，产生子基的概念。

我们有一些很重要的对基和子基的描述。

::: proposition
以下对基的描述等价。

1. $\mathcal{B}$是某个$(X,\mathcal{T})$的基。

2. $\forall x\in X\exists B\in\mathcal{B}(x\in B)$且$\forall x\in X\forall B_1,B_2\in \mathcal{B}(x\in B_1\cap B_2 \rightarrow \exists B_3\in B(x\in B_3\subseteq B_1\cap B_2))$

:::

::: proof
(1)->(2)：(i)由于$X\in\mathcal{T}$，我们一定有一组$\{B_i|i\in I\}\subseteq\mathcal{B}$使得$\bigcup_{i\in I}B_i=X$。于是$x\in X\rightarrow \exists i\in I(x\in B_i)$。(ii)显见$\mathcal{B}\subseteq\mathcal{T}$，故$B_1\cap B_2$是个开集，于是又有$\{B_i|i\in I\}\subseteq\mathcal{B}$使得$B_1\cap B_2=\bigcup_{i\in I}B_i$，而$x\in B_1\cap B_2\rightarrow \exists i\in I(x\in B_i)$，取所要的$B_3$为这个$B_i$即可。

(2)->(1)：我们肯定令$\mathcal{T}=\{\bigcup_{i\in I} B_i | B_i\in \mathcal{B}\}$，然后验证它们满足开集公理。(i)取$I=\varnothing$得到$\varnothing\in\mathcal{T}$；取$I=X$，每个$B_x$都是第一个性质保证的那个$B_x\ni x$，就得到$X\in\mathcal{T}$。(ii)注意证明$X\in\mathcal{T}$的技巧同样可以证明$B_1\cap B_2\in\mathcal{T}$，于是只要注意$(\bigcup_{i\in I}B_i)\cap(\bigcup_{j\in J}B_j)=\bigcup_{i\in I,j\in J}(B_i\cap B_j)$即可。(iii)由定义显然。
:::

我们也因此会说上面的$(X,\mathcal{T})$是由$\mathcal{B}$生成的拓扑。

::: proposition
以下对基的描述等价。

1. $\mathcal{B}$是$(X,\mathcal{T})$的基。

2. $\forall U\in\mathcal{T}\forall x\in U\exists B\in\mathcal{B}(x\in B\subseteq U)$

:::

::: proof
(1)->(2)：由基的定义显然。

(2)->(1)：同样的技巧，$U=\bigcup_{x\in U}B_x$。
:::

::: proposition
以下对子基的描述等价。

1. $\mathcal{S}$是某个$(X,\mathcal{T})$的子基。

2. $\bigcup_{S\in\mathcal{S}}S=X$

:::

::: proof
(1)->(2)：反证。如果$\exists x\in X-\bigcup_{S\in\mathcal{S}}S$，则由基的性质有一个基里的开集包含$x$，再由定义有有限个$S_i\in\mathcal{S}$它们交起来是这个基里的开集，从而包含这个开集，从而有$x$为元素，立即矛盾。

(2)->(1)：显然只要验证$\mathcal{B}=\{\cap_{i=1}^{n} S_i|S_i\in \mathcal{S},n\in \mathbb{N}\}$真的是一组基，方法是引用基的性质1。
:::

接下来，我们要考虑具有不同拓扑结构的同一个$X$上各个拓扑之间的比较。

::: definition [拓扑的粗细]
对两个拓扑空间$(X,\mathcal{T}_1)$与$(X,\mathcal{T}_2)$，我们通常称作$X$上的两种拓扑，定义$\mathcal{T}_1$细于$\mathcal{T}_2$，又称$\mathcal{T}_2$粗于$\mathcal{T}_1$，若$\mathcal{T}_2\subseteq \mathcal{T}_1$。
:::

我们会发现，基的粗细可以决定拓扑的粗细。

::: proposition [基的粗细]
设$\mathcal{B}_1$是$\mathcal{T}_1$的基，$\mathcal{B}_2$是$\mathcal{T}_2$的基，以下阐述等价：

1. $\mathcal{T}_1$细于$\mathcal{T}_2$

2. $\forall x\in X\forall B_2\in \mathcal{B}_2(x\in B_2\rightarrow \exists B_1\in \mathcal{B}_1(x\in B_1\subseteq B_2))$

:::

::: proof
(1)->(2)：此时$B_2$是$\mathcal{T}_1$里的开集，由基的性质2显然。

(2)->(1)：只要证明$\mathcal{T}_2$里每一个元素都是$\mathcal{T}_1$里一些元素的并。这由(2)加上熟知的在每个$x\in B_2$上取$B_{1_{x}}$的技巧还是显然的。
:::

接下来，我们介绍最简单四种拓扑空间的构造。

::: definition [子空间拓扑]
定义拓扑空间$(X,\mathcal{T}_X)$在其任意子集$Y\subseteq X$上的子空间拓扑为$(Y,\mathcal{T}_Y)$为：

$\mathcal{T}_Y=\{Y\cap U|U\in\mathcal{T}_X\}$
:::

良定性是显然的。此外，基可以继承下来。

::: proposition [子空间基]
若$\mathcal{B}_X$是$\mathcal{T}_X$的基，则$\mathcal{B}_Y=\{Y\cap B|B\in\mathcal{T}_X\}$是$\mathcal{T}_Y$的基。
:::

::: proof
运用基的性质2显然。
:::

::: definition [箱拓扑]
我们用一群拓扑空间$\{(X_i,\mathcal{T}_i)|i\in I\}$构造一个拓扑空间$(\prod_{i\in I}X_i,\mathcal{T_{box}})$为基$\{\prod_{i\in I}U_i|U_i\in\mathcal{T}_i\}$生成的拓扑。
:::

::: definition [积拓扑]
我们用一群拓扑空间$\{(X_i,\mathcal{T}_i)|i\in I\}$构造一个拓扑空间$(\prod_{i\in I}X_i,\mathcal{T}_{prod})$为子基$\{\prod_{i\in I}U_i|\exists j\in I\forall i\in I((i\not=j\rightarrow U_i=x_i)\wedge(U_j\in\mathcal{T}_j))\}$生成的拓扑。
:::

::: proposition [积拓扑与箱拓扑的比较]
一般情况下，箱拓扑比积拓扑细。

如果$I$是有限集，则$\{(X_i,\mathcal{T}_i)|i\in I\}$生成的$\mathcal{T_{box}}$与$\mathcal{T}_{prod}$是同一个拓扑。
:::

::: proof
只需要注意积拓扑的基是除了有限个$j$之外的$U_i$都等于$X_i$的那些积集，由基的粗细显。
:::

我们在不加特殊限制时，总是默认赋积拓扑而非箱拓扑。

::: definition [商拓扑]
在拓扑空间$X$上若有等价关系$\sim$，则可在商集$X/\sim$上定义拓扑，$U\subseteq X/\sim$是开集当且仅当$\{x\in X|[x]_{\sim}\in U\}$是$X$上的开集。
:::

::: definition [序拓扑]
我们现在随便考虑一个全序集$(X,<)$。我们将在上面建立一个由序关系决定的拓扑。

首先我们定义这些$X$的子集，它们统一称作区间：

1. $(a,b)=\{x|a<x<b\}$称为开区间。

2. $[a,b]=\{x|a\leq x\leq b\}$称为闭区间。

3. $[a,b)=\{x|a\leq x<b\}$称为左闭右开区间。

4. $(a,b]=\{x|a<x\leq b\}$称为左开右闭区间。

注意这和有序对的记号是重复的，读者应当联系上下文确定我们在谈论的究竟是哪一种对象。

我们做$\mathcal{B}$为以下三类区间形成的基：

1. $(a,b)$，其中$a,b$是随便两个元素。

2. $[a_0,b)$，其中$a_0$是最小元，如果存在。

3. $(a,b_0]$，其中$B_0$是最大元，如果存在。

验证这是基请读者自证。我们称这个基生成的拓扑为$X$上的序拓扑。
:::

::: definition [度量拓扑]
集合$X$上，满足如下要求的函数$d:X\times X\rightarrow \mathbb{R}^+$称为度量：

1. $\forall x,y\in X(d(x,y)=0\leftrightarrow x=y)$

2. $\forall x,y\in X(d(x,y)=d(y,x))$

3. $\forall x,y,z\in X(d(x,y)+d(y,z)\geq d(x,z))$

此度量将在$X$上以全体$B_r(x)=\{y\in X|d(x,y)<r\}$为基生成一个拓扑，称为$(X,d)$的度量拓扑。
:::

::: remark*
这将是我们要将来讨论的主要拓扑。
:::

现在，我们来考虑拓扑空间之间的映射。

::: definition [连续函数]
称函数$f:X\rightarrow Y$是连续函数，若对每个开集$O\subseteq Y$其原像$f^{-1}(O)=\{x\in X|f(x)\in O\}$也是$X$的开集。

若$f:X\rightarrow Y$是双射，且它与它的逆都是连续函数，则称$f$是一个同胚。若它是单射且在$f(X)$上为同胚，则称$f$是一个嵌入。
:::

最后，我们来定义一些常见的缩写。

::: definition
拓扑空间是几何空间的抽象化表述，所以$X$中的元素将被称为点。

在拓扑空间$X$中，包含一个点$x$的开集$U$又称为这个点的邻域。

在这拓扑的一组基中，包含这个点的全部开集，形成这个点的邻域基。

如果一些开集的并包含这空间的某个子集，就称这些开集形成这个子集的一个开覆盖。

开覆盖作为集族，其子集自然称作子开覆盖。

如果一个开覆盖里只有有限个开集，就称之为有限开覆盖。同样的，有可数子覆盖的定义。

$\mathrm{Cl}(A)$指的是包含$A$的全体闭集的交，它是包含$A$的最小闭集，称作$A$的闭包。
:::
