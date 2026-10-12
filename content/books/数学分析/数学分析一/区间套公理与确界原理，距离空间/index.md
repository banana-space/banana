---
title: 区间套公理与确界原理，距离空间
---

## 实数的基本性质

假设存在 $(\mathbb{R}, +,\cdot,\leqslant)$ 满足 **(F)、(O)、(A)、(I)** 四套公理，
除了上次课练习题中已证明的结论，实数还有许多为人们所“熟知的”性质。
我们强调的是这些性质需要在以上公理化的体系下被证明。
我们补充几个这样的性质，它们证明比较简单，我们仍以课堂习题的方式给出，
细节留给同学在整理笔记的时候给出：

::: exercise*
- 1\) $x\leqslant y$ 和 $y< z$ 可以推出 $x<z$；$x< y$ 和 $y\leqslant z$ 可以推出 $x<z$。

- 2\) $\mathbb{R}$ 的有限子集都有唯一的最大元和唯一的最小元（我们约定集合中的两个元素是不同的）。
  特别地，如果 $A\subset \mathbb{R}$ 是有限子集，$n=|A|$，那么可以将 $A$ 中的元素排序，使得
  \[
  A=\{a_1,a_2,\cdots,a_n\}, \ \ a_1<a_2<\cdots<a_n.
  \]

- 3\) $x_1, \cdots, x_n$ 和 $y_1,\cdots,y_n$ 是实数，对任意的指标 $1\leqslant i\leqslant n$，
  $x_i\leqslant y_i$，那么
  \[
  x_1+\cdots+x_n \leqslant y_1+\cdots + y_n.
  \]
  上面的不等式取等号当且仅当对所有的 $i$，我们都有 $x_i=y_i$。
  特别地，对于非负实数 $a_1,\cdots,a_n$，它们的和 $\displaystyle \sum_{i=1}^na_i$ 也是非负实数，
  此和为零当且仅当所有的 $a_i$ 均为零。（这个命题当 $n=2$ 时前面已经证明）

:::

关于实数有一个重要（但是简单）的事实：存在充分大的正数，也存在充分小的正数。
这将是数学分析中反复使用的事实。
这个命题的精确说法如下（这是我们第一次用到 $\varepsilon-\delta$ 语言）：

::: lemma
对任意的正实数 $A$，总存在 $M$，使得 $M>A$；对任意的正实数 $a$，总存在正实数 $\varepsilon$，
使得 $\varepsilon<a$。
:::

::: proof
我们可以选取 $M=A+1$，$\varepsilon=\dfrac{a}{2}$。证明的要点在于说明 $\dfrac{1}{2}<1$。
:::

我们按照如下方式定义**绝对值函数**$|\cdot|\colon\mathbb{R}\rightarrow \mathbb{R}_{\geqslant 0}$：
对任意的 $x\in \mathbb{R}$，
\[
x\mapsto |x|=\begin{cases}x, \ &{\text{如果}}x\geqslant 0;\\
-x, \ &{\text{如果}}x< 0.\end{cases}
\]

::: exercise*
$a$ 是非负实数。证明，$|x|\leqslant a$ 当且仅当 $-a\leqslant x\leqslant a$。
特别地，$x=0$ 当且仅当 $|x|=0$。
:::

::: lemma
绝对值函数 $|\cdot|\colon\mathbb{R}\rightarrow \mathbb{R}_{\geqslant 0}$ 满足下面的性质：

- 1\) 假设 $a\in \mathbb{R}_{\geqslant 0}$。
  证明，$|x|\leqslant a$ 当且仅当 $-a\leqslant x\leqslant a$。特别地，$x=0$ 当且仅当 $|x|=0$。

- 2\) 对任意实数 $x$ 和 $y$，我们有
  \[
  |x+y|\leqslant |x|+|y|, \ \ \big||x|-|y|\big|\leqslant |x-y|.
  \]
  特别地，我们有 $|x_1+\cdots+x_n|\leqslant |x_1|+\cdots+|x_n|$，
  其中 $\{x_i\}_{1\leqslant i \leqslant n}\subset \mathbb{R}$。

:::

::: proof
我们只对2)中第一个不等式进行证明，其余的部分是简单的，留给同学自行验证。
对 $x$ 和 $y$ 分情况讨论：如果 $x$ 和 $y$ 的符号一致，命题是显然的，
所以不妨假设 $x\leqslant 0 \leqslant y$。
此时，$x+y \leqslant |x|+|y|$ 是明显的，下面说明 $x+y\geqslant -(|x|+|y|)$，
这是因为 $-|x|\leqslant x$，$-|y|\leqslant y$。
:::

在实数 $\mathbb{R}$ 上研究分析有一个重要的“几何观点”：尽管这个看法很“自然”，然而从公理化的观点而言，
这绝非显而易见：

::: remark*
我们将 $\mathbb{R}$ 想象成一条“直线”：每个实数对应直线上的一个点；大小关系可以两点的一左一右来确定；
区间就是两点之间的线段，诸如此类。

这种形象的看法使得在很多场合下的推理和计算变得容易操作和叙述。
然而必须强调的是，在证明或者计算的过程中上述图像只起辅助的作用，
一切结论都是严格根据从实数公理出发的所得到的结论通过正确推理而来。
（这一如平面几何中画图对证明所起到的作用）

分析学会进一步深化这种几何化的看法：我们倾向于**几何地**考虑问题。
比如说，
我们会将尽量多的数学对象想象成空间的点并发展相应的理论使得我们对于几何的直观在应用的时候是严格的。
:::

我们注意到，迄今为止，我们还未使用公理 **(I)**（区间套原理），上次课的最后也提到过，
如果只用前三套公理体系，那么这种“实数”可能只包含有理数，这自然不是我们想要的实数理论。
下面要证明的**确界原理**就依赖于区间套原理。

$X \subset \mathbb{R}$ 是实数的集合，$a, A \in \mathbb{R}$。
如果对任意 $x \in X$，都有 $x \leqslant A$，就称 $A$ 是 $X$ 的一个**上界**；如果对任意 $x\in X$，
都有 $x\geqslant a$，我们就称 $a$ 是 $X$ 的一个**下界**。
如果 $X$ 既有上界又有下界，我们就说 $X$ 是**有界的**。
$X$ 有界等价于存在（大的）正实数 $M$，使得对任意 $x\in X$，我们都有 $|x|\leqslant M$。

::: theorem [确界原理] {@thm:sup}
假设 $X\subset \mathbb{R}$ 是非空的并且 $X$ 有上界。
令
$\overline{\mathcal{M}}=\bigl\{\overline{M}\in \mathbb{R}\big| \overline{M} \text{是 $X$ 的上界}\bigr\}$，
则 $\overline{\mathcal{M}}$ 有（唯一的）最小元，即存在 $\overline{M_0}\in \overline{\mathcal{M}}$，
使得任意的 $\overline{M}\in \overline{\mathcal{M}}$，都有 $\overline{M_0}\leqslant \overline{M}$。

我们称 $\overline{M_0}$ 为 $X$ 的**上确界**，记作 $\sup X$。
:::

::: proof
任选 $x\in X$，
任取上界 $\overline{M}\in \overline{\mathcal{M}}$ 并不妨假设 $x\notin \overline{\mathcal{M}}$（否则
$x=\sup X$）。
对每一个正整数 $n\geqslant 1$，根据Archimedes公理，存在正整数 $k$，
使得 $x+k 2^{-n}\geqslant \overline{M}$，从而 $x+k 2^{-n}\in \overline{\mathcal{M}}$ 是上界。
我们令 $k_n$（$\geqslant 1$ 根据 $x\notin \overline{\mathcal{M}}$）是最小的使得
$x+k_n2^{-n}\in \overline{\mathcal{M}}$ 是上界的正整数，
令 $I_n=[x+(k_n-1)2^{-n}, x+k_n 2^{-n}]=[a_n,b_n]$（闭区间），那么

- a) $I_n \cap X \neq \emptyset$。

  如果不然，对任意的 $y \in X$，都有 $y \notin I_n$。
  很明显，$y$ 落在 $I_n$ 的右端点 $b_n$ 的左边（因为 $b_n$ 是上界），
  所以 $y$ 只能落在整个 $I_n$ 的左边，这表明 $I_n$ 的左端点 $a_n$ 也是上界。
  但是，这与 $k_n$ 的选取方式（最小性）矛盾。

- b) $I_n\supset I_{n+1}$。

  根据区间 $I_n$ 的构造方式，它的右端点 $b_n$ 是上界，
  左端点 $a_n$ 不是上界（即存在 $y\in X$ 使得 $y>a_n$）。
  为了说明 $I_n\supset I_{n+1}$，我们要证明下面的不等式即可：
  \[
  a_n\leqslant a_{n+1}, \ b_{n+1}\leqslant b_{n}  \Leftrightarrow  (k_{n}-1)2^{-n}\leqslant (k_{n+1}-1)2^{-(n+1)}, \ k_{n+1}2^{-(n+1)}\leqslant k_{n}2^{-n}
  \]
  我们用反证法。

  先比较右端点，如果 $k_{n+1}2^{-(n+1)}>k_{n}2^{-n}$，
  那么 $k_{n+1}2^{-(n+1)}$ 比 $k_{n}2^{-n}$ 至少大出来 $2^{-(n+1)}$ 这么多，
  所以 $(k_{n+1}-1)2^{-(n+1)}\geqslant k_{n}2^{-n}$，
  这表明 $I_{n+1}$ 的左端点 $a_{n+1}$ 在 $I_{n}$ 的右端点 $b_n$ 的右边（可能重合），
  即 $a_{n+1}\geqslant b_{n}$，从而 $a_{n+1}$ 也是 $X$ 的上界，矛盾。

  其次比较左端点，如果 $(k_{n+1}-1)2^{-(n+1)}<(k_{n}-1)2^{-n}$，
  和上面一样的推理我们就知道 $k_{n+1}2^{-(n+1)}\leqslant (k_{n}-1)2^{-n}$，
  这表明 $I_{n+1}$ 的右端点 $b_{n+1}$ 在 $I_{n}$ 的左端点 $a_n$ 的左边（可能重合），
  所以 $a_n$ 是 $X$ 的上界，矛盾。

根据区间套公理，我们令 $J=\displaystyle\bigcap_{n\geqslant 1}I_n \neq \emptyset$。
我们注意到，$J$ 恰好只含有一个元素：如果不然，
我们在 $J$ 中选取两个点（我们认为点＝数）$a$ 和 $b$ 并且不妨假设 $a<b$。
按照定义，对任意的 $n$，$a, b\in I_n$。
特别地，我们可以选取 $n$，使得 $b-a>2^{-n}$（即 $2^n(b-a)>1$），
此时区间 $I_n$ 的长度小于 $a$ 和 $b$ 之间的距离，它不可能同时包含 $a$ 和 $b$ 这两个点，矛盾！所以，
我们假设 $J=\{\overline{M_0}\}$。那么，我们有

- $\overline{M_0} \in \overline{\mathcal{M}}$，即 $\overline{M_0}$ 是 $X$ 的一个上界。

  如若不然，存在 $y\in X$，使得 $y>\overline{M_0}$。
  根据定义，对每个 $n$，我们都有 $\overline{M}_0\in I_n$（因为 $J$ 是所有 $I_n$ 的交集），
  所以 $b_n-\overline{M}_0\leqslant 2^{-n}$。
  我们可以选取很大的 $n$，使得 $2^{-n}< y-\overline{M_0}$，
  从而 $y>\overline{M_0}+2^{-n}\geqslant b_n$，这和 $b_n$ 是 $X$ 的上界矛盾（按照 $I_n$ 的构造方式，
  它的右端点 $b_n$ 是 $X$ 的上界）。

- $\overline{M_0}=\displaystyle\min_{\overline{M}\in \overline{\mathcal{M}}}\overline{M}$
  是最小的上界。

  如若不然，那么存在 $\widetilde{M}\in \overline{\mathcal{M}}$ 使得 $\widetilde{M}<\overline{M_0}$。
  由于对每个 $n$，我们都有 $\overline{M}_0\in I_n$，所以 $a_n+ 2^{-n}\geqslant \overline{M}_0$。
  我们可以选取很大的 $n$，使得 $2^{-n}< \overline{M_0}-\widetilde{M}$，从而 $a_n>\widetilde{M}$，
  这和 $a_n$ 不是 $X$ 的上界矛盾。

综上所述，命题得证。
:::

::: remark*
关于确界，我们有下面几个补充，第三个尤为重要：

- 1\) 对偶的命题：假设 $X\neq \varnothing$ 有下界，
  令
  $\underline{\mathcal{M}}=\bigl\{\underline{M}\in \mathbb{R}\mid\underline{M} \text{是 $X$ 的下界}\bigr\}$。
  那么，$\underline{\mathcal{M}}$ 有（唯一的）最大元，
  即存在 $\underline{M_0}\in \underline{\mathcal{M}}$，
  使得任意的 $\underline{M}\in \underline{\mathcal{M}}$，
  都有 $\underline{M_0}\geqslant \underline{M}$。
  我们称 $\underline{M_0}$ 为 $X$ 的**下确界**，记作 $\inf X$。

- 2\) $\inf X\leqslant \sup X$。

- 3\)（上确界的刻画）
  假设非空集合 $X\subset \mathbb{R}$ 有上界并且实数 $M$ 是 $X$ 的上界。那么，下面两个命题是等价的

  - ${M}=\sup X$。

  - 对任意的 $\varepsilon>0$，都存在 $x\in X$，使得 $x>{M}-\varepsilon$。

  集合的下确界也可以类似地刻画，我们略去叙述。这个刻画的证明我们留做作业题。

- 4\) 假设 $(\mathbb{R},+,\cdot,\leqslant)$ 满足 **(F)、(O)** 和Archimedes公理 **(A)** 这三套公理。
  如果我们假设确界定理成立，那么区间套公理 **(I)** 可以被证明：

  对任意的闭区间套序列 $\{I_n=[a_n,b_n]\}_{n=1,2,\cdots}$，其中对任意的 $n$，
  有 $a_n\leqslant a_{n+1}$，$b_{n+1}\leqslant b_n$。
  很明显，集合 $A=\{a_n\}_{n\geqslant 1}$ 是有上界的（取 $b_1$ 为上界），根据确界原理，
  我们令 $a=\sup A$，那么 $a\leqslant b_n$（因为每个 $b_n$ 都是上界而上确界是最小的上界）；
  $B=\{b_n\}_{n\geqslant 1}$ 是有下界的（取 $a$ 为下界），根据确界定理，我们令 $b=\inf B$，所以，
  $a\leqslant b$。那么，$\displaystyle \bigcap_{n\geqslant 1}I_n\supset [a,b]\neq \varnothing$。

:::

## 空间的概念

我们引入度量／距离空间的概念。我们已经讲过，所谓的空间，就是一个集合加上一些附加的结构：

::: definition
$X$ 是集合。
如果存在 $d\colon X\times X\rightarrow \mathbb{R}_{\geqslant 0}$ 是 $X$ 上双变量的函数，
满足如下三条性质：

- a) 对任意的 $x$ 和 $y$，$d(x,y)\geqslant 0$ 并且取等号当且仅当 $x=y$；

- b) 对任意的 $x$ 和 $y$，$d(x,y)=d(y,x)$；

- c) 三角不等式：对任意的 $x,y,z\in X$，我们有 $d(x,z)\leqslant d(x,y)+d(y,z)$。

我们就称二元组 $(X,d)$ 是一个**度量空间**或者**距离空间**。
函数 $d$ 被称作该距离空间上的**距离函数**。
:::

::: remark*
直观上，
$d(x,y)$ 衡量空间 $X$ 中两点 $x$ 和 $y$ 的远近（我们可以形象地将 $X$ 想成是中学所熟悉的平面）。

- 1\) 在度量空间的定义中，我们已经用到了实数 $\mathbb{R}$ 的概念。

- 2\) **（重要）** 对于 $x,y\in \mathbb{R}$，定义 $d(x,y)=|x-y|$，
  那么 $(\mathbb{R},d)$ 是度量空间（只要验证定义即可）。
  从此往后，我们就可以将 $\mathbb{R}$ 等同成一个几何对象了。

- 3\) **（重要）** 我们令
  $\mathbb{R}^n=\underbrace{\mathbb{R}\times\mathbb{R}\times\cdots\times\mathbb{R}}_{n\text{个}}$，
  即
  $\mathbb{R}^n=\bigl\{(x_1,\cdots,x_n)\bigm| x_1\in \mathbb{R}, \cdots, x_n\in \mathbb{R}\bigr\}$。
  对于 $x,y\in \mathbb{R}^n$，我们定义
  \[
  d(x,y)=\sqrt{(x_1-y_1)^2+\cdots+(x_n-y_n)^2}, \ \ x=(x_1,\cdots,x_n), \ y=(y_1,\cdots,y_n).
  \]
  那么，$(\mathbb{R}^n,d)$ 是度量空间（验证三角不等式时候需要用到所谓的Cauchy–Schwarz不等式）。
  注意到，*我们目前并没有定义开方运算！*

- 4\) 考虑复数域 $\mathbb{C}$。
  对于 $z_1,z_2\in \mathbb{C}$，定义 $d(z_1,z_2)=|z_1-z_2|$，那么 $(\mathbb{C},d)$ 是度量空间。

- 5\)（子空间）假设 $Y\subset X$，我们定义 $Y$ 上的距离函数：
  \[
  d_Y\colon Y\times Y \rightarrow \mathbb{R}, (y_1,y_2)\mapsto d_Y(y_1,y_2)=d(y_1,y_2).
  \]
  那么，$(Y,d_Y)$ 是度量空间。
  我们称 $d_Y$ 是 $d$ 在 $Y$ 上的**诱导度量**，$(Y,d_Y)$ 称作是 $(X,d)$ 的**子（度量）空间**。

:::

我们之后会经常用到稠密性的概念。给定度量空间 $(X,d)$，$Y\subset X$ 是子集。
如果对任意的 $x\in X$ 和任意（小）的 $\varepsilon>0$，都存在 $y\in Y$，使得 $d(y,x)<\varepsilon$，
我们就称 $Y$ 在 $X$ 中是**稠密的**。
直观上，$Y$ 在 $X$ 中稠密说的是对于 $X$ 的每个点都有一个 $Y$ 中的点和它离得要多近就有多近。
对这个概念的理解有助于学习 $\varepsilon-\delta$ 语言。我们有如下经典的习题：

::: exercise*
证明，有理数和无理数在实数（这是一个度量空间）中都是稠密的。
:::

我们还可以引入其他的几何概念，比如说区间的长度（高维数时称为面积／体积或者测度）的概念：
对于$\mathbb{R}$上区间 $I=[a,b]$ 或者 $(a,b)$ 或者相应的半开半闭的形式，
定义 $I$ 的**长度**为 $|I|=|b-a|$。
我们不系统地引入所有和几何相关的概念，而是这个概念真的必要时再进行讨论。

最终，我们引用线性／向量空间的概念，作为另一个例子来阐述所谓的空间的概念：

::: definition
$\mathbb{F}=\mathbb{R}$ 是实数域（可以是别的域，比如说有理数或者复数），$V$ 是集合。
我们假设存在两种运算：

- 加法运算。$+\colon V\times V \rightarrow V, \ \ (v,w)\mapsto v+w$；

- 数乘运算。$\cdot\colon\mathbb{F}\times V \rightarrow V, \ \ (\lambda, v)\mapsto \lambda \cdot v$。

我们假设三元组 $(V,+,\cdot)$ 满足如下的八条公理（其中 $\lambda,\mu \in \mathbb{F}$，
$u,v,w\in V$ 是任意选取的）：

- 1\) 加法结合律：$u+(v+w)=(u+v)+w$；

- 2\) 加法交换律：$u+v=v+u$；

- 3\) 存在加法单位元：存在 $0\in V$（被称作是 $V$ 的**原点**），使得对任意 $v\in V$，$0+v=v$ 成立；

- 4\) 加法逆元的存在性：对任意 $v\in V$，存在 $-v\in V$，使得 $v+(-v)=0$；

- 5\) 数乘的结合律：$\lambda \cdot (\mu \cdot v)=(\lambda \cdot_{_\mathbb{F}} \mu) \cdot v$；

- 6\) 数乘的分配律之一：$(\lambda +_{_\mathbb{F}} \mu) \cdot v=\lambda \cdot v+ \mu \cdot v$；

- 7\) 数乘的分配律之二：$\lambda \cdot (u+v)=\lambda \cdot u+ \lambda \cdot v$；

- 8\) 乘法单位元：$1\cdot v= v$。

我们就称三元组 $(V,+,\cdot)$ 是 $\mathbb{F}$ 上的一个**线性空间**或者**向量空间**，
或者称作 $\mathbb{F}$-线性空间。
:::

::: exercise*
试在 $\mathbb{R}^n$ 定义 $+$ 和 $\cdot$ 的结构使得它成为一个 $\mathbb{R}$-线性空间。
:::
