---
title: 光滑基变换一瞥
---

::: theorem [光滑基变换]
对概形映射$f:X\to S$和挠群$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$使得挠阶数在$S$
内可逆。对于纤维积
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
其中$S'=\varprojlim_{\lambda}S_{\lambda}$为光滑$S$概形$S_{\lambda}$构成的逆系统满足转移映射
$S_{\lambda'}\to S_{\lambda}$是仿射的，
因此有典范同构
\[
g^{-1}R^if_*\mathscr{F}\cong R^if'_*(g')^{-1}\mathscr{F}.
\]
:::

这个定理的证明非常之复杂，需要用到太多的技术和技巧，想学的读者请参考笔记
（[smooth-base-change](https://people.math.harvard.edu/~landesman/assets/smooth-base-change.pdf)）或者
[@StacksProject, Tag 0EYQ]。这个也对任何$E\in D^+(X_{\operatorname{ét}})$满足$H^q(E)$是的
茎的挠系数在$S$可逆的复形都成立。
