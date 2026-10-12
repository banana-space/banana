---
title: 连续函数的拓扑刻画
---

## 关于连续性的补充

对于上次课定义的对数函数和幂函数等，我们对它们的连续性做一下补充，
这可以加深我们作为从映射的观点看函数的理解。以对数函数为例子：

给定 $a >0$，$a\neq 1$，$x>0$，我们定义了 $\log_a x =\dfrac{\log x}{\log a}$。
当 $a>0$ 固定的时候，作为 $x$ 的函数 $x\mapsto \log_a x$，我们已经说明它是连续函数。
现在，我们把 $a$ 看成变量，从而我们定义函数
\[
{\rm LOG}\colon  \mathbb{R}_{>0,\neq 1}\times \mathbb{R}_{>0}\rightarrow \mathbb{R}, \ \ (a,x)\mapsto \log_a x,
\]
其中 $\mathbb{R}_{>0,\neq 1}=(0,1)\cup(1,\infty)$。

在 $ \mathbb{R}_{>0,\neq 1}\times \mathbb{R}_{>0}\rightarrow \mathbb{R}$ 有自然的距离函数
（作为 $\mathbb{R}^2$ 的子集），我们要说明 ${\rm LOG}$ 是连续函数（作为双变量的函数）！

首先考虑如下两个映射
\[
\begin{aligned}
f_1&\colon   \mathbb{R}_{>0,\neq 1}\times \mathbb{R}_{>0} \longrightarrow \mathbb{R}_{\neq 0}, \ \ \ (a,x) \mapsto \log(a);\\
f_2&\colon   \mathbb{R}_{>0,\neq 1}\times \mathbb{R}_{>0} \longrightarrow \mathbb{R}, \ \ \ (a,x) \mapsto \log(x).
\end{aligned}
\]
根据实数上定义的 $\log$ 的连续性，我们很容易验证 $f_1$ 和 $f_2$ 连续（请自行验证），
根据我们上次课关于在乘积空间上取值的函数的连续性的判断，映射
\[
F\colon   \mathbb{R}_{>0,\neq 1}\times \mathbb{R}_{>0} \longrightarrow  \mathbb{R}_{\neq 0} \times \mathbb{R},  \ \ \ (a,x) \mapsto \bigl(\log(a),\log(x)\bigr),
\]
是连续的。
再考虑映射
\[
D\colon   \mathbb{R}_{\neq 0}\times \mathbb{R}
\longrightarrow  \mathbb{R},  \ \ \ (y,x) \mapsto \frac{x}{y} .
\]
我们很容易验证 $D$ 是连续的（请自行验证）。从而，${\rm LOG}$ 是 $D$ 和 $F$ 的复合：
\[
\begin{tikzcd}
  \mathbb{R}_{>0,\neq 1}\times \mathbb{R}_{>0} \ar[r,"F"] \ar[dr,"{\rm LOG}"'] &\mathbb{R}_{\neq 0} \times \mathbb{R} \ar[d,"D"]\\ &\mathbb{R}
\end{tikzcd}
\]
自然是连续的。以上，我们把一个复杂的函数拆成若干个相对简单的连续映射的复合来证明连续性。

我们再举一个例子来说明这个想法的应用，假设 $f(x)$ 和 $g(x)$ 是 $\mathbb{R}$ 上的连续函数，
我们想证明它们的乘积 $f\cdot g$ 也是连续的。为此，我们考虑
\[
F\colon   \mathbb{R}  \longrightarrow  \mathbb{R} \times \mathbb{R},  \ \ \ x \mapsto \bigl(f(x),g(x)\bigr),
\]
它两个分量都是连续的，所以 $F$ 连续。另外，再考虑乘法映射：
\[
\times \colon   \mathbb{R} \times \mathbb{R}  \longrightarrow  \mathbb{R},  \ \ \ (x,y) \mapsto x\cdot y .
\]
我们容易验证 $\times$ 是连续的（请自行验证）。
从而，$f\cdot g$ 可以看作是连续映射 $\times$ 和 $F$ 的复合：
\[
\begin{tikzcd}
  \mathbb{R} \ar[r,"F"] \ar[dr,"f\cdot g"'] &\mathbb{R} \times \mathbb{R} \ar[d,"\times"]\\ &\mathbb{R}
\end{tikzcd}
\]
从而是连续的。

我们再做一点补充，关于连续函数在一点上的值的计算：
假设 $\mathbb{R}$ 上定义函数 $f(x)$ 是连续的，如果我们知道 $f$ 在有理数上的取值，
那么对任意的无理数 $x$，我们任取一列有理数 $r_i$，使得 $r_i\rightarrow x$，
连续性保证了 $\displaystyle f(x)=f(\lim_{i\rightarrow \infty} r_i)
=\lim_{i\rightarrow \infty } f(r_i)$，所以 $f(x)$ 可以确定。
注意到 $\mathbb{Q}$ 是 $\mathbb{R}$ 中“很小”的子集，由连续性，它已经可以确定 $f$ 了！
这是分析学最重要的精神之一：如何从“局部”到整体！

我们现在给出这个补充的数学表述：首先回忆一下我们在第一次作业的题目A中引入的定义：

::: definition
给定距离空间 $(X,d)$，$X' \subset X$ 是子集。
如果对任意的 $x\in X$ 和任意的 $\varepsilon>0$，都存在 $x'\in X'$，
使得 $d(x',x)<\varepsilon$，我们就称 $X'$ 在 $X$ 中是**稠密的**。
:::

根据定义，对任意给定的 $x\in X$，令 $\varepsilon=\dfrac{1}{n}$，
我们选取 $x'_n \in X'$ 使得 $d(x_n',x)<\dfrac{1}{n}$，
从而我们得到点列 $\{x'_n\}_{n\geqslant 1}\subset X'$，
使得 $x'_n\rightarrow x$，即 $X$ 中的每个点都可以用 $X'$ 中的点来逼近，
这个表述是很有用的。

::: theorem
$(X,d)$ 和 $(Y,d_Y)$ 是距离空间，$X' \subset X$ 是一个稠密的子集，
我们仍然用 $d$ 表示 $X'$ 上的距离。
对任意的连续映射 $F_1\colon X\rightarrow Y$ 和 $F_2\colon X\rightarrow Y$，
$F_1\big|_{X'}=F_2\big|_{X'}$，那么，$F_1=F_2$，
换而言之，连续映射被它在一个稠密子集上的限制所决定。
:::

::: proof
假设 $x\in X$，我们任意选取 $\{x'_n\}_{n\geqslant 1}\subset X'$，
使得 $x'_n\rightarrow x$。因为 $F_1$ 和 $F_2$ 在 $X$ 上连续，所以
\[
F_1(x)=\lim_{n\rightarrow \infty}F_1(x'_n)
=\lim_{n\rightarrow \infty}F_2(x'_n)=F_2(x).
\]
命题得证。
:::

## 基础拓扑：开集与闭集

我们要讨论函数**一致连续**的概念，为此，我们要采取一个迂回的方式
而不是直接利用目前已经熟悉的数列收敛的工具。
这个繁琐方法的优点可以引进所谓的拓扑的概念并给出连续映射的第三种等价的刻画
（之前我们可以用点列或者 $\varepsilon-\delta$ 语言来谈论连续性）。
在开始介绍拓扑的概念之前，我们引用John von Neumann的一段话：

Young man, in mathematics you don't understand things. You just get used to them.

首先谈论 $\mathbb{R}$ 上的开闭集，这些概念是我们熟知的开区间和闭区间的类比：

- 1\) 如果 $U\subset \mathbb{R}$ 是开区间的并，
  即 $U=\displaystyle \bigcup_{\alpha \in \mathcal{A}} I_\alpha$，
  其中 $I_\alpha$ 是开区间（指标集 $\mathcal{A}$ 是任意的），就称 $U$ 是**开集**。

  按照定义，$U$ 是开集当且仅当
  对任意 $x\in U$，存在包含 $x$ 的开区间，使得该开区间完全包含在 $U$ 中。
  另外一个等价的描述就是，对任意的 $x\in U$，存在 $\delta_x>0$，
  当 $|y-x|<\delta_x$ 时，$y\in U$，即和 $x$ 邻近的点都落在 $U$ 中。

  按照定义，$\mathbb{R}$ 是开集。我们规定 $\emptyset$ 也是开集。
  对于 $x\in \mathbb{R}$，我们习惯上将包含 $x$ 的一个开集称作是 $x$ 的一个**开邻域**。

- 2\) 如果 $F\subset \mathbb{R}$ 的补集是开集，我们就称 $F$ 是**闭集**。

  按照定义，$\mathbb{R}$，$\emptyset$，闭区间 $[a,b]$，$[a,\infty)$ 以及 $(-\infty,a]$ 都是闭集。

  我们还有一种方式来判断一个集合是否是闭集（闭的意思可以解释为对这个集合中的点列取极限是封闭的）：

  - $F$ 是闭集当且仅当对任意数列 $\{x_n\}_{n\geqslant 1}\subset F$，
    如果 $\displaystyle \lim_{n\rightarrow \infty}x_n = x$，那么 $x \in F$。

  证明分两个方面：

  如果 $F$ 是闭集，任选 $\{x_n\}_{n\geqslant 1}\subset F$，
  $\displaystyle \lim_{n\rightarrow \infty}x_n = x$，
  我们用反证法假设 $x\notin F$ 来推出矛盾：
  按照定义，$\mathbb{R}-F$ 是开集，所以存在 $\delta>0$，
  使得 $[x-\delta,x+\delta] \cap F=\emptyset$，
  从而对任意的 $x_n \in F$，$|x_n-x|\geqslant \delta$，
  这与 $\displaystyle \lim_{n\rightarrow \infty}x_n = x$ 矛盾。

  反过来，我们假设对任意数列 $\{x_n\}_{n\geqslant 1}\subset F$，
  $\displaystyle \lim_{n\rightarrow \infty}x_n = x$ 能推出来 $x \in F$。
  我们需要证明 $\mathbb{R}-F$ 为开集：如若不然，存在 $x\notin F$，
  使得对任意的包含 $x$ 的开区间 $I$，$I \not\subset \mathbb{R}-F$，
  或者说 $I\cap F\neq \emptyset$，特别地，
  我们依次选取 $I=(x-\dfrac{1}{n},x+\dfrac{1}{n})$，
  由于 $I\cap F\neq \emptyset$，
  我们选取 $x_n \in (x-\dfrac{1}{n},x+\dfrac{1}{n})\cap F$，
  从而 $x_n \rightarrow x$，但是 $x\notin F$，矛盾。

  利用上面的结论也很容易判断闭区间等是闭集。

我们有下面证明简单但是意义重大的命题：

::: proposition [$\mathbb{R}$ 上标准拓扑的概念] {@prop:top-on-R}
我们用 $\mathcal{T}$ 表示 $\mathbb{R}$ 上的开集的全体，它满足如下的性质：

- 1\) $\emptyset \in \mathcal{T}$，$\mathbb{R} \in \mathcal{T}$。

- 2\) 对任意开集的集合 $\{U_{\alpha}\}_{\alpha \in \mathcal{A}}$，
  其中 $\mathcal{A}$ 为指标集合，
  我们有 $\displaystyle\bigcup_{\alpha \in \mathcal{A}}U_\alpha \in \mathcal{T}$。

- 3\) 对任意有限个开集 $U_1,U_2,\cdots, U_m \in \mathcal{T}$，
  我们有 $\displaystyle\bigcap_{1\leqslant i\leqslant m}U_i \in \mathcal{T}$。

对于闭集，我们有如下对偶的性质：

- 1\) $\emptyset$ 和 $\mathbb{R}$ 都是闭集。

- 2\) 任意多闭集的交集还是闭集。

- 3\) 有限个闭集的并集还是闭集。

:::

::: proof
给定子集 $S\subset \mathbb{R}$，我们用 $S^{\rm c}$ 表示 $S$ 在 $\mathbb{R}$ 中的补集。
对任意的指标集合 $\mathcal{A}$，我们知道
\[
\left(\bigcup_{\alpha \in \mathcal{A}}S_\alpha\right)^{\rm c}
=\bigcap_{\alpha \in \mathcal{A}}\bigl(S_\alpha\bigr)^{\rm c},
\ \ \ \left(\bigcap_{\alpha \in \mathcal{A}}S_\alpha\right)^{\rm c}
=\bigcup_{\alpha \in \mathcal{A}}\bigl(S_\alpha\bigr)^{\rm c}.
\]
利用这个结论，我们可以用开集的结论立即推出闭集的结论。

关于开集的结论中的前两条是平凡的，现在来证明3)：
任意选取 $x\in \displaystyle\bigcap_{1\leqslant i\leqslant m}U_i$，
所以对每个 $i=1,\cdots,m$，$x\in U_i$，从而存在开区间 $I_i$，使得 $I_i\subset U_i$。
我们注意到 $I=\displaystyle\bigcap_{1\leqslant i\leqslant m}I_i$ 也是开区间
并且是 $\displaystyle\bigcap_{1\leqslant i\leqslant m}U_i$ 的子集，
所以 $\displaystyle\bigcap_{1\leqslant i\leqslant m}U_i$ 是开集。
:::

我们可以更精确地用开区间刻画 $\mathbb{R}$ 上的开集。
请记住，这是 $\mathbb{R}$ 的特殊性质，不能推广到更一般维数：

::: proposition
假设 $U\subset \mathbb{R}$ 是开集，那么 $U$ 是可数个两两相互不交的开区间的并，
即 $U=\displaystyle\coprod_{ i=1}^\infty I_i$，其中 $I_i$ 是开区间（包括空集）。
:::

::: proof
根据开集的定义，对任意 $x\in U$，
$\mathcal{I}_x=\bigl\{I\bigm| I\text{ 是开区间},x\in I, I\subset U\bigr\}$ 非空。
据此，我们定义 $\mathbf{I}_x=\displaystyle \bigcup_{I\in \mathcal{I}_x}I$，
这是落在 $U$ 中并且包含 $x$ 的所有的开区间的并。
特别地，这是一个开集并且 $x\in \mathbf{I}_x\subset U$。
我们要证明 $\mathbf{I}_x\in \mathcal{I}_x$，即 $\mathbf{I}_x$ 也是开区间。

假设 $x_1,x_2 \in \mathbf{I}_x$ 并且 $x_1<x_2$。
按定义，存在开区间 $I_1$ 和 $I_2$[^1]，使得 $x_1\in I_1$，$x_2\in I_2$，
从而 $x_1,x_2\in I_1\cup I_2$。
由于 $x\in I_1 \cap I_2$，所以 $I_1\cup I_2$ 是开区间（它们相交），
从而 $(x_1,x_2) \in \mathcal{I}_x$[^2]，所以 $(x_1,x_2)\subset \mathbf{I}_x$。
令 $b=\sup\, \mathbf{I}_x$，$a=\inf \,\mathbf{I}_x$（可以是正负无穷大）。
按照定义，$\mathbf{I}_x\subset [a,b]$。
我们现在可以证明 $(a,b)\subset\mathbf{I}_x$，
这是因为对于任意的 $c\in (a,b)$，利用上下确界的定义，
存在 $x_1,x_2 \in \mathbf{I}_x$ 并且 $a<x_1<c<x_2<b$，
上面的推理表明 $(x_1,x_2)\subset \mathbf{I}_x$，所以 $c\in \mathbf{I}_x$。

综合上述，我们知道 $(a,b)\subset \mathbf{I}_x\subset [a,b]$，
根据 $\mathbf{I}_x$ 是开集，只有 $\mathbf{I}_x=(a,b)$。
至此，我们说明了存在包含 $x$ 的最大的开区间 $\mathbf{I}_x\subset U$。

根据区间的最大性，对于 $x,y \in U$，要么 $\mathbf{I}_x =\mathbf{I}_y$，
要么 $\mathbf{I}_x\cap \mathbf{I}_y=\emptyset$。
所以，$U$ 可以写成不同的 $\mathbf{I}_x$ 的无交集并。
我们在研究单调函数的不连续点的时候已经证明了 $\mathbb{R}$ 上不交的开区间只有可数个，
参见 @thm:discountinous-points-of-a-continous-functions-are-countable。
:::

我们现在给出连续函数的第三个刻画：

::: theorem [连续函数的拓扑表示]
给定函数 $f\colon \mathbb{R}\rightarrow \mathbb{R}$，
那么 $f$ 是连续函数当且仅当任意开集的逆像是开集，
即对任意的 $U\in \mathcal{T}$，$f^{-1}(U) \in \mathcal{T}$。
:::

::: proof
先假设 $f$ 是连续函数，我们证明 $f^{-1}(U)$ 是开集，其中 $U$ 是开集：
任选 $x_0\in f^{-1}(U)$，令 $y_0=f(x_0)\in U$，由于 $U$ 是开集，
存在 $\delta>0$，使得对任意满足 $|y-y_0|<\delta$ 的 $y$，我们都有 $y\in U$。
由于 $f$ 连续，所以存在 $\varepsilon>0$，使得当 $|x-x_0|<\varepsilon$ 时，
$|f(x)-y_0|<\delta$，这表明当 $|x-x_0|<\varepsilon$ 时，
$f(x)\in U \Leftrightarrow x\in f^{-1}(U)$，所以 $f^{-1}(U)$ 是开集。

现在假设对任意的开集 $U$，$f^{-1}(U)$ 是开集，我们来证明 $f$ 是连续的：
给定 $x_0\in \mathbb{R}$，令 $y_0=f(x_0)$，考虑 $y_0$ 处的开集 $B(y_0,\delta)$
（以 $y_0$ 为中心半径为 $\delta$ 的小球，即对任意的 $x\in \mathbb{R}$，$a>0$，
我们令 $B(x,a)=(x-a,x+a)$）。由于 $f^{-1}\bigl(B(y_0,\delta)\bigr)$ 为开集
且 $x_0\in f^{-1}\bigl(B(y_0,\delta)\bigr)$，所以存在 $\varepsilon >0$，
使得 $B(x_0,\varepsilon)\subset f^{-1}\bigl(B(y_0,\delta)\bigr)$，
从而，$f\bigl(B(x_0,\varepsilon)\bigr)\subset B(y_0,\delta)$，
这说明对任意的 $\delta$，存在 $\varepsilon$，使得当 $|x-x_0|<\varepsilon$ 时，
我们有 $|f(x)-f(x_0)|<\delta$，从而 $f$ 在 $x_0$ 处连续。
:::

还有一个有用的概念，叫做一个集合的闭包：

::: definition
给定集合 $X\subset \mathbb{R}$，我们称 $\overline{X}$ 为 $X$ 的**闭包**，
其中 $\overline{X}$ 为包含 $X$ 的所有闭集的交，即包含 $X$ 的最小闭集。
:::

同时，我们也引入聚点和导集的概念：

::: definition
对于 $x\in \mathbb{R}$，如果存在数列 $\{x_k\}_{k\geqslant 1}\subset X$，
其中 $x_k\neq x$，使得 $\displaystyle \lim_{k\rightarrow \infty}x_k = x$，
我们就称 $x$ 是 $X$ 的一个**聚点**。
$X$ 中不是 $X$ 的聚点的点被称作 $X$ 的**孤立点**。
$X$ 中所有聚点所组成的集合称作 $X$ 的**导集**，记作 $X'$。
如果 $X=X'$，我们称 $X$ 为**完美集**。
:::

并不是所有 $X$ 中的点都是 $X$ 的聚点，也并不是所有的 $X$ 的聚点都在 $X$ 中：
考虑 $X=(1,2]\cup\{3\}$，$1\notin X$ 是 $X$ 的聚点，$3\in X$ 不是 $X$ 的聚点。

::: proposition
$\overline{X}=X'\cup X$。特别地，
$F$ 是闭集当且仅当 $F'\subset F$，也就是 $F$ 的聚点都在 $F$ 中。
:::

::: proof
首先证明 $\overline{X}$ 包含 $X$ 中的所有点和 $X$ 的一切聚点：
假设 $x\in X$，又考虑到 $X\subset\overline{X}$，显然有 $x\in\overline{X}$。
假设 $x\in \mathbb{R}$ 是 $X$ 的聚点，即存在数列 $\{x_k\}_{k\geqslant 1}\subset X$，
其中 $x_k\neq x$，使得 $\displaystyle \lim_{k\rightarrow \infty}x_k = x$，
根据 $\overline{X}$ 是闭集，可以得到 $x\in \overline{X}$。

其次，我们要证明对任意的 $x\in \overline{X}$，如果 $x\notin X$，
那么存在数列 $\{x_k\}_{k\geqslant 1}\subset X$，其中 $x_k\neq x$，
使得 $\displaystyle \lim_{k\rightarrow \infty}x_k = x$。

那么，对任意的 $n>0$，$B(x,\frac{1}{n})\cap X\neq \emptyset$，
其中，$B(x,\frac{1}{n})=(x-\dfrac{1}{n},x+\dfrac{1}{n})$。
（如果不然，那么 $B(x,\frac{1}{n})\cap X = \emptyset$，
所以 $X\subset \mathbb{R}-B(x,\frac{1}{n})$。
然而 $\mathbb{R}-B(x,\frac{1}{n})$ 是闭集并且包含 $X$，
所以 $\mathbb{R}-B(x,\frac{1}{n})\supset \overline{X}$，
这与 $x\notin \mathbb{R}-B(x,\frac{1}{n})$ 相矛盾）。
所以，我们可以选取 $x_k \in B(x,\frac{1}{k})\cap X$，
这个数列的极限就是 $x$。同时，$x\notin X$，所以 $x_k\neq x$ 也是满足的。
:::

[^1]: 属于 $\mathcal{I}_x$，否则不一定有 $x \in I_1 \cap I_2$。
[^2]: 不一定，比如 $x<x_1<x_2$。
  但 $I_1 \cup I_2$ 是开区间可以推出 $(x_1,x_2) \subset I_1 \cup I_2 \subset \mathbf{I}_x$。
