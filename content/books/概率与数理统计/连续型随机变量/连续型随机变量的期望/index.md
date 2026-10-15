---
title: 连续型随机变量的期望
---
::: definition
设$X$为一个连续型随机变量，$f_X$为$X$的概率密度函数。若广义积分
${\int_{-\infty}^{+\infty} |x|\cdot f_X(x)\,\mathrm{d} x}$收敛，
则定义$X$的**期望**（expected value或expectation）为

```math {@eq:defn_expectation_continuous}
\mathbb{E}[X] = \int_{-\infty}^{+\infty} x\cdot f_X(x)\,\mathrm{d} x.
```

若广义积分$\int_{-\infty}^{+\infty} |x|\cdot f_X(x)\,\mathrm{d} x$发散，
则称$\mathbb{E}[X]$不存在。
:::

不难发现连续型随机变量期望的定义与离散情形有着形式上的相似之处：
我们利用如下形式上的对应关系：
\[
    \begin{aligned}
    p_X(x) \quad&\longleftrightarrow\quad f_X(x)\,\mathrm{d} x \\
    \sum_x \quad&\longleftrightarrow\quad
    \int_{-\infty}^{+\infty}
    \end{aligned}
\]
把离散型随机变量期望定义式中的$p_X(x)$替换为$f_X(x)\,\mathrm{d} x$
并把求和替换为积分即可得到式 @eq:defn_expectation_continuous。
实际上，连续型随机变量的期望可以看作是用离散型随机变量逼近而得到：
给定任意正整数$n$，我们用一列点
\[
    \cdots<x_{n,-2}<x_{n,-1}<x_{n,0}<x_{n,1}<x_{n,2}<\cdots
\]
将整个实数轴划分为可数多个小区间
$\left[x_{n,i},x_{n,i+1}\right[$，使得每个小区间的长度
$\Delta x_{n,i} = x_{n,i+1}-x_{n,i}$小于等于$1/n$。
接下来对任意样本空间$\Omega$中的元素$\omega$，令
\[
    X_n(\omega) = x_{n,i},\qquad\text{若}\ x_{n,i}\leq X(\omega) < x_{n,i+1},\ i\in\mathbb{Z},
\]
则$X_n$为一离散型随机变量，且对任意$\omega\in\Omega$均有
$|X_n(\omega)-X(\omega)|<1/n$。
而$X_n$的期望由下式给出[^1]：
\[
    \begin{aligned}
    \mathbb{E}[X_n]
    & = \sum_{i} x_{n,i}\cdot\mathbb{P}(X_n=x_{n,i}) \\
    & = \sum_{i} x_{n,i}\cdot\mathbb{P}(x_{n,i}\leq X<x_{n,i+1}) \\
    & \approx \sum_{i}
    x_{n,i}\cdot f_X(x_{n,i})\,\Delta x_{n,i} \\
    & \approx
    \int_{-\infty}^{+\infty} x\cdot f_{X}(x)\,\mathrm{d} x = \mathbb{E}[X].
    \end{aligned}
\]
上式的近似在$n$越大时越精确，并且可以证明$n\rightarrow\infty$时
有$\mathbb{E}[X_n]\rightarrow\mathbb{E}[X]$
（当$\mathbb{E}[X]$存在时）。

由于连续型随机变量的期望可以用离散型随机变量的期望进行逼近，
我们可以合理地猜测，许多离散情形下期望的性质可以推广或迁移到连续情形。
例如，将 @theorem:expectation_nonnegativity_discrete
的第一部分推广到连续情形是相当直接的：若$\mathbb{P}(X\geq 0)=1$，
则总可以取$f_X(x)=0,\,\forall x\in\left]-\infty,0\right[\,$，
此时即有
$\mathbb{E}[X]=\int_0^{+\infty}xf_X(x)\,\mathrm{d}x\geq 0$
（只要该式右端积分收敛）。又如，我们可以将期望的线性进行推广，
从而将连续型随机变量也包括进来：

::: theorem [期望的线性] {@theorem:expectation_linearity_continuous}
设$X,Y$为离散型或连续型的随机变量，
且$\mathbb{E}[X]$与$\mathbb{E}[Y]$均存在，
$\alpha,\beta$为任意两个实数。则
\[
    \mathbb{E}[\alpha X+\beta Y]
    =\alpha\,\mathbb{E}[X]+\beta\,\mathbb{E}[Y].
\]
:::

接下来的定理则给出了连续型随机变量期望的
law of the unconscious statistician (LOTUS)。

::: theorem {@theorem:law_unconscious_statistician_continuous}
设$X$为连续型随机变量，$f_X$为其概率密度函数，
$g:\mathbb{R}\rightarrow\mathbb{R}$为任意函数。
则$\mathbb{E}[g(X)]$存在当且仅当积分
$\int_{-\infty}^{+\infty} |g(x)|\cdot f_X(x)\,\mathrm{d} x$收敛，
且$\mathbb{E}[g(X)]$存在时有
\[
    \mathbb{E}[g(X)] = \int_{-\infty}^{+\infty} g(x)\cdot f_X(x)\,\mathrm{d} x.
\]

类似地，设$(X,Y)$为连续型随机向量，$f_{X,Y}$为其联合概率密度函数，
$g:\mathbb{R}^2\rightarrow\mathbb{R}$为任意二元函数。
则$\mathbb{E}[g(X,Y)]$存在当且仅当积分
$\iint_{\,\mathbb{R}^2} |g(x,y)|\cdot f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y$收敛，
且$\mathbb{E}[g(X,Y)]$存在时有
\[
    \mathbb{E}[g(X,Y)] = \iint_{\,\mathbb{R}^2} g(x,y)\cdot f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y.
\]
:::

然而，目前我们尚不能给出
@theorem:expectation_linearity_continuous
与\ref{theorem:law_unconscious_statistician_continuous}
的证明，这是因为它们实际上牵扯到了一般随机变量的期望，
而我们还未对其进行定义。例如对于
@theorem:law_unconscious_statistician_continuous，
即使$X$是连续型随机变量，其函数$g(X)$是否是连续型或离散型变量并无保证，
故计算$\mathbb{E}[g(X)]$之前需要先对一般随机变量的期望给出定义。
在[第3.6节](/books/概率与数理统计/连续型随机变量/一般随机变量的期望/)中，
我们将对一般随机变量的期望进行介绍，而后再证明 @theorem:expectation_linearity_continuous
与\ref{theorem:law_unconscious_statistician_continuous}。

接下来我们引入连续型随机变量的方差。实际上，
连续型随机变量的方差的定义与离散情形（即 @definition:variance）
是一样的：
\[
    \operatorname{Var}(X) = \mathbb{E}\!\left[(X-\mathbb{E}[X])^2\right],
\]
其中要求上式右端当中的期望均存在；否则称$\operatorname{Var}(X)$不存在。
此外，等式
\[
    \operatorname{Var}(X) = \mathbb{E}\!\left[X^2\right]-\left(\mathbb{E}[X]\right)^2
\]
与
\[
    \operatorname{Var}(aX+b) =
    a^2\operatorname{Var}(X)
\]
等的推导与离散情形完全相同，因为我们只需利用期望的线性即可。

::: example
设$X$服从区间$I$上的均匀分布，其中$I$的左右端点分别为$a,b$ ($a<b$)，
则$X$的期望与方差分别为
\[
    \begin{aligned}
    \mathbb{E}[X] & = \int_a^b x\cdot\frac{1}{b-a}\,\mathrm{d} x = \frac{a+b}{2}, \\
    \operatorname{Var}(X) &= \int_a^b x^2\cdot\frac{1}{b-a}\,\mathrm{d} x
    - \left(\frac{a+b}{2}\right)^2
    =\frac{(b-a)^2}{12}.
    \end{aligned}
\]
:::

::: example
设$X$服从参数为$\lambda$的指数分布，则$X$的期望与方差分别为
\[
    \begin{aligned}
    \mathbb{E}[X] & = \int_0^{+\infty} x\cdot\lambda\mathrm{e}^{-\lambda x}\,\mathrm{d} x
    =\frac{1}{\lambda}, \\
    \operatorname{Var}(X) & =
    \int_0^{+\infty} x^2\cdot \lambda\mathrm{e}^{-\lambda x}\,\mathrm{d} x - \left(\frac{1}{\lambda}\right)^2
    =\frac{1}{\lambda^2}.
    \end{aligned}
\]
:::

::: example
设$X\sim\mathcal{N}(\mu,\sigma^2)$。注意到
$f_X(x)$关于$x=\mu$左右对称，且不难说明
$\int_{-\infty}^{+\infty}|x|\cdot f_X(x)\,\mathrm{d} x$收敛，故
\[
    \mathbb{E}[X] = \mu.
\]
$X$的方差为
\[
    \begin{aligned}
    \operatorname{Var}(X)
    & =\int_{-\infty}^{+\infty} (x-\mu)^2\cdot\frac{1}{\sqrt{2\pi}\sigma}
    \exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)\,\mathrm{d} x \\
    & = \sigma^2\cdot\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{+\infty}
    u^2\exp\!\left(-\frac{u^2}{2}\right)\mathrm{d} x
    =\sigma^2,
    \end{aligned}
\]
其中第二步进行了换元$u=(x-\mu)/\sigma$，
而最后一步积分的计算可参考[附录A.2](/books/概率与数理统计/一些数学上的补充说明/Gamma函数以及涉及正态分布密度函数的积分/)。
:::

[^1]: 这个推导数学上不算严谨，但对于提供直观理解是有帮助的。
