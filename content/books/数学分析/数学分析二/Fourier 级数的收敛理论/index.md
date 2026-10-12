---
title: Fourier 级数的收敛理论
---

## du Bois-Reymond 反例

首先，我们要明确，Fourier级数在一点处是否收敛并不是明显的，比如，对于连续函数，
我们有 du Bois-Reymond的著名反例（1876）。
这个构造背后的想法是基于下面不等式（$x\neq 0$ 时，利用级数的Abel判别法／求和法；$x=0$ 时，
这是显然的，然而这个情况很重要）：存在正常数 $C$，使得
\[
|\sum_{1\leqslant |k|\leqslant N }\frac{e^{ikx}}{k}|\leqslant C.
\]

另外，我们现在不再把每个频率 $e^{ikx}$ 看成基本的单元，
而是把若干个频率的叠加（在有控制的情形下）看成基本的单元（物理上讲这样的叠加称作是**波包**）。

对于 $K\in \mathbb{Z}_{\geqslant 1}$，我们定义波包函数
\[
\begin{aligned}
&W_K(x)=e^{i(2K)\cdot x}\sum_{1\leqslant |k|\leqslant K }\frac{e^{ikx}}{k}, \\
&W_K^-(x)=e^{i(2K)\cdot x}\sum_{-K\leqslant k \leqslant -1 }\frac{e^{ikx}}{k}.
\end{aligned}
\]
那么，

- $W_K(x)$ 在频率 $k=K,K+1,\cdots, 3K$ 之外都是零。

  也就是说，如果 $k\notin [K,3K]$，那么 $\widehat{W_K}(k)=0$。

- $W^-_K(x)$ 在频率 $k=K,K+1,\cdots, 2K$ 之外都是零。

我们依次选取 $K_1,K_2,K_3,\cdots$，使得对任意的 $\ell\geqslant 1$，我们都有 $K_{\ell+1}>3K_\ell$；
序列 $\{K_\ell\}_{\ell\geqslant 1}$ 将在下面具体地构造。
这样得到的所有 $W_{K_\ell}$ 和 $W^-_{K_\ell}$ 在频率空间上面的支集是两两不相交的。

根据我们提到的不等式（用Abel求和法来证明的），下面级数是绝对收敛的：
\[
f(x)=\sum_{\ell=1}^\infty  \frac{1}{\ell^2}W_{K_\ell}(x).
\]
从而，$f\in C^0(\mathbf{T})$ 是连续函数。

我们现在考察 $f$ 的部分和，特别是 $S_{2K_{\ell_0}}(f)$ 这一项。很明显，
\[
S_{2K_{\ell_0}}f(x)=\Bigl(\frac{1}{\ell_0}\Bigr)^2W^-_{K_{\ell_0}}(x)+\sum_{\ell=1}^{\ell_0-1}  \frac{1}{\ell^2}W_{K_\ell}(x).
\]
由于 $W_{K_\ell}$ 是有界的，所以后面一项的总是有限的（小于一个固定的常数），我们不必担心；
对于第一项，我们在 $x=0$ 处取值，从而，我们得到
\[
\Bigl(\frac{1}{\ell_0}\Bigr)^2W^-_{K_{\ell_0}}(0)=\Bigl(\frac{1}{\ell_0}\Bigr)^2\sum_{k=-1}^{-K_{\ell_0}}\frac{1}{k}\sim \frac{\log(K_{\ell_0})}{\ell_0^2}.
\]
为了让这一项发散（当 $\ell_0\rightarrow \infty$ 时），我们选取 $K_\ell = 3^{\ell^3}$，
其中 $\ell\geqslant 1$ 即可（此时，$K_{\ell+1}>3K_\ell$ 自动满足）。

总结上面的构造，我们就有

::: proposition [du Bois-Reymond]
存在连续函数 $f\in C(\mathbf{T})$，
使得其Fourier级数的部分和序列 $\{S_N(f)(x)\}_{N\geqslant 1}$ 在 $x=0$ 处发散。
:::

## Fourier 级数的收敛理论

历史上有很多定理给出了充分条件保证Fourier级数在一点处的收敛。

::: theorem
给定函数 $f\in L^1(\mathbf{T})$ 和 $x_0\in \mathbf{T}$。我们假设它们满足下面的要求：

- 1\) $f$ 在 $x_0$ 处的左右极限 $f_-(x_0)$ 和 $f_+(x_0)$ 都存在；

- 2\) 存在 $\delta>0$，使得
  \[
  \displaystyle \left| \int_{0}^\delta \frac{|f(x_0-t)-f_-(x_0)|}{t}dt\right|+\left| \int_{0}^\delta \frac{|f(x_0+t)-f_+(x_0)|}{t}dt\right|<\infty.
  \]

那么，数列 $\{S_N(f)(x)\}_{N\geqslant 0}$ 在 $x=x_0$ 处收敛并且
\[
\displaystyle \lim_{N\rightarrow \infty}S_N(f)(x_0)=\frac{f_-(x_0)+f_+(x_0)}{2}.
\]
:::

::: proof
证明的关键是将积分改写为可以运用Riemann–Lebesgue引理的形式：
\[
\begin{aligned}
&S_N(f)(x_0)-\frac{f_-(x_0)+f_+(x_0)}{2}\\
=&\int_{-\pi}^\pi D_N(x)\bigl(f(x_0-x)-\frac {f_-(x_0)+f_+(x_0)}{2}\bigr)\frac{dx}{2\pi}\\
=&\int_{0}^\pi D_N(y)\bigl(f(x_0-y)-f_-(x_0)+f(x_0+y)-f_+(x_0)\bigr)\dfrac{dy}{2\pi}\\
=&\int_{0}^\pi \sin\bigl((N+\frac{1}{2})y\bigr) \cdot \underbrace{\frac{y}{\sin\bigl(\frac{1}{2}y\bigr)} \cdot \frac{\bigl(f(x_0-y)-f_-(x_0)+f(x_0+y)-f_+(x_0)\bigr)}{y}}_{\in \mathbf{L}^1}\frac{dy}{2\pi}
\end{aligned}
\]
从而，我们可以再次利用Riemann–Lebesgue引理。
:::

历史上第一个关于Fourier级数收敛的严格数学定理是Dirichlet证明的（1847），它很明显是上面定理的推论：

::: theorem [Dirichlet]
假设函数 $f$ 是 $\mathbf{T}$ 上的分段 $C^1$ 函数，
即存在 $0=x_1<x_2<\cdots<x_{\ell-1}<x_\ell=2\pi=x_1$，
使得 $f$ 限制在每个区间 $[x_{k},x_{k+1}]$ 上都是 $C^1$ 的（而函数 $f$ 本身在 $x_k$ 处可能不连续）。
那么，对任意的 $x_0\in \mathbf{T}$，$\{S_N(f)(x)\}_{N\geqslant 0}$ 在 $x=x_0$ 处收敛并且
\[
\displaystyle \lim_{N\rightarrow \infty}S_N(f)(x_0)=\frac{f_-(x_0)+f_+(x_0)}{2}.
\]
:::

::: proof
只要对 $f$ 用Lagrange中值定理就可以验证前一个定理的条件。
:::

::: theorem [Dini]
给定函数 $f\in L^1(\mathbf{T})$ 和 $x_0\in \mathbf{T}$。假设他们满足
\[
\displaystyle \left| \int_{0}^\pi\frac{|f(x_0-t)+f(x_0+t)-2f(x_0)|}{t}dt\right|<\infty.
\]
那么，$\{S_N(f)(x)\}_{N\geqslant 0}$ 在 $x=x_0$ 处收敛并且
\[
\displaystyle \lim_{N\rightarrow \infty}S_N(f)(x_0)=f(x_0).
\]
:::

::: proof
证明是类似的，我们有
\[
\begin{aligned}
&\ \ \ S_N(f)(x_0)-f(x_0)\\
&=\int_{0}^\pi D_N(x)\bigl(f(x_0-x)+f(x_0+x)-2f(x_0)\bigr)\frac{dx}{2\pi}\\
&=\int_{0}^\pi \sin\bigl((N+\frac{1}{2})y\bigr) \cdot \underbrace{\frac{y}{\sin\bigl(\frac{1}{2}y\bigr)} \cdot \frac{\bigl(f(x_0-y)+f(x_0+y)-2f(x_0)\bigr)}{y}}_{\in \mathbf{L}^1}dy
\end{aligned}
\]
现在可以使用Riemann–Lebesgue引理。
:::

::: definition [Hölder空间]
给定 $0<\alpha<1$。
如果对于 $\mathbf{T}$ 上的连续函数 $f$，存在常数 $C>0$，使得对任意的 $x,y\in \mathbb{R}$，我们都有
\[
|f(x)-f(y)|\leqslant C|x-y|^\alpha,
\]
我们就说 $f$ 是 **$\alpha$-Hölder连续的**。
我们把所有 $\alpha$-Hölder连续的周期函数记作 $C^\alpha(\mathbf{T})$。
:::

::: corollary
假设 $f\in C^\alpha(\mathbb{T})$，其中 $0<\alpha<1$。
那么，对任意的 $x\in \mathbf{T}$，$\{S_N(f)(x)\}_{N\geqslant 0}$ 收敛并且
\[
\displaystyle \lim_{N\rightarrow \infty}S_N(f)(x)=f(x).
\]
:::

::: proof
根据Hölder连续性，我们有
\[
\begin{aligned}
&\ \ \ \left| \int_{0}^\pi\frac{|f(x_0-t)+f(x_0+t)-2f(x_0)|}{t}dt\right|\\
&\leqslant \int_{0}^\pi\frac{|f(x_0-t)-f(x_0)|+|f(x_0+t)-f(x_0)|}{t}dt\\
&\leqslant  \int_{0}^\pi 2Ct^{\alpha-1}dt.
\end{aligned}
\]
由于 $\alpha>0$，所以上面的积分是有限的。利用Dini定理我们就完成了证明。
:::

::: remark*
上述的所有命题（包括定义）对 $\alpha=1$ 也成立。
回忆一下，$\alpha=1$ 时，我们称这样的函数是Lipschitz连续的。
:::

::: remark*
上述收敛未必是一致收敛，之后我们将证明，如果 $\alpha>\dfrac{1}{2}$，那么上面的收敛是一致收敛的。
另外，对于 $f\in C^\alpha$，类似于可以求导数的情形，我们稍后还会证明
\[
\big|\widehat{f}(k)\big|\leqslant \frac{1}{(1+|k|)^\alpha}.
\]
:::

有一个关于有界变差函数的Fourier级数收敛的命题和上面证明的结论也很类似。
我们先引入有界变差函数的概念。
给定一个有限的闭区间 $[a,b]$ 和它上面所定义的**实值**函数 $f$，
对任意一个分划 $\sigma\in \mathcal{S}$（$\mathcal{S}$ 为分划的集合），
即我们选取 $a=x_0<x_1<\cdots<x_m=b$，我们定义这个分划所对应的**变差**为：
\[
V(f,\sigma)=\sum_{k=1}^{m}|f(x_{k})-f(x_{k-1})|.
\]
我们令
\[
V\left([a,b],f\right)=\sup_{\sigma\in \mathcal{S}}V(f,\sigma).
\]
如果 $V\left([a,b],f\right)<\infty$，我们就称 $f$ 是 $[a,b]$ 上的**有界变差函数**。
直观上，有界变差函数在区间上整体的振荡比较小。我们有如下几个显然的性质：

- 1\) 如果 $f$ 是 $[a,b]$ 上的单调函数，那么
  \[
  |V([a,b],f)|=|f(a)-f(b)|.
  \]

- 2\) 如果 $f$ 和 $g$ 是有界变差函数，那么 $f\pm g$ 也是的。

  这是因为对任意分划 $\sigma$，我们都有
  \[
  V(f \pm g,\sigma)\leqslant V(f,\sigma)+V(g,\sigma).
  \]

- 3\) 如果 $f$ 是有界变差函数，那么 $|f|$ 也是的。

  这是因为对任意分划 $\sigma$，根据 $\big||x|-|y|\big|\leqslant |x-y|$，我们都有
  \[
  V(|f|,\sigma)\leqslant V(f,\sigma).
  \]

给定一个 $[a,b]$ 上的有界变差函数 $f$，在子区间上的有界变差可以给出如下的函数：
\[
[a,b]\rightarrow \mathbb{R}_{\geqslant 0}, \ \ x\mapsto V([a,x],f).
\]

另外，假设区间 $[a,b]$ 和 $[b,c]$ 上分别有分划 $\sigma$ 和 $\sigma'$，其中
\[
\sigma=(a=x_0<x_1<\cdots<x_m=b), \ \ \sigma'=(b=x'_0<x'_1<\cdots<x'_{m'}=c),
\]
那么，我们可以把这两个分划首尾相接得到 $[a,c]$ 上的分划 $\sigma\cup \sigma'$，即
\[
\sigma\cup \sigma'=(a=x_0<x_1<\cdots<x_m=b=x'_0<x'_1<\cdots<x'_{m'}=c).
\]
很明显，如果 $f$ 在 $[a,c]$ 上有定义，那么
\[
V(f,\sigma\cup \sigma')=V(f,\sigma)+V(f,\sigma').
\]
按照定义，
\[
V(f,\sigma)+V(f,\sigma')=V(f,\sigma\cup \sigma')\leqslant V([a,c],f).
\]
再对左边的 $\sigma$ 和 $\sigma'$ 取上确界，我们得到
\[
V([a,b],f)+[V([b,c],f)\leqslant [V([a,c],f).
\]
特别地，当 $c\geqslant b$ 时，我们有
\[
V([a,b],f)\leqslant [V([a,c],f),
\]
所以函数 $x\mapsto V([a,x],f)$ 是单调上升的。

::: theorem [有界变差函数的结构定理]
假设 $h$ 是 $[a,b]$ 上的有界变差函数，那么，存在 $[a,b]$ 上的单调递增函数 $f$ 和 $g$，使得
\[
h=f-g.
\]
:::

::: proof
只要验证 $V([a,x],h)-h(x)$ 是单调递增的就可以了，因为我们可以选取 $f=V([a,x],h)$，
$g(x)=V([a,x],h)-h(x)$。任意给定 $x_1,x_2\in [a,b]$，其中 $x_1\leqslant x_2$，我们有
\[
\begin{aligned}
&\ \ \ \bigl(V([a,x_2],h)-h(x_2)\bigr)-\bigl(V([a,x_1],h)-h(x_1)\bigr)\\
&=\bigl(V([a,x_2],h)-\bigl(V([a,x_1],h)\bigr)-(h(x_2)-h(x_1))\\
&\geqslant V([x_1,x_2],h)-(h(x_2)-h(x_1))\\
&\geqslant 0.
\end{aligned}
\]
证毕。
:::

::: corollary
有界变差函数是Riemann可积的（所以是 $L^1$ 的，从而可以定义其Fourier系数）。
:::

::: proof
这是因为单调函数只有可数多个不连续点，所以是Riemann可积的。
:::

::: theorem [Jordan]
实值函数 $f$ 是 $\mathbf{T}$ 上的有界变差函数。
那么，对任意 $x_0\in \mathbf{T}$，$\{S_N(f)(x)\}_{N\geqslant 1}$ 在 $x_0$ 处收敛并且
\[
\displaystyle \lim_{N\rightarrow \infty}S_N(f)(x_0)=\frac{f_-(x_0)+f_+(x_0)}{2}.
\]
:::

::: proof
根据有界变差函数的结构定理，我们不妨假设 $f$ 是单调函数。仿照之前定理的证明，我们有
\[
\begin{aligned}
& \ \ \ S_N(f)(x_0)-\frac{f_-(x_0)+f_+(x_0)}{2}\\
&=\int_{0}^\pi D_N(x)\bigl(f(x_0-y)-f_-(x_0)+f(x_0+y)-f_+(x_0)\bigr)\frac{dy}{2\pi}\\
&=\underbrace{\int_{0}^\pi\frac{\sin\bigl((N+\frac{1}{2})y\bigr)}{\sin\bigl(\frac{1}{2}y\bigr)}  \bigl(f(x_0-y)-f_-(x_0)\bigr)\frac{dy}{2\pi}}_{I_-}+\underbrace{\int_{0}^\pi\frac{\sin\bigl((N+\frac{1}{2})y\bigr)}{\sin\bigl(\frac{1}{2}y\bigr)}  \bigl(f(x_0+y)-f_+(x_0)\bigr)\frac{dy}{2\pi}}_{I_+}.
\end{aligned}
\]
只要处理 $I_+$ 即可，另外一项可以类似地处理。我们可以将 $I_+$ 写为
\[
I_+=\underbrace{\int_{0}^\delta \frac{\sin\bigl((N+\frac{1}{2})y\bigr)}{\sin\bigl(\frac{1}{2}y\bigr)}  \bigl(f(x_0+y)-f_+(x_0)\bigr)\frac{dy}{2\pi}}_{I_{+,\delta}}+\underbrace{\int_{\delta}^\pi \sin\bigl((N+\frac{1}{2})y\bigr) \overbrace{\frac{f(x_0+y)-f_+(x_0)}{\sin\bigl(\frac{1}{2}y\bigr)}}^{\in L^1}\frac{dy}{2\pi}}_{I_{+,>\delta}} , \ \rightarrow 0.
\]
上式的第二项可以再次用Riemann–Lebesgue引理处理：当 $N\rightarrow\infty$ 时候，
我们有 $I_{+,>\delta} \rightarrow 0$。
为了处理第一项，
我们用之前在估计 $\displaystyle \int_{0}^{2\pi}|D_N(x)|\frac{dx}{2\pi}$ 时所用的不等式：
\[
\frac{2}{t}\leqslant \frac{1}{\sin\bigl(\frac{t}{2}\bigr)}\leqslant \frac{2}{t}+\frac{t}{6}, \ \ 0\leqslant t\leqslant \pi,
\]
从而对任意的 $g(t)$（分正负来讨论），我们都有
\[
\big| \frac{1}{\sin\bigl(\frac{t}{2}\bigr)}g(t)-\frac{2}{t} g(t)\big|\leqslant \frac{t}{6}|g(t)|.
\]
据此，
\[
\begin{aligned}
& \ \ \big|I_{+,\delta}- \underbrace{\int_{0}^\delta \frac{2\sin\bigl((N+\frac{1}{2})y\bigr)}{y}  \bigl(f(x_0+y)-f_+(x_0)\bigr)\frac{dy}{2\pi}}_{\widetilde{I_{+,\delta}}}\big|\\
&\leqslant \underbrace{\frac{1}{6} \int_{0}^\delta \big|\sin\bigl((N+\frac{1}{2})y\bigr)\big|  \times y\times\bigl(f(x_0+y)-f_+(x_0)\bigr)\frac{dy}{2\pi}}_{\widetilde{\widetilde{I_{+,\delta}}}}.
\end{aligned}
\]
综合上面的所有的不等式，我们有
\[
|I_+|\leqslant |\widetilde{I_{+,\delta}}|+\widetilde{\widetilde{I_{+,\delta}}}+ I_{+,>\delta}.
\]

现在任意给定 $\varepsilon>0$，我们要找一个足够大的 $N_0$，使得当 $N\geqslant N_0$ 时，有
\[
|I_+|< \varepsilon.
\]

首先，我们有
\[
\begin{aligned}\widetilde{\widetilde{I_{+,\delta}}}&\leqslant \int_{0}^\delta y\times |f(x_0+y)-f_+(x_0)|\frac{dy}{12\pi}\\
&\leqslant \int_{0}^\delta |f(x_0+y)-f_+(x_0)|\frac{dy}{12\pi}.
\end{aligned}
\]
被积分项是有界的，所以存在 $\delta_1>0$，使得当 $\delta<\delta_1$ 时，
\[
\widetilde{\widetilde{I_{+,\delta}}}\leqslant \frac{1}{3}\varepsilon.
\]

其次，我们考虑 $\widetilde{I_{+,\delta}}$。利用 $f$ 的单调性，我们可以运用积分第二中值定理。[^1]
从而，存在 $c\in (0,\delta)$，使得
\[
\begin{aligned}
\widetilde{I_{+,\delta}}&=\int_{0}^\delta \frac{\sin\bigl((N+\frac{1}{2})y\bigr)}{y}  \bigl(f(x_0+y)-f_+(x_0)\bigr)\frac{dy}{2\pi}\\
&= \bigl(f(x_0+\delta)-f_+(x_0)\bigr)\underbrace{\int_{(N+\frac{1}{2})c}^{(N+\frac{1}{2})\delta} \frac{\sin t }{t} \frac{dt}{2\pi}}_{<\infty}.
\end{aligned}
\]

由于 $\displaystyle \int_{1}^\infty \frac{\sin t}{t}dt <\infty$，所以上面的积分项是有界的。
根据右极限定义，存在 $\delta_2>0$，使得当 $\delta<\delta_2$ 时，我们有
\[
\widetilde{I_{+,\delta}}<\frac{1}{3}\varepsilon.
\]

我们现在选取 $\delta<\min\left(\delta_1,\delta_2\right)$，从而
\[
|I_+|<\frac{\varepsilon}{3}+ \frac{\varepsilon}{3}+I_{+,>\delta}.
\]
此时，我们可以对 $I_{+,>\delta}$ 用Riemann–Lebesgue引理，所以存在 $N_0$，
使得当 $N\geqslant N_0$ 时，我们有
\[
I_{+,>\delta}<\frac{\varepsilon}{3}.
\]
所以，
\[
|I_+|<\varepsilon.
\]
这就完成了Jordan定理的证明。
:::

[^1]: 假设 $I=[a,b]$，$g\in R(I)$，$f$ 是 $I$ 上单调递增的函数（未必严格）。
  那么，存在 $c\in [a,b]$，使得
  \[
  \displaystyle \int_a^b fg= f(a)\int_{a}^c g+f(b)\int_c^b g(t)dt.
  \]
