---
title: 条件期望的计算
---
本节中，我们给出$(X,Y)$为离散型或连续型随机向量时，
条件期望$\mathbb{E}\!\left[h(X,Y) \mkern2mu|\mkern2mu Y\right]$的计算方法，
也就是条件期望的law of the unconscious statistician (LOTUS)。

::: theorem {@theorem:conditional_expectation_cont_rv}
设$X,Y$为两个随机变量，二元函数
$h:\mathbb{R}^2\rightarrow\mathbb{R}$使得
$\mathbb{E}[h(X,Y)]$存在，且对任意$y\in\mathbb{R}$，
$\mathbb{E}[h(X,y)]$均存在。

1. 若$(X,Y)$为离散型随机向量，令

   ```math {@eq:conditional_expectation_LOTUS_discrete}
   \phi_X(y)
   =\begin{cases}
   \displaystyle\sum_x
   h(x,y)\cdot \frac{p_{X,Y}(x,y)}{p_{Y}(y)},
   & \text{若}\ p_{Y}(y)>0, \\
   \mathbb{E}[h(X,y)], &  \text{若}\ p_{Y}(y)=0.
   \end{cases}
   ```

   则$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]=\phi_X(Y)$。

2. 若$(X,Y)$为连续型随机向量，令

   ```math {@eq:conditional_expectation_LOTUS_continuous}
   \phi_X(y)
   =\begin{cases}
   \displaystyle\int_{-\infty}^{+\infty}
   h(x,y)\cdot \frac{f_{X,Y}(x,y)}{f_{Y}(y)}\,\mathrm{d} x,
   & \text{若}\ f_{Y}(y)>0, \\
   \mathbb{E}[h(X,y)], &  \text{若}\ f_{Y}(y)=0.
   \end{cases}
   ```

   则$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]=\phi_X(Y)$。

:::

::: proof
证明的基本思路就是验证
式 @eq:conditional_expectation_LOTUS_discrete
或 @eq:conditional_expectation_LOTUS_continuous
给出的$\phi_X(Y)$是否满足条件期望的定义式
@eq:conditional_expectation_identity。

1. 当$(X,Y)$为离散型随机向量时，任取有界函数
   $g:\mathbb{R}\rightarrow\mathbb{R}$，则有
   \[
       \begin{aligned}
       \mathbb{E}\!\left[
       \phi_X(Y)\cdot g(Y)
       \right] ={} &
       \sum_y \phi_X(y)\,g(y)\,p_Y(y) \\
       ={} &
       \sum_y\left(
       \sum_x h(x,y)\cdot\frac{p_{X,Y}(x,y)}{p_Y(y)}
       \right)g(y)\,p_Y(y) \\
       ={} &
       \sum_{(x,y)} h(x,y)\,g(y)\,p_{X,Y}(x,y) \\
       ={} &
       \mathbb{E}[h(X,Y)\cdot g(Y)],
       \end{aligned}
   \]
   其中第一步与最后一步来自于期望的LOTUS，第三步是因为
   $p_Y(y)=0$时必定有$p_{X,Y}(x,y)=0$。故式 @eq:conditional_expectation_identity
   对任意有界函数$g$均成立。

2. 当$(X,Y)$为连续型随机向量时，记集合
   $U=\{y\in\mathbb{R} \mid f_{Y}(y)=0\}$，
   任取有界函数$g:\mathbb{R}\rightarrow\mathbb{R}$，则有
   \[
       \begin{aligned}
       \mathbb{E}\!\left[\phi_X(Y)\cdot g(Y)
       \right]
       & =\int_{-\infty}^{+\infty}
       \phi_X(y)\,g(y)\,
       f_{Y}(y)
       \,\mathrm{d} y \\
       & =
       \int_{\mathbb{R}\backslash U}
       \left(\int_{-\infty}^{+\infty}
       h(x,y)\cdot
       \frac{f_{X,Y}(x,y)}{f_{Y}(y)}
       \,\mathrm{d} x\right)
       g(y)\,f_{Y}(y)\,\mathrm{d} y \\
       & = \iint_{\,\mathbb{R}^2}
       h(x,y)\, g(y)\,f_{X,Y}(x,y)
       \,\mathrm{d} x\mathrm{d} y \\
       & =
       \mathbb{E}\!\left[h(X,Y)\cdot g(Y)\right],
       \end{aligned}
   \]
   其中第一步与最后一步来自于期望的LOTUS，第三步将累次积分化为了重积分
   并利用了$f_{X,Y}(x,y)=0,\,\forall (x,y)\in \mathbb{R}\times U$。
   故式 @eq:conditional_expectation_identity  对任意有界函数$g$均成立。

:::
