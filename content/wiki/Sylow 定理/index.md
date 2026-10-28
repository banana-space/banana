---
title: Sylow 定理
aliases: [Sylow 子群]
categories: [有限群论]
---

<problems>
- “应用”一节需要扩充。
</problems>

**[[Ludvig Sylow|Sylow]] 定理**
是一组关于[[有限群]]的结论。
对[[素数]] $p$ 而言，有限群 $G$ 的 **Sylow $p$-子群**
是指 $G$ 的 $p^n$ 阶[[子群]]，
其中 $p^n \mid |G|$ 但 $p^{n+1} \nmid |G|$，
而 Sylow 定理描述了 Sylow 子群的存在性及其性质。

## 定理与证明

在本节中，固定以下假设：
设 $G$ 是[[有限群]]，$p$ 是素数，且 $|G| = p^n m$，
其中 $n$ 是非负整数，$m$ 是与 $p$ 互素的正整数。

::: definition [Sylow 子群]
在上述假设下，
[[子群]] $H \subset G$ 称为 **Sylow $p$-子群**，如果
\[
|H| = p^n.
\]
更一般地，$|H|$ 如果是 $p$ 的幂，就称为 **$p$-子群**。
:::

::: theorem [Sylow 第一定理]
设 $k\le n$，则 $G$ 存在 $p^k$ 阶子群。特别地 Sylow $p$-子群存在。
:::

::: proof
先证明 Sylow $p$-子群的存在性。
记 $U = \{ X \subset G \mid |X| = p^n \}$
为 $G$ 的 $p^n$ 元子集之集。
考虑特征 $p$ 的素域 $F_p$ 上多项式 $(1+ x)^{p^n m}= (1+ x^{p^n})^m$ 中 $x^{p^n}$ 的系数，有
\[
|U| = \binom{p^n m}{p^n} \equiv m \pmod p.
\]
因此，$p \nmid |U|$。
而 $G$ 通过左乘作用于 $U$，
故存在轨道 $O \subset U$ 使得 $p \nmid |O|$。
取 $X \in O$，设 $H \subset G$ 是 $X$ 的稳定子，
从而 $|O| = [G : H]$，故 $p^n \mid |H|$。
另一方面，取 $x \in X$，则 $H x \subset X$，
从而 $|H| = |H x| \leq |X| = p^n$。
因此，$|H| = p^n$，故 $H$ 是 $G$ 的 Sylow $p$-子群。

为证明 $G$ 存在 $p^k$ 阶子群（$k\le n$），只须证明 $p^n$ 阶群存在 $p^{n-1}$ 阶子群。
对 $n$ 归纳，如果 $p^n$ 阶群 $H$ 交换，由有限 Abel 群结构定理知 $p^{n-1}$ 阶子群存在。
如果 $H$ 不交换，熟知 $p$-群中心非平凡，所以 $\{1\}\subsetneqq Z(H) \subsetneqq H$。
由归纳假设，$H/ Z(H)$ 有指数为 $p$ 的子群，它在同态 $H\to H/ Z(H)$ 下的完全原像是
$H$ 的 $p^{n-1}$ 阶子群。
:::

::: theorem [Sylow 第二定理] {@thm-第二}
(1) $G$ 的 $p$-子群包含于某个 Sylow $p$-子群。
(2) $G$ 的所有 Sylow $p$-子群都[[共轭子群|共轭]]。
:::

::: proof
设 $H_1\subset G$ 为 Sylow $p$-子群，$H_2$ 为 $p$-子群。
则 $H_2$ 通过左乘作用于 $H_1$ 的左陪集之集 $G / H_1$。
该作用的轨道大小必为 $p$ 的幂，
从而其不动点（即 $1$ 个元素的轨道）的个数模 $p$ 同余于
$|G / H_1|$。
因为 $p \nmid |G / H_1|$，
所以该作用存在不动点，设为 $x H_1$。
则对任意 $y \in H_2$，有 $y x H_1 = x H_1$，
也即 $x^{-1} y x H_1 = H_1$，
故而 $x^{-1} y x \in H_1$。
因此 $x^{-1} H_2 x \subset H_1$，即 $H_2\subseteq x H_1 x^{-1}$，这证明了第一个断言。
对第二个断言，如果 $H_2$ 也是 Sylow $p$-子群，则 $x^{-1} H_2 x \subset H_1$
两边元素个数相等，故
$x^{-1} H_2 x = H_1$。
:::

::: theorem [Sylow 第三定理]
设 $G$ 的 Sylow $p$-子群个数为 $s$。则

- $s \mid m$。

- $s \equiv 1 \pmod p$。

:::

::: proof
设 $S$ 为所有 Sylow $p$-子群的集合，
设 $H \in S$。则 $H$ 通过共轭作用于 $S$ 上。
该作用的轨道大小必为 $p$ 的幂，
从而 $s \equiv |S^H| \pmod p$，
其中 $S^H$ 为不动点的集合。

我们说明 $S^H = \{ H \}$。
设 $K \in S^H$，则对任何 $x \in H$ 有 $x K x^{-1} = K$，
从而 $H \subset \mathrm{N}_G (K)$，
其中 $\mathrm{N}_G (K)$ 是 $K$ 的正规化子。
注意到 $H, K$ 都是 $\mathrm{N}_G (K)$ 的 Sylow $p$-子群，
故由 Sylow 第二定理（@-thm-第二），知它们共轭。
而 $K$ 是 $\mathrm{N}_G (K)$ 的正规子群，
从而 $H = K$。
这样，我们就证明了 $s \equiv |S^H| = 1 \pmod p$。

再来证明 $s \mid m$。由 Sylow 第二定理（@-thm-第二），
知 $G$ 在 $S$ 上的共轭作用只有一个轨道，
故 $s \mid |G|$。
而我们已经证明 $p \nmid s$，从而 $s \mid m$。
:::

## 应用

```terms
Sylow 定理:
  en: Sylow theorems
  de: Sylow-Sätze
  fr: théorèmes de Sylow
```
