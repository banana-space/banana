---
title: 作业：拓扑与连续性
---

## 基本习题

### 习题A：距离空间上的拓扑与连续性

- A1)（距离空间上的Heine定理）假设 $(X,d_X)$ 和 $(Y,d_Y)$ 是距离空间，
  $f\colon X\rightarrow Y$ 是映射。我们有两种方式来定义连续映射（参见第3次作业题的A3)和第9次课）

  - 假设 $x_0\in X$，如果对任意 $X$ 中的点列 $\{x_n\}_{n\geqslant 1}$，
    $x_n\stackrel{d_X}{\longrightarrow}x_0$，
    我们都有 $f(x_n)\stackrel{d_Y}{\longrightarrow}f(x_0)$，我们就称 $f$ 在 $x_0$ 处是连续的。
    如果 $f$ 在一切 $x\in X$ 处均连续，那么我们就称 $f$ 是距离空间之间的**连续映射**。

  - 假设 $x_0\in X$，$y_0=f(x_0)\in Y$。
    如果对**任意的** $\varepsilon>0$，总存在 $\delta>0$，
    使得对**任意**满足 $d_X(x,x_0)<\delta$ 的 $x \in X$，
    都有 $d_Y\bigl(f(x),f(x_0)\bigr)<\varepsilon$，我们就称 $f$ 在 $x_0$ 处**连续**。
    如果 $f$ 在 $X$ 的每个点处都连续，那么我们就称 $f$ 是**连续映射**。

  证明，上面两个对连续映射的定义是等价的。

A2) $(X,d)$ 是距离空间。
    对任意的点 $x\in X$，$r>0$，
    我们称 $B(x,r)=\bigl\{y\in X\mid d(y,x)<r\bigr\}$ 为**以 $x$ 为中心以 $r$ 为半径的开球**。
    证明，对任意的点 $x\in X$，$r>0$，如果 $x'\in B(x,r)$，那么存在 $r'>0$，
    使得 $B(x',r')\subset B(x,r)$。

    如果 $U\subset X$ 是若干开球的并，
    即 $U=\displaystyle \bigcup_{\alpha \in \mathcal{A}} B(x_\alpha,r_\alpha)$（指标集 $\mathcal{A}$
    是任意的），就称 $U$ 是距离空间 $(X,d)$ 中的**开集**。
    证明，$U\subset X$ 是开集当且仅当对任意的 $x\in U$，存在 $\delta_x>0$，
    使得 $B(x,\delta_x)\subset U$。

- A3)（距离空间上的标准拓扑）我们用 $\mathcal{T}$ 表示距离空间 $(X,d)$ 上的开集的全体，其中，
  我们规定 $\emptyset$ 和 $X$ 都是开集。证明，它们满足

  - 1\) $\emptyset \in \mathcal{T}$，$X \in \mathcal{T}$。

  - 2\) 对任意开集的集合 $\{U_{\alpha}\}_{\alpha \in \mathcal{A}}$，其中 $\mathcal{A}$ 为指标集合，
    我们有 $\displaystyle\bigcup_{\alpha \in \mathcal{A}}U_\alpha \in \mathcal{T}$。

  - 3\) 对任意有限个开集 $U_1,U_2,\cdots, U_m \in \mathcal{T}$，
    我们有 $\displaystyle\bigcap_{1\leqslant i\leqslant m}U_i \in \mathcal{T}$。

A4) $(X,d)$ 是距离空间。如果 $F\subset X$ 的补集是开集，我们就称 $F$ 是**闭集**。
    证明，$F$ 是闭集当且仅当对任意点列 $\{x_n\}_{n\geqslant 1}\subset F$，
    如果 $\displaystyle \lim_{n\rightarrow \infty}x_n = x$，那么 $x \in F$。

A5) 证明，距离空间 $(X,d)$ 上的闭集，

    - 1\) $\emptyset$ 和 $X$ 都是闭集。

    - 2\) 任意多闭集的交集还是闭集。

    - 3\) 有限个闭集的并集还是闭集。

A6) 假设 $(X,d_X)$ 和 $(Y,d_Y)$ 是距离空间，$f\colon X\rightarrow Y$ 是映射。
    那么，如下三个叙述是等价的：

    - 1\) $f$ 是连续映射。

    - 2\) 对任意 $Y$ 中的开集 $U$，其逆像 $f^{-1}(U)$ 为 $X$ 中的开集。

    - 3\) 对任意 $Y$ 中的闭集 $F$，其逆像 $f^{-1}(F)$ 为 $X$ 中的闭集。

A7) $(X,d)$ 是距离空间，$A\subset X$ 是子集，
    我们将包含 $A$ 的所有闭集交 $\overline{A}$ 为 $A$ 的**闭包**，根据上题，这是闭集，
    所以是包含 $A$ 的最小闭集。

    对于 $x\in X$，如果存在点列 $\{a_k\}_{k\geqslant 1}\subset A$，
    使得 $\displaystyle \lim_{k\rightarrow \infty}a_k = x$，并且其中 $a_k\neq x$，
    我们就称 $x$ 是 $A$ 的一个**聚点**。

    $A$ 的聚点不一定都在 $A$ 中，$A$ 中的点也不一定都是 $A$ 的聚点。
    $A$ 中不是 $A$ 的聚点的点被称为 $A$ 的**孤立点**。
    $A$ 的聚点组成的集合被称为 $A$ 的**导集**，记作 $A'$。如果 $A=A'$，我们称 $A$ 为**完美集**。

    证明，$\overline{A}=A'\cup A$。
    特别地，$F$ 是闭集当且仅当 $F$ 的聚点都在 $F$ 中，即 $F=F'\cup F=\overline{F}$。

- A8)（距离空间的乘积与连续映射）假设 $(Y,d_Y)$ 和 $(Z,d_Z)$ 是距离空间，
  我们定义 $Y\times Z$ 上的距离函数
  \[
  d_{Y\times Z}\colon \bigl(Y\times Z\bigr){ \times} \bigl(Y\times Z\bigr) \rightarrow \mathbb{R}_{\geqslant 0}, \ \ \bigl((y_1,z_1),(y_2,z_2)\bigr)\mapsto \sqrt{d_Y(y_1,y_2)^2+d_Z(z_1,z_2)^2}.
  \]
  证明，$d_{Y\times Z}$ 是 $Y\times Z$ 上的距离函数。证明，两个自然的投影映射是连续的：
  \[
  \pi_Y\colon  Y\times Z \rightarrow Y, \ (y,z)\mapsto y; \ \pi_Z\colon  Y\times Z \rightarrow Z, \ (y,z)\mapsto z.
  \]
  证明，
  给定距离空间 $(X,d)$ 和 $(Y\times Z,d_{Y\times Z})$ 之间的映射 $F\colon  X\rightarrow Y\times Z$，
  那么，
  $F$ 连续当且仅当两个复合映射 $\pi_Y \circ F\colon  X\rightarrow Y$ 和
  $\pi_Z \circ F\colon  X\rightarrow Z$ 都连续。

A9) 证明，加法映射 $+$ 和乘法映射 $\times$ 都是连续映射，其中
    \[
    +\colon  \mathbb{R}^2\rightarrow \mathbb{R}, \ \ (x,y)\mapsto x+y; \ \ \ \ \times \colon  \mathbb{R}^2\rightarrow \mathbb{R}, \ \ (x,y)\mapsto x\cdot y.
    \]

A10) 证明，矩阵上的加法映射 $+$ 和乘法映射 $\bullet$ 都是连续映射，其中
     \[
     +\colon  \mathbf{M}_n(\mathbb{R})\times \mathbf{M}_n(\mathbb{R})\rightarrow \mathbf{M}_n(\mathbb{R}),  \ \ (A,B)\mapsto A+B;\ \ \ \ \bullet\colon  \mathbf{M}_n(\mathbb{R})\times \mathbf{M}_n(\mathbb{R})\rightarrow \mathbf{M}_n(\mathbb{R}),  \ \ (A,B)\mapsto A\cdot B.
     \]

A11) 证明，
     $\mathbf{M}_n(\mathbb{R})$ 上的可逆矩阵的全体 $\mathbf{GL}_n(\mathbb{R})$ 是
     $\mathbf{M}_n(\mathbb{R})$ 中的开集。（提示：构造一个连续映射使得该集合是连续映射的逆像）

A12) 证明，
     取逆映射
     ${\rm Inv}\colon  \mathbf{GL}_n(\mathbb{R})\rightarrow \mathbf{GL}_n(\mathbb{R}), \ \ A\mapsto A^{-1}$
     是连续映射。

### 习题B：极限的 $\varepsilon-\delta$ 语言描述

用 $\varepsilon-\delta$ 语言证明以下极限等式，其中 $n$ 是正整数：

B1) $\lambda > 0$，$ \displaystyle\lim_{x \to \infty}\frac{x^n}{e^{\lambda x}} = 0$。

B2) 给定 $\alpha > 0$，我们有
    \[
    \lim_{x\to \infty} x^\alpha \log \left(1 + \frac{1}{x}\right) = \begin{cases}
    \infty, \quad&\text{如果}\, \alpha > 1\\
    1, \quad&\text{如果}\, \alpha = 1\\
    0, \quad&\text{如果}\, 0< \alpha < 1
    \end{cases}
    \]

B3) 右极限 $\displaystyle \lim_{x\to 0^+} \displaystyle \frac{1}{x^n}e^{-\frac{1}{x^2}} = 0$。

B4) 在第九次讲义中我们证明了 $\displaystyle\lim_{x \to 0} \frac{\sin x}{x} = 1$，
    据此计算并用 $\varepsilon-\delta$ 语言证明这两个结果：
    \[
    \lim_{x\to 0} \frac{\cos x - 1}{x} \qquad\text{和}\qquad \lim_{x\to 0}\frac{\cos x - 1}{x^2/2}.
    \]

### 习题C：函数的零点

C1) 证明，$x^3+2x-1 = 0$ 恰有一个根并且落在 $(0,1)$ 内。

C2) 设 $0 \leqslant \lambda < 1$，$b>0$，判断方程 $x - \lambda \sin x = b$ 是否有根。

C3) 证明，$\sin x = \dfrac{1}{x}$ 有无穷多个根。

C4) 假设 $f \in C([0,2])$ 并且 $f(0) = f(2)$。证明，$f(x) - f(x+1) = 0$ 在 $[0,1]$ 上有根。

C5) 证明，方程 $x^3+3=e^x$ 在 $\mathbb{R}$ 上一定有解。

C6) 假设 $f\colon [0,2]\rightarrow \mathbb{R}$ 是连续函数并且 $f(0)=f(2)$，那么存在 $x\in [1,2]$，
    使得 $f(x)=f(x-1)$。

C7) $f\colon \mathbb{R}\rightarrow \mathbb{R}$ 是函数，对 $c\in \mathbb{R}$，
    我们定义 $f^{-1}(c)=\{x\in \mathbb{R}\mid f(x)=c\}$。
    证明，如果对任意 $c\in \mathbb{R}$，我们都有 $|f^{-1}(c)|=2$，那么 $f$ 不是连续函数。

C8) 假设连续函数 $f\colon [a,b]\rightarrow \mathbb{R}$ 是单射。
    如果 $f(a)<f(b)$，证明，$f$ 是严格递增的。

### 习题D：极限计算

试计算下面函数的极限，其中 $m$ 和 $n$ 是正整数（题号除以5余1的请写出解答过程，其余可以只给答案）：
\[
\begin{aligned}
& (1) \lim_{x \to +\infty} \frac{a_0 x^n + a_1 x^{n-1} + \cdots + a_n}{b_0 x^m + b_1 x^{m-1} + \cdots + b_m}, \quad a_0 \neq 0, b_0 \neq 0 && \\
& (2) \lim_{x \to +\infty} \frac{x^b}{a^x}, \quad a > 1, b > 0 && (3) \lim_{x \to +\infty} \frac{\log x}{x^a}, \quad a > 0\\
& (4) \lim_{x \to 0^+} x^a \log x, \quad a > 0 && (5) \lim_{x \to \infty} \left(\frac{x^2 + 1}{x^2 - 2}\right)^{x^2}\\
& (6) \lim_{x \to +\infty} (x - \sqrt{x^2 - a}) && (7) \lim_{x \to +\infty} \sqrt{x+1} - \sqrt{x-1} \\
& (8) \lim_{x \to 0} \frac{(1+x)(1+2x)(1+3x)- 1}{x} && (9) \lim_{x \to 1} \frac{x + x^2 + \cdots + x^n - n}{x - 1}\\
& (10) \lim_{x \to 1} \frac{x^{100} - 2x + 1}{x^{50} - 2x + 1} && (11) \lim_{x \to 1} \left(\frac{m}{1 - x^m} - \frac{n}{1 - x^n}\right),\\
& (12) \lim_{x \to 0}\frac{(1+x)^a - 1}{x} && (13) \lim_{x \to 1} \frac{x^a - 1}{x^b - 1}\\
& (14) \lim_{x \to +\infty} (\log x)^{1/x} && (15) \lim_{x \to 0} \left(\frac{a^x + b^x}{2}\right)^{1/x}, \quad a > 0, b > 0\\
& (16) \lim_{x \to +\infty} \left(\sqrt[k]{(x+a_1)(x+a_2)\cdots(x+a_k)} - x\right) && (17)  \lim_{x \to 0} \frac{(\sqrt{1+x^2} + x)^n - (\sqrt{1+x^2} - x)^n}{x}\\
& (18) \lim_{x\to \frac{\pi}{2}} \left(\sin x\right)^{\tan x} && (19) \lim_{x\to \infty} \displaystyle\left(\sin \frac1x + \cos \frac1x\right)^x\\
& (20) \lim_{x \to \infty} \displaystyle \frac{\sqrt{x+\sqrt{x+\sqrt{x}}}}{x^\alpha}, \alpha > 0 && (21) \lim_{x \to 0+} \displaystyle\frac{\sqrt{x+\sqrt{x+\sqrt{x}}}}{x^\alpha}, \alpha > 0.
\end{aligned}
\]

## 思考题（不交作业）

### 问题E

假设 $A\subset \mathbb{R}$ 是一个可数集。
证明，存在单调函数 $f\colon \mathbb{R}\rightarrow \mathbb{R}$，使得 $f$ 的不连续点的集合恰好是 $A$。

### 问题F

函数 $f\colon [0,1]\rightarrow [0,1]$ 是递增的函数，证明，$f$ 有不动点。

### 问题G：关于 $[0,1]$ 上同胚的共轭问题

考虑 $[0,1]$ 到自身的自同胚，即
\[
{\rm Homeo}([0,1])=\bigl\{f\colon [0,1]\rightarrow [0,1]\bigm| \text{$f$ 为连续的双射}\bigr\}
\]
我们知道对于任意的 $f\in {\rm Homeo}([0,1])$，$f^{-1}\in {\rm Homeo}([0,1])$。
假设 $f\in {\rm Homeo}([0,1])$ 并且 $0$ 和 $1$ 是它仅有的不动点，
$g\in {\rm Homeo}([0,1])$ 并且 $0$ 和 $1$ 也是它仅有的不动点，证明，存在 $h\in {\rm Homeo}([0,1])$，
使得
\[
h^{-1}\circ f\circ h =g.
\]
