---
title: 矩阵的基本运算
---

## 矩阵的加法与数乘*

一个$m\times n$矩阵记为
$$
A=\begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
$$
第$i$行第$j$列的元素$a_{ij}$称为矩阵$A$的$(i,j)$分量。我们通常也把矩阵$A$用其元素记作
$$
A=(a_{ij})
$$

::: definition
两个$m\times n$矩阵
$$
A=\begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}\quad B=\begin{bmatrix}
 b_{11} & b_{12} & \cdots & b_{1n}\\
 b_{21} & b_{22} & \cdots & b_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 b_{m1} & b_{m2} & \cdots & b_{mn}
\end{bmatrix}
$$
的加法$A+B$  定义为如下的$m\times n$矩阵
$$
A+B=\begin{bmatrix}
 a_{11}+b_{11} & a_{12}+b_{12} & \cdots & a_{1n}+b_{1n}\\
 a_{21}+b_{21} & a_{22}+b_{22} & \cdots & a_{2n}+b_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{m1}+b_{m1} & a_{m2}+b_{m2} & \cdots & a_{mn}+b_{mn}
\end{bmatrix}
$$

如果用分量来表达的话
$$
A=(a_{ij})\quad\quad  B=(b_{ij})
$$
则$A+B$为对应的分量相加
$$
A+B=(a_{ij}+b_{ij})
$$
:::

由 @prop:map-matrix 我们知道$m\times n$矩阵一一对应于$\mathbb{R} ^n\to \mathbb{R} ^m$的线性映射。
考虑两个线性映射$f, g:\mathbb{R} ^n\to \mathbb{R} ^m$，
它们的和$f+g$定义了一个$\mathbb{R} ^n\to \mathbb{R} ^m$的线性映射
$$
(f+g)(\vec{x})=f(\vec{x})+g(\vec{x})
$$
如果$f$对应于矩阵$A$，$g$对应于矩阵$B$，容易看出
$$
f+g \quad \Longleftrightarrow \quad A+B
$$

::: definition
给定一个数$\lambda\in k$和一个$m\times n$矩阵
$$
A=\begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
$$
我们定义它们的数乘$\lambda A$为$m\times n$矩阵
$$
\lambda A=\begin{bmatrix}
 \lambda a_{11} & \lambda a_{12} & \cdots & \lambda a_{1n}\\
 \lambda a_{21} & \lambda a_{22} & \cdots & \lambda a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 \lambda a_{m1} & \lambda a_{m2} & \cdots & \lambda a_{mn}
\end{bmatrix}
$$
:::

我们用$M_{m\times n}(k)$来表示所有数域$k$中的$m\times n$矩阵构成的集合（$k=\mathbb{R} $或
$\mathbb{C} $）。如果不特别标记数域，$M_{m\times n}$指的是实系数的$m\times n$矩阵的集合
$$
M_{m\times n}=M_{m\times n}(\mathbb{R} )
$$

::: proposition
$M_{m\times n}$在矩阵的加法和数乘下构成一个线性空间。
:::

通过矩阵的分量，我们可以把矩阵$A=(a_{ij})$一一对应于$mn$个实数$a_{ij}$。因此
$$
\dim M_{m\times n}=mn
$$

## 矩阵的乘法*

矩阵之间可以引进乘法运算。
为了说明如何定义矩阵相乘，我们把一个矩阵$A=(a_{ij})$的$(i,j)$分量表示成一个箭头的样子

```tikz
\begin{tikzpicture}[
  state/.style={circle, draw, minimum size=1cm}
]
  \usetikzlibrary{positioning}
  \tikzset{node distance=2cm}
  \node[state] (i) {$i$};
  \node[state] (j) [right=of i] {$j$};
  \draw[->, thick] (i) -- (j) node[midway, above] {$a_{ij}$};
\end{tikzpicture}
```

我们把$a_{ij}$想象成从节点$i$到另一个节点$j$的权值。

设$A$是一个$m\times p$矩阵，$B$是一个$p\times n$矩阵。
\[
\begin{aligned}
&A=(a_{ik}),\quad i=1,\cdots, m\quad k=1,\cdots, p.\\
&B=(b_{kj}),\quad k=1,\cdots, p\quad j=1,\cdots, n.\\
\end{aligned}
\]

```tikz
\begin{tikzpicture}[
  state/.style={circle, draw, minimum size=1cm}
]
  \usetikzlibrary{positioning}
  \tikzset{node distance=2cm}
  \node[state] (i) {$i$};
  \node[state] (k1) [right=of i] {${\color{red}{k}}$};
  \node[state] (k2) [right=of k1] {${\color{red}{k}}$};
  \node[state] (j) [right=of k2] {$j$};
  \draw[->, thick] (i) -- (k1) node[midway, above] {$a_{ik}$};
  \draw[->, thick] (k2) -- (j) node[midway, above] {$b_{kj}$};
\end{tikzpicture}
```

这里$k$的指标都是从$1,\cdots,p$，我们可以把中间这个节点连接起来

```tikz
\begin{tikzpicture}[
  state/.style={circle, draw, minimum size=1cm}
]
  \usetikzlibrary{positioning}
  \tikzset{node distance=2cm}
  \node[state] (i) {$i$};
  \node[state] (k) [right=of i] {{\color{red}{$k$}}};
  \node[state] (k1) [above=1cm of k] {${\color{red}{1}}$};
  \node[state] (k2) [below=1cm of k] {${\color{red}{p}}$};
  \node[state] (j) [right=of k] {$j$};
  \draw[->, thick] (i) -- (k1) node[midway, above] {$a_{i1}$};
    \draw[->, thick] (i) -- (k) node[midway, above] {$a_{ik}$};
    \draw[->, thick] (i) -- (k2) node[midway, below] {$a_{ip}$};
  \draw[->, thick] (k1) -- (j) node[midway, above] {$b_{1j}$};
    \draw[->, thick] (k) -- (j) node[midway, above] {$b_{kj}$};
    \draw[->, thick] (k2) -- (j) node[midway, below] {$b_{pj}$};
    \draw[thick, loosely dotted] (k) -- (k1);
    \draw[thick, loosely dotted] (k) -- (k2);
\end{tikzpicture}
```

我们考虑从$i$出发，经过中间节点$k$，最后到$j$的过程，
并对所有的中间节点$k$的位置求和得到一个从$i$到$j$的权值$c_{ij}=\sum\limits_{k=1}^p a_{ik}b_{kj}
$。这组新的数字$c_{ij}$定义了一个$m\times n$的矩阵，记作
$$
C=(c_{ij})
$$
这个新矩阵$C$就是矩阵$A$和$B$的乘积。

::: definition
设$A$是一个$m\times p$矩阵，$B$是一个$p\times n$矩阵。
它们的乘积$C=AB$定义为$m\times n$矩阵，其中$C$的$(i,j)$分量为
$$
c_{ij}=\sum\limits_{k=1}^p a_{ik}b_{kj}
$$
这里$a_{ik}$是$A$的$(i,k)$分量，$b_{kj}$是$B$的$(k,j)$分量。
:::

我们强调一下，并不是任意两个矩阵都可以相乘。
这里两个矩阵$A, B$可以相乘的前提是$A$的列数和$B$的行数一样的，即“首尾相接”。
$$
M_{m\times p} \times M_{p\times n}\stackrel{\text{相乘}}{\to} M_{m\times n}
$$

```tikz
\begin{tikzpicture}[
  state/.style={circle, draw, minimum size=1cm}
]
  \usetikzlibrary{positioning}
  \tikzset{node distance=2cm}
  \node[state] (i) {$i$};
  \node[state,, fill=red!50] (k) [right=of i] {};
  \node[state] (j) [right=of k] {$j$};
    \draw[->, thick] (i) -- (k) node[midway, above] {$a_{i\bullet}$};
    \draw[->, thick] (k) -- (j) node[midway, above] {$b_{\bullet j}$};
\end{tikzpicture}
```

$$
c_{ij}=\sum\limits_{k=1}^p a_{ik}b_{kj}
$$

这个公式也表明$(AB)$的$(i,j)$分量$c_{ij}$，是$A$的第$i$行向量
$
\begin{bmatrix}
a_{i1}& \cdots & a_{ip}
\end{bmatrix}
$
和$B$的第$j$列向量
$
\begin{bmatrix}
b_{1j}\\ \vdots \\ b_{pj}
\end{bmatrix}
$对应位置的数字乘起来求和
$$
a_{i1}b_{1j}+a_{i2}b_{2j}+\cdots+ a_{ip}b_{pj}.
$$

\[
\begin{aligned}
&\begin{bmatrix}
  a_{11} &  a_{12} & \cdots & a_{1p}\\
   \cdots & \cdots & \cdots & \cdots\\
  {\color{red}{a_{i1} }}& {\color{red}{a_{i2}}} & \cdots & {\color{red}{a_{ip}}}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{m1} &  a_{m2} & \cdots & a_{mp}
\end{bmatrix}
\begin{bmatrix}
  b_{11} &  \cdots  & {\color{red}{b_{1j}}} &\cdots  & b_{1n}\\
   b_{21} & \cdots & {\color{red}{b_{2j}}} &\cdots & b_{2n}\\
  \vdots  & \cdots & \vdots &\cdots & \vdots \\
 b_{p1} &  \cdots & {\color{red}{b_{pj}}} &\cdots & b_{pn}
\end{bmatrix}\\
=&\begin{bmatrix}
  \sum\limits_{k}a_{1k}b_{k1} &  \sum\limits_{k}a_{1k}b_{k2}  & \cdots & \sum\limits_{k}a_{1k}b_{kn} \\
   \cdots & \cdots & \cdots & \cdots\\
  \sum\limits_{k}a_{ik}b_{k1} & \cdots & {\color{red}{\sum\limits_{k}a_{ik}b_{kj} }} & \cdots \\
 \cdots & \cdots & \cdots & \cdots\\
 \sum\limits_{k}a_{mk}b_{k1}  &  \sum\limits_{k}a_{mk}b_{k2} & \cdots & \sum\limits_{k}a_{mk}b_{kn}
\end{bmatrix}.
\end{aligned}
\]

::: example
\[
\begin{aligned}
\begin{bmatrix}
{\color{blue}{1}} & {\color{blue}{0}} & {\color{blue}{2}} \\
{\color{red}{0}} & {\color{red}{1}} & {\color{red}{1}}
\end{bmatrix}
\begin{bmatrix}
1 & {\color{blue}{1}} & {\color{red}{0}} & 1 \\
0 & {\color{blue}{1}} & {\color{red}{1}} & 0 \\
1 & {\color{blue}{0}} & {\color{red}{1}} & 1
\end{bmatrix}
&=
\begin{bmatrix}
3 & {\color{blue}{1}} & 2 & 3 \\
1 & 1 & {\color{red}{2}} & 1
\end{bmatrix}.
\end{aligned}
\]
:::

我们同样可以把多个矩阵相乘。
设$A_1, A_2, \cdots, A_s$依次是$m\times p_1, p_1\times p_2,\cdots, p_{s-1}\times n$矩阵。
则它们的乘积$A_1A_2\cdots A_s$是一个$m\times n$矩阵，其$(i,j)$分量为
$$
(A_1A_2\cdots A_s)_{ij}=\sum\limits_{k_1=1}^{p_1}\cdots \sum\limits_{k_{s-1}=1}^{p_{s-1}}(A_1)_{ ik_1}(A_2)_{k_1k_2}\cdots (A_s)_{k_{s-1}j}
$$
这里$(A_r)_{kl}$是矩阵$A_r$的$(k,l)$分量。我们可以画图表示为

```tikz
\begin{tikzpicture}[
  state/.style={circle, draw, minimum size=1cm}
]
  \usetikzlibrary{positioning}
  \tikzset{node distance=2cm}
  \node[state] (i) {$i$};
  \node[state, fill=red!50] (k) [right=of i] {};
    \node[state, fill=red!50] (s) [right=of k] {};
  \node[state] (j) [right=of s] {$j$};
    \draw[->, thick] (i) -- (k) node[midway, above] {$(A_1)_{i\bullet}$};
    \draw[->, thick] (s) -- (j) node[midway, above] {$(A_s)_{\bullet j}$};
    \draw[->, thick,dashed] (k) -- (s) node[midway, above] {};
\end{tikzpicture}
```

矩阵的乘法满足结合律
$$
(AB)C=A(BC)=ABC,
$$
这里$A$是$m\times p$矩阵，$B$是$p\times q$矩阵，$C$是$q\times n$矩阵。结合律等价于如下的求和等式
$$
\sum\limits_{l=1}^q \sum\limits_{k=1}^p (A)_{ik}(B)_{kl}(C)_{lj}=\sum\limits_{k=1}^p \sum\limits_{l=1}^q (A)_{ik}(B)_{kl}(C)_{lj}
$$

## 线性映射的复合*

我们知道线性映射一一对应于矩阵。
下面我们说明矩阵的乘法对应于线性映射的复合，这给出了矩阵乘法定义方式的一个自然的解释。设
$$
f: \mathbb{R} ^p\to \mathbb{R} ^m,\quad g: \mathbb{R} ^n\to \mathbb{R} ^p
$$
是两个线性映射。它们的复合得到一个映射
$$
f\circ g: \mathbb{R} ^n\to \mathbb{R} ^m
$$
$f\circ g$依然是一个线性映射：它保加法
$$
f(g(\vec{u}+\vec{v}))\stackrel{\text{$g$线性}}{=}f(g(\vec{u})+g(\vec{v}))\stackrel{\text{$f$线性}}{=}f(g(\vec{u}))+f(g(\vec{v}))
$$
类似可证$f\circ g$保数乘。

::: proposition
如果线性映射$f: \mathbb{R} ^p\to \mathbb{R} ^m$对应于$m\times p$矩阵$A$，
$g: \mathbb{R} ^n\to \mathbb{R} ^p$对应于$p\times n$矩阵$B$。
则它们的复合$f\circ g: \mathbb{R} ^n\to \mathbb{R} ^m$对应于$m\times n$矩阵$AB$。
即矩阵的乘法对应于线性映射的复合。
:::

::: proof
记$\mathbb{R} ^n$的标准基
$$
\vec{e}_1=\begin{bmatrix}
1\\0\\ \vdots \\ 0
\end{bmatrix} \quad  \vec{e}_2=\begin{bmatrix}
0\\1\\ \vdots \\ 0
\end{bmatrix}\quad\cdots\quad
\vec{e}_n=\begin{bmatrix}
0\\0\\ \vdots \\ 1
\end{bmatrix}
$$
和$\mathbb{R} ^p$的标准基
$$
\vec{u}_1=\begin{bmatrix}
1\\0\\ \vdots \\ 0
\end{bmatrix} \quad  \vec{u}_2=\begin{bmatrix}
0\\1\\ \vdots \\ 0
\end{bmatrix}\quad\cdots\quad
\vec{u}_p=\begin{bmatrix}
0\\0\\ \vdots \\ 1
\end{bmatrix}
$$

$g: \mathbb{R} ^n\to \mathbb{R} ^p$对应的$p\times n$矩阵$B$为
$$
B=\begin{bmatrix}
g(\vec{e}_1)& g(\vec{e}_2) & \cdots &g(\vec{e}_n)
\end{bmatrix},
$$
用矩阵元可以写成
$$
g(\vec{e}_j)=\begin{bmatrix}
b_{1j}\\ b_{2j} \\ \vdots \\ b_{pj}
\end{bmatrix}=b_{1j}\vec{u}_1+\cdots+b_{pj}\vec{u}_p
$$

$f: \mathbb{R} ^p\to \mathbb{R} ^m$对应的$m\times p$矩阵$A$为
$$
A=\begin{bmatrix}
f(\vec{u}_1)& f(\vec{u}_2)\cdots &f(\vec{u}_p)
\end{bmatrix},
$$
用矩阵元可以写成
$$
f(\vec{u}_k)=\begin{bmatrix}
a_{1k}\\ a_{2k} \\ \vdots \\ a_{mk}
\end{bmatrix}
$$

我们考虑复合$f\circ g: \mathbb{R} ^n\to \mathbb{R} ^m$，其对应于矩阵
$$
\begin{bmatrix}
f(g(\vec{e}_1))& f(g(\vec{e}_2))& \cdots & f(g(\vec{e}_n))
\end{bmatrix}
$$
它的第$j$列为
\[
\begin{aligned}
f(g(\vec{e}_j))=&f(b_{1j}\vec{u}_1+\cdots+b_{pj}\vec{u}_p)=b_{1j}f(\vec{u}_1)+\cdots+b_{pj}f(\vec{u}_p)\\
=&b_{1j}\begin{bmatrix}
a_{11}\\ a_{21} \\ \vdots \\ a_{m1}
\end{bmatrix}+\cdots+ b_{pj}\begin{bmatrix}
a_{1p}\\ a_{2p} \\ \vdots \\ a_{mp}
\end{bmatrix}=\begin{bmatrix}
\sum\limits_{k=1}^p a_{1k}b_{kj}\\ \sum\limits_{k=1}^p a_{2k}b_{kj} \\ \vdots \\ \sum\limits_{k=1}^p a_{mk}b_{kj}
\end{bmatrix}.
\end{aligned}
\]
因此$f\circ g$对应的矩阵
\[
\begin{aligned}
\begin{bmatrix}
f(g(\vec{e}_1))& f(g(\vec{e}_2))& \cdots & f(g(\vec{e}_n))
\end{bmatrix}=
\begin{bmatrix}
  \sum\limits_{k}a_{1k}b_{k1} &  \sum\limits_{k}a_{1k}b_{k2}  & \cdots & \sum\limits_{k}a_{1k}b_{kn} \\
   \cdots & \cdots & \cdots & \cdots\\
  \sum\limits_{k}a_{ik}b_{k1} & \cdots & {\color{red}{\sum\limits_{k}a_{ik}b_{kj} }} & \cdots \\
 \cdots & \cdots & \cdots & \cdots\\
 \sum\limits_{k}a_{mk}b_{k1}  &  \sum\limits_{k}a_{mk}b_{k2} & \cdots & \sum\limits_{k}a_{mk}b_{kn}
\end{bmatrix}
\end{aligned}
\]
即为矩阵$A$和$B$的乘积$AB$。
:::

我们可以对比一下矩阵乘积的表示法

```tikz
\begin{tikzpicture}[
  state/.style={circle, draw, minimum size=1cm}
]
  \usetikzlibrary{positioning}
  \tikzset{node distance=2cm}
  \node[state] (i) {$i$};
  \node[state] (k) [right=of i] {};
  \node[state] (j) [right=of k] {$j$};
    \draw[->, thick] (i) -- (k) node[midway, above] {$a_{i\bullet}$};
    \draw[->, thick] (k) -- (j) node[midway, above] {$b_{\bullet j}$};
\end{tikzpicture}
```

和映射复合的表示法

```tikz
\begin{tikzpicture}[
  state/.style={circle, draw, minimum size=1cm}
]
  \usetikzlibrary{positioning}
  \tikzset{node distance=2cm}
  \node[state] (i) {$\mathbb{R} ^m$};
  \node[state] (k) [right=of i] {$\mathbb{R} ^p$};
  \node[state] (j) [right=of k] {$\mathbb{R} ^n$};
    \draw[->, thick] (k) -- (i) node[midway, above] {$f$};
    \draw[->, thick] (j) -- (k) node[midway, above] {$g$};
\end{tikzpicture}
```

矩阵乘法的结合律对应于映射复合的结合律。

我们可以用矩阵把线性映射写成显式的形式。
设$f:\mathbb{R} ^n\to \mathbb{R} ^m$是线性映射，对应于$m\times n$矩阵$A$
$$
A=\begin{bmatrix}
f(\vec{e}_1)& f(\vec{e}_2)\cdots &f(\vec{e}_n)
\end{bmatrix}
=\begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
$$
对于$\mathbb{R} ^n$中任一向量 $\vec{x}=\begin{bmatrix}
x_1 \\ x_2\\ \cdots \\ x_n
\end{bmatrix}=x_1 \vec{e}_1+\cdots+ x_n \vec{e}_n$

\[
\begin{aligned}
&f(\vec{x})=x_1 f(\vec{e}_1)+\cdots + x_n f(\vec{e}_n)\\
=&\begin{bmatrix}
a_{11}x_1+a_{12}x_2+\cdots a_{1n}x_n \\ a_{21}x_1+a_{22}x_2+\cdots a_{2n}x_n \\ \cdots \\ a_{m1}x_1+a_{m2}x_2+\cdots a_{mn}x_n
\end{bmatrix}=\begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}\begin{bmatrix}
x_1 \\ x_2\\ \cdots \\ x_n
\end{bmatrix}
\end{aligned}
\]
因此写成向量形式，线性映射$f:\mathbb{R} ^n\to \mathbb{R} ^m$
$$
f: \begin{bmatrix}
x_1 \\ x_2\\ \cdots \\ x_n
\end{bmatrix}\mapsto \begin{bmatrix}
 a_{11} & a_{12} & \cdots & a_{1n}\\
 a_{21} & a_{22} & \cdots & a_{2n}\\
 \cdots & \cdots & \cdots & \cdots\\
 a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}\begin{bmatrix}
x_1 \\ x_2\\ \cdots \\ x_n
\end{bmatrix}
$$
恰好是把$n$维列向量（即$n\times 1$矩阵）乘以$m\times n$矩阵$A$，
得到$m$维列向量（即$m\times 1$矩阵）。

总结一下，线性映射和矩阵的关系可以用矩阵乘法表达为
\[
\begin{aligned}
  f: \mathbb{R} ^n & \to \mathbb{R} ^m\\
  f(\vec{x})&=A\vec{x},\quad \quad \quad \vec{x}=\begin{bmatrix}
x_1 \\ x_2\\ \cdots \\ x_n
\end{bmatrix}
\end{aligned}
\]

## 分块矩阵*

分块矩阵是指将矩阵按照某种方式划分成若干个小矩阵（块）。
分块矩阵是将大矩阵分解为较小矩阵的一种有效方法，有助于简化计算和表示结构化数据。

一个$m \times n $矩阵可以分块表示为
\[
A = \begin{bmatrix}
A_{11} & A_{12} & \cdots & A_{1n} \\
A_{21} & A_{22} & \cdots & A_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
A_{m1} & A_{m2} & \cdots & A_{mn}
\end{bmatrix}
\]
其中$A_{ij}$是块矩阵的元素，通常是较小的矩阵。
例如，$A_{ij}$可以是 $p_i \times q_j$矩阵，其中$p_i$和$q_j$是适当选择的维度。

假设我们有两个矩阵$A$和$B$，它们分别分块表达为：
\[
A = \begin{bmatrix}
A_{11} & A_{12} \\
A_{21} & A_{22}
\end{bmatrix} \qquad
B = \begin{bmatrix}
B_{11} & B_{12} \\
B_{21} & B_{22}
\end{bmatrix}
\]
其中$A_{ij}$和$B_{ij}$的维度需要满足乘法的条件。乘积$C = AB$ 也会是一个分块矩阵：
\[
C = \begin{bmatrix}
C_{11} & C_{12} \\
C_{21} & C_{22}
\end{bmatrix}
\]
其中每个块的计算可以通过类似的矩阵乘法公式得到：
\[
C_{ij} =\sum_k A_{ik}B_{kj}
\]

具体而言，我们有
$$
C=\begin{bmatrix}
A_{11}B_{11} + A_{12}B_{21} &  A_{11}B_{12} + A_{12}B_{22}\\
A_{21}B_{11} + A_{22}B_{21} &  A_{21}B_{12} + A_{22}B_{22}
\end{bmatrix}
$$

::: remark*
注意到$A_{ij}, B_{ij}$都是一些矩阵块而不再是数字，公式里每个矩阵块的乘积表达顺序是重要的。
这里我们需要按照乘积顺序把$A$的矩阵块写在前面，$B$的矩阵块写在后面。
例如$C_{11}$的矩阵元是$A_{11}B_{11} + A_{12}B_{21}$，而不能写成$B_{11}A_{11} + B_{21}A_{12}$。
类似地矩阵乘法公式对于多个分块也是成立的，具体细节留给读者证明。
:::

::: example
考虑把如下矩阵进行分块：
\[
A = \begin{bmatrix}
\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} & \begin{bmatrix} 5 \\ 6 \end{bmatrix} \\
\begin{bmatrix} 7 & 8 \end{bmatrix} &  9
\end{bmatrix} \qquad
B = \begin{bmatrix}
\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} & \begin{bmatrix} 2 \\ 3 \end{bmatrix} \\
\begin{bmatrix} 4 & 5 \end{bmatrix} &  6
\end{bmatrix}
\]

按照如上分块计算矩阵乘积$C=AB$
\[
\begin{aligned}
&C_{11}  = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} + \begin{bmatrix} 5 \\ 6 \end{bmatrix} \begin{bmatrix} 4 & 5 \end{bmatrix}= \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} + \begin{bmatrix} 20 & 25 \\
24 & 30\end{bmatrix}= \begin{bmatrix} 21 & 27 \\ 27 & 34 \end{bmatrix}
\\
&C_{12}= \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \begin{bmatrix} 2 \\ 3 \end{bmatrix} + \begin{bmatrix} 5 \\ 6 \end{bmatrix} 6
=\begin{bmatrix}
8\\18
\end{bmatrix}+\begin{bmatrix}
30\\ 36
\end{bmatrix}=\begin{bmatrix}
38 \\ 54
\end{bmatrix}
\\
&C_{21}=\begin{bmatrix} 7 & 8 \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}+9 \begin{bmatrix} 4 & 5 \end{bmatrix}=\begin{bmatrix} 7 & 8 \end{bmatrix}+\begin{bmatrix} 36 & 45 \end{bmatrix}=\begin{bmatrix} 43 & 53 \end{bmatrix}
\\
&C_{22}=\begin{bmatrix} 7 & 8 \end{bmatrix}\begin{bmatrix} 2 \\ 3 \end{bmatrix}+9*6=38+54=92
\end{aligned}
\]
因此我们得到矩阵$AB$的分块表达
$$
AB=\begin{bmatrix}
\begin{bmatrix} 21 & 27 \\ 27 & 34 \end{bmatrix} & \begin{bmatrix}
38 \\ 54
\end{bmatrix}\\
\begin{bmatrix} 43 & 53 \end{bmatrix} & 92
\end{bmatrix}
$$
:::

::: example
设$A$是$m\times p$矩阵，$B$是$p\times n$矩阵。它们的乘积$AB$是$m\times n$矩阵。
我们可以通过分块来得到乘积$AB$的行和列的表达。

首先我们把$B$分块成列向量的样子
$$
B=\begin{bmatrix}
\vec{\beta}_1 & \vec{\beta}_2 & \cdots & \vec{\beta}_n
\end{bmatrix}
$$
这里$\vec{\beta}_j$是$\mathbb{R} ^p$中的列向量。则作为分块矩阵，我们得到如下公式
$$
AB=A\begin{bmatrix}
\vec{\beta}_1 & \vec{\beta}_2 & \cdots & \vec{\beta}_n
\end{bmatrix}=\begin{bmatrix}
A\vec{\beta}_1 & A\vec{\beta}_2 & \cdots & A\vec{\beta}_n
\end{bmatrix}
$$
即$AB$的第$j$列的列向量为$A\vec{\beta}_j$。

类似地，我们把$A$分块成行向量的样子
$$
A=\begin{bmatrix}
\vec{\alpha}_1 \\ \vec{\alpha}_2 \\ \vdots \\
\vec{\alpha}_m
\end{bmatrix}
$$
这里$\vec{\alpha}_i$是$\mathbb{R} ^p$中的行向量。则作为分块矩阵，我们得到如下公式
$$
AB=\begin{bmatrix}
\vec{\alpha}_1 \\ \vec{\alpha}_2 \\ \vdots \\
\vec{\alpha}_m
\end{bmatrix}B=\begin{bmatrix}
\vec{\alpha}_1 B \\ \vec{\alpha}_2 B\\ \vdots \\
\vec{\alpha}_m B
\end{bmatrix}
$$
即$AB$的第$i$行的行向量为$\vec{\alpha}_i B$。

上面两个公式也可以直接通过矩阵乘法的定义来验证。
:::
