---
title: 历史注记：微分与积分的交换定理，含参积分
notices:
  - name: 问题
    items:
      - '“应用：计算一些原函数不存在的定积分”一节例子第 1 项中，$\int_0^\infty x^n e^{-tx}dx = n!\frac{1}{t^n}$ 的右边似乎应为 $n!\frac{1}{t^{n+1}}$。'
---

## Newton 与 Leibniz 时代的微积分

上次课的开始，我们陈述并证明了下述积分算子：
\[
\int_a^b\colon  C\bigl([a,b]\bigr) \longrightarrow \mathbb{R},   \ \  f\mapsto \int_{a}^b f.
\]
是连续线性映射。特别地，如果 $f_n\rightarrow f$ 是 $C\bigl([a,b]\bigr)$ 一致收敛的序列，那么
\[
\lim_{n\rightarrow \infty}\int_{a}^b f_n =\int_a^b f.
\]
我们来讲一下这个命题的历史渊源（参见史记－牛顿莱布尼兹列传）。
为此，我们考虑级数版本的陈述：假设 $\{f_n\}_{n\geqslant 1}\subset C\bigl([a,b]\bigr)$，
考虑 $C\bigl([a,b]\bigr)$ 中的函数项级数
\[
f=f_1+f_2+f_3+\cdots
\]
我们假设这个级数在 $\|\cdot\|_{\infty}$ 所定义的距离下是收敛到 $f$ 的，即部分函数和
\[
S_n=f_1+f_2+\cdots+f_n
\]
一致收敛到 $f$。
比如说，如果 $f=f_1+f_2+f_3+\cdots$ 绝对收敛，
即级数 $\displaystyle \sum_{k=1}^\infty \|f_k\|_{\infty}$，那么这个性质是满足的。此时，我们有
\[
\int_{a}^b \left(\sum_{k=1}^\infty f_k(x)\right) dx =\sum_{k=1}^\infty  \left(\int_{a}^b f_k(x) dx\right).
\]

Newton对于微积分理论的很大贡献来自于他对（广义）二项式展开的研究，用今天的语言来讲，
他研究可以用无穷幂级数的形式所给出的函数（他大概相信所有的函数都可以写成这样的形式）。
由于时代的限制，他醉心于形如
\[
f(x)=a_0+a_1 x+a_2 x^2+a_3 x^3+\cdots
\]
的函数的流数术（微分）与反流数术（积分）。
他首先发现了形如 $(P+PQ)^{\frac{m}{n}}$ 型函数的二项式展开公式，用今天的话说，我们有
\[
(1+x)^\frac{m}{n}=1+\sum_{k=1}^\infty \frac{\frac{m}{n}\left(\frac{m}{n}-1\right)\cdots \left(\frac{m}{n}-k+1\right)}{k!}x^k.
\]
Newton本人后来还推导了正弦三角函数 $\sin x$ 的级数表达式：
\[
\sin x= x-\frac{1}{6}x^3+\frac{1}{120}x^5-\cdots.
\]
他还能够将 $f(x)=a_0+a_1 x+a_2 x^2+a_3 x^3+\cdots$ 的反函数用级数表达，姑且不论其严格性，
这在当时是非常了不起的成就。
由于当时他知道如何计算形如 $x^m$ 的函数的微分与原函数，所以利用这些函数的级数表达，
Newton可以自由地计算一个给定函数的流数与反流数：
\[
f'(x)=a_1 +2a_2 x^1+3a_3 x^2+\cdots,  \ \  \int_0^1 f = a_0+ \frac{a_1}{2}+\frac{a_2}{3}+\cdots.
\]
当然，从现在的观点看，Newton假设了对一个级数可以逐项的求微分或者求积分（我们需要某种一致收敛性），
这自然不严格。
无论怎样，Newton的成就在于通过级数的理论可以对非常一般的函数进行微分和积分！另外，我们也看到了，
级数在微积分的历史上是如何以优雅的方式在极限的概念出现之前登场！这是我们为什么在讲极限的理论的时候一定要同时研究级数（因为这是历史上最自然的极限过程）。

有了这个背景，我们来谈论一下Leibniz的某些贡献，他不仅引入了 $dx$ 和 $\displaystyle\int$ 的符号，
还和Newton分别证明了不同形式的Newton–Leibniz公式。
假设 $y=y(x)$ 是一个（为了方便起见，递增的）连续可微的函数，利用我们所学的分部积分的知识，我们有
\[
\int_a^b y(x)dx =-\int_a^b x y'(x)dx +by(b)-ay(a).
\]
Leibniz证明了分部积分公式是这个公式的代数变形：
\[
\int_a^b y(x)dx =\frac{1}{2}\int_a^b z(x)dx +\frac{1}{2}\bigl(by(b)-ay(a)\bigr), \ \  z(x)=y(x)-xy'(x).
\]
他的公式有很清晰的几何意义：

![](MathAnalysis_N24P1.svg)

函数 $y(x)$ 在 $[a,b]$ 区间上所对应的面积是 $\displaystyle\int_a^b y(x)dx$，
表达式 $\dfrac{1}{2}\bigl(by(b)-ay(a)\bigr)$ 是三角形 $\triangle ObB$ 与三角形 $\triangle OaA$
的面积之差，而 $\dfrac{1}{2}\displaystyle\int_a^b z(x)dx$ 是灰色区域的面积。
为了说明 $\dfrac{1}{2}\displaystyle\int_a^b z(x)dx$ 是面积，我们观察下面的图（由于历史的原因，
这个方法有时候被称作是微元法，实质上就是用Riemann和来定义积分）：

![](MathAnalysis_N24P2.svg)

点 $P=\bigl(x_0,y(x_0)\bigr)$ 落在函数图像上，过这一个点的切线 $\ell$ 的方程为
\[
y-y(x_0)=y'(x_0)(x-x_0).
\]
从而，
$O$ 到 $\ell$ 的距离为
$|OH|=\dfrac{|y(x_0)-y'(x_0)x_0|}{\sqrt{y'(x_0)^2+1}}=\dfrac{|z(x_0)|}{\sqrt{y'(x_0)^2+1}}$。
假设 $Q=\bigl(x_0+\Delta x,y(x_0+\Delta x)\bigr)$，当 $\Delta x$ 很小的时候，
我们可以认为上面淡蓝色三角形的底边 $PQ$ 和 $\ell$ 是同一条直线，它高是 $OH$。
由于 $|PQ|=\sqrt{y'(x_0)^2+1} \Delta x$，所以，
\[
|\triangle OPQ|=\frac{1}{2}\times \dfrac{|z(x_0)|}{\sqrt{y'(x_0)^2+1}}\times \sqrt{y'(x_0)^2+1} \Delta x=\frac{1}{2} |z(x_0)| \Delta x.
\]
将所有这样的小三角形加起来自然是灰色区域的面积。

Leibniz的时代自然知道如何计算圆的面积，所以，四分之一圆弧
\[
\bigl\{(x,y) \bigm| (x-1)^2+y^2=1, x\in [0,1], y\geqslant 0\bigr\}
\]
下的面积是 $\dfrac{1}{4}\pi$。此时，函数 $y=\sqrt{2x-x^2}$，所以我们有
\[
\frac{\pi}{4}=\int_{0}^1 y(x) dx=\int_{0}^1 \sqrt{2x-x^2} dx.
\]
我们注意到，$\sqrt{2x-x^2}$ 的Taylor展开或者级数展开并不容易计算。Leibniz利用他的分部积分公式得到
\[
\frac{\pi}{4}=\int_0^1 y(x)dx =\frac{1}{2}\int_0^1 z(x)dx +\frac{1}{2}, \ \  z(x)=y(x)-xy'(x)=\sqrt{\frac{x}{2-x}}.
\]

![](MathAnalysis_N24P3.svg)

为了计算 $\displaystyle\int_0^1 z(x)dx$，
我们注意到这加上灰色区域的面积恰好是整个正方形的面积（**这只是直观解释，
我们将要在作业里证明下面的等式**），即
\[
\int_0^1 z(x)dx +\int_0^1 x(z)dz=1.
\]
所以，
\[
\frac{\pi}{4}=\int_0^1 y(x)dx =1-\frac{1}{2}\int_0^1 x(z)dz=1-\int_0^1 \frac{z^2}{1+z^2}dz .
\]
我们可以想象在Leibniz那个时代应该没有换元积分公式等技术，
所以这种直观的几何方法反而是最自然最简单的思考方式。
这种变形所得到的被积函数容易展开成级数的形式，所以Newton的反流数术可以派得上用场：
\[
\frac{\pi}{4}=\int_0^1 \frac{1}{1+z^2}dz=\int_{0}^1 \sum_{k=0}^\infty (-1)^kz^{2k} dz =\sum_{k=0}^\infty \frac{(-1)^k}{2k+1}.
\]
这就证明我们在第四次课中提到的重要极限：
\[
1-\dfrac{1}{3}+\dfrac{1}{5}-\cdots + \dfrac{(-1)^{n-1}}{2n-1} +\cdots =\frac{\pi}{4}.
\]
这是Leibniz的原始证明。
当然，为了使得最后一步推理严格，我们注意到，对任意的 $\varepsilon$，在 $[0,1-\varepsilon]$ 上，
级数 $\displaystyle \sum_{k=0}^\infty (-1)^kz^{2k}$ 一致收敛到 $\dfrac{1}{1+z^2}$，所以，我们有
\[
\int_0^{1-\varepsilon} \frac{1}{1+z^2}dz=\int_{0}^{1-\varepsilon} \sum_{k=0}^\infty (-1)^kz^{2k} dz =\sum_{k=0}^\infty \frac{(-1)^k(1-\varepsilon)^{2k+1}}{2k+1}.
\]
我们需要证明当 $\varepsilon\rightarrow 0$ 时，两边的极限可以取到，我们将这一步留作作业。
Huygens对Leibniz的这个公式大加赞许，认为这个公式 *will be celebrated among mathematicians forever*。
然而，由于同一时代的英国数学家James Gregory研究了 $\arctan x$ 的级数展开（你是否能证明）：
\[
\arctan x=x-\frac{1}{3}x^3+\frac{1}{5}x^5-\cdots,
\]
这个公式也为后面Leibniz与Newton在微积分发明权上的争执埋下了伏笔。

## 微分与积分的交换定理

::: proposition [微分与积分的交换定理，Riemann积分的版本]
假设二元函数
\[
f(x,t)\colon [a,b]\times [t_0-c,t_0+c]\rightarrow \mathbb{R}
\]
是连续函数。对于每个 $x\in [a,b]$，我们假设 $\dfrac{d f}{d t}(x,t)$ 存在并且
\[
\dfrac{d f}{d t}\colon  [a,b]\times [t_0-c,t_0+c]\rightarrow \mathbb{R}
\]
是连续函数，那么对于每个固定的 $x\in [a,b]$，映射
\[
[t_0-c,t_0+c]\rightarrow \mathbb{R}, \ \ t\mapsto \displaystyle \int_a^b f(x,t)dx
\]
是关于变量 $t$ 的可微函数并且有如下的等式：
\[
\frac{d}{dt}\Big|_{t=t_0}\bigl(\int_a^b f(x,t)dx \bigr)=\int_a^b \dfrac{d f}{d t}(x,t_0) dx.
\]
:::

::: proof
固定 $x\in [a,b]$，我们令 $F(t)=\displaystyle \int_a^b f(x,t)dx$。根据Lagrange中值定理，我们有
\[
\begin{aligned}
\dfrac{F(t_0+h)-F(t_0)}{h}=\int_{a}^b     \dfrac{d f}{d t}\bigl(x,t_0+\theta(x,h)h\bigr),
\end{aligned}
\]
其中 $\theta(x,h)\in [0,1]$。
从而，
\[
\begin{aligned}
\dfrac{F(t_0+h)-F(t_0)}{h}-\int_a^b \dfrac{d f}{d t}(x,t_0) dx=\int_{a}^b     \left(\dfrac{d f}{d t}\bigl(x,t_0+\theta(x,h)h\bigr)- \dfrac{d f}{d t}(x,t_0)\right).
\end{aligned}
\]
按照要求，$\dfrac{d f}{d t}(x,t)$ 是紧集合 $[a,b]\times [t_0-c,t_0+c]$ 上的连续函数，
从而是一致连续的函数。
按照定义，对任意的 $\varepsilon$，存在 $\delta>0$，只要 $|(x,t)-(x',t')|<\delta$，
就有 $|f(x,t)-f(x',t')|<\varepsilon$。据此，当 $h<\delta$ 时，我们有
\[
\begin{aligned}
\Big|\dfrac{F(t_0+h)-F(t_0)}{h}-\int_a^b \dfrac{d f}{d t}(x,t_0) dx\Big|<\int_{a}^b     \varepsilon =(b-a)\varepsilon.
\end{aligned}
\]
即
$\displaystyle \lim_{h\rightarrow 0}\Big|\dfrac{F(t_0+h)-F(t_0)}{h}-\int_a^b \dfrac{d f}{d t}(x,t_0) dx\Big|=0$，
这就证明命题。
:::

在这个证明中，最核心的技术是利用如下的引理

::: lemma
假设 $f\colon (X,d)\rightarrow \mathbb{R}$ 是紧的距离空间上的连续函数，那么 $f$ 是一致连续的。
:::

::: proof
任选 $\varepsilon>0$，按照定义，对任意的 $x$，存在 $\delta_x>0$，
使得对任意的 $y\in B(x,2\delta_x)$，我们都有 $|f(y)-f(x)|<\dfrac{1}{2}\varepsilon$。
很明显，开球的集合 $\bigl\{B(x,\delta_x)\bigm|x\in X\bigr\}$ 是 $X$ 的开覆盖，根据紧性，
存在 $B(x_1,\delta_1)$、$B(x_2,\delta_2)$、$\cdots$、
$B(x_n,\delta_n)$（其中 $\delta_k=\delta_{x_k}$），它们构成了 $X$ 的一个有限开覆盖。
令 $\delta=\min(\delta_1,\cdots,\delta_n)$。此时，任选 $y,y'\in X$，使得 $d(y,y')<\delta$。
存在某个 $i_0$，使得 $y\in B(x_{i_0},\delta_{i_0})$，从而，$y'\in B(x_{i_0},2\delta_{i_0}) $。
据此，我们知道：
\[
|f(y)-f(x)|<\dfrac{1}{2}\varepsilon,  \ |f(y')-f(x)|<\dfrac{1}{2}\varepsilon \ \ \Rightarrow \ \ |f(y)-f(y')|<\varepsilon.
\]
这就证明了 $f$ 是一致连续的。
:::

## 应用：计算一些原函数不存在的定积分

通过变动参数 $t$，我们可以用连续变换的思想来研究积分的值（依赖于 $t$）：

::: example* [梗概]
- 1\) Euler关于 $n!$ 的积分公式：
  \[
  \displaystyle \int_0^\infty x^n e^{-x}dx = n!.
  \]

  我们自然可以通过分部积分将积分化为 $\displaystyle \int_0^\infty e^{-x}dx = 1$ 来进行计算。
  我们要注意到，一般而言，分部积分公式可能对反常积分并不成立。
  为此，我们需要用极限来表达反常积分才可以，我们在此略去细节。

  另外一个有趣的方法是利用积分和导数可以交换的性质：通过换元 $x \mapsto tx$，我们有
  \[
  \displaystyle \int_0^\infty e^{-tx}dx = \frac{1}{t}.
  \]
  我们对 $t$ 求 $n$ 次导数，得到
  \[
  \displaystyle \int_0^\infty x^n e^{-tx}dx = n!\frac{1}{t^n}.
  \]
  令 $t=1$ 即可。
  当然，我们并不知道上面的关于积分和导数可以交换的性质在此情况下是否能够运用，但是，不难看出，
  每次求导数之后，
  函数 $x^ne^{-tx}$ 是关于 $(x,t)\in [0,\infty)\times[\frac{1}{2},\frac{3}{2}]$ 的一致连续的函数，
  所以命题仍然成立。

- 2\)（Gauss积分）$\displaystyle \int_{-\infty}^\infty e^{-x^2}dx =\sqrt{\pi}$（**应该熟记这个结论**）。

  我们定义
  \[
  I=\displaystyle \int_{0}^\infty e^{-\frac{x^2}{2}}dx, \ \ F(t)=\displaystyle \int_{0}^\infty \dfrac{e^{-\frac{t^2(1+x^2)}{2}}}{1+x^2}dx.
  \]
  由于积分因子在 $[1,\infty)$ 上被 $\dfrac{1}{x^2}$ 控制，所以 $F(t)$ 收敛。
  我们对 $t$ 求导数，它可以与积分号交换（和上面一个道理），从而
  \[
  F'(t)=-te^{-\frac{t^2}{2}}\int_{0}^\infty e^{-\frac{t^2x^2}{2}}dx=-Ie^{-\frac{t^2}{2}},
  \]
  其中。我们注意到 $F(0)=\dfrac{\pi}{2}$。另外，我们有
  \[
  F(\infty)=\lim_{t\rightarrow \infty} F(t)=0.
  \]
  这因为
  \[
  \int_0^\infty\dfrac{e^{-\frac{t^2(1+x^2)}{2}}}{1+x^2}\leqslant  \int_0^\infty\dfrac{2}{t^2(1+x^2)^2} =\frac{1}{t^2}\times\int_0^\infty\frac{dx}{(1+x^2)^2}=O(\frac{1}{t^2}).
  \]
  我们有
  \[
  \frac{\pi}{2}=-\int_{0}^\infty F'(t)dt=(-I)^2.
  \]
  据此，我们就算得了Gauss积分。

- 3\) 我们研究积分 $\displaystyle \int_0^\infty e^{-tx} \frac{\sin x}{x}dx$，
  其中 $t\in [0,\infty)$。

  我们令 $F(t)=\displaystyle \int_0^\infty e^{-tx} \frac{\sin x}{x}dx$，那么（为什么），
  $F'(t)=-\displaystyle \int_0^\infty e^{-tx} {\sin x}dx$。我们可以计算不定积分
  \[
  \int e^{ax} {\sin x}dx=\frac{a\sin x -\cos x}{1+a^2}e^{ax}.
  \]
  所以，
  \[
  F'(t)=\frac{t\sin x +\cos x}{1+t^2}e^{-tx}\Big|_{x=0}^{x=\infty}=-\frac{1}{1+t^2}.
  \]
  从而，$F(t)=-\arctan t + C$，其中 $C$ 为常数。为了确定 $C$，我们令 $t\rightarrow \infty$ 即可。
  特别地，令 $t=0$，我们得到
  \[
  \displaystyle \int_0^\infty \frac{\sin x}{x}dx = \frac{\pi}{2}.
  \]

  $\displaystyle \int_0^\infty e^{-tx} \frac{\sin x}{x}dx = \frac{\pi}{2}-\arctan t$。

:::
