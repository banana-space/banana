---
title: 矩估计与最大似然估计
---
本节中我们介绍两种常用的点估计方法：矩估计法与最大似然估计法。

## 矩估计*

设总体$X$的分布函数为$F(x;\theta_1,\ldots,\theta_k)$，其中
$\theta_1,\ldots,\theta_k$表示总体的$k$个未知的标量参数，
且$(\theta_1,\ldots,\theta_k)$的所有可能取值构成集合$\Theta$。
进一步假设对任意$(\theta_1,\ldots,\theta_k)\in\Theta$，
相应的概率分布$F(x;\theta_1,\ldots,\theta_k)$的$k$阶矩存在，并记
\[
    \mathbb{E}_{\theta_1,\ldots,\theta_k}\!\left[X^j\right]
    =\mu_j(\theta_1,\ldots,\theta_k),\qquad\forall j=1,\ldots,k.
\]
换句话说，函数$\mu_j:\Theta\rightarrow\mathbb{R}$将任一组
可能的参数$(\theta_1,\ldots,\theta_k)$映射为相应分布的$j$阶矩。
现在，暂时假设我们通过某种手段，获得了总体$X$的前$k$阶矩的精确值，
并将它们分别记为$m_1,m_2,\ldots,m_k$，则可知未知参数
$\theta_1,\ldots,\theta_k$满足如下$k$个方程：

```math {@eq:moment_method_pre}
\begin{aligned}
m_1 ={} & \mu_1(\theta_1,\ldots,\theta_k), \\
m_2 ={} & \mu_2(\theta_1,\ldots,\theta_k), \\
 & \vdots \\[-6pt]
m_k ={} & \mu_k(\theta_1,\ldots,\theta_k).
\end{aligned}
```

那么当映射
\[
    (\theta_1,\ldots,\theta_k)\mapsto (\mu_1(\theta_1,\ldots,\theta_k),\ldots,\mu_k(\theta_1,\ldots,\theta_k))
\]
是一个从$\Theta$到$\mathbb{R}^k$的单射时，通过求解方程组
@eq:moment_method_pre，我们即可求出未知参数
$\theta_1,\ldots,\theta_k$的值。

上述求解过程假定我们已经得到了总体$X$的前$k$阶矩的值。通常情况下，
矩的求解需要事先知道$X$的具体分布情况，但若我们获得了总体$X$的一组
容量足够大的样本$X_1,\ldots,X_n$，那么$X$的$j$阶矩就可以用样本
做出近似估计：
\[
    \begin{aligned}
    m_1 \approx{} &  \frac{1}{n}\sum_{i=1}^n X_i, \\
    m_2 \approx{} &  \frac{1}{n}\sum_{i=1}^n X_i^2, \\
    & \vdots \\
    m_k \approx{} & \frac{1}{n}\sum_{i=1}^n X_i^k.
    \end{aligned}
\]
矩估计方法，就是指将 @eq:moment_method_pre  当中
前$k$阶矩的精确值替换为基于样本的估计值，再求解相应的方程组：

```math {@eq:moment_method}
\begin{aligned}
\frac{1}{n}\sum_{i=1}^n X_i ={} & \mu_1(\hat\theta_1,\ldots,\hat\theta_k), \\
\frac{1}{n}\sum_{i=1}^n X_i^2 ={} & \mu_2(\hat\theta_1,\ldots,\hat\theta_k), \\
 & \vdots \\[-6pt]
\frac{1}{n}\sum_{i=1}^n X_i^k ={} & \mu_k(\hat\theta_1,\ldots,\hat\theta_k).
\end{aligned}
```

上述方程组的解$\hat\theta_1,\ldots,\hat\theta_k$分别给出了
未知参数$\theta_1,\ldots,\theta_k$的点估计量。

::: example
设总体$X$服从区间$[\theta_1,\theta_1+\theta_2]$上的均匀分布，
其中$\theta_1\in\mathbb{R}$以及$\theta_2>0$为未知参数。则有
\[
    \begin{aligned}
    \mu_1(\theta_1,\theta_2)={} & \mathbb{E}_{\theta_1,\theta_2}[X] = \theta_1+\frac{\theta_2}{2}, \\
    \mu_2(\theta_1,\theta_2)={} & \mathbb{E}_{\theta_1,\theta_2}[X^2] = \bigg(\theta_1+\frac{\theta_2}{2}\bigg)^{\!2}+\frac{\theta_2^2}{12}.
    \end{aligned}
\]
那么当$X_1,\ldots,X_n$为总体$X$的一组样本时，根据矩估计方法的步骤，
可得$\theta_1$与$\theta_2$的矩估计量$\hat\theta_1,\hat\theta_2$
为如下方程的解：
\[
    \begin{aligned}
    \frac{1}{n}\sum_{i=1}^n X_i ={} & \mu_1(\hat\theta_1,\hat\theta_2)
    =\hat\theta_1+\frac{\hat\theta_2}{2}, \\
    \frac{1}{n}\sum_{i=1}^n X_i^2 ={} &
    \mu_2(\hat\theta_1,\hat\theta_2)
    =\bigg(\hat\theta_1+\frac{\hat\theta_2}{2}\bigg)^{\!2}+\frac{\hat\theta_2^2}{12}.
    \end{aligned}
\]
由此可解得
\[
    \begin{aligned}
    \hat\theta_2 ={} & 2\sqrt{3}\left[\frac{1}{n}\sum_{i=1}^n X_i^2-\bigg(\frac{1}{n}\sum_{i=1}^n X_i\bigg)^{\!2}\,\right]^{1/2}, \\
    \hat\theta_1 ={} & \frac{1}{n}\sum_{i=1}^n X_i - \frac{\hat\theta_2}{2}.
    \end{aligned}
\]
:::

基于弱大数定律可以证明，当方程组 @eq:moment_method_pre
具有唯一解，且该唯一解是$(m_1,\ldots,m_k)$的连续函数时，
矩估计具有相合性，也就是说当样本容量趋于无穷大时，矩估计量依概率
收敛于真实的参数值[^1]。

## 最大似然估计*

在最大似然估计法中，我们首先需要引入样本的似然函数，它在数值上
等于样本$(X_1,\ldots,X_n)$的联合分布列或联合概率密度函数，
但我们把它看作是给定样本观测值时关于未知参数的一个函数。

::: definition
设总体$X$的分布列或概率密度函数为$f(x;\theta_1,\ldots,\theta_k)$，
其中$\theta_1,\ldots,\theta_k$表示$k$个未知参数，且
$(\theta_1,\ldots,\theta_k)$的所有可能取值构成集合$\Theta$。
对任意正整数$n$以及$\boldsymbol{x}=(x_1,\ldots,x_n)\in\mathbb{R}^n$，
定义简单随机样本的**似然函数**（likelihood function）
$L\!\left(\mkern2mu\cdot\mkern3mu;\boldsymbol{x}\right):\Theta\rightarrow\left[0,+\infty\right[$为
\[
    L(\theta_1,\ldots,\theta_k;\boldsymbol{x})
    =\prod_{i=1}^n f(x_i;\theta_1,\ldots,\theta_k).
\]
:::

许多情况下，我们还会用到**对数似然函数**
（log likelihood function）
\[
    \ln L(\theta_1,\ldots,\theta_k;\boldsymbol{x})
    =\sum_{i=1}^n \ln f(x_i;\theta_1,\ldots,\theta_k).
\]

最大似然估计法的基本步骤如下：给定样本容量$n$，对每个
$\boldsymbol{x}=(x_1,\ldots,x_n)$，求解使得似然函数
$L(\theta_1,\ldots,\theta_k;\boldsymbol{x})$取最大值的点
[^2]：
\[
    (\hat\theta_1(\boldsymbol{x}),
    \ldots,\hat\theta_k(\boldsymbol{x})) = \argmax_{(\theta_1,\ldots,\theta_k)\in\Theta}
    L(\theta_1,\ldots,\theta_k;\boldsymbol{x})
\]
接下来我们将样本$X_1,\ldots,X_n$代入上式给出的函数
$\hat\theta_1,\ldots,\hat\theta_k$当中，即可对每一个参数
$\theta_j$得到一个点估计量$\hat\theta_j(X_1,\ldots,X_n)$。
我们将这个点估计量称为**最大似然估计量**
（maximum likelihood estimator）。由于$x\mapsto \ln x$是
单调递增的函数，在求解最大似然估计量时，我们也可以对对数似然函数
$\ln L(\theta_1,\ldots,\theta_k;\boldsymbol{x})$进行最大化，
而且许多情况下对数似然函数的最大值点更好求解。特别是，
当$\Theta$为$\mathbb{R}^k$的开集且对数似然函数在$\Theta$上可微时，
我们可以通过求解方程组

```math {@eq:log-likelihood_equation}
\frac{\partial \ln L(\theta_1,\ldots,\theta_k;\boldsymbol{x})}{\partial\theta_j} = 0,\qquad j=1,\ldots,k
```

来得到对数似然函数的驻点，而后从这些驻点中进一步找出最大值点。
方程 @eq:log-likelihood_equation  经常
被称为**对数似然方程**（log-likelihood equation）。

::: example
设总体$X$服从一元正态分布，其期望$\mu\in\mathbb{R}$与方差
$\sigma^2>0$均未知。则相应的似然函数为
\[
    \begin{aligned}
    L(\mu,\sigma^2;\boldsymbol{x})
    ={} &
    \prod_{i=1}^n \frac{1}{\sqrt{2\pi}\sigma}
    \exp\!\left(-\frac{(x_i-\mu)^2}{2\sigma^2}\right) \\
    ={} & \frac{1}{(2\pi\sigma^2)^{n/2}}
    \exp\!\left(-\frac{1}{2\sigma^2}\sum_{i=1}^n (x_i-\mu)^2\right),
    \end{aligned}
\]
对数似然函数为
\[
    \ln L(\mu,\sigma^2;\boldsymbol{x})
    =-\frac{1}{2\sigma^2}\sum_{i=1}^n(x_i-\mu)^2
    -\frac{n}{2}\ln\sigma^2 - \frac{n}{2}\ln(2\pi).
\]
为了求解对数似然函数的最大值点，我们计算对数似然函数分别
对$\mu$与$\sigma^2$的偏导数并令它们等于零，可得到如下方程组：
\[
    \begin{aligned}
    0 &=\frac{\partial \ln L(\mu,\sigma^2;\boldsymbol{x})}{\partial\mu} =
    \frac{1}{\sigma^2}\left(\sum_{i=1}^n x_i-n\mu\right), \\
    0 &= \frac{\partial \ln L(\mu,\sigma^2;\boldsymbol{x})}{\partial(\sigma^2)}
    =\frac{1}{2\sigma^4}
    \sum_{i=1}^n (x_i-\mu)^2 - \frac{n}{2\sigma^2}.
    \end{aligned}
\]
解上述方程组，可得
\[
    \begin{aligned}
    \hat\mu(\boldsymbol{x}) & = \frac{1}{n}\sum_{i=1}^n x_i, \\
    \widehat{\sigma^2}(\boldsymbol{x}) &= \frac{1}{n}\sum_{i=1}^n \big(x_i-\hat\mu(\boldsymbol{x})\big)^2.
    \end{aligned}
\]
可以证明，上式给出的$\hat\mu(\boldsymbol{x})$与
$\widehat{\sigma^2}(\boldsymbol{x})$的确使得对数似然函数
取到最大值。故期望$\mu$与方差$\sigma^2$的最大似然估计量为
\[
    \begin{aligned}
    \hat\mu(X_1,\ldots,X_n) & = \frac{1}{n}\sum_{i=1}^n X_i = \overline{X}, \\
    \widehat{\sigma^2}(X_1,\ldots,X_n) &= \frac{1}{n}\sum_{i=1}^n (X_i-\overline{X})^2
    =\frac{n-1}{n}S^2.
    \end{aligned}
\]
可以看到，期望的最大似然估计量就是样本均值，但方差的最大似然估计量
与样本方差相差一个因子$(n-1)/n$。
:::

::: example {@example:uniform_MLE}
设总体$X$服从区间$[0,\theta]$上的均匀分布，其中$\theta>0$为未知参数。
令$X_1,\ldots,X_n$为总体$X$的一组样本，我们希望求$\theta$的
最大似然估计量。

由题设不难得到似然函数为
\[
    L(\theta;x_1,\ldots,x_n)
    =\prod_{i=1}^n\left(\frac{1}{\theta}\cdot \mathsf{1}_{x_i\leq\theta}(\theta)\right)
    =\begin{cases}
    \theta^{-n}, & \text{若\ } \theta\geq \max\{x_1,\ldots,x_n\}, \\
    0, & \text{其它情况},
    \end{cases}
\]
其中$\mathsf{1}_{x_i\leq\theta}(\theta)$在
$x_i\leq \theta$时为$1$而在其它情况下为$0$。由于
$\theta\mapsto\theta^{-n}$严格单调递减，故当
$\theta=\max\{x_1,\ldots,x_n\}$时似然函数取到最大值，
因而$\theta$的最大似然估计量为
\[
    \hat\theta = \max\{X_1,\ldots,X_n\}.
\]
:::

最大似然估计法具有一个比较直观的解释：当我们收集到样本数据后，
那么一般来说，与其它可能的参数值相比，真实参数值应当更有利于
产生这些数据，或者说真实参数值应当使得产生这些数据的可能性
（近似）达到最大。然而，真正让最大似然估计法被广为接受的原因，
还是它在大样本情形下所具有的良好的估计性能。可以证明，在较为宽松的条件下，
最大似然估计具有如下性质（表述并不十分严格）：

1. 最大似然估计具有相合性。

2. 与其它具有相合性的点估计方法相比，最大似然估计法在大样本极限时
   具有最小的均方误差。

3. 在大样本极限时，最大似然估计量的分布趋于一个期望为真实参数值的
   正态分布。

我们将在本节最后一小节的选读内容中给出一种简单情形下相合性的证明。
后两条性质的严格表述与证明可参阅[@schervish1995theory]第7.3节。

::: remark
本节中，我们针对一些形式比较简单的参数化分布族推导了最大似然估计量的
表达式。然而，对于稍微复杂一些的参数化分布族，一般是没有办法求出
对数似然函数最大值点的闭式表达式的，此时我们就需要借助最优化算法
迭代求解最大似然估计值。常见的可用于求解最大似然估计值的最优化算法
包括梯度上升法（gradient ascent method）、共轭梯度法
（conjugate gradient method）、BFGS算法
（Broyden–Fletcher–Goldfarb–Shanno algorithm）等
（参见[@nocedal2006numerical]），以及针对隐变量模型的
期望—最大化算法（expectation–maximization algorithm）等
（参见[@mclachlan2008algorithm]）；当矩估计量可以求解时，
我们也会考虑用矩估计值作为最优化算法迭代的初始点。许多情况下
对数似然函数不是凹函数，这进一步增加了最大似然估计的难度，
需要采取一些额外技术（例如多次随机初始化）进行近似求解。
:::

## （${}^\star$）矩估计与最大似然估计的相合性证明* {@subsection:moments_MLE_consistency_proof}

我们首先证明矩估计的相合性，它实际上是如下引理的直接推论：

::: lemma {@lemma:continuity_converge_in_P}
设$\mathcal{M}$为$\mathbb{R}^k$的开子集，
$(c_1,\ldots,c_k)$为$\mathcal{M}$内的一个点，
$g:\mathcal{M}\rightarrow\mathbb{R}$为一连续函数。若
\[
    \begin{aligned}
    & X_{1,1},X_{1,2},\ldots,X_{1,n},\ldots \\
    & X_{2,1},X_{2,2},\ldots,X_{2,n},\ldots \\
    & \phantom{X_{2,1},X_{2,2},}\ \ \vdots \\
    & X_{k,1},X_{k,2},\ldots,X_{k,n},\ldots
    \end{aligned}
\]
为$k$列随机变量，且固定任意$j=1,\ldots,k$，有
\[
    X_{j,n}\xrightarrow{P} c_j,\qquad n\rightarrow\infty,
\]
则
\[
    g(X_{1,n},\ldots,X_{k,n})\xrightarrow{P} g(c_1,\ldots,c_k),\qquad n\rightarrow\infty.
\]
:::

::: proof
任取$\epsilon>0$与$\epsilon'>0$。由于$g$是开集$\mathcal{M}$上的
连续函数，故存在$\delta>0$使得对任意的
$(x_1,\ldots,x_k)\in\mathbb{R}^k$，有
\[
    \max_{1\leq j\leq k}|x_j-c_j|\leq\delta
    \quad\Longrightarrow\quad
    |g(x_1,\ldots,x_k)-g(c_1,\ldots,c_k)|\leq\epsilon,
\]
从而对任意$n\in\mathbb{N}_+$，有

```math {@eq:continuity_converge_in_P_temp1}
\mathbb{P}\!\left(
\max_{1\leq j\leq k}
\left|X_{j,n}-c_j\right|\leq\delta
\right)
\leq
\mathbb{P}\!\left(
\left|g(X_{1,n},\ldots,X_{k,n})-g(c_1,\ldots,c_k)\right|\leq\epsilon
\right).
```

另一方面，由弱大数定律可得，对任意$j=1,\ldots,k$，均有
\[
    \lim_{n\rightarrow\infty}
    \mathbb{P}\!\left(
    \left|X_{j,n}-c_j\right|>\delta
    \right) = 0,\qquad\forall j=1,\ldots,k.
\]
故存在正整数$N$，使得$n>N$时均有
\[
    \mathbb{P}\!\left(
    \left|X_{j,n}-c_j\right|>\delta
    \right)
    \leq\frac{\epsilon'}{k},\qquad\forall j=1,\ldots,k.
\]
因而$n>N$时有
\[
    \begin{aligned}
    \mathbb{P}\!\left(
    \max_{1\leq j\leq k}
    \left|X_{j,n}-c_j\right|
    >\delta
    \right)
    ={} &
    \mathbb{P}\!\left(
    \bigcup_{j=1}^k
    \left\{\left|X_{j,n}-c_j\right|
    >\delta\right\}
    \right) \\
    \leq{} &
    \sum_{j=1}^k \mathbb{P}\!\left(
    \left|X_{j,n}-c_j\right|
    >\delta
    \right)
    \leq k\cdot\frac{\epsilon'}{k}
    =\epsilon'.
    \end{aligned}
\]
将以上结果代入式 @eq:continuity_converge_in_P_temp1，
可得$n>N$时有
\[
    \begin{aligned}
    \mathbb{P}\!\left(
    \left|g(X_{1,n},\ldots,X_{k,n})-g(c_1,\ldots,c_k)\right|\leq\epsilon
    \right)
    \geq{} &
    1-\mathbb{P}\!\left(
    \max_{1\leq j\leq k}
    \left|X_{j,n}-c_j\right|
    >\delta
    \right) \\
    \geq{} & 1-\epsilon'.
    \end{aligned}
\]
由$\epsilon'>0$的任意性，可得
\[
    \lim_{n\rightarrow\infty}
    \mathbb{P}\!\left(
    \left|g(X_{1,n},\ldots,X_{k,n})-g(c_1,\ldots,c_k)\right|\leq\epsilon
    \right)
    =1,
\]
再由$\epsilon>0$的任意性可得$n\rightarrow\infty$时
有$g(X_{1,n},\ldots,X_{k,n})\xrightarrow{P} g(c_1,\ldots,c_k)$。
:::

::: theorem [矩估计的相合性]
设总体$X$的分布函数为$F(x;\theta_1,\ldots,\theta_k)$，
其中未知参数$(\theta_1,\ldots,\theta_k)$的所有可能取值
构成集合$\Theta$，且对每个$(\theta_1,\ldots,\theta_k)\in\Theta$，
分布$F(x;\theta_1,\ldots,\theta_k)$的$k$阶矩均存在。令向量值函数
$\boldsymbol{\mu}:\Theta\rightarrow\mathbb{R}^k$由下式给出：
\[
    \boldsymbol{\mu}(\theta_1,\ldots,\theta_k) =
    \left(
    \mathbb{E}_{\theta_1,\ldots,\theta_k}\!\left[X^1\right],
    \ldots,
    \mathbb{E}_{\theta_1,\ldots,\theta_k}\!\left[X^k\right]
    \right),
\]
其中$\mathbb{E}_{\theta_1,\ldots,\theta_k}\!\left[X^j\right]$
表示取期望时$X$服从的分布为$F(x;\theta_1,\ldots,\theta_k)$。
记$\mathcal{M}=\boldsymbol{\mu}(\Theta)$，并进一步假设如下条件成立：

1. $\mathcal{M}$是一个开集。

2. $\boldsymbol{\mu}$是一个单射，从而在$\mathcal{M}$上
   有逆映射$\boldsymbol{\mu}^{-1}:\mathcal{M}\rightarrow\Theta$。

3. $\boldsymbol{\mu}^{-1}$在$\mathcal{M}$上连续。

记样本容量为$n$的矩估计量为
\[
    \left(
    \hat\theta_1^{(n)},
    \ldots,
    \hat\theta_k^{(n)}
    \right)
    =\boldsymbol{\mu}^{-1}\!\left(
    \frac{1}{n}\sum_{i=1}^n X_i^1,\ldots,
    \frac{1}{n}\sum_{i=1}^n X_i^k
    \right)
\]
则当总体的参数为任一$(\theta_1,\ldots,\theta_k)\in\Theta$时，
对于每个$l=1,\ldots,k$，相应的矩估计量$\hat\theta_l^{(n)}$
在$n\rightarrow\infty$时均依概率收敛于$\theta_l$。
:::

::: proof
固定$(\theta_1,\ldots,\theta_k)\in\Theta$，用随机变量$X$
代表参数$(\theta_1,\ldots,\theta_k)$对应的总体，并令
$(m_1,\ldots,m_k)=\boldsymbol{\mu}(\theta_1,\ldots,\theta_k)$。
任取$l\in\{1,\ldots,k\}$，并将向量值函数$\boldsymbol{\mu}^{-1}$的
第$l$个分量记为$g_l$。注意到
\[
    g_l(m_1,\ldots,m_k)=\theta_l
\]
以及
\[
    g_l\!\left(
    \frac{1}{n}\sum_{i=1}^n X_i^j,
    \ldots,\frac{1}{n}\sum_{i=1}^n X_i^j\right)
    =\hat\theta_l^{(n)}.
\]
由弱大数定律，可得
\[
    \frac{1}{n}\sum_{i=1}^n X_i^j \xrightarrow{P} m_j,\qquad \forall j=1,\ldots,k,
\]
而由定理条件，可知$g_l$在开集$\mathcal{M}$上连续，且
$(m_1,\ldots,m_k)\in\mathcal{M}$。故可以利用
@lemma:continuity_converge_in_P，得
\[
    g_l\!\left(
    \frac{1}{n}\sum_{i=1}^n X_i^j,
    \ldots,\frac{1}{n}\sum_{i=1}^n X_i^j\right)
    \xrightarrow{P} g_l(m_1,\ldots,m_k),
    \qquad n\rightarrow\infty,
\]
也即
\[
    \hat\theta_l^{(n)} \xrightarrow{P}
    \theta_l,
    \qquad n\rightarrow\infty.
\]
:::

接下来我们给出最大似然估计相合性的证明。简单起见，此处只考虑
未知参数为单个实数（标量），且参数范围为有限集合的情形。

::: theorem [最大似然估计的相合性]
设总体$X$的概率密度函数为$f(x;\theta)$，其中$\theta$为未知参数，
且$\theta$的所有可能取值构成一有限集合$\Theta$。令
$\hat{\theta}^{(n)}$表示样本容量为$n$时参数$\theta$的
最大似然估计量，则当总体的参数取为任一$\theta\in\Theta$时，均有
\[
    \lim_{n\rightarrow\infty}\mathbb{P}_{\theta}\!\left(
    \big|\hat\theta^{(n)}-\theta\big|>\epsilon
    \right)=0,\qquad\forall \epsilon>0.
\]
:::

::: proof
为了避免符号上的混淆，我们将总体的真实参数改用$\theta_0\in\Theta$
表示。令$X_1,X_2,\ldots$为一列独立且与$X$同分布的随机变量。
任取$\theta'\in\Theta\backslash\{\theta_0\}$，由琴生不等式
可得[^3]

```math {@eq:MLE_consistency_proof_Jensen}
\begin{aligned}
\mathbb{E}_{\theta_0}\!\left[
\ln\frac{f(X;\theta')}{f(X;\theta_0)}
\right]
<{} & \ln\mathbb{E}_{\theta_0}\!\left[\frac{f(X;\theta')}{f(X;\theta_0)}\right] \\
={} & \ln\int_{-\infty}^{+\infty}
\frac{f(x;\theta')}{f(x;\theta_0)}\cdot f(x;\theta_0)\,\mathrm{d} x
=\ln 1=0.
\end{aligned}
```

上式中能够取到严格不等号是因为$x\mapsto -\ln x$是严格凸的，
且$\theta'$给出与$\theta_0$不同的概率分布。接下来，
对任意$\theta\in\Theta$，记事件$E_\theta$为
\[
    E_\theta=\left\{\lim_{n\rightarrow\infty}
    \frac{1}{n}\sum_{i=1}^n \ln \frac{f(X_i;\theta)}{f(X_i;\theta_0)}
    =
    \mathbb{E}_{\theta_0}\!\left[
    \ln \frac{f(X;\theta)}{f(X;\theta_0)}\right]
    \right\},
\]
则由Kolmogorov强大数定律，可知对任意$\theta\in\Theta$，
均有$\mathbb{P}_{\theta_0}(E_\theta)=1$，而又因为
$\Theta$是有限集，故
\[
    \mathbb{P}_{\theta_0}\!\left(\bigcap\nolimits_{\theta\in\Theta}E_\theta\right)=1.
\]
接下来任取$\omega\in\bigcap_{\theta\in\Theta}E_\theta$，
由式 @eq:MLE_consistency_proof_Jensen  可知
\[
    \lim_{n\rightarrow\infty}
    \frac{1}{n}\sum_{i=1}^n \ln \frac{f(X_i(\omega);\theta')}{f(X_i(\omega);\theta_0)}
    <0,\qquad\forall\theta'\neq\theta_0,
\]
而由极限的保号性，可知存在足够大的正整数$N(\omega)$，
使得$n\geq N(\omega)$时均有
\[
    \sum_{i=1}^n\ln\frac{f(X_i(\omega);\theta')}{f(X_i(\omega);\theta_0)}<0,\qquad\forall\theta'\neq\theta_0,
\]
也即$\sum_{i=1}^n\ln f(X_i(\omega);\theta')<
\sum_{i=1}^n\ln f(X_i(\omega);\theta_0),
\,\forall\theta'\neq\theta_0$。这意味着$n\geq N(\omega)$时有
\[
    \argmax_{\theta\in\Theta} \sum_{i=1}^n \ln f(X_i(\omega);\theta)=\theta_0.
\]
但由最大似然估计量的定义，可知
\[
    \hat\theta^{(n)} = \argmax_{\theta\in\Theta} \sum_{i=1}^n \ln f(X_i;\theta),
\]
故
\[
    \lim_{n\rightarrow\infty}\hat\theta^{(n)}(\omega)
    =\theta_0.
\]
由$\omega\in\bigcap_{\theta\in\Theta}E_\theta$的任意性，即得到
\[
    \mathbb{P}_{\theta_0}\!\left(\lim_{n\rightarrow\infty}\hat\theta^{(n)}
    =\theta_0\right)
    \geq \mathbb{P}_{\theta_0}\!\left(\bigcap\nolimits_{\theta\in\Theta}E_\theta\right)=1.
\]
最后，由几乎必然收敛与依概率收敛的关系，可知
$\hat\theta^{(n)}\xrightarrow{P}\theta_0$。
:::

::: remark
不难将上面的证明过程移植到总体为离散型随机变量的情形。而对于
更加一般的$\Theta$，为证明最大似然估计相合性，则需要对总体所在的
参数化分布族施加一些限制条件，且需要用到不少分析上的技巧，
但刨去这些技巧之后，背后的证明思路依然和上述证明是一致的；
可参阅[@schervish1995theory]第7.3.2节。
:::

[^1]: 该结果的严格表述以及证明见本节 最后一小节的选读内容。
[^2]: 若$\Theta$中存在多个点使得似然函数取到最大值， 则在其中任取一个即可。若似然函数不存在最大值点，则称$\theta$的 最大似然估计量不存在。
[^3]: 本讲义第2、3章中对于期望的定义与讨论不包括它取 $\pm\infty$的情形，但实际上对于某些随机变量，我们可以定义其期望为 $+\infty$或$-\infty$。可以证明，$\mathbb{E}_{\theta_0}\!\left[ \ln\frac{f(X;\theta')}{f(X;\theta_0)} \right]$要么取有限值，要么取$-\infty$，而它取$-\infty$的情形 同样可以被不等式 @eq:MLE_consistency_proof_Jensen  包括进来。 此外，后面应用强大数定律时，所得到的结论对于 $\mathbb{E}_{\theta_0}\!\left[ \ln\frac{f(X;\theta')}{f(X;\theta_0)} \right]=-\infty$的情形也是适用的。
