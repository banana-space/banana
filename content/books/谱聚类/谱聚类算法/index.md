---
title: 谱聚类算法
---

*本节主要参考自文章 A Tutorial on Spectral Clustering [@vonluxburg07] 的 Section 4、8。*

首先将谱聚类算法总结如下（输入相似度矩阵 $S$，聚类数 $K$）：

1. 构建相似度图 $G$，得到其带权邻接矩阵 $W$ 和度矩阵 $D$；

2. 计算 Laplace 矩阵及其前 $K$ 个特征向量 $u_1,\cdots,u_K$，
   将其组成一个矩阵 $U\in\mathbb{R}^{N\times K}$；

3. 对 $U$ 的 $N$ 个行向量 $y_1,\cdots,y_N$ 作 K-means 聚类，得到 $C_1,\cdots,C_K$；

4. 输出聚类 $A_1,\cdots,A_K$，其中 $A_k = \{j: y_j\in C_k\}$。

## Similarity Graph 的选取

- $\varepsilon$-neighborhood graph：
  难以选取 $\varepsilon$，特别当不同区域数据具有不同尺度的时候。

- $k$-nearest neighbor graph：
  较好地解决“尺度不同”的问题，保证图的连通性；
  在高密度区域可以分辨不同形状。

- mutual $k$-nearest neighbor graph：
  倾向于连接同密度区域的数据，可用于将不同密度的区域分开；
  总的来说，介于上述两者之间。

- fully connected graph：
  常用于 Gauss 函数定义相似度的情形；
  得到的矩阵不稀疏，求解难度较大。

这其中还涉及到参数如 $\varepsilon,k$ 等的选取。

## Laplace 矩阵的选取 {@sec:laplacian-choice}

根据前面的分析，我们有三种选择：

- 直接取 $L = D-W$ ——非规范方法

- 取 $L_{rw} = D^{-1}L = I-D^{-1}W$，
  此时第 2 步即为计算广义特征值问题 $Lu = \lambda Du$ 的前 $K$
  个广义特征向量——规范方法（Shi & Malik）

- 取 $L_{sym} = D^{-1/2}LD^{-1/2} = I - D^{-1/2}WD^{-1/2}$，
  但此时需要对 $U$ 的行向量作归一化（出于稳定性的考虑，
  见第 @sec:stability 节）——规范方法（Ng & Jordan & Weiss）

几点简单的考虑：

- 如果 $D$ 近似于一个纯量阵（即单位阵的倍数），则这三个矩阵的特征都比较接近。

- 注意到我们其实还有一个目标一直没有提及——**最大化类内相似度**。以 $K=2$ 为例，我们还需要
  $$
  \max \quad W(A,A), W(\bar A, \bar A)
  $$
  而
  $$
  W(A,A) = W(A,V) - W(A,\bar A) = \text{vol}(A) - \text{cut}(A,\bar A),
  $$
  故当我们最小化 Ncut 时，即在同时降低 $\text{cut}(A,\bar A)$ 和增大 $\text{vol}(A)$，
  从而使得 $W(A,A)$ 提高。更直接地，我们可以考虑另一个目标函数
  $$
  \text{MinMaxCut}(A_1,\cdots,A_K) := \sum_{k=1}^K \frac{\text{cut}(A_k,\overline{A_k})}{W(A_k,A_k)},
  $$
  其与 Ncut 的区别仅在于每一项的分母。
  实际上，这两个目标函数最小化得到的结果往往是类似的，
  因为对这个新目标的松弛可以得到与 Ncut 一模一样的优化问题，最后得到采用 $L_{rw}$ 的算法。
  而 $|A|,|\bar A|$ 与类内相似度并没有确定的关系，因此只有选择 $L_{rw}$ 的算法同时达成了两个目标。

- 统计上的观点：如果数据点 $x_1,\cdots,x_N$ 都是从某个分布中随机抽样得到的，
  那么我们需要考虑一个问题——当样本量 $N\to\infty$ 时，能否逼近这个分布的各个部分？对于规范算法，
  我们有较好的相合性结果，然而非规范算法可能不收敛，或者收敛到平凡的解（单点自成一类）。
  详见第 @sec:consistency 节。

- 至于用 $L_{sym}$ 还是用 $L_{rw}$，上述讨论均偏向于后者。
  加上前者在计算上也没有优势（还需要归一化），所以一般采用 $L_{rw}$，即上述算法 2。

## 特征向量的计算

*此部分参考自 Spectral approximations of linear operators [@chatelin83] 的 Section 1.3、1.5。*

计算方法主要有幂法、Krylov 子空间法、Lanczos 方法等。
它们的收敛速度与 spectral gap 正相关。

对于重特征根的情形：对应的特征向量构成特征子空间的一组基，算法可能收敛到另一组基，但这并不是大问题。
例如对于具有 $k$ 个连通分支的图，其前 $k$ 个特征向量即为这 $k$ 个分支的指示向量，
它们张成了特征值 0 对应的 $k$ 维特征子空间。
尽管算法收敛到另外的基，每个向量形如
$$
u = \sum_{l=1}^k a_l\mathbf1_{A_l},
$$
这表明 $u$ 的分量在每一类内取常值，所以仍然保留了类的信息。

## 参考文献*

```bibliography
chatelin83:
  type: book
  author: Françoise Chatelin
  title: Spectral Approximation of Linear Operators
  publisher: Academic Press
  year: 1983
```
