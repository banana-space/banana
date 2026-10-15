---
title: 协方差与相关系数
---

让我们考虑这样一个问题：给定两个随机变量$X,Y$，
它们的和$X+Y$的方差等于什么？由方差的定义可得
\[
\begin{aligned}
\operatorname{Var}(X+Y)
& =\mathbb{E}\!\left[(X-\mathbb{E}[X]+Y-\mathbb{E}[Y])^2\right] \\
& = \mathbb{E}\!\left[(X-\mathbb{E}[X])^2\right]+
\mathbb{E}\!\left[(Y-\mathbb{E}[Y])^2\right]
+2\,\mathbb{E}\!\left[(X-\mathbb{E}[X])(Y-\mathbb{E}[Y])\right].
\end{aligned}
\]
我们看到$X+Y$的方差不仅包含了$X$的方差与$Y$的方差的和，
还包括了一个交叉项
$\mathbb{E}[(X-\mathbb{E}[X])(Y-\mathbb{E}[Y])]$。
我们将这个交叉项定义为随机变量$X$与$Y$的协方差。

::: definition
给定随机变量$X,Y$，设$\mathbb{E}[X]$与$\mathbb{E}[Y]$均存在。
若期望
\[
\mathbb{E}[(X-\mathbb{E}[X])(Y-\mathbb{E}[Y])]
\]
存在，则将该期望称作$X$与$Y$的**协方差**
（covariance），记作$\operatorname{Cov}(X,Y)$或$\sigma_{XY}$。
:::

由定义不难看出协方差具有对称性
$\operatorname{Cov}(X,Y)=\operatorname{Cov}(Y,X)$，
且方差其实是协方差的一个特例，即
$\operatorname{Var}(X)=\operatorname{Cov}(X,X)$。
我们将协方差$\operatorname{Cov}(X,Y)$的定义式展开，可得

```math {@eq:covariance_computation}
\begin{aligned}
\operatorname{Cov}(X,Y)
={} & \mathbb{E}\!\left[XY-\mathbb{E}[X]\,Y-X\,\mathbb{E}[Y]
+\mathbb{E}[X]\,\mathbb{E}[Y]\,\right] \\
={} &
\mathbb{E}[XY] - \mathbb{E}[X]\,\mathbb{E}[Y].
\end{aligned}
```

在许多场合中用上式计算协方差是更加方便的。

以下命题指出，协方差具有“双线性”的性质。

::: proposition
设$X_1,\ldots,X_m$与$Y_1,\ldots,Y_n$为两组随机变量，
且协方差$\operatorname{Cov}(X_i,Y_j)$对任意$i=1,\ldots,m$
与$j=1,\ldots,n$均存在。$\alpha_1,\ldots,\alpha_m$
与$\beta_1,\ldots,\beta_n$为两组取值任意的实数，则有
\[
\operatorname{Cov}\!\left(\sum_{i=1}^m \alpha_i X_i,\sum_{j=1}^n \beta_j Y_j\right)
=\sum_{i=1}^m\sum_{j=1}^n \alpha_i\beta_j\operatorname{Cov}(X_i,Y_j).
\]
:::

::: proof
由协方差的定义与期望的线性，可得
\[
\begin{aligned}
\operatorname{Cov}\!\left(\sum_{i=1}^m \alpha_i X_i,\sum_{j=1}^n \beta_j Y_j\right)
={} & \mathbb{E}\!\left[
\left(\sum_{i=1}^m \alpha_i X_i
-
\mathbb{E}\!\left[\sum_{i=1}^m \alpha_i X_i\right]
\right)\!
\left(\sum_{j=1}^n \beta_j Y_j
-
\mathbb{E}\!\left[\sum_{j=1}^n \beta_j Y_j\right]
\right)
\right] \\
={} &
\mathbb{E}\!\left[
\left(
\sum_{i=1}^m \alpha_i(X_i-\mathbb{E}[X_i])
\right)
\left(
\sum_{j=1}^n \beta_j(Y_j-
\mathbb{E}[Y_j])
\right)
\right] \\
={} &
\sum_{i=1}^m\sum_{j=1}^n
\alpha_i\beta_j
\mathbb{E}\!\left[(X_i-\mathbb{E}[X_i])(Y_j-
\mathbb{E}[Y_j])\right] \\
={} & \sum_{i=1}^m\sum_{j=1}^n
\alpha_i\beta_j\operatorname{Cov}(X_i,Y_j).
\end{aligned}
\]
证毕。
:::

::: example {@example:best_linear_approximation}
设$X,Y$为两个随机变量，二者各自的方差与协方差均存在，
且$\operatorname{Var}(X)>0$。我们考虑如何用$X$的一次函数
$\beta X+\alpha$来近似$Y$。具体而言，我们希望找到
$\alpha,\beta\in\mathbb{R}$使得近似误差的均方值
\[
\mathbb{E}\!\left[(Y-(\beta X+\alpha))^2\right]
\]
达到最小。

为求得最优的$\alpha$与$\beta$，首先注意到
\[
\begin{aligned}
& \mathbb{E}\!\left[(Y-(\beta X+\alpha))^2\right] \\
={} &
\mathbb{E}\!\left[
\left(
\left[Y-\mathbb{E}[Y]-\beta(X-\mathbb{E}[X])\right]
+ \left[
\mathbb{E}[Y]-\left(\beta\,\mathbb{E}[X]+\alpha\right)\right]
\right)^2
\right] \\
={} &
\mathbb{E}\!\left[
\left(Y-\mathbb{E}[Y]-\beta(X-\mathbb{E}[X])\right)^2\right]
+\mathbb{E}\!\left[
\left(
\mathbb{E}[Y]-\left(\beta\,\mathbb{E}[X]+\alpha\right)\right)^2
\right] \\
& + 2\,
\mathbb{E}\!\left[
\left(Y-\mathbb{E}[Y]-\beta(X-\mathbb{E}[X])\right)\left(
\mathbb{E}[Y]-\left(\beta\,\mathbb{E}[X]+\alpha\right)\right)\right] \\
={} &
\mathbb{E}\!\left[
\left(Y-\mathbb{E}[Y]-\beta(X-\mathbb{E}[X])\right)^2\right]
+
\left(
\mathbb{E}[Y]-\left(\beta\,\mathbb{E}[X]+\alpha\right)\right)^2 \\
={} &
\operatorname{Var}(X)\left(\beta
-\frac{\operatorname{Cov}(X,Y)}{\operatorname{Var}(X)}\right)^{\!2}
+
\left(
\alpha -
\left(
\mathbb{E}[Y]-\beta\,\mathbb{E}[X]\right)\right)^2
+\operatorname{Var}(Y)
-\frac{\left(\operatorname{Cov}(X,Y)\right)^2}{\operatorname{Var}(X)}.
\end{aligned}
\]
观察上式右端的形式不难看出，若要使
$\mathbb{E}\!\left[(Y-(\beta X+\alpha))^2\right]$取到最小值，
则$\beta$与$\alpha$应满足
\[
\begin{aligned}
\beta ={} &
\frac{\operatorname{Cov}(X,Y)}{\operatorname{Var}(X)}, \\
\alpha ={} &
\mathbb{E}[Y] - \beta\,\mathbb{E}[X]
=\mathbb{E}[Y] -
\frac{\operatorname{Cov}(X,Y)}{\operatorname{Var}(X)}\,\mathbb{E}[X].
\end{aligned}
\]
也就是说，若以误差的均方值为衡量标准，则

```math {@eq:best_linear_estimation_scalar}
f^\ast(X) =
\frac{\operatorname{Cov}(X,Y)}{\operatorname{Var}(X)}\cdot
\left(X-\mathbb{E}[X]\right)
+
\mathbb{E}[Y]
```

是在所有$X$的一次函数中对$Y$的最佳近似。此外，
不难得到最佳近似导致的误差的均方值为

```math {@eq:best_linear_approximation_error}
\mathbb{E}\!\left[
(Y-f^\ast(X))^2
\right]
=
\operatorname{Var}(Y) - \frac{(\operatorname{Cov}(X,Y))^2}{\operatorname{Var}(X)}.
```

:::

式 @eq:best_linear_estimation_scalar 进一步揭示了
协方差$\operatorname{Cov}(X,Y)$的直观意义：

1. 当$\operatorname{Cov}(X,Y)>0$时，
   最佳近似$f^\ast(X)$中$X$的系数是正的。直观上看，
   这可以解释为当$X$的取值增加时，$Y$的取值具有增加的趋势。
   此时我们称$X$与$Y$**正相关**（positively correlated）。

2. 类似地，$\operatorname{Cov}(X,Y)<0$的情形可以直观解释为
   当$X$的取值增加时，$Y$的取值具有减小的趋势。
   此时我们称$X$与$Y$**负相关**（negatively correlated）。

3. 当$\operatorname{Cov}(X,Y)=0$时，直观上可认为
   $X$取值的增减对$Y$取值的变化趋势没有影响。
   此时我们称$X$与$Y$**不相关**（uncorrelated）。
   由式 @eq:covariance_computation 可得
   $X$与$Y$不相关的充要条件是
   $\mathbb{E}[XY]=\mathbb{E}[X]\,\mathbb{E}[Y]$。

   不难看出若$X$与$Y$相互独立且二者的期望均存在，则$X$与$Y$不相关；
   但需注意该结论的逆命题不成立：$X$与$Y$不相关推不出$X$与$Y$相互独立。

::: example
记$\mathbb{D}=\{(x,y)\in\mathbb{R}^2\mid x^2+y^2\leq 1\}$，
$(X,Y)$为连续型随机向量且联合概率密度函数为
\[
f_{X,Y}(x,y) = \begin{cases}
\displaystyle\frac{1}{\pi}, & (x,y)\in\mathbb{D}, \\
0, & (x,y)\notin\mathbb{D}.
\end{cases}
\]
则由对称性不难看出$\mathbb{E}[X]=\mathbb{E}[Y]=0$以及
\[
\mathbb{E}[XY] = \iint_{\mathbb{D}}xy\cdot \frac{1}{\pi}\,\mathrm{d} x\mathrm{d} y = 0.
\]
从而
\[
\operatorname{Cov}(X,Y) = \mathbb{E}[XY]-\mathbb{E}[X]\mathbb{E}[Y] = 0,
\]
即$X$与$Y$不相关。另一方面，$X$的边缘分布分别为
\[
f_X(x) = \int_{-\infty}^{+\infty}f_{X,Y}(x,y)\,\mathrm{d} y
=\begin{cases}
\displaystyle\frac{2}{\pi}\sqrt{1-x^2}, & |x|<1, \\
0, & |x|\geq 1.
\end{cases}
\]
并由对称性可得$f_Y=f_X$，从而
\[
\begin{aligned}
\mathbb{P}\!\left(X>\sqrt{2}/2\right)\cdot\mathbb{P}\!\left(Y>\sqrt{2}/2\right)
={} &
\int_{\sqrt{2}/2}^{1}\frac{2}{\pi}\sqrt{1-x^2}\,\mathrm{d} x
\int_{\sqrt{2}/2}^{1}\frac{2}{\pi}\sqrt{1-y^2}\,\mathrm{d} y \\
={} &
\left(\frac{\pi-2}{4\pi}\right)^{\!2},
\end{aligned}
\]
但显然有$\mathbb{P}\!\left(X>\sqrt{2}/2,Y>\sqrt{2}/2\right)=0$，
故$X$与$Y$不相互独立。
:::

下面我们给出两个反例，提醒读者在处理不相关的随机变量时需小心，
有些对于相互独立随机变量成立的性质不一定能推广到互不相关的随机变量上。

::: example
设$X,Y$相互独立且均服从参数为$1/2$的伯努利分布。令
\[
Z = \mathsf{1}_{\{X\neq Y\}}
=\begin{cases}
0, & \text{若}\ X=Y, \\
1, & \text{若}\ X\neq Y.
\end{cases}
\]
显然$X,Y$不相关。而由
\[
\mathbb{E}[Z] = 1\cdot\mathbb{P}(Z=1)=\frac{1}{2}
\]
以及
\[
\mathbb{E}[XZ] =
1\cdot \mathbb{P}(XZ=1)
=\mathbb{P}(X=1,Z=1)
=\mathbb{P}(X=1,Y=0) = \frac{1}{4}
\]
可得$\mathbb{E}[XZ]=\mathbb{E}[X]\,\mathbb{E}[Z]$，
故$X,Z$不相关。同理可得$Y,Z$不相关。因而$X,Y,Z$这三个随机变量
两两互不相关。但另一方面，不难看出乘积$XYZ$总是等于$0$，故
\[
\mathbb{E}[XYZ] = 0 \neq\mathbb{E}[X]\,\mathbb{E}[Y]\,\mathbb{E}[Z].
\]
这说明对于三个或三个以上两两互不相关的随机变量，
“乘积的期望等于期望的乘积”这一性质一般不再成立。
:::

::: example
设$X\sim\mathcal{N}(0,1)$，$Y=|X|$。则
\[
\mathbb{E}[XY] = \int_{-\infty}^{+\infty} x|x|\cdot f_X(x)\,\mathrm{d}x=0,
\]
其中我们利用了期望的LOTUS。故
$\mathbb{E}[XY]=\mathbb{E}[X]\,\mathbb{E}[Y]$，
也就是说$X$与$Y$不相关。另一方面，令$f(x)=|x|,g(y)=y$，
则显然$f(X)=|X|=Y$与$g(Y)=Y$不是互不相关的。这说明
“互不相关的随机变量各自被函数作用后依然互不相关”一般是不成立的，
这与随机变量相互独立的情形是不同的。
:::

以下定理指出，两两不相关的随机变量和的方差等于这些随机变量方差的和。

::: theorem {@theorem:sum_uncorrelated_rv_var}
设随机变量$X_1,\ldots,X_n$两两不相关且方差均存在，则
\[
\operatorname{Var}\!\left(\sum_{i=1}^n X_i\right)=\sum_{i=1}^n\operatorname{Var}(X_i).
\]
:::

::: proof
由方差定义以及期望的线性可得
\[
\begin{aligned}
\operatorname{Var}\!\left(\sum_{i=1}^n X_i\right)
={} &
\mathbb{E}\!\left[\left(
\sum_{i=1}^n X_i-\mathbb{E}\!\left[\sum_{i=1}^n X_i\right]
\right)^{\!\!2}\,\right]
=
\mathbb{E}\!\left[\left(
\sum_{i=1}^n (X_i-\mathbb{E}[X_i])
\right)^{\!\!2}\,\right] \\
={} &
\mathbb{E}\!\left[
\sum_{i=1}^n\sum_{j=1}^n
(X_i-\mathbb{E}[X_i])
(X_j-\mathbb{E}[X_j])
\right] \\
={} &
\sum_{i=1}^n
\mathbb{E}\!\left[(X_i-\mathbb{E}[X_i])^2\right]
+\sum_{i\neq j}
\mathbb{E}\!\left[(X_i-\mathbb{E}[X_i])
(X_j-\mathbb{E}[X_j])\right] \\
={} &
\sum_{i=1}^n
\operatorname{Var}(X_i)
+2\sum_{i=1}^{n-1}\sum_{j=i+1}^n
\operatorname{Cov}(X_i,X_j).
\end{aligned}
\]
由于$X_1,\ldots,X_n$两两不相关，可知$i\neq j$时
交叉项$\operatorname{Cov}(X_i,X_j)$均等于$0$，故
\[
\operatorname{Var}\!\left(\sum_{i=1}^n X_i\right)
=
\sum_{i=1}^n\mathbb{E}\!\left[(X_i-\mathbb{E}[X_i])^2\right]
=
\sum_{i=1}^n
\operatorname{Var}(X_i).
\]
:::

## 相关系数*

现假设$\operatorname{Var}(X)>0$且$\operatorname{Var}(Y)>0$。
由式 @eq:best_linear_approximation_error
以及$\mathbb{E}\!\left[(Y-f^\ast(X))^2\right]\geq 0$，可得
\[
|\operatorname{Cov}(X,Y)|\leq \sigma(X)\,\sigma(Y),
\]
其中$\sigma(X)=\sqrt{\operatorname{Var}(X)}$
与$\sigma(Y)=\sqrt{\operatorname{Var}(Y)}$分别为
$X$与$Y$的标准差。这提示我们可以对$\operatorname{Cov}(X,Y)$
进行归一化来更好地刻画两个随机变量之间的相关性。

::: definition
给定两个随机变量$X,Y$，并设$\operatorname{Var}(X)>0$，
$\operatorname{Var}(Y)>0$。则其**相关系数**
（correlation）被定义为
\[
\frac{\operatorname{Cov}(X,Y)}{\sigma(X)\,\sigma(Y)}.
\]
通常将$X$与$Y$的相关系数记为$\rho_{XY}$。
:::

相关系数$\rho_{XY}$的取值范围为$[-1,1]$，且

1. $\rho_{XY}>0$时$X$与$Y$正相关，
   $\rho_{XY}<0$时$X$与$Y$负相关，$\rho_{XY}=0$时$X$与$Y$不相关。

2. 令$f^\ast(X)=\beta X+\alpha$为
   @example:best_linear_approximation 给出的
   $X$的一次函数中对$Y$的最佳近似。我们考虑用
   $\beta (X-\mathbb{E}[X])$近似$Y-\mathbb{E}[Y]$所导致的
   相对均方误差：
   \[
   \frac{\mathbb{E}\!\left[
   \left(Y-\mathbb{E}[Y]
   -\beta(X-\mathbb{E}[X])
   \right)^2
   \right]}{\operatorname{Var}(Y)}
   =
   \frac{\mathbb{E}[(Y-f^\ast(X))^2]}{\operatorname{Var}(Y)}
   = 1 - \rho_{XY}^2.
   \]
   因此$|\rho_{XY}|$越接近于$1$，则$\beta(X-\mathbb{E}[X])$近似
   $Y-\mathbb{E}[Y]$的相对均方误差越小。
   换句话说，$|\rho_{XY}|$越接近于$1$，则可以认为
   $Y-\mathbb{E}[Y]$与$X-\mathbb{E}[X]$之间具有越显著的线性关系。
   特别地，$\rho_{XY}=1$当且仅当存在$c>0$使得
   $Y-\mathbb{E}[Y]=c(X-\mathbb{E}[X])$几乎必然成立，
   而$\rho_{XY}=-1$当且仅当存在$c<0$使得
   $Y-\mathbb{E}[Y]=c(X-\mathbb{E}[X])$几乎必然成立。

上述结论中$\rho_{XY}=\pm 1$的充要条件的证明留作
@exercise:correlation_extreme。
