---
title: Riemann 可积函数的刻画，Newton–Leibniz 公式
---

我们现在可以对紧区间 $I$ 上的Riemann可积函数做全面的刻画：

::: theorem
假设 $I=[a,b]$（$-\infty<a<b<+\infty$）是有界的闭区间，$f\colon I\rightarrow \mathbb{R}$ 是函数，
那么如下四条性质是等价的：

- 1\) $f\in \mathcal{R}(I)$；

- 2\) 存在常数 $\mathbf{I}$，对任意的 $\varepsilon>0$，存在 $\delta>0$，
  使得对任意的 $(\sigma,\xi)\in \mathcal{S}'(I)$，只要步长 $|\sigma|<\delta$，就有
  \[
  \big|S(f;\sigma,\xi)-\mathbf{I}\big|<\varepsilon.
  \]

- 3\) $f$ 是有界函数并且 $\underline{D}(f)=\overline{D}(f)$；

- 4\) $f$ 是有界函数并且 $\displaystyle\underline{\int}_a^b f=\overline{\int_{a}^b} f$。

当上面的任意一个条件成立时，我们就有
\[
\displaystyle \underline{D}(f)=\overline{D}(f)=\underline{\int}_a^b f=\overline{\int_{a}^b} f=\int_a^b f.
\]
:::

::: proof
1)$\Rightarrow$2)就是 @thm:121，其中，$\mathbf{I}$ 取为 $\displaystyle\int_a^b f$。

2)$\Rightarrow$3)任意给定 $\varepsilon>0$，按照定义，存在 $\delta$，当 $|\sigma|<\delta$ 时，
对任意的 $(\sigma,\xi)$ 我们都有 $|S(f;\sigma,\xi)-\mathbf{I}|<\varepsilon$。
我们选定一个分划 $\sigma=\{a_0<a_1<\cdots<a_n\}$，使得 $|\sigma|<\delta$。

任意取定 $1\leqslant i_0\leqslant n$，我们令 $\xi_i=a_i, i\neq i_0$，
$\xi_{i_0}=x\in [a_{i_0-1},a_{i_0}]$ 可以任意选择。
根据 $|S(f;\sigma,\xi)|<\mathbf{I}+\varepsilon$，我们知道
\[
\begin{aligned}
|(a_{i_0}-a_{i_0-1})f(x)|&\leqslant \bigl|\sum_{i\neq i_0}(a_i-a_{i-1})\bigr||f(\xi_i)|+|S(f;\sigma,\xi)|\\
&\leqslant \bigl|\sum_{i\neq i_0}(a_i-a_{i-1})\bigr||f(a_i)|+\mathbf{I}+\varepsilon.
\end{aligned}
\]
除了 $x$ 之外，上面的式子中每个值都是给定的，这就证明了 $f$ 在 $[a_{i_0-1},a_{i_0}]$ 上是有界的，
从而在 $I$ 上有界。

现在令 $m_i=\displaystyle\inf_{x\in [a_{i-1},a_i]}f(x)$，按照定义，
存在 $\zeta_i \in [a_{i-1},a_i]$，
使得 $m_i \leqslant f(\zeta_i)\leqslant m_i+\dfrac{\varepsilon}{b-a}$。
这样定义的 $S(f;\sigma,\zeta)$ 很明显满足
\[
S(f;\sigma,\zeta)\leqslant \underline{S}(f;\sigma)+\varepsilon\leqslant \underline{D}(f)+\varepsilon.
\]
从而
\[
\mathbf{I}\leqslant \underline{D}(f)+2\varepsilon.
\]
类似地，我们有
\[
\mathbf{I}\geqslant \overline{D}(f)-2\varepsilon.
\]
上面两个式子一起，令 $\epsilon\to0$ 就给出了 $\underline{D}(f)=\overline{D}(f)$。

3)$\Leftrightarrow$4) 就是 @prop:Darboux_sum_and_integral。

4)$\Rightarrow$1)根据上下极限的定义，对任意的 $\varepsilon>0$，
存在两个阶梯函数 $\overline{f}(x)$ 和 $\underline{f}(x)$，
使得 $\overline{f}(x)\geqslant f(x)\geqslant \underline{f}(x)$，并且
\[
0\leqslant \displaystyle\int_a^b\overline{f}(x)-\displaystyle\int_a^b \underline{f}(x)< \varepsilon.
\]
从而，
我们令 $F(x)=\underline{f}(x)$ 和 $\psi(x)=\overline{f}(x)-\underline{f}(x)\in \mathcal{E}(I)$，
我们自然有
\[
|f(x)-F(x)|\leqslant \psi(x), \ \ \int_a^b \psi <\varepsilon.
\]
这说明 $f\in \mathcal{R}(I)$。
另外，我们自然有
\[
\displaystyle\int_a^b\underline{f}\leqslant \int_a^b f\leqslant \displaystyle\int_a^b \overline{f},
\]
这就证明定理中要求的积分的等式。
:::

我们已经建立了比较完备的积分理论，下面我们要发展一个最基本的工具来联系积分与微分并以此进行计算。
先引入原函数的概念：假设 $f$ 是定义在 $I$ 上的函数（$I$ 可以是任意区间，
$f$ 可以在任意赋范线性空间中取值），如果存在 $I$ 上定义的函数 $F$，使得 $F$ 可微分并且 $F'=f$，
我们就称 $F$ 是 $f$ 的**原函数**。
假设 $F$ 是 $f$ 的一个原函数，
那么 $f$ 的所有原函数的集合是 $\bigl\{F+c\big|c\in \mathbb{R}\bigr\}$，
这是因为一个函数的导数恒为零当且仅当这个函数是常值函数。

::: proposition
对任意的 $f\in \mathcal{R}(I)$，对任意的 $x\in I$，我们定义 $F(x)=\displaystyle\int_a^x f$，
即 $f$ 在 $[a,x]$ 上的积分。那么，$F(x)$ 是 $I=[a,b]$ 上的连续函数。
进一步，如果 $f$ 在 $x_0$ 处是右连续的，
那么 $F$ 在 $x_0$ 的右导数存在并且等于 $f(x_0^+)=\displaystyle\lim_{h\rightarrow 0, h>0}f(x_0+h)$。
特别地，当 $f\in C(I)$ 时，$F(x)=\displaystyle\int_a^x f(y)dy$ 是 $f$ 的原函数。
:::

::: proof
首先证明 $F\in C(I)$。假设 $|f|\leqslant M$。对任意的 $x\in I$，对任意的 $h>0$，我们有
\[
\begin{aligned}
|F(x-h)-F(x)|&=\Big|-\left(\int_{a}^{x}f-\int_{a}^{x-h} f\right)\Big|\\
&=\Big|\int_{x-h}^{x}f\Big|\leqslant |h|\times M=O(h).
\end{aligned}
\]
从而，$F$ 在 $x$ 处左连续。类似地，可以证明右连续性，所以 $F$ 在 $x$ 处连续。
特别地，这个证明表明 $F(a)=0$。

进一步假设 $f$ 在 $x_0$ 处右连续，令 $f(x_0^+)$ 为 $f$ 在 $x_0$ 处的右极限，
即 $f(x^+_0)=\displaystyle\lim_{h\rightarrow 0^+}f(x_0+h)$。
按定义，对任意的 $\varepsilon$，存在 $\delta>0$，使得当 $h\in (0,\delta)$ 时，
我们有 $|f(x_0+h)-f(x_0^+)|<\varepsilon$。据此，我们计算
\[
\begin{aligned}
|F(x_0+h)-F(x_0)-f(x_0^+)h|&=\Big|\left(\int_{a}^{x_0+h}f-\int_{a}^{x_0} f\right)-f(x_0^+)h\Big|\\
&=\Big|\int_{x_0}^{x_0+h}\bigl(f(x)-f(x_0^+)\bigr)dx\Big|\leqslant \varepsilon h.
\end{aligned}
\]
由于 $\varepsilon$ 是任意选取的，所以
\[
\begin{aligned}
F(x_0+h)-F(x_0)-f(x_0^+)h=o(h).
\end{aligned}
\]
这表明，$f(x_0^+)$ 是 $F$ 在 $x_0$ 处的右导数。
:::

::: corollary
假设 $f\in C(I)$，
那么 $F(x)=\displaystyle\int_a^x f \in C^1(I)$ 并且 $F'=f$（即 $F$ 是 $f$ 的原函数）。
:::

::: theorem [微积分基本定理：Newton–Leibniz公式]
假设 $I$ 是有界闭区间，$f\in \mathcal{R}(I)$。如果 $f$ 有原函数 $F$，那么
\[
\int_{a}^b f =F(x)\big|_a^b.
\]
其中，
$F(x)\big|_a^b=F\big|_{x=a}^{x=b}=F(b)-F(a)$
:::

::: proof
我们注意到，如果 $f\in C(I)$ 是连续函数，上面命题的推论表明
\[
F(b)=\int_a^b f, \ \ F'=f.
\]
另外，$F(a)=0$，所以Newton–Leibniz公式此时成立（在 $F\in C^1(I)$ 的时候）。

现在考虑一般情况：我们要证明，对任意的 $\varepsilon>0$，都有
\[
|F(b)-F(a)-\int_a^bf|<\varepsilon.
\]
此时，由于 $f$ 可能在某些点处不连续，所以 $\displaystyle\int_a^x f(y)dy$ 未必可微分。
特别地，我们未必有 $F(x)=\displaystyle\int_a^x f(y)dy$。
实际上，一个可微函数的导数未必是Riemann可积的：比如说，在区间 $[-1,1]$ 上定义的函数
\[
[-1,1]\rightarrow \mathbb{R},  \ \ x\mapsto \begin{cases}
x^2\sin\left(\frac{1}{x^2}\right),\ \ &x\neq 0;\\
0, \ \ &x= 0.
\end{cases}
\]
这个函数是可微的但是它的导数是无界的，所以不是Riemann可积分的。

根据 $f$ 是Riemann可积的，我们可以选取 $g, \psi \in \mathcal{E}(I)$，使得
\[
|f(x)-g(x)|\leqslant \psi(x), \ \ \forall x\in I; \ \ \ \ \displaystyle\int_a^b \psi <\varepsilon.
\]
我们再选取分划 $\sigma=\{a=a_0<\cdots<a_n=b\}$，使得该分划与 $g$ 和 $\psi$ 两个阶梯函数相容。
按照定义，$g$ 和 $\psi$ 在每个区间 $(a_{i-1},a_i)$ 上的限制是常值函数：我们令
\[
y_i=g\Big|_{(a_{i-1},a_i)},\ \ z_i=\psi\Big|_{(a_{i-1},a_i)}.
\]

为了控制 $\Big|F(b)-F(a)-\displaystyle\int_a^bf\Big|$，我们自然考虑它较好的一个逼近：
\[
\begin{aligned}
F(b)-F(a)-\int_a^b g&=\sum_{i=1}^n \bigl(F(a_i)-F(a_{i-1})\bigr)-\sum_{i=1}^n\int_{a_{i-1}}^{a_i}g\\
&=\sum_{i=1}^n\Bigl( F(a_i)-F(a_{i-1})-(a_i-a_{i-1})y_i\Bigr)\\
&=\sum_{i=1}^n\Bigl( \bigl(F(a_i)-a_iy_i\bigr)-\bigl(F(a_{i-1})-a_{i-1}y_i\bigr)\Bigr).
\end{aligned}
\]
在每个区间 $[a_{i-1},a_{i}]$ 上，我们考虑函数 $x\mapsto F(x)-y_ix$。
根据Lagrange中值定理，存在 $\xi_i\in [a_{i-1},a_i]$，使得
\[
\begin{aligned}
& \ \ \ \Big| \bigl(F(a_i)-a_iy_i\bigr)-\bigl(F(a_{i-1})-a_{i-1}y_i\bigr)\Big|\\
&=\big|F'(\xi_i)-y_i\big|(a_i-a_{i-1})\\
&=\big|f(\xi_i)-g(\xi_i)\big|(a_i-a_{i-1})\\
&\leqslant \psi(\xi_i)(a_i-a_{i-1})\\
&=z_i(a_i-a_{i-1}).
\end{aligned}
\]
所以，我们得到
\[
\begin{aligned}
\Bigl|F(b)-F(a)-\int_a^b g\Bigr|&\leqslant \sum_{i=1}^n z_i(a_i-a_{i-1})= \int_a^b \psi < \varepsilon.
\end{aligned}
\]
最终，我们有
\[
\begin{aligned}
\Bigl|F(b)-F(a)-\int_a^b f\Bigr|&\leqslant\Bigl|F(b)-F(a)-\int_a^b g\Bigr|+\Bigl|\int_a^b (f-g)\Bigr|\\
&\leqslant \varepsilon+\int_a^b \psi<2\varepsilon
\end{aligned}
\]
令 $\varepsilon\rightarrow 0$，我们就证明了微积分基本定理。
:::

::: remark*
Newton–Leibniz公式最常用的形式是：$f\in C^1(I)$，我们有
\[
\int_{a}^b f' =f(x)\big|_a^b.
\]
:::

给定一个函数 $f$，我们用 $\displaystyle\int f$ 来表示它（某个）原函数，我们注意到，
按照原函数的定义，一个函数的原函数在差一个常数的意义下才是良好定义的，但是这种差别不是本质的，
没有必要纠结，所以，我们之后谈论原函数的时候，总是随便取一个就好，尽管这是从概念上而言不严格。
另外，即便 $f$ 是Riemann可积的，它未必具有原函数，这是因为如果 $f$ 有原函数 $F$，那么 $F'=f$，
根据Darboux定理，$f$ 具有介值性，而我们随便选取的阶梯函数大都不具有这个性质。

我们罗列几个基本的原函数：
\[
\begin{aligned}
&\int x^\alpha = \frac{1}{\alpha+1}{x^{\alpha+1}}, \ \alpha\neq -1;  \qquad \int \frac{1}{x} =\log x; \quad \int \log x = x\log x -x;\\
&\int \sin x= -\cos x; \qquad \int \cos x = \sin x; \qquad \int e^x =e^x; \\
&\int\frac{1}{a^2+x^2}=\frac{1}{a}\arctan \frac{x}{a};\quad \int\frac{1}{\sqrt{a^2-x^2}}=\arcsin \frac{x}{a};\quad \int \tan ax =-\frac{1}{a}\log \cos ax.
\end{aligned}
\]
还有几个稍微复杂但是也会见到的：
\[
\begin{aligned}
&\int \sec x = \log |\sec x+\tan x|=2 \tanh^{-1}(\tan \frac{x}{2}) ;\\
&\int \sec^2 ax =\frac{\tan ax}{a};\quad \int \csc x=\log |\tan \frac{x}{2}|.
\end{aligned}
\]

::: remark*
我们将会看到，关于原函数的计算（如果可以用初等函数表示的话），本质上是代数的变形，所以，
我们需要记忆并熟练的运用以上几个例子。
:::

这些例子的证明是平凡的，我们只需要对原函数求导来验证它恰好给出了所求的函数即可。
利用Newton–Leibniz公式和上面的原函数，我们可以计算很多积分了：

- 1\) 单项式的积分：
  \[
  \int_{a}^b x^n=\frac{1}{n+1}x^{n+1}\Big|_{a}^{b}=\frac{1}{n+1}(b^{n+1}-a^{n+1}).
  \]

- 2\) $\overline{\pi}=\pi$ 的第一个证明。
  我们计算平面上半圆盘的面积（我们期待它应该是 $\dfrac{r^2}{2}\pi$）：

  ![](MathAnalysis_N21P1.svg)

  这就是函数 $f(x)=\sqrt{r^2-x^2}$ 下的面积，其中，$x\in [-r,r]$。换而言之，我们要计算如下的积分：
  \[
  \int_{-r}^r f =\int_{-r}^r \sqrt{r^2-x^2} .
  \]
  我们发现，计算 $\sqrt{r^2-x^2}$ 的原函数并不简单（至少不是一目了然）。
  我们需要发展一点工具来计算原函数（积分）然后再来计算这个积分。

作为Newton–Leibniz公式应用，我们现在来证明分部积分公式和变量替换公式。

::: proposition [分部积分公式]
假设 $f,g\in C^1(I)$。那么，我们有
\[
\int_{a}^b f'\cdot g=(f\cdot g)\big|_a^b-\int_{a}^b f\cdot g'.
\]
:::

::: proof
对 $(f\cdot g)'$ 用Newton–Leibniz公式，所以
\[
(f\cdot g)\big|_a^b=\int_{a}^b \bigl(f\cdot g\bigr)'=\int_{a}^b f'\cdot g+\int_{a}^b f\cdot g'.
\]
这自然等价于分部积分公式。
:::

::: remark*
我们回忆一下所谓的Abel求和公式：
假设 $\{a_k\}_{k\geqslant 1}$ 和 $\{b_k\}_{k\geqslant 1}$ 是复数（矩阵）的序列，那么
\[
\sum_{k=1}^n{a_kb_k}=S_nb_n+\sum_{k=1}^{n-1}S_k(b_k-b_{k+1}),
\]
其中我们用 $S_n=a_1+a_2+\cdots+a_n$ 表示数列 $\{a_k\}_{k\geqslant 1}$ 的部分和。
这和分部积分公式非常相似：我们将 $S_k$ 和 $b_k$ 看成在 $\mathbb{Z}_{\geqslant 1}$ 定义的函数，那么，
如下的对应
\[
S_k \longrightarrow f, \ \   b_k \longrightarrow g, \ \ \mathbb{Z}_{\geqslant 1}  \longrightarrow [a,b],
\]
就可以把Abel求和公式看成分部积分。（我们下个学期会学习抽象的积分理论把这个对应说清楚）
:::

::: proposition [变量替换公式]
假设 $\Phi\colon I\rightarrow J$ 是两个有界闭紧区间之间的连续的单调递增的可微映射，其中 $I=[a,b]$，
$J=[c,d]$。$f\in C(J)$，那么对于 $I$ 中任意的 $\alpha<\beta$，都有
\[
\int_{\alpha}^\beta \bigl((f\circ \Phi)\cdot \Phi'\bigr)=\int_{\Phi(\alpha)}^{\Phi(\beta)}f.
\]
:::

::: proof
我们先假设 $\Phi(\beta)>\Phi(\alpha)$。
根据 $f\in C(I)$ 和 $\Phi \in C^1(I)$，我们知道上面两个积分的被积函数都是连续的，
所以都是Riemann可积的。根据复合函数求导公式，令 $F(x)$ 为 $f(x)$ 的一个原函数，那么我们有
\[
F(\Phi(x))'=f(\Phi(x))\Phi'(x) \ \ \Leftrightarrow \ \ \bigl(F\circ \Phi\bigr)'=(f\circ\Phi)\cdot \Phi'.
\]
所以利用Newton–Leibniz公式，我们有
\[
\int_{\alpha}^{\beta} (f\circ \Phi)\cdot \Phi' =\int_{\alpha}^\beta \bigl(F\circ \Phi\bigr)'= F\circ \Phi\Big|_{\alpha}^{\beta}=F(\Phi(\beta))-F(\Phi(\alpha)).
\]
另外，由于 $f(x)$ 是连续的，所以我们可以选取 $F$ 为
\[
F(x)=\int_{a}^x f.
\]
从而，
\[
F(\Phi(\beta))-F(\Phi(\alpha))=\int_a^{\Phi(\beta)} f-\int_a^{\Phi(\alpha)} f=\int_{\Phi(\alpha)}^{\Phi(\beta)}f.
\]
命题得证。
:::

::: remark*
注意到，我们假设了 $\Phi(\alpha)<\Phi(\beta)$ 是递增的，这是人为的原因的：对于区间 $I=[a,b]$，
最好的积分的符号应该是 $\displaystyle\int_I f$。
然而，由于传统的原因，我们经常使用 $\displaystyle\int_a^b f$，这里，我们已经默认了 $a<b$ 的假设。
从这角度看，$\displaystyle\int_a^b$ 不是一个太好的符号。然而，重新观察证明，我们发现等式
\[
\int_{\alpha}^{\beta} (f\circ \Phi)\cdot \Phi' =F(\Phi(\beta))-F(\Phi(\alpha))
\]
是永远成立的，所以，当 $\Phi(\beta)<\Phi(\alpha)$ 的时候，
我们需要将 $\displaystyle\int_{\Phi(\alpha)}^{\Phi(\beta)}f$ 解释为
\[
\int_{\Phi(\alpha)}^{\Phi(\beta)}f=-\int^{\Phi(\alpha)}_{\Phi(\beta)}f=-\left(F(\Phi(\alpha))-F(\Phi(\beta))\right)
\]
即可。
换而言之，作为约定，我们规定
\[
\int_a^b f= -\int_{b}^a f.
\]
:::

作为换元积分公式的推论，我们证明两个基本的命题。
尽管这两个命题的证明不值一提，
但是由于下面的平移和相似变换是 $\mathbb{R}$ 上最基本的对称性（共形变换群），所以它们占有特殊的位置：

- 假设 $f\in \mathcal{R}(I)$，我们定义函数 $g(x)=f(x+x_0)$，
  即函数 $g=f\circ \tau_{x_0}\colon [a-x_0,b-x_0]\rightarrow \mathbb{R}$，
  其中 $\tau_{x_0}\colon  [a-x_0,b-x_0]\rightarrow [a,b]$ 是平移 $x\mapsto x+x_0$。此时，我们有
  \[
  \int_{a-x_0}^{b-x_0}g =\int_a^b f.
  \]

- 假设 $f\in \mathcal{R}(I)$，$\lambda>0$，我们定义函数 $g(x)=f(\lambda x)$，
  即函数
  $g=f\circ m_{\lambda}\colon [\dfrac{a}{\lambda},\dfrac{b}{\lambda}]\rightarrow \mathbb{R}$，
  其中 $m_\lambda\colon [\dfrac{a}{\lambda},\dfrac{b}{\lambda}]\rightarrow [a,b]$ 是相似变换
  $x\mapsto \lambda x$。此时，我们有
  \[
  \lambda \int_{\frac{a}{\lambda}}^{\frac{b}{\lambda}}g =\int_a^b f.
  \]

::: remark* [符号的解释]
根据变量替换公式的形式，我们倾向于将积分写成传统的形式：$\displaystyle\int_a^b f(x)dx$。

为了讲的更清楚，我们回忆微分（不是导数！）的定义。
给定一个两个区间之间的可微的映射 $\Phi\colon  X\rightarrow Y$，对于每个点 $x_0\in X$，
我们给它分配一个线性空间 $T_{x_0} X\simeq \mathbb{R}$；对于 $y_0\in Y$，
我们给它分配一个线性空间 $T_{y_0} Y\simeq \mathbb{R}$。那么，映射 $\Phi$ 在 $x_0$ 处的微分定义为：
\[
d\Phi(x_0)\colon T_{x_0} X \rightarrow T_{\Phi(x_0)} Y, \ \ h\mapsto \Phi'(x_0)h.
\]
假设 $X=Y$，我们选取一个特殊的 $\Phi$，即恒同映射 $x\mapsto x$。我们就把这个映射记作 $x$。
特别地，此时 $\Phi'=1$。所以，微分现在可以被写为
\[
dx(x_0)\colon T_{x_0} X \rightarrow T_{\Phi(x_0)} X, \ \ h\mapsto h.
\]
比较上面两个映射，我们知道，作为 $T_{x_0} X \rightarrow T_{\Phi(x_0)} Y$ 之间的映射，
我们可以把上面的映射写成
\[
d\Phi(x_0)=\Phi'(x_0)dx(x_0).
\]
忽略掉上面式子对点的依赖性，我们就得到了
\[
d\Phi =\Phi'(x)dx.
\]
所以，如果我们用传统的积分记号，换元积分公式就可以想象成用变元 $y$ 代替 $\Phi(x)$，即 $y=\Phi(x)$，
公式可以写成
\[
\int_{\alpha}^\beta f\bigl(\Phi(x)\bigr)\underbrace{\Phi'(x)dx}_{d\Phi(x)} =\int_{\Phi(\alpha)}^{\Phi(\beta)}f(y)dy.
\]
我们强调，目前这种写法只是形式的记法，到下个学期我们用正确的测度的观点或者微分形式的观点，
就可以完美地解释这种记号。
大家大可不必纠结你是否理解这个记法，因为这目前是一个帮助记忆的方式，仅此而已。
:::

我们可以看一下如何利用分部积分和换元积分公式进行积分的计算。
在一定的意义上，这已经不属于分析的范畴了（不用取极限或者 $\varepsilon$ 语言），
而算是组合或者是代数上的操作了：

::: example*
我们先来完成关于圆的面积的计算：

- 1\) 我们用如下的变量替换 $x=r\sin \theta$，
  即考虑 $\Phi\colon  [-\dfrac{\overline{\pi}}{2},\dfrac{\overline{\pi}}{2}]\rightarrow [-r,r]$。
  从而，
  \[
  \begin{aligned}
  \int_{-r}^r\sqrt{r^2-x^2}dx&=\int_{-\frac{\overline{\pi}}{2}}^{\frac{\overline{\pi}}{2}} \sqrt{r^2-(r\sin\theta)^2}r\cos\theta d\theta\\
  &=r^2\int_{-\frac{\overline{\pi}}{2}}^{\frac{\overline{\pi}}{2}} (\cos\theta)^2 d\theta=\frac{r^2}{2}\int_{-\frac{\overline{\pi}}{2}}^{\frac{\overline{\pi}}{2}} \left(\cos (2\theta)+1\right)d\theta\\
  &=\frac{r^2}{2}\left(\int_{-\frac{\overline{\pi}}{2}}^{\frac{\overline{\pi}}{2}} \cos (2\theta)d\theta+\overline{\pi}\right)\\
  &\stackrel{\vartheta=2\theta}{=}\frac{r^2}{2}\left(\frac{1}{2}\int_{-\overline{\pi}}^{\overline{\pi}} \cos(\vartheta)d\vartheta+\overline{\pi}\right)
  \end{aligned}
  \]
  另外，根据 $\sin x$ 的周期性，我们知道 $\sin(\overline{\pi})=\sin(-\overline{\pi})$，所以
  \[
  \int_{-\overline{\pi}}^{\overline{\pi}} \cos(\vartheta) d\vartheta= \sin\vartheta \big|_{-\overline{\pi}}^{\overline{\pi}}=0.
  \]
  所以，
  \[
  \begin{aligned}
  \int_{-r}^r\sqrt{r^2-x^2}dx=\frac{r^2}{2}\overline{\pi}.
  \end{aligned}
  \]
  所以，半径为 $r$ 的圆盘的面积是 $\overline{\pi}r^2$。
  至此我们验证了 $\overline{\pi}=\pi$，其中 $\pi$ 是大家想象中的 $\pi$。

- 2\) 计算 $\displaystyle\int_{0}^\frac{3\pi}{2} \sin^2x \cos x dx$。
  我们将积分分为几块然后用换元积分公式：
  \[
  \begin{aligned}
  \displaystyle\int_{0}^\frac{3\pi}{2} \sin^2x \cos x dx&=\left(\displaystyle\int_{0}^\frac{\pi}{2}+\displaystyle\int_\frac{\pi}{2}^\pi+\displaystyle\int_{\pi}^\frac{3\pi}{2}\right) \sin^2x d\sin x\\
  &=\int_{0}^1 y^2 dy-\int_{0}^1 y^2 dy-\int_{-1}^0 y^2 dy\\
  &=\frac{1}{3}-\frac{1}{3}-\frac{1}{3}=-\frac{1}{3}.
  \end{aligned}
  \]
  请尤其注意第二、三项的换元积分，因为这时候对应着之前 $\Phi(\beta)<\Phi(\alpha)$ 的情形。

- 3\) 计算 $\displaystyle\int_{0}^\frac{\pi}{2} x\sin x \cos x dx$。
  这个积分的计算需要用到分部积分公式来除掉 $x$：
  \[
  \begin{aligned}
  \int_{0}^\frac{\pi}{2} x\sin x \cos x dx&=\frac{1}{2}\int_{0}^\frac{\pi}{2} x\sin (2x) dx=-\frac{1}{4}\int_{0}^\frac{\pi}{2} x\bigl(\cos (2x) \bigr)'dx\\
  &=\frac{1}{4}\int_{0}^\frac{\pi}{2} \cos (2x) dx-\frac{1}{4} x \cos (2x) \Big|_{0}^{\frac{\pi}{2}}\\
  &=\frac{1}{8}\int_{0}^\frac{\pi}{2} \bigl(\sin (2x)\bigr)' dx+\frac{1}{8} \pi=\frac{1}{8} \pi.
  \end{aligned}
  \]

- 4\) 计算 $\displaystyle\int_{1}^2 \frac{1}{x\sqrt{1+x^2}}dx$。
  在这个计算中，我们将 $x$ 换成 $\dfrac{1}{y}$：
  \[
  \begin{aligned}
  \int_{1}^2 \frac{1}{x\sqrt{1+x^2}}dx&=\int_{\frac{1}{2}}^1 \frac{1}{\sqrt{1+y^2}}dy.
  \end{aligned}
  \]
  为了计算上面的积分，
  我们首先声明 $\displaystyle\int \dfrac{1}{\sqrt{1+x^2}}=\log (x+\sqrt{1+x^2})$，据此，
  \[
  \int_{\frac{1}{2}}^1 \frac{1}{\sqrt{1+y^2}}dy=\log\frac{2+2\sqrt{2}}{1+\sqrt{5}}.
  \]
  很明显，上面的不定积分的计算是有难度的，这样的技巧我们留到后面来谈。
  我们给一个更透明的计算，想法是注意到 $1+x^2$ 的形式让我们联想到双曲三角函数，
  我们做变量替换 $y=\sinh z$，从而
  \[
  \int_{\frac{1}{2}}^1 \frac{1}{\sqrt{1+y^2}}dy.=\int_{\alpha}^{\beta} \frac{1}{\cosh z}\cosh zdz=\beta-\alpha,
  \]
  其中，$\sinh(\alpha)=\dfrac{1}{2}$，$\sinh(\beta)=1$。
  通过解二次方程，我们就可以确定 $\alpha$ 和 $\beta$。

:::
