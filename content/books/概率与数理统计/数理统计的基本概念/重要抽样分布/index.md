---
title: 重要抽样分布
---
统计量的概率分布被称为**抽样分布**。本节中我们将研究一些
与正态总体相关的抽样分布，这些抽样分布将对本讲义介绍的
统计推断方法的理论分析起到重要作用。

## $\chi^2$分布（卡方分布）*

我们称随机变量$X$服从**自由度为$n$的$\chi^2$分布**
（$\chi^2$ distribution或chi-squared distribution），
若$X$为连续型随机变量，且其概率密度函数为
\[
    f_X(x) = \begin{cases}
    \displaystyle\frac{1}{2^{n/2}\,\Gamma(n/2)}\,x^{n/2-1}\mathrm{e}^{-x/2}, & \text{若}\ x>0, \\
    0, &\text{若}\ x\leq 0,
    \end{cases}
\]
其中$n$为一正整数。我们用$\chi^2(n)$或$\chi^2_n$来指代
自由度为$n$的$\chi^2$分布，并用$X\sim\chi^2(n)$或$X\sim\chi^2_n$
表示$X$服从自由度为$n$的$\chi^2$分布。图\ref{fig:chi_squared_pdf}
给出了$\chi^2$分布概率密度函数的典型图像。

![自由度为$n$的$\chi^2$分布概率密度函数图像。](Chi2-distribution_pdf.png?width=500)

\label{fig:chi_squared_pdf}

我们马上将看到，$\chi^2$分布与来自正态总体的样本方差的分布直接相关。
接下来先给出$\chi^2$分布自身的一些性质。

::: proposition
设$X$服从自由度为$n$的$\chi^2$分布，则其矩母函数为
\[
    M_X(t)=\left(\frac{1}{1-2t}\right)^{\!n/2},\qquad
    t\in\left]-\infty,\frac{1}{2}\right[.
\]
其期望为$\mathbb{E}[X]=n$，方差为$\operatorname{Var}(X)=2n$。
:::

::: proof
我们有
\[
    \begin{aligned}
    M_X(t) = \mathbb{E}\!\left[\mathrm{e}^{tX}\right]
    ={} & \frac{1}{2^{n/2}\,\Gamma(n/2)}\int_{0}^{+\infty} \mathrm{e}^{tx}\cdot x^{n/2-1}\mathrm{e}^{-x/2}\,\mathrm{d} x \\
    ={} & \frac{1}{2^{n/2}\,\Gamma(n/2)}
    \int_0^{+\infty} x^{n/2-1}\mathrm{e}^{-(1/2-t)x}\,\mathrm{d} x.
    \end{aligned}
\]
不难看出$t\geq 1/2$时$\mathbb{E}[\mathrm{e}^{tX}]$不存在。
而当$t<1/2$时，有
\[
    \begin{aligned}
    M_X(t) ={} & \left(\frac{1}{1/2-t}\right)^{\!n/2} \frac{1}{2^{n/2}\,\Gamma(n/2)}
    \int_0^{+\infty} u^{n/2-1}\mathrm{e}^{-u}\,\mathrm{d} u \\
    ={} & \left(\frac{1}{1-2t}\right)^{\!n/2},
    \end{aligned}
\]
其中做了换元$u=(1/2-t)x$并利用了$\Gamma$函数的定义。

$\mathbb{E}[X]$与$\operatorname{Var}(X)$可通过
\[
    \mathbb{E}[X] = \left.\frac{\mathrm{d}}{\mathrm{d} t}M_X(t)\right|_{t=0} =
    \left.n\left(\frac{1}{1-2t}\right)^{\!n/2+1}\right|_{t=0}
    =n
\]
以及
\[
    \begin{aligned}
    \operatorname{Var}(X) ={} &
    \mathbb{E}[X^2] - \left(\mathbb{E}[X]\right)^2
    =
    \left.\frac{\mathrm{d}^2}{\mathrm{d} t^2}M_X(t)\right|_{t=0}
    - n^2 \\
    ={} &
    \left.n(n+2)\left(\frac{1}{1-2t}\right)^{\!n/2+2}\right|_{t=0} - n^2
     = 2n
    \end{aligned}
\]
得到。
:::

::: corollary {@corollary:chi_squared}
1. 设$X_1,\ldots,X_k$相互独立且各自服从自由度为
   $n_1,\ldots,n_k$的$\chi^2$分布，则$Y=\sum_{i=1}^k X_i$
   服从自由度为$\sum_{i=1}^k n_i$的$\chi^2$分布。

2. 设$X_1,\ldots,X_n$相互独立且均服从一元标准正态分布
   $\mathcal{N}(0,1)$，则$Y=\sum_{i=1}^n X_i^2$服从
   自由度为$n$的$\chi^2$分布。

:::

::: proof
1. 我们考虑$Y$的矩母函数，由 @theorem:independent_rv_sum  可得
   \[
       M_Y(t) = \prod_{i=1}^k M_{X_i}(t)
       =\prod_{i=1}^k \left(\frac{1}{1-2t}\right)^{\! n_i/2}
       =\left(\frac{1}{1-2t}\right)^{\!\frac{1}{2}\sum_{i=1}^k n_i},
       \quad \forall t\in\left]-\infty,\frac{1}{2}\right[.
   \]
   故$Y$服从自由度为$\sum_{i=1}^k n_i$的$\chi^2$分布。

2. 由 @example:square_rv_pdf  的结论可知，
   每个$X_i^2$均服从自由度为$1$的$\chi^2$分布，再由第一部分的结论
   可得$Y=\sum_{i=1}^n X_i^2$服从自由度为$n$的$\chi^2$分布。

:::

在经过上述准备后，我们介绍 @theorem:sample_variance_chi_squared，
它给出了$\chi^2$分布最重要的应用场合：刻画来自正态总体的样本方差的分布；
该定理也与下一节介绍的$t$分布的重要性质密切相关。定理的证明由于
牵扯到一些连续型随机向量仿射变换（@corollary:rand_vec_affine_transform_pdf）
以及实对阵矩阵正交对角化的知识，故作为选读内容
放在第6.3节第1小节给出，
但我们鼓励学有余力的读者掌握这个证明。

::: theorem {@theorem:sample_variance_chi_squared}
设$X_1,\ldots,X_n$为正态总体$\mathcal{N}(\mu,\sigma^2)$的一组样本。
令$\overline{X} = \frac{1}{n}\sum_{i=1}^n X_i$为其样本均值，
\[
    S^2 = \frac{1}{n-1}\sum_{i=1}^n
    \left(X_i-\overline{X}\right)^2
\]
为其样本方差。则

1. $\overline{X}$与$S^2$相互独立。

2. 随机变量
   \[
       \frac{(n-1)S^2}{\sigma^2} = \frac{1}{\sigma^2}
       \sum_{i=1}^n \big(X_i-\overline{X})^2
   \]
   服从自由度为$n-1$的$\chi^2$分布。

:::

## $t$分布*

我们称随机变量$X$服从**自由度为$n$的$t$分布**
（$t$ distribution或Student's $t$ distribution
[^1]），若$X$为连续型随机变量，且其概率密度函数为
\[
    f_X(x) =
    \frac{\Gamma\!\left(\frac{n+1}{2}\right)}
    {\sqrt{\pi n}\,\Gamma\!\left(\frac{n}{2}\right)}\,
    \left(1+\frac{x^2}{n}\right)^{\!-\frac{n+1}{2}},
    \qquad x\in\mathbb{R},
\]
其中$n$为一正整数。我们用$t(n)$或$t_n$来指代自由度为$n$的$t$分布，
并用$X\sim t(n)$或$X\sim t_n$表示$X$服从自由度为$n$的$t$分布。
图\ref{fig:student_t_pdf} 给出了$t$分布概率密度函数的典型图像，
其中$n=\infty$的情形实际上考虑的是$n\rightarrow\infty$时
分布$t(n)$的概率密度函数的极限；可以证明固定$x\in\mathbb{R}$时，
有[^2]
\[
    \lim_{n\rightarrow\infty}
    \frac{\Gamma\!\left(\frac{n+1}{2}\right)}
    {\sqrt{\pi n}\,\Gamma\!\left(\frac{n}{2}\right)}\,
    \left(1+\frac{x^2}{n}\right)^{\!-\frac{n+1}{2}}
    =\frac{1}{\sqrt{2\pi}}\exp\!\left(-\frac{x^2}{2}\right),
\]
这说明分布$t(n)$的概率密度函数在$n\rightarrow\infty$时
将逐点收敛于标准正态分布的概率密度函数。

![自由度为$n$的$t$分布概率密度函数图像。](Student-distribution_pdf.png?width=500)

\label{fig:student_t_pdf}

以下定理给出了$t$分布的由来，其证明作为选读内容
将在第6.3节第2小节给出。

::: theorem {@theorem:t_distribution_basic}
设$X\sim\mathcal{N}(0,1),\, Y\sim\chi^2(n)$且$X,Y$相互独立。
不妨设$Y$的值域不包含$0$。则随机变量
\[
    \frac{X}{\sqrt{Y/n}}
\]
服从自由度为$n$的$t$分布。
:::

将 @theorem:t_distribution_basic  与
@theorem:sample_variance_chi_squared  结合，
可得到如下重要推论。

::: corollary {@corollary:T_statistics}
设$X_1,\ldots,X_n$为正态总体$\mathcal{N}(\mu,\sigma^2)$的一组样本。令
\[
    T = \frac{\overline{X}-\mu}{\sqrt{S^2/n}},
\]
其中$\overline{X}$为样本均值，$S^2$为样本方差。
则统计量$T$服从自由度为$n-1$的$t$分布。
:::

::: proof
令$U = \sqrt{n}\left(\overline{X}-\mu\right)/\sigma$，
$V = (n-1)S^2/\sigma^2$。由 @example:linear_combination_independent_normal
的结论可得$U\sim\mathcal{N}(0,1)$。接下来利用
@theorem:sample_variance_chi_squared，
可得$V\sim\chi^2_{n-1}$且$U,V$相互独立。而
\[
    \frac{U}{\sqrt{V/(n-1)}} = \frac{\sqrt{n}\left(\overline{X}-\mu\right)/\sigma}{\sqrt{S^2/\sigma^2}}
    =\frac{\overline{X}-\mu}{\sqrt{S^2/n}}=T,
\]
故由 @theorem:t_distribution_basic  可最终得到
$T\sim t(n-1)$。
:::

需要注意，@corollary:T_statistics  当中我们必须要求
$X_1,\ldots,X_n$相互独立且均服从正态分布$\mathcal{N}(\mu,\sigma^2)$；
若样本$X_1,\ldots,X_n$不是从正态总体中抽样得来的，即使$n$非常大，
我们也不能因为中心极限定理而认为 @corollary:T_statistics  成立。

## $F$分布*

我们称随机变量$X$服从自由度为$(n_1,n_2)$的$F$分布
[^3]，若其概率密度函数为
\[
    f_X(x) = \begin{cases}
    \displaystyle\frac{\Gamma\!\left(\frac{n_1+n_2}{2}\right)}
    {\Gamma\!\left(\frac{n_1}{2}\right)\Gamma\!\left(\frac{n_2}{2}\right)}
    \left(\frac{n_1}{n_2}\right)^{\!\!\frac{n_1}{2}}
    x^{\frac{n_1}{2}-1}
    \left(1+\frac{n_1}{n_2}x\right)^{\!\!-\frac{n_1+n_2}{2}}, & x>0, \\
    0, & x\leq 0,
    \end{cases}
\]
其中$n_1,n_2$均为正整数。我们用$F(n_1,n_2)$来指代自由度为
$(n_1,n_2)$的$F$分布，并用$X\sim F(n_1,n_2)$表示$X$服从
自由度为$(n_1,n_2)$的$F$分布。图\ref{fig:F_distribution_pdf}
给出了$F$分布概率密度函数的典型图像。

![$F$分布概率密度函数图像。](F-distribution_pdf.png?width=667)

\label{fig:F_distribution_pdf}

以下定理给出了$F$分布的由来，其证明作为选读内容
将在第6.3节第3小节给出。

::: theorem {@theorem:F_distribution_basic}
设$U\sim\chi^2(n_1),V\sim\chi^2(n_2)$，且$U,V$相互独立。
则随机变量
\[
    F = \frac{U/n_1}{V/n_2}
\]
服从自由度为$(n_1,n_2)$的$F$分布。
:::

由 @theorem:F_distribution_basic  可看出，
若$F\sim F(n_1,n_2)$，则$F^{-1}\sim F(n_2,n_1)$。
此外，我们还可得到如下推论：

::: corollary {@corollary:ratio_sample_var_F_distribution}
设$X_1,\ldots,X_{n_1}$为总体$\mathcal{N}(\mu_1,\sigma_1^2)$
的一组样本，$Y_1,\ldots,Y_{n_2}$为总体
$\mathcal{N}(\mu_2,\sigma_2^2)$的一组样本，
且$X_1,\ldots,X_{n_1},Y_1,\ldots,Y_{n_2}$相互独立。令
\[
    \begin{aligned}
    S_1^2 ={} & \frac{1}{n_1-1}\sum_{i=1}^{n_1}
    \left(X_i-
    \frac{1}{n_1}\sum_{j=1}^{n_1}X_j\right)^{\!2}, \\
    S_2^2 ={} & \frac{1}{n_2-1}\sum_{i=1}^{n_2}
    \left(Y_i-
    \frac{1}{n_2}\sum_{j=1}^{n_2}Y_j\right)^{\!2}.
    \end{aligned}
\]
则
\[
    \frac{S_1^2/\sigma_1^2}{S_2^2/\sigma_2^2}\sim F(n_1-1,n_2-1).
\]
:::

我们将 @corollary:ratio_sample_var_F_distribution
的证明留作习题。

## 抽样分布的上分位数*

上面三个小节给出了$\chi^2$分布、$t$分布与$F$分布的概率密度函数。
但对于许多数理统计问题，更常用的其实是这些抽样分布的**上分位数**。

::: definition {@definition:upper_quantile}
设$F(x)$为一连续型分布的分布函数，其概率密度函数为$f(x)$。
进一步假设$f(x)$在某个开区间$I\subseteq\mathbb{R}$上严格大于$0$
而在该开区间外等于$0$。则对任意$0<\alpha<1$，我们将满足
\[
    1-F(r)= \int_r^{+\infty} f(x)\,\mathrm{d} x= \alpha
\]
的实数$r$称作分布$F(x)$的**上$\alpha$分位数**
（$1-\alpha$ quantile）。换句话说，若随机变量$X$的分布函数为$F(x)$，
则$X$大于等于上$\alpha$分位数的概率就等于$\alpha$。
:::

::: remark
对于更加一般的分布也可定义其上分位数，但在本课程中，
我们只需考虑 @definition:upper_quantile  所讨论的情形
就足够了。
:::

不难验证，若某个分布满足 @definition:upper_quantile  中
所列出的条件，则它的上$\alpha$分位数是关于$\alpha$的连续且严格单调递减的函数。

下面我们讨论几个重要分布的上分位数。

**标准正态分布。** 对于标准正态分布$\mathcal{N}(0,1)$，
我们将其上$\alpha$分位数记作$z_\alpha$，也就是说$z_\alpha$
由如下等式给出：
\[
    \int_{z_\alpha}^{+\infty} \frac{1}{\sqrt{2\pi}}\exp\!\left(-\frac{x^2}{2}\right)\mathrm{d} x=
    1-\Phi(z_\alpha)=\alpha.
\]
若用$\Phi^{-1}$表示$\Phi$的反函数，则有
\[
    z_\alpha = \Phi^{-1}(1-\alpha).
\]
图\ref{fig:upper_quantile_four_distributions}(a) 给出了$z_\alpha$的图示。
不难看出
$\alpha\rightarrow 0^+$时$z_\alpha \rightarrow +\infty$，以及
$\alpha\rightarrow 1^-$时$z_\alpha \rightarrow -\infty$。
此外，由$\Phi(-x)=1-\Phi(x)$可得
\[
    z_{1-\alpha}=-z_{\alpha},
    \quad\forall \alpha\in\left]0,1\right[\,.
\]

**$\chi^2$分布。** 对于自由度为$n$的$\chi^2$分布，
我们将其上$\alpha$分位数记作$\chi^2_{\alpha}(n)$。
图\ref{fig:upper_quantile_four_distributions}(b) 给出了
$\chi^2_{\alpha}(n)$的图示。不难看出
$\alpha\rightarrow 0^+$时$\chi^2_{\alpha}(n) \rightarrow +\infty$，以及
$\alpha\rightarrow 1^-$时$\chi^2_{\alpha}(n) \rightarrow 0$。
此外，我们通常会将$\sqrt{\chi^2_{\alpha}(n)}$记作$\chi_{\alpha}(n)$。

**$t$分布。** 对于自由度为$n$的$t$分布，
我们将其上$\alpha$分位数记作$t_{\alpha}(n)$。
图\ref{fig:upper_quantile_four_distributions}(c) 给出了$t_{\alpha}(n)$的图示。
不难看出
$\alpha\rightarrow 0^+$时$t_{\alpha}(n) \rightarrow +\infty$，以及
$\alpha\rightarrow 1^-$时$t_{\alpha}(n) \rightarrow -\infty$。
此外，由分布$t(n)$的概率密度函数的对称性，可得
\[
    t_{1-\alpha}(n)=-t_{\alpha}(n),\qquad\forall \alpha\in\left]0,1\right[\,.
\]
经验上，当$n\geq 45$时，对于常用的$\alpha$的值，我们会采用近似
$t_{\alpha}(n)\approx z_\alpha$，这是因为$n$足够大时，
$t(n)$的概率密度函数（以及分布函数）可以被标准正态分布的概率密度函数
（以及分布函数）很好地近似。

**$F$分布。** 对于自由度为$(n_1,n_2)$的$F$分布$F_(n_1,n_2)$，
我们将其上$\alpha$分位数记作$F_{\alpha}(n_1,n_2)$。
图\ref{fig:upper_quantile_four_distributions}(d) 给出了$F_{\alpha}(n_1,n_2)$的图示。
不难看出
$\alpha\rightarrow 0^+$时$F_{\alpha}(n_1,n_2) \rightarrow +\infty$，以及
$\alpha\rightarrow 1^-$时$F_{\alpha}(n_1,n_2) \rightarrow 0$。
此外，$F$分布的上分位数满足如下性质：

```math {@eq:F_upper_quantile_reciprocal}
F_{1-\alpha}(n_1,n_2) = \frac{1}{F_{\alpha}(n_2,n_1)},
```

这是因为$X\sim F(n_1,n_2)$时有
\[
    \begin{aligned}
    1-\alpha = {} & \mathbb{P}(X>F_{1-\alpha}(n_1,n_2)) \\
    ={} & \mathbb{P}\!\left(\frac{1}{X}<\frac{1}{F_{1-\alpha}(n_1,n_2)}\right)
    =1-\mathbb{P}\!\left(\frac{1}{X}>\frac{1}{F_{1-\alpha}(n_1,n_2)}\right),
    \end{aligned}
\]
从而
\[
    \alpha = \mathbb{P}\!\left(\frac{1}{X}>\frac{1}{F_{1-\alpha}(n_1,n_2)}\right),
\]
而由$F$分布的性质可知$1/X\sim F(n_2,n_1)$，故上式即意味着
$F_\alpha(n_2,n_1)=1/F_{1-\alpha}(n_1,n_2)$。

![四种抽样分布的上分位数图示。](Upper_quantile_sampling_distributions.png?width=667)

\label{fig:upper_quantile_four_distributions}

需要指出的是，以上讨论的几个分布的上$\alpha$分位数通常都不能表示为
$\alpha$的初等函数。我们一般是通过查表或是数值计算的方法来获取这些
上$\alpha$分位数的值。表\ref{table:code_upper_quantile}
列出了一些常用编程语言中用于计算上分位数的表达式。

部分编程语言中计算上分位数的表达式。
\label{table:code_upper_quantile}
\begin{tabular}{cccc}
 & Python 3 & R & MATLAB \\
$z_{\alpha}$ & {norm.isf($\alpha$)}
& {qnorm(1-$\alpha$)}
& {norminv(1-$\alpha$)}\\
$\chi^2_{\alpha}(n)$ & {chi2.isf($\alpha$, $n$)}
& {qchisq(1-$\alpha$, df=$n$)}
& {chi2inv(1-$\alpha$, $n$)}\\
$t_\alpha(n)$ & {t.isf($\alpha$, $n$)}
& {qt(1-$\alpha$, df=$n$)}
& {tinv(1-$\alpha$, $n$)}
\\
$F_\alpha(n_1,n_2)$ & {f.isf($\alpha$, $n_1$, $n_2$)}
& {qf(1-$\alpha$, df1=$n_1$, df2=$n_2$)}
& {finv(1-$\alpha$, $n_1$, $n_2$)}
\end{tabular}

\textsize{14}{注：Python 3中需安装库SciPy并加入导入语句
{from scipy.stats import *}}

[^1]: 这里的Student来自于统计学家William Sealy Gosset使用的一个假名， 他在1908年发表于*Biometrika*的论文“The probable error of a mean” 中用Student来署名。之后著名统计学家Ronald Fisher在其工作中 将这个分布称作“Student's distribution”，并用$t$作为 相应统计量的符号，“Student's $t$ distribution”这个名称 也就逐渐被广泛接受。
[^2]: 该极限可由斯特林公式 \[ \lim_{x\rightarrow+\infty} \frac{\Gamma(x)}{\sqrt{2\pi}\,x^{x-1/2}\,\mathrm{e}^{-x}} = 1 \] 出发证明。
[^3]: $F$分布又被称作Snedecor's $F$ distribution、 the Fisher–Snedecor distribution等。统计学家Ronald Fisher 于1922年首次给出了$F$分布的形式，而统计学家George W. Snedecor 将其用$F$分布命名，以纪念Ronald Fisher。
