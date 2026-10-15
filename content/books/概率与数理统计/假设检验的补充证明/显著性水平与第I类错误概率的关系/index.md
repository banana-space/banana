---
title: 显著性水平与第I类错误概率的关系
---
本节中我们证明，在 @condition:hypothesis_testing_H0_identical_distribution
下，显著性水平$\alpha$给出了第I类错误概率的上界，且当$T$在原假设
$H_0$下为连续型随机变量时，显著性水平$\alpha$就等于第I类错误概率。

::: theorem {@theorem:p_value_distribution}
设$T$为假设检验问题 @eq:testing_formulation_appendix
的检验统计量，且 @condition:hypothesis_testing_H0_identical_distribution
成立，$\hat{p}:\mathbb{R}^n\rightarrow\mathbb{R}$为将样本值
映射到$p$值的函数，$\alpha\in\left]0,1\right[$为给定的显著性水平，
$C_\alpha$为相应的拒绝域。则
\[
    \mathbb{P}_{H_0}\!\left(\hat{p}(X_1,\ldots,X_n)<\alpha\right)
    =
    \mathbb{P}_{H_0}(T\in C_\alpha) \leq\alpha.
\]
特别是，若$T$在原假设$H_0$下为连续型随机变量，则
\[
    \mathbb{P}_{H_0}\!\left(\hat{p}(X_1,\ldots,X_n)<\alpha\right)
    =
    \mathbb{P}_{H_0}(T\in C_\alpha) = \alpha,
\]
从而随机变量$\hat{p}(X_1,\ldots,X_n)$服从$[0,1]$上的均匀分布。
:::

为了证明 @theorem:p_value_distribution，我们首先给出
如下引理：

::: lemma {@lemma:p_value_distribution}
设$Y$为一随机变量，$q(y)=\mathbb{P}(Y\geq y),\,y\in\mathbb{R}$。
则
\[
    \mathbb{P}(q(Y)< \alpha)\leq \alpha,
    \qquad\forall \alpha\in\left]0,1\right[.
\]
特别是，若$Y$为连续型随机变量，则
\[
    \mathbb{P}(q(Y)< \alpha) = \alpha,
    \qquad\forall \alpha\in\left]0,1\right[,
\]
从而$q(Y)$服从$[0,1]$上的均匀分布。
:::

::: proof
定义函数$q^{-1}_+:\left]0,1\right[\rightarrow\mathbb{R}$为
\[
    q^{-1}_+(\alpha) = \max\left\{y\in\mathbb{R} \mid
    q(y)\geq \alpha\right\},\qquad \alpha\in \left]0,1\right[,
\]
则不难由$q$的单调性得到$q^{-1}_+(\alpha)$关于$\alpha$单调递减。
此外，由 @lemma:hypothesis_testing_critical_value_well_defined
得

```math {@eq:p_value_distribution_lemma_temp}
\left\{y\in\mathbb{R} \mid q(y)\geq \alpha\right\}
=\left]-\infty, q^{-1}_+(\alpha)\right],
```

从而$y>q^{-1}_+(\alpha)$当且仅当$q(y)<\alpha$，故
\[
    \mathbb{P}(q(Y)< \alpha)
    = \mathbb{P}\!\left(Y> q^{-1}_+(\alpha)\right)
    =q\!\left(q^{-1}_+(\alpha)+0\right),
\]
其中$q\!\left(q^{-1}_+(\alpha)+0\right)$表示$q(y)$在$y$
从右侧趋向于$q^{-1}_+(\alpha)$时的右极限。而另一方面，
由式 @eq:p_value_distribution_lemma_temp  可得，
当$y>q^{-1}_+(\alpha)$时有$q(y)<\alpha$，故令$y$从右侧
趋向于$q^{-1}_+(\alpha)$并由极限的保号性可得
$q\!\left(q^{-1}_+(\alpha)+0\right)\leq\alpha$，从而
\[
    \mathbb{P}(q(Y)< \alpha)\leq\alpha.
\]

而若$Y$为连续型随机变量，则有
\[
    \mathbb{P}(q(Y)<\alpha)
    =\mathbb{P}(Y>q^{-1}_+\alpha)
    =\mathbb{P}(Y\geq q^{-1}_+\alpha)
    =q\!\left(q^{-1}_+(\alpha)\right)
    \geq\alpha,
\]
其中第二个等号用到了$Y$服从连续型分布，而最后一步不等号则是因为
式 @eq:p_value_distribution_lemma_temp  意味着
$q^{-1}_+(\alpha)\in \{y\in\mathbb{R} \mid q(y)\geq\alpha\}$。
故$\alpha\leq \mathbb{P}(q(Y)<\alpha)\leq\alpha$，
从而$\mathbb{P}(q(Y)<\alpha)=\alpha$。
:::

在得到 @lemma:p_value_distribution  后，
@theorem:p_value_distribution  则可看成它的一个推论。

::: proof [@theorem:p_value_distribution  的证明]
记$q(y)=\mathbb{P}_{H_0}(T\geq y)$。对于单侧检验的情形，有
\[
    \hat{p}(x_1,\ldots,x_n) = q(\phi(x_1,\ldots,x_n)),
\]
即$\hat{p}(X_1,\ldots,X_n)=q(T)$，接下来由
@lemma:p_value_distribution  即可得
\[
    \mathbb{P}_{H_0}(\hat{p}(X_1,\ldots,X_n)<\alpha)
    ={} \mathbb{P}_{H_0}(q(T)<\alpha)\leq\alpha,
\]
而若$T$在原假设$H_0$下为连续型随机变量，则有
\[
    \mathbb{P}_{H_0}(\hat{p}(X_1,\ldots,X_n)<\alpha)
    ={} \mathbb{P}_{H_0}(q(T)<\alpha)=\alpha.
\]

对于双侧检验的情形，进一步令$q'(y)=\mathbb{P}_{H_0}(-T\geq y)$，
则有
\[
    \hat{p}(x_1,\ldots,x_n) = 2\min\left\{
    q(\phi(x_1,\ldots,x_n)),
    q'(-\phi(x_1,\ldots,x_n))\right\},
\]
从而
\[
    \begin{aligned}
    \mathbb{P}_{H_0}(\hat{p}(X_1,\ldots,X_n)<\alpha)
    ={} &
    \mathbb{P}_{H_0}\!\left(2\min\left\{
    q(T),
    q'(-T)\right\}<\alpha\right) \\
    ={} &
    \mathbb{P}_{H_0}\!\left(
    q(T)<\frac{\alpha}{2}\ \text{或}\
    q'(-T)<\frac{\alpha}{2}
    \right) \\
    \leq{} &
    \mathbb{P}_{H_0}\!\left(
    q(T)<\frac{\alpha}{2}\right)
    +\mathbb{P}_{H_0}\!\left(
    q'(-T)<\frac{\alpha}{2}\right) \\
    \leq{} &
    \frac{\alpha}{2}+\frac{\alpha}{2}
    =\alpha,
    \end{aligned}
\]
其中最后一个不等号来自于 @lemma:p_value_distribution。
而若$T$为连续型随机变量，则由于
\[
    q(y)<\frac{\alpha}{2}
    \quad \Longrightarrow\quad
    \mathbb{P}(Y\geq y)<\frac{1}{2},
\]
而
\[
    \begin{aligned}
    q'(-y)<\frac{\alpha}{2}
    \quad\Longrightarrow \quad &
    \mathbb{P}(-Y\geq -y)<\frac{1}{2} \\
    \quad\Longrightarrow \quad &
    \mathbb{P}(Y\geq y)
    =1-\mathbb{P}(-Y\geq -y) > \frac{1}{2},
    \end{aligned}
\]
故$q(y)<\alpha/2$与$q'(-y)<\alpha/2$不能同时成立，从而
\[
    \begin{aligned}
    \mathbb{P}_{H_0}(\hat{p}(X_1,\ldots,X_n)<\alpha)
    ={} &
    \mathbb{P}_{H_0}\!\left(
    q(T)<\frac{\alpha}{2}\ \text{或}\
    q'(-T)<\frac{\alpha}{2}
    \right) \\
    ={} &
    \mathbb{P}_{H_0}\!\left(
    q(T)<\frac{\alpha}{2}\right)
    +\mathbb{P}_{H_0}\!\left(
    q'(-T)<\frac{\alpha}{2}\right) \\
    ={} &
    \frac{\alpha}{2}+\frac{\alpha}{2}
    =\alpha.
    \end{aligned}
\]
定理证毕。
:::
