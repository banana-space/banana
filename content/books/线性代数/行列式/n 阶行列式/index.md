---
title: $n$ 阶行列式
---

## 行列式的几何定义*

考虑一个$n\times n$矩阵（也称为$n$阶方阵）
$$
A=\begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{n1} & a_{n2} & \cdots & a_{nn}
\end{bmatrix}
$$
我们定义一个数称为它的行列式$\det A$，也记为
$$
\det A=\begin{vmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix}
$$

我们之前讨论了$n=2,3$的情况及其几何含义

- 当$n=2$时
  $$
  \begin{vmatrix}
   a_{11} & a_{12} \\
   a_{21} & a_{22}
  \end{vmatrix}=a_{11}a_{22}-a_{12}a_{21}
  $$

- 当$n=3$时
  $$
  \begin{vmatrix}
   a_{11} & a_{12} & a_{13}\\
   a_{21} & a_{22} & a_{23}\\
   a_{31} & a_{32} & a_{33}
  \end{vmatrix}=a_{11}\begin{vmatrix} a_{22} & a_{23}\\ a_{32} & a_{33}\end{vmatrix}-a_{12}\begin{vmatrix} a_{21} & a_{23}\\ a_{31} & a_{33}\end{vmatrix}+a_{13}\begin{vmatrix} a_{21} & a_{22}\\ a_{31} & a_{32}\end{vmatrix}
  $$

我们下面讨论一般$n$的情况。记$\mathbb{R} ^n$的标准基为
$$
\vec{e}_1=(1,0,\cdots, 0)\quad \vec{e}_2=(0,1,\cdots, 0)\quad \cdots \quad \vec{e}_n=(0,\cdots, 0,1)
$$
我们记$A$的行向量为
\[
\begin{aligned}
\vec{\alpha}_1&=(a_{11},a_{12},\cdots,a_{1n})=a_{11}\vec{e}_1+a_{12}\vec{e}_2+\cdots+a_{1n}\vec{e}_n\\
\vec{\alpha}_2&=(a_{21},a_{22},\cdots,a_{2n})=a_{21}\vec{e}_1+a_{22}\vec{e}_2+\cdots+a_{2n}\vec{e}_n\\
&\vdots\\
\vec{\alpha}_n&=(a_{n1},a_{n2},\cdots,a_{nn})=a_{n1}\vec{e}_1+a_{n2}\vec{e}_2+\cdots+a_{nn}\vec{e}_n
\end{aligned}
\]

我们用外积的代数运算（反对称和线性）计算
\[
\begin{aligned}
&\vec{\alpha}_1\wedge \vec{\alpha}_2\wedge \cdots \wedge \vec{\alpha}_n\\
=& (a_{11}\vec{e}_1+a_{12}\vec{e}_2+\cdots+a_{1n}\vec{e}_n)\wedge \vec{\alpha}_2\wedge \cdots \wedge \vec{\alpha}_n\\
=& a_{11}\vec{e}_1\wedge \vec{\alpha}_2\wedge \cdots \wedge \vec{\alpha}_n+\cdots+a_{1n}\vec{e}_n\wedge \vec{\alpha}_2\wedge \cdots \wedge \vec{\alpha}_n\\
=& \cdots\\
=& D\  \vec{e}_1\wedge \vec{e}_2\wedge\cdots \wedge \vec{e}_n
\end{aligned}
\]
最后总是可以写成$\vec{e}_1\wedge \vec{e}_2\wedge\cdots \wedge \vec{e}_n$的一个倍数，这个系数$
D$就定义为$A$的行列式
$$
\det A:=D
$$

由这个构造可以看出，当$n=2,3$的时候，行列式与面积元和体积元的定义是一致的。
我们可以把$\vec{\alpha}_1\wedge \vec{\alpha}_2\wedge \cdots \wedge \vec{\alpha}_n$理解为
$\mathbb{R} ^n$的$n$个向量$\vec{\alpha}_1,\cdots,\vec{\alpha}_n$张成的$n$维平行体的体积元，
$\vec{e}_1\wedge \vec{e}_2\wedge\cdots \wedge \vec{e}_n$是单位体积元。
因此行列式的几何含义是代表$\mathbb{R} ^n$中平行体的体积（带符号）。

## 行列式的组合定义* {@sec:det-permutation}

我们可以通过外积的代数运算给出行列式的一个具体的组合表达式。
由外积的反对称性，特别有$\vec{e}_i\wedge \vec{e}_i=0$，我们可以看出把
\[
\begin{aligned}
\vec{\alpha}_1\wedge \vec{\alpha}_2\wedge \cdots \wedge \vec{\alpha}_n
\end{aligned}
\]
展开成$\vec{e}_i$的过程中，如要得到非零元素，只能在$\vec{\alpha}_1$中取一个$\vec{e}_{\sigma(1)}$，
在$\vec{\alpha}_2$中取一个$\vec{e}_{\sigma(2)}$，$\cdots$，
在$\vec{\alpha}_n$中取一个$\vec{e}_{\sigma(n)}$，
并且$\sigma(1),\sigma(2),\cdots, \sigma(n)$各不相同。
这样一个取法$\sigma$对应于集合$\{1,2,\cdots,n\}$到自身的一个一一映射。

::: definition
集合$\{1,2,\cdots,n\}$到自身的一个一一映射称为一个$n$元置换。
所有$n$元置换的集合记为$S_n$（其包含$n!$个元素）。
:::

设$\sigma$是一个$n$元置换。我们可以通过不断作两两对换把
$$
\vec{e}_{\sigma(1)}\wedge \vec{e}_{\sigma(2)}\wedge \cdots \wedge \vec{e}_{\sigma(n)}
$$
调整为标准形式$\vec{e}_1\wedge \vec{e}_2\wedge\cdots \wedge \vec{e}_n$。
在外积运算规则中每对换一次变号一次，因此
$$
\vec{e}_{\sigma(1)}\wedge \vec{e}_{\sigma(2)}\wedge \cdots \wedge \vec{e}_{\sigma(n)}=(\operatorname{sign} \sigma) \vec{e}_1\wedge \vec{e}_2\wedge\cdots \wedge \vec{e}_n
$$
这里$\operatorname{sign} \sigma=\pm 1$称为置换$\sigma$的符号。
如果需要经过偶数次对换，那么$\operatorname{sign} \sigma=1$，这样的$\sigma$称为偶置换；
如果需要经过奇数次对换，那么$\operatorname{sign} \sigma=-1$，这样的$\sigma$称为奇置换。
可以证明，虽然通过对换来调整为标准形式的方式不唯一，但是需要的对换次数的奇偶性是不变的。

::: example
例如考虑置换$\sigma: \{1,2,3,4,5\}\to \{3,5,4,1,2\}$。我们可以通过3次对换把
$
\vec{e}_{3}\wedge \vec{e}_5\wedge \vec{e}_{4}\wedge \vec{e}_1
\wedge \vec{e}_2
$
调整为$\vec{e}_{1}\wedge \vec{e}_2\wedge \vec{e}_{3}\wedge \vec{e}_4
\wedge \vec{e}_5$：
\[
\begin{aligned}
\vec{e}_{3}\wedge \vec{e}_5\wedge \vec{e}_{4}\wedge \vec{e}_1
\wedge \vec{e}_2=-\vec{e}_{3}\wedge \vec{e}_5\wedge \vec{e}_{1}\wedge \vec{e}_4
\wedge \vec{e}_2=\vec{e}_{3}\wedge \vec{e}_2\wedge \vec{e}_{1}\wedge \vec{e}_4
\wedge \vec{e}_5=-\vec{e}_{1}\wedge \vec{e}_2\wedge \vec{e}_{3}\wedge \vec{e}_4
\wedge \vec{e}_5
\end{aligned}
\]
因此$\sigma$是奇置换，$\operatorname{sign} \sigma=-1$。这个外积计算过程也可以用下图来表示

```tikz
\begin{tikzpicture}[scale=1.5]
\node at (0, 1) {3};
\node at (1, 1) {5};
\node at (2, 1) {4};
\node at (3, 1) {1};
\node at (4, 1) {2};
\node at (0, 0) {3};
\node at (1, 0) {5};
\node at (2, 0) {1};
\node at (3, 0) {4};
\node at (4, 0) {2};
\node at (0, -1) {3};
\node at (1, -1) {2};
\node at (2, -1) {1};
\node at (3, -1) {4};
\node at (4, -1) {5};
\node at (0, -2) {1};
\node at (1, -2) {2};
\node at (2, -2) {3};
\node at (3, -2) {4};
\node at (4, -2) {5};
\draw[->] (2, 1-0.2) -- (3, 0+0.2);
\draw[->] (3, 1-0.2) -- (2, 0+0.2);
\draw[->] (1, 0-0.2) -- (4, -1+0.2);
\draw[->] (4, 0-0.2) -- (1, -1+0.2);
\draw[->] (0, -1-0.2) -- (2, -2+0.2);
\draw[->] (2, -1-0.2) -- (0, -2+0.2);
\end{tikzpicture}
```

:::

::: theorem {@thm:determinant-permutation}
设$A$是$n$阶方阵，矩阵元为$a_{ij}$，则
$$
\det A= \sum_{\sigma\in S_n} \operatorname{sign} \sigma \prod\limits_{i=1}^na_{i\sigma(i)}
$$
这里$S_n$是所有$n$元置换的集合。
:::

::: proof
$A$的行向量为
\[
\begin{aligned}
\vec{\alpha}_1&=a_{11}\vec{e}_1+a_{12}\vec{e}_2+\cdots+a_{1n}\vec{e}_n\\
\vec{\alpha}_2&=a_{21}\vec{e}_1+a_{22}\vec{e}_2+\cdots+a_{2n}\vec{e}_n\\
&\vdots\\
\vec{\alpha}_n&=a_{n1}\vec{e}_1+a_{n2}\vec{e}_2+\cdots+a_{nn}\vec{e}_n
\end{aligned}
\]
我们有
\[
\begin{aligned}
&\vec{\alpha}_1\wedge \vec{\alpha}_2\wedge \cdots \wedge \vec{\alpha}_n\\
=&\sum_{\sigma\in S_n}a_{1\sigma(1)}a_{2\sigma(2)}\cdots a_{n{\sigma(n)}}\vec{e}_{\sigma(1)}\wedge \vec{e}_{\sigma(2)}\wedge \cdots \wedge \vec{e}_{\sigma(n)}\\
=&\sum_{\sigma\in S_n} \operatorname{sign} \sigma \prod\limits_{i=1}^na_{i\sigma(i)} \vec{e}_1\wedge \vec{e}_2\wedge \cdots \wedge \vec{e}_n
\end{aligned}
\]
比较行列式的外积定义，
我们得到
$\det A=\sum\limits_{\sigma\in S_n} \operatorname{sign} \sigma \prod\limits_{i=1}^na_{i\sigma(i)}$。
:::

::: remark*
在很多教材中，通常从 @thm:determinant-permutation 中的组合公式出发来定义行列式。
:::

::: example
考虑如下行列式
$$
\begin{vmatrix}
 a_{1,1} & a_{1,2} & \cdots & a_{1,n-1} & a_{1,n}\\
 a_{2,1} & a_{2,2} & \cdots & a_{2,n-1} & 0\\
 \cdots & \cdots & \cdots & \cdots & \cdots \\
 a_{n-1,1} & a_{n-1,2}&0 & \cdots & 0\\
 a_{n,1} & 0 & 0 & \cdots &0
\end{vmatrix}
$$

我们按照组合公式来计算。先看第$n$行，只能取$a_{n,1}$。取完后看第$n-1$行，这时只能取$a_{n-1,2}$。
依次从下往上类推，我们发现只有$a_{1,n}a_{2,n-1}\cdots a_{n,1}$这一项有贡献，其对应于置换
$$
\sigma: \{1,2,\cdots,n\}\to \{n,n-1,\cdots, 1\}\qquad \operatorname{sign} \sigma= (-1)^{n(n-1)/2}
$$
因此
$$
\begin{vmatrix}
 a_{1,1} & a_{1,2} & \cdots & a_{1,n-1} & a_{1,n}\\
 a_{2,1} & a_{2,2} & \cdots & a_{2,n-1} & 0\\
 \cdots & \cdots & \cdots & \cdots & \cdots \\
 a_{n-1,1} & a_{n-1,2}&0 & \cdots & 0\\
 a_{n,1} & 0 & 0 & \cdots &0
\end{vmatrix}=(-1)^{n(n-1)/2}\; a_{1,n} \; a_{2,n-1}\cdots a_{n,1}
$$
:::

## 行列式的基本性质*

::: proposition
把矩阵的某一行乘以一个系数，则它的行列式的值也乘以同一个系数
$$
\begin{vmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 \vdots & \vdots & \vdots & \vdots\\
 \lambda a_{i1} & \lambda a_{i2} & \cdots & \lambda a_{in}\\
   \vdots & \vdots & \vdots & \vdots\\
 a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix}=\lambda \begin{vmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 \vdots & \vdots & \vdots & \vdots\\
  a_{i1} &  a_{i2} & \cdots & a_{in}\\
   \vdots & \vdots & \vdots & \vdots\\
 a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix}
$$
:::

::: proof
由行列式的组合定义显然。从几何角度，这个性质对应于外积的线性性
$$
\vec{\alpha}_1\wedge\cdots \wedge (\lambda \vec{\alpha}_i)\wedge\cdots \wedge \vec{\alpha}_n=\lambda \vec{\alpha}_1\wedge\cdots \wedge  \vec{\alpha}_i\wedge\cdots \wedge \vec{\alpha}_n
$$
:::

::: proposition
交换矩阵的任意两行，行列式差一个负号
$$
\begin{vmatrix}
 a_{11} & a_{12} & \cdots & \cdots  & a_{1n}\\
 \vdots & \vdots & \vdots & \vdots & \vdots\\
  a_{i1} &  a_{i2} & \cdots  & \cdots &  a_{in}\\
   \vdots & \vdots & \vdots & \vdots & \vdots\\
a_{j1} &  a_{j2} & \cdots & \cdots &  a_{jn} \\
  \vdots & \vdots & \vdots & \vdots & \vdots\\
 a_{n1} & a_{n2} & \cdots & \cdots & a_{nn}
\end{vmatrix}=- \begin{vmatrix}
 a_{11} & a_{12} & \cdots & \cdots  & a_{1n}\\
 \vdots & \vdots & \vdots & \vdots & \vdots\\
  a_{j1} &  a_{j2} &  \cdots &\cdots &  a_{jn}\\
   \vdots & \vdots & \vdots & \vdots & \vdots\\
 a_{i1} &  a_{i2} & \cdots & \cdots &  a_{in} \\
  \vdots & \vdots & \vdots & \vdots & \vdots\\
 a_{n1} & a_{n2} & \cdots & \cdots & a_{nn}
\end{vmatrix}
$$
:::

::: proof
这个性质对应于外积的反对称性。
:::

::: proposition
如果矩阵有两行一样，则行列式为$0$。
:::

::: proof
假设第一行和第二行一样，交换这两行
$$
\begin{vmatrix}
 a_{1} & a_{2} & \cdots & a_{n}\\
 a_{1} & a_{2} & \cdots & a_{n}\\
 \vdots & \vdots & \vdots & \vdots
\end{vmatrix}=-\begin{vmatrix}
 a_{1} & a_{2} & \cdots & a_{n}\\
 a_{1} & a_{2} & \cdots & a_{n}\\
 \vdots & \vdots & \vdots & \vdots
\end{vmatrix}
$$
由此可得
$$
 \begin{vmatrix}
 a_{1} & a_{2} & \cdots & a_{n}\\
 a_{1} & a_{2} & \cdots & a_{n}\\
 \vdots & \vdots & \vdots & \vdots
\end{vmatrix}=0
$$
:::

::: proposition
如果某一行是另一行的倍数，则行列式为$0$。
:::

::: proof
\[
\begin{vmatrix}
\vdots & \vdots & \vdots & \vdots\\
 a_1 & a_{2} & \cdots & a_{n}\\
 \vdots & \vdots & \vdots & \vdots\\
 \lambda a_{1} & \lambda a_{2} & \cdots & \lambda a_{n}\\
 \vdots & \vdots & \vdots & \vdots
\end{vmatrix}
=\lambda \begin{vmatrix}
\vdots & \vdots & \vdots & \vdots\\
 a_1 & a_{2} & \cdots & a_{n}\\
 \vdots & \vdots & \vdots & \vdots\\
 a_{1} &  a_{2} & \cdots & a_{n}\\
 \vdots & \vdots & \vdots & \vdots
\end{vmatrix}=0
\]
:::

::: proposition
行列式对于任何一行具有如下加法性质
$$
\begin{vmatrix}
\vdots & \vdots & \vdots\\
a_1+b_1 & \cdots & a_{n}+b_n\\
\vdots &  \vdots & \vdots\\
\end{vmatrix}=\begin{vmatrix}
\vdots  & \vdots & \vdots\\
a_1  & \cdots & a_{n}\\
\vdots  & \vdots & \vdots\\
\end{vmatrix}+\begin{vmatrix}
\vdots &  \vdots & \vdots\\
b_1 & \cdots & b_n\\
\vdots &  \vdots & \vdots\\
\end{vmatrix}
$$
:::

::: proof
这个对应于外积的线性性
\[
\cdots \wedge (\vec{\alpha}+\vec{\beta})\wedge \cdots =
\cdots \wedge \vec{\alpha}\wedge \cdots  +\cdots \wedge \vec{\beta}\wedge \cdots
\]
:::

::: proposition
把某一行乘以一个数加到另一行，行列式值不变。
:::

::: proof
\[
\begin{aligned}
&\qquad \begin{vmatrix}
\vdots & \vdots & \vdots & \vdots\\
 a_1 & a_{2} & \cdots & a_{n}\\
 \vdots & \vdots & \vdots & \vdots\\
 b_{1}+\lambda a_1 &  b_{2}+\lambda a_2 & \cdots & b_{n}+\lambda a_n\\
 \vdots & \vdots & \vdots & \vdots
\end{vmatrix}
\\
=&
\begin{vmatrix}
\vdots & \vdots & \vdots & \vdots\\
 a_1 & a_{2} & \cdots & a_{n}\\
 \vdots & \vdots & \vdots & \vdots\\
 b_{1}&  b_{2} & \cdots & b_{n}\\
 \vdots & \vdots & \vdots & \vdots
\end{vmatrix}+\begin{vmatrix}
\vdots & \vdots & \vdots & \vdots\\
 a_1 & a_{2} & \cdots & a_{n}\\
 \vdots & \vdots & \vdots & \vdots\\
 \lambda a_1 &  \lambda a_2 & \cdots & \lambda a_n\\
 \vdots & \vdots & \vdots & \vdots
\end{vmatrix}=\begin{vmatrix}
\vdots & \vdots & \vdots & \vdots\\
 a_1 & a_{2} & \cdots & a_{n}\\
 \vdots & \vdots & \vdots & \vdots\\
 b_{1}&  b_{2} & \cdots & b_{n}\\
 \vdots & \vdots & \vdots & \vdots
\end{vmatrix}
\end{aligned}
\]
:::

::: proposition
对角方阵的行列式是对角元的乘积
$$
\begin{vmatrix}
a_{11} & 0 & 0 & \cdots & 0 \\
0 & a_{22} & 0 & \cdots & 0 \\
0 & 0 & a_{33} & \cdots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & a_{nn}
\end{vmatrix}=a_{11} a_{22} \cdots a_{nn}
$$
:::

::: proof
由行列式的组合定义显然。从几何角度，
\[
a_{11}\vec{e}_1\wedge a_{22}\vec{e}_2 \wedge \cdots \wedge a_{nn}\vec{e}_n= (a_{11} a_{22} \cdots a_{nn}) \vec{e}_1\wedge\cdots\wedge \vec{e}_n
\]
:::

::: proposition
上三角方阵的行列式是对角元的乘积
$$
\begin{vmatrix}
a_{11} & a_{12} & a_{13} & \cdots & a_{1n} \\
0 & a_{22} & a_{23} & \cdots & a_{2n} \\
0 & 0 & a_{33} & \cdots & a_{3n} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & a_{nn}
\end{vmatrix}=a_{11} a_{22} \cdots a_{nn}
$$
:::

::: proof
由行列式的组合公式容易看出，只有$a_{11}a_{22}\cdots a_{nn}$有贡献，对应的恒等置换是偶置换。
:::

::: proposition
\[
\begin{aligned}
\begin{vmatrix}
a_{11} & a_{12} & a_{13} & \cdots & a_{1n} \\
0 & a_{22} & a_{23} & \cdots & a_{2n} \\
0 & a_{32} & a_{33} & \cdots & a_{3n} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & a_{n2} & a_{n3} & \cdots & a_{nn}
\end{vmatrix}=a_{11}\begin{vmatrix}
 a_{22} & a_{23} & \cdots & a_{2n} \\
 a_{32} & a_{33} & \cdots & a_{3n} \\
 \vdots & \vdots & \ddots & \vdots \\
 a_{n2} & a_{n3} & \cdots & a_{nn}
\end{vmatrix}
\end{aligned}
\]
:::

::: proof
由行列式的组合公式，如果第一行不取$a_{11}$，则后面一定有某个第$k$行（$k>1$）需要取$a_{k1}=0$，
因此贡献为$0$。故第一行只能取$a_{11}$。由此可以证明命题。
:::

## 初等变换计算行列式*

上述关于行列式的性质给出了计算行列式的一般方法。回顾矩阵的三种初等行变换：

1. 交换两行：将矩阵的两行交换位置

2. 将矩阵中的一行乘以一个非零常数

3. 将矩阵的一行乘以一个数加到另一行

对于$n$阶方阵，对应于上述三种初等行变换

1. 行列式变号

2. 行列式乘以同一个非零常数

3. 行列式保持不变

我们可以用初等行变换把矩阵变成梯形。对于$n$阶方阵，即变成上三角矩阵。
而上三角矩阵的行列式为对角元相乘。
因此我们通过初等变换把$n$阶方阵约化为上三角矩阵的过程，同时给出如何计算$n$阶行列式。

::: example
计算以下$3$ 阶行列式
$$
\begin{vmatrix}
1 & 2 & 3 \\
0 & -1 & 4 \\
2 & 1 & -2
\end{vmatrix}
$$

将第一行乘以$-2$加到第三行：
$$
\begin{vmatrix}
1 & 2 & 3 \\
0 & -1 & 4 \\
2 & 1 & -2
\end{vmatrix} = \begin{vmatrix}
1 & 2 & 3 \\
0 & -1 & 4 \\
0 & -3 & -8
\end{vmatrix}
$$
将第二行乘以$-3$加到第三行：
$$
\begin{vmatrix}
1 & 2 & 3 \\
0 & -1 & 4 \\
0 & -3 & -8
\end{vmatrix} = \begin{vmatrix}
1 & 2 & 3 \\
0 & -1 & 4 \\
0 & 0 & -20
\end{vmatrix}=1\cdot (-1) \cdot (-20)=20
$$
即原行列式为$20$
:::

::: example
计算行列式
$$
\begin{vmatrix}
2 & 1 & -1 & 1 \\
1 & -1 & 2 & 0 \\
0 & 1 & -1 & 1 \\
1 & 0 & 0 & -1
\end{vmatrix}
$$

将第一行和第二行交换：
$$
\begin{vmatrix}
2 & 1 & -1 & 1 \\
1 & -1 & 2 & 0 \\
0 & 1 & -1 & 1 \\
1 & 0 & 0 & -1
\end{vmatrix} = -\begin{vmatrix}
1 & -1 & 2 & 0 \\
2 & 1 & -1 & 1 \\
0 & 1 & -1 & 1 \\
1 & 0 & 0 & -1
\end{vmatrix}
$$
将第一行乘以$-2$加到第二行，将第一行乘以$-1$加到第四行：
$$
-\begin{vmatrix}
1 & -1 & 2 & 0 \\
2 & 1 & -1 & 1 \\
0 & 1 & -1 & 1 \\
1 & 0 & 0 & -1
\end{vmatrix} = -\begin{vmatrix}
1 & -1 & 2 & 0 \\
0 & 3 & -5 & 1 \\
0 & 1 & -1 & 1 \\
0 & 1 & -2 & -1
\end{vmatrix}
$$
将第二行和第三行交换：
$$
-\begin{vmatrix}
1 & -1 & 2 & 0 \\
0 & 3 & -5 & 1 \\
0 & 1 & -1 & 1 \\
0 & 1 & -2 & -1
\end{vmatrix} = \begin{vmatrix}
1 & -1 & 2 & 0 \\
0 & 1 & -1 & 1 \\
0 & 3 & -5 & 1 \\
0 & 1 & -2 & -1
\end{vmatrix}
$$
将第二行乘以$-3$加到第三行，将第二行乘以$-1$加到第四行：
$$
\begin{vmatrix}
1 & -1 & 2 & 0 \\
0 & 1 & -1 & 1 \\
0 & 3 & -5 & 1 \\
0 & 1 & -2 & -1
\end{vmatrix}= \begin{vmatrix}
1 & -1 & 2 & 0 \\
0 & 1 & -1 & 1 \\
0 & 0 & -2 & -2 \\
0 & 0 & -1 & -2
\end{vmatrix}=-2\begin{vmatrix}
1 & -1 & 2 & 0 \\
0 & 1 & -1 & 1 \\
0 & 0 & 1 & 1 \\
0 & 0 & -1 & -2
\end{vmatrix}
$$
这里最后一个等式，我们把第三行提出系数$-2$。将第三行加到第四行
\[
\begin{aligned}
-2\begin{vmatrix}
1 & -1 & 2 & 0 \\
0 & 1 & -1 & 1 \\
0 & 0 & 1 & 1 \\
0 & 0 & -1 & -2
\end{vmatrix}=&-2\begin{vmatrix}
1 & -1 & 2 & 0 \\
0 & 1 & -1 & 1 \\
0 & 0 & 1 & 1 \\
0 & 0 & 0 & -1
\end{vmatrix}=-2\cdot (-1)=2
\end{aligned}
\]
由此我们得出原方阵的行列式
$$
\begin{vmatrix}
2 & 1 & -1 & 1 \\
1 & -1 & 2 & 0 \\
0 & 1 & -1 & 1 \\
1 & 0 & 0 & -1
\end{vmatrix}=2
$$
:::

::: example
我们给出上一个例子的另一个计算方法
\[
\begin{aligned}
\begin{vmatrix}
2 & 1 & -1 & 1 \\
1 & -1 & 2 & 0 \\
0 & 1 & -1 & 1 \\
1 & 0 & 0 & -1
\end{vmatrix}=&-\begin{vmatrix}
1 & -1 & 2 & 0 \\
2 & 1 & -1 & 1 \\
0 & 1 & -1 & 1 \\
1 & 0 & 0 & -1
\end{vmatrix}=-\begin{vmatrix}
1 & -1 & 2 & 0 \\
0 & 3 & -5 & 1 \\
0 & 1 & -1 & 1 \\
0 & 1 & -2 & -1
\end{vmatrix}\\=&-1\cdot \begin{vmatrix}
3 & -5 & 1 \\
1 & -1 & 1 \\
1 & -2 & -1
\end{vmatrix}
= -3\begin{vmatrix}
-1 & 1 \\
-2 & -1
\end{vmatrix}+(-5)\begin{vmatrix}
1 & 1 \\
1 &  -1
\end{vmatrix}-1\cdot \begin{vmatrix}
1 & -1 \\
1 & -2
\end{vmatrix}\\
=&-3\cdot 3+(-5)\cdot (-2)-1\cdot (-1)=2
\end{aligned}
\]
:::
