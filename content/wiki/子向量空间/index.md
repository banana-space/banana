---
title: 子向量空间
aliases: [线性子空间]
categories: [线性代数]
navboxes: [线性代数]
---

在[[线性代数]]中，
[[向量空间]]的**子向量空间**（或**线性子空间**，简称**子空间**）
是指该向量空间的[[子集]]，
它在原有的加法和数乘下自身也构成向量空间。

例如，平面 $\mathbb{R}^2$ 的子向量空间有以下几种：

- $0$ [[维数 (线性代数)|维]]子空间只有一个，即[[原点]]。

- $1$ 维的子空间是所有经过[[原点]]的[[直线]]。

- $2$ 维的子空间只有一个，即平面自身。

给定维数的所有子空间构成的集合称为 [[Graßmann 形]]，
带有有趣的几何结构。
特别地，所有 $1$ 维子空间构成的集合称为该向量空间的[[射影空间]]。

## 定义

::: definition [子向量空间]
设 $k$ 是[[域]]，$V$ 是 $k$-[[向量空间]]。
称[[子集]] $W \subset V$ 为**子向量空间**，如果满足以下条件：

- $W$ 包含[[原点]]：$0 \in W$。

- $W$ 对加法封闭：若 $x, y \in W$，则 $x + y \in W$。

- $W$ 对数乘封闭：若 $c \in k$ 且 $x \in W$，则 $c x \in W$。

此时，$W$ 也自然带有向量空间的结构。
:::

## 例子

::: example [平凡子空间]
设 $V$ 是[[向量空间]]。
则 $\{ 0 \}$ 和 $V$ 自身都是 $V$ 的子向量空间。
:::

::: example [线性生成空间]
设 $V$ 是向量空间，$x_1, \dotsc, x_n \in V$。
则这组向量的[[线性生成空间]]是 $V$ 的子空间，
也称为这组向量张成的子空间。
:::

::: example [齐次线性方程组的解]
设 $k$ 是域，$A$ 是 $k$ 上的 $m \times n$ [[矩阵]]。
则齐次[[线性方程组]] $A x = 0$ 的解集
\[
\{ x \in k^n \mid A x = 0 \}
\]
是 $k^n$ 的子向量空间。
而当 $b \neq 0$ 时，$A x = b$ 的解集不含 $0$，因而不是子向量空间；
它若非空，则是[[仿射子空间]]。
:::

::: example [紧支连续函数]
记 $C (\mathbb{R})$ 为所有[[连续函数]] $f \colon \mathbb{R} \to \mathbb{R}$ 的空间，
$C_\mathrm{c} (\mathbb{R})$ 为所有[[紧支函数|紧支]]连续函数
$f \colon \mathbb{R} \to \mathbb{R}$ 的空间。
则 $C_\mathrm{c} (\mathbb{R}) \subset C (\mathbb{R})$ 是子向量空间。
两者都是无限维 $\mathbb{R}$-向量空间。
:::

## 性质

### 基本性质

- 设 $W$ 是 $V$ 的子向量空间。则[[含入映射]] $W \hookrightarrow V$
  是[[线性映射]]，且是[[单射]]。

- [[线性映射]]的[[核 (代数)|核]]、[[像]]都是子向量空间。

### 交与和

::: proposition [交与和]
设 $V$ 是向量空间，$(W_i)_{i \in I}$ 是 $V$ 的一族子向量空间，$I$ 非空。

- 交 $\bigcap_{i \in I} W_i$ 是 $V$ 的子向量空间。

- 所有有限和 $w_1 + \cdots + w_n$
  （其中每个 $w_j$ 属于某个 $W_i$）构成的集合，
  记为 $\sum_{i \in I} W_i$，
  是包含所有 $W_i$ 的最小的子向量空间，称为这族子空间的**和空间**。
:::

两个子空间的并一般不是子空间。
例如，在 $\mathbb{R}^2$ 中，两条坐标轴的并不对加法封闭：
$(1, 0) + (0, 1) = (1, 1)$ 不在其中。

### 维数

::: proposition [子空间的维数]
设 $V$ 是向量空间，$W \subset V$ 是子向量空间。
则 $\dim W \leq \dim V$。
若 $V$ 是有限维的，则 $\dim W = \dim V$ 当且仅当 $W = V$。
:::

::: proof
$W$ 的基是 $V$ 中线性无关的子集，
与[[基存在定理]]的证明相同，由 [[Zorn 引理]]，它可以扩充为 $V$ 的基，
故 $\dim W \leq \dim V$。
若 $V$ 是有限维的，且 $\dim W = \dim V$，
则扩充时没有添加新的向量，故 $W$ 的基也是 $V$ 的基，从而 $W = V$。
:::

对无限维的 $V$，第二个结论不成立。
例如，在多项式空间 $k[x]$ 中，
子空间 $x k[x]$ 与 $k[x]$ 都是可数无限维的，但二者不相等。

::: proposition [维数公式]
设 $V$ 是向量空间，$W_1, W_2 \subset V$ 是有限维子向量空间。则
\[
\dim (W_1 + W_2) + \dim (W_1 \cap W_2) = \dim W_1 + \dim W_2 .
\]
:::

::: proof
取 $W_1 \cap W_2$ 的基 $u_1, \dotsc, u_r$，
将它分别扩充为 $W_1$ 的基 $u_1, \dotsc, u_r, v_1, \dotsc, v_s$
和 $W_2$ 的基 $u_1, \dotsc, u_r, w_1, \dotsc, w_t$。
只需证明 $u_1, \dotsc, u_r, v_1, \dotsc, v_s, w_1, \dotsc, w_t$
是 $W_1 + W_2$ 的基，因为 $r + s + t = (r + s) + (r + t) - r$。

这组向量显然张成 $W_1 + W_2$。
设 $\sum_i a_i u_i + \sum_j b_j v_j + \sum_l c_l w_l = 0$。
则 $\sum_l c_l w_l = - \sum_i a_i u_i - \sum_j b_j v_j$
属于 $W_1 \cap W_2$，
故可以写成 $\sum_i d_i u_i$。
由 $u_1, \dotsc, u_r, w_1, \dotsc, w_t$ 线性无关，所有 $c_l = 0$。
再由 $u_1, \dotsc, u_r, v_1, \dotsc, v_s$ 线性无关，所有 $a_i = b_j = 0$。
:::

### 补空间

与一般的[[模]]不同，向量空间的每个子空间都有补空间：

::: proposition [补空间]
设 $k$ 是域，$V$ 是 $k$-向量空间，$W \subset V$ 是[[子向量空间]]。
则存在（不唯一的）子向量空间 $W' \subset V$，
称为 $W$ 在 $V$ 中的**补空间**，
使得 $V = W \oplus W'$，
即 $V$ 的每个元素都唯一地写成 $w + w'$，其中 $w \in W$，$w' \in W'$。

此时，[[商向量空间|投影]] $V \to V / W$ 限制为同构 $W' \simeq V / W$。
:::

::: proof
取 $W$ 的基 $B$。
与[[基存在定理]]的证明相同，由 [[Zorn 引理]]，
在 $V$ 的包含 $B$ 的线性无关子集中取极大元，
得到 $V$ 的基 $B \cup B'$，其中 $B \cap B' = \varnothing$。
令 $W'$ 为 $B'$ 的[[线性生成空间]]，
则由基的定义，$V$ 的每个元素都唯一地写成 $w + w'$ 的形式。
投影 $V \to V / W$ 在 $W'$ 上的限制的核是 $W \cap W' = 0$，
且它是满射，因为 $w + w'$ 与 $w'$ 在 $V / W$ 中的像相同。
:::

用范畴论的语言说，向量空间的每个[[短正合列]]都[[分裂正合列|分裂]]。

```terms
子向量空间:
  en: vector subspace
  fr: sous-espace vectoriel :m
  de: Untervektorraum :m
线性子空间:
  en: linear subspace
  fr: sous-espace linéaire :m
  de: linearer Unterraum :m
补空间:
  en: [complement, complementary subspace]
  fr: supplémentaire :m
  de: Komplementärraum :m
```
