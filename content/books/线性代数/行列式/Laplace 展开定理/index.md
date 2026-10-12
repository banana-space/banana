---
title: Laplace 展开定理
---

我们在讨论面积元和体积元的时候，观察到3阶行列式可以化为2阶行列式的展开：
$$
\begin{vmatrix}
 u_1 & u_2 & u_3\\
 v_1 & v_2 & v_3\\
 w_1 & w_2 & w_3
\end{vmatrix}=u_1\begin{vmatrix} v_2 & v_3\\ w_2 & w_3\end{vmatrix}-u_2\begin{vmatrix} v_1 & v_3\\ w_1 & w_3\end{vmatrix}+u_3\begin{vmatrix} v_1 & v_2\\ w_1 & w_2\end{vmatrix}
$$
实际上$n$阶行列式也可以化为低阶行列式的展开，这个称为Laplace展开定理。

## 余子式与展开定理*

给定$n$阶方阵
$$
A=\begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{n1} & a_{n2} & \cdots & a_{nn}
\end{bmatrix}
$$

::: definition
$A$的第$i$行第$j$列余子式$A_{ij}$定义为把$A$的第$i$行和第$j$列去掉后得到的$n-1$阶方阵的行列式，即

$$
A_{ij}=\begin{vmatrix}
 a_{11} & \cdots & \cancel{a_{1j}} & \cdots & a_{1n}\\
 \cdots & \cdots & {\vdots} & \cdots & \cdots\\
 \cancel{a_{i1}} & {\cdots} & \cancel{a_{ij}} & {\cdots} & \cancel{a_{in}}\\
 \cdots & \cdots & {\vdots} & \cdots & \cdots\\
 a_{n1} & \cdots & \cancel{a_{nj}} & \cdots &   a_{nn}
\end{vmatrix}
$$
:::

::: example
$
A=\begin{bmatrix}
 1 & 2 & 3 \\
 4 & 5 & 6\\
 7 & 8 & 9
\end{bmatrix}
$，则
$$
A_{12}=\begin{vmatrix}
4 & 6 \\
7 & 9
\end{vmatrix}=-6 \qquad A_{23}=\begin{vmatrix}
1 & 2 \\
7 & 8
\end{vmatrix}=-6
$$
:::

::: example
体积元的展开公式
$$
\begin{vmatrix}
 a_{11} & a_{12} & a_{13}\\
 a_{21} & a_{22} & a_{23}\\
 a_{31} & a_{32} & a_{33}
\end{vmatrix}=a_{11}\begin{vmatrix} a_{22} & a_{23}\\ a_{32} & a_{33}\end{vmatrix}-a_{12}\begin{vmatrix} a_{21} & a_{23}\\ a_{31} & a_{33}\end{vmatrix}+a_{13}\begin{vmatrix} a_{21} & a_{22}\\ a_{31} & a_{32}\end{vmatrix}
$$
可以写成
$$
\det A= a_{11}A_{11}-a_{12}A_{12}+a_{13}A_{13}
$$
:::

::: proposition
设$A=(a_{ij})$是$n$阶方阵，则按照第一行展开有如下公式成立
$$
\det A= \sum_{j=1}^n (-1)^{1+j}a_{1j}A_{1j}
$$
:::

::: proof
记$A$的行向量为
\[
\begin{aligned}
\vec{\alpha}_1&=(a_{11},a_{12},\cdots,a_{1n})=a_{11}\vec{e}_1+a_{12}\vec{e}_2+\cdots+a_{1n}\vec{e}_n\\
\vec{\alpha}_2&=(a_{21},a_{22},\cdots,a_{2n})=a_{21}\vec{e}_1+a_{22}\vec{e}_2+\cdots+a_{2n}\vec{e}_n\\
&\vdots\\
\vec{\alpha}_n&=(a_{n1},a_{n2},\cdots,a_{nn})=a_{n1}\vec{e}_1+a_{n2}\vec{e}_2+\cdots+a_{nn}\vec{e}_n
\end{aligned}
\]

由行列式的外积定义，我们有
$$
\vec{\alpha}_1\wedge \vec{\alpha}_2\wedge \cdots \wedge \vec{\alpha}_n= (\det A)  \ \vec{e}_1\wedge \vec{e}_2\wedge \cdots \wedge \vec{e}_n
$$
另一方面，代入$\vec{\alpha}_1$的表达式
\[
\begin{aligned}
\vec{\alpha}_1\wedge \vec{\alpha}_2\wedge \cdots \wedge \vec{\alpha}_n
=(a_{11}\vec{e}_1+a_{12}\vec{e}_2+\cdots+a_{1n}\vec{e}_n)\wedge \vec{\alpha}_2\wedge \cdots \wedge \vec{\alpha}_n
\end{aligned}
\]

考虑其中的第一项
$
a_{11}\vec{e}_1\wedge \vec{\alpha}_2\wedge \cdots \wedge \vec{\alpha}_n
$，记
\[
\begin{aligned}
\vec{\alpha}_2&=a_{21}\vec{e}_1+a_{22}\vec{e}_2+\cdots+a_{2n}\vec{e}_n=a_{21}\vec{e}_1+\vec{\beta}_2\\
&\vdots\\
\vec{\alpha}_n&=a_{n1}\vec{e}_1+a_{n2}\vec{e}_2+\cdots+a_{nn}\vec{e}_n=a_{n1}\vec{e}_1+\vec{\beta}_n
\end{aligned}
\]
则行向量$\vec{\beta}_2,\cdots, \vec{\beta}_n$组成把$A$的第1行第1列去掉后得到的$n-1$阶方阵。
由外积代数我们有
$$
\vec{\beta}_2\wedge \vec{\beta}_3\wedge \cdots \wedge \vec{\beta}_n=A_{11}\ \vec{e}_2\wedge \vec{e}_3\wedge \cdots \wedge \vec{e}_n
$$

另一方面，由外积代数关系$\vec{e}_1\wedge \vec{e}_1=0$，
$$
\vec{e}_1\wedge \vec{\alpha}_2=\vec{e}_1\wedge (a_{21}\vec{e}_1+\vec{\beta}_2)=\vec{e}_1\wedge \vec{\beta}_2
$$
类似的我们得到
\[
\begin{aligned}
&\vec{e}_1\wedge \vec{\alpha}_2\wedge \cdots \wedge \vec{\alpha}_n\\
=&\vec{e}_1\wedge (a_{21}\vec{e}_1+\vec{\beta}_2)\wedge \cdots \wedge (a_{n1}\vec{e}_1+\vec{\beta}_n)
\\
=&\vec{e}_1\wedge \vec{\beta}_2\wedge \cdots \wedge \vec{\beta}_n
\end{aligned}
\]

因此$\det A$展开的第一项可以写成
\[
\begin{aligned}
a_{11}\vec{e}_1\wedge \vec{\alpha}_2\wedge \cdots \wedge \vec{\alpha}_n
=a_{11}\vec{e}_1\wedge \vec{\beta}_2\wedge \cdots \wedge \vec{\beta}_n
= a_{11}A_{11}\vec{e}_1\wedge \vec{e}_2\wedge \cdots \wedge \vec{e}_n
\end{aligned}
\]

类似的，$\det A$展开的第$j$项可以计算为
\[
\begin{aligned}
a_{1j}\vec{e}_j \wedge \vec{\alpha}_2\wedge \cdots \wedge \vec{\alpha}_n
= a_{1j}A_{1j}\ \vec{e}_j \wedge \vec{e}_1\wedge \cdots \cancel{\vec{e}_j }\cdots \wedge \vec{e}_n
\end{aligned}
\]
我们可以用外积的反对称把$\vec{e}_j$从最前面移动到第$j$个位置，共需要交换$(j-1)$次。所以
\[
\begin{aligned}
&a_{1j}A_{1j}\ \vec{e}_j \wedge \vec{e}_1\wedge \cdots \cancel{\vec{e}_j }\cdots \wedge \vec{e}_n\\
=& (-1)^{1+j}a_{1j}A_{1j}\ \vec{e}_1\wedge \cdots \vec{e}_j \cdots \wedge \vec{e}_n
\end{aligned}
\]

把所有项加起来，我们得到
\[
\begin{aligned}
&\vec{\alpha}_1\wedge \vec{\alpha}_2\wedge \cdots \wedge \vec{\alpha}_n\\
=&(a_{11}\vec{e}_1+a_{12}\vec{e}_2+\cdots+a_{1n}\vec{e}_n)\wedge \vec{\alpha}_2\wedge \cdots \wedge \vec{\alpha}_n\\
=&\left(\sum\limits_{j=1}^n (-1)^{1+j}a_{1j}A_{1j}\right) \vec{e}_1\wedge \vec{e}_2\wedge \cdots \wedge \vec{e}_n
\end{aligned}
\]
比较行列式的外积定义，我们证明了命题所述
$$
\det A= \sum_{j=1}^n (-1)^{1+j}a_{1j}A_{1j}
$$
:::

::: proposition
设$A=(a_{ij})$是$n$阶方阵，则按照第一列展开有如下公式成立
$$
\det A= \sum_{i=1}^n (-1)^{i+1}a_{i1}A_{i1}
$$
:::

::: proof
记$A$的行向量为
\[
\begin{aligned}
\vec{\alpha}_1&=a_{11}\vec{e}_1+a_{12}\vec{e}_2+\cdots+a_{1n}\vec{e}_n=a_{11}\vec{e}_1+\vec{\beta}_1\\
\vec{\alpha}_2&=a_{21}\vec{e}_1+a_{22}\vec{e}_2+\cdots+a_{2n}\vec{e}_n=a_{21}\vec{e}_1+\vec{\beta}_2\\
&\vdots\\
\vec{\alpha}_n&=a_{n1}\vec{e}_1+a_{n2}\vec{e}_2+\cdots+a_{nn}\vec{e}_n=a_{n1}\vec{e}_1+\vec{\beta}_n
\end{aligned}
\]

利用外积的性质，我们可以展开得到
\[
\begin{aligned}
\vec{\alpha}_1\wedge \vec{\alpha}_2\wedge \cdots \wedge \vec{\alpha}_n
=&(a_{11}\vec{e}_1+\vec{\beta}_1)\wedge (a_{21}\vec{e}_1+\vec{\beta}_2)\wedge \cdots \wedge (a_{n1}\vec{e}_1+\vec{\beta}_n)\\
=&\sum\limits_{i=1}^n (-1)^{i+1}a_{i1}\vec{e}_1\wedge \vec{\beta}_1\wedge\cdots \cancel{\vec{\beta}_i}\cdots \wedge \vec{\beta}_n\\
=&\sum\limits_{i=1}^n (-1)^{i+1}a_{i1}A_{i1} \vec{e}_1\wedge \vec{e}_2\wedge \cdots\wedge \vec{e}_n
\end{aligned}
\]
这里最后一步用了和前述命题证明中类似的计算。
:::

::: theorem [Laplace展开定理]
设$A=(a_{ij})$为$n$阶方阵，$A_{ij}$是第$i$行$j$列的余子式。

- 行展开公式：对任意第$i$行
  $$
  \det A= \sum_{j=1}^n (-1)^{i+j}a_{ij}A_{ij}
  $$

- 列展开公式：对任意第$j$列
  $$
  \det A= \sum_{i=1}^n (-1)^{i+j}a_{ij}A_{ij}
  $$

:::

::: proof
我们在前述命题中证明了第$1$行的展开公式和第$1$列的展开公式。
一般的情况证明方法类似，证明细节留作练习。
:::

::: example
按照第$1$行展开计算
\[
\begin{aligned}
\begin{vmatrix}
1 & 2 & 3 \\
0 & -1 & 4 \\
2 & 1 & -2
\end{vmatrix}  = &
1 \cdot \begin{vmatrix}
-1 & 4 \\
1 & -2
\end{vmatrix} -
2 \cdot \begin{vmatrix}
0 & 4 \\
2 & -2
\end{vmatrix} +
3 \cdot \begin{vmatrix}
0 & -1 \\
2 & 1
\end{vmatrix}\\
=& 1\cdot (2-4)-2\cdot (0-8)+3 \cdot (0-(-2))
=20
\end{aligned}
\]

按照第$2$列展开计算
\[
\begin{aligned}
\begin{vmatrix}
1 & 2 & 3 \\
0 & -1 & 4 \\
2 & 1 & -2
\end{vmatrix}  = &
-2 \cdot \begin{vmatrix}
0 & 4 \\
2 & -2
\end{vmatrix} +(-1) \cdot \begin{vmatrix}
1 & 3 \\
2 & -2
\end{vmatrix} -
1 \cdot \begin{vmatrix}
1 & 3 \\
0 & 4
\end{vmatrix}\\
=& (-2)\cdot (0-8)-1\cdot (-2-6)- 1 \cdot (4-0)
=20
\end{aligned}
\]
:::

::: example
我们知道对于上三角方阵
$$
\begin{vmatrix}
a_{11} & a_{12} & a_{13} & \cdots & a_{1n} \\
0 & a_{22} & a_{23} & \cdots & a_{2n} \\
0 & 0 & a_{33} & \cdots & a_{3n} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & a_{nn}
\end{vmatrix}=a_{11} a_{22} \cdots a_{nn}
$$
这个结论可以很容易地通过展开定理理解。我们把行列式按照第1列展开得到
$$
\begin{vmatrix}
a_{11} & a_{12} & a_{13} & \cdots & a_{1n} \\
0 & a_{22} & a_{23} & \cdots & a_{2n} \\
0 & 0 & a_{33} & \cdots & a_{3n} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & a_{nn}
\end{vmatrix}=a_{11} \begin{vmatrix}
 a_{22} & a_{23} & \cdots & a_{2n} \\
 0 & a_{33} & \cdots & a_{3n} \\
\ \vdots & \vdots & \ddots & \vdots \\
 0 & 0 & \cdots & a_{nn}
\end{vmatrix}
$$
重复这个过程就得到行列式为$a_{11} a_{22} \cdots a_{nn}$。
:::

## 转置与行列对称性*

::: definition
给定$m\times n$矩阵$A$，将$A$的行排成列列排成行，得到的$n\times m$矩阵称为$A$的转置，记为$A^T$
$$
A=\begin{bmatrix}
 {\color{blue}{a_{11}}} & {\color{red}{a_{12}}} & \cdots & a_{1n}\\
 {\color{blue}{a_{21}}} & {\color{red}{a_{22}}} & \cdots & a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 {\color{blue}{a_{m1}}} & {\color{red}{a_{m2}}} & \cdots & a_{mn}
\end{bmatrix}
\quad A^T=\begin{bmatrix}
 {\color{blue}{a_{11}}} & {\color{blue}{a_{21}}} & \cdots & {\color{blue}{a_{m1}}}\\
 {\color{red}{a_{12}}} & {\color{red}{a_{22}}} & \cdots & {\color{red}{a_{m2}}}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{1n} & a_{2n} & \cdots & a_{mn}
\end{bmatrix}
$$
:::

可以看出，如果$A$是$n$阶方阵，则$A^T$也是$n$阶方阵。

::: proposition
设$A$是$m\times k$矩阵，$B$是$k\times n$矩阵，则
$$
(AB)^T=B^T A^T
$$
类似地，对于多个矩阵的乘积，$(A_1A_2\cdots A_l)^T=A_l^T \cdots A_2^T A_1^T$。
:::

::: proof
留作练习。
:::

::: theorem
$n$阶行列式具有转置不变性，即$
\det A= \det A^T
$。
:::

::: proof
当$n=1$时显然成立，我们对$n$做归纳。对$\det A$作行展开，对$\det A^T$作列展开，得到
$$
\det A=\sum_{j=1}^n (-1)^{1+j}a_{1j}A_{1j}\qquad \det A^T=\sum_{i=1}^n (-1)^{1+i}a_{1i}A^T_{i1}
$$
由归纳假设知$A_{1i}=A^T_{i1}$，因此$\det A= \det A^T$。
:::

转置不变性说明在行列式中行和列的地位是平等的。因此行列式关于行变换的性质对于列变换也成立。例如我们有

- 关于任意一列具有线性性
  $$
  \begin{vmatrix}
  \cdots & a_1+b_1 & \cdots\\
  \cdots & a_2+b_2 & \cdots\\
  \cdots & \vdots & \cdots \\
  \cdots &  a_{n}+b_n & \cdots\\
  \end{vmatrix}=\begin{vmatrix}
  \cdots  & a_1 & \cdots\\
  \cdots  & a_2 & \cdots\\
  \cdots & \vdots & \cdots \\
  \cdots  & a_{n} & \cdots\\
  \end{vmatrix}+\begin{vmatrix}
  \cdots &  b_1 & \cdots\\
  \cdots &  b_2 & \cdots\\
  \cdots & \vdots & \cdots \\
  \cdots &  b_n & \cdots\\
  \end{vmatrix}
  $$
  $$
  \begin{vmatrix}
   a_{11} & \cdots & \lambda a_{1j} & \cdots & a_{1n}\\
   a_{21} & \cdots & \lambda a_{2j} & \cdots & a_{2n}\\
   \vdots & \vdots & \vdots & \vdots & \vdots\\
   a_{n1} & \cdots & \lambda a_{nj} & \cdots & a_{nn}
  \end{vmatrix}=\lambda \begin{vmatrix}
   a_{11} & \cdots & a_{1j} & \cdots & a_{1n}\\
   a_{21} & \cdots &  a_{2j} & \cdots & a_{2n}\\
   \vdots & \vdots & \vdots & \vdots & \vdots\\
   a_{n1} & \cdots &  a_{nj} & \cdots & a_{nn}
  \end{vmatrix}
  $$

- 交换两列，行列式差一个负号
  $$
  \begin{vmatrix}
   a_{11} & \cdots & a_{1i} & \cdots & a_{1j} & \cdots & a_{1n}\\
   a_{21} & \cdots & a_{2i} & \cdots & a_{2j} & \cdots & a_{2n}\\
   \vdots & \vdots & \vdots &\vdots  &\vdots & \vdots & \vdots\\
   a_{n1} & \cdots & a_{ni} & \cdots & a_{nj} & \cdots & a_{nn}
  \end{vmatrix}=-\begin{vmatrix}
   a_{11} & \cdots & a_{1j} & \cdots & a_{1i} & \cdots & a_{1n}\\
   a_{21} & \cdots & a_{2j} & \cdots & a_{2i} & \cdots & a_{2n}\\
   \vdots & \vdots & \vdots &\vdots  &\vdots & \vdots & \vdots\\
   a_{n1} & \cdots & a_{nj} & \cdots & a_{ni} & \cdots & a_{nn}
  \end{vmatrix}
  $$

- 把一列乘以一个数加到另一列，行列式不变
  $$
  \begin{vmatrix}
   a_{11} & \cdots & a_{1i}+\lambda a_{1j} & \cdots & a_{1j} & \cdots & a_{1n}\\
   a_{21} & \cdots & a_{2i}+\lambda a_{2j} & \cdots & a_{2j} & \cdots & a_{2n}\\
   \vdots & \vdots & \vdots &\vdots  &\vdots & \vdots & \vdots\\
   a_{n1} & \cdots & a_{ni}+\lambda a_{nj} & \cdots & a_{nj} & \cdots & a_{nn}
  \end{vmatrix}=\begin{vmatrix}
   a_{11} & \cdots & a_{1i} & \cdots & a_{1j} & \cdots & a_{1n}\\
   a_{21} & \cdots & a_{2i} & \cdots & a_{2j} & \cdots & a_{2n}\\
   \vdots & \vdots & \vdots &\vdots  &\vdots & \vdots & \vdots\\
   a_{n1} & \cdots & a_{ni} & \cdots & a_{nj} & \cdots & a_{nn}
  \end{vmatrix}
  $$

## 一些例子*

::: example [Vandermonde行列式]
如下$n$阶行列式
$$
\Delta_n(x_1,\cdots,x_n):=\begin{vmatrix}
1 & 1 & \cdots & 1\\
x_1 & x_2 & \cdots & x_n\\
x_1^2 & x_2^2 & \cdots & x_n^2\\
\vdots & \vdots & \vdots & \vdots\\
x_1^{n-1} & x_2^{n-1} & \cdots & x_n^{n-1}
\end{vmatrix}
$$
称为Vandermonde行列式，在数学和物理中有很多应用。

我们用展开定理来计算$\Delta_n(x_1,\cdots,x_n)$。
把第$(n-1)$行乘以$-x_1$加到第$n$行，然后把第$(n-2)$行乘以$-x_1$加到第$n-1$行，$\cdots$，
最后把第$1$行乘以$-x_1$加到第$2$行，我们得到
\[
\begin{aligned}
\begin{vmatrix}
1 & 1 & \cdots & 1\\
x_1 & x_2 & \cdots & x_n\\
x_1^2 & x_2^2 & \cdots & x_n^2\\
\vdots & \vdots & \vdots & \vdots\\
x_1^{n-1} & x_2^{n-1} & \cdots & x_n^{n-1}
\end{vmatrix}=\begin{vmatrix}
1 & 1 & \cdots & 1\\
0 & x_2-x_1 & \cdots & x_n-x_1\\
0 & (x_2-x_1)x_2 & \cdots & (x_n-x_1) x_n\\
\vdots & \vdots & \vdots & \vdots\\
0 & (x_2-x_1)x_2^{n-2} & \cdots & (x_n-x_1)x_n^{n-2}
\end{vmatrix}
\end{aligned}
\]
按照第$1$列展开，我们得到
\[
\begin{aligned}
=&\begin{vmatrix}
x_2-x_1 & \cdots & x_n-x_1\\
(x_2-x_1)x_2 & \cdots & (x_n-x_1) x_n\\
\vdots & \vdots & \vdots \\
(x_2-x_1)x_2^{n-2} & \cdots & (x_n-x_1)x_n^{n-2}
\end{vmatrix}\\
=&(x_2-x_1)(x_3-x_1)\cdots (x_n-x_1) \begin{vmatrix}
1 & 1 & \cdots & 1\\
x_2 & x_3 & \cdots & x_n\\
\vdots & \vdots & \vdots & \vdots\\
x_2^{n-2} & x_3^{n-2} & \cdots & x_n^{n-2}
\end{vmatrix}
\end{aligned}
\]
这里第二个等式是因为提取了每列的共同系数。因此我们得到递推关系
$$
\Delta_n(x_1,\cdots, x_n)=\Delta_{n-1}(x_2,\cdots,x_n)\prod_{i=2}^n(x_i-x_1).
$$
由此得到
\[
\begin{aligned}
&\Delta_n(x_1,\cdots, x_n)=\Delta_{n-1}(x_2,\cdots,x_n)\prod_{i=2}^n(x_i-x_1)\\
=&\Delta_{n-2}(x_3,\cdots,x_n)\left(\prod_{i=3}^n(x_i-x_2)\right)\left(\prod_{i=2}^n(x_i-x_1)\right)\\
=&\cdots=\prod_{i>j}(x_i-x_j)
\end{aligned}
\]
:::

::: example
求如下$n$阶三对角矩阵的行列式
$$
\Delta_n=\begin{vmatrix}
-2 & 1 & 0 & 0& \cdots & 0\\
1 & -2 & 1 & 0 & \cdots & 0\\
0 & 1 & -2 & 1 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots & \cdots & \cdots\\
0 & 0 & 0 &\cdots & 1 & -2
\end{vmatrix}_n
$$
这里右下角标$|_n$表示是$n$阶方阵。这个矩阵在Poisson方程边值问题的数值解法中扮演了十分重要的角色。
把行列式通过第一行展开，我们得到
\[
\begin{aligned}
&\qquad \begin{vmatrix}
-2 & 1 & 0 & 0& \cdots & 0\\
1 & -2 & 1 & 0 & \cdots & 0\\
0 & 1 & -2 & 1 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots & \cdots & \cdots\\
0 & 0 & 0 &\cdots & 1 & -2
\end{vmatrix}_n\\
=&（-2）\begin{vmatrix}
-2 & 1 & 0 &  \cdots & 0\\
1 & -2 & 1 &  \cdots & 0\\
\cdots & \cdots & \cdots & \cdots &  \cdots\\
0 & 0  &\cdots & 1 & -2
\end{vmatrix}_{n-1}-\begin{vmatrix}
1 & 1 & 0 &  \cdots & 0\\
0 & -2 & 1 &  \cdots & 0\\
\cdots & \cdots & \cdots & \cdots & \cdots \\
0 & 0  &\cdots & 1 & -2
\end{vmatrix}_{n-1}
\end{aligned}
\]

再把上述第二个矩阵按照第一列展开
\[
\begin{aligned}
=&（-2）\begin{vmatrix}
-2 & 1 & 0 &  \cdots & 0\\
1 & -2 & 1 &  \cdots & 0\\
\cdots & \cdots & \cdots &  \cdots & \cdots\\
0 & 0  &\cdots & 1 & -2
\end{vmatrix}_{n-1}-\begin{vmatrix}
 -2 & 1 &  \cdots & 0\\
\cdots & \cdots & \cdots & \cdots \\
0  &\cdots & 1 & -2
\end{vmatrix}_{n-2}
\end{aligned}
\]
因此我们得到递推关系
$$
\Delta_n=-2\Delta_{n-1}-\Delta_{n-2}
$$
初始条件为$\Delta_1=-2, \Delta_2=3$。

我们把递推关系写成$(\Delta_n+\Delta_{n-1})=-(\Delta_{n-1}+\Delta_{n-2})$，因此
\[
\begin{aligned}
&(\Delta_n+\Delta_{n-1})
=-(\Delta_{n-1}+\Delta_{n-2})\\
=&\cdots=(-1)^{n-2}(\Delta_2+\Delta_1)=(-1)^n
\end{aligned}
\]
代入得
\[
\begin{aligned}
\Delta_n=&(-1)^n-\Delta_{n-1}\\
=&(-1)^n-(-1)^{n-1}+\Delta_{n-2}
=\cdots\\
=&(-1)^n-(-1)^{n-1}+\cdots+ (-1)^2+(-1)^{n-1}\Delta_1\\
=&(n+1)(-1)^n
\end{aligned}
\]
:::
