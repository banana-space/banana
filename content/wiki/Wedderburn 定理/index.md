---
title: Wedderburn 定理
categories: [代数论]
navboxes: [非交换代数]
---

::: convention
在本文中，

- [[环]]和代数不必交换。[[理想]]、[[模]]若不加说明默认为左理想、左模。
:::

**Wedderburn 定理**是说，[[域]]上有限维[[中心单代数]]都是[[除环]]上[[矩阵]]环。

## 叙述与证明

::: theorem [Wedderburn] {@Wedderburn}
设 $k$ 是域，$A$ 是 $k$ 上有限维中心单代数。则存在 $k$ 上除环 $D$，中心为 $k$，使
$A = \mathrm{Mat}_n(D)$。
:::

::: lemma {@weak-lemma}
设 $A$ 是 $k$ 上有限维代数，$E$ 是[[半单模|半单]] $A$-模。记 $K = \mathrm{End}_A(E)$，
那么可将 $E$ 看作 $K$-模，记 $B = \mathrm{End}_K(E)$。那么对 $x \in E$ 有 $Bx \subseteq Ax$。
:::

::: proof
记 $F = Ax$，它是 $E$ 的 $A$-子模，由半单性存在直和分解 $E = F \oplus F'$，记 $\pi$
是 $F \oplus F' \to F$ 的投影。那么 $\pi$ 为 $A$-线性，故 $\pi \in K$。于是对任意
$b \in B$，由 $b$ 为 $K$-线性有 $\pi(bx) = b(\pi x) = bx$（由 $x \in F$），推出 $bx \in F$。
:::

::: lemma {@strong-lemma}
条件同 @weak-lemma，设 $E$ 有限生成，$A$ 在 $E$ 上作用忠实，那么 $A = B$。
:::

::: proof
考虑将 $E$ 换成 $E' = E^{\oplus n}$，那么 $K' = \mathrm{End}_A(E') = \mathrm{Mat}_n(K)$，于是
$B = \mathrm{End}_K(E)$ 的所有元素还与 $K'$ 所有元素交换，
故 $B \subseteq B' = \mathrm{End}_{K'}(E')$。
于是对 $E'$ 用 @weak-lemma 得到对任何 $(x_1,\ldots,x_n) \in E^{\oplus n}$，
对任何 $b \in B$ 存在 $a \in A$ 使得 $a(x_1, \ldots, x_n) = b(x_1, \ldots, x_n)$。
选取 $x_1,\ldots,x_n$ 为 $E$ 一组生成元即得 $B \subseteq A$，但显然 $A \subseteq B$，
即证。
:::

::: proof [@Wedderburn 的证明]
取一个单 $A$-模 $E$：这总可以做到，因为可取 $A$ 的非零理想中极小者，$k$ 上有限维保证其存在。
$A$ 在 $E$ 上作用忠实：因为 $A \to \mathrm{End}_k(E)$ 的[[核 (代数)|核]]是个双边理想，$1$ 不在其中，
故这个核为 $0$。[[Schur 引理]]给出 $K = \mathrm{End}_A(E)$ 为[[除环]]，设 $E$ 作为 $K$-模同构于
$K^{\oplus n}$，那么由 @strong-lemma 得到 $A = \mathrm{End}_K(E) = \mathrm{Mat}_n(K^{\rm op})$
（取[[反环]]是因为 $\mathrm{End}_K(K) = K^{\rm op}$）。
:::

```terms
Wedderburn 定理:
  en: Wedderburn's theorem
  fr: théorème de Wedderburn
```
