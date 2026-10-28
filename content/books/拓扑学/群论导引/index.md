---
title: 群论导引
---

<problems>
- “对称群”一节中轮换的记号 $\sigma=(i_1\; i_2 \; \cdots\; i_n)$ 的最后一项似乎应为 $i_k$。
- “自由 Abel 群”一节中 $\mathrm{Hom}(\mathbb{Z}\oplus \mathbb{Z}, G) = A \times A$ 左边的 $G$ 似乎应为 $A$。
- “自由群”一节中“存在唯一的群同态 $\coprod_{S} \mathbb{Z}$”似乎缺少同态 $f\colon \coprod_{S} \mathbb{Z} \to H$ 的完整陈述。
</problems>

这段讲义还需要做一些磨光变换。希望有热心群众帮忙完善。

## 群的例子 {@sec:org9360f97}

为了研究群，我们应当有一些简单的群的例子烂熟于心。

### 循环群 {@sec:orgdae1e5a}

循环群是最简单的群：

- 有限循环群是同构于 \(\mathbb{Z}/(n)\)（模 \(n\) 的完全剩余系）的群。

- 无限循环群是同构于整数加法群 \(\mathbb{Z}\) 的群。

循环群共同的特性是存在群中元素 \(a\)，
使得 \(\{a^n : n \in \mathbb{Z}\}\) 是整个群。

**思考。**

1. 证明 \(\mathbb{Z}/(n)\) 同构于 \(n\) 次单位根在乘法下构成的群。

2. 何时 \(\mathbb{Z}/(n)\) 的缩系（既约剩余系）构成循环群？

3. 有限域 \(\mathbb{F}_{p}\) 就是 \(\mathbb{Z}/(p)\)；
   具有 \(p^n\) 个元素的有限域是否 \(\mathbb{Z}/(p^{n})\)？

### 对称群 {@sec:org040990a}

对正整数 \(n\)，
\(n\) 个文字的 **对称群** \(\mathfrak{S}_n\) 是一切
\(\{1,2,\ldots,n\}\) 到自己的双射（“\(n\) 个文字的置换”）
构成的群，群运算由映射的复合给出。

如果 \(\sigma \in \mathfrak{S}_n\)，\(\sigma(k) = i_k\)，
那么有时用比较麻烦的记号
\[
\sigma =
 \begin{pmatrix}
   1 & 2 & \cdots &n \\
   i_1 & i_2 & \cdots &i_n
 \end{pmatrix}
\]
来表示。

对称群 \(\mathfrak{S}_n\) 中有一些特殊元素，叫做 **轮换**。
若 \(1\leq i_1, i_2, \ldots, i_k \leq n\) 都是整数，它们的轮换
是指 \(\sigma \in \mathfrak{S}_n\)，
\(\sigma(i_1)=i_2\)，\(\sigma(i_2) = i_3\)，\(\ldots\)，
\(\sigma(i_k) = i_1\)；且对 \(j\neq i_1,i_2,\ldots,i_k\)，
\(\sigma(j) = j\)。上述轮换有时用符号
\[
\sigma=(i_1\; i_2 \; \cdots\; i_n)
\]
来表达。

两个轮换称为不相交的，如果它们牵扯到的指标互不相同。如果 \(\sigma\) 和
\(\tau\) 是两个不相交的轮换，那么 \(\sigma\tau = \tau \sigma\)。
任何对称群中元素在不计次序的情况下可以唯一地写成轮换的乘积。

**思考。**

1. 计算
   \[
   \begin{pmatrix}
     1 & 2 & 3 \\ 3 & 2 & 1
   \end{pmatrix}
   \cdot
   \begin{pmatrix}
     1 & 2 & 3 \\ 2 & 1 & 3
   \end{pmatrix}
   \]

2. 计算 \((123)(132)\)。

### 矩阵群 {@sec:orgd818a03}

常见的矩阵群通常会被赋予非离散的拓扑。
在我们研究基本群时则会遇到这些矩阵群里的离散子群。
我们举几个例子：

- \(\mathrm{GL}_{n}(\mathbb{Z})\)——具有整数分量的可逆矩阵，
  且逆也具有整数分量。注意，这个群与行列式不等于 \(0\) 的整数可逆矩阵不同，
  后者不构成群。

- \(\mathrm{GL}_{n}(\mathbb{Z}[\mathrm{i}])\)——分量具有形式
  \(a + \mathrm{i}b\)，\(a,b \in \mathbb{Z}\) 的可逆矩阵，且逆也具有这种形式。

- \(\mathrm{SL}_{n}(\mathbb{Z})\)——行列式为 \(1\) 的系数为整数的矩阵。

- 所有上三角，对角线取值为 \(1\)，严格上三角部分为整数的 \(n\) 阶方阵构成群。

- \(\mathrm{GL}_{n}(\mathbb{F}_{p})\)——分量取值在有限域 \(\mathbb{F}_{p}\)
  上的可逆矩阵。

**思考。**

1. “置换”和“置换矩阵”有什么关系？
   如何将 \(\mathfrak{S}_n\) 中的元素“看作”线性空间 \(k^n\) 上的线性变换？
   “偶置换”是指在这个对应下行列式等于 1 的置换。对正整数 \(n\)，
   \(n\) 个文字的 **交错群** 是指 \(\mathfrak{S}_n\) 中的 **偶置换** 构成的群，
   记做 \(\mathfrak{A}_n\)。

2. 证明 \(\mathrm{GL}_{2}(\mathbb{F}_2) \cong \mathfrak{S}_3\)。

3. 证明 \(2 \times 2\) 对角线为一的整数上三角矩阵构成的群是无限循环群。

### 乘积群 {@sec:orgdbfd39b}

如果 \((G_{i})_{i\in I}\)
是一族群，那么我们可以构造它们的 **乘积群（product group）**
\(\prod_{i\in I}G_{i}\)。
作为集合，它就是集族 \((G_i)_{i\in I}\) 的笛卡儿积；它的群运算由
\[
(g_i)_{i\in I} \cdot (g'_i)_{i\in I} = (g_i \cdot g'_i)_{i\in I}
\]
给出。

代数中的一个命题是：任何有限 Abel 群一定同构于循环群的乘积：
\[
G \cong \mathbb{Z}/(p_1^{i_1}) \times \cdots \times \mathbb{Z}/(p_n^{i_n})
\]
其中 \(p_i\) 是素数。

**思考。**

1. 若 \(m\)，\(n\) 互素，循环群 \(\mathbb{Z}/(m)\) 和循环群 \(\mathbb{Z}/(n)\)
   的乘积群同构于循环群 \(\mathbb{Z}/(mn)\)。

2. 为何 \(\mathbb{Z}/(2) \times \mathbb{Z}/(8)\) 不同构于
   \(\mathbb{Z}/(16)\)？

## Abel 群 {@sec:orgc5d397b}

令 \((G_i)_{i \in I}\) 为一族 Abel 群。
我们定义它们的 **直和** 为
\[
\bigoplus_{i\in I} G_i =
\left\{ (g_i) \in \prod_{i\in I} G_i : g_i = 1_{G_i} \text{ 对除了有限个 } i \text{ 成立 }\right\}
\]
因此有限个 Abel 群的直和与它们的乘积没有区别；
但是对无限个 Abel 群，它们的直和与乘积一般不同。

对任何 \(j\)，\(g \mapsto (g_i) \colon G_j \to \bigoplus_{i} G_i\)，
其中 \(g_j = g\)，\(g_i = 1_{G_i}\)，是群同态。记做 \(\varphi_{i}\)。

### 直和的“泛性质” {@sec:org2809c15}

给定 **Abel 群** \(A\)（群运算用加法表示），以及同态
\(\psi_i \colon G_i \to A\)，
我们定义
\[
\psi ((g_i)_{i\in I}) = \sum_{i\in I} \psi_{i}(g_i).
\]
由于直和定义中的有限性，这是良好定义的映射。它是群同态。
这是唯一的满足 \(\psi \circ \varphi_i = \psi_i\) 的从
\(\bigoplus_{i\in I}G_i\) 到 \(A\) 的群同态。

\[
\begin{tikzcd}
  G_i \ar[r, "\varphi_i"] \ar[rd, "\psi_i"] & \bigoplus_{i} G_i \ar[dotted,d, "\psi"] \\
  & A
\end{tikzcd}
\]
于是，上述泛性质可以被写作等式
\(\mathrm{Hom}\left(\bigoplus_{i\in I}G_i,A\right) = \prod_{i\in I} \mathrm{Hom}(G_i,A)\)。

**思考。**

1. 用抽象的废话证明：如果 \((\phi_i \colon G_i \to G')_{i\in I}\)
   也满足上述泛性质。则 \(G'\) 同构于 \(\bigoplus_{i\in I}G_i\)。

2. 如果不要求 \(A\) 是 Abel 群，泛性质还对吗？

3. 写出乘积群满足的泛性质。

### 自由 Abel 群 {@sec:org13104db}

Abel 群 \(\mathbb{Z}\) 满足如下泛性质：对任何群 \(G\)，
\(\mathrm{Hom}(\mathbb{Z},G) = G\)。
即：给出 \(\mathbb{Z}\) 到 \(G\) 的同态等价于给出一个 \(G\) 中元素。
给出 \(G\) 中元素 \(a\)，我们就可以将 \(n\) 送到 \(a^n\)。

Abel 群 \(\mathbb{Z} \oplus \mathbb{Z}\) 满足类似的泛性质，但是这时只能对
Abel 群陈述：对任何 **Abel 群** \(A\)（群运算用加法表示），
有 \(\mathrm{Hom}(\mathbb{Z}\oplus \mathbb{Z}, G) = A \times A\)。
其依据是 Abel 群直和的泛性质。

对一般的非交换群，上述性质不再成立。

一般地，对任何的集合 \(F\)，我们定义 \(\mathbb{Z}^{\oplus F}\) 为直和
\(\bigoplus_{i \in F} \mathbb{Z}\)，
则我们有
\[
\mathrm{Hom}(\mathbb{Z}^{\oplus F}, A) = \prod_{i\in F} A
\]
也就是说，给出从 \(\mathbb{Z}^{\oplus F}\) 到 Abel 群 \(A\)
的同态等价于给出集合 \(F\) 到集合 \(A\) 的映射。

因此，\(\mathbb{Z}^{\oplus F}\) 叫做由 \(F\) 生成的自由 Abel 群。
说它自由是指：给定集合上随便的映射 \(F \to A\)，这个映射总能诱导 Abel
群之间的同态。当然，去掉 \(A\) 是 Abel 这个条件，对一般的群，这个性质不对。

## 群的自由积 {@sec:org90b13f7}

我们发觉了 Abel 群的直和对 Abel 群映射所满足的泛性质不能够对一般群成立。
在这一段中，我们来解释如何对此进行弥补。

### 群的自由积：用泛性质来定义 {@sec:orgc434950}

令 \((\varphi_i\colon G_i \to G)_{i\in I}\) 为一族群同态。
我们称 \((G,(\varphi_i)_{i\in I})\) 为 \((G_i)_{i\in I}\)
的 **自由积**，如果它满足如下关于群同态的泛性质：
对任何群 \(H\)，任何一族群同态 \((\psi_i\colon G_i \to H)_{i\in I}\)，
存在唯一的群同态 \(f\colon G \to H\)，
使得 \(f\circ \varphi_i = \psi_i\)，即对任何指标 \(i \in I\)，
下图交换
\[
\begin{tikzcd}
  G_i \ar[rd, "\psi_i"] \ar[r, "\varphi_i"] & G \ar[d, "f"] \\
    & H
\end{tikzcd}
\]

我们只是定义了群的自由积需满足的性质，还没说明它存在。但是利用“抽象的废话”
很容易证明若自由积存在，那么它在同构意义下是唯一的。

**命题。**
若 \((G,(\varphi_i)_{i\in I})\) 与 \((G',(\varphi'_i))\)
都是 \((G_i)_{i\in I}\) 的自由积，那么存在唯一的同构
\(h\colon G\to G'\)，使得 \(h\circ \varphi_i = \varphi'_i\)。

事实上，根据泛性质，所说的 \(h\) 作为同态存在；又利用 \(G'\) 的泛性质，
可以造出 \(h'\colon G' \to G\) 使得
\(h' \circ \varphi'_i = \varphi_i\) 对一切 \(i\) 成立。
复合同态 \(h\circ h'\) 于是就满足性质
\((h\circ h') \circ \varphi'_i=\varphi'_i\)。
显然 \(\mathrm{Id}_{G'}\) 也满足这个性质。利用泛性质的唯一性可知
\(h\circ h' = \mathrm{Id}_{G'}\)。
同理 \(h'\circ h =\mathrm{Id}_{G}\)。这就证明了 \(h\) 是同构。

### 自由积的存在性 {@sec:orgf5678f5}

我们还需要证明自由积是存在的。为此，我们定义 \((G_i)_{i\in I}\)
构成的一个 **词（word）** 为一个有限序列
\[
(x_1,x_2,\ldots,x_n)
\]
其中：

- \(x_k\) 属于某个 \(G_i\)，

- 相邻的两个 \(x_k\) 不同时属于同一个群 \(G_i\)，

- \(x_i\) 不是任何群的单位元。

整数 \(n\) 叫做词的 **长度**。
我们也允许考虑长度为 \(0\) 的词，叫做“空词”。
令 \(W\) 为所有词组成的集合。
我们将在 \(W\) 的一切置换中找到一个满足自由积泛性质的群。

首先我们定义如何用 \(G_i\) 来定义 \(W\) 上的置换。
令 \(g \in G_i\)，\((x_1,\ldots,x_n) \in W\)。

1. 若 \(x_1 \notin G_i\)，\(g \neq 1_{G_i}\)，
   定义 \(g(x_1,\ldots,x_n) = (g,x_1,\ldots,x_n)\)。
   特别地，如果 \((\quad)\) 是空词，\(g(\quad) = (g)\)。
   如果 \(g = 1_{G_i}\)，
   则定义 \(g(x_1,\ldots,x_n) = (x_1,\ldots,x_n)\)。

2. 若 \(x_1 \in G_i\)，定义
   \[
   g(x_1,\ldots,x_n) =
   \begin{cases}
     (gx_1,\ldots,x_n), & \text{若 } gx_1 \neq 1; \\
     (x_2,\ldots,x_n), & \text{若 } gx_1 = 1.
   \end{cases}
   \]
   若词的长度是 \(1\)，它可写作 \((x_1)\)，如果 \(gx_1 = 1\)，
   我们得到了空词。

容易验证上述法则定义了 \(G_i\) 在 \(W\) 上的左作用。
因此我们获得了同态 \(\rho_i \colon G_i \to \mathrm{Perm}(W)\)。
也容易验证每个 \(\rho_i\) 都是单同态。

令 \(G\) 为包含了 \(\rho_{i}(G_i)\) 的 \(\mathrm{Perm}(W)\)
的最小子群（取所有包含它们的子群的交）。
那么 \(\rho_i\) 诱导了单同态 \(\varphi_i \colon G_i \to G\)。
我们断言 \((G,(\varphi_i))\) 是 \(G_i\) 的自由积。

为了说话方便，我们将把 \(G_i\) 等同于它们在 \(\mathrm{Perm}(W)\)
中的像。这样，每个 \(G\) 中的元素都可以写成
\[
g = g_1 \cdot g_2 \cdot \cdots \cdot g_m
\]
其中每个 \(g_k\) 都属于某个 \(\rho_i(G_i)\)。
如果相邻两项都属于同一个群，我们可以把它们复合起来；
而且也可以将当中的恒等变换统统忽略掉。
因此，我们可以假设上述的表达式是“既约形式”：相邻项不属于同一群，
恒等变换不出现。

任何 \(G\) 中非单位的元素可以唯一表达成既约形式。事实上，
若
\[
g = g_1 g_2 \cdots g_m = h_1 \cdots h_n
\]
且两个表达式都是既约的，那么它们在空词上的作用分别是词
\((g_1,\ldots,g_m)\)，\((h_1,\ldots,h_n)\)。
因此这两个词得一样。从而 \(m=n\)，\(g_k = h_k\)。

验证 \(G\) 具有自由积的泛性质。
设 \(\psi_i\colon G_i \to H\) 是一族同态。
定义函数 \(f\colon G \to H\) 如下：将 \(g\neq 1\)
写成既约形式 \(g = g_1 \cdots g_n\)，
其中 \(g_k \in G_{i_k}\)；
定义 \(f(g) = \psi_{i_1}(g_1) \cdots \psi_{i_n}(g_n)\)。
最后，定义 \(f(1) = 1_H\)。则 \(f\) 即为所求。

### 二阶循环群的自由积 {@sec:orge95dea4}

把两个二阶循环群 \(\mathbb{Z}/(2)\) 写作 \(\{1,x\}\) 和 \(\{1,y\}\)。
则它们的自由积中的元素就是 \(x\) 与 \(y\) 不断交错出现的形式：
\[
\begin{aligned}
  x, xy, xyx, xyxy, \ldots \\
  y, yx, yxy, yxyx, \ldots
\end{aligned}
\]
这是一个无限群。回忆，\(\mathbb{Z}/(2) \oplus \mathbb{Z}/(2)\)
则是四个元素的有限交换群 \(\{1,x,y, xy\}\)（“Klein 肆”）。

### 自由积的记号 {@sec:org0d92dea}

今后，群 \(G_1,\ldots, G_n\) 的自由积用 \(G_1 \ast \cdots \ast G_n\)
来标记，无限个群 \((G_i)_{i\in I}\) 的自由积则用 \(\coprod_{i\in I} G_i\)
来标记。

### 自由群 {@sec:org470c7f0}

令 \(S\) 为集合。由 \(S\) 生成的自由群是指 \(\coprod_{S} \mathbb{Z}\)
（或用记号 $\mathbb{Z}^{\ast S}$）。
对 \(s \in S\)，令 \(e_s\) 代表 \(\varphi_{s}(1)\)
（注意，这里 \(1 \in \mathbb{Z}\) 不是指单位元，我们使用 \(\mathbb{Z}\)
的加法群，所以 \(0\) 才是单位元）。
它满足如下性质：对任意群 \(H\)，任给集合之间的函数 \(\psi\colon S \to H\)，
存在唯一的群同态 \(\coprod_{S} \mathbb{Z}\)，
满足 \(f(e_s) = \psi(s)\)。

## 从群到 Abel 群 {@sec:org91dc5e1}

### 正规子群与商群 {@sec:org270d514}

群 \(G\) 的子群 \(N\) 叫做 **正规** 的，如果对任何 \(g \in G\)，\(h \in N\)，
有 \(ghg^{-1} \in N\)。

如果 \(N\) 是正规子群，那么我们在 \(G\) 上定义等价关系 \(\sim\) 如下：
\(g \sim g'\) 当且仅当存在 \(h \in N\)，使得 \(gh = g'\)。

群 \(G\) 关于 \(\sim\) 的等价类记做 \(G/N\)。在这个群上可以定义一个群运算
\[
[g_1] \cdot [g_2] = [g_1 g_2]
\]
这与代表元选择无关：如果 \(g_1 \sim g'_1\)，\(g_2 \sim g'_2\)，
则存在 \(h_1, h_2\)，使得 \(g_i h_i = g'_i\)。
因此
\[
g'_1 g'_2 = g_1 h_1 g_2 h_2 = g_1 g_2 (g_2^{-1}h_1 g_2 h_2)
\]
由于 \(N\) 正规，\(g_2^{-1}h_1 g_2 \in N\)，
由于 \(N\) 是子群，\(g_2^{-1} h_1 g_2 h_2 \in N\)。
从而 \(g_1 g_2 \sim g'_1 g'_2\)。

- 群同态 \(f\colon G \to H\) 的核
  \[
  \mathrm{Ker}(f) = \{g \in G : f(g)=1_H\}
  \]
  是 \(G\) 的正规子群。

- 群 \(G\) 的正规子群 \(N_1\)，\(N_2\) 的交也是正规子群。

- 对任何一族 \(G\) 的元素 \(S\)，
  由 \(S\) 生成的正规子群是指一切包含 \(S\) 的
  正规子群的交，记做 \(\langle\!\langle S\rangle\!\rangle\)。

- 由 \(\{ghg^{-1}h^{-1} : g, h \in G \}\) 生成的正规子群记做 \([G,G]\)，
  这个子群叫做 \(G\) 的换位子群。容易验证 \(G/[G,G]\)，叫做 \(G\) 的
  **Abel 化**，是 Abel 群。

### 同态基本定理 {@sec:org7ccf9bb}

回忆线性代数基本定理：设 \(f: V \to W\) 是某域上线性空间之间的线性映射。
则成立同构 \(V/\mathrm{Ker}(f) \cong \mathrm{Im}(f)\)。

这个定理的证明可以照搬到群上来。设 \(f: G \to G'\) 是群之间的满同态。
则 \(G/\mathrm{Ker}(f) \cong \mathrm{Im}(f)\)。这里 \(\mathrm{Im}(f)\)
是指 \(G'\) 的子群 \(f(G)\)（思考：它为什么是 \(G'\) 的子群？）。

**思考。**

1. 证明自由群 \(\coprod_{S} \mathbb{Z}\) 的 Abel 化是自由 Abel 群
   \(\bigoplus_{S} \mathbb{Z}\)。自由群什么时候是 Abel 的？

2. \(G/N\) 是 Abel 群当且仅当 \(N \supset [G,G]\)。

## 生成元与关系 {@sec:orgc3f5b59}

令 \(G\) 是群。它的一组生成元是指 \(G\) 的满足 \(\langle S \rangle = G\)
的子集 \(S\)。显然，\(G\) 自己就是 \(G\) 的一组生成元。

考虑群 \(\mathfrak{S}_3\)，\(x = (123)\)，\(y=(12)\)，
则 \(\langle x, y\rangle = \mathfrak{S}_3\)。
事实上，
\[
\mathfrak{S}_3  = \{1, x,x^2, y, xy,x^2y \}.
\]

根据自由群的泛性质，对任何一组群 \(G\) 的生成元 \(S\)，
存在唯一的群同态
\[
f_{S}\colon \mathbb{Z}^{\ast S} \to G
\]
满足 \(f(e_{s}) = s\)。
这个同态是满同态。事实上，由于 \(S\) 生成 \(G\)，
\(S \subset \mathrm{Im}(f)\)，且 \(\mathrm{Im}(f)\) 是 \(G\)
的子群，由 \(\langle S \rangle = G\) 可得 \(\mathrm{Im}(f) = G\)。

同态核 \(\mathrm{Ker}(f_{S})\) 称为生成元 \(S\) 的 **关系子群**。
由于 \(\mathbb{Z}^{\ast S}\) 中元素都可写作 \(e_{s}\) 的约化词，
每个 \(\mathrm{Ker}(f_{S})\) 中元可写作
\[
e_{s_1} \cdot e_{s_2} \cdot \cdots \cdot e_{s_n}.
\]
它在 \(f_{S}\) 下被送到单位元 \(1_G\) 说明在 \(G\) 中成立
\[
s_1 \cdots s_n = 1_{G}.
\]
即，\(S\) 中的元素 \(s_1,\ldots,s_n\) 满足 **关系**
\(s_1\cdots s_n =1_{G}\)。

关系子群 \(\mathrm{Ker}(f_S)\) 可能十分复杂。
通常使用的做法是再选取它的一组生成元 \(T\)。从而得到群的满同态
\[
\mathbb{Z}^{\ast T} \to \mathrm{Ker}(f_S)
\]
利用 \(T\) 就可以决定所有的关系。

回到开始的例子。我们通过观察已经知道 \(\{x,y\}\) 是 \(\mathfrak{S}_{3}\)
的生成元。因此我们得到了 \(\mathbb{Z}\ast \mathbb{Z}\) 到 \(\mathfrak{S}_3\)
的满同态，它将 \(e_{x}\) 送到 \(x\)，\(e_{y}\) 送到 \(y\)。
我们已经写下了 \(x\)，\(y\) 应当满足的两个关系
\[
x^3 = 1, y^2=1, xyx^{-2}y^{-1}=1
\]
因此关系子群中至少包含了 \(e_x^3, e_y^2, e_x e_y e_x^{-2} e_y^{-1}\)。
抽象理论中很难判断我们写下来的关系是否生成了关系子群。
但在这个具体例子里我们知道它们已经足够了。
因为利用这些关系我们能且只能够表示出六个元素，即商群
\[
G = (\mathbb{Z}\ast \mathbb{Z})/\langle\!\langle e_x^3,e_y^2,e_x e_y e_x^{-2} e_y^{-1} \rangle\!\rangle
\]
只能有六个元素 \([1], [e_x],[e_x^2], [e_y], [e_x e_y], [e_x^2 e_y]\)（思考：为什么？）。
从而自然的群同态 \(G \to \mathfrak{S}_{3}\) 被迫使是一一映射。
