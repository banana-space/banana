---
title: 波前集的定义与基本性质
---

我们知道一个分布的光滑性是一个局部的性质。
给定一个分布$u\in \mathcal{D}'(\Omega)$，
$u$在$x_0\in \Omega$处附近是光滑当且仅当对任意的支集在$x_0$附近的光滑函数$f$，
我们有$f\cdot u \in C^\infty_0(\mathbb{R}^n)$。
进一步，$u$在$x_0\in \Omega$处附近是光滑当且仅当对某一个任意的支集在$x_0$附近的光滑函数$f$，
$f(x_0)\neq 0$，我们有$f\cdot u \in C^\infty_0(\mathbb{R}^n)$。
从Fourier分析的角度来看，函数的光滑性等价于它在频率空间上的衰减。
实际上，根据Sobolev嵌入定理（或者直接证明），在我们刚刚谈论的场合下，如下两个论述显然是等价的：

- 1\) $f\cdot u \in C^\infty_0(\mathbb{R}^n)$；

- 2\) 对任意的正整数$N\geqslant 1$，存在常数$C_N$，使得对任意的$\xi\in \mathbb{R}^n$，我们有
  \[
  \left|\widehat{fu}(\xi)\right|\leqslant \frac{C_N}{\left(1+|\xi|^2\right)^\frac{N}{2}}.
  \]

我们现在考察一个特殊的例子：$u=\mathbf{1}_{x_{n}\geqslant 0}$。
这是半空间$\mathbb{H}^n$上的示性函数。它在$x_n>0$或者$x_n<0$上显然是光滑的。
在$x_n=0$这个集合上，尽管$u$不光滑，我们发现沿着$x_1,\cdots,x_{n-1}$的方向求导数总是可以的，
唯一不光滑（连续）的方向实际上是变量$x_n$造成的。
我们下面要引入一个概念，它不仅能说明函数在一个点处不光滑，而且能说明这个函数沿着哪些方向不光滑。

我们通常用所谓的锥型集来标记方向的集合：

::: definition
$\Gamma \subset \mathbb{R}^n_{\xi}$是频率空间中的一个子集，如果下面的两个性质成立：

- 1\) 对任意的$\lambda>0$，对任意的$\xi\in \Gamma$，我们有$\lambda \cdot \xi \in \Gamma$；

- 2\) $\Gamma\cap \mathbf{S}^{n-1}_{\xi}$是$\mathbf{S}^{n-1}_{\xi}$上的开集（闭集）。
  这里，$\mathbf{S}^{n-1}_{\xi}$是频率空间$\mathbb{R}^n_\xi$中的单位球面。

那么，我们就称$\Gamma$是一个**锥型开集（闭集）**。
:::

另外，为了方便起见，我们引入如下的记号：
\[
\left(T^*\Omega\right)^\times =\big\{(x,\xi)\in \Omega \times\mathbb{R}^n\big|\xi\neq 0\big\}.
\]
我们现在引入波前集的概念，目的是说明分布沿着哪些方向不光滑：

::: definition
$\Omega\subset \mathbb{R}^n$是开集，
$u\in \mathcal{D}'(\Omega)$是$\Omega$上的分布。
给定$(x_0,\xi_0)\in \left(T^*\Omega\right)^\times$，
假设存在开集$U\subset \Omega$，
锥型开集$\Gamma\subset \mathbb{R}^n_\xi$以及$f\in C_0^\infty(\Omega)$，使得

- 1\) $x_0\in U$，${\rm supp}(f)\subset U$并且$f(x_0)\neq 0$；

- 2\) $\xi_0\in \Gamma$；

- 3\) 对任意的正整数$N\geqslant 1$，存在常数$C_N$，使得对任意的$\xi\in \Gamma$，我们有
  \[
  \left|\widehat{fu}(\xi)\right|\leqslant \frac{C_N}{\left(1+|\xi|^2\right)^\frac{N}{2}}.
  \]

![](L2603.svg)

我们就称$(x_0,\xi_0)$**不**落在$u$的**波前集**里。
我们用$WF(u)$表示不满足上述要求的$(x_0,\xi_0)\in \left(T^*\Omega\right)^\times$的点的集合。
按照定义，我们知道
\[
WF(u)\subset \left(T^*\Omega\right)^\times.
\]
:::

::: lemma {@lem:156}
给定锥型开集$\Gamma\subset \mathbb{R}^n_\xi$，$s_0>0$和$u\in H^{-s_0}(\mathbb{R}^n)$。
如果对任意的锥型闭集$\Gamma'\subset \Gamma$，对任意的正整数$N\geqslant 1$，存在常数$C_N$，
使得对任意的$\xi'\in \Gamma'$，我们有
\[
\left|\widehat{u}(\xi')\right|\leqslant \frac{C'_N}{\left(1+|\xi'|^2\right)^\frac{N}{2}}.
\]
那么，对任意的$f\in C_0^\infty(\Omega)$（$\approx$物理空间的任意截断函数），
对任意的锥型闭集$\Gamma''\subset \Gamma$，对任意的正整数$N\geqslant 1$，存在常数$C''_N$，
使得对任意的$\xi''\in \Gamma''$，我们有
\[
\left|\widehat{fu}(\xi'')\right|\leqslant \frac{C''_N}{\left(1+|\xi''|^2\right)^\frac{N}{2}}.
\]
:::

::: proof
选定$f\in C_0^\infty(\Omega)$和锥型闭集$\Gamma''\subset \Gamma$，
根据$\Gamma''$在$\mathbf{S}^{n-1}$上的闭性，存在锥型闭集$\Gamma'\subset \Gamma$，
使得$\Gamma''\subset \mathring{\Gamma'}$（落在$\Gamma'$的内部）。
我们计算$\widehat{fu}(\xi'')$：
\[
\begin{aligned}
\widehat{fu}(\xi'')&=\frac{1}{(2\pi)^n}\int_{\mathbb{R}^n}\widehat{f}(\xi''-\eta)\widehat{u}(\eta)d\eta\\
&=\underbrace{\frac{1}{(2\pi)^n}\int_{\Gamma'}\widehat{f}(\xi''-\eta)\widehat{u}(\eta)d\eta}_{I}+\underbrace{\frac{1}{(2\pi)^n}\int_{\mathbb{R}^n-\Gamma'}\widehat{f}(\xi''-\eta)\widehat{u}(\eta)d\eta}_{II}.
\end{aligned}
\]
对于$I$，我们用引理的条件，对任意的正整数$N\geqslant 1$，存在常数$C_N(\Gamma')$，
使得对任意的$\xi'\in \Gamma'$，我们有
\[
\left|\widehat{u}(\xi')\right|\leqslant \frac{C_N(\Gamma')}{\left(1+|\xi'|^2\right)^\frac{N}{2}}.
\]
所以，
\[
\begin{aligned}
(1+|\xi''|)^NI& \leqslant \frac{1}{(2\pi)^n}\int_{\Gamma'}(1+|\xi''-\eta|+|\eta|)^N\left|\widehat{f}(\xi''-\eta)\right|\left|\widehat{u}(\eta)\right|d\eta\\
& \leqslant \frac{1}{(2\pi)^n}\int_{\Gamma'}(1+|\xi''-\eta|)^N\left|\widehat{f}(\xi''-\eta)\right|(1+|\eta|)^N\left|\widehat{u}(\eta)\right|d\eta\\
& \leqslant \frac{1}{(2\pi)^n}\int_{\Gamma'}(1+|\xi''-\eta|)^N\left|\widehat{f}(\xi''-\eta)\right|C_N(\Gamma')d\eta\\
&= \frac{C_N(\Gamma')}{(2\pi)^n}\int_{\Gamma'}(1+|\eta|)^N\left|\widehat{f}(\eta)\right|d\eta.
\end{aligned}
\]
由于$f\in C_0^\infty$，所以上面的积分是有限的，从而，
\[
\begin{aligned}
(1+|\xi''|)^N I&\leqslant C_N.
\end{aligned}
\]
在$II$这一项中，$\eta$落在$\Gamma'$之外。

![](L2604.svg)

我们注意到，此时，存在$\delta>0$，使得
\[
|\xi''| \leqslant \frac{1}{\delta}|\xi''-\eta|.
\]
这是因为从$\xi''$到$\eta$的距离不会小于$\xi''$到$\partial \Gamma'$的距离，
而后面这个距离与$|\xi''|$是成正比的（投影到$\partial \Gamma'$上），这表明
\[
|\xi''-\eta|\geqslant |\xi''|\delta.
\]
类似地，我们还有
\[
|\xi''-\eta|\geqslant |\eta|\delta.
\]

据此，我们有
\[
\begin{aligned}
(1+|\xi''|)^NII&\leqslant \frac{1}{(2\pi)^n}\int_{\mathbb{R}^n-\Gamma'}(1+|\xi''|)^N|\widehat{f}(\xi''-\eta)||\widehat{u}(\eta)|d\eta\\
&\leqslant C_\delta\int_{\mathbb{R}^n-\Gamma'}(1+|\xi''-\eta|)^N|\widehat{f}(\xi''-\eta)||\widehat{u}(\eta)|d\eta\\
&\leqslant C'_\delta\int_{\mathbb{R}^n-\Gamma'}(1+|\xi''-\eta|)^{-\frac{s_0}{2}-n}|\widehat{u}(\eta)|d\eta.
\end{aligned}
\]
最后一步是因为
\[
(1+|\xi''-\eta|)^N|\widehat{f}(\xi''-\eta)|\leqslant C'' (1+|\xi''-\eta|)^{-\frac{s_0}{2}-n}.
\]
从而，
\[
\begin{aligned}
(1+|\xi''|)^NII &\leqslant C'_\delta\int_{\mathbb{R}^n-\Gamma'}(1+|\eta|)^{-\frac{s_0}{2}}|\widehat{u}(\eta)| \times (1+|\eta|)^{-n}d\eta\\
&\leqslant C'_\delta \left(\int_{\mathbb{R}^n-\Gamma'}(1+|\eta|)^{-s_0}|\widehat{u}(\eta)|^2 d\eta \right)^{\frac{1}{2}}\times \left(\int_{\mathbb{R}^n-\Gamma'}(1+|\eta|)^{-2n}d\eta\right)^{\frac{1}{2}}\\
&=C'_\delta \|u\|_{H^{-s_0}}.
\end{aligned}
\]
综合上面两个不等式，我们就得到了
\[
I+II\leqslant \frac{C_N}{(1+|\xi|)^N}.
\]
命题得到证明。
:::

根据这个引理，我们有如下重要的推论：

::: corollary
给定$\Omega\subset \mathbb{R}^n$，$u\in \mathcal{D}'(\Omega)$。
对任意的$\psi(x) \in C^\infty(\Omega)$，我们有
\[
WF(\psi \cdot u)\subset WF(u).
\]
:::

::: proof
我们只要证明如果$(x_0,\xi_0)\notin WF(u)$，那么$(x_0,\xi_0)\notin WF(\psi\cdot u)$即可。
根据定义，存在锥型开集$\xi_0\in \Gamma\subset \mathbb{R}^n_\xi$，$f\in C_0^\infty(\Omega)$，
$f(x_0)\neq 0$并且对任意的正整数$N\geqslant 1$，存在常数$C_N$，使得对任意的$\xi\in \Gamma$，有
\[
\left|\widehat{fu}(\xi)\right|\leqslant \frac{C_N}{\left(1+|\xi|\right)^N}.
\]
我们对$(u,f\psi)=(fu,\psi)$用上面的引理：
存在一个锥型开集$\Gamma''\subset \Gamma$包含$\xi_0$（这里用到了引理中$\Gamma''$的任意性）并且
$\mathring{\Gamma''}\neq \emptyset$，使得对任意的正整数$N\geqslant 1$，存在常数$C''_N$，
使得对任意的$\xi''\in \Gamma''$，我们有
\[
\left|\widehat{f (\psi \cdot u)}(\xi'')\right|=\left|\widehat{\psi \cdot fu}(\xi'')\right|\leqslant \frac{C''_N}{\left(1+|\xi''|^2\right)^\frac{N}{2}}.
\]
这表明$(x_0,\xi_0)\notin WF(\psi\cdot u)$。
:::

作为这个引理的另一个推论，我们给出波前集的等价定义：

::: theorem
$\Omega\subset \mathbb{R}^n$是开集，$u\in \mathcal{D}'(\Omega)$是$\Omega$上的分布。
给定$(x_0,\xi_0)\in \left(T^*\Omega\right)^\times$。那么，如下的论断是等价的：

- 1\) $(x_0,\xi_0)\notin WF(u)$；

- 2\) 存在包含$x_0$的开集$U\subset \Omega$，包含$\xi_0$的锥型开集$\Gamma\subset \mathbb{R}^n_\xi$，
  使得对任意的$f\in C_0^\infty(U)$，对任意的正整数$N\geqslant 1$，存在常数$C_{N,f}$，
  使得对任意的$\xi\in \Gamma$，我们有
  \[
  \left|\widehat{fu}(\xi)\right|\leqslant \frac{C_{N,f}}{\left(1+|\xi|\right)^N}.
  \]

:::

::: proof
2)$\Rightarrow$1)是明显的：我们只要任意选取一个$f\in C_0^\infty(U)$并且$f(x_0)\neq 0$即可。
反之，我们假设1)成立来证明2)：根据定义，
$(x_0,\xi_0)\notin WF(u)$意味着存在锥型开集$\xi_0\in \Gamma\subset \mathbb{R}^n_\xi$，
$F\in C_0^\infty(\Omega)$，$F(x_0)\neq 0$并且对任意的正整数$N\geqslant 1$，存在常数$C_N$，
使得对任意的$\xi\in \Gamma$，有
\[
\left|\widehat{Fu}(\xi)\right|\leqslant \frac{C_N}{\left(1+|\xi|\right)^N}.
\]
由于$F(x_0)\neq 0$，所以存在开集$U$，$x_0\in U$并且对任意的$x\in U$，$|F(x)|>\delta>0$。
我们选定这个开集$U$。对任意的$f\in C_0^\infty(U)$，我们考虑：
\[
fu = \frac{f}{F} Fu.
\]
我们对$(u,f)=\left(Fu, \dfrac{f}{F}\right)$来运用引理：
存在一个锥型开集$\Gamma''\subset \Gamma$包含$\xi_0$（这里用到了引理中$\Gamma''$的任意性）并且
$\mathring{\Gamma''}\neq \emptyset$，使得对任意的正整数$N\geqslant 1$，存在常数$C''_N$，
使得对任意的$\xi''\in \Gamma''$，我们有
\[
\left|\widehat{f u}(\xi'')\right|=\left|\widehat{ \frac{f}{F} Fu}(\xi'')\right|\leqslant \frac{C''_N}{\left(1+|\xi''|\right)^N}.
\]
此时，在2)中我们选取的锥型开集是$\Gamma''$。命题得证。
:::

::: corollary [从微局部到局部：光滑性]
给定$\Omega\subset \mathbb{R}^n$，$u\in \mathcal{D}'(\Omega)$。
假设$x_0\in \Omega$使得对任意的$\xi\in \mathbb{R}^n_\xi$，
$(x_0,\xi)\notin WF(u)$（即$u$在$(x_0,\xi)$处是在微局部意义下光滑的）。
那么，存在$x_0$在$\Omega$中的开邻域$U$，使得$u\big|_{U}$是光滑的。
:::

::: proof
对任意的$\xi \in \mathbf{S}^{n-1}$（单位长的向量），$(x_0,\xi)\notin WF(u)$，从而，
存在锥型开集$ \Gamma\subset \mathbb{R}^n_\xi$和开集$U$，其中$x_0\in U$，$\xi\in \Gamma$，
对任意的$f\in C_0^\infty(U)$，对任意的正整数$N\geqslant 1$，存在常数$C_{N,f}$，
使得对任意的$\xi\in \Gamma$，有
\[
\left|\widehat{fu}(\xi)\right|\leqslant \frac{C_{N,f}}{\left(1+|\xi|\right)^N}.
\]
当$\xi$取遍整个$\mathbf{S}^{n-1}$时，它们所对应的上述的$\Gamma$是$\mathbf{S}^{n-1}$的一个开覆盖，
所以，我们可以选出有限个$\xi_1,\cdots,\xi_m\in \mathbf{S}^{n-1}$，使得对每个$j=1,\cdots,m$，
存在锥型开集$ \Gamma_j\subset \mathbb{R}^n_\xi$和开集$U_j$，其中$x_0\in U$，$\xi_j\in \Gamma$，
对任意的$f\in C_0^\infty(U_j)$，对任意的正整数$N\geqslant 1$，存在常数$C_{j,N,f}$，
使得对任意的$\xi\in \Gamma$，有
\[
\left|\widehat{fu}(\xi)\right|\leqslant \frac{C_{j,N,f}}{\left(1+|\xi|\right)^N}
\]
并且
\[
\bigcup_{j=1}^m \Gamma_j \supset \mathbf{S}^{n-1} \ \ \Rightarrow \ \ \bigcup_{j=1}^m \Gamma_j \supset \mathbb{R}_{\xi}^{n}-\{0\}.
\]
此时，我们令$U=\displaystyle \bigcap_{j\leqslant m} U_j$，这也是包含$x_0$的开集。
我们任意选取$f\in C_0^\infty(U)\subset C^\infty_0(U_j)$，其中$f(x_0)\neq 0$。
那么，对任意的$\xi\in \mathbb{R}^n$，存在$j$，使得$\xi\in \Gamma_j$，此时，
如果令$C_N=\displaystyle\max_{j\leqslant m}C_{j,N,f}$，那么，对任意的$N\geqslant 1$，我们就有
\[
\left|\widehat{fu}(\xi)\right|\leqslant \frac{C_{j,N,f}}{\left(1+|\xi|\right)^N}\leqslant  \frac{C_{N}}{\left(1+|\xi|\right)^N}.
\]
这表明$fu$是光滑函数（因为它的Fourier变换是衰减得比任意的多项式都要快）。
:::

我们给出这个推论的一个应用。
我们先回忆微分算子的定义：给定区域$\Omega$上的一个$m$-次微分算子（变系数），即
\[
P=\sum_{|\alpha|\leqslant m}p_\alpha(x)\partial^\alpha,
\]
其中，对每个$\alpha$，
$p_\alpha \in C^\infty(\Omega)$并且至少有一个$\alpha$使得$|\alpha|=m$并且$p_\alpha\neq 0$（不恒为
$0$）。我们定义$P$的**主象征**为
\[
p_m(x,\xi)=\sum_{|\alpha|=m}p_\alpha(x)(-i\xi)^\alpha.
\]
那么，$p_m(x,\xi)$是$T^*\Omega=\Omega \times \mathbb{R}^n_\xi$上的光滑函数。我们把$p_m$的零点集记作
\[
Z(p_m)=\big\{(x,\xi)\in T^*\Omega\big|p_m(x,\xi)=0\big\}.
\]
我们先不加证明的接受如下的定理（下节课给出完整证明）：

::: theorem [微局部椭圆正则性]
给定区域$\Omega$上的一个$m$-次微分算子
\[
P=\sum_{|\alpha|\leqslant m}p_\alpha(x)\partial^\alpha
\]
假设$u\in \mathcal{D}'(\Omega)$满足微分方程
\[
Pu \stackrel{\mathcal{D'}}{=}f,
\]
其中$f\in \mathcal{D}'(\Omega)$。那么，我们有
\[
WF(u)\subset Z(p_m)\cup WF(f).
\]
:::

我们现在证明$-\triangle$算子的正则性：假设分布$u\in \mathcal{D}'(\Omega)$，
满足$-\triangle u\in C^\infty(\Omega)$，我们现在来证明$u\in C^\infty(\Omega)$。实际上，
\[
p_2(-\triangle)=|\xi|^2 \ \ \Rightarrow \ \ Z(p_2)=\{0\}.
\]
由于$-\triangle u$光滑，所以$WF(-\triangle u)=\emptyset$。利用上述微局部正则性定理，我们就有
\[
WF(u)\subset \{0\}\cup \emptyset =\{0\}.
\]
然而，$WF(u)\subset (T^*\Omega)^\times$，所以，$WF(u)=\emptyset$。
我们刚刚证明的推论表明$u$是光滑的。
