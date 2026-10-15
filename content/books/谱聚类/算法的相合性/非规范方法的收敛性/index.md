---
title: 非规范方法的收敛性
---

## 证明脉络

对于非规范方法，研究其收敛性的方法与上述规范方法是类似的。这里只给出脉络并指出一些不同之处：

**第一步**：根据 $L_n = D_n - W_n$，我们可以通过构造

::: definition
- 度函数
  $$
  d_n(x) = \int_{\cal X}s(x,y)\,dP_n(y), \quad d(x) = \int_{\cal X} s(x,y)\,dP(y)
  $$

- 乘积算子【multiplication operators】
  $$
  M_{d_n}:f\mapsto d_n\cdot f, \quad M_d: f\mapsto d\cdot f
  $$

- 积分算子
  $$
  S_n:f\mapsto\int_{\mathcal X} s(x,y)f(y)\,dP_n(y),\quad
  S: f\mapsto\int_{\mathcal X} s(x,y)f(y)\,dP(y)
  $$

- 最后得到 $C(\mathcal X)$ 上的算子
  $$
  U_n = M_{d_n} - S_n, \quad U = M_d - S.
  $$

:::

以上构造具有如下性质：

::: proposition
在问题的预先假设下，有

1. $d_n, d\in C(\cal X)$，并且有一致的下界 $l>0$ 及上界 $\|s\|_\infty<+\infty$；

2. $M_{d_n}, M_d, S_n,S$ 的算子范数具有一致的上界 $\|s\|_\infty$，
   且 $S_n,S$ 是 $C(\cal X)$ 上的紧算子；

3. 下列关系式成立：
   $$
   \frac1n D_n\circ \rho_n = \rho_n\circ M_{d_n}, \quad
   \frac1n W_n\circ \rho_n = \rho_n\circ S_n, \quad
   \frac1n L_n\circ \rho_n = \rho_n\circ U_n.
   $$

:::

注意上述关系式中的系数 $1/n$ 是由经验分布 $P_n$ 带来的，而规范方法中之所以没有该系数，
是因为对相似度函数进行了规范化（回忆 $h_n,h$ 的构造）。

**第二步**：根据上面第三个关系式，与规范方法的分析同理可以得到：

::: proposition
算子 $U_n$ 与矩阵 $L_n/n$ 的谱具有如下对应关系：

1. 具有相同的特征值；

2. 关于同一个特征值 $\lambda\notin R(d_n)$ 的特征函数 $f\in C(\cal X)$ 及特征向量
   $v=(v^1,\cdots,v^n)\in\mathbb{R}^n$ 具有如下的一一对应关系：
   $$
   v = \rho_n f, \qquad f(x) = \frac{\frac1n\sum_{i=1}^n s(x,X_i)v^i}{d_n(x)-\lambda};
   $$

3. $U_n = M_{d_n} - S_n$ 的特征值都是非负的，
   且聚点只可能在 $\sigma_{ess}(U_n) = \sigma_{ess}(M_{d_n}) = R(d_n)$ 中。

:::

同理可以推知 $U$ 也只有非负特征值，
并且聚点只可能在本性谱 $\sigma_{ess}(U) = \sigma_{ess}(M_d) = R(d)$ 中。

**第三步**：与规范方法同理，可以得到积分算子序列的集体紧收敛性 $S_n\xrightarrow{cc} S$，
故只需再看乘积算子序列的收敛性：根据定义及前述结论可得
$$
\|M_{d_n} - M_d\| = \sup_{\|f\|_\infty = 1} \|d_nf - df\|_\infty \le \|d_n-d\|_\infty \xrightarrow{n\to\infty} 0\quad \text{a.s.}
$$
即 $M_{d_n} \xrightarrow{\|\cdot\|} M_d$  a.s.  而由集体紧收敛性和依范数收敛性都可以推出紧收敛性，有

::: theorem
在预先假设下，$U_n\xrightarrow{c} U$  a.s.
:::

**第四步**：与规范方法同理，由上述紧收敛性即可得到最终结论：

::: theorem
在预先假设下，对于 $U$ 的孤立特征值 $\lambda \notin R(d)$，
存在其邻域 $\Delta\subset \mathbb{C}$ 及 $N\in\mathbb{N}$，使得当 $n>N$ 时，
$\sigma(L_n/n)\cap \Delta = \{\lambda_n\}$，且 $\lambda_n\to \lambda$  a.s.  进一步，
令算子 $\text{Pr}_n : C(\mathcal X) \to C(\mathcal X)$ 是关于 $\lambda_n$ 的谱投影，
$\text{Pr}$ 是关于 $\lambda$ 的谱投影，则 $\text{Pr}_n\xrightarrow{p} \text{Pr}$  a.s.

若 $\lambda$ 是一个单特征值，则还有特征向量的收敛性：
设 $v_n = (v_n^1,\cdots,v_n^n)$ 是 $L_n/n$ 关于 $\lambda_n$ 的特征向量，
$f$ 是 $U$ 关于 $\lambda$ 的特征函数，则存在一列 $\{a_n\}\subset \{-1,1\}$，使得
$$
\sup_{i=1,\cdots,n} |a_nv_n^i - f(X_i)| \to 0 \quad \text{a.s.}
$$
特别地，对任意 $b\in\mathbb{R}$，集合 $\{a_nf_n>b\}$ 收敛到 $\{f>b\}$，即它们的对称差满足
$$
P(\{a_nf_n>b\} \triangle \{f>b\}) \to 0.
$$
:::

## 非孤立特征值

注意到非规范方法的收敛性要求 $\lambda \notin R(d)$，这比规范方法中的 $\lambda\ne 1$ 要苛刻得多。
并且在实际中，违反该条件的例子是存在的，如：

::: example
取 $\mathcal X = [1,2]\subset\mathbb{R}$，概率分布的密度为
$$
p(x) = \begin{cases}
s, & 4/3\le x\le 5/3; \\
(3-s)/2, & \text{otherwise.}
\end{cases}
$$
其中 $s\in[0,3]$ 为常数。
取相似度函数为 $s(x,y) = xy$，则 $U$ 在 $R(d)$ 之外的特征值只有单平凡特征值 0。
:::

在这种情形下，$U$ 的特征函数并不能提供任何信息进行聚类，因有如下结论：

::: proposition
假设 $\sigma(U) = \{0\}\cup R(d)$，其中 0 是单特征值。
又设概率分布 $P$ 不存在点质量，则矩阵 $L_n/n$ 的第二特征值收敛到 $\min_{x\in\cal X} d(x)$，
且对应的特征函数接近某个 $x_0 \in \arg\min_{x\in\cal X} d(x)$ 的示性函数或它们的线性组合。
:::

（从略，详见 [@vonluxburg-belkin-bousquet08] 中的 Section 8）

更加不能接受的是，要验证 $\lambda \notin R(d)$ 这一条件，我们需要首先知道 $U$ 和 $P$，
这显然违背实际问题的设定。因此，不仅坏的情形可能出现，而且我们无法判断是不是出现了这样的情形。

总而言之，结合之前对 Ncut 的分析，在实际应用中，我们倾向于使用**规范方法**。
