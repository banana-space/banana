---
title: 常用的换元积分，子流形上的积分
---

## 回顾：换元积分公式

上次课，我们证明了换元积分公式：$\Omega_1$ 和 $\Omega_2$ 是 $\mathbb{R}^n$ 中开集，
我们用 $dx$ 和 $dy$ 分别表示开集 $\Omega_1$ 和 $\Omega_2$ 上的Lebesgue测度。映射
\[
\Phi\colon\Omega_1\rightarrow \Omega_2.
\]
那么，对任意的 $\Omega_2$ 上对 $dy$ 可积的函数 $f$，我们有
\[
\int_{\Omega_2}f(y)dy = \int_{\Omega_1} \bigl(f\circ \Phi\bigr)(x)|{\mathbf J}_\Phi (x)|dx.
\]

::: example*
我们要熟记如下两个最常用的换元积分公式，极坐标换元和球坐标换元：

- 1\) 我们现在考虑 $\Omega_1= (0,\infty)\times (0,2\pi)$ 和
  $\Omega_2=\mathbb{R}^2-\{(x,0)\mid x\geqslant 0\}$。
  注意到，$\Omega_2$ 和全空间 $\mathbb{R}^2$ 只相差一个零测集，
  所以在 $\mathbb{R}^2$ 上的积分可以在 $\Omega_2$ 上来计算。我们考虑极坐标变换：
  \[
  \Phi\colon\Omega_1= (0,\infty)\times (0,2\pi)\rightarrow \Omega_2,\ \ (r,\theta)\mapsto (r\cos(\theta),r\sin(\theta)).
  \]

  ![](MathAnalysis-N0201.svg)

  我们之前已经在作业中计算过这个坐标变换的行列式，这给出
  \[
  \iint_{\mathbb{R}^2}f(x,y)dxdy=\iint_{\Omega_1}f(r\cos(\vartheta),r\sin(\vartheta))rdrd\vartheta.
  \]
  我们可以看到，$\Omega_1$ 具有很好的乘积结构，所以我们可能可以利用Fubini公式来计算某些积分。

- 2\) 令 $\Omega_1= (0,\infty)\times (-\pi,\pi) \times(-\frac{\pi}{2},\frac{\pi}{2})$，
  $\Omega_2=\mathbb{R}^3-\bigl\{(x,y,z)\bigm| x=0,y\geqslant 0,z\in \mathbb{R}\bigr\}$。
  我们考虑球坐标变换[^1]：
  \[
  \Phi\colon\Omega_1\rightarrow \Omega_2,\ \ (r,\vartheta,\varphi)\mapsto (r\cos(\varphi)\cos(\vartheta),r\cos(\varphi)\sin(\vartheta),r\sin(\varphi)).
  \]

  ![](MathAnalysis_N1605.jpg){width=400}

  我们有
  \[
  \begin{aligned}&\ \ \ \iiint_{\mathbb{R}^3}f(x,y,z)dxdydz
  \\&=\iiint_{\Omega_1}f(r\cos(\varphi)\cos(\vartheta),r\cos(\varphi)\sin(\vartheta),r\sin(\varphi))r^2\cos(\varphi)drd\vartheta.
  \end{aligned}
  \]

:::

我们给出换元积分公式的两个经典应用：

::: example* [Gauss积分的计算]
我们要重新计算 $I=\displaystyle \int_{\mathbb{R}}e^{-x^2}dx$。为此，根据Fubini公式，我们考虑
\[
\begin{aligned}
I^2&=\left(\int_{\mathbb{R}}e^{-x^2}dx\right)\left(\int_{\mathbb{R}}e^{-y^2}dy\right)\\
&=\iint_{\mathbb{R}^2}e^{-(x^2+y^2)}dxdy\\
&=\int_0^\infty\int_0^{2\pi}e^{-r^2}r drd\vartheta\\
&=2\pi \int_0^\infty e^{-r^2}rdr=\pi.
\end{aligned}
\]
所以，$I=\sqrt{\pi}$。
:::

::: example* [行列式的几何含义]
很多的线性代数课本上来就声明行列式表示的空间中平行多面体的体积，这实际上是捕风捉影的叙述。
只有定义了什么是体积，才能作出这样的论断，我们现在给出这个说法的解释。
给定线性映射（我们直接用矩阵来表示）
\[
A\colon\mathbb{R}^n \rightarrow \mathbb{R}^n,
\]
首先考虑由顶点在原点，以 $e_1,e_2,\cdots,e_n$ 作为边的平行多面体（正方体）$\Omega$，它的测度为 $1$。
另外，$A(\Omega)$ 是顶点在原点，以 $A(e_1),A(e_2),\cdots,A(e_n)$ 作为边的平行多面体，
根据换元积分公式，
\[
\begin{aligned}
m\bigl(\Omega\bigr)&=\int_{\Omega}1 dx=\int_{A(\Omega)}1 |\mathbf J_{A^{-1}}|dy\\
&=|\operatorname{det} A|^{-1}\int_{A(\Omega)}1 dy=|\operatorname{det} A|^{-1}m\bigl(A(\Omega)\bigr).
\end{aligned}
\]
所以，
\[
m\bigl(A(\Omega)\bigr)=|\operatorname{det} A|m\bigl(\Omega\bigr).
\]

![](MathAnalysis_N1606.svg)

另外，我们有
\[
\begin{cases}
A(e_1)&=(A_{11}, A_{12},\cdots,A_{1n}),\\
A(e_2)&=(A_{21}, A_{22},\cdots,A_{2n}),\\
\ \ \ \ \ \cdots \ & \ \ \ \ \cdots \ \ \cdots \\
A(e_n)&=(A_{n1}, A_{n2}, \cdots, A_{nn}).
\end{cases}
\]
这就是我们平时所说的以 $(A_{i1}, A_{i2},\cdots,A_{in})$ 为顶点的平行多面体的体积，
其中 $i\leqslant n$。
:::

::: remark*
我们所寻求的高维的积分理论一定要具备两个基本的工具：第一，Fubini定理，
它可以把高维积分（乘积空间上）转化为低维的来计算；第二，换元积分公式，
它可以把一个不规则区域上的积分转化为乘积型区域上的积分，从而用Fubini来计算。
我们现在建立的积分理论满足这两点，传统的Riemann积分理论也要建立这两个公式，所以，
从计算积分的观点来看，我们的所得到的理论和Riemann积分实际上差别不大。
:::

## 子流形上的积分（第一型曲线／曲面积分）

我们从测度论的观点来研究传统的曲面积分，也就是在子流形上进行积分。
我们从最简单的子流形开始研究这个问题（即 $\mathbb{R}^n$ 中的一个线性子空间或者仿射子空间）。
我们固定一个背景空间 $\mathbb{R}^n$，
在 $\mathbb{R}^n$ 上我们将使用Lebesgue测度 $m=dy_1\cdots dy_n$。
我们用 $E$ 表示 $\mathbb{R}^n$ 的一个 $d$-维仿射子空间 $E\subset \mathbb{R}^n$。
最基本的问题是：如何测量 $E$ 上集合的体积（面积），即如何在 $E$ 上定义测度？对于这个测度，
我们还需要它和**直观**是一致的（和Euclid几何的直观相符）。为此，我们研究一个更简单明了的例子：

::: example*
考虑映射
\[
\Phi\colon\mathbb{R}\rightarrow \mathbb{R}^2, \ \ x_1\mapsto (x_1,x_1).
\]
它的像就是 $\mathbb{R}^2$ 中的直线 $45^\circ$ 的直线 $E$。

我们强调一点，$E\subset \mathbb{R}^2$ 是我们关心的几何对象，它还可以通过另外的方式来参数化，比如
\[
\Psi\colon\mathbb{R}\rightarrow \mathbb{R}^2, \ \ x_2\mapsto (2x_2,2x_2).
\]
这个映射的像也是 $E$。

我们考虑 $E$ 上的 $(0,0)$ 点和 $(1,1)$ 点之间的一段线段 $L$，
我们**直观**上希望它的长度是 $\sqrt{2}$。

然而，根据参数化 $\Phi$ 或者 $\Psi$，我们有若干种不同的方式给出 $E$ 上的测度：

- 1\) 我们用 $\Phi_* m$ 作为 $E$ 上的测度，即我们定义 $L$ 的测度为
  \[
  m\left(\Phi^{-1}(L)\right)=m([0,1])=1.
  \]
  此时，用 $x_1$ 表示参数，$L$ 上的测度 $\Phi_* m_1$ 为 $dx_1$。
  我们希望这条直线上的测度是 $m_1=\sqrt{2}dx_1$。

- 2\) 我们用 $\Psi_* m_1$ 作为 $E$ 上的测度，即我们定义 $L$ 的测度为
  \[
  m\left(\Phi^{-1}(L)\right)=m([0,\frac{1}{2}])=\frac{1}{2}.
  \]
  此时，用 $x_2$ 表示参数，$L$ 上的测度 $\Phi_* m$ 为 $\frac{1}{2}dx_2$。
  我们希望这条直线上的测度是 $m_2=2\sqrt{2}dx_1$。

我们希望说明 $m_1$ 或者 $m_2$
是我们在不同的参数化下同一个测度的不同表示而已（它们都是相对于参数化的一个带有密度的测度）！
:::

仿射子空间 $E$ 上的测度，我们也有类似的困境。我们取仿射变换（一次函数）来参数化我们的仿射子流形：
\[
\Phi\colon\mathbb{R}^d\rightarrow E\subset \mathbb{R}^n,  \ \ x=(x_1,\cdots,x_d)\mapsto J\cdot x + y_0
\]
其中，$y_0\in \mathbb{R}^n$，
$J$ 是 $n\times d$ 的矩阵并且 ${\rm rank}(J)=d$（$J$ 为映射 $\Phi$ 的Jacobi矩阵）。
我们强调在 $\mathbb{R}^d$ 和 $\mathbb{R}^n$ 上我们选取了坐标 $\{x_1,\cdots,x_d\}$ 和
$\{y_1,\cdots,y_n\}$
并且假定了这两个空间上有和这两个坐标系相对应的标准的内积结构（选定了标准正交基）。

为了定义 $E$ 上的测度，
最干脆（但是错误）的做法是用 $\mathbb{R}^d$ 上的Lebesgue测度在 $\Phi$ 下的像，即 $\Phi_* m_p$，
作为 $E$ 上的测度，前面的例子表明，这个不符合直观。我们可以用 $J$ 自身来修正这一点：

::: definition [Gram矩阵]
我们定义一个 $d\times d$ 的矩阵
\[
G = {}^tJ \cdot J.
\]
我们把它称作是参数化 $\Phi$ 的**Gram 矩阵**。我们定义 $E$ 上的测度 $m_E$ 为：
\[
m_E= |{\rm det}(G)|^\frac{1}{2}\cdot \Phi_* m_p.
\]
换而言之，对任意的 $A\subset \mathcal{B}(E)$，我们有
\[
m_E(A) = |{\rm det}(G)|^\frac{1}{2}\cdot m_p\bigl(\Phi^{-1}(A)\bigr).
\]
:::

我们用之前例子中的映射
\[
\Phi\colon\mathbb{R}\rightarrow \mathbb{R}^2, \ \ x_1\mapsto (x_1,x_1).
\]
此时，$J=(1,1)$，$G= 2$，所以，相应的测度为 $\sqrt{2}dx_1$。
如果我们换成
\[
\Psi\colon\mathbb{R}\rightarrow \mathbb{R}^2, \ \ x_2\mapsto (2x_2,x_2).
\]
此时，$J=(2,2)$，$G= 8$，所以，相应的测度为 $\sqrt{8}dx_2=2\sqrt{2}dx_2$。

按照我们在例子中的讨论，这两个测度实际上是同一个，也恰好是我们直观上想要找的测度。

::: lemma
$E$ 上的测度 $m_E$ 不依赖于仿射线性化 $\Phi$ 的选取。
:::

::: proof
我们给两个仿射参数化（忘掉平移部分）：
\[
\begin{aligned}
&\Phi\colon\mathbb{R}^d\rightarrow E\subset \mathbb{R}^n,  \ \ x \mapsto J_\Phi \cdot x+y_1 \\
&\Psi\colon\mathbb{R}^d\rightarrow E\subset \mathbb{R}^n,  \ \ z \mapsto J_\Psi \cdot z+y_2.
\end{aligned}
\]
此时，存在一个同构的仿射变换
\[
L\colon\mathbb{R}^d\rightarrow \mathbb{R}^d, \ \ z\mapsto J_L\cdot z+x_1,
\]
使得 $\Psi=\Phi\circ L$，其中 $J_L$ 是 $d\times d$ 的可逆矩阵。我们自然有（比如求微分）
\[
J_\Psi =J_\Phi \cdot J_L.
\]
所以，
\[
\begin{aligned}
{\rm det} \bigl(G_\Psi\bigr) &= {\rm det}\Bigl({}^t\bigl(J_\Psi\bigr)\cdot J_\Psi\Bigr)\\
&={\rm det}\Bigl({}^t\bigl(J_\Phi \cdot J_L\bigr)\cdot J_\Phi \cdot J_L\Bigr)\\
&=\big|{\rm det}J_L\big|^2{\rm det}\bigl(G_\Phi\bigr).
\end{aligned}
\]
从而，对于任意的 $A\in E$，根据在 $\mathbb{R}^d$ 上的换元积分公式，我们有
\[
\begin{aligned}
 |{\rm det}(G_\Psi)|^\frac{1}{2}\Psi_*m_p(A)&= |{\rm det}(G_\Phi)|^\frac{1}{2}\big|{\rm det}J_L\big|m_p\Bigl(L^{-1}\bigl(\Phi^{-1}(A)\bigr)\Bigr)\\
&=|{\rm det}(G_\Phi)|^\frac{1}{2}\big|{\rm det}J_L\big|\big|{\rm det}J_{L^{-1}}\big|m_p\bigl(\Phi^{-1}(A)\bigr)\\
&=|{\rm det}(G_\Phi)|^\frac{1}{2}m_p\bigl(\Phi^{-1}(A)\bigr)\\
&= |{\rm det}(G_\Phi)|^\frac{1}{2}\Phi_*m_p(A).
\end{aligned}
\]
这说明 $m_E$ 的定义不依赖于仿射参数化的选取。
:::

我们给出两个例子来说明我们的构造和我们的几何直观是相符的：

::: example*
这两个例子都是关于超平面的（余维数是 $1$）：

- 1\) 假定 $E\subset \mathbb{R}^n$，$\operatorname{dim} E=n-1$，
  令 $\nu$ 是 $E$ 上的单位法向量（场）（与 $E$ 在每一点处的切空间垂直），$A\subset E$ 是Borel集。
  我们定义以 $A$ 为底高为 $h$ 的柱体 $\widetilde{A}_h$ 为：
  \[
  \widetilde{A}_h = \bigl\{x+t\cdot \nu\bigm| x\in A, t\in[0,h]\bigr\}.
  \]

  ![](MathAnalysis_N1701.svg)

  我们证明
  \[
  m_n(\widetilde{A})=m_E(A)\times h.
  \]
  根据Lebesgue测度的旋转不变性以及测度 $m_E$ 是参数不变的，
  我们可以在 $E$ 的仿射参数上复合一个 $\mathbb{R}^n$ 中的正交变换（不改变Gram矩阵的行列式），
  从而不妨假设
  \[
  E=\{y_n=0\}
  \]
  并且
  \[
  \Phi\colon\mathbb{R}^{n-1}\rightarrow \mathbb{R}^n, \ \ (x_1,\cdots,x_{n-1})\mapsto (x_1,\cdots,x_{n-1},0).
  \]
  这时，命题显然成立（乘积测度的定义）。

- 2\) 我们将 $E$ 实现为函数的图像：给定线性函数
  \[
  f\colon\mathbb{R}^{n-1}\rightarrow \mathbb{R},
  \]
  它的图像
  $\Gamma_f=\bigl\{(x,f(x))\in \mathbb{R}^{n-1}\times \mathbb{R}\bigm| x\in \mathbb{R}^{n-1}\bigr\}$
  为 $\mathbb{R}^n$ 中的超平面。由于 $f$ 是线性的，所以我们有
  \[
  f(x)=f_1x_1+\cdots+f_{n-1} x_{n-1}+a, \ \ f_i\in \mathbb{R}, a\in \mathbb{R}, i=1,\cdots,n-1.
  \]
  从而，$\nabla f=(f_1,\cdots, f_{n-1})$。子流形 $E=\Gamma_f$ 的（共有两个）单位法向量（场）为
  \[
  \begin{aligned}
  \nu&=\frac{1}{(1+|\nabla f|^2)^\frac{1}{2}}(-\nabla f,1)\\
  &=\frac{(-f_1,\cdots,-f_{n-1},1)}{(1+|f_1|^2+\cdots+|f_{n-1}|^2)^\frac{1}{2}}.
  \end{aligned}
  \]
  为了给出 $m_E$，我们现在找出 $E$ 的参数化：
  \[
  \Phi\colon \mathbb{R}^{n-1}\rightarrow  \mathbb{R}^n, \ \ x\mapsto \Phi(x)=(x,f(x)).
  \]
  它所对应的 $J=(1,f_1,f_2,\cdots,f_{n-1})=(1,\nabla f)$，所以
  \[
  {\rm det}\Bigl({}^t J\cdot J_\Phi\Bigr)=1+|\nabla f|^2.
  \]
  从而，相应的测度为
  \[
  m_E=\sqrt{1+|\nabla f|^2} dx_1\cdots dx_{n-1}.
  \]
  所以，如果你要在 $E$ 上积分一个函数 $F\colon E\rightarrow \mathbb{C}$，
  我们先把 $F$ 写成复合的形式：
  \[
  F=F(x,f(x)), \ \  x\in \mathbb{R}^{n-1}.
  \]
  从而，
  \[
  \int_{E} F dm_E=\int_{\mathbb{R}^{n-1}}F(x,f(x))\sqrt{1+|\nabla f|^2} dx_1\cdots dx_{n-1}.
  \]

这就化成了 $\mathbb{R}^{n-1}$ 上的积分。
:::

上面关于线性子流形的构造很容易推广到一般的子流形上去，
基本的想法是局部上把每个子流形看作是参数化的流形，尽管这只是局部的构造，
但是局部上能定义测度也就可以整体上定义测度了，所以子流形的积分的理论本质上是局部的问题。
给定一个子流形 $M\subset \mathbb{R}^n$，我们假设 $\operatorname{dim} M=d$。
对于任意的 $y\in S\subset \mathbb{R}^n$，按照定义，存在开集 $V\subset \mathbb{R}^n$，$y\in V$，
开集 $U\subset \mathbb{R}^d$ 和光滑映射 $\Phi\colon U\rightarrow \mathbb{R}^n$，使得

- 1\) $\Phi\colon U\rightarrow V\cap M$ 是微分同胚；

- 2\) 对每个 $x\in U$，${\rm rank}\left(d\Phi(x)\right)=d$，从而，
  $G_\Phi(x)={}^t\bigl({\rm Jac}(\Phi)\bigr)\cdot {\rm Jac}(\Phi)$ 是非退化的 $d\times d$ 的矩阵。

![](MathAnalysis_N1702.svg)

（上面的映射方向和我们的子流形的定义中的映射方向是相反的，但这个不妨碍证明）

仿照仿射子流形的情况，对于任意的Borel集 $A\subset M\cap V$，我们定义其测度为
\[
\begin{aligned}
\sigma(A)&=\int_{U}\mathbf{1}_{\Phi^{-1}(A)}(x)\sqrt{{\rm det}\bigl({}^t\bigl({\rm Jac}(\Phi)\bigr)\cdot {\rm Jac}(\Phi)\bigr)}dx_1\cdots dx_d\\
&=\int_{U}\mathbf{1}_{\Phi^{-1}(A)}(x)\sqrt{\operatorname{det}\left(G_\Phi(x)\right)}dx_1\cdots dx_d.
\end{aligned}
\]
换而言之，我们将 $M$ 上的子流形测度（也叫做曲面测度）定义为
\[
\begin{aligned}
d\sigma=\sqrt{{\rm det}\bigl({}^t\bigl({\rm Jac}(\Phi)\bigr)\cdot {\rm Jac}(\Phi)\bigr)} \Phi_*(dx_1\cdots dx_d),
\end{aligned}
\]
其中 $dx_1\cdots dx_d$ 是 $U$ 上的Lebesgue测度。
当然，如果 $M$ 是仿射子流形并且 $\Phi$ 是仿射变换，这与之前的构造一致。

我们现在说明这个测度是良好定义的：

::: lemma
在 $V\cap M$ 上定义的测度
\[
\sigma=\sqrt{{\rm det}\bigl({}^t\bigl({\rm Jac}(\Phi)\bigr)\cdot {\rm Jac}(\Phi)\bigr)}\cdot \Phi_*(m)
\]
不依赖于参数化 $\Phi\colon U\rightarrow V$ 的选取。
其中，我们在 $V\cap M$ 配有Borel-代数（它和 $U$ 是微分同胚的）。
特别地，这个测度是局部上定义的，从而也在子流形的整体上有了定义。
:::

::: proof
这个证明和仿射情形的证明如出一辙：假设 $\Psi\colon U'\rightarrow V\cap M$ 是另一个参数化，
即存在开集 $U\subset \mathbb{R}^d$ 和光滑映射 $\Phi\colon U\rightarrow \mathbb{R}^n$，使得
\[
\Psi\colon U \rightarrow V\cap M
\]
是微分同胚。
所以，如果我们定义 $L=\Phi^{-1}\circ \Psi$，即 $\Psi=\Phi\circ L$，我们就得到一个微分同胚
\[
L\colon U' \rightarrow U
\]
（$C^1$ 同胚即可）。这可以用如下的交换图表来表示：

\[
\begin{tikzcd}
& V & \\
U \arrow[ur,  "\Phi" ] &  &U' \arrow[ul,  "\Psi"swap]\arrow[ll,  "L" ]
\end{tikzcd}
\]

利用复合映射的求微分公式，我们就有
\[
{\rm Jac}(\Psi)= {\rm Jac}(\Phi)\circ  {\rm Jac}(L),
\]
所以，
\[
\sqrt{{\rm det}\bigl({}^t\bigl({\rm Jac}(\Psi)\bigr)\cdot {\rm Jac}(\Psi)\bigr)}=|\operatorname{det}\left({\rm Jac}(L)\right)|\sqrt{{\rm det}\bigl({}^t\bigl({\rm Jac}(\Phi)\bigr)\cdot {\rm Jac}(\Phi)\bigr)}.
\]
我们在 $U$ 和 $U'$ 上分别用 $x_i$ 和 $x'_i$ 作为坐标，其中 $i=1,\cdots,d$。
那么，根据对 $L$ 的换元积分公式，我们有
\[
\begin{aligned}
\sigma'(A)&=\int_{U'}\mathbf{1}_{\Psi^{-1}(A)}(x')\sqrt{{\rm det}\bigl({}^t\bigl({\rm Jac}(\Psi)\bigr)\cdot {\rm Jac}(\Psi)\bigr)}  dx'_1\cdots dx'_d\\
&=\int_{L^{-1}(U)}\mathbf{1}_{L^{-1}\left(\Phi^{-1}(A)\right)}(x')\sqrt{{\rm det}\bigl({}^t\bigl({\rm Jac}(\Phi)\bigr)\cdot {\rm Jac}(\Phi)\bigr)} |\operatorname{det}\left({\rm Jac}(L)\right)| dx'_1\cdots dx'_d\\
&=\int_{U} \mathbf{1}_{\Phi^{-1}(A)}(x')\sqrt{{\rm det}\bigl({}^t\bigl({\rm Jac}(\Phi)\bigr)\cdot {\rm Jac}(\Phi)\bigr)}  dx_1\cdots dx_d\\
&=\sigma(A).
\end{aligned}
\]
这表明测度 $\sigma$ 不依赖于参数化的选取。
:::

::: remark*
如果 $f$ 是 $\mathbb{R}^n$ 上定义的函数并且 $f$ 在 $M$ 上的限制是可积的（对测度 $\sigma$ 而言），
那么
\[
\begin{aligned}
{\color{red}\int_S fd\sigma=\int_{U}f\bigl(\Phi(x)\bigr)\sqrt{{\rm det}\bigl({}^t\bigl({\rm Jac}(\Phi)\bigr)\cdot {\rm Jac}(\Phi)\bigr)}  dx_1\cdots dx_d.}
\end{aligned}
\]
这将是非常有用的公式，因为它把曲面积分转化为通常的在 $\mathbb{R}^d$ 上的一个区域上的积分，
定要熟练记忆和运用。
:::

::: example*
我们考虑1维的子流形对它进行参数化，这就是参数化的曲线
\[
\gamma\colon(-1,1)\rightarrow \mathbb{R}^n,
\]
其中对任意的 $t\in (-1,1)$，$\gamma'(t)\neq 0$。
我们固定 $-1<a<b<1$，我们来研究曲线上 $\gamma(a)$ 和 $\gamma(b)$ 之间的曲线段 $C_a^b$ 的测度／长度。
首先，${\rm Jac}(\gamma)(t)=\gamma'(t)$，所以，按照定义：
\[
\begin{aligned}
\sigma(C_a^b)&=\int_{(-1,1)}\mathbf{1}_{\gamma^{-1}(S_a^b)}\sqrt{\gamma'(t)\cdot \gamma'(t)}dt\\
&=\int_a^b |\gamma'(t)|dt.
\end{aligned}
\]
这和上个学期所定义的参数曲线的长度的定义一致。
特别地，我们用 $C$ 表示该曲线（即 $\gamma$ 的像），
$f\colon C\rightarrow \mathbb{C}$ 是给定的（可积）函数，那么
\[
{\color{red}\int_{S_a^b}f d\sigma=\int_a^b f(\gamma(t))|\gamma'(t)|dt.}
\]
这将是非常有用的公式，定要熟练记忆和运用。
:::

下面所展示的是另一个核心的例子：

::: example*
给定光滑函数
\[
f\colon\mathbb{R}^{n-1}\rightarrow \mathbb{R},
\]
我们考虑它的图像所定义的 $\mathbb{R}^n$ 中的超曲面
$\Gamma_f=\bigl\{(x,f(x))\bigm| x\in \mathbb{R}^{n-1}\bigr\}$。该曲面在 $(x,f(x))$ 法向量为
\[
\nu=\frac{1}{(1+|\nabla f|^2)^\frac{1}{2}}(-\nabla f,1).
\]
实际上，很容易看出，$T_{(x,f(x))}$ 由如下 $n-1$ 个向量
\[
v_i=(\underbrace{0,\cdots,0,1, 0,\cdots,0}_{\text{共 $n-1$ 个，第 $i$ 个位置为 $1$}},\frac{\partial f}{\partial x_i}), \ \ i=1,2,\cdots,n-1,
\]
所张成，直接计算就得到 $v_i \cdot \nu=0$，其中 $i\leqslant n-1$。

我们用如下的映射来参数化 $\Gamma_f$：
\[
\Phi\colon\mathbb{R}^{n-1}\rightarrow \mathbb{R}^n, \ \ x\mapsto (x,f(x)).
\]
所以，我们有
\[
^t{\rm Jac}(\Phi)=
\left( {\begin{array}{ccccc}
  1& 0 & \cdots & 0 & \frac{\partial f}{\partial x_1} \\
  0& 1 & \cdots & 0 & \frac{\partial f}{\partial x_2} \\
  0& \cdots & \cdots & 0 &\cdots\\
  0& 0 & \cdots & 1 & \frac{\partial ~ f}{\partial x_{n-1}}
  \end{array} } \right)
\]
这是一个 $(n-1)\times n$ 的矩阵，如果用分块矩阵的写法，
我们有 $^t{\rm Jac}(\Phi)=(\mathbf{I},\nabla f)$，
其中 $\mathbf{I}$ 是 $(n-1)\times (n-1)$ 的单位矩阵，$\nabla f$ 为列向量。所以，
\[
^t{\rm Jac}(\Phi)\cdot {\rm Jac}(\Phi)=\mathbf{I}+\nabla f\otimes \nabla f=\left( {\begin{array}{cccc}
  1+\left(\frac{\partial f}{\partial_{x_1}}\right)^2& \frac{\partial f}{\partial_{x_1}}\frac{\partial f}{\partial_{x_2}} & \cdots &   \frac{\partial f}{\partial x_1}\frac{\partial f}{\partial x_{n-1}} \\
\frac{\partial f}{\partial_{x_2}}   \frac{\partial f}{\partial_{x_1}} &  1+\left(\frac{\partial f}{\partial_{x_2}}\right)^2& \cdots &\frac{\partial f}{\partial x_1}\frac{\partial f}{\partial x_{n-1}} \\
  \cdots & \cdots & \cdots & \cdots\\
\frac{\partial f}{\partial_{x_n}}   \frac{\partial f}{\partial_{x_1}}&\frac{\partial f}{\partial_{x_n}}   \frac{\partial f}{\partial_{x_2}}&\cdots &1+\left(\frac{\partial f}{\partial{x_{n-1}}}\right)^2  \end{array} } \right)
\]
所以，（这是一个很有意义的行列式的计算，我们把它留作作业）
\[
^t{\rm Jac}(\Phi)\cdot {\rm Jac}(\Phi)=1+|\nabla f|^2.
\]
所以，我们所求的曲面测度为
\[
\sigma=\sqrt{1+|\nabla f|^2}dx_1\cdots dx_{n-1}.
\]
那么，对于任意的 $\mathbb{R}^n$ 上定义的函数，我们有（只要下面的等式有意义）
\[
{\color{red}
\int_{\Gamma_f}\varphi d\sigma = \int_{\mathbb{R}^{n-1}}\varphi\bigl(x,f(x)\bigr)\sqrt{1+|\nabla f(x)|^2}dx.}
\]
这将是非常有用的公式，必须要熟练记忆和运用。
:::

[^1]: 编注：
  图中的变换事实上是
  $(r, \theta, \varphi) \mapsto (r \sin\vartheta \cos \varphi, r \sin \vartheta \sin \varphi, r \cos \vartheta)$
