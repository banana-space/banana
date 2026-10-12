---
title: 共尾类
aliases: [共尾数]
categories: [集合论]
navboxes: [集合论]
---

[[有向集]]的**共尾类** $\operatorname{cf}(X)$
是它的共尾子集的[[势]]的最小值。
例如，有最大元的有向集的共尾类是 $1$。
[[自然数集]] $\mathbb{N}$ 的一个子集是共尾的当且仅当它是无限集，
从而它的共尾类是 $\omega$。
这表明 $\omega = \mathbb{N}$ 是[[正则基数]]。

注意这定义依赖选择公理，因为它假定基数构成良序。
但若只谈论[[良序集]]（如[[序数]]）的共尾类，则不需要选择公理。

## 定义

::: definition [共尾子集]
[[有向集]] $X$ 的子集 $Y$ 称为**共尾子集**，
如果对任意 $x \in X$，存在 $y \in Y$ 使得 $x \leq y$。
:::

若把偏序集看成（经典）范畴，则这条件等价于含入映射作为[[函子]]共尾。

::: definition [共尾类]
[[有向集]] $X$ 的**共尾类**是它的全体共尾子集的[[势]]的最小值，
记为 $\operatorname{cf}(X)$。
:::

## 基本性质

以下命题表明，为计算共尾类，我们只需计算任何共尾子集的共尾类。

::: lemma
- 有向集的共尾子集仍是有向集。
- 设 $Z \subset Y \subset X$ 为有向集。
  则 $Z$ 在 $X$ 中共尾，
  当且仅当 $Z$ 在 $Y$ 中共尾且 $Y$ 在 $X$ 中共尾。

:::

::: proposition
设 $Y \subset X$ 为有向集的共尾子集。
则 $\operatorname{cf}(X) = \operatorname{cf}(Y)$。
:::

::: proof
$Y$ 的共尾子集都是 $X$ 的共尾子集，
故 $\operatorname{cf}(Y) \ge \operatorname{cf}(X)$。
反之，设 $Z$ 为 $X$ 共尾子集。
对 $Z$ 每个元素 $z$ 选取一个 $Y$ 的元素 $y_z > z$。
令 $Z' = \{y_z \mid z \in Z\} \subset Y$，
则 $Z'$ 在 $Y$ 中共尾，且 $|Z'| \le |Z|$。
于是有另一侧不等式 $\operatorname{cf}(X) \ge \operatorname{cf}(Y)$。
:::

上述证明中，若 $X$ 为良序集，
则 $y_z$ 有典范的选择，即 $Y$ 中大于 $z$ 的元素的最小值。
从而此时不需要选择公理。

## 序数

序数的共尾类即它作为偏序集的共尾类。
基数的共尾类是它作为序数的共尾类。

简单观察可得，$0$ 的共尾类为 $0$，
而后继序数的共尾类为 $1$。

极限序数 $\alpha$ 的子集 $Y$ 是共尾子集当且仅当 $\alpha = \bigcup Y$。

序数的共尾类也可等价地定义为共尾子集的[[序型]]（作为序数）的下确界。
由基数的定义，只需证一侧不等式，即以下命题：

::: proposition
设 $\alpha$ 为序数，
$\beta = \operatorname{cf}(\alpha)$ 看作序数。
则存在严格单调映射 $\beta \to \alpha$，使其像为共尾子集。
:::

::: proof
取 $\alpha$ 的势为 $\beta$ 的共尾子集 $Y$，
取双射 $f\colon \beta \to Y$。令
$$
Z = \{z \in \beta \mid \forall y \in z, f(y) < f(z)\}.
$$

下断言 $f$ 在 $Z$ 上的限制的像是 $\alpha$ 的共尾子集。
若断言成立，则容易发现 $f|_Z$ 严格单调。
由于 $\operatorname{cf}(\alpha) = \beta$，
知 $|Z| \ge \beta$，故 $Z$ 的序型为 $\beta$。
从而保序双射 $\beta \to Z$ 与 $f|_Z$ 的复合即为所求。

下只需证断言。任取 $\gamma \in \alpha$，
欲证存在 $z \in Z$ 使得 $f(z) \ge \gamma$。
现取最小的 $z \in \beta$ 使得 $f(z) \ge \gamma$，
则对 $y \in z$ 有 $f(y) < \gamma \le f(z)$，
故 $z \in Z$，即为所求。
:::

::: corollary
序数的共尾类都为正则基数。
:::

::: proof
取严格单调共尾映射 $\operatorname{cf}(\alpha) \to \alpha$，
知 $\alpha$ 与 $\operatorname{cf}(\alpha)$ 共尾类相同，
从而知 $\operatorname{cf}(\alpha)$ 正则。
:::

```terms
共尾类:
  en: cofinality
```
