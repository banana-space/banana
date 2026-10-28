---
title: 大数定律
---

<problems>
- Chebyshev 弱大数定律的证明中，最后一个显示公式的不等号右侧似乎应为 $\frac{\operatorname{Var}(Y_n)}{\epsilon^2}$；此外 $\mu$ 未加定义，应指 $\mathbb{E}[X_1]$。
- 末尾例子第 3 项中，极限式左侧的分母似乎应为 $\mathrm{Fr}_n(B)$。
</problems>

给定一列随机变量$X_1,X_2,\ldots$，记
\[
\overline{X}_n = \frac{1}{n}\sum_{i=1}^n X_i,
\]
并将其称为样本均值。大数定律所研究的，就是当
$(X_n)_{n=1}^\infty$满足哪些条件时，可以保证
其样本均值$\overline{X}_n$在$n\rightarrow\infty$时
能够收敛于一个确定性的实数；这里的“收敛”可以是几乎必然收敛
或依概率收敛，也可以是概率论中其它有意义的收敛方式。
通常，若在某些条件下，我们证明了$\overline{X}_n$几乎必然
收敛于一个实数，则相应的定理被称为一个**强大数定律**
（strong law of large numbers）；若证明的是$\overline{X}_n$
依概率收敛于一个实数，则相应的定理被称为一个**弱大数定律**
（weak law of large numbers）。

下面我们给出经典的Kolmogorov强大数定律。

::: theorem [Kolmogorov]
设$X_1,X_2,\ldots$为一列独立同分布的随机变量。

1. 若$\mathbb{E}[X_1]$存在，则有
   $\overline{X}_n\xrightarrow{a.s.}\mathbb{E}[X_1]$，
   也就是说，事件
   \[
   \left\{\omega\in\Omega \Biggm\vert
   \lim_{n\rightarrow\infty} \frac{1}{n}\sum_{i=1}^n X_i \
   \text{存在且等于}\ \mathbb{E}[X_1]
   \right\},
   \]
   的概率等于$1$。

2. 反之，若$\overline{X}_n$在$n\rightarrow\infty$时
   几乎必然收敛于某个实数，则$\mathbb{E}[X_1]$必定存在。

:::

Kolmogorov强大数定律的完整证明超出本讲义的范围，这里只对其结论进行介绍，
而在[第5.4节](/books/概率与数理统计/大数定律与中心极限定理/一些定理的证明/)第2小节中
将给出一个较弱版本的强大数定律的证明。

接下来我们介绍一个较为一般的弱大数定律。

::: theorem [Feller]
设$X_1,X_2,\ldots$为一列独立同分布的随机变量。

1. 若
   \[
   \lim_{x\rightarrow+\infty} x\,\mathbb{P}(|X_1|>x)=0
   \quad\text{且}\quad
   \mu=\lim_{n\rightarrow\infty}\mathbb{E}\!\left[X_1\mathsf{1}_{\{|X_1|\leq n\}}\right]\ \text{存在},
   \]
   则$\overline{X}_n\xrightarrow{P}\mu$，也就是说，
   给定任意$\epsilon>0$，均有
   \[
   \lim_{n\rightarrow\infty}
   \mathbb{P}\!\left(\left|\frac{1}{n}\sum_{i=1}^n X_i-\mu\right|>\epsilon\right) = 0.
   \]
   特别是，若$\mathbb{E}[X_1]$存在，则
   $\overline{X}_n\xrightarrow{P}\mu=\mathbb{E}[X_1]$。

2. 反之，若存在某个实数$\mu$使得
   $\overline{X}_n\xrightarrow{P}\mu$，则
   \[
   \lim_{x\rightarrow+\infty} x\,\mathbb{P}(|X_1|>x)=0
   \quad\text{且}\quad
   \lim_{n\rightarrow\infty}\mathbb{E}\!\left[X_1\mathsf{1}_{\{|X_1|\leq n\}}\right]\ \text{存在}.
   \]

:::

Feller弱大数定律的证明同样超出了本讲义的范围。
这里我们给出如下Chebyshev弱大数定律的证明：

::: theorem [Chebyshev]
设$X_1,X_2,\ldots$为一列独立同分布的随机变量，
且$\operatorname{Var}(X_1)$存在。则
$\overline{X}_n\xrightarrow{P}\mathbb{E}[X_1]$。
:::

为了证明Chebyshev弱大数定律，我们先做一些准备。

::: lemma
1. Markov不等式：设随机变量$X$非负，且$\mathbb{E}[X]$存在，
   则对任意$t>0$，有
   \[
   \mathbb{P}(X\geq t) \leq \frac{\mathbb{E}[X]}{t}.
   \]

2. Chebyshev不等式：设随机变量$X$的方差$\operatorname{Var}(X)$存在，
   则对任意$t>0$，有
   \[
   \mathbb{P}\!\left(|X-\mathbb{E}[X]|\geq t\right)
   \leq \frac{\operatorname{Var}(X)}{t^2}.
   \]

:::

::: proof
1. 注意到待证不等式等价于
   $t\cdot\mathbb{P}(X\geq t)\leq \mathbb{E}[X],\,\forall t>0$，而
   \[
   t\cdot\mathbb{P}(X\geq t) = t\cdot\mathbb{E}\!\left[\mathsf{1}_{\{X\geq t\}}\right] = \mathbb{E}\!\left[t\cdot \mathsf{1}_{\{X\geq t\}}\right].
   \]
   因此$t\cdot\mathbb{P}(X\geq t)\leq \mathbb{E}[X]$
   的一个充分条件是$t\cdot\mathsf{1}_{\{X\geq t\}}\leq X$。
   现任取$\omega\in\Omega$，则
   \[
   X(\omega) - t\cdot\mathsf{1}_{\{X\geq t\}}(\omega)
   =\begin{cases}
   X(\omega) - t, & X(\omega)\geq t, \\
   X(\omega), & X(\omega)<t
   \end{cases}
   \]
   上式右端始终非负，故$t\cdot\mathsf{1}_{\{X\geq t\}}\leq X$，
   从而待证不等式成立。

2. 令$Y = (X-\mathbb{E}[X])^2$，则有
   \[
   \mathbb{P}\!\left(|X-\mathbb{E}[X]|\geq t\right)
   =\mathbb{P}(Y\geq t^2)
   \leq \frac{\mathbb{E}[Y]}{t^2} = \frac{\operatorname{Var}(X)}{t^2},
   \]
   其中的不等号利用了Markov不等式。

:::

在得到Chebyshev不等式之后，Chebyshev弱大数定律的证明就变得比较直接了。

::: proof [Chebyshev弱大数定律的证明]
记$\sigma^2 = \operatorname{Var}(X_1)$，并令
$Y_n=\frac{1}{n}\sum_{i=1}^n X_i$，则有
\[
\mathbb{E}[Y_n]=\frac{1}{n}\sum_{i=1}^n \mathbb{E}[X_i]
=\frac{1}{n}\sum_{i=1}^n \mu =\mu,
\]
且由$X_1,X_2,\ldots$的独立性，有
\[
\operatorname{Var}(Y_n)
=\frac{1}{n^2}\operatorname{Var}\left(\sum_{i=1}^n X_i\right)
=\frac{1}{n^2}\sum_{i=1}^n \operatorname{Var}(X_i)
=\frac{1}{n^2}\sum_{i=1}^n \sigma^2 = \frac{\sigma^2}{n}.
\]
则由Chebyshev不等式，可得
\[
\mathbb{P}\!\left(
\left|\frac{1}{n}\sum_{i=1}^n X_i-\mu\right|\geq\epsilon
\right)
=\mathbb{P}(|Y_n-\mu|\geq\epsilon)
\leq\frac{\mathbb{E}[Y_n]}{\epsilon^2}
=\frac{\sigma^2}{n\epsilon^2}.
\]
令上式中$n\rightarrow\infty$，即得到待证结论。
:::

以Kolmogorov强大数定律为代表的各种大数定律是现代概率论的重要成果，
为概率的频率诠释（即概率代表频率在试验次数趋于无穷时的极限）提供了重要依据。
例如，考虑最简单的独立重复掷骰子试验，我们用随机变量$X_n$代表
第$n$次投掷的点数，则

1. $\overline{X}_n=\frac{1}{n}\sum_{i=1}^n X_i$
   为前$n$次试验投出的点数的平均值。由于$X_1,X_2,\ldots$独立同分布
   且期望存在，由Kolmogorov强大数定律可得
   \[
   \lim_{n\rightarrow\infty}\overline{X}_n = \mathbb{E}[X_1] = \frac{1+2+\cdots+6}{6}=\frac{7}{2}
   \]
   以概率$1$（也就是几乎必然）成立。

2. 对任意$\{1,2,\ldots,6\}$的子集$A$，令
   \[
   \mathrm{Fr}_n(A)=\frac{1}{n}\sum_{i=1}^n \mathsf{1}_{\{X_i\in A\}},
   \]
   即$\mathrm{Fr}_n(A)$为$n$次投掷后点数属于集合$A$的频率。
   由于$\mathsf{1}_{\{X_1\in A\}},\mathsf{1}_{\{X_2\in A\}},\ldots$
   独立同分布且期望存在，由Kolmogorov强大数定律可得
   \[
   \lim_{n\rightarrow\infty} \mathrm{Fr}_n(A) = \mathbb{E}[\mathsf{1}_{\{X_1\in A\}}] = \mathbb{P}(X_1\in A).
   \]
   以概率$1$成立。换句话说，频率$\mathrm{Fr}_n(A)$几乎必然收敛于
   概率$\mathbb{P}(X_1\in A)$。

3. 现固定一$\{1,2,\ldots,6\}$的非空子集$B$，再任取
   $\{1,2,\ldots,6\}$的非空子集$A$，我们把$n$次投掷中
   点数属于$B$的那几次挑出来，并计算其中点数同时属于$A$的次数的占比
   （暂时将其称作“条件频率”）：
   \[
   \frac{\sum_{i=1}^n\mathsf{1}_{\{X_i\in A\cap B\}}}{\sum_{i=1}^n \mathsf{1}_{\{X_i\in B\}}}=\frac{\mathrm{Fr}_n(A\cap B)}{\mathrm{Fr}_n(B)},
   \]
   而由Kolmogorov强大数定律可得
   \[
   \lim_{n\rightarrow\infty}\frac{\mathrm{Fr}_n(A\cap B)}{\mathrm{Fr}_n(A)}
   =\frac{\mathbb{P}(X_1\in A\cap B)}{\mathbb{P}(X_1\in B)} = \mathbb{P}\!\left(X_1\in A \mkern2mu|\mkern2mu X_1\in B\right)
   \]
   以概率$1$成立，这意味着条件频率也几乎必然收敛于条件概率。

此外，大数定律也为数理统计中众多点估计方法（例如矩方法）等提供了
基本的理论依据。
