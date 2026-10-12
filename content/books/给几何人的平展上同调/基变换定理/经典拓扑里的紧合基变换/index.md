---
title: 经典拓扑里的紧合基变换
---

::: definition
连续映射$f:X\to S$称为紧合的如果$f$是万有闭的且$\Delta:X\to X\times_SX$是闭映射。
如果$f$紧合当且仅当紧集的逆像仍然是紧的，我们称$f$是拟紧合（更多的参考[@StacksProject, Tag 005M]）。
:::

::: lemma {@015}
设$f:X\to Y$是紧合映射，则对于任何$X$上的层$\mathscr{F}$和点$y\in Y$都有
\[
(Rf_*\mathscr{F})_y\cong R\Gamma(X_y,\mathscr{F}|_{X_y}),
\]
其中$X_y=f^{-1}(y)$。
:::

::: proof
我们需要如下结论（参考[@StacksProject, Tag 09V3]）：

$\bullet$ 设$Z$是空间$X$的紧子集使得任何两个$Z$内的点都有$X$内的不交开邻域包含它们，则
对层$\mathscr{F}\in\operatorname{Ab}(X)$都有
$\varinjlim_{U\supset Z} H^r(U,\mathscr{F})\cong H^r(Z,\mathscr{F}|_Z)$。

回到引理本身。
取内射预解用伴随性不难得到映射$(Rf_*\mathscr{F})_y\to R\Gamma(X_y,\mathscr{F}|_{X_y})$。
取内射预解$\mathscr{F}\hookrightarrow\mathscr{I}^*$，
由于$\mathscr{I}^*|_{X_y}$是$\Gamma(X_y,-)$-零调的，
故$R\Gamma(X_y,\mathscr{F}|_{X_y})$可被$\Gamma(X_y,\mathscr{I}^*|_{X_y})$表示，
故只需证明同构
\[
\varinjlim_{V}\mathscr{I}^*(f^{-1}(V))\cong \Gamma(X_y,\mathscr{I}^*|_{X_y}).
\]
注意到如果$X_y\subset U$是开邻域，由于$f$闭，
则设$V=Y\backslash f(X\backslash U)$就得到$f^{-1}(V)\subset U$，进而
此系统共尾，因此根据上述结论即可得到结论。
:::

::: theorem [拓扑紧合基变换] {@TopProperBaseCh}
设$f:X\to Y$是紧合的映射，设$g:Y'\to Y$是连续映射，考虑纤维积
\[
\begin{tikzcd}
  {X':=X\times_YY'} & X \\
  Y' & Y
  \arrow["g", from=2-1, to=2-2]
  \arrow["f"', from=1-2, to=2-2]
  \arrow["{f'}"', from=1-1, to=2-1]
  \arrow["{g'}", from=1-1, to=1-2]
  \arrow["\ulcorner"{anchor=center, pos=0.125}, draw=none, from=1-1, to=2-2]
\end{tikzcd}
\]
则对层$\mathscr{F}\in\operatorname{Ab}(X)$都有
$g^{-1}(Rf_*\mathscr{F})\cong Rf_*'((g')^{-1}\mathscr{F})$。
:::

::: proof
取内射预解用伴随性不难得到所述映射，故只需在茎上证明同构即可。
取$y'\in Y'$在$y\in Y$上，根据 @015 得到同构
\[
(Rf_*'((g')^{-1}\mathscr{F}))_{y'}=R\Gamma((f')^{-1}(y'),(g')^{-1}\mathscr{F}|_{(f')^{-1}(y')})
\]
和
\[
(Rf_*\mathscr{F})_y=R\Gamma(f^{-1}(y),\mathscr{F}|_{f^{-1}(y)})
\]
于是同构是显然的，故成立。
:::
