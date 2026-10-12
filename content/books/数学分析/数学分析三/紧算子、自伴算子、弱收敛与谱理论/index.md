---
title: 紧算子、自伴算子、弱收敛与谱理论
---

## 紧算子

为了研究有界区域上Laplace算子的特征值问题，我们还需要引入紧算子的概念。
直观上，我们可以将紧算子理解成最接近于有限维线性映射的线性算子。
假设$(X,\|\cdot \|_X)$和$(Y,\|\cdot\|_Y)$是两个完备的赋范线性空间，给定连续线性映射
\[
T:X\rightarrow Y.
\]

::: definition
如果对任何的有界集$A\subset X$（即存在$M>0$，使得对任意的$a\in A$，总有$\|a\|_X\leqslant M$），
总能找到$T(A)\subset Y$中的点列$\{T(x_k)\}_{k\geqslant 1}$，
使得$\{T(x_k)\}_{k\geqslant 1}$在$Y$中收敛，那么，我们就称$T$是**紧算子**。

要强调的是，当谈论一个算子是紧算子的时候，我们总是事先假定它是有界线性算子。
:::

我们罗列几个关于紧算子的基本性质：

::: proposition
- 1\)（紧算子是双边理想）假设$(X,\|\cdot \|_X)$，
  $(Y,\|\cdot\|_Y)$和$(Z,\|\cdot\|_Z)$是完备的赋范线性空间，假设
  \[
  T:X\rightarrow Y, \ \ S:Y\rightarrow Z
  \]
  是连续线性映射，如果$T$或者$S$其中之一为紧算子，
  那么它们的复合$S\circ T:X\rightarrow Z$也是紧算子。

- 2\)（紧算子的集合是闭的）给定$(X,\|\cdot \|_X)$和$(Y,\|\cdot\|_Y)$
  是完备的赋范线性空间和连续线性映射
  \[
  T:X\rightarrow Y.
  \]
  假设我们有一列紧算子
  \[
  T_k:X\rightarrow Y, \ \ k=1,2,\cdots,
  \]
  并且在算子的意义下$T_k\rightarrow T$，这里的收敛性指的是
  \[
  \lim_{k\rightarrow \infty}\|T_k(x)-T(x)\|_{Y}=0
  \]
  对所有的$X$中的单位球中的点$x$（即$\|x\|_X\leqslant 1$）一致地成立，也就是说，
  对任意的$\varepsilon>0$，存在$N>0$，当$k\geqslant N$时，对任意的$X$中的单位球中的点$x$，我们有
  \[
  \|T_k(x)-T(x)\|_{Y}<\varepsilon,
  \]
  那么，$T$也是紧算子。

- 3\)（有限秩算子是紧的）给定$(X,\|\cdot \|_X)$和$(Y,\|\cdot\|_Y)$是完备的赋范线性空间和连续线性映射
  \[
  T:X\rightarrow Y.
  \]
  如果$T$是**有限秩**的算子，也就是说$T$的像$T(X)$是$Y$中的有限维的线性子空间，那么，$T$是紧算子。

:::

::: proof
证明本身对我们后面的应用并没有影响，为了完整起见，我们还是在这里给出证明。

先证明1)。
如果$T$是紧算子，对任意的$A\subset X$是有界集合，那么，存在$\{x_k\}_{k\geqslant 1}\subset A$，
使得$\{T(x_k)\}_{k\geqslant 1}$在$Y$中收敛。
由于连续映射把收敛的序列映射为收敛的序列，所以，
$\{S\left(T(x_k)\right)\}_{k\geqslant 1}$在$Z$中收敛。这表明$S\circ T$是紧算子。

如果$S$是紧算子，对任意的$A\subset X$是有界集合，那么，利用$T$是有界线性算子，
$T(A)$是$Y$中的有界集合，所以，利用$S$是紧算子，存在序列$\{T(x_k)\}_{k\geqslant 1}\subset T(A)$，
使得$\{S(T(x_k))\}_{k\geqslant 1}\subset Z$是收敛的序列。
这表明，我们可以选取$\{x_k\}_{k\geqslant 1}\subset A$，
使得$\{S\left(T(x_k)\right)\}_{k\geqslant 1}$在$Z$中收敛，从而$S\circ T$是紧算子。

现在证明2)。假设$A\subset X$是有界集合并且对任意的$a\in A$，$\|a\|_X\leqslant M$。令
\[
\frac{1}{M}\cdot A=\left\{\frac{1}{M}a\big|a\in A\right\},
\]
根据$T$的线性，我们知道存在$A$中点列使得其像收敛等价于存在$\dfrac{1}{M} A$中点列使得其像收敛。
所以，通过把$A$替换成$\dfrac{1}{M} A$，我们总是可以假设$A$落在$X$中的单位球里。
我们利用对角线法则来选取$A$中的收敛子列：

对于$T_1$而言，利用紧性，存在$\{x_{1,k}\}_{k\geqslant 1}\subset A$，
使得$T_{1}(x_{1,k})$在$Y$中收敛；

对于$T_2$而言，由于$\{x_{1,k}\}_{k\geqslant 1}$是有界的，利用紧性，
存在$\{x_{2,k}\}_{k\geqslant 1}\subset \{x_{1,k}\}_{k\geqslant 1}$是子序列，
使得$T_{2}(x_{2,k})$在$Y$中收敛，我们还要求$x_{2,1}=x_{1,2}$；

$\cdots \ \cdots$；

对于$T_{m+1}$而言，由于$\{x_{m,k}\}_{k\geqslant 1}$是有界的，利用紧性，
存在$\{x_{m+1,k}\}_{k\geqslant 1}\subset \{x_{m,k}\}_{k\geqslant 1}$是子序列，
使得$T_{m+1}(x_{m,k})$在$Y$中收敛，我们还要求$x_{m+1,1}=x_{m,2}$；

$\cdots \ \cdots$；

此时，我们考虑序列$\{x_{m,1}\}_{m\geqslant 1}$。
很明显，对任意的$k\geqslant 1$，当$m\geqslant \ell$时，
我们有$\{x_{m,1}\}_{m\geqslant k}\subset \{x_{\ell,k}\}_{k\geqslant 1}$，从而，对任意的$\ell$，
$\{T_{\ell}(x_{m,1})\}_{m\geqslant 1}$在$Y$中收敛。
我们下面说明$\{T(x_{m,1})\}_{m\geqslant 1}$是$Y$中的Cauchy列即可（注意到$\{x_{m,1}\}_{m\geqslant 1}$
落在$X$的单位球里）：对任意的$\varepsilon$，存在$\ell_1$和$\ell_2$，
使得对任意的$X$中的单位球中的点$x$，我们有
\[
\|T_{\ell_1}(x)-T(x)\|_{Y}<\frac{\varepsilon}{4}, \ \ \|T_{\ell_2}(x)-T(x)\|_{Y}<\frac{\varepsilon}{4}.
\]
对于$\ell_i$而言，其中$i=1$和$2$，由于$\{T_{\ell_i}(x_{m,1})\}_{m\geqslant 1}$在$Y$中收敛，
所以存在$N>0$，使得当$m_1,m_2\geqslant N$时，我们有
\[
\|T_{\ell_i}(x_{m_1,1})-T_{\ell_i}(x_{m_2,1})\|_{Y}<\frac{\varepsilon}{4}.
\]
所以，对任意的$\varepsilon>0$，存在$N>0$，使得当$m_1,m_2\geqslant N$时，我们有
\[
\begin{aligned}
\|T(x_{m_1,1})-T(x_{m_2,1})\|_{Y}&\leqslant \|T(x_{m_1,1})-T_{\ell_1}(x_{m_1,1})\|_{Y}+\|T_{\ell_1}(x_{m_1,1})-T_{\ell_1}(x_{m_2,1})\|_{Y}\\
&\ \ \ +\|T_{\ell_1}(x_{m_2,1})-T_{\ell_2}(x_{m_2,1})\|_{Y}+\|T_{\ell_2}(x_{m_2,1})-T(x_{m_2,1})\|_{Y}\\
&<\varepsilon.
\end{aligned}
\]
所以2)成立。

现在证明3)。
我们在$T(X)$配备上$Y$所诱导的范数，此时，$\left(T(X),\|\cdot\|_Y\right)$是有限维的赋范线性空间，
由于有限维赋范线性空间上的范数都是等价的，所以，如果我们用常用的Euclid范数，那么，
由于$T(A)$是有界集合，所以有收敛子列。
:::

::: example*
我们研究一个非紧算子的例子。
假设$\big(H,(\cdot,\cdot)\big)$是可分的完备内积空间，从而，
我们可以找到一组Hilbert基$\{e_k\}_{k\geqslant 1}$。
特别地，由于$e_k$均为单位长的，所以$A=\{e_k\}_{k\geqslant 1}$是有界集。我们现在考虑恒同映射：
\[
{\rm Id}:H\rightarrow H,\ \  x\mapsto x,
\]
由于当$k\neq l$时，$\|e_k-e_l\|=\sqrt{2}$，我们知道${\rm Id}$是紧算子当且仅当$H$是有限维的空间：
如果$\{e_k\}_{k\geqslant 1}$是无限序列，那么，$\|e_{k+1}-e_k\|=\sqrt{2}$表明这不是Cauchy列。
:::

## 弱收敛

上面这个例子中所选取的集合$\{e_k\}_{k\geqslant 1}$通常不是紧的，为了给出这个集合的一个更好的刻画，
我们引入一个与分布类似的概念：

::: definition
假设$\big(H,(\cdot,\cdot)\big)$是可分的完备内积空间，
给定$\{x_k\}_{k\geqslant 1}\subset H$是一个点列。如果对任意的$y\in H$，我们都有
\[
(x_k,y)\rightarrow (x,y),
\]
那么，我们就称$\{x_k\}_{k\geqslant 1}$**弱收敛**到$x$。我们把弱收敛记做是
\[
x_k\rightharpoonup x, \ \ \text{或} \ \ x_k\stackrel{w}{\longrightarrow} x.
\]
:::

::: example*
考虑可分完备内积空间$H$的一组Hilbert基$\{e_k\}_{k\geqslant 1}$，我们来说明$e_k\rightharpoonup 0$：

实际上，对任意的$x\in H$，我们可以把$x$唯一地写成
\[
x=\sum_{k=1}^\infty a_k \cdot e_k, \ \ a_k=(x,e_k), k=1,2,\cdots.
\]
根据Parseval等式，我们有
\[
\|x\|^2=\sum_{k=1}^\infty |a_k|^2<\infty.
\]
所以，$\displaystyle \lim_{k\rightarrow \infty}|a_k|=0$。所以，对任意的$x\in H$，我们有
\[
\lim_{k\rightarrow \infty}(x,e_k)=0.
\]
:::

::: remark*
弱极限有如下三个明显的性质：

- 1\)（弱极限的唯一性）$\big(H,(\cdot,\cdot)\big)$是可分的完备内积空间，
  给定$\{x_k\}_{k\geqslant 1}\subset H$是一个点列。假设当$k\rightarrow \infty$时，我们有
  \[
  x_k\rightharpoonup x, \ \ x_k\rightharpoonup x',
  \]
  其中 $x,x'\in H$，那么$x=x'$。

  这是因为按照定义，我们有
  \[
  (x_k,x-x')\rightarrow (x,x-x'), \ \ (x_k,x-x')\rightarrow (x',x-x').
  \]
  取差，我们就得到
  \[
  (x-x',x-x')=0.
  \]
  所以，$x=x'$。

- 2\)（收敛意味着弱收敛）$\big(H,(\cdot,\cdot)\big)$是可分的完备内积空间，
  给定$\{x_k\}_{k\geqslant 1}\subset H$，那么，
  \[
  x_k\rightarrow x \ \ \Rightarrow \ \ x_k\rightharpoonup x.
  \]

  实际上，对任意的$y$，我们有
  \[
  \begin{aligned}
  |(x_k,y)-(x,y)|=|(x_k-x,y)|\leqslant \|x_k-x\|\|y\|\rightarrow 0.
  \end{aligned}
  \]
  这表明$\displaystyle\lim_{k\rightarrow \infty}(x_k,y)=(x,y)$。

:::

::: proposition [弱收敛在连续映射下被保持]
给定可分的完备内积空间$\big(H,(\cdot,\cdot)\big)$和$\big(H',(\cdot,\cdot)'\big)$，
$A:H\rightarrow H'$是连续线性映射。
假设$\{x_k\}_{k\geqslant 1}\subset H$弱收敛到$x$，即$ x_k\rightharpoonup x$，那么，
$\{A(x_k)\}_{k\geqslant 1}\subset H'$弱收敛到$A(x)$，即$A(x_k) \rightharpoonup A(x)$。
:::

为了证明这个命题，我们需要引入对偶算子的概念：对任意给定的$x'\in H'$，对任意的$x\in H$，
根据Cauchy–Schwarz不等式，我们有
\[
|(Ax,x')|\leqslant \|Ax\|_{H'}\|x'\|_{H'}\leqslant C\|x\|_{H}\|x'\|_{H'}.
\]
其中，最后一步我们用到了$A$是有界的。令$C'=C\|x'\|_{H'}$，那么，
\[
|(Ax,x')|\leqslant C'\|x\|_{H}.
\]
所以，线性映射
\[
H\rightarrow \mathbb{C}, \ \ x\mapsto (Ax,x'),
\]
是$H$上的连续线性泛函，根据Riesz表示定理，我们存在$H$中的元素$A^*(x')$（它由$A$和$x'$所决定），使得
\[
(Ax,x')=\left(x,A^*(x')\right).
\]
这样，我们就构造了映射
\[
A^*:H'\rightarrow H.
\]
利用等式$(Ax,x')=(x,A^*x')$，很容易看出$A^*$为线性映射。为了证明$A^*$是有界的，根据
\[
\left|\left(x,A^*(x')\right)\right|=|(Ax,x')|\leqslant \|Ax\|_{H'}\|x'\|_{H'}\leqslant C\|x\|_{H}\|x'\|_{H'},
\]
其中$x$和$x'$是任意选取的，我们可以选取$x=A^*(x')$，从而，
\[
\left|\left(A^*(x'),A^*(x')\right)\right|\leqslant C\|A^*(x')\|_{H}\|x'\|_{H'},
\]
所以，
\[
\|A^*(x')\|_{H}\leqslant C\|x'\|_{H'}.
\]
我们注意到常数$C$这里的选取是和$A$所对应的界是一致的。

现在回到命题的证明：

::: proof
为了证明$Ax_k \rightharpoonup Ax$，我们证明对任意的$x'\in H'$，$(Ax_k,x') \rightarrow (Ax,x')$，
这等价于去证明$(x_k,A^*x') \rightarrow (x,A^*x')$。
根据$\{x_k\}_{k\geqslant 1}$的弱收敛性，这是显然的。
:::

我们之所以引入弱收敛的概念，是因为在可分的完备内积空间中，
有界序列在弱拓扑的意义下仍然是列紧的（和有限维的情况类似）：

::: theorem
假定$\{x_k\}_{k\geqslant 1}$是可分的完备内积空间$\big(H,(\cdot,\cdot)\big)$中的一个有界序列。
那么，存在一个子序列$\{x_{k_i}\}_{i\geqslant 1}$ 和$x_\infty \in H$，使得
\[
x_{k_i}\rightharpoonup x_\infty.
\]
:::

::: proof
选定$H$的一组Hilbert基$\{e_j\}_{j\geqslant 1}$，对任意的$k$，我们可以将$x_k$写成
\[
x_k =x_k^1 \cdot e_1 + x_k^2  \cdot  e_2 + x_k^3 \cdot e_3+\cdots,
\]
其中对任意的$k$和$j$，$x_k^j\in \mathbb{C}$。
根据$\{x_k\}_{k\geqslant 1}$有界性和对角线法则，我们可以选取$k_1,k_2,\cdots,k_j,\cdots$，对任意$j$，
极限$\displaystyle\lim_{i\rightarrow \infty}x_{k_i}^j$都存在，我们记
\[
x_\infty^j=\lim_{i\rightarrow \infty}x_{k_i}^j.
\]
换句话说，对任意的$j\geqslant 1$，极限
\[
\lim_{i\rightarrow \infty}(x_{k_i},e_j)
\]
存在。所以这个子序列的每个点的每个分量（在给定的Hilbert基下）都是收敛的。

我们现在说明，$x_\infty =\displaystyle \sum_{j=1}^\infty x_\infty^j e_j$是在$H$中良好定义的元素。
为此，只要说明$\displaystyle\sum_{j=1}^\infty|x_{\infty}^j|^2$有界即可：假设对任意的$k$，
$\|x_k\|\leqslant A$，那么，
由于$\displaystyle\lim_{i\rightarrow \infty}|x_{k_i}^j|^2=|x_\infty^j|^2$，根据Fatou引理，我们有
\[
\sum_{j=1}^\infty|x_{\infty}^j|^2=\sum_{j=1}^\infty\lim_{i\rightarrow \infty} |x_{k_i}^j|^2\leqslant \lim_{i\rightarrow \infty}\sum_{j=1}^\infty |x_{k_i}^j|^2 \leqslant A^2.
\]
特别地，我们还证明了$\|x_\infty\|\leqslant A$。

最终，我们来证明弱收敛：当$i\rightarrow \infty$时，$x_{k_i}\rightharpoonup x_\infty$。
对任何$y\in H$，我们把$y$按照分量写开：
\[
y=\sum_{1\leqslant j \leqslant N}a_j e_j + \underbrace{\sum_{j \geqslant N+1}a_j e_j}_{=y'}.
\]
其中，我们通过选取较大$N$，使得
\[
\|y'\|<\dfrac{1}{4A}\varepsilon.
\]
由于$N$固定，所以通过选取足够大的$i$，我们可以使得对每个$j\leqslant N$，我们都有
\[
|(x_{k_i}-x_\infty,e_j)|\leqslant \frac{\varepsilon}{2N}=\varepsilon.
\]
这表明
\[
\begin{aligned}
|(x_{k_i}-x_\infty,y)|&\leqslant |(x_{k_i}-x_\infty,y')|+\sum_{j\leqslant N}|(x_{k_i}-x_\infty,e_j)|\\
&\leqslant 2A\times \frac{\varepsilon}{4A}+N \times \frac{\varepsilon}{2N}
\end{aligned}
\]
从而，当$i\rightarrow \infty$时，$(x_{k_i}-x_\infty,y)\rightarrow 0$，命题得证。
:::

上述运用Fatou引理的一段证明中表明弱极限下范数会变小：

::: corollary
假设$x_{k}\rightharpoonup x$，那么
\[
\|x\|\leqslant \liminf_{k\rightarrow \infty} \|x_k\|.
\]
:::

我们知道，如果一个点列$\{x_k\}_{k\geqslant 1}$是收敛到$x$的，那么，相应的范数也收敛，
即$\|x\|=\liminf_{k\rightarrow \infty} \|x_k\|$。
我们之前见过，给定一组Hilbert基$\{e_k\}_{k\geqslant 1}$，它们不收敛但是弱收敛到$0$，而
\[
\|0\|<\liminf_{k\rightarrow \infty} \|e_k\|=1.
\]
下面的命题表明，范数是否连续是从弱极限升级成为极限的唯一障碍：

::: proposition
假定$\{x_k\}_{k\geqslant 1}$是可分的完备内积空间$\big(H,(\cdot,\cdot)\big)$中的一个有界序列并且
$x_{k}\rightharpoonup x_\infty$。如果
\[
\lim_{k\rightarrow \infty}\|x_{k}\| = \|x_\infty\|,
\]
那么，
\[
\lim_{k\rightarrow \infty} x_{k}\stackrel{H}{=}x_\infty.
\]
:::

::: proof
我们只要证明$\|x_k-x_\infty\|^2\rightarrow 0$即可。所以，我们计算
\[
\begin{aligned}
\|x_k-x_\infty\|^2&=\underbrace{\|x_k\|^2+\|x_\infty\|^2}_{\rightarrow 2\|x_\infty\|^2}-\underbrace{2\Re\big((x_k,x_\infty)\big)}_{\rightarrow 2\|x_\infty\|^2}.
\end{aligned}
\]
后面一项的极限是$2\|x_\infty\|^2$，我们用到了$x_{k}\rightharpoonup x_\infty$。
所以，上面式子的极限为$0$，命题得证。
:::

我们回到紧算子的理论。紧算子的一个重要的作用是它也可以将弱收敛的序列升级为收敛的序列：

::: theorem
给定可分的完备内积空间$\big(H,(\cdot,\cdot)\big)_{H}$和$\big(H',(\cdot,\cdot)'\big)_{H'}$，
$A:H\rightarrow H'$是连续线性映射。如下两个叙述是等价的：

- 1\) $A$是紧算子；

- 2\) 对$H$中任意（有界的）弱收敛序列$x_{k}\rightharpoonup x_\infty$，那么在$H'$中，我们有
  \[
  A(x_{k})\stackrel{H'}{\longrightarrow} A(x_\infty).
  \]

:::

::: remark*
上述2)有界性假设可以去掉，这需要用到泛函分析中的共鸣定理。
在其它很多场合下也不需要空间是可分的，但是我们满足于这样的叙述，因为它们后面的应用是足够的。
:::

::: proof
2) $\Rightarrow$ 1)是显然的：对任意的有界集$A\subset H$，
   我们总可以选出一个弱收敛的序列$\{x_k\}_{k\geqslant 1}\subset A$，
   使得$x_{k}\rightharpoonup x_\infty$，所以，2)表明$A(x_{k})\rightarrow A(x_\infty)$，
   这说明$A$是紧算子。

现在证明1) $\Rightarrow$ 2)。由于$A$是连续的，所以在$H'$中，我们一定有
\[
A(x_k)\rightharpoonup  A(x_\infty).
\]
因为$A$是紧算子并且$\{x_{k}\}_{k\geqslant 1}$是有界集，所以，
$\{A(x_k)\}_{k\geqslant 1}$中的任意子序列都包含收敛的子序列。
根据弱极限的唯一性，这个收敛子序列（在$\|\cdot\|_{H'}$下）必须收敛到$A(x_\infty)$。
所以，$\{A(x_k)\}_{k\geqslant 1}$中的任意子序列所包含的收敛子序列的极限都是$A(x_\infty)$。
我们在一年级第一学期学习极限的时候就证明了这个序列必为Cauchy列，从而整个序列收敛。
:::

## 紧自伴算子的谱理论

我们现在研究所谓的自伴算子，它们是线性代数中的Hermite矩阵或者是实对称矩阵的推广。

::: definition
给定可分的完备内积空间$\big(H,(\cdot,\cdot)\big)$，$A:H\rightarrow H$一个连续的线性自同态，
如果$A=A^*$，我们就称$A$是**自伴的**。换而言之，对任意的$x,y\in H$，我们均有
\[
(Ax,y)=(x,Ay).
\]
:::

给定一个$H$到自身的连续线性映射，我们用$\sigma(A)$表示它的特征值的集合，即
\[
\sigma(A)=\big\{\lambda \in \mathbb{C}\big|~\text{存在}~x\neq 0,~\text{使得}~A(x)=\lambda x\big\}.
\]
对于$\lambda \in \sigma(A)$，我们定义其特征子空间为
\[
H_\lambda =\big\{x\in H\big|A(x)=\lambda x\big\}.
\]

我们以下收集一些关于特征值和特征子空间的性质，其中，我们假设$A$是从$H$到自身的连续线性映射：

- 1\) 对任意的$\lambda \in \sigma(A)$，$H_\lambda\subset H$是闭子空间。

  这个是明显的：如果$A(x_k)=\lambda x_k$并且$x_k\rightarrow x$，由于方程的两边对于变量都是连续的，
  所以令$k\rightarrow \infty$，我们就得到$A(x)=\lambda x$。

- 2\) $A$是自伴算子，那么，$\sigma(A)\subset \mathbb{R}$（只有实特征值）。

  这个证明和有限维的情况是一致的：假设$\lambda \in \sigma(A)$，$x\in H_\lambda$并且$x\neq 0$。那么，
  \[
  (\lambda x, x)=(Ax,x)=(x,Ax)=(x,\lambda x).
  \]
  所以，
  \[
  \lambda\|x\|^2=\overline{\lambda}\|x\|^2.
  \]
  从而，$\lambda \in \mathbb{R}$。

- 3\) 假设$A$是自伴算子，那么$A$的不同特征值的特征向量是相互垂直的，
  即若$\lambda,\lambda'\in \sigma(A)$并且$\lambda \neq \lambda'$，那么，
  $H_\lambda \perp H_{\lambda'}$。

  这个证明（也）和有限维的情况是一致的：任意选取$x\in H_\lambda$，$x'\in H_{\lambda'}$，那么，
  \[
  (\lambda x, x')=(Ax,x')=(x,Ax')=(x,\lambda' x').
  \]
  所以，
  \[
  \lambda(x,x')=\lambda'(x,x').
  \]
  这里我们用到了这些特征值是实数。由于$\lambda \neq \lambda'$，所以，$(x,x')=0$，即$x\perp x'$。

- 4\) 假设$A$是紧算子，如果$\lambda\in \sigma(A)-\{0\}$是非零的特征值，
  那么$H_\lambda$是有限维的线性空间。

  根据特征值的定义，算子$A$在$H_\lambda$上的限制映射就是乘以一个非零的常数$c\in \mathbb{C}$。
  由于$H_\lambda$是闭子空间，所以，利用诱导的内积，它也是一个可分的完备内积空间，
  我们就可以在$H_\lambda$上选取一个Hilbert基$\{f_k\}_{k\geqslant 1}$。
  如果${\rm dim}_{\mathbb{C}}(H_\lambda)=\infty$，那么，$f_k\rightharpoonup 0$，从而，
  根据$A$是紧算子，$\{A(f_k)=cf_k\}_{k\geqslant 1}$收敛到$0$，矛盾。

- 5\) 给定连续线性映射$A$，我们在$H-\{0\}$上定义如下的一个非线性的泛函：
  \[
  R:H-\{0\}\rightarrow \mathbb{C},\ \ u\mapsto R(u)=\frac{\big(A(u),u\big)}{\|u\|^2}.
  \]
  实际上，通过对$u$乘以一个常数，我们知道$R$本质上是定义在$H$中的单位球面上的映射。
  如果$A$是自伴的算子，此时，我们还知道$R$在$\mathbb{R}$中取值。

  根据$A$的连续性，我们知道存在常数$C>0$，使得$|R(u)|\leqslant C$。
  我们现在进一步假设$A$是自伴的算子，我们定义
  \[
  \lambda_1 := \sup_{u\in H-\{0\} } |R(u)|.
  \]

::: lemma
如果$A$是紧自伴算子，那么，上述极值$\lambda_1$可以被实现，即存在$u\in H$，$\|u\|=1$，
使得$R(u)=\lambda_1$。
:::

::: proof
按上确界的定义，存在$\{u_k\}_{k\geqslant 1}\subset H$，使得$\|u_k\|=1$并且
\[
\lim_{k\rightarrow \infty}\left|(A(u_k),u_k)\right|\rightarrow \lambda_1.
\]
我们还可以进一步假设存在$u\in H$，使得$u_k\rightharpoonup u$。
我们现在比较$R(u)$与$R(u_k)$之间的差距。实际上，
\[
(A(u_k),u_k)-(A(u),u)=\big(A(u_k-u),u_k\big)-(A(u),u-u_k).
\]
由于$A$为紧算子，所以，$A(u_k-u)\rightarrow 0$，从而当$k\rightarrow \infty$时，
上式第一项的极限为零；第二项极限为零，这是因为$u_k\rightharpoonup u$。
所以，$(A(u_k),u_k) \rightarrow (A(u),u)$，从而，$(Au,u)=\lambda_1$（此时，我们证明了更强的结论：
$(A(u_k),u_k)\rightarrow \lambda_1$）。
特别地，因为$\lambda_1\neq 0$（否则$A=0$就没什么可说的了），所以$u\neq 0$。

另外，我们有
\[
\|u\|\leqslant \lim_{k\rightarrow \infty}\|u_k\|=1,
\]
所以，
\[
R(u)\geqslant \lambda_1.
\]
根据$\lambda_1$的定义，我们必然有
\[
R(u)= \lambda_1.
\]
:::

::: remark*
我们证明了更强的结论：$R(u)=\lambda_1$。
:::

- 6\) 假设$A$是紧自伴算子，$u_1 \in H-\{0\}$使得$R(u_1)=\lambda_1$，那么，$Au_1=\lambda_1 u_1$，
  即$\lambda_1$是$A$的最大特征值。

  我们用变分的观点来研究这个问题（这个方法和之前研究Dirichlet问题时的想法很类似）：
  我们不妨假设$\|u\|=1$（否则除以一个系数）。对任意的$v\in H$。
  我们考虑复数$\varepsilon$，其中$\varepsilon \rightarrow 0$。此时，
  \[
  \begin{aligned}
  R(u+\varepsilon v)&= \frac{\big(A(u+\varepsilon v), u+\varepsilon v\big)}{\big(u+\varepsilon v, u+\varepsilon v\big)}\\
  &\stackrel{A=A^*}{=}\frac{(Au,u)+2(Au,v)\varepsilon+O(\varepsilon^2)}{(u,u)+2(u,v)\varepsilon+O(\varepsilon^2)}\\
  &{=}\frac{\lambda_1+2(Au,v)\varepsilon+O(\varepsilon^2)}{1+2(u,v)\varepsilon+O(\varepsilon^2)}\\
  &{=}\big(\lambda_1+2(Au,v)\varepsilon+O(\varepsilon^2)\big)\big(1-2(u,v)\varepsilon+O(\varepsilon^2)\big)\\
  &=\lambda_1+2(Au-\lambda_1u,v)\varepsilon + O(\varepsilon^2).
  \end{aligned}
  \]
  由于$R(u_1)$是最大值，如果$a=(Au-\lambda_1u,v)\neq 0$，
  我们总可以选取很小的$\varepsilon=\delta\cdot \overline{a}$，其中$\delta>0$足够小，
  使得$|R(u+\varepsilon v)|>\lambda_1$，这与$\lambda_1$的定义矛盾。所以，对任意的$v$，我们都有
  \[
  (A(u)-\lambda_1u,v)=0.
  \]
  令$v=A(u)-\lambda_1u$，我们就证明了$A(u)-\lambda_1u=0$。

- 7\) 假设$A$是紧自伴算子，那么$0$是$\sigma(A)$唯一可能的聚点，
  也就是说如果存在两两不同的$\{\lambda_k\}_{k\geqslant 1} \subset \sigma(A)$，
  使得当$k\rightarrow \infty$时，$\lambda_k\rightarrow \lambda$，那么，$\lambda=0$。

  我们用反证法：假设$\lambda \neq 0$。
  对每个$k$，我们选取$u_k\in H$，使得$Au_k=\lambda_k u_k$并且$\|u_k\|=1$。
  我们可以进一步要求$u_k\rightharpoonup u$。
  由于$A$是紧算子，所以$\{A(u_k)\}_{k\geqslant 1}$是收敛的，从而，我们有如下的极限：
  \[
  \lim_{k\rightarrow \infty}\lambda_k u_k =\lambda u.
  \]
  由于我们假设了$\lambda \neq 0$，所以，
  \[
  \lim_{k\rightarrow \infty}u_k=\lim_{k\rightarrow \infty}\frac{\lambda_k}{\lambda}u_k=u.
  \]
  特别地，我们得到了$Au=\lambda u$，从而，$\lambda$为非零特征值。

  利用$\lambda$是聚点这个性质，对任意的$\varepsilon>0$，$H$的子空间
  \[
  X=\widehat{\bigoplus}_{|\lambda_k-\lambda|<\varepsilon}H_{\lambda_k}
  \]
  是无限维的闭子空间。其中上述直和$\widehat{\oplus}$是在$H$中的闭包的意义下取的，即
  \[
  \widehat{\bigoplus}_{|\lambda_k-\lambda|<\varepsilon}H_{\lambda_k}=\overline{{\bigoplus}_{|\lambda_k-\lambda|<\varepsilon}H_{\lambda_k}}.
  \]
  并且各个分量两两正交。
  我们证明，$A$是紧算子意味着当$\varepsilon$足够小时，
  我们就必然有${\rm dim}_{_\mathbb{C}}X<\infty$：实际上，由于$A$把$H_{\lambda_k}$映射到自身，所以，
  $A$把$X$也映射到自身。
  我们在每个$H_{\lambda_k}$中（一共有无穷多个）选取一个$u_k$，使得$\|u_k\|=1$，当$k\neq \ell$时，
  我们知道
  \[
  \|\lambda_k u_k-\lambda_\ell u_\ell\|=\sqrt{\lambda_k^2+\lambda_\ell^2} \approx \sqrt{2}|\lambda|.
  \]
  这是因为不同特征值所对应的特征向量相互垂直。
  此时，$\{A u_k=\lambda_k u_k\}_{k\geqslant 1}$中不可能有收敛的子列，与$A$的紧性矛盾。

::: theorem [Hilbert–Schmidt 谱定理]
给定可分的完备内积空间$\big(H,(\cdot,\cdot)\big)$，$A:H\rightarrow H$自伴的紧算子（有界）。
那么，$H$有如下的（拓扑）直和分解：
\[
H=\widehat{\bigoplus}_{\lambda \in \sigma(A)}H_\lambda.
\]
特别地，如果$\lambda \neq 0$，那么，${\rm dim}_{\mathbb{C}}H_\lambda<\infty$。
进一步，如果$|\sigma(A)|=\infty$（有无限个特征值），那么，
我们可以将所有的特征值$\lambda_k\in \sigma(A)$排序（只有可数个）使得
\[
\displaystyle \lim_{k\rightarrow \infty}\lambda_k\rightarrow 0.
\]
:::

::: proof
除了关于直和的叙述，我们在此之前已经证明了其他的论断。

首先，我们可以假设${\rm ker}(A)=0$，即$H_0=\{0\}$：由于$A$是自伴算子，所以，
$A$把${\rm ker}(A)$的正交补空间映射到自身：
\[
A: {\rm ker}(A)^{\perp}\rightarrow {\rm ker}(A)^{\perp}.
\]
所以，我们只要用${\rm ker}(A)^{\perp}$来代替$H$考虑问题即可。

我们下面采用将实对称矩阵对角化的方法进行论证。

我们令$H_1=H$，$A_1=A$，其中$A_1:H_1\rightarrow H_1$，我们注意到$A_1$也是紧的自伴算子。
定理之前5)中的论证，我们可以找到$u_1\in H_1$，使得$\|u_1\|=1$，
$R(u_1)=\lambda_1$并且$A_1(u_1)=\lambda_1 u_1$。据此，我们将$H_1$ 分解为
\[
H_1=\mathbb{C}u_1\oplus H_2,
\]
其中$H_2=\big(\mathbb{C}u_1\big)^\perp$是$u_1$在$H_1$中的正交补。
利用$A_1$的自伴性，我们知道$A_1$在$H_2$上的限制，我们把它记作$A_2$，
满足$A_2:H_2\rightarrow H_2$并且$A_2$仍然是自伴的紧算子。

我们重复上面的构造，令$\lambda_2$为$R$在$H_2$上的最大值，那么，我们可以找到$u_2 \in H_2$，
使得$\|u_2\|=1$，$R(u_2)=\lambda_2$并且$A_2(u_2)=\lambda_2 u_2$。据此，我们将$H_2$ 分解为
\[
H_2=\mathbb{C}u_2\oplus H_3.
\]

如此往复，我们得到点的序列$\{u_k\}_{k\geqslant 1}\subset H$和子空间的下降的序列
\[
H_1\supset H_2 \supset H_3\supset \cdots.
\]
特别地，根据构造，我们还有
\[
|\lambda_1|\geqslant |\lambda_2|\geqslant \cdots.
\]
我们现在令
\[
H'=\overline{\bigoplus_{\lambda_k \in \sigma(A)}\mathbb{C}u_k}.
\]
我们只要${H'}=H$就完成了证明。
首先，我们假设上述操作需要做无限次（否则这就是有限维关于Hermite矩阵对角化的过程，
我们在线性代数中已经证明，实际上这里重新证明了这个结论），此时，
我们已经将$\{\lambda_k\}_{k\geqslant 1}$重排，
使得$\{|\lambda_k|\}_{k\geqslant 1}$是单调下降到$0$的序列。现在考虑$A$在$H'^\perp$上的限制：
\[
A:H'^\perp \rightarrow H'^\perp.
\]
这仍然是自伴紧算子并且具有特征值$\lambda \neq 0$。
所以，存在某个$k_0$，使得$|\lambda| \in \left(|\lambda_{k_0+1}|,|\lambda_{k_0}|\right]$。
但是，按照构造方式，我们的变分方法应该先构造出$\lambda$之后才有可能构造出$\lambda_{k_0+1}$，矛盾。
:::
