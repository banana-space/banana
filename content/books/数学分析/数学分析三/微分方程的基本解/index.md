---
title: 微分方程的基本解
---

## 解析函数的正则性

我们已经证明了，在分布的意义下，有如下的等式
\[
\overline{\partial}\left(\frac{1}{\pi z}\right)\stackrel{\mathcal{D}'}{=}\delta_0.
\]
其中，
\[
\overline{\partial} = \frac{\partial}{\partial \overline{z}}=\frac{1}{2}\left(\frac{\partial }{\partial x}+i\frac{\partial }{\partial y}\right).
\]
另外，对于$\Omega\subset \mathbb{C}$上的复值连续可微的函数$f$，
如果它满足$\overline{\partial}f\equiv 0$，我们就称$f$是复解析的函数。
我们下面证明，复解析的函数一定是光滑函数。这是一个不平凡的事实，因为我们一开始只假设了它是$C^1$的。
事实上，我们有更强的结论：

::: theorem [椭圆正则性]
给定非空的开区域$\Omega\subset \mathbb{C}$。
假设分布$u \in \mathcal{D}'(\Omega)$满足Cauchy-Riemann方程
\[
\overline{\partial} u =0.
\]
那么，$u$是光滑函数，即$u \in C^\infty(\Omega)$。
:::

在证明Cauchy-Riemann方程的椭圆正则性定理之前，我们先证明如下的引理：

::: lemma
给定有紧支集的分布$c\in \mathcal{E}'(\mathbb{R}^2)= \mathcal{E}'(\mathbb{C})$，那么，
$\displaystyle \frac{1}{z}*c$在$c$的支集之外是光滑的，即
\[
\displaystyle \frac{1}{z}*c \in C^\infty \left(\mathbb{R}^2-{\rm supp}(c)\right).
\]
:::

::: proof
我们选取非负的$\chi$，使得它的支集在半径为$1$的小球之内并且其积分恰好等于$1$。
利用这个截断函数，我们把$\dfrac{1}{z}*c$写成两部分：
\[
u=\frac{1}{z}*c=\underbrace{\left(\frac{\chi_\varepsilon}{z}\right)*c}_{\text{支集}~\subset~B_{\varepsilon}+{\rm supp}(c)}+\underbrace{\left(\frac{1-\chi_\varepsilon}{z}\right)*c}_{\text{光滑}}.
\]

第一部分中，根据支集在卷积下的关系，我们有
\[
{\rm supp}\left[\left(\frac{\chi_\varepsilon}{z}\right)*c\right]\subset {\rm supp}\left(\frac{\chi_\varepsilon}{z}\right)+{\rm supp} \left(c\right)\subset B_\varepsilon+{\rm supp} \left(c\right),
\]
其中，$B_\varepsilon$是中心在原点半径为$\varepsilon$的开球。

第二部分中，由于$\dfrac{1-\chi_\varepsilon}{z}$是光滑函数，所以，这一部分的卷积实际上是光滑函数，
它对问题本身没有影响，可以忽略。

综合上面的叙述，$u$至少在第一部分的支集之外（等于$0$加上一个光滑函数）是光滑的。
也就是说，$u$在$\mathbb{R}^2-B_{\varepsilon}-{\rm supp}(c)$上光滑。
令$\varepsilon \rightarrow 0$，我们就说明了$u$在$\mathbb{R}^2-{\rm supp}(c)$上光滑。
:::

::: proof [椭圆正则性定理的证明]
光滑性是一个局部性质，所以我们只要证明$u$在每个点的附近为光滑函数即可：
我们任选点$z_0\in \Omega$以及$z_0$处的一个小开球$B(z_0,2\varepsilon)$，
使得$B(z_0,2\varepsilon)\subset \Omega$，其中$\varepsilon>0$。
然后，选取$\mathbb{C}$上的光滑函数$\theta(z)$，使得
\[
\begin{cases}
&0\leqslant \theta(z) \leqslant 1, ~\text{对任意的}~z\in \mathbb{C}；\\
&\theta\big|_{B(z_0,\varepsilon)}\equiv 1;\\
&\theta\big|_{\mathbb{C}-B(z_0,2\varepsilon)}\equiv 0.
\end{cases}
\]
根据上面的构造，我们知道，
\[
\partial_x \theta\big|_{B(z_0,\varepsilon)}\equiv \partial_y \theta\big|_{B(z_0,\varepsilon)} \equiv 0.
\]
我们只需要证明$\theta \cdot u$光滑即可，因为这就说明$u$在$B(z_0,\varepsilon)$上光滑。

利用卷积的基本性质，我们有如下的计算
\[
\begin{aligned}
\theta \cdot u &= \delta_0*(\theta \cdot u)=\overline{\partial}(\frac{1}{\pi z})*(\theta \cdot u)\\
&=\frac{1}{\pi z}*\big(\overline{\partial}(\theta \cdot u)\big)\\
&=\frac{1}{\pi z}*\big(\overline{\partial}\theta \cdot u\big)
\end{aligned}
\]
根据上面的引理，
$\theta\cdot u$在${\rm supp}\big(\overline{\partial}\theta \cdot u\big)$之外是光滑的。
由于$\overline{\partial} \theta \cdot u\big|_{B(z_0,\varepsilon)}\equiv 0$，从而，
$\theta \cdot u$在$B(z_0,\varepsilon)$上光滑，这就证明了定理。
:::

## 线性微分算子与基本解

给定区域$\Omega\subset \mathbb{R}^n$。给定非负整数$m\geqslant 0$。
对每个满足$|\alpha|\leqslant m$的多重指标$\alpha$，
我们指定一个复值的光滑函数
$a_\alpha(x)\in C^\infty(\Omega)$（关于这些函数的光滑性在很多应用中可能会放松为其他的条件，比如说，
只要求它们是$L^\infty$的函数等）。我们还要求至少有一个$a_\alpha(x)\neq 0$，其中，$|\alpha|=m$。
此时，我们称如下的算子
\[
P=\sum_{|\alpha|\leqslant m}a_\alpha(x)\partial^\alpha
\]
为一个次数为$m$的**线性微分算子**。
如果$a_\alpha(x)$均为常数，我们就把$P$称作是**常系数（线性）微分算子**。
另外，如果对所有的$|\alpha|<m$，$a_\alpha(x)\equiv 0$，我们就说$P$是 **$m$-次齐次的线性微分算子**。

作为例子，我们上面研究的$P=\overline{\partial}$就是常系数微分算子。

很明显，对任意的分布$u\in \mathcal{D}'(\Omega)$，我们可以用$P$来作用：
\[
P:  \mathcal{D}'(\Omega)\rightarrow  \mathcal{D}'(\Omega), \ \ u\mapsto Pu=\sum_{|\alpha|\leqslant m}a_\alpha(x)\partial^\alpha u.
\]
我们定义$P$的伴随算子为${}^tP$，其中，按照定义，它写为
\[
{}^tP  =\sum_{|\alpha|\leqslant m}(-1)^{|\alpha|}\partial^\alpha \circ  a_\alpha(x).
\]
也就是说，对任意的分布$u$，我们有
\[
{}^tP u =\sum_{|\alpha|\leqslant m}(-1)^{|\alpha|}\partial^\alpha \left(a_\alpha(x) u\right)
\]
通过Leibniz公式，我们很容易验证这也是一个线性微分算子，并且其次数也是$m$。
很明显，对任意的分布$u\in \mathcal{D}'(\Omega)$，对任意的试验函数$\varphi\in \mathcal{D}(\Omega)$，
我们都有
\[
\langle Pu, \varphi\rangle= \langle u, {}^tP\varphi\rangle.
\]

::: definition
给定$\mathbb{R}^n$上的常系数微分算子$P$。如果分布$E\in \mathcal{D}'(\mathbb{R}^n)$，满足
\[
P(E)=\delta_0,
\]
我们就称$E$是$P$的一个**基本解**。
:::

::: remark*
在上个世纪50年代末，B.Malgrange和L.Ehrenpreis各自独立证明了：
$\mathbb{R}^n$每一个常数系数的微分算子都有基本解。我们在课程上不去证明这个定理。
:::

::: example*
我们先给出三个例子：

- 1\) Cauchy-Riemann算子$\overline{\partial}$。

  这是$\mathbb{C}$上的线性微分算子，
  我们已经证明了$\dfrac{1}{\pi z}$是$\overline{\partial}$的一个基本解。

- 2\) Laplace算子$\triangle$。

  按照定义，
  \[
  \triangle =\sum_{k=1}^n \frac{\partial^2}{\partial x_k^2}.
  \]
  我们将在作业中证明，如下的函数是$\triangle$的基本解：
  \[
  \begin{cases}
  E(x)=\dfrac{1}{2\pi}\log|x|, \ \ &n =2;\\
  E(x)=\dfrac{1}{(2-n)|\mathbf{S}^{n-1}|}\dfrac{1}{|x|^{n-2}}, \ \ &n\geqslant 3.
  \end{cases}
  \]
  在上式中，$|\mathbf{S}^{n-1}|$表示的是$\mathbb{R}^n$中单位球面的测度。这些函数都是局部可积的。

  我们将在作业中重点研究这个例子。

- 3\) 热算子$\partial_t-\triangle$。

  热算子是定义在$\mathbb{R}\times \mathbb{R}^n$上的算子，其中，第一个坐标是时间$t$的坐标。
  它作用在以$(t,x)\in \mathbb{R}\times \mathbb{R}^n$为变量函数上的。
  如果用$H(t)$表示Heaviside函数（即$\mathbf{1}_{\mathbb{R}_{\geqslant 0}}$），
  那么如下的**热核**函数是$\partial_t-\triangle$的基本解：
  \[
  E(t,x)=\frac{H(t)}{(4\pi t)^{\frac{n}{2}}}e^{-\frac{|x|^2}{4t}}.
  \]

:::

## 热算子基本解的研究

我们来研究热算子$\partial_t-\triangle$的基本解$E(t,x)$的性质，其中
\[
E(t,x)=\frac{H(t)}{(4\pi t)^{\frac{n}{2}}}e^{-\frac{|x|^2}{4t}}.
\]
至于如何找到$E$的表达式，同学们要稍有耐心：我们将从Fourier变换的观点来给出$E$的构造。
历史上，Fourier也正是为了研究热传导才发明了Fourier变换这个工具。

首先，我们证明$E(t,x)\in L^1_{\rm loc}(\mathbb{R}\times \mathbb{R}^{n})$，从而，
这是一个良好定义的分布，即$E(t,x)\in \mathcal{D}'(\mathbb{R}\times \mathbb{R}^n)$。

实际上，我们观察到这是一个正函数并且在$t<0$处恒为零；在$t>0$处光滑。
我们在$t=0$附近研究它的性质即可。实际上，对于任意的$t>0$，做变量替换$x=\sqrt{t}y$我们知道
\[
\int_{\mathbb{R}^n}E(t,x)dx= \int_{\mathbb{R}^n}\frac{1}{(4\pi)^{\frac{n}{2}}} e^{-\frac{|y|^2}{4}}dy
\]
是常数。所以，$E(t,x)$在$[-A,A]\times \mathbb{R}^n$上可积分，这说明$E$是局部可积的。

另外，我们知道对任意的$t\neq 0$，$E(t,x)$是光滑的。所以，通过直接计算，我们就有
\[
(\partial_t -\triangle)(E(t,x))=0, \ \ t\neq 0.
\]
另外，固定$(0,x_0)$，其中，$x_0 \neq 0$，此时，由于当$t$从$>0$的地方趋向于$0$时，
$e^{-\frac{|x_0|^2}{4t}}$趋于$0$的速度比任意的$t$的幂次都要快，所以，
$E(0,x_0)$在这个点处的$t$的所有阶的偏导数都是$0$。
据此，不难说明，$E(t,x)$实际上在$\mathbb{R}\times \mathbb{R}^n-\{(0,0)\}$上是光滑的。
利用连续性以及上面的计算，我们得到
\[
(\partial_t -\triangle)(E(t,x))=0, \ \ \text{对任意的}~(t,x)\neq (0,0).
\]
我们把这个细节留作作业（这是一个经典的求导数题目，每位学过微积分的同学都应该掌握。）

为了证明在分布的意义下有
\[
(\partial_t -\triangle)(E(t,x))\stackrel{\mathcal{D}'}{=}\delta_{(0,0)},
\]
我们对任意的试验函数$\varphi(t,x)\in \mathcal{D}(\mathbb{R}\times \mathbb{R}^n)$，计算
\[
\begin{aligned}
\langle (\partial_t -\triangle)(E(t,x)), \varphi(t,x)\rangle&=-\int_0^\infty\int_{\mathbb{R}^n} E(t,x)\partial_t \varphi(t,x)dtdx-\int_0^\infty\int_{\mathbb{R}^n} E(t,x)\triangle \varphi(t,x)dtdx\\
&=-\lim_{\varepsilon\rightarrow 0}\underbrace{\int_\varepsilon^\infty\int_{\mathbb{R}^n} E(t,x)\partial_t \varphi(t,x)dtdx}_{I_\varepsilon}-\lim_{\varepsilon\rightarrow 0}\underbrace{\int_\varepsilon^\infty\int_{\mathbb{R}^n} E(t,x)\triangle \varphi(t,x)dtdx}_{J_\varepsilon}.
\end{aligned}
\]
在上面的极限中，我们用到了$E(t,x)\geqslant 0$在$[0,A]$上是可积分的，
从而（乘以一个常数）可以作为控制函数来用Lebesgue控制收敛定理。

我们来计算$I_\varepsilon$。
这里，最重要的想法是一旦我们在$t>0$处，这些计算实际上是光滑的，从而，
我们可以利用$E(t,x)$所满足的方程：
\[
\begin{aligned}
I_{\varepsilon}&\stackrel{Fubini}{=}\int_{\mathbb{R}^n}\left(\int_\varepsilon^\infty E(t,x)\partial_t \varphi(t,x)dt\right)dx\\
&=-\int_{\mathbb{R}^n}\left(\int_\varepsilon^\infty \partial_t E(t,x)\varphi(t,x)dt\right)dx-\int_{\mathbb{R}^n} E(\varepsilon,x) \varphi(\varepsilon,x) dx\\
&\stackrel{\text{热方程}}{=}-\int_{\mathbb{R}^n}\left(\int_\varepsilon^\infty \triangle E(t,x)\varphi(t,x)dt\right)dx-\int_{\mathbb{R}^n} E(\varepsilon,x) \varphi(\varepsilon,x) dx\\
&\stackrel{Fubini}{=}-J_\varepsilon-\int_{\mathbb{R}^n} E(\varepsilon,x) \varphi(\varepsilon,x) dx.
\end{aligned}
\]
所以，
\[
\begin{aligned}
I_{\varepsilon}+J_\varepsilon&=-\int_{\mathbb{R}^n} E(\varepsilon,x) \varphi(\varepsilon,x) dx\\
&=-\int_{\mathbb{R}^n} \frac{1}{(4\pi \varepsilon)^{\frac{n}{2}}}e^{-\frac{|x|^2}{4\varepsilon}} \varphi(\varepsilon,x) dx\\
&=- \frac{1}{(4\pi)^{\frac{n}{2}}}\int_{\mathbb{R}^n}e^{-\frac{|y|^2}{4}} \varphi(\varepsilon,\sqrt{\varepsilon}y) dy.
\end{aligned}
\]
由于
\[
\frac{1}{(4\pi)^{\frac{n}{2}}}\int_{\mathbb{R}^n}e^{-\frac{|y|^2}{4}} dy=1,
\]
所以，
\[
\begin{aligned}
-(I_{\varepsilon}+J_\varepsilon)&=- \frac{1}{(4\pi)^{\frac{n}{2}}}\int_{\mathbb{R}^n}e^{-\frac{|y|^2}{4}} \left(\varphi(\varepsilon,\sqrt{\varepsilon}y) -\varphi(0,0)\right)dy+\varphi(0,0).
\end{aligned}
\]
根据Lagrange中值定理，我们就有
\[
\begin{aligned}
\left|\varphi(\varepsilon,\sqrt{\varepsilon}y) -\varphi(0,0)\right|&\leqslant 2\|\nabla \varphi\|_{L^\infty} \left(\varepsilon+\sqrt{\varepsilon}|y|\right).
\end{aligned}
\]
所以，
\[
\begin{aligned}
 & \left| \frac{1}{(4\pi)^{\frac{n}{2}}}\int_{\mathbb{R}^n}e^{-\frac{|y|^2}{4}} \left(\varphi(\varepsilon,\sqrt{\varepsilon}y) -\varphi(0,0)\right)dy\right|\\
\leqslant& 2\|\nabla \varphi\|_{L^\infty} \left(\frac{\varepsilon}{(4\pi)^{\frac{n}{2}}}\int_{\mathbb{R}^n}e^{-\frac{|y|^2}{4}}dy+\frac{\sqrt{\varepsilon}}{(4\pi)^{\frac{n}{2}}}\int_{\mathbb{R}^n}|y|e^{-\frac{|y|^2}{4}}dy\right)
\end{aligned}
\]
由于上面两个积分都是有限的，所以上面的式子是一个$O(\sqrt{\varepsilon})$项，从而
\[
\lim_{\varepsilon\rightarrow 0}-(I_{\varepsilon}+J_\varepsilon)=\varphi(0,0)=\langle \delta_{0.0},\varphi\rangle.
\]
这就证明了
\[
(\partial_t -\triangle)(E(t,x))\stackrel{\mathcal{D}'}{=}\delta_{(0,0)}.
\]

利用基本解和卷积，我们可以解常系数的偏微分方程：

::: theorem
给定$\mathbb{R}^n$上的常数系数微分算子$P$，我们假设它有基本解$E\in \mathcal{D}'(\mathbb{R}^n)$。
那么，对任意的$c\in \mathcal{E}'(\mathbb{R}^n)$，存在分布$u\in \mathcal{D}'(\mathbb{R}^n)$，使得
\[
P(u)=c.
\]
:::

::: proof
我们定义$u=E*c$，这是一个分布。利用基本解的定义以及卷积的性质，我们有
\[
P(u)=P(E*c)=\big(P(E)\big)*c=\delta_0*c=c.
\]
这表明，$u$是一个解。
:::
