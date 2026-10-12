---
title: 相似变换
---

## 相似与对角化*

::: definition
两个$n$阶方阵$A$与$B$称为是相似的，如果存在$n$阶可逆方阵$P$使得
$$
A=PBP^{-1}
$$
:::

容易验证，相似关系构成一个等价关系，即满足

- 自反性：$A$与$A$相似

- 对称性：若$A$与$B$相似，则$B$与$A$相似

- 传递性：若$A$与$B$相似，$B$与$C$相似，则$A$与$C$相似

::: proposition
如果$A$与$B$相似，$f(x)$是任意一个多项式。则$f(A)$与$f(B)$相似。
:::

::: proof
设$A=PBP^{-1}$。则对任意正整数$m$
$$
A^m=(PBP^{-1})(PBP^{-1})\cdots (PBP^{-1})=PB^mP^{-1}
$$
由此易知$f(A)=P\ f(B)\ P^{-1}$。
:::

::: proposition
如果$A$与$B$相似，则它们具有相同的特征多项式。特别地，我们有
$$
\operatorname{Tr} A=\operatorname{Tr} B \qquad  \det A=\det B
$$
:::

::: proof
设$A=PBP^{-1}$。则
\[
\begin{aligned}
\det(\lambda I-A)=&\det(\lambda I-PBP^{-1})=\det(P(\lambda I-B)P^{-1})\\
=&\det(P)\det(\lambda I-B)\det (P^{-1})\\=&\det(\lambda I-B)
\end{aligned}
\]
:::

::: definition
$n$阶方阵$A$称为可对角化，如果$A$相似于一个对角阵$\operatorname{diag}(\lambda_1,\cdots,\lambda_n)$。
这里
$$
\operatorname{diag}(\lambda_1,\cdots,\lambda_n):=\begin{bmatrix}
\lambda_1 & 0 & \cdots & 0\\
0 & \lambda_2 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots  & 0 & \lambda_n
\end{bmatrix}
$$
:::

如果$A$相似于$\operatorname{diag}(\lambda_1,\cdots,\lambda_n)$，则$A$的特征多项式和这个对角阵相同
$$
\varphi(\lambda)=(\lambda-\lambda_1)(\lambda-\lambda_2)\cdots (\lambda-\lambda_n)
$$
因此这个对角阵的元素即为$A$的特征值。

假设$A$可对角化，
$
A=P \operatorname{diag}(\lambda_1,\cdots,\lambda_n) P^{-1}
$，即
$$
AP =P \operatorname{diag}(\lambda_1,\cdots,\lambda_n)
$$
记$P$的列向量为$\{\vec{\beta}_1,\cdots, \vec{\beta}_n\}$
$$
P=\begin{bmatrix}
 \vec{\beta}_1 & \vec{\beta}_2 & \cdots & \vec{\beta}_n
\end{bmatrix}
$$
由$P$可逆知$\operatorname{rank} P=n$，因此$\{\vec{\beta}_1,\cdots, \vec{\beta}_n\}$构成一组基。

等式$A=P \operatorname{diag}(\lambda_1,\cdots,\lambda_n) P^{-1}$可以写成
$$
A \begin{bmatrix}
 \vec{\beta}_1 & \vec{\beta}_2 & \cdots & \vec{\beta}_n
\end{bmatrix}=\begin{bmatrix}
 \vec{\beta}_1 & \vec{\beta}_2 & \cdots & \vec{\beta}_n
\end{bmatrix}
\begin{bmatrix}
\lambda_1 & 0 & \cdots & 0\\
0 & \lambda_2 & \cdots & 0\\
\cdots & \cdots & \cdots & 0\\
0 & \cdots  & 0 & \lambda_n
\end{bmatrix}
$$
即
$$
A \vec{\beta}_i=\lambda_i \vec{\beta}_i, \qquad i=1,\cdots, n
$$
这说明$\vec{\beta}_i$是属于$\lambda_i$的特征向量。由上述讨论，我们证明了如下结论

::: proposition {@prop:diag-eigenvector}
$n$阶方阵$A$可对角化当且仅当存在一组基$
\{\vec{\beta}_1,\cdots, \vec{\beta}_n\}$使得每个$\vec{\beta}_i$都是$A$的特征向量。
:::

在这个情况下，我们把任意向量$\vec{x}$通过基$
\{\vec{\beta}_1,\cdots, \vec{\beta}_n\}$来线性表达：$\vec{x}=\sum\limits_i c_i \vec{\beta}_i$。则矩阵$A$乘在向量$\vec{x}$上很容易计算出
$$
A\vec{x}=\sum_i c_i \lambda_i \vec{\beta}_i
$$

::: example
并不是每个方阵都可以对角化，例如
$$
A= \begin{bmatrix} \lambda_0 & 1 & 0 & \cdots & 0\\
0 & \lambda_0 & 1 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots& \cdots\\
0 & 0 & \cdots & \lambda_0 & 1\\
0 & 0 & \cdots & 0 & \lambda_0\end{bmatrix}
$$
$A$的特征值只有$\lambda_0$，我们考虑它的特征向量。齐次线性方程组
$$
(\lambda_0 I_n -A)\vec{x}=0 \Longleftrightarrow \begin{bmatrix} 0 & -1 & 0 & \cdots & 0\\
0 & 0 & -1 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots& \cdots\\
0 & 0 & \cdots & 0 & -1\\
0 & 0 & \cdots & 0 & 0\end{bmatrix}\begin{bmatrix}
x_1 \\ x_2\\ \vdots \\ x_{n-1} \\x_n
\end{bmatrix}=0
$$
的解为$x_1=c, x_2=x_3=\cdots=x_n=0$。
因此$\lambda_0$的特征向量只有一个线性无关的元素，它不可能构成$n$维空间（$n>1$）的一组基。
这说明方阵$A$不可对角化。
:::

::: proposition {@prop:eigen-diagonal}
如果数域$k$上$n$阶方阵$A$具有$n$个互不相同的特征值在$k$中，则$A$可以对角化。
:::

::: proof
设$A$的特征值为$\lambda_1,\cdots,\lambda_n$。由假设这些特征值互不相同。
设$\vec{\beta}_i$是属于$\lambda_i$的一个特征向量。
我们下面证明$\{\vec{\beta}_1,\cdots, \vec{\beta}_n\}$线性无关。
由此知$\{\vec{\beta}_1,\cdots, \vec{\beta}_n\}$构成$n$维空间的一组基，因此$A$可对角化。

假设有系数$c_1,\cdots,c_n$使得
$$
c_1 \vec{\beta}_1+c_2\vec{\beta}_2+\cdots+ c_n \vec{\beta}_n=0
$$
两边依次乘以$A, A^2,\cdots, A^{n-1}$，我们得到
$$
\begin{cases}
c_1 \vec{\beta}_1+c_2\vec{\beta}_2+\cdots+ c_n \vec{\beta}_n=0\\
\lambda_1 c_1 \vec{\beta}_1+\lambda_2 c_2\vec{\beta}_2+\cdots+ \lambda_nc_n \vec{\beta}_n=0\\
\qquad \qquad \cdots \cdots\\
\lambda_1^{n-1}c_1 \vec{\beta}_1+\lambda_2^{n-1}c_2\vec{\beta}_2+\cdots+ \lambda_n^{n-1}c_n \vec{\beta}_n=0
\end{cases}
$$

我们可以把这组方程写成矩阵的形式
$$
\begin{bmatrix}
c_1\vec{\beta}_1 & c_2 \vec{\beta}_2 & \cdots & c_n \vec{\beta}_n
\end{bmatrix}
\begin{bmatrix}
1 & \lambda_1 & \lambda_1^2 & \cdots & \lambda_1^{n-1}\\
1 & \lambda_2 & \lambda_2^2 & \cdots & \lambda_2^{n-1}\\
\cdots & \cdots & \cdots & \cdots & \cdots\\
1 & \lambda_n & \lambda_n^2 & \cdots & \lambda_n^{n-1}
\end{bmatrix}=0
$$
记$P=\begin{bmatrix}
c_1\vec{\beta}_1 & c_2 \vec{\beta}_2 & \cdots & c_n \vec{\beta}_n
\end{bmatrix}$，$Q=\begin{bmatrix}
1 & \lambda_1 & \lambda_1^2 & \cdots & \lambda_1^{n-1}\\
1 & \lambda_2 & \lambda_2^2 & \cdots & \lambda_2^{n-1}\\
\cdots & \cdots & \cdots & \cdots & \cdots\\
1 & \lambda_n & \lambda_n^2 & \cdots & \lambda_n^{n-1}
\end{bmatrix}$，则上式为
$$
PQ=0
$$

由Vandermonde行列式
$$
\det Q= \prod_{i>j}(\lambda_i-\lambda_j)\neq 0
$$
故$Q$可逆。因此$PQ=0 \Longrightarrow P=0$，即$P$的每列$c_i\vec{\beta}_i=0$。
由于$\vec{\beta}_i$都是非零向量，我们得出$c_i=0, i=1,\cdots,n$。
这证明了$\{\vec{\beta}_1,\cdots, \vec{\beta}_n\}$是线性无关的向量。
:::

::: example
设$A = \begin{bmatrix}
2 & 1 & 0 \\
0 & 3 & 0 \\
0 & 1 & 1
\end{bmatrix}$，计算$A^{100}$。

我们首先计算$A$的特征多项式

$$
\begin{vmatrix}
\lambda-2 & -1 & 0\\
0 & \lambda-3 & 0\\
0 & -1 & \lambda-1
\end{vmatrix}=(\lambda-2)(\lambda-3)(\lambda-1)
$$
$A$有$3$个不同的特征值$2,3,1$，因此可对角化。

我们计算特征值$\lambda_1=2, \lambda_2=3, \lambda_3=1$对应的特征向量
$\vec{\beta}_1, \vec{\beta}_2, \vec{\beta}_3$
\[
\begin{aligned}
&(\lambda_1 I-A)\vec{\beta}_1=\begin{bmatrix}
0 & -1 & 0\\
0 & -1 & 0\\
0 & -1 & 1
\end{bmatrix}\vec{\beta}_1=0 && \text{取}\qquad  \vec{\beta}_1=\begin{bmatrix} 1 \\ 0 \\ 0\end{bmatrix}\\
&(\lambda_2 I-A)\vec{\beta}_2=\begin{bmatrix}
1 & -1 & 0\\
0 & 0 & 0\\
0 & -1 & 2
\end{bmatrix}\vec{\beta}_2=0 && \text{取}\qquad  \vec{\beta}_2=\begin{bmatrix} 2 \\ 2 \\ 1\end{bmatrix}\\
&(\lambda_3 I-A)\vec{\beta}_3=\begin{bmatrix}
-1 & -1 & 0\\
0 & -2 & 0\\
0 & -1 & 0
\end{bmatrix}\vec{\beta}_3=0 && \text{取}\qquad  \vec{\beta}_3=\begin{bmatrix} 0 \\ 0 \\ 1\end{bmatrix}
\end{aligned}
\]

记矩阵
$$
P=\begin{bmatrix}
\vec{\beta}_1 & \vec{\beta}_2 & \vec{\beta}_3
\end{bmatrix}=\begin{bmatrix}
1 & 2 & 0\\
0 & 2 & 0\\
0 & 1 & 1
\end{bmatrix}
$$
容易计算
$$
P^{-1}=\begin{bmatrix}
1 & -1 & 0\\
0 & 1/2 & 0\\
0 & -1/2 & 1
\end{bmatrix}
$$

我们得到相似变换 $A=P \begin{bmatrix}
2 & 0 & 0\\
0 & 3 & 0\\
0 & 0 & 1
\end{bmatrix}P^{-1}$。因此
\[
\begin{aligned}
A^{100}=& P \begin{bmatrix}
2 & 0 & 0\\
0 & 3 & 0\\
0 & 0 & 1
\end{bmatrix}^{100}P^{-1}=P \begin{bmatrix}
2^{100} & 0 & 0\\
0 & 3^{100} & 0\\
0 & 0 & 1
\end{bmatrix}P^{-1}
\\
=&
\begin{bmatrix}
1 & 2 & 0\\
0 & 2 & 0\\
0 & 1 & 1
\end{bmatrix}
\begin{bmatrix}
2^{100} & 0 & 0\\
0 & 3^{100} & 0\\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
1 & -1 & 0\\
0 & 1/2 & 0\\
0 & -1/2 & 1
\end{bmatrix}\\
=& \begin{bmatrix}
2^{100} & 3^{100}-2^{100} & 0\\
0 & 3^{100} & 0\\
0 & (3^{100}-1)/2 & 1
\end{bmatrix}
\end{aligned}
\]
:::

## 相似变换的几何含义*

设$f:k^n\to k^n$是一个线性映射。我们知道可以把$f$对应于一个$n$阶方阵$A$。
具体而言，取$k^n$的标准基$\{\vec{e}_1,\cdots,\vec{e}_n\}$，计算
$$
f(\vec{e}_j)=\sum_i a_{ij}\vec{e}_i
$$
则$A=(a_{ij})$。实际上，除了标准基，我们也可以取另外一组基作类似的构造。

::: definition
设$f:k^n\to k^n$是一个线性映射。给定$k^n$的一组基$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_n\}$，设
$$
f(\vec{\alpha}_j)=\sum_i a_{ij}\vec{\alpha}_i
$$
则方阵$A=(a_{ij})$称为$f$在这组基$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_n\}$下的表示矩阵。
:::

我们把$f$在基$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_n\}$下的表示矩阵写成矩阵关系
\[
\begin{aligned}
\begin{bmatrix}
f(\vec{\alpha}_1) & f(\vec{\alpha}_2) & \cdots & f(\vec{\alpha}_n)
\end{bmatrix}
=\begin{bmatrix}
\vec{\alpha}_1 & \vec{\alpha}_2 & \cdots &\vec{\alpha}_n
\end{bmatrix} \begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{n1} & a_{n2} & \cdots & a_{nn}
\end{bmatrix}
\end{aligned}
\]

如果我们取$k^n$中两组不同的基$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_n\}$和
$\{\vec{\beta}_1,\cdots, \vec{\beta}_n\}$。
设$f$在基$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_n\}$下的表示矩阵为$A$，
在基$\{\vec{\beta}_1,\cdots, \vec{\beta}_n\}$下的表示矩阵为$B$。那么矩阵$A$和$B$是什么关系？

由于$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_n\}$是一组基，
我们可以把向量$\vec{\beta}_j$在这组基下作线性展开
$$
\vec{\beta}_j=\sum_i p_{ij}\vec{\alpha}_i
$$
写成矩阵的形式
\[
\begin{aligned}
\begin{bmatrix}
\vec{\beta}_1 & \vec{\beta}_2 & \cdots & \vec{\beta}_n
\end{bmatrix}
=\begin{bmatrix}
\vec{\alpha}_1 & \vec{\alpha}_2 & \cdots &\vec{\alpha}_n
\end{bmatrix} \begin{bmatrix}
 p_{11} & p_{12} & \cdots & p_{1n}\\
 p_{21} & p_{22} & \cdots & p_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 p_{n1} & p_{n2} & \cdots & p_{nn}
\end{bmatrix}
\end{aligned}
\]
这个$n$阶方阵$P=(p_{ij})$称为从基$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_n\}$到基
$\{\vec{\beta}_1,\cdots, \vec{\beta}_n\}$的过渡矩阵。

::: proposition
一组基$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_n\}$到另一组基$\{\vec{\beta}_1,\cdots, \vec{\beta}_n\}$
的过渡矩阵$P$是可逆矩阵，
且$P^{-1}$是基$\{\vec{\beta}_1,\cdots, \vec{\beta}_n\}$ 到基
$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_n\}$的过渡矩阵。
:::

::: proof
设基$\{\vec{\beta}_1,\cdots, \vec{\beta}_n\}$ 到基$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_n\}$
的过渡矩阵为$Q$。则
\[
\begin{aligned}
\begin{bmatrix}
\vec{\beta}_1 & \vec{\beta}_2 & \cdots & \vec{\beta}_n
\end{bmatrix}
=\begin{bmatrix}
\vec{\alpha}_1 & \vec{\alpha}_2 & \cdots &\vec{\alpha}_n
\end{bmatrix} P\\
\begin{bmatrix}
\vec{\alpha}_1 & \vec{\alpha}_2 & \cdots &\vec{\alpha}_n
\end{bmatrix}
= \begin{bmatrix}
\vec{\beta}_1 & \vec{\beta}_2 & \cdots & \vec{\beta}_n
\end{bmatrix}Q
\end{aligned}
\]
把两个等式复合，我们得到
\[
\begin{aligned}
\begin{bmatrix}
\vec{\alpha}_1 & \vec{\alpha}_2 & \cdots &\vec{\alpha}_n
\end{bmatrix}
= \begin{bmatrix}
\vec{\alpha}_1 & \vec{\alpha}_2 & \cdots &\vec{\alpha}_n
\end{bmatrix} PQ
\end{aligned}
\]
即
\[
\begin{aligned}
\begin{bmatrix}
\vec{\alpha}_1 & \vec{\alpha}_2 & \cdots &\vec{\alpha}_n
\end{bmatrix}(I_n-PQ)=0
\end{aligned}
\]
由$\{\vec{\alpha}_i\}$的线性无关性，我们得到$PQ=I_n$。
:::

::: theorem
设线性映射$f:k^n\to k^n$在基$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_n\}$下的表示矩阵为$A$，
在基$\{\vec{\beta}_1,\cdots, \vec{\beta}_n\}$下的表示矩阵为$B$。
设基$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_n\}$到基$\{\vec{\beta}_1,\cdots, \vec{\beta}_n\}$
的过渡矩阵为$P$。则
$$
A=PBP^{-1}
$$
:::

::: proof
过渡矩阵关系为
\[
\begin{aligned}
\begin{bmatrix}
\vec{\beta}_1 & \vec{\beta}_2 & \cdots & \vec{\beta}_n
\end{bmatrix}
=&\begin{bmatrix}
\vec{\alpha}_1 & \vec{\alpha}_2 & \cdots &\vec{\alpha}_n
\end{bmatrix} P
\end{aligned}
\]

由于$f$是线性映射，两边作用映射$f$给出
$$
\begin{bmatrix}
f(\vec{\beta}_1) & f(\vec{\beta}_2) & \cdots & f(\vec{\beta}_n)
\end{bmatrix}
=\begin{bmatrix}
f(\vec{\alpha}_1) & f(\vec{\alpha}_2) & \cdots &f(\vec{\alpha}_n)
\end{bmatrix} P
$$
代入$f$在基下表示矩阵的关系
\[
\begin{aligned}
\begin{bmatrix}
f(\vec{\alpha}_1) & f(\vec{\alpha}_2) & \cdots & f(\vec{\alpha}_n)
\end{bmatrix}
=&\begin{bmatrix}
\vec{\alpha}_1 & \vec{\alpha}_2 & \cdots &\vec{\alpha}_n
\end{bmatrix} A\\
\begin{bmatrix}
f(\vec{\beta}_1) & f(\vec{\beta}_2) & \cdots & f(\vec{\beta}_n)
\end{bmatrix}
=&\begin{bmatrix}
\vec{\beta}_1 & \vec{\beta}_2 & \cdots &\vec{\beta}_n
\end{bmatrix} B
\end{aligned}
\]
我们得到
\[
\begin{aligned}
\begin{bmatrix}
\vec{\beta}_1 & \vec{\beta}_2 & \cdots &\vec{\beta}_n
\end{bmatrix} B=\begin{bmatrix}
\vec{\alpha}_1 & \vec{\alpha}_2 & \cdots &\vec{\alpha}_n
\end{bmatrix} A P
\end{aligned}
\]

再次代入过渡矩阵关系，上述等式变为

\[
\begin{aligned}
\begin{bmatrix}
\vec{\alpha}_1 & \vec{\alpha}_2 & \cdots &\vec{\alpha}_n
\end{bmatrix} PB=\begin{bmatrix}
\vec{\alpha}_1 & \vec{\alpha}_2 & \cdots &\vec{\alpha}_n
\end{bmatrix} A P
\end{aligned}
\]
即
\[
\begin{aligned}
\begin{bmatrix}
\vec{\alpha}_1 & \vec{\alpha}_2 & \cdots &\vec{\alpha}_n
\end{bmatrix} (PB-AP)=0
\end{aligned}
\]
由$\{\vec{\alpha}_i\}$的线性无关性，我们得到$PB=AP$。
:::

::: remark*
这个命题给出了相似变换的几何含义：
相似变换是同一个线性映射$f:k^n\to k^n$在不同基下表示矩阵之间的变换。
:::
