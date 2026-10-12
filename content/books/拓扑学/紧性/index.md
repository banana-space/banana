---
title: 紧性
notices:
  - name: 问题
    items:
      - "“紧开拓扑”一节的脚注中，“等度连续”定义里的量词似乎有误（$y$ 未被使用，$x$ 未被量化）。"
      - "“环绕数”一节中，$W(l)$ 的定义式似乎与“映射 $c$ 的环绕数是 $n$”相差一个符号。"
      - "“环绕数”一节中，“非常接近”的定义及其后出现的交 $\\bigcap_{0=1}^{r-1}$ 的下标似乎有误，与开集 $U_1,\\ldots,U_r$ 的编号也不一致。"
      - "“环绕数”一节中，$W(l)$ 是整数的证明未定义 $\\omega$；$\\vartheta_U$ 的值域似乎应为 $\\left]0,2\\pi\\right[$；$\\vartheta_U$ 的公式中 $\\frac{x}{x^2+y^2}$ 似乎应为 $\\frac{x}{\\sqrt{x^2+y^2}}$。"
      - "“紧拓扑空间的无限乘积”一节中，超滤的定义似乎应要求 $\\mathfrak{F}'$ 严格包含 $\\mathfrak{F}$。"
---

::: -remark [Bourbaki 的讣告里说]
\(\ldots\) car « Dieu est le compactifié
d'Alexandrov[^1] de l'univers » (*Groth*, IV, 22).
:::

![图 1：[Jean-Paul Benzécri](https://en.wikipedia.org/wiki/Jean-Paul_Benzécri)](Jean-paul.png?width=600)

紧性似乎肇源于无穷小分析。微积分学中的闭区间套原理，
[Heine–Borel 定理](https://en.wikipedia.org/wiki/Heine-Borel_theorem)，
以及
[Bolzano–Weierstrass 定理](https://en.wikipedia.org/wiki/Bolzano-Weierstrass_theorem)
都是紧性的化身。
“紧性（compactness）”这个词是由
Fréchet 引入的，尽管他对“紧”的定义与我们将要介绍的定义并不相同：
Fréchet 意义下的紧空间是基于序列的极限而定义的，在当代被叫做“序列紧”。
当代紧的定义基于 Heine–Borel 有限覆盖原理，
是由
P. S. Alexandrov
和 P. S. Urysohn
引入的。

在北美，E. H. Moore 和 H. L. Smith 提出了网（net）和网的收敛概念。
容易证明一个空间是紧的当且仅当任何它上面的网都有收敛子网
（即更广义的 Bolzano–Weierstrass 定理成立）。
在欧洲，Henri Cartan 则鼓吹用滤子（filter）的收敛来刻画连续，
并给出了类似的紧性的刻画。
Moore–Smith 收敛和滤子的收敛这两套理论本质上是等价的。

## 紧性的定义和基本性质 {@sec:compactness}

拓扑空间 \(X\) 称为**紧（compact）** 的，
如果对任何 \(X\) 的开覆盖 \(\mathfrak{U}=(U_i)_{i\in I}\)，都存在 \(I\) 的有限子集
\(J\)，使得 \(X = \bigcup_{i\in J} U_i\)。

需要提请读者注意的是，
Bourbaki 将上面定义的紧空间称为**拟紧（quasi-compact）** 空间，
而定义紧空间为拟紧的 Hausdorff 空间。希望在阅读文献时读者不要产生疑惑。

平凡拓扑是紧的，有限集合上的离散拓扑是紧的。
除了这些肤浅的例子，最基本的紧空间是实轴上的闭区间。
下面的命题我们已经在微积分课程内学过了。

::: example {@proposition:quasi-compactness-closed-interval}
单位闭区间 \([0,1]\) 是紧的。
:::

::: proof
令 \((U_i)_{i\in I}\) 为 \([0,1]\) 的一个开覆盖。
定义
\[
X = \{ x\in [0,1] : \text{ 存在有限个\ }U_i, \text{ 它们的并包含\ } [0,x] \}
\]
那么 \(0 \in X\)。令 \(s = \sup X\)，那么 \(s \in [0,1]\)，
且 \(s > 0\)。我们要证明 \(s=1\)

首先，我们断言 \(s \in X\)。
由于 \(s \in [0,1]\)，
存在 \(j \in I\)，使得 \(s \in U_j\)。因为 \(U_j\) 开，存在半开的区间
\(]a,s]\) 包含于 \(U_j\)。
无妨设 \(a > 0\)。根据 \(X\) 的定义，我们知道 \([0,a]\) 包含于某个有限并
\(U_{i_1} \cup \cdots \cup U_{i_m}\) 之中。
因此
\[
[0,s] \subset [0,a] \cup ]a,s]
\subset U_{i_1}\cup \cdots \cup U_{i_m} \cup U_j.
\]
从而有 \(s \in X\)。

如果 \(s < 1\)，那么存在 \(U_k\) 以及开区间 \(\left]{a},{b}\right[\)，
使得
\(s \in \left]{a},{b}\right[ \subset U_k\)。
但是这表明 \(s + (b-s)/2\)，一个比 \(s\) 大的数，也落在 \(X\) 里。这就与 \(s\)
是 \(X\) 的上确界矛盾了。因此我们必有 \(s = 1\)。这就完成了证明。
:::

本小节介绍五条紧空间的基本性质：

- 紧空间的连续像是紧的，

- Hausdorff 空间的紧子空间是闭的，

- 紧空间的闭子空间是紧的，

- 两个紧空间的积空间是紧的。

- 紧 Hausdorff 空间是“正规”的。

::: proposition {@proposition:continuous-image-quasi-compact}
若 \(f:X \to Y\) 为拓扑空间的连续映射。
若 \(X\) 紧，则 \(\mathrm{Im}(f)\) 紧。
:::

::: proof
无妨设 \(f\) 为满射。任意 \(Y\) 的开覆盖 \((U_i)_{i\in I}\)
关于 \(f\) 的逆像 \((f^{-1}(U_i))_{i\in I}\) 给出了 \(X\)
的开覆盖。由于 \(X\) 紧，存在 \(U_{i_1},\ldots, U_{i_n}\)
使得 \(X = \bigcup_{j=1}^{n} f^{-1}(U_{i_j})\)，
因此 \(Y = f(X) = \bigcup_{j=1}^{n} U_{i_j}\)。
:::

::: proposition {@proposition:quasi-compact-in-hausdorff}
令 \(X\) 为 Hausdorff 空间。
令 \(Z\) 为 \(X\) 的紧子空间。
则 \(Z\) 是闭子集。
:::

::: proof
令 \(x \in X \setminus Z\)。
对任何 \(z \in Z\)，Hausdorff 性质说明，存在 \(z\) 的邻域 \(U_{z}\)，
\(x\) 的邻域 \(V_{x}\)，满足 \(U_{z} \cap V_{x} = \emptyset\)。
由于 \(Z\) 紧，开覆盖 \(\{U_{z}:z\in Z\}\) 有一个有限子覆盖
\(U_{z_1},\ldots,U_{z_n}\)。令 \(V=\bigcap_{i=1}^{n} V_{x_i}\)。
则 \(V\) 是 \(x\) 的一个与 \(Z\) 不交的开集。因此 \(X \setminus Z\)
是开集。
:::

::: corollary {@corollary:compact-to-t2-closed-map}
令 \(f:X \to Y\) 为紧空间到 Hausdorff 空间的连续映射。
则 \(f\) 是闭映射。
特别地，\(f\) 是从 \(X\) 到 \(\mathrm{Im}(f)\) 的商映射；
如果 \(f\) 是连续双射，则 \(f\) 是同胚。
:::

::: proposition {@proposition:quasi-compact-closed-subset}
设 \(X\) 为紧拓扑空间，
\(Z\) 为 \(X\) 的闭子空间。
则 \(Z\) 紧。
:::

::: proof
令 \(\mathfrak{U}\) 为 \(Z\) 的一个开覆盖。
由子空间拓扑的定义，
\(\mathfrak{U}\) 中每个成员都形如 \(V \cap Z\)，
其中 \(V\) 为 \(X\) 中开集。
这些 \(X\) 中的开集 \(V\) 与 \(X \setminus Z\) 构成了
\(X\) 的开覆盖。\(X\) 的紧性保证了
上面的 \(V\) 只需有限个就能盖住 \(Z\) 了。
:::

::: proposition {@proposition:finite-tychonoff}
如果 \(X\) 和 \(Y\) 是紧拓扑空间，那么 \(X \times Y\) 紧。
:::

::: proof
令 \(\mathfrak{U}\) 为 \(X\times Y\) 的开覆盖。
则任何一个 \(\mathfrak{U}\) 中的对象可以用一些开箱子覆盖。
因此，为了证明 \(\mathfrak{U}\) 具有有限子覆盖，
只需验证这些由开箱子构成的“加细”的覆盖具有有限子覆盖。
故在接下来的证明里，我们可以假设 \(\mathfrak{U}\) 的成员都是开箱子。

对任意 \(x \in X\)，考虑空间 \(\{x\} \times Y\)。
由于 \(Y\) 是紧空间，存在有限个 \(\mathfrak{U}\)
中开集 \(U_{1},\ldots,U_{m}\)，使得 \(\{x\} \times Y\)
包含于 \(U_{1} \cup \cdots \cup U_{m}\)。
由于每一个 \(U_{i}\) 都是开箱子，\(U_{i}=V_i\times W_i\)。
令 \(V = \bigcap_{i=1}^{m} V_i\)，则
\(\{x\} \times Y \subset V \times Y \subset \bigcup_{i} U_i\)。
当 \(x\) 跑遍 \(X\) 中的点时，从上述方法构造出来的 \(V\)
构成了 \(X\) 的开覆盖。\(X\) 的紧性保证了存在 \(V_1,\ldots,V_r\)
使得它们覆盖 \(X\)。根据构造，每个 \(V_{i} \times Y\) 被有限个
\(\mathfrak{U}\) 中元素盖住，由于只有有限个 \(V_i\)，
\(X \times Y = \bigcup_{i=1}^{r} V_{i}\times Y\)
可以被有限个 \(\mathfrak{U}\) 中元素盖住。
:::

上述命题中使用的方法也可以推出下面的“管引理”。由于它偶尔会被使用，
我们将它单独拿出来陈述。

::: proposition [管引理] {@proposition:tube-lemma}
设 \(X\)，\(Y\) 为拓扑空间。
设 \(A \subset X\)，\(B \subset Y\) 为紧子空间。
设 \(W\) 为 \(X\times Y\) 的一个包含 \(A\times B\) 的开集。
则存在 \(X\) 的开集 \(U\)，\(Y\) 的开集 \(V\)，使得

- \(A \subset U\)，\(B\subset V\)，以及

- \(U\times V \subset W\)。

:::

管引理的证明留作习题。它的一个直接应用是下述命题。

::: proposition [紧 Hausdorff 空间的正规性] {@proposition:compact-hausdorff-normall}
设 \(X\) 为紧 Hausdorff 空间。则对任何两个互不相交的闭子空间 \(A\)，\(B\)，
存在包含 \(A\) 的开子集 \(U\)，包含 \(B\) 的开子集 \(V\)，
使得 \(U\cap V=\emptyset\)。
:::

::: proof
考虑积空间 \(X \times X\) 的子空间 \(A \times B\)。
则 Hausdorff 性质说明 \(X \times X \setminus \Delta_{X}(X)\)
是 \(X \times X\) 的开子集
（@proposition:hausdorff-diagonal-closed）。
根据管引理（@proposition:tube-lemma），
存在开箱子 \(U \times V\) 满足
\[
A \times B \subset U \times V \subset X \times X \setminus \Delta_X(X).
\]
翻译成 \(X\) 上子集的语言就完成了证明。
:::

## 紧性的简单应用

::: corollary [Heine–Borel] {@corollary:heine-borel-high-dimension}
令 \(Z\) 为空间 \(\mathbb{R}^{n}\) 的子空间。
则 \(Z\) 紧的必要且充分条件是 \(Z\) 是一个有界闭集。
:::

::: proof
若 \(Z\) 有界闭，则它包含于某个充分大的方体 \([-N,N]^{n}\)
之中。由于后者紧
（@proposition:quasi-compactness-closed-interval，
@proposition:finite-tychonoff），
我们可以通过使用 @proposition:quasi-compact-closed-subset
而取胜。

反之，如果 \(Z\) 紧，那么它的开覆盖
\(\bigcup_{r>0}B(0;r)\cap Z\) 有
有限覆盖
\[
B(0;r_1)\cap Z,\ldots, B(0;r_n)\cap Z.
\]
设 \(r_1 \leq r_2 \leq \cdots \leq r_n\)，
我们获得了包含关系 \(Z \subset B(0;r_n)\)，因此它有界。
它是闭集，因为 \(\mathbb{R}^{n}\) 为 Hausdorff 空间
（@proposition:quasi-compact-in-hausdorff）。
:::

::: example
球面 \(\mathbb{S}^{n}\)，圆盘 \(D^n\)，正交群 \(\mathrm{O}(n)\)，
酉群 \(\mathrm{U}(n)\) 都是紧空间，因为它们都是某 Euclid 空间中的有界闭集。
实和复射影空间是球面的商空间，从而是紧空间的连续像，因此它们是紧空间。
:::

::: example [代数基本定理] {@example:fund-thm-algebra}
作为紧性的一个应用，我们来证明代数基本定理。
设 \(f \in \mathbb{C}[t]\) 为多项式。
则它定义了一个映射 \(f: \mathbb{C} \to \mathbb{C}\)。
我们要证明存在 \(t_0 \in \mathbb{C}\)，使得 \(f(t_0)=0\)。

我们断言，\(f\) 诱导了一个连续映射
\(\widetilde{f}:\mathbb{C}\mathrm{P}^1 \to \mathbb{C}\mathrm{P}^1\)。
首先，我们回忆射影空间的粘贴构造，
在这个构造里，\(\mathbb{C}\mathrm{P}^1\) 是两片开集 \(U_0,U_1\)
的并，其中 \(U_0 = \{[1,t] : t \in \mathbb{C}\}\)，
\(U_1 = \{[s,1] : s \in \mathbb{C}\}\)。
多项式 \([1,t]\mapsto [1:f(t)]\) 自然地是一个 \(U_0\) 到
\(\mathbb{C}\mathrm{P}^1\) 的映射。
如果 \(f(t) = a_0 + a_1 t + \cdots + a_n t^n\)（\(a_n\neq 0\)），
我们定义 \(g(s) = a_0 s^n + a_1 s^{n-1} + \cdots + a_n\)。
则映射
\[
[s,1] \mapsto [s^n, g(s)] : U_1 \to U_1 \subset \mathbb{C}\mathrm{P}^{1}
\]
与 \([1,t]\mapsto [1,f(t)]\) 在 \(U_0 \cap U_1\) 上相等。
于是根据粘贴引理，@proposition:pasting-lemma，
我们得到了一个良好定义的映射
\(\widetilde{f}:\mathbb{C}\mathrm{P}^1 \to \mathbb{C}\mathrm{P}^1\)。

由于 \(\widetilde{f}|_{U_i}\) 是开映射
（@exercise:open-map 的 @item:1-variable-holomorphic-open），
\(\widetilde{f}\) 是开映射。于是
\(\widetilde{f}(\mathbb{C}\mathrm{P}^{1})\) 是 \(\mathbb{C}\mathrm{P}^{1}\)
的开子空间；由于 \(\mathbb{C}\mathrm{P}^1\) 是紧 Hausdorff 空间，
\(\widetilde{f}(\mathbb{C}\mathrm{P}^1)\) 是 \(\mathbb{C}\mathrm{P}^{1}\)
的闭子空间（@corollary:compact-to-t2-closed-map）。
于是 \(\widetilde{f}(\mathbb{C}\mathrm{P}^1)\)
是连通空间 \(\mathbb{C}\mathrm{P}^{1}\) 的既开又闭又非空子集，因此
\(\widetilde{f}(\mathbb{C}\mathrm{P}^1) = \mathbb{C}\mathrm{P}^1\)。

于是  \(\widetilde{f}^{-1}([1,0])\neq\emptyset\)。
容易验证，\(\widetilde{f}^{-1}([0,1])=[0,1]\)，
故存在 \(t_0\)，使得 \(\widetilde{f}([1,t_0])=[1,0]\)，即
\(f(t_0)=0\)。
这就证明了代数基本定理。
:::

接下来介绍一个关于紧度量空间的性质。
我们在今后将会不时用到这个它。

::: proposition [Lebesgue 数引理] {@proposition:lebesgue-number}
令 \(X\) 为紧度量空间。令 \(\mathfrak{U}\)
为 \(X\) 的一个开覆盖。则存在 \(r > 0\)，使得对任何 \(x \in X\)，
存在 \(U \in \mathfrak{U}\)，使得 \(B(x;r)\subset U\)。
:::

::: proof
由于 \(X\) 紧，无妨设 \(\mathfrak{U}\) 只有有限个成员。
对任意 \(U \in \mathfrak{U}\)，
令 \(f_{U}(x) = \inf\{d(x,y):y\notin U\}\)。
令 \(f(x) = \max\{f_{U}(x):U\in \mathfrak{U}\}\)。
则 \(f: X \to \mathbb{R}_{> 0}\) 为连续函数。
由于 \(X\) 紧，\(f(X)\) 紧，因此它是 \(\mathbb{R}_{\geq 0}\)
的有界闭集。令 \(r = \min f(X) > 0\)。
对任意 \(x \in X\)，我们有 \(f(x) \geq r\)，
即 \(d(x, X\setminus U) \geq r\) 对某个 \(U \in \mathfrak{U}\)
成立。于是 \(B(x;r) \subset U\)。
:::

## 紧开拓扑 {@sec:compact-open}

令 \(X\) 与 \(Y\) 为拓扑空间。
令 \(\mathcal{C}(X,Y)\) 为一切从 \(X\) 到 \(Y\) 的连续映射的全体构成的集合。
在这一小节，我们利用紧性来定义集合 \(\mathcal{C}(X,Y)\) 上的一个拓扑，
叫做**紧开拓扑（compact-open topology）**。
紧开拓扑是由一组拓扑子基生成的，这个子基中的元素形如
\[
\mathscr{M}_{K,U} = \{f \in \mathcal{C}(X,Y) : f(K) \subset U\},
\]
其中 \(K\) 为 \(X\) 的紧子空间，
\(U\) 为 \(Y\) 的开子空间。

今后，凡是将 \(\mathcal{C}(X,Y)\) 看作拓扑空间，如果未加申明，总赋予它紧开拓扑。
空间 \(\mathcal{C}(X,Y)\) 有时也被称为**函数空间**。

我们列举几个紧开拓扑的基本性质。

1. 如果 \(X\) 是离散空间，那么 \(\mathcal{C}(X,Y)\) 的紧开拓扑与乘积空间 \(Y^{X}\)
   的积拓扑一致。

2. {@item:embedding-into-function-space} 空间 \(Y\) 可以嵌入到 \(\mathcal{C}(X,Y)\) 中：
   将 \(y \in Y\)
   送到常值映射 \(c(y)(x) \equiv y\) 是从 \(Y\) 到 \(\mathcal{C}(X,Y)\) 的嵌入。
   事实上，我们有 \(c^{-1}(\mathscr{M}_{K,U})=U\)，因此 \(c\) 是连续单射；
   并且一切 \(Y\) 的开集都可以如此得到，因此 \(c\) 是嵌入。

3. 函数空间 \(\mathcal{C}(X,Y)\) 为 Hausdorff 的必要且充分条件是 \(Y\) 为 Hausdorff
   空间。事实上，如果 \(f,g\) 为两个不同的连续映射，必然存在 \(x \in X\)，
   使得 \(f(x) \neq g(x)\)。由于 \(Y\) Hausdorff，存在 \(f(x)\) 的邻域 \(U\)，
   \(g(x)\) 的邻域 \(V\)，使得 \(U \cap V =\emptyset\)。于是我们有
   \[
   \begin{aligned}
     f \in \mathscr{M}_{\{x\}, U} &, g\in \mathscr{M}_{\{x\}, V}, \\
     \mathscr{M}_{\{x\}, U} &\cap \mathscr{M}_{\{x\}, V} = \emptyset.
   \end{aligned}
   \]
   反之，如果 \(\mathcal{C}(X,Y)\) Hausdorff，通过嵌入 \(c\) 我们可以将 \(Y\) 实现为
   \(\mathcal{C}(X,Y)\) 的子空间。因此 \(Y\) 也 Hausdorff。

4. 如果 \(Y\) 的拓扑是由一个度量 \(d\) 诱导的，那么 \(\mathcal{C}(X,Y)\) 的紧开拓扑
   的一个拓扑基是
   \[
   B_{K}(f,\epsilon) = \{g \in \mathcal{C}(X,Y) : \sup\{d(f(x),g(x)):x\in K\}< \epsilon\}.
   \]
   其中 \(K\) 跑遍 \(X\) 的紧子空间。
   在这个拓扑下，序列 \(f_n\) 收敛到 \(f\) 的意思是：对任何的 \(X\)
   的紧子空间 \(K\)，函数 \(f_{n}|_K\) **一致**收敛于 \(f\)。
   因此，紧开拓扑在这个情形也被叫做
   **紧收敛拓扑（compact convergence topology）**。

函数空间 \(\mathcal{C}(X,Y)\) 的子空间的紧性的刻画在分析中颇为有用。比较常见的是
Arzela–Ascoli 定理：如果 \(Y\) 是度量空间，
\(\mathcal{F}\) 为 \(\mathcal{C}(X,Y)\) 的子空间，假设 \(\mathcal{F}\)“等度连续”[^2]，
并且对一切 \(a \in X\)，空间
\[
\mathcal{F}_{a} = \{f(a) \in Y : f \in \mathcal{F}\}
\]
在 \(Y\) 中有紧的闭包，那么 \(\mathcal{F}\) 在 \(\mathcal{C}(X,Y)\) 中有紧的闭包。
在我们的课程中不会使用这个定理。因此我们略去它的证明。

相比于函数空间的紧性，它的连通性在这门课程中更为重要。

::: example {@example:star-shape-function-space-path-conn}
作为一个导引，
我们来说明对任何拓扑空间 \(X\)，函数空间 \(\mathcal{C}(X,\mathbb{R})\) 都是道路连通的。
事实上，对任意的 \(f \in \mathcal{C}(X,\mathbb{R})\)，定义
\[
c_{f}: [0,1] \to \mathcal{C}(X,\mathbb{R}), \quad
c_{f}(t) = t\cdot f.
\]
为了说明 \(c_{f}\) 连续，我们要验证 \(c_{f}^{-1}(\mathscr{M}_{K,V})\)
是 \([0,1]\) 的开集。展开定义，它等于
\[
\{s \in [0,1] : s \cdot f(K) \subset V\}.
\]

对任意 \(s \in [0,1]\)，积空间 \([0,1] \times f(K)\) 有一个紧子集
\(\{s\} \times f(K)\)。根据实数数乘
\[
\mu:  \mathbb{R} \times \mathbb{R} \to \mathbb{R},\quad
(a,b) \mapsto a\cdot b
\]
的连续性，集合
\[
\mathscr{U} = \{(a,b) \in [0,1] \times f(K) : ab \in V\} = \mu^{-1}(V) \cap ([0,1] \times f(K))
\]
是空间 \([0,1] \times f(K)\) 的一个包含了 \(\{s\} \times f(K)\) 的开集。
根据管引理，@proposition:tube-lemma，存在 \(s\) 的邻域 \(V\)
使得 \(V \times f(K) \subset \mathscr{U}\)。
这就证明了 \(c_{f}^{-1}(\mathscr{M}_{K,V})\) 是开集。

\(\mathbb{R}^{n}\) 的开子集 \(U\) 叫做**星形区域（star-shape region）**
如果存在 \(p \in U\)，使得对一切 \(q \in U\)，
连结 \(p,q\) 的线段也落在 \(U\) 中。
比如 \(\mathbb{R}^{n}\) 中的凸开集就是星形区域。
上一段论证对一切 \(\mathbb{R}^{n}\) 的星形区域都成立。
:::

## 环绕数

在这一段里，我们考虑函数空间
\(\Lambda=\mathscr{C}(\mathbb{S}^{1};\mathbb{R}^{2}\setminus\{0\})\)。
我们将说明这个拓扑空间不是连通的。
因此，根据 @example:star-shape-function-space-path-conn，
\(\mathbb{R}^{2} \setminus \{0\}\) 与 \(\mathbb{R}^{2}\) 不同胚。

为此，我们将构造一个 \(\Lambda\) 上的一个局部常值函数，但它不是常值。
这个函数叫做映射 \(l: \mathbb{S}^{1} \to \mathbb{R}^{2}\setminus\{0\}\)
的**环绕数（winding number）**。定义环绕数的方法很多，
我们使用微积分的方法。

首先，我们对**可微映射**
\(l: \mathbb{S}^{1} \to \mathbb{R}^{2}\setminus\{0\}\)
来定义（关于原点的）环绕数。我们说 \(l\) 是可微的，如果复合映射
\[
c: [0,1] \xrightarrow{q} \mathbb{S}^{1} \xrightarrow{l} \mathbb{R}^{2} \setminus\{0\}
\]
的每个分量都可以扩张成可微的周期函数，
这里，\(q(t) = (\cos(2\pi t),\sin(2\pi t))\) 是粘合 \(\{0,1\}\) 的商映射。

对可微的 \(l\)，我们定义
\[
\begin{aligned}
  W(l)
  &= \frac{1}{2\pi} \int_{c} \frac{y\mathrm{d}x-x \mathrm{d}y}{x^2+y^2}\\
  &= \frac{1}{2\pi} \int_{0}^{1} \frac{x'(t)y(t) - y'(t)x(t)}{x(t)^2 + y(t)^{2}} \mathrm{d}t
\end{aligned}
\]
（路径积分）。

如果 \(l\) 不是可微的，我们用逼近的手段来定义 \(l\) 的环绕数。

::: definition {@definition:very-close}
我们称两个映射 \(l_1, l_2 \in \Lambda\) 叫做“非常接近”的，
如果存在正整数 \(r\)，\([0,1]\) 的分划
\[
0 = a_0 < a_1 < \cdots < a_r = 1,
\]
以及 \(\mathbb{R}^{2} \setminus \{0\}\) 的凸开集
\(U_1,\ldots,U_r\)，使得
\[
l_1, l_2 \in \bigcap_{0=1}^{r-1} \mathscr{M}_{q([a_i,a_{i+1}]),U_{i}}.
\]
“非常接近”生成了一个等价关系，等价的道路叫做“接近”的。
:::

类似于 @example:star-shape-function-space-path-conn 中的论证，
我们知道如果 \(l_1\) 与 \(l_2\) 非常接近，那么映射
\[
s \mapsto sl_1 + (1-s)l_2 : [0,1] \to \Lambda
\]
就是一个 \(\Lambda\) 中连结 \(l_1\) 与 \(l_2\) 的道路。

我们对不一定可微的映射 \(l\)，定义它的环绕数为 \(W(l')\)，其中 \(l'\) 是一个与
\(l\) 接近的可微映射。为了说明这个定义有意义，需要验证两件事：

- 存在与 \(l\) 接近的可微映射；

- 互相接近的可微映射有一样的环绕数。

上述第一款可以用微积分课程中学到的逼近定理予以证明。
为了今后方便，我们将证明稍微强一点的结论。

::: proposition {@proposition:existence-near-loop}
设 \(l: \mathbb{S}^{1} \to \mathbb{R}^{2} \setminus \{0\}\)
为连续映射。设 \(o\) 为 \(\mathbb{S}^{1}\) 上一点。则存在与 \(l\) 非常接近的可微的映射
\(\widetilde{l}: \mathbb{S}^{1} \to \mathbb{R}^{2}\setminus\{0\}\)，
满足 \(\widetilde{l}(o) = l(o)\)。
:::

而第二款则是因为环绕数的一个特别性质。

::: proposition {@proposition:winding-number-integer}
对任何可微映射 \(l \in \Lambda\)，\(W(l)\) 是整数。
:::

如果承认 @proposition:winding-number-integer，
那么对两条非常接近的可微映射 \(l_1\)，\(l_2\)，数值
\[
W(s l_1 + (1-s)l_2)
\]
一方面是整数，另一方面按公式看又是 \(s\) 的连续函数，它只能是常数。

这样就完成了对任何映射 \(l \in \Lambda\) 的环绕数的定义。
按照定义，对任何 \(l\)，环绕数在它的某个形如
\(\bigcap_{0=1}^{r-1} \mathscr{M}_{[a_i,a_{i+1}],U_{i}}\)
的邻域上是常数。因此我们得到了局部常值整值函数
\[
W: \Lambda \to \mathbb{Z}.
\]
然而，\(W\) 不是常值函数。读者可以平凡地验证，映射
\[
c: t \mapsto (\cos(2n\pi t), \sin(2n\pi t)),
\]
其中 \(n \in \mathbb{Z}\)，的环绕数是 \(n\)。

::: proof [@proposition:existence-near-loop 的证明]
在这一段里，我们将 \(\mathbb{S}^{1}\) 上的连续函数等同于 \(\mathbb{R}\)
上周期为 1 的连续函数。

我们先来回忆数学分析的内容。考虑函数
\[
F_{N}(t) = \frac{1}{N} \frac{\sin^{2}(N\pi t)}{\sin^{2}(\pi t)}, \quad
t \in [0,1]
\]
（“Fejér 核”）。
由于 \(F_{N}(0) = F_{N}(1)\)，函数 \(F_{N}\) 决定了 \(\mathbb{S}^{1}\)
上的一族可微函数。运用分析学的知识，可以验证 \(F_{N}\) 满足如下条件。

- 对一切 \(n\geq 1\)，
  \[
  \int_{0}^{1} F_{n}(t) \; \mathrm{d}t= 1.
  \]

- 存在常数 \(M>0\)，使得 \(\int_{0}^{1}|F_{n}| \mathrm{d}t \leq M\) 对一切 \(n\geq 1\)
  成立。

- 对每个 \(1> \delta > 0\)，
  \[
  \int_{\delta}^{1-\delta} |F_{n}|\; \mathrm{d}t
  \to 0 \quad (n \to \infty).
  \]

对连续函数 \(u: \mathbb{S}^{1} \to \mathbb{R}\)，定义
\[
u_{n}(t)  = \int_{0}^{1} u(y)F_{n}(t-y) \; \mathrm{d}y.
\]
则根据分析的知识可以验证，\(u_{n}\) 是可微函数，并且对任何 \(\epsilon > 0\)，
存在 \(N\)，使得对 \(n > N\)，和一切 \(t \in \mathbb{S}^{1}\)，都有
\[
|u_{n}(t) - u(t)| < \epsilon.
\]

现在回到我们的问题。我们有一个回路
\(l: \mathbb{S}^{1} \to \mathbb{R}^{2} \setminus \{0\}\)。
通过坐标，可以将 \(l\) 写成 \(l(t) = (u(t),v(t))\)。
根据上述回忆，对任意 \(\epsilon > 0\)，我们可以找到 \(\mathbb{S}^{1}\) 上的可微函数
\(\widetilde{l}(t) = (\widetilde{u}(t),\widetilde{v}(t))\)，满足
\[
|\widetilde{l}(t) - l(t) | < \epsilon,
\]
对一切 \(t \in \mathbb{S}^{1}\) 成立。由于 \(l(\mathbb{S}^{1})\) 是
\(\mathbb{R}^{2}\setminus\{0\}\) 的紧子集，根据 Lebesgue 数引理
（@proposition:lebesgue-number），
存在 \(0=a_0 < \ldots < a_{n-1} < a_n=1\)，
使得 \(l(q([a_{i},a_{i+1}]))\) 落在某个半径为 \(\epsilon\) 的开圆盘 \(D_i\)中
并且这些圆盘都与 \(0\) 不交。
按照 \(\widetilde{l}\) 的选取，
\(\widetilde{l} \in \bigcap_{i}\mathscr{M}_{q[a_i,a_{i+1}],D_i}\)，
即 \(\widetilde{l}\) 与 \(l\) 非常接近。

我们可以将 \(\widetilde{l}\) 稍微平移一下，使得
\(\widetilde{l}(o)=l(o)\)，但是三角形不等式保证了新的 \(\widetilde{l}\) 与
\(l\) 之间的距离不会超过 \(2\epsilon\)。因此我们总可以保证 \(\widetilde{l}\)
与 \(l\) 在点 \(o\) 处取值相等。
:::

::: proof [@proposition:winding-number-integer 的证明]
令 \(U = \mathbb{R}^{2} \setminus \{(x,0) : x > 0\}\)，
\(V = \mathbb{R}^{2} \setminus \{(x,0) : x < 0\}\)，
则 \(\mathbb{R}^{2} \setminus \{0\} = U \cup V\)。
定义 \(\vartheta_{U}: U \to \left]{-\pi},{\pi}\right[\)
为点 \((x,y)\) 与 \(x\) 正方向所构成的夹角，辐角取在开区间
\(\left]{0},{2\pi}\right[\)，
类似定义 \(\vartheta_{V}:V \to \left]{-\pi},{\pi}\right[\)。
可以写下来这些函数的公式，比如
\[
\vartheta_{U}(x,y) =
\begin{cases}
  \arccos \left( \frac{x}{x^2 + y^2} \right), & y \geq 0; \\
  2\pi - \arccos \left( \frac{x}{x^2 + y^2} \right)& y \leq 0.
\end{cases}
\]
则 \(\vartheta_{U}\) 分段可微。通过复合函数求导，
\(\mathrm{d}\vartheta_{U} = \omega|_{U}\)。
读者可以类似处理 \(\vartheta_{V}\)。

对任意可微映射 \(c:[a,b]\to U\)，应用微积分基本定理，有
\[
\int_{c} \omega = \vartheta_{U}(c(b)) - \vartheta_{U}(c(a)).
\quad
\]
类似地，对可微映射 \(c:[a,b] \to V\)，有
\[
\int_{c} \omega = \vartheta_{V}(c(b)) - \vartheta_{V}(c(a)) .
\]

利用 Lebesgue 数引理（@proposition:lebesgue-number），
对任意道路 \(c: [0,1] \to \mathbb{R}^{2} \setminus \{0\}\)，
存在分割
\[
0 = a_0 < a_1 < \cdots < a_n = 1
\]
使得要么 \(c([a_i,a_{i+1}]) \subset U\)，
要么 \(c([a_i,a_{i+1}]) \subset V\)。
如果
\(l:[0,1] \to \mathbb{R}^{2}\setminus\{0\}\) 是一条回路，
即 \(l(0) = l(1)\)，那么 \(\int_{l} \omega\) 是 \(2\pi\) 的整数倍。
由此推出对可微映射 \(l:\mathbb{S}^{1} \to \mathbb{R}^{2} \setminus \{0\}\)，
\(W(l)\) 是整数。
:::

::: remark [回路的极坐标表示] {@situation:polar-representation-loop}
设 \(l:[0,1] \to \mathbb{R}^{2} \setminus\{0\}\)
为可微回路，坐标表示为 \(t \mapsto (u(t),v(t))\)。定义
\[
\theta(t) = \int_{l|_{[0,t]}} \omega = \int_{0}^{t} \frac{u(s)v'(s) - v(s)u'(s)}{u(s)^{2} + v(s)^{2}}\; \mathrm{d}s.
\]
则利用微分学可以验证

```math {@eq:polar-representation-loop}
l(t) = \sqrt{u(t)^2 + v(t)^{2}} \cdot (\cos \theta(t), \sin \theta(t)).
```

用中学数学的语言，\((|l(t)|, \theta(t))\) 是可微回路 \(l\) 的**极坐标表示**。
:::

## 局部紧空间

拓扑空间 \(X\) 叫做**局部紧（locally compact）** 的，
如果对任何 \(x \in X\)，存在 \(x\) 的邻域 \(U\)，
使得 \(U\) 含于一个 \(X\) 的紧子空间中。
这个概念通常只对 Hausdorff 空间来定义，因为这时这个概念的行为比较良好。

::: proposition {@proposition:hausdorff-local-compactness-equiv-definition}
设 \(X\) 为 Hausdorff 空间。则下面的陈述等价。

1. \(X\) 局部紧；

2. 对任意 \(x\)，任意 \(x\) 的邻域 \(U\)，存在 \(x\) 的邻域 \(V\)，
   满足：\(\overline{V}\) 紧，\(V \subset \overline{V} \subset U\)；

3. 对任意 \(X\) 的紧子空间 \(K\) 和任意包含 \(K\) 的开子空间 \(U\)，
   存在开集 \(V\)，满足：\(\overline{V}\) 紧，
   \(K \subset V \subset \overline{V} \subset U\)；

4. \(X\) 有一个拓扑基，它的成员都是具紧闭包的开子集。

:::

::: proof
(1) \(\Rightarrow\) (2)。
令 \(G\) 为 \(x\) 的邻域使得 \(G\) 包含于一个 \(X\) 的紧子空间中。
根据 @proposition:quasi-compact-closed-subset 和
@proposition:quasi-compact-in-hausdorff，
\(\overline{G}\) 紧。由于 \(\{x\}\)
和 \(\overline{G} \setminus \overline{G} \cap U\)
是紧 Hausdorff 空间 \(\overline{G}\) 的两个互不相交的闭子空间，
由 @proposition:compact-hausdorff-normall 知，
存在 \(\overline{G}\) 的开子空间
\(V,W\)，使得
\[
x \in V, \quad
\left( (\overline{G} \setminus G) \cup (\overline{G} \setminus\overline{G} \cap U)\right) \subset W,
\]
并且 \(V \cap W = \emptyset\)。
由于 \(V \cap (\overline{G} \setminus G) = \emptyset\)，
我们有 \(V \subset G\)。故它是 \(G\) 的开子空间，因而是 \(X\) 的开子空间。
同时，上面的等式还推出
\[
\overline{V} \subset \overline{G} \setminus W \subset G \cap U \subset U
\]
即 (2) 成立。

(2) \(\Rightarrow\) (3)。
对每个 \(x \in K\) 都选择一个 (2) 中的 \(V\)。
利用有限覆盖性即得。

(2) \(\Rightarrow\) (4)。取闭包为紧的开集即可。

(4) \(\Rightarrow\) (1) 和 (3) \(\Rightarrow\) (2) 为显然。
:::

任何局部紧 Hausdorff 空间只需多添入一个点，都可以变成紧
Hausdorff 空间——这叫做局部紧 Hausdorff 空间的 **Alexandrov 紧化**。
见 @exercise:alexandroff-extension。

日常生活中遇到的许多空间都是局部紧的 Hausdorff 空间。
局部紧 Hausdorff 空间的子空间未必局部紧（比如有理数空间 \(\mathbb{Q}\)），
但是它有一大类好的子空间仍然局部紧。

::: definition {@definition:locally-closed-subset}
拓扑空间 \(X\) 的子空间 \(A\) 叫做**局部闭（locally closed）**
的，如果 \(A\) 形如 \(G \cap F\)，其中 \(G\) 是 \(X\) 的开集，
\(F\) 是 \(X\) 的闭集。

局部闭的两个等价刻画如下：

- \(A \subset X\) 局部闭当且仅当对任意 \(a \in A\)，
  存在 \(a\) 在 \(X\) 中的邻域 \(U\)，使得 \(A \cap U\)
  是 \(U\) 的闭子集。

- \(A \subset X\) 局部闭当且仅当 \(A\) 是它的闭包的开子空间。

:::

::: proposition {@proposition:local-compact-subspace}
局部紧 Hausdorff 空间的子空间是局部紧的当且仅当它是局部闭的。
:::

::: proof
首先假设 \(A\) 是局部紧 Hausdorff 空间 \(X\) 的局部闭子集。
假设 \(A = G \cap F\)，其中 \(G\) 是 \(X\) 的开集，
\(F\) 是 \(X\) 的闭集。
任取 \(a \in A\)。
根据 @proposition:hausdorff-local-compactness-equiv-definition，
存在 \(a\) 在 \(X\) 里的邻域 \(U\)，\(\overline{U}\) 紧，
且
\[
a \in U \subset \overline{U} \subset G.
\]
由于 \(F\) 是闭集，\(\overline{U} \cap F\) 是紧空间
\(\overline{U}\) 中闭集，因此紧。容易验证
\(\overline{U} \cap F\) 是 \(U\cap F\) 在 \(F\) 中的闭包。
因此 \(U \cap F\) 就是 \(a\) 在 \(A = G\cap F\) 中的一个
闭包为紧的邻域。

反之，假设 \(A\) 局部紧。
则对任何 \(a \in A\)，存在它在 \(X\) 中的邻域 \(U\)，使得
\(U \cap A\) 在 \(A\) 中的闭包 \(E\) 是紧的。
但 \(X\) 是 Hausdorff 空间，\(E\) 从而是 \(X\) 中闭集
（@proposition:quasi-compact-in-hausdorff）。
于是 \(U \cap A = U \cap E\) 是 \(U\) 中闭集。
因此 \(A\) 局部闭。
:::

流形是局部紧的。

射影空间
\(\mathbb{C}\mathrm{P}^{n}\) 关于 Zariski 拓扑
（@exercise:zariski-topology-on-cpn）的局部闭子集叫做
**拟射影代数簇（quasi-projective algebraic variety）**
如果我们赋予一个拟射影代数簇来自 \(\mathbb{C}\mathrm{P}^{n}\)
的标准拓扑（而不是 Zariski 拓扑），那么它是局部紧的 Hausdorff 空间。

## 指数法则

在集合的范围内，映射
\[
X\times Y \to Z, (x,y) \mapsto f(x,y)
\]
会诱导映射
\[
X \to Z^{Y}, x \mapsto f_x \quad \text{其中}\; f_{x}(y) = f(x,y).
\]
即存在典则的一一映射
\[
(Z^{Y})^{X} \xrightarrow{\sim} Z^{X \times Y}.
\]
这称为**指数法则（exponential law）**。
我们希望在拓扑空间的范围内得到类似的结果，以函数空间 \(\mathcal{C}(Y,Z)\)
替代乘积集合 \(Z^{Y}\)。
拓扑的指数法只对一部分空间，比如局部紧 Hausdorff 空间，成立。

然而局部紧 Hausdorff 空间的全体对于其它重要的拓扑操作不封闭（比如取商空间）。
经过一系列努力，现在已经知道了，存在一类空间（叫做 **k-空间**），
它们涵盖了所有同伦论意义下重要的拓扑空间，满足指数法则，且对重要的拓扑操作封闭。
只是对于 k-空间，不仅空间的概念变化了，函数空间的构造也发生了变化。
我们在这个启蒙课程中对这个问题不予讨论。对此有兴趣的读者可以阅读 Ronnie Brown 的书
[“Topology and groupoids”](http://www.groupoids.org.uk/topgpds.html)
的 5.9 节。

::: proposition {@proposition:product-to-hom-is-contiunuous}
令 \(X, Y\) 和 \(Z\) 为拓扑空间。
令 \(f:X \times Y \to Z\) 为连续映射。对任意 \(x \in X\)，
令 \(f_x: Y \to Z\) 为 \(f_x(y) = f(x,y)\)（显然 \(f_x\) 为连续映射）。
则映射
\[
\alpha : X \to \mathcal{C}(Y,Z), \quad x \mapsto f_{x}
\]
为连续映射。
:::

::: proof
令 \(\mathscr{M}_{K,U}\) 为 \(\mathcal{C}(Y,Z)\) 的一个基本开集。
只需验证 \(\alpha^{-1}(\mathscr{M}_{K,U})\) 为 \(X\) 的开集。
展开定义，
\[
\alpha^{-1}(\mathscr{M}_{K,U}) =
\{ x\in X : f(x,y) \in U, \forall y \in K\}.
\]
若 \(x \in \alpha^{-1}(\mathscr{M}_{K,U})\)，
则 \(f^{-1}(U)\) 包含了 \(\{x\} \times K\)。
根据管引理，@proposition:tube-lemma，
存在开箱子 \(V \times W\) 包含 \(\{x\} \times K\)，
满足 \(f(V\times W) \subset U\)。
于是 \(V \subset \alpha^{-1}(\mathscr{M}_{K,U})\)。
这就证明了 \(\alpha^{-1}(\mathscr{M}_{K,U})\) 为 \(X\) 的开子集，
从而验证了 \(\alpha\) 的连续性。
:::

::: proposition {@proposition:evaluation-locally-compact-hausdorff-continuous}
设 \(Y\) 是局部紧 Hausdorff 空间。则映射
\[
\mathrm{ev} : \mathcal{C}(Y,Z) \times Y \to Z, \quad \mathrm{ev}(f,y)=f(y)
\]
是连续映射。
:::

::: proof
令 \(f\in \mathcal{C}(Y,Z)\)，\(y \in Y\)。
令 \(U\) 是 \(f(y)\) 的邻域。
根据 @proposition:hausdorff-local-compactness-equiv-definition，
存在 \(y\) 的闭包为紧的邻域 \(V\)，满足
\[
y \in V \subset \overline{V} \subset f^{-1}(U).
\]
因此 \(\mathscr{M}_{\overline{V},U}\times V\) 是一个包含 \((f,y)\) 的开集，
并且
\(\mathrm{ev}(\mathscr{M}_{\overline{V},U}\times V) \subset U\)，
所以 \(\mathrm{ev}\) 连续。
:::

::: corollary {@corollary:locally-compact-exponential-rule}
设 \(X, Y\) 和 \(Z\) 为拓扑空间，\(Y\) 局部紧 Hausdorff。
设 \(\alpha: X \to \mathcal{C}(Y,Z)\) 为连续映射，则
\[
X \times Y \to Z,\quad (x,y)\mapsto \alpha(x)(y)
\]
为连续映射。
:::

::: proof
题设中的映射为下列连续映射的复合
\[
X \times Y \xrightarrow{\alpha \times \mathrm{Id}_{Y}} \mathcal{C}(Y,Z) \times Y \xrightarrow{\mathrm{ev}} Z
\]
因此连续。
:::

::: corollary [J. H. C. Whitehead] {@corollary:locally-compact-times-quotient-map}
设 \(f: X \to X^{\ast}\) 为商映射，\(Y\) 为局部紧 Hausdorff 空间。
则乘积映射 \(f\times \mathrm{Id}_{Y} : X \times Y \to X^{\ast} \times Y\)
为商映射。
:::

::: proof
设 \(h: X^{\ast}\times Y \to T\) 为任意满足
\(\widetilde{h}=h\circ (f\times \mathrm{Id}_{Y})\) 连续的映射。
我们要证明 \(h\) 连续。

映射 \(\widetilde{h}\) 诱导了连续映射
\(\widetilde{\alpha}: X \to \mathcal{C}(Y,T)\)（@proposition:product-to-hom-is-contiunuous）。
对任何满足 \(f(x) = f(x')\) 的点 \(x,x' \in X\)，以及任意 \(y \in Y\)，
我们有
\[
\widetilde{\alpha}(x)(y) = \widetilde{h}(x,y) = h(f(x),y) = h(f(x'),y) = \widetilde{\alpha}(x')(y).
\]
因此终拓扑的泛性质（@proposition:universal-property-final-topology）
给出了连续映射
\[
\alpha: X^{\ast} \to \mathcal{C}(Y,T)
\]
使得下图交换
\[
\begin{tikzcd}
  X \ar[swap]{d}{f} \ar{r}{\widetilde{\alpha}} & \mathcal{C}(Y,T) \\
  X^{\ast} \ar[swap]{ru}{\alpha}
\end{tikzcd}
\]
通过 @corollary:locally-compact-exponential-rule，
我们知道映射
\[
X^{\ast} \times Y \to T, \quad
(f(x), y) \mapsto \alpha(f(x))(y) = \widetilde{h}(x,y) = h(f(x),y)
\]
连续。命题因此得证。
:::

## 紧拓扑空间的无限乘积

这一小节证明
Andrey Nikolayevich Tikhonov
的著名定理：一族紧拓扑空间的积空间仍然是紧的。
为此，我们先陈述所谓的 Alexander 子基定理。

::: theorem [Alexander] {@theorem:alexander-subbasis}
令 \(X\) 为拓扑空间。
\(\mathfrak{S}\) 为 \(X\) 的一个拓扑子基。
下列条件等价。

1. \(X\) 紧。

2. 若 \((U_{i})_{i\in I}\)
   是 \(\mathfrak{S}\) 的成员，且
   \(X = \bigcup_{i\in I} U_i\)，那么一定存在 \(I\) 的有限子集
   \(\{i_1,\ldots,i_n\}\)，使得 \(X = U_{i_1} \cup \cdots \cup U_{i_n}\)。

:::

假设 Alexander 子基定理，我们来证明 Tikhonov 定理。

::: theorem [Tikhonov] {@theorem:tikhonov}
设 \((X_{i})_{i\in I}\) 为一族紧拓扑空间，
则 \(\prod_{i\in I}X_{i}\) 是紧的。
:::

::: proof
令 \(X = \prod_{i\in I} X_{i}\)，\(\mathrm{pr}_i:X \to X_i\) 为投影映射。
根据积拓扑的定义，\(\{\mathrm{pr}^{-1}_{i}(U_i) : i \in I, U_i \text{ 开}\}\)
构成了 \(X\) 的拓扑子基（它们叫做“柱状开集”）。
令 \(\mathfrak{S}\) 为一个由这些子基中的开集构成的集族，它的成员覆盖了 \(X\)。
根据 Alexander 子基定理，@theorem:alexander-subbasis，
我们只需要证明 \(\mathfrak{S}\) 有一个有限子覆盖。

为此，我们使用反证法。对任何 \(i \in I\)，考虑投影映射
\[
\mathrm{pr}_{i}: X \to X_i
\]
我们断言，一定存在 \(x_i \in X_i\)，使得 \(\mathrm{pr}_{i}^{-1}(x_i)\)
不能被有限个 \(\mathfrak{S}\) 中元素覆盖。事实上，
如果 \(\mathrm{pr}_{i}^{-1}(x_i)\) 能够被有限个柱状开集覆盖，那么有两种可能：

1. 有 \(x_i\) 的邻域 \(U_{x_i}\)，\(\mathrm{pr}_{i}^{-1}(U_{x_i}) \in \mathfrak{S}\)，

2. \(\mathrm{pr}_{i}^{-1}(x_i) \subset \mathrm{pr}^{-1}_{j_1}(V_1) \cup \cdots \cup \mathrm{pr}^{-1}_{j_r}(V_r)\)，
   其中 \(V_k \subset X_{j_k}\) 为开集，\(j_k\neq i\)。

对于第二种情形，开集
\(\mathrm{pr}_{j_1}^{-1}(V_1), \ldots, \mathrm{pr}_{j_r}^{-1}(V_r)\)
已经覆盖了 \(X\)，见下图。这是个矛盾。

```tikz
\begin{tikzpicture}
      \draw (0,0) rectangle (3,3);
      \draw [red,thick] (2,0) -- (2,3);
      \filldraw[fill=gray] (0,1) rectangle (3,2);
      \draw (0.8,1.4) node{$\mathrm{pr}_{j}^{-1}(V)$};
    \end{tikzpicture}
```

如果对每个 \(x \in X_i\)，第一种情况都发生了，那么 \(\mathfrak{S}\)
中的柱状开集\(\mathrm{pr}_{i}^{-1}(U_{x})\) 构成了 \(X\) 的开覆盖。
但是由于 \(X_i\) 紧，这个覆盖有有限子覆盖。又产生了矛盾。

现在考虑通过上述步骤造出的点 \((x_i)_{i\in I}\)。
则不存在任何柱状邻域包含它：如果 \(\mathrm{pr}_{j}^{-1}(V)\)
包含 \((x_i)_{i\in I}\)，那么 \(\mathrm{pr}_{j}^{-1}(x_j)\)
就可以被一个柱状邻域覆盖，矛盾。
:::

为了证明 Alexander 子基定理，我们顺便介绍 Zorn 引理和滤子的收敛。

::: definition {@definition:partial-order}
令 \(M\) 为集合。\(M\) 上的关系 \(\leq\) 叫做一个**偏序（partial order）**，
如果它是自反的和传递的（见第 @situation:relation 节），并且满足
\[
a \leq b \text{\; 且\; } b \leq a\; \Longrightarrow\; a = b.
\]

一个**偏序集（partially ordered set）**
是一个偶对 \((M,\leq)\)，其中 \(M\) 是集合，\(\leq\) 是 \(M\)
上的一个偏序。
偏序集 \((M,\leq)\) 的子集 \(K\) 叫做一条**链（chain）**，
如果对任意 \(x, y \in K\)，要么 \(x \leq y\)，要么 \(y \leq x\)。

称 \(x \in M\) 为子集 \(N\) 的**上界（upper bound）**，
如果 \(n \leq x\) 对一切 \(n \in N\) 成立。
称 \(x \in M\) 为**极大元（maximal element）**，
如果不存在 \(y \in M\)，\(y\neq x\)，使得 \(x\leq y\)。
:::

::: proposition [Zorn 引理] {@proposition:zorn-lemma}
令 \((M,\leq)\) 为偏序集。
如果 \(M\) 中任意的链都有上界，
那么 \(M\) 中存在极大元。
:::

Zorn 引理在 Zermelo–Fraenkel 集合论中基本等价于选择公理。
在我们的教程中不予证明。

接下来我们介绍滤子的概念。

::: definition {@definition:filter}
令 \(X\) 为集合。\(X\) 的一个子集族 \(\mathfrak{F}\)
叫做 \(X\) 上的一个**滤子（filter）**，如果它满足下面三个条件：

- 若 \(U \subset X\)，\(A \in \mathfrak{F}\)，\(A \subset U\)，
  则 \(U \in \mathfrak{F}\)；

- 若 \(A, B \in \mathfrak{F}\)，则 \(A \cap B \in \mathfrak{F}\)；

- 空集不属于 \(\mathfrak{F}\)。

一个滤子 \(\mathfrak{F}\) 被称为**超滤（ultrafilter）**，
如果不存在滤子 \(\mathfrak{F}'\)，
使得 \(\mathfrak{F}'\) 包含了 \(\mathfrak{F}\)。

称拓扑空间 \(X\) 上的点 \(x\) 是滤子 \(\mathfrak{F}\) 的**极限**，
或者滤子**收敛**于 \(x\)，
如果任意 \(x\) 的邻域都是 \(\mathfrak{F}\) 的成员。
:::

::: example {@example:filters}
设 \(X\) 是拓扑空间，\(E\) 是 \(X\) 的子空间。
称 \(X\) 的子集 \(F\) 是 \(E\) 的“广义邻域”，如果存在开集
\(U\)，使得 \(E \subset U \subset F\)。
则包含 \(E\) 的所有广义邻域构成了一个 \(X\) 上的滤子，记为 \(\mathfrak{V}(E)\)。

如果 \(X\) 是一个无限集合，那么有限集合的补集构成了 \(X\) 上的一个滤子。
这个滤子叫做 **Fréchet 滤子**。

如果 \(\{a_{n}\}\) 是集合 \(X\) 上的一个序列。
则 \(\mathfrak{F}_{\{a_n\}} = \{U \subset X : \exists N, \forall n > N, a_{n} \in U\}\)
是 \(X\) 上的一个滤子。若 \(X\) 是拓扑空间，则序列 \(\{a_n\}\) 收敛于点 \(a\)
的必要且充分条件是 \(a\) 是滤子 \(\mathfrak{F}_{\{a_n\}}\) 的极限。
:::

::: proposition {@proposition:filter-refine-to-ultrafilter}
令 \(\mathfrak{F}\) 是集合 \(X\) 上的滤子。
则存在一个 \(X\) 上的超滤包含 \(\mathfrak{F}\)。
:::

::: proof
我们应用 Zorn 引理来证明这个命题。
为此，考虑集合
\[
\mathscr{S} = \{\text{一切包含\;} \mathfrak{F} \text{\;的滤子}\},
\]
用集合的包含关系赋予它偏序 \(\subset\)。
如果 \(K\) 是 \(\mathscr{S}\) 中的一条链，
那么可以验证 \(\bigcup_{\mathfrak{G} \in K} \mathfrak{G}\)
仍然是 \(X\) 上的滤子。它于是是 \(K\) 的一个上界。
应用 Zorn 引理，我们就得到了包含 \(\mathfrak{F}\) 的超滤的存在性。
:::

::: proposition {@proposition:ultrafilter-valuation}
令 \(\mathfrak{F}\) 是集合 \(X\) 上的超滤。
则对任何 \(X\) 的子集 \(A\)，要么 \(A \in \mathfrak{F}\)，
要么 \(X \setminus A \in \mathfrak{F}\)。
:::

::: proof
假设 \(A \notin \mathfrak{F}\)，且 \(X \setminus A\notin \mathfrak{F}\)。
如果存在 \(U, V \in \mathfrak{F}\)，使得 \(U \cap A = \emptyset\)，
\(V \cap (X \setminus A) = \emptyset\)，
那么 \(U \subset X \setminus A\)，\(V \subset A\)，于是
\(U \cap V = \emptyset\)，矛盾。从而 \(A\) 与 \(X \setminus A\)
之一与 \(\mathfrak{F}\) 中元都相交。无妨设 \(A\) 满足这个性质。
如果 \(A \notin \mathfrak{F}\)，则我们可以构造出比 \(\mathfrak{F}\)
更大的滤子：
\[
\mathfrak{F}' = \{Z \subset X : \exists F \in \mathfrak{F}, Z \supset F \cap A\}
\]
这就与 \(\mathfrak{F}\) 是超滤矛盾。因此必然有 \(A \in \mathfrak{F}\)。
:::

Alexander 子基定理是下述命题的推论。

::: proposition {@proposition:compact-via-ultrafiler}
令 \(X\) 为拓扑空间。则下列条件等价。

1. \(X\) 紧。

2. 对任何 \(X\) 的拓扑子基 \(\mathfrak{S}\)，任何
   \(\mathfrak{S}\) 的成员构成的 \(X\) 的开覆盖都有有限子覆盖。

3. \(X\) 上的超滤都收敛。

:::

::: proof
(1) \(\Rightarrow\) (2) 为显然。

(2) \(\Rightarrow\) (3)。
我们来证明 \(X\) 上的任何超滤 \(\mathfrak{F}\) 都收敛。
如果 \(\mathfrak{F}\) 不收敛，那么任何 \(x \in X\) 都有一个属于
\(\mathfrak{S}\) 的开邻域 \(U_{x}\) 不属于 \(\mathfrak{F}\)
（不然任何 \(\mathfrak{S}\) 中的有限交都属于 \(\mathfrak{F}\)，
从而任意 \(x\)的开邻域就都属于 \(\mathfrak{F}\)，
从而 \(\mathfrak{F}\) 收敛于 \(x\)）。
根据假设，存在 \(x_{1}, \ldots,x_{n}\)，使得
\[
X = U_{x_1} \cup \cdots \cup U_{x_n}.
\]
于是
\[
\emptyset = A_{1} \cap \cdots \cap A_{n}
\]
其中 \(A_{i}=X \setminus U_{x_i}\)。
由于 \(\mathfrak{F}\) 是超滤，\(U_{x_i} \notin \mathfrak{F}\)，
@proposition:ultrafilter-valuation
说明 \(A_i \in \mathfrak{F}\)，从而 \(\emptyset \in \mathfrak{F}\)，
矛盾。

(3) \(\Rightarrow\) (1)。
假设 \(X\) 上的超滤一定收敛。我们来证明 \(X\) 是紧拓扑空间。
令 \((U_{i})_{i \in I}\) 为 \(X\) 的开覆盖。
令 \(A_{i} = X \setminus U_{i}\)。如果 \((U_{i})_{i\in I}\)
没有有限子覆盖，则对任意有限集 \(J\subset I\)，
\(\bigcap_{j\in J}A_{j}\) 非空。令
\[
\mathfrak{G} = \left\{E \subset X : \exists J \subset I, \# J < \infty, E \supset \bigcap_{j\in J}A_{j}\right\}.
\]
则 \(\mathfrak{G}\) 是一个滤子。
根据 @proposition:filter-refine-to-ultrafilter，
存在一个超滤 \(\mathfrak{F}\) 包含 \(\mathfrak{G}\)。根据题设，\(\mathfrak{F}\)
具有极限 \(x \in X\)。由于 \((U_{i})_{i\in I}\) 是空间 \(X\) 的开覆盖，
存在 \(i\) 使得 \(x \in U_{i}\)。因此根据收敛的定义，
\(U_{i} \in \mathfrak{F}\)。另一方面，按照定义
\(A_i = X \setminus U_{i} \in \mathfrak{F}\)。因此空集属于 \(\mathfrak{F}\)，
与滤子的定义矛盾。
:::

## 习题

::: exercise {@exercise:kc-space}
我们称拓扑空间 \(X\) 为**弱 Hausdorff 空间（weakly Hausdorff space）**，
如果对任何紧 Hausdorff 空间 \(K\)，任意连续映射 \(f:K \to X\)，
\(f(K)\) 在 \(X\) 中是闭集。我们称拓扑空间 \(X\) 为 **KC 空间**，
如果 \(X\) 的紧子集是闭的。

1. 证明
   \[
   \text{Hausdorff} \Rightarrow \text{KC} \Rightarrow \text{弱 Hausdorff}.
   \]

2. 有两个原点的仿射直线
   （@example:affine-line-with-double-origin）
   是 KC 空间吗？

:::

::: exercise
设 \(X\) 是紧 Hausdorff 空间，\(f: X \to Y\) 是闭的商映射。
如果 \(Y\) 的单点子空间是闭的，证明 \(Y\) 是 Hausdorff 空间。
:::

::: exercise
\(\boxed{\dagger}\)
除非 \(n = 0\)，\(\mathbb{C}^{n}\) 和 \(\mathbb{C}\mathrm{P}^{n}\)
上的 Zariski 拓扑都不是 Hausdorff 的。但是它们是紧的。
:::

::: exercise
设 \(X\) 是一维连通流形，并且 \(X\) 可以写成两个同胚于 \(\mathbb{R}\)
的开集的并。证明 \(X\) 要么同胚于 \(\mathbb{R}\)，要么同胚于 \(\mathbb{S}^{1}\)。
由此证明紧连通一维流形一定同胚于 \(\mathbb{S}^{1}\)。
:::

::: exercise
证明如果 \(Y\) 是 Hausdorff 空间，
那么 @sec:compact-open
[第 2 款](@item:embedding-into-function-space)中定义的嵌入是闭嵌入。
:::

::: exercise [序列紧性]
拓扑空间 \(X\) 叫做序列紧的，如果 \(X\) 上的序列都有收敛子列
（@exercise:limit-of-sequence）。

1. 设 \(X\) 是第一可数（@exercise:first-countable-continuity）
   的紧拓扑空间。则 \(X\) 序列紧。

2. 如果 \(X\) 是序列紧的拓扑空间，\(A_1 \supset A_2 \supset \cdots\)
   是一系列 \(X\) 的非空闭子空间。
   则 \(\bigcap_{i=1}^{\infty} A_{i}\neq\emptyset\)。

3. 令 \(X\) 为拓扑空间。设 \(X\) 满足如下条件：
   对任何 \(X\) 的非空闭子空间的序列 \(A_1 \supset A_2 \supset \cdots\)，
   有 \(\bigcap_{i=1}^{\infty} A_{i}\neq\emptyset\)。设
   \((U_{n})_{n=1}^{\infty}\) 是 \(X\) 的一个可数开覆盖，证明存在
   \(i_1,\ldots,i_m\) 使得 \(X = \bigcup_{j=1}^{m} U_{i_j}\)。

4. 如果 \(X\) 是第二可数（@exercise:second-countable-space）
   的拓扑空间，并且它上面的序列都有收敛子列，那么\(X\) 是紧的。

:::

::: exercise [Brouwer 不动点定理]
令 \(D = \{(x,y) \in \mathbb{R}^{2} : x^2 + y^2 \leq 1\}\)。
在这个习题中，我们利用环绕数的性质来证明 Brouwer
不动点定理的二维情形：任何连续映射 \(f:D \to D\)都有不动点。

1. 设 \(F: D \to \mathbb{R}^{2} \setminus \{0\}\) 为连续映射。
   令 \(c = F|_{\mathbb{S}^{1}}\)。证明 \(W(c) = 0\)。

2. 证明不存在收缩（@exercise:retraction）
   \(r: D \to \mathbb{S}^{1}\)。

3. 设 \(f: D \to D\) 为连续映射。假设 \(f\) 没有不动点。
   定义 \(h(P)\) 为从 \(f(P)\) 出发经过 \(P\) 的射线与 \(\mathbb{S}^{1}\)
   的交点。证明 \(h\) 连续，并且是 \(D\) 到 \(\mathbb{S}^{1}\) 的收缩。
   这与上一款矛盾。

:::

::: exercise
设 \(X\) 是一个局部紧致的Hausdorff空间。
令 \(\mathcal{H}_{X}\) 为一切从 \(X\) 到 \(X\) 的同胚构成的集合。
将 \(\mathcal{H}_{X}\) 看作 \(\mathcal{C}(X,X)\) 子集，
赋予它子空间拓扑。

1. 证明映射的复合
   \((f,g) \mapsto f\circ g : \mathcal{H}_{X} \times \mathcal{H}_{X} \to \mathcal{H}_{X}\)
   是连续映射。

2. 假设 \(X\) 还是紧的。证明取逆映射可以定义一个同胚
   \(f\mapsto f^{-1}:\mathcal{H}_{X} \to \mathcal{H}_{X}\)。

对 \(\mathcal{H}_{X}\) 有兴趣的读者可以阅读 Jan J. Dijkstra 的文章
[“On Homeomorphism Groups and the Compact-Open Topology”](http://www.jstor.org/pss/30037630)
（*The American Mathematical Monthly*, Vol. 112, No. 10 (Dec., 2005), pp. 910–912）
:::

::: exercise [参考 Munkres 定理 29.1] {@exercise:alexandroff-extension}
令 \(X\) 为拓扑空间。它的 **Alexandrov 扩张** \(X^{\star}\) 定义如下。

- 作为集合，\(X^{\star} = X \cup \{\infty\}\)，其中 \(\infty\) 是一个点，
  它不在 \(X\) 中。

- 定义 \(X^{\star}\)  的子集为开集，如果它是 \(X\) 的开集，
  或者它形如 \(\{\infty\} \cup (X \setminus K)\)，\(K\) 是 \(X\)
  的紧的闭子集。

如此定义，我们有显然的嵌入 \(\iota: X \to X^{\star}\)。

1. 证明 \(X^{\star}\) 是紧空间，且自然的映射
   \(\iota: X \to X^{\star}\) 是开嵌入。

2. 若 \(X\) 的单点集是闭的，那么 \(X^{\star}\) 也具有这个性质。

3. 若 \(X\) 为局部紧 Hausdorff 空间，那么 \(X^{\star}\)
   是紧 Hausdorff 空间。此时，\(X^{\star}\) 叫做 \(X\)
   的 **Alexandrov 紧化（Alexandrov compactification）**，
   或者**一点紧化（one-point compactification）**。

4. \(\mathbb{R}^{n}\) 的 Alexandrov 紧化同胚于 \(\mathbb{S}^{n}\)。\(\mathbb{N}^{\star}\) 同胚于
   \(\{1/n:n\in \mathbb{N}\}\) 在 \(\mathbb{R}\) 中的闭包。

5. 证明 \(\mathbb{Q}^{\star}\) 不是 Hausdorff 空间。

6. 证明 \(\mathbb{Q}^{\star}\) 是 KC 空间（@exercise:kc-space）。

:::

::: exercise [关于滤子的习题] {@exercise:filter}
1. 令 \(X\) 为拓扑空间，\(\mathfrak{F}\) 为 \(X\) 上的滤子。
   如果 \(\mathfrak{F}\) 收敛于 \(x\)，
   则任何包含了 \(\mathfrak{F}\) 的滤子也收敛于 \(x\)。

2. 令 \(\mathfrak{B}\) 为集合 \(X\) 的一个子集族。证明
   \[
   \mathfrak{F}_{\mathfrak{B}} = \{V \subset X : \exists A \in \mathfrak{B}, A \subset V\}
   \]
   是滤子的必要且充分条件是 \(\mathfrak{B}\) 满足下面两个性质：

   - 对任意 \(A, B \in \mathfrak{B}\)，存在 \(C \in \mathfrak{B}\)，使得
     \(C \subset A \cap B\)，

   - \(\mathfrak{B}\) 非空，且不包含空集。

   满足上面两条性质的 \(X\) 的子集族叫做 \(X\) 的一个
   **滤子基（filter basis）**。

3. 证明拓扑空间 \(X\) 为 Hausdorff
   空间的必要且充分条件是任何它上面的滤子都至多有一个极限。

4. {@item:filter-vs-compact} 证明拓扑空间 \(X\) 为紧的必要且充分条件是，
   对任何滤子 \(\mathfrak{F}\)，
   都存在滤子 \(\mathfrak{F}'\)，\(\mathfrak{F}'\) 收敛，并且
   \(\mathfrak{F}'\supset \mathfrak{F}\)。
   （包含 \(\mathfrak{F}\) 的滤子的极限叫
   做 \(\mathfrak{F}\) 的**凝聚点（cluster point）**。）

:::

::: exercise [滤子定义的拓扑] {@exercise:top-ass-filter}
令 \(X\) 为集合。\(\mathfrak{F}\) 为 \(X\) 上的一个滤子。
令 \(X' = X \cup \{\omega\}\)
是集合 \(X\) 与单点集合 \(\{\omega\}\) 的不交并。
令 \(\mathfrak{F}' = \{M \cup \{\omega\} : M \in \mathfrak{F}\}\)。

1. 证明 \(\mathfrak{F}'\) 是 \(X'\) 上的滤子。

2. 证明存在唯一的 \(X'\) 上的拓扑，使得 \(X\) 是 \(X'\)
   的离散子空间，而 \(\omega\) 的邻域是 \(\mathfrak{F}'\) 中元素。
   这个拓扑叫做**与滤子 \(\mathfrak{F}\) 相配的拓扑**。

3. 证明滤子 \(\mathfrak{F}'\) 收敛于 \(\omega\)。

4. 证明 \(X\) 在 \(X'\) 中稠密。

:::

::: exercise [紧性的映射刻画]
设 \(X\) 为拓扑空间。

1. 若 \(X\) 紧。则对任何拓扑空间 \(T\)，
   \(\mathrm{pr}_{T}:X \times T \to T\) 是闭映射。

2. 设拓扑空间 \(X\) 满足性质：对任何拓扑空间 \(T\)，
   \(\mathrm{pr}_{T}:X \times T \to T\) 是闭映射。
   按下列步骤证明 \(X\) 是紧拓扑空间。

   1. 设 \(\mathfrak{F}\) 为 \(X\) 上的一个滤子。令 \(X'\) 为与
      \(\mathfrak{F}\) 相配的拓扑空间（@exercise:top-ass-filter）。
      令 \(F\) 为 \(\{(x,x) \in X\times X'  : x \in X\}\) 在积空间
      \(X \times X'\) 中的闭包。证明存在 \(x\in X\)，\((x,\omega) \in F\)。

   2. 利用上一款的结论，证明如果 \(\mathfrak{F}\) 是超滤，那么 \(x\) 是
      \(\mathfrak{F}\) 的极限。
      利用 @proposition:compact-via-ultrafiler 导出 \(X\) 紧。

:::

::: exercise [真映射] {@exercise:proper-map}
拓扑空间之间的连续映射 \(f: X \to Y\) 叫做**真映射（proper map）**，
如果对任何连续映射 \(T \to Y\)，纤维积的投影映射
\(f_T: X \times_{Y} T \to T\) 是闭映射。

1. \(\boxed{\dagger}\)
   对连续映射 \(f: X \to Y\)，下列陈述等价。

   1. \(f\) 是真映射，

   2. 对任何拓扑空间 \(T\)，
      \(f\times \mathrm{Id}_{T} : X \times T \to Y \times T\)
      是闭映射。

   3. \(f\) 是闭映射，并且对任何 \(Y\) 的紧子集 \(K\)，\(f^{-1}(K)\) 是紧的。

   4. \(f\) 是闭映射，并且对任何 \(y\in Y\)，\(f^{-1}(y)\) 是紧的。

2. 设 \(f: X \to Y\) 是连续映射，\(Y\) 局部紧 Hausdorff，
   且对一切 \(Y\) 的紧子空间 \(K\)，\(f^{-1}(K)\) 是紧的。
   证明 \(f\) 是闭映射。（这样，根据上题，\(f\) 是真映射。）
   [提示：\(Y\) 满足：\(Z \subset Y\) 是闭子空间当且仅当
   它和任意 \(Y\) 的紧子空间 \(K\) 相交是 \(K\) 的闭子集。]

:::

::: exercise {@exercise:proper-local-homeomorphism-is-covering-map}
设 \(f: X \to Y\) 为非空拓扑空间之间的局部同胚（@exercise:local-homeo）。

1. 如果 \(f\) 是分离映射，并且存在正整数 \(n\)
   使得对任何 \(y \in Y\)，\(f^{-1}(y)\) 都恰好有 \(n\) 个原像。
   证明对任意 \(y \in Y\)，存在 \(y\) 的开邻域 \(V\)，使得
   \(f^{-1}(V) = \coprod_{i=1}^{n}U_i\)，其中 \(f|_{U_i}\) 都是同胚。
   证明 \(f\) 为真映射。

2. {@item:sep-proper-local-homeomorphism-is-cover} 如果 \(f\) 是分离的真映射，\(Y\) 连通，
   证明存在正整数 \(n\)，使得对任何 \(y \in Y\)，\(f^{-1}(y)\) 都恰好有 \(n\) 个原像。

3. 举例说明，在[第 2 款](@item:sep-proper-local-homeomorphism-is-cover)
   中额外加上如下条件：\(f\) 满，\(X\) 是连通流形，\(Y\) 是紧流形，
   但去掉 \(f\) 是真映射的条件，则结论不对。

:::

[^1]: 见 @exercise:alexandroff-extension。
[^2]: \(\forall y \in Y, \forall \epsilon > 0, \exists x\) 的邻域 \(U\)，
  使得 \(\forall f \in \mathcal{F}\)，有 \(f(U) \subset B(f(x);\epsilon)\)。
