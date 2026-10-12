---
title: 习题
---

1. 求下列方阵的特征多项式、特征值以及每个特征值的特征向量
   \[
   \begin{aligned}
   &\text{(a)} \begin{bmatrix}
   2 & -1 & 2\\
   5 & -3 & 3\\
   1 & 0 & -2
   \end{bmatrix}
   &&
   \text{(b)} \begin{bmatrix}
   0 & 0 & 1\\
   0 & 1 & 0\\
   1 & 0 & 1
   \end{bmatrix}
   &&
   \text{(c)} \begin{bmatrix}
   a_0 & a_1 & a_2 & \cdots & a_{n-1}\\
   a_{n-1} & a_0 & a_1 & \cdots & a_{n-2}\\
   a_{n-2} & a_{n-1} & a_0 & \cdots & a_{n-3}\\
   \cdots &\cdots &\cdots &\cdots &\cdots \\
   a_1 & a_2 & a_3 & \cdots & a_0
   \end{bmatrix}
   \end{aligned}
   \]

2. 已知$A=\begin{bmatrix}
2 & 0 & 0\\
-1 & 3 & 1\\
-1 & 1 & 3
\end{bmatrix}$，求$A^{20}$。

3. 设$n$阶可逆方阵$A$的特征多项式为$\varphi(\lambda)=\lambda^{n}+a_1\lambda^{n-1}+\cdots+a_n$。
   求$A^{-1}$的特征多项式，并说明$A^{-1}$的特征值与$A$的特征值的关系。

4. 设$A$是$n\times m$矩阵，$B$是$m\times n$ 矩阵。证明$\operatorname{Tr} AB =\operatorname{Tr} BA$。

5. 证明不存在$n$阶方阵$A, B$使得$AB-BA=I_n$。
   注：这说明量子力学中的坐标和动量算子不可能通过有限维矩阵来实现。

6. 设$A, B$是$n$阶方阵。证明$AB$和$BA$的特征多项式相同。

7. 设$A, B$是两个$n$阶对角方阵。
   证明$A$和$B$相似当且仅当它们的特征多项式相同，即对角元素相同（排列顺序可能不同）。

8. 举例说明两个特征多项式相同的$n$阶方阵可能不相似。

9. 设$A, B$是两个$n$阶复方阵，$A$的特征多项式为$\varphi(\lambda)$。
   证明$n$阶复方阵$\varphi(B)$可逆当且仅当$A$和$B$没有共同的特征值。

10. 设$A, B$是两个$n$阶复方阵，且没有共同的特征值。设$n$阶复方阵$X$满足$AX=XB$。证明$X=0$。

11. 求下列方阵所有的特征值、特征子空间和根子空间，并判断其是否可以对角化
    \[
    \begin{aligned}
    \text{(a)} \quad \begin{bmatrix}
    2 & 0 & 1\\
    -1 & 3 & 2\\
    0 & 0 & 2
    \end{bmatrix}
    \qquad \qquad \text{(b)} \quad \begin{bmatrix}
     0 & -2 &3 & 2\\
     1 & 1 & -1 & -1\\
     0 & 0 & 2 & 0\\
     1 & -1 & 0 & 1
    \end{bmatrix}
    \end{aligned}
    \]

12. - (a) 证明$V$的两个子空间$V_1, V_2$的和是直和当且仅当$V_1\cap V_2=\{0\}$是零子空间。

    - (b) 举例说明，三个线性子空间$V_1, V_2, V_3$满足$V_1\cap V_2=V_1\cap V_3=V_2\cap V_3=\{0\}$，
      但$V_1+V_2+V_3$不一定是直和。

    - (c) 证明如果三个线性子空间$V_1, V_2, V_3$满足$V_1\cap V_2=\{0\}, (V_1+V_2)\cap V_3=0$，
      则$V_1+V_2+V_3=V_1\oplus V_2 \oplus V_3$是直和。

13. 设$V_1, V_2\subset k^n$是$n$阶方阵$A$的两个不变子空间，$\dim V_1=r, \dim V_2=n-r$，
    并且$k^n=V_1\oplus V_2$。证明$A$相似于如下形式的矩阵
    $$
    \begin{bmatrix}
     B & 0 \\
     0 & C
    \end{bmatrix}
    $$
    这里$B$是$r$阶方阵，$C$是$n-r$阶方阵。

14. 证明任意$n$阶复方阵都可以相似于一个上三角方阵。

15. - (a) 证明任意$n$阶复方阵$A$都可以分解为$A=D+N$。
    这里$D$是$n$阶可对角化方阵，$N$是$n$阶幂零方阵，并且$DN=ND$。

    - (b) 对于矩阵$A=\begin{bmatrix}
3 & 1 & -1\\
2 & 2 & -1\\
2 & 2 & 0
\end{bmatrix}$，找出(a)中所述$D$和$N$。

16. - (a) 证明Jordan块$J_{n}(0)= \begin{bmatrix} 0 & 1 & 0 & \cdots & 0\\
0 & 0 & 1 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots& \cdots\\
0 & 0 & \cdots & 0 & 1\\
0 & 0 & \cdots & 0 & 0\end{bmatrix}$与它的转置$J_n(0)^T$相似。

    - (b) 证明$n$阶复方阵$A$与它的转置$A^T$相似。

17. 设$A, B$是两个可对角化的$n$阶复方阵。证明 如下两个性质等价：

    - (a) $A, B$可以同时对角化，即存在可逆$P$使得$PAP^{-1}, PBP^{-1}$均为对角阵

    - (b) $A$与$B$可交换，即$AB=BA$

18. - (a) 设$J_m(\lambda)$是一个Jordan块，$|\lambda|<1$。
    证明$\lim\limits_{N\to \infty}J_m(\lambda)^N=0$。

    - (b) 设方阵$A$的所有特征值的绝对值均小于1，证明$\lim\limits_{N\to \infty}A^N=0$。

19. 设$\widehat M$是Google PageRank算法中改进的链接关系矩阵。

    - (a) 证明$-1$不是$\widehat M$的特征值。

    - (b) 讲义中我们证明了$\widehat M$关于特征值$\lambda=1$的几何重数是$1$。
      证明$\widehat M$关于特征值$\lambda=1$的代数重数也是$1$，
      即特征值$1$的根子空间和特征子空间一致。
