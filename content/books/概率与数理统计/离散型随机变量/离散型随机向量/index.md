---
title: 离散型随机向量
---
许多情况下，我们关心不止一个随机变量，而是多个随机变量
$X_1,\ldots,X_n$，且不止关心它们各自的统计规律，
还需要研究它们的相互关系，此时将这些随机变量作为整体来研究则尤为重要。

::: definition
给定$n$个随机变量$X_1,\ldots,X_n$，我们将它们构成的有序组
$(X_1,\ldots,X_n)$称为 **$n$维随机向量**
（$n$-dimensional random vector）。
:::

我们也可以将随机向量$(X_1,\ldots,X_n)$看作是
将任一样本点$\omega\in\Omega$对应到$n$维向量
$(X_1(\omega),\ldots,X_n(\omega))\in\mathbb{R}^n$的一个映射。
在本讲义中，我们有时用大写粗体字母
（如$\boldsymbol{X},\boldsymbol{Y}$）表示一个随机向量，
并用$\boldsymbol{X}(\omega)$表示
$(X_1(\omega),\ldots,X_n(\omega))$。

::: remark
在本讲义中，为了符号上的便利，我们将形如
$(a_1,\ldots,a_n)$的有序组（包括数组和随机向量）
均看作列向量（即$n\times 1$维矩阵）。
:::

本章中我们关注由离散型随机变量构成的随机向量。
为教学上的方便，我们主要介绍二维随机向量的相关概念与结果，
但这些概念与结果通常不难推广到一般的$n$维情况。

::: definition
若$X,Y$均为离散型随机变量，则称$(X,Y)$为**离散型随机向量**，
其**联合分布列**
（joint probability mass function, joint p.m.f。）
被定义为函数
\[
    p_{X,Y}(x,y)
    = \mathbb{P}(X=x,Y=y),
    \qquad (x,y)\in \mathbb{R}^2,
\]
在不产生混淆的情况下，也可将联合分布列简称为分布列。
:::

与一维情形的 @theorem:PMF_basic_properties、
\ref{theorem:discrete_rv_construction} 类似，
对于离散型随机向量$(X,Y)$，不难证明其联合分布列$p_{X,Y}$
具有如下性质：

- 对任意$(x,y)\in \mathbb{R}^2$，均有$p_{X,Y}(x,y)\geq 0$。

- $\{(x,y)\in\mathbb{R}^2 \mid p_{X,Y}(x,y)>0\}$为可数集。

- $\displaystyle\sum\limits_{(x,y)} p_{X,Y}(x,y) = 1$。

而若某个函数$p:\mathbb{R}^2\rightarrow\mathbb{R}$
满足上述三条性质，则存在概率空间$(\Omega,\mathcal{F},\mathbb{P})$
及定义在$\Omega$上的离散型随机向量$(X,Y)$使其联合分布列为$p$。

此外，利用概率的可数可加性不难证明，
对任意$B\subseteq\mathbb{R}^2$，均有

```math {@eq:discrete_rand_vec_probability_general}
\mathbb{P}((X,Y)\in B)
=\sum_{(x,y)\in B} p_{X,Y}(x,y).
```

::: example [离散型随机向量的函数的分布] {@example:function_of_discrete_rv_vec}
本例可看成 @example:function_of_discrete_rv  的推广。
设$(X,Y)$为一离散型随机向量，
$g:\mathbb{R}^2\rightarrow\mathbb{R}$为二元实值函数，
令$Z=g(X,Y)$。则随机变量$Z$的值域为
\[
    \begin{aligned}
    \operatorname{Im}Z
    &=\left\{g(X(\omega),Y(\omega)) \mid \omega\in\Omega\right\} \\
    &=\left\{g(x,y) \mid (x,y)\in\operatorname{Im}(X,Y)\right\},
    \end{aligned}
\]
由于$\operatorname{Im}(X,Y)\subseteq\operatorname{Im}X\times\operatorname{Im}Y$
为可数集，故$\operatorname{Im}Z$也是可数集，
因此$Z$也是离散型随机变量，其分布列为
\[
    \begin{aligned}
    p_Z(z)
    = \sum_{\substack{(x,y)\,:\\ g(x,y)=z}}p_{X,Y}(x,y),
    \qquad\forall z\in\mathbb{R}.
    \end{aligned}
\]
上式的推导过程与一维情形的 @example:function_of_discrete_rv
类似，请读者自行完成。
:::

## 边缘分布*

设$(X,Y)$为$2$维随机向量，$p_{X,Y}$为其联合分布列。我们将
分量$X$的分布列$p_X$称为$p_{X,Y}$关于第1个分量的**边缘分布列**
（marginal probability mass function, marginal p.m.f。），
类似地将$Y$的分布列$p_Y$称为$p_{X,Y}$关于第2个分量的边缘分布列。

以下定理指出，对于离散型随机向量，其边缘分布列由联合分布列唯一确定：

::: theorem {@theorem:marginal_pmf}
设$(X,Y)$为离散型随机向量，$p_{X,Y}$为其联合分布列，
则$p_{X,Y}$关于第1个分量的边缘分布列（即$X$的分布列）为
\[
    \begin{aligned}
    p_{X}(x) ={} &  \sum_{y} p_{X,Y}(x,y),
    \qquad\forall x\in\mathbb{R}.
    \end{aligned}
\]
换句话说，为求得$p_{X}(x)$，我们将$x$固定后，对所有（大于$0$的）
$p_{X,Y}(x,y)$求和。类似地，$p_{X,Y}$关于第2个分量的边缘分布列
（即$Y$的分布列）为
\[
    \begin{aligned}
    p_{Y}(y) ={} &  \sum_{x} p_{X,Y}(x,y),
    \qquad\forall y\in\mathbb{R}.
    \end{aligned}
\]
:::

上述定理的证明是概率可数可加性的直接应用，这里就不给出具体过程了。
