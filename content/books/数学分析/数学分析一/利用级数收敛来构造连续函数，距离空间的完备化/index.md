---
title: 利用级数收敛来构造连续函数，距离空间的完备化
---

## 利用级数构造连续函数

我们现在通过 $\Bigl(C\bigl([a,b]\bigr),+,\cdot, \|\cdot\|_{\infty}\Bigr)$ 和
$(\mathbb{R},+,\cdot, |\cdot|)$ 的类比来构造连续函数。
回忆一下，级数的构造一个很重要的应用就是用来构造实数，比如说，
$e$ 可以（定义）用级数 $\displaystyle \sum_{k=0}^\infty \dfrac{1}{k!}$ 来实现。
对于一般的数项级数，我们还有绝对收敛的概念，
即对于数项级数 $\displaystyle \sum_{k=1}^\infty a_k$ 而言，
如果 $\displaystyle \sum_{k=1}^\infty |a_k|$ 收敛，那么级数本身也收敛。
我们对于闭区间的连续函数的空间也有类似的技术手段：

::: proposition
$a<b$ 是实数，给定函数列 $\{f_n\}_{n\geqslant 1}\subset C\bigl([a,b]\bigr)$，
我们考虑函数级数 $\displaystyle \sum_{k=1}^\infty f_k$：
如果部分和 $S_n = \displaystyle \sum_{k=1}^n f_k$ 所定义的函数序列 $\{S_n\}_{n\geqslant 1}$ 在
$\Bigl(C\bigl([a,b]\bigr), \|\cdot\|_{\infty}\Bigr)$ 中收敛，
我们就称函数级数 $\displaystyle \sum_{k=1}^\infty f_k$ 在
$\Bigl(C\bigl([a,b]\bigr), \|\cdot\|_{\infty}\Bigr)$ 中**收敛**。
如果数项级数 $\displaystyle \sum_{k=1}^\infty \|f_k\|_{\infty}$ 收敛，
我们就称函数级数 $\displaystyle \sum_{k=1}^\infty f_k$ 在
$\Bigl(C\bigl([a,b]\bigr), \|\cdot\|_{\infty}\Bigr)$ 中**绝对收敛**（即加了绝对值之后收敛）。

如果函数级数 $\displaystyle \sum_{k=1}^\infty f_k$ 在
$\Bigl(C\bigl([a,b]\bigr), \|\cdot\|_{\infty}\Bigr)$ 中绝对收敛，
那么函数级数 $\displaystyle \sum_{k=1}^\infty f_k$ 在
$\Bigl(C\bigl([a,b]\bigr), \|\cdot\|_{\infty}\Bigr)$ 中收敛。
特别地，$\displaystyle \sum_{k=1}^\infty f_k$ 给出了一个 $[a,b]$ 上定义的连续函数。
:::

::: proof
我们应该对比 @prop:convergence-and-absolutely-convergence 的证明。
根据 $C\bigl([a,b]\bigr)$ 的完备性，利用Cauchy判别法：
由于 $\displaystyle \sum_{k=0}^\infty \|f_k\|_{\infty}$ 收敛，所以对任意的 $\varepsilon>0$，
存在 $N$，使得对任意的 $n\geqslant N$ 和任意的 $p\geqslant 0$，
我们有 $\displaystyle \sum_{n\leqslant k\leqslant n+p}\|f_k\|_{\infty}<\varepsilon$。
为了判断部分和 $S_n$ 是否是Cauchy序列，我们注意到对任意的 $x\in [a,b]$，我们就有
\[
\begin{aligned}
\big|S_{n+p}(x)-S_{n-1}(x)\big|&=\big|\sum_{n\leqslant k\leqslant n+p}f_k(x)\big|\leqslant \sum_{n\leqslant k\leqslant n+p}|f_k(x)|\\
&\leqslant \sum_{n\leqslant k\leqslant n+p}\|f_k\|_{\infty}<\varepsilon.
\end{aligned}
\]
所以，
$\{S_n\}_{n\geqslant 1}$ 在 $\Bigl(C\bigl([a,b]\bigr), \|\cdot\|_{\infty}\Bigr)$
中是Cauchy列从而收敛。
:::

作为应用，我们现在重新构造 $\mathbb{R}$ 上的指数函数。
我们首先在任意的 $[-N,N]$ 这个闭区间上构造，因为函数 $f(x)=x$ 是 $[-N,N]$ 上的连续函数，我们就考虑
\[
\widetilde{\exp}(x)\coloneqq\sum_{k=0}^\infty \frac{f^k}{k!}.
\]
由于 $\Bigl\|\dfrac{f^k}{k!}\Bigr\|_{\infty}\leqslant \dfrac{N^k}{k!}$，
容易看出上面这个函数级数是绝对收敛的，从而我们在 $[-N,N]$ 上定义了 $\widetilde{\exp}(x)$。
我们当然需要验证，如果 $N'>N$，
那么在 $[-N',N']$ 上按照如上方式定义的 $\widetilde{\exp}(x)$ 在 $[-N,N]$
上的限制给出的就是按照如上方式定义的 $\widetilde{\exp}(x)$，
这就构造出了 $\widetilde{\exp}\colon \mathbb{R}\rightarrow \mathbb{R}$。

::: exercise*
证明，如上定义的指数函数 $\widetilde{\exp}$ 恰好是之前所构造的 ${\exp}$。
:::

闭区间及其上的连续函数空间的很多性质都可以平行的推广到紧的距离空间上去，
并且这些性质在将来分析和几何的学习中会起到很重要的作用。我们把若干这样的性质整理在下面的命题里：

::: proposition
$(X,d)$ 是紧的距离空间，那么

- 1\) $(X,d)$ 是完备的。

- 2\) 如果 $f\colon X\rightarrow \mathbb{R}$ 是连续函数，那么存在 $x_1\in X$，
  使得 $f(x_1)=\displaystyle \sup_{x\in X}f(x)$；存在 $x_2\in X$，
  使得 $f(x_2)=\displaystyle \inf_{x\in X}f(x)$。

- 3\) 用 $C(X)$ 表示 $X$ 上的连续函数的空间（实数值或者复数值）。
  对每个 $f\in C(X)$，$\|f\|_\infty = \displaystyle \sup_{x\in X}|f(x)|$ 是 $X$ 上的一个范数，那么，
  $\bigl(C(X),\|\cdot\|_{\infty}\bigr)$ 是完备的赋范线性空间。

:::

我们在讲义中不给出这个命题的证明了。

至此，数学分析一这门课程的第一部分全部完成，这一部分的主旨是收敛和连续。
作为这些理论的应用，我们再回过头来研究实数的构造。

## 距离空间的完备化（阅读）

我们先定义集合上的等价关系。
$X$ 是集合，$\sim$ 是 $X$ 上的一个**等价关系**，这指的是对任意 $x,y\in X$，
我们要么有 $x\sim y$（此时我们说 $x$ 和 $y$ 等价），要么有 $x\not\sim y$，二者必（且仅）居其一，
并且 $\sim$ 满足：

- 1\)（自反性）$x\sim x$；

- 2\)（对称性）$x\sim y$ 等价于 $y\sim x$；

- 3\)（传递性）如果 $x\sim y$，$y\sim z$，那么 $x\sim z$。

假定在集合 $X$ 上给定了等价关系 $\sim$。
对任意的 $x\in X$，
$X$ 的子集 $[x]=\bigl\{y\in X \bigm| y \sim x\bigr\}$ 被称作是 $x$（所在）的**等价类**。
我们用 $X / \sim$ 表示**等价类的集合**，这是 $X$ 的子集的集合。
根据 $\sim$ 的上述三条性质，如果 $x' \in [x]$，那么 $[x']=[x]$；如果 $x' \notin [x]$，
那么 $[x']\cap [x]=\emptyset$。据此，我们可以将 $X$ 分成两两不交的子集的并集：
\[
X=\bigsqcup_{[x]\in X / \sim} [x].
\]
这称作是 $X$ 的等价类的划分。
一个等价关系 $\sim$ 实际上等价于将 $X$ 分为若干个非空子集的无交并，
直观上说我们将等价的元素看成是一样的。
我们注意到对任意的 $x',x''\in [x]$，我们都有 $[x']=[x'']=[x]$，
我们把 $x,x'$ 或者 $x''$ 都称作是等价类 $[x]$ 的**代表元**。代表元的选取并不唯一。

作为例子，我们考虑整数的集合 $\mathbb{Z}$，$p$ 是一个素数，对于 $m,n \in \mathbb{Z}$，
如果 $m$ 和 $n$ 除 $p$ 的余数相同，我们就说它们等价，并记做 $m \sim n$。
我们知道，$\mathbb{Z}/\sim$ 恰好有 $p$ 个元素。当 $p=2$ 时，这就是把整数分为奇数和偶数两个等价类。

我们回到距离空间 $(X,d)$ 的场景，它未必完备。
比如说有理数 $\mathbb{Q}$ 就不完备，但是我们知道存在 $\mathbb{R}$，
使得 $\mathbb{Q}\subset \mathbb{R}$，而 $\mathbb{R}$ 是完备的。
我们的目标是将 $(X,d)$ 类比为 $\mathbb{Q}$，然后构造相应的 $(\overline{X},d)$。

给定距离空间 $(X,d)$，我们令
\[
\mathcal{C}=\left\{\{x_n\}_{n\geqslant 1}\subset X \Bigm| \{x_n\}_{n\geqslant 1}\text{是~Cauchy~列}\right\}.
\]
这是距离空间 $(X,d)$ 中所有 Cauchy 列的集合。
按照定义，对 $\{x_n\}_{n\geqslant 1}\in \mathcal{C}$，对任意的 $\varepsilon>0$，存在 $N$，
使得当 $m,n\geqslant N$ 时，我们有 $d(x_m,x_n)<\varepsilon$。

我们在 $\mathcal{C}$ 上定义等价关系：

对于 $\{x_n\}_{n\geqslant 1}, \{y_n\}_{n\geqslant 1}\in \mathcal{C}$，
$\{x_n\}_{n\geqslant 1}\sim \{y_n\}_{n\geqslant 1}$ 当且仅当
$\displaystyle\lim_{n\rightarrow \infty} d(x_n,y_n)=0$。

最终，我们令 $\overline{X}=\mathcal{C}/\sim$。

我们现在在 $\overline{X}$ 上定义一个距离函数 $\overline{d}$：
\[
\overline{d}\colon \overline{X}\times \overline{X}\rightarrow \mathbb{R}, \ \  ([\{x_n\}_{n\geqslant 1}],[\{y_n\}_{n\geqslant 1}])\mapsto \lim_{n\rightarrow \infty}d(x_n,y_n),
\]
其中 $[\{x_n\}_{n\geqslant 1}],[\{y_n\}_{n\geqslant 1}]\in \overline{X}$。
注意到，$\{x_n\}_{n\geqslant 1}$ 只是等价类 $[\{x_n\}_{n\geqslant 1}]$ 的一个代表，
而代表的选取并不唯一，所以，为了说明距离函数
\[
\overline{d}\bigl([\{x_n\}_{n\geqslant 1}],[\{y_n\}_{n\geqslant 1}]\bigr)=\lim_{n\rightarrow \infty}d(x_n,y_n)
\]
是良好定义的，我们需要验证如下两个性质：

- 极限 $\displaystyle \lim_{n\rightarrow \infty}d(x_n,y_n)$ 存在。

  只要证明 $\{d(x_n,y_n)\}_{n\geqslant 1}$ 是Cauchy列即可，这是因为
  \[
  \begin{aligned}
  |d(x_n,y_n)-d(x_m,y_m)|&=|d(x_n,y_n)-d(x_m,y_n)+d(x_m,y_n)-d(x_m,y_m)|\\
  &\leqslant |d(x_n,y_n)-d(x_m,y_n)|+|d(x_m,y_n)-d(x_m,y_m)|\\
  &\leqslant d(x_n,x_m)+d(y_n,y_m).
  \end{aligned}
  \]
  根据 $\{x_n\}_{n\geqslant 1}$ 和 $\{y_n\}_{n\geqslant 1}$ 是 $X$ 中的Cauchy列，
  我们知道 $\{d(x_n,y_n)\}_{n\geqslant 1}$ 是 $\mathbb{R}$ 中的Cauchy列。

- 如果我们选取其它的代表元 $\{x'_n\}_{n\geqslant 1}\in [\{x_n\}_{n\geqslant 1}]$，
  $\{y'_n\}_{n\geqslant 1}\in [\{y_n\}_{n\geqslant 1}]$，我们必须说明
  \[
  \lim_{n\rightarrow \infty}d(x_n,y_n)=\lim_{n\rightarrow \infty}d(x'_n,y'_n).
  \]
  首先，根据三角不等式，我们有
  \[
  \big|d(x_n,y_n)-d(x'_n,y_n)\big|\leqslant d(x_n,x'_n).
  \]
  令 $n\rightarrow \infty$，我们得到
  \[
  \lim_{n\rightarrow \infty}d(x_n,y_n)=\lim_{n\rightarrow \infty}d(x'_n,y_n).
  \]
  类似地，我们有
  \[
  \lim_{n\rightarrow \infty}d(x'_n,y_n)=\lim_{n\rightarrow \infty}d(x'_n,y'_n).
  \]
  综合这两个等式即可。

为了说明 $(\overline{X},\overline{d})$ 是度量空间，
我们需要说明 $\overline{d}$ 满足距离定义中的三个条件：首先，
\[
\overline{d}\bigl([\{x_n\}_{n\geqslant 1}],[\{y_n\}_{n\geqslant 1}]\bigr)\geqslant 0,  \ \ \
\overline{d}\bigl([\{x_n\}_{n\geqslant 1}],[\{y_n\}_{n\geqslant 1}]\bigr)=\overline{d}\bigl([\{y_n\}_{n\geqslant 1}],[\{x_n\}_{n\geqslant 1}]\bigr),
\]
明显成立。
为了证明三角不等式，任取 $\overline{X}$ 中三个点 $[\{x_n\}_{n\geqslant 1}]$，
$[\{y_n\}_{n\geqslant 1}]$ 和 $[\{z_n\}_{n\geqslant 1}]$，我们有
\[
d(x_n,y_n)+d(y_n,z_n)\geqslant d(x_n,z_n).
\]
令 $n\rightarrow \infty$，我们就得到（因为在取极限的运算下 $\geqslant$ 被保持）
\[
\overline{d}\bigl([\{x_n\}_{n\geqslant 1}],[\{y_n\}_{n\geqslant 1}]\bigr)+\overline{d}\bigl([\{y_n\}_{n\geqslant 1}],[\{z_n\}_{n\geqslant 1}]\bigr)\geqslant \overline{d}\bigl([\{x_n\}_{n\geqslant 1}],[\{z_n\}_{n\geqslant 1}]\bigr).
\]
所以，三角不等式成立。最终，我们要证明
\[
\overline{d}([\{x_n\}]_{n\geqslant 1},[\{y_n\}]_{n\geqslant 1})=0 \Rightarrow [\{x_n\}]_{n\geqslant 1}=[\{y_n\}]_{n\geqslant 1} \Leftrightarrow \{x_n\}_{n\geqslant 1}\sim \{y_n\}_{n\geqslant 1}.
\]
这因为按照定义 $\displaystyle \lim_{n\rightarrow \infty} d(x_n,y_n)=0$，即Cauchy列是等价的。
从这里，我们可以看到之所以取Cauchy列的等价类也是为了保证 $\overline{d}$ 是距离函数。

利用上面的构造，我们通过 $(X,d)$ 以一种确定的方式得到了距离空间 $(\overline{X},\overline{d})$。
我们现在说明，可以将 $(X,d)$ 视作是 $(\overline{X},\overline{d})$ 的子空间。
对于 $x\in X$，我们可以将它视作是Cauchy列 $\{x_n=x\}_{n\geqslant 1}$（的等价类），我们得到映射
\[
\iota\colon  X\rightarrow \overline{X}, \ \ x\mapsto \{x_n=x\}_{n\geqslant 1},
\]
当然，如果 $y\in X$，$y\neq x$，那么作为Cauchy列，
$\{x_n=x\}_{n\geqslant 1}$ 和 $\{y_n=y\}_{n\geqslant 1}$ 不等价，这表明 $\iota$ 是单射。
据此，我们可以认为 $X\subset \overline{X}$ 是一个子集，
也可以认为是 $\overline{X}$ 是在 $X$ 的基础上添加了一些东西。

另外，对于 $\{x_n=x\}_{n\geqslant 1}$ 和 $\{y_n=y\}_{n\geqslant 1}$，我们有
\[
\overline{d}\bigl(\{x_n=x\}_{n\geqslant 1},\{y_n=y\}_{n\geqslant 1}\bigr)=\lim_{n\rightarrow \infty}d(x,y)=d(x,y) \ \ \Leftrightarrow \ \ \overline{d}\bigl(\iota(x),\iota(y)\bigr)=d(x,y),
\]
这说明 $\overline{d}$ 在 $X$ 上的诱导距离也恰好是 $d$。
在这个意义下，我们将 $(X,d)$ 看做是 $(\overline{X},\overline{d})$ 的子（距离）空间。

类似于 $\mathbb{Q}\subset \mathbb{R}$ 是稠密的，我们有

::: lemma
$X$ 是 $(\overline{X},\overline{d})$ 的稠密子集。
:::

::: proof
任意给定 $\{x_n\}_{n\geqslant 1}\in \mathcal{C}$，存在 $N$，使得当 $n\geqslant N$ 时，
$|x_n-x_N|<\varepsilon$。
所以，对于 $[\{x_n\}_{n\geqslant 1}]\in \overline{X}$，我们选取 $x_N\in X$，那么，
$\overline{d}(\iota(x_N),\{x_n\}_{n\geqslant 1})\leqslant \varepsilon$。这表明 $X$ 是稠密的。
:::

最终，我们证明 $(\overline{X},\overline{d})$ 是*完备的*距离空间：
我们用 $\overline{x}\in \overline{X}$ 表示某个Cauchy列的等价类，
即 $\overline{x}=[\{x_n\}_{n\geqslant 1}]$，
目标是证明如果 $\{\overline{x}^{(a)}\}_{a\geqslant 1}$ 是 $(\overline{X},\overline{d})$
中的Cauchy序列，那么 $\{\overline{x}^{(a)}\}_{a\geqslant 1}$ 在距离函数 $\overline{d}$ 下收敛。
换而言之，由 $(X,d)$ 中的Cauchy列的等价类构成的Cauchy列是收敛的！

我们直接构造这个极限点。
根据 $X$ 在 $\overline{X}$ 中的稠密性，对每个 $\overline{x}^{(a)}$（其中 $a\geqslant 1$），
存在 $x_a \in X$，使得
\[
\overline{d}(\overline{x}^{(a)},\iota(x_a))=\overline{d}(\overline{x}^{(a)},[\{x_a,x_a, \cdots, x_a,\cdots\}])<\dfrac{1}{a}.
\]
令 $\overline{x}=[\{x_a\}_{a\geqslant 1}]$，我们验证如下两个性质

- 1\) $\{x_a\}_{a\geqslant 1}$ 是 $(X,d)$ 中的Cauchy列，
  从而 $[\{x_a\}_{a\geqslant 1}]\in \overline{X}$。

  这是因为
  \[
  \begin{aligned}
  d(x_a,x_b)&=\overline{d}\bigl(\iota(x_a),\iota(x_b)\bigr)\leqslant \overline{d}\bigl(\iota(x_a),x^{(a)}\bigr)+\overline{d}\bigl(x^{(a)},x^{(b)}\bigr)+\overline{d}\bigl(\iota(x_b),x^{(b)}\bigr)\\
  &\leqslant \frac{1}{a}+\frac{1}{b}+\overline{d}\bigl(x^{(a)},x^{(b)}\bigr).
  \end{aligned}
  \]
  由于 $\{\overline{x}^{(a)}\}_{a\geqslant 1}$ 是 $(\overline{X},\overline{d})$ 中的Cauchy序列，
  据此可见 $\{x_a\}_{a\geqslant 1}$ 是 $(X,d)$ 中的Cauchy列。

- 2\) 令 $\overline{x}=[\{x_a\}_{a\geqslant 1}]\in \overline{X}$，
  那么在 $(\overline{X},\overline{d})$ 中，
  我们有 $\displaystyle \lim_{a\rightarrow \infty}\overline{x}^{(a)}=\overline{x}$。

  对任意 $\varepsilon>0$，存在 $N$，使得当 $a,n\geqslant N$ 时，$d(x_a,x_n)<\varepsilon$。
  按照定义，我们有当 $a\geqslant N$ 时
  \[
  \begin{aligned}
  \overline{d}\bigl(\overline{x}^{(a)}, \overline{x}\bigr)&\leqslant\overline{d}\bigl(\overline{x}^{(a)}, \iota(x_a)\bigr)+\overline{d}\bigl(\iota(x_a), \overline{x}\bigr)\leqslant \dfrac{1}{a} + \displaystyle \lim_{n\rightarrow \infty} d(x_a,x_n)\leqslant \dfrac{1}{a} + \varepsilon.
  \end{aligned}
  \]

::: theorem [完备化的万有性质]
$(X,d)$ 是距离空间。
那么，
存在完备的距离空间 $(\overline{X},\overline{d})$ 和等距嵌入
$\iota\colon (X,d)\rightarrow (\overline{X},\overline{d})$（即
$\overline{d}(\iota(x),\iota(y))=d(x,y)$），使得

- 1\) $\iota$ 的像 $\iota(X)\subset \overline{X}$ 是稠密的；

- 2\) 对任意完备的距离空间 $(Y,d_Y)$ 以及*一致连续*的映射 $\phi\colon X\rightarrow Y$，
  \[
  \begin{tikzcd}
    X \ar[r, hook,"\iota"] \ar[dr, "\phi" description]
    & \overline{X} \ar[d, dashed, "\psi"]\\
    & Y
  \end{tikzcd}
  \]
  存在唯一的 $\psi\colon \overline{X}\rightarrow Y$（连续映射的扩张），使得 $\phi=\psi\circ \iota$。

另外，上述 $(\overline{X},\overline{d})$ 在如下的意义下是唯一的：

如果存在另外一个完备的距离空间 $(\overline{\overline{X}},\overline{\overline{d}})$ 和等距嵌入
$\iota'\colon (X,d)\rightarrow (\overline{\overline{X}},\overline{\overline{d}})$，使得

- 1\) $\iota'$ 的像 $\iota'(X)$ 在 $\overline{\overline{X}}$ 中稠密；

- 2\) 对任意完备的距离空间 $(Z,d_Z)$ 以及*一致连续*的映射 $\phi\colon X\rightarrow Z$，
  \[
  \begin{tikzcd}
    X \ar[r, hook,"\iota'"] \ar[dr, "\phi" description]
    & \overline{\overline{X}} \ar[d, dashed, "\psi"]\\
    & Z
  \end{tikzcd}
  \]
  存在唯一的 $\psi\colon \overline{\overline{X}}\rightarrow Z$（连续映射的扩张），
  使得 $\phi=\psi\circ \iota'$。

那么存在等距的双射 $\Phi\colon \overline{X}\rightarrow \overline{\overline{X}}$（即对任意的
$\overline{x}_1,\overline{x}_2\in \overline{X}$，
$\overline{\overline{d}}(\Phi(\overline{x}_1),\Phi(\overline{x}_2))=\overline{d}(\overline{x}_1,\overline{x}_2)$）。
:::

::: remark*
每个等距嵌入 $\iota\colon (X,d)\rightarrow (\overline{X},\overline{d})$ 都是单射：
因为如果 $\iota(x)=\iota(y)$，那么 $\overline{d}(\iota(x),\iota(y))=d(x,y)=0$，从而 $x=y$。
:::

::: proof
我们已经构造了 $(\overline{X},\overline{d})$，所以只需要验证第二条：
对任意完备的距离空间 $(Y,d_Y)$ 以及连续映射 $\phi\colon X\rightarrow Y$，
\[
\begin{tikzcd}
  X  \ar[r, hook,"\iota"]  \ar[dr, "\phi" description]
  & \overline{X}  \ar[d, dashed, "\psi"]\\
  & Y
\end{tikzcd}
\]
存在唯一的 $\psi\colon \overline{X}\rightarrow Y$（连续映射的扩张），使得 $\phi=\psi\circ \iota$。
实际上，对任意的 $\overline{x}=[\{x_n\}_{n\geqslant 1}]\in \overline{X}$，
其中 $\{x_n\}_{n\geqslant 1}$ 是 $X$ 中的Cauchy序列，我们定义
\[
\psi(\overline{x})=\lim_{n\rightarrow \infty}\phi(x_n).
\]
在这个定义中，我们用到了两个基本的事实：一致连续的连续映射把Cauchy列映为Cauchy列；$Y$ 是完备的。
另外，如果我们选取 $\overline{x}$ 的另一个可能的代表元 $\{x'_n\}_{n\geqslant 1}$，
上述的定义 $\displaystyle \psi(\overline{x})=\lim_{n\rightarrow \infty}\phi(x'_n)$
是不依赖于代表元素选取的，这个只是例行公事的检验（利用一致连续性）。

现在来证明唯一性，假设存在第二个 $(\overline{\overline{X}},\overline{\overline{d}})$，
由于等距嵌入 $\iota'$ 是一致连续的，所以利用关于 $({\overline{X}},{\overline{d}})$ 的第二条性质，
我们有
\[
\begin{tikzcd}
  X  \ar[r, hook,"\iota"]  \ar[dr, "\iota'" description]
  & \overline{X}  \ar[d, dashed, "f"]\\
&\overline{\overline{X}}
\end{tikzcd}
\]
其中，$f\circ \iota =\iota'$；类似地，
利用关于 $(\overline{\overline{X}},\overline{\overline{d}})$ 的第二条性质，我们还有
\[
\begin{tikzcd}
  X  \ar[r, hook,"\iota'"]  \ar[dr, "\iota" description]
  &\overline{ \overline{X}}  \ar[d, dashed, "g"]\\
&\overline{X}
\end{tikzcd}
\]
其中，$g\circ \iota' =\iota$。通过映射的复合，我们得到
\[
\begin{tikzcd}
  X  \ar[r, hook,"\iota"]  \ar[dr, "\iota'" description]   \ar[ddr, "\iota" description]
  & \overline{X}  \ar[d, dashed, "f"]  \ar[bend left=75, dd, "\rm id"]\\
&\overline{\overline{X}}  \ar[d, dashed, "g"]\\
& \overline{X}
\end{tikzcd}
\]
此时，我们发现 $g\circ f$ 和单位映射 ${\rm id}$ 都可以被视作是 $\iota$（往右下走的箭头）的扩张，
根据唯一性，我们有 $g\circ f={\rm id}$，类似地 $f\circ g={\rm id}$。
这就证明了 $f\colon \overline{X}\rightarrow \overline{\overline{X}}$ 是双射。
由于 $f$ 在 $X$ 上的限制是等距映射，所以这也是一个等距映射。
:::

我们习惯上把上述构造中 $(\overline{X},\overline{d})$ 称作是 **$(X,d)$ 的完备化**，
并把它记做 $(\widehat{X},\widehat{d}\,)$，它在等距的意义下是唯一的。

如果对 $(X,d)=(\mathbb{Q},d(x,y)=|x-y|)$ 用上述的结论，
由于 $\mathbb{R}$ 中每个数都可以用有理数的Cauchy序列逼近，所以 $(\mathbb{R},d(x,y)=|x-y|)$，
是 $\mathbb{Q}$ 的完备化。
在这个意义下，实数是唯一的（我们必须指出，实数的存在性是我们利用Dedekind分割事先已经构造好的对象）。

如果我们在 $\mathbb{Q}$ 上选取别的距离函数，比如说，给定素数 $p$，对于任意的有理数 $x$，
我们可以将它唯一的写成 $x=p^v \dfrac{m}{n}$ 的形式，其中 $m$ 和 $n$ 是和 $p$ 互素的整数，
$v=v(x)\in \mathbb{Z}$。对于任意两个有理数 $x$ 和 $y$，我们定义
\[
d_p (x,y)=\left(\frac{1}{p}\right)^{v(x-y)}.
\]
这是所谓的 $p$-adic距离，有理数 $\mathbb{Q}$ 配有这个距离函数并不完备，
它的完备化是所谓的 $p$-adic数 $\mathbb{Q}_p$。
这个数域和 $\mathbb{R}$ 类似，但是又有很多不同的几何性质，它在数论的研究中不可或缺。
