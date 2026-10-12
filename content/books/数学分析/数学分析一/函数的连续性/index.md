---
title: 函数的连续性
---

## 函数的连续性

在开始讨论函数之前，我们先澄清和回忆几个概念：

- 当谈论一个函数 $f$ 的时候，我们坚持原则：要说清楚 $f$ 是定义在哪里又是在哪里取值的，
  即我们用映射 $f\colon X\rightarrow Y$ 的观点来看函数 $f$，通常用的 $f(x)$ 不是一个好的记号。

- 给定两个函数 $f\colon X\rightarrow \mathbb{R}$ 和 $g\colon X\rightarrow \mathbb{R}$（或者
  $\mathbb{C}$，或者是其他的赋范线性空间或者距离空间），其中 $X$ 是某个空间（集合），
  那么函数 $f+g$ 指的是映射
  \[
  f+g\colon  X\rightarrow \mathbb{R},  \ \ x\mapsto f(x)+g(x).
  \]
  类似地，我们也可以定义函数 $f-g$，$f\cdot g$ 等，这里不再赘述。

- 如果函数 $f$ 在 $\mathbb{R}$ 或者 $\mathbb{R}$ 的子集上面定义并且在 $\mathbb{R}$ 中取值，
  利用 $\mathbb{R}$ 上的序关系，我们可以定义**单调性**，即递增或者递减的函数，
  精确的定义留给同学自己叙述。

函数的连续性有两个等价的定义，一种用数列的语言的来描述，
一种用所谓的 $\varepsilon-\delta$ 语言（在数学分析中，
$\varepsilon$ 和 $\delta$ 通常代表两个很小（任意小）的正数）。

::: definition [函数的左右极限、左右连续性和连续性；数列的语言]
假设 $a<b$ 是实数，$I=(a,b)\subset \mathbb{R}$ 是开区间，$x_0\in I$。

- 1\) 给定函数 $f\colon (a,x_0)\cup (x_0,b)\rightarrow \mathbb{R}$。

  如果存在 $y_0\in \mathbb{R}$，使得对**任意的**序列 $\{x^-_n\}_{n\geqslant 1}\subset (a,x_0)$，
  $\displaystyle \lim_{n\rightarrow \infty}x^-_n= x_0$，
  都有 $\displaystyle \lim_{n\rightarrow \infty}f(x^-_n)=y_0$，
  我们就称 $f$ 在 $x_0$ 处有**左极限** $y_0$，
  并记作 $\displaystyle \lim_{x\rightarrow x_0{}^-}f(x)=y_0$。
  （我们注意到 $y_0$ 不依赖于序列 $\{x^-_n\}_{n\geqslant 1}$ 的选取）

  类似地，如果存在 $y_0\in \mathbb{R}$，使得对任意的序列 $\{x^+_n\}_{n\geqslant 1}\subset (x_0,b)$，
  $\displaystyle \lim_{n\rightarrow \infty} x^+_n= x_0$，
  都有 $\displaystyle \lim_{n\rightarrow \infty}f(x^+_n)=y_0$，
  我们就称 $f$ 在 $x_0$ 处有**右极限** $y_0$，
  并记作 $\displaystyle \lim_{x\rightarrow x_0{}^+}f(x)=y_0$。

  如果存在 $y_0\in \mathbb{R}$，
  使得对任意的序列 $\{x_n\}_{n\geqslant 1}\subset (a,x_0)\cup (x_0,b)$，
  $\displaystyle \lim_{n\rightarrow \infty} x_n= x_0$，
  都有 $\displaystyle \lim_{n\rightarrow \infty}f(x_n)=y_0$，
  我们就称 $f$ 在 $x_0$ 处有**极限** $y_0$，并记作 $\displaystyle \lim_{x\rightarrow x_0}f(x)=y_0$。

- 2\) 给定函数 $f\colon I\rightarrow \mathbb{R}$。
  如果对任意的序列 $\{x_n\}_{n\geqslant 1}\subset I$，
  $\displaystyle \lim_{n\rightarrow \infty} x_n=x_0$，
  都有 $\displaystyle \lim_{n\rightarrow \infty}f(x_n)=f(x_0)$，我们就称 $f$ 在 $x_0$ 处**连续**。
  如果 $f$ 在每个 $x_0\in I$ 处都连续，我们就称 $f$ 是（$I$ 上的）**连续函数**。
  如果 $J=[a,b)$，$f\colon J\rightarrow \mathbb{R}$ 在 $a$ 处的右极限存在并且恰好等于 $f(a)$，
  我们就称 $f$ 在 $a$ 处连续；类似地，
  我们可以定义在闭区间 $[a,b]$ 的端点处连续的函数进而定义在闭区间上的连续函数。

:::

::: remark*
我们还可以“望文生义地”定义左连续或者右连续的概念：给定函数 $f\colon I\rightarrow \mathbb{R}$，
如果 $f$ 在 $x_0$ 处有左极限并且左极限为 $f(x_0)$，那么我们称 $f$ 在 $x_0$ 处是**左连续的**。
右连续性可以类似定义。
:::

::: exercise*
- 1\) 给定函数 $f\colon (a,x_0)\cup (x_0,b)\rightarrow \mathbb{R}$。
  证明，$f$ 在 $x_0$ 有极限当且仅当 $f$ 在 $x_0$ 处的左右极限都存在并且相等。

- 2\) 给定函数 $f\colon I\rightarrow \mathbb{R}$。
  证明，$f$ 在 $x_0\in I$ 处连续当且仅当 $f$ 在 $x_0$ 处的既是左连续的也是右连续的。

:::

我们可以用这个练习来熟悉一下连续性的第一种定义，证明只需要用数列收敛的概念即可。

::: definition [函数的极限和连续性；$\varepsilon-\delta$-语言]
假设 $a<b$ 是实数，$I=(a,b)\subset \mathbb{R}$ 是开区间，$x_0\in I$。
考虑在 $I-\{x_0\}$ 上定义的实数（可以是复数）值函数 $f$，
即 $f\colon (a,x_0)\cup (x_0,b)\rightarrow \mathbb{R}$，如果存在 $y_0\in \mathbb{R}$，
使得对**任意的** $\varepsilon>0$（我们总是默认 $\varepsilon$ 很小），
存在 $\delta>0$（通常 $\varepsilon$ 总是取的很小），使得对**任意**满足 $|x-x_0|<\delta$ 的 $x$，
都有 $|f(x)-y_0|<\varepsilon$，我们就称 $f$ 在 $x_0$ 处有**极限** $y_0$，
并记作 $\displaystyle \lim_{x\rightarrow x_0}f(x)=y_0$。
如果假设 $f\colon I\rightarrow \mathbb{R}$ 在 $x_0$ 处有极限并且
$\displaystyle \lim_{x\rightarrow x_0}f(x)=f(x_0)$，我们就称 $f$ 在 $x_0$ 处**连续**。
:::

::: remark*
我们类似地可以用 $\varepsilon-\delta$ 语言定义左右极限以及左右连续性，
同学们应该自己尝试着来做这一点（基本是语言的游戏）或者查阅任何一本数学分析的参考书，这里不再赘述。
:::

::: theorem [Heine]
上述两种连续性的定义是等价的。
:::

::: proof
首先，假设 $f$ 在 $x_0$ 是在 $\varepsilon-\delta$ 语言意义下连续的，我们现在证明，
对任意的 $\{x_n\}_{n\geqslant 1}\subset I$，$x_n\rightarrow x_0$，
我们都有 $f(x_n)\rightarrow f(x_0)$：事实上，对任意的 $\varepsilon >0$，根据定义，存在 $\delta>0$，
使得当 $|x-x_0|<\delta$ 时，我们有 $|f(x)-f(x_0)|<\varepsilon$；根据 $x_n\rightarrow x_0$ 的定义，
对于这个 $\delta$，存在 $N$，使得当 $n\geqslant N$ 时，我们有 $|x_n-x_0|<\delta$。
所以，当 $n\geqslant N$ 时，$|f(x_n)-f(x_0)|<\varepsilon$，从而 $f(x_n)\rightarrow f(x_0)$。

反过来，我们假设 $f$ 在 $x_0$ 在点列语言的意义下是连续的，
即假设对**任意的**序列 $\{x_n\}_{n\geqslant 1}\subset I$，$x_n\rightarrow x_0$，
都有 $\displaystyle \lim_{n\rightarrow \infty}f(x_n)=f(x_0)$。
我们用反证法来证明 $f$ 在 $x_0$ 是在 $\varepsilon-\delta$-语言意义下连续的，即考虑逆否命题：
如果不然，那么存在某个 $\varepsilon>0$，对任意的 $\delta$，特别地对于 $\delta=\dfrac{1}{n}$，
存在 $|x_n-x_0|<\dfrac{1}{n}$，使得 $|f(x_n)-f(x_0)|\geqslant \varepsilon$。
这样，我们就得到一个序列 $\{x_n\}$，使得 $x_n\rightarrow x_0$ 但是 $f(x_n)\not\rightarrow f(x_0)$，
矛盾。
:::

另外，关于函数在一点处的极限的存在性也有 $\varepsilon-\delta$ 版本的Cauchy判别准则：

::: theorem [Cauchy判别准则]
给定函数 $f\colon (a,x_0)\cup (x_0,b)\rightarrow \mathbb{R}$。
那么，$f$ 在 $x_0$ 处有极限当且仅当对任意的 $\varepsilon>0$，存在 $\delta>0$，
使得对任意的 $x_1,x_2\in (x_0-\delta,x_0)\cup(x_0,x_0+\delta)$，都有 $|f(x_1)-f(x_2)|<\varepsilon$。
:::

::: proof
证明是例行公事，只需要利用定义！我们将它留作本次的作业题之一。
:::

::: remark*
我们还可以模拟上面的定义来定义函数 $f$ 在 $x\rightarrow \pm\infty$ 时的极限：
给定函数 $f\colon (a,+\infty)\rightarrow \mathbb{R}$，如果存在 $y_0\in \mathbb{R}$，
使得对任意的 $\varepsilon>0$，存在 $M>0$，使得对任意的 $x\in (M,+\infty)$，
都有 $|f(x)-y_0|<\varepsilon$，我们就称 $f$ 在 $+\infty$ 处的极限是 $y_0$，
并记作 $\displaystyle \lim_{x\rightarrow +\infty}f(x)=y_0$；
类似地可以定义函数在 $-\infty$ 处的极限。
:::

## 局部和整体的连续性

有了连续函数这个对象，我们就可以讨论数学（分析）中很重要的一个观点：

::: remark* [局部与整体]
局部、整体和一个点在连续函数的定义中是要分清楚的：

- 连续性是一个**局部**的概念：要搞清楚 $f$ 在 $x_0$ 处是否连续，只需要对任意小的 $\varepsilon$，
  理解 $f$ 在 $x_0$ 的一个小邻域（局部）$(x_0-\varepsilon,x_0+\varepsilon)$ 上的行为就足够了。
  这里，$\varepsilon$ 可以任意得小，但不能是 $0$。

- 关于函数在整个区间 $I$ 上是否连续的是**整体**的概念，因为我们需要知道 $f$ 在**每个点**附近的信息。

- $f$ 在区间 $I$ 上是否连续这个整体的性质是由局部性质决定的，即如果 $f$ 在每个局部上连续，
  那么在整个区间 $I$ 上就连续。
  数学上很多概念都是这样的：局部决定了整体，比如说函数如果局部上单调那么整体上就是单调函数；
  多项式（或者解析函数）是更极端的例子：根据代数基本定理，
  只要知道多项式 $f$ 在一个点附近的值就可以完全确定这个多项式。
  当然，有很多数学对象的局部上完全不能决定整体，比如说用来描述经典力学的辛几何。

- 连续性是局部的概念但不是一个点处的概念：
  只知道函数在一个点 $x_0$ 处的值是完全不可以判定函数在这个点处的连续性的！

通过上面局部与整体的讨论，我们可以很自然地引出所谓的开覆盖的概念：

- 1\)（整体连续性意味着局部连续性）假设 $J\subset I$ 是子区间，那么，
  如果 $f\colon I\rightarrow \mathbb{R}$ 在 $I$ 上连续，
  那么 $f$ 在 $J$ 上的限制 $f\big|_{J}$ 也连续，其中
  \[
  f\big|_J\colon  J\rightarrow \mathbb{R},  \ \ x \mapsto f(x).
  \]

- 2\)（局部决定了整体）假设 $\{I_k\}_{k\in K}$ 一族**开区间**，其中 $K$ 是指标的集合，
  如果 $\displaystyle I\subset \bigcup_{k\in K} I_k$，
  我们就称开区间族 $\{I_k\}_{k\in K}$ 覆盖了 $I$，
  我们也说 $\{I_k\}_{k\in K}$ 是 $I$ 的一族**开覆盖**。
  假设对每个 $k\in K$，函数 $f_k$ 在 $I_k$ 上都有定义并且取实数值，如果任意的 $j,k \in K$，
  都有相容性条件：
  \[
  f_k\big|_{I_j\cap I_k}=f_j\big|_{I_j\cap I_k},
  \]
  那么下面的 $f$ 在 $I$ 上是良好定义的：由于对任意的 $x \in I$，$x$ 一定属于某个 $I_k$，
  我们令 $f(x)=f_k(x)$。
  我们来说明 $f(x)$ 的定义不依赖于指标 $k$ 的选取：如果 $x$ 属于另一个 $I_j$，
  我们需要说明 $f_j(x)=f_k(x)$，这是因为 $x \in I_j\cap I_k$，相容性条件保证了这一点。

  通过上面的构造方式，我们把在局部的小片 $I_k$ 上定义的一族函数粘成了整体定义在 $I$ 上的一个函数。

  如果对任意的 $k$，$f_k$ 在 $I_k$ 连续，那么 $f$ 在 $I$ 上也连续，这因为对任意的 $x_0 \in I$，
  $x_0$ 一定属于某个 $I_k$，根据 $f_k$ 在 $I_k$ 上的连续性，$f$ 就在 $x_0$ 处连续，所以 $f$ 连续。

:::

最简单的连续函数的例子如下（请验证定义）：

::: example*
- 1\) 常值函数 $f(x)=c$ 和 $f(x)=x$ 是连续函数。

- 2\) 指数函数 $e^x$ 是 $\mathbb{R}\rightarrow \mathbb{R}$（或
  $\mathbb{C}\rightarrow \mathbb{C}$）上的连续函数。

  我们用 $\varepsilon-\delta$ 语言来证明：任意选定的 $x_0\in \mathbb{R}$。
  对任意的 $\varepsilon>0$，
  令 $\delta=\min\left(\dfrac{\varepsilon}{2e^{x_0+1}},1\right)$（这是一个事后诸葛亮的决定），
  当 $|x-x_0|<\delta$ 时，根据
  \[
  e^x-e^{x_0}=e^{x_0}(e^{x-x_0}-1)=e^{x_0}\sum_{k=1}^\infty\frac{(x-x_0)^k}{k!},
  \]
  我们有
  \[
  \begin{aligned}
  |e^x-e^{x_0}|&\leqslant e^{x_0}\sum_{k=1}^\infty\frac{|x-x_0|^k}{k!}< e^{x_0}\sum_{k=1}^\infty\frac{\delta^k}{k!}\\
  &=\delta e^{x_0}\sum_{k=1}^\infty\frac{\delta^{k-1}}{k!}\leqslant \delta \bigl(e^{x_0}\sum_{k=1}^\infty\frac{1^{k-1}}{(k-1)!}\bigr)=\delta e^{x_0+1}<\varepsilon.
  \end{aligned}
  \]
  这表明 $\exp$ 在 $x_0$ 处连续。

:::

## 连续函数的四则运算

要想构造更多的连续函数，我们就要利用关于连续函数的代数运算：

::: proposition [四则运算与序关系的交换性]
假设实（复）值函数 $f$ 和 $g$ 在 $x_0$ 附近定义（比方说在 $(x_0-\delta,x_0)\cup (x_0,x_0+\delta)$
上定义）$x_0\in I$ 处有极限，那么

- 1\) $f\pm g$ 在 $x_0\in I$ 处有极限并且
  $\displaystyle \lim_{x\rightarrow x_0}(f\pm g)(x)= \lim_{x\rightarrow x_0}f(x)\pm \lim_{x\rightarrow x_0}g(x)$。

- 2\) $f\cdot g$ 在 $x_0\in I$ 处有极限并且
  $\displaystyle \lim_{x\rightarrow x_0}(f\cdot g)(x)= \lim_{x\rightarrow x_0}f(x)\cdot\lim_{x\rightarrow x_0}g(x)$。

- 3\) 如果在 $x_0$ 附近，$g(x)\neq 0$ 并且 $\displaystyle \lim_{x\rightarrow x_0}g(x) \neq 0$，
  那么 $\dfrac{f}{g}$ 在 $x_0\in I$ 处有极限并且
  $\displaystyle \lim_{x\rightarrow x_0}\bigl(\frac{f}{g}\bigr)(x)=\displaystyle  \frac{\displaystyle \lim_{x\rightarrow x_0}f(x)}{\displaystyle \lim_{x\rightarrow x_0}g(x)}$。

- 4\) 如果对任意的 $x$，都有 $f(x)\leqslant g(x)$，
  那么 $\displaystyle \lim_{x\rightarrow x_0}f(x)\leqslant\lim_{x\rightarrow x_0}g(x)$。

:::

::: proof
连续性的表述有两种，我们这里选用连续性的数列语言，从而上面的性质只是数列相应性质的重新表述。
:::

::: corollary [连续函数的四则运算]
用 $C(I)$ 表示区间 $I$ 上的连续函数的全体所构成的集合，
那么 $\bigl(C(I),+,\cdot\bigr)$ 是一个环（连续函数环），即对任意的 $f,g\in C(I)$，
我们有 $f\pm g, f\cdot g \in C(I)$。
特别地，$C(I)$ 是 $\mathbb{R}$-线性空间（用常数函数 $f(x)\equiv c$ 作为数乘）。
另外，如果对任意 $x\in I$，$g(x)\neq 0$，那么 $\dfrac{f}{g}\in C(I)$。
:::

::: remark*
我们注意到 $\bigl(C(I),+,\cdot\bigr)$ 与实数 $(\mathbb{R},+,\cdot)$ 有很多相似的地方（代数结构）。
另外，除非 $I$ 是一个点，$C(I)$ 是无限维的 $\mathbb{R}$-线性空间，我们把证明留成做本次的作业。
:::

::: corollary [绝对值]
如果 $f\in C(I)$，那么 $|f|\in C(I)$，
其中 $|f|\colon I\rightarrow \mathbb{R}_{\geqslant 0}, \ x \mapsto |f(x)|$。
:::

::: proof
利用连续性的数列的描述立得。
:::

::: theorem [函数的复合]
给定 $f\in C(I;J)$（即 $f\colon I \rightarrow \mathbb{R}$ 是连续函数并且 $f$ 的值域落在区间 $J$
中）和 $g\in C(J)$，那么复合函数 $(g\circ f)(x)=g(f(x))\in C(I)$。
:::

::: proof
我们利用数列的语言来证明，即证明当 $n\rightarrow \infty$ 时，对任意的 $x_n\rightarrow x_0$，
我们有 $(g\circ f)(x_n)=g(f(x_n))\rightarrow g(f(x_0))$。
令 $y_n=f(x_n)\in J$，其中 $n\geqslant 0$，由于 $f$ 在 $x_0$ 处连续，所以 $y_n\rightarrow y_0$；
由于 $g$ 在 $y_0$ 处连续，所以 $g(y_n)\rightarrow g(y_0)$，这就是要证明的结论。
:::

::: remark*
利用数列的语言进行证明是最直接最简单的，然而我们后来会意识到简单干净的证明可能未必是最好的。
:::

利用上述四则运算以及函数的复合，我们可以构造一大类的连续函数：

::: example*
假设 $I\subset \mathbb{R}$ 是一个给定的非空的区间，其中 $|I|\neq 0$，即它不是一个点。那么

- 1\) 对任意的多项式 $P\in \mathbb{R}[X]$，即 $P(X)=a_dX^d+a_{d-1}X^{d-1}+\cdots+a_0$，
  其中 $a_i\in \mathbb{R}$，$0\leqslant i\leqslant d$，$a_d\neq 0$，
  $d$ 是它的次数（我们要强调多项式 $\neq$ 多项式函数），我们可以将 $P$ 视作是 $I$ 上的函数，
  即对任意的 $x\in I$，我们令 $P(x)=a_dx^d+a_{d-1}x^{d-1}+\cdots+a_0$。
  那么，多项式函数 $P\in C(I)$。
  另外，如果 $Q\neq P\in \mathbb{R}[X]$ 是另一个多项式，那么在 $C(I)$ 中，作为函数 $Q\neq P $。
  在这个意义下，我们可以将多项式的全体 $\mathbb{R}[X]$ 视作是连续函数的子空间，
  即有单射映射 $\iota\colon \mathbb{R}[X]\hookrightarrow C(I)$
  并且这个映射保持两边的四则运算（环结构）：比如说，如果我们用 $\bullet$ 表示多项式的乘法，
  那么 $\iota(P\bullet Q)=\iota(P)\cdot \iota(Q)$，其中此式右边的乘法是函数的乘法。

- 2\) 如果多项式 $Q$ 在 $I$ 上没有零点，那么有理函数 $\dfrac{P(x)}{Q(x)}\in C(I)$。

- 3\) 三角函数 $\sin(x)$ 和 $\cos(x)$ 是连续函数，此时，
  我们隐含的用到了取复数值的指数函数具有连续性这个性质，我们后面会处理更一般的情况。

- 4\) 利用复合函数保持连续性，
  我们知道函数 $e^{x^2}$ 是 $\mathbb{R}$（或者 $\mathbb{C}$）上的连续函数。

:::

::: remark*
不夸张的说，我们在数学中遇到（几乎）一切连续函数都是通过两种手段构造的：第一，
通过连续函数的复合和四则运算；第二，通过逼近的方式，特别是级数的方式来定义，比如说 $\exp$ 的构造。
这种逼近的方式是最值得我们注意的，我们很快会发现，$C(I)$ 这个空间和实数 $\mathbb{R}$ 很相似，
构造无理数就是通过有理数逼近的方式。

更具体一点，
我们会在 $C(I)$ 上面给定一个范数 $\|\cdot \|_{\infty}$ 并且证明这样得到的赋范线性空间是完备的。
此时，任给 $f\in C(I)$，我们可以仿照实数的情况定义
\[
e^f : =\sum_{n=0}^\infty \frac{f^n}{n!}.
\]
在完备的赋范线性空间中，我们只要全盘照抄实数的情况就可以证明上面的（函数）级数收敛，
从而 $e^f$ 是良好定义的并且是连续函数。
特别地，
我们可以通过这种方式定义 $e^x$（把 $x$ 看成是函数 $f$）而且说明这和我们最初定义的 $\exp(x)$
是一码事。

在这种类比下，我们就可以利用对实数的直观来研究函数空间，从而得到很多关于函数的深刻结果。
在课程后面的学习中，我们会遇到很具体的例子，比方说存在处处连续但是处处都不能微分的函数，
我们就是通过构造函数的级数来实现的。
:::
