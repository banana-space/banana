---
title: 超 Lie 代数
aliases: [Lie 超代数]
categories: [超几何, Lie 理论]
navboxes: [超几何]
---

在[[超几何]]中，**超 Lie 代数**是配备 [[Lie 括号]]的[[超向量空间]]，
满足带符号法则的反对称性和 [[Jacobi 恒等式]]。
例如，对次数分别为 $|x|$、$|y|$ 的齐次元素 $x$、$y$，其 Lie 括号满足
\[
[x, y] = -(-1)^{|x||y|} [y, x] ,
\]
即对偶元素满足反对称性，而对奇元素满足对称性。
超 Lie 代数的偶部分就是普通 [[Lie 代数]]，而奇部分则成为其[[Lie 代数表示|模]]。
在奇部分上的 Lie 括号是对称的，取值于偶部分中。

例如，超向量空间的全体线性自同态构成超 Lie 代数，其 Lie 括号是[[分次交换子]]
\[
[x, y] = x y - (-1)^{|x||y|} y x .
\]
另外，[[超流形]]上的[[向量场]]也构成超 Lie 代数。

与经典的 Lie 理论类似，[[超 Lie 群]]的无穷小信息由超 Lie 代数描述。
例如，在[[超对称量子场论]]中，[[Poincaré 超代数]]就描述了 [[Minkowski 超空间]]的无穷小对称性。

## 定义

以下设 $k$ 是[[特征（代数）|特征]]为 $0$ 的[[域]]。
对超向量空间 $\mathfrak{g} = \mathfrak{g}_{\bar{0}} \oplus \mathfrak{g}_{\bar{1}}$
中的齐次元素 $x$，记其奇偶次数为 $|x| \in \mathbb{Z}_2$。

::: definition [超 Lie 代数]
$k$ 上的**超 Lie 代数**是超向量空间 $\mathfrak{g}$，
配备偶的双线性映射
\[
[-, -] \colon \mathfrak{g} \otimes_k \mathfrak{g} \longrightarrow \mathfrak{g},
\qquad
[\mathfrak{g}_{\bar{i}}, \mathfrak{g}_{\bar{j}}]
\subset \mathfrak{g}_{\overline{i + j}},
\]
称为**超 Lie 括号**，满足以下条件：

- 对齐次元素 $x$、$y$，有**超反对称性**
  \[
  [x, y] = -(-1)^{|x||y|} [y, x] .
  \]

- 对齐次元素 $x$、$y$、$z$，有**超 Jacobi 恒等式**
  \[
  (-1)^{|x||z|} [x, [y, z]]
  + (-1)^{|y||x|} [y, [z, x]]
  + (-1)^{|z||y|} [z, [x, y]] = 0 .
  \]

超 Lie 代数之间的**同态**是保持奇偶分次和括号的 $k$-线性映射。
:::

在超向量空间的[[对称幺半范畴]]中，交换两个齐次因子时产生
$(-1)^{|x||y|}$，称为 Koszul 符号。
按这一交换规则解释普通 Lie 代数的公理，便得到上述定义
[@Varadarajan2004, 第 3.1 节]。

超反对称性说明，只要 $x$、$y$ 中至少一个为偶元素，括号就反对称；
当两者均为奇元素时，则有 $[x, y] = [y, x]$。
特别地，奇元素 $x$ 不必满足 $[x, x] = 0$。
这与[[超交换代数]]中奇元素的乘法平方为零是不同的要求。

结合超反对称性，超 Jacobi 恒等式也可写为
\[
[x, [y, z]] = [[x, y], z] + (-1)^{|x||y|} [y, [x, z]] .
\]
它表明，固定齐次元素 $x$ 后，$\operatorname{ad} x = [x, -]$
是次数为 $|x|$ 的分次导子。

::: remark [低特征]
上述公理在特征不为 $2$、$3$ 的域上仍可使用。
在特征 $3$ 时，超 Jacobi 恒等式不再自动推出
$[x, [x, x]] = 0$（$x$ 为奇元素）；特征 $2$ 时，带符号的反对称性也须另作处理。
本文的特征 $0$ 假设避开这些额外约定。
:::

## 例子

::: example [纯偶与 Abel 超 Lie 代数]
设 $k$ 是特征为 $0$ 的域。
任意普通 $k$-Lie 代数 $\mathfrak{h}$，取
$\mathfrak{g}_{\bar{0}} = \mathfrak{h}$、$\mathfrak{g}_{\bar{1}} = 0$，
就是超 Lie 代数。
任意超向量空间配备恒为零的括号，则是 **Abel 超 Lie 代数**。
特别地，纯奇的超 Lie 代数必为 Abel 的，因为奇、奇括号必须取值于偶部。
:::

::: example [一般线性超 Lie 代数]
设 $k$ 是特征为 $0$ 的域，
$V = V_{\bar{0}} \oplus V_{\bar{1}}$ 是 $k$-超向量空间。
全部线性自同态构成超代数 $\operatorname{End}_k (V)$：
偶自同态保持奇偶部分，奇自同态交换两个部分。
赋予超交换子
\[
[X, Y] = XY - (-1)^{|X||Y|} YX,
\]
便得到**一般线性超 Lie 代数** $\mathfrak{gl}(V)$。

若 $\dim V = m|n$，选取齐次基后，偶、奇矩阵分别具有形式
\[
\begin{pmatrix}
  A & 0 \\
  0 & D
\end{pmatrix},
\qquad
\begin{pmatrix}
  0 & B \\
  C & 0
\end{pmatrix},
\]
其中 $A$、$D$ 分别是 $m \times m$、$n \times n$ 矩阵，
$B$、$C$ 分别是 $m \times n$、$n \times m$ 矩阵，元素均属于 $k$。
此时记作 $\mathfrak{gl}(m|n; k)$，其超维数为
$(m^2 + n^2)|2mn$。

例如在 $\mathfrak{gl}(1|1; k)$ 中，奇矩阵
$X = \left(\begin{smallmatrix} 0 & 1 \\ 1 & 0 \end{smallmatrix}\right)$
满足 $[X, X] = 2I$，直接显示了非零的奇、奇括号。
:::

::: example [超导子与超向量场]
设 $k$ 是特征为 $0$ 的域，$A$ 是 $k$ 上的结合超代数。
次数为 $r \in \mathbb{Z}_2$ 的**超导子**是次数为 $r$ 的线性映射
$D \colon A \to A$，满足
\[
D (ab) = D (a) b + (-1)^{r|a|} a D (b)
\]
（$a$、$b$ 齐次）。
偶、奇超导子的直和 $\operatorname{Der}_k (A)$
在超交换子下封闭，是 $\mathfrak{gl}(A)$ 的超 Lie 子代数。
超流形的向量场正是其结构层上的超导子，
所以向量场括号也具有超 Lie 代数结构
[@Varadarajan2004, 第 3.5 节]。
:::

::: example [最简单的超平移代数]
取偶生成元 $P$ 和奇生成元 $Q$，规定
\[
[P, P] = [P, Q] = 0, \qquad [Q, Q] = 2P .
\]
这些关系定义超维数为 $1|1$ 的实超 Lie 代数。
在 $\mathbb{R}^{1|1}$ 的超函数代数
$C^\infty (\mathbb{R}) \otimes \Lambda^\bullet (\mathbb{R})$ 上，
令 $t$ 为偶坐标、$\theta$ 为奇坐标，则
\[
P = \partial_t, \qquad Q = \partial_\theta + \theta \partial_t
\]
给出这一代数的实现；这里 $\partial_\theta$ 是 Graßmann 左导数，
且 $Q^2 = \partial_t$。

更一般地，设 $k$ 是特征为 $0$ 的域，取偶向量空间 $V$、奇向量空间 $S$，
以及对称双线性映射 $\beta \colon \operatorname{Sym}^2 S \to V$，
令 $V$ 为中心、$[s, s'] = \beta (s, s')$，便得到至多二步幂零的超 Lie 代数。
超对称中的[[Poincaré 超代数|超平移代数]]是这种构造的典型情形
[@Freed2006, 第 6 讲]。
:::

## 性质

### 偶部、奇部与括号

超 Lie 代数的偶部 $\mathfrak{g}_{\bar{0}}$ 是普通 Lie 代数，
奇部 $\mathfrak{g}_{\bar{1}}$ 通过 $a \cdot u = [a, u]$ 成为其[[Lie 代数表示|表示]]。
奇部的括号给出对称的 $\mathfrak{g}_{\bar{0}}$-等变映射
\[
\beta \colon \operatorname{Sym}^2 \mathfrak{g}_{\bar{1}}
\longrightarrow \mathfrak{g}_{\bar{0}} .
\]
因此奇部一般不是超 Lie 子代数：两个奇元素的括号可以离开奇部。

反过来，给定普通 Lie 代数 $\mathfrak{h}$、其表示 $W$，
以及对称的等变映射 $\beta \colon \operatorname{Sym}^2 W \to \mathfrak{h}$，
把 $\mathfrak{h}$ 置于偶部、$W$ 置于奇部，
用原有括号、表示作用和 $\beta$ 定义括号。
它成为超 Lie 代数的充分必要条件是
\[
\beta (u, v) \cdot w + \beta (v, w) \cdot u + \beta (w, u) \cdot v = 0
\qquad (u, v, w \in W) .
\]
这正是三个奇元素的超 Jacobi 恒等式。
在特征 $0$ 下，极化表明它也等价于
$\beta (u, u) \cdot u = 0$ 对所有 $u \in W$ 成立
[@Varadarajan2004, 第 3.1 节]。

### 表示与奇元素的平方

超 Lie 代数 $\mathfrak{g}$ 在超向量空间 $V$ 上的**表示**是
超 Lie 代数同态 $\rho \colon \mathfrak{g} \to \mathfrak{gl}(V)$。
因而齐次元素的作用满足
\[
\rho ([x, y]) = \rho (x) \rho (y)
-(-1)^{|x||y|} \rho (y) \rho (x) .
\]
特别地，对奇元素 $x$ 有
\[
\rho (x)^2 = \frac{1}{2} \rho ([x, x]) .
\]
所以奇对称性的平方能够给出非零的偶对称性；
若 $[x, x] = 0$，则它在每个表示中的作用都是平方为零的奇算子。

取 $V = \mathfrak{g}$、$\rho (x) = \operatorname{ad} x$，
超 Jacobi 恒等式说明这给出**伴随表示**。
对于奇元素 $x$，有
\[
(\operatorname{ad} x)^2
= \frac{1}{2} \operatorname{ad} [x, x],
\qquad [x, [x, x]] = 0 .
\]
后一恒等式由三个输入均为 $x$ 的超 Jacobi 恒等式得到。

### 子代数、理想与商

对括号封闭的分次子空间是**超 Lie 子代数**。
若分次子空间 $\mathfrak{i} \subset \mathfrak{g}$ 还满足
$[\mathfrak{g}, \mathfrak{i}] \subset \mathfrak{i}$，则称其为**分次[[理想]]**。
此时商空间 $\mathfrak{g}/\mathfrak{i}$ 继承奇偶分次和括号，
仍是超 Lie 代数。
超 Lie 代数同态的核是分次理想，像是超 Lie 子代数。

[[中心]]
\[
Z (\mathfrak{g})
= \{ z \in \mathfrak{g} \mid [z, x] = 0 \text{ 对所有 } x \in \mathfrak{g} \}
\]
是分次理想，也是伴随表示的核。
上述超平移例子中，偶平移 $P$ 就属于中心；
加入其他对称性后，它是否仍为中心须检查新增的括号。

## 参考文献

```bibliography
Varadarajan2004:
  type: book
  author: V. S. Varadarajan
  title: 'Supersymmetry for Mathematicians: An Introduction'
  year: 2004
  series: Courant Lecture Notes in Mathematics
  volume: 11
  publisher: American Mathematical Society
  doi: 10.1090/cln/011
  url: https://www.math.ucla.edu/~vsv/papers/ch3.pdf

Freed2006:
  type: incollection
  author: Daniel S. Freed
  title: Classical Field Theory and Supersymmetry
  booktitle: Quantum Field Theory, Supersymmetry, and Enumerative Geometry
  series: IAS/Park City Mathematics Series
  volume: 11
  year: 2006
  publisher: American Mathematical Society
  url: https://people.math.harvard.edu/~dafr/pcmi.pdf
```

```terms
超 Lie 代数:
  en: [Lie superalgebra, super Lie algebra]
超 Lie 括号:
  en: Lie superbracket
超 Jacobi 恒等式:
  en: super Jacobi identity
一般线性超 Lie 代数:
  en: general linear Lie superalgebra
超导子:
  en: superderivation
```
