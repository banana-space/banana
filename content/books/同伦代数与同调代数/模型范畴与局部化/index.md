---
title: 模型范畴与局部化
---

在讲义的开头，我们曾提到，
如果 $(\mathsf{C},\mathsf{W})$ 是弱等价范畴，
那么通过将 $\mathsf{W}$ 中的箭头变得可逆，
我们能得到 $\infty$-范畴 $\mathsf{C}[\mathsf{W}^{-1}]$。
并且，如果 $(\mathsf{C},\mathsf{W})$ 是通过模型范畴
$(\mathsf{C},\mathsf{W},\mathsf{Cof},\mathsf{Fib})$ 得到的，
那么该 $\infty$-范畴就更便于描述。

在本节中，我们详细地说明这一点，
即模型范畴如何帮助我们描述 $\infty$-范畴。

## 无穷范畴的局部化

首先，我们来描述对弱等价范畴 $(\mathsf{C},\mathsf{W})$ 进行局部化，
而得到 $\infty$-范畴 $\mathsf{C}[\mathsf{W}^{-1}]$ 的过程。
这里，我们也允许 $\mathsf{C}$ 是 $\infty$-范畴。

::: definition
设 $\mathsf{C}$ 为拟范畴，
设 $\mathsf{W}$ 为 $\mathsf{C}$ 中一些边（即 $1$ 维单形）的集合。
则 $(\mathsf{C}, \mathsf{W})$ 的**局部化**（如果存在）
为一个拟范畴 $\mathsf{C}[\mathsf{W}^{-1}]$，
满足下述泛性质：

- 对任何拟范畴 $\mathsf{D}$，及任何实线图表
  \[
  \begin{tikzcd}[column sep=1em]
    \mathsf{C} \ar[rr,"F"] \ar[dr] && \mathsf{D} \\
    & \mathsf{C}[\mathsf{W}^{-1}] \rlap{\ ,} \ar[ur,dashed,"\exists!"']
  \end{tikzcd}
  \]
  如果 $F$ 将 $\mathsf{W}$ 中的边都映到 $\mathsf{D}$ 中的可逆边，
  则存在“唯一”的虚线箭头，使得图表交换。

这里，“唯一”的意思是，有拟范畴的范畴等价
\[
\mathsf{Fun}(\mathsf{C}[\mathsf{W}^{-1}], \mathsf{D}) \mathrel{\rlap{\raisebox{.8ex}{$\mkern2mu\sim$}}{\to}}
\mathsf{Fun}_{\mathsf{W}\mapsto\mathrm{eq}}(\mathsf{C},\mathsf{D}),
\]
其中右边是 $\mathsf{Fun}(\mathsf{C},\mathsf{D})$
中所有将 $\mathsf{W}$ 中的边映到可逆边的函子张成的满子范畴。
:::

在上述定义中，局部化是通过泛性质定义的，
因此它理应具有某种唯一性。
事实上，它在相差一个范畴等价的意义下唯一，
而该等价又在相差一个高维等价的意义下唯一，以此类推。
也就是说，所有局部化构成一个可缩空间。

要证明局部化的存在性，我们需要使用标记单纯集
（@def-marked-sset）这一工具。
我们来引入标记单纯集范畴 $\mathsf{sSet}^+$ 上的一种模型结构。

::: definition
设 $X$ 为单纯集。

- 标记单纯集 $X^\sharp$
  定义为单纯集 $X$，其所有边都是标记边。

- 标记单纯集 $X^\flat$
  定义为单纯集 $X$，其中只有退化边是标记边。

- 若 $X$ 为拟范畴，则定义标记单纯集 $X^\natural$
  为单纯集 $X$，其中标记边是所有可逆边。

:::

::: theorem
范畴 $\mathsf{sSet}^+$ 具有**推出–拉回模型结构**
（(co)cartesian model structure），其中

- 余纤维化为单射。

- 弱等价为映射 $f\colon X\to Y$，
  使得对任意拟范畴 $Z$，有拟范畴的范畴等价
  \[
  \mathsf{sSet}^+ (Y,Z^\natural) \mathrel{\rlap{\raisebox{.8ex}{$\mkern2mu\sim$}}{\to}}
  \mathsf{sSet}^+ (X,Z^\natural),
  \]
  其中两边都是单纯集的映射空间的满子范畴。

- 纤维化为所有同构于某个 $X^\natural$ 的对象，
  其中 $X$ 为拟范畴。

:::

见 [@HTT, Proposition 3.1.3.7]。

局部化的存在性就是上述定理的推论。

::: corollary
设 $\mathsf{C}$ 为拟范畴，
设 $\mathsf{W}$ 为 $\mathsf{C}$ 中一些边的集合。
则局部化 $\mathsf{C}[\mathsf{W}^{-1}]$ 存在。
:::

::: proof
不妨假设 $\mathsf{W}$ 包含所有退化边。
则 $(\mathsf{C},\mathsf{W})$ 是标记单纯集。
考虑其纤维性替换，它是纤维性对象，从而存在拟范畴 $\mathsf{C} [\mathsf{W}^{-1}]$
使得 $R(\mathsf{C},\mathsf{W}) \simeq \mathsf{C}[\mathsf{W}^{-1}]^\natural$。
则对任何拟范畴 $\mathsf{D}$，有
\[
\mathsf{sSet}^+ \bigl(\mathsf{C}[\mathsf{W}^{-1}]^\natural,\ \mathsf{D}^\natural\bigr) \mathrel{\rlap{\raisebox{.8ex}{$\mkern2mu\sim$}}{\to}}
\mathsf{sSet}^+ \bigl((\mathsf{C},\mathsf{W}),\ \mathsf{D}^\natural\bigr).
\]
:::

上述证明十分抽象，且并未告诉我们如何具体地构造局部化。
但实际上，局部化有一种十分清晰的构造方法，
由 Dwyer 和 Kan [@DK-calc] 给出：

::: definition (构造)
设 $(\mathsf{C},\mathsf{W})$ 为弱等价范畴。
我们构造单纯范畴 $\mathsf{L}(\mathsf{C},\mathsf{W})$ 如下：
其对象与 $\mathsf{C}$ 相同，且对任意 $X,Y\in\mathsf{C}$，
单纯集 $\mathsf{L}(\mathsf{C},\mathsf{W}) \, (X,Y)$ 定义为
\[
\mathsf{L}(\mathsf{C},\mathsf{W}) \, (X,Y)_n =
\left\{\rule{0em}{4.5em}\right. \hspace{-.5em}
\begin{tikzcd}[row sep={1.25em,between origins},column sep=2em]
  & \bullet\ar[dd] & \bullet\ar[l]\ar[r]\ar[dd] & \cdots & \bullet\ar[l]\ar[dd]\ar[dddr] \\\\
  & \bullet\ar[dd] & \bullet\ar[l]\ar[r]\ar[dd] & \cdots & \bullet\ar[l]\ar[dd]\ar[dr] \\
  X \ar[uuur]\ar[ur]\ar[dddr] &&&&& Y \\
  & \smash{\vdots}\rule{0em}{.8em} \ar[dd] & \smash{\vdots}\rule{0em}{.8em} \ar[dd] && \smash{\vdots}\rule{0em}{.8em} \ar[dd] \\\\
  & \bullet & \bullet\ar[l]\ar[r] & \cdots & \bullet\ar[l]\ar[uuur]
\end{tikzcd}
\hspace{-.5em} \left.\rule{0em}{4.5em}\right\}
\raisebox{-3em}{$\Bigg/$}\mkern-6mu\raisebox{-3.3em}{$\sim$},
\]
其中

- 图中共有 $n+1$ 行，而列数任意；
  每个圆点（除了省略号中的点）代表 $\mathsf{C}$ 的一个对象，
  箭头代表 $\mathsf{C}$ 中的态射。

- 水平的箭头可以向左或向右，
  但同一列的水平箭头必须指向同一个方向。

- 向左和向下的箭头都必须在 $\mathsf{W}$ 中。

- 等价关系 $\sim$ 由相邻的同向水平箭头的复合生成。

单纯范畴 $\mathsf{L}(\mathsf{C},\mathsf{W})$ 称为
$(\mathsf{C},\mathsf{W})$ 的**梭形局部化**（hammock localization）。
:::

由上述构造，不难看出 $\mathsf{L}(\mathsf{C},\mathsf{W})$ 的同伦范畴
等价于 @constr-1-locn 中的普通范畴 $\mathsf{C}[\mathsf{W}^{-1}]$。

::: theorem
设 $(\mathsf{C},\mathsf{W})$ 为弱等价范畴。
则有标记单纯集的弱等价
\[
(\mathrm{N}\mathsf{C},\mathsf{W}) \simeq
(\mathfrak{N}R\mathsf{L}(\mathsf{C},\mathsf{W}))^\natural,
\]
其中 $\mathrm{N}$ 表示普通范畴的脉，
$R \colon \mathsf{Cat}_{\mathsf{sSet}} \to \mathsf{Cat}_{\mathsf{Kan}}$
是纤维性替换函子。
特别地，有拟范畴的范畴等价
\[
\mathsf{C}[\mathsf{W}^{-1}] \simeq
\mathfrak{N}R\mathsf{L}(\mathsf{C},\mathsf{W}).
\]
:::

见 [@Hinich, §1.2]。

作为推论，拟范畴 $\mathsf{C}[\mathsf{W}^{-1}]$ 的同伦范畴
等价于 @constr-1-locn 中的普通范畴 $\mathsf{C}[\mathsf{W}^{-1}]$。

## 单纯模型范畴

下面，我们考虑带有相容单纯结构的模型范畴，称为**单纯模型范畴**。
这种额外结构的好处是，
由单纯模型范畴局部化而得到的 $\infty$-范畴会比较好描述。

模型结构和单纯结构的相容条件并不是很容易定义。
我们首先需要一些准备知识。

为简单起见，在考虑幺半范畴时，我们只考虑对称幺半范畴，
即其张量积操作满足交换律的幺半范畴。

::: definition
**对称幺半范畴**由以下信息组成：

- 幺半范畴 $\mathsf{V}$。

- 自然等价
  \[
  T_{X,Y} \colon X \otimes Y \to Y \otimes X,
  \]
  其中 $X,Y \in \mathsf{V}$，

满足以下条件：

- $T \circ T = \mathbb{1}$。

- 对任意 $X,Y,Z \in \mathsf{V}$，有交换图
  \[
  \begin{tikzcd}
    (X\otimes Y)\otimes Z\ar[r]\ar[d] &
    (Y\otimes X)\otimes Z\ar[r] &
    Y\otimes(X\otimes Z)\ar[d] \\
    X\otimes(Y\otimes Z)\ar[r] &
    (Y\otimes Z)\otimes X\ar[r] &
    Y\otimes(Z\otimes X) \rlap{ .}
  \end{tikzcd}
  \]

:::

可以证明，上面的最后一条公理足以保证，
有限多个对象以任意次序进行张量积操作，
得到的结果是同构的，该同构也是唯一确定的。
其本质原因是，$\mathsf{Cat}$ 是 $2$-范畴，
故没有高于 $2$ 阶的高阶结构。
也许我们之后会详细解释这一点。

到目前为止，我们提到过的所有幺半范畴都是对称幺半范畴。

::: example
我们看一个不对称的幺半范畴的例子。
设 $R$ 为非交换环，考虑 $R$-双模的范畴，
其幺半结构由双模的张量积给出。
这个幺半范畴就是不对称的。
:::

::: definition
对称幺半范畴 $\mathsf{V}$ 称为**闭**（closed）的，
如果存在**幂函子**（internal hom functor）
\[
(-)^{(-)} \colon \mathsf{V} \times \mathsf{V}^{\mathrm{op}} \to \mathsf{V},
\]
使得有自然同构
\[
\operatorname{Hom}_{\mathsf{V}}(X \otimes Y,\ Z) \simeq
\operatorname{Hom}_{\mathsf{V}}(X,\ Z^Y),
\]
其中 $X,Y,Z\in\mathsf{V}$。
简言之，张量积函子有右伴随。
:::

有时，我们也直接将 $Y^X$ 记为 $\operatorname{Hom}_{\mathsf{V}}(X,Y)$。

::: example
以下是闭对称幺半范畴的例子和反例。

- 对称幺半范畴 $(\mathsf{Set},\times)$ 是闭的，
  其幂函子就是集合论中的幂集。

- 对称幺半范畴 $(\mathsf{sSet},\times)$ 是闭的，
  其幂函子是单纯集的映射空间（@def-4-map）。

- 对称幺半范畴 $(\mathsf{Top},\times)$ **不是**闭的。
  正因如此，在代数拓扑中，常常将 $\mathsf{Top}$ 换成别的范畴，
  例如紧生成空间的范畴。后者关于由 $\times$ 给出的幺半结构是闭的，
  其幂函子是拓扑学中的映射空间，带有紧开拓扑。

:::

::: definition
设 $\mathsf{V}$ 是闭对称幺半范畴，
$\mathsf{C}$ 是 $\mathsf{V}$-充实范畴。

- $\mathsf{C}$ 称为 **$\mathsf{V}$-张量**的，
  如果存在函子
  \[
  {-}\otimes{-} \colon \mathsf{V}\times\mathsf{C} \to \mathsf{C},
  \]
  及自然同构
  \[
  \operatorname{Hom}_{\mathsf{C}}(A\otimes X,\ Y) \simeq \operatorname{Hom}_{\mathsf{V}}\bigl(A,\ \operatorname{Hom}_{\mathsf{C}}(X,Y)\bigr)
  \]
  其中 $A\in\mathsf{V}$，$X,Y\in\mathsf{C}$，
  并记 $\operatorname{Hom}_{\mathsf{V}}$ 为 $\mathsf{V}$ 的幂函子。

- $\mathsf{C}$ 称为 **$\mathsf{V}$-余张量**的，
  如果存在函子
  \[
  (-)^{(-)} \colon \mathsf{C} \times \mathsf{V}^{\mathrm{op}} \to \mathsf{C},
  \]
  及自然同构
  \[
  \operatorname{Hom}_{\mathsf{C}}(X,\ Y^A) \simeq \operatorname{Hom}_{\mathsf{V}}\bigl(A,\ \operatorname{Hom}_{\mathsf{C}}(X,Y)\bigr)
  \]
  其中 $A\in\mathsf{V}$，$X,Y\in\mathsf{C}$，
  并记 $\operatorname{Hom}_{\mathsf{V}}$ 为 $\mathsf{V}$ 的幂函子。

:::

::: example

- 不难看出，$\mathsf{Set}$、$\mathsf{Top}$ 和
  $\mathsf{sSet}$ 都是 $\mathsf{Set}$-张量、余张量的。

- 单纯范畴 $\mathsf{Top}$、$\mathsf{sSet}$
  都是 $\mathsf{sSet}$-张量、余张量的。

:::

下面，我们来定义单纯模型范畴。

::: definition
单纯范畴 $\mathsf{C}$ 的**底范畴**
$\mathsf{C}_0$ 是一个普通范畴，
它将 $\mathsf{C}$ 中态射空间的 $0$-单形看作态射，
然后扔掉所有的高维单形。
:::

::: definition
**单纯模型范畴**由以下信息组成：

- 单纯范畴 $\mathsf{C}$。

- 在 $\mathsf{C}$ 的底范畴 $\mathsf{C}_0$ 上，有一个模型结构，

满足以下条件：

- $\mathsf{C}$ 是 $\mathsf{sSet}$-张量、余张量的。

- 对 $\mathsf{sSet}$ 中的任何余纤维化 $i\colon A\to B$，
  及 $\mathsf{C}_0$ 中的任何余纤维化 $j\colon X\to Y$，
  明显的映射
  \[
  i \mathbin{\square} j \colon A \otimes Y \underset{A\otimes X}{\sqcup} B\otimes X \to B\otimes Y
  \]
  是 $\mathsf{C}_0$ 中的余纤维化，
  且当 $i$ 或 $j$ 平凡时平凡。

:::

上述最后一个条件可能看起来有些令人困惑，
但它其实很自然，只要考虑下面的例子就能理解其含义：
\[
\begin{aligned}
  \mathsf{C} &= \mathsf{V} = \mathsf{sSet}, \\
  A &= \{0\} \subset \Delta[1], & B &= \Delta[1], \\
  X &= \partial\Delta[2], & Y &= \Delta[2].
\end{aligned}
\]
这一条件保证了 $\mathsf{C}$ 和 $\mathsf{V}$ 上的模型结构是相容的。

::: example
$\mathsf{Top}$ 和 $\mathsf{sSet}$ 都是单纯模型范畴。
:::

值得注意的是，对于单纯模型范畴而言，
有两种方法从它出发构造 $\infty$-范畴：

- 单纯模型范畴是单纯范畴，单纯范畴能给出 $\infty$-范畴。

- 单纯模型范畴是弱等价范畴，通过局部化也能得到一个 $\infty$-范畴。

令人惊讶的是，通过上述两种方法得到的 $\infty$-范畴是等价的。
因此，要研究通过局部化得到的 $\infty$-范畴，
我们只需要研究模型范畴的单纯结构，而后者通常是更容易描述的。

::: theorem [Dwyer–Kan]
设 $\mathsf{C}$ 是单纯模型范畴。
则 $\mathsf{C}_{\mathrm{cf}}$ 是充实于 Kan 复形的范畴，
并且，有拟范畴的等价
\[
\mathsf{C}[\mathsf{W}^{-1}] \simeq \mathfrak{N}\mathsf{C}_{\mathrm{cf}}.
\]
:::

见 [@HA, Theorem 1.3.4.20]。

::: example
现在，@rmk-4-locn 中提到的拟范畴等价终于可以被上一定理说明：
我们有
\[
\mathsf{S}\simeq\mathsf{sSet}[\mathsf{W}^{-1}], \quad
\mathsf{D}_\infty(\mathsf{A})\simeq\mathsf{Ch}_{\mathsf{A}}[\mathsf{W}^{-1}],
\]
其中 $\mathsf{A}$ 是 Abel 范畴，要满足
$\mathsf{Ch}_{\mathsf{A}}$ 具有单纯模型范畴的结构，
例如可以取 $\mathsf{A}$ 为交换环上的模范畴。
:::
