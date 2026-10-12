---
title: 作业：素数的倒数和，Basel 问题的 Euler“证明”
---

## 基本习题

### 习题A：连续函数的定义和基本性质

- A1)（函数极限的Cauchy判别准则）给定函数
  $f\colon (a,x_0)\cup (x_0,b)\rightarrow \mathbb{R}$。
  那么，$f$ 在 $x_0$ 处有极限当且仅当对任意的 $\varepsilon>0$，
  存在 $\delta>0$，使得对任意的 $x_1,x_2\in (x_0-\delta,x_0+\delta)$，
  都有 $|f(x_1)-f(x_2)|<\varepsilon$。

- A2) 假设 $I$ 是一个非空的区间并且 $I$ 不是一个点，
  证明，$I$ 上的连续函数 $C(I)$ 所构成的 $\mathbb{R}$-线性空间是无限维的。

- A3)（重要）假设 $(X,d_X)$ 和 $(Y,d_Y)$ 是距离空间，
  $f\colon X\rightarrow Y$ 是映射。假设 $x_0\in X$，
  如果对任意 $X$ 中的点列 $\{x_n\}_{n\geqslant 1}$，
  $x_n\stackrel{d_X}{\longrightarrow}x_0$，
  我们都有 $f(x_n)\stackrel{d_Y}{\longrightarrow}f(x_0)$，
  我们就称 $f$ 在 $x_0$ 处是连续的。如果 $f$ 在一切 $x\in X$ 处均连续，
  那么我们就称 $f$ 是距离空间之间的**连续映射**。
  假设 $(X,d_X)$，$(Y,d_Y)$ 和 $(Z,d_Z)$ 是三个距离空间，
  $f\colon X\rightarrow Y$，$g\colon Y\rightarrow Z$ 均为连续映射。
  证明，它们的复合 $g\circ f\colon  X\rightarrow Z$ 也是连续映射。

- A4) 假设 $(X,d_X)$ 和 $(Y,d_Y)$ 是距离空间，$f\colon X\rightarrow Y$ 是连续映射。
  如果 $d'_X$ 是与 $d_X$ 等价的距离，$d'_Y$ 是与 $d_Y$ 等价的距离，
  那么，对于 $(X,d'_X)$ 和 $(Y,d'_Y)$ 而言，$f$ 也是连续映射。

- A5) 在 $\mathbb{R}^n$ 上我们配有常见的距离，比如说 $d_2$（请参考之前的讲义）；
  $(X,d_X)$ 是距离空间。我们将映射 $f\colon X\rightarrow \mathbb{R}^n$ 写成分量的形式：
  \[
  f\colon X\rightarrow \mathbb{R}^n, \ \ x\mapsto f(x)=(f_1(x),f_2(x),\cdots,f_n(x)),
  \]
  其中 $f_i\colon X\rightarrow \mathbb{R}$ 是函数。
  证明，$f$ 是连续映射当且仅当对所有的 $i=1,\cdots,n$，$f_i$ 是连续函数。

- A6)（重要）假设 $(X,d_X)$ 是距离空间，$(V,\|\cdot\|)$ 是赋范线性空间，
  $f\colon X\rightarrow V$ 和 $g\colon X\rightarrow V$ 是连续映射。
  证明，它们的和与差（自然的定义）$f\pm g\colon  X\rightarrow V$ 也是连续映射。
  如果 $V=\mathbb{C}$（或者 $n\times n$ 的矩阵构成的赋范线性空间），
  那么 $f\cdot g\colon X\rightarrow \mathbb{C}$ 是连续映射。
  如果 $V=\mathbb{C}$ 并且对任意的 $x\in X$，$g(x)\neq 0$，
  那么 $\dfrac{f}{g}\colon X\rightarrow \mathbb{C}$ 是连续映射。
  你可以选择上面的一个情况来证明。

- A7) 试找出 $\mathbb{R}$ 上定义的函数
  \[
  f(x)=\begin{cases}
    \dfrac{1}{q}, \ &\text{如果 $x=\dfrac{p}{q}$ 是有理数，其中 $p\in \mathbb{Z}$，$q\in \mathbb{Z}_{\geqslant 1}$ 且 $p$ 和 $q$ 互素};\\
    0, \ &\text{如果 $x$ 是无理数}.
  \end{cases}
  \]
  的所有不连续点。

- A8) 计算 $\displaystyle \lim_{x\rightarrow 0}\frac{e^x-1}{x}$。

- A9) 计算 $\displaystyle \lim_{x\rightarrow +\infty}\Big(1+\frac{1}{x}\Big)^x$。

- A10) 计算 $\displaystyle \lim_{x\rightarrow -\infty}\Big(1+\frac{1}{x}\Big)^x$。

### 习题B：级数的基本计算技巧和收敛判断

- B1) 试计算下列级数（计算技术的训练）
  \[
  \begin{aligned}
    &(1)~   \sum_{n=1}^\infty \frac{1}{n(n+1)}   & &(2)~  \sum_{n=1}^\infty \frac{1}{4n^2-1}   & &(3)~ \sum_{n=1}^\infty \frac{1}{n(n+1)(n+2)} \\
     & (4)~\sum_{n=1}^\infty \arctan \frac{1}{n^2+n+1}  & & (5)~   \sum_{n=0}^\infty \frac{(-1)^n+2}{3^n}  &  &(6)~  \sum_{n=1}^\infty \frac{n}{3^n} \\
     & (7)~  \sum_{n=1}^\infty \frac{(-1)^{n-1}}{2^{n-1}} & &(8)~\sum_{n=1}^\infty \frac{2n-1}{2^n} & &(9)~   \sum_{n=1}^\infty \frac{2n+1}{n^2(n+1)^2} \\
    & (10)~  \sum_{n=1}^\infty (\sqrt{n+2}-2\sqrt{n+1}+\sqrt{n})  & &(11)~  \sum_{n=1}^\infty \log\left(\frac{n(2n+1)}{(n+1)(2n-1)}\right) & &(12)~\sum_{n=1}^\infty \frac{1}{n(n+m)} \qquad (m\in \mathbb{N}).
  \end{aligned}
  \]

- B2) 试判断下列级数的收敛性。

  \[
  \begin{aligned}
    & (1)~   \sum_{n=1}^\infty (\sqrt{n+1}-\sqrt{n})   & & (2)~  \sum_{n=1}^\infty \frac{\sqrt{n+1}-\sqrt{n}}{n}   & & (3)~ \sum_{n=2}^\infty (\sqrt[n]{n}-1)^n \\
    & (4)~ \sum_{n=1}^\infty \frac{1}{1+x^n} \qquad (x\ne -1) & & (5)~   \sum_{n=1}^\infty \frac{1}{n2^n}  &  & (6)~  \sum_{n=1}^\infty \left(\frac{n^2}{3n^2+1}\right)^n \\
    & (7)~  \sum_{n=1}^\infty \frac{1}{n^{1+\frac1n}} & & (8)~ \sum_{n=2}^\infty \frac{1}{(\log n)^{\log n}} & & (9)   \sum_{n=1}^\infty \frac{n^{n+\frac1n}}{\big(n+\frac1n\big)^n}  \\
    & (10)~  \sum_{n=1}^\infty (-1)^{n-1}\frac{\sqrt{n}}{n+1} & & (11)~  \sum_{n=1}^\infty \frac{(-1)^{n-1}}{\sqrt[n]{n}} & & (12)~\sum_{n=1}^\infty \left(1+\frac{1}{2}+\cdots + \frac1n\right)\frac{\sin nx}{n}.
  \end{aligned}
  \]

- B3) 试判断下列级数的收敛性并确定它们是否绝对收敛。

  \[
  \begin{aligned}
    & (1)   \sum_{n=2}^\infty (-1)^n \frac{1}{n\log n}   & &(2)  \sum_{n=2}^\infty \frac{\sin \frac{n\pi}{4}}{\log n}   \\
    & (3) \sum_{n=1}^\infty (-1)^n \frac{n-1}{n+1} \frac{1}{\sqrt[3]{n}} & &(4) \sum_{n=1}^\infty (-1)^{\frac{n(n-1)}{2}} \frac{n^{10}}{a^n} \qquad (a>1)
  \end{aligned}
  \]

### 习题C：递减正项级数的凝聚检验法

假设正整数 $b\geqslant 2$，
$f\colon (1,\infty)\rightarrow \mathbb{R}_{>0}$ 是递减（未必严格递减）函数。

- C1) 证明下面的不等式：
  \[
  (b-1)b^{k-1}f(b^{k})\leqslant \sum_{j=b^{k-1}}^{b^k-1} f(j)
  \leqslant (b-1)b^{k-1}f(b^{k-1}).
  \]

- C2) 证明：级数
  \[
  \sum_{n=1}^\infty f(n) \qquad \text{和} \qquad \sum_{n=1}^\infty b^n f(b^n)
  \]
  同时收敛或者同时发散（我们称通过后者的收敛来判断前者收敛的方法为**凝聚检验法**）。

- C3) 证明，$\displaystyle \sum_{n=2}^\infty \frac{1}{n\log n}$ 是发散的。

- C4) 证明，$\displaystyle\sum_{n=100}^\infty \frac{1}{(n\log n) (\log (\log n))}$ 是发散的。

- C5) 证明，如果 $s>1$，那么 $\displaystyle\sum_{n=1}^\infty \frac{1}{n^s}$ 是收敛的；
  如果 $0<s<1$，那么 $\displaystyle\sum_{n=1}^\infty \frac{1}{n^s}$ 是发散的。

- C6) 假设 $s>1$。证明，$\displaystyle\sum_{n=2}^\infty \frac{1}{n(\log n)^s}$
  和 $\displaystyle\sum_{n=10}^\infty \frac{1}{(n\log n)(\log(\log n))^s}$ 都是收敛的。

::: remark*
上述的几个收敛的结论（C3)–C6)）是标准并且重要的，记住这几个结论对于收敛以及函数大小的理解很有帮助。
这里的证明尽管巧妙，但是等我们接触到积分的时候，我们就可以用统一的、简单的、
更本质的也更容易记忆的方法来证明这些结论。
:::

### 习题D：实数列的上下极限的刻画

设 $\{a_n\}_{n \geqslant 1}$ 是一个实数列。先补充几个定义：

- $\alpha \in \mathbb{R}$，如果对任意 $\varepsilon>0$，存在无穷多 $n$，
  使得 $a_n \in (\alpha-\varepsilon,\alpha+\varepsilon)$，
  我们称 $\alpha$ 为 $\{a_n\}_{n\geqslant 1}$ 的一个**极限点**；

- 如果对任意 $M>0$，存在无穷多个 $n$，使得 $a_n \in (M,+\infty)$，
  我们就称 $+\infty$ 为 $\{a_n\}_{n\geqslant 1}$ 的一个**极限点**；

- 如果对任意 $M>0$，存在无穷多个 $n$，使得 $a_n \in (-\infty,-M)$，
  我们就称 $-\infty$ 为 $\{a_n\}_{n\geqslant 1}$ 的一个**极限点**。

- D1) 证明，$\alpha\in \mathbb{R}$ 是 $\{a_n\}_{n\geqslant 1}$ 的极限点
  当且仅当该数列有子序列 $\{a_{n_k}\}_{k\geqslant 1}$ 收敛于 $\alpha$。

- D2) 证明，$+\infty$ 是 $\{a_n\}_{n\geqslant 1}$ 的极限点
  当且仅当该数列有子序列 $\{a_{n_k}\}_{k\geqslant 1}$
  使得 $\displaystyle\lim_{k\to \infty} a_{n_k} = +\infty$。

- D3) 令
  $E = \bigl\{\alpha \in \mathbb{R} \cup \{\pm \infty\} \mid \alpha \text{ 是 } \{a_n\}_{n\geqslant 1} \text{ 的极限点}\bigr\}$
  为 $\{a_n\}_{n\geqslant1}$ 的所有极限点所组成的集合
  （它是 $\mathbb{R} \cup \{\pm \infty\}$ 的子集）。证明，$E \ne \emptyset$。

- D4) 证明：$E \subset \mathbb{R}$ 当且仅当数列 $\{a_n\}_{n\geqslant 1}$ 有界。

- D5) 假设 $\{a_n\}_{n\geqslant 1}$ 有界。试证明，
  $\displaystyle \sup E = \limsup_{n\to \infty} a_n$，
  $\displaystyle\inf E = \liminf_{n\to \infty} a_n$。

- D6) 假设 $\{a_n\}_{n\geqslant 1}$ 有界。
  令 $a^*= \displaystyle\limsup_{n\to \infty} a_n$，证明如下两个命题：

  - i) $a^* \in E$（所以 $\sup E\in E$）；

  - ii) 对任意 $x > a^*$，存在 $N \in \mathbb{Z}_{\geqslant 1}$，
    使得对任意 $n>N$，都有 $a_n < x$。

- D7) 试举一个数列 $\{a_n\}_{n\geqslant 1}$ 作为例子，
  使得 $E\cap \mathbb{R} \ne \emptyset$ 且 $E\not\subseteq \mathbb{R}$。

- D8) 试举一个数列 $\{a_n\}_{n\geqslant 1}$ 作为例子，使得 $E$ 为无穷集。

## 思考题（不交作业）

### 问题E：素数的倒数和

根据第七次课的内容，对于 $s>1$，我们可以定义 $\zeta$-函数
\[
\zeta(s)=\sum_{n=1}^\infty \frac{1}{n^s},
\]
并且证明了Euler乘积公式：
\[
\zeta(s)=\prod_{p\in \mathcal{P}}\frac{1}{1-p^{-s}},
\]
其中 $\mathcal{P}$ 是全体素数的集合。据此证明，级数
\[
\sum_{p\in \mathcal{P}}\frac{1}{p^s}
\]
对于 $s>1$ 是收敛的；对于 $0<s\leqslant 1$ 是发散的（这给出了有无穷多个素数的另一个证明）。

### 问题F：Basel问题的Euler“证明”

对任意的 $\theta\in \mathbb{R}$ 和 $n\in \mathbb{Z}_{\geqslant 1}$，试证明恒等式
\[
\frac{\sin\bigl((2n+1)\theta\bigr)}{(2n+1)\sin\theta}
=\prod_{k=1}^n \left(1-\frac{\sin^2(\theta)}{\sin^2\left(\frac{k\pi}{2n+1}\right)}\right).
\]
据此证明，对任意的 $x\in \mathbb{R}$，我们都有
\[
\frac{\sin(\pi x)}{\pi x}=\prod_{n=1}^\infty\left(1-\frac{x^2}{n^2}\right).
\]
（如果 $x=0$，我们将左边定义为极限 $\displaystyle \lim_{x\rightarrow 0}\frac{\sin(\pi x)}{\pi x}$）

::: remark*
根据上面的公式，形式上，我们就有
\[
\sin(\pi x)=\pi x\prod_{n=1}^\infty\left(1-\frac{x^2}{n^2}\right)
=\pi x\left(1-\bigg(\sum_{n=1}^\infty\frac{1}{n^2}\bigg)x^2+(\cdots)x^4+(\cdots)x^6+\cdots \right).
\]
所以，右边 $x^3$ 的系数就是 $\displaystyle-\pi\sum_{n=1}^\infty\frac{1}{n^2}$。
根据我们对于 $\sin$ 的定义
\[
\sin z =\frac{e^{iz}-e^{-iz}}{2i}
= \sum_{k=0}^\infty \frac{(-1)^k z^{2k+1}}{(2k+1)!},
\]
有 $\sin(\pi x)$ 展开式中的 $x^3$ 项的系数是 $-\dfrac{\pi^3}{6}$。
比较系数，我们得到所谓的Basel问题的解：
\[
\sum_{n=1}^\infty\frac{1}{n^2}=\frac{\pi^2}{6}.
\]
这是Euler原始的想法，他就是利用了上面的乘积公式来猜测最终的极限是 $\dfrac{\pi^2}{6}$。
有趣的是，他观察到 $\dfrac{\sin(\pi x)}{\pi x}$ 的零点恰好是 $x=\pm n$，
所以如果 $\dfrac{\sin(\pi x)}{\pi x}$ 的行为与多项式类似的话，
那么这个函数应该是单项式的乘积，所以Euler认为
\[
\frac{\sin(\pi x)}{\pi x}
=c\prod_{n\in \mathbb{Z}-\{0\}}\left(1-\frac{x}{n}\right)
=c\prod_{n=1}^\infty\left(1-\frac{x^2}{n^2}\right),
\]
其中 $c$ 是一个待定的常数，通过取 $x\rightarrow 0$ 的极限，他计算出 $c=1$。
:::
