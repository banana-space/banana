---
title: 特征子空间与根子空间
---

## 特征子空间*

::: definition
设$A$是数域$k$上的$n$阶方阵，$\lambda_0$是$A$一个特征值。定义向量空间$k^n$的子集
$$
V_{\lambda_{0}}:=\{\vec{x}\in k^n| A \vec{x}=\lambda_0 \vec{x}\}
$$
称为特征值$\lambda_0$的特征子空间。
:::

换言之，$V_{\lambda_0}$是由所有属于$\lambda_0$的特征向量以及零向量构成的集合。

::: proposition
特征子空间$V_{\lambda_0}$是一个线性空间。
:::

::: proof
设$\vec{x},\vec{y}\in V_{\lambda_0}$，$\alpha$是一个数。则
\[
\begin{aligned}
A(\vec{x}+\vec{y})=&A\vec{x}+A\vec{y}=\lambda_0 \vec{x}+\lambda_0 \vec{y}=\lambda_0(\vec{x}+\vec{y})\\
A(\alpha\vec{x})=&\alpha A\vec{x}=\alpha \lambda_0\vec{x}=\lambda_0(\alpha \vec{x}
)
\end{aligned}
\]
即$\vec{x}+\vec{y}\in V_{\lambda_0}, \alpha \vec{x}\in V_{\lambda_0}$。由此命题得证。
:::

::: example
考虑$n$阶方阵$A= \begin{bmatrix} \lambda_0 & 1 & 0 & \cdots & 0\\
0 & \lambda_0 & 1 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots& \cdots\\
0 & 0 & \cdots & \lambda_0 & 1\\
0 & 0 & \cdots & 0 & \lambda_0\end{bmatrix}$。它只有一个特征值$\lambda_0$，其特征子空间$V_{\lambda_0}$是$1$维的，
由向量
$\begin{bmatrix}
1 \\ 0\\ \vdots \\ 0 \\0
\end{bmatrix}
$
张成。
:::

::: definition
设$\varphi(\lambda)$是$A$的特征多项式，$\lambda_0$是$A$的特征值。

- 记$\varphi(\lambda)=(\lambda-\lambda_0)^m g(\lambda)$，其中$g(\lambda_0)\neq 0$。
  称$m$为特征值$\lambda_0$的代数重数，即$\lambda_0$作为特征多项式的根的重数

- $\dim V_{\lambda_0}$称为特征值$\lambda_0$的几何重数

:::

::: example
$n$阶方阵$A= \begin{bmatrix} \lambda_0 & 1 & 0 & \cdots & 0\\
0 & \lambda_0 & 1 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots& \cdots\\
0 & 0 & \cdots & \lambda_0 & 1\\
0 & 0 & \cdots & 0 & \lambda_0\end{bmatrix}$的特征多项式
$$
\varphi(\lambda)=(\lambda-\lambda_0)^n
$$
因此特征值$\lambda_0$的代数重数为$n$，几何重数为$1$。
:::

::: proposition {@prop:geom-leg-alg}
特征值的几何重数$\leq$代数重数。
:::

::: proof
设$\lambda_0$是$n$阶方阵$A$的特征值，其几何重数是$r$，即$\dim V_{\lambda_0}=r$。
设$\{\vec{\beta}_1,\cdots,\vec{\beta}_r\}$是$V_{\lambda_0}$的一组基。
我们可以把它扩展为整个$n$维空间的一组基
$\{\vec{\beta}_1,\cdots,\vec{\beta}_r,\vec{\beta}_{r+1},\cdots,\vec{\beta}_n\}$。
把这组基作为列向量，记$P$为方阵
$$
P=\begin{bmatrix}
 \vec{\beta}_1 & \vec{\beta}_2 & \cdots & \vec{\beta}_n
\end{bmatrix}
$$

由于$\{\vec{\beta}_1,\cdots,\vec{\beta}_r\}$是$\lambda_0$的特征向量，我们有
\[
\begin{aligned}
 A\begin{bmatrix}
 \vec{\beta}_1 & \vec{\beta}_2 & \cdots & \vec{\beta}_n
\end{bmatrix}
= &\begin{bmatrix}
 A\vec{\beta}_1 & A\vec{\beta}_2 & \cdots & A\vec{\beta}_n
\end{bmatrix}\\
=& \begin{bmatrix}
\lambda_0 \vec{\beta}_1 & \cdots & \lambda_0 \vec{\beta}_r & A \vec{\beta}_{r+1} \cdots & A\vec{\beta}_n
\end{bmatrix}\\
=&\begin{bmatrix}
 \vec{\beta}_1 & \vec{\beta}_2 & \cdots & \vec{\beta}_n
\end{bmatrix} \begin{bmatrix}
\lambda_0 I_{r} & C \\
0 & D
\end{bmatrix}
\end{aligned}
\]
这里$C$是$r\times (n-r)$矩阵，$D$是$(n-r)\times (n-r)$矩阵，
它们表示$A\vec{\beta}_{r+1},\cdots, A\vec{\beta}_n$按照基$\{\vec{\beta}_1,\cdots,\vec{\beta}_n\}$
展开的系数。我们得到相似变换关系$
A= P \begin{bmatrix}
\lambda_0 I_{r} & C \\
0 & D
\end{bmatrix} P^{-1}
$
。因此
\[
\begin{aligned}
\det(\lambda I_n-A)
=\det (\lambda I_n-\begin{bmatrix}
\lambda_0 I_{r} & C \\
0 & D
\end{bmatrix})
= \begin{vmatrix}
(\lambda-\lambda_0) I_{r} & -C \\
0 & \lambda I_{n-r}-D
\end{vmatrix}
=(\lambda-\lambda_0)^r \det(\lambda I_{n-r}-D)
\end{aligned}
\]
这说明$\lambda_0$的代数重数$\geq r$。
:::

## 子空间的和与直和*

::: definition
设$V$是数域$k$上的线性空间，$V_1,\cdots,V_m$是$V$的线性子空间。定义$V$的子集
$$
V_1+\cdots+V_m=\{\vec{\alpha}_1+\cdots+\vec{\alpha}_m| \vec{\alpha}_i\in V_i\}\subset V
$$
称为子空间$V_1,\cdots,V_m$的和。
:::

::: proposition
$V$的线性子空间的和$V_1+\cdots+V_m$是$V$的线性子空间。
:::

::: proof
设$\vec{x}, \vec{y}\in V_1+\cdots+V_m$。则存在$\vec{\alpha}_i, \vec{\beta}_i\in V_i$使得
$$
\vec{x}=\vec{\alpha}_1+\cdots+\vec{\alpha}_m \qquad \vec{y}=\vec{\beta}_1+\cdots+\vec{\beta}_m
$$
则
$$
\vec{x}+\vec{y}=(\vec{\alpha}_1+\vec{\beta}_1)+\cdots+(\vec{\alpha}_m+\vec{\beta}_m)
$$
由于$V_i$是线性子空间，$(\vec{\alpha}_i+\vec{\beta}_i)\in V_i$，
因此$\vec{x}+\vec{y}\in V_1+\cdots+V_m$。同理可证保乘法。
:::

::: example
设$V=\mathbb{R} ^4$，$\{e_i\}$是标准基。
考虑子空间$V_1=\operatorname{Span}\{e_1,e_2\}$，$V_2=\operatorname{Span}\{e_2,e_3\}$，
$V_3=\operatorname{Span}\{e_3,e_4\}$。则
$$
V_1+V_2=\operatorname{Span}\{e_1,e_2,e_3\} \qquad V_1+V_3=V
$$
:::

::: definition
设$V$是数域$k$上的线性空间，$V_1,\cdots,V_m$是$V$的线性子空间。
如果$V_1+\cdots+V_m$中的任意向量$\vec{\alpha}$，存在唯一的向量$\alpha_i\in V_i$使得
$$
\vec{\alpha}=\vec{\alpha}_1+\cdots+\vec{\alpha}_m
$$
则此时$V_1+\cdots+V_m$称为子空间$V_1,\cdots,V_m$的直和，记为
$
V_1\oplus\cdots \oplus V_m
$。
:::

::: proposition
$V$的子空间$V_1,\cdots,V_m$的和是直和的充分必要条件是如下性质成立：
$$
\text{若}\ \vec{\alpha}_i\in V_i\quad \vec{\alpha}_1+\cdots+\vec{\alpha}_m=0 \quad \Longrightarrow \quad \vec{\alpha}_1=\cdots=\vec{\alpha}_m=0
$$
即只需要验证零向量表达的唯一性（零向量只能通过各个子空间的零向量相加得到）。
:::

::: proof
假设$V$的子空间$V_1,\cdots,V_m$的和是直和，则零向量只能唯一地表达为零向量相加，
因此命题所述性质成立。

反之，假设命题所述性质成立。设$\vec{\alpha}$是$V_1+\cdots+V_m$中的向量，有两种表达方式
$$
\vec{\alpha}=\vec{\alpha}_1+\cdots+\vec{\alpha}_m\qquad \vec{\alpha}=\vec{\beta}_1+\cdots+\vec{\beta}_m\qquad \text{这里}\quad \vec{\alpha}_i, \vec{\beta}_i\in V_i
$$
两式相减得到
$$
(\vec{\alpha}_1-\vec{\beta}_1)+\cdots+(\vec{\alpha}_m-\vec{\beta}_m)=0
$$
由零向量表达的唯一性知$\vec{\alpha}_1=\vec{\beta}_1,\cdots,\vec{\alpha}_m=\vec{\beta}_m$。
由此证得表达的唯一性。
:::

::: example
设$V=\mathbb{R} ^4$，$\{\vec{e}_i\}$是标准基。考虑子空间
$$
V_1=\operatorname{Span}\{\vec{e}_1,\vec{e}_2\}\qquad V_2=\operatorname{Span}\{\vec{e}_2,\vec{e}_3\}\qquad V_3=\operatorname{Span}\{\vec{e}_3,\vec{e}_4\}
$$

- $V_1+V_2$不是直和，例如我们有两种不一样的方法来表达相加
  $$
  \vec{e}_2=\vec{e}_2+0 \qquad \vec{e}_2= 0+ \vec{e}_2
  $$
  其中第一种表达里$\vec{e}_2$看作是$V_1$中的向量，第二种表达里$\vec{e}_2$看作是$V_2$中的向量。

- $V_1+V_3=V_1\oplus V_3$是直和，可以由$\vec{e}_1,\vec{e}_2,\vec{e}_3,\vec{e}_4$的线性无关性证明。

:::

::: proposition
$V$的子空间$V_1,\cdots,V_m$的和是直和的充分必要条件是
$$
\dim (V_1+\cdots+V_m)=\dim V_1+ \cdots + \dim V_m
$$
此时每个$V_i$选一组基合在一起构成$V_1\oplus \cdots \oplus V_m$的一组基。
:::

::: proof
设$\{\vec{\beta}^{(i)}_{1},\cdots,\vec{\beta}^{(i)}_{t_i}\}$是$V_i$的一组基。由定义，
$$
V_1+\cdots+V_m=\operatorname{Span}\{\vec{\beta}^{(1)}_{1},\cdots,\vec{\beta}^{(1)}_{t_1},\cdots,\vec{\beta}^{(m)}_{1},\cdots,\vec{\beta}^{(m)}_{t_m}\}
$$

假设$V_1+\cdots+V_m=V_1\oplus\cdots\oplus V_m$是直和。
我们说明
$\{\vec{\beta}^{(1)}_{1},\cdots,\vec{\beta}^{(1)}_{t_1},\cdots,\vec{\beta}^{(m)}_{1},\cdots,\vec{\beta}^{(m)}_{t_m}\}$
是线性无关的，因此构成$V_1+\cdots+V_m$的一组基。
由此即得$\dim (V_1+\cdots+V_m)=\dim V_1+ \cdots + \dim V_m$。

若
$$
c^{(1)}_1\vec{\beta}^{(1)}_{1}+\cdots+c^{(1)}_{t_1}\vec{\beta}^{(1)}_{t_1}+\cdots+c^{(m)}_1\vec{\beta}^{(m)}_{1}+\cdots+c^{(m)}_{t_m}\vec{\beta}^{(m)}_{t_m}=0
$$
记$\vec{\beta}_i=c^{(i)}_1\vec{\beta}^{(i)}_1+\cdots+c^{(i)}_{t_i}\vec{\beta}^{(i)}_{t_i}$。
则$\vec{\beta}_i\in V_i$且
$$
0=\vec{\beta}_1+\cdots+\vec{\beta}_m
$$

另一方面零向量显然可以写成零向量的和。由直和的表达唯一性，对每个$i$我们有$\vec{\beta}_i=0$。
又由于$\vec{\beta}^{(i)}_1,\cdots,\vec{\beta}^{(i)}_{t_i}$是$V_i$的一组基，
$c^{(i)}_1=\cdots=c^{(i)}_{t_i}=0$。
这证明了
$\{\vec{\beta}^{(1)}_{1},\cdots,\vec{\beta}^{(1)}_{t_1},\cdots,\vec{\beta}^{(m)}_{1},\cdots,\vec{\beta}^{(m)}_{t_m}\}$
是线性无关的。

反之，假设$\dim (V_1+\cdots+V_m)=\dim V_1+ \cdots + \dim V_m$成立。由
$$
V_1+\cdots+V_m=\operatorname{Span}\{\vec{\beta}^{(1)}_{1},\cdots,\vec{\beta}^{(1)}_{t_1},\cdots,\vec{\beta}^{(m)}_{1},\cdots,\vec{\beta}^{(m)}_{t_m}\}
$$
知
$\{\vec{\beta}^{(1)}_{1},\cdots,\vec{\beta}^{(1)}_{t_1},\cdots,\vec{\beta}^{(m)}_{1},\cdots,\vec{\beta}^{(m)}_{t_m}\}$
是线性无关的。
因此$V_1+\cdots+V_m$中的任一向量可以唯一地写成
$\{\vec{\beta}^{(1)}_{1},\cdots,\vec{\beta}^{(1)}_{t_1},\cdots,\vec{\beta}^{(m)}_{1},\cdots,\vec{\beta}^{(m)}_{t_m}\}$
的线性组合。由此易证直和性。
:::

::: proposition {@prop:diff-eigen-direct-sum}
设$\lambda_1,\cdots,\lambda_s$是$A$的$s$个互不相同的特征值。则它们的特征子空间的和是直和。
$$
V_{\lambda_1}+\cdots+V_{\lambda_s}=V_{\lambda_1}\oplus\cdots\oplus V_{\lambda_s}
$$
:::

::: proof
设$\{\vec{\beta}^{(j)}_{1},\cdots,\vec{\beta}^{(j)}_{t_j}\}$是$V_{\lambda_j}$中的一组基。
我们只需证明这些向量
$\{\vec{\beta}^{(1)}_{1},\cdots,\vec{\beta}^{(1)}_{t_1},\cdots,\vec{\beta}^{(s)}_{1},\cdots,\vec{\beta}^{(s)}_{t_s}\}$
合在一起构成的向量集是线性无关的。假设有线性组合满足
$$
c^{(1)}_1\vec{\beta}^{(1)}_{1}+\cdots+c^{(1)}_{t_1}\vec{\beta}^{(1)}_{t_1}+\cdots+c^{(s)}_1\vec{\beta}^{(s)}_{1}+\cdots+c^{(s)}_{t_s}\vec{\beta}^{(s)}_{t_s}=0
$$

记
$$
\vec{\beta}^{(j)}=c^{(j)}_1\vec{\beta}^{(j)}_1+\cdots+ c^{(j)}_{t_j}\vec{\beta}^{(j)}_{t_j}
$$
则$\vec{\beta}^{(j)}\in V_{\lambda_j}$并且
$$
\vec{\beta}^{(1)}+\vec{\beta}^{(2)}+\cdots +\vec{\beta}^{(s)}=0
$$
两边依次乘以$A, A^2, \cdots, A^{s-1}$，我们得到
$$
\begin{cases}
\vec{\beta}^{(1)}+\vec{\beta}^{(2)}+\cdots +\vec{\beta}^{(s)}=0\\
\lambda_1 \vec{\beta}^{(1)}+\lambda_2\vec{\beta}^{(2)}+\cdots +\lambda_s\vec{\beta}^{(s)}=0\\
\qquad \qquad \cdots \\
\lambda_1^{s-1}\vec{\beta}^{(1)}+\lambda_2^{s-1}\vec{\beta}^{(2)}+\cdots +\lambda_s^{s-1}\vec{\beta}^{(s)}=0
\end{cases}
$$

把这组方程写成矩阵的形式
$$
\begin{bmatrix}
\vec{\beta}^{(1)} & \vec{\beta}^{(2)} & \cdots &\vec{\beta}^{(s)}
\end{bmatrix}
\begin{bmatrix}
1 & \lambda_1 & \lambda_1^2 &\cdots & \lambda_1^{s-1}\\
1 & \lambda_2 & \lambda_2^2 & \cdots & \lambda_2^{s-1}\\
\cdots & \cdots & \cdots & \cdots& \cdots\\
1 & \lambda_s & \lambda_s^2 & \cdots& \lambda_s^{s-1}
\end{bmatrix}=0
$$
记$s$阶矩阵$P= \begin{bmatrix}
1 & \lambda_1 & \lambda_1^2 &\cdots & \lambda_1^{s-1}\\
1 & \lambda_2 & \lambda_2^2 & \cdots & \lambda_2^{s-1}\\
\cdots & \cdots & \cdots & \cdots& \cdots\\
1 & \lambda_s & \lambda_s^2 & \cdots& \lambda_s^{s-1}
\end{bmatrix}$，由Vandermonde行列式知$P$可逆。上式两边同时从右边乘以$P^{-1}$，我们得到
$$
\begin{bmatrix}
\vec{\beta}^{(1)} & \vec{\beta}^{(2)} & \cdots &\vec{\beta}^{(s)}
\end{bmatrix}=0
$$
即每个向量
$\vec{\beta}^{(j)}=c^{(j)}_1\vec{\beta}^{(j)}_1+\cdots+ c^{(j)}_{t_j}\vec{\beta}^{(j)}_{t_j}=0$。
由$\{\vec{\beta}^{(j)}_1,\cdots,\vec{\beta}^{(j)}_{t_j}\}$的线性无关性，
我们得到$c_1^{(j)}=\cdots=c_{t_j}^{(j)}=0$ 对每个$j=1,\cdots,s$成立。
:::

这个命题说明，不同特征值的特征向量之间是相互线性无关的。
特别地，如果$n$阶方阵$A$有$n$个互不相同的特征值，则其对应的特征向量构成$n$维空间一组基，
即得到 @prop:eigen-diagonal。

::: example
设$n$阶方阵$A$满足$A^2=A$（称为幂等方阵）。
则$A$相似于对角阵$\begin{bmatrix} I_r & 0\\ 0 & 0 \end{bmatrix}$，这里$r=\operatorname{rank} A$。
实际上，考虑如下两个线性子空间
$$
V_1=\{\vec{x}\in k^n| A\vec{x}=\vec{x}\} \quad
V_0=\{\vec{x}\in k^n| A\vec{x}=0\}
$$
如果$i$是$A$的特征值（$i=0,1$），则$V_i$是特征子空间，否则$V_i=\{0\}$。

对任意向量$\vec{x}\in \mathbb{R} ^n$，我们把它分解为
$$
\vec{x}=A\vec{x}+(I_n-A)\vec{x}
$$
由$A$的幂等性
$$
A(A\vec{x})=A\vec{x},\quad A(I_n-A)\vec{x}=0 \quad \Longrightarrow \quad A\vec{x}\in V_1, \quad (I_n-A)\vec{x}\in V_0
$$
这个分解说明
$$
V_1+V_0=k^n
$$

设$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_r\}$是$V_1$的一组基，
$\{\vec{\beta}_1,\cdots,\vec{\beta}_s\}$是$V_0$的一组基。
由 @prop:diff-eigen-direct-sum 知，
$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_r, \vec{\beta}_1,\cdots,\vec{\beta}_s\}$构成$k^n$的一组基。
由 @prop:diag-eigenvector，$A$相似于对角阵$\begin{bmatrix} I_r & 0\\ 0 & 0 \end{bmatrix}$。
:::

## 根子空间*

这一节我们假设数域$k$上$n$阶方阵$A$的所有特征值都在数域$k$中（若$k=\mathbb{R} $，
即要求特征值均为实数）。$A$的特征多项式可以分解为
$$
\varphi(\lambda)=(\lambda-\lambda_1)^{m_1}(\lambda-\lambda_2)^{m_2}\cdots (\lambda-\lambda_s)^{m_s}
$$
这里$\lambda_1,\cdots,\lambda_s$是互不相同的特征值，$m_i$是$\lambda_i$的代数重数。

设$V_{\lambda_i}$是$\lambda_i$的特征子空间。我们知道
$$
m_1+m_2+\cdots+m_s=n
$$
由 @prop:geom-leg-alg
$$
\dim V_{\lambda_i}\leq m_i,\quad i=1,\cdots,s
$$

如果$\dim V_{\lambda_i}=m_i$对每个$i$成立，那么每个$V_{\lambda_i}$选一组基，
合起来构成整个$k^n$的一组基。若
$\dim V_{\lambda_i}<m_i$，我们似乎“缺失”了某些向量。这些“缺失”的向量可以通过根子空间找回来。

::: definition
设$\lambda_0$是$n$阶方阵$A$的一个特征值。定义$\lambda_0$的根子空间为
$$
R_{\lambda_0}=\{\vec{x}\ |\ \text{存在某个$m>0$使得}(\lambda_0 I_n-A)^m \vec{x}=0\}
$$
即$\vec{x}\in R_{\lambda_0}$当且仅当对$\vec{x}$乘以$\lambda_0 I_n-A$足够多次后会变成$0$。
:::

$\lambda_0$的特征子空间可以刻画为
$$
V_{\lambda_0}=\{\vec{x}| (\lambda_0 I_n-A)\vec{x}=0\}
$$
即对$\vec{x}$乘以$\lambda_0 I_n-A$一次变成$0$。因此
$
V_{\lambda_0}\subset R_{\lambda_0}
$。

::: proposition
根子空间 $R_{\lambda_0}$是线性空间。
:::

::: proof
设$\vec{x}, \vec{y}\in R_{\lambda_0}$。则存在$m_1, m_2>0$使得
$$
(\lambda_0 I_n-A)^{m_1}\vec{x}=0\qquad (\lambda_0 I_n-A)^{m_2}\vec{y}=0
$$

取$m=\max\{m_1, m_2\}$，则
$$
(\lambda_0 I_n-A)^{m}(\vec{x}+\vec{y})=(\lambda_0 I_n-A)^{m}\vec{x}+(\lambda_0 I_n-A)^{m}\vec{y}=0
$$
即$\vec{x}+\vec{y}\in R_{\lambda_0}$。易知$R_{\lambda_0}$也保数乘。
:::

::: example
$n$阶方阵$A= \begin{bmatrix} \lambda_0 & 1 & 0 & \cdots & 0\\
0 & \lambda_0 & 1 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots& \cdots\\
0 & 0 & \cdots & \lambda_0 & 1\\
0 & 0 & \cdots & 0 & \lambda_0\end{bmatrix}$。易知
$$
(\lambda_0 I_n-A)^n=0
$$
因此任意向量$\vec{x}$都属于根子空间$R_{\lambda_0}$中。可以看出根子空间的确找回来了“缺失”的向量。
:::

::: definition
设$A$是$n$阶矩阵。线性子空间$V\subset k^n$称为是$A$的不变子空间如果
$$
\text{对任意$\vec{x}\in V$},\quad A\vec{x}\in V
$$
:::

::: proposition {@prop:root-invariant-space}
根子空间$R_{\lambda_0}$是$A$的不变子空间。
:::

::: proof
设$\vec{x}\in R_{\lambda_0}$，$(\lambda_0 I_n-A)^m \vec{x}=0$。则

$$
(\lambda_0 I_n-A)^m (A\vec{x})=A((\lambda_0 I_n-A)^m \vec{x})=0
$$
故$A\vec{x}\in R_{\lambda_0}$。
:::

由于$R_{\lambda_0}$是$A$的不变子空间，把$A$的作用限制在$R_{\lambda_0}$上得到一个线性映射
$$
A: R_{\lambda_0}\to R_{\lambda_0}
$$

::: proposition {@prop:root-rep-eigen}
线性映射$A: R_{\lambda_0}\to R_{\lambda_0}$在$R_{\lambda_0}$的任一组基下的表示矩阵的特征值只有
$\lambda_0$。
:::

::: proof
考虑这个线性映射在$R_{\lambda_0}$的一组基$\{\vec{\beta}_1,\cdots,\vec{\beta}_t\}$下的表示矩阵$t$
阶方阵$B=(b_{ij})$，即
$$
A\vec{\beta}_j=\sum_i \vec{\beta}_i b_{ij}
$$
写成矩阵的形式
$$
A\begin{bmatrix}
\vec{\beta}_1 & \cdots & \vec{\beta}_t
\end{bmatrix}=\begin{bmatrix}
\vec{\beta}_1 & \cdots & \vec{\beta}_t
\end{bmatrix} B
$$

由根子空间定义，存在充分大$m>0$使得$(\lambda_0 I_n-A)^m \vec{\beta}_i=\vec{0}$，
对$i=1,\cdots,t$成立。由
$$
(\lambda_0 I_n-A)^m\begin{bmatrix}
\vec{\beta}_1 & \cdots & \vec{\beta}_t
\end{bmatrix}=\begin{bmatrix}
\vec{\beta}_1 & \cdots & \vec{\beta}_t
\end{bmatrix} (\lambda_0 I_t-B)^m
$$
左边是零，因此
$$
\begin{bmatrix}
\vec{\beta}_1 & \cdots & \vec{\beta}_t
\end{bmatrix} (\lambda_0 I_t-B)^m=\mathbf{0}
$$
由$\{\vec{\beta}_1,\cdots,\vec{\beta}_t\}$的线性无关性，得$(\lambda_0 I_t-B)^m=0$。
由此易知（或参考 @prop:nil-eigen）$\lambda_0 I_t-B$的特征值只有$0$，即$B$的特征值只有$\lambda_0$。
:::

::: proposition {@prop:root-direct-sum}
设$\lambda_1,\cdots,\lambda_s$是互不相同的特征值。则它们的根子空间的和是直和。
$$
R_{\lambda_1}+\cdots+R_{\lambda_s}=R_{\lambda_1}\oplus\cdots \oplus R_{\lambda_s}
$$
:::

::: proof
设$\vec{\beta}_i\in R_{\lambda_i}$并且
$$
\vec{\beta}_1+\vec{\beta}_2+\cdots+\vec{\beta}_s=0
$$
我们只需证明一定有$\vec{\beta}_1=\cdots=\vec{\beta}_s=0$。

假设$\vec{\beta}_1\neq 0$。
则存在正整数$m$使得$(\lambda_1 I_n-A)^{m-1}\vec{\beta}_1\neq 0$，
$(\lambda_1 I_n-A)^m\vec{\beta}_1=0$。
记$\vec{\gamma}_1=(\lambda_1 I_n-A)^{m-1}\vec{\beta}_1\neq 0$，则
$$
(\lambda_1 I_n-A)\vec{\gamma}_1=0
$$
即$\vec{\gamma}_1$是$\lambda_1$的特征向量。则对任意多项式$f(x)$
$$
f(A)\vec{\gamma}_1=f(\lambda_1) \vec{\gamma}_1
$$

取$N$充分大使得
$$
(\lambda_i I_n-A)^N \vec{\beta}_{i}=0,\qquad i=1,\cdots,s
$$

令$f(x)=(\lambda_2-x)^N(\lambda_3-x)^N\cdots (\lambda_s-x)^N$。则
$$
f(A)\vec{\gamma}_1=f(\lambda_1)\vec{\gamma}_1, \quad f(A)\vec{\beta}_2=\cdots=f(A)\vec{\beta}_s=0
$$
其中
$f(\lambda_1)=(\lambda_2-\lambda_1)^N(\lambda_3-\lambda_1)^N\cdots (\lambda_s-\lambda_1)^N\neq 0$。
在等式
$$
\vec{\beta}_1+\vec{\beta}_2+\cdots+\vec{\beta}_s=0
$$
两边乘以$(\lambda_1 I_n-A)^{m-1}f(A)$，我们得到
$$
f(\lambda_1)\vec{\gamma}_1=0
$$
由于$f(\lambda_1)\neq 0 \Longrightarrow \vec{\gamma}_1=0$，与假设矛盾。因此$\vec{\beta}_1=0$。
同理可证$\vec{\beta}_1=\cdots=\vec{\beta}_s=0$。
:::

::: proposition {@prop:root-span}
设$\lambda_1,\cdots,\lambda_s$是$n$阶方阵$A$所有互不相同的特征值。则
$$
k^n=R_{\lambda_1}\oplus\cdots \oplus R_{\lambda_s}
$$
:::

::: proof
由 @prop:root-direct-sum，我们只需证明任意向量$\vec{x}\in k^n$可以分解为
$$
\vec{x}=\vec{\beta}_1+\cdots+\vec{\beta}_s,\qquad \vec{\beta}_i\in R_{\lambda_i}
$$

$n$阶方阵$A$的特征多项式为
$$
\varphi(\lambda)=(\lambda-\lambda_1)^{m_1}(\lambda-\lambda_2)^{m_2}\cdots (\lambda-\lambda_s)^{m_s}
$$
这里$\lambda_1,\cdots,\lambda_s$是互不相同的特征值。考虑如下的多项式
$$
\varphi_i(\lambda)=(\lambda-\lambda_1)^{m_1}\cdots (\lambda-\lambda_{i-1})^{m_{i-1}}(\lambda-\lambda_{i+1})^{m_{i+1}}\cdots (\lambda-\lambda_s)^{m_s}
$$
即把$\varphi(\lambda)$中去掉$(\lambda-\lambda_i)^{m_i}$因子得到的多项式。
多项式$\varphi_1(\lambda),\cdots, \varphi_s(\lambda)$的公因子只有常数函数，
因此存在多项式$h_i(\lambda)$使得
$$
\varphi_1(\lambda)h_1(\lambda)+\cdots+ \varphi_s(\lambda)h_s(\lambda)=1
$$

代入矩阵$A$，我们得到
$$
\varphi_1(A)h_1(A)+\cdots+ \varphi_s(A)h_s(A)=I_n
$$
因此
\[
\begin{aligned}
\vec{x}=&(\varphi_1(A)h_1(A)+\cdots+ \varphi_s(A)h_s(A))\vec{x}
=\vec{\beta}_1+\cdots +\vec{\beta}_s
\end{aligned}
\]
这里$\vec{\beta}_i=\varphi_i(A)h_i(A)\vec{x}$。由Cayley–Hamilton定理，
$$
(\lambda_i I_n-A)^{m_i}\varphi_i(A)=\varphi(A)=0
$$
因此 $(\lambda_i I_n-A)^{m_i}\vec{\beta}_i=\varphi(A)h_i(A)\vec{x}=0$，
即$\vec{\beta}_i\in R_{\lambda_i}$。
:::

设$\lambda_1,\cdots,\lambda_s$是$A$的所有互不相同的特征值。
设$\{\vec{\beta}^{(j)}_{1},\cdots,\vec{\beta}^{(j)}_{t_j}\}$是$R_{\lambda_j}$的一组基。
由 @prop:root-span，向量组
$$
\{\vec{\beta}^{(1)}_{1},\cdots,\vec{\beta}^{(1)}_{t_1},\cdots,\vec{\beta}^{(s)}_{1},\cdots,\vec{\beta}^{(s)}_{t_s}\}
$$
构成$k^n$的一组基。由 @prop:root-invariant-space，
$R_{\lambda_j}$是$A$的不变子空间，
因此$A\vec{\beta}^{(j)}_i$是$\{\vec{\beta}^{(j)}_{1},\cdots,\vec{\beta}^{(j)}_{t_j}\}$的线性组合。
写成矩阵的形式
\[
\begin{aligned}
&A \begin{bmatrix}
\vec{\beta}^{(1)}_{1} & \cdots & \vec{\beta}^{(1)}_{t_1}& \cdots & \vec{\beta}^{(s)}_{1}& \cdots & \vec{\beta}^{(s)}_{t_s}
\end{bmatrix}\\
=&\begin{bmatrix}
\vec{\beta}^{(1)}_{1} & \cdots & \vec{\beta}^{(1)}_{t_1}& \cdots & \vec{\beta}^{(s)}_{1}& \cdots & \vec{\beta}^{(s)}_{t_s}
\end{bmatrix}\begin{bmatrix}
B_1 & 0 & \cdots & 0\\
0 & B_2 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots \\
0 & \cdots & 0 & B_s
\end{bmatrix}
\end{aligned}
\]
这里$B_j$是$t_j$阶方阵，其特征多项式为$(\lambda-\lambda_j)^{t_j}$（@prop:root-rep-eigen）。
因此$A$的特征多项式为
\[
\begin{aligned}
\det(\lambda I_n-A)=&\det(\lambda-B_1)\cdots \det (\lambda-B_s)
=(\lambda-\lambda_1)^{t_1}\cdots (\lambda-\lambda_s)^{t_s}
\end{aligned}
\]
对比
$$
\det(\lambda I_n-A)=(\lambda-\lambda_1)^{m_1}\cdots (\lambda-\lambda_s)^{m_s}
$$
我们得到
$$
t_j=m_j
$$

由此我们证明了如下命题。

::: proposition
$\dim R_{\lambda_i}$等于$\lambda_i$的代数重数。
:::

总结如上，我们有$V_{\lambda_i}\subset R_{\lambda_i}$
$$
\dim V_{\lambda_i}=\text{几何重数}\quad \leq \quad  \dim R_{\lambda_i}=\text{代数重数}
$$
根子空间给出直和分解
$$
k^n=R_{\lambda_1}\oplus R_{\lambda_2}\oplus\cdots \oplus R_{\lambda_s}
$$
