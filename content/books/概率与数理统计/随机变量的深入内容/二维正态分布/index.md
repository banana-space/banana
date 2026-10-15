---
title: '（${}^\star$）二维正态分布'
---

::: definition {@definition:normal_distribution}
设$\boldsymbol{X}=(X_1,X_2)$为连续型随机向量，
$\boldsymbol{\mu}\in\mathbb{R}^2$为实向量，
$\boldsymbol{\Sigma}\in\mathbb{R}^{2\times 2}$为实对称正定矩阵。
我们称$\boldsymbol{X}$服从参数为
$(\boldsymbol{\mu},\boldsymbol{\Sigma})$的**正态分布**
或**高斯分布**（normal/Gaussian distribution）并记为
$\boldsymbol{X}\sim\mathcal{N}(\boldsymbol{\mu},\boldsymbol{\Sigma})$，
若$\boldsymbol{X}$的联合概率密度函数可表示为

```math {@eq:defn:multivariate_Gaussian}
f_{\boldsymbol{X}}(\boldsymbol{x})
=c\cdot
\exp\!\left[-\frac{1}{2}(\boldsymbol{x}-\boldsymbol{\mu})^\mathsf{T}
\boldsymbol{\Sigma}^{-1}(\boldsymbol{x}-\boldsymbol{\mu})\right],
\qquad\forall \boldsymbol{x}\in\mathbb{R}^2,
```

其中$c$为某个正实数。
:::

利用$\iint_{\,\mathbb{R}^2}f_{\boldsymbol{X}}(\boldsymbol{x})\,\mathrm{d}\boldsymbol{x}=1$，
可求得式 @eq:defn:multivariate_Gaussian 中的常数$c$为
\[
c = \frac{1}{\sqrt{(2\pi)^2\cdot\operatorname{det}\boldsymbol{\Sigma}}}.
\]
我们将具体的计算过程放在了 @exercise:exp_quadratic_integral 中。

本节随后的重点是给出二维正态分布的几个核心性质：

1. 正态分布的参数$\boldsymbol{\mu},\boldsymbol{\Sigma}$
   直接给出了期望、方差与协方差信息。

2. 二维正态分布的边缘分布为一维正态分布。

3. 服从二维正态分布的随机向量经过可逆仿射变换后仍服从二维正态分布。

为了一步步推导上述性质，我们从几个引理入手。

::: lemma {@lemma:stdnormal_marginal_independence}
设$\boldsymbol{X}=(X_1,X_2)$服从正态分布
$\mathcal{N}(\boldsymbol{0},\mathbf{I})$，
则$X_1,X_2$相互独立，且$X_1,X_2$各自
均服从标准正态分布$\mathcal{N}(0,1)$。
:::

@lemma:stdnormal_marginal_independence 的证明思路
是非常直接的：为了证明$X_1,X_2$独立，只需考察
$f_{\boldsymbol{X}}(x_1,x_2)$是否能写为一个
关于$x_1$的函数与一个关于$x_2$的函数的乘积，
而对这两个函数分别归一化即可得到边缘概率密度函数；
我们将具体的证明步骤留给读者自己完成。

::: lemma {@lemma:normal_from_stdnormal}
设$\boldsymbol{\mu}\in\mathbb{R}^2$，而
$\boldsymbol{\Sigma}\in\mathbb{R}^{2\times 2}$为实对称正定矩阵，
随机向量$\boldsymbol{X}\sim \mathcal{N}(\boldsymbol{\mu},\boldsymbol{\Sigma})$。
则存在可逆矩阵$\mathbf{A}\in\mathbb{R}^{2\times 2}$
以及随机向量$\boldsymbol{Z}\sim\mathcal{N}(\boldsymbol{0},\mathbf{I})$满足
\[
\boldsymbol{X} = \mathbf{A}\boldsymbol{Z}+\boldsymbol{\mu},
\qquad \mathbf{A}\mathbf{A}^\mathsf{T} = \boldsymbol{\Sigma}.
\]
:::

::: proof
这里给出的证明需要一些线性代数的知识，对此比较生疏的读者
可阅读[附录A.3](/books/概率与数理统计/一些数学上的补充说明/一些线性代数知识/)进行回顾。

因$\boldsymbol{\Sigma}$为实对称正定矩阵，故可对其做特征值分解：
\[
\boldsymbol{\Sigma} = \mathbf{Q}\boldsymbol{\Lambda}\mathbf{Q}^\mathsf{T},
\]
其中$\boldsymbol{\Lambda}\in\mathbb{R}^{2\times 2}$为一对角阵，
其对角元$\lambda_1,\lambda_2$均大于$0$，
而$\mathbf{Q}\in\mathbb{R}^{2\times 2}$为正交阵，满足
$\mathbf{Q}^\mathsf{T} \mathbf{Q}=\mathbf{Q}\mathbf{Q}^\mathsf{T} = \mathbf{I}$。
令
\[
\mathbf{A} = \mathbf{Q}\tilde{\boldsymbol{\Lambda}}\mathbf{Q}^\mathsf{T},
\quad\text{其中}\quad
\tilde{\boldsymbol{\Lambda}} = \begin{bmatrix}
\sqrt{\lambda_1} & 0 \\ 0 & \sqrt{\lambda_2}
\end{bmatrix},
\]
则不难看出$\mathbf{A}$为对称阵，
且由于$\tilde{\boldsymbol{\Lambda}}$的对角元均大于$0$，
可知$\mathbf{A}$可逆。此外，
\[
\begin{aligned}
\mathbf{A}^2 & =
\mathbf{Q}\tilde{\boldsymbol{\Lambda}}\mathbf{Q}^\mathsf{T}
\mathbf{Q}\tilde{\boldsymbol{\Lambda}}\mathbf{Q}^\mathsf{T}
=\mathbf{Q}\tilde{\boldsymbol{\Lambda}}^2\mathbf{Q}^\mathsf{T}
=\mathbf{Q}\boldsymbol{\Lambda}\mathbf{Q}^\mathsf{T}
=\boldsymbol{\Sigma}.
\end{aligned}
\]
接下来，令
\[
\boldsymbol{Z} = \mathbf{A}^{-1}(\boldsymbol{X}-\boldsymbol{\mu}),
\]
则有$\boldsymbol{X}=\mathbf{A}\boldsymbol{Z}+\boldsymbol{\mu}$，
且由 @corollary:rand_vec_affine_transform_pdf 可得
\[
\begin{aligned}
f_{\boldsymbol{Z}}(\boldsymbol{z})
&=f_{\boldsymbol{X}}\!\left(\mathbf{A}\boldsymbol{z}+\boldsymbol{\mu}\right)\cdot |\det\mathbf{A}| \\
&= \frac{1}{\sqrt{(2\pi)^2\det\boldsymbol{\Sigma}}}
\exp\!\left(-\frac{\boldsymbol{z}^\mathsf{T} \mathbf{A} \boldsymbol{\Sigma}^{-1}\mathbf{A}\boldsymbol{z}}{2}\right)
\cdot \sqrt{\det\!\left(\mathbf{A}^2\right)} \\
&= \frac{\sqrt{\det\boldsymbol{\Sigma}}}{\sqrt{(2\pi)^2\det\boldsymbol{\Sigma}}}
\exp\!\left(-\frac{\boldsymbol{z}^\mathsf{T}\mathbf{A}\left(\mathbf{A}^2\right)^{-1}\mathbf{A}\boldsymbol{z}}{2}\right)
=\frac{1}{\sqrt{(2\pi)^2}}
\exp\!\left(-\frac{\boldsymbol{z}^\mathsf{T}\boldsymbol{z}}{2}\right),
\end{aligned}
\]
故$\boldsymbol{Z}\sim\mathcal{N}(\boldsymbol{0},\mathbf{I})$，
引理得证。
:::

接下来我们即可考察正态分布参数$\boldsymbol{\mu}$
与$\boldsymbol{\Sigma}$的具体意义。

::: proposition {@proposition:normal_parameters_mean_cov}
设$\boldsymbol{X}=(X_1,X_2)\sim
\mathcal{N}(\boldsymbol{\mu},\boldsymbol{\Sigma})$。则
\[
\boldsymbol{\mu} = \begin{bmatrix}
\mathbb{E}[X_1] \\
\mathbb{E}[X_2]
\end{bmatrix},
\qquad
\boldsymbol{\Sigma}
=\begin{bmatrix}
\operatorname{Var}(X_1) & \operatorname{Cov}(X_1,X_2) \\
\operatorname{Cov}(X_2,X_1) & \operatorname{Var}(X_2)
\end{bmatrix}.
\]
:::

::: proof
先考虑$\boldsymbol{X}\sim
\mathcal{N}(\boldsymbol{0},\mathbf{I})$的情况。
由 @lemma:stdnormal_marginal_independence，
可得$X_1,X_2$相互独立，且每个$X_i$均服从$\mathcal{N}(0,1)$。故
\[
\mathbb{E}[X_1]=\mathbb{E}[X_2] = 0,
\qquad\operatorname{Var}(X_1)=\operatorname{Var}(X_2)=1,
\]
以及
\[
\operatorname{Cov}(X_1,X_2)=\operatorname{Cov}(X_2,X_1)=\mathbb{E}[(X_1-\mathbb{E}[X_1])(X_2-\mathbb{E}[X_2])]
=0,
\]
故待证命题对于$\boldsymbol{\mu}=
\boldsymbol{0},\boldsymbol{\Sigma}=\mathbf{I}$的情形成立。

接下来考虑一般情形。记
\[
\boldsymbol{\mu}=\begin{bmatrix}
\mu_1 \\ \mu_2
\end{bmatrix},
\qquad
\boldsymbol{\Sigma}=\begin{bmatrix}
\sigma_{11} & \sigma_{12} \\
\sigma_{21} & \sigma_{22}
\end{bmatrix}.
\]
由 @lemma:normal_from_stdnormal 可得，
存在可逆矩阵$\mathbf{A}=\left[a_{ij}\right]\in\mathbb{R}^{2\times 2}$
以及随机向量$\boldsymbol{Z}=(Z_1,Z_2)\sim
\mathcal{N}(\boldsymbol{0},\mathbf{I})$满足
$\boldsymbol{X} = \mathbf{A}\boldsymbol{Z}+\boldsymbol{\mu}$
以及$\mathbf{A}\mathbf{A}^\mathsf{T} = \boldsymbol{\Sigma}$，即
\[
\begin{aligned}
X_i & = \sum_{j}a_{ij}Z_j + \mu_i, \ \  \forall i,
\qquad\text{以及}
\qquad
\sum_{j} a_{ij}a_{kj} = \sigma_{ik},\ \  \forall i,k.
\end{aligned}
\]
对$X_i$取期望即得到
\[
\mathbb{E}[X_i]=
\sum_{j} a_{ij}\,\mathbb{E}[Z_j] + \mu_i = \mu_i,\qquad i=1,2.
\]
而$X_i$的方差则为
\[
\begin{aligned}
\operatorname{Var}(X_i)
& =\operatorname{Var}\!\left(
\sum_j a_{ij}Z_j+ \mu_i\right) \\
& =\sum_j a_{ij}^2\operatorname{Var}(Z_j)
=\sum_j a_{ij}^2 = \sigma_{ii},
\qquad i=1,2,
\end{aligned}
\]
其中我们利用了 @theorem:sum_uncorrelated_rv_var
以及式 @eq:variance_affine。$X_1$与$X_2$的协方差则为
\[
\begin{aligned}
\operatorname{Cov}(X_1,X_2)
& =\mathbb{E}\!\left[(X_1-\mathbb{E}[X_1])(X_2-\mathbb{E}[X_2])\right] \\
& =
\mathbb{E}\!\left[\left(\sum_j a_{1j}Z_j\right)\left(\sum_k a_{2k}Z_k\right)\right] \\
& =
\sum_{j,k} a_{1j}a_{2k}\,\mathbb{E}[Z_jZ_k]
=\sum_j a_{1j}a_{2j} = \sigma_{12}.
\end{aligned}
\]
证毕。
:::

在搞清了二维正态分布参数的意义后，我们可以将二维正态分布的密度函数
写成另外一种形式：设$\boldsymbol{X}=(X_1,X_2)$服从二维正态分布，
令$\mu_i=\mathbb{E}[X_i]$，
$\sigma_i=\sqrt{\operatorname{Var}(X_i)}$，
$\rho$为$X_1,X_2$的相关系数，则由
\[
\begin{aligned}
\begin{bmatrix}
\operatorname{Var}(X_1) & \operatorname{Cov}(X_1,X_2) \\
\operatorname{Cov}(X_2,X_1) &
\operatorname{Var}(X_2)
\end{bmatrix}^{-1}
& =\begin{bmatrix}
\sigma_1^2 & \rho \sigma_1\sigma_2 \\
\rho\sigma_1\sigma_2 & \sigma_2^2
\end{bmatrix}^{-1} \\
& =\frac{1}{1\!-\!\rho^2}
\begin{bmatrix}
\sigma_1^{-2} & -\rho(\sigma_1\sigma_2)^{-1} \\
-\rho(\sigma_1\sigma_2)^{-1} & \sigma_2^{-2}
\end{bmatrix},
\end{aligned}
\]
可得
\[
\begin{aligned}
f_{\boldsymbol{X}}(x_1,x_2)
=\frac{1}{2\pi\sigma_1\sigma_2\sqrt{1\!-\!\rho^2}}
\exp\Bigg\{
&\!\! -\frac{1}{2(1\!-\!\rho^2)}
\Bigg[\!\left(\frac{x_1\!-\!\mu_1}{\sigma_1}\right)^{\!\!2} \\
& \ \ -2\rho\frac{(x_1\!-\!\mu_1)(x_2\!-\!\mu_2)}{\sigma_1\sigma_2}
+\left(\frac{x_2\!-\!\mu_2}{\sigma_2}\right)^{\!\!2}\Bigg]\Bigg\}.
\end{aligned}
\]

下面我们考虑二维正态分布的边缘分布。

::: theorem {@theorem:normal_marginal}
设$\boldsymbol{X}=(X_1,X_2)$服从二维正态分布，
则$X_1$与$X_2$各自均服从一维正态分布。
:::

::: proof
为了证明上的简洁，不妨设$(X_1,X_2)\sim
\mathcal{N}(\boldsymbol{0},\boldsymbol{\Sigma})$，
其中$\boldsymbol{\Sigma}$正定；一般情形的证明方法是类似的。

记$\boldsymbol{\Xi}=\left[\xi_{ij}\right]=\boldsymbol{\Sigma}^{-1}$，
则$\boldsymbol{\Xi}$也是正定矩阵，其对角元$\xi_{22}$大于$0$。
将$\boldsymbol{x}^\mathsf{T} \boldsymbol{\Xi}\boldsymbol{x}$展开：

```math {@eq:Gaussian_marginal_temp}
\begin{aligned}
\boldsymbol{x}^\mathsf{T} \boldsymbol{\Xi}\boldsymbol{x}
& =
\xi_{11}x_1^2
+ \xi_{22}x_2^2
+ 2\xi_{12}x_1x_2  \\
& =
\left(\xi_{11}-\frac{\xi_{12}^2}{\xi_{22}}\right)x_1^2
+
\xi_{22}\left(x_2
+\frac{\xi_{12}}{\xi_{22}}x_1\right)^2,
\end{aligned}
```

其中我们对$\xi_{22}x_2^2 + 2\xi_{12}x_1x_2$做了配方。
由此得$f_{\boldsymbol{X}}(\boldsymbol{x})$可表示为
\[
\begin{aligned}
f_{\boldsymbol{X}}(\boldsymbol{x})
={} & \frac{1}{\sqrt{(2\pi)^2\det\boldsymbol{\Sigma}}}
\,\exp\!\left[
-\frac{1}{2}\left(\xi_{11}-\frac{\xi_{12}^2}{\xi_{22}}\right)x_1^2
\right]
\cdot
\exp\!\left[
-\frac{1}{2}\xi_{22}\left(x_2
+\frac{\xi_{12}}{\xi_{22}}x_1\right)^2
\right].
\end{aligned}
\]
将上式对$x_2$在实数轴上求积分，即得到
\[
\begin{aligned}
f_{X_1}(x_1)
={} & \exp\!\left[
-\frac{1}{2}\left(\xi_{11}-\frac{\xi_{12}^2}{\xi_{22}}\right)x_1^2
\right]
\cdot
\int_{-\infty}^{+\infty}
\frac{\exp\!\left[
-\frac{1}{2}\xi_{22}\left(x_2
+\xi_{12}x_1/\xi_{22}\right)^2
\right]}{\sqrt{(2\pi)^2\det\boldsymbol{\Sigma}}}
 \mathrm{d} x_2.
\end{aligned}
\]
对上式右端的积分做换元$y=x_2+\xi_{12}x_1/\xi_{22}$后，
不难看出该积分为一个与$x_1$无关的常数，将这个常数暂记为$c$，则有
\[
f_{X_1}(x_1)
= c
\cdot\exp\!\left[
-\frac{1}{2}\left(\xi_{11}-\frac{\xi_{12}^2}{\xi_{22}}\right)x_1^2
\right].
\]
而由式 @eq:Gaussian_marginal_temp 可看出
$\xi_{11}-\xi_{12}^2/\xi_{22}>0$：否则可以令$x_1\neq 0$
以及$x_2=-\xi_{12}x_1/\xi_{22}$，则此时
$\boldsymbol{x}=(x_1,x_2)$非零且满足
$\boldsymbol{x}^\mathsf{T}\boldsymbol{\Xi}\boldsymbol{x}\leq 0$，
与$\boldsymbol{\Xi}$是正定矩阵相矛盾。
再结合上式给出的$f_{X_1}$的表达式，即可看出$X_1$服从某个一维正态分布。
同理可得$X_2$服从某个一维正态分布。
:::

接下来，我们证明正态分布的随机变量经过可逆的仿射变换后依然服从正态分布。

::: theorem {@theorem:Gaussian_invertible_affine_transform}
设$\boldsymbol{X}=(X_1,X_2)\sim
\mathcal{N}(\boldsymbol{\mu},\boldsymbol{\Sigma})$，
$\mathbf{M}\in\mathbb{R}^{2\times 2}$为一可逆矩阵，
$\boldsymbol{\eta}\in\mathbb{R}^2$，则随机向量
\[
\boldsymbol{Y}=\mathbf{M}\boldsymbol{X}+\boldsymbol{\eta}
\]
服从正态分布$\mathcal{N}\!\left(\mathbf{M}\boldsymbol{\mu}+\boldsymbol{\eta},
\mathbf{M}\boldsymbol{\Sigma}\mathbf{M}^\mathsf{T}\right)$。
:::

::: proof
由 @lemma:normal_from_stdnormal 可知，
存在可逆矩阵$\mathbf{A}\in\mathbb{R}^{2\times 2}$
以及随机向量$\boldsymbol{Z}\sim
\mathcal{N}(\boldsymbol{0},\mathbf{I})$满足
$\boldsymbol{X} = \mathbf{A}\boldsymbol{Z}+\boldsymbol{\mu}$
以及$\mathbf{A}\mathbf{A}^\mathsf{T} = \boldsymbol{\Sigma}$，从而有
\[
\boldsymbol{Y} = \mathbf{M}\mathbf{A}\boldsymbol{Z}
+(\mathbf{M}\boldsymbol{\mu}+\boldsymbol{\eta})
=\mathbf{B}\boldsymbol{Z} + (\mathbf{M}\boldsymbol{\mu}+\boldsymbol{\eta}),
\]
其中我们记$\mathbf{B}=\mathbf{M}\mathbf{A}$。
由于$\mathbf{M}$与$\mathbf{A}$均为可逆矩阵，
因此$\mathbf{B}$也可逆。此外，
\[
\mathbf{B}\mathbf{B}^\mathsf{T}
=\mathbf{M}\mathbf{A}\mathbf{A}^\mathsf{T}\mathbf{M}^\mathsf{T}
=\mathbf{M}\boldsymbol{\Sigma}\mathbf{M}^\mathsf{T}.
\]
接下来即可利用 @corollary:rand_vec_affine_transform_pdf 得到
\[
\begin{aligned}
& f_{\boldsymbol{Y}}(\boldsymbol{y})
= f_{\boldsymbol{Z}}\!\left(\mathbf{B}^{-1}
(\boldsymbol{y}-(\mathbf{M}\boldsymbol{\mu}+\boldsymbol{\eta}))\right)
\cdot \frac{1}{|\operatorname{det} \mathbf{B}|} \\
={} & \frac{1}{\sqrt{(2\pi)^2}}
\exp\!\left(-\frac{
(\boldsymbol{y}-(\mathbf{M}\boldsymbol{\mu}+\boldsymbol{\eta}))^\mathsf{T} \!\left(\mathbf{B}^\mathsf{T}\right)^{-1}\mathbf{B}^{-1}(\boldsymbol{y}-(\mathbf{M}\boldsymbol{\mu}+\boldsymbol{\eta}))}{2}\right)
\cdot\frac{1}{\sqrt{\det\!\left(\mathbf{B}\mathbf{B}^\mathsf{T}\right)}} \\
={} & \frac{1}{\sqrt{(2\pi)^2\det\!\left(\mathbf{M}\boldsymbol{\Sigma}\mathbf{M}^\mathsf{T}\right)}}
\exp\!\left(-\frac{
(\boldsymbol{y}-(\mathbf{M}\boldsymbol{\mu}+\boldsymbol{\eta}))^\mathsf{T} \!\left(\mathbf{M}\boldsymbol{\Sigma}\mathbf{M}^\mathsf{T}\right)^{-1}(\boldsymbol{y}-(\mathbf{M}\boldsymbol{\mu}+\boldsymbol{\eta}))}{2}\right),
\end{aligned}
\]
故$\boldsymbol{Y}\sim \mathcal{N}\!\left(
\mathbf{M}\boldsymbol{\mu}+\boldsymbol{\eta},
\mathbf{M}\boldsymbol{\Sigma}\mathbf{M}^\mathsf{T}\right)$。
:::

由 @theorem:normal_marginal 与
@-theorem:Gaussian_invertible_affine_transform，
还可得到如下推论：

::: corollary
设$\boldsymbol{X}=(X_1,X_2)\sim
\mathcal{N}(\boldsymbol{\mu},\boldsymbol{\Sigma})$，
$\boldsymbol{\alpha}=(\alpha_1,\alpha_2)\in\mathbb{R}^2$
为非零向量，$\beta\in\mathbb{R}$为一实数。令
\[
Y = \boldsymbol{\alpha}^\mathsf{T}\boldsymbol{X}+\beta = \sum_j \alpha_j X_j + \beta,
\]
则$Y\sim\mathcal{N}(\boldsymbol{\alpha}^\mathsf{T}\boldsymbol{\mu}+\beta,
\boldsymbol{\alpha}^\mathsf{T}\boldsymbol{\Sigma}\boldsymbol{\alpha})$。
:::

::: proof
由于$\boldsymbol{\alpha}$非零，故可以找到一个非零向量
$\boldsymbol{\alpha}'=(\alpha_1',\alpha_2')$使得
$\boldsymbol{\alpha}$与$\boldsymbol{\alpha}'$线性无关。令
\[
\mathbf{M} = \begin{bmatrix}
\alpha_1 & \alpha_2 \\
\alpha_1' & \alpha_2'
\end{bmatrix},
\qquad \boldsymbol{\eta} = \begin{bmatrix}
\beta \\ 0
\end{bmatrix},
\]
并令$\boldsymbol{Z} = \mathbf{M}\boldsymbol{X}+\boldsymbol{\eta}$，
则$Y$就是随机向量$\boldsymbol{Z}$的第一个分量。
由 @theorem:Gaussian_invertible_affine_transform 可知
$\boldsymbol{Z}$服从二维正态分布，再由 @theorem:normal_marginal
可得$Y$服从一维正态分布，该正态分布的参数可通过计算$Y$的期望与方差直接得到，
具体的计算过程交给读者完成。
:::
