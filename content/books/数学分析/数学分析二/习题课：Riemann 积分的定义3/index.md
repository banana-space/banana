---
title: 习题课：Riemann 积分的定义3
notices:
  - name: 问题
    items:
      - R65) 括注中“Borel集未必是Lebesgue可测集”似乎说反了：Borel 集都是 Lebesgue 可测集，而 Lebesgue 可测集未必是 Borel 集。
---

我们沿用上次习题课的记号。

## 高维的Lebesgue定理

假设 $A\subset \mathbb{R}^n$ 是子集，对任意的函数 $f\colon A \rightarrow \mathbb{C}$ 和 $x\in A$，
我们定义 $f$ 在 $x$ 处的**振幅**为
\[
\omega(f,x)=\inf_{\delta>0}\left(\sup_{y,z\in B_x(\delta)\cap A}|f(y)-f(z)|\right),
\]
其中，$B_x(\delta)$ 为中心在 $x$ 处半径为 $\delta$ 的闭球。

R51) 证明，$f$ 在 $x$ 处连续当且仅当 $\omega(f,x)=0$。

     （这个性质对于 $A$ 是任意的距离空间都成立）

R52) 我们现在假设 $A=P$ 是矩形，$f\in \mathcal{R}(P)$ 是Riemann可积的函数。
     证明，对任意的 $\alpha>0$，集合
     \[
     A_\alpha=\{x\in P\mid\omega(f,x)\geqslant \alpha\}
     \]
     是（Lebesgue意义下的）零测集。

     （请参考上学期第二十二次课的讲义中在 $1$ 维时的证明）

R53) **（Lebesgue定理）** 假设 $f$ 是矩形 $P$ 上的有界函数。
     证明，$f$ 是Riemann-可积的当且仅当 $f$ 的不连续点集是零测集（Lebesgue意义下）。

     （请参考上学期第二十二次课的讲义中在 $1$ 维时的证明）

R54) 我们现在假设 $A=P$ 是矩形并且Riemann-可积的函数 $f\in \mathcal{R}(P)$ 的取值是非负的。
     证明，
     $\displaystyle \int_P f=0$ 当且仅当 $\bigl\{x\in P\bigm|f(x)\neq 0\bigr\}$
     是（Lebesgue意义下的）零测集。

R55) **（Lebesgue定理）** 假设 $f$ 是有界集合 $A$ 上的有界函数，
     $\widetilde{f}$ 是 $f$ 在 $\mathbb{R}^n$ 上用 $0$ 所做的延拓（请参考上次习题课中的构造）。
     证明，
     $f$ 在 $A$ 上是Riemann可积的当且仅当 $\widetilde{f}$ 的不连续点集是（Lebesgue意义下的）零测集。

R56) 假设 $A\subset \mathbb{R}^n$ 有界并且 $\partial A$ 是（Lebesgue意义下的）零测集。
     证明，$A$ 上的连续函数在 $A$ 上Riemann可积。

## 抽象可铺集上的积分

R57) 假设 $A\subset \mathbb{R}^n$ 是 $\mathcal{R}$-零测集，$f$ 是 $A$ 上的有界函数。
     证明，$f\in \mathcal{R}(A)$ 并且
     \[
     \displaystyle \int_A f =0.
     \]

R58) 假设 $A$ 和 $B$ 是 $\mathbb{R}^n$ 中两个有界集，$A\cap B$ 是 $\mathcal{R}$-零测集，
     $f$ 是定义在 $A\cup B$ 上复值函数。
     证明，如果在 $A$，$B$ 和 $A\cup B$ 这三个集合中的任意两个上面，$f$ 是Riemann-可积的，
     那么它在第三个集合上也是Riemann-可积的并且下面的等式成立：
     \[
     \int_{A\cup B}f=\int_A f+\int_B f.
     \]

R59) 假设 $A\subset \mathbb{R}^n$ 是有界集并且 $f\in \mathcal{R}(A)$。
     证明，如果 $B\subset A$ 是抽象可铺的，那么 $f\big|_B$ 是 $B$ 上的Riemann-可积函数。

R60) 假设 $A\subset \mathbb{R}^n$ 是抽象可铺集，$f\in \mathcal{R}(A)$，
     $\overline{f}$ 是 $f$ 在 $\overline{A}$（$A$ 的闭包）上的一个有界的延拓（即 $\overline{f}$ 是
     $\overline{A}$ 上的有界函数并且 $\overline{f}\big|_A=f$）。
     证明，对任意的 $B$，满足 $\mathring{A} \subset B \subset \overline{A}$，
     $\overline{f} \big|_B$ 在 $B$ 上是Riemann可积的并且
     \[
     \int_B \overline{f}=\int_A f.
     \]

R61) 假设 $A\subset \mathbb{R}^n$ 是抽象可铺集。
     证明，
     每个满足 $\mathring{A} \subset B \subset \overline{A}$ 的集合 $B$ 都是抽象可铺集并且
     $m(B)=m(A)$。

R62) （Chasles定理）给定有限个抽象可铺集 $A_1,\cdots, A_N\subset \mathbb{R}^n$，
     其中对任意的 $i\neq j$，$A_i\cap A_j$ 是 $\mathcal{R}$-零测集，给定函数
     \[
     f\colon\displaystyle \bigcup_{i=1}^N A_i\rightarrow \mathbb{C}.
     \]
     证明，$f\in \mathcal{R}\left(\displaystyle\bigcup_{i=1}^N A_i\right)$ 当且仅当对每个 $i$，
     我们都有 $f\in \mathcal{R}(A_i)$。如果上述成立，进一步证明
     \[
     \int_{\cup_{i\leqslant N} A_i}f=\sum_{i=1}^N \int_{A_i}f.
     \]

R63) 假设 $A\subset \mathbb{R}^n$ 是抽象可铺集，
     $A$ 上定义的有界函数 $f$ 在 $\mathring{A}$ 上连续。证明，$f$ 在 $A$ 上是Riemann-可积的。

R64) 假设 $A\subset \mathbb{R}^n$ 是紧的抽象可铺集，$f$ 是 $A$ 上的连续函数。
     证明，$f\in \mathcal{R}(A)$。

## 与Lebesgue积分的联系

R65) 假设 $A\subset \mathbb{R}^n$ 是抽象可铺集。
     证明，$A$ 是Lebesgue可测集（按定义，
     一个集合 $A\subset \mathbb{R}^n$ 是Lebesgue可测的指的是存在Borel集 $B_1$ 和 $B_2$，
     使得 $B_1\subset A\subset B_2$ 并且 $m(B_1)=m(B_2)$。Borel集未必是Lebesgue可测集。
     Lebesgue可测集是Borel代数对于Lebesgue测度的完备化。）

R66) 假设 $A\subset \mathbb{R}^n$ 是抽象可铺集，$f\in \mathcal{R}(A)$。
     证明，${f}$ 在 $A$ 上是Lebesgue可积的并且
     \[
     \int_A f =\int_{A} f dm,
     \]
     其中后者是Lebesgue积分。

::: remark* (寄语)
One should never try to prove anything that is not almost obvious.

<align right>
——Alexandre Grothendieck
</align>
:::
