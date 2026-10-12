---
title: 矩阵的逆
---

::: definition
设$A$是$n$阶方阵，如果存在一个$n$阶方阵$B$使得
$$
AB=BA=I_n
$$
其中$I_n$是$n$阶单位阵，我们称$A$是可逆的，且$B$是它的逆矩阵，记作$A^{-1}$。
:::

::: remark*
只有方阵（即$n\times n$矩阵）才可能谈逆矩阵。
对于一般的矩阵，有一个推广的概念称为“广义逆”（见[“广义逆”一节](@prop:gen-inverse)），
它没有方阵的逆这样好的结构，但是在解线性方程组方面有一些和逆相近的性质。
:::

## 可逆矩阵的判别法*

假设$n$阶方阵$A$可逆，则对
$$
A A^{-1}=I_n
$$
两边取行列式，我们得到
$
\det A \det A^{-1}=1
$，因此
$$
\det A^{-1}=(\det A)^{-1}
$$
特别的有$\det A\neq 0$。因此$A$可逆的一个必要条件是$\det A\neq 0$。我们下面说明这也是充分条件。

::: proposition
设$A$是$n$阶方阵，则如下两个条件等价
$$
\det A\neq 0 \quad \Longleftrightarrow  \quad  \operatorname{rank} A=n
$$
:::

::: proof
我们可以通过初等行变换将$A$变成阶梯形矩阵$A^\prime$
$$
A^\prime=\begin{vmatrix}
a_{11}^\prime & \cdots & \cdots & a_{1n}^\prime\\
0 & a_{22}^\prime & \cdots & a_{2n}^\prime\\
\cdots & \cdots & \cdots & \cdots\\
0 & 0 & \cdots & a_{nn}^\prime
\end{vmatrix}
$$
由行列式在初等行变换下的变换性质可知
$$
\det A\neq 0\Longleftrightarrow \det A^\prime\neq 0
$$

由于$\det A^\prime= a_{11}^\prime a_{22}^\prime\cdots a_{nn}^\prime$，我们可以看出
$$
\det A^\prime\neq 0 \Longleftrightarrow \operatorname{rank} A^\prime=n
$$
因此
$$
\det A\neq 0\Longleftrightarrow \det A^\prime\neq 0 \Longleftrightarrow \operatorname{rank} A^\prime=n \Longleftrightarrow \operatorname{rank} A=n
$$
:::

::: proposition {@prop:det-solvable}
设$A$是$n$阶方阵且$\det A\neq 0$。则对任意列向量$\vec{b}\in \mathbb{R} ^n$，线性方程组
$$
A\vec{x}=\vec{b}
$$
有唯一解。
:::

::: proof
由$\det A\neq 0$，我们有$n-\operatorname{rank} A=0$，由 @thm:nonhomo-linear-sol 得到解的唯一性。
我们只需要证明解的存在性。考虑增广矩阵$\overline{A}=[A\ \vec{b}]$，由

$$
n=\operatorname{rank} A\leq \operatorname{rank} \overline{A}= \text{$\overline{A}$的行秩}\leq n
$$

知$\operatorname{rank} \overline{A}=\operatorname{rank} A$。由 @thm:nonhomo-linear-sol 知解存在。
:::

::: theorem {@thm:inverse-det}
$A$是$n$阶方阵，则$A$可逆当且仅当$\det A\neq 0$。
:::

::: proof
我们已经证明了必要性，下面证明充分性。

假设$\det A\neq 0$。考虑$\mathbb{R} ^n$的标准基$\{\vec{e}_1, \vec{e}_2, \cdots, \vec{e}_n\}$。
由 @prop:det-solvable，我们可以解出唯一的向量$\vec{\beta}_i$满足
$$
A \vec{\beta}_i=\vec{e}_i \qquad i=1,\cdots, n
$$

我们可以把这$n$个方程写成一个矩阵的形式
$$
A \begin{bmatrix}
\vec{\beta}_1 & \vec{\beta}_2 & \cdots & \vec{\beta}_n
\end{bmatrix}=\begin{bmatrix}
\vec{e}_1 & \vec{e}_2 & \cdots & \vec{e}_n
\end{bmatrix}
$$
记$n$阶方阵$B=\begin{bmatrix}
\vec{\beta}_1 & \vec{\beta}_2 & \cdots & \vec{\beta}_n
\end{bmatrix}$。则上述即为
$$
AB=I_n
$$
我们下面证明$BA=I_n$也成立。

由于$AB=I_n$，两边取行列式我们知道$\det B\neq 0$。
把上述对$A$的论述用到$B$，我们可以得到一个$n$阶方阵$C$使得
$
BC= I_n
$。因此
$$
A=A I_n= A(BC)=(AB)C=I_n C=C
$$
故$BA=BC=I_n$成立。因此$B$是$A$的逆。
:::

由上述定理证明我们不难看出，如果
$$
AB=I_n
$$
则必然有$BA=I_n$。即“左逆”和“右逆”对方阵是一样的，故统记为矩阵的逆$A^{-1}$。

## 逆矩阵的计算*

@thm:inverse-det 的证明过程同时给出了逆矩阵的计算方法：解线性方程组
$$
A \vec{\beta}_i=\vec{e}_i
$$
则$A$的逆矩阵为
$$
A^{-1}=\begin{bmatrix}
\vec{\beta}_1 & \vec{\beta}_2 & \cdots & \vec{\beta}_n
\end{bmatrix}
$$

由于$\operatorname{rank} A=n$，我们可以通过初等行变换把$A$变成
$$
\begin{vmatrix}
1 & * & \cdots & *\\
0 & 1 & \cdots & *\\
\cdots & \cdots & \cdots & \cdots\\
0 & 0 & \cdots & 1
\end{vmatrix}
$$
进而从下往上作行变换消元变为单位阵
$$
\begin{vmatrix}
1 & 0 & \cdots & 0\\
0 & 1 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & 0 & \cdots & 1
\end{vmatrix}
$$

把增广矩阵加入如上操作，我们得到
$$
\begin{bmatrix}
A & \vec{e}_i
\end{bmatrix}\substack{\text{行变换}\\ \Longrightarrow }\begin{vmatrix}
1 & 0 & \cdots & 0 & b_1\\
0 & 1 & \cdots & 0 & b_2\\
\cdots & \cdots & \cdots & \cdots & \cdots \\
0 & 0 & \cdots & 1 & b_n
\end{vmatrix}
$$
因此线性方程组的解为$x_1=b_1,\cdots,x_n=b_n$，即
$$
\vec{\beta}_i=\begin{bmatrix}
b_1 \\ \vdots \\ b_n
\end{bmatrix}
$$

我们可以用这个方法同时解所有$n$个线性方程组$A\vec{\beta}_i=\vec{e}_i$。考虑扩大的增广矩阵
$$
\begin{bmatrix}
A & \vec{e}_1 & \cdots & \vec{e}_n
\end{bmatrix}=\begin{bmatrix}
A & I_n
\end{bmatrix}
$$
我们对其作初等行变换将其变为
$$
\begin{bmatrix}
A & I_n
\end{bmatrix}
\substack{\text{行变换}\\ \Longrightarrow }
\begin{bmatrix}
I_n & B
\end{bmatrix}=\begin{bmatrix}
I_n & \vec{\beta}_1 & \cdots & \vec{\beta}_n
\end{bmatrix}
$$
则$B$的第$i$列即为线性方程组$A\vec{\beta}_i=\vec{e}_i$的解。

::: theorem
设$A$是$n$阶可逆矩阵。
我们对$n\times 2n$矩阵$\begin{bmatrix}A & I_n\end{bmatrix}$作初等行变换将其变为
$$
\begin{bmatrix}
A & I_n
\end{bmatrix}
\substack{\text{行变换}\\ \Longrightarrow }
\begin{bmatrix}
I_n & B
\end{bmatrix}
$$
则$n$阶矩阵$B$即为$A$的逆。
:::

这个定理给出了逆矩阵的具体计算方法。

::: example
计算矩阵$\begin{bmatrix}
1 & 2 & 1 \\
2 & 4 & 5 \\
1 & 4 & 6
\end{bmatrix}$的逆矩阵。我们对扩展的增广矩阵作初等行变换
\[
\begin{aligned}
&\begin{bmatrix}
1 & 2 & 1 & 1 & 0 & 0 \\
2 & 4 & 5 & 0 & 1 & 0\\
1 & 4 & 6  & 0 & 0 & 1
\end{bmatrix}\Longrightarrow \begin{bmatrix}
1 & 2 & 1 & 1 & 0 & 0 \\
0 & 0 & 3 & -2 & 1 & 0\\
0 & 2 & 5  & -1 & 0 & 1
\end{bmatrix}\\
\Longrightarrow & \begin{bmatrix}
1 & 2 & 1 & 1 & 0 & 0 \\
0 & 2 & 5  & -1 & 0 & 1\\
0 & 0 & 3 & -2 & 1 & 0
\end{bmatrix}\Longrightarrow \begin{bmatrix}
1 & 2 & 1 & 1 & 0 & 0 \\
0 & 1 & 5/2  & -1/2 & 0 & 1/2\\
0 & 0 & 1 & -2/3 & 1/3 & 0
\end{bmatrix}\\
\Longrightarrow &\begin{bmatrix}
1 & 2 & 0 & 5/3 & -1/3 & 0 \\
0 & 1 & 0  & 7/6 & -5/6 & 1/2\\
0 & 0 & 1 & -2/3 & 1/3 & 0
\end{bmatrix}
\Longrightarrow \begin{bmatrix}
1 & 0 & 0 & -2/3 & 4/3 & -1 \\
0 & 1 & 0  & 7/6 & -5/6 & 1/2\\
0 & 0 & 1 & -2/3 & 1/3 & 0
\end{bmatrix}
\end{aligned}
\]

因此我们可以读出逆矩阵
$$
\begin{bmatrix}
1 & 2 & 1 \\
2 & 4 & 5 \\
1 & 4 & 6
\end{bmatrix}^{-1}=\begin{bmatrix}
-2/3 & 4/3 & -1 \\
 7/6 & -5/6 & 1/2\\
 -2/3 & 1/3 & 0
\end{bmatrix}
$$
:::

## 伴随矩阵*

逆矩阵也可以通过余子式直接求出。回顾
$A$的第$i$行第$j$列余子式$A_{ij}$定义为把$A$的第$i$行和第$j$列去掉后得到的$n-1$阶矩阵的行列式：
$$
A_{ij}=\begin{vmatrix}
 a_{11} & \cdots & \cancel{a_{1j}} & \cdots & a_{1n}\\
 \cdots & \cdots & {\vdots} & \cdots & \cdots\\
 \cancel{a_{i1}} & {\cdots} & \cancel{a_{ij}} & {\cdots} & \cancel{a_{in}}\\
 \cdots & \cdots & {\vdots} & \cdots & \cdots\\
 a_{n1} & \cdots & \cancel{a_{nj}} & \cdots &   a_{nn}
\end{vmatrix}
$$
由行列式关于第$i$行的展开公式，我们有
$$
\sum_{j=1}^n (-1)^{i+j}a_{ij}A_{ij}=\det A
$$
实际上我们有更好的性质

::: proposition
$n$阶方阵$A$的余子式$A_{ij}$满足
$$
\sum_{j=1}^n (-1)^{i+j}a_{kj}A_{ij}=\det A \delta_{ki}
$$
:::

::: proof
对于$k=i$，这个即是行列式关于第$i$行的展开公式。下面我们考虑$k\neq i$。表达式
$$
\sum_{j=1}^n (-1)^{i+j}a_{kj}A_{ij}
$$
可以解释为把矩阵$A$的第$i$行替换成第$k$行，然后关于第$i$行作行列式展开。
替换后第$i$行的余子式保持不变。即
$$
\begin{vmatrix}
a_{11} & a_{12} & \cdots & a_{1n}\\
\cdots & \cdots & \cdots &\cdots\\
{\color{red}{a_{k1}}} & {\color{red}{a_{k2}}} & \cdots  & {\color{red}{a_{kn}}}\\
\cdots & \cdots & \cdots &\cdots\\
a_{k1} & a_{k2} & \cdots  & a_{kn}\\
\cdots & \cdots & \cdots &\cdots\\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix}\substack{\text{第$i$行展开}\\ =}\sum_{j=1}^n (-1)^{i+j}{\color{red}{a_{kj}}}A_{ij}
$$
另一方面，左边矩阵第$i$行和第$k$行相同，故行列式为$0$。
因此$\sum\limits_{j=1}^n (-1)^{i+j}{\color{red}{a_{kj}}}A_{ij}=0$。
:::

我们可以把公式
$$
\sum_{j=1}^n (-1)^{i+j}a_{kj}A_{ij}=\det A \delta_{ki}
$$
写成矩阵的样子
$$
\begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{n1} & a_{n2} & \cdots & a_{nn}
\end{bmatrix}\begin{bmatrix}
(-1)^{i+1}A_{i1} \\ (-1)^{i+2}A_{i2} \\ \cdots \\ (-1)^{i+n}A_{in}
  \end{bmatrix}=\det A \ \vec{e}_i
$$

假设$A$可逆，即$\det A\neq 0$，则上述矩阵表达式说明线性方程组$A\vec{\beta}_i=\vec{e}_i$的解即为
$$
\vec{\beta}_i={1\over \det A}\begin{bmatrix}
(-1)^{i+1}A_{i1} \\ (-1)^{i+2}A_{i2} \\ \cdots \\ (-1)^{i+n}A_{in}
  \end{bmatrix}
$$

::: definition
$n$阶矩阵$A$的伴随矩阵$A^*$是一个$n$阶矩阵，其$(i,j)$矩阵元为$(-1)^{i+j}A_{ji}$，即
$$
A^*=\begin{bmatrix}
(-1)^{1+1}A_{11} & (-1)^{1+2}A_{21} & \cdots & (-1)^{1+n}A_{n1}\\
(-1)^{2+1}A_{12} & (-1)^{2+2}A_{22} & \cdots & (-1)^{2+n} A_{n2}\\
\cdots & \cdots & \cdots& \\
(-1)^{n+1}A_{1n} & (-1)^{n+2}A_{2n} & \cdots & (-1)^{n+n}A_{nn}
\end{bmatrix}
$$
:::

我们上述讨论实际上证明了如下命题。

::: theorem {@thm:inverse-adjoint}
设$A$是$n$阶可逆方阵，则其逆矩阵为
$$
A^{-1}={1\over \det A} A^*
$$
:::

::: example
$2$阶方阵$A=\begin{bmatrix} a & b\\ c & d\end{bmatrix}$的伴随矩阵为
$$
A^*=\begin{bmatrix} d & -b\\ -c & a\end{bmatrix}
$$
因此
$$
A^{-1}={1\over \det A} A^*={1\over ad-bc}\begin{bmatrix} d & -b\\ -c & a\end{bmatrix}
$$
:::

::: example
矩阵$\begin{bmatrix}
1 & 2 & 1 \\
2 & 4 & 5 \\
1 & 4 & 6
\end{bmatrix}$的伴随矩阵为
$$
A^*=\begin{bmatrix}
4 & -8 & 6 \\
-7 & 5 & -3 \\
4 & -2 & 0
\end{bmatrix}
$$
计算知$\det A=-6$，因此
$$
A^{-1}= \begin{bmatrix}
-2/3 & 4/3 & -1 \\
7/6 & -5/6 & 1/2 \\
-2/3 & 1/3 & 0
\end{bmatrix}
$$
:::

## Cramer法则*

设$A$是$n$阶方阵且$\det A\neq 0$。
由 @prop:det-solvable，对任意列向量$\vec{b}\in \mathbb{R} ^n$，线性方程组
$$
A\vec{x}=\vec{b}
$$
有唯一解。实际上，由 @thm:inverse-det 我们知道$A$可逆，上述方程两边乘以$A^{-1}$可以得到解为
$$
\vec{x}=A^{-1}\vec{b}
$$

由 @thm:inverse-adjoint，我们可以把上述解具体表示为
$$
\vec{x}={1\over \det A}A^* \vec{b}
$$
写成分量有
$$
x_i={1\over \det A}\sum\limits_{j=1}^n(-1)^{i+j}A_{ji}b_j
$$

考虑矩阵
$$
A_i=\begin{bmatrix}
a_{11} & \cdots & a_{1,i-1} & b_1 & a_{1,i+1}& \cdots & a_{1n}\\
a_{21} & \cdots & a_{2,i-1} & b_2 & a_{2,i+1}& \cdots & a_{2n}\\
\cdots& \cdots& \cdots& \cdots & \cdots & \cdots & \cdots \\
a_{n1} & \cdots & a_{n,i-1} & b_n & a_{n,i+1}& \cdots & a_{nn}\\
\end{bmatrix}
$$
$A_i$是把$A$的第$i$列替换成$\vec{b}$构成的方阵。
观察到$A_i$的第$k$行第$i$列余子式与$A$的第$k$行第$i$列余子式相同。
通过第$i$列展开计算$A_i$的行列式，我们发现
$$
\det A_i=\sum\limits_{j=1}^n(-1)^{i+j}A_{ji}b_j
$$
由此我们证明了如下结论

::: theorem [Cramer法则]
设$A$是$n$阶方阵且$\det A\neq 0$。则线性方程组
$
A\vec{x}=\vec{b}
$的解为
$$
\vec{x}=\begin{bmatrix}
{\det A_1}/{\det A}\\ {\det A_2}/{\det A}\\
\vdots\\
\det A_n/\det A
\end{bmatrix}
$$
其中$A_i$是把$A$的第$i$列替换成$\vec{b}$构成的方阵。
:::
