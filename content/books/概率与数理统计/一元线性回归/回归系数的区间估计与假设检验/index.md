---
title: 回归系数的区间估计与假设检验
notices:
  - name: 问题
    items:
      - '最后一节（引理的证明）中，$\widehat{\boldsymbol{\beta}}-\boldsymbol{\beta}$ 的计算里 $\mathbf{X}^\mathsf{T}$ 似乎应展开为 $\mathbf{V}\boldsymbol{\Sigma}_\mathrm{c}\mathbf{U}_\mathrm{c}^\mathsf{T}$，结果似乎应为 $\mathbf{V}\boldsymbol{\Sigma}_\mathrm{c}^{-1}\mathbf{U}_\mathrm{c}^\mathsf{T}\boldsymbol{\varepsilon}$（其后 $\widehat{\boldsymbol{\beta}}$ 的表达式同此）。'
---

在本节中，我们均假设自变量$x$与因变量$Y$之间的确服从
@eq:linear_regression_model1 给出的线性回归模型。
此外，还假设随机误差$\varepsilon$服从正态分布
$\mathcal{N}(0,\sigma^2)$，此时即有
\[
Y_i\sim\mathcal{N}(\beta_0+\beta_1 x_i, \sigma^2).
\]
首先引入如下引理：

::: lemma {@lemma:simple_linear_regression_var_est_distribution}
设线性回归模型 @eq:linear_regression_model1 中的随机误差
$\varepsilon$服从正态分布$\mathcal{N}(0,\sigma^2)$，并令
$\widehat{\sigma^2}$为式 @eq:simple_linear_regression_var_estimator
给出的$\sigma^2$的点估计量。则

1. $\widehat{\sigma^2}$与$\widehat\beta_1$相互独立，
   且$\widehat{\sigma^2}$也与$\widehat\beta_0$相互独立。

2. $\dfrac{(n-2)\widehat{\sigma^2}}{\sigma^2}\sim\chi^2(n-2)$。

:::

@lemma:simple_linear_regression_var_est_distribution
的证明将放在本节最后一小节作为选读内容。但引理中$\chi^2$分布的自由度
$n-2$可由前面$\mathbb{E}\!\left[{SS}_{\text{Res}}\right]$的
计算结果猜出一二。

## $\beta_1$的区间估计以及假设检验* {@susbection:linear_regression_beta_1_inference}

首先考虑$\beta_1$的置信区间与假设检验。注意到
\[
\widehat\beta_1 = \frac{1}{S_{xx}}
\sum_{i=1}^n (x_i-\overline{x})Y_i
\]
可表示为相互独立的正态分布随机变量$Y_1,\ldots,Y_n$的线性组合，
故$\widehat\beta_1$也服从正态分布，其期望为$\beta_1$，
而方差即为$\sigma^2/S_{xx}$，也就是说
\[
\widehat\beta_1\sim\mathcal{N}\!\left(\beta_1,\frac{\sigma^2}{S_{xx}}\right),
\]
而 @lemma:simple_linear_regression_var_est_distribution
则保证了$(n-2)\widehat{\sigma^2}/\sigma^2$服从$\chi^2(n-2)$
且与$\widehat\beta_1$独立。因而
\[
\frac{\big(\widehat\beta_1-\beta_1\big)/\sqrt{\sigma^2/S_{xx}}}{
\sqrt{\widehat{\sigma^2}/\sigma^2}}
=\frac{\widehat\beta_1-\beta_1}{\sqrt{\widehat{\sigma^2}/S_{xx}}}
\]
必定服从自由度为$n-2$的$t$分布，且与$\beta_0,\beta_1$以及
$\sigma^2$的取值无关。接下来我们依次处理$\beta$的置信区间与
假设检验问题：

1. 设置信水平取为$1-\alpha$。由于
   $\big(\widehat\beta_1-\beta_1\big)/\sqrt{\widehat{\sigma^2}/S_{xx}}
   \sim t(n-2)$对$\beta_0,\beta_1$与$\sigma^2$的所有可能取值均成立，
   故可将其作为枢轴量，得
   \[
   \mathbb{P}\!\left(
   \left|\frac{\widehat\beta_1-\beta_1}{\sqrt{\widehat{\sigma^2}/S_{xx}}}\right|
   \leq t_{\alpha/2}(n-2)
   \right)=1-\alpha,
   \]
   对上式中括号内的不等式进行等价变形，可得
   \[
   \mathbb{P}
   \!\left(
   \left[
   \widehat\beta_1 - t_{\alpha/2}(n\!-\!2)
   \sqrt{\frac{\widehat{\sigma^2}}{S_{xx}}},\,
   \widehat\beta_1 + t_{\alpha/2}(n\!-\!2)
   \sqrt{\frac{\widehat{\sigma^2}}{S_{xx}}}\,
   \right]\ni\beta_1
   \right)
   =1-\alpha.
   \]
   从而$\beta_1$的一个置信水平为$1-\alpha$的置信区间为
   \[
   \left[
   \widehat\beta_1 - t_{\alpha/2}(n\!-\!2)
   \sqrt{\frac{\widehat{\sigma^2}}{S_{xx}}},\,
   \widehat\beta_1 + t_{\alpha/2}(n\!-\!2)
   \sqrt{\frac{\widehat{\sigma^2}}{S_{xx}}}\,
   \right].
   \]

2. 考虑假设检验问题
   \[
   H_0: \beta_1 = \beta_{1,0},\qquad H_1:\beta_1\neq\beta_{1,0},
   \]
   其中$\beta_{1,0}$为事先取定的常数。则可以取检验统计量为
   \[
   T = \frac{\widehat\beta_1-\beta_{1,0}}{\sqrt{\widehat{\sigma^2}/S_{xx}}},
   \]
   它在原假设$H_0$下服从分布$t(n-2)$。故$p$值为[^1]
   \[
   \hat{p} = 2\!\left(1-F^t_{n-2}\!\left(\frac{\big|\widehat\beta_1-\beta_{1,0}\big|}{\sqrt{\widehat{\sigma^2}/S_{xx}}}\right)\right),
   \]
   其中$F^t_{n-2}$表示分布$t(n-2)$的分布函数。而给定显著性水平
   $\alpha$后，相应的拒绝域可由
   \[
   \frac{\big|\widehat\beta_1-\beta_{1,0}\big|}{\sqrt{\widehat{\sigma^2}/S_{xx}}}>t_{\alpha/2}(n-2)
   \]
   给出。

## $\beta_0$的区间估计以及假设检验*

接下来考虑$\beta_0$的区间估计与假设检验。与$\widehat{\beta}_1$的
情形类似，可得
\[
\widehat\beta_0\sim\mathcal{N}\!\left(\beta_0,\,
\sigma^2\!\left(
\frac{1}{n} + \frac{\overline{x}^2}{S_{xx}}
\right)\right),
\]
而 @lemma:simple_linear_regression_var_est_distribution
保证了$(n-2)\widehat{\sigma^2}/\sigma^2$服从$\chi^2(n-2)$
且与$\widehat\beta_0$独立，故
\[
\frac{\big(\widehat\beta_0-\beta_0\big)/\sqrt{\sigma^2\left(1/n+\overline{x}^2/S_{xx}\right)}}{
\sqrt{\widehat{\sigma^2}/\sigma^2}}
=\frac{\widehat\beta_0-\beta_0}{\sqrt{\widehat{\sigma^2}
\big(\frac{1}{n}+\frac{\overline{x}^2}{S_{xx}}\big)
}}
\]
必定服从自由度为$n-2$的$t$分布，且与$\beta_0,\beta_1$以及
$\sigma^2$的取值无关。仿照$\beta_1$的置信区间与假设检验过程的
推导步骤，可得到如下结论：

1. $\beta_0$的一个置信水平为$1-\alpha$的置信区间为
   \[
   \left[
   \widehat\beta_0
   -t_{\alpha/2}(n\!-\!2)
   \sqrt{\widehat{\sigma^2}\!\left(\frac{1}{n}
   \!+\!\frac{\overline{x}^2}{S_{xx}}\right)},\
   \widehat\beta_0
   +t_{\alpha/2}(n\!-\!2)
   \sqrt{\widehat{\sigma^2}\!\left(\frac{1}{n}\!+\!\frac{\overline{x}^2}{S_{xx}}\right)}
   \right].
   \]

2. 考虑假设检验问题
   \[
   H_0: \beta_0 = \beta_{0,0},\qquad H_1:\beta_0\neq\beta_{0,0},
   \]
   其中$\beta_{0,0}$为事先取定的常数。则可以取检验统计量为
   \[
   T = \frac{\widehat\beta_0-\beta_{0,0}}{\sqrt{\widehat{\sigma^2}
   \big(\frac{1}{n}+\frac{\overline{x}^2}{S_{xx}}\big)
   }},
   \]
   $p$值为
   \[
   \hat{p} = 2\!\left(1-F^t_{n-2}\!\left(\frac{\big|\widehat\beta_0-\beta_{0,0}\big|}{\sqrt{\widehat{\sigma^2}
   \big(\frac{1}{n}+\frac{\overline{x}^2}{S_{xx}}\big)
   }}\right)\right),
   \]
   而给定显著性水平$\alpha$后，相应的拒绝域可由
   \[
   \frac{\big|\widehat\beta_0-\beta_{0,0}\big|}{\sqrt{\widehat{\sigma^2}
   \big(\frac{1}{n}+\frac{\overline{x}^2}{S_{xx}}\big)
   }}>t_{\alpha/2}(n-2)
   \]
   给出。

## 回归函数值的区间估计*

现令$x_0$为任意实数，我们考虑对回归函数在$x_0$处的值
$\mu(x_0)=\beta_0+\beta_1x_0$进行区间估计。为构造枢轴量，
我们首先注意到$\widehat\mu(x_0)=\widehat\beta_0
+\widehat\beta_1x_0$是关于$Y_1,\ldots,Y_n$的线性函数，
而$Y_1,\ldots,Y_n$相互独立且服从正态分布，故$\widehat\mu(x_0)$
也服从正态分布，其期望为
\[
\mathbb{E}\!\left[\widehat\mu(x_0)\right]
=\mu(x_0) = \beta_0+\beta_1x_0,
\]
而方差则为
\[
\begin{aligned}
\operatorname{Var}(\widehat\mu(x_0))
={} & \operatorname{Var}(\widehat\beta_0+\widehat\beta_1 x_0) \\
={} &
\operatorname{Var}(\widehat\beta_0)
+x_0^2\operatorname{Var}(\widehat\beta_1)
+2x_0\operatorname{Cov}(\widehat\beta_0,\widehat\beta_1) \\
={} &
\sigma^2\!\left(\frac{1}{n}+\frac{\overline{x}^2}{S_{xx}}\right)+x_0^2\cdot\frac{\sigma^2}{S_{xx}}
-2\frac{x_0\overline{x}}{S_{xx}}\sigma^2 \\
={} &
\sigma^2\!\left(
\frac{1}{n} + \frac{(x_0-\overline{x})^2}{S_{xx}}
\right).
\end{aligned}
\]
根据上述结果，我们考虑构造如下枢轴量：
\[
\frac{\widehat{\mu}(x_0)
-\mu(x_0)}{
\sqrt{\widehat{\sigma^2}\big(\frac{1}{n}
+\frac{(x_0-\overline{x})^2}{S_{xx}}\big)}
}.
\]
不难基于 @lemma:simple_linear_regression_var_est_distribution
验证该枢轴量服从分布$t(n-2)$，故
\[
\mathbb{P}\!\left(
-t_{\alpha/2}(n\!-\!2)
\leq
\frac{\widehat\mu(x_0)-\mu(x_0)}{
\sqrt{\widehat{\sigma^2}\big(\frac{1}{n}
+\frac{(x_0-\overline{x})^2}{S_{xx}}\big)}}
\leq t_{\alpha/2}(n\!-\!2)
\right)=1-\alpha,
\]
经过等价变形可得
\[
\mathbb{P}\!\left(
\widehat\mu^l(x_0)
\leq\mu(x_0)
\leq
\widehat\mu^u(x_0)
\right) = 1-\alpha,
\]
其中
\[
\begin{aligned}
\widehat\mu^l(x_0)
={} & \widehat\mu(x_0)
-t_{\alpha/2}(n\!-\!2)
\sqrt{\widehat{\sigma^2}\!\left(
\frac{1}{n}+\frac{(x_0-\overline{x})^2}{S_{xx}}
\right)}, \\
\widehat\mu^u(x_0)
={} &
\widehat\mu(x_0)
+t_{\alpha/2}(n\!-\!2)
\sqrt{\widehat{\sigma^2}\!\left(
\frac{1}{n}+\frac{(x_0-\overline{x})^2}{S_{xx}}
\right)}.
\end{aligned}
\]
故$\mu(x_0)=\beta_0+\beta_1x_0$的一个置信水平为$1-\alpha$的
置信区间为$\left[\widehat\mu^l(x_0),\widehat\mu^u(x_0)\right]$。
不难发现，$|x_0-\overline{x}|$越大，则置信区间的宽度
$\widehat\mu^u(x_0)-\widehat\mu^l(x_0)$也就越大，这意味着，
在保持置信水平为$1-\alpha$的情况下，$x_0$越远离$\overline{x}$，
则区间估计的精度越低。

需要注意的是，$\left[\widehat\mu^l(x_0),\widehat\mu^u(x_0)\right]$
给出的只是单个点$x_0$处回归函数值$\mu(x_0)$的置信区间，我们并不能
把它理解为“回归函数$\mu(x)$的图像落在$\widehat\mu^l(x_0)$与
$\widehat\mu^u(x_0)$之间的概率为$1-\alpha$”。

## （${}^\star$）@lemma:simple_linear_regression_var_est_distribution 的证明* {@subsection:linear_regression_SSres_chi2_proof}

为符号上的方便，令
\[
\boldsymbol{\beta}=\begin{bmatrix}
\beta_0 \\
\beta_1
\end{bmatrix},
\quad\widehat{\boldsymbol{\beta}}
=\begin{bmatrix}
\widehat\beta_0 \\ \widehat\beta_1
\end{bmatrix},
\quad
\mathbf{X} = \begin{bmatrix}
1 & x_1 \\
\vdots & \vdots \\
1 & x_n
\end{bmatrix},
\quad
\boldsymbol{Y} = \begin{bmatrix}
Y_1 \\ \vdots \\ Y_n
\end{bmatrix},
\quad
\boldsymbol{\varepsilon}
=\begin{bmatrix}
\varepsilon_1 \\ \vdots \\ \varepsilon_n
\end{bmatrix},
\quad
\boldsymbol{e}
=\begin{bmatrix}
e_1 \\ \vdots \\ e_n
\end{bmatrix}.
\]
且用$\mathbf{I}_k$表示$k\times k$单位阵。则不难验证
\[
\begin{aligned}
\boldsymbol{Y}
={} & \mathbf{X}\boldsymbol{\beta}+\boldsymbol{\varepsilon}, \\
\boldsymbol{e} ={} & \boldsymbol{Y}
-\mathbf{X}\widehat{\boldsymbol{\beta}}
=\mathbf{X}\big(\boldsymbol{\beta}-\widehat{\boldsymbol{\beta}}\big)
+\boldsymbol{\varepsilon},
\end{aligned}
\]
且normal equations可表示为如下形式：
\[
\mathbf{X}^\mathsf{T}\mathbf{X}\widehat{\boldsymbol{\beta}}
=\begin{bmatrix}
n & \sum_{i=1}^n x_i \\
\sum_{i=1}^n x_i & \sum_{i=1}^n x_i^2
\end{bmatrix}
\begin{bmatrix}
\widehat\beta_0 \\
\widehat\beta_1
\end{bmatrix}
=\begin{bmatrix}
1 & \cdots & 1 \\
x_1 & \cdots & x_n
\end{bmatrix}
\begin{bmatrix}
Y_1 \\ \vdots \\ Y_n
\end{bmatrix}
=\mathbf{X}^\mathsf{T}\boldsymbol{Y},
\]
故
\[
\begin{aligned}
\widehat{\boldsymbol{\beta}}
= \left(\mathbf{X}^\mathsf{T}\mathbf{X}\right)^{-1}\mathbf{X}^\mathsf{T}\boldsymbol{Y}
= \left(\mathbf{X}^\mathsf{T}\mathbf{X}\right)^{-1}\mathbf{X}^\mathsf{T}(\mathbf{X}\boldsymbol{\beta}+\boldsymbol{\varepsilon})
= \boldsymbol{\beta}
+\left(\mathbf{X}^\mathsf{T}\mathbf{X}\right)^{-1}\mathbf{X}^\mathsf{T}\boldsymbol{\varepsilon}.
\end{aligned}
\]
考虑对矩阵$\mathbf{X}$做奇异值分解，则由于$\mathbf{X}$列满秩，可得
\[
\mathbf{X} = \begin{bmatrix}
\mathbf{U}_\mathrm{c} & \mathbf{U}_\perp
\end{bmatrix}\begin{bmatrix}
\boldsymbol{\Sigma}_\mathrm{c} \\
\mathbf{0}_{(n-2)\times 2}
\end{bmatrix}\mathbf{V}^\mathsf{T}
=\mathbf{U}_\mathrm{c}\boldsymbol{\Sigma}_\mathrm{c}\mathbf{V}^\mathsf{T}
,
\]
其中$\boldsymbol{\Sigma}_\mathrm{c}$为$2\times2$的对角阵
且对角元均大于$0$，$\mathbf{V}\in\mathbb{R}^{2\times 2}$为正交阵，
而$\mathbf{U}_\mathrm{c}\in\mathbb{R}^{n\times 2},
\mathbf{U}_\perp\in\mathbb{R}^{n\times(n-2)}$使得
$\mathbf{U}=\big[
\mathbf{U}_\mathrm{c}\ \  \mathbf{U}_\perp
\big]\in\mathbb{R}^{n\times n}$为正交阵，即
\[
\begin{bmatrix}
\mathbf{U}_\mathrm{c} & \mathbf{U}_\perp
\end{bmatrix}^\mathsf{T}
\begin{bmatrix}
\mathbf{U}_\mathrm{c} & \mathbf{U}_\perp
\end{bmatrix}
=\begin{bmatrix}
\mathbf{U}_\mathrm{c}^\mathsf{T} \mathbf{U}_\mathrm{c} & \mathbf{U}_\mathrm{c}^\mathsf{T}\mathbf{U}_\perp \\
\mathbf{U}_\perp^\mathsf{T}\mathbf{U}_\mathrm{c} & \mathbf{U}_\perp^\mathsf{T}\mathbf{U}_\perp
\end{bmatrix}
=\begin{bmatrix}
\mathbf{I}_2 & \mathbf{0}_{2\times(n-2)} \\
\mathbf{0}_{(n-2)\times 2} & \mathbf{I}_{n-2}
\end{bmatrix}
\]
以及
\[
\begin{bmatrix}
\mathbf{U}_\mathrm{c} & \mathbf{U}_\perp
\end{bmatrix}\begin{bmatrix}
\mathbf{U}_\mathrm{c} & \mathbf{U}_\perp
\end{bmatrix}^\mathsf{T} = \mathbf{U}_\mathrm{c}\mathbf{U}_\mathrm{c}^\mathsf{T}+\mathbf{U}_\perp\mathbf{U}_\perp^\mathsf{T}=\mathbf{I}_n.
\]
故
\[
\begin{aligned}
\widehat{\boldsymbol{\beta}}
-\boldsymbol{\beta}
={} & \left(\mathbf{X}^\mathsf{T}\mathbf{X}\right)^{-1}\mathbf{X}^\mathsf{T}\boldsymbol{\varepsilon}
=\left(
\mathbf{V}\boldsymbol{\Sigma}_\mathrm{c}^2\mathbf{V}^\mathsf{T}
\right)^{-1}\mathbf{V}^\mathsf{T}
\boldsymbol{\Sigma}\mathbf{U}_\mathrm{c}^\mathsf{T}\boldsymbol{\varepsilon}
=
\mathbf{V}^\mathsf{T}\boldsymbol{\Sigma}_\mathrm{c}^{-1}\mathbf{U}_\mathrm{c}^\mathsf{T}\boldsymbol{\varepsilon}.
\end{aligned}
\]
由此可得
\[
\begin{aligned}
\boldsymbol{e}
= \mathbf{X}\big(\boldsymbol{\beta}-\widehat{\boldsymbol{\beta}}\big)
+\boldsymbol{\varepsilon}
=-\mathbf{U}_\mathrm{c}\boldsymbol{\Sigma}_\mathrm{c}\mathbf{V}^\mathsf{T}\mathbf{V}\boldsymbol{\Sigma}_\mathrm{c}^{-1}\mathbf{U}_\mathrm{c}^\mathsf{T}\boldsymbol{\varepsilon}
+\boldsymbol{\varepsilon}
=\left(\mathbf{I}_n
-\mathbf{U}_\mathrm{c}\mathbf{U}_\mathrm{c}^\mathsf{T}\right)\boldsymbol{\varepsilon}
=\mathbf{U}_\perp\mathbf{U}_\perp^\mathsf{T}\boldsymbol{\varepsilon}.
\end{aligned}
\]
由于$\big[
\mathbf{U}_\mathrm{c}\ \  \mathbf{U}_\perp
\big]$为正交阵，而$\boldsymbol{\varepsilon}$服从多元正态分布
$\mathcal{N}(\boldsymbol{0},\sigma^2\mathbf{I}_n)$，故随机向量
\[
\tilde{\boldsymbol{\varepsilon}}
=
\begin{bmatrix}
\mathbf{U}_\mathrm{c} & \mathbf{U}_\perp
\end{bmatrix}^{\!\mathsf{T}}\!\boldsymbol{\varepsilon}
=\begin{bmatrix}
\mathbf{U}_\mathrm{c}^\mathsf{T}\boldsymbol{\varepsilon} \\
\mathbf{U}_\perp^\mathsf{T}\boldsymbol{\varepsilon}
\end{bmatrix}
\]
同样服从多元正态分布$\mathcal{N}(\boldsymbol{0},\sigma^2\mathbf{I}_n)$，
而该多元正态分布的协方差矩阵为对角阵，这意味着
$\tilde{\boldsymbol{\varepsilon}}$的各个分量相互独立。再注意到
$\widehat{\boldsymbol{\beta}}
=\boldsymbol{\beta}+\mathbf{V}^\mathsf{T}
\boldsymbol{\Sigma}_\mathrm{c}^{-1}\mathbf{U}_\mathrm{c}^\mathsf{T}
\boldsymbol{\varepsilon}$是$\tilde{\boldsymbol{\varepsilon}}$
的前两个分量的函数，而
\[
{SS}_\text{Res} = \sum_{i=1}^n e_i^2 = \boldsymbol{e}^\mathsf{T}\boldsymbol{e}
=\boldsymbol{\varepsilon}
^\mathsf{T}\mathbf{U}_\perp\mathbf{U}_\perp^\mathsf{T}\mathbf{U}_\perp\mathbf{U}_\perp^\mathsf{T}\boldsymbol{\varepsilon}
=\boldsymbol{\varepsilon}
^\mathsf{T}\mathbf{U}_\perp\mathbf{U}_\perp^\mathsf{T}\boldsymbol{\varepsilon}
\]
是$\tilde{\boldsymbol{\varepsilon}}$的后$n-2$个分量的函数，
可得$\widehat{\boldsymbol{\beta}}$与${SS}_{\text{Res}}$相互独立。

为了求${SS}_{\text{Res}}$的分布，注意到
\[
\begin{aligned}
\frac{{SS}_{\text{Res}}}{\sigma^2}
={} &
\frac{1}{\sigma^2}\boldsymbol{\varepsilon}
^\mathsf{T}\mathbf{U}_\perp\mathbf{U}_\perp^\mathsf{T}\boldsymbol{\varepsilon}
=\sum_{i=1}^{n-2}
\left(\sigma^{-1}\mathbf{U}_\perp^\mathsf{T}\boldsymbol{\varepsilon}\right)_i^2,
\end{aligned}
\]
而由于$\mathbf{U}_\perp^\mathsf{T}\boldsymbol{\varepsilon}$的分量
即为$\tilde{\boldsymbol{\varepsilon}}$的后$n-2$个分量，
故$\sigma^{-1}\mathbf{U}_\perp^\mathsf{T}\boldsymbol{\varepsilon}$
的各个分量相互独立且服从标准正态分布$\mathcal{N}(0,1)$。由此可得
${SS}_{\text{Res}}/\sigma^2\sim\chi^2(n-2)$。

[^1]: 为了符号上的简便，
    后文中我们经常将一个统计量（关于 $(x_1,Y_1),\ldots,(x_n,Y_n)$的函数）与该统计量在某组样本观测值
    $(x_1,y_1),\ldots,(x_n,y_n)$上的取值用同一个符号表示，读者需根据上下文确定指代的是前者还是后者。
