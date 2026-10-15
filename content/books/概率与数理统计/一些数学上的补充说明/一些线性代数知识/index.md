---
title: 一些线性代数知识
---
::: definition
给定实的方阵$\mathbf{M}\in\mathbb{R}^{n\times n}$。

1. 我们称$\mathbf{M}$是实对称的，
   若$\mathbf{M}^\mathsf{T} = \mathbf{M}$。

2. 我们称实对称矩阵$\mathbf{M}$是正定的，
   若对任意$\boldsymbol{x}\in\mathbb{R}^n\backslash\{\boldsymbol{0}\}$，
   有$\boldsymbol{x}^\mathsf{T} \mathbf{M} \boldsymbol{x}>0$。

3. 我们称$\mathbf{M}$是实正交的，
   若$\mathbf{Q}^\mathsf{T}\mathbf{Q}=\mathbf{Q}\mathbf{Q}^\mathsf{T}=\mathbf{I}_n$，
   或等价地说，$\mathbf{Q}$的列向量构成了$\mathbb{R}^n$的一组
   标准正交基。

:::

以下定理是线性代数中有关实对称矩阵的经典结果，
相关论述可参考[@zhengguangping_linear_algebra]第6.4节
或[@lay2016linear]第7.1节。

::: theorem
设$\mathbf{M}\in\mathbb{R}^{n\times n}$为一实对称阵，
则存在一组$\mathbb{R}^n$的标准正交基
$\{\boldsymbol{v}_1,\ldots,\boldsymbol{v}_n\}$，
使得每个$\boldsymbol{v}_i$均为$\mathbf{M}$的特征向量；
或等价地说，存在一实正交矩阵$\mathbf{Q}\in\mathbb{R}^{n\times n}$，
使得$\mathbf{Q}^\mathsf{T}\mathbf{M}\mathbf{Q}$为一对角阵，
其对角元给出$\mathbf{M}$的所有特征值。
:::

下面的定理则给出了正定矩阵的一种判别方法。

::: theorem
设$\mathbf{M}\in\mathbb{R}^{n\times n}$为一实对称阵。
则$\mathbf{M}$是正定阵当且仅当$\mathbf{M}$的所有特征值均为正数。
:::

::: proof
对$\mathbf{M}$做特征值分解：
\[
    \mathbf{M}=\mathbf{Q}\boldsymbol{\Lambda}\mathbf{Q}^\mathsf{T},
    \qquad \boldsymbol{\Lambda}=\begin{bmatrix}
    \lambda_1 \\ & \ddots \\ & & \lambda_n
    \end{bmatrix},
\]
其中$\mathbf{Q}$为实正交阵，$\lambda_1,\ldots,\lambda_n$
给出$\mathbf{M}$的所有特征值。任取
$\boldsymbol{x}\in\mathbb{R}^n\backslash\{\boldsymbol{0}\}$，
并令$\boldsymbol{y}=\mathbf{Q}^\mathsf{T}\boldsymbol{x}$，则有
\[
    \boldsymbol{x}^\mathsf{T}\mathbf{M}\boldsymbol{x}
    =(\mathbf{Q}^\mathsf{T}\boldsymbol{x})^\mathsf{T} \mathbf{M}(\mathbf{Q}^\mathsf{T}\boldsymbol{x})
    =\boldsymbol{y}^\mathsf{T}\boldsymbol{\Lambda}\boldsymbol{y}
    =\sum_{i=1}^n \lambda_i y_i^2,
\]
且$\boldsymbol{y}\neq\boldsymbol{0}$
（否则$\boldsymbol{x}=\mathbf{Q}\boldsymbol{y}=\boldsymbol{0}$）。
若$\mathbf{M}$的所有特征值均为正数，则显然有
$\boldsymbol{x}^\mathsf{T}\mathbf{M}\boldsymbol{x}=\sum_{i=1}^n \lambda_i y_i^2>0$，
再由$\boldsymbol{x}\in\mathbb{R}^n\backslash\{\boldsymbol{0}\}$的任意性
可得$\mathbf{M}$正定；反之，若存在某个特征值$\lambda_j\leq 0$，
则令$\boldsymbol{y}$的第$j$个分量为$1$而其余分量为$0$，
再令$\boldsymbol{x}=\mathbf{Q}^\mathsf{T}\boldsymbol{y}$，
则$\boldsymbol{x}$为非零向量，且
$\boldsymbol{x}^\mathsf{T}\mathbf{M}\boldsymbol{x}=\lambda_j y_j^2\leq 0$，
从而$\mathbf{M}$不是正定阵。
:::

以下命题给出了正定矩阵的一些有用的性质。

::: proposition {@proposition:positive_definite_matrix_properties}
设$\mathbf{M}=(m_{ij})\in\mathbb{R}^{n\times n}$为一正定阵，则

1. $\mathbf{M}$可逆，且$\mathbf{M}^{-1}$也是正定矩阵。

2. 对任意列满秩的矩阵$\mathbf{P}$，矩阵
   $\mathbf{P}^\mathsf{T}\mathbf{M}\mathbf{P}$正定。

   特别地，任取$\{1,\ldots,n\}$的非空子集$J$，则由所有满足
   $i\in J,\,j\in J$的$m_{ij}$排成的$\mathbf{M}$的子矩阵为正定阵。

:::

::: proof
1. 对$\mathbf{M}$做特征值分解：
   \[
       \mathbf{M}=\mathbf{Q}\boldsymbol{\Lambda}\mathbf{Q}^\mathsf{T},\qquad
       \boldsymbol{\Lambda}=\begin{bmatrix}
       \lambda_1 \\ & \ddots \\ & & \lambda_n
       \end{bmatrix},
   \]
   其中$\mathbf{Q}$为实正交阵，$\lambda_1,\ldots,\lambda_n$
   给出$\mathbf{M}$的所有特征值。由于$\mathbf{M}$正定，
   可得$\lambda_i>0,\,\forall i=1,\ldots,n$，故
   \[
       \boldsymbol{\Lambda}^{-1}
       =\begin{bmatrix}
       \lambda_1^{-1} \\ & \ddots \\ & & \lambda_n^{-1}
       \end{bmatrix},
   \]
   从而
   \[
       \mathbf{M}^{-1} = \left(\mathbf{Q}\boldsymbol{\Lambda}\mathbf{Q}^\mathsf{T}\right)^{-1}
       =\mathbf{Q}\boldsymbol{\Lambda}^{-1}\mathbf{Q}^\mathsf{T}.
   \]
   从上式可进一步看出$\lambda_1^{-1},\ldots,\lambda_n^{-1}$
   给出$\mathbf{M}$的所有特征值，而
   $\lambda_i^{-1}>0,\,\forall i=1,\ldots,n$，
   故$\mathbf{M}^{-1}$正定。

2. 任取$\boldsymbol{x}\in\mathbb{R}^n\backslash\{\boldsymbol{0}\}$，
   并令$\boldsymbol{y}=\mathbf{P}\boldsymbol{x}$。
   由于$\mathbf{P}$列满秩，可得$\boldsymbol{y}\neq\boldsymbol{0}$
   （否则$\mathbf{P}\boldsymbol{x}=\boldsymbol{0}$意味着
   $\mathbf{P}$的列向量的某个线性组合等于$\boldsymbol{0}$），
   再由$\mathbf{M}$的正定性可得
   \[
       \boldsymbol{x}^\mathsf{T}\mathbf{P}^\mathsf{T}\mathbf{M}\mathbf{P}\boldsymbol{x} = \boldsymbol{y}^\mathsf{T}\mathbf{M}\boldsymbol{y}>0.
   \]
   最后由$\boldsymbol{x}\in\mathbb{R}^n\backslash\{\boldsymbol{0}\}$
   的任意性可得$\mathbf{P}^\mathsf{T}\mathbf{M}\mathbf{P}$为正定阵。

   特别地，对任意非空的$J\subseteq\{1,\ldots,n\}$，
   令$m$为$J$的元素个数，并令$\mathbf{P}\in\mathbb{R}^{n\times m}$
   为$\boldsymbol{e}_j,\,j\in J$按$j$的大小次序从左到右排成的矩阵，
   则$\mathbf{P}$列满秩，且$\mathbf{P}^\mathsf{T}\mathbf{M}\mathbf{P}$
   即为所有$m_{ij}$（$i\in J,\,j\in J$）排成的$\mathbf{M}$的子矩阵。
   由之前的结果可知该子矩阵正定。

:::

最后，我们介绍矩阵的**奇异值分解**
（singular value decomposition）。

::: theorem {@theorem:matrix_SVD}
设$\mathbf{A}\in\mathbb{R}^{m\times n}$，
$\mathbf{A}$的秩为$r$。则存在向量
$\boldsymbol{u}_1,\ldots,\boldsymbol{u}_r\in\mathbb{R}^m$，
$\boldsymbol{v}_1,\ldots,\boldsymbol{v}_r\in\mathbb{R}^n$
以及正实数$\sigma_1,\ldots,\sigma_r$，使得

1. $\boldsymbol{u}_1,\ldots,\boldsymbol{u}_r$相互正交，
   且$\boldsymbol{u}_i^\mathsf{T}\boldsymbol{u}_i=1,\,\forall i=1,\ldots,r$。

2. $\boldsymbol{v}_1,\ldots,\boldsymbol{v}_r$相互正交，
   且$\boldsymbol{v}_i^\mathsf{T}\boldsymbol{v}_i=1,\,\forall i=1,\ldots,r$。

3. $\sigma_1\geq\sigma_2\geq\cdots\geq\sigma_r>0$
   为矩阵$\mathbf{A}^{\!\mathsf{T}} \mathbf{A}$的$r$个不为零的特征值，
   同时也是$\mathbf{A}\mathbf{A}^{\!\mathsf{T}}$的$r$个不为零的特征值。

4. 矩阵$\mathbf{A}$可分解为

   ```math {@eq:matrix_SVD1}
   \mathbf{A} = \sum_{i=1}^r \sigma_i
   \boldsymbol{u}_i\boldsymbol{v}_i^\mathsf{T}
   ```

:::

@theorem:matrix_SVD  的证明可参考[@lay2016linear]
第7.4节。我们将式 @eq:matrix_SVD1  的右端称为
矩阵$\mathbf{A}$的**奇异值分解**，而将
$\sigma_1,\ldots,\sigma_r$称为$\mathbf{A}$的**奇异值**
（singular value）。注意矩阵的奇异值分解并不要求矩阵是方阵。
矩阵的奇异值分解还可以有其它表示形式，例如

- 式 @eq:matrix_SVD1  可等价写为

  ```math
  \mathbf{A} = \mathbf{U}_\mathrm{c}\boldsymbol{\Sigma}_\mathrm{c}\mathbf{V}_\mathrm{c}^\mathsf{T},
  ```

  其中$\mathbf{U}_\mathrm{c}\in\mathbb{R}^{m\times r}$的
  各个列向量分别为$\boldsymbol{u}_1,\ldots,\boldsymbol{u}_r$，
  $\mathbf{V}_\mathrm{c}\in\mathbb{R}^{n\times r}$的各个列向量
  分别为$\boldsymbol{v}_1,\ldots,\boldsymbol{v}_r$，
  而$\boldsymbol{\Sigma}_\mathrm{c}$则为一对角阵，
  其对角元为$\sigma_1,\ldots,\sigma_r$。

- 矩阵$\mathbf{A}$的奇异值分解还可写为

  ```math
  \mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^\mathsf{T},
  ```

  其中$\mathbf{U}\in\mathbb{R}^{m\times m},
\mathbf{V}\in\mathbb{R}^{n\times n}$为实正交阵，而
  \[
      \boldsymbol{\Sigma} = \begin{bmatrix}
      \boldsymbol{\Sigma}_\mathrm{c} & \mathbf{0}_{r\times(n-r)} \\ \mathbf{0}_{(m-r)\times r} & \mathbf{0}_{(m-r)\times(n-r)}
      \end{bmatrix},\qquad
      \boldsymbol{\Sigma}_\mathrm{c}=\begin{bmatrix}
      \sigma_1 \\ & \ddots \\ && \sigma_r
      \end{bmatrix}\in\mathbb{R}^{r\times r}.
  \]
