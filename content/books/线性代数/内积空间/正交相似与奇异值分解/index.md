---
title: 正交相似与奇异值分解
---

## 正交相似*

::: definition
设 $A$ 和 $B$ 是两个 $n$阶实方阵。如果存在一个 $n$ 阶正交矩阵 $Q$，使得
$$
B = Q A Q^{-1}
$$
则称矩阵 $A$ 和 $B$正交相似。由于$Q$是正交方阵，此时也可以写成$B=QAQ^T$。
:::

正交相似是比相似更强的关系。如果两个矩阵正交相似，则它们一定相似；但反之则不一定成立。

::: example
考虑如下两个矩阵
$$
A=\begin{bmatrix}
 1  & 0\\
 0 & 2
\end{bmatrix}\qquad B=\begin{bmatrix}
 1  & 1\\
 0 & 2
\end{bmatrix}
$$
由于$B$有两个不同的特征值$1,2$，$B$可以对角化为$A$，因此$A$与$B$相似。

然而$A$与$B$不是正交相似的。假如存在正交方阵$Q$使得$B=Q A Q^{-1}$。
由$Q$是正交方阵，$Q^{-1}=Q^T$，我们也可以写成$B=QAQ^T$。因此
$$
B^T=(QAQ^T)^T=QA^TQ^T=QAQ^T=B
$$
由此得出$B$是对称方阵，矛盾。
:::

::: proposition {@prop:real-upper}
设$A$是$n$阶实方阵，且所有特征值均为实数。则$A$正交相似于一个上三角方阵。
:::

::: proof
我们对$n$作归纳。设$\lambda_1$是$A$的一个特征值。
由假设$\lambda_1\in \mathbb{R} $，
设$\vec{\beta}_1\in \mathbb{R} ^n$是属于$\lambda_1$的一个特征向量。不妨设$\|\vec{\beta}_1\|=1$。
通过Gram–Schmidt正交化，
我们可以把$\vec{\beta}_1$延拓为$\mathbb{R} ^n$的一组标准正交基
$\{\vec{\beta}_1,\cdots, \vec{\beta}_n\}$。把这组列向量组成$n$阶方阵
$$
P=\begin{bmatrix}
 \vec{\beta}_1 & \cdots & \vec{\beta}_n
\end{bmatrix}
$$

由于$\{\vec{\beta}_1,\cdots,\cdots, \vec{\beta}_n\}$是标准正交基，$P$是正交方阵。
由$\vec{\beta}_1$是特征向量，有
$$
A P=P\begin{bmatrix} \lambda_1 & * \\
0 & B\end{bmatrix}
$$
这里$B$是$n-1$阶方阵。由于$A$与$\begin{bmatrix} \lambda_1 & * \\
0 & B\end{bmatrix}$相似，$B$的特征值
均为$A$的特征值故为实数。由归纳假设，存在$n-1$阶正交方阵$Q$使得
$$
B=Q \begin{bmatrix}
\lambda_2 & * & \cdots & *\\
0 & \lambda_3 & \cdots & * \\
0 & \cdots & \cdots & * \\
0 & \cdots & 0 & \lambda_n
\end{bmatrix} Q^{-1}
$$

因此
$$
A=P \begin{bmatrix}
 1& 0\\
 0 & Q
\end{bmatrix}\begin{bmatrix}
\lambda_1 & * & \cdots & *\\
0 & \lambda_2 & \cdots & * \\
0 & \cdots & \cdots & * \\
0 & \cdots & 0 & \lambda_n
\end{bmatrix}\begin{bmatrix}
 1& 0\\
 0 & Q^{-1}
\end{bmatrix} P^{-1}
$$
$P\begin{bmatrix}
 1& 0\\
 0 & Q
\end{bmatrix}$是正交方阵，由归纳知命题成立。
:::

## 实对称方阵*

::: proposition {@prop:sym-real-eigen}
设$A$是实对称方阵，即$A=A^T$。则$A$的特征值都是实数。
:::

::: proof
设$\lambda_0$是$A$的特征值。设复列向量$\vec{\beta}\in \mathbb{C} ^n$是属于$\lambda_0$的特征向量，即
$
A\vec{\beta}=\lambda_0 \vec{\beta}
$。设
$$
\vec{\beta}=\begin{bmatrix}
z_1\\ \cdots \\ z_n
\end{bmatrix}
$$
则特征向量说明
$$
\sum_j A_{ij}z_j=\lambda_0 z_i
$$

两边乘以$\bar z_i$相加，得到
$$
\sum_{ij}A_{ij}\bar{z}_i z_j=\lambda_0 \sum_i |z_i|^2
$$
由于$A$是对称实方阵，$A_{ij}=A_{ji}$
$$
\overline{\sum_{ij}A_{ij}\bar{z}_i z_j}=\sum_{ij}A_{ij}z_i \bar z_j=\sum_{ij}A_{ji}\bar{z}_j z_i
$$
因此$\sum\limits_{ij}A_{ij}\bar{z}_i z_j$是实数。
故$\lambda_0=\frac{\sum\limits_{ij}A_{ij}\bar{z}_i z_j}{\sum\limits_i |z_i|^2}$是实数。
:::

::: proposition {@prop:sym-sim-diag}
设$A$是实对称方阵，则$A$正交相似于对角阵。
:::

::: proof
由 @prop:sym-real-eigen 知$A$的特征值均为实数。由 @prop:real-upper 知存在正交方阵$P$使得
$
B= P A P^{-1}
$
是上三角方阵。由
$$
B^T=(PAP^{-1})^T=(PAP^T)^T=PA^TP^T=PAP^T=B
$$
知$B$也是对称方阵，因此$B$是对角方阵。
:::

::: proposition {@prop:real-positive}
实对称方阵$A$是正定方阵当且仅当$A$的每个特征值均大于零。
:::

::: proof
由$A$是实对称方阵，存在正交方阵$P$使得

$$
A=P^{-1} \begin{bmatrix}
\lambda_1 & 0 & \cdots & 0\\
0 & \lambda_2 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & \lambda_n
\end{bmatrix} P
$$
这里$\lambda_1,\cdots,\lambda_n$为$A$的所有特征值。
对任意向量$\vec{x}\in \mathbb{R} ^n$，令$\vec{y}=P \vec{x}$。则

$$
\vec{x}^T A \vec{x}=\vec{y}^TP A P^{-1} \vec{y}=\vec{y}^T \begin{bmatrix}
\lambda_1 & 0 & \cdots & 0\\
0 & \lambda_2 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & \lambda_n
\end{bmatrix} \vec{y}=\sum\limits_{i=1}^n \lambda_i y_i^2
$$
由此易知$\vec{x}^T A \vec{x}>0$对任意非零向量$\vec{x}$成立当且仅当每个特征值$\lambda_i>0$。
:::

::: definition
一个 $n$阶实对称方阵 $A$ 称为半正定矩阵，如果对任意列向量 $\vec{x}\in \mathbb{R} ^n$，都有
$$
\vec{x}^T A \vec{x} \geq 0 \quad \text{即}
\quad \sum\limits_{i,j=1}^nA_{ij}x_ix_j\geq 0
$$
:::

类似的方法可以证明

::: proposition {@prop:real-semipositive}
实对称方阵$A$是半正定方阵当且仅当$A$的每个特征值均非负。
:::

::: proposition {@prop:square-root}
设$A$是$n$阶半正定对称方阵。则存在唯一的半正定对称方阵$B$使得$A=B^2$。
:::

::: proof
设$A$的特征值为$\lambda_1\geq \cdots\geq \lambda_n\geq 0$。存在正交方阵$P$使得

$$
A=P^{-1} \begin{bmatrix}
\lambda_1 & 0 & \cdots & 0\\
0 & \lambda_2 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & \lambda_n
\end{bmatrix} P
$$

取
$$
B=P^{-1} \begin{bmatrix}
\sqrt{\lambda_1} & 0 & \cdots & 0\\
0 & \sqrt{\lambda_2} & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & \sqrt{\lambda_n}
\end{bmatrix} P
$$
则$B$是半正定对称方阵且$B^2=A$成立。下证唯一性。

假设有两个半正定对称方阵$B, \tilde B$使得
$$
B^2 =\tilde B^2= A
$$
设$B$和$\tilde B$的特征值分别为$\mu_1\geq \cdots \geq \mu_n\geq 0$和
$\tilde \mu_1\geq \cdots \geq \tilde \mu_n\geq 0$。存在正交方阵$P, \tilde P$使得

$$
B=P^{-1} \begin{bmatrix}
\mu_1 & 0 & \cdots & 0\\
0 & \mu_2 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & \mu_n
\end{bmatrix} P\qquad \tilde B=\tilde P^{-1} \begin{bmatrix}
\tilde\mu_1 & 0 & \cdots & 0\\
0 & \tilde\mu_2 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & \tilde \mu_n
\end{bmatrix} \tilde P
$$

因此$B^2=A$的特征值为$\mu_1^2\geq \cdots\geq \mu_n^2\geq 0$，故$\mu_i=\sqrt{\lambda_i}$。
同理$\tilde \mu_i=\sqrt{\lambda_i}$，即$B$与$\tilde B$的特征值相同。由$B^2=\tilde B^2=A$知

\[
\begin{aligned}
P^{-1}\begin{bmatrix}
{\lambda_1} & 0 & \cdots & 0\\
0 & {\lambda_2} & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & {\lambda_n}
\end{bmatrix} P=\tilde P^{-1}\begin{bmatrix}
{\lambda_1} & 0 & \cdots & 0\\
0 & {\lambda_2} & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & {\lambda_n}
\end{bmatrix} \tilde P
\end{aligned}
\]

令$Q=\tilde P P^{-1}$，其为正交方阵。则

\[
\begin{aligned}
Q\begin{bmatrix}
{\lambda_1} & 0 & \cdots & 0\\
0 & {\lambda_2} & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & {\lambda_n}
\end{bmatrix} = \begin{bmatrix}
{\lambda_1} & 0 & \cdots & 0\\
0 & {\lambda_2} & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & {\lambda_n}
\end{bmatrix} Q
\end{aligned}
\]
这个等式写成矩阵元$Q=(Q_{ij})$的形式为
$$
Q_{ij}(\lambda_i-\lambda_j)=0\qquad i,j=1,\cdots,n
$$

无论对$\lambda_i$是否等于$\lambda_j$，我们均有
$$
Q_{ij}(\sqrt{\lambda_i}-\sqrt{\lambda_j})=0\qquad i,j=1,\cdots,n
$$
转化为矩阵形式，我们得到
\[
\begin{aligned}
Q\begin{bmatrix}
\sqrt{\lambda_1} & 0 & \cdots & 0\\
0 & \sqrt{\lambda_2} & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & \sqrt{\lambda_n}
\end{bmatrix} = \begin{bmatrix}
\sqrt{\lambda_1} & 0 & \cdots & 0\\
0 & \sqrt{\lambda_2} & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & \sqrt{\lambda_n}
\end{bmatrix} Q
\end{aligned}
\]

带回$Q=\tilde P P^{-1}$，即得
\[
\begin{aligned}
B=P^{-1}\begin{bmatrix}
\sqrt{\lambda_1} & 0 & \cdots & 0\\
0 & \sqrt{\lambda_2} & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & \sqrt{\lambda_n}
\end{bmatrix} P=\tilde P^{-1}\begin{bmatrix}
\sqrt{\lambda_1} & 0 & \cdots & 0\\
0 & \sqrt{\lambda_2} & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & \sqrt{\lambda_n}
\end{bmatrix} \tilde P=\tilde B
\end{aligned}
\]
:::

由 @prop:square-root 知对于半正定对称方阵$A$，我们有唯一确定的半正定对称方阵$B$使得$B^2=A$成立。
我们把这个半正定对称方阵记作$\sqrt{A}$，其满足
$$
(\sqrt{A})^2=A
$$
$\sqrt{A}$称为$A$的平方根。类似的方法可以证明，存在唯一的开$k$次方的半正定对称方阵$\sqrt[k]{A}$。

## 奇异值分解*

设$A$是$m\times n$实矩阵。考虑$n$阶矩阵$A^T A$。对于任意$\vec{x}\in \mathbb{R} ^n$
$$
\vec{x}^T (A^TA) \vec{x}=(A\vec{x})^T (A\vec{x})\geq 0
$$
因此$A^TA$是$n$阶半正定对称方阵。同理，$A A^T$是$m$阶半正定对称方阵。

由第三章习题9知
$$
\lambda^m \det (\lambda I_n-A^TA)=\lambda^n \det(\lambda I_m-A A^T)
$$
这说明$A^TA$和$AA^T$具有相同的非零特征值。

::: definition
设$A$是$m\times n$实矩阵。
则$n$阶半正定对称方阵$A^TA$（或$AA^T$）的非零特征值的平方根称为$A$的奇异值。
:::

设$A^TA$的所有非零特征值为$\mu_1,\cdots,\mu_r$，
则$A$的所有奇异值为$\sqrt{\mu_1},\cdots,\sqrt{\mu_r}$。

::: proposition {@prop:sym-sing-eigen}
设$A$是$n$阶实对称方阵。则$A$的所有奇异值为所有非零特征值的绝对值。
:::

::: proof
设$A$的所有特征值为$\lambda_1,\cdots,\lambda_n$。由 @prop:sym-sim-diag 知$A$可对角化。
由此易知$A^T A=A^2$的特征值为$\lambda_1^2,\cdots,\lambda_n^2$。由此即得命题。
:::

::: example
考虑方阵$A=\begin{bmatrix} 1 & 1\\ 0 & 1 \end{bmatrix}$。
$$
A^TA=\begin{bmatrix} 1 & 0\\ 1 & 1 \end{bmatrix}\begin{bmatrix} 1 & 1\\ 0 & 1 \end{bmatrix}=\begin{bmatrix} 1 & 1\\ 1 & 2 \end{bmatrix}
$$
$A^TA$的特征多项式为
$\begin{vmatrix} \lambda -1 & -1 \\ -1 & \lambda-2\end{vmatrix}=\lambda^2-3\lambda+1$，
解得$A^TA$的两个特征值为$\frac{3\pm \sqrt{5}}{2}$。故$A$有两个奇异值
$$
\sqrt{\frac{3\pm \sqrt{5}}{2}}
$$
而$A$的两个特征值均为$1$。因此当方阵$A$不对称时候，奇异值和特征值的绝对值并不一样。
:::

::: theorem [奇异值分解] {@prop:SVD-real}
设$\sigma_1\geq \cdots \geq \sigma_r>0$是$m\times n$阶实矩阵$A$的所有奇异值。
则存在$m$阶正交方阵$U$和$n$阶正交方阵$V$使得$A=U\Sigma V^T$，其中
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
由奇异值的定义，存在$n$阶正交方阵$V$使得
$$
V^TA^TAV= \operatorname{diag}(\sigma_1^2,\cdots,\sigma_r^2,0,\cdots,0)
$$
把$AV=\begin{bmatrix}
\vec{\alpha}_1 &\cdots & \vec{\alpha}_n
\end{bmatrix}$写成$\mathbb{R} ^m$中列向量，则
\[
\begin{aligned}
V^TA^TAV=(AV)^T(AV)=\begin{bmatrix}
\vec{\alpha}_1^T \\ \vdots \\ \vec{\alpha}_n^T
\end{bmatrix}\begin{bmatrix}
\vec{\alpha}_1 &\cdots & \vec{\alpha}_n
\end{bmatrix}=\begin{bmatrix}
\vec{\alpha}_1^T \vec{\alpha}_1 & \cdots & \vec{\alpha}_1^T \vec{\alpha}_n\\
\cdots & \cdots & \cdots \\
\vec{\alpha}_n^T \vec{\alpha}_1 & \cdots & \vec{\alpha}_n^T \vec{\alpha_n}
\end{bmatrix}
\end{aligned}
\]

对$i>r$，我们有
\[
\begin{aligned}
\vec{\alpha}_i^T\vec{\alpha}_i=0 \quad \Longrightarrow \quad \vec{\alpha}_i=0
\end{aligned}
\]
对$1\leq i,j\leq r$，
$$
\vec{\alpha}_i^T \vec{\alpha}_j=\delta_{ij} \sigma_i^2
$$

记
$\vec{\beta}_1=\sigma_{1}^{-1}\vec{\alpha}_1,\cdots, \vec{\beta}_r=\sigma_{r}^{-1}\vec{\alpha}_r$。
则$\{\vec{\beta}_i\}$两两正交且长度均为$1$。
我们把它们扩展为$\mathbb{R} ^m$中的一组标准正交基
$\{\vec{\beta}_1,\cdots,\vec{\beta}_r,\vec{\beta}_{r+1},\cdots,\vec{\beta}_m\}$。则
\[
\begin{aligned}
AV=&\begin{bmatrix}
\vec{\alpha}_1 &\cdots & \vec{\alpha}_r & 0 \cdots & 0
\end{bmatrix}\\
=& \begin{bmatrix}
\sigma_1 \vec{\beta}_1 &\cdots & \sigma_r \vec{\beta}_r & 0 \cdots & 0
\end{bmatrix} \\
=& \begin{bmatrix}
\vec{\beta}_1 &\cdots & \vec{\beta}_r & \vec{\beta}_{r+1} \cdots & \vec{\beta}_m
\end{bmatrix}\begin{bmatrix}
 \begin{bmatrix}
  \sigma_1 & 0 & \cdots & 0\\
  0 & \sigma_2 & \cdots & 0\\
  \cdots & \cdots & \cdots & \cdots \\
  0 & \cdots & 0 & \sigma_r
  \end{bmatrix} & 0_{r\times (n-r)}\\
  0_{(m-r)\times r} & 0_{(m-r)\times (n-r)}
\end{bmatrix}
\end{aligned}
\]
令$U=\begin{bmatrix}
\vec{\beta}_1 &\cdots & \vec{\beta}_r & \vec{\beta}_{r+1} \cdots & \vec{\beta}_m
\end{bmatrix}$，则$U$是$m$阶正交方阵。上述等式即得奇异值分解。
:::
