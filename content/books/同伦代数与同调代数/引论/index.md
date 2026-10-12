---
title: 引论
---

在代数拓扑和同调代数之间，
存在着一些奇妙的类比。

| [[代数拓扑]] | [[同调代数]] |
| --- | --- |
| [[空间]] | $R$-[[链复形]] |
| [[映射]] | [[链映射]] |
| [[同伦]] | [[链同伦]] |
| [[同伦等价]] | [[链同伦等价]] |
| [[同伦群]] $\pi_n(X)\simeq[S^n,X]$ | [[普通同调|同调群]] $H^n(X)\simeq[\text{``}S^n\text{''},X]$ |
| [[弱同伦等价]] | [[拟同构]] |
| [[CW 逼近]] | [[投射消解|投射]]/[[内射消解]] |
| 同伦范畴 $\mathsf{hCW}$ | [[导出范畴]] $\mathsf{D}(R)$ |
| [[纬悬]]、[[环路空间|环路]] $\Sigma\dashv\Omega$ | [[移位]] $[1]\dashv[-1]$ |
| …… | …… |

（$R$ 是交换环；
$[\ ,\ ]$ 表示映射同伦类的集合；
$\text{``}S^n\text{''}$ 表示在第 $n$ 位置为 $R$，其余为 $0$ 的上链复形）

在这份讲义中，我们引入 **[[同伦代数]]** 的语言，
以解释这种类比。
当然，同伦代数的功能远不限于此，
它已经在当代数学的很多分支中展现了威力。[^1]

## 什么是无穷范畴？

当代的同伦代数主要通过[[无穷范畴]]的语言来表述。
无穷范畴描述的是范畴的“高阶结构”，
这在普通范畴论中是看不见的。
粗略地说，一个无穷范畴由下列信息组成：
有一些对象，有这些对象之间的态射，
而这些态射之间还有高阶的态射：
在普通态射之间有 $2$-态射，可以视为普通态射之间的同伦；
在 $2$-态射之间还有 $3$-态射，
可以视为 $2$-态射之间的同伦，如此等等。

我们将在几节之后再来严格地定义无穷范畴，
因为我们还要准备一些前置知识。
但现在，我们可以看几个简单的例子，
以建立我们对无穷范畴的第一印象。

::: example {@eg-1-top}
考虑拓扑空间范畴 $\mathsf{Top}$。
我们可以如下赋予其无穷范畴结构：

- 对象：拓扑空间。

- $1$-态射（对象之间）：拓扑空间之间的连续映射。

- $2$-态射（$1$-态射之间）：连续映射之间的同伦。

- $3$-态射（$2$-态射之间）：同伦之间的同伦。

- ……

:::

::: example
对交换环 $R$，考虑 $R$ 上的上链复形的范畴 $\mathsf{Ch}(R)$。
我们可以如下赋予其无穷范畴结构：

- 对象：$R$ 上的上链复形。

- $1$-态射：上链复形之间的链映射。

- $2$-态射：链映射之间的链同伦。

- $3$-态射：链同伦之间的链同伦。

- ……

:::

::: example
对拓扑空间 $X$，考虑 $X$ 的基本群胚 $\mathsf{\Pi}(X)$。
我们可以如下赋予其无穷范畴结构：

- 对象：$X$ 中的点。

- $1$-态射：两个点之间的道路。

- $2$-态射：道路之间的同伦（固定端点）。

- $3$-态射：同伦之间的同伦。

- ……

注意，此时态射复合的结合律 $f\circ(g\circ h)=(f\circ g)\circ h$
并不严格成立，而只是“相差一个同伦”成立
（因为相差一个参数化）。
这也是无穷范畴理论中的一个主要的困难。
:::

## 同伦范畴

在很多情况下，无穷范畴都作为（带额外结构的）
普通范畴的同伦范畴而得到。
下面，我们来展示一个具体的例子。

::: definition
范畴 $\mathsf{hTop}$ 定义如下：

- 对象：拓扑空间。

- 态射：连续映射的同伦类。

:::

这里关键的想法是，$\mathsf{hTop}$ 是在 $\mathsf{Top}$ 中
“将所有同伦等价变得可逆”而得到的范畴。
我们下面严格地描述这一过程。

::: definition
**弱等价范畴**（category with weak equivalences）
是二元组 $(\mathsf{C},\mathsf{W})$，
其中 $\mathsf{C}$ 是范畴，
$\mathsf{W}\subset\operatorname{Mor}(\mathsf{C})$ 是一类态射，满足如下性质：

- $\mathsf{C}$ 中所有同构都在 $\mathsf{W}$ 中。

- $\mathsf{W}$ 满足**三选二**：对 $\mathsf{C}$ 中任意图表
  \[
  \begin{tikzcd}[column sep=10pt,row sep=15pt]
    & \bullet\ar[rd,"g"] &   \\
    \bullet\ar[rr,"g\circ f"']\ar[ru,"f"] &   & \bullet \rlap{ ,}
  \end{tikzcd}
  \]
  如果 $f,\ g,\ g \circ f$ 中有两个在 $\mathsf{W}$ 中，
  那么第三个也在 $\mathsf{W}$ 中。

:::

例如，二元组 $(\mathsf{Top},\mathsf{HoEq})$ 是弱等价范畴，
其中 $\mathsf{HoEq}$ 是 $\mathsf{Top}$ 中所有同伦等价构成的类。

::: definition {@def-1-locn}
设 $(\mathsf{C},\mathsf{W})$ 是弱等价范畴。
$\mathsf{C}$ 关于 $\mathsf{W}$ 的**局部化**（localization）
是范畴 $\mathsf{C}[\mathsf{W}^{-1}]$，
带有一个函子 $\mathsf{C}\to\mathsf{C}[\mathsf{W}^{-1}]$，
满足以下泛性质：

- 对任意函子 $F \colon \mathsf{C} \to \mathsf{D}$，
  如果 $F$ 将 $\mathsf{W}$ 中的所有态射都映到同构，
  那么存在（相差自然同构的意义下）唯一的函子
  $\tilde F\colon\mathsf{C}[\mathsf{W}^{-1}]\to\mathsf{D}$，
  使得图表
  \[
  \begin{tikzcd}[column sep=10pt]
    \mathsf{C}\ar[rr,"F"]\ar[dr] & & \mathsf{D}\\
    & \mathsf{C}[\mathsf{W}^{-1}]\ar[ur,dashed,"\exists!\ \tilde F"']
  \end{tikzcd}
  \]
  在相差自然同构的意义下交换。

:::

大致来说，范畴 $\mathsf{C}[\mathsf{W}^{-1}]$
就是在 $\mathsf{C}$ 中将所有 $\mathsf{W}$ 中的态射变得可逆而得到的范畴。
事实上，通过这一想法，
可以给出 $\mathsf{C}[\mathsf{W}^{-1}]$ 的一个具体构造。

::: definition [构造] {@constr-1-locn}
设 $(\mathsf{C},\mathsf{W})$ 是弱等价范畴。
定义范畴 $\mathsf{C}[\mathsf{W}^{-1}]$ 如下：
其对象与 $\mathsf{C}$ 的对象相同，
其态射集 $\mathsf{C}[\mathsf{W}^{-1}] \, (X,Y)$
的元素为 $\mathsf{C}$ 中的态射列
\[
X\to Z_1\gets Z_2\to\cdots \gets Z_n \to Y,
\]
其中箭头可以向左或向右，
但向左的箭头必须在 $\mathsf{W}$ 中，
并且要商掉以下等价关系：
恒同态射可以直接去掉；
相邻同向箭头可以复合；
相邻异向箭头如果代表同一个态射，就可以同时去掉。

不难验证[^2]
上述构造确实满足 @def-1-locn 中的泛性质。
唯一的问题是态射集 $\mathsf{C}[\mathsf{W}^{-1}] \, (X,Y)$
可能太大，而超出了集合允许的大小。
但我们暂时无视这个问题，
实在不行就换到一个更大的宇宙也无妨。
:::

::: proposition {@thm-1-htop}
$\mathsf{hTop}\simeq\mathsf{Top}[\mathsf{HoEq}^{-1}]$。
:::

::: proof
明显的函子 $\mathsf{Top}\to\mathsf{hTop}$
将 $\mathsf{HoEq}$ 映到同构，
从而诱导了函子
\[
\mathsf{Top}[\mathsf{HoEq}^{-1}]\to\mathsf{hTop}.
\]
这一函子显然是本质满且完全（full）的。
为证明它是忠实的，设 $\mathsf{Top}$ 中的态射 $f, g \colon X \to Y$
被映到 $\mathsf{hTop}$ 的同一态射。
则 $f$ 同伦于 $g$。设 $H$ 为该同伦，
则在 $\mathsf{Top}[\mathsf{HoEq}^{-1}]$ 中有
\[
\begin{aligned}
  f \quad &= \quad X \xrightarrow{i_0} X \times I \xrightarrow{H} Y \\
  &= \quad X \xrightarrow{i_0} X \times I
  \xrightarrow{\operatorname{pr}_1} X
  \xleftarrow{\operatorname{pr}_1} X \times I \xrightarrow{H} Y \\
  &= \quad X \xrightarrow{\mathbb{1}_X} X
  \xleftarrow{\operatorname{pr}_1} X \times I \xrightarrow{H} Y \\
  &= \quad X \xleftarrow{\operatorname{pr}_1} X \times I \xrightarrow{H} Y \\
  &= \quad g,
\end{aligned}
\]
其中 $\operatorname{pr}_1$ 是向第一分量的投影，
而 $i_0$ 表示 $X$ 作为 $X \times \{0\}$ 含入 $X \times I$ 的映射。
:::

事实上，我们将看到，局部化能给出高阶范畴结构。
在此例中，普通范畴 $\mathsf{hTop}$ 仅仅是局部化给出的第一层信息，
而完整的信息需要通过一个无穷范畴来刻画。
在这里，这个无穷范畴正是 @eg-1-top 给出的无穷范畴 $\mathsf{Top}$。

上述例子中的高阶范畴结构具有十分清晰的描述：
连续映射间的同伦，同伦间的同伦，等等。
我们可能希望在其它类似的情况下，
局部化得到的无穷范畴也能有这样的具体描述。
例如，在同调代数中，
我们将拟同构变得可逆，而得到导出范畴，
我们希望在对应的无穷范畴中，
高阶态射也能被具体地描述为同伦、同伦的同伦，等等。
事实上，这是可以做到的，
只需借助**模型范畴**（model category）这一工具。

模型范畴是带有一些额外结构的弱等价范畴。
模型范畴将帮助我们在无穷范畴中进行计算，
有人认为[^3]
这就类似于局部坐标能帮助我们在流形上进行计算。

以上漫谈总结于下图。

![](HAHA-局部化.svg?width=360)

## 第一次尝试

下面，我们试着写下高阶范畴的一种简单但“错误”的定义。
我们知道，高阶范畴也就是普通范畴加上高维的箭头，
这一结构似乎并不复杂，我们来将它描述清楚。

::: definition
**幺半范畴**是指范畴 $\mathsf{C}$，带有以下结构：

- 一个函子
  \[
  \begin{aligned}
    {\otimes} \colon \mathsf{C} \times \mathsf{C} & \to \mathsf{C}, \\
    (x, y) & \mapsto x \otimes y,
  \end{aligned}
  \]
  称为**张量积**。

- 一个对象 $1 \in \mathsf{C}$，称为 $\mathsf{C}$ 的**单位对象**。

- 三个自然同构
  \[
  \begin{aligned}
    a_{x, y, z} \colon &&
    (x \otimes y) \otimes z & \simeq
    x \otimes (y \otimes z), \\
    l_x \colon &&
    1 \otimes x & \simeq x, \\
    r_x \colon &&
    x \otimes 1 & \simeq x,
  \end{aligned}
  \]
  分别称为**结合子**、**左单位子**、**右单位子**。

它们满足以下条件：

- （**三角形公理**）
  对任意 $x, y \in \mathsf{C}$，有[[交换图]]
  \[
  \begin{tikzcd}[column sep={6em,between origins}]
    (x \otimes 1) \otimes y
    \ar[rr, "{a_{x, 1, y}}"] \ar[dr, "{r_x \, \otimes \, 1_y}"'] &&
    x \otimes (1 \otimes y)
    \ar[dl, "{1_x \, \otimes \, l_y}"] \\
    & x \otimes y \rlap{\ .}
  \end{tikzcd}
  \]

- （**五边形公理**）
  对任意 $x, y, z, w \in \mathsf{C}$，有交换图
  \[
  \begin{tikzcd}[column sep = -4em]
    && (x \otimes y) \otimes (z \otimes w)
    \ar[drr, "{a_{x, \, y, \, z \otimes w}}"] \\
    ((x \otimes y) \otimes z) \otimes w
    \ar[urr, "{a_{x \otimes y, \, z, \, w}}"]
    \ar[dr, "{a_{x, \, y, \, z} \, \otimes \, 1_w}"'] &&
    \hspace{11em} &&
    x \otimes (y \otimes (z \otimes w)) \\
    & (x \otimes (y \otimes z)) \otimes w
    \ar[rr, "{a_{x, \, y \otimes z, \, w}}"'] &&
    x \otimes ((y \otimes z) \otimes w) \rlap{\ .}
    \ar[ur, "{1_x \, \otimes \, a_{y, \, z, \, w}}"']
  \end{tikzcd}
  \]

:::

::: remark
对于 $4$ 个以上的对象，也可以谈论五边形公理的类似物，
也就是 [[Stasheff 结合多面体]]对应的图表。
在范畴代数中可以证明[^4]，
五边形公理保证了所有这些结合多面体图表都交换，
因此，我们不需要更多公理。
:::

以下给出幺半范畴 $(\mathsf{C},\otimes,1)$ 的一些例子：

- $(\mathsf{Set},\times,*)$，其中 $*$ 是单点集。

- $(\mathsf{Set},\sqcup,\varnothing)$，其中 $\sqcup$ 是不交并。

- $(\text{任何具有乘积的范畴},\times,*)$，其中 $*$ 是终对象，即空乘积。

- $(\text{任何具有余积的范畴},\sqcup,\varnothing)$，其中 $\varnothing$ 是始对象，即空余积。

- $(\mathsf{Ch}(R),\otimes,R)$，
  其中单位对象 $R$ 在第 $0$ 个位置，上链复形的张量积定义为
  \[
  (C\otimes D)^n =
  \bigoplus_{p+q=n} C^p \otimes_R D^q.
  \]

::: definition
设 $\mathsf{V}$ 是幺半范畴。
一个 $\mathsf{V}$-**充实范畴** $\mathsf{C}$ 由以下信息组成：

- 一类**对象** $\operatorname{Ob} \mathsf{C}$。

- 对 $x, y \in \operatorname{Ob} \mathsf{C}$，有一个**态射对象**
  \[
  \mathsf{C} (x, y) \in \mathsf{V},
  \]
  它是 $\mathsf{V}$ 的对象，
  视作 $x, y$ 之间所有态射构成的空间。

- 对每个对象 $x \in \mathsf{C}$，有一个**恒同态射**
  \[
  1_x \colon
  1_{\mathsf{V}} \to \mathsf{C} (x, x),
  \]
  它是 $\mathsf{V}$ 中的态射，
  可以视为对象 $\mathsf{C} (x, x) \in \mathsf{V}$ 中的一个“元素”。

- 对每三个对象 $x, y, z \in \mathsf{C}$，有一个**复合态射**
  \[
  \circ \colon
  \mathsf{C} (y, z) \otimes \mathsf{C} (x, y) \to \mathsf{C} (x, z),
  \]
  它是 $\mathsf{V}$ 中的态射。

它们满足以下条件：

- 任何态射复合恒同态射都等于它自身。

- 复合满足结合律。

这两个条件的严格叙述留给读者完成，也可参见[[充实范畴]]一文。
:::

例如，普通范畴就是充实于 $(\mathsf{Set},\times,*)$ 的范畴。

在某些情况下，有遗忘函子 $\mathsf{V}\to\mathsf{Set}$，
并且它保持幺半范畴的结构。
此时 $\mathsf{V}$-充实范畴就能看成是带额外结构的普通范畴，
以下几例均如此。

::: example
范畴 $\mathsf{Top}$ 充实于自身，
因为对 $X,Y \in \mathsf{Top}$，
集合 $\mathsf{Top}(X,Y)$ 可以赋予[[紧开拓扑]]，
使得复合映射是连续的。
:::

::: example {@eg-1-c}
范畴 $\mathsf{Ch}(R)$ 充实于自身。
对 $X,Y \in \mathsf{Ch}(R)$，定义上链复形 $\mathscr{H}\mkern-3mu\mathit{om}(X,Y)$ 如下：
\[
\mathscr{H}\mkern-3mu\mathit{om}(X,Y)^n = \{f=\{f^k\colon X^k\to Y^{k+n}\}_{k\in\mathbb Z}\},
\]
其中 $f$ 不一定是链映射，其微分定义为
\[
df = [d, f] = d\circ f-(-1)^{\deg f}f\circ d.
\]
这样，所有链映射就是这个链复形的所有 $0$-上圈（cocycle），
也对应于单位对象 $1\in\mathsf{Ch}(R)$ 到该上链复形的链映射，
也就是该上链复形的一个“元素”。
:::

::: example
所有小范畴的范畴 $\mathsf{Cat}$ 充实于自身，
因为对 $X,Y \in \mathsf{Cat}$，
有函子范畴 $\mathsf{Fun}(X,Y)$，
其对象为 $X\to Y$ 的函子，
态射为函子间的自然变换。
:::

我们现在可以使用充实范畴的语言，
给出高阶范畴的第一个定义了。

::: definition
**严格 $2$-范畴**是充实于 $\mathsf{Cat}$ 的范畴。
:::

例如，$\mathsf{Cat}$ 就是一个严格 $2$-范畴，
其中 $1$-态射是范畴间的函子，
$2$-态射是函子间的自然变换。

任何 $\mathsf{Top}$-充实范畴都能看作严格 $2$-范畴，
因为我们可以将态射空间（此时为拓扑空间）
替换为其基本群胚。
此时，$1$-态射是态射空间中的点，
$2$-态射是态射空间中的路径（的同伦类）。
例如，$\mathsf{Top}$ 自身就是一个严格 $2$-范畴，
其 $2$-态射是映射间的同伦（的同伦类）。

然而要注意，对拓扑空间 $X$ 而言，
基本群胚 $\mathsf{\Pi}(X)$ **不是**严格 $2$-范畴，
因为正如上文所言，
其中 $1$-态射的复合并不严格满足结合律。
这意味着我们的定义过于严格，
从而是“错误”的。

不过我们将错就错，继续给出 $n$-范畴和 $\infty$-范畴的定义。
这些定义并不会在下文使用。

::: definition
对 $n$ 归纳，定义**严格 $n$-范畴**
为充实于 $(n-1)$-范畴的范畴。
:::

::: definition
**严格 $\omega$-范畴**是一个序列
\[
\mathsf{C}_1\hookrightarrow\mathsf{C}_2\hookrightarrow\mathsf{C}_3\hookrightarrow\cdots,
\]
其中 $\mathsf{C}_n$ 是严格 $n$-范畴，
使得每个 $\mathsf{C}_{n-1}$ 是在 $\mathsf{C}_n$
中扔掉所有 $n$-态射得到的 $(n - 1)$-范畴。
:::

## $(n, r)$-范畴

虽然我们尚未严格定义一般的 $n$-范畴与 $\infty$-范畴，
但我们其实已经大概知道它们是什么了。
因此，我们可以来半严格地讨论它们的性质。

::: definition
设 $0\leq r\leq n$ 且 $n>0$。
**$(n,r)$-范畴**
指一个 $n$-范畴，
其中所有 $r+1,r+2,\dotsc,n$-态射都可逆。
:::

注意，这里提到的 $n$ 范畴不一定是严格 $n$-范畴，
因此“可逆”实际上指的是“相差同伦的意义下可逆”，
也就是“具有同伦逆”。
我们来看一些例子。

- 普通的范畴也就是 $(1,1)$-范畴。

- 普通的群胚也就是 $(1,0)$-范畴。

- 以上定义的严格 $n$-范畴都是 $(n,n)$-范畴的特例，
  而严格 $\omega$-范畴是 $(\infty,\infty)$-范畴的特例。

- 我们常称 $(\infty,0)$-范畴为 $\infty$-群胚。
  这是一类十分重要的结构，因为它是同伦型的一种自然定义。
  有一种叫做同伦类型论 [@HoTT] 的理论，
  致力于以 $\infty$-群胚取代传统的集合论，
  而重新搭建数学的基础。

- 充实于 $(n,r)$-范畴的范畴可以视为 $(n+1,r+1)$-范畴。

- $\mathsf{Top}$ 是 $(\infty,1)$-范畴，
  因为映射的同伦都是可逆的：
  同伦与其逆同伦的复合同伦于恒同同伦。

- $\mathsf{Ch}(R)$ 是 $(\infty,1)$-范畴，
  因为链同伦的复合定义为链复形间映射的加法，
  而链同伦加上负的自己等于 $0$，
  这里 $0$ 就是恒同同伦。

- 对拓扑空间 $X$ 而言，
  基本群胚 $\mathsf{Π}(X)$ 是 $\infty$-群胚。
  它描述了 $X$ 的同伦型。

在上述第五点的意义下，
对 $n<1$，我们也能定义 $(n,r)$-范畴的概念。
我们将看到，最合理的定义如下：

- $(0,0)$-范畴是集合。

- $(0,1)$-范畴是偏序集。

- $(-1,0)$-范畴是 $\varnothing$ 或单点集，
  也可视为一个真假值。

- $(-2,0)$-范畴是单点集，可以视为“真”。

高阶范畴学家相信，
范畴的底层应该是 $-2$，
并且该给所有范畴重新编号，使得 $-2$ 变成 $0$，$-1$ 变成 $1$，等等。
这样，在数学的摩天大厦里，
逻辑学住在一层，
集合论住在二层，
而范畴论住在三层。
由此观之，将整个大厦视为整体似乎更加自然。
这大概也是高阶范畴论有希望取代集合论，而建立数学基础的原因之一。

[^1]: 例如，
  nLab 页面 [applications of (higher) category theory](https://ncatlab.org/nlab/show/applications+of+%28higher%29+category+theory) 列举了这套理论的若干应用。
[^2]: 见 [@Hovey, Lemma 1.2.2]。
[^3]: 见 MathOverflow 问题 [Do we still need model categories?](https://mathoverflow.net/a/78408) 中的回答。
[^4]: 从同伦代数的观点看，这可以由 [@HA, Corollary 4.1.6.17] 得到。
