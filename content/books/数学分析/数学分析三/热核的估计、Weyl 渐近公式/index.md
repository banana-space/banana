---
title: 热核的估计、Weyl 渐近公式
---

## 热核的比较定理

我们现在讲热核与全空间$\mathbb{R}^n$上的热核进行比较。
在$\mathbb{R}^n$上，我们已经构造了（物理空间上描述的）热核：
\[
E(t,x)=\frac{H(t)}{(4\pi t)^{\frac{n}{2}}}e^{-\frac{|x|^2}{4t}}.
\]
我们记
\[
E(t,x,y)=\frac{H(t)}{(4\pi t)^{\frac{n}{2}}}e^{-\frac{|x-y|^2}{4t}}.
\]
我们要比较$p(t,x,y)$和$E(t,x,y)$。类似地，我们也要将$E(t,x,y)$与$u_0(x)$进行配对，所以，我们定义
\[
v(t,x)=\int_{\Omega}E(t,x,y)u_0(y)dy=\left(E(t,\cdot)*u_0\right)(x).
\]
此时，根据Lebesgue控制收敛定理，当$t>0$时，我们就有
\[
\begin{aligned}
\left(\partial_t-\triangle_x\right)v(t,x)=\int_{\Omega}\left(\partial_t-\triangle_x\right)E(t,x-y)u_0(y)dy=0.
\end{aligned}
\]
另外，
我们也很容易证明（利用$\displaystyle \int_{\mathbb{R}^n} E(t,x)dx=1$）$v(t,x)$在
$[0,\infty)\times\overline{\Omega}$上连续并且
\[
\lim_{t\rightarrow 0^+}\|v(t,x)-u_0(x)\|_{L^\infty}=0.
\]

我们进一步要求$u_0(x)\geqslant 0$。

那么，根据$v$的表达式，我们自然有
\[
v(t,x)\geqslant 0, \ \ \text{对任意的}~(t,x)\in [0,\infty)\times\overline{\Omega}.
\]

此时，$u(t,x)$也解热方程并且$u$与$v$在$t=0$处的初始值是一样的。
这两个函数的不同之处可能在于对任意的$t>0$，$u(t,\cdot)\big|_{\partial \Omega}=0$。
特别的，如果我们定义
\[
U(t,x)=v(t,x)-u(t,x),
\]
那么，
$C^\infty\big((0,\infty)\times\Omega\big)\cap C^0 \big([0,\infty)\times\overline{\Omega}\big)$，
$U(t,x)$在$(0,\infty)\times \Omega$中解热方程并且
$U(t,x)\big|_{ \partial \big([0,\infty)\times \Omega\big)}\geqslant 0$。
所以，对任意的$(t,x)\in(0,\infty)\times \Omega$，我们都有$U(t,x)\geqslant 0$，从而，
\[
u_0 \in C_0^\infty(\Omega), \ \ u_0\geqslant 0 \ \ \Rightarrow \ \ \int_{\Omega}\big(E(t,x,y)-p(t,x,y)\big)u_0(y)dy\geqslant 0.
\]
这表明，对任意的$(t,x,y)\in(0,\infty)\times \Omega\times \Omega$，我们有
\[
0\leqslant p(t,x,y)\leqslant E(t,x,y).
\]

::: exercise*
假设$\Omega_1\subset \Omega_2$是两个光滑的有界带边光滑区域，
我们用$p_1(t,x,y)$和$p_2(t,x,y)$分别代表它们的热核。
那么，对于任意的$(t,x,y)\in(0,\infty)\times \Omega_1\times \Omega_2$，我们有
\[
0\leqslant p_1(t,x,y)\leqslant p_2(t,x,y).
\]
:::

我们下面想对$E(t,x,y)-p(t,x,y)$的上界进行控制，这样子，我们就可以对$p(t,x,y)$有较为精确的控制。
为此，我们需要对$U(t,x)$的上界进行控制。

令$d_0=d\left({\rm supp}(u_0), \partial \Omega\right)$，
这是$u_0$的支集与$\partial \Omega$之间的距离：

![](L2501.svg)

我们需要计算$U(t,x)$在边界上$\partial \Omega$的最大可能值。
对任意的$t>0$和$x\in \partial \Omega$，我们有
\[
\begin{aligned}
U(t,x)&=v(t,x)=\frac{1}{(4\pi t)^{\frac{n}{2}}}\int_\Omega e^{-\frac{|x-y|^2}{4t}}u_0(y)dy\\
&\leqslant \frac{1}{(4\pi t)^{\frac{n}{2}}}\int_\Omega e^{-\frac{d_0^2}{4t}}u_0(y)dy.
\end{aligned}
\]
即
\[
\begin{aligned}
U(t,x)&\leqslant \frac{e^{-\frac{d_0^2}{4t}}}{(4\pi t)^{\frac{n}{2}}}\int_\Omega u_0(y)dy.
\end{aligned}
\]
我们考虑能使得上式右边值尽可能大的$t$[^1]。
通过对$t$求导数，我们当$t=t_0=\dfrac{d_0^2}{2n}$我们能取到最大值，并且在$t<t_0$时，
上式右边对$t$是递增的，在$t>t_0$时，上式右边对$t$是递减的。所以，
\[
U(t,x)\leqslant \begin{cases}\frac{e^{-\frac{d_0^2}{4t}}}{(4\pi t)^{\frac{n}{2}}}\int_\Omega u_0(y)dy, \ \ & \text{若}~t\leqslant \dfrac{d_0^2}{2n};\\
\frac{e^{-\frac{d_0^2}{4t_0}}}{(4\pi t_0)^{\frac{n}{2}}}\int_\Omega u_0(y)dy, \ \ & \text{若}~t\geqslant \dfrac{d_0^2}{2n}.
\end{cases}
\]
从而，
\[
u_0 \in C_0^\infty(\Omega), \  u_0\geqslant 0  \ \Rightarrow \  \int_{\Omega}\big(E(t,x,y)-p(t,x,y)\big)u_0(y)dy\leqslant \begin{cases}\frac{e^{-\frac{d_0^2}{4t}}}{(4\pi t)^{\frac{n}{2}}}\int_\Omega u_0(y)dy, \ \ & \text{若}~t\leqslant \dfrac{d_0^2}{2n};\\
\frac{e^{-\frac{d_0^2}{4t_0}}}{(4\pi t_0)^{\frac{n}{2}}}\int_\Omega u_0(y)dy, \ \ & \text{若}~t\geqslant \dfrac{d_0^2}{2n}.
\end{cases}
\]
对任意的$x_0,y_0\in \Omega$固定，我们选取$\chi(x)$使得$\chi\geqslant 0$，
$\|\chi\|_{L^1}=1$并且${\rm supp}(\chi)$落在原点处半径为$1$的球中。
令$u_0(y)=\chi_\varepsilon\left({y-y_0}\right)$。当$\varepsilon_0\rightarrow 0$时，我们显然有
\[
d\big({\rm supp}(u_0), \partial \Omega\big)=d\left(y_0, \partial \Omega\right)+O(\varepsilon).
\]
我们也有
\[
\lim_{\varepsilon\rightarrow 0}\big(E(t,x_0,y)-p(t,x_0,y)\big)\chi_\varepsilon\left({y-y_0}\right)dy=E(t,x_0,y_0)-p(t,x_0,y_0).
\]
所以，我们就有（把$(x_0,y_0)$换成$(x,y)$），我们就证明了如下的结论

::: theorem
假设$\Omega\subset \mathbb{R}^n$是光滑的有界带边区域。
那么，对任意的$(t,x,y)\in (0,+\infty)\times \Omega \times \Omega$，我们有如下的热核比较公式：
\[
0\leqslant  E(t,x,y)-p(t,x,y) \leqslant \begin{cases}\frac{1}{(4\pi t)^{\frac{n}{2}}}e^{-\frac{d(y,\partial \Omega)^2}{4t}}, \ \ & \text{若}~t\leqslant \dfrac{d(y,\partial \Omega)^2}{2n};\\
\frac{1}{(4\pi t_0(y))^{\frac{n}{2}}}e^{-\frac{d(y,\partial \Omega)^2}{4t_0(y)}}, \ \ & \text{若}~t\geqslant \dfrac{d(y,\partial \Omega)^2}{2n},
\end{cases}
\]
其中，$t_0(y)=\dfrac{d(y,\partial \Omega)^2}{2n}$。

特别的，当我们把$p(t,x,y)$限制到对角线$\Delta=\{(x,x)|x\in \Omega\times \Omega\}$上，我们有
\[
0\leqslant  (4\pi t)^{-\frac{n}{2}}-p(t,x,x) \leqslant \frac{1}{(4\pi t)^{\frac{n}{2}}}e^{-\frac{d(x,\partial \Omega)^2}{4t}}, \ \  \text{若}~t\leqslant \dfrac{d(x,\partial \Omega)^2}{2n}.
\]
:::

我们将证明，如果对$x\in \Omega$积分，当$t\rightarrow 0^+$时，
\[
\int_{\Omega}\frac{1}{(4\pi t)^{\frac{n}{2}}}e^{-\frac{d(x,\partial \Omega)^2}{4t}}dx = O(t^{-\frac{n}{2}+\frac{1}{2}}),
\]
然而，
\[
\int_\Omega (4\pi t)^{-\frac{n}{2}}dx= (4\pi t)^{-\frac{n}{2}}|\Omega|
\]
并且
\[
\begin{aligned}
\int_\Omega p(t,x,x)dx&=\sum_{k=1}^\infty\int_\Omega e^{-\lambda_k t} |\varphi_k(x)|^2dx\\
&=\sum_{k=1}^\infty e^{-\lambda_k t}.
\end{aligned}
\]
所以，我们就给出了
\[
\sum_{k=1}^\infty e^{-\lambda_k t}= (4\pi t)^{-\frac{n}{2}}\left(|\Omega|+O(t^{\frac{1}{2}})\right), \ \ t\rightarrow 0^+.
\]
利用这个渐近公式，我们就可以证明Weyl关于特征值的渐近公式。

现在来进行估计，假定$t$是给定的，我们令$d_0=\sqrt{2nt}$。

我们把$\Omega$分成两个区域：

![](L2601.svg)

\[
\Omega=\underbrace{\big\{x\in \Omega\big| d(x,\partial \Omega)\geqslant d_0\big\}}_{\Omega_1}\cup \underbrace{\big\{x\in \Omega\big| d(x,\partial \Omega)<d_0\big\}}_{\Omega_2}.
\]
那么，我们把积分也分成两个部分
\[
\int_\Omega  E(t,x,x)-p(t,x,x)  dx =\underbrace{\int_{\Omega_1}  E(t,x,x)-p(t,x,x)  dx}_{I_1}+\underbrace{\int_{\Omega_2}  E(t,x,x)-p(t,x,x)  dx}_{I_2}.
\]

我们首先估计$I_1$，此时，我们用热核比较估计的第一种情形，从而，
\[
E(t,x,x)-p(t,x,x) \leqslant  \frac{1}{(4\pi t)^{\frac{n}{2}}}  e^{-\frac{d(x,\partial \Omega)^2}{4t}} .
\]
此时，利用Newton–Leibniz公式，我们有
\[
\begin{aligned}
I_1&\leqslant  \frac{1}{(4\pi t)^{\frac{n}{2}}}  \int_{\Omega_1} e^{-\frac{d(x,\partial \Omega)^2}{4t}} dx\\
&=-\frac{1}{(4\pi t)^{\frac{n}{2}}}  \int_{\Omega_1} \left(\int_{d(x,\partial \Omega)}^\infty \frac{d}{d\tau}\big(e^{-\frac{\tau^2}{4t}}\big) d\tau\right)dx\\
&=\frac{1}{(4\pi t)^{\frac{n}{2}}} \frac{1}{2t}\int_{\Omega_1} \int_{d(x,\partial \Omega)}^\infty e^{-\frac{\tau^2}{4t}} \tau d\tau dx.
\end{aligned}
\]
根据Fubini公式以及$\Omega_1$的定义（$d(x,\partial \Omega)\geqslant d_0 $），我们有
\[
\begin{aligned}
I_1&\leqslant \frac{1}{(4\pi t)^{\frac{n}{2}}} \frac{1}{2t}\int_{\Omega_1} \int_{d(x,\partial \Omega)}^\infty e^{-\frac{\tau^2}{4t}} \tau d\tau dx\\
&= \frac{1}{(4\pi t)^{\frac{n}{2}}} \frac{1}{2t}\int_{\Omega_1} \int_{0}^\infty  \mathbf{1}_{\tau\geqslant d(x,\partial \Omega)}(\tau, x)e^{-\frac{\tau^2}{4t}} \tau d\tau dx\\
&= \frac{1}{(4\pi t)^{\frac{n}{2}}} \frac{1}{2t}  \int_{0}^\infty  e^{-\frac{\tau^2}{4t}} \tau S(\tau)d\tau.
\end{aligned}
\]
这里，
\[
S(\tau) =\big|\{x\in \Omega | d(x,\partial\Omega)\leqslant \tau\}\big|.
\]

::: lemma {@lemma:measure-of-points-close-to-boundary}
假设$\Omega$是光滑的有界带边区域，那么，存在只依赖于$\Omega$的常数$C$，使得
\[
S(\tau) \leqslant C\tau.
\]
:::

我们把引理的证明留到后面来处理。利用这个引理，我们就有
\[
\begin{aligned}
I_1&\leqslant \frac{C}{(4\pi t)^{\frac{n}{2}}} \frac{1}{2t} \int_{0}^\infty  e^{-\frac{\tau^2}{4t}}\tau^2 d\tau\\
&\leqslant \frac{C}{(4\pi t)^{\frac{n}{2}}} \frac{\sqrt{t}}{2}\underbrace{\int_{0}^\infty  e^{-\frac{\tau^2}{4}}\tau^2 d\tau}_{\text{常数}}.
\end{aligned}
\]
所以，存在常数$C_1$，使得
\[
\begin{aligned}
I_1&\leqslant C_1 t^{-\frac{n}{2}}t^{\frac{1}{2}}.
\end{aligned}
\]

现在来处理$I_2$，也就是在区域$\Omega_2$中的积分。此时，我们用热核比较估计的第二种情形，从而，
\[
E(t,x,x)-p(t,x,x) \leqslant  \frac{1}{(4\pi t_0)^{\frac{n}{2}}}  e^{-\frac{d(x,\partial \Omega)^2}{4t_0}} \leqslant  \frac{1}{(4\pi t_0)^{\frac{n}{2}}}.
\]
所以，
\[
\begin{aligned}
I_2&\leqslant \int_{\Omega_2}  \frac{1}{(4\pi t_0)^{\frac{n}{2}}} dx= \frac{1}{(4\pi t_0)^{\frac{n}{2}}}S(\sqrt{2nt})\\
&\leqslant \frac{1}{(4\pi t_0)^{\frac{n}{2}}} C\sqrt{2nt}=C_2 t^{-\frac{n}{2}}t^{\frac{1}{2}}.
\end{aligned}
\]
综合$I_1$和$I_2$的估计，我们就证明了存在常数$C>0$，使得
\[
\int_{\Omega}E(t,x,x)-p(t,x,x)\leqslant C t^{-\frac{n}{2}}t^{\frac{1}{2}}.
\]

我们现在来证明 @lemma:measure-of-points-close-to-boundary。为此我们先证明如下的引理：

::: lemma
假设$\Omega\subset \mathbb{R}^n$是光滑的有界带边区域，我们令
\[
\Omega_{\alpha}=\big\{x\in \Omega\big| d(x,\partial \Omega)<\alpha\big\}, \ \ \Sigma_{\alpha}=\big\{x\in \Omega\big| d(x,\partial \Omega)=\alpha\big\}.
\]
那么，存在$\alpha_0>0$，使得

- 1\) 函数
  \[
  \Omega_{\alpha_0}\rightarrow \mathbb{R}_{>0}, \ \ x\mapsto d(x,\partial \Omega)
  \]
  是$\Omega_{\alpha_0}$上的光滑函数。

- 2\) 对任意的$\alpha<\alpha_0$，$\Sigma_\alpha$是光滑的超曲面。

:::

::: proof
对任意的$x_0\in \partial \Omega$，我们考虑
\[
B_{\frac{1}{2}\varepsilon}(x_0)\cap\Omega \subset B_{\varepsilon}(x_0)\cap \Omega \subset \Omega.
\]
我们要证明如下的论断：存在$\varepsilon$，
使得函数$d(\cdot, \partial \Omega \cap B_{\varepsilon}(x_0))$满足

- 1\) $d(\cdot, \partial \Omega \cap B_{\varepsilon}(x_0))$在
  $B_{\frac{1}{2}\varepsilon}(x_0)\cap \Omega $上是光滑函数。

- 2\) 对任意的$\alpha<\dfrac{1}{2}\varepsilon$，
  $\Sigma_\alpha\cap B_{\frac{1}{2}\varepsilon}(x_0)\cap \Omega$是光滑的超曲面。

我们指出，在上面的构造中，
我们之所以选取$B_{\frac{1}{2}\varepsilon}(x_0)$和$B_{\varepsilon}(x_0)$两个小球是因为对任意的
$x\in B_{\frac{1}{2}\varepsilon}(x_0)\cap \Omega$，我们有
\[
d(x,\partial \Omega)=d(x,\partial \Omega \cap B_{\varepsilon}(x_0) ).
\]

假设上面的论断成立，根据紧性，我们总是可以选取有限个$x_1,\cdots,x_m\in \partial \Omega$，
对应这些点，我们有相应的$\varepsilon_1,\cdots,\varepsilon_m>0$，
满足上面的性质并且
$B_{\frac{1}{2}\varepsilon_1}(x_1), B_{\frac{1}{2}\varepsilon_2}(x_2),\cdots, B_{\frac{1}{2}\varepsilon_m}(x_m)$
是$\partial \Omega$的开覆盖。
此时，
我们令$\alpha_0=\frac{1}{2}\min_{i\leqslant m}\left(\varepsilon_1,\cdots,\varepsilon_m\right)$即可。
这就完成了命题的证明。

由于$\varepsilon$可以选取的足够小，所以，
我们总是可以假设$\partial\Omega$在$B_\varepsilon(x_0)$上是函数图像（这里，
我们用到了$\partial\Omega$的光滑性）。
另外，通过适当的选取直角坐标系（复合上一个$\mathbb{R}^n$上的等距变换），
我们总是可以假设$x_0=(0,0)=(x,y)$是原点，其中，$x\in \mathbb{R}^{n-1}$，$y\in \mathbb{R}$。
在$B_\varepsilon(0)$上，$\partial \Omega$是$y=f(x)$的图像，其中，
$f$是$\mathbb{R}^{n-1}$上的光滑函数并且$d f|_{x=0}=0$（此时，
$\partial \Omega$在$x_0$的切平面恰好是$y=0$这个平面）。

![](L2602.svg)

我们现在任选$(x_*,y_*)\in \Omega \cap B_{\frac{1}{2}\varepsilon}(0)$，
我们证明存在唯一的$(x',y')\in \partial \Omega \cap  B_{\varepsilon}(0)$，使得
\[
d\big((x_*,y_*),\partial \Omega\big)=d\big((x_*,y_*),(x',y')\big).
\]
这个问题等价于我们要找$(x,f(x))\in \partial \Omega$，使得如下的函数达到最小值：
\[
F(x)=|x_*-x|^2+|y_*-f(x)|^2.
\]
这显然是关于$x$的光滑函数并且它的最小值一定能取到并且只能在$B_\varepsilon(0)$中取到。
如果$x'$是这样的一个极值点，那么，
\[
dF\big|_{x=x'}=0\ \ \Leftrightarrow \ \ 2(x_*-x')+2(y_*-f(x'))df\big|_{x=x'}=0.
\]
这等价于
\[
x_*+(y_*-f(x'))df(x')-x'=0.
\]
当$(x_*,y_*)=(0,0)$时，这个方程显然只有唯一的解。另外，考虑映射
\[
\Phi: x'\mapsto x^*+(y^*-f(x'))df(x').
\]
此时，
\[
d\Phi(0)=\underbrace{(y_*-f(x'))}_{O(\varepsilon)}\underbrace{\nabla^2 f(x')}_{\text{在$B_\varepsilon(0)$上有界}}-\underbrace{\nabla f(x')\cdot \nabla f(x')}_{\text{根据连续性，在$B_\varepsilon(0)$上为$O(\varepsilon^2)$}}-{\rm Id}.
\]
所以，当$\varepsilon$足够小的时候，$d\Phi(0)$是可逆的。
进一步缩小$\varepsilon$，根据反函数定理，
我们就知道存在唯一的$(x',f(x'))\in B_{\varepsilon}(0)\cap \partial \Omega$，使得
\[
x_*+(y_*-f(x'))df(x')-x'=0 \ \ \Leftrightarrow \ \ dF\big|_{x=x'}=0.
\]
这表明，$(x',f(x'))$（唯一地）实现了$(x_*,y_*)$到$\partial \Omega$的距离。
特别地，反函数定理表明$x'$对于$(x_*,y_*)$是光滑依赖的，所以，
\[
d\big((x_*,y_*),\partial \Omega\big)=d\big((x_*,y_*),(x',y')\big)=\sqrt{|x_*-x'|^2+|y_*-y'|^2}\big)
\]
是$(x_*,y_*)$的光滑函数。

另外，假设$d\big((x_*,y_*),\partial \Omega\big)=\alpha$，我们用直线段$L$连接$(x_*,y_*)$与$(x',y')$，
那么，在这个线段上的每个点到$\partial\Omega$的距离都被$(x',y')$所实现。
此时，我们知道对任意的$v\in T_{(x_*,y_*)}\Sigma_\alpha$，
$\nabla_v d\big((x_*,y_*),\partial \Omega\big)=0$；
但是沿着$L$方向对$d\big((x_*,y_*),\partial \Omega\big)$求导数必然为$\pm 1$。从而，
\[
\big|\nabla d\big(\cdot,\partial \Omega\big)\big|\equiv 1.
\]
这就表明到边界距离为定值的点所构成的超曲面是光滑的。这就完成了引理的证明。
:::

::: proof [@lemma:measure-of-points-close-to-boundary 的证明]
我们选取上面引理中的$\alpha_0$。我们只要对于$\alpha<\alpha_0$，证明存在常数$C_1$，使得
\[
S(\alpha) = \big|\big\{x\in \Omega\big| d(x,\partial \Omega)<\alpha\big\}\big|\leqslant C_1 \alpha
\]
即可。实际上，我们可以选取
\[
C=\max\left(C_1, \frac{|\Omega|}{\alpha_0}\right).
\]
因为当$\alpha\geqslant \alpha_0$时，我们有
\[
S(\alpha)\leqslant |\Omega|=\frac{|\Omega|}{\alpha_0}\alpha.
\]
对于任意的$\alpha<\alpha_0$，我们有
\[
\Omega_\alpha=\bigcup_{t<\alpha}\Sigma_t.
\]
根据扭曲版本的Fubini定理（第二学期作业8问题A6），我们有
\[
\begin{aligned}
S(\alpha)&=\int_{\Omega_\alpha} 1 dx = \int_0^\alpha \left(\int_{\Sigma_t}\frac{1}{|\nabla d(\cdot, \partial \Omega)|}d\sigma_t\right)dt\\
&= \int_0^\alpha |\Sigma_t| dt.
\end{aligned}
\]
根据反函数定理，每个$\Sigma_t$在局部上都可以由一族光滑依赖于$t$的函数图像实现，所以，
当$t<\alpha$较小的时候，我们知道$\Sigma_t$与$\Sigma_0$的差别不大，从而，
\[
|\Sigma_t|\leqslant C_1.
\]
\[
\begin{aligned}
S(\alpha)\leqslant = \int_0^\alpha C_1dt=C_1\alpha.
\end{aligned}
\]
命题得证。
:::

## Karamata的Tauber型渐近公式

::: theorem
假设$\mu$是$(\mathbb{R}_{>0},\mathcal{B})$上的一个（正）测度，其中$\mathcal{B}$为Borel代数。
我们假设对任意的$t>0$，它的Laplace变换
\[
\left(\mathcal{L}\mu\right)(t)=\int_{0}^\infty e^{-\lambda t}d\mu(\lambda)
\]
是良好定义的。

假设对于$t\rightarrow 0^+$，存在正常数$C_0$和$\alpha$，使得
\[
\left(\mathcal{L}\mu\right)(t)\sim C_0t^{-\alpha},\ \  t\rightarrow 0^+.
\]
即
\[
\lim_{t\rightarrow 0^+} t^\alpha \int_{0}^\infty e^{-t\lambda}d\mu(\lambda)=C_0,
\]
那么，对任意的$f\in C^0\big([0,1]\big)$，我们都有
\[
\lim_{t\rightarrow 0^+} t^\alpha \int_{0}^\infty f\left(e^{-t\lambda}\right)e^{-t\lambda}d\mu(\lambda)=\frac{C_0}{\Gamma(\alpha)}\int_{0}^\infty f\left(e^{-t}\right)t^{\alpha-1}e^{-t}dt,
\]
其中，
\[
\Gamma(\alpha)=\int_{0}^\infty x^{\alpha-1}e^{-x}dx.
\]
:::

::: proof
我们首先说明如下简单的观察：
所要证明的不等式如果对一致收敛的函数列$\{f_k(x)\}_{k\geqslant 1}\subset C^0\big([0,1]\big)$成立，
那么，这个不等式对于这个函数列的极限函数$f(x)$也成立。
实际上，作为$\mathbb{R}_{>0}$上的函数列，我们也有一致收敛性：
\[
f_k(e^{-t\lambda})\stackrel{\text{一致}}{\longrightarrow} f(e^{-t\lambda}).
\]
所以，
\[
\begin{aligned}
&\left|\frac{C_0}{\Gamma(\alpha)}\int_{0}^\infty f_k\left(e^{-t}\right)t^{\alpha-1}e^{-t}dt-\frac{C_0}{\Gamma(\alpha)}\int_{0}^\infty f\left(e^{-t}\right)t^{\alpha-1}e^{-t}dt\right|\\
\leqslant&\frac{C_0}{\Gamma(\alpha)}\int_{0}^\infty \|f_k-f\|_{L^\infty}t^{\alpha-1}e^{-t}dt\\
=&C_0\|f_k-f\|_{L^\infty}\rightarrow 0.
\end{aligned}
\]
这说明要证明的不等式的右边是收敛的。为了处理左边，我们先研究
\[
\begin{aligned}
&\left|t^\alpha \int_{0}^\infty f_k\left(e^{-t\lambda}\right)e^{-t\lambda}d\mu(\lambda)-t^\alpha \int_{0}^\infty f\left(e^{-t\lambda}\right)e^{-t\lambda}d\mu(\lambda)\right|\\
\leqslant& t^\alpha \int_{0}^\infty \|f_k-f\|_{L^\infty}e^{-t\lambda}d\mu(\lambda)\\
=& \|f_k-f\|_{L^\infty}\times  t^\alpha \mathcal{L}\mu(t).
\end{aligned}
\]
根据$\left(\mathcal{L}\mu\right)(t)\sim C_0t^{-\alpha}$，我们知道当$k\rightarrow \infty$时，
上面的式子的极限为零，这就说明
\[
\begin{aligned}
&\lim_{t\rightarrow 0^+} t^\alpha \int_{0}^\infty f_k\left(e^{-t\lambda}\right)e^{-t\lambda}d\mu(\lambda)-\lim_{t\rightarrow 0^+} t^\alpha \int_{0}^\infty f\left(e^{-t\lambda}\right)e^{-t\lambda}d\mu(\lambda)=o_k(1).
\end{aligned}
\]
这就证明了上述的观察。

根据要证明的不等式的线性以及Weierstrass–Stone逼近定理，我们只需要对$f(x)=x^k$来证明命题即可：此时，
要证明的等式等价于
\[
\lim_{t\rightarrow 0^+} t^\alpha \int_{0}^\infty e^{-tk\lambda}e^{-t\lambda}d\mu(\lambda)=\frac{C_0}{\Gamma(\alpha)}\int_{0}^\infty e^{-kt}t^{\alpha-1}e^{-t}dt,
\]
左边可以写成
\[
t^\alpha \int_{0}^\infty e^{-((k+1)t)\lambda}d\mu(\lambda)\rightarrow \frac{C_0}{(k+1)^\alpha}.
\]
右边可以如下计算
\[
\begin{aligned}
\int_{0}^\infty e^{-kt}t^{\alpha-1}e^{-t}dt&=\frac{1}{(k+1)^\alpha}\int_{0}^\infty e^{-(k+1)t} ((k+1)t)^{\alpha-1}(k+1)dt=\frac{\Gamma(\alpha)}{(k+1)^\alpha}.
\end{aligned}
\]
所以，命题成立。
:::

为了应用这个定理，我们假设令
\[
\mu=\sum_{k=1}^\infty \delta_{\lambda_k}(\lambda).
\]
那么，根据
\[
\sum_{k=1}^\infty e^{-\lambda_k t}= (4\pi t)^{-\frac{n}{2}}\left(|\Omega|+O(t^{\frac{1}{2}})\right), \ \ t\rightarrow 0^+,
\]
我们知道
\[
\left(\mathcal{L}\mu\right)(t)\sim C_0t^{-\alpha},\ \  t\rightarrow 0^+,
\]
其中
\[
\alpha=\frac{n}{2}, \ \ C_0=\frac{|\Omega|}{(4\pi )^{\frac{n}{2}}}.
\]
我们现在选取如下的$f$：
\[
f(x)=x^{-1}\mathbf{1}_{[e^{-1},1]}(x).
\]
我们注意到，$f$并不是连续函数，我们后面会用逼近的方式证明对于这个特殊的$f$，定理的结论仍然成立。
此时，定理结论的左边可以写成：
\[
\begin{aligned}
\lim_{t\rightarrow 0^+} t^\alpha \int_{0}^{t^{-1}} e^{t\lambda}\times e^{-t\lambda}d\mu(\lambda)&=\lim_{t\rightarrow 0^+} t^\alpha \left|\big\{\lambda_k\big|\lambda_k\leqslant t^{-1}\big\}\right|\\
&=\lim_{\lambda\rightarrow \infty} \lambda^{-\alpha} \left|\big\{\lambda_k\big|\lambda_k\leqslant \lambda\big\}\right|.
\end{aligned}
\]
右边可以写成
\[
\begin{aligned}
\frac{C_0}{\Gamma(\alpha)}\int_{0}^\infty f\left(e^{-t}\right)t^{\alpha-1}e^{-t}dt&=\frac{C_0}{\Gamma(\alpha)}\int_{0}^1 e^{t}\times t^{\alpha-1}e^{-t}dt\\
&=\frac{C_0}{\alpha\Gamma(\alpha)}=\frac{C_0}{\Gamma(\alpha+1)}.
\end{aligned}
\]
综上所述，我们就有
\[
\lim_{\lambda\rightarrow \infty} \lambda^{-\frac{n}{2}} \left|\big\{\lambda_k\big|\lambda_k\leqslant \lambda\big\}\right|=\frac{|\Omega|}{(4\pi )^{\frac{n}{2}}\Gamma\left(\frac{n}{2}+1\right)}.
\]
这就给出了Weyl关于特征值的渐近公式。

最后，我们用连续函数来逼近$f$。我们构造两族函数：
\[
f^+_\varepsilon(x)=\begin{cases}
0, &x\leqslant e^{-(1+\varepsilon)};\\
\text{线性地连接};\\
\frac{1}{x},&x\geqslant e^{-1}.
\end{cases}
\ \
f^-_\varepsilon(x)=\begin{cases}
0, &x\leqslant e^{-1};\\
\text{线性地连接};\\
\frac{1}{x},&x\geqslant e^{-(1-\varepsilon)}.
\end{cases}
\]
我们知道，
\[
f^-(x)\leqslant f(x)\leqslant f^+(x).
\]
所以，
\[
\lim_{t\rightarrow 0^+} t^\alpha \int_{0}^\infty f^-_\varepsilon\left(e^{-t\lambda}\right)e^{-t\lambda}d\mu(\lambda)\leqslant\liminf_{t\rightarrow 0^+}\left( t^\alpha \int_{0}^\infty f\left(e^{-t\lambda}\right)e^{-t\lambda}d\mu(\lambda)\right).
\]
从而，
\[
\frac{C_0}{\Gamma(\alpha)}\int_{0}^\infty f^-_\varepsilon\left(e^{-t}\right)t^{\alpha-1}e^{-t}dt \leqslant\liminf_{t\rightarrow 0^+}\left( t^\alpha \int_{0}^\infty f\left(e^{-t\lambda}\right)e^{-t\lambda}d\mu(\lambda)\right).
\]
类似地，我们有
\[
\limsup_{t\rightarrow 0^+}\left( t^\alpha \int_{0}^\infty f\left(e^{-t\lambda}\right)e^{-t\lambda}d\mu(\lambda)\right)\leqslant \frac{C_0}{\Gamma(\alpha)}\int_{0}^\infty f^+_\varepsilon\left(e^{-t}\right)t^{\alpha-1}e^{-t}dt .
\]
所以，我们只要证明
\[
\lim_{\varepsilon\rightarrow 0}\left(\int_{0}^\infty f^\pm_\varepsilon\left(e^{-t}\right)t^{\alpha-1}e^{-t}dt\right)=\int_{0}^\infty f\left(e^{-t}\right)t^{\alpha-1}e^{-t}dt
\]
即可。我们有
\[
\begin{aligned}
\int_{0}^\infty (f^\pm_\varepsilon-f)\left(e^{-t}\right)t^{\alpha-1}e^{-t}dt&=\int_{0}^\infty (f^\pm_\varepsilon-f)\left(e^{-t}\right)t^{\alpha-1}e^{-t}dt\\
&=\int_{1-\varepsilon}^{1+\varepsilon} (f^\pm_\varepsilon-f)\left(e^{-t}\right)t^{\alpha-1}e^{-t}dt\\
&\leqslant \int_{1-\varepsilon}^{1+\varepsilon} e\cdot t^{\alpha-1}e^{-t}dt\rightarrow 0.
\end{aligned}
\]
这就完成了全部的证明。

[^1]: 搬运者注：我感觉这一步以及以后由此带来的分类讨论均无必要，直接利用上述估计即可
