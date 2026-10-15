---
title: 算法的相合性
---
*本节参考自文章 Consistency of Spectral Clustering 的 Section 3-8。*

假设数据点 $X_1,\cdots,X_n$ 是从一个**潜在的概率分布**中提取的，目标是对数据空间 $\mathcal X$ 进行划分。为此，我们需要分析上述谱聚类方法的相合性，即当样本量 $n\to\infty$ 时，结果是否存在好的极限行为。

以下分析都在 $K=2$ 的情形下进行，且为了明晰样本量，给以上所用的矩阵记号加上下标 $n$：

- 非规范 Laplace 矩阵 $L_n$

- 规范 Laplace 矩阵 $L'_n = D_n^{-1/2}L_nD_n^{-1/2}, L''_n = D_n^{-1}L_n.$

此时我们关注 Laplace 矩阵的第二特征向量 $v_n = (v_{n}^1,\cdots,v_{n}^n)^T$，以它们的正负来分成两类。
为了研究极限行为，我们将这个聚类过程抽象为：给出离散空间 $\mathcal X_n = \{X_1,\cdots,X_n\}$ 上的一个函数 $f_n$，使得 $f_n(X_i) = v_{n}^i$，
并根据其函数值的正负我们希望函数列 $\{f_n\}$ 在某种意义下趋于整个数据空间 $\cal X$ 上的函数 $f$，从而通过其函数值的正负来给出数据空间的划分。

我们预先假设：

- 数据空间 $\cal X$ 是**紧度量空间**，$\cal B$ 是其上的 Borel 代数（即 Borel 集构成的 $\sigma$-代数）；

- $P$ 是空间 $(\cal X, \cal B)$ 中的**概率测度**，$X_1,X_2,\cdots$ 是从 $P$ 中**独立**抽取的样本点，它们形成离散概率测度（经验分布）序列 $\{P_n = \frac1n\sum_{i=1}^n\delta_{X_i}: n\in\mathbb{N}\}$；

- 相似度函数 $s:\cal X\times X \to [l,+\infty)$ 是**对称、连续**的，其中 $l$ 为正常数。

为了收敛性讨论和计算的方便，我们采用连续函数空间 $C(\cal X)$，我们知道它是一个 **Banach 空间**（由 $\cal X$ 是紧度量空间）。
于是，我们想要得到一个连续的极限函数 $f\in C(\cal X)$，需要函数列 $\{f_n\}$ 也在相同的空间中，故需要定义一个限制算子【restriction operator】
$$
    \rho_n : C({\cal X}) \to \mathbb{R}^n, \quad g\mapsto \rho_ng = \big(g(X_1),\cdots,g(X_n)\big)
$$
来达到上述效果 $\rho_nf_n = v_n$，从而通过
$$
    \|v_n - \rho_n f\|_\infty = \|\rho_nf_n - \rho_nf\|_\infty \le \|f_n-f\|_\infty
$$
来证明算法的收敛性。于是问题的关键在于：

- 由 Laplace 矩阵的第二特征向量 $v_n$ 构造出相应的 $f_n\in C(\cal X)$；

- 证明 $f_n$ 在 $C(\cal X)$ 中收敛。

在进行分析之前，我们需要一些预备知识。由于分析的篇幅也比较大，我们分多个页面进行展示。
