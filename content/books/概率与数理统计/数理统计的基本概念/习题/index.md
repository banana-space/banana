---
title: 习题选编
---
::: exercise
设$X_1,\ldots,X_n$为总体$X$的一组样本，且$\mu=\mathbb{E}[X]$与$\sigma^2=\operatorname{Var}(X)$均存在，$n\geq 2$。

1. 试求样本均值$\overline{X}=\frac{1}{n}\sum_{i=1}^n X_i$的期望与方差，以及样本方差$S^2=\frac{1}{n-1}\sum_{i=1}^n \big(X_i-\overline{X}\big)^2$的期望。

2. 若$X$的四阶矩存在，并记$\nu_k = \mathbb{E}\!\left[(X\!-\!\mu)^k\right],\,k=3,4$。试求$\operatorname{Var}(S^2)$与$\operatorname{Cov}\big(\overline{X},S^2\big)$。

3. 若$X\sim\mathcal{N}(\mu,\sigma^2)$，试求$\operatorname{Var}(S^2)$与$\operatorname{Cov}\big(\overline{X},S^2\big)$。

   *提示：* 你其实并不需要用到上一小题的结论。考虑利用 @theorem:sample_variance_chi_squared。

4. 任取$i\neq j$，证明$X_i-\overline{X}$与$X_j-\overline{X}$的相关系数为$-1/(n-1)$。

:::

::: exercise
令$\widehat{F}_n(x),\,x\in\mathbb{R}$表示样本容量为$n$时的经验分布函数。

1. 任取实数$x$，试求$\operatorname{Var}\!\big(\widehat{F}_n(x)\big)$。

2. 任取不相等的实数$x,y$，试求$\operatorname{Cov}\!\big(\widehat{F}_n(x),\widehat{F}_n(y)\big)$。

:::

::: exercise
设总体$X\sim\mathcal{N}(\mu,\sigma^2)$，$X_1,\ldots,X_{n}$与$Y_1,\ldots,Y_m$分别为总体$X$的容量为$n$与$m$的样本，且$X_1,\ldots,X_n,Y_1,\ldots,Y_m$相互独立。令
\[
    \overline{X} = \frac{1}{n}\sum_{i=1}^n X_i,
    \qquad\overline{Y} = \frac{1}{m}\sum_{j=1}^m Y_j.
\]
现任取$\epsilon>0$，试将概率
\[
    \mathbb{P}\!\left(\big|\overline{X}-\overline{Y}\big|
    >\epsilon\right)
\]
表示为标准正态分布某个上分位数的函数，并求出$\sigma^2=3,n=10,m=15,\epsilon=0.3$时上述概率的值（保留$3$位小数）。
:::

::: exercise {@exercise:sum_exponential_chi2}
1. 设总体$X$服从参数为$\beta$的指数分布，$X_1,\ldots,X_n$为总体$X$的一组样本。证明$2\beta\sum_{i=1}^n X_i$服从自由度为$2n$的$\chi^2$分布。

2. 设总体$X$的分布函数$F(x)$在$\mathbb{R}$上连续且严格单调递增，$X_1,\ldots,X_n$为总体$X$的一组样本。证明$-2\sum_{i=1}^n \ln F(X_i)$服从自由度为$2n$的$\chi^2$分布。

:::

::: exercise
1. 分布$t(n)$在$n$取何值时期望存在？$n$取何值时方差存在？

2. 设$X\sim t(1)$，证明$1/X\sim t(1)$。

3. 设$U,V\sim\mathcal{N}(0,1)$且$U,V$相互独立。证明
   \[
       U/V,\qquad U/|V|,\qquad |U|/V
   \]
   均服从自由度为$1$的$t$分布。

:::

::: exercise
设$X_1,\ldots,X_n,X_{n+1}$为总体$\mathcal{N}(\mu,\sigma^2)$的一组样本，令
\[
    \overline{X}_n = \frac{1}{n}\sum_{i=1}^n X_i,
    \qquad
    T = \frac{X_{n+1}-\overline{X}_n}{\left[
    \frac{1}{n}\sum_{i=1}^n (X_i-\overline{X}_n)^2
    \right]^{1/2}}.
\]
试求实数$c$的值使得$cT$服从某个$t$分布，并确定该$t$分布的自由度。
:::

::: exercise
设$X_1,\ldots,X_n$为总体$\mathcal{N}(\mu,\sigma^2)$的一组样本，$Y\sim\mathcal{N}(0,\sigma^2)$且$Y,X_1,\ldots,X_n$相互独立。在总体参数$\mu$与$\sigma^2$未知的情况下，试找出一个$X_1,\ldots,X_n,Y$的函数$g(X_1,\ldots,X_n,Y)$使其服从自由度为$n-1$的$t$分布。
:::

::: exercise
证明 @corollary:ratio_sample_var_F_distribution。
:::

::: exercise
设$X\sim t(n)$。试求$X^2$的分布。
:::

::: exercise
设$X_1,\ldots,X_m,X_{m+1},\ldots,X_n$独立同分布且服从正态分布$\mathcal{N}(0,1)$。对任意$0<\alpha<1$，试求使得等式
\[
    \mathbb{P}\!\left(
    \frac{X_1^2+\cdots+X_m^2}{X_1^2+\cdots+X_n^2}
    \geq r_\alpha
    \right) = \alpha
\]
成立的实数$r_\alpha$。*提示：* 你需要用$F$分布的上分位数表示$r_\alpha$。
:::
