---
title: 正交方阵
---

## 正交变换与正交方阵*

::: definition
设 $V$ 是一个欧几里得空间。
线性变换 $T: V \to V$ 称为正交变换，如果对于任意向量 $\vec{x} \in V$，都有
$$
\|T(\vec{x})\| = \|\vec{x}\|
$$
即正交变换保持向量的范数（长度）不变。
:::

::: example
$\mathbb{R} ^3$中的转动保持长度，是一个正交变换

```tikz
\begin{tikzpicture}[scale=2]
  \draw[->, gray] (0,0,0) -- (1.5,0,0) node[right] {};
  \draw[->, gray] (0,0,0) -- (0,1.5,0) node[above] {};
  \draw[->, gray] (0,0,0) -- (0,0,2.5) node[below left] {};
  \shade[ball color=blue!10, opacity=0.5] (0,0,0) circle (1cm);
  \coordinate (v) at (1,0.5,0.5);
  \draw[->, thick, blue] (0,0,0) -- (v) node[midway, above right] {$\vec{u}$};
  \draw[dashed] (0,0,0) -- (0,1,0);
  \coordinate (v') at (0.707,0.5,-0.707);
  \draw[->, thick, red] (0,0,0) -- (v') node[midway, below left] {$T(\vec{u})$};
\end{tikzpicture}
```

:::

::: example
$\mathbb{R} ^3$中沿着过原点的平面作反射是一个正交变换

```tikz
\usetikzlibrary{calc}
\begin{tikzpicture}[scale=2.5]
  \draw[->, gray] (0,0,0) -- (1.5,0,0) node[right] {};
  \draw[->, gray] (0,0,0) -- (0,1.0,0) node[above] {};
  \draw[->, gray] (0,0,0) -- (0,0,1.5) node[below left] {};
  \fill[gray!20, opacity=0.5] (-1,0,-1) -- (1,0,-1) -- (1,0,1) -- (-1,0,1) -- cycle;
  \draw[dashed] (-1,0,-1) -- (1,0,-1);
  \draw[dashed] (-1,0,1) -- (1,0,1);
  \coordinate (v) at (1,0.5,0.5);
  \draw[->, thick, blue] (0,0,0) -- (v) node[midway, above right] {$\vec{u}$};
  \coordinate (v') at ($(v) - 2*($ (v) - (v|-0,0,0) $)$);
  \draw[->, thick, red] (0,0,0) -- (v') node[midway, below right] {$T(\vec{u})$};
  \draw[dotted] (v) -- (v');
\end{tikzpicture}
```

:::

我们在[“反射与旋转”一节](@sec:rotation-reflection)中将更详细地讨论转动和反射的性质。

::: proposition {@prop:orth-inner}
欧几里得空间$V$上的线性变换 $T: V \to V$ 是一个正交变换当且仅当$T$保持内积不变，
即对$V$中的任意向量$\vec{x},\vec{y}$
$$
\langle T(\vec{x}), T(\vec{y})\rangle=\langle \vec{x}, \vec{y}\rangle
$$
:::

::: proof
若$T$保持内积，则由
$
\langle T(\vec{x}), T(\vec{x}) \rangle=\langle \vec{x},\vec{x}\rangle
$
知$T$保长度，即为正交变换。

反之，假设$T$是正交变换，即保长度。由
\[
\begin{aligned}
\langle \vec{x}+\vec{y},\vec{x}+\vec{y} \rangle
=\langle \vec{x},\vec{x} \rangle+\langle \vec{y}, \vec{y} \rangle+2\langle \vec{x}, \vec{y} \rangle
\end{aligned}
\]
知
$\langle\vec{x},\vec{y} \rangle=\frac{1}{2}\|\vec{x}+\vec{y}\|^2-\frac{1}{2}\|\vec{x}\|^2-\frac{1}{2}\|\vec{y}\|^2$。
因此
\[
\begin{aligned}
\langle T(\vec{x}), T(\vec{y}) \rangle=&\frac{1}{2}\|T(\vec{x})+T(\vec{y})\|^2-\frac{1}{2}\|T(\vec{x})\|^2-\frac{1}{2}\|T(\vec{y})\|^2\\=&\frac{1}{2}\|T(\vec{x}+\vec{y})\|^2-\frac{1}{2}\|T(\vec{x})\|^2-\frac{1}{2}\|T(\vec{y})\|^2\\
=&\frac{1}{2}\|\vec{x}+\vec{y}\|^2-\frac{1}{2}\|\vec{x}\|^2-\frac{1}{2}\|\vec{y}\|^2=\langle\vec{x},\vec{y} \rangle
\end{aligned}
\]
即$T$保持内积。
:::

特别地，两个向量$\vec{x},\vec{y}$之间的夹角$\theta\in [0,\pi]$为
$$
\cos \theta=\frac{\langle \vec{x}, \vec{y}\rangle}{\| \vec{x}\| \|\vec{y}\|}
$$
因此正交变换也保持向量间的夹角不变。

下面我们通过选一组基来刻画正交变换。欧几里得空间中比较好的一组基是标准正交基。

::: proposition {@prop:orth-transf-basis}
设$\{\vec{\gamma}_1,\cdots,\vec{\gamma}_n\}$是$n$维欧几里得空间$V$的一组标准正交基，
$T:V\to V$是线性映射。则$T$是正交变换当且仅当
$$
\{T(\vec{\gamma}_1),\cdots,T(\vec{\gamma}_n)\}
$$
也是$V$的标准正交基。
:::

::: proof
假设$T:V\to V$是正交变换，则$T$保内积
$$
\langle T(\vec{\gamma}_i),T(\vec{\gamma}_j) \rangle =\langle \vec{\gamma}_i, \vec{\gamma}_j \rangle=\delta_{ij}
$$
因此$\{T(\vec{\gamma}_1),\cdots,T(\vec{\gamma}_n)\}$是一组标准正交基。

反之，假设$\{T(\vec{\gamma}_1),\cdots,T(\vec{\gamma}_n)\}$是一组标准正交基。
对任意向量$\vec{x}\in V$，按照基展开
$$
\vec{x}=x_1 \vec{\gamma}_1+\cdots + x_n \vec{\gamma}_n
$$
则
\[
\begin{aligned}
\langle T(\vec{x}),T(\vec{x})\rangle =& \langle T(\sum_i x_i \vec{\gamma}_i),T(\sum_j x_j \vec{\gamma}_j)\rangle \\
=&\sum_{i,j}x_i x_j \langle T(\vec{\gamma}_i), T(\vec{\gamma}_j) \rangle \\
=&\sum_{i}x_i^2= \langle \vec{x},\vec{x} \rangle
\end{aligned}
\]
即$T$保长度，因此是正交变换。
:::

这个命题说明正交变换给出了$V$中不同标准正交基之间的联系。
设$T:V\to V$是正交变换，$\{\vec{\gamma}_1,\cdots,\vec{\gamma}_n\}$是标准正交基。
我们考虑基变换的过渡矩阵
\[
\begin{aligned}
\begin{bmatrix}
T(\vec{\gamma}_1) & \cdots & T(\vec{\gamma}_n)
\end{bmatrix}=\begin{bmatrix}
\vec{\gamma}_1 & \cdots & \vec{\gamma}_n
\end{bmatrix} A
\end{aligned}
\]
或写成分量的形式
$
T(\vec{\gamma}_j)=\sum\limits_k a_{kj}\vec{\gamma}_k
$。等价而言，$A$即为$T$在标准基$\{\vec{\gamma}_1,\cdots,\vec{\gamma}_n\}$下的表示矩阵。代入计算内积
\[
\begin{aligned}
\langle T(\vec{\gamma}_i),T(\vec{\gamma}_j) \rangle=&\langle \sum_k a_{ki}\vec{\gamma}_k,\sum_l a_{lj}\vec{\gamma}_l \rangle\\
=&\sum_{k,l}a_{ki}a_{lj} \langle \vec{\gamma}_k,\vec{\gamma}_l \rangle\\
=& \sum_k a_{ki}a_{kj}
\end{aligned}
\]

$T$是正交变换等价于
$$
\langle T(\vec{\gamma}_i),T(\vec{\gamma}_j) \rangle =\delta_{ij}
$$
即
$$
\sum_k a_{ki}a_{kj}=\delta_{ij}
$$
写成矩阵的形式，上式等价于
$$
A^T A= I_n
$$

::: definition
一个 $n$ 阶实矩阵 $A$ 称为正交方阵，如果它满足
$$
A^T A = A A^T = I_n
$$
其中 $A^T$ 表示 $A$ 的转置矩阵，$I_n$ 表示 $n$ 阶单位矩阵。
所有实正交矩阵组成的集合记为$\operatorname{O}(n)$。
:::

$A$是正交方阵的一个等价写法是
$$
A^T=A^{-1}
$$
即$A$可逆且$A$的逆是它的转置。由上述讨论，我们证明了如下命题

::: proposition {@prop:orth-transf-rep}
设$T:V\;\to\; V$是$n$维欧几里得空间$V$的线性变换。
则$T$是正交变换当且仅当$T$在$V$的一组标准正交基下的表示矩阵$A$是$n$阶正交方阵。
:::

设$A\in \operatorname{O}(n)$是$n$阶正交方阵。
记$A$的列向量为$\{\vec{\beta}_1,\cdots,\vec{\beta}_n\}$，即
$$
A=\begin{bmatrix}
\vec{\beta}_1 & \cdots & \vec{\beta}_n
\end{bmatrix}\qquad A^T=\begin{bmatrix}
\vec{\beta}_1^T \\ \vdots \\ \vec{\beta}_n^T
\end{bmatrix}
$$
则
$$
A^T A=\begin{bmatrix}
\vec{\beta}_1^T \vec{\beta}_1 & \vec{\beta}_1^T \vec{\beta}_2 &\cdots & \vec{\beta}_1^T \vec{\beta}_n\\
\vec{\beta}_2^T \vec{\beta}_1 & \vec{\beta}_2^T \vec{\beta}_2 & \cdots & \vec{\beta}_2^T \vec{\beta}_n\\
\cdots & \cdots & \cdots & \cdots \\
\vec{\beta}_n^T \vec{\beta}_1 & \vec{\beta}_n^T \vec{\beta}_2 &\cdots & \vec{\beta}_n^T \vec{\beta}_n
\end{bmatrix}
$$

因此$A^T A=I_n$等价于
$$
\vec{\beta}_i^T \vec{\beta}_j=\langle \vec{\beta}_i,\vec{\beta}_j\rangle=\delta_{ij}
$$
即$\{\vec{\beta}_1,\cdots,\vec{\beta}_n\}$是标准欧几里得空间$\mathbb{R} ^n$的标准正交基。

类似的，我们把$A$的行向量记为$\{\vec{\alpha}_1,\cdots,\vec{\alpha}_n\}$，即
$$
A=\begin{bmatrix}
\vec{\alpha}_1 \\ \vdots \\ \vec{\alpha}_n
\end{bmatrix}
\qquad
A^T=\begin{bmatrix}
\vec{\alpha}_1^T & \cdots & \vec{\alpha}_n^T
\end{bmatrix}
$$
则$A A^T=I_n$等价于行向量$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_n\}$是标准欧几里得空间
$\mathbb{R} ^n$的标准正交基。

由此我们证明了如下命题

::: proposition {@prop:orth-matrix-equiv}
设$A$是$n$阶实方阵，则如下条件等价：

1. $A$是正交方阵

2. $A$的列向量构成$\mathbb{R} ^n$的标准正交基

3. $A$的行向量构成$\mathbb{R} ^n$的标准正交基

:::

::: example
由$\mathbb{R} ^3$的一组基
$$
\vec{\alpha}_1=\begin{bmatrix}
1 \\ 1 \\ 1
\end{bmatrix}\quad \vec{\alpha}_2=\begin{bmatrix}
0 \\ 1 \\ 1
\end{bmatrix}
\quad
\vec{\alpha}_3=\begin{bmatrix}
0 \\ 0 \\ 1
\end{bmatrix}
$$
做Gram–Schmidt正交化和归一化（见 @eg:Gram-Schmidt），得到标准正交基

$$
\vec{\gamma}_1=\begin{bmatrix}
1/\sqrt{3} \\ 1/\sqrt{3} \\ 1/\sqrt{3}
\end{bmatrix}\quad \vec{\gamma}_2=\begin{bmatrix}
-2/\sqrt{6} \\ 1/\sqrt{6} \\ 1/\sqrt{6}
\end{bmatrix}
\quad
\vec{\gamma}_3=\begin{bmatrix}
0 \\ -1/\sqrt{2} \\ 1/\sqrt{2}
\end{bmatrix}
$$
因此我们得到如下$3$阶正交方阵

$$
\begin{bmatrix}
1/\sqrt{3} & -2/\sqrt{6} & 0 \\
1/\sqrt{3} & 1/\sqrt{6} & -1/ \sqrt{2}\\
1/\sqrt{3} & 1/\sqrt{6} & 1/ \sqrt{2}
\end{bmatrix}
$$

:::

::: proposition {@prop:orth-group}
设$A,B$是$n$阶正交方阵，则$A^{-1}(=A^T), AB$均为$n$阶正交方阵。
我们说$\operatorname{O}(n)$构成一个群，称为$n$阶正交群。
:::

::: proof
$AA^T=A^TA=I_n$知$A^T\in \operatorname{O}(n)$，即$A^{-1}\in \operatorname{O}(n)$。由
$$
(AB)^T(AB)=B^T A^T A B= B^T B =I_n
$$
知$AB\in \operatorname{O}(n)$。
:::

设$A\in \operatorname{O}(n)$是$n$阶正交方阵。由
$$
A^T A=I_n
$$
两边取行列式得
$$
\det(A^T)\det (A)=1\quad \text{即}\quad (\det A)^2=1
$$
因此
$$
\det A=\pm 1
$$

::: definition
$n$阶方阵$A$称为特殊正交方阵，如果$A$是正交方阵并且$\det A=1$。
所有$n$阶特殊正交方阵构成的集合记为$\operatorname{SO}(n)$，即
$$
\operatorname{SO}(n)=\{A\in \operatorname{O}(n)| \det A=1\}
$$
$\operatorname{SO}(n)$也构成一个群，称为$n$阶特殊正交群。
:::

## 反射与旋转* {@sec:rotation-reflection}

::: example [反射变换]
设$\vec{u}\in \mathbb{R} ^n$是非零向量。考虑
$$
H= \{\vec{y}\in \mathbb{R} ^n|  \left\langle\vec{y}, \vec{u}\right\rangle=0\}
$$
为所有与$\vec{u}$垂直的向量构成的集合。
$H$可以看作是$\mathbb{R} ^n$中的一个$n-1$维超平面，$\vec{u}$是$H$的法向量。
我们考虑$\mathbb{R} ^n$中关于$H$的反射变换$R_{\vec{u}}$。具体而言
$$
R_{\vec{u}} (\vec{x})=\vec{x}-2{\left\langle\vec{u}, \vec{x}\right\rangle\over \left\langle\vec{u}, \vec{u}\right\rangle} \vec{u}
$$
可以验证，$R_{\vec{u}}$是一个线性变换，将$\vec{u}$变为$-\vec{u}$，并且保持超平面$H$不动。
易知这是一个等距变换，对应于一个正交矩阵。

为简化讨论，不妨设$\vec{u}$为单位向量，即$\left\langle\vec{u},\vec{u}\right\rangle=1$。
容易验证，此时$R_{\vec{u}}$对应的正交矩阵为
\[
\begin{aligned}
   I_n- 2 \begin{bmatrix}  u_1 \\ u_2 \\ \vdots \\ u_n\end{bmatrix}  \begin{bmatrix} u_1 & u_2 & \cdots & u_n\end{bmatrix}
  =\begin{bmatrix}
 1- 2 u_1 u_1 & -2 u_1  u_2 & \cdots & -2 u_1 u_n\\
 -2u_2 u_1 & 1-2 u_2 u_2 & \cdots & -2 u_2 u_n\\
 \vdots & \cdots & \cdots & \vdots \\
 -2 u_n u_1 & -2u_n u_{2} & \cdots & 1-2 u_n u_n
  \end{bmatrix}
\end{aligned}
\]

特别的，如果$\vec{u}=\vec{e_i}$为第$i$个坐标方向的单位向量，则

$$
R_{\vec{e_i}}=\begin{bmatrix}
  1 & 0 & \cdots & \cdots & \cdots& 0 \\
  0 & 1 & \cdots & \cdots & \cdots &0 \\
  \vdots & \cdots & \cdots &  \cdots & \cdots & \cdots \\
  0 & \cdots & \cdots & -1 & \cdots &0 \\
   \cdots & \cdots & \cdots &  \cdots & \cdots & \cdots\\
    0 & \cdots & \cdots &  \cdots & \cdots & 1\\
\end{bmatrix}
$$
其中第$i$行$i$列的元素为$-1$，其它对角元为$1$。

反射的行列式是$-1$，即
$$
\det R_{\vec{u}}=-1
$$
:::

::: example [$2$维正交变换] {@eg:O-2}
考虑平面$\mathbb{R} ^2$中的正交变换。设
\[
A=
\begin{bmatrix}
a & b\\
c & d
\end{bmatrix}\in \operatorname{O}(2)
\]

由
\[
A^T A=
\begin{bmatrix}
a & c\\
b & d
\end{bmatrix}
\begin{bmatrix}
a & b\\
c & d
\end{bmatrix}
=
\begin{bmatrix}
a^2+c^2 & ab+cd\\
ab+cd & b^2+d^2
\end{bmatrix}\,
\]
我们得到方程组
\[
a^2+c^2 =b^2+d^2=1\,,
\quad ab+cd=0
\,
\]

第一组方程的解为
\[
(a,c)=(\cos \theta,\sin\theta)\,,\quad
(b,d)=(\sin \phi,\cos\phi)\,
\]
代入第二组方程，我们得到$\sin(\theta+\phi)=0$，即$\phi=-\theta$或$-\theta+\pi$。所以我们得到解
\[
A=
\begin{bmatrix}
\cos \theta & -\sin\theta\\
\sin\theta& \cos\theta
\end{bmatrix}
\]
或
\[
\quad A=
\begin{bmatrix}
\cos \theta & \sin\theta\\
\sin\theta& -\cos\theta
\end{bmatrix}
=
\begin{bmatrix}
\cos \theta & -\sin\theta\\
\sin\theta& \cos\theta
\end{bmatrix}
\begin{bmatrix}
1 & 0\\
0&-1
\end{bmatrix}.
\]

容易看出，前者属于$\operatorname{SO}(2)$，表示为逆时针转$\theta$的旋转；后者$\det A=-1$，
表示为与$x$轴夹角为$\theta/2$的直线的反射。
由矩阵的行列式我们很容易知道两个平面反射的复合为一个旋转。
:::

## Cartan–Dieudonné 定理*

我们首先考虑$\mathbb{R} ^3$中的正交变换。$\operatorname{O}(3)$中的元素可以分类为如下三种

1. 绕某个轴的转动。如
   $$
   \begin{bmatrix}
   \cos \theta & -\sin\theta & 0\\
   \sin \theta & \cos \theta& 0\\
   0 & 0 & 1
   \end{bmatrix}
   $$
   为绕$z$-轴逆时针旋转$\theta$。

2. 关于某个平面的反射。如
   $$
     \begin{bmatrix}
   1 & 0 & 0\\
   0 & 1 & 0\\
   0 & 0 & -1
   \end{bmatrix}
   $$
   为关于$xy$平面的反射。

3. 一个绕轴的转动和一个与旋转轴垂直平面的反射的复合。如
   $$
   \begin{bmatrix}
   \cos \theta & -\sin\theta & 0\\
   \sin \theta & \cos \theta& 0\\
   0 & 0 & -1
   \end{bmatrix}
   $$
   为绕$z$-轴转动和$xy$-平面反射的复合。

这三种分类可以通过如下的几何结论得到。

::: proposition
$\operatorname{O}(3)$中任一元素可以写成至多3个反射的乘积。
:::

::: proof
设$A\in \operatorname{O}(3)$。
不妨设$A\neq I_n$，于是存在非零向量$\vec{x}$使得$A(\vec{x})\neq \vec{x}$。
我们不妨设$\vec{x}=\vec{e}_3$为第3个标准基向量。令$\vec{u}=A\vec{e}_3-\vec{e}_3$。
考虑沿与$\vec{u}$垂直平面的反射$R_{\vec{u}}$，易知
$$
R_{\vec{u}}(A\vec{e}_3)=\vec{e}_3
$$

考虑乘积$B=R_{\vec{u}} A$。由于$B(\vec{e}_3)=\vec{e}_3$，$B$形如
$$
B=\begin{bmatrix}
{*} & * & 0\\
{*} & * & 0\\
{*} & * & 1
\end{bmatrix}
$$
由正交性$B^T B=I_3$可以得到
$$
B=\begin{bmatrix}
b_{11} & b_{12} & 0\\
b_{21} & b_{22} & 0\\
0 & 0  & 1
\end{bmatrix}, \quad \begin{bmatrix}
b_{11} & b_{12} \\
b_{21} & b_{22}
\end{bmatrix}\in \operatorname{O}(2)
$$

由 @eg:O-2，我们已知$\operatorname{O}(2)$中的元素可以写成不超过两个反射的乘积，
于是$B$可以写成不超过两个反射的乘积。因此$A=R^{-1}_{\vec{u}}B$可以写成不超过3个反射的乘积。
:::

::: theorem [Cartan–Dieudonné 定理]
$\mathbb{R} ^n$上任意正交变换都可以写成至多$n$个反射的复合。
:::

这个定理可以通过对$n$做归纳证明，证明方法和上述$n=3$的情况类似。
