---
title: 覆盖空间 (I)：基础知识
notices:
  - name: 问题
    items:
      - “覆盖空间与同伦”一节第二个引理的证明中，第一句末尾以“且”开头的分句不完整。
      - “主纤维空间与上同调”一节需要扩充。
---

覆盖空间系多值函数的摩登化身，且在诸多数学分支中有重要地位。
本节及今后几节之目的为介绍覆盖空间的 Galois 理论，
即将一固定空间之上的覆盖空间与此空间之基本群建立联系。
事实上，一空间之上容许何种覆盖空间存在，即空间上“覆盖空间构成之范畴”，
是此空间之“拓扑不变量”。本节及今后几节将从此观点出发而导出一些拓扑定理，
比如 Jordan 的曲线定理。

覆盖空间理论与域的 Galois 理论殊为相似。
至于如何将覆盖空间之理论系统地移植到代数中，
建议读者阅读 A. Grothendieck 与 M. Raynaud 的著作
[Revêtements étales et groupe fondamental](https://arxiv.org/abs/math/0206203)
（SGA 1）。

## 空间上的空间

在这一节，我们将不断使用“空间上的空间”这个概念。
回忆，一个拓扑空间 \(B\) 上的空间是指一个偶对 \((E,p)\)，
其中 \(E\) 是拓扑空间，\(p\colon E \to B\) 是连续映射。
而 \(B\) 上的空间 \((E,p)\) 到 \((E',p')\) 之间的**态射 (morphism)**
是指满足性质 \(p' \circ f = p\) 的连续映射 \(f\colon E \to E'\)。
如果态射 \(f\colon (E,p) \to (E',p')\) 是同胚，则称 \(f\) 为 \(B\)
空间之间的**同构**。

### 平展分离空间

若 \((E,p)\) 是拓扑空间 \(B\) 上的空间，
对任意 \(b \in B\)，我们用 \(E_{b}\) 来代表 \(p^{-1}(b)\)，
并称它为 \(b\) 的**纤维 (fiber)**。
我们称 \((E,p)\) 是**分离 (separated)**
的 \(B\) 上的空间，
如果 \(p\) 是分离的连续映射，即对任何 \(b \in B\)，任何不同的 \(x,y \in E_{b}\)，
存在 \(E\) 中分别包含 \(x,y\) 的开集 \(U,V\)，使得 \(U \cap V = \emptyset\)。
我们称 \((E,p)\) 为**平展 (étale)** 的 \(B\) 上的空间，
如果 \(p\) 是局部同胚。关于 \(B\) 上的平展分离空间，我们证明过如下结论。

::: proposition {@proposition:separated-local-homeomorphism-lift-unique}
令 \(B\) 为拓扑空间。
令 \((E,p)\) 是平展且分离的 \(B\) 上的空间，
则对任何 \(B\) 上的拓扑空间 \((E',p')\)，任何两个态射
\(f,g \colon (E',p') \to (E,p)\)，
集合
\[
\{x \in E' : f(x) = g(x)\}
\]
在 \(E'\) 的子空间拓扑下既开又闭。
:::

局部连通拓扑空间上的**连通**平展分离空间的“同构类”构成集合（回忆：所有集合不构成集合）。
这断言的严格叙述如下。

::: proposition {@proposition:sep-local-homeo-form-set-over-loc-conn}
令 \(B\) 为局部连通拓扑空间。
则存在集族 \(\mathscr{C}\)，满足如下条件。

- 每个 \(\mathscr{C}\) 中的成员都是 \(B\) 上的拓扑空间 \((E,p)\)，

- 每个连通的平展分离的 \(B\) 上空间同构于唯一的一个 \(\mathscr{C}\) 中成员。

:::

::: proof
在证明中我们将不断使用所谓的 Schröder–Bernstein 定理：
如果存在单射（满射）\(f\colon P \to Q\)，则
\(\mathop{\mathrm{Card}}(P) \leq \mathop{\mathrm{Card}}(Q)\)
（\(\mathop{\mathrm{Card}}(P) \geq \mathop{\mathrm{Card}}(Q)\)）。

只要证明每个连通的 \(B\) 上的平展分离空间 \((E,p)\) 的拓扑空间 \(E\)
的基数不超过一个固定的基数即可：
在一个基数 \(\beth\) 上一切可能的拓扑结构是它的幂集的子集，
而从 \(\beth\) 到\(B\) 的映射是 \(\beth \times B\) 的子集。
而为了控制 \(E\) 的基数，只需证明对任何 \(b \in B\)，\(E_{b}\)
的基数可以被一致地控制。为此，设 \(\mathscr{W}\) 是 \(B\) 的一个拓扑基。
只需证明如下不等式：
\[
\mathop{\mathrm{Card}} E_b \leq
\sup\{\mathop{\mathrm{Card}}\mathscr{W},\mathop{\mathrm{Card}} \mathbb{N}\}
\]

由于 \(B\) 局部连通，无妨设 \(\mathscr{W}\) 中的成员是连通的。
我们称 \(\mathscr{W}\) 中的序列 \((U_1,\ldots,U_n)\) 为一个 \(\mathscr{W}\)-链，
如果 \(U_i \cap U_{i+1}\) 非空，对一切 \(i=1,2,\ldots,n-1\) 成立。
所有 \(\mathscr{W}\)-链的集合的基数不超过
\(\sup\{\mathop{\mathrm{Card}}\mathscr{W},\mathop{\mathrm{Card}} \mathbb{N}\}\)。
称 \(E\) 中开集序列 \((V_1,\ldots,V_n)\) 在 \(\mathscr{W}\)-链
\((U_1,\ldots,U_n)\) 之上，如果

- \(p(V_i) = U_i\)，\(p\) 诱导了 \(V_i\) 与 \(U_i\) 的同胚，

- \(V_i \cap V_{i+1}\) 非空对一切 \(i=1,2,\ldots,n-1\) 成立，且
  \(p(V_i\cap V_{i+1}) = U_i \cap U_{i+1}\)。

如果 \((V_1,\ldots,V_n)\) 与 \((V'_1,\ldots,V'_n)\)
都在同一个 \(\mathscr{W}\)-链之上，且 \(V_1 \cap V'_1\) 非空，
那么必有 \(V_i = V'_i\)。事实上，\(U_1 \to V_1 \to E\)
与 \(U_1 \to V'_1 \to E\) 是两个从连通 \(B\)-空间 \(U_1\)
到 \(E\) 的态射，它们在 \(p(V_1 \cap V'_1)\) 上有相同的取值，
因此根据 @proposition:separated-local-homeomorphism-lift-unique，
必有 \(V_1 = V'_1\)。重复这个过程，就完成了断言的证明。

定义 \(E\) 上的关系 \(\sim\) 如下，
\(x\sim x'\) 当且仅当存在序列 \((V_1,\ldots,V_n)\)，
满足如下条件：

1. \(x \in V_1\)，\(x' \in V_n\)，

2. \((V_1,\ldots,V_n)\) 在某个 \(\mathscr{W}\)-链之上。

显然，这是个等价关系，且它的等价类是开集。
由于 \(E\) 连通，这个关系只有一个等价类。

对 \(x_0 \in E\)，令集合 \(\mathscr{C}_{x_0}\) 为所有的有限序列
\((V_1,\ldots,V_n)\)，它在某个 \(\mathscr{W}\)-链之上，
且 \(x_0 \in V_1\)。利用前述断言，
\((V_1,\ldots,V_n)\mapsto (p(V_1),\ldots,p(V_n))\)
为单射。因此 \(\mathscr{C}_{x_0}\) 的基数不超过
\(\sup\{\mathop{\mathrm{Card}}\mathscr{W},\mathop{\mathrm{Card}}\mathbb{N}\}\)。
对任意 \(x \in E_b\)，令 \(\mathscr{C}_{x_0,x}\) 为 \(\mathscr{C}_{x_0}\)
的子集，它的元素为序列 \((V_1,\ldots,V_n)\)，其中 \(x \in V_n\)。
则 \(\mathscr{C}_{x_0,x}\) 非空，且两两不交。因此它们的并的基数也不超过
\(\sup\{\mathop{\mathrm{Card}}\mathscr{W},\mathop{\mathrm{Card}}\mathbb{N}\}\)。
最后，映射 \(\varphi\colon \bigcup_{x\in E_b}\mathscr{C}_{x_0,x} \to E_b\)，将
\(\mathscr{C}_{x_0,x}\) 映成 \(x\)，是满射。从而 \(E_b\) 的基数也不超过
\(\sup\{\mathop{\mathrm{Card}}\mathscr{W},\mathop{\mathrm{Card}}\mathbb{N}\}\)。
:::

### 紧合空间

见[[紧合映射]]。

### 纤维空间

在拓扑学和其它数学中，最重要的一类“空间上的空间”是纤维空间。

::: definition {@definition:fiber-bundle}
令 \(B\) 为拓扑空间。

1. \(B\) 上的以拓扑空间 \(F\) 为纤维型的**平凡纤维丛（trivial fiber bundle）**
   是 \(B\) 空间\((B \times F,\mathrm{pr}_{1})\)。

2. \(B\) 空间 \((E,p)\) 叫做 \(B\) 上的**可平凡化 (trivializable)**
   纤维丛，如果存在拓扑空间 \(F\)，使得 \((E,p)\) 作为 \(B\) 空间同构
   （见“空间上的空间”一节）于平凡纤维丛
   \((B \times F, \mathrm{pr}_{1})\)。任何 \(B\) 空间的同构
   \[
   u : (E,p) \to (B\times F, \mathrm{pr}_{1})
   \]
   都叫做 \((E,p)\) 的一个**平凡化 (trivialization)**。

3. 拓扑空间 \(B\) 上的**局部平凡纤维空间（locally trivial fiber space）**，
   或**纤维丛（fiber bundle）** 是一个 \(B\) 空间 \((E,p)\)，
   满足如下条件：任意 \(b \in B\) 都有一个邻域 \(V\)，
   使得 \((p^{-1}(V),p|_{p^{-1}(V)})\) 是可平凡化的 \(V\) 空间。

:::

::: remark {@remark:image-fibration-clopen}
根据定义，若 \((E,p)\) 是拓扑空间 \(B\) 上的纤维空间，那么 \(B\)
的子集
\[
\{b \in B : E_b = \emptyset\}, \quad
\{b \in B : E_b \neq \emptyset\} = p(E)
\]
是 \(B\) 的互补开子集。
特别地，\(p(E)\) 是 \(B\) 的既开又闭的子空间。
因此，如果 \(B\) 是连通拓扑空间，\(E\) 非空，那么 \(p\) 是满射。
:::

若 \((E,p)\) 是拓扑空间 \(B\) 上的纤维空间，
\((U_i)_{i\in I}\) 是 \(B\) 的开集，
满足 \((E_i,p_i)=(E \times_B U_i,\mathrm{pr}_{2})\) 是可平凡化的。
那么拓扑空间 \(E\) 可以被看作是将平凡纤维空间
\((U_i\times F,\mathrm{pr}_{1})_{i\in I}\) 粘合而成。
这个观点将在今后不断出现。

::: example {@example:hopf-fibration-is-fiber-bundle}
商映射 \(\eta: \mathbb{S}^{2n+1} \to \mathbb{C}\mathrm{P}^{n}\)
是局部平凡的纤维空间，它的纤维型是圆周 \(\mathbb{S}^{1}\)。

事实上，令 \(U_i\) 为由 \(z_i \neq 0\) 所定义的 \(\mathbb{C}\mathrm{P}^{n}\)
的开子空间。则我们定义 \(U_i \times \mathbb{S}^{1}\) 与 \(\eta^{-1}(U_i)\)
之间的同胚如下：
\[
\varphi_i ([z_0:\cdots:z_n], \lambda) = \frac{\lambda |z_i|}{\sqrt{\sum_{j=0}^{n} |z_j|^2}}(z_i^{-1} z_0,\ldots, z_i^{-1} z_n).
\]
容易验证 \(\eta \circ \varphi_i = \mathrm{pr}_{1}\)。
因此 \(\eta\) 是局部平凡的。
:::

::: proposition {@proposition:fiber-bundle-over-interval}
任何闭区间 \([a,b]\) 上的纤维空间都是可平凡化的。
:::

证明与 @proposition:covering-space-over-interval-trivial
完全雷同。

::: definition {@definition:induced-bundle}
设 \((E,p)\) 是拓扑空间 \(B\) 上的局部平凡纤维空间。
\(f\colon B' \to B\) 为连续映射。
令 \((E',p') = (E\times_B B',\mathrm{pr}_{2})\)
为底变换。则 \((E',p')\) 是拓扑空间 \(B'\) 上的局部平凡拓扑空间。
它叫做 \((E,p)\) 通过 \(f\) 的**拉回 (pullback)**，
或者叫做 \((E,p)\) 通过 \(f\) **诱导的纤维空间（induced fiber space）**。
有时我们使用记号 \(f^{\ast}(E,p)\)，甚至 \(f^{\ast}(E)\)，来代表 \((E',p')\)。
称 \((B',f)\) **平凡化了** \(B\) 上的纤维空间 \((E,p)\)，
如果 \(f^{\ast}(E,p)\) 是 \(B'\) 上的可平凡化纤维空间。
:::

如果 \((U_i)_{i\in I}\) 是拓扑空间 \(B\) 的开覆盖，且在每个 \(U_i\) 上 \((E,p)\)
是可平凡化的。那么对任何连续映射 \(f\colon B' \to B\)，诱导纤维空间在
\(f^{-1}(U_i)\) 上是可平凡化的。

::: definition {@definition:covering-space-via-fiber-bundle}
称拓扑空间 \(B\) 上的空间 \((E,p)\) 为 \(B\)
的**覆盖空间（covering space）**，如果 \((E,p)\) 是\(B\)
上的局部平凡纤维空间，并且它的纤维都是离散的。
:::

::: remark
1. @definition:covering-space
与 @definition:covering-space-via-fiber-bundle
是等价的。事实上，如果 \(F\) 是离散拓扑空间，
那么对任何拓扑空间 \(B\)，
\(B \times F\) 与不交并 \(\coprod_{i\in F} B\) 是同胚的。

2. 任何覆盖空间都是平展且分离的。

3. 若 \((E,p)\) 是 \(B\) 上的覆盖空间，对 \(b \in B\)，
   定义 \(\deg_b(E,p) = \mathop{\mathrm{Card}}E_b\)。
   则 \(b \mapsto \deg_{b}(E,p)\) 是局部常值函数。如果 \(B\) 是连通的，
   则 \(\deg_{b}(E,p)\) 与 \(b\) 选择无关。此时称它为覆盖 \((E,p)\)
   的**次数**或**层数**。

:::

## 覆盖空间的基本性质

### 可平凡化覆盖空间

我们要经常用到如下局部连通空间的性质。

::: proposition {@proposition:local-connectedness-and-covering}
设 \(B\) 是拓扑空间，\((E,p)\) 是 \(B\) 上的空间。
若 \(E\) 局部连通，则 \((E,p)\) 是覆盖空间的必要充分条件是，
对任意 \(b \in B\)，存在其邻域 \(U\)，
使得 \(p^{-1}(U)\) 的每个连通分支都同胚于 \(U\)。
:::

::: proof
设 \((E,p)\) 是 \(B\) 的覆盖空间。由于 \(p\) 是局部同胚，
\(p(E)\) 也局部连通。
设 \(U\) 为 \(b \in B\) 的连通邻域，
且 \((E,p)\) 被 \(U\) 平凡化。
则 \(p^{-1}(U) = \bigcup_{i\in I} U_i\) 是连通开集的不交并。
因此每个 \(U_i\) 都是 \(p^{-1}(U)\) 的连通分支。

反之，设 \(b \in B\)，\(U\) 为假设中之邻域。
由于 \(E\) 局部连通，\(p^{-1}(U)\) 的连通分支 \(V_i\) 都是 \(E\) 的开集。
因此 \(p^{-1}(U) = \bigcup_{i\in I} V_i\) 满足性质 (EV)。
:::

我们给出覆盖空间可平凡化的判据。

::: proposition {@proposition:trivializable-section}
令 \((E,p)\) 是连通拓扑空间 \(B\) 上的分离平展空间。

1. {@item:trivialization-by-section} \((E,p)\) 是可平凡化的覆盖空间必要且充分条件是，
   对任意 \(x \in E\)，存在截面 \(\sigma\colon B \to E\)，
   使得 \(\sigma(p(x)) = x\)。

2. {@item:local-conn-trivialization-by-section} 若 \(B\) 局部连通，\((E,p)\) 是覆盖空间。
   则 \((E,p)\) 是可平凡化的覆盖空间必要且充分条件是，
   存在 \(b \in B\)，使得对任意 \(x \in E_b\)，
   都存在截面 \(\sigma\colon B\to E\)，
   满足 \(\sigma(b)=x\)。

:::

::: proof [@item:trivialization-by-section 的证明]
必要性是显然的。令 \(\Gamma\) 为 \(p\) 的一切截面构成的集合，赋予离散拓扑。
考虑映射
\[
\varphi\colon B \times \Gamma \to E, \quad (b,\sigma) \mapsto \sigma(b).
\]
则 \(\varphi\) 为连续映射。
由于 \((B \times \Gamma,\mathrm{pr}_1)\) 和 \((E,p)\) 都是平展分离空间，
\(p\circ \varphi = \mathrm{pr}_{1}\)，\(\varphi\) 必然为局部同胚，特别为开映射。
根据假设，\(\varphi\) 为满射。为了证明 \(\varphi\) 是同构，
只需证明 \(\varphi\) 是单射。若 \(\varphi(b,\sigma) = \varphi(b',\sigma')\)。
则 \(\sigma(b) = \sigma'(b')\)，因此 \(b = b'\)。
由于 \(\sigma(b) = \sigma'(b)\)，\((E,p)\) 为平展分离空间，\(B\) 连通，
@proposition:sep-local-homeo-form-set-over-loc-conn
推出 \(\sigma=\sigma'\)，因此 \(\varphi\) 是单射，从而是同胚。
:::

::: proof [@item:local-conn-trivialization-by-section 的证明]
考虑所有满足 @item:local-conn-trivialization-by-section
中条件的点构成的子空间 \(B_0\)。设 \(b \in B_0\)。
则存在 \(b\) 的连通邻域 \(U\)，使得
\[
p^{-1}(U) = \bigcup_{i \in I}U_i
\]
其中 \(U_i\) 是 \(p^{-1}(U)\) 的连通分支（@proposition:local-connectedness-and-covering）。
则对任意 \(b' \in U\)，任意 \(x' \in E_{b'}\)，
存在 \(i \in I\)，使得 \(x' \in U_i\)。
令 \(x \in U_i \cap E_{b}\)，\(\sigma\) 为经过 \(x\) 的截面，
则由于 \(U\) 连通，\(\sigma(U)\) 也连通。因此 \(\sigma(U)=U_i\)。
特别地，\(\sigma(b')=x'\)。因此 \(b' \in B_0\)。于是 \(B_0\) 是开集。
\(B_0\) 也是闭集合：如果点 \(b\) 有连通邻域平凡化了 \((E,p)\)，且这个邻域与
\(B_0\) 相交，那么上述论证说明这个邻域落入 \(B_0\)，从而 \(b\) 落入 \(B_0\)。
由于 \(B_0\) 非空，\(B\) 连通，必有 \(B=B_0\)。因此我们可以利用
@item:trivialization-by-section
之结论来推出本款断言。
:::

### 局部连通覆盖空间

局部连通空间的覆盖空间之间的态射是覆盖映射。

::: proposition {@proposition:morphism-between-locally-connected-is-covering}
设 \(B\) 为局部连通拓扑空间。
设 \(f\colon(E,p)\to(E',p')\) 为 \(B\) 上覆盖空间之间的态射。
则 \(f\colon E \to E'\) 为覆盖映射。
:::

::: proof
首先假设 \(E = B \times F\) 与 \(E' = B \times F'\) 为平凡覆盖空间，且 \(B\) 连通。
则存在连续映射 \(g\colon B\times F \to F'\)，使得 \(f(b,v) = (b,g(b,v))\)。
由于 \(F\) 与 \(F'\) 都是离散空间，它们的函数空间 \(\mathscr{C}(F;F')\) 也离散。
由于 \(B\) 连通，\(B \to \mathscr{C}(F;F')\) 为常值。
因此存在集合之间的映射 \(g\colon F \to F'\)，使得 \(f(b,v) = (b,g(v))\)。
于是 \(f^{-1}(B \times \{w\}) = B \times g^{-1}(w)\) 同胚于若干个
\(B\times\{w\}\) 的不交并。因此 \(f\) 是覆盖映射。

一般的情形可以转化成上面的情形。我们取 \(B\) 的连通开集  \(U\)，使得
\(U\) 平凡化了 \((E,p)\) 和 \((E',p')\)，则对 \(U\)，\((p^{-1}(U),p)\)，
\((p'^{-1}(U),p')\) 应用上一段的结论即完成了证明。
:::

局部连通空间上的覆盖空间的一个既开又闭的子空间也是覆盖空间。

::: proposition {@proposition:clopen-local-conn-covering}
令 \(B\) 为局部连通拓扑空间，\((E,p)\) 为 \(B\) 上的覆盖空间。
若 \(E'\) 是 \(E\) 的既开又闭的子空间，则 \((E',p|_{E'})\)
为 \(B\) 上的覆盖空间。
:::

::: proof
设 \(b \in B\) 为任意点，\(U\) 为 \(b\) 的满足性质 (EV) 的连通子空间。
则根据 @proposition:local-connectedness-and-covering，
\(p^{-1}(U)\) 的连通分支都同胚于 \(U\)。若 \(V\) 是其中之一，\(V \cap E'\)
非空，由于 \(V \cap E'\) 在 \(V\) 中既开又闭又非空，\(V\) 的连通性保证了
\(V\) 必然完全包含于 \(E'\)。因此 \(p^{-1}(U) \cap E'\) 是一些 \(E'\) 的同胚于
\(U\) 的不交开集的并，因此 \(E'\) 是 \(B\) 的覆盖空间。
:::

### 覆盖空间与同伦

本段的目的是证明下面的定理。

::: theorem {@theorem:homotopy-induce-iso-covering}
令 \(B\) 为拓扑空间，\((E,p)\) 为 \(B\) 上覆盖空间。
设 \(f,g\colon B' \to B\) 连续映射，且 \(f\) 与 \(g\) 同伦。
则 \(f^{\ast}(E,p)\) 与 \(g^{\ast}(E,p)\) 作为 \(B'\) 上的覆盖空间是同构的。
:::

而 @theorem:homotopy-induce-iso-covering 是下述定理的推论。

::: theorem {@theorem:restriction-covering-iso}
设 \(B\) 为拓扑空间。
令 \((E,p)\) 为 \(B\times[0,1]\) 上的覆盖空间。
记 \((E',p') = (E,p)|_{B\times 0}\) 为 \(B\) 上的覆盖空间。
则 \((E,p)\) 同构于 \(\mathrm{pr}_{1}^{\ast}(E',p')\)。
:::

::: proof [@theorem:homotopy-induce-iso-covering 之证]
设 \(h\colon B' \times [0,1] \to B\) 为 \(f,g\) 之间的同伦。
则 \(h^{\ast}(E,p)\) 为 \(B'\times [0,1]\) 上的覆盖空间。
由于它在 \(B'\times\{0\}\) 上的限制同构于 \(f^{\ast}(E)\)，
@theorem:restriction-covering-iso 推出
\(h^{\ast}(E,p) \cong \mathrm{pr}_{1}^{\ast}(f^{\ast}(E))\)。
特别地，它在 \(B'\times\{t\}\) 上的限制都同构于 \(f^{\ast}(E)\)。
取 \(t=1\) 就得到了 \(g^{\ast}(E) \cong f^{\ast}(E)\)。
:::

为了证明 @theorem:restriction-covering-iso，先给出两个引理。
以下 \((E,p)\) 为 \(B\times[0,1]\) 上的覆盖空间。

::: lemma {@lemma:glue-trivialization}
设 \(\alpha \leq \beta \leq \gamma\) 为实数。
如果 \(X_1 = E|_{B \times [\alpha,\beta]}\) 可平凡化，
且 \(X_2 = E|_{B\times[\beta,\gamma]}\) 可平凡化，
那么 \(E|_{B \times [\alpha,\gamma]}\) 可平凡化。
:::

::: proof
这是粘贴引理的推论。具体步骤留给读者作练习。
:::

::: lemma {@lemma:local-trivialization-over-interval}
设 \(b \in B\)。存在 \(b\) 的邻域 \(U\)，使得 \(E|_{U\times[0,1]}\) 可平凡化。
:::

::: proof
对每个 \((b,t) \in B \times [0,1]\)，
存在形如 \(U_{\alpha,\beta} \times \left]{\alpha},{\beta}\right[\)
的开集包含 \((b,t)\)，且 \(E|_{U\times\left]{\alpha},{\beta}\right[}\)。
对固定的 \(b\)，这些 \((\alpha,\beta)\) 构成了 \([0,1]\) 的开覆盖。
由于有限个 \(\left]{\alpha},{\beta}\right[\) 就可以覆盖住 \([0,1]\)，
对应的 \(U_{\alpha,\beta}\) 的交 \(U\) 仍然是 \(B\) 的开集。
根据 Lebesgue 数引理，存在分划 \(0= a_0 \leq \cdots \leq a_n = 1\)，
使得 \(E\) 被每个 \(U \times [a_i,a_{i+1}]\) 平凡化。
累次利用 @lemma:glue-trivialization 即可。
:::

::: proof [@theorem:restriction-covering-iso 之证]
首先考虑最简单的情况，\(E\) 是 \(B \times [0,1]\) 上的平凡覆盖空间
\(B \times [0,1] \times F\)。由于 \((E_0,p_0)\) 此时也是平凡的，
\(\mathrm{pr}_{1}^{\ast}(E_0,p_0)\) 也是平凡的。平凡覆盖当然同构于平凡覆盖。

平凡覆盖 \(B\times [0,1] \times F\) 到自己的同构必然形如
\[
(b,t,v) \mapsto (b,t,g(b,t,v)),
\]
其中 \(g(b,t,v)\) 是从 \(B\times[0,1]\times F\) 到 \(F\) 的连续映射。
由于 \([0,1]\) 连通，\(F\) 离散，\(g(b,t,v) = g(b,0,v)\) 与 \(t\) 无关。
因此 \(g(b,t,v)\) 完全由它在 \(B \times \{0\}\) 上的值决定。
因此只有唯一的同构在 \((E_0,p_0)\) 上诱导了恒等映射。

现在处理一般情况。
将 \(B\) 用满足 @lemma:local-trivialization-over-interval
条件之开集 \(U\) 覆盖。在每个 \(U \times [0,1]\) 上，利用定理的“平凡情况”，
可知存在同构
\(\varphi_U\colon(E,p)|_{U\times [0,1]} \to \mathrm{pr}_{1}^{\ast}(E_0,p_0)\)，
并且 \(\varphi_{U}\) 在 \(U\times \{0\}\) 上为恒等映射。
我们只需验证 \(\varphi_U\) 可以“粘”出一个同构。为此，要验证
\[
\varphi_U|_{(U \cap V) \times [0,1]}  = \varphi_{V} |_{(U \cap V) \times [0,1]},
\]
其中 \(U\)，\(V\) 都是满足 @lemma:local-trivialization-over-interval
之结论的开集。

事实上，\(\varphi_U \circ \varphi_V^{-1}\) 是平凡覆盖
\(E|_{(U\cap V)\times[0,1]}\) 的自同构，
根据上面的“平凡情况”，
它只有一个自同构在 \((U\cap V) \times \{0\}\) 上诱导恒等映射。
因此必然有 \(\varphi_U \circ \varphi_V^{-1} = \mathrm{Id}\)。
这就完成了定理的证明。
:::

::: definition {@definition:simply-connected}
称拓扑空间 \(B\) 为**单连通（simply connected）** 空间，
若 \(B\) 非空，且其上的覆盖空间都是可平凡化的。
:::

若 \(B\) 单连通，则 \(B\) 连通。
事实上，如果 \(U\) 是 \(B\) 的既开又闭又非空的真子空间，
包含映射 \(U \to B\) 为不可平凡化的覆盖映射。

::: corollary {@corollary:contractible-simply-connected}
可缩空间是单连通的。
:::

## Galois 覆盖

### 关于底变换的补充

在开始讲解 Galois 理论之前，我们对诱导纤维空间（或“底变换”）
追加几个评注。我们从一个例子开始讲起。

令 \(B = \{(b,c) \in \mathbb{C}^{2} : b^2 - 4c \neq 0\}\)。
则 \(B\) 上有覆盖空间
\[
X = \{(x,b,c) \in \mathbb{C} \times B : x^2 + bx + c = 0\}.
\]
令 \(p\colon X \to B\) 为覆盖映射。这不是一个平凡覆盖，\(p\)
也不允许截面，因为 \(X\) 是连通的。另一方面，求根公式告诉我们，
对固定的 \(b,c\)，有 \(x = \frac{1}{2}(-b \pm \sqrt{b^2-4c})\)。
可惜，当 \(b,c\) 在 \(B\) 中变化时，\(\sqrt{b^2-4c}\) 不是 \(B\)
上良好定义的函数（它是一个“多值函数”）。为了能够考虑这个“多值函数”，
我们引入一个新的空间
\[
B' = \{(\Delta,b,c) \in \mathbb{C}^{\ast} \times B : \Delta^2 = b^2-4c\}.
\]
则容易验证 \((\Delta,b,c) \mapsto (b,c) \colon B' \to B\)
仍然是覆盖映射。在新的空间 \(B'\) 上，\(\Delta\) 就是一个无歧义的函数了。
如果把 \(X\) 看作 \(B'\) 上的覆盖空间，即考虑底变换
\(B' \times_B X\)，那么在每个 \((\Delta,b,c)\) 点之上对应的方程的两个解就可以用
“单值函数”表达：
\[
s_+ \colon (\Delta,b,c) \mapsto \frac{1}{2}(-b + \Delta) ,\quad
s_- \colon (\Delta,b,c) \mapsto \frac{1}{2}(-b - \Delta).
\]
如何计算 \(B' \times_B X\)？按照定义：
\[
B' \times_B X = \{((\Delta,x,b,c)) \in \mathbb{C}^{4} : \Delta^2 = b^2-4c, x^2+bx +c =0, \Delta\neq 0\}.
\]
而我们刚刚定义的两个映射 \(s_+, s_-\) 则给出了
\(B'\) 到 \(X\) 的两个截面：
\((\Delta,b,c)\mapsto (\Delta,s_{\pm}(\Delta,b,c),b,c)\)。
它们平凡化了 \(B' \times_B X\)。

三次方程 \(x^3 + px + q\) 也有求根公式。令
\(\Delta(p,q) = q^2/4 + p^3/27\)，
则上述方程的根可以用根式表达：
\[
x = C - \frac{p}{3C}, \quad \text{其中\ }C = \sqrt[3]{\frac{q}{2}-\sqrt{\Delta(p,q)}}.
\]
这个式子表明，若 \(B = \{(p,q) \in \mathbb{C}^2\colon \Delta(p,q) \neq 0\}\)，
\(X = \{(x,p,q) \in \mathbb{C} \times B : x^3 + px + q = 0\}\)，
则覆盖空间 \(X \to B\) 不平凡，但是可以利用两次底变换“变平凡”：
\[
\begin{tikzcd}
  X_2 \ar{r} \ar{d} & X_1 \ar{r} \ar{d} & X \ar{d} \\
  B_2 \ar{r}{f_2} & B_1\ar{r}{f_1} & B
\end{tikzcd}
\]
其中
\[
\begin{aligned}
  B_1 &= \{(y_1,p,q) \in \mathbb{C} \times B : y_1^2 = \Delta(p,q)\}, \\
  B_2 &= \{(y_2,y_1,p,q) \in \mathbb{C} \times B_1 : y_2^3 = q/2-y_1\}.
\end{aligned}
\]
注意，此时 \(B_2\) 不是 \(B_1\) 的覆盖映射，它是紧合的，
但在有限个点附近不平展。
我们需要“扔掉”这些不平展的纤维和它们的像才能得到覆盖映射。
因此，我们称 \(f_2\) 是“分歧覆盖”。不论如何，将“坏的点”
丢掉之后，
求根公式就能够给出三个截面，从而在 \(B_2\) 挖掉坏点之后平凡化 \(X_2\)。

对一般的方程，能够通过怎样的底变换最终得到平凡覆盖，反映了方程的复杂程度。
这也是我们考虑下面理论的初衷。

### Galois 覆盖与 Galois 群

::: definition {@definition:automorphism-covering-space}
令 \((E,p)\) 为拓扑空间 \(B\) 上的覆盖空间。
我们称一个从 \(E\) 到自己的 \(B\) 空间同构为 \((E,p)\)
的**自同构 (automorphism)**。
一切 \((E,p)\) 的自同构构成群 \(\mathrm{Aut}_{B}(E,p)\)
（或简写为 \(\mathrm{Aut}_B(E)\)）。这个群的单位元是恒等映射，
逆元由逆映射给出。
:::

::: definition {@definition:galois-covering}
称连通拓扑空间 \(B\) 上的覆盖空间 \((E,p)\)
为 **Galois 覆盖**，或**正规覆盖（normal covering）**，
或**正则覆盖（regular covering）**，
如果 \(E\) 是连通的，且对一切 \(b \in B\)，使得群
\(\mathrm{Aut}_{B}(E)\)
在 \(E_b\) 上的作用是可迁的。此时，\(\mathrm{Aut}_{B}(E)\) 也叫做覆盖
\((E,p)\) 的 **Galois 群**。
:::

::: proposition {@proposition:characterization-galois-covering}
设 \(B\) 是连通拓扑空间，\((E,p)\) 是 \(B\) 上连通非空覆盖空间。
则下面陈述等价。

1. \((E,p)\) 是 Galois 覆盖空间。

2. \((E,p)\) 上的覆盖空间 \((E \times_B E, \mathrm{pr}_1)\) 是可平凡化的。

   如果 \(B\) 局部连通，那么上面的陈述还等价于

3. 存在 \(b \in B\)，使得 \(\mathrm{Aut}_B(E)\) 在 \(E_b\) 上的作用是可迁的。

:::

::: proof
(1) \(\Rightarrow\) (2)。
对任意 \(x \in E\)，\((x,y) \in E\times_B E\)，
存在 \(E\) 的自同构 \(\sigma \in \mathrm{Aut}_{B}(E)\)，
使得 \(\sigma(x) = y\)。定义
\[
s \colon E \to E \times_B E, \quad s(u) = (u,\sigma(u)).
\]
则 \(s\) 是覆盖空间 \((E\times_B E, \mathrm{pr}_1)\)
的截面，满足 \(s(x) = (x,y)\)。根据 @proposition:trivializable-section，
\((E\times_B E, \mathrm{pr}_1)\) 可平凡化。

(2) $\Rightarrow$ (1)。
令 \(b \in B\)，\(x, y \in E_b\)。
则 \((x,y)\) 是 \(E \times_B E\) 中的点。
由于 \((E \times_B E, \mathrm{pr}_1)\) 可平凡化，
存在截面 \(s\colon E \to E \times_B E\) 满足 \(s(x) = (x,y)\)。
将 \(s\) 写作 \(u \mapsto (u,\varphi(u))\)。
则 \(\varphi\) 是从覆盖空间 \((E,p)\) 到自己的态射，\(\varphi(x) = y\)。
类似地，存在覆盖空间 \((E,p)\) 到自己的态射 \(\psi\)，满足 \(\psi(y)=x\)。
于是 \(\varphi\circ \psi\) 和 \(\psi\circ\varphi\) 分别固定 \(y\) 和 \(x\)。
根据 @proposition:separated-local-homeomorphism-lift-unique，
\(\varphi\) 与 \(\psi\) 互为逆映射，从而 \(\varphi\) 为自同构。

在 \(B\) 局部连通时，第三款与前两款的等价性留作习题。
:::

::: example {@example:galois-covering}
1. 任何连通二层覆盖都是 Galois 覆盖。
   事实上，将纤维上一点换作纤维上另一点给出了这个覆盖的自同构。
   因此自同构群在纤维上的作用可迁。

2. 覆盖映射
   \(t\mapsto \mathrm{e}^{2\pi\mathrm{i}t}\colon \mathbb{R} \to \mathbb{S}^1\)
   是 Galois 覆盖。事实上，自同构 \(\{a \mapsto a + n\}_{n\in \mathbb{Z}}\)
   可迁地作用于纤维上。
   容易验证，
   覆盖 \(z\mapsto z^n\colon \mathbb{S}^1 \to \mathbb{S}^1\) 也是 Galois 覆盖。

3. 考虑映射
   \[
   p\colon \mathbb{C} \setminus\{\pm 1, \pm2\} \to \mathbb{C} \setminus \{\pm 2\},
   \quad
   p(z) = z^3 - 3z.
   \]
   则 \(p\) 是紧合的局部同胚，因此是覆盖映射。
   我们断言 \(p\) 不是 Galois 覆盖。
   为此，考虑 \(E\) 上的覆盖空间 \(E \times_B E\)。
   它是 \(\mathbb{C}^{2}_{z,w}\) 中的“代数曲线”
   \[
   C = \{(z,w) \in \mathbb{C}^2 : z^3 - 3z = w^3 - 3w\}.
   \]
   去掉有限个点后得到的。然而
   \[
   C = \{(z,z) \in \mathbb{C}^2\} \cup C'
   \]
   其中
   \[
   C' = \{(z,w) \in \mathbb{C}^2 : z^2 + zw + w^2 = 3\}.
   \]
   （注意 \(C' \cap \{(z,z)\}\) 非空，但是交点不落在 \(E\times_B E\) 里。）
   我们断言 \(C'\) 连通，并且它挖去有限个点后是 \(E\) 的连通二层覆盖空间。
   因此 \(E \times_B E\) 不是平凡覆盖。

   为此，注意到 \(C'\) 是流形，且存在连续双射
   \[
   \mathbb{C} \setminus\{\omega,\omega^2\} \to C',
   \quad t \mapsto \left(\frac{-3t(t+1)}{t^2+t+1} + 1, \frac{-3(t+1)}{t^2+t+1} +1\right)
   \]
   （其中 \(\omega\) 是三次单位根），
   因此 \(C'\) 连通，从而 \(C'\) 挖掉有限个点之后仍然连通。

4. 设 \(E\) 是连通且局部连通拓扑空间，且群 \(G\) 在 \(E\) 上有均匀
   （见 @example:even-action）的左作用。则 \(E\)
   是 \(B = G\backslash E\) 上覆盖空间
   （@proposition:even-action-covering-space）。
   事实上，\(E\) 是 \(B\) 上的 Galois 覆盖，并且 Galois 群
   同构于 \(G\)。

   首先，按照定义，任何 \(g \in G\) 都是从 \(E\) 到自己的（作为 \(B\) 上空间的）
   自同构。根据均匀的定义，不同的 \(g\) 对应不同的自同构。因此我们有包含关系：
   \(G \subset \mathrm{Aut}_{B}(E)\)。由于 \(G\) 已经可迁地作用于纤维上了，
   \(\mathrm{Aut}_{B}(E)\) 也可迁地作用于纤维之上，从而证明了 \(E \to B\)
   是 Galois 覆盖。最后，我们还要说明 \(\mathrm{Aut}_{B}(E) = G\)。
   固定 \(b \in B\)，\(x\in E_b\)。
   对任何 \(\sigma \in \mathrm{Aut}_{B}(E)\)，令 \(y = \sigma(x) \in E_b\)。
   由于存在 \(g \in G\)，\(g(x) = y\)，由于 \(g\) 与 \(\sigma\) 在一点处相等，
   \(E\) 连通，
   根据 @proposition:separated-local-homeomorphism-lift-unique，
   必有 \(g = \sigma\)。于是 \(G = \mathrm{Aut}_{B}(E)\)。

:::

### Galois 理论基本定理

::: definition {@definition:associated-bundle}
设 \((E,p)\) 为连通拓扑空间 \(B\) 上的 Galois
覆盖。我们称覆盖空间 \((E',p')\) **从属于** \((E,p)\)，
如果诱导覆盖 \((E\times_{B}E', \mathrm{pr}_1)\) 是可平凡化的。
:::

::: definition {@definition:g-set}
令 \(G\) 为群。一个（右）\(G\)-**集合**是指一个偶对 \((S,\mu)\)，
其中 \(S\) 为集合，\(\mu\) 为 \(G\) 在 \(S\) 上的**右**作用。
若 \((S,\mu)\) 与 \((S',\mu')\) 为 \(G\)-集合，
它们之间的一个**态射 (morphism)** 是一个映射
\[
f\colon S \to S',  \quad \text{满足} \quad
f(x \cdot g) = f(x) \cdot g, \forall (g,x) \in G\times S.
\]
两个 \(G\)-集合之间态射的集合记做 \(\mathrm{Hom}_{G}(S,S')\)。
如果态射 \(f\) 是双射，则称它为**同构 (isomorphism)**。
:::

::: theorem [Galois 理论基本定理的花哨版本] {@theorem:fundamental-theorem-galois-theory}
设 \(B\) 为连通且局部连通拓扑空间，\(b \in B\) 为点。
设 \((E,p)\) 为 \(B\) 上 Galois 覆盖，Galois 群为 \(G\)。
则存在下面两个“集合”之间的“典则”一一对应：
\[
\frac{\{\text{从属于} \; (E,p) \; \text{的覆盖空间}\}}{\text{覆盖空间同构}}
\xrightarrow{\Phi}
\frac{G\text{-集合}}{\text{同构}}
\]
若覆盖 \((X_1,p_1)\)，\((X_2,p_2)\) 在上述典则对应下分别对应于
\(S_1\)，\(S_2\)，存在典则的双射
\[
\Phi(X_1,X_2)\colon \mathrm{Hom}_{B}(X_1,X_2) \xrightarrow{\sim} \mathrm{Hom}_{G}(S_1,S_2).
\]
:::

::: remark
(1) 上面的陈述有严重的集合论错误，因为一切 \(G\) 集合不构成集合，
我们不能谈论不是集合的“东西”（所谓的真[[类]]）之间的映射。
上述定理的第一部分应该如此陈述：

- (i) 对任何从属于 \((E,p)\) 的覆盖空间 \((X,q)\)
  都可以指定一个 \(G\)-集合 \(S = \Phi(X,q)\)；

- (ii) \((X_1,p_1)\) 和 \((X_2,p_2)\) 同构当且仅当指定的 \(G\)-集合也同构；

- (iii) 任何 \(G\)-集合都同构于某个 \(G\)-集合，后者来自于某个从属于 \((E,p)\)
  的覆盖空间。

(2) 喜欢使用“[[范畴]]学”语言的同学可以这样理解上述基本定理：
从属于覆盖空间 \((E,p)\) 的 \(B\) 上的覆盖空间（以及它们之间的态射）
所构成的“范畴”通过“[[函子]]”\(\Phi\) 而“等价”于 \(G\)-集合（以及它们之间的态射）
构成的“范畴”。
:::

#### 基本定理的证明*

在这一小段中，我们固定连通且局部连通拓扑空间 \(B\) 上的 Galois 覆盖空间
\((E,p)\)。令 \(G = \mathrm{Aut}_{B}(E,p)\)。

::: remark [\(\Phi\) 的定义] {@situation:definition-of-galois-corr}
对任何从属于 \((E,p)\) 的覆盖空间 \((X,q)\)，
定义 \(\Phi(X,q)\) 为 \(\mathrm{Hom}_{B}(E,X)\)。
定义群 \(G = \mathrm{Aut}_{B}(E)\) 在 \(\Phi(X,q)\) 上的右作用如下：
对任意 \(f \in \mathrm{Hom}_B(E,X)\)，\(\sigma \in G\)，
\[
f \cdot \sigma = f \circ \sigma.
\]
由于 \(E \times_B X\) 是 \(E\) 上可平凡化的覆盖空间，
以及 \(\mathrm{Hom}_{B}(E,X)\) 一一对应于 \(E\times_B X\)
在 \(E\) 上的截面，根据 @proposition:trivializable-section 的证明，我
们有同构

```math {@eq:trivializing-by-sections}
u\colon \Phi(X,q) \times E \xrightarrow{(s,y) \mapsto (y,s(y))} E \times_B X.
```

特别地，\(\mathop{\mathrm{Card}}\Phi(X,q) = \deg_B X\)。
所以，\(\Phi(X,q)\) 可以被直观认为是 \(E\times_B X\) 的“层”构成的集合。

设 \(\varphi\colon (X_1,q_1) \to (X_2,q_2)\) 为 \(B\) 上覆盖空间的态射。
定义 \(\Phi(\varphi)\colon \Phi(X_1,q_1) \to \Phi(X_2,q_2)\)
为 \(s \mapsto \varphi \circ s\)。
于是我们得到了映射

```math {@eq:induced-map-on-homs}
\Phi \colon
\mathrm{Hom}_{B}(X_1,X_2) \to \mathrm{Hom}_{G}(\Phi(X_1,q_1),\Phi(X_2,q_2)).
```

由于 \(\varphi\) 也诱导了
\(E\) 上覆盖空间的态射
\[
\varphi' = \mathrm{Id}_{E} \times_B \varphi\colon
E \times_B X_1 \to E \times_B X_2,
\]
在同构 @eq:trivializing-by-sections 之下，
\(\varphi'\) 给出了某个映射
\(\Phi(X_1,q_1) \times E \to \Phi(X_2,q_2) \times E\)。
我们断言，它不是别的，正是 \(\Phi(\varphi) \times \mathrm{Id}_{E}\)。
换言之，下面的图表是交换的

```math {@eq:the-section-trivialization-is-functorial}
\begin{tikzcd}
  \Phi(X_1,q_1) \times E \ar[swap]{d}{\Phi(\varphi) \times \mathrm{Id}} \ar{r}{u} &
  E \times_B X_1 \ar{d}{\varphi'} \\
  \Phi(X_2,q_2) \times E \ar{r}{u} & E \times_B X_2
\end{tikzcd}.
```

交换性的证明完全是检验定义。
对 \((s,y) \in \Phi(X_1,q_1) \times E\)，
有 \(u(s,y) = (y, s(y))\)，故而
\(\varphi'(u(s,y)) = (y,\varphi(s(y)))\)。
另一方面，
\((\Phi(\varphi) \times \mathrm{Id})(s,y) = (\varphi\circ s,y)\)，
所以
\(u(\Phi(\varphi) \times \mathrm{Id})(s,y) = (y, (\varphi\circ s)(y)) = (y,\varphi(s(y)))\)。
从而图表交换。
:::

::: remark [使用 \(\Phi(X,q)\) 重构出 \(X\)] {@situation:covering-space-as-quotient}
设 \((X,q)\) 是 \(B\) 上从属于 \((E,p)\) 的覆盖空间。
令 \(S = \mathrm{Hom}_{B}(E,X)\)。赋予 \(S\) 离散拓扑。则我们可以在 \(S \times E\)
上定义群 \(G\) 的左作用
\[
\sigma \cdot (s,y) = (s \circ \sigma^{-1}, \sigma(y)).
\]

考虑映射 \(v\colon=\mathrm{pr}_{2} \circ u\colon S \times E \to X\)，
\((s,y) \mapsto s(y)\)。则 \(v\) 在每个 \(G\) 的轨道上都是常数。
另一方面，如果 \(v(s,y) = v(s',y')\)，则 \(s(y) = s'(y')\)。
由于 \(G\) 在 \(E_{s(y)}\) 上有可迁作用，存在 \(\sigma \in G\)，
使得 \(\sigma(y) = y'\)。从而 \((s',y') \cdot \sigma = (s,y)\)。
这说明了 \(G\) 的轨道恰好是 \(v\) 的纤维。由于 \(v\) 是覆盖映射的复合，
它是开映射，从而是商映射。
故而根据商空间的性质，典则映射 \(G\backslash (S \times E) \to X\)
是同胚。
:::

::: remark [“满性”] {@situation:the-functor-phi-is-full}
接下来我们来证明映射 @eq:induced-map-on-homs 是满射。
为方便计，令 \(S_i = \Phi(X_i,q_i)\)。
任给 \(f \in \mathrm{Hom}_{G}(S_1,S_2)\)，映射
\[
\widetilde{f} \colon=
f\times \mathrm{Id}_{E} \colon S_1 \times E \to S_2 \times E
\]
是连续的，并且对任何 \(\sigma \in G\)，
有 \(\widetilde{f}(\sigma(s,y))=\sigma \cdot \widetilde{f}(s,y)\)。
利用 @situation:covering-space-as-quotient 段的结论，
上面对 \(G\) 作用的尊重诱导了商空间之间的连续映射
\[
\varphi\colon
X_1 = G \backslash (S_1 \times E) \to G \backslash (S_2 \times E) = X_2.
\]
利用交换图 @eq:trivializing-by-sections，
\(\Phi(\varphi) = f\)。这就证明了满性。
:::

::: remark [“忠实性”] {@situation:the-functor-phi-is-faitulness}
接下来我们来证明映射 @eq:induced-map-on-homs 是单射。
仍记 \(S_i = \Phi(X_i,q_i)\)。
设有 \(\varphi_1, \varphi_2 \in \mathrm{Hom}_{B}(X_1,X_2)\)，
满足 \(\Phi(\varphi_1) = \Phi(\varphi_2)\)。
则根据交换图 @eq:the-section-trivialization-is-functorial，
我们有
\(\mathrm{Id}_{E} \times_B \varphi_1 = \mathrm{Id}_{E} \times_B \varphi_2\)。
由于 \(E \times_B X_1 \to X_1\) 是满射，上面的等式推出
\(\varphi_1 = \varphi_2\)。
:::

::: remark [任何 \(G\)-集合都来自 \(B\) 的从属于 \(E\) 的覆盖空间] {@situation:the-functor-phi-is-essential-surjective}
令 \(S\) 为 \(G\)-集合。
在 \(S \times E\) 上，定义 \(G\) 的群作用 为
\[
\sigma (s,y) = (s \cdot \sigma^{-1}, \sigma \cdot y).
\]
定义 \(X = G\backslash (S \times E)\)。
它带有自然的投影映射 \(q\colon X \to B\)。
由于 \(G\) 在 \(E\) 上的作用是均匀（见 @example:even-action）的，
\(G\) 在 \(S \times E\) 上的作用也是均匀的（@exercise:even-action）。
从而商映射 \(S \times E \to X\) 是覆盖映射，
因此 \(S \times E \to E \times_B X\) 是连续双射，又是覆盖映射。
因此它们同胚。特别地，\(X \to B\) 也是覆盖映射。
因此 \(X\) 是从属于 \(E\) 的覆盖空间，并且 \(S \cong \Phi(X)\)。
:::

至此，我们完成了基本定理的证明。

## 主纤维空间与上同调

## 习题

::: exercise
举例说明：

1. 平展分离空间未必是覆盖空间。

2. 若不假设 \(\mathscr{C}\) 中成员连通，则 @proposition:sep-local-homeo-form-set-over-loc-conn
   不对。

3. 若不假设 \(B\) 连通，则 @proposition:trivializable-section
   中两款都不对。

4. 若不假设 \(B\) 局部连通，
   则 @proposition:morphism-between-locally-connected-is-covering 不对。

   [一个例子如下：考虑 \(0\) 和 所有 \(1/n\) 的并 \(B\)。
   记它纤维为 \(\mathbb N\) 的平凡覆盖 为 \(E\)，\(E \setminus \{(0,0)\} = E'\)。
   证明 \(E' \to B\) 仍然是平凡覆盖。
   但是 \(E'\to E\) 的包含映射不是覆盖映射。
   ]

5. 若不假设 \(B\) 局部连通，则 @proposition:trivializable-section
   的 @item:local-conn-trivialization-by-section 不对。

6. 若不假设 \(B\) 局部连通，
   则 @proposition:clopen-local-conn-covering 不对。

   [一个例子如下：考虑第4问例子中的\(E\)和\(B\)，
   则\(K = \{(1 / n, n) | n \in \mathbb{N}_+\} \subset E\)既开又闭，
   但\(K \rightarrow B\)不是覆盖映射。]

:::

::: exercise
证明 @theorem:restriction-covering-iso 的证明中的引理 1。
:::

::: exercise
设 \(B = U \cup V\) 是两个连通开集的并。
假设 \(U \cap V\) 也连通。令 \((E,p)\) 为 \(B\) 上的覆盖空间，
且 \(U\) 和\(V\) 都平凡化了 \(E\)。证明 \(E\) 在 \(B\) 上是可平凡化的。
由此说明，如果 \(U\) 和 \(V\) 单连通，那么 \(B\) 是单连通的。所以，
\(\mathbb{S}^{n}\) 在 \(n \geq 2\) 时是单连通的。
:::

::: exercise
设
\(B=\{(a_0,\ldots,a_{n-1})\in\mathbb{C}^{n} : P_a(x) = x^{n} + a_{n-1}x^{n-1}+\cdots + a_0 \text{ 无重根}\}\)。
令 \(E = \{(x,a) \in \mathbb{C}\times B : P_a(x) = 0\}\)。
证明 \(p \colon E \to B\)，\(p(x,a)=a\) 是覆盖映射。证明，除非 \(n = 1\)，否则
\((E,p)\) 不可平凡化。
:::

::: exercise
[代数基本定理的又一证明]
还没做这个题的同学不用做了 :D
:::

::: exercise
若 \(B\) 是 \(\mathbb{R}\) 中的区间，证明 \(B\) 上的任意纤维空间都可平凡化。
:::

::: exercise
令 \(P(z),Q(z)\in \mathbb{C}[z]\) 是多项式。
令 \(B = \{z \in \mathbb{C} : Q(z) \neq 0\}\)，
\(X = \{(x,z) \in \mathbb{C} \times B : x^n = P(z)/Q(z)\}\)。
则 \(p\colon X \to B, p(x,z) = z\) 是“分歧覆盖”（即在有限个点之外是覆盖映射）。
找出 \(B\) 的最大开集 \(B'\)，使得 \(X' = B' \times_B X\) 是 \(B'\)
上的覆盖空间。计算 \(\mathrm{Aut}_{B'}(X')\)。
\(X'\) 是 \(B'\) 的 Galois 覆盖吗？
:::

::: exercise
考虑映射
\[
p\colon
E= \mathbb{C}\setminus\{0,\pm\mathrm{i},\pm\sqrt{2}\mathrm{i}\} \to B=\mathbb{C}\setminus\{0,1\},
\quad
p(z) = (z^2+1)^2.
\]
由于 \(p\) 是紧合的局部同胚，它是覆盖映射。
求 \(\mathrm{Aut}_{B}(E)\)。
证明 \((E,p)\) 不是 \(B\) 的 Galois 覆盖。
:::

::: exercise
假设 \(B\) 局部连通。
证明 @proposition:characterization-galois-covering
的第三款与前两款等价。
:::

::: exercise {@exercise:even-action}
1. 验证，若 \(E\) 是连通且局部连通拓扑空间 \(B\) 上的 Galois 覆盖，
   且 \(G\) 是 Galois 群。则 \(G\) 在 \(E\) 上的作用是均匀的，并且
   \(B \cong G\backslash E\)。

2. 设 \(G\) 是群，它在拓扑空间 \(Y\) 上有均匀的作用。
   令 \(S\) 为右 \(G\)-集合。赋予 \(S\) 离散拓扑。证明作用
   \[
   g \cdot (s,y) = (sg^{-1},gy)
   \]
   是 \(G\) 在 \(S \times Y\) 上的均匀作用。

:::

::: exercise [可迁的 \(G\)-集合]
1. 设 \(G\) 是群。\(S\) 是 \(G\)-集合。
   证明 \(G_{s} = \{g \in G : s \cdot g = s\}\) 是 \(G\) 的子群。

2. 设 \(S\) 是可迁的 \(G\)-集合，\(s,t \in S\)。
   证明存在 \(g \in G\)，使得
   \(gG_{s}g^{-1}=\{ghg^{-1} \in G : h \in G_s\}\)
   等于 \(G_{t}\)。

3. 设 \(G\) 是群，\(H\) 是 \(G\) 的子群。
   定义 \(H \backslash G\) 为等价关系
   \[
   g \sim g' \Leftrightarrow \exists h \in H, hg =g'
   \]
   的等价类构成的集合。\(G\) 在 \(H\backslash G\) 上有右作用
   \([g'] \cdot g = [g'g]\)。验证这个作用良好定义，
   且证明 \(H \backslash G\) 是可迁的 \(G\)-集合。

4. 任何对可迁的 \(G\)-集合
   \(S\)，\(S\) 同构于 \(G_s \backslash G\)，其中 \(s \in S\) 为任意一点。

:::

::: exercise [传统的 Galois 对应]
设 \(B\) 是拓扑空间。
\((E,p)\) 是 \(B\) 上 Galois 覆盖空间。
则 \((E,p)\) 的一个**中间覆盖（intermediate covering）**
是指一个 \(B\) 上**连通**覆盖空间的态射 \((E,p) \to (X,q)\)。
称两个中间覆盖 \(s_1\colon (E,p) \to (X_1,q_1)\)
与 \(s_2 \colon (E,p) \to (X_2,q_2)\)
**等价 (equivalent)**，如果存在同构
\(\tau\colon(X_1,q_1) \to (X_2,q_2)\)，使得
\(\tau\circ s_1 = s_2\)。

证明：\((E,p)\) 的中间覆盖的等价类与 \(\mathrm{Aut}_{B}(E)\)
的子群通过下述方式一一对应：
\[
\boxed{s \colon (E,p) \to (X,q)} \;
\longleftrightarrow \;
\mathrm{Stab}_{s} \Phi(X,q) := \boxed{\{\sigma \in G : s \cdot \sigma = s\}}
\]
:::
