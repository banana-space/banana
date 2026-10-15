---
title: 条件分布与条件期望
---
## 条件分布*

本小节中，我们介绍一个随机变量$X$在给定另一个随机变量$Y$的取值时的
条件分布。由于数学工具的限制，我们只讨论$(X,Y)$为离散型随机向量
或连续型随机向量的情形。

$(X,Y)$ **为离散型随机向量。** 当$(X,Y)$为离散型随机向量时，
条件分布的定义是比较直接的。设$y\in\mathbb{R}$使得
$\mathbb{P}(Y=y)>0$，则定义$Y=y$的条件下$X$的**条件分布列**
（conditional probability mass function, conditional p.m.f。）为
\[
    p_{X|Y}\!\left(x \mkern2mu|\mkern2mu y\right) =
    \mathbb{P}\!\left(X=x \mkern2mu|\mkern2mu Y=y\right)
    =\frac{p_{X,Y}(x,y)}{p_Y(y)},
    \qquad \forall x\in\mathbb{R}.
\]
不难证明，若固定$y$而把$p_{X|Y}\!\left(x \mkern2mu|\mkern2mu y\right)$看成$x$的函数，
则它的确给出了一个分布列（也就是说它满足 @theorem:discrete_rv_construction  的条件）。

当$p_Y(y)=0$时，为了方便，我们规定$p_{X|Y}\!\left(x \mkern2mu|\mkern2mu y\right)=p_X(x)$，
但需注意此时$p_{X|Y}\!\left(x \mkern2mu|\mkern2mu y\right)$不代表
$\mathbb{P}\!\left(X=x \mkern2mu|\mkern2mu Y=y\right)$。

以下命题可以看成是全概率公式的一个特例，也是为了给连续型随机向量的情形
做一些准备，其证明是直接的，故留给读者自行完成。

::: proposition {@proposition:conditional_pmf_property1}
设$(X,Y)$为离散型随机向量。则任取区间$I,J\subseteq\mathbb{R}$，
均有

```math {@eq:conditional_pmf_property1}
\begin{aligned}
\mathbb{P}(X\in I, Y\in J)
& =\sum_{y\in J}
\left(\sum_{x\in I} p_{X|Y}\!\left(x \mkern2mu|\mkern2mu y\right)\right)\cdot p_Y(y).
\end{aligned}
```

反之，若二元实值函数$q:\mathbb{R}^2\rightarrow\mathbb{R}$
使得等式[^1]
\[
    \begin{aligned}
    \mathbb{P}(X\in I, Y\in J)
    & =\sum_{y\in J}
    \left(\sum_{x\in I} q(x,y)\right)\cdot p_Y(y),
    \end{aligned}
\]
对任意区间$I,J\subseteq\mathbb{R}$都成立，
则$p_Y(y)>0$时均有$q(x,y)=p_{X|Y}\!\left(x \mkern2mu|\mkern2mu y\right),\,\forall x\in\mathbb{R}$。
:::

::: example
设$X,Y$为相互独立的随机变量，且分别服从参数为
$\lambda_1$与$\lambda_2$的泊松分布。令$Z=X+Y$。
则对任意正整数$z$，$Z=z$的条件下$X$的条件分布列为
\[
    \begin{aligned}
    p_{X|Z}\!\left(x \mkern2mu|\mkern2mu z\right)={} &
    \frac{\mathbb{P}(X=x,Z=z)}{\mathbb{P}(Z=z)}
    =\frac{\mathbb{P}(X=x,Y=z-x)}{\mathbb{P}(Z=z)} \\
    ={} &
    \mathrm{e}^{-\lambda_1}\frac{\lambda_1^x}{x!}
    \cdot
    \mathrm{e}^{-\lambda_2}\frac{\lambda_2^{z-x}}{(z-x)!}
    \cdot\left[
    \mathrm{e}^{-(\lambda_1+\lambda_2)}\frac{(\lambda_1+\lambda_2)^z}{z!}\right]^{-1}
    \\
    ={} &
    \binom{z}{x} \left(\frac{\lambda_1}{\lambda_1+\lambda_2}\right)^{\!x} \left(\frac{\lambda_2}{\lambda_1+\lambda_2}\right)^{\!z-x},
    \qquad\forall x=0,\ldots,z,
    \end{aligned}
\]
其中我们利用了 @exampel:sum_independent_Poisson
的结论来计算$\mathbb{P}(Z=z)$。而$x$取其它值时有
$p_{X|Z}\!\left(x \mkern2mu|\mkern2mu z\right)=0$。故$Z=z$的条件下
$X$服从参数为$(z,\lambda_1/(\lambda_1+\lambda_2))$的二项分布。
:::

$(X,Y)$ **为连续型随机向量。** 当$(X,Y)$为连续型随机向量时，
定义$Y=y$的条件下$X$的条件分布需要一些额外手段，
这是因为此时$\mathbb{P}(Y=y)$总是为$0$，
因而形如$\mathbb{P}\!\left(X\in I \mkern2mu|\mkern2mu Y=y\right)$的条件概率是没有定义的。
严格处理这个问题需要一些实分析的知识，超出本课程的范围，
这里给出一种在直观上较易于接受但缺乏一定数学严格性的处理方法：
注意到 @proposition:conditional_pmf_property1
意味着我们可以把式 @eq:conditional_pmf_property1
作为条件分布列的第二定义，故对于连续型随机向量的情形，
不妨考虑在式 @eq:conditional_pmf_property1
中把分布列形式上换成概率密度乘以微元，把求和形式上换成积分，
再将$Y=y$的条件下$X$的**条件概率密度函数**
（conditional probability density function, conditional p.d.f。）
$f_{X|Y}\!\left(x \mkern2mu|\mkern2mu y\right)$定义为使得以下等式对任意区间
$I,J\subseteq\mathbb{R}$均成立的函数：

```math {@eq:defn_conditional_pdf}
\begin{aligned}
\mathbb{P}(X\in I,Y\in J)
& = \int_{J}
\left(\int_{I} f_{X|Y}\!\left(x \mkern2mu|\mkern2mu y\right)\,\mathrm{d} x\right)f_Y(y)\,\mathrm{d} y.
\end{aligned}
```

将上式右端的累次积分写成重积分的形式，再与联合分布密度函数的定义式
@eq:defn_joint_pdf  进行比较，即可看出当$f_Y(y)>0$时，

```math {@eq:defn_joint_pdf_2}
f_{X|Y}\!\left(x \mkern2mu|\mkern2mu y\right)
=\frac{f_{X,Y}(x,y)}{f_Y(y)}.
```

许多初等概率论教材也直接将上式作为条件概率密度函数$f_{X|Y}$的定义。
当$f_Y(y)=0$时，式 @eq:defn_conditional_pdf  无法决定
$f_{X|Y}\!\left(x \mkern2mu|\mkern2mu y\right)$的取值，为了方便，我们规定此时
$f_{X|Y}\!\left(x \mkern2mu|\mkern2mu y\right)=f_X(x)$。

条件概率密度函数也有如下不严格的解释方式：设$f_{X,Y}$连续，
取非常小的$\epsilon>0$，则对任意区间$I\subseteq\mathbb{R}$，有
\[
    \begin{aligned}
    \mathbb{P}\!\left(X\in I \mkern2mu|\mkern2mu |Y-y|\leq \epsilon\right)
    ={} &
    \frac{\mathbb{P}(X\in I,\,|Y-y|\leq \epsilon)}{\mathbb{P}(|Y-y| \leq \epsilon)} \\
    ={} &
    \frac{\iint_{I\times [y-\epsilon,y+\epsilon]}
    f_{X,Y}(x,v)\,\mathrm{d} x\mathrm{d} v
    }
    {\int_{y-\epsilon}^{y+\epsilon} f_Y(v)\,\mathrm{d} v}\\
    ={} &
    \frac{\int_{y-\epsilon}^{y+\epsilon}
    \left(\int_I f_{X|Y}(x,v)\,\mathrm{d} x\right)f_Y(v)\,\mathrm{d} v}{
    \int_{y-\epsilon}^{y+\epsilon} f_Y(v)\,\mathrm{d} v
    } \\
    \approx{} &
    \frac{\left(\int_I f_{X|Y}(x,y)\,\mathrm{d} x\right) f_Y(y)\cdot 2\epsilon}{f_Y(y)\cdot 2\epsilon}
    =\int_I f_{X|Y}(x,y)\,\mathrm{d} x.
    \end{aligned}
\]
换句话说，$f_{X|Y}$近似给出了$\epsilon$非常小的时候，
在$y-\epsilon\leq Y\leq y+\epsilon$的条件下$X$的条件分布的
概率密度函数。

根据以上条件分布列与条件概率密度函数的定义，不难得到如下定理：

::: theorem {@theorem:independence_conditional_distribution}
1. 设$(X,Y)$为离散型随机向量，则$X,Y$相互独立当且仅当
   \[
       p_{X|Y}\!\left(x \mkern2mu|\mkern2mu y\right) = p_X(x),\qquad\forall x,y\in\mathbb{R}.
   \]

2. 设$(X,Y)$为连续型随机向量，则$X,Y$相互独立当且仅当
   对任意的$y\in\mathbb{R}$，条件概率密度函数$f_{X|Y}\!\left(x \mkern2mu|\mkern2mu y\right)$
   同时也是$X$的一个（非条件）概率密度函数$f_X(x)$。

:::

## 条件期望*

::: definition {@definition:conditional_expectation}
1. 设$(X,Y)$为离散型随机向量，且$\mathbb{E}[X]$存在。
   若函数$\phi_X:\mathbb{R}\rightarrow\mathbb{R}$满足
   \[
       \phi_X(y) =
       \sum_x x\cdot p_{X|Y}\!\left(x \mkern2mu|\mkern2mu y\right),
       \qquad \text{若}\ p_Y(y)> 0,
   \]
   则称随机变量$\phi_X(Y)$为给定$Y$的条件下$X$的**条件期望**
   （conditional expectation）。

2. 设$(X,Y)$为连续型随机向量，且$\mathbb{E}[X]$存在。
   若函数$\phi_X:\mathbb{R}\rightarrow\mathbb{R}$满足
   \[
       \phi_X(y) = \int_{-\infty}^{+\infty}
       x\cdot f_{X|Y}\!\left(x \mkern2mu|\mkern2mu y\right)\,\mathrm{d} x,
       \qquad\text{若}\ f_Y(y)> 0,
   \]
   则称随机变量$\phi_X(Y)$为给定$Y$的条件下$X$的**条件期望**
   （conditional expectation）。

我们把给定$Y$的条件下$X$的条件期望记为$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]$。
我们也经常将以上定义中出现的函数$\phi_X(y)$记为
$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y=y\right]$。
:::

::: remark
@definition:conditional_expectation  当中
并未规定$\phi_X(y)$在$p_Y(y)=0$或$f_Y(y)=0$时的取值，
因此给定$Y$的条件下$X$的条件期望不一定是唯一的：
有可能存在两个随机变量$Y$的函数$\phi_{X,1}(Y)$与$\phi_{X,2}(Y)$
均满足 @definition:conditional_expectation，
但可以证明，这种情况下必定有
\[
    \mathbb{P}\!\left(\phi_{X,1}(Y)=\phi_{X,2}(Y)\right)=1,
\]
也就是说$\phi_{X,1}(Y)=\phi_{X,2}(Y)$几乎必然成立。
换句话说，条件期望$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]$可以存在不同的版本，
但任意两个版本都是几乎必然相等的。在随后的部分，
我们将用$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]$指代条件期望的任意一个版本，而用
\[
    \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right] = \phi_X(Y)
\]
来表示$\phi_X(Y)$是给定$Y$的条件下$X$条件期望的其中一个版本；
记号$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y=y\right]$同理。
:::

::: remark
受到数学工具的限制，@definition:conditional_expectation
只处理了$(X,Y)$为离散型或连续型随机向量的情形。但实际上，
只要$\mathbb{E}[X]$存在，那么对任意随机变量$Y$我们都可以定义
其条件期望$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]$及相应的函数
$\phi_X(y)=\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y=y\right]$。特别是，
当$\mathbb{P}(Y=y)>0$时，有
\[
    \phi_X(y)=\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y=y\right]
    =\frac{\mathbb{E}\!\left[X\cdot \mathsf{1}_{\{Y=y\}}\right]}{\mathbb{P}(Y=y)}.
\]
而$\mathbb{P}(Y=y)=0$时$\phi_X(y)=\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y=y\right]$
的一般定义则需要用到高等概率论的一些工具，本讲义将在
[附录B](/books/概率与数理统计/一般情形的条件期望/)中给出一个简单的介绍作为选读内容。
:::

以下定理可看作是条件期望的law of the unconscious statistician
(LOTUS)。

::: theorem {@theorem:conditional_expectation_law_unconscious_stat}
设$X,Y$为两个随机变量，二元函数
$h:\mathbb{R}^2\rightarrow\mathbb{R}$使得
$\mathbb{E}[h(X,Y)]$存在，且对任意$y\in\mathbb{R}$，
$\mathbb{E}[h(X,y)]$均存在。

1. 若$(X,Y)$为离散型随机向量，则有
   \[
       \mathbb{E}\!\left[h(X,Y) \mkern2mu|\mkern2mu Y=y\right]
       =\sum_x h(x,y)\cdot p_{X|Y}\!\left(x \mkern2mu|\mkern2mu y\right);
   \]

2. 若$(X,Y)$为连续型随机向量，则有
   \[
       \mathbb{E}\!\left[h(X,Y) \mkern2mu|\mkern2mu Y=y\right]
       =\int_{-\infty}^{+\infty}
       h(x,y)\cdot f_{X|Y}\!\left(x \mkern2mu|\mkern2mu y\right)\,\mathrm{d} x.
   \]

:::

@theorem:conditional_expectation_law_unconscious_stat
的证明不做要求，感兴趣的读者可参考[附录B](/books/概率与数理统计/一般情形的条件期望/)。

以下定理给出了条件期望的几个比较重要的性质。

::: theorem {@theorem:conditional_expectation_properties}
设$X,Y,Z$为随机变量，且$\mathbb{E}[X],\mathbb{E}[Y]$存在，
则如下命题成立：

1. 线性：对任意实数$\alpha,\beta$，均有
   \[
       \mathbb{E}\!\left[\alpha X+\beta Y \mkern2mu|\mkern2mu Z\right]
       =\alpha\,\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]
       +\beta\,\mathbb{E}\!\left[Y \mkern2mu|\mkern2mu Z\right].
   \]

2. 若$X\geq 0$几乎必然成立，则$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]\geq 0$
   几乎必然成立。

3. 全期望公式（law of total expectation）：
   \[
       \mathbb{E}[X]=\mathbb{E}[\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]].
   \]

   特别地，若$Z$为离散型随机向量，则
   \[
       \mathbb{E}[X] = \sum_{z}\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z=z\right]\cdot p_Z(z).
   \]
   若$Z$为连续型随机向量，则
   \[
       \mathbb{E}[X]
       =\int_{-\infty}^{+\infty}
       \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z=z\right]\cdot f_Z(z)\,\mathrm{d} z.
   \]

4. 若函数$h:\mathbb{R}\rightarrow\mathbb{R}$使得
   $\mathbb{E}[h(Z)X]$存在，则
   \[
       \mathbb{E}\!\left[h(Z)X \mkern2mu|\mkern2mu Z\right] = h(Z)\,\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right].
   \]

5. 若$X$与$Z$相互独立，则
   \[
       \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]=\mathbb{E}[X].
   \]
   更一般地，设二元函数$h:\mathbb{R}^2\rightarrow\mathbb{R}$
   使得$\mathbb{E}[h(X,z)]$对任意$z\in\mathbb{R}$均存在，
   则$X,Z$独立时有
   \[
       \mathbb{E}\!\left[h(X,Z) \mkern2mu|\mkern2mu Z=z\right]=\mathbb{E}\!\left[h(X,z)\right].
   \]

:::

::: proof
这里只给出3、4、5三条性质的证明，且只给出$(X,Z)$为离散型
或连续型随机向量时的证明，一般情形的证明超出本课程范围。

- 3\. 若$(X,Z)$为离散型随机向量，则有
  \[
      \begin{aligned}
      \mathbb{E}\!\left[\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]\right]
      & =\sum_{z} \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z=z\right]\cdot p_Z(z) \\
      & =\sum_{z}\sum_x x\cdot p_{X|Z}\!\left(x \mkern2mu|\mkern2mu z\right)\cdot p_Z(z) \\
      & = \sum_{(x,z)} x\cdot p_{X,Z}(x,z)
      =\mathbb{E}[X],
      \end{aligned}
  \]
  其中第一步来自于期望的LOTUS，第二步用了
  $\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z=z\right]$的定义。

  若$(X,Z)$为连续型随机向量，则类似有
  \[
      \begin{aligned}
      \mathbb{E}\!\left[\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]\right]
      & =\int_{-\infty}^{+\infty} \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z=z\right]\cdot f_Z(z)\,\mathrm{d} z \\
      & =\int_{-\infty}^{+\infty}
      \left(\int_{-\infty}^{+\infty} x\cdot f_{X|Z}\!\left(x \mkern2mu|\mkern2mu z\right)\,\mathrm{d} x\right) f_Z(z)\,\mathrm{d} z \\
      & = \iint_{\,\mathbb{R}^2} x\cdot f_{X,Z}(x,z)\,\mathrm{d} x\mathrm{d} z
      =\mathbb{E}[X].
      \end{aligned}
  \]

- 4\. 若$(X,Z)$为离散型随机向量，则$p_Z(z)>0$时，
  由条件期望的LOTUS，有
  \[
      \begin{aligned}
      \mathbb{E}\!\left[h(Z)X \mkern2mu|\mkern2mu Z=z\right]
      & =\sum_{x} h(z)\, x\cdot p_{X|Z}\!\left(x \mkern2mu|\mkern2mu z\right) \\
      & =h(z)\cdot \sum_{x} x\cdot p_{X|Z}\!\left(x \mkern2mu|\mkern2mu z\right) \\
      & =h(z)\cdot \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z=z\right].
      \end{aligned}
  \]
  若$(X,Z)$为连续型随机向量，则$f_Z(z)>0$时类似有
  \[
      \begin{aligned}
      \mathbb{E}\!\left[h(Z)X \mkern2mu|\mkern2mu Z=z\right]
      & =\int_{-\infty}^{+\infty} h(z)\, x\cdot f_{X|Z}\!\left(x \mkern2mu|\mkern2mu z\right)\,\mathrm{d} x \\
      & =h(z)\cdot \int_{-\infty}^{+\infty}
      x\cdot f_{X|Z}\!\left(x \mkern2mu|\mkern2mu z\right)\,\mathrm{d} x \\
      & =h(z)\cdot \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z=z\right],
      \end{aligned}
  \]
  故两种情况下均有$\mathbb{E}\!\left[h(Z)X \mkern2mu|\mkern2mu Z\right] =
h(Z)\cdot \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]$。

- 5\. 由条件期望的定义，若$(X,Z)$为离散型随机向量，
  则$p_Z(z)>0$时，有
  \[
      \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z=z\right]
      =\sum_x x\cdot p_{X|Z}\!\left(x \mkern2mu|\mkern2mu z\right)
      =\sum_x x\cdot p_{X}(x) = \mathbb{E}[X],
  \]
  而若$(X,Z)$为连续型随机向量，则$f_Z(z)>0$时，有
  \[
      \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z=z\right]
      =\int_{-\infty}^{+\infty} x\cdot f_{X|Z}\!\left(x \mkern2mu|\mkern2mu z\right)\,\mathrm{d} x
      =\int_{-\infty}^{+\infty} x\cdot f_{X}(x)\,\mathrm{d} x = \mathbb{E}[X],
  \]
  其中我们用到了 @theorem:independence_conditional_distribution。

  关于$\mathbb{E}\!\left[h(X,Z) \mkern2mu|\mkern2mu Z=z\right]$的等式的证明则可利用
  条件期望的LOTUS (@theorem:conditional_expectation_law_unconscious_stat)，
  这里略去。

:::

利用条件期望的上述性质与计算方法，我们可以给$\mathbb{E}[X]$的计算
提供另一套流程：

1. 选取合适的随机变量$Z$，利用全期望公式将$\mathbb{E}[X]$
   化为$\mathbb{E}[\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]]$。

2. 利用 @theorem:conditional_expectation_properties
   的1、3、4部分的结论，对$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]$进行化简。

3. 利用条件期望的LOTUS，计算化简过后余下的各个条件期望。

::: example
有一枚均匀的立方体骰子，玩家投掷该骰子并根据投出的点数来决定其得分。
若投出的点数为$1$或$2$，则玩家得到3分且游戏结束；
若投出的点数为$3$、$4$或$5$，则玩家得到5分且获得一次额外的投骰子的机会；
若投出的点数为$6$，则玩家得到7分并获得一次额外的投骰子的机会。
试问游戏结束时，玩家获得的总分的期望是多少？

我们将玩家最终得到的分数记为$X$，并令第一次投掷的点数为$Y$。
则根据全期望公式，有
\[
    \begin{aligned}
    \mathbb{E}[X] = \mathbb{E}\!\left[
    \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]
    \right]
    & =\sum_{i=1}^6 \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y=i\right]\,\mathbb{P}(Y=i) \\
    & =\frac{1}{6} \sum_{i=1}^6 \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y=i\right].
    \end{aligned}
\]
而直观上，不难看出如下等式成立[^2]：
\[
    \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y=1\right]=\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y=2\right]=3,
\]
以及
\[
    \begin{aligned}
    & \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y=3\right]=\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y=4\right]=\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y=5\right]
    =5 + \mathbb{E}[X], \\
    & \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y=6\right]
    =7 + \mathbb{E}[X].
    \end{aligned}
\]
将以上等式代入$\mathbb{E}[X]=
\frac{1}{6}\sum_{i=1}^6\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y=i\right]$，
最终可解得$\mathbb{E}[X]=14$。
:::

::: example
设$X,Y$为相互独立的连续性随机变量，各自的概率密度函数为$f_X$与$f_Y$，
我们希望求解概率$\mathbb{P}(X\leq Y)$。这里给出一种
基于条件期望的做法：
\[
    \begin{aligned}
    \mathbb{P}(X\leq Y)
    ={} & \mathbb{E}\!\left[\mathsf{1}_{\{X\leq Y\}}\right]
    = \mathbb{E}\!\left[\mathbb{E}\!\left[\mathsf{1}_{\{X\leq Y\}} \mkern2mu\big|\mkern2mu Y\right]\right] \\
    ={} &
    \int_{-\infty}^{+\infty}
    \mathbb{E}\!\left[\mathsf{1}_{\{X\leq Y\}} \mkern2mu\big|\mkern2mu Y=y\right]\cdot f_Y(y)\,\mathrm{d} y \\
    ={} &
    \int_{-\infty}^{+\infty}
    \left(\int_{-\infty}^{+\infty} \mathsf{1}_{x\leq y}(x,y)\cdot f_{X|Y}\!\left(x \mkern2mu|\mkern2mu y\right)\,\mathrm{d} x\right)f_Y(y)\,\mathrm{d} y \\
    ={} &
    \int_{-\infty}^{+\infty}
    \left(\int_{-\infty}^y f_X(x)\,\mathrm{d} x\right)f_Y(y)\,\mathrm{d} y
    = \int_{-\infty}^{+\infty}
    F_X(y)\,f_Y(y)\,\mathrm{d} y,
    \end{aligned}
\]
其中：第2、3步利用了全期望公式；第4步用条件期望的LOTUS
对$\mathbb{E}\!\left[\mathsf{1}_{\{X\leq Y\}}
\mkern2mu\big|\mkern2mu Y=y\right]$做了展开；
我们用$\mathsf{1}_{x\leq y}$简记指示函数
$\mathsf{1}_{\{(x,y) \mid x\leq y\}}$。
:::

## 条件方差*

::: definition
设$X,Y$为随机变量，且$X$的方差存在。定义给定$Y$的条件下$X$的条件方差
（conditional variance）为
\[
    \operatorname{Var}\!\left(X \mkern2mu|\mkern2mu Y\right)
    =\mathbb{E}\!\left[
    \left(
    X-
    \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]
    \right)^2
    \mkern2mu\Big|\mkern2mu
    Y
    \right].
\]
我们也记$\operatorname{Var}\!\left(X \mkern2mu|\mkern2mu Y=y\right)
=\mathbb{E}\!\left[
\left(
X-
\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y=y\right]
\right)^2
\mkern2mu\Big|\mkern2mu
Y=y\right]$。
:::

我们也可从如下角度理解条件方差$\operatorname{Var}\!\left(X \mkern2mu|\mkern2mu Y\right)$：
首先对任意实数$y$，算出$X$在给定$Y=y$条件下的条件分布；
接下来计算该条件分布所对应的方差，这个方差将依赖于$y$，
我们将其暂时用$\psi_X(y)$表示；最后将函数$\psi_X$作用在$Y$上，
得到的随机变量$\psi_X(y)$就是条件方差$\operatorname{Var}\!\left(X \mkern2mu|\mkern2mu Y\right)$。

利用条件期望的性质，可得
\[
    \begin{aligned}
    \operatorname{Var}\!\left(X \mkern2mu|\mkern2mu Y\right)
    ={} & \mathbb{E}\!\left[
    X^2+\left(\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]\right)^2
    -2X\cdot\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]
    \mkern2mu\Big|\mkern2mu
    Y \right]
     \\
    ={} &
    \mathbb{E}\!\left[X^2 \mkern2mu\big|\mkern2mu Y\right]
    +\mathbb{E}\!\left[\left(\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]\right)^2
    \mkern2mu\Big|\mkern2mu
    Y\right]
    -2\,\mathbb{E}\!\left[X\cdot \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right] \mkern2mu|\mkern2mu Y\right] \\
    ={} &
    \mathbb{E}\!\left[X^2 \mkern2mu\big|\mkern2mu Y\right]
    +\left(\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]\right)^2
    -2\left(\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]\right)^2 \\
    ={} & \mathbb{E}\!\left[X^2 \mkern2mu\big|\mkern2mu Y\right]
    -\left(\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]\right)^2,
    \end{aligned}
\]
其中我们充分利用了$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]$是$Y$的函数这一事实。

条件方差满足如下全方差公式（law of total variance）；
其证明是相当直接的，我们将其留作 @exercise:law_total_var。

::: theorem
设$X,Y$为随机变量，且$X$的方差存在。则
\[
    \operatorname{Var}(X)
    =\mathbb{E}\!\left[\operatorname{Var}\!\left(X \mkern2mu|\mkern2mu Y\right)\right]
    +\operatorname{Var}\!\left(\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]\right).
\]
:::

::: example
设$N,X_1,X_2,\ldots$为相互独立的随机变量，其中$N$的取值
只可能是自然数，$\operatorname{Var}(N)$存在；$X_1,X_2,\ldots$
同分布且它们的方差均存在。令
\[
    S = \sum_{i=1}^N X_i.
\]
我们希望求解$S$的期望与方差。

为了利用全期望公式求出$\mathbb{E}[S]$，我们注意到
\[
    \begin{aligned}
    \mathbb{E}\!\left[S \mkern2mu|\mkern2mu N=n\right]
    ={} &\mathbb{E}\!\left[\sum_{i=1}^N X_i
    \mkern2mu\Bigg|\mkern2mu
    N=n\right]
    ={} \mathbb{E}\!\left[
    \sum_{i=1}^n X_i
    \right] =
    n\,\mathbb{E}[X_1],
    \end{aligned}
\]
其中第二步利用了$X_1,X_2,\ldots$与$N$的独立性。故由全期望公式，可得
\[
    \begin{aligned}
    \mathbb{E}\!\left[
    S
    \right]
    ={} & \mathbb{E}\!\left[
    N\,\mathbb{E}[X_1]
    \right]
    =\mathbb{E}[N]\,\mathbb{E}[X_1]
    \end{aligned}
\]

类似地，为了求$S$的方差，我们注意到
\[
    \begin{aligned}
    \operatorname{Var}\!\left(S \mkern2mu|\mkern2mu N=n\right)
    ={} & \operatorname{Var}\!\left(\sum_{i=1}^N X_i
    \mkern2mu\Bigg|\mkern2mu
    N=n\right) \\
    ={} &
    \mathbb{E}\!\left[\left(\sum_{i=1}^N X_i\right)^{\!2}
    \mkern2mu\Bigg|\mkern2mu
    N=n\right]
    -\left(\mathbb{E}\!\left[\sum_{i=1}^N X_i
    \mkern2mu\Bigg|\mkern2mu
    N=n\right]\right)^{\!2} \\
    ={} &
    \mathbb{E}\!\left[
    \left(\sum_{i=1}^n X_i\right)^{\!2}
    \right]
    -\left(\mathbb{E}\!\left[\sum_{i=1}^n X_i\right]\right)^{\!2} \\
    ={} &
    \operatorname{Var}\!\left(\sum_{i=1}^n X_i\right)
    =n\operatorname{Var}(X_1),
    \end{aligned}
\]
其中第三步也是用到了$X_1,X_2,\ldots$与$N$的独立性。故由全期望公式，
\[
    \begin{aligned}
    \operatorname{Var}(S)
    ={} & \mathbb{E}[N\operatorname{Var}(X_1)]
    +\operatorname{Var}(N\,\mathbb{E}[X_1]) \\
    ={} &
    \mathbb{E}[N]\operatorname{Var}(X_1)
    +\left(\mathbb{E}[X_1]\right)^2\operatorname{Var}(N).
    \end{aligned}
\]
:::

## （${}^\star$）条件期望与最佳均方预测* {@subsection:conditional_expectation_L2_projection}

考虑这样一个问题：给定随机变量$X,Y$，我们希望找到一个$Y$的函数，
用于在每次观测到$Y$的取值时对$X$的取值进行预测。以下定理指出，
在所有的$Y$的函数当中，条件期望$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]$
能够取到最小的均方预测误差。这是条件期望的又一条重要性质，
我们甚至可以把它作为条件期望的一个新的定义方式。

::: theorem
给定随机变量$X$与$Y$，设$\mathbb{E}\!\left[X^2\right]$存在．
则任取函数$h:\mathbb{R}\rightarrow\mathbb{R}$，均有
\[
    \mathbb{E}\!\left[
    \left(X-\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]\right)^2
    \right]
    \leq
    \mathbb{E}\!\left[
    \left(X-h(Y)\right)^2
    \right].
\]
:::

::: proof
注意到
\[
    \begin{aligned}
    \mathbb{E}\!\left[
    \left(X-h(Y)\right)^2
    \right]
    ={} & \mathbb{E}\!\left[
    \left(X-\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]+\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]-h(Y)\right)^2\right] \\
    ={} & \mathbb{E}\!\left[
    \left(X-\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]\right)^2\right]+\mathbb{E}\!\left[\left(\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]-h(Y)\right)^2
    \right] \\
    & + 2\,\mathbb{E}\!\left[
    \left(X-\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]\right)\left(\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]-h(Y)\right)\right].
    \end{aligned}
\]
对于上式右端的交叉项，我们做如下处理：
\[
    \begin{aligned}
    & \mathbb{E}\!\left[
    \left(X-\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]\right)\left(\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]-h(Y)\right)\right] \\
    ={} &
    \mathbb{E}\!\left[
    \,\mathbb{E}\!\left[
    \left(X-\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]\right)\left(\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]-h(Y)\right) \mkern2mu|\mkern2mu Y\right]\right] \\
    ={} &
    \mathbb{E}\!\left[
    \left(\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]-h(Y)\right)
    \cdot\mathbb{E}\!\left[
    \left(X-\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]\right) \mkern2mu|\mkern2mu Y\right]\right] \\
    ={} &
    \mathbb{E}\!\left[
    \left(\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]-h(Y)\right)
    \cdot
    \left(\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]
    -\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]\right)\right] \\
    ={} & 0,
    \end{aligned}
\]
其中第一步用到了全期望公式；第二步则是因为
$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]-h(Y)$是$Y$的函数，
因而可以从条件期望中提出来；第三步用到了条件期望的线性，
以及$\mathbb{E}\!\left[\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right] \mkern2mu|\mkern2mu Y\right]
=\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]$．因此
\[
    \begin{aligned}
    \mathbb{E}\!\left[
    \left(X-h(Y)\right)^2
    \right]
    & =\mathbb{E}\!\left[
    \left(X-\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]\right)^2\right]+\mathbb{E}\!\left[\left(\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]-h(Y)\right)^2
    \right] \\
    & \geq \mathbb{E}\!\left[
    \left(X-\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]\right)^2\right].
    \end{aligned}
\]
定理得证．
:::

[^1]: 这里为了使求和式$\sum_{x\in I}q(x,y)$有意义， 要求固定$y$时，$q(x,y)$只对可数多个$x$取非零值。
[^2]: 要严格证明这些等式 实际上并不算简单，感兴趣的读者可尝试严格证明这些等式。
