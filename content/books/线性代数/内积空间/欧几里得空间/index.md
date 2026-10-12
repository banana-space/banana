---
title: 欧几里得空间
---

## 实线性空间的内积*

::: definition
设 $V$ 是一个实线性空间。$V$ 上的一个 内积是一个映射
$$
\langle \cdot, \cdot \rangle: V \times V \to \mathbb{R}
$$
满足以下性质：

1. **正定性：** 对任意 $\vec{x} \in V$，$\langle \vec{x}, \vec{x} \rangle \geq 0$，
   且 $\langle \vec{x}, \vec{x} \rangle = 0$ 当且仅当 $\vec{x} = 0$

2. **对称性：** 对任意 $\vec{x}, \vec{y} \in V$，
   $\langle \vec{x}, \vec{y} \rangle = \langle \vec{y}, \vec{x} \rangle$

3. **线性性：** 对任意 $\vec{x}, \vec{y}, \vec{z} \in V$ 和 $a, b \in \mathbb{R}$
   \[
   \langle a \vec{x} + b \vec{y}, \vec{z} \rangle = a \langle \vec{x}, \vec{z} \rangle + b \langle \vec{y}, \vec{z} \rangle
   \]

:::

注意到线性性是对内积的第一个分量来陈述的。由对称性，内积对第二个分量也是线性的：
$$
\langle \vec{z}, a \vec{x} + b \vec{y}  \rangle = a \langle \vec{z}, \vec{x} \rangle + b \langle \vec{z}, \vec{y} \rangle
$$
因此我们称内积是双线性的。

::: definition
带内积的实线性空间称为实内积空间，或称为欧几里得空间。
:::

$n$维实内积空间通常也称为$n$维欧几里得空间。
实内积空间也可能是无穷维，此时如果对应的范数具备完备性，则称为希尔伯特空间。

::: example
$V=\mathbb{R} ^n$，我们定义两个向量的内积为
$$
\langle \vec{x},\vec{y} \rangle=\sum_{i=1}^n x_i y_i
$$
这里$x_i, y_i$是向量$\vec{x},\vec{y}$的分量。此时
$$
\sqrt{\langle \vec{x},\vec{x} \rangle}=\sqrt{\sum_{i=1}^n x_i^2}
$$
表示向量$\vec{x}$的欧氏长度。
容易验证，$(\mathbb{R} ^n, \langle \cdot,\cdot\rangle)$构成一个实内积空间，
称为$n$维标准欧几里得空间。
如果我们把$\mathbb{R} ^n$中的向量写成列向量的样子，则这个内积可以用矩阵乘法表示为
$$
\langle \vec{x},\vec{y} \rangle=\vec{x}^T \cdot\vec{y}=\begin{bmatrix}
x_1 & \cdots & x_n
\end{bmatrix}\begin{bmatrix}
y_1 \\ \vdots  \\ y_n
\end{bmatrix}
$$
这里$\vec{x}^T$是$\vec{x}$的转置。
:::

::: example
$V=\mathbb{R} ^n$，设$a_i>0$是正实数。我们定义两个向量的内积为
$$
\langle \vec{x},\vec{y} \rangle=\sum_{i=1}^n a_i x_i y_i
$$

对称性和线性性显然满足。由
$$
\langle \vec{x},\vec{x} \rangle=\sum_{i=1}^n a_i x_i^2
$$
可以很容易看出正定性。令$A$为对角方阵
$$
A=\begin{bmatrix} a_1 & 0 &\cdots & 0\\
0 & a_2 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots \\
0 & \cdots &  0 & a_n
\end{bmatrix}
$$
则这个内积也可以写成矩阵形式
$$
\langle \vec{x},\vec{y} \rangle=\vec{x}^T A\vec{y}=\begin{bmatrix}
x_1 & \cdots & x_n
\end{bmatrix}\begin{bmatrix} a_1 & 0 &\cdots & 0\\
0 & a_2 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots \\
0 & \cdots &  0 & a_n
\end{bmatrix}\begin{bmatrix}
y_1 \\ \vdots  \\ y_n
\end{bmatrix}
$$
:::

::: example
设$V$是由有限闭区间$[a,b]$上实连续函数构成的线性空间。
对任意两个函数$f(x),g(x)\in V$，我们定义它们的内积为
$$
\langle f,g \rangle:=\int_{a}^b f(x)g(x)dx
$$

对称性和线性性显然满足。由
$$
\langle f,f \rangle:=\int_{a}^b f(x)^2dx
$$
知
$$
\langle f,f \rangle\geq 0
$$
且$\langle f,f \rangle=0$当且仅当$f(x)=0$是零函数，即$V$中的零向量。
因此$\langle \cdot,\cdot \rangle$定义了函数空间$V$上的一个内积。这个内积空间是无穷维的。
:::

## Gram矩阵*

设$V$是$n$维实线性空间，
我们如何具体来刻画$V$上的一个内积$\langle \cdot,\cdot \rangle$？回顾对于一个线性映射$f: V\to V$，
我们具体描述$f$的方法是取$V$的一组基，根据$f$在基上的作用得到一个矩阵，则这个矩阵完全刻画了$f$本身。
我们可以用类似的想法来刻画一个内积。设
$$
\{\vec{\alpha}_1,\vec{\alpha}_2,\cdots, \vec{\alpha}_n\}
$$
是$V$的一组基。考虑这些基向量之间的内积
$$
\text{定义}\quad G_{ij}:= \langle \vec{\alpha}_i,\vec{\alpha}_j \rangle, \qquad i,j=1,\cdots, n
$$
由此我们得到一个$n$阶方阵$G=(G_{ij})$。

::: definition
设$(V, \langle \cdot,\cdot \rangle)$是$n$维欧几里得空间，
$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_n\}$为$V$的一组基。我们称$n$阶方阵

$$
G=\begin{bmatrix}
\langle \vec{\alpha}_1,\vec{\alpha}_1 \rangle & \langle \vec{\alpha}_1,\vec{\alpha}_2 \rangle &\cdots & \langle \vec{\alpha}_1,\vec{\alpha}_n \rangle\\
\langle \vec{\alpha}_2,\vec{\alpha}_1 \rangle & \langle \vec{\alpha}_2,\vec{\alpha}_2 \rangle &\cdots & \langle \vec{\alpha}_2,\vec{\alpha}_n \rangle\\
\cdots & \cdots & \cdots & \cdots\\
\langle \vec{\alpha}_n,\vec{\alpha}_1 \rangle & \langle \vec{\alpha}_n,\vec{\alpha}_2 \rangle &\cdots & \langle \vec{\alpha}_n,\vec{\alpha}_n \rangle\\
\end{bmatrix}
$$
为内积$\langle \cdot,\cdot \rangle$在基$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_n\}$下的Gram矩阵。
:::

我们下面说明内积的Gram矩阵完全刻画了内积本身，因此给出了内积的矩阵表达方法。

设$G=(G_{ij})$是内积$\langle \cdot,\cdot \rangle$在$V$的一组基
$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_n\}$下的Gram矩阵。
对$V$中任意两个向量$\vec{x}, \vec{y}$，它们通过这组基的线性组合记为
\[
\begin{aligned}
\vec{x}&=x_1 \vec{\alpha}_1+\cdots x_n \vec{\alpha}_n\\
\vec{y}&=y_1 \vec{\alpha}_1+\cdots y_n \vec{\alpha}_n
\end{aligned}
\]
我们计算内积$\langle \vec{x},\vec{y} \rangle$。利用内积的线性性
\[
\begin{aligned}
\langle \vec{x},\vec{y} \rangle=&\langle \sum_i x_i \vec{\alpha}_i,\vec{y} \rangle=\sum_i x_i \langle \vec{\alpha}_i,\vec{y} \rangle\\
=&\sum_i x_i \langle \vec{\alpha}_i,\sum_j y_j \vec{\alpha}_j \rangle\\
=&\sum_{i,j}x_i y_j \langle \vec{\alpha}_i,\vec{\alpha}_j \rangle\\
=&\sum_{i,j}x_i y_j G_{ij}
\end{aligned}
\]

写成矩阵的形式，即为
$$
\langle \vec{x},\vec{y} \rangle=
\begin{bmatrix}
x_1 & \cdots & x_n
\end{bmatrix}G \begin{bmatrix}
y_1 \\ \vdots \\ y_n
\end{bmatrix}
$$
这说明如果我们知道了基向量之间的内积（即Gram矩阵），则上述公式给出了任意两个向量之间的内积。
因此内积完全由其Gram矩阵确定。

我们下面讨论Gram矩阵的性质。首先，由内积的对称性
$$
G_{ij}=\langle \vec{\alpha}_i,\vec{\alpha}_j \rangle=\langle \vec{\alpha}_j,\vec{\alpha}_i \rangle=G_{ji}
$$
写成矩阵的形式
$$
G= G^T
$$
即$G$是一个实对称矩阵。

其次，由内积的正定性，对任意向量$\vec{x}=\sum\limits_i x_i \vec{\alpha}_i$
$$
\langle \vec{x},\vec{x} \rangle=\sum_{i,j}G_{ij}x_ix_j\geq 0
$$
且等号成立当且仅当$x_1=\cdots=x_n=0$。

::: definition
一个 $n$阶实对称方阵 $A$ 称为正定矩阵，如果对任意非零列向量 $\vec{x}\in \mathbb{R} ^n$，都有
$$
x^T A x > 0 \quad \text{即}
\quad \sum\limits_{i,j=1}^nA_{ij}x_ix_j>0
$$
:::

因此Gram矩阵$G$是一个正定矩阵。
反之，给定一个$n$阶正定矩阵$A$，对$V$中任意两个向量$\vec{x}=\sum\limits_i x_i\vec{\alpha}_i,
\vec{y}=\sum\limits_i y_i \vec{\alpha}_i$，我们定义
$$
\langle \vec{x},\vec{y}\rangle_A:= \sum_{i,j=1}^n A_{ij}x_i y_j
$$
容易验证$\langle \cdot,\cdot\rangle_A$定义了$V$上的一个内积。因此在给定$V$的一组基的情况下，Gram矩阵

$$
\text{内积}\quad \stackrel{\text{Gram}}{\Longleftrightarrow} \quad \text{正定矩阵}
$$
给出了内积和正定矩阵之间的一一对应。

## 长度与夹角*

::: definition
设 $(V,\langle \cdot, \cdot \rangle)$ 是一个欧几里得空间。$V$中向量$\vec{x}$ 的长度（或范数）定义为
\[
\|\vec{x}\| = \sqrt{\langle x, x \rangle}
\]
:::

::: proposition [Cauchy–Schwarz不等式] {@prop:Cauchy-Schwarz}
设 $(V,\langle \cdot, \cdot \rangle)$ 是一个欧几里得空间。则对任意$\vec{x},\vec{y}\in V$
$$
\langle \vec{x}, \vec{y} \rangle^2\leq \langle \vec{x}, \vec{x} \rangle \langle \vec{y}, \vec{y} \rangle \qquad \text{即}\qquad |\langle \vec{x}, \vec{y} \rangle|\leq \|\vec{x}\|\|\vec{y}\|
$$
等号成立当且仅当$\vec{x},\vec{y}$线性相关。
:::

::: proof
不妨设$\vec{x},\vec{y}$均是非零向量。记
$$
\begin{cases}
a=\langle \vec{x}, \vec{x} \rangle>0 \\
b= \langle \vec{x}, \vec{y} \rangle \\
c=\langle \vec{y}, \vec{y} \rangle>0
\end{cases}
$$
需证明$b^2\leq ac$。
任取$\lambda\in \mathbb{R} $，考虑向量$\beta=\lambda \vec{x}+\vec{y}$与自己的内积
\[
\begin{aligned}
\langle \vec{\beta},\vec{\beta}\rangle=&
\langle \lambda \vec{x}+\vec{y},\lambda \vec{x}+\vec{y}\rangle\\
=&\lambda^2  \langle \vec{x},\vec{x}\rangle+\lambda \langle \vec{x},\vec{y}\rangle+\lambda \langle \vec{y},\vec{x}\rangle+\langle \vec{y},\vec{y}\rangle\\
=& a\lambda^2+ 2b \lambda +c\\
=& a(\lambda+ b/a)^2+\frac{ac-b^2}{a}
\end{aligned}
\]

由内积正定性，$ \langle \vec{\beta},\vec{\beta}\rangle \geq 0$对任意$\lambda\in \mathbb{R} $成立。
因此$b^2\leq ac$，即得命题不等式。
等号成立当且仅当存在$\lambda$使得$\vec{\beta}=0$，即$\vec{x},\vec{y}$线性相关。
:::

设$\vec{x},\vec{y}$是$V$中两个非零向量，由Cauchy–Schwarz不等式
$$
-1\leq \frac{\langle \vec{x}, \vec{y}\rangle}{\| \vec{x}\| \|\vec{y}\|}\leq 1
$$
我们定义$\vec{x},\vec{y}$之间的夹角$\theta\in [0,\pi]$为
$$
\cos \theta=\frac{\langle \vec{x}, \vec{y}\rangle}{\| \vec{x}\| \|\vec{y}\|}
$$

```tikz
\begin{tikzpicture}[x=0.75pt,y=0.75pt,yscale=-1,xscale=1,scale=0.8]
\draw    (95,172) -- (238,170.03) ;
\draw [shift={(240,170)}, rotate = 179.21] [color={rgb, 255:red, 0; green, 0; blue, 0 }  ][line width=0.75]    (10.93,-3.29) .. controls (6.95,-1.4) and (3.31,-0.3) .. (0,0) .. controls (3.31,0.3) and (6.95,1.4) .. (10.93,3.29)   ;
\draw    (95,172) -- (177.56,92.39) ;
\draw [shift={(179,91)}, rotate = 136.04] [color={rgb, 255:red, 0; green, 0; blue, 0 }  ][line width=0.75]    (10.93,-3.29) .. controls (6.95,-1.4) and (3.31,-0.3) .. (0,0) .. controls (3.31,0.3) and (6.95,1.4) .. (10.93,3.29)   ;
\draw  [draw opacity=0] (126.66,144.03) .. controls (132.59,145.15) and (137.65,149.24) .. (139.56,155.17) .. controls (141.29,160.57) and (140.01,166.24) .. (136.63,170.51) -- (122.84,160.54) -- cycle ; \draw   (126.66,144.03) .. controls (132.59,145.15) and (137.65,149.24) .. (139.56,155.17) .. controls (141.29,160.57) and (140.01,166.24) .. (136.63,170.51) ;
\draw (223,177) node [anchor=north west][inner sep=0.75pt]    {$\vec{y}$};
\draw (144,70) node [anchor=north west][inner sep=0.75pt]    {$\vec{x}$};
\draw (143,140) node [anchor=north west][inner sep=0.75pt]    {$\theta $};
\draw (238,113) node [anchor=north west][inner sep=0.75pt]    {$\langle \vec{x},\vec{y}\rangle  =\|\vec{x} \| \|\vec{y} \|\cos \theta $};
\end{tikzpicture}
```

::: definition
如果向量$\vec{x}$和$\vec{y}$的夹角是$\theta=\pi/2$，即
$$
\langle \vec{x},\vec{y}\rangle=0
$$
我们称$\vec{x}$和$\vec{y}$是正交的，记为$\vec{x}\perp \vec{y}$。
:::

::: proposition [三角不等式] {@prop:triangle-inequality}
对内积空间中任意两个向量$\vec{x},\vec{y}$
$$
\| \vec{x}+\vec{y}\|\leq \|\vec{x}\|+\|\vec{y}\|
$$
:::

::: proof
\[
\begin{aligned}
\| \vec{x}+\vec{y}\|^2=&\langle \vec{x}+\vec{y},\vec{x}+\vec{y}\rangle\\
=& \langle \vec{x},\vec{x}\rangle+ 2\langle \vec{x},\vec{y} \rangle+ \langle \vec{y},\vec{y}\rangle \\
\leq & \|\vec{x}\|^2+2\|\vec{x}\| \|\vec{y}\|+ \|\vec{y}\|^2\\
= & (\|\vec{x}\|+\|\vec{y}\|)^2
\end{aligned}
\]
:::

::: proposition [平行四边形法则] {@prop:parallel-law}
对内积空间中任意两个向量$\vec{x},\vec{y}$
$$
\|\vec{x}+\vec{y}\|^2+\|\vec{x}-\vec{y}\|^2=2\|\vec{x}\|^2+2\|\vec{y}\|^2
$$
:::

::: proof
\[
\begin{aligned}
&\|\vec{x}+\vec{y}\|^2+\|\vec{x}-\vec{y}\|^2\\
=&\langle \vec{x}+\vec{y},\vec{x}+\vec{y}\rangle+\langle \vec{x}-\vec{y},\vec{x}-\vec{y}\rangle\\
=&\langle \vec{x},\vec{x}\rangle+ 2\langle \vec{x},\vec{y} \rangle+ \langle \vec{y},\vec{y}\rangle +\langle \vec{x},\vec{x}\rangle- 2\langle \vec{x},\vec{y} \rangle+ \langle \vec{y},\vec{y}\rangle \\
=&2\|\vec{x}\|^2+2\|\vec{y}\|^2
\end{aligned}
\]
:::

```tikz
\begin{tikzpicture}[scale=2]
  \draw[->, thick, blue] (0,0) -- (1,1.5) node[midway, above left] {$\vec{x}$};
  \draw[->, thick, red] (0,0) -- (2,0.5) node[midway, below right] {$\vec{y}$};
  \draw[->, thick, green] (0,0) -- (3,2) node[midway, above right] {$\vec{x} + \vec{y}$};
  \draw[->, thick, blue, dashed] (2,0.5) -- (3,2);
  \draw[->, thick, red, dashed] (1,1.5) -- (3,2);
  \draw[->, thick, purple] (2,0.5) -- (1,1.5) node[midway, below] {$\vec{x} - \vec{y}$};
  \draw[thin] (0,0) -- (1,1.5) -- (3,2) -- (2,0.5) -- cycle;
   \node[below, align=center] at (1.5,-0.5)
  {
   $ \|\vec{x}+\vec{y}\|^2+\|\vec{x}-\vec{y}\|^2=2\|\vec{x}\|^2+2\|\vec{y}\|^2$
  };
\end{tikzpicture}
```
