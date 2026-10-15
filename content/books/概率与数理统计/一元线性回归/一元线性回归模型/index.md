---
title: 一元线性回归模型
---

本章当中，我们将对**线性回归**（linear regression）进行
简单的介绍。与前几章不同的是，在线性回归以及更一般的回归分析问题中，
我们不再只关注单个变量的概率分布情况，而是考虑两个或多个取值连续的变量
并考察它们的依赖关系。具体而言，我们认为这些具有依赖关系的取值连续的
变量由一些确定性的变量$x^{(1)},\ldots,x^{(d)}$与一些随机变量
$Y^{(1)},\ldots,Y^{(l)}$给出，其中

- $x^{(1)},\ldots,x^{(d)}$看成自变量（independent variable）。
  $x^{(1)},\ldots,x^{(d)}$的其它名称还包括regressors、
  exogenous variables、explanatory variables、covariates、
  input variables、predictor variables等。

- $Y^{(1)},\ldots,Y^{(l)}$看成是带有随机因素的因变量
  （dependent variable），其（联合）概率分布的具体形式取决于
  $x^{(1)},\ldots,x^{(d)}$的值。$Y^{(1)},\ldots,Y^{(l)}$的
  其它名称还包括regressands、endogenous variables、
  response variables、output variables等。

而回归分析的基本任务，就是通过收集样本数据，对
$(Y^{(1)},\ldots,Y^{(l)})$的分布以何种方式依赖于
$x^{(1)},\ldots,x^{(d)}$的取值进行推断；或者说，我们希望考察，
当把$(Y^{(1)},\ldots,Y^{(l)})$的分布与
$x^{(1)},\ldots,x^{(d)}$的取值的关系用某种统计模型进行建模以后，
这个统计模型能否与收集到的样本数据相吻合。

在本章中，我们主要考察自变量$x$与因变量$Y$均为一维变量（也就是一元回归）
的情形。我们假定样本由成对数据
\[
(x_1,Y_1),\ldots,(x_n,Y_n)
\]
给出，其中每个$x_i$均为确定性的量，而$Y_i$则与自变量取值为
$x_i$时的因变量$Y$同分布，且$Y_1,Y_2,\ldots,Y_n$之间相互独立。
通常，我们不会让$x_1,\ldots,x_n$都等于同一个值，否则我们只能
推断$x$等于单个值时$Y$的分布信息，而无法推断$x$变动时$Y$的分布
对$x$的依赖关系。

在一元线性回归分析中，我们将自变量$x$与因变量$Y$之间的依赖关系
用如下方式进行建模：

```math {@eq:linear_regression_model1}
Y = \beta_0+\beta_1 x + \varepsilon,
```

其中$\varepsilon$服从期望为$0$、方差为$\sigma^2>0$的某个分布，
且该分布与$x$的取值无关。$\beta_0,\beta_1$被称为**回归系数**
（regression coefficient），它们与方差$\sigma^2$均为未知的参数。
函数$\mu(x) = \beta_0+\beta_1x$则被称为**回归函数**，
有时也会用符号$\mathbb{E}\!\left[Y \mkern2mu|\mkern2mu x\right]$来表示它。我们通常
把$\varepsilon$看作对$\beta_0+\beta_1x$进行观测时产生的
随机误差。对于样本$(x_1,Y_1),\ldots,(x_n,Y_n)$，则有

```math {@eq:linear_regression_model2}
Y_i = \beta_0+\beta_1 x_i + \varepsilon_i,
```

其中随机误差$\varepsilon_1,\ldots,\varepsilon_n$独立同分布
且期望为$0$、方差为$\sigma^2$。式 @eq:linear_regression_model1
给出了一种用于描述$x$与$Y$之间依赖关系的统计模型，我们将其称为
一元线性回归模型。

::: remark
需要指出的是，一元线性回归模型中的“一元”指的是自变量的维数为$1$，
而“线性”则是指$\mu(x)=\mathbb{E}\!\left[Y \mkern2mu|\mkern2mu x\right]$关于回归系数
$\beta_0,\beta_1$是线性的。例如，若$x$与$Y$之间的关系由如下式子给出：
\[
Y = \beta_0 + \beta_1 \phi(x) + \varepsilon,
\]
其中$\phi:\mathbb{R}\rightarrow\mathbb{R}$为任意函数，那么
我们依然可以把它作为一元线性回归模型进行处理，这是因为只需令
$t=\phi(x)$即可将模型化为 @eq:linear_regression_model1
的形式，随后直接套用一元线性回归模型的理论与方法即可。
:::

对于一元线性回归模型，我们可以提出如下几类问题：

- 若线性回归模型 @eq:linear_regression_model1
  很好地描述了$x$与$Y$之间的依赖关系，则应当如何对未知参数
  $\beta_0,\beta_1$与$\sigma^2$进行点估计、区间估计与假设检验？

- 给定一个新的自变量的值$x_0$，如何基于线性回归模型
  @eq:linear_regression_model1 与获得的样本，对
  $x=x_0$时$Y$的取值进行预测？

- 如何判断线性回归模型 @eq:linear_regression_model1
  能否足够好地解释观测数据？

在接下来的几节，我们将对前两类问题给出解答，而对第三类问题只作简要介绍。
