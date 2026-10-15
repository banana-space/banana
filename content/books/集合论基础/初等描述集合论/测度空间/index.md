---
title: 测度空间
notices:
  - name: 问题
    items:
      - “测度的构造”一节中，从“测度代数是完备布尔代数”起的各定理都没有证明。
      - “测度同构定理”一节需要扩充。
---

测度与几何上直观的大小，例如长度、面积、体积等有关。它是可测空间结构的自然延伸。

::: definition [测度空间]
给定可测空间$(X,\mathcal{S})$，我们定义其上的测度为$\mu:\mathcal{S}\to\mathbb{R}\cup\{+\infty\}$，
满足：

1. $\forall S\in\mathcal{S}(\mu(S)\geq 0\vee \mu(S)=+\infty)$

2. $\mu(\varnothing)=0$

3. $\forall \{S_n|n\in\omega\}\subseteq\mathcal{S}((i\not=j\rightarrow S_i\cap S_j=\varnothing)\rightarrow \mu(\bigcup_{n\in\omega}S_n)=\sum_{n\in\omega}\mu(S_n))$

可测空间连同其上的一个测度构成一个测度空间。
:::

## 测度的构造

我们先来看一般测度的结构与构造。

::: definition [完备化]
对测度空间$(X,\mathcal{S},\mu)$，
我们定义$\sigma$理想
$\mathrm{NULL}_{\mu}=\{N\subseteq X|\exists S\supseteq N(S\in\mathcal{S}\wedge\mu(S)=0)\}$，
再定义$\sigma$代数$\mathrm{MEAS}_{\mu}=\{S\cup N|S\in\mathcal{S},N\in\mathrm{NULL}_{\mu}\}$。
我们有$\mathrm{MEAS}_{\mu}$上的测度$\bar{\mu}$，满足$\bar{\mu}(S\cup N)=\mu(S)$，
这个测度称作$\mu$的完备化。
:::

这个名字自然意味着以下定理。

::: theorem
完备化等于其自身的测度称作完备测度。完备化后的测度均为完备测度。
:::

::: proof
随便验证一下。
:::

我们有另一个手段给出完备化，这需要定义所谓的外测度。

::: definition [外测度]
一个$\mu^*:\wp \to\mathbb{R}\cup\{+\infty\}$称作外测度，若满足以下条件：

1. $\mu^*(\varnothing)=0$

2. $A\subseteq B\to\mu^*(A)\leq\mu^*(B)$

3. $\{A_n|n\in\omega\}\subseteq\wp (X)\to\mu^*(\bigcup_{n}A_n)\leq\sum_{n}\mu^*(A_n)$

:::

::: theorem
测度空间$(X,\mathcal{S},\mu)$恰给出一个外测度$\mu^*$，
其定义为$\mu^*(A)=\mathrm{inf}_{S\in\mathcal{S},A\subseteq S}\mu(S)$。

给定外测度$\mu^*$，
它给出一个$\sigma$理想$\mathrm{NULL}_{\mu^*}=\{N\subseteq X|\mu^*(N)=0\}$和一个$\sigma$代数
$\mathrm{MEAS}_{\mu^*}=\{M\subseteq X|\forall E\subseteq X(\mu^*(E)=\mu^*(E\cap M)+\mu^*(E\backslash M))\}$，
$\mu^*$限制到$\mathrm{MEAS}_{\mu^*}$上形成一个完备测度空间。

特别的，测度$\mu$得到的外测度$\mu^*$生成的测度恰好是其完备化$\bar{\mu}$。
:::

::: proof
随便验证一下。
:::

测度可以通过可测函数自然地在可测空间之间转移。

::: definition
给定测度空间$(X,\mathcal{S},\mu)$到可测空间$(Y,\mathcal{A})$的可测函数$f:X\to Y$，
则$(Y,\mathcal{A},f\mu)$亦为测度空间，这里$f\mu(B)=\mu(f^{-1}(B))$。这整个空间称作像测度空间。
:::

一般的测度不能乱乘，因为很容易把所有集的测度都乘成无穷。我们得先限制一下空间的测度。

::: definition
给定测度空间$(X,\mathcal{S},\mu)$。

1. 若存在一列$S_n\in\mathcal{S}$，满足$\forall n(\mu(S_n)<+\infty)$且$X=\bigcup_n S_n$，
   则称这测度空间是$\sigma$有限的。

2. 若$\mu(X)<+\infty$，则称这测度空间是有限的。

3. 若$\mu(X)=1$，则称这测度空间是概率测度空间。

:::

显然，有限测度空间和概率测度空间只差着一个常数。我们现在来做测度空间的乘法。

::: definition
若有有限个$\sigma$有限测度空间$(X_i,\mathcal{S}_i,\mu_i)$，
则可在积可测空间$(X,\mathcal{S})=(\prod_i X_i,\prod_i\mathcal{S}_i)$上定义唯一一个测度
$\mu=\prod_i\mu_i$，满足任意指定一组$A_i\in\mathcal{S}_i$均有$\mu(\prod_i A_i)=\prod_i\mu_i(A_i)$。
此时，这个积测度空间恰好也是$\sigma$有限的。
:::

::: definition
若有可列个概率测度空间$(X_i,\mathcal{S}_i,\mu_i)$，指标$i\in\omega$，
则可在积可测空间$(X,\mathcal{S})$上定义唯一一个测度$\mu$，
仍然满足对有限集$I\subseteq\omega$有$\mu(\prod_{i\in I}A_i)=\prod_{i\in I}\mu_i(A_i)$，
这里这些$A_i$均是$\mathcal{S}_i$中的集，
这个有限积就是将略去的无穷个分量均默认为$X_j$或$\mu_j(X_j)=1$。
:::

接下来我们类比纲代数，介绍一个测度空间结构给出的$\sigma$布尔代数。

::: definition
给定$\mu$，我们记$\mathrm{MALG}_\mu=\mathrm{MEAS}_\mu/\mathrm{NULL}_\mu$为测度代数。
:::

::: theorem
测度代数是完备布尔代数。
:::

测度代数自然给出一种测度等价的定义。

::: theorem
给定可测空间$(X,\mathcal{S})$上的两个测度$\mu,\nu$，以下条件等价：

1. $\mathrm{NULL}_{\mu}=\mathrm{NULL}_{\nu}$

2. $\mathrm{MEAS}_{\mu}=\mathrm{MEAS}_{\nu}$

3. $\mathrm{MALG}_{\mu}=\mathrm{MALG}_{\nu}$

此时，我们称这两个测度等价，记为$\mu\sim\nu$。
:::

::: remark*
一般我们把$\mathrm{NULL}_{\mu}\subseteq\mathrm{NULL}_{\nu}$记为$\nu\ll\mu$，
读作$\nu$相对于$\mu$绝对连续。
:::

::: theorem
$\sigma$有限测度等价于一个概率测度。
:::

::: remark*
因此，三种有限性之间都是等价的。
:::

同时，测度也可以做分解，变成连续部分与离散部分。

::: definition
如果$\forall x\in X(\mu(\{x\})=0)$，则称$\mu$是连续测度；
如果$\exists A\subseteq X(|A|=\aleph_0\wedge\mu(X\backslash A)=0)$，则称$\mu$是离散测度。
:::

我们来考察比较简单的离散测度的结构。

::: definition
对可测空间$(X,\mathcal{S})$中的一个点$x\in X$，它给出一个测度$\delta_x$，称作在此点处的Dirac测度。
定义为$\delta_x(S)=\chi_S(x)$。
:::

::: theorem
离散测度$\mu$若有可列集$A=\{a_n|n\in\omega\}$满足所述条件，
则$\mu=\sum_{n\in\omega}\mu(\{a_n\})\delta_{a_n}$。
:::

::: theorem
如果$\mu$是$\sigma$有限测度，则存在连续测度$\mu_c$和离散测度$\mu_d$，满足$\mu=\mu_c+\mu_d$。
:::

我们现在在$\mathbb{R}$上面造出一个$\sigma$有限测度，它被称作Lebesgue测度。

::: definition [Lebesgue测度]
我们定义$\mathbb{R}$上的Lebesgue外测度为$\mathrm{m}^*(A)=\mathrm{inf}\sum_{n\in\omega}(b_n-a_n)$，
这里$\bigcup_{n}(a_n,b_n)\supseteq A$取遍$A$的可列开区间构成的开覆盖。

这个外测度形成的完备测度称作$\mathbb{R}$上的Lebesgue测度，记作$\mathrm{m}$。
乘积空间$\mathbb{R}^n$上的对应积测度也一并称作Lebesgue测度。
:::

我们来证明它的两个重要性质。

::: definition [Borel测度]
称测度$\mu$是一个Borel测度，若它定义在一个标准Borel空间上，且让每个开集（从而每个Borel集）都可测。

称Borel测度$\mu$是正则的，
若
$A\in\mathrm{MEAS}_\mu\to\mu(A)=\mathrm{sup}_{F\subseteq A}\mu(F)=\mathrm{inf}_{U\supseteq A}\mu(U)$，
这里$F$是闭集，$U$是开集。

称Borel测度$\mu$是紧绷的，若$A\in\mathrm{MEAS}_\mu\to\mu(A)=\mathrm{sup}_{K\subseteq A}\mu(K)$，
这里$K$是紧集。
:::

::: theorem
Lebesgue测度是正则且紧绷的。
:::

它还有一些特别的性质。

::: theorem
固定$\mathbb{R}$上的Lebesgue可测集$X$，则：

1. $\forall a,b\in\mathbb{R}(\mathrm{m}(aX+b)=|a|\mathrm{m}(X))$

2. $\{x\in\mathbb{R}|\lim_{x\in(a,b),b-a\to 0}\frac{\mathrm{m}(A\cap(a,b))}{b-a}=1\}$与$A$
   相差一个零测集。

:::

## 测度同构定理

我们现在对连续的Borel测度证明一个神奇的定理，它指出这基本就是Lebesgue测度。
