---
title: 拓扑空间与连续映射 (I)
---

根据（并不完全准确，但颇有启发意义的）老生常谈，
所谓拓扑学，就是研究空间在连续形变下保持不变的那些性质。
为了让这句话有意义，我们需要严格定义什么是“空间”，什么是“连续性”。

## 拓扑空间

“[[空间]]”（“承载几何性质的事物”）的观念一直在演化。
在大学课程范围内，一种比较普遍的“空间”概念是所谓[[拓扑空间]]。根据
[Felix Hausdorff](https://en.wikipedia.org/wiki/Felix_Hausdorff)
在他 1914 年的书 *Grundzüge der Mengenlehre*（“基础集合论”）
中所下的定义，一个
**拓扑空间（topological space）** 是指一个二元组
\((X,\mathscr{T})\)，其中 \(X\) 是一个集合，\(\mathscr{T}\) 是 \(X\) 的幂集[^1]
的一个子集（根据习惯，\(\mathscr{T}\) 里面的元素叫做 \(X\) 的
**开子集（open subset）**），满足如下性质：

1. *任意多个开子集的并仍然是开子集*，
   即若 \((U_{i})_{i \in I}\) 是 \(\mathscr{T}\) 中一族元素，
   那么 \(\bigcup_{i\in I} U_{i}\) 也属于 \(\mathscr{T}\)；

2. {@item:topology-definition-finite-intersection-open} *两个开子集的交仍然是开子集*，
   即若 \(U, V\) 属于 \(\mathscr{T}\)，
   那么 \(U \cap V\) 也属于 \(\mathscr{T}\)
   （由此及归纳法可以推出有限个开子集的交也是开子集）；

3. 空集 \(\emptyset\) 和全空间 \(X\) 是开的。

满足上述条件的集族 \(\mathscr{T}\) 被称为 \(X\) 上的一个**拓扑（topology）**。

如果 \(\mathscr{T}\) 是 \(X\) 上的一个拓扑，且如果 \(A \subset X\) 满足
\(X - A \in \mathscr{T}\)，那么我们称 \(A\) 是拓扑空间 \((X,\mathscr{T})\) 的一
个**闭子集（closed subset）**。拓扑空间的闭子集满足如下条件：

1. *任意多个闭子集的交仍然是闭子集*，

2. *有限个闭子集的并仍然是闭子集*，

3. 空集 \(\emptyset\) 和全空间 \(X\) 是闭的。

显然，开集和闭集的公理是互相对称的，拓扑也可以通过指定闭集来定义。

\({}^\star\)
二十世纪早期的学者用了很久才总结出上述当今常见拓扑空间的定义。（与它
[等价的定义](https://en.wikipedia.org/wiki/Characterizations_of_the_category_of_topological_spaces)
有很多，我们不多涉及。）
拓扑空间的定义看起来略显抽象，
看了定义后，我们在脑中很难绘制一个拓扑空间的图景。非常粗略地讲，
拓扑空间中的开集描述了拓扑空间中的点彼此之间邻近的程度。
对于最一般的拓扑空间的性质，即使是从事拓扑学专门研究学者也未尝感兴趣。
大多数数学工作者感兴趣的对象通常是比较具体的拓扑空间，它们包括：

- 胞腔空间（cellular space），如多面体；

- [[流形]]（manifold）[^2]，
  如微分非退化的可微函数在 \(\mathbb{R}^n\) 中的零点；

- [[概形]]（scheme），如齐次多项式在射影空间中的零点，等等。

这些几何对象，除了它们自身所具备的拓扑之外，也含有其他的特殊数学结构。
学者们既关心这些特殊结构，也关心这些特殊结构给这些几何对象带来的独特拓扑性质。
在今后的学习中，我们会对这些特点产生更清晰的认识。

既然大多数数学家很少关心一般的拓扑空间，为何我们还要介绍这个概念呢？问这个问题就如同在问，
既然数论学者仅关心方程的整数解，那为什么他们要学习微积分呢？即使对数论学家，
无穷小分析也是不可或缺的工具。
类似地，一般的拓扑性质会给几何学的研究赋予更多工具和弹性（“more elbow space”）。
\({}_{\star}\)

::: example {@example:obvious-space}
我们列举一些肤浅的例子，这些拓扑空间在我们脑海中都不太像真正的空间。

1. {@item:trivial-discrete-top} 任何集合 \(X\) 都可以装备两个非常简单的拓扑：
   **离散拓扑（discrete topology）**，即任何子集都是开集；
   **平凡拓扑（trivial topology）**，只有 \(\emptyset\) 和 \(X\) 是开集。

2. {@item:sierpinski-example} **Sierpiński 空间**是只有两个元素的集合
   \(\{0,\eta\}\)；它的开集为 \(\{\emptyset, \{\eta\}, \{0,\eta\}\}\)。

   ![图 1：Sierpiński space](Topology_image1.svg?width=150)

   虽然 Sierpiński 空间看起来和我们想象的空间不太一样，它倒是经常出现在日常的研究中。

3. {@item:finite-complement} 设 \(X\) 为一个集合。
   则 \(\mathscr{T} = \{\emptyset\}\cup\{S \subset X \colon X \setminus S \text{ 是有限集}\}\)
   定义了 \(X\) 上面的一个拓扑，叫做**有限补拓扑（finite complement topology）**。

:::

## 度量空间

一个比较方便产生拓扑空间的方法是使用度量。
一个集合 \(X\) 上的**度量（metric）** 是一个映射
\(d\colon X \times X \to \mathbb{R}\)，满足以下性质：

1. 对任何 \(x,y \in X\)，有 \(d(x,y) = d(y,x)\)；

2. 对任何 \(x,y \in X\)，有 \(d(x,y) \geq 0\)，且 \(d(x,y)=0\) 的必要且充分条件是 \(x=y\)；

3. {@item:triangle-ineq} 对任何 \(x,y,z \in X\)，成立**三角不等式（triangle inequality）**：
   \(d(x,z) \leq d(x,y) + d(y,z)\)。

一个**度量空间（metric space）** 是一个偶对 \((X,d)\)，其中 \(X\) 是一个集合，
\(d\) 是 \(X\) 上的一个度量。度量空间是 M. Fréchet 于 1906 年引入的[^3]。

令 \((X,d)\) 为一个度量空间，\(x \in X\)，\(\epsilon > 0\) 为实数。
则 \(X\) 中以 \(x\) 为心的 **\(\epsilon\)-开球**是指
\[
B(x;\epsilon) = \{y \in X \colon d(y,x) < \epsilon\}.
\]
我们称 \(U \subset X\) 为度量空间 \(X\) 的一个**开集**，如果
对任意 \(x \in U\)，存在 \(\epsilon > 0\)，使得
\(B_{\epsilon}(x)\subset U\)。

不难验证上面的开集的定义的确给出了一个拓扑。
比如，我们来验证拓扑的[公理 2](@item:topology-definition-finite-intersection-open)。
如果 \(U\) 和 \(V\) 都是开集，那么对任何 \(x \in U \cap V\)，
我们知道存在 \(B(x;\epsilon_1) \subset U\)，\(B(x;\epsilon_2) \subset V\)。
因此令 \(\epsilon=\min\{\epsilon_1,\epsilon_2\}\)，就有
\(B(x;\epsilon)\subset U \cap V\)。因此 \(U \cap V\) 是开集。

验证度量空间中的开集构成拓扑的过程中，不需要使用三角不等式（@item:triangle-ineq）。
这个不等式所保证的是任何的开球 \(B(x;\epsilon)\) 都是开集。
若 \(y \in B(x;\epsilon)\)，令 \(\eta=\epsilon-d(x,y)\)，由开球的定义可知\(\eta>0\)
且为实数，因此我们可以定义开球\(B(y;\eta)\)，
接下来我们来验证 \(B(y;\eta)\subset B(x,\epsilon)\)。
事实上，由三角形不等式，对任意 \(z\in B(y,\eta)\)，有
\[
d(z,x) \leq d(x,y) + d(y,z) < d(x,y) + \epsilon - d(x,y) =\epsilon.
\]
由此便验证了 \(B(x;\epsilon)\) 为开集。

我们将 \(\mathbb{R}^{n}\) 由度量
\(\left( \sum_{i=1}^{n}|x_i-y_i|^{2} \right)^{1/2}\)
产生的拓扑叫做 \(\mathbb{R}^{n}\) 的**标准拓扑**。
以后但凡使用记号 \(\mathbb{R}^{n}\)，我们总使用标准拓扑。

## 子空间与不交并

1. 令 \(X\) 为拓扑空间。
   令 \(S \subset X\) 为子集。
   我们定义 \(S\) 的**子空间拓扑（subspace topology）** 如下：称 \(V\subset S\) 为开集，如果它形如
   \(U\cap S\)，其中 \(U\) 是 \(X\) 的开集。当我们给 \(S\) 装备子空间拓扑的时候，
   我们称 \(S\) 为 \(X\) 的**子空间**。

   空间 \(\mathbb{R}^{n}\) 的子空间是我们用来构造新空间的基本素材。
   子空间
   \[
   \{x\in \mathbb{R}^{n+1} \colon x_1^2 + \cdots + x_{n+1}^{2} = 1\}
   \]
   用记号 \(\mathbb{S}^{n}\) 来表示，它叫做 \(n\) 维**球面（sphere）**。
   由空间 \(\mathbb{R}^{n}\)（标准拓扑）的子空间
   \[
   \{x\in \mathbb{R}^{n} \colon x_1^2 + \cdots + x_{n}^{2} \leq 1\}
   \]
   所定义的拓扑空间用记号 \(D^{n}\) 来表示，它叫做
   \(n\) 维**闭球体（closed disk）**。
   而 \(n\) 维**开球体（open disk）** 是指
   \[
   \{x\in \mathbb{R}^{n} \colon x_1^2 + \cdots + x_{n}^{2} < 1\}
   \]
   （装备子空间拓扑）。

   闭区间 \([0,1]\) 有时用 \(\mathbf{I}\) 表示。

2. 设 \((X_{i},\mathscr{T}_{i}){}_{i\in I}\) 为一族拓扑空间。
   定义它们的**和（sum）** 拓扑，或**不交并（disjoint union）**
   拓扑，如下：

   - 作为集合，它是 \(\coprod_{i\in I} X_{i}\)（集合的不交并），

   - 一个 \(\coprod_{i\in I} X_{i}\) 的子集为开，当且仅当它与每个 \(X_{i}\) 的
     交为开。

   自此以后，每当我们使用记号 \(\coprod_{i} X_{i}\)，我们总是指和拓扑。

   \(\mathbb{S}^{0}\) 与 \(\{\ast\}\amalg \{\ast\}\) 都是含有两个点的离散拓扑空间。

   一堆单点集合的不交并是一个离散空间。
   \(\{0\} \cup \{1,1/2,1/3,\ldots\}\) 在 \(\mathbb{R}\) 中的子空间拓扑不是集合
   \(\{0\}, \{1\}, \{1/2\}, \ldots\)  的不交并拓扑。

## 黑话

我们记录一些关于拓扑空间的术语。
以下令 \(X\) 为拓扑空间。

- 拓扑空间 \(X\) 的**开覆盖（open covering）** 是指一组 \(X\) 的开集
  \((U_{i}){}_{i\in I}\)，满足 \(X = \bigcup_{i\in I}U_{i}\)。

- 一个拓扑空间中的元素通常被叫做这个空间的一个**点**。

- 包含点 \(x \in X\) 的开集叫做 \(x\) 的**邻域（neighborhood）**。

- 令 \(S \subset X\) 为子空间。则 \(S\) 的**内部（interior）**
  是 \(S\) 包含的最大的
  \(X\) 的开集。\(S\) 的内部记为 \(S^{\circ}\)，\(S^{\circ}\) 中的点叫做 \(S\) 的**内点**。

- 令 \(S \subset X\) 为子空间。则 \(S\) 的**闭包（closure）**
  是包含 \(S\) 的最小的
  \(X\) 的闭集。\(S\) 的闭包记为 \(\overline{S}\)。

- 如果 \((\overline{S})^{\circ}=\emptyset\)，则我们称 \(S\)
  在 \(X\) 中**无处稠密（nowhere dense, rare）**。
  无处稠密子集的可数并叫做**第一纲集（first category; meager）**。
  如果 \(\overline{S}=X\)，则我们称 \(S\)
  在 \(X\) 中**稠密（dense）**。
  \(S\) 在 \(X\) 中稠密的必要且充分条件为：任何 \(X\) 的开集都与 \(S\) 相交非空。

::: example
有理数集合 \(\mathbb{Q}\) 是 \(\mathbb{R}\) 的标准拓扑下的稠密子空间。
但是 \(\mathbb{Q}^{\circ} = \emptyset\)。
:::

::: proof
我们使用实数的如下性质：任何开区间中都包含有理数，也包含非有理数。前者推出
\(\mathbb{Q}\) 在 \(\mathbb{R}\) 中稠密，后者推出
\(\mathbb{Q}^{\circ}=\emptyset\)。事实上，
若 \(x \in \mathbb{Q}\) 是内点，则存在 \(x\) 在 \(\mathbb{R}\) 中的邻域
\((x-\epsilon,x+\epsilon) \subset \mathbb{Q}\)。但是由实数理论知道，
开区间里必然有无理数，矛盾。
:::

需注意，稠密或无处稠密都是子空间*相对于全空间*的概念。
比如 \(\mathbb{R}\) 虽然作为 \(\mathbb{R}^{2}\) 的子空间无处稠密，
但是作为自己的子空间就不是无处稠密的了。显然任何拓扑空间都是自己的稠密子集。

我们说 \(X\) 上的拓扑 \(\mathscr{T}_1\) 比拓扑
\(\mathscr{T}_2\) **细（finer）**，或曰 \(\mathscr{T}_2\) 比 \(\mathscr{T}_1\)
**粗（coarser）**，如果 \(\mathscr{T}_1 \supset \mathscr{T}_2\)。
同一个集合上的两个拓扑不总可以比较粗细。

## 连续映射

定义了空间之后，我们来解释什么是连续性。
一个从拓扑空间 \(X\) 到另一个拓扑空间 \(Y\)[^4]
的一个**连续映射（continuous map）** 是指一个映射 \(f\colon X \to Y\)，使得对任何 \(Y\) 的开集
\(U\)，\(f^{-1}(U)\) 是 \(X\) 中的开集。等价地，\(f\) 连续当且仅当闭集的逆像是闭集。
如果 \(f\colon X \to Y\) 是一个连续的双射，并且它的逆映射也连续，
那我们就称 \(f\) 是一个**同胚（homeomorphism）**。
粗略地说，所谓点集拓扑学，就是研究拓扑空间在同胚下保持不变的性质的数学分支。

连续映射的复合是连续映射。

令 \((X,d)\)，\((X',d')\)为两个[[度量空间]]。
令 \(f\colon X \to X'\) 为一个映射。我们在微积分课程中学过连续性的
\(\epsilon\)-\(\delta\) 定义。我们来说明这个定义与上述描述是一致的。

::: proposition
记号如上。赋予 \(X\)，\(X'\) 由度量而产生的拓扑。
则 \(f\) 为连续映射的必要且充分条件是对任何点 \(x \in X\)，
任何 \(\epsilon>0\)，存在 \(\delta=\delta(x,\epsilon)>0\)，
使得 \(f(B(x;\delta))\subset B(f(x);\epsilon)\)。
:::

::: proof
必要性。设 \(f\) 连续。
则 \(f^{-1}(B(f(x);\epsilon))\) 是一个包含了 \(x\) 的开集。
因此按照度量空间中开集的定义，
存在 \(\delta\)，使得 \(B(x;\delta) \subset f^{-1}(B(f(x);\epsilon))\)。

充分性。假设 \(f\) 满足 \(\epsilon\)-\(\delta\) 性质。
设 \(V\) 是 \(X'\) 的一个开集，以及 \(x \in f^{-1}(V)\)。
由于 \(f(x) \in V\)，且 \(V\) 开，存在 \(\epsilon > 0\)，
使得 \(B(f(x);\epsilon)\subset V\)。根据
“\(\epsilon\)-\(\delta\) 性质”，
存在 \(\delta > 0\)，使得
\(B(x;\delta)\subset f^{-1}(B(f(x);\epsilon))\subset f^{-1}(V)\)。
:::

::: example
令 \(S\) 为任意集合。则 \(S\) 到自己的恒等映射诱导了一个连续映射
\[
(S,\text{离散}) \to (S,\text{平凡}).
\]
它是连续双射，但除非 \(S\) 是单点集合，它不是同胚。
:::

::: example
令 \(S\) 为拓扑空间 \(X\) 的子空间。
则包含映射 \(S \to X\) 是连续单射。上面的例子显示连续单射未必是子空间的包含映射。
如果一个连续单射 \(f\colon Z \to X\) 满足 \(Z \to f(Z)\) 是同胚，那么我们称
\(f\) 为**嵌入（embedding）**。
通常用带钩的箭头 \(Z \hookrightarrow X\) 来表示嵌入。

如果 \(f\colon Z \hookrightarrow X\) 为嵌入，\(f(Z)\) 是 \(X\) 的开（闭）
子集，那么我们称 \(f\) 是**开（闭）嵌入（open resp. closed embedding）**。
:::

::: example
任何两个有限开区间都是同胚的，同胚可以通过线性变换实现。
开区间
\(\left]{-\frac{\pi}2},{\frac{\pi}2}\right[\)
与整个实数轴同胚。比如，映射
\[
x \mapsto \tan x \colon \left]{-\frac{\pi}2},{\frac{\pi}2}\right[ \to \mathbb{R}
\]
就是这样的一个同胚。由此推知，任何开区间都与 \(\mathbb{R}\) 同胚。
:::

::: remark [[球极投影](http://www.dimensions-math.org/Dim_CH1_E.htm)] {@situation:stereographic-projection}
考虑 \(\mathbb{R}^{3}\) 中的球面 \(\mathbb{S}^{2}\)
\[
\left\{
  (x,y,z) \in \mathbb{R}^3 \colon x^2 + y^2 + z^2 = 1
\right\}.
\]
令 \(N = (0,0,1)\) 为“北极”。
我们来构造一个从 \(\mathbb{S}^{2} \setminus \{N\}\) 到 \(\mathbb{R}^2\) 的同胚。
令 \(P \in \mathbb{S}^{2}\)。则直线 \(NP\) 与平面 \(z=-1\) 有唯一的一个交点
\(P'\)。我们定义 \(\varphi(P) = P'\)。见图 2。

![图 2：球极投影（来源：维基百科）](Topology_image2.png?width=400)

这是一个连续映射。如果几何的直观不足以让读者相信，我们可以写下 \(\varphi\) 的如下公式表示：
\[
\varphi(x,y,z) = \left(\frac{2x}{1-z},\frac{2y}{1-z},-1\right).
\]
几何直观应该可以让读者相信 \(\varphi\) 有一个连续的逆映射。它的公式表示为
\[
\psi(X,Y,-1) =
\left( \frac{4X}{4+X^2+Y^2} , \frac{4Y}{4+X^2+Y^2}, \frac{-4+X^2+Y^2}{4+X^2+Y^2}\right).
\]
读者应该能够将上述操作推广到一般的 \(n\) 维球面，构造出一个从
\(\mathbb{S}^{n}-\{N\}\) 到 \(\mathbb{R}^n\) 的同胚。
:::

在本节最后，我们证明一个常用的构造连续函数的引理：粘贴引理。

::: proposition [粘贴引理] {@proposition:pasting-lemma}
令 \(X\) 与 \(Y\) 为拓扑空间。
令 \((X_{i}){}_{i\in I}\) 为 \(X\) 的一族子空间，\(X = \bigcup_{i\in I} X_i\)。
令 \((f_i \colon X_i \to Y){}_{i\in I}\) 为一族连续映射。
设对任意 \((i,j) \in I\times I\)，
有 \(f_{i}|_{X_i\cap X_j} = f_{j}|_{X_i \cap X_j}\)。假如

- \(X_i\) 为 \(X\) 的开子集，或者

- \(X_i\) 为 \(X\) 的闭子集，且 \(I\) 有限，

则存在唯一的连续映射 \(f \colon X \to Y\) 使得
\(f|_{X_i}=f_i\)。
:::

::: proof
无论如何，条件 \(f_{i}|_{X_i\cap X_j} = f_{j}|_{X_i \cap X_j}\)
保证了映射 \(f \colon X \to Y\)，
\[
f(x)=f_i(x),\quad \text{若\ } x \in X_i
\]
良好定义。我们来验证连续性。

如果 \((X_{i}){}_{i\in I}\) 是开子空间。
令 \(V\) 为 \(Y\) 的开集。则 \(f^{-1}(V)\) 为并集
\(\bigcup_{i\in I} f^{-1}_{i}(V)\)。由于 \(f_i\) 连续，
\(f_i^{-1}(V)\) 在 \(X_{i}\) 中开，因此在 \(X\) 中开。
于是 \(f^{-1}(V)\) 开。

将上面的论证中的每个“开”换成“闭”，利用闭集的有限并性质，就能验证关于闭集的粘贴引理。
:::

**本节所学概念与例子**

- 拓扑 topology
- 粗/细 coarser/finer
- 开集 open set
- 闭集 closed set
- 离散拓扑 discrete topology
- 平凡拓扑 trivial topology
- Sierpiński 空间
- 有限补拓扑 finite complement (or cofinite) topology
- 度量空间 metric space
- 连续映射 continuous map
- 同胚 homeomorphism
- 子空间 subspace
- 不交并 disjoint union
- 内部 interior
- 闭包 closure
- 稠密 dense
- 无处稠密 nowhere dense
- \(\mathbb{R}^n\)、\(D^n\)、\(\mathbf{I}\)、\(\mathbb{S}^n\)
- 球极投影 stereographic projection
- 粘贴引理 pasting lemma

## 习题

::: exercise
构造一个从 \(\mathbb{R}^n\) 到 \(\mathbb{R}^{n}\) 的同胚 \(\varphi\)，同
时满足下面两个条件：

- \(\varphi\) 在 \(\mathbb{R}^{n}\setminus (D^{n})^{\circ}\) 上是恒等映射，

- \(\varphi(0)=p\)，其中 \(p\) 是某个 \((D^{n})^{\circ}\) 中的点。

:::

::: exercise
设 \(\varphi:\mathbb{S}^{1} \to \mathbb{S}^{1}\) 为同胚。
证明存在同胚 \(\psi:D^2 \to D^2\)，使得 \(\psi|_{\mathbb{S}^1}=\varphi\)。
:::

::: exercise [[Hopf 链环](https://en.wikipedia.org/wiki/Hopf_link)]
定义
\[
L = \{(x,y) \in \mathbb{C}^{2} : x^2+ y^2 = 0, |x|^2+|y|^2=1\}.
\]

1. 证明 \(L\) 与 \(\mathbb{S}^1 \amalg \mathbb{S}^1\) 同胚。

2. 描述 \(L\) 在球极投影下的像。

:::

::: exercise [[三叶结](https://en.wikipedia.org/wiki/Trefoil_knot)]
定义
\[
C = \{(x,y) \in \mathbb{C}^{2} : x^2 = y^3\}, \quad
L
= C \cap \{(x,y) \in \mathbb{C}^{2} : |x|^2 + |y|^2 = 1\}.
\]

1. 证明 \(t \mapsto (t^3,t^2):\mathbb{C}\to C\) 是同胚。

2. 证明 \(L\) 同胚于 \(\mathbb{S}^{1}\)。

3. 描述 \(\{(x,y)\in \mathbb{C}^2:|x|^2 = 1/2, |y|^2=1/2\}\)
   在球极投影下的像。

4. 描述 \(L\) 在球极投影下的像。这个像叫做三叶结。

:::

::: exercise
如果 \((X,d)\) 是度量空间。\(Z \subset X\) 是闭子集。
证明 \(f(x)=\inf\{d(z,x):z\in Z\}\) 是 \(X\) 上的连续函数。什么时候 \(f(x)=0\)？
:::

::: exercise
令 \(X\) 为拓扑空间。定义一个子集 \(V\) 为 **\(Z\)-闭集**，如果存在 \(X\) 上的
一族连续函数 \((f_{i}:X \to \mathbb{R})_{i\in I}\)，使得
\[
V = \{x \in X : f_i(x)=0, \forall i \in I\}.
\]
我们称 \(U\) 为 **\(Z\)-开集**，如果 \(X \setminus U\) 为 \(Z\)-闭集。

1. 验证一切\(Z\)-开集构成了 \(X\) 上的一个拓扑（权且叫做 \(Z\)-拓扑）。

2. 验证 \(Z\)-闭集是 \(X\) 的闭集。

3. 如果 \(X\) 的拓扑是某个度量诱导的[^5]，
   那么 \(Z\)-拓扑与 \(X\) 的拓扑是一样的。

:::

::: exercise [开映射] {@exercise:open-map}
拓扑空间之间的映射 \(f:X \to Y\) 叫做**开映射（open map）**
如果 \(X\) 中开集关于 \(f\) 的像是 \(Y\) 中开集。

1. 举例说明开映射未必连续，连续映射未必开。

2. 开映射的复合是开映射。

3. 设 \((U_{i}){}_{i\in I}\) 是 \(X\) 的一个开覆盖。
   如果 \(f|_{U_i}\) 对任何 \(i\) 都是开映射，那么 \(f\) 是开映射。

4. 设 \(k\) 是正整数。
   证明 \(z\mapsto z^k: \mathbb{C} \to \mathbb{C}\) 是开映射。

5. {@item:1-variable-holomorphic-open} 如果 \(X\) 是 \(\mathbb{C}\) 的开子集，
   且 \(f : X \to \mathbb{C}\) 是复
   解析函数，证明 \(f\) 是开映射。\(\boxed{\dagger}\)

:::

::: exercise [Cantor 三分集] {@exercise:cantor-set}
考虑
\[
K = \left\{
  \sum_{n=1}^{\infty} a_{n} 3^{-n}  \in \mathbb{R} : a_{n} =0,2
\right\}.
\]

1. 证明 \(K \subset [0,1]\)。

2. 证明 \(K\) 与区间
   \(\left(\frac{3s+1}{3^{k}}, \frac{3s+2}{3^{k}}\right)\)
   （\(s,k\in\mathbb{Z}\)）不相交。

3. 证明 \(K\) 是 \(\mathbb{R}\) 的闭子集。

4. 找出 \(K^{\circ}\)。

:::

::: exercise [关于粘贴引理]
1. 举例说明在粘贴引理（@proposition:pasting-lemma 第一款）的叙述
   中，如果 \(X_i\) 不是开集，则命题不成立。

2. 举例说明在粘贴引理（@proposition:pasting-lemma 第二款）的叙述
   中，如果 \(X_i\) 是闭集，但是允许 \(I\) 是无限集，命题仍然不成立。

3. 我们称拓扑空间 \(X\) 的子集族
   \((X_i)_{i\in I}\) **局部有限（locally finite）**，
   如果对任何点 \(x \in X\)，存在 \(x\) 的邻域，使得这个邻域只与有限个 \(X_i\) 相
   交。验证关于闭集的粘贴引理（@proposition:pasting-lemma 第二款）
   的题设可以放宽为：假设 \((X_{i})_{i\in I}\) 为局部有限的闭集。

:::

[^1]: 集合 \(X\) 的**幂集**，通常记为 \(2^{X}\)，是指 \(X\) 的一切子集构成的集合。
[^2]: 流形系江泽涵所译。盖取典自《周易·乾》：“云行雨施，品物流形”。
[^3]: [*Sur quelques points du calcul fonctionnel*](https://link.springer.com/article/10.1007/BF03018603). Rend. Circ. Matem. Palermo 22 (1906), 1–72.
[^4]: 按照上面的定义，拓扑空间是一个偶对 \((X,\mathcal{T})\)，
  其中 \(\mathcal{T}\) 是集合 \(X\) 上的一个拓扑。
  但是句子“令 \((X,\mathcal{T})\) 为拓扑空间”过于罗嗦。
  因此我们在不至于引起误会的前提下通常在陈述中省略 \(\mathcal{T}\)。
[^5]: 事实上，
  只需假设 \(X\) 是所谓的[完全正则空间](https://ncatlab.org/nlab/show/Tychonoff+space)即足够了。
