---
title: 点估计问题
---
本章中，我们首先介绍参数估计当中的**点估计**
（point estimation）问题。在点估计问题中，我们希望基于获得的样本数据，
给出未知参数（或者它的某个函数值）的单个估计值，作为参数估计的最终结果。
具体而言，设总体的未知参数为$\theta\in\Theta$，而我们希望对
它的一个函数值$\eta=g(\theta)$进行估计，其中$g$是一个已知的函数
[^1]。
令$X_1,\ldots,X_n$为该总体的一组样本，则点估计的任务就是
构造出一个统计量$\hat{\eta}(X_1,\ldots,X_n)$，并在
获取到样本的具体取值$x_1,\ldots,x_n$后将它们代入该统计量中，
把算出的数值$\hat{\eta}(x_1,\ldots,x_n)$作为对
$\eta=g(\theta)$进行估计的最终结果。我们将上述点估计过程
构造出的统计量$\hat{\eta}(X_1,\ldots,X_n)$称为$\eta$的
一个**点估计量**（point estimator），简称为**估计量**，
而代入具体样本值以后得到的$\hat\eta(x_1,\ldots,x_n)$则称为
$\eta$（关于该组样本值）的**点估计值**。不难看出，
解决点估计问题的核心在于点估计量的设计。

需要注意的是，由于样本中每个$X_i$都是随机变量，故点估计量
$\hat{\eta}(X_1,\ldots,X_n)$本身也是一个随机变量，
且由于$\hat{\eta}(X_1,\ldots,X_n)$是一个统计量，
故函数$\hat{\eta}$必须不依赖于未知参数$\theta$。
在不产生混淆的情况下，我们也经常直接用$\hat{\eta}$
表示点估计量$\hat{\eta}(X_1,\ldots,X_n)$。

::: example {@example:point_estimator_normal}
考虑 @example:parameter_estimation_normal  的情形。
为了对总体的期望$\mu$进行点估计，可以取样本期望

```math {@eq:point_estimation_mean}
\overline{X}_n
=\frac{1}{n}\sum_{i=1}^n X_i,
```

作为$\mu$的点估计量。由弱大数定律可得，给定任意$\epsilon>0$，有
\[
    \lim_{n\rightarrow\infty}\mathbb{P}\!\left(\left|\overline{X}_n-\mu\right|\leq\epsilon\right)=1,
\]
从而当样本容量$n$足够大时，$\overline{X}_n$与真实期望$\mu$的
偏离程度不超过$\epsilon$将是一个大概率事件。这意味着将样本均值
作为期望的点估计量是合理的。

注意到样本均值在方差未知的情况下依然能够构造出来，因而对于
@example:parameter_estimation_normal_unknown_var
所考虑的方差未知的情形，我们依然可以将样本均值作为
$\mu=g(\mu,\sigma^2)$的一个点估计量。
:::

::: example {@example:point_estimator_normal_unknown_var}
考虑 @example:parameter_estimation_normal_unknown_var
的情形，但假设这次我们也希望对方差$\sigma^2$进行估计，以对传感器的
测量精度有一个定量上的认识。此时可以取样本方差
\[
    S^2_n
    =\frac{1}{n-1}\sum_{i=1}^n\left(
    X_i-\overline{X}_n
    \right),
\]
为$\sigma^2$的点估计量。由 @exercise:convergence_sample_variance
的结论以及几乎处处收敛与依概率收敛的关系，可知给定任意$\epsilon>0$，有
\[
    \lim_{n\rightarrow\infty}\mathbb{P}\!\left(\big|S^2_n-\sigma^2\big|\leq\epsilon\right)=1.
\]
从而当样本容量$n$足够大时，样本方差$S^2_n$与真实方差$\sigma^2$的
偏离程度不超过$\epsilon$将是一个大概率事件。这意味着将样本方差
作为方差的点估计量是合理的。
:::

::: example {@example:moments_point_estimation}
设总体的分布函数为$F(x;\theta)$，其中$\theta\in\Theta$为未知参数，
并设对任意的$\theta\in\Theta$，分布$F(x;\theta)$的$k$阶矩都存在
（其中$k$为一给定正整数），并将其记为$\nu_k(\theta)$。考虑
对$\nu_k(\theta)$的点估计问题，则可以取样本$k$阶矩
\[
    \hat{\nu}_k=\frac{1}{n}\sum_{i=1}^n X_i^k
\]
作为$\nu_k(\theta)$的点估计量。由大数定律可知
$\hat{\nu}_k\xrightarrow{P}\nu_k(\theta)$，
故将$\hat{\nu}_k$作为$\nu_k(\theta)$的点估计量是合理的。
:::

对于 @example:point_estimator_normal、
\ref{example:point_estimator_normal_unknown_var}
与\ref{example:moments_point_estimation} 所考虑的情形，
由于待估计的参数都具有很明确的期望的意义，我们可以自然想到
用样本均值、样本方差以及样本矩来构造相应的点估计量。然而对于
更加一般的点估计问题，其点估计量的设计则往往不会这样简单；
此外，我们还需要对设计出来的点估计量的性能进行定量上的评估。
接下来，我们将对点估计问题的频率学派理论与方法进行初步介绍，
并给出矩估计与最大似然估计两种设计点估计量的方法。

[^1]: 若想要对参数$\theta$本身进行估计，令$g$为恒等映射即可。
