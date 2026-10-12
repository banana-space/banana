---
title: 测度与测度空间，Carathéodory 扩张定理
---

::: convention
在本文中，

- 我们用 $[0,\infty]$ 表示包含正无穷的非负实数的全体。

:::

## 测度

我们要在一个可测空间 $(X,\mathcal{A})$ 上定义所谓的测度，也就是说，
我们来测量 $\mathcal{A}$ 中的每个集合（称为可测集）的面积／体积。

::: definition {@definition-measure}
假设 $\mathcal{A}$ 为 $X$ 上的代数，如果映射 $\mu\colon\mathcal{A}\rightarrow [0,\infty]$ 满足

- 1\) $\mu(\emptyset)=0$；

- 2\) 对于 $\mathcal{A}$ 中不交的两个元素 $A_1$ 和 $A_2$，
  我们有 $\mu(A_1\cup A_2) = \mu(A_1)+\mu(A_2)$，

那么称 $\mu$ 为代数 $\mathcal{A}$ 上的一个**加性函数**。

如果 $\mathcal{A}$ 为 $X$ 上的 $\sigma$-代数，
且映射 $\mu\colon\mathcal{A}\rightarrow [0,\infty]$ 满足

- 1\) $\mu(\emptyset)=0$；

- 2\) 对于 $\mathcal{A}$ 中不交的可数个元素 $A_i$，我们有
  \[
  \mu(\bigcup_{i=1}^\infty A_i) = \sum_{i=1}^\infty \mu(A_i)，
  \]

那么称 $\mu$ 为 $\sigma$-代数 $\mathcal{A}$ 上的一个（非负）**测度**。

一个可测空间 $(X,\mathcal{A})$ 如果配备了一个测度 $\mu$，
我们则称三元组 $(X,\mathcal{A},\mu)$ 为一个**测度空间**。
:::

我们给出下面几个例子：

::: example*
- 1\) $X$ 是可数集，$\mathcal{A}=\mathcal{P}(X)$，对于任意的 $A\subset X$，我们定义 $\mu(A)=|A|$，
  即 $A$ 的元素个数（可以是 $\infty$）。当 $A,B\subset X$ 并且 $A\cap B=\emptyset$ 时，我们自然有
  \[
  \mu(A\cup B)=|A\cup B|=|A|+|B|=\mu(A)+\mu(B).
  \]
  所以，$(X,\mathcal{P}(X),|\cdot|)$ 是测度空间。

- 2\)（Dirac测度）$(X,\mathcal{A})$ 是任意的可测空间，选定点 $x_0\in X$。
  对任意的 $A\in \mathcal{A}$，我们定义：
  \[
  \delta_{x_0}(A)=\begin{cases}1, \ \  x_0\in A;\\
  0, \ \ x_0\notin A.\end{cases}
  \]
  当 $A,B\in \mathcal{A}$ 并且 $A\cap B=\emptyset$ 时，如果 $x_0\in A\cup B$，不妨假设 $x_0\in A$，
  那么
  \[
  \delta_{x_0}(A\cup B)=1=1+0=\delta_{x_0}(A)+\delta_{x_0}(B).
  \]
  如果 $x_0\notin A\cup B$，那么
  \[
  \delta_{x_0}(A\cup B)=0=0+0=\delta_{x_0}(A)+\delta_{x_0}(B).
  \]
  这定义了一个测度，我们称它为**Dirac测度**。

  另外，给出 $X$ 中的可数个点 $\{x_k\}_{k\geqslant 1}$，给出正数的序列 $\{a_k\}_{k\geqslant 1}$，
  对任意的 $A\in \mathcal{A}$，我们定义
  \[
  \left(\sum_{k=1}^\infty a_k \delta_{x_k}\right)(A)=\sum_{k=1}^\infty a_k \delta_{x_k}(A).
  \]
  我们将在作业中证明这是一个测度。

- 3\) 在 $\mathbb{R}$ 上，
  我们考虑所有的由有限个两两不交的区间的并所构成的代数 $\widetilde{\mathcal{R}}$。
  对于任意个的区间（无所谓开闭），我们令 $\mu([a,b])=|b-a|$，
  我们将证明这可以定义出 $\widetilde{\mathcal{R}}$ 上的加性函数。
  从这个加性函数出发，我们将定义Lebesgue测度。

:::

::: definition
给定测度空间 $(X,\mathcal{A},\mu)$，如果 $\mu(X)<\infty$，
我们就称 $\mu$ 是**有限测度**或者是**有限的**。
如果存在单调上升的序列 $\{A_i\}_{i\geqslant 1} \in \mathcal{A}$，
使得 $\displaystyle \lim_{i\rightarrow \infty} A_i = X$ 且对任意的 $i\geqslant 1$，
$\mu(A_i)<\infty$，我们就说 $\mu$ 是 **$\sigma$-有限的**。
:::

很明显，上面给出的例子中，1)中如果 $X$ 是有限集，那么该测度是有限的，否则就是 $\sigma$-有限的；
2)中的Dirac测度是有限测度；3)中我们还没有定义测度，
但是我们将看到这会给出一个 $\sigma$-有限的测度并且这个测度是无限的。

对于一个测度空间 $(X,\mathcal{A},\mu)$，我们有如下关于测度的基本不等式与等式：

::: proposition [熟记]
$(X,\mathcal{A},\mu)$ 是测度空间，$\{A_i\}_{i\geqslant 1}$ 是给 $\mathcal{A}$ 中的序列，关于测度，
我们有如下基本的性质：

- 1\) 如果 $A_1\subset A_2$，那么 $\mu(A_1) \leqslant \mu(A_2)$。

- 2\) 我们有如下的不等式：
  \[
  \mu(\bigcup_{i\geqslant 1} A_i)\leqslant \sum_{i=1}^\infty \mu(A_i).
  \]

- 3\) 如果序列 $\{A_i\}_{i\geqslant 1}$ 是上升的，那么
  \[
  \mu(\lim_{i\rightarrow \infty} A_i) = \lim_{i\rightarrow \infty} \mu(A_i).
  \]

- 4\) 如果序列 $\{A_i\}_{i\geqslant 1}$ 是下降的，并且对某个 $i_0$ 有 $\mu(A_{i_0})<\infty$，那么
  \[
  \mu(\lim_{i\rightarrow \infty} A_i) = \lim_{i\rightarrow \infty} \mu(A_i).
  \]

:::

::: proof
我们逐一的证明它们：

- 1\) 如果 $A_1\subset A_2$，$A_2=A_1\cup (A_2-A_1)$，其中，$A_1$ 与 $A_2-A_1$ 是不相交的，所以
  \[
  \mu(A_2)=\mu(A_1)+\mu(A_2-A_1)\geqslant \mu(A_1).
  \]

- 3\) 序列 $\{A_i\}_{i\geqslant 1}$ 是上升的，我们定义 $A_0=\emptyset$，$B_n=A_n-A_{n-1}$，
  其中 $n\geqslant 1$。很明显，$\{B_n\}_{n\geqslant 1}$ 两两不相交，所以
  \[
  \mu(\bigcup_{n\geqslant 1} B_n) = \sum_{n=1}^\infty \mu(B_n).
  \]
  另外，
  $\displaystyle \lim_{i\rightarrow \infty} A_i=\bigcup_{i\geqslant 1} A_i=\bigcup_{n\geqslant 1} B_n$，
  上面的等式就给出了要证明的等式。

- 2\) 对于任意两个 $A,B\in \mathcal{A}$，我们有
  \[
  \mu(A\cup B)=\mu(A\cup B- A)+\mu(A).
  \]
  由于 $A\cup B-A\subset B$，所以
  \[
  \mu(A\cup B) \leqslant \mu(B)+\mu(A).
  \]
  通过归纳法，我们就得到
  \[
  \mu(\bigcup_{i\leqslant n } A_i)\leqslant \sum_{i=1}^n \mu(A_i).
  \]
  从而，对任意的 $n$，我们都有
  \[
  \mu(\bigcup_{i\leqslant n } A_i)\leqslant \sum_{i=1}^\infty \mu(A_i).
  \]
  现在我们利用3)的结论对 $n$ 取极限即可。

我们把4)的证明留成作业，请注意，如果去掉某个 $A_{i_0}$ 的测度是有限的条件，命题是不成立的。
:::

## Carathéodory扩张定理

一般而言，在一个“相对有限”的代数上构造测度要比在“相对无限”的 $\sigma$-代数上构造测度简单地多。
比如说，在 $\mathbb{R}^n$ 上，
我们知道Borel代数 $\mathcal{B}(\mathbb{R}^n)$ 可以由 $\widetilde{\mathcal{R}}$ 生成，其中，
每个 $\widetilde{\mathcal{R}}$ 中的元素都是有限个形如
$(a_1,b_1)\times (a_2,b_2)\times \cdots \times (a_n,b_n)$ 的不相交矩形的并。不难验证，如果我们令
\[
\mu\big((a_1,b_1)\times (a_2,b_2)\times \cdots \times (a_n,b_n)\big)=(b_1-a_1)(b_2-a_2)\cdot \cdots\cdot(b_n-a_n),
\]
这给出了 $\widetilde{\mathcal{R}}$ 的一个加性函数（$\widetilde{\mathcal{R}}$ 是一个代数）。
然而，我们很想在 $\mathcal{B}(\mathbb{R}^n)$ 上定义测度，
并且这个测度在 $\widetilde{\mathcal{R}}$ 与上面给的加性函数是一致的。
这个就很困难，因为 $\mathcal{B}(\mathbb{R}^n)$ 的元素太多。
我们下面给出一个抽象的定理以保证我们可以从代数上的加性函数（相对容易构造）来构造它所生成的
$\sigma$-代数上的测度，这就是Carathéodory测度扩张定理。

我们指出，尽管定理证明的本身非常值得研究（尤其是对于二年级大家学习实分析），
但是在我们多元微积分这一部分完全可以略去而花更多的精力搞清楚定理的叙述和应用。

::: theorem [Carathéodory]
假定 $\mathcal{A}$ 为 $X$ 上的代数，
$\mu$ 为 $\mathcal{A}$ 上 $\sigma$-有限加性函数（即存在单调上升的序列
$\{X_i\}_{i\geqslant 0}\subset\mathcal{A}$，
使得 $\displaystyle \bigcup_{i\rightarrow \infty} X_i=X$ 并且对每个 $i\geqslant 1$，
都有 $\mu(X_i)<\infty$），
那么至多存在一个 $\sigma(\mathcal{A})$ 上的测度 $\mu'$ 使得 $\mu'\big|_\mathcal{A}=\mu$，
即对任意的 $A\in \mathcal{A}$，$\mu'(A)=\mu(A)$。

如果 $\mu$ 是有限加性函数，即 $\mu(X)<\infty$，那么下述条件保证了延拓测度 $\mu'$ 的存在性：

**条件(C)。** 对任意单调下降的序列 $\{A_i\}_{i\geqslant 0}\subset\mathcal{A}$，
如果 $\mu(A_0)<\infty$ 并且 $\displaystyle\lim_{i\rightarrow \infty} A_i =\emptyset$，
那么 $\displaystyle\lim_{i\rightarrow \infty} \mu(A_i)\rightarrow 0$。

如果 $\mu(X)=+\infty$，还需要再加上如下条件：

**条件（${\mathbf C}_\infty$）。** 存在单调上升的序列 $\{X_i\}_{i\geqslant 1}\subset\mathcal{A}$，
$\displaystyle\lim_{i\rightarrow \infty} X_i=X$ 并对任意的 $i\geqslant 1$ 都有 $\mu(X_i)<\infty$，
满足对任意的 $A\in \mathcal{A}$，$\mu(A)=+\infty$，
我们都有 $\displaystyle\lim_{i\rightarrow \infty} \mu(A \cap X_i)=+\infty$。
:::

我们先证明扩张的唯一性部分，这是单调类的一个好的应用示范：

假定 $\mu_1$ 和 $\mu_2$ 都是 $\mu$ 在 $\sigma(\mathcal{A})$ 上的延拓。我们定义如下的集合：
\[
\mathcal{M}\coloneqq\big\{M \in \sigma(\mathcal{A})\big| \text{任意}A\in \mathcal{A}, \mu(A)<\infty, ~\text{均有}~\mu_{1}(A\cap M)=\mu_{2}(A\cap M)\big\}.
\]
我们显然有 $\mathcal{A}\subset \mathcal{M}$。
我们可以很容易地验证 $\mathcal{M}$ 为单调类：
假设 $\{M_j\}_{j\geqslant 0}\subset\mathcal{M}$ 是单调上升的序列，
令 $M=\displaystyle \bigcup_{j\geqslant 1}M_j$。
根据 $\mathcal{M}$ 的定义，对任意的 $A\in \mathcal{A}$，$\mu(A)<\infty$，对任意的 $j\geqslant 1$，
我们有
\[
\mu_{1}(A\cap M_j)=\mu_{2}(A\cap M_j).
\]
根据测度的基本性质，令 $j\rightarrow \infty$，上式的极限为
\[
\mu_{1}(A\cap M)=\mu_{2}(A\cap M).
\]
根据 $\mathcal{M}$ 的定义，$M\in \mathcal{M}$，所以 $\mathcal{M}$ 为单调类。
由于 $\mathcal{M}\supset \mathcal{A}$，所以它包含 $\mathcal{A}$ 所生成的单调类，
这是一个 $\sigma$ 代数，从而 $\mathcal{M}$ 包含 $\sigma(\mathcal{A})$，
这表明 $\mathcal{M}=\sigma(\mathcal{A})$。

我们现在来说明 $\mu_1=\mu_2$，根据 $\mu(X)$ 是否有限，我们有

- 如果 $\mu(X)$ 有限，那么在 $\mathcal{M}$ 的定义中取 $A=X$，
  所以对任意的 $M\in \mathcal{M}=\sigma(\mathcal{A})$，$\mu_1(M)=\mu_2(M)$，这表明 $\mu_1=\mu_2$。

- 如果 $\mu(X)$ 无限，根据 $\mu$ 的 $\sigma$-有限性，
  我们选取单调上升的序列 $\{X_i\}_{i\geqslant 1}\subset\mathcal{A}$，其中对任意的 $i$，
  $\mu(X_i)<\infty$ 并且 $\displaystyle \bigcup_{i\geqslant 1} X_i=X$。
  此时，根据 $\mathcal{M}$ 的定义，对每个 $i$，对每个 $M\in \mathcal{M}$，我们都有
  \[
  \mu_1(X_i\cap M)=\mu_2(X_i\cap M).
  \]
  对 $i$ 取极限，根据测度的性质，我们得到 $\mu_1(M)=\mu_2(M)$，这表明 $\mu_1=\mu_2$。

Carathéodory定理的存在性部分的证明较长，特别地，
证明将涉及的一系列概念本身就很有意义（它们不会在课程后面出现）。我们将证明细分七个步骤：

**（第一步）** 条件 **(C)** 和 **（${\mathbf C}_\infty$）** 的重新表述（这两个条件可以推出如下条件）：
这两个条件强调可以“有限”到“可数”来取极限：

条件 **(D)**：
假定 $\{A_i\}_{i\geqslant 0}\subset \mathcal{A}$ 是两两不交的子集并且
$\displaystyle \bigcup_{i\geqslant 1} A_i \in \mathcal{A}$，那么
\[
\displaystyle\mu\left(\bigcup_{i\geqslant 1} A_i\right) =\sum_{i\geqslant 1} \mu(A_i).
\]

证明很简单：令 $A=\displaystyle \bigcup_{i\geqslant 1} A_i $。

如果 $A$ 测度有限，我们定义单调下降的序列 $\{C_n\}_{n\geqslant 1}\subset \mathcal{A}$，其中，
对每个 $n\geqslant 1$，我们有
\[
C_n = A - \bigcup_{i\leqslant n} A_i.
\]
很明显，$\displaystyle\lim_{i\rightarrow \infty} C_i =\emptyset $。根据条件 **(C)**，我们有
\[
\lim_{n\rightarrow \infty}\mu(C_n)=0 \ \ \Leftrightarrow \lim_{n\rightarrow \infty}\mu (A - \bigcup_{i\leqslant n} A_i)=\mu(A)-\lim_{n\rightarrow \infty} \mu(\bigcup_{i\leqslant n} A_i)=0.
\]
这显然给出了条件 **(D)**。

如果 $\mu(A)=\infty$，那先选取条件 **（$\mathbf{C}_\infty$）** 中的一个 $X_j$（暂时固定指标 $j$），
和上面情况一样，我们有
\[
\mu(A\cap X_j) =\sum_{i\geqslant 1} \mu(A_i\cap X_j)\leqslant \sum_{i\geqslant 1} \mu(A_i).
\]
条件 **（$\mathbf{C}_\infty$）** 说的是当 $j\rightarrow \infty$ 时候，左边的值趋于无穷，
从而 $\displaystyle \sum_{i\geqslant 1} \mu(A_i)=\infty$，这就是条件 **(D)**。

**（第二步）** 外测度的定义。

对于 $E\subset X$，其中 $E$ 不一定要在 $\mathcal{A}$ 中或者 $\sigma(\mathcal{A})$ 中，
我们定义（由 $\mu$ 决定的）**$E$ 的外测度 $\mu^*(E)$**：
\[
\mu^*(E)= \inf_{A_i\in \mathcal{A}, \atop \\E \subset \bigcup A_i}\left(\sum_{i=1}^\infty \mu(A_i)\right).
\]
在上述公式中，指标集 $i$ 是可数的。如果我们选取
\[
A'_k = A_k - \bigcup_{i\leqslant k-1}A_i
\]
我们就可以假设这些 $\{A_i\}_{i\geqslant 1}$ 两两不交。
我们强调，上述定义中的 $A_i$ 个数的可数性**不能**换成有限性：

::: example*
我们可以考虑 $[0,1]$ 上所有区间所生成的代数，在这个代数上我们定义加性函数为区间长度。
如果我们只用有限个区间来盖住 $\mathbb{Q}\cap [0,1]$，那么这些区间一定会覆盖 $[0,1]$，从而，
$\mathbb{Q}\cap [0,1]$ 外测度为至少为 $1$，而我们上个学期在学习Lebesgue定理的时候看到过，
它的外测度“最好”是 $0$。
:::

外测度满足三个基本性质：

- 1\) 如果 $E\subset F$，那么有 $\mu^*(E)\leqslant \mu^*(F)$。

  这是显然的，因为任何盖住了 $F$ 的 $\{A_i\}_{i\geqslant 1}$ 必然盖住了 $E$。

- 2\) 对于任意可数个 $\{E_i\}_{i\geqslant 1}$，
  我们有 $\displaystyle \mu^*(\bigcup_{i\geqslant 1} E_i) \leqslant \sum_{i=1}^\infty \mu^*(E_i)$。

  不妨假设每个 $E_i$ 的外测度是有限的（否则没什么需要证明的）。
  对任意的 $\varepsilon>0$，按照定义，我们选取 $\{A_{i,j}\}_{j\geqslant 1}\subset \mathcal{A}$，使得
  \[
  0\leqslant \sum_{j=1}^\infty \mu(A_{i,j})-\mu^*(E_i)< 2^{-i}\varepsilon.
  \]
  那么，
  $\{A_{i,j}\}_{i,j\geqslant 1}\subset \mathcal{A}$ 是 $\displaystyle\bigcup_{i\geqslant 1} E_i$
  的覆盖并且
  \[
  0\leqslant  \sum_{i,j=1}^\infty \mu(A_{i,j})-\sum_{i\geqslant 1}\mu^*(E_i)<\sum_{i\geqslant 1} 2^{-i}\varepsilon=\varepsilon.
  \]
  从而，按照外测度定义，我们有
  \[
  0\leqslant  \mu\left(\displaystyle\bigcup_{i\geqslant 1} E_i\right)-\sum_{i\geqslant 1}\mu^*(E_i)<\sum_{i\geqslant 1} 2^{-i}\varepsilon=\varepsilon.
  \]
  令 $\varepsilon\rightarrow 0$ 我们就得到了结论。

- 3\) 如果 $A\in \mathcal{A}$，那么 $\mu^*(A)=\mu(A)$。
  如果我们选 $A$ 的覆盖为 $\{A\}$，这表明 $\mu^*(A)\leqslant \mu(A)$；
  任意选取 $A$ 的覆盖 $\{A_{i}\}_{i\geqslant 1}\subset \mathcal{A}$，我们假设这个覆盖两两不相交。
  那么，
  \[
  \sum_{i\geqslant 1}\mu(A_i)\geqslant \sum_{i\geqslant 1}\mu(A_i\cap A)=\mu(A).
  \]
  最后一个等号我们用了条件 **(D)**。这表明，$\mu^*(A)\geqslant \mu(A)$。

**（第三步）** $\mu^*$-可测的定义。

给定 $X$ 的子集 $B$，如果对所有的 $E\subset X$，我们都有如下的等式（用 $B$ 将任何集合砍成两块，
两块的外测度之和为该集合的外测度）
\[
\mu^*(E\cap B)+\mu^*(E-B) =\mu^*(E),
\]
那么，我们称 $B$ 为 **$\mu^*$-可测的**。我们用 $\mathcal{B}$ 来代表一切 $\mu^*$-可测的子集。
我们注意到，由于
\[
\mu^*(E\cap B)+\mu^*(E-B) \geqslant \mu^*(E),
\]
为了验证 $\mu^*$-可测性，只要验证不等式
\[
\mu^*(E\cap B)+\mu^*(E-B) \leqslant \mu^*(E),
\]
即可。

**（第四步）** $\mathcal{A}$ 中元素均为 $\mu^*$-可测的。

为了说明 $\mathcal{A}\subset \mathcal{B}$，任意选取 $A\in \mathcal{A}$，
$E\subset X$ 和 $E$ 的覆盖 $\{A_i\}_{i\geqslant 1} \subset \mathcal{A}$。注意到
\[
\begin{aligned}
\mu^*(E\cap A)&\leqslant \sum_{i \geqslant 1} \mu(A_i \cap A)=\sum_{i \geqslant 1} \mu^*(A_i \cap A),\\
\mu^*(E-A)&\leqslant \sum_{i \geqslant 1} \mu(A_i \cap A^c)= \sum_{i \geqslant 1} \mu^*(A_i \cap A^c),
\end{aligned}
\]
所以
\[
\begin{aligned}
\mu^*(E\cap A)+\mu^*(E-A) & \leqslant \sum_{i\geqslant 1} \big(\mu^*(A_i \cap A)+\mu^*(A_i-A)\big) \\
&= \sum_{i\geqslant 1} \mu^*(A_i).
\end{aligned}
\]
由 $\{A_i\}_{i\geqslant 1}$ 选取的任意性，我们得到
\[
\mu^*(E\cap A)+\mu^*(E-A) \leqslant \mu^*(E).
\]
从而 $A$ 是 $\mu^*$-可测的。

**（第五步）** $\mathcal{B}$ 是 $X$ 上的代数。

很明显，$\emptyset, X\in \mathcal{B}$。按定义，$\mathcal{B}$ 中元素对于求补集合是稳定的。
我们只要证明 $\mathcal{B}$ 对于取交集是封闭的即可。
任取 $B,C\in \mathcal{B}$，要证明 $D=B\cap C \in \mathcal{B}$。为此，任选 $E\subset X$，那么
\[
\begin{aligned}
\mu^*(E)&=\mu^*(E\cap C) + \mu^*(E-C)\\
&=\mu^*(E\cap D) + \mu^*\big((E\cap C)- B\big)+ \mu^*(E-C)
\end{aligned}
\]
其中，我们对 $E\cap C$ 这个集合用 $B$ 是 $\mu^*$-可测的性质。由于
\[
\big((E\cap C)- B \big)\cup (E-C) \supset E- D,
\]
所以
\[
\begin{aligned}
\mu^*(E)\geqslant \mu^*(E\cap D) + \mu^*(E- D).
\end{aligned}
\]
这表明 $D$ 是 $\mu^*$-可测的。

**（第六步）** $\mu^*$ 为 $\mathcal{B}$ 上的加性函数。

我们证明更一般的等式，对任何两个不交的 $\mu^*$-可测集 $B,C \in \mathcal{B}$，我们都有
\[
\mu^*\big(E\cap (B\cup C)\big)=\mu^*(E\cap B)+\mu^*(E\cap C).
\]
在这个等式中取 $E=X$ 就得到 $\mu^*(B\cup C)=\mu^*(B)+\mu^*(C)$，这说明 $\mu^*$ 是加性函数。

为证明上面的等式，对任意的集合 $E$，我们对 $E'=E\cap (B\cup C)$ 和 $B$ 用 $\mu^*$-可测的定义：
\[
\begin{aligned}
\mu^*(E')&=\mu^*(E'\cap B)+\mu^*(E'-B)\\
&=\mu^*(E \cap B)+\mu^*\big((E\cap C)-B\big)\\
&\stackrel{B~\text{可测}}{=}\mu^*(E \cap B)+\Big[\mu^*(E\cap C)-\mu^*\big((E\cap C)\cap B\big)\Big]
\end{aligned}
\]
由于最后一项是零（$C\cap B=\emptyset$），所以
\[
\begin{aligned}
\mu^*(E'){=}\mu^*(E \cap B)+\mu^*(E\cap C).
\end{aligned}
\]
这就是我们要证明的等式。

**（第七步）** $\mathcal{B}$ 为 $\sigma$-代数而 $\mu^*$ 为 $\mathcal{B}$ 上的测度。

由于 $\mathcal{B}$ 为 $\sigma$-代数，所以它包含 $\sigma(\mathcal{A})$。
这样，$\mu^*$ 可以作为 $\mu$ 的扩张，这就完成了 Carathéodory 定理的证明。

为了证明上面的论断，
只要对两两不交的 $\{B_i\}_{i\geqslant 1} \subset \mathcal{B}$ 来证明
$\displaystyle \bigcup_{i\geqslant 1} B_i \in \mathcal{B}$ 并且
\[
\displaystyle \mu^*\left(\bigcup_{i\geqslant 1} B_i \right) = \sum_{i=1}^\infty \mu^*(B_i)
\]
即可。
为证明 $\displaystyle \bigcup_{i\geqslant 1} B_i \in \mathcal{B}$，
我们令 $C_n =\displaystyle \bigcup_{i\leqslant n} B_i$，
$C_\infty =\displaystyle \bigcup_{i\geqslant 1} B_i$，需要说明 $C_\infty$ 是 $\mu^*$-可测的）。
第六步中等式，对任意的 $E$，我们有
\[
\begin{aligned}
\mu^*(E)&=\mu^*(E\cap C_n) + \mu^*(E-C_n)\\
& \stackrel{加性函数}{=}\left(\sum_{i\leqslant n}\mu^*(E\cap B_i) \right)+ \mu^*(E-C_n)\\
&\geqslant \sum_{i\leqslant n}\mu^*(E\cap B_i) + \mu^*(E-C_\infty).
\end{aligned}
\]
令 $n\rightarrow \infty$，我们得到
\[
\begin{aligned}
\mu^*(E)&\geqslant \sum_{i=1}^\infty \mu^*(E\cap B_i) + \mu^*(E-C_\infty)\\
&\geqslant \mu^*(E\cap C_\infty) + \mu^*(E-C_\infty),
\end{aligned}
\]
这给出了 $C_\infty \in \mathcal{B}$ 的证明。
在上式中取 $E=C_\infty$ 也蕴含了 $\mu^*$ 为 $\mathcal{B}$ 上的测度。

至此，我们完成了Carathéodory 定理的证明。$\Box$
