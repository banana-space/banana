---
title: 线性映射与矩阵
---

## 集合的映射*

两个集合$X, Y$之间的一个映射
$$
f: X\to Y
$$
指的是一个对应法则，将$X$中的一个元素$x$唯一对应到$Y$中的一个元素$y$，记为$y=f(x)$

```tikz
\usetikzlibrary{shapes.geometric}
\begin{tikzpicture}
  \node[ellipse, draw=black, minimum width=3cm, minimum height=2cm, label={above:$X$}] (A) at (0,0) {};
  \node[ellipse, draw=black, minimum width=3cm, minimum height=2cm, label={above:$Y$}] (B) at (5,0) {};
  \node[circle, fill=black, inner sep=2pt, label={left:$x$}] (a) at (0.3,0) {};
  \node[circle, fill=black, inner sep=2pt, label={right:$f(x)$}] (fa) at (4.5,0) {};
  \draw[->] (a) -- (fa);
  \node at (2.5,1) {$f: X \rightarrow Y$};
\end{tikzpicture}
```

设$f: X\to Y$是一个映射。
$X$的一个子集$Z$在$f$下的像，指的是所有由$Z$中的元素在映射$f$下构成的$Y$中元素的集合，
记为$f(Z)\subset Y$
$$
f(Z):=\{y\in Y|\ \text{存在$\ x\in Z\ $使得}\ y=f(x)\}
$$

```tikz
\usetikzlibrary{shapes.geometric}
\begin{tikzpicture}
  \node[ellipse, draw=black, minimum width=3cm, minimum height=2cm, label={above:$X$}] (X) at (0,0) {};
  \node[ellipse, draw=black, minimum width=3cm, minimum height=2cm, label={above:$Y$}] (Y) at (5,0) {};
  \node[ellipse, draw=red, thick, minimum width=1.8cm, minimum height=1.3cm] (Z) at (0.3,0) {};
  \node at (0.5,0) {$Z$};
  \node[ellipse, draw=blue, thick, minimum width=1.5cm, minimum height=1cm] (fZ) at (5,0) {};
  \node at (5,0) {$f(Z)$};
  \node at (2.5,0.5) {$f$};
  \draw[->, dashed] (Z) -- (fZ);
\end{tikzpicture}
```

我们记$\operatorname{im}(f):=f(X)$，称为映射$f$的像。

::: definition
映射$f:X\to Y$称为是一个满射，如果
$$
\operatorname{im}(f)=Y
$$
即$Y$中每个元素都通过$f$对应于$X$中某个元素。

映射$f:X\to Y$称为一个单射，如果对任意两个元素$x_1,x_2\in X$
$$
x_1\neq x_2 \quad \Longrightarrow \quad f(x_1)\neq f(x_2)
$$
即不同的元素的像也一定是不同的。

$y\in Y$在映射$f:X\to Y$下的原像定义为
$$
f^{-1}(y)=\{x\in X|\ f(x)=y\ \}.
$$
:::

```tikz
\usetikzlibrary{shapes.geometric}
\begin{tikzpicture}
  \node[ellipse, draw=black, minimum width=3cm, minimum height=2cm, label={above:$X$}] (X) at (0,0) {};
  \node[ellipse, draw=black, minimum width=3cm, minimum height=2cm, label={above:$Y$}] (Y) at (5,0) {};
  \node[label={below left:}] (x) at (0.7,0.1) {};
  \node[circle, fill=black, inner sep=1.5pt, label={below right:$y$}] (y) at (5.5,0.5) {};
  \node[ellipse, draw=red, thick, minimum width=1.5cm, minimum height=1.2cm] (f_inv_y) at (0,0) {};
  \node at (0,0) {\small $f^{-1}(y)$};
  \node at (2.5,0.8) {$f$};
  \draw[->] (x) -- (y);
\end{tikzpicture}
```

如果$y\notin \operatorname{im}(f)$，则$f^{-1}(y)=\varnothing$是空集。

不难看出，$f:X\to Y$是单射当且仅当对任意$y\in \operatorname{im}(f)$，$f^{-1}(y)$只含有一个元素。

::: definition
映射$f:X\to Y$称为是一一映射，如果$f$既是单射也是满射。
此时$f$给出了集合$X$和$Y$之间的一个一一对应关系。
:::

## 线性映射*

下面我们考虑两个线性空间之间的映射。由于线性空间上具有线性结构，我们关注那些保持线性结构的映射。
这样的映射称为线性映射。

::: definition
两个线性空间$V, W$之间的映射$f:V\to W$称为一个线性映射，如果$f$满足

- 保加法：对任意的$\mathbf{v}_1, \mathbf{v}_2\in V$
  $$
  f(\mathbf{v}_1+\mathbf{v}_2)=f(\mathbf{v}_1)+f(\mathbf{v}_2),
  $$

- 保数乘：对任意的$\mathbf{v}\in V, \lambda\in k$
  $$
  f(\lambda \mathbf{v})=\lambda f(\mathbf{v}).
  $$

特别的，$f$一定把零向量映到零向量。
:::

::: example
考虑如下映射$f: \mathbb{R}^2\to \mathbb{R}$，记作$(x,y)\mapsto f(x,y)$

- $f(x,y)=x$。$f$是一个线性映射

- $f(x,y)=2x+3y$。$f$是一个线性映射

- $f(x,y)=2x+3y-1$。$f$不是一个线性映射

- $f(x,y)=x^2+y$。$f$不是一个线性映射

:::

::: example
设$V=\mathbb{R}[x]$是一元多项式空间。给定$a\in \mathbb{R}$，我们定义赋值映射
$$
\delta_a: \mathbb{R}[x]\to \mathbb{R}, \quad \delta_a(f):=f(a)
$$
则$\delta_a$是一个线性映射：

- $\delta_a(f+g)=f(a)+g(a)=\delta_a(f)+\delta_a(g)$

- $\delta_a(\lambda f)=\lambda f(a)=\lambda \delta_a(f)$

:::

::: example
类似的，给定$a_1,\cdots,a_n\in \mathbb{R}$，赋值映射
\[
\begin{aligned}
\delta: \mathbb{R}[x]&\to \mathbb{R}^n\\
\delta(f)&:=(f(a_1),\cdots, f(a_n))
\end{aligned}
\]
是一个线性映射。而映射
$$
\varphi: \mathbb{R}[x]\to \mathbb{R}, \quad \varphi(f)=f(a_1)\cdots f(a_n)
$$
不是一个线性映射（$n>1$）。
:::

::: proposition
设$f: V\to W$是一个线性映射，$\mathbf{v}_i\in V, \lambda_i\in k$。则
$$
f(\lambda_1\mathbf{v}_1+\cdots+ \lambda_m\mathbf{v}_m)=\lambda_1f(\mathbf{v}_1)+\cdots+\lambda_m f(\mathbf{v}_m).
$$
即$f$保持线性组合的结构。
:::

::: proof
\[
\begin{aligned}
f(\lambda_1\mathbf{v}_1+\cdots+ \lambda_m\mathbf{v}_m)
\stackrel{\text{保加法}}{=}&f(\lambda_1\mathbf{v}_1)+\cdots+ f(\lambda_m\mathbf{v}_m)
\stackrel{\text{保数乘}}{=}\lambda_1f(\mathbf{v}_1)+\cdots+ \lambda_mf(\mathbf{v}_m)
\end{aligned}
\]
:::

::: proposition
设$V, W, U$是线性空间，$f: V\to W$和$g: W\to U$是线性映射。则复合$g\circ f: V\to U$也是线性映射。
:::

::: proof
对任意$\mathbf{v}_1,\mathbf{v}_2\in V$，由$f,g$的线性性
$$
g\Big(f(\mathbf{v}_1+\mathbf{v}_2)\Big)=g\Big(f(\mathbf{v}_1)+f(\mathbf{v}_2)\Big) =g\Big(f(\mathbf{v}_1)\Big)+g\Big(f(\mathbf{v}_2)\Big)
$$
因此$g\circ f$保加法。类似可证$g\circ f$保数乘。
:::

::: example
$$
f: \mathbb{R}^2\to \mathbb{R}^2, \quad f(x,y)=(-y,x)
$$
是一个线性映射，表示平面上逆时针旋转${\pi\over 2}$。$f$和它自己的复合
$$
f\circ f: \mathbb{R}^2\to \mathbb{R}^2, \quad (x,y)\to (-x,-y)
$$
也是线性映射，表示平面上逆时针旋转${\pi}$。
:::

::: proposition
设$\{\mathbf{v}_1,\cdots,\mathbf{v}_n\}$是$V$的一组基。
则一个线性映射$f: V\to W$完全由$f$在$\{\mathbf{v}_1,\cdots,\mathbf{v}_n\}$上的值决定。
:::

::: proof
假设$\mathbf{w}_1=f(\mathbf{v}_1),\cdots,\mathbf{w}_n=f(\mathbf{v}_n)$。
则对$V$中任意向量$\mathbf{v}$，它可以唯一表达为线性组合
$$
\mathbf{v}=\lambda_1\mathbf{v}_1+\cdots+\lambda_n \mathbf{v}_n.
$$
则由$f$的线性性，我们得到
$$
f(\mathbf{v})=\lambda_1 \mathbf{w}_1+\cdots+\lambda_n \mathbf{w}_n
$$
被$\mathbf{w}_1,\cdots,\mathbf{w}_n$完全确定了。
:::

::: example
$\mathbb{R}^n$中的一组基为
\[
\begin{aligned}
\vec{e}_1&=(1,0,\cdots,0)\\
\vec{e}_2&=(0,1,\cdots,0)\\
& \vdots\\
\vec{e}_n&=(0,0,\cdots,1)
\end{aligned}
\]
设$f: \mathbb{R}^n\to \mathbb{R}$是线性映射并且$f(\vec{e}_i)=a_i$，则
$$
f(\vec{x})=f(x_1\vec{e}_1+\cdots+x_n\vec{e}_n)=a_1x_1+\cdots+a_nx_n
$$
:::

## 矩阵*

下面我们讨论线性映射
$$
f: \mathbb{R}^n\to \mathbb{R}^m
$$
我们说明这样一个线性映射可以通过矩阵来描述。为了方便，我们将$\mathbb{R}^n$中的元素写成列向量
$$
\vec{x}=\begin{bmatrix}
x_1\\x_2\\ \vdots \\ x_n
\end{bmatrix} \quad \in \mathbb{R}^n
$$
$\mathbb{R}^n$的一组标准基记为
$$
\vec{e}_1=\begin{bmatrix}
1\\0\\ \vdots \\ 0
\end{bmatrix} \quad,\quad  \vec{e}_2=\begin{bmatrix}
0\\1\\ \vdots \\ 0
\end{bmatrix}\quad\cdots\quad
\vec{e}_n=\begin{bmatrix}
0\\0\\ \vdots \\ 1
\end{bmatrix}
$$

线性映射$f:\mathbb{R}^n\to \mathbb{R}^m$由一组基的值确定。设
$$
f(\vec{e}_1)=\begin{bmatrix}
a_{11}\\a_{21}\\ \vdots \\ a_{m1}
\end{bmatrix},
f(\vec{e}_2)=\begin{bmatrix}
a_{12}\\a_{22}\\ \vdots \\ a_{m2}
\end{bmatrix}\ \cdots\
f(\vec{e}_n)=\begin{bmatrix}
a_{1n}\\a_{2n}\\ \vdots \\ a_{mn}
\end{bmatrix}
$$
则这些向量$f(\vec{e}_1),\cdots,f(\vec{e}_n)\in \mathbb{R}^m$决定了线性映射$f$在所有$\mathbb{R}^n$
上的取值。对于$\mathbb{R}^n$中任意一个向量$
\vec{x}=\begin{bmatrix}
x_1\\x_2\\ \vdots \\ x_n
\end{bmatrix}
$，我们有
$$
f(\vec{x})=f(x_1\vec{e}_1+\cdots+x_n\vec{e}_n)\stackrel{\text{线性性}}{=}x_1f(\vec{e}_1)+\cdots+ x_n f(\vec{e}_n)
$$
代入$f(\vec{e}_i)$的值，我们得到
\[
\begin{aligned}
f(\vec{x})=&x_1\begin{bmatrix}
a_{11}\\a_{21}\\ \vdots \\ a_{m1}
\end{bmatrix}+x_2 \begin{bmatrix}
a_{12}\\a_{22}\\ \vdots \\ a_{m2}
\end{bmatrix}\cdots+ x_n\begin{bmatrix}
a_{1n}\\a_{2n}\\ \vdots \\ a_{mn}
\end{bmatrix}
=\begin{bmatrix}
a_{11}x_1+a_{12}x_2+\cdots +a_{1n}x_n\\
  a_{21}x_1+a_{22}x_2+\cdots +a_{2n}x_n\\ \vdots \\
a_{m1}x_1+a_{m2}x_2+\cdots + a_{mn}x_n
\end{bmatrix}
\end{aligned}
\]

我们把$\mathbb{R}^m$中的向量$f(\vec{e}_1),\cdots,f(\vec{e}_n)$排列在一起
$$
\begin{tikzpicture}[baseline=(current bounding box.center)]
\node (matrix) at (0,0) {$
  \begin{bmatrix}
  f(\vec{e}_1)& f(\vec{e}_2)\cdots &f(\vec{e}_n)
  \end{bmatrix}
  =
  \begin{bmatrix}
    a_{11} & a_{12} & \cdots & a_{1n}\\
    a_{21} & a_{22} & \cdots & a_{2n}\\
    \cdots & \cdots & \cdots & \cdots\\
    a_{m1} & a_{m2} & \cdots & a_{mn}
  \end{bmatrix}
  $};
  \draw[densely dotted] ([xshift=13.5em]matrix.west|-matrix.north) rectangle ([xshift=14.8em]matrix.west|-matrix.south);
  \draw[densely dotted] ([xshift=16.1em]matrix.west|-matrix.north) rectangle ([xshift=17.4em]matrix.west|-matrix.south);
  \draw[densely dotted] ([xshift=21.2em]matrix.west|-matrix.north) rectangle ([xshift=22.6em]matrix.west|-matrix.south);
\end{tikzpicture}
$$
右边这个表达方式称为一个$m\times n$的矩阵。$m$表示这个矩阵的行数，$n$表示这个矩阵的列数。

::: proposition {@prop:map-matrix}
我们有一一对应
\[
\begin{aligned}
\{\text{线性映射 $\mathbb{R}^n\to \mathbb{R}^m$} \}\quad & \Longleftrightarrow \quad \{\text{$m\times n$ 的矩阵}\}\\
f: \mathbb{R}^n\to \mathbb{R}^m \quad &\Longleftrightarrow \quad \begin{bmatrix}
f(\vec{e}_1)& f(\vec{e}_2)\cdots &f(\vec{e}_n)
\end{bmatrix}
\end{aligned}
\]
:::

由上述讨论，给定线性映射$f:\mathbb{R}^n\to \mathbb{R}^m$，我们将它对应于矩阵（$A$称为$f$的矩阵表示）
$$
A=\begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
$$
其中$A$的第$k$列对应于$f(\vec{e}_k),\;\; k=1,\dots,n. $

反之，给定矩阵
$$
A=\begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
$$
$A$的列向量决定了一个线性映射$f: \mathbb{R}^n\to \mathbb{R}^m$
$$
\begin{bmatrix}
x_1\\x_2\\ \vdots \\ x_n
\end{bmatrix} \stackrel{f}{\mapsto} \begin{bmatrix}
a_{11}x_1+a_{12}x_2+\cdots +a_{1n}x_n\\
  a_{21}x_1+a_{22}x_2+\cdots +a_{2n}x_n\\ \vdots \\
a_{m1}x_1+a_{m2}x_2+\cdots + a_{mn}x_n
\end{bmatrix}
$$

::: example
线性映射$f: \mathbb{R}^3\to \mathbb{R}^2, \begin{bmatrix}
 x_1 \\ x_2\\ x_3
\end{bmatrix}\mapsto \begin{bmatrix}
 x_1 \\ x_2
\end{bmatrix}$
对应于矩阵
$$
A=\begin{bmatrix}
 1 & 0 & 0\\
 0 & 1 & 0
\end{bmatrix}
$$
这是一个$2$行$3$列的矩阵，即$2\times 3$矩阵。
:::

::: example
$\begin{bmatrix} \cos\theta & -\sin \theta\\ \sin \theta & \cos\theta\end{bmatrix}$给出一个线性映射
$f:\mathbb{R}^2\to \mathbb{R}^2$

$$
f: \vec{x}=\begin{bmatrix}
 x_1 \\ x_2
\end{bmatrix}\mapsto  \begin{bmatrix}
\cos\theta\ x_1-\sin\theta\ x_2 \\ \sin\theta\ x_1+\cos\theta\ x_2
\end{bmatrix}
$$

```tikz
\usetikzlibrary{angles,quotes}
\begin{tikzpicture}[scale=1]
  \draw[->] (-1,0) -- (3,0);
  \draw[->] (0,-1) -- (0,3);
  \coordinate (O) at (0,0);
  \coordinate (V) at (2,1);
  \coordinate (V') at (1,2);
  \draw[->,thick,blue] (O) -- (V) node[below] {\small $\vec{x}$};
  \draw[->,thick,red] (O) -- (V') node[left] {\small $f(\vec{x})$};
  \draw[dashed] (V) -- (V');
  \draw[dashed] (V) -- (V |- O);
  \pic [draw, ->, angle radius=1cm, "$\theta$"] {angle = V--O--V'};
\end{tikzpicture}
```

:::
