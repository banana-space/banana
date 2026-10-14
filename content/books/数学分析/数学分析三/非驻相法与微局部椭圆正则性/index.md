---
title: 非驻相法与微局部椭圆正则性
notices:
  - name: 问题
    items:
      - '“一个非驻相法的引理”一节中，条件 (c) 的叙述在“都有”之后紧接“我们就有”，语句似乎不完整。'
      - '“微局部椭圆正则性定理的证明”一节中，$J(\xi)$ 的估计 $|J(\xi)|\leqslant \frac{C''_m}{(1+|\xi|)^{m-k-1}}$ 的指数似乎应为 $k+1-m$，这样 $k$ 足够大时才得到衰减。'
---

## 一个非驻相法的引理

给定如下的基本数据：

- (a)（相函数）假设
  $\phi(x,\xi)\in C^\infty\left(\mathbb{R}_x^n\times (\mathbb{R}^n_\xi-\{0\})\right)$是实值函数，
  使得

  - $\phi(x,\xi)$对变量$\xi$是$1$次齐次函数；

  - 对任意的$(x,\xi)\in \mathbb{R}_x^n\times (\mathbb{R}^n_\xi-\{0\})$，$\xi\neq 0$，
    我们有$\nabla_x \phi(x,\xi)\neq 0$（作为$n$-维的向量）。

- (b)（振幅函数）假设
  $a(x,\xi)\in C^\infty\left(\mathbb{R}_x^n\times (\mathbb{R}^n_\xi-\{0\})\right)$，
  使得存在$N_0\in \mathbb{R}$，使得对任意的多重指标$\alpha$，存在常数$C_\alpha$，
  使得对任意的$(x,\xi)\in \mathbb{R}_x^n\times (\mathbb{R}^n_\xi-\{0\})$，我们都有
  \[
  \left|\partial^\alpha_x a(x,\xi)\right|\leqslant C_\alpha \left(1+|\xi|\right)^{N_0}.
  \]

- (c)（被作用函数）假设$K\subset \mathbb{R}^n$是紧集，
  $u\in \mathcal{E}'(\mathbb{R}^n)$使得${\rm supp}(u)\subset K$。
  如果存在$\alpha_0>0$和$\eta_0\in \mathbf{S}^{n-1}$，使得对任意的$N\geqslant 1$，存在常数$C_N$，
  使得对任意的$\xi \in \Gamma(\eta_0,\alpha_0)$，都有
  我们就有
  \[
  \left|\widehat{u}(\xi)\right|\leqslant \frac{C_{N}}{\left(1+|\xi|\right)^N}.
  \]
  其中，锥型开集$\Gamma(\eta_0,\alpha_0)$的定义如下
  \[
  \Gamma(\eta_0,\alpha_0)=\big\{\xi\in \mathbb{R}^n-\{0\}\big|\left|\frac{\xi}{|\xi|}-\frac{\eta_0}{|\eta_0|}\right|<\alpha_0\big\}.
  \]

我们想要定义积分
\[
I(\xi)=\left\langle u(x), e^{-i\phi(x,\xi)}a(x,\xi))\right\rangle=\int_{\mathbb{R}^n}  e^{-i\phi(x,\xi)}a(x,\xi)u(x)dx.
\]
上面的第一个等号自然是良好定义的，因为$u$具有紧支集，所以这就是如下的自然配对：
\[
\mathcal{E}'(\mathbb{R}^n_x)\times C^\infty(\mathbb{R}^n_x) \rightarrow \mathbb{C}.
\]
由于$u(x)$并没有关于$x$的控制，尽管所以上面的积分至少在形式上并不是良好定义的。
我们下面用积分的形式来逼近上述的$I(\xi)$。
任意选取$\chi(x)\in C_0^\infty(\mathbb{R}^n)$，其中$\chi\geqslant 0$并且在原点附近恒为$1$。
那么，在频率空间，我们知道在缓增分布的意义下，有
\[
\chi_\varepsilon(\eta)\widehat{u}\stackrel{\mathcal{S}'}{\longrightarrow} \widehat{u}, \ \ \varepsilon\rightarrow 0^+.
\]
我们令
\[
u_\varepsilon =\mathcal{F}^{-1}(\chi_\varepsilon \cdot \widehat{u}),
\]
从而，
\[
u_\varepsilon \stackrel{\mathcal{D}'}{\longrightarrow} u,\ \ \varepsilon\rightarrow 0^+.
\]
特别地，我们就有
\[
I_\varepsilon(\xi)=\left\langle u_\varepsilon(x), e^{-i\phi(x,\xi)}a(x,\xi))\right\rangle \rightarrow I(\xi).
\]
由于$\widehat{u_\varepsilon}$具有紧支集（并且是光滑函数），
所以，$u_\varepsilon(x)$对于$x$比任意的多项式衰减得都要快，从而，
\[
\int_{\mathbb{R}^n}  e^{-i\phi(x,\xi)}a(x,\xi)u_\varepsilon (x)dx
\]
是良好定义的（被积分函数是$L^1$的），所以，
\[
I_\varepsilon(\xi)=\int_{\mathbb{R}^n}  e^{-i\phi(x,\xi)}a(x,\xi)u_\varepsilon (x)dx \rightarrow I(\xi), \ \ \varepsilon\rightarrow 0^+.
\]
由于一开始$u$具有紧支集，我们再利用一个有紧支集的函数来记住这个事实：
选取$\psi(x)\in C_0^\infty(\mathbb{R}^n)$，使得$\psi(x)\big|_{K}\equiv 1$，
我们就给出了$I(\xi)$的积分表示：
\[
\begin{aligned}
I(\xi)&=\left\langle u(x), e^{-i\phi(x,\xi)}\psi(x)a(x,\xi))\right\rangle\\
&=\lim_{\varepsilon \rightarrow 0^+}\int_{\mathbb{R}^n}  e^{-i\phi(x,\xi)}\psi(x)a(x,\xi)u_\varepsilon (x)dx\\
&=\lim_{\varepsilon \rightarrow 0^+}\frac{1}{(2\pi)^n}\int_{\mathbb{R}^n}\int_{\mathbb{R}^n}  e^{-i\phi(x,\xi)+ix\cdot\eta}\psi(x)a(x,\xi) \chi_{\varepsilon}(\eta)\widehat{u}(\eta)dxd\eta.
\end{aligned}
\]
上面我们用到了Fubini定理，这是因为
\[
\left| e^{-i\phi(x,\xi)+ix\cdot\eta}\psi(x)a(x,\xi) \chi_{\varepsilon}(\eta)\widehat{u}(\eta)\right|=|\psi(x)a(x,\xi) \chi_{\varepsilon}(\eta)\widehat{u}(\eta)|
\]
是光滑的可积函数。
令
\[
\widetilde{a}(x,\xi)=\psi(x)a(x,\xi),
\]
我们就有
\[
\begin{aligned}
I(\xi)&=\lim_{\varepsilon \rightarrow 0^+}\frac{1}{(2\pi)^n}\int_{\mathbb{R}^n}\int_{\mathbb{R}^n}  e^{-i\phi(x,\xi)+ix\cdot\eta}\,\widetilde{a}(x,\xi) \chi_{\varepsilon}(\eta)\widehat{u}(\eta)dxd\eta.
\end{aligned}
\]

::: lemma [非驻相法]
假设相函数$\phi(x,\xi)$，
振幅函数$a(x,\xi)$和被作用函数$u(x)$
满足前面所要求的(a)，(b)和(c)三个条件。

给定$\xi_0\in \mathbb{R}^n_{\xi}-\{0\}$，
$\Gamma_0$是包含$\xi_0$的一个锥型开集，
$\alpha_1<\alpha_0$，其中$\alpha_0$在条件(c)中出现。
假设对任意的$(x,\xi)\in K \times \Gamma_0$，我们都有
\[
\left|\frac{\nabla_x \phi(x,\xi)}{|\nabla_x \phi(x,\xi)|}-\eta_0\right|<\alpha_1.
\]
那么，我们可以对任意的$N\geqslant 1$，存在$C_N>0$，使得对任意的$\xi \in \Gamma_0$，有
\[
\left|I(\xi)\right|\leqslant \frac{C_{N}}{\left(1+|\xi|\right)^N}.
\]
:::

::: proof
假设$\xi\in \Gamma_0$。我们现在考虑如下的集合
\[
\Omega_1=\big\{\eta\in \mathbb{R}^n\bigm| |\eta-\nabla_x \phi(x,\xi)|<\varepsilon_1 |\nabla_x\phi(x,\xi)|~\text{或者}~|\eta-\nabla_x \phi(x,\xi)|<\varepsilon_1|\eta|\big\}.
\]
这显然是一个有界开集。如果$\varepsilon_1$选取得足够小，对于$\eta\in \Omega_1$，我们知道
\[
\left|\frac{\nabla_x \phi(x,\xi)}{|\nabla_x \phi(x,\xi)|}-\frac{\eta}{|\eta|}\right|=O(\varepsilon_1).
\]
所以，利用$\alpha_1<\alpha_0$，我们知道如果$\varepsilon_1$足够小，那么，引理中的条件意味着
\[
\left|\frac{\nabla_x \phi(x,\xi)}{|\nabla_x \phi(x,\xi)|}-\eta_0\right|<\alpha_1 \ \ \Rightarrow \ \ \eta \in \Gamma(\eta_0,\alpha_0).
\]
所以，通过选取足够小的$\varepsilon_1$（由$\alpha_0$和$\alpha_1$决定，
这是一个只依赖于$\alpha_0$和$\alpha_1$的绝对参数），我们就有
\[
\Omega_1 \subset \Gamma(\eta_0, \alpha_0).
\]
另外，根据$\Omega_1$的定义，我们知道（$\varepsilon_1<0.5$），对任意的$\eta\in \Omega_1$，我们都有
\[
\frac{1}{2}|\eta|\leqslant |\nabla_x \phi(x,\xi)|\leqslant 2|\eta|.
\]
从而，利用$\phi$对频率分量的齐次性质，我们就有
\[
\frac{1}{2}|\eta|\leqslant |\nabla_x \phi\left(x,\frac{\xi}{|\xi|}\right)||\xi|\leqslant 2|\eta|.
\]
由于光滑函数$\nabla_x \phi(x,\xi')$在紧集$K\times \mathbf{S}^{n-1}$上具有最大最小值，
根据(a)中第二点的要求，上面这个不等式意味着存在常数$C_1>0$，使得对任意的$\eta\in \Omega_1$，我们都有
\[
\frac{1}{C_1}|\eta|\leqslant |\xi|\leqslant C_1|\eta|.
\]

我们令$\Omega_2=\mathbb{R}^n_\eta-\Omega_1$，那么，我们将积分对$\eta$分量进行区域分解
\[
\begin{aligned}
I_{\varepsilon}(\xi)&=\frac{1}{(2\pi)^n}\int_{\mathbb{R}^n}\int_{\mathbb{R}^n}  e^{-i\phi(x,\xi)+ix\cdot\eta}\,\widetilde{a}(x,\xi) \chi_{\varepsilon}(\eta)\widehat{u}(\eta)dxd\eta\\
&=\frac{1}{(2\pi)^n}\left(\int_{\mathbb{R}^n}\int_{\Omega_1}  +\int_{\mathbb{R}^n}\int_{\Omega_2}\right)  e^{-i\phi(x,\xi)+ix\cdot\eta}\,\widetilde{a}(x,\xi) \chi_{\varepsilon}(\eta)\widehat{u}(\eta)dxd\eta\\
&=I_{\varepsilon,1}(\xi)+I_{\varepsilon,2}(\xi).
\end{aligned}
\]
我们分别控制这两项：

- 控制$I_{\varepsilon,1}(\xi)$。

  此时，积分因子中的$\eta\in \Omega_1$，
  根据前面的讨论，我们就有$\eta\in \Gamma(\eta_0,\alpha_0)$，
  所以，根据条件(c)，我们就有
  \[
  |\widehat{u}(\eta)|\leqslant \frac{C_N}{(1+|\eta|)^N},
  \]
  其中$N$待定。
  另外，根据${C_1}^{-1}|\eta|\leqslant |\xi|\leqslant C_1|\eta|$，
  所以，我们就有
  \[
  |\widehat{u}(\eta)|\leqslant \frac{C_N}{(1+|\eta|+|\xi|)^N}.
  \]
  上面的常数$C_N$可能有所改变，但是这对我们的推理没有影响。
  再利用(b)中的界来控制$a(x,\xi)$，我们就得到
  \[
  \begin{aligned}
  I_{\varepsilon,1}(\xi)&\leqslant \frac{1}{(2\pi)^n}\int_{\mathbb{R}^n}\int_{\Omega_1}  |\psi(x) {a}(x,\xi)| |\chi_{\varepsilon}(\eta)||\widehat{u}(\eta)|dxd\eta\\
  &\leqslant \frac{1}{(2\pi)^n}\int_{\mathbb{R}^n}\int_{\Omega_1}  |\psi(x) |C_0 (1+|\xi|)^{N_0} \frac{C_N}{(1+|\eta|+|\xi|)^N} dx d\eta\\
  &\leqslant C' \int_{\mathbb{R}^n}\int_{\Omega_1}  \frac{|\psi(x)|}{(1+|\eta|+|\xi|)^{N-N_0}}dxd\eta\\
  &\leqslant \frac{C'}{(1+|\xi|)^m} \int_{\mathbb{R}^n}\int_{\Omega_1}  \frac{|\psi(x)|}{(1+|\eta|+|\xi|)^{N-N_0-m}}dxd\eta.
  \end{aligned}
  \]
  所以，当$N$选取得足够大时（$N>N_0+m+n+1$），对任意的$m$，我们就有
  \[
  \begin{aligned}
  I_{\varepsilon,1}(\xi)&\leqslant \frac{C'}{(1+|\xi|)^m}.
  \end{aligned}
  \]
  特别地，这个估计对$\varepsilon$是一致的。

- 控制$I_{\varepsilon,2}(\xi)$。

  此时，$\eta\notin \Omega_1$。所以，按照定义，我们知道
  \[
  |\eta-\nabla_x \phi(x,\xi)|\geqslant \varepsilon_1 |\nabla_x\phi(x,\xi)|~\text{并且}~|\eta-\nabla_x \phi(x,\xi)|\geqslant \varepsilon_1|\eta|.
  \]
  所以，
  \[
  |\eta-\nabla_x \phi(x,\xi)|\geqslant\frac{\varepsilon_1}{2} \left(|\nabla_x\phi(x,\xi)|+|\eta|\right).
  \]
  利用$\phi(x,\xi)$对$\xi$的齐次性，我们就有
  \[
  |\eta-\nabla_x \phi(x,\xi)|\geqslant\frac{\varepsilon_1}{2} \left(1+|\xi|+|\eta|\right),
  \]
  在这里，我们假设了$|\xi|\geqslant 1$，
  实际上，我们总是可以做这个假设，
  因为我们只对这种情况感兴趣
  （证明积分对$|\xi|\rightarrow \infty$的衰减）。

  我们把$I_{\varepsilon,2}$重新写成
  \[
  I_{\varepsilon,2}(\xi)
  =\frac{1}{(2\pi)^n}\int_{\mathbb{R}^n}\int_{\Omega_2}
  e^{-i\widetilde{\phi}(x,\xi,\eta)}\,\widetilde{a}(x,\xi)
  \chi_{\varepsilon}(\eta)\widehat{u}(\eta)dxd\eta,
  \]
  其中，
  \[
  \widetilde{\phi}(x,\xi,\eta)=\phi(x,\xi)-x\cdot\eta.
  \]
  所以，上面的推导表明，对任意的$\eta\in \Omega_2$，我们有
  \[
  |\nabla_x \widetilde{\phi}(x,\xi,\eta) |\geqslant\frac{\varepsilon_1}{2} \left(1+|\xi|+|\eta|\right).
  \]
  所以，这个函数对$x$的导数是有下界的，
  我们将用我们第一学期学过的振荡积分的想法。

  我们定义微分算子
  \[
  L=\sum_{j\leqslant n}
  \frac{i\partial_{x_j}\widetilde{\phi}}
  {|\nabla_x \widetilde{\phi}|^2}\partial_{x_j},
  \]
  很明显，我们有
  \[
  L\left(e^{-i\widetilde{\phi}}\right)
  =e^{-i\widetilde{\phi}}.
  \]
  对任意的光滑有紧支集的函数$f(x)$和$g(x)$，
  通过分部积分，我们有
  \[
  \int_{\mathbb{R}^n} (Lf)(x)\cdot g(x)dx=
  \int_{\mathbb{R}^n}f(x) \cdot ({}^tL g)(x)dx,
  \]
  其中，
  \[
  ({}^tL g)(x)=
  -\sum_{j\leqslant n}\partial_{x_j}
  \left(\frac{i\partial_{x_j}
  \widetilde{\phi} g(x)}
  {|\nabla_x \widetilde{\phi}|^2}\right).
  \]
  据此，我们有
  \[
  \begin{aligned}
  I_{\varepsilon,2}(\xi)&=\frac{1}{(2\pi)^n}
  \int_{\mathbb{R}^n}\int_{\Omega_2}
  L^N\left(e^{-i\widetilde{\phi}(x,\xi,\eta)}\right)
  \widetilde{a}(x,\xi) \chi_{\varepsilon}(\eta)
  \widehat{u}(\eta)dxd\eta\\
  &=\frac{1}{(2\pi)^n}\int_{\mathbb{R}^n}\int_{\Omega_2}
  e^{-i\widetilde{\phi}(x,\xi,\eta)}\times ({}^t L)^N
  (\widetilde{a}(x,\xi))
  \times\chi_{\varepsilon}(\eta)\widehat{u}(\eta)dxd\eta.
  \end{aligned}
  \]
  根据(b)，由于对任意的多重指标$\alpha$，我们都有
  \[
  |\partial^\alpha_x a(x,\xi)|\leqslant
  C_\alpha (1+|\xi|)^{N_0}.
  \]
  所以，对任意的$|\alpha|\leqslant N$，我们就有
  \[
  \big|\partial^\alpha_x \widetilde{a}(x,\xi)\big|
  =\big|\partial^\alpha_x [\psi(x)\cdot a(x,\xi)]\big|
  \leqslant C_\alpha (1+|\xi|)^{N_0}.
  \]
  另外，对任意的$|\alpha|\leqslant N$，
  利用$\phi(x,\xi)$对频率分量的齐次性（以及$x\in K$），我们还有
  \[
  |\partial^\alpha_x \phi(x,\xi)|=|\partial^\alpha_x \phi\left(x,\frac{\xi}{|\xi|}\right)||\xi|\leqslant C_N |\xi|.
  \]
  根据这些性质以及
  \[
  |\nabla_x \widetilde{\phi}(x,\xi,\eta)
  |\geqslant\frac{\varepsilon_1}{2} \left(1+|\xi|+|\eta|\right),
  \]
  其中$\varepsilon_1$是一个只依赖于$\alpha_0$和$\alpha_1$的常数，
  我们就有
  \[
  \left|({}^t L)^N (\widetilde{a}(x,\xi))\right|
  \leqslant C_N(1+|\xi|)^{N_0}(1+|\xi|+|\eta|)^{-N}\mathbf{1}_K(x).
  \]
  所以，
  \[
  \begin{aligned}
  I_{\varepsilon,2}(\xi)&\leqslant C_N\int_{\mathbb{R}^n}\int_{\Omega_2}
  (1+|\xi|)^{N_0}(1+|\xi|+|\eta|)^{-N}\mathbf{1}_K(x)
  |\chi_{\varepsilon}(\eta)\widehat{u}(\eta)|dxd\eta\\
  &\leqslant C' \int_{\Omega_2}
  (1+|\xi|+|\eta|)^{-N+N_0}|\widehat{u}(\eta)|d\eta.
  \end{aligned}
  \]
  由于对任意的
  $u\in \mathcal{E}'(\mathbb{R}^n)\subset\mathcal{S}'(\mathbb{R}^n)
\subset \displaystyle\bigcup_{s\in \mathbb{R}}H^s(\mathbb{R}^n)$，
  所以，我们可以假设$u\in H^{s_0}(\mathbb{R}^n)$，从而，
  \[
  \begin{aligned}
  I_{\varepsilon,2}(\xi)&\leqslant \frac{C'}{(1+|\xi|)^m}
  \int_{\mathbb{R}^n}  (1+|\xi|+|\eta|)^{-N+N_0+m-\frac{s_0}{2}}
  \times (1+|\xi|)^{\frac{s_0}{2}}|\widehat{u}(\eta)|d\eta\\
  &\leqslant
  \frac{C'}{(1+|\xi|)^m} \left(\int_{\mathbb{R}^n}
  (1+|\xi|+|\eta|)^{-2N+2N_0+2m-s_0}d\eta\right)
  \|u\|_{H^{s_0}}\\
  &=\frac{C''}{(1+|\xi|)^m}.
  \end{aligned}
  \]
  其中，我们只要选取$2N>2N_0+2m-s_0+1$即可。这个估计仍然不依赖于$\varepsilon$。

综合上面的论证，对任意的$m$，我们都有$C(m)$，使得
\[
\left|I(\xi)\right|\leqslant \lim_{\varepsilon\rightarrow 0^+}I_{\varepsilon,1}(\xi)+I_{\varepsilon,2}(\xi)\leqslant \frac{C(m)}{\left(1+|\xi|\right)^m}.
\]
这就完成了证明。
:::

## 波前集在微分同胚下的变换

我们利用这个引理来证明波前集在微分同胚下的变化。
假设
\[
\Phi\colon\Omega \rightarrow \Omega'
\]
是$\mathbb{R}^n$中两个开区域之间的微分同胚，其中，
我们用$x=(x_1,\cdots,x_n)$和$y=(y_1,\cdots,y_n)$分别表示$\Omega$和$\Omega'$上的坐标。
假设$u(y)$是$\Omega'$上的分布，我们不难验证，
$u$在$y_0$的附近光滑当且仅当$u\circ \Phi$在$x_0$处光滑，其中$y_0=\Phi(x_0)$。

给定了上述的微分同胚，我们定义$T^*\Omega$与$T^*\Omega'$之间的微分同胚：
\[
\left(d\Phi\right)^*\colon T^*\Omega\rightarrow T^*\Omega',
\ \  (x_0,\xi_0)\mapsto
\left(\Phi(x_0),{}^{t}
\left(d\Phi\big|_{x=x_0}\right)^{-1}(\xi_0)\right).
\]
其中，${}^{t}\left(d\Phi\big|_{x=x_0}\right)^{-1}$
表示的是Jacobi矩阵$d\Phi\big|_{x=x_0}$转置取逆。

::: exercise*
证明，$\left(d\Phi\right)^*$是微分同胚。
:::

::: theorem
给定开区域$\Omega\subset \mathbb{R}^n$和$\widetilde{\Omega}\subset \mathbb{R}^n$，
用$x=(x_1,\cdots,x_n)$和$y=(y_1,\cdots,y_n)$分别表示$\Omega$和$\widetilde{\Omega}$上的坐标，我们假设
\[
\Phi\colon\Omega \rightarrow \widetilde{\Omega}
\]
是微分同胚。对任意的$\widetilde{u}\in \mathcal{D}'(\widetilde{\Omega})$，
任意的$x_0\in \Omega$，令$y_0=\Phi(x_0)\in \widetilde{\Omega}$，
那么，$(y_0,\widetilde{\xi})\in WF(\widetilde{u})$当且仅当
$\left(x_0,{}^t\left(d\Phi\big|_{x=x_0}\right)\left(\widetilde{\xi}\right)\right)\in WF(\widetilde{u}\circ \Phi)$。
换而言之，如果令$u=\Phi^*(\widetilde{u})$，那么，
\[
WF(\widetilde{u})=\left(d\Phi\right)^*\left(WF(u)\right).
\]
:::

::: remark*
这个变换与流形上余切丛的转移函数的形式是一致的，这建议说频率空间应该被视作是余切丛的纤维。
:::

::: proof [波前集在微分同胚下的变化]
根据波前集的定义，我们选取$f(x)$是支撑集在$x_0\in \Omega$附近的光滑函数，
我们需要计算$f\cdot \Phi^*\widetilde{u}$的Fourier变换，其中$u=\Phi^*\widetilde{u}$。我们有
\[
\begin{aligned}
\widehat{f \Phi^*u}(\xi)&=\int_{\mathbb{R}^n_x}e^{-ix\cdot \xi}f(x)\widetilde{u}(\Phi(x))dx\\
&=\int_{\mathbb{R}^n_y}e^{-i\Phi^{-1}(y)\cdot \xi}\underbrace{f(\Phi^{-1}(y))}_{F(y)}\widetilde{u}(y) |d\Phi^{-1}(y)|dy\\
&=\int_{\mathbb{R}^n_y}e^{-i\Phi^{-1}(y)\cdot \xi}\underbrace{f(\Phi^{-1}(y)) |d\Phi^{-1}(y)|}_{F(y)} \widetilde{u}(y)dy.
\end{aligned}
\]
这里，$F(y)$是支撑集在$y_0\in \widetilde{\Omega}$附近的光滑函数。
由于$F$具有紧支集，所以我们不妨假设$\widetilde{u}$也具有紧支集。

我们现在假设$(y_0,\eta_0)\notin WF(\widetilde{u})$，所以，根据定义波前集，
$\widetilde{u}$满足引理中(c)的要求。
同样，相函数$\phi(y,\xi)=\Phi^{-1}(y)\cdot \xi$满足引理中(a)的要求；
振幅函数$a(y,\xi)=F(y)$满足引理中(b)的要求。我们现在要找到满足引理中的条件的$\xi$。实际上，我们有
\[
\nabla_y\Phi(y,\xi)=\ ^t{}d\Phi^{-1}(y)\cdot \xi.
\]
所以，对于${}^t{}d\Phi^{-1}(y)(\xi_0)=\eta_0$，
只要$\xi$落在$\xi_0$附近的锥$\Gamma_0=\Gamma(\xi_0,\alpha_1)$，其中$\alpha_1$足够小，那么，
\[
|\nabla_y\Phi(y,\xi)-\eta_0|
\]
就足够小，所以，引理的条件成立，引理的结论表明$(x_0,\xi_0)\notin WF(u)$，这就证明了命题。
:::

## 微局部的椭圆正则性定理

给定区域$\Omega$上的一个$m$-次微分算子
\[
P=\sum_{|\alpha|\leqslant m}p_\alpha(x)\partial^\alpha,
\]
它的$P$的**主象征**$\sigma_{m}(P)$是$T^*\Omega$上的光滑函数，其定义为
\[
p_m(x,\xi)=\sum_{|\alpha|=m}p_\alpha(x)(-i\xi)^\alpha.
\]
我们可以利用单色波来计算$P$的主象征：
\[
\begin{aligned}
e^{ix\cdot\xi}P(e^{-ix\cdot \xi})&=\sum_{|\alpha|\leqslant m}e^{ix\cdot\xi}p_\alpha(x)\partial^\alpha\left(e^{-ix\cdot\xi}\right)\\
&=\sum_{|\alpha|\leqslant m} p_\alpha(x)(-i\xi)^\alpha.
\end{aligned}
\]
所以，我们只要取$\xi$的$m$-次齐次部分即可。

另外，如果我们用${}^tP$表示$P$的对偶算子（这里，我们不用$L^2$的内积），
即对任意的$f,g\in C_0^\infty$，我们有
\[
\langle f, Pg\rangle=\langle {}^tP f, g\rangle,
\]
那么，
\[
{}^tP f=\sum_{|\alpha|\leqslant m}(-1)^\alpha
\partial^\alpha\big(p_\alpha(x) \cdot f(x)\big).
\]
特别地，这也是$m$-次的微分算子并且我们有
\[
\sigma_{m}\left({}^tP\right)=\sum_{|\alpha|=m}p_\alpha(x)(i\xi)^\alpha=(-1)^m\sigma_{m}\left(P\right).
\]

我们要证明如下的定理：

::: theorem [微局部椭圆正则性]
给定区域$\Omega$上的$m$-次微分算子$P$和分布$u\in \mathcal{D}'(\Omega)$。那么，我们有
\[
WF(u)\subset Z\left(\sigma_m(P)\right)\cup WF\left(P(u)\right),
\]
其中，$Z\left(\sigma_m(P)\right)$是$P$的主象征的零点集。
:::

我们先来把证明的目标讲清楚：
假设$(x_0,\xi_0) \notin Z\left(\sigma_m(P)\right)\cup WF\left(P(u)\right)$，
我们要证明$(x_0,\xi_0) \notin  WF\left(u\right)$。
由于$p_m(x,\xi)=\sigma_m(P)(x,\xi)$对$\xi$是齐次的，所以，
$(x_0,\xi_0) \notin Z\left(\sigma_m(P)\right)$意味着存在紧集$K_1\subset \Omega$（$x_0\in K_1$），
常数$\alpha_1>0$和$C_1>0$，使得对任意的$(x,\xi)\in K_1\times \Gamma(\xi_0,\alpha_1)$，
我们都有$|p_m(x,\xi)|\geqslant C |\xi|^m$；$(x_0,\xi_0) \notin WF\left(P(u)\right)$，
意味着存在紧集$K_2\subset \Omega$（$x_0\in K_2$）和$\alpha_2>0$使得对任意的
$\varphi \in C_0^\infty(K_2)$，对任意的整数$N\geqslant 1$，存在$C_N$，
使得对任意的$\xi\in \Gamma(\xi_0,\alpha_2)$，
使得$(1+|\xi|)^N|\widehat{\varphi \cdot Pu}(\xi)|\leqslant C_N$。所以，综合这些表述，我们就有：

存在紧集$K\subset \Omega$，$x_0\in \Omega$，存在常数$\beta>0$，$C>0$，使得

- 对任意的$(x,\xi)\in K\times \Gamma(\xi_0,\beta)$，我们有
  \[
  |p_m(x,\xi)|\geqslant C |\xi|^m.
  \]

- 对任意的$\varphi \in C_0^\infty(K)$，对任意的整数$N\geqslant 1$，存在$C_N>0$，
  使得对任意的$\xi\in \Gamma(\xi_0,\beta)$，使得
  \[
  |\widehat{\varphi \cdot Pu}(\xi)|\leqslant \frac{C_N}{(1+|\xi|)^N}.
  \]

我们要证明存在紧集合$K'\subset K$，$x_0 \in K'$和常数$\beta'<\beta$，
使得对任意的$\varphi \in C_0^\infty(K')$，对任意的整数$N\geqslant 1$，存在$C'_N>0$，
使得对任意的$\xi\in \Gamma(\xi_0,\beta')$，使得
\[
|\widehat{\varphi \cdot u}(\xi)|\leqslant \frac{C'_N}{(1+|\xi|)^N},
\]
这就说明了$(x_0,\xi_0)\notin WF(u)$。

::: remark* [一个“直观的”证明思路]
我们实际上关心的是$\widehat{\varphi\cdot u}(\xi)$（在某个锥形邻域里）的衰减。形式上，我们有
\[
\begin{aligned}
\widehat{\varphi\cdot u}(\xi)&=\int_{\mathbb{R}^n}e^{-ix\cdot \xi }\varphi(x)u(x)dx.
\end{aligned}
\]
我们希望能至少对$e^{-ix\cdot \xi }\varphi(x)$定义${}^t P$的逆，即找到$a(x,\xi)$，使得（只对$x$作用，
$\xi$视作是参数）
\[
{}^t P\left(e^{-ix\cdot \xi }a(x,\xi)\right)=e^{-ix\cdot \xi }\varphi(x).
\]
那么，我们就有
\[
\begin{aligned}
\widehat{\varphi\cdot u}(\xi)&=\int_{\mathbb{R}^n}{}^t P\left(e^{-ix\cdot \xi }a(x,\xi)\right) u(x)dx\\
&=\int_{\mathbb{R}^n} e^{-ix\cdot \xi }a(x,\xi) Pu(x)dx\\
&=\langle e^{-ix\cdot \xi }a(x,\xi), Pu(x)\rangle.
\end{aligned}
\]
此时，$\widehat{Pu}$在特定的锥之内有衰减，我们可以选取相函数为$-x\cdot \xi$，从而，
我们可以用上次课所提到的非驻相法的引理。

另外，根据
\[
\widehat{\varphi\cdot u}(\xi)=\langle e^{-ix\cdot \xi }a(x,\xi),Pu(x)\rangle.
\]
我们知道$a(x,\xi)$对$\xi$的衰减越快越好。
:::

### 拟解（parametrix）的构造

我们首先做一番计算上的准备：

::: lemma
假设$c(x,\xi)\in C^\infty\big(K\times \Gamma(\xi_0,\beta)\big)$，
$c(x,\xi)$对每个固定的$\xi$都是$\xi$的$d$-次齐次函数并且如果$x\notin K$，那么$c(x,\xi)=0$。
那么，我们有
\[
{}^t P\left(e^{-ix\cdot \xi }c(x,\xi)\right)=e^{-ix\cdot \xi}(-1)^mp_m(x,\xi)c(x,\xi)+e^{-ix\cdot \xi}\sum_{1\leqslant k\leqslant m} c_k(x,\xi),
\]
其中，对每个$k=1,\cdots, m$，函数$c_k(x,\xi)\in C^\infty\big(K\times \Gamma(\xi_0,\beta)\big)$，
$c(x,\xi)$对每个固定的$\xi$都是$\xi$的$d+m-k$-次齐次函数并且如果$x\notin K$，那么$c_k(x,\xi)=0$。
:::

::: remark*
我们认为
\[
c_0(x,\xi)=p_m(x,\xi)c(x,\xi).
\]
它的次数是$d+m-k$。
根据前一个注解，$k$越大，$c_k(x,\xi)$对$\xi$的衰减就越好，所以，
我们认为$c_k$（$k\geqslant 1$）是比首项$p_m(x,\xi)c(x,\xi)$要“好”的。
:::

::: proof
实际上，我们有
\[
\begin{aligned}
{}^tP \left(e^{-ix\cdot \xi }c(x,\xi)\right)&=\sum_{|\alpha|\leqslant m}(-1)^\alpha \partial^\alpha\big(e^{-ix\cdot \xi }\underbrace{p_\alpha(x) c(x,\xi)}_{c_\alpha(x)}\big)\\
&=\sum_{|\alpha|\leqslant m}(-1)^\alpha \sum_{\gamma\leqslant \alpha} {\alpha \choose \gamma} \partial^\gamma \big(e^{-ix\cdot \xi }\big)\partial^{\alpha-\gamma}\big(c_\alpha(x,\xi)\big)\\
&=\left(\sum_{|\alpha|=m}+\sum_{|\alpha|<m}\right)(-1)^\alpha \sum_{\gamma\leqslant \alpha}{\alpha \choose \gamma} \partial^\gamma \big(e^{-ix\cdot \xi }\big)\partial^{\alpha-\gamma}\big(c_\alpha(x,\xi)\big)\\
&=\sum_{|\gamma|=m}(-1)^m \partial^\gamma \big(e^{-ix\cdot \xi }\big)\cdot c_\gamma(x)+\sum_{\gamma\leqslant \alpha, |\gamma|\leqslant m-1, |\alpha|\leqslant m-1} \pm {\alpha \choose \gamma} \partial^\gamma \big(e^{-ix\cdot \xi }\big)\partial^{\alpha-\gamma}\big(c_\alpha(x,\xi)\big)\\
&=\sum_{|\alpha|=m}  (i\xi)^\alpha e^{-ix\cdot \xi }p_\alpha(x) c(x,\xi)+\sum_{0\leqslant k\leqslant m-1}\sum_{|\gamma|=k} \pm {\alpha \choose \gamma} e^{-ix\cdot \xi } \underbrace{\xi^\gamma \partial^{\alpha-\gamma}\big(c_\alpha(x,\xi)\big)}_{\geqslant d+m-k~\text{次}}\\
&=e^{-ix\cdot \xi }(-1)^m  p_m(x,\xi) c(x,\xi)+e^{-ix\cdot \xi}\sum_{1\leqslant k\leqslant m} c_k(x,\xi).
\end{aligned}
\]
按照定义，每个$c_\alpha(x,\xi)$与$c(x,\xi)$满足同样的性质，从而命题成立。
:::

注意到，我们想构造$a(x,\xi)$，使得
\[
{}^t P\left(e^{-ix\cdot \xi }a(x,\xi)\right)=e^{-ix\cdot \xi }\varphi(x).
\]
假设$a(x,\xi)$是$d$-次的，根据上面的计算，我们有
\[
e^{-ix\cdot \xi}(-1)^mp_m(x,\xi)a(x,\xi)+e^{-ix\cdot \xi }O(d+m-1)=e^{-ix\cdot \xi }\varphi(x),
\]
其中，$O(d+m-1)$代表的是一些次数至多为$d+m-1$次（关于$\xi$）的齐次函数的和。我们如果令
\[
a_0(x,\xi)=b_0(x,\xi)=\frac{(-1)^m}{p_m(x,\xi)}\varphi(x),
\]
其中，我们假设$(x,\xi)\in K\times \Gamma(\xi_0,\beta)$（从而，$p_m(x,\xi)\neq 0$）
那么，（此时$d=-m$）
\[
{}^t P\left(e^{-ix\cdot \xi }b_0(x,\xi)\right)-e^{-ix\cdot \xi }\varphi(x)=e^{-ix\cdot \xi }R_0(x,\xi),
\]
那么，$R_0(x,\xi)\in C^\infty\big(K\times \Gamma(\xi_0,\beta)\big)$并且如果$x\notin K$，
那么$R_0(x,\xi)=0$。
进一步，$R_0(x,\xi)$对是有限个$\xi$的次数$\leqslant -1$的齐次函数的和。

我们对$a_0(x,\xi)$再加上一个低一次的扰动$b_1(x,\xi)$（从而，次数为$-m-1$），使得
\[
{}^t P\left(e^{-ix\cdot \xi }[b_0(x,\xi)+b_1(x,\xi)]\right)-e^{-ix\cdot \xi }\varphi(x)=e^{-ix\cdot \xi }R_1(x,\xi),
\]
并且$R_1(x,\xi)\in C^\infty\big(K\times \Gamma(\xi_0,\beta)\big)$并且如果$x\notin K$，
那么$R_1(x,\xi)=0$。
进一步，$R_1(x,\xi)$对$\xi$是有限个$\xi$的次数$\leqslant -2$的齐次函数的和。为此，我们计算
\[
\begin{aligned}
&\ \ \ {}^t P\left(e^{-ix\cdot \xi }[b_0(x,\xi)+b_1(x,\xi)]\right)-e^{-ix\cdot \xi }\varphi(x)\\
&=e^{-ix\cdot \xi }R_0(x,\xi)+{}^t P\left(e^{-ix\cdot \xi }b_1(x,\xi)\right)\\
&=e^{-ix\cdot \xi }R_0(x,\xi)+e^{-ix\cdot \xi}(-1)^mp_m(x,\xi)b_1(x,\xi)+O\big((-m-1)+m-1\big).
\end{aligned}
\]
由于$R_0(x,\xi)$是一些次数不超过$-1$的齐次函数的线性组合，
我们单独把$-1$次（如果存在）的齐次函数部分拿出来记作是$R^{(-1)}_0(x,\xi)$。所以，如果令
\[
b_1(x,\xi)=\frac{(-1)^{m+1}R^{(-1)}_0(x,\xi)}{p_m(x,\xi)},
\]
我们就消去了所有最高次（$-1$次）的项（次数恰好满足要求）。
我们强调，我们是在$(x,\xi)\in K\times \Gamma(\xi_0,\beta)$中做的计算。

重复上述计算，对于每个整数$k\geqslant 0$，我们都可以构造$b_k(x,\xi)$和$R_k(x,\xi)$，使得

- $b_k(x,\xi)\in C^\infty\big(K\times \Gamma(\xi_0,\beta)\big)$并且如果$x\notin K$，
  那么$b_k(x,\xi)=0$。进一步，$b_k(x,\xi)$对$\xi$是次数为$-m-k$的齐次函数。

- $R_k(x,\xi)\in C^\infty\big(K\times \Gamma(\xi_0,\beta)\big)$并且如果$x\notin K$，
  那么$R_k(x,\xi)=0$。进一步，$R_k(x,\xi)$对是有限个$\xi$的次数$\leqslant -k-1$的齐次函数的和。

- 我们有
  \[
  {}^t P\left(e^{-ix\cdot \xi }\sum_{0\leqslant j\leqslant k}b_j(x,\xi)\right)-e^{-ix\cdot \xi }\varphi(x)=e^{-ix\cdot \xi }R_k(x,\xi).
  \]

这里，
\[
a_k(x,\xi)=\sum_{0\leqslant j\leqslant k}b_j(x,\xi)
\]
是我们要找的$a(x,\xi)$的一个好的逼近，我们称作是**拟解**。

::: remark*
在下面的应用中，我们把$K$将换成略小的紧集$K'\subset K$。
:::

### 微局部椭圆正则性定理的证明

我们假设$p_m(x_0,\xi_0)\neq 0$并且$(x_0,\xi_0)\notin WF(Pu)$，那么，存在紧集$K\subset \Omega$，
$x_0\in \Omega$，存在常数$\beta>0$，$C>0$，使得

- 对任意的$(x,\xi)\in K\times \Gamma(\xi_0,\beta)$，我们有
  \[
  |p_m(x,\xi)|\geqslant C |\xi|^m.
  \]

- 对任意的$\varphi \in C_0^\infty(K)$，对任意的整数$N\geqslant 1$，存在$C_N>0$，
  使得对任意的$\xi\in \Gamma(\xi_0,\beta)$，使得
  \[
  |\widehat{\varphi \cdot Pu}(\xi)|\leqslant \frac{C_N}{(1+|\xi|)^N}.
  \]

我们要证明存在紧集合$K'\subset K$，$x_0 \in K$和常数$\beta'<\beta$，
使得对任意的$\varphi \in C_0^\infty(K')$，对任意的整数$N\geqslant 1$，
存在$C'_N>0$，使得对任意的$\xi\in \Gamma(\xi_0,\beta')$，使得
\[
|\widehat{\varphi \cdot u}(\xi)|\leqslant \frac{C'_N}{(1+|\xi|)^N}.
\]

利用前面构造的拟解，我们有
\[
\begin{aligned}
\widehat{\varphi \cdot u}(\xi)&=\big\langle u(x), e^{-ix\cdot \xi}\varphi(x)\big\rangle\\
&=\left\langle u(x), {}^t P\left(e^{-ix\cdot \xi }a_k(x,\xi)\right)-e^{-ix\cdot \xi }R_k(x,\xi)\right\rangle\\
&=\underbrace{\left\langle (Pu)(x), e^{-ix\cdot \xi }a_k(x,\xi)\right\rangle}_{I(\xi)}
-\underbrace{\left\langle u(x), e^{-ix\cdot \xi }R_k(x,\xi)\right\rangle}_{J(\xi)}.
\end{aligned}
\]

首先处理$J(\xi)$。固定$\xi$，我们知道$R_k(x,\xi)$对于$x$是光滑的有紧支集的函数。
利用$u$是分布（的定义），存在常数$C_0$，使得，
\[
|J(\xi)|\leqslant C_0\sup_{|\alpha|\leqslant m,\atop \\ x\in K}\left|\partial^\alpha\left(e^{-ix\cdot \xi}R_k(x,\xi)\right)\right|.
\]
另外，$R_k(x,\xi)$是有限个$\xi$的次数$\leqslant -k-1$的齐次函数的和，
所以，根据Leibniz法则，上面右端出现的是一些次数不超过$m-k-1$的齐次函数的和。
利用$R_k$的光滑性，我们知道存在常数$C_m$，使得
\[
\sup_{|\alpha|\leqslant m-k-1,\atop \\ (x,\xi)\in K\times \mathbf{S}^{n-1}}|\partial^{\alpha}R_k(x,\xi)|\leqslant C_m.
\]
所以，
\[
|J(\xi)|\leqslant \frac{C'_m}{(1+|\xi|)^{m-k-1}},
\]
其中，$k$是任意的正整数。

最后处理$I(\xi)$。我们有
\[
\begin{aligned}
I(\xi)&=\left\langle (Pu)(x), e^{-ix\cdot \xi }a_k(x,\xi)\right\rangle\\
&=\left\langle \varphi(x)(Pu)(x), e^{-ix\cdot \xi } a_k(x,\xi)\right\rangle,
\end{aligned}
\]
其中，$\varphi(x)\in C_0^\infty(K)$在$K'$上恒为$1$。

我们选取相函数$\phi(x,\xi)=x\cdot \xi$，
振幅函数$a_k(x,\xi)$以及被作用函数$f(x)=\varphi\cdot Pu(x)$，
我们来验证它们满足上次证明的非驻相法的引理所要求的基本数据的条件：

(a) $\phi(x,\xi)\in C^\infty\left(\mathbb{R}_x^n\times (\mathbb{R}^n_\xi-\{0\})\right)$是实值的，
    变量$\xi$是$1$次齐次的并且当$\xi\neq 0$时，有$\nabla_x \phi(x,\xi)\neq 0$。

(b) 按照构造，$b_j(x,\xi)\in C^\infty\left(\mathbb{R}_x^n\times (\mathbb{R}^n_\xi-\{0\})\right)$，
    所以，$a_k(x,\xi)\in C^\infty\left(\mathbb{R}_x^n\times (\mathbb{R}^n_\xi-\{0\})\right)$。
    另外，$a_k(x,\xi)$是一些次数不超过$-m-k$的齐次函数的和，并且当$x\notin K'$时，$a_k(x,\xi)=0$。
    类似于上面对$J(\xi)$的估计，取$N_0=-m$，使得对任意的多重指标$\alpha$，存在常数$C_\alpha$，
    使得对任意的$(x,\xi)\in \mathbb{R}_x^n\times (\mathbb{R}^n_\xi-\{0\})$，我们都有
    \[
    \left|\partial^\alpha_x a_k(x,\xi)\right|\leqslant C_\alpha \left(1+|\xi|\right)^{N_0}.
    \]

(c) 很明显，${\rm supp}(f)\subset K$。又因为$(x_0,\xi_0)\notin WF(Pu)$，
    根据我们已知的条件，对任意的$N\geqslant 1$，存在常数$C_N$，
    使得对任意的$\xi \in \Gamma(\xi_0,\beta)$，都有
    \[
    \left|\widehat{f}(\xi)\right|\leqslant \frac{C_{N}}{\left(1+|\xi|\right)^N}.
    \]
    这里，$\eta_0=\dfrac{\xi_0}{|\xi_0|}$，$\alpha_0=\beta$。

现在我们任意选定$\alpha_1=\beta'<\beta=\alpha_0$，$\Gamma_0=\Gamma(\xi_0,\beta')$。
我们只要验证非驻相法的引理的条件即可，即证明对任意的$(x,\xi)\in K \times \Gamma_0$，我们都有
\[
\left|\frac{\nabla_x \phi(x,\xi)}{|\nabla_x \phi(x,\xi)|}-\eta_0\right|<\beta'=\alpha_1.
\]
实际上，由于
\[
\frac{\nabla_x \phi(x,\xi)}{|\nabla_x \phi(x,\xi)|}=\frac{\xi}{|\xi|},
\]
所以，这是显然的。

此时，引理的结论表明，对任意的$N\geqslant 1$，存在$C_N>0$，使得对任意的$\xi \in \Gamma_0$，有
\[
\left|I(\xi)\right|\leqslant \frac{C_{N}}{\left(1+|\xi|\right)^N}.
\]

综合$I(\xi)$和$J(\xi)$的估计，我们就证明了微局部版本的椭圆正则性定理。
