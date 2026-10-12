---
title: cd 结构
aliases: [Cd 结构]
categories: [层论, 母题同伦论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。

:::

**cd 结构**是由 [[Vladimir Voevodsky]] 引入的一种范畴论结构。
被这种结构诱导的 [[Grothendieck 拓扑]]其[[层公理]]比较容易检验。
“cd”表示“completely decomposable”，即“可完全分解”。

## 定义

::: definition
小范畴 $\mathcal{C}$ 上的 **cd 结构**是其一族方形交换图表。
严格地说，$\mathcal{C}$ 上的一个 cd 结构是一个[[满子范畴]]
$\chi\subseteq\mathsf{Fun}([1]^2,\mathcal{C})$。
:::

::: definition
设 $\chi$ 是范畴 $\mathcal{C}$ 上的 cd 结构。则 **$\chi$
诱导的 Grothendieck 拓扑**，记作 $\tau_\chi$，指的是对
$\chi$ 中每个交换图表
\[
\begin{tikzcd}
  W\ar[r]\ar[d]&V\ar[d]\\
  U\ar[r]&X
\end{tikzcd}
\]
令 $(U\to X,V\to X)$ 为覆盖族，生成的 Grothendieck 拓扑。
:::

::: definition
设 $\mathcal{C}$ 是小范畴，$\mathcal{D}$ 是完备范畴，$\chi$ 是 $\mathcal{C}$ 上的
cd 结构，$F\colon\mathcal{C}^\mathrm{op}\to\mathcal{D}$ 是函子。称 $F$ 满足
**$\chi$-切除**，意思是 $F$ 把 $\chi$
中的图表都变成 $\mathcal{D}$ 中的拉回图表。称 $F$ 满足
**$\chi$-下降**，意思是 $F$ 是 $\tau_\chi$-层。
:::

::: remark {@条件}
以下将会对小范畴 $\mathcal{C}$ 及其 cd 结构 $\chi$ 提如下条件：

1. {@complete} $\mathcal{C}$ 有所有的拉回且
   $\chi$ 对拉回封闭。这里指的是对任意
   $$
   Q=\begin{tikzcd}
     W\ar[r]\ar[d]&V\ar[d]\\
     U\ar[r]&X
   \end{tikzcd}\in\chi
   $$
   及映射 $Y\to X$，都有
   $$
   Q\times_XY=\begin{tikzcd}
     W\times_XY\ar[r]\ar[d]&V\times_XY\ar[d]\\
     U\times_XY\ar[r]&Y
   \end{tikzcd}\in\chi.
   $$

2. {@regular} 在 @complete 的基础上，
   $\chi$ 由拉回图表构成；对任意
   $$
   Q=\begin{tikzcd}
     W\ar[r]\ar[d]&V\ar[d]\\
     U\ar[r]&X
   \end{tikzcd}\in\chi,
   $$
   存在整数 $n$ 使得 $U\to X$ 和 $V\to X$ 都是
   [[$n$-截断]]映射，而且
   $$
   \begin{tikzcd}
     W\ar[r]\ar[d,"\Delta_{W/U}"']&V\ar[d,"\Delta_{V/X}"]\\
     W\times_UW\ar[r]&V\times_XV
   \end{tikzcd},\begin{tikzcd}
     W\ar[r,"\Delta_{W/V}"]\ar[d]&W\times_VW\ar[d]\\
     U\ar[r,"\Delta_{U/X}"']&U\times_XU
   \end{tikzcd}\in\chi.
   $$

:::

## 性质

::: theorem [Voevodsky]
设 $\chi$ 是范畴 $\mathcal{C}$ 上的 cd 结构。如它满足 @条件 的 @complete，则 $\chi$-切除推出
$\chi$-下降。如它满足 @条件 的 @regular，
则 $\chi$-切除与 $\chi$-下降等价。
:::

::: proof
对每个
$$
Q=\begin{tikzcd}
  W\ar[r]\ar[d]&V\ar[d]\\
  U\ar[r]&X
\end{tikzcd}\in\chi,
$$
考虑预层范畴 $\mathsf{P}(\mathcal{C})$ 中的两个自然映射
$$
e_Q\colon h_U\sqcup_{h_W}{h_V}\to h_X,\,
c_Q\colon\operatorname*{colim}_{n\in\mathbb{\Delta}^\mathrm{op}}(h_U\sqcup h_V)^{\times_{h_X}(n+1)}\to h_X,
$$
其中 $h_X$ 表示 [[Yoneda 预层]]。记
$$
E_\chi=\{e_Q\mid Q\in\chi\},\,
C_\chi=\{c_Q\mid Q\in\chi\},
$$
我们需要比较 $\mathsf{P}(\mathcal{C})$ 关于这两族映射的 Bousfield 局部化。
以 $\overline{E_\chi}$、$\overline{C_\chi}$ 记在相应的
Bousfield 局部化之后可逆的映射之族，则它们分别包含
$E_\chi$、$C_\chi$ 且对余极限封闭。考察交换图
\[
\begin{tikzcd}
  (h_U\sqcup_{h_W}h_V)\times_{h_X}\operatorname*{colim}_{n\in\mathbb{\Delta}^\mathrm{op}}(h_U\sqcup h_V)^{\times_{h_X}(n+1)}\ar[r,"\sim"]\ar[d,"f_Q"']&h_U\sqcup_{h_W}h_V\ar[d,"e_Q"]\\
  \operatorname*{colim}_{n\in\mathbb{\Delta}^\mathrm{op}}(h_U\sqcup h_V)^{\times_{h_X}(n+1)}\ar[r,"c_Q"']&h_X
\end{tikzcd}
\]
注意上边的映射是同构，因为它是映射 $h_U\sqcup h_V\to h_X$
的 [[Čech 脉]]基变换到 $h_U$、$h_V$、$h_W$ 然后作推出，
而这三个基变换都有截面，Čech 脉都是同构。故
$e_Q\in\overline{C_\chi}$ 当且仅当 $f_Q\in\overline{C_\chi}$，
$c_Q\in\overline{E_\chi}$ 当且仅当 $f_Q\in\overline{E_\chi}$。

注意 $f_Q$ 是 $e_Q$ 沿着一些可表映射的基变换的余极限。
如 $\chi$ 满足 @条件 的 @complete，
则这些基变换也都属于 $E_\chi$，故
$f_Q\in\overline{E_\chi}$，从而
$c_Q\in\overline{E_\chi}$。

设 $\chi$ 满足 @条件 的 @regular。
我们来对整数 $n,m\ge-2$ 归纳证明，若 $U\to X$ 为
$m$-截断，$V\to X$ 为 $n$-截断，则 $e_Q\in\overline{C_\chi}$。
由前面的分析，这等价于证明 $f_Q\in\overline{C_\chi}$。
$m$ 或 $n$ 等于 $-2$ 时为显然，因为此时 $e_Q$ 是同构。
现设它们大于 $-2$。考察交换图
\[
\begin{tikzcd}
  W\ar[r,"\Delta_{W/V}"]\ar[d]&W\times_VW\ar[r,"\operatorname{pr}_1"]\ar[d]&W\ar[d]\\
  U\ar[r,"\Delta_{U/X}"']&U\times_XU\ar[r,"\operatorname{pr}_1"']&U
\end{tikzcd}
\]
注意其右方块就是 $Q$ 沿 $U\to X$ 的基变换 $Q_U$。
由条件，左方块属于 $\chi$；而映射 $\Delta_{U/X}$ 比映射
$U\to X$ 更截断，故由归纳假设，左方块的映射 $e$ 是同构。
换言之，左方块在 [[Yoneda 嵌入]]并层化之后是推出方块，而大方块在
Yoneda 嵌入之后显然是推出方块，故右方块在 Yoneda
嵌入并层化之后也是推出方块，即 $e_{Q_U}\in\overline{C_\chi}$。
同理 $e_{Q_V}\in\overline{C_\chi}$。由于 $\chi$
对基变换封闭，我们可对上面的交换图沿任何映射 $Y\to U$
基变换然后做同样的论证，所以只要映射 $Y\to X$ 穿过 $U$
或者 $V$，就有 $e_{Q_Y}\in\overline{C_\chi}$。而
$f_Q$ 正是这样一些 $e_{Q_Y}$ 的余极限，故
$f_Q\in\overline{C_\chi}$，从而 $e_Q\in\overline{C_\chi}$。

所以，如 $\chi$ 满足 @条件 的 @complete，
则 $\mathsf{P}(\mathcal{C})$ 关于 $C_\chi$ 的 Bousfield 局部化穿过其关于
$E_\chi$ 的 Bousfield 局部化；如 $\chi$ 满足 @条件 的 @regular，则两个 Bousfield 局部化一样。
这显然推出定理，因为预层 $F\colon\mathcal{C}^\mathrm{op}\to\mathcal{D}$ 可视为连续函子
$F\colon\mathsf{P}(\mathcal{C})^\mathrm{op}\to\mathcal{D}$，而依定义它满足
$\chi$-切除当且仅当它穿过 $\mathsf{P}(\mathcal{C})$ 关于 $E_\chi$
的 Bousfield 局部化，它满足 $\chi$-下降当且仅当它穿过
$\mathsf{P}(\mathcal{C})$ 关于 $C_\chi$ 的 Bousfield 局部化。
:::

```terms
cd 结构:
  en: cd-structure
切除:
  en: excision
下降:
  en: descent
```
