---
title: 酉矩阵
---

## 酉矩阵*

::: definition
设 $V$ 是一个酉空间。线性变换 $T: V \to V$ 称为正交变换，如果对于任意向量 $\mathbf{u} \in V$，都有
$$
\|T(\mathbf{u})\| = \|\mathbf{u}\|
$$
即正交变换保持向量的范数（长度）不变。
:::

::: proposition
酉空间$V$上的线性变换 $T: V \to V$ 是一个正交变换当且仅当$T$保持厄米内积不变，
即对$V$中的任意向量$\mathbf{u},\mathbf{v}$
$$
\langle T(\mathbf{u}), T(\mathbf{v})\rangle=\langle \mathbf{u}, \mathbf{v}\rangle
$$
:::

::: proof
类似 @prop:orth-inner。
:::

与欧几里得空间类似，我们同样可以选标准正交基来具体刻画正交变换。

::: proposition
设$\{\vec{\gamma}_1,\cdots,\vec{\gamma}_n\}$是$n$维酉空间$V$的一组标准正交基。
则线性映射$T:V\to V$是正交变换当且仅当
$$
\{T(\vec{\gamma}_1),\cdots,T(\vec{\gamma}_n)\}
$$
也是$V$的标准正交基。
:::

::: proof
类似 @prop:orth-transf-basis。
:::

::: definition
一个 $n$阶复方阵 $A$ 称为酉矩阵，如果它满足
$$
\bar A^T A = A \bar A^T = I_n
$$
其中 $\bar A^T$ 表示 $A$ 的共轭转置，$I_n$ 表示 $n$ 阶单位矩阵。
所有$n$阶酉矩阵组成的集合记为$\operatorname{U}(n)$。
:::

即$A$是酉矩阵当且仅当$A$的共轭转置是它的逆
$$
\bar A^T=A^{-1}
$$

::: proposition
设$T:V\to V$是$n$维酉空间$V$的线性变换。
则$T$是酉变换当且仅当$T$在$V$的一组标准正交基下的表示矩阵$A$是$n$阶酉矩阵。
:::

::: proof
类似 @prop:orth-transf-rep。
:::

::: proposition
设$A$是$n$阶复方阵，则如下条件等价：

1. $A$是酉矩阵

2. $A$的列向量构成$\mathbb{C} ^n$的标准正交基

3. $A$的行向量构成$\mathbb{C} ^n$的标准正交基

:::

::: proof
类似 @prop:orth-matrix-equiv。
:::

::: proposition
设$A,B$是$n$阶酉矩阵，则$A^{-1}(=\bar A^T), AB$均为$n$阶酉矩阵。
即$\operatorname{U}(n)$构成一个群，称为$n$阶酉群。
:::

::: proof
类似 @prop:orth-group。
:::

::: definition
行列式为$1$的$n$阶酉矩阵构成的集合记为$\operatorname{SU}(n)$，称为$n$阶特殊酉群
$$
\operatorname{SU}(n)=\{A\in \operatorname{U}(n)| \det A=1\}
$$
$\operatorname{SU}(n)$是$U(n)$的子群。
:::

::: definition
设 $A$ 和 $B$ 是两个 $n$阶复方阵。如果存在一个 $n$ 阶酉矩阵 $U$，使得
$$
B = U A U^{-1} \quad ( \text{即} = U A \bar U^T )
$$
则称矩阵 $A$ 和 $B$酉相似。
:::

酉相似是比相似更强的关系。如果两个矩阵酉相似，则它们一定相似；反之不一定成立。

::: proposition {@prop:complex-upper}
任意$n$阶复方阵酉相似于一个上三角方阵。
:::

::: proof
类似 @prop:real-upper。
:::

## 正规矩阵*

可对角矩阵具有非常好的性质。我们这里给出判断$n$阶复方阵是否可以通过酉相似对角化的一个简单方法。

::: definition
$n$阶复方阵$A$称为正规矩阵，如果$A$与它的共轭转置$\bar A^T$交换
$$
A \bar A^T=\bar A^T A
$$
:::

::: proposition {@prop:normal-diag}
$n$阶复方阵$A$酉相似于对角方阵当且仅当$A$是正规矩阵。
:::

::: proof
假设$A$酉相似于对角方阵，
即存在酉矩阵$U$和对角方阵$\Lambda=\operatorname{diag}(\lambda_1,\cdots,\lambda_n)$使得
$$
A=U \Lambda \bar U^T
$$
则$\bar A^T=U \bar\Lambda \bar U^T$，因此
$
A\bar A^T=\bar A^T A=U \Lambda\bar\Lambda\bar U^T
$。这里我们用到$\Lambda\bar\Lambda=\bar \Lambda \Lambda$。

反之，假设$A$是正规矩阵。由 @prop:complex-upper，存在酉矩阵$U$和上三角方阵
$$
\Lambda=\begin{bmatrix}
a_{11} & a_{12} &\cdots & a_{1n}\\
0 & a_{22} & \cdots & a_{2n}\\
\cdots & \cdots & \cdots & \cdots \\
0 & \cdots & 0 & a_{nn}
\end{bmatrix}
$$
使得$A=U \Sigma \bar U^T$。代入正规条件$A\bar A^T=\bar A^T A$，得到
$
\Sigma \bar \Sigma^T=\bar \Sigma^T \Sigma
$，即
\[
\begin{aligned}
\begin{bmatrix}
a_{11} & a_{12} &\cdots & a_{1n}\\
0 & a_{22} & \cdots & a_{2n}\\
\cdots & \cdots & \cdots & \cdots \\
0 & \cdots & 0 & a_{nn}
\end{bmatrix}\begin{bmatrix}
\bar a_{11} & 0 &\cdots & 0\\
\bar a_{12} & \bar a_{22} & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots \\
\bar a_{1n} & \cdots & * & \bar a_{nn}
\end{bmatrix}
=\begin{bmatrix}
\bar a_{11} & 0 &\cdots & 0\\
\bar a_{12} & \bar a_{22} & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots \\
\bar a_{1n} & \cdots & * & \bar a_{nn}
\end{bmatrix}\begin{bmatrix}
a_{11} & a_{12} &\cdots & a_{1n}\\
0 & a_{22} & \cdots & a_{2n}\\
\cdots & \cdots & \cdots & \cdots \\
0 & \cdots & 0 & a_{nn}
\end{bmatrix}
\end{aligned}
\]

比较两边第1行第1列矩阵元得
$$
|a_{11}|^2+|a_{12}|^2+\cdots+|a_{1n}|^2=|a_{11}|^2
$$
由此得$a_{12}=\cdots=a_{1n}=0$。然后比较两边第2行第2列矩阵元，依次类推我们得到
$$
\Lambda=\begin{bmatrix}
a_{11} & 0 &\cdots & 0\\
0 & a_{22} & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots \\
0 & \cdots & 0 & a_{nn}
\end{bmatrix}
$$
是对角方阵。
:::

::: proposition
设$A$是$n$阶厄米方阵，即$A=\bar A^T$，则$A$可以酉相似于对角方阵。
:::

::: proof
由$A$是$n$阶厄米方阵
$$
A\bar A^T= A^2=\bar A^T A
$$
故$A$是正规矩阵。由 @prop:normal-diag，$A$可以酉相似于对角方阵。
:::

::: proposition
设$A$是$n$阶厄米方阵，则$A$的特征值均为实数。
$A$是正定（半正定）当且仅当$A$的特征值均为正数（非负数）。
:::

::: proof
类似 @prop:sym-real-eigen、@prop:real-positive 和 @prop:real-semipositive。
:::

::: proposition {@prop:square-root-complex}
设$A$是$n$阶半正定厄米方阵。则存在唯一的半正定厄米方阵$B$使得$A=B^2$。记$B=\sqrt{A}$。
:::

::: proof
类似 @prop:square-root。
:::

## 奇异值分解*

设$A$是$m\times n$复矩阵。考虑$n$阶方阵$\bar A^T A$。对于任意$\mathbf{z}\in \mathbb{C} ^n$
$$
\bar{\mathbf{z}}^T (\bar A^TA) \mathbf{z}=\overline{(A\mathbf{z})}^T (A\mathbf{z})\geq 0
$$
因此$\bar A^TA$是$n$阶半正定厄米方阵。同理，$A \bar A^T$是$m$阶半正定厄米方阵。
并且$\bar A^TA$和$A \bar A^T$具有相同的非零特征值。

::: definition
设$A$是$m\times n$复矩阵。
半正定厄米方阵$\bar A^TA$（或$A\bar A^T$）的非零特征值的平方根称为$A$的奇异值。
:::

设$\bar A^TA$的所有非零特征值为$\mu_1,\cdots,\mu_r$，
则$A$的所有奇异值为$\sigma_1=\sqrt{\mu_1},\cdots,\sigma_r=\sqrt{\mu_r}$。

::: proposition
设$A$是$n$阶厄米方阵。则$A$的所有奇异值为所有非零特征值的绝对值。
:::

::: proof
类似 @prop:sym-sing-eigen。
:::

对于非厄米方阵，奇异值和特征值没有这样的直接联系。

::: theorem [奇异值分解]
设$\sigma_1\geq \cdots \geq \sigma_r>0$是$m\times n$阶复矩阵$A$的所有奇异值。
则存在$m$阶酉矩阵$U$和$n$阶酉矩阵$V$使得$A=U \Sigma \bar V^T$，其中

$$
\Sigma=  \begin{bmatrix}
 \begin{bmatrix}
  \sigma_1 & 0 & \cdots & 0\\
  0 & \sigma_2 & \cdots & 0\\
  \cdots & \cdots & \cdots & \cdots \\
  0 & \cdots & 0 & \sigma_r
  \end{bmatrix} & 0_{r\times (n-r)}\\
  0_{(m-r)\times r} & 0_{(m-r)\times (n-r)}
\end{bmatrix}
$$
这里$0_{k\times l}$表示$k\times l$的零矩阵。
:::

::: proof
类似 @prop:SVD-real。
:::
