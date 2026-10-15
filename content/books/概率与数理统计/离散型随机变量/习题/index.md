---
title: 习题选编
---
::: exercise
1. 设$E,F$为两个事件。证明$E,F$相互独立
   当且仅当随机变量$\mathsf{1}_E,\mathsf{1}_F$相互独立。

2. （${}^\star$）设$E_1,\ldots,E_n$为$n$个事件。
   证明$E_1,\ldots,E_n$相互独立当且仅当
   随机变量$\mathsf{1}_{E_1},\ldots,\mathsf{1}_{E_n}$相互独立。

:::

::: exercise {@exercise:integer_valued_expectation}
设$X$为一离散型随机变量，其值域包含于自然数集$\mathbb{N}$，
且$\mathbb{E}[X]$存在。证明
\[
    \mathbb{E}[X] = \sum_{n=1}^\infty \mathbb{P}(X\geq n)
    =\sum_{n=0}^\infty \mathbb{P}(X>n).
\]
*提示：* 由期望的定义出发，证明
\[
    \mathbb{E}[X] = \sum_{n=1}^\infty n\cdot\mathbb{P}(X= n)
    =\sum_{n=1}^\infty \sum_{m=1}^n \mathbb{P}(X= n),
\]
然后交换求和次序（无需说明交换求和次序的合法性）。
:::

::: exercise
求解如下离散型概率分布的期望与方差：(i) 参数为$p$的几何分布；
(ii) 参数为$\lambda$的泊松分布。
:::

::: exercise {@exercise:probability_finite_union}
证明如下结论：

1. 对任意事件$A,B$，均有
   $\mathsf{1}_{A}\cdot\mathsf{1}_{B} = \mathsf{1}_{A\cap B}$
   以及$\mathsf{1}_{A^c}=1-\mathsf{1}_A$。

2. 给定任意$n$个事件$A_1,\ldots,A_n$，有
   \[
       \begin{aligned}
       \displaystyle\mathsf{1}_{A_1\cup\cdots\cup A_n}
       ={} & 1-\prod_{i=1}^n (1-\mathsf{1}_{A_i}) \\
       ={} & \sum_{i=1}^n \mathsf{1}_{A_i}
       -\sum_{1\leq i_1<i_2\leq n} \mathsf{1}_{A_{i_1}\cap A_{i_2}}
       +\cdots \\
       & + (-1)^{k-1} \sum_{1\leq i_1<\cdots<i_k\leq n}
       \mathsf{1}_{A_{i_1}\cap\cdots \cap A_{i_k}}
       + \cdots
       + (-1)^{n-1} \, \mathsf{1}_{A_1\cap\cdots \cap A_n}.
       \end{aligned}
   \]

3. 给定任意$n$个事件$A_1,\ldots,A_n$，有
   \[
       \begin{aligned}
       & \mathbb{P}(A_1\cup\cdots\cup A_n) \\
       ={} & \sum_{i=1}^n \mathbb{P}(A_i)
       -\sum_{1\leq i_1<i_2\leq n} \mathbb{P}\!\left(A_{i_1}\cap A_{i_2}\right)
       + \cdots \\
       &
       + (-1)^{k-1}\sum_{1\leq i_1<\cdots<i_k\leq n}
       \mathbb{P}(A_{i_1}\cap\cdots \cap A_{i_k})
       +\cdots
       + (-1)^{n-1}\, \mathbb{P}(A_1\cap\cdots \cap A_n).
       \end{aligned}
   \]
   上述等式又被称为**inclusion–exclusion principle**。

:::

::: exercise {@exercise:sum_indicator_expectation_variance}
设$E_1,\ldots,E_n$为$n$个事件，并令
$X=\sum_{i=1}^n \mathsf{1}_{E_i}$。证明
\[
    \begin{aligned}
    \mathbb{E}[X] ={} & \sum_{i=1}^n\mathbb{P}(E_i), \\
    \operatorname{Var}(X)={} &
    \sum_{i=1}^n\mathbb{P}(E_i)
    (1-\mathbb{P}(E_i))
    + 2\sum_{i=1}^{n-1}\sum_{j=i+1}^n
    \!\left(\mathbb{P}(E_i\cap E_j)
    -\mathbb{P}(E_i)\mathbb{P}(E_j)\right).
    \end{aligned}
\]
*提示：* 利用期望的线性。求$\operatorname{Var}(X)$时，
将$\left(\sum_{i=1}^n \mathsf{1}_{E_i}\right)^2$展开，
并注意到$\mathsf{1}_{E_i}^2=\mathsf{1}_{E_i}$。
:::

::: exercise
设$(\Omega,2^\Omega,\mathbb{P})$为一概率空间，
其中$\Omega$为可数集。

1. 证明：任意定义域为$\Omega$的函数
   $X:\Omega\rightarrow\mathbb{R}$一定是一个离散型随机变量。

2. 设$X:\Omega\rightarrow\mathbb{R}$为一随机变量，
   且$\mathbb{E}[X]$存在。证明
   \[
       \mathbb{E}[X] = \sum_{\omega\in\Omega}X(\omega)\cdot\mathbb{P}(\{\omega\}).
   \]

3. 在样本空间$\Omega$为可数集的假设下，利用第2小题的结论，
   给出期望的线性
   \[
       \mathbb{E}[\alpha X+\beta Y]
       =\alpha\,\mathbb{E}[X]+\beta\,\mathbb{E}[Y]
   \]
   的新的证明（其中$X,Y$均为定义在$\Omega$上的随机变量）。

:::

::: exercise
设离散型随机向量$(X,Y)$的联合分布列为
\[
    p_{X,Y}(x,y) = \begin{cases}
    \displaystyle\frac{C}{(x+y-1)(x+y)(x+y+1)}, & \text{若 $x\in\mathbb{N}_+$ 且 $y\in\mathbb{N}_+$} \\
    0, & \text{其它情形},
    \end{cases}
\]
其中$C$为待定系数。试求：(i) $C$的值；(ii) $X$与$Y$各自的边缘分布；
(iii) $U=X+Y$的概率分布；(iv) $V=X-Y$的概率分布。

注：本题改编自[@grimmett2001probability]第3.8节习题2。
:::

::: exercise
设$(\Omega,\mathcal{F},\mathbb{P})$为一概率空间，
$U,V$为定义于$\Omega$上的随机变量，
它们的值域均为$\{1,-1\}$，且满足
\[
    \begin{aligned}
    & \mathbb{P}(U=1)=\mathbb{P}(U=-1)=\frac{1}{2}, \\
    & \mathbb{P}\!\left(V=1 \mkern2mu|\mkern2mu U=1\right)=\mathbb{P}\!\left(V=-1 \mkern2mu|\mkern2mu U=-1\right)
    =\frac{1}{3}, \\
    & \mathbb{P}\!\left(V=-1 \mkern2mu|\mkern2mu U=1\right)=\mathbb{P}\!\left(V=1 \mkern2mu|\mkern2mu U=-1\right)
    =\frac{2}{3}.
    \end{aligned}
\]
令
\[
    E=\left\{\omega\in\Omega \mid \text{一元二次方程
    $x^2+U(\omega)x+V(\omega)=0$ 有实数解}\right\}.
\]

1. 求$\mathbb{P}(E)$。

2. 令随机变量$Y:\Omega\rightarrow\mathbb{R}$为
   \[
       Y(\omega) = \begin{cases}
       \text{方程 $x^2+U(\omega)x+V(\omega)=0$ 较大的实数解}, & \text{若}\ \omega\in E, \\
       0, & \text{若}\ \omega\notin E.
       \end{cases}
   \]
   求$\mathbb{E}[Y]$。

注：本题改编自[@grimmett2014introduction]第3.6节习题9。
:::

::: exercise [超几何分布]
设一个罐子中有$b$个蓝色球和$m-b$个红色球。
现从这个罐子中无放回地随机抽取$n$个球，
并用$B$表示这$n$个球中蓝色球的个数。

1. 证明：对任意满足
   $\max\{0,n+b-m\}\leq k\leq \min\{b,n\}$的整数$k$，有
   \[
       \mathbb{P}(B=k) = \frac{\binom{b}{k}\binom{m-b}{n-k}}{\binom{m}{n}},
   \]
   而对其余的$x$则均有$\mathbb{P}(B=x)=0$。

   我们将$B$服从的离散型分布称作参数为$(m,b,n)$的**超几何分布**
   （hypergeometric distribution）。

2. 试求参数为$(m,b,n)$的超几何分布的期望与方差。

   *提示：* 令$E_i$表示第$i$个抽取的球为蓝色，则
   $B=\sum_{i=1}^n \mathsf{1}_{E_i}$，
   而后用 @exercise:sum_indicator_expectation_variance
   的结论。

3. 现设$b$为$m$的函数，且$m\rightarrow\infty$时
   有$b/m\rightarrow p$，其中$p\in[0,1]$。固定$n$与$k$，证明
   \[
       \lim_{m\rightarrow\infty}
       \mathbb{P}(B=k) = \binom{n}{k}\,p^k(1-p)^{n-k}.
   \]

4. 现设$X$与$Y$相互独立且分别服从
   参数为$(b,p)$与$(m-b,p)$的二项分布。
   给定任意正整数$n$与自然数$k$，试求条件概率
   $
\mathbb{P}\!\left(X=k \mkern2mu|\mkern2mu X+Y=n\right)
$。

:::

::: exercise
设$X_1,X_2,\ldots$为一参数为$p$的伯努利过程。
令$N$服从参数为$\lambda$的泊松分布，
并设$N,X_1,X_2,\ldots$相互独立。令
\[
    U=\sum_{i=1}^N X_i.
\]

1. 求$(U,N-U)$的联合分布列，并证明$U$与$N-U$相互独立。

   *提示：* 注意到
   \[
       \begin{aligned}
       & \mathbb{P}(U=x,N-U=y)=
       \mathbb{P}(U=x,N=x+y) \\
       ={} & \mathbb{P}\!\left(\sum\nolimits_{i=1}^{x+y}X_i=x,N=x+y\right)=\mathbb{P}\!\left(\sum\nolimits_{i=1}^{x+y}X_i=x\right)\mathbb{P}(N=x+y).
       \end{aligned}
   \]

2. 求$U$的分布列。

:::

::: exercise [多项分布]
设$X_1,\ldots,X_n$为独立同分布的离散型随机变量，
它们的值域均为$\{1,2,\ldots,r\}$（$r$为给定正整数），分布列为
\[
    p_{X_1}(k)=\cdots=p_{X_n}(k) = p_k,\qquad k=1,2,\ldots,r,
\]
其中$p_1,p_2,\ldots,p_r$为给定的非负实数，
满足$\sum_{k=1}^r p_k=1$。现对每个$k=1,2,\ldots,r$，定义
\[
    N_k = \sum_{i=1}^n \mathsf{1}_{\{X_i=k\}}.
\]

1. 求$(N_1,\ldots,N_r)$的联合分布列。

2. 求每个$N_k$的边缘分布列。

3. 求$k\neq j$时$\mathbb{E}[N_kN_j]$的值。

:::

::: exercise [负二项分布]
设$X_1,X_2,\ldots$为一参数为$p$的伯努利过程。
对任意正整数$r$，令$H_r$为第$r$次伯努利试验成功时的总试验次数。

1. 证明：$H_r$的分布列为
   \[
       p_{H_r}(k) = \binom{k-1}{r-1}p^r(1-p)^{k-r},
       \qquad k=r,r+1,r+2,\ldots
   \]
   我们将上述分布列给出的概率分布称为参数为$(r,p)$的**负二项分布**
   （negative binomial distribution）。

2. 试求参数为$(r,p)$的负二项分布的期望与方差。

   *提示：* 利用$H_r=\sum_{k=1}^r T_k$，
   其中各$T_k$的含义如图\ref{fig:Bernoulli_process} 所示。

3. 设一个人不断地抛一枚均匀硬币，直到抛出正面为止。
   试求在整个过程中抛出反面的次数的期望。

4. 考虑Banach火柴盒问题（@example:Banach_matchbox），
   假设随机选择火柴盒时不再是等概率地选取，而是以概率$p$选择一号火柴盒，
   以概率$1-p$选择二号火柴盒。试求这种情况下，
   某次取火柴发现待取火柴盒已空时另一个火柴盒里还剩$k$根火柴的概率。

:::

::: exercise
1. 设$X_1,X_2,\ldots$为一列独立同分布的随机变量，
   集合$A,B\subseteq\mathbb{R}$互不相交，
   且满足$\mathbb{P}(X_1\in A\cup B)>0$。令
   \[
       T=\min\{n\in\mathbb{N}_+ \mid X_n\in A\cup B\}.
   \]
   证明
   \[
       \mathbb{P}(X_T\in A) = \frac{\mathbb{P}(X_1\in A)}{\mathbb{P}(X_1\in A\cup B)}.
   \]
   *提示：* 先证明$\{X_T\in A\} = \bigcup_{\tau=1}^\infty\{X_1\notin A\cup B,\ldots,X_{\tau-1}\notin A\cup B, X_\tau\in A\}$。

2. 考虑这样一个游戏：设你有一对均匀的六面骰子，
   你先掷一次这对骰子并得到点数之和$X$，若$X$等于$7$或$11$则直接获胜，
   若$X$等于$2$、$3$或$12$则直接输掉游戏，否则进入下一个环节：
   你重复投掷这一对骰子，直到掷出的点数之和等于$7$或$X$时停止游戏，
   若停止时掷出的点数之和为$7$则输掉游戏，否则获胜。
   试求在这个游戏中获胜的概率。

   注：本题取自[@ross_first_course_probability]第二章习题26。

:::

::: exercise [De Montmort匹配问题]
设有$n$个编号为$1$到$n$的小球，以及$n$个编号为$1$到$n$的盒子。将$n$个小球充分打乱后放到$n$个盒子中，每个盒子中有一个小球。令$K$表示盒子编号与小球编号相匹配的数目。

1. 求$\mathbb{P}(K=0)$，即每个盒子的编号和其中小球的编号都不相同的概率。

   *提示：* 令事件$E_i$表示“第$i$个盒子中的小球编号为$i$”，则$\mathbb{P}(K=0)=\mathbb{P}\!\left(\bigcap_{i=1}^n E_i^c\right)$，接下来用 @exercise:probability_finite_union  的结论求该式右端的概率。

2. 求$\mathbb{E}[K]$以及$\operatorname{Var}(K)$。

   *提示：* 利用$K=\sum_{i=1}^n \mathsf{1}_{E_i}$，$\mathsf{1}_{E_i}\cdot\mathsf{1}_{E_j}=\mathsf{1}_{E_i\cap E_j}$以及期望的线性。

3. 求随机变量$K$的分布列$p_K$。（${}^\star$）该分布列是否满足$\sum_{k}p_K(k)=1$？

4. 证明$n$趋于无穷大时$p_K(k)$趋向于$\mathrm{e}^{-1}/k!$。这说明$n$很大时，$K$近似服从参数为$1$的泊松分布。

:::

::: exercise [赠券收集问题，coupon collector's problem] {@exercise:coupon_collector}
某商家为促销歌手A的唱片，在顾客每购买一张歌手A的唱片后即附赠一张海报。假设商家手上总共有$N$种海报，每次赠送海报时都是从这$N$种当中随机选择一种赠送。现张三希望通过不断购买歌手A的唱片来收集这些海报。若张三在购买了$T$张唱片后终于集齐了所有$N$种海报，试求$\mathbb{E}[T]$。
:::

::: exercise
设有一枚不均匀的硬币，它抛出正面的概率为$p\in\left]0,1/2\right[\,$，抛出反面的概率为$1-p$；$p$的取值未知。

1. 试设计一种方法，通过独立重复地抛掷这枚不均匀硬币来产生一个随机数$X$，使得$X$服从参数为$1/2$的伯努利分布。

   *提示：* 注意到若连续抛掷两次硬币，则出现先正后反的概率与出现先反后正的概率相等[^1]。

2. 在你给出的方法中，平均需要抛掷多少次硬币才能产生一个随机数？

:::

[^1]: 此为John von Neumann给出的思路，见[@vonneumann1951various]。
