---
title: 商向量空间
categories: [线性代数]
navboxes: [线性代数]
---

在[[线性代数]]中，
[[向量空间]]的**商向量空间**（简称**商空间**）
是指该向量空间的[[商集]]，
该商集上也有良好定义的向量空间结构。

要构造向量空间 $V$ 的商空间，
需先选取一个[[子向量空间]] $W \subset V$。
则商向量空间 $V / W$ 是由 $W$ 在 $V$ 中的所有平移构成的集合。
换言之，$V / W$ 就是从 $V$ 出发，将 $W$ 的每个平移都分别捏成一个点，而得到的集合。
特别地，$W$ 自身捏成的点就是 $V / W$ 的[[原点]]。

根据上述描述，我们能得到自然的映射 $V \to V / W$，称为**投影**。
它是[[线性映射]]。

此时，我们有向量空间的[[短正合列]]
\[
0 \to W \longrightarrow
V \longrightarrow
V / W \to 0.
\]

## 定义

::: definition [商向量空间]
设 $k$ 是[[域]]，$V$ 是 $k$-[[向量空间]]，
$W \subset V$ 是[[子向量空间]]。

则**商向量空间** $V / W$ 定义如下：

- 对每个 $x \in V$，定义
  \[
  [x] = x + W = \{ x + w \mid w \in W \}
  \]
  为 $W$ 沿 $x$ 的**平移**。

- 定义
  \[
  V / W = \{ [x] \mid x \in V \}
  \]
  为 $W$ 的所有平移的集合。

- 定义 $V / W$ 中的加法如下：对 $x, y \in V$，定义
  \[
  [x] + [y] = [x + y].
  \]
  可以验证这是良好定义的：若 $[x] = [x']$，$[y] = [y']$，
  则 $[x + y] = [x' + y']$。

- 定义 $V / W$ 中的数乘如下：对 $c \in k$ 和 $x \in V$，定义
  \[
  c [x] = [c x].
  \]
  可以验证这是良好定义的：若 $[x] = [x']$，
  则 $[c x] = [c x']$。

可以验证，这样定义的 $V / W$ 确实是向量空间。
:::

## 例子

::: example [平凡情形]
设 $V$ 是向量空间。则 $V / V \simeq 0$，
$V / 0 \simeq V$，这里 $0$ 表示[[零向量空间]]。
:::

::: example [直和的商]
设 $V$、$W$ 是向量空间。则 $(V \oplus W) / V \simeq W$，
其中 $V$ 自然地视为 $V \oplus W$ 的子空间。
:::

::: example [平面除以直线]
设 $L \subset \mathbb{R}^2$ 是经过原点的直线。
则 $\mathbb{R}^2 / L$ 的元素是平行于 $L$ 的直线。
取另一条经过原点、不同于 $L$ 的直线 $L'$，
则每条平行于 $L$ 的直线与 $L'$ 恰好交于一点，
这给出同构 $\mathbb{R}^2 / L \simeq L' \simeq \mathbb{R}$。
:::

::: example [多项式的截断]
设 $k$ 是域，$n$ 是自然数。
在多项式空间 $k[x]$ 中，
所有被 $x^n$ 整除的多项式构成子空间 $x^n k[x]$。
商空间 $k[x] / x^n k[x]$ 的元素由多项式的前 $n$ 项系数决定，
它的维数为 $n$，以 $[1], [x], \dotsc, [x^{n-1}]$ 为基。
:::

::: example [函数在一点的值]
设 $X$ 是[[拓扑空间]]，$p \in X$。
在连续函数空间 $C (X)$ 中，
所有满足 $f (p) = 0$ 的函数构成子空间 $W$。
映射 $f \mapsto f (p)$ 给出同构 $C (X) / W \simeq \mathbb{R}$：
两个函数在 $C (X) / W$ 中相等，当且仅当它们在 $p$ 处的值相等。
:::

## 性质

### 基本性质

设 $k$ 是域，$V$ 是 $k$-向量空间，$W \subset V$ 是[[子向量空间]]。

- 投影映射 $\pi \colon V \to V / W$ 是[[线性映射]]，且是[[满射]]，其核为 $W$。
  因此有向量空间的[[短正合列]]
  \[
  0 \longrightarrow W \longrightarrow
  V \overset{\pi}{\longrightarrow}
  V / W \longrightarrow 0 .
  \]

- 若 $W' \subset V$ 是 $W$ 的补空间，即 $V = W \oplus W'$，
  则 $\pi$ 限制为同构 $W' \simeq V / W$。
  补空间总是存在的，见[[子向量空间]]。

### 万有性质

<see>[[万有性质]]</see>

::: proposition [万有性质] {@prop:universal}
设 $k$ 是域，$V$ 是 $k$-向量空间，$W \subset V$ 是子向量空间，
$\pi \colon V \to V / W$ 是投影。
则对任意 $k$-向量空间 $U$ 及满足 $f (W) = 0$ 的线性映射 $f \colon V \to U$，
存在唯一的线性映射 $\bar{f} \colon V / W \to U$，使得 $f = \bar{f} \circ \pi$。
:::

::: proof
由于 $\pi$ 是满射，$\bar{f}$ 若存在则必为 $\bar{f} ([x]) = f (x)$。
这是良好定义的：若 $[x] = [x']$，则 $x - x' \in W$，
故 $f (x) - f (x') = f (x - x') = 0$。
容易验证 $\bar{f}$ 是线性的。
:::

### 维数

设 $W$ 是向量空间 $V$ 的子向量空间，$W'$ 是 $W$ 的补空间。
由于 $V = W \oplus W'$ 且 $W' \simeq V / W$，有
\[
\dim V = \dim W + \dim (V / W) .
\]
商空间的维数 $\dim (V / W)$ 称为 $W$ 在 $V$ 中的 **[[余维数]]**。
例如，[[超平面]]是余维数为 $1$ 的子空间。

### 子空间的对应

::: proposition [对应定理]
设 $W$ 是向量空间 $V$ 的子向量空间，$\pi \colon V \to V / W$ 是投影。
则 $U \mapsto \pi (U)$ 给出以下两者之间保持包含关系的一一对应：

- $V$ 中包含 $W$ 的子向量空间 $U$；

- $V / W$ 的子向量空间。

其逆映射为 $\bar{U} \mapsto \pi^{-1} (\bar{U})$，且有 $\pi (U) \simeq U / W$。
:::

::: proof
若 $W \subset U$，则 $\pi^{-1} (\pi (U)) = U + W = U$；
由于 $\pi$ 是满射，对 $V / W$ 的任意子空间 $\bar{U}$，
有 $\pi (\pi^{-1} (\bar{U})) = \bar{U}$。
最后，$\pi$ 在 $U$ 上的限制是满射 $U \to \pi (U)$，其核为 $W$，
由[[第一同构定理]]得 $\pi (U) \simeq U / W$。
:::

```terms
商向量空间:
  en: quotient vector space
  fr: espace vectoriel quotient :m
  de: Quotientenvektorraum :m
```
