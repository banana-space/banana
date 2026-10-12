---
title: Cochran 定理
---

**Cochran 定理**是数理统计中的一个定理，
它给出了非中心 $\chi^2$ 分布的随机变量表为非中心 $\chi^2$ 分布的随机变量的和的方式。

## 陈述与证明

用 $\chi^2_n(\delta)$ 表示 $\sum_{i=1}^n (X_i- a_i)^2$（其中
$X_i\overset{\text{i.i.d.}}{\sim} N(0,1)$，$\sum_{i=1}^n a_i^2= \delta$）
服从的非中心 $\chi^2$ 分布。$n$、$\delta$ 分别称作自由度和位置参数。Cochran 定理断言：

::: theorem [Cochran]
$n$ 维随机向量 $X$ 服从均值 $\mu\in\mathbb R^n$，协方差矩阵单位阵 $I_n$ 的正态分布。
$A_1,\cdots, A_k$ 是 $k$ 个对称阵，$\sum_{i=1}^k A_i=I_n$ 且 $\text{rank} A_i= n_i$。在上述条件下，
存在 $\delta_i$（$1\le i\le k$）使得 $X^T A_i X\sim \chi^2_{n_i}(\delta_i)$ 且 $X^T A_i X$ 相互独立
$\Leftrightarrow$
$\sum_{i=1}^k n_i= n$。
此时 $\delta_i= \mu^T A_i\mu$。
:::

::: proof
$(\Rightarrow)$ 由非中心 $\chi^2$ 分布的定义立即得到其可加性。所以
\[
X^T X= \sum_{i=1}^k X^T A_i X\sim \chi^2_{\sum_{i=1}^k n_i} (\sum_{i=1}^k \delta_i).
\]
而我们知道 $X^TX\sim \chi^2_n (\|\mu\|^2)$。
非中心 $\chi^2$ 分布自由度和参数唯一，$\sum_{i=1}^k n_i= n$。

$(\Leftarrow)$ 由对称阵的性质，知道存在向量 $\vec c_{ij}$，$1\le i\le k$，$1\le j\le n_i$ 使得
\[
X^T A_i X= \sum_{j=1}^{n_i}\lambda_{ij} \langle \vec c_{ij}, X \rangle^2, \quad\lambda_{ij}\in \{-1, 1\} .
\]
设 $C_i$ 为 $n\times n_i$ 矩阵，第 $j$ 列是 $\vec c_{ij}$，$C$ 是 $n$ 阶方阵
\[
C= \begin{pmatrix}
C_1^T\\ C_2^T\\ \cdots\\ C_k^T
\end{pmatrix} .
\]
则
\[
X^TX= X^T C^T \Delta C X,
\]
其中 $\Delta$ 是一个对角线元素是 $\pm 1$ 的对角阵。
所以 $C^T \Delta C= I_n$，$\Delta= I_n$，$C^TC= I_n$，即 $C$ 是正交矩阵。
$X^T A_i X= \sum_{j=1}^{n_i} \langle \vec c_{ij}, X \rangle^2$ 是 $Y= CX$ 中 $n_i$ 个分量的平方和，
$Y=CX \sim N(C\mu, C I_nC^T= I_n)$。
所以 $X^T A_i X$ 服从自由度 $n_i$ 的非中心 $\chi^2$ 分布且 $X^T A_i X$（$1\le i\le k$）相互独立。
最后，
$X^T A_i X$ 服从的非中心 $\chi^2$ 分布的位置参数是
$\sum_{j=1}^{n_i} \langle \vec c_{ij}, \mu\rangle^2$，
而根据我们对于 $\vec c_{ij}$ 的构造，这就是 $\mu^T A_i\mu$。
:::
