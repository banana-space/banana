---
title: 习题选编
---
::: exercise [偏差—方差分解]
设$\hat\theta(X_1,\ldots,X_n)$为参数$\theta$的一个点估计量。
证明对任意$\theta\in\Theta$，均有
\[
    \operatorname{MSE}_\theta(\hat\theta)
    =\big[b_\theta(\hat\theta)\big]^2
    +\operatorname{Var}_\theta(\hat\theta).
\]
:::

::: exercise
设总体$X$的一个未知参数为$\theta\in\Theta$，而
$\hat\theta^{(1)},\ldots,\hat\theta^{(n)},\ldots$为一列
$\theta$的点估计量，其中$\hat\theta^{(n)}=\hat\theta^{(n)}(X_1,\ldots,X_n)$。
若对任意$\theta\in\Theta$，当$n\rightarrow\infty$时这列
点估计量的偏差均趋于$0$，即
\[
    \lim_{n\rightarrow\infty}\mathbb{E}_\theta\!\left[\hat\theta^{(n)}\right]=\theta,\qquad\forall\theta\in\Theta,
\]
则称这列点估计量是**渐近无偏的**（asymptotically unbiased）。

证明：若$\hat\theta^{(1)},\ldots,\hat\theta^{(n)},\ldots$是
渐进无偏的，且
\[
    \lim_{n\rightarrow\infty}\operatorname{Var}_\theta\!\big(\hat\theta^{(n)}\big) = 0,\qquad\forall\theta\in\Theta,
\]
则$\hat\theta^{(1)},\ldots,\hat\theta^{(n)},\ldots$是相合的。

*提示：* 对$\big|\hat\theta^{(n)}-\theta\big|^2$
利用Markov不等式。
:::

::: exercise
设总体$X$服从期望为$\theta$的指数分布，其中$\theta>0$为未知参数。
换句话说，$X$的概率密度函数可表示为
\[
    f(x;\theta)=\begin{cases}
    \displaystyle \frac{1}{\theta}\mathrm{e}^{-x/\theta}, & x>0, \\
    0, & x\leq 0.
    \end{cases}
\]
令$X_1,\ldots,X_n$为总体$X$的一组样本。

1. 设$\boldsymbol{\alpha}=
(\alpha_1,\ldots,\alpha_n)\in\mathbb{R}^n$满足
   $\sum_{i=1}^n\alpha_i = 1$，并令
   \[
       \hat\theta_{\boldsymbol{\alpha}}= \sum_{i=1}^n\alpha_i X_i.
   \]
   证明$\hat\theta_{\boldsymbol{\alpha}}$是$\theta$的一个无偏估计量。

2. 试求$\boldsymbol{\alpha}=(\alpha_1,\ldots,\alpha_n)$，
   使它在满足$\sum_{i=1}^n\alpha_i=1$的同时让
   $\hat\theta_{\boldsymbol{\alpha}}$的均方误差取到最小。

:::

::: exercise
设总体$X$的分布列为
\[
    p(x;\theta) = \theta^x(1-\theta)^{1-x},\qquad x\in\{0,1\},
\]
其中$\theta\in[0,1]$为未知参数（我们规定$0^0=1$）。
试求$\theta$的矩估计量与最大似然估计量。
:::

::: exercise
设总体$X$服从参数为$\lambda$的泊松分布，其中$\lambda$为未知参数。
试求$\lambda$的矩估计与最大似然估计量。
:::

::: exercise
设总体$X$服从区间$[0,\theta]$上的均匀分布，其中$\theta>0$为未知参数。

1. 试求样本容量为$n$时$\theta$的矩估计量
   $\hat\theta^{(n)}_{\mathrm{MM}}$。

2. 令样本容量为$n$时$\theta$的最大似然估计量为
   $\hat\theta^{(n)}_{\mathrm{ML}}$。试求
   $\hat\theta_{\mathrm{MM}}^{(n)}$与$\hat\theta_{\mathrm{ML}}^{(n)}$
   的偏差与均方误差，并判断它们是否是无偏估计量。

3. 证明参数$\theta$的矩估计量$\hat\theta_{\mathrm{MM}}^{(n)}$
   与最大似然估计量$\hat\theta_{\mathrm{ML}}^{(n)}$均具有相合性。

:::

::: exercise
设总体$X$服从区间$[a,b]$上的均匀分布，其中$a,b$均为未知参数，$b>a$。

1. 试求$a$与$b$的最大似然估计量。

2. 现假设我们已知$b=2a$且$a>0$。试求参数$a$的矩估计量
   与最大似然估计量。

:::

::: exercise
设总体$X$的概率密度函数为
\[
    f(x;\theta) =\begin{cases}
    \theta x^{\theta-1}, & 0< x< 1, \\
    0, & \text{其它情况},
    \end{cases}
\]
其中$\theta>0$为未知参数。

1. 试求$\theta$的矩估计量$\hat\theta_{\mathrm{MM}}$与
   最大似然估计量$\hat\theta_{\mathrm{ML}}$。

2. （${}^\star$）证明$\theta$的最大似然估计具有相合性。\
   *提示：* 利用 @lemma:continuity_converge_in_P。

3. 试求$\hat\theta_{\mathrm{ML}}$的偏差与均方误差。

4. 若将$1/\hat\theta_{\mathrm{ML}}$作为$\eta=1/\theta$的
   点估计量，证明该点估计量是无偏的。

:::

::: exercise
设总体$X$的概率密度函数为
\[
    f(x;\theta) = \frac{\lambda}{2}\exp\!\left(-\lambda|x-\theta|\right),\quad x\in\mathbb{R},
\]
其中$\theta\in\mathbb{R}$与$\lambda>0$为未知参数。

1. 试求$\theta$与$\lambda$的矩估计量。

2. 试求$\theta$与$\lambda$的最大似然估计量。

   *提示：* 你可能需要先证明如下结果：给定$x_1,\ldots,x_n\in\mathbb{R}$，使得
   $
\sum_{i=1}^n |x_i-\theta|
$
   取最小值的$\theta$是$x_1,\ldots,x_n$的中位数。此处的中位数按如下方式定义：当$n$为奇数时，中位数是第$(n+1)/2$大的数；当$n$为偶数时，中位数可以是任意小于等于第$n/2$大而大于等于第$n/2+1$大的数。

:::

::: exercise
设总体$X$服从参数为$(\alpha,\beta)$的$\Gamma$分布，也就是说
$X$的概率密度函数为
\[
    f(x;\alpha,\beta) = \begin{cases}
    \displaystyle\frac{\beta^\alpha}{\Gamma(\alpha)}\,x^{\alpha-1}\mathrm{e}^{-\beta x}, & x>0, \\
    0, & x\leq 0,
    \end{cases}
\]
其中$\alpha>0,\beta>0$为参数。将总体$X$的样本记为$X_1,\ldots,X_n$。

1. 设$\alpha,\beta$均未知。试求$\alpha$与$\beta$的矩估计量。

2. 设$\alpha$已知而$\beta$未知，试求$\beta$的最大似然估计量，
   （${}^\star$）并证明其相合性。

3. 设$\alpha,\beta$均未知，证明$\alpha$的最大似然估计量
   $\hat\alpha_{\mathrm{ML}}$满足如下方程：
   \[
       \ln\hat\alpha_{\mathrm{ML}} - \frac{\Gamma'(\hat\alpha_{\mathrm{ML}})}{\Gamma(\hat\alpha_{\mathrm{ML}})}
       =\ln\!\left(\frac{1}{n}\sum_{i=1}^n X_i\right)
       -\frac{1}{n}\sum_{i=1}^n\ln X_i.
   \]

4. （${}^\star$）设$\alpha,\beta$均未知，考虑如下
   $\alpha$与$\beta$的估计量：
   \[
       \begin{aligned}
       \hat\alpha^{(n)} & = \frac{n\sum_{i=1}^n X_i}{n\sum_{i=1}^n X_i\ln X_i - \left(\sum_{i=1}^n X_i\right)\left(\sum_{i=1}^n \ln X_i\right)}, \\
       \hat\beta^{(n)} &=
       \frac{\hat\alpha^{(n)}}{\frac{1}{n}\sum_{i=1}^n X_i}.
       \end{aligned}
   \]
   证明估计量$\hat\alpha^{(n)}$与$\hat\beta^{(n)}$的相合性。

:::

::: exercise [最大似然估计的不变性]
设总体$X$的分布列或概率密度函数为$f(x;\theta)$，其中未知参数
$\theta$的所有可能取值构成集合$\Theta$。设
$g:\Theta\rightarrow \mathcal{H}$为一个从集合$\Theta$
到集合$\mathcal{H}$的双射。令$\hat\theta_{\mathrm{ML}}$
为参数$\theta$的最大似然估计量，而令$\hat\eta_{\mathrm{ML}}$
为$\eta=g(\theta)$的最大似然估计量。证明
\[
    \hat\eta_{\mathrm{ML}} = g\big(\hat\theta_{\mathrm{ML}}\big).
\]
注：$\eta=g(\theta)$的最大似然估计量是指将$f(x;g^{-1}(\eta))$
作为总体的分布列或概率密度函数，并用$\eta\in\mathcal{H}$
替代$\theta$作为未知参数，而后求$\eta$的最大似然估计量。
:::
