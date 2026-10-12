---
title: 凸函数
categories: [实分析, 凸分析]
---

**凸函数**是从 [[Euclid 空间]]的子集到[[实数]]的[[函数]]，
其[[图像]]是“向下凸出”的。例如，函数
\[
\begin{aligned}
  f \colon \mathbb{R}^2 & \longrightarrow \mathbb{R}, \\
  (x, y) & \longmapsto x^2 + y^2
\end{aligned}
\]
是凸函数，因为其图像是个向下凸出的抛物面。

## 定义

::: definition {@thm:定义}
令 $X\subset \mathbb{R}^n$ 为[[凸集]]。
称[[函数]] $f \colon X \to \mathbb{R}$ 为**凸函数**，如果满足如下条件：

- 对于任意 $x_1,x_2\in X$ 及 $λ\in [0,1]$，有
  \[
  f(λ x_1+(1-λ)x_2)\leq λ f(x_1)+(1-λ)f(x_2).
  \]
  上述条件也可以借助[[矩阵]]来简写：令 $\bm{t} = (\lambda, 1 - \lambda)$，
  $\bm{x} = {x_1 \choose x_2}$，则
  \[
  f (\bm{tx}) \leq \bm{t} f(\bm{x}).
  \]

称 $f$ 为**严格凸函数**，
如果满足如下条件：

- 对于任意 $x_1 \neq x_2 \in X$ 及 $λ \in \mathopen{]} 0,1 \mathclose{[}$，有
  \[
  f(λ x_1+(1-λ)x_2) < λ f(x_1)+(1-λ)f(x_2).
  \]

称 $f$ 为**凹函数**、**严格凹函数**，若 $-f$ 是凸函数、严格凸函数。
:::

## 性质

### 基本性质

- 凸函数之集在加法、乘正实数下封闭。

- 对凸集 $X \subset \mathbb{R}$ 和凸函数 $f \colon X \to \mathbb{R}$，

  - 对于任何实数 $r\in\mathbb{R}$，子集 $\set{x\in X\mid f(x) \leq r}$ 是[[凸集]]。

  - 若 $f$ 是[[可微函数]]，则 $f$ 的图像位于其在任一点处切平面的上方。

- [[线性函数]]都是凸函数，也是凹函数。

- （**[[Jensen 不等式]]**）
  设 $X \subset \mathbb{R}^n$ 为凸集，
  $f\colon X \rightarrow \mathbb{R}$ 是凸函数。
  则对任意的 $x_1,\cdots,x_n \in X$ 和任意的
  $t_1, \cdots, t_n \in [0,1]$，其中 $t_1+t_2+\cdots+t_n=1$，有
  \[
  f(t_1x_1+\cdots +t_nx_n) \leq t_1f(x_1)+\cdots +t_nf(x_n).
  \]

### 由二阶导数判别

::: proposition
设 $X \subset \mathbb{R}^n$ 为[[凸集|凸]][[开集]]，
$f\colon X → \mathbb{R}$ 是 [[连续可微函数|$C^2$ 函数]]。
对 $x \in X$，记 $\nabla^2 f (x)$ 为 [[Hesse 矩阵]]。

- 若对任意 $x \in X$，$\nabla^2 f (x)$ 为[[半正定矩阵]]，则 $f$ 是凸函数。

- 若对任意 $x \in X$，$\nabla^2 f (x)$ 为[[正定矩阵]]，则 $f$ 是严格凸函数。

:::

```terms
凸函数:
  en: convex function
```
