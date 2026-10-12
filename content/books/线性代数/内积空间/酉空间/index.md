---
title: 酉空间
---

下面我们考虑复数域，也就是复向量空间上的内积空间，这样的空间称为酉空间。
酉空间是欧几里得空间在复数域上的自然推广，很多处理方法和欧几里得空间类似。
我们在论述相似的结论时也只叙不证，细节留作练习。

::: definition
复线性空间 \( V \) 上的厄米内积指的是一个映射
\[
\langle \cdot, \cdot \rangle : V \times V \to \mathbb{C}
\]
满足以下条件：

1. **正定性**：对任意 \( \mathbf{u} \in V \)，
   \(
    \langle \mathbf{u}, \mathbf{u} \rangle \geq 0\) 且\(\langle \mathbf{u}, \mathbf{u} \rangle = 0 \iff \mathbf{u} = 0
    \)

2. **共轭对称性**：对任意 \( \mathbf{u}, \mathbf{v} \in V \)，
   \(
    \langle \mathbf{u}, \mathbf{v} \rangle = \overline{\langle \mathbf{v}, \mathbf{u} \rangle}
    \)

3. **线性性**：
   对任意 \( \mathbf{u}, \mathbf{v}, \mathbf{w} \in V \) 和复数 \( a,b \in \mathbb{C} \)，
   \[
   \langle \mathbf{u} , a \mathbf{v}+b \mathbf{w} \rangle = a\langle \mathbf{u}, \mathbf{v} \rangle + b \langle \mathbf{u}, \mathbf{w} \rangle
   \]

:::

注意到这里的线性性是对$\langle \cdot, \cdot \rangle $的第二个分量描述的。
由共轭对称性，厄米内积对第一个分量是共轭线性的，即
\[
\langle a \mathbf{v}+b \mathbf{w} ,\mathbf{u} \rangle = \bar a\langle \mathbf{v},\mathbf{u} \rangle + \bar b \langle \mathbf{w},\mathbf{u} \rangle
\]

::: remark*
有的参考文献讨论厄米内积时也会定义为对第一个分量线性，第二个分量共轭线性。
这两种定义方式是等价的，只是表达方式不同。我们这里采取如上的约定，即对第二个分量线性。
:::

::: definition
带厄米内积的复线性空间称为酉空间。
:::

酉空间也可能是无穷维。我们主要讨论有限维的情况。

::: example
$V=\mathbb{C} ^n$，定义两个复向量的厄米内积为
$$
\langle \mathbf{z},\mathbf{w} \rangle=\sum_{i=1}^n \bar z_i w_i
$$
这里$z_i, w_i$是复向量$\mathbf{z},\mathbf{w}$的分量。此时
$$
\sqrt{\langle \mathbf{z},\mathbf{z} \rangle}=\sqrt{\sum_{i=1}^n |z_i|^2}
$$
表示向量$\mathbf{z}$的长度。
容易验证，$(\mathbb{C} ^n, \langle \cdot,\cdot\rangle)$构成一个酉空间，称为$n$维标准酉空间。
如果我们把$\mathbb{C} ^n$中的向量写成列向量的样子，则这个厄米内积可以用矩阵乘法表示为
$$
\langle \mathbf{z},\mathbf{w} \rangle=\bar{\mathbf{z}}^T \cdot\mathbf{w}=\begin{bmatrix}
\bar z_1 & \cdots & \bar z_n
\end{bmatrix}\begin{bmatrix}
w_1 \\ \vdots  \\ w_n
\end{bmatrix}
$$
:::

::: example
$V=\mathbb{C} ^n$，设$a_i>0$是正实数。定义两个复向量的厄米内积为
$$
\langle \mathbf{z},\mathbf{w} \rangle=\sum_{i=1}^n a_i \bar z_i w_i
$$

对称性和线性性显然满足。由
$$
\langle \mathbf{z},\mathbf{z} \rangle=\sum_{i=1}^n a_i |z_i|^2
$$
可以很容易看出正定性。令$A$为对角方阵
$$
A=\begin{bmatrix} a_1 & 0 &\cdots & 0\\
0 & a_2 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots \\
0 & \cdots &  0 & a_n
\end{bmatrix}
$$
则这个厄米内积也可以写成矩阵形式
$$
\langle \mathbf{z},\mathbf{w} \rangle=\bar{\mathbf{z}}^T A\mathbf{w}=\begin{bmatrix}
\bar z_1 & \cdots & \bar z_n
\end{bmatrix}\begin{bmatrix} a_1 & 0 &\cdots & 0\\
0 & a_2 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots \\
0 & \cdots  & 0 & a_n
\end{bmatrix}\begin{bmatrix}
w_1 \\ \vdots  \\ w_n
\end{bmatrix}
$$
:::

::: example
设$V$是由有限闭区间$[a,b]$上取值在复数的连续函数构成的线性空间。
对任意两个函数$f(x),g(x)\in V$，我们定义它们的厄米内积为
$$
\langle f,g \rangle:=\int_{a}^b \overline{f(x)}g(x)dx
$$

对称性和线性性显然满足。由
$$
\langle f,f \rangle:=\int_{a}^b |f(x)|^2dx
$$
知
$$
\langle f,f \rangle\geq 0
$$
且$\langle f,f \rangle=0$当且仅当$f(x)=0$是零函数，即$V$中的零向量。
因此$(V,\langle \cdot,\cdot \rangle)$定义了一个无穷维的酉空间。
:::

## Gram矩阵*

设$V$是一个酉空间，
$
\{\vec{\alpha}_1,\vec{\alpha}_2,\cdots, \vec{\alpha}_n\}
$
是$V$的一组基。考虑这些基向量之间的厄米内积
$$
\text{定义}\quad G_{ij}:= \langle \vec{\alpha}_i,\vec{\alpha}_j \rangle, \qquad i,j=1,\cdots, n
$$
由此我们得到一个$n$阶复方阵$G=(G_{ij})$。

::: definition
设$(V, \langle \cdot,\cdot \rangle)$是$n$维酉空间，
$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_n\}$为$V$的一组基。我们称$n$阶方阵

$$
G=\begin{bmatrix}
\langle \vec{\alpha}_1,\vec{\alpha}_1 \rangle & \langle \vec{\alpha}_1,\vec{\alpha}_2 \rangle &\cdots & \langle \vec{\alpha}_1,\vec{\alpha}_n \rangle\\
\langle \vec{\alpha}_2,\vec{\alpha}_1 \rangle & \langle \vec{\alpha}_2,\vec{\alpha}_2 \rangle &\cdots & \langle \vec{\alpha}_2,\vec{\alpha}_n \rangle\\
\cdots & \cdots & \cdots & \cdots\\
\langle \vec{\alpha}_n,\vec{\alpha}_1 \rangle & \langle \vec{\alpha}_n,\vec{\alpha}_2 \rangle &\cdots & \langle \vec{\alpha}_n,\vec{\alpha}_n \rangle\\
\end{bmatrix}
$$
为厄米内积$\langle \cdot,\cdot \rangle$在基$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_n\}$下的Gram矩阵。
:::

设$G=(G_{ij})$是厄米内积$\langle \cdot,\cdot \rangle$在$V$的一组基
$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_n\}$下的Gram矩阵。
对$V$中任意两个向量$\mathbf{u}, \mathbf{v}$，它们通过这组基的线性展开记为
\[
\begin{aligned}
\mathbf{u}&=z_1 \vec{\alpha}_1+\cdots+ z_n \vec{\alpha}_n\\
\mathbf{v}&=w_1 \vec{\alpha}_1+\cdots+ w_n \vec{\alpha}_n
\end{aligned}
\]
则
$$
\langle \mathbf{u},\mathbf{v} \rangle =\begin{bmatrix}
\bar z_1 & \cdots & \bar z_n
\end{bmatrix}
G
\begin{bmatrix}
w_1 \\ \vdots \\ w_n
\end{bmatrix}
$$

::: definition
对于复矩阵$A=(a_{ij})$，我们定义它的复共轭$\bar A=(\bar a_{ij})$，
其中$\bar a_{ij}$是复数$a_{ij}$的共轭。复共轭和转置的复合$\bar A^T$称为$A$的共轭转置。
:::

::: proposition
对于复方阵的乘积，我们有
\[
\begin{aligned}
\overline{A_1A_2\cdots A_m}&=\bar A_1\bar A_2\cdots \bar A_m\\
\overline{A_1A_2\cdots A_m}^T&=\bar A_m^T\cdots \bar A_2^T \bar A_1^T
\end{aligned}
\]
:::

::: proof
留作练习。
:::

::: definition
$n$阶复方阵$A$称为是厄米方阵，如果
$$
A=\bar A^T
$$
:::

复数域上的厄米方阵类比于实数域上的对称方阵。

::: definition
一个 $n$阶厄米方阵$A=(a_{ij})$称为正定的（半正定的），
如果对任意非零列向量 $\mathbf{z}\in \mathbb{C} ^n$，都有
$$
\bar{\mathbf{z}}^T A \mathbf{z}  > 0 \ \ (\geq 0)\quad \text{即}
\quad \sum\limits_{i,j=1}^n a_{ij}\bar z_i z_j>0 \ \  (\geq 0)
$$
:::

注意到对于厄米方阵$A$

$$
\overline{\bar{\mathbf{z}}^T A \mathbf{z}}=\overline{(\bar{\mathbf{z}}^T A \mathbf{z})}^T=\bar{\mathbf{z}}^T \bar A^T \mathbf{z}=\bar{\mathbf{z}}^T A \mathbf{z}
$$
即$\bar{\mathbf{z}}^T A \mathbf{z}$一定是实数。

::: proposition
设$G$是酉空间一组基$\{\vec{\alpha}_1,\cdots, \vec{\alpha}_n\}$下的Gram矩阵。则$G$是正定厄米方阵。
:::

证明与欧几里得空间类似：厄米内积的共轭对称性和正定性保证了$G$是正定厄米方阵。
因此在给定$V$的一组基的情况下，Gram矩阵
$$
\text{厄米内积}\quad \stackrel{\text{Gram}}{\Longleftrightarrow} \quad \text{厄米正定矩阵}
$$
给出厄米内积和正定厄米矩阵之间的一一对应。

## 范数*

::: definition
设 $(V,\langle \cdot, \cdot \rangle)$ 是一个酉空间。
对于任意向量 $\mathbf{u} \in V$，$\mathbf{u}$ 的长度（或范数）定义为
\[
\|\mathbf{u}\| = \sqrt{\langle \mathbf{u}, \mathbf{u} \rangle}
\]
:::

::: proposition [Cauchy–Schwarz不等式]
设 $(V,\langle \cdot, \cdot \rangle)$ 是一个酉空间。则对任意两个向量$\mathbf{u},\mathbf{v}\in V$
$$
|\langle \mathbf{u}, \mathbf{v} \rangle | \leq \|\mathbf{u}\| \|\mathbf{v}\|
$$
等号成立当且仅当$\mathbf{u},\mathbf{v}$线性相关。
:::

::: proof
类似 @prop:Cauchy-Schwarz。
:::

::: proposition [三角不等式]
对酉空间中任意两个向量$\mathbf{u},\mathbf{v}$
$$
\| \mathbf{u}+\mathbf{v}\|\leq \|\mathbf{u}\|+\|\mathbf{v}\|
$$
:::

::: proof
类似 @prop:triangle-inequality。
:::

::: proposition [平行四边形法则]
对酉空间中任意两个向量$\mathbf{u},\mathbf{v}$
$$
\|\mathbf{u}+\mathbf{v}\|^2+\|\mathbf{u}-\mathbf{v}\|^2=2\|\mathbf{u}\|^2+2\|\mathbf{v}\|^2
$$
:::

::: proof
类似 @prop:parallel-law。
:::

## 正交性*

::: definition
酉空间中满足如下条件的两个向量
$$
\langle \mathbf{u},\mathbf{v} \rangle=0
$$
称为是正交的，记作$\mathbf{u}\perp \mathbf{v}$。
:::

::: proposition
设$\{\vec{\alpha}_1,\cdots,\vec{\alpha}_m\}$是酉空间$V$中$m$个两两正交的非零向量，即
$$
\langle \vec{\alpha}_i, \vec{\alpha}_j \rangle =0\qquad i\neq j, \quad i,j=1,\cdots, m
$$
则$\{\vec{\alpha}_1,\cdots,\vec{\alpha}_m\}$线性无关。
:::

::: proof
类似 @prop:orth-linear-ind。
:::

::: definition
酉空间$V$的一组基如果由两两正交的向量构成，则称这组基为正交基。
如果正交基的每个基向量范数都是$1$，则这组基称为酉空间的标准正交基。
:::

给定酉空间$V$的任一组基$\{\vec{\alpha}_1,\cdots,\vec{\alpha}_n\}$，
我们同样可以用Gram–Schmidt正交化依次定义
$$
\vec{\beta}_k=\vec{\alpha}_k-\sum_{i=1}^{k-1}\frac{\langle \vec{\alpha}_k, \vec{\beta}_i \rangle}{\langle \vec{\beta}_i, \vec{\beta}_i \rangle} \vec{\beta}_i
$$
得到一组正交基$\{\vec{\beta}_1,\cdots,\vec{\beta}_n\}$。
此时从基$\{\vec{\alpha}_i\}$到$\{\vec{\beta}_i\}$的过渡矩阵$P$是上三角矩阵
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
我们可以进一步对$\vec{\beta}_i$作归一化，得到一组标准正交基。由此证明了如下结论。

::: proposition
$n$维酉空间存在标准正交基。
:::

::: definition
设 $(V,\langle \cdot, \cdot \rangle)$ 是一个$n$维酉空间，$W\subset V$是复线性子空间。
我们定义$W$在$V$中的正交补空间为
$$
W^{\perp}:=\{\mathbf{u}\in V| \langle {\mathbf{u}},\mathbf{v} \rangle=0\ \text{对$W$中任意向量$\mathbf{v}$成立}\}
$$
即$\mathbf{u}\in W^{\perp}$如果$\mathbf{u}$与$W$中的任意向量都正交。
:::

如果我们选$W$中的一组基$\{\vec{\beta}_1,\cdots, \vec{\beta}_m\}$，
则$\mathbf{u}\in W^{\perp}$当且仅当$\mathbf{u}$与这组基向量正交
$$
\langle\mathbf{u},\vec{\beta}_i \rangle=0 \qquad i=1,\cdots,m
$$
这给出了正交补空间向量的一个判别方法。

::: proposition
设 $(V,\langle \cdot, \cdot \rangle)$ 是一个$n$维酉空间，$W\subset V$是线性子空间。则我们有直和分解
$$
V=W \oplus W^{\perp}
$$
:::

::: proof
类似 @prop:orth-direct。
:::

因此任意向量$\mathbf{u}\in V$可以唯一地写为
$$
\mathbf{u}=\mathbf{u}^{\parallel}+\mathbf{u}^{\perp}，\quad \text{其中} \quad \mathbf{u}^{\parallel}\in W, \ \ \mathbf{u}^{\perp}\in W^{\perp}
$$
称为$\mathbf{u}$关于$W$的正交分解。线性映射
$$
p_W: V\to W,\qquad \mathbf{u}\to \mathbf{u}^{\parallel}
$$
称为$V$向$W$的正交投影。

::: proposition
设 $(V,\langle \cdot, \cdot \rangle)$ 是$n$维酉空间，$W\subset V$是线性子空间。
设$\mathbf{u}$是$V$中任意向量，则
$$
\| \mathbf{u}-p_W(\mathbf{u})\|=\min_{\mathbf{w}\in W} \| \mathbf{u}-\mathbf{w}\|
$$
即$p_W(\mathbf{u})$是$W$中与$\mathbf{u}$的距离最短的向量。
:::

::: proof
类似 @prop:proj-distance。
:::

等价而言，如果向量$\mathbf{u}$关于$W$的正交分解为
$$
\mathbf{u}=\mathbf{u}^{\parallel}+\mathbf{u}^{\perp}
$$
则$\mathbf{u}$与$W$中向量间的最短距离为分量$\mathbf{u}^{\perp}$的长度
$$
\min_{\mathbf{w}\in W} \| \mathbf{u}-\mathbf{w}\|=\|\mathbf{u}^{\perp} \|
$$
这个值也称为向量$\mathbf{u}$与子空间$W$的距离。
