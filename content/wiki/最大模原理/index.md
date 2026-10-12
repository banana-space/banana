---
title: 最大模原理
aliases: [极大模原理]
categories: [复分析]
notices:
  - name: 消歧义
    about: '[[全纯函数]]的性质'
    see:
      - topic: '[[偏微分方程]]论中的一般性质'
        page: 最大值原理
navboxes: [复分析]
---

**最大模原理**，或称**极大模原理**，
是[[复分析]]中的结论。
它大致说明，若一个[[全纯函数]]不是[[常值函数]]，
则其模最大的点不可能在其定义域的内部取到，
只能在其边界取到。

## 陈述

::: theorem [最大模原理]
设 $U \subset \mathbb{C}$ 是[[连通]]开集，$f \colon U \to \mathbb{C}$ 是[[全纯函数]]。
如果存在 $z_0 \in U$，使得 $|f(z_0)| \geq |f(z)|$ 对
任何 $z \in U$ 成立，则 $f$ 是[[常值函数]]。
:::

下面的推论说明如果全纯函数在边界有定义，则最大模应该在边界取到。

::: corollary [最大模原理]
设 $U \subset \mathbb{C}$ 是[[有界集|有界]]连通开集，
映射 $f \colon \bar U \to \mathbb{C}$
在 $\bar U$ 上[[连续映射|连续]]，在 $U$ 上全纯，且不是常值函数。则 $|f(z)|$
的最大值必然在 $\partial U$ 内取到。
:::

对 $1/f$ 使用最大模原理得到下面的推论。

::: corollary [最小模原理]
设 $U \subset \mathbb{C}$ 是有界连通开集，
映射 $f \colon \bar U \to \mathbb{C}$
在 $\bar U$ 上连续，在 $U$ 上全纯，不是常值函数，且没有零点。则 $|f(z)|$
的最小值必然在 $\partial U$ 内取到。
:::

## 证明

### 用平均值原理

不妨设 $f(z_0) \geq 0$。（否则，设 $f(z_0) = \mathrm e^{\mathrm i\theta} |f(z_0)|$，
考虑 $g(z) = \mathrm e^{-\mathrm i\theta} f(z)$ 即可）记 $S = \{z \mid f(z) = f(z_0)\}$，
因为 $f$ 是[[连续]]的，所以 $S$ 是[[闭集]]。下面证明 $S$ 是[[开集]]。对任意的 $w \in S$，
取 $r > 0$ 使得 $B_r(w) \subseteq U$。再取 $0 < r' < r$。由[[平均值原理]]：
\[
f(z_0) = f(w) = \left|\frac{1}{2\pi} \int_{0}^{2\pi} f(w + r'\mathrm e^{\mathrm it}) \, \mathrm{d} t\right|
\leq \frac{1}{2\pi}\int_{0}^{2\pi} |f(w + r'\mathrm e^{\mathrm it})| \, \mathrm{d} t \leq f(z_0).
\]
因此，不等式的等号应该成立，即
\[
f(w + r'\mathrm e^{\mathrm it}) = |f(w + r'\mathrm e^{\mathrm it})| = f(z_0)
\]
对任何 $t\in\mathbb{R}$ 和 $0 < r' < r$成立。故 $B_r(w) \subseteq S$，也就
证得 $S$ 是开集。如此，$S$ 在连通的 $U$ 中同时是开集和闭集，所以 $S = U$。
故 $f$ 为常值函数。

### 用开映射定理

假设 $f$ 不是常值函数，根据[[开映射定理 (复分析)|开映射定理]]，$V = f(U)$ 是开集。
令 $w_0 = f(z_0) \in V$，
则存在 $\delta > 0$ 使得 $B_\delta(w_0) \subset V$。如此必有 $w_1 \in B_\delta(w_0) \subset V$
使得 $|w_1| > |w_0|$。设 $w_1 = f(z_1), z_1 \in U$，则
\[
|f(z_1)| = |w_1| > |w_0| = |f(z_0)|,
\]
矛盾。

## 应用

::: theorem [Schwarz 引理]
设 $D = B_1(0)$ 为 $\mathbb{C}$ 中的单位圆盘。如果全纯函数 $f \colon D \to D$ 满足
$f(0)=0$，且对任意 $z \in D$ 有 $|f(z)| \leq 1$，则下列结论成立：

1. 对任意 $z \in D$，有 $|f(z)| \leq |z|$。

2. $|f'(0)| \leq 1$。

3. 若存在点 $z_0 \in D \setminus \{0\}$ 使得第一项
   等号成立，或者第二项等号成立，则存在 $\theta\in\mathbb{R}$ 使得
   $f(z) = \mathrm e^{\mathrm i\theta} z$。

:::

::: proof
将 $f$ 展开为 [[Taylor 级数]]
\[
f(z) = a_1 z + a_2 z^2 + \cdots = z(a_1 + a_2 z + \cdots) = zg(z),
\]
其中 $g$ 为全纯函数，且 $g(0) = a_1 = f'(0)$。
对任意 $r \in \mathopen{]} 0,1 \mathclose{[}$，
当 $|z| = r$ 时，有
\[
|g(z)| = \frac{|f(z)|}{|z|} \leq \frac{1}{r},
\]
由极大模原理，对任意 $z \in B_r(0)$，有 $|g(z)| \leq 1/r$。
令 $r \to 1^{-}$，得到 $|g(z)| \leq 1$ 在 $D$ 中成立，即 $|f(z)| \leq |z|$。
第一项得证。进一步：$|f'(0)| = |g(0)| \leq 1$，第二项得证。

现在考虑第三项。如果所说的 $z_0$ 存在，则 $|g(z_0)| = 1$，即 $g$ 在
内点处取最大模 $1$，从而是常数。所以 $g(z) = \mathrm e^{\mathrm i\theta}$。
而 $|f'(0)| = 1$ 也就是 $|g(0)| = 1$，所以同理可得第三项。
:::

借助 Schwarz 引理，可以进一步地求出单位圆盘的全纯[[自同构群]]
$\operatorname{Aut}(D)$。这引出单位圆盘的 [[Poincaré 度量]]
问题。

也可以用最大模原理证明[[代数基本定理]]。

::: theorem [代数基本定理]
设 $p(z)$ 是次数大于零的复系数[[多项式]]，则存在 $z_0\in\mathbb{C}$
使得 $p(z_0) = 0$。
:::

::: proof
反设 $p$ 没有零点。因为 $p$ 的次数大于零，所以 $\lim_{z\to\infty} p(z) = \infty$。
于是，存在 $r > 0$，使得 $|z| \geq r$ 时，$|p(z)| > |p(0)|$。
令 $D = B_r(0)$，则 $p$ 在 $\bar D$ 内的最小模必然在 $\partial D$ 取到，
但这与假设矛盾，因为 $|p(0)|$ 更小。
:::

```terms
最大模原理:
  en: maximum modulus principle
  ja: 最<さい>大<だい>絶<ぜっ>対<たい>値<ち>の原<げん>理<り>
  de: Maximumprinzip
  fr: principe du maximum
  ko: 최대 절댓값 원리
```
