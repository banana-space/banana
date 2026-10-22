---
title: 测度空间上的积分，Beppo Levi 定理
---

## 测度空间上积分的定义

上节课的最后，
我们在测度空间 $(X,\mathcal{A},\mu)$ 上定义了简单函数空间 $\mathcal{E}(X,\mathcal{A},\mu)$，其中，
对于简单函数 $f$，按照定义，我们要求它只能取有限多个值并且非零值的逆像的测度有限。
另外，每一个简单函数都可以写成下面的形式：
存在 $m+1$ 个（可能相同）复数 $\lambda_0, \lambda_1,\cdots,\lambda_m$（要求 $\lambda_0=0$，
当 $i\geqslant 1$ 时，
$\lambda_i\neq 0$）和 $A_i\in \mathcal{A}$（$i=0,1,\cdots,m$）并且当 $i\geqslant 1$ 时，
$\mu(A_i)<\infty$，使得
\[
f(x) = \sum_{i=0}^m \lambda_i \cdot \mathbf{1}_{A_i}(x).
\]
据此，我们也知道简单函数空间 $\mathcal{E}(X)$ 是 $\mathbb{C}$-线性空间。

在简单函数的定义中，我们要求逆像的测度有限，其目的是来定义积分的。

::: definition
对任意的 $f\in \mathcal{E}(X)$，我们用符号 $\displaystyle\int_X \,\cdot\, d\mu$ 表示积分，其定义为
\[
\int_X f d\mu \coloneqq\sum_{\lambda\in \mathbb{C}}\lambda \cdot \mu\left(f^{-1}(\lambda)\right).
\]
从而，我们定义映射
\[
\int_X \colon \mathcal{E}(X,\mathcal{A},\mu)\rightarrow \mathbb{C}, \ \ f \mapsto \int_X f d\mu.
\]
:::

和我们学习过的Riemann积分一样，积分算子满足线性：

::: proposition
积分算子
\[
\int_X \colon \mathcal{E}(X,\mathcal{A},\mu)\rightarrow \mathbb{C}, \ \ f \mapsto \int_X f d\mu.
\]
是简单函数空间 $\mathcal{E}(X)$ 上的 $\mathbb{C}$-线性映射（泛函）。
进一步，如果 $f,g\in \mathcal{E}(X)$ 是实数值的函数且对任意 $x\in X$，$f(x)\leqslant g(x)$，那么
\[
\displaystyle\int_X f d\mu\leqslant \int_X g d\mu.
\]
:::

::: proof
我们首先证明，如果 $f(x)=\displaystyle\sum_{i=0}^m \alpha_i \cdot \mathbf{1}_{A_i}(x)$，
其中 $\alpha_0, \alpha_1,\cdots,\alpha_m \in \mathbb{C}$ 并且当 $i\geqslant 1$ 时，
$\alpha_i\neq 0$；对每个 $i=0,1,\cdots,m$，$A_i\in \mathcal{A}$ 并且当 $i\geqslant 1$ 时，
$\mu(A_i)<\infty$，那么
\[
\int_{X} f(x)d\mu = \sum_{i=0}^m \alpha_i \mu(A_i).
\]
注意到，我们不妨要求 $\alpha_0=0$ 并且 $\displaystyle \bigcup_{i=0}^m A_i=X$。
实际上，我们首先把 $f$ 写成
\[
f(x)=\displaystyle\sum_{i=0}^N \lambda_i \cdot \mathbf{1}_{X_i}(x),
\]
其中 $\lambda_0=0, \lambda_1,\cdots, \lambda_N \in \mathbb{C}$ 是两两不同的，
$f\big|_{X_i}\equiv \lambda_i$ 并且 $\displaystyle \bigcup_{i=0}^NX_i=X$（这是一个无交并），从而，
按照积分的定义，我们有
\[
\int_{X} f(x)d\mu = \sum_{i=0}^N \lambda_i \mu(X_i).
\]
通过把 $f$ 写成
\[
f(x)=\displaystyle\sum_{i=0}^m\sum_{j=0}^N \alpha_i \cdot \mathbf{1}_{A_i\cap X_j}(x)
\]
我们不妨假设对于每个 $A_i$，都存在 $X_j$，使得 $A_i\subset X_j$。
根据这些 $X_j$，我们重新把 $\{A_i\}_{i\leqslant m}$ 分类，那么，重新编号之后，我们得到
\[
f(x)=\displaystyle\sum_{j=0}^N \left(\sum_{i=0}^m\alpha_{ij} \cdot \mathbf{1}_{A_{i,j}}(x)\right),
\]
其中 $A_{i,j}\subset X_j$。按照 $f$ 的定义，我们自然有
\[
\sum_{i=0}^m\alpha_{ij} \cdot \mathbf{1}_{A_{i,j}}(x)=\lambda_j \mathbf{1}_{X_j}(x),
\]
我们只要证明
\[
\sum_{i=0}^m\alpha_{ij}\mu(A_{i,j})=\lambda_j \mu(X_j) \ \ \ \cdots \ \cdots \ \ (\star)
\]
即可，其中 $j\leqslant N$ 是固定的。为此，我们继续对 $A_{i,j}$ 进行分划，考虑所有的形如
\[
A_{i_1j}\cap A_{i_2j}\cap \cdots \cap A_{i_sj} \cap A_{i'_1j}^c\cap A_{i'_2j}^c\cap \cdots \cap A_{i'_tj}^c
\]
的集合，其中 $i_1,\cdots,i_s,i'_1,\cdots,i'_t$ 是 $1,\cdots,m$ 的一个排列，它们是两两不相交的，
每个 $A_{i,j}$ 都可以写成它们的并，据此，我们只需要在 $(\star)$ 中假设 $A_{i,j}$ 是两两不交的即可，
此时，命题是显然的。

回到线性的证明，根据上面的结论，任取两个简单函数
\[
f(x) = \sum_{i=0}^m \alpha_i \cdot \mathbf{1}_{A_i}(x), \ \ g(x) = \sum_{j=0}^n \beta_j \cdot \mathbf{1}_{B_j}(x),
\]
那么
\[
f(x)+g(x)=\sum_{i=0}^m \alpha_i \cdot \mathbf{1}_{A_i}(x)+ \sum_{j=0}^n \beta_j \cdot \mathbf{1}_{B_j}(x).
\]
所以，
\[
\begin{aligned}
\int_X f+g d\mu &=\sum_{i=1}^m \alpha_i \mu(A_i)+\sum_{j=1}^n \beta_j \mu(B_j)\\
&=\int_X fd\mu +\int_X g d\mu.
\end{aligned}
\]

对于最后一个论断，根据线性，我们证明
\[
\int_X h d\mu \geqslant 0
\]
即可，其中，$h=f-g\geqslant 0$。根据积分的定义，
\[
\int_X h d\mu \coloneqq\sum_{\lambda\in \mathbb{C}}\lambda \cdot \mu\left(h^{-1}(\lambda)\right).
\]
由于 $h\geqslant 0$，
上式出现的非零的 $\mu\left(h^{-1}(\lambda)\right)$ 所对应的 $\lambda$ 都是非负的，所以显然成立。
:::

::: remark* [正简单函数积分的定义]
给定可测函数 $f\colon X\rightarrow [0,+\infty]$（我们约定 $[0,\infty]$ 上的 $\sigma$-代数取为由
$[0,\infty)$ 中的开集和点 $\{+\infty\}$ 所生成的 $\sigma$-代数），如果 $f$ 只取有限多个值，
即 $|f(X)|<\infty$，我们就称它为**正的简单函数**或者**非负简单函数**。
与之前的定义相比，我们并不对 $\mu(f^{-1}(c))$ 有限制。此时，我们可以强行定义正简单函数的积分：
\[
\int_X f d\mu \coloneqq\sum_{\lambda\in [0,\infty]}\lambda \cdot \mu(f^{-1}(\lambda)).
\]
如果上面的求和出现了 $+\infty$，
我们就说这个积分值是正无穷大并记作 $\displaystyle \int_X f d\mu =+\infty$。
:::

类似上面简单函数的定义，如果映射函数 $f\colon X\rightarrow [0,+\infty]$ 是可测的，那么，
我们就称 $f$ 为**正函数**或者**非负函数**。我们现在可以定义测度空间上可测函数的积分了：

::: definition [积分的定义]
对于正可测函数 $f\colon X\rightarrow [0,+\infty]$，
我们把它的积分 $\displaystyle \int_X f d\mu$ 定义不超过该函数的正简单函数的积分的上确界，即
\[
\int_X f d\mu \coloneqq \sup_{\varphi\in \mathcal{E}(X)\atop \\ 0\leqslant \varphi \leqslant f} \,\, \int_X \varphi d\mu.
\]
对于一般的可测函数 $f\colon X\rightarrow \mathbb{C}$，如果 $\displaystyle \int_X |f|d\mu<\infty$，
我们就称 $f$ 为 **$\mu$-可积的**或**可积的**。

当 $f\colon X\rightarrow \mathbb{R}$ 是实值可积函数时，我们按照它的正负两部分来定义积分：
\[
\int_X f d\mu =\int_X f^+ d\mu-\int_X f^- d\mu,
\]
其中，$f=f^+-f^-$，它们的定义为
\[
f^+(x) = f(x)\mathbf{1}_{\{x|f(x)\geqslant 0\}},\ \ f^-(x) = -f(x)\mathbf{1}_{\{x|f(x)\leqslant 0\}}.
\]

当 $f\colon X\rightarrow \mathbb{C}$ 是复值可积函数时，我们按其实部和虚部来定义积分：
\[
\int_X f d\mu =\int_X {\rm Re}(f) d\mu+i\int_X {\rm Im}(f) d\mu.
\]
:::

我们先来证明两个简单的性质用来熟悉一下定义：

- 1\) 如果实值函数 $f$ 可积，那么 $f^\pm$ 可积并且它们的积分都是有限的。

  实际上，我们有 $f^\pm \leqslant |f|$，所以只要证明下面的2)即可。

- 2\) 如果 $f$ 和 $g$ 是非负函数并且对任意的 $x\in X$，$f(x)\leqslant g(x)$，那么
  \[
  \displaystyle \int_X f d\mu \leqslant \int_X g d\mu.
  \]

  我们需要用积分最原始的定义，首先考虑如下两个集合
  \[
  \begin{aligned}\mathcal{E}_f&=\big\{\varphi\in \mathcal{E}(X)\big| 0\leqslant \varphi \leqslant f\big\},\\
  \mathcal{E}_g&=\big\{\varphi\in \mathcal{E}(X)\big| 0\leqslant \varphi \leqslant g\big\}.
  \end{aligned}
  \]
  由于 $f\leqslant g$，所以，$\mathcal{E}_f\subset \mathcal{E}_g$，从而，
  \[
  \sup_{\varphi \in \mathcal{E}_f}\int_X \varphi d\mu \leqslant \sup_{\varphi \in \mathcal{E}_g}\int_X \varphi d\mu.
  \]
  所以，$\displaystyle \int_X f d\mu \leqslant \int_X g d\mu$。

::: remark* [零测集]
积分理论中人们最常用的一句黑话就是“几乎处处”。
如果一个 $A\in \mathcal{A}$ 的测度为零，即 $\mu(A)=0$，我们称它为**零测集**。
我们现在考虑某个性质 **(P)**，如果存在零测集 $A$，使得
\[
\big\{x\in X \big|\text{{\bf(P)} 在 $x$ 处不成立} \big\}\subset A,
\]
我们就称 **(P)几乎处处**成立。
由于上述定义中我们考察了一个零测集的子集，
所以定义更适合的场合是要求 $(X,\mathcal{A},\mu)$ 是完备的测度空间，
即要求它的每个零测集的子集仍为零测集。
这一点要求相对于本课程来说也是零测集，忽略它对理解课程没有影响。
:::

我们有如下常用的事实：

::: exercise*
可数个零测集的并还是零测集。
:::

证明留给同学。我们现在证明如下命题：

::: proposition {@proposition-measure-zero}
假设可测函数 $f\colon(X,\mathcal{A},\mu)\rightarrow \mathbb{C}$ 几乎处处为零，
即 $\mu\left(\big\{x\in X\big|f(x)\neq 0\big\}\right) =0$，那么
\[
\displaystyle\int_X f d\mu =0.
\]
:::

在证明之前，我们首先指出集合 $\big\{x\in X\big|f(x)\neq 0\big\}$ 是可测的，因为 $f$ 是可测的。
下面的证明的步骤是标准的，即先研究正函数，再研究实值函数，再研究复值函数，一如积分的定义。

::: proof
首先假设 $f$ 为正函数，即对任意的 $x\in X$，$f(x)\geqslant 0$。我们用反证法。
如果不然，假设 $\displaystyle\int_X f d\mu > 0$，那么由于
\[
\int_X f d\mu \coloneqq \sup_{\varphi\in \mathcal{E}(X)\atop \\ 0\leqslant \varphi \leqslant f} \,\, \int_X \varphi d\mu,
\]
所以，存在简单函数 $0\leqslant  \varphi \leqslant f$，使得 $\displaystyle \int_X \varphi d\mu >0$。
这显然是不可能的，否则，根据简单函数积分的定义，我们有
\[
\int_{X} \varphi d\mu = \sum_{\lambda} \lambda \mu(\varphi^{-1}(\lambda))>0.
\]
所以，有某个 $\lambda>0$，使得 $ \mu(\varphi^{-1}(\lambda))>0$，
所以在测度非零集合 $\varphi^{-1}(\lambda)$ 上，
\[
f(x)\geqslant \varphi(x)=\lambda >0.
\]
这与 $f$ 几乎处处是零矛盾。

如果 $f$ 是实值函数，我们把 $f$ 写成 $f=f_+ -f_-$，其中 $f_\pm$ 分别为 $f$ 的正部和负部分。
很明显，$f$ 几乎处处为零意味着 $f_\pm$ 几乎处处为零，从而
\[
\int_X fd\mu=\int_X f_+d\mu-\int_X f_-d\mu=0-0=0.
\]

如果 $f$ 是复值函数，我们把 $f$ 写成 $f={\rm Re}(f) +i{\rm Im}(f)$，
其中 ${\rm Re}(f)$ 和 ${\rm Im}(f)$ 分别为 $f$ 的实部和虚部。
那么，$f$ 几乎处处为零意味着 ${\rm Re}(f)$ 和 ${\rm Im}(f)$ 都几乎处处为零。所以，
\[
\int_X f d\mu =\int_X {\rm Re}(f) d\mu+i\int_X {\rm Im}(f) d\mu=0+0=0.
\]
这个证明本质上是在运用积分的线性（目前还没有证明）。
:::

## Beppo Levi 定理

我们现在研究正函数的积分。
下面的Beppo Levi定理是积分理论中最重要的定理之一，在证明之前，我们先回忆测度的一个重要性质：
它与单调上升序列的极限可以交换，即若 $\{A_i\}_{i\geqslant 1}$ 是给 $\mathcal{A}$ 中的上升序列，
那么，
\[
\mu(\lim_{i\rightarrow \infty} A_i) = \lim_{i\rightarrow \infty} \mu(A_i).
\]
我们用积分的语言来讲这件事情，为此，我们要把上面的每一个对象都“函数化”（本来它们是集合）。
令 $f_i(x)=\mathbf{1}_{A_i}(x)$，
这个集合的序列是上升的指的是函数列 $\{f_i\}_{i\geqslant 1}$ 是上升的，即对任意的 $x\in X$，
数列 $\{f_i(x)\}_{i\geqslant 1}$ 是递增的。根据积分的性质，我们有
\[
\mu(A_i)=\int_{X}f_i d\mu.
\]
令 $\displaystyle A=\lim_{i\rightarrow \infty} A_i$ 并且令 $f(x)=\mathbf{1}_{A}(x)$，那么，
这个集合的极限可以做如下的翻译：对任意的点 $x\in X$，我们都有
\[
\lim_{i\rightarrow \infty}f_i(x)=f(x),
\]
即上升的正函数列 $\{f_i\}_{i\geqslant 1}$ 逐点地收敛到 $f$。
所以，上面的极限说的是如果上升的正函数列 $\{f_i\}_{i\geqslant 1}$ 逐点地收敛到 $f$，那么，
积分与极限可交换：
\[
\lim_{i\rightarrow \infty}\int_X f_i d\mu = \int_X f d\mu.
\]
这就是Beppo Levi定理的内容，
它把测度与极限可交换性“函数化”了（我们更喜欢函数是因为在函数空间上我们可以做更多的“线性”操作）。

::: theorem [Beppo Levi]
假设 $\{f_i\}_{i\geqslant 1}$ 是 $(X,\mathcal{A},\mu)$ 上定义的上升的正函数列，即对任意的 $x\in X$，
对任意的 $i \geqslant 1$，我们有
\[
f_i(x) \leqslant f_{i+1}(x), \ \  \forall i, \ \ \forall x.
\]
对任意的 $x\in X$，令 $f(x)=\displaystyle \lim_{i\rightarrow \infty} f_i(x)$（可以取 $+\infty$），
我们通常把它简写为 $f_i(x)\nearrow f(x)$。那么，$f$ 为可测函数并且
\[
\lim_{i\rightarrow \infty}\int_X f_i d\mu = \int_X f d\mu.
\]
特别地，对于任意的正函数列 $\{g_i\}_{i\geqslant 1}$，
函数级数 $\displaystyle \sum_{i=1}^\infty g_i$ 是 $X$ 上良好定义的可测正函数并且
\[
\int_X \sum_{i=1}^\infty g_i d\mu =  \sum_{i=1}^\infty \int_X g_i d\mu.
\]
:::

::: proof
由于对任意的 $i\geqslant 1$，我们有 $f(x)\geqslant f_i(x)$，所以（已经证明），
\[
\lim_{i\rightarrow \infty}\int_X f_i d\mu \leqslant \int_X f d\mu.
\]
我们只要证明下面的不等式即可：
\[
\displaystyle\lim_{i\rightarrow \infty}\int_X f_i d\mu \geqslant \int_X f d\mu.
\]
利用积分的定义，对任意的 $\varepsilon>0$，
选取简单函数 $\displaystyle \varphi(x) = \sum_{i=0}^m \lambda_i \mathbf{1}_{X_i} \leqslant f(x)$，
其中 $0=\lambda_0< \lambda_1 <\lambda_2<\cdots<\cdots <\lambda_m$ 并且当 $i\neq 0$ 时，
$\mu(X_i)<\infty$。我们还可以假设 $\displaystyle \bigcup_{i\leqslant m} X_i =X$ 并且
\[
|\int_X f d\mu-\int_X \varphi d\mu|<\frac{1}{2}\varepsilon.
\]
根据 $\varphi(x)\leqslant f(x)$，所以在每个 $X_i$ 上，$\displaystyle f(x)\geqslant \lambda_i$。
令 $A=\displaystyle \sum_{i=1}^m\mu(X_i)$。
如果 $i\neq 0$，
我们可以将 $\varphi$ 中的 $\lambda_i$ 替换成 $\displaystyle\lambda_i-\frac{\varepsilon}{2A}$。
此时，在每个 $X_i$ 上 $f(x)>\lambda_i$ 并且
\[
|\int_X f d\mu-\int_X \varphi d\mu|<\varepsilon.
\]
现在，对每个指标 $i\geqslant 0$，定义集合
\[
\displaystyle A_i =\big\{x\big|f_i(x)\leqslant \varphi(x)\big\}.
\]
由于 $A_i\subset \displaystyle \bigcup_{k=1}^m X_k$，所以 $\mu(A_i)$ 的测度有限。
另外，根据 $\{f_i\}_{i\geqslant 1}$ 是上升的，所以 $\{A_i\}_{i\geqslant 1}$ 是下降的子集序列。
由于在 $f(x)\neq 0$ 处，
$f(x)> \varphi(x)$ 并且 $f(x)=\displaystyle \lim_{i\rightarrow \infty} f_i(x)$，所以
\[
\lim_{i\rightarrow \infty} A_i =\emptyset \ \ \Leftrightarrow \ \ \lim_{i\rightarrow \infty} (A_i)^c=X.
\]
对固定的指标 $i$，我们定义简单函数
\[
\varphi_i(x)=\mathbf{1}_{(A_i)^c}(x)\varphi(x).
\]
很明显，我们有 $f_i\geqslant \varphi_i$。按照积分的定义，我们有
\[
\int_X \varphi_i d\mu \geqslant \int_X \sum_{k=1}^m \lambda_k \mathbf{1}_{X_k-A_i} d\mu= \sum_{k=1}^m \lambda_k \mu(X_k-A_i).
\]
当 $i\rightarrow\infty$，我们可以用集合取极限和测度可交换的性质，
所以右边的极限恰好就是 $\displaystyle\int_X \varphi d\mu$。从而，
\[
\lim_{i\rightarrow \infty} \int_X \varphi_i d\mu \geqslant \int_X \varphi d\mu.
\]
再根据
\[
\big|\int_X f d\mu-\int_X \varphi d\mu\big|<\varepsilon
\]
并且 $\varepsilon$ 是任选的，不等式得证。

函数级数的情形我们留作作业。
:::

::: corollary
对正函数可测函数 $f\colon(X,\mathcal{A},\mu)\rightarrow [0,+\infty]$，
存在上升的简单正函数序列 $\{f_i\}_{i\geqslant 1}$，使得对每个 $x\in X$，
我们都有 $\displaystyle f(x) = \lim_{i\rightarrow \infty} f_i(x)$。特别地（根据 Beppo Levi），
\[
\lim_{i\rightarrow \infty}\int_X f_i d\mu = \int_X f d\mu.
\]
:::

::: proof
我们定义
\[
\varphi_i(x)=
\begin{cases}
i,\ \ &f(x)\geqslant i;\\
\frac{k}{2^i},\ \  &f(x)<i~\text{且}~\frac{k}{2^i}\leqslant f(x)<\frac{k+1}{2^i}.
\end{cases}
\]
每个 $\varphi_i$ 只取有限多个值，所以是正的简单函数，
并且这是上升的函数序列。
对任给定的 $x\in X$，如果 $f(x)=+\infty$，那么 $\varphi_i(x)=i\rightarrow +\infty$；
否则选取 $i_0>f(x)$，根据 $\varphi_i$ 的定义，对任意的 $i\geqslant i_0$，我们有
\[
0\leqslant f(x)-\varphi_i(x) \leqslant 2^{-i}.
\]
这说明 $\{\varphi_i\}_{i\geqslant 1}$ 逐点收敛到 $f$。
:::

::: remark*
用一列上升的简单函数来逐点地逼近正函数是积分理论中非常有用的技巧，因为在逐点逼近的同时，
积分也收敛（Beppo Levi）。
我们今后可以看到，这个技巧可以把一个关于函数的问题转化为关于简单函数的问题，从而极大地简化了证明。
:::

::: remark* [对比Riemann积分]
考虑 $\mathbb{R}^n$ 中的开集 $\Omega$，$f\colon\Omega\rightarrow \mathbb{R}$ 是连续的正函数。
可以证明，$\Omega$ 总是可以分解为一些（可数个）闭方块的并，即
\[
\Omega =\displaystyle \bigcup_{k=1}^\infty C_k.
\]
在研究Lebesgue测度的平移不变性时，我们证明了方块的边界的测度是零。
上面这些方块有可能会相交，但它们只能在边界处相交，由于边界是零测集，这不会影响 $f$ 的积分的值。
此时，我们可以考虑Darboux下和的类比，即如下简单函数的积分：
\[
\varphi(x)= \sum_{k=1}^\infty \left(\inf_{x\in C_k}f(x)\right) \cdot \mathbf{1}_{C_k}(x).
\]
当我们让方块越来越小的时候（类比为分划的加细），
我们自然期盼 $\varphi(x)$ 给出上升到 $f$ 的简单函数序列。
根据Beppo Levi定理，我们就用 $\varphi(x)$ 的积分的极限来定义 $f$ 的积分。
除去一些枝节的论证，这基本上就是Riemann积分的定义。

另外，Riemann意义下的积分需要对 $\Omega$ 的分划作比较严格的要求，而我们有了更大的自由，
对于简单函数所对应的集合不作太多的要求。
:::
