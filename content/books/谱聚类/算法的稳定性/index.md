---
title: 算法的稳定性
---
稳定性的分析由**矩阵的扰动理论**给出。这也将给出上述算法 3 中归一化行向量的需要。

## 特征空间的扰动理论

*此小节参考自 Rajendra Bhatia 的 Matrix Analysis 一书中 Section VII.1-3。*

对复规范阵 $A$【normal matrix/operator】（$AA^H = A^HA$）及 $S\subset\mathbb C$，以 $P_S(A)$ 表示到 $A$ 在 $S$ 中特征值对应特征向量所张成子空间的正交投影【orthogonal projection】。

对于不相交的 $S_1,S_2\subset \mathbb C$，由复规范变换的特征分解，可知 $P_{S_1}(A)$ 与 $P_{S_2}(A)$ 的像是正交的。当另一个复规范阵 $B$ 接近 $A$ 时，我们理所当然地期待 $E := P_{S_1}(A)$ 与 $F := P_{S_2}(B)$ 的像**接近正交**。

若确实如此，这两个投影算子复合应当得到接近于 0 的算子。因此我们考虑用 $\|A-B\|$ 对 $\|EF\|$ 进行估计，有如下结果：

::: theorem
若 $S_1,S_2$ 被一个宽为 $\delta$ 的圆环分离，则对矩阵的任一**保酉变换的范数** $\|\cdot\|$，我们有
$$
    \|EF\| \le \frac1\delta \|E(A-B)F\| \le \frac1\delta \|A-B\|.
$$
:::

::: remark
常见的 Frobenius 范数（数值分析中讲过在 Givens 变换下不变）、2-范数（矩阵的最大奇异值）都是保酉变换的。
:::

::: proof
首先，根据 $A$ 的特征分解 $A = U\Lambda U^H$，我们可以将 $\mathbb C^n$ 中的任意向量表示为
$$
    x = \alpha_1 u_1 +\cdots + \alpha_n u_n,
$$
从而
$$
    AEx = \sum_{i:\lambda_i\in S_1} \alpha_i Au_i = \sum_{i:\lambda_i\in S_1} \alpha_i\lambda_i u_i = E\left(\sum_{i=1}^n \alpha_i\lambda_i u_i\right) = EAx, \quad \forall x\in\mathbb C^n,
$$
于是 $AE = EA.$  同理可以得到 $BF = FB$，从而要证明的第一个不等式即为
$$
    \|EF\| \le \frac1{\delta} \|AEF - EFB\|. \tag{1}
$$
令 $X = EF|_{R(F)}$，$\tilde A = A|_{R(E)}$，$\tilde B = B|_{R(F)}$，$Y = \tilde A X - X\tilde B : R(F) \to R(E)$，则由
$$
    \sigma(\tilde A) \subset S_1, \quad \sigma(\tilde B)\subset S_2
$$
被一宽为 $\delta$ 的圆环分离，可设 $S_2 \subset B_\rho(0)$，从而 $S_1^c \subset B_{\rho+\delta}(0)$，因此 $\tilde A$ 可逆，有

```math
\begin{aligned}
& X = \tilde A^{-1}(Y + X\tilde B) \quad \Longrightarrow\quad
\|X\| \le \|\tilde A^{-1}\|\left(\|Y\| + \|X\|\|\tilde B\|\right) \\
\Longrightarrow\quad & \frac{\delta}{\rho+\delta}\|X\| = \left(1-\frac{\rho}{\rho+\delta}\right)\|X\| \le
\left(1-\|\tilde A^{-1}\|\|\tilde B\|\right)\|X\| \le \|\tilde A^{-1}\|\|Y\|
\le \frac1{\rho+\delta}\|Y\| \\
\Longrightarrow\quad & \|X\| \le \frac1\delta \|Y\|.
\end{aligned}
```

由此，根据正交投影的性质，我们有
$$
    \|EF\| = \|EF^2\| = \|XF\| \le \|X\|\|F\| = \|X\| \le \frac1\delta \|Y\| =
    \frac1\delta\left\|(AEF-EFB)\middle|_{R(F)}\right\| \le \frac1\delta\|AEF-EFB\|,
$$
这就证明了 $(1)$ 式，第一个不等式成立；第二个不等式由 $\|E\| = \|F\| = 1$ 即可得到。
:::

此外，上述 $R(E)$ 与 $R(F)$“接近正交”也可以通过它们的“夹角”来表述，这将给出两个子空间的**距离**定义，详见参考书，此处不再赘述。

## 稳定性分析

*此小节参考自文章 A Tutorial on Spectral Clustering 的 Section 7。*

最简单的情形：当相似度图恰好有 $K$ 个连通分支时，其 Laplace 矩阵 $L$ 恰好有 $K$ 个 0 特征向量，由此直接给出了聚类方式。加上扰动之后，设新的 Laplace 矩阵为 $\tilde L = L + H$，我们希望当 $H$ 较小时，其前 $K$ 个特征向量比较接近原来 $K$ 个分支的指示向量。

一般而言，由于 $L,\tilde L$ 都是实对称阵，其特征值均为实数（$L_{rw}$ 与 $L_{sym}$ 具有相同的特征值，也都是实数），因此要利用上述定理，我们需要找到一个有限区间 $S_1$ 同时包含 $L$ 和 $\tilde L$ 的前 $K$ 个特征值。直观上看，当 $H$ 越小、$L$ 的第 $K$ 个特征值与第 $K+1$ 个特征值的距离 $|\lambda_K - \lambda_{K+1}|$【eigengap】越大时，区间 $S_1$ 就越容易取。一旦取出，$L$ 和 $\tilde L$ 的特征空间之距离即可被上界 $\|H\|/d(\lambda_{K+1},S_1)$ 所控制，故可见扰动越小、特征值距离越大，算法的误差越小，从而越稳定。

根据这个观察，我们可以得到：

- **选取聚类数 $K$** 的一个准则：尽量让 $|\lambda_K - \lambda_{K+1}|$ 较大。为此，我们经常画出 $L$ 的特征值图（俗称手肘图/崖底碎石图），通过图象的“拐点”来确定较好的 $K$；

- 在上述最简单的情形中，$\tilde L$ 的前 $K$ 个特征向量确实接近于 $\mathbf1_{A_k}$，故可以按照分量的大小（接近 1 或者接近 0）有效地给出聚类方式；同理，我们由
  $$
      f^TL_{sym}f = f^T D^{-1/2}L D^{-1/2}f = \frac12\sum_{i,j=1}^N w_{ij}\left(\frac{f_i}{\sqrt{d_i}} - \frac{f_j}{\sqrt{d_j}}\right)^2
  $$
  可以得到 $L_{sym}$ 的前 $K$ 个特征向量为 $D^{1/2}\mathbf1_{A_k}$，从而 $L_{rw}$ 的前 $K$ 个特征向量为 $\mathbf1_{A_k}$（见 2.4 末尾的推导）。由此可见，当图中存在度很小的顶点 $i$ 时，虽然 $L_{sym}$ 有一个特征向量 $u_k = D^{1/2}\mathbf1_{A_k}$ 使得 $u_{ik} > 0$，但其值很小，会导致扰动之后与其余 $u_{jk} = 0$ 的扰动混淆，从而会出现误判。因此，若使用 $L_{sym}$ 进行谱聚类，我们要求对特征向量组成矩阵 $U$ 的各行进行归一化，以减弱这种不稳定性因素（对 3.2 的补充）。然而在实际中，可能其余 $u_{il} = 0$ 在扰动后还是与 $u_{ik}$ 相当，归一化之后会变得更大，因此在这种极端情形下，用 $L_{sym}$ 进行谱聚类的方法是不稳定的。
