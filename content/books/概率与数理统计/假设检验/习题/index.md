---
title: 习题选编
---
::: exercise
设总体服从正态分布$\mathcal{N}(\mu,\sigma^2)$，其中$\sigma^2$已知
而$\mu$未知。考虑如下假设检验问题：
\[
    H_0:\mu=\mu_0,\qquad H_1:\mu<\mu_0,
\]
其中$\mu_0$为一给定的实数。令
$Z=\frac{\overline{X}-\mu_0}{\sigma/\sqrt{n}}$为单侧检验统计量，
$\alpha$为显著性水平（注意此时拒绝域的形式为$z<-z_{\alpha}$）。

1. 试求功效函数$w(\mu)$。

2. 若希望$\mu\leq\mu_0-\delta$时的第II类错误概率小于等于
   $\beta$，其中$\delta>0$与$\beta\in\left]0,1\right[$给定，
   试求样本容量$n$应当满足的条件。

:::

::: exercise {@exercise:t_test_F_test_equiv}
1. 证明：若$X\sim t(n)$，则$X^2\sim F(1,n)$。

2. 设总体服从正态分布$\mathcal{N}(\mu,\sigma^2)$，其中
   期望$\mu$与方差$\sigma^2$均未知。考虑如下假设检验问题：
   \[
       H_0: \mu=\mu_0,\qquad H_1:\mu\neq \mu_0.
   \]
   试设计一个服从$F$分布的检验统计量，用于对上述假设检验问题进行单侧检验，并给出显著性水平为$\alpha$时的拒绝域。

:::

::: exercise
设随机变量$X$服从参数为$(n,p)$的二项分布，其中$n=19$已知而$p$未知。
我们对$X$进行了一次观测，得到一个观测值$8$，试对
\[
    H_0: p=1/3,\qquad H_1:p\neq 1/3
\]
进行假设检验。
:::

::: exercise
设两个总体分别服从正态分布$\mathcal{N}(\mu_1,\sigma_1^2)$
与$\mathcal{N}(\mu_2,\sigma_2^2)$，其中$\sigma_1^2$
与$\sigma_2^2$已知。考虑如下假设检验问题：
\[
    H_0: \mu_1-\mu_2=\Delta_0,\qquad H_1:\mu_1-\mu_2\neq\Delta_0.
\]
设两个总体的样本分别为$X_{1,1},\ldots,X_{1,n_1}$与
$X_{2,1},\ldots,X_{2,n_2}$，取检验统计量为
\[
    Z=\frac{\overline{X}_1-\overline{X}_2-\Delta_0}{\sqrt{\sigma_1^2/n_1+\sigma_2^2/n_2}}.
\]

1. 试求功效函数$w(\mu_1,\mu_2)$。

2. 若希望$|\mu_1-\mu_2-\Delta_0|>\delta$时的第II类错误概率
   小于等于$\beta$，其中$\delta>0$与$\beta\in\left]0,1\right[$给定，
   并假定$n_1=n_2$，试求两个样本的样本容量应当满足的条件。

:::

::: exercise
一研究机构开发了一种新的用于训练深度神经网络的专用芯片，并希望它在
某个测试样例上的训练时间较另一种商用芯片至少缩短一半，故考虑如下形式的
假设检验问题：
\[
    H_0:\mu_1=2\mu_2,\qquad H_1:\mu_1>2\mu_2,
\]
其中$\mu_1$表示商用芯片在测试样例上训练时间的期望，而$\mu_2$表示
新芯片在测试样例上训练时间的期望。设两个总体均服从正态分布，
且各自的方差$\sigma_1^2$与$\sigma_2^2$均已知。若用
$X_{1,1},\ldots,X_{1,n_1}$表示商用芯片测试$n_1$次的试验结果，
$X_{2,1},\ldots,X_{2,n_2}$表示新芯片测试$n_2$次的试验结果，
试推导上述假设检验问题的$p$值与拒绝域表达式。
:::

::: exercise
Benford定律称，在一个由真实世界的某类数据构成的大数据集中，
以$n$为首位数字的数出现的概率约为
\[
    p_0(n) = \log_{10}\!\left(1+\frac{1}{n}\right),\qquad n=1,2,\ldots,9.
\]
下表给出了某份数据集中以$n$为首位数字的数出现的频数：

\begin{tabular}{cccccccccc}
!首位数字 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 \\
!频数 & 342 & 180 & 164 & 155 & 86 & 65 & 54 & 47 & 56
\end{tabular}

试检验该数据集是否服从Benford定律。

注：本题数据取自[@kirkwood2013application]。
:::

::: exercise {@exercise:CI_testing_correspondence}
设总体$X$的分布函数为$F(x;\theta)$，其中$\theta\in\Theta$
为未知参数，$\Theta\subseteq\mathbb{R}$为所有$\theta$的可能取值
构成的集合。$X_1,\ldots,X_n$为总体$X$的一组样本，
$\underline{\theta}=\underline{\theta}(X_1,\ldots,X_n)$
与$\overline{\theta}=\overline{\theta}(X_1,\ldots,X_n)$
为两个统计量，且对任意的$\theta\in\Theta$，$\underline{\theta}$
与$\overline{\theta}$均服从连续型分布。

1. 若$\left[\mkern2mu\underline{\theta},
\overline{\theta}\mkern2mu\right]$给出了参数$\theta$的一个
   置信水平为$1-\alpha$的置信区间，证明：任取$\theta_0\in\Theta$，
   假设检验问题
   $
H_0:\theta=\theta_0,\  H_1:\theta\neq\theta_0
$
   的一个显著性水平不超过$\alpha$的拒绝域可由
   \[
       \theta_0<\underline{\theta}(x_1,\ldots,x_n)\ \
       \text{或}\ \ \theta_0>\overline{\theta}(x_1,\ldots,x_n)
   \]
   给出。

2. 反之，若对任意$\theta_0\in\Theta$，不等式
   \[
       \theta_0<\underline{\theta}(x_1,\ldots,x_n)\ \
       \text{或}\ \ \theta_0>\overline{\theta}(x_1,\ldots,x_n)
   \]
   总能给出假设检验问题$
H_0:\theta=\theta_0,\  H_1:\theta\neq\theta_0
$
   的一个显著性水平为$\alpha$的拒绝域，证明：
   $\left[\mkern2mu\underline{\theta},
\overline{\theta}\mkern2mu\right]$给出了$\theta$的一个
   置信水平为$1-\alpha$的置信区间。

:::

::: exercise [$p$-hacking]
设A在一项研究工作中需要验证课题组提出的新方法是否起效，
故设计了实验流程并考虑用配对$t$检验方法对
\[
    H_0:\ \text{新方法无效},\qquad H_1:\ \text{新方法有效}
\]
进行检验，但一次实验之后发现得到的$p$值大于$0.05$。由于领域内顶刊
只发表$p$值小于$0.05$的实验结果，迫于压力，A决定采取如下策略：
不断重复该实验，直到某次实验给出的$p$值小于$0.05$或是实验次数达到$M$，
若最终得到的$p$值小于$0.05$则将该次实验数据保留并整理成论文投稿，
而若$M$次实验的$p$值均大于等于$0.05$，则将这几次实验中最小的$p$值
在课题组组会上进行汇报并讨论新方法的改进。设各次实验相互独立，
每次计算$p$值时均只采用当次实验的数据。

1. 考虑单次实验，用$\hat{P}$表示其$p$值并将其看成一个随机变量
   （其随机性来自于样本的随机性）。则在原假设$H_0$下，$\hat{P}$服从
   怎样的分布？

2. 用随机变量$\hat{P}_M$表示A按照上述策略最终获得的$p$值。
   若原假设$H_0$成立（也就是说新方法是无效的），则$\hat{P}_M$服从怎样的
   分布？A按照上述策略最终能够获得$\hat{P}_M<0.05$的实验结果的概率是多少？

3. A最终获得了$\hat{P}_M<0.05$的实验结果并将成果发表在了领域内
   顶刊上，但遭到了同行质疑，经过调查后A承认了上述$p$-hacking的行为。
   某同行B希望基于A公开发表的实验数据算出一个合理的$p$值，故考虑用一个
   因子$c>1$与$\hat{P}_M$相乘来进行修正。试求出一个$c$值使得
   \[
       \mathbb{P}_{H_0}(c\hat{P}_M< \alpha)\leq\alpha,\qquad\forall \alpha\in\left]0,1\right[
   \]
   成立。

:::
