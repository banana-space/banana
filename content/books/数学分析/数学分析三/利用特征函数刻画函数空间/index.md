---
title: 利用特征函数刻画函数空间
---

由于$\{\varphi_k\}_{k\geqslant 1}$是$L^2(\Omega)$的一族Hilbert基，所以
\[
L^2(\Omega)=\big\{f=\sum_{k=1}^\infty c_k \varphi_k\big|\sum_{k=1}^\infty|c_k|^2<\infty\big\}.
\]
利用这些特征函数，我们可以刻画$L^2(\Omega)$的子空间：

::: corollary [$H^1_0(\Omega)$]
作为$L^2(\Omega)$的子空间，我们有
\[
\begin{aligned}
H^1_0(\Omega)=\left\{f=\sum_{k=1}^\infty c_k \varphi_k\big|\sum_{k=1}^\infty |c_k|^2<\infty, \ \ \sum_{k=1}^\infty\lambda_k |c_k|^2<\infty \right\}.
\end{aligned}
\]
进一步，
$\left\{\dfrac{1}{\sqrt{\lambda_k}}\varphi_k\right\}_{k\geqslant 1}$是$H_0^1(\Omega)$的Hilbert基，
其中，我们在$H_0^1(\Omega)$上用如下的内积：
\[
(f,g)_{H_0^1}=\int_{\Omega}\nabla f \cdot \overline {\nabla g}dx.
\]
:::

::: proof
这个命题的证明表面上是平凡的，其实蕴涵着分析上很容易被忽略的一个细微但是重要的细节。
我们首先回忆$(-\triangle)^{-1}$是自伴算子的证明：对任意的$f_1,f_2\in L^2(\Omega)$，
令$u_1=(-\triangle)^{-1}f_1$，$u_2=(-\triangle)^{-1}f_2$，我们知道，$u_1,u_2\in H_0^1(\Omega)$，
所以，
\[
((-\triangle)^{-1}f_1,f_2)=-(u_1, \triangle u_2)=(\nabla u_1, \nabla u_2),
\]
这里，我们用到了$u_1\in H_0^1(\Omega)$事实，请参考 @lem:int-by-parts-in-H_0^1。
这一部分的论断表明，对任意的$u_1,u_2\in H_0^1(\Omega)$，我们有
\[
(\triangle u_1,u_2)_{L^2}=-(\nabla u_1, \nabla u_2)_{L^2}=(u_1,\triangle u_2)_{L^2},
\]
这个等式的成立强烈地依赖于$u_1,u_2\in H_0^1(\Omega)$。

利用上面的等式，我们对每个$f\in H^1_0(\Omega)$，我们有
\[
\begin{aligned}
(f,\varphi_k)_{H^1_0}=(\nabla f,\nabla \varphi_k)_{L^2}=(f,(-\triangle) \varphi_k)_{L^2}=\lambda_k(f,\varphi_k)_{L^2}.
\end{aligned}
\]
令$f=\varphi_l$，我们得到
\[
\left(\frac{1}{\sqrt{\lambda_l}}\varphi_l,\frac{1}{\sqrt{\lambda_k}}\varphi_k\right)_{H^1_0}=\delta_{lk}.
\]
这表明$\left\{\dfrac{1}{\sqrt{\lambda_k}}\varphi_k\right\}_{k\geqslant 1}$是一族两两正交的向量，
为了说明它们是一族Hilbert基，我们只要说明如果对任意的$k\geqslant 1$，
$\left(f,\dfrac{\varphi_k}{\sqrt{\lambda_k}}\right)_{H_0^1}=0$，那么$f=0$。
实际上，根据上面的公式（以及$\lambda_k>0$），
$\left(f,\dfrac{\varphi_k}{\sqrt{\lambda_k}}\right)_{H_0^1}=0$意味着$(f,\varphi_k)_{L^2}=0$，
由于$\left\{\varphi_k\right\}_{k\geqslant 1}$是$L^2(\Omega)$的Hilbert基，所以，$f=0$。

现在，每个$f\in H^1_0$都可以写成
\[
f=\sum_{k=1}^\infty c_k \varphi_k=\sum_{k=1}^\infty (\sqrt{\lambda_k}c_k) \cdot \frac{\varphi_k}{\sqrt{\lambda_k}},
\]
从而，
\[
\|f\|^2_{H_0^1}=\sum_{k\geqslant 1}\lambda_k |c_k|^2.
\]
这就完成了证明。
:::

::: remark*
给定$f\in H^1(\Omega)$，我们自然可以把它写成
\[
f=\sum_{k=1}^\infty c_k \varphi_k,
\]
其中$\|f\|^2_{H_0^1}=\displaystyle\sum_{k\geqslant 1}\lambda_k |c_k|^2$，因为$f$先验的是$L^2$的。
但是，我们未必有
\[
\sum_{k\geqslant 1}\lambda_k |c_k|^2<\infty.
\]
比如说，当$\Omega=(0,d)$时，我们有
\[
\varphi_k(x)=\sin\left(\dfrac{k\pi }{d}x\right), \ \ \lambda_k=\frac{\pi^2k^2}{d^2}.
\]
为了计算方便，我们令$d=\pi$，即$\Omega=(0,\pi)$，所以
\[
\varphi_k(x)=\sin(kx), \ \ \lambda_k=k^2.
\]
令$f(x)\equiv 1$，很明显，$f\in H^1(\Omega)-H^1_0(\Omega)$（它在端点处不为$0$）。
我们首先计算它在$L^2$意义下的展开：
\[
(f,\varphi_k)_{L^2}=\int_0^\pi \sin(kx)dx=\begin{cases}
\dfrac{2}{k}, \ \ &k~\text{为奇数};\\
0, \ \ &k~\text{为偶数}.
\end{cases}
\]
由于$\|\varphi_k\|^2_{L^2}=\dfrac{\pi}{2}$，从而，当$k$为奇数时$c_k=\dfrac{4}{\pi k}$，当$k$为偶数时$c_k=0$。特别地，我们知道
\[
\sum_{k\geqslant 1}\lambda_k |c_k|^2=\sum_{k~\text{为奇数}} k^2 \frac{16}{\pi^2k^2}=+\infty
\]
:::

::: remark*
对任意的$u_1,u_2\in H_0^1(\Omega)$，我们有
\[
(\triangle u_1,u_2)_{L^2}=-(\nabla u_1, \nabla u_2)_{L^2}=(u_1,\triangle u_2)_{L^2},
\]
我们令$u_1=f$，$u_2=\varphi_k$，这表明
\[
(\triangle f,\varphi_k)_{L^2}=(f,\triangle \varphi_k)_{L^2}=-\lambda_k c_k.
\]
注意到$\triangle f\in H^{-1}(\Omega)$未必是$L^2$中的元，所以，等式
\[
-\triangle f \stackrel{?}{=}\sum_{k\geqslant 1}\lambda_k c_k \varphi_k,
\]
未必有意义。
然而，对于任意的$g\in H_0^1(\Omega)$，由于$H^{-1}$可以实现为$H_0^1(\Omega)$的对偶（连续），所以，
如果
\[
g=\sum_{k\geqslant 1}b_k \varphi_k,
\]
那么，
\[
\langle -\triangle f ,\overline{g}\rangle = \sum_{k\geqslant 1}\lambda_k c_k \overline{b_k},
\]
这由$(-\triangle f,\varphi_k)_{L^2}=\lambda_k c_k$以及$H^{-1}$作为$H_0^1(\Omega)$
上的连续线性泛函的性质所决定。
:::

假设$\Omega\subset \mathbb{R}^n$是有界的开区域，我们证明了如下的结论：存在单调上升的无界序列
\[
0<\lambda_1\leqslant \lambda_2\leqslant \lambda_3\leqslant \cdots, \ \  \lim_{k\rightarrow \infty}\lambda_k=+\infty,
\]
以及$L^2(\Omega)$的一组Hilbert基$\{\varphi_k\}_{k\geqslant 1}$，使得
\[
-\triangle \varphi_k =\lambda_k \varphi_k.
\]
并且对于任意的$k\geqslant 1$，我们有$\varphi_k \in H^1_0(\Omega)$。
从此往后，我们固定这样的一族特征函数（这种选取并不唯一）。

如果$\Omega$具有光滑的边界，我们还可以对指数更高的Sobolev空间进行一定的描述：

::: theorem
假设$\Omega$具有**光滑**的边界，那么，作为$L^2(\Omega)$的子空间，我们有
\[
\begin{aligned}
H^1_0(\Omega)\cap H^2(\Omega)=\left\{u=\sum_{k=1}^\infty c_k \varphi_k\big|\sum_{k=1}^\infty\lambda_k^2 |c_k|^2<\infty \right\}.
\end{aligned}
\]
进一步，
假设$m\geqslant 2$是整数并且$u=\displaystyle\sum_{k=1}^\infty c_k \varphi_k\in L^2(\Omega)$满足
\[
\sum_{k=1}^\infty\lambda_k^m |c_k|^2<\infty,
\]
那么，$u\in H^1_0(\Omega)\cap H^m(\Omega)$。
:::

对于$u \in H^1_0(\Omega)\cap H^m(\Omega)$，如果令$f=-\triangle u$，那么，$f\in H^{m-2}$。
另外，如果$u$解如下的方程：
\[
\begin{cases}
-\triangle {u} = {f},\\
{u}\big|_{\partial\Omega}=0.
\end{cases}
\]
并且$f\in H^{m-2}(\Omega)$，那么，根据正则性理论（这里用到了$\partial \Omega$是光滑的），
$u\in H^{m}(\Omega)\cap H^1_0(\Omega)$。所以，我们就有如下的结论：

- 假设$u \in H^1_0(\Omega)$（其中$\Omega$是有界的光滑带边区域），那么，对任意的$m\geqslant 1$，
  $u\in H^{m}(\Omega)$当且仅当$\triangle u \in H^{m-2}(\Omega)$。

::: remark* [伪证]
我们先给出定理的一个“错误”的证明：因为
\[
u=\sum_{k=1}^\infty c_k \varphi_k
\]
在$L^2(\Omega)$中成立，所以它也在$\mathcal{D}'(\Omega)$的意义下成立。
据此，在分布的意义下，我们有（因为求导数与分布的极限可以交换）
\[
\triangle u\stackrel{\mathcal{D}'}{=}\sum_{k=1}^\infty c_k \triangle \varphi_k\stackrel{\mathcal{D}'}{=}-\sum_{k=1}^\infty \lambda_k c_k \varphi_k.
\]
利用$u\in H^2(\Omega)$，我们知道$\triangle u \in L^2(\Omega)$，所以，
\[
\sum_{k=1}^\infty  |\lambda_k c_k|^2<\infty.
\]

如果同学仔细阅读上面的证明，
我们发现这个证明只用到了$u\in H^2(\Omega)$而不需要$u\in H_0^1(\Omega)$的条件。
为了看出其中的错误，我们需要搞清楚
\[
\triangle u\stackrel{\mathcal{D}'}{=}-\sum_{k=1}^\infty \lambda_k c_k \varphi_k
\]
的含义：这个等式指的是
\[
\triangle u\stackrel{\mathcal{D}'}{=}-\lim_{N\rightarrow \infty}\left(\sum_{k=1}^N \lambda_k c_k \varphi_k\right),
\]
即对任意的$\phi(x)\in \mathcal{D}(\Omega)$，我们有
\[
\langle \triangle u,\phi\rangle=-\lim_{N\rightarrow \infty} \sum_{k=1}^N \lambda_k c_k \int_{\Omega}\varphi_k(x)\phi(x)dx.
\]
这个基本等价于（弱于）在$L^2(\Omega)$中的弱收敛：
\[
\sum_{k=1}^\infty \lambda_k c_k \varphi_k \rightharpoonup -\triangle u.
\]
我们知道，$x_k \rightharpoonup x_0$不意味着$x_k$的范数是控制的。
:::

::: proof
假设$u\in H_0^1(\Omega)\cap H^2(\Omega)$，那么$f= -\triangle u\in L^2(\Omega)$。
我们把$f$用$L^2(\Omega)$中的特征函数展开：
\[
f(x)\stackrel{L^2}{=}\sum_{k=1}^\infty f_k \varphi_k(x).
\]
特别地，我们知道
\[
\sum_{k=1}^\infty  |f_k|^2<\infty.
\]
现在定义函数
\[
v(x){=}\sum_{k=1}^\infty \frac{f_k}{\lambda_k} \varphi_k(x).
\]
由于$\lambda_k\rightarrow +\infty$，$v$显然是$L^2$的函数。另外，我们知道
\[
\sum_{k=1}^\infty  \lambda_k|\frac{f_k}{\lambda_k}|^2<\infty.
\]
所以，$v(x)\in H^1_0(\Omega)$。再者，利用$v$的表达式，我们知道
\[
-\triangle v\stackrel{\mathcal{D}'}{=}-\sum_{k=1}^\infty \lambda_k \frac{f_k}{\lambda_k} \varphi_k=f.
\]
所以，$v(x)\in H^1_0(\Omega)$和$u\in H^1_0(\Omega)$都满足如下分布意义下的方程：
\[
-\triangle v\stackrel{\mathcal{D}'}{=}f, \ \ -\triangle u\stackrel{\mathcal{D}'}{=}f.
\]
根据Dirichlet问题解的唯一性，我们知道
\[
u=v.
\]
特别地，我们有
\[
u(x)\stackrel{L^2}{=}\sum_{k=1}^\infty \frac{f_k}{\lambda_k} \varphi_k(x).
\]
所以，$c_k=\lambda_k^{-1}f_k$，从而
\[
\sum_{k=1}^\infty\lambda_k^2 |c_k|^2=\sum_{k=1}^\infty |f_k|^2<\infty.
\]

接下来，我们只要证明对任意整数$m\geqslant 0$，
$u=\displaystyle\sum_{k=1}^\infty c_k \varphi_k\in L^2(\Omega)$并且
\[
\sum_{k=1}^\infty\lambda_k^m |c_k|^2<\infty,
\]
那么，$u\in H^1_0(\Omega)\cap H^m(\Omega)$。

我们对$m$进行归纳：$m=0$（Poincaré不等式）和$m=1$的情况已经证明。
假设对一切小于$m$的整数命题都成立（$m\geqslant 2$），那么，
\[
\triangle u\stackrel{\mathcal{D}'}{=}-\sum_{k=1}^\infty \lambda_k c_k \varphi_k.
\]
我们注意到作用$-\triangle$使得Sobolev指数降$2$，所以，我们归纳的基础需要两个相邻的整数。
根据$m\geqslant 2$以及
\[
\sum_{k=1}^\infty\lambda_k^m |c_k|^2<\infty,
\]
我们知道$u\in H_0^1(\Omega)$并且（利用归纳假设）
\[
\sum_{k=1}^\infty \lambda_k c_k \varphi_k\in H^{m-2}(\Omega)，
\]
所以，根据椭圆正则性，我们就知道$u\in H_0^1(\Omega)\cap H^m(\Omega)$。
:::

::: remark*
证明的过程表明，对任意的$m\geqslant 1$时，如果
\[
u\stackrel{L^2}{=}\displaystyle\sum_{k=1}^\infty c_k \varphi_k\in L^2(\Omega)
\]
并且
\[
\sum_{k=1}^\infty\lambda_k^m |c_k|^2<\infty,
\]
那么，$u\in H^1_0(\Omega)\cap H^m(\Omega)$并且存在常数$C$，使得
\[
\|u\|_{H^m(\Omega)} \leqslant C\sqrt{\sum_{k=1}^\infty\lambda_k^m |c_k|^2}.
\]
证明的想法是在归纳假设中用所谓的椭圆估计：我们已经证明了如下的结论：

- $\Omega\subset \mathbb{R}^n$是有界光滑带边区域，$k\geqslant 1$是整数。
  假设$u\in H^{1}(\Omega)$满足如下的边值问题：
  \[
  \begin{cases}
  -\triangle u = f,\\
  u\big|_{\partial\Omega}=g.
  \end{cases}
  \]
  如果$f\in  H^{k-1}(\Omega)$并且$g\in H^{k+\frac{1}{2}}(\partial \Omega)$，那么，
  $u\in H^{k+1}(\Omega)$。

实际上，证明的过程还给出了如下的估计：存在仅依赖于$\Omega$和$k$的常数，使得
\[
\|u\|_{H^{k+1}(\Omega)}\leqslant C\left(\|f\|_{H^{k-1}(\Omega)}+\|g\|_{H^{k+\frac{1}{2}}(\partial\Omega)}\right).
\]
:::

::: remark*
当$m\geqslant 3$时，并非每个$u\in H^1_0(\Omega)\cap H^m(\Omega)$中的函数都可以写成
\[
u\stackrel{L^2}{=}\displaystyle\sum_{k=1}^\infty c_k \varphi_k\in L^2(\Omega)
\]
并且
\[
\sum_{k=1}^\infty\lambda_k^m |c_k|^2<\infty.
\]
我们考虑$m=3$的情况。任选$f\in H^1(\Omega)$但是$f\notin H^1_0(\Omega)$，考虑如下方程的解
\[
\begin{cases}
-\triangle {u} = {f},\\
{u}\big|_{\partial\Omega}=0.
\end{cases}
\]
我们知道，$u\in H^1_0(\Omega)\cap H^3(\Omega)$。
如果$u\stackrel{L^2}{=}\displaystyle\sum_{k=1}^\infty c_k \varphi_k\in L^2(\Omega)$满足
\[
\sum_{k=1}^\infty\lambda_k^3 |c_k|^2<\infty,
\]
根据定理中最后一部分的证明，$f=-\triangle u \in H^1_0(\Omega)$，矛盾。
:::

::: corollary
假设$\Omega$具有**光滑**的边界，对任意的$k\geqslant 1$，
特征函数$\varphi_k(x)\in C^\infty(\Omega)\cap C\left(\overline{\Omega}\right)$（连续到边界）。
特别地，$\varphi_k$在边界上的限制是$0$。
:::

::: proof
根据定理，我们知道$\varphi_k \in  H^{N}(\Omega)$其中$2N>n$，所以，
我们可以任意选取$\varphi_k$在$H^N(\mathbb{R}^n)$中的扩张，从而，根据Sobolev嵌入定理，
$\varphi_k$在$\overline{\Omega}$上连续。
注意到，我们此时同时证明了$\varphi_k$在$\Omega$内部是光滑的（一直到边界）。
由于$\varphi_k \big|_{\partial \Omega}\stackrel{H^{\frac{1}{2}}}{=}0$，所以，
$\varphi_k$在边界上的限制是$0$。
:::
