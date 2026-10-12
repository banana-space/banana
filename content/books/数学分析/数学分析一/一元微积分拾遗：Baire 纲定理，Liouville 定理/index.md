---
title: 一元微积分拾遗：Baire 纲定理，Liouville 定理
---

## Baire定理以及应用

::: theorem [Baire]
$(X,d)$ 是完备的距离空间，那么任意可数个稠密的开集的交仍然是稠密的，
即若 $\{U_n\}_{n \geqslant 1}$ 是可数个稠密的开集，
那么 $U_\infty=\displaystyle \bigcap_{n\geqslant 1}U_n$ 是稠密的。
:::

在第二课中，我们就已经给出了稠密性的定义：$U\subset X$ 是子集，
如果对任意的 $x\in X$ 和任意的 $\varepsilon>0$，都存在 $y\in U$，
使得 $d(y,x)<\varepsilon$，我们就称 $U$ 在 $X$ 中是*稠密的*。
我们注意到，$U_{\infty}$ 未必是开集，因为开集只在有限的交的操作下封闭。

::: proof
任选 $x\in X$ 和 $\varepsilon>0$，我们将在 $U_\infty$ 中找到一个点 $x_\infty$，
使得 $d(x_\infty,x)\leqslant2\varepsilon$。
为此，我们将归纳地构造 $X$ 中的点列 $\{x_n\}_{n\geqslant 1}$。

首先，根据 $U_1$ 的稠密性，存在 $x_1\in U_1$，使得 $d(x_1,x)< \varepsilon$。
再根据 $U_1$ 是开集，我们可以找到 $\varepsilon_1>0$，
使得 $\overline{B(x_1,2\varepsilon_1)}\subset U_1$，
其中 $\overline{B(x_1,2\varepsilon_1)}$ 是闭球，
即 $\overline{B(x_1,2\varepsilon_1)}
=\bigl\{y\in X\bigm| d(y,x_1)\leqslant 2\varepsilon_1\bigr\}$。
另外，通过缩小 $\varepsilon_1$，我们还可以要求 $2\varepsilon_1<\varepsilon$。

我们用 $x_1$ 代替 $x$，用 $\varepsilon_1$ 代替 $\varepsilon$，重复上面的过程：
根据 $U_2$ 的稠密性，存在 $x_2\in U_2$，使得 $d(x_2,x_1)<\varepsilon_1$。
根据 $U_2$ 是开集，我们可以找到 $\varepsilon_2>0$，
使得 $\overline{B(x_2,2\varepsilon_2)}\subset U_2$
并且可以进一步要求 $2\varepsilon_2<\varepsilon_1$。

重复以上过程，我们就得到了 $\{x_n\}_{n\geqslant 0}$
和数列 $\{\varepsilon_n\}_{n\geqslant 0}$
（其中 $x_0=x$，$\varepsilon_0=\varepsilon$），使得对任意的 $n\geqslant 0$，有

- 1\) $x_{n+1}\in U_{n+1}$ 并且 $d(x_{n+1},x_n)<\varepsilon_n$；

- 2\) $\overline{B(x_{n+1},2\varepsilon_{n+1})}\subset U_{n+1}$；

- 3\) $0<2\varepsilon_{n+1}<\varepsilon_n$。

特别地，根据第三条，我们有 $\varepsilon_{n+k}< 2^{-k}\varepsilon_n$。

我们现在说明 $\{x_n\}_{n\geqslant 1}$ 是Cauchy列。对任意的自然数 $n$ 和 $p$，我们有
\[
\begin{aligned}
d(x_{n+p},x_n)&\leqslant d(x_{n+p},x_{n+p-1})+d(x_{n+p-1},x_{n+p-2})+\cdots + d(x_{n+1},x_n)\\
&< \varepsilon_{n+p-1}+ \varepsilon_{n+p-2}+\cdots+  \varepsilon_{n}\\
&<2^{-(p-1)}\varepsilon_n+2^{-(p-2)}\varepsilon_n+\cdots+\varepsilon_n\\
&<2\varepsilon_n.
\end{aligned}
\]
这表明，对一切 $n\geqslant 0$，$\{x_{n+p}\}_{p\geqslant 1}$
都落在 $\overline{B(x_{n},2\varepsilon_{n})}$ 中。我们注意到，上面的不等式直接给出
\[
\begin{aligned}
d(x_{n+p},x_n)&<2^{-(n+p-1)}\varepsilon+2^{-(n+p-2)}\varepsilon+\cdots+2^{-n}\varepsilon<2^{-(n-1)}\varepsilon.
\end{aligned}
\]
所以 $\{x_n\}_{n\geqslant 1}$ 是Cauchy列，根据 $X$ 的完备性，存在 $x_\infty\in X$，
使得 $\displaystyle \lim_{n\rightarrow \infty} x_n =x_\infty$。
特别地，根据 $\{x_{n+p}\}_{p\geqslant 1}\subset \overline{B(x_{n},2\varepsilon_{n})}$，
我们知道 $x_\infty \in \overline{B(x_{n},2\varepsilon_{n})}$（这是闭集）。
从而对任意的 $n\geqslant 1$，$x_\infty \in U_n$，所以，$x_\infty\in U_\infty$。
特别地，在最后一个不等式中取 $n=0$，我们有
\[
\begin{aligned}
d(x_{p},x_0)&<2\varepsilon.
\end{aligned}
\]
令 $p\rightarrow \infty$，我们就得到 $d(x_\infty,x)\leqslant2\varepsilon$。
:::

对于任意的集合 $Y\subset X$，如果对 $y\in Y$，存在 $\varepsilon>0$，
使得 $B(y,\varepsilon)\subset Y$，我们就称 $y$ 是 $Y$ 的一个**内点**。
我们用 $\mathring{Y}$ 表示 $Y$ 的内点所组成的集合并称之为 $Y$ 的**内部**。

::: exercise*
假设 $Y,Z \subset X$ 互为补集，那么 $\mathring{Y}=\emptyset$ 等价于 $Z$ 在 $X$ 中稠密。
:::

::: corollary
$(X,d)$ 是完备的距离空间，若 $\{F_n\}_{n \geqslant 1}$ 是可数个闭集
并且对每个 $n\geqslant 1$，其内部 $\mathring{F}_n=\emptyset$，
那么 $F_\infty=\displaystyle \bigcup_{n\geqslant 1}F_n$ 的内部为空集，
即 $\mathring{F_\infty}=\emptyset$。
:::

::: proof
令 $U_n=X-F_n$，这是开集。那么，$\mathring{F}_n=\emptyset$ 意味着 $U_n$ 是稠密的。
根据Baire的定理，$U_\infty=\displaystyle \bigcap_{n\geqslant 1}U_n$ 是稠密的，
从而 $X-U_\infty$ 的内部为空集。
最后，我们注意到 $F_{\infty}=\displaystyle \bigcup_{n\geqslant 1}F_n$ 的补集
恰好为 $U_\infty$，所以命题成立。
:::

我们给出Baire纲定理的几个应用。

::: proposition
不存在可微函数 $f\in C([a,b])$，使得对任意的开区间 $(c,d)\subset [a,b]$，
$f'$ 在 $(c,d)$ 上无界。
:::

::: proof
假设 $f$ 是 $[a,b]$ 上的可微函数，对任意的 $n\geqslant 1$，定义
\[
f_n(x)=\frac{f(x+\frac{1}{n})-f(x)}{\frac{1}{n}}.
\]
在上面的式子中，如果 $x+\frac{1}{n}>b$，我们可以考虑修改为
$f_n(x)=\displaystyle \frac{f(b)-f(x)}{\frac{1}{n}}$，不过这对证明没有影响。
很明显，由于 $f$ 是可微的，所以 $\{f_n\}_{n\geqslant 1}\subset C([a,b])$ 逐点收敛，
即对于每个点 $x\in [a,b]$，$f'(x)=\displaystyle \lim_{n\rightarrow \infty}f_n(x)$ 存在。

对于每个 $x\in [a,b]$，我们令 $M(x)=\displaystyle \sup_{n\geqslant 1}|f_n(x)|$。
因为 $f'$ 的存在性，我们知道 $M(x)$ 是良好定义的。我们定义集合
\[
F_{k}=\bigl\{x\in [a,b]\bigm|  M(x)\leqslant k\bigr\}
=\bigcap_{n\geqslant 1}\underbrace{\Bigl\{x\in [a,b]\Bigm| |f_n(x)|\leqslant k\Bigr\}}_{F_{n,k}}.
\]
由于每个 $F_{n,k}$ 都是闭集，所以 $F_k\subset [a,b]$ 是闭集。
又因为在每一个点处 $M(x)<\infty$，所以
\[
[a,b]=\bigcup_{k\geqslant 1}F_k.
\]
根据Baire定理的推论，不可能每一个 $F_k$ 的内部都是空集，所以存在 $k_0\geqslant 1$，使得
\[
\mathring{F_{k_0}}\neq \emptyset.
\]
所以，存在开区间 $(c,d)\subset [a,b]$，
使得 $(c,d)\subset \bigl\{x\in [a,b]\bigm|  M(x)\leqslant k_0\bigr\}$，
即对任意的 $x\in (c,d)$，对任意的 $n\geqslant 1$，我们都有
\[
|f_n(x)|=\bigg|\frac{f(x+\frac{1}{n})-f(x)}{\frac{1}{n}}\bigg|\leqslant k_0.
\]
令 $n\rightarrow \infty$，这表明在 $(c,d)$ 上，我们有 $f'$ 有界。
:::

::: proposition
不存在 $[0,1]$ 上的连续函数序列 $\{f_n\}_{n\geqslant 1}\in C([0,1])$，
使得 $f_n$ 逐点收敛到 $\mathbf{1}_{\mathbb{Q}}$（即有理数的示性函数）。
:::

::: proof
如若不然，我们假设存在 $\{f_n\}_{n\geqslant 1}\in C([0,1])$，
使得对任意的 $x\in [0,1]$，我们都有
\[
\lim_{n\rightarrow \infty}f_n(x)=\begin{cases}
1, \ \ &x\in \mathbb{Q};\\
0, \ \ &x\notin \mathbb{Q}.
\end{cases}
\]
对于每个 $k\geqslant 1$，我们令
\[
F_k=\bigcap_{n\geqslant k}f_n^{-1}\bigl([-\frac{1}{2},\frac{1}{2}]\bigr).
\]
由于 $f_n$ 连续，所以
\[
f_n^{-1}\bigl([-\frac{1}{2},\frac{1}{2}]\bigr)
=\bigl\{x\in [0,1]\bigm|  -\frac{1}{2}\leqslant f_n(x)\leqslant \frac{1}{2}\bigr\}
\]
是闭集，从而 $F_k$ 是闭集。根据定义，我们知道对任意的 $x\in F_k$，
\[
\lim_{n\rightarrow \infty}f_n(x)=0.
\]
从而，对于任意的 $x\in F_k$，$x$ 是无理数。
特别地，$\mathbb{Q}\cap F_k=\emptyset$，所以 $\mathring{F_k}=\emptyset$。

类似地，对于每个 $k\geqslant 1$，我们令
\[
G_k=\bigcap_{n\geqslant k}f_n^{-1}\bigl([\frac{1}{2},\frac{3}{2}]\bigr).
\]
这也是闭集。根据定义，我们知道对任意的 $x\in G_k$，
\[
\lim_{n\rightarrow \infty}f_n(x)=1.
\]
从而，对于任意的 $x\in G_k$，$x$ 是有理数，所以 $\mathring{G_k}=\emptyset$。

然而，根据 $f_n$ 逐点收敛到 $\mathbf{1}_{\mathbb{Q}}$，我们知道
\[
[0,1]=\bigcup_{k \geqslant 1}(F_k\cup G_k)=F_1\cup G_1\cup F_2\cup G_2\cup \cdots.
\]
上式左边的集合的内部非空，这和Baire定理矛盾。
:::

::: exercise*
试构造函数 $\{f_{m,n}\}_{m,n\geqslant 1}$，使得对任意的 $x\in [0,1]$，我们有
\[
\lim_{m\rightarrow \infty}\Bigl(\lim_{n\rightarrow \infty}f_{m,n}(x)\Bigr)=\mathbf{1}_{\mathbb{Q}}(x).
\]
:::

Baire定理在线性代数上有如下的应用：

::: proposition
假设 $(V,\|\cdot\|)$ 是完备的赋范线性空间（不妨假设是实数域上的线性空间），
如果 $\operatorname{dim} V=\infty$，那么 $V$ 的任意一组（代数）基 $\{e_i\}_{i\in I}$ 都是不可数集。
:::

我们回忆一下，如果 $\{e_i\}_{i\in I}$ 是 $V$ 的一组（代数）基，那么对任意的 $v\in V$，
存在有限个指标 $i_1,i_2,\cdots,i_m \in I$ 以及有限个实数
$\lambda_{i_1},\lambda_{i_2},\cdots, \lambda_{i_m}$，使得
\[
v=\lambda_{i_1}e_{i_1}+\lambda_{i_2}e_{i_2}+\cdots+\lambda_{i_m}e_{i_m}.
\]
为了证明这个命题，我们不加证明地接受如下的事实：

*有限维的赋范线性空间是完备的。*

上面的陈述是泛函分析中的标准事实，证明实际上很简单，
我们在下个学期学起多元微积分的时候（应该）会证明。

::: proof
如若不然，存在 $\{e_i\}_{i=1,2,\cdots}$ 是 $V$ 的一组可数的基，那么对任意的 $k\geqslant 1$，
定义 $V$ 的子空间
\[
V_k={\rm span}\{e_1,e_2,\cdots,e_k\}.
\]
我们在 $V_k$ 上用 $\|\cdot\|$ 所诱导的度量，从而 $(V_k,\|\cdot\|)$ 是完备的。
特别地，我们知道 $V_k\subset V$ 是闭集，
这是因为 $V_k$ 中序列的极限（若存在）都在 $V_k$ 中（连续性）。
我们现在说明对任意的 $k$，$V_k$ 的内部为空集，实际上，假设 $v \in V_k$，
那么任意选取 $\varepsilon>0$，我们有 $v+\varepsilon e_{k+1}\notin V_k$，
这表明 $v$ 不是 $V_k$ 的内点。根据基的定义，我们自然有
\[
V=\bigcup_{k\geqslant 1}V_k.
\]
然而 $V$ 的内部非空，这和Baire的定理矛盾。
:::

::: remark*
考虑 $\Bigl(C\bigl([a,b]\bigr),\|\cdot\|_\infty\Bigr)$ 的子空间 $D$，
它是由在至少一点处可微的函数构成的，即
\[
D=\bigl\{f\in C\bigl([a,b]\bigr)\bigm| \text{存在 $x\in [a,b]$，$f$ 在 $x$ 处可微}\bigr\}.
\]
那么，利用稍微精细一点的分析，我们可以证明 $\mathring{D}=\emptyset$。
这说明我们有很多的处处连续处处不可微分的函数。请有兴趣的同学自己参考网络或者有关的文献。
:::

## 原函数的初等表示

我们现在来说明不能找到一个初等函数 $f$，使得 $f'=e^{x^2}$。
为此，我们先引入一些记号，当然，如果同学们学习了代数学中的域理论，这里的很多定义就会很自然。
任意给定函数 $f_1,\cdots,f_n$，我们令
\[
\mathbb{C}(f_1,\cdots,f_n)=\left\{\frac{\displaystyle\sum_{0\leqslant i_1,i_2,\cdots,i_n \leqslant k}a_{i_1,i_2,\cdots,i_k}(f_1)^{i_1}(f_2)^{i_2}\cdots (f_k)^{i_k}}{\displaystyle \sum_{0\leqslant j_1,j_2,\cdots,j_n \leqslant \ell}b_{j_1,j_2,\cdots,j_\ell}(f_1)^{j_1}(f_2)^{j_2}\cdots (f_\ell)^{j_\ell}}\Bigm| k,\ell \in \mathbb{Z}_{\geqslant 0}, a_{i_1,i_2,\cdots,i_k}, b_{j_1,j_2,\cdots,j_\ell}\in \mathbb{C}\right\}.
\]
（其中，$\mathbb{C}(X)$ 是有理函数的集合，即两个多项式的商）
换句话说，这是由 $f_1,\cdots,f_n$ 经过有限次四则运算所得到的所有可能的函数的集合
（可以用上面的形式对四则运算的次数进行归纳即可）。
特别地，根据定义，我们知道 $\mathbb{C}(f_1,\cdots,f_n)$ 在四则运算下是封闭的。

很明显，我们有如下的包含关系：
\[
\mathbb{C}\subset \mathbb{C}(x)\subset \mathbb{C}(x,f_1)\subset \cdots \subset \mathbb{C}(x,f_1,\cdots,f_k)\subset \mathbb{C}(x,f_1,\cdots,f_k,f_{k+1})\subset\cdots \subset \mathbb{C}(x,f_1,\cdots,f_n).
\]
假设对于任意的 $k$，上面的从 $\mathbb{C}(x,f_1,\cdots,f_k)$
到 $\mathbb{C}(x,f_1,\cdots,f_k,f_{k+1})$ 所新添进去的元素 $f_{k+1}$ 满足如下的关系之一：

- 1\) $f_{k+1} = e^{f}$，其中 $f\in \mathbb{C}(x,f_1,\cdots,f_k)$；

- 2\) $f_{k+1} = \log(f)$，其中 $f\in \mathbb{C}(x,f_1,\cdots,f_k)$；

- 3\) 存在 $\mathbb{C}(x,f_1,\cdots,f_k)$ 上的多项式 $P(X)$ 使得 $P(f_{k+1})=0$，
  即存在 $m\geqslant 1$，$\alpha_0,\cdots,\alpha_m \in \mathbb{C}(x,f_1,\cdots,f_k)$，使得
  \[
  \alpha_m (f_{k+1})^m+\alpha_{m-1} (f_{k+1})^{m-1}+\cdots+\alpha_1 f_{k+1}+\alpha_0=0,
  \]

我们就称 $\mathbb{C}(x,f_1,\cdots,f_n)$ 中的元素是**初等函数**，
称 $\mathbb{C}(x,f_1,\cdots,f_n)$ 是一个**初等函数域**。
很明显，从函数 $1$ 和 $x$ 出发，
由指数函数、对数函数、取多项式函数的根以及四则运算进行有限次复合所得到的函数都是初等函数。
比如说，$e^{x^2}$ 和 $\bigl(\log x\bigr)^{-1}$ 这两个函数很明显是初等函数，
我们想知道它们的原函数是否可以用初等函数表达。

::: proposition
假设 $K=\mathbb{C}(x,f_1,\cdots,f_n)$ 是初等函数域，
那么求导数运算 $\dfrac{d}{dx}$ 将 $K$ 中的元素映射成 $K$ 中的元素，即
\[
\dfrac{d}{dx}\colon  K\rightarrow K.
\]
（代数上，我们把这样的域称作是一个微分域）
:::

::: proof
对 $n$ 进行归纳即可，当 $n=0$ 时命题明显成立。假设对 $n\geqslant 0$ 命题成立，
现在只要说明 $(f_{n+1})' \in K=\mathbb{C}(x,f_1,\cdots,f_{n+1})$ 即可。
我们考虑 $f_{n+1}$ 的构造，分情况讨论：

- 1\) 若 $f_{n+1} = e^{f}$，其中 $f\in \mathbb{C}(x,f_1,\cdots,f_n)$，
  那么 $(f_{n+1})'=f' e^f=f'f_{n+1}$。
  然而，根据归纳法，$f'\in \mathbb{C}(x,f_1,\cdots,f_n)\subset K$，
  所以利用四则运算的封闭性，我们有 $f'f_{n+1}\in K$；

- 2\) $f_{n+1} = \log(f)$，其中 $f\in \mathbb{C}(x,f_1,\cdots,f_n)$，
  证明完全类似于上面的情形。

- 3\) 存在 $m\geqslant 1$，$\alpha_0,\cdots,\alpha_m \in \mathbb{C}(x,f_1,\cdots,f_n)$，使得
  \[
  \alpha_m (f_{n+1})^m+\alpha_{m-1} (f_{n+1})^{m-1}+\cdots+\alpha_1 f_{n+1}+\alpha_0=0.
  \]
  我们可以要求 $m$ 是最小的使得上面式子成立的正整数。对上式求导数，我们得到
  \[
  \begin{aligned}
  &\ \ \ \overbrace{(\alpha_m)' (f_{n+1})^m+(\alpha_{m-1})' (f_{n+1})^{m-1}+\cdots+(\alpha_1)' f_{n+1}+(\alpha_0)'}^{\text{根据归纳假设，$\alpha_i \in K$，所以这是 $K$ 中的元素}}\\
  &=-\underbrace{\bigl(m\alpha_m (f_{n+1})^{m-1}+(m-1)\alpha_{m-1} (f_{n+1})^{m-2}+\cdots+\alpha_1\bigr) }_{\text{这是 $K$ 中的元素，记作 $F$}}\bigl(f_{n+1}\bigr)'.
  \end{aligned}
  \]
  根据 $m$ 的选取，我们知道 $F$ 不是零。所以，通过除法我们就证明了 $(f_{n+1})'\in K$。

一般的 $f\in K$ 的导数通过Leibniz法则立即可以得到。
:::

我们现在承认如下Liouville定理（这是纯代数的结果，请参见初等的介绍：
M. Rosenlicht, *Integration in finite terms*, American Math. Monthly 79 (1972), 963–972）：

::: theorem [Liouville]
假设 $K$ 是一个初等函数域，$f\in K$，那么存在初等函数 $F$ 使得 $F'=f$
当且仅当存在常数 $c_1,\cdots,c_m \in \mathbb{C}$，
存在函数 $R_0, R_1,\cdots,R_m \in K$，使得
\[
f=R_0'+\sum_{k=1}^m c_k \frac{R_k'}{R_k}.
\]
:::

这个条件自然是充分的，因为
\[
f=\bigl(R_0+\sum_{k=1}^m c_k \log({R_k})\bigr)'.
\]
必要性的证明请参见上述Rosenlicht的短文。
Liouville定理有如下的有用推论：

::: corollary
假设 $f,g\in \mathbb{C}(X)$ 是有理函数，那么函数 $f(x)e^{g(x)}$ 具有初等的原函数
当且仅当存在有理函数 $R\in \mathbb{C}(X)$ 使得
\[
R'+g' R =f.
\]
:::

::: proof
充分性是明显的，因为如果 $R'+g' R =f$，那么
\[
\bigl(R\cdot e^g\bigr)'=(R'+g' R )e^g = fe^g.
\]
现在假设 $f(x)e^{g(x)}$ 具有初等的原函数，我们在 $K=\mathbb{C}(x,e^g)$ 中工作，
根据Liouville的定理，我们有
\[
f(x)e^{g(x)}=R_0'(x,e^{g(x)})
+\sum_{k=1}^m  c_k\frac{R_k'(x,e^{g(x)})}{R_k(x,e^{g(x)})},
\]
其中 $R_k(X,Y)=\dfrac{P_k(X,Y)}{Q_k(X,Y)}$，
这里 $P_k$ 和 $Q_k$ 是 $\mathbb{C}$-系数的二元多项式。
给定一个二元的多项式 $P(X,Y)$，我们通过将它写成
\[
P(X,Y)=p_n(X)Y^n+\cdots+p_1(X)Y+p_0(X)
\]
可以将它看作是系数在 $\mathbb{C}(X)$ 中的多项式，这是一个域（和实数一样满足四则运算法则），
所以可以将 $P(X,Y)$ 写成 $\mathbb{C}(X)[Y]$ 中的不可约分多项式的分解。
据此，对 $k\geqslant 1$，我们可以将 $R_k(X,Y)$ 写成
\[
R_k(X,Y)=r_k(X)\frac{\prod p_{k,i}(X,Y)}{\prod q_{k,j}(X,Y)},
\]
其中 $p_{k,i}(X,Y)$ 和 $q_{k,j}(X,Y)$ 都是首一的 $\mathbb{C}(X)[Y]$ 中的不可约多项式，即形如
\[
Y^m+a_{m-1}(X)Y^{m-1}+\cdots+a_0(X),
\]
其中 $r_k(X)$ 和 $a_i(X)$ 均为 $\mathbb{C}(X)$ 中的元素。所以，
\[
\frac{R_k'(x,e^{g(x)})}{R_k(x,e^{g(x)})}=\bigl(\log(R_k(x,e^{g(x)}))\bigr)'=\frac{r_k'(x)}{r_k(x)}+\sum \frac{p_{k,i}'(x,e^{g(x)})}{p_{k,i}(x,e^{g(x)})}-\sum \frac{q_{k,j}'(x,e^{g(x)})}{q_{k,j}(x,e^{g(x)})}.
\]
据此，我们不妨假设所有的 $R_k(X,Y)$ 都是首一的 $\mathbb{C}(X)[Y]$ 中的不可约多项式，
$R(X,Y)=\dfrac{P(X,Y)}{Q(X,Y)}$，
其中 $P(X,Y)$ 和 $Q(X,Y)$ 也是首一的不可约多项式（可以对 $f$ 乘一个系数来做到这一点）。
按照要求，我们有
\[
f(X) Y-D(R_0(X,Y))-\sum_{k=1}^m  c_k \frac{D(R_k(X,Y))}{R_k(X,Y)}\Big|_{X=x,Y=e^g}=0.
\]
其中
\[
D(R_k(X,Y))=D(\sum r(X)Y^\ell)=\sum \bigl(r'(X)+\ell r(X)g'(X)\bigr)Y^\ell.
\]
我们现在说明，这个等式意味着
\[
f(X) Y-D(R_0(X,Y))-\sum_{k=1}^m  c_k \frac{D(R_k(X,Y))}{R_k(X,Y)}=0.
\]
实际上，我们只需要说明
\[
P(x,e^{g(x)})=0 \ \ \Rightarrow \ \ P(X,Y)\equiv0,
\]
其中 $P(X,Y)\in \mathbb{C}(X)[Y]$ 是首一多项式，$g(x)$ 不是常数。为此，假设
\[
P(X,Y)=Y^n+\cdots+r_1(X)Y+r_0(X).
\]
我们对 $n$ 进行归纳。$n=0$ 是显然的。对一般的 $n$，我们将上面的式子写成
\[
e^{ng(x)}+r_{n-1}(x)e^{(n-1)g(x)}+\cdots+r_1(x)e^{g(x)}+r_0(x)=0.
\]
求导数，我们就有
\[
ng'(x)e^{ng(x)}+\sum_{k=0}^{n-1} \bigl(r_k'(x)+kr_k(x)g'(x)\bigr)e^{kg(x)}=0.
\]
所以，
\[
\sum_{k=0}^{n-1} \bigl(r_k'(x)+kr_k(x)g'(x)-ng'(x)r_k(x)\bigr)e^{kg(x)}=0.
\]
由归纳假设，我们有
\[
\sum_{k=0}^{n-1} \bigl(r_k'(X)+(k-n)r_k(X)g'(X)\bigr)Y^k=0.
\]
对于 $k=0$ 的系数我们有
\[
g'(X)=\dfrac{r_0'(X)}{nr_0(X)}=\sum_{i=1}^{m}\frac{\pm 1}{X-a_i}.
\]
对于任意的一个有理函数 $g(X)$，我们总可以将它写成
\[
g(X)=\sum_{k=1}^M (X-a_k)^{b_k}
\]
的形式，其中 $b_k\in \mathbb{Z}$，它的导数不可能是上述的形式，矛盾。

我们现在来分析
\[
f(X) Y-\frac{D(P(X,Y))Q(X,Y)-P(X,Y)D(Q(X,Y))}{Q(X,Y)^2}
+\sum_{k=1}^m  c_k \frac{D(R_k(X,Y))}{R_k(X,Y)}=0 \ \ \cdots \ \cdots \ \ (\star)
\]
中多项式的整除关系。先研究 $R_k$，其中 $k\geqslant 1$。按照定义，我们有
\[
\begin{aligned}
D(R_k(X,Y))&=D(Y^N+\sum_{\ell<N} r(X)Y^\ell)\\
&=Ng'(X)Y^N+\sum_{\ell<N} \bigl(r(X)'+\ell r(X)g'(X)\bigr)Y^\ell.
\end{aligned}
\]
它的 $Y$-次数和 $R_k(X,Y)$ 的一致。
所以，如果要分母上的 $D(R_k(X,Y))$ 与分子上的不可约多项式 $R_k(X,Y)$ 能约分的话，只能有
\[
D(R_k(X,Y))=Ng'(X) R_k(X,Y).
\]
与上面完全一致，我们再次比较最低项的次数就得到矛盾。
所以，每个 $\dfrac{D(R_k(X,Y))}{R_k(X,Y)}$ 都是不可约分的，
为了消去 $R_k(X,Y)$ 的分母，我们只能寄希望于
有这样的分母来自于 $\dfrac{D(P)Q-PD(Q)}{Q^2}$ 这一项，
然而，如果假设 $Q(X,Y)=R_k(X,Y)^s \widetilde{Q}(X,Y)$，
其中 $s\in \mathbb{Z}_{\geqslant 1}$，
$ \widetilde{Q}(X,Y)$（以及 $P(X,Y)$）和 $R_k(X,Y)$ 互素，那么
\[
\begin{aligned}
\dfrac{D(P)Q-PD(Q)}{Q^2}&=\dfrac{D(P)}{R_k^{s}\widetilde{Q}}
-\frac{P}{R_k^{2s} \widetilde{Q}^2}\bigl(sR_k^{s-1}D(R_k) \widetilde{Q}
+R_k^{s}D(\widetilde{Q})\bigr)\\
&=\underbrace{\dfrac{D(P)}{R_k^{s}\widetilde{Q}}
-\frac{PD(\widetilde{Q})}{R_k^{s} \widetilde{Q}^2}}_{\text{分母上贡献了 $R_k^t$ 的项，其中 $t\leqslant s$}}
-\frac{sP\widetilde{Q}D(R_k)}{R_k^{s+1}},
\end{aligned}
\]
此时，最后一项在分母上贡献了 $R_k$ 的因子是 $s+1\geqslant 2$ 是最高的，这是不能消去的。
所以为了使得 $(\star)$ 成立，我们只能有
\[
f(X) Y-\frac{D(P(X,Y))Q(X,Y)-P(X,Y)D(Q(X,Y))}{Q(X,Y)^2}=0 \ \ \cdots \ \cdots \ \ (\star)
\]
同理，$Q(X,Y)$ 也不能有不可约因子，所以 $Q(X,Y)\in \mathbb{C}(X)$，
它可以被吸收到 $P(X,Y)$ 中，从而假设 $Q(X,Y)=1$，据此，我们有
\[
f(X)Y=D(P(X,Y))=\sum_{\ell\leqslant N} \bigl(r(X)'+\ell r(X)g'(X)\bigr)Y^\ell.
\]
比较 $1$ 次项系数，我们得到
\[
f(X)= r(X)'+r(X)g'(X).
\]
这就证明了结论。
:::

作为应用，我们有

- 1\) $\displaystyle\int e^{x^2}$ 不是初等函数。

  如若不然，此时 $f=1$，$g=x^2$，所以存在有理函数 $R(x)=\dfrac{P(x)}{Q(x)}$，
  其中 $P(x)$ 与 $Q(x)$ 互素并且 $Q(x)$ 是首一的，使得
  \[
  1= R(x)'+2xR(x) \ \ \Leftrightarrow \ \ P'Q+2xPQ-Q^2=PQ'.
  \]
  这表明 $Q$ 整除 $PQ'$，然而，$P$ 与 $Q$ 互素，所以 $Q$ 整除 $Q'$，
  这当然是不可能的，除非 $Q(x)\equiv 1$，此时，$R(X)$ 是多项式，
  $1= R(x)'+2xR(x)$ 自然不对（看次数）。

- 2\) $\displaystyle\int \dfrac{1}{\log(x)}$ 不是初等函数。

  通过变量替换 $x=e^y$，这等价于证明 $\displaystyle\int \dfrac{e^x}{x}$ 不是初等函数。

  如若不然，此时 $f=x^{-1}$，$g=x$，所以存在有理函数 $R(x)=\dfrac{P(x)}{Q(x)}$，
  其中 $P(x)$ 与 $Q(x)$ 互素并且 $Q(x)$ 是首一的，使得
  \[
  x^{-1}= R(x)'+R(x) \ \ \Leftrightarrow \ \ xP'Q+xPQ-Q^2=xPQ'.
  \]
  很明显，$R$ 不是多项式，即 $\deg Q\geqslant 1$。上面的式子表明 $Q$ 整除 $xPQ'$，
  然而，$Q$ 与 $PQ'$ 互素，所以 $Q$ 整除 $x$，从而 $Q(x)=x$。代入上面的等式，我们得到
  \[
  x^2P'+x^2P-x^2=xP.
  \]
  这表明 $x$ 整除 $P$，这和 $P(x)$ 与 $Q(x)$ 互素相矛盾。

::: exercise*
证明，$\displaystyle\int \dfrac{\sin x}{x}$ 不是初等函数。
:::
