---
title: 乘积的行列式
---

给定两个$n$阶方阵
$$
A=\begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{n1} & a_{n2} & \cdots & a_{nn}
\end{bmatrix}
\quad
B=\begin{bmatrix}
 b_{11} & b_{12} & \cdots & b_{1n}\\
 b_{21} & b_{22} & \cdots & b_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 b_{n1} & b_{n2} & \cdots & b_{nn}
\end{bmatrix}
$$
它们的乘积$AB$也是$n$阶方阵。我们这一节证明如下矩阵乘积的行列式公式：
$$
\det (AB)= (\det A) (\det B)
$$

## 行列式与线性映射*

一个$n$阶方阵$A$对应于线性映射$f:\mathbb{R} ^n\to \mathbb{R} ^n$
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
即把$\mathbb{R} ^n$中的元素$\vec{x}$写成列向量，我们有
$$
f(\vec{x})=A\vec{x}
$$

特别地，$f$把$\mathbb{R} ^n$的标准基向量映到$A$的列向量
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
    a_{n1} & a_{n2} & \cdots & a_{nn}
  \end{bmatrix}
  $};
  \draw[densely dotted] ([xshift=13.3em]matrix.west|-matrix.north) rectangle ([xshift=14.9em]matrix.west|-matrix.south);
  \draw[densely dotted] ([xshift=15.6em]matrix.west|-matrix.north) rectangle ([xshift=17.1em]matrix.west|-matrix.south);
  \draw[densely dotted] ([xshift=20.3em]matrix.west|-matrix.north) rectangle ([xshift=22.0em]matrix.west|-matrix.south);
\end{tikzpicture}
$$
例如
$$
f(\vec{e}_1)=\begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{n1} & a_{n2} & \cdots & a_{nn}
\end{bmatrix}\begin{bmatrix}
1 \\ 0\\ \cdots \\ 0
  \end{bmatrix}=\begin{bmatrix}
a_{11} \\ a_{21}\\ \cdots \\ a_{n1}
  \end{bmatrix}
$$

回顾我们用矩阵$A$的行向量做外积来定义行列式。
由于行列式对于行和列是对称的，我们也可以等价地用列向量做外积来得到行列式。
因此矩阵$A$的行列式也可以通过如下表达式给出
$$
f(\vec{e}_1)\wedge f(\vec{e}_2)\wedge \cdots \wedge f(\vec{e}_n)=(\det A) \vec{e}_1\wedge \vec{e}_2\wedge \cdots \wedge \vec{e}_n
$$
这给出了行列式关于线性映射的解释：$\det A$是$f$把$\mathbb{R} ^n$中的体积元伸缩的倍数（带符号）。

## 乘积的行列式*

设$A, B$是$n$阶方阵，它们分别对应于线性映射
$$
f\ ,\ g\ : \mathbb{R} ^n \to \mathbb{R} ^n
$$
我们知道乘积$AB$对应于$f,g$复合的线性映射
$$
f\circ g: \mathbb{R} ^n\to \mathbb{R} ^n
$$

通过矩阵$B$的分量$(b_{ij})$，我们有
\[
\begin{aligned}
&g(\vec{e}_1)\wedge g(\vec{e}_2)\wedge \cdots \wedge g(\vec{e}_n)\\
=&\left(\sum_{i} b_{i1}\vec{e}_i\right)\wedge \left(\sum_{i} b_{i2}\vec{e}_i\right)\wedge \cdots \wedge \left(\sum_{i} b_{in}\vec{e}_i\right)
\end{aligned}
\]
复合$f$并利用$f$的线性性，我们得到
\[
\begin{aligned}
&f(g(\vec{e}_1))\wedge f(g(\vec{e}_2))\wedge \cdots \wedge f(g(\vec{e}_n))\\
=&\left(\sum_{i} b_{i1}f(\vec{e}_i)\right)\wedge \left(\sum_{i} b_{i2}f(\vec{e}_i)\right)\wedge \cdots \wedge \left(\sum_{i} b_{in}f(\vec{e}_i)\right)
\end{aligned}
\]

根据行列式的定义，我们可以通过外积运算得到
\[
\begin{aligned}
\left(\sum_{i} b_{i1}\vec{e}_i\right)\wedge \left(\sum_{i} b_{i2}\vec{e}_i\right)\wedge \cdots \wedge \left(\sum_{i} b_{in}\vec{e}_i\right)
=(\det B) \vec{e}_1\wedge \vec{e}_2\wedge \cdots \wedge \vec{e}_n
\end{aligned}
\]
把$\vec{e}_i$换做$f(\vec{e}_i)$，通过同样的外积运算可以得到
\[
\begin{aligned}
&\left(\sum_{i} b_{i1}f(\vec{e}_i)\right)\wedge \left(\sum_{i} b_{i2}f(\vec{e}_i)\right)\wedge \cdots \wedge \left(\sum_{i} b_{in}f(\vec{e}_i)\right)\\
&=(\det B) f(\vec{e}_1)\wedge f(\vec{e}_2)\wedge \cdots \wedge f(\vec{e}_n)
\end{aligned}
\]
因此
\[
\begin{aligned}
&f(g(\vec{e}_1))\wedge f(g(\vec{e}_2))\wedge \cdots \wedge f(g(\vec{e}_n))\\
=&\left(\sum_{i} b_{i1}f(\vec{e}_i)\right)\wedge \left(\sum_{i} b_{i2}f(\vec{e}_i)\right)\wedge \cdots \wedge \left(\sum_{i} b_{in}f(\vec{e}_i)\right)\\
=&(\det B) f(\vec{e}_1)\wedge f(\vec{e}_2)\wedge \cdots \wedge f(\vec{e}_n)
\end{aligned}
\]

由矩阵$A$的行列式的外积定义，
$$
f(\vec{e}_1)\wedge f(\vec{e}_2)\wedge \cdots \wedge f(\vec{e}_n)=(\det A) \vec{e}_1\wedge \vec{e}_2\wedge \cdots \wedge \vec{e}_n
$$
代入上式得到
\[
\begin{aligned}
&f(g(\vec{e}_1))\wedge f(g(\vec{e}_2))\wedge \cdots \wedge f(g(\vec{e}_n))=(\det A)(\det B) \vec{e}_1\wedge \vec{e}_2\wedge \cdots \wedge \vec{e}_n
\end{aligned}
\]

另一方面，由于复合$f\circ g$对应于矩阵$AB$，由行列式的外积定义我们有
\[
\begin{aligned}
&f(g(\vec{e}_1))\wedge f(g(\vec{e}_2))\wedge \cdots \wedge f(g(\vec{e}_n))=\det (AB) \vec{e}_1\wedge \vec{e}_2\wedge \cdots \wedge \vec{e}_n
\end{aligned}
\]
对比两方面的计算，我们得到$\det(AB)=(\det A)(\det B)$。

::: theorem
设$A, B$是$n$阶方阵，则
$$
\det (AB)= (\det A) (\det B)
$$
:::

这个定理的几何解释为：假设$A, B$对应于线性映射$f, g: \mathbb{R} ^n\to \mathbb{R} ^n$，
故$g$将$n$维体积元伸缩$\det B$倍，$f$将$n$维体积元伸缩$\det A$倍。
则$f$复合$g$将$n$维体积元伸缩$(\det A) (\det B)$倍。

::: example
矩阵$A=\begin{bmatrix} 1 & 2 \\ 3 & 4\end{bmatrix}$，
$B=\begin{bmatrix} 5 & 6 \\ 7 & 8\end{bmatrix}$。直接计算知
$$
\det A=-2\quad \det B=-2 \quad \Longrightarrow \det A\det B=4
$$
另一方面$AB=\begin{bmatrix} 19 & 22 \\ 43 & 50\end{bmatrix}$，其行列式为
$$
\begin{vmatrix} 19 & 22 \\ 43 & 50\end{vmatrix}=19\times 50-43\times 22=950-946=4
$$
:::

::: example
方阵$A$称为是幂零矩阵，如果存在一个正整数$N$使得$A^N=0$，即足够多个$A$乘在一起是零。
对于幂零矩阵一定有
$$
\det A=0
$$
实际上由$A^N=0$两边取行列式，我们得到
$$
\det(A^N)=(\det A)^N=0 \quad \Longrightarrow \quad \det A=0
$$
:::

::: example
设$A=(a_{ij})$是$n$阶方阵，$\lambda\in \mathbb{R} $。
方阵$\lambda A=(\lambda a_{ij})$可以通过矩阵乘积来表示
$$
\lambda A = \Lambda A,\qquad \Lambda =\begin{bmatrix}
\lambda  & 0  &\cdots & 0\\
0 & \lambda   &\cdots & 0\\
\cdots & \cdots  & \cdots & \cdots &\\
0 & 0 & \cdots & \lambda
\end{bmatrix}
$$
因此
$$
\det(\lambda A)=\det \Lambda \det A= \lambda^n \det A
$$
:::

::: example
$n$阶方阵$A$称为是反对称方阵，如果
$
A^T=-A
$。
假设$A$是奇数阶反对称方阵，则
$$
\det A=\det A^T=\det (-A)=(-1)^n \det A=-\det A
$$
于是$\det A=0$。例如
$$
\begin{vmatrix}
 0 & -2 & 3 \\
 2 & 0 & -1\\
 -3 & 1 & 0
\end{vmatrix}=0
$$
:::

::: example
求如下方阵（称为$n$阶轮回方阵）的行列式
$$
A=\begin{bmatrix}
a_0 & a_1 & a_2 & \cdots & a_{n-1}\\
a_{n-1} & a_0 & a_1 & \cdots & a_{n-2}\\
a_{n-2} & a_{n-1} & a_0 & \cdots & a_{n-3}\\
\cdots &\cdots &\cdots &\cdots &\cdots \\
a_1 & a_2 & a_3 & \cdots & a_0
\end{bmatrix}
$$

设$\omega=e^{\frac{2\pi \sqrt{-1}}{n}}$是$n$次本原单位根。记多项式
$$
f(x)=a_0+ a_1 x+ a_2 x^2+\cdots+ a_{n-1}x^{n-1}
$$

考虑列向量
$
\vec{\beta}_i=\begin{bmatrix}
1 \\ \omega^i \\ \omega^{2i} \\ \vdots \\ \omega^{(n-1)i}
\end{bmatrix}
$。由$(\omega^i)^n=1$，我们有
$$
\begin{bmatrix}
a_0 & a_1 & a_2 & \cdots & a_{n-1}\\
a_{n-1} & a_0 & a_1 & \cdots & a_{n-2}\\
a_{n-2} & a_{n-1} & a_0 & \cdots & a_{n-3}\\
\cdots &\cdots &\cdots &\cdots &\cdots \\
a_1 & a_2 & a_3 & \cdots & a_0
\end{bmatrix}\begin{bmatrix}
1 \\ \omega^i \\ \omega^{2i} \\ \vdots \\ \omega^{(n-1)i}
\end{bmatrix}=\begin{bmatrix}
f(\omega^i) \\ f(\omega^i)\omega^i \\ f(\omega^i)\omega^{2i} \\ \vdots \\ f(\omega^i)\omega^{(n-1)i}
\end{bmatrix}=f(\omega^i) \begin{bmatrix}
1 \\ \omega^i \\ \omega^{2i} \\ \vdots \\ \omega^{(n-1)i}
\end{bmatrix}
$$
即 $A \vec{\beta}_i= f(\omega^i)\vec{\beta}_i$。比如我们考虑第二行：
\[
\begin{aligned}
&a_{n-1}+ a_0 \omega^i + a_1 \omega^{2i}+\cdots+ a_{n-2}\omega^{(n-1)i}\\
=&a_{n-1} \omega^{ni}+ a_0 \omega^i + a_1 \omega^{2i}+\cdots+ a_{n-2}\omega^{(n-1)i}\\
=&(a_0+a_1 \omega^i+\cdots+ a_{n-2}\omega^{(n-2)i}+a_{n-1}\omega^{(n-1)i})\omega^i\\
=& f(\omega^i)\omega^i
\end{aligned}
\]

记矩阵
$$
B=\begin{bmatrix}
\vec{\beta_0} & \vec{\beta}_1 & \cdots & \vec{\beta}_{n-1}
\end{bmatrix}
$$
则
\[
\begin{aligned}
AB=&\begin{bmatrix}
f(\omega^0)\vec{\beta_0} & f(\omega^1)\vec{\beta}_1 & \cdots & f(\omega^{n-1})\vec{\beta}_{n-1}
\end{bmatrix}
\end{aligned}
\]
两边取行列式，我们得到
$$
\det A \det B = \det B \prod_{i=0}^{n-1} f(\omega^i)
$$

观察到矩阵
\[
\begin{aligned}
B=\begin{bmatrix}
1 & 1 & 1 & \cdots & 1\\
\omega^0 & \omega & \omega^2 &\cdots & \omega^{n-1}\\
\omega^0 & \omega^2 & \omega^4 & \cdots & \omega^{2(n-1)}\\
\cdots & \cdots & \cdots & \cdots & \cdots \\
\omega^0 & \omega^{n-1} & \omega^{2(n-1)} & \cdots & \omega^{(n-1)(n-1)}
\end{bmatrix}
\end{aligned}
\]
由Vandermonde行列式公式
$$
\det B=\prod_{0\leq i<j\leq n-1}(\omega^j-\omega^i)\neq 0
$$
因此公式
$$
\det A \det B = \det B \prod_{i=0}^{n-1} f(\omega^i)
$$
两边可以消去$\det B$得到轮回矩阵的行列式
$$
\det A=\prod_{i=0}^{n-1} f(\omega^i)
$$
:::

::: example
集合$\{1,2,\cdots,n\}$到自身的一个一一映射称为一个$n$元置换。
给定$n$元置换$\sigma$，我们可以把它对应到一个$n$阶方阵$A_\sigma$，其矩阵元$a_{ij}$定义为
$$
a_{ij}=\begin{cases}
 1 & \text{如果$\sigma(i)=j$}\\
 0 & \text{其它}
\end{cases}
$$
即$A_\sigma$的第$i$行只有其第$\sigma(i)$列非$0$且其值是$1$。例如5元置换

```tikz
\begin{tikzpicture}[scale=1.5]
\node at (0, 1) {1};
\node at (1, 1) {2};
\node at (2, 1) {3};
\node at (3, 1) {4};
\node at (4, 1) {5};
\node at (0, 0) {3};
\node at (1, 0) {5};
\node at (2, 0) {4};
\node at (3, 0) {1};
\node at (4, 0) {2};
\draw[->,double,thick] (2, 1-0.3) -- (2, 0+0.3);
\end{tikzpicture}
```

对应的矩阵为
$$
\begin{bmatrix}
0 & 0 & 1 & 0 & 0\\
0 & 0 & 0 & 0 & 1\\
0 & 0 & 0 & 1 & 0\\
1 & 0 & 0 & 0 & 0\\
0 & 1 & 0 & 0 & 0
\end{bmatrix}
$$

我们可以不断通过交换两行的变换把$A_\sigma$变为单位矩阵，而每次交换行列式变号。因此
$$
\det A_\sigma=\pm 1
$$
置换$\sigma$称为偶置换，如果$\det A_\sigma=1$；$\sigma$称为奇置换，如果$\det A_\sigma=-1$。
可以看出，$\sigma$的奇偶性与还原到单位矩阵需要经过的对换次数的奇偶性是一样的。
因此这里用行列式定义的置换奇偶性和[“行列式的组合定义”一节](@sec:det-permutation)中定义的奇偶性是等价的，
即
$$
\operatorname{sign} \sigma=\det A_{\sigma}
$$

例如置换$\sigma: \{1,2,3,4,5\}\to \{3,5,4,1,2\}$

```tikz
\begin{tikzpicture}[scale=1.5]
\node at (0, 1) {1};
\node at (1, 1) {2};
\node at (2, 1) {3};
\node at (3, 1) {4};
\node at (4, 1) {5};
\draw[->] (0, 1-0.2) -- (2, 0+0.2);
\draw[->] (2, 1-0.2) -- (0, 0+0.2);
\node at (0, 0) {3};
\node at (1, 0) {2};
\node at (2, 0) {1};
\node at (3, 0) {4};
\node at (4, 0) {5};
{
\draw[->] (1, 0-0.2) -- (4, -1+0.2);
\draw[->] (4, 0-0.2) -- (1, -1+0.2);
\node at (0, -1) {3};
\node at (1, -1) {5};
\node at (2, -1) {1};
\node at (3, -1) {4};
\node at (4, -1) {2};
}
{
\draw[->] (2, -1-0.2) -- (3, -2+0.2);
\draw[->] (3, -1-0.2) -- (2, -2+0.2);
}
\node at (0, -2) {3};
\node at (1, -2) {5};
\node at (2, -2) {4};
\node at (3, -2) {1};
\node at (4, -2) {2};
\end{tikzpicture}
```

可以通过3个对换复合得到，因此它是奇置换。我们也可以通过其对应的行列式看出
$$
\begin{vmatrix}
0 & 0 & 1 & 0 & 0\\
0 & 0 & 0 & 0 & 1\\
0 & 0 & 0 & 1 & 0\\
1 & 0 & 0 & 0 & 0\\
0 & 1 & 0 & 0 & 0
\end{vmatrix}=-1 \quad \Longrightarrow \quad \operatorname{sign} \sigma=-1
$$

两个置换$\sigma, \rho$的复合$\sigma\circ \rho$依然是一个$n$元置换。容易验证
$$
A_{\sigma\circ \rho}=A_\sigma A_\rho
$$

```tikz
\begin{tikzpicture}[
  state/.style={circle, draw, minimum size=1cm}
]
  \usetikzlibrary{positioning}
  \tikzset{node distance=2cm}
  \node[state] (i) {$i$};
  \node[state] (k) [right=of i] {$\rho(i)$};
  \node[state] (j) [right=of k] {$\sigma(\rho(i))$};
    \draw[->, thick] (i) -- (k) node[midway, above] {$A_\rho$};
    \draw[->, thick] (k) -- (j) node[midway, above] {$A_\sigma$};
\end{tikzpicture}
```

于是$
\det A_{\sigma\circ \rho}=\det A_\sigma  \det A_\rho
$。因此置换复合满足
\[
\begin{aligned}
&\text{奇置换} \times \text{奇置换} \to \text{偶置换}\\
&\text{奇置换} \times \text{偶置换} \to \text{奇置换}\\
&\text{偶置换} \times \text{偶置换} \to \text{偶置换}
\end{aligned}
\]
:::
