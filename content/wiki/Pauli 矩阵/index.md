---
title: Pauli 矩阵
categories: [Lie 理论]
notices:
  - name: 问题
    items:
      - “性质”一节中的 Lie 括号关系 $[\sigma_i, \sigma_j] = \varepsilon_{ijk} \sigma_k$ 似乎应为 $[\sigma_i, \sigma_j] = 2\mathrm i \varepsilon_{ijk} \sigma_k$。
      - “应用”一节中旋转算子的第一个表达式 $\exp\frac{S_i \hat n^i}{\mathrm i \hbar}$ 似乎缺少因子 $\theta$。
      - “应用”一节中的 $\gamma^\mu = \sigma^2 \otimes \sigma^\mu$ 似乎不满足 Minkowski 度量下 Dirac 矩阵的反对易关系，可能缺少虚数单位或符号约定的说明。
---

**Pauli 矩阵**（在相差一个虚数单位 $\mathrm{i}$ 的意义下）
是二维[[特殊酉群]]的 [[Lie 代数]] $\operatorname{\mathfrak{su}}(2)$ 的三个生成元。

Pauli 矩阵在物理学中有广泛应用，
例如它可以表示自旋 $\frac{1}{2}$ 系统的旋转，
并构造 [[Dirac 矩阵]]。

## 定义

::: definition
三个 Pauli 矩阵通常被定义为：
\[
\begin{aligned}
  \sigma_x = \sigma_1 = \begin{pmatrix}
    0 & 1 \\ 1 & 0
  \end{pmatrix},&&
  \sigma_y = \sigma_2 = \begin{pmatrix}
    0 & - \mathrm i \\ \mathrm i & 0
  \end{pmatrix},&&
  \sigma_z = \sigma_3 = \begin{pmatrix}
    1 & 0 \\ \mathrm 0 & -1
  \end{pmatrix}.
\end{aligned}
\]
:::

有时物理学家会用 [[4-矢量]] $\sigma = (I_2, \boldsymbol\sigma)$，
此时 $\sigma^0 = I_2$，$\boldsymbol\sigma = (\sigma^1, \sigma^2, \sigma^3)$，
指标写在上面表示协变性。

## 性质

Pauli 矩阵通常被认为是 $\operatorname{\mathfrak{su}}(2)$ 的生成元。
注意在物理学家的记号中，Lie 代数和数学家的记号相差一个虚数单位，
而 Lie 代数到 Lie 群的指数映射一般写成
\[
\mathfrak g \to G; X \to \exp \mathrm (\mathrm i X).
\]

Pauli 矩阵都是迹为 $0$、行列式为 $-1$ 的 Hermite 矩阵。
它们之间有 Lie 括号关系 $[\sigma_i, \sigma_j] = \varepsilon_{ijk} \sigma_k$
和反对易子 $\{\sigma_i, \sigma_j\} = 2\delta_{ij} I_2$。

## 应用

[[自旋]]为 $1/2$ 系统的角动量（在 $s, m_s$ 表象下，即 $\ket{\pm}$）
通常可用 Pauli 矩阵写作 $S_i = \hbar \sigma_i / 2$，这里 $\hbar$ 是 [[Planck 常量]]。
在该表象下，绕单位矢量 $\hat n$
旋转 $\theta$ 角度的算子可写成
\[
\exp\frac{S_i \hat n^i}{\mathrm i \hbar}
= \exp \left(
  -\frac{i \theta \hat n^i \sigma_i}{2}
  \right)
= I_2 \cos \frac \theta 2 - \mathrm i \sigma_i \hat n^i \sin \frac \theta 2.
\]

Pauli 矩阵可以用于构造 [[Dirac 矩阵]] $\gamma^\mu$（$\mu = 0, 1, 2, 3$）：
\[
\gamma^\mu = \sigma^2 \otimes \sigma^\mu.
\]

Pauli 矩阵可以用来表示[[四元数]]：
\[
\mathbb H \to M_{2 \times 2}(\mathbb C);
\quad
x^0 + x^1 \mathrm i + x^2 \mathrm j + x^3 \mathrm k
\mapsto
x^0 I_2 + \mathrm i x^i \sigma_i.
\]
