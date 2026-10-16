---
title: 缓增分布的 Fourier 变换：定义和基本例子
---

::: definition [缓增的分布]
假设$u\in \mathcal{D}'(\mathbb{R}^n)$是一个分布。
如果存在非负整数$p$和常数$C>0$，使得对每个$\varphi\in \mathcal{D}(\mathbb{R}^n)$，我们都有
\[
|\langle u,\varphi \rangle|\leqslant C N_p(\varphi),
\]
我们就说$u$ 是**缓增**分布。我们用$\mathcal{S}'(\mathbb{R}^n)$来表示所有缓增分布的集合，很明显
\[
\mathcal{S}'(\mathbb{R}^n)\subset \mathcal{D}'(\mathbb{R}^n)
\]
是线性子空间。
:::

::: theorem [$\mathcal{S}'(\mathbb{R}^n)\times\mathcal{S}(\mathbb{R}^n)\rightarrow \mathbb{R}$]
对任意的$u\in \mathcal{S}'(\mathbb{R}^n)$，存在唯一一个线性泛函
\[
T_u:\mathcal{S}(\mathbb{R}^n)\rightarrow \mathbb{C},
\]
使得存在非负整数$p$和常数$C>0$，对每个$\varphi \in \mathcal{S}(\mathbb{R}^n)$，我们都有
\[
\big|T_u(\varphi)\big|\leqslant C N_p(\varphi),
\]
并且对于任意的$\psi\in \mathcal{D}(\mathbb{R}^n)$，都有
\[
T_u(\psi)=\langle u,\psi \rangle.
\]
在后面的场合，为了简单起见，我们仍将此线性泛函的作用记作$\langle u, \cdot \rangle$
或 $\langle u,\varphi\rangle_{\mathcal{S}'\times\mathcal{S}}$。
:::

::: proof
利用$\mathcal{D}(\mathbb{R}^n)\subset  \mathcal{S}(\mathbb{R}^n)$的稠密性，
我们用极限的形式来定义$T_u$：对任意给定的$\varphi\in   \mathcal{S}(\mathbb{R}^n)$，
我们选取试验函数序列$\{\varphi_k\}_{k\geqslant 1} \subset   \mathcal{D}(\mathbb{R}^n)$，使得
\[
\varphi_k\stackrel{\mathcal{S}}{\longrightarrow} \varphi.
\]
我们令
\[
T_u(\varphi)=\lim_{k\rightarrow \infty}\langle u,\varphi_k \rangle.
\]
当然，我们需要说明上述极限存在并且不依赖于逼近序列的选取。

利用$u\in \mathcal{S}'(\mathbb{R}^n)$的定义，存在$C_0$和$p_0$，使得对任意的$k,\ell\geqslant 1$，
我们都有
\[
\left|\langle u,\varphi_k-\varphi_\ell \rangle\right|\leqslant C_0N_{p_0}(\varphi_k-\varphi_\ell ).
\]
再利用$\varphi_k\stackrel{\mathcal{S}}{\longrightarrow} \varphi$的定义，我们有
\[
N_{p_0}(\varphi_k-\varphi)\rightarrow 0.
\]
所以，我们有
\[
\begin{aligned}
\left|N_{p_0}(\varphi_k)-N_{p_0}(\varphi_\ell)\right|&=N_{p_0}(\varphi_k-\varphi_\ell)\\
&\leqslant N_{p_0}(\varphi_k-\varphi)+N_{p_0}(\varphi_\ell-\varphi) \stackrel{k,\ell\rightarrow \infty}{\longrightarrow} 0.
\end{aligned}
\]
这说明$\{\langle u,\varphi_k \rangle\}_{k\geqslant 1}$是Cauchy列，所以所讨论的极限是存在的。

下面再说明这个极限不依赖于逼近序列$\{\varphi_k\}_{k\geqslant 1} \subset   \mathcal{D}(\mathbb{R}^n)$
的选取。假设$\{\psi_k\}_{k\geqslant 1} \subset   \mathcal{D}(\mathbb{R}^n)$
是另一个逼近序列，那么，我们有
\[
\begin{aligned}
\left|N_{p_0}(\varphi_k)-N_{p_0}(\psi_k)\right|&=N_{p_0}(\varphi_k-\psi_k)\\
&\leqslant N_{p_0}(\varphi_k-\varphi)+N_{p_0}(\varphi_\ell-\varphi) \stackrel{k,\ell\rightarrow \infty}{\longrightarrow} 0.
\end{aligned}
\]
所以，
\[
\left|\langle u,\varphi_k \rangle-\langle u,\psi_k \rangle\right|\leqslant C_0N_{p_0}(\varphi_k-\psi_k )\rightarrow 0.
\]
所以，
\[
\lim_{k\rightarrow \infty}\langle u,\varphi_k \rangle=\lim_{k\rightarrow \infty}\langle u,\psi_k \rangle.
\]
最后，我们证明$T_u$所满足的不等式：
\[
\begin{aligned}
\left|\langle u,\varphi_k \rangle \right|& \leqslant C_0 N_{p_0}(\varphi_k) \leqslant C_0\left(\underbrace{N_{p_0}(\varphi_k-\varphi)}_{\rightarrow 0, \ k\rightarrow \infty}+N_{p_0}(\varphi)\right)
\end{aligned}
\]
两边同时取极限，这就完成了定理的证明。
:::

给定$u\in \mathcal{S}'(\mathbb{R}^n)$和多重指标$\alpha$，$\beta$，
作为$\mathcal{D}'(\mathbb{R}^n)$中的元素，
我们自然有$\partial^\alpha u, x^\beta u \in \mathcal{D}'(\mathbb{R}^n)$。
我们现在要说明$\partial^\alpha u, x^\beta u \in \mathcal{S}'(\mathbb{R}^n)$。
实际上，对任意的$\varphi$，按照缓增分布的定义，我们有
\[
\left|\langle \partial^\alpha u, \varphi \rangle\right|=\left|\langle u,  \partial^\alpha \varphi \rangle\right|\leqslant CN_{p+|\alpha|}(\varphi).
\]
这表明$\partial^\alpha u\in \mathcal{S}'(\mathbb{R}^n)$。
类似地，我们有$x^\beta u\in \mathcal{S}'(\mathbb{R}^n)$。

另外，对任意的$\varphi \in \mathcal{S}(\mathbb{R}^n)$，
我们选取$\{\varphi_k\}_{k\geqslant 1}\subset \mathcal{D}(\mathbb{R}^n)$为$\varphi$在
$\mathcal{S}(\mathbb{R}^n)$中的逼近序列，那么，
\[
\begin{aligned}
\langle \partial^\alpha u,\varphi\rangle_{\mathcal{S}'\times\mathcal{S}}&=(-1)^{|\alpha|}\lim_{k\rightarrow \infty}\langle u,\partial^\alpha\varphi_k\rangle\\
&=(-1)^{|\alpha|}\langle u,\partial^\alpha\varphi\rangle_{\mathcal{S}'\times\mathcal{S}}.
\end{aligned}
\]
所以，我们仍然有类似于分布情形的公式：
\[
\begin{aligned}
\langle \partial^\alpha u,\varphi\rangle_{\mathcal{S}'\times\mathcal{S}}=(-1)^{|\alpha|}\langle u,\partial^\alpha \varphi\rangle_{\mathcal{S}'\times\mathcal{S}}.
\end{aligned}
\]
类似地，我们还有
\[
\begin{aligned}
\langle x^\beta u,\varphi\rangle_{\mathcal{S}'\times\mathcal{S}}=\langle u,x^\beta \varphi\rangle_{\mathcal{S}'\times\mathcal{S}}.
\end{aligned}
\]
但是，我们注意到，如果$f$仅仅是光滑函数，那么
\[
\begin{aligned}
\langle fu, \varphi\rangle_{\mathcal{S}'\times\mathcal{S}}=\langle u, f \varphi\rangle_{\mathcal{S}'\times\mathcal{S}}.
\end{aligned}
\]
并不成立，因为通常而言$ f \varphi\notin \mathcal{S}(\mathbb{R}^n)$。

我们现在规定$\mathcal{S}'(\mathbb{R}^n)$中序列的收敛性：

::: definition [收敛性]
给定缓增分布的序列$\{u_k\}_{k\geqslant 1} \subset \mathcal{S}'(\Omega)$，
我们说它在$\mathcal{S}'(\mathbb{R}^n)$的意义下收敛到$u\in \mathcal{S}'(\Omega)$，
记作$u_k \stackrel{\mathcal{S}'}{\longrightarrow}u$，
指的是对每个Schwartz函数$\varphi \in \mathcal{S}(\mathbb{R}^n)$，都有
\[
\lim_{k\rightarrow \infty}\langle u_k, \varphi \rangle =\langle u, \varphi \rangle.
\]
:::

::: proposition
对任意的多重指标$\alpha$和$\beta$，我们有如下的连续映射
\[
\begin{aligned}
x^\alpha&: \mathcal{S}'(\mathbb{R}^n)\rightarrow  \mathcal{S}'(\mathbb{R}^n),  \\
\partial^\beta&:  \mathcal{S}'(\mathbb{R}^n)\rightarrow  \mathcal{S}'(\mathbb{R}^n).
\end{aligned}
\]
换而言之，我们有

- 1\) 如果$u\in \mathcal{S}'(\mathbb{R}^n)$，
  那么$\partial^\alpha u, x^\beta u \in \mathcal{S}'(\mathbb{R}^n)$。

- 2\) 如果我们有缓增分布的收敛序列$u_k \stackrel{\mathcal{S}'}{\longrightarrow}u$，那么，
  它在求导数和乘多项式下被保持：
  \[
  \partial^\alpha u_k \stackrel{\mathcal{S}'}{\longrightarrow} \partial^\alpha u, \ \ x^\beta u_k \stackrel{\mathcal{S}'}{\longrightarrow}x^\beta u.
  \]

:::

::: proof
证明是简单（乏味）的：我们已经说明了$\partial^\alpha u, x^\beta u \in \mathcal{S}'(\mathbb{R}^n)$。
为了说明连续性，我们有
\[
\lim_{k\rightarrow \infty}\langle \partial^\alpha u_k, \varphi \rangle=\lim_{k\rightarrow \infty}\langle u_k,(-1)^{|\alpha|}\partial^\alpha\varphi\rangle=\langle u,(-1)^{|\alpha|}\partial^\alpha\varphi\rangle=\langle \partial^{\alpha}u,\varphi\rangle.
\]
关于乘法的证明是类似的。
:::

我们现在看一些缓增的分布的例子：

- 1\) 假设$p=1,2$或$\infty$，我们可以将函数空间$L^p(\mathbb{R}^n)$视为分布（因为这都是局部可积的），
  那么它们是缓增的分布：

  假设$f\in L^\infty(\mathbb{R}^n)$，那么，对任意的$\varphi\in \mathcal{D}(\mathbb{R}^n)$，我们有
  \[
  \begin{aligned}
  \left|\langle f, \varphi\rangle\right|&=\int_{\mathbb{R}^n} \frac{f}{\left(1+|x|^{2}\right)^{\frac{n+1}{2}}} \cdot \left(\left(1+|x|^{2}\right)^{\frac{n+1}{2}} \cdot \varphi\right) dx\\
  &\leqslant \left(\int_{\mathbb{R}^n} \frac{1}{\left(1+|x|^{2}\right)^{\frac{n+1}{2}}} dx\right)\|f\|_{L^\infty}\cdot N_{n+1}(\varphi).
  \end{aligned}
  \]
  我们把$p=1$或$2$的情况留作作业。

- 2\) 有紧支集的分布$\mathcal{E}'(\mathbb{R}^n)$是缓增的分布：
  这是因为每个紧支集的分布都是有限阶的分布。

- 3\) 分布${\rm vp}\frac{1}{x}$是缓增的分布：实际上，我们可以把它写成
  \[
  \begin{aligned}
  {\rm vp}\frac{1}{x}=\underbrace{\mathbf{1}_{|x|<1}\cdot  {\rm vp} \frac{1}{x}}_{\in \mathcal{E}'(\mathbb{R}^n)}+\underbrace{\mathbf{1}_{|x|\geqslant 1}{\rm vp}\cdot \frac{1}{x}}_{\in L^\infty}.
  \end{aligned}
  \]

- 4\) 局部可积函数并且具有多项式增长速度的函数是缓增的分布，
  即对于$f\in L_{\rm loc}^1(\mathbb{R}^n)$，如果存在常数$C$和$m$，使得对任意的$x\in \mathbb{R}^n$，
  我们都有
  \[
  |f(x)|\leq C(1+|x|)^m,
  \]
  那么，$f\in \mathcal{S}'(\mathbb{R}^n)$。

  实际上，对任意的试验函数$\varphi \in \mathcal{D}(\mathbb{R}^n)$，我们有
  \[
  \begin{aligned}
  \left|\langle f, \varphi \rangle\right| &= \left|\int_{\mathbb{R}^n}f(x)\varphi(x)dx\right|\\
  &\leqslant  \int_{\mathbb{R}^n}\underbrace{\frac{|f(x)|}{(1+|x|)^{m+n+1}}}_{\text{可积}}\cdot \underbrace{(1+|x|)^{m+n+1}|\varphi(x)|}_{\leqslant C' N_{m+n+1}(\varphi)}dx\\
  &\leqslant C'' N_{m+n+1}(\varphi).
  \end{aligned}
  \]

- 5\) 函数$e^x$所定义的分布不是缓增的分布。

  我们选取$\chi\in C^\infty_0(\mathbb{R})$，使得$\chi\big|_{[0,1]}\equiv 1$并且$\chi\geqslant 0$。
  令$\chi_n=\chi(x-n)$。如果$e^x$是缓增的分布，那么，存在$p$，使得
  \[
  \int_{\mathbb{R}}e^x\chi_n(x)dx\leqslant C\sup_{|\alpha|,|\beta|\leqslant p}\|x^\alpha\partial^\beta \chi_n\|_{L^\infty}\leqslant C n^p.
  \]
  然而，
  \[
  \int_{\mathbb{R}}e^x\chi_n(x)dx=\int_{\mathbb{R}}e^x\chi(x-n)dx\geqslant \int_{[n,n+1]}e^x dx\geqslant e^n.
  \]
  令$n\rightarrow\infty$，我们就得到了矛盾。

- 6\) 指数增长速度的函数也可以是缓增的分布。

  我们令$u=e^x e^{ie^{x}}$，这个函数是在$\mathbb{R}$上是指数增长的，但是它所定义的分布是缓增的：
  因为$u=\left(e^{ie^{x}}\right)^\prime$，
  而$e^{ie^{x}}\in L^\infty(\mathbb{R})$所定义的分布是缓增的。

::: definition [缓增分布的Fourier变换]
对任意的$u\in \mathcal{S}'(\mathbb{R}^n)$，
我们用以下的公式来定义其Fourier变换（记作$\mathcal{F}u$或者$\widehat{u}$）：
对任意的$\varphi \in  \mathcal{S}(\mathbb{R}^n)$，令
\[
\langle \widehat{u},\varphi \rangle=\langle {u},\widehat{\varphi} \rangle.
\]
我们可以类似地定义Fourier逆变换$\mathcal{F}^{-1}$。实际上，我们只要定义
\[
\langle \mathcal{F}^{-1}(u),\varphi \rangle=\langle {u}, \mathcal{F}^{-1}(\varphi) \rangle.
\]
即可。
:::

在陈述下面的定理之前，我们先回忆在Schwartz函数空间上的Fourier变换（以及Fourier逆变换）：
\[
\mathcal{F}:\mathcal{S}(\mathbb{R}^n)\longrightarrow \mathcal{S}(\mathbb{R}^n), \ \ \varphi\mapsto \widehat{\varphi}(\xi),
\]
是连续的同构，并且满足如下的性质：对任意的$p\in \mathbb{Z}_{\geqslant 0}$，存在常数$C_p>0$，
使得对每个$\varphi\in \mathcal{S}(\mathbb{R}^n)$，我们都有
\[
N_p(\widehat{\varphi})\leqslant C_p N_{p+n+1}(\varphi).
\]
据此，我们来说明如果$u\in \mathcal{S}'(\mathbb{R}^n)$，那么上述所定义的$\widehat{u}$也是缓增的分布：
这是因为对任意速降的函数$\varphi\in \mathcal{S}(\mathbb{R}^n)$，我们有如下的不等式
\[
\begin{aligned}
|\langle \widehat{u},\varphi \rangle|=|\langle {u},\widehat{\varphi} \rangle|\leqslant CN_p(\widehat{\varphi})\leqslant C C_p N_{p+n+1}(\varphi).
\end{aligned}
\]
这就验证了$\widehat{u}\in \mathcal{S}'(\mathbb{R}^n)$。

::: theorem
Fourier变换
\[
\mathcal{F}:\mathcal{S}'(\mathbb{R}^n)\longrightarrow \mathcal{S}'(\mathbb{R}^n),
\]
是连续线性同构，
这里连续性指的是对任意的在$\mathcal{S}'(\mathbb{R}^n)$中收敛的缓增分布的序列
$u_k\stackrel{\mathcal{S}'}{\longrightarrow}u$，
我们都有$\widehat{u_k}\stackrel{\mathcal{S}'}{\longrightarrow}\widehat{u}$。
进一步，对每个$u\in \mathcal{S}'(\mathbb{R}^n)$，如下的公式成立：
\[
\widehat{\partial_k u} = i\xi_k \widehat{u}, \ \ \widehat{x_k u} = i\partial_k \widehat{u},\ \ \mathcal{F}^{-1}(u)=\frac{1}{(2\pi)^n}\mathcal{F}(u)\check\,\,.
\]
:::

::: proof
先验证连续性：假设$u_k\stackrel{\mathcal{S}'}{\longrightarrow}u$，那么，
对任意的Schwartz函数$\varphi$，我们都有
\[
\langle \widehat{u_k},\varphi\rangle=\langle {u_k},\widehat{\varphi}\rangle\rightarrow \langle {u},\widehat{\varphi}\rangle=\langle \widehat{u},\varphi\rangle.
\]
所以，$\widehat{u_k}\stackrel{\mathcal{S}'}{\longrightarrow}\widehat{u}$。
另外，由于
\[
\langle \mathcal{F}^{-1}\left(\mathcal{F}(u)\right),\varphi\rangle=\langle u, \mathcal{F}^{-1}\left(\mathcal{F}(\varphi)\right)\rangle=\langle u,\varphi\rangle.
\]
所以，$\mathcal{F}$与$\mathcal{F}^{-1}$互为逆，从而，$\mathcal{F}$是缓增分布上的同构。

定理中的三个公式的验证也是平凡的，
因为我们总是可以在$\mathcal{S'}(\mathbb{R}^n)\times \mathcal{S}(\mathbb{R}^n)$的配对时，
把$\mathcal{S}'(\mathbb{R}^n)$中的运算全部挪到$\mathcal{S}(\mathbb{R}^n)$上来验证。
对于$\mathcal{S}(\mathbb{R}^n)$中的$\varphi$，这三个公式我们已经证明过了。
:::

## Fourier变换的几个例子

我们计算一些常见函数的Fourier变换：

::: example*
- 1\) Dirac函数$\delta_0$。我们有
  \[
  \widehat{\delta_0}=1.
  \]
  假设$\varphi(x)\in \mathcal{S}(\mathbb{R}^n)$，那么，
  \[
  \langle \widehat{\delta_0},\varphi\rangle=\langle {\delta_0},\widehat{\varphi}\rangle=\int_{\mathbb{R}^n}\varphi(x)dx=\langle 1,\varphi\rangle.
  \]
  这就完成了计算。

- 2\) 对任意的$a\in \mathbb{R}^n$，任意的多重指标$\alpha$，我们有
  \[
  \widehat{\partial^\alpha \delta_a}=(i\xi)^\alpha e^{-i\xi\cdot a}, \ \ \widehat{x^\alpha }=(2\pi)^n (i\partial)^\alpha\delta_0.
  \]
  特别地，
  \[
  \widehat{1}=(2\pi)^n\delta_0.
  \]
  这个计算留作作业。

:::

作为应用，我们研究$\mathbb{R}^n$上的调和的缓增分布，即$u\in \mathcal{S}'(\mathbb{R}^n)$并且满足
\[
\triangle u=0.
\]

::: proposition
假设$u\in \mathcal{S}'(\mathbb{R}^n)$是调和的缓增分布，那么，
$u$必然是（$x_1,\cdots,x_n$的）多项式函数。
:::

::: proof
由于$u\in \mathcal{S}'(\mathbb{R}^n)$，所以我们可以对它做Fourier变换。从而，
\[
\triangle u=0 \ \ \Rightarrow \ \ -|\xi|^2 \widehat{u}=0.
\]
这表明（练习）${\rm supp}(\widehat{u})\subset \{0\}$，从而，
\[
\widehat{u}=\sum_{|\alpha|\leqslant m}c_\alpha \partial^\alpha\delta_0(\xi).
\]
对上式作Fourier逆变换：
\[
u=\sum_{|\alpha|\leqslant m}c_\alpha \left(\frac{\xi}{i}\right)^\alpha.
\]
这就得到了要证明的结论。
:::

::: remark*
由于众所周知的原因，我们通常把${\rm supp}(\widehat{u})$称作是$u$的**谱**并记作${\rm spec}(u)$。
:::

::: remark*
要求$u$是缓增的分布是非常重要条件：如果不对$u$在无穷远处的增长加以限制，那么调和的分布是很多的。
比如说，在$\mathbb{R}^2=\mathbb{C}$上，任何一个在整个$\mathbb{C}$上定义的复解析函数都是调和的。
比如说，$e^z$，它就不是多项式函数，它在$\infty$附近增长的很快，所以它所定义的分布不是缓增的。
:::

为了计算一些特殊的分布的Fourier变换，我们经常用到如下两个技巧：

::: proposition
假设$u\in \mathcal{S}'(\mathbb{R}^n)$是缓增的分布。我们有：

- 1\) 给定可逆的$n\times n$的实系数矩阵$A$，我们把它看作是$\mathbb{R}^n$到自身的线性变换，那么，
  $A^*u$也是缓增的分布（证明几乎是显然的）并且
  \[
  \widehat{A^*u}=|\operatorname{det}(A)|^{-1} \left({}^tA^{-1}\right)^*\widehat{u}.
  \]
  通常，我们把这个公式写作
  \[
  \widehat{u(Ax)}(\xi)=|\operatorname{det}(A)|^{-1} \widehat{u}\left({}^tA^{-1}\xi\right).
  \]

- 2\) 如果$u$是次数为$s$的齐次分布，那么，$\widehat{u}$是次数为$-s-n$的齐次分布。

- 3\) 如果$u$是奇分布，即满足$\check{u}=-u$，那么$\widehat{u}$也是；如果$u$是偶分布，
  即满足$\check{u}=u$，那么$\widehat{u}$也是。

- 4\) 如果$u$是旋转对称的，即对任意的$A\in \mathbf{SO}(n)$，
  \[
  A^*u=u,
  \]
  那么，$\widehat{u}$是旋转对称的。

:::

::: proof
我们把1）的证明留作作业。为了证明2），我们用1)的结论。
令$A_\lambda$为对角线上均为$\lambda$的对角矩阵，其中$\lambda>0$。
那么（请参考第一次作业），$u$是次数为$s$的齐次分布等价于对任意的$\lambda>0$，我们都有
\[
\left(A_\lambda\right)^*u =\lambda^s u.
\]
对上面的等式作Fourier变换，我们就得到
\[
\lambda^{-n}\left(A_{\lambda^{-1}}\right)^*\widehat{u} =\lambda^s \widehat{u}.
\]
令$\gamma=\lambda^{-1}$，所以，
\[
\left(A_{\gamma}\right)^*\widehat{u} =\gamma^{-s-n} \widehat{u}.
\]
所以，$\widehat{u}$是次数为$-s-n$的齐次分布。

为了证明3），我们只需要把2)中的$\lambda$选为$-1$即可。

为了证明4），我们注意到对于任意的正交矩阵，我们都有
\[
{}^tA^{-1}=A.
\]
所以，公式
\[
\widehat{u(Ax)}(\xi)=|\operatorname{det}(A)|^{-1} \widehat{u}\left({}^tA^{-1}\xi\right)
\]
可以写成
\[
\widehat{u(Ax)}(\xi)=\widehat{u}\left(A\xi\right).
\]
这就是要验证的。
:::

::: example*
Dirac函数$\delta_0$是次数为$-n$的齐次分布，因为它的Fourier变换$1$是次数为$0$的齐次分布。
:::

::: example*
- 3\) 我们计算${\rm vp}\frac{1}{x}$的Fourier变换：
  \[
  \widehat{{\rm vp}\frac{1}{x}}=-2\pi i H(x)+\pi i,
  \]
  我们注意到
  \[
  x\cdot {\rm vp}\frac{1}{x}=1.
  \]
  所以，
  \[
  \widehat{x\cdot {\rm vp}\frac{1}{x}}=2\pi \delta_0 \ \ \Rightarrow \ \ \frac{d}{d\xi}\left(\widehat{{\rm vp}\frac{1}{x}}\right)=-i2\pi \delta_0.
  \]
  我们知道Heaviside函数$H(x)$是上述方程的一个解，所以，
  \[
  \widehat{{\rm vp}\frac{1}{x}}=-2\pi i H(x)+C,
  \]
  其中，$C$是待定的常数。

  我们注意到$ {\rm vp}\frac{1}{x}$是一个奇分布，所以，$\widehat{{\rm vp}\frac{1}{x}}$也是，
  这说明$C=\pi i$。

- 4\) Heaviside函数$H(x)$的Fourier变换为
  \[
  \widehat{H}(\xi)=-i\cdot {\rm vp}\frac{1}{x}+\pi \delta_0.
  \]
  这个计算留作作业。

- 5\) 我们考虑$\mathbb{R}^n$上Laplace算子$\triangle$的一个基本解$u$，其中$n\geqslant 3$，
  \[
  \triangle u=\delta_0.
  \]

  在第二次作业中，我们给出了$\triangle$的基本解，但是，这种方式不是令人信服的：
  因为我们想知道如何能够合理地动手来构造一个基本解而不是仅仅验证某些分布是基本解。

  我们做如下的预设[^1]：$u$是缓增的分布。那么，利用Fourier变换，在频率空间中，我们就有
  \[
  -|\xi|^2\widehat{u}=1 \ \ \Rightarrow \ \ \widehat{u}(\xi)=-\frac{1}{|\xi|^2}.
  \]
  我们注意到$n\geqslant 3$，所以$|\xi|^{-2}$是局部可积的，从而定义了一个分布。另外，我们可以把它写成
  \[
  \frac{1}{|\xi|^2}=\frac{1}{|\xi|^2}\mathbf{1}_{|\xi|\leqslant 1}(\xi)+\frac{1}{|\xi|^2}\mathbf{1}_{|\xi|> 1}(\xi).
  \]
  这是一个有紧支集的分布与$L^\infty$函数的和，从而是缓增的分布。

  上面给出了$\widehat{u}$的一个可能的解（其他的解与$u$相差一个复系数多项式）。
  为了在物理空间中表达$u$，我们要计算$-\dfrac{1}{|\xi|^2}$的Fourier逆变换。
  我们注意到这是一个旋转对称的次数为$-2$的齐次分布，从而，
  它的Fourier逆变换是旋转对称的次数为$-n+2$的齐次分布。通过这个观察，一个合理的猜测自然是
  \[
  u=\frac{C}{|x|^{n-2}}.
  \]
  这样子，我们就回到了第二次作业中的形式，通过在原点处计算，我们可以将待定的系数$C$算出来。

  在那次作业中，我们已经证明了当$n\geqslant 3$时，
  \[
  E =\frac{|x|^{2-n}}{(2-n)\big|\mathbf{S}^{n-1}\big|}
  \]
  是$\triangle$的基本解，其中$\big|\mathbf{S}^{n-1}\big|$表示$\mathbf{S}^{n-1}$的测度。
  由于$E$在$0$附近可积并且在$\infty$处衰减，所以这是一个缓增的分布，据此，我们知道
  \[
  \widehat{E}(\xi)=-\frac{1}{|\xi|^2}.
  \]
  从而，
  \[
  \mathcal{F}^{-1}\left(-\frac{1}{|\xi|^2}\right)={E}(x).
  \]
  所以，
  \[
  \mathcal{F}\left(-\frac{1}{|\xi|^2}\right)=\left((2\pi)^n\mathcal{F}^{-1}\left(-\frac{1}{|\xi|^2}\right)\right)\check{} =(2\pi)^n{E}(x),
  \]
  即
  \[
  \widehat{{|x|^{-2}}}(\xi)= \frac{(2\pi)^n}{(n-2)\big|\mathbf{S}^{n-1}\big|}|\xi|^{2-n}.
  \]

:::

以下球面测度的Fourier变换很重要，我们在课程的后面会看到它在解波动方程时的应用，
这个公式在调和分析中也是重要例子（限制定理）。

::: example*
令$d\sigma_R$为$\mathbb{R}^3$上中心在原点半径为$R$的球面$\mathbf{S}^2_{R}$上的球面测度，其中$R>0$。
我们（已经见过）可以把它视作是一个$0$阶的分布：对任意的$\varphi\in \mathcal{D}(\mathbb{R}^3)$，
我们令
\[
\left\langle d\sigma_R, \varphi \right\rangle=\int_{\mathbf{S}^2_R}\varphi\big|_{\mathbf{S}^2_R} d\sigma_R.
\]
这是一个具有紧支集的分布，我们要计算它的Fourier变换$\widehat{d\sigma_R}(\xi)$。
这是一个关于$\xi$的光滑函数。
由于分布$d\sigma_R$是旋转不变的（作业），所以$\widehat{d\sigma_R}(\xi)$也是旋转对称的。
特别地，$\widehat{d\sigma_R}(\xi)$是只与$|\xi|$相关的函数。

根据上面的讨论，我们只要做如下计算即可：
\[
\begin{aligned}
\widehat{d\sigma_R}(0,0,|\xi|)&=\langle d\sigma_R, e^{i(x,y,z)\cdot (0,0,|\xi|)}\rangle=\int_{0}^{2\pi}\left(\int_0^{\pi} e^{-i |\xi| R\cos\vartheta} R^2\sin\vartheta d\vartheta \right)d\phi\\
&=2R^2\pi\int_0^{\pi} e^{-i |\xi| R\cos\vartheta} \sin\vartheta d\vartheta =2R^2\frac{e^{-iR|\xi|}t}{-iR|\xi|}\Big|_{-1}^1
\end{aligned}
\]
最终，我们得到
\[
\frac{\widehat{d\sigma_R}}{4\pi R}=\frac{\sin(R|\xi|)}{|\xi|}.
\]
:::

[^1]: 在找到问题的解答之前，我们总是可以做各种（相对合理的）假设。
  这些额外的假设可能给出问题的一类解。
  通过做这样的假设得到的解有时候恰好是问题的所有解，也有可能不是所有的解，
  但是总是比没有找到解更令人欣慰。在英文的文献中，这种假设叫做ansatz。
  在分析问题中，所谓的分离变量法就是这样的一种方法。
  我们将会看到，利用另一种预设，我们也可以得到$\triangle$的基本解。
