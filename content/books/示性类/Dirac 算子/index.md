---
title: Dirac 算子
---

{@sect-8}

Dirac 算子的理论起源于量子力学。
为了在量子力学中引入狭义相对论，
需要对波函数的 Laplace 算子开平方而得到 Hamilton 算子。
如果波函数是普通的复值函数，那么开平方的操作是不可能做到的。
Dirac 因而提出，波函数应该是取值于某个 $\mathbb{C}^n$ 的函数。
这个空间 $\mathbb{C}^n$ 被称为**旋量空间**（spinor space）。
在这个框架下，Dirac 的 Hamilton 算子自然地给出了 Clifford 代数在旋量空间中的表示。

## Dirac 算子与 Clifford 代数

在这一节中，设 $M$ 是 $n$ 维 Riemann 流形，$E \to M$ 是光滑向量丛。

::: definition
$E$ 上的一个 **Dirac 算子**（Dirac operator）是一个一阶微分算子
$D \colon \Gamma (E) \to \Gamma (E)$，使得 $D^2$ 是广义 Laplace 算子。
:::

::: example {@eg-8-dirac-d-dstar}
若 $E = \wedge^\bullet \, T^* M$ 是微分形式的向量丛，
则 $d + d^*$ 是一个 Dirac 算子。它的平方是
\[
(d + d^*)^2 = d d^* + d^* d,
\]
称为**微分形式的 Laplace 算子**。
它与 Levi-Civita 联络给出的 Laplace 算子相差一个曲率项。
这一关系称为 Weitzenböck 恒等式，这里就不详述了。

再例如，若 $M$ 是 Kähler 流形，$E$ 是全纯微分形式的向量丛，
则 $\overline{\partial}{} + \overline{\partial}{}^*$ 是一个 Dirac 算子。此时，相应的
Weitzenböck 恒等式被称为 Bochner–小平（Kodaira）恒等式。
:::

下面，设 $D$ 是 $E$ 上的一阶微分算子。则在局部坐标系中，它具有
\[
D = \sum_{k=1}^n a^k \partial_k + b
\]
的形式，其中 $a^k, b \in \Gamma( \operatorname{End} (E) )$。从而
\[
D^2 = \frac12 (a^i a^j + a^j a^i) \, \partial_i \partial_j + (\text{一阶算子}),
\]
其中系数 $1/2$ 是因为 $\partial_i \partial_j$ 和 $\partial_j \partial_i$
在求和时被重复计算了。因此，$D$ 是 Dirac 算子等价于
\[
a^i a^j + a^j a^i = -2 g^{ij}.
\]
这个关系启发了 Clifford 代数的定义。

::: definition
设 $V$ 是 $n$ 维实向量空间，$Q$ 是 $V$ 上的二次型，等同地看作对称双线性型。
**Clifford 代数**定义为商代数
\[
\operatorname{Cl} (V, Q) = \frac {T(V)} {v \cdot w + w \cdot v = -2 Q(v, w)},
\]
其中 $T(V) = \bigoplus_{k \geq 0} V^{\otimes k}$ 是 $V$ 上的张量代数。

如果 $Q$ 非退化，其标准型中有 $p$ 个正项和 $q$ 个负项，我们就记
\[
\operatorname{Cl}_{p,q} (V) = \operatorname{Cl} (V, Q).
\]
我们记 $\operatorname{Cl} (V) = \operatorname{Cl}_{n,0} (V)$。
:::

不难看出，$\operatorname{Cl} (V, Q)$ 的维数是 $2^n$，它的一组基是
\[
\{ e_{i_1} \cdots e_{i_k} \mid i_1 < \cdots < i_k \},
\]
其中 $\{ e_i \}$ 是 $V$ 的一组基。

::: example
我们有 $\operatorname{Cl} (\mathbb{R}^2) \simeq \mathbb{H}$。
事实上，记 $\mathrm{i}, \mathrm{j}$ 为 $\mathbb{R}^2$ 的标准正交基，
则 Clifford 代数的定义给出的关系是
\[
\mathrm{i}^2 = \mathrm{j}^2 = -1, \quad \mathrm{i} \, \mathrm{j} + \mathrm{j} \, \mathrm{i} = 0.
\]
:::

由于张量代数的 $\mathbb{Z}$-分次在 $\operatorname{Cl} (V, Q)$ 中得到保留，
后者也是 $\mathbb{Z}$-分次代数。特别地，我们有：

::: proposition
Clifford 代数是超代数。
:::

::: definition
一个 **Clifford 模**是指 Clifford 代数 $\operatorname{Cl} (V, Q)$ 在一个超向量空间 $E$ 中的表示。
也就是说，我们有（保持 $\mathbb{Z}_2$-分次的）超代数同态
\[
\operatorname{Cl} (V, Q) \to \operatorname{End} (E).
\]
:::

::: example {@eg-8-symbol-map}
超向量空间 $\wedge^\bullet \, V$ 具有自然的 $\operatorname{Cl} (V, Q)$-模的结构，定义为
\[
v \cdot \alpha = v \wedge \alpha - Q (v, -) \mathbin{\lrcorner} \alpha \quad
(v \in V, \ \alpha \in \wedge^\bullet \, V),
\]
其中 $\mathbin{\lrcorner}$ 表示缩并。
若取 $V$ 关于 $Q$ 的一组正交基 $\{ e_1, \dotsc, e_n \}$，
则上式可以写成
\[
e_i \cdot (e_{i_1} \wedge \cdots \wedge e_{i_k}) = \Biggl\{
\begin{array}{ll}
  e_i \wedge e_{i_1} \wedge \cdots \wedge e_{i_k}, & i \notin \{ i_1, \dotsc, i_k \}, \\
  -Q(e_i) \, e_{i_2} \wedge \cdots \wedge e_{i_k}, & i = i_1.
\end{array}
\]
映射
\[
\sigma \colon \operatorname{Cl} (V, Q) \overset{\cdot 1}{\longrightarrow} \wedge^\bullet \, V
\]
是超向量空间的同构，称为**符号映射**（symbol map）。
:::

## 旋量群

旋量群 $\mathrm{Spin} (n)$ 的一个著名的性质是，
它是 $\mathrm{SO} (n)$ 的双重覆叠（在 $n \geq 3$ 时是万有覆叠）。
也就是说，我们有 Lie 群的正合列
\[
0 \to \mathbb{Z}_2 \to \mathrm{Spin} (n) \to \mathrm{SO} (n) \to 0.
\]
通过 Clifford 代数，我们可以得到旋量群的一个具体的构造。

::: definition
设 $V$ 是 $n$ 维欧氏空间。我们定义 Lie 代数
\[
\mathfrak{spin} (V) = \operatorname{Cl} (V)_2
\]
为 Clifford 代数中分次为 $2$ 的部分，其 Lie 括号就是 Clifford 代数中的交换子。
:::

换言之，如果 $e_1, \dotsc, e_n$ 是 $V$ 的一组标准正交基，那么
\[
\mathfrak{spin} (V) = \operatorname{span} {} \{ e_i e_j \mid i \neq j \},
\]
这里，注意到我们有反交换关系
\[
e_i e_j = -e_j e_i.
\]

::: proposition {@thm-8-spin-alg-action}
Lie 代数 $\mathfrak{spin} (V)$ 可以作用在 $V \subset \operatorname{Cl} (V)$ 上，
作用的方式是 $a \cdot v = [a, v]$。这个作用诱导了 Lie 代数同构
\[
\mathfrak{spin} (V) \simeq \mathfrak{so} (V).
\]
:::

::: proof
首先，
我们说明对应的映射 $\varphi \colon \mathfrak{spin} (V) \to \mathfrak{gl} (V)$ 的像落在
$\mathfrak{so} (V)$ 中。
取 $V$ 的标准正交基 $e_1, \dotsc, e_n$。则元素 $e_i e_j \in \mathfrak{spin} (V)$ 的作用是
\[
\left \{ \begin{array}{l}
  e_i \mapsto 2e_j, \\
  e_j \mapsto -2e_i, \\
  e_k \mapsto 0 \qquad (k \neq i, j).
\end{array} \right .
\]
这一线性映射的矩阵是反对称矩阵。这也说明 $\varphi$ 是单射。
但 $\dim \mathfrak{spin} (V) = \dim {\wedge^2 \, V} = \dim \mathfrak{so} (V)$，
从而 $\varphi$ 是到 $\mathfrak{so} (V)$ 的同构。
:::

::: definition
$V$ 的**旋量群**（spin group）定义为
\[
\mathrm{Spin} (V) = \exp \bigl( \mathfrak{spin} (V) \bigr),
\]
其中 $\exp$ 是指在 $\operatorname{Cl} (V)$ 中的幂级数。
:::

事实上，Lie 理论告诉我们，
$\mathrm{Spin} (V)$ 是一个以 $\mathfrak{spin} (V)$ 为 Lie 代数的连通 Lie 群，
它是 $\operatorname{Cl} (V)$ 的偶数阶元素的乘法群的 Lie 子群。

::: example
设 $\{ e_i \}$ 是 $V$ 的标准正交基。则 $i \neq j$ 时，$(e_i e_j)^2 = -1$。因此
\[
\exp ( t e_i e_j ) = \sum _{k=0} ^\infty \frac {t^k} {k!} \, (e_i e_j)^k
= \cos t + (\sin t) \, e_i e_j \quad (t \in \mathbb{R}).
\]
特别地，当 $\dim V = 2$ 时，我们得到了圆圈群
\[
\mathrm{Spin} (2) \simeq S^1.
\]
当 $\dim V = 3$ 时，我们可以将 $\operatorname{Cl} (V)$ 的子代数
$\operatorname{span} \, \{ 1, e_1 e_2, e_2 e_3, e_3 e_1 \}$ 和 $\mathbb{H}$ 等同起来。
此时，旋量群就是单位四元数的乘法群：
\[
\mathrm{Spin} (3) \simeq S^3 \subset \mathbb{H},
\]
因为指数映射会把虚四元数映到单位四元数。
:::

::: proposition
当 $\dim V \geq 2$ 时，$\mathrm{Spin} (V)$ 是 $\mathrm{SO} (V)$ 的双重覆叠。
:::

::: proof
考虑 $\mathrm{Spin} (V)$ 在 $V$ 上的作用：
\[
g \cdot v = g v g^{-1} \quad (g \in \mathrm{Spin} (V), \ v \in V).
\]
我们说明，这个作用诱导了到 $\mathrm{SO} (V)$ 的双重覆叠。

首先，这个 Lie 群表示对应的 Lie 代数表示就是 @thm-8-spin-alg-action 给出的同构。
因此，对应的映射 $\mathrm{Spin} (V) \to \mathrm{SO} (V)$ 是覆叠映射。
因为元素 $-1 \in \mathrm{Spin} (V)$ 的作用是平凡的，所以这个覆叠至少是二重的。
但 $\dim V \geq 3$ 时，$\mathrm{SO} (V)$ 的基本群是 $\mathbb{Z}_2$，所以这个覆叠至多是二重的；
$\dim V = 2$ 的情况可以直接计算而得出。
:::

当 $\dim V = 1$ 时，为了和上述结论保持一致，我们可以重新定义
\[
\mathrm{Spin} (1) = \mathrm{Spin} (V) = \{ \pm 1 \} \subset \operatorname{Cl} (V).
\]

## 旋量

**旋量**（spinor）的名字是仿照向量（vector）的名字而造出来的。
这样命名的原因是，旋量和向量有类似的性质，它们的区别在于，
向量的旋转是在 $\mathrm{SO} (n)$ 中完成的，而旋量的旋转是在 $\mathrm{Spin} (n)$ 中完成的，
因此，旋量有时需要转两圈，才能回到原来的位置。

例如，手的角度（旋转位置）可以由一个单位旋量描述。
伸出右手，掌心向上，然后将手掌逆时针旋转一周。
这时，手臂会处于一个不自然的位置。
接下来，将手举过头顶，不改变手的朝向。
这样，手掌可以继续逆时针旋转一周（从下向上看是顺时针），
然后恢复到正常的位置。
这一过程说明，手需要旋转两周才能回到原来的位置。

事实上，在三维空间中，旋量构成的空间就是 $\mathbb{H}$，
而旋量群 $\mathrm{Spin} (3)$ 是单位四元数的乘法群，它通过乘法作用在旋量空间上。

一般地说，**旋量空间**（spinor space），即所有旋量构成的空间，
是旋量群 $\mathrm{Spin} (n)$ 的一个表示，并且，这个表示无法通过 $\mathrm{SO} (n)$ 的表示得到。

::: theorem {@thm-8-def-spinor}
设 $V$ 是 $n$ 维欧氏空间。

- 若 $n$ 为偶数，则存在一个 $2^{n/2}$ 维复 Clifford 模 $S$，使得
  \[
  \operatorname{Cl} (V) \otimes \mathbb{C} \simeq \operatorname{End} (S),
  \]
  这个同构与二者在 $S$ 上的作用相容。
  并且，$\dim S^+ = \dim S^- = 2^{n/2-1}$。

- 若 $n$ 为奇数，则存在一个 $2^{(n-1)/2}$ 维复 Clifford 模 $S$，
  它不带有 $\mathbb{Z}_2$-分次，使得作为普通（非 $\mathbb{Z}_2$-分次）的代数，有
  \[
  \operatorname{Cl} (V) \otimes \mathbb{C} \simeq \operatorname{End} (S) \oplus \operatorname{End} (S),
  \]
  这个同构与二者在 $S$ 上的作用相容。

在两种情况下，超向量空间 $S$ 称为**旋量空间**（spinor space）。
:::

在证明定理之前，我们先给出这一结果的一些推论。

我们知道，矩阵代数 $\operatorname{End} (S)$ 是单代数，
它唯一的不可约表示就是它在 $S$ 上的作用。因此，定理蕴涵了以下结论。

::: corollary
若 $n$ 为偶数，则 $\operatorname{Cl} (V)$ 的所有复表示都具有
\[
W \otimes S
\]
的形式，其中 $W$ 是超向量空间，带有平凡的 Clifford 作用。
:::

因为旋量群 $\mathrm{Spin} (V)$ 是 Clifford 代数的乘法子群，
所以，定理也蕴涵了关于旋量群的表示的结论。

::: corollary
旋量空间 $S$ 是旋量群 $\mathrm{Spin} (V)$ 的一个表示。
当 $n$ 为偶数时，它分裂成旋量群的两个不可约表示
\[
S = S^+ \oplus S^-.
\]
当 $n$ 为奇数时，$S$ 本身就是不可约的。
:::

::: proof
记 $\operatorname{Cl}^+ (V) \subset \operatorname{Cl} (V)$ 为偶数阶元素构成的子代数，
则 $\mathrm{Spin} (V) \subset \operatorname{Cl}^+ (V)$。
因为 $\mathrm{Spin} (V)$ 包含 $\operatorname{Cl}^+ (V)$ 作为向量空间的一组基，
所以 $\operatorname{Cl}^+ (V)$ 的不可约表示一定诱导 $\mathrm{Spin} (V)$ 的不可约表示。

当 $n$ 为偶数时，
\[
\operatorname{Cl}^+ (V) \otimes \mathbb{C} \simeq \operatorname{End}^+ (S) \simeq \operatorname{End} (S^+) \oplus \operatorname{End} (S^-),
\]
从而 $S$ 分裂为 $\operatorname{Cl}^+ (V)$ 的两个不可约表示，即 $S^+$ 和 $S^-$。

当 $n$ 为奇数时，定理的证明（在下方）表明
\[
\operatorname{Cl}^+ (V) \otimes \mathbb{C} \simeq \operatorname{End} (S).
\]
:::

::: proof [@thm-8-def-spinor 的证明]
取 $V$ 的标准正交基 $e_1, \dotsc, e_n$。

若 $n$ 是偶数，我们令
\[
\begin{aligned}
  P &= \operatorname{span}
    ( e_1 - \mathrm{i} e_2, \ e_3 - \mathrm{i} e_4, \dotsc, e_{n-1} - \mathrm{i} e_n ), \\
  S &= \wedge^\bullet \, P.
\end{aligned}
\]
则 $V \otimes \mathbb{C} = P \oplus \overline{P}$。
我们定义 $\operatorname{Cl} (V) \otimes \mathbb{C}$ 在 $S$ 上的作用如下：
对 $v \in V \otimes \mathbb{C}$，$s \in S$，定义
\[
v \cdot s = \Biggl\{ \begin{array}{ll}
  \sqrt2 \ v \wedge s, & v \in P, \\
  -\sqrt2 \ Q(v, -) \mathbin{\lrcorner} s, & v \in \overline{P},
\end{array}
\]
其中记号的意义同 @eg-8-symbol-map。
因为 $\dim \operatorname{Cl} (V) = 2^n = (\dim S)^2$，并且，
通过计算可以验证，$\operatorname{Cl} (V)$ 非零元素的作用都非零。
因此，这个作用诱导了同构
\[
\operatorname{Cl} (V) \otimes \mathbb{C} \simeq \operatorname{End} (S).
\]

若 $n$ 是奇数，记 $W = \operatorname{span} (e_1, \dotsc, e_{n-1})$。
我们有（非 $\mathbb{Z}_2$-分次的）同构
\[
\begin{aligned}
  ( \operatorname{Cl} (W) \oplus \operatorname{Cl} (W) ) \otimes \mathbb{C}
    &\simeq \operatorname{Cl} (V) \otimes \mathbb{C}, \\
  ( e_{i_1} \cdots e_{i_k} , \ 0 )
    &\mapsto \frac12 \bigl( e_{i_1} \cdots e_{i_k}
    + (-1)^\sigma \, \mathrm{i}^{(n+1)/2} \, e_{j_1} \cdots e_{j_{n-k}} \bigr), \\
  ( 0 , \ e_{i_1} \cdots e_{i_k} )
    &\mapsto \frac12 \bigl( e_{i_1} \cdots e_{i_k}
    - (-1)^\sigma \, \mathrm{i}^{(n+1)/2} \, e_{j_1} \cdots e_{j_{n-k}} \bigr),
\end{aligned}
\]
其中 $j_1, \dotsc, j_{n-k}$ 表示 $1, \dotsc, n$ 中除了 $i_1, \dotsc, i_k$ 外的指标，
$\sigma$ 是 $1, \dotsc, n$ 的排列 $i_1, \dotsc, i_k, j_1, \dotsc, j_{n-k}$ 的奇偶性。
:::

## 流形上的 Clifford 模

为了将 Clifford 代数的理论应用到 Dirac 算子上，
我们需要在流形上考虑余切空间的 Clifford 代数，它们构成一个向量丛。

::: definition
设 $M$ 是流形。$M$ 上的 **Clifford 丛**
\[
\operatorname{Cl}(M) \to M
\]
是在点 $x \in M$ 处的纤维为 $\operatorname{Cl} (T_x^* M)$
的代数丛。$M$ 上的一个 **Clifford 模**是一个超向量丛
\[
E \to M,
\]
带有 Clifford 丛的作用。
:::

为了将上一小节的理论应用到这一情形，
我们还需要将旋量空间也变成 $M$ 上的向量丛。
这需要 $M$ 具有一个**旋量结构**。

::: definition
设 $E \to M$ 是秩为 $n$ 的可定向光滑实向量丛。
$E$ 的一个**旋量结构**（spin structure）
是一个 $\mathrm{Spin} (n)$-主丛
\[
\mathrm{Spin} (E) \to M,
\]
使得它对应的 $\mathrm{SO} (n)$-主丛与 $E$ 对应的 $\mathrm{SO} (n)$-主丛同构。

流形 $M$ 的一个**旋量结构**是指余切丛 $T^* M$ 上的旋量结构。
带有一个旋量结构的流形称为**旋量流形**（spin manifold）。
:::

旋量结构的存在性可以通过示性类来判断。

::: theorem
设 $E \to M$ 是秩为 $n$ 的可定向光滑实向量丛。
则 $E$ 上存在旋量结构，当且仅当其第二 Stiefel–Whitney 类消失，即
\[
w_2 (E) = 0.
\]
:::

这一结论的证明可参见 [@lawson-michelsohn, 定理 II.1.7]。

::: definition
设 $M$ 是旋量流形。则 $M$ 上的**旋量丛**（spinor bundle）
\[
S(M) \to M
\]
是一个复向量丛，其纤维是由 $M$ 的旋量结构给出的旋量空间。
:::

具体地说，这一定义是这样完成的：
$\mathrm{Spin} (n)$-主丛的转移映射是到 $\mathrm{Spin} (n)$ 的映射，
而 $\mathrm{Spin} (n)$ 可以映到 $\operatorname{End} (S)$，给出旋量丛的转移映射。

当 $\dim M$ 是偶数时，旋量丛是一个超向量丛 $S^+ (M) \oplus S^- (M)$，
也是 $M$ 上的 Clifford 模。由前几个小节的讨论，我们得到下面的结论。

::: proposition {@thm-8-cl-mod-can-form}
设 $M$ 是偶数维旋量流形。则 $M$ 上的每个复 Clifford 模都具有
\[
W \otimes S(M)
\]
的形式，其中 $W$ 是超向量丛，带有 Clifford 丛的平凡作用。
:::

::: proof
我们只指出下面的事实：如果 $E \simeq W \otimes S$ 是 Clifford 代数 $\operatorname{Cl} (V)$ 上的模，
那么 $W \simeq \operatorname{Hom}_{\operatorname{Cl} (V)} (S, E)$。
:::

## Dirac 算子与 Clifford 超联络

现在，我们可以让 Dirac 算子回到我们的视野了。

::: definition
设 $E \to M$ 是光滑的超向量丛。$E$ 上的 **Dirac 算子**的定义和之前一样，
但我们额外要求 $D$ 是**奇算子**，它把 $E^\pm$ 的截面分别变成 $E^\mp$ 的截面。
:::

设 $D \colon \Gamma (E) \to \Gamma (E)$ 是 Dirac 算子。则局部坐标下，$D$ 具有如下形式：
\[
D = \sum_k a^k \partial_k + b,
\]
其中系数 $a^k \in \Gamma (\operatorname{End}^- (E))$ 满足 Clifford 代数的关系。
因此，Clifford 丛 $\operatorname{Cl} (M)$ 可以通过这些 $a^k$ 作用在 $E$ 上，
这赋予了 $E$ 一个 Clifford 模的结构。

反过来，在每个 Clifford 模上，我们可以构造出相应的 Dirac 算子，
但常数项 $b$ 可以随意改变。
因此，这些 Dirac 算子构成一个 $\Gamma (\operatorname{End}^- (E))$-齐性空间。

下面，我们打算把一个 Clifford 模上的 Dirac 算子与 Clifford 超联络对应起来。

::: definition
Clifford 模 $E$ 上的 **Clifford 超联络**是指一个超联络 $\nabla^E$，
满足如下的 Leibniz 法则：若
$a \in \Gamma ( \operatorname{Cl} (M) )$，$X \in \Gamma ( TM ),$ $s \in \Gamma (E)$，则
\[
\nabla^E_X (a \cdot s) = (\nabla_X a) \cdot s + (-1)^{|a|} \, a \cdot \nabla^E_X s,
\]
其中 $\nabla$ 是 Levi-Civita 联络。这个关系可以更简洁地写成
\[
[ \nabla^E, \ a \cdot {} ] = \nabla a \cdot {} \ .
\]
:::

::: proposition {@thm-8-nabla-s}
设 $M$ 是偶数维旋量流形。则 Levi-Civita 联络诱导了旋量丛
$S = S(M)$ 上的 Clifford 超联络 $\nabla^S$。
:::

::: proof
$\nabla^S$ 的构造如下：标架丛 $\mathrm{SO} (T^* M)$ 上的 Levi-Civita
联络诱导了主丛 $\mathrm{Spin} (M)$ 上的联络，而由旋量丛 $S$ 的构造，
这个联络诱导了 $S$ 上的联络 $\nabla^S$。

为了验证 $\nabla^S$ 是 Clifford 超联络，
只需验证它诱导的 $\operatorname{End} (S)$ 上的联络与 Clifford 丛的 Levi-Civita 联络相同。

我们知道，$\mathrm{Spin} (n) \subset \operatorname{Cl}^+ (n)$ 包含了后者的一组基。定义
\[
\mathrm{Pin} (n) = \{ 1, e_1 \} \cdot \mathrm{Spin} (n) \subset \operatorname{Cl} (n),
\]
则 $\mathrm{Pin} (n)$ 包含 $\operatorname{Cl} (n)$ 的一组基。
事实上，Lie 群 $\mathrm{Pin} (n)$ 有两个连通分支，
其单位元所在的分支就是 $\mathrm{Spin} (n)$，另一个分支包含于 $\operatorname{Cl}^- (n)$。
主丛 $\mathrm{Spin} (M)$ 诱导了 $\mathrm{Pin} (n)$-主丛 $\mathrm{Pin} (M)$，
它的联络就同时诱导了 $\operatorname{End} (S)$ 的联络和 Clifford 丛的联络。
:::

事实上，超联络 $\nabla^S$ 在以下意义上是最本质的 Clifford 超联络。

::: proposition {@thm-8-cliff-conn}
设 $M$ 是偶数维旋量流形，$W \to M$ 是复超向量丛。则有一一对应
\[
\begin{aligned}
  \{ W \text{上的超联络} \} &\leftrightarrow
    \{ W \otimes S \text{ 上的 Clifford 超联络} \}, \\
  \nabla^W &\leftrightarrow \nabla^W \otimes 1 + 1 \otimes \nabla^S.
\end{aligned}
\]
:::

::: proof
留给读者。
:::

下面，我们构造 Clifford 超联络所对应的 Dirac 算子。

设 $M$ 是偶数维旋量流形，$E \to M$ 是 Clifford 模，
带有 Clifford 超联络 $\nabla$。则在局部坐标下，
这个联络作用在 $E$ 的截面上时具有如下形式：
\[
\nabla = \sum_{i=1}^n dx^i \otimes \partial_i
+ \sum_{\alpha} dx^\alpha \otimes b_\alpha,
\]
其中 $\alpha$ 是 $M$ 方向的多重指标
（我们不妨只考虑递增排列、无重复的多重指标），
$b_\alpha$ 是 $\operatorname{End} (E)$ 的截面，其奇偶性与 $|\alpha|$ 相反。
这里，联络的一阶导数项是 $dx^i \otimes \partial_i$，因为任何联络都满足这一点。

我们对应地定义 Dirac 算子
\[
D_{\nabla} = \sum_{i=1}^n (dx^i \cdot {}) \circ \partial_i
+ \sum_{\alpha} (dx^\alpha \cdot {}) \circ b_\alpha,
\]
这里 $\cdot$ 表示 Clifford 作用，
例如 $dx^i$ 的作用就是我们之前的记号 $a^i$。

这一定义可以写成坐标无关的形式：

::: definition
设 $M$ 是偶数维旋量流形，$E \to M$ 是 Clifford 模，
带有 Clifford 超联络 $\nabla$。则 Dirac 算子 $D_{\nabla}$ 定义为
\[
D_{\nabla} \colon \Gamma (E)
\overset{\nabla}{\longrightarrow} \Omega^\bullet (M, E)
\simeq \Gamma (\wedge^\bullet \, T^* M \otimes E)
\overset{\sigma^{-1}}{ \underset{\simeq}{\longrightarrow} }
  \Gamma (\operatorname{Cl} (M) \otimes E)
\overset{\text{作用}}{\longrightarrow} \Gamma (E),
\]
其中 $\sigma$ 是 @eg-8-symbol-map 中的符号映射。
:::

::: theorem {@thm-8-dirac-cliff-conn}
设 $M$ 是偶数维旋量流形，$E \to M$ 是复 Clifford 模。
则上述对应关系是一一对应：
\[
\begin{aligned}
  \{ E \text{ 上的 Clifford 超联络} \} &\leftrightarrow
    \{ E \text{ 上的 Dirac 算子} \}, \\
  \nabla &\leftrightarrow D_{\nabla}.
\end{aligned}
\]
这里，我们当然要求 Dirac 算子是与 $E$ 的 Clifford 模结构相容的。
:::

::: proof
我们已经给出了从左边集合到右边集合的映射。
我们还需要证明这个映射是双射。

我们回忆，右边的集合是 $\Gamma (\operatorname{End}^- (E))$-齐性空间。
而 @thm-8-cl-mod-can-form 说明
$E$ 一定能写成 $E \simeq W \otimes S$ 的形式，
因此，有超向量丛的同构
\[
\operatorname{End} (E) \simeq \operatorname{End} (S) \otimes \operatorname{End} (W)
\simeq \operatorname{Cl} (M) \otimes \operatorname{End}_{\operatorname{Cl} (M)} (E),
\]
其中 $\operatorname{End}_{\operatorname{Cl} (M)} (E)$ 表示 $E$ 作为 Clifford 模的自同态，
不要求保持 $\mathbb{Z}_2$-分次。从而，我们有同构
\[
\Gamma (\operatorname{End}^- (E))
\simeq \Gamma^- \bigl( \operatorname{Cl} (M) \otimes \operatorname{End}_{\operatorname{Cl} (M)} (E) \bigr) \\[6pt]
\hspace{10em} \overset{\sigma}{ \underset{\simeq}{\longrightarrow} }
  \Gamma^- \bigl( \wedge^\bullet \, T^* M \otimes \operatorname{End}_{\operatorname{Cl} (M)} (E) \bigr)
\simeq \Omega^- \bigl( M, \operatorname{End}_{\operatorname{Cl} (M)} (E) \bigr).
\]
如果这个映射将截面 $s$ 映到形式 $\omega$，那么
\[
D_{\nabla} + s = D_{\nabla + \omega}.
\]
因此，我们只需要验证，$\nabla + \omega$ 是 Clifford 超联络当且仅当
\[
\omega \in \Omega^- \bigl( M, \operatorname{End}_{\operatorname{Cl} (M)} (E) \bigr).
\]
我们将这一验证留给读者。
:::
