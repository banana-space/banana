---
title: 逆像
---

::: definition
考虑概形映射$f:X\to Y$，设$\mathscr{F}\in\operatorname{Sh}(Y_{\operatorname{ét}})$，定义逆像为
\[
f^{-1}\mathscr{F}=\left((U\to X)\mapsto\varinjlim_{U\to X\times_YV}\mathscr{F}(V\to Y)\right)^{\sharp}.
\]
:::

::: proposition
考虑概形映射$f:X\to Y$，则

(i)有伴随函子$(f^{-1},f_*)$；

(ii)函子
$f^{-1}:\operatorname{Sh}(Y_{\operatorname{ét}})\to \operatorname{Sh}(X_{\operatorname{ét}})$和
$f^{-1}:\operatorname{Ab}(Y_{\operatorname{ét}})\to\operatorname{Ab}(X_{\operatorname{ét}})$正合；

(iii)对几何点$\bar{x}\to X$和$\mathscr{F}\in\operatorname{Sh}(Y_{\operatorname{ét}})$，
设$\bar{y}=\bar{x}\to X\to Y$，则
$(f^{-1}\mathscr{F})_{\bar{x}}\cong\mathscr{F}_{\bar{y}}$；

(iv)对$g:Y\to Z$，有$(g\circ f)^{-1}=f^{-1}\circ g^{-1}$；

(v)对平展映射$V\to Y$，有$f^{-1}h_V=h_{X\times_YV}$。
:::

::: proof
(i)(ii)略去。(iv)和(v)由伴随性和Yoneda引理显然。考虑(iii)，注意到
\[
\begin{aligned}
(f^{-1}\mathscr{F})_{\bar{x}}&=\varinjlim_{(U,\bar{u})}(f^{-1}\mathscr{F})(U)\\
&=\varinjlim_{(U,\bar{u})}\varinjlim_{a:U\to X\times_YV}\mathscr{F}(V)\\
&=\varinjlim_{(V,a\circ\bar{u})}\mathscr{F}(V)=\mathscr{F}_{\bar{y}}
\end{aligned}
\]
即可。
:::

::: proposition [基变换] {@PushPull}
考虑纤维积
\[
\begin{tikzcd}
  {X'} & X \\
  {Y'} & Y
  \arrow["g", from=2-1, to=2-2]
  \arrow["f", from=1-2, to=2-2]
  \arrow["{f'}"', from=1-1, to=2-1]
  \arrow["{g'}", from=1-1, to=1-2]
  \arrow["\ulcorner"{anchor=center, pos=0.125}, draw=none, from=1-1, to=2-2]
\end{tikzcd}
\]
其中$f$有限，则$f'_*\circ (g')^{-1}=g^{-1}\circ f_*$。
:::

::: proof
只需验证茎即可。
注意到纤维积，
对$\mathscr{F}\in\operatorname{Sh}(X_{\operatorname{ét}})$考虑几何点
$\bar{y}':\operatorname{Spec} k\to Y'$，我们有
\[
\begin{aligned}
(f_*'(g')^{-1}(\mathscr{F}))_{\bar{y}'}&=\prod_{\bar{x}':\operatorname{Spec} k\to X',f'\circ\bar{x}'=\bar{y}'}((g')^{-1}(\mathscr{F}))_{\bar{x}'}\\
&=\prod_{\bar{x}':\operatorname{Spec} k\to X',f'\circ\bar{x}'=\bar{y}'}\mathscr{F}_{g'\circ\bar{x}'}\\
&=\prod_{\bar{x}:\operatorname{Spec} k\to X,f\circ\bar{x}=g\circ\bar{y}'}\mathscr{F}_{\bar{x}}=(f_*\mathscr{F})_{g\circ\bar{y}'}=(g^{-1}f_*\mathscr{F})_{\bar{y}'}
\end{aligned}
\]
得到结论。
:::
