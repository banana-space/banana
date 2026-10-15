---
title: 期望与方差
---
离散型随机变量的分布列能够完整刻画其统计规律性，
但不一定能较为直观地给出随机变量取值上的一些特点。
本节中我们引入一些随机变量的数字特征，
这些数字特征能够更加直观地揭示随机变量取值在某些方面的性质。

我们首先介绍离散型随机变量的期望，它是随机变量的所有取值
相对于各自概率的加权平均。

::: definition {@definition:expectation_discrete}
设$X$为离散型随机变量，$p_X$为其分布列。
若$\sum_{x} |x|\cdot p_X(x)$收敛，
则定义$X$的**期望**（expected value或expectation）为
\[
    \mathbb{E}[X] = \sum_{x} x\cdot p_X(x).
\]
若$\sum_{x} |x|\cdot p_X(x)$发散，则称$\mathbb{E}[X]$不存在。
:::

直观上，我们可以把随机变量$X$的期望$\mathbb{E}[X]$
看作是最能代表$X$的一个确定性数值。此外，由期望的定义式，
我们也可以将$\mathbb{E}[X]$直观理解为分布列$p_X$的“质心”。

@definition:expectation_discrete  之所以要求
$\sum_{x}|x|\cdot p_X(x)$收敛时$\mathbb{E}[X]$才能存在，
是为了保证$\sum_x x\cdot p_X(x)$的值
与求和式中各项的排列顺序没有关系；对此不太熟悉的读者可回顾
数学分析中级数的绝对收敛以及黎曼重排定理的相关知识，
例如可参阅[@zhangzhusheng_vol3]第十八章第5节。

::: example
设$E$为任一事件，则有
\[
    \mathbb{E}\!\left[\mathsf{1}_E\right] = 1\cdot\mathbb{P}(E) + 0\cdot\mathbb{P}(E^c) = \mathbb{P}(E).
\]
换句话说，任一事件的概率就等于其指示函数的期望。
从该结论还可看出，若一个随机变量服从参数为$p$的伯努利分布，
则其期望就等于$p$。
:::

接下来我们介绍一个计算期望的重要方法。

::: theorem {@theorem:law_unconscious_statistician_discrete}
设$X$为离散型随机变量，$p_X$为其分布列，
$g:\mathbb{R}\rightarrow\mathbb{R}$为任意函数。
则$\mathbb{E}[g(X)]$存在当且仅当$\sum_{x}
|g(x)|\cdot p_X(x)$收敛，且$\mathbb{E}[g(X)]$存在时有
\[
    \mathbb{E}[g(X)] = \sum_{x}
    g(x)\cdot p_X(x).
\]

类似地，若$(X,Y)$为离散型随机向量，$p_{X,Y}$为其分布列，
$h:\mathbb{R}^2\rightarrow\mathbb{R}$为任意二元函数，
则$\mathbb{E}[h(X,Y)]$存在当且仅当$\sum_{(x,y)}
|h(x,y)|\cdot p_{X,Y}(x,y)$收敛，且$\mathbb{E}[h(X,Y)]$存在时有
\[
    \mathbb{E}[h(X,Y)] = \sum_{(x,y)}
    h(x,y)\cdot p_{X,Y}(x,y).
\]
:::

::: proof
这里只给出二维随机向量情形的证明。
注意到$(X,Y)$为离散型随机向量时，$h(X,Y)$为离散型随机变量，
故$\mathbb{E}[h(X,Y)]$存在当且仅当
\[
    \begin{aligned}
    \sum_{z}
    z\cdot \mathbb{P}(h(X,Y)=z)
    \end{aligned}
\]
绝对收敛，且$\mathbb{E}[h(X,Y)]$存在时即等于该求和式的值。
另一方面，由 @example:function_of_discrete_rv_vec  可得
\[
    \mathbb{P}(h(X,Y)=z)
    =\sum_{\substack{(x,y)\,: \\ h(x,y)=z}}p_{X,Y}(x,y),
\]
从而
\[
    \begin{aligned}
    \sum_{z}
    z\cdot \mathbb{P}(h(X,Y)=z)
    ={} &
    \sum_{z}
    z\cdot \sum_{\substack{(x,y)\,:\\
    h(x,y)=z}} p_{X,Y}(x,y) \\
    ={} &
    \sum_{z}
    \sum_{\substack{(x,y)\,:\\
    h(x,y)=z}} h(x,y)\cdot p_{X,Y}(x,y) \\
    ={} & \sum_{(x,y)} h(x,y)\cdot p_{X,Y}(x,y),
    \end{aligned}
\]
上式左端绝对收敛当且仅当右端绝对收敛[^1]。
综合以上结果即得待证等式。
:::

在一些英文文献中，@theorem:law_unconscious_statistician_discrete
又被称为**law of the unconscious statistician (LOTUS)**。
该定理为计算随机变量函数的期望提供了一条简单的途径，
特别是我们并不需要先求出随机变量函数的分布。

以下定理则给出了期望的几条重要性质。首先介绍的是期望的线性，
它不仅是期望最重要的理论性质之一，而且在许多问题中
是简化期望计算的重要工具。

::: theorem [期望的线性] {@theorem:expectation_linearity_discrete}
设$X,Y$为离散型随机变量，且$\mathbb{E}[X]$与$\mathbb{E}[Y]$均存在，
$\alpha,\beta$为任意两个实数。则
\[
    \mathbb{E}[\alpha X+\beta Y]
    =\alpha\,\mathbb{E}[X]+\beta\,\mathbb{E}[Y].
\]
:::

::: proof
将$(X,Y)$的联合分布列记为$p_{X,Y}$，
$X$与$Y$各自的边缘分布列分别记为$p_X$与$p_Y$。
由 @theorem:law_unconscious_statistician_discrete  可得
\[
    \begin{aligned}
    \mathbb{E}[\alpha X+\beta Y]
    & =
    \sum_{(x,y)} (\alpha x + \beta y)\cdot
    p_{X,Y}(x,y) \\
    & =
    \alpha\sum_{x}x\sum_y p_{X,Y}(x,y)
    +\beta\sum_y y\sum_x p_{X,Y}(x,y) \\
    & = \alpha\sum_x x\cdot p_X(x)
    +\beta\sum_y y\cdot p_Y(y) \\
    &
    = \alpha\,\mathbb{E}[X]+\beta\,\mathbb{E}[Y],
    \end{aligned}
\]
其中第三步用到了边缘分布列所满足的 @theorem:marginal_pmf。
:::

接下来的定理则给出了非负随机变量期望的基本性质。

::: theorem {@theorem:expectation_nonnegativity_discrete}
设$X$为离散型随机变量，满足$\mathbb{P}(X\geq 0)=1$。则如下命题成立：

1. 若$\mathbb{E}[X]$存在，则$\mathbb{E}[X]\geq 0$。

2. $\mathbb{E}[X]=0$当且仅当$\mathbb{P}(X=0)=1$。

:::

::: proof
记$X$的分布列为$p_X$。

1. 由$\mathbb{P}(X\geq 0)=1$可知，
   当$p_X(x)>0$时必定有$x\geq 0$，
   再由期望的定义式即可直接得到$\mathbb{E}[X]\geq 0$。

2. $\mathbb{P}(X=0)=1\Rightarrow\mathbb{E}[X]=0$：
   由$\mathbb{P}(X=0)=1$可得$x\neq 0$时有
   \[
       \mathbb{P}(X=x)\leq\mathbb{P}(X\neq 0)=0,
   \]
   故对任意$x\in\mathbb{R}$均有$x\cdot\mathbb{P}(X=x)=0$，
   代入期望的定义即得$\mathbb{E}[X]=0$。

   $\mathbb{E}[X]=0\Rightarrow\mathbb{P}(X=0)=1$：
   当$\mathbb{E}[X]=0$时，由于期望定义式中求和的各项均非负，
   可得$p_X(x)>0$时必定有$x\cdot p_X(x)=0$，
   从而$p_X(x)$仅在$x=0$时为正数，而在$x\neq 0$时均为零。故
   \[
       1=\sum_x p_X(x) = p_X(0)=\mathbb{P}(X=0).
   \]

:::

以下定理指出，若两个随机变量相互独立，则它们的乘积的期望
等于各自期望的乘积。

::: theorem {@theorem:product_independent_expectation_discrete}
设$X,Y$为相互独立的离散型随机变量，且二者的期望均存在，则
\[
    \mathbb{E}[XY]=\mathbb{E}[X]\cdot\mathbb{E}[Y].
\]
:::

::: proof
由 @theorem:independence_discrete_pmf，
可得$(X,Y)$的联合分布列$p_{X,Y}$与边缘分布列$p_X,p_Y$满足
\[
    p_{X,Y}(x,y)=p_X(x)\,p_Y(y),\qquad\forall (x,y)\in\mathbb{R}^2,
\]
故
\[
    \begin{aligned}
    \mathbb{E}[XY]
    &= \sum_{(x,y)} xy\cdot p_{X,Y}(x,y) \\
    &= \sum_{(x,y)} xy\cdot p_{X}(x)\,p_{Y}(y) \\
    &= \sum_x x\cdot p_X(x)\sum_y y\cdot p_Y(y) \\
    &= \mathbb{E}[X]\cdot\mathbb{E}[Y],
    \end{aligned}
\]
其中第三步把对$(x,y)$的多重求和变换为先对$y$再对$x$的累次求和，
其合法性可由$\mathbb{E}[X]$与$\mathbb{E}[Y]$的存在性保证。
:::

## 方差*

::: definition {@definition:variance}
设$X$为一离散型随机变量。若$\mathbb{E}[X]$
与$\mathbb{E}\!\left[(X-\mathbb{E}[X])^2\right]$均存在，
则定义$X$的**方差** (variance)为
\[
    \operatorname{Var}(X) = \mathbb{E}\!\left[(X-\mathbb{E}[X])^2\right],
\]
并定义$X$的**标准差**（standard deviation）为
$\sigma(X)=\sqrt{\operatorname{Var}(X)}$。

若$\mathbb{E}[X]$或$\mathbb{E}\!\left[(X-\mathbb{E}[X])^2\right]$不存在，
则称$\operatorname{Var}(X)$不存在。
:::

根据方差的定义，我们可以直观上认为$\operatorname{Var}(X)$
度量了$X$的取值相对于期望$\mathbb{E}[X]$的分散/偏离/波动程度，
也就是说，$\operatorname{Var}(X)$越大，
则$X$的取值相对于$\mathbb{E}[X]$的分散/偏离/波动的程度也就越大，
而$\operatorname{Var}(X)$越小，
则$X$的取值越集中于$\mathbb{E}[X]$附近。
这个直观解释可以由如下等式进一步佐证：

```math {@eq:variance_affine}
\operatorname{Var}(aX+b)
=a^2\operatorname{Var}(X),
```

其中$a,b$为任意实数。换句话说，对$X$的取值进行整体性的平移
不会改变其方差，而若对其取值进行倍数为$a$的放缩，
则方差将变为原来的$a^2$倍。该等式的证明是直接的：
\[
    \begin{aligned}
    \operatorname{Var}(aX+b)
    & =\mathbb{E}\!\left[\left(
    aX+b-\mathbb{E}[aX+b]\right)^2\right] \\
    & =\mathbb{E}\!\left[\left(
    aX-a\mathbb{E}[X]\right)^2\right] \\
    & =a^2\,\mathbb{E}\!\left[\left(
    X-\mathbb{E}[X]\right)^2\right]
    =a^2\operatorname{Var}(X).
    \end{aligned}
\]

将$(X-\mathbb{E}[X])^2$展开并利用期望的线性不难算得

```math {@eq:var_another_expression}
\operatorname{Var}(X) = \mathbb{E}\!\left[X^2\right]-
\left(\mathbb{E}[X]\right)^2.
```

在许多情况下用上式计算方差会更加方便。

::: example
设$X$服从参数为$p$的伯努利分布，则
\[
    \operatorname{Var}(X)
    =\mathbb{E}\!\left[X^2\right]
    -\left(\mathbb{E}[X]\right)^2
    = 1^2\cdot p + 0^2\cdot (1-p) - p^2
    =p(1-p).
\]
:::

接下来的定理指出，相互独立的随机变量的和的方差等于它们的方差的和。
这个便利的性质也是人们更愿意用方差来衡量
随机变量相对于期望分散程度的原因之一。

::: theorem
设$X_1,\ldots,X_n$相互独立，且它们的方差存在，则
\[
    \operatorname{Var}\!\left(\sum_{i=1}^n X_i\right)
    =\sum_{i=1}^n \operatorname{Var}(X_i).
\]
:::

::: proof
这里只给出$n=2$时的证明。一般情形的证明是类似的。

由方差的定义与期望的线性，可得
\[
    \begin{aligned}
    \operatorname{Var}(X_1+X_2)
    ={} & \mathbb{E}\!\left[(X_1+X_2-\mathbb{E}[X_1+X_2])^2\right] \\
    ={} & \mathbb{E}\!\left[(X_1-\mathbb{E}[X_1])^2\right]
    + \mathbb{E}\!\left[(X_2-\mathbb{E}[X_2])^2\right] \\
    & + 2\,\mathbb{E}\!\left[(X_1-\mathbb{E}[X_1])(X_2-\mathbb{E}[X_2])\right] \\
    ={} & \operatorname{Var}(X_1)+\operatorname{Var}(X_2)
    + 2\,\mathbb{E}\!\left[(X_1-\mathbb{E}[X_1])\right]\cdot\mathbb{E}\!\left[(X_2-\mathbb{E}[X_2])\right] \\
    ={} & \operatorname{Var}(X_1)+\operatorname{Var}(X_2),
    \end{aligned}
\]
其中第三步来自于$X_1$与$X_2$的独立性。定理得证。
:::

[^1]: 这里实际上 涉及到了绝对收敛级数的重排定理，对此有了解的读者可进一步验证 相关的推导细节。也可参考 [附录A.1](/books/概率与数理统计/一些数学上的补充说明/求和式/) 中的 @theorem:summation_interchange。
