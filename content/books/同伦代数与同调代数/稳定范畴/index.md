---
title: 稳定范畴
---

从本节开始，除非特别说明，$\infty$-范畴都指拟范畴。

在代数拓扑中，我们知道有同伦推出、同伦拉回图表
\[
\begin{tikzcd}
  X\ar[r]\ar[d]\ar[dr,phantom,pos=.8,"\lrcorner"] & *\ar[d] \\
  *\ar[r] & \Sigma X
\end{tikzcd}
\quad\text{和}\quad
\begin{tikzcd}
  \Omega X\ar[r]\ar[d]\ar[dr,phantom,pos=.2,"\ulcorner"] & *\ar[d] \\
  *\ar[r] & X\rlap{\ ,}
\end{tikzcd}
\]
我们在上一节也解释了这一点。
在稳定 $\infty$-范畴中，我们则有推出–拉回图表
\[
\begin{tikzcd}
  X\ar[r]\ar[d]\ar[dr,phantom,start anchor=south east,"\ulcorner" pos=.25,"\lrcorner" pos=.85] & *\ar[d] \\
  *\ar[r] & X[1]\rlap{\ ,}
\end{tikzcd}
\]
也就是说，函子 $\Sigma$ 和 $\Omega$ 互为逆。
例如，我们将看到，对链复形而言，
$\Sigma$ 和 $\Omega$ 分别是链复形的平移 $[1]$ 和 $[-1]$。
因此，链复形的 $\infty$-范畴就是稳定 $\infty$-范畴的一个例子。

稳定 $\infty$-范畴中的同伦论称为**稳定同伦论**。
因此，同调代数是稳定同伦论的一个特例。

我们还将介绍一种稳定化的过程，
它将普通的 $\infty$-范畴变成稳定 $\infty$-范畴。
例如，拓扑空间范畴的稳定化就是拓扑谱范畴，
其中的同伦论也就是经典意义的稳定同伦论。

## 稳定 $\infty$-范畴

::: definition
$\infty$-范畴 $\mathsf{C}$ 称为**带点**的，
如果它具有零对象 $0\in\mathsf{C}$，
即同时是始对象、终对象的对象。
:::

::: definition
设 $\mathsf{C}$ 为带点 $\infty$-范畴。

- $\mathsf{C}$ 中的**三角**指图表
  \[
  \begin{tikzcd}
    X\ar[d]\ar[r] & Y\ar[d] \\
    0\ar[r] & Z\rlap{\ .}
  \end{tikzcd}
  \]

- $\mathsf{C}$ 中的**余纤维序列**
  指同时是推出图表的三角。
  此时，称 $Z$ 为映射 $X\to Y$ 的**同伦余纤维**。

- $\mathsf{C}$ 中的**纤维序列**
  指同时是拉回图表的三角。
  此时，称 $X$ 为映射 $Y\to Z$ 的**同伦纤维**。

:::

::: definition
**稳定 $\infty$-范畴**是指带点 $\infty$-范畴 $\mathsf{C}$，满足以下条件：

- $\mathsf{C}$ 中每个态射都有同伦余纤维、同伦纤维。

- $\mathsf{C}$ 中的三角是余纤维序列，当且仅当它是纤维序列。

:::

::: definition
设 $\mathsf{C}$ 是带点 $\infty$-范畴。
定义函子 $\Sigma\colon\mathsf{C}\to\mathsf{C}$ 和 $\Omega\colon\mathsf{C}\to\mathsf{C}$
如下：
\[
\Sigma X:=0\underset{X}{\sqcup}0,
\quad
\Omega X:=0\underset{X}{\times}0.
\]
:::

和在代数拓扑里一样，
这里 $\Sigma$ 和 $\Omega$ 构成一对伴随，因为对任意 $X,Y\in\mathsf{C}$，有
\[
\operatorname{Hom}_{\mathsf{C}}(\Sigma X,Y)\simeq
\{*\}\underset{\operatorname{Hom}_{\mathsf{C}}(X,Y)}{\times}\{*\}
\simeq\operatorname{Hom}_{\mathsf{C}}(X,\Omega Y).
\]

若 $\mathsf{C}$ 是稳定 $\infty$-范畴，
容易看出 $\Sigma$ 和 $\Omega$ 互为逆函子。此时记
\[
X[1]:=\Sigma X, \quad X[-1]:=\Omega X.
\]
对非负整数 $n$，记
\[
X[n]:=\Sigma^nX, \quad X[-n]:=\Omega^nX.
\]

::: theorem {@thm-7-s}
设 $\mathsf{C}$ 是带点 $\infty$-范畴。
则下列命题等价：

- $\mathsf{C}$ 稳定。

- $\mathsf{C}$ 带有推出，且 $\Sigma$ 是等价。

- $\mathsf{C}$ 带有拉回，且 $\Omega$ 是等价。

- $\mathsf{C}$ 带有推出和拉回，且 $\mathsf{C}$ 中任何推出图表都是拉回图表，反之亦然。

:::

见 [@HA, Proposition 1.1.3.4, Corollary 1.4.2.27]。

::: definition
设 $\mathsf{C},\mathsf{D}$ 为稳定 $\infty$-范畴。
函子 $f\colon\mathsf{C}\to\mathsf{D}$ 称为**正合函子**，
如果它保持零对象，并保持余纤维序列、纤维序列。
:::

## 稳定范畴的同伦范畴

这一节的目标是证明下面的定理。

::: theorem
设 $\mathsf{C}$ 是稳定 $\infty$-范畴。
则同伦范畴 $\operatorname{Ho}(\mathsf{C})$ 具有自然的[[三角范畴]]结构。
:::

::: proof
首先，我们证明 $\operatorname{Ho}(\mathsf{C})$ 是加性范畴。

- *$\operatorname{Ho}(\mathsf{C})$ 具有有限余积。*

  由 @thm-6-z，只要证明 $\mathsf{C}$ 中有余积，
  因为 $\operatorname{Ho}(\mathsf{C})$ 中的余积与之相同。
  由定义，$\mathsf{C}$ 有始对象。
  故只需证明对任意 $X,Y\in\mathsf{C}$，存在余积 $X\sqcup Y$。
  我们在 $\mathsf{C}$ 中作余纤维序列
  \[
  \begin{tikzcd}
    X[-1]\ar[r,"0"]\ar[d]\ar[dr,phantom,"\ulcorner" pos=.15,"\lrcorner" pos=.75] & Y\ar[d] \\
    0\ar[r] & Z \rlap{ .}
  \end{tikzcd}
  \]
  则 $Z$ 就是我们要的余积 $X\sqcup Y$，因为
  \[
  \begin{aligned}
    Z &\simeq \text{余纤维}(X[-1]\xrightarrow0Y) \\
    &\simeq \text{余纤维}(X[-1]\to0)\sqcup\text{余纤维}(0\to Y) \\
    &\simeq X\sqcup Y,
  \end{aligned}
  \]
  其中第二步是因为，取余纤维与取余极限交换
  （这一性质可以通过同伦余极限的定义来证明）。

- *$\operatorname{Ho}(\mathsf{C})$ 是加性范畴。*

  对任意 $X,Y\in\mathsf{C}$，有
  \[
  \begin{aligned}
    \operatorname{Hom}_{\mathsf{C}}(X[1],Y)
    &\simeq \operatorname{Hom}_{\mathsf{C}}(0,Y) \underset{\operatorname{Hom}_{\mathsf{C}}(X,Y)}{\times} \operatorname{Hom}_{\mathsf{C}}(0,Y) \\
    &\simeq \Omega\operatorname{Hom}_{\mathsf{C}}(X,Y).
  \end{aligned}
  \]
  因此，
  \[
  \pi_0\operatorname{Hom}_{\mathsf{C}}(X,Y)\simeq
  \pi_1\operatorname{Hom}_{\mathsf{C}}(X[-1],Y)\simeq
  \pi_2\operatorname{Hom}_{\mathsf{C}}(X[-2],Y)\simeq\cdots
  \]
  是 Abel 群。留给读者验证复合是双线性的。

- *对映射 $f\colon X\to Y$，怎么得到 $-f$？*

  从 $X$ 到 $Y$ 的映射可以看成一个图表
  \[
  \begin{tikzcd}
    X[-1]\ar[r]\ar[d] & 0\ar[d] \\
    0\ar[r] & Y\rlap{\ .}
  \end{tikzcd}
  \]
  如果交换两个 $0$ 的位置，映射就会反号。
  换言之，如果这个图表对应映射 $f$，
  则它的转置就对应映射 $-f$。
  这是因为映射空间上的群结构由下面的同构定义：
  \[
  \operatorname{Hom}_{\mathsf{C}}(X,Y)\simeq\{*\}\underset{\operatorname{Hom}_{\mathsf{C}}(X[-1],Y)}{\times}\{*\}
  \simeq\Omega\operatorname{Hom}_{\mathsf{C}}(X[-1],Y),
  \]
  其中交换两个 $\{*\}$ 的效果是将环路空间中的环路反向。

  特别地，当 $Y = X$ 且 $f = \mathbb{1}_X$ 时，
  上面的方块是推出–拉回，其转置给出 $X$ 的自同构 $-\mathbb{1}_X$。

接下来，我们定义 $\operatorname{Ho}(\mathsf{C})$ 上的三角范畴结构。

- *定义正合三角。*

  定义 $\operatorname{Ho}(\mathsf{C})$ 中的序列 $X\to Y\to Z\to X[1]$
  为正合三角，当且仅当它同构于一个可以提升为 $\mathsf{C}$ 中图表
  \[
  \begin{tikzcd}
    X\ar[r]\ar[d]\ar[dr,phantom,"\ulcorner" pos=.25,"\lrcorner" pos=.75] &
    Y\ar[r]\ar[d]\ar[dr,phantom,"\ulcorner" pos=.25,"\lrcorner" pos=.75] & 0\ar[d] \\
    0\ar[r] & Z\ar[r] & W
  \end{tikzcd}
  \]
  的三角。此时 $W$ 一定等价于 $X[1]$，
  因为外层的长方形也是推出–拉回图表。

- (TR 1)

  - *正合三角被同构保持。*

  - *对任何对象 $X$，有正合三角
    \[
    X\xrightarrow{1_X}X\to0\to X[1].
    \]*

  - *任何态射 $X\to Y$ 都能延伸为一个正合三角
    \[
    X\to Y\to Z\to X[1].
    \]*

  这些都是显然的。

- (TR 2)
  *如果
  \[
  X\xrightarrow{f}Y\xrightarrow{g}Z\xrightarrow{h}X[1]
  \]
  是正合三角，那么
  \[
  Y\xrightarrow{g}Z\xrightarrow{h}X[1]\xrightarrow{-f[1]}Y[1]
  \]
  也是正合三角。*

  为证之，在 $\mathsf{C}$ 中作图表
  \[
  \begin{tikzcd}
    X\ar[r]\ar[d]\ar[dr,phantom,"\ulcorner" pos=.25,"\lrcorner" pos=.75] &
    Y\ar[r]\ar[d]\ar[dr,phantom,"\ulcorner" pos=.25,"\lrcorner" pos=.75] & 0\ar[d] \\
    0\ar[r] &
    Z\ar[r]\ar[d]\ar[dr,phantom,"\ulcorner" pos=.25,"\lrcorner" pos=.75] &
    W\ar[d] \\
    & 0\ar[r] & V \rlap{ .}
  \end{tikzcd}
  \]
  两个大长方形都是推出–拉回图表，
  说明 $W\simeq X[1]$，$V\simeq Y[1]$。
  图表中的映射 $W\to V$ 就是 $f[1]$，
  因为它由图表之间的映射
  \[
  \begin{tikzcd}
    X\ar[r]\ar[d] & 0 \\ 0
  \end{tikzcd}
  \quad\longrightarrow\quad
  \begin{tikzcd}
    Y\ar[r]\ar[d] & 0 \\ 0
  \end{tikzcd}
  \]
  诱导。然而，为了和正合三角的定义一致，
  我们需要将这个图表做转置，
  故正合三角中的映射 $W\to V$ 是 $-f[1]$。

- (TR 3)
  *给定实线图表*
  \[
  \begin{tikzcd}
    X\ar[r]\ar[d,"f"'] & Y\ar[r]\ar[d] & Z\ar[r]\ar[d,dashed] & X[1]\ar[d,"f\lbrack1\rbrack"] \\
    X'\ar[r] & Y'\ar[r] & Z'\ar[r] & X'[1] \rlap{ ,}
  \end{tikzcd}
  \]
  *如果两行都是正合三角，则存在虚线箭头，使整个图表交换。*

  这是因为 $\mathsf{C}$ 中取余纤维是函子性的。
  （在三角范畴中，这个构造变得不函子性。这是三角范畴的一个缺点，
  说明稳定 $\infty$-范畴是更自然的对象。）

- (TR 4)
  *八面体公理。*

  证明不难，我们略过。

我们这就证明了 $\operatorname{Ho}(\mathsf{C})$ 是三角范畴。
:::

## 拓扑谱与稳定同伦论

下面，我们简要回顾拓扑谱的理论，也就是经典的稳定同伦论。
从拓扑空间到拓扑谱的过程叫做稳定化，
下一节将把这一过程推广到一般的 $\infty$-范畴，而得到稳定 $\infty$-范畴。

经典的稳定同伦论考虑的是将[[纬悬]]函子 $\Sigma$ 作用于一个空间上足够多次后，
逐渐变得稳定的性质。
例如，带点拓扑空间 $X$ 的**稳定同伦群**定义为
\[
\pi_n^{\mathrm s}(X):=
\operatornamewithlimits{colim}_{k\to\infty} \pi_{n+k}(\Sigma^kX),
\]
其中 $n\in\mathbb{Z}$。
例如，由 [[Freudenthal 纬悬定理]]，有
\[
\pi_n^{\mathrm s}(S^0)\simeq\pi_{2n+2}(S^{n+2})
\simeq\pi_{2n+3}(S^{n+3})\simeq\cdots.
\]
拓扑谱的作用就是记住这些稳定同伦意义下的信息。

::: definition
**拓扑谱** $E$ 由以下信息组成。

- 一列带点拓扑空间
  \[
  E_0,E_1,E_2,\dotsc.
  \]

- 对每个 $n\geq0$，有映射
  \[
  \sigma_n\colon\Sigma E_n\to E_{n+1}.
  \]

拓扑谱 $E,F$ 之间的**映射**是一列带点拓扑空间的映射
\[
f_n\colon E_n\to F_n \quad (n \geq 0),
\]
使得对任意 $n$，有 $\sigma_n\circ\Sigma f_n=f_{n+1}\circ\sigma_n$。
:::

拓扑谱的范畴记为 $\mathsf{Sp}$。

::: example
设 $X$ 为带点拓扑空间。
其**纬悬谱** $\Sigma^\infty X$ 定义为
\[
(\Sigma^\infty X)_n:=\Sigma^nX,
\]
其结构映射为 $\sigma_n:=\mathbb{1}_{\Sigma^{n+1}X}$。
这里，记号 $\Sigma^\infty$
是为了说明它记录了 $\Sigma^nX$ 当 $n\to\infty$ 时的性质。

特别地，**球谱** $\mathbb{S}$ 定义为
\[
\mathbb{S}:=\Sigma^\infty S^0,
\]
从而 $\mathbb{S}_n\simeq S^n$。
:::

::: definition
拓扑谱 $E$ 的**稳定同伦群**定义为
\[
\pi_n(E):=
\operatornamewithlimits{colim}_{k\to\infty} \pi_{n+k}(E_k),
\]
其中 $n\in\mathbb{Z}$。
:::

例如，对带点拓扑空间 $X$，有
\[
\pi_n(\Sigma^\infty X)\simeq\pi_n^{\mathrm s}(X).
\]

注意到纬悬函子 $\Sigma$ 和平移函子 $[1]$（即向左移动一位）
对稳定同伦群的作用效果是相同的。
事实上，在定义了 $\mathsf{Sp}$ 上的同伦论后，
我们就能证明这两个函子在同伦意义下是等价的。

::: definition
拓扑谱 $E$ 称为 **$\Omega$-谱**，
如果对任何 $n \geq 0$，由 $\sigma_n$ 诱导的映射
\[
E_n\to\Omega E_{n+1}
\]
都是弱同伦等价。
:::

此时，记 $\Omega^\infty E:=E_0$。
则对每个 $n\geq0$，有 $\pi_n(E)\simeq\pi_n(E_0)$。

::: theorem
范畴 $\mathsf{Sp}$ 具有**稳定模型结构**，其中

- $\mathsf{W}=\{$诱导所有稳定同伦群同构的映射$\}$。

- $\mathsf{Cof}=\{$逐个空间的余纤维化$\}$。

- 纤维性对象是所有 $\Omega$-谱。

并且，伴随函子
\[
\begin{tikzcd}
  \mathsf{Sp}
  \ar[r,bend left,"\Sigma"]
  \ar[r,phantom,"\bot"] &
  \mathsf{Sp}
  \ar[l,bend left,"\Omega"]
\end{tikzcd}
\]
是 Quillen 等价，其导出函子同构于平移函子：
\[
\mathbb{L}\Sigma\simeq[1], \quad
\mathbb{R}\Omega\simeq[-1],
\]
它们是 $\operatorname{Ho} (\mathsf{Sp}) \to \operatorname{Ho} (\mathsf{Sp})$ 的函子。
:::

::: corollary
由上述模型结构定义的 $\infty$-范畴，
即拓扑谱的 $\infty$-范畴，是稳定 $\infty$-范畴。
:::

特别地，同伦范畴 $\operatorname{Ho}(\mathsf{Sp})$
带有三角范畴的结构。

拓扑谱还可以从另一个观点来看待，
也就是将它们看成广义上同调理论的表出对象。

::: definition
一个**广义上同调理论**是一族函子
\[
\widetilde E^n\colon\mathsf{Top}^{\mathrm{op}}_*\to\mathsf{Ab} \quad (n \in \mathbb{Z}),
\]
其中 $\mathsf{Top}_*$ 是带点拓扑空间的范畴，
并满足以下公理：

- （同伦性）若 $f\colon X\to Y$ 是弱同伦等价，
  则 $\widetilde E^n(f)$ 是同构。

- （正合性）每个同伦余纤维列 $X\to Y\to Z$ 都诱导正合列
  \[
  \widetilde E^n(Z)\to\widetilde E^n(Y)\to\widetilde E^n(X).
  \]

- （纬悬）有自然同构
  \[
  \widetilde E^{n+1}(\Sigma X)\simeq\widetilde E^n(X).
  \]

- （加性）$\widetilde E^n$ 将余积映到积：
  \[
  \textstyle \widetilde E^n\bigl(\bigvee_\alpha X_\alpha\bigr)\simeq
  \prod_\alpha\widetilde E^n(X_\alpha).
  \]

:::

例如，以任何 Abel 群为系数的约化奇异上同调理论都是广义上同调理论。
另外，[[拓扑 $K$ 理论]]也是广义上同调理论。

::: theorem [Brown]
每个广义上同调理论 $\widetilde{E}^\bullet$
都能被一个拓扑谱 $E$ 表出。也就是说，对任何空间 $X$，有
\[
\widetilde{E}^n(X)\simeq\operatorname{Hom}_{\operatorname{Ho}(\mathsf{Sp})}(\Sigma^\infty X[-n],E).
\]
:::

特别地，Abel 群系数的奇异上同调由相应的 [[Eilenberg–Mac Lane 谱]]表出。

因此，拓扑谱的范畴，也就是拓扑空间范畴的“稳定化”，
在同伦意义下等价于拓扑空间的所有广义上同调理论构成的范畴。

## 稳定化

设 $\mathsf{C}$ 是具有有限极限的 $\infty$-范畴。
在本小节中，我们构造 $\mathsf{C}$ 中**谱对象**的稳定 $\infty$-范畴
$\operatorname{Sp}(\mathsf{C})$。
它具有以下万有性质：它带有函子
\[
\Omega^\infty\colon\operatorname{Sp}(\mathsf{C})\to\mathsf{C},
\]
并且，对任何稳定 $\infty$-范畴 $\mathsf{D}$，
任何保持有限极限的函子 $\mathsf{D}\to\mathsf{C}$
都以唯一的方式[[穿过]]函子 $\Omega^\infty$。

在介绍一般的构造之前，我们先引入另一种理解拓扑谱的观点。

设 $E$ 是 $\Omega$-谱，
记 $\mathsf{Top}_*^{\mathrm{fin}}$ 为所有同伦等价于有限 CW 复形的带点拓扑空间的范畴。
我们可以定义一个函子
\[
F\colon\mathsf{Top}_*^{\mathrm{fin}}\to\mathsf{Top}_*,
\]
它将每个球面 $S^n$ 映射到空间 $E_n$。
注意到，该性质表明 $F$ 将推出方块映到拉回方块：
\[
\begin{tikzcd}
  S^n\ar[r]\ar[d]\ar[dr,phantom,pos=.75,"\lrcorner"] & 0\ar[d] \\
  0\ar[r] & S^{n+1}
\end{tikzcd}
\quad\overset{F}{\longmapsto}\quad
\begin{tikzcd}
  E_n\ar[r]\ar[d]\ar[dr,phantom,pos=.25,"\ulcorner"] & 0\ar[d] \\
  0\ar[r] & E_{n+1}\rlap{\ .}
\end{tikzcd}
\]
如果我们加强这一性质，要求 $F$ 将任何推出方块映到拉回方块，
则 $F$ 在同伦等价的意义下就能被完全确定，
具体的构造留给读者。
这里，我们用到了空间 $E_n$ 可以任意多次解环，
这是由于 $E$ 是 $\Omega$-谱的假设。

函子 $F$ 将推出方块映到拉回方块，这一性质类似于同调理论中的切除性质。
从这个角度说，谱可以看作是某种“取值于拓扑空间的同调理论”。

在一般情形下，我们即将定义 $\mathsf{C}$ 的**谱对象**为
拓扑空间的“取值于 $\mathsf{C}$ 中的同调理论”。

::: definition
设 $\mathsf{C}, \mathsf{D}$ 为 $\infty$-范畴。

- 假设 $\mathsf{C}$ 具有推出。
  称 $\mathsf{C}$ 到 $\mathsf{D}$ 的函子 $F\colon\mathsf{C}\to\mathsf{D}$
  为**切除函子**（excisive functor），
  如果它将推出方块映到拉回方块。

- 假设 $\mathsf{C}$ 具有零对象。
  称 $\mathsf{C}$ 到 $\mathsf{D}$ 的函子 $F\colon\mathsf{C}\to\mathsf{D}$
  为**约化函子**（reduced functor），
  如果它保持零对象。

记
\[
\operatorname{Fun}_*(\mathsf{C},\mathsf{D})\quad\text{和}\quad
\operatorname{Exc}_*(\mathsf{C},\mathsf{D})
\]
分别为 $\mathsf{C}$ 到 $\mathsf{D}$ 的约化函子、约化切除函子的范畴，
它们都是 $\operatorname{Fun}(\mathsf{C},\mathsf{D})$ 的全子范畴。
:::

我们回忆空间范畴
$\mathsf{S}=\mathfrak{N}(\mathsf{Kan})$，
即 Kan 复形的 $\infty$-范畴。

::: definition
**有限空间**的范畴 $\mathsf{S}^{\mathrm{fin}}$
定义为 $\mathsf{S}$ 的全子范畴，
其对象为几何实现等价于有限 CW 复形的 Kan 复形。令
\[
\mathsf{S}_*^{\mathrm{fin}}:=(\mathsf{S}^{\mathrm{fin}})_{\{*\}/}
\]
为带点有限空间的范畴。
:::

::: definition
设 $\mathsf{C}$ 为 $\infty$-范畴。
$\mathsf{C}$ 中**谱对象**的范畴定义为
\[
\operatorname{Sp}(\mathsf{C}):=
\operatorname{Exc}_*(\mathsf{S}_*^{\mathrm{fin}},\mathsf{C}).
\]
定义函子
\[
\Omega^\infty\colon\operatorname{Sp}(\mathsf{C})\to\mathsf{C},
\]
它将谱对象映到其在 $S^0\in\mathsf{S}_*^{\mathrm{fin}}$ 处的值。
:::

例如，上述讨论说明，我们应该有
\[
\mathsf{Sp}\simeq\operatorname{Sp}(\mathsf{S}_*)\simeq\operatorname{Sp}(\mathsf{Top}_*).
\]

::: remark {@rmk-7-o}
事实上，约化切除函子 $E\colon\mathsf{S}_*^{\mathrm{fin}}\to\mathsf{C}$
由空间 $E_n:=E(S^n)$ 和等价
$E_n\mathrel{\rlap{\raisebox{.8ex}{$\mkern2mu\sim$}}{\to}}\Omega E_{n+1}$ 确定。
由此可以说明 $\operatorname{Sp}(\mathsf{C})$ 等价于同伦极限
\[
\operatorname{Sp}(\mathsf{C})\simeq\lim\bigl(
  \cdots\to\mathsf{C}\xrightarrow{\Omega}\mathsf{C}\xrightarrow{\Omega}\mathsf{C}
\bigr).
\]
:::

::: theorem
设 $\mathsf{C}$，$\mathsf{D}$ 为 $\infty$-范畴。

- 若 $\mathsf{C}$ 具有有限极限，
  则 $\operatorname{Sp}(\mathsf{C})$ 是稳定 $\infty$-范畴。

- 更一般地，若 $\mathsf{C}$ 具有有限余极限，
  $\mathsf{D}$ 具有有限极限，
  则 $\operatorname{Exc}_*(\mathsf{C},\mathsf{D})$是稳定 $\infty$-范畴。

:::

::: proof
只需证明第二部分。
函子 $\Sigma_{\mathsf{C}}$ 和 $\Omega_{\mathsf{D}}$
诱导了 $\operatorname{Exc}_*(\mathsf{C},\mathsf{D})$ 上相应的函子。
（余）极限的一个性质是，
$\operatorname{Fun}(\mathsf{C},\mathsf{D})$ 中的（余）极限
能在 $\mathsf{D}$ 中直接计算，只要 $\mathsf{D}$ 中具有这些（余）极限。
因此，$\operatorname{Exc}_*(\mathsf{C},\mathsf{D})$ 自身的 $\Omega$ 函子
与 $\Omega_{\mathsf{D}}$ 诱导的函子相同。
设 $F\in\operatorname{Exc}_*(\mathsf{C},\mathsf{D})$。
则对任意 $X\in\mathsf{C}$，由拉回方块
\[
\begin{tikzcd}
  FX \ar[r] \ar[d] \ar[dr,phantom,pos=.25,"\ulcorner"] & 0\ar[d] \\
  0\ar[r] & F\Sigma_{\mathsf{C}}X \rlap{\ ,}
\end{tikzcd}
\]
这说明有等价
\[
FX \simeq \Omega_{\mathsf{D}}F\Sigma_{\mathsf{C}}X.
\]
因此，$\Sigma_{\mathsf{C}}$ 是 $\Omega_{\mathsf{D}}$ 的逆。
由 @thm-7-s，$\operatorname{Exc}_*(\mathsf{C},\mathsf{D})$
是稳定 $\infty$-范畴。
:::

::: proposition
设 $\mathsf{C}$ 是具有有限极限的 $\infty$-范畴。
则 $\mathsf{C}$ 是稳定 $\infty$-范畴，当且仅当函子
$\Omega^\infty\colon\operatorname{Sp}(\mathsf{C})\to\mathsf{C}$
是等价。
:::

::: proof
略。
:::

::: proposition
设 $\mathsf{C}$，$\mathsf{D}$ 为 $\infty$-范畴。

- 若 $\mathsf{C}$ 是稳定 $\infty$-范畴，$\mathsf{D}$ 具有有限极限，
  则函子 $\Omega^\infty\colon\operatorname{Sp}(\mathsf{D})\to\mathsf{D}$
  诱导了等价
  \[
  \operatorname{Fun}^{\mathrm{l.ex.}}(\mathsf{C},\operatorname{Sp}(\mathsf{D}))
  \simeq\operatorname{Fun}^{\mathrm{l.ex.}}(\mathsf{C},\mathsf{D}),
  \]
  其中 $\operatorname{Fun}^{\mathrm{l.ex.}}$ 为**左正合函子**的范畴，
  即保持有限极限的函子构成的范畴。

- 更一般地，若 $\mathsf{C}$ 具有零对象、有限极限，
  $\mathsf{D}$ 具有有限极限，则函子
  $\Omega^\infty\colon\operatorname{Sp}(\mathsf{D})\to\mathsf{D}$
  诱导了等价
  \[
  \operatorname{Exc}_*(\mathsf{C},\operatorname{Sp}(\mathsf{D}))
  \simeq\operatorname{Exc}_*(\mathsf{C},\mathsf{D}).
  \]

:::

::: proof
只需证明第二部分。
因为 $\operatorname{Exc}_*(\mathsf{C},\mathsf{D})$ 是稳定 $\infty$-范畴，所以
\[
\begin{aligned}
  \operatorname{Exc}_*(\mathsf{C},\mathsf{D})
  &\simeq \operatorname{Sp}\bigl(\operatorname{Exc}_*(\mathsf{C},\mathsf{D})\bigr) \\
  &\simeq \operatorname{Exc}_*\bigl(\mathsf{S}^{\mathrm{fin}}_*,\ \operatorname{Exc}_*(\mathsf{C},\mathsf{D})\bigr) \\
  &\simeq \operatorname{Exc}_*\bigl(\mathsf{C},\ \operatorname{Exc}_*(\mathsf{S}^{\mathrm{fin}}_*,\mathsf{D})\bigr) \\
  &\simeq \operatorname{Exc}_*\bigl(\mathsf{C},\ \operatorname{Sp}(\mathsf{D})\bigr).
\end{aligned}
\]
:::

这就证明了下面的定理。

::: theorem
有一对伴随函子
\[
\begin{tikzcd}
  \mathsf{Cat}_{\infty}^{\mathrm{stable}}
  \ar[r,bend left,start anchor=north east,end anchor=north west,"i"]
  \ar[r,phantom,"\bot"] &
  \mathsf{Cat}_{\infty}^{\mathrm{fin.lim.}}\rlap{\ ,}
  \ar[l,bend left,start anchor=south west,end anchor=south east,"\operatorname{Sp}"]
\end{tikzcd}
\]
其中

- $\mathsf{Cat}_{\infty}^{\mathrm{stable}}$
  是 $\mathsf{Cat}_\infty$ 中由稳定 $\infty$-范畴和正合函子构成的子范畴。

- $\mathsf{Cat}_{\infty}^{\mathrm{fin.lim.}}$
  是 $\mathsf{Cat}_\infty$ 中由具有有限极限的 $\infty$-范畴和左正合函子构成的范畴。

- $i$ 是含入函子，
  $\operatorname{Sp}$ 是上面构造的函子，称为**稳定化**。

:::

事实上，这可以看成 $(\infty,2)$-范畴间的伴随函子，
因为我们证明了其中态射空间作为 $(\infty,1)$-范畴等价，
而不只是作为空间等价。
