---
title: 一般随机变量的期望
---

一般随机变量的期望属于高等概率论的内容，由于数学工具的匮乏，
本课程将不给出一般随机变量期望的定义，而将主要介绍一些一般情形下
期望的重要性质。

我们首先用如下定理给出一种理解一般随机变量期望的方法，
即一般随机变量的期望都可以用离散型随机变量的期望进行逼近。
该定理的证明不做要求。

::: theorem {@theorem:expectation_approximate_by_discrete_rv}
设$X$为任一随机变量。任取一严格递减且趋于$0$的序列
$(\delta_n)_{n=1}^\infty$，并令$X_1,X_2,\ldots$为一列
离散型随机变量，使得$\{|X_n-X|\leq\delta_n\}$均为必然事件。
则$\mathbb{E}[X]$存在当且仅当每个$\mathbb{E}[X_n]$均存在，
且$\mathbb{E}[X]$存在时有
\[
\mathbb{E}[X] = \lim_{n\rightarrow\infty}
\mathbb{E}[X_n].
\]
:::

@theorem:expectation_approximate_by_discrete_rv 说明，
对于任意的随机变量$X$，可通过构造一列离散型随机变量
$(X_n)_{n=1}^\infty$对$X$进行逼近，
并考察$\mathbb{E}[X_n]$的存在性以及极限
来判断$\mathbb{E}[X]$的存在性并求$\mathbb{E}[X]$的值。
满足 @theorem:expectation_approximate_by_discrete_rv 条件的
离散型随机变量列$(X_n)_{n=1}^\infty$则可通过如下方式构造：
给定$(\delta_n)_{n=1}^\infty$，令

```math {@eq:step_func_approx}
\theta_n(x) = \begin{cases}
k\delta_n, & \text{若存在正整数 $k$ 使得}\ k\delta_n\leq x < (k+1)\delta_n, \\
0, &\text{若}\ {-\delta_n}<x<\delta_n, \\
-k\delta_n, & \text{若存在正整数 $k$ 使得}\ {-(k+1)\delta_n} < x \leq -k\delta_n,
\end{cases}
```

则有$|\theta_n(x)-x|\leq \delta_n,\,\forall x\in\mathbb{R}$，
因而令$X_n=\theta_n(X)$即可使得随机变量列$(X_n)_{n=1}^\infty$
满足 @theorem:expectation_approximate_by_discrete_rv 条件。
此外，上式给出的函数$\theta_n$还具有如下几条性质：
(i) $\theta_n$单调不减；(ii) $\theta_n(x)$与$x$具有相同的符号；
(iii) $|\theta_n(x)|=\theta_n(|x|)\leq |x|$。

基于以上结果，我们可以比较方便地将离散随机变量期望的许多结果
推广到一般随机变量的期望。

::: lemma [期望仅由分布决定]
设$X,Y$为两个同分布的随机变量，
也就是说对任意区间$I\subseteq\mathbb{R}$均有
\[
\mathbb{P}(X\in I)=\mathbb{P}(Y\in I).
\]
则$\mathbb{E}[X]$存在当且仅当$\mathbb{E}[Y]$存在，
且$\mathbb{E}[X]$与$\mathbb{E}[Y]$存在时有
\[
\mathbb{E}[X]=\mathbb{E}[Y].
\]
:::

::: proof
（${}^\star$）这里仅给出思路：
令函数$\theta_n$由式 @eq:step_func_approx 给出，
其中取$\delta_n=1/n$。再令$X_n=\theta_n(X)$，$Y_n=\theta_n(Y)$，
则$X_n,Y_n$均为离散型随机变量。接下来由
$\mathbb{P}(X\in I)=\mathbb{P}(Y\in I)$
以及$\theta_n$的单调性可证明对任意正整数$n$，
$X_n=\theta_n(X)$与$Y_n=\theta_n(Y)$具有相同的分布列，
故$\mathbb{E}[X_n]$存在当且仅当$\mathbb{E}[Y_n]$存在，
且它们都存在时有$\mathbb{E}[X_n]=\mathbb{E}[Y_n]$。
最后，由于$|X_n-X|\leq 1/n$以及$|Y_n-Y|\leq 1/n$，
可利用 @theorem:expectation_approximate_by_discrete_rv 得到
\[
\mathbb{E}[X] = \lim_{n\rightarrow\infty}\mathbb{E}[X_n]
=\lim_{n\rightarrow\infty}\mathbb{E}[Y_n]
=\mathbb{E}[Y].
\]
:::

::: proposition {@proposition:existence_expectation_general}
设$X,Y$为随机变量。

1. $\mathbb{E}[X]$存在当且仅当$\mathbb{E}[|X|]$存在。

2. 若$|X|\leq Y$必然成立，且$\mathbb{E}[Y]$存在，
   则$\mathbb{E}[X]$存在，且$|\mathbb{E}[X]|\leq\mathbb{E}[Y]$。

:::

::: proof
（${}^\star$）
令函数$\theta_n$由式 @eq:step_func_approx 给出，
其中取$\delta_n=1/n$。再令$X_n=\theta_n(X)$，
则有$|X_n-X|\leq 1/n$，且因$\theta_n$满足
$\theta_n(|x|)=|\theta_n(x)|$，故
$||X_n|-|X||=|\theta_n(|X|)-|X||\leq 1/n$。

我们先证明$\mathbb{E}[X]$的存在性等价于$\mathbb{E}[|X|]$的存在性。
由 @theorem:expectation_approximate_by_discrete_rv 可得，
$\mathbb{E}[X]$的存在性等价于每个$\mathbb{E}[X_n]$的存在性，
而$\mathbb{E}[|X|]$的存在性等价于每个$\mathbb{E}[|X_n|]$的存在性，
而由离散型随机变量期望的LOTUS
（@theorem:law_unconscious_statistician_discrete），
可得$\mathbb{E}[X_n]$的存在性等价于$\mathbb{E}[|X_n|]$的存在性。
综上可得$\mathbb{E}[X]$的存在性等价于$\mathbb{E}[|X|]$的存在性。

接下来设$0\leq X\leq Y$且$\mathbb{E}[Y]$存在。令
$Y_n=\theta_n(Y)$，则由$\theta_n$的单调性可得
$X_n=\theta_n(X)\leq\theta_n(Y)= Y_n$，
故[^1]
\[
\begin{aligned}
\mathbb{E}[Y_n]
={} &
\sum_{y\,:\,y\geq 0} y\cdot\mathbb{P}(Y_n=y)
=
\sum_{(x,y)\,:\,0\leq x\leq y} y\cdot\mathbb{P}(X_n=x,Y_n=y) \\
\geq{} &
\sum_{(x,y)\,:\, 0\leq x\leq y} x\cdot \mathbb{P}(X_n=x,Y_n=y)
=
\sum_{x\,:\,x\geq 0} x\cdot\mathbb{P}(X_n=x)=\mathbb{E}[X_n].
\end{aligned}
\]
最后利用 @theorem:expectation_approximate_by_discrete_rv
并令$n\rightarrow\infty$即得$\mathbb{E}[X]$存在
且有$\mathbb{E}[Y]\geq\mathbb{E}[X]$。
:::

::: theorem [期望的线性] {@theorem:expectation_linearity}
设随机变量$X,Y$的期望$\mathbb{E}[X]$与$\mathbb{E}[Y]$均存在，
$\alpha,\beta$为任意两个实数。则
\[
\mathbb{E}[\alpha X+\beta Y]
=\alpha\,\mathbb{E}[X]+\beta\,\mathbb{E}[Y].
\]
:::

::: proof
不妨设$\alpha,\beta$不全为$0$，否则等式是显然的。

令函数$\theta_n$由式 @eq:step_func_approx 给出，
其中取$\delta_n=1/n$。再令$X_n=\theta_n(X),Y_n=\theta_n(Y)$，
则由 @theorem:expectation_approximate_by_discrete_rv 可得
\[
\mathbb{E}[X]=\lim_{n\rightarrow\infty}\mathbb{E}[X_n],
\qquad
\mathbb{E}[Y]=\lim_{n\rightarrow\infty}\mathbb{E}[Y_n].
\]
令$Z_n=\alpha X_n+\beta Y_n$，则有
\[
\left|Z_n-(\alpha X+\beta Y)\right|
\leq |\alpha|\cdot |X_n-X|
+|\beta|\cdot|Y_n-Y|\leq \frac{|\alpha|+|\beta|}{n}.
\]
因$Z_n$均为离散型随机变量，且$(|\alpha|+|\beta|)/n$严格单调递减
趋于$0$，故$(Z_n)_{n=1}^\infty$满足
@theorem:expectation_approximate_by_discrete_rv 的条件，
从而
\[
\begin{aligned}
\mathbb{E}[\alpha X+\beta Y]
& =\lim_{n\rightarrow\infty}\mathbb{E}[Z_n] \\
& =\lim_{n\rightarrow\infty}(\alpha\,\mathbb{E}[X_n]+\beta\,\mathbb{E}[Y_n])
=\alpha\,\mathbb{E}[X]+\beta\,\mathbb{E}[Y].
\end{aligned}
\]
其中第二步用到了离散型随机变量期望的线性。
:::

::: theorem {@theorem:expectation_nonnegativity}
设$X$为随机变量，满足$\mathbb{P}(X\geq 0)=1$。则如下命题成立：

1. 若$\mathbb{E}[X]$存在，则$\mathbb{E}[X]\geq 0$。

2. $\mathbb{E}[X]=0$当且仅当$\mathbb{P}(X=0)=1$。

:::

::: proof
1. 令函数$\theta_n$由式 @eq:step_func_approx 给出，
   其中取$\delta_n=1/n$。再令$X_n=\theta_n(X)$，
   则 @theorem:expectation_approximate_by_discrete_rv 保证了
   $\lim_{n\rightarrow\infty}\mathbb{E}[X_n]=\mathbb{E}[X]$。
   另一方面，由$|X_n-X|\leq 1/n$可得$X_n+1/n\geq X$，
   故$\mathbb{P}(X_n+1/n\geq 0)=1$。而由于$X_n+1/n$也是
   离散型随机变量，由 @theorem:expectation_nonnegativity_discrete 可得
   \[
   0\leq \mathbb{E}\!\left[X_n+\frac{1}{n}\right]=\mathbb{E}[X_n]+\frac{1}{n}.
   \]
   令$n\rightarrow\infty$并由
   $\lim_{n\rightarrow\infty}\mathbb{E}[X_n]=\mathbb{E}[X]$
   即得到$\mathbb{E}[X]\geq 0$。

2. $\mathbb{P}(X=0)=1\Rightarrow\mathbb{E}[X]=0$：
   由于$\mathbb{E}[X]$仅取决于$X$的分布，
   而$\mathbb{P}(X=0)=1$意味着$X$与常函数$0$同分布，
   故$\mathbb{E}[X]=\mathbb{E}[0]=0$。

   （${}^\star$）$\mathbb{E}[X]=0\Rightarrow \mathbb{P}(X=0)=1$：
   用反证法，假设$\mathbb{E}[X]=0$但$\mathbb{P}(X=0)<1$。
   对任意正整数$n$，令$E_n=\{X> 1/n\}$，则不难看出
   $E_1,E_2,\ldots$为单调递增事件列，且
   $\lim_{n\rightarrow\infty} E_n = \{X>0\}$。由概率的连续性可得
   \[
   \lim_{n\rightarrow\infty}\mathbb{P}(E_n)
   =\mathbb{P}(X>0).
   \]
   由$\mathbb{P}(X=0)<1$可得$\mathbb{P}(X>0)>0$，
   从而存在自然数$N$使得$\mathbb{P}(E_N)>0$。另一方面，注意到
   \[
   \left\{X-\frac{1}{N}\mathsf{1}_{E_N}\geq 0\right\}
   \]
   为必然事件，故由定理第1部分以及期望的线性得
   \[
   0\leq \mathbb{E}\!\left[X-\frac{1}{N}\mathsf{1}_{E_N}\right]
   =\mathbb{E}[X] - \frac{1}{N}\mathbb{P}(E_N)=- \frac{1}{N}\mathbb{P}(E_N)
   <0,
   \]
   产生矛盾。

:::

下面我们证明连续型随机变量期望的LOTUS，即
@theorem:law_unconscious_statistician_continuous。

::: proof [@theorem:law_unconscious_statistician_continuous 的证明]
（${}^\star$）
简单起见，这里只给出二元函数情形的证明，且不论证
$\mathbb{E}[g(X,Y)]$的存在性。令函数$\theta_n$由
式 @eq:step_func_approx 给出，其中取$\delta_n=1/n$。
再令$Z_n=\theta_n(g(X,Y))$，则$Z_n$为离散型随机变量，且有
\[
\begin{aligned}
\mathbb{E}[Z_n]
& =\sum_{z} z\cdot \mathbb{P}(Z_n=z) \\
& =\sum_{z} z\cdot \iint_{\theta_n(g(x,y))=z}
f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y \\
& =\sum_z \iint_{\theta_n(g(x,y))=z} \theta_n(g(x,y))\cdot f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y \\
& = \iint_{\,\mathbb{R}^2} \theta_n(g(x,y))\cdot f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y.
\end{aligned}
\]
而由于
\[
\begin{aligned}
& \left|\iint_{\,\mathbb{R}^2} \theta_n(g(x,y))\cdot f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y
-\iint_{\,\mathbb{R}^2}g(x,y)\cdot f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y\right| \\
\leq{} &
\iint_{\,\mathbb{R}^2}
\left|\theta_n(g(x,y))-g(x,y)\right|\cdot f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y \\
\leq {} &
\iint_{\,\mathbb{R}^2}\frac{1}{n}\cdot f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y
=\frac{1}{n},
\end{aligned}
\]
故取$n\rightarrow\infty$的极限即可得到
\[
\begin{aligned}
\mathbb{E}[g(X,Y)]
& =\lim_{n\rightarrow\infty} \mathbb{E}[Z_n] \\
& =\lim_{n\rightarrow\infty} \iint_{\mathbb{R}^2} \theta_n(g(x,y))\cdot f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y \\
& =\iint_{\mathbb{R}^2} g(x,y)\cdot f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y,
\end{aligned}
\]
其中第一个等号来自于 @theorem:expectation_approximate_by_discrete_rv。
:::

以上介绍的一般情形下期望的性质希望读者能够记住并学会如何运用，
但它们的证明只要求读者能够顺下来即可，不要求掌握。

最后，我们利用 @theorem:law_unconscious_statistician_continuous 证明，
两个独立的连续型随机变量乘积的期望等于各自期望的乘积；该结论的证明要求读者能够掌握。

::: theorem {@theorem:independent_rv_product_expectation}
设$X,Y$为相互独立的连续型随机变量，且二者的期望均存在，则
\[
\mathbb{E}[XY]=\mathbb{E}[X]\cdot\mathbb{E}[Y].
\]
:::

::: proof
由于$X,Y$互相独立，由 @theorem:independence_continuous_pdf
可得$(X,Y)$为连续型随机向量，且$f_{X,Y}(x,y)=f_X(x)\cdot f_Y(y)$。
接下来由 @theorem:law_unconscious_statistician_continuous 得
\[
\begin{aligned}
\mathbb{E}[XY]
&=\iint_{\,\mathbb{R}^2}xy\cdot f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y \\
&=\iint_{\,\mathbb{R}^2}\left(x\cdot f_{X}(x)\right)\left(y\cdot f_Y(y)\right)\mathrm{d} x\mathrm{d} y \\
& = \int_{-\infty}^{+\infty}
x\cdot f_X(x)\,\mathrm{d} x
\int_{-\infty}^{+\infty}
y\cdot f_Y(y)\,\mathrm{d} y
=\mathbb{E}[X]\cdot\mathbb{E}[Y].
\end{aligned}
\]
定理得证。
:::

实际上，只要两个独立随机变量的期望存在，则不管它们是不是离散型或连续型，
其乘积的期望都等于期望的乘积；该结论的证明这里就不展开了，
但读者仍可基于离散型随机变量逼近的思路来进行直观理解。

[^1]: 推导中我们对求和式进行了重排，且利用了如下结论：
    若$f,g:\mathbb{R}^2\rightarrow\left[0,+\infty\right[$仅在可数个点上取非零值，
    且$f(x,y)\leq g(x,y),\,\forall(x,y)\in\mathbb{R}^2$，
    则$\sum_{(x,y)}g(x,y)$收敛时$\sum_{(x,y)}f(x,y)$必收敛，
    且$\sum_{(x,y)}f(x,y)\leq \sum_{(x,y)}g(x,y)$。
    可参考[附录A.1](/books/概率与数理统计/一些数学上的补充说明/求和式/)中的相关结论。
