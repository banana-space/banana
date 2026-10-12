---
title: 覆盖空间 (II)
notices:
  - name: 问题
    items:
      - “万有覆盖”一节中，例子（万有覆盖空间不是单连通的情形）缺少内容。
      - “习题”一节第一题中“令……为由满同态……”一句不完整。
---

这一节我们的主题有两个：
利用 Galois 理论给出 van Kampen 的证明，以及比较覆盖空间与用道路定义的基本群的关系。

在开始之前，我想赘述几句。
第一，原理上，“正确”的覆盖基本群定义的方法应该是考虑覆盖空间范畴到集合范畴的
“纤维函子（fiber functor）”
\[
\mathscr{F}_b \colon \mathbf{Cov}_B \to \mathbf{Sets},\quad
(X,q) \mapsto X_b
\]
的自同构。
然而这个定义需要太多的抽象废话，因此我们选择使用略显不典则的定义方式来定义覆盖基本群。
对“范畴学”熟悉的朋友应该能够将我们所说的定义翻译成上述结果。

第二，我们选择了“粘贴旋子”的方法来给出 van Kampen 的证明。因为它相对好理解。
然而，如果采用上述纤维函子自同构的定义方法的话，van Kampen 定理可以更加“范畴”地导出。
在这一部分的学习中，我们已经刻意地讲了许多比较“formal”的内容。
但我想我们浅尝辄止即可，因为朋友们应该已经能够体会到“抽象”的风味了。

## 旋子 {@sec:torsor}

::: definition {@definition:torsor}
令 \(G\) 为拓扑群，\(B\) 为拓扑空间。
则 \(B\) 上一个以 \(G\) 为结构群的（左）**旋子 (torsor)**
（或**主纤维丛（principal fiber bundle）**，
或**主齐性空间（principal homogeneous space）**），
是一个偶对 \(((X,q),\mu)\)，其中 \(q\colon X \to B\) 是 \(B\)
上的拓扑空间，\(\mu\colon G \times X \to X\)
是群 \(G\) 在 \(X\) 上的连续作用
（按照惯例，\(\mu(g,x)\) 用毗联 \(g\cdot x\)代表）。并且它满足如下性质：

- (T) 对任何 \(b \in B\)，存在 \(b\) 的邻域 \(U\)，
  以及 \(U\) 上空间的同构：
  \[
  \varphi\colon (U \times_B X, \mathrm{pr}_1) \xrightarrow{\sim} (U \times G, \mathrm{pr}_1),
  \quad
  \varphi(b,x) = (b, u(b,x)),
  \]
  它满足
  \[
  u(g \cdot (b,x)) = g \cdot u (b,x).
  \]

容易验证（通过局部的考虑），\(G\backslash X \cong B\)。

旋子 \((X_1,q_1)\) 与 \((X_2,q_2)\) 叫做同构的旋子，如果它们之间存在尊重
\(G\) 作用的 \(B\) 空间同构。
:::

::: example
1. 平凡旋子：\((B \times G, \mathrm{pr}_1)\)。

2. 先前构造的纤维空间 \(\mathbb{C}^{n+1} \setminus \{0\} \to \mathbb{C}\mathrm{P}^n\)
   是以群 \(\mathbb{C}^{\ast}\) 为结构群的旋子。

3. 任何局部连通、连通空间上的 Galois 覆盖是以它的 Galois 群（离散拓扑）
   为结构群的旋子。

:::

显然，若 \(G\) 具有离散拓扑，则 \(G\) 的旋子是 \(B\) 的覆盖空间。
在这一段里，我们利用 Galois 理论来研究旋子的分类。

1. 我们固定如下记号：
   \(G\) 是固定的离散群，\(B\) 是连通且局部连通的拓扑空间，\((E,p)\)
   是 \(B\) 的 Galois 覆盖，Galois 群 \(\mathrm{Aut}_B(E,p)\)
   以 \(\Gamma\) 代表。
   我们引入如下术语：一个**被 \(E\) 标记**的 \(B\) 的覆盖空间为
   \((X,q,s)\)，其中 \(s \in \mathrm{Hom}_{B}(E,X)\)。

2. （从旋子到带有 \(G\) 左作用的 \(\Gamma\)-集合）
   根据 Galois 对应，任何从属于 \(E\) 的 \(G\)-旋子 \((X,q)\)
   都对应于唯一的 \(\Gamma\)-集合 \(S\)。由于对任何 \(g \in G\)，
   \(g\colon X \to X\) 满足 \(q\circ g = q\)，\(g\) 是 \(B\)
   上覆盖空间的态射。因此每个 \(g\) 诱导了 \(\Gamma\)-集合上的态射
   \[
   u_g \colon S \to S.
   \]
   注意，由于它是 \(\Gamma\)-集合态射，它满足
   \[
   u_g(s) \cdot \gamma = u_g (s \cdot \gamma) , \forall g \in G, \gamma \in \Gamma.
   \]

   由于 \(G\) 在 \(X\) 上的作用满足 \((g_1 \cdot g_2) (x) = g_1(g_2(x))\)，
   通过 Galois 对应，我们有 \(u_{g_1} \cdot u_{g_2} = u_{g_1 g_2}\)。
   这说明
   \[
   G \times S \to S, \quad (g,s) \mapsto u_g(s)
   \]
   是 \(G\) 在集合 \(S\) 上的左作用。

3. （上述 \(G\) 作用可迁）
   我们断言 \(G\) 在 \(S\) 上的作用是可迁的。
   事实上，由于 \(G\) 在 \(S\) 上的作用尊重 \(\Gamma\) 的右作用，
   \(G \backslash S\) 具有自然的 \(\Gamma\)-集合结构。
   根据 Galois 对应，集合 \(G \backslash S\)
   对应于 \(G \backslash X\)（为什么？留作习题）。
   由于我们之前已经论述过，\(G \backslash X = B\)，
   又由于 \(B\) 通过 Galois 对应对应于单点集合，
   必有 \(G \backslash S = \{\ast\}\)。于是 \(G\)
   在 \(S\) 上作用可迁。

4. 上述 \(G\) 作用“均匀”。即如果存在 \(s \in S\)，
   \(u_g(s) = u_{g'}(s)\)，那么 \(g = g'\)。通过 Galois
   对应，这个立即转化为如下命题：若存在 \(x \in X\)，使得 \(gx = g'x\)，
   则 \(g = g'\)。通过局部平凡化可知
   \[
   \{b \in B  : g(x) = g'(x), \forall x \in X_b\}
   \]
   和它的补都是既开又闭的，因此 \(B\) 的连通性推出 \(g = g'\)。

5. （利用群同态分类带有“均匀”\(G\) 作用的 \(\Gamma\)-集合）
   通过上述论述，我们从旋子导出了一个带有 \(G\)-作用的 \(\Gamma\)-集合
   \(S\)。
   这样的结构与群同态 \(\mathrm{Hom}(\Gamma,G)\)
   有密切关系。

   选择 \(s \in S\)。由于 \(G\) 作用均匀，映射
   \(G \to S\)，\(g \mapsto u_{g}s\) 是双射。
   特别地，对任意 \(\gamma \in \Gamma\)，
   存在唯一 \(\varphi(\gamma) \in G\)，
   使得 \(u_{\varphi(\gamma)} \cdot s= s \cdot \gamma\)。
   我们有
   \[
   \begin{aligned}
     u_{\varphi(\gamma_1\gamma_2)}  (s)
     &= s \cdot (\gamma_1 \cdot \gamma_2)\\
     &= (s \cdot \gamma_1) \cdot \gamma_2 \\
     &= u_{\varphi(\gamma_1)} (s \gamma_2) \\
     &= u_{\varphi(\gamma_1)} u_{\varphi(\gamma_2)}  (s)
   \end{aligned}
   \]
   故而，\(\varphi\colon \Gamma \to G\) 是群同态。
   反之任给群同态 \(\varphi\colon \Gamma \to G\)，
   我们就可以将 \(G\) 实现为带 \(\Gamma\) 右作用的左 \(G\)-集合：
   \[
   g \cdot \gamma = \varphi(\gamma) \cdot g.
   \]

   然而，如果我们选择不同的基点 \(s' \in S\)，所得到的同态并不相同：
   若 \(s' = gs\)，则
   \[
   \begin{aligned}
     s' \cdot \gamma
     &= g \cdot s \cdot \gamma \\
     &= g \cdot \varphi(\gamma)  \cdot g^{-1} s'
   \end{aligned}
   \]
   故而 \(\varphi'(\gamma) = g\varphi(\gamma) g^{-1}\)。

6. 综上所述：

   - [从属于 \(E\) 的 \(G\)-旋子的同构类]
     一一对应于
     [\(\mathrm{Hom}(\Gamma,G)/\text{共轭作用}\)]；

   - [带标记的从属于 \(E\) 的 \(G\)-旋子的同构类]一一对应于
     [\(\mathrm{Hom}(\Gamma,G)\)]。

## 万有覆盖

::: definition {@definition:universal-covering}
设 \((B,b_0)\) 为带基点的拓扑空间。
设 \((E,t_0,p)\) 为 \((B,b_0)\) 上带基点的覆盖空间，即 \((E,p)\)
是 \(B\) 的覆盖空间，\(p(t_0) = b_0\)。
称 \((E,t_0,p)\) 为 \((B,b_0)\)
的**万有覆盖空间（universal covering space）**，
如果对任何 \((B,b_0)\) 上带基点的覆盖空间 \((X,x_0,q)\)，
存在唯一的保持基点的 \(B\) 上的空间的态射
\(f\colon (E,t_0) \to (X,x_0)\)。
:::

::: proposition {@proposition:universal-covering-trivialize-covering-of-base}
设 \((E,t_0,p)\) 是带基点拓扑空间 \((B,b_0)\) 上的带基点的覆盖空间。
设 \(B\) 局部连通。
则 \((E,t_0,p)\) 是 \((B,b_0)\) 的万有覆盖的必要且充分条件是：

- \(E\) 是连通拓扑空间，

- 对任何 \(B\) 上的覆盖空间 \((X,q)\)，\((E\times_B X,\mathrm{pr}_1)\)
  是 \(E\) 上的可平凡化的覆盖空间。

:::

::: proof
必要性。
设 \((E,t_0,p)\) 是 \((B,b_0)\) 的万有覆盖空间。
设 \(F\) 为 \(E\) 的包含 \(t_0\) 的既开又闭的子空间。
令 \(X = B \times \{0,1\}\) 为 \(B\) 上的平凡覆盖。
我们来定义两个从 \((E,t_0)\) 到 \((X,(b_0,0))\) 的态射：
\[
\begin{aligned}
  f(t) &= (p(t), 0 ); \\
  g(t) &=
     \begin{cases}
       (p(t),0) & t \in F, \\
       (p(t),1) & t \notin F.
     \end{cases}
\end{aligned}
\]
则 \(f,g\) 都将 \(t_0\) 送到 \((b_0,0)\)，
由于 \((E,t_0,p)\) 是万有覆盖，必有 \(f = g\)。
这迫使 \(E = F\)。从而 \(E\) 连通。

再来证明 \(E\) 可以平凡化任何 \(B\) 上的覆盖空间 \((X,q)\)。
为此，只需证明对任何 \(x_0 \in X_{b_0}\)，存在
\(\mathrm{pr}_1\) 的截面 \(s\colon E \to E \times_B X\)，
使得 \(s(t_0) = (t_0,x_0)\)。
由于 \((E,t_0,p)\) 是万有覆盖，存在唯一保持基点的态射
\(f\colon (E,t_0,p) \to (X,x_0,q)\)。
令 \(s(t) = (t,f(t))\) 即可。

充分性。设 \((E,t_0,p)\) 满足题目中两条性质。
则对任何带基点的 \((B,b_0)\) 的覆盖空间 \((X,x_0,q)\)，
存在 \(\mathrm{pr}_1\colon E \times_B X \to E\) 的截面
\(s\colon E \to E \times_B X\)，满足 \(s(t_0) = (t_0,x_0)\)。
令 \(f = \mathrm{pr}_2 \circ s\)，则 \(f\) 为保持基点的态射。
\(f\) 的唯一性由 @proposition:separated-local-homeomorphism-lift-unique
保证。
:::

::: corollary {@corollary:universal-covering-shift-base-point}
设 \((B,b_0)\) 是带基点的局部连通拓扑空间。
若 \((E,t_0)\) 是 \((B,b_0)\) 的万有覆盖空间，
则对任意 \(t'_0 \in E_{b_0}\)，\((E,t'_0)\) 也是 \((B,b_0)\)
的万有覆盖空间。
:::

::: corollary {@corollary:simply-connected-covering-is-universal}
设 \((E,t_0,p)\) 是带基点局部连通拓扑空间 \((B,b_0)\) 的带基点的覆盖空间。
若 \(E\) 是单连通的，则 \((E,t_0,p)\) 是 \((B,b_0)\) 的万有覆盖空间。
:::

::: proof
由于 \(E\) 单连通，它也连通。由于 \(E\) 上的覆盖空间都是可平凡化的，
那些形如 \(E \times_B X\) 的覆盖空间可平凡化。
因此 \((E,t_0,p)\) 是万有覆盖。
:::

若 \((B,b_0)\) 具有一个单连通的覆盖空间，则它的所有万有覆盖空间都是单连通的。
但是除非我们对 \((B,b_0)\) 加以更强的限制，它的万有覆盖空间可能不是单连通的。

::: example
此处应该有个例子。
:::

::: definition {@definition:locally-nice}
称拓扑空间 \(B\) 为**局部好**的，
若 \(B\) 有一个开覆盖 \(\mathscr{U}\)，
使得对每个 \(B\) 的覆盖空间 \((X,q)\)，每个 \(\mathscr{U}\)
的成员 \(U\)，\(U \times_B X\) 是可平凡化的。

称 \(B\) 为**局部单连通** 的，若任何 \(B\) 的开集 \(U\)，
都有一个开覆盖，其中的成员是单连通的。
:::

显然，局部单连通的拓扑空间是局部好的。

::: theorem {@theorem:universal-covering-exists}
设拓扑空间 \(B\) 连通、局部连通，且局部好。则对任意 \(b_0 \in B\)，
\((B,b_0)\) 有万有覆盖。
:::

::: proof
根据 @proposition:sep-local-homeo-form-set-over-loc-conn，
存在一个集合 \(\Lambda\)，以及由 \(\Lambda\) 参数化的一族带基点连通覆盖空间
\((X_{\lambda},x_{\lambda},q_{\lambda})_{\lambda\in \Lambda}\)，
使得任何 \(B\) 的带基点连通覆盖空间都同构于某个 \((X_{\lambda},x_{\lambda},q_{\lambda})\)。
令 \((X,q) = \prod\limits_{\lambda \in \Lambda}{}_B X_{\lambda}\)。
一般来说，\(X\) 上自然的拓扑不会令 \(q\colon X \to B\) 是覆盖映射（见下），
我们要对此稍加修正。

对任何“好”开集 \(U\)，考虑拓扑空间 \(U \times_B X\)。
则 \(U \times_B X\) 是可平凡化的覆盖空间的乘积，因此它的“自然拓扑”
同胚于某个积拓扑 \(U \times F\)，
其中 \(F = \prod_{\lambda\in \Lambda} F_{\lambda}\)
是离散空间的乘积。然而，无限个离散空间的积空间不是离散的（积拓扑不同于箱拓扑）。
为此，我们**强行**赋予 \(U \times_B X\) 来自于
\(X \times F_{\text{discrete}}\) 的拓扑。记这个空间为 \(X_U'\)。
集合 \(X'_U\) 构成了 \(X\) 的一个覆盖，而 \(X'_{U}\)
的开集为子基决定了 \(X\) 上比纤维积拓扑更细的拓扑。我们记这个拓扑空间为
\(X'\)。显然，按照定义，\(q\colon X' \to B\) 就是覆盖空间了。
由于 \(B\) 是局部连通的，\(X'\) 也局部连通。

令 \(E\) 为 \(X\) 包含点 \(t_0=(x_{\lambda})\) 的连通分支，\(p\) 为 \(q\) 在
\(E\) 上的限制。
则 \((E,p)\) 为 \(B\) 的覆盖空间（@proposition:clopen-local-conn-covering）。
我们断言 \((E,t_0,p)\) 是 \((B,b_0)\) 的一个万有覆盖。
事实上，投影映射 \(X' \to X_{\lambda}\) 在 \(E\) 上的限制
给出了 \(B\) 上带基点覆盖空间的态射
\((E,t_0,p) \to (X_{\lambda},x_{\lambda},q_{\lambda})\)。

令 \((Y,y,r)\) 为 \((B,b_0)\) 的任何带基点的覆盖空间。
则包含 \(y\) 的 \(Y\) 的连通分支 \(Y'\) 是 \(B\) 的覆盖空间
（@proposition:clopen-local-conn-covering）。
因此存在 \(\lambda \in \Lambda\)，以及唯一的同构
\((Y',y,r) \cong (X_{\lambda},x_{\lambda},q_{\lambda})\)。
复合态射
\[
(E,t_0,p) \to (X_{\lambda},x_{\lambda},q_{\lambda}) \to (Y',y,r)
\to (Y,y,r)
\]
就给出万有覆盖所需的映射 [这样的映射一定唯一
（@proposition:separated-local-homeomorphism-lift-unique）]。
这就说明了 \((E,t_0,p)\) 是万有覆盖。
:::

::: proposition {@proposition:locally-simply-connected-univ-covering-simply-connected}
任何连通、局部单连通空间 \((B,b_0)\) 的万有覆盖是单连通的。
:::

::: proof
令 \(r\colon E' \to E\) 为 \((B,b_0)\) 的万有覆盖 \((E,t_0,p)\) 的覆盖空间。
令 \(U\) 为 \(B\) 的单连通开集，那么 \(p^{-1}(U)\) 作为 \(B\)-空间同构于
平凡 \(B\)-覆盖 \(U \times F\)。令 \(U_{v}\) 为在这个同构下 \(U \times\{v\}\)
的原像，这里 \(v \in F\)。由于 \(r\) 是覆盖映射，\(U_v\) 单连通，
\(E' \times_{E} U_{v}\) 可平凡化，因此它同构于 \(U_{v} \times G\)，其中 \(G\)
离散。
综上所述，\(r^{-1}p^{-1}(U) \cong U \times F \times G\)。因此 \(E'\) 也是
\(B\) 的覆盖空间。对任何 \(t' \in r^{-1}(t_0)\)，根据万有覆盖的泛性质，存在
\(s\colon E \to E'\) 满足 \(s(t_0) = t'\)，\(p\circ r \circ s = p\)。
由于 \(r\circ s\) 与 \(\mathrm{Id}_{E}\) 在 \(t_0\) 上取值相等，
@proposition:separated-local-homeomorphism-lift-unique
推出 \(r\circ s = \mathrm{Id}_{E}\)。因此 \(s\) 是经过 \(t'\) 的截面。
从而 \((E',r)\) 是 \(E\) 上可平凡化覆盖空间
（@proposition:trivializable-section 的 @item:local-conn-trivialization-by-section）。
:::

### 用覆盖空间定义基本群

::: definition {@definition:pi-1-covering}
设 \((B,b)\) 是带基点的局部连通拓扑空间。
设 \((E,t)\) 为 \((B,b)\) 的一个万有覆盖。
定义 \((B,b)\) 的覆盖基本群为
\[
\pi^{\mathrm{cov}}_1(B,b)
= \mathrm{Aut}_{B}(E) = \{\sigma \colon E \to E \mid p\circ \sigma = p\}.
\]
:::

设 \(f\colon (B_1,b_1) \to (B,b)\) 为连续映射。
则对任何带基点的 \((B,b)\) 上覆盖空间 \((X,x,q)\)，
我们可以得到诱导的覆盖空间 \((X_1, x_1, q_1)\)，
其中 \(X_1 = B_1 \times_B X\)，
\(x_1 = (b_1,x)\)，\(q_1 = \mathrm{pr}_1\)。
如果 \((X,q)\) 是 \(G\)-旋子，那么 \((X_1,q_1)\)
也是 \(G\)-旋子。若 \((E_1,e_1,p_1)\) 为 \((B_1,b_1)\)
的万有覆盖，那么根据 @sec:torsor 的讨论，存在唯一的 \(B_1\)-空间态射
\(s\colon E_1 \to X_1\)，满足 \(s(e_1) = b_1\)。
因此，\(\pi_1(B_1,b_1)\)-集合 \(\Phi(X_1,q_1)\)
获得了基点 \(s\)。利用 @sec:torsor 的讨论，
我们得到了群同态 \(\varphi\colon\pi_1(B_1,b_1) \to G\)。
特别地，如果取 \((X,x,q)\) 为 \((B,b)\) 的万有覆盖，
那么我们就得到了覆盖基本群之间的同态
\[
f_{\ast} \colon \pi^{\mathrm{cov}}_1(B_1,b_1) \to \pi^{\mathrm{cov}}_1(B,b).
\]

## Van Kampen

在这一节，为打字方便计，我省略覆盖基本群的上标 cov。请诸位不要心生疑惑。

1. {@item-1} 由于万有覆盖 \((E,e)\) 是 Galois 覆盖，前述（@sec:torsor）
   关于旋子的讨论可以应用于万有覆盖。
   因此，我们有如下一一对应
   （\(G\) 为离散群，注意到任何 \(G\)-旋子都从属于万有覆盖）：

   [\((B,b)\) 上 带基点的 \(G\)-旋子]/同构
   \(\longleftrightarrow\)
   [同态 \(\pi_1(B,b) \to G\)]

   这个对应的依据是：一旦我们选取了万有覆盖的基点，那么任何标记 \(s\colon E \to X\)
   就会给出 \(X\) 的基点 \(s(e)\)；反之，如果在 \(X\) 上选定了基点，根据万有覆盖的泛性质，
   存在唯一的标记 \(s\colon E \to X\) 满足 \(s(e) = x\)。

2. 若 \(f\colon (B_1,b_1) \to (B,b)\) 是保持基点的连续映射，
   \(f_{\ast} \colon \pi_1(B_1,b_1) \to \pi_1(B,b)\) 为基本群之间诱导的映射。
   请读者验证，
   若群同态 \(\varphi\colon \pi_1(B,b) \to G\) 对应于 \((B,b)\) 上带基点的旋子 \((X,x,q)\)，
   那么复合同态 \(f_{\ast} \circ \varphi\) 对应于 \((B_1,b_1)\) 上带基点的旋子
   \((B_1 \times_B X, (b_1,x), \mathrm{pr}_1)\)。

   现在考虑连通、局部连通、局部好拓扑空间 \(B\)。
   设存在开集 \(U, V\)，使得 \(U \cap V\) 连通，\(B = U \cup V\)。
   取定 \(b \in U \cap V\)。
   我们来考虑如下问题：对离散群 \(G\)，
   如何构造 \((B,b)\) 上带基点的 \(G\)-旋子。

3. {@item-2} 如果 \((X,x,q)\) 是 \((B,b)\) 上的带基点的旋子，
   那么通过考虑 \(X\) 的 \(U\)，\(V\) 上的原像，我们可以得到旋子
   \(X_U = (U \times_B X, x, q_U)\) 和
   \(X_V = (V \times_B X, x,q_V)\)。
   并且它们进一步限制到 \(U \cap V\) 上得到了同构的旋子，即存在典则同构
   \((U\cap V) \times_U X_U  \simeq (U\cap V) \times_V X_V\)
   （为了省事，没写基点，但是这里一切的对象都要带基点）。

   反过来，若给定了 \(X_U\)，\(X_V\)，分别为 \(U\) 和 \(V\) 上带基点的旋子，
   并且给定保持基点的同构
   \(u\colon (U\cap V) \times_U X_U  \xrightarrow{\sim} (U\cap V) \times_V X_V\)
   注意，这样的同构 \(u\) 如果存在，那么一定唯一
   （利用连通性、局部连通性和局部平凡化）。
   那么通过利用 \(u\) 粘贴，我们可以得到 \(B\) 上带基点的旋子 \(X\)。

   综上所述，我们得到了如下一一对应：

   [\((B,b)\) 上 带基点的 \(G\)-旋子的同构类]
   \(\longleftrightarrow\)
   [三元组 \((X_U,X_V,u)\) 的同构类]

4. 结合 @item-2 和旋子与群的关系（@item-1），我们有：

   [三元组 \((X_U,X_V,u)\) 的同构类]

   \[
   \begin{tikzcd}
     \quad \ar{d} \\ \quad \ar{u}
   \end{tikzcd}
   \]

   \(\{(\varphi_U,\varphi_V) \in \mathrm{Hom}(\pi_1(U,b),G) \times \mathrm{Hom}(\pi_1(V,b),G) : \varphi_U \circ \rho_U = \varphi_V \circ \rho_V \}\)

   这里，\(\rho_U\) 是包含映射 \(U\cap V \to B\) 诱导的基本群之间的同态。

   再度利用 @item-1，我们得到一一对应
   \[
   \begin{tikzcd}
     \mathrm{Hom}(\pi_1(B,b),G) \ar{d} \\
     \{(\varphi_U,\varphi_V) \in \mathrm{Hom}(\pi_1(U,b),G) \times \mathrm{Hom}(\pi_1(V,b),G) : \varphi_U \circ \rho_U = \varphi_V \circ \rho_V \} \ar{u}
   \end{tikzcd}
   \]
   根据前推的泛性质，这就说明了
   \(\pi_1(B,b)\cong\pi_{1}(U,b)\ast_{\pi_1(U\cap V,b)} \pi_1(V,b)\)。
   即覆盖空间版本的 van Kampen 定理成立。

上面描述的 van Kampen 定理的证明相当一般，不限于两个开集覆盖。
它的证明大意甚至在 \(U \cap V\) 不连通时也能运行。为此，我们来证明如下结果：

::: proposition
设 \(B\) 局部单连通且连通，\(B = U \cup V\)，
\(U, V\) 单连通，\(U \cap V\) 有 \(n+1\)
个连通分支，那么 \(\pi_1(B) \cong \mathbb{Z}^{\ast n}\)。
:::

::: proof
取 \(b \in U \cap V\)。设 \(U \cap V = M_0 \cup \cdots \cup M_{n}\)，
\(b \in M_0\)。由于 \(U\)，\(V\) 单连通，任何 \(G\)-旋子在 \(U\)，
\(V\) 上都是可平凡化的。因此，为了粘贴得到 \(B\) 上的 \(G\)-旋子，
需要指定平凡旋子在 \(M_i\) 上的同构。由于基点在 \(M_0\) 里，在 \(M_0\)
的同构定下来了；然而在每个 \(M_i\) 指定同构相当于在 \(G\) 中取一个元素。
因此 \(\mathrm{Hom}(\pi_1(B),G) = G^{n}\)。根据泛性质，\(\pi_1(B)\)
是 \(n\) 个文字的自由群。
:::

## 基本群与基本群

道路单连通可以推出单连通性。

::: proposition {@proposition:1-conn-imply-simpy-conn}
局部道路连通且道路单连通的拓扑空间是单连通的。
:::

::: proof
令 \(B\) 为局部道路连通且道路单连通的拓扑空间。
只需证明任何 \(B\) 的连通覆盖都是平凡的。
设 \((X,p)\) 是 \(B\) 的连通覆盖。
对任何 \(b \in B\)，任何 \(x, y \in X_b\)，
令 \(\gamma\) 为连结 \(x,y\) 的 \(X\) 中道路。
则 \(p \circ \gamma\) 是基于 \(b\) 的回路。
由于 \(B\) 道路单连通，\(\gamma\) 是零伦的。
利用同伦提升引理，\(\gamma\) 必然也是回路。从而 \(x = y\)，
于是 \(E_b\) 是单点集合，从而 \(p\) 是同胚。
:::

在先前的章节中，我们已经证明过如下结果（@theorem:covering-pi-1-group-action）：若 \((E,t_0,p)\)
是局部道路连通拓扑空间 \((B,b)\) 的**道路单连通**覆盖空间，
那么 \(\pi_1(B,b)\) 同构于 \(\pi_1^{\mathrm{cov}}(B,b)\)。
在这一段里，我们要解释“具有良好局部性质”的拓扑空间（比如流形）
的万有覆盖空间必然是道路单连通的。证明完成后，我们关于覆盖空间的故事就讲完了。

::: definition {@definition:deloopable}
我们称拓扑空间 \(B\) 为
**半局部道路单连通（semi-locally simply connected by paths）**
空间，如果任何一点 \(b \in B\) 都有邻域 \(U\)，使得
\(\pi_1(U,b) \to \pi_1(B,b)\) 为零映射。
:::

::: theorem {@theorem:1-conn-cover}
设 \(B\) 为道路连通、局部道路连通、半局部道路单连通的拓扑空间，
则 \(B\) 上存在道路单连通的覆盖空间。
:::

::: proof
回忆：\(\varpi_{x,y}(X)\) 代表了空间 \(X\) 上两点 \(x,y\)
之间的道路的严格同伦类。

1. **集合 \(E\) 的定义。**
   取定 \(b \in B\)。令 \(E\) 为所有从 \(b\) 出发的道路的严格同伦类。
   即 \(E = \bigcup_{b'\in B} \varpi_{b,b'}(B)\)。
   中的元素。令 \(p\colon E \to B\) 为 \(p(\alpha) = b'\)，其中 \(b'\)
   是严格同伦类 \(\alpha\) 的终点。

2. **定义 \(E\) 上的拓扑。**
   设 \(\alpha \in E\)，\(U\) 为 \(b'=p(\alpha)\) 的邻域，
   定义 \([\alpha,U]\) 为
   \[
   \bigcup_{b'' \in U}\left\{\alpha \cdot \gamma : \gamma \in \varpi_{b',b''}(B)\right\}.
   \]
   若 \(U\) 是满足 \(\pi_1(U) \to \pi_1(B)\) 为平凡的连通开集，那么 \([\alpha,U]\)
   中的点就一一对应于 \(U\) 了：此时 \(\varpi_{b',b''}(B)\) 是单点集合。

3. **\(p\colon E \to B\) 是覆盖映射。**
   在上述拓扑下，\(p\colon E \to B\) 为局部同胚。
   设 \(U\) 是 \(B\) 的开集，\(b' \in U\)。
   则我们有 \(p^{-1}(U) = \bigcup_{\alpha \in \varpi_{b,b'}(B)}[\alpha,U]\)。
   显然右侧包含于左侧。而对任何终点在 \(U\) 中的道路 \(c\)，令 \(d\) 为 \(U\) 中连结
   \(c(1)\) 与 \(b'\) 的道路。因此 \([c] = ([c\ast d]) \cdot [d]^{-1}\) 属于右侧。
   因此 \(p\) 是连续映射。

   设 \(U\) 是满足 \(\pi_1(U) \to \pi_1(B)\) 为平凡的连通开集。
   那么 \(p\colon [\alpha,U] \to B\) 的像是 \(U\)。
   由于这样的 \(U\) 构成 \(B\) 的拓扑基，\(p\) 是开映射。
   由于 \(p|_{[\alpha,U]}\colon [\alpha,U] \to U\) 是双射，
   它必然是同胚。

   设 \(\gamma \in [\alpha,U] \cap [\beta,U]\)。
   则 \(\gamma = \alpha \cdot \alpha' = \beta \cdot \beta'\)。
   从而 \(\alpha^{-1}\beta = \alpha' \cdot \beta'^{-1}\)。
   然而右侧的同伦类是零，因为它由 \(U\) 中的回路代表。
   因此 \(\alpha = \beta\)。从而在我们对 \(U\) 的假设之下，
   \(([\alpha,U])_{\alpha\in \varpi_{b,b'}(B)}\) 是两两不交的同胚于
   \(U\) 的 \(E\) 的开集。从而 \(p\) 是覆盖映射。

4. **\(E\) 道路连通。**
   设 \(\alpha = [c] \in \varpi_{b,b'}(B)\)。
   令 \(\widetilde{c}\colon [0,1] \to E\)，
   \(\widetilde{c}(s) = [c(st)]\)。
   我们留给读者验证 \(\widetilde{c}\) 是连续映射。
   则 \(\widetilde{c}(0)\)
   为基于 \(b\) 的常值道路的同伦类，而 \(\widetilde{c}(1) = [c]\)。
   从而 \(E\) 道路连通。

5. **\(E\) 道路单连通。**
   设 \(u\colon [0,1] \to E\) 为基于 \((b,[1_b])\) 的回路。
   则 \(p\circ u\) 是 \(B\) 上基于 \(b\) 的零伦的回路。
   它是 \(u(t)\) 所代表的道路的终点在 \(B\) 上所扫出的轨迹。
   令 \(F\colon [0,1]_s \times [0,1]_t \to B\)
   为\(p\circ u\) 与 \(1_b\) 之间的严格同伦。
   则对任何 \(t \in [0,1]\)，\(\gamma_{t}(s) = F(s,t_0)\)
   是一个连结 \(b\) 与 \(p(u(t))\) 的道路。
   当 \(t\) 变化的时候，\([\gamma_{t}]\) 是 \(E\)
   上的道路，满足 \([\gamma_0] = [1_b] = [\gamma_1]\)，
   且 \([\gamma_t]\) 的终点就是 \(p(u(t))\)。
   根据道路提升的唯一性，必然有 \(u(t) = [\gamma_t]\)。
   于是 \(u\) 的一个零伦由 \((s,t) \mapsto [\gamma_{st}]\) 给出。

证明就这样完成了。
:::

## 习题

令 \((B,b)\) 为连通、
局部道路连通、局部道路单连通（比如，局部可缩）的带基点的拓扑空间
（比如，连通流形）。
\((X,x,q)\) 为 \((B,b)\) 上的带基点的覆盖空间。
令 \(X_b = q^{-1}(b)\)。
则 \(\pi_1(B,b)\) 在 \(X_b\) 上的作用给出了群同态
\(\rho\colon \pi_1(B,b) \to \mathrm{Aut}(X_b)\)。
它叫做“单径表示”，\(\rho(\pi_1(B,b))\) 叫做**单径群**。

回忆：设 \((E,e)\) 是 \((B,b)\) 的万有覆盖空间，则 \(E\) 道路单连通。
此时有同构 \(u_{b,e}\colon \pi_1(B,b) \cong \mathrm{Aut}_{B}(E)\)，以及如下图景：
\[
\begin{tikzcd}
  \mathrm{Hom}_B(E,X)
  \ar[rr,"s \mapsto s(e)"]
  \arrow[loop,swap,"{\mathrm{Aut}_{B}(E)}"]
  & & X_b \arrow[loop,swap, "{\pi_1(B,b)}"]
\end{tikzcd}
\]
即在上述一一对应之下，这两个群，通过同构 \(u_{b,e}\)，的作用是一致的。

::: exercise
记号与假设如上。设 \(G = \rho(\pi_1(B,b))\) 为单径群，赋予离散拓扑。
令 \((\widetilde{X},\widetilde{x},\widetilde{q})\)
为由满同态 \(\rho\colon \pi_1(X,b) \to G\)
证明下列断言。

1. \((\widetilde{X},\widetilde{q})\) 是 \(B\) 的以 \(G\) 为 Galois 群的
   Galois 覆盖。

   [提示：连通性在 Galois 对应下对应于“只有一个 \(\pi_1\) 的轨道”。]

2. 设 \(X\) 连通。
   则 \((X,q)\) 为从属于 \((\widetilde{X},\widetilde{q})\)，即
   \[
   (\widetilde{X} \times_B X, \mathrm{pr}_1)
   \]
   可平凡化。

   [提示：由于 \(X\) 连通，它只有一个 \(\pi_1\)-轨道，因而只有一个 \(G\)-轨道。
   通过 Galois 对应，任何满射 \(G \to X_b\) 给出了态射 \(\widetilde{X} \to X\)。]

:::

::: exercise
记号与假设如上。
定义
\[
X(m) =
\left\{(x_1,\ldots,x_m) \in
  \underbrace{X\times_{B} \cdots \times_B X}_{m\text{-重纤维积}} :
  \forall i \neq j, x_i \neq x_j
\right\}.
\]
约定 \(X(0) = B\)，
则我们有一系列 \(B\) 上覆盖空间之间的态射：
\[
\begin{tikzcd}
  \cdots    \ar[shift left=2]{r} \ar[shift right = 2]{r} \ar{r} & X(2) \ar[shift left]{r} \ar[shift right]{r} & X(1) \ar[r] & X(0).
\end{tikzcd}
\]
设 \(n = \operatorname{Card}X_b < \infty\)。

1. 证明 \(X(n-1) \times_{X(0)}X(1)\) 是 \(X(n-1)\) 上可平凡化的覆盖空间。

2. 证明 \(\rho\) 是满射的必要且充分条件是 \(X(n)\) 连通。

:::

::: exercise
令 \(a \in \mathbb{C}\) 为复数。对 \(B \subset \mathbb{C}\)，定义
\[
\begin{aligned}
  X_a = \{(x,\epsilon) \in \mathbb{C} \times B : x^3 + ax = \epsilon\}.
\end{aligned}
\]
定义 \(q_a\colon X_a \to B\) 为 \(q_a(x,\epsilon) = \epsilon\)。

1. 对固定的 \(a\)，找出最大的 \(B = B_a\)，使得 \(q_a\) 为覆盖映射。

2. 对上述 \(B_a\)，计算覆盖 \((X_a,q_a)\) 的单径群。

:::

::: exercise
令 \(a \in \mathbb{C}\) 为复数。对 \(B \subset \mathbb{C}\)，定义
\[
Y_a = \{(x,\epsilon) \in \mathbb{C} \times B : x^4 + ax^2 = \epsilon\}.
\]
定义 \(r_a\colon Y_a \to B\) 为 \(r_a(x,\epsilon) = \epsilon\)。

1. 对固定的 \(a\)，找出最大的 \(B = B_a\)，使得 \(r_a\) 为覆盖映射。

2. 对上述 \(B_a\)，计算覆盖 \((Y_a,r_a)\) 的单径群。

:::
