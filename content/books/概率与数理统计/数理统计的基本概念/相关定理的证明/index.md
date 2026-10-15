---
title: '\optsign相关定理的证明'
---
## @theorem:sample_variance_chi_squared  的证明* {@subsection:proof_sample_variance_chi_squared}

令$Y_i = (X_i-\mu)/\sigma$，则有$Y_i\sim\mathcal{N}(0,1)$
且$Y_1,\ldots,Y_n$相互独立。记$\boldsymbol{Y}=(Y_1,\ldots,Y_n)$，
则随机向量$\boldsymbol{Y}$的联合概率密度函数为
\[
    \begin{aligned}
    f_{\boldsymbol{Y}}(\boldsymbol{y})
    ={} & \prod_{i=1}^n \frac{1}{\sqrt{2\pi}}\exp\!\left(-\frac{y_i^2}{2}\right) \\
    ={} & \frac{1}{(2\pi)^{n/2}}\exp\!\left(-\frac{\boldsymbol{y}^\mathsf{T}\boldsymbol{y}}{2}\right),
    \qquad \boldsymbol{y}=(y_1,\ldots,y_n)\in\mathbb{R}^n.
    \end{aligned}
\]
下面用$\mathbf{1}$表示分量均为$1$的$n$维（列）向量，
$\mathbf{I}$表示$n$维单位矩阵，则有

```math {@eq:scaled_sample_var_chi_squared_tmp}
\begin{aligned}
\frac{(n-1)S^2}{\sigma^2}
={} &  \sum_{i=1}^n \left(Y_i - \frac{1}{n}\sum_{j=1}^n Y_j\right)^{\!2}
=\left(\boldsymbol{Y}-\frac{1}{n}\mathbf{1}\mathbf{1}^\mathsf{T} \boldsymbol{Y}\right)^{\!\mathsf{T}}
\left(\boldsymbol{Y}-\frac{1}{n}\mathbf{1}\mathbf{1}^\mathsf{T} \boldsymbol{Y}\right)  \\
={} &
\boldsymbol{Y}^\mathsf{T}\left(\mathbf{I}-\frac{1}{n}\mathbf{1}\mathbf{1}^\mathsf{T}\right)\boldsymbol{Y}.
\end{aligned}
```

为了进一步对上式右端进行化简，考虑对实对称矩阵
$\mathbf{I}-\frac{1}{n}\mathbf{1}\mathbf{1}^\mathsf{T}$
进行正交对角化。不难看出该矩阵的一个特征值为$0$，相应的归一化的
特征向量为$\frac{1}{\sqrt{n}}\mathbf{1}$，而其它的$n-1$个
特征值均为$1$。故有
\begingroup
\[
    \mathbf{I}-\frac{1}{n}\mathbf{1}\mathbf{1}^\mathsf{T}
    =\mathbf{Q} \begin{bmatrix}
    0 \\ & 1 \\ & & \ddots \\ & & & 1
    \end{bmatrix}
    \mathbf{Q}^\mathsf{T},
    \qquad\mathbf{Q}=\begin{bmatrix}
    \dfrac{1}{\sqrt{n}}\mathbf{1} &
    \tilde{\mathbf{Q}}
    \end{bmatrix},
\]
\endgroup
其中$\tilde{\mathbf{Q}}\in\mathbb{R}^{n\times(n-1)}$的各列
正交归一且均为矩阵
$\mathbf{I}-\frac{1}{n}\mathbf{1}\mathbf{1}^\mathsf{T}$特征值$1$的
特征向量。令
\[
    \boldsymbol{Z} =
    \mathbf{Q}^\mathsf{T}\boldsymbol{Y}
    =
    \begin{bmatrix}
    \dfrac{1}{\sqrt{n}}\mathbf{1} &
    \tilde{\mathbf{Q}}
    \end{bmatrix}^\mathsf{T} \boldsymbol{Y}
    =\begin{bmatrix}
    \sqrt{n}\cdot \overline{X} \\
    \tilde{\mathbf{Q}}^\mathsf{T} \boldsymbol{Y}
    \end{bmatrix},
\]
并将正交对角化的结果代入式 @eq:scaled_sample_var_chi_squared_tmp，可得
\begingroup
\[
    \begin{aligned}
    \frac{(n-1)S^2}{\sigma^2}
    ={} & \left(\mathbf{Q}^\mathsf{T}\boldsymbol{Y}\right)^\mathsf{T} \begin{bmatrix}
    0 \\ & 1 \\ & & \ddots \\ & & & 1
    \end{bmatrix}
    \mathbf{Q}^\mathsf{T}\boldsymbol{Y}
    =\boldsymbol{Z}^\mathsf{T} \begin{bmatrix}
    0 \\ & 1 \\ & & \ddots \\ & & & 1
    \end{bmatrix}
    \boldsymbol{Z} \\
    ={} & \sum_{i=2}^n Z_i^2.
    \end{aligned}
\]
\endgroup
接下来我们需要考察随机向量$\boldsymbol{Z}$的分布。由于
$\mathbf{Q}^\mathsf{T}$为正交矩阵，利用 @corollary:rand_vec_affine_transform_pdf
可得$\boldsymbol{Z} = \mathbf{Q}^\mathsf{T}\boldsymbol{Y}$的
联合概率密度函数为
\[
    \begin{aligned}
    f_{\boldsymbol{Z}}(\boldsymbol{z})
    ={} &  f_{\boldsymbol{Y}}(\boldsymbol{Q}\boldsymbol{z})\cdot\frac{1}{|\det\mathbf{Q}^\mathsf{T}|}
    = \frac{1}{(2\pi)^{n/2}}\exp\!\left(-\frac{\boldsymbol{z}^\mathsf{T}\boldsymbol{Q}^\mathsf{T}\boldsymbol{Q}\boldsymbol{z}}{2}\right) \\
    ={} &
    \frac{1}{(2\pi)^{n/2}}\exp\!\left(-\frac{\boldsymbol{z}^\mathsf{T}\boldsymbol{z}}{2}\right)
    =\prod_{i=1}^n \frac{1}{\sqrt{2\pi}}\exp\!\left(-\frac{z_i^2}{2}\right),\qquad
    \boldsymbol{z}=(z_1,\ldots,z_n)\in\mathbb{R}^n.
    \end{aligned}
\]
故$\boldsymbol{Z}$的各个分量$Z_1,\ldots,Z_n$相互独立
且均服从标准正态分布$\mathcal{N}(0,1)$。由此可立即看出
$\overline{X}=Z_1/\sqrt{n}$与
$(n-1)S^2/\sigma^2=Z_2^2+\cdots+Z_n^2$相互独立，
再由 @corollary:chi_squared  可得
$(n-1)S^2/\sigma^2$服从自由度为$n-1$的$\chi^2$分布。

## @theorem:t_distribution_basic  的证明* {@subsection:proof_t_distribution_basic}

首先需要分析$Z=\sqrt{Y/n}$的分布。不难看出，对任意$z\leq 0$
有$F_{Z}(z)=\mathbb{P}\!\left(Z\leq z\right)=0$。
而对任意$z>0$，有
\[
    \begin{aligned}
    F_{Z}(z)
    ={} & \mathbb{P}\!\left(Y\leq nz^2\right)
    =\int_0^{nz^2}\frac{1}{2^{n/2}\,\Gamma(n/2)}\,x^{n/2-1}\mathrm{e}^{-x/2}\,\mathrm{d} x,
    \end{aligned}
\]
利用导数的链式法则可看出上式右端对任意$z>0$可导，其导函数为
\[
    \frac{1}{2^{n/2}\,\Gamma(n/2)} (nz^2)^{n/2-1}\mathrm{e}^{-nz^2/2}\cdot 2nz
    =
    2\,\frac{(n/2)^{n/2}}{\Gamma(n/2)}\, z^{n-1}\exp\!\left(-\frac{nz^2}{2}\right).
\]
故
\[
    f_{Z}(z) = \begin{cases}
    \displaystyle 2\,\frac{(n/2)^{n/2}}{\Gamma(n/2)}\, z^{n-1}\exp\!\left(-\frac{nz^2}{2}\right), & z>0, \\
    0, & z\leq 0.
    \end{cases}
\]
接下来利用 @exercise:independent_rv_prod_div_pdf
的第二条结论，可得$\frac{X}{\sqrt{Y/n}}=X/Z$为连续型随机变量，
且其概率密度函数为
\[
    \begin{aligned}
    f_{X/Z}(t)
    ={} & \int_{-\infty}^{+\infty} |z|\,f_Z(z)\, f_{X}(tz)\,\mathrm{d} z \\
    ={} & \int_0^{+\infty} z\cdot 2\,\frac{(n/2)^{n/2}}{\Gamma(n/2)}\,z^{n-1}\exp\!\left(-\frac{nz^2}{2}\right)
    \cdot \frac{1}{\sqrt{2\pi}}\exp\!\left(-\frac{t^2z^2}{2}\right)\mathrm{d} z \\
    ={} &
    \frac{\sqrt{2}\,(n/2)^{n/2}}{\sqrt{\pi}\,\Gamma(n/2)}
    \int_0^{+\infty} z^n\exp\!\left[-\frac{(n+t^2)z^2}{2}\right]\mathrm{d} z.
    \end{aligned}
\]
对上式右端做换元$u=(n+t^2)z^2/2$，可得
\[
    \begin{aligned}
    f_{X/Z}(t)
    ={} & \frac{\sqrt{2}\,(n/2)^{n/2}}{\sqrt{\pi}\,\Gamma(n/2)}
    \int_0^{+\infty}
    \frac{2^{(n-1)/2}}{(n+t^2)^{(n+1)/2}}
    \, u^{(n-1)/2}\mathrm{e}^{-u}\,\mathrm{d} u \\
    ={} &
    \frac{1}{\sqrt{\pi n}\,\Gamma(n/2)}\left(1+\frac{t^2}{n}\right)^{\!-(n+1)/2}\cdot \Gamma\!\left(\frac{n+1}{2}\right),
    \end{aligned}
\]
其中最后一步利用了$\Gamma$函数的定义。故
$X/Z=\frac{X}{\sqrt{Y/n}}$服从自由度为$n$的$t$分布。

## @theorem:F_distribution_basic  的证明* {@subsection:proof_F_distribution_basic}

为证明 @theorem:F_distribution_basic，只需注意到
$U/n_1$与$V/n_2$的概率密度函数分别为
\[
    \begin{aligned}
    f_{U/n_1}(x) & = \begin{cases}
    \displaystyle\frac{n_1}{2^{n_1/2}\,\Gamma(n_1/2)}\,(n_1x)^{n_1/2-1}\mathrm{e}^{-n_1x/2}, & \text{若}\ x>0, \\
    0, &\text{若}\ x\leq 0,
    \end{cases} \\
    f_{V/n_2}(x) & = \begin{cases}
    \displaystyle\frac{n_2}{2^{n_2/2}\,\Gamma(n_2/2)}\,(n_2x)^{n_2/2-1}\mathrm{e}^{-n_2x/2}, & \text{若}\ x>0, \\
    0, &\text{若}\ x\leq 0,
    \end{cases}
    \end{aligned}
\]
再将它们代入 @exercise:independent_rv_prod_div_pdf
第二部分的结论，可得$F$的概率密度$f_F(z)$在$z>0$时为
\[
    \begin{aligned}
    f_{F}(z) ={} &
    \int_{-\infty}^{+\infty}|x|\,
    f_{V/n_2}(x)\,f_{U/n_1}(zx)\,\mathrm{d} x \\
    ={} &
    \frac{n_1^{n_1/2}\,n_2^{n_2/2}}{2^{(n_1+n_2)/2}\,\Gamma(n_1/2)\,\Gamma(n_2/2)}\,
    z^{n_1/2-1}
    \int_0^{+\infty}
    x^{(n_1+n_2)/2-1}\mathrm{e}^{-(n_1z+n_2)x/2}\mathrm{d} x \\
    ={} &
    \frac{n_1^{n_1/2}\,n_2^{n_2/2}}{\Gamma(n_1/2)\,\Gamma(n_2/2)}\,
    z^{n_1/2-1}
    \left(n_1z+n_2\right)^{-(n_1+n_2)/2}
    \int_0^{+\infty}
    t^{(n_1+n_2)/2-1}\mathrm{e}^{-t}\mathrm{d} t \\
    ={} &
    \frac{\Gamma((n_1+n_2)/2)}{\Gamma(n_1/2)\,\Gamma(n_2/2)}
    \left(\frac{n_1}{n_2}\right)^{\!\!n_1/2}
    z^{n_1/2-1}
    \left(1+\frac{n_1}{n_2}z\right)^{\!\!-(n_1+n_2)/2},
    \end{aligned}
\]
而$z<0$时则有$f_{F}(z) =
\int_{-\infty}^{+\infty}|x|\,
f_{V/n_2}(x)\,f_{U/n_1}(zx)\,\mathrm{d} x = 0$。
将$F$的概率密度函数$f_F$与$F$分布的定义进行对照，
即可看出$F\sim F(n_1,n_2)$。
