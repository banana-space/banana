---
title: 平展拓扑的一些基础应用
---

::: definition [平展邻域]
给定概形$X$，称几何点$\bar{x}$的一个平展邻域为如下图表：
\[
\begin{tikzcd}
  & U \\
  {\bar{x}} & X
  \arrow["{\bar{x}}"', from=2-1, to=2-2]
  \arrow["f", from=1-2, to=2-2]
  \arrow["{\bar{u}}", from=2-1, to=1-2]
\end{tikzcd}
\]
其中$f$平展。我们记为$(U,\bar{u})\to(X,\bar{x})$。我们称其为初等平展邻域，如果其剩余类域相同。
:::

本小节我们将分析拟有限映射的平展局部长什么样，进而得到Zariski主定理一个
比较好的证明。

## 拟有限映射的平展局部

::: proposition {@Quasi-finite-EtaleNbd}
设$f:X\to S$是概形映射。任取$s\in S$和$x_1,...,x_n\in X_s$为孤立点，假设$f$分离且局部有限型，
则存在初等平展邻域$(U,u)\to(S,s)$和分解（均为既开又闭的集合）
\[
U\times_SX=W\sqcup \coprod_{i=1}^nV_i
\]
使得$V_i\to U$有限且$u$的纤维是单点集$\{v_i\}$使得每个$v_i$会打到$x_i$且$\kappa(x_i)=\kappa(v_i)$，
且
$W\to U$在$u$的纤维里任何点不会打到任何一个$x_i$。
:::

::: proof
这是相当复杂的一个纯代数结果，参考[@StacksProject, Tag 02LN]。
:::

## Zariski主定理

::: lemma {@027}
设$f:X\to S$是概形映射且分离有限型，考虑相对正规化
\[
\begin{tikzcd}
  X && {S'} \\
  & S
  \arrow["f"', from=1-1, to=2-2]
  \arrow["{f'}", from=1-1, to=1-3]
  \arrow["\nu", from=1-3, to=2-2]
\end{tikzcd}
\]
则存在开子概形$U'\subset S'$使得

(a) $(f')^{-1}(U')\to U'$是同构；

(b) $(f')^{-1}(U')\subset X$是使得$f$拟有限的点集。
:::

::: proof
可以证明使得$f$拟有限的点集是开的，假设其为$U$，则只需要证明：

(a) $U'=f'(U)$是开的；

(b) $U=(f')^{-1}(U')$；

(c) $U\to U'$是同构。

$\bullet$ **步骤1。** 事实上考虑如下断言：(d)对任何$x\in U$存在开邻域$f'(x)\in V\subset S'$
使得$(f')^{-1}V\to V$是同构。则不难证明(d)可以推出(a)(b)(c)。我们略去这一部分。因此只需要证明(d)。

$\bullet$ **步骤2。** 证明可以将$S$替换成$s=f(x)$的（初等）平展邻域。

考虑初等平展邻域$(T,t)\to(S,s)$，根据正规化和光滑基变换交换我们得知替换成平展邻域之后条件未变。
若断言对平展邻域成立，存在
$f_T'(y)\in V'\subset S_T'$使得$(f'_T)^{-1}(V')\to V'$是同构。
因为平展，所以$S_T'\to S'$是开的，设$V$是$V'$在映射下的像。
则有纤维积：
\[
\begin{tikzcd}
  {(f_T')^{-1}V'} & {(f')^{-1}(V)} \\
  {V'} & V
  \arrow[from=2-1, to=2-2]
  \arrow[from=1-1, to=2-1]
  \arrow[from=1-1, to=1-2]
  \arrow[from=1-2, to=2-2]
  \arrow["\ulcorner"{anchor=center, pos=0.125}, draw=none, from=1-1, to=2-2]
\end{tikzcd}
\]
再根据平展下降得到结论。

$\bullet$ **步骤3。** 完成证明。

根据步骤2，不妨将$S$替换为$s=f(x)$的（初等）平展邻域。根据 @Quasi-finite-EtaleNbd
我们有$X=V\sqcup W$使得$V\to S$有限且$x\in V$。由于$V\to S$有限，设$W'$是$S,W$的相对正规化，
则我们考虑的正规化为
\[
X=V\sqcup W\to V\sqcup W'\to S.
\]
因此取$V$即可得到结论。
:::

::: theorem [Zariski主定理] {@ZariskiMain}
设$f:X\to S$是分离拟有限映射。

(i)考虑相对正规化
\[
\begin{tikzcd}
  X && {S'} \\
  & S
  \arrow["f"', from=1-1, to=2-2]
  \arrow["{f'}", from=1-1, to=1-3]
  \arrow["\nu", from=1-3, to=2-2]
\end{tikzcd}
\]
则有$f'$是拟紧开浸入且$\nu$整。特别的$f$拟仿射；

(ii)若$S$拟紧拟分离，则存在分解
\[
\begin{tikzcd}
  X && T \\
  & S
  \arrow["f"', from=1-1, to=2-2]
  \arrow["j", from=1-1, to=1-3]
  \arrow["\pi", from=1-3, to=2-2]
\end{tikzcd}
\]
使得$j$是拟紧开浸入且$\pi$有限。
:::

::: proof
(i)根据 @027 得到这是显然的；

(ii)考虑(i)里的分解$X\to S'\to S$，
设$\nu_*\mathscr{O}_{S'}=\varinjlim_i\mathscr{A}_i$为有限$\mathscr{O}_S$-子代数的余极限（因为
$\nu_*\mathscr{O}_{S'}$
已经是整的了），
则$\pi_i=T_i:=\underline{\operatorname{Spec}}_S\mathscr{A}_i\to S$是有限的且$T_i$
之间的转换映射是仿射的。
根据一些极限技巧得知存在$j$使得$X\to T_j$是浸入且拟紧，
则可以分解为$X\to T\to T_j$其中$X\to T$开浸入且$T\to T_j$闭浸入。成立。
:::
