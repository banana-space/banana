---
title: 模型范畴
---

**模型范畴**（model category）是带额外结构的弱等价范畴，
这里的额外结构包括一类态射 $\mathsf{Cof}$，称为**余纤维化**（cofibration），
及一类态射 $\mathsf{Fib}$，称为**纤维化**（fibration）。
这些信息将帮助我们在无穷范畴中进行具体计算。
我们回忆上一节中的图式：

![](HAHA-局部化.svg?width=360)

模型范畴的实用性主要体现于以下两点。

- 映射间的**同伦**可以被具体描述：
  在局部化之后，我们知道弱等价变成了可逆态射（即同伦等价），
  但我们并不知道哪些态射变得同伦。
  但在模型范畴中，我们能清晰地看到映射间的同伦，
  也能看到同伦之间的高阶同伦，
  就像在拓扑空间范畴中一样。
  这样，局部化 $\mathsf{C} [\mathsf{W}^{-1}]$
  可以描述为模型范畴 $\mathsf{C}$ 的同伦范畴。

- **导出函子**易于计算。
  例如，同伦极限、同伦余极限是一类重要的导出函子，
  模型范畴理论提供了计算它们的方法。

本节将介绍模型范畴的定义，
并阐明上述两点的对应理论。

## 定义与例子

我们回忆，在代数拓扑中，
拓扑空间的映射 $p \colon X \to Y$ 称为 **Hurewicz 纤维化**，
如果对任何空间 $A$ 及任意实线图表
\[
\begin{tikzcd}
  A \times \{0\} \ar[r] \ar[d] & X \ar[d,"p"] \\
  A \times I \ar[r] \ar[ur, dashed] & Y \rlap{,}
\end{tikzcd}
\]
存在虚线箭头使图表交换。
映射 $i \colon A \to B$ 称为 **Hurewicz 余纤维化**，
如果对任何空间 $Y$ 及任意实线图表
\[
\begin{tikzcd}
  A \ar[r] \ar[d,"i"'] & Y^I \ar[d] \\
  B \ar[r] \ar[ur, dashed] & Y^{\{0\}} \rlap{,}
\end{tikzcd}
\]
存在虚线箭头使图表交换。
这里 $Y^I$ 是所有映射 $I \to Y$ 构成的空间，
带有紧开拓扑。

::: definition
设 $\mathsf{C}$ 是范畴，
$J\subset\operatorname{Mor}(\mathsf{C})$ 是一类态射。

- 称 $\mathsf{C}$ 中态射 $p \colon X \to Y$ 对 $J$
  具有**右提升性质**（right lifting property），
  如果对 $\mathsf{C}$ 中任意实线图表
  \[
  \begin{tikzcd}
    A \ar[r] \ar[d] & X \ar[d,"p"] \\
    B \ar[r] \ar[ur, dashed] & Y \rlap{,}
  \end{tikzcd}
  \]
  其中态射 $A \to B$ 在 $J$ 中，
  存在虚线箭头使图表交换。
  所有具有此性质的态射 $p$ 构成的类记为 $\operatorname{RLP}(J)$。

- 称 $\mathsf{C}$ 中态射 $i \colon A \to B$ 对 $J$
  具有**左提升性质**（left lifting property），
  如果对 $\mathsf{C}$ 中任意实线图表
  \[
  \begin{tikzcd}
    A \ar[r] \ar[d,"i"'] & X \ar[d] \\
    B \ar[r] \ar[ur, dashed] & Y \rlap{,}
  \end{tikzcd}
  \]
  其中态射 $X \to Y$ 在 $J$ 中，
  存在虚线箭头使图表交换。
  所有具有此性质的态射 $i$ 构成的类记为 $\operatorname{LLP}(J)$。

:::

例如，由定义，
\[
\begin{aligned}
  \{\text{Hurewicz 纤维化}\}
  &=\operatorname{RLP}\{A\times\{0\}\hookrightarrow A\times I\},\\
  \{\text{Hurewicz 余纤维化}\}
  &=\operatorname{LLP}\{Y^I\twoheadrightarrow Y^{\{0\}}\}.
\end{aligned}
\]

作为练习，读者可以证明
$\operatorname{RLP}(\operatorname{LLP}(\operatorname{RLP}(J)))=\operatorname{RLP}(J)$，
从而若记 $\mathsf{R} = \operatorname{RLP}(J)$，以及
$\mathsf{L} = \operatorname{LLP}(\operatorname{RLP}(J))$，
则 $\mathsf{L}=\operatorname{LLP}(\mathsf{R})$ 且 $\mathsf{R}=\operatorname{RLP}(\mathsf{L})$。

::: definition
**弱分解系统**（weak factorization system）
是三元组 $(\mathsf{C},\mathsf{L},\mathsf{R})$，
其中 $\mathsf{C}$ 是范畴，
$\mathsf{L},\mathsf{R}\subset\operatorname{Mor}(\mathsf{C})$ 是两类态射，
使得

- $\mathsf{L}=\operatorname{LLP}(\mathsf{R})$ 且
  $\mathsf{R}=\operatorname{RLP}(\mathsf{L})$。

- $\mathsf{C}$ 中每个态射 $f\colon A\to B$ 都能分解为
  \[
  A \xrightarrow l X \xrightarrow r B,
  \]
  其中 $l\in\mathsf{L}$ 且 $r\in\mathsf{R}$。
  并且，我们要求这样的分解关于 $f$ 具有函子性。

:::

例如，记 $\mathsf{HCof}$、$\mathsf{HFib}$、$\mathsf{HoEq}$
分别为闭 Hurewicz 余纤维化、
Hurewicz 纤维化、同伦等价构成的类。
我们将看到，三元组
$(\mathsf{Top},\mathsf{HCof}\cap\mathsf{HoEq},\mathsf{HFib})$
和
$(\mathsf{Top},\mathsf{HCof},\mathsf{HFib}\cap\mathsf{HoEq})$
都是弱分解系统。

::: proposition
设 $(\mathsf{C},\mathsf{L},\mathsf{R})$ 是弱分解系统。

- $\mathsf{L}$ 和 $\mathsf{R}$ 均包含 $\mathsf{C}$ 中所有同构。

- $\mathsf{L}$ 和 $\mathsf{R}$ 均关于态射复合封闭。

- $\mathsf{L}$ 关于推出封闭，$\mathsf{R}$ 关于拉回封闭。

:::

::: proof
留给读者。
:::

::: definition
**模型范畴**（model category）
是四元组 $(\mathsf{C},\mathsf{W},\mathsf{Cof},\mathsf{Fib})$，
其中 $\mathsf{C}$ 是范畴，
$\mathsf{W},\mathsf{Cof},\mathsf{Fib}\subset\operatorname{Mor}(\mathsf{C})$
是三类态射，满足以下条件：

- $\mathsf{C}$ 完备、余完备，也就是具有所有小极限、小余极限。

- $(\mathsf{C},\mathsf{W})$ 是弱等价范畴。

- $(\mathsf{C},\mathsf{Cof}\cap\mathsf{W},\mathsf{Fib})$ 是弱分解系统。

- $(\mathsf{C},\mathsf{Cof},\mathsf{Fib}\cap\mathsf{W})$ 是弱分解系统。

:::

我们引入以下术语：

- $\mathsf{W}$ 中态射称为**弱等价**（weak equivalence）。

- $\mathsf{Cof}$ 中态射称为**余纤维化**（cofibration）。

- $\mathsf{Fib}$ 中态射称为**纤维化**（fibration）。

- $\mathsf{Cof} \cap \mathsf{W}$ 中态射称为**平凡余纤维化**（trivial cofibration）。

- $\mathsf{Fib} \cap \mathsf{W}$ 中态射称为**平凡纤维化**（trivial fibration）。

- 称对象 $X \in \mathsf{C}$ 是**余纤维性**（cofibrant）的，
  如果 $\varnothing \to X$ 是余纤维化，
  其中 $\varnothing$ 是 $\mathsf{C}$ 的始对象。
  （始对象存在，因为 $\mathsf{C}$ 余完备。）

- 称对象 $X \in \mathsf{C}$ 是**纤维性**（fibrant）的，
  如果 $X \to \star$ 是纤维化，
  其中 $\star$ 是 $\mathsf{C}$ 的终对象。
  （终对象存在，因为 $\mathsf{C}$ 完备。）

注意 $\mathsf{Cof}$ 和 $\mathsf{Fib}$ 两者中，任一个都能确定另一个，
因为弱分解系统的两类态射能互相确定。

另外，注意到余纤维化、平凡余纤维化都关于推出封闭，
而纤维化、平凡纤维化都关于拉回封闭。

我们来看一些例子。
我们将直接给出结果，而略过证明，
因为每个例子的证明都十分繁琐。
细节可参见 [@Hovey]。

::: example
$\mathsf{Top}$ 上的 **Hurewicz 模型结构**由以下性质确定：

- $\mathsf{W}$ 是同伦等价构成的类。

- $\mathsf{Cof}$ 是闭 Hurewicz 余纤维化构成的类。

- $\mathsf{Fib}$ 是 Hurewicz 纤维化构成的类。

:::

::: example
$\mathsf{Top}$ 上的 **Quillen 模型结构**由以下性质确定：

- $\mathsf{W}$ 是弱同伦等价构成的类。

- $\mathsf{Fib} = \operatorname{RLP} \{
  D^n\times\{0\}\hookrightarrow D^n\times I\mid n\geq0
  \}$，也就是 Serre 纤维化构成的类。

- $\mathsf{Fib} \cap \mathsf{W} = \operatorname{RLP} \{
  S^{n-1}\hookrightarrow D^n\mid n\geq0
  \}$。

- $\mathsf{Cof}=\operatorname{LLP}(\mathsf{Fib}\cap\mathsf{W})$。
  特别地，映射 $S^{n-1}\hookrightarrow D^n$ 是余纤维化。

在这个模型范畴中，
所有拓扑空间都是纤维性的；
所有 CW 复形都是余纤维性的，
因为余纤维化被推出、复合、序列余极限保持。
:::

下文中，我们总是使用 Quillen 模型结构，
而不用 Hurewicz 模型结构。

::: example {@eg-ch-proj}
$\mathsf{Ch}(R)$ 上的**投射模型结构**由以下性质确定：

- $\mathsf{W}$ 是拟同构构成的类。

- $\mathsf{Fib}$ 是（逐个位置）满射构成的类。

在这个模型范畴中，
所有上链复形都是纤维性的；
所有由投射模构成的上有界上链复形，
例如 $R$-模的投射消解，
都是余纤维性的。
:::

::: example {@eg-ch-inj}
$\mathsf{Ch}(R)$ 上的**内射模型结构**由以下性质确定：

- $\mathsf{W}$ 是拟同构构成的类。

- $\mathsf{Cof}$ 是（逐个位置）单射构成的类。

在这个模型范畴中，
所有上链复形都是余纤维性的；
所有由内射模构成的下有界上链复形，
例如 $R$-模的内射消解，
都是纤维性的。
:::

在模型范畴中，一类特殊的对象是
**双纤维性对象**（cofibrant-fibrant object），
也就是既余纤维性、又纤维性的对象。
它们具有类似 CW 复形或投射、内射消解的性质。
我们将看到，这类对象具有十分良好的性质。
并且，每个对象都弱等价于一个双纤维性对象。

::: definition [构造]
设 $\mathsf{C}$ 是模型范畴，设 $X\in\mathsf{C}$。
由模型范畴的公理，态射 $\varnothing\to X$ 可以分解为
\[
\varnothing\xrightarrow{\in\mathsf{Cof}}QX\xrightarrow{\in\mathsf{Fib}\cap\mathsf{W}}X.
\]
则 $QX$ 具有余纤维性，且弱等价于 $X$。
并且，$Q$ 是一个函子，称为**余纤维性替换**（cofibrant replacement）。

类似地，态射 $X\to \star$ 可以分解为
\[
X\xrightarrow{\in\mathsf{Cof}\cap\mathsf{W}}RX\xrightarrow{\in\mathsf{Fib}}\star.
\]
则 $RX$ 具有纤维性，且弱等价于 $X$。
并且，$R$ 是一个函子，称为**纤维性替换**（fibrant replacement）。

一般地，任何具有上述性质的函子 $Q\colon\mathsf{C}\to\mathsf{C}$
（或 $R\colon\mathsf{C}\to\mathsf{C}$）都可以被称为**余纤维性替换**
（或**纤维性替换**）。
:::

::: proposition
沿用上述记号，则
$RQX$ 与 $QRX$ 都具有双纤维性，且弱等价于 $X$。
:::

::: proof
留给读者。
:::

## 同伦

下面，我们来说明如何从模型范畴的公理出发，
恢复出映射间“同伦”的概念。

在拓扑中，两个映射 $X \to Y$ 之间的同伦由一个映射
\[
X \times I \to Y, \quad 或 \quad
X \to Y^I
\]
给出。在模型范畴中，我们通过模仿 $X \times I$ 和 $Y^I$
的构造，来定义同伦。

::: definition
设 $\mathsf{C}$ 是模型范畴，$X\in\mathsf{C}$ 是一个对象。

- $X$ 的**柱对象**（cylinder object），
  记作 $\operatorname{Cyl}(X)$，
  是指余对角映射 $\nabla_X = (\mathbb1,\mathbb1)\colon X\sqcup X\to X$
  的一个分解：
  \[
  \begin{tikzcd}
    X\sqcup X\ar[rr,"\nabla_X"]\ar[dr,"\mathsf{Cof}\ni i"'] &   & X \\
    & \operatorname{Cyl}(X)\rlap{\ .}\ar[ur,"p\in\mathsf{W}"'] &
  \end{tikzcd}
  \]
  如果还满足 $p\in\mathsf{Fib}\cap\mathsf{W}$，
  就称此柱对象为**好**（very good）的。

- $X$ 的**路径对象**（path space object），
  记作 $\operatorname{Path}(X)$，
  是指对角映射 $\Delta_X = (\mathbb1,\mathbb1)\colon X\to X\times X$
  的一个分解：
  \[
  \begin{tikzcd}
    X\ar[rr,"\Delta_X"]\ar[dr,"\mathsf{W}\ni i"'] &   & X\times X \\
    & \operatorname{Path}(X)\rlap{\ .}\ar[ur,"p\in\mathsf{Fib}"'] &
  \end{tikzcd}
  \]
  如果还满足 $i\in\mathsf{Cof}\cap\mathsf{W}$，
  就称此路径对象为**好**（very good）的。

:::

这也就是拓扑中 $X \times I$ 和 $X^I$ 的类比。
模型范畴的公理表明，
好柱对象、好路径对象都一定存在。

::: definition
设 $f,g\colon X\to Y$ 是 $\mathsf{C}$ 中两个态射。

- 从 $f$ 到 $g$ 的**左同伦**（left homotopy）
  是一个态射 $\operatorname{Cyl}(X)\to Y$，使得图表
  \[
  \begin{tikzcd}
    X\ar[r,"i_0"]\ar[dr,"f"'] & \operatorname{Cyl}(X)\ar[d] & X\ar[l,"i_1"']\ar[dl,"g"] \\
    & Y &
  \end{tikzcd}
  \]
  交换。此时，称 $f$ **左同伦**于 $g$。

- 从 $f$ 到 $g$ 的**右同伦**（right homotopy）
  是一个态射 $X \to \operatorname{Path} (Y)$，使得图表
  \[
  \begin{tikzcd}
    & X\ar[dl,"f"']\ar[d]\ar[dr,"g"] &   \\
    Y & \operatorname{Path}(Y)\ar[l,"p_0"]\ar[r,"p_1"'] & Y
  \end{tikzcd}
  \]
  交换。此时，称 $f$ **右同伦**于 $g$。

:::

在拓扑中，左同伦与右同伦是等价的。
我们将看到，这一点对双纤维性对象成立。
不过在此之前，
我们先通过一个具体例子，
来熟悉公理化同伦论的运作方式。

::: example
设 $f_0,f_1\colon X\to Y$ 是左同伦的态射，
$g_0,g_1\colon Y\to Z$ 也是左同伦的态射。
则 $g_0\circ f_0$ 与 $g_1\circ f_1$ 也左同伦。
这里，我们假设左同伦使用的柱对象都是典范的柱对象，
也就是通过模型范畴的公理分解 $X$ 和 $Y$ 的余对角映射，
而得到的柱对象。
:::

::: proof
在拓扑中，这件显然的事是通过考虑映射
\[
X\times I\to X\times I\times I\to Y\times I\to Z
\]
来证明的，其中第一个映射由
任意一条连接 $(0,0)$ 和 $(1,1)$ 的道路 $I\to I\times I$ 所诱导。

在模型范畴中，我们也希望得到一列态射
\[
\operatorname{Cyl}(X)\to\operatorname{Cyl}(\operatorname{Cyl}(X))\to \operatorname{Cyl}(Y)\to Z,
\]
这样就能得到所需的同伦。
因为我们使用的是典范的柱对象，
我们可以将 $\operatorname{Cyl}$ 视为一个函子。
这就给出了一个映射 $\operatorname{Cyl}(\operatorname{Cyl}(X))\to \operatorname{Cyl}(Y)$。
因此，剩下的问题就是构造第一个映射
$\operatorname{Cyl}(X)\to\operatorname{Cyl}(\operatorname{Cyl}(X))$，
它需要是“一条连接 $(0,0)$ 和 $(1,1)$ 的道路”。
构造它的方法是在图表
\[
\begin{tikzcd}[column sep=3em]
  X\sqcup X\ar[d,"\mathsf{Cof}\ni i"']\ar[r,"{(i_0i_0, i_1i_1)}"] &
  \operatorname{Cyl}(\operatorname{Cyl}(X))\ar[d,"\in\mathsf{Fib}\cap\mathsf{W}"] \\
  \operatorname{Cyl}(X)\ar[r]\ar[ru,dashed] & X\rlap{\ .}
\end{tikzcd}
\]
中进行提升。
读者可以思考这为什么给出了连接 $(0,0)$ 和 $(1,1)$ 的道路。
现在就不难直接验证，
复合的态射 $\operatorname{Cyl}(X)\to Z$
确实给出 $g_0\circ f_0$ 和 $g_1\circ f_1$ 间的左同伦。
:::

::: proposition
设 $f,g\colon X\to Y$ 是两个态射。
如果 $X$ 余纤维性，且 $Y$ 纤维性，
则 $f$ 与 $g$ 左同伦当且仅当它们右同伦。
并且，在此情况下，
对 $X$ 的任意柱对象都存在左同伦，
对 $Y$ 的任意路径对象都存在右同伦。
:::

::: proof
设 $h\colon\operatorname{Cyl}(X)\to Y$ 是 $f$ 与 $g$ 间的左同伦。
证明的想法是构造一个“从 $X\times I$ 到 $Y^I$ 的映射”$k$，
如下图所示。

![](HAHA-左右同伦等价.svg?width=560)

我们想要将右同伦 $\mathbb{1}_f$
沿着端点处的左同伦 $h$ 和 $\mathbb{1}_f$ 进行转移。
这个想法具体写下来，就是在图表
\[
\begin{tikzcd}
  X \ar[d,"\mathsf{Cof}\cap\mathsf{W} \ni i_0"'] \ar[r,"i\circ f"] &
  \operatorname{Path}(Y) \ar[d,"\in\mathsf{Fib}"] \\
  \operatorname{Cyl}(X) \ar[r,"{(f\circ p, h)}"'] \ar[ur,dashed,"k"] &
  Y \times Y \rlap{\ .}
\end{tikzcd}
\]
中进行提升。
读者可以利用 $X$ 余纤维性这一条件，
验证图表中提到的细节。
这样，复合态射
\[
X \xrightarrow{i_1} \operatorname{Cyl}(X) \xrightarrow{k} \operatorname{Path}(Y)
\]
给出了我们想要的右同伦。

并且，注意到上面的路径对象 $\operatorname{Path}(Y)$
是可以任意选取的。
因此，左同伦蕴涵关于任意路径对象的右同伦。
以上论述的对偶版本说明，
右同伦蕴涵关于任意柱对象的左同伦。
这就证明了命题的后半部分。
:::

上述命题表明，
对双纤维性对象而言，
同伦具有非常好的性质。
作为练习，读者可以证明，
在命题的条件下，
态射的同伦是等价关系。
因此，我们可以定义态射的同伦类，
从而定义同伦范畴。

::: definition
$\mathsf{C}$ 的**同伦范畴**（homotopy category）
$\operatorname{Ho}(\mathsf{C})$ 是如下定义的范畴：

- 对象：$\mathsf{C}$ 的双纤维性对象。

- 态射：$\mathsf{C}$ 中态射的同伦类。

:::

不要忘记，我们研究模型范畴的最终目的是研究局部化。
因此，下面的结论揭示了上述定义的意义：

::: theorem {@thm-2-a}
有范畴等价
\[
\operatorname{Ho}(\mathsf{C})\simeq\mathsf{C}[\mathsf{W}^{-1}].
\]
:::

定理的证明需要用到以下结论：

::: proposition [Whitehead 定理] {@thm-2-w}
设 $X,Y\in\mathsf{C}$ 为双纤维性对象，
$f\colon X\to Y$ 为态射。
则 $f$ 是弱等价当且仅当它是同伦等价
（即具有同伦逆）。
:::

::: proof
1. 如果 $f \in \mathsf{Fib}\cap\mathsf{W}$，
   则 $f$ 有右逆，因为可以在图表
   \[
   \begin{tikzcd}
     \varnothing \ar[r]\ar[d,"\mathsf{Cof}\ni"'] &
     X \ar[d,"f\in\mathsf{Fib}\cap\mathsf{W}"] \\
     Y \ar[ur,dashed,"g"] \ar[r,equals] & Y \rlap{\ .}
   \end{tikzcd}
   \]
   中进行提升。
   我们想证明 $g$ 是 $f$ 的同伦逆，
   也就是证明 $g\circ f$ 同伦于 $\mathbb{1}_X$。
   只需在图表
   \[
   \begin{tikzcd}
     X\sqcup X \ar[r,"{(g\circ f,1_X)}"] \ar[d,"\mathsf{Cof}\ni"'] &
     X \ar[d,"f\in\mathsf{Fib}\cap\mathsf{W}"] \\
     \operatorname{Cyl}(X) \ar[ur,dashed] \ar[r,"f\circ p"] & Y\rlap{\ .}
   \end{tikzcd}
   \]
   中提升即可。

2. 如果 $f \in \mathsf{Cof}\cap\mathsf{W}$，
   则上述论证的对偶版本就能证明命题。

3. 对一般的 $f\in\mathsf{W}$，
   可以将它分解为余纤维化复合上平凡纤维化。
   而由三选二性质，其中的余纤维化自动是平凡余纤维化。

:::

::: proof [@thm-2-a 的证明]
记 $\mathsf{C}_{\mathrm{cf}}$ 为 $\mathsf{C}$ 中双纤维性对象构成的满子范畴。
由 @thm-2-w，函子
\[
\mathsf{C} \xrightarrow{RQ} \mathsf{C}_{\mathrm{cf}} \to \operatorname{Ho}(\mathsf{C})
\]
将 $\mathsf{W}$ 映到同构，从而诱导了
$\mathsf{C}[\mathsf{W}^{-1}]$ 到 $\operatorname{Ho}(\mathsf{C})$ 的函子，
它显然完全（full）且本质满。
读者可以模仿 @thm-1-htop 的证明，
验证它是忠实的。
:::

::: remark
我们曾提到，$\operatorname{Ho}(\mathsf{C})$
只是局部化提供的第一层信息，
而完整的信息需要由一个 $(\infty,1)$-范畴来描述。
事实上，模型范畴中也能看到这些高阶的信息，
但需要通过一种称为**架**（framing）的构造。
这种构造用来模拟拓扑中的 $X\times\Delta^n$ 和 $X^{\Delta^n}$，
从而在模型范畴中描述高阶的同伦。
细节可参见 [@Hovey, Chapter 5]。
:::

## 导出函子

在同调代数中，
导出函子是一种将 Abel 范畴间的函子 $F\colon\mathsf{A}\to\mathsf{B}$
变成导出范畴间的函子 $\mathsf{D}(\mathsf{A})\to\mathsf{D}(\mathsf{B})$
的方法。
这实际上是下面构造的特例。

设 $\mathsf{C}$ 是模型范畴，
分别记 $\mathsf{C}$ 中由余纤维性对象、纤维性对象、双纤维性对象构成的满子范畴为
$\mathsf{C}_{\mathrm c}$、$\mathsf{C}_{\mathrm f}$、$\mathsf{C}_{\mathrm{cf}}$。

::: definition
设有函子 $F\colon\mathsf{C}\to\mathsf{D}$，
其中 $\mathsf{C}$ 是模型范畴，
$\mathsf{D}$ 是弱等价范畴。

- 若 $F$ 保持弱等价，
  则 $F$ 诱导了函子
  \[
  \operatorname{Ho}(F)\colon\operatorname{Ho}(\mathsf{C})\to\operatorname{Ho}(\mathsf{D}),
  \]
  称为 $F$ 的**全导出函子**（total derived functor）。

- 若 $F|_{\mathsf{C}_{\mathrm c}}$ 保持弱等价，
  则有（相差自然同构意义下的）交换图
  \[
  \begin{tikzcd}
    \mathsf{C}\ar[d]\ar[r,"Q"] & \mathsf{C}_{\mathrm c}\ar[d]\ar[r,"F"] & \mathsf{D}\ar[d] \\
    \operatorname{Ho}(\mathsf{C})\ar[r,equals] & \operatorname{Ho}(\mathsf{C})\ar[r,"\mathbb LF"]
    & \operatorname{Ho}(\mathsf{D})\rlap{\ ,}
  \end{tikzcd}
  \]
  其中 $Q$ 是 $\mathsf{C}$ 的任一余纤维性替换函子。
  函子 $\mathbb LF$ 称为 $F$ 的**左导出函子**（left derived functor）。
  从而，对任何 $X\in\mathsf{C}$，在 $\operatorname{Ho}(\mathsf{D})$ 中有
  \[
  \mathbb LF(X)\simeq F(QX).
  \]

- 若 $F|_{\mathsf{C}_{\mathrm f}}$ 保持弱等价，
  则有（相差自然同构意义下的）交换图
  \[
  \begin{tikzcd}
    \mathsf{C}\ar[d]\ar[r,"R"] & \mathsf{C}_{\mathrm f}\ar[d]\ar[r,"F"] & \mathsf{D}\ar[d] \\
    \operatorname{Ho}(\mathsf{C})\ar[r,equals] & \operatorname{Ho}(\mathsf{C})\ar[r,"\mathbb RF"]
    & \operatorname{Ho}(\mathsf{D})\rlap{\ ,}
  \end{tikzcd}
  \]
  其中 $R$ 是 $\mathsf{C}$ 的任一纤维性替换函子。
  函子 $\mathbb RF$ 称为 $F$ 的**右导出函子**（right derived functor）。
  从而，对任何 $X\in\mathsf{C}$，在 $\operatorname{Ho}(\mathsf{D})$ 中有
  \[
  \mathbb RF(X)\simeq F(RX).
  \]

:::

::: example
考虑上链复形范畴 $\mathsf{Ch}(R)$ 上的投射模型结构（@eg-ch-proj）。
此时，余纤维性替换就是取投射消解。
因此，左导出函子与同调代数中的定义相同。

类似地，考虑上链复形范畴 $\mathsf{Ch}(R)$ 上的内射模型结构（@eg-ch-inj）。
此时，纤维性替换就是取内射消解，
这与同调代数中定义右导出函子的方法相同。
:::

## 导出伴随函子

在这一节，我们描述一种情况，
即一对伴随函子在满足某个条件时，
两个函子都有导出函子，并且其导出函子仍为一对伴随。

::: definition
设 $\mathsf{C},\mathsf{D}$ 为模型范畴。
一对伴随函子
\[
(F \dashv G) \colon
\mathsf{C} \rightleftarrows \mathsf{D}
\]
称为 **Quillen 伴随**（Quillen adjunction），
如果 $F$ 保持余纤维化和平凡余纤维化。
:::

注意，由于提升性质，
$F$ 保持余纤维化当且仅当 $G$ 保持平凡纤维化，
$F$ 保持平凡余纤维化当且仅当 $G$ 保持纤维化。

::: lemma [Ken Brown]
设 $F\colon\mathsf{C}\to\mathsf{D}$ 是模型范畴间的函子。
如果 $F|_{\mathsf{C}_{\mathrm c}}$ 保持平凡余纤维化，
那么 $F|_{\mathsf{C}_{\mathrm c}}$ 保持弱等价。
:::

::: proof
见 [@Hovey, Lemma 1.1.12]。
:::

::: corollary
设 $(F\dashv G)$ 是模型范畴 $\mathsf{C}$、$\mathsf{D}$ 间的 Quillen 伴随。
则导出函子 $\mathbb LF$、$\mathbb RG$ 都存在，
并且构成一对伴随
\[
(\mathbb LF\dashv\mathbb RG) \colon
\operatorname{Ho}(\mathsf{C}) \rightleftarrows \operatorname{Ho}(\mathsf{D}).
\]
:::

::: proof
由 Ken Brown 引理，导出函子 $\mathbb LF$、$\mathbb RG$ 都存在。
为证明它们构成伴随，我们需要证明同构
\[
\mathsf{D} (FX,Y) \simeq \mathsf{C} (X,GY)
\]
保持同伦类，
其中 $X\in\mathsf{C}_{\mathrm{cf}}$ 且 $Y\in\mathsf{D}_{\mathrm{cf}}$。
我们忽略细节，参见 [@Hovey, Lemma 1.3.10]。
:::

::: definition
一对 Quillen 伴随 $(F\dashv G)$
称为 **Quillen 等价**（Quillen equivalence），
如果 $\mathbb LF$ 和 $\mathbb RG$ 是范畴等价。
:::

Quillen 等价不一定是范畴等价，
但我们将看到，经过局部化，
Quillen 等价诱导相应的 $(\infty, 1)$-范畴间的范畴等价。
这是证明无穷范畴之间范畴等价的一种好用的方法。

::: proposition {@thm-2-z}
设 $(F\dashv G)$ 是模型范畴 $\mathsf{C}$、$\mathsf{D}$ 间的 Quillen 等价，
设 $X\in\mathsf{C}$ 是余纤维性对象，
$Y\in\mathsf{D}$ 是纤维性对象。
则单位映射和余单位映射
\[
X\to G R F X\quad\text{和}\quad F Q G Y\to Y
\]
都是弱等价。
:::

::: proof
由定义即证。
:::
