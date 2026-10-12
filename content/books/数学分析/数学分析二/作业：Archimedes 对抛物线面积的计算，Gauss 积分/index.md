---
title: 作业：Archimedes 对抛物线面积的计算，Gauss 积分
---

## Fubini定理与积分的计算

### A. 经典习题，计算与反例

我们假设 $(X,\mathcal{A},\mu)$ 和 $(Y,\mathcal{B},\nu)$ 是测度空间并且 $\mu$ 和 $\nu$ 是
$\sigma$-有限的。

- A1)（Fubini定理的反例）函数 $f(x,y)$ 在 $[0,1]\times [0,1]$ 上定义：
  \[
  f(x,y)=\begin{cases}\frac{x^2-y^2}{(x^2+y^2)^2}, \ \  &(x,y)\neq (0,0);\\
  0, \ \ &(x,y)= (0,0).
  \end{cases}
  \]
  证明，
  \[
  \displaystyle \int_0^1 \left(\int_0^1 f(x,y)dy\right)dx\neq \int_0^1 \left(\int_0^1 f(x,y)dx \right)dy.
  \]
  Fubini定理的哪个条件没有被满足？

- A2)（Fubini定理的反例）我们考虑测度空间 $([0,1],\mathcal{B},m)$（Borel代数加上Lebesgue测度）和
  $([0,1],\mathcal{P}([0,1]), \mu)$，
  其中 $\mathcal{P}([0,1])$ 是 $[0,1]$ 上所有的子集所构成的 $\sigma$-代数，
  $\mu(A)$ 为 $A$ 中的元素个数。

  - 证明，$([0,1],\mathcal{P}([0,1]), \mu)$ 是测度空间但不是 $\sigma$ 有限的。

  - 我们考虑在 $[0,1]\times [0,1]$ 上定义的函数：
    \[
    f(x,y)=\mathbf{1}_{x=y}(x,y).
    \]
    证明，
    \[
    \displaystyle \int_0^1 \left(\int_0^1 f(x,y)dy\right)dx\neq \int_0^1 \left(\int_0^1 f(x,y)dx \right)dy.
    \]
    Fubini定理的哪个条件没有被满足？

- A3) 假设 $f$ 和 $g$ 是 $\mathbb{R}^1$
  上的局部上Riemann可积（即在每个闭区间上面都可积）的实值函数。对任意的 $x \in \mathbb{R}$，我们定义
  \[
  F(x)=\int_{0}^x f(s)ds, \ \  G(x)=\int_{0}^x g(s)ds.
  \]
  证明，对任意的 $a<b$，我们都有
  \[
  F(b)G(b)=F(a)G(a)+\int_a^bF(t)g(t)dt+\int_a^b G(t)f(t)dt.
  \]

- A4) 假设 $(X,\mathcal{A},\mu)$ 和 $(Y,\mathcal{B},\nu)$ 是测度空间并且 $\mu$ 和 $\nu$ 是
  $\sigma$-有限的。

  - 证明，集合 $D_\mu=\{x\in X\mid\mu(\{x\})>0\}$ 是可数的。

  - 证明，
    集合 $\Delta=\{(x,y)\in \mathbb{R}^1\times \mathbb{R}^1\mid x=y\}\subset X\times Y$ 是
    $\mathcal{A}\otimes \mathcal{B}$-可测的。

  - 证明如下的公式
    \[
    \mu\otimes \nu(\Delta)=\sum_{x\in D_\mu }\mu(\{x\})\nu(\{x\}).
    \]

- A5)（Archimedes，公元前三世纪）假设 $\Gamma$ 是 $y=-cx^2$ 在平面上所定义的抛物线，其中 $c>0$。
  $A,B\in \Gamma$ 是给定的两点，$AB$ 是这两点所连的线段（我们称它为 $\Gamma$ 的一条弦）。

  - 证明，$\Gamma$ 是 $\mathbb{R}^2$ 中的 $1$ 维光滑子流形。
    进一步证明，存在唯一的点 $C\in \Gamma$，使得 $\Gamma$ 在 $C$ 处的切线与 $AB$ 平行。

  - 假设 $C$ 的坐标是 $(C_1,C_2)$，那么由 $x=C_1$ 定义的直线与 $AB$ 相交于 $AB$ 的中点。

  - 证明，由 $\Gamma$ 与 $AB$ 所围成的图形的面积是三角形 $ABC$ 面积的 $\dfrac{4}{3}$ 倍。

- A6)（Gauss积分的计算）试计算下面的积分：
  \[
  \begin{aligned}
  \bullet& ~\int_{x^2 + y^2 \leqslant R^2} e^{-(x^2+y^2)} dxdy, ~\text{其中}~R>0; \\
  \bullet& ~ \int_{\mathbb{R}} e^{-ax^2 + bx +c} dx, ~\text{其中}~a > 0;\\
      \bullet& ~\int_{\mathbb{R}^n} \exp(-\frac{1}{2} \sum_{i,j=1}^{n} A_{ij} x_i x_j) dx, ~\text{其中}~ A = (A_{ij})~\text{是 $n\times n$ 的正定（对称）矩阵};\\
    \bullet& ~\int_{\mathbb{R}^n} \exp(-\frac{1}{2} \sum_{i,j=1}^{n} A_{ij} x_i x_j + \sum_{i=1}^{n} B_i x_i) dx, ~\text{其中}~A = (A_{ij})~\text{是 $n\times n$ 的正定（对称）矩阵.}
  \end{aligned}
  \]

- A7)* 假设 $f\colon\mathbb{R}^n\rightarrow \mathbb{R}$ 是Borel-可测的函数，证明，
  存在零测集（Lebesgue意义下）$N\subset \mathbb{R}$，使得对任意的 $y\notin N$，我们有
  \[
  m\left(\{x\in \mathbb{R}^n\mid f(x)=y\}\right)=0.
  \]

## 积分的计算

::: remark* [符号约定]
人们通常用 $\displaystyle \iint$ 表示在 $\mathbb{R}^2$ 上的区域上积分，
用 $\displaystyle \iiint$ 表示在 $\mathbb{R}^3$ 上的区域上积分，
这和平时的一个积分号 $\displaystyle \int$ 表达的意思是一致的。
:::

### B. 计算积分：第一组

\[
\begin{aligned}
  & (B1) \iint_{[0,\pi/2] \times [0,1]} x \cos (xy) dxdy && (B2) \iint_{[0,\pi]^2} \sin (x+y)dxdy \\
  & (B3) \iint_{[3,4] \times [1,2]} \frac{dxdy}{(x+y)^2} && (B4) \iint_{[0,2]^2} [x+y] dxdy \\
  & (B5) \iint_{[0,\pi]^2} |\cos(x+y)|dxdy && (B6) \iint_{\{|x| + |y| \leqslant 1\}} e^{x+y} dxdy\\
  \end{aligned}
\]
\[
\begin{aligned}
  & (B7) \iint_{\{x^2 + y^2 \leqslant a^2\}} |xy| dxdy && (B8) \iint_{\{x^2 + y^2 \leqslant a^2\}} x \cos (xy) dxdy.  \\
  & (B9) \iint_{\{\frac{x^2}{a^2} + \frac{y^2}{b^2} \leqslant 1 \} } \sqrt{1 - \frac{x^2}{a^2} - \frac{y^2}{b^2}} dxdy && (B10) \iint_{\{x^4 + y^4 \leqslant 1\} } |xy| dxdy\\
  & (B11) \iint_{\{ x^2 + y^2 \leqslant x + y \}} \sqrt{x^2 + y^2} dxdy && (B12) \iint_{\{ x^2 + y^2 \leqslant Rx \}} \sqrt{R^2 - x^2 - y^2} dxdy.
  \end{aligned}
\]

### C. 计算积分：第二组

\[
\begin{aligned}
  & (C1) \iint_D y^2 dxdy, \quad D \text{由旋轮线} \{ (a(t-\sin t), a(1-\cos t)), t \in [0,2\pi] \} \text{与} y = 0 \text{围成}.  \\
  & (C2) \iint_D e^{\frac{y}{x+y}} dxdy, \quad D \text{是以} (0,0), (0,1), (1,0) \text{为顶点的三角形}.  \\
  & (C3) \iint_D (x-y)^2 \sin (x+y) dxdy, \quad D \text{是以} (\pi,0), (2\pi,\pi), (\pi,2\pi),(0,\pi) \text{为顶点的正方形}. \\
  & (C4) \iint_D x^2 + y^2 dxdy, \quad D \text{由曲线} x^2 - y^2 = 1, x^2 - y^2 = 2, xy = 1, xy = 2 \text{围成}.
    \end{aligned}
\]
\[
\begin{aligned}
  & (C5) \iint_D \frac{1}{xy}dxdy, \quad D \text{由四条抛物线} y^2 = px, y^2 = qx, x^2 = ay, x^2 = by (0 < p < q, 0<a<b) \text{围成}.\\
  & (C6) \iiint_D \frac{dxdydz}{(1+x+y+z)^3}, \quad D = \{(x,y,z) \in \mathbb{R}^3 \mid x+y+z \leqslant 1, x,y,z \geqslant 0 \}. \\
  & (C7) \iiint_D (x^2+y^2+z^2)dxdydz, \quad D \text{由球面} x^2 + y^2 + z^2 = a^2 \text{与锥面} z = \sqrt{x^2 + y^2}  \text{围成}.\\
  & (C8)  \iiint_D zdxdydz, \quad D \text{由两个球面} x^2 + y^2 + z^2 = 2az, x^2 + y^2 + z^2 = az \text{围成}.
  \end{aligned}
\]

### D. 计算体积

计算下列集合的体积：

- D1) $n$ 维单形
  $\{ (x_1,\cdots,x_n) \in \mathbb{R}^n \mid x_1,\cdots,x_n \geqslant 0, x_1 + \cdots x_n \leqslant a  \}, a > 0$。

- D2) 心脏线 $\{ (x,y) \in \mathbb{R}^2 \mid (x^2 + y^2)^2 + 4ax(x^2 + y^2) - 4a^2y^2=0 \}$
  围成的区域面积。

- D3) 球体 $x^2 + y^2 + z^2 \leqslant a^2$ 被圆柱体 $x^2 + y^2 = ax$ 截下的立体的体积。

::: -remark [寄语]
I never failed in mathematics. Before I was fifteen I had mastered differential and integral calculus.

<align right>
—— Albert Einstein
</align>
:::
