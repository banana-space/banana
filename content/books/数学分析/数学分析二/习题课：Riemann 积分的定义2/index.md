---
title: 习题课：Riemann 积分的定义2
notices:
  - name: 问题
    items:
      - R41) 中 $B\supset A\supset C$，不等式 $m(C)-m(B)<\varepsilon$ 似乎应为 $m(B)-m(C)<\varepsilon$。
---

## 有界区域上的Riemann积分

我们沿用上次习题课（在矩形上定义了Riemann积分）的记号。

这次的问题中，$A$ 表示 $\mathbb{R}^n$ 的某个非空有界集。
对于 $A$ 上定义的复值（可在某个赋范线性空间上取值）函数
\[
f\colon A\rightarrow \mathbb{C},
\]
我们将它延拓成 $\mathbb{R}^n$ 的函数：
\[
\widetilde{f}\colon\mathbb{R}^n \rightarrow \mathbb{R}, \ \ x\mapsto \widetilde{f}(x)=\begin{cases}f(x), \ &x\in A;\\
0, &x\notin A.\end{cases}
\]

R28) 如果存在包含 $A$ 的矩形 $P$（总存在），
     使得 $\widetilde{f}$ 在 $P$ 上的限制 $\widetilde{f}\big|_P$ 是 $P$ 上的Riemann可积函数，那么，
     我们就称 $f$ 在 $A$ 上是**Riemann可积的**并记作 $f\in \mathcal{R}(A)$。我们定义
     \[
     \displaystyle \int_A f=\int_P \widetilde{f}\big|_P.
     \]
     证明，这个定义不依赖于矩形 $P$ 的选取，即若 $P'$ 是另一个包含 $A$ 的矩形，
     那么 $\widetilde{f}$ 在 $P'$ 上的限制 $\widetilde{f}\big|_{P'}$ 是 $P'$ 上的Riemann可积的并且
     \[
     \displaystyle \int_P \widetilde{f}\big|_P=\int_{P'} \widetilde{f}\big|_{P'}.
     \]

     （与抽象积分比较，这个积分的定义依赖于函数的延拓。抽象积分的定义是内蕴的。）

R29) 证明，$\mathcal{R}(A)$ 是 $\mathbb{C}$-线性空间。
     进一步证明，如果 $f,g\in \mathcal{R}(A)$，那么它们的乘积 $f\cdot g \in \mathcal{R}(A)$。

     （乘积的性质对抽象积分不成立）

R30) 证明，积分算子
     \[
     \displaystyle \int_A\colon \mathcal{R}(A)\rightarrow \mathbb{C},  \ \ f\mapsto  \int_A f
     \]
     是 $\mathbb{C}$-线性映射。

     （对抽象积分而言，建立线性相对困难）

R31) 证明，对任意的 $f\in\mathcal{R}(A)$，我们有
     \[
     \displaystyle \Big|\int_A f \Big|\leqslant \int_A \big|f\big|.
     \]
     如果 $f,g \in \mathcal{R}(A)$ 是实值函数并且对任意的 $x\in A$，都有 $f(x)\leqslant g(x)$，那么
     \[
     \displaystyle \int_A f\leqslant \int_A g.
     \]

R32) 我们假设 $f,g\colon A\rightarrow \mathbb{R}$ 是实数值有界函数并且Riemann可积。证明，函数
     \[
     \max(f,g)(x)=\max(f(x),g(x)), \ \ \min(f,g)(x)=\min(f(x),g(x))
     \]
     是Riemann可积的并且
     \[
     \begin{aligned}
     &\int_A \min(f,g)\leqslant \min(\int_A f,\int_A g), \\
     &\max(\int_A f,\int_A g) \leqslant \int_A \max(f,g).
     \end{aligned}
     \]

R33) 证明Cauchy–Schwarz不等式：$f,g\in \mathcal{R}(A)$，我们有
     \[
     \Big| \int_A f \cdot \overline{g}\Big|\leqslant \Bigl(\int_A |f|^2\Bigr)^{\frac{1}{2}}\Bigl(\int_A |g|^2\Bigr)^{\frac{1}{2}}.
     \]

     （以上R28)–R33)是对矩形上的积分理论的简单应用）

R34) （积分第一中值公式）$A$ 是一个可铺集（有限个内部不交的矩形的并集，
     请参考题目 R2)）假设 $f$ 是 $A$ 上的Riemann可积的实值函数。令
     \[
     \displaystyle c=\inf_{x\in A}f(x), \ \ C=\sup_{x\in A}f(x).
     \]
     证明，存在 $\xi \in [c,C]$，使得
     \[
     \int_A f =\xi \cdot m(A).
     \]

R35) （一致收敛与Riemann积分可交换）给定 $A$ 上Riemann可积的函数列
     $\{f_k\}_{k\geqslant 1}\subset \mathcal{R}(A)$，
     假设 $\{f_k\}_{k\geqslant 1}$ 一致收敛到函数 $f\colon A\rightarrow \mathbb{C}$。
     证明，$f\in \mathcal{R}(A)$ 并且
     \[
     \int_A f= \lim_{k\rightarrow \infty}\int_A f_k.
     \]

R36) （上下积分）给定实值有界函数 $f\colon A\rightarrow \mathbb{R}$，任意给定矩形 $P\supset A$，
     我们考虑
     \[
     \begin{aligned}
     \overline{\mathcal{E}_f}(P)&=\{\varphi \in \mathcal{E}(P)\mid\varphi(x)\geqslant \widetilde{f}(x)\}, \\
     \underline{\mathcal{E}_f}(P)&=\{\varphi \in \mathcal{E}(P)\mid\varphi(x)\leqslant \widetilde{f}(x)\}.
     \end{aligned}
     \]
     据此，我们定义
     \[
     \begin{aligned}
     &\overline{\int}_{P}f=\inf_{\varphi \in \overline{\mathcal{E}_f}(P)}\int_P \varphi, \\
     &\underline{\int}_{P}f=\sup_{\varphi \in \underline{\mathcal{E}_f}(P)}\int_P \varphi.
     \end{aligned}
     \]
     证明，这两个数值不依赖于 $P$ 的选取。
     （我们称之为有界函数 $f$ 的**上积分**和**下积分**并记作 $\displaystyle\overline{\int}_{A}f$ 和
     $\displaystyle\underline{\int}_{A}f$）

R37) （上下积分刻画Riemann性）给定实值有界函数 $f\colon A\rightarrow \mathbb{R}$。
     证明，
     $f\in \mathcal{R}(A)$ 当且仅当
     $\displaystyle\overline{\int}_{A}f=\displaystyle\underline{\int}_{A}f$。此时，我们还有
     \[
     \displaystyle\overline{\int}_{A}f=\displaystyle\underline{\int}_{A}f=\int_A f.
     \]

## 抽象可铺集

在这一部分中，我们用 $A$ 表示 $\mathbb{R}^n$ 中的一个非空的有界集。
我们将研究一类特殊的有界集以及它们上面的Riemann积分理论。
假设 $A\subset P$，其中 $P$ 是一个矩形，如果示性函数 $\mathbf{1}_A$ 是 $P$ 上的Riemann可积的函数，
我们就称 $A$ 是**抽象可铺的**。我们定义
\[
m(A)=\displaystyle\int_P \mathbf{1}_A
\]
为 $A$ 的体积。很明显，这些定义不依赖于 $P$ 的选取。
我们用 $\mathscr{P}$ 表示所有的 $\mathbb{R}^n$ 上的抽象可铺集的全体（包括空集）。

R38) 证明，可铺集是抽象可铺的。

R39) 如果 $A$ 和 $B$ 是抽象可铺的，证明，$A\cap B$，$A\cup B$ 和 $A-B$ 也是抽象可铺的并且
     \[
     \begin{aligned}
     &m(A\cup B)+m(A\cap B)=m(A)+m(B), \\
      &m(A-B)=m(A)-m(A\cap B).
      \end{aligned}
     \]

     （与测度论比较，
     上述表明所有的 $\mathscr{P}$ 很类似于一个代数（$\mathbb{R}^n\notin \mathscr{P}$）而 $m$ 类似于
     $\mathscr{P}$ 上的加性函数）

R40) $A\subset \mathbb{R}^n$ 是非空的有界集，我们强调它未必是抽象可铺的。
     假设 $P$ 是矩形并且 $A\subset P$，我们定义 $A$ 的**上测度**和**下测度**分别为
     \[
     \begin{aligned}
     &\overline{m}(A)=\overline{\int}_{A}\mathbf{1}_A, \ \ \underline{m}(A)=\underline{\int}_{A}\mathbf{1}_A.
     \end{aligned}
     \]
     证明，
     \[
     \overline{m}(A)=\inf_{B\supset A,\atop \\ B~\text{是可铺集}}m(B), \ \ \underline{m}(A)=\sup_{C\subset A,\atop \\ C~\text{是可铺集}}m(C).
     \]

     （由此可见，$\overline{m}(A)$ 与Carathéodory测度扩张定理证明中的外测度类似，然而，
     可铺集只容许有限个矩形来覆盖，外测度容许有可数个）

R41) （抽象可铺集的测度刻画）$A$ 是抽象可铺的当且仅当对任意的 $\varepsilon>0$，
     存在可铺集 $B$ 和 $C$，使得
     \[
     B\supset A\supset C, \ \ m(C)-m(B)<\varepsilon.
     \]
     （请与课程上关于在紧集上取值有限的测度的正则性定理比较）

R42) （复习）$A$ 是 $\mathbb{R}^n$ 中的集合（未必有界），
     我们定义 $A$ 的**内部**$\mathring{A}$ 和**闭包** $\overline{A}$ 为：
     \[
     \begin{aligned}
     \mathring{A}&=\bigl\{x\in A\bigm|\text{存在 $\delta>0$，使得以 $x$ 为球心以 $\delta$ 为半径的小球落在 $A$ 中}\bigr\},\\
     \overline{A}&=\bigl\{ x \in \mathbb{R}^n\bigm|\text{对任意的 $\delta>0$，使得以 $x$ 为球心以 $\delta$ 为半径的小球与 $A$ 的交非空}\bigr\}.
     \end{aligned}
     \]
     证明，$\mathring{A}$ 是包含在 $A$ 中的最大的开集；
     $\overline{A}$ 是包含 $A$ 的最小的闭集并且 $\overline{A}$ 恰为 $A$ 的聚点的集合。

R43) $A$ 是 $\mathbb{R}^n$ 中的集合（未必有界），
     我们定义 $A$ 的**边界**为 $\partial A= \overline{A}-\mathring{A}$。
     根据上面的问题，$\partial A$ 是闭集。
     证明，$\mathbb{R}^n$ 上的函数 $\mathbf{1}_A$ 在每个 $x\in \mathbb{R}^n-\partial A$ 处是连续的。

R44) （抽象可铺集的拓扑刻画）$A$ 表示 $\mathbb{R}^n$ 中的一个非空的有界集。
     证明，$A$ 是抽象可铺的当且仅当 $\partial A$ 是（Lebesgue测度）零测集。

R45) （Riemann意义下的零测集）$A\subset \mathbb{R}^n$，如果对每个 $\varepsilon>0$，
     总存在有限个矩形 $P_1,\cdots,P_{N(\varepsilon)}$，使得
     \[
     A\subset \bigcup_{1\leqslant i \leqslant N(\varepsilon)}P_i, \ \  \sum_{i=1}^{N(\varepsilon)}m(P_i)< \varepsilon,
     \]
     我们称 $A$ 是**在Riemann意义下的零测集**（简记为$\mathcal{R}$-零测集）。
     证明，$\mathcal{R}$-零测集是有界的并且是Lebesgue意义下的零测集；
     $\mathcal{R}$-零测集的子集是 $\mathcal{R}$-零测集；
     有限个 $\mathcal{R}$-零测集的并也是 $\mathcal{R}$-零测集。

R46) 证明，$\mathcal{R}$-零测集的闭包是 $\mathcal{R}$-零测集。
     进一步证明，
     $\mathbb{Q}\cap [0,1]$ 不是 $\mathbb{R}^1$ 上的
     $\mathcal{R}$-零测集但是是Lebesgue意义下的零测集。

R47) 证明，$\mathbb{R}^n$ 中紧的 $d$-维子流形是 $\mathcal{R}$-零测集，其中 $d\leqslant n-1$。

R48) 证明，如下四个命题是等价的：

     - 甲）$A$ 是 $\mathcal{R}$-零测集；

     - 乙）$A$ 是抽象可铺的并且 $m(A)=0$；

     - 丙）$A$ 是抽象可铺的并且是零测集；

     - 丁）$A$ 有界并且 $\overline{A}$ 是零测集。

     （按照甲 $\Rightarrow$ 乙 $\Rightarrow$ 丙 $\Rightarrow$ 丁 $\Rightarrow$
     甲的顺序推理比较容易）

R49) （可铺集的刻画之三）$A$ 表示 $\mathbb{R}^n$ 中的一个非空的有界集。
     证明，$A$ 是抽象可铺的当且仅当 $\partial A$ 是 $\mathcal{R}$-零测集。

::: remark* (寄语)
In my opinion a mathematician, in so far as he is a mathematician, need not preoccupy himself with philosophy – an opinion, moreover, which has been expressed by many philosophers.

<align right>
—— Henri Lebesgue
</align>
:::
