---
title: Stiefel–Whitney 类
categories: [示性类]
navboxes: [向量丛与 K 理论]
---

<problems>
- “例子”一节中，$\mathbb{R}\mathrm{P}^n$ 上重言丛 $\mathcal{O}(-1)$ 的全 Stiefel–Whitney 类似乎应为 $1+a$；$(1+a)^{n+1}$ 是切丛 $\mathrm{T}\mathbb{R}\mathrm{P}^n$ 的全 Stiefel–Whitney 类。
</problems>

在[[代数拓扑]]中，
**[[Stiefel]]–[[Whitney]] 类**是对[[实数|实]][[向量丛]]定义的[[示性类]]。
对秩 $n$ 的实向量丛 $E \to X$ 而言，
其第 $k$ 个 Stiefel–Whitney 类为模 $2$ 系数的[[普通上同调]]类
\[
w_k (E) \in H^k (X; \mathbb{Z} / 2\mathbb{Z}),
\]
其中 $k = 1, \dotsc, n$。

这些示性类反映了向量丛 $E$ 的性质。
从某种意义上说，它们反映了 $E$ 的“扭曲程度”。
例如，若 $E$ 是[[平凡丛]]，则其所有 Stiefel–Whitney 类均为 $0$；
不过反之并不成立，例如[[球面]] $S^n$ 的[[切丛]]的 Stiefel–Whitney 类也均为 $0$。

## 定义

::: definition [Stiefel–Whitney 类]
对[[自然数]] $n$，
记 $\mathrm{BO}(n)$ 为 $n$ 阶[[正交群]]的[[分类空间]]，
$H^\bullet(\mathrm{BO}(n), \mathbb{Z}/2\mathbb{Z})$ 为其模 $2$ 系数上同调环。
对自然数 $k$，
定义 **Stiefel–Whitney 类** $w_k \in H^k(\mathrm{BO}(n), \mathbb{Z}/2\mathbb{Z})$
为以下性质唯一决定的上同调类：

- $w_0 = 1$，且当 $k > n$ 时，$w_k = 0$。

- 当 $n = 1$ 时，$w_1 \neq 0$。

- 设 $f$ 为映射 $\mathrm{O}(m) \times \mathrm{O}(n) \to \mathrm{O}(m+n)$
  诱导的映射 $f \colon \mathrm{BO}(m) \times \mathrm{BO}(n) \to \mathrm{BO}(m+n)$，
  则对任意 $k$ 有
  $$
  f^*(w_k) = \sum_{j=0}^k w_j \boxtimes w_{k-j}.
  $$

:::

::: definition [向量丛的 Stiefel–Whitney 类]
设 $X$ 为[[仿紧空间]]，$p \colon E \to X$ 是 $X$ 上的 $n$ 维实向量丛。
由于 $\mathrm{BO}(n)$ 分类实向量丛，
$E$ 对应（同伦意义下唯一的）映射 $f_E \colon X \to \mathrm{BO}(n)$。
定义 $E$ 的第 $k$ 个**Stiefel–Whitney 类**为
$$
w_k(E) = f_E^*(w_k) \in H^k(X, \mathbb{Z}/2\mathbb{Z}).
$$

定义 $E$ 的**全 Stiefel–Whitney 类**为
$$
w(E) = 1 + w_1(E) + \dots + w_n(E) \in H^\bullet(X, \mathbb{Z}/2\mathbb{Z}).
$$
:::

除此之外，Stiefel–Whitney 类也可以用公理刻画，见 @prop-公理。

::: remark
事实上有
$H^\bullet(\mathrm{BO}(n), \mathbb{Z}/2\mathbb{Z}) \cong (\mathbb{Z}/2\mathbb{Z})[w_1, \dots, w_n]$，
因此 $w_1, \dots, w_n$ 的多项式给出了实向量丛的所有模 $2$ 系数示性类。
:::

## 例子

- 平凡丛的全 Stiefel–Whitney 类为 $1$。

- 对正整数 $n$，实[[射影空间]] $\mathbb{R}\mathrm{P}^n$ 上的[[重言丛]] $\mathcal{O}(-1)$
  的全 Stiefel–Whitney 类为 $(1+a)^n$，
  其中 $a$ 是 $H^1(\mathbb{R}\mathrm{P}^n, \mathbb{Z}/2\mathbb{Z})$ 中的唯一非零元。

- 对正整数 $n$，[[球面]] $S^n$ 的[[切丛]]的全 Stiefel–Whitney 类为 $1$，
  即对所有 $k > 0$ 有 $w_k(\mathrm{T}S^n) = 0$。

## 性质

由定义易知：

- （函子性）
  对连续映射 $f \colon Y \to X$ 及 $X$ 上的实向量丛 $E$，
  有 $w(f^*(E)) = f^*(w(E))$。

- （Whitney 乘积公式）
  设 $E, E'$ 是 $X$ 上的实向量丛，则 $w(E \oplus E') = w(E) \cup w(E')$。

::: proposition [公理刻画] {@prop-公理}
Stiefel–Whitney 类可以用如下公理唯一刻画：

- 对任意仿紧空间 $X$ 上的有限维实向量丛 $E$，
  $w(E) = 1 + w_1(E) + \dots \in H^\bullet(X, \mathbb{Z}/2\mathbb{Z})$。

- 设 $\gamma = \mathcal{O}(-1)$ 是 $\mathbb{R}\mathrm{P}^1$ 上的重言线丛，
  则 $w_1(\gamma) \neq 0$。

- 若 $k > \operatorname{rank} E$，则 $w_k(E) = 0$。

- 函子性，即对连续映射 $f \colon Y \to X$ 及 $X$ 上的实向量丛 $E$，
  有 $w(f^*(E)) = f^*(w(E))$。

- Whitney 乘积公式，即若 $E, E'$ 是 $X$ 上的实向量丛，
  则 $w(E \oplus E') = w(E) \cup w(E')$。

:::

::: proposition
设 $E$ 是 $X$ 上的 $n$ 维实向量丛，且 $E$ 中存在 $n-k$ 个处处线性无关的截面，
则对任意 $j > k$ 有 $w_j(E) = 0$。
:::

::: proposition [与 Euler 类的关系]
设 $E$ 是仿紧空间 $X$ 上的 $n$ 维定向实向量丛，
$e(E) \in H^n(X, \mathbb{Z})$ 是 $E$ 的[[Euler 类]]，则
$$
w_n(E) = e(E) \bmod 2.
$$

一般地，即使 $E$ 未必可定向，
若 $e(E) \in H^n(X, \mathbb{Z}/2\mathbb{Z})$ 是 $E$ 的 $\mathbb{Z}/2\mathbb{Z}$-定向的 Euler 类，
则 $e(E) = w_n(E)$。
:::
