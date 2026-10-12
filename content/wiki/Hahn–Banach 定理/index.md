---
title: Hahn–Banach 定理
categories: [泛函分析]
navboxes: [泛函分析]
---

**Hahn–Banach 定理**是[[泛函分析]]中基本且核心的定理，
它解决了某些[[线性空间]]上[[线性泛函]]的延拓问题。
从几何上来看，这表现为[[凸集]]的分离性质，
而这是研究[[Banach 空间]]中凸集有关的几何学的起点。

## 叙述与证明

先叙述并证明实线性空间的版本。在证明中需要使用[[Zorn 引理]]。

::: theorem [实 Hahn–Banach 定理]
设 $X$ 是实线性空间，
$p$ 是定义在 $X$ 上的[[次线性泛函]]。
设 $X_0$是 $X$ 的线性[[子空间]]，
$f_0$是 $X_0$
上的实线性泛函，满足对任意 $x\in X_0$，有 $f_0(x)\leq p(x)$。
则 $X$ 上存在实线性泛函 $f$ 满足：

- 对任意 $x\in X$，有 $f(x)\leq p(x)$。

- 对任意 $x\in X_0$，有 $f(x)=f_0(x)$。

:::

::: proof
为了便于理解证明的思想，先在一个特殊的空间上进行延拓，
即对于 $y\in  X \setminus  X_0$，
考虑它“加入”$X_0$之后张成的线性空间：
\[
X_1=\{x+\alpha y\mid x\in X_0,\alpha\in\mathbb R\}
\]
如果用 $f_1$表示延拓以后的线性泛函，则必有
\[
f_1(x+\alpha y)=f_0(x)+\alpha f_1(y)
\]
如此只需决定 $f_1(y)$的值。控制条件要求
\[
f_1(x+\alpha y)\leq p(x+\alpha y)
\]
对 $\alpha\neq 0$，两边同时除以$|\alpha|$，
并注意$x/|\alpha|\in X_0$，得到
\[
\left\{\begin{aligned}
  f_1(y-z)&\leq p(y-z),\quad\ \ \ \,\forall z\in X_0\\
  f_1(-y+w)&\leq p(-y+w),\quad\!\forall w\in X_0
\end{aligned}\right.
\]
或者
\[
f_0(w)-p(-y+w)\leq f_1(y)\leq f_0(z)+p(y-z),\quad\forall z,w\in X_0
\]
因为对 $z,w\in X_0$有
\[
\begin{aligned}
  f_0(w)-f_0(z)&=f_0(w-z)\\
         &\leq p(w-z)\\
         &\leq p(w-y)+p(y-z)\\
\end{aligned}
\]
即
\[
f_0(w)-p(-y+w)\leq f_0(z)+p(y-z)
\]
所以这样的 $f_1(y)$确实可以选取。

如果 $X \setminus X_0$是[[有限集]]或者[[可数集]]张成的，
则接下来的工作将是显然的：只需重复上面的操作。
对于不是这样的情况，需要使用 [[Zorn 引理]]。
令 $ F$ 表示满足下面三个条件的对子$( X_\Delta,f_\Delta)$
的集合：

- $X_0\subset  X_\Delta\subset  X$

- $f_\Delta(x)=f_0(x),\forall x\in  X_0$

- $f_\Delta(x)\leq p(x),\forall x\in X_\Delta$

在 $ F$ 中引入序关系：
$( X_{\Delta_1},f_{\Delta_1})\preceq ( X_{\Delta_2},f_{\Delta_2})$
的意思是
\[
X_{\Delta_1}\subset  X_{\Delta_2},\quad f_{\Delta_2}(x)=f_{\Delta_1}(x),\forall x\in  X_{\Delta_1}
\]
$ F$ 在此意义下当然是一个[[偏序集]]。
取 $ F$ 的[[全序集|全序]][[子集]] $M$，并令
\[
X_M=\bigcup_{( X_\Delta,f_\Delta)\in M} X_\Delta
\]
以及 $f_M(x)=f_\Delta(x)$分别在 $x\in  X_\Delta$ 时成立。
易验证 $X_M$ 是$X$ 的包含 $X_0$
的子空间，且$ f_M$是良定义的，满足控制条件。
于是$( X_M,f_M)\in F$ 是 $M$ 的一个上界。
根据 [[Zorn 引理]]，$ F$ 存在极大元，记为$( X_A,f_A)$。
接下来证明 $X_A= X$。用反证法。
若不然，则可以选出$y\in  X \setminus X_A$。
最开始的证明告诉我们，可以构造出
\[
X_B=\{x+\alpha y\mid x\in X_A,\alpha\in\mathbb R\}
\]
并有对应的线性泛函 $f_B$ 使得$( X_B,f_B)\in F$。
显然$( X_A,f_A)\preceq ( X_B,f_B)$，且它们不相等。
这与极大性矛盾。从而 $X_A= X$，得到所欲证的。
:::

这个定理可以无困难地推广到复线性空间上去。

::: theorem [复 Hahn–Banach 定理]
设 $X$ 是复线性空间，
$p$ 是定义在 $X$ 上的[[半范数]]。
设 $X_0$是 $X$ 的线性[[子空间]]，
$f_0$是 $X_0$
上的复线性泛函，满足对任意 $x\in X_0$，
有 $|f_0(x)|\leq p(x)$。
则 $X$ 上存在一个复线性泛函 $f$ 满足：

- 对任意 $x\in X$，有 $|f(x)|\leq p(x)$。

- 对任意 $x\in X_0$，有 $f(x)=f_0(x)$。

:::

::: proof [证明概要]
复线性空间总可以被视为实线性空间。在此条件下，
对 $g_0(x)=\mathrm{Re} f_0(x)$使用实 Hahn–Banach 定理，
得到实线性泛函 $g$。然后令
\[
f(x)=g(x)-\mathrm ig(\mathrm ix)
\]
:::

## 应用

如果线性空间上有[[范数]]，则可以得到更强的结果。

::: theorem [赋范线性空间上的 Hahn–Banach 定理]
设 $X$ 是[[赋范线性空间]]，$X_0$
是其线性子空间，$f_0$是 $X_0$上的有界线性泛函。
则存在 $X$ 上的有界线性泛函 $f$ 满足

- 对任意 $x\in X_0$，有 $f(x)=f_0(x)$。

- $\|f\|=\|f_0\|$。

:::

::: corollary
$X$ 是 $\mathbb R$ 或 $\mathbb C$ 上的赋范线性空间，$x\in X$，
则 $\|x\|=\max\{|\varphi(x)|: \varphi\in X^*, \|\varphi\|=1\}$。
特别地，集合 $\{|\varphi(x)|: \varphi\in X^*, \|\varphi\|=1\}$ 有最大值是定理断言的一部分。
:::

::: proof
如果 $x=0$，则命题显然成立。
如果 $x\ne 0$，在 $x$ 张成的一维子空间定义由 $x\mapsto \|x\|$ 给出的线性泛函 $\varphi_0$。
则 $\varphi_0$ 有界且范数是 $1$。
由赋范线性空间上的 Hahn–Banach 定理，$\varphi_0$ 可以延拓为 $X$ 上范数为 $1$ 的线性泛函 $\varphi$，
$|\varphi(x)|= |\varphi_0(x)|= \|x\|$。
另一方面，如果 $\psi\in X^*$，$\|\psi\|=1$，则 $|\psi(x)|\le \|\psi\|\cdot \|x\|=\|x\|$。
:::

接下来讨论这定理在几何上的应用。在一般的线性空间中，可以定义[[超平面]]，
它是熟悉的三维空间中平面的推广。

::: definition [超平面]
线性空间 $X$ 的一个**超平面** $H_f^r$ 是指
\[
H_f^r=\{x\in X\mid f(x)=r\}
\]
其中 $f$ 是 $X$ 上的非零线性泛函，$r\in\mathbb R$。
:::

::: definition [分离]
超平面 $H_f^r$ **分离**线性空间中的子集$E,F$是指
\[
\forall x\in E,f(x)\leq r;\quad \forall x\in F,f(x)\geq r
\]
两个不等号可以交换。
:::

我们可以证明如下[[凸集分离定理]]，它常被视为 Hahn–Banach 定理的一种
几何形式：

::: theorem [凸集分离定理]
设$E,F$是[[赋范线性空间]]中两个互不相交的非空[[凸集]]，
其中至少有一个存在内点。则存在 $r\in\mathbb R$ 和非零连续线性泛函 $f$，
使得超平面 $H_f^r$ 分离 $E$ 和 $F$。
:::

除此以外，Hahn–Banach 定理的各种版本和推论还活跃在分析的许多领域中。

```terms
Hahn–Banach 定理:
  en: Hahn–Banach theorem
  fr: théorème de Hahn–Banach
  de: Satz von Hahn–Banach
凸集分离定理:
  en: hyperplane separation theorem
```
