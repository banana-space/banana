---
title: 热核与热方程的基本性质
---

## 热核的构造

对任意的$t>0$，对任意的$(x,y)\in\Omega\times \Omega$，我们定义
\[
p(t,x,y)=\sum_{k\geqslant 1} e^{-\lambda_k t}\varphi_k(x)\overline{\varphi_k(y)}.
\]
我们已经证明了$\lambda_k$具有多项式的增长并且$\varphi_k\in C^\infty(\Omega)$，所以，
上面的级数是（逐点）绝对收敛的（我们可以证明给定点$x\in \Omega$，$\varphi_k(x)$对$k$是多项式衰减的，
不过这个级数是逐点绝对收敛的这一点我们之后并不需要）。

我们首先证明，对任意的$t\geqslant 0$时（包括$0$），
$p(t,x,y)$定义出$\mathcal{D}'(\Omega\times \Omega)$中的一个元素：
对任意的$\phi(x,y)\in \mathcal{D}(\Omega\times \Omega)$，要定义
\[
\left\langle\sum_{k\geqslant 1} e^{-\lambda_k t}\varphi_k(x)\overline{\varphi_k(y)},\phi(x,y)\right\rangle_{\mathcal{D}'(\Omega\times \Omega)\times \mathcal{D}(\Omega\times \Omega)}.
\]
为此，我们先理解其中一项$\varphi_k(x)\overline{\varphi_k(y)}$的贡献。由于这是一个光滑函数，所以
\[
I_k=\left\langle \varphi_k(x)\overline{\varphi_k(y)},\phi(x,y)\right\rangle=\int_{\Omega\times \Omega} \varphi_k(x)\overline{\varphi_k(y)}\phi(x,y)dxdy.
\]
根据Cauchy–Schwarz不等式，我们有
\[
\begin{aligned}
|I_k|&\leqslant \|\varphi_k(x)\overline{\varphi_k(y)}dx\|_{L^2(\Omega\times \Omega)} \|\phi(x,y)\|_{L^2(\Omega\times \Omega)}.
\end{aligned}
\]
由于$\varphi_k(x)$是单位化的，所以
\[
|I_k|\leqslant\|\phi(x,y)\|_{L^2(\Omega\times \Omega)}.
\]
另外，我们可以把$I_k$写成
\[
\begin{aligned}
I_k=\frac{1}{\lambda_k^2}\int_{\Omega\times \Omega}  (-\triangle_x \varphi_k(x))\left(\overline{-\triangle_y\varphi_k(y)}\right)\phi(x,y)dxdy.
\end{aligned}
\]
由于上述$\phi(x,y)$的支集是紧的并且所有的函数都是光滑的，所以，
我们可以进行分部积分（这恰好就是证明Riemann–Lebesgue引理的想法！）来得到
\[
\begin{aligned}
I_k=\frac{1}{\lambda_k^2}\int_{\Omega\times \Omega}    \varphi_k(x) \overline{ \varphi_k(y)}(\triangle_x\triangle_y\phi)(x,y)dxdy.
\end{aligned}
\]
重复这个过程，对于正偶数$2N$，我们有
\[
\begin{aligned}
I_k=\frac{1}{\lambda_k^{2N}}\int_{\Omega\times \Omega}    \varphi_k(x) \overline{ \varphi_k(y)}(\triangle_x^N\triangle_y^N\phi)(x,y)dxdy.
\end{aligned}
\]
我们已经证明过$\lambda_k \geqslant c k^{\frac{2}{n}}$，下面我们将选取$N=n$（这当然不是最优的）。
现在假设${\rm supp}\phi(x,y)\subset K$，那么，重复上面对于$I_k$的控制，我们就有
\[
\begin{aligned}
 | I_k|\leqslant \frac{1}{\lambda_k^{2N}}\|\triangle_x^N\triangle_y^N\phi)(x,y)\|_{L^2(K)} \leqslant \frac{1}{\lambda_k^{2N}}\sup_{(x,y)\in K,
\atop |\alpha|\leqslant 2N_0}|\partial^{\alpha}\phi(x,y)|
 \end{aligned}
\]
所以，我们定义
\[
\begin{aligned}
\left\langle\sum_{k\geqslant 1} e^{-\lambda_k t}\varphi_k(x)\overline{\varphi_k(y)},\phi(x,y)\right\rangle&:=\sum_{k\geqslant 1} e^{-\lambda_k t}\left\langle\varphi_k(x)\overline{\varphi_k(y)},\phi(x,y)\right\rangle\\
&=\lim_{m\rightarrow \infty}\sum_{k=1}^{m} e^{-\lambda_k t}\left\langle\varphi_k(x)\overline{\varphi_k(y)},\phi(x,y)\right\rangle\\
 &=\lim_{m\rightarrow \infty}\sum_{k=1}^{m} e^{-\lambda_k t}I_k.
\end{aligned}
\]
由于当$N=n$时，${\lambda_k^{-2N}}$是绝对可和的，所以，上面是良好定义的。
另外，根据$I_k$的估计，我们还有
\[
\begin{aligned}
  \left|\left\langle\sum_{k\geqslant 1} e^{-\lambda_k t}\varphi_k(x)\overline{\varphi_k(y)},\phi(x,y)\right\rangle\right|&\leqslant   \sum_{k=1}^{\infty} e^{-\lambda_k t}|I_k|\\
  &\leqslant C \sup_{(x,y)\in K,
\atop |\alpha|\leqslant 2N}|\partial^{\alpha}\phi(x,y)|.
  \end{aligned}
\]
这表明我们定义出了$\mathcal{D}'(\Omega\times\Omega)$中的分布。

我们注意到，上面所得（$I_k$的）估计是不依赖于$t$。所以，对于任意的试验函数
\[
\phi(t,x,y)\in \mathcal{D}\big((0,\infty)\times \Omega\times \Omega\big),
\]
我们可以定义
\[
\begin{aligned}
 \left\langle\sum_{k\geqslant 1} e^{-\lambda_k t}\varphi_k(x)\overline{\varphi_k(y)},\phi(t,x,y)\right\rangle&:=\sum_{k\geqslant 1} \int_{0}^\infty e^{-\lambda_k t}\left\langle\varphi_k(x)\overline{\varphi_k(y)},\phi(t, x,y)\right\rangle dt\\
 &=\lim_{m\rightarrow \infty}\sum_{k=1}^{m} \int_{0}^\infty e^{-\lambda_k t}\left\langle\varphi_k(x)\overline{\varphi_k(y)},\phi(t,x,y)\right\rangle dt.
\end{aligned}
\]
我们假设${\rm supp}(\phi(t,x,y))\subset J\times K$，其中$J\subset (0,\infty)$是紧集，
$K\subset \Omega\times \Omega$是紧集，那么，根据之前的证明
\[
\begin{aligned}\left|\left\langle\varphi_k(x)\overline{\varphi_k(y)},\phi(t,x,y)\right\rangle\right|&\leqslant  \frac{1}{\lambda_k^{2N}}\sup_{(x,y)\in K,
\atop |\alpha|\leqslant 2N}|\partial^{\alpha}_{x,y}\phi(t,x,y)| \\
&\leqslant  \frac{1}{\lambda_k^{2N}}\sup_{(t,x,y)\in J\times K,\atop |\alpha|\leqslant 2N}|\partial^{\alpha}_{x,y}\phi(t,x,y)|
\end{aligned}
\]
从而，我们有如下（很粗糙）的估计：
\[
\left|\int_{0}^\infty e^{-\lambda_k t}\left\langle\varphi_k(x)\overline{\varphi_k(y)},\phi(t,x,y)\right\rangle dt\right|\leqslant \frac{|J|}{\lambda_k^{2N}}\sup_{(t,x,y)\in J\times K,\atop |\alpha|\leqslant 2N_0}|\partial^{\alpha}_{x,y}\phi(t,x,y)|.
\]
上面的右边对$k$是可和的，所以，我们就有
\[
\begin{aligned}
  \left|\left\langle\sum_{k\geqslant 1} e^{-\lambda_k t}\varphi_k(x)\overline{\varphi_k(y)},\phi(t,x,y)\right\rangle\right|
  &\leqslant C_{J,K} \sup_{(t,x,y)\in J\times K,
\atop |\alpha|\leqslant 2N_0}|\partial_{x,y}^{\alpha}\phi(t,x,y)|.
  \end{aligned}
\]
这说明
\[
p(t,x,y)\in \mathcal{D}'\big((0,\infty)\times \Omega\times \Omega\big).
\]

根据定义，作为$(0,\infty)\times \mathcal{D}\times \mathcal{D}$上的分布，我们有
\[
\begin{aligned}
 \sum_{k\geqslant 1} e^{-\lambda_k t}\varphi_k(x)\overline{\varphi_k(y)} \stackrel{\mathcal{D}'}{=}\lim_{m\rightarrow \infty}\sum_{k=1}^{m}  e^{-\lambda_k t}\varphi_k(x)\overline{\varphi_k(y)}.
\end{aligned}
\]
由于在分布的意义下，求导数与极限是可以交换的，所以，我们可以逐项求导，从而
\[
\begin{aligned}
&\left(\partial_t-\frac{1}{2}\left(\triangle_x+\triangle_y\right)\right)\left(\sum_{k\geqslant 1} e^{-\lambda_k t}\varphi_k(x)\overline{\varphi_k(y)}\right) \\
=&\lim_{m\rightarrow \infty}\sum_{k=1}^{m}  \left(\partial_t-\frac{1}{2}\left(\triangle_x+\triangle_y\right)\right)\left(e^{-\lambda_k t}\varphi_k(x)\overline{\varphi_k(y)}\right)\\
=& \lim_{m\rightarrow \infty}\sum_{k=1}^{m}  -\lambda_k e^{-\lambda_k t}\varphi_k(x)\overline{\varphi_k(y)}+\frac{\lambda_k}{2} e^{-\lambda_k t}\varphi_k(x)\overline{\varphi_k(y)}+\frac{\lambda_k}{2} e^{-\lambda_k t}\varphi_k(x)\overline{\varphi_k(y)}\\
=&0.
\end{aligned}
\]
这就说明了作为$(0,\infty)\times \mathcal{D}\times \mathcal{D}$上的分布，
热核$p(t,x,y)$满足如下的方程：
\[
\left(\partial_t-\frac{1}{2}\left(\triangle_x+\triangle_y\right)\right)p(t,x,y)=0.
\]

::: remark* [热核的两个看法]
到目前为止，我们对热核$p(t,x,y)$有两种看法：

- $p(t,x,y)$是映射
  \[
  [0,+\infty)\rightarrow \mathcal{D}'(\Omega\times\Omega), \ \ t\mapsto p(t,x,y).
  \]

- $p(t,x,y)$是$(0,\infty)\times \mathcal{D}\times \mathcal{D}$上的分布。

:::

可以把热核函数$p(t,x,y)$视作是映射
\[
[0,+\infty)\rightarrow \mathcal{D}'(\Omega\times\Omega), \ \ t\mapsto p(t,x,y).
\]
我们现在证明，这个映射是连续映射，即对任意的$\{t_j\}_{j\geqslant 1}\subset [0,+\infty)$，
$t_k\rightarrow t_0$，在分布的意义下，我们有
\[
p(t_k,x,y)\stackrel{\mathcal{D}'(\Omega\times\Omega)}{\longrightarrow} p(t_0,x,y).
\]
按照定义，对任意的$\phi(x,y)\in \mathcal{D}(\Omega\times\Omega)$，我们要证明如下的极限即可：
\[
\begin{aligned}
  \lim_{j\rightarrow \infty}\left\langle\sum_{k\geqslant 1} e^{-\lambda_k t_j}\varphi_k(x)\overline{\varphi_k(y)},\phi(x,y)\right\rangle -\left\langle\sum_{k\geqslant 1} e^{-\lambda_k t_0}\varphi_k(x)\overline{\varphi_k(y)},\phi(x,y)\right\rangle =0.
\end{aligned}
\]
这等价于证明
\[
\sum_{k\geqslant 1} e^{-\lambda_k t_j}\int_{\Omega\times \Omega}\varphi_k(x)\overline{\varphi_k(y)}\phi(x,y)dxdy\rightarrow \sum_{k\geqslant 1} e^{-\lambda_k t_0}\int_{\Omega\times \Omega}\varphi_k(x)\overline{\varphi_k(y)}\phi(x,y)dxdy.
\]
刚才的证明表明，
\[
\begin{aligned}
&\left|\sum_{k\geqslant 1} \left(e^{-\lambda_k t_j}-e^{-\lambda_{k} t_0}\right)\int_{\Omega\times \Omega}\varphi_k(x)\overline{\varphi_k(y)}\phi(x,y)dxdy\right|\\
\leqslant& \left|\sum_{k\geqslant 1} \left(e^{-\lambda_k t_j}-e^{-\lambda_{k} t_0}\right)|I_k|\right| \rightarrow 0.
\end{aligned}
\]
最后一步因为$|I_k|$是绝对可和的（Lebesgue控制收敛）。所以，我们证明了
\[
p(t,x,y)\in C^0\left([0,+\infty), \mathcal{D}'(\Omega\times \Omega)\right).
\]
我们还可以计算$p(0,x,y) \in  \mathcal{D}'(\Omega\times \Omega)$：
任选$f(x)g(y)\in \mathcal{D}(\Omega)\otimes  \mathcal{D}(\Omega)$（在
$\mathcal{D}(\Omega\times \Omega)$中稠密），假设
\[
f(x)\stackrel{L^2}{=}\sum_{k=1}^\infty a_k \varphi_k(x), \ \ g(x)\stackrel{L^2}{=}\sum_{k=1}^\infty b_k \varphi_k(x),
\]
那么，
\[
\begin{aligned}
\langle p(0,x,y),f(x)g(y)\rangle&=\sum_{k=1}^\infty \big\langle\varphi_k(x)\overline{\varphi_k(y)}, f(x)\otimes g(y) \big\rangle\\
&=\sum_{k=1}^\infty  (g,\varphi_k)_{L^2}\overline{(\overline{f},\varphi_k)_{L^2}} \\
&=\sum_{k=1}^\infty b_k \overline{a_k}=\int_{\Omega}f(x) g(x)dx.
\end{aligned}
\]
所以，
\[
p(0,x,y)=\delta(x-y).
\]

我们下面说明，对任意的$t>0$，函数$p(t,x,y)$是光滑函数。

我们任选$\chi(x,y)\in C_0^\infty(\Omega \times \Omega)$，其中$\chi(x,y)=\chi(x)\chi(y)$，
我们假设${\rm supp}(\chi(x,y))=K$。那么，作为分布，我们有
\[
\chi(x,y)p(t,x,y)=\sum_{k\geqslant 1} e^{-\lambda_k t}\chi(x,y)\varphi_k(x)\overline{\varphi_k(y)}
\]
首先，
\[
\begin{aligned}
\|\chi(x,y)p(t,x,y)\|_{L^2(\Omega \times \Omega)}&\leqslant \sum_{k\geqslant 1} e^{-\lambda_k t}\|\varphi_k(x)\overline{\varphi_k(y)}\|_{L^2}\|\chi\|_{L^\infty}\\
&=\|\chi\|_{L^\infty}\sum_{k\geqslant 1} e^{-\lambda_k t}\\
&<\infty.
\end{aligned}
\]
这里，我们用到了$e^{-\lambda_kt}$对于$k$是指数衰减的。

其次，
\[
\nabla_x\left(\chi(x,y)p(t,x,y)\right)=\sum_{k\geqslant 1} e^{-\lambda_k t}\left(\nabla_x\chi(x,y)\varphi_k(x)\overline{\varphi_k(y)}+\chi(x,y)\nabla_x\varphi_k(x)\overline{\varphi_k(y)}\right)
\]
所以，
\[
\begin{aligned}
\|\nabla_x(\chi(x,y)p(t,x,y))\|_{L^2(\Omega \times \Omega)}&\leqslant \sum_{k\geqslant 1} e^{-\lambda_k t} \|\varphi_k(x)\overline{\varphi_k(y)}\|_{L^2}\|\nabla\chi\|_{L^\infty}\\
&\ \ \  +\sum_{k\geqslant 1} e^{-\lambda_k t}\|\chi(x)\nabla \varphi_k(x)\|_{L^2}\\
&\leqslant \sum_{k\geqslant 1} e^{-\lambda_k t} \|\nabla \chi\|_{L^\infty}+\sum_{k\geqslant 1} e^{-\lambda_k t}\|\chi(x)\nabla \varphi_k(x)\|_{L^2}
\end{aligned}
\]
和第一步类似，我们只需要控制$\|\chi(x)\nabla \varphi_k(x)\|_{L^2(\Omega)}$：
\[
\begin{aligned}
\|\chi(x)\nabla \varphi_k(x)\|_{L^2(\Omega)}^2&=\int_\Omega \chi(x)^2 \nabla \varphi_k(x) \overline{\nabla \varphi_k(x)}.
\end{aligned}
\]
现在都是光滑函数的等式，并且由于有了$\chi$作为截断函数，
上面的式子实际上与$\partial \Omega$是没有关系的，所以，我们可以进行分部积分：
\[
\begin{aligned}
\|\chi(x)\nabla \varphi_k(x)\|_{L^2(\Omega)}^2&=-\int_\Omega \nabla(\chi(x)^2)  \nabla \varphi_k(x) \overline{\varphi_k(x)}-\int_\Omega \chi(x)^2  \triangle \varphi_k(x) \overline{\varphi_k(x)}\\
&=-2\int_\Omega \left(\varphi_k\nabla \chi\right)\cdot  \overline{\left(\chi\cdot \nabla \varphi_k\right)}+\lambda_k \int_\Omega \chi(x)^2  \varphi_k(x) \overline{\varphi_k(x)}\\
&\leqslant 2\|\varphi_k\nabla \chi\|^2_{L^2(\Omega)}+ \frac{1}{2}\|\chi\cdot \nabla \varphi_k\|^2_{L^2(\Omega)}+\lambda_k\|\chi\varphi_k\|^2_{L^2(\Omega)}.
\end{aligned}
\]
在最后一步中，我们用了如下初等的不等式：
\[
2ab\leqslant \lambda a^2+\frac{1}{\lambda}b^2,
\]
其中$\lambda>0$可以任意选取（我们选取了$\lambda=2$）。
注意到，上面不等式右边的第二项恰好是不等式左边的项，并且其系数小于$1$，所以，它可以被左边“吃掉”，
从而得到
\[
\begin{aligned}
\|\chi(x)\nabla \varphi_k(x)\|_{L^2(\Omega)}^2&\leqslant 4\|\varphi_k\nabla \chi\|^2_{L^2(\Omega)}+2\lambda_k\|\chi\varphi_k\|^2_{L^2(\Omega)}\\
&\leqslant (4+2\lambda_k)C_1^2.
\end{aligned}
\]
其中，
\[
C_m=\sup_{x\in K,|\alpha|\leqslant m}\|\partial^\alpha \chi\|_{L^\infty}.
\]
代入到之前的等式中，利用$e^{-\lambda_k t}$是指数衰减的，我们就知道
\[
\sum_{k\geqslant 1} e^{-\lambda_k t}\|\chi(x)\nabla \varphi_k(x)\|_{L^2}<\infty.
\]
这就证明了
\[
\|\nabla_x(\chi(x,y)p(t,x,y))\|_{L^2(\Omega \times \Omega)}<\infty.
\]
利用$x$与$y$之间的对称性，我们就知道
\[
\chi(x,y)p(t,x,y)\in H^1(\Omega \times \Omega).
\]

为了证明$\chi(x,y)p(t,x,y)\in H^m(\Omega \times \Omega)$，我们先做如下的准备：利用分部积分，我们有
\[
\begin{aligned}
\|\chi(x)\nabla \partial^\alpha \varphi_k(x)\|_{L^2(\Omega)}^2&=-\int_\Omega \nabla(\chi(x)^2) \cdot \nabla \partial^\alpha \varphi_k(x) \overline{\partial^\alpha \varphi_k(x)}-\int_\Omega \chi(x)^2  \triangle \partial^\alpha \varphi_k(x) \overline{\partial^\alpha\varphi_k(x)}\\
&=-2\int_\Omega \left(\partial^\alpha\varphi_k\nabla \chi\right)\cdot  \overline{\left(\chi\cdot \nabla \partial^\alpha\varphi_k\right)}+\lambda_k \int_\Omega \chi(x)^2  \partial^\alpha\varphi_k(x) \overline{\partial^\alpha\varphi_k(x)}\\
&\leqslant 2\|\partial^\alpha\varphi_k\nabla \chi\|^2_{L^2(\Omega)}+ \frac{1}{2}\|\chi\cdot \nabla \partial^\alpha\varphi_k\|^2_{L^2(\Omega)}+\lambda_k\|\chi\partial^\alpha\varphi_k\|^2_{L^2(\Omega)}.
\end{aligned}
\]
所以，
\[
\begin{aligned}
\|\chi(x)\nabla \partial^\alpha \varphi_k(x)\|_{L^2(\Omega)}^2&\leqslant 4\|\partial^\alpha\varphi_k\nabla \chi\|^2_{L^2(\Omega)}+ 2\lambda_k\|\chi\partial^\alpha\varphi_k\|^2_{L^2(\Omega)}.
\end{aligned}
\]
对$|\alpha|=m$求和，我们就得到
\[
\begin{aligned}
\|\chi(x)\nabla^{m+1} \varphi_k(x)\|_{L^2(\Omega)}^2&\leqslant 4\|\nabla \chi \cdot \nabla^m \varphi_k\|^2_{L^2(\Omega)}+ 2\lambda_k\|\chi\nabla^m\varphi_k\|^2_{L^2(\Omega)}.
\end{aligned}
\]
据此进行迭代，我们就得到
\[
\begin{aligned}
\|\chi(x)\nabla^{m} \varphi_k(x)\|_{L^2(\Omega)}^2&\lesssim_m C_m\lambda_k^m \| \varphi_k\|^2_{L^2(\Omega)}.
\end{aligned}
\]
此时，
\[
\begin{aligned}
&\ \ \ \nabla_x^{m_1}\nabla_y^{m_2}\left(\chi(x,y)p(t,x,y)\right)\\
&=\sum_{k\geqslant 1} e^{-\lambda_k t}\sum_{|\alpha_1|+|\alpha_2|= m_1,\atop |\beta_1|+|\beta_2|= m_2} \nabla^{\alpha_1} \chi(x)\nabla^{\alpha_2}\varphi_k(x)\overline{\nabla^{\beta_1}\chi(y)\nabla^{\beta_2}\varphi_k(y)}\\
&=\sum_{k\geqslant 1} e^{-\lambda_k t}\sum_{|\alpha_1|+|\alpha_2|= m_1, |\beta_1|+|\beta_2|= m_2, \atop |\alpha_2|<m,|\beta_2|<m} \nabla^{\alpha_1} \chi(x)\nabla^{\alpha_2}\varphi_k(x)\overline{\nabla^{\beta_1}\chi(y)\nabla^{\beta_2}\varphi_k(y)}\\
&\ \ +\sum_{k\geqslant 1} e^{-\lambda_k t}  \chi(x)^2 \nabla^{m}\varphi_k(x)\overline{\varphi_k(y)}+\sum_{k\geqslant 1} e^{-\lambda_k t}  \chi(x)^2 \varphi_k(x)\overline{\nabla^{m}\varphi_k(y)}
\end{aligned}
\]
第一个求和中的项的导数个数不超过$m-1$，可以利用归纳法来解决，对于后面两项，
它们的贡献可以被下面不等式控制
\[
\begin{aligned}
&\|\sum_{k\geqslant 1} e^{-\lambda_k t}  \chi(x)^2 \nabla^{m}\varphi_k(x)\overline{\varphi_k(y)}+\sum_{k\geqslant 1} e^{-\lambda_k t}  \chi(x)^2 \varphi_k(x)\overline{\nabla^{m}\varphi_k(y)}\|_{L^2}\\
&\lesssim_m \sum_{k\geqslant 1} e^{-\lambda_k t} C_m\lambda_k^m \| \varphi_k\|^2_{L^2(\Omega)}.
\end{aligned}
\]
利用$e^{-\lambda_k t}$的指数衰减，上面的求和是有限的。

综上所述，我们证明了对任意的$t>0$，任意的$m$，$\chi(x,y)p(t,x,y) \in H^m(\mathbb{R}^n)$，所以，
根据Sobolev嵌入定理，我们就知道$\chi p(t,x,y)\in C^\infty(\Omega\times \Omega)$。
由于光滑性是局部性质，所以我们就证明了对任意的$t>0$，
我们$p(t,x,y)\in C^\infty(\Omega\times \Omega)$。

由于热核$p(t,x,y)$在$(0,\infty)\times \Omega \times \Omega$满足如下的方程：
\[
\left(\partial_t-\frac{1}{2}\left(\triangle_x+\triangle_y\right)\right)p(t,x,y)=0,
\]
所以，对于任意的$m$和任意的多重指标$\alpha$，我们还有
\[
\partial^m_t \partial^\alpha p(t,x,y)=\left(\frac{1}{2}\left(\triangle_x+\triangle_y\right)\right)^m \partial^\alpha p(t,x,y)\in C_{x,y}^\infty(\Omega\times \Omega).
\]
这就说明了
\[
p(t,x,y)\in C^\infty\big((0,\infty)\times \Omega \times \Omega\big).
\]

::: remark*
关于$p(t,x,y)$的光滑性我们还可以仿照Cauchy–Riemann方程的情况进行证明：我们注意到
\[
E(t,x,y)=\frac{H(t)}{(2\pi t)^{n}}e^{-\frac{|x|^2+|y|^2}{2t}}
\]
是$C^\infty(\mathbb{R}^1 \times \mathbb{R}^n\times \mathbb{R}^n-\{0\})$上的光滑函数并且
\[
\left(\partial_t-\frac{1}{2}\left(\triangle_x+\triangle_y\right)\right)E(t,x,y)=\delta_0,
\]
其中，$0$代表的是$\mathbb{R}^1 \times \mathbb{R}^n\times \mathbb{R}^n$上的原点。
令$P=\partial_t-\dfrac{1}{2}\left(\triangle_x+\triangle_y\right)$，我们先证明如下的引理：
:::

::: lemma
给定有紧支集的分布$c\in \mathcal{E}'(\mathbb{R}^1 \times \mathbb{R}^n\times \mathbb{R}^n)$，那么，
$\displaystyle E*c$在$c$的支集之外是光滑的，即
\[
\displaystyle E*c \in C^\infty \left(\mathbb{R}^1 \times \mathbb{R}^n\times \mathbb{R}^n-{\rm supp}(c)\right).
\]
:::

::: proof
选取非负的$\chi$，
使得它的支集在半径为$1$的小球（在$\mathbb{R}^1 \times \mathbb{R}^n\times \mathbb{R}^n$
中的）内并且其积分恰等于$1$。我们把$E*c$写成两部分：
\[
u=E*c=\underbrace{\left( \chi_\varepsilon \cdot E\right)*c}_{\text{支集}~\subset~B_{\varepsilon}+{\rm supp}(c)}+\underbrace{\left((1-\chi_\varepsilon)E\right)*c}_{\text{光滑}}.
\]
根据支集在卷积下的关系，以上两部分的支集有上面的表达。
所以，
$u$至少在$\mathbb{R}^1 \times \mathbb{R}^n\times \mathbb{R}^n-B_{\varepsilon}-{\rm supp}(c)$上光滑。
令$\varepsilon \rightarrow 0$，我们就说明了$u$在$ {\rm supp}(c)$之外光滑。
:::

现在可以证明$p(t,x,y)$在$(0,+\infty)\times \Omega\times \Omega$上光滑，
即证明$u$在每个点的附近为光滑函数即可：
我们任选点$(t_0,x_0,y_0)\in (0,+\infty)\times \Omega\times \Omega$以及$(t_0,x_0,y_0)$处的一个半径为
$2\varepsilon$小开球$B(2\varepsilon)$，
使得$B(2\varepsilon)\subset (0,+\infty)\times \Omega\times \Omega$，其中$\varepsilon>0$。
然后，选取$\mathbb{R}\times \mathbb{R}^n\times \mathbb{R}^n$上的光滑函数$\theta(z)$，使得
\[
\begin{cases}
&0\leqslant \theta(z) \leqslant 1, ~\text{对任意的}~z\in \mathbb{R}\times \mathbb{R}^n\times \mathbb{R}^n；\\
&\theta\big|_{B(0,\varepsilon)}\equiv 1;\\
&\theta\big|_{\mathbb{R}\times \mathbb{R}^n\times \mathbb{R}^n-B(0,2\varepsilon)}\equiv 0.
\end{cases}
\]
根据上面的构造，我们知道，
\[
\partial_t \theta\big|_{B(\varepsilon)}\equiv\partial_x \theta\big|_{B(\varepsilon)}\equiv \partial_y \theta\big|_{B(\varepsilon)} \equiv 0.
\]
我们只需要证明$\theta \cdot p(t,x,y)$光滑即可，因为这就说明$p(t,x,y)$在$B(\varepsilon)$上光滑。

利用卷积的基本性质，我们有如下的计算
\[
\begin{aligned}
\theta \cdot p(t,x,y) &= \delta_0*(\theta \cdot p(t,x,y))=P(E)*(\theta \cdot p)\\
&=E*\big(P(\theta \cdot p)\big)\\
&=E*\big((P\theta)\cdot p-\nabla_x \theta\nabla_x p-\nabla_y \theta\nabla_y p\big).
\end{aligned}
\]
所以$\theta\cdot p$在
${\rm supp}\big((P\theta)\cdot p-\nabla_x \theta\nabla_x p-\nabla_y \theta\nabla_y p\big)$
之外是光滑的。由于
\[
\big((P\theta)\cdot p-\nabla_x \theta\nabla_x p-\nabla_y \theta\nabla_y p\big)\Big|_{B(\varepsilon)}\equiv 0,
\]
从而，$\theta \cdot p$在$B(\varepsilon)$上光滑。

## 热核解线性热方程

利用热核，我们可以解热方程：

```math {@heat-equation-on-Omega}
\begin{cases}
&\partial_t u-\triangle u =0,\\
&u\big|_{t=0}=u_0.
\end{cases}
```

::: remark*
这个基本的想法很可能就是Fourier本人的观点：我们把$u_0$分解为最基本的波函数的组合：
\[
u_0=\sum_{k=1}^\infty c_k \varphi_k(x).
\]
对一个基本的频率而言，我们知道
\[
(\partial_t-\triangle)\left(e^{-t\lambda_k}\varphi_k(x)\right)=0.
\]
所以，我们希望$u(t,x)$就是这些基本的波函数的组合，从而，
\[
\begin{aligned}
u(t,x)&=\sum_{k=1}^\infty c_k e^{-t\lambda_k}\varphi_k(x)\\
&=\sum_{k=1}^\infty (u_0(y),\varphi_k(y))_{L^2} e^{-t\lambda_k}\varphi_k(x)\\
&=\sum_{k=1}^\infty\int_{\Omega}u_0(y)\overline{\varphi_k(y)}dy e^{-t\lambda_k}\varphi_k(x).
\end{aligned}
\]
所以，在形式上，我们就有
\[
\begin{aligned}
u(t,x)&=\int_{\Omega}\sum_{k=1}^\infty u_0(y)\overline{\varphi_k(y)}e^{-t\lambda_k}\varphi_k(x) dy\\
&=\int_\Omega p(t,x,y)u_0(y)dy.
\end{aligned}
\]
:::

我们现在做严格的推导。

如果$u_0\in L^2(\Omega)$，我们假设
\[
u_0(x)=\sum_{k=1}^\infty c_k \varphi_k(x),
\]
其中，$\displaystyle \sum_{k=1}^\infty |c_k|^2<\infty$。
此时，对任意的$t\geqslant 0$，我们首先定义
\[
u(t,x)=\sum_{k=1}^\infty c_k e^{-t\lambda_k}\varphi_k(x).
\]
很明显，对任意的$t\geqslant 0$，$u(t,x)\in L^2(\Omega)$（算系数的平方和）。
其次，由于$t>0$时，$\{e^{-t\lambda_k}\}_{k\geqslant 1}$对于$k$是指数衰减的，所以，
$u(t,x)\in H^1_0(\Omega)$，其中$t>0$（用$H^1_0(\Omega)$的刻画）。

我们现在把$u(t,x)$视作是$(0,+\infty)\times\Omega$上的分布：
对于任意的试验函数$\phi(t,x)\in \mathcal{D}\big((0,\infty)\times \Omega\big)$，我们可以定义
\[
\begin{aligned}
\langle u,\phi\rangle= \left\langle\sum_{k\geqslant 1} c_ke^{-\lambda_k t}\varphi_k(x),\phi(t,x)\right\rangle&:=\sum_{k\geqslant 1} c_k \int_{0}^\infty e^{-\lambda_k t}\left\langle\varphi_k(x),\phi(t, x)\right\rangle dt\\
 &=\lim_{m\rightarrow \infty}\sum_{k=1}^{m} c_k \int_{0}^\infty e^{-\lambda_k t}\left\langle\varphi_k(x),\phi(t,x)\right\rangle dt.
\end{aligned}
\]
我们假设${\rm supp}(\phi(t,x))\subset J\times K$，其中$J=[t_*,T_*]\subset (0,\infty)$是紧集，
$K\subset \Omega\times \Omega$是紧集。那么，根据Cauchy–Schwarz不等式
\[
\begin{aligned}\left|\left\langle\varphi_k(x),\phi(t,x)\right\rangle\right|&\leqslant \|\phi(t,x)\|_{L^2(K)}\leqslant |K|^\frac{1}{2}\sup_{x\in K}|\phi(t,x)|.
\end{aligned}
\]
从而，我们有如下估计：
\[
\begin{aligned}
\left|\int_{0}^\infty e^{-\lambda_k t}\left\langle\varphi_k(x),\phi(t,x)\right\rangle\right|&\leqslant  |K|^\frac{1}{2}\sup_{(t,x)\in J\times K}|\phi(t,x)|\int_{t_*}^{T_*}e^{-\lambda_k t}\\
&\leqslant \frac{|K|^\frac{1}{2}e^{-\lambda_k t_*}}{\lambda_k}\sup_{(t,x)\in J\times K}|\phi(t,x)|.
\end{aligned}
\]
因为$e^{-\lambda_k t_*}$仍然提供了指数衰减，所以下面式子右边对$k$是绝对可和的。从而
\[
\begin{aligned}
\left|\left\langle\sum_{k\geqslant 1} e^{-\lambda_k t}\varphi_k(x),\phi(t,x)\right\rangle\right|
&\leqslant \sum_{k\geqslant 1}c_k \frac{|K|^\frac{1}{2}e^{-\lambda_k t_*}}{\lambda_k}\sup_{(t,x)\in J\times K}|\phi(t,x)|\\
&\leqslant C(J,K,u_0)\sup_{(t,x)\in J\times K}|\phi(t,x)|.
\end{aligned}
\]
这说明
\[
u(t,x)\in \mathcal{D}'\big((0,\infty)\times \Omega\big).
\]
类似地，利用求导数与分布的极限可以交换，作为$(0,\infty)\times \Omega$的分布，我们就有
\[
(\partial_t-\triangle)u(t,x)\stackrel{\mathcal{D'}}{=}0.
\]
我们可以采用上次课上证明$p(t,x,y)$在$(0,\infty)\times \Omega\times \Omega$
上光滑的同样方法（仿照Cauchy–Riemann方程的情况）直接说明
$u(t,x)\in C^\infty((0,\infty)\times \Omega)$，证明的细节留给不放心的同学来验证。

我们再来证明
\[
\lim_{t\rightarrow 0^+}u(t,x)\stackrel{L^2}{=}u_0(x).
\]
实际上，我们有
\[
\begin{aligned}
\| u(t,x)-u_0(x)\|^2_{L^2(\Omega)}=\sum_{k=1}^\infty |c_k|^2(e^{-\lambda_kt}-1)^2.
\end{aligned}
\]
利用Lebesgue控制收敛，我们就有
\[
\begin{aligned}
\lim_{t\rightarrow 0^+}\| u(t,x)-u_0(x)\|_{L^2(\Omega)}=0.
\end{aligned}
\]
很明显，对任意的$t>0$，我们有$u(t,x)\in L^2(\Omega)$，所以，同样的证明给出了
\[
u(t,x)\in C^0\left([0,+\infty), L^2(\Omega)\right).
\]

如果假设$u_0(x)\in C^\infty_0(\Omega)$，我们将$u_0(x)$用特征函数展开：
\[
u_0(x)=\sum_{k=1}^\infty c_k \varphi_k(x),
\]
此时，我们可以利用$u_0(x)$的光滑性得到
\[
\begin{aligned}
c_k&=\int_{\Omega} u_0(x)\overline{\varphi_k(x)}dx=\frac{-1}{\lambda_k}\int_{\Omega} u_0(x)\overline{\triangle \varphi_k(x)}dx\\
&=\frac{-1}{\lambda_k}\int_{\Omega} \triangle  u_0(x)\overline{\varphi_k(x)}dx.
\end{aligned}
\]
所以，
\[
\begin{aligned}
c_k&=\frac{(-1)^N}{\lambda_k^N}\int_{\Omega}  \triangle^N u_0(x)\overline{ \varphi_k(x)}dx.
\end{aligned}
\]
从而，对任意的$N\geqslant 1$，我们有
\[
\begin{aligned}
|c_k|&\leqslant \frac{\| \triangle^N u_0\|_{L^2(\Omega)}}{\lambda_k^N}.
\end{aligned}
\]
据此，对任意的自然数$m$，我们都有
\[
\sum_{k=1}^\infty \lambda_k^m |c_k|^2<\infty.
\]

::: remark*
**如果假设$\Omega$是光滑的**，那么，对任意的$t\geqslant 0$，我们都有
\[
u(t,x)\in H^m(\Omega)
\]
并且$u(t,x)$的$H^m$范数是一致的（不依赖于$t$）。
特别地，我们可以重复上面的关于$L^2$的计算，这就可以证明
\[
u(t,x)\in C^0\left([0,+\infty), H^m(\Omega)\right),
\]
其中，$m$是任意的正整数。
特别地，我们知道对任意的$t\geqslant 0$，
$u\in C^0(\overline{\Omega})$（先把$u(t,x)$延拓成$H^m(\mathbb{R}^n)$
中的函数然后用Sobolev嵌入定理）。

实际上，我们还可以说的更多：考虑复合映射
\[
\begin{tikzcd}
\mathbb{R}_{\geqslant 0} \arrow[r] \arrow[dr]  &  H^m(\Omega)\arrow[d,hook] \\
 & C^0(\Omega)
\end{tikzcd}
\]
所以，我们知道
\[
u(t,x)\in C^0\left([0,+\infty), C^0(\Omega)\right),
\]
由于上面的复合用到了Sobolev嵌入，所以，当$t_j\rightarrow t_0$时，我们知道
\[
\|u(t_j,x)-u(t_0,x)\|_{L^\infty}\rightarrow 0.
\]
这个一致连续性是非常重要的。

我们现在说明，$u$是$[0,\infty)\times \overline{\Omega}$上的连续函数：
任选$(t_j,x_j)\in [0,\infty)\times \overline{\Omega}$，使得$(t_j,x_j)\rightarrow (t_0,x_0)$，那么，
\[
\begin{aligned}
|u(t_j,x_j)-u(t_0,x_0)|&\leqslant |u(t_j,x_j)-u(t_0,x_j)|+|u(t_0,x_j)-u(t_0,x_0)|\\
&\leqslant \|u(t_j,\cdot)-u(t_0,\cdot)\|_{L^\infty}+|u(t_0,x_j)-u(t_0,x_0)|.
\end{aligned}
\]
对任意的$\varepsilon>0$，先选取$N_1$，当$j\geqslant N_1$时，我们有
\[
\|u(t_j,\cdot)-u(t_0,\cdot)\|_{L^\infty}<\frac{1}{2}\varepsilon.
\]
利用$u(t_0,\cdot)$的连续性，再选取$N_2$，当$j\geqslant N_2$时，我们有
\[
|u(t_0,x_j)-u(t_0,x_0)|<\frac{1}{2}\varepsilon.
\]
所以，当$j >\max(N_1,N_2)$时，我们就有
\[
|u(t_j,x_j)-u(t_0,x_0)|<\varepsilon.
\]
即$u(t_j,x_j)\rightarrow u(t_0,x_0)$。
:::

另外，如果$u_0\in \mathcal{D}(\Omega)$，我们还可以用热核来构造热方程的解
\[
u(t,x)=\int_{\Omega}p(t,x,y)u_0(y)dy.
\]
对于每个$t,x$，这显然是良好定义的，因为$u_0(y)$具有紧支集。
实际上，仿照我们上次课程对热核的构造，当$(t,x)$固定时，我们有
\[
p(t,x,\cdot) :=\lim_{m\rightarrow \infty}\sum_{k\leqslant m}e^{-\lambda_k t}\varphi_k(x)\overline{\varphi_k(y)}.
\]
所以，上面的定义恰好是
\[
u(t,x)=\langle p(t,x,y), u_0(y)\rangle=\sum_{k=1}^\infty c_k e^{-\lambda_k t}\varphi_k(x),
\]
其中$c_k=(u_0,\varphi_k)_{L^2}$。

利用$p(t,x,y)\in C^0\left([0,\infty)\times \Omega\times \Omega\right)$，
我们计算$\displaystyle\lim_{t\rightarrow 0} u(t)$。

我们任选$\phi(x)\in \mathcal{D}(\Omega)$，我们考虑
\[
\begin{aligned}
\lim_{t\rightarrow 0} \langle u(t,x),\phi(x)\rangle&=\lim_{t\rightarrow 0} \big\langle \langle p(t,x,y), u_0(y)\rangle,\phi(x)\big\rangle\\
&=\lim_{t\rightarrow 0} \big\langle  p(t,x,y), \phi(x)\otimes u_0(y)\big\rangle\\
&=\big\langle  p(0,x,y), \phi(x)\otimes u_0(y)\big\rangle\\
&=\sum_{k=1}^\infty \big\langle\varphi_k(x)\overline{\varphi_k(y)}, \phi(x)\otimes u_0(y) \big\rangle\\
&=\sum_{k=1}^\infty  (u_0,\varphi_k)_{L^2}\overline{(\overline{\phi},\varphi_k)_{L^2}} \\
&=(u_0,\overline{\phi})_{L^2}=\int_{\Omega}u_0(x) \phi(x)dx.
\end{aligned}
\]
所以，作为分布，我们有
\[
\lim_{t\rightarrow 0} u(t)\stackrel{\mathcal{D}'}{=}u_0(x).
\]

我们用特征函数$\varphi_k$构造了热核。
特征函数可以看作是特殊频率的波，所以，目前我们对热核的刻画是从频率空间的视角来做的。
我们下面要在物理空间上刻画$p(t,x,y)$。

我们注意到，任意给定$u_0(x)\in \mathcal{D}(\Omega)$，我们构造的
\[
u(t,x)=\int_{\Omega}p(t,x,y)u_0(y)dy
\]
解如下的热方程：
\[
\begin{cases}
&\partial_t u-\triangle u =0,\\
&u\big|_{t=0}=u_0.
\end{cases}
\]
并且
$u(t,x)\in C^\infty\big((0,\infty)\times\Omega\big)\cap C^0 \big([0,\infty)\times\overline{\Omega}\big)$。
所以，当$p(t,x,y)$与试验函数$u_0(y)$配对之后，我们得到的函数就有了物理空间上的描述。
我们要利用这个方程来了解$p(t,x,y)$，这就是对热核在物理空间上进行描述的基本想法。

我们试举一例来说明这个基本的想法并借此机会引入关于热传导方程极大值原理：

::: proposition
假设
$u(t,x) \in C^\infty\big((0,\infty)\times\Omega\big)\cap C^0 \big([0,\infty)\times\overline{\Omega}\big)$
并且$u$在$(0,\infty)\times \Omega$中满足热方程型的不等式：
\[
\partial_t u-\triangle u \leqslant 0.
\]
如果$u\big|_{\partial \big( [0,\infty)\times\overline{\Omega}\big)}\leqslant 0$，那么，
在$[0,\infty)\times\overline{\Omega}$上，$u(t,x)\leqslant 0$。
:::

::: proof
我们考虑$u$的一个扰动：
\[
u_\varepsilon(t,x)=u(t,x)-\varepsilon t,
\]
其中$\varepsilon>0$。
此时，
我们知道
$u_\varepsilon\big|_{\partial \big( [0,\infty)\times\overline{\Omega}\big)}\leqslant u\big|_{\partial \big( [0,\infty)\times\overline{\Omega}\big)}\leqslant 0$。
通过直接计算，我们还有
\[
\partial_t u_\varepsilon-\triangle u_\varepsilon =\partial_t u-\triangle u-\varepsilon< 0.
\]
我们只要证明在$(0,\infty)\times\overline{\Omega}$上，$u_\varepsilon(t,x)\leqslant 0$即可，
因为我们令$\varepsilon \rightarrow 0$就可以给出我们要证明的结论。

用反证法：如若不然，一定存在$(t_0,x_0)\in (0,\infty)\times \Omega$，使得$u_\varepsilon(t_0,x_0)>0$。
我们现在考虑区域$[0,t_0]\times \overline{\Omega}$，由于$u_\varepsilon$在这个区域上是连续的，所以，
存在$(t_*,x_*)\in [0,t_0]\times \overline{\Omega}$，使得
\[
u_\varepsilon(t_*,x_*)=\sup_{(t,x) \in [0,t_0]\times \overline{\Omega}} u_\varepsilon(t,x).
\]
由于$u_\varepsilon(t_*,x_*)\geqslant u_\varepsilon(t_0,x_0)>0$，
而$u_\varepsilon$在$\partial \big( [0,\infty)\times\overline{\Omega}\big)$上$\leqslant 0$，
我们知道$t_*>0$并且$x_*\in \Omega$。
根据最大性，
我们还知道$\partial_t u_\varepsilon(t_*,x_*)\geqslant 0$（当$t_*=t_0$时考虑左导数）并且
$\triangle u_\varepsilon(t_*,x_*)\leqslant 0$，所以，
\[
\partial_t u_\varepsilon-\triangle u_\varepsilon \geqslant 0.
\]
这就得到了矛盾。
:::

类似地，我们有

::: corollary
假设
$u(t,x) \in C^\infty\big((0,\infty)\times\Omega\big)\cap C^0 \big([0,\infty)\times\overline{\Omega}\big)$
并且$u$在$(0,\infty)\times \Omega$中满足热方程型的不等式：
\[
\partial_t u-\triangle u \geqslant 0.
\]
如果$u\big|_{\partial \big( [0,\infty)\times\overline{\Omega}\big)}\geqslant 0$，那么，
在$[0,\infty)\times\overline{\Omega}$上，$u(t,x)\geqslant 0$。
:::

::: corollary
假设
$u(t,x) \in C^\infty\big((0,\infty)\times\Omega\big)\cap C^0 \big([0,\infty)\times\overline{\Omega}\big)$
并且$u$在$(0,\infty)\times \Omega$中满足热方程：
\[
\partial_t u-\triangle u = 0.
\]
如果$u\big|_{\partial \big( [0,\infty)\times\overline{\Omega}\big)}= 0$，那么，$u(t,x)\equiv 0$。
:::

::: remark*
假设
$u(t,x) \in C^\infty\big((0,\infty)\times\Omega\big)\cap C^0 \big([0,\infty)\times\overline{\Omega}\big)$，
那么，用同样的证明，我们可以说明

- 1\) 如果$u$在$(0,\infty)\times \Omega$上满足
  \[
  \partial_t u-\triangle u \leqslant 0,
  \]
  那么，
  \[
  \sup_{(t,x)\in [0,\infty)\times \Omega}u(t,x)=\sup_{(t,x)\in \partial \big([0,\infty)\times \Omega\big)}u(t,x).
  \]

- 2\) 如果$u$在$(0,\infty)\times \Omega$上满足
  \[
  \partial_t u-\triangle u \geqslant 0,
  \]
  那么，
  \[
  \inf_{(t,x)\in [0,\infty)\times \Omega}u(t,x)=\inf_{(t,x)\in \partial \big([0,\infty)\times \Omega\big)}u(t,x).
  \]

- 3\) 如果$u$在$(0,\infty)\times \Omega$上满足
  \[
  \partial_t u-\triangle u = 0,
  \]
  那么，
  \[
  \begin{aligned}
  \inf_{(t,x)\in [0,\infty)\times \Omega}u(t,x)&=\inf_{(t,x)\in \partial \big([0,\infty)\times \Omega\big)}u(t,x),\\
  \sup_{(t,x)\in [0,\infty)\times \Omega}u(t,x)&=\sup_{(t,x)\in \partial \big([0,\infty)\times \Omega\big)}u(t,x).
  \end{aligned}
  \]

:::

我们现在选取$u_0(x)\geqslant 0$为处处非负的光滑的有紧支集的函数，
我们并且假设$\Omega$的边界是光滑的。
那么，
我们所构造的热方程的解$u(t,x)$落在
$C^\infty\big((0,\infty)\times\Omega\big)\cap C^0 \big([0,\infty)\times\overline{\Omega}\big)$中，
并且在$t=0$处是非负的，在$\partial \Omega$上一直取$0$。根据上面的极值原理，我们知道
\[
u(t,x)\geqslant 0.
\]
作为总结，我们有
\[
u_0 \in C_0^\infty(\Omega), \ \ u_0\geqslant 0 \ \ \Rightarrow \ \ \int_{\Omega}p(t,x,y)u_0(y)dy\geqslant 0.
\]
我们固定$(t,x)\in (0,\infty)\times \Omega$，那么，由于$p(t,x,y)$对于$y\in \Omega$是连续的，所以，
上面的等式意味着$p(t,x,y)\geqslant 0$，这就给出了热核的正性。特别的，$p(t,x,y)$是实值的。

::: remark*
我们也可以从代数的角度来证明这个结论：我们要说明，总是可以把$\varphi_k(x)$选做实函数。
对任意的特征值$\lambda$，我们考虑$-\triangle$的特征子空间$E_\lambda\subset H^1_0(\Omega)$。
这是一个有限维的特征子空间，如果$\varphi\in E_\lambda$，那么，
\[
-\triangle \varphi =\lambda \varphi  \ \ \Rightarrow \ \ -\triangle \overline{\varphi} =\lambda \overline{\varphi}.
\]
所以，我们可以用选${\rm Re}(\varphi)$或者${\rm Im}(\varphi)$作为一个非零实特征函数。

然后在$E_\lambda$中考虑这个函数的正交补空间就可以用归纳法把$E_\lambda$
中的所有特征函数都取成实特征函数。

特别的，按照定义，我们就有
\[
p(t,x,y)=\sum_{k=1}^\infty e^{-\lambda_k t}\varphi_k(x)\varphi_k(y)
\]
是实值的并且$p(t,x,y)=p(t,y,x)$。
:::

当然，我们对于热核的构造是基于特征函数的选取的，我们现在说明，即使换成另一组特征函数作为Hilbert基，
它们所定义的
\[
\widetilde{p}(t,x,y)=\sum_{k=1}^\infty e^{-\lambda_k t}\widetilde{\varphi}_k(x)\overline{\widetilde{\varphi}_k(y)}
\]
与$p(t,x,y)$是一致的。

对于任意的$u_0(x)\in \mathcal{D}(\Omega)$，我们定义（这里我们假设$\Omega$是光滑的）
\[
\widetilde{u}(t,x)=\int_{\Omega}\widetilde{p}(t,x,y)u_0(y)dy.
\]
那么，对这个新的热核重复之前的构造，
我们就知道$\widetilde{u}(t,x)$与$u(t,x)$都在$(0,\Omega)$
上解热方程并且这两个函数在边界上的值是一样的，所以，
对任意的试验函数$u_0(x)\in \mathcal{D}(\Omega)$，我们就有
\[
\int_{\Omega}{p}(t,x,y)u_0(y)dy=\int_{\Omega}\widetilde{p}(t,x,y)u_0(y)dy,
\]
所以，$p(t,x,y)= \widetilde{p}(t,x,y)$。

综上所述，我们证明了

::: proposition
热核$p(t,x,y)$的构造不依赖于具体的由$-\triangle$的特征函数所给出的$L^2(\Omega)$Hilbert基的选取。
进一步，我们有

- 1\) 正性：对任意的$(t,x,y)\in (0,+\infty)\times \Omega \times \Omega$，$p(t,x,y)\geqslant 0$；

- 2\) 对称性：对任意的$(t,x,y)\in (0,+\infty)\times \Omega \times \Omega$，$p(t,x,y)=p(t,y,x)$。

:::
