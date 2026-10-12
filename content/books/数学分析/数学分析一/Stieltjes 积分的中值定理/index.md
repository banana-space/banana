---
title: Stieltjes 积分的中值定理
---

Stieltjes积分在计数问题中很有用，基本的想法是通过选取适当的 $\mu$，
使得和计数有关的求和或者算级数的计算转化为算积分的问题，
这样子就可以借鉴微积分中的经验和想法来研究问题。
为此，对于Stieltjes积分，我们还需要再建立一个基本工具：分部积分。

::: proposition [Stieltjes积分的分部积分公式]
假设 $\mu$ 是闭区间 $[a,b]$ 上的递增函数，$f\in C^1([a,b])$。那么，我们有
\[
\int_a^b f'\cdot \mu =f\cdot \mu\Big|_{a}^{b}-\int_a^b f d\mu.
\]
:::

::: proof
证明的想法和第二积分中值定理的想法如出一辙，我们用求和逼近积分，
然后用Abel求和来代替分部积分，最终再取极限：

对于任意的分划 $\sigma\in \mathcal{S}(I)$，
其中 $\sigma=\{a=a_0<a_1<\cdots<a_{n-1}<a_n=b\}$，
根据Lagrange中值定理，存在 $\xi_i\in [a_{i-1},a_i]$，使得
\[
f(a_i)-f(a_{i-1})=f'(\xi_i)(a_i-a_{i-1}).
\]
我们首先说明，当分划 $\sigma$ 选取得足够细的时候，我们有
\[
\sum_{i=1}^n f'(\xi_i)\mu(a_i)(a_i-a_{i-1})\rightarrow
\int_a^b f'\cdot \mu.\ \ \cdots \ \cdots (\star)
\]
即对任意的 $\varepsilon>0$，存在 $\delta>0$，当分划的步长 $|\sigma|<\delta$ 时，我们有
\[
\bigg|\sum_{i=1}^n f'(\xi_i)\mu(a_i)(a_i-a_{i-1})
-\int_a^b f'\cdot \mu\bigg|<\varepsilon.
\]
这样就表明 $\displaystyle\sum_{i=1}^n f'(\xi_i)\mu(a_i)(a_i-a_{i-1})$
是要证的公式左边的一个精确的逼近。现在证明 $(\star)$：
\[
\begin{aligned}
&\ \ \ \ \bigg|\sum_{i=1}^n f'(\xi_i)\mu(a_i)(a_i-a_{i-1})
-\int_a^b f'\cdot \mu\bigg|\\
&\leqslant \bigg|\sum_{i=1}^n f'(\xi_i)\bigl(\mu(a_i)-\mu(\xi_i)\bigr)(a_i-a_{i-1})\bigg|
+\underbrace{\bigg|\sum_{i=1}^n f'(\xi_i)\mu(\xi_i)(a_i-a_{i-1})
-\int_a^b f'\cdot \mu\bigg|}_{\text{按照Riemann积分的定义，这一项可以很小}=o(1)}\\
&\leqslant \sup_{x\in I}|f'(x)|\!\!\!\!\!\!\underbrace{\sum_{i=1}^n |\mu(a_i)-\mu(\xi_i)|(a_i-a_{i-1})}_{\text{这一项被 $\mu\in \mathcal{R}(I)$ 的Darboux上下和之差控制}} \!\!\!\!\!\!+o(1).
\end{aligned}
\]
在上面的推导中，我们用到了如下的事实（作业已经证明）：单调函数是Riemann可积的。
当 $|\sigma|$ 足够小的时候，上面最后一个不等号右边的第一项可以任意小，这就证明了 $(\star)$。

现在可以证明分部积分公式了。我们对
$\displaystyle \sum_{i=1}^n f'(\xi_i)\mu(a_i)(a_i-a_{i-1})$ 用Abel求和法：
\[
\begin{aligned}
\sum_{i=1}^n f'(\xi_i)\mu(a_i)(a_i-a_{i-1})
&=\sum_{i=1}^n \mu(a_i)(f(a_i)-f(a_{i-1}))\\
&=\mu(a_n)f(a_n)-\mu(a_1)f(a_0)-\sum_{i=1}^{n-1} f(a_i)(\mu(a_{i+1})-\mu(a_i))\\
&=\underbrace{\mu(a_n)f(a_n)-\mu(a_0)f(a_0)}_{=f\cdot \mu\big|_{a}^{b}}
-\underbrace{\sum_{i=0}^{n-1} f(a_i)(\mu(a_{i+1})-\mu(a_i))}_{\mathbf{I}}.
\end{aligned}
\]
上式中
\[
\mathbf{I}=\sum_{i=0}^{n-1} f(a_i)\ell_\mu\bigl([a_{i},a_{i+1}]\bigr)=\int_{a}^b fd\mu +o(1).
\]
我们可以通过选取 $\sigma$ 使得 $f$ 与 $\displaystyle\int_{a}^b f d\mu$ 的差距是 $o(1)$，
最终取极限就证明了分部积分公式。
:::

我们要用Stieltjes积分的观点来看级数。
为此，先研究一个基本的例子，这即是所谓的Dirac $\delta$-函数：

::: example*
$[a,b]\subset \mathbb{R}$ 是有界闭区间，$c\in [a,b]$，我们考虑示性函数
\[
\mu_c=\mathbf{1}_{\geqslant c}(x)=\begin{cases}
1, &x\geqslant c;\\
0, &x<c.
\end{cases}
\]
这是递增的函数。假设 $f\colon [a,b]\rightarrow \mathbb{R}$ 是有界函数
并且 $f$ 在 $c$ 处**连续**，我们来计算 $f$ 在测度 $d\mu_c$ 下的Stieltjes积分。

根据 $\mu_c$ 的构造，我们选取一个分划 $\sigma\in \mathcal{S}([a,b])$，使得
\[
a=a_0<a_1<\cdots<a_k=c<a_{k+1}<\cdots<a_n=b.
\]
此时，相应的Darboux上下和之差为
\[
\begin{aligned}
\overline{S}_{\mu_c}(f;\sigma)-\underline{S}_{\mu_c}(f;\sigma)
&=\underbrace{\sum_{i=1}^{k-1} (M_i-m_i)\bigl(\mu(a_i)-\mu(a_{i-1})\bigr)}_{=0}
+(M_k-m_k)(\mu(a_k)-\mu(a_{k-1}))\\
&\ \ \ +\underbrace{\sum_{i=k+1}^{n} (M_i-m_i)\bigl(\mu(a_i)-\mu(a_{i-1})\bigr)}_{=0}\\
&=(M_k-m_k)\bigl(\mu(a_k)-\mu(a_{k-1})\bigr).
\end{aligned}
\]
根据 $f$ 在 $c$ 处的连续性，如果包含 $c$ 的分划越来越小，
那么 $M_k-m_k\rightarrow 0$，从而上式的极限为零，所以 $f$ 是可积的。
有了可积性，我们可以选任意的Riemann和来计算积分，
特别地，我们选取 $\xi_i=a_i$，我们就有如下的Riemann和：
\[
\underbrace{\sum_{i=1}^{k-1} f(a_i)\bigl(\mu(a_i)-\mu(a_{i-1})\bigr)}_{=0}
+f(a_k)(\mu(a_k)-\mu(a_{k-1}))
+\underbrace{\sum_{i=k+1}^{n} f(a_i)\bigl(\mu(a_i)-\mu(a_{i-1})\bigr)}_{=0}=f(c).
\]
此时，我们令分划的步长趋于零，从而
\[
\int_a^b f d\mu_c= f(c).
\]
:::

::: remark*
假设 $f$ 在 $[a,b]$ 连续可微，即 $f\in C^1([a,b])$，根据分部积分公式，我们有
\[
f(b)-\int_a^b f d\mu_c=\int_a^b f'\cdot \mu_c =\int_c^b f'=f(b)-f(c).
\]
这也能给出上述结论。
:::

::: lemma
假设 $\{\alpha_n\}_{n\geqslant 1}$ 是正实数所组成的序列并且
$\displaystyle \sum_{n=1}^\infty \alpha_n$ 收敛，
$\{x_n\}_{n\geqslant 1}\subset (a,b)$。定义递增函数
\[
\mu =\sum_{n=1}^\infty \alpha_n \mu_{x_n}
=\sum_{n=1}^\infty \alpha_n \mathbf{1}_{\geqslant x_n}.
\]
那么，对于 $f\in C([a,b])$，我们有
\[
\int_a^b fd\mu = \sum_{i=1}^\infty \alpha_i f(x_i).
\]
:::

::: proof
由于级数 $\displaystyle \sum_{n=1}^\infty \alpha_n$ 收敛，
对于任意给定的 $\varepsilon>0$，我们可以选取 $N$，
使得 $\displaystyle \sum_{n\geqslant N+1}\alpha_n <\varepsilon$。
我们将 $\mu$ 分拆为两个部分（后一部分的贡献很小，是所谓的误差项）：
\[
\mu=\underbrace{\sum_{i=1}^N \alpha_n \mu_{x_n}}_{\mu_{\leqslant N}}
+\underbrace{\sum_{i=N+1}^\infty \alpha_n \mu_{x_n}}_{\mu_{\geqslant N+1}}.
\]
根据上面计算的例子，我们有
\[
\begin{aligned}
\int_a^b fd\mu -\sum_{i=1}^\infty \alpha_i f(x_i)
&=\left(\int_a^b f d\mu_{\leqslant N} -\sum_{i=1}^N \alpha_i f(x_i)\right)
+\left(\int_a^b fd\mu_{\geqslant N+1} -\sum_{i=N+1}^\infty \alpha_i f(x_i)\right)\\
&=\int_a^b fd\mu_{\geqslant N+1}
-\underbrace{\sum_{i=N+1}^\infty \alpha_i f(x_i)}_{\leqslant \varepsilon \|f\|_\infty}.
\end{aligned}
\]
很明显，根据定义，我们有 $\|\mu_{\geqslant N+1}\|_{L^\infty}< \varepsilon$，所以
\[
\begin{aligned}
\int_a^b fd\mu_{\geqslant N+1}
&\leqslant  \|f\|_\infty\int_{a}^bd\mu_{\geqslant N+1} \\
&=\|f\|_\infty\bigl(\mu_{\geqslant N+1}(b)-\mu_{\geqslant N+1} (a)\bigr)
\leqslant 2\varepsilon \|f\|_\infty.
\end{aligned}
\]
从而，
\[
\begin{aligned}
\bigg|\int_a^b fd\mu -\sum_{i=1}^\infty \alpha_i f(x_i)\bigg|
\leqslant 3\varepsilon \|f\|_\infty.
\end{aligned}
\]
令 $\varepsilon\rightarrow 0$，我们就证明了这个命题。
:::

::: remark*
这个命题对于反常积分的情形也成立，为此，我们需要将Stieltjes积分的概念加以推广。
基于Riemann积分的情况，这些推广实质上只是语言上的简单替换，
并没有更深刻的数学含义，所以我们仅仅给出例子说明。
比如说，我们在区间 $[0,\infty)$ 定义Stieltjes积分，
我们假设 $f$ 是有界连续（你当然可以用更弱的假设），我们首先定义
\[
\int_0^\infty f d\mu= \lim_{M\rightarrow \infty}\int_0^M f d\mu.
\]
假设 $\{\alpha_n\}_{n\geqslant 1}$ 是正实数所组成的序列并且
$\displaystyle \sum_{n=1}^\infty \alpha_n$ 收敛。定义递增函数
\[
\mu =\sum_{n=1}^\infty \alpha_n \mu_{n}
=\sum_{n=1}^\infty \alpha_n \mathbf{1}_{\geqslant n}.
\]
那么，我们有
\[
\int_1^\infty fd\mu = \sum_{n=1}^\infty \alpha_n f(n).
\]
证明和上面的命题是一致的，我们留作作业。
:::

作为Stieltjes积分的应用，我们首先来证明第二积分中值定理
（上次已经证明了，下面的版本中 $g$ 是连续的）：

::: proposition [第二积分中值定理]
给定闭区间 $I=[a,b]\subset \mathbb{R}$ 和Riemann可积的函数 $f, g\in R(I)$。
假设 $f$ 是递减并且对任意的 $x\in I$，$f(x)\geqslant 0$；函数 $g$ 是连续函数。
那么，一定存在 $c\in [a,b]$，使得
\[
\displaystyle \int_a^b fg= f(a)\int_{a}^c g.
\]
:::

::: proof
之前证明的瓶颈在于不能自由地运用分部积分。现在定义
\[
\mu = -f,\ \ G(x)=\displaystyle \int_a^x g(y)dy.
\]
由于 $g$ 是连续函数，从而 $G(x)$ 是连续可微的。根据Stieltjes积分版本的分部积分公式，我们有
\[
\int_a^b G' (-f) = G\cdot (-f)\big|_a^b-\int_{a}^b G d\mu.
\]
即
\[
\int_a^b fg=G(b)f(b)+\int_a^b G d\mu.
\]
令 $\displaystyle M=\sup_{x\in I}G(x)$，$\displaystyle m=\inf_{x\in I}G(x)$，
那么，根据上面的式子以及 $\mu=-f$，我们有
\[
\int_a^b fg\leqslant f(b)M+M\int_a^b  d\mu=f(a)M.
\]
类似地，我们有
\[
\int_a^b fg\geqslant f(b)m+m\int_a^b  d\mu=f(a)m.
\]
这就证明了
\[
f(a)m\leqslant \int_a^b fg\leqslant f(a)M.
\]
根据之前的证明，从这个不等式出发第二中值定理的证明是明显的。
:::

::: proposition [第二积分中值定理的第二个版本]
假设 $I=[a,b]\subset \mathbb{R}$ 是有界闭区间，$f\in \mathcal{R}(I)$ 是递增的函数，
$g\in C(I)$ 是连续函数。那么，存在 $c\in [a,b]$，使得
\[
\displaystyle \int_a^b fg= f(a)\int_{a}^c g+f(b)\int_c^b g.
\]
:::

::: proof
我们选取Stieltjes积分中的测度 $d\mu$ 为 $\mu = f$。
令 $G(x)=\displaystyle \int_a^x g(y)dy$。所要证明的等式的右边等于
\[
\begin{aligned}
f(a)G(c)+f(b)\bigl(G(b)-G(c)\bigr)&=\bigl(f(a)-f(b)\bigr)G(c)+f(b)G(b)\\
&=f(b)G(b)-G(c)\mu([a,b]).
\end{aligned}
\]
根据Stieltjes积分的分部积分公式，我们有
\[
\begin{aligned}
\int_a^b fg&=\int_a^b G' \cdot f = G\cdot f \big|_a^b-\int_{a}^b G d\mu\\
&=G(b)f(b)-\int_a^b G d\mu.
\end{aligned}
\]
据此，只需要说明存在 $c\in [a,b]$，使得
\[
\int_a^b G d\mu=G(c)\mu([a,b]).
\]
很明显，这是Stieltjes积分情形下的积分第一中值定理，这是非常容易证明的，我们也留作作业。
:::

我们只给出第一中值定理的叙述：

::: theorem [第一积分中值定理]
$[a,b]$ 是有界闭区间，$\mu$ 是该区间上单调递增的函数，
$f, g\in \mathcal{R}([a,b];\mu)$ 是实值Riemann可积函数。
我们假设对任意的 $x\in [a,b]$，$g(x)\geqslant 0$。令
\[
m=\displaystyle \inf_{x\in I} f(x), \ \ M=\displaystyle \sup_{x\in I} f(x).
\]
那么，存在 $\ell \in [m,M]$，使得
\[
\int_a^b fgd\mu= \ell \int_{a}^b gd\mu.
\]
特别地，如果进一步要求 $f$ 是连续函数，那么存在 $\xi \in [a,b]$，使得
\[
\displaystyle \int_a^b fgd\mu= f(\xi) \int_{a}^b gd\mu.
\]
:::

::: exercise*
你是否可以构造一个Stieltjes积分来说明Abel求和法也是Stieltjes积分意义下的分部积分公式的特例？
:::

我们再看一个例子，这是我们之前提到过的面积方法来研究积分和求和之间的关系。

::: lemma
假设 $a,b\in \mathbb{Z}$，$f$ 是 $[a,b]$ 上的单调函数并且是 $C^1$ 的，
那么存在 $\theta=\theta(a,b;f)\in [0,1]$，使得
\[
\sum_{a<n\leqslant b} f(n) =\int_{a}^b f(x)dx + \theta\cdot (f(b)-f(a)).
\]
:::

::: proof
我们定义函数 $\mu(x)=\left\lfloor {x} \right\rfloor$，即任意给定 $x\in\mathbb{R}$，
$\mu(x)$ 是不超过 $x$ 的最大的整数。很明显，这是在 $\mathbb{R}$ 上定义的递增的函数。
由于 $a$ 和 $b$ 都是整数，所以
\[
\sum_{a<n\leqslant b} f(n)=\int_{a}^b fd\mu.
\]
据此，我们有
\[
\begin{aligned}
\sum_{a<n\leqslant b} f(n)-\int_{a}^b f(x)dx
&=\int_a^b f(x)d\left\lfloor {x} \right\rfloor-\int_a^b f(x)d x\\
&=-\int_a^b f'(x)\left\lfloor {x} \right\rfloor dx+ f(x)\left\lfloor {x} \right\rfloor\Big|_a^b
+\int_a^b f'(x) x d x- f(x)x\Big|_a^b \\
&=\int_{a}^b \{x\}df - f(x)\{x\}\big|_a^b.
\end{aligned}
\]
其中，$\{x\}=x-\left\lfloor {x} \right\rfloor$。这个函数在整数处取值为 $0$，所以
\[
\begin{aligned}
\sum_{a<n\leqslant b} f(n)-\int_{a}^b f(x)dx=\int_{a}^b \{x\}df.
\end{aligned}
\]
最终，我们注意到 $\{x\}\in [0,1)$，
现在对 $f$ 所定义的Stieltjes积分用第一中值定理就证明了命题。
:::

::: remark*
我们只需要假设 $f\in C([a,b])$ 并且 $f$ 是递增的即可，上述结论仍然成立。
:::

::: remark*
我们可以简单总结一下为什么要对积分理论的加以推广。
首先要指出的是，推广本身或者理论的抽象本身并不是目标。
我们主要是想能够在更广阔的天地里看到微积分理论与其它数学对象的相似性，
从而通过类比可以运用微积分中最基本的工具来处理其它的问题，
比如说分部积分（这是联系局部和整体的最重要工具）。

在数学上，我们对大部分对象的了解都是基于它所满足的性质
（不精确地讲，这即是代数上称之为万有性质的性质）而不是定义本身。
我们已经见过这样的例子：比如说三角函数 $\sin$ 和 $\cos$，
只要知道它们满足和差化积公式、知道它们的导数和原函数，
我们完全代数的操作证明了它们的其它性质，不夸张地说这些性质完整刻画了三角函数。

所以，我们可以想象，如果我们要建立一套积分理论，
它需要有哪些基本的性质：线性、三角不等式以及分部积分（等）。
一旦一个积分理论可以做这些操作，那么我们就可以照搬微积分的做法得到很多很有用的结论。
下个学期的学习我们也将一直按照这个思路来进行。
:::
