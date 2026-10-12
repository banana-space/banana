---
title: 特征值与特征向量
---

## 特征值与特征向量*

我们知道$n$阶方阵$A$对应于线性映射$f:k^n\to k^n$（这里数域 $k=\mathbb{R} $或者$\mathbb{C} $）
$$
f: \begin{bmatrix}
x_1 \\ x_2\\ \cdots \\ x_n
\end{bmatrix}\mapsto \begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{n1} & a_{n2} & \cdots & a_{nn}
\end{bmatrix}\begin{bmatrix}
x_1 \\ x_2\\ \cdots \\ x_n
\end{bmatrix}
$$
即把列向量$\vec{x}$映射为
$$
f(\vec{x})=A\vec{x}
$$

为了更好地刻画这个映射的结构和几何性质，
我们可以寻找一些特殊的向量使得这个线性映射把这些特殊向量映射到相对简单的形式。
其中最自然的一类向量，就是使得线性映射把它映射到它自己的一个倍数。
这类向量称为特征向量，其伸缩的倍数称为特征值。

::: definition
设$A$是一个$n$阶方阵。如果存在一个非零向量$\vec{x}$和一个数$\lambda$使得
$$
A \vec{x}= \lambda \vec{x}
$$
则$\lambda$称为$A$的一个特征值，$\vec{x}$称为（属于特征值$\lambda$的）一个特征向量。
:::

这个概念类似地也可以对线性变换来定义。

::: definition
设$f:V\to V$是线性空间$V$到自身的一个线性映射。
如果存在一个非零向量$\vec{x}\in V$和一个数$\lambda$使得
$$
f(\vec{x})= \lambda \vec{x}
$$
则$\lambda$称为$f$的一个特征值，$\vec{x}$称为（属于特征值$\lambda$的）一个特征向量。
:::

::: example
考虑矩阵
$
  A=\begin{bmatrix}
   2 & 0 & 1 & 4\\
   0 & 1 & 4 & 2\\
   1 & 4 & 2 & 0\\
   4 & 2 & 0 & 1
  \end{bmatrix}
  $。观察到

$$
\begin{bmatrix}
 2 & 0 & 1 & 4\\
 0 & 1 & 4 & 2\\
 1 & 4 & 2 & 0\\
 4 & 2 & 0 & 1
\end{bmatrix}\begin{bmatrix}
   1 \\ 1 \\ 1 \\ 1
\end{bmatrix}=7 \begin{bmatrix}
   1 \\ 1 \\ 1 \\ 1
\end{bmatrix}
$$
因此$7$是$A$的一个特征值，$ \begin{bmatrix}
     1 \\ 1 \\ 1 \\ 1
  \end{bmatrix}$ 是一个特征向量。
:::

并不是任何$\lambda$都能成为给定方阵$A$的特征值。例如考虑$A= \begin{bmatrix} 3 & 0 & 0\\
0 & 3 & 0\\
0 & 0 & 3\end{bmatrix}$，由于
$$
A \vec{x}=3 \vec{x}
$$
对任意向量$\vec{x}$成立，因此$A$的特征值只有$\lambda=3$。

$A$也可能有多个不同的特征值。例如考虑$A=\begin{bmatrix} 2 & 0 \\
0 & 3 \end{bmatrix}$，容易看出

\[
\begin{aligned}
\begin{bmatrix} 2 & 0 \\
0 & 3 \end{bmatrix} \begin{bmatrix} 1 \\ 0
\end{bmatrix}=2\begin{bmatrix} 1 \\ 0
\end{bmatrix}  \qquad
\begin{bmatrix} 2 & 0 \\
0 & 3 \end{bmatrix} \begin{bmatrix} 0 \\ 1
\end{bmatrix}=3\begin{bmatrix} 0 \\ 1
\end{bmatrix}
\end{aligned}
\]
因此$\lambda=2$和$\lambda=3$均为$A$的特征值。

下面这个命题是特征值的等价描述。

::: proposition
$\lambda$是$n$阶方阵$A$的特征值当且仅当齐次线性方程组
$$
(\lambda I_n-A)\vec{x}=0
$$
具有非零解。
:::

::: proof
假设如上齐次线性方程组有非零解$\vec{x}$，则
$$
A \vec{x}=\lambda I_n \vec{x}=\lambda \vec{x}
$$
因此$\lambda$是特征值，$\vec{x}$是属于$\lambda$的特征向量。反之亦然。
:::

上述命题给出了特征值的具体判别方法。

::: proposition {@prop:eigen-char}
$\lambda$是$n$阶方阵$A$的特征值当且仅当
$$
\det(\lambda I_n-A)=0
$$
:::

::: proof
齐次线性方程组$(\lambda I_n-A)\vec{x}=0$具有非零解当且仅当$ \det(\lambda I_n-A)=0$。
:::

## 特征多项式*

::: definition
设$A$是$n$阶方阵。则$n$次多项式
$$
\varphi(\lambda):=\det(\lambda I_n-A)
$$
称为$A$的特征多项式。
:::

由 @prop:eigen-char 知，$A$的特征值即为特征多项式的根。

::: example
$A=\begin{bmatrix}
2 & 1 & 0 \\
1 & 2 & 1 \\
0 & 1 & 2
\end{bmatrix}$，特征多项式为
\[
\begin{aligned}
\varphi(\lambda)=&\begin{vmatrix}
\lambda-2 & -1 & 0 \\
-1 & \lambda-2 & -1 \\
0 & -1 & \lambda-2
\end{vmatrix}=(\lambda-2)\begin{vmatrix} \lambda-2 & -1\\ -1 & \lambda -2 \end{vmatrix}+\begin{vmatrix} -1 & -1\\ 0 & \lambda -2 \end{vmatrix}
\\
=&(\lambda-2)((\lambda-2)^2-2)=(\lambda-2)(\lambda-2-\sqrt{2})(\lambda-2+\sqrt{2})
\end{aligned}
\]
因此$A$有$3$个特征值$2, 2+\sqrt{2}, 2-\sqrt{2}$。
:::

对于$n$阶方阵$A=(a_{ij})$，其特征多项式
$$
\varphi(\lambda)=\begin{vmatrix}
 \lambda-a_{11} & -a_{12} & \cdots & -a_{1n}\\
 -a_{21} & \lambda-a_{22} & \cdots & -a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 -a_{n1} & -a_{n2} & \cdots & \lambda-a_{nn}
\end{vmatrix}=\lambda^n+\alpha_1 \lambda^{n-1}+\cdots +\alpha_{n-1}\lambda+\alpha_n
$$
是首项为$\lambda^n$的$n$次多项式。由代数学基本定理，我们可以把$\varphi(\lambda)$分解为
$$
\varphi(\lambda)=(\lambda-\lambda_1)(\lambda-\lambda_2)\cdots(\lambda-\lambda_n)
$$
这里$\lambda_1,\cdots, \lambda_n$是$\varphi(\lambda)$的所有复数根（可以有重根）。

::: proposition
设$\lambda_1,\cdots,\lambda_n$是$A$的特征多项式$\varphi(\lambda)$的所有复数根（可以有重根），则
$$
\det A= \lambda_1\lambda_2\cdots \lambda_n
$$
:::

::: proof
由$\varphi(\lambda)=(\lambda-\lambda_1)(\lambda-\lambda_2)\cdots(\lambda-\lambda_n)$，
知$\varphi(0)=(-1)^n \lambda_1\lambda_2\cdots \lambda_n$。另一方面由定义
$$
\varphi(0)=\det(-A)=(-1)^n \det A
$$
对比两个表达式即得命题。
:::

::: proposition
方阵$A$可逆当且仅当$A$的特征值全不为零。
:::

::: proof
由
$$
\det A= \lambda_1\lambda_2\cdots \lambda_n
$$
即得命题。
:::

::: example
假设$A=\begin{bmatrix}
a_{11} & a_{12} & a_{13} & \cdots & a_{1n} \\
0 & a_{22} & a_{23} & \cdots & a_{2n} \\
0 & 0 & a_{33} & \cdots & a_{3n} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & a_{nn}
\end{bmatrix}$是上三角方阵，则

$$
\varphi(\lambda)=\begin{vmatrix}
\lambda -a_{11} & -a_{12} & -a_{13} & \cdots & -a_{1n} \\
0 & \lambda-a_{22} & -a_{23} & \cdots & -a_{2n} \\
0 & 0 & \lambda-a_{33} & \cdots & -a_{3n} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & \lambda-a_{nn}
\end{vmatrix}=\prod_{i=1}^n(\lambda-a_{ii})
$$
此时$A$的特征值即为所有对角元的值。
:::

::: definition
方阵$A= \begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{n1} & a_{n2} & \cdots & a_{nn}
\end{bmatrix}$的迹（trace）定义为
$$
\operatorname{Tr} A:=a_{11}+a_{22}+\cdots+a_{nn}
$$
即为$A$的所有对角元的和。
:::

迹的一个重要性质是如下关于乘法的对称性。

::: proposition
设$A$是$m\times n$矩阵，$B$是$n\times m$矩阵。则
$$
\operatorname{Tr} AB =\operatorname{Tr} BA
$$
:::

::: proof
留作练习。
:::

::: proposition
设$n$阶方阵$A$的特征多项式为
$\varphi(\lambda)=\lambda^n+\alpha_1 \lambda^{n-1}+\cdots +\alpha_{n-1}\lambda+\alpha_n$。则
$$
\alpha_1=-\operatorname{Tr} A
$$
:::

::: proof
$$
\varphi(\lambda)=\begin{vmatrix}
 \lambda-a_{11} & -a_{12} & \cdots & -a_{1n}\\
 -a_{21} & \lambda-a_{22} & \cdots & -a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 -a_{n1} & -a_{n2} & \cdots & \lambda-a_{nn}
\end{vmatrix}
$$
由行列式组合公式，$\lambda^{n-1}$项只能来源于$\prod\limits_{i=1}^n(\lambda-a_{ii})$的贡献，
由此易得$\alpha_1=-\sum\limits_{i=1}^na_{ii}=-\operatorname{Tr} A$。
:::

因此$A$的特征多项式可以表达为
$$
\varphi(\lambda)=\lambda^n-(\operatorname{Tr} A) \lambda^{n-1}+\cdots+ (-1)^n \det A
$$
实际上，特征多项式中其他的系数$\alpha_k$也可以通过$A$的$k$阶余子式来得到，我们这里不作讨论。

::: proposition
设$\lambda_1,\cdots,\lambda_n$是$A$的特征多项式$\varphi(\lambda)$的所有复数根（可以有重根），则
$$
\operatorname{Tr} A= \lambda_1+\lambda_2+\cdots +\lambda_n
$$
:::

::: proof
$
\varphi(\lambda)=(\lambda-\lambda_1)(\lambda-\lambda_2)\cdots(\lambda-\lambda_n)
$的$\lambda^{n-1}$项系数为
$
-\lambda_1-\lambda_2-\cdots-\lambda_n
$。对比公式$\varphi(\lambda)=\lambda^n-(\operatorname{Tr} A) \lambda^{n-1}+\cdots$即得命题。
:::

::: example
设$A=\begin{bmatrix} a& b\\ c & d \end{bmatrix}$ 是$2$阶方阵
$$
\operatorname{Tr} A= a+ d\qquad \det A=ad-bc
$$
因此$A$的特征多项式为
$$
\varphi(\lambda)=\lambda^2-(\operatorname{Tr} A)\lambda+\det A=\lambda^2-(a+d)\lambda+(ad-bc)
$$
这个公式也可以通过计算行列式直接验证。
:::

## Cayley–Hamilton定理*

::: theorem [Cayley–Hamilton]
设$n$阶方阵$A$的特征多项式为
$\varphi(\lambda)=\lambda^n+\alpha_1 \lambda^{n-1}+\cdots +\alpha_{n-1}\lambda+\alpha_n$。则矩阵
$
\varphi(A):=A^n+\alpha_1 A^{n-1}+\cdots +\alpha_{n-1}A+\alpha_n I_n
  $是零矩阵，即满足
$
  \varphi(A)=0
  $。
:::

::: proof
令$B=\lambda I_n-A$，则$\varphi(\lambda)=\det B$。
观察到$B$的每个余子式$B_{ij}$至多是$\lambda$的$(n-1)$次多项式。因此$B$的伴随矩阵$B^*$可以写成

$$
B^*=\lambda^{n-1} C_1+ \lambda^{n-2}C_2+\cdots+ C_n
$$
其中$C_i$是不含$\lambda$的$n$阶方阵。由伴随矩阵的性质
$$
B B^*=\det(B) I_n=\varphi(\lambda) I_n
$$
代入上述表达式，我们得到等式
$$
(\lambda I_n-A)(\lambda^{n-1} C_1+ \lambda^{n-2}C_2+\cdots+ C_n)=\varphi(\lambda) I_n
$$

比较两边的$\lambda$多项式的系数矩阵，我们得到
\[
\begin{aligned}
C_1&=I_n\\
C_2-AC_1&=\alpha_1 I_n\\
\vdots\\
C_n-AC_{n-1}&=\alpha_{n-1} I_n\\
-A C_n&= \alpha_n I_n
\end{aligned}
\]
把这组方程依次左乘以$A^n, A^{n-1},\cdots,A, I_n$相加，即得到$\varphi(A)=0$。
:::

::: definition
设$A$是$n$阶方阵。一个非零多项式$f(\lambda)$称为$A$的一个化零多项式，如果$f(A)=0$是零矩阵。
:::

Cayley–Hamilton定理表明，每个$n$阶方阵$A$都会满足一个多项式的代数关系：
它的特征多项式是一个化零多项式。
需要指出的是，特征多项式不一定是$A$的最小化零多项式：可能存在次数比$n$小的化零多项式。

例如对于
$
A=\begin{bmatrix}
  2 & 0 & 0 \\
  0 & 2 & 0\\
  0 & 0 & 3
\end{bmatrix}
$，其特征多项式为$\varphi(\lambda)=(\lambda-2)^2(\lambda-3)$。另一方面
$$
A-2I=\begin{bmatrix}
  0 & 0 & 0 \\
  0 & 0 & 0\\
  0 & 0 & 1
\end{bmatrix}
\qquad A-3I=\begin{bmatrix}
  -1 & 0 & 0 \\
  0 & -1 & 0\\
  0 & 0 & 0
\end{bmatrix}
$$
容易看出$(A-2I)(A-3I)=0$。
因此$f(\lambda)=(\lambda-2)(\lambda-3)$是$A$的一个化零多项式，
它的次数比特征多项式$\varphi(\lambda)$的次数低。

Cayley–Hamilton定理有很多重要的应用。我们这里举一个例子，它给出了一种矩阵逆的代数表达方法。
设$A$是$n$阶方阵，其特征多项式为
$$
\varphi(\lambda)=\lambda^n+\alpha_1 \lambda^{n-1}+\cdots +\alpha_{n-1}\lambda+\alpha_n
$$

假设$A$可逆，则$\alpha_n=(-1)^n\det A\neq 0$。由Cayley–Hamilton定理，我们有等式
$$
A^n+\alpha_1 A^{n-1}+\cdots +\alpha_{n-1}A+\alpha_n I_n=0
$$
把$\alpha_n I_n$移到右边，两边同除以$-\alpha_n$
$$
-\frac{1}{\alpha_n}(A^{n-1}+\alpha_1 A^{n-2}+\cdots +\alpha_{n-1} I_n)A=I_n
$$
由此得
$$
A^{-1}=-\frac{1}{\alpha_n}(A^{n-1}+\alpha_1 A^{n-2}+\cdots +\alpha_{n-1} I_n)
$$
特别地，$A^{-1}$可以通过$A$的一个多项式来表达。

::: example
设$A=\begin{bmatrix} 2 & -2 & 4\\ 2 & 3 & 2\\ -1 & 1 & -1\end{bmatrix}$。它的特征多项式为
$$
\varphi(\lambda)=\det(\lambda I_3-A)=\lambda^3-4\lambda^2+7 \lambda -10
$$
因此
$$
A^{-1}=\frac{1}{10}(A^2-4A+7 I_3)=\frac{1}{10}\begin{bmatrix} -5 & 2 & -16 \\ 0 & 2 & 4\\ 5 & 0 & 10 \end{bmatrix}
$$
:::
