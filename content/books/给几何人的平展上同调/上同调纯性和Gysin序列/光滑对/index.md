---
title: 光滑对
---

::: definition
对概形$S$，定义光滑$S$-对$(Z,X)$为光滑$S$-概形间的闭嵌入。
一般考虑如下图表：
\[
\begin{tikzcd}
  Z & X & U \\
  & S
  \arrow["f", from=1-2, to=2-2]
  \arrow["h"', from=1-1, to=2-2]
  \arrow["g", from=1-3, to=2-2]
  \arrow["i", hook, from=1-1, to=1-2]
  \arrow["j"', hook', from=1-3, to=1-2]
\end{tikzcd}
\]
其中$i$是闭浸入且$j:U:=X\backslash Z\to X$是开浸入。称光滑$S$-对$(Z,X)$是余维数$c$的，如果
对任何$s\in S$都有纤维$Z_s$在$X_s$里纯余维数$c$。

光滑$S$-对之间的态射$\phi:(Z',X')\to(Z,X)$定义为$S$-映射$\phi:X'\to X$且满足$Z'=Z\times_XX'$。
:::

::: remark
对于余维数$c$的光滑$S$-对$(Z,X)$和任意$z\in Z$，存在开邻域$z\in V\subset X$使得有平展映射
\[
V\stackrel{\operatorname{ét}}{\longrightarrow}\mathbb{A}_S^m=\underline{\operatorname{Spec}}_S\mathscr{O}_S[T_1,...,T_m]
\]
使得$Z\cap V$为$\underline{\operatorname{Spec}}_S\mathscr{O}_S[T_1,...,T_m]/(T_{m-c+1},...,T_m)$
的逆像。因此
局部上可以平展地写成标准光滑$S$-对$(\mathbb{A}_S^{m-c},\mathbb{A}_S^m)$。
:::
