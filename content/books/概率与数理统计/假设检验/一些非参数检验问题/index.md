---
title: 一些非参数检验问题
---
本节中，我们将介绍一些非参数检验问题。所谓的非参数检验，是指
假设检验问题中不再假定总体的分布函数一定可以表示为$F(x;\theta)$的形式；
换句话说，不再认为总体的未知信息全都包含在某个未知的参数$\theta$当中。
对于非参数检验，原则上其原假设与备择假设的形式会更为灵活，但本节考虑的
问题中备择假设$H_1$多是表达原假设$H_0$的某种“否定”，下面给出几个例子：

- $H_0:\ \text{总体的分布函数为 $F_0(x)$}$，

  $H_1:\ \text{总体的分布函数不是 $F_0(x)$}$，

  其中$F_0$为一给定的分布函数。

- $H_0:\ \text{总体服从某个泊松分布}$，

  $H_1:\ \text{总体取值为非负整数, 其分布不是泊松分布}$。

- $H_0:\ \text{总体 $(X,Y)$ 当中 $X$ 与 $Y$ 相互独立}$，

  $H_1:\ \text{总体 $(X,Y)$ 当中 $X$ 与 $Y$ 不独立}$。

通常，若备择假设$H_1$可以通过对原假设$H_0$按某种方式取“否定”自然地
看出来，那我们就不显式地指明备择假设$H_1$，而仅指明原假设$H_0$。

## 拟合优度检验*

**拟合优度检验**（test of goodness-of-fit）是针对总体是否具有
某一个指定的分布或属于某一个分布族而进行的假设检验。最简单的拟合优度检验
问题具有如下形式：给定一个确定的分布函数$F_0(x)$，我们想要基于获得的样本，
检验总体的分布函数是否就是$F_0(x)$，即
\[
    H_0:\ \text{总体的分布函数为 $F_0(x)$}, \qquad
    H_1:\ \text{总体的分布函数不是 $F_0(x)$}.
\]
我们简要介绍两种拟合优度检验的方法：Pearson卡方检验法与
Kolmogorov–Smirnov检验法。

**Pearson卡方检验法。** 设$X_1,\ldots,X_n$为来自未知总体的
样本，其中样本容量$n$足够大。$\mathcal{R}$为实数集的一个子集，
它使得分布函数为$F_0(x)$的随机变量取值落于$\mathcal{R}$内的概率为$1$。
在Pearson卡方检验法中，我们首先将$\mathcal{R}$划分成$m$个互不相交的
子集$B_1,B_2,\ldots,B_m$。例如

- 若$\mathcal{R}=\mathbb{R}$，则通常会将各个$B_k$取为
  如下形式的区间：

  ```math {@eq:chi2test_partition}
  \mathbb{R}=
  \left]-\infty,a_1\right]\cup\left]a_1,a_2\right]\cup\left]a_2,a_3\right]\cup\cdots\cup\left]a_{m-2},a_{m-1}\right]\cup\left]a_{m-1},+\infty\right[.
  ```

- 当$\mathcal{R}=\{r_1,r_2,\ldots\}$为一可数集时，
  $F_0(x)$可以当作一个离散型分布，记其分布列为$p_0(x)$，
  则一种$\mathcal{R}$的划分方法是将$r_1,r_2,\ldots$先按照
  $p_0(r_j)$的值进行降序排序，而后取

  ```math {@eq:chi2test_partition_discrete}
  B_1=\{r_1\},B_2=\{r_2\},\ldots,B_{m-1}=\{r_{m-1}\},B_{m}=\{r_{m},r_{m+1},\ldots\}.
  ```

我们将分布$F_0(x)$下随机变量属于集合$B_k$的概率记为$p_k$。例如，
若$\mathcal{R}=\mathbb{R}$并采用式 @eq:chi2test_partition
的划分方式，则
\[
    \begin{aligned}
    p_1 &= F_0(a_1), \qquad p_m = 1-F_0(a_{m-1}), \\
    p_k &= F_0(a_k)-F_0(a_{k-1}),\quad k=2,\ldots,m-1,
    \end{aligned}
\]
而若$\mathcal{R}=\{r_1,r_2,\ldots\}$并采用式
@eq:chi2test_partition_discrete  的划分方式，则
\[
    p_k = p_0(r_k),\quad k=1,2,\ldots,m-1,\qquad
    p_m = \sum_{j\geq m} p_0(r_j),
\]
其中$p_0(x)$表示$F_0(x)$相应的分布列。直观上看，若原假设$H_0$成立，
则当样本容量$n$足够大时，样本$X_1,\ldots,X_n$当中落在集合$B_k$内的数目
应当约等于$np_k$，也就是说
\[
    \sum_{i=1}^n \mathsf{1}_{\{X_i\in B_k\}}\approx np_k,
    \qquad\text{若原假设$H_0$成立}.
\]
而若样本容量$n$非常大时，上述近似相等的关系依然对于某个$k$不成立，
则意味着原假设不能很好地解释我们所获取的样本数据，或者说，分布函数
$F_0(x)$作为一个统计模型不能很好地对样本数据进行拟合。基于上述考虑，
Karl Pearson设计了如下检验统计量用于拟合优度检验：

```math {@eq:pearson_chi2_test_statistic}
Q
=\sum_{k=1}^m\frac{(N_k-np_k)^2}{np_k},\qquad\text{其中}\ N_k = \sum_{i=1}^n \mathsf{1}_{\{X_i\in B_k\}}.
```

直观上看，若$Q$取值明显偏大，则意味着样本相对于原假设$H_0$产生了
显著的偏离。注意到式 @eq:pearson_chi2_test_statistic  当中，
对每个衡量偏离程度的$(N_k-np_k)^2$还乘以了因子$1/(np_k)$；
大致来说，这个因子起到了对各个偏离程度$(N_k-np_k)^2$进行平衡的作用，
并使得检验统计量$Q$在原假设$H_0$下的渐近分布（也就是样本容量$n$趋于
无穷大时分布的极限）能够被推导出来。

::: theorem {@theorem:Pearson_chi2_test}
令$\mathrm{X}^2$为式 @eq:pearson_chi2_test_statistic
定义的检验统计量，并设原假设$H_0$成立（即$F_0(x)$为总体的分布函数）。
则当$n\rightarrow\infty$时，$\mathrm{X}^2$的分布函数将逐点收敛于
$\chi^2(m-1)$的分布函数。
:::

@theorem:Pearson_chi2_test  的证明不做要求，感兴趣的
读者可参阅[@schervish1995theory]定理7.131，但我们指出它的背后
实际上是中心极限定理。定理中$\chi^2$分布的自由度为$m-1$则与
$\sum_{k=1}^m N_k=n$这一等式关系有关。

在搞清楚大样本情形下$\mathrm{X}^2$在原假设成立时的分布以后，
我们即可得到$p$值与拒绝域。设$x_1,\ldots,x_n$为获取的样本值，
对每个$k=1,\ldots,m$，用$n_k$表示$x_1,\ldots,x_n$当中落在
集合$B_k$中的点的个数，则$p$值为
\[
    \hat{p} = 1-F_{m-1}^{\chi^2}(q),
    \quad\text{其中}\
    q = \sum_{i=1}^n \frac{(n_k-np_k)^2}{np_k},
\]
而拒绝域则由
\[
    q >\chi^2_{\alpha}(m-1)
\]
给出，其中$\alpha$为事先给定的显著性水平。

在Pearson卡方检验当中，总体值域$\mathcal{R}$的划分方式（包括子集的
数目$m$以及每个子集$B_k$的具体取法）会对检验的最终结果产生影响。
经验指出，通常应当使得划分之后算出的各个$p_k$值至少满足$np_k\geq 5$。
此外，由于 @theorem:Pearson_chi2_test  给出的仅仅是
检验统计量的渐近分布，故Pearson卡方检验只适用于大样本情形，经验上，
通常认为样本容量小于$50$的情形不适合用Pearson卡方检验法。

::: example
设有一枚均匀性未知的立方体骰子，六个面上依次标有点数$1,2,\ldots,6$。
将该骰子投掷600次后，六个点数各自出现的次数依次为$96$，$87$，$117$，
$92$，$102$，$106$。我们采用Pearson卡方检验法来对骰子的均匀性进行
检验。令总体$X$为骰子投掷出的点数，则骰子的均匀性意味着$X$服从
$\{1,2,\ldots,6\}$上的离散型均匀分布，也即
\[
    \mathbb{P}_{H_0}(X=k) = \frac{1}{6},\qquad k=1,2,\ldots,6.
\]
我们自然取$\mathcal{R}=\{1,\ldots,6\}$并将其划分为
$\mathcal{R}=\{1\}\cup\{2\}\cup\cdots\cup\{6\}$。按照该划分方式，
Pearson卡方检验的检验统计量的值为
\[
    \begin{aligned}
    q ={} & \frac{(96\!-\!100)^2}{100}
    +\frac{(87\!-\!100)^2}{100}
    +\frac{(117\!-\!100)^2}{100} \\
    & +\frac{(92\!-\!100)^2}{100}
    +\frac{(102\!-\!100)^2}{100}
    +\frac{(106\!-\!100)^2}{100} \\
    ={} &
    5.78,
    \end{aligned}
\]
而检验统计量在原假设下近似服从自由度为$6-1=5$的$\chi^2$分布，
故$p$值为
\[
    \hat{p} = 1-F^{\chi^2}_{5}(5.78)
    =0.328.
\]
这个$p$值是比较大的，因而从我们获得的投掷结果来看，还没有充分理由
认为骰子是非均匀的。
:::

**（${}^\star$）Kolmogorov–Smirnov检验法。**
在Kolmogorov–Smirnov检验法中，我们首先基于经验分布函数来构造
如下随机变量：

```math {@eq:Kolmogorov_test_statistic}
\begin{aligned}
D_n ={} &
\sup_{x\in\mathbb{R}}
\left|\widehat{F}_n(x)-F_0(x)\right| \\
={} &
\sup_{x\in\mathbb{R}}
\left|
\frac{1}{n}\sum_{i=1}^n \mathsf{1}_{\{X_i\leq x\}}
-F_0(x)\right|,
\end{aligned}
```

习惯上我们会显式地把样本容量$n$放在该随机变量的角标中。
以$D_n$为基础来设计拟合优度检验统计量的合理性部分来自于如下
Glivenko–Cantelli定理：

::: theorem [Glivenko–Cantelli]
设$X_1,X_2,\ldots,X_n,\ldots$独立同分布，它们的分布函数均为
$F_0(x)$。令$D_n$由式 @eq:Kolmogorov_test_statistic  定义，
则当$n\rightarrow\infty$时，$D_n$几乎必然收敛于$0$。
:::

不难看出，$D_n$衡量了经验分布函数$\widehat{F}_n(x)$与$F_0(x)$
之间的最大差值，而Glivenko–Cantelli定理则保证了样本容量趋于无穷大时
该差值趋于$0$。因此，直观上看，若样本容量$n$非常大时，我们根据样本
观测值算出的检验统计量的值$d_n$依然较大，则说明样本值相对于原假设
$H_0$有显著的偏离。

当然，由于$D_n$在$n\rightarrow\infty$时趋于$0$，我们需要将其
乘以适当的系数，使其具有非退化的渐近分布，再将它作为检验统计量，
以方便$p$值与临界值的计算。这方面的结果由如下定理给出：

::: theorem [Kolmogorov–Smirnov]
设$X_1,X_2,\ldots,X_n,\ldots$独立同分布，它们的分布函数均为
$F_0(x)$。令$D_n$由式 @eq:Kolmogorov_test_statistic  定义，
则对任意$t>0$，有

```math {@eq:kolmogorov-smirnov}
\lim_{n\rightarrow\infty} \mathbb{P}\!\left(\sqrt{n}D_n\leq t\right)
=1-2\sum_{i=1}^\infty(-1)^{i-1}\mathrm{e}^{-2i^2t^2}.
```

:::

定理 @eq:kolmogorov-smirnov  指出，我们可以将
$\sqrt{n}D_n$作为检验统计量，而该检验统计量在大样本极限时的分布函数
由式 @eq:kolmogorov-smirnov  给出。式
@eq:kolmogorov-smirnov  右端给出的分布又被称为
Kolmogorov分布。接下来，我们即可依据式
@eq:kolmogorov-smirnov  来计算大样本情形的$p$值与临界值。
设$x_1,\ldots,x_n$为获得的样本观测值，其中样本容量$n$足够大，
$\sqrt{n}d_n$为检验统计量$\sqrt{n}D_n$在该组样本上的取值，则$p$值为
\[
    \hat{p} = 2\sum_{i=1}^\infty(-1)^{i-1}\mathrm{e}^{-2nd_n^2 i^2},
\]
而给定显著性水平$\alpha$后，临界值则由Kolmogorov分布的
上$\alpha$分位数给出。

::: remark
当分布函数$F_0(x)$对应于一个连续型分布时，通常会考虑用
Kolmogorov–Smirnov检验法而非Pearson卡方检验法来进行拟合优度检验。
而若分布函数$F_0(x)$对应于一个离散型分布，则通常会先考虑用Pearson
卡方检验。另一方面，Pearson卡方检验具有较高的灵活性，可以推广到其它
更复杂的拟合优度检验问题中，包括总体是多维随机向量时的拟合优度检验问题，
以及对总体是否来自于给定的一族参数化分布进行检验的问题（例如
对“$H_0:\text{总体服从某个泊松分布}$”进行检验；
见[@degroot2010probability]第10.2节）。
:::

## 列联表与独立性检验*

本小节中我们考虑这样一个问题：设总体为一个二维随机变量$(X,Y)$，
获取的简单随机样本为$(X_1,Y_1),\ldots,(X_n,Y_n)$。应当如何通过
样本来检验总体当中$X$与$Y$之间的独立性？换句话说，我们希望检验原假设
\[
    H_0:\text{总体 $(X,Y)$ 中 $X$ 与 $Y$ 相互独立}.
\]
我们将这样的假设检验称为**独立性检验**（test of independence）。

接下来介绍的独立性检验法可以看作是Pearson提出的卡方检验法的一个变种。
设已知总体$(X,Y)$当中$X$与$Y$的取值范围分别由有限集
$\mathcal{R}_X$与$\mathcal{R}_Y$给出
[^1]，其中
\[
    \begin{aligned}
    \mathcal{R}_X ={} \{a_1,a_2,\ldots,a_r\},
    \qquad
    \mathcal{R}_Y ={} \{b_1,b_2,\ldots,b_c\},
    \end{aligned}
\]
而$r$与$c$分别为$\mathcal{R}_X$与$\mathcal{R}_Y$的元素个数。
随后，对每个$j=1,\ldots,r$与$k=1,\ldots,c$，我们统计样本
$(X_1,Y_1),\ldots,(X_n,Y_n)$当中等于$(a_j,b_k)$的数目有多少：
\[
    N_{jk} = \sum_{i=1}^n \mathsf{1}_{\{X_i= a_j,Y_i=b_k\}},
    \qquad j=1,\ldots,r,\,k=1,\ldots,c,
\]
并令
\[
    \begin{aligned}
    N_{j+} ={} & \sum_{k=1}^c N_{jk}
    =\sum_{i=1}^n \mathsf{1}_{\{X_i=a_j\}}, \\
    N_{+k} ={} & \sum_{j=1}^r N_{jk}
    =\sum_{i=1}^n \mathsf{1}_{\{Y_i=b_k\}}.
    \end{aligned}
\]
显然$n=\sum_{j,k} N_{jk} = \sum_{j=1}^r N_{j+} = \sum_{k=1}^c N_{+c}$。
若原假设$H_0$成立，也就是说$X$与$Y$相互独立，则当样本容量$n$足够大时，
对任意的$j$和$k$，均应当有
\[
    \begin{aligned}
    N_{jk} \approx{} & n\cdot \mathbb{P}_{H_0}\!\left(X=a_j, Y=b_k\right) \\
    ={} & n\cdot \mathbb{P}_{H_0}(X= a_j)\cdot
    \mathbb{P}_{H_0}(Y= b_k)
    \approx
    \frac{1}{n}N_{j+}N_{+k}.
    \end{aligned}
\]
基于上述考虑，仿照拟合优度检验中检验统计量的构造，我们取

```math {@eq:contingency_test_independence_statistic}
Q = \sum_{j=1}^r\sum_{k=1}^c\frac{\left(N_{jk}-\widehat{E}_{jk}\right)^2}{\widehat{E}_{jk}},
\qquad\text{其中}\
\widehat{E}_{jk} = \frac{1}{n} N_{j+}N_{+k}
```

为检验统计量。原假设成立时，该检验统计量在大样本极限下的渐近分布
由如下定理给出：

::: theorem
令$Q$为式 @eq:contingency_test_independence_statistic
定义的检验统计量，并设原假设$H_0$成立（即$X$与$Y$相互独立）。
则当$n\rightarrow\infty$时，$Q$的分布函数将逐点收敛于
$\chi^2((r-1)(c-1))$的分布函数。
:::

换句话说，检验统计量$Q$在大样本情形下近似服从自由度为
$(r-1)(c-1)$的$\chi^2$分布。由此即可得到大样本情形下的$p$值与临界值：
设$(x_1,y_1),\ldots,(x_n,y_n)$为样本观测数据，则$p$值约为
\[
    \hat{p} \approx 1-F^{\chi^2}_{(r-1)(c-1)}(q),
\]
其中$q$为检验统计量$Q$在该组样本上的取值。若给定了显著性水平$\alpha$，
则拒绝域可近似表示为
\[
    q > \chi^2_{\alpha}((r-1)(c-1)).
\]

在将上述检验法用于实际问题时，我们习惯上会把样本数据
$(x_1,y_1),\ldots,(x_n,y_n)$进行处理并表示为如下形式的表格：

\begin{tabular}{cccccc}
!& [C4] !$Y$  & !\\
!$X$ & !$b_1$ & !$b_2$ & !$\cdots$ & !$b_c$ & !总计 \\
!$a_1$ & $n_{11}$ & $n_{12}$ & $\cdots$ & $n_{1c}$ & $n_{1+}$ \\
!$a_2$ & $n_{21}$ & $n_{22}$ & $\cdots$ & $n_{2c}$ & $n_{2+}$ \\
!$\vdots$ & $\vdots$ & $\vdots$ & $\ddots$ & $\vdots$ & $\vdots$ \\
!$a_r$ & $n_{r1}$ & $n_{r2}$ & $\cdots$ & $n_{rc}$ & $n_{r+}$ \\
!总计 & $n_{+1}$ & $n_{+2}$ & $\cdots$ & $n_{+c}$ & $n$
\end{tabular}

其中$n_{jk}$即为统计量$N_{jk}$在给定样本数据后的具体取值，也就是$(x_1,y_1),\ldots,(x_n,y_n)$中有多少个点取值为$(a_j,b_k)$；$n_{j+}$与$n_{+k}$同理。上述形式的表格被称为**列联表**（contingency table）。

::: example [本例取自[@degroot2010probability]第10.4节习题3]
A大学每周五下午会面向全校本科学生举办由访问学者主讲的学术讲座。在4次讲座过后，讲座负责人随机调查了70名大一学生、70名大二学生、60名大三学生与50名大四学生的讲座参与情况，并汇总为如下表格：

\begin{tabular}{ccccccc}
! & [C5] !讲座参与次数 & ! \\
!年级 & !0 & !1 & !2 & !3 & !4 & !总人数 \\
!大一 & 10 & 16 & 27 & 6 & 11 & 70 \\
!大二 & 14 & 19 & 20 & 4 & 13 & 70 \\
!大三 & 15 & 15 & 17 & 4 & 9 & 60 \\
!大四 & 19 & 8 & 6 & 5 & 12 & 50 \\
!总人数 & 58 & 58 & 70 & 19 & 45 & 250
\end{tabular}

我们希望判断讲座参与次数与年级是否相互独立。为了计算检验统计量
@eq:contingency_test_independence_statistic  的值，
我们首先计算各个$\widehat{e}_{jk}$的值，可得
\[
    \left[\widehat{e}_{jk}\right]
    =\begin{bmatrix}
    16.24 & 16.24 & 19.6 & 5.32 & 12.6 \\
    16.24 & 16.24 & 19.6 & 5.32 & 12.6 \\
    13.92 & 13.92 & 16.8 & 4.56 & 10.8 \\
    11.6 & 11.6 & 14 & 3.8 & 9
    \end{bmatrix}.
\]
接下来即可算得检验统计量 @eq:contingency_test_independence_statistic
的值为
\[
    q = \sum_{j=1}^4\sum_{k=1}^5
    \frac{\left(n_{jk}-\widehat{e}_{jk}\right)^2}{\widehat{e}_{jk}}
    =18.9386,
\]
而$(r-1)(c-1)=(4-1)\times(5-1)=12$，故$p$值为
\[
    \hat{p} = 1-F^{\chi^2}_{12}(18.9386) = 0.0900.
\]
由该$p$值，可认为讲座参与次数与年级之间呈现出一些不独立的迹象，
但若想要做出更确切的结论则需要进一步收集数据。
:::

[^1]: 若$X$或$Y$的值域为无限集，则需要像上一节那样先将 $X$与$Y$的值域划分为有限多个组别。
