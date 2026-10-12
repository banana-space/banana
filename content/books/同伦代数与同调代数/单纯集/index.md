---
title: 单纯集
---

**单纯集**（simplicial set）是一种组合对象，
应用于数学的很多分支，特别是同伦理论中。
这一节中，我们介绍单纯集的概念，
并解释如何以之为模型，来定义无穷范畴。

## 定义和例子

在定义单纯集之前，
我们先举几个例子，以建立其直观。

::: example {@eg-单纯复形}
设 $X$ 是单纯复形（也就是拓扑中定义单纯同调时考虑的复形），
其中每个单形 $\sigma$ 的顶点都带有一个排序，
使得 $\sigma$ 的每个面含入 $\sigma$ 的映射都保持顶点的排序。
记 $X_n$ 为 $X$ 的所有 $n$ 维单形（可能退化）的集合。
则有一列映射
\[
\begin{tikzcd}
  \cdots\ar[r,shift left=3ex]\ar[r,shift left=1ex]\ar[r,shift right=1ex]\ar[r,shift right=3ex] &
  X_2\ar[l,shift left=2ex]\ar[l]\ar[l,shift right=2ex]\ar[r,shift left=2ex]\ar[r]\ar[r,shift right=2ex] &
  X_1\ar[l,shift left=1ex]\ar[l,shift right=1ex]\ar[r,shift left=1ex]\ar[r,shift right=1ex] &
  X_0\ ,\ar[l]
\end{tikzcd}
\]
其中

- 每个 $X_n$ 有 $(n+1)$ 个到 $X_{n-1}$ 的映射，
  分别由取 $n$ 维单形的 $(n+1)$ 个面给出，
  称为**面映射**（face map）。

- 每个 $X_n$ 有 $(n+1)$ 个到 $X_{n+1}$ 的映射，
  由 $(n+1)$ 种将 $n$ 维单形视为退化的 $(n+1)$ 维单形的方法给出，
  称为**退化映射**（degeneracy map）。

这一结构就称为**单纯集**，细节见下文。
:::

::: example
设 $X$ 是拓扑空间，记
\[
\operatorname{Sing}(X)_n = \mathsf{Top} (\Delta^n,X),
\]
其中 $\Delta^n$ 表示拓扑中的标准 $n$ 维单形。
这就给出了单纯集 $\operatorname{Sing}(X)$，
它也具有前一个例子所述的结构。
我们回忆，奇异同调和奇异上同调都是利用这个单纯集来定义的。
:::

下面，我们写下单纯集的严格定义。

::: definition
**标准单形范畴**是如下定义的范畴 $\mathbb{\Delta}$：

- 其对象为所有形如 $[n] = \{0,\dotsc,n\}$ 的集合，
  其中 $n \geq 0$。

- 态射集 $\mathbb{\Delta}([m],[n])$
  由所有从 $[m]$ 到 $[n]$ 的保序映射
  （即保持 $\leq$ 关系的映射）构成。

:::

范畴 $\mathbb{\Delta}$ 也可以看成
（@eg-单纯复形 意义下）
带顶点排序的标准单形构成的范畴，
其态射为单形之间将顶点映到顶点的线性映射，
并要求保持顶点的排序。

在范畴 $\mathbb{\Delta}$ 中，有两类特殊的态射：

- 有**面映射**
  \[
  d^i \colon [n-1] \to [n] \quad
  (0 \leq i \leq n),
  \]
  定义为跳过 $[n]$ 的元素 $i$，
  在其余元素上是保序双射。

- 有**退化映射**
  \[
  s^i \colon [n+1] \to [n] \quad
  (0 \leq i \leq n),
  \]
  定义为将 $[n+1]$ 的元素 $i$ 和 $i+1$ 都映到 $[n]$ 的元素 $i$，
  在其余元素上是保序双射。

面映射和退化映射构成了 $\mathbb{\Delta}$ 中（不交换的）图表
\[
\begin{tikzcd}
  \relax[0]\ar[r,shift left=1ex]\ar[r,shift right=1ex] &
  \relax[1]\ar[l]\ar[r,shift left=2ex]\ar[r]\ar[r,shift right=2ex] &
  \relax[2]\ar[l,shift left=1ex]\ar[l,shift right=1ex]\ar[r,shift left=3ex]\ar[r,shift left=1ex]\ar[r,shift right=1ex]\ar[r,shift right=3ex] &
  \cdots \ .\ar[l,shift left=2ex]\ar[l]\ar[l,shift right=2ex]
\end{tikzcd}
\]
不难验证，$\mathbb{\Delta}$ 中所有态射都能写成
一系列面映射和退化映射的复合。

::: definition {@def-单纯集}
**单纯集**（simplicial set）
是从 $\mathbb{\Delta}^{\mathrm{op}}$ 到 $\mathsf{Set}$ 的函子，
即从 $\mathbb{\Delta}$ 到 $\mathsf{Set}$ 的反变函子，
也即 $\mathbb{\Delta}$ 上的预层。
单纯集的范畴记为
\[
\mathsf{sSet} = \mathsf{Fun} (\mathbb{\Delta}^{\mathrm{op}},\mathsf{Set}).
\]

更一般地，对任何范畴 $\mathsf{C}$，
定义

- $\mathsf{C}$ 中的**单纯对象**（simplicial object）
  为 $\mathbb{\Delta}^{\mathrm{op}}$ 到 $\mathsf{C}$ 的函子。

- $\mathsf{C}$ 中的**余单纯对象**（cosimplicial object）
  为 $\mathbb{\Delta}$ 到 $\mathsf{C}$ 的函子。

:::

设 $X$ 是单纯集。我们记
\[
X_n = X([n]),
\]
称此集合为 $X$ 的 **$n$ 维单形**的集合。
$\mathbb{\Delta}$ 中态射 $d^i$ 和 $s^i$ 诱导了映射
\[
\begin{aligned}
  d_i \colon X_n \to X_{n-1} & \quad (0\leq i\leq n), \\
  s_i \colon X_n \to X_{n+1} & \quad (0\leq i\leq n),
\end{aligned}
\]
分别称为 $X$ 的**面映射**和**退化映射**。

::: example
- 单纯集 $\Delta[n]$
  就是标准 $n$ 维单形（作为单纯复形）对应的单纯集，
  也即由 $[n]$ 表出的预层。
  它的 $k$ 维单形对应于保序映射 $[k]\to[n]$，
  这里 $[n] = \{ 0, 1, \dotsc, n \}$
  视为其顶点的标号集。
  由 Yoneda 引理，对任何单纯集 $X$，有
  \[
  X_n \simeq \mathsf{sSet} (\Delta[n], X).
  \]

- 这样，$\Delta[-]$ 就是 $\mathsf{sSet}$ 中的余单纯对象，
  即一个余单纯单纯集。

- 在 $\Delta[n]$ 中去掉其内部，
  就得到了其边界 $\partial\Delta[n]$。
  其 $k$ 维单形对应于不满的保序映射 $[k] \to [n]$。

- 单纯集 $S^n$ 定义为商单纯集 $\Delta[n]/\partial\Delta[n]$，
  这里的商可以逐个维数来定义。

:::

::: proposition
范畴 $\mathsf{sSet}$ 是完备、余完备的，
即具有所有小的极限、余极限。
这些极限、余极限可以逐个维数给出，例如
\[
(X \times Y)_n = X_n \times Y_n.
\]
:::

::: proof
留给读者。
:::

例如，$\Delta[1]\times\Delta[1]$ 是一个实心正方形：
\[
\begin{tikzcd}
  \bullet\ar[d]\ar[r]\ar[dr] & \bullet\ar[d] \\
  \bullet\ar[r] & \bullet\rlap{,}
\end{tikzcd}
\]
它有 $2$ 个非退化 $2$ 维单形，
有 $5$ 个非退化 $1$ 维单形，
总共有 $9=3\times3=5+4$ 个 $1$ 维单形（包括退化单形在内）。

## 几何实现

单纯集常常被视作带有顶点排序的单纯复形。
如果忘掉顶点排序，我们就得到一个单纯复形，
这称为单纯集的几何实现。
下面，我们来严格地说明这一过程。

::: proposition
每个单纯集都能通过从 $\varnothing$ 开始，
每次沿着 $\partial\Delta[n]$ 粘上一个 $\Delta[n]$，
然后取余极限而得到。
:::

在范畴 $\mathsf{Top}$ 中，我们有标准 $n$ 维单形，记作 $\Delta^n$。
所有这些空间构成 $\mathsf{Top}$ 中一个余单纯对象（@def-单纯集）$\Delta^\bullet$。
它指定了“$\Delta[n]$ 在 $\mathsf{Top}$ 中应该长什么样子”。
通过对象 $\Delta^\bullet$，可以定义一个函子
\[
|{-}|\colon\mathsf{sSet}\to\mathsf{Top},
\]
它将 $\Delta[n]$ 映到 $\Delta^n$，
然后通过取余极限，将这个函子定义在所有单纯集上。
这个函子就称为**几何实现**（geometric realization）。

并且，函子 $|{-}|$ 有右伴随
$\operatorname{Sing} \colon \mathsf{Top} \to \mathsf{sSet}$，定义为
\[
(\operatorname{Sing} X)_n = \mathsf{Top} (\Delta^n, X),
\]
这和上文中的定义一样。

事实上，上述情况是以下构造的特例。

::: definition [构造] {@con-3-a}
设 $\mathsf{C}$ 是余完备范畴。
如果给定 $\mathsf{C}$ 中的一个余单纯对象 $\Delta^\bullet$，
我们就能知道“$\Delta[n]$ 在 $\mathsf{C}$ 中应该长什么样子”，
从而，与上述构造同理，能得到一对伴随函子
\[
\begin{tikzcd}[column sep=5em]
  \mathsf{sSet}\ar[r,bend left=20,"\Delta{[n]}\mapsto\Delta^n"]\ar[r,phantom,"\bot"] &
  \rlap{$\mathsf{C}$\ .}\phantom{\mathsf{sSet}}\ar[l,bend left=20,"{X\mapsto\mathsf{C}(\Delta^\bullet,X)}"]
\end{tikzcd}
\]
:::

在下文中，很多有关单纯集的构造都将通过这种方式给出。
我们举一个例子。

::: example
取 $\mathsf{C}=\mathsf{Ch}(R)$ 为 $R$-模的上链复形的范畴，其中 $R$ 是交换环。
我们取
\[
\Delta^n=\quad\Bigl(\cdots\to0\to
\underset{\substack{\\(-n)}}{R^{\oplus\binom{n+1}{n+1}}}\to
\cdots\to
\underset{\substack{\\(-1)}}{R^{\oplus\binom{n+1}{2}}}\to
\underset{\substack{\\(0)}}{R^{\oplus(n+1)}}\to0\to\cdots\Bigr)
\]
为标准 $n$-单形的单纯链复形（即用来定义单纯同调的链复形）。
这样，@con-3-a
给出了函子 $\mathsf{sSet}\to\mathsf{Ch}(R)$，
它计算单纯集的单纯同调。
复合函子
\[
\mathsf{Top}\xrightarrow{\operatorname{Sing}}\mathsf{sSet}\to\mathsf{Ch}(R)
\]
计算拓扑空间的奇异同调。
:::

我们回到伴随函子 $|{-}|\dashv\operatorname{Sing}$。
下面，我们说明，这一对函子实际上是 Quillen 等价，
从而 $\mathsf{sSet}$ 与 $\mathsf{Top}$ 带有等价的同伦理论。

::: definition
设 $0 \leq i \leq n$。
单纯集 $\Lambda_i[n]$ 定义为在 $\partial\Delta[n]$ 中去掉第 $i$ 个顶点所对的面，
而得到的单纯集，称为 $\Delta[n]$ 的第 $i$ 个**尖角**（horn）。
:::

::: theorem
范畴 $\mathsf{sSet}$ 具有**标准模型结构**，描述如下：

- $\mathsf{W}=\{\text{拓扑空间的弱同伦等价}\}$。

- $\mathsf{Cof}=\{\text{单射}\}$。

- $\mathsf{Fib}=\operatorname{RLP}\{\Lambda_i[n]\hookrightarrow\Delta[n]\mid0\leq i\leq n,\ n>0\}$。

- $\mathsf{Fib\cap W}=\operatorname{RLP}\{\partial\Delta[n]\hookrightarrow\Delta[n]\mid n\geq0\}$。

:::

定理的证明十分繁琐，见 [@Hovey, Theorem 3.6.5]。

::: theorem
伴随函子 $|{-}|\dashv\operatorname{Sing}$
是 $\mathsf{sSet}$（带有标准模型结构）与 $\mathsf{Top}$（带有 Quillen 模型结构）
之间的 Quillen 等价。
:::

见 [@Hovey, Theorem 3.6.7]。
实际上，证明它们是 Quillen 伴随并不难，读者可以自己完成。

## 用单纯集描述范畴

单纯集可以看成范畴的一种模型。
例如，单纯集 $\Delta[2]$ 可以看成下面的图表：
\[
\begin{tikzcd}[row sep=2em,column sep=1em]
  &\bullet\ar[dr] \\
  \bullet\ar[ur]\ar[rr]\ar[rr,phantom,bend left=40,"\Downarrow"] && \bullet\rlap{\,,}
\end{tikzcd}
\]
其中双箭头的含义是，
该 $2$ 维单形“验证”了上方两个箭头的复合是下方的箭头。
在普通的范畴中，该图表也就是 $2$ 个箭头接在一起：
\[
\bullet \longrightarrow \bullet \longrightarrow \bullet\ .
\]
有的人将这个图表记作 $\mathsf{2}$，
因为它是偏序集 $[2] = \{ 0, 1, 2 \}$ 对应的范畴。

又例如，单纯集 $\Delta[2]\times\Delta[1]$ 对应于图表
\[
\begin{tikzcd}
  \bullet\ar[d]\ar[r] & \bullet\ar[d]\ar[r] & \bullet\ar[d] \\
  \bullet\ar[r] & \bullet\ar[r] & \bullet\rlap{\,.}
\end{tikzcd}
\]

这一想法的严格含义如下。

::: definition
设 $\mathsf{C}$ 是小范畴。
$\mathsf{C}$ 的**脉**（nerve）是单纯集 $\operatorname{N}(\mathsf{C})$，
其 $n$ 维单形对应于 $\mathsf{C}$ 中 $n$ 个箭头构成的序列
\[
\bullet\longrightarrow\bullet\longrightarrow\cdots\longrightarrow\bullet \ .
\]
其第 $0$ 个、第 $n$ 个面映射分别定义为去掉第一个、最后一个箭头；
对 $0<i<n$，其第 $i$ 个面映射定义为将第 $i$ 个、第 $i+1$ 个箭头复合起来。
其退化映射定义为在序列中插入恒同箭头。
:::

读者可以验证，
在以上几个例子中，
单纯集确实是相应范畴的脉。

::: remark
事实上，脉是 @con-3-a 的又一个特例。
我们在 $\mathsf{Cat}$ 中考虑余单纯对象 $\Delta^\bullet$，定义为
\[
\Delta^n = \quad
\bullet\longrightarrow\bullet\longrightarrow\cdots\longrightarrow\bullet\ ,
\]
其中有 $n$ 个连续的箭头。
这个余单纯对象告诉我们“$\Delta[n]$ 在 $\mathsf{Cat}$ 中应该长什么样子”。
这样，我们得到一对伴随函子
\[
\begin{tikzcd}
  \mathsf{sSet}\ar[r,bend left=30,"\operatorname{Ho}"]\ar[r,phantom,"\bot"] &
  \rlap{$\mathsf{Cat}$\ .}\phantom{\mathsf{sSet}}\ar[l,bend left=30,"\operatorname{N}"]
\end{tikzcd}
\]
其中右伴随就是上面定义的脉函子。
:::

::: remark
并非所有单纯集都能看成范畴，
例如在 $\Lambda_1[2]$ 中，有两个箭头，它们不能复合。

事实上，如果我们定义 $\operatorname{Sp}(n)\subset\Delta[n]$
为所有顶点和所有棱 $[i,i+1]$ $(0\leq i<n)$ 构成的单纯子集，
称为**脊**（spine），
那么对任何单纯集 $X$，它是某个范畴的脉，
当且仅当对任何 $n \geq 0$，它都满足提升性质
\[
\begin{tikzcd}
  \operatorname{Sp}(n)\ar[d,hook]\ar[r] & X \\
  \Delta[n] \rlap{\ .} \ar[ur,dashed,"\exists!"']
\end{tikzcd}
\]
:::

## Kan 复形与拟范畴

Kan 复形是“看起来像拓扑空间”的单纯集，
我们将用它来描述 $\infty$-群胚。

::: definition
**Kan 复形**（Kan complex）
是纤维性的单纯集。
换言之，它满足**尖角填充性质**，
即提升性质
\[
\begin{tikzcd}
  \Lambda_i[n]\ar[d,hook]\ar[r] & X \\
  \Delta[n] \rlap{\ ,} \ar[ur,dashed]
\end{tikzcd}
\]
其中 $0\leq i\leq n, \ n>0$。
:::

::: example
单纯集 $\Delta[n]$ 在 $n \geq 1$ 时**不是** Kan 复形，
因为尖角
\[
\begin{aligned}
  \Lambda_0[2] &\to \Delta[n], \\
  0,1,2 &\mapsto 0,1,0
\end{aligned}
\]
无法填充为一个 $\Delta[2]$。
出现这一现象的原因是，$\Delta[n]$ 作为范畴，并不是所有态射都可逆。
通过此例也可看出，Kan 复形具有类似群胚的性质。
:::

::: example
对任何拓扑空间 $X$，其奇异单纯集 $\operatorname{Sing}X$
是 Kan 复形，这一点不难证明。
因此，对任何单纯集 $S$，单纯集
$\operatorname{Sing}|S|$
可以用作 $S$ 的一个纤维性替换。
:::

如上所言，Kan 复形看起来像是带有高阶结构的群胚。
在 Kan 复形中，$1$-态射都可逆，但只是在相差一个 $2$-态射（即 $2$ 维单形）的意义下可逆。
对于高阶的态射来说，尖角填充性质保证了高阶的态射也都可逆，
但是在相差一个更高阶态射的意义下可逆。
这段话描述的正是 $\infty$-群胚的概念。

::: definition
**$\infty$-群胚**，或者说 **$(\infty,0)$-范畴**，
就定义为 Kan 复形。
:::

例如，对拓扑空间 $X$ 而言，
Kan 复形 $\operatorname{Sing}X$
就是 $X$ 的**基本 $\infty$-群胚**。

::: definition
**同伦型**（homotopy type）
是指 $\infty$-群胚的同伦等价类，
即 $\operatorname{Ho}(\mathsf{sSet})$ 中的一个同构类。
这一范畴也等价于
$\operatorname{Ho}(\mathsf{Top})\simeq\mathsf{hCW}$，
从而同伦型也是 CW 复形的同伦等价类。
:::

下面，我们通过类似的方式来定义 $(\infty,1)$-范畴。
下表列出了尖角填充对应的范畴性质，
这里我们考虑范畴的脉。

| 尖角 | 性质 |
| --- | --- |
| $\Lambda_0[2]$ | 每个态射都有左逆 |
| $\Lambda_1[2]$ | 态射可复合 |
| $\Lambda_2[2]$ | 每个态射都有右逆 |
| $\Lambda_0[3]$ | 每个态射都是满态射 |
| $\Lambda_1[3]$、$\Lambda_2[3]$ | 态射复合的结合律 |
| $\Lambda_3[3]$ | 每个态射都是单态射 |
| 其它 | （任何范畴都满足） |

作为练习，读者可以验证表中提到的性质。

我们注意到，
$\Lambda_0[2]$、$\Lambda_2[2]$、$\Lambda_0[3]$、$\Lambda_3[3]$
这几个尖角的填充性质并非所有范畴都满足，
但对“内尖角”而言，即 $\Lambda_i[n]$ $(0<i<n)$，
其填充性质描述了范畴应该满足的性质。

::: definition {@def-拟范畴}
**拟范畴**（quasi-category），或者说 **$(\infty,1)$-范畴**，
是指一个单纯集，对 $0<i<n$ 满足提升性质
\[
\begin{tikzcd}
  \Lambda_i[n]\ar[d,hook]\ar[r] & X \\
  \Delta[n] \rlap{\ .} \ar[ur,dashed]
\end{tikzcd}
\]
换言之，**内尖角**都可填充。
:::

这里的术语需要多说明一下。
拟范畴是 $(\infty,1)$-范畴的若干种模型之一，
Kan 复形是 $\infty$-群胚的若干种模型之一。
因此，在建立无穷范畴理论的基础时，
我们总说“拟范畴”和“Kan 复形”，以保证准确性。

## 地图

在研究 $(\infty,1)$-范畴时，
我们将使用很多模型和工具。
现在，我们已经完成了大部分的定义，
可以将之后的计划画成一张地图，
以便读者预览之后的内容，也便于理清各概念的关系。

我们引入一些记号。
对幺半范畴 $\mathsf{V}$，
记 $\mathsf{Cat}_{\mathsf{V}}$ 为充实于 $\mathsf{V}$ 的范畴构成的范畴。
（我们暂时忽略集合论问题，下同。）
记 $\mathsf{Model}$ 为模型范畴的范畴。
记 $\mathsf{Model}_{\mathsf{V}}$ 为充实于 $\mathsf{V}$ 的模型范畴（还未定义）构成的范畴。
记 $\mathsf{QCat}$ 为拟范畴的范畴
（它在下图中其实该写成 $\mathsf{sSet}$，原因将在之后解释）。

![](HAHA-地图.svg?width=600)

这个图表在某种意义下是“交换”的，我们将在之后说明其细节。
所有位于 $\mathsf{Cat}_{\mathsf{hCW}}$ 之上的结构都能看作 $(\infty,1)$-范畴的模型。
这些范畴中的同伦理论称为**同伦相容**（homotopy coherent）的，
而 $\mathsf{Cat}_{\mathsf{hCW}}$ 中的交换图仅仅只是**同伦交换**（homotopy commutative）的。
这两者的区别在于，
例如，有的同伦交换的图表并不来自于一个真正交换的图表，
这样的图表就不是同伦相容的。

在图中还能看到，同调代数，也就是 dg（微分分次）范畴的研究，
也与 $(\infty,1)$-范畴的理论密切相关。
我们将利用这一关系，将 $(\infty,1)$-范畴的理论应用到同调代数上。
