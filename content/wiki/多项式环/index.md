---
title: 多项式环
aliases: [一元多项式环, 多元多项式环, 多项式代数]
categories: [交换代数]
navboxes: [交换代数]
---

在[[代数学]]中，**多项式环**是由系数取自某个[[环]]的全体[[多项式]]构成的环，
通常记为 $A[x_1, \dotsc, x_n]$，
其中 $A$ 是系数环，$x_1, \dotsc, x_n$ 为一组变元，
这称为 $A$ 上的 **$n$ 元多项式环**。

[[交换环]] $A$ 上的多项式环 $A[x_1, \dotsc, x_n]$
是 $A$ 上由 $x_1, \dotsc, x_n$ 生成的[[自由函子|自由]][[交换代数（代数结构）|交换代数]]，
即这些变元除了交换环的公理外不满足任何额外的关系。
这也给出多项式环的[[万有构造|万有性质]]。

在[[代数几何]]中，[[域]] $k$ 上的多项式环 $k[x_1, \dotsc, x_n]$
是 $n$ 维[[仿射空间（代数几何）|仿射空间]]上的函数环，
其中的[[理想]]对应于由多项式方程定义的[[仿射簇]]。
这是[[代数–几何对偶]]最基本的例子。

## 定义

### 一元多项式环

::: definition [一元多项式环]
设 $A$ 是[[环]]。
$A$ 上的**一元多项式环** $A[x]$
是 $A$ 上关于变元 $x$ 的全体[[多项式]]
\[
f = a_0 + a_1 x + \cdots + a_n x^n
\quad (a_i \in A)
\]
构成的集合，其上的加法和乘法定义为
\[
\begin{aligned}
  \sum_{i \geq 0} a_i x^i + \sum_{i \geq 0} b_i x^i
  &= \sum_{i \geq 0} (a_i + b_i) \, x^i , \\
  \biggl( \sum_{i \geq 0} a_i x^i \biggr)
  \biggl( \sum_{j \geq 0} b_j x^j \biggr)
  &= \sum_{k \geq 0} \biggl( \sum_{i + j = k} a_i b_j \biggr) x^k ,
\end{aligned}
\]
其中各和式都只有有限项非零。
:::

### 多元多项式环

对 $\alpha = (\alpha_1, \dotsc, \alpha_n) \in \mathbb{N}^n$，
记 $x^\alpha = x_1^{\alpha_1} \dotsm x_n^{\alpha_n}$。

::: definition [多元多项式环]
设 $A$ 是环，$n \geq 0$ 是整数。
$A$ 上的 **$n$ 元多项式环** $A[x_1, \dotsc, x_n]$
是 $A$ 上关于变元 $x_1, \dotsc, x_n$ 的全体多项式
\[
f = \sum_{\alpha \in \mathbb{N}^n} a_\alpha x^\alpha
\]
构成的集合，其中 $a_\alpha \in A$，且只有有限个 $a_\alpha$ 非零。
其上的加法和乘法定义为
\[
\begin{aligned}
  \sum_\alpha a_\alpha x^\alpha + \sum_\alpha b_\alpha x^\alpha
  &= \sum_\alpha (a_\alpha + b_\alpha) \, x^\alpha , \\
  \biggl( \sum_\beta a_\beta x^\beta \biggr)
  \biggl( \sum_\gamma b_\gamma x^\gamma \biggr)
  &= \sum_\alpha \biggl( \sum_{\beta + \gamma = \alpha}
  a_\beta b_\gamma \biggr) x^\alpha .
\end{aligned}
\]
:::

当 $A$ 是交换环时，$A[x_1, \dotsc, x_n]$ 也是交换环。

::: remark [逐个添加变元] {@rem:iterated}
把多项式按 $x_n$ 的幂次整理，就得到环同构
\[
A[x_1, \dotsc, x_n] \simeq A[x_1, \dotsc, x_{n-1}] [x_n] .
\]
:::

更一般地，对任意集合 $I$，
可以定义以 $(x_i)_{i \in I}$ 为变元的多项式环
\[
A[x_i \mid i \in I].
\]
其元素形如 $\sum_\alpha a_\alpha x^\alpha$，
其中 $\alpha = (\alpha_i)_{i \in I}$ 取遍只有有限个分量非零的非负整数族，
$x^\alpha = \prod_{i \in I} x_i^{\alpha_i}$，且只有有限个 $a_\alpha$ 非零。
换言之，每个元素只涉及有限个变元。

## 例子

::: example [零个变元与零环]
设 $A$ 是环。$A$ 上的 $0$ 元多项式环就是 $A$ 本身。
若 $A$ 是[[零环]]，则 $A[x]$ 也是零环。
:::

::: example [实系数多项式与复数]
考虑[[环同态]] $\mathbb{R}[x] \to \mathbb{C}$，
$f \mapsto f (\mathrm{i})$。
它是[[满射]]，其核为理想 $(x^2 + 1)$。
因此有环同构
\[
\mathbb{R}[x] / (x^2 + 1) \simeq \mathbb{C} .
\]
:::

::: example [整系数多项式环]
多项式环 $\mathbb{Z}[x]$ 不是[[主理想整环]]，
因为不难验证理想 $(2, x)$ 不是[[主理想]]。
:::

::: example [二元多项式环]
设 $k$ 是域。则多项式环 $k[x, y]$ 不是[[主理想整环]]，
因为理想 $(x, y)$ 不是主理想。

在几何上，理想 $(x, y)$ 对应于平面上的原点，
该点无法写成单个多项式的（[[概形]]意义下的）零点集，
只能写成两个多项式 $x$、$y$ 的公共零点集。
:::

::: example [系数环非整环]
当系数环不是[[整环]]时，多项式环可能会有奇怪的表现。例如，
在 $(\mathbb{Z}/4)[x]$ 中，
$(1 + 2x)^2 = 1 + 4x + 4x^2 = 1$，
因此 $1 + 2x$ 是可逆元。
另外 $(2x) \cdot (2x) = 0$，
因此两个一次多项式的积的次数可以小于 $2$。
:::

## 性质

### 万有性质

::: proposition [[[万有性质]]] {@thm:universal}
设 $A$、$B$ 是交换环，$\varphi \colon A \to B$ 是[[环同态]]，
$b_1, \dotsc, b_n \in B$。
则存在唯一的环同态
$\psi \colon A[x_1, \dotsc, x_n] \to B$，
使得 $\psi$ 在 $A$ 上的限制为 $\varphi$，
且 $\psi (x_i) = b_i$ $(i = 1, \dotsc, n)$。
它由下式给出：
\[
\psi \biggl( \sum_\alpha a_\alpha x^\alpha \biggr)
= \sum_\alpha \varphi (a_\alpha) \, b^\alpha ,
\]
其中 $b^\alpha = b_1^{\alpha_1} \dotsm b_n^{\alpha_n}$。
:::

::: proof
由于环同态保持加法和乘法，满足条件的 $\psi$ 必须把
$\sum_\alpha a_\alpha x^\alpha$ 映到 $\sum_\alpha \varphi (a_\alpha) \, b^\alpha$，
故 $\psi$ 唯一。

反之，上式定义的映射 $\psi$ 保持加法，且 $\psi (1) = 1$。
设 $f = \sum_\beta a_\beta x^\beta$，$g = \sum_\gamma c_\gamma x^\gamma$。
由于 $B$ 是交换环，有 $b^\beta b^\gamma = b^{\beta + \gamma}$，因此
\[
\psi (f) \, \psi (g)
= \sum_{\beta, \gamma} \varphi (a_\beta c_\gamma) \, b^{\beta + \gamma}
= \psi (f g) .
\]
所以 $\psi$ 是环同态。
:::

::: remark
上述命题表明，$A[x_1, \dotsc, x_n]$ 是 $A$ 上由
$n$ 个元素生成的**自由[[交换代数（代数结构）|交换代数]]**：
对任意交换 $A$-代数 $B$，有双射
\[
\operatorname{Hom}_A (A[x_1, \dotsc, x_n], B)
\overset{\sim}{\longrightarrow} B^n ,
\quad
\psi \longmapsto (\psi (x_1), \dotsc, \psi (x_n)) .
\]
特别地，由 $n$ 个元素生成的交换 $A$-代数
都同构于 $A[x_1, \dotsc, x_n]$ 的[[商环]]。
:::

### 可逆元

::: proposition {@thm:domain}
设 $A$ 是[[整环]]。则 $A[x_1, \dotsc, x_n]$ 是整环，
其中的可逆元均为常数，即均为 $A$ 的单位。
:::

::: proof
由 @rem:iterated，只需证明 $n = 1$ 的情形。
若 $f, g \in A[x]$ 非零，则其首项系数之积非零，从而 $f g \neq 0$。
若 $f g = 1$，则 $\deg f + \deg g = 0$，
故 $f$、$g$ 都是常数，即 $f$ 是 $A$ 的单位。
:::

当 $A$ 不是整环时，$A[x]$ 可以有非常数的可逆元。
它们由以下命题刻画：

::: proposition [可逆元] {@thm:units}
设 $A$ 是交换环，$f = a_0 + a_1 x + \cdots + a_n x^n \in A[x]$。
则 $f$ 是 $A[x]$ 的单位，当且仅当 $a_0$ 是 $A$ 的单位，
且 $a_1, \dotsc, a_n$ 都是[[幂零元]]。
:::

::: proof
设 $a_0$ 是单位，且 $a_1, \dotsc, a_n$ 幂零。
则 $h = a_0^{-1} (a_1 x + \cdots + a_n x^n)$ 幂零，设 $h^m = 0$。
于是 $f = a_0 (1 + h)$ 是单位，其逆为
$a_0^{-1} (1 - h + h^2 - \cdots + (-h)^{m-1})$。

反之，设 $f g = 1$。比较常数项可知 $a_0$ 是单位。
对 $A$ 的任意[[素理想]] $\mathfrak{p}$，
$f$ 在 $(A / \mathfrak{p}) [x]$ 中的像也是单位。
由于 $A / \mathfrak{p}$ 是整环，由 @thm:domain，
这个像是常数，即 $a_1, \dotsc, a_n \in \mathfrak{p}$。
由于 $A$ 的[[幂零根]]是所有素理想之交，
$a_1, \dotsc, a_n$ 都是幂零元。
:::

### 环论性质

由[[多项式]]的带余除法，域上的一元多项式环是 [[Euclid 整环]]，从而是[[主理想整环]]。
这一性质只对域成立：

::: proposition {@thm:pid}
设 $A$ 是交换环。则 $A[x]$ 是主理想整环，当且仅当 $A$ 是域。
:::

::: proof
若 $A$ 是域，由 @thm:domain，$A[x]$ 是整环；
由带余除法，次数函数 $\deg$ 使 $A[x]$ 成为 Euclid 整环，
从而是主理想整环。

反之，设 $A[x]$ 是主理想整环。则其子环 $A$ 是整环。
由 @thm:universal 与因式定理（见[[多项式]]），
环同态 $f \mapsto f (0)$ 诱导同构 $A[x] / (x) \simeq A$，
故 $(x)$ 是非零素理想。
在主理想整环中，非零素理想都是[[极大理想]]，
因此 $A \simeq A[x] / (x)$ 是域。
:::

多项式环还保持系数环的许多性质：

::: proposition {@thm:inherit}
设 $A$ 是交换环。

- 若 $A$ 是[[唯一分解整环]]，则 $A[x]$ 也是唯一分解整环。

- 若 $A$ 是 [[Noether 环]]，则 $A[x]$ 也是 Noether 环。

- 若 $A$ 是 Noether 环，则 $A[x]$ 的 [[Krull 维数]]为
  $\dim A[x] = \dim A + 1$。

由 @rem:iterated，对 $A[x_1, \dotsc, x_n]$ 也有同样的结论。
特别地，对域 $k$，$k[x_1, \dotsc, x_n]$ 是 Noether 唯一分解整环，
其 Krull 维数为 $n$。
:::

::: proof
第一条的证明要点是 [[Gauß 引理]]：
在唯一分解整环上，两个[[本原多项式]]之积仍是本原多项式。
由此可以把 $A[x]$ 中的分解归结为 $A$ 中的分解与 $K[x]$ 中的分解，
其中 $K$ 是 $A$ 的[[分式域]]。
第二条即 [[Hilbert 基定理]]。
第三条的证明见 [@AtiyahMacdonald1969, 第十一章习题 7]。
:::

### 分次结构

记 $A[x_1, \dotsc, x_n]_d$ 为 $d$ 次[[齐次多项式]]（见[[多项式]]）构成的子群，则
\[
A[x_1, \dotsc, x_n] = \bigoplus_{d \geq 0} A[x_1, \dotsc, x_n]_d ,
\]
且 $d$ 次与 $e$ 次齐次多项式之积是 $d + e$ 次齐次多项式。
因此 $A[x_1, \dotsc, x_n]$ 是[[分次环]]。

## 推广

- **[[Laurent 多项式]]环** $A[x, x^{-1}]$ 允许变元的负数次幂，
  它是 $A[x]$ 对 $x$ 的[[局部化]]。

- **[[形式幂级数]]环** $A[[x_1, \dotsc, x_n]]$ 允许无穷多项，
  它包含 $A[x_1, \dotsc, x_n]$ 作为子环。

- **[[自由代数]]** $A \langle x_1, \dotsc, x_n \rangle$ 中的变元互不交换，
  它是 $n$ 个元素生成的自由[[结合代数]]。

- 多项式环 $A[x_1, \dotsc, x_n]$ 是[[幺半群代数]] $A[\mathbb{N}^n]$，
  而 Laurent 多项式环 $A[x_1^{\pm 1}, \dotsc, x_n^{\pm 1}]$
  是[[群代数]] $A[\mathbb{Z}^n]$。

## 参考文献

```bibliography
AtiyahMacdonald1969:
  type: book
  author: [Michael F. Atiyah, Ian G. Macdonald]
  title: Introduction to Commutative Algebra
  year: 1969
  publisher: Addison-Wesley
```

```terms
多项式环:
  en: polynomial ring
  fr: anneau de polynômes :m
  de: Polynomring :m
一元多项式环:
  en: [polynomial ring in one variable, univariate polynomial ring]
  fr: anneau de polynômes à une indéterminée :m
  de: Polynomring in einer Variablen :m
'$n$ 元多项式环':
  en: 'polynomial ring in $n$ variables'
  fr: 'anneau de polynômes à $n$ indéterminées :m'
  de: 'Polynomring in $n$ Variablen :m'
多元多项式环:
  en: [polynomial ring in several variables, multivariate polynomial ring]
  fr: anneau de polynômes à plusieurs indéterminées :m
  de: Polynomring in mehreren Variablen :m
```
