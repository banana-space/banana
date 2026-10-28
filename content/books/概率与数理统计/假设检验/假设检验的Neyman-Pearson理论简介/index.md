---
title: 假设检验的Neyman–Pearson理论简介
---

假设检验的Neyman–Pearson理论是由统计学家Jerzy Neyman与
Egon Pearson发展起来的，是一套广为接受的频率学派的假设检验理论，
也是大多数数理统计教科书中频率学派假设检验的标准理论。
Neyman–Pearson理论的几个核心要点如下：

1. Neyman–Pearson理论面向的是在原假设与备择假设之间二选一的
   假设检验问题：需事先设定一个显著性水平$\alpha$，当$p$值小于
   $\alpha$时拒绝$H_0$而接受$H_1$，当$p$值大于等于$\alpha$时接受
   $H_0$而拒绝$H_1$。

2. 基于第1点，Neyman–Pearson理论进一步
   引入了**第I类错误**与**第II类错误**的概念，
   分别对应于$H_0$成立时拒绝$H_0$，以及$H_1$成立时接受$H_0$两种情况。
   可以证明，$H_0$成立时发生第I类错误的概率就等于显著性水平$\alpha$。

3. 在引入两类错误后，Neyman–Pearson理论用如下方法评价
   检验统计量$T$的优劣程度：在给定任一显著性水平$\alpha$后，
   考察用$T$进行假设检验时导致的第II类错误的概率；大致来说，
   这个概率越小，则认为$T$是越好的检验统计量。

::: remark
（${}^\star$）
有些教材中会认为“不拒绝$H_0$”并不意味着“接受$H_0$”，出现这种看法
主要是因为频率学派的假设检验实际上应当分为两种范式：Fisher的显著性
检验范式与Neyman–Pearson的假设检验范式，其中Fisher显著性检验范式
的目的在于用$p$值对样本值与原假设的不一致性进行定量的衡量，其中
备择假设只用于指导检验统计量的设计（在Fisher的原始理论中甚至没有
备择假设），而Neyman–Pearson假设检验范式则是一个二选一的决策过程，
其中的备择假设直接与第II类错误及其概率的定量刻画相关。这两套范式
用到的数学理论有很明显的重叠，但在对结果的诠释上是应当做出区分的，
然而目前的教学往往将二者混淆在一起。笔者认为，在Fisher的显著性检验
范式中，较大的$p$值的确不意味着可以接受$H_0$，而只能表明现有的数据
尚不能构成否定$H_0$的有力证据；但在Neyman–Pearson的假设检验范式中，
由于已经将$H_1$成立时不拒绝$H_0$归类为一种错误，并且考虑了应当如何
对这种错误进行定量刻画甚至最小化，故实际上已无必要对“不拒绝$H_0$”
与“接受$H_0$”做出区分。
:::

接下来我们对上述内容进行进一步展开。为简单起见，我们假定原假设
$H_0:\theta=\theta_0$是一个简单假设。

## 假设检验的拒绝域法*

当我们设定了显著性水平$\alpha$，并要求假设检验过程必须在
$H_0$与$H_1$之间二选一时，可以将假设检验的过程等价地用另一种流程表述。
我们用$\hat{p}(x_1,\ldots,x_n)$来表示样本值$x_1,\ldots,x_n$
对应的$p$值，则在给定显著性水平$\alpha$后，假设检验的过程可以总结为
\[
\text{
若 $\hat{p}(x_1,\ldots,x_n)<\alpha$, 则拒绝 $H_0$; 否则接受 $H_0$.}
\tag{P}
\]
设检验统计量$T=\phi(X_1,\ldots,X_n)$是单侧的。此时我们令

```math {@eq:hypothesis_testing_critical_value}
c_\alpha = \max\left\{c\in\mathbb{R} \mid
\mathbb{P}_{\theta_0}\!\left(
T\geq c
\right)\geq \alpha\right\};
```

换句话说，$c_\alpha$为满足不等式
$\mathbb{P}_{\theta_0}(T\geq c)\geq\alpha$的所有实数$c$当中
最大的数。则可以证明
\[
\begin{aligned}
\hat{p}(x_1,\ldots,x_n)<\alpha
\quad \Longleftrightarrow\quad
\phi(x_1,\ldots,x_n) > c_\alpha.
\end{aligned}
\]
这意味着我们可以把假设检验的过程等价地写为
\[
\text{若 $\phi(x_1,\ldots,x_n)>c_\alpha$, 则拒绝 $H_0$;
否则接受 $H_0$.}
\tag{C1}
\]
也就是说，我们只需算出样本值$x_1,\ldots,x_n$所对应的检验统计量
$T$的取值，并将其与$c_\alpha$比较即可判断是否应当拒绝$H_0$。
我们将式 @eq:hypothesis_testing_critical_value
给出的$c_\alpha$称为（显著性水平为$\alpha$时检验统计量$T$的）
**临界值**（critical value），并将集合
\[
C_\alpha=\left]c_\alpha,+\infty\right[
\]
称为**拒绝域**（rejection region或critical region）。

当原假设$H_0$下检验统计量$T$为连续型随机变量，且$T$的概率密度函数
在某个开区间上恒大于$0$而在该开区间外恒等于$0$时，单侧检验的临界值
$c_\alpha$可通过求解方程

```math {@eq:hypothesis_testing_critical_value_2}
\mathbb{P}_{\theta_0}(T> c_\alpha)=\alpha
```

得到。在 @example:testing_normal_mean_var_known_one-sided
当中，我们实际上已经求出了显著性水平为$\alpha$时检验统计量$Z$的
临界值为$z_{\alpha}$，它也可直接由方程
@eq:hypothesis_testing_critical_value_2  解出：
\[
\mathbb{P}_{\mu_0}
\left(Z\geq c_\alpha\right) = \alpha\quad
\Longleftrightarrow\quad
c_\alpha = z_{\alpha}.
\]

对于双侧检验，则需要用两个临界值来框定拒绝域：

```math {@eq:hypothesis_testing_critical_value_two-sided}
\begin{aligned}
c^u_{\alpha} ={} & \max\left\{
c\in\mathbb{R} \Bigm\vert
\mathbb{P}_{\theta_0}(T\geq c)\geq\frac{\alpha}{2}
\right\}, \\
c^l_{\alpha} ={} & \min\left\{
c\in\mathbb{R} \Bigm\vert
\mathbb{P}_{\theta_0}(T\leq c)\geq\frac{\alpha}{2}
\right\}.
\end{aligned}
```

此时可以证明
\[
\hat{p}(x_1,\ldots,x_n)<\alpha\quad
\Longleftrightarrow\quad
\phi(x_1,\ldots,x_n)>c_\alpha^u\ \text{或}\ \phi(x_1,\ldots,x_n)<c_\alpha^l.
\]
这意味着我们可以把假设检验的过程等价地写为
\[
\text{若 $\phi(x_1,\ldots,x_n)>c_\alpha^u$ 或
$\phi(x_1,\ldots,x_n)<c_\alpha^l$, 则拒绝 $H_0$; 否则接受 $H_0$.}
\tag{C2}
\]
相应的拒绝域为
\[
C_\alpha =\ ]{-\infty},c_{\alpha}^l[\
\cup\,\left]c_{\alpha}^u,+\infty\right[.
\]
而若$T$在原假设下还是连续型随机变量，且概率密度函数在某个开区间上
恒大于$0$而在该开区间外恒等于$0$，则双侧检验的两个临界值可通过求解方程

```math {@eq:hypothesis_testing_critical_value_two-sided_2}
\begin{aligned}
\mathbb{P}_{\theta_0}
\!\left(T> c_\alpha^u\right)=
\mathbb{P}_{\theta_0}
\!\left(T< c_\alpha^l\right)
=\frac{\alpha}{2}
\end{aligned}
```

得到。

习惯上，我们将(P)给出的判断是否拒绝
$H_0$的方法称为 **$p$值法**，而将(C1)
与(C2)给出的方法
称为**临界值法**或**拒绝域法**。$p$值法与拒绝域法
等价性的证明则作为选读内容，
感兴趣的读者可参阅[附录C.1](/books/概率与数理统计/假设检验的补充证明/p值法与拒绝域法的等价性/)。

## 第I类错误与第II类错误*

在Neyman–Pearson理论中，我们将假设检验发生的错误分为两类：

1. 当原假设$H_0$成立（即总体的真实参数$\theta$属于$\Theta_0$）时，
   若假设检验过程给出的结论是拒绝原假设，则称发生了**第I类错误**
   （type I error）。

2. 当备择假设$H_1$成立（即总体的真实参数$\theta$属于$\Theta_1$）时，
   若假设检验过程给出的结论是接受原假设，则称发生了**第II类错误**
   （type II error）。

在定义了两类错误以后，Neyman–Pearson理论会进一步考察发生
第I类错误与第II类错误的概率。这里我们对“发生错误的概率”进行一些
必要的说明与澄清：由于Neyman–Pearson理论属于频率学派理论，
因而总体的未知参数$\theta$是一个确定性的未知量。
在Neyman–Pearson理论中，假设检验结果的随机性来自于样本的随机性，
我们会考察

1. 当总体真实参数$\theta$属于$\Theta_0$时，若通过反复
   从总体中抽样，大量地重复用检验统计量$T$进行假设检验，则检验结果中
   发生第I类错误（此时的错误也只能是第I类错误）的频率在重复次数趋于
   无穷时将趋于多少；

2. 当总体真实参数$\theta$属于$\Theta_1$时，若通过反复
   从总体中抽样，大量地重复用检验统计量$T$进行假设检验，则检验结果中
   发生第II类错误（此时的错误也只能是第II类错误）的频率在重复次数趋于
   无穷时将趋于多少。

根据概率的频率诠释（或者说大数定律），可知以上两种被考察的量分别为

```math {@eq:hypothesis_testing_type_I_err_prob}
\mathbb{P}_{\theta}(T\in C_\alpha)=
\mathbb{P}_{\theta}(\phi(X_1,\ldots,X_n)\in C_\alpha),
\qquad\theta\in\Theta_0
```

以及

```math {@eq:hypothesis_testing_type_II_err_prob}
\mathbb{P}_{\theta}(T\notin C_\alpha)=
\mathbb{P}_{\theta}(\phi(X_1,\ldots,X_n)\notin C_\alpha),
\qquad\theta\in\Theta_1,
```

其中$C_\alpha$表示显著性水平为$\alpha$的拒绝域。我们将
@eq:hypothesis_testing_type_I_err_prob  给出的概率称作
（原假设成立时）发生第I类错误的概率，而将
@eq:hypothesis_testing_type_II_err_prob  给出的概率称作
（备择假设成立时）发生第II类错误的概率。这两类错误概率的值都依赖于
$\theta$的值。我们还会引入**功效函数**（power function）
\[
w(\theta) = w_T^\alpha(\theta)
=\mathbb{P}_{\theta}(T\in C_\alpha),\qquad
\theta\in\Theta_0\cup\Theta_1.
\]
不难看出，$w(\theta)$在$\theta\in\Theta_0$时等于第I类错误的概率，
而在$\theta\in\Theta_1$时等于$1$减去第II类错误的概率。

可以证明，当$\Theta_0$仅包含单个点$\theta_0$（即原假设$H_0$
为简单假设），且检验统计量$T$为连续型随机变量时，有[^1]
\[
\mathbb{P}_{\theta_0}(T\in C_\alpha) = \alpha.
\]
也就是说，显著性水平$\alpha$就等于第I类错误的概率。一般来说，
在样本容量固定的情况下，我们不可能同时让第I类错误的概率与第II类错误
的概率都取得任意小。在Neyman–Pearson理论中，我们会先把显著性水平
（也就是第I类错误的概率）固定为一个事先给定的值$\alpha$，而后考察
应如何选取检验统计量$T$，使得$w_T^\alpha(\theta)$的值对于
任意的$\theta\in\Theta_1$都尽可能取得比较大（也就是说让
$\theta\in\Theta_1$时发生第II类错误的概率都尽可能比较小）；
这也是Neyman–Pearson理论中对于检验统计量$T$好坏的一个定量上的
评价标准。特别是，设检验统计量$T_1$与$T_2$为两个检验统计量，
它们的显著性水平为$\alpha$的拒绝域分别记为$C_{1,\alpha}$与
$C_{2,\alpha}$，那么当
\[
w_{T_1}^\alpha(\theta)
=\mathbb{P}_{\theta}(T_1\in C_{1,\alpha})
\geq
\mathbb{P}_{\theta}(T_2\in C_{2,\alpha})
=w_{T_2}^\alpha(\theta)
\]
对任意的$\theta\in\Theta_1$都成立，且上述不等式对于至少一个
$\theta\in\Theta_1$能够取得严格不等号的时候，即认为检验统计量
$T_1$优于$T_2$。

在给出了上述检验统计量好坏的评价标准后，我们就可以进一步研究应当
如何基于原假设与备择假设的形式，找出一个“最优”的检验统计量。
Neyman–Pearson的假设检验理论也包括了关于最优检验法的
Neyman–Pearson引理以及一致最大功效检验
（uniformly most powerful test）等的一套理论。这部分理论其实是
Neyman–Pearson理论的重要组成部分，但限于本讲义面向的读者群体，
我们不对这套理论进行介绍。

需要指出的是，Neyman–Pearson理论虽然是目前广为接受的频率学派
假设检验理论，但从实际应用的角度来看，它也并非对于任何问题都适用
或都具有可操作性。对某些实际问题，Neyman–Pearson理论的基于
第I类与第II类错误概率的评价方式是否合适是值得商榷的。此外，
对某些实际问题，若是基于Neyman–Pearson理论来设计检验统计量，
可能会牵扯到许多复杂的计算，此时一些经验性的检验统计量的设计方法
反而可能会更加实用。

## 基于功效函数估计样本容量*

对功效函数做分析可以为样本容量的选择做出指导。我们用一个例子对此进行说明。

::: example {@example:test_power_normal_mean_var_known}
设总体服从正态分布$\mathcal{N}(\mu,\sigma^2)$，其中
$\sigma^2$已知而$\mu$未知。原假设与备择假设为
\[
H_0: \mu=\mu_0,\qquad H_1:\mu\neq\mu_0.
\]
由 @example:testing_normal_mean_var_known_two-sided
的结果可知，显著性水平$\alpha$时，检验统计量
$Z=(\overline{X}-\mu_0)/(\sigma/\sqrt{n})$的拒绝域为
$\left]-\infty,-z_{\alpha/2}\right[\,\cup\,
\left]z_{\alpha/2},+\infty\right[$。故功效函数为
\[
\begin{aligned}
w(\mu) ={} &
\mathbb{P}
_{\mu}\!\left(
\frac{\overline{X}-\mu_0}{\sigma/\sqrt{n}}
>z_{\alpha/2}
\right)
+
\mathbb{P}
_{\mu}\!\left(
\frac{\overline{X}-\mu_0}{\sigma/\sqrt{n}}
<-z_{\alpha/2}
\right) \\
={} &
\mathbb{P}_{\mu}\!\left(
\frac{\overline{X}-\mu}{\sigma/\sqrt{n}}
>z_{\alpha/2} + \frac{\mu_0-\mu}{\sigma/\sqrt{n}}
\right)
+
\mathbb{P}_{\mu}\!\left(
\frac{\overline{X}-\mu}{\sigma/\sqrt{n}}
<-z_{\alpha/2} + \frac{\mu_0-\mu}{\sigma/\sqrt{n}}
\right) \\
={} &
1-\Phi\!\left(z_{\alpha/2}-\frac{\mu-\mu_0}{\sigma/\sqrt{n}}\right)
+\Phi\!\left(-z_{\alpha/2}-\frac{\mu-\mu_0}{\sigma/\sqrt{n}}\right) \\
={} &
\Phi\!\left(-z_{\alpha/2}+\frac{\sqrt{n}|\mu-\mu_0|}{\sigma}\right)
+
\Phi\!\left(-z_{\alpha/2}-\frac{\sqrt{n}|\mu-\mu_0|}{\sigma}\right),
\end{aligned}
\]
其中最后一步用到了$1-\Phi(x)=\Phi(-x)$及
$\Phi(x+y)+\Phi(x-y)=\Phi(x+|y|)+\Phi(x-|y|)$。

现在考虑这样一个场景：在备择假设$\mu\neq\mu_0$的所有可能性中，
我们尤其关注$|\mu-\mu_0|\geq\delta$的情形，其中$\delta>0$
为事先适当选定的一个正实数，并希望对于这些$\mu$的可能取值能够
尽量避免第II类错误；而对于$0<|\mu-\mu_0|<\delta$的情形，
则由于$\mu$与$\mu_0$较为接近，即使发生第II类错误我们也可以忍受[^2]。
此时我们可以问这样一个问题：在保持显著性水平$\alpha$不变的前提下，
若要将$|\mu-\mu_0|\geq\delta$时的第II类错误概率降低到$\beta$以下，
则样本容量$n$应至少为多大？由上述功效函数的计算可得，第II类错误的概率为
\[
\begin{aligned}
1-w(\mu)
={} & \Phi\!\left(z_{\alpha/2}-\frac{\sqrt{n}|\mu-\mu_0|}{\sigma}\right)
-
\Phi\!\left(-z_{\alpha/2}-\frac{\sqrt{n}|\mu-\mu_0|}{\sigma}\right) \\
<{} &
\Phi\!\left(z_{\alpha/2}-\frac{\sqrt{n}|\mu-\mu_0|}{\sigma}\right).
\end{aligned}
\]
实际上，上式中最后一步的放缩通常是相当紧的，这是因为当
$\sqrt{n}|\mu-\mu_0|$足够大时，
$\Phi\!\left(-z_{\alpha/2}-\frac{\sqrt{n}|\mu-\mu_0|}{\sigma}\right)$
与$\Phi\!\left(z_{\alpha/2}-\frac{\sqrt{n}|\mu-\mu_0|}{\sigma}\right)$
相比可忽略（也可见图 1
给出的示意）。由此可得，若要让$|\mu-\mu_0|\geq\delta$时的第II类错误概率
小于等于$\beta$，一个充分条件为
\[
\Phi\!\left(z_{\alpha/2}-\frac{\sqrt{n}|\mu-\mu_0|}{\sigma}\right)
\leq\beta,
\qquad\forall \mu:|\mu-\mu_0|\geq\delta,
\]
即
\[
z_{\alpha/2}-\frac{\sqrt{n}|\mu-\mu_0|}{\sigma}
\leq - z_\beta,\qquad \forall \mu:|\mu-\mu_0|\geq\delta,
\]
也即
\[
n\geq \left[\frac{(z_{\alpha/2}+z_\beta)\sigma}{\delta}\right]^2.
\]
:::

![图 1：@example:test_power_normal_mean_var_known 中第II类错误的计算示意图。虚曲线为$\mathcal{N}(0,1)$的概率密度函数，实曲线为$\mathcal{N}(\sqrt{n}|\mu\!-\!\mu_0|/\sigma,1)$的概率密度函数，其分布函数即为 $\Phi(z-\sqrt{n}|\mu\!-\!\mu_0|/\sigma)$。蓝色阴影表示实曲线下从$z=-z_{\alpha/2}$到$z=z_{\alpha/2}$部分的面积，不难看出它严格小于但又约等于实曲线下从$z=-\infty$到$z=z_{\alpha/2}$部分的面积。](Type-II_error_example.png){width=660}

理想情况下，对于在原假设与备择假设之间二选一的假设检验问题，我们
均需要在事前进行类似于 @example:test_power_normal_mean_var_known  那样的分析，
找出合适的样本容量$n$以使得第II类错误概率对于备择假设中我们所关心的
情形都能取到足够小的值，这样才能保证在原假设与备择假设之间进行二选一
的决策是合适的。

## 原假设为复合假设时的假设检验*

到目前为止，我们所介绍的假设检验的理论主要关注原假设为简单假设的情形。
当原假设$H_0:\theta\in\Theta_0$为复合假设时，相关的一般性理论
则较为复杂，这里不对其进行介绍，而只对一种常见的特殊情形进行讨论。

原假设复合性的一种常见来源是多余参数（nuisance parameter），此时
总体的未知参数$\theta=(\psi,\lambda)$由两部分$\psi$和$\lambda$
组成，而原假设和备择假设则分别为
\[
H_0: \psi=\psi_0,\qquad H_1:\psi\begin{Bmatrix}
\neq \\[-5pt] > \\[-5pt] <
\end{Bmatrix} \psi_0.
\]
换句话说，我们关心$\psi$的取值是否为$\psi_0$，而$\lambda$则是
一个多余参数。若将$\lambda$的所有可能取值构成的集合记为
$\Theta_\lambda$，则可以将原假设表示为
$H_0:\theta\in\Theta_0 = \{\psi_0\}\times\Theta_\lambda$。
对于此类问题，我们通常会首先考虑找一个合适的检验统计量$T$，使其满足
（或近似满足）如下额外条件：

::: definition (条件) {@condition:hypothesis_testing_H0_identical_distribution_main_text}
$T$在原假设$H_0$下的分布是与$\theta\in\Theta_0$的具体取值无关的。
换句话说，对任意$\theta\in\Theta_0$，$T$均服从同一个分布。
:::

该条件意味着我们可以把复合假设$H_0$当作是一个简单假设去处理，从而
相应的$p$值为

- 单侧检验：$\hat{p}=\mathbb{P}_{H_0}(T\geq t)$；

- 双侧检验：$\hat{p}=2\min\{\mathbb{P}_{H_0}(T\geq t),
  \mathbb{P}_{H_0}(T\leq t)\}$。

其中$t$为检验统计量$T$在代入样本观测值$x_1,\ldots,x_n$后的取值，
$\mathbb{P}_{H_0}(T\geq t)$表示原假设$H_0$下$T\geq t$的概率
（它与$\theta\in\Theta_0$的具体值无关）。而给定显著性水平
$\alpha\in\left]0,1\right[$后，相应的拒绝域$C_\alpha$可由
如下方法得到：

- 单侧检验：$C_\alpha=\left]c_\alpha,+\infty\right[$，其中
  \[
  c_\alpha = \max\left\{c\in\mathbb{R} \mid
  \mathbb{P}_{H_0}(T\geq c)\geq\alpha\right\};
  \]
  而若$T$在原假设下服从连续型分布，且相应的概率密度函数在某个开区间上
  恒大于$0$而在该开区间外恒等于$0$，则临界值可通过求解
  $\mathbb{P}_{H_0}(T> c_\alpha)=\alpha$
  得到。

- 双侧检验：$C_\alpha=\ ]{-\infty},c_\alpha^l[\
  \cup\ ]c_\alpha^u,+\infty[$，其中
  \[
  \begin{aligned}
  c^u_{\alpha} ={} & \max\left\{
  c\in\mathbb{R} \Bigm\vert
  \mathbb{P}_{H_0}(T\geq c)\geq\frac{\alpha}{2}
  \right\}, \\
  c^l_{\alpha} ={} & \min\left\{
  c\in\mathbb{R} \Bigm\vert
  \mathbb{P}_{H_0}(T\leq c)\geq\frac{\alpha}{2}
  \right\}.
  \end{aligned}
  \]
  而若$T$在原假设下服从连续型分布，且相应的概率密度函数在某个开区间上
  恒大于$0$而在该开区间外恒等于$0$，则临界值可通过求解
  $\mathbb{P}_{H_0}
  \!\left(T> c_\alpha^u\right)=
  \mathbb{P}_{H_0}
  \!\left(T< c_\alpha^l\right)
  =\alpha/2$
  得到。

可以证明（见[附录C](/books/概率与数理统计/假设检验的补充证明/)），
对于上述假设检验流程，有如下结论成立：

- $\hat{p}<\alpha$当且仅当$t\in C_\alpha$。

- 显著性水平$\alpha$给出了第I类错误概率的一个上界。

- 若$T$在$H_0$下服从连续型分布，则显著性水平$\alpha$就等于
  第I类错误概率。

在本章的后两节中，我们将针对一些具体的例子，讨论如何构造满足
@condition:hypothesis_testing_H0_identical_distribution_main_text
的检验统计量，并给出相应的$p$值与拒绝域。

[^1]: 对于更一般的情况，可以证明$\mathbb{P}_{\theta_0} (T\in C_\alpha) \leq \alpha$，
    也就是说显著性水平$\alpha$ 给出了第I类错误概率的一个上界；
    参见[附录C.2](/books/概率与数理统计/假设检验的补充证明/显著性水平与第I类错误概率的关系/)。
[^2]: 由于功效函数$w(\mu)$是连续函数，故当第I类错误概率 $w(\mu_0)$小于等于$\alpha$时，
    不可能让所有的$\mu\neq\mu_0$都给出很小的第II类错误概率$1-w(\mu)$，
    因此我们需要以$\delta$ 为阈值将$\mu\neq\mu_0$的情形分为$|\mu-\mu_0|\geq\delta$ 与
    $0<|\mu-\mu_0|<\delta$两类，
    主要关注$|\mu-\mu_0|\geq\delta$ 时的第II类错误概率而容忍$|\mu-\mu_0|<\delta$时的第II类错误。
