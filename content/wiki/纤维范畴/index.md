---
title: 纤维范畴
aliases: [Grothendieck 纤维化]
categories: [范畴论]
navboxes: [范畴论]
---

在[[范畴论]]中，**纤维范畴**
（也称为 **[[Alexandre Grothendieck|Grothendieck]] 纤维化**）
是[[范畴]]的一种[[纤维化]]，是指形如
\[
p \colon \mathcal{E} \longrightarrow \mathcal{C}
\]
的[[函子]]，满足以下性质：
对 $x \in \mathcal{C}$，
以 $\mathcal{E}_x = p^{-1} (x)$ 记该函子的[[纤维]]。
则 $\mathcal{C}$ 中的任何[[态射]] $f \colon x \to y$
都能以某种方式诱导纤维之间的态射：
\[
\Bigl( \, x \xrightarrow{f} y \, \Bigr)
\quad \xRightarrow{\text{诱导}} \quad
\Bigl( \, \mathcal{E}_y \xrightarrow{f^*} \mathcal{E}_x \, \Bigr).
\]
这种情况在数学中时常出现。
例如，在[[代数几何]]中，对[[概形]] $X$，
可以考虑其[[拟凝聚层]]范畴 $\mathsf{QCoh} (X)$。
则[[概形态射]]诱导拟凝聚层范畴间的函子：
\[
\Bigl( \, X \xrightarrow{f} Y \, \Bigr)
\quad \xRightarrow{\text{诱导}} \quad
\Bigl( \, \mathsf{QCoh} (Y) \xrightarrow{f^*} \mathsf{QCoh} (X) \, \Bigr).
\]
这里，我们将 $\mathcal{E}$ 取为所有 $\mathsf{QCoh} (X)$ 拼起来得到的巨大的范畴，
其中 $X$ 取遍所有概形，这样 $\mathcal{E} \to \mathsf{Sch}$
的纤维就给出了各个 $\mathsf{QCoh} (X)$，这里 $\mathsf{Sch}$ 是概形范畴。

注意到上述直观和[[函子]]的概念十分相似：
我们大概能得到一个“函子”
\[
\begin{aligned}
  F \colon \mathcal{C}^{\mathrm{op}}
  & \longrightarrow \mathsf{Cat},
  \\ x
  & \longmapsto \mathcal{E}_x \, ,
\end{aligned}
\]
其中 $\mathsf{Cat}$ 是[[范畴的范畴]]。
但问题是，$\mathsf{Cat}$ 是个 [[$2$-范畴]]，因此普通的函子的概念并不适用。
在代数几何的例子中，我们也能看出这个问题：

- 考虑概形态射 $f \colon X \to Y$ 和 $g \colon Y \to Z$。
  则我们有函子间的[[自然同构]] $(g \circ f)^* \simeq f^* \circ g^*$，
  但这并不是函子的严格相等。因此，上述 $F$ 并不是通常意义的函子。

这个问题有两种解决方法：

- 使用更高级的 [[$2$-函子]]的概念，因为 $F$ 确实是个 $2$-函子。

- 使用纤维范畴作为这一概念的替代。
  这样，就可以避免 $2$-范畴论而谈论这一类现象。

这即是纤维范畴这一概念的最初动机。
例如，通过纤维范畴可以绕过 $2$-范畴论而定义[[叠]]。

上述的纤维范畴与 $2$-函子之间的对应关系称为 [[Grothendieck 构造]]，也就是指
\[
\{ \mathcal{C} \text{ 上的纤维范畴} \} \Longleftrightarrow
\{ 2\text{-函子 } \mathcal{C}^{\mathrm{op}} \to \mathsf{Cat} \}.
\]

上述构造关于 $\mathcal{C}$ 的对象是[[反变函子|反变]]的，
也就是造出了从 $\mathcal{C}^{\mathrm{op}}$ 出发的 $2$-函子。
我们也可以考虑协变的版本，对应的概念称为[[异纤维范畴]]。
另外，有时也考虑纤维为[[群胚]]的纤维范畴，
称为[[群胚纤维范畴]]、[[群胚异纤维范畴]]。

## 定义

::: definition [$p$-拉回] {@p-拉回}
设 $p \colon \mathcal{E} \to \mathcal{C}$ 为[[范畴]]间的[[函子]]。
则 $\mathcal{E}$ 中态射 $f \colon x \to y$ 称为
**$p$-拉回**，如果有“[[拉回 (范畴论)|拉回]]方块”
\[
\begin{tikzcd}
  x \ar[d, dotted, dash] \ar[r, "f"]
  \ar[dr, phantom, pos=.2, "\ulcorner"]
  & y \ar[d, dotted, dash]
  \\ p(x) \ar[r, "p(f)"]
  & p(y) \rlap{ .}
\end{tikzcd}
\]
准确地说，态射 $f$ 具有以下[[万有性质]]：
对任何实线图表
\[
\begin{tikzcd}[row sep=1em]
  w \ar[dd, dotted, dash]
  \ar[drr, shift left, "g"]
  \ar[dr, dashed, "{\exists ! \, \smash{\tilde{h}}}"'] \\
  & x \ar[dd, dotted, dash] \ar[r, "f"']
  & y \ar[dd, dotted, dash] \\
  p(w) \ar[dr, "h"'] \ar[drr, pos=.6, "p (g)"] \\
  & p(x) \ar[r, "p(f)"']
  & p(y) \rlap{ ,}
\end{tikzcd}
\]
存在唯一的态射 $\tilde h \colon w \to x$，
使得 $f \circ \tilde h = g$ 且 $p(\tilde h)=h$。
:::

::: definition [纤维范畴] {@纤维范畴}
函子 $p \colon \mathcal{E} \to \mathcal{C}$ 称为**纤维范畴**，
如果 @p-拉回 中的“拉回方块”都存在：
\[
\begin{tikzcd}
  & x \ar[d, dotted, dash]
  \\ y' \ar[r, "a"]
  & y
\end{tikzcd}
\quad \Longrightarrow \quad
\begin{tikzcd}
  x' \ar[d, dotted, dash] \ar[r, "\tilde{a}"]
  \ar[dr, phantom, pos=.2, "\ulcorner"]
  & x \ar[d, dotted, dash]
  \\ y' \ar[r, "a"]
  & y \rlap{ .}
\end{tikzcd}
\]
准确地说，对任何 $x \in \mathcal{E}$ 和
$\mathcal{C}$ 中任何态射 $a \colon y' \to y$，
其中 $y = p(x)$，
存在 $\mathcal{E}$ 中态射 $\tilde{a} \colon x' \to x$，
使得 $\tilde{a}$ 是 $p$-拉回（@p-拉回），并且 $p (\tilde{a}) = a$。

此时，我们通常称 $\mathcal{E}$ 是 $\mathcal{C}$ 上的纤维范畴。
:::

::: remark [$p$-弱拉回]
在 @p-拉回 中，
若另要求 \(h\) 只能取为[[恒同态射]] $\mathbb{1}_{p(x)}$，
即仅考虑形如
\[
\begin{tikzcd}
  w \ar[dr, shift left, "g"]
  \ar[d, dashed, "{\exists ! \, \smash{\tilde{h}}}"'] \\
  x \ar[d, dotted, dash] \ar[r, "f"']
  & y \ar[d, dotted, dash] \\
  p(x) \ar[r, "p(f) = p(g)"']
  & p(y) \rlap{,}
\end{tikzcd}
\]
的图表，则满足相应性质的态射 $f$ 称为 **$p$-弱拉回**。
这是 [[Grothendieck]] 对 $p$-拉回的原始定义，
但现代的惯例是使用 @p-拉回。
在纤维范畴的 @纤维范畴 中，可以将 $p$-拉回的存在性替换为以下两条性质：

- $p$-弱拉回都存在。

- $p$-弱拉回的复合仍是 $p$-弱拉回。

则这样的定义等价于 @纤维范畴，
且在纤维范畴中，$p$-弱拉回等价于 $p$-拉回。
:::

## 例子

- [[恒同函子]]都是纤维范畴；
  形如 $\varnothing \to \mathcal{C}$ 的函子都是纤维范畴；
  形如 $\mathcal{E} \to {*}$ 的函子都是纤维范畴。

- 记 $\mathsf{QCoh}$ 为如下范畴：
  其对象为二元组 $(X, \mathcal{F})$，
  其中 $X$ 为[[概形]]，
  $\mathcal{F}$ 为 $X$ 上[[拟凝聚层]]。
  其态射 $(X, \mathcal{F}) \to (Y, \mathcal{G})$
  为二元组 $(f, \alpha)$，其中 $f \colon X \to Y$ 为[[概形态射]]，
  $\alpha \colon \mathcal{F} \to f^* \mathcal{G}$ 为 $X$ 上拟凝聚层的态射。
  则遗忘函子 $\mathsf{QCoh} \to \mathsf{Sch}$ 是纤维范畴，
  其中 $\mathsf{Sch}$ 是概形范畴。
  这也就是开头提到的例子。

- 若 $\mathcal{C}$ 具有[[拉回 (范畴论)|拉回]]，
  则[[箭头范畴]] $\mathcal{C}^I$ 是 $\mathcal{C}$ 上的纤维范畴，
  这里函子 $p \colon \mathcal{C}^I \to \mathcal{C}$
  将箭头 $f \colon x \to y$ 映到 $y$。
  该纤维范畴在 $y \in \mathcal{C}$ 的纤维是[[俯范畴]] $\mathcal{C}_{/y}$。

- [[谓词范畴]]和[[二元谓词范畴]]到[[集合范畴]]的[[遗忘函子]]都是纤维范畴。

## 性质

- 若 $\mathcal{C} \to \mathcal{D}$ 是纤维范畴，
  $\mathcal{D} \to \mathcal{E}$ 是纤维范畴，
  则复合函子 $\mathcal{C} \to \mathcal{E}$ 也是纤维范畴。

  注意到，使用纤维范畴比使用 $2$-函子能更直接地描述这一事实。

- 对任何函子 $p \colon \mathcal{E} \to \mathcal{C}$
  （不必是纤维范畴），
  $\mathcal{E}$ 中的[[同构]]都是 $p$-拉回（@p-拉回）；
  $p$-拉回的复合仍是 $p$-拉回。

```terms
纤维范畴:
  en: fibred category
  en-us: fibered category
  fr: catégorie fibrée :f
$p$-拉回:
  en: $p$-cartesian morphism
  fr: morphisme $p$-cartésien :m
$p$-弱拉回:
  en: weak $p$-cartesian morphism
```
