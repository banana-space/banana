---
title: Roth 三项等差数列定理
notices:
  - name: 问题
    items:
      - Roth 定理的陈述中，上密度定义里的 $x\leqslant A$ 似乎应为 $x\leqslant n$。
      - “离散集合 $\{0,1,2,\cdots,N-1\}$ 上的Fourier级数”一节中，标准正交基 $e^{i\frac{2\pi i}{N}kx}$ 似乎多了一个因子 $i$；性质 1) 中求和上限 $n-1$ 似乎应为 $N-1$；性质 3) 的计算中 $\frac{\widehat{k}(\ell)}{N}$ 似乎应为 $\frac{\overline{\widehat{g}(k)}}{N}$。
      - “$A$ 不是相对随机分布的情形”一节末尾的引理中，$(\delta +\frac{1}{8})|P|$ 似乎应为 $(\delta +\frac{\varepsilon}{8})|P|$。
---

## Roth的三项等差数列定理：Fourier级数的另一个应用

我们给出Fourier级数的基本思想的另一个应用。经典的Roth三项等差数列定理讲的是：

::: theorem [Roth]
任给自然数的集合 $A\subset \mathbb{Z}_{\geqslant 0}$，$A$ 在自然数中的**上密度**定义为
\[
\overline{\rho}(A)=\limsup_{n\rightarrow \infty}\frac{|\{x\in A\mid x\leqslant A\}|}{n}.
\]
如果 $\overline{\rho}(A)>0$，那么 $A$ 中一定包含 $3$ 项的等差数列，
即存在 $x,y,z\in A$，使得 $y-x=z-y$。
:::

假设 $x<z<y$ 是这样的一个等差数列，那么，$x+y=2z$；反之，在整数集中，
$x+y=2z$ 意味着 $\{x,z,y\}$ 构成等差数列。

我们将证明这个定理的一个量化形式（Roth的定理是下面命题的推论），即

::: proposition
存在常数 $C>0$（$C=99$ 就可以），使得对任意给定 $\delta>0$，只要
\[
N>e^{e^{C\delta^{-1}}},
\]
对任意的 $A\subset \{0,1,\cdots,N-1\}$，如果 $|A| \geqslant \delta N$，
那么 $A$ 中必然有 $3$ 项的等差数列。
:::

在后面的证明中，我们假设 $N$ 是**奇数**（纯技术性假设）。

## 离散集合 $\{0,1,2,\cdots,N-1\}$ 上的Fourier级数

给定自然数 $N$，我们令 $\mathbf{T}_N=\{0,1,2,\cdots,N-1\}$，
这是 $\mathbb{Z}$ 在除 $N$ 的意义下的一个完全剩余类（余数的集合）。
我们现在考虑 $\mathbb{Z}$ 上以 $N$ 为周期的函数 $f$（复值函数），即 $f(x+N)=f(x)$，
其中 $x\in \mathbb{Z}$。这个函数可以被看作是 $\mathbf{T}_N$ 上的函数。

很明显，$\mathbf{T}_N$ 上复值函数的全体是有限维复线性空间，
我们把它记做 $L^2(\mathbf{T}_N)$。另外，$\operatorname{dim}_{\mathbb{C}}L^2(\mathbf{T}_N)=N$。
在 $L^2(\mathbf{T}_N)$ 我们可以定义如下自然的内积：
\[
(f,g)=\frac{1}{N}\sum_{x=0}^{N-1}f(x)\overline{g(x)}.
\]
与Fourier级数类似，我们有一组标准正交基：
$\bigl\{e^{i\frac{2\pi i}{N}kx}\bigm| k=0,1,\cdots,N-1\bigr\}$（请自己验证这一点）。

对任意的 $f\in L^2(\mathbf{T}_N)$，我们定义 $f$ 的Fourier变换：
\[
\widehat{f}\colon \mathbf{T}_N\rightarrow \mathbb{C},  \ \ \widehat{f}(k)=\sum_{x=0}^{N-1}f(x)e^{-\frac{2\pi i }{N} k x}.
\]

对任意的 $f,g\in L^2(\mathbf{T}_N)$，我们定义它们的卷积：
\[
f*g(x)=\sum_{y=0}^{N-1}f(x-y)g(y).
\]

我们总结关于Fourier变换和内积的性质：

- 1\) 我们有Fourier逆变换公式（用Fourier系数来写出函数本身）：
  \[
  \displaystyle f(x)=\frac{1}{N}\sum_{k=0}^{N-1}\widehat{f}(k)e^{\frac{2\pi i }{N} k x}.
  \]

  实际上，上面的表达式可以写成
  \[
  f=\sum_{k=0}^{n-1}\left(f,e^{i\frac{2\pi i}{N}kx}\right)e^{i\frac{2\pi i}{N}kx}.
  \]
  这就是在内积空间中把向量用标准正交基来表示。

- 2\) 勾股定理仍然成立：
  \[
  \displaystyle  \frac{1}{N}\sum_{k=0}^{N-1}|\widehat{f}(k)|^2=\sum_{x=0}^{N-1}|{f}(x)|^2.
  \]
  根据1)中的表达式，我们应该有
  \[
  (f,f)=\sum_{k=0}^{N-1}\Big|\frac{\widehat{f}(k)}{N}\Big|^2.
  \]
  整理即得。

- 3\) 在差一个常数的意义下，Fourier变换保持内积，即
  \[
  (\widehat{f},\widehat{g})=N(f,g) \ \ \Leftrightarrow \ \ \displaystyle  \frac{1}{N}\sum_{k=0}^{N-1}\widehat{f}(k)\overline{\widehat{g}(k)}=\sum_{x=0}^{N-1} {f}(x)\overline{g(x)}.
  \]

  根据1)和 $e^{\frac{2\pi i }{N} k x}$ 之间的相互正交性，我们有
  \[
  \begin{aligned}
  (f,g) &=\left(\sum_{k=0}^{N-1} \frac{\widehat{f}(k)}{N} e^{\frac{2\pi i }{N} k x},\sum_{\ell=0}^{N-1}\frac{\widehat{g}(\ell)}{N}e^{\frac{2\pi i }{N} \ell x}\right)\\
  &=\sum_{k=0}^{N-1} \sum_{\ell=0}^{N-1} \frac{\widehat{f}(k)}{N}\frac{\widehat{g}(\ell)}{N} \underbrace{\left(e^{\frac{2\pi i }{N} k x},e^{\frac{2\pi i }{N} \ell x}\right)}_{\ell=k}\\
  &=\sum_{k=0}^{N-1}\frac{\widehat{f}(k)}{N}\frac{\widehat{k}(\ell)}{N} \\
  &=\frac{1}{N}(\widehat{f},\widehat{g}).
  \end{aligned}
  \]

- 4\) 在频率空间来看，卷积就是正常的乘法：
  \[
  \displaystyle  \widehat{f*g}=\widehat{f} \cdot {\widehat{g}}.
  \]
  我们利用Fubini公式（交换求和顺序）：
  \[
  \begin{aligned}
  \widehat{f*g}(k)&=\sum_{x=0}^{N-1}\left(\sum_{y=0}^{N-1}f(x-y)g(y)e^{-\frac{2\pi i }{N} k x}\right)\\
  &=\sum_{x=0}^{N-1}\sum_{y=0}^{N-1} f(x-y)e^{-\frac{2\pi i }{N} k (x-y)}g(y)e^{-\frac{2\pi i }{N} k y}\\
   &=\sum_{y=0}^{N-1} \left(\sum_{x=0}^{N-1} f(x-y)e^{-\frac{2\pi i }{N} k (x-y)}\right)g(y)e^{-\frac{2\pi i }{N} k y}\\
    &=\sum_{y=0}^{N-1} \widehat{f}(k)g(y)e^{-\frac{2\pi i }{N} k y}\\
    &=\widehat{f}(k) \cdot {\widehat{g}}(k).
  \end{aligned}
  \]

- 5\) 卷积之后的 $L^2$ 范数：
  \[
  \displaystyle  \frac{1}{N}\sum_{k=0}^{N-1}|\widehat{f}(k)|^2|\widehat{g}(k)|^2=\sum_{x=0}^{N-1}|{f*g}(x)|^2.
  \]
  这是前面几个结论的直接推论。

## Roth定理的Fourier化

现在给定 $A\subset \mathbf{T}_N$，$|A|=\delta N$，
我们用 $\mathfrak{N}$ 表示 $A$ 中的 $3$ 项的等差数列的数目（总假定公差不是 $0$）。
我们现在 ${\rm mod}~N$ 的意义下考虑三项等差数列的方程
\[
x+y\equiv 2z \ {\rm mod}~N \ \ \Leftrightarrow \ \ z-x\equiv y-z \ {\rm mod}~N.
\]
我们想要在 $A^3\subset \mathbf{T}_N^3$ 中来找到 $(x,y,z)$，使得上面的方程成立。为此，我们定义
\[
\mathfrak{N}_1=\big|\{(x,y,z)\in A^3 \mid  x+y\equiv 2z \ {\rm mod}~N\}\big|.
\]
我们把注意力集中在 $\mathfrak{N}_1$ 上，暂且不考虑它与 $\mathfrak{N}$ 之间的关联。
根据频率函数之间的正交性，我们有
\[
\begin{aligned}
\mathfrak{N}_1=\sum_{x\in A}\sum_{y\in A}\sum_{z\in A}\frac{1}{N}\sum_{k=0}^{N-1}e^{-\frac{2\pi i }{N} k (x+y-2z)}.
\end{aligned}
\]
这是因为如果当 $ x+y\not\equiv 2z \ {\rm mod}~N$ 时，对 $k$ 求和给出零。所以，
\[
\begin{aligned}
\mathfrak{N}_1&=\sum_{x\in \mathbf{T}_N}\sum_{y\in \mathbf{T}_N}\sum_{z\in \mathbf{T}_N}\frac{1}{N}\sum_{k=0}^{N-1}e^{-\frac{2\pi i }{N} k (x+y-2z)}\mathbf{1}_{A}(x)\mathbf{1}_{A}(y)\mathbf{1}_{A}(z)\\
&=\frac{1}{N}\sum_{k=0}^{N-1} \Bigl(\bigl(\sum_{x\in \mathbf{T}_N} e^{-\frac{2\pi i }{N} k x}\mathbf{1}_{A}(x)\bigr)\bigl(\sum_{y\in \mathbf{T}_N} e^{-\frac{2\pi i }{N} k y}\mathbf{1}_{A}(y)\bigr)\bigl(\sum_{z\in \mathbf{T}_N} e^{\frac{2\pi i }{N} 2k z}\mathbf{1}_{A}(z)\bigr)\Bigr)\\
&=\frac{1}{N}\sum_{k=0}^{N-1} \widehat{\mathbf{1}_A}(k)^2\widehat{\mathbf{1}_A}(-2k),
\end{aligned}
\]
其中 $\mathbf{1}_A$ 是集合 $A\subset \mathbf{T}_N$ 的示性函数。
利用 $ \widehat{\mathbf{1}_A}(0)=\delta N$，最终，我们得到如下的等式：
\[
\begin{aligned}
\mathfrak{N}_1=\delta^3N^2+\frac{1}{N}\sum_{k=1}^{N-1} \widehat{\mathbf{1}_A}(k)^2\widehat{\mathbf{1}_A}(-2k).
\end{aligned}
\]

::: remark*
我们有如下两个直观（并不直观的直观）：

- 1\) 上面计数问题的首项有可以利用随机性给出如下的解释：
  假设 $A$ 在 $N$ 中是随机选取的，也就是说我们随机地从 ${0,1,\cdots,N-1}$ 中选取数，
  以概率为 $\delta$ 地机会选到了 $A$。
  此时，$x$ 和 $z$ 可以随便从 $A$ 中挑选，所以一共有 $\delta^2N^2$ 种选择，
  此时 $y=2z-x$ 还要落在 $A$ 中，这个概率就只有 $\delta$，所以一共有 $\delta^3N^2$ 种选择。
  根据这种看法，如果 $A$ 在 $\mathbf{T}_N$ 中是非常均匀分布的，
  那么我们期盼有很多三项 ${\rm mod}~N$-等差数列（大约有 $\delta^3 N^2$ 个）。

- 2\) 假设 $A\subset \mathbf{T}_N$ 是随机分布的（不管怎么定义），
  当 $N$ 很大的时候，如果把 $A$ 看成是 $\mathbf{T}_N$ 中的数列，
  我们直观上可以认为它们是**等分布**的，根据Weyl的等分布判据，
  $\mathbf{1}_{A}$ 这个函数的Fourier系数（任意一个非零系数）是 $o(|A|)$ 的，
  $|A|$ 算是这个序列的项数。

- 3\) 假设 $\mathbf{1}_A$ 的非零Fourier系数很小，即存在 $\varepsilon >0$ 很小，
  使得对任意的 $k\neq 0$，我们都有 $|\widehat{\mathbf{1}_A}(k)|\leqslant \varepsilon N$。

  此时，我们有
  \[
  \begin{aligned}
  \Big|\sum_{k=1}^{N-1} \widehat{\mathbf{1}_A}(k)^2\widehat{\mathbf{1}_A}(-2k)\Big|&\leqslant \bigl(\max_{k\neq 0}|\widehat{\mathbf{1}_A}(-2k)|\bigr)\sum_{k=1}^{N-1} |\widehat{\mathbf{1}_A}(k)|^2 \\
  &\leqslant \varepsilon N  \sum_{k=0}^{N-1} |\widehat{\mathbf{1}_A}(k)|^2\\
  &= \varepsilon \delta N^3.
  \end{aligned}
  \]
  所以，如果 $\varepsilon$ 足够的小，我们就得到
  \[
  \mathfrak{N}_1\geqslant \delta^3N^2-\varepsilon \delta N^2=\delta N^2(\delta^2 -\varepsilon)>0.
  \]
  那么，$\mathfrak{N}_1$ 是大于 $0$ 的（实际上有 $\delta^3 N^2$ 那么多，
  如果 $\varepsilon\approx 0.5\times \delta^2$）。

:::

根据上面的讨论，我们引入如下概念：

::: definition
给定 $\mathbf{T}_N$ 的子集 $A$。如果存在 $\varepsilon>0$，使得对任意的 $k\neq 0$，都有
\[
|\widehat{\mathbf{1}_A}(k)|\leqslant \varepsilon N,
\]
我们就称 $A$ 是 **$\varepsilon$-随机的**或者是 **$\varepsilon$-等分布**的。
:::

我们现在给出Roth定理证明的梗概。有两种情形需要处理：

- 1\) $A$ 是随机分布的。

  我们先证明有很多三项的 ${\rm mod}~N$-等差数列，然后再证明等差数列也存在。

- 2\) $A$ 的分布不随机。

  在这个条件下，我们证明能在 $\mathbf{T}_N$ 中（不是 $A$ 中）找到很长的一个等差数列 $P_1$，
  使得 $A_1 = A\cap P_1$ 在 $P_1$ 中的密度要相对于 $A$ 在 $\mathbf{T}_N$ 中的密度大一些，
  即存在 $\varepsilon'>0$ 只依赖于 $\delta$，使得
  \[
  |A_1|\geqslant \bigl(\delta+ \varepsilon'\bigr)|P|,
  \]
  我们把 $\mathbf{T}_N$ 替换为 $P$，把 $A$ 替换为 $A_1$。此时，子集密度增长了 $\varepsilon'$。

我们不停地进行2)这个操作：如果1)在某一步成立，我们就完成了Roth定理的证明；否则，经过 $m$ 次之后，
最终导致某个 $A_m$（$m\gg 1$）在 $P_m$ 的密度 $>1$，矛盾。

## $A$ 是相对随机分布的情形：$|\widehat{\mathbf{1}_A}(k)|\leqslant \varepsilon N$，其中 $\varepsilon < \dfrac{1}{8}\delta^2$

在这种情况下，根据前面的计算，我们有
\[
\mathfrak{N}_1\geqslant \delta^3N^2-\varepsilon \delta N^2\geqslant \frac{7}{8}\delta^3 N^2.
\]
其中，$\mathfrak{N}_1$ 是三项的 ${\rm mod}~N$-等差数列的个数，
我们想得到真正的三项等差数列的个数的下界估计。

我们有如下的观察：

*令 $A_{\frac{1}{3}}=A\cap \big[\frac{N}{3},\frac{2N}{3}\big)$，如果 $x,z \in A_{\frac{1}{3}}$，
那么满足 $x+y\equiv 2z \ {\rm mod}~N$ 的 $y\in A$，一定满足
$x+y=2z$。*

所以，我们令
\[
\begin{aligned}
&\mathfrak{N}_0=\Big|\bigl\{(x,y,z)\in  A^3 \big| x+y = 2z\bigr\}\Big|, \\
&\mathfrak{N}_2=\Big|\bigl\{(x,y,z)\in  A_{\frac{1}{3}}\times A \times A_{\frac{1}{3}} \bigm|  x+y\equiv 2z \ {\rm mod}~N\bigr\}\Big|.
\end{aligned}
\]
那么
\[
\mathfrak{N}_0\geqslant \mathfrak{N}_2.
\]
利用三角函数之间的相互正交性，我们仿照 $\mathfrak{N}_1$ 的计算，就有
\[
\begin{aligned}
\mathfrak{N}_2&=\sum_{x\in A_{\frac{1}{3}}}\sum_{y\in A}\sum_{z\in A_{\frac{1}{3}}}\frac{1}{N}\sum_{k=0}^{N-1}e^{-\frac{2\pi i }{N} k (x+y-2z)}\\
&=\frac{1}{N}\sum_{k=0}^{N-1} \widehat{\mathbf{1}_{ A_{\frac{1}{3}}}}(k)\widehat{\mathbf{1}_A}(k)\widehat{\mathbf{1}_{ A_{\frac{1}{3}}}}(-2k)\\
&=\delta\big|A_{\frac{1}{3}}\big|^2+\frac{1}{N}\sum_{k=1}^{N-1} \widehat{\mathbf{1}_{ A_{\frac{1}{3}}}}(k)\widehat{\mathbf{1}_A}(k)\widehat{\mathbf{1}_{ A_{\frac{1}{3}}}}(-2k).
\end{aligned}
\]
我们对后一项进行下面的控制（**$N$ 是奇数**，
所以 $k\mapsto -2k$ 是 $\mathbf{T}_N$ 到自身的双射（${\rm mod}~N$））：
\[
\begin{aligned}
&\Big|\sum_{k=1}^{N-1} \widehat{\mathbf{1}_{ A_{\frac{1}{3}}}}(k)\widehat{\mathbf{1}_A}(k)\widehat{\mathbf{1}_{ A_{\frac{1}{3}}}}(-2k)\Big|\\
\leqslant& \max_{k\neq 0}|\widehat{\mathbf{1}_A}(k)|\times \sum_{k=1}^{N-1} \big|\widehat{\mathbf{1}_{ A_{\frac{1}{3}}}}(k)\widehat{\mathbf{1}_{ A_{\frac{1}{3}}}}(-2k)\big|\\
\leqslant&   \varepsilon N \Bigl( \sum_{k=1}^{N-1} \big|\widehat{\mathbf{1}_{ A_{\frac{1}{3}}}}(k)\big|^2\Bigr)^\frac{1}{2} \Bigl( \sum_{k=1}^{N-1} \big|\widehat{\mathbf{1}_{ A_{\frac{1}{3}}}}(-2k)\big|^2\Bigr)^\frac{1}{2}\\
{\color{red}=}& ~\varepsilon N \sum_{k=1}^{N-1} \big|\widehat{\mathbf{1}_{ A_{\frac{1}{3}}}}(k)\big|^2\\
\leqslant& \varepsilon N \sum_{k= 0}^{N-1} \big|\widehat{\mathbf{1}_{ A_{\frac{1}{3}}}}(k)\big|^2\\
=&\varepsilon N^2|A_{\frac{1}{3}}|.
\end{aligned}
\]
从而，
\[
\begin{aligned}
\mathfrak{N}_2&\geqslant \delta\big|A_{\frac{1}{3}}\big|^2-\varepsilon N|A_{\frac{1}{3}}|\geqslant  \delta\big|A_{\frac{1}{3}}\big|^2-\frac{\delta^2}{8} N|A_{\frac{1}{3}}|.\end{aligned}
\]
最终，我们得到
\[
\mathfrak{N}_0 \geqslant  \delta\big|A_{\frac{1}{3}}\big|\Bigl(|A_{\frac{1}{3}}|-\frac{\delta}{8} N\Bigr).
\]
我们根据 $A_{\frac{1}{3}}$ 的元素数目的多少，作以下的考虑：

- 假设 $|A_{\frac{1}{3}}|\geqslant \dfrac{1}{4}\delta N$。

  此时，我们有
  \[
  \mathfrak{N}_0 \geqslant  \frac{1}{32}\delta^3 N^2.
  \]

  我们注意到 $\mathfrak{N}_0$ 中可能还计算了公差是零的三项等差数列（即 $x=y=z$），
  这样的等差数列个数至多有 $|A|=\delta N$ 个，所以，
  \[
  \mathfrak{N} \geqslant  \frac{1}{32}\delta^3 N^2-\delta N=\delta N\bigl(\frac{1}{32}\delta^2 N-1\bigr).
  \]

  所以，为了保证有三项等差数列，**我们总是假设 $N>33\delta^{-2}$**，此时，
  \[
  \mathfrak{N} \geqslant  \frac{1}{32}\delta N >0.
  \]

- 假设 $|A_{\frac{1}{3}}|< \dfrac{1}{4}\delta N$。

  根据定义，$A_{\frac{1}{3}}=A\cap \big[\frac{N}{3},\frac{2N}{3}\big)$。
  我们考虑两个等差数列 $P_1= [0,\dfrac{N}{3})$ 和 $P_2 =[\dfrac{2N}{3},N)$（中的整数），从而
  \[
  |A\cap P_1 |+|A\cap P_2| \geqslant \frac{3}{4}\delta N.
  \]
  所以至少有一个数列，不妨设是 $P=P_1$，使得 $|A\cap P|\geqslant \frac{3}{8}\delta N$。
  $P$ 中的元素个数不超过 $\dfrac{N}{3}$ 个，从而，$A\cap P$ 在 $P$ 中的占的比例至少是
  \[
  \frac{3}{8}\delta N\div \frac{1}{3}N= \delta +\frac{1}{8}\delta.
  \]

作为总结，我们证明了

::: lemma
假设 $N$ 是奇数，$A\subset \{0,1,\cdots,N-1\}$，$|A| \geqslant \delta N$ 并且 $N>33\delta^{-2}$。
如果 $A$ 中不含三项等差数列，那么如下两种情形必居其一：

(a) 对任意的 $\varepsilon \leqslant \dfrac{\delta^2}{8}$，
    $A$ 在 $ \{0,1,\cdots,N-1\}$ 中不是 $\varepsilon$-随机的；

(b) 存在一个长度至少是 $\dfrac{1}{3}N$ 的等差数列 $P$，使得
    \[
    |A\cap P|\geqslant \delta(1+\frac{1}{8})|P|.
    \]
    即 $A$ 在 $P$ 中密度比以前增长了至少 $\!12.5\%$。

:::

## $A$ 不是相对随机分布的情形：对任意的 $\varepsilon < \dfrac{1}{8}\delta^2$，存在 $k=k(\varepsilon)\neq 0$，使得 $|\widehat{\mathbf{1}_A}(k)|>\varepsilon N$

先证明一个引理：

::: lemma
对于任意的 $f,g\in L^2(\mathbf{T}_N)$，我们有
\[
|\widehat{f}(k)||\widehat{g}(k)|\leqslant \sum_{x\in \mathbf{T}_N}\Big|\sum_{y\in \mathbf{T}_N}f(y)\overline{g(y-x)}\Big|.
\]
:::

::: proof
令 $\displaystyle F(x)=\sum_{y\in \mathbf{T}_N}f(y)\overline{g(y-x)}$，
我们计算它的Fourier系数（和卷积的Fourier系数的计算一样）：
\[
\begin{aligned}
\widehat{F}(k)&=\sum_{x\in \mathbf{T}_N}\sum_{y\in \mathbf{T}_N}f(y)\overline{g(y-x)}e^{-\frac{2\pi i }{N} k x}\\
&=\sum_{x\in \mathbf{T}_N}\sum_{y\in \mathbf{T}_N}f(y)\overline{g(y-x)e^{\frac{2\pi i }{N} k (x-y)}}e^{-\frac{2\pi i }{N} k y}\\
&=\sum_{y\in \mathbf{T}_N}f(y)e^{-\frac{2\pi i }{N} k y}\cdot\Bigl(\sum_{x\in \mathbf{T}_N}\overline{g(y-x)e^{\frac{2\pi i }{N} k (x-y)}}\Bigr)\\
&=\widehat{f}(k)\overline{\widehat{g}(k)}.
\end{aligned}
\]
根据 $\|\widehat{F}\|_{L^\infty}\leqslant \|F\|_{L^1}$（因为
$\displaystyle\big|\widehat{F}(k)\big|\leqslant \sum_{x=0}^{N-1}|F(x)|$。），我们就得到了结论。
:::

::: remark*
这个不等式表明（利用抽屉原理），如果 $f$ 和 $g$ 在某个共同的频率上都是大的（$\geqslant cN$），
那么 $f$ 和 $g$ 的某个平移的内积就会很大（$\geqslant c^2$）。
:::

我们的目标是说明在此情形下（即上面引理A中的 $(a)$ 情形），
上一步引理中的 $(b)$ 也成立（密度的增长可能比 $\!12.5\%$ 要少），
即我们要找一个 $L$ 项等差数列 $P_0$（公差为 $d$），
使得 $|A\cap P_0| \geqslant (\delta+\varepsilon' )|P_0|$，其中 $L$ 要相对比较大。
当 $\varepsilon$ 给定的情况下，我们将会取 $\varepsilon'=\frac{1}{4}\varepsilon$，
所以，根据 $\varepsilon<\dfrac{1}{8}\delta^2$，我们知道 $\delta$ 将增长 $O(\delta^2)$。

我们分两步来完成这个情况的分析：

- 第一) 对任意的非零频率 $k \neq 0$，
  我们都能找到 $\mathbf{T}_N$ 中的准等差数列（${\rm mod}~N$ 的意义下）：
  \[
  B=\{\xi_i \}_{i=1,2,\cdots,m+m'},
  \]
  其中
  \[
  0\leqslant \xi_1<\xi_2<\cdots \xi_m \leqslant N-1, \ 0\leqslant \xi_{m+1}<\xi_{m+2}<\cdots<\xi_{m+m'} \leqslant N-1,
  \]
  并且除了 $i=m$ 之外，$\xi_{i+1}=\xi_i+d$；$\xi_{m+1} =\xi_m+d-N$，$d(m+m')\leqslant N-1$，
  使得该准等差数列的项数
  \[
  m+m'\geqslant \frac{1}{4}\sqrt{N}
  \]
  而且
  \[
  |\widehat{\mathbf{1}_B}(k)|\geqslant \frac{1}{2}|B|.
  \]

  现在证明上面的论述：对于固定的 $k$，我们知道存在 $\ell_1,\ell_2 \in \mathbf{T}_N$，
  使得下面两个不等式同时成立：
  \[
  0<\ell_2-\ell_1\leqslant \sqrt{N},  \ \ k(\ell_2-\ell_1) \ {\rm mod}~N~\leqslant \sqrt{N}.
  \]
  （考虑平面上 $N$ 个点 $\{(s,sk ~{\rm mod}~N)\mid s=0,1,\cdots,N-1\}$，
  它们都落在 $[0,N-1]\times [0,N-1]$ 中，
  我们将 $[0,N-1]\times [0,N-1]$ 平均分成 $\left\lfloor {\sqrt{N-1}} \right\rfloor^2$ 份，
  总共小于 $N$ 份，那么必有两个点落在同一个小格子中，它们就满足要求）
  令 $d=\ell_2-\ell_1$，
  我们现在定一个 $\mathbf{T}_N$ 中的准等差数列（在考虑 $~{\rm mod}~N$ 的意义下）：
  \[
  \begin{aligned}
  B&=\{\cdots, -2d,-d, 0, d, 2d, \cdots \}\\
  &=\{ \xi_1=N-(m-1)d,\xi_2=N-(m-2)d, \cdots, \xi_m=N\} \\
  &\ \ \ \cup \{\xi_{m+1}= d, \xi_{m+2}=2d, \cdots,\xi_{m+m'}=m'd\},
  \end{aligned}
  \]
  其中 $m=m'=\frac{1}{8}\left\lfloor {\frac{N}{d}} \right\rfloor$，
  从而上面两个集合不相交（看长度），这表明
  \[
  |B|\geqslant \frac{1}{4}\left\lfloor {\frac{N}{d}} \right\rfloor= \frac{1}{4}\sqrt{N}.
  \]
  我们现在将 $B$ 选取得短一点，使得 $|B|= \left\lfloor {\dfrac{1}{4}\sqrt{N}} \right\rfloor+1$。

  现在计算
  \[
  \begin{aligned}
  \big|\widehat{\mathbf{1}_B}(k)-|B|\big|&\leqslant \big|\sum_{x\in B}\mathbf{1}_B(x)(e^{-\frac{2\pi i}{N}kx}-1)\big|\leqslant\sum_{x\in B} \big|e^{-\frac{2\pi i}{N}kx}-1\big|\\
  &=\sum_{1\leqslant |j|\leqslant m=\frac{|B|}{2}} \big|e^{-\frac{2\pi i}{N}jkd}-1\big|.
  \end{aligned}
  \]
  我们下面运用不等式 $|e^{ix}-1|\leqslant |x|$（看弧长并利用两点之间线段最短，上学期已经证明）。
  由于（请参考 $d$ 的构造）
  \[
  0\leqslant dk ~{\rm mod}~ N\leqslant \sqrt{N},
  \]
  所以存在整数 $s$，使得 $0\leqslant dk-sN\leqslant \sqrt{N}$，
  从而 $e^{-\frac{2\pi i}{N}jkd}=e^{-\frac{2\pi i}{N}j(kd-sN)}$，从而
  \[
  \begin{aligned}
  \big|\widehat{\mathbf{1}_B}(k)-|B|\big|&\leqslant\sum_{|j|\leqslant \frac{|B|}{2}}\frac{2\pi |j|(kd-sN)}{N}\\
  &\leqslant \frac{2\pi }{\sqrt{N}}\sum_{|j|\leqslant \frac{|B|}{2}}|j|\\
  &\leqslant \frac{2\pi}{\sqrt{N}}\frac{1}{2}\bigl(\frac{|B|}{2}\bigr)^2=\frac{1}{2}|B| \times \frac{\pi}{4}\frac{|B|}{\sqrt{N}}.
  \end{aligned}
  \]
  根据 $B$ 的构造，后一个因子 $\displaystyle  \frac{\pi}{4}\frac{|B|}{\sqrt{N}}<1$，从而
  \[
  \begin{aligned}
  \big|\widehat{\mathbf{1}_B}(k)-|B|\big|\leqslant \frac{1}{2}|B|.
  \end{aligned}
  \]
  这就给出了第一步的证明。

- 第二) 对于上一步中构造出来的 $B$，我们能找到它的一个平移 $B+x$（仍然落在 $\mathbf{T}_N$ 中，
  $N-1$ 被平移成了 $x-1$），使得
  \[
  |A\cap (B+x)|\geqslant (\delta+\frac{1}{4}\varepsilon)|B|.
  \]

  我们首先将上面的这个叙述翻译成分析的语言，要证明的不等式等价于存在 $x\in \mathbf{T}_N$，使得
  \[
  \sum_{y\in \mathbf{T}_N}\mathbf{1}_A(y)\mathbf{1}_B(y-x)\geqslant  (\delta+\frac{1}{4}\varepsilon)|B|.
  \]
  如果令 $f_A(x)=\mathbf{1}_A(x)-\delta$，那么，
  \[
  |A\cap (B+x)|\geqslant (\delta+\frac{1}{4}\varepsilon)|B| \ \ \Leftrightarrow \ \ \sum_{y\in \mathbf{T}_N}f_A(y)\mathbf{1}_B(y-x)\geqslant  \frac{1}{4}\varepsilon|B|.
  \]
  另外，$f_A$ 除了零频率以外，和 $\mathbf{1}_A$ 是一样的。
  特别地，对某个给定的 $k=k(\varepsilon)\neq 0$，我们有
  \[
  |\widehat{f_A}(k)|>\varepsilon N.
  \]

  我们现在令 $H(x)=\displaystyle \sum_{y\in \mathbf{T}_N}f_A(y)\mathbf{1}_B(y-x)$，
  根据已经证明的引理，我们得到（在频率 $k$ 上考虑）：
  \[
  \sum_{x\in \mathbf{T}_N}|H(x)|\geqslant |\widehat{f_A}(k)||\widehat{\mathbf{1}_B}(k)|\geqslant \frac{\varepsilon N}{2}|B|.
  \]
  利用 $\displaystyle \sum_{x\in \mathbf{T}_N}H(x)=0$（因为 $f_A$ 没有频率为零的分量），我们得到
  \[
  \sum_{x\in \mathbf{T}_N}|H(x)|+H(x)\geqslant \frac{\varepsilon N}{2}|B|.
  \]
  从而存在某个 $x$，使得
  \[
  |H(x)|+H(x)\geqslant \frac{\varepsilon}{2}|B|.
  \]
  所以，
  \[
  H(x)\geqslant \frac{\varepsilon}{4}|B|.
  \]

  我们注意到，经过平移之后，$B+x$ 仍然形如
  \[
  B=\{\xi_i \}_{i=1,2,\cdots,m+m'},
  \]
  其中，
  \[
  0\leqslant \xi_1<\xi_2<\cdots \xi_m \leqslant N-1, \ 0\leqslant \xi_{m+1}<\xi_{m+2}<\cdots<\xi_{m+m'} \leqslant N-1.
  \]

综合上面两个步骤的结论，我们就得到了 $\mathbf{T}_N$ 中的准等差数列
\[
B=\{\xi_i \}_{i=1,2,\cdots,m+m'},
\]
其中
\[
0\leqslant \xi_1<\xi_2<\cdots \xi_m \leqslant N-1, \ 0\leqslant \xi_{m+1}<\xi_{m+2}<\cdots<\xi_{m+m'} \leqslant N-1.
\]
并且，除了 $i=m$ 之外，$\xi_{i+1}=\xi_i+d$；$\xi_{m+1} =\xi_m+d-N$，
$d(m+m')\leqslant N-1$ 并且该准等差数列的项数 $m+m'\geqslant \dfrac{1}{4}\sqrt{N}$，使得
\[
|A\cap B|\geqslant (\delta+\frac{1}{4}\varepsilon)|B|.
\]

然而，我们需要找到等差数列而不是准等差数列，我们再修正一下。$B$ 可以分成两个真正的等差数列：
\[
P_1=\{ \xi_1<\xi_2<\cdots<\xi_m\}, \ \ P_2=\{ \xi_{m+1}<\xi_{m+2}<\cdots<\xi_{m+m'} \}.
\]
我们再分两种情况来讨论：

- $P_1$ 和 $P_2$ 之中有某个序列特别短，即长度不超过 $\dfrac{1}{8}\varepsilon |B|$。

  不妨假设 $|P_1|\leqslant \dfrac{1}{8}\varepsilon |B|$，此时
  \[
  |P_2\cap A|\geqslant |B\cap A|-|P_1\cap A|\geqslant (\delta+\frac{1}{8}\varepsilon)|B|\geqslant (\delta+\frac{1}{8}\varepsilon)|P_2|.
  \]
  此时，$A$ 在 $P_2$ 中占了相当大的比重并且 $P_2$ 也足够长：
  \[
  |P_2|\geqslant \Bigl(\frac{1}{4}-\frac{\varepsilon}{8}\Bigr)\sqrt{N}\approx   \frac{1}{4}\sqrt{N}.
  \]

- $P_1$ 和 $P_2$ 都比较长，即 $\min\{|P_1|,|P_2|\}\geqslant \frac{1}{8}\varepsilon |B|$。

  此时，因为 $A$ 在 $P_1\cup P_2$ 中的密度是至少是 $(\delta+\frac{1}{8}\varepsilon)|B|$，所以，
  $A$ 至少在某一个 $P_i$ 中的密度是 $(\delta+\frac{1}{8}\varepsilon)|B|$。

作为总结，我们证明了

::: lemma
如果有某个非零的频率 $k\neq 0$，使得 $|\widehat{\mathbf{1}_A}(k)|>\varepsilon N$，
那么一定存在一个长度至少是 $\dfrac{\varepsilon}{32}\sqrt{N}$ 等差数列 $P$，使得
\[
|A\cap P|\geqslant (\delta +\frac{1}{8})|P|.
\]
:::

综合上面两种情况的结论（取 $\varepsilon=\dfrac{1}{8}\delta^2$），我们证明了：

::: proposition
假设 $A\subset \{0,1,\cdots,N-1\}$，$|A| \geqslant \delta N$ 并且 $N>33\delta^{-2}$。
那么，如下两种情形必居其一：

(a) $A$ 中含三项等差数列；

(b) 存在一个长度至少是 $\dfrac{\delta^2}{256}\sqrt{N}$ 的等差数列 $P$，
    使得 $\displaystyle |A\cap P|\geqslant (\delta+\frac{\delta^2}{64})|P|$。

:::

## Roth定理证明的完成

我们要对之前得到结论进行迭代。我们不停地利用上面的性质并假设第一种情况不能发生。
第一次迭代，我们得到一个等差数列 $P_1$，$N_1=|P_1|\geqslant \dfrac{\delta^2}{256}\sqrt{N}$，
$|A\cap P_1|=\delta_1 |P_1|$，其中新的密度 $\delta_1\geqslant \delta+\frac{1}{64}\delta^2$。
只要新得到的等差数列的长度不是零，我们就可以迭代。所以，连续做
$k=\dfrac{62}{\delta}$ 次，密度就从 $\delta$ 变成了 $\delta_k\geqslant 2\delta$。

我们再做 $k=\dfrac{62}{2\delta}$ 次，密度就从 $2\delta$ 变成了 $4\delta$；
再做 $k=\dfrac{62}{4\delta}$ 次，密度就从 $4\delta$ 变成了 $8\delta$；以此类推，通过不超过
\[
\frac{64}{\delta}\Bigl(1+\frac{1}{2}+\cdots+\frac{1}{2^{\ell-1}}\Bigr)\longrightarrow \frac{128}{\delta}
\]
次，密度就变成了 $2^\ell \delta$。

当然，我们不可能做 $K=\dfrac{128}{\delta}$ 次操作，否则密度变成了无穷大（超过 $1$）就不行。

第一次操作后，等差数列的长度 $N$ 变成了 $N_1 \geqslant \dfrac{\delta^2}{256}\sqrt{N}$；第二次操作，
我们得到的等差序列的长度是
\[
N_2 \geqslant \dfrac{\delta_1^2}{256}\sqrt{N_1}\geqslant  \dfrac{\delta^2}{256}\sqrt{N_1}
\]
我们这里用到了每一次操作，密度 $\delta_k$ 是增长的。
所以，做了 $K$ 次操作之后，等差数列的长度至少是 $\dfrac{1}{256^2}\delta^4N^{\frac{1}{2^K}}$。

我们希望做到第 $K$ 次时，$\dfrac{1}{256^2}\delta^4N^{\frac{1}{2^K}}\geqslant 1$，这就给出了矛盾。
这等价于
\[
\log N\geqslant 2^{\frac{128}{\delta}}\bigl(16\log 2-4\log\delta\bigr).
\]
从而，$N\geqslant e^{e^{C \delta^{-1}}}$（可以具体算出 $C$ 的大小）。这就完成了定理的证明。

## Fourier级数的另一个应用：Poisson核

我们首先叙述如下关于调和函数的经典问题，这个问题在数学和物理中都有举足轻重的地位（然而，
我们没有太多的时间深入了解）：

假定 $f$ 是 $\mathbf{T}=\mathbf{S}^1$ 上的（复数或者实数值）连续函数，
能否在单位圆盘 $D=\{z\in \mathbb{C}\bigm|  |z|\leqslant 1\}$ 上面找到连续函数 $u$，
使得 $u$ 在 $D$ 的内部 $\mathring{D}$ 是 $C^2$ 的并且
\[
\left\{
\begin{aligned}
 \triangle u(x) &=0,  \ \ x\in \mathring{D},\\
u\big|_{\partial D}&=f,
 \end{aligned}\right.
\]
其中 $\triangle u=\dfrac{\partial^2 u}{\partial x^2}+\dfrac{\partial^2 u}{\partial y^2}$。

我们的基本想法来自于Fourier分析和线性代数。
Fourier级数的理论表明，$f$ 可以用一组基 $e^{2\pi i kx}$ 的线性组合来表示，
我们先假设 $f=e^{2\pi i kx}$，如果能对这样的情形解决问题，也就说对任意的 $k\in \mathbb{Z}$，能找到
\[
\left\{
\begin{aligned}\triangle u_k &=0,  \ \ x\in \mathring{D},\\
u_k\big|_{\partial D}&= e^{2\pi i k x}.\end{aligned}\right.
\]
那么，由于 $f(x)=\displaystyle \sum_{k\in \mathbb{Z}} \widehat{f}(k)e^{2\pi i kx}$（当然，
更准确的说法需要对 $f$ 的正则性有限制或者在 $L^2$ 中谈论这个等式，
但是我们直观上可以这样来考虑问题），我们有理由相信
\[
f(x)= \sum_{k\in \mathbb{Z}} \widehat{f}(k)u_k(x).
\]

我们先假设 $k\in \mathbb{Z}_{\geqslant 0}$，此时，从复变量函数的观点，我们有
\[
z^k\big|_{r=1} = e^{2\pi i k x}.
\]
（参考第十一次作业中的s与S组习题，特别是s10)）首先，我们有
\[
\triangle z^k=0.
\]
这个直接计算可得（从复变函数的观点这个很自然）。
实际上，对于上述计算在 $z\neq 0$ 处，但是，$z^k$ 在 $0$ 处是不良好定义。
为此，当 $k<0$ 时，我们考虑复共轭 $\overline{z^{|k|}}$，此时，我们仍然有
\[
\overline{z^{|k|}}\Big|_{r=1} = e^{2\pi i k x}, \ \ k<0.
\]
综合上述，我们有
\[
\left\{\begin{aligned}\triangle u_k&=0, \\
 u_k\big|_{\partial D}&= e^{2\pi i k x},\end{aligned}\right. \ \Rightarrow \  \ u_k=\begin{cases}z^k, \ \ & k\geqslant 0;\\
\overline{z^{|k|}},  \ & k<0.
\end{cases} .
\]
所以，我们期望有
\[
\begin{aligned}
u(z)&=  -\widehat{f}(0)+\sum_{k\geqslant 0} \widehat{f}(k)z^k+\sum_{k\geqslant 0} \widehat{f}(-k)\overline{z}^k\\
&= -\widehat{f}(0)+\sum_{k\geqslant 0} \int_{0}^{2\pi} f(t) \bigl(e^{- i {t}}z\bigr)^k+f(t) \bigl(e^{ i {t}}\bar{z}\bigr)^k\frac{d{t}}{2\pi}\\
&\stackrel{|z|<1}{=} -\widehat{f}(0)+\int_{0}^{2\pi} f(t)\Bigl( \frac{1}{1-e^{- i {t}}z}+\frac{1}{1-e^{ i {t}}\bar{z}}\Bigr)\frac{d{t}}{2\pi}\\
&=\int_{0}^{2\pi} f(t)\Bigl( \frac{1}{1-e^{- i {t}}z}+\frac{1}{1-e^{ i {t}}\bar{z}}-1\Bigr)\frac{d{t}}{2\pi}.
\end{aligned}
\]
如果令 $z=re^{i\theta}$，那么
\[
\begin{aligned}
u(z)&=\int_{0}^{2\pi} f(t)\frac{1-r^2}{1+r^2-2r\cos(\theta-t)}\frac{d{t}}{2\pi}.
\end{aligned}
\]
据此，我们引入**Poisson核**：
\[
P_r(\theta)=\frac{1-r^2}{1+r^2-2r\cos(\theta)}, \ r\in [0,1)
\]
那么，
\[
u(z)=P_r*f.
\]
根据构造方式，我们知道 $P_r(\theta)>0$ 并且
\[
P_r(\theta)=\sum_{k\in \mathbb{Z}} r^{|k|}e^{ik\theta}.
\]
利用一致收敛性与Lebesgue控制收敛，我们知道
\[
\int_{0}^{2\pi} P_r(\theta)\frac{d\theta}{2\pi}=1.
\]
我们声明，实际上 $P_r(\theta)$ 满足下面的性质：
\[
\int_{\delta \leqslant |\theta| \leqslant \pi}|P_r(\theta)|\frac{d\theta}{2\pi} \rightarrow 0, \ \  r\rightarrow 1.
\]
按照定义，我们知道
\[
\begin{aligned}
P_r(\theta)&=\frac{1-r^2}{1+r^2-2r\cos(\theta)}=\frac{1-r^2}{(1-r)^2+2r(1-\cos \theta)}\\
&\leqslant \frac{1-r^2}{2r(1-\cos \theta)}\leqslant  \frac{1-r^2}{2r(1-\cos \delta)}\rightarrow 0.
\end{aligned}
\]
这说明，$P_r(\theta)$ 是一个好的积分核，所以有一致收敛：
\[
\lim_{r\rightarrow 1}P_r * f= f.
\]
这表明，$P_r*f\big|_{\mathbf{S}^1}=f$。

下面证明当 $r<1$ 的时候，如果将 $P_r(\theta)$ 视作是 $(x,y)$（或者 $(r,\theta)$）的函数，我们有
\[
\triangle P_r(\theta)=0.
\]
我们知道
\[
\triangle =\frac{\partial^2}{\partial r^2}+\frac{1}{r}\frac{\partial}{\partial r}+\frac{1}{r^2}\frac{\partial^2}{\partial \theta^2}.
\]
然而，要直接验证 $\triangle P_r(\theta)=0$ 的计算并不是很简单。
我们可以采取有两种方式来验证，一种是用 $P_r(\theta)$ 的定义：
\[
P_r(\theta)=\sum_{k\in \mathbb{Z}} r^{|k|}e^{ik\theta}.
\]
每个分量 $z^k$ 或 $\overline{z}^k$ 均为调和函数。
为了证明 $\triangle$ 与求和可交换（从而可以放到和式里面），我们利用Lebesgue控制收敛的推论即可；
第二种方法是观察到，如果 $\triangle f=0$，那么将 $f$ 旋转之后仍然成立（参考第十二次习题的s），从而，
我们只要对 $\theta=0$ 验证即可，此时直接计算会简单很多。

最终，为了证明在 $|z|<1$ 处有 $\triangle P_r * f=0$，再用Lebesgue控制收敛的推论。

综上所述，我们找到了
\[
\left\{
\begin{aligned}
 \triangle u(x) &=0,  \ \ x\in \mathring{D},\\
u\big|_{\partial D}&=f,
 \end{aligned}\right.
\]
的（唯一解）$u(r,\theta)=P_r * f$。
