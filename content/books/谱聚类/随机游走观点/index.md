---
title: 随机游走观点
---
*本节主要参考自文章 A Tutorial on Spectral Clustering 的 Section 6。*

聚类目标的另一个直观表述：找相似度图的一个分割，使得该图上的随机游走【random walk on the similarity graph】长时间停留在同个类中，而很少从一个类到另一个类。

## 基本概念与记号

::: definition
转移概率【transition probability】：从 $v_i$ 到 $v_j$ 的概率为 $p_{ij} = w_{ij}/d_i$，构成的转移矩阵【transition matrix】为
$$
    P = D^{-1}W = I_N - D^{-1}L = I_N - L_{rw}.
$$
:::

::: definition
平稳分布【stationary distribution】：满足 $\pi P = \pi$（这里将 $N$ 个点的概率分布写成了行向量），即找 $(I_N-P)^T = L_{rw}^T = LD^{-1}$ 的零空间。考虑
$$
    LD^{-1}x = 0 \iff D^{-1}x \in \ker L,
$$
当图连通时 $\ker L = \text{Span}\{\mathbf1\}$，从而
$$
    \pi^T \in \text{Span}\{D\mathbf1\} \quad\Longrightarrow\quad  \pi_i = \frac{d_i}{\text{vol}(V)}.
$$
:::

## 随机游走与 Ncut

由于当 $P$ 不可约、非周期（$P$ 刻画了这个随机过程）时，有极限行为
$$
    \|(P^n)_{i\cdot} - \pi\|_1 \xrightarrow{n\to\infty} 0, \quad \forall i = 1,\cdots,N,
$$
故对任意的初始分布 $\mu$，我们有
$$
    \|\mu P^n - \pi\|_1 = \left\|\sum_{i=1}^N\mu_i(P^n)_{i\cdot} - \pi\right\|_1 \le \sum_{i=1}^N \mu_i\|(P^n)_{i\cdot}-\pi\|_1 \xrightarrow{n\to\infty} 0.
$$
由此，在一般情况下，平稳分布是 1-范数意义下的**极限分布**，于是我们只需以平稳分布起始，考虑顶点子集之间的转移概率：因为随机游走过程是一个 Markov 链，故只需考虑

```math
\begin{aligned}
P[X_1 = B|X_0 = A] = \frac{P[X_0 = A, X_1 = B]}{P[X_0 = A]} &= \frac{\sum_{i\in A,j\in B} P[X_0 = i, X_1 = j]}{\sum_{i\in A}P[X_0 = i]} \\
&= \frac{\sum_{i\in A, j\in B}\pi_i p_{ij}}{\sum_{i\in A}\pi_i} = \frac{\sum_{i\in A, j\in B} w_{ij}}{\sum_{i\in A}d_i} = \frac{W(A,B)}{\text{vol}(A)}.
\end{aligned}
```

将这个概率简记为 $P[B|A]$，则有
$$
    \text{Ncut}(A,\bar A) = \frac12\left(\frac{W(A,\bar A)}{\text{vol}(A)} + \frac{W(A,\bar A)}{\text{vol}(\bar A)}\right)
    = \frac{P[\bar A|A] + P[A|\bar A]}2.
$$
可见在 $K=2$ 时，该目标函数即表示了在两个类之间游走的平均概率。一般地有
$$
    \text{Ncut}(A_1,\cdots,A_K) = \frac12\sum_{k=1}^K \frac{W(A_k,\overline{A_k})}{\text{vol}(A_k)} = \frac12\sum_{k=1}^K P[\overline{A_k}|A_k],
$$
右侧的每一项表示了从第 $k$ 类“逃离”的概率。

## 往返距离

图上两点的距离也可以用它们在随机游走中**往返时间的期望**来表示，也称往返距离【commute distance/resistence distance】。与最短距离不同的是，多条最短路可以减少往返时间，所以这个距离更能反映出顶点分布的密集程度，更适合用于聚类算法。

### 计算

*此部分参考自文章 Random Walks on Graphs: a Survey 的 Section 3。*

为了计算往返时间的期望，我们先计算从顶点 $i$ 出发到达 $j$ 所需时间的期望【access time】$H_{ij}$。
它有诸多计算方法，这里利用 **Laplace 矩阵及其谱**来给出：首先由全期望公式易见
$$
    H_{ij} = 1 + \sum_{k=1}^N p_{ik}H_{kj}, \quad \forall i\ne j.
$$
写成矩阵的形式，即知 $H - \mathbf1\mathbf1^T - PH$ 是对角阵（非对角元由上式为 0）。注意到
$$
    \pi\in\ker(I_N-P)^T \quad\Longrightarrow\quad (H-PH-\mathbf1\mathbf1^T)^T\pi = \mathbf1\mathbf1^T\pi = \mathbf1,
$$
因此该对角阵的对角元由 $1/\pi_i = \text{vol}(V)/d_i$ 构成，故
$$
    (I_N-P)H = \mathbf1\mathbf1^T + \text{vol}(V)D^{-1}.
$$
而由 $P = D^{-1}W = I_N - D^{-1}L$，可将该式化为
$$
    LH = \text{vol}(V)\left(\frac{D\mathbf1}{\text{vol}(V)}\mathbf1^T - I_N\right) = \text{vol}(V)(\pi\mathbf1^T - I_N).
$$
这是一个关于 $H$ 的方程，但由于 $L$ 存在 0 特征值，所以不能直接取逆求出，并且由此可知只要找到一个解 $\tilde H$，那么对任意向量 $a$，$\tilde H - \mathbf1 a^T$ 也是解（因为 $\mathbf1$ 是 $L$ 的 0 特征向量）。因此，利用 $H_{ii} = 0$ 我们可以求出唯一解。为此，先利用 $L$ 的广义逆【generalized inverse / pseudo-inverse】得到一个解
$$
    \tilde H = \text{vol}(V) L^\dagger(\pi\mathbf1^T-I_N),
$$
然后令 $a$ 是其对角元组成的向量，即可得到
$$
    H = \tilde H - \mathbf1(\tilde H_{11}, \cdots,\tilde H_{NN}) = (\tilde H_{ij} - \tilde H_{jj})_{1\le i,j\le N}
$$
是满足要求的解。由此，顶点 $i,j$ 间的往返距离为

```math
\begin{aligned}
c_{ij} = H_{ij} + H_{ji} &= \tilde H_{ij} - \tilde H_{jj} + \tilde H_{ji} - \tilde H_{ii} \\
&= \text{vol}(V)\sum_{k=1}^N \left[(l_{ik}^\dagger-l_{jk}^\dagger)(\pi_k-\delta_{kj}) + (l_{jk}^\dagger-l_{ik}^\dagger)(\pi_k-\delta_{ki})\right] \\
&= \text{vol}(V)\left[-l_{ij}^\dagger + l_{jj}^\dagger - l_{ji}^\dagger + l_{ii}^\dagger\right] = \text{vol}(V) (e_i - e_j)^TL^\dagger(e_i-e_j).
\end{aligned}
```

### 聚类的考虑

由对称半正定阵 $L$ 的谱分解 $L = U\Lambda U^T$ 可知
$$
    L^\dagger = U\Lambda^\dagger U^T = \sum_{i:\lambda_i > 0}\frac1{\lambda_i}u_iu_i^T
$$
也是对称半正定的，从而我们可以将 $c_{ij}$ 用标准欧式内积表示为
$$
    c_{ij} = \text{vol}(V)\cdot (e_i-e_j)^T U(\Lambda^\dagger)^{1/2}\cdot(\Lambda^\dagger)^{1/2}U^T(e_i-e_j) = \text{vol}(V)\left\|(\Lambda^\dagger)^{1/2}U^T(e_i-e_j)\right\|^2.
$$
其中 $(\Lambda^\dagger)^{1/2}U^Te_i$ 表示 $U(\Lambda^\dagger)^{1/2}$ 的第 $i$ 个行向量，将其记为 $z_i^T$，则有
$$
    z_i^T z_j = e_i^TL^\dagger e_j, \quad c_{ij} = \text{vol}(V)\|z_i-z_j\|^2.
$$
由此，往返距离可以看作是：
先将图的顶点按照 $i\mapsto z_i$ 嵌入到欧式空间 $\mathbb{R}^N$ 中，
然后用欧式度量来衡量它们的距离，由此进行聚类。

在谱聚类算法中，我们只采用了 $L$ 的前 $K$ 个特征向量，并且直接将顶点 $v_i$ 嵌入为它们拼成的矩阵的行向量 $y_i$，而后进行聚类。
$y_i$ 和这里的 $z_i$ 能否发挥相似的作用？

- 当图恰好有 $K$ 个连通分支时，我们已经知道 $y_1,\cdots,y_N$ 能够恰好按连通分支分为 $K$ 类。但此时 $L$ 的前 $K$ 个特征值均为 0，因此每个 $z_i$ 的前 $K$ 个元素均为 0，也即 $U$ 的前 $K$ 列信息被完全丢弃。

- 当图连通时，$L$ 关于 0 特征值只有一个特征向量 $\mathbf1$，因此 $y_i$ 和 $z_i$ 的第一个元素在聚类中均不起作用；并且，$L$ 的前几个非零特征值较小，它们对应的特征向量在 $(\Lambda^\dagger)^{1/2}$ 的作用下，会发挥较大的作用，
  所以在这个情形下，$y_i$ 和 $z_i$ 确实发挥了相似的作用。
