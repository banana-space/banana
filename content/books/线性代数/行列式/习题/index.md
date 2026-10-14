---
title: 习题
---

1. 计算如下行列式
   \[
   \begin{aligned}
   &(1)\quad \begin{vmatrix}
   1 & 2 & 3 \\
   0 & 1 & 4 \\
   5 & 6 & 0
   \end{vmatrix}&&
   (2)\quad \begin{vmatrix}
   1 & 2 & 3 & 4 \\
   0 & 1 & 0 & 2 \\
   1 & 0 & 1 & 1 \\
   2 & 3 & 0 & 1
   \end{vmatrix}
   &&
   (3)\quad \begin{vmatrix}
   1 & 2 & 3 & 4 \\
   2 & 3 & 4 & 1 \\
   3 & 4 & 1 & 2 \\
   4 & 1 & 2 & 3
   \end{vmatrix}
   \end{aligned}
   \]

2. 用行列式的组合公式计算如下$n$阶行列式
   \[
   \begin{aligned}
   &(1)\quad \begin{vmatrix}
   a & b & 0 & \cdots & \cdots & 0\\
   0 & a & b & 0 & \cdots & 0\\
   \cdots & \cdots & \cdots & \cdots & \cdots & \cdots\\
   0 & 0 & \cdots & \cdots& a & b\\
   b & 0 & \cdots & \cdots & 0 & a
   \end{vmatrix}
   &&
   (2)\quad \begin{vmatrix}
   x & -1 & 0 & \cdots & \cdots & 0\\
   0 & x & -1 & 0 & \cdots & 0\\
   \cdots & \cdots & \cdots & \cdots & \cdots & \cdots\\
   0 & 0 & \cdots & \cdots& x & -1\\
   a_{n} & a_{n-1} & \cdots & \cdots & a_2 & x+a_1
   \end{vmatrix}
   \end{aligned}
   \]

3. (a) 说明对$m\times n$矩阵$A$作的三种初等行变换均可以写成对$A$左乘一个$m$阶方阵$P$
       $$
       A\to PA
       $$
       写出三种初等行变换对应的矩阵$P$并计算其行列式$\det P$。

   (b) 和初等行变换类似，我们可以定义矩阵的三种初等列变换为

       - i. 交换两列：将矩阵的两列交换位置

       - ii. 将矩阵中的一列乘以一个非零常数

       - iii. 将矩阵的一列乘以一个数加到另一列

       说明对$m\times n$矩阵$A$作的三种初等列变换均可以写成对$A$右乘一个$n$阶方阵$Q$
       $$
       A\to AQ
       $$
       写出三种初等列变换对应的矩阵$Q$并计算其行列式$\det Q$。

4. 设$A$是如下分块上三角形式
   $$
   A=\begin{bmatrix}
    B & C\\
    0 & D
   \end{bmatrix}
   $$
   这里$B$是$k\times k$矩阵，$C$是$k\times (n-k)$矩阵，$D$是$(n-k)\times (n-k)$矩阵。
   证明$\det A= \det B \det D$。

5. 设$A$是$m\times k$矩阵，$B$是$k\times n$矩阵。证明
   $$
   (AB)^T=B^T A^T
   $$
   类似地，对于多个矩阵的乘积，$(A_1A_2\cdots A_l)^T=A_l^T \cdots A_2^T A_1^T$。

6. 利用Laplace展开定理计算
   \[
   \begin{aligned}
   &(1)\quad \begin{vmatrix}
   1 & 2 & 3 & 4 \\
   0 & 1 & 0 & 2 \\
   1 & 0 & 1 & 1 \\
   2 & 3 & 0 & 1
   \end{vmatrix}
   &&
   (2)\quad
   \begin{vmatrix}
   1 & 0 & 0 & 0 & 1 \\
   0 & 1 & 0 & 1 & 0 \\
   0 & 0 & 1 & 0 & 1 \\
   1 & 1 & 1 & 1 & 1 \\
   2 & 3 & 4 & 5 & 6
   \end{vmatrix}
   \end{aligned}
   \]

7. Fibonacci数为：$F_1=1, F_2=2, F_n=F_{n-1}+F_{n-2}\ (n\geq 3)$。证明Fibonacci数可以写成
   $$
   F_n=\begin{vmatrix}
   1 & 1 & 0 & 0& \cdots & 0\\
    -1 & 1 & 1 & 0 &\cdots & 0\\
    0 & -1 & 1 & 1 & \cdots & 0\\
   \cdots & \cdots & \cdots & \cdots & \cdots & \cdots\\
   0 & 0 & \cdots & -1 & 1 & 1\\
   0 & 0 & \cdots & \cdots & -1 & 1\\
   \end{vmatrix}
   $$

8. 设$n$阶方阵$A$的矩阵元$a_{ij}=a_{ij}(x)$都是变量$x$的可微函数。证明
   $$
   \frac{d \det A}{dx}=\sum\limits_{1\leq i,j\leq n} (-1)^{i+j}\frac{d a_{ij}}{dx} A_{ij}
   $$
   其中$A_{ij}$是$A$的第$i$行第$j$列余子式。

9. 设$A$是$m\times n$矩阵，$B$是$n\times m$矩阵。考虑$(m+n)\times (m+n)$阶方阵$\begin{bmatrix}
I_m & A \\ B & I_n
\end{bmatrix}$，这里$I_m$是$m$阶单位阵，$I_n$是$n$阶单位阵。

   (a) 证明
       \[
       \begin{aligned}
       &\begin{bmatrix}
       I_m & 0\\
       -B & I_n
       \end{bmatrix}\begin{bmatrix}
       I_m & A \\ B & I_n
       \end{bmatrix}=\begin{bmatrix}
       I_m & A \\ 0 & I_n-BA
       \end{bmatrix}\\
       &\begin{bmatrix}
       I_m & -A\\
       0 & I_n
       \end{bmatrix}\begin{bmatrix}
       I_m & A \\ B & I_n
       \end{bmatrix}=\begin{bmatrix}
       I_m-AB & 0 \\ B & I_n
       \end{bmatrix}
       \end{aligned}
       \]

   (b) 证明
       $$
       \det (I_m-AB)=\det (I_n-BA)
       $$

   (c) 计算行列式
       $$
       \begin{vmatrix}
        1+ a_1b_1 & a_1 b_2 &\cdots & a_1b_n\\
        a_2b_1 & 1+ a_2b_2 &\cdots & a_2b_n\\
        \cdots & \cdots & \cdots& \cdots\\
        a_n b_1 & a_n b_2 & \cdots & 1+a_nb_n
       \end{vmatrix}
       $$

10. 求下列矩阵的逆
    \[
    \begin{aligned}
    &(1)\quad \begin{bmatrix}
    1 & 1 & 1 \\
    2 & 3 & 1 \\
    1 & 0 & 1
    \end{bmatrix} &&(2)\quad \begin{bmatrix}
    1 & 2 & 3 & 4 \\
    0 & 1 & 4 & 2 \\
    1 & 0 & 1 & 1 \\
    2 & 3 & 0 & 1
    \end{bmatrix}
    \\
    &
    (3)\quad \begin{bmatrix}
     1 & 1 &  \cdots & 1\\
     0 & 1 &  \cdots & 1\\
     \cdots & \cdots & \cdots & \cdots \\
     0 & 0 & \cdots & 1
    \end{bmatrix}_{n\times n}
    &&
    (4)\quad \begin{bmatrix}
    -2 & 1 & 0 & 0& \cdots & 0\\
    1 & -2 & 1 & 0 & \cdots & 0\\
    0 & 1 & -2 & 1 & \cdots & 0\\
    \cdots & \cdots & \cdots & \cdots & \cdots & \cdots\\
    0 & 0 & 0 &\cdots & 1 & -2
    \end{bmatrix}_{n\times n} &
    \end{aligned}
    \]

11. 设$A$是$n$阶幂零方阵，即存在$N$使得$A^N=0$。证明$I_n-A$可逆。

12. 设$A$是上三角方阵
    $$
    \begin{vmatrix}
    a_{11} & a_{12} & a_{13} & \cdots & a_{1n} \\
    0 & a_{22} & a_{23} & \cdots & a_{2n} \\
    0 & 0 & a_{33} & \cdots & a_{3n} \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & 0 & \cdots & a_{nn}
    \end{vmatrix}
    $$
    且$A$可逆。证明$A^{-1}$也是上三角方阵。

13. 设$A$是$m\times n$矩阵。
    取出$A$的第$i_1,i_2,\cdots,i_p$行和第$j_1,j_2,\cdots,j_p$列交叉位置上的元素构成的$p$
    阶方阵的行列式
    $$
    \begin{vmatrix}
    a_{i_1 j_1} & a_{i_1 j_2}&\cdots& a_{i_1 j_p}\\
    a_{i_2 j_1} & a_{i_2 j_2}&\cdots& a_{i_2 j_p}\\
    \cdots & \cdots& \cdots & \cdots \\
    a_{i_p j_1} & a_{i_p j_2}&\cdots& a_{i_p j_p}
    \end{vmatrix}
    $$
    称为$A$的一个$p$阶行列子式。记$A$的所有非零行列子式的最高阶数为$p(A)$。证明
    $$
    p(A)=\operatorname{rank} A
    $$

14. 设$m\times n$矩阵$A$的秩为$r$。证明存在可逆$m$阶方阵$P$和可逆$n$阶方阵$Q$使得
    $$
    A=P \begin{bmatrix}
    I_{r} & 0\\
    0 & 0
    \end{bmatrix}Q
    $$
    $\begin{bmatrix}
I_{r} & 0\\
0 & 0
\end{bmatrix}$是$m\times n$阶矩阵，左上角$I_r$是$r$阶单位阵。这个结论称为矩阵的相抵标准型。
