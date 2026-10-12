---
title: 线性方程组
---

考虑$n$元的线性方程组（这里$x_1,\cdots,x_n$是未知变量）
$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n &= b_1 \\
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n &= b_2 \\
\qquad \vdots &\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n &= b_m
\end{cases}
$$
这是最基本的一类代数方程组，有广泛的应用。我们在本节讨论线性方程组的求解方法。

## 消元法与初等变换*

我们首先看一个具体例子。考虑以下线性方程组：
\[
\begin{aligned}
x + 2y + z &= 6 &&(1) \\
2x + 5y + 3z &= 15 &&(2) \\
x + 4y + 6z &= 21 &&(3)
\end{aligned}
\]
将$(1)$的$-2$倍加到$(2)$，$(1)$的$-1$倍加到$(3)$，得到等价的方程组
\[
\begin{aligned}
x + 2y + z &= 6 &&(1) \\
y + z &= 3 &&(2') \\
2y + 5z &= 15 &&(3')
\end{aligned}
\]
将 $(2')$ 的$-2$倍加到 $(3')$，得到
\[
\begin{aligned}
x + 2y + z &= 6 &&(1) \\
y + z &= 3 &&(2') \\
3z &= 9 &&(3'')
\end{aligned}
\]

由 $(3'')$ 得到$z = 3$。将 $z = 3$ 代入 $(2')$，得到 $y + 3 = 3$，故$y = 0$。
将 $y = 0$ 和 $z = 3$ 代入 $(1)$，得到 $x + 0 + 3 = 6$，故$x = 3$。方程组的解为
$$
\quad x=3, \quad y=0, \quad z=3.
$$

总结如上过程，消元法给出线性方程组的三种初等变换：

1. 交换两行：将方程组中的两个方程交换位置。

2. 将方程组中的一个方程乘以一个非零常数。

3. 将一个方程乘以一个数加到另一个方程。

这些初等变换不改变方程组的解，可用来简化方程，是求解线性方程组的基本方法。具体而言
\[
\begin{aligned}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n &= b_1 &&(r_1) \\
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n &= b_2 &&(r_2) \\
  &\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n &= b_m &&(r_m)
\end{aligned}
\]
三种初等变换可以表示为：

1. 交换第 $i$ 行和第 $j$ 行：$(r_i) \leftrightarrow (r_j)$

2. 第 $i$ 行乘以非零常数 $\lambda $：$(r_i) \rightarrow \lambda  (r_i)$

3. 第 $i$ 行的 $\lambda $ 倍加到第 $j$ 行：$(r_j) \rightarrow  (r_j) + \lambda  (r_i) $

::: example
\[
\begin{aligned}
x + 2y &= 4 \\
2x + 3y &= 7
\end{aligned}
\]
我们可以进行以下初等变换：将第一行的 $-2$ 倍加到第二行。得到等价的新的方程组：
\[
\begin{aligned}
x + 2y &= 4 \\
-y &= -1
\end{aligned}
\]
由此解出$y=1, x=2$。
:::

::: example [谷神星的发现和轨道预测]
1801年，意大利天文学家皮亚齐发现了小行星谷神星（Ceres）。
然而，在观测了40天后，谷神星运行到太阳背后，从人们的视野中消失了，要到年底才可能再次见到谷神星。
由于观测数据有限，天文学家们无法确定谷神星的轨道，从而无法预测它再次出现的位置。

高斯当时年仅24岁，利用开普勒定律和皮亚齐的观测数据，将谷神星的轨道计算转化和近似为一个线性方程组，
使用消元法求解该方程组，预测出了谷神星的轨道参数。
高斯的预测非常精确，谷神星在一年后被重新发现，位置与高斯的预测非常接近。
这一事件使得高斯声名鹊起，也大大推动了线性方程组和线性代数的理论和方法。
:::

## 线性方程组的矩阵形式*

线性方程组可以写成矩阵的形式

$$
A\vec{x}=\vec{b}\qquad \Longleftrightarrow \qquad
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n &= {b_1} \\
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n &= b_2 \\
\qquad \vdots &\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n &= b_m
\end{cases}
$$
这里
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

我们也可以把整个线性方程组的信息可以写成一个$m\times (n+1)$矩阵
$$
\overline{A}=\begin{bmatrix}A &\vec{b}\end{bmatrix}= \begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n} & b_1\\
 a_{21} & a_{22} & \cdots & a_{2n} & b_2\\
 \vdots & \vdots & \cdots & \vdots & \vdots \\
 a_{m1} & a_{m2} & \cdots & a_{mn} & b_m
\end{bmatrix}
$$
$A$称为系数矩阵，$\overline{A}$称为增广矩阵。

线性方程组的初等变换，等价于对$\overline{A}$作行变换。例如把第一个方程乘以$\lambda$加到第二个方程

\[
\begin{aligned}
&\begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n} & b_1\\
 a_{21} & a_{22} & \cdots & a_{2n} & b_2\\
 \vdots & \vdots & \cdots & \vdots & \vdots \\
 a_{m1} & a_{m2} & \cdots & a_{mn} & b_m
\end{bmatrix} \Longrightarrow
\begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n} & b_1\\
 a_{21}+\lambda a_{11} & a_{22}+\lambda a_{12} & \cdots & a_{2n}+\lambda a_{1n} & b_2+\lambda b_1\\
 \vdots & \vdots & \cdots & \vdots & \vdots \\
 a_{m1} & a_{m2} & \cdots & a_{mn} & b_m
\end{bmatrix}
\end{aligned}
\]

对应于线性方程组的初等变换，我们定义矩阵的三种初等行变换为

1. 交换两行：将矩阵的两行交换位置。

2. 将矩阵中的一行乘以一个非零常数。

3. 将矩阵的一行乘以一个数加到另一行。

从而利用消去法解线性方程组的过程，可以等价地用对增广矩阵作初等行变换来表示。

::: proposition {@prop:upper-triangular}
通过初等行变换可以把增广矩阵变为如下阶梯形

$$
\begin{bmatrix}
 &  & a_{1p_1}^\prime & \cdots & \cdots &\cdots &\cdots &\cdots  &\cdots & a_{1n}^\prime & b_1^\prime\\
 &  &  &  & a_{2p_2}^\prime & \cdots &\cdots &\cdots &\cdots & a_{2n}^\prime & b_2^\prime\\
 &  &  &  & &  &\cdots &\cdots  &\cdots & \vdots  & \vdots \\
 &  &  &  & &  & &a_{rp_r}^\prime  &\cdots & a_{rn}^\prime & b_r^\prime \\
  &  &  &  & &  & & & & & b_{r+1}^\prime\\
   &  &  &  & &  & & & & & \vdots\\
  &  &  &  & &  & & & & & b_{m}^\prime
\end{bmatrix}
$$
其中空白处的矩阵元都是$0$。
:::

证明方法和用消去法解方程的过程是一致的。

::: example
考虑如下的线性方程组，我们写成矩阵的形式
\[
\begin{aligned}
\begin{cases}
x + 2y + z = 6\\
2x + 4y + 5z = 15\\
x + 4y + 6z = 21
\end{cases}
\Longleftrightarrow \quad
\begin{bmatrix}
1 & 2 & 1 & 6\\
2 & 4 & 5 & 15\\
1 & 4 & 6 & 21
\end{bmatrix}
\end{aligned}
\]

我们可以通过如下的初等行变换变为阶梯形

\[
\begin{aligned}
&\begin{bmatrix}
1 & 2 & 1 & 6\\
2 & 4 & 5 & 15\\
1 & 4 & 6 & 21
\end{bmatrix}
\quad \substack{\text{第$1$行$\times(-2)$}\\ \Longrightarrow \\ \text{加到第$2$行}}
\begin{bmatrix}
1 & 2 & 1 & 6\\
0 & 0 & 3 & 3\\
1 & 4 & 6 & 21
\end{bmatrix} \quad
\substack{\text{第$1$行$\times(-1)$}\\ \Longrightarrow \\ \text{加到第$3$行}}  \quad
\begin{bmatrix}
1 & 2 & 1 & 6\\
0 & 0 & 3 & 3\\
0 & 2 & 5 & 15
\end{bmatrix}
\quad \substack{\text{交换}\\ \Longrightarrow \\ \text{第$2,3$行}}   \quad
\begin{bmatrix}
1 & 2 & 1 & 6\\
0 & 2 & 5 & 15\\
0 & 0 & 3 & 3
\end{bmatrix}
\end{aligned}
\]
:::

假如我们已经将一个线性方程组的增广矩阵化成了如下的阶梯形矩阵
$$
\begin{bmatrix}
  & & a_{1p_1}^\prime & \cdots & \cdots &\cdots &\cdots &\cdots  &\cdots & a_{1n}^\prime & b_1^\prime\\
  & &  &  & a_{2p_2}^\prime & \cdots &\cdots &\cdots &\cdots & a_{2n}^\prime & b_2^\prime\\
 &  &  &  & &  &\cdots &\cdots  &\cdots & \vdots  & \vdots \\
  & &  &  & &  & &a_{rp_r}^\prime  &\cdots & a_{rn}^\prime & b_r^\prime \\
  &  &  &  & &  & & & & & b_{r+1}^\prime\\
   &  &  &  & &  & & & & & \vdots\\
  &  &  &  & &  & & & & & b_{m}^\prime
\end{bmatrix}
$$
那么阶梯形矩阵最后几行对应的方程为
$$
\begin{cases}
0= b_{r+1}^\prime \\
\cdots \\
0= b_m^\prime
\end{cases}
$$
如果其中$b_{r+1}^\prime,\cdots,b_m^\prime$有非零元，则原方程无解。

::: example
考虑如下的线性方程组，将其写成增广矩阵的形式
\[
\begin{aligned}
\begin{cases}
x + y + z = 3\\
2x + 3y + 5z = 4\\
x + 2y + 4z = 2
\end{cases}
\Longleftrightarrow \quad
\begin{bmatrix}
1 & 1 & 1 & 3\\
2 & 3 & 5 & 4\\
1 & 2 & 4 & 2
\end{bmatrix}
\end{aligned}
\]
通过初等行变换

$$
\begin{bmatrix}
1 & 1 & 1 & 3\\
2 & 3 & 5 & 4\\
1 & 2 & 4 & 2
\end{bmatrix} \Rightarrow
\begin{bmatrix}
1 & 1 & 1 & 3\\
0 & 1 & 3 & -2\\
1 & 2 & 4 & 2
\end{bmatrix} \Rightarrow
\begin{bmatrix}
1 & 1 & 1 & 3\\
0 & 1 & 3 & -2\\
0 & 1 & 3 & -1
\end{bmatrix} \Rightarrow
\begin{bmatrix}
1 & 1 & 1 & 3\\
0 & 1 & 3 & -2\\
0 & 0 & 0 & 1
\end{bmatrix}
$$

因此原线性方程组无解。
:::

::: proposition
线性方程组有解的充要条件是增广矩阵通过初等行变换化成阶梯形矩阵后
$$
b^\prime_{r+1}=\cdots=b^\prime_m=0.
$$
:::

::: proof
我们上面已经说明了必要性。下面我们证明充分性。
假设$b^\prime_{r+1}=\cdots=b^\prime_m=0$，则原线性方程组等价于如下的阶梯形方程
$$
\begin{bmatrix}
 &  & a_{1p_1}^\prime & \cdots & \cdots &\cdots &\cdots &\cdots  &\cdots & a_{1n}^\prime & b_1^\prime\\
 &  &  &  & a_{2p_2}^\prime & \cdots &\cdots &\cdots &\cdots & a_{2n}^\prime & b_2^\prime\\
 &  &  &  & &  &\cdots &\cdots  &\cdots & \vdots  & \vdots \\
 &  &  &  & &  & &a_{rp_r}^\prime  &\cdots & a_{rn}^\prime & b_r^\prime \\
  &  &  &  & &  & & & & & \\
  \end{bmatrix}
$$
这里$a_{1p_1}^\prime, \cdots, a_{rp_r}^\prime$均不为$0$。从最后一个方程
$$
a_{rp_r}^\prime x_{p_r}+\cdots = b^\prime_r
$$
可以解出$x_{p_r}$，然后代入前面方程解出$x_{p_{r-1}}$。依次类推可以找到方程的解（解可能不唯一）。
:::

::: example
考虑如下的线性方程组，将其写成矩阵的形式
\[
\begin{aligned}
\begin{cases}
x + y + z = 3\\
2x + 3y + 5z = 4\\
x + 2y + 4z = 1
\end{cases}
\Longleftrightarrow \quad
\begin{bmatrix}
1 & 1 & 1 & 3\\
2 & 3 & 5 & 4\\
1 & 2 & 4 & 1
\end{bmatrix}
\end{aligned}
\]
做初等行变换
$$
\begin{bmatrix}
1 & 1 & 1 & 3\\
2 & 3 & 5 & 4\\
1 & 2 & 4 & 1
\end{bmatrix}\Rightarrow
\begin{bmatrix}
1 & 1 & 1 & 3\\
0 & 1 & 3 & -2\\
1 & 2 & 4 & 1
\end{bmatrix}\Rightarrow
\begin{bmatrix}
1 & 1 & 1 & 3\\
0 & 1 & 3 & -2\\
0 & 1 & 3 & -2
\end{bmatrix}\Rightarrow
\begin{bmatrix}
1 & 1 & 1 & 3\\
0 & 1 & 3 & -2\\
0 & 0 & 0 & 0
\end{bmatrix}
$$
最后这个增广矩阵对应于方程
$$
\begin{bmatrix}
1 & 1 & 1 & 3\\
0 & 1 & 3 & -2\\
0 & 0 & 0 & 0
\end{bmatrix}
\quad \Longleftrightarrow \quad
\begin{cases}
x + y + z = 3\\
\ \ \ \  y + 3z = -2
\end{cases}
$$
由此可以解出
$
\begin{cases}
x=2c+5\\
y= -2-3c \\
z=c
\end{cases}
$
这里$c$是任意常数。
:::

总结上述讨论可知：

1. 线性方程组可以通过初等变换化简。

2. 线性方程组可能没有解。

3. 线性方程组如果有解，解可能不唯一。

## 齐次线性方程组*

如下方程称为齐次线性方程组
$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n &= 0 \\
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n &= 0 \\
\qquad \vdots & \vdots \\
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n &= 0
\end{cases}
$$
即对应于$b_1=\cdots=b_m=0$的情况。矩阵表达为
$$
A \vec{x}=0.
$$
之前$b_i$不全为$0$的情况称为非齐次线性方程组。

注意到齐次线性方程组总是有解的：
$$
x_1=\cdots x_n=0
$$
是一个解，称为零解或者平凡解。一个值得关心的问题是，齐次线性方程组是否有非平凡解？

这个问题和线性方程组解的唯一性密切相关。设$\vec{x}_0,\vec{x}_1$是非齐次线性方程$
A\vec{x}=\vec{b}
$的解，即
$$
A\vec{x}_0=\vec{b}  \qquad A\vec{x}_1=\vec{b}
$$
两式相减我们得到$
A(\vec{x}_1-\vec{x}_0)=0
$，即 $\vec{x}_1-\vec{x}_0$是齐次线性方程组的解。

反之，如果$\vec{u}$是齐次线性方程组的解$A\vec{u}=0$，
$\vec{x}_0$是非齐次线性方程组的解 $A\vec{x}_0=\vec{b}$。则
$$
A(\vec{x}_0+\vec{u})=A\vec{x}_0+A\vec{u}=\vec{b}+0
=\vec{b}
$$
即$\vec{x}_0+\vec{u}$也是非齐次线性方程组的解。

因此非齐次线性方程组$A\vec{x}=\vec{b}$的一般解是
$$
\vec{x}=\vec{x}_0+\vec{u}
$$
这里$\vec{x}_0$是非齐次方程组的一个特解（$A\vec{x}_0=\vec{b}$），
$\vec{u}$是齐次方程组的一般解（$A\vec{u}=0$）。即
$$
\text{非齐次通解} = \text{非齐次特解} + \text{齐次通解}
$$
当然如果特解不存在，则非齐次方程组没有解。

::: corollary
如果齐次线性方程组只有零解，则非齐次线性方程组的解是唯一的（如果解存在）。
:::
