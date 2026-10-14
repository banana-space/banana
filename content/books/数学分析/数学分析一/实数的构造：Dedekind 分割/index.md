---
title: 实数的构造：Dedekind 分割
---

## Dedekind分割与实数的构造

::: definition [Dedekind分割]
$X\subset \mathbb{Q}$ 是有理数的子集，令 $X'=\mathbb{Q}-X$。如果下面三条性质都成立：

- 1\) $X\neq \varnothing$，$X'\neq \varnothing$；

- 2\) 对任意 $x\in X$，$x'\in X'$，都有 $x<x'$；

- 3\) $X$ 中没有最大元，

我们就称 $X$ 或 $X\cup X'$ 是 $\mathbb{Q}$ 的一个**Dedekind分割**。
我们用 $\mathcal{R}$ 表示所有Dedekind分割组成的集合。
:::

::: remark*
我们可以重新解读后两条性质：

- 第二条 2)等价于说，如果 $x_1\in X$，那么对任意的 $x_2<x_1$，我们就有 $x_2\in X$。
  这也表明，如果 $x'_1\in X'$，那么对任意的 $x'_2>x'_1$，我们就有 $x'_2\in X'$。

- 第三条 3)指的是对任意 $x\in X$，总存在 $x'\in X$，使得 $x'>x$。

:::

::: example*
我们给出两个Dedekind分割的例子（课堂练习：直接验证定义）：

a) 假设 $\dfrac{p}{q}$ 是有理数，其中 $p \in \mathbb{Z}$，
   $q\in \mathbb{Z}_{\geqslant 1}$ 并且 $p$ 和 $q$ 互素，我们定义
   \[
   X_{\frac{p}{q}}=\left\{ x\in \mathbb{Q} \Bigm| x< \frac{p}{q} \right\}.
   \]
   这个例子将给出所有的有理数。

b) 我们定义 $X_{\sqrt{2}}$ 如下：
   \[
   X_{\sqrt{2}}=\bigl\{x\in \mathbb{Q}_{\geqslant 0}\bigm| x^2<2\bigr\}\cup \mathbb{Q}_{\leqslant 0}.
   \]
   这个例子将给出我们所熟悉的 $\sqrt{2}$。

:::

## 序结构

现在，我们要在 $\mathcal{R}$ 上定义序关系、加法和乘法，
使得 $(\mathcal{R},+,\cdot, \leqslant)$ 满足四套公理。

我们先定义序关系：

::: definition* [序关系]
对任意的 $X,Y\in \mathcal{R}$，作为 $\mathbb{Q}$ 的子集合，如果

- $X=Y$，我们称 $X=Y$；

- $X\subset Y$ 且 $X\neq Y$，我们称 $X<Y$（也记做 $Y>X$）。

:::

我们首先来验证这个序关系满足公理 (O1)、(O2) 和 (O3)：

- (O3). $\leqslant$ 是一个全序关系，即对任意的 $X,Y\in \mathcal{R}$，
  $X\subset Y$ 和 $Y\subset X$ 必居其一：

  我们假设 $X\not\subset Y$，只要说明 $Y\subset X$ 即可。
  根据假设，存在 $x\in X$，使得 $x\notin Y$，根据Dedekind分割的定义中的 2)，对任意的 $y\in Y$，
  都有 $y<x$（否则 $x<y$，$y\in Y$，就可以推出 $x\in Y$，矛盾！），从而 $y\in X$（因为 $x\in X$），
  所以 $Y\subset X$。

- (O1). 对任意的 $X,Y,Z\in \mathcal{R}$，如果 $X<Y$，$Y<Z$，那么 $X<Z$。

  这就是集合包含关系的传递性的重新叙述。

- (O2). 对任意的 $X,Y\in \mathcal{R}$，$X<Y$，$X=Y$ 或者 $X>Y$ 三者恰有一种情形成立。

  用集合的包含关系来看，这是显然的。

一个有趣的事情是，我们现在就可以证明确界原理了（只需要用到序的定义！）。为此，我们先做一番准备。
假设 $\mathcal{X} \subset \mathcal{R}$（这是一个由若干Dedekind分割所组成的集合）有上界，
即存在Dedekind分割 $M$，使得对任意 $X\in \mathcal{X}$，$X\leqslant M$，
这里我们假设 $\mathcal{X}\neq \emptyset$。我们现在定义 $\sup\mathcal{X}$ 的候选：
\[
M_0=\displaystyle \bigcup_{X\in \mathcal{X}}X.
\]
这是有理数的子集，我们首先要说明 $M_0\in \mathcal{R}$，即 $M_0$ 是Dedekind分割。我们逐条验证定义：

- 1\) $M_0\neq \varnothing$，$M_0' \neq \varnothing$。

  $M_0\neq \varnothing$ 是显然的。
  为了说明 $M_0'\neq \varnothing$，我们考虑 $\mathcal{X}$ 的一个上界 $M$，
  也就是说对于任意的 $X\in \mathcal{X}$，我们都有 $X\subset M$。
  此时，我们考虑任意的一个 $m'\in M'$，这是 $M_0'$ 中的一个元素。

- 2\) 对每一个 $x_1\in M_0$，如果 $x_2< x_1$，那么一定有 $x_2\in M_0$。

  实际上，由于 $x_1\in M_0$，所以存在Dedekind分割 $X \in\mathcal{X}$，使得 $x_1 \in X$，
  所以 $x_2\in X \subset M_0= \displaystyle \bigcup_{Y\in \mathcal{X}}Y$。

- 3\) $M_0$ 中没有最大元。

  如若不然，我们可以找到 $x\in M_0$ 是最大元。
  根据 $M_0$ 的定义，存在Dedekind分割 $X \in\mathcal{X}$，使得 $x\in X$，
  那么 $x$ 必须是 $X$ 的最大元（因为 $X\subset M_0$），这与 $X$ 是Dedekind分割矛盾。

我们下面说明，$M_0$ 是 $\mathcal{X}$ 最小的上界，即若定义
\[
{\mathcal{M}}=\bigl\{{M}\in \mathcal{R} \bigm| {M} \text{是 $\mathcal{X}$ 的上界}\bigr\},
\]
那么，我们有 $M_0\in \mathcal{M}$ 并且如果 $M\in \mathcal{M}$，那么 $M_0\leqslant M$：

$M_0\in \mathcal{M}$ 是明显的。
为了说明 $M_0\leqslant M$，其中 $M$ 是上界，我们用定义：由于 $M$ 是上界，
所以对任何的 $X\in \mathcal{X}$，我们都有 $X\subset M$，
所以它们的并 $\displaystyle \bigcup_{X\in \mathcal{X}}X$ 也是 $M$ 的子集，即 $M_0\subset M$，
这等价于 $M_0\leqslant M$。

这就证明了确界原理。

## 加法结构

我们现在定义加法运算：

::: definition* [加法]
对任意的 $X,Y\in \mathcal{R}$，我们定义
\[
X+Y\coloneqq\bigl\{x+y\bigm| x\in X,y \in Y\bigr\}.
\]
我们还定义零元素 $\overline{0}$ 为
\[
\overline{0}=X_0=\bigl\{x\in \mathbb{Q}\bigm| x<0\bigr\}.
\]
:::

::: remark*
我们首先说明加法运算
\[
\mathbb{R}\times \mathbb{R} \stackrel{+}{\longrightarrow}\mathbb{R}, \ (X,Y)\mapsto X+Y
\]
是良好定义的，即说明上面所定义的 $X+Y$ 的确是Dedekind分割（先验地来看，
$X+Y$ 只是 $\mathbb{Q}$ 的一个子集）。为此，我们只需要依次验证Dedekind分割的定义中的三条性质：

- 1\) $X+Y$ 及其补集 $(X+Y)'$ 是非空的。

  由于 $X$ 和 $Y$ 都非空，$X+Y$ 自然非空；我们随意选定 $x'_0\in X'$，$y'_0\in Y'$，
  那么对任意的 $x\in X$，$y\in Y$，我们都有 $x<x_0'$，$y<y_0'$。
  所以，对任意的 $x\in X$，$y\in Y$，我们都有 $x+y<x_0'+y_0'$，
  这就表明 $x_0'+y_0'$ 比 $X+Y$ 中所有数都大。
  特别地，$x_0'+y_0' \notin X+Y$，也就是说 $x_0'+y_0'\in (X+Y)'$。

- 2\) 对任意的 $x+y\in X+Y$，其中 $x\in X$，$y\in Y$，如果有理数 $z<x+y$，那么 $z\in X+Y$。

  为此，我们注意到 $z-x<y$，根据，$y\in Y$，我们知道 $z-x\in Y$，所以
  \[
  z=\underbrace{x}_{\in X}+\underbrace{z-x}_{\in Y} \in X+Y.
  \]

- 3\) $X+Y$ 中没有最大元。

  如果不然，假设 $x_0+y_0\in X+Y$ 是最大元，其中 $x_0\in X$，$y_0\in Y$。
  根据定义，由于 $X$ 和 $Y$ 没有最大元，所以存在 $x\in X$，$y\in Y$，使得 $x_0<x$，$y_0<y$，
  从而 $x_0+y_0<x+y$。但是 $x+y\in X+Y$，这与 $x_0+y_0$ 是最大元这个假设矛盾。

:::

我们下面需要依次验证和加法相关的几条公理。
如果不加其他的陈述，我们总假设 $X,Y,Z\in \mathcal{R}$ 是任意选定的Dedekind分割。那么，我们有

(F1) $(X+Y)+Z=X+(Y+Z)$。

     根据定义，这是显然的。

(F2) $X+Y=Y+X$。

     根据定义，这也是显然的。

(O4) 如果 $X< Y$，那么 $X+Z< Y+Z$。

     这个性质的证明不是一句话就可以完成的，我们先准备一个技术工具

::: lemma
$X$ 是Dedekind分割。那么，对任意的正整数 $n$，总存在 $x\in X$，$x' \in X'$，使得
\[
0<x'-x<\frac{1}{n}.
\]
:::

证明想法可以追溯到庄周：*一尺之棰，日取其半，万世不竭。——《庄子 $\cdot$ 天下》*

::: proof
任意选定 $x_0\in X, x'_0\in X'$，我们通过归纳的方式来构造一系列的 $(x_k,x'_k)$，
其中 $k\geqslant 0$，$x_k\in X$，$x_k'\in X'$。
假设 $(x_k,x'_k)$ 已经构造好了，那么我们考虑 $y=\dfrac{1}{2}(x_k+x'_k)$。
有两种可能的情况：如果 $y\in X$，那么定义 $(x_{k+1},x'_{k+1})=(y,x'_k)$；如果 $y\in X'$，
那么定义 $(x_{k+1},x'_{k+1})=(x_k,y)$。很明显，我们有
\[
|x_{k+1}-x'_{k+1}|=\dfrac{1}{2}|x_k-x'_k| \ \ \Rightarrow \ \ |x_k-x'_k|=\dfrac{1}{2^{k}}|x_0-x'_0|.
\]
上面的等式对任意的 $k$ 都对。
特别地，我们选取 $k_0$，使得 $2^{k_0}>n|x_0-x_0'|$，
从而 $x=x_{k_0}\in X$ 和 $x'=x'_{k_0}\in X'$ 满足要求。
:::

回到(O4)的证明：首先注意到不等式 $X+Z\leqslant Y+Z$ 是显然的，所以只要说明 $X+Z\neq Y+Z$ 即可。
我们选取 $y, \tilde{y}\in Y-X$，使得 $y>\tilde{y}$（先取 $\tilde{y}$，由于 $Y$ 没有最大元，
可以再选 $y$）。现在选取自然数 $n$，使得 $\dfrac{1}{n}<y-\tilde{y}$（在有理数中这一点总能做到）。
根据引理，我们再取 $z\in Z$，$z'\in Z'$，使得 $z'-z<\dfrac{1}{n}$。

我们现在说明 $y+z\notin X+Z$：如若不然，那么存在 $x\in X$，$z_1\in Z$，使得 $y+z=x+z_1$。
按照定义，$x<\tilde{y}$，所以 $z'<z_1$。这与 Dedekind 分割的定义中的 2) 矛盾！

(F3) 对任意的 $X\in \mathcal{R}$，我们都有 $\overline{0}+X=X$。

     根据 $\overline{0}$ 的定义，$\overline{0}+X=\bigl\{x+(-a)\bigm|a\in \mathbb{Q}_{>0}\bigr\}$。
     假设 $x-a \in \overline{0}+X$ 是任意给定的一个元素，其中 $x\in X$，$a\in \mathbb{Q}_{>0}$，
     那么，
     根据 $x-a<x$，我们知道 $x-a\in X$，这说明 $\overline{0}+X\subset X$；
     假设 $x\in X$ 是任意给定的一个元素，那么一定存在 $x'\in X$，使得 $x'>x$，
     我们令 $a=x'-x \in \mathbb{Q}_{>0}$，从而，$x=x'+(-a)$，这个分解表明 $x\in \overline{0}+X$，
     所以 $X\subset \overline{0}+X$。

(F4) 对任意的Dedekind分割 $X$ 和 $Y$，存在唯一的 $Z\in \mathcal{R}$，使得 $X+Z=Y$。
     $Y=\overline{0}$ 的情况就是公理(F4)。

     $X,Y\in \mathcal{R}$ 给定，我们按照下面的方式定义 $Z$：
     \[
     Z=\bigl\{y-x' \bigm| y\in Y, x'\in X' \bigr\}.
     \]
     我们首先要说明 $Z\in \mathcal{R}$，其推理与之前验证 $X+Y\in \mathcal{R}$ 的方式类似：

     - $Z\neq \varnothing$，$Z'\neq \varnothing$。

       $Z$ 显然不是空集；为了说明 $Z'$ 不是空集，我们选定 $y'_0\in Y'$，$x_0\in X$，
       只要说明 $y'_0-x_0 \notin Z$ 即可：如若不然，存在 $y\in Y$ 和 $x'\in X'$，
       使得 $y-x'=y_0'-x_0$，
       即
       $y+x_0=y_0'+x'$，这与 $y<y_0'$ 以及 $x_0<x'$ 矛盾。

     - 对任意的 $y-x' \in Z$，其中 $y\in Y, x'\in X'$，如果 $z<y-x'$，就一定有 $z\in Z$。

       我们只需要把 $z$ 分解为 $z=y-(y-z)$，根据 $z<y-x'$，我们知道 $y-z>x'$，所以 $y-z\in X'$，
       所以 $z$ 可以写成 $Y$ 中元素与 $X'$ 中元素的差。

     - $Z$ 中的元素没有最大元。

       证明是平凡的。

     现在来说明 $X+Z=Y$。

     由于 $X+Z$ 中的元素形如 $x+(y-x')$，其中 $x\in X$，$y\in Y$，$x'\in X'$，根据 $x<x'$，
     所以这个元素必然 $<y$，这就说明该元素落在 $Y$ 中，所以 $X+Z\subset Y$；对任意 $y$，
     由于 $Y$ 没有最大元，我们可以选取 $\tilde{y}\in Y$，使得 $y<\tilde{y}$。
     根据上面的技术性引理，我们还可以选取 $x\in X$ 和 $x'\in X'$，使得 $x'-x<\tilde{y}-y$，
     那么 $\tilde{\tilde{y}}=y+(x'-x) <\tilde{y}$，所以 $\tilde{\tilde{y}}\in Y$。从而，
     \[
     y=\underbrace{x}_{\in X}+\underbrace{\tilde{\tilde{y}}-x'}_{\in Z}\in X+Z
     \]
     这说明 $Y\subset X+Z$。综合上述，$X+Z=Y$。

我们再进一步研究刚才所定义的加法的结构。注意到，根据刚刚证明的(F4)，我们可以定义相反数的运算：
\[
-\colon\mathcal{R}\rightarrow \mathcal{R}, X\mapsto -X.
\]
其中 $-X$ 是使得 $X+Z=\overline{0}$ 的（唯一的）那一个 $Z$。
按照定义，我们有 $-X=\{y-x'\mid y\in \overline{0},x'\in X'\}$。
根据公理 (F1)–(F4)（目前已经证明），这个 $Z$ 是唯一的并且 $-(-X)=X$。
我们还可以说明，这里定义的负号运算和本来有理数上的负号的运算是一致的，即若 $\dfrac{p}{q}$ 是有理数，
那么 $X_{-\frac{p}{q}}=-X_{\frac{p}{q}}$：为此，
我们只需要说明 $X_{-\frac{p}{q}}+X_{\frac{p}{q}}=\overline{0}$ 即可，
我们把验证细节的乐趣以及下面的练习题一并留给同学们：

::: exercise* [正负性]
对于 $X\in \mathcal{R}$，如果 $X>\overline{0}$，我们就称 $X$ 是正的；如果 $X<\overline{0}$，
我们就称 $X$ 是负的。

- 1\) 证明，$X$ 是正的当且仅当 $X$ 中有正的有理数。

- 2\) 证明，$X$ 是正的当且仅当 $-X$ 是负的。

:::

利用这个习题的第一个结论，我们现在可以证明Archimedes公理 **(A)**，
即如果Dedekind分割 $X>\overline{0}$，那么对任意的 $Y\in \mathcal{R}$，存在正整数 $n$，使得
\[
\underbrace{X+\cdots +X}_{n~\text{个}}>Y.
\]
实际上，根据上面习题的结论，我们先选一个有理数 $x\in X$，并且 $x>0$。
我们任意选取一个有理数 $y'\in Y'$。
我们当然可以找到 $n$，使得 $n\cdot x>y'$，此时，
$n\cdot x \in \underbrace{X+\cdots +X}_{n~\text{个}}$ 并且比 $Y'$ 中的一个元素还要大，
这说明 $\underbrace{X+\cdots +X}_{n~\text{个}}>Y$。

## 乘法结构

我们现在要来定义并研究 $\mathcal{R}$ 上的乘法。
为了定义乘法，对于 $X,Y\in \mathcal{R}$，我们分情况来讨论：
\[
X\cdot Y =\begin{cases}\overline{0}, \ \ &\text{如果 $X=\overline{0}$ 或 $Y=\overline{0}$};\\
\bigl\{x\cdot y\bigm| x\geqslant 0, x\in X, y\geqslant 0, y \in Y\bigr\}\cup \overline{0}, \ \ &\text{如果 $X>0$，$Y>0$};\\
-\bigl(X\cdot(-Y)\bigr), \ \ &\text{如果 $X>0$，$Y<0$};\\
-\bigl((-X)\cdot Y \bigr), \ \ &\text{如果 $X<0$，$Y>0$};\\
\bigl((-X)\cdot(-Y)\bigr), \ \ &\text{如果 $X<0$，$Y<0$}.
\end{cases}
\]
我们希望（将证明）乘法单位元 $\overline{1}$ 恰好就是
\[
\overline{1}=X_1=\bigl\{x\in \mathbb{Q}\bigm| x<1\bigr\}.
\]

在第一次作业题中，我们将逐条验证域公理 **(F)** 和序公理 **(O)** 所剩下的部分。
至此，我们证明了 $(\mathcal{R},+,\cdot,\leqslant)$ 满足实数的所有公理，从而证明了实数的存在性。
关于实数的唯一性，我们将会在后面课程的展开中顺便讨论（比如说在什么意义下是唯一的）。
