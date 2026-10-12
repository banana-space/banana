---
title: '$\beta$-$\gamma$ 系统'
aliases: [beta-gamma 系统]
categories: [共形场论]
notices:
  - name: 问题
    items:
      - “共形块”一节需要扩充。
      - “顶点代数描述”一节命题给出的分次与共形向量下，$\beta$、$\gamma$ 的共形权重似乎分别为 $1-\lambda$、$\lambda$，与“基本性质”一节中 $\beta$、$\gamma$ 的共形维数分别为 $\lambda$、$1-\lambda$ 的约定相反。
---

**$\bm\beta$-$\bm\gamma$ 系统**是一种二维[[共形场论]]。
它与 [[$b$-$c$ 系统]]定义几乎完全相同，
只是它描述 [[Bose 场]]而非 [[Fermi 场]]。

## 定义

::: definition
$\beta$-$\gamma$ 系统是一种量子场论，
它的[[场 (物理)|场]]形如
\[
(\beta, \gamma) \in \Omega^{1, 0} (X) \oplus \Omega^{0, 0} (X),
\]
其中 $X$ 是 [[Riemann 面]]。它的[[作用量]]密度是
\[
\mathcal{L} \colon (\beta, \gamma) \mapsto \beta \wedge \bar{\partial} \gamma.
\]
并且 $\beta$、$\gamma$ 均是 [[Bose 场]]。
:::

## 性质

### 基本性质

$\beta$-$\gamma$ 系统的经典运动方程可以求出。

::: proposition [运动方程]
$\beta$-$\gamma$ 系统的[[Euler–Lagrange 方程|运动方程]]是
\[
\bar{\partial} \beta = \bar{\partial} \gamma = 0,
\]
即要求 $\beta$ 和 $\gamma$ 都是全纯形式。
:::

此外，$\beta$-$\gamma$ 系统具有好的对称性，
使它成为二维[[共形场论]]。

::: proposition
如 $X$ 取为复平面 $\mathbb{C}$，对任意实数 $\lambda$，
任意[[全纯函数|全纯映射]] $z \to z'$，作用量密度在变换
\[
\begin{aligned}
  \beta'(z') &= (\frac{dz'}{dz})^{-\lambda}\beta(z) \\
  \gamma'(z') &= (\frac{dz'}{dz})^{-(1-\lambda)}\gamma(z)
\end{aligned}
\]
之下不变。即此时 $\beta$、$\gamma$ 分别成为共形维数为
$\lambda$、$1-\lambda$ 的[[共形场]]。
:::

### 顶点代数描述

顶点代数刻画了共形场的局部信息，
$\beta$-$\gamma$ 系统中也有此一结构。

::: definition
在下面的叙述中，[[Lie 代数]] $\mathfrak{g}$ 取为
\[
\mathfrak{g} = \bigoplus_{n \in \mathbb{Z}} \mathbb{C}\gamma_n \oplus
\bigoplus_{n \in \mathbb{Z}} \mathbb{C}\beta_n \oplus \mathbb{C}\mathbf{1}
\]
其中 Lie 括号取为
\[
[\beta_n, \gamma_m] = \delta_{n, -m}\mathbf{1}, \quad
[\beta_n, \mathbf{1}] = [\gamma_m, \mathbf{1}] = 0, \quad
\forall n, m \in \mathbb{Z}
\]
记 $U(\mathfrak{g})$ 为它的[[泛包络代数]]。

令 $\mathfrak{b}$ 为 $\mathfrak{g}$ 中由 $\beta_n$（$n \geq 0$）、
$\gamma_m$（$m > 0$）和 $\mathbf{1}$ 生成的子代数，
它有一维表示 $\mathbb{C}$，满足在表示中 $\beta_n$、$\gamma_m$
均为 $0$，而 $\mathbf{1}$ 为恒等映射。
:::

::: definition
$\beta$-$\gamma$ 系统的顶点代数为四元组
$(\mathscr{V}, Y, T, |0\rangle)$，其中

- $\mathscr{V} = U(\mathfrak{g}) \otimes_{U(\mathfrak{b})} \mathbb{C}$，
  为上述 Lie 代数 $\mathfrak{g}$ 的表示（类似于 Verma 模），
  且 $\mathscr{V}$ 中所有元素均为偶元素。
  注意由 [[PBW 定理]]它作为线性空间同构于多项式环
  $\mathbb{C}[\beta_{-1}, \cdots, \beta_{-n}, \cdots,
        \gamma_0, \cdots, \gamma_{-n}, \cdots]$。

- [[真空态]] $|0\rangle = 1 \otimes 1 \in \mathscr{V}$。

- 记 $\beta(z) = \sum_{n \in \mathbb{Z}} \beta_n z^{-n-1}$，
  $\gamma(z) = \sum_{n \in \mathbb{Z}} \gamma_n z^{-n}$，
  则[[态场对应]]为
  \[
  Y(\beta_{-n}, z) = \frac{1}{(n-1)!} \partial^{n-1}_z\beta(z), \quad
  Y(\gamma_{-n}, z) = \frac{1}{n!} \partial^n_z\gamma(z)
  \]
  一般的态相应的场由[[顶点代数]]的性质，由上述场的[[正规序|正规乘积]]描述。

- 平移算子
  \[
  T = - \sum_{n \in \mathbb{Z}} n \gamma_n \beta_{-1-n}
  = - \sum_{n \in \mathbb{Z}} n \beta_{-1-n} \gamma_n
  \]
  注意它虽然不是 $U(\mathfrak{g})$ 中元素，
  但形式地作用于 $\mathscr{V}$ 中元素后，
  仍可以得到 $\mathscr{V}$ 中良好定义的元素。

:::

上述顶点代数可以赋予共形顶点代数的结构：

::: proposition
取定整数 $\lambda$，取

- $\mathscr{V}$ 的分次由
  \[
  \deg \beta_n = - n - \lambda, \quad
  \deg \gamma_m = - m + \lambda \quad
  n < 0, m \leq 0
  \]
  给出。

- $L = (1 - \lambda)\beta_{-1}\gamma_{-1} -
  \lambda \gamma_0 \beta_{-2}$。

则上述信息赋予 $\mathscr{V}$ 以共形顶点代数的结构。
此时[[中心荷]] $c = 12 \lambda^2 - 12 \lambda + 2$。
:::

如果放宽 $\mathscr{V}$ 的分次必须是整数的条件，
$\lambda$ 可以取为任意实数，而仍然满足共形顶点代数的一切条件。

## 共形块

```terms
'$\beta$-$\gamma$ 系统':
  en: '$\beta$-$\gamma$ system'
```
