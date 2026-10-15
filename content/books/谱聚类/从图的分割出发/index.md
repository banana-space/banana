---
title: 从图的分割出发
notices:
  - name: 问题
    items:
      - '“一般情形：$K>2$”一节中，Lagrange 函数 $L(H,\mu)$ 的两种写法似乎相差因子 $\frac12$；由 $LH^*O + H^*O\Lambda = 0$ 似乎得到 $LU = -U\Lambda$ 而不是 $LU = U\Lambda$（符号可并入 $\Lambda$）。'
---

*此部分主要参考自文章 A Tutorial on Spectral Clustering [@vonluxburg07] 的 Section 2、3、5。*

建模：将数据点 $x_1,\cdots,x_N$ 之间的**相似度**【similarity】，
可以表示为一个 $N$ 阶的带权无向图【similarity graph】$G = (V,E)$，
其每条边 $v_iv_j$ 的权重 $s_{ij}$ 表示 $x_i,x_j$ 的相似程度。

目的：给出图 $G$ 的一个分割，使得组间边的权重尽可能低，同时各组内边的权重尽可能高。

## 图的基本概念

给定一个带权的无向图 $G = (V,E)$，其权重可以排成一个对称矩阵 $W = (w_{ij})$，
称为带权邻接矩阵【Weighted adjacency matrix】。
由此可以定义顶点 $v_i$ 的度 $d_i = \sum_{j=1}^N w_{ij}$，
排成一个对角阵 $D = \text{diag}(d_1,\cdots,d_N)$，称为度矩阵【Degree matrix】。

对于 $V$ 的子集 $A$，
我们可以定义其指示向量【Indicator vector】为 $\mathbf{1}_A = (f_1,\cdots,f_N)^T$，
其中 $f_i = 1$ 当且仅当 $v_i\in A$，简记为 $i\in A$。其在 $V$ 中的补集表为 $\bar A$。
两个子集之间连边的权重之和

\[
W(A,B) = \sum_{i\in A,j\in B} w_{ij} = \mathbf{1}_A^TW\mathbf{1}_B.
\]

## 图的分割

最简单直接的方式是**最小割方法**【mincut approach】：
$$
\min \quad \text{cut}(A_1,\cdots,A_K) := \frac12\sum_{k=1}^K W(A_k,\overline{A_k})
$$
其中的 $1/2$ 是因为每条边都计算了两遍。

这样定义的问题往往较为简单（特别当 $K=2$ 时），可以被高效解决。
但它往往将单点分割开，这并不是“聚类”所希望得到的结果！

因此，我们希望得到的 $A_i$ 都适当大，而子集的大小一般有两种衡量方式：

- 顶点个数 $|A| = \sum_{i=1}^N f_i$

- 顶点度的和，即与之相关联边的权重之和，也称“体积”$\text{vol}(A) = \sum_{i\in A} d_i = W(A,V)$

故引入如下两个目标函数 RatioCut 和 normalized cut：
$$
\text{RatioCut}(A_1,\cdots,A_K) := \frac12\sum_{k=1}^K \frac{W(A_k,\overline{A_k})}{|A_k|} = \frac12\sum_{k=1}^K \frac{\text{cut}(A_k,\overline{A_k})}{|A_k|} \\
\text{Ncut}(A_1,\cdots,A_K) := \frac12\sum_{k=1}^K \frac{W(A_k,\overline{A_k})}{\text{vol}(A_k)} = \frac12\sum_{k=1}^K \frac{\text{cut}(A_k,\overline{A_k})}{\text{vol}(A_k)}
$$

注意到
$$
\frac1K\sum_{k=1}^K \frac1{|A_k|} \ge \frac1{\left(\prod_{k=1}^K|A_k|\right)^{1/K}} \ge \frac K{\sum_{k=1}^K |A_k|} = \frac KN \\
\frac1K\sum_{k=1}^K \frac1{\text{vol}(A_k)} \ge \frac K{\sum_{k=1}^K \text{vol}(A_k)} = \frac K{W(V,V)}
$$
其中等式成立（取得最小值）分别当且仅当 $|A_k|$ 都相等、$\text{vol}(A_k)$ 都相等。
因此直观上看，这两个目标函数都是希望让“聚类”的结果更加“平衡”【balanced】。
这就是我们想要的！

然而，这两个优化问题都是 NP-hard 的，这意味着我们目前普遍相信不能在多项式时间内准确求解。
因此我们考虑对它们作近似求解。谱聚类就是对这两个目标函数作**松弛**【relaxation】的近似求解方法。

## 对 RatioCut 的松弛

### 基础情形：$K=2$

我们的目标函数是
$$
\text{RatioCut}(A,\bar A) = \frac12\left(\frac{W(A,\bar A)}{|A|} + \frac{W(A,\bar A)}{|\bar A|}\right) = \frac{W(A,\bar A)}2\left(\frac1{|A|}+\frac1{|\bar A|}\right)
$$
先尝试将其计算出来。其中
$$
W(A,\bar A) = \sum_{i\in A, j\in\bar A} w_{ij} = \mathbf1_A^T W \mathbf1_{\bar A} = \mathbf1_A^T W(\mathbf1 - \mathbf1_A)
$$
其中 $W\mathbf1$ 是由 $W$ 各行和组成的向量，即 $(d_1,\cdots,d_N)$，于是
$$
\mathbf1_A^TW\mathbf1 = \mathbf1_A^T D\mathbf1 = \mathbf1_A^T D\mathbf1_A
$$
因此 $W(A,\bar A) = \mathbf1_A^T(D-W)\mathbf1_A$，于是
$$
\text{RatioCut}(A,\bar A) = \frac{\mathbf1_A^T L \mathbf1_A}2\left(\frac1{|A|}+\frac1{|\bar A|}\right)
$$

为了方便求解其最小值，我们考虑将与 $A$ 有关的系数和指示向量 $\mathbf1_A$ 合并，
从而用一个向量 $f$ 来表示 $A$ 这个极小化变量。我们看

```math
\begin{aligned}
f^TLf = f^TDf - f^TWf &= \sum_{i=1}^N d_if_i^2 - \sum_{i,j=1}^N w_{ij} f_i f_j \\
&= \sum_{i=1}^N \sum_{j=1}^N w_{ij}f_i^2 - \sum_{i,j=1}^N w_{ij} f_i f_j \\
&= \frac12 \sum_{i,j=1}^N w_{ij}f_i^2 - \sum_{i,j=1}^N w_{ij} f_i f_j + \frac12 \sum_{i,j=1}^N w_{ij}f_j^2 \\
&= \frac12\sum_{i,j=1}^N w_{ij}(f_i-f_j)^2
\end{aligned}
```

只要 $f$ 仍是某种“指示向量”，那么当 $i,j$ 同属于 $A$ 或 $\bar A$ 时，应有 $f_i = f_j$，从而
$$
f^TLf = \frac12\sum_{i\in A, j\in\bar A} w_{ij}(f_i-f_j)^2
$$
其中的 $(f_i-f_j)^2$ 一项应是常值，先记为 $C^2$，则 $2f^TLf = C^2W(A,\bar A)$，从而
$$
\text{RatioCut}(A,\bar A) = \frac{f^TLf}{C^2}\left(\frac1{|A|}+\frac1{|\bar A|}\right)
$$
根据我们的目的，注意到 $N = |A| + |\bar A|$，我们将上式化为
$$
\text{RatioCut}(A,\bar A) = \frac{f^TLf}{C^2N}\left(\frac{|A|+|\bar A|}{|A|}+\frac{|A|+|\bar A|}{|\bar A|}\right)
= \frac{f^TLf}{C^2N}\left(\sqrt\frac{|\bar A|}{|A|} + \sqrt\frac{|A|}{|\bar A|}\right)^2
$$
因此只需让 $C = \sqrt\frac{|\bar A|}{|A|} + \sqrt\frac{|A|}{|\bar A|}$ 即可。

这仍然使得 $f$ 有不同选择，我们再由上述得到的
$$
W\mathbf1 = D\mathbf1 \quad\Longrightarrow\quad L\mathbf1 = \mathbf0
$$
可知 $\mathbf 1$ 是 $L$ 关于特征值 0 的特征向量。又
$$
Lg = \mathbf0 \quad\Longrightarrow\quad g^TLg = 0 \quad\Longrightarrow\quad
w_{ij}(g_i-g_j)^2 = 0,\forall i\ne j
$$
而一般来说，图 $G$ 是连通的（否则问题平凡），从而每个 $w_{ij}>0$，故有 $g_i = g_j$，
即 $g\in\text{Span}\{\mathbf 1\}$。而 $L$ 是对称阵，故 0 是其单特征值。
因此，只要我们取 $f\perp \mathbf1$，
就有 $f^TLf$ 的最小值在 $f$ 为第二特征向量（第二小特征值对应的特征向量）时取到。

因此我们取
$$
f = \sqrt\frac{|\bar A|}{|A|}\mathbf1_A-\sqrt\frac{|A|}{|\bar A|}\mathbf1_{\bar A}, \quad \text{i.e.}\quad  f_i = \begin{cases}
\sqrt\frac{|\bar A|}{|A|}, & i\in A; \\
-\sqrt\frac{|A|}{|\bar A|}, & i\in \bar A.
\end{cases}
$$
则有
$$
f^T\mathbf1 = \sqrt{|A||\bar A|} - \sqrt{|A||\bar A|} = 0,
$$
并且
$$
\|f\|^2 = f^Tf = |\bar A| + |A| = N.
$$
从而原优化问题可以等价地表为
$$
\begin{array}{rl}
\min & f^TLf \\ \text{s.t.} & f\perp\mathbf1,\quad \|f\| = \sqrt N, \\
& f = \sqrt\frac{|\bar A|}{|A|}\mathbf1_A-\sqrt\frac{|A|}{|\bar A|}\mathbf1_{\bar A}~(A\subset V)
\end{array}
$$
这仍然是一个离散的优化问题，仍是 NP-hard 的。最简单的松弛就是**去掉离散的约束**，成为
$$
\begin{array}{rl}
\min & f^TLf \\ \text{s.t.} & f\perp\mathbf1,\quad \|f\| = \sqrt N
\end{array}
$$
正如刚才所说，其最优解 $f^*$ 即为**模为 $\sqrt N$ 的第二特征向量**。
为了最终得到图的分割，我们还需要回到离散的原问题，最简单的方式是看 $f^*$ 各分量的符号，
将符号为正的指标归入 $A$。
但是，为了将这个算法推广到一般的 $K$，这个方式显然过于简单。
因此在谱聚类算法中，我们采用 **K-means 方法**对 $f^*$ 的分量在 $\mathbb{R}$ 中进行聚类，
从而形成图的分割。

### 一般情形：$K>2$

显然我们不能像一开始那样去化简目标函数，但我们仍然想用 $L$ 的二次型来表示目标函数。我们已经有
$$
W(A_k,\overline{A_k}) = \mathbf1_{A_k}^T L\mathbf1_{A_k}
$$
故只要取
$$
h_k = \frac1{\sqrt{|A_k|}} \mathbf1_{A_k} \quad \Longrightarrow\quad
h_k^T L h_k = \frac{W(A_k, \overline{A_k})}{|A_k|}
$$
从而目标函数化为
$$
\text{RatioCut}(A_1,\cdots,A_K) = \frac12\sum_{k=1}^K \frac{W(A_k,\overline{A_k})}{|A_k|} = \frac12\sum_{k=1}^K h_k^T L h_k = \frac12\text{tr}(H^TLH)
$$
其中 $H = (h_1, \cdots, h_K) \in \mathbb{R}^{N\times K}$ 各列相互正交，从而 $H^TH = I_K$。
仍然去掉对 $H$ 的离散约束，得到松弛的优化问题
$$
\begin{array}{rl}
\min & \dfrac12\text{tr}(H^TLH) \\ \text{s.t.} & H^TH = I_K, \quad H\in\mathbb{R}^{N\times K}
\end{array}
$$

这是一个等式约束问题，我们可以用 **Lagrange 乘子法**求解之：先将约束条件写成向量形式
$$
H^T h_k = e_k, \quad k = 1,\cdots,K,
$$
然后得到 Lagrange 函数为
$$
L(H,\mu) = \frac12\text{tr}(H^TLH) - \sum_{k=1}^K \mu_k^T(H^Th_k - e_k) = \text{tr}(H^TLH) - \text{tr}\left(\mu^T(H^TH - I_K)\right),
$$
其中 $\mu = (\mu_1,\cdots,\mu_K)\in\mathbb{R}^{K\times K}$。其驻点 $(H^*,\mu^*)$ 满足
$$
\frac{\partial}{\partial h_{jk}} L(H^*,\mu^*) = 0, \quad k = 1,\cdots,K, \quad j = 1,\cdots,N.
$$
将这些条件写成一个矩阵（其实就是矩阵函数的微分记号），即为
$$
LH^* + H^*(\mu^* + {\mu^*}^T) = 0.
$$
其中 $\mu^* + {\mu^*}^T$ 是 $K$ 阶对称阵，可作对角化，即存在同阶正交阵 $O$ 及对角阵 $\Lambda$ 使得
$$
\mu^* + {\mu^*}^T = O\Lambda O^T \quad\Longrightarrow\quad LH^*O + H^*O\Lambda = 0.
$$
令 $H^*O = U$，则 $U^TU = O^T{H^*}^TH^*O = O^TO = I_K$，并且
$$
\text{tr}(U^TLU) = \text{tr}(LUU^T) = \text{tr}(LH^*OO^T{H^*}^T) = \text{tr}({H^*}^T LH^*) = \min_{H^TH = I_K} \text{tr}(H^TLH)
$$
故 $U$ 也是松弛优化问题的解。
最优化条件化为 $LU = U\Lambda$，故 $U$ 的列即为 $L$ 的 $K$ 个互相正交的特征向量，并且
$$
\text{tr}(U^TLU) = \text{tr}(U^TU\Lambda) = \text{tr}(\Lambda)
$$
的最小值当 $\Lambda$ 的对角元是 $L$ 的前 $K$ 个特征值时取到，
故最优解 $U$ 由 **$L$ 的前 $K$ 个特征向量**组成。
最后，和上述同理，我们对 $U$ 的 $N$ 个行向量作 K-means 聚类，形成图的分割。
此即**非规范的谱聚类算法**【Unnormalized Spectral Clustering】。

回到上述 $K=2$ 的情形，$L$ 的前两个特征向量为 $\mathbf1, f^*$，
其 $N$ 个二维的行向量其实只有第二个分量是不同的，确实只需对该分量在 $\mathbb{R}$ 上作聚类。

## 对 Ncut 的松弛 {@sec:ncut-relaxation}

将上面的 $|A_k|$ 都换成 $\text{vol}(A_k)$ 就可以得到相应的结果。直接看一般情形：取
$$
h_k = \frac1{\sqrt{\text{vol}(A_k)}}\mathbf1_{A_k}, \quad k = 1,\cdots,K,
$$
则由
$$
\text{vol}(A_k) = \sum_{i\in A_k} d_i = \mathbf1_{A_k}^T D \mathbf1_{A_k},
$$

可知 $h_k^T D h_k = 1$。易见 $h_k^T D h_l = 0, \forall k\ne l$，故有 $H^TDH = I_K$。
仍然去掉对 $H$ 的离散约束，并作换元 $U = D^{1/2}H$，得到松弛的优化问题
$$
\begin{array}{rl}
\min & \dfrac12\text{tr}(U^TD^{-1/2}LD^{-1/2}U) = \dfrac12\text{tr}(U^TL_{sym}U) \\
\text{s.t.} & U^TU = I_K, \quad U\in\mathbb{R}^{N\times K}
\end{array}
$$
利用前面的结果，可知其最优解 $U$ 由 **$L_{sym}$ 的前 $K$ 个特征向量**组成。此即
$$
D^{-1/2}LD^{-1/2}U = L_{sym}U = U\Lambda_{sym} \iff D^{-1}L(D^{-1/2}U) = (D^{-1/2}U)\Lambda_{sym} \iff L_{rw}H = H\Lambda_{sym},
$$
由此也可见 $L_{sym}$ 与 $L_{rw}$ 具有相同的特征值，并且相应的特征向量只差一个坐标变换 $D^{1/2}$。
故最优解对应的 $H$ 由 **$L_{rw}$ 的前 $K$ 个特征向量**组成，
也即**广义特征值问题 $Lu = \lambda Du$ 的前 $K$ 个广义特征向量**。
回到离散问题的方式与上一方法相同，此即**规范的谱聚类算法**【Normalized Spectral Clustering】。

## 评价

“松弛 + 离散化”这个过程不能保证得到原问题的最优解，甚至可能距离很远。看一个例子：

::: example* [蟑螂图【The cockroach graph】]
![](蟑螂图.png?width=500)

作 $K=2$ 聚类：

- 原 RatioCut 问题的最优解：竖直从中间劈开，有 $|A| = |\bar A| = 2k, W(A,\bar A) = 2$；

- 非规范松弛方法：
  \[
  W = \begin{pmatrix}
      J_{2k} & \begin{array}{cc} 0 & 0 \\ 0 & I_k \end{array} \\
      \begin{array}{cc} 0 & 0 \\ 0 & I_k \end{array} & J_{2k}
  \end{pmatrix},
  \quad J_{2k} = \begin{pmatrix}
      0 & 1 & 0 & \cdots & 0 \\
      1 & 0 & 1 & \ddots & \vdots \\
      0 & 1 & \ddots & \ddots & 0 \\
      \vdots & \ddots & \ddots & \ddots & 1 \\
      0 & \cdots & 0 & 1 & 0
  \end{pmatrix} \\
  D = \text{diag}(1, 2I_{k-1}, 3I_{k-1},2,1,2I_{k-1},3I_{k-1},2).
  \]
  简单用 $L$ 的第二特征向量分量的正负来分类，可以得到最优解为：水平从中间劈开，
  有 $|B| = |\bar B| = 2k, W(B,\bar B) = k$；

当 $k$ 很大时，这两个解的差别是巨大的！

:::

虽然如此，我们还是对谱松弛的方法感兴趣。
之所以这样，不是因为它给出很好的结果，而是因为它给出了易于求解的标准线性代数问题。

## 参考文献*

```bibliography
vonluxburg07:
  type: article
  author: "von Luxburg, Ulrike"
  title: A Tutorial on Spectral Clustering
  journaltitle: Statistics and Computing
  volume: 17
  number: 4
  pages: 395–416
  year: 2007
  doi: 10.1007/s11222-007-9033-z
  arxiv: '0711.0189'
```
