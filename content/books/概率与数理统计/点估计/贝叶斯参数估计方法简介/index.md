---
title: 贝叶斯参数估计方法简介
---

以上几节介绍的点估计理论与方法都是基于频率学派的观点，即未知参数
是一个确定性的量。而在贝叶斯学派的理论当中，则是把未知参数作为一个
随机变量来处理。具体而言，我们用一个随机变量或随机向量$\Theta$
代表未知参数[^1]，
这个未知参数服从某个给定的概率分布$\pi(\theta)$（简单起见，
我们假定$\Theta$是连续型的，$\pi(\theta)$是一个概率密度函数），
我们将其称为**先验分布**（prior distribution），它代表了
我们在收集到样本数据之前对未知参数分布的认识，而未知参数的实际取值
则看成是从这个先验分布中抽样得来的。而总体则由条件分布列
$p\!\left(x \mkern2mu|\mkern2mu \theta\right)$或条件概率密度函数
$f\!\left(x \mkern2mu|\mkern2mu \theta\right)$表示。
简单起见，我们只考虑用条件概率密度函数$f\!\left(x \mkern2mu|\mkern2mu \theta\right)$表示的总体。
此时，从总体中抽样所得到的简单随机样本$X_1,\ldots,X_n$则具有
如下联合条件分布：
\[
f_{X_1,\ldots,X_n|\Theta}\!\left(x_1,\ldots,x_n \mkern2mu|\mkern2mu \theta\right)
=\prod_{i=1}^n f\!\left(x_i \mkern2mu|\mkern2mu \theta\right).
\]
贝叶斯参数估计的任务则是在观测到样本$X_1,\ldots,X_n$的取值
$x_1,\ldots,x_n$后，反推未知参数$\Theta$在给定
$X_1=x_1,\ldots,X_n=x_n$条件下的条件分布，这个条件分布
在贝叶斯参数估计理论中又被叫作$\Theta$的**后验分布**
（posterior distribution）。我们将后验分布对应的条件概率密度函数
记作
$\pi\!\left(\theta \mkern2mu|\mkern2mu x_1,\ldots,x_n\right)=\pi\!\left(\theta \mkern2mu|\mkern2mu \boldsymbol{x}\right)$。
由 @exercise:Bayes_formula_rv 给出的贝叶斯公式，可得

```math {@eq:Bayesian_inference_1}
\pi\!\left(\theta \mkern2mu|\mkern2mu \boldsymbol{x}\right)
=\frac{\pi(\theta)\prod_{i=1}^n f\!\left(x_i \mkern2mu|\mkern2mu \theta\right)}{\int \pi(\theta)\prod_{i=1}^n f\!\left(x_i \mkern2mu|\mkern2mu \theta\right)\,\mathrm{d}\theta}.
```

我们进一步定义贝叶斯参数估计中的**似然函数**
（likelihood function）为
\[
L\!\left(\theta \mkern2mu|\mkern2mu \boldsymbol{x}\right)
=\prod_{i=1}^n f\!\left(x_i \mkern2mu|\mkern2mu \theta\right),
\]
则式 @eq:Bayesian_inference_1 可以简单改写为

```math {@eq:Bayesian_inference}
\pi\!\left(\theta \mkern2mu|\mkern2mu \boldsymbol{x}\right)\propto
L\!\left(\theta \mkern2mu|\mkern2mu \boldsymbol{x}\right)\cdot \pi(\theta).
```

上式是贝叶斯参数估计方法的核心。在贝叶斯参数估计方法中，我们可以
直接将未知参数的后验分布作为参数估计的最终结果，也可以基于后验分布
进一步给出未知参数的点估计量。常用的贝叶斯点估计量有如下两种：

1. 最小均方误差（minimum mean square error, MMSE）估计量
   $\hat\theta_{\mathrm{MMSE}}(X_1,\ldots,X_n)$：该估计量
   实际上就是$\Theta$在给定样本$X_1,\ldots,X_n$时的条件期望
   $\mathbb{E}\!\left[\Theta \mkern2mu|\mkern2mu X_1,\ldots,X_n\right]=
   \mathbb{E}\!\left[\Theta \mkern2mu|\mkern2mu \boldsymbol{X}\right]$，它可由后验分布算得：
   \[
   \hat\theta_{\mathrm{MMSE}}(\boldsymbol{x}) = \mathbb{E}\!\left[\Theta \mkern2mu|\mkern2mu \boldsymbol{X}=\boldsymbol{x}\right]
   =\int \theta\cdot\pi\!\left(\theta \mkern2mu|\mkern2mu \boldsymbol{x}\right)\,\mathrm{d}\theta.
   \]
   之所以将其称为最小均方误差估计量，是因为
   $\hat\theta_{\mathrm{MMSE}}(X_1,\ldots,X_n)$是所有统计量中
   使得均方误差达到最小的统计量
   （见[第4.4节](/books/概率与数理统计/随机变量的深入内容/条件分布与条件期望/)最后一小节）：
   \[
   \hat\theta_{\mathrm{MMSE}}
   =\argmin_{\hat\theta}\,\operatorname{MSE}_\Theta(\hat\theta),
   \quad\text{其中}\ \operatorname{MSE}_\Theta(\hat\theta)=\mathbb{E}\!\left[\big|\hat\theta(X_1,\ldots,X_n)-\Theta\big|^2\right].
   \]
   需要注意的是，上式中的均方误差
   $\operatorname{MSE}_\Theta(\hat\theta)$是把未知参数作为随机变量
   并取全期望而得到的，从而与参数的具体取值无关，它并非
   式 @eq:point_estimator_MSE 定义的频率学派理论中依赖于
   参数取值的均方误差$\operatorname{MSE}_\theta(\hat\theta)$。

::: remark
实际上，由于
\[
\begin{aligned}
\operatorname{MSE}_\Theta(\hat\theta)
={} &
\int \pi(\theta)\,\mathrm{d}\theta \int \big|\hat\theta(x_1,\ldots,x_n)-\theta\big|^2\prod_{i=1}^n f\!\left(x_i \mkern2mu|\mkern2mu \theta\right)\,\mathrm{d} x_1\cdots \mathrm{d} x_n,
\end{aligned}
\]
若把条件概率密度函数$f\!\left(\cdot \mkern2mu|\mkern2mu \theta\right)$当成是由$\theta$参数化的
概率分布，
则上式右端出现的积分
$\int \big|\hat\theta(x_1,\ldots,x_n)-\theta\big|^2\prod_{i=1}^n f\!\left(x_i \mkern2mu|\mkern2mu \theta\right)\,\mathrm{d} x_1\cdots \mathrm{d} x_n$
给出的就是频率学派理论中依赖于参数值$\theta$的均方误差
$\operatorname{MSE}_\theta(\hat\theta)$，从而
\[
\operatorname{MSE}_\Theta(\hat\theta)
=\int \operatorname{MSE}_\theta(\hat\theta)\,\pi(\theta)\,\mathrm{d}\theta,
\]
也就是说，我们可以把$\operatorname{MSE}_\Theta(\hat\theta)$
当作是由$\operatorname{MSE}_\theta(\hat\theta)$按照分布
$\pi(\theta)$进行加权平均而得到的。
:::

2. 最大后验（maximum a posteriori, MAP）估计量
   $\hat\theta_{\mathrm{MAP}}(X_1,\ldots,X_n)$：该估计量是通过
   求后验分布概率密度函数的最大值点得到的：
   \[
   \hat\theta_{\mathrm{MAP}}(\boldsymbol{x})
   =\argmax_{\theta}\pi\!\left(\theta \mkern2mu|\mkern2mu \boldsymbol{x}\right).
   \]
   将式 @eq:Bayesian_inference  代入可得
   \[
   \hat\theta_{\mathrm{MAP}}(\boldsymbol{x})
   =\argmax_{\theta}
   \left(\ln L\!\left(\theta \mkern2mu|\mkern2mu \boldsymbol{x}\right)
   +\ln \pi(\theta)\right).
   \]
   由上式可看出MAP估计量与最大似然估计量具有相似之处，但MAP估计量中
   不仅需要考虑似然函数的取值（它反映了样本值对于参数估计的影响），还需要
   考虑先验概率密度函数的取值（它反映了未收集到样本时未知参数的先验信息
   对于参数估计的影响）。直观上，我们会认为对数似然函数
   $\ln L\!\left(\theta \mkern2mu|\mkern2mu \boldsymbol{x}\right)$衡量了候选参数值$\theta$
   与样本数据的拟合程度，而$\ln \pi(\theta)$则是对参数施加的一个
   正则项（regularization term），这个正则项能够帮助我们避免过拟合
   （overfitting）。

::: example
仍考虑 @example:parameter_estimation_normal 的情形，
但我们换用贝叶斯方法对未知的期望（温度）进行估计。我们换用$\Theta$来
表示未知的期望，并设它的先验分布为$\mathcal{N}(\mu_0,\sigma_0^2)$，
其中$\mu_0,\sigma_0^2$均为已知量（它们有时被称为超参数）。而在
给定$\Theta=\theta$后，总体的条件分布依然为正态分布
$\mathcal{N}(\theta,\sigma^2)$，其中$\sigma^2$已知。则此时
先验分布的概率密度函数为
\[
\pi(\theta) = \frac{1}{\sqrt{2\pi}\sigma_0}
\exp\!\left(-\frac{(\theta-\mu_0)^2}{2\sigma_0^2}\right),
\]
而似然函数$L\!\left(\theta \mkern2mu|\mkern2mu \boldsymbol{x}\right)$则等于
\[
L\!\left(\theta \mkern2mu|\mkern2mu \boldsymbol{x}\right)
=\prod_{i=1}^n \frac{1}{\sqrt{2\pi}\sigma}\exp\!\left(
-\frac{(x_i-\theta)^2}{2\sigma^2}
\right)
=\frac{1}{(2\pi\sigma^2)^{n/2}}
\exp\!\left(
-\frac{1}{2\sigma^2}\sum_{i=1}^n (x_i-\theta)^2
\right)
.
\]
由此可算得在给定$(X_1,\ldots,X_n)=\boldsymbol{x}$时
$\Theta$的后验分布为
\[
\begin{aligned}
\pi\!\left(\theta \mkern2mu|\mkern2mu \boldsymbol{x}\right)
& \propto \pi(\theta)\cdot L\!\left(\theta \mkern2mu|\mkern2mu \boldsymbol{x}\right) \\
& \propto
\exp\!\left(
-\frac{(\theta-\mu_0)^2}{2\sigma_0^2}
-\frac{1}{2\sigma^2}\sum_{i=1}^n(x_i-\theta)^2
\right) \\
&\propto
\exp\!\left(
-\frac{1}{2}\!\left(
\frac{1}{\sigma_0^2}
+\frac{n}{\sigma^2}
\right)\theta^2
+\left(\frac{\mu_0}{\sigma_0^2}
+\frac{1}{\sigma^2}\sum_{i=1}^n x_i\right)\theta
\right) \\
& \propto
\exp\!\left(
-\frac{\big(\theta-\tilde\theta\big)^2}{2\tilde{\sigma}^2}
\right),
\end{aligned}
\]
其中
\[
\tilde\sigma^2 =\left(
\frac{1}{\sigma_0^2}
+\frac{n}{\sigma^2}
\right)^{\!-1},
\qquad \tilde\theta = \tilde\sigma^2
\left(\frac{\mu_0}{\sigma_0^2}
+\frac{1}{\sigma^2}\sum_{i=1}^n x_i\right).
\]
注意到在计算$\pi\!\left(\theta \mkern2mu|\mkern2mu \boldsymbol{x}\right)$的过程中，
我们只需保留与$\theta$有关的项，而可以把仅与已知参数、超参数
以及$\boldsymbol{x}$有关的系数均“吸收”进正比例符号$\propto$当中。
通过以上的计算可看出，$\Theta$在给定$X_1=x_1,\ldots,X_n=x_n$
时的条件分布为正态分布$\mathcal{N}\big(\tilde\theta,\tilde\sigma^2\big)$。
若要对$\Theta$进行点估计，则其MMSE与MAP估计量均为
\[
\hat\theta(X_1,\ldots,X_n)
=\left(\frac{1}{\sigma_0^2}
+\frac{n}{\sigma^2}\right)^{\!-1}
\left(\frac{\mu_0}{\sigma_0^2}
+\frac{n\overline{X}}{\sigma^2}\right),
\]
其中$\overline{X}$为样本均值。注意到当$n\rightarrow\infty$时，
$\hat\theta(X_1,\ldots,X_n)$将（逐点）收敛于样本均值$\overline{X}$，
而$\overline{X}$则是频率学派点估计理论中正态总体期望的最大似然估计量。
:::

[^1]: 与其它章节不同，本节我们用$\Theta$表示作为随机变量或随机向量的未知参数，
    而不再表示所有可能的参数取值构成的集合。
