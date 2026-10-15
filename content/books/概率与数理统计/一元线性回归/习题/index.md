---
title: 习题选编
---
::: exercise
证明最小二乘估计中残差的如下性质：

1. $\displaystyle\sum_{i=1}^n e_i = 0$。

2. $\displaystyle\sum_{i=1}^n x_ie_i = 0$。

3. $\displaystyle\sum_{i=1}^n \widehat{Y}_i e_i = 0$。

:::

::: exercise
证明如下**方差分析恒等式**（analysis-of-variance identity）：
\[
    \begin{aligned}
    {SS}_{\mathrm{T}} ={} &
    {SS}_{\text{Res}} + \widehat\beta_1 S_{xY} \\
    ={} & {SS}_{\text{Res}} + {SS}_{\mathrm{R}},
    \end{aligned}
\]
其中
\[
    {SS}_{\mathrm{T}} = \sum_{i=1}^n \big(Y_i-\overline{Y}\big)^2,
    \quad
    {SS}_{\text{Res}} = \sum_{i=1}^n \left(Y_i-\widehat{Y}_i\right)^2,
    \quad
    {SS}_{\mathrm{R}} = \sum_{i=1}^n \left(\widehat{Y}_i-\overline{Y}\right)^2
\]
分别为校正平方和（corrected sum of squares）、
残差平方和（residual sum of squares）与回归平方和
（regression sum of squares）。
:::

::: exercise
对于一元线性回归，证明样本相关系数$R$满足
\[
    R^2 = \frac{{SS}_{\mathrm{R}}}{{SS}_{\mathrm{T}}}
    =\frac{\sum_{i=1}^n \big(\widehat{Y}_i-\overline{Y}\big)^2}{\sum_{i=1}^n \big(Y_i-\overline{Y}\big)^2},
\]
其中$\widehat{Y}_i = \widehat\beta_0+\widehat\beta_1 x_i$，
而$\widehat\beta_0,\widehat\beta_1$为回归系数的最小二乘估计量。
:::

::: exercise
设因变量$x$与自变量$Y$之间满足关系式
\[
    Y = \beta_0+\beta_1 x+\varepsilon,
\]
其中随机误差$\varepsilon$的期望为$0$而方差为$\sigma^2$，
系数$\beta_0$已知，而系数$\beta_1$与方差$\sigma^2$未知。
令$(x_1,Y_1),\ldots,(x_n,Y_n)$为一组样本。

1. 考虑用最小二乘法对$\beta_1$进行点估计：
   \[
       \widehat\beta_1 = \argmin_{\beta_1\in\mathbb{R}}
       \frac{1}{2}\sum_{i=1}^n (Y_i-\beta_0-\beta_1x_i)^2.
   \]
   试求$\widehat\beta_1$的表达式。

2. 试求$\sigma^2$的一个无偏估计量。

3. 任取$x_0\in\mathbb{R}$，试求$\widehat{Y}_0 =
\beta_0+\widehat\beta_1 x_0$的方差。

:::

::: exercise
设某个自变量$x$与因变量$Y$之间服从线性回归模型，
我们可以设计实验并选择在哪些$x_1,\ldots,x_n$处观测相应的
$Y_1,\ldots,Y_n$的值。若要求$-1\leq x_i\leq 1$，
则应当怎样选取$x_1,\ldots,x_n$使得$\beta_1$的最小二乘估计的
均方误差最小？

注：本题取自[@montgomery2021introduction]习题2.29。
:::

::: exercise
在一线性回归问题中，数据由下表给出：

\begin{tabular}{ccccccc}
!$i$ & !$x_i$ & !$y_i$ && !$i$ & !$x_i$ & !$y_i$ \\
1 & $0.3$ & $0.4$ && 6 & $1.0$ & $0.8$ \\
2 & $1.4$ & $0.9$ && 7 & $2.0$ & $0.7$ \\
3 & $1.0$ & $0.4$ && 8 & $-1.0$ & $-0.4$ \\
4 & $-0.3$ & $-0.3$ && 9 & $-0.7$ & $-0.2$ \\
5 & $-0.2$ & $0.3$ && 10 & $0.7$ & $0.7$
\end{tabular}

1. 求出$F=\frac{{SS}_{\mathrm{R}}}
{{SS}_{\text{Res}}/(n-2)}$，再对回归显著性进行检验，
   取显著性水平为$5\%$。

2. 试求出$x=0.5$时$\mathbb{E}\!\left[Y \mkern2mu|\mkern2mu x\right]=
\beta_0+\beta_1x$的置信水平为$95\%$的置信区间。

3. 试对$x=1.2$时的因变量进行区间预测，取置信水平为$95\%$。

注：本题数据取自[@degroot2010probability]第11.3节习题1。
:::
