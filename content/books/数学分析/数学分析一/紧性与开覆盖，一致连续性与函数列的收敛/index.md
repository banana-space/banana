---
title: 紧性与开覆盖，一致连续性与函数列的收敛
---

## 紧性

我们先来回顾一个例子：对多元函数 $f(x)=f(x_1,\cdots,x_n)$，
如果将 $x_2,\cdots, x_n$ 固定而将 $f$ 视作是 $x_1$ 的函数，$f$ 此时对 $x_1$ 连续，类似地，
$f$ 对其它变量也连续的，
但是这样不能推导出 $f$ 做为多元函数 $\mathbb{R}^n\rightarrow \mathbb{R}$ 是连续的。我们考察了函数：
\[
f(x,y)=\begin{cases}\frac{xy}{x^2+y^2}, \ \ (x,y)\neq (0,0)\\
0, \ \ (x,y)=(0,0).
\end{cases}
\]
其中，我们用 $x$ 和 $y$ 来表示 $\mathbb{R}^2$ 上面常用的坐标系。
这个函数对两个变量分别连续，
但是我们考虑了收敛到 $(0,0)$ 点列 $\left\{\dfrac{1}{n}(1,\lambda)\right\}_{n\geqslant 1}$ 并发现
\[
f\bigl(\dfrac{1}{n}(1,\lambda)\bigr)=\frac{\lambda}{1+\lambda^2}\not\rightarrow 0.
\]
从而，$f$ 在 $(0,0)$ 处不连续。

我们还可以将这个函数用极坐标系 $(r,\vartheta)$ 来表达：
\[
f(r,\vartheta)=\begin{cases}\frac{1}{2}\sin(2\vartheta), \ \ r \neq 0 \\
0, \ \ r=0.
\end{cases}
\]
很明显，$f$ 对 $r$ 这个变量不连续。

我们强调过，尽管习惯如此，但是我们不愿意将 $f$ 写成 $f()$ 的形式，
因为坐标系只是对这个对象 $f$ 的一种描述方式，
而这个 $f$ 的连续性是不依赖于坐标系选择的（只依赖于定义域和值域上的距离的定义）。

在第四次作业中，我们已经将开集和闭集的概念推广到了一般的距离空间，特别地，
我们可以在 $\mathbb{R}^n$ 讨论开集和闭集的概念。我们做一下简单的回顾：$(X,d)$ 是距离空间。
对任意的点 $x\in X$，$r>0$，
我们称 $B(x,r)=\bigl\{y\in X\mid d(y,x)<r\bigr\}$ 为**以 $x$ 为中心以 $r$ 为半径的开球**。
如果 $U\subset X$ 是若干开球的并，
即 $U=\displaystyle \bigcup_{\alpha \in \mathcal{A}} B(x_\alpha,r_\alpha)$（指标集 $\mathcal{A}$
是任意的），就称 $U$ 是距离空间 $(X,d)$ 中的**开集**。
证明，$U\subset X$ 是开集当且仅当对任意的 $x\in U$，存在 $\delta_x>0$，
使得 $B(x,\delta_x)\subset U$。
我们用 $\mathcal{T}$ 表示距离空间 $(X,d)$ 上的开集的全体，并且强行规定 $\emptyset$ 和 $X$ 都是开集。
$\mathcal{T}$ 满足（请比较 @prop:top-on-R）：

- 1\) $\emptyset \in \mathcal{T}$，$X \in \mathcal{T}$。

- 2\) 对任意开集的集合 $\{U_{\alpha}\}_{\alpha \in \mathcal{A}}$，其中 $\mathcal{A}$ 为指标集合，
  我们有 $\displaystyle\bigcup_{\alpha \in \mathcal{A}}U_\alpha \in \mathcal{T}$。

- 3\) 对任意有限个开集 $U_1,U_2,\cdots, U_m \in \mathcal{T}$，
  我们有 $\displaystyle\bigcap_{1\leqslant i\leqslant m}U_i \in \mathcal{T}$。

如果 $F\subset X$ 的补集是开集，我们就称 $F$ 是**闭集**。
类似于 $\mathbb{R}$ 的情况，$F$ 是闭集当且仅当对任意点列 $\{x_n\}_{n\geqslant 1}\in F$，
如果 $\displaystyle \lim_{n\rightarrow \infty}x_n = x$，那么 $x \in F$。
我们还知道，任意多闭集的交集还是闭集，有限个闭集的并集还是闭集。
特别地，
两个距离空间 $(X,d_X)$ 和 $(Y,d_Y)$ 之间的映射 $f\colon X\rightarrow Y$ 是连续的当且仅当对任意 $Y$
中的开集 $U$，其逆像 $f^{-1}(U)$ 为 $X$ 中的开集。

::: exercise*
$(X,d)$ 是距离空间，证明，一个点所构成的集合是闭集。
:::

我们现在引入紧集的概念：

::: definition [开覆盖与紧性]
$(X,d)$ 是距离空间，$S \subset X$ 是子集。
如果 $(X,d)$ 中开集的集合 $\mathcal{U}=\{U_\alpha\}_{\alpha\in A}$ 满足
$S\subset\displaystyle \bigcup_{\alpha\in A} U_\alpha$，
我们就把 $\mathcal{U}=\{U_\alpha\}_{\alpha\in A}$ 称作是 $S$ 的一个**开覆盖**。

我们考虑 $\mathcal{U}$ 的子集 $\mathcal{U}'$，即 $\mathcal{U}'=\{U_{\alpha'}\}_{\alpha'\in A'}$，
其中 $A'\subset A$。
如果 $S\subset\displaystyle \bigcup_{\alpha'\in A'} U_{\alpha'}$，
我们就把 $\mathcal{U}'=\{U_{\alpha'}\}_{\alpha'\in A'}$ 称作是
$\mathcal{U}=\{U_\alpha\}_{\alpha\in A}$ 的一个**子覆盖**。

$K\subset X$ 是子集，如果对 $K$ 的任意开覆盖 $\mathcal{U}=\{U_\alpha\}_{\alpha\in A}$，
都能找到一个有限的子覆盖 $\mathcal{U}'=\{U_{\alpha'}\}_{\alpha'\in A'}$，即 $A'$ 是有限集，
我们就称 $K$ 是**紧集**。
:::

我们最关心的例子自然是 $\mathbb{R}$（和 $\mathbb{R}^n$）上的紧集，我们将证明，
有界的闭区间 $[a,b]$ 是紧集（这是一个大定理）。

::: proposition
紧集在连续映射下被保持，即若 $f\colon (X,d_X)\rightarrow (Y,d_Y)$ 是距离空间之间的连续映射，
如果 $K\subset X$ 是紧集，那么 $f(K)\subset Y$ 也是紧集。
:::

::: proof
考虑 $\mathcal{U}=\{U_\alpha\}_{\alpha\in A}$ 是 $Y$ 中 $f(K)$ 的开覆盖，
那么根据 $K\subset f^{-1}\bigl(f(K)\bigr)$，
$f^{-1}\bigl(\mathcal{U}\bigr)=\{f^{-1}(U_\alpha)\}_{\alpha\in A}$ 是 $X$ 中 $K$ 的开覆盖，
从而有有限的子覆盖 $\{f^{-1}(U_{\alpha'})\}_{\alpha'\in A'}$，
从而 $\{U_{\alpha'}\}_{\alpha'\in A'}$ 覆盖了 $f(K)$，证毕。
:::

::: remark*
我们知道开集和闭集在连续映射的逆下被保持，但是通常不被连续映射保持，请举出反例。
:::

## Heine–Borel 定理

为了刻画 $\mathbb{R}$ 和 $\mathbb{R}^n$ 上的紧集，我们先证明引理：

::: proposition [Lebesgue数]
假设 $K\subset \mathbb{R}$ 是有界闭集，$\mathcal{U}=\{U_\alpha\}_{\alpha \in A}$ 是 $K$ 的开覆盖。
那么，存在 $\delta>0$（习惯上被称作是开覆盖 $\mathcal{U}$ 的一个Lebesgue数），
使得对任意的 $x,y\in K$，如果 $|x-y|<\delta$，那么存在 $\alpha \in A$，
使得 $[x,y]\cap K \subset U_\alpha$。
:::

::: proof
我们利用反证法：如果不然，那么每个 $\delta=\dfrac{1}{n}$，
存在 $x_n,y_n \subset K$（不妨假设 $x_n<y_n$），使得 $|x_n-y_n|\leqslant \dfrac{1}{n}$（特别地，
$\displaystyle \lim_{n\rightarrow \infty}|x_n-y_n|=0$），但是对任意的 $\alpha \in A$，
$U_\alpha$ 不能完整的覆盖住 $[x_n,y_n]\cap K$，即 $[x_n,y_n] \cap K \not\subset U_\alpha$。

由于 $K$ 是有界的，所以数列 $\{x_n\}_{n\geqslant 1}$ 和 $\{y_n\}_{n\geqslant 1}$ 是有界的，
通过选取子序列，我们可以假设当 $n\rightarrow \infty$ 时，$x_n\rightarrow x$，$y_n\rightarrow y$。
根据 $\displaystyle \lim_{n\rightarrow \infty}|x_n-y_n|=0$，自然有 $x=y$。
又因为 $K$ 是闭集，所以 $x=y\in K$。

由于 $\mathcal{U}$ 是 $K$ 的开覆盖，$x\in K$，所以存在 $U_\alpha\in \mathcal{U}$，
使得 $x\in U_\alpha$。
根据 $U_\alpha$ 是开集，那么存在开区间 $(x-\varepsilon,x+\varepsilon)\subset U_\alpha$，此时，
根据 $x_n\rightarrow x$，$y_n\rightarrow x$，选取很大的 $N$，使得 $[x_N,y_N]\subset U_\alpha$，
所以 $[x_N,y_N] \cap K \subset U_\alpha$，矛盾。
:::

::: theorem [Heine–Borel]
假设 $K\subset \mathbb{R}$。那么，$K$ 是紧集当且仅当 $K$ 是有界闭集。
:::

::: corollary
闭区间 $[a,b]$ 是紧集。
特别地，任意选取 $[a,b]$ 的一个**开区间**覆盖 $\mathcal{U}=\{I_\alpha\}_{\alpha\in A}$，
其中 $I_\alpha=(a_\alpha,b_\alpha)$ 是开区间，
$[a,b]\subset\displaystyle \bigcup_{\alpha\in A} I_\alpha$，
我们都能找到有限个开区间 $I_k=(a_k,b_k)$（$k=1,2,\cdots, N$），
使得 $[a,b]\subset\displaystyle \bigcup_{k=1}^N I_k$。
:::

::: proof [Heine–Borel定理的证明]
首先假设 $K$ 是紧集，我们分两步证明 $K$ 是有界闭集。

- $K$ 是有界的：由于 $\displaystyle\bigcup_{n=1}^\infty (-n,n) =\mathbb{R}$，
  所以 $\displaystyle\bigcup_{n=1}^\infty (-n,n) \supset K$，据此，
  我们有 $K$ 的开覆盖 $\mathcal{U}=\bigl\{(-n,n)\bigm| n=1,2,\cdots\}$。
  根据 $K$ 的紧性，可以找到有限个的开区间 $(-n_1,n_1),\cdots,(-n_k,n_k)$，使得它们的并集包含 $K$。
  不妨假设 $n_1<n_2<\cdots<n_k$。很明显，$K\subset (-n_k,n_k)$，所以有界。

- $K$ 是闭集：利用反证法，如若不然，存在序列 $\{x_i\}_{i\geqslant 1}\subset K$，
  $\displaystyle \lim_{i\rightarrow \infty}x_i=x$ 但是 $x\notin K$。
  通过选取子序列，我们还可以进一步假设对任意的 $i\geqslant 1$，$|x_i-x|<\dfrac{1}{i}$。

  考虑下降的闭区间序列 $F_n=[x-\dfrac{1}{n},x+\dfrac{1}{n}]$，
  我们自然有 $\displaystyle\bigcap_{n\geqslant 1} F_n=\{x\}$。
  我们注意到 $U_n=\mathbb{R}-F_n$ 是开集并且
  $\displaystyle\bigcup_{n\geqslant 1} U_n \supset K$（因为 ${x}\notin K$）！据此，
  我们得到 $K$ 的开覆盖 $\mathcal{U}=\bigl\{U_n\bigm| n=1,2,\cdots\}$，
  所以 $K$ 的紧性意味着存在 $U_{n_1},U_{n_2},\cdots,U_{n_k}$，
  使得 $\displaystyle K\subset \bigcup_{i=1}^k U_{n_i}$。
  不妨假设 $n_1<n_2<\cdots <n_k$，所以 $K \subset U_{n_k}$。
  根据 $F_{n_k}$ 的定义，$x$ 与任意一个 $K$ 中的点的距离至少是 $\dfrac{1}{n_k}$，
  这与 $\displaystyle \lim_{i\rightarrow \infty}x_i=x$ 矛盾。

其次，在 $K$ 是有界闭集的假设下证明 $K$ 是紧集。

任意给定 $K$ 的开覆盖 $\mathcal{U}=\{U_\alpha\}_{\alpha\in A}$，根据前一命题，
我们可以选取该覆盖的一个Lebesgue数 $\delta$，通过将 $\delta$ 适当缩小，
我们不妨假设 $\delta=\dfrac{1}{N}$，其中 $N\in \mathbb{Z}_{>0}$。
我们将 $K$ 砍成若干长度不超过 $\dfrac{1}{N}$ 小段 $K=\displaystyle \bigcup_{k\in \mathbb{Z}} K_k$，
其中 $K_k=K\cap [\dfrac{k}{N}, \dfrac{k+1}{N}]$。
根据有界性，只有有限个 $K_k$ 是非空的，所以我们有 $K=\displaystyle \bigcup_{|k|\leqslant k_0} K_k$。
利用Lebesgue数的定义，对每个 $|k|\leqslant k_0$，存在 $U_{k}\in \mathcal{U}$，
使得 $K_k\subset U_{k}$，所以 $K\subset \displaystyle \bigcup_{|k|\leqslant k_0} U_k$，
这就给出了有限的子覆盖。
:::

::: corollary [紧性和列紧性的等价性]
$K\subset \mathbb{R}$ 是子集，如果对任意 $K$ 中的序列 $\{x_k\}_{k\geqslant 1}\subset K$，
都存在收敛的子序列 $\{x_{k_j}\}_{j\geqslant 1}$，
使得 $\displaystyle\lim_{j\rightarrow \infty} x_{k_j} \in K$，我们就称 $K$ 是**列紧的**。

那么，$K$ 是紧集当且仅当 $K$ 是列紧的。
:::

::: proof
假设 $K$ 是紧集，那么它是有界的，所以对任意的 $K$ 中的子序列 $\{x_k\}_{k\geqslant 1}\subset K$，
存在收敛的子序列 $\{x_{k_j}\}_{j\geqslant 1}$，又因为 $K$ 是闭集，所以这个极限仍然在 $K$ 中，
从而 $K$ 是列紧的。

假设 $K$ 是列紧的，一个重要的观察是上面关于Lebesgue数的证明仍然成立（只用到了列紧性），据此，
我们可以原封不动地重复Heine–Borel定理中第二步关于 $K$ 是紧集的证明即可。（细节留给不放心的同学揣摩）
:::

我们可以将上面的推理加以简单的改造从而得到关于距离空间上紧性的若干结论，但是我们需要先预警一下，
不是每个结论都可以推广，比如说在一般的距离空间上，紧性可以推出有界闭性，但是两者不等价。
我们这些命题整理为如下几条，其中 $(X,d)$ 是距离空间：

- 1\) 假设 $K\subset X$ 是紧集，那么 $K$ 是有界闭集。
  其中，$K$ 在距离空间 $X$ 中有界指的是，存在 $x_0\in X$ 和 $R>0$，使得 $K\subset B(x_0,R)$。

  先证明 $K$ 是有界的：任意选定 $x\in X$，由于 $\displaystyle\bigcup_{n=1}^\infty B(x,n)=X$，
  所以 $\displaystyle\bigcup_{n=1}^\infty B(x,n) \supset K$，据此，
  我们有 $K$ 的开覆盖 $\mathcal{U}=\bigl\{B(x,n)\bigm| n=1,2,\cdots\}$。
  根据 $K$ 的紧性，可以找到有限个开球 $B(x,n_1),\cdots,B(x,n_k)$，使得它们的并集包含 $K$。
  不妨假设 $n_1<n_2<\cdots<n_k$。很明显，$K\subset B(x,n_k)$，所以有界。

  再证明 $K$ 是闭集：利用反证法，如若不然，存在序列 $\{x_i\}_{i\geqslant 1}\subset K$，
  $\displaystyle \lim_{i\rightarrow \infty}x_i=x$ 但是 $x\notin K$。
  通过选取子序列，我们还可以进一步假设对任意的 $i\geqslant 1$，$d(x_i,x)<\dfrac{1}{i}$。

  考虑下降的序列 $F_n=\{y\in X\mid d(y,x)\leqslant \dfrac{1}{n}\}$，首先注意到
  \[
  f\colon X\rightarrow \mathbb{R},  \ \ y\mapsto d(y,x),
  \]
  是连续映射，所以 $F_n=f^{-1}\bigl([-\dfrac{1}{n},\dfrac{1}{n}]\bigr)$ 是闭集。
  我们自然有 $\displaystyle\bigcap_{n\geqslant 1} F_n=\{x\}$。
  注意到 $U_n=X-F_n$ 是开集并且 $\displaystyle\bigcup_{n\geqslant 1} U_n \supset K$（因为
  ${x}\notin K$）！据此，我们得到 $K$ 的开覆盖 $\mathcal{U}=\bigl\{U_n\bigm| n=1,2,\cdots\}$，
  所以 $K$ 的紧性意味着存在 $U_{n_1},U_{n_2},\cdots,U_{n_k}$，
  使得 $\displaystyle K\subset \bigcup_{i=1}^k U_{n_i}$。
  不妨假设 $n_1<n_2<\cdots <n_k$，所以 $K \subset U_{n_k}$。
  根据 $F_{n_k}$ 的定义，$x$ 与任意一个 $K$ 中的点的距离至少是 $\dfrac{1}{n_k}$，
  这与 $\displaystyle \lim_{i\rightarrow \infty}x_i=x$ 矛盾。

- 2\) **定理** 假设 $(X,d)$ 是列紧的度量空间（即如果对任意 $X$ 中的点列 $\{x_k\}_{k\geqslant 1}$，
  都存在收敛的子序列 $\{x_{k_j}\}_{j\geqslant 1}$，
  即 $\displaystyle\lim_{j\rightarrow \infty} x_{k_j}$ 存在），
  $\mathcal{U}=\{U_\alpha\}_{\alpha \in A}$ 是 $X$ 的开覆盖。
  那么，存在 $\delta>0$（习惯上被称作是开覆盖 $\mathcal{U}$ 的一个Lebesgue数），
  使得对任意的 $x\in X$，存在 $\alpha \in A$，使得 $B(x,\delta) \subset U_\alpha$。

  我们利用反证法：如若不然，那么每个 $\delta=\dfrac{1}{n}$，存在 $x_n\in X$，
  使得 $B(x_n,\dfrac{1}{n})$ 不被任意一个开集所包含，即对任意的 $\alpha \in A$，
  $B(x_n,\dfrac{1}{n})  \not\subset U_\alpha$。
  根据列紧性，我们可以选取子列，使得 $k\rightarrow \infty$ 时，$x_{n_k}\rightarrow x$。
  由于 $\mathcal{U}$ 是开覆盖，所以存在 $U_\alpha\in \mathcal{U}$，使得 $x\in U_\alpha$。
  根据 $U_\alpha$ 是开集，那么存在开球 $B(x,r)\subset U_\alpha$。
  由于 $x_{n_k}\rightarrow x$，选取很大的 $N$，当 $k\geqslant N$ 时，
  使得 $B(x_{n_k},\dfrac{1}{n_k})\subset U_\alpha$，矛盾。

- 3\) **定理** 假设 $(X,d)$ 度量空间，它是列紧的当且仅当它是紧的。

  首先证明，如果 $X$ 是列紧的，那么 $X$ 必然是紧的：
  任意给定 $X$ 的开覆盖 $\mathcal{U}=\{U_\alpha\}_{\alpha\in A}$，根据2)，
  我们选取该覆盖的一个Lebesgue数 $\delta$。
  我们通过归纳的方式构造一个点列（可以是有限点列）：任选 $x_0$，那么存在某个 $U_0\in \mathcal{U}$，
  使得 $U_0\supset B(x_0,\delta)$。
  假定 $x_k$ 已经选定，那么存在某个 $U_k\in \mathcal{U}$，使得 $U_k\supset B(x_k,\delta)$。
  现在分两种情况：

  - 如果 $B(x_0,\delta)\cup B(x_1,\delta)\cup \cdots \cup B(x_k,\delta)=X$，
    那么我们已经找到了有限子覆盖 $U_1,\cdots,U_k\in \mathcal{U}$，这个过程到此结束。

  - 如果 $B(x_0,\delta)\cup B(x_1,\delta)\cup \cdots \cup B(x_k,\delta)\neq X$，
    那么我们就任选 $x_{k+1} \notin B(x_0,\delta)\cup B(x_1,\delta)\cup \cdots \cup B(x_k,\delta)$，
    然后继续上面的过程。
    我们注意到这一步选取的 $x_{k+1}$ 使得 $d(x_{k+1},x_j)\geqslant \delta$，
    其中 $j=0,1,2,\cdots, k$。

  当然，上面的第二种选择不可能无限地进行，否则我们得到一个点列 $\{x_k\}_{k\geqslant 1}$，
  使得任意两个点之间的距离都不小于 $\delta$，这与列紧性矛盾。
  所以，到某一步我们就在第一种选择上结束了，这就给出了有限的子覆盖。

  其次证明，如果 $X$ 是紧的，那么 $X$ 必然是列紧的：假设 $\{x_k\}_{k\geqslant 1}$ 是一列点，
  如果存在点 $x\in X$，使得对任意的 $\delta>0$，总存在 $B(x,\delta)$，
  使得 $B(x,\delta)\cap \{x_k\}_{k\geqslant 1}\neq \emptyset$，
  那么 $\{x_k\}_{k\geqslant 1}$ 有收敛的子列：因为我们对 $\delta=\dfrac{1}{i}$，
  取 $x_{k_i}\in B(x,\delta)\cap \{x_k\}_{k\geqslant 1}$ 即可。

  我们用反证法：如果 $\{x_k\}_{k\geqslant 1}$ 没有收敛子列，
  那么对任意的 $x\in X-\{x_k\}_{k\geqslant 1}$，存在 $\delta>0$，
  使得 $B(x,\delta)\cap \{x_k\}_{k\geqslant 1}=\emptyset$，
  这表明 $\{x_k\}_{k\geqslant 1}$ 是 $X$ 中的一个闭集。
  同样的推理表明，$\{x_k\}_{k\geqslant m}$ 也是 $X$ 中的闭集，
  所以 $U_m=X-\{x_k\}_{k\geqslant m}$ 是一族开集。
  很明显，$\displaystyle \bigcup_{m\geqslant 1}U_m=X$，利用紧性，
  我们有 $\displaystyle \bigcup_{m\leqslant m_0}U_m=X$，
  这表明 $\{x_k\}_{k\geqslant 1}$ 是有限的点集，自然收敛。

::: corollary [Heine–Borel]
假设 $K\subset \mathbb{R}^n$。那么，$K$ 是紧集当且仅当 $K$ 是有界闭集。
:::

::: proof
首先，假设 $K$ 是紧集，在一般的距离中我们已经证明了 $K$ 是有界闭集。

其次，假设 $K$ 是有界闭集（在 $\mathbb{R}^n$ 中显然是列紧的，因为我们可以看每个坐标），
我们要证明 $K$ 是紧集。

任意给定 $K$ 的开覆盖 $\mathcal{U}=\{U_\alpha\}_{\alpha\in A}$，
列紧性表明我们可以选取该覆盖的一个Lebesgue数 $\delta$，通过将 $\delta$ 适当缩小，
我们不妨假设 $\delta=\dfrac{1}{N}$，其中 $N\in \mathbb{Z}_{>0}$。
假设 $K$ 落在方体 $ [-M,M]\times[-M,M]\times \cdots \times [-M,M]$，其中 $M$ 是正整数。
通过将我们将这个方体分解成 $\left(2MN\right)^n$ 个小方体 $\{Q_i\}$，$K$ 砍成有限个小块 $Q_i\cap K$。
利用Lebesgue数的定义，每个小块 $Q_i\cap K$ 都包含在某个 $U_{i}$ 中，
所以 $K\subset \displaystyle \bigcup U_i$，这就给出了有限的子覆盖。
:::

## 一致连续性与一致收敛

::: definition [一致连续性]
假设 $f\colon X\rightarrow \mathbb{R}$ 是连续函数，如果对任意的 $\varepsilon>0$，存在 $\delta>0$，
使得对任意的 $x,y\in X$，只要 $d(x,y)<\delta$，就有 $|f(x)-f(y)|<\varepsilon$，
我们就称 $f$ 在 $X$ 上**一致连续**。
:::

::: example*
考虑 $(0,1)$ 上的函数 $f(x)=\dfrac{1}{x}$，我们希望研究 $f(x)$ 在 $x_0$ 处的连续性。

按照定义，$f$ 在 $x_0$ 处连续，指的是：对任意的 $\varepsilon>0$，存在 $\delta>0$（*注意到，
这个 $\delta$ 可能依赖 $x_0$*），使得当 $|x-x_0|<\delta$ 时，我们就有 $|f(x)-f(x_0)|<\varepsilon$。

对于 $f(x)=\dfrac{1}{x}$，我们不妨先假设 $x$ 已经离着 $x_0$ 很近：
$\dfrac{1}{2}x_0 \leqslant x \leqslant 2x_{0}$，那么
\[
\varepsilon>|\frac{1}{x}-\frac{1}{x_0}|=\frac{|x-x_0|}{x_0 x}\geqslant \frac{|x-x_0|}{2(x_0)^2}.
\]
所以，要想 $|f(x)-f(x_0)|<\varepsilon$，我们需要 $\delta< 2(x_0)^2\varepsilon$。
由此可见，$x_0$ 越小，需要选取的 $\delta$ 就越小，这就给出了 $\delta$ 对 $x_0$ 的依赖性。
然而，在一致连续的概念中，$\delta$ 的选取不依赖于 $x_0$，
所以 $(0,1)$ 区间上定义的 $\dfrac{1}{x}$ 不是一致连续的。
（$[0.1,1]$ 区间上定义的 $\dfrac{1}{x}$ 是一致连续的！）
:::

在作业题中，我们会见到很多连续和一致连续的例子。

::: theorem
$I=[a,b]$ 是有界闭区间，每个 $f\in C(I)$ 都是一致连续的函数。
:::

::: proof
给定 $f\in C(I)$，通过定义
\[
f(x)=\begin{cases}
f(a), \ \ & x\leqslant a;\\
f(x), \ \ & a\leqslant x\leqslant b;\\
f(b), \ \ & x\geqslant b.
\end{cases}
\]
任意给定 $\varepsilon>0$，对每个 $x\in I$，存在开区间 $I_x=(x-\delta_x,x+\delta_x)$，
使得对任意的 $y\in I_x$（等价于说 $|y-x|<\delta_x$），都有 $|f(y)-f(x)|<\dfrac{1}{2}\varepsilon$。
特别地，对任意的 $y,z\in I_x$，我们都有
\[
|f(y)-f(z)|\leqslant |f(y)-f(x)|+|f(z)-f(x)|< \varepsilon.
\]
我们得到 $I$ 一个开覆盖 $\{I_{x}\}_{x\in I}$。
令 $\delta$ 为这个开覆盖的Lebesgue数，对于 $|x-y|<{\delta}$，按照Lebesgue数的定义，
$x$ 和 $y$ 落在同一个 $I_{x_i}$ 里面，从而 $|f(x)-f(y)|<\varepsilon$。这就证明了一致连续性。
:::

我们现在引入关于函数的两种收敛的概念：$(X,d)$ 是距离空间，
$\{f_n\colon I \rightarrow \mathbb{R}\}_{n\geqslant 1}$ 和 $f\colon  I \rightarrow \mathbb{R}$
是函数的序列。我们定义：

- **逐点收敛。** 如果对每个点 $x\in X$，函数值 $f_n(x)\rightarrow f(x)$，
  即 $\displaystyle \lim_{n\rightarrow \infty}|f_n(x)-f(x)|=0$，
  我们就称 $f_n$ 在 $X$ 上逐点收敛到 $f$。

- **一致收敛。** 如果 $\displaystyle \lim_{n\rightarrow \infty}\sup_{x\in X}|f_n(x)-f(x)|=0$，
  我们就称 $f_n$ 在 $X$ 上一致收敛到 $f$。

::: remark*
逐点收敛指的是对任意的 $x\in I$，对任意的 $\varepsilon>0$，
存在 $N$（可能依赖于 $\varepsilon$ 和 $x$），使得当 $n\geqslant N$ 时，
我们有 $|f_n(x)-f(x)|<\varepsilon$。

一致收敛指的是对任意的 $\varepsilon$，存在 $N$（只依赖于 $\varepsilon$ 不依赖于点 $x$），
使得当 $n\geqslant N$ 时，对任意的 $x\in I$，我们都有 $|f_n(x)-f(x)|<\varepsilon$。
换句话说，$N$ 的选取对于 $x$ 是一致的（即不依赖于 $x$）。

特别地，函数列的一致收敛能推出逐点收敛。
:::

我们先看几个例子：

- 1\) $I=(0,1)$，$f_n(x)=\dfrac{1}{nx}$，对于每个 $x$，
  $\displaystyle \lim_{n\rightarrow \infty}f_n(x) = 0$，所以 $f_n(x)$ 逐点收敛到 $0$（函数）；然而，
  对任意的 $\displaystyle\sup_{x\in I}|f_n(x)-0|=\infty$，所以 $\{f_n\}_{n\geqslant 1}$ 不一致收敛。

- 2\) $I=[-2,2]$，$f_n(x)=\begin{cases}
-1, &x\leqslant -\dfrac{1}{n}\\
nx, & -\dfrac{1}{n}\leqslant x \leqslant \dfrac{1}{n}\\
1,& x\geqslant \dfrac{1}{n}.
\end{cases}$

  $f_n$ 逐点收敛到函数 $f(x)=\begin{cases}
-1, &x<0;\\
0, & x=0;\\
1,& x>0.
\end{cases}$
  我们注意到极限函数并不连续。不难看出，$f_n$ 并不一致收敛。

有了以上的准备工作，我们现在研究闭区间上实数（或者复数）值连续函数空间 $C\bigl([a,b]\bigr)$，
其中 $a<b$（否则不是很有意思）。这是一个无限维的 $\mathbb{R}$-线性空间。
我们在 $C\bigl([a,b]\bigr)$ 上定义一个范数
\[
\|\cdot\|_{\infty}\colon C\bigl([a,b]\bigr)\rightarrow \mathbb{R}_{\geqslant 0}, \ \ f\mapsto \|f\|_{\infty}=\sup_{x\in [a,b]}|f(x)|.
\]
我们注意到，$|f|$ 也是闭区间 $[a,b]$ 上的连续函数，所以有界，
从而 $\displaystyle \sup_{x\in [a,b]}|f(x)|<\infty$ 是良好定义的。
这个范数定义了 $C\bigl([a,b]\bigr)$ 上的距离 $d_\infty(f,g)=\displaystyle\sup_{x\in I}|f(x)-g(x)|$。

我们应该将 $\Bigl(C\bigl([a,b]\bigr),+,\cdot, \|\cdot\|_{\infty}\Bigr)$ 和实数
$(\mathbb{R},+,\cdot, |\cdot|)$ 做类比。

另外，在一致收敛的概念中，
我们要求 $\displaystyle \lim_{n\rightarrow \infty}\sup_{x\in X}|f_n(x)-f(x)|=0$，也就是说，
$f_n$ 是按照距离函数 $d_\infty$ 在距离空间 $\Bigl(C\bigl([a,b]\bigr),d_{\infty}\Bigr)$ 里收敛。
所以，把函数视为点，所谓一致收敛的概念变成了我们熟悉的点列收敛的概念。

::: theorem
$\bigl(C([a,b]),\|\cdot\|_\infty\bigr)$ 是完备赋范线性空间，
即 $\bigl(C([a,b]),d_\infty\bigr)$ 是完备的距离空间。
:::

::: remark*
$C(I)$ 的完备性是关于连续函数最重要的性质之一。
另外，我们强调这个性质和之前关于连续函数看法完全不同：这不是关于一个函数的性质，
而是关于一族（或者所有）连续函数的性质。

从证明的角度而言，一致连续性将起重要的作用[^1]，而逐点地考虑这个问题是徒劳的，因为有无限多个点。
由于一致连续性的证明依赖于紧性，我们可以理解为什么函数所定义的空间的紧性（几何性质）非常关键：
这个概念提供了从无限到有限的途径！
:::

::: proof
假设 $\{f_n\}_{n\geqslant 1}$ 是 $\bigl(C([a,b]),\|\cdot\|_\infty\bigr)$ 中Cauchy列，
即对任意的 $\varepsilon>0$，存在 $N$，使得当 $n,m\geqslant N$ 时，
我们有 $ d_\infty(f_n,f_m)<\varepsilon$。
我们的目标是构造 $f\in C\bigl([a,b]\bigr)$，
使得 $f_n \stackrel{d_\infty\ \ \ }{\longrightarrow f}$。

首先定义函数 $f$：对任意 $x\in I$，按照定义，对任意的 $m$ 和 $n$，
我们都有 $|f_n(x)-f_m(x)|\leqslant d(f_n,f_m)$，所以 $\{f_n(x)\}_{n\geqslant 1}$ 是Cauchy数列，
据此，可以定义
\[
f(x)=\displaystyle\lim_{n\rightarrow \infty} f_n(x), \ \  \forall x\in I.
\]
问题的关键在于证明 $f(x)$ 是连续的。

任选 $x_0\in I$，我们证明 $f$ 在 $x_0$ 处连续：对任意的 $\varepsilon>0$，先选取 $N$，
当 $n,m \geqslant N$ 时，有 $d(f_n,f_m)<\dfrac{1}{9}\varepsilon$。
特别地，$|f(x_0)-f_N(x_0)|\leqslant \dfrac{1}{9}\varepsilon$。
由于 $f_N$ 在 $I$ 上连续[^2]，所以存在 $\delta>0$，使得当 $|x-x_0|<\delta$ 时，
我们有 $|f_N(x)-f_N(x_0)|<\dfrac{1}{9}\varepsilon$。
从而，对任意的 $n\geqslant N$，当 $|x-x_0|<\delta$ 时，我们有
\[
\begin{aligned}
|f_n(x)-f_n(x_0)|&\leqslant |f_n(x)-f_N(x)|+|f_N(x)-f_N(x_0)|+|f_n(x_0)-f_N(x_0)|\\
&\leqslant d(f_n,f_N)+\frac{1}{9}\varepsilon+d(f_n,f_N)<\frac{1}{9}\varepsilon+\frac{1}{9}\varepsilon+\frac{1}{9}\varepsilon=\frac{1}{3}\varepsilon.
\end{aligned}
\]
此时，对任意满足 $|x-x_0|<\delta$ 的 $x$，存在 $n\geqslant N$，
使得 $|f_n(x)-f(x)|<\dfrac{1}{3}\varepsilon$，从而，我们有
\[
\begin{aligned}
|f(x)-f(x_0)|&\leqslant |f(x)-f_n(x)|+|f_n(x)-f_n(x_0)|+|f_n(x_0)-f(x_0)|\\
&<\frac{1}{3}\varepsilon+\frac{1}{3}\varepsilon+\frac{1}{3}\varepsilon\leqslant \varepsilon.
\end{aligned}
\]
这就证明了 $f$ 是连续函数。

最终，我们说明 $f_n$ 一致收敛到 $f$[^3]，
即 $\displaystyle \lim_{n\rightarrow \infty}d_\infty(f_n,f)=0$。
任取 $\varepsilon>0$，首先，根据 $\{f_n(x)\}_{n\geqslant 1}$ 是Cauchy数列，存在 $N_0$，
使得当 $n,m\geqslant N_0$ 时，
我们有 $\displaystyle \sup_{x\in [a,b]} |f_n(x)-f_m(x)|<\frac{1}{2}\varepsilon$。

对任意的 $x\in [a,b]$，根据逐点收敛性，存在 $N_x\geqslant N_0$，
使得 $\displaystyle |f_{N_x}(x)-f(x)|<\frac{1}{2}\varepsilon$。
因此对任意的 $m \geqslant N_0$，都有
\[
|f_m(x)-f(x)|\leqslant|f_m(x)-f_{N_x}(x)|+|f_{N_x}(x)-f(x)|<\varepsilon.
\]
因此 $d_\infty(f_m,f)<\varepsilon$。
:::

[^1]: 上传者注：事实上，$C([a,b])$ 的完备性并不需要用到紧性和一致连续性！开区间上，
  依 $\| \cdot \|_{\infty}$ 范数构成 Cauchy 列的函数列也必定一致收敛到连续函数。
  只不过对于开区间上的连续函数来说，
  $\| \cdot \|$ 并不总是良定义的（因为开区间上的连续函数未必有界），因此并不构成赋范空间。
[^2]: 上传者注：讲义中这里写的是一致连续；实则并不需要，只需要 $f$ 在 $x_0$ 处连续即可。
[^3]: 上传者注：这里原讲义写的较为混乱，并且用到了并不需要的紧性。此处重写了这一部分证明。
