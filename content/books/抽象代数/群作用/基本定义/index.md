---
title: 基本定义
---

<problems>
- “轨道分解”注记中的公式 $X=\coprod_{g\in G}\mathrm{orb}(x)$ 的下标似乎应为对轨道代表元 $x$ 取无交并，而不是对 $g\in G$。
</problems>

::: definition [群作用] {@definition-action-de-groupe}
群$G$在集合$X$上的一个 **（左）作用**指的是映射：
\[
G \times X  \longrightarrow X ,\ \ (g, x)\mapsto g\cdot x,
\]
它满足：

- 1\) 对任意$x\in X$，对任意的$(g,g') \in G\times G$，
  有$g\cdot(g'\cdot x) =  (g\cdot_{_G}g')\cdot x$。

- 2\) 对任意$x\in X$，$1_{_G}\cdot x =x$。

为了书写方便，通常用如下符号来记以上的群作用：$^{G\curvearrowright} X$。
:::

::: remark
我们可以类似地定义群的**右作用**。要求存在映射
\[
X\times G  \longrightarrow X ,\ \ (x, g)\mapsto x\cdot g,
\]
并满足

- 1\) 对任意$x\in X$和$(g,g') \in G\times G$，有$(x\cdot g)\cdot g'=  x\cdot (g\cdot_{_G}g')$。

- 2\) 对任意$x\in X$，$x\cdot 1_{_G} =x$。

右作用可以被简记为$X^{\curvearrowleft G}$。
:::

::: example
给定群作用$^{G\curvearrowright} X$和$Y\subset X$，如果对任意$g\in G,y\in Y$，$g\cdot y\in Y$，那么，
\[
G \times Y  \longrightarrow Y ,\ \ (g, y)\mapsto g\cdot y,
\]
是$G$在$Y$上的作用。
:::

::: example
给定群作用$^{G\curvearrowright} X$和子群$H<G$，则
\[
H \times X  \longrightarrow X ,\ \ (h, x)\mapsto h\cdot x,
\]
是$H$在$X$上的作用。
:::

::: remark
给定$G$在$X$上的作用等价于给定从$G$到$\mathfrak{S}_X$的群同态$\tau$。

一方面，对任意$x\in X$和$g \in G$，定义$\tau(g)(x) = g\cdot x$。
这是$X$到自身的双射，其逆为$\tau(g^{-1})$。根据群作用的定义，
\[
\tau\colon G\rightarrow \mathfrak{S}_X, \ \ g\mapsto \tau(g)
\]
是群同态。

另一方面，给定群同态$\tau\colon G\rightarrow \mathfrak{S}_X$，定义映射
\[
G \times X  \longrightarrow X ,\ \ (g, x)\mapsto \tau(g)(x).
\]
容易验证，这是$G$在$X$上的作用。
:::

::: remark [轨道分解]
对于$x,x' \in X$，若存在$g\in G$，使得$x=g\cdot x'$，则称$x,x'$属于同一**轨道**。
这里，我们把$x\in X$的轨道定义为
\[
{\rm orb}(x)=G\cdot x=\big\{g\cdot x\bigm|g\in G\big\}.
\]
很明显，如果$x,x'$属于同一轨道，则${\rm orb}(x)={\rm orb}(x')$（参考以下证明）。

群$G$对集合$X$的作用的一个重要性质就是它将$X$分解为不同轨道的无交并。

考虑$x,y\in X$的轨道${\rm orb}(x)$和${\rm orb}(y)$，
若${\rm orb}(x) \cap {\rm orb}(y)\neq \emptyset$，则${\rm orb}(x)  ={\rm orb}(y)$。
因为我们可以选$g_1,g_2\in G$，使得$g_1\cdot x=g_2\cdot y$，从而，$g_2^{-1}g_1x= y$。据此，
\[
{\rm orb}(y)=G\cdot y=\big(G\cdot g_2^{-1}g_1\big)x=G\cdot x={\rm orb}(x).
\]

我们将$G$在$X$上（左）作用的轨道集合记为$
  {G\backslash X}
$（右作用情形记为$
  {X/G}
$）。

作为总结，我们有
\[
X=\displaystyle\coprod_{g\in G}{\rm orb}(x)=\displaystyle\coprod_{
  {G\backslash X}
}{\rm orb}(x),
\]
并且当$X$是有限集时，有如下计数公式：
\[
|X|=\sum_{
  {G\backslash X}
} |{\rm orb}(x)|.
\]
:::

::: remark
如果$X$中的点都在同一个轨道里，即$\big|
  {G\backslash X}
\big|=1$，就称$G$在$X$上的作用是**传递**的。

考虑轨道${\rm orb}(x)\in
  {G\backslash X}
$，由于$G\cdot {\rm orb}(x)={\rm orb}(x)$，$G$在该轨道上有自然的作用。这个作用明显是传递的。

根据轨道分解$X=\displaystyle\coprod_{
  {G\backslash X}
}{\rm orb}(x)$，通过研究传递的群作用可以理解$G$在$X$上的作用。
:::

::: remark
对任意$g\in G$，如果$g\cdot x=x$，就称$x$是$g$的一个**不动点**。
对任意$x \in X$，$G$中使$x$不动的元构成子群，
它被称作是$x$的**稳定化子**并记作${\rm Stab}_{G}(x)$或${\rm Stab}(x)$：
\[
{\rm Stab}_{G}(x)=\big\{g\in G\bigm| g\cdot x =x\big\}.
\]

如果对任意$x\in X$，${\rm Stab}(x) = 1$，就称$G$的作用是**自由的**，也就是说除了单位元外，
任何的$g\in G$都没有不动点。

另外，若对任意$g\in G-\{1\}$，存在$x\in X$，使得$g\cdot x \neq x$，就称$G$的作用是**忠实的**。
$^{G\curvearrowright} X$是忠实的等价于对应的群同态$G\rightarrow \mathfrak{S}_X$是单射。
:::

::: example {@exam:faithful}
给定群作用$^{G\curvearrowright} X$，即给定群同态$\tau\colon G\rightarrow \mathfrak{S}_X$，
我们自然有单的群同态
\[
 {G/{\rm Ker}(\tau)}
\longrightarrow \mathfrak{S}_X.
\]
这给出忠实的群作用$^{
  {G/{\rm Ker}(\tau)}
\curvearrowright} X$。
:::

::: definition [群作用之间的态射] {@definition-morphism-of-action}
群$G$在$X$上以及群$G'$在$X'$上的作用分别由如下映射给出：
\[
\begin{cases} &F\colon G \times X  \longrightarrow X ,\ \ (g, x)\mapsto g\cdot x,\\
& F'\colon G' \times X'  \longrightarrow X' ,\ \ (g', x')\mapsto g'\cdot x',
\end{cases}
\]
如果存在群同态$\varphi\colon G\rightarrow G'$和映射$\psi\colon X\rightarrow X'$，
使得对任意$g\in G$和$x\in X$，有
\[
\psi(g\cdot x)= \varphi(g)\cdot \psi(x),
\]
就称$(\varphi,\psi)$是$^{G\curvearrowright} X$到$^{G'\curvearrowright} X'$的**态射**。

当$\varphi$为群同构并且$\psi$为双射时，
就称$(\varphi,\psi)$是$^{G\curvearrowright} X$到$^{G'\curvearrowright} X'$的**同构**并说
$^{G\curvearrowright} X$和$^{G'\curvearrowright} X'$是同构的。
:::

以上定义中的态射可以用如下交换图来表示：
\[
\begin{tikzcd}
G \times X  \arrow[r, "F"] \arrow[d, "\varphi\times \psi",swap] &  X \arrow[d, "\psi"]\\
G' \times X'  \arrow[r, "F'"]&   X'   \end{tikzcd}
\]
