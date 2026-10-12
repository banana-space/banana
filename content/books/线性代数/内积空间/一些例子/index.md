---
title: 一些例子
---

## QR分解*

::: proposition [可逆方阵的QR分解]
设$A$是$n$阶可逆方阵，则存在唯一的分解
$$
A=QR
$$
其中$Q$是$n$阶正交方阵，$R$是对角元都是正数的上三角矩阵。
:::

::: proof
记$A$的列向量为
$
A=\begin{bmatrix}
\vec{\alpha}_1 & \cdots & \vec{\alpha}_n
\end{bmatrix}
$。由Gram–Schmidt正交化和归一化的过程，我们得到一个对角元都是正数的上三角矩阵$R$使得
$$
\begin{bmatrix}
\vec{\alpha}_1 & \cdots & \vec{\alpha}_n
\end{bmatrix}=\begin{bmatrix}
\vec{\beta}_1 & \cdots & \vec{\beta}_n
\end{bmatrix} R
$$
这里$\{\vec{\beta}_1,\cdots,\vec{\beta}_n\}$是标准正交基。
记$Q=\begin{bmatrix} \vec{\beta}_1 & \cdots & \vec{\beta}_n\end{bmatrix}$，则$Q$是正交方阵且$A=QR$。

下证唯一性。
假设有$Q_1 R_1=Q_2 R_2$，这里$Q_1, Q_2$是正交阵，$R_1, R_2$是对角元都是正数的上三角矩阵。
则$R_1R_2^{-1}=Q_1^{-1}Q_2$是正交阵并且是对角元都是正数的上三角矩阵
$$
R_1R_2^{-1}=\begin{bmatrix}
a_{11} & * & \cdots & *\\
0 & a_{22} & \cdots & *\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & a_{nn}
\end{bmatrix} \qquad a_{ii}>0
$$

由列向量的标准正交性易知$R_1R_2^{-1}$只能是对角阵，且$a_{ii}=1$。即$R_1R_2^{-1}=I_n$。
由此得$R_1=R_2, Q_1=Q_2$。
:::

QR分解有很多应用。比如考虑线性方程组
$$
A\vec{x}=\vec{b}
$$
这里$A$是可逆矩阵。我们知道它有唯一解
$
\vec{x}=A^{-1}\vec{b}
$。在实际应用中计算矩阵的逆$A^{-1}$通常很复杂。如果我们有矩阵的QR分解$A=QR$，则上述方程等价于
$$
R\vec{x}=Q^T \vec{b}
$$
此时$R$是上三角方阵，方程很容易求解。

更一般的，QR分解可以推广到任意长方形矩阵。

::: proposition [QR分解]
设$A$是$m\times n$实矩阵，这里$m\geq n$。
则存在$m$阶正交阵$Q$和$m\times n$矩阵$R=\begin{bmatrix}R_1 \\ 0\end{bmatrix}$，
其中$R_1$是对角元非负的$n$阶上三角矩阵，使得
$$
A= QR
$$
:::

这也可以通过Gram–Schmidt正交化证明，具体细节留作练习。

## 最小二乘法*

最小二乘法（Least Squares Method）是一种优化方法，用于拟合数据点并找到最佳的拟合曲线。
其基本目标是通过最小化拟合曲线与数据点之间的误差平方和来找到最佳的参数。

![](Linear-algebra-5-5-1.png?width=300)

例如我们有一组数据$(t_i,y_i)$如图，希望用一个线性函数$y=at+b$来拟合这组数据。即目标是找到$a,b$使得
$$
\begin{bmatrix}
 t_1 & 1\\
 t_2 & 1\\
 \vdots & \vdots\\
 t_n & 1
\end{bmatrix}\begin{bmatrix}
a \\ b
\end{bmatrix}=\begin{bmatrix}
y_1 \\ y_2 \\ \vdots \\ y_n
\end{bmatrix}
$$
我们把待求的拟合参数记作未知变量$\vec{x}=\begin{bmatrix}
a \\ b
\end{bmatrix}$，则上述关系变成求解线性方程组
$
A\vec{x}=\vec{y}
$。

然而实际上数据不可能严格落在一条直线上，因此这个线性方程组是没有解的。
退而求其次，我们可以寻找$\vec{x}$使得如下的平方误差最小
$$
\min_{\vec{x}}\|A\vec{x}-\vec{y}\|^2\qquad \text{或}\qquad \min_{\vec{x}}\|A\vec{x}-\vec{y}\|
$$
从而拟合出一条相对比较符合原始数据的直线。

一般地，给定$m\times n$实矩阵$A$和向量$\vec{y}\in \mathbb{R} ^m$，求解
$$
\min_{\vec{x}\in \mathbb{R} ^n}\|A\vec{x}-\vec{y}\|
$$
这一问题称为最小二乘问题。这个问题的解$\vec{x}$称为线性方程组$A\vec{x}=\vec{y}$的最小二乘解。

当然如果线性方程组$A\vec{x}=\vec{y}$本身有解的话，那么它的解自然是最小二乘解。
这个问题的核心是处理线性方程组$A\vec{x}=\vec{y}$没有解的情况。从几何上看，矩阵$A$定义了一个线性映射
$$
A: \mathbb{R} ^n\to \mathbb{R} ^m
$$
令$W\subset \mathbb{R} ^m$是这个映射的象，即所有形如$A\vec{x}$的向量构成的集合。
$W$是$\mathbb{R} ^m$的一个线性子空间。由 @prop:proj-distance 我们知道
$$
\min_{\vec{x}\in \mathbb{R} ^n}\|A\vec{x}-\vec{y}\|=\|\vec{y}-p_W(\vec{y})\|
$$
这里$p_W(\vec{y})$是$\vec{y}$向$W$的正交投影。因此最小二乘问题的解即为线性方程组
$$
A\vec{x}=p_W(\vec{y})
$$
的解。
由$p_W(\vec{y})\in W$，这个线性方程组的解存在，其通解的自由参数个数是$n-\operatorname{rank} A$。

::: proposition
$\vec{x}$是线性方程组$A\vec{x}=\vec{y}$的最小二乘解当且仅当
$$
A^T A \vec{x}=A^T \vec{y}
$$
:::

::: proof
对任意的向量$\vec{z}\in \mathbb{R} ^n, \vec{c}\in \mathbb{R} ^m$，我们有
$$
\langle A\vec{z}, \vec{c} \rangle=(A\vec{z})^T \vec{c}=\vec{z}^T A^T \vec{c}
$$
故$\vec{c}\in W^{\perp}$当且仅当$\langle A\vec{z}, \vec{c}\rangle=\vec{z}^T A^T \vec{c}=0$ 对所有
$\vec{z}$成立，即等价于$A^T \vec{c}=0$。

$\vec{x}$是最小二乘解当且仅当$A\vec{x}=p_W(\vec{y})$，即
$$
A\vec{x}-\vec{y}\in W^{\perp}
$$
由上述讨论这等价于
$$
A^T(A\vec{x}-\vec{y})=0\quad \text{即}\quad A^T A\vec{x}= A^T\vec{y}
$$
:::

::: remark*
我们也可以通过微积分的方法来证明这个结论。考虑$n$个变量的函数
$$
f(\vec{x})=\|A\vec{x}-\vec{y}\|^2
$$
最小二乘解即为函数$f$的最小值。另一方面，
$$
f(\vec{x})= (A\vec{x}-\vec{y})^T (A\vec{x}-\vec{y})=\vec{x}^T A^T A\vec{x}-2\vec{x}^T A^T \vec{y}+\vec{y}^T \vec{y}
$$

由于$A^T A$半正定，这是一个凸函数，最小值即为$f$的极值。求解极值方程
$$
\frac{\partial f}{\partial x_i}=0 \quad \text{即得}\quad A^TA\vec{x}=A^T \vec{y}
$$
:::

由上述命题，我们可以得到如下求解最小二乘问题的算法。
不妨设$A$的列向量是线性无关的，此时最小二乘法的解是唯一的。设$A$的QR分解为
$$
A=QR =Q \begin{bmatrix}
R_1 \\ 0
\end{bmatrix}=\begin{bmatrix}Q_1 & Q_2\end{bmatrix} \begin{bmatrix}
R_1 \\ 0
\end{bmatrix}
$$
由假设，$R_1$是可逆$n$阶上三角矩阵。代入最小二乘解的方程$A^TA \vec{x}= A^T\vec{y}$，我们得到
$$
R_1^T R_1 \vec{x}=\begin{bmatrix}
R_1^T & 0
\end{bmatrix}\begin{bmatrix}
Q_1^T \\ Q_2^T
\end{bmatrix}\vec{y}=R_1^T Q_1^T\vec{y}
$$
即
$$
R_1\vec{x}=Q_1^T \vec{y}
$$
由于$R_1$是上三角方阵，这个方程组很容易求解。

## 广义逆* {@prop:gen-inverse}

矩阵的广义逆是一种对矩阵的“逆”这个概念的推广。
广义逆在矩阵不可逆或者矩阵不是方阵的情况下，提供了一种类似逆矩阵的替代方法，
广泛应用于求解线性方程组。

::: definition
设$A$是$m\times n$矩阵。如果$n\times m$矩阵$X$满足
$$
AXA=A
$$
则称$X$为$A$的一个广义逆。
:::

矩阵的广义逆总是存在的，而且并不唯一。我们用符号$A^-$来表示$A$的一个广义逆。我们考虑实矩阵的情况。
对$A$作奇异值分解
$$
A= U \Sigma V^T
$$
这里$U$是$m$阶正交阵，$V$是$n$阶正交阵。则
$$
(U\Sigma  V^T) X (U \Sigma V^T)= U\Sigma V^T \quad \text{即} \quad  \Sigma V^T X
 U \Sigma = \Sigma
$$

代入$\Sigma=\begin{bmatrix}
\Sigma_r & 0\\
0 & 0
\end{bmatrix}$，这里$\Sigma_r=\operatorname{diag}(\sigma_1, \cdots, \sigma_r)$
$$
\begin{bmatrix}
\Sigma_r & 0\\
0 & 0
\end{bmatrix} V^T X U
\begin{bmatrix}
\Sigma_r & 0\\
0 & 0
\end{bmatrix}=\begin{bmatrix}
\Sigma_r & 0\\
0 & 0
\end{bmatrix}
$$
得到$X$的通解为
$$
V^T X U=\begin{bmatrix}
 \Sigma_r^{-1} & * \\
 * & *
\end{bmatrix}\quad \text{即}\quad X=V\begin{bmatrix}
 \Sigma_r^{-1} & * \\
 * & *
\end{bmatrix}U^T
$$

因此对于$m\times n$矩阵
$$
A=U \begin{bmatrix}
\Sigma_r & 0\\
0 & 0
\end{bmatrix} V^T
$$
它的广义逆的一般形式为$n\times m$矩阵
$$
 A^-=V\begin{bmatrix}
 \Sigma_r^{-1} & * \\
 * & *
\end{bmatrix}U^T
$$
这里$*$是任意数。这里面有一个特别的广义逆
$$
 V\begin{bmatrix}
 \Sigma_r^{-1} & 0 \\
 0 & 0
\end{bmatrix}U^T
$$
称为Moore–Penrose逆。我们将在 @sec:Moore–Penrose 一节详细讨论Moore–Penrose逆的刻画和性质。

::: proposition
线性方程组$A\vec{x}=\vec{b}$有解的充分必要条件是
$$
\vec{b}=AA^- \vec{b}
$$
这里$A^-$是$A$的任意一个广义逆。此时$A^-\vec{b}$是方程的一个特解。
:::

::: proof
假设$\vec{x}_0$是线性方程组$A\vec{x}=\vec{b}$的解，则
$$
\vec{b}=A\vec{x}_0=AA^-A \vec{x}_0=AA^-\vec{b}
$$

反之，假设$\vec{b}=AA^- \vec{b}$成立。令$\vec{x}_0=A^-\vec{b}$，则
$$
A\vec{x}_0=AA^-\vec{b}=\vec{b}\quad \text{成立}
$$
:::

我们知道，对于$n$阶可逆方阵$A$，线性方程组$A\vec{x}=\vec{b}$具有唯一解
$$
\vec{x}=A^{-1}\vec{b}
$$
对于一般的$m\times n$矩阵$A$，广义逆给出了类似的公式：假设方程组$A\vec{x}=\vec{b}$有解，
则$\vec{x}=A^-\vec{b}$给出了一个具体的解。

::: proposition
$A$是$m\times n$矩阵，$A^-$是$A$的某个取定的广义逆。则齐次线性方程组$A\vec{x}=0$的通解为
$$
\vec{x}=(I_n-A^-A)\vec{z}
$$
这里$\vec{z}$是任意$n$维列向量。特别地，如果
线性方程组$A\vec{x}=\vec{b}$有解，则它的通解为
$$
\vec{x}=A^-\vec{b}+(I_n-A^-A)\vec{z}
$$
:::

::: proof
由
$$
A(I_n-A^-A)\vec{z}=(A-AA^-A)\vec{z}=0
$$
知对任意$\vec{z}$，$(I_n-A^-A)\vec{z}$是齐次方程组的解。

设$\vec{x}_0$是齐次线性方程组$A\vec{x}=0$的任意一个解，即$A\vec{x}_0=0$。取$\vec{z}=\vec{x}_0$，则
$$
\vec{x}_0=(I_n-A^-A)\vec{x}_0=(I_n-A^-A)\vec{z}
$$
即$\vec{x}_0$可以表达为命题要求形式。
:::

如果线性方程组$A\vec{x}=\vec{b}$无解，我们可以考虑它的最小二乘问题。设$A$的奇异值分解
$$
A=U \begin{bmatrix}
\Sigma_r & 0\\
0 & 0
\end{bmatrix} V^T
$$
我们考虑一个特殊的广义逆（即Moore–Penrose逆）
$$
 A^-=V\begin{bmatrix}
 \Sigma_r^{-1} & 0 \\
 0 & 0
\end{bmatrix}U^T
$$

这个广义逆满足
\[
\begin{aligned}
A^T A A^-
=& V \begin{bmatrix}
\Sigma_r & 0\\
0 & 0
\end{bmatrix} U^T U\begin{bmatrix}
 \Sigma_r & 0 \\
 0 & 0
\end{bmatrix}V^T V\begin{bmatrix}
 \Sigma_r^{-1} & 0 \\
 0 & 0
\end{bmatrix}U^T\\
=& V\begin{bmatrix}
\Sigma_r & 0\\
0 & 0
\end{bmatrix} U^T=A^T
\end{aligned}
\]
即$A^T(I_m-AA^-)=0$。考虑$\vec{x}_0=A^-\vec{b}$。对任意向量$\vec{y}\in \mathbb{R} ^n$
\[
\begin{aligned}
\langle A\vec{y}, \vec{b}-A\vec{x}_0 \rangle
=  \vec{y}^T A^T (I_m-AA^-)\vec{b}=0
\end{aligned}
\]
因此$A\vec{x}_0$即为$\vec{b}$向$A$的像的投影。故$\vec{x}_0=A^-\vec{b}$给出了一个最小二乘解。
在 @sec:Moore–Penrose 一节中，我们将说明在复线性空间中也有类似的结论。

## 矩阵的谱范数*

::: definition
设$A$是$m\times n$实矩阵，其谱范数 \( \|A\|\) 定义为：

\[
\|A\| = \max_{\vec{x} \neq 0} \frac{\|A \vec{x}\|}{\|\vec{x}\|}=\max_{\|\vec{x}\| = 1} \|A \vec{x}\|
\]
其中，\( \|A \vec{x}\| \) 是$\mathbb{R} ^m$中向量\( A \vec{x} \) 的欧几里得范数，
\( \|\vec{x}\| \) 是$\mathbb{R} ^n$中向量 \( \vec{x} \) 的欧几里得范数。
:::

::: proposition
矩阵的谱范数满足如下基本性质：

1. **非负性**：
   \(
  \|A\| \geq 0\)，且\(\|A\| = 0 \iff A = 0
  \)

2. **齐次性**：对任意$\alpha\in \mathbb{R} $，\(
  \| \alpha A \| = |\alpha| \|A\|
  \)

3. **三角不等式**：
   \(
  \| A + B \| \leq \|A\| + \|B\|
  \)

4. 乘积性质：\(
  \| AB \| \leq \|A\| \|B\|
  \)

5. 若$U, V$是正交方阵，则$\|UAV^T\|=\|A\|$

:::

::: proof
我们证明最后一条性质，其他留作练习。由于正交方阵保持欧几里得范数，我们有
\[
\begin{aligned}
\|UAV^T\|= \max_{\vec{x} \neq 0} \frac{\| UAV^T \vec{x}\|}{\|\vec{x}\|}
= \max_{\vec{x} \neq 0} \frac{\| AV^T \vec{x}\|}{\|V^T \vec{x}\|}
\stackrel{\vec{y}=V^T \vec{x}}{\ \ \ \ =\ \ \ \ }\max_{\vec{y} \neq 0} \frac{\| A \vec{y}\|}{\|\vec{y}\|}=\|A\|
\end{aligned}
\]
:::

::: proposition
矩阵的谱范数$\|A\|$等于$A$的最大奇异值。
:::

::: proof
设$A$的奇异值分解为$A=U \Sigma V^T$，则
$
\|A\|=\|\Sigma\|
$。由
$$
\Sigma=  \begin{bmatrix}
 \begin{bmatrix}
  \sigma_1 & 0 & \cdots & 0\\
  0 & \sigma_2 & \cdots & 0\\
  \cdots & \cdots & \cdots & \cdots \\
  0 & \cdots & 0 & \sigma_r
  \end{bmatrix} & 0 \\
  0  & 0
\end{bmatrix}
$$
得知
\[
\begin{aligned}
\|\Sigma\|
=\max_{\vec{x} \neq 0} \frac{\|A \vec{x}\|}{\|\vec{x}\|}
=\max_{\vec{x} \neq 0} \frac{\sqrt{\sigma_1^2 x_1^2+\cdots+\sigma_r^2 x_r^2}}{\sqrt{x_1^2+\cdots+x_n^2}}
= \max_{1\leq i\leq r}\sigma_i
\end{aligned}
\]
:::

这个命题给出了最大奇异值的几何解释，即线性映射
$$
A: \mathbb{R} ^n\to \mathbb{R} ^m
$$
把向量长度伸缩最大的倍数。我们下面说明，其他奇异值均有类似的几何解释。

::: example
考虑一个$n$阶实对称方阵$S$。
由 @prop:sym-sim-diag，
存在一组标准正交基$\vec{\beta}_1,\cdots, \vec{\beta}_n$使得每个$\vec{\beta}_i$都是$S$的特征向量。
不妨设其对应的特征值$\lambda_1\geq \lambda_2\geq \cdots \geq \lambda_n$。

对任意向量$\vec{x}\in \mathbb{R} ^n$，在这组基下的线性表达为
$$
\vec{x}=c_1 \vec{\beta}_1+\cdots+ c_n \vec{\beta}_n
$$
由此可得
$$
\frac{\vec{x}^T S\vec{x}}{\vec{x}^T \vec{x}}=\frac{\lambda_1 c_1^2+\cdots+ \lambda_n c_n^2}{c_1^2+\cdots+ c_n^2}
$$

易知
$$
\lambda_1=\max_{\vec{x} \neq 0} \frac{\vec{x}^T S\vec{x}}{\vec{x}^T \vec{x}}
$$
类似的，我们有
$$
\lambda_i=\max_{\substack{\vec{x} \neq 0 \\ \vec{x}\in \operatorname{Span}\{\vec{\beta}_i,\cdots,\vec{\beta}_n\} }} \frac{\vec{x}^T S\vec{x}}{\vec{x}^T \vec{x}}=\max_{\substack{\vec{x} \neq 0 \\ \vec{x}\in \operatorname{Span}\{\vec{\beta}_1,\cdots,\vec{\beta}_{i-1}\}^{\perp} }} \frac{\vec{x}^T S\vec{x}}{\vec{x}^T \vec{x}}
$$
:::

设$A$是$m\times n$实矩阵。我们把上述例子中的方法应用到半正定实对称方阵$S=A^T A$。
设$A$的奇异值为$\sigma_1\geq \sigma_2\geq \cdots \geq \sigma_r>0$，
即$A^TA$的非零特征值为$\sigma_1^2\geq \sigma^2_2\geq \cdots \geq \sigma^2_r$。
设$\vec{\beta}_1,\cdots,\vec{\beta}_n$是$\mathbb{R} ^n$的标准正交基并且构成$A^TA$的特征向量
$$
A^T A \vec{\beta}_i=\begin{cases}
\sigma_i^2 \vec{\beta}_i & 1\leq i\leq r\\
0 & i>r
\end{cases}
$$

则我们有
$$
\sigma_1=\sqrt{\max_{\vec{x} \neq 0} \frac{\vec{x}^T A^T A\vec{x}}{\vec{x}^T \vec{x}}}=\max_{\vec{x} \neq 0} \frac{\| A\vec{x}\|}{\|\vec{x}\|}
$$
并且$\vec{\beta}_1$达到这个最大值
$$
\sigma_1=\frac{\| A\vec{\beta}_1\|}{\|\vec{\beta}_1\|}
$$

然后考虑$\vec{\beta}_1$的正交补空间，得到次大的奇异值
$$
\sigma_2=\sqrt{\max_{\substack{\vec{x} \neq 0 \\ \vec{x}\in \operatorname{Span}\{\vec{\beta}_1\}^{\perp} }} \frac{\vec{x}^T A^T A\vec{x}}{\vec{x}^T \vec{x}}}=\max_{\substack{\vec{x} \neq 0 \\ \vec{x}\in \operatorname{Span}\{\vec{\beta}_1\}^{\perp} }}\frac{\| A\vec{x}\|}{\|\vec{x}\|}
$$
这样我们依次得到第$i$个奇异值的几何解释
$$
\sigma_i=\max_{\substack{\vec{x} \neq 0 \\ \vec{x}\in \operatorname{Span}\{\vec{\beta}_1,\cdots,\vec{\beta}_{i-1}\}^{\perp} }}\frac{\| A\vec{x}\|}{\|\vec{x}\|}
$$

```tikz {caption="蓝色和绿色表示奇异值方向，黑色表示特征值方向"}
\begin{tikzpicture}
    \draw[thick] (0,0) circle(2);
    \draw[red, thick, rotate around={15:(0,0)}] (0,0) ellipse(3 and 1.5);
    \draw[blue,dashed] (-2,0) -- (2,0);
    \draw[green,dashed] (0,-2) -- (0,2);
    \draw[->,blue,rotate around={15:(0,0)}] (0,0) -- (3,0) node[right] {$\sigma_1$};
    \draw[->,green,rotate around={15:(0,0)}] (0,0) -- (0,1.5) node[above] {$\sigma_2$};
    \draw[->,black,rotate around={15:(0,0)}] (0,0) -- (2.6,0.7) node[above right] {$\lambda_1$};
    \draw[->,black,rotate around={15:(0,0)}] (0,0) -- (1.3,-1.4) node[below right] {$\lambda_2$} ;
\end{tikzpicture}
```

## 矩阵极限*

矩阵的谱范数给出了一个描述矩阵之间“距离”的方法。

::: definition
我们称一组$m\times n$矩阵$A_k$收敛于$m\times n$矩阵$B$，如果
$$
\lim_{k\to \infty}\|A_k-B\|=0
$$
此时我们记
$$
\lim_{k\to \infty}A_k=B
$$
:::

::: proposition
设$A=(a_{ij})$是$m\times n$实矩阵。则
$$
\max_{i,j}|a_{ij}|\leq \|A\|\leq \sum_{i,j}|a_{ij}|
$$
:::

::: proof
设
\[
A=\begin{bmatrix}
{\vec u_1}^T\\
\vdots\\
{\vec u_m}^{T}
\end{bmatrix}
\qquad \text{这里} \qquad
\vec u_k=\begin{bmatrix}
a_{k1}\\
\vdots\\
a_{kn}
\end{bmatrix}\in \mathbb{R} ^n
\]

对任意$\vec{x}\in \mathbb{R} ^n$且$\|\vec{x}\|=1$，我们有
$$
A\vec{x}=\begin{bmatrix}
{\vec u_1}^T \cdot \vec{x}\\
\vdots\\
{\vec u_m}^T \cdot \vec{x}
\end{bmatrix}=\begin{bmatrix}
\langle {\vec u_1},\vec{x}\rangle \\
\vdots\\
\langle {\vec u_m}, \vec{x} \rangle
\end{bmatrix}
$$
由Cauchy–Schwarz不等式，
\[
\begin{aligned}
\|A\vec x\|\leq \sum_i|\langle \vec u_i,\vec x\rangle |\leq \sum_i \|\vec u_i\|\|\vec x\|
=\sum_i\|\vec u_i\|\leq \sum_i\sum_j|a_{ij}|
\end{aligned}
\]

另一方面，考虑$\mathbb{R} ^n$中的标准基$\vec{e}_j$。由
$$
A\vec{e}_j=\begin{bmatrix}
a_{1j}\\ \vdots \\ a_{mj}
\end{bmatrix}
$$
因此对任意指标$i,j$
$$
\|A\|\geq \|A\vec{e}_j\|\geq |a_{ij}|
$$
命题得证。
:::

这个命题说明，矩阵极限成立
$$
\lim_{k\to \infty}A_k=B
$$
当且仅当$A_k$的每个矩阵元都收敛到$B$中对应的矩阵元。

作为一个应用，我们考虑$n$阶实方阵$A$。由矩阵范数的乘积性质，我们有
\[
\left\|\frac{A^n}{n!}\right\|\leq \frac{\|A\|^n}{n!}
\]
由于级数
$$
\sum_{n=0}^\infty \frac{\|A\|^n}{n!}= e^{\|A\|}
$$
收敛，上述谱范数的估计可以证明矩阵级数
\[
\lim_{N\to\infty}\sum_{k=0}^N\frac{A^k}{k!}
\]
收敛。我们把这个极限矩阵方便地记为$e^A$
$$
e^A:=\sum_{k=0}^{\infty}\frac{A^k}{k!}
$$

并且

\[
\|e^{A}\|=\left\|\sum_{k=0}^{\infty}\frac{A^k}{k!}\right\|\leq \sum_{k=0}^{\infty}\left\|\frac{A^k}{k!}\right\|\leq \sum_{k=0}^{\infty}\frac{\|A\|^k}{k!}=e^{\|A\|}
\]
由如上级数公式容易证明，$e^A$是可逆矩阵，并且它的逆是$e^{-A}$。即
$$
e^A e^{-A}=I_n
$$
指数矩阵$e^A$具有和指数函数$e^x$非常类似的性质。

::: proposition
设$A,B$是两个相互交换的$n$阶方阵，即满足$AB=BA$。则
$$
e^A e^B=e^{A+B}
$$
:::

::: proof
\[
\begin{aligned}
e^{A+B}=&\sum_{n=0}^{\infty}\frac{(A+B)^n}{n!}\\
\overset{\text{利用}}{\underset{\text{$AB=BA$}}{=}}&\sum_{n=0}^{\infty}\frac{1}{n!}\sum_{k=0}^n\binom{n}{k}A^kB^{n-k}\\
=&\sum_{n=0}^{\infty}\sum_{k+m=n}\frac{A^kB^m}{k!m!}\\
=&\left(\sum_{k=0}^{\infty}\frac{A^k}{k!}\right)\left(\sum_{m=0}^{\infty}\frac{B^m}{m!}\right)=e^Ae^B
\end{aligned}
\]
:::

::: remark*
两个方阵如果不交换，$AB\neq BA$，则有如下的Baker–Campbell–Hausdorff 公式
\[
e^A\cdot e^B=e^{A+B+\frac{1}{2}[A,B]+\frac{1}{12}[A,[A,B]]-\frac{1}{12}[B,[A,B]]+\cdots}
\]
:::

## 微分方程中的应用*

现在我们引入一个变量$t$，考虑随$t$变化的矩阵
$$
e^{tA}=\sum_{k=0}^{\infty}\frac{t^kA^k}{k!}
$$
对矩阵等式
\[
\frac{d}{dt}\left(\frac{t^kA^k}{k!}\right)=\frac{t^{k-1}A^k}{(k-1)!}.
\]
求和，可以得到

$$
\frac{d}{dt}e^{tA}=Ae^{tA}
$$

对任意向量$\vec{y}_0\in \mathbb{R} ^n$，考虑如下向量函数
$$
\vec{y}(t)=e^{tA}\vec{y}_0
$$
由上述讨论知
$$
\frac{d\vec{y}}{dt}=A e^{tA}\vec{y}_0=A\vec{y}
$$
并且在$t=0$时有$\vec{y}(0)=\vec{y_0}$。
因此$\vec{y}(t)=e^{tA}\vec{y}_0$给出了如下齐次线性常微分初值问题的解
$$
\begin{cases}\frac{d\vec{y}}{dt}=A \vec{y} \\
\vec{y}(0)=\vec{y}_0
\end{cases}
$$

进一步，我们可以考虑非齐次线性常微分方程组
$$
\begin{cases}\frac{d\vec{y}}{dt}=A \vec{y}+\vec{b}(t) \\
\vec{y}(0)=\vec{y}_0
\end{cases}
$$
这里$\vec{b}(t)=\begin{bmatrix}
b_1(t)\\ \vdots \\ b_n(t)
\end{bmatrix}$
是随时间变化的向量。上述方程等价于
\[
\frac{d}{dt}(e^{-tA}\vec y)=e^{-tA}\vec b(t)
\]
两边积分，我们得到
\[
e^{-tA}\vec y-\vec y_0=\int_0^te^{-sA}\vec b(s)ds
\]

因此
\[
\vec y=e^{tA}\vec y_0+\int_0^te^{(t-s)A}\vec b(s)ds
\]
给出了非齐次线性常微分方程组
$$
\begin{cases}\frac{d\vec{y}}{dt}=A \vec{y}+\vec{b}(t) \\
\vec{y}(0)=\vec{y}_0
\end{cases}
$$
的解。
