---
title: 随机变量函数的分布
---

本节中我们主要考虑这样一类问题：给定$n$维随机向量$\boldsymbol{X}$
并知道它的联合分布（以联合分布列/联合概率密度函数/联合分布函数的形式给出），
以及（向量值）函数$\boldsymbol{g}:\operatorname{Im}\boldsymbol{X}\rightarrow\mathbb{R}^m$，
如何求出$m$维随机向量$\boldsymbol{Y}=\boldsymbol{g}(\boldsymbol{X})$的联合分布？
一般来说这类问题需要具体情况具体分析，并没有完全通用的方法。
第二章的 @example:function_of_discrete_rv、
@example:function_of_discrete_rv_vec 与
@example:sum_independent_rv_discrete 已经对
$\boldsymbol{X}$为离散型的一些情况进行了讨论，
本节中我们将对其它一些特殊情况进行介绍。

## 连续型随机变量函数的分布*

先考虑一个比较简单的情况：设$X$为一连续型随机变量，
其概率密度函数$f_X$已知，$g$为一元实值函数，其定义域包含$X$的值域。
我们想要考察$Y=g(X)$的概率分布。

当函数$g$的值域为可数集时，可知$Y=g(X)$的值域也必定是可数集，
从而$Y$必定为一离散型随机变量，只需计算其分布列即可完整描述其概率分布：
\[
p_Y(y) = \mathbb{P}(g(X)=y)
=\int_{g(x)=y} f_{X}(x)\,\mathrm{d} x.
\]
换句话说，我们需要先对任意$y\in\operatorname{Im} g$
求出方程$g(x)=y$的解集$\{x\mid g(x)=y\}$，而后在这个解集上
对概率密度函数$f_X$进行积分。

当函数$g$的值域为不可数集时，我们通常需要求解$Y=g(X)$的分布函数：
\[
F_{Y}(y) = \mathbb{P}(g(X)\leq y)
= \int_{g(x)\leq y} f_X(x)\,\mathrm{d} x,
\qquad\qquad \forall y\in\mathbb{R}.
\]
为计算上式右端积分，需要对任意$y\in\mathbb{R}$
求解不等式$g(x)\leq y$，再在解集$\{x\mid g(x)\leq y\}$上
对概率密度函数$f_X$进行积分。

::: example {@example:rand_var_given_CDF_easy}
设$X$服从$\left]0,1\right[$上的均匀分布。令
$F:\mathbb{R}\rightarrow\left]0,1\right[$为一连续
且严格单调递增的函数，且满足
\[
\lim_{x\rightarrow-\infty}F(x) = 0,\qquad
\lim_{x\rightarrow+\infty}F(x) = 1.
\]
由数学分析知识可证明$F$有连续且严格单调递增的反函数
$F^{-1}:\left]0,1\right[\rightarrow\mathbb{R}$。
我们考虑随机变量$Y=F^{-1}(X)$的分布：注意到
对任意$x\in\left]0,1\right[$及$y\in\mathbb{R}$，
$F^{-1}(x)\leq y$当且仅当$x\leq F(y)$，故
\[
\mathbb{P}(Y\leq y) =
\mathbb{P}(F^{-1}(X)\leq y)
=\mathbb{P}(X\leq F(y))
=
\int_{-\infty}^{F(y)} \mathsf{1}_{\left]0,1\right[}(x)\,\mathrm{d} x
=
F(y),
\]
故$Y=F^{-1}(X)$的分布函数就是$F$。

这个例子为生成概率分布为$F$的随机数提供了一种方法：
若$F$连续且严格单调递增，则可以首先生成一个服从
$\left]0,1\right[$上均匀分布的随机数$x$，然后求出方程
$F(y)=x$的解$y$，此时$y$作为一个随机数，即服从$F$给出的概率分布。
需要注意的是，该方法中需要求解方程$F(y)=x$，这在许多实际情况中会有困难。
:::

当函数$g$的性质较好（例如$g$在定义域上除开有限多个点可导，
且导函数的零点只有有限多个）时，应检查一下
是否能将$F_Y(y)$表示为一个函数在区间
$\left]-\infty,y\right]$上的积分，或是检查$F_Y$是否连续
并在除开个别点以后处处可导，因为这意味着$Y$为连续型随机变量，
我们可以用概率密度函数来描述其概率分布。
我们用两个例子对此进行进一步说明。

::: example {@example:square_rv_pdf}
设$X$为一连续型随机变量，$Y=X^2$。为了求出$Y$的分布，
我们考察其分布函数$F_Y(y)=\mathbb{P}(Y\leq y)$。
显然$y\leq  0$时有$\mathbb{P}(Y\leq y)=0$，而$y> 0$时，
\[
F_Y(y) = \mathbb{P}(X^2\leq y)
=\mathbb{P}(-\sqrt{y}\leq X \leq \sqrt{y})
=\int_{-\sqrt{y}}^{\sqrt{y}} f_X(x)\,\mathrm{d} x.
\]
上式右端在$y\rightarrow 0^+$时趋于$0$，且对任意$y>0$均可导，
其导函数为
\[
\frac{f_X(\sqrt{y}) + f_X(-\sqrt{y})}{2\sqrt{y}},
\]
故不难看出$Y$为一连续型随机变量，其概率密度函数为
\[
f_Y(y) = \begin{cases}
\displaystyle \frac{f_X(\sqrt{y}) + f_X(-\sqrt{y})}{2\sqrt{y}}, & y>0, \\
0, & y\leq 0.
\end{cases}
\]
特别是，当$X\sim\mathcal{N}(0,1)$时，有
\[
f_Y(y) = \begin{cases}
\displaystyle\frac{1}{\sqrt{2\pi}}\, y^{-1/2}\mathrm{e}^{-y/2}, & y>0, \\
0, & y\leq 0,
\end{cases}
\]
此时我们称$Y$服从**自由度为$1$的$\chi^2$分布**。
:::

::: example
设$X$为一连续型随机变量，其值域为$\left]-1,1\right[$的子集，
概率密度函数为$f_X$，而$Y=\sqrt{1-X^2}$。为了求出$Y$的分布，
我们考察其分布函数$F_Y(y)=\mathbb{P}(Y\leq y)$。
不难看出对任意$y<0$有$\mathbb{P}(Y\leq y)=0$，
而对任意$y\geq 1$有$\mathbb{P}(Y\leq y)=1$。
当$0\leq y<1$时，有
\[
\begin{aligned}
\mathbb{P}(Y\leq y)
& = \mathbb{P}\!\left(\sqrt{1-X^2}\leq y\right)
=\mathbb{P}\!\left(X^2\geq 1-y^2\right) \\
& = \mathbb{P}\!\left(\left\{X\geq \sqrt{1-y^2}\right\}\cup \left\{X\leq -\sqrt{1-y^2}\right\}\right) \\
& = \mathbb{P}\!\left(X\geq \sqrt{1-y^2}\right)
+\mathbb{P}\left(X\leq -\sqrt{1-y^2}\right) \\
& = \int_{\sqrt{1-y^2}}^1 f_X(x)\,\mathrm{d} x
+ \int_{-1}^{-\sqrt{1-y^2}} f_X(x)\,\mathrm{d} x.
\end{aligned}
\]
注意到上式右端在$y\in\left[0,1\right[$时均可导，其导函数为
\[
\frac{y
}{\sqrt{1-y^2}}
\cdot \left(f_X\!\left(\sqrt{1-y^2}\right)+f_X\!\left(-\sqrt{1-y^2}\right)\right).
\]
此外，$F_Y(y)$在$y=0$与$y=1$处均连续。故不难看出$Y$
为一连续型随机变量，其概率密度函数由
\[
f_Y(y) = \begin{cases}
\dfrac{y
}{\sqrt{1-y^2}}
\cdot \left(f_X\!\left(\sqrt{1-y^2}\right)+f_X\!\left(-\sqrt{1-y^2}\right)\right), & 0\leq y<1, \\
0, & y<0\ \text{或}\ y\geq 1.
\end{cases}
\]
给出。
:::

接下来我们考虑一个更具体的特殊情况：设函数$g$定义在开区间
$\left]a,b\right[$上且为严格单调递增的连续函数
（允许$a=-\infty$或$b=+\infty$）。由基本的数学分析知识可知，
$g$的值域也为某个开区间$\left]\alpha,\beta\right[$
（允许$\alpha=-\infty$或$\beta=+\infty$），
且存在定义在$\left]\alpha,\beta\right[$上的严格单调递增的反函数$h$：
\[
h(g(x)) = x,\qquad\forall x\in \left]a,b\right[.
\]
我们进一步假定$h$在$\left]\alpha,\beta\right[$上处处可导。

我们利用前面给出的方法求解$Y=g(X)$的分布函数。
由于$X$为一连续型随机变量，且对任意$x\in \left]a,b\right[$，
$g(x)\leq y$当且仅当$x\leq h(y)$，
故$y\in \left]\alpha,\beta\right[$时，有
\[
\begin{aligned}
F_Y(y) & = \mathbb{P}(g(X)\leq y) \\
& = \int_{g(x)\leq y}
f_X(x)\,\mathrm{d} x \\
& = \int_{a}^{h(y)} f_X(x)\,\mathrm{d} x,
\end{aligned}
\]
接下来利用定积分换元公式做换元$x=h(t)$，可得$\alpha<y<\beta$时有
\[
F_Y(y) = \int_{\alpha}^y f_X(h(t))
\cdot h'(t)\,\mathrm{d} t,
\]
而$y\leq \alpha$时$F_Y(y)=\mathbb{P}(g(X)\leq y)=0$，
$y\geq \beta$时$F_Y(y)=\mathbb{P}(g(X)\leq y)=1$。
此外，$\alpha$为有限实数时，$F_Y(y)$在$y=\alpha$处连续；
$\beta$为有限实数时，$F_Y(y)$在$y=\beta$处连续。
综上可知$Y$为一连续型随机变量，其概率密度函数为
\[
f_Y(y) =
\begin{cases}
f_X(h(y))\cdot h'(y), &
 y\in \left]\alpha,\beta\right[, \\
0, & y\notin \left]\alpha,\beta\right[.
\end{cases}.
\]

上述推导过程同样可用于$g$在$\left]a,b\right[$上连续、严格递减
且存在可导反函数的情形，具体的推导步骤这里不再展开。
综上，可得如下结论：

::: theorem {@theorem:continuous_rv_change_of_var}
设$X$为一连续型随机变量，$\left]a,b\right[$为一包含$X$值域的开区间
（允许$a=-\infty$或$b=+\infty$），函数
$g:\left]a,b\right[\rightarrow\mathbb{R}$连续、
严格单调且值域为$\left]\alpha,\beta\right[$
（允许$\alpha=-\infty$或$\beta=+\infty$），其反函数
$h:\left]\alpha,\beta\right[\rightarrow\left]a,b\right[$
处处可导。则$Y=g(X)$为一连续型随机变量，其概率密度函数为
\[
f_Y(y) = \begin{cases}
f_X(h(y))\cdot |h'(y)|, &
 y\in\left]\alpha,\beta\right[, \\
0, & y\notin \left]\alpha,\beta\right[.
\end{cases}
\]
:::

## 连续型随机向量函数的分布*

本小节中我们考虑二维连续型随机向量的函数的分布：
设$(X,Y)$为连续型随机向量，其概率密度函数$f_{X,Y}$已知，
$g$为二元实值函数，其定义域包含$(X,Y)$的值域。
我们想要考察$Z=g(X,Y)$的概率分布。

与一维情形类似，当函数$g$的值域为可数集时，
$Z=g(X,Y)$为一离散型随机变量，只需计算其分布列即可完整描述其概率分布：
\[
p_Z(z) = \mathbb{P}(g(X,Y)=z)
=\iint_{g(x,y)=z} f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y,
\qquad\forall z\in\mathbb{R}.
\]
而若$g$的值域为不可数集，则通常从$Z=g(X,Y)$的分布函数入手：
\[
F_{Z}(z) = \mathbb{P}(g(X,Y)\leq z)
=\iint_{g(x,y)\leq z}
f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y.
\]
对于二维情况，区域$\{(x,y) \mid g(x,y)\leq z\}$通常会更加复杂，
一般我们会考虑将其分解为可数个不相交的简单区域，
而后在这些简单区域上求解重积分，最后求和。此外，
也不要忘记检查$Z$是否是连续型随机变量，
并进一步求它的概率密度函数来描述其概率分布。
我们用几个例子对此进行说明。

::: example [独立变量最大值的分布]
设$X,Y$相互独立，我们希望考查$Z = \max\{X,Y\}$的概率分布。
先暂时不假定$X,Y$为连续型随机变量，则$Z$的分布函数为
\[
\begin{aligned}
\mathbb{P}(Z\leq z)
& =\mathbb{P}(\max\{X,Y\}\leq z) \\
& = \mathbb{P}(X\leq z,Y\leq z) \\
& = \mathbb{P}(X\leq z)\cdot\mathbb{P}(Y\leq z)
= F_{X}(z)\cdot F_Y(z),
\end{aligned}
\]
其中第二步是因为$\max\{x,y\}\leq z$当且仅当$x\leq z$且$y\leq z$，
而第三步则用到了独立性。

下面进一步假定$X,Y$均为连续型随机变量，其概率密度函数分别为
$f_{X}$与$f_Y$。则此时$Z$也是连续型随机变量，其概率密度函数$f_Z$
可通过导函数的莱布尼兹律得到：
\[
f_Z(z) = f_X(z) F_Y(z)+F_X(z) f_Y(z).
\]
若$X,Y$还服从同一个分布，记它们的分布函数为$F$，概率密度函数为$f$，
则有
\[
f_Z(z) = 2 F(z) f(z).
\]

利用类似的方法，读者可自行推导$X_1,\ldots,X_n$相互独立时
$\max\{X_1,\ldots,X_n\}$以及$\min\{X_1,\ldots,X_n\}$的分布。
:::

::: example [连续型随机向量的和的分布]
设$(X,Y)$为连续型随机向量，其联合概率密度函数为$f_{X,Y}$，
令$Z=X+Y$。则$Z$的分布函数为
\[
\begin{aligned}
F_Z(z) &=
\mathbb{P}(X+Y\leq z) \\
& =\iint_{x+y\leq z}
f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y
=\int_{-\infty}^{+\infty}
\left(
\int_{-\infty}^{z-x}
f_{X,Y}(x,y)\,\mathrm{d} y
\right)\mathrm{d} x \\
& =
\int_{-\infty}^{+\infty}
\left(\int_{-\infty}^z
f_{X,Y}(x,t-x)\,\mathrm{d} t
\right)\mathrm{d} x
= \int_{-\infty}^z
\left(\int_{-\infty}^{+\infty}
f_{X,Y}(x,t-x)\,\mathrm{d} x
\right)\mathrm{d} t,
\end{aligned}
\]
其中第三步将重积分化为了累次积分，而第四步则对积分
$\int_{-\infty}^{z-x}f_{X,Y}(x,y)\,\mathrm{d} y$进行了换元$t=y+x$。
观察上式最右端即可看出$Z$为连续型随机变量，其概率密度函数为
\[
f_Z(z) = \int_{-\infty}^{+\infty}
f_{X,Y}(x,z-x)\,\mathrm{d} x,\qquad z\in\mathbb{R}.
\]
对上式中的积分做换元$y=z-x$还能得到
\[
f_Z(z) = \int_{-\infty}^{+\infty}
f_{X,Y}(z-y,y)\,\mathrm{d} y,\qquad z\in\mathbb{R}.
\]
若$X,Y$还相互独立，则有
\[
f_Z(z) = \int_{-\infty}^{+\infty}
f_X(x)f_Y(z-x)\,\mathrm{d} x
= \int_{-\infty}^{+\infty}
f_X(z-y)f_Y(y)\,\mathrm{d} y
\qquad z\in\mathbb{R}.
\]
上式也被称为**卷积公式**（convolution formula）。
:::

::: example {@example:sum_independent_exponential}
设$X_1,\ldots,X_n$相互独立且均服从参数为$\lambda$的指数分布。则
\[
\begin{aligned}
f_{X_1+X_2}(z) ={} &
\int_{-\infty}^{+\infty}
f_{X_1}(x)\,f_{X_2}(z-x)\,\mathrm{d} x \\
={} &
\begin{cases}
\displaystyle\int_{0}^{z}
\lambda^2\cdot\mathrm{e}^{-\lambda z}\,\mathrm{d} x
=\lambda^2 z \mathrm{e}^{-\lambda z}, &
\text{若}\ z>0, \\
0, & \text{若}\ z\leq 0.
\end{cases}
\end{aligned}
\]
以及
\[
\begin{aligned}
f_{X_1+X_2+X_3}(z)
={} & \int_{-\infty}^{+\infty}
f_{X_1+X_2}(x)\,f_{X_3}(z-x)\,\mathrm{d} x \\
={} &
\begin{cases}
\displaystyle\int_0^z \lambda^3 x\mathrm{e}^{-\lambda z}\,\mathrm{d} x
=\frac{\lambda^3}{2} z^2\mathrm{e}^{-\lambda z}, & \text{若}\ z>0, \\
0, & \text{若}\ z\leq 0.
\end{cases}
\end{aligned}
\]
重复上述递推过程，不难得到
\[
f_{X_1+\cdots+X_n}(z)
=\begin{cases}
\displaystyle\frac{ \lambda^n }{(n-1)!}z^{n-1}\mathrm{e}^{-\lambda z}, & \text{若}\ z> 0, \\
0, & \text{若}\ z\leq 0.
\end{cases}
\]
一般地，给定正实数$\alpha,\beta$，若随机变量$Z$的概率密度函数为

```math {@eq:defn_gamma_distribution}
f_Z(z)=\begin{cases}
\displaystyle\frac{ \beta^\alpha }{\Gamma(\alpha)}z^{\alpha-1}\mathrm{e}^{-\beta z}, & \text{若}\ z> 0, \\
0, & \text{若}\ z\leq 0,
\end{cases}
```

则称$Z$服从参数为$(\alpha,\beta)$的**Gamma分布**
（Gamma distribution）。
:::

## （${}^\star$）连续型随机向量经过可逆变换后的分布*

本小节中我们考虑这样一个情形：$\boldsymbol{X}=(X,Y)$
为连续型随机向量，其联合概率密度函数为
$f_{X,Y}:\mathbb{R}^2\rightarrow\left[0,+\infty\right[$。
$\mathcal{D}$与$\mathcal{R}$均为平面$\mathbb{R}^2$的开子集，
且$\mathcal{D}$包含$(X,Y)$的值域。映射
$\boldsymbol{g}:\mathcal{D}\rightarrow\mathcal{R}$为双射，
且$\boldsymbol{g}$与其逆映射$\boldsymbol{g}^{-1}$均连续可微。令
\[
(U,V)
=\boldsymbol{g}(X,Y).
\]
我们希望求解随机向量$(U,V)$的联合分布。

由于$\boldsymbol{g}$为双射且$\boldsymbol{g}$与
$\boldsymbol{g}^{-1}$均连续可微，故直观上$(U,V)$应当是一个
连续型随机向量，这里我们直接求解$(U,V)$的联合概率密度函数。
任取区间$I,J\subseteq\mathbb{R}$，并记
\[
B = \left\{(x,y)\in\mathbb{R}^2 \bigm\vert
\boldsymbol{g}(x,y)\in I\times J\right\},
\]
也就是说，$B$当中的点$(x,y)$都是使得$\boldsymbol{g}(x,y)$取值
落在矩形区域$I\times J$中的那些点。
则有
\[
\begin{aligned}
\mathbb{P}((U,V)\in I\times J)
&
= \mathbb{P}\!\left((X,Y)\in B\right)
= \iint_{B} f_{\boldsymbol{X}}(\boldsymbol{x})\,\mathrm{d} x\mathrm{d} y \\
& = \iint_{\,\mathcal{D}}
\mathsf{1}_{B}(x,y)\cdot
f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y \\
& = \iint_{\,\mathcal{R}}
\mathsf{1}_{B}\!\left(\boldsymbol{g}^{-1}(u,v)\right)\cdot
f_{X,Y}\!\left(\boldsymbol{g}^{-1}(u,v)\right)\cdot \left|\det\mathrm{D}\boldsymbol{g}^{-1}(u,v)\right|\,\mathrm{d} u\mathrm{d} v.
\end{aligned}
\]
这里对上式最右端的符号以及最后一个等号做一些说明：$\det$表示取行列式，
$\mathrm{D}\boldsymbol{g}^{-1}(u,v)$表示向量值函数
$\boldsymbol{g}^{-1}$在点$(u,v)$处的雅可比矩阵；
若记$\boldsymbol{g}^{-1}$的两个分量为$h_1,h_2$
（它们均为定义在$\mathcal{R}$上的连续可微函数），则
\[
\det \mathrm{D}\boldsymbol{g}^{-1}(u,v)
=\begin{vmatrix}
\dfrac{\partial h_1(u,v)}{\partial u}
& \dfrac{\partial h_1(u,v)}{\partial v} \\
\dfrac{\partial h_2(u,v)}{\partial u}
& \dfrac{\partial h_2(u,v)}{\partial v}
\end{vmatrix}
;
\]
此外，我们还对上式第二行中的重积分进行了换元
$(x,y)=\boldsymbol{g}^{-1}(u,v)$，并利用了如下换元定理：

::: theorem [重积分换元定理] {@theorem:multiple_integral_change_of_var}
设$\mathcal{R}$和$\mathcal{D}$均为$\mathbb{R}^n$中的开集，
$\boldsymbol{\varphi}$为$\mathcal{R}\rightarrow \mathcal{D}$
的双射，且$\boldsymbol{\varphi}$与$\boldsymbol{\varphi}^{-1}$
均连续可微，则对于$\mathcal{D}$上的任意可积函数$f$，有
\[
\int_{\mathcal{D}} f(\boldsymbol{x})\,\mathrm{d}\boldsymbol{x}
=\int_{\mathcal{R}} f(\boldsymbol{\varphi}(\boldsymbol{y}))
\left|\det\mathrm{D}\boldsymbol{\varphi}(\boldsymbol{y})\right|\mathrm{d}\boldsymbol{y}.
\]
:::

关于上述定理更详细的信息可参考[@chentianquan_vol2]第10.6节，
而若读者对勒贝格积分没有了解，则可参考[@zhangzhusheng_vol2]
第13.5及13.6节给出的上述定理的黎曼积分版本。

我们继续上面的推导：
\[
\begin{aligned}
\mathbb{P}((U,V)\in I\times J)
& =
\iint_{\,\mathcal{R}}
\mathsf{1}_{B}\!\left(\boldsymbol{g}^{-1}(u,v)\right)\cdot
f_{X,Y}\!\left(\boldsymbol{g}^{-1}(u,v)\right)\cdot \left|\det\mathrm{D}\boldsymbol{g}^{-1}(u,v)\right|\mathrm{d} u\mathrm{d} v
\\
& =
\iint_{\,\mathcal{R}}
\mathsf{1}_{I\times J}\!\left(u,v\right)\cdot
f_{X,Y}\!\left(\boldsymbol{g}^{-1}(u,v)\right)\cdot
\left|\det\mathrm{D}\boldsymbol{g}^{-1}(u,v)\right|\mathrm{d} u\mathrm{d} v\\
& = \iint_{I\times J}
f_{U,V}(u,v)\,\mathrm{d} u\mathrm{d} v,
\end{aligned}
\]
其中第二步是因为$\boldsymbol{g}^{-1}(u,v)\in B$
当且仅当$(u,v)\in I\times J$，而最后一步中我们令
\[
f_{U,V}(u,v)
=\begin{cases}
f_{X,Y}\!\left(\boldsymbol{g}^{-1}(u,v)\right)\cdot
\left|\det\mathrm{D}\boldsymbol{g}^{-1}(u,v)\right|, & \text{若}\ (u,v)\in\mathcal{R}, \\
0, & \text{若}\ (u,v)\notin\mathcal{R}.
\end{cases}
\]
由于$I,J$可以是任意的两个区间，由连续型随机向量的定义可知，
$(U,V)$为连续型随机向量，其联合概率密度函数即为$f_{U,V}$。

我们将以上结果总结为如下定理：

::: theorem {@theorem:rand_vec_diffeomorphism_pdf}
设$(X,Y)$为连续型随机向量，其联合概率密度函数为$f_{X,Y}$。
$\mathcal{D}$与$\mathcal{R}$均为平面$\mathbb{R}^2$的开子集，
且$\mathcal{D}$包含$(X,Y)$的值域。
$\boldsymbol{g}:\mathcal{D}\rightarrow\mathcal{R}$为一双射，
且$\boldsymbol{g}$与$\boldsymbol{g}^{-1}$均连续可微。
则$(U,V)=\boldsymbol{g}(X,Y)$为连续型随机向量，
其联合概率密度函数为

```math {@eq:rand_vec_diffeomorphism_pdf}
f_{U,V}(u,v)
=\begin{cases}
f_{X,Y}\!\left(\boldsymbol{g}^{-1}(u,v)\right)\cdot
\left|\det\mathrm{D}\boldsymbol{g}^{-1}(u,v)\right|, & \text{若}\ (u,v)\in\mathcal{R}, \\
0, & \text{若}\ (u,v)\notin\mathcal{R}.
\end{cases}
```

其中$\mathrm{D}\boldsymbol{g}^{-1}(u,v)$表示
$\boldsymbol{g}^{-1}$在$(u,v)$处的雅可比矩阵。
:::

该定理的一个重要特殊情形是$\boldsymbol{g}$为一可逆仿射变换，
也就是说存在可逆实方阵$\mathbf{A}=\left[a_{ij}\right]$
与实向量$\boldsymbol{b}=(b_1,b_2)$使得[^1]
\[
\boldsymbol{g}(\boldsymbol{x}) = \mathbf{A}\boldsymbol{x} + \boldsymbol{b}
=\begin{bmatrix}
a_{11}x_1 + a_{12}x_2 + b_1 \\
a_{21}x_1 + a_{22}x_2 + b_2
\end{bmatrix},
\qquad\forall\boldsymbol{x}=(x_1,x_2)\in\mathbb{R}^2.
\]
此时有
\[
\operatorname{det}\mathrm{D}\boldsymbol{g}^{-1}(\boldsymbol{y})
=\operatorname{det}\!
\left(\mathbf{A}^{-1}\right)
=\frac{1}{\operatorname{det}\mathbf{A}},\qquad\forall\boldsymbol{y}\in\mathbb{R}^2,
\]
故我们有如下推论：

::: corollary {@corollary:rand_vec_affine_transform_pdf}
设$\boldsymbol{X}$为二维连续型随机向量，
其联合概率密度函数为$f_{\boldsymbol{X}}$，
$\mathbf{A}\in\mathbb{R}^{2\times 2}$为可逆实方阵，
$\boldsymbol{b}\in\mathbb{R}^2$为实向量。
则$\boldsymbol{Y}=\mathbf{A}\boldsymbol{X}+\boldsymbol{b}$
为连续型随机向量，其联合概率密度函数为

```math {@eq:rand_vec_affine_transform_pdf}
f_{\boldsymbol{Y}}(\boldsymbol{y})
=
f_{\boldsymbol{X}}\!\left(\mathbf{A}^{-1}(\boldsymbol{y}-\boldsymbol{b})\right)
\cdot \frac{1}{|\det\mathbf{A}|},
\qquad \forall \boldsymbol{y}\in\mathbb{R}^2.
```

:::

@theorem:rand_vec_diffeomorphism_pdf 与
@corollary:rand_vec_affine_transform_pdf 不难推广到
一般的$n$维连续型随机向量的情形。

[^1]: 本讲义中形如$(x_1,\ldots,x_n)$的多元组均看成列向量。
