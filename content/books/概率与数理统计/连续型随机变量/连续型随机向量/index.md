---
title: 连续型随机向量
---
为教学上的方便，本节中主要介绍二维连续型随机向量的相关概念与结果，
但它们不难推广到更一般的$n$维情况。

::: definition {@definition:continuous_random_vector}
称随机向量$(X,Y)$为一**连续型随机向量**，
若存在非负二元函数
$f_{X,Y}:\mathbb{R}^2\rightarrow\left[0,+\infty\right[$，
使得对任意区间$I,J\subseteq\mathbb{R}$，有

```math {@eq:defn_joint_pdf}
\mathbb{P}((X,Y)\in I\times J)
=\iint_{I\times J} f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y.
```

函数$f_{X,Y}$被称为随机向量$(X,Y)$的一个**联合概率密度函数**
（joint probability density function, joint p.d.f。）。
:::

对于连续型随机向量$(X,Y)$，虽然 @definition:continuous_random_vector  仅直接给出了
$(X,Y)$取值于矩形区域中的概率，但对于常见的$\mathbb{R}^2$的子集$B$，
原则上均可证明
\[
    \mathbb{P}((X,Y)\in B)
    =\iint_B f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y,
\]
其中积分$\iint_{\,B} f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y$可以理解为
$\iint_{\,\mathbb{R}^2} \mathsf{1}_B(x,y)\cdot f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y$。
上式的严格证明属于高等概率论的内容，本讲义不做要求，但读者应能够熟练运用。

与一维情形类似，若$(X,Y)$为连续型随机向量，
则其联合概率密度函数$f_{X,Y}$满足

1. （非负性）对任意$(x,y)\in\mathbb{R}^2$，均有$f_{X,Y}(x,y)\geq 0$；

2. （归一性）$\displaystyle\iint_{\mathbb{R}^2} f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y=1$。

该结论的证明留给读者完成。这个结论的逆命题也同样成立：
若二元函数$f:\mathbb{R}^2\rightarrow\mathbb{R}$满足非负性
与归一性条件，则存在一概率空间$(\Omega,\mathcal{F},\mathbb{P})$
及其上的连续型随机向量$(X,Y)$，使得$f$为$(X,Y)$的联合概率密度函数。
该逆命题的证明不做要求。

需要指出的是，当$X$与$Y$分别为连续型随机变量时，
$(X,Y)$并不一定是连续型随机向量。例如，
若$X$服从$\left[0,1\right]$上的均匀分布，而$Y=-X$，
则$X,Y$均为连续型随机变量，但由于$\mathbb{P}(X+Y=0)=1$，
而对任意非负的可积函数
$f:\mathbb{R}^2\rightarrow \left[0,+\infty\right[$，均有
\[
    \iint_{B} f(x,y)\,\mathrm{d} x\mathrm{d} y = 0,
    \qquad\text{其中}\ \ B = \{(x,y)\in\mathbb{R}^2 \mid x+y=0\},
\]
可知$(X,Y)$不是连续型随机向量。

但另一方面，可以证明，若$(X,Y)$为连续型随机向量，
则$X$与$Y$均为连续型随机变量，且他们各自的概率密度函数
可由联合概率密度函数$f_{X,Y}$求得。

::: theorem {@theorem:marginal_pdf}
设$(X,Y)$为连续型随机向量，其联合分布密度函数为$f_{X,Y}$。
则$X$与$Y$均为连续型随机变量，且二者的概率密度函数分别为
\[
    \begin{aligned}
    f_X(x) & = \int_{-\infty}^{+\infty} f_{X,Y}(x,y)\,\mathrm{d} y,\qquad\forall x\in\mathbb{R}, \\
    f_Y(y) & = \int_{-\infty}^{+\infty} f_{X,Y}(x,y)\,\mathrm{d} x,\qquad\forall y\in\mathbb{R}.
    \end{aligned}
\]
:::

::: proof
任取区间$I\subseteq\mathbb{R}$，
并令$J=\left]-\infty,+\infty\right[$，
则由 @definition:continuous_random_vector，有
\[
    \begin{aligned}
    \mathbb{P}(X\in I)
    & =\mathbb{P}((X,Y)\in I\times J) \\
    & =\iint_{I\times J}
    f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y \\
    & =\int_I\left(
    \int_{-\infty}^{+\infty}
    f_{X,Y}(x,y)\,\mathrm{d} y
    \right)\mathrm{d} x.
    \end{aligned}
\]
观察上式并与 @definition:continuous_rv
及式 @eq:PDF_defn  对比，即可看出$X$为连续型随机变量，
其概率密度函数为
\[
    f_X(x) = \int_{-\infty}^{+\infty}
    f_{X,Y}(x,y)\,\mathrm{d} y.
\]
对于随机变量$Y$同理。
:::

我们将 @theorem:marginal_pdf  中
$X,Y$的概率密度函数$f_X,f_Y$分别称为$f_{X,Y}$关于第1个
与第2个分量的**边缘概率密度函数**
（marginal probability density function, marginal p.d.f。）。
