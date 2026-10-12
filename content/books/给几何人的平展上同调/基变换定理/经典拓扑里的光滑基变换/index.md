---
title: 经典拓扑里的光滑基变换
---

::: definition
我们称拓扑空间间的连续映射$f:X\to Y$是光滑的，如果对任何$x\in X$，
存在其开邻域同胚于$U\times [0,1]^n$，其中$U$是$f(x)$的开邻域。
:::

::: theorem [拓扑的光滑基变换]
对任何$\mathscr{F}\in\operatorname{Loc}(X)$和纤维积
\[
\begin{tikzcd}
  {X'=X\times_SS'} & X \\
  {S'} & S
  \arrow["{f'}"', from=1-1, to=2-1]
  \arrow["g", from=2-1, to=2-2]
  \arrow["{g'}", from=1-1, to=1-2]
  \arrow["f"', from=1-2, to=2-2]
  \arrow["\ulcorner"{anchor=center, pos=0.125}, draw=none, from=1-1, to=2-2]
\end{tikzcd}
\]
如果$g$光滑，则有$g^{-1}R^if_*\mathscr{F}\cong R^if'_*(g')^{-1}\mathscr{F}$。
:::

::: proof
映射类似于拓扑紧合基变换，由于高阶直像可以是上同调群的层化，我们只需证明
\[
H^i(X\times[0,1]^n,(g')^{-1}\mathscr{F})\cong H^i(X,\mathscr{F}).
\]
因为有同伦等价$X\times[0,1]^n\simeq X$，如果局部系的上同调在同伦等价下不变，我们就得到结论。

我们只需证明若$h_0,h_1:Y'\rightrightarrows Y$是同伦的映射，
那么会诱导相同的$H^i(Y,\underline{A})\to H^i(Y',\underline{A})$，
其中$\underline{A}$是常值Abel群层。
设同伦为$F:[0,1]\times Y'\to Y$使得$F|_{0\times Y}=f_0,F|_{1\times Y}=f_1$。
取$j_t:Y'\to Y'\times[0,1]$为$y'\mapsto(t,y')$，则有$f_0=F\circ j_0,f_1=F\circ j_1$，因此只需证明
对任何$t\in[0,1]$，
映射$j_t$都诱导相同的$H^i(Y'\times[0,1],\underline{A})\to H^i(Y',\underline{A})$。
考虑$\pi:[0,1]\times Y'\to Y'$为自然投影，则有$\pi\circ j_t=\mathrm{id}_{Y'}$，
因此只需要考虑$\pi$诱导上同调群同构。

根据Leray谱序列有
$E_2^{p,q}=H^p(Y',R^q\pi_*\underline{A})\Rightarrow H^{p+q}([0,1]\times Y',\underline{A})$。
根据拓扑的紧合基变换（@-TopProperBaseCh）得到对任意的$y'\in Y'$有自然同构
$R^i\pi_*(\underline{A})_{y'}\cong H^i([0,1],\underline{A})$。
由层上同调-奇异上同调比较定理（@-SheafCoh-SingularCoh-Compare）得知当$i>0$时有
\[
H^i([0,1],\underline{A})\cong H_{\operatorname{sing}}^i([0,1],A)=0.
\]
故有典范同构$\underline{A}\cong \pi_*\underline{A}$且当$i>0$有$R^i\pi_*\underline{A}=0$。
因此Leray谱序列退化，
故而所有边界映射
\[
H^p(Y',\pi_*\underline{A})\to H^p([0,1]\times Y',\underline{A})
\]
是同构。最后，不难验证得到此映射即为：
\[
H^p(Y',\pi_*\underline{A})\to H^p([0,1]\times Y',\pi^{-1}\pi_*\underline{A})\to H^p([0,1]\times Y',\underline{A}),
\]
故而因为$\pi^*\underline{A}\to\pi^{-1}\pi_*\underline{A}\to \underline{A}$是单位，
故边界映射和$\underline{A}\cong \pi_*\underline{A}$诱导的同构即为$\pi$诱导的映射。
:::
