---
title: 偏序关系与 Zorn 引理
---

<problems>
- 良序集的定义中似乎应要求 $A$ 的每个非空子集都有最小元。
</problems>

对于集合$A$，$A$上的一个**序关系**指的是$A\times A$的子集$\mathcal{O}$，对于$(a,b)\in \mathcal{O}$，
我们把它写成$a\preceq b$，并且如下的性质成立：

1) （自反性）对任意的$a\in A$，$a\preceq a$（或者对任意的$a\in A$，$(a,a)\in \mathcal{O}$）；

2) （传递性）如果$a\preceq b$，$b\preceq c$，那么，
   $a\preceq c$（或者如果$(a,b),(b,c)\in \mathcal{O}$，那么，$(a,c)\in \mathcal{O}$）。

- 3\) 对任意的$a,b\in A$，如果$a\preceq b$，$b\preceq a$，那么，
  $a=b$（或者如果$(a,b),(b,a)\in \mathcal{O}$，那么，$a=b$）。

::: remark
偏序的偏一字，指的是对于$a,b\in A$，我们未必可以比较它们的大小，
即$a\preceq b$和$b\preceq a$可能都不成立。
如果对任意的$a,b\in A$，$a\preceq b$和$b\preceq a$至少一者成立，我们称之为**全序集**。
:::

给定偏序集$(A,\preceq)$以及$A$的子集$S\subset A$。
如果$a\in A$，使得对任意的$s\in S$，均有$s\preceq a$，我们称$a$是$S$的一个**上界**；
如果进一步$a\in S$，我们就称$a$是$S$的**最大元**。很明显，最大元如果存在必然唯一。
类似地，我们可以定义**下界**和**最小元**。

给定偏序集$(A,\preceq)$，如果$A$的每个子集$S$都有最小元，我们就称之为**良序集**。
很明显，良序集是全序集合（考虑具有两个元素的子集）。
对于良序集，我们有超限归纳法：

::: theorem [超限归纳法]
$(A,\preceq)$是良序集，$S\subset A$为子集。
作如下假设：给定$a\in A$，假设条件$x\prec a$可以推出$x\in S$，那么，这样的$a\in S$。那么，$S=A$。
:::

::: remark
符号$x\prec a$指的是$x\preceq a$但是$x\neq a$。
:::

::: proof
如若不然，令$a_0$为$A-S$的最小元，特别地，$a_0\in A-S$。
那么，对任意的$x\preceq a_0$（$x\neq a_0$），由于$a_0$为最小元，所以$x\notin A-S$，从而，$x\in S$。
按照要求，$a_0\in S$，矛盾。
:::

给定偏序集$(A,\preceq)$，$I\subset A$是子集，如果对任意$x\in I$，对任意的$y\preceq x$，
都有$y\in I$，我们就称$I$是一个**左半轴**。
如果$\preceq$是全序，对任意的$x\in A$，$A_{x}=\{y\in A\mid y\prec x\}$是一个左半轴。

我们还可以定义$S$的极大元。
假设$s\in S$并且在$S$中不能找出其它的$s'\in S$，使得$s\preceq s'$，
我们就称$s$是$S$的一个**极大元**。类似地，我们可以定义**极小元**。极大元和极小元即使存在也未必唯一。

::: theorem [Zorn引理]
$(A,\preceq)$是偏序集，如果任意全序子集[^1]$S\subset A$都有上界，那么，$A$有极大元。
:::

::: proof
用反证法，假设$A$中无极大元。令$\mathcal{S}=\big\{S\subset A\bigm| S\text{ 是全序子集}\big\}$。
对每个$S\in \mathcal{S}$，令$a$为$S$的一个上界，由于$A$没有极大元，所以存在$a<b$，那么，
$b$也是$S$的上界并且$b\notin S$。我们定义
\[
\mathcal{T}=\big\{(S,b)\bigm|S\in \mathcal{S}, ~\text{$b$ 是 $S$ 的上界并且 $b\notin S$}\big\}.
\]
我们考虑满射
\[
\pi\colon\mathcal{T}\rightarrow \mathcal{S}, \ \ (S,b)\mapsto S.
\]
根据选择公理[^2]，存在映射$\ell\colon\mathcal{S}\rightarrow \mathcal{T}$，
使得$\pi\circ\ell={\rm id}_{_\mathcal{S}}$，即对任意的全序子集$S$，
我们指定其上界$\ell(S)$并且$\ell(S)\notin S$。

对于子集$W\subset A$，如果$W$是良序集（从而落在$\mathcal{S}$中）并且对任意的$x\in W$，
$\ell(W_x)=x$，我们就称$W$满足**性质 $(\ell)$**。
我们现在说明，如果$W$和$W'$为满足性质$(\ell)$的子集，那么，如下两种情形必居其一：

- 1\) $W\subset W'$并且$W$是$W'$中的一个左半轴；

- 2\) $W'\subset W$并且$W'$是$W$中的一个左半轴。

证明这个叙述：
令
$\mathcal{I}=\big\{I\subset W\cap W'\bigm|\text{$I$ 是 $W$ 中的左半轴也是 $W'$ 中的左半轴}\big\}$，
很明显，$J=\cup_{I\in \mathcal{I}}I \in \mathcal{I}$而且是在包含关系下的最大元。
若$J=W$，那么1)成立；如果$J=W'$，那么2)成立。
否则，存在$w\in W-J$，使得$w$是$W-J$中的最小元素；存在$w'\in W'-J$，使得$w'$是$W'-J$中的最小元素。
根据定义，我们就有$J=W_{w}$和$J=W'_{w'}$。
由于$J$满足性质$(\ell)$，所以，$w=\ell(W_w)=\ell(W'_{w'})=w'$。
此时，$J\cup\{w\}\in \mathcal{I}$，与$J$是最大元相矛盾。

以下令$W$为$A$中所有满足性质$(\ell)$的集合的并集，我们来说明$W$也满足性质$(\ell)$。

首先说明$W$是良序集：对任意的$V\subset W$，假设$X$满足性质$(\ell)$并且$X\cap V\neq \emptyset$，
那么，$V\cap X$有最小元$x$，我们现在说明$x$是$V$的最小元：对任意的$v\in V$，
存在满足性质$(\ell)$的$Y$，使得$v\in Y$。
根据前面所证，要么$X\subset Y$并且$X$是$Y$中的一个左半轴，
要么$Y\subset X$并且$Y$是$X$中的一个左半轴。
无论哪种情况，$x$既然是$V\cap X$的最小元，也是$V\cap Y$的最小元，从而，$x\preceq v$。

其次，我们说明对任意的$x\in W$，都有$\ell(W_x)=x$：假设$X$满足性质$(\ell)$并且$x\in X$，所以，
$X_x\subset W_x$（因为$X\subset W$）。
对任意的$y\in W$，$y\prec x$，存在满足性质$(\ell)$的$Y$，使得$y\in Y$。
如果$Y\subset X$并且$Y$是$X$中的一个左半轴，那么，$y\in X$，从而$y\in X_x$；
如果$X\subset Y$并且$X$是$Y$中的一个左半轴，那么，$X_x=Y_x$，然而$y\in Y_x$，所以，$y\in X_x$。
总之，$X_x=W_x$，所以，$\ell(W_x)=\ell(X_x)=x$。

现在考虑$W\cup\{\ell(W)\}$，很明显它也满足性质$(\ell)$，这与$W$是最大的这样的集合相矛盾。
:::

[^1]: 即在$S$上我们仍然使用$A$的偏序，此时对$S$而言它是全序集。
[^2]: $X$是集合，对任意的$x\in X$，$F(x)$是非空集合。那么，对每个$x$，我们可以指定$f(x)\in F(x)$。
