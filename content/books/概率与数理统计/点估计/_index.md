---
title: 参数估计I：点估计
---
本章以及下一章中，我们对数理统计中的**参数估计**
（parameter estimation）问题进行介绍。在参数估计问题中，
我们假设总体的概率分布未知，但可以由某个参数$\theta$所唯一确定，
也就是说，总体可以表示为形如$F(x;\theta)$的分布函数
（也可以是形如$p(x;\theta)$的分布列或形如$f(x;\theta)$的概率密度函数）。
这个未知参数$\theta$可以是一个标量，也可以是一个多维向量，
而不同的参数值$\theta$对应于不同的概率分布
[^1]。
我们用$\Theta$来表示所有可能的参数取值构成的集合。现假设我们已经
获取了该总体的一组样本，那么应该如何根据样本的值，来对这个总体的
真实参数值，或者是真实参数值的某个函数值进行推断？

::: example {@example:parameter_estimation_normal}
假设我们想要用温度传感器测量某个恒温箱中的温度。由于测量原理以及
仪器精度限制，传感器给出的测量值$X$带有一定的随机性，它服从期望为
真实温度、方差为$\sigma^2$的正态分布，其中$\sigma^2$已经由传感器
生产厂家给出。已知$\mu_{\min},\mu_{\max}$为恒温箱温度的最小与
最大可能取值。我们希望通过对恒温箱中的温度进行多次测量，来对真实温度
进行推断。

上述问题可以转化为如下参数估计问题：总体的概率密度函数可以表示为
\[
    f(x;\mu) = \frac{1}{\sqrt{2\pi}\sigma}
    \exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right),\quad x\in\mathbb{R},
\]
其中$\mu$为未知的参数，它的取值范围为区间
$\left[\mu_{\min},\mu_{\max}\right]$。通过多次测量可获得
该总体的一组样本$X_1,\ldots,X_n$，我们希望基于样本
$X_1,\ldots,X_n$对未知参数$\mu$进行估计。
:::

::: example {@example:parameter_estimation_normal_unknown_var}
依然考虑 @example:parameter_estimation_normal  的情况，
然而这次我们假设测量值$X$的方差也是未知的，只知道它大于$0$。
这种情况下，我们需要把期望$\mu$与方差$\sigma^2$均作为未知参数：
\[
    f(x;\mu,\sigma^2) = \frac{1}{\sqrt{2\pi}\sigma}
    \exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right),\quad x\in\mathbb{R},
\]
其中$\mu\in\left[\mu_{\min},\mu_{\max}\right]$，
而方差的范围可以取为$\sigma^2\in\left[0,+\infty\right[$。
但另一方面，若我们只关心真实温度的值，那么只需要对未知参数
$(\mu,\sigma^2)$的函数值$g(\mu,\sigma^2)=\mu$进行估计即可。
:::

[^1]: 一些实际问题中可能会出现同一个概率分布可由 不同的参数值表示的情形。本讲义中不对这类情况下的参数估计问题进行讨论。
