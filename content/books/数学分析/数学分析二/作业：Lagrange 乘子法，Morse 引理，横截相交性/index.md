---
title: 作业：Lagrange 乘子法，Morse 引理，横截相交性
---

## A. 课堂相关

A1) 对任意的 $M$ 上的光滑函数 $f$，任意的 $M$ 上的光滑切向量场 $X$ 和 $Y$，
    我们可以定义它们之间的乘法和加法：
    \[
    (fX)(p)=f(p)X(p), \ \ (X+Y)(p)=X(p)+Y(p).
    \]
    证明，$fX$ 和 $X+Y$ 都是 $M$ 上的光滑向量场。

A2) $\Omega\subset \mathbb{R}^n$ 为凸集，$f$ 和 $g$ 为 $\Omega$ 上的凸函数。试证明，
    \[
    \max(f,g)\colon\Omega \rightarrow \mathbb{R}, \ \ x \mapsto \max(f(x),g(x))
    \]
    也是凸函数。

A3) $I\subset \mathbb{R}$ 是区间，$g\colon\mathbb{R}\rightarrow \mathbb{R}$ 是递增的凸函数，
    $f\colon\Omega \rightarrow I$ 也是凸函数。试证明，$g\circ f$ 是 $\Omega$ 上的凸函数。

- A4*) 假设 $M\subset \mathbb{R}^m$，$N\subset \mathbb{R}^n$ 是子流形，
  $f\colon M\rightarrow N$ 是光滑映射。证明，$df\colon TM\rightarrow TN$ 是子流形之间的光滑映射。

  （这是一个重要的命题，如果你搞清楚它的细节，那么你就搞清楚了整个子流形的理论）

A5) 在 $\mathbb{R}^3$ 中考虑方程
    \[
    z^3+2z+e^{z-x-y^2}=\cos(x-y+z)
    \]
    所定义的集合 $\Sigma$。
    证明，
    存在开集 $U\subset \mathbb{R}^2$ 使得 $0\in U$ 以及函数
    $\varphi\colon U\rightarrow \mathbb{R}$，
    使得 $\Sigma \cap \{(x,y,z)|(x,y )\in U\}$ 是函数 $\varphi(x,y)$ 的图像
    $\{(x,y,z)|z=\varphi(x,y),(x,y) \in U\}$。
    进一步计算 $\Sigma \cap \{(x,y,z)|(x,y)\in U\}$ 在 $(0,0,\varphi(0,0))$ 处的切空间并计算
    $\varphi$
    的Hesse矩阵。

## B. Lagrange乘子法

B1) 求下列函数的条件极值：

    1. $f(x) = xy + yz + xz$，$xyz = 1, x,y,z > 0$。

    2. $f(x) = \sin x \sin y \sin z$，$x + y + z = \pi/2, x,y,z > 0$。

    3. 二次型 $\displaystyle f(x) = \sum_{i,j=1}^{n} a_{ij} x_i x_j$，其中 $a_{ij} = a_{ji}$，
       求 $f$ 在单位球面 $\mathbf{S}^{n-1}$ 上的极值。

B2) 求椭球 $\displaystyle
    \frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1$ 的最大体积的内接长方体。

B3) $f$ 是 $\mathbb{R}$ 上的非负的连续函数并且如下的反常积分的值为 $1$：
    \[
    \int_{-\infty}^\infty f(x)dx=1.
    \]
    假设 $[a,b]$ 是使得 $\displaystyle \int_{a}^bf(x)dx=\frac{1}{2}$ 的长度最短的区间。证明，
    \[
    f(a)=f(b).
    \]

B4) 假定 $n\in \mathbb{Z}_{\geqslant 1}$ 和 $a\in \mathbb{R}_{>0}$ 是给定的。考虑 $n$ 元函数
    \[
    f(x_1,\cdots,x_n)=\sum_{k\leqslant n}x_k\log x_k.
    \]
    试求其最小值，其中，我们要求 $x_1+\cdots+x_n=a$。

B5) 给定 $n$ 个正实数 $\alpha_1,\cdots,\alpha_n$，它们满足 $\alpha_1+\alpha_2+\cdots+\alpha_n=1$。
    利用Lagrange乘子法证明：对任意的正实数 $x_1,\cdots,x_n$，我们都有
    \[
    \prod_{k=1}^nx_k^{\alpha_k}\leqslant \sum_{k=1}^n\alpha_k x_k.
    \]

## C. 实对称矩阵的对角化

我们在 $\mathbb{R}^n$ 上用坐标 $x_1,\cdots,x_n$ 并假设它上面配备了标准的Euclid内积，
我们令 $e_i=\dfrac{\partial}{\partial x_i}$，它们构成了一个单位正交基。
我们用 $\mathbf{S}^{n-1}$ 表示 $\mathbb{R}^n$ 中的单位球面。
假设 $A=(A_{ij})_{1\leqslant i,j \leqslant n}$ 是给定的实对称矩阵。我们定义函数
\[
f\colon\mathbb{R}^n-\{0\}\rightarrow\mathbb{R}, \ \ x\mapsto f(x)=\frac{\langle A\cdot x, x\rangle}{|x|^2}.
\]

C1) 证明，$\mathbf{S}^{n-1}$ 是 $\mathbb{R}^n$ 的一个紧的子流形。

C2) 证明，$f$ 的最大值可以在 $\mathbf{S}^{n-1}$ 上取到。
    我们令 $v_1\in \mathbf{S}^{n-1}$ 为这样的一个最大值。

C3) 证明，$df(v_1)\colon\mathbb{R}^n\rightarrow \mathbb{R}$ 可以如下表示：
    \[
    df(v_1)(x)=2\langle A\cdot v_1, x\rangle- 2\langle A\cdot v_1, v_1\rangle\langle v_1, x\rangle.
    \]

C4) 我们用 $v_1^{\perp}$ 表示和 $v_1$ 垂直的向量构成的线性子空间。
    证明，对任意的 $x \in v_1^{\perp}$，我们有 $x\in \big(A\cdot v_1\big)^\perp$。

C5) 证明，$f(v_1)$ 是 $A$ 的特征值并且 $v_1$ 是相应的特征向量。

C6) 证明，$A$ 有 $n$ 个两两正交的（非零）特征向量 $v_1,\cdots,v_n\in \mathbb{R}^n$（提示：
    通过约化到 $v_1^{\perp}$ 上对 $n$ 进行归纳）

C7) 证明，存在正交矩阵 $P$，使得 $P\cdot A \cdot P^{-1}$ 是对角矩阵。

## D. Morse引理

$\Omega\subset\mathbb{R}^n$ 是开集，$f\in C^\infty(\Omega)$，$\overline{x}\in \Omega$。
如果 $df(\bar{x})=0$，我们就称 $\bar{x}$ 是 $f$ 的一个**临界点**。
如果 $\bar{x}$ 是 $f$ 的临界点并且Hesse矩阵
$\nabla^2f(\bar{x}) = \left(\dfrac{\partial^2 f}{\partial x_i \partial x_j}(\bar{x})\right)$
是可逆的，我们就称 $\bar{x}$ 是一个**非退化的临界点**。
在非退化临界点 $\bar{x}$ 附近 $f$ 有Taylor 展开
\[
f(x) = f(\bar{x}) + \frac{1}{2}\sum_{1\leqslant i,j\leqslant n}\frac{\partial^2 f}{\partial x_i \partial x_j}(\bar{x})(x_i-\bar{x}_i)(x_j - \bar{x}_j) + o(|x-\bar{x}|^2).
\]
这个练习的目的是证明Morse引理，粗略的说，我们可以换一下坐标系，使得Hesse矩阵是对角的。
引理的精确叙述如下：

*设 $f$ 是开集 $\Omega \subset \mathbb{R}^n$ 上的光滑函数，$\bar{x}$ 是 $f$ 的非退化临界点。
那么，存在 $\bar{x}$ 的一个开邻域 $U$，$\mathbb{R}^n$ 原点的开邻域 $V$，
以及微分同胚 $\varphi\colon V \to U$ 使得对每个 $(y_1,\cdots, y_n) \in V$，都有
\[
\begin{aligned}
(f \circ \varphi)(y) = f(\bar{x}) - \sum_{k=1}^{m} (y_k)^2 + \sum_{k=m+1}^{n} (y_k)^2, \end{aligned}
\]
其中整数 $m$ 称为临界点 $\bar{x}$ 的**指标**。*

D1) （Hadamard 引理）$\Omega \subset \mathbb{R}^n$ 是凸的开集，$0 \in \Omega$，
    函数 $f \in C^{\infty}(\Omega)$ 且 $f(0) = 0$。
    证明，存在光滑函数 $g_i \in C^{\infty}(\Omega)$，使得对任意的 $(x_1,\cdots,x_n)\in \Omega$，都有
    \[
    f(x_1,\cdots,x_n) = \sum_{i=1}^{n} x_i g_i(x_1,\cdots,x_n)
    \]
    并且 $g_i(0) = \dfrac{\partial f}{\partial x_i}(0)$。
    （提示：在射线 $t\mapsto (tx_1,\cdots,tx_n)$ 上对 $f$ 用Newton–Leibniz法则）

D2) （条件同上）如果 $f(0) = 0$ 并且 $0$ 是 $f$ 的非退化临界点，证明，
    存在 $0$ 的开邻域 $U\subset \Omega$ 以及 $U$ 上 $n^2$ 个光滑函数
    $h_{ij}$（$1 \leqslant i,j \leqslant n$），它们满足

    - 对任意的指标 $i$ 和 $j$，$h_{ij} = h_{ji}$；

    - 对任意的 $(x_1,\cdots,x_n)\in U$，矩阵 $\Big(h_{ij}(x_1,\cdots,x_n)\Big)$ 是可逆的；

    - 对任意的 $(x_1,\cdots,x_n)\in U$，有
      \[
      f(x_1,\cdots, x_n) = \sum_{i,j=1}^{n} x_i x_j h_{ij}(x_1,\cdots,x_n).
      \]

D3) 证明，存在 $0$ 的邻域 $U_1\subset U$ 和 $V_1$（它的坐标用 $u_1,\cdots, u_n$），
    微分同胚 $\varphi_1\colon V_1\rightarrow U_1$，
    光滑函数 $H_{ij}$（$2 \leqslant i,j \leqslant n$），使得
    \[
    (f \circ \varphi_1)(u) =c_1 (u_1)^2 + \sum_{i,j=2}^{n} u_i u_j H_{ij}(u),\ \ u = (u_1,\cdots,u_n) \in U_1.
    \]
    其中常数 $c_1 = 1$ 或者 $-1$ 并且 $H_{ij} = H_{ji}$。

D4) （用归纳法）对于 $r\leqslant n-1$，证明，
    存在 $0$ 的邻域 $U_r\subset U$ 和 $V_r$（它的坐标用 $u_1,\cdots, u_n$），
    微分同胚 $\varphi_r\colon V_r\rightarrow U_r$，
    光滑函数 $H_{ij}$（$r+1 \leqslant i,j \leqslant n$），使得
    \[
    (f \circ \varphi_r)(u) = \sum_{k = 1}^{r} c_k (u_k)^2 + \sum_{i,j=r+1}^{n} u_i u_j H_{ij}(u), \quad u = (u_1,\cdots,u_n) \in U_r,
    \]
    其中 $c_i \in \{ \pm 1 \}$ 是常数并且 $H_{ij} = H_{ji}$。（这就证明了Morse引理）

D5) （非退化临界点是孤立的）证明，如果 $\bar{x}$ 是 $f$ 的非退化临界点，
    那么存在 $\bar{x}$ 的开邻域 $U$，使得 $\bar{x}$ 是 $f$ 在 $U$ 上唯一的临界点。

D6) $\bar{x}$ 是 $f$ 的非退化临界点。
    证明，
    指标 $m$ 与局部坐标 $\varphi$ 的选取无关并且等于 $\nabla^2f(\bar{x})$
    的负特征值的个数（按重数计算）。（我们注意到，Hesse矩阵本身是依赖于坐标选取的）

## T. 横截相交性（transversality）（选做）

假设 $M_1, M_2 \subset M \subset \mathbb{R}^n$ 均为微分子流形，如果对所有的 $p \in M_1 \cap M_2$，
我们都有
\[
T_p M_1 + T_p M_2 = T_p M,
\]
我们就称 $M_1$ 与 $M_2$（作为 $M$ 的子流形）**横截相交**（特别地，如果 $M_1\cap M_2=\emptyset$，
它们也是横截相交），记作 $M_1 \pitchfork M_2$。
我们的目标是证明，如果 $M_1 \pitchfork M_2$，那么 $M_1 \cap M_2 $ 是 $M$ 的子流形。

T1) 试找出微分子流形 $M_1, M_2 \subset \mathbb{R}^n$，使得 $M_1 \cap M_2$ 不是子流形。

T2) 假设 $L_1, L_2$ 是 $V=\mathbb{R}^n$ 的线性子空间并且 $L_1+L_2=V$。
    证明，$L_1 \cap L_2$ 是 $V$ 的线性子空间并且
    \[
    \operatorname{codim} L_1 \cap L_2 = \operatorname{codim} L_1 + \operatorname{codim} L_2.
    \]

T3) $C_1, C_2 \subset \mathbb{R}^2$ 是光滑曲线。
    证明，
    $C_1 \pitchfork C_2$ 的充要条件是 $C_1, C_2$
    在它们的所有交点上都不相切（即它们在相交处的切空间不同）。

T4) $C_1, C_2 \subset \mathbb{R}^3$ 是光滑曲线。
    证明，$C_1 \pitchfork C_2$ 的充要条件是 $C_1 \cap C_2 = \emptyset$。

T5) 横截相交性的概念可以延拓到映射：
    假设 $M\subset \mathbb{R}^m$ 和 $N \subset \mathbb{R}^n$ 是微分子流形，
    $f\colon N \to M$ 是光滑映射，$S \subset M$ 是子流形。如果对所有的 $p \in f^{-1}(S)$，都有
    \[
    df(T_p N) + T_{f(p)} S = T_{f(p)} M ,
    \]
    我们称光滑映射 $f$ 与 $S$ 是**横截相交的**并记作 $f \pitchfork S$。

    微分子流形 $M_1, M_2 \subset M $，我们用 $i_1\colon M_1 \subset M$ 表示包含映射。
    证明，$M_1\pitchfork M_2$ 等价于 $i_1 \pitchfork M_2$。

- T6*) 证明，如果 $M_1, M_2 \subset M \subset \mathbb{R}^n$ 是子流形并且横截相交，
  那么 $M_1\cap M_2$ 是 $M$ 的子流形并且
  \[
  {\rm codim}M_1+{\rm codim}M_2={\rm codim}M_1\cap M_2.
  \]
  （提示：在局部上用函数的零点集来定义子流形）

- T7*) $M\subset \mathbb{R}^m$ 和 $N \subset \mathbb{R}^n$ 是微分子流形，$S \subset M$ 是子流形，
  $f\colon N \to M$ 是光滑映射并且 $f \pitchfork S$。证明，$f^{-1}(S)$ 是 $N$ 的子流形并且
  \[
  \operatorname{dim} N - \operatorname{dim} f^{-1}(S) = \operatorname{dim} M - \operatorname{dim} S.
  \]
  （提示：如果局部上 $S = g^{-1}(0)$，其中 $g\colon \mathbb{R}^{m} \to \mathbb{R}^{m-{\rm dim}S}$，
  那么 $f^{-1}(S) = (g \circ f)^{-1}(0)$）

T8) 如果微分子流形 $M_1, M_2 \subset M $ 横截相交，那么
    \[
    T_p (M_1 \cap M_2) = T_p M_1 \cap T_p M_2.
    \]

T9) 如果 $N$ 是紧的，$f \pitchfork S$，证明：对于任意的光滑映射
    \[
    F\colon N \times [0,1] \to M,
    \]
    满足 $F(x,0) = f(x)$（$F$ 称为 $f$ 的一个光滑同伦），存在 $\varepsilon > 0$，
    使得对任意的 $t \in [0,\varepsilon)$，都有 $f_t \pitchfork S$，其中 $f_t(x) = F(x,t)$。

    （这说明横截性在小形变下是稳定的）

T10) 证明：设 $f\colon [0,1] \to \mathbb{R}^3$ 是不自相交的光滑曲线，
     $S \subset \mathbb{R}^3$ 是光滑曲面。
     证明，对于 $\varepsilon > 0$，存在 $f$ 的光滑同伦 $f_t$，使得

     - $f_1 \pitchfork S$；

     - $\displaystyle \sup_{t,x \in [0,1]} |f_t(x) - f(x)| < \varepsilon$。

::: remark* (寄语)
Analytical geometry has never existed. There are only people who do linear algebra badly, by taking coordinates and this they call analytical geometry.

<align right>
——Jean Dieudonné
</align>
:::
