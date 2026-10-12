---
title: 交换化
categories: [群论]
navboxes: [群论]
---

在[[群论]]中，**交换化**是一种将[[群]]变成[[交换群]]的构造。
它满足以下[[泛性质]]：
从某个群出发到任何交换群的[[群同态]]都唯一地[[穿过]]前者的交换化。

## 定义

::: definition
对群 $G$，其**交换化** $G^{\mathrm{ab}} = G / [G, G]$
是它关于它[[换位子群]]的[[商群|商]]。
:::

::: proposition
群 $G$ 的交换化 $G^{\mathrm{ab}}$ 的确是交换群。
:::

::: proposition [交换化的泛性质]
对群 $G$，交换群 $A$，以及[[群同态]] $f \colon G \to A$，
存在唯一的群同态
$\tilde{f} \colon G^{\mathrm{ab}} \to A$ 使如下图表交换：
\[
\begin{tikzcd}
  G \ar[d] \ar[r, "f"] & A \\
  {G^{\mathrm{ab}}} \ar[ur, dotted, "\tilde{f}"']
\end{tikzcd}
\]
换言之，交换化给出函子
$(-)^{\mathrm{ab}} \colon \mathsf{Grp} \to \mathsf{Ab}$，它是[[遗忘函子]]
$\mathsf{Ab} \to \mathsf{Grp}$ 的左[[伴随函子|伴随]]。
:::

## 例子

- 交换群的交换化是其本身。

- 对 $n \ge 2$，[[置换群]] $\mathfrak{S}_n$ 的交换化是 $2$ 阶循环群，
  映射 $\mathfrak{S}_n \to \mathbb{Z}/2\mathbb{Z}$ 由符号映射 $\mathrm{sgn}$ 给出。

- [[交错群]] $\mathfrak{A}_4$ 的交换化是 $3$ 阶循环群。

- 非交换的[[单群]]的交换化是[[平凡群]]。特别地，$n \ge 5$ 时 $\mathfrak{A}_n$ 的
  交换化是平凡群。

- 对[[连通]][[拓扑空间]] $X$，其[[基本群]]的交换化是其 $1$ 次
  整系数[[普通同调]]群，即 $\pi_1(X)^{\mathrm{ab}} \simeq H_1(X; \mathbb{Z})$。

```terms
交换化:
  en: abelianization
```
