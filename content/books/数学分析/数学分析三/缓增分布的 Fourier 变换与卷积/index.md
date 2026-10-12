---
title: 缓增分布的 Fourier 变换与卷积
notices:
  - name: 问题
    items:
      - 第一个命题的证明中，$L^2$ 情形的截断函数定义为 $f_n$，后文却用 $f_k$；且 $f_k\to f$ 似乎应为 $L^2$ 意义下的收敛，而不是 $L^1$ 意义下的收敛。
      - 有紧支集的分布的结构定理的证明中，$|\widehat{c}(\xi)|$ 的估计右端的 $\varphi$ 似乎应为 $\chi$。
---

在进一步研究缓增分布的性质之前，我们先说明对于一个$L^1$或者$L^2$的函数，
我们把它的Fourier变换视作是一个缓增的分布，
也可以先将它视作是缓增的分布再做Fourier变换来得到一个缓增的分布，这两种方式是一致的：

::: proposition
假定$u\in L^1(\mathbb{R}^n)$（或者$L^2(\mathbb{R}^n)$），那么，
它作为缓增分布的Fourier变换与它作为$L^1$（或$L^2$）函数的Fourier变换是一致的。
:::

::: proof
先假设$f\in L^1(\mathbb{R}^n)$，
我们把它在$L^1$意义下的Fourier变换（可用积分来写）记为$\mathcal{F}_1(f)$。
由于$\mathcal{F}_1(f) \in C_{\circ }(\mathbb{R}^n)$，所以，对任意的Schwartz函数$\varphi$，
我们有（容易验证Fubini定理的条件总是满足的）
\[
\begin{aligned}
\langle \mathcal{F}_1(f),\varphi \rangle &= \int_{\mathbb{R}^n} \mathcal{F}_1(f)(\xi)\varphi(\xi)d\xi= \int_{\mathbb{R}^n} \int_{\mathbb{R}^n}e^{-ix\cdot \xi}f(x)\varphi(\xi)dxd\xi\\
&=\int_{\mathbb{R}^n} f(x)\left(\int_{\mathbb{R}^n}e^{-ix\cdot \xi}\varphi(\xi)d\xi\right)dx= \int_{\mathbb{R}^n} f(x)\widehat{\varphi}(x)dx=\langle f,\widehat{\varphi} \rangle\\
&=\langle \widehat{f},\varphi \rangle .
\end{aligned}
\]
其中，最后的等号用的是缓增分布中的Fourier变换。
根据局部可积函数到分布嵌入的唯一性，我们知道$ \mathcal{F}_1(f)=\widehat{f}$。

现在假设$f\in L^2(\mathbb{R}^n)$，我们把它在$L^2$-意义下的Fourier变换记为$\mathcal{F}_2(f)$。
对任意的$k\geqslant 1$，我们令
\[
f_n=f\cdot \mathbf{1}_{|x|\leqslant n} \in L^1(\mathbb{R}^n)\cap L^2(\mathbb{R}^n),
\]
那么，我们已经证明过
\[
\mathcal{F}_2(f) \stackrel{L^2}{=}\lim_{k\rightarrow \infty}\mathcal{F}_1(f_k),
\]
其中，极限是在$L^2$的收敛的意义下取的。所以，作为分布，我们也有（利用Cauchy–Schwarz，请参考作业题）
\[
\mathcal{F}_2(f) \stackrel{\mathcal{D}'}{=}\lim_{k\rightarrow \infty}\mathcal{F}_1(f_k),
\]
从而，根据上述，我们知道
\[
\mathcal{F}_2(f) \stackrel{\mathcal{D}'}{=}\lim_{k\rightarrow \infty}\widehat{f_k},
\]
其中，后面戴帽子的符号代表$\mathcal{S}'$中的Fourier变换。由于
\[
f \stackrel{L^1}{=}\lim_{k\rightarrow \infty} f_k,
\]
所以，
\[
f \stackrel{\mathcal{S}'}{=}\lim_{k\rightarrow \infty} f_k,
\]
从而，根据连续性
\[
\widehat{f_k} \stackrel{\mathcal{D}'}{\longrightarrow}\widehat{f}.
\]
所以，
\[
\mathcal{F}_2(f) \stackrel{\mathcal{D}'}{=}\lim_{k\rightarrow \infty}\widehat{f_k}\stackrel{\mathcal{D}'}{=}\widehat{f}.
\]
这就验证了这些Fourier变换的概念都是相容的。
:::

我们强调过，Fourier分析中的一个直观是物理空间的衰减意味着频率空间的光滑性，这对分布也是成立的：

::: theorem
假设$u\in \mathcal{E}'(\mathbb{R}^n)$（自然在无穷远处衰减地足够快），那么，
$\widehat{u}\in C^\infty(\mathbb{R}_\xi^n)$是光滑函数并且
\[
\widehat{u}(\xi) = \left\langle u, e^{-ix\cdot \xi}\right\rangle.
\]
:::

::: proof
我们选取截断函数$\chi\in C_0^\infty(\mathbb{R}^n)$来帮助我们记住$u$具有紧支集，
其中$\chi|_{{\rm supp}(u)}\equiv 1$。按照定义以及分布与积分可交换的命题，我们有
\[
\begin{aligned}
\langle \widehat{u},\varphi \rangle&=\langle  {u},\widehat{\varphi} \rangle=\langle \chi \cdot u,\widehat{\varphi} \rangle=\langle  {u},\chi\widehat{\varphi} \rangle\\
&=\left\langle  {u},\int_{\mathbb{R}^n}e^{-ix\cdot \xi }\chi(\xi)\varphi(x)dx \right\rangle\\
&=\int_{\mathbb{R}^n}\left\langle  {u}(\xi),e^{-ix\cdot \xi }\chi(\xi)\right\rangle\varphi(x)dx \\
&=\int_{\mathbb{R}^n}\left\langle  {u}(x),e^{-ix\cdot \xi }\chi(x)\right\rangle\varphi(\xi)d\xi\\
&=\int_{\mathbb{R}^n}\left\langle  {u(x)},e^{-ix\cdot \xi }\right\rangle\varphi(\xi)d\xi.
\end{aligned}
\]
这就证明了$\widehat{u}(\xi) = \left\langle u, e^{-ix\cdot \xi}\right\rangle$。

我们将$\xi$视为参数，那么，
\[
\widehat{u}(\xi) =\left \langle u, \chi(x)e^{-ix\cdot \xi}\right\rangle.
\]
所以，函数$\widehat{u}(\xi) $光滑性可以利用对分布与求导数可交换的命题立即得到。
:::

::: remark*
特别的，上面的命题表明，如果将$\xi$视作是复变量，那么，$\widehat{u}(\xi)$是复解析函数。
特别的，它的支集不可能是紧集。
:::

我们再来研究$\mathcal{S}'(\mathbb{R}^n)$上的卷积运算。
为此，我们先考虑在$\mathcal{S}(\mathbb{R}^n)$上的卷积。

::: proposition
任意给定有紧支集的分布$c \in \mathcal{E}'(\mathbb{R}^n)$。那么，

- 1\) 对任意的Schwartz函数$\varphi \in \mathcal{S}(\mathbb{R}^n)$，我们有
  \[
  \varphi*c \in \mathcal{S}(\mathbb{R}^n).
  \]
  进一步，我们能找到正整数$q$（可能依赖于$c$），使得对于任何非负整数$p$，都存在正常数$C_p$，
  使得对任意的$\varphi \in \mathcal{S}(\mathbb{R}^n)$，我们有
  \[
  N_p(\varphi * c) \leqslant C_p N_{p+q}(\varphi).
  \]

- 2\) 对每个Schwartz函数$\varphi \in \mathcal{S}(\mathbb{R}^n)$，我们有
  \[
  \widehat{\varphi*c}(\xi) =  \widehat{\varphi}(\xi)\widehat{c}(\xi),\ \ \forall \xi \in \mathbb{R}^n.
  \]

:::

::: remark*
在本次课的最后一个定理的证明过程中，我们会证明$\widehat{c}(\xi)$是一个多项式增长的函数。
:::

::: proof
我们已经证明过，如果$f$是光滑函数，那么$f*c$是光滑函数并且可以表达为
\[
(f*c)(x) =\langle c,f(x-\cdot)\rangle.
\]
所以，对于Schwartz函数$\varphi$，我们有
\[
(\varphi*c) (x)=\langle c(y), \varphi(y-x)\rangle.
\]
从而，利用分布与求导数可交换的性质，对任意的多重指标$\alpha$和$\beta$，我们就有
\[
(x^\alpha\partial^\beta \varphi*c) (x) = \left\langle c(y), x^\alpha \big(\partial^\beta\varphi\big)(y-x)\right\rangle
\]
由于$c$是有紧支集的分布，我们令$K={\rm supp}(c)$；$c$是有限阶的分布，它的阶记作$q$。
以下我们认为$x$是固定的。从而，
\[
\begin{split}
|(x^\alpha\partial^\beta \varphi*c) (x)| &\leqslant C|x|^{|\alpha|} \sup_{|\gamma|\leqslant q}\left|\partial^\gamma_y \big(\partial^\beta\varphi\big)(y-x)\right|\\
&\leqslant C\big(|x-y|+|y|\big)^{|\alpha|} \sup_{|\gamma|\leqslant q}\left|\partial^\gamma_y \big(\partial^\beta\varphi\big)(y-x)\right|.
\end{split}
\]
在上面的不等式中$y\in K$，所以$|y|$的因子只能贡献一个常数，只贡献一个常数$M$。所以，
\[
\begin{split}
|(x^\alpha\partial^\beta \varphi*c) (x)| &\leqslant C\big(|x-y|+M\big)^{|\alpha|} \sup_{|\gamma|\leqslant q}\left|\partial^\gamma_y \big(\partial^\beta\varphi\big)(y-x)\right|.
\end{split}
\]
通过对$x$取$\sup$，从而，
\[
\sup_{x\in \mathbb{R}^n}|(x^\alpha\partial^\beta \varphi*c) (x)| \leqslant C' N_{|\alpha|+|\beta|+q}(\varphi).
\]
从而，1)中的不等式成立。

现在证明2)。
我们选取截断函数$\chi \in C_0^\infty(\mathbb{R}^n)$，使得$\chi\big|_{{\rm supp}(c)}\equiv 1$。
我们先假定$\varphi \in \mathcal{D}(\mathbb{R}^n)$（从而，如下进行的分布与积分号可以交换）。我们有
\[
\begin{aligned}
\widehat{\varphi * c}(\xi)&=\int_{\mathbb{R}^n}e^{-ix\cdot\xi} \varphi*c(x)dx= \int_{\mathbb{R}^n}e^{-ix\cdot\xi}\left\langle c(y), \varphi(y-x)\right\rangle dx\\
&= \left\langle c(y),\int_{\mathbb{R}^n}e^{-ix\cdot\xi} \varphi(y-x)dx \right\rangle \\
&= \left\langle c(y),\chi(y)\int_{\mathbb{R}^n}e^{-ix\cdot\xi} \varphi(y-x)dx\right\rangle \\
&=\left \langle c(y),\chi(y)e^{-iy\cdot \xi}\widehat{\varphi}(\xi)\right\rangle \\
&=\left\langle c(y),\chi(y)e^{-iy\cdot \xi}\right\rangle \widehat{\varphi}(\xi)\\
&=\left\langle c(y),e^{-iy\cdot \xi}\right\rangle \widehat{\varphi}(\xi)\\
&=\widehat{c}(\xi)\widehat{\varphi}(\xi).
\end{aligned}
\]
对于一般情形，我们选取$\varphi_k\stackrel{\mathcal{S}}{\longrightarrow} \varphi$，
其中$\{\varphi_k\}_{k\geqslant 1}\in \mathcal{D}(\mathbb{R}^n)$。
根据1)的证明，对任意的非负整数$p$，我们有
\[
N_p(\varphi * c-\varphi_k*c) \leqslant C_p N_{p+q}(\varphi-\varphi_k).
\]
从而，
\[
\varphi_k*c\stackrel{\mathcal{S}}{\longrightarrow} \varphi*c,
\]
从而根据Fourier变换的连续性，我们有
\[
\widehat{\varphi_k*c}(\xi)=\widehat{\varphi_k}(\xi)\widehat{c}(\xi)\stackrel{\mathcal{S}}{\longrightarrow} \widehat{\varphi*c}(\xi).
\]
另外，
我们还有
$\widehat{\varphi_k}(\xi)\widehat{c}(\xi)\stackrel{\mathcal{S}}{\longrightarrow} \widehat{\varphi}(\xi)\widehat{c}(\xi)$（因为
$\widehat{c}$是多项式增长的，请参考本次作业），这就证明了定理。
:::

::: theorem
对任意的$u\in \mathcal{S}'(\mathbb{R}^n)$，$c\in \mathcal{E}'(\mathbb{R}^n)$，
我们有 $u*c \in \mathcal{S}'(\mathbb{R}^n)$，即
\[
\mathcal{S}'(\mathbb{R}^n)\times  \mathcal{E}'(\mathbb{R}^n) \stackrel{*}{\longrightarrow}  \mathcal{S}'(\mathbb{R}^n),  \ \ (u,c)\mapsto u*c.
\]
进一步，我们还有
\[
\widehat{u*c} =  \widehat{c}\cdot \widehat{u},
\]
其中，$\widehat{c}$是多项式增长的（实际上有衰减）光滑函数。
:::

::: proof
首先证明$u*c \in \mathcal{S}'(\mathbb{R}^n)$。
对任意的$\varphi \in \mathcal{D}(\mathbb{R}^n)$，存在常数$C$和$p$，使得有
\[
\begin{aligned}
\left|\langle u*c,\varphi\rangle\right| &= |\langle u,\check{c}*\varphi\rangle|\leqslant CN_p(\check{c}*\varphi)
\end{aligned}
\]
利用上一个命题，我们有
\[
\begin{aligned}
\left|\langle u*c,\varphi\rangle\right| &\leqslant C' N_{p+q}(\varphi).
\end{aligned}
\]
所以，$u*c$是缓增的分布。

下面计算$u*c$的Fourier变换：对任意给定的$\varphi\in \mathcal{D}(\mathbb{R}^n)$，
那么$\psi=\widehat{\varphi} \in \mathcal{S}(\mathbb{R}^n)$。从而，
\[
\begin{aligned}
\langle \widehat{u*c},\psi\rangle &= \langle {u*c},\widehat{\psi}\rangle=\langle {u*c},(2\pi)^n\check{\varphi}\rangle\\
&=\langle u,(2\pi)^n\check{c}*\check{\varphi}\rangle=\langle u,\widehat{\widehat{{c}*{\varphi}}}\rangle=\langle \widehat{u},{\widehat{{c}*{\varphi}}}\rangle\\
&=\langle \widehat{u},{\widehat{{c}}\widehat{{\varphi}}}\rangle=\langle\widehat{{c}}\cdot \widehat{u},\psi\rangle.
\end{aligned}
\]
利用Fourier变换的连续性，
$\mathcal{D}(\mathbb{R}^n)$在$\mathcal{S}(\mathbb{R}^n)$的稠密性意味着上述所有可能的$\psi$在
$\mathcal{S}(\mathbb{R}^n)$中稠密，（通过逼近）所以上面的等式就给出了定理完整证明。
:::

利用我们学过的知识，我们可以给出$\mathcal{E}'(\mathbb{R}^n)$的一个漂亮的刻画：

::: theorem [有紧支集的分布的结构定理]
对任意的有紧支集的分布$c\in \mathcal{E}'(\mathbb{R}^n)$，
存在有限多个多重指标$\alpha_1,\cdots,\alpha_m$和有限多个有紧支集的连续函数
$f_{\alpha_1}(x), \cdots, f_{\alpha_m}(x)$，使得
\[
c =\sum_{k\leqslant m}\partial^{\alpha_k} f_{\alpha_k}(x).
\]
:::

::: remark*
我们甚至可以进一步要求$|\alpha_1|=|\alpha_2|=\cdots=|\alpha_m|$。
:::

::: proof
我们选取截断函数$\chi\in C_0^\infty(\mathbb{R}^n)$，使得$\chi|_{{\rm supp}(c)}\equiv 1$。
那么，我们有
\[
\begin{aligned}
\widehat{c}(\xi) =\left \langle c, e^{-ix\cdot \xi}\right\rangle =\left \langle c, \chi(x)e^{-ix\cdot \xi}\right\rangle.
\end{aligned}
\]
由于$c$的阶是有限的（记作是$p$），所以存在常数$C$，使得
\[
\begin{aligned}
|\widehat{c}(\xi)| \leqslant C\sup_{|\alpha|\leqslant p}\|\partial^\alpha\big(\chi(x)e^{-ix\cdot \xi}\big)\|_{L^\infty_x}\leqslant C(1+|\xi|)^p\sup_{|\beta|\leqslant |\alpha|}\|\partial^{\beta}\varphi\|_{L^\infty}.
\end{aligned}
\]
所以，只要选取$N\geqslant p+n+1$，我们就有
\[
F(\xi)=\frac{1}{(1+|\xi|^2)^N}\widehat{c}(\xi) \in L^1(\mathbb{R}^n),
\]
特别的，$\mathcal{F}^{-1}F\in C_{\circ}(\mathbb{R}^n)$是连续函数。
通过导数与乘法在Fourier变换下的关系，我们就得到
\[
(1-\triangle)^N \left(\mathcal{F}^{-1}F\right)= c.
\]
从而，
\[
\chi(x)(1-\triangle)^N \left(\mathcal{F}^{-1}F\right)= c.
\]
利用$\chi\cdot \partial_j=\partial_j(\chi \cdot )-\partial_j\chi$，
我们可以把$\chi$（以及其导数）的乘法全部放到求导数运算里面去，这就给出了定理的证明。
:::
