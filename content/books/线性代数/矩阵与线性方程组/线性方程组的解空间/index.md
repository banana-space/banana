---
title: 线性方程组的解空间
---

我们这一节将系统讨论线性方程组的解空间的结构。

## 齐次线性方程组的解空间*

考虑齐次线性方程组
$$
A\vec{x}=0
$$
这里$A$是$m\times n$矩阵，$\vec{x}\in \mathbb{R} ^n$，即
$$
A=\begin{bmatrix}
 {a_{11}} & {a_{12}} & \cdots & {a_{1n}}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \vdots & \vdots & \cdots & \vdots\\
 a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
\quad
\vec{x}=\begin{bmatrix}
{x_1} \\ {x_2}\\ \vdots \\ {x_n}
\end{bmatrix}
$$

该齐次线性方程组的所有解构成$\mathbb{R} ^n$的子集，记为
$$
K:=\{\vec{x}\in \mathbb{R} ^n| A\vec{x}=0\}.
$$

::: proposition {@prop:ker-linear}
$K$是$\mathbb{R} ^n$的线性子空间。
:::

::: proof
假设$\vec{x}_1, \vec{x}_2\in K, \lambda\in \mathbb{R} $，则
$$
A(\vec{x}_1+\vec{x}_2)=A\vec{x}_1+A\vec{x}_2=0\quad A(\lambda \vec{x}_1)=\lambda A\vec{x}_1=0
$$
即$\vec{x}_1+\vec{x}_2\in K, \lambda \vec{x}_1\in K$。故$K$保持加法和数乘。
:::

设$\vec{u}_1,\cdots, \vec{u}_s$是$K$的一组基，$s=\dim K$。
则$K$中的元素$\vec{x}$可以唯一地写成线性组合
$$
\vec{x}=c_1 \vec{u}_1+\cdots+ c_s \vec{u}_s,     \quad c_i\in \mathbb{R}
$$
这构成了齐次线性方程组
$
A\vec{x}=0
$的通解，这里$c_i$是任意常数。

::: example
考虑以下齐次线性方程组：
\[
\begin{aligned}
x_1 + 2x_2 - x_3 + x_4 - x_5 &= 0 \\
2x_1 + 4x_2 - 2x_3 + 3x_4 - x_5 &= 0 \\
-x_1 - 2x_2 + x_3 - 2x_4 + 2x_5 &= 0
\end{aligned}
\]
对应的增广矩阵的形式为
$$
\begin{bmatrix}
1 & 2 & -1 & 1 & -1 & 0 \\
2 & 4 & -2 & 3 & -1 & 0 \\
-1 & -2 & 1 & -2 & 2 & 0
\end{bmatrix}
$$
:::

我们用初等变换来解方程
\[
\begin{aligned}
\begin{bmatrix}
1 & 2 & -1 & 1 & -1 & 0 \\
2 & 4 & -2 & 3 & -1 & 0 \\
-1 & -2 & 1 & -2 & 2 & 0
\end{bmatrix}
\Longrightarrow
\begin{bmatrix}
1 & 2 & -1 & 1 & -1 & 0 \\
0 & 0 & 0 & 1 & 1 & 0 \\
0 & 0 & 0 & -1 & 1 & 0
\end{bmatrix}
\Longrightarrow
\begin{bmatrix}
1 & 2 & -1 & 1 & -1 & 0 \\
0 & 0 & 0 & 1 & 1 & 0 \\
0 & 0 & 0 & 0 & 2 & 0
\end{bmatrix}
\end{aligned}
\]
得到等价的方程组
\[
\begin{aligned}
x_1 + 2x_2 - x_3 + x_4 - x_5 &= 0 \\
x_4 + x_5 &= 0 \\
2x_5 &= 0
\end{aligned}
\]

由此可以解得
$$
x_5=0, \quad x_4=0, \quad x_1=x_3-2x_2
$$
其中$x_2$和$x_3$可以取任意数。设$x_2=c_1, x_3=c_2$，则通解可以写成
$$
\begin{bmatrix}
x_1 \\
x_2 \\
x_3 \\
x_4 \\
x_5
\end{bmatrix}
=
\begin{bmatrix}
c_2-2c_1 \\
c_1 \\
c_2 \\
0 \\
0
\end{bmatrix}
=
c_1
\begin{bmatrix}
-2 \\
1 \\
0 \\
0 \\
0
\end{bmatrix}
+
c_2
\begin{bmatrix}
\ 1\ \\
\ 0\ \\
\ 1\ \\
\ 0\ \\
\ 0\
\end{bmatrix}
\quad c_1,c_2\in \mathbb{R}
$$

从而该齐次线性方程组的解空间是$2$维的，一组基为 $\vec{u}_1=\begin{bmatrix}
-2 \\
1 \\
0 \\
0 \\
0
\end{bmatrix}, \vec{u}_2=\begin{bmatrix}
\ 1\ \\
\ 0\ \\
\ 1\ \\
\ 0\ \\
\ 0\
\end{bmatrix}$。

## 矩阵的秩与解空间维数*

### 矩阵的行秩*

我们把一个$m\times n$矩阵$A$写成
$$
A=\begin{bmatrix}
 {a_{11}} & {a_{12}} & \cdots & {a_{1n}}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \vdots & \vdots & \cdots & \vdots\\
 a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
=\begin{bmatrix}
\vec{v}_1 \\ \vec{v}_2\\ \vdots \\ \vec{v}_m
\end{bmatrix}
$$
这里$\vec{v}_i$是$\mathbb{R} ^n$中的行向量
$$
\vec{v}_i=(a_{i1}\ a_{i2}\ \cdots a_{in})\in \mathbb{R} ^n
$$

::: definition
矩阵$A$的行秩定义为$A$的行向量张成的线性空间的维数，即
$$
A \text{的行秩}= \dim \operatorname{Span}\{\vec{v}_1,\cdots,\vec{v}_m\}
$$
:::

::: proposition
对矩阵作初等行变换得到的行向量与原行向量是等价的。特别的，初等行变换不改变矩阵的行秩。
:::

为了说明这个命题，我们回顾矩阵的三种初等行变换

1. 交换两行：将矩阵的两行交换位置。

2. 将矩阵中的一行乘以一个非零常数。

3. 将矩阵的一行乘以一个数加到另一行。

例如交换两行，比如第1行和第2行，容易看出线性等价
$$
\{\vec{v}_1,\vec{v}_2, \cdots,\vec{v}_m\} \Longleftrightarrow \{\vec{v}_2, \vec{v}_1, \cdots,\vec{v}_m\}
$$
例如将第2行乘以一个非零常数$\lambda$，我们有线性等价
$$
\{\vec{v}_1,\vec{v}_2, \cdots,\vec{v}_m\} \Longleftrightarrow \{\vec{v}_1, \lambda \vec{v}_2, \cdots,\vec{v}_m\}
$$
例如将矩阵的第1行乘以一个数加到第2行，容易证明如下的线性等价
$$
\{\vec{v}_1,\vec{v}_2, \cdots,\vec{v}_m\} \Longleftrightarrow \{\vec{v}_1, \vec{v}_2+\lambda \vec{v}_1, \cdots,\vec{v}_m\}
$$
因此矩阵的行秩在初等行变换下是不变的。

由 @prop:upper-triangular，我们总是可以通过初等行变换将$A$变为阶梯形
$$
A^\prime=\begin{bmatrix}
 &  & a_{1p_1}^\prime & \cdots & \cdots &\cdots &\cdots &\cdots  &\cdots & a_{1n}^\prime \\
 &  &  &  & a_{2p_2}^\prime & \cdots &\cdots &\cdots &\cdots & a_{2n}^\prime \\
 &  &  &  & &  &\cdots &\cdots  &\cdots & \vdots   \\
 &  &  &  & &  & &a_{rp_r}^\prime  &\cdots & a_{rn}^\prime  \\
  &  &  &  & &  & & & &  \\
  \end{bmatrix}
  =\begin{bmatrix}
   \vec{v}^\prime_1\\ \vec{v}^\prime_2\\ \vdots \\ \vec{v}^\prime_r \\ 0
  \end{bmatrix}
$$
这里$a_{1p_1}^\prime, \cdots, a_{rp_r}^\prime$均不为$0$。
观察到行向量$\vec{v}^\prime_1, \cdots, \vec{v}^\prime_r$是线性无关的。实际上，如果有
$$
\lambda_1 \vec{v}^\prime_1+\lambda_2\vec{v}^\prime_2+\cdots+\lambda_r \vec{v}^\prime_r=0
$$
则比较第$p_1$列系数，我们得到$\lambda_1 a^\prime_{1p_1}=0\Rightarrow \lambda_1=0$。
然后可以依此得到$\lambda_2=\cdots=\lambda_r=0$。

因此$A^\prime$的行秩是$r$。由此我们证明了
$$
\text{$A$的行秩=$A^\prime$的行秩=$r$}
$$
这给出了用初等行变换计算行秩的方法。

另一方面，矩阵$A^\prime$对应的齐次线性方程组为
\[
\begin{aligned}
a_{1p_1}^\prime x_{p_1} + \cdots + \cdots + \cdots+ a_{1p_n}^\prime x_{n} &= 0 \\
\vdots & \\
a_{1p_r}^\prime x_{p_r} + \cdots+ a_{1p_n}^\prime x_{n} &= 0
\end{aligned}
\]
这里$p_1<p_2<\cdots<p_r$。
因此$x_{p_1},\cdots, x_{p_r}$可以通过其他变量表达出来，而其他变量可以取任意值。
总共有$n-r$个自由变量，因此解空间的维数是$n-r$。

总结如上，对于$m\times n$矩阵$A$，通过初等行变换变成阶梯形矩阵$A^\prime$，可以看出
$$
\text{$A$的行秩=$r$，且$\{\vec{x}| A\vec{x}=0\}$解空间的维数=$n-r$。}
$$

::: proposition {@prop:soliution-homogeneous}
矩阵$A$对应的齐次线性方程组解空间的维数为
$$
\text{$A$的列数（即未知变量数）}-\text{$A$的行秩。}
$$
:::

### 矩阵的列秩*

我们把一个$m\times n$矩阵$A$写成
$$
A=\begin{bmatrix}
 {a_{11}} & {a_{12}} & \cdots & {a_{1n}}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \vdots & \vdots & \cdots & \vdots\\
 a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
=\begin{bmatrix}
\vec{u}_1 & \vec{u}_2 & \cdots & \vec{u}_n
\end{bmatrix}
$$
这里$\vec{u}_i$是$\mathbb{R} ^m$中的列向量 $
\vec{u}_i=\begin{bmatrix}a_{1i}\\ a_{2i}\\ \vdots \\ a_{mi}
\end{bmatrix}\in \mathbb{R} ^m
$。

::: definition
矩阵$A$的列秩定义为$A$的列向量张成的线性空间的维数，即
$$
A \text{的列秩}= \dim \operatorname{Span}\{\vec{u}_1,\cdots,\vec{u}_n\}
$$
:::

::: proposition {@prop:invariance-column-rank}
对矩阵作初等行变换亦不改变矩阵的列秩。
:::

需要注意的是，初等行变换不改变行向量张成的空间，但是会改变列向量张成的空间（但是维数不变）。
这个命题成立是因为初等行变换不会改变列向量的线性相关性。具体而言，考虑
$$
A=\begin{bmatrix}
\vec{u}_1 & \vec{u}_2 & \cdots & \vec{u}_n
\end{bmatrix}
\stackrel{\text{初等行变换}} {\Longrightarrow}A^\prime=\begin{bmatrix}
\vec{u}_1^\prime & \vec{u}_2^\prime & \cdots & \vec{u}_n^\prime
\end{bmatrix}
$$
由于线性方程组在行变换下是等价的，
我们知道对任意的向量子集$\{\vec{u}_{i_1}, \vec{u}_{i_2}, \cdots, \vec{u}_{i_s}\}$，
矩阵$\begin{bmatrix}
\vec{u}_{i_1} & \vec{u}_{i_2} & \cdots & \vec{u}_{i_s}
\end{bmatrix}$对应的齐次线性方程组
$$
\begin{bmatrix}
\vec{u}_{i_1} & \vec{u}_{i_2} & \cdots & \vec{u}_{i_s}
\end{bmatrix}\begin{bmatrix}
\lambda_1 \\ \vdots \\ \lambda_s
\end{bmatrix}=0
$$
和矩阵$\begin{bmatrix}
\vec{u}^\prime_{i_1} & \vec{u}^\prime_{i_2} & \cdots & \vec{u}^\prime_{i_s}
\end{bmatrix}$对应的齐次线性方程组
$$
\begin{bmatrix}
\vec{u}^\prime_{i_1} & \vec{u}^\prime_{i_2} & \cdots & \vec{u}^\prime_{i_s}
\end{bmatrix}\begin{bmatrix}
\lambda_1 \\ \vdots \\ \lambda_s
\end{bmatrix}=0
$$
是等价的方程，即
$$
\lambda_{1}\vec{u}_{i_1}+\cdots \lambda_{s}\vec{u}_{i_s}=0 \quad \text{当且仅当}\quad \lambda_{1}\vec{u}^\prime_{i_1}+\cdots \lambda_{s}\vec{u}^\prime_{i_s}=0
$$
由此可以证明：
如果列向量组$\{\vec{u}_{k_1}, \vec{u}_{k_2}, \cdots, \vec{u}_{k_r}\}$是$A$的列向量的极大线性无关组，
则$\{\vec{u}^\prime_{k_1}, \vec{u}^\prime_{k_2}, \cdots, \vec{u}^\prime_{k_r}\}$是$A^\prime$
的列向量的极大线性无关组。因此$A$和$A^\prime$的列秩相等。证明细节留作练习。

我们通过初等行变换将$A$变为阶梯型

$$
A^\prime=\begin{bmatrix}
 &  & a_{1p_1}^\prime & \cdots & \cdots &\cdots &\cdots &\cdots  &\cdots & a_{1n}^\prime \\
 &  &  &  & a_{2p_2}^\prime & \cdots &\cdots &\cdots &\cdots & a_{2n}^\prime \\
 &  &  &  & &  &\cdots &\cdots  &\cdots & \vdots   \\
 &  &  &  & &  & &a_{rp_r}^\prime  &\cdots & a_{rn}^\prime  \\
  &  &  &  & &  & & & &  \\
  \end{bmatrix}
$$
这里$a_{1p_1}^\prime, \cdots, a_{rp_r}^\prime$均不为$0$。很容易看出列向量
$$
\vec{u}^\prime_{p_1}=\begin{bmatrix}
a_{1p_1}^\prime\\ 0\\ \vdots\\ 0 \\ \vdots\\ 0
\end{bmatrix}
\quad
\vec{u}^\prime_{p_2}=\begin{bmatrix}
a_{1p_2}^\prime\\ a_{2p_2}^\prime\\ \vdots\\ 0 \\ \vdots\\ 0
\end{bmatrix}\quad
\cdots
\quad \vec{u}^\prime_{p_r}=\begin{bmatrix}
a_{1p_r}^\prime\\ a_{2p_r}^\prime\\ \vdots\\ a_{rp_r}^\prime \\ \vdots\\ 0
\end{bmatrix}
$$
构成$A^\prime$列向量的极大线性无关组，因此$A^\prime$的列秩是$r$。

因此通过初等行变换将$A$变成阶梯型，我们证明了如下结论
$$
\text{行秩}=r=\text{列秩}
$$

::: proposition
矩阵的行秩等于矩阵的列秩。
:::

因此我们把这个行秩/列秩称为矩阵的秩，记为
$$
\operatorname{rank}{A}.
$$

我们把上述关于齐次线性方程组的解总结如下：

::: theorem [齐次线性方程组解的结构定理] {@thm:homo-sol}
设$A$是$m\times n$矩阵，$\operatorname{rank} A=r$。

- 如果$r=n$，则$A\vec{x}=0$只有零解

- 如果$r<n$，则$A\vec{x}=0$具有非零解，且它的通解具有$n-r$个独立参数

:::

## 非齐次线性方程组的解空间*

下面我们考虑非齐次线性方程组
$$
A\vec{x}=\vec{b}
$$
的解空间。这里

$$
A=\begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \vdots & \vdots & \cdots & \vdots\\
 a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
\quad
\vec{x}=\begin{bmatrix}
x_1 \\ x_2\\ \vdots \\ x_n
\end{bmatrix}
\quad
\vec{b}=\begin{bmatrix}
b_1 \\ b_2\\ \vdots \\ b_m
\end{bmatrix}
$$

由于
$$
\text{非齐次通解=非齐次特解+齐次通解}
$$
由 @prop:soliution-homogeneous，
我们已经知道了齐次方程组的通解结构（解空间的维数即自由参数的个数为$n-\operatorname{rank}{A}$），
因此我们只需要讨论能否找到非齐次线性方程组的一个特解，即解的存在性问题。

我们把矩阵$A$写成列向量的样子
$$
A=\begin{bmatrix}
\vec{u}_1 & \vec{u}_2 & \cdots & \vec{u}_n
\end{bmatrix}
$$
则线性方程组可以写成
$$
x_1 \vec{u}_1+\cdots+x_n \vec{u}_n=\vec{b}
$$

如果线性方程组有解，即存在$x_1,\cdots,x_n$使得
$$
x_1 \vec{u}_1+\cdots+x_n \vec{u}_n=\vec{b}
$$
即$\vec{b}$可以写成$\{\vec{u}_1,\cdots,\vec{u}_n\}$的线性组合。则
$$
\{\vec{u}_1,\cdots,\vec{u}_n\} \stackrel{\text{等价}}{\Longleftrightarrow} \{\vec{u}_1,\cdots,\vec{u}_n, \vec{b}\}
$$

反之，如果
$$
\{\vec{u}_1,\cdots,\vec{u}_n\} \stackrel{\text{等价}}{\Longleftrightarrow} \{\vec{u}_1,\cdots,\vec{u}_n, \vec{b}\}
$$
则$\vec{b}$可以通过$\{\vec{u}_1,\cdots,\vec{u}_n\}$线性表达，即方程有解。

因此线性方程组有解当且仅当
$$
\{\vec{u}_1,\cdots,\vec{u}_n\} \stackrel{\text{等价}}{\Longleftrightarrow} \{\vec{u}_1,\cdots,\vec{u}_n, \vec{b}\}
$$
即这两组向量张成的线性空间的维数是一样的。由此我们证明了如下结论

::: proposition
非齐次线性方程组
$
A\vec{x}=\vec{b}
$有解当且仅当$A$的列秩和增广矩阵$\overline{A}=[A\ \vec{b}]$的列秩相等，即
$$
\operatorname{rank}{A}=\operatorname{rank}{\overline{A}}
$$
:::

我们把上述关于非齐次线性方程组的解总结如下：

::: theorem [非齐次线性方程组解的结构定理] {@thm:nonhomo-linear-sol}
设$A$是$m\times n$矩阵，$\operatorname{rank} A=r$。考虑非齐次线性方程组
$
A\vec{x}=\vec{b}
$，设$\overline{A}$是增广矩阵。

- $A\vec{x}=\vec{b}$有解当且仅当$\operatorname{rank} \overline{A}=r$

- 假设$\operatorname{rank} \overline{A}=r$

  - 如果$r=n$，则$A\vec{x}=\vec{b}$有唯一解

  - 如果$r<n$，则$A\vec{x}=\vec{b}$的解不唯一，且它的通解具有$n-r$个独立参数

:::

::: example
考虑如下线性方程组
$$
\begin{cases}
x + y + z = 3\\
2x + 3y + 5z = 4\\
x + 2y + 4z = 1
\end{cases}
$$
这组方程在之前的例子中计算过，其通解为$
\begin{cases}
x=2c+5\\
y= -2-3c \\
z=c
\end{cases}
$
这里$c$是任意常数。把其写作
$$
\text{通解为}\quad \begin{bmatrix}
x \\ y \\ z
\end{bmatrix}=\begin{bmatrix}
5 \\ -2 \\ 0
\end{bmatrix}+ c \begin{bmatrix}
2 \\ -3 \\ 1
\end{bmatrix}
$$
这里$\begin{bmatrix}
5 \\ -2 \\ 0
\end{bmatrix}$是线性方程组的一个特解，$c \begin{bmatrix}
2 \\ -3 \\ 1
\end{bmatrix}$是对应齐次方程组的通解。
:::

## 秩-零化度定理*

我们讨论线性方程组解的结构定理的几何解释。

::: definition
设
$$
f: \mathbb{R} ^n\to \mathbb{R} ^m
$$
是一个线性映射。映射$f$的像是$\mathbb{R} ^m$中的子集记为$\operatorname{im}(f)$。
定义$f$的核为$\mathbb{R} ^n$中如下子集
$$
\ker(f):=\{\vec{x}\in \mathbb{R} ^n|\ f(\vec{x})=0\}
$$
:::

设线性映射$f:\mathbb{R} ^n\to \mathbb{R} ^m$对应的矩阵表达为
$$
f(\vec{x})=A\vec{x} \qquad \vec{x}\in \mathbb{R} ^n
$$
这里$A$是$m\times n$矩阵，记为
$$
A=\begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
$$

$f$的核通过矩阵$A$等价表达为
$$
\ker(f):=\{\vec{x}\in \mathbb{R} ^n|\ A\vec{x}=0\}
$$
因此核的概念即刻画了齐次线性方程组的解
$$
\ker(f)=\{\text{齐次线性方程组$A\vec{x}=0$的解}\}
$$
由 @prop:ker-linear 知，$\ker(f)\subset \mathbb{R} ^n$是线性子空间。

$f$的像也可以通过矩阵$A$来刻画。把$A$写成列向量的样子
$$
A=\begin{bmatrix}
\vec{\alpha}_1 & \vec{\alpha}_2 & \cdots & \vec{\alpha}_n
\end{bmatrix} \qquad \text{这里}\quad \vec{\alpha}_j=\begin{bmatrix}
a_{1j}\\
a_{2j}\\
\vdots\\
a_{mj}
\end{bmatrix}\in \mathbb{R} ^m
$$
则$\vec{y}\in \operatorname{im}(f)$当且仅当存在$\vec{x}\in \mathbb{R} ^n$使得$\vec{y}=A\vec{x}$。
写成$A$的列向量的样子
$$
\vec{y}=x_1 \vec{\alpha}_1+x_2\vec{\alpha}_2+\cdots+x_n \vec{\alpha}_n
$$
即等价于$\vec{y}$可以通过$\{\vec{\alpha}_1,\vec{\alpha}_2,\cdots,\vec{\alpha}_n\}$线性表达。因此
$$
\operatorname{im}(f)=\operatorname{Span}\{\vec{\alpha}_1,\vec{\alpha}_2,\cdots,\vec{\alpha}_n\}
$$
特别的，$\operatorname{im}(f)\subset \mathbb{R} ^m$也是线性子空间。

::: theorem [秩-零化度定理] {@thm:rank-null}
设$f:\mathbb{R} ^n\to \mathbb{R} ^m$是一个线性映射。则
$$
\dim \operatorname{im}(f)+\dim \ker(f)=n
$$
:::

::: proof
由矩阵的秩的定义，我们知道
$$
\dim \operatorname{im}(f)=\dim \operatorname{Span}\{\vec{\alpha}_1,\vec{\alpha}_2,\cdots,\vec{\alpha}_n\}=\text{$A$的列秩}=\operatorname{rank} A
$$
由 @thm:homo-sol，
$$
\dim \ker(f)=n-\operatorname{rank} A=n-\dim \operatorname{im}(f)
$$
:::

秩-零化度定理的几何是非常直观的。
我们可以把映射$f$看作把$\mathbb{R} ^n$“压缩”到它的像$\operatorname{im}(f)$，
其中被“压缩”的部分是它的核$\ker(f)$。
则$\mathbb{R} ^n$的维数是像的维数加上被压缩的维数，即秩-零化度定理。

秩-零化度定理也可以表述在抽象的线性空间里。

::: theorem [秩-零化度定理] {@thm:rank-null-general}
设$V,W$是有限维线性空间，$f:V \to W$是一个线性映射。则
$$
\dim \operatorname{im}(f)+\dim \ker(f)=\dim V
$$
:::

这里像$\operatorname{im}(f)\subset W$与核$\ker(f)\subset V$的定义与上述类似。
通过选取一组基，可以把 @thm:rank-null-general 转化为 @thm:rank-null 的情形，具体细节留作练习。
