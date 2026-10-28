---
title: 收敛空间
categories: [一般拓扑]
---

<problems>
- “通过网”“例子”“性质”各节需要扩充。
</problems>

**收敛空间**是[[拓扑空间]]的一种推广，
在这种空间上，我们只关心[[序列]]（确切地说，[[滤子]]或[[网]]）的[[收敛]]的概念。

所有拓扑空间都是收敛空间。
有一些收敛的概念无法从拓扑空间得到，
例如[[几乎处处收敛]]，
以及[[概率论]]中的[[依测度收敛]]。
这些收敛性也可以通过收敛空间刻画。

## 定义

### 通过滤子

::: definition [收敛空间] {@def-convergence-space}
**收敛空间**是指一个集合 $X$，
带有一个[[二元关系]]
\[
{\to} \ \subset \ \mathscr{F} X \times X,
\]
其中 $\mathscr{F} X$ 是 $X$ 上所有[[滤子]]的集合，满足以下条件：
我们记 $F \to x$ 当且仅当 $(F, x) \in {\to}$，
并称滤子 $F$ **收敛**到 $x$，或 $x$ 是 $F$ 的**极限**。则

- 对任何 $x \in X$，$x$ 处的[[主滤子]]
  $F_x = \{ A \subset X \mid x \in A \}$
  收敛到 $x$。

- 如果 $F \subset G$ 且 $F \to x$，那么 $G \to x$。

- 如果 $F \to x$ 且 $G \to x$，那么 $F \cap G \to x$。

以上条件也可以总结成一句非常拗口的话：

- 对任何 $x \in X$，
  所有收敛到 $x$ 的滤子构成主滤子 $F_x$ 的子滤子构成的滤子的一个子滤子。

:::

::: definition [连续映射] {@def-continuous-map}
设 $X, Y$ 是收敛空间（@def-convergence-space）。
则 $X, Y$ 之间的**连续映射**是指集合间映射 $f \colon X \to Y$，
使得对 $X$ 上任意滤子 $F$ 以及任意 $x \in X$，
\[
F \to x \implies f_* (F) \to f (x),
\]
其中 $f_*$ 是[[滤子的前推]]。
:::

::: definition [收敛空间范畴]
所有收敛空间（@def-convergence-space）
和它们之间的连续映射（@def-continuous-map）
构成一个[[范畴]]，记为 $\mathsf{Conv}$。
:::

### 通过网

## 例子

## 性质

```terms
收敛空间:
  en: convergence space
```
