---
title: 回归显著性检验
---

<problems>
- “$F$ 检验法”中 ${\widehat\beta_1}^2$ 的计算第三行末项 ${SS}_{\mathrm{R}}$ 似乎应为 ${SS}_{\mathrm{R}}/S_{xx}$（与下文结论 ${\widehat\beta_1}^2 = {SS}_{\mathrm{R}}/S_{xx}$ 一致）。
</problems>

对回归系数$\beta_1$进行假设检验的方法
已在[第10.3节](/books/概率与数理统计/一元线性回归/回归系数的区间估计与假设检验/)第1小节
中进行了介绍。在实际问题中，最常用的针对$\beta_1$的假设检验问题
具有如下形式：

```math {@eq:simple_linear_regression_significance_test}
H_0: \beta_1 = 0,\qquad H_1:\beta_1\neq 0.
```

这是因为若我们无法拒绝原假设$H_0$，则很有可能意味着如下几种情况：

- $x$对$Y$的取值在平均意义上并没有影响。此时通常需要考虑寻找
  其它对$Y$的取值具有显著影响的变量。

- $x$对$Y$取值的影响并不能简单地由
  $\mathbb{E}\!\left[Y \mkern2mu|\mkern2mu x\right]=\beta_0+\beta_1 x$所表述。此时
  通常需要考虑用其它统计模型对$x$与$Y$的关系进行建模。

- 样本容量$n$太小。此时需要收集更多的数据以得到更确切的结论。

总之，若无法拒绝原假设$H_0$，则说明得到的线性回归模型并不理想，
尚不能直接应用而需要进一步更正。我们将
@eq:simple_linear_regression_significance_test
给出的假设检验问题称为**回归显著性检验**（test for significance of regression）。

对于一元线性回归，其回归显著性检验可以有三种等价的方法，
我们依次对其进行介绍。

**$t$检验法。** 显著性回归的$t$检验法就是
[第10.3节](/books/概率与数理统计/一元线性回归/回归系数的区间估计与假设检验/)第1小节中
给出的检验法：取

```math {@eq:linear_regression_significance_t_test}
T = \frac{\widehat{\beta}_1}{\sqrt{\widehat{\sigma^2}/S_{xx}}}
=\sqrt{\frac{(n-2)S_{xx}}{{SS}_{\text{Res}}}}\cdot\widehat\beta_1,
```

则在原假设$H_0:\beta_1=0$下，$T$服从分布$t(n-2)$，相应的
$p$值与拒绝域分别由
\[
\hat{p} = 2\!\left(1-F^t_{n-2}\!\left(\frac{\big|\widehat\beta_1\big|}{\sqrt{\widehat{\sigma^2}/S_{xx}}}\right)\right)\qquad\text{与}\qquad
\frac{\big|\widehat\beta_1\big|}{\sqrt{\widehat{\sigma^2}/S_{xx}}}>t_{\alpha/2}
\]
给出，其中$\alpha$为事先取定的显著性水平。

**$F$检验法。** 在 @exercise:t_test_F_test_equiv
中已经让读者证明，服从分布$t(k)$的随机变量在平方后服从分布$F(1,k)$，
因此我们也可以取检验统计量为

```math {@eq:linear_regression_F_test1}
F = T^2 = \frac{{\widehat\beta_1}^2}{\widehat{\sigma^2}/S_{xx}},
```

则在原假设$H_0$下有$F\sim F(1,n-2)$，由此可得相应的$p$值与拒绝域
的形式。另一方面，检验统计量$F$实际上还可表示为

```math {@eq:linear_regression_F_test2}
F = \frac{{SS}_{\mathrm{R}}}{
{SS}_{\text{Res}}/(n-2)},
```

其中
\[
{SS}_{\mathrm{R}} = \sum_{i=1}^n \big(\widehat{Y}_i - \overline{Y}\big)^2
=\sum_{i=1}^n \big(\widehat\beta_0+\widehat\beta_1 x_i-\overline{Y}\big)^2
\]
被称为**回归平方和**（regression sum of squares）。
式 @eq:linear_regression_F_test2 成立是因为
\[
\begin{aligned}
{\widehat\beta_1}^2
={} & \widehat\beta_1\cdot\frac{1}{S_{xx}}\sum_{i=1}^n (x_i-\overline{x})\big(Y_i-\overline{Y}\big) \\
={} &
\frac{\widehat\beta_1}{S_{xx}}\sum_{i=1}^n \big( x_i-\overline{x}\big)\big(Y_i-\widehat{Y}_i\big)
+\frac{1}{S_{xx}}\sum_{i=1}^n \big(\widehat\beta_1x_i-\widehat\beta_1\overline{x}\big)\big(\widehat{Y}_i-\overline{Y}\big) \\
={} &
\frac{\widehat\beta_1}{S_{xx}}\sum_{i=1}^n
\big(x_i-\overline{x}\big)\big(Y_i-\widehat{Y}_i\big) + {SS}_{\mathrm{R}},
\end{aligned}
\]
而由normal equations @eq:LSE_normal_equation 可推得
\[
\begin{aligned}
0 ={} &
\sum_{i=1}^n x_i\big(Y_i-\widehat\beta_0 - \widehat\beta_1x_i\big)
=\sum_{i=1}^n x_i\big(Y_i-\widehat{Y}_i\big),
\end{aligned}
\]
以及
\[
\begin{aligned}
0
={} &
\sum_{i=1}^n \big(Y_i-\widehat\beta_0-\widehat\beta_1x_i\big) = \sum_{i=1}^n
\big(Y_i-\widehat{Y}_i\big),
\end{aligned}
\]
故
\[
\sum_{i=1}^n
\big(x_i-\overline{x}\big)\big(Y_i-\widehat{Y}_i\big)
=
\sum_{i=1}^n
x_i\big(Y_i-\widehat{Y}_i\big)
-\overline{x}
\sum_{i=1}^n
\big(Y_i-\widehat{Y}_i\big) = 0,
\]
从而
\[
{\widehat\beta_1}^2 = \frac{{SS}_{\mathrm{R}}}{S_{xx}},
\]
再将其带入式 @eq:linear_regression_F_test1 中并利用
$\widehat{\sigma^2}={SS}_{\text{Res}}/(n-2)$即可得到
表达式 @eq:linear_regression_F_test2。由此可知，
$p$值与拒绝域还可表示为
\[
\hat{p} = 1-F^{F}_{1,n-2}\!\left(\frac{{SS}_{\mathrm{R}}}{
{SS}_{\text{Res}}/(n-2)}\right)
\qquad\text{与}\qquad
\frac{{SS}_{\mathrm{R}}}{
{SS}_{\text{Res}}/(n-2)}>F_{\alpha}(1,n-2),
\]
其中$F^F_{1,n-2}$表示分布$F(1,n-2)$的分布函数，$\alpha$为
事先给定的显著性水平。

上述$F$检验法又被称为**方差分析法**（analysis-of-variance
approach）。

**相关系数检验法。** 我们还可以利用如下**样本相关系数**

```math {@eq:linear_regression_sample_correlation}
R = \frac{\sum_{i=1}^n (x_i-\overline{x})\big(Y_i-\overline{Y})}{\sqrt{\sum_{i=1}^n (x_i-\overline{x})^2}\sqrt{\sum_{i=1}^n \big(Y_i-\overline{Y}\big)^2}}
```

对 @eq:simple_linear_regression_significance_test
进行检验：由上述$R$的定义式可得
\[
\begin{aligned}
R ={} & \frac{S_{xY}}{\sqrt{S_{xx}}\sqrt{{SS}_{\mathrm{T}}}}
=\frac{S_{xY}/S_{xx}}{\sqrt{{SS}_{\mathrm{T}}/S_{xx}}} \\
={} & \frac{\widehat\beta_1}{\sqrt{({SS}_{\mathrm{Res}}+\widehat\beta_1 S_{xY})/S_{xx}}}
=
\frac{\widehat\beta_1}{\sqrt{{SS}_{\mathrm{Res}}/S_{xx} + \widehat\beta_1^2}} \\
={} &
\frac{\sqrt{S_{xx}/{SS}_{\text{Res}}}\cdot \widehat\beta_1}{\sqrt{1+S_{xx}\widehat\beta_1^2/{SS}_{\text{Res}}}}
=\frac{T}{\sqrt{n-2+T^2}},
\end{aligned}
\]
其中$T$即为 @eq:linear_regression_significance_t_test
给出的检验统计量。上式指出，$R$与$T$之间存在连续且严格单调递增的
对应关系。反解上式可得
\[
T=\frac{\sqrt{n-2}R}{\sqrt{1-R^2}},
\]
由此还可得到
\[
F = T^2 = \frac{(n-2)R^2}{1-R^2}
\qquad\text{以及}
\qquad
R^2 = \frac{F}{n-2+F}.
\]
故$p$值为
\[
\hat{p} = 2\!\left(1-F^t_{n-2}\!\left(
\frac{\sqrt{n-2}|r|}{\sqrt{1-r^2}}
\right)\right)
=1-F^F_{1,n-2}\!\left(\frac{(n-2)r^2}{1-r^2}\right),
\]
其中$r$为统计量$R$在代入样本观测值后的取值，而拒绝域则可表示为
\[
|r| > \frac{t_{\alpha/2}(n-2)}{\sqrt{n-2+[t_{\alpha/2}(n-2)]^2}}
\quad\text{或}\quad
r^2 > \frac{F_{\alpha}(1,n-2)}{n-2+F_{\alpha}(1,n-2)},
\]
其中$\alpha$为显著性水平。
