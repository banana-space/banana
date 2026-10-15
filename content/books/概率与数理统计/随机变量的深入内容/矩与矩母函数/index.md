---
title: 矩与矩母函数
---
我们首先对矩的概念进行简单介绍。

::: definition
设$X$为一随机变量，$k$为一正整数。若
$\mathbb{E}\!\left[X^k\right]$存在，
则称其为随机变量$X$的 **$k$阶矩**
（$k$th moment）。
:::

不难看出期望$\mathbb{E}[X]$就是$X$的一阶矩，
而方差则是二阶矩与一阶矩平方之差。下面的命题则指出，
由高阶矩的存在性可推出低阶矩的存在性。

::: proposition {@proposition:existence_lower_order_moments}
若$X$的$k$阶矩$\mathbb{E}\!\left[X^k\right]$存在，
则对任意$j=1,\ldots,k$，其$j$阶矩
$\mathbb{E}\!\left[X^j\right]$均存在。
:::

::: proof
由 @proposition:existence_expectation_general
第1部分可知$\mathbb{E}\!\left[\left|X^k\right|\right]$存在。
接下来，注意到对任意$t\in\mathbb{R}$与$0<\alpha\leq 1$
有$|t|^{\alpha}\leq 1+|t|$，故
\[
    \left|X^j\right| = \left|X^k\right|^{\frac{j}{k}}
    \leq 1+\left|X^k\right|,
\]
再利用 @proposition:existence_expectation_general
第2部分以及期望的线性，可得$\mathbb{E}[|X^j|]$存在，
最后由 @proposition:existence_expectation_general
第1部分得$\mathbb{E}[X^j]$存在。
:::

由 @proposition:existence_lower_order_moments
可得到这样一个推论：若二阶矩$\mathbb{E}\!\left[X^2\right]$存在，
则一阶矩$\mathbb{E}[X]$存在，故由
$\operatorname{Var}(X)=\mathbb{E}\!\left[X^2\right]-\left(\mathbb{E}[X]\right)^2$
可得，$\operatorname{Var}(X)$的存在性等价于
$\mathbb{E}\!\left[X^2\right]$的存在性。

下面我们引入矩母函数的概念。

::: definition
设$X$为一随机变量。若存在包含$0$点的开区间$I\subseteq\mathbb{R}$，
使得对任意$t\in I$，期望$\mathbb{E}\!\left[\mathrm{e}^{tX}\right]$均存在，
则称函数
\[
    M_X(t) = \mathbb{E}\!\left[\mathrm{e}^{tX}\right],\qquad t\in I
\]
为$X$的**矩母函数**（moment generating function）。
:::

以下定理解释了为何把$M_X(t)=\mathbb{E}\!\left[\mathrm{e}^{tX}\right]$
称作$X$的“矩母函数”。

::: theorem
设$X$的矩母函数$M_X$在$0$的某个开邻域上有定义，则对任意正整数$k$，
$\mathbb{E}\!\left[X^k\right]$均存在，且
\[
    M_X^{(k)}(0)
    =\mathbb{E}\!\left[X^k\right],
\]
其中$M_X^{(k)}$表示$M_X$的$k$阶导数。
:::

::: proof
这里只给出$M_X$高阶导数与高阶矩关系的证明，而高阶矩存在性的证明不做要求
（可参考[@billingsley1995probability] 第21节
Moment Generating Functions部分）。

设$M_X(t)$在$-\delta<t<\delta$时有定义，其中$\delta>0$。
由指数函数的幂级数展开可得
\[
    \mathrm{e}^{tX} = \sum_{k=0}^\infty \frac{X^k}{k!}\cdot t^k,
\]
故
\[
    M_X(t)
    =\mathbb{E}\!\left[
    \sum_{k=0}^\infty \frac{X^k}{k!}\cdot t^k
    \right]
    =\sum_{k=0}^\infty \frac{\mathbb{E}\!\left[X^k\right]}{k!}\cdot t^k,
    \qquad\forall t\in\left]-\delta,\delta\right[,
\]
推导中我们交换了无穷级数与期望的次序，其合法性的来由不做要求。
注意到上式最右端给出了一个关于$t$的幂级数，对其进行逐项求导
（可参考[@zhangzhusheng_vol3] 第十九章4.4b节定理3）可得
\[
    M_X^{(k)}(t)=
    \sum_{j=k}^\infty
    \frac{\mathbb{E}\!\left[X^j\right]}{(j-k)!}\cdot t^{j-k}
    ,\qquad\forall t\in\left]-\delta,\delta\right[.
\]
故
\[
    M_X^{(k)}(0) = \mathbb{E}\!\left[X^k\right].
\]
:::

接下来我们介绍矩母函数的其它重要性质。

::: theorem
设随机变量$X$的矩母函数为$M_X$，$\alpha,\beta$为任意实数。
则$Y=\alpha X+\beta$的矩母函数为
\[
    M_Y(t)=\mathrm{e}^{\beta t}M_X(\alpha t),
\]
其中$t$须使得$M_X(t)$有定义。
:::

::: proof
由简单的计算即可得
\[
    M_Y(t) = \mathbb{E}\!\left[\mathrm{e}^{t(\alpha X+\beta)}\right]
    =\mathrm{e}^{\beta t}\,\mathbb{E}\!\left[\mathrm{e}^{(\alpha t)X}\right]
    =\mathrm{e}^{\beta t}M_X(\alpha t).
\]
:::

::: theorem {@theorem:independent_rv_sum}
设随机变量$X,Y$相互独立，且二者的矩母函数$M_X$与$M_Y$均存在，
则$X+Y$的矩母函数$M_{X+Y}$为
\[
    M_{X+Y}(t) = M_X(t)\cdot M_Y(t),
\]
其中$t$须使得$M_X(t)$与$M_Y(t)$均有定义。
:::

::: proof
由$X$与$Y$相互独立可得$\mathrm{e}^X$与$\mathrm{e}^Y$相互独立，故
\[
    M_{X+Y}(t)  = \mathbb{E}\!\left[\mathrm{e}^{t(X+Y)}\right]
    =\mathbb{E}\!\left[\mathrm{e}^{ tX}\cdot\mathrm{e}^{ tY}\right]
    =\mathbb{E}\!\left[\mathrm{e}^{ tX}\right]\cdot\mathbb{E}\!\left[\mathrm{e}^{ tY}\right]
    =M_X(t)\cdot M_Y(t).
\]
:::

需要注意 @theorem:independent_rv_sum  当中要求
$X$与$Y$相互独立。

::: theorem {@theorem:MGF_determines_distribution}
设$X$与$Y$的矩母函数在$0$的某个邻域上处处相等，则$X$与$Y$同分布，
也就是说对任意区间$I\subseteq\mathbb{R}$，有
$
\mathbb{P}(X\in I)=\mathbb{P}(Y\in I)
$。
:::

@theorem:MGF_determines_distribution  说明
随机变量的分布可由其矩母函数唯一决定。该定理的证明不做要求。

将 @theorem:independent_rv_sum  与
\ref{theorem:MGF_determines_distribution} 结合，
可得到求解独立随机变量$X$与$Y$和的分布的另一种方法：
我们先算出$X$与$Y$各自的矩母函数，再将二者相乘算出
$X+Y$的矩母函数$M_{X+Y}$，最后将$M_{X+Y}$与已知的各种分布的
矩母函数进行对照，找到$X+Y$服从的分布。表\ref{table:MGF}
列出了一些常用概率分布的矩母函数。

一些常用概率分布的矩母函数
\label{table:MGF}
\begin{tabular}{llll}
!$X$的分布 &
!参数 &
!分布列/概率密度函数 &
!矩母函数$M_X(t)$ \\
伯努利分布 & $p$ & $p_X(0)=1-p,\ p_X(1)=p$ & $1-p+p\mathrm{e}^t$ \\
\hline
二项分布 & $(n,p)$ &
$\begin{aligned}
&\displaystyle p_X(k)= \binom{n}{k}\,p^k(1-p)^{n-k} \\
&(k=0,\ldots,n)
\end{aligned}$ & $(1-p+p\mathrm{e}^t)^n$ \\
几何分布 & $p$ &
$\begin{aligned}
& p_X(k)=(1-p)^{k-1}p \\
& (k=1,2,\ldots)
\end{aligned}$
&
$\begin{aligned}
& \displaystyle\frac{p\mathrm{e}^t}{1-(1-p)\mathrm{e}^t}\\
& (t<{-\ln(1-p)})
\end{aligned}$ \\
负二项分布 & $(r,p)$
& $\begin{aligned}
& \displaystyle p_X(k) = \binom{k-1}{r-1}p^r(1-p)^{k-r} \\
& (k=r,r+1,\ldots)
\end{aligned}$
& $\begin{aligned}
& \displaystyle
\!\left(\frac{p\mathrm{e}^t}{1-(1-p)\mathrm{e}^t}\right)^{\!r} \\
& (t<{-\ln(1-p)})
\end{aligned}$ \\
泊松分布 & $\lambda$ &
$\begin{aligned}
& p_X(k)=\mathrm{e}^{-\lambda}\lambda^k/k! \\
& (k=0,1,2,\ldots)
\end{aligned}$
& $\displaystyle
\exp\!\left(\lambda(\mathrm{e}^t-1)\right)$ \\
\hline
均匀分布 & $[a,b]$ & $\displaystyle f_X(x) = \frac{1}{b-a}$
\quad($x\in[a,b]$) & $\displaystyle \frac{\mathrm{e}^{bt}-\mathrm{e}^{at}}{(b-a)t}$ \\
指数分布 & $\lambda$ & $f_X(x)=\lambda\mathrm{e}^{-\lambda x}$\quad($x\geq 0$) & $\displaystyle \frac{1}{1-\lambda^{-1}t}$\quad ($t<\lambda$)\\
正态分布 & $(\mu,\sigma^2)$ & $\displaystyle f_X(x)
=\frac{1}{\sqrt{2\pi}\sigma}\exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$ &
$\exp\!\left(\mu t + \frac{1}{2}\sigma^2 t^2\right)$ \\
Gamma分布 & $(\alpha,\beta)$ &
$\displaystyle f_X(x) = \frac{\beta^\alpha}{\Gamma(\alpha)}x^{\alpha-1}\mathrm{e}^{-\beta x}$\quad ($x>0$) &
$\left(1-\beta^{-1}t\right)^{-\alpha}$\quad ($t<\beta$)
\end{tabular}

::: example {@exampel:sum_independent_Poisson}
设$X$服从参数为$\lambda$的泊松分布，则其矩母函数为

```math {@eq:Poisson_MGF}
\begin{aligned}
M_X(t) ={} &
 \sum_{k=0}^\infty \mathrm{e}^{tk}\cdot\mathrm{e}^{-\lambda}\,\frac{\lambda^k}{k!}
=
\mathrm{e}^{-\lambda}\sum_{k=0}^\infty \frac{(\lambda \mathrm{e}^t)^k}{k!}  \\
={} &
\mathrm{e}^{-\lambda}\cdot\exp\!\left(\lambda \mathrm{e}^t\right)
=\exp\!\left(\lambda(\mathrm{e}^t-1)\right),
\end{aligned}
```

其中$t\in\mathbb{R}$。现设$Y$与$X$独立且服从参数为$\mu$的泊松分布，
则$X+Y$的矩母函数为
\[
    \begin{aligned}
    M_{X+Y}(t) ={} & M_X(t)\cdot M_Y(t)
    =\exp\!\left(\lambda(\mathrm{e}^t-1)\right)\cdot \exp\!\left(\mu(\mathrm{e}^t-1)\right) \\
    ={} & \exp\!\left((\lambda+\mu)(\mathrm{e}^t-1)\right),\qquad\forall t\in\mathbb{R}.
    \end{aligned}
\]
将上式与式 @eq:Poisson_MGF  比较可得，
$X+Y$服从参数为$\lambda+\mu$的泊松分布。
:::

::: example {@example:linear_combination_independent_normal}
设$X\sim\mathcal{N}(\mu,\sigma^2)$，则其矩母函数为

```math {@eq:univariate_normal_MGF}
\begin{aligned}
M_X(t) ={} &
\int_{-\infty}^{+\infty}\exp\!\left(
tx
\right)\cdot\frac{1}{\sqrt{2\pi}\sigma}
\exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)\mathrm{d} x  \\
={} &
\frac{1}{\sqrt{2\pi}\sigma}\int_{-\infty}^{+\infty}
\exp\!\left(-\frac{x^2-2\mu x-2t\sigma^2 x+\mu^2}{2\sigma^2}\right)\mathrm{d} x  \\
={} &
\exp\!\left(-\frac{-2\mu t \sigma^2 - t^2\sigma^4}{2\sigma^2}\right)
\frac{1}{\sqrt{2\pi}\sigma}\int_{-\infty}^{+\infty}
\exp\!\left(
-\frac{(x-\mu-t\sigma^2)^2}{2\sigma^2}\right)\mathrm{d} x  \\
={} &
\exp\!\left(\mu t + \frac{1}{2}\sigma^2 t^2\right),
\end{aligned}
```

其中$t\in\mathbb{R}$。现设
$X_1\sim\mathcal{N}(\mu_1,\sigma_1^2)$，
$X_2\sim\mathcal{N}(\mu_2,\sigma_2^2)$且$X_1,X_2$独立，
则$X_1+X_2$的矩母函数为
\[
    \begin{aligned}
    M_{X_1+X_2}(t)
    ={} & M_{X_1}(t)\cdot M_{X_2}(t)
    =\exp\!\left(\mu_1 t+\frac{1}{2}\sigma_1^2t^2\right)\cdot
    \exp\!\left(\mu_2 t+\frac{1}{2}\sigma_2^2t^2\right) \\
    ={} &
    \exp\!\left((\mu_1+\mu_2)t
    +\frac{1}{2}(\sigma_1^2+\sigma_2^2)t^2\right),\qquad\forall t\in\mathbb{R}.
    \end{aligned}
\]
将上式与式 @eq:univariate_normal_MGF  比较，
可得$X_1+X_2\sim\mathcal{N}(\mu_1+\mu_2,\sigma_1^2+\sigma_2^2)$。

利用类似的方法可证明如下更一般的结论：设$X_1,\ldots,X_n$相互独立，
且$X_i$服从正态分布$\mathcal{N}(\mu_i,\sigma_i^2)$。
令$\alpha_1,\ldots,\alpha_n$与$\beta$为任意实数，则
\[
    Y = \sum_{i=1}^n \alpha_i X_i + \beta
\]
服从正态分布$\mathcal{N}\!\left(\sum_{i=1}^n \alpha_i\mu_i+\beta,\sum_{i=1}^n \alpha_i^2\sigma_i^2\right)$。
证明的具体步骤留给读者完成。
:::

::: example
设$N,X_1,X_2,\ldots$为相互独立的随机变量，
$N$服从参数为$p$的几何分布（其中$0<p<1$），
而$X_1,X_2,\ldots$服从参数为$\lambda$的指数分布。
我们希望求出$Y=\sum_{i=1}^N X_i$的概率分布。

首先考察$X_i$的矩母函数：
\[
    M_{X_i}(t) = \int_0^{+\infty}
    \mathrm{e}^{tx}\cdot \lambda\mathrm{e}^{-\lambda x}\,\mathrm{d} x
    =\frac{1}{1-\lambda^{-1}t},
    \qquad \forall t<\lambda.
\]
接下来，为求出$Y$的分布，我们从它的矩母函数入手。注意到
\[
    \begin{aligned}
    M_Y(t) ={} &
     \mathbb{E}\!\left[
    \exp\!\left(t\cdot \sum_{i=1}^N x_i\right)
    \right]
    = \mathbb{E}\!\left[\exp\!\left(t\cdot \sum_{i=1}^N x_i\right)
    \cdot\sum_{n=1}^\infty \mathsf{1}_{\{N=n\}}\right] \\
    ={} &
    \sum_{n=1}^\infty
    \mathbb{E}\!\left[
    \exp\!\left(t\cdot \sum_{i=1}^N x_i\right)
    \cdot \mathsf{1}_{\{N=n\}}
    \right]
    = \sum_{n=1}^\infty
    \mathbb{E}\!\left[
    \exp\!\left(t\cdot \sum_{i=1}^n x_i\right)
    \cdot \mathsf{1}_{\{N=n\}}
    \right] \\
    ={} & \sum_{n=1}^\infty
    \mathbb{E}\!\left[
    \mathsf{1}_{\{N=n\}}\cdot \prod_{i=1}^n \mathrm{e}^{tX_i}
    \right],
    \end{aligned}
\]
再利用$N,X_1,X_2,\ldots$的独立性，并由指数分布的矩母函数，可得
\[
    \begin{aligned}
    M_Y(t) ={} & \sum_{n=1}^\infty \mathbb{P}(N=n)\cdot\prod_{i=1}^n
    \mathbb{E}\!\left[\mathrm{e}^{tX_i}\right] \\
    ={} &
    \sum_{n=1}^\infty (1-p)^{n-1}p\cdot
    \left(\frac{1}{1-\lambda^{-1}t}\right)^n
    =\frac{1}{1-(p\lambda)^{-1}t},
    \end{aligned}
\]
其中$t<p\lambda$。故可得$Y$服从参数为$p\lambda$的指数分布。
:::
