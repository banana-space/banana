---
title: 习题选编
---

::: exercise [Pareto分布]
设随机变量$X$满足
\[
\mathbb{P}(X\geq x) = \begin{cases}
\displaystyle \left(\frac{x_{\mathrm{m}}}{x}\right)^\alpha, & \text{若}\ x\geq x_{\mathrm{m}}, \\
1, & \text{若}\ x<x_{\mathrm{m}},
\end{cases}
\]
其中$x_{\mathrm{m}}$与$\alpha$为给定的正实数。

1. 证明$X$为连续型随机变量，并求出其概率密度函数。

2. 求$\alpha$的取值范围使得$\mathbb{E}[X]$存在，
   并求出$\mathbb{E}[X]$存在时的值。

3. 求$\alpha$的取值范围使得$\operatorname{Var}(X)$存在，
   并求出$\operatorname{Var}(X)$存在时的值。

4. 是否存在$\alpha$使得$\mathbb{E}[X^\beta]$
   对任意$\beta>0$均存在？

5. 设$z>x_{\mathrm{m}}$。试求$\mathbb{P}\!\left(X> x \mkern2mu|\mkern2mu X>z\right)$。

:::

::: exercise
设$(X,Y)$为连续型随机向量。

1. 若$(X,Y)$的联合概率密度函数为
   \[
   f_{X,Y}(x,y) = \begin{cases}
   c\,\mathrm{e}^{-2x}\mathrm{e}^{-3y}, & \text{若}\ x>0\ \text{且}\ y>0, \\
   0, & \text{其它情况},
   \end{cases}
   \]
   其中$c$为某个常数。试求$c$的值，并判断$X,Y$是否相互独立。

2. 若$(X,Y)$的联合概率密度函数为
   \[
   f_{X,Y}(x,y) = \begin{cases}
   c xy, & \text{若}\ x>0,y>0\ \text{且}\ x+y<1, \\
   0, & \text{其它情况},
   \end{cases}
   \]
   其中$c$为某个常数。试求$c$的值，并判断$X,Y$是否相互独立。

注：本题改编自[@ross_first_course_probability]第6.2节例2f。
:::

::: exercise
设随机变量$X$服从参数为$\lambda>0$的指数分布，
并令$N$为不大于$X$的最大整数。证明$N$与$X-N$相互独立，
并分别求出$N$与$X-N$的分布。

*提示：* 由于$N$取值为自然数，而$X-N$取值于$[0,1[$，故$N$与$X-N$独立当且仅当
\[
\mathbb{P}(N=n,X-N\in I) = \mathbb{P}(N=n)\cdot\mathbb{P}(X-N\in I)
\]
对任意自然数$n$以及区间$I\subseteq[0,1[\,$均成立，而
\[
\begin{aligned}
\mathbb{P}(N=n,X-N\in I)& =\mathbb{P}(X-n\in I), \\
\mathbb{P}(X-N\in I) &= \sum_{n=0}^\infty \mathbb{P}(N=n,X-N\in I), \\
\mathbb{P}(N=n) &= \mathbb{P}(n\leq X< n+1).
\end{aligned}
\]
:::

::: exercise {@exercise:positive_continuous_rv_expectation}
设$X$为一非负连续型随机变量且期望存在，证明
\[
\mathbb{E}[X] = \int_0^{+\infty} \mathbb{P}(X>x)\,\mathrm{d} x.
\]
*提示：* 由期望的定义出发，证明
\[
\mathbb{E}[X]
=\int_{0}^{+\infty}
\left(\int_{0}^x f_X(x)\,\mathrm{d} t\right)\mathrm{d} x,
\]
然后交换积分次序（无需说明积分次序交换的合法性）。
:::

::: exercise
设$g:\mathbb{R}\rightarrow\left[0,+\infty\right[$为一非负函数，
$X$与$g(X)$均为连续型随机变量，$X$的概率密度函数为$f_X$。
试利用 @exercise:positive_continuous_rv_expectation 的结论，
证明
\[
\mathbb{E}[g(X)] = \int_{-\infty}^{+\infty} g(x)\cdot f_X(x)\,\mathrm{d} x.
\]
*提示：* 由 @exercise:positive_continuous_rv_expectation 的结论，
可得
\[
\begin{aligned}
\mathbb{E}[g(X)]
& =\int_0^{+\infty} \mathbb{P}(g(X)>t)\,\mathrm{d} t \\
& = \int_0^{+\infty}\left(
\int_{-\infty}^{+\infty}
\mathsf{1}_{g(x)>t}(x,t)\cdot f_X(x)\,\mathrm{d} x\right)\,\mathrm{d} t,
\end{aligned}
\]
其中$\mathsf{1}_{g(x)>t}(x,t)$在$g(x)>t$时等于1
而其它情况下等于$0$。接下来交换积分次序（无需说明积分次序交换的合法性）。
:::

::: exercise
设$X$为一随机变量，$\operatorname{Var}(X)$存在。证明：
对任意$c\in\mathbb{R}$，均有
\[
\operatorname{Var}(X)\leq \mathbb{E}\!\left[(X-c)^2\right],
\]
且上式中取等号当且仅当$c=\mathbb{E}[X]$。
:::

::: exercise
设$X$为一随机变量。利用 @theorem:expectation_nonnegativity
证明：$\operatorname{Var}(X)=0$当且仅当存在某个实数$c$使得
$\mathbb{P}(X=c)=1$。
:::

::: exercise [琴生不等式，Jensen's inequality]
设$X$为一随机变量，其期望$\mathbb{E}[X]$存在，
$g:\mathbb{R}\rightarrow\mathbb{R}$为一阶连续可微函数，
$g'(x)$在$x\in\mathbb{R}$上单调不减，且$\mathbb{E}[g(X)]$存在，
证明
\[
g(\mathbb{E}[X])\leq \mathbb{E}[g(X)].
\]
*提示：* 先证明对任意$x,t\in\mathbb{R}$，有
\[
g(x) \geq g(t) + g'(t)(x-t),
\]
再在上式中代入$x=X,\,t=\mathbb{E}[X]$并取期望。
:::

::: exercise
设函数$g:[0,1]\rightarrow\mathbb{R}$在区间$[0,1]$上可积
且满足$0\leq g(x)\leq 1,\,\forall x\in[0,1]$。
设随机变量$X,Y$相互独立且均服从区间$[0,1]$上的均匀分布。令
\[
U = \mathsf{1}_{\{Y\leq g(X)\}},\quad V = g(X),\quad
W = \frac{1}{2}(g(X)+g(1-X)).
\]

1. 证明
   \[
   \mathbb{E}[U]=\mathbb{E}[V]=\mathbb{E}[W]=\int_0^1 g(x)\,\mathrm{d}x.
   \]

2. 证明$\operatorname{Var}(W)\leq\operatorname{Var}(V)\leq\operatorname{Var}(U)$。

注：本题取自[@grimmett2001probability]第4.14节习题9。
:::

::: exercise [Importance sampling]
设$X$为一连续型随机变量，其概率密度函数为$f_X$。
$Y_1,\ldots,Y_n$为$n$个同分布的连续型随机变量，
它们的概率密度函数为$f_Y$，且$f_Y(y)>0,\,\forall y\in\mathbb{R}$。
$g:\mathbb{R}\rightarrow\mathbb{R}$为一函数，
且$\mathbb{E}[g(X)]$存在。令
\[
Z = \frac{1}{n}\sum_{i=1}^n
g(Y_i)\cdot\frac{f_X(Y_i)}{f_Y(Y_i)}.
\]
证明
\[
\mathbb{E}[Z] = \mathbb{E}[g(X)].
\]
:::

::: exercise [Wald恒等式] {@exercise:wald_identity_general_case}
设$X_1,X_2,X_3,\ldots$为一列独立同分布的随机变量，
且$\mathbb{E}[X_1]$存在。$T$为一离散型随机变量，其取值均为自然数，
且期望$\mathbb{E}[T]$存在。证明：当
\[
\mathbb{E}\!\left[X_n\mathsf{1}_{\{n\leq T\}}\right]=\mathbb{E}[X_n]\,\mathbb{P}(T\geq n),\qquad \forall n=1,2,\ldots
\]
时，有
\[
\mathbb{E}\!\left[\sum_{n=1}^T X_n\right] = \mathbb{E}[X_1]\cdot\mathbb{E}[T].
\]
*提示：* 将上式左端改写为
$\mathbb{E}\!\left[\sum_{n=1}^\infty X_n\cdot \mathsf{1}_{\{n\leq T\}}\right]$，
而后交换期望与级数求和的次序（无需说明交换次序的合法性）。
:::

::: exercise
有两台设备A、B接在同一条供电线路上，该供电线路上可能会出现三种供电异常：
第一种异常将使A发生故障但B仍正常工作；
第二种异常将使B发生故障但A仍正常工作；
第三种异常将使A、B同时发生故障。
设三种供电异常第一次发生的时刻相互独立
且服从参数分别为$\lambda_1,\lambda_2,\lambda_3$的指数分布。
令$X_{\mathrm{A}},X_{\mathrm{B}}$分别表示A、B首次发生故障的时刻。

1. 试对任意$s,t>0$求$\mathbb{P}(X_{\mathrm{A}}>s,X_{\mathrm{B}}>t)$。

2. $(X_{\mathrm{A}},X_{\mathrm{B}})$是否是连续型随机向量？
   *提示：*$\mathbb{P}(X_{\mathrm{A}}=X_{\mathrm{B}})$是否为$0$？

注：本题取自[@ross_first_course_probability]第六章自测题6.8。
:::

::: exercise [Buffon投针问题]
假设有一大片地面上被画了足够多条互相平行的直线，相邻两条平行线的距离
均为$L$。现往地面上以足够均匀的方式随机地投一根针，针的长度为$\ell<L$。
试求针与地面某条直线相交的概率。
:::

::: exercise [Bertrand悖论]
假设我们希望在单位圆内随机取一条弦。令点$O$为单位圆圆心。
我们考虑以下三种不同的取法：

1. 在单位圆周上均匀且独立地随机取两个点$A$与$B$，取弦$AB$。

2. 在单位圆内均匀地随机取一个非圆心的点$P$，取过点$P$
   且与$OP$垂直的弦。

3. 在单位圆周上先均匀地随机取一点$Q_1$，再在半径$OQ_1$上
   均匀地随机选一个点$Q_2$，最后取过点$Q_2$且与$OQ_1$相垂直的弦。

试求上述三种不同取法下，弦的长度大于$\ell$的概率，
其中$\ell\in\left]0,2\right[$为给定的实数。
:::

::: exercise
设有一个球面，它$10\%$的区域被染成了蓝色，其余$90\%$的区域
被染成了红色。证明：无论球面上红色和蓝色区域具体的形状如何，
我们总能找到一个正方体使其八个顶点均落在该球面上的红色区域中。

*提示：* 考虑在球面上“均匀”地随机选取八个能构成正方体的顶点，
计算落在球面红色区域的顶点数的期望（可利用期望的线性），
再与待证结论进行比较。

注：本题取自[@grimmett2001probability]第1.8节习题28。
:::

::: exercise
设随机变量$(X,Y)$的联合分布函数为
\[
F_{X,Y}(x,y)
=\mathbb{P}(X\leq x,Y\leq y)
=\begin{cases}
1, & \text{若 $\min\{x,y\}\geq 1$}, \\
\min\{x,y\}, & \text{若 $0<\min\{x,y\}<1$}, \\
0, & \text{若 $\min\{x,y\}\leq 0$}.
\end{cases}
\]

1. 求$X,Y$各自的边缘分布。

2. $\displaystyle\frac{\partial^2 F_{X,Y}(x,y)}{\partial x\partial y}$
   在哪些点不存在？存在时又等于多少？

3. （${}^\star$）证明$\mathbb{P}(X=Y)=1$，从而$(X,Y)$
   不是连续型随机向量。

   *提示：* 令
   \[
   E_{n,k}=\left\{\frac{k-1}{2^n}<X\leq\frac{k}{2^n},
   \frac{k-1}{2^n}<Y\leq\frac{k}{2^n}\right\},
   \quad \forall n\in\mathbb{N}_+, k\in\{1,\ldots,2^n\}.
   \]
   注意到
   $\{X=Y\} = \bigcap_{n=1}^\infty\bigcup_{k=1}^{2^n}
   E_{n,k}$，再利用概率的可加性与连续性。

:::
