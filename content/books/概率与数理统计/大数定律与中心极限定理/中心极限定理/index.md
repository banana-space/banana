---
title: 中心极限定理
notices:
  - name: 问题
    items:
      - 本页面转换自定理与证明环境互相嵌套的原文，相应部分的结构需要整理。
---
对于一列独立同分布的随机变量$X_1,X_2,\ldots$，
大数定律保证了样本均值$\overline{X}_n$时将（在某种意义下）收敛于期望，
而中心极限定理考虑的则是对这个收敛过程更细致的刻画，即$n$足够大时，
样本均值$\overline{X}_n$相对于其期望的涨落情况。
这里给出一个经典版本的中心极限定理：

::: theorem {@theorem:CLT}
设$X_1,X_2,\ldots$为一列独立同分布的随机变量，
且$\mu=\mathbb{E}[X_1]$与
$\sigma=\sqrt{\operatorname{Var}(X_1)}$均存在。令
\[
    Z_n = \frac{\sum_{i=1}^n(X_i-\mu)}{\sigma\sqrt{n}}
    =\frac{\sqrt{n}\big(\overline{X}_n-\mu\big)}{\sigma}
    ,\qquad\forall n=1,2,\ldots,
\]
则对任意$z\in\mathbb{R}$，有
\[
    \lim_{n\rightarrow\infty}\mathbb{P}\!\left(
    Z_n\leq z
    \right)
    =\int_{-\infty}^z \frac{1}{\sqrt{2\pi}}\exp\!\left(-\frac{x^2}{2}\right)\mathrm{d} x
    =\Phi(z).
\]
:::

::: proof
（${}^\star$）
令$Y_n=(X_n-\mu)/\sigma$。这里仅考虑矩母函数
$M_Y(t)=\mathbb{E}[\mathrm{e}^{tY_1}]$在某个包含$0$的开区间
$\left]-\delta,\delta\right[$上有定义的情形。
任取$t\in\mathbb{R}$，则对足够大的正整数$n$，有
\[
    \begin{aligned}
    M_{Z_n}(t) ={} &
    \mathbb{E}\!\left[
    \exp\left(\frac{t}{\sqrt{n}}\sum_{i=1}^n Y_i\right)
    \right]
    =
    \prod_{i=1}^n \mathbb{E}\!\left[
    \frac{t}{\sqrt{n}}Y_i
    \right]
    =
    \left[M_Y\!\left(\frac{t}{\sqrt{n}}\right)\right]^n.
    \end{aligned}
\]
而由于$\mathbb{E}[Y_1]=0,\operatorname{Var}(Y_1)=1$，
故将$M_Y(t)$在$t=0$附近做泰勒展开到二阶可得
\[
    M_Y(t) =
    1 + \frac{1}{2}t^2 + o(t^2),
\]
因此
\[
    M_{Z_n}(t)
    =\left(1+\frac{t^2}{2n}+o\!\left(\frac{1}{n}\right)\right)^{\!n}.
\]
令$n\rightarrow\infty$即可得到
\[
    \lim_{n\rightarrow\infty} M_{Z_n}(t)
    =\mathrm{e}^{\frac{t^2}{2}}.
\]
上式右端恰好给出标准正态分布$\mathcal{N}(0,1)$的矩母函数，
接下来我们需要用到如下引理：

**引理。** 设$Z_1,Z_2,\ldots$为一列随机变量，它们的分布函数为$F_{Z_n}$，
矩母函数为$M_{Z_n}$。又设随机变量$Z$的分布函数为$F_Z$，
矩母函数$M_Z$在$\left]-\delta,\delta\right[$上有定义。
若对任意$t\in \left]-\delta,\delta\right[\,$，
$M_{Z_n}(t)$总对足够大的$n$有定义，且
\[
    \lim_{n\rightarrow\infty} M_{Z_n}(t) = M_Z(t),
\]
则对任意$x\in\mathbb{R}$，只要$F_Z$在点$x$处连续，就有
\[
    \lim_{n\rightarrow\infty}
    F_{Z_n}(x) = F_Z(x).
\]

该引理的证明不做要求。由上述引理可立即得到
\[
    \lim_{n\rightarrow\infty} F_{Z_n}(z)
    =\int_{-\infty}^{z} \frac{1}{\sqrt{2\pi}}\exp\!\left(-\frac{x^2}{2}\right)\mathrm{d} x,
\]
因此待证结论成立。
:::

::: remark
（${}^\star$）
实际上在上述证明中，我们只需把矩母函数$M_Y$
换成**特征函数**（characteristic function）
\[
    \varphi_Y(t) = \mathbb{E}[\cos Y_1] + \mathrm{i}\,\mathbb{E}[\sin Y_1]=\mathbb{E}\!\left[\mathrm{e}^{\mathrm{i} tY_1}\right],
    \qquad t\in\mathbb{R},
\]
即可将该证明比较直接地推广到一般的情形。
特征函数与矩母函数有许多相似的性质，例如$X,Y$独立时
有$\varphi_{X+Y}=\varphi_X\cdot\varphi_Y$，
又如引理\ref{lemma:convergence_in_distribution_MGF} 也有
特征函数的版本。但可以证明，对于任意随机变量，其特征函数
在整个实数轴上均有定义，而对各阶矩的存在性没有要求，
因此特征函数相比矩母函数有着更广泛的适用范围。
:::

结合大数定律与中心极限定理，可以不严格地认为，
对于一列独立同分布的随机变量$X_1,X_2,\ldots$，当$n$足够大时有
\[
    \frac{1}{n}\sum_{i=1}^n X_i \approx \mu + \frac{\sigma}{\sqrt{n}}\cdot Z_n,
\]
其中$\mu=\mathbb{E}[X_1]$，
$\sigma=\sqrt{\operatorname{Var}(X_1)}$，
而随机变量$Z_n$服从正态分布$\mathcal{N}(0,1)$。
上式指出，样本均值相对于期望的涨落幅度正比于标准差$\sigma$
而反比于$\sqrt{n}$。此外，在数理统计的部分，我们还将用上式
来设计期望的区间估计方法。

@theorem:CLT  给出的是一个经典版本的中心极限定理，
其它版本的中心极限定理还包括Lyapunov中心极限定理、
Lindeberg中心极限定理等，它们在不同条件下证明了样本均值
相对于期望的涨落渐近服从正态分布；见[@billingsley1995probability]第27节。
这些中心极限定理为如下经验性结论提供了理论支持：
若一个随机变量$X$是由大量微小而相互独立的随机因素叠加作用而产生的，
则$X$服从正态分布[^1]。
这也解释了为什么实际应用中会大量出现服从正态分布的随机变量。

## 利用中心极限定理近似计算概率*

中心极限定理的另一大用处是对涉及大量独立同分布随机变量的和的概率
进行近似计算。设某个概率分布$F$的期望为$\mu$，标准差为$\sigma$，
而$X_1,X_2,\ldots$是一列服从分布$F$的相互独立的随机变量。
记$S_n=X_1+\cdots+X_n$，则当$n$足够大时，由中心极限定理可得
\[
    \mathbb{P}\!\left(S_n\leq x\right)
    =\mathbb{P}\!\left(\frac{S_n-n\mu}{\sigma\sqrt{n}}
    \leq \frac{x-n\mu}{\sigma\sqrt{n}}
    \right) \approx \Phi\!\left(
    \frac{x-n\mu}{\sigma\sqrt{n}}
    \right).
\]
上式意味着我们可以近似认为$S_n$服从正态分布
$\mathcal{N}(n\mu,n\sigma^2)$。

::: example [二项分布的正态近似] {@example:binomial_normal_approximation}
设随机变量$S$服从参数为$(n,p)$的二项分布，并记$q=1-p$。
由二项分布与伯努利分布的关系，可知$S$与$X_1+\cdots+X_n$同分布，
其中$X_1,\ldots,X_n$相互独立且服从参数为$p$的伯努利分布。
现取$k\leq l$为任意自然数，则基于中心极限定理给出的
$\mathbb{P}(k\leq S\leq l)$的近似值为

```math {@eq:binomial_approx_by_Gaussian}
\begin{aligned}
\mathbb{P}(k\leq S\leq l)={} &
\mathbb{P}(k-1/2\leq S\leq l+1/2) \\
\approx{} & \Phi\!\left(
\frac{l+1/2-np}{\sqrt{npq}}
\right)
-\Phi\!\left(
\frac{k-1/2-np}{\sqrt{npq}}
\right).
\end{aligned}
```

注意到我们在利用中心极限定理之前先将$\mathbb{P}(k\leq S\leq l)$
改写为$\mathbb{P}(k-1/2\leq S\leq l+1/2)$，该步
通常被称为**连续性修正**（continuity correction）。
对于$X_1+\cdots+X_n$为离散型随机变量的情形，施加这类连续性修正
通常能给出更精确的估计结果。
文献[@feller1968introduction]第VII.3节对
二项分布情形的连续性修正给出了更定量的解释。

一般来说，若要使得式 @eq:binomial_approx_by_Gaussian
具有较好的精度，则$n$应取得比较大，且$p$不能太接近$0$或$1$。
一些理论分析以及数值经验指出，当$np\geq 5$且$nq=n(1-p)\geq 5$时，
式 @eq:binomial_approx_by_Gaussian  通常能够给出
可接受的精度。
:::

::: example {@example:approximate_by_Gaussian_2}
设有一枚立方体骰子，我们将这枚骰子重复投掷$10$次，
并将掷出的点数之和记为$S$。我们希望对概率
$\mathbb{P}(30\leq S\leq 40)$进行估计。
考虑到$S$服从的依然是离散型分布，
我们在用中心极限定理前先采取连续性修正：
\[
    \begin{aligned}
    \mathbb{P}(30\leq S\leq 40) ={} &
     \mathbb{P}\!\left(29.5\leq S\leq 40.5\right) \\
     \approx{} & \Phi\!\left(\frac{40.5-10\cdot 3.5}{\sqrt{35/12}\cdot\sqrt{10}}\right)
     -\Phi\!\left(\frac{29.5-10\cdot 3.5}{\sqrt{35/12}\cdot\sqrt{10}}\right) \\
     = {} & 2\,\Phi\!\left(\frac{40.5-10\cdot 3.5}{\sqrt{35/12}\cdot\sqrt{10}}\right)-1 \approx 0.6915,
    \end{aligned}
\]
计算中我们还利用了函数$\Phi$的对称性$\Phi(x)+\Phi(-x)=1$。
实际上，利用卷积公式交由计算机可算出精确值：
\[
    \mathbb{P}(30\leq S\leq 40)=\frac{10384949}{15116544}=
    0.68699\cdots
\]
可看出中心极限定理（附加连续性修正）给出的估计值与精确值
相差不到$5\times 10^{-3}$。感兴趣的读者可尝试计算
不采取连续性修正时的估计值，并将其与精确值进行比较。
:::

[^1]: 一个典型的例子就是布朗运动。
