---
title: '$L^2$ 与 $L^\infty$ 的完备性，卷积与逼近'
notices:
  - name: 问题
    items:
      - “偶数维球面上的切向量场”一节的证明中，“当 $r$ 足够小的时候”似乎应为 $t$；按 $\Phi_t(S_r)\subset \sqrt{1+t^2}S_r$，$\Phi_t(\Omega)$ 似乎应为 $\frac{1}{2}(1+t^2)< x_1^2+\cdots+x_n^2<2(1+t^2)$。
      - “函数空间的完备性：继续”一节的注记中，所举的函数列 $f_n$ 在 $L^1([0,1])$ 中似乎也收敛到 $0$（$\|f_n\|_{L^1}=n^{-2}$），与“在 $L^1([0,1])$ 上不收敛”的说法不符。
---

## 多元微积分的应用举例：偶数维球面上的切向量场

考虑 $\mathbb{R}^n$ 中的单位球面
\[
\mathbf{S}^{n-1}=\bigl\{(x_1,\cdots,x_n)\in \mathbb{R}^n\bigm| x_1^2+\cdots+x_n^2=1\bigr\}.
\]
如果 $n-1=2k-1$ 是奇数，在点 $(x_1,x_2,\cdots,x_{2k-1},x_{2k})\in \mathbf{S}^{n-1}$ 处，我们指定向量
\[
v(x_1,\cdots,x_{2k})=(-x_2,x_1,\cdots,-x_{2k},x_{2k-1}).
\]
这是 $\mathbf{S}^{2k-1}$ 的一个单位切向量。
当 $(x_1,x_2,\cdots,x_{2k-1},x_{2k})\in \mathbf{S}^{n-1}$ 变动的时候，
我们就得到了 $\mathbf{S}^{2k-1}$ 上的一个处处非零的光滑向量场。我们现在证明：

::: theorem
在 $\mathbf{S}^{2k}$ 上不存在处处非零的光滑向量场，其中 $k\geqslant 1$。
:::

假设 $\Omega\subset \mathbb{R}^n$ 是一个有界开集并且 $V$ 是 $\Omega$ 上的一个有界的光滑向量场，
我们假设 $dV$ 是有界的（把 $V$ 看成映射）。我们现在定义光滑映射
\[
\Phi_t\colon \Omega \rightarrow \mathbb{R}^n, \ \ x\mapsto x+tV(x).
\]
它在 $x$ 处的微分为
\[
d\Phi(x)=\mathbf{Id}+t dV(x).
\]
所以，当 $t$ 足够小时，$d\Phi(x)$ 可逆，从而，$\Phi_t$ 是局部微分同胚（反函数定理）。
另外，对任意的 $x,y\in \Omega$，我们有
\[
\begin{aligned}
|x-y|&=|\Phi_t(x)-\Phi_t(y)-t(V(x)-V(y))|\\
&\leqslant |\Phi_t(x)-\Phi_t(y)|+t|V(x)-V(y)|\\
&\leqslant |\Phi_t(x)-\Phi_t(y)|+tM|x-y|.
\end{aligned}
\]
其中，我们用了 $dV$ 的有界性，从而 $|V(x)-V(y)|\leqslant M|x-y|$。所以，当 $t<(2M)^{-1}$ 时，我们有
\[
|\Phi_t(x)-\Phi_t(y)|\geqslant  \frac{1}{2}|x-y|.
\]
这表明 $\Phi_t$ 是单射，所以当 $t$ 足够小时，映射
\[
\Phi_t\colon \Omega \rightarrow \Phi_t(\Omega), \ \ x\mapsto x+tV(x).
\]
是微分同胚。特别地，我们可以用换元积分公式计算 $\Phi_t(\Omega)$ 的体积：
\[
m(\Phi_t(\Omega))=\int_{\Omega}|\operatorname{det}(\mathbf{I}+t \left(\frac{\partial V_i}{\partial x_j}\right)|dx.
\]
将行列式展开，我们发现，这是关于 $t$ 的一个次数不超过 $n$ 的多项式。

我们现在用反证法证明这个定理：如若不然，
我们假设 $X(x)$ 是 $\mathbf{S}^{n-1}$ 上的一个处处非零的光滑向量场，其中 $n-1=2k$。
通过考虑 $\dfrac{X(x)}{|X(x)|}$ 这个向量场，我们不妨假设 $V$ 在每个点处都是单位长度的。令
\[
\Omega=\bigl\{(x_1,\cdots,x_n)\in \mathbb{R}^n\big| \frac{1}{2}< x_1^2+\cdots+x_n^2<2\bigr\}.
\]

那么，
\[
\Omega=\bigcup_{\frac{1}{2}<r<2}S_r=\bigcup_{\frac{1}{2}<r<2}(r\mathbf{S}^{n-1}).
\]
我们定义 $\Omega$ 上的向量场为
\[
V(x)=|x|X\left(\frac{x}{|x|}\right)
\]
对任意的 $r$，我们知道 $\Phi_t(S_r)\subset \sqrt{1+t^2}S_r$，所以，当 $r$ 足够小的时候，
$\Phi_t$ 将 $\Omega$ 映射成了
\[
\Phi_t(\Omega)=\bigl\{(x_1,\cdots,x_n)\in \mathbb{R}^n\bigm| \frac{1}{2}t \sqrt{1+t^2}< x_1^2+\cdots+x_n^2<2t \sqrt{1+t^2}\bigr\}.
\]
那么，根据Lebesgue测度在伸缩变换下的性质，我们有
\[
m(\Phi_t(\Omega))=(1+t^2)^{\frac{2k+1}{2}}m(\Omega)
\]
这不是 $t$ 的多项式，矛盾。

## 函数空间的完备性：继续

::: theorem
对任意的测度空间 $(X,\mathcal{A},\mu)$，$L^2(X,\mathcal{A},\mu)$ 是Hilbert空间。
:::

::: proof
根据之前的引理，
我们只需要证明绝对收敛的级数 $\displaystyle \sum_{i=1}^\infty f_i$ 在 $L^2(X,\mathcal{A},\mu)$
中收敛即可，其中 $f_i\in L^2(X,\mathcal{A},\mu)$。仿照Fischer–Riesz定理，我们定义
\[
S_N(x)=\sum_{i=1}^N f_i(x), \ \ |S|_N(x)=\sum_{i=1}^N |f_i(x)|,
\]
并令
\[
F(x) = \bigl(\lim_{N\rightarrow \infty}|S|_N)^2=\bigl(\sum_{i=1}^\infty |f_i(x)|\bigr)^2.
\]
根据Fubini定理和Cauchy–Schwarz不等式，我们有
\[
\begin{aligned}
\int_{X}|F|&=\int_{X}\sum_{i=1}^\infty\sum_{j=1}^\infty |f_i(x)||f_j(x)|d\mu(x)\\
&=\sum_{i=1}^\infty\sum_{j=1}^\infty \int_{X}|f_i(x)||f_j(x)|d\mu(x)\\
&\leqslant \sum_{i=1}^\infty\sum_{j=1}^\infty \|f_i\|_{L^2}\|f_j\|_{L^2}\\
&=\bigl(\sum_{i=1}^\infty \|f_i(x)\|_{L^2}\bigr)^2<\infty.
\end{aligned}
\]
所以，$F$ 是可积函数（显然可测）并且 $A= F^{-1}(+\infty)$ 是零测集。
根据 $F$ 的定义，当 $x\notin A$ 时，$|S|_N(x)$ 收敛到 $\sqrt{F(x)}$，从而存在 $S(x)$，
使得当 $x\notin A$ 时，我们有 $\displaystyle \lim_{N\rightarrow \infty}S_N(x)= S(x)$，即
\[
\displaystyle\sum_{i=1}^\infty f_i(x) = S(x),  \ \  x\notin A.
\]
我们现在选取 $4F(x)$ 作为控制函数：
\[
| S_N(x) -S(x)|^2\leqslant 2|S_N(x)|^2 +2|S(x)|^2\leqslant 4F(x).
\]
由于 $\displaystyle\lim_{N\rightarrow \infty}\big|S_N(x) -f(x) \big|^2 =0$（几乎处处），
根据Lebesgue控制收敛定理，我们有
\[
\lim_{N\rightarrow \infty}\int_X | S_N(x) -S(x)|^2d\mu(x) =0.
\]
这就完成了证明。
:::

::: corollary
给定 $L^2(X,\mathcal{A},\mu)$ 中的函数序列 $\{f_i\}_{i\geqslant 1}$，
我们假设它们在 $L^2$ 范数下收敛到 $f$，即
\[
f_i \stackrel{L^2(X,\mathcal{A},\mu)}{\longrightarrow} f,  \  i\rightarrow \infty.
\]
那么，存在子函数序列 $\{f_{i_p}\}_{p\geqslant 1}$，使得对几乎处处的 $x\in X$，我们都有
\[
\lim_{p\rightarrow\infty }f_{i_p}(x)=f(x)
\]
:::

我们把推论的证明留成作业。

::: theorem
对任意的测度空间 $(X,\mathcal{A},\mu)$，$L^\infty(X,\mathcal{A},\mu)$ 是完备的。
:::

::: proof
对于 $L^\infty(X,\mathcal{A},\mu)$ 中的Cauchy列 $\{f_i\}_{i\geqslant 1}$，我们定义
\[
A_{ij}=\bigl\{x\in X\bigm||f_i(x)-f_j(x)|> \|f_i-f_j\|_{L^\infty}\bigr\}.
\]
按定义，这是一个零测集，所以 $A=\displaystyle \bigcup_{i,j=1}^\infty  A_{ij}$ 是零测集。
对于 $x\notin A$，$\{f_i(x)\}_{i=1,2,\cdots}$ 为Cauchy列：
\[
|f_i(x)-f_j(x)|\leqslant  \|f_i-f_j\|_{L^\infty}\rightarrow 0.
\]
从而，存在 $f(x)\in \mathbb{C}$，使得 $\displaystyle \lim_{n\rightarrow \infty}f_n(x)=f(x)$，
所以函数
\[
f\colon X\rightarrow \mathbb{C}
\]
几乎处处有定义。对任意的 $\varepsilon>0$，存在正整数 $N$，使得当 $i,j\geqslant N$ 时，我们有
\[
\|f_i-f_j\|_{L^\infty}<\varepsilon.
\]
所以，对任意的 $x\notin A$，我们有
\[
|f_i(x)-f_j(x)|\leqslant \|f_i-f_j\|_{L^\infty}<\varepsilon.
\]
令 $j\rightarrow \infty$，所以对任意的 $i\geqslant N$，我们都有
\[
|f_i(x)-f(x)|\leqslant \varepsilon, \  \ x\notin A.
\]
这表明 $\{f_i\}_{i\geqslant 1}$ 在 $L^\infty$ 范数下收敛到 $f$。
:::

::: remark* [重要：在不同的意义下收敛]
给定一个函数列 $\{f_i\}_{i\geqslant 1}$，在我们谈论它收敛到某个函数 $f$ 时，
一定要事先界定用的哪个范数。不同的范数可能给出不同的结论，比如说，函数列
\[
f_n(x)=\begin{cases}\frac{1}{n}, \ \ & 0\leqslant x\leqslant \frac{1}{n},\\
0, \ \ & \frac{1}{n}<x\leqslant 1\end{cases}
\]
它在 $L^2([0,1])$ 上收敛到 $0$，在 $L^1([0,1])$ 上不收敛。

另外，如果 $X$ 是有限维赋范线性空间，$X$ 上任意范数定义出的收敛性都是等价的。
:::

我们将在作业中证明上面的论断。

最后，我们讨论所谓的（赋范线性空间之间）连续线性映射。

::: lemma
给定赋范线性空间 $(E,\|\cdot\|_E)$，
$(F,\|\cdot\|_F)$ 和它们之间的（$\mathbb{C}$-）线性映射 $L\colon E\rightarrow F$。
那么，如下三个论断是等价的：

- 1\) $L$ 在 $0\in E$ 处连续；

- 2\) $L$ 是连续的；

- 3\) $L$ 是**有界**，即存在 $C>0$，对每个 $e\in E$，我们都有
  \[
  \|L(e)\|_F\leqslant C \|e\|_E.
  \]

:::

::: proof
2)$\Rightarrow$1)是显然；为了说明3)$~\Rightarrow$ 2)，对任意的 $e\in E$，以及 $x\in E$，我们有
\[
\begin{aligned}
d_F\left((L(x),L(e)\right)&=\|L(x)-L(e)\|_F=\|L(x-e)\|_F\\
&\leqslant C \|x-e\|_E=C\|x-e\|_E=d_E(x,e).
\end{aligned}
\]
所以，当 $x\rightarrow e$ 时，我们有 $L(x)\rightarrow L(e)$，从而，$2)$ 成立。

现在证明 1) $\Rightarrow$ 3)。
由连续性，对于 $\varepsilon=1$，存在 $\delta>0$，当 $\|e\|_E\leqslant \delta$ 时，
我们有 $\|L(e)\|_F< 1$。那么，对任意的 $e\in E$，我们有
\[
\|L\bigl(\frac{\delta e}{\|e\|_E}\bigr)\|_F \leqslant 1.
\]
我们选取 $C=\delta^{-1}$ 即可。
:::

::: remark*
这个命题说的是连续线性映射一定是有界线性映射，我们之后对这两个名词不加区分。
:::

::: corollary [线性映射的延拓]
给定赋范线性空间 $(E,\|\cdot\|_E)$，$(E',\|\cdot\|_{E'})$ 和 $(F,\|\cdot\|_F)$，其中 $F$ 完备，
$E'\subset E$ 为线性子空间且其范数为诱导范数，即对任意的 $e'\in E$，我们有
\[
\|e'\|_{E'}=\|e'\|_{E}.
\]
假设 $E'$ 在 $E$ 中是稠密的。
\[
\begin{tikzcd}
 E'\arrow[r,"\iota"] \arrow[dr, "L'"swap]
  & E \arrow[d,"L",dashed]\\
&F \end{tikzcd}
\]
如果存在连续线性映射 $L'\colon E' \rightarrow F$，
那么存在唯一的连续线性映射 $L\colon E\rightarrow F$，使得 $L\big|_{E'}=L'$。
:::

::: proof
唯一性：对任意的 $e\in E$，根据稠密性，我们可以选取 $\{e'_i\}_{i\geqslant 1}\subset E'$，使得
\[
\lim_{i\rightarrow \infty}e'_i=e.
\]
所以，
\[
L(e)=\lim_{i\rightarrow \infty}L(e'_i)=\lim_{i\rightarrow \infty}L'(e'_i)
\]
是被唯一决定的。
反之，对任意的 $e$，我们任取 $\{e'_i\}_{i\geqslant 1}\subset E'$，
使得 $\displaystyle \lim_{i\rightarrow \infty}e'_i=e$，我们就定义
\[
L(e)\coloneqq\lim_{i\rightarrow \infty}L'(e'_i)
\]
为了说明这是良好定义的，假设 $\{e''_i\}_{i\geqslant 1}\subset E'$，
使得 $\displaystyle \lim_{i\rightarrow \infty}e''_i=e$，我们只要说明
\[
\lim_{i\rightarrow \infty}L'(e'_i)=\lim_{i\rightarrow \infty}L'(e''_i)
\]
即可。这因为
\[
\|L'(e'_i)-L'(e''_i)\|_F=\|L'(e'_i-e''_i)\|_F\leqslant C\|e'_i-e''_i\|_E.
\]
所以，$\displaystyle \lim_{i\rightarrow \infty}\|L'(e'_i)-L'(e''_i)\|_F=0$，从而，$L$ 是良好定义的。
上面的计算还表明
\[
\|L(e)\|_F=\lim_{i\rightarrow \infty}\|L'(e'_i)\|_F\leqslant \lim_{i\rightarrow \infty}C\|e'_i\|_E=C\|e\|_E.
\]
这说明 $L$ 是连续线性映射。
:::

::: remark*
这个不起眼的定理是贯穿分析学始终的想法：
研究一个连续函数我们只需要搞清楚它在有理数（或者其他稠密子集）上的取值即可。
从此往后，为了构造赋范线性空间之间的连续线性映射，我们只需要在稠密的子空间上面构造即可。
我们会证明，很多函数空间都包含光滑函数作为子空间，所以，为了定义好的连续线性算子，
我们只要对光滑函数进行构造即可。
:::

## 函数的逼近

::: theorem
给定测度空间 $(X,\mathcal{A},\mu)$，
我们仍然用 $\mathcal{E}(X)$ 表示简单函数所构成的线性空间（这是阶梯函数的商掉 $\mathcal{N}$
的商空间）。那么，$\mathcal{E}(X)$ 是 $L^p(X,\mathcal{A},\mu)$ 的稠密子空间，其中 $p=1$ 或者 $2$。
:::

::: remark*
对于 $p=\infty$ 也有类似的结果，然而，我们要指出，此时它依赖于我们对于阶梯函数的定义，
即是否容许测度为 $\infty$ 的集合的示性函数作为简单函数。
这些都是概念上的腾挪，没有太多的意思，所以我们忽略掉这个情况。
:::

::: proof
首先，对 $L^1(X,\mathcal{A},\mu)$ 来证明这个结论。
任意选取 $f\in L^1(X,\mathcal{A},\mu)$，我们分情况讨论：

- 1\) 如果 $f$ 是正函数，那么存在上升的简单函数列 $\{f_i\}_{i\geqslant 1}$，它逐点地收敛到 $f$，从而
  \[
  \|f_i-f\|_{L^1}=\int_{X} f(x)-f_i(x)d\mu \rightarrow 0.
  \]

- 2\) 如果 $f$ 是实值函数，我们将它写成正函数的差：
  \[
  f=f_+-f_-.
  \]
  我们可以选取简单函数序列 $\{f_{i,+}\}_{i\geqslant 1}$ 和 $\{f_{i,-}\}_{i\geqslant 1}$，使得
  \[
  \lim_{i\rightarrow \infty}\|f_{i,\pm}-f_\pm\|_{L^1}=0.
  \]
  从而，
  \[
  \lim_{i\rightarrow \infty}\|(f_{i,+}-f_{i,-})-f\|_{L^1}\leqslant \lim_{i\rightarrow \infty}\|f_{i,+}-f_+\|_{L^1}+\lim_{i\rightarrow \infty}\|f_{i,-}-f_-\|_{L^1}=0 .
  \]
  这就给出了 $f$ 的逼近。

- 3\) 如果 $f$ 是复值函数，我们可以类似地将它写成实部和虚部来逼近。

其次，我们对 $L^2(X,\mathcal{A},\mu)$ 来证明这个结论。
我们仍然先处理 $f\in L^2(X,\mathcal{A},\mu)$ 是正函数的情形，此时，我们知道 $f^2$ 是可积函数，
所以我们选取上升的简单函数列 $\{F_i\}_{i\geqslant 1}$，它逐点地收敛到 $f^2$，
我们令 $f_i=\sqrt{F_i}$。
我们考虑函数序列 $\{|f_i-f|^2\}_{i\geqslant 1}$，很明显，这个序列逐点地收敛到 $0$。
我们可以用 $4|f|^2$ 作为控制函数（因为 $f_i(x)\leqslant f(x)$）：
\[
|f_i(x)-f(x)|^2\leqslant 4|f|^2.
\]
根据Lebesgue控制收敛定理，我们有
\[
\int_X|f_i(x)-f(x)|^2d\mu \rightarrow 0.
\]
即
\[
\lim_{i\rightarrow \infty }\|f_i-f\|_{L^2}=0.
\]
这就给出了这种情形的证明。如果 $f$ 是实值函数或者复值函数，我们把它拆成正函数的和然后利用线性即可。
:::

根据积分的定义，用简单函数来逼近 $L^p$ 中的函数算是理所当然的事情，
我们现在要用光滑函数来逼近 $L^p(\mathbb{R}^n)$ 中的函数。为此，我们要引入所谓的卷积的概念。
之后在不加说明的情况下，我们都用Lebesgue测度。

任意给定 $f,g\in L^1(\mathbb{R}^n)$，根据Fubini定理，我们有
\[
\int_{\mathbb{R}^n\times \mathbb{R}^n}|f(x-y)||g(y)| dxdy=\left(\int_{\mathbb{R}^n} |f|dx \right)\cdot \left(\int_{\mathbb{R}^n} |g|dx \right) =\|f\|_{L^1}\|g\|_{L^1}.
\]
这表明函数
\[
(x,y)\mapsto |f(x-y)||g(y)|
\]
是 $\mathbb{R}^n\times \mathbb{R}^n$ 上的可积函数。
特别地，利用Fubini定理（正函数版本）的结论，对几乎处处的 $x\in \mathbb{R}^n$，
关于 $y\in\mathbb{R}^n$ 的函数
\[
y \mapsto f(x-y)g(y)
\]
是可积的，这里可积是对 $dy$ 而言的，我们将 $x$ 视作是固定的。
所以，对几乎处处的 $x\in \mathbb{R}^n$，函数
\[
f*g\colon \mathbb{R}^n \rightarrow \mathbb{C},  \ \ x\mapsto (f*g)(x)=\int_{\mathbb{R}^n}f(x-y)g(y)dy,
\]
是良好定义的并且是Lebesgue可积的（对测度 $dx$），我们称 $f*g$ 是 $f$ 和 $g$ 的**卷积**。

::: remark*
还有一种观点来看卷积：在每个点处用 $g$ 做为权函数，对 $f$ 进行平均。
比如说 $g(x)=\dfrac{1}{|B_1|}\mathbf{1}_{B_1}$，这是单位球的示性函数并乘了正确的因子，那么
\[
f*g(x)=\frac{1}{|B_1|}\int_{B_1}f(x-y)dy.
\]
这就是 $f$ 在每个点 $x$ 处以此点为中心以 $1$ 为半径的球内做平均。
:::

另外，Fubini定理表明
\[
\int_{\mathbb{R}^n} |f*g| \leqslant \bigl(\int_{\mathbb{R}^n }|f|dx\bigr)\bigl(\int_{\mathbb{R}^n }|g|dy\bigr), \ \Rightarrow  \ \|f*g\|_{L^1}\leqslant \|f\|_{L^1}\|g\|_{L^1}.
\]
这说明
\[
L^1(\mathbb{R}^n)\times L^1(\mathbb{R}^n) \stackrel{*}{\longrightarrow} L^1(\mathbb{R}^n).
\]
这给出了 $L^1(\mathbb{R}^n)$ 上面一个新的乘法结构。这个乘法结构用到了 $\mathbb{R}^n$ 上的群结构。
我们将在作业中证明，$L^1(\mathbb{R}^n)$ 上卷积没有单位元，
也就是说不存在某个函数 $e\in L^1(\mathbb{R}^n)$，使得对任意的 $f\in L^1(\mathbb{R}^n)$，
我们都有 $e*f=f$。我们将在作业中证明这个结论。
我们在下个学期课程的开始能够更好的理解 $L^1(\mathbb{R}^n)$
上卷积没有单位元的原因（它的单位元生活在更大的空间里）。

我们现在证明，卷积满足交换律和结合律：

::: lemma
假设 $f,g, h\in L^1(\mathbb{R}^n)$，那么，我们有

- 1\) 乘法交换律：对于几乎处处的 $x\in \mathbb{R}^n$，都有
  \[
  (f*g)(x)=(g*f)(x).
  \]
  （从而这两个函数在 $L^1(\mathbb{R}^n)$ 中对应着同一个函数）

- 2\) 乘法结合律：对于几乎处处的 $x\in \mathbb{R}^n$，都有
  \[
  \bigl((f*g)*h\bigr)(x)=\bigl(f*(g*h)\bigr)(x).
  \]

:::

::: proof
先证明交换律，根据换元积分公式，我们有
\[
\begin{aligned}
(f*g)(x)&=\int_{\mathbb{R}^n}f(x-y)g(y)dy\\
&=\int_{\mathbb{R}^n}f(z)g(x-z)dy\\
&=(g*f)(x).
\end{aligned}
\]
其中，我们令 $z=x-y$。
现在证明结合律，根据Fubini定理（很明显，取绝对值之后所出现的函数仍然可积），我们有
\[
\begin{aligned}
\bigl((f*g)*h\bigr)(x)&=\int_{\mathbb{R}^n}\left(\int_{\mathbb{R}^n}f((x-z)-y)g(y)dy\right) h(z)dz\\
&=\int_{\mathbb{R}^n\times \mathbb{R}^n} f(x-z-y)g(y) h(z)dydz\\
&=\int_{\mathbb{R}^n\times \mathbb{R}^n} f(x-t)g(y) h(t-y)dydt.
\end{aligned}
\]
其中，我们做了坐标替换 $t=y+z$。所以，再次利用Fubini定理，我们得到
\[
\begin{aligned}
\bigl((f*g)*h\bigr)(x)&=\int_{\mathbb{R}^n} f(x-t)\left(\int_{\mathbb{R}^n}g(y) h(t-y)dy\right)dt\\
&=f*(g*h)(x).
\end{aligned}
\]
这就完成了证明。
:::

另外，对于其它的 $L^p$ 空间，我们有

::: lemma
对于 $p=2$ 或 $\infty$，我们有
\[
L^1(\mathbb{R}^n)\times L^p(\mathbb{R}^n) \stackrel{*}{\longrightarrow} L^p(\mathbb{R}^n),
\]
即若 $f\in L^1(\mathbb{R}^n)$，$g\in L^p(\mathbb{R}^n)$，那么
\[
(f*g)(x)=\int_{\mathbb{R}^n}f(y)g(x-y)dy
\]
在 $L^p(\mathbb{R}^n)$ 中是良好定义的（几乎处处）。特别地，我们有
\[
\|f*g\|_{L^p}\leqslant \|f\|_{L^1}\|g\|_{L^p}.
\]
:::

::: proof
对于 $g\in L^\infty(\mathbb{R}^n)$，我们有
\[
\begin{aligned}
|(f*g)(x)|&=\bigg|\int_{\mathbb{R}^n}f(y)g(x-y)dy\bigg|\\
&\leqslant \int_{\mathbb{R}^n}|f(x-y)||g(y)|dy\\
&\leqslant  \|g\|_{L^\infty}\int_{\mathbb{R}^n}|f(x-y)|dy\\
&= \|f\|_{L^1}\|g\|_{L^\infty}.
\end{aligned}
\]
所以命题成立。

对于 $g\in L^2(\mathbb{R}^n)$，我们考虑正函数
\[
F\colon\mathbb{R}^n \rightarrow \mathbb{R}_{\geqslant 0},  \ \ x \mapsto \int_{\mathbb{R}^n} |f(y)||g(x-y)| dy.
\]
根据Fubini定理，我们有
\[
\begin{aligned}
\int_{\mathbb{R}^n} |F(x)|^2 dx&=\int_{\mathbb{R}^n}\left( \int_{\mathbb{R}^n} |f(x-y)||g(y)| dy \int_{\mathbb{R}^n} |f(x-z)||g(z)| dz\right)dx\\
&=\int_{\mathbb{R}^{3n}}|f(y)||g(x-y)| |f(z)||g(x-z)|dxdydz\\
&=\int_{\mathbb{R}^{2n}}\left(\int_{\mathbb{R}^{n}}|g(x-y)| |g(x-z)|dx\right)|f(y)||f(z)|dydz\\
&\leqslant \int_{\mathbb{R}^{2n}}\left(\int_{\mathbb{R}^{n}}|g(x-y)|^2dx\right)^{\frac{1}{2}} \left(\int_{\mathbb{R}^{n}}|g(x-z)|^2dx\right)^{\frac{1}{2}} |f(y)||f(z)|dydz\\
&=\|g\|^2_{L^2}\int_{\mathbb{R}^{2n}}|f(y)||f(z)|dydz\\
&=\|g\|^2_{L^2}\int_{\mathbb{R}^{n}}|f(y)|dy\int_{\mathbb{R}^{n}}|f(z)|dz.
\end{aligned}
\]
从而，
\[
\begin{aligned}
\int_{\mathbb{R}^n} |F(x)|^2\leqslant \|f\|^2_{L^1}\|g\|^2_{L^2}.
\end{aligned}
\]
这表明，$|F(x)|^2$ 是 $L^1$ 函数，从而几乎处处有定义，所以，函数
\[
x\mapsto f*g(x)= \int_{\mathbb{R}^n} f(y)g(x-y) dy
\]
也几乎处处有定义，上面的不等式自然表明
\[
\|f*g\|^2_{L^2}\leqslant \|f\|^2_{L^1}\|g\|^2_{L^2}.
\]
开方之后就证明了命题。
:::

我们需要说一下光滑的这个情形是每个点都有定义的。

利用Lebesgue控制收敛定理，我们可以说明与光滑函数做卷积可以提升函数的正则性：

::: lemma
我们用 $\mathcal{D}(\mathbb{R}^n)=C^\infty_0(\mathbb{R}^n)$ 表示所有 $\mathbb{R}^n$
上的光滑并且支集是紧集的函数。

如果 $\varphi \in C^\infty_0(\mathbb{R}^n)$，$g\in L^p(\mathbb{R}^n)$，其中，$p=1,2$ 或者 $\infty$，
那么 $\varphi*g \in L^p(\mathbb{R}^n)\cap C^\infty(\mathbb{R}^n)$。
:::

::: proof
给定 $g\in L^p(\mathbb{R}^n)$，只需要证明，对任意的 $\varphi \in C^\infty_0(\mathbb{R}^n)$，
$\varphi * g\in C^1(\mathbb{R}^n)$ 并且对任意的 $i\leqslant n$，我们有
\[
\frac{\partial (\varphi * g)}{\partial x_i}= \int_{\mathbb{R}^n} \frac{\partial \varphi}{\partial x_i}(x-y)g(y) dy
\]
即可：因为我们可以继续用 $ \dfrac{\partial \varphi}{\partial x_i}$ 代替 $\varphi$ 继续求导数，
从而对任意的多重指标 $\alpha$，我们有
\[
\partial^\alpha (\varphi * g)=(\partial^\alpha \varphi )* g.
\]
我们只对 $p=1$ 的情形进行证明，其它情况留作作业。
由于
\[
\begin{aligned}
\bigg|\frac{\partial \varphi}{\partial x_i}(x-y)g(y)\bigg|&=\bigg|\frac{\partial \varphi}{\partial x_i}(x-y)\bigg| |g(y)|\\
&\leqslant M |g(y)|,
\end{aligned}
\]
其中，由于 $\dfrac{\partial \varphi}{\partial x_i}$ 也是有紧支集的光滑函数，所以存在 $M$，
对任意的 $x\in \mathbb{R}^n$，
我们都有 $\Big|\dfrac{\partial \varphi}{\partial x_i}\Big|\leqslant M$。
此时，我们可以用Lebesgue控制收敛定理的第二个推论（对含参数积分的求导公式）来直接推出上面的结论。
:::

::: remark*
在 $\varphi \in C_0^\infty(\mathbb{R}^n)$ 这种情形下，我们知道存在 $A$，
使得对任意的 $x\in \mathbb{R}^n$，$|\varphi(x)|\leqslant A$。所以，
\[
\varphi*g(x)=\int_{\mathbb{R}^n}\varphi(x-y)g(y)dy
\]
在任意一个点 $x$ 处都有定义，这是因为 $|\varphi(x-y)g(y)|\leqslant A|g(y)|$ 是可积函数，
我们不需要用Fubini定理的结论来说明 $\varphi*g(x)$ 的存在性了。
:::
