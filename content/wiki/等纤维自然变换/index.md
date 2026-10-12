---
title: 等纤维自然变换
aliases: [Rezk 等纤维判别]
categories: [范畴论]
---

**等纤维自然变换**是一类[[自然变换]]，
把[[态射]]都变成[[拉回方块]]。此概念由 [[Charles Rezk]]
提出，主要用于讨论图表的[[余极限]]与[[拉回 (范畴论)|拉回]]的交换性
（@rezk）。

## 定义

::: definition {@def}
设 $I$、$\mathcal{C}$ 是[[范畴]]，$X,Y\colon I\to\mathcal{C}$
是[[函子]]，$\tau\colon X\to Y$ 是[[自然变换]]。称 $\tau$
为**等纤维**，或称其 **Descartes**，指对 $I$
中任一态射 $f\colon i\to j$，$\mathcal{C}$ 中图表
\[
\begin{tikzcd}
  X(i)\ar[r,"X(f)"]\ar[d,"\tau(i)"']&X(j)\ar[d,"\tau(j)"]\\
  Y(i)\ar[r,"Y(f)"']&Y(j)
\end{tikzcd}
\]
都是[[拉回方块]]。
:::

## 性质

以下两个命题显然。

::: proposition
设 $I$、$J$、$\mathcal{C}$ 是范畴，
$X,Y\colon I\to\mathcal{C}$、$F\colon J\to I$ 是函子，
$\tau\colon X\to Y$ 是[[自然变换]]。如 $\tau$
等纤维，则 $F^*\tau\colon X\circ F\to Y\circ F$
也等纤维。
:::

::: proposition {@pbeq}
设 $I$、$\mathcal{C}$ 是范畴，
$X,Y,Z,W\colon I\to\mathcal{C}$ 是函子，图表
\[
\begin{tikzcd}
  Z\ar[r]\ar[d,"\sigma"']&X\ar[d,"\tau"]\\
  W\ar[r]&Y
\end{tikzcd}
\]
是函子范畴 $\mathsf{Fun}(I,\mathcal{C})$ 中的[[拉回方块]]。
如 $\tau$ 等纤维，则 $\sigma$ 也等纤维。
:::

由[[三拉回引理]]立得下面三个命题：

::: proposition
设 $I$、$\mathcal{C}$ 是范畴，$X,Y,Z\colon I\to\mathcal{C}$
是函子，$\tau\colon X\to Y$、$\sigma\colon Y\to Z$
是自然变换，$\sigma$ 等纤维。则 $\tau$ 等纤维当且仅当
$\sigma\circ\tau$ 等纤维。
:::

::: proposition {@mapgen}
设 $I$、$\mathcal{C}$ 是范畴，$X,Y\colon I\to\mathcal{C}$
是函子，$\tau\colon X\to Y$ 是[[自然变换]]。设 $J$
是 $I$ 中一些映射，在有限复合下生成 $I$。则只要对 $J$
中映射 $f\colon i\to j$，@def 中图表都是拉回方块，
就有 $\tau$ 是等纤维自然变换。
:::

::: proposition
设 $I$、$\mathcal{C}$ 是范畴，$I$ 有[[终对象]] $*$，
$X,Y\colon I\to\mathcal{C}$ 是函子，
$\tau\colon X\to Y$ 是[[自然变换]]。则只要对 $I$
中任一对象 $i$，图表
\[
\begin{tikzcd}
  X(i)\ar[r]\ar[d,"\tau(i)"']&X(*)\ar[d,"\tau(*)"]\\
  Y(i)\ar[r]&Y(*)
\end{tikzcd}
\]
都是[[拉回方块]]，就有 $\tau$ 是等纤维自然变换。
:::

::: corollary
设 $\mathbb{\Delta}$ 是[[单形范畴]]，$\mathcal{C}$ 是范畴，
$X,Y\colon\mathbb{\Delta}^\mathrm{op}\to\mathcal{C}$ 是[[单纯对象]]，
$\tau\colon X\to Y$ 是自然变换。则只要对任一 $n\in\mathbb{Z}_+$
以及任一面映射 $d_i$，$i=0,1,\ldots,n$，
图表
\[
\begin{tikzcd}
  X_n\ar[r,"d_i"]\ar[d,"\tau_n"']&X_{n-1}\ar[d,"\tau_{n-1}"]\\
  Y_n\ar[r,"d_i"']&Y_{n-1}
\end{tikzcd}
\]
都是拉回方块，就有 $\tau$ 是等纤维自然变换。
:::

::: proof
由 @mapgen，只需验证对任一 $n\in\mathbb{N}$ 以及任一退化映射
$s_i$，$i=0,1,\ldots,n$，图表
\[
\begin{tikzcd}
  X_n\ar[r,"s_i"]\ar[d,"\tau_n"']&X_{n+1}\ar[d,"\tau_{n+1}"]\\
  Y_n\ar[r,"s_i"']&Y_{n+1}
\end{tikzcd}
\]
都是拉回方块。为此对图表
\[
\begin{tikzcd}
  X_n\ar[r,"s_i"]\ar[d,"\tau_n"']&X_{n+1}\ar[d,"\tau_{n+1}"]\ar[r,"d_i"]&X_n\ar[d,"\tau_n"]\\
  Y_n\ar[r,"s_i"']&Y_{n+1}\ar[r,"d_i"']&Y_n
\end{tikzcd}
\]
用三拉回引理即可，因为 $d_i\circ s_i=\operatorname{id}$。
:::

## 与直化的关系

以下[[范畴]]都指 [[$(\infty,1)$-范畴]]。注意上面的内容也对
$(\infty,1)$-范畴一字不差地成立。

对 $(\infty,1)$-范畴 $\mathcal{C}$，
以 $|\mathcal{C}|$ 表示 $\mathcal{C}$ 的几何实现，
即把 $\mathcal{C}$ 的所有映射逆掉得到的[[生象]]。

回顾[[局部常纤维范畴]]的定义与性质，证明参见对应条目：

::: definition [局部常纤维化]
称[[左纤维化]]（即纤维都是[[生象]]的[[推出纤维化]]）
$\mathcal{C}\to\mathcal{D}$ **局部常**，
指 $\mathcal{D}$ 中任一态射 $f\colon x\to y$
在纤维上诱导的映射 $f_!\colon\mathcal{C}_x\to\mathcal{C}_y$
都是同构，换言之其[[直化]] $\mathcal{D}\to\mathsf{Ani}$
穿过 $|\mathcal{D}|$，也即其可由 $|\mathcal{D}|$
上的左纤维化拉回得到。
:::

::: proposition {@lc=pb}
左纤维化 $p\colon\mathcal{C}\to\mathcal{D}$ 局部常当且仅当
\[
\begin{tikzcd}
  \mathcal{C}\ar[d,"p"']\ar[r]&{|\mathcal{C}|}\ar[d,"|p|"]\\
  \mathcal{D}\ar[r]&{|\mathcal{D}|}
\end{tikzcd}
\]
是范畴的拉回方块。此时如
\[
\begin{tikzcd}
  \mathcal{C}\ar[d,"p"']\ar[r]&C\ar[d,"\bar{p}"]\\
  \mathcal{D}\ar[r]&{|\mathcal{D}|}
\end{tikzcd}
\]
是范畴的拉回方块，则 $(C,\bar{p})=(|\mathcal{C}|,|p|)$。
:::

回忆左纤维化有类似[[三拉回引理]]的性质：对函子
$p\colon\mathcal{C}\to\mathcal{D}$ 和左纤维化
$q\colon\mathcal{D}\to\mathcal{E}$，
$p$ 是左纤维化当且仅当 $q\circ p$ 是左纤维化。

::: theorem {@ef=lc}
设 $I$ 是范畴，$X,Y\colon I\to\mathsf{Ani}$ 是函子，左纤维化
$\mathcal{X}\to I$、$\mathcal{Y}\to I$ 是其[[反直化]]。
设 $\tau\colon X\to Y$ 是自然变换，那么其反直化
$\operatorname{Un}(\tau)\colon\mathcal{X}\to\mathcal{Y}$ 也是左纤维化。
则 $\tau$ 等纤维当且仅当 $\operatorname{Un}(\tau)$ 局部常。
:::

::: proof
任取 $\mathcal{Y}$ 中态射，依反直化的构造这对应于
$I$ 中态射 $f\colon i\to j$ 与点 $y_i\in Y(i)$，
被 $Y(f)$ 打到 $y_j\in Y(j)$，也就是图表
\[
\begin{tikzcd}
  *\ar[r]\ar[d,"y_i"']&*\ar[d,"y_j"]\\
  Y(i)\ar[r,"Y(f)"']&Y(j)
\end{tikzcd}
\]
注意 $\operatorname{Un}(\tau)\colon\mathcal{X}\to\mathcal{Y}$ 在 $(Y(i),y_i)$
的纤维是 $X(i)\times_{Y(i)}*$，在 $(Y(j),y_j)$
的纤维是 $X(j)\times_{Y(j)}*$，沿上述态射的前推是图表
\[
\begin{tikzcd}
  X(i)\times_{Y(i)}*\ar[rr,"X(f)\times_{Y(f)}*"]\ar[rd]\ar[dd]&&X(j)\times_{Y(j)}*\ar[rd]\ar[dd]&\\
  &*\ar[rr,crossing over]\ar[dd,crossing over,"y_i"',near start]&&*\ar[dd,"y_j"]\\
  X(i)\ar[rr,"X(f)",near start]\ar[rd,"\tau(i)"']&&X(j)\ar[rd,"\tau(j)"]&\\
  &Y(i)\ar[rr,"Y(f)"']&&Y(j)
\end{tikzcd}
\]
最上方的映射 $X(f)\times_{Y(f)}*$。于是 $\operatorname{Un}(\tau)$
局部常等价于所有映射 $X(f)\times_{Y(f)}*$ 都是同构，
也就等价于 $\tau$ 等纤维。
:::

回忆对 $X\colon I\to\mathsf{Ani}$ 有 $\operatornamewithlimits{colim}_IX=\mathopen|
\operatorname{Un}(X)\mathclose|$，以下推论就是显然的。

::: corollary {@colim=pb}
设 $I$ 是范畴，$I^\triangleright$ 是其右锥，
以 $\infty$ 记其锥点。设
$X^\triangleright,Y^\triangleright\colon
I^\triangleright\to\mathsf{Ani}$ 是函子，
$\tau^\triangleright\colon
X^\triangleright\to Y^\triangleright$ 是自然变换，
并以 $X$、$Y$、$\tau$ 记它们在 $I\subset I^\triangleright$
的限制。设 $\tau$ 等纤维，$Y^\triangleright$ 是[[余极限]]图表。
则 $X^\triangleright$ 是余极限图表当且仅当
\[
\begin{tikzcd}
  \operatorname{Un}(X)\ar[d,"\operatorname{Un}(\tau)"']\ar[r]&X(\infty)\ar[d,"\tau(\infty)"]\\
  \operatorname{Un}(Y)\ar[r]&Y(\infty)
\end{tikzcd}
\]
是范畴的拉回图表，这里 $X(\infty)$ 表示
$X^\triangleright(\infty)$，$\operatorname{Un}(X)\to X(\infty)$
是复合映射
$$
\operatorname{Un}(X)\to\mathopen|\operatorname{Un}(X)\mathclose|
=\operatornamewithlimits{colim}_IX\to X(\infty),
$$
余类似。
:::

## 与余极限的关系

本节仍然约定：[[范畴]]指 [[$(\infty,1)$-范畴]]，[[意象]]指
[[$(\infty,1)$-意象]]。

::: theorem [Rezk 等纤维判别] {@rezk}
设 $I$ 是范畴，$X,Y,Z,W\colon I\to\mathsf{Ani}$ 是函子，
\[
\begin{tikzcd}
  Z\ar[r]\ar[d,"\sigma"']&X\ar[d,"\tau"]\\
  W\ar[r]&Y
\end{tikzcd}
\]
是函子范畴 $\mathsf{Fun}(I,\mathsf{Ani})$ 中的拉回方块。如 $\tau$
等纤维，则图表
\[
\begin{tikzcd}
  \operatornamewithlimits{colim}_IZ\ar[r]\ar[d,"\operatornamewithlimits{colim}_I\sigma"']&\operatornamewithlimits{colim}_IX\ar[d,"\operatornamewithlimits{colim}_I\tau"]\\
  \operatornamewithlimits{colim}_IW\ar[r]&\operatornamewithlimits{colim}_IY
\end{tikzcd}
\]
是[[生象]]的拉回方块。
:::

::: proof
作右锥 $I^\triangleright$，并记锥点为 $\infty$。
把 $X,Y,Z,W\colon I\to\mathsf{Ani}$ 延拓为
$X^\triangleright,Y^\triangleright,Z^\triangleright,
W^\triangleright\colon I^\triangleright\to\mathsf{Ani}$，
使得 $X^\triangleright$、$Y^\triangleright$、
$W^\triangleright$ 为余极限图表，而 $Z^\triangleright$
为它仨的拉回。我们需要证明 $Z^\triangleright$ 也是余极限图表。
为此考虑范畴的交换图表
\[
\begin{tikzcd}
  \operatorname{Un}(Z)\ar[rr]\ar[rd]\ar[dd,"\operatorname{Un}(\sigma)"']&&\operatorname{Un}(X)\ar[rd]\ar[dd,"\operatorname{Un}(\tau)",near start]&\\
  &Z(\infty)\ar[rr,crossing over]\ar[dd,crossing over,"\sigma(\infty)"',near start]&&X(\infty)\ar[dd,"\tau(\infty)"]\\
  \operatorname{Un}(W)\ar[rr]\ar[rd]&&\operatorname{Un}(Y)\ar[rd]&\\
  &W(\infty)\ar[rr]&&Y(\infty)
\end{tikzcd}
\]
记号同 @colim=pb。图表的正面显然是拉回；
由反直化保持拉回，背面也是拉回；由 @colim=pb，
右面是拉回；故由三拉回引理，左面也是拉回，
再用一次 @colim=pb 即得欲证，因 $\sigma$
等纤维（@pbeq）。
:::

::: remark
事实上 @rezk 对一般的[[意象]]而不只是生象范畴
$\mathsf{Ani}$ 成立：首先由于预层的极限和余极限都逐截面计算，
可知 @rezk 对预层意象成立；对一般的意象
$\mathcal{C}$，可取预层意象 $\mathsf{P}(\mathcal{C}_0)$
以及几何态射 $f\colon\mathcal{C}\to\mathsf{P}(\mathcal{C}_0)$
使得 $f^*f_*=\operatorname{id}_{\mathcal{C}}$，然后对 $\mathcal{C}$
中拉回图表
\[
\begin{tikzcd}
  Z\ar[r]\ar[d,"\sigma"']&X\ar[d,"\tau"]\\
  W\ar[r]&Y
\end{tikzcd}
\]
做 $f_*$；由于 $f^*$ 保持任意余极限和有限极限，
一般情形便化归到预层情形。
:::

```terms
等纤维自然变换:
  en: equifibred natural transformation
  en-us: equifibered natural transformation
```
