---
title: 期中考试：连续函数环的极大理想
---

考试时间为 2 小时 25 分钟。两道大题之间是相互独立的。
考试中后面的问题可以使用前面问题的结论（无论答题人是否已经得到正确的证明或者答案）。

## 题目A 基本概念和技巧的考察（共8小题）

A1) 试用 $\varepsilon-N$ 语言证明：$\displaystyle \lim_{n\rightarrow \infty}\dfrac{n}{n^2+1}=0$。

A2) 试用 $\varepsilon-\delta$ 语言说明函数 $\mathbb{R}$
    上的函数 $f(x)=\begin{cases} \sin\left(\dfrac{1}{x}\right), &\ \ x\neq 0;\\
0,&\ \ x=0\end{cases}$ 在 $x=0$ 处不连续。

A3) 计算极限：
    $\displaystyle \lim_{n\rightarrow \infty}\left(1^2+2^2+3^2+\cdots+n^2\right)^\frac{1}{n}$。

A4) 证明，级数 $\displaystyle \sum_{n=1}^\infty \frac{2n+1}{n^2(n+100)^2}$ 收敛。

A5) 给定实数的序列 $\{a_n\}_{n\geqslant 1}$，假设级数 $\displaystyle \sum_{n=1}^\infty a_n$ 收敛。
    证明，对任意的实数 $x\in (-1,1)$，级数 $\displaystyle \sum_{n=1}^\infty a_n x^n$ 也收敛。
    （提示：利用Abel判别法）

A6) 假设 $f$ 是非空开区间 $(a,b)$ 上的连续函数，证明，对任意的 $x_1,x_2\in (a,b)$，
    存在 $x_0 \in (a,b)$，使得
    \[
    f(x_0)=\frac{1}{2}\bigl(f(x_1)+f(x_2)\bigr).
    \]

A7) 假设函数 $f:\mathbb{R}\rightarrow \mathbb{R}$ 是以 $1$ 为周期的连续函数，
    即对任意的 $x\in \mathbb{R}$，我们有 $f(x+1)=f(x)$。
    证明，$f$ 有界并且能取到其最大值，即存在 $x_0\in \mathbb{R}$，
    使得 $f(x_0)=\displaystyle \sup_{x\in \mathbb{R}}f(x)$。

A8) 证明，$f(x)=\sqrt{x+1}$ 作为 $\mathbb{R}_{\geqslant 0}$ 上的函数是一致连续的。

## 题目B

首先回忆一下二项式展开：$\displaystyle (1+z)^n=\sum_{k=0}^n {n \choose k} z^k$。
特别地，当 $z=1$ 时，我们有 $\displaystyle 2^n=\sum_{k=0}^n {n \choose k}$。

给定一个复数的数列 $\{a_k\}_{k\geqslant 0}$，我们定义新的数列 $\{a_n^*\}_{n\geqslant 0}$，其中
\[
a_n^*=\frac{1}{2^n}\sum_{k=0}^n {n \choose k}a_k.
\]

### 第一部分：等比数列
这一部分中，我们假设对任意的 $k\geqslant 0$，$a_k=z^k$，其中 $z$ 为复数。

B1) 证明，如果 $|z|<1$，那么级数 $\displaystyle \sum_{k=0}^\infty a_k$ 收敛。
    我们用 $A(z)$ 表示这个极限。

B2) 证明，如果 $|z|<1$，那么级数 $\displaystyle \sum_{k=0}^\infty a^*_k$ 收敛。
    我们用 $A^*(z)$ 表示这个极限。

B3) 证明，如果 $|z|\geqslant 1$，那么级数 $\displaystyle \sum_{k=0}^\infty a_k$ 不收敛。

B4) 试找出一个 $z\in \mathbb{C}$，$|z|>1$，级数 $\displaystyle \sum_{k=0}^\infty a^*_k$ 收敛。

B5) 证明，如果 $|z|=1$ 并且 $z\neq\pm 1$，那么级数 $\displaystyle \sum_{k=0}^\infty a^*_k$ 收敛。

### 第二部分：收敛性比较
这一部分中，我们假设 $\{a_k\}_{k\geqslant 0}$ 为实数的序列。

B6) 证明，当 $k\in \mathbb{Z}_{\geqslant 0}$ 固定的时候，我们有
    \[
    \lim_{n\rightarrow \infty} {{n \choose k}}\Big/{\frac{n^k}{k!}}=1, \ \ \lim_{n\rightarrow \infty} {{n \choose k}}\Big/{2^n}=0.
    \]

B7) 任意给定非负整数 $n>q$，我们定义
    \[
    a_{n,q}^*=\frac{1}{2^n}\sum_{k=0}^q {n \choose k}a_k.
    \]
    对每个固定的 $q$，计算 $\displaystyle \lim_{n\rightarrow \infty} a_{n,q}^*$。

B8) 如果 $\displaystyle \lim_{n\rightarrow \infty} a_{n}=0$，证明，
    $\displaystyle \lim_{n\rightarrow \infty} a_{n}^*=0$。

B9) 如果 $\displaystyle \lim_{n\rightarrow \infty} a_{n}$ 存在，证明，
    $\displaystyle \lim_{n\rightarrow \infty} a_{n}^*$ 存在并且恰好等于
    $\displaystyle \lim_{n\rightarrow \infty} a_{n}$。

B10) 如果 $\displaystyle \lim_{n\rightarrow \infty} a^*_{n}$ 存在，
     $\displaystyle \lim_{n\rightarrow \infty} a_{n}$ 是否一定存在？

在后面的问题中，对任意的 $n\geqslant 0$，我们定义部分和
\[
S_n=\sum_{k=0}^n a_k, \ \ S^*_n=\sum_{k=0}^n a^*_k, \ \ U_n=2^n S_n^*.
\]

B11) 证明，对任意的 $n\geqslant 0$，$U_n$ 都可以写成 $S_0,S_1,\cdots,S_n$ 的整系数线性组合：
     \[
     U_n=\sum_{k=0}^n {n+1 \choose k+1} S_k.
     \]

B12) 证明，如果级数 $\displaystyle \sum_{k=0}^\infty a_k$ 收敛，
     那么 $\displaystyle \sum_{k=0}^\infty a^*_k$ 也收敛。

## 题目C：$C\bigl([a,b]\bigr)$ 的极大理想

假设 $a<b$ 是实数，我们研究有界闭区间上的实数值连续函数的空间 $C\bigl([a,b]\bigr)$。
对于子集 $I\subset C\bigl([a,b]\bigr)$，如果它满足如下三个条件：

- 1\) $I\neq \emptyset$，$I \neq C\bigl([a,b]\bigr)$；

- 2\) 对任意的 $\varphi \in I$，$\psi \in I$，我们有 $\varphi+\psi \in I$；

- 3\) 对任意的 $\varphi \in I$，$f \in C\bigl([a,b]\bigr)$，我们有 $\varphi\cdot f \in I$。

我们就称 $I$ 是 $C\bigl([a,b]\bigr)$ 的一个**理想**。
假设 $\mathfrak{m}$ 是 $C\bigl([a,b]\bigr)$ 的理想并且不存在其它的包含 $\mathfrak{m}$ 的理想，
我们就称 $\mathfrak{m}$ 是 $C\bigl([a,b]\bigr)$ 的一个**极大理想**（即若理想
$I\supset \mathfrak{m}$，那么 $I =\mathfrak{m}$）。

C1) 对任意的子集 $A\subset [a,b]$，
    令 $I(A)=\left\{f\in C\bigl([a,b]\bigr)\big| \text{对任意的 $x\in A$，$f(x)=0$}\right\}$。
    证明，$I(A)$ 是 $C\bigl([a,b]\bigr)$ 的理想。
    $I([a,b])$ 是什么？证明，如果有两个子集 $A\subset B\subset  [a,b]$，那么 $I(A)\supset I(B)$。
    是否存在 $A\subset [a,b]$ 为真子集，使得 $I(A)=\{0\}$？

C2) 证明，如果 $I \subset C\bigl([a,b]\bigr)$ 是理想，那么常值函数 $1\notin I$。
    进一步证明，如果 $I \subset C\bigl([a,b]\bigr)$ 是理想，那么对任意的 $f\in I$，
    $f$ 在 $[a,b]$ 上一定有零点（即 $f(x)=0$ 在 $[a,b]$ 上有解）。

C3) 对于 $f \in C\bigl([a,b]\bigr)$，证明，
    集合 $V(f)=\bigl\{x\in [a,b]\big| f(x)=0\bigr\}$ 是闭集。
    进一步证明，对于理想 $I \subset C\bigl([a,b]\bigr)$，
    集合 $V(I)=\bigl\{x\in [a,b]\big| \text{对任意的 $f\in I$},~ f(x)=0\bigr\}$ 是闭集。
    如果理想 $I \subset C\bigl([a,b]\bigr)$ 使得 $V(I)$ 为全空间 $[a,b]$，你是否能够确定 $I$？

C4) 对任意的点 $x\in [a,b]$，我们令 $A=\{x\}$ 并记 $\mathfrak{m}_x =I(A)=I\bigl(\{x\}\bigr)$，即
    \[
    \mathfrak{m}_x=\left\{f\in C\bigl([a,b]\bigr)\big| f(x)=0\right\}.
    \]
    证明，$\mathfrak{m}_x$ 是极大理想。

C5) 证明，如果 $\mathfrak{m}$ 是 $C\bigl([a,b]\bigr)$ 的极大理想，
    那么存在 $x\in [a,b]$ 使得 $\mathfrak{m}=\mathfrak{m}_x$。（提示：利用 $[a,b]$ 是紧的）

C6) \*\* 假设 $A$ 是闭集，证明，$V(I(A))=A$。

::: remark*
上面的结论可以推广到紧的距离空间的情形：假设 $(X,d)$ 是紧的距离空间，
$C(X)$ 是 $X$ 上复数值的连续函数的全体，那么我们有如下的一一对应：
\[
X \longrightarrow \bigl\{\text{$C(X)$ 的极大理想}\bigr\}, \ \  x\mapsto \mathfrak{m}_x,
\]
其中 $\mathfrak{m}_x=\left\{f\in C\bigl(X\bigr)\big| f(x)=0\right\}$。
据此，我们可以把环 $C(X)$ 中的极大理想想象成空间的点，
从而通过 $C(X)$ 中的代数对象来研究 $X$ 上的几何，这是代数几何的开端。
:::
