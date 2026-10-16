---
title: 子流形的原像定理，切空间
---

::: remark* (寄语)
Equations are just the boring part of mathematics. I attempt to see things in terms of geometry.

<align right>
——Stephen Hawking
</align>
:::

## 子流形的原像

上节课我们证明了隐函数定理并给出了它的几何叙述。
我们已经证明如果 $f \colon \mathbb{R}^n \rightarrow \mathbb{R}^m$ 满足正确的非退化条件，
那么隐函数定理等价于说对于 $0 \in \mathbb{R}^m$，它的逆像 $f^{-1}(0)$ 是 $\mathbb{R}^n$ 中的子流形，
其中，$\operatorname{codim} f^{-1}(0) = m$。
我们注意到，$\{ 0 \} \in \mathbb{R}^m$ 是 $0$-维的子流形，
它在 $\mathbb{R}^m$ 中的余维数也是 $m$。
如果 $S \subset \mathbb{R}^m$ 是子流形，我们同样地可以考虑它的逆像
\[
f^{-1}(S) = \bigl\{ x \in \mathbb{R}^n \bigm| f(x) \in S \bigr\}.
\]
我们有如下漂亮的定理：

::: proposition [子流形的原像]
给定开集 $\Omega \subset \mathbb{R}^n$，光滑映射 $f \colon \Omega \rightarrow \mathbb{R}^m$
和子流形 $S \subset \mathbb{R}^m$。
如果对任意的 $x \in f^{-1}(S)$，$\operatorname{rank} df(x)=m$，
那么 $f^{-1}(S) \subset \Omega$ 是余维数为 $\operatorname{codim} S$ 的子流形。
:::

::: proof
假设 $\operatorname{dim} S = s$。利用隐函数定理，这个命题的证明非常简单：
任取 $y \in S$，$S$ 在 $y$ 的附近可以被 $m-s$ 个函数定义：
存在 $V \subset \mathbb{R}^m$ 以及 $V$ 上的 $m-s$ 个光滑函数 $g_1, \cdots, g_{m-s}$，
使得

- 1\) $S \cap V = g_1^{-1}(0) \cap \cdots \cap g_{m-s}^{-1}(0)$；

- 2\) 对任意 $y' \in S \cap V$，$dg_1(y'), \cdots, dg_{m-s}(y')$ 线性无关。

现在对于任意的 $x \in f^{-1}(S)$，假设 $y = f(x) \in S$，
我们要证明 $f^{-1}(S)$ 在 $x$ 附近是一个子流形。
我们可以选取包含 $x$ 的开集 $U = f^{-1}(V)$；
利用上面对 $S$ 的描述，我们也可以用方程的零点来描述 $f^{-1}(S)$：
\[
\begin{aligned}
  f^{-1}(S) \cap U
  &= \bigl\{ x \in \Omega \bigm| f(x) \in S \cap V \bigr\}\\
  &= \bigl\{ x \in \mathbb{R}^n \bigm| g_1(f(x)), \cdots, g_{m-s}(f(x)) = 0 \bigr\}\\
  &= \bigl( g_1 \circ f \bigr)^{-1}(0) \cap \cdots \cap \bigl( g_{m-s} \circ f \bigr)^{-1}(0).
\end{aligned}
\]
所以 $f^{-1}(S) \cap U$ 是函数 $f^*g_1, \cdots, f^*g_{m-s}$ 的公共零点集。
为了说明这是子流形，只要验证 $f^*g_1, \cdots, f^*g_{m-s}$ 的微分
在 $x$ 处秩是 $m-s$ 即可。这就是链式法则的简单应用：我们考虑如下两个映射的复合：
\[
\begin{tikzcd}
  U \arrow[r,"f"] \arrow[dr, "f^*G" description] & V \arrow[d,"G"] \\
  &\mathbb{R}^{m-s}
\end{tikzcd},
\]
其中 $G \colon V \rightarrow \mathbb{R}^{m-s}$ 就是函数映射 $G(y) = (g_1(y), \cdots, g_{m-s}(y))$。
所以，要求的微分的秩就是映射
\[
d(f^*G)(x) = dG(y) \circ df(x)
\]
的秩。根据 $\operatorname{rank} df(x) = m$
以及 $\operatorname{rank} ~dG(y)=m-s$，所以 $\operatorname{rank} d(f^*G)(x) = m-s$。
命题得到证明。
:::

## 隐函数定理的其它经典应用举例

最著名的例子是考虑多项式的解对多项式系数的光滑依赖性。
给定 $c = (c_1, \cdots, c_n) \in \mathbb{R}^n$，
考虑实系数多项式 $P_c(X) = X^n + c_1 X^{n-1} + \cdots + c_n$。
我们假设 $c^* = (c^*_1, \cdots, c^*_n) \in \mathbb{R}^n$，
使得 $P_{c^*}(X)$ 恰好有 $n$ 个两两不同的实根
$z_1(c^*_1, \cdots, c^*_n) < \cdots < z_n(c^*_1, \cdots, c^*_n)$。
那么，存在 $(c^*_1, \cdots, c^*_n) \in \mathbb{R}^n$ 的开邻域 $\Omega$
和 $\Omega$ 上的光滑函数 $z_1, \cdots, z_n$，
使得对任意的 $c = (c_1, \cdots, c_n)\in \Omega$，我们有
\[
z_1(c_1, \cdots, c_n) < z_2(c_1, \cdots, c_n)
< \cdots < z_n(c_1, \cdots, c_n),
\]
并且
\[
P_c(z_1(c_1,\cdots,c_n)) = P_c(z_2(c_1,\cdots,c_n)) = \cdots
= P_c(z_n(c_1,\cdots,c_n)) = 0.
\]
类似地，如果一个实数系数的矩阵的特征值都是实数且两两不同，
那么，这些特征值也是光滑地依赖于矩阵的系数的。

请参考本周的习题。

## 子流形的切空间

我们以下总是假定 $M^d \subset \mathbb{R}^n$ 是一个 $d$ 维光滑子流形。
我们要发展子流形上的微分学，这是我们对多元微分学的自然推广，在实际中有着重要的应用。
为此，首先定义最重要的一个几何对象：切空间。
我们应该做如下的类比：所谓的微分，是映射在一点处的线性逼近，
反函数／隐函数定理讲的是映射在一点处的线性逼近决定了映射自身的若干性质。
我们应该把切空间视作是流形在一点处用“线性”子流形进行逼近。

首先，我们要考虑的是通过一点 $p \in M$ 的**参数化的 $C^\infty$-曲线**（可以要求是 $C^1$ 的），即
\[
\gamma \colon (-\varepsilon,\varepsilon) \rightarrow \mathbb{R}^n,
\ \ t \mapsto \gamma(t), \ \varepsilon>0, \ \ \gamma(0)=p.
\]
我们将
\[
\gamma'(0) = \frac{d}{dt}\gamma\big|_{t=0}
\]
称作该曲线在 $p$ 处的**切向量**。
如果 $\gamma\bigl( (-\varepsilon,\varepsilon) \bigr) \subset M$，
我们就说 $\gamma$ 是 **$M$ 上的参数曲线**。
所谓的 $M$ 在 $p$ 的切空间，就是由在 $M$ 上的通过 $p$ 的曲线的切向量所构成的空间：

::: definition
微分子流形在 $p \in M$ 处的**切空间** $T_pM$ 是 $\mathbb{R}^n$ 的子集（事实上是线性子空间，
证明见后），它的定义如下：
\[
T_pM = \bigl\{ \gamma'(0) \in \mathbb{R}^n \bigm| \gamma
~\text{是经过 $p$ 点的 $M$ 上的一条参数曲线} \bigr\}.
\]
:::

![](MathAnalysis-N0601.svg)

我们首先来看一个“线性”的例子：[^1]

::: example*
假设 $M$ 由 $x_{d+1} = x_{d+2} = \cdots = x_n = 0$ 定义，即
\[
M = \bigl\{ (x_1, \cdots, x_d, 0, \cdots, 0) \bigm|
x_i \in \mathbb{R}, 1 \leqslant i \leqslant d \bigr\}.
\]
那么，对于 $p = (p_1, \cdots, p_d)$，我们来计算 $T_pM$。实际上，我们有
\[
T_pM = \mathbb{R}^d \times \{0\} = \{ (x_1, \cdots, x_d, 0, \cdots, 0) \}
\]
对任意的 $(a_1, a_2, \dots, a_d) \in \mathbb{R}^d$，按照定义，我们选取特殊的曲线
\[
\gamma_i \colon (-1,1) \rightarrow \mathbb{R}^n, \ \ t \mapsto (ta_1, ta_2\cdots, ta_d, 0, \cdots, 0),
\]
这条曲线自然落在 $M$ 中，所以，通过求导数，
我们就知道 $(a_1, \cdots, a_d, \cdots, 0) \in T_pM$。
所以，$\mathbb{R}^d \times \{0\} \subset T_pM$。

为了说明 $\mathbb{R}^d \times \{0\} \supset T_pM$，
我们考虑任意一条落在 $M$ 中的曲线 $\gamma$。按照 $M$ 的定义，它可以写成
\[
\gamma \colon (-\varepsilon, \varepsilon) \rightarrow \mathbb{R}^n,
\ \ t \mapsto \gamma(t) = (\gamma_1(t), \cdots, \gamma_d(t), 0, \cdots, 0),
\]
对 $t$ 求导数，我们得到
\[
\gamma'(0) = (\gamma'_1(0), \cdots, \gamma'_d(0), 0, \cdots, 0).
\]
这显然是 $\mathbb{R}^d \times \{0\}$ 中的一个向量。

我们要**强调**关于这个例子的一个事实：
上面的计算表明，$T_pM$ 作为 $\mathbb{R}^n$ 的子空间是不依赖于 $p$ 的，
这只是（混淆视听的）**巧合**。
:::

::: proposition
切空间在微分同胚下不变，即若 $\Phi \colon U \rightarrow V$ 是微分同胚，
$M \subset U$ 是子流形，$p \in M$，其中 $U$ 和 $V$ 是 $\mathbb{R}^n$ 中的开集。
那么，$\Phi(M)$ 是子流形并且 $\Phi(p)$ 的切空间为
\[
T_{\Phi(p)}\Phi(M) = d\Phi\Big|_{x=p}(T_pM).
\]
:::

![](MathAnalysis-N0602.svg)

::: proof
$\Phi(M) \subset V$ 是子流形是平凡的，请参考本周的作业。
为了说明 $T_{\Phi(p)}\Phi(M) = d\Phi\Big|_{x=p}(T_pM)$，
我们考虑经过 $p$ 点的 $M$ 上的一条参数曲线
\[
\gamma \colon (-\varepsilon, \varepsilon) \rightarrow M,
\ \ t \mapsto \gamma(t).
\]
通过与 $\Phi$ 复合，我们得到了 $V$ 中的曲线 $\Phi \circ \gamma$。
按照定义，这是子流形 $\Phi(M)$ 上的通过 $\Phi(p)$ 点的曲线。
很明显，（通过考虑 $\Phi^{-1}\circ \alpha$）
$\Phi(M)$ 上的任何一条通过 $\Phi(p)$ 点的曲线都可以通过这种方式得到。
所以，通过复合 $\Phi$，$M$ 上通过 $p$ 点的曲线与 $\Phi(M)$ 通过 $\Phi(p)$ 点的曲线是一一对应的。

现在可以对曲线求导数来计算 $T_{\Phi(p)}\Phi(M)$。
假设 $v\in T_pM$，按照定义，这意味着存在 $M$ 上过 $p$ 点的曲线 $\gamma$，
使得 $\gamma'(0) = v$。我们现在证明：
\[
d\Phi\big|_{x=p}(v) = \frac{d}{dt}\Big|_{t=0}\Phi(\gamma(t)),
\]
即 $\Phi \colon U \rightarrow V$ 的微分将 $\gamma$ 的切向量映射成 $\Phi\circ \gamma$ 的切向量。
按照微分定义，我们有
\[
\gamma(t) = p + t \gamma'(0) + o(t)
\]
以及
\[
\Phi(p+h) = \Phi(p) + d\Phi(p)(h) + o(h),
\]
所以
\[
\begin{aligned}
  (\Phi \circ \gamma)(t)
  &= \Phi\bigl(p + t\gamma'(0) + o(t)\bigr) \\
  &= \Phi(p) + d\Phi(p)(t\gamma'(0) + o(t)) + o(\gamma'(0)t + o(t)) \\
  &= \Phi(p) + td\Phi(p)(\gamma'(0)) + o(t).
\end{aligned}
\]
所以，
\[
(\Phi \circ \gamma)'(0) = d\Phi(p)(\gamma'(0)).
\]
这就是要证明的等式。
这个式子表明 $d\Phi\Big|_{x=p}(T_pM) \subset T_{\Phi(p)}\Phi(M)$。
由于 $\Phi(M)$ 中的每条曲线都是这么来的，
所以 $d\Phi\Big|_{x=p}(T_pM) = T_{\Phi(p)}\Phi(M)$。
:::

::: theorem
$T_pM$ 是 $\mathbb{R}^n$ 的一个 $d$ 维线性子空间。

进一步，按照 $M$ 的（局部）定义方式，我们有如下两种方式刻画切空间：

- 1\) 按子流形的定义，存在包含 $p$ 的开集 $U \subset \mathbb{R}^n$ 和 $\mathbb{R}^n$ 中的开集 $V$
  以及微分同胚 $\Phi \colon U \rightarrow V$
  使得 $\Phi(U \cap M) = V \cap (\mathbb{R}^d \times \{0\})$。那么，
  \[
  T_pM = (d\Phi)^{-1}\Big|_{\Phi(p)}(\mathbb{R}^d \times \{0\}).
  \]

- 2\) 假设 $M$ 在 $p$ 的局部上由 $n-d$ 个光滑函数 $f_1,\cdots,f_{n-d}$ 的零点定义，
  即存在开集 $U \subset \mathbb{R}^n$，使得 $p \in U$，满足
  \[
  U \cap M = \bigl\{ x \in U \bigm| f_1(x) = \cdots = f_{n-d}(x) = 0 \bigr\}
  \]
  并且对任意的 $x \in U \cap M$，$n-d$ 个线性函数 $df_1(x), \cdots, df_{n-d}(x)$ 是线性无关的，
  那么
  \[
  T_pM = \bigcap_{i=1}^{n-d} \operatorname{ker} df_i\big|_{x=p} = \operatorname{ker} df\big|_{x=p}.
  \]
  其中 $f = (f_1, \cdots, f_{n-d})$。

:::

::: proof
我们首先看 1)。由于 $\Phi(M)$ 为 $\mathbb{R}^d \times \{0\}$ 中的开集，
根据前面的命题以及线性情况的计算，我们有
\[
\mathbb{R}^d \times \{0\} = T_{\Phi(p)}\Phi(M) = d\Phi\Big|_{x=p}(T_pM).
\]
两边同时取 $d\Phi\Big|_{x=p}$ 的逆就完成了证明。
特别地，$T_pM$ 具有线性子空间的结构，就是通过这个映射：
\[
\begin{tikzcd}
  T_pM \arrow[r,"d\Phi"] \arrow[d] & \mathbb{R}^d \times \{0\} \arrow[d]\\
  \mathbb{R}^n \arrow[r,"d\Phi"] & \mathbb{R}^{n}
\end{tikzcd},
\]
因为我们可以把 $T_pM$ 与 $\mathbb{R}^d \times \{0\}$ 等同，
所以我们就用 $\mathbb{R}^d \times \{0\}$ 上的线性空间结构
作为 $T_pM$ 上的线性空间结构就好。
特别地，因为 $\mathbb{R}^d \times \{0\}$ 的维数是 $d$，
所以 $T_pM$ 的维数也是 $d$。[^2]

现在证明 2)。我们任取 $v \in T_pM$，按照定义，存在 $M$ 上的过 $p$ 点的曲线 $\gamma$，
使得 $\gamma'(0) = v$。由于 $M$ 是 $f_i$ 的零点集，所以
\[
  f_i(\gamma(t)) = 0,
\ \ \text{对任意的}~t.
\]
对 $t$ 求导数，链式法则给出我们
\[
df_i(p) \bigl(\gamma'(0)\bigr) = 0
\ \ \Leftrightarrow  \ \ df_i(p) \bigl(v\bigr)=0.
\]
这表明 $T_pM \displaystyle \subset \bigcap_{i=1}^{n-d} \operatorname{ker} df_i$。
另外，
由于 $df_1(p),\cdots,df_{n-d}(p)$ 线性无关，我们有 $\displaystyle \operatorname{dim} \bigcap_{i=1}^{n-d} \operatorname{ker} df_i = d$，
而由1)，$\operatorname{dim} T_pM = d$，
通过比较维数，我们就知道这两个空间是一致的。
:::

::: remark* [重要]
切空间是内蕴定义的，完全不依赖于坐标系，因为在定义中我们是用 $M$ 上的曲线来定义的。
上面定理中对切空间的描述或者依赖于坐标 $\varphi$ 的选取或者依赖于 $M$ 的定义函数 $f_i$ 的选取。
然而，**因为**切空间是内蕴定义的，**所以**我们可以用任意的坐标或者定义函数来计算
（我们在应用的时候总是选最容易计算的坐标或函数）。
:::

::: example* [超曲面的切空间与法向量的概念]
假设 $M$ 是 $\mathbb{R}^n$ 中由一个函数 $f$ 整体定义的超曲面（$\mathbb{R}^3$
中的曲面是我们最常见的例子），
它的定义函数为 $f \in C^\infty(\mathbb{R}^n)$。此时，我们在 $\mathbb{R}^n$ 选定坐标系。
按照定义，对于 $p = (x_1, \cdots, x_n) \in M$，那么
\[
T_pM = \operatorname{ker} df(p) = \bigl\{ v \in \mathbb{R}^n \bigm| df(p)(v) = 0 \bigr\}.
\]
用坐标系（矩阵的语言）来写，我们有
\[
v = (v_1, \cdots, v_n), \ \ df(p)
= \left( \frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2},
\cdots, \frac{\partial f}{\partial x_n} \right)(p),
\]
所以，
\[
df(p)(v)=0 \ \ \Leftrightarrow
\ \ \sum_{i=1}^n v_i \frac{\partial f}{\partial x_i}(p) = 0.
\]
我们**假定**在 $\mathbb{R}^n$ 中取定一个 Euclid 内积 $\langle \cdot,\cdot \rangle$，
使得 $\bigl\{ \dfrac{\partial}{\partial x_i} \bigr\}_{i \leqslant n}$ 恰好是标准正交基。
此时，我们用如下的符号表示上述向量
\[
\nabla f(p) = \left( \frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2},
\cdots, \frac{\partial f}{\partial x_n} \right)(p).
\]
那么，上面的关系就可以表达为
\[
\langle v, \nabla f(p) \rangle = 0.
\]
换句话说，$\nabla f(p)$ 是切平面的**法向量**。
由于 $\nabla f(p) \neq 0$，我们经常把这个向量正规化成长度为 $1$ 的向量：
\[
\frac{\nabla f(p)}{|\nabla f(p)|}.
\]
我们习惯上把 $\nabla f(p)$ 称作 $f$ 在 $p$ 处的**梯度**。在绝大多数的应用中，
我们都（无意识地）自动**假定**在 $\mathbb{R}^n$ 中有上述 Euclid 内积。[^3]
:::

利用上面的讨论，我们很容易计算 $\mathbb{R}^3$ 中曲面的切空间，比如说，我们来看柱面的例子：

![](MathAnalysis-N0603.svg)

::: example*
柱面的定义方程是 $f = 0$，其中
\[
f(x,y,z) = x^2 + y^2 - 1
\]
对任意给定的 $(x,y,z)$，很容易算出
\[
\nabla f(p) = (2x, 2y, 0)
\]
我们知道 $(-y, x, 0)$ 和 $(0, 0, 1)$ 都和这个向量垂直，
所以，这两个向量就张成了切空间。
特别地，我们也可以从图形或者这个计算上清楚的看出，
切空间 $T_pM$ 是依赖于它的基准点 $p$。
和之前线性子空间的切空间的例子对比，我们强调说不同点的切空间是不同的。
我们之所以认为它们有时候是一样的，是因为我们把它们都看成了 $\mathbb{R}^n$ 的子空间；
所以它们有可能相同。
:::

[^1]: 搬运者注：原讲义中此处不加证明地默认切空间是线性子空间，这里已经做了相应的修改。
[^2]: 这里线性空间的结构的定义依赖于 $\Phi \colon U\rightarrow V$ 的选取，
  我们将在习题课中说明这个选取实际上不依赖于 $\Phi$ 的选取。
[^3]: 从微分几何的观点，这一点有待商榷，有兴趣的同学可以在学习 Riemann 几何的时候回头思考这个问题。
