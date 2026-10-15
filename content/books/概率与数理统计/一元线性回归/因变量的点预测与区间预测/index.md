---
title: 因变量的点预测与区间预测
---

本节中我们考虑这样一个问题：假设基于样本
$(x_1,Y_1),\ldots,(x_n,Y_n)$已经构造出了回归系数的点估计量
$\widehat\beta_0,\widehat\beta_1$，而我们对因变量$Y$在
$x=x_0$处的值$Y_0$感兴趣，其中$x_0$为一给定的实数且与
$x_1,\ldots,x_n$相异；换句话说
\[
Y_0 = \beta_0+\beta_1x_0 + \varepsilon_0,
\]
其中$\varepsilon_0$与$\varepsilon_1,\ldots,\varepsilon_n$
独立且同分布，则在尚未观测到$Y_0$的值的情况下，我们应当如何对
$Y_0$的值进行预测？

由于随机误差$\varepsilon_0$与$\varepsilon_1,\ldots,
\varepsilon_n$独立，若仅基于样本$(x_1,Y_1),\ldots,(x_n,Y_n)$
对$\varepsilon_0$预测，则只能将其预测为$\mathbb{E}[\varepsilon_0]=0$，
故我们可以直接用$\mu(x_0)$的点估计量
\[
\widehat\mu(x_0) = \widehat\beta_0+\widehat\beta_1 x_0
\]
作为$Y_0$的点预测量，且不难看出它满足如下意义的“无偏性”：
$\mathbb{E}[\widehat\mu(x_0)-Y_0]=0$。但许多情况下，
仅给出单个点预测是不够的，我们还希望对点预测的精度有定量的刻画。
具体而言，我们希望找到一个仅依赖于$(x_1,Y_1),\ldots,(x_n,Y_n)$
的随机区间$\big[\widehat{Y}_0^l,\widehat{Y}_0^u\big]$，使得
\[
\mathbb{P}\!\left(
Y_0\in \big[\widehat{Y}_0^l,\widehat{Y}_0^u\big]
\right)=1-\alpha,
\]
其中$\alpha\in\left]0,1\right[$为事先给定的常数。我们将满足
上述条件的$\big[\widehat{Y}_0^l,\widehat{Y}_0^u\big]$称为
$Y_0$的置信水平为$1-\alpha$的**预测区间**
（prediction interval）。

现假设$\varepsilon_0,\varepsilon_1,\ldots,\varepsilon_n$
均服从正态分布$\mathcal{N}(0,\sigma^2)$。为了求出$Y_0$的预测区间，
这次我们从点预测误差
\[
e_p = Y_0 - \widehat{\mu}(x_0)
\]
入手。注意到$e_p$为$Y_0,Y_1,\ldots,Y_n$的线性函数，而
$Y_0,Y_1,\ldots,Y_n$相互独立且服从正态分布，故$e_p$也服从正态分布，
其期望为$\mathbb{E}[e_p]=0$，而方差为
\[
\begin{aligned}
\operatorname{Var}(e_p)
={} & \operatorname{Var}(Y_0-\widehat\mu(x_0)) \\
={} &
\operatorname{Var}(Y_0)
+
\operatorname{Var}(\widehat\mu(x_0))  \\
={} &
\sigma^2\!\left(1+\frac{1}{n}+\frac{(x_0-\overline{x})^2}{S_{xx}}\right),
\end{aligned}
\]
其中第二步是因为$\mu(x_0)-\widehat\mu(x_0)$与$\varepsilon_0$
相互独立。在求得$e_p$的方差后，即可考虑构造如下枢轴量：
\[
\frac{e_p}{\sqrt{\widehat{\sigma}^2\big(1+\frac{1}{n}+\frac{(x_0-\overline{x})^2}{S_{xx}}\big)}}
=
\frac{Y_0-\widehat{\mu}(x_0)}{\sqrt{\widehat{\sigma}^2\big(1+\frac{1}{n}+\frac{(x_0-\overline{x})^2}{S_{xx}}\big)}}
.
\]
利用 @lemma:simple_linear_regression_var_est_distribution
可验证其服从分布$t(n-2)$，故
\[
\mathbb{P}\!\left(
-t_{\alpha/2}(n\!-\!2)
\leq
\frac{Y_0-\widehat\mu(x_0)}{
\sqrt{\widehat{\sigma^2}\big(1+\frac{1}{n}
+\frac{(x_0-\overline{x})^2}{S_{xx}}\big)}}
\leq t_{\alpha/2}(n\!-\!2)
\right)=1-\alpha,
\]
经过等价变形并根据前述预测区间的定义可得，若令
\[
\begin{aligned}
\widehat{Y}_0^l
={} & \widehat\mu(x_0) - t_{\alpha/2}(n\!-\!2)
\sqrt{\widehat{\sigma^2}\!\left(1+\frac{1}{n}
+\frac{(x_0-\overline{x})^2}{S_{xx}}\right)}, \\
\widehat{Y}_0^u
={} & \widehat\mu(x_0) + t_{\alpha/2}(n\!-\!2)
\sqrt{\widehat{\sigma^2}\!\left(1+\frac{1}{n}
+\frac{(x_0-\overline{x})^2}{S_{xx}}\right)},
\end{aligned}
\]
则$\big[\widehat{Y}_0^l,\widehat{Y}_0^u\big]$给出了$Y_0$的
一个置信水平为$1-\alpha$的预测区间。不难看出，预测区间
$\big[\widehat{Y}_0^l,\widehat{Y}_0^u\big]$的宽度
$\widehat{Y}_0^u-\widehat{Y}_0^l$随着$|x_0-\overline{x}|$
的增大而增大，这意味着，在保持置信水平为$1-\alpha$的情况下，
$x_0$越远离$\overline{x}$，则对$Y_0$进行区间预测的精度越低。
此外，$Y_0$的预测区间总是宽于$\mu(x_0)$的置信区间，这是因为
对$Y_0$进行区间预测时需要把$Y_0$上的随机误差$\varepsilon_0$
也考虑进来。
