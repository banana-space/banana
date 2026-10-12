---
title: 习题
---

1. 计算如下两个矩阵$A, B$的乘积$AB$：
   \[
   \begin{aligned}
   &(1)\quad \begin{bmatrix}
   2 & 1 & 3 \\
   0 & 4 & 1 \\
   5 & 2 & 0
   \end{bmatrix} \begin{bmatrix}
   1 & 0 & 2 \\
   3 & 4 & 1 \\
   2 & 1 & 0
   \end{bmatrix}&&
   (2)\quad \begin{bmatrix}
   1 & 3 & 2 \\
   4 & 0 & 1 \\
   5 & 2 & 3
   \end{bmatrix}\begin{bmatrix}
   0 & 1 \\
   2 & 1 \\
   3 & 4
   \end{bmatrix}
   &&
   (3)\quad
   \begin{bmatrix}
   1 \\
   2 \\
   3 \\
   4
   \end{bmatrix}
   \begin{bmatrix}
   5 & 6 & 7 & 8
   \end{bmatrix}
   &
   \end{aligned}
   \]

2. 设$n\times n$矩阵$A, B$满足$AB=BA$，
   证明$(A+B)^k=\sum\limits_{i=0}^k{k!\over i!(k-i)!}A^i B^{k-i}$。
   举例说明如果$AB\neq BA$，那么这个公式不成立。

3. 考虑如下矩阵$A$，计算$A^n$，这里$n$是正整数
   \[
   \begin{aligned}
    & (1)\quad  \begin{bmatrix}
   1 & 1\\
   0 & 1
    \end{bmatrix}  && (2)\quad \begin{bmatrix}
   a & b\\
   0 & a
    \end{bmatrix}  && (3)\quad \begin{bmatrix}
   \cos \theta & -\sin \theta\\
   \sin\theta & \cos \theta
    \end{bmatrix} \\
    & (4) \quad \begin{bmatrix}
   1 & 1 & 0 & 0 \\
   0 & 1& 1 & 0 \\
   0 & 0 & 1 & 1 \\
   0 & 0 & 0 & 1
    \end{bmatrix}
    && (5)\quad  \begin{bmatrix}
   a_1 b_1 & a_1 b_2 & a_1 b_3 \\
   a_2 b_1 & a_2 b_2 & a_2 b_3\\
   a_3 b_1 & a_3 b_2 & a_3 b_3
    \end{bmatrix}
   \end{aligned}
   \]

4. 求如下齐次线性方程组的通解
   \[
   \begin{aligned}
   (1)\quad \begin{cases}
   x_1+x_2+x_3+x_4+x_5=0\\
   3x_1+2x_2+x_3+x_4-3x_5=0\\
   x_2+2x_3+2x_4+6x_5=0\\
   5x_1+4x_2+3 x_3+3x_4-x_5=0
   \end{cases}
   \quad \quad
   (2)\quad \begin{cases}
   x_1+x_2-3x_4-x_5=0\\
   x_1-x_2-2x_3-x_4=0\\
   4x_1-2x_2+6x_3+3x_4-4x_5=0\\
   2x_1+4x_2-2x_3+4x_4-7x_5=0
   \end{cases}
   \end{aligned}
   \]

5. 如果$m<n$，证明如下齐次线性方程组一定有非零解
   $$
   \begin{cases}
   a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = 0 \\
   a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = 0 \\
   \qquad \qquad \vdots \\
   a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = 0
   \end{cases}
   $$

6. 补充完整 @prop:invariance-column-rank 的证明，即矩阵的列秩在初等行变换下不变。

7. 求如下非齐次线性方程组的通解
   \[
   \begin{aligned}
   &(1)\quad \begin{cases}
   3x - 2y + z = 7 \\
   2x + y - 3z = 9 \\
   x - y + 2z = 4
   \end{cases}&&
   (2)\quad \begin{cases}
   x_1 + 2x_2 - x_3 + 3x_4 = -1 \\
   2x_1 - x_2 + 4x_3 - x_4 = 13 \\
   -3x_1 + 4x_2 + x_3 + 2x_4 = 6 \\
   x_1 - x_2 + 2x_3 + x_4 = 4
   \end{cases}
   &\\
   &
   (3)\quad \begin{cases}
   3x_1 - x_2 + 2x_3 + x_4 = 9 \\
   x_1 + 4x_2 - 2x_3 + 3x_4 = 5 \\
   -x_1 + 2x_2 + x_3 - x_4 = 2 \\
   5x_1 + x_2 - x_3 + 5x_4 = 10
   \end{cases}
   &&(4)\quad \begin{cases}
   x_1-2x_2+3x_3-4x_4=4\\
   x_2-x_3+x_4=-3\\
   x_1+3x_2-3x_4=1\\
   -7x_2+3x_3+x_4=-3
   \end{cases}
   &\\
   &(5)\quad \begin{cases}
   x_1+x_2-3x_3=-1\\
   2x_1+x_2-2x_3=1\\
   x_1+x_2+x_3=3\\
   x_1+2x_2-3x_3=1
   \end{cases}
   &
   \end{aligned}
   \]

8. 当$\lambda$取何值时，如下线性方程组有解？有唯一解？并求其所有解
   $$
   \begin{cases}
   \lambda x_1+x_2+x_4=1\\
   x_1+\lambda x_2+x_3=1\\
   x_2+\lambda x_3+x_4=1\\
   x_1+x_3+\lambda x_4=1
   \end{cases}
   $$

9. 设$A$是$m\times n$矩阵，$\text{rank} A=n-1$。
   证明齐次线性方程组$A \vec{x}=0$的任意两个解成比例，即相差一个数值因子。

10. 设$A$是$m\times n$矩阵，且$\text{rank} A=1$。
    证明$A$可以写成一个$m\times 1$矩阵和一个$1\times n$矩阵的乘积：
    $$
    A=\begin{bmatrix}
    a_1 \\ a_2\\ \vdots \\ a_m
    \end{bmatrix} \begin{bmatrix}
    b_1 & b_2 & \cdots & b_n
    \end{bmatrix}
    $$

11. 证明 @thm:rank-null-general。
