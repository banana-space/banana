---
title: Banach 空间
categories: [泛函分析]
notices:
  - name: 问题
    items:
      - '“有限维线性空间”一节定理的证明中，取最小值所用的集合似乎应为 $l^1$ 范数的单位球面 $\{x : \|x\|_1 = 1\}$ 而不是单位球，否则最小值为 $0$。'
navboxes: [泛函分析]
---

**Banach 空间**是带有[[完备]][[范数]]的[[向量空间]]。
换言之，Banach 空间是一个向量空间，其中的向量都具有长度，
并且 [[Cauchy 列]]都收敛。

有限维向量空间上的范数总是完备的。
因此，带有范数的有限维向量空间都是 Banach 空间。
但这种情形太简单，人们更感兴趣的是无限维的 Banach 空间。

一类典型的 Banach 空间是 [[$L^p$ 空间]]。
大致地说，$L^p$ 空间是某个[[测度空间]]（例如 $\mathbb{R}^n$ 中的[[可测集]]）$X$ 上所有函数的空间，
其范数定义为
\[
\| f \|_p = \left( \int_X |f (x)|^p \, dx \right)^{1/p} ,
\]
其中 $p \in [1, \infty)$。

## 定义

::: definition [范数] {@def-norm}
设 $\mathbb{k}$ 是一个[[赋范域]]（例如 $\mathbb{R}$ 或 $\mathbb{C}$），
设 $X$ 是 $\mathbb{k}$-[[向量空间]]。
则 $X$ 上的一个**范数**是指一个映射
\[
\| \cdot \| \colon X \to \mathbb{R}_{\geq 0},
\]
满足以下性质：

- （数乘）
  对任意 $c \in \mathbb{k}$ 和 $x \in X$，有
  \[
  \| c x \| = |c| \, \| x \|.
  \]

- （[[三角不等式]]）
  对任意 $x, y \in X$，有
  \[
  \| x + y \| \leq \| x \| + \| y \|.
  \]

- （正性）
  如果 $x \in X$ 满足 $\| x \| = 0$，那么 $x = 0$。

:::

::: definition [范数诱导的拓扑] {@def-induced-topology}
设 $\mathbb{k}$ 是一个[[赋范域]]（例如 $\mathbb{R}$ 或 $\mathbb{C}$），
设 $X$ 是 $\mathbb{k}$-[[向量空间]]，
设 $\| \cdot \|$ 是 $X$ 上的一个范数（@def-norm）。
则范数 $\| \cdot \|$ 诱导的 $X$ 上的拓扑是由[[距离]]函数
\[
d (x, y) = \| x - y \| \quad (x, y \in X)
\]
[[度量空间|诱导的拓扑]]。
:::

::: definition [完备性] {@def-completeness}
设 $\mathbb{k}$ 是一个[[赋范域]]（例如 $\mathbb{R}$ 或 $\mathbb{C}$），
设 $X$ 是 $\mathbb{k}$-[[向量空间]]，
设 $\| \cdot \|$ 是 $X$ 上的一个范数（@def-norm）。
$X$ 称为关于范数 $\| \cdot \|$ **完备**，如果

- 对任意 [[Cauchy 序列]] $x_1, x_2, \dotsc \in X$，
  存在 $x \in X$，使得序列 $\{ x_n \}$ [[收敛]]到 $x$。

:::

::: definition [Banach 空间] {@def-banach-space}
设 $\mathbb{k}$ 是一个[[赋范域]]（例如 $\mathbb{R}$ 或 $\mathbb{C}$）。
一个 $\mathbb{k}$ 上的 **Banach 空间**是一个二元组 $(X, \| \cdot \|)$，其中

- $X$ 是一个 $\mathbb{k}$-[[向量空间]]；

- $\| \cdot \|$ 是 $X$ 上的范数（@def-norm），

使得

- $X$ 关于范数 $\| \cdot \|$ 完备（@def-completeness）。

在无歧义时，我们也直接称 $X$ 为一个 **Banach 空间**。
:::

::: definition [连续算子] {@def-continuous-operator}
设 $X, Y$ 是两个 Banach 空间（@def-banach-space）。
它们之间的一个**连续算子**，或称 **[[有界算子]]**，
是指一个[[线性映射]] $f \colon X \to Y$，
使得它关于 $X, Y$ 各自的范数诱导的拓扑（@def-induced-topology）
是连续映射。
:::

::: remark [连续算子等价于有界算子]
Banach 空间之间的线性映射 $f \colon X \to Y$ 是连续算子，
当且仅当存在常数 $C > 0$，使得对任意 $x \in X$，有
\[
\| f (x) \|_Y \leq C \, \| x \|_X \, .
\]
:::

::: definition [Banach 空间范畴]
设 $\mathbb{k}$ 是一个[[赋范域]]。
则 $\mathbb{k}$ 上所有 Banach 空间（@def-banach-space）
和它们之间的连续算子（@def-continuous-operator）
构成一个[[范畴]]，
称为 **Banach 空间范畴**，
记为 $\mathsf{Ban}_{\mathbb{k}}$，
无歧义时也可以记为 $\mathsf{Ban}$。
:::

::: remark
Banach 空间范畴是[[拓扑向量空间]]范畴的[[满子范畴]]。
:::

::: remark [Banach 空间的同构]
两个 Banach 空间在 Banach 空间范畴中同构，
并不意味着它们具有相同的范数。
事实上，Banach 空间同构当且仅当它们作为[[拓扑向量空间]]是同构的。

具体地说，Banach 空间之间的线性映射 $f \colon X \to Y$ 是同构，
当且仅当存在常数 $C_1, C_2 > 0$，使得对任意 $x \in X$，有
\[
\| f (x) \|_Y \leq C_1 \, \| x \|_X \, , \quad
\| x \|_X \leq C_2 \, \| f (x) \|_Y \, .
\]
此时，也说 $X, Y$ 具有[[等价范数]]。
:::

## 例子

- [[$L^p$ 空间]]
- [[ℓp 空间|$\ell^p$ 空间]]
- [[Sobolev 空间]]

### 有限维线性空间

::: theorem
$X$ 是有限维赋范向量空间，则 $X$ 上任意两个范数等价，$X$ 在任意范数下都是完备的。
:::

::: proof
取定 $X$ 的基向量 $e_1,\cdots, e_n$，定义 $l^1$ 范数 $\|\cdot \|_1$：
\[
\| \sum_{i=1}^{n} a_i e_i \|_1= \sum_{i=1}^n |a_i| .
\]
则 $X$ 在 $l^1$ 范数下完备。因为两个范数等价，则它们同时完备或不完备，并且等价有传递性，
所以只须证任意一个范数 $\|\cdot \|$ 与 $l^1$ 范数等价。

一方面，
\[
\| \sum_{i=1}^{n} a_i e_i \|\le \sum_{i=1}^{n} \| a_i e_i\| \le \max_{1\le i\le n} \|e_i\|\cdot \sum_{i=1}^{n} |a_i|
=  \max_{1\le i\le n} \|e_i\| \cdot\| \sum_{i=1}^{n} a_i e_i \|_1.
\]

另一方面，由上一段知 $X$ 上的恒等映射是 $(X,\|\cdot\|_1)$ 到 $(X, \|\cdot \|)$ 的有界线性算子。
$X$ 中 $l^1$ 范数的单位球 $B_{X, l^1}$ 是紧的（因为其与 $k^n$ 中 $l^1$ 单位球等距同构），
紧集在连续函数下像是紧集，于是 $B_{X, l^1}$ 在范数 $\|\cdot \|$ 下也是紧的，
范数本身是连续函数，所以 $\{\|x \|: x\in B_{X, l^1} \}$ 有最小值。
如果这个最小值是 $0$，则 $0\in B_{X, l^1}$，矛盾。
所以 $m= \min \{\|x \|: x\in B_{X, l^1} \}> 0$。
$m\|x\|_1= m\le \|x\|$ 对所有使得 $\|x \|_1= 1$ 的 $x\in X$ 成立。
由齐次性，$m\|x\|_1 \le \|x\| $ 对所有 $x\in X$ 成立。
:::

## 性质

### 商 Banach 空间

::: theorem
设 $X$ 是 Banach 空间，$A$ 是 $X$ 闭子空间。
则[[商向量空间]] $X/ A$ 配备范数
\[
\|x+ A\| = \inf_{a\in A} \|x+ a\|
\]
是 Banach 空间，称为**商 Banach 空间**。
:::

::: proof
只需证明上述范数是完备的。
回忆一个[[赋范向量空间]]是 Banach 空间，当且仅当其中任一绝对收敛级数收敛。
如果 $\sum_{n=1}^{+\infty} \|x_n+A \|$ 收敛，对每个 $n$，
取 $a_n\in A$ 使得 $\|x_n+a_n\|\le 2\|x_n+A\|$。
于是 $\sum_{n=1}^{+\infty} \|x_n+a_n\|$ 绝对收敛，$\sum_{n=1}^{+\infty} (x_n+a_n)$ 收敛。
设 $\sum_{n=1}^{+\infty} (x_n+a_n)= x$，
$\|x- \sum_{n=1}^N x_n+ A\|\le \|x- \sum_{n=1}^N (x_n+ a_n) \|\to 0$，
从而 $\sum_{n=1}^{+\infty} x_n+ A= x+ A$。$X/A$ 中任一绝对收敛级数收敛，从而是一个 Banach 空间。
:::

对于集合 $I$，用 $l^1(I)$ 表示 $I$ 上配备[[计数测度]]时的 $L^1$ 空间 $L^1(I, \mathcal{P}(I), \#)$。
我们有以下结论：

::: proposition
设 $X$ 是 Banach 空间。则存在集合 $I$，使得 $X$ 是 $l^1(I)$ 的商空间。
:::

::: proof
取 $I= \{x\in X: \|x\|< 1\}$ 为 $X$ 的开单位球。定义
\[
Q: l^1(I)\to X, \quad (a_i)_{i \in I} \mapsto \sum_{i\in I} a_i x_i.
\]
因为 $(a_i)_{i \in I} \in l^1(I)$，所以使得 $a_i\ne 0$ 的 $i\in I$ 至多可数，于是
$\sum_{i\in I} a_i x_i$ 是一个至多可数和，
并且
$\| \sum_{i\in I} a_i x_i \|\le \sum_{i\in I} |a_i| \| x_i \|\le \sum_{i\in I} |a_i|= \|(a_i)_{i \in I} \|_{l^1(I)}$，
即 $\sum_{i\in I} a_i x_i$ 绝对收敛。
Banach 空间里绝对收敛蕴含无条件收敛（任意重排下收敛且极限相同），
所以 $Q$ 良定且是一个有界算子，$\| Q\|\le 1$。
显然 $Q$ 限制在 $l^1(I)$ 开单位球时像恰为 $X$ 的开单位球：$(\subseteq)$ 是因为 $\|Q \|\le 1$，
$(\supseteq)$ 是因为如果 $x_j\in I$（回忆 $I$ 就是 $X$ 的开单位球），定义 $a_i= \delta_{ij}$，
则 $Q((a_i)_{i\in I})= x_j$。
于是 $l^1(I)/ \ker Q\to X$ 是一个等距同构。
:::

```terms
Banach 空间:
  en: Banach space
  de: 'Banachraum, banachscher Raum'
  fr: espace de Banach
范数:
  en: norm
  de: Norm :f
  fr: norme :f
  grc: γνώμων :m
  la: norma :f
赋范:
  en: normed
  de: normiert
  fr: normé
  grc: ἐγνωμονμένος
  la: normatus
算子:
  en: operator
  de: Operator :m
  fr: operateur :m
  grc: τελεστής :m
  la: operator :m
```
