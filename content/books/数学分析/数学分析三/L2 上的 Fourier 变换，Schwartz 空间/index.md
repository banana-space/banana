---
title: $L^2$ 上的 Fourier 变换，Schwartz 空间
---

## $L^2(\mathbb{R}^n)$上的Fourier变换

利用Fourier逆变换，我们可以在$L^2$上定义Fourier变换。注意到，对于$f\in L^2(\mathbb{R}^n)$，积分
\[
\int_{\mathbb{R}^n} e^{-ix\cdot \xi}f(x)\,dx
\]
可能并没有定义，比如$\mathbb{R}^1$上的函数
\[
f(x)=\frac{1}{1+|x|}.
\]

注意到，$C_0^\infty(\mathbb{R}^n)\subset L^2(\mathbb{R}^n)$是稠密的子空间。
我们任意选取$f\in C_0^\infty(\mathbb{R}^n)$，很明显，
$\widehat{f}\in L^1(\mathbb{R}^n)$（因为光滑性意味着衰减很快，所以可积）。另外，我们有
\[
\overline{\widehat{f}}(\xi)=\int_{\mathbb{R}^n}e^{ix\cdot \xi}\overline{f(x)}\,dx=(2\pi)^n\mathcal{F}^{-1}(\overline{f})(\xi).
\]
所以，我们有
\[
\begin{aligned}
\|\widehat{f}(\xi)\|^2_{L^2}&=\int_{\mathbb{R}^n} \widehat{f}(\xi)\overline{\widehat{f}(\xi)}\,d\xi\\
&=(2\pi)^{n}\int_{\mathbb{R}^n} \widehat{f}(\xi)\mathcal{F}^{-1}\big(\overline{{f}(\xi)}\big)\,d\xi\\
&=(2\pi)^{n}\int_{\mathbb{R}^n}{f}(x) \mathcal{F}\bigl(\mathcal{F}^{-1}\big(\overline{{f}(\xi)}\big)\bigr)(x)\,dx\\
&=(2\pi)^{n}\int_{\mathbb{R}^n}{f}(x) \overline{f}(x)\,dx.
\end{aligned}
\]
从而，
\[
\|\widehat{f}(\xi)\|_{L^2} =(2\pi)^{\frac{n}{2}}\|f\|_{L^2}.
\]
这表明定义在$L^2(\mathbb{R}^n)$的稠密的子空间$C_0^\infty(\mathbb{R}^n)$上的Fourier变换
\[
\mathcal{F}\colon C_0^\infty(\mathbb{R}^n)\rightarrow  L^2(\mathbb{R}^n), \ \  f\mapsto \widehat{f}
\]
是连续的。

\[
\begin{tikzcd}
 C^\infty_0(\mathbb{R}^n)\ar[r,"\iota"] \ar[dr, "\mathcal{F}"']
  & L^2(\mathbb{R}^n) \ar[d,"\mathcal{F}",dashed]\\
&L^2(\mathbb{R}^n) \end{tikzcd}
\]

根据连续线性映射扩张的定理，我们就证明了

::: theorem [$L^2$上的Fourier变换与Plancherel公式]
我们可以定义Fourier变换$\mathcal{F}$：
\[
\mathcal{F}\colon L^2(\mathbb{R}^n)\rightarrow  L^2(\mathbb{R}^n)
\]
使得
\[
(2\pi)^{\frac{n}{2}}\mathcal{F}\colon L^2(\mathbb{R}^n)\longrightarrow L^2(\mathbb{R}^n)
\]
是等距同构。

特别地，对于$f\in L^1(\mathbb{R}^n)\cap L^2(\mathbb{R}^n)$，我们有
\[
\|\widehat{f}\|_{L^2}^2= (2\pi)^n\|f\|_{L^2}^2.
\]
通过极化，我们有对任意的$f,g\in L^2(\mathbb{R}^n)$，我们有
\[
(\widehat{f},\widehat{g})_{L^2}=(2\pi)^n({f},{g})_{L^2}.
\]
:::

::: proof
上述一切叙述对$C_0^\infty(\mathbb{R}^n)$是成立的。
对一般的$f\in L^2(\mathbb{R}^n)$，用$C_0^\infty(\mathbb{R}^n)$中函数逼近即可。
:::

::: remark*
上面的定理定义了$f\in L^2(\mathbb{R}^n)$的Fourier变换，为了行文清楚，
我们暂且把$L^2$意义下的Fourier变换记作$\mathcal{F}_2$。
另外，对于$g\in L^1(\mathbb{R}^n)$，它的Fourier变换是可以用Fourier积分表示的，
我们把它记做$\mathcal{F}_1$，也就是说
\[
\mathcal{F}_1(g)(\xi)=\int_{\mathbb{R}^n}g(x)e^{-ix\cdot\xi}dx.
\]
那么，对于$f\in L^1(\mathbb{R}^n)\cap L^2(\mathbb{R}^n)$，我们有
\[
\mathcal{F}_1(f)=\mathcal{F}_2(f).
\]
这个有趣的验证我们留作作业。
:::

::: example*
考虑$\mathbb{R}^1$上的$L^2$-函数
\[
u(x)=(1+|x|)^{-\alpha},
\]
其中，$\frac{1}{2}<\alpha\leqslant 1$。
很明显，我们知道$e^{-ix\xi}u(x)\notin L^1(\mathbb{R}_x)$，
所以我们不能直接用$L^1$-函数的Fourier积分来写它的Fourier变换。然而，我们知道
\[
u_n(x)=u(x)\mathbf{1}_{|x|\leqslant n}
\]
是$L^1$的，我们可以先显式写下$u_n$的Fourier变换。
由于序列$\{u_n\}_{n\geqslant 1}$在$L^2$中逼近$u$，所以，我们有
\[
\widehat{u}\stackrel{L^2}{=}\lim_{n\rightarrow\infty} \widehat{u_n}.
\]
:::

::: exercise*
证明，对任意的$f\in L^2(\mathbb{R}^n)$，我们都有
\[
\widehat{\hat{f}}= (2\pi)^n \check{f} \ \ \Leftrightarrow \ \ \mathcal{F}^2(f)= (2\pi)^n \check{f}.
\]
:::

## Schwartz空间

对任意的给定的函数$f$，对任意的多重指标$\alpha$，我们采用如下的符号：
\[
x^\alpha f(x)=x_1^{\alpha_1}\cdots x_n^{\alpha_n} f(x_1,\cdots,x_n).
\]

::: definition [Schwartz空间]
函数$\varphi$是$\mathbb{R}^n$上的光滑函数。
如果$\varphi$满足如下的条件：对任意的多重指标$\alpha$，$\beta$，我们都有
\[
x^\alpha \partial^\beta \varphi(x) \in L^\infty(\mathbb{R}^n),
\]
那么，我们就称$\varphi$是一个**Schwartz函数**或者是一个**速降的函数**。
我们把$\mathbb{R}^n$上所有的Schwartz函数所构成的线性空间称作是**Schwartz空间**，
并记作$\mathcal{S}(\mathbb{R}^n)$。

对于每个非负整数$p \in \mathbb{Z}_{\geqslant 0}$，我们定义如下的（一族）范数：
\[
N_p(\varphi)=\sum_{|\alpha|\leqslant p,\\ \atop |\beta|\leqslant p}\|x^\alpha \partial^\beta \varphi(x)\|_{L^\infty(\mathbb{R}^n)}.
\]

在$\mathcal{S}(\mathbb{R}^n)$上，我们规定如下的收敛性（拓扑）：
给定Schwartz函数的序列$\{\varphi_k\}_{k=1,2,\cdots} \subset \mathcal{S}(\mathbb{R}^n)$，
它收敛到Schwartz函数$\varphi \in \mathcal{S}(\mathbb{R}^n)$，指的是对任意的非负整数$p$，我们都有
\[
\lim_{k\rightarrow \infty}N_p(\varphi_k-\varphi)=0.
\]
我们把这个极限简写成
\[
\varphi_k \stackrel{\mathcal{S}(\mathbb{R}^n)}{\longrightarrow}\varphi.
\]
:::

::: example*
我们已经见过很多Schwartz函数

- $\mathcal{D}(\mathbb{R}^n)\subset \mathcal{S}(\mathbb{R}^n)$；

- $e^{-|x|^2}\in \mathcal{S}(\mathbb{R}^n)$；

- 对于Schwartz函数$\varphi \in \mathcal{S}(\mathbb{R}^n)$，
  对它求若干次导数或者乘以一个多项式仍然是一个Schwartz函数，即对任意的多重指标$\alpha,\beta$，我们有
  \[
  \begin{aligned}
  x^\alpha\colon &\mathcal{S}(\mathbb{R}^n)\rightarrow  \mathcal{S}(\mathbb{R}^n),  \\
  \partial^\beta\colon &\mathcal{S}(\mathbb{R}^n)\rightarrow  \mathcal{S}(\mathbb{R}^n).
  \end{aligned}
  \]

上面例子的验证我们留作作业。
:::

给定一个Schwartz函数，我们对它有如下的估计：对于任何的多重指标$\alpha$和$\beta$，
其中$|\alpha|,|\beta|\leqslant p$，我们有
\[
|(1+|x|)^{n+1}x^\alpha \partial^\beta \varphi(x)|\leqslant N_{p+n+1}(\varphi),
\]
其中，$n$是空间的维数。从而，对任意的$x\in \mathbb{R}^n$，我们有
\[
|x^\alpha \partial^\beta \varphi(x)|\leqslant \frac{N_{p+n+1}(\varphi)}{(1+|x|)^{n+1}}.
\]
上式右边的函数是可积的，所以，
\[
\|x^\alpha \partial^\beta \varphi(x)\|_{L^1(\mathbb{R}^n)}\leqslant C_n N_{p+n+1}(\varphi).
\]
特别地，我们可以对$x^\alpha \partial^\beta \varphi(x)$用Fourier积分来定义其Fourier变换。
作为推论，我们还知道
\[
\mathcal{S}(\mathbb{R}^n)\subset L^1(\mathbb{R}^n).
\]

另外，以上的估计是常用的技巧，在后面的不少场合都会用到。

::: theorem
$\mathcal{D}(\mathbb{R}^n)$在$\mathcal{S}(\mathbb{R}^n)$中是稠密的，
即对任意的$\varphi \in \mathcal{S}(\mathbb{R}^n)$，
存在函数序列$\{\varphi_k\}_{k\geqslant 1}\subset \mathcal{D}(\mathbb{R}^n)$，使得
\[
\varphi_k \stackrel{\mathcal{S}(\mathbb{R}^n)}{\longrightarrow}\varphi.
\]
:::

::: proof
我们选取有紧支集的光滑函数$\chi(x)$，使得
\[
\begin{cases}
\chi(x) = 1, \ \ & |x|\leqslant1;\\
0\leqslant \chi(x) \leqslant 1.&
\end{cases}
\]
对于$\varphi(x)\in \mathcal{S}(\mathbb{R}^n)$，我们令
\[
\varphi_k(x) = \chi\left(\frac{x}{k}\right)\varphi(x) \in \mathcal{D}(\mathbb{R}^n).
\]
我们只要证明，对任意的非负整数$p$，我们有
\[
N_p(\varphi_k-\varphi)\rightarrow 0,
\]
即可。对于满足$|\alpha|\leqslant p,~|\beta|\leqslant p$的多重指标，我们有
\[
\begin{aligned}
x^\alpha\partial^\beta(\varphi-\varphi_k)& =x^\alpha \partial^\beta\left(\left(1-\chi\left(\frac{x}{k}\right)\right)\varphi\right)\\
&=\left(1-\chi\left(\frac{x}{k}\right)\right)x^\alpha \partial^\beta\varphi -\underbrace{\sum_{0\neq \gamma \leqslant \beta} \frac{1}{k^{|\gamma|}}\frac{\beta!}{\gamma!(\beta-\gamma)!} \underbrace{x^\alpha\partial^{\beta-\gamma}\varphi(x)}_{|~\cdot ~|\leqslant N_p(\varphi)}\left(\partial^\gamma\chi\right)\left(\frac{x}{k}\right)}_{\longrightarrow 0, \ k\rightarrow \infty}
\end{aligned}
\]
上式的第二个求和部分有$k^{-1}$这样的衰减因子，所以极限为$0$。
对于第一项，由于$\chi$在半径为$1$的球内部为$1$，所以$1-\chi\left(\dfrac{x}{k}\right)$在$|x|<k$上为$0$；
另外，$0\leqslant 1-\chi\leqslant 1$。从而，我们有
\[
\begin{aligned}
\left|\left(1-\chi\Big(\frac{x}{k}\Big)\right)x^\alpha \partial^\beta\varphi\right|&\leqslant \mathbf{1}_{|x|\geqslant k}(x)\cdot |x|^{-2}\cdot |x^{\alpha+2}\partial^\beta \varphi|\\
&\leqslant \frac{1}{k^2}N_{p+2}(\varphi)\rightarrow 0.
\end{aligned}
\]
这就完成了证明。
:::

我们现在研究Schwartz函数的Fourier变换。
我们已经证明了$\mathcal{S}(\mathbb{R}^n) \subset L^1(\mathbb{R}^n)$，所以，
$\varphi\in \mathcal{S}(\mathbb{R}^n)$的Fourier变换还是可以用积分公式
\[
\mathcal{F}(\varphi)(\xi)=\widehat{\varphi}(\xi)=\int_{\mathbb{R}^n}\varphi(x)e^{-ix\cdot \xi}dx
\]
来表示。

::: theorem [$\mathcal{S}(\mathbb{R}^n)$上的Fourier变换]
如果$\varphi \in \mathcal{S}(\mathbb{R}^n)$是Schwartz函数，那么，
$\widehat{\varphi} \in  \mathcal{S}(\mathbb{R}^n)$。在Schwartz函数空间上的Fourier变换：
\[
\mathcal{F}\colon\mathcal{S}(\mathbb{R}^n)\longrightarrow \mathcal{S}(\mathbb{R}^n), \ \ \varphi\mapsto \widehat{\varphi}(\xi),
\]
满足如下的性质：对任意的$p\in \mathbb{Z}_{\geqslant 0}$，存在常数$C_p>0$，
使得对每个$\varphi\in \mathcal{S}(\mathbb{R}^n)$，我们都有
\[
N_p(\widehat{\varphi})\leqslant C_p N_{p+n+1}(\varphi).
\]
特别地，
$\mathcal{F}\colon\mathcal{S}(\mathbb{R}^n)\longrightarrow \mathcal{S}(\mathbb{R}^n)$
是连续的线性同构，即对任意的在$\mathcal{S}(\mathbb{R}^n)$中收敛的函数序列
\[
\varphi_k\stackrel{\mathcal{S}}{\longrightarrow}\varphi, \ \ k\rightarrow \infty,
\]
我们有
\[
\widehat{\varphi_k}\stackrel{\mathcal{S}}{\longrightarrow}\widehat{\varphi}, \ \ k\rightarrow \infty.
\]
另外，对任意的$\varphi\in \mathcal{S}(\mathbb{R}^n)$，我们还有公式
\[
\widehat{\partial_k \varphi} = i\xi_k \widehat{\varphi}, \ \ \widehat{x_k \varphi} = i\partial_k \widehat{\varphi}.
\]
:::

::: proof
我们首先证明叙述中的最后两个恒等式。
对任意的Schwartz函数$\varphi$，对任意的$k\leqslant n$，利用分部积分，我们有
\[
\begin{aligned}
\widehat{\partial_{k}\varphi}(\xi)&=-\int_{\mathbb{R}^n}(-i\xi_k)e^{-ix\cdot \xi}\varphi(x)\,dx = i\xi_k\widehat{\varphi}(\xi).
\end{aligned}
\]
第二个等式要用Lebesgue控制收敛的推论（积分与求导数可交换），我们有
\[
\begin{aligned}
\partial_{\xi_k}\widehat{\varphi}(\xi)&=\int_{\mathbb{R}^n}(-ix_k)e^{-ix\cdot \xi}\varphi(x)\,dx=\widehat{-i{x_k}\varphi}(\xi).
\end{aligned}
\]

现在证明定理中的不等式（从而证明了Fourier变换$\mathcal{F}$的像也落在$\mathcal{S}(\mathbb{R}^n)$
中）。固定两个多重指标$\alpha$和$\beta$，其中$|\alpha|,|\beta|\leqslant p$。
利用已经证明的公式，我们就有
\[
\begin{aligned}
|\xi^\alpha\partial_\xi^\beta \widehat{\varphi}(\xi)|&=|\widehat{\partial^\alpha(x^\beta \varphi)}(\xi)|\leqslant \|\partial^\alpha(x^\beta \varphi)(x)\|_{L^1}\\
&\leqslant C_p N_{p+n+1}(\varphi).
\end{aligned}
\]
Fourier变换的连续性可以通过这个不等式得到：对任意给定的$p$，我们有
\[
N_{p}(\widehat{\varphi_k}-\widehat{\varphi})\leqslant C_p N_{p+n+1}(\varphi_k-\varphi) \rightarrow 0,
\]
按照定义，我们就有
\[
\widehat{\varphi_k}\stackrel{\mathcal{S}}{\longrightarrow}\widehat{\varphi}, \ \ k\rightarrow \infty.
\]

最后，我们来说明$\mathcal{F}$是同构。
实际上，我们可以定义直接考虑Fourier变换的逆$\mathcal{F}^{-1}$，因为$\widehat{\varphi}\in L^1$，
所以之前定义的$\mathcal{F}^{-1}$在此也是良好定义的。
此时，我们已经证明了$\mathcal{F}$与$\mathcal{F}^{-1}$互为逆映射，
所以命题得证（$\mathcal{F}^{-1}$也是连续的）。
:::

::: definition [缓增的分布]
假设$u\in \mathcal{D}'(\mathbb{R}^n)$是一个分布。
如果存在非负整数$p$和常数$C>0$，使得对每个$\varphi\in \mathcal{D}(\mathbb{R}^n)$，我们都有
\[
|\langle u,\varphi \rangle|\leqslant C N_p(\varphi),
\]
我们就说$u$ 是一个**缓增的**分布。我们用$\mathcal{S}'(\mathbb{R}^n)$来表示所有缓增分布的集合，很明显
\[
\mathcal{S}'(\mathbb{R}^n)\subset \mathcal{D}'(\mathbb{R}^n)
\]
是线性子空间。
:::

::: theorem [$\mathcal{S}'(\mathbb{R}^n)\times\mathcal{S}(\mathbb{R}^n)\rightarrow \mathbb{R}$]
对任意的$u\in \mathcal{S}'(\mathbb{R}^n)$，存在唯一一个线性泛函
\[
T_u\colon\mathcal{S}(\mathbb{R}^n)\rightarrow \mathbb{C},
\]
使得存在非负整数$p$和常数$C>0$，对每个$\varphi \in \mathcal{S}(\mathbb{R}^n)$，我们都有
\[
\big|T_u(\varphi)\big|\leqslant C N_p(\varphi),
\]
并且对于任意的$\psi\in \mathcal{D}(\mathbb{R}^n)$，都有
\[
T_u(\psi)=\langle u,\psi \rangle.
\]
在后面的场合，为了简单起见，我们仍将此线性泛函的作用记作$\langle u, \cdot \rangle$。
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
\left|\langle u,\varphi_k \rangle-\langle u,\varphi_\ell \rangle\right|&\leqslant C_0N_{p_0}(\varphi_k-\varphi_\ell)\\
&\leqslant C_0\bigl(N_{p_0}(\varphi_k-\varphi)+N_{p_0}(\varphi_\ell-\varphi)\bigr) \stackrel{k,\ell\rightarrow \infty}{\longrightarrow} 0.
\end{aligned}
\]
这说明$\{\langle u,\varphi_k \rangle\}_{k\geqslant 1}$是Cauchy列，所以所讨论的极限是存在的。

下面再说明这个极限不依赖于逼近序列$\{\varphi_k\}_{k\geqslant 1} \subset   \mathcal{D}(\mathbb{R}^n)$
的选取。
假设$\{\psi_k\}_{k\geqslant 1} \subset \mathcal{D}(\mathbb{R}^n)$是另一个逼近序列，那么，我们有
\[
\begin{aligned}
N_{p_0}(\varphi_k-\psi_k)\\
&\leqslant N_{p_0}(\varphi_k-\varphi)+N_{p_0}(\psi_k-\varphi) \stackrel{k\rightarrow \infty}{\longrightarrow} 0.
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
