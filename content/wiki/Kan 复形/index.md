---
title: Kan 复形
categories: [同伦代数]
navboxes: [同伦代数]
---

**Kan 复形**是一类[[单纯集]]。
在单纯集中，[[单形]]是具有方向的，即每个单形都带有顶点的排序。
而在 Kan 复形中，单形不再具有方向，因为对每个单形而言，
更改其顶点的排序所得到的单形也在该 Kan 复形中。
因此，Kan 复形具有更加接近[[拓扑空间]]的性质。

例如，任何[[拓扑空间]] $X$ 的[[奇异单纯集]] $\operatorname{Sing} (X)$
都是 Kan 复形。

在[[高阶范畴论]]中，Kan 复形是 [[$\infty$-群胚]]的一种模型。
具体地说，Kan 复形中的顶点，即 $0$-单形，对应 $\infty$-群胚的[[对象]]，
而对 $n > 0$，其 $n$-单形对应 $\infty$-群胚的 [[$n$-态射]]。
Kan 复形中，单形的无向性对应于 $\infty$-群胚中任何 $n$-态射都可逆这一性质。

## 定义

对整数 $0 \leq i \leq n$，
记 $\Lambda_i [n] \subset \Delta [n]$ 为第 $i$ 个 $n$ 维[[角形]]，
即从单纯集 $\Delta [n]$ 中去除其内部及第 $i$ 个顶点所对的面，
而得到的子单纯集。

::: definition [Kan 复形]
称[[单纯集]] $X$ 为 **Kan 复形**，若满足以下条件：

- （**角形延拓性质**）
  对任意 $0 \leq i \leq n$，及任意映射
  \[
  f \colon \Lambda_i [n] \longrightarrow X,
  \]
  存在映射 $\tilde{f} \colon \Delta [n] \to X$，
  使得下述图表交换：
  \[
  \begin{tikzcd}
    \Lambda_i [n] \ar[r, "f"] \ar[d, hook]
    & X
    \\ \Delta [n] \rlap{ .} \ar[ur, dashed, "\tilde{f}"']
  \end{tikzcd}
  \]

:::

```terms
Kan 复形:
  en: Kan complex
```
