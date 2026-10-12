---
title: 基础概念
---

我们一般考虑小平展景$X_{\operatorname{ét}}$。
记$\operatorname{Sh}(X_{\operatorname{ét}})$是集合取值的平展层范畴，
而$\operatorname{Ab}(X_{\operatorname{ét}})$是Abel群取值的平展层。
类似的预层范畴也为$\operatorname{PreSh}(X_{\operatorname{ét}})$和
$\operatorname{PreAb}(X_{\operatorname{ét}})$。

::: proposition {@etalesheafcheck1}
固定概形$X$，对于$\mathscr{F}\in\operatorname{PreSh}(X_{\operatorname{ét}})$。
若$\mathscr{F}$在限制到Zariski开覆盖时满足层条件，且对于仿射平展覆盖$V\to U$满足层条件，
则$\mathscr{F}\in\operatorname{Sh}(X_{\operatorname{ét}})$。
:::

::: proof
详细细节参考[@Mil80]命题II.1.5。
简单来说就是运用Zariski开覆盖上的条件会给出：对于概形$V=\coprod_iV_i$，我们有
$\mathscr{F}(V)=\prod_i\mathscr{F}(V_i)$。
运用这个我们发现如果单个映射组成的平展覆盖$\coprod_iU_i\to U$满足等化子条件，那么$\{U_i\to U\}$
也满足等化子条件（因为$\coprod_iU_i\times_U\coprod_jU_j=\coprod_{i,j}U_i\times_UU_j$）。
根据仿射平展覆盖满足等化子条件，我们轻易得到$\{U_i\to U\}_{i\in I}$也满足等化子条件，
其中$I$有限且$U_i$仿射。
对于一般情况，需要证明相互契合，追图细节略去。
:::

::: example [结构层]
给定概形$X$。
定义$\mathscr{O}_{X,\operatorname{ét}}$为
$\mathscr{O}_{X,\operatorname{ét}}(U):=\Gamma(U,\mathscr{O}_U)$。
我们断言$\mathscr{O}_{X,\operatorname{ét}}\in\operatorname{Sh}(X_{\operatorname{ét}})$。
运用 @etalesheafcheck1，这其实就是环的忠实平坦下降：设环同态$f:A\to B$忠实平坦，则有正合列：
\[
\begin{tikzcd}
  0 & A & B && {B\otimes_AB}
  \arrow[from=1-1, to=1-2]
  \arrow["f", from=1-2, to=1-3]
  \arrow["{b\mapsto 1\otimes b-b\otimes 1}", from=1-3, to=1-5]
\end{tikzcd}
\]
证明颇为经典，分成三步：(a)证明如果$f$有一个截面，则命题成立；
(b)证明如果存在另一个忠实平坦同态$A\to A'$使得命题对$A'\to A'\otimes_AB$成立，
则也对$A\to B$成立；(c)发现$B\to B\otimes_AB,b\mapsto b\otimes 1$存在截面$b\otimes b'\mapsto bb'$。
:::

::: example [由概形表示的层]
给定概形$X$。取定$Z$为$X$-概形，定义为$h_Z:=\operatorname{Hom}_X(-,Z)$。
事实上通过(i)的正合列也容易得到$h_Z\in\operatorname{Sh}(X_{\operatorname{ét}})$。下面有几个常用的
例子：

(a)定义$\bm{\mu}_{n,X}(T)=\{\zeta\in\Gamma(T,\mathscr{O}_T):\zeta^n=1\}$，
即$\bm{\mu}_{n,X}$被$\underline{\operatorname{Spec}}_X\mathscr{O}_X[t]/(t^n-1)$
表示；

(b)定义$\mathbb{G}_{a,X}(T)=\Gamma(T,\mathscr{O}_T)$，即$\mathbb{G}_{a,X}$是被$\mathbb{A}_X^1$
表示的函子；

(c)定义$\mathbb{G}_{m,X}(T)=\Gamma(T,\mathscr{O}_T^*)$，
即$\mathbb{G}_{m,X}$是被$\underline{\operatorname{Spec}}_X\mathscr{O}_X[t,t^{-1}]$
表示的函子；

(d)定义$\operatorname{GL}_{n,X}(T)=\operatorname{GL}_n(\Gamma(T,\mathscr{O}_T))$，
即$\operatorname{GL}_{n,X}$是被
\[
\underline{\operatorname{Spec}}_X\mathscr{O}_X[\{x_{ij}\}_{1\leq i,j\leq n}][1/\det(x_{ij})]
\]
表示的函子。
:::

::: example [拟凝聚层]
给定概形$X$。
考虑$\mathscr{M}\in\operatorname{Sh}(X_{\operatorname{Zar}})$是拟凝聚的，
定义$\mathscr{M}^{\operatorname{ét}}(\phi:U\to X):=\Gamma(U,\phi^*\mathscr{M})$。
运用 @etalesheafcheck1 和更一般的正合列：环同态$f:A\to B$忠实平坦且$M$为$A$-模，则有正合列
\[
\begin{tikzcd}
  0 & M & {B\otimes_AM} & {B\otimes_AB\otimes_AM}
  \arrow[shift left=1, from=1-3, to=1-4]
  \arrow[from=1-1, to=1-2]
  \arrow[from=1-2, to=1-3]
  \arrow[shift right=1, from=1-3, to=1-4]
\end{tikzcd}
\]
即可得到$\mathscr{M}^{\operatorname{ét}}\in\operatorname{Sh}(X_{\operatorname{ét}})$。
:::

::: proposition [点上的层范畴] {@SheavesOnPoints}
对于$X=\operatorname{Spec} k$，有范畴等价
\[
\operatorname{Sh}(X_{\operatorname{ét}})\to(\text{离散}\operatorname{Gal}(k^{\operatorname{sep}}/k)-\text{集}),\mathscr{F}\mapsto M_{\mathscr{F}}:=
\varinjlim_{k^{\operatorname{sep}}\supset k'/k\text{\tiny 有限Galois}}\mathscr{F}(\operatorname{Spec} k').
\]
:::

::: proof
定义逆为
$M\mapsto\mathscr{F}_M:=(A\mapsto\operatorname{Hom}_{G}(\operatorname{Hom}_{k-\mathrm{alg}}(A,k^{\operatorname{sep}}),M))$。
见[@StacksProject, Tag 03QT]。
:::

::: remark
类似的有范畴等价
\[
\operatorname{Ab}(X_{\operatorname{ét}})\to(\text{离散}\operatorname{Gal}(k^{\operatorname{sep}}/k)-\text{模}).
\]
:::
