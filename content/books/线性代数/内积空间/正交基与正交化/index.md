---
title: 正交基与正交化
---

设 $(V,\langle \cdot, \cdot \rangle)$ 是一个$n$维欧几里得空间。
这一节我们说明可以在$V$中找一组方便的基，
使得在这组基下$V$上的几何结构与$n$维标准欧几里得空间$\mathbb{R} ^n$一样。
这样我们可以把对一般的$n$维欧几里得空间的讨论约化到标准欧几里得空间$\mathbb{R} ^n$。

## Gram–Schmidt正交化*

::: proposition {@prop:orth-linear-ind}
设$\{\vec{\alpha}_1,\cdots,\vec{\alpha}_m\}$是欧几里得空间$V$中$m$个两两正交的非零向量，即
$$
\langle \vec{\alpha}_i, \vec{\alpha}_j \rangle =0\qquad i\neq j, \quad i,j=1,\cdots, m
$$
则$\{\vec{\alpha}_1,\cdots,\vec{\alpha}_m\}$线性无关。
:::

::: proof
设$\vec{\beta}=c_1 \vec{\alpha}_1+\cdots + c_m \vec{\alpha}_m=0$，则对$i=1,\cdots,m$
$$
0=\langle \vec{\alpha}_i, \beta \rangle = c_i \langle \vec{\alpha}_i, \vec{\alpha}_i\rangle \quad \Longrightarrow \quad  c_i=0
$$
因此$\{\vec{\alpha}_1,\cdots,\vec{\alpha}_m\}$线性无关。
:::

这个命题说明，在$n$维欧几里得空间中两两正交的非零向量组最多包含$n$个向量。

::: definition
欧几里得空间$V$的一组基如果由两两正交的向量构成，则称这组基为正交基。
:::

下面这个命题给出了具体构造正交基的方法。

::: proposition [Gram–Schmidt正交化]
设 $(V,\langle \cdot, \cdot \rangle)$ 是$n$维欧几里得空间，
$\{\vec{\alpha}_1,\cdots,\vec{\alpha}_n\}$是$V$的一组基。
则存在一组正交基$\{\vec{\beta}_1,\cdots,\vec{\beta}_n\}$，
使得从基$\{\vec{\alpha}_i\}$到$\{\vec{\beta}_i\}$的过渡矩阵$P$是上三角矩阵
\[
\begin{aligned}
\begin{bmatrix}
\vec{\beta}_1 & \vec{\beta}_2 & \cdots & \vec{\beta}_n
\end{bmatrix}
=\begin{bmatrix}
\vec{\alpha}_1 & \vec{\alpha}_2 & \cdots &\vec{\alpha}_n
\end{bmatrix} P
\end{aligned}
\]
:::

::: proof
我们依次构造$\vec{\beta}_1,\cdots,\vec{\beta}_n$使得对任意$k$
$$
\operatorname{Span}\{\vec{\alpha}_1, \cdots, \vec{\alpha}_k\}=\operatorname{Span}\{\vec{\beta}_1,\cdots,\vec{\beta}_k\}
$$

首先对$k=1$，我们取$\vec{\beta}_1=\vec{\alpha}_1$，显然满足
$$
\operatorname{Span}\{\vec{\alpha}_1\}=\operatorname{Span}\{\vec{\beta}_1\}
$$

假设我们已构造了两两正交的$\vec{\beta}_1,\cdots,\vec{\beta}_{k-1}$使得
$$
\operatorname{Span}\{\vec{\alpha}_1, \cdots, \vec{\alpha}_{k-1}\}=\operatorname{Span}\{\vec{\beta}_1,\cdots,\vec{\beta}_{k-1}\}
$$
我们下面构造$\vec{\beta}_k=\vec{\alpha}_k+c_1\vec{\beta}_1+\cdots+ c_{k-1}\vec{\beta}_{k-1}$使得
$\vec{\beta}_k$与$\vec{\beta}_1,\cdots,\vec{\beta}_{k-1}$正交，这里系数$c_i$待定。

由归纳假设，向量$\vec{\beta}_1,\cdots,\vec{\beta}_{k-1}$两两正交。对$i=1,\cdots,k-1$，要求正交性
\[
\begin{aligned}
\langle \vec{\beta}_k, \vec{\beta}_i \rangle=&\langle \vec{\alpha}_k+c_1\vec{\beta}_1+\cdots+ c_{k-1}\vec{\beta}_{k-1}, \vec{\beta}_i \rangle\\
=& \langle \vec{\alpha}_k, \vec{\beta}_i \rangle+c_i\langle \vec{\beta}_i, \vec{\beta}_i \rangle=0
\end{aligned}
\]
可以解出系数
$$
c_i=-\frac{\langle \vec{\alpha}_k, \vec{\beta}_i \rangle}{\langle \vec{\beta}_i, \vec{\beta}_i \rangle}
$$

因此我们可以具体写下$\vec{\beta}_k$为
$$
\vec{\beta}_k=\vec{\alpha}_k-\sum_{i=1}^{k-1}\frac{\langle \vec{\alpha}_k, \vec{\beta}_i \rangle}{\langle \vec{\beta}_i, \vec{\beta}_i \rangle} \vec{\beta}_i
$$
由构造，$\{\vec{\beta}_1,\cdots,\vec{\beta}_k\}$是两两正交的向量，且
\[
\begin{aligned}
\operatorname{Span}\{\vec{\alpha}_1, \cdots,\vec{\alpha}_{k-1}, \vec{\alpha}_k\}
=\operatorname{Span}\{\vec{\beta}_1,\cdots,\vec{\beta}_{k-1},\vec{\alpha}_k\}
=\operatorname{Span}\{\vec{\beta}_1,\cdots,\vec{\beta}_{k-1},\vec{\beta}_k\}
\end{aligned}
\]

由此我们依次构造了两两正交的向量$\vec{\beta}_1,\cdots,\vec{\beta}_n$使得对任意的$k$，
$$
\vec{\beta}_k\in \operatorname{Span}\{\vec{\alpha}_1, \cdots, \vec{\alpha}_k\}
$$
写成矩阵的形式，
$$
\begin{bmatrix}
\vec{\beta}_1 & \cdots & \vec{\beta}_n
\end{bmatrix}=\begin{bmatrix}
\vec{\alpha}_1 & \cdots & \vec{\alpha}_n
\end{bmatrix}
\begin{bmatrix}
{*} & * & \cdots & *\\
0 & * & \cdots & *\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & *
\end{bmatrix}
$$
即过渡矩阵是上三角矩阵。
:::

命题证明中由欧几里得空间中的任一组基$\{\vec{\alpha}_1,\cdots,\vec{\alpha}_n\}$得到正交基
$\{\vec{\beta}_1,\cdots,\vec{\beta}_n\}$的过程
$$
\vec{\beta}_k=\vec{\alpha}_k-\sum_{i=1}^{k-1}\frac{\langle \vec{\alpha}_k, \vec{\beta}_i \rangle}{\langle \vec{\beta}_i, \vec{\beta}_i \rangle} \vec{\beta}_i\qquad k=1,\cdots,n
$$
称为Gram–Schmidt正交化。

::: definition
$n$维欧几里得空间$V$的一组基$\{\vec{\gamma}_1,\cdots,\vec{\gamma}_n\}$称为是标准正交基，
如果它们两两正交并且长度为$1$
$$
\|\vec{\gamma}_i\|=1\qquad i=1,\cdots,n
$$
:::

::: proposition {@prop:orthonormal-exist}
$n$维欧几里得空间$V$存在标准正交基。
:::

::: proof
设$\{\vec{\alpha}_1,\cdots,\vec{\alpha}_n\}$是$V$的任一组基。
由Gram–Schmidt正交化，我们得到一组正交基$\{\vec{\beta}_1,\cdots,\vec{\beta}_n\}$。通过归一化定义
$$
\vec{\gamma}_i=\frac{\vec{\beta}_i}{\|\vec{\beta}_i\|}\qquad i=1,\cdots,n
$$
则$\{\vec{\gamma}_1,\cdots,\vec{\gamma}_n\}$是一组标准正交基。
:::

设$\{\vec{\gamma}_1,\cdots,\vec{\gamma}_n\}$是$V$的标准正交基，则其对应的Gram矩阵为
$$
G_{ij}=\langle \vec{\gamma}_i, \vec{\gamma}_j \rangle=\delta_{ij}
$$
即
$
G=I_n
$是单位矩阵。对于任意两个向量$\vec{x}=\sum\limits_{i=1}^nx_i \vec{\gamma}_i$和$\vec{y}=\sum\limits_{i=1}^n y_i \vec{\gamma}_i$，我们有

$$
\langle \vec{x},\vec{y} \rangle =\sum_{i=1}^n x_iy_i
$$
因此在标准正交基展开的坐标下，向量的内积公式和标准欧几里得空间一样。

::: example {@eg:Gram-Schmidt}
考虑标准欧几里得空间$\mathbb{R} ^3$的一组基
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
这组基不是正交基。我们对这组基作Gram–Schmidt 正交化。依次有
$$
\vec{\beta}_1=\vec{\alpha}_1
$$
$$
\vec{\beta}_2=\vec{\alpha}_2-\frac{\langle \vec{\alpha}_2, \vec{\beta}_1\rangle}{\langle \vec{\beta}_1, \vec{\beta}_1\rangle}\vec{\beta}_1=\begin{bmatrix}
0 \\ 1 \\ 1
\end{bmatrix} -\frac{2}{3}\begin{bmatrix}
1 \\ 1 \\ 1
\end{bmatrix}=\begin{bmatrix}
-2/3 \\ 1/3 \\ 1/3
\end{bmatrix}
$$
\[
\begin{aligned}
\vec{\beta}_3=&\vec{\alpha}_3-\frac{\langle \vec{\alpha}_3, \vec{\beta}_1\rangle}{\langle \vec{\beta}_1, \vec{\beta}_1\rangle}\vec{\beta}_1-\frac{\langle \vec{\alpha}_3, \vec{\beta}_2\rangle}{\langle \vec{\beta}_2, \vec{\beta}_2\rangle}\vec{\beta}_2\\
=&\begin{bmatrix}
0 \\ 0 \\ 1
\end{bmatrix}-\frac{1}{3}\begin{bmatrix}
1 \\ 1 \\ 1
\end{bmatrix}-\frac{1/3}{2/3}\begin{bmatrix}
-2/3 \\ 1/3 \\ 1/3
\end{bmatrix}=\begin{bmatrix}
0 \\ -1/2 \\ 1/2
\end{bmatrix}
\end{aligned}
\]

进一步作归一化，我们得到标准正交基
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
这组标准正交基与$\mathbb{R} ^3$的标准基$\{\vec{e}_1, \vec{e}_2, \vec{e}_3\}$是不一样的。
这个例子也说明标准正交基并不唯一。
:::

## 正交投影*

::: definition
设 $(V,\langle \cdot, \cdot \rangle)$ 是一个$n$维欧几里得空间，$U\subset V$是线性子空间。
我们定义$U$在$V$中的正交补空间为
$$
U^{\perp}:=\{\vec{\alpha}\in V| \langle\vec{\alpha},\vec{\beta} \rangle=0\ \text{对$U$中任意向量$\vec{\beta}$成立}\}
$$
即$\vec{\alpha}\in U^{\perp}$如果$\vec{\alpha}$与$U$中的任意向量都正交。
:::

我们选$U$中的一组基$\vec{\beta}_1,\cdots, \vec{\beta}_m$，
则$\vec{\alpha}\in U^{\perp}$当且仅当$\vec{\alpha}$与这组基向量正交
$$
\langle\vec{\alpha},\vec{\beta}_i \rangle=0 \qquad i=1,\cdots,m
$$
如果上式满足，则对于$U$中的任意向量$\vec{\beta}$，把它按照基做线性展开：
$\vec{\beta}=a_1 \vec{\beta}_1+\cdots+a_m \vec{\beta}_m$。则
$$
\langle\vec{\alpha},\vec{\beta}\rangle=a_1 \langle\vec{\alpha},\vec{\beta}_1 \rangle+\cdots+a_m\langle\vec{\alpha},\vec{\beta}_m \rangle=0
$$

::: example
$\mathbb{R} ^4$是4维标准欧几里得空间。考虑线性子空间
$$
U_1=\operatorname{Span}\{\vec{e}_1\}\qquad U_2=\operatorname{Span}\{\vec{e}_1, \vec{e}_2\}
$$
则
$$
U_1^{\perp}=\operatorname{Span}\{\vec{e}_2,\vec{e}_3, \vec{e}_4\}\qquad U_2^{\perp}=\operatorname{Span}\{\vec{e}_3, \vec{e}_4\}
$$
:::

::: proposition {@prop:orth-direct}
设 $(V,\langle \cdot, \cdot \rangle)$ 是一个$n$维欧几里得空间，$U\subset V$是线性子空间。
则我们有直和分解
$$
V=U \oplus U^{\perp}
$$
:::

::: proof
将内积$\langle \cdot, \cdot \rangle$限制在$U$上，
易知$(U,\langle \cdot, \cdot \rangle)$是一个欧几里得空间。
由 @prop:orthonormal-exist，我们取$\vec{\beta}_1,\cdots,\vec{\beta}_m$为$U$的一组标准正交基。
对$V$中任意向量$\vec{x}$，定义
$$
\vec{x}^{\parallel}:=\langle\vec{x},\vec{\beta}_1 \rangle \vec{\beta}_1+\cdots+\langle\vec{x},\vec{\beta}_m \rangle \vec{\beta}_m\qquad \vec{x}^{\perp}=\vec{x}-\vec{x}^{\parallel}
$$
则$\vec{x}^{\parallel}\in U$且
$$
\langle \vec{x}^{\perp}, \vec{\beta}_i \rangle =\langle \vec{x}, \vec{\beta}_i \rangle-\langle \vec{x}^{\parallel}, \vec{\beta}_i \rangle=0\quad i=1,\cdots,m
$$
即$\vec{x}^{\perp}\in U^{\perp}$。因此我们得到分解
$$
\vec{x}=\vec{x}^{\parallel}+\vec{x}^{\perp}\qquad \vec{x}^{\parallel}\in U, \quad \vec{x}^{\perp}\in U^{\perp}
$$
由$\vec{x}$的任意性，说明
$
V=U+ U^{\perp}
$。我们下面证明这个是直和。

假设有$\beta\in U, \gamma \in U^{\perp}$使得$\vec{\beta}+\vec{\gamma}=0$。则
$$
\langle \vec{\beta},\vec{\beta} \rangle=- \langle \vec{\beta},\vec{\gamma} \rangle=0 \quad \Longrightarrow \quad \vec{\beta}=0
$$
因此$\vec{\beta}=\vec{\gamma}=0$。这说明$V=U\oplus U^{\perp}$。
:::

::: definition
设 $(V,\langle \cdot, \cdot \rangle)$ 是一个$n$维欧几里得空间，$U\subset V$是线性子空间。
任意向量$\vec{x}\in V$可以唯一地分解为
$$
\vec{x}=\vec{x}^{\parallel}+\vec{x}^{\perp}, \quad \text{其中} \quad \vec{x}^{\parallel}\in U, \ \ \vec{x}^{\perp}\in U^{\perp}
$$
称为$\vec{x}$关于$U$的正交分解。线性映射
$$
p_U: V\to U,\qquad \vec{x}\to \vec{x}^{\parallel}
$$
称为$V$向$U$的正交投影。
:::

由上述命题的证明，如果取$\vec{\beta}_1,\cdots,\vec{\beta}_m$为$U$的一组标准正交基，则正交投影$p_U$为
$$
p_U(\vec{x})=\langle\vec{x},\vec{\beta}_1 \rangle \vec{\beta}_1+\cdots+\langle\vec{x},\vec{\beta}_m \rangle \vec{\beta}_m
$$

```tikz
\begin{tikzpicture}[scale=2]
  \fill[blue!10] (-1,-0.5) -- (2,-0.5) -- (2.5,1) -- (-0.5,1) -- cycle;
  \node[blue] at (1.5, 0) {$U$};
  \draw[->, thick, red] (0,0) -- (1,2) node[midway, left] {$\vec{x}$};
  \draw[->, thick, blue] (0,0) -- (1.2,0.4) node[midway, below] {$p_U(\vec{x})$};
  \draw[->, thick, dashed] (1,2) -- (1.2,0.4);
\end{tikzpicture}
```

::: example
考虑平面$\mathbb{R} ^2$的由直线$L:\{(x,y)\in \mathbb{R} ^2|y=ax\}$构成的一维子空间。
考虑向量$\vec{u}=(x_0,y_0)$向$L$的正交投影。

```tikz
\usetikzlibrary{calc}
\begin{tikzpicture}[scale=1.5]
  \draw[->, gray] (-1.5,0) -- (2.5,0) node[right] {$x$};
  \draw[->, gray] (0,-0.5) -- (0,2) node[above] {$y$};
  \draw[->, thick, blue] (-1,-0.5) -- (2,1) node[right] {$L: y=ax$};
  \coordinate (P) at (1,1.5);
  \filldraw (P) circle (1pt) node[above right] {$(x_0,y_0)$};
  \coordinate (P') at ($(0,0)!(P)!(2,1)$);
  \filldraw (P') circle (1pt) node[below] {$p_L(\vec{u})$};
  \draw[->, thick, dashed] (P) -- (P');
  \draw (P') -- ($(P')!(P)!(0,0)$) -- ($(P')!(P)!(0,0)!4pt!(P)$);
  \filldraw (0,0) circle (1pt) node[below left] {$O$};
  \draw[->, red] (0,0) -- (P) node[midway, above left] {$\vec{u}$};
\end{tikzpicture}
```

:::

直线$L:\{(x,y)\in \mathbb{R} ^2|y=ax\}$的标准正交基是一个$L$中的单位向量，可以选为
$$
\vec{\beta}=\left(\frac{1}{\sqrt{1+a^2}},\frac{a}{\sqrt{1+a^2}}\right)
$$
因此$\vec{u}$向$L$的正交投影为
\[
\begin{aligned}
p_L(\vec{u})=\langle \vec{u},\vec{\beta}\rangle \vec{\beta}=\left(\frac{x_0+ay_0}{{1+a^2}}, \frac{(x_0+ay_0)a}{{1+a^2}}\right)
\end{aligned}
\]

::: proposition {@prop:proj-distance}
设 $(V,\langle \cdot, \cdot \rangle)$ 是$n$维欧几里得空间，$U\subset V$是线性子空间，
$\vec{x}$是$V$中向量。则
$$
\| \vec{x}-p_U(\vec{x})\|=\min_{\vec{y}\in U} \| \vec{x}-\vec{y}\|
$$
即$p_U(\vec{x})$是$U$中与$\vec{x}$的距离最短的向量。
:::

::: proof
设$\vec{x}=\vec{x}^{\parallel}+\vec{x}^{\perp}$是关于$U$的正交分解，即
$$
p_U(\vec{x})=\vec{x}^{\parallel}\in U, \qquad \vec{x}^{\perp}\in U^{\perp}
$$

对任意$\vec{y}\in U$，$\vec{x}^{\parallel}-\vec{y}\in U$因此与$\vec{x}^{\perp}$正交。故
\[
\begin{aligned}
\|\vec{x}-\vec{y}\|^2=&\langle  \vec{x}^{\parallel}+\vec{x}^{\perp}-\vec{y}, \vec{x}^{\parallel}+\vec{x}^{\perp}-\vec{y} \rangle\\
=& \langle \vec{x}^{\parallel}-\vec{y},\vec{x}^{\parallel}-\vec{y}\rangle+2 \langle \vec{x}^{\parallel}-\vec{y}, \vec{x}^{\perp} \rangle +\langle \vec{x}^{\perp},\vec{x}^{\perp} \rangle\\
=& \| \vec{x}^{\parallel}-\vec{y}\|^2+ \|\vec{x}^{\perp} \|^2\geq \|\vec{x}^{\perp} \|^2
\end{aligned}
\]
等号当且仅当$\vec{y}=\vec{x}^{\parallel}=p_U(\vec{x})$成立。
:::

等价而言，如果向量$\vec{x}$关于$U$的正交分解为
$$
\vec{x}=\vec{x}^{\parallel}+\vec{x}^{\perp}
$$
则$\vec{x}$与$U$中向量间的最短距离为分量$\vec{x}^{\perp}$的长度
$$
\min_{\vec{y}\in U} \| \vec{x}-\vec{y}\|=\|\vec{x}^{\perp} \|
$$
这个值也称为向量$\vec{x}$与子空间$U$的距离。
